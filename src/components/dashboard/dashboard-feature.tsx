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
    "41KBBZYezNgMwJm7T2q8xDq9FuYKrMZDU91wuDnTkyZar74sroTE4qjhf9v8cLiGWygAo4xenyEfuM2XhDyyrXFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r7ttvsUSpR3npgzAPYisLnk6jgCUxWw41DsE618wnsHZs5CRDUjQJCryftQCj2t1u168cKSQczuJnxm4ggehibP",
  "key1": "252pUPatB8uSj6ZhjJd8EZLNUyKwhttt821rJhRNKfKZCRfde1qvWd2zPsfCMTxZjw7c4oQ57F5AzhfF7SgtGi8C",
  "key2": "4boaV4wxEvbNwZhLvV48qipTcxiVvoNVABL7w94GY9R4YjqJkie3n5CaMn3ckc5WKjf79ptUFhiACUnibCGEyqYu",
  "key3": "35RAn9uByzUWEr7NCQ3pjnoAYgJF6aMBibYmq2ivtbgkYr2vYEb2MFE2YsfBqhpCYYzrANhP8PqkyNqjHpwUjcjq",
  "key4": "3oA3cw6wY4ZNM93pxWHETMaLWwnFni4zQPRNmUbJtEHVpxRvKPMYQLf2cAuZYxSK4XxmngAgZn1fvwspDLGrpaUw",
  "key5": "25FHtCAYVFvoNzX9BVEiZ8cgHfpVQxEuwGsocf5nfRB9KjcwmAttJyGGEW57JzkN5G77vR6Sy2gdrvu1SFbfGdbj",
  "key6": "4cUHn8XEtZygvyxRorPKYpJuEV6Wm6D16MTJkjPnzxwXkppr5JjwgaDGLPYGCaxXPD4a1iBkdfPP7vtydNYcPCpT",
  "key7": "iVdMQ8xEPoBsPhDSKYQxVKNqaxUP16e36PDQ7FzD2rrz7V87qLJo6KmqAWmf9by3iUT37VjVgdtbZYsHitwMzf5",
  "key8": "4GSrVgZjk1KG25VSmEniwjSdevKnPixLXd54rdAuTSMTCThBsb72SkAH8KFibP9EkESdQX3aZ1hMxiqGEkpZrMmJ",
  "key9": "CMig28yXeKTh4NnmyVUMoXBsxdsfqtHRJr6GfEAxv1weFcJxubztq6Ym42TKtrG2boBesZ4sR9MZfVfjumQnTpt",
  "key10": "2C926RqTxqCbyGapmKTatGY8wB2mL1bSTxXhpvBAaUn58ok2MNFgpSX1XJRCaUAkLL5GAxQFDX4yx155eJyn3Voh",
  "key11": "2UG4uaNffkMJv9v9cZbUZVLAetRvs5Z8q9iN1V9xEpMx9zAX1NzuebycuYERpeKo7PHgX2KCVN9mbivz9j32pAU9",
  "key12": "1HwGUPL3fcGTeyhDnQXPbQ65gGRcKgfMFfZcr6yfHZtpnYcRUAW86AVhtDQLdc2viT6pCSp6Miv2XAmSKMuPL7U",
  "key13": "5DL4AdgPWDmEwPyeBFQWru6vm9MC8acB1YyohVTzj5k8DquDxBMTnk81i5RPmbWeQyCGKtVwDEjQ1hFTUNCp9YPB",
  "key14": "3SZfEquNKVhQMSMXUVNKZ4tUgYVbbogFkjoqQSsXL68feVi2A4v544VgNEYSzhffAvm9V2AMD3j7awoM9vRjPHx5",
  "key15": "2i7n1Bhud1WtpbiN1mHFEPSagLQqopsk3dqtYNYkTuhN4TQo6T4ptvFyeo3v16S9XN5uGykXToBtafAvNuHKEj67",
  "key16": "KsAnLLoYuGL2xJAebwnx2BuSW2H8PUNMUjBwHm6zRArSdHWYieuxPf5akYeUNkHFeYGzwk7w3ekW2s2g4RpYELs",
  "key17": "3J6HYov5x7A7RcFtHYwcnSfEkvQUpY4nQNVLLr8ZVJrRHWQzSJrv5yKqjbTTgxKWExoRtXjX8WHES5im7GW5WNAS",
  "key18": "taQQ8TU6qt45ELXYB2Hyu3RVcU6AAd5VuZyD4ik9gRapk4zuXFVG9omCgDNWjymBdEjAcVCdMevjjNKGxcyzJmX",
  "key19": "5TgnjW7XbKJJZSCTRD5pxZJdcjeB3L3fbp75xvGDuJKx3MYNMVS41zze339ffTbkVp5HnueuLwKkCARFE2Sq4qdd",
  "key20": "3oihWuf4i57zo91gBT7EHVA1idMxURDnAjXdgFz7mnKwFkBWEQ7z6MgeninC6vQTj4J69LuKyd8VeZoPoKpzek7y",
  "key21": "38JNtUkgqKLEwQxkysuVGpoSRZzQwTptj8UhbWfjWcpef7bksPejeSND7Tg1tKECEm6WGzHHXb8co551ZCr8cPu4",
  "key22": "3u2n2NYBw4gRxdbEEJ2mv6vMqgCvXwufFL5WHNV5PGF1E13yGrBWgKN3LpvWTiPEfzNoZGRyBBKxLUEmHLsVDVJ1",
  "key23": "3qECXFwpf7btdi4f9K8ZAiheY6TpHpyUFW5upBuREqWcPmkLX1LRg1LZmZgvzVDzX7TQt5ftDXh91LMwGWtoBEjq",
  "key24": "EAQDNpSjroN1ebSxDxgKTFBfzrMRZsKKHQGowabYGQqZ6qXRALAq8mDadRc9BbbM6Z9kZoY1K1LiQB22Swaqe62",
  "key25": "2zPB97ph5GuVLoumhdwyNUinJfWgwiC3X3p9g5u6Zwam9Adi3ZB3vkMF8w4nAx2uP1URWGV255zyfUb92m8essUz",
  "key26": "6fXkk2deixeQ45DQaydLDEjpJY3ECoTavMdpQJEEnUz6E39hg1Fyhcvq3sgXYLU6yM6zRGoVNpBz77Cc6ef2DUL",
  "key27": "5VDqSPLvArGerGbxv1HrXNRthEUGVmkcTbG6Ewq3oSzbzoHfbZddL2XHKykwU4BfuCYJznHtyfwajXSkTgqr3AEB",
  "key28": "2MSqX8RSK2tBKnH8FDHMGxknXKiLrDCHvUvK9QTGDGHzqgJeaPJm5176KjZLajFvu79dZv4gAVW38Zid1AKW9vz",
  "key29": "4iYGTqnBbpxg3gsWRuSNM8KwvET6mW2nMiNnRJnjmLXybTTKYepk4KFhiwfxkxxWxw57PtjhneoXiMec9382Zeof",
  "key30": "4Ldi7tAVoQjwrvPoUVc3gwNcSkSjHsRSVg9mPSciBq64qkNsLYibFBpXY74YSJ81XDE7yqwTkYDMjEmgDjQHiJAx",
  "key31": "3YutZHv7jQ5jzdcKM5h9XurpHuunKmqoLLyU7ohtVpQDUu441GCkU6W54iSJAMNw6KBjZjXFYzyarHDGUvA7gr6m",
  "key32": "45S576vw4Q783xU1aq8unLzZbCvmKWGqHvDgkHTUNrtPMvVdCgr6cRbStV96JDQU82jVL8FfYQsLPHyKtvhnXXbj",
  "key33": "5mp1xUR8ZTuPYTdy2ovByasziPACAr9YHQarLteKmFYAuuppenu2YDZA7bybHBRJ4YKgZ2LRqA84bxcASfkQNDzx",
  "key34": "5ZPXHTTk7RXLiK2tZJDPNKuGoHzB6mxFtgZjE2WhdT7jgWUuW43nYpjcrApqUaLLWdw5AnqZYeZGUAdRbYVvMu7a",
  "key35": "4tgXcFdzcztmfwX3Fy5f7H4QKw7UeUot7VL6DtnuwVqNzHi75f4B24xEYdLAthSRUJvVuLR8nYEhxkTEQvtDjCwh"
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
