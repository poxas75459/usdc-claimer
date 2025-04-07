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
    "xMu8GJD6RP7byKQycMzQP1uLbSJshQSyAXFmRi23skzr7ZF6xQ5ZgtDNYWqbU1jr1bZjjwC85rsS8Had3cwkYch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZANkivfwXRhiLZsTPAqYigaFqzaaL2kMTpAEkJZTHncFy42JH6r7zWJPDBdZs1CzoUp54HnyFNLebN8oueFoePF",
  "key1": "3cumMfa6Cf3MxmC798qUkTZbWVzDtudtcDroEehhHHh5VcV7cE77gUKFk7fhq7UyTsRW2C6DGxUZaihck3NYVNEA",
  "key2": "3QxyApHHwFxjPRFZTPBXAtx5a5TX8L9isLtLDxSFtbhaZUJEAxNDGWZGSf8q2jqxCgKKJfu4NVFFzBkeLLuF48pC",
  "key3": "3pZ4AHGj4nxQ9PwTATP4LP8mospzSFVNq5kZzFSz7LJBptUcFoAdLHGSCYcRR3xSTM4u87GY8TxTneZXoPp3hfT",
  "key4": "4XaEiwVbqSAkuUD2SL1Zz9GGr6iFWjJiAjBtmULpuYLWLgnpJ6AR98sNRVEeM8wnRL44MPvJMxCAezeWwvqpL61F",
  "key5": "FVFvoZSTW68kAWkkH1QG4mCizoVmopJZmcwT1kQbrvTrj67668EjTSGqE8gXGptJMaQPhMyPPy8GoMV6Eem7Mko",
  "key6": "18iCEq5ZY8RHMxFTD4Eso2527sSVZFH1NwJ1X8pvLHPh7FYFHahSLmGYyZKJ38EYWfivMwFcxDzm563QtnE56gj",
  "key7": "45VVcJJn6nAXK2rD21sNGM8x47HvqvwKVPE7byyrQmWu4s4kDS9UCS8JzbRhSZoEkR7SdNFsLWTqSsCYdpod8uuM",
  "key8": "46yQj2SbjSjwWU6mv9htmjxeKjZHCV4uNQibSqFZn2LS8SuW96d2qBvcJcU3T7qjKVRjf59zkGDfP5pGSc1xekHL",
  "key9": "2ieUAoUMuwL4BcPC3mTsvtFCipma4V1GA4hSmKugA9VWQSSfTrFYfyTQcEGnkbKKiAamdvxKGY4sd69cVvBXTtj8",
  "key10": "3uPAQEvd5U6Ar99a9CsKdEiwWiCa7jkN5uj3TYpxEZkUpXcLr1uNc5t1KiySX4aVyV2Vkby8KHH99JHik76S45rN",
  "key11": "4ZZbr37Kn1nzZQ1pcXSB6xnV53soT2DGEx8P2s35UgbNZFDxyXjsLSCcEofMfgQE6wf5dexK379UDnHnqUKnnkYq",
  "key12": "JQqagL4xUE1bhRv9hC6rWdLch6b4mvWax2Ts86L294Ta3jeJBVjbu4NnMWmreR6uvPUr5nhtymWFqtoxTc8TaW3",
  "key13": "5SG2ZM2PXfWc2Md7kfkNuw2QRZoQuu8VGwmBjmoDKeBkZUdxEMZ2Q6qEea83EAuduceqXeNjRfherzygCVWLFbET",
  "key14": "2hVJzHAXf7e9V3UXQKGMiBZ8AirT36QZsPKxoh8TfNJzQPMt67fumfHKkKHdvH6tjU7HDGyU52ouqPiMrsr4sCr2",
  "key15": "4whsBmuvwayDr8X45ezhprKMP4AAbRrkakMoZBhqBVRCBfTDQvnoj6QmtNASWEJMCiRYT8743LbkXTU3mgp758tY",
  "key16": "3kZvjTKzkUg4Fyhuaa1hbk7vgDSHi7y5nVs9kLD4ALfgLUsw2RbmjFmjJzE6zjPXk5M3Jd4uCadVKTeGFawQbmqz",
  "key17": "5zCPtyh2KrEYhHNeScgzVQwoSMhJVmJ2qNsb68p5cMqrVqhAC9jtLjNwoB8Nnr99QYx8U9nda9BoJn5bP8TieXdD",
  "key18": "2qVZnELo7WJd4tMBRMZNQvQQqj6syJiVmHCCUXbCWBbJRKYDLczVNP5ZrMEze6wPjNM811bg3n7b5goGarCXyvXj",
  "key19": "h7Xmb8NcSsE6NUHKTG7wR669stQhyuNVSk8dQgtKqz8KcgXKP4EQJym1wAiptbLTZgKfujaJtgMe6Y1zS99HYi5",
  "key20": "2Vn7S4cftwdyvAN7iWqXYgRDtnh1TqiVGGhfkQUmaXk9HMrYPU82thS6SW2VCtbs41K6QyK5U8xbcsYzRDse4ARD",
  "key21": "4isMHwoxxi3X6uBhL94pr7s3tfHefmE6JKkWJDbYyMYxGssRZYZJcnuAQA41iLBNnHQwwuTytGgBFqbEjAXuADpW",
  "key22": "44a8VNVPBcdXayj6Gqf4PkkNrGBSFkmK3gfBvDksNqnwFCJeKgD32aeap7HxWpaQXjWJ71mkGLrvk5aHNAWab1xi",
  "key23": "5KAYQYGwHDnzZqhWTEz9AZLCRmLhjwx8ixDbHLY4kjiCNNs4zLXaKo88U7XGGjznN74aCFLvqYLaCoEKE8M79jkj",
  "key24": "5rdxJNSXQJpjtVEkuSXgi5qhkpAfixALgGymnHpeEKBaSbSECjViNgcwC3fEp29GQAf5cDBGfWcNUUAGhihzhiwy",
  "key25": "eBVLzSbxovx5waXkntJcah4r6y2NveBy9TQUdDPrqtXskwA8siDe255DNkA1iaWfSPhF9uLGTdxjuDPrF3NGSDn",
  "key26": "5p8SRaTMtZtVCaFFPopM9gYUBsBRTTsjsQ1bmF9175KDynm5HhaV2qNKJjVGUYi52DD8u1LPAFbFJLugdAJMMVvB",
  "key27": "4eBiYGj4EcxKWBozv7jkQX6GtzFQeD1Ex6wPiyv7hXfKJiD44ddeGbVCk3XUUorNqyC3mzyhcXPR6Hs11D3xNFYP",
  "key28": "29aP8XpPzBhtTtvGWZniRLkbEVcbNdfihkXvQUb345dZyKSE6pbdY4UZcKcDRqBRSKzTqkouZrNvV1yHJ9LWN8pX",
  "key29": "3mxVajV8FmMRh8eawMdEEb8oQRKSTnpmxDjiEbrGE5S8grtzcjLx1bkxG98APCXmQZdPkwcVcbkrAcHgggmKpJbj",
  "key30": "c2K4mCHfECSBmJ6aKYxgo5ruCPU6pE84FaYzmwJL8es3EvUUQxxKCN2A3zbRTVFbvQabYu2Mh8o7HHDB1TWiHUP",
  "key31": "2NKXo6qBwYH2pcWTVVAHRfTwU2nPyBVvCvXVvRDhaS9Nxx8CAMaXaUzHLw7pa7WE7UdVsDSwxb4DehpBr2b1uWVE",
  "key32": "2tHe6yZwR52B4mNhRJqs6ueDhpCBjFT4KyU4kScaMpvchX8qSnDoFEm78DpKUc4JBpkqkmVej5JSnSwrbCoXzFer",
  "key33": "45pYCTSeuKbDso9nG7abfU7JhepcM1ctfctHqgvDbZSPio5Tx6BdJPmDbfQ4EkGxyT8cTd487UgUSVT6TieH96Fm",
  "key34": "57zdvX3yePPPaMZXGwb2oatLiunCCpoAQX3C8Z5zSgCbdG5NYvh9VouXRoDGpAQdP2iGSbBPLDmKrPsjkRXmfDx9",
  "key35": "26PGD99Kmjh89m5kBTzUFvApxf5eEijSPqopLaXwJLAmW6Yf972n3bgQSgGA8hotq5tjQCRXx47Tnh8wAhPgNYbD",
  "key36": "2f96icJ783h6K6McMRox2vUQ1vsCnWxVaEvQjTPeQkLWxxsC3jBLxzB7MpBEAfcYoASeY7dysADwKsFNAH3znvn",
  "key37": "3LqVFXssMEBBji4wpYcpE2awmrmDJb4ZBdPtAmVvfBXrE84ouHAk568jV8YQKAS3dT5rmZhQkzY5ugy2WBAPVRKE",
  "key38": "229Ahg2krAbkaGPgWM4uy7yuCSjT1q1kcUQsEBincWNJTbbRuJCLuegdr7fNjMrfYA527DZ54RvPmPbhoc6R1ciL",
  "key39": "dg1K2ZUvRm8SZnhwLxSgUcGg6vDeZY6p6iZcpL6PmNYrRR2YNE5m6qkMgy5VPvYZBR9DmjLvomuJwDjgg2c1jSs",
  "key40": "3wBUZbtV88ynqdZgqs12u3cDWtNxFhpARf4E6KphR77xmJGMuSN36eKtvsbps7SqrwizAMMpGTNovyDRwdaR3XCG",
  "key41": "4xxn7GCLJKBh1QxgLMhPzHCHSNKCxZMTzRwHEMKu1mcbQEP37ZN3MiuJsEdqUDtuw6a4UHPDwJfVwRFMnV7Degzp",
  "key42": "2HkEDHyZujdYeS2cVt9SBa798YTu54r2kNDfBf7pUW9TerQesFMptxiYsZF4CZroBDP3ghsG97yjdL35JEyoRpoR",
  "key43": "2gHFXSdj6qATzRpncKiUWnAQG6xUUtpFeXqDUC9G9Q5U8DtSLQTxBmwHnPdahvY7Y9DuXU872EQgSGovTBGEravH",
  "key44": "2UTCqF95cvWixxcgWeDWqUrU9D6bRLdqfxUVuuL1LXV5jkM2dfM223i8zQmWuncZFvNZFxoXG3YFmfvTfCFWjejG",
  "key45": "iXHKDAvw6BdDMUFEDkCdx6SrmKVRhtnMyUvn6ETzSQcmTaEn3W4kHhwaHrouJ7wjaoNvRN3mif9EfLnR5zYJzCY"
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
