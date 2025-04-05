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
    "57URcetgvzyB5xEJ3nzgDW5YHZ9PbzMHFDpeBvugotMqr5camuKQCJhUvVQkFKtZKwWmxoThv8ycQQri1dWwidR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LdTyUrhwdcMwSjo1vkEURBQsW5P3nAhnLck7eftfYsegyeX4PpgGKxajV4rQpURpEji1SvJwmLGfWAZoBqmwmcZ",
  "key1": "2XuFGZoSnzBFjQn8MYeN1WWQVudz7qePpKxP3wvGbVFCfk1grEERJU9Qar7s2WnyZUi6QomHsUtbYFchueoWq1A8",
  "key2": "TiXKG6326QUv6BpGcvzkWT19vijsPQ6a1oAoBMaLWPNuwZDAffkCzPb66SfvAcCUgUQTozR9Pi5dXLHvwe7P3Bm",
  "key3": "3zHX7jfK8rSY9C3wR4ZR8kogASTwevdb52ngXbtBkcFd7ZbZ51HNiX9nJ1a81DxHL1zPRVRM5GGyNrEZsWMFjwVB",
  "key4": "2x7pYzYUFA6V5fLKDPPxiirnyfDkwN4QnoVN5PYQr1q1tSb6Xtjmc1wBPoPb99pnRYxU13TQt3LR1TtYCeJocq9P",
  "key5": "2wyTfNoa2UH2vMYVgoi7P2omB8ztbYedb6xDB2EvT8h6D1gPWUXyBvvqYmHAfXqxr22Ccawvf6yumtkAcB6LAeYo",
  "key6": "2FuXKdRGgybhkJvGgBP75bNQjhH84v4VoeRKijMavYThZTc47eoAfQXWVDRehmLozBWe2AJirn7vM236ik445MWv",
  "key7": "4aFX37yB7jpFvAynk3kmXwnVW1Y6zsnUN5gKv6P9vZ1CuAN8iSZ3WCUwjT77pmcHqped7uosEX5XNcwnntQHbsw9",
  "key8": "3KZTWX8TSxYR21ArWLNZKwMbK4QRY8EWtEbFXFBiXAdNkPjkMhfiZDK68szorh3Af4kUWnK7iPExkQJ9aotQUaMi",
  "key9": "4g4uUFtxq3u1ZWkmEPDs6CrRd6mrnYwsssnFEfhtRn67JcWJZkPw5w2iNE93R9PoK6yg2T9btT9LfiqX5nKPVfeo",
  "key10": "3zYSVNrweB8z851sdxxVjMTsjG1euUS9vFKpsjk3oakJ45KvmWkJMRQtP8fPiS6Ta62QcsY3FETsqDrkc3dK8zBH",
  "key11": "239Mw9qbv5jVKbdG7dWuDXAfgfjM66PYrKV6rsjCcj5Tt4nW2yKPK8LGSNHquf4HbXBokcpGegzF1CpigSgcNBya",
  "key12": "5oLWU36FoCa9VvWzfjCFX3QEkyRtCuHS1MvzFRp3Vsm1qRHJH7HMHiNpvoLd6D3fxJ2A9Grzv4ernKrqcb7Wiaes",
  "key13": "2LjkwmNFTBTR3AbrbEZmDyBGT3eoaichRoDF7WERKZWaE4S8qbyXj59dhTVA9CnmnMArwEz7nJgt6ooNPNkWkRBg",
  "key14": "3hdzdbhfsoT22Wqc72UVvNLopnTrMDSrhtMrQDDbEQ9Sz4Y2sPV2YeQoed2o4fukrjSggx7XsDVNJUm2Pho1q5gH",
  "key15": "3ENeXz7GK5cqXq5vLWCkDsAbpmGHExsFSoAomxQmQVCbJwrUQEUZcvMiMbGVSjUVJcDV8PQthTdt7fJaefgKQAZk",
  "key16": "2PJ1vPPYQQ1Cwqq1MdBNtrskpsPNFfLB3X56mEfH1zYU7wuJzzVJ3ZbE5cxeyNYAciZAbwXHifiuhSPUvQsnNkxV",
  "key17": "5LdAGfKNN2wTpjn5GSz9XYe2bbLFkMXbRmNTawm9dPGiViRj2PCm1aRi9jTZZTnCFRi8sdJfcE7vvK4c421veM7Y",
  "key18": "36C4aVSzjMxSnoidC4XSrFbvaA2HB5xkBdTf6rgzMfnC7ybyWLGJLkHJBYUWCFRExTUJ8m7N5JFQhcqZCwMtjJJr",
  "key19": "2AWgxa6idv9LbcZU5zJnitftuoGugCYURuPemv6WzpSDS4GJaXXS36XpxoY5sxDhomrX3cERBZXEcLNRfyMxPLY1",
  "key20": "3Zd8fx8yFmb7h1o8pZnBVn1YenSKWApkdx5xZTqoHdB4gWyM76VEqLm71zQqNF5tRZJyQsVWtyHK8ZF7tnbZFbFd",
  "key21": "4HLpU7vaBTHdURqqVPSu9gDgSMWiodjyPyk8da4kftAoHGfivkurHCvH6hNM7j53sU7U8pnb5EjXngzYJa4hFihs",
  "key22": "53kuQVds1QohMqb6ZSiYo5SYmbAXVAqMAgj5YPm3oqN6ExrZKG58S89L8oisktKP6YvaNSaL3oyJ4hFs8kCch4b1",
  "key23": "65RDiZp4x3g71LiHnwYe6vXevDfjHxcQ4ZizKV8HhSSRfepBGSU4koxd4qq5j31nCAFKi8n1D4XpppuupQCc4YQ1",
  "key24": "5LBqaea8dJ5ZzbSGWNqoAfXw51nvSBmcRnu5U1ZsBZcvmgfULRkiinqyXbiAsfSpRXW37BCjD1QHmXy5PbmpS27Y",
  "key25": "295t9jKDeya7p3a1AYACCjRUE6pnB1RmPrmd2pgFewHVwEz8gshUwKWUAdkrw5T89YR5q2yVfn9YYC5pz5BVyK5i",
  "key26": "4hG3kKBuW1oxskoESz9nz3ReCqvRHkVBTV2ZGuGNtWaTRZZD79FmKDSvBuU7neaGiuyQhDn31PGRDcBLBffdRQva",
  "key27": "nHAaKmqBRaJHhVm335rksiR96mWANQVwJCknHWxZvcrGKpdTkBYZFwnkKEq5qwM6ZXjb6J5S6skqJ3Ay9nbmyX6",
  "key28": "4pM3MYFSGYtbcVCpj5gdFF4TyGz2MMXdyNoe3T2uhBcy7uZfKNm56G7TQTJZD8oCax8xaga5EyfY5ydoCvV9eNrf",
  "key29": "bVCSexSpqQvmzjeq1i9nZk5aphu9WiM6quiN8jtvRvNp6utx1UpNK3DoQ3fjU6y3mNJgs1rbnqGxJUxWwNLitTT",
  "key30": "9B3ZBVxUcwSVN2mqatfWU5fxyq1UkjJjJicpZajuCndjXxkr5ep6dmoqkZUZpzhW3ZwRiDo6TCnwbu5a7cAkL8Q",
  "key31": "67RopUVUCDuHXDw7Acr2iSJjcnBgLyq99ped1QTsPnWEwRZRGry1L6S1NuhXjsLuAkCnmprEFWACYgXvdhRXtHjn",
  "key32": "sq8P4ZUCWEswfdTA8gb2KnLTHgejnn3VotK7D8evTbXCmn5nRH5Lw5Vcmz8axYH24NwGRpuAoTFNXKd7xfvUcqt",
  "key33": "4AxH2riA2rY3SE6SxirrGQyyPjRrWeHiWqbqK71XyQUq127bdYcyeGQ8LhCF6MZVNwY9QQcf58UgRcCM628iYE5p",
  "key34": "27DfEs1EXSxv5s2nnzzqAT8KcVEsmHK7o4J5Kyj8bMqzwMnCBk3iqanWYyvDJS8kGujjJhDv3hF2JCoaqf9F9Cd7",
  "key35": "3WMW5FE7GxsFVsatCzXpMjpnmFCXEUkeDkXnpuUP4sTJi96nsMA8rVHSBzS2kobvjEBgEetEYBZSmW77BtQVyy8v",
  "key36": "EnBxzhxnsJoye5J4ydUYSxDiNkXvs6V5GwbZP149jyMQ3DgFujzxtWD856Kj8N3StRKxyvD5tcUktGLS4fqL17J",
  "key37": "3gZKBi63xD9b4Yipevv4zcPkgVbCirTcEFU3U4rrA7u6tbDzzSUpXsvLoLeKp3LJpZwDyojkgMyZSzZ1FyohJSeH",
  "key38": "k2DzEvz6XUeQ3pkW3QE8mSLdkpGzy9BmCsG6uw4R4BN8CKpUG1u3JUQR578u4gxJyrjh9942zrt8BNy2MjtFUNY",
  "key39": "2zCJsYBJCjTxYay18VShHfLzn7hqLr5B6ed8RAeSgXm8HK4H2to2MU5cUfSrxtseU2YbqAvqwvfWYDVDZL8uhdZ9",
  "key40": "33yRck48essPmtQ9vBY18D9s5MQqW2rYLbeuoHDZfNY4K2rR4dddPX74LppFn7LyqmHdN3k2Q7uLY7ZgSUuCpacY",
  "key41": "2nCVSJonrwDnj9bbWai5Bmf16zSLusMvcdrFtymLWdP8yVDAtQMzr5CVsHLfJ3G6KemxHvjJpoL9pxyvGyH3FU1M",
  "key42": "5J98KVTPhFbDLYh6uPEtgdtKRjqt8D4zYQL46xrYQjQ9tJd5QJqURENEvA2zNFUVCXkwNnkwDumpDrSy6rJ1fmDL",
  "key43": "SWk8RGhh8Dodo9BLvTRXvbsjaqKuoPJ9cqPfnSpPhHXd1DYizv9nv4YY2BiAhTYfj4i3LFehA5r8wsbWf28TCeP",
  "key44": "5Nw1kpnDzgEJxDjFevAPPEJA1eSdy1vjZ5kcDRhFH2hzwUwYswfCYK9Z9d11q9yjsAWHDX7rLjDqMfch6htR84pk",
  "key45": "5tis4MjbH94CG8TfFYaBHdqh3PwyUUtDQW4BjvrkfDJv3GCDENzXwmLoUynCFV6qu8TBe6PYvxd27fRZswRQRn1c",
  "key46": "4ATA9HheQqZeaEcwyTZT4e32YjeYrVyjGB6zEdKAu2QVVMtTxKhz3Wjq1NyqMTomziU86qujkp5NFvSAscZseAH1",
  "key47": "dJJr5w26KGLY2jxrMD6bnsi4cC6bbBsazKvyxsYgUkj4sFqff5qQu5akiVnbcwmqk8iT1yP4GxHE3uVfpzBdPpr"
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
