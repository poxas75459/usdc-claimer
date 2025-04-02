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
    "4z4Vh5kndSouSxdv4UVpuFmoBGCW1kiXU6S7X2qTv4zMnHhL1QjNinXJ7yrYnfDcSG5U8ESWxpsoJGcDvQUHRNSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BEwSUEouuwCof3ccNzTvoriynfH6idjnThKnLByW65WcS2JDgSecuCFo9kqvRxQvZF2FozMwwjmGMmobAdzkKaM",
  "key1": "23xKAgKof4cXHw9Ur1iLQj4qWJxvHYNJGrhWbjUnFrf8nyJRSYPv2WYVzMySc2SPg8AE5Mh8RA8tpgvpdBMhDV5x",
  "key2": "24DU8yie2ezQaHcYN97RgEqJ2ZTAK22kmzDoD4EfxRcpAVEi6riyprB5oqfbwNz5KbLR4Tew7jsCzYSDFtVE9MDo",
  "key3": "3FksG5iJvpcwd4LpweuDq3u2Wxcs5AyjMYGVZXw7Zjp6FCFDRoF5peQab3uwpakCRVZLu2uJdyAiEUDxkTgWoGe8",
  "key4": "Dn8dvSyaepAMS7SaNJyvg3g2HG3n9MYNXfJ5QBua2FdcXoCSjF4XRAgoSJdMb2eDx2AZEMrXv5ZDpiSNGu1zWWx",
  "key5": "3LfJ4THsQVQ77ny7zou4sW1s6aGDPgRkwTyH3fXB4fzNtd7e9LTtgcT7Z1CC7y5dHqMJxftQJVV73osnHNfB5Dfg",
  "key6": "3kdCNFoET4oSgxeSw9qZZte2EinbgKbeaafZ3TjmVUNrPZsE79M4NjC2ggupVnQLjoj46AhEsEQMcPzNQpnoym91",
  "key7": "2vyKsWCxF3oUgiZJy7sCNWPeqUSvzBw7tmDzxrXz3TaNmVNeQrM92483791Mv9a9s8Kw3D9qJqM7wQ8aCk7DrqQV",
  "key8": "3W3HdJo6LWLJzNEcuv7i5i99P8rRiPiA3w6BXHR1PoCbDGubWnT2efBvPhC5DhXcaufWgBqyWfNQL4UoJiYpsWMJ",
  "key9": "2tN5sAW424HorSS8nefWETWuVzxP8MccUyj58FbG9b9nKY6U74fuJGYaoQVDV7dC6S9aNdUvBtpArfq44JPR5AZq",
  "key10": "2ifMs93Wi6hp6BpR263hNzJdQQ4saJPZDHAmZwPidKhn8kzeFu2y47CtfQeoff6fLfuLgCS5k2NNQuyWw6bUVYVS",
  "key11": "4qRPT9ahGSWgpcHEiVaKxk6UQ5RN4mV6BsrEKRyx3yUKHtXwBAx4vyt3irfpFZyF9oiZzvaKFnL11B594HKbmqqX",
  "key12": "5xmtPSv3MC2avCNVX1zwWcPsLsgDvf1QYvy77Zh9q8CeCqAC7x5F6iXH6JVMNqY8UNdzxmPoMsyUW5c4MueRe6hs",
  "key13": "4iyhgkJfGkQFiD1zUoRd4tdD75YT3eVqn8NrLSaxcmDYSdy2Q89j1qoH9KecwXdZHDZZkvYb3jwWDesv7uiZhAXt",
  "key14": "4A99gf1uEo1C4ZHnGKcmaPMy7VBxxeZjazNC9wjvLhsLBTu36BJPJey8kXsb9nb1vik7WkupqA5Rj9FU4ZdGr2z9",
  "key15": "Sg3bWNk31aBTkytk1bGW4yT4GtMeNjTPYCZK98J4PdcyiRb1ELTZuEgtAvEntzEZR3PcE6cTjD6ctPG7qMGiL9f",
  "key16": "NUg7KDgpPJjv7LFumWCq9cdi7qucnZCqiuwphFkLQUbiZXBdACf4opUfB8L3uopLsnJ3HFTPNoUgGkXNPMQrugm",
  "key17": "4bed3zRj3rbL5eaMc5yZkFYUa2q3TokHkhd4uuSKyGSoCBRNhUWPGErADkxTFuSjtWj9CX29eD8coPDRubuQxt7F",
  "key18": "2DpXeocHEfYeYFjKdNf8MrpDNr7bRBvD4zh54NBsxbgKEpyX82EHiCJsejUrNN7EWArfSb8sycw23UCzhjjsbMC",
  "key19": "3o6Dpu65Kafaug3Jyq3munjdrTVSQ5WdXsgE4jnXYpmZyhEtrFRHNntxvC5kh32Jdr1wtNr29cYjtmn8R15DSSRx",
  "key20": "3KeYhjHLCAWfgRTR23CAtvVoKe5vRUFniX7pLCnjvEba2XrXU8P3tshEaSEZUZfuX2bgJGGkXUVPAZTNAfPpv2EF",
  "key21": "3AwKU2Y5dsNM7yY2AUhKRMVoueVRPA592oz9SeEkcYpBhah5dFeVDNmR6Ga7iZaG6NAZhhh1t4oxQB3NBw5kZ1fJ",
  "key22": "2av1d43gAGXQRN6pqVt3q7ZAFSaQimpECiLqgabJnD8PBuHaK9CkwkHR5ZLuyyYWe5fvUi4UEjQmCLVVimit2kEC",
  "key23": "48JPJo1b6mMq8TQg8c3CkzVxa5wfJYjmaSDB6phWpY1DpFoHgZBjPHfrL7AuFJbUpJXUuF1hD8UZmLqbjFkd4nwB",
  "key24": "3rQQrAw1ue6ohbRe75teDK48fJLUJaaD7goBXF1cEB4yj87ENkgf76aiTnWdsL276djFyRufKhvu4EQrs76j4ave",
  "key25": "hjVLnEPU9m2Q7xNv1K2nYCVJYatnxZiuMmaoK4jLPia7FQKLddQRJuNDYECetiEPRQA9yyH4gkv9XkJvr17PtcP",
  "key26": "4eRrJxcD7FzswCR4j27zT7pWfL5rsrwa5r2vDSgbGYqbQVKxomQQY5jStjRG95D8aphEXbMUEGtYHN97rd3qeVyE",
  "key27": "2aLxNneaUDizsRsANbjsYZrHkQjHHYABvSirQdYxiAUNS3QvV5Y19YaSfKDrycb1JUG5hu6YPcL35f4DsZFJmnuc",
  "key28": "4BhqfhG3CAN23ZMR4p7G5kEbdneTtQWLznb7J8TmQD7841oxrRBoZypVUEb9HzHj32hhBFmiCNoXEdEiqCFqtWCB",
  "key29": "HdEyS1AXh4HoGab8fMy8hZmPNbEU3W4RAgszghCpjinsNv4TH1UXfSdDaYxJ2wBz6C8Bwb82mJqgsC75hZhFjgH",
  "key30": "2tQ2a5bdMY4wqb9ajiLpAu2rKHSnwHKUqvu6MAUj1rDHbtRcUcd1toSiN3sL2fHgQVJTdVSs69VoaBNLmx4XpDaN",
  "key31": "27RzhitK7mbKEesCDZMNxDTnte9KfjLuTSSy8jyJmViRfxJMQ7DvbcFkdbZYofJ1wZPYETkAb5bF2HbtJkqRzmGC",
  "key32": "5w82XfJrdpkxT6NssJqFkd7J35xz1HeYrh18yk4akQRnEXuBUBAESrHKhLUyPnpbPGgtNUBMvoiuyJ8UfE9Jim49",
  "key33": "4G2PzzVGyeesPEnnMN5wRCTpGcXKam6vVQVuRQsxw7EiUqT1kXhv7K8bvn1GrkZQauWYD4P1fAB2stnDPJufRALh",
  "key34": "x2yZ7raQzuH8tfCqbcBW6wcx4oQMv7AYA963toRTNJa3By3RVMeFmD6ABHV2NUYbVHL1WLYkZpWUEDcnHvnkrbM",
  "key35": "2uffqnDL9W5ZRNL6tmM42iZcuXD8gKm8k4rndqCr32iA1ex9af7UtARZkZBDfT2xaSL2Nn62kpXKZejhWt29rv6M",
  "key36": "3VqrTtJmU2LAFjDWLys1QCNaGMk7arUVbGTNYu96TDvRHec52wBDmyD7TAtSDdfkn5y9nYHgVVZ3HQFLkkZ2FbAB",
  "key37": "623DHxKe4cCnrpS4BS4jSNQWP4ARczWk4fajHWUJaAgPUPM8HgY6dtkj2P6UtDA6L3iGu4yk8vT1TG5Gm95bAzpc",
  "key38": "4jqGqMAVt5VSbGkuLbbJxTjv15hUEph1DnnN5bHxL3UVJwB9FBDkoCFzUoAw6dsZRnC28BSAjtS8qWmb8oTQTx59",
  "key39": "3nptS7X9QfoyJGbG5JHmUTySQcnMs2wpURzHSDub7bKSpEouBLCeNHiAh4hXHDuoWZauxVnLvThu6ZNqA3NyAPv3",
  "key40": "4uydjpFaaHD1gHfpHfbRug1T7eUjc1c4eCzHXS7nEZ922TzVyikqR8nD1GakdBVGRFUnM6tU5nBYyrpJrEVDvbJp",
  "key41": "2m6HodcngxwZbLtXsyJyPiSZ11JReKaiAV9NkMzLWs6WsKe1xVFYDQbSJCE98bm27JF25vxJsePeucgKDZ2FwFFJ",
  "key42": "4UdGs4tvfKwdW5wtWUX3AuaNbJX2yaGPqXeD62Dx62kFTgpCECBCKYmPzwuJFPf6caDxvRcd9TY3bYyBMFrY2CiJ",
  "key43": "5Y3PrxVLndwwiw5teCByRGQeUY3nFLxxqx8e2usL5HqriAVgeFKAxcW2hX4t8RhZpa9PiZLqRqLjoAD31nsZiTxK",
  "key44": "5D1LpqyHJ9ZpPKB4WQA34VwoZJrt47mk62zEUznv3Bfs4GK473SKJ2U3u8F4JuQR2jKujXETFrGkhsi9ko496XEp",
  "key45": "39FBcvb9TT1NxDNJVMC9K76sPN81UaMX8Ux6V7XNpEQyjyFivmDobtAiAWuyC5A19y1Ffha5TDzGFPNGAKLdLJsX",
  "key46": "EFGjRjwwru3RMmvFRFPTR8ctRZgzHE6jzmVg4XkVZZk8ZSeba4XmSqegyCsUUL3EZ7V91FS485gbxvtH4pB6eqD"
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
