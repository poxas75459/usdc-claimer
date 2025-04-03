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
    "2AxtuaUYZdT2GJaAoKu78jLVWRsmJfbWmqBCTjszS8RCERd8zxPGxNQWoBKxpVmfHCdAUKEuMaCjzdRQauyVGDUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qjD8peJqd5qa7YkuhPf4QZc7moDGry3ecimCC2EzNc7HJ4D6biwbitDcWbrbvwQ9kheiwAeaBbEGViZRDuCWRNP",
  "key1": "4HJm4dVLcuEJmZBFXNMcbdCBTC6weSsgoieZ7EoojBjaWjZyXUfcpThxythnTU1czFdPDnZ7145L2cPvzazJpyzW",
  "key2": "5WTcxPc7TDPvDxVCskVhAtprraGVLmNXQkjdHx4ZVQ4FyxYWQB6vmerC3uj8TenWqEjw6uydgpCkTaGVN393WVsS",
  "key3": "5WtSoifXRapRJArj1UFSrKERUKdCxi6Esi7MTiQWumnYtxB2sgmdR4VLnqA1Mrs6MchdpECsCBUwup2fwo3AVMyr",
  "key4": "58Ma4a8hTaX9M4YgMxvaLdWUfEw6EkBtwZ34XCvnbeMeXALF1Sadda2yxTLua4tXUE8R9zSSqKb7xMf1Z7wC3fHL",
  "key5": "4Hm8q931k9xL5km4jDjN9v8DJxvUJfnzYvaxDQkc6GZGTZk19fCNB1ibgHZnjwjvRqDmpY3Qn8goX3hEPpj7Bv1p",
  "key6": "4E6CAiARFyjuddPW5XJjST9TStim2Ve49aMjqEVSk6kEJ69AdnkCjQZf8VFMSdgVSDbXsRx2tN8KSTCFjTRHbW8G",
  "key7": "5C8YcvxpRHKQD2mDDYSvzJEayYgMJH1uRU5uEuz17TsFBtqn2wMGTgChih9TAdRQeezJtbajgZTYTGFFX1t9E3dv",
  "key8": "9tsidGUSEqmfbB8tbfpiNqu7xsgTPsVtYZcYop2o5AtKjesjkMbjx86qa9kZJTbvQPCvbnfExEBJg5N5Yqprwdm",
  "key9": "3SryKtawz3E9GHxi5FgTmiAww8PpGfe2RE6DeoX2tYXpyga4gGN6B2K3FfuYd1aYyVjm9KPdLwnx49gQhQ3eVhLg",
  "key10": "4aRhcB4MMG3T8z5o1NUThvayevDXBY8csy1NzmYffcCJ1yzqWES6MvQ8imxKohnwGaxJ9zvWoY1Jid3wMFMqfRRB",
  "key11": "f4pBF1kUopoE95Yk96SBvApCXu1HybgoiyZyq2ksKF5DeFWTk1Vd76kQ27RAwAdDwsn32d6JVpnWx51fcDZGEWz",
  "key12": "EeTuhimtZ7hjqogqjdJ5b7XwZWEFYa82k1FqYteE4mqJPeqEieXcYBujoQtkx1HMYhBwWRnTrXagBYJmLq4dtAT",
  "key13": "24DfH56ujK2cPwfstqCp4v3jMkxvcy8HfDp3eHgCatisnCrkiYHhnWGQh9QF9CVJcxq2EtvNf1pZwwqKsjKsRNFN",
  "key14": "5RMicSwkrVufZ69hgDqm9TJGwbJ7rwFafiCis98zUVuz1QHwt8bjXoPyEMXM4Lqcvp6qw6X2TJaLSoD8pMKV5ucq",
  "key15": "4A7dvf5S5e8FeJ81NZTNfobWQ94hojSNRx3oag8nf8mAXiTc3sRS9iY1Ah2sY6tLVQJF71rbA4fS6niCN6p8gpLF",
  "key16": "4ebn4Weh6HBaX7YVXj7inngcKZmfXqps1r6vWGQjAUGFLjS2mE4BSRL5eFeT7pzrPEprSBsoVtCSRbywbmreUNMz",
  "key17": "3fNb6xiqxMfVsjXswuEXnSbJV8fwVUtfH79hNqPq3oH1GLhVVxd5zybzQcC2EDRB8qd6KKxFgWUx9HZBMyJTVDLs",
  "key18": "58fTwauD5L79ePwvX9UAQuLTMZsjwxU7xyd8HDS9Ykoh2Go3eqsrPxc4jLB5hvun2sWPAxJG97ACNkEj1BjJyUwN",
  "key19": "2bjpXocrZK2rnALJmDb7Bu9XVdvavaZ9k3jEjtogUDdoL6wNxSwiGwXp869Enn1AGEtk5JataDjfRtqSAmn3u7ef",
  "key20": "5rw56TPw1Y8KTs29SqVc2NEFha59SvmogvUh1K4CruyDBNirf7iefVbQp5QBaV6sCog6PxDwxGPrLNZPhDVgEPab",
  "key21": "48QGxmW673BChdNFWwHYafdJ4yFqd5GDMY7d79k42PDoU2uhxgS47U9G3Rv1A3eGyoJzW2SuvBQLF1pDoTA8gzSo",
  "key22": "5w66VxVKJ9tmxMTKNY1LpYybJfntcrnFT4bE1mkybAnny9kq1qNpWhdnoFKhuJsTXMNPqLkQmcEqMh35iFyoMkDw",
  "key23": "2FSnhJDHnwXR2eY36i9raS6LNy3nY6LqepFg3ojLvA6LpmsGd2qZavHpaYRLTrMtHdJcZBLnTtJabkyoK1JjHSvF",
  "key24": "vd3qV9hDQLGQnU5GgTfV7A467A8X1xRZ8Ki8tFT7P5wKoZxYhQQh33eMUtVvvJThMgN3XKFdkMQgad5tg4PJYo3",
  "key25": "63qR4ooKHUzqf8xW6XfjqqAG4tnkHn6VLRPGjBohKiNeJhh8PXe3ETf4ivd2oGvTwdy2uckhjnjcdTq9iMMLAQqT",
  "key26": "3hrM5Q5X5yoBj2Vsg6xMTieM5Z9QSRGLC3gDicyysgsnHUDBhWAo26kjXkKRAEwfwdNfU3PShG6bDDwPAYzFYHDc",
  "key27": "5twuD2SG16AdzjJrwhmiNTGNvopwaZb88kD6ZY6w7rBF4oFZ123h6xxRrBPHkG4CbDUYdo3ggEgnixguVQMiYHSJ",
  "key28": "4fjiURcyDEC2PNtZ6fHvfzKvByKBfctNYLQwDpdFrVKduitXhm2yy1PEaL5jqrFnjsJizfCKSofM2QREQwjwGsrQ",
  "key29": "M7pVNm8kt6pzjc6pZTe8DqmQ6KuEesxmHJXfZh57sTYTtq9ufmBhChFeFVLMNMfDgMcMJEsBMhmAYGzbjTRHheg",
  "key30": "4vdGSfruiWrfetQ2u9Vo1ZG8a4x1sN473a7A3CFvo5FB7rT5TgutDGMmGW5p944ZswYJdYmeJyUECwCEBcvz3sc9",
  "key31": "5kPwAQf2ApDpcjoX1MnxivSiCNBJ6CyxQzYbFaTAu5wN29BhYjPL38RfXJW9SWcGoc6Ua7NUYoN2E1HxvqJVfeff",
  "key32": "XVQ6WWyfiaAEC1QNAZRi5pz3Ac25UdGrdqt27i6vFrqqXpYaNTswVQHkCj5Prdr3RdJaohkYrh2aAm1EXz9cpb5",
  "key33": "4MPga1EmcYejvK8Jjv76EAgaW4GmDZWdZdnjbgY7aLypUJWYWYpMu9hZcoNHf6FLBJBkamUSvNj1WiRgH14fnuu",
  "key34": "28DX6vviHPmAZZ2fw42BGqH9WzRhZV3MEJkasK4w2TGRGBs6TrwF4W2Nc9E15g3Wq3HxEJykW4NmxG4AHSrbjqTU",
  "key35": "qR58GUeCkmWc4W6M7gcGNpAnpJ5Eh93vTgMNNuii2VoKR14FBqbRpAECmRtKHJu4QW92z4GwuFpF4jSZe9tsHnX",
  "key36": "RkdyQtoV4TXCB59fafSpxmJVBtWCW6VPYc3JR4QmQy7PU5yzMDGKB8tnd1zPLpSHVoeEyAizse7BLCH9SzvdWxb",
  "key37": "5JJ3zrBHJ87AZAxepVZd9cZ7ocnRvhZZRQCfvsqXC9Pgv97eYU2DuzLRHhsvmSDtLajyB6nKMybgRh4UHkRrEu1w",
  "key38": "5TMx6rT1CkMnqSurUtbiq4GwCySZ2NEiyLXoibW8a8tU8Up62c1fypcgC3dKYr27JNGATabAxkb7TYJCjMRLiybk",
  "key39": "3gX8mzEqCV9NFADtvrbtDA1rBycCvVNvWqwMnLQwzPDYwgn8eCkFGjXqL732XRooPWATWvaujxLqhXaVLG1JLy74",
  "key40": "4Nz9MNLXwF8Z67KoTRr1mAgM4vPUzEK8kwT9Mri5YVMKZT76otP8twG6ZvUJ6hcBftuwTXCXVuaWZDCeQaAgQgi7",
  "key41": "5zmQoJmcLGttyjruWmHDKLpA2wLSXHiALynAQzC6NrGqpLwJczgEdhX6KutCjkapZh88SZ1Rm9LbsqoBi9bk12qy",
  "key42": "4DWXZ1CgUmTLT1bg6rBMqbMASz1GG2UrqDFtUBFQU2C3mVzBEHxw3MXWNMnKv3uqVvm7C2CsTXHRFk2duUYDa7vs",
  "key43": "3iqCjFPAMK9hbxgPKVKYKJoJ6dtsjMBYWZP9TeNAS9cjWj1aDza9stn6gA4vu6r2ocX7qWtUnJ8byujiPnBTu6v5",
  "key44": "2dL1YVqnh4x7mJAhQMFG47dt1KzRaxig5BrSvKE5FmJmVNrfoCi1K2Zm537TiAVm7FX8xKSYjDgx22sVTa8GGwCM",
  "key45": "5uz53ZYHp9pw6c4suAxFQtG3yJFpGn2dEUzrWEjdtWcjnxctQb42L1wuqLwJmw4TRgKTPX6kpkdRJRtiTn3KYhn4",
  "key46": "EvvqwRJdCbgbq4fAEM8zeiNoPvFSX1vDgdMnkmXhsMH8CjzHXMDMcdB3Bq5aSWrN79LGAXbGYo76sR3FcqmREkv",
  "key47": "51hpxQYAwmNPjJGpK34NiHuiWczwsmP1Y6sC3nZfU4UHExyfdh4SW5aRwNghRDbjFaT6oiauQkQhYEcL4oX63f1x",
  "key48": "4EbhFFyMb6JqePLvnkLYFYSs3y8vERhAJLP5YkrDtmUihNQgCYVm3bDokNpK3TSywiRunGVgnoCeQDnrwidqkjGz",
  "key49": "3ARC5fTXFMC5ESJJXPY41CeDuVUyRWvCQ73G9CfDEgWkhdgJWqMfT7kBxbSxtqLfC89rGt4cc6W6YkXq6GXaLt65"
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
