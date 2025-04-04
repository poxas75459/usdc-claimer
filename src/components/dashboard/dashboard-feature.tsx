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
    "4JyrRgh4S9JttQoi7jpKekrM3RmNVkuZn5nt22gsjh7t1nejEEH8HBrRrucpVc85pJzHUyust4jHvFFZ3Ei6niq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xJpLJTmpUZS3xJXFqenPCyd9KcpkrvwFoPh97PjcPKrkmNATaAsQJTYMTL3SDppLQ94WYkg8aQVGTYUb9wnKBkt",
  "key1": "2KBhtyRhj7CHu4X1kyZqM9aSjXcrxQsZ37JedfZWm8noPEeX3AWih4gZHigWmi6fwJYokrtXb5hybFbecYg1L3Aj",
  "key2": "Ca5dptBX3HBzdcu18jEZBdXyn7PnRgubvJ1c4iKgEHxcUP5jPmJFBSWbwQiwF7p89YxDk53kPPAPrxQrbCxtqT4",
  "key3": "3HqAfpGWumMyUAgFP8v9ca8mniUWWsSYZeWqd9FbRKUSjaCn7wL956JuXoY7zSefyDdykpemN5LSQ7cotdHNe9dG",
  "key4": "4JaoqNxAjetQ3nX97vco1JYiuFGeftYMQuNFqDJ6PUCctdH7dr3HcgYQiH5CPeaFqFoyU7P2WbxhmYWqpikpENXt",
  "key5": "5XSY551gVM3YE87PiuLAeHYrznAuT3mwxKpSMbNhDVsnfdDxRqdLMMCg6dPXDZEF5Yxn6UrBm84e55FpfgkcbW1S",
  "key6": "2Ce45PLVzu8VTPhUXsRgdRtHhbzki5y1fZm9eaxdDuMNKsHANtHXSrDhT9ea9GtZ1qwrtbogdG1NF8acbLCMiafK",
  "key7": "2zTzhnHAS7dYRUBzoKA4Y1LAemTS2eBMJcwCUZaZfKdVHyuqMozPH6ZWZt8kbpE1N9ESvpdVkgQqmnVhtk2CzxD6",
  "key8": "4tNWane5FsgyfJRNXz697XpHdDwntQ3jWB1Y9HDV1t9c44dPp6y6NrXpGaKmdsBUNkuSg5E9S1FVs7AAs45CkAd9",
  "key9": "3GoNRyncni4JN7z6u1rt21b5uUqoMsvnugPaCgu5F9NW1FXt22beXHPH8wrt93HrwoNBKDFQxUh5YD9vRDULsJde",
  "key10": "4M5KH4U991s5XyJ9KuMLepCcrbznXKnmkuyoitsSd1rkscdNpB6qnpN6Y7mdfqkUWKgghQFiKFxnrJnGuPFKUmoY",
  "key11": "34BAed8Y6kaPrq5bgmchNZF4wyjjrunaT2Qvnmv7Uzm7wMgqsVzbHg2DGp4WFH79C9AeWedXzULe2u8eev7NSNUj",
  "key12": "55M1eqB9uXCzX9WVvQiu13oEEsjm6TukijpYUikgcNQx6WtEd4CvkbuysV72HTYr9FRAjBvYzDCZyZtauqAts3NB",
  "key13": "41Re1wYm8MY5dX8QMgk8Uv2k2CgeaFCJ1mFp79KgyQ15xiQPMuQZ9XBKMzPFfMwLxFbejF4d5Mc3TwoSsZFJaKm6",
  "key14": "4KiXAHEsV3Q4G1eHRqRutMHNMqe8Zxiw4VthHjf4e96QZgbQ6aSGBAmWtk2HY8K16wtUbeTToejhYMy3JKkreGuj",
  "key15": "2iHRznMarq6D3C6oa8dTwcNdUvZd2SG2NjwttmwZWKzUmCSu4TvfoDjKwcFX7fnNyVHfvoSuRGyw3Y3H3mqH7sdN",
  "key16": "2pZVwVHiHcwYzE1g74tRZrzpWhTvcGSBg3pm3XMXoNmfJCnUeMhM1BM7aqDDACVE4djEoLJcYei2iFSHSJCxXEWL",
  "key17": "2sbSviJMidS4th8WvPMpYk3gDuc9vzQhCw2gT9aBkELwdJUDipacY3JJdpZTgFRcUyat5WxNAxHHvknAB4KjnP7F",
  "key18": "QuHb3PotfiUmNK2b1ok8TC14hweBL1tbAS31UJCpzyov88m82Jsat3sqF4EczuNVZFeWJ4UvTQpcTEgBcQC7FHo",
  "key19": "4QPsb9SYkuhrSnsDxTFghiS2g31cLHo71pX5GNn8gyh4jVJZ3o1GWSwnEZ1kiLrghB4eBzdDbWfdyeKJ9fK5iqPV",
  "key20": "5nBhNZiz4rAxmKXEpxJs6Em8MuJ4CwAE8sEtLeZzE2sDkkFxgvjAtmot936tCjrUWxPSjprgPxp5VaEvCfktYVXK",
  "key21": "D9NEC6kymFzhux6Y9HWuY2vrWNnyYsyG1BGbjRyKzsHBPHzigXCN8PE2NouU6jn44mvrtE6CMuLf1hJ3y8MqGm5",
  "key22": "4knvLMW5vVFTC9K62C8wwCusDt7PfCmyY9E53Lo6wo8ymniXtvLiYfrLeKPksdvZHKxsZab4Xa79Yc6TiWp8wc8j",
  "key23": "57sKuih9mYSrcWtdGdTcF16nyrtxWaQkvhpR2KQZLV8XMfnf3TXkcMKnz2qiUK6ySUma4y75NDffV2jnQwkh2vkA",
  "key24": "b6Pze6j2sL4ZAr9cSmMx3VJrZJgwTheBXMDCz82jSRQiwg1uez1joK3TE93n4EmRUKPxDEAZ1iuquX28s5aYZWc",
  "key25": "42dVUpAbdYeALbMUeiLwG8dcqZTmK8i2mKWrLEbQQaPvwrjYyFhku9xHDnKWdeUjyEc4Yx1SpbNxMTM7CjzaJE1A"
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
