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
    "66M45iecCBwm21gMXznEppA5pT1naKqAzAa6PYCFXtLzXZN3YEkCTcNUaxzL49xqaHZwtWR8GH8qEy2WURm27qCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mbgd95oJDaFR6A1KnMutavZytUXkoNvjgrGezxh8YXwkvoiZisALtetLfiwKRDN4K4TGPMtg2XcQhSTZ4WHsepP",
  "key1": "i33Mi6A54pwPZsbnN7G4sKGVV66xnFgyWQHtoUTTdEmkkeMLKj1HsJ69qBCCyS7DNhf2PjrWb3Zq7V9vbs77hz3",
  "key2": "5psySqTcoe2bw3sZZmF4cbzuMGpbLnRSpchriKVbKis6BGJq4XBmdXANubpeALCJf27uti8gj9tjHfhP7t7TKhGD",
  "key3": "5grQM912XdTRCyhJQHRHejqHGFU6ZQvXZm5KbX384WVXoVgTM4hveW81uyeJyfF8D5R2QpEzXeo1JKy16HSyYi5z",
  "key4": "2SYqnCF4Y8kHBoqzZj4JLU9v1wB7iN3TVczdNTJ3pGyd6GzVvQ8afosAgxqGL5srXZaxMwfuYfVYewYssjVriFtK",
  "key5": "5snGHWd9GShg1cot2mrUgt84jkrLhAoRBYU1aYJNTb5i8t7WUDWvPaAKwS5MwzoPT18WQeKMcVxLquZWptDpdQwr",
  "key6": "4qtPbyhmso4Vv9GwWpKTD9LDR3KAWStz2JAnEeVmCio3fSHeJj9ibrRCbQiPbjNP2bHktu25G9jVtUmbLWjRq3AY",
  "key7": "37imYx6MVnzcsHH3HdCKTCqX5ebwDcrc2soZdfHYp19npAbSozCVEnmRn7GZ2iPMcA6HNVa7wfPGhAsCF4STQ7Rb",
  "key8": "2i18uDULTnkQjRc2G33YSLbje41JAbFjg3fWspY75nqpo2xFYq6tGRe8t5QSDFR1CrVVJkFMuMCK8aCumYxWWz6p",
  "key9": "2S3vANuHD3z3L6xkJ3rGb1DsrxkWDkAQoifpf1y9wBrVuXCBe234Fz55VkqNrnEbvM9RHM3G89WSPYbP6A4f1dwM",
  "key10": "47xMpMTe73nR5h7JuhM6DQG8SWRktqzs5bAU2yVPGDZj8gWPyybUHLecvVbpdH9wX5QTKUytc7H8hbpLmYq5u9d2",
  "key11": "2cmWQNjjTaMCsE8Ngp16qu9BiReDwhGYEaZ56fWauX5ETQw9xt27cN1fDfsw2BjnTJ3DgeHnvqfDDypCwg1US8Ge",
  "key12": "4oCemcaxpAxVHSBZtHp8QoAzfHRAhq2D8E82EpG4Hqa8dubNfdkaaVGjQs6JdFPAwvAvbjcPnSMX4dabo4fa5GWy",
  "key13": "28MPUHyBCDsmUrwCUoLWNrKjU6pGg23AUpRhFSkQHPB2hDqHQyNbbF2vYjWL8hMwx1Dc7bCW7ddkGKEdZ7EqmvZP",
  "key14": "3YC4XVuBHhkmNrh98jSHpwfNdNSsS5t3mYQ9s4PQ8sxed2i8hfCumgaYZWrxzD7PM8JjXjXJHWHnkLMUwSGUWa2j",
  "key15": "4yM1iPiMU297X8Cq7FiAt47ngeoXhLMZx3RTBe7z3vUZqgHfNbbwb7EKHzqUiZqcWXZSvM27ttr8mzeKngukNJwj",
  "key16": "5Lc72KAwZM6D64F4Wj3jxv7qTVMGmqtRUmzv9cvgiPWw1EW6MppXKWTM6ZjehZ3xFcHCCGvUJUXaN5kUjsoRVLQf",
  "key17": "4hV3ywmNRGXHD8Wp6Ls8iuTtT3179phUgQspu2dAxXfKoi4tKbjxKtSwZfnT1bw8bUwJSrph2DTLSuiyktves8wd",
  "key18": "4MUQ1a1qHjnduR9beJ18j6EMQe89MCCwNAU4htBx7912Pf7L3BCvDe6kTgijVTcoN3AtBiE3jCYEd5rRhQ4KFFsY",
  "key19": "2BNc2czDSzgG89BDMQYAThU2p7zHwpMPNQnA7C1zu5rDpHbgf5g5ySkZZa9yTjqhzDFiRaXhAvhFC7ox5kvzCtzy",
  "key20": "Uw6QHR9c56TDQryyTvNDpkZaQVCtfTGuvuw72PFjQWNkez3wPFRy5q15vXuakChj2TihQWWwirVEwujy8nzf9BJ",
  "key21": "46ZWPeGqWKd4uHSLBcQp5b6M8ppX5d4if8WAEU7eyndtvffkfErZYLxSBmBFyLynLPSbpZ7KchdeAKBdRYWywK53",
  "key22": "3r4e9gnJ81vzmtT7oPRaraDKdBbnuUP3QTjzrtPRD8Sy1bTgAYwPru1vVAU9GEamgRD7ui1ELd6eysxX67c9Cab8",
  "key23": "4W4bxAnTXqjQJm3aiDnch9SRWwrwMsUpwN2UgTgitiZRgqxwNZMDrAgsAvaFFiNTnQKebmcgvSjEKnD83MVVsDsN",
  "key24": "2VDde9Q9rdhpTmo1SFJFY8NDN3x95LvxKKWACCBhbu92rk28MBwMHew2MJGVDz5T3atRTFrVQbKgAfPoSgKKKLxz",
  "key25": "Tp5vjBvgFcdHGPN6jG7Ni2eFB54143J9EBkxBtNvQ4XaUhXcHsskpty7zcRzTuPRv6U4hskpz9vjkLFhR4VHSYb",
  "key26": "4t3qC6bApGA87jMZoCp8B6DgDe9BzdxUmm8uDXV6kz1fCG35oQphasa7rvh5vUuoRPEH5srsrchSNi1SQazpaqcb",
  "key27": "2GRKPwupJPtZbBY1b6ukksu9WRuZXmzVBhkmTMEzvp26jJCQUc4okUxvdGMo81zoGcrNwNpgSAxLepRSCb7pMsjs",
  "key28": "22sVDr8C2RwFepKqsGt1wYV2F9V7W3qKGNAGstFgd3f7jAynFcE6Y44Lp4LddqdM3o2Thd62xttZp2FwgiPPRpbs",
  "key29": "48kd3yA3Z2YFheon1fA9ug9s8fzL1bukRzhj9HmYmyo8bCNW5DTnDSTzA4J77m2WDfgz86QMNmGPtdJEbEa5mDHM",
  "key30": "4b4MwKt5yekBcAt86FnrSQigVFBtGGHpv7AGtLXbniNKSazES75gifJRtd8barJXR1doKx3H7UtmuF7ni4BPXun3",
  "key31": "4BcvCzFGGFG26CSoGc8uSWwwbxESkZ3S8qEanE23sb5JkNfCpLCgqEvkGw2LRX6ozniZ1A9hdvweGoAyevWKsZmR",
  "key32": "5FwN8t1t4A6gz6c86wujBWz5m3jUzvPYkcw85ZzbCHSE1jhJJ4wrDXaEj9bCxV4wHjr4W3aiEiuGEbyAm7Np7Kvt",
  "key33": "5DjqRXZZ4Dx2ySwHU2ofCMxAHB7MesReBcioBNR2PAgaDzVDcof4SMdVfkJPUuE2eJYQsBGJdaoPc1qTfPJikwSq",
  "key34": "EeYkwcTgzEyjWYjvZbjQz4y8pVs4zuyCXpQ7zxg5tVii7K3Z26zquuwURfWnUvHLoNLcXZLwQnW5MKXXVv2xVW1",
  "key35": "2SQ7Nwu4VTLvnbzc3RuS1m7e314kgwR8vNEhLX71HXuLdaSVCo6CEKdYkAHPptbv2kDC8sABnsgkFdoht1PPBMAL",
  "key36": "fHFkZHtBs3u6ghkir4f94i5RDeDmHEjgU4owb4vfLNhfuwvNFBS4s2snjeZkQSbTSP1a5QzbbnyAQNCrFoWPBTs",
  "key37": "3iRfppm9Kx8N8k9wPpXYwUjaw4gZZtQJeShhiPcRo3BXrVXw32cfa62VvgXTX1y5Amb1dqTDXMMQkw4udmnEryGN"
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
