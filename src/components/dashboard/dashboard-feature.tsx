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
    "4wsSQjgH33CHL2Bk3fjeuMvVR3fbW3jmUFipBZC1wngsGB2k9KWLnV1dBy6ziiQtS8DGxZMpBhiuFSdw3ThBPgpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QhryhGFVpppBi5yt1omNnBS5HSthgF7Vmc84y6YJPxGb9doJdq85MTw3x561EubHroVZubkwMyPRg8cdQJVD84U",
  "key1": "45yWbjUvLvM7gT1QShzjkKkGfV8anJeg9RAeKDw2RUj4wq54zozTjgGiSTgsXiNXCBx4PR9D5ExrGigSmETvAaVR",
  "key2": "4rBAEAX1uAM1MAs1uVxywrwXECRHgCQrMFRwNwvLHzL38qTgrEvPJUmq2N62y3Ma5yJMPL2rHsUvdHdmTFMz7Lyg",
  "key3": "3Mx629me48i6MjC66zj3bfw6ykJS4cz3J3itoHGeCzZzJNxGLQHgebeeGPkj2v9SKsxCqaUawVyd7J3zQuho4cnb",
  "key4": "4oqN65qL6oRUSj21kQcCtnmrUAJBNBbyT7ckh6gZRg35JG1REc8PNDgmaGEsWvvwVAWu82cL14FRkC5LFjP9jYXf",
  "key5": "5dLkbbkBdfBf9NTdVsS3RRERi57F4KnfjeQ1XaN7s1w8EjQZ5crxwu35mJHKTjBUwtRdHMPgNyMa3dA6sukM482s",
  "key6": "tqEkKuQD18YekyBsHcQTcMtV8BqNAgqq5r7NrLYJQ16bFSJfr7P5QreTYspr4EScU74QeHk367vK31stpjiAmEU",
  "key7": "G64YTAXmSBVjv3WzratEp4Kmh8rnQE84C3UCD9NUHSJ2UbFo369TVeEtfUbYuhVPGrG6UT9vAoVydFu1kQpqHFp",
  "key8": "4ERdRQZswEuEJZVXRi1aQ5ESrxyTNkCSmdPpXLz7EUKXrfydYCG724Rk6ms5oxkh8Ar9QbzkSNVEusSh67RRKRTP",
  "key9": "2L4rnYRyAEeXUgHxnNFAoygTsktJ95hsfQWhXXJHmcoT9Thwx6Ejimy2TWsonS3B8V8Xks7iUU6oD9CaVKoetLRy",
  "key10": "2SF2JLiKQVujyfp8ZyW7KEathZeThgfAD5Zcyy4Aom25MckGe4z6gHae46pCVAMWZCLtSzkNm489iya4HTouu6pp",
  "key11": "3ThMsBpCfRHVogkDuex3UzcS3tNL3GkJ71FMB3v7rbQEhwcGrfCqFXcLZKqWi6ja3KHXgDFGGf5oba4cxFKgan8p",
  "key12": "5BcJfBJdfv1cwUZfAD5wuNbHPLLHs6pQKy7oRbpbvgobxtnZCeZmNUCC1Bm7wY6MRG47VFoKr3rFUM4fQcR5E1Hv",
  "key13": "3CZ5RAKxhEbugkGojd3M5Zk9zzvybhjAkJhUMzRfrNM6s1QBtHELKoZERZnMdVmDzC9zjobqrVqaxfBdZiZpwYEz",
  "key14": "3JBLSZbn8WrMpk9a6kSXRdT6wUnRSs8PLztw9XZhZqoionwCoaMgHxkS574176mNfrCr5r3c7W7s6ZA6m1gitGxf",
  "key15": "53ShZxNiCyzcxbRAJAKu6UuFS6F8Sd6Ud1ssszDPz4Vvv3Aq47Y52R1RRvdtmjEMytWkoaCbsDdWobeofZDXFz5f",
  "key16": "3mdwfYzEPJFWawY7xvirKixY7kpL8Xiv7qjSU2w9Wz38z3vwvrUMsuWpyCwRN3qBSFtLANfptcvWUqyziMmRYGTA",
  "key17": "5cxaDu3Ce6hFpfwwhZScF579uueZ4zkRA2moK7B3EqBsewUX3t7EgS1TGdLpxS83bb3gqoJ85tAh9UaqoH6tMEuk",
  "key18": "4SU9YuWfvZVdk8XoNAweSQ6PYsc1Nc7ZM3QR8gkfYL8Vbu4zqaurGNgHErGiNE6q5bxgSQJRFdD5TpojSNBkHBmN",
  "key19": "DXqJjGe52KEopWwdwgB3D5W5xMwdJsBa4oHNBqndHUP8YELPH2mznPbbCj2bm2DeATgmneeMk8FJq9k4X4sWrj7",
  "key20": "3Q62GovMNrUaMJ2iu6t9hN1DvBeeBr5ry7MBmEGctKzZAjaqfoF1DPd86vjX84ffG41UBCANoo9i9gr4crzgrEtY",
  "key21": "4u8XTyHSsc9UJ5rKhTUaWouVj98k5Vmne2dadPhKjuToSnHcocq5xaWsoZVQVhCo4rQMjARXNZegwTrU74ytKskV",
  "key22": "snnXrxDgJZbDUJX8Ajr6Fwpy7WEkN8YLHR8sHqGUSUqjXEzUCHtuvaLcd6BXQG4RwMpXuLgwkopQQNMVNeEfA1n",
  "key23": "aRnNjQ3PdSWnnAaWvVmyjAhsaNnd422HrQDnW9w5pHfjLRKLDvAAyHBTuEp1HYwK5EpjDDVkLUoeY7z7t8RQp37",
  "key24": "5gyZ21TqfGv2hUVM2dVuMAoAi9J4ZQ1o1ox1g4v6KqTkvjywzC9YcB8YMSaFceeEyCgqLFprLCPdPE9E3wvETDvL",
  "key25": "3pWoVJBBCSiVqosZ6oLn2cFun58zyVPb7zTPNVokZX9CTcLh9MD6LosRq8PJyVy2YnY9bWYD5ZN5mhSJ7ZHxyFB9",
  "key26": "3Cm4nWoBMTjuyxkAdW1Prci2Jkgocbzimw689s3hZvBBDxPWfg3Vqqd2J7x3K6KMUeLetz97LC7VFv7o6cRRKUtN"
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
