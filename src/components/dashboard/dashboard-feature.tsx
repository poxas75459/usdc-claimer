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
    "4THmTYivv7dzXHsqzDeFAqJGwXmxiXQpDtp8PWGPXMUx4H4FqUDYjtezCStUrWJPRjb5HLs6JuRxL1qtHQAmRu5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N9upSeZV86jrtNVf7AY5hTnUZyTsaWjRgX4L3nPa8GNHMSvNQet865yfgodrJCYXgYPQSbwpe6kXKinaNqGX1bx",
  "key1": "BdwSFJus3nwNZYnFHiUi8oHiEhspp7yn8XQEfPi19TSWAThRQ425sE2JUHUFt6wJDUrocjmpccVmsGkKDP7pt9r",
  "key2": "2ibr9DVPMnsUWnXdA9gM5sh95T1p9CcQLmqvPdcR7qxjyrBJWyGKazMk8eymHydLbsfJ1fPweM4hh9n9TSeVrEVm",
  "key3": "2xhWVEH2oimX3UQgvnzPxW33M7RDPzXCBFvfyZ2FdukQQ5rjLw4Hpe2DHMw49Fhq4fx6mJ4uGHudD3YY8HWPHJz4",
  "key4": "2DrYT2mCrvhXfodLKsc9vaiWp5X2KiLatQymDpb83qjhfF6RrDEmq2ViT4AWZvh4TujKXrBUW3arsK4usSu5eZCU",
  "key5": "3R6MtL1tcF4sQeJrGYaCxAvaxrmbfYecVxMRYK4McCtRM9idqufKtaft27uuj6DPk5FwARLZ3SUUuhFCVsyAberg",
  "key6": "ecs5Ac8RoTVAGGXyfosxpmS6iRPwFzScDBJ93wpx4X2nh3SHwvNnJLGDSQffuRkEPEcDmDV7SMhtWkt7KFkoC7U",
  "key7": "2MMQF1WHUWsgJKRyGdjMTD8iojNbgETfJsjy9oqxpR4k3WVv8g3U8YLAvxJpYjHpNoWbjg5BudE5XGctVGeySmCM",
  "key8": "3oD5K5bEu3N53MiuWEyktzYC36JXFCDp8KQuTQaAWYAkayjgAeshiPmKVGtffqwTBfBmdZcvaHJiWqELgodRiHDb",
  "key9": "5mP4P8fLLKRGFzC2NucKAZCeD7HWu4BmDEcDq9p1A1CWu4B6bHkS8F3zjb3a4NPt2hCvfjxpXTV8uMfKeqPE8jbf",
  "key10": "5W8jetWBxaPW1ZHgU2JSSWuDgr25sw1w9KMkiMG8jUJ8hjmfima97fk4EYQt6dohRxVZt6uhkASv8Y1GR9mSACq9",
  "key11": "2rCjEuAqGEkbb3gRNqAbafh8f8W5rfS9xJsgHcwu3fxbtZnL4yFuNktK86txPu6upEqugXnHvDqokHuAozFDNrAU",
  "key12": "5ciKgepc9pujD5kVLunfz4KYCeYs6FGB2cT1uNdBmkpYj5LwkzonFUygQWEjyFLGNQmriAWkYZ3VB5f3nGfjiUPC",
  "key13": "3v4nfdFS3qfapz7wBQS9HGaFm5G1f1aeg8Xsa8egRDL5kXhN9CtXwMaucSaGjimxqsXQvr6Hz33y2UtDN5azHGza",
  "key14": "jcEGuWRv69NgYmNTDJy2tLY6MPCNXyuXSRZPAH4CJprZKMpNvu3HCA99stbmY22EuT3zTctyFyjRtAuBTC3gZnY",
  "key15": "4hxketHj71Vfp2kWQDgE8TyaVAn5PvESroK781WmjGSwzs8DVJoF5sCqLBkpVKopkFPiCnQhkMLRurbQ6FgXLE7k",
  "key16": "7za6qssDwWp5ktH5mfkfTUt7s9kjWD2mgikDqnBv6WWpimpo9F61h66LSbMLsqZ1xZkNTMSz92C6CbMWMmMMDEN",
  "key17": "5JMLY9R3U3ugYrypjzBSchWmR7S5gDNaEX8MRY7YguyDk4ASkryjmVyShF1bE26kF3Y6kiMBg6NgdHAyNVNLvTdR",
  "key18": "2Jk9Hqb3XYrpyDrYMryh54cJzPA4qL5NQnqSx1rKGV5e35rJ9D2L985QLHdau8DXeT4s2wVBG7gwPWJVqoEj5KL6",
  "key19": "5H4PS3EeAZW7mGFtSQGP75Jazy7M8nNLeWsZcxxJn9avwMatiGgUuWGWrqkRVzWE2F2GexrADtoKY7H8WgGw9dN9",
  "key20": "bjpRLMCUtKvpbW7LYBz8mCro6EFdd9HZRBxyYjvhBHSgxfbPxDqTa8EbsA8DwM78N2UBFvzJuWAnJu9AMq6jrZE",
  "key21": "VCjjKvursvf3nzN3c4aqLMC445Eu6s383Xj2uvk6Wu7FgKsiask3mNw5y1s85qN3cqavb4ZMoadv2bwiAo144Lj",
  "key22": "258kPVgxPANXBF9fHhJB34Ma4tY7wZXKD5X5Awb4oyEDhm5uEhKSLenFXQhrzeKti1bJ49fanjrk952NepbbzVF4",
  "key23": "3VzB7MBsr3KEsk6B7weDu2Qcvb9LQkGZsLPcP1YMp1e9fqYv6joDctqLjs5gMBJ3e7pRT9E3bJRUEJJVHQWhUR1h",
  "key24": "5X13b6KbpZc1bxWg1fjcb7H8xjYxxtwgZHG9hBSyVWqRJc7DnvjP4CfgxKKu2RxJsYW8m7ZBm9a27qXe2brQYiDQ",
  "key25": "5cVbFvGv4MYttqMVY4i7HD5GGex5pG3gbdcvXENscaGiqBpUmKpSqRxFXa3v7NsJ8Y4F2DVTMqwvCMh9bodxXULp",
  "key26": "3aP61WkHH99gAGyDVU3YmtZovhw5kvxSj31mw9SLyaykj5Ergo2WW6LifPKTXFmLfh7hFHqZPp9byqr2UqhChJ4X",
  "key27": "4G7CkCibUQ79sr4xFG6FETtSmEdxbH4Jpz6FHaeaNAbgzV3YDCDydFAYmsPnpSovLDYyh8ghWiRNgU26FD2u7X88",
  "key28": "miVBwdgQBEVdrTKLbBni7kdwecBxkHsFzTCkCXH2aEG17bre9pt1eBVKySrULnyZ7zCBATmdWddvE1yhQWUyVdV",
  "key29": "5xABXmmNhPkSmXw8BMSr2hHH4i4jpiNDrtReGWNdRegyJCzxB8wFV9182DoA2JVf7RQjGsEzrr6SDDc9JFtWnxiM",
  "key30": "3X4sVZ9trySvtyi5sEkoELC2ejXMskEcwiAdW1BdFee2YWqXKW4MbeXcpJdxD3vkiGyvoWoHVcwYh7pH7dwWUv2i",
  "key31": "5GTzgWQ2ikY1tPD9sCqhHr58zqukHhxzYGhpwPpoH7b9KhVjE8VNoRVSMSnttT2rsH1aGyTkteHDzUa2K6J2fHN2",
  "key32": "7TQEESpiEqDU9SwSMvaCJyKADr4hnw8mC4ppvdKfAxZMFz3MWFeBLfG3YZ7LL76Qcz5TWyxx5za7Nue6pd4K675",
  "key33": "5PZ5d8UbZNnXp9JxdVhFpv9GQLHmdrrsTEmP2VmGFNtCfTisPjTW86B4XG8Erms1aGTBXyPUUH69iJMXDjFHJQHJ",
  "key34": "269w7zDbAtrsXqxFqeMAeRZCsXVaRWqW2EDmszP3uwFdbS1peJqsFEtoTe57dp26GBheSjRMaKXDq1atS19J6sXJ",
  "key35": "4evTLJhonFLkmy3fdzzsaes4dqshppDUM2Da2x7RQuJcE6cmrgWu6XPv1nxYvN4wwSYiisMgkdYi7jUeR91QwA3k",
  "key36": "4TuopNNvdcP9KAPC4dcvRwyKwxAKKXQLDCDtP3UJgGZz3rnej4HDkDDt4PzRRPAuWYhbf1KmmxyQPfZFSx7Ph44e",
  "key37": "2tQHShbz8UXJnDiP67ZXG2AZfx413sZ4ZN4mmDZDa3PCDZ4zPMcrNTHKEsFZwx4XuP722sARnEfMkcippqnNSHCa",
  "key38": "SrYZMJdsviSdNSAAQpqRDXVvmBpoUZq8gEQSn2TuZTMfmymZdWdEkRGQ8i6po1GmCUTC2C4tfc2XcjKVN1Ufhh1",
  "key39": "3cR8pH3MCHHoUuz8bz2v1uToMfkrHsmibb7yHFDvNp1xkUXeyMa19TKxEnxjUPFXBx3g3uoqC6TUqPQacMx69SJu",
  "key40": "3eMaZSVsTnEUAKmtd3yuwh14TxEz34bKTgGFbb9JGXCij8S17VxhSiacjruZjTBJRqntzQZqdXSfPWwGQxy5Tp6y",
  "key41": "4gRbPcfSHngamn4pt1bbHopRiHLnnMjLFqaUUtTdJ6VgKAeC5oo2MonqdwRpjMsUNxpAVDCFoKYefPHZfE6kPbWk",
  "key42": "214TPWJqw29aDqzMNE6LKECDqJJmw1GNNphq72jYt3G9o9BoR6utJ3nYJmiKj1oCG9NXMCvfxEHZ4SyStahqdtzR",
  "key43": "2gJGjkYbjKFbdNyrAR6EiePVwtpgyP8UPz73FLiCmVKCEhoq1PXzb25Q2kHbi99seD3PmChedMCjFqba2JDVUk7V",
  "key44": "5gXsFVYd4Vcy8y4p1J2u8ceM7vynRDVoEzHbXqMcvQJq27g2tMr9r1LaUwd3ubaV35PqZykT7txKDh3wv5FBWFXK",
  "key45": "3bdiHicnfy8sxmVY1h81hFJBwzWZvg5JZ6An9f2Gm2K7Z1NJRPH9bBrzNH2Y8cffoMUSXHDgFT2D1Wq2b1cuD6Bz",
  "key46": "3RJeyVUsiTGSbhPEyS3xAxE6aNhyLXaqN4ap2bkRvrXAQfPJtu5t5iJMPw2sjUJ6nVS5DwrMJRiXhAuL56aLLozs",
  "key47": "2oMyGwG6bAXXaFohoccZKmhiHdsGsQRQrRg3xWUiLdCWqkCz4XsYQ1NNJc7yx3VAqTm2YnbZYzy4R1mKr4z1KHbi",
  "key48": "2KBkGpmpmWYJrBzYfL7v8fHVdC2UAuTm2SjQzZ3rtq9kWimvTwGmMWAKdAZQtoVDCMtfE7JCio7hnigBz3bwGr9v",
  "key49": "3zSnu5GPjsL58eqyKX3UA6CxEoHYKraprsXGgDSTd2nWicVpUGYbYh2rug4voWbZQxwR3MW888GNeHUo7P9zErvH"
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
