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
    "2ZWX73uGDpGeYZD67hMHTomqyf8nkm9RvVKCi2KaoGJPorHcSCwG9VCeNXKxeV3cWPUyKnso2o3RuLDPRkcrE8Sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MmCA8SjEVk67nAvGYyLVGKad6CepxczPBuNqMHoKLuYY3F7wrWnqF9u1ckFfhcLidoV4L64858QfgRKUtf43weD",
  "key1": "5HN4dkgevsfSuTxPeow8HteB2gYUk4bHWWJuGXDHhaqXhSpK3HsmLBRnUgZ8ijRRqquNxiUW76WJqwKLgHoJKPxr",
  "key2": "2w4oA6tKHWafJnK39pKNDWbt2DhLV1hCUAPNAceUUap4kzhauUgurk7kZAxhK5cSheFvAKFHM7EnqiaxfRyS2yor",
  "key3": "2t4ixpRzRw4ibJzYUigg5PsBzvRLhTqhUE7Axn9Rr4MZkh9GmMUD5q51mhwS3SfUGWHxccr23wVNhb8jUAXVUdoi",
  "key4": "5CwiPHCFEKJeQnpJp1MoRY2ZvBG6niZHVEkxfjoX1qtgnzVFH8ch9mpmjFJHWVuNcQqLiJQLabVvsUkjssV3SVgy",
  "key5": "5RdE6VHu3k3A14qhdkLJgDyxsumZxrf4sqM5XJUktjThKu4uVDUpcFzix5rDYZLJYLzri4rRVTTwJS8oFbJR4UU3",
  "key6": "isuUkWbyBq4cdRs8PehxW2PZdorTHmH59RQvrMJX8RBVukiMVPqqwyjR8Rv6WQqXKa79SCmqbknmJ4MRVhHH97r",
  "key7": "5eNUK7VS4tdykZ51hwEMhvM4Bt3jLxJFR4MmHZS16kxVkWGFgc2RyJUmcPB3VhKH5eZSsXSh7otTd88aPPkcbPWo",
  "key8": "3UPN8mfZmCyFVpRZWUDBtu15kBrrJZB7Edhbn5a5fsRnwvPpNV1rBATWzk27wCSvmMzvedviTmmMP5prCVHm8tYK",
  "key9": "46uUtvQtwomQMj5SjLFWUxcZiYAgJ1tDvwtXxNMWuGwPUPh4UQvarvvHWry2JZT6NDKqhx5fJcTMBg8KzYpjzShB",
  "key10": "5YLQ428NSaoiuHuruNJ7p4Ns7BLLmBCVAz9yq8qHZozCEY7oemxwTML6TVbu7LShJW8F1AJ2nyH1bdrCqkyr1pwE",
  "key11": "5vnn3isyVryD7UPC4s8jgRcz2KXmbSc6kebwj57pUyvEXGP6AZ4HQiJAn2hpa2j6p56b9WK67eGYmVWWmwoRo8r9",
  "key12": "26mXEE7FVeJcAySjdjcS6mJXTuDt7dj12SzWC2xBBrrhAJifupc1aiEabbFtRdcWYB4GmskFkadbUqR93HT4HNry",
  "key13": "hy276himQ2inark1pGUt6FmqhziPePHViJBCxkXvGLGMww4h4E28FyJJ2W1PrVXz6vcb5pMwS4jxbbQDFFn8boJ",
  "key14": "DuJx9kfyZ6PdNU31NA5jnBKfM3zttqX5e4nbxU8z8T6eaqXSckaWVYsyKbChJuEcXd6oqnVAjSPzaMJd9WfWSXx",
  "key15": "5ibUVPQaB9KjxBfQeTPy2fFaVfHMiNjePuRTLhoJQkUKuofHrwz1qpaGKkD5CkXSHNUAy3KLbMfKTpuBDxhQdgWM",
  "key16": "3z4kGxbzqMAjTBdfKok7udwaZgcyJLhB84kvDj4mWKhmDuwQ1e1pxLUrNTyGLVrouYEdUmMXmbyvoMZEvzmbn5Xx",
  "key17": "3ZbxdJcDW2mqTQM9mErJMApCwbnknYg2MipteUJm59ruq3ZbMXqsrz6wvCE8iZ3xzCQUCsYT4sMUvhVwt9yqDUdb",
  "key18": "57RdKo4EkYUbCFrapPZ4pqo47jxVni4HdfXaxRsjhhpNjjeV6HJB3nb57jJZ7qk7rXR4qCmRQMYHiaLLLhWpz5mt",
  "key19": "2fNFvWrDoaWLtJ4J6ogYzV3mF81mNt5oD1PtA1K1pU5wQiyVCdjcsU28frdCVjucikJTPW9hAktFunRSzvgn3Gas",
  "key20": "w3c1Y9HGBiSP8dDQokKxHw4Sjh55E9BiuLpGT41g8xjr5QrxoUU53RJ6S5kBMR8E1yMXSA4TPm8DN3sVGXrm6oB",
  "key21": "38339DwFP8kHMeLrFP8A9TFHfxkJTxVES98E2Q43ehVTf2phtjyc8NszB8Q6BULTNDhfHPztB8Ns8cu7a9Q5Le5j",
  "key22": "3SBG9nEJVgDukw8Py1wgMSHR43jHkrtnps7zcBLc48MRt5CWouToxezmXyFznkBL2JPTq1vQrX9osRFQMS4zizTi",
  "key23": "5qKnCT2CjjzHGdKqQoxjVKpfQnkm5Z8581j6E4Ym5DxvRyZVZQrXTn73RgVdB1R2Q4nfNAL23bCvWvJy4AjaEoXG",
  "key24": "29Gai4yhCwgAr1wATLANpMXrRCo9e2MekqJnzYC9TiNoTg5S2kaPyQV6pALtwmREC7gi66z3ymu1BC9QLvo2YZbJ",
  "key25": "4W2gb9PYCD7ypjjDexD9V3nhBwQ6ta91XprYrMXEWVEZ49JyYaf8C5i665HoTigBDdhXYaXupxmDwayDVWmzgUva",
  "key26": "8zp14QobzKXxVdHxtxSmG1jttAasoHf79D6NZN12boYCxNc32yXjXoArbhRZbe5QD9EGoyidN8BasgRNyMbbZjK",
  "key27": "3uNhSbJQJmjfCDZGkjECHR3xGdPnbUBkdWWwRVA9xXHuw5xgvTPTakvqvwiNAuMZ5yeyBiEwYJBwy2ZcEtCgHMAq",
  "key28": "ZDG2C2A1wio5FWJjVgWECvzw86cvLLJPenmsJ7m6JtUBWzMra844t3rximVdrVFGFev3MARuQAfqwPthWHmmArc",
  "key29": "4c1DbTSTnHZFFc9BUNyJdtnTiLHUZTQXSyiPZw3TDmWtm4Z5ZjYDofsFobBgpJn4bdt2ojtCh75KUJrd68cxbgEu",
  "key30": "2Dk4mQSnHrZnvi8JUVemyMCXYxfeSY2i9oMmtmmFtCL2yiWJghcqz4D3XEU3D4PXD8zCSqwtGLQuqJq9ymPErCS9",
  "key31": "2U4g6t1uaTySEuWK5JaaFMbhqDxpAcS3mqE1DKihfo5w6dn4vo7KgmF4zm4MvDhrk5B9aYq9qFmuox2fE7ZWHygV",
  "key32": "58ni9DJnzQa1PyDasSSxFkcx6wmZVSkjbxMHerxcR7zEuNF33KHsv1wj6rjyJp1yHph3kC97txED9LwhJ3z3dUwZ",
  "key33": "5kPP5j3xqeKa7sjwpmZLuKKBmvpMbxfrEbWStqtpZt91QxsJ3zroW3rBqeUxSqrCDXM4FnPPwb7vP9KNaxB1PJtT",
  "key34": "3mPMono5D9NUXqQFoavzs68rAYZKyP1sTkt1NQfXM8nL1hugV4RdHSD4icg16pGxyA3dsJwfob3rmXTuNNYmJp46",
  "key35": "5M6sKq2QAAy96SoFjWXSFrGV5NWs1x5MxUKCtNQ4WmkL4LmB6ZktvMyotnejy19FGa4k2HGGWj3rVneEhZuPYmcM",
  "key36": "GPpNQmNnbG1tHAKhj6PuxBEwYx854gNNM8Akmzq7umjq33k3qzH7US2dNrfeH8JKdJ7abLCXKwKdQnefhCALoem",
  "key37": "46feofPzcXhe93vayYgWYUnSPzNYvscHf7hPPj8HxVRNtNMinRPMf8LHZXsnR6wqbkm1FS5AFHjsWjrNSp5sjmyf",
  "key38": "2A1yVw86ipZJ2WwPBJ8ScN2C7gtY91fdBRCqguAvugHARiVS39LRVeMCGAaMRRtiP2uqxw2NuWZjkNgwiBZyjuQ4",
  "key39": "61JhAd9BkPdGSkSrcSTA9XW7xAvMSS49xXnc19ATqMsCiEWXKqyLfduDaXzFmiFkYUcax62uMUEiVmDsgDhghdca",
  "key40": "2NyFC8GM3bJbs8EBsUSTwu7JY7A8ziFZApNzDXoPbrVoW9h4aSsmREULzU3f6PkBxCnqVuCZ22p8Ydv6aa7PS6a",
  "key41": "dWWyBRmuZ1m2ScmzQWEXuVdrHJGfqoU1DgAqQQvoFM58M22KW12CuDGo6ZWBZ1SnbPCjQWZQqkziSq2tNL4B9ei",
  "key42": "67jtnndZK3J8t1iuA8zFtXoUV9ydJSBGtFNPwpQY9VcLW4X2q7Gf4XrgYUKRuzDhcTJ2o3oCEz95uC392P9uJPua",
  "key43": "UxgW4X9XuLGaE7mvDBmzwsj3yifrdiFnt22F1d2BRjC6HsxqQa6RXKvdWJ64TsaZyp6UXvFKxx81s1UAraPN636",
  "key44": "3MM4ikBcfhksJFaBNE7fwk5wxxdYn6bBFvdWMhW31wMjfrHNbMsvdp45CebX1ax1yJ3YXy1MmnCawBfc9fzkWdm1",
  "key45": "3Prt6AyycXWtYpsuvfJaecN8kKxqvJmsiLwEsn86DwqFKpT8Y3Mb5gLcAauMtWyiqZVRHDjfZ4u4kM6DTsRn7pro",
  "key46": "2f31wzpddUoBogov48QNnWn5YWta73D7xm5rRJSwsei9uxZCkGRajWueUgMicgJCyZGWHP7vcQ3TVw4hGL4gZGp8",
  "key47": "3DkrhTzk3aJG5sZxwmEfCE61PLDcUobCYCpWqgKKXAduKBrzLt26gqacM4mki7BgPSawvoXpDGUkLJvwWbMtZwt9",
  "key48": "4dXDfifJU1heUQT7mJTcyQ8rgGtYRn51WRwN899M8Xg8ENqysPDiKvNF69tN7K9i5nRQpUA2bkNS3iakH9LWYe5b",
  "key49": "48vcXnVmXuxfHp7jwA9gc8CiopKbv4WF1woFR1Ntt5m1Eyzvq1bYB65J9Gw3CK5TvDvZPAdNz6ZJVHq9Eu8Zw6xL"
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
