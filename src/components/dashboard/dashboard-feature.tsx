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
    "2ho45uBYUnUpFVEcoyHcJ9R7spx4tFdZukmrnz8TXLq7EFifdiwSwaxoZB7JtG8Z7NSe9WT2rMBzYAG9xKNaTyN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D9YDXmEzEkXP8T7KzJU1DgFrusCNN2zp629nxomVcjMQDUYs3LzJHJTjZb6Lu82FriwsfYiqmBDoL6RD5agD8d2",
  "key1": "59QUFMfTLAoYLSRRRBZ8ZJ4TikjEiEkwEAZeSppKRdXprSmupAR2vRdKUSbbubjiLsMfRzqaD6gdNpA1Rk9Ff8Es",
  "key2": "4VLX9gv1RPo5aVQxRTqUqgr97XQ8PsSCUgz9JKM5AGmPtuWfQuyW6ibXoE6e3c8auwJ7DeTzPPkNpZjhB1dAhE1t",
  "key3": "5DdzyzKLj5rwakQk81AY3QJMEvwQ7AVhezTtj5pVCikHa4pXN47kj9XTgijxvU9Rrx9f22v3LkJnfF9Dteq1K6vK",
  "key4": "hfAPu8yCqNoxGWc6C3kebR5zDsDeriAAoSe9jz3kJtxMK7fL67MkHe3q77Hj6pbuVrNpQRsUp9YD7hhp2L7X7sT",
  "key5": "5Weg4HMtfJ2RQVbhKbM63NoBEg7vfR2sG6ch54jfSZS9qt5juHPuhJ3JBQWby5ipeRPXQXJXnDyCMGjXDRTdnWMb",
  "key6": "5wZR4me2nQacGcbubUKb9zkaRoirXW1kWsEL3tRbXg7yssdL3GkFrrrA2sPxFimMqH73W4ns7dqxjcPn5Mhfzh1U",
  "key7": "2uFTxJGt8AksuSPFXLgTLskhL5WJnws9H2iZKvyuQ6mNWr6QGSigq5J74FJnJqKUP8ukhLR3rPHkaQfNm7Hw83cd",
  "key8": "5XLMXUuxK3w76PUAZnw4SHVciD9qpGp6pExPuGhSyTigZQJXdz2mX1SxpERmb2J9N1r4PTtMesGuP55Qh1waMQwJ",
  "key9": "5nQP6273exV9fs9anA36CHvfWWqwDc2qiJ8ga12RaoFr2AWR4XPfSFrxtpP1nxtuA2JwAYsuG7CTcwv8tG6ng5gh",
  "key10": "byoiHz3ZPCRuBVD1YFRNoZezG1o4WTSWoF26QzH26VhzB1EeaTet7FQ41SbK7LQntoZ4quRpVJ3BKfMEe2QfNte",
  "key11": "4RGir4bJ3kYBtaD7EJ4mXYCc7VbiPn7Qz4i5KtsD97M6seBHk478YMpnb4xzndPL232vEmWHyZk6z2jChR6AZJyf",
  "key12": "3g48ednajCKLGb8YRP9DkEitE7kJXzwuJ8XkCnAcHGSHG1MZmNSLssc5dAcLNRNeeF2mCoFJmJdUmQLW4U6WsQQi",
  "key13": "2ruT9GbyEmMQNQtbZ8nVSXt9AHwyaeFxpjLQU75fEtPny4hhFuZYT8hQxhgUw9PLoowRjieXJqntUtPhQAvXYmUj",
  "key14": "3K3pWnV5XKo75pR8Z94cpwY6qc4S2DcctyEMUNgQ834pjiFtVChxTUcWMrtKbD9u67PM48GhK7zNqorMcDtBWXqJ",
  "key15": "5zZpCFmNU5S719L4rterAqfwKGGFzWvwvgNxx7GVbExmB4SqVg1JguN3yRBcaMNMf48fTxVstxd6C8ohkcNKFAUF",
  "key16": "26egbiGwxw5vprmbTVYoDghkpMRgQwmk2Qn1hK71xYHjYwxQb6RmuBjnUXssy93BZ5Ksk1afuHanTDRYpReyhBYP",
  "key17": "34GZgpz2z4su41zU42vrvNzYkCsfJptPgip5bv5w5eF8dRkBQjWnM4m7TsDYwrbV6qmSvM4YzLgoXcBqqHsoiijh",
  "key18": "7ikJZBkHoHEyguhPMfUrCFWVDxugj7eQ7vMpPdrzftpgdcisD6F8JL6aEDkkyvsWZSRa1RaQRDEHiMpW37b9kkT",
  "key19": "4eZ1RLnN44TG79wqrBM7ZPMtteNCMM1fBgcSSjUoUjEvvRsgsRMDBK7RqK7ELaPjLxPFfWrsJ2DVBpx3qPGkpQLZ",
  "key20": "2s3NzqdjQtxvwU7TWBAWvcK6zBKXTpdtPAgWPbTAKU6rdYnHPSL6F5vBFQJBoxeVq8gGjJPoSfzVGy9QhB8rNCmL",
  "key21": "3BmubmDYBBZQjfZuBJWjnBY4Na2vsYZLgrmuxycKf22fptnKB4YasuXo2DHESMXBi1wcdBnRiNNZLD6jYT4X3BGC",
  "key22": "2Wifyojy15nVJBUxb3u4ghRjX5CZmYFTmA5hnyvF4mJNHBivRtdYkGCWFyhHYuD5qA5m8kaCFutQfgkasijqEKPa",
  "key23": "4eWSq5friNZS1MrFcSzs9ENsTnVYJuA9Ut4TyPsmhagdM3B2L6VfwDvYgqqkfR28VB84JvU6GrwgKzSBK5RPpjDN",
  "key24": "4KkvdNRvhhnas7nhMHvjhrvcnH4oBXgkikNPX54vEZDqDgM4kJLoorandh5z4iQHaari8NsUGStzf89whTZCYvcY",
  "key25": "4mhMaNKGQggk17AUy3zr5axuVjMaWZgTUjf4RtRLs6b74eDZXuGPqaA1KCxyzsiz8gKLV6zVXAuxvWfhtxoHpiPe",
  "key26": "5W1hiDdfbt5fH26VBNStcvNDiKRhyzLJSCTK8GKaJrPpaMf3bcCNzm2xHJfktidLnvLWsyf46X8SwTFgVP7pp7RG",
  "key27": "5AZi6HyAoFuwRzMf2UgQp3NMdb343GypN1QgnecZHV3nk8LBG9kncNC73RoSsozD3nrLExgWkC7fmHBxBMPMbtkZ",
  "key28": "4cMDEaoRiZYRJ5v3bwZKkN9uafL6H9mBsiL8EJXmeMVmqEURCp4ytqyH4TT3zRMNVxLWofvfaNttskeq3pbX8yuB",
  "key29": "3L7gLfppyaR7Biz1giw9MhYw1cJ9BtiLKdd3BMYFZdwRdBYCBuHVHEfkdWqDncrLYcjtNWJScigDsXQgHi7DWRzm",
  "key30": "37BVidktip2Gq8hir43m44Vwrndi4iriCad4UsWmPjSA9y7GMzptqpbcqfwYk18PqZ6QSSDDZ4ZpUc6zy2hj9HGH",
  "key31": "qiqCwYd5sjeVRkkNF6Hg3h9kLnLt5FAvVQfQiaM2By9pbJGEAu5Qv3zm4vcrRaAHTxihiMN6d1tHP8ZBA6wyBpb",
  "key32": "Z9qeGAgk6TpuHGk36bqRMyKnzXwjCxqrmCPxs2LjAWX9nZTA3394HQGMfXLvEQwGFXovSvxB4rSPimM9cm4642C",
  "key33": "4RWGXUmzV9NEPZ5rWSfDzEmcdYedV2ELMFqffu1oT6PQBcu8yq3pSe8Gfhi3xKeUUQ5GN3nCs3gpmutS6NQKYwNb",
  "key34": "3UTeE15ckDEJhnTK5AfPSQe6119w16pk716rwXPK4Y48dkgEi3ogdVV2ZQ7MjbbAgmejFU9FUzyvzkfrqjVN9Pr3",
  "key35": "51Ckz75ZaczS2povsWBx5f75TXDFjqfFHrxRjNMEaTQnfjbPEbz9pVwM3Nx6MyRSTUXkj8r2Lfs4qWzW65CzB6Ps",
  "key36": "3BSuT3mGzAZQbdEnpsYt2kjStsKPphhr2USy3nUy4mUNz7D9PWsYVCqSkkcutzyaBjQgrXgYA1zKS9mDD7qv4F89",
  "key37": "3Zcy3t2XPq3pW4pDjsUKRYvsDsj7oJ31r9Hejd3mib8ZPYKKR26jNrq1VarqwQ1txRFwCnTGsFNFpQ5LY9xhzZTo",
  "key38": "29ysk7uETRMnkGQqay9o3222X12joUB1Gdq6YxbkCCzSLKvuvd7DV8ns5chAu7JRFjnvfSJfXMbdbqVJqDxbZLXC",
  "key39": "5jFsgJtJqbvMpXpddzWB8oK9BiWZdDvDicW4CfX7GFZBwgc3PCLepo8aXSQNXHxHuYijdPgm4W3DdqwhoyWGvPis",
  "key40": "55SfdVtCauMaNrzKA3rjSA1XxgDFKceBSmPzZdRHixZ4HePQLNuXkAGxYtmLSvTJ6sc4ETUCQEffqrN4JxpeZwsH",
  "key41": "665AaxvieJrEqaZGosv2PFbCeSkUqp6N3QskG3UEhYT3o5eKiPDiov36W5hpqhqkZPurSizQ4w9gfYYF5qXkQy4q",
  "key42": "5wTuj21mCu7V9yWMDL39qbxd63sE8UfKWsuDmizjXmH9SSLGLbj8b5sfZr9qdUJxGwx2FnPonAtaQxc15ydyEpCj",
  "key43": "RPmmVmP1R5sjvhekuebsQJD8tKLDEdg2Fc3MdFoQtJNELx2qwAoxQN9Ht6YYQSvLEFCsUrur2783zWU7QXY2rLT",
  "key44": "2QdjmZE9qDdnYTy9n9xxYJNyeyYoiqC7rVjdBUhHVVGjT7usGF5Jq1dPrVM1ybXMAbobj2kAPiFpbz7yjnLnsu7n",
  "key45": "8GGzijR8dgGRmrsi7W5dKZWci43VCwDYmwu64aaRvkwga7XkPRWfLYcXYn2Y2cRJR17J221i2f11LpFgcZ4zR6q"
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
