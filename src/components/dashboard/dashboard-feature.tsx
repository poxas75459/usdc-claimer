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
    "34U3sB2TqrSXYjyqH7CJ8UCqesBRZ2PhgwLuR2rYr4fKdYpcCz64JbDKJDHGZFm9xYCHvTX9b54q7K8eNcEgh2QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rKGe4BwmzrnCPfWw36DdHYriRcLqqThcAgJXVz7jMzAFSHMchtzTQRiti43dB8c6u7sZWidQjKXxHMBXsQPfxKy",
  "key1": "5BFfaRD26etnEBrbgjsGbVzz9LuasToRZNNRUzsyjYQudWVdJeLRvQ1R89Hsjm32W5fRCuyPm2ke22qahJ6LzXJN",
  "key2": "dTm8tJJcCxWgVPkkibKFbjrC2JSMboLVqs1QMpRjomPq7QNk5xg5Ebu3XuvWhVvKmfEp4AndeKXKGvDSY8rVeWR",
  "key3": "4robNdWE6fxrzsCy5C8bGeGg8nMzNCUDSrVVTE3X6m4KXURniKaz5JMAPHL4HgKkZMeLVxXby1Sfpcpx3h6TRDJs",
  "key4": "3PBQCTr2bm29hGz7XXX2iNxi4dFiVDG11Zt7oXifxW8ER3T9YAASn1xqPVR8h7ijidWTKjm4GGF4LFkX155WCFau",
  "key5": "3sXKfqsx1tTeYAAJAtCXsnaNEXXQafAkUQ7nxjuRdEjdW5seEyCwZp7yqUgAFXQTasBo9xBYyJ3jgYZqSrtQ7KAJ",
  "key6": "4kkApKaxi8cZ7omX87iN7nb2Trai2DrR8xiTHwvGf1WbgsB6xvFWXndPtNRnt4y1k6oqby9cK71YBr8kQFSYMrte",
  "key7": "zuE5fQ8Xzeq1qxaEaZCgPFLfdc3ANJao8qdai5VDB5c1j6f8aJQsnTuTo5eiaNgvPQ6GAoLdv7eMyxuf8231tQ8",
  "key8": "49uNeDQMs9BNTozwJoKYZGEw6hD7egUfNW2jdF6C5Sc3i5iNPEgpCwaFEZoJnSJnw4RGbC7Fi6kb21MxP6F8BLJC",
  "key9": "3UiQmnrKEknmK5nfZ7TqEdUFweWA6Ta4H8RnG77jtZYrD5W7hDFnLqUTdgW8MfSgHCoyTAoKLZSRPR5JmpY4q5JE",
  "key10": "5Ai2Q5HREBh9m6i83qt7psmkacH22bushKdTv11w1TtuTE2DtPHxkbNcyZgBkYadgVNPeUdscqKSsD5g7QS52RUP",
  "key11": "4PJYXaqfpVxLUNX9vrxcpXWvf1qmsEzdQPpQv2CztHLFhdgrfoBXJtQs5dvumKYdJUpMorR44c1LuAVWZ2WCzDPc",
  "key12": "4iCke5DE8CnUWXMw91Dbg4wxqnzPWGi2Ub8TkgwsMxKCq2srFhwBmtcWPXr1hxjPT1kfnkVAB9ftX3crkb4LvFim",
  "key13": "5ZDWG2qxsPDBSMEguBCcTzC3EgijQPM7xw8pkcpBCDmsRR1w8GUbAkvsYMovqVj1ZmNXKojENEXzpZ1D4tPA4M9X",
  "key14": "KwcVXzfg7mBhYKzTHmgTizfrFbmCXcs73ksEKXFDA6Mi5MM9VgGxFihHWQV1PYtSK3b5BNervNmaMkTJm6dZKLk",
  "key15": "4PtJrqDDX3zTSguRMjkWN53w2YBRrPnxhJQvmJjNmHLGFjfYwndUWnmoKEcTjFzweP3wCuhsefcYkSHmQvjcMF2x",
  "key16": "4BZ9mek9e94AwTivFRweBD9GZmbHg2jMWocJtUaR9SCkkPCSrB5GfYeXb4QJ2FYbxd6gtbUHDxbUX61spYKjqAyh",
  "key17": "3xW192jFVxbbSKdh8tNpVDVyskjtWazzdv9nhxsfuyoRvivvtiRqgSBSwUKRodtmtz3tLek98XA1ReUZNugSSvTZ",
  "key18": "2RvUUtEBH1UCxUHnMfowPTnd4bdRDWiPuA8m8VD1j79EivbV6VftVtVgjPAwuJzAH7Atgr54AYTt9L8S8eisovyQ",
  "key19": "3HzRJ8a7E1BMyTyEwYMbuFaBAHPQmHwhfmFkZUXta1Df27CWCecBu4i15NWx3Wxd3zcay24q4P3TRspmwzU6B9pC",
  "key20": "2VEpAazXTbRsffV97A17ghyGMKNd7Xv5P2pMbeStdZTNW6AHJBkmJe7dAmvEdwsCAtihwMEhUqkzxEvE5RfCDciE",
  "key21": "38Lsh7T6QYELiW65W5Fv7Sp7BvgxsXCqKzz6Eid3ZPSMRPuga4GR43fxe8EXnhwYTw4RihwB1onjBvT34hxtkKzB",
  "key22": "5XWyLptCaX1GHKWwbeEqDEg3MDW6ZcNZVNejNLUT59VUandRDF8HEaAkCcnQtLZgmdRh1V6jQpJbxLEXAphNxxeP",
  "key23": "jcp2MZJC7M9u9JL92Bo8kp6L4CdN64cFzYgwayJnWKsav2twUDGripTWyN8sqdWDYPghitPHmqDX3A3wf4HKTTS",
  "key24": "2K99j5Qxu77DBM1gpTf6BWAZrBHs2EJah22V8TJZzxNsZNPvfBoDv3KCXoBGcs54vGFZer6FAyi9QZDx4jXg6u5H",
  "key25": "rDCTnEDqgQPFc9YkNw2DNBfwMwpz7aDXVZomNKTLVhwU2UotJaE6Uku5SVKcczikts1vdo8Aao4JQ6V82Y4oSSe",
  "key26": "2YPSym7DoBYREiuD5h4piTBq6mdimQCgK993eqihohbhQGV7SShb1jYRSzP7Wc7Ynzq2SvuoTNw79zyeovS4L2Mi",
  "key27": "43oHvRKJHs6Tb7ApspGfPMXWkHTX7VVPT45Vh4JYXSA6iCXRx9pFFi7iRVphz7Xk9qTv5qvndHMLcDthjvoyU1Wd"
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
