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
    "4E12KY9PfYiUXG6dHRbFsj2QrxwCK97QTVh6NiS8C3Wbi1kjLT38q1bTmFwwfGjejxHxQatSPpst3dA3SvcXrDX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o5WFyC3nxENtuypY2MGzypgRZw7uuc4yw8SBvLn2kjoKiijvm9R7fHyv7rV7F5SzN6ST1XZWR3uvV9FpjKF9qxZ",
  "key1": "5A989ZxUTwkaHJD5nJF9vRrwCGQ2TmRMTFvChskPKxBVHfDZAfmTkC31uf3VC6SZwn6sx11vBzrV9jZ9CEhRsq64",
  "key2": "3KZQGD3qBrcBenPtUqiyj9ac89BGfHx8rKdgaBZSzuCC4ApHibeL9b3mAXnHrMcqgErxaMKUgft2a8pGjkpdghjd",
  "key3": "eB1H812ceAHHiG7BNjU2pKwZ2PRf6Mdj42w7FNg4erixXpXWiZWMPbnR3WGSA16KC2Whe84KV4N4K8cz3mtCXsc",
  "key4": "54QTVxZuX9UZPQCYixD4u9fVZbsefsoENpmVDbXx1NoHahEsQwqd5HZyNbobtg5MVrq7FfYcPamaGeqRicoPfAdF",
  "key5": "1KHEPpcCn7VamrpFMg2QBLPTv3ropbGaQrdFLFjTvbenDgVrarTh7tDRJvR8JmaC9eVk35BGUdJRcuGfp8LJgxw",
  "key6": "36NiV8CkCDkxeXwqQHbJJuMXV3pQgqbiqxi7m94viMb57QysuKCBCqX38MUP3qKif3Z3GZDvJtbyfK1RnYNTqiv4",
  "key7": "4e7omcyRUw4e5yFWe5hfp8wDHCg2kZXmZeveJRYJbJbjPfLa8BK7xUsvskVQPwRbZfRmQLA8PbikvZKjg24e6qRs",
  "key8": "hp6mKCGMqp4GXENBfDhKa468NqsHVpkPbc1mBHGPmG2i8bevaBps4WJzqx1nJobcYrYge51AnCptgXJBEntHDYA",
  "key9": "3fkqLkehXxQU7dJJGbcSHE7g5UXf1brrGa1Ph4CC65hDuWn93UyDVJx5tRnDJWRBvSWNfVszvrsm2YzGFej5MyGd",
  "key10": "2mKAMAJ4LPC12Ug6Zs4Nnvp1ERdUm6ZFjmpCKgtXXp1xCAL9NAHvBmdaoMFt6qAartp3eTMAFitFKHUymfFGfcD5",
  "key11": "48zS8hVFzM8wicaw1wKBPJNECqDfzwVivSVZ1mLG55XCYf2UC7ophXxL6EjvnQoUVKeeFEUMmCH33S5FYKV4A5z",
  "key12": "66YZyRJXSGotkdJ8LZRiAJQpvxky6EuRj6BAP6TPaY4n4a7aem6CiTurVc4i5FmYc1wNCRRuLW5ZgSAD6wNMUBMZ",
  "key13": "2LXPNqvDLTKrTsD1V9YjXyULh776VnsUAR1nNkYFo8ZLKLWG1HniqCprEpwAkcmgXxhX4fCdsaMgcGEQYWBCjU3c",
  "key14": "3U3eHeZLZg9vsmaqMLLDkLgB9qkXLtv4ho8pWEZnqx2TrB2WDA2vxSBhVJ4LoYhvojgcRaBjZ2ajRmBp3NBEJ5Vj",
  "key15": "2ei23PbvQ4NbkzBi4XJp4xgCYQgByHc43DYFasZsXS23SqQLCYQ1wckAbzFmg9FB6k7GR5RVb5MuxMnSo155yPKC",
  "key16": "2549xqAmf6CibnbzHyJA1W3SVxJuYPecg7Si9shj9m2TCvGzEyKDGzxPgw55pS3eZK4N3MMhEsYH55W3kEy889gp",
  "key17": "3Evs5cH6N2VR13ATfMr8WLM15Hh38EScHGtdFjoorerDTt8nwM4K643s4EwvyADkpGHuHpXURbT65hEu9QJGwgcf",
  "key18": "4ucpNHkZMHrDrAWZp6DFJpCaox6ERVPHWaJ9FGfyGcHGdp2bgcS5mp7uQUUEEMDnsjWo9mRXXQq7jED43zXFjpmh",
  "key19": "4DftGFvtu6y35PChkG98hXPJZygm4qtSQ6h3FAHFXznLMDXHAyvNsFnyrhwdiFkpdSM3JjuoftubnoxJ7By46KzR",
  "key20": "2qCJGDy8hbcTyTzhdb6RtKuTUHtq1ntcwaAdLj5affUyWab85G19hE4uUTUVpepdD6HYTAGzm5ju73bMeuc31WGP",
  "key21": "2og9bi9jLvCL87jspManXucB67eKvomnUofBwUS5D95JWJFdCCS16yL64iMiGGzE3XJiMmxgkSxr6LPjU3iHiprG",
  "key22": "4pyTvjt5b93fxqgAEidiyjihX7LAiUf2RgccKHJ4f1FQtEt2Q8uE9ts6ksvivkeTWVkXmTEPw6NWG5zDDqK7pZAs",
  "key23": "3hrGgr6YYDsazwFJD8MG3UwM7XhZ8Jdassc3K2woEdkAgPvesUaPFtS1EfpL1SnWWpqdFD4AGqtur4ntNUCShNxL",
  "key24": "NXszR2Mc6i3pP7XGwqvFHdzUB8PqefxFNsCnYhenv7JHFYWMoYJkA4YfwafhHM2hA3t19JsdUmxe7BFVVH5zock",
  "key25": "3Z7ATtSYXT5RZrFZn7GmxWJYYACvPzBK3GQS7FMr2pW1k77o9KvAht64bggYWhZdDGuf8RGwHmwCA8PieJx8bf6G",
  "key26": "3cjPofcmQQiKk1CaJJubaaBkCdXKiXArwzMAEn5pGyzVPLrKYffb7NXtEtY4FsXSVTPr6mizaKMAf1A5RULxXCLx",
  "key27": "3K1A5U3hjUB6iaS4FbHU5REMSBcGf9c4dcuzLpdyTAzAg6SA8aF71SDEfKGJoq5od2rLNS1RZFc2H5KM42bneaF5",
  "key28": "2DmsxmrBecuvw9ZD6Zsfpnk7CdeY6DkGnGWjRWvCMc3VNNQ5F8dDDpcQZnL7JJcNrZJPt3k2F2SttwNdkdQmPRaj",
  "key29": "2UZFjz4h3HH4kdJXmXw2TDKDwNJW5NbcmPxocAHAUtzd19pwqJYSKFNFKEq2G1rCroWrnGxreiepXSSxpiTvPgTo"
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
