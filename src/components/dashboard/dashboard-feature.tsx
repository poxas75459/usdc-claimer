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
    "5zGrD1VLmtFsQoa5tN8qxbqYTKhZkwu2vYXQoA8mxc8auVw9hoRUhuSZsBJczHkCSBsKX3YBM53MumVrcFuQYQt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qsMsdTDdAR5vSubEFd2ooVLq4oBjCNdK1mGUdEtK4xqbSN8yWVEBw3gemjyeXXhNfXNGWyEoT9rSrH7N8jcY4TK",
  "key1": "4KhPEVs6d4Z3w2eCcJd23bYVDb9uuyRJJiKzdu72eHGsjxYdbywerJ1vS6ovhNBQE6FuioEm6z6KUrKB37BanE6g",
  "key2": "2H13hKJxPHHcdvpyzV1Wg8Gzk7sWivLCmwtfpg2JqkfTfH2TjkY68SyCGPDXofFbNyFYZ7WHBY3tiQuT3o1JmSrX",
  "key3": "5hEoy9YArkwKsNiXQsSXfv7i5WxGWWP4WekmBq1kmVq9xXk7gAy43FYtH9GwgfipoCJbT5a18z7RszQyopL7QzcK",
  "key4": "66ttdhtSoGhvEAit5pdZCAxcSMskmUjUqLWjRtk5pQcEzzW9m3hWYuG66fZ6bdJHzWj9X1YZudnzjAUoKMwPxfVE",
  "key5": "4uydYGFA7ti2ge2cx6gx2emuqCccFwRWjkRu8xTSwY5RfMSxkqtRDy83kMBD1H7EN9LFob7jJK6H9tPV7XgauHVA",
  "key6": "2mdKQGV3s4Wty1sjJmLiiSXobZTb1WJs7XcnXobBZvckwKjRGfwzRytcnEG2oAwrNTtXRWDnuwFseADDKuYx7V2o",
  "key7": "49r2RksoTwfgjWtDi3UmEULgD571YHJGQYM2x2MpcnvSMmZi4rDyreW35bBUknw9gcyqQC26QpadzgTLHjvi7QmK",
  "key8": "NJ774KVWyR4dnjvwUtnQEHBvMAeWK7JBr4eCuTrLA7azUKn2K3KzDiXwHagsJsNs6ingd3LJbGmqp6ne7Y1Y35S",
  "key9": "5PGZgyzvgmnfykFX2ivRzdFkLTF7qXWhr8mKm3F8FU2ntZx3CGeYNbYpCbLfzWtkCPnErUK35cVNHgrnCoUJUwhy",
  "key10": "4KZTCgskssXSehizbfN6NiahtaYzXzFta9PwfFBasp7RSohVnkn3zuPknKBvAKqUu48YLa6da6uCbUWwRxTc2G1t",
  "key11": "5psLPfMUB9Mo5BgbS1bUNPPSx2W6fdtgcAshHhc757T77wGV2FHAZapS1wfvGJZqT7EvPNtAVjeJp7E67nCLG2pg",
  "key12": "51UKaCVKngxVQY2rssmbVu8wp5kd4ZnafiwJw9J8ExHXEqyDffNyDi3k5kTgGLcrJtjUmr1tsJrwQC3Nup9uXAkA",
  "key13": "3o4Lcd57DtWSxfDG676UdyBEF2j3FUdvso8ZkURsywsXV8Cn3jGeznAQfHPnLXCvZJHdURCABLb5JHvcXJpi18Fb",
  "key14": "xxgexSf3zEGEvTnwd9FnFpCT43VEPrGdBooucWid8jzB2ik9pEUD8RD5pY4zZXaDCPcFbx2rngb1QhD3fgn75pM",
  "key15": "3YhAe1guTLqFAe6mLcuZnZoTnC8Fv8HymhQdH8YRmtXnk7kdSXEX2NNHPB6B2PedsK4qUaiZBvqHhsVBAa4J18FH",
  "key16": "gVHRyE4uwfnoNiJF6qPN9H3nEV7N3LUBa9c35EJQK6HujhJNBXDHibbVux9sjS5nDachM1eCw12svukYJqbmGnr",
  "key17": "2YkdsKDH6ZjsQektB4pkA1TArUngFRcmxzN1BDr4FRdQFBjeqY6J2Y9NYrmCx2qDJEzP8cxeAPhJmCCixqe3xcE9",
  "key18": "5tXXXAQZKJrB4Hy7cS8VZdN8BxYczeNkT9YdGvwtxsMXCV6KHUAHjXGy51PXncT7khMCNoQ8DL4WCwgRwPnMTc9o",
  "key19": "jKQ5DYDfypAEqDkxjbWUFDHWDq8SVeGnnjieU74zDZXDEGr5qvexcFuL6pgZuU1XcdUsGz92afiypa4SYVYijtu",
  "key20": "44dAMNDtt2nk8CcyGdEL3U51fvVCftDKosDS6kQHoTK3jW79NQLGs4cHQA43GPqMHiAJHyiYF2JRHxPyxGtsDq3D",
  "key21": "3NLhYFTctcTdxbuqcfbriHj59Rxs1ewy7JUKUiqBmx2MgBa9VS1H4UoXF74ZZc5wtPrKzWSpxxXbA872b3W5G4KP",
  "key22": "2F99mfu6ydZmmoUZF5VS1RQ44X93Kjmvg48himLr5HDn7ptRHBCVQhG1fLmL3c5eYzRYAPxnM2r3qWzAERd7rL5d",
  "key23": "7DqnKuNhAY8fx5wqCT1tRN4aNLF21KSmeEgMYwaPGArZLdxdXy6bnWRxEz88r6mVjf8p8gurEC9FRff3PTivctT",
  "key24": "2t5KcvMfa6UnYofeiLin7U1CgEs4Y3Pw2r1oaiJuCW3wZeAku7xQtikM217Hge9JvWnYimefvXWE3dcpKZKr5CP6",
  "key25": "3e2xJpxkbFpjhZSnpXksoebu4WZ8ZCcmUoUqGRrCME7bRyc9XEbUtjmErXLmQwxLQEPCMvFMwocca7y6nvmgvqvW",
  "key26": "2xZgwVT8HLB1Xps25vQUqJWtern44JT5uWHEdsuY9eU5pRdJjazpLrrfoEgz68U5pEB8fD8zLqLXH2ooLMN9Xab4",
  "key27": "4A7piewHTn25KjBqncZcA9ynqiXU2wrt6BWvEdQpAPym6FwGRSMroqAXWTBUTHoeLx1w4bLtuzNHJD2X7BU75uDY",
  "key28": "2jr1CDZfEqzcQDHaMHAcyt1LjqFjtGDmFrjxzFnkve6y7fmvvFhi4D6st6J5LAJhhENjakoEURVqB6ArxczHan9y",
  "key29": "4KC34yeM1iXEYBqS87wCbpzMbvJmv365AzvxVyrQdkDtgxYqcxXaexFYFXVVHidYNv3WS8oGbXAiaHPFWdy36kgr",
  "key30": "4LJRwt9tWDEUv9SoC3rqaoQdgrciqhGTbRbTVuc7wPMvqBUbh4ECuq4tWW36FnfpkAXCne1CdymvUXNFUFRzK2t1",
  "key31": "3j8Nxg57ngcnJaHe4DvH3T4EaowTspeG48kDgHgqm5AuKvghzwC229FkBU7ZPcnmZsNiDWJVbLJesrN8HCBmuZ7F",
  "key32": "55HgmyUkWfDzsTvc4eZELKf1hhK5Ti2Y5JiFYPNM2bfM7mpmDKapPKgWkemha3LKzw3ko1Cgynyu8wjUiGngqvnF",
  "key33": "easZyyTnWVtXz78e79qTSN7UJj3VgX1JjbFaatLgo8tM9ryoFunJzozJpPeeqQsusKiw5bJWY7eNhQXXZNaUq7L",
  "key34": "2Eozt3kxuD7zymA7T1q9pJKYsPp2B6MhJY3wprt6KxoEbkG9kYAvMoW3mbMJh3Zm64JY14qDUJv1CDZRR5VhiArY",
  "key35": "5VdNYU59iqjCXu8AZd1MZDFEtvSryBme7BFN1tRDrpVVkxxCjbjLtKe7gfU4p4zDHRSN6eBUZm6xfwrmBWPJFLff",
  "key36": "26BAic4a8534gy4C76MbpbMfajB7if6NPPBxQvcUS9DoBsXqa5QLWDwchJKyxLfEMzkp9AUAsQNrtxrat6inZ7pH",
  "key37": "ebp34wL8zwJjopvzFSRVoCSrkhoh3BcccCuhYBDtEirTAmE9RfNRp1qCfB4rMYAJkYYzNpSyx3B9uDX8WJQArXu",
  "key38": "3DUUVcyUMduFK3VWzCdLPyKwsVNZTbFmHQgaz4WoPokhx8W2TDeCK2tQhGd9MGX2RnEM8ZCcdhHkUQHNG3ZvVVtF",
  "key39": "3WtL7EKYnVo2TBPzdWnV6j19AcT7fzCXorfptNStNY5nGYYVURuXmtf7cwUAUTZaa1PRvGshNUgot8BJTdtcW8qS",
  "key40": "azcFcuq9rTAmtbf2qDhxVrdJcyGgk9vFw4xychh1Gp98dJMEhJDdr7JdCcnSAbho2CVRVYnTKrPFkMbPEnuWcoG",
  "key41": "vDi8nyUEjh3cuLkJQcU4x99mYAzSg4MHjHraHoZpmWJ45mS41Ju2vfxtaNVZ4RpYBzuH8dMhi2XM8y5FCacRpfe",
  "key42": "23FLdMrTcPm53ThYNX5BCUcVrvsJgf8KX5SU52cSyAnXAoZho5UdipzVeofY1R4iaZZrYnwdrZ3tFe12SiE95hdw",
  "key43": "5bGg2uFoyXE4JxoTwsQ6JogBeMei8rjhmi6ocWKSPm2ZBiuJcDButHQH7peujFMRWiYkM8NDqSFpc72mLkPDnFn2",
  "key44": "3ANCz8EDXiJLvfCXWXcehYQpt1JiA7u2HYsC86L2cAXwjnJQypmYWHpc7Kq7bjxDaM9Gy4Ju1qC4LpP7WikMmrp4",
  "key45": "gPkXYuuyRfh8JD67JnEwGSYz7sNdvhM7pipCsV9pt4WXnE6Hie14ftfavrBgEspoJ81ZAK1VxqEeuNfhZ42whmb",
  "key46": "nDi4ZykNwdoxw2T5Nv72NMJ4yJaKpts1oZpJRkgRRdFgwjNaJiumoKfHnkTeuGdZuo6AyVM7kzZD9uJeaMUAw6f",
  "key47": "3ghUFG92AHtgqq6Fwpuf7xVUNqtALBnE1csFMe5zGfSAcrxMxNTNgM9Fixb93CQ4Ga2AsysjqPZ8jUUtSDgvtAWB",
  "key48": "21fCCSnziFio8mgRPbconuxAaBS4ontCiHdihfBXKXtzcfmozWm3K7vsSE85dDvN9d12V77WQzWRaTZ7iWaCaZ8F",
  "key49": "2meFp75sntbp9fRTbUGZgUfpngH6JHehjPLtfywhzWqGkmsdToReofdMmGTYpLMaWyJ81fu9rmPV8Bha9q34wZ52"
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
