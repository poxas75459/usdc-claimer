/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "Ee65JRp7r5xupvBezHefqTM9ttrMJFKWyhQHK5FdaZShFdjHJHgBy4Bop4gfBauqsr6sdtzPhZUeStbPfzxkm9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zURZQHJ2BHTRhavXMkFz1gfYbyVRt3iBKe5eZQ7REEpaDVpFHs5WjMdixvn5gjzcANdaFjUYVJkuWwLKDkwY1zz",
  "key1": "33yD5Yb8SQCQqJxnMtYNiEznFopdBVVN8Q4xt1RFsTgDthLd3LCaiMzN9Ak9qE6cC85Wci1p4yXVAFakDvy2iqwR",
  "key2": "2BRSja7kvChF5whddFQst7JkTb7r6Lxxi59szXRz3KtChE1LU6SxqTY6UYmhpSCBhdZrbcjcFAEC9DUvancKouQ5",
  "key3": "49ZyyyCAHiahV1kZ4yJerwWWcPBfSER65DeyznwyRgRVkWKm41Sz8fTkmXY3ZAqQ6yUR5qeZwQrfVB89pSC9ymHm",
  "key4": "5iHuYUs8Q2ftMULFxofQqzEhBjUyDWhtH6hBAMXvCVkKadjnGPzH3EyoeoMim3wCfD4za1vuAU46FsnRJMEdrb4r",
  "key5": "ETCJvyFnRZMvrPsuaDVyM8J6Psif4BWPSHFgKHQ4RRbKcfju9Mpeypxv7aseW9djoTxFeqDLGXcdMBhutAe6ijo",
  "key6": "3MwazP2b7pdkPFz3BAwhaCU7tDn7KB8tE7wGYTzoTL594Z86CqAgRUMaTYv6U8HbrD2FESAH1b2xTSuM4fbkyCzm",
  "key7": "4pzXibqdMTv3tb6jAGbLBcdW6Lffdkb7Mx3EqyRELXefpSoLr1sV8iwxpEPrUsxRisXCDAU8TzGN8nhHVXtqG6qR",
  "key8": "3z77w6TKNBez6oWd382i58FvrdQWBtBkzoN8zNNVQbTcLm35Z4ZC19nGvHrJSG2w4KrJWXAc8VYpJtduZQbQ7jto",
  "key9": "4R2JzfYpYB1XHg6zv8i8FWtted8KdS8zuHUm1d5gQtw5AcXfEiSikaJurJk4kSHUJJqhGDMYnPdD3ZRZvnqvwodm",
  "key10": "22KWejc3wi8wvYAJR5zi5gwKNWj2Zp26hHdDHxzet2LYzYJLPaSuhBAehUzzpsUPS62K1dwrRjHGsCdDsXMaFq32",
  "key11": "4VZBzUsHmE7UL7PCHNXHHQ4vU6sv1MWT4S3XpjTqqa2n2Xmvker34v1CzYGiYRTacexDnupLBR2GYmE6pnDZtY7Q",
  "key12": "4fSctpHQbLCkRoVppcZSSrVdWc5qyaG1RYpBpXUQMB7rf33Y4gpbTm32j7je2au1thamFtxLUcopNogdmGMrZsoc",
  "key13": "4cHYwYnsYbqhWNB2wQVGbNVCtjJ7JaZ1Jw9aVxqP4MfDqAJRpG2kV6XLDMZZqWxa8wCXxw8es412rYtLCwWkftH2",
  "key14": "TLb6nuATFUJuEsBPSiXQ7Ag3NSsuCkxyv5s7H1kPZHPPjRjRg8t3WtZU5Fi7C5yFq3KE2tYFw7yEtUEWarpup9K",
  "key15": "3o8g1tLrpuA17EYHZhDvTmV6m6XH19FPCKN6sVZfQKR4JqWsx7vAVr2vvN5sZpx6epKqCPReqhs5UgLGDgC1YnbJ",
  "key16": "5qXWzXv7SWNa5MH3ttaMUAaGh4XTcjB35TMxRdWCQyH4fsy5riQWHWGUjTwaff9zR7Ww73nAebNi6updZrx3s3st",
  "key17": "3h9YLPXb49a28XAoSyLBhaYgDDYjvXfa86tYbDALipv6usGmrfo875yvh2UXcPc2BDLHZkJyLgaq1BDYdVk5CmLt",
  "key18": "63rrFB9rETsS3mYU9e54WWUAuKcCJnwgQ87odwsGxx7PokTGvpT9eaf4xtb9h43LBFbujNHzUfrxcT4pcTnZkMhw",
  "key19": "2kikqH4RYzuY5GvFohFMRAUdUDYuuhBRjSMkgRSgt55gL5jqGYuu8P3kZbEAP3qFFsH8pK3toi1jMLweLX8u4SHY",
  "key20": "3Bmk5B8adCxayCy6PPbnVqCuhrqBaubgLbWo8xH3JTLWQzcFduKS8YPftVgGjhxfEoCGrLyb9YDES6ch4fHAP8AQ",
  "key21": "2zc5TDYjrLQY9B38LMjZPgEby4kVkJQzU34yEtqAr4rhJgu8ggKfJUB3312fhatyDD18sScBf9L5uB6R4qAEbwx6",
  "key22": "57Lo5TyvxQgXd1WLhVhZmVdwiij1N4VJTTvHMXcRN7yfThCvqL5Ygf5ww4w1GUYxpWCLkSjbskEwfh65xgEnnQ6S",
  "key23": "3c4jcUmZAN5GkskeDAwmbQQ1hNTMs6Q5WsYo1bhsFvZp4zf9FrwmCoHS7dNSRvh7sqyHSKv5DSbBEdnoF2jRwouQ",
  "key24": "4BTAGVjbS5u3QKiFAd8d2Ufn7pAauBv2keb7A1BQCbfXswHvrhkM8wHr34qa5snaN5QuNN5VQjujfi5im1PZYChN",
  "key25": "5ceQK2zykFJcyAsgWqNWDPzd1Cg15V6FGgnQBadqGuV55rNYHqJacRkL3V8bpnj7unBo2L65gTTuXyGwam7xXdhr",
  "key26": "3rnRZpGdDkLMbxCzenRWHyYjyZXHwcWQc6Dgi9R6GMD72qA6X8Ajeyc6qGe1are2arL1xZEvtNcukv9LjNFYTv5r",
  "key27": "37MSFBwJhGToBj2J9Q6K4BoaoHdFGFF5h486A1TK1V2doM3qq3fCjHpBDAnG9hF4HhmrsP3Qm7USMrKMSu2RnYna",
  "key28": "3yANujJDL9kTipFpFBNuNCB3LGACVuUVCvjEkn7DUgSnASHmoT7jVauoJDbq7TJiN94CehtpgM1c44MoDJUwjwqz",
  "key29": "4RT9Yc4bx11gW71rdetEGQLimNVby7rELy1YcwsbGFzLoZLAvQYYL7ymEFtVJajjRWrdH3qzDEmvxLCZFQgbA4Bo",
  "key30": "4JBVFFS1XpJbMQbKfsi3nxQP9cE1h7Ekf5nNwNjxbV42XsbdafExmC6ZwAkeQXuP1BxB1quQELPHozTK96HZAFcp",
  "key31": "3v6KzCoPVfSEhRSua2AfHwDmMewfbWLmSMuf5pdwtvBGZ8knrz2KL3p5VRN17Hf8AzxgkwXNs1NPHjdv1Ao2d7XZ",
  "key32": "5mVs3P4s51bmf4Rkj2jLaD48eJeXX69m2VEGmfBupkyMehvqkTejXUgtra66RxTCsKrJ5N79iRwsQdXTY5TQqieo"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
