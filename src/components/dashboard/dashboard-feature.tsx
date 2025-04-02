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
    "nE73YAFmMsRzu3LEqLfo6jX6gSuuRfCgk2NCbNKWfjNDEc91x7818XvfstoWq1b78W2PdCZJewAqQExSJhrWMhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KLRukPdEEd11F75nFTHop6HLiz4pUYcS5DSC2aP8JtcUnbUXpDFafZNDZArMSGrwhVJJNgkrYSCvLQ3sZr2UMSt",
  "key1": "5k2QDKJpgqVxqDu7drLWXzxtD7xZchVDdP3xyqTru1euinqyjhqLMPVjAPt2HZp5DJQzCzNo9BDKeRhWc1eJrQC6",
  "key2": "4v3edcATD134e9Mi2onhtUCNVebSnS7SmU6xBLRJW7SpnXSMxufFyE4SabgtXxGAwpWEXspa2hsJ5PQ7auGa1j8u",
  "key3": "5yCcDYpfwaTngShayVkva4ge7SiXxdaG93DySsKpf7EVSKeB5raUZRie7CfqG2qawdq5unb91k8uSFMX3YvxY9xy",
  "key4": "3puVnvFuxWqtYv9zydHNZsVg6ckLKcrSZv1J17qkxtGxxGD4ukxszeKjrKTze95VjNzDRzMwQcnVhTvo69GgwyoH",
  "key5": "5UtfErDnsUZZKBGM67HhdSZYuj8JKqnH3nRGUqoRnHusUCa4DYTLtG4dGWNNrKqtxYFnHQMsmqttziq5sg9AVAGP",
  "key6": "8zba1Ds2qNPdtQuKUVW2C9VRr1F8gmsAKLx62a2hkTePau8F18chRsmqDHSyhV1s3YTXpiUjeMJmujrEFGU6dTc",
  "key7": "4bJtMZ9ddmipPgCRDuuuHbz6CKEFYz2xpTjd3tmvX46qGqqPeVyNVZ45qFkkJujMxcxBE5dPnndxMA7nXGV8rBvc",
  "key8": "BxUC64UqkJeVvTS4MfxY9oe4jQBLm4ZtBnKPhXJTmTtqxRLo9TJ7XFUxGEFeC4YVyChxAC2xb1Fn6qWUCWFPZDx",
  "key9": "4L2aakjErxqdp7pZ7tgCavqhSEpkvd1jrtHgKYvK898GDu2fR9DzJ959DSTZ9NkqvGfZqKgL8gaz4WAALZNhzFAk",
  "key10": "5SjFeEBgcPyHgaAszNGUu753qtkv9DtRJomZwDpM4LEn1Gr88swECDWjVVqgw4Dp1F9W6e9c32VgZu7HwE9f2hvs",
  "key11": "3vM7vGbA3hH2Shjq2MPYALSAYKLD3QyvNN2PFAkE24WnWVMdvdNbfKt8gBh2b5oELy41c2RjnzfAo6msieznQHJq",
  "key12": "NfUduKDCzD7ettDqHTrug4DEY3rxpWyDerhDXZD3fS1ZzCubsg7NSZ7oiG3UmDFWKJqineKxWUYBN7wq4pEXRDP",
  "key13": "3YTZ2RaYTwHeNx8HYXk7ecEmXjpKttFEyGHRzht6B4iKNpkvi7cqFNRSED7pZkHyLeyhoxUYTcQNUPhyZ55jKuM3",
  "key14": "3pnwLCZrFkcf9T1xVEQjp9GpQo3aBMnRx7T2qztv1RjZs3rGsj7PUiAQRtMTn7gBKMg6drTgzXPDBNfKN8VqGegE",
  "key15": "cDQcXSTG573aGHNhMcnwjWfJ7H7Zd237BKQH86nsr3DhE5wzNv6nfwC9x8Eto6f7MTor54BVWkmzA2d3Zw21ArR",
  "key16": "4jqbbhP4NEHBZx2bGfHbkqvHnQ6iM1D3sSZT7EwhMJ1p6p3WQ5Ec2pvJ8fwhYuzCDdKcoYPeVQYuUmeBMtmfAkUU",
  "key17": "5rsdHAa5cyhzigZmq7tfukWAo68DEVBHeaqJcaESCtUDgc9U8NMY6PzhdjK2521A7fA3paQ5RyVyNnJergKv245W",
  "key18": "3HkvAJAmRRDZNUKKe5E7pqA5f6hzD3F6CaHWrLqSWZcXVhmgpv1NvEA2AUzPf9BYjKbexekmHzitNf5XhRYkVc2t",
  "key19": "34D9iCwKnuuE3U4gfHsEmnmRWDtNoDpw4mvwLoAYKtwfzEvaAMxR334pabre9ywhHTYeemgSgFF1DaSvH5DZryGa",
  "key20": "3N67tw4kEzZpRnBvFnPyVxeNSTityHJujwwA4GPPwT94ZaGRUCDwvDLo1DXv1S3SG4pPTa6g98yJHXNVzxv9tTUT",
  "key21": "2Z3NsDFvdbhFL7ndkMuhU2sqjTige34EbLgu2CD4Bd25LFmoQwZBEp9FKiPiXHgXFAozqVNitpR9H4jk8z73FXJY",
  "key22": "gCZrzw5tuW6gwadvGKj4Yx9WonuFc6rFn3QSQEGQtiTkkYCVcJKkc4XA7wXfZqM4VKDu9AaKhavAJ9wAKd3Nx9s",
  "key23": "us6MU4ri1Jc86BYU556T7uhj5bUbbTZL9WD5rWY4gxU1WJCxyT7A8piuVvG29thovYpm8dBR3qwjnsessiWi86R",
  "key24": "3Xuw7byvj21zGZja5F9mko8oHwzpMxSQrmpRbSYf8T1TgzPMcHzwANLH3bBizAVajvoN3pzNJTiXEKEKiVqmr4t9",
  "key25": "EsJsF6w5QEKBrCSFgknsTF5DZpcc4TKoBYa8N9A6Fe1394Jx5nmhyYZteNEnQjW7ktfAWw3UiJhmmwx6tX4Hc8L",
  "key26": "3qudfFjVhZHhcpE6LxwYArqeCSipbRbRpxLEd37PPLtuxohamo2S4Cdi5Etb2vpKUQ4c3QERXpYtWYdn8Md8JCXx",
  "key27": "5KofjKxXswHVaECtFQowtaoRmkuJsEvhd55hJUbWnzEh7BwFzLbVGBnS88mjTkiisg734SExdiZN9Y5NfGBhnJNB",
  "key28": "5ShnqF9W1vx7W73HhoBs6UpMoq28SMibt1DXqNe4zwDjYcQCK5yjevABBptUD4TG239fFB6irF2P5h7bTFmK2v47",
  "key29": "43pL9duCLd6xuR9aq7HhAVLhbFrgZuBt2QKB2f26dg8Ag7EStZhcB3XzUm5heiwBLKHWzSTjQbaQ2YPdx7W4wj8j",
  "key30": "4js8qYJ7biCn6TQM6MByoqEJ6zAsxYuuNth4oEV1x7ecXFZTwUP3U9oLoofYXN5K9Bm7QqxwRuV9K3S1NbWEJHFD",
  "key31": "uk9mc6jwY3Lbejom1YJe7npHyPHK3SX7nLx3CqC64DmZurJB9UwVjtXMh4iWJ4hxnax7eXuwzRNR8Jno5jrCpC4",
  "key32": "5YLSEt5S7zfGfjFGhh9RuBjXDLAJT87DHps7WBzL51SwKw6z1NtDEE3VfW3Tu8GzQdVUBgZ83CV7GXpm685jyCfk",
  "key33": "3VKk1rn1nRxMUD2wST1hyuKE6vMEPr5tPFgH3CPF4qAP9NFopxNV62rqwD1zLBi2TRvCZPwBZ6n2YikZ1RVLX2dz",
  "key34": "HdvzjZedYu1kHPsF6ByKZupL7szpq9F7KVRr3CH96pFGXH2c1iRoouKsXBcVncTMG6NkFfTKAfiJMdFQdGD5AUK",
  "key35": "YNpTvwbKrCHBTgCYBFjnWRT6b4qdtqxFLuMpLqk1jVvJryTUkfFrjfXCDeF8NSotbvcXP2hfcycizYvVvJQsBk8",
  "key36": "3F48TYXHSZELgnb3Z1zgcHjQ8GiNWPSj4kd9poHCj5CHPccPpvMtjCdKSWVw3MNVbkKm2t2yFFnqLyp1bv77GMNh",
  "key37": "nbHvWwXXrDjgHewcWLd1Lkj2UCzE1Be24RZ5FkK8Kc2MfVpkw7VGoEjgpEBZbvpzpi1nD7MzmqV2TbvXMAL7LYm",
  "key38": "t6v8hu8TGhHZzhxCCp5LxLbsPapQgXcpNxMP6WwKk4MRAAtRsSTMZLYnde6YEvBXtNZnCn9baDgvDtvb5UkhkNU",
  "key39": "3kPyEujBHkJmBs96kJpKeNd4GXMoC4QgNsNtB7UJSBqiSKNSC64fYAcw4SfALLA8cUUkd2PLfJwUhonWNAh9Tp8K",
  "key40": "64kuYnrDqxcSVMh85PN6QpLWDDowKgeKb5RweC8jiudftKKKinLZc8zNG9EGuwwRJrbpcZ4KQCzswdjTqFy5kdfe",
  "key41": "4dGZ2o4ykfiNDcGyqHN9rdRjkpChpG3Hc9Dnf3cKNh7j36xuACEyDSRR8o1xnU5cTQfyQ1nmSn2vJdp2JA2t837X",
  "key42": "2WT31VhTHCXBqvX6Z451LisD8341YzyWW8zPDZE4JXfhMEFWmvdZYir2SWkYg193xF166QHhZ2a2N7SMGZFapeov",
  "key43": "5RBwbMGD9AFv2n1wAWzAeuj1hP3MczpHVAbbYh56TLzsa4bME7Fuzk2bhjo9giLizBxz3SFX5Pgfeusdfkvxtqro",
  "key44": "VfUk1geUmB3YkGVWVHbspV2eAj6E6yUs7X7UP8pDzNNnmFT3PiJnH1s7hvCMX6Xar3nuf996oTD4bLkvctGS1Z8",
  "key45": "3ZxZxVGouUTfddmgZDa3HJHkkfUkf24mkQ2FTR8U7f1PqgZWpfTD5JEQYLGNqR4tELzAxmsrhKGMHj5v8vTKsRhE",
  "key46": "5z5DUuERgpBnhSzAowDra5paxp86pk7cvcBbxuYuaBQ9LubUxyhQUXqWiJ2YRUiTP92tS32RjJKoLxJvC8yByuTv"
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
