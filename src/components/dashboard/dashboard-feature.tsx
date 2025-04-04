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
    "5TC6bmzUHocRLkV3uVzqYqP6xEYWvxAuWbdkzqua61nSf2mCfiRNUHT4d9ezbqR7kYL4BgEcp169mfF4a73cbyUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CAqrwcXxE5npmyH5RQyfHBuESCXsQMB2Qi1tNtTkxA9ZPHNS8TtDQu9Kj9TEq4R3KPB6NB4UjgrdKoRnfYd1Kvt",
  "key1": "3HQ9E5K35pwCdsVz2FtNzT9rug782NmW7AgJ2fUgP8juCQCUD6WbW197P5e4wuuyhBMGhT5YZsqpxv2dxXLS2Bmz",
  "key2": "D2rvCXN6DxHbMqkXAGPyQkCgZpj6ooPz1xKTo11r1Cof3x4YPrtBuXDE294LZAaUQdXjsfndhfTrSkGTsMb7UeP",
  "key3": "4D1fQQ8dzpkwruc26SjEz9FPvFWadUbY1VHFkyPBV9fS4jBaKjK9ruxvwBVY3iGf7CgapMs4Ci34FZhSTjakqMpb",
  "key4": "wbMG2DghqGDozjH5ep8Kw4guVNbBQpqsNqFqzcypczdWYSKG6o3QvHmzBrYNDTHYZZsUteA7QkGE7xLdzRQvsce",
  "key5": "3c2cM62mgeXuWddtdPL4u2nfskQpxUzUvqir1DzbWRqJL4h4EcaH9bJTyGLvgHsHFJsn1CKnoW6cPe6vDj63LiFH",
  "key6": "VjrG5BEzQTHqCfbAHrcChbPeydwxuzvykPGNfah4uj8guYmWUW64xAsXeEfNDVcesc17PFKvsn4ieqMJs2DsN2z",
  "key7": "5ma8h4vwqpwpCVKycdXpFPPKmFUSNTzD3obm2geyUNLdrfC5P9DmkBuLTMmeT8nPU8ZzvYvpDqHZFCzC6sJJDpA",
  "key8": "8mk3syJFoMgtWaKYwUmH7TikchYAZm5diSyPsDYVYBzrVnT2CQK3y15swp5CqGfsXh5ZC2aEQSiFEuS5eGo68nV",
  "key9": "4p98Zn49RfwsVe8qj4GWgsizS4S71mTN2numUNyVJWHm4a1NUbsFk4TEpPT6cBt5MfUmMeSmTiZHF6Xs8vSVWRcW",
  "key10": "tDE9k82QwBe1UziMz1UrYgrdUSU1gxZYvvU6Ho6iaG2cNMjsJytrMjj92daYGf5jTpBetRfCopNfJFhEdQ48gux",
  "key11": "49YJWrJ1ojGUFffbwgrky8Qbwgj8BKzFpwVWqUHyfvVunAT6RqdRkdtLCYFWSNM1Hyya5Bqu9QLrHmaFBzboqtzp",
  "key12": "4nMgcnnK9SCVfkwYREkhWNs7D3kDGkT4nzN7rMsrhdCaZFiRmFyzCEXp4EsE4XjtZjNzKa6X8pbNdtMfdCxjhzew",
  "key13": "EZtYcFF2gQkJMf7jiS1fhQzspa8HwDnYbJ8cTyFjc1V9n1i61zKJnphtbTCsX95oi9fyA6v3uvi6V22S8CrAUhi",
  "key14": "4dWsNjWjoAkzFZ7eYWsPW88x1hAdCsqBixdKM73bVRbXi3efqGS57mYXFCC4RpWbEywqF8NQNwyRGZ4GRzukEWwg",
  "key15": "5fTrdN5kdcnbqnPp4SE3FL3E5NpBmRFnzEWA7zREdfsoovUnVxQxZ56m8P1ND18rUAhrJa6m5rP6M56bHsFgojM8",
  "key16": "5TfTmk1bUstnJhCqGt33BbRBeqtUVuLN6d8NB65QCnmWvzMtwknwNwYe5GeocSbodhE8UQYHeaXnkaVx8UiAPuKX",
  "key17": "5DjsbHm4YAiWSA73R6izDtSsLPpdx2k88QQTUB1AnV45XJkmvXXH4pQjjZH56MmhzcAqU3vQ4ttP8LkFxBGPW4dS",
  "key18": "62o6Ct92sQDVKDsGwQWwwbZxEKRzn2MQL2iptceXHF9yp8LxxEtsgqGeKTFZJq1pXWDxbc7FRizkFLNPuX1jfDch",
  "key19": "2JFGJMJFggMSLPn3cvUihwK6DDYyAuNM4qiNyCvTAMCMDkEEseEZsXtNygYVFa59qGJ3FJbeBwfkvCQYdddXPZKJ",
  "key20": "2ZdEobfMWaytMKvReJGm1VxS9Xo2AoALf3C4XcU6V4ojqHjcrkkcWNof7YVc8BvZPxXf5GqkaGFCZUjMDy3Xz4uf",
  "key21": "QSrK5Xa2jeuLMQgJZBF2e14BuMfDk8WGbwsJJxs69knhRXSNFNRco69DgvgYhyZ78cxy3rFhu3k5MX7jSML2rfj",
  "key22": "UDZfSHLu3kq2KkZV1sBcCvbLRDud2cJ8mbXisUwGLvu4VKdeEQyjWEJX32nV5cKDDrmGSuGQDPRyoqoezKhkUsY",
  "key23": "4SK61awax9EbRRJyjRZdbjQteLYEo8rNWyQEgpQ7AdQdehfSa7hk3cYK1TUojwU5jNsHSnd5K16JBNK2cnRUgMd3",
  "key24": "BqqE4ghiDZq9tA2aCtWsse7Wv4WVF9QvpjYg5E38tvUMuMkGP3X58vyTA6gvfxyLGaKExYVeLsSVAkPE786HEGE",
  "key25": "2wVHtWaLcjeiJHMyVRWzKNGZvdX1gVSmtNtJr44yPqwj2DwgEN73ai2WcVatm8cW2yLxz91h4pw6shEtnuwrRU1h",
  "key26": "51X7cvjhc9o9QAy5mt8obZU2XzmseitvUtv4G9Xa84LZSCn6uvAv3g8tXbc1zpvHHUkArHYwCH1isLxAS9WaAjds",
  "key27": "3mpMWcfqwRuRKjspTeATARuDfafcU458zmfTdmc4U3c5JBWhoWcQjaSRFggyuKWpwDqkEBzjdhPJtHYi9h58Hzo5",
  "key28": "5pFZxJvFXg5A2sAAJ3L4KdxdmpPi9TaU6kckeDJ1KYUaPH4pVhcFUseTKdHyrDho1Bwh5oFitX3MNNoT3YKiaVDb",
  "key29": "3Q8RBKfokMwzK6Qa5ycyX7s4wqWtmLDrkHdYLs5ZfCQnQXcdS8DMfX29QwkkMd9HMU2up5f6umHha4tLcsFpBznJ"
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
