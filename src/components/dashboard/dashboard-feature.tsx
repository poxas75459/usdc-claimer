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
    "2PLGDB9aF7PmE9vy3Gg2TUsrzBt4MdcfoXbxhaV1chXRKJueq7TiLKqCrkAUx62WB1oq69faz4TERLV87iivmu1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37jLaZPTtxoPvjYmT3Pu6dH3qYLj5uBHjyvyWzs9vkoZYK5HVb6tQKoydYfMGj3c7Sdir7CdzKK6yZEjvqNEa4m7",
  "key1": "37nhN2nH5jCYq18sTrYnChKJKpfAkPYQoJxcLLBCQkgdih4Smv3MJ1zfdNvyUm76ALgBKaEruezLdnMAG4XzxhBT",
  "key2": "5gYqFDeRat84xheVLmFxYWyoKHJEw4hQ2r5ZJdRaKggGLVcwyPdenjHutDHphQSjhdhMgigXvwZg8wNFA5FdcDyk",
  "key3": "4KWDhLfEi4PpRDpwDz2z35H7Gr7v2VbbgQ4hjzPRdDHL2thFBQsUahuXpBMNfUdRn9bs3YFA2tQ9A6dBQeXUk14o",
  "key4": "4FcEvtPKzNP7KvRF6pUaVq6oTHuWBViDnjFP9Z9Yf1xUA4gFCvxS6EqrbUo7nghXim7pbw9S14pSYAaAzj9CpuR3",
  "key5": "5nRoCbyTQizxrH6wLdempkW9evxeAyuXP1u7XF6LprnP2MgX7cBLSnwisvuY1P1WGy5NHRNpEg3ikxHPoQ8GUru8",
  "key6": "5K2UsYmSWkUtgc5vD8AcsCCcLs8n42MkhM9wwd6SyP8kKdJwaScXXbdJscspm877LoE8VpcZRm4qUjKmmLpzk3zt",
  "key7": "46mi1KanWqNMUNExcy8Y5BCtGgUDZyn2tpDDiEEytuxbEFSy3kVQvgqZ6tBFqeaeDeowxiihACDnBUfzJoZgyDfP",
  "key8": "5oSrrNCzsBbtQTDYmjRBNkE4tbCeRnVLkfNuEisZaqG2fncSmAjpGtXQzR3X6dPVeXbHL5H5rnkFDPN9KNtFGpr8",
  "key9": "2BaS8LReVMLWZm1nrmsfbAn9sZGrQaCn9JNBY3HptRfSXXuotiytK1bXJRyCUWMcJNX4bvAKjN8kUTnzh7JQfTnT",
  "key10": "65MRFgpiq1iXENCPu4dxwccw9n6tfyyoSX4wzQeJAq8rjFdx6tShDgw14Qe3ywsJ4Jp974GBCAKLsQGPpB6X6WTD",
  "key11": "2cvxqa4pQXADAxCUfScH3vDzNs3Ffehb5VzEkZ3vNUR3anoYhwNWV87KJzv1SCJ4BVdwVhjTH5ESXMRLMVFr2Zvq",
  "key12": "2j9bH79q5dCpeKDgppfepAgpgmnLghiif6ZXL36zeZUh9ftxo23zvButmW8m6qn8kBJ8ZfWD6SamQxgQkeWgVooM",
  "key13": "52cKxT2dXMVv8WY6P2x3eq8eZmzsjrqe54rjH9dRGpYS7AA3GLBHREFM3XVGwJ6oXUFYcah3hbHJxTqrpWq8CAu7",
  "key14": "5vVgAnK7A74h8qzQ5apmspwkyANueR56mxCQURGrrjwvqq5UGELW9CWnc1Sb82GEMZnJEqEcgDwAbwm491MCBwrE",
  "key15": "3YUyw8QqqEAXZW9YnBchL9gv6eZtZQc1HjSKw4tHcYtML3UcfZQkarXzChsbp28qxyJ46d2pAgwdJgesbUdzcF9D",
  "key16": "5KVSZLLkjT8i51smLuQu2ZdrvLb2jCkyHNxLz8c2dS5ZjdzK4TiqFFmxrnHttLKcSNzP2ZeMV89ho9UKY4erXWZb",
  "key17": "2MkjvJMJEs7mXWNPwugTJ5MU8CqgbVemhYGQtpN76MeQBaCkP99tDxwCkP4FGZC4VtLGJ8djuTG43sf442fPEjay",
  "key18": "4mTBFWy1bZ8pJNdbamj7iKNm9p7oSjsTT5YFhmpLnNzVq8j95Jp5MhsYvEm4tYmLJwcC14kZmkXHi2dLGen8xMre",
  "key19": "Vn8FLUnS9dfbmRokmFmM7FRMMQYSfNeQo4jYPfczpvAomujWzE8isUYHaCdAF6KBbd2ZQrAsfKRLN9XzfQad8sT",
  "key20": "2Tdj7DZDWAHS1Ymz4QVoUxUfniEzKxkdWjJ5gdnpsPyGPn88fGoaTPNeqnpw49A4yFFtmxQYpfyWhxXDfEtqsoEx",
  "key21": "3pFLLSsnuxcjPEAQyeckPukewhbbMYncBSeDCd828CaxKT4XGWRLbspxZchpRgJrEisbVQk47s1oNeSu6bAWXFHZ",
  "key22": "3EAbuU36d93RrU5tXv1eLMz1xKwaftvzQAoYy6CiQs3vUruWHgE8BdfBoAB9guSyEWxZFX3MFAMMA9RhyTotXYk9",
  "key23": "2X2zbpjg8FqE3c2dUXrep4Qb81q38WJuobc2w6MmBnJUecuut9w7h7Je6rX4hgLXvcJDMPHdnF7jrAtRAQ2QoTSM",
  "key24": "2m3ycdaBNez1anCtaRNtu8mz9gXFYztZdUeLvzdGrPw5HkNGr8413Xm3pNGh24eSMabDZmL2KvicJ2U6sX9Lrpf3",
  "key25": "32mCNsHuQGmnESCF8xndVLwgMry2jusSgvYHKSPsPCx4WkVMMdq2sTCCbHXn6C8sUhvhRN6JU1KQw6qHckYEYMLB",
  "key26": "pUtWJ31npBVBNrQYBnHAHeZ7giRXARG4dWFbwFJe3aS8XhrVvn2GrAkDKqy7p9pi8KbUCJp8kQvVvC7hYztFuHr",
  "key27": "4vBopwQqjuvVX3bVi5ZceNGMxvME5nLbeKQ4yzHNLUniSLVU99LoGo8sQbJ6QXRB8vnWswudXGnvuB5gZtHCoxeN",
  "key28": "5YxRuYnub4rVY8S3NFan9GS87aB21tx3buhJLqNEmuoLSuTjEtW2rRz1n3UFSXwXbjSTxp9z8zXP99auMem6FQtm"
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
