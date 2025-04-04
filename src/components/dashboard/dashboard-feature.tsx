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
    "5uCCPaxwVpfZNGaRjXsXUpFhtQyG2mYPudGF7tEK45ET3jWPYegF96ves7EJWgtBjwzvXM5dnkffD56e7LjJgxyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUea7jMPxD8hYdu8nPWRyhZBCqidNqwh9dnzW9pUvBAqVN9fDuz9YEVpwG974mtV41ExNyhxpGoeDCepFoiycWi",
  "key1": "4nN7jU1fjcDiGrmBzbhZSCqcTvXzEqPwsSSCfVNkCExjSx29hZLkviGcr3X45jMG7Xa37sQPGyzwJtPjDdEhQfod",
  "key2": "3XEVBdzASqqX5GXz7HpPq9JVYcxQqMy52vySgXRSRirU8tSKX3XD6TyagWDwW7zAXSGrsb7q8PwQZJddbrBxhQrt",
  "key3": "3URUqa57nRDjJWNUkajLh5USB4G68nNMSqqHVsAJLH3mPoH6uAMX2t8YroE4jBVk1gANsJ76sZxxrHg3q949jT9k",
  "key4": "4UyJABLCRgqvzGjLodwqMiDh3uDP98nDctCpemJ9L7Q4RQ5U4CtwNQRwyij4HrstBn1DMPnZMMiKaB41v5FAPxVp",
  "key5": "Ka2foE5GnA6ZqoprqYGjpf7K9fuhxNwDrszEvRXrKDDKaNukjzwAwUcAcTDysGfHFe3uiiGPoUhxPanZo1n8UQN",
  "key6": "5PSARFdnYYpXgS9CS8UyrF4vCBQnbfXE4HuKLwZDwfcK9ssUtQQndmGKomo95h44QZTjUt3opCxbGkv6WhMDjLH8",
  "key7": "3gitrydZDDRnzFZW9RsXb5yeckjNofYb5bbsiUtQseiT48jaqANcaoxUUSBycbCXEngUmtLbWmDARzqDDd7aiWM3",
  "key8": "om3TmN5fedAZnrsMN8dgJUG3kQctncvDD4NkpfkrkufHhHwU9JKzhffo6qk9f75c2iJGm1uzdHf2rtQ1JfnrsZx",
  "key9": "3HouDCx7DqM6WJUVkQuq23FZiSJrsx5xxxYqS3H83GkjfHEqJBtBmyvFJqrptdR2NpDTqb5jkjQoM5n4jdKvyhow",
  "key10": "2GM7jnt5mYceQtyFLWU4GtcVBdUPyodSEP9M9ARvMF6fNHGwBaqhSAguYgyj3qqGRrZVJCK3mxK1Tm53RKmXaZyf",
  "key11": "2kc8u2nZ43cUH8pJZpjsFTq2A5G1PdvYqYr6qymU2xdCSvxnvUDKSACbnSxpwEHNN5jvhxkSxdXDCzV4fDbfzu4z",
  "key12": "3VyVASrq5zuVkTTeF9G5K17BehWoLkT7mj7gVY49UR9UWfJKsqa46YVs7oAKULQBG1q1qvm1BBpnEoR35RrHKpHM",
  "key13": "2es7b1L4wMmUKWw4b8jhumU2Yd4cqspJL7ZLpBst4pf3STJ9PRd14miNaXQQAQk1NhgL2GqbiexRQWqWs8ZXp61a",
  "key14": "2kYvJaaBtdGQp4szdoDXUjXwLFuRuaC3F9WH43m7XKoH8tDwEUUBicL9EPhywRTBtHQZoXFG3A33fHgpVCtFnowm",
  "key15": "5ndQQmRuP1aii5N4DocsCpyp37YxGR1T8yk3wdKNcY3cyagTMxFFoUYeZKy5NscR49rE1HoGLq2BUa9CG93FMJss",
  "key16": "3ootZZYupM3M3Dbfvzzw8xQKkQ8KeMK13CdPt1waVU5wYSwBP64M9orejf7eTsihg1R6LiK5FXqFhd5oFzuQL6Yv",
  "key17": "2hT1Y25kdB9crXVgRjx6cWb4VkSrG4qwtmrqRsezht28czv4D8eg9dxenRUL9bwBptFjEnQrxPRXzo2FkgcYW3Hu",
  "key18": "3nraWTzJSMvBK2jEaiPNUxhuAofSFAspNbfTvwnb28zcRCEWU5NVDzUKRxwBJDgS6RVTg5vr12EtqJ8NCwGX277W",
  "key19": "fQ6WrSHwGTmqZA6kCVcp8DiZ9rbjWs5q1Xq1Zo32PVxvg9cQNpd1VeWtahGv3DuS7iq5qAvaRejoSRu96k3GVF4",
  "key20": "JHoJFu5SBUBEGNzpVkaYvDETKLMoGEW5Xsr9nA9QzrwSNWxbZ1YMqUZc7ks5K7oWSMktt56yuTwkfEAfzevePQc",
  "key21": "31xMkf3xxKL6tj86PAzxTZABHexd3t6gR4VvTobr7XqrTu9oJtv6yXdYbzoFnCqBepQwE375LTCt95ZCddYGMpNa",
  "key22": "2v2MJGhNYN7vJmvLacXhb9xra2i5jwxeYUNPAb7cYSi1YhF6X7Bwdjv1RzayujjC24izyLjaqjktgEUiahuHpV5s",
  "key23": "4MXBjyVQrq1umS7oMGJbTKz2GVeVWz1TWh8kmjZC5iEm6z9oyyj3exoPHTQQTrmvkmtUoJRVQ7MZKdNmvu2WQjyC",
  "key24": "3mstrLYc3qfwZL1QFeEV5Fe6yEvPYdSQs684v66VBqPEfneXPNfCabG93nCSj31DjzVYuPqbc7MMiTY5JXKbW5zi",
  "key25": "5pbLbxLUgiVtTPrty3jMCe7DnaD2s7t2ZKmaWLwMqC6VXJoPzVrUi1yuH7WH5AzG3HXahXJAM2nbdxNJ37RL7aL2",
  "key26": "3sUw8426sMAqXP6J8brN8bAi3QXdH2ndcmVGrzP2H7D9UzvfWRophCFK5mCC9sRNhNoyRwKSr3G47FnUoLxefqv",
  "key27": "54vkNhjvtQt7VYu3MoMLPivjWJnC8apGa11Jg8Gy1Yk9S2ojMyKYKCM2aRgVM7i97SR4PVq79C6ACCVAkRKSMhRM",
  "key28": "517cyKrFi7hS8gcVQxWx5qs3TASG1Nfvz9D7gauZCCr73XpUF85tWKnA5mi7Am2TxETBWbfXxVQ2bDHKSUx1Zr2i",
  "key29": "SqtBVZspFD9FoLHtsWNzsEq1y3gp4LF1wYvzZtjLNiJshV9FLVqrPx1cY6EzBk7po4YufuhSvDP2TzDPgpYhnut",
  "key30": "41khsM1ZemweWw4aodPSH3y6kfdvpnJ6T4gwURVpLwiNCwvgV1mu2GYbGc8zN2oKusJWUFxFm6GxL3h1oTdypHLy",
  "key31": "2oB2qsPMQmW4SU5FjtvAVXUGvdLpbA8WxBQ5iorsPa3rumH97ivgPfK5ta9XzR31E6meYycUft2C5jJBy621qPg3",
  "key32": "4r8XtzoNL9TFpi6nMax32MuSazQGqfHbHrYkHdpSCAMfE3onJF8VoFY4LdcH9tpMkm88M6rDaLuWeQiF5vgjwSCg",
  "key33": "5WXNKyHpjLpmjXC4uw7Rsmv7PdZxSW2Mfd7UmWpBMB9N2rZ679iuZELkFQp4ftpkcGfgCHVGnYToZYCH6LEeED6s",
  "key34": "4jjX1AJMY9q97Mm3pma1TZXDTLo7C2sSLCXDM49xs38re1uki5zYXQFiLRukDasreAGnK71YptUy84kuLufLWjrp",
  "key35": "3BWFVzEXEevztAP5pLnFssjjmS1dHD3ay9w1bCzfvcQdBvAbnRr84aVCpKW1nyiGRn2yhpVh3rHsa9pSahUUArZ5",
  "key36": "5pFtyVGAk5MBxDRpYEhuLJveqQhmbfjKxBcR8VFWgyXbjHc4XJn5UjJdFcKmM1nQdzJuxTqQAP6nYdQxxMV3XKwd",
  "key37": "65CxU7qHTQxANT7eHj8pSxMBESWzjXGKXE8H6thM2MZ8WgR9W7WiTJYqD5fcC9viZs18bb6FvsvB2y41vkDMYT8A",
  "key38": "5jESAyuWJU5mH5Y5SyPH7XUNuaTLQfUMENnUJ4RuW7HuC98656xYkZ9TZoKbJwZoRLxccacv2rTFWtRrKinSHBjJ",
  "key39": "hzGiMrhVAAM6Wp1MgHDj24CM2uyWqEmMTgyCRgMeiDncTzk8k8gep3p26v7k14KSoXKWi6isLBAgBjdyDF4WMLf",
  "key40": "4LJiLS6phkjejU6NjJb2vfz6edrAyANnxnPDHfS1TPe5rZf5xV7DZsePriC1GHg9HWVzx2wGr96ziKwNtRK2ZNDa",
  "key41": "4ofyR7rUR7UuPCvYN8tLTFQm2iwQQ73TFTrpvXrtzhVjQfzJ89CDzJW6s1szEdo5erVP5c2J9dGpjSG8TcjUFs6C",
  "key42": "3hsqReKFoieHpFixHxmKArpyxvNv2P7zkU66BE3R59SD3QS171mZmrhGMvZXNoDbbthx1RVDgpFxJoFB5StGjuK7",
  "key43": "5JaWcSZDXTYziJiPQrwruio7pEGt22cmvm96Vodx5aadN3MkRYQjAFooojjoiUSo4Vv6fCrNEkjcfdjiaCtHqd1D",
  "key44": "RqGkjB72oWZ3ACSSRp1A95fwdWbfpJqqwv5jL6tiGgK15qP2hGt76XWZm2kNL6naSz1jedYgGCjbZKXWC7qVr7h",
  "key45": "354RhU7Y6CgRADLULDaCXAUHNTkFgQaKLhyP8miZBQW7vq47dAyq66cUdTLVRyEYbRorNKLasRzpSc3fiXDSpFhT"
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
