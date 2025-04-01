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
    "5uUVALn2NQx6dw4qvSf4NazukDwjF7gFtVKcyDRVtYtHekmcBiEH7jayYzTWVv7aXNSmyUj86jVPfnH2zmg61G6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jsq5MYbbn77yGXEhvjJzNb13ykjtya3LU5FkUACezuZB64nv4S3WzjU5fEYGTFniyw2cyTeGZc9YvpVk2exW8Jv",
  "key1": "3qbTw1jwfxp6BmG6LKPJkNSbHhCSQCezmX71GSWJee9MA2mNL7hRf8XuiV3EAthXmSgDYvNyZSRgDTEcc6qUDWqm",
  "key2": "4yVGaMYeVMbUQHYSd1Nq7DeSKzxtALi3BDDmmYrdtHEHS2WbxH4ERcptfkD6R6SvFeo4gQ4eBhMFhThji3Rsv2V6",
  "key3": "E3x2sUR5U8Crz7nqg6oF9WDrsNQJgAw3kfFiEvwSCyKkSurHuj3XFfsmnVca1BaCZixsPqPqGqBk1uEDfpWq89f",
  "key4": "2bGswhmhGTk4gLCk2zYm98ZGa5ExbCufL1fh8syMaLvUoW4pAXfLpL3ryxBQiSJkD5KzJYV6jmytfAv84RqZnLxk",
  "key5": "65Px2K6AWhGyS8sKhnF3sf7khDhXwYPKXHqGL1548S8Xb11hVEUnjGEiGo5sfaen3rqPczXFa1itr7B5Uc4FmSXi",
  "key6": "4Z5zq9c4LonuCq24Rzcr8amUZimaEK8EzBy4hMSPVyFXAdBEwxAt2qSETrcFyjQaPJtj3gyeg3rBpxxhzQVviqEx",
  "key7": "5s1ov5cEAQdDHB3uhVNSc9H8VKcP1VJFZqAPzPxo6dkvb7q27NHgaqZ46uDWDQ4R2CZtA2L5iRNE8S15Q9XuW4PY",
  "key8": "31eT8NYyy2Pgnw2w4X1fGEud34XL4X349F3SKs5qTznL8hf91qkts5DViZvtGf9mfMCM6KPZiEqMoQKsLJYEiD9S",
  "key9": "ouF2zxoB6rFrCMvpcF6VpfnUad2hkGGcbTEWNiqEg3BQEMa7pxfP9nyUnczjHHfYAoLQEbRLgudf1vu19Z9NEpD",
  "key10": "2K2HxsYxXfevGNpDib9aQDpKbBsgeJWDehK5iTYBQ16HUaYgSJk97TZWgg54gtGF8GLgKKV95qvKdHJ3kReBaEo4",
  "key11": "5jpyRQizTBa3rvApupJPar66j3twjQ2YbjcBfQTsqC9qsypxfPxKEfDqX2WYNxzRVHZi5muxdHGgPJTZk6B3Nvty",
  "key12": "5x1XgELs8rYLCrApN1W62awjx9apvhXKMq7WpsbhR97KorgkkpkaiShDeNpuy472AZR8KE4hzsZwkT57NM3PsJyR",
  "key13": "5Bdv8JVmFyDC3tHUgGxZvQjs5QhGchMggYj8ydawqaYJZXDpD1MVHaVg2gTGB6EMTgaxwoU2CYzGYNbEi1xuNw31",
  "key14": "2P4MWfqYV5oEbzX2x2MbVCGGvyuMdbSL3FYfsq1FXfB5gQV5BZ2gba9JbqvRrhGcWVhQC9CCL7dpC68umpCnu7KM",
  "key15": "4Us2iS6dExwR2Z7QwzRTw9jDBDP3bfrZn5kjto2nhHiqNnJVANH2JkiAK9X3W4TNEePwYvk68PxboR8LMEzHdcbd",
  "key16": "4H9uPQte1du6bELRaCm62N62HKgrNKmHvWhG2dgD4dZwKWU6VRuxrohLt4vriyxxnuFnF4GLFaF6vJJF7FopSvQs",
  "key17": "5Thnhvhn6mJXZkrJK7r4qqxxX7vDHr9gvK1i7vs3jPwJowiu3b7PV4CsSfVRbNrCWbVF2wcDhGTL7yVcqxFHr4St",
  "key18": "GrQfTHZbZVT8PXna84qag51WkmwCr7Lns2cjuF5mS9NM8ukCykFkJbYXn8y7nSwCPSrazyW6xwSa1mVCPDBGJQ4",
  "key19": "2u8Hr5DL49DxdeVgegCHZwQMvyd9mUg8uLWwSZEvXRQ1n1XsgFKUXtzZrEuKrjxz7wHKFSEoTLUU7TifjwdcbLUi",
  "key20": "4exqufGDH6PvzexTcdcWgcXwH8NwxwJVw5kZEYXgYChS2AxjTFPfUsxFLREfSkDsDPC5bzbrgWnigFaWJMfDNe2o",
  "key21": "2rYxyEj5gaT4norbZNhuK9rjhxpB3WGDMTtDiURMpXvj4umBN8F92kXYmATKubS9phCyMc4PAaZngSxaJg3LTi77",
  "key22": "td4fAvAVEmDyBr8LPzTsoZrBgbg5LLK2F4B3pbdLE3pgFeYvLYDPfZocv9qNXSYezQ43pA1nhvTmMmxhwrZu5eX",
  "key23": "5SABXt9o4FRjXp1b5mEBdnvWuAjxkcbb4ie7MVjitT9obPJgFV6JUELi1pT86DSpJSQ2zWe894LKtirnQN8cXSDp",
  "key24": "5peuboyRvXp8PDik6dtGSBYZkzs8ZVzEew79SEYBEoAsVouqQBkFkWEFEutciFfrevVc7pEs6gWxJKPwasPCxhdd",
  "key25": "Efy92Cwxsnb8JRCRu81jWXuzzmFSZohiexWLHzuzvHsiygoGTJFy3cgpSquJXYxw5Jz9WyZpu7ka3izAzZdxfcb"
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
