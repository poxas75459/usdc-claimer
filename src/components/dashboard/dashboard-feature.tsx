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
    "4b2zQsxk4RZ9LEWuWjapiopyHHcN1u2i2pgUMLrpSNRwi85fJwyoi5wFHfPJHTV6t4uxj81vPpphRjVZn31RzCJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29UbvuxVWGh8kxHV8SyTkoW2qQrpDHKHUzh6CQP76Cx2g8YoRfSb5VdsYzMPxHg4BaMqRfPTirp79NHyHdc9sEoM",
  "key1": "BtvY327fo6VJ8rdXWMX5wn7mYE9CN3VWEKjhYyRE4upQ1VMUy1pdeHCws29LTbvuheBjMy1Bo2sWB1NCrcByEDZ",
  "key2": "2WgTdfGDJs7vbsjEiVwzGz6kcVMdXW17GdWkMZpr7HuVcgHaZXk48ZzPxZFz2spjJ6nzGcszgNRHxhtk9DamBNYj",
  "key3": "aGzehvgXvZwW1BgjjzefaGyrTJpqgD4fSPsuGTzcNJbjVL6VD3kCrnq3o2E54oggTVh6cbsHGWSvbhCQPEKx8CF",
  "key4": "2hTbqDFDWqE6NgpF7XrMqXW5fvyBkNrPNcDqjkoS2bRQQK5Yv3n9atrcKx35GjaRSmVpyQGX9ukmnJaMV6wWnxUi",
  "key5": "3dHzSeuwffQ59ReDhtZrVPoFny7cCD3VuQHhkJi8Bg5CexEvQgKdkoHhosGD4nHsANhscUWWVUFxrZmkgPk9A7o5",
  "key6": "5R8LnhiB9Pw4gQuwXx1MPPqGh3HUY7RQjnt9uurnuepQ7aRXzxMHRsSyZPptrdq5pVgduTE1LuVjriiWaVuefRRG",
  "key7": "32rLzgqQXUaVZo1fhoaXf5kapTPuYPkBMwKS21ui3NfNkHqNrCuXEimGdbP6tsDAWn1H6wDeTboR2hW3MWssSpFH",
  "key8": "5ZoaAbv76knybcfPBph4vt9iK6qpw244T38t91yWzgMcbd544VSoeR24dGp35iri6kb8A9fPj1iVrzcdpxYadrZT",
  "key9": "5Bjo9qYoByeNXhE5kjVHwvvnt8tYuYHXzbvfxLGhf72Qtoc7zARHsn9DR4dNUZk52yQEjAc52ggNfMiSJy6q62HE",
  "key10": "328RaKZhUtevEgMLhRQUATzru1gwkoKYsqt9kinra1JcvZYu3cqHrpvpJyULxHUWSh6xURF68DGFHBSbPTeDFV49",
  "key11": "3k8cdUzeu1T1nXVb5f3CupxpjyEbpV6uKBvHSudb8HtTtWRLPDHCdba7Zb4yZ8NmDz9jcr7hMbiZkyrxNaz9JupC",
  "key12": "5zXj4ZoFfBiHnoEQtQF5XQhkc9UsMrzbN4he2WRBKNTFP4mJEzVm2KfibVo7idTqo9KU1dfGaAPTpuoGv5BFposQ",
  "key13": "5U7VaCeXA7US62KXxb1oqBxwc6TE8NAGFpdqV3qJzgjWDkKnY1UiV4ggPBR4ige3JFbwxrDxzQwCakAYmoAdSD8o",
  "key14": "5dA7Hd5EpHibNJDz571mrfy6rB2hTdjqfd5h69YhTVhyoPdzY6FGuyPPZbjoauKBwYpkkWnwMULoixHGT4kpqY47",
  "key15": "4dpRocQ58D5RddPAVutEg9JDtzHoycqzoHdJ5tPa8LBFJqUjxeNbdDAdYkXyuqcG6xs6gQmz6wkrqGYaaUA51qFp",
  "key16": "4JeHM3oYgBJMiJ79GNX7XLnwFyqffgX2JUuhuYcW96ZPu2qADvRKY5NM4vZPQRdLH25s2JDot8GV7jePZFgX6v6t",
  "key17": "5WpUp7XLJGbc7WYdb5jRPLkQWvu5XfaUvViopdgyBNqsDbeJSwxDqk7HgYLiXKTpiURXNFNsvMKeCzS7LAheaja4",
  "key18": "eiV5Fqw69SyfBEsYcgy4bCKsmyi4Qn3JXiio1t3tvAUx8NLZxa94JmfTroHoZDP9Q5ZDPzYGLSvHB1ic72mcc5P",
  "key19": "45CFksSLfVfmeAu26nRACWdRa8gjrGLmynYtSgWRYGzbrJJcHaGZmq1jzECwJEmjcMqderfCAFEJjamNqUEpL2qq",
  "key20": "46EVRMfo3Yu9pD9Dk8eVwUePU2jdsxoGuq7xPpfUHhaMud26wfRgaqsaxD75DKbYxLT5SvaFck44dSsFpZfqfjMF",
  "key21": "BUg7kettQZmBmD7kXs4GCrPGePNrSZBTE1nhz5XLtvd88uWBdqjb5u4UjqoWht13gzRg5GEi8bGLoVw2Ftyq3HD",
  "key22": "3rMYRCegBMG1KoFGKNDcYz6eU7fbompwjeU2g7PqUwMNKaR2AGaNqc7AgwkVHJwYJymbHDsQws2j4a68b9JhDJgf",
  "key23": "5RooUMvpDz5ixV8wtjzd62R9WU1iLekV7YwquG4YhNsYzNquhmNTKD7SeZdDJcF23iFg857ASucPN7DB8y5a74ji",
  "key24": "2m7zRC3y5xbydjd4MRacBZT7xsBJTszPgt74XTM59a4pSU98Cpn9XXzSuthds1xUBP29yu5D7ASwvhaHv24sgc1Y",
  "key25": "3pt26guPJshtZ8Kjdokymp5Z7Qnw8UNaohud9W8ZvbwKLZBK5oviJgcZe6mHXYRYfEWmrEiHsTFkJnpN3qAWRnXT",
  "key26": "25rK581ou5dJXcU3vXro1JbDEipc5t4vUABK78ThGHyVQ2N2NXm93xnsVeMACEAJV1E5sz3aQPJdu4h6Jsqytbyy",
  "key27": "5JBh6Acf8KuKnnYjPLhYMsyFsvj4Uhik1nCD7B9dGNGyLuqpVHFoVqNwr6NuyDj7V7S4smqMbfRFtvmkfpejF3QJ",
  "key28": "zGXPBQrYGdrYRtM2Ckn3uqo3Vox3fgUK9TJeu84QJbWq7PsfnZ64MYX53KNbqXwYJkzyp5JQK7euUXVJwwAVHXH",
  "key29": "2o7SPsrW8jVC5dwZRCoXBRM9V4FcUvF1L9b3kqHWJt6WvcFL9we6rvfPQfTuiujTqjZUU7XUoKierhNLBsppsCX1",
  "key30": "2J14jc9knUSnaESNBJtHH5XNSyrJ3SCiMDuziu4jA3vVEQS17v2nCPzMhNuPsHUgAhxdSjitrurNCjdii9a6eRtj",
  "key31": "3AFSaDYiB5dMVpbeUbJH3k3ewTwYfFqg5MWuHxGhzUrR1YuETddRy2AMNVpDcvfQrP2NiNAxfZpGY9Uij9PimB6P",
  "key32": "3UytiY52br9iPdyt7n1rMfQ7MGYM93nB8H2CLtDMTaqfzybaWNRMUZaCMo8fiSjZm4KXUFKBjFSfhvZPFCA1UZCq",
  "key33": "4kC53cYXF8GQN67mgcs8tP4v7r5yZxpwUuvaQ8H1qi8yGihunuZF5mBN8rG6aNM62zTf7HogdUviyjzH4ATGJ8sy",
  "key34": "5dg7MmsxvCg7VsuYt3nhzy7iVjDaHAJVrvE2PZ3CEKoAkGLvYpRhkPs9NRXp3yoyccV258ng8wYFZuE1zY2C2YsE",
  "key35": "4EtAQUer8rJdWpunWEF5SPfbtgFhXqjprQFc53jcsto2W9Zmgb6cNJRNUQ3cAuFU9ktp4f6QyhWfP5bmAwRJRk5B",
  "key36": "63uvpMzniGEHRbRr47QhHcKjGE81koi2CxLhvk1gE12HnFRqfdKvR8HVpnzEj9DKEu6HPnKhMog2XuoktGri17Zk",
  "key37": "93CmYvDgTyxvPaGRtq2edkkWnxk6jVUvSsErK7SCLKp23vg53tP9HBWs353x7TVeZYuxgAQKwdKgGBKsjFkUYKR",
  "key38": "5mM7fRXQy5NYAuKv4yVrJ4HMx1XsWAyatYjYRzqckZ2D1XbhjE1NXxkN67KBWBiJEvypEBHjGD9h2TdHEbUJfqLy",
  "key39": "4W34LSkwUjoiVWxuPGTjcpUrz2q3UnMgEeXdpbTtD5qMH8Z5cHj6XjsnC6thrjvSCDVwid9Drj56JvLUuTuw9BYJ",
  "key40": "4B3uMq9KFhQccUo4XmLUu84bvakFgtrd88FHtw2eSCLgRZWoNrV1DM4nBHL6hSgb5Vpt4S3MkLX3cgc6jWSspAiY",
  "key41": "2uyQBPA4ifBHzstTAR35k9BXfpQWGv6aX1REQ7YxLYoxBVSrHwNy4uB5boqYZNkHXJ3ph3bChtBkAUNL7kvMeqtT",
  "key42": "56FE39VRpd9heyhLp6qM2LQRQVgHi1okvMevSxKybGaBiCzEv5mGvL1HN8w11YNjVBzTCjbVeWPFoLrEFyeuMqLG",
  "key43": "2v6N2MJNv4dkXCDgBDgQ8P1GqxD6yZz44Kad7BeXob5H1sFqC3Hciecxh4WDE1y3V9TwhszbUYhb8U8bKoFsHYiW",
  "key44": "3ENoCYoC7wnZxpqYZiUgC93w5zzt4A7RDgzmwYGjcAivGskkc9GV36sqYft5DM2fpG6sRrSBfo8RKBf77QsfYxox",
  "key45": "5yaX2pRUWeG4VxfCc6sgRFUzfFaRTji7zxQPGvuy8tiNDBMFdZsGdCYnquCM43g1czSntjttgNMWpLrALuNa1UMw",
  "key46": "3Ss7dqcuQCJdPwWBK5CBma2uiTzQxUNK5qKZwwaUfotTv5FBCqhKM1MYRdqVVB7jg3AwugkWaQwraD8wyNuFBpVK",
  "key47": "3uXwyJ6KyB9pzT1bCFb4PAbAGpX5eaw637XzGaXSFcjsjjvfT98Vh8Q6u3BjVN7vNVxtw4mg1BtsRjvCZvm3KVTi"
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
