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
    "4pgjTyQLT5XTHfyYK7amBVbNfkivoZkrqcBJ3wr2BJs2wMah5oKnQdPEDrtc6ixKqLHQW6qHM7iWbv8pkvG5QQ3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vtPd4UA7s5sb9sV7xcDtHE47rfEWquGHEsLqk5FksgXGBTR3D9cTNq2nyvhYjFH1BbDDx5Lb3Wgd3WfDTyyrfc8",
  "key1": "2bsAgVKHSe65R4dVY9pYJAmDVwqCgB9vu4XPxmggPdQPZs7su1RUzxF4AoDsc4qVWCr4tWSFTrFkfxz3Bk6mcKgv",
  "key2": "4SkmTz4nfjdZK7WPjewvxiiqJn3KU76t8dj6ZDAULkcaUyJD7FvZGco7xhsc8sXT8YRBEh7QqhadPwWUxAEgDYbA",
  "key3": "2hKFtBMFwXcBh5C5hXcKV8ZQT4E8kYDfhiucnLKa2LLR19YSpbrCsfiRj7kj7UzfiS1oDgRWfQgis1UjuyUmaXfy",
  "key4": "5FwfhRcsSpgAeb9CuAapPgE5vxEbTg1GyQjggSF2WSkSZ9qENwonmM76Rb5P43XXt1G3vJW3KUQswyUgRQQFQecK",
  "key5": "5qHQd2GAsoKmmJ2K8NJjVXRkYDKV1XEWnfFMmPzBTY2RYh8uZU7hTfdqVBBUmfP6cYYKsTMVi7u1BRjpVASDkwoM",
  "key6": "36hiBNvgWBqyBuP1UtxQjnFgXgbMpPiJYcT9aBvs1tXcJAAfyfbEwccaVEJMD81NqYHvS7Fei7QijheHPwgzKR2p",
  "key7": "ckGkEVCoKzAj4FU53Sx1uWXkURoYzsoRpW52cVio5tB6GD6DDrKdEqEzU4Q3KjnDYu6343RmFpG4UT8rx3eYEyo",
  "key8": "3RWvXBmf3tXti3CXt4FE1YgwR7RXK3Ez5cRksHmWEikZ5XL4aVNikDQFS5qr5EwNCjRcbT81Ed4RypoEG2hvFqth",
  "key9": "35pzkrjJCpabbwbMBhqdryT2AShM9PqQCDWY1NpoudYFieQ8rvJb3x72Rn3z9udacjzaJqsvZoEHsBJqJQFjAMS6",
  "key10": "4kV18V91AA9AyZoQyYjnyZi9W9DBsWL8TJhs3K3DdKBdQ4AVoquT8xB78qjZCfZGDBbKzcqJJoGvhtUKuyVR4Lnp",
  "key11": "4gEEkQ362givZZMKXoyXo4GpJkgvSxcDNhCgvk6y767FVZfnF2ae8p8jdnXevexQkx2KLC5bzwTmF9dQS4Jhd2jf",
  "key12": "5oC4eLTMV6sAGvF9QQMt1gH6yaFDRtd6fdBZkusokNqcXp2idh7ck9R3QtaFzSVjnnydz6FSARTc84xp8V1Qu4kh",
  "key13": "3FaisUor4UN7A7Jbb9pNfDUxXY6xpke8sPQWUqqD4f939suzBxF71CtrAo3N9Doz33yedcEsquP24NnA4owkFV8a",
  "key14": "2eoyHxwJzFmXEbuyLSQEUB31eA4ozgaFc65mRBGpXHQ4idvza3pn6V7aVTZgVVpowTw7mFHqFj9JdxMfPPk88cxK",
  "key15": "4PSpxNkdrvHweKyriEfk8R1WFxEwrmYVQ5J82wqn2KC28vxX54zkFif5dGfzSQtfcVDwJWaNRpkKiWwTiZAeAAzx",
  "key16": "3YBteWzENyq4a39vZrAS5VV56c8M9i4D33RDaJAX5feyymiEi9p7D2GCrhGzeG9CnQkiLNpJ4phqWGAxf4Mat9fC",
  "key17": "5yRYPb3sDYoZeE2LEQSXUFMUizoRwePzWn6Uj8fn3N3DNyNdU38d8tzkTYpxbkSkDGzSNWdTHJ1b7JM9sFFNVQBu",
  "key18": "4qPuzYvhEpnHmKm8JrMckxx1DHgza5CeUtERKLuF1gtmJY3g3R7rAnzkg7PTvSM85RCPWVPXprLRquAhEN1n29g",
  "key19": "4po1A4WauBysvqA5Li3Bjb116Lt3RWpMX6MFECXmXwGgE1fP8YRxWEgYufWUSKj4z8Q6zXP7kF4W8t1GjazEE8Wk",
  "key20": "4fXL59DrNhp9EjWJa5XMcF6SpAKSnBzcbGaeLMMAB3ViyFjA9EyXU9EM7DfXcb123PYSRF1K4EVqReAxtS2Po39n",
  "key21": "2FScHxtGUJHFTc2SqFwhvSqVDYgYvviVvxTGcRGHx3CuqwGiRZmi2V629ZRk9g9wj3EN8s4Q4DcBJbbHxEMDxV4J",
  "key22": "5v7xFTfdseiKE2fsnEsbH5VQFxw5ZGNUf4Nw5xm36Km5rb81Bx7TP8tZFPB8Jj1WWqnaAMMvES86pPKhokTopfPa",
  "key23": "5A8N5AJUjzBZGf5o2Y2gFp5D8hEVfKAcrpc8YetrVoE6DSXHcvgQQKWfCtJJorw6QnSXsRKE5fkHQhCWhQKoMwtN",
  "key24": "4rjsUGvW74vcb99CmNzXYkakkgiM3sNbdZqcw8iLzHNKHp7PBYcHtpFw1hbari4DEzX6btF3YKiDYHSwokfZcPCe",
  "key25": "2FB6kAbg5jitoz9oh5PCdNEkLusCfBvWbCeda3EGYLH9inFUBQvUmnJ3LELwbuUoCZH2FGRf62B4mBqJfB25tH73",
  "key26": "2ZFVj9sr5211tTM5GxVpqLt2FKHdyrwJKpT4MpzKW8Hu9GNzZ8u7LcXcCXAH4xcvUsR5UUDwBChbXSLtPR6sKe3y",
  "key27": "3VYf8PZbdsogYg1RDTrAB7mAoTRoBH1YhqjgvKHcDgNNDEKufDMx3v2jHdNnqU1GwBRnUDZw1hWQWSEQ2Te4RPYW",
  "key28": "2ZW1q7JYTGAPU6rkSoaUS2HtCkrLkWY7cFH3u7P6gJYbJEC8fcf9YJUhSgAxPjPR4gVYKPXCAs1j1i42v3RQcdUm",
  "key29": "2FoM388J1VsVFEv5By5T198hRoQWSptdFnvVix4YwLT43e9LVn8VHv7yTBk6cnyMCwpsdiqVrZ5DPkYeCLCnEDRm",
  "key30": "5PKEQH9VbA5b52nCQF5QeuBCmngoF6xQ9BrA1xcAdivmDZirWxLCWEJ41yquupZxkS9aGuptHfE63At7QV1MbL16",
  "key31": "DpwXPAzqpx6UEASmfWZHTkGjmmXYNWV2jAq3LeLpmWgF9gLCmf1WyoexRuJCmfLeDbTXt5tW7SJCBFvC4u8tx7T",
  "key32": "4eMeVQsYPftxrzaburpjyc8ebymvHY8iTPWyRhZ6hv58728fGZsnktx9u3ExcXhoDB9keomaa6vbgktscmfZuw2B",
  "key33": "dSkuwYja86EjFYBWV1tDrj3McFR2WBaRVKgZzw7MuqWhCYRsEtZKe6H9edJVhPkDzjF1GzvajWAXEduFw9r8mgq",
  "key34": "3eF9FsHcQgHGytoSNQaVTQetrBdkEsiiRRMww4zqtXuDDkUnxxtCSVmktHEDGWzAiKLNPsxJmiSrnMqRAfxJXHKS",
  "key35": "qGypYYJNUFS7Cw2YJoVfMtV4t3CdJpJAvdF8oDpqNN4ExH36BwpPdszXQK8FQ49Vm6bBmqyYw3obfAjYzrkY6Qz",
  "key36": "3K49uq2hBu4VUVyrZzbfTkpX9cRKkRL6bDWzt4jMRyLuwrEyiHqqrLmRfzPTdHJjpSphiQSQAabNkfcouwHTabio",
  "key37": "2AyCrWMArXfSicDttSpHB1pB8FbySx93dNgy64NbaPKUsqYvgZ5Yi9rmqV9HQ8KKz184QsGsRBsqYdL21UM3kF3t",
  "key38": "2HVAWH63PDaYR1DHgMNj3agj74KaFJgRE6U4cqrERtXuWKeuRMKmm9zidpLV12vDKwWrriDZvriiFRBH9fG9i664",
  "key39": "5pnPzEhyufbUuKJBjp1FeCSEfs9in3LDDUD3wFwAWhW6xgT4fEhAMMbcGtXMeyUvSNShgN6Y1gy8S9HkYMgBkf9X",
  "key40": "5UKQ5m2fWVqs1SGWxR656dncBD388s3KxYnKp66BctMVtQak7A23dg5EfwwzZB89Yysj3YJU6X3wf5JGKWWTEo16",
  "key41": "4g1WVa8STz1wPX1j29RSjAsxFmRbqizYc1QwoD7SoZVY9ZwmzbdQVQ8vPSaaMTxfzVzDNp8uRVknsBuE2HmB8vtp",
  "key42": "35m6yqVD6A8BcApWUTNGNXdetyeTkHkXUUovimJ8Vz8W9vZ7WJwjMZRzWVHNfEcMEY6QemhBo8TU6YL4okYpdCWF",
  "key43": "5a8rcokY4Ymjygjq1rmdMTF5VsZzZZ6C6oWBVhzGPzzfR6m77NCPjpr5U7W6C9erPWnS5wbHuxLBbXzpeHr2j9fV",
  "key44": "2XXVv7kcQ3zeaickSCmTDwBc1bgRi43b18aTFg5fhdsNDru73NZkuUTK3uwfBiB31HgEaQoFXaQ6nhgyFpJPuSf7",
  "key45": "dyfZNsF9EA3fNsnrAf3NyMswNUirBasbQKAwfZugbszYMktZjhxKB8VprEVwxhGWqu4Qc4v7tgPjVznzGZhFUSE",
  "key46": "4Ht7XKoxEGoTsiZPoHZqgRsUDVBoQS7PjLWbtX6K3zB9Dkc3dJjojMEFVFhbcNdm2s6pL2XNYmAzKAfuxPzxfMeR",
  "key47": "5BFT538PmaUzQ5d2zpsdK33NAQ7EK2CDU2V2pM142ysh1G8AFXYwze5WRNeN66reuDeufM671juNTe4MjrZnfycx",
  "key48": "2VZVgQv6Z4hpadazjejcTSqAJp52ikV48DzAa49DXv3avJU2UDQh5bKdCWPoXGLxVZV9iFmx5vDUrUiqZUv6xdZu"
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
