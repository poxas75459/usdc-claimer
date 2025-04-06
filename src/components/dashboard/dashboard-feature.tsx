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
    "4CKeKeHnbvUi8u3LyP3wCGyvTCk8eRtn55fPft6NW4kSDeTXfqKSK576NzEQzkKam4ZCxtt1PWNdLjnjWaQA5Jpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfRa5kP22EbEWFTqaS22qt8ecTqN8BPC7vwzrTSYD9jtPnNuhFzdWQFXWJA4ZE23AZCpucVFQVYBHvWSRMSYtrm",
  "key1": "3bCg5x9eFRg8w7u277ivoj8UdfXCozFw7cVgh2tYoUfMyoMgbLBKU2wpoJgKtaWrX3hmagSJpEGqf51f67wdgMzo",
  "key2": "5Xc8RMXVy5ZAofh9MxWF34PY2FH8JiDaUGiumprf8gLY7zSY1CX1pk58NwtzccbmcvhsvwV6Bui3da3aw6bqLnVt",
  "key3": "4et7ThD2pDSSjJ1Nbg5etcn3eAGEmnT7DQBXoaxJYNaxmp5J7EZnY5kLLmPiZD7PxypcBXkWGSmyXhgrYvMPk4pZ",
  "key4": "aNTrGyrwopNaeKxeZx1VrA2t1YC5zRo13qMv9x1gut9aFiCHn2By45HwX153iJB6WoBqEcs2BeX1YXhHyzHEjYy",
  "key5": "4RXESqH4fjvm7Tg7qPhbpgFSpTkBe5E3jeqxdpGm6bvS2MSuhkUnxgEhEWurvpcY6CgM1Ao5Qr89uS7smcyPvwdW",
  "key6": "2fM462FPaXSGt8bR7v3hZsjmzNE67b7a4nJhW1azVB4QtuxZs3gANSiwpK4hR6HkUHbMV1PWyfR27Vb3UsBbA4FY",
  "key7": "4n7Fir3PtK9HPLMBsvMi2LdeSpqMmzuKh35dAMcrauk3yRWwvbNriBxVS7jodnorQZCZ1qMYcGEdkkNYAyY3Bk1s",
  "key8": "36ybazn4cZRTDjsMg45WjLmb9jpGHBdhooJWEC8Xi4EDzASLUGWizJgc7MuhDPJaa5wnSZWuQdwV9pMHUh2ctesc",
  "key9": "3E7MhVhe9og5Ps4FGcBrbVYkGUbxv5Zb1Pf9jJNfQFDRaDG3ET5ybss7NPw6YrLEuuwE6kUmh2HFKFtRTU5R66W6",
  "key10": "2nU4EWByquPF6xW6NAAgsXdVddhtEc8Q6gbbwensaacZa5GLGLDj6XPXRdbt7yJDzzqoYqnhz3GEDB54dV6CpSuW",
  "key11": "Q8ZUywtkmsfcr7bKuAwaEmKZ9HyaU8n8Ly4V2CZDJT8FWmCadrTvBuxBvDJoEbo14PuASPHKC6JqrUxvWuXNcXc",
  "key12": "4vgRooD4mLMwTVuaMQU4k1cvhshcJnBKvgKUJpi1u72tThHczsBL35jeeQhQe9HHZz1hWLYfxVdHJAe1uoMQQJi",
  "key13": "5nAEsAdJwpx98LECjKe7JMjhY7YcaDPaaa7z8ZjPVneJMd4GopHRwpkqKYa8tLyCFVU6NCoKoqPQAr1hJ4CbE3hn",
  "key14": "Ah2nsWCmKiBRmVqzHRHuQqZYxQqZvv4aBoa7e2LQLbKhtW27GAGAi36RjtmrzSjQPXHMhM9VmGYz4hWCJoNZuQM",
  "key15": "3dgL3pYuLExYRYM7WUeLuM3fMUyReq8dn3ueJuxshkgafN9impPSytbDdx7KTy2F3wKj2Sbwu85REfHxGLXEg3Ra",
  "key16": "4Vv2M9kbMGjAtqCka4htKpQr8jHV3RNRAe5EF619gPsryBFQTLR1PADyuB1gcctJypX5TMWoo42vKbANEZUr6c7Q",
  "key17": "iuDEBHkDGMFSqEZPd4q2RJbYv1r7ty6yVtHW4T3gyN9c6MFhQPvgHhWdiEkWR2J8HbPiKupHu66FUkCdPebjvty",
  "key18": "5LnHCKJNRns6sSLizHmVe1w1kRzSndrA2R67S4fQGNVH6QuuLWrYsoYEiLwnUnTg4EiqSQW8b5zndu3qGbkbAkmj",
  "key19": "2aW7NxaJukfiWBzSTzPCcbiQjnWZuJmUXUShgYZPArEMRMxuToikipL4nue8btwE1BBpENEtm8QGFMbni3YAVRVD",
  "key20": "2edUjNecpx816fE1tWQ4bjJocM7RjaA6vEk5ehixr28aV6Mu4bj485pnKLULBpiKzhJuBm8ctJFXL7yJJLe6V2nG",
  "key21": "4tfn28BeBjkAGECwwQ23WB36nCajiaTY4RV58eXEvsGzZGYTVPfbPHScWEmF9hRChcxdrk2p1qRYJcr1dYm5xVMB",
  "key22": "5Pry4HbCAagYkKKaXPnfhTPCu267WwudU7Ef3QND4Km71swacoWVNwwqCdAxWw8wJgnZhTJkPJRVfNr9AqwqyWa7",
  "key23": "4iioGwSydAbtZqzSv9FPWKHoGiqetz4SBLPPpZfJnymzASJPygFc74fVFjq3BTK19gJaDh7EsTQrPT26FM7XpuCA",
  "key24": "4fFssssV6iRQCFcSzwB5csquFHnmq45SH63qSY9Fhi5HdvxP82CivcpKbinRzNvhaC2XrorLK32dAJ3X4ACCwN4r",
  "key25": "M689GJp6pX45cYFavzs8kpmfqojxwaiyk3gycnhqH5dYcvMkafRC9PxUVsVauvG3cU195t1S7Pnbid1agZoByuk",
  "key26": "GxCYL1N6Hxdc6dN4iF9fZpFyAoPL11XDPcz2F9ZeWkEk8AKQJ15G9XbdJ4a7GAb8tcXH76tBmKQ75YbpjYMVzVg",
  "key27": "4BTnsFZBy9KYVA6HyepuUPwE537Muszc1jjUvR2W4hTGuztGVxRPZ2zmaLeAzUTWozaurTvfeP1ArbTSJkKg7Vnx",
  "key28": "jRE4RXNnq5Exnbm7RQympNPYnZfe91rN776iVfd9AsFsm8UMd85vbhnPSSAb8fnY8FP9NjgabF3i96mvnt56Qit",
  "key29": "5wrQZgDFPt6KjPvR2YEDDSrcveseYuKn5Qu6QozYBkDChiK3yPR2qcATSVTuRsjMhcHMKyfgX17C3HHAWxctcezS"
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
