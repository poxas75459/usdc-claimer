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
    "jDcAm63TRzNuFKqNY4RJXWMV6ep8vTdPTgnLQRP4bbC9hPU97aVi7KjwTSp8wyMgMwfrtr9xGTJMvUozcbekz6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64BFgqtk3HhgDTqrtKU4VMq6XVviyZL72J4SRMiNrEXi7o9KT4MA2CBE3MHhrBBgK4dDXgC3u7z1onxzxiSiSUcm",
  "key1": "3Pc1xR2wXERrJaPDtrcRc1NuyVEM2Qoe1WdLeCWemXzJFz8CSjMLmXiucKif9ugbWbJDnMgZfMSQYiaPED4bA5wu",
  "key2": "HZaksEhZP4pKH8bC6aV8fPhQ8bfeuWxTbsaqsXw29uf2tebFFsBDxcmkNPjcquwCSHH8f5dmzPV4HTJjsd2XU31",
  "key3": "58PMsJf6HDPes4AGetDmzv5JxprRaRsR1ohzGe7VE2b421ggTwWtYvEwE8AUyfMTaptjV9AGVNTj3mSMY7HJoJnJ",
  "key4": "3ZPNk8QBSYEyK5pnoAmTW3i6kcaixDKCASw8hBVN3jaF2xAV1SQv6GN2PYzwStabd9eCmJjLKfU83ZUcsPwJzonf",
  "key5": "5jaQ1cbrSH7CMGV5s7Mzzok6tMSX5SpM3FZpZMWetipBroze1LNtW8pRkbKwVNbkK3UGPVu6pQweBUwgQioijPMo",
  "key6": "3Nk2QR98B58WSw69tzGGGip5qmH6Ht399tCrEvQmuhqwA3xUZB3vn2MyXpjiP14RqY6ZjYV7RPbXbtKhLY44Meqt",
  "key7": "2bk7mMRdFh1z2g8nCSYJ2eTnRQhcKH4HGdeZFg6qsHcrM2ga9GYre2jyxUmqtLZJS9kQ7ZTwHRgEJ9GAKPs2kdUf",
  "key8": "XWUKirx77TNUtpa6qtumbh4GoDEvw9WD4JVtV8waER81KEi5GgYRS4ujMM2qsKVp59fqRSbHwXzb9phXi1qfeJ3",
  "key9": "3t22qtjzgEFVVVu7BqUbyBN8jREaE4JttEmu1UGs5UCq2PVjE9psCzSX3TpobAQhkbjfV9H9ELSugEZTFm6kW4Yi",
  "key10": "2GcYjuDMHn5GyxKt9GnMA72MG2m6PmkVQ3YaJB8FtzAGK61ci1jGtQqDRKninzRoH3LTgLn4y2a2xaggRmJe4w6M",
  "key11": "3WjNF2fNyy5LPyGB8sLXqVWFmzwPeHRFTP9QQ34FeUPi8oaj6rbpxCUcwWEr657mTbf15MeQ28dqmmdi2UeGgrYJ",
  "key12": "WoSjKuJun81TCDnuz5HCHvFoaKtyyKZuuGUTqYm4LKgD5d6HgZFsVHSyGUxCVeUGQoF3yYjzGnoWgMccY3cK6uX",
  "key13": "5EB65LEPc34icW7wRyjEq3fxFAwLUzHEunTSowVHqyGTGzfWxJPKUT4YZsMEp31UMNiaW4b4k8MXKqPSfjQyCqrX",
  "key14": "2kMzSEaqFHeHhzY9Kjki9fQ57ncNEb5MJZwHYjRSTjnzkr5PkvqUTKQsFEihAaaT6pDSBWouopAifQXP7JPoaYpM",
  "key15": "4CSz4v8wdCw3mXbweyZFo8w4Z7rinnjGFHgmxhWXqKNBCkZj91Q2EatZqUyNJvcGmM5G1efDVmFkrHF7wCLfEJ4v",
  "key16": "5UBmt29mU8wtzb3iPKQPPWU8SGXt4MvMWCKpgSXRVofjtAjdynpKtVebwQ7r7vhLfPnpx7FKXF7vTSjetiJi4tAq",
  "key17": "WcrzCv124AmngMmHA4fXTcFhhGkoLsGQtAkeKHskWuQVv3WtM86hGoy5L27FKfRw5rac43ZDB1xJUycFN63LtK7",
  "key18": "Vsh2HHwbbcucVbfimhPMS52GZMpHRGeJTbUodbGxoFxWfediycGY137Sk8X4pRvL8QMamFVyUNE2TFk9WetePZb",
  "key19": "3fxNsic85y6u2Tws2ab6Bt3zrde6TDKSzkcwLDndpPzaUdqKzZEGkeBwpYvSpvUKuNjy5gKc4J5D2UZibCoJxejm",
  "key20": "2vsQWDFAv5ZwcBoZepdxmr2BJbVx3yxi7RDdr5f4dsvC5GWAqNhBJzqbyR7bEeP4TEemyEQne61NC7c233TZry48",
  "key21": "FkZegNZNeQXmtfdLZHvcTCRFLSPoXd6bKDQKUpxia8dZPpQkLdq9BsrZNunwbphPAKk9EvBr6FjH1QWBaTSLo5e",
  "key22": "sNUsZhSEDUmQyFXUGRNwSdUD5gXUFKviUuZQtxPP6Wgb35LrzTzQm7CU4gZtnvpPqYttccaHC4sY3pgEgMpZBVy",
  "key23": "3WaQC8SoVwkN7KHZKonAPyAYJPx5RML7A2EVhL4xcBAmGDq4KEGh2SQPu7ichToCE1xn8qxmya9Woc9efCPMBfqj",
  "key24": "56NM9h1yVJf8daShFkH8Tz4jJofgr5iPfZEBVBZbXX21P7GbXZYy3Vzozkxrjru6KiRUKrNZGJYDD1ncPfeSsDhn",
  "key25": "S5V8o2LqtrYydGSsSpY9dEfQuFiL3W7TRpjxwKFsq6NbLtdk3qk3R5bUWy9wYtLu24mdaYCGTK9W2qN6jCMGw5Y",
  "key26": "3P2XqwWHffPnnLnVC4kbhF3WGCQgsGmror5VUJmN4ug9qdJDJByJc8aVkMg8KR3LVUyg5yGRuKrKsUCxh7htBZsr",
  "key27": "53u5RyZhmdSqhBkScoK7GuFd7E6ibmyra1nCnUwxaEj8eT9bz87QYfGCN9sVNh22uBhxemv1HDJnLVVAEbCncFWk",
  "key28": "2k6Kn2U1vYLZ7EjtNK6b8zDTHtN7diDrvX6W2QXLVFuX7iq9NpK3nEeSWxWynKWAt2VxchAMUvtgpaak4NmfuqBy",
  "key29": "ybQBPRiQetRW1BzDGgaELq7yfcyqCgn5hSHcLiKGCtG2swZ7QrLj57GqgRa2vBmoA9JtVuw18yj6sPTSyWKFAaj",
  "key30": "65hxqtUz5KJ7wD4pbtmxZS3anpvewc4CBqFemPR3v3LHVUSQnA4dyLLwwpsnRd5YCuFYuEup9a6qtUutRvx7gUyR",
  "key31": "2izvkRX7e1MNRWv7riHefgPyukXHhLyDU2AAGWnpCvGTph45NdAGYx1u9j7Q1DkqZUXV9ZPYDCibJuLknMAVwBS2",
  "key32": "56TDPGVcEoJUioXZnpX15fV9HTjDHXY2cvJUocy1NnN5VhuMUjcNDxqhfTX4bmdgKSRNLB3dz9BYATseyPduWWA8",
  "key33": "Si6m5sZsYsrEGhyGDxhNK34xVN32HuoZYPKgbrKab8HR8S95kHJTVGwRp5w8zQpguYuo7n6B7Ca4FCfXjh8Xsjj",
  "key34": "3pveZjjRb9L7GoW47AmpuMiGwW4igWVCBfBUna3mTJwv7FdeP1mPmNHyGGqhwXmmyg4kAv8uA9zSRnmJ5HQ9cdKR",
  "key35": "2g32ZhjvfMKpiPWPm5BrJRoJzxLFz6wiSmL6Saz7rh8ggkajHXGReMVxFWQ3iYWBSYW2x1qcvBVB4d6ZrDD1eV3P",
  "key36": "485vHAhPUxdEd1MdqeycDbExiioKtpUMc2giqJavnzyt4sKVQ2idoRFfe3SbesPm6D2G2LYPnLRJvJWJMt6Npr6q",
  "key37": "4wxLZdQJkt57Vyw1V4GN7GFqmKbs2r9FwhbcpNuCqvcJcUPs76D7zVDgkokczhYpsL9WsEfsB1hu8tRryX4G4Kjv",
  "key38": "51ctQvE1YdGfjx7tVCVkiyj278HPfkjGHzS8r4e4TBdszETFmV4EBnKFvCTXF4LPXYB2kz2LJ9PoySzNGUXBvDMy",
  "key39": "4rqps49kL4uaEtToD3H5gUKKbdXCWZfVTpitbBAGnPocXSU3AF9u1thpQXvBeR4N8D5ZSUvPTuocFj3D3ynnWQb9",
  "key40": "yyoQkLJhcRcy1rHR4QokrrkWK33ABF2wFgFXUQq9bueKGEdPPYcpgHrA5sriwC5mp8jVebh5orrz7FvFEhT6iYs",
  "key41": "4usof4BSEJKKnpsWoaX5y11kZvTeM4LKzsEnykE5dyBF4yXWiUv75ZopUJ4CJJHhyobiyDnkvbakT47JfSRCX62q",
  "key42": "2rseKGr4G9P5WSoei3g4AxNLmLeNXMT8FBKwDppMCHmpnhtY7hERxqCxeYJPxsgVr2H6TezdASQ4a5gaKCerGWzL",
  "key43": "4RecCQBfmUzAu4EhPWt79Nh6DCBCkADrpiG9kSqUm4vPaWpfwVbMczdLjs1UcFL3xrEF2VNiH16fSX69Lvag3N5k",
  "key44": "5VPqcANjgf3m9WJsHhQG7veT25bLMxobpAKWHBb9FqQC47siRmUNqknLJiac9emJD1FHhGx71HXXprTpoB7MiByv",
  "key45": "4aoeco1Mfyg1DryJ13c59fHbmFsxBMrxYkihCyCjzC43BVExftCiR2d34fSYJkMkWZs3VruQ6Ly2VsmswJmeo5dN",
  "key46": "5U3Ptw9SAcsXX1VngVQ7sBtkJLLNt9p5QJgo4zaBRXvHu7WJYpnUVQGKkZAzy6Yt4k1QNLzV9f1dy7vJ3u4nAD7H"
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
