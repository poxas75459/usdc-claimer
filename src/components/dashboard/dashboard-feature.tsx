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
    "2gQHSGB2AvdtoisAa9g591GAQv29pB1Lmny7npPx2pM5hN8z3TAA1RsAe1fqSfQAp33hNhbRySYyzgJsU4fVthCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d4NaiqQFLRKM5Q9QvTLDPXFrjc5VxXoD6LqiUnJrhsfEJTGhwaVxt7R9bJ4GDubugmDCZkemzcAH3VfDCKCeoyt",
  "key1": "44ejDTFaeFu2pYRZcsbjcF1b1sCsNT3shCCWWmohbsmTQJeLHQN9Fx46vZVAz95a5zaUrD7kCcttB8XLo8XdZvkV",
  "key2": "4PSrfQG6ie3pb96toT1DEUxFYRq4B42choMYXWnVKzEt8LQXjqbsyBXoaX96ZEAaUn4duFsWUM4MDqB2xN8SZgeY",
  "key3": "3YM1MGcouQEpZ64XokLumPCHsrRtHAsUh6P2HEdzzWjXoh7bHVwwPbB7abhYfV7AMmkLLLxHeyhEsgrhRx2BuAgs",
  "key4": "2iXotb1fSfYNtDHv1FLwXzd6MoW2D7vK7cTjy8EAUaKv3TppXmcLcFD6DgMybCRQnzQGgYhdwQ1rE1z2FmnUc5dR",
  "key5": "3uF1FwyzQVxUDjtWS8T8yiESG4RjCmnkb6tiwSrZVTgycCHsf2uenhTY962BYd1sw1k6oaa81jxKdPWXKXYC86Pr",
  "key6": "2i5BzPwqULfrq7TNPTUfomugxenH9gU4AiThcdLnzDiCC7Cb2JXCw3WqZB1YLKTt4eDqsC7FWoAQ3hzoqmciF74k",
  "key7": "3jn1LgRr2An1T6JZ7D2nMeZ9VFF7XK2Q7APWa7bmbXtwhdnqKGUmnSGUot8J2UnUr52y1MyFphg5kzML7BFs2C82",
  "key8": "XsvpjxbhBwgT49JYwMRDWQM5YpsC4xMw1cTp7XhA5xCH4jWJCDCNoXGv3pwyMFksGwErwRsPUVcToo5hLnHA2Vo",
  "key9": "5U5pCeC8ide8rTBdRvZMNSWhmfPXozw573Tzf7q1fVPCrWm4X4eAnX7yj5r5s3KNVAAdANYdT3j6J8VwLyfyvvnw",
  "key10": "2PwvvHQDumpt9vzvoJtG6ja9WhrF8Sv3DEjZihCVxVw9V3DDryz5e9F8nzfkA4x5ekuPc7MncESWsfCz8dyYVPCX",
  "key11": "mLdBVXMBxMjA77XAUnFhMd1aPQHfV4gekgJaBbtgMkn1mKL2HNqcaUkdauYe4t8txibXoKdNoRaVGBSNY9SPBXH",
  "key12": "UiPoKjZ4Z4gLD3PehAf3A1zXp9SW6Vhm3wV1357WbbdDEdrfoTQCs4C9qeGGA65FoSVZZUVSXy1ybYm6vH8Qe5o",
  "key13": "3WYVRATDsrpMG2CVACJvhAvkFXvDEdEUYpQKDr2tSZMbKLivPiFSfkdFEzFPYhsamgWpHWkTq6QW2oUgcAynYJry",
  "key14": "1MyVFKywSQmyEw1Uo5C2Due2z1y5oDoc5dzTbibv555XXSZMgQ9vAtCuDCp9c2KFe9bmYZBUzE89hKQRaCCQ4m3",
  "key15": "47BV9p3TVZRwzfkjz3uW3D1hm17gijtx365WBWsyeZhmESgDi9tobVTR3xxBmDRjvm15QUwqGY6r2mkDuJZQsEzD",
  "key16": "3UAsn71kgBHK7T8S3BbWZGaEnRvPzbvgY7g5j3v89MTiE8XrzrDvpbDQqUjqSgo5coRrhVBYUz4PcM2WALR7Jba8",
  "key17": "5PzVPSwJTWZJadGAbmozKDW2V6jWSxqYRPXay61xrBwyAWikNmVjoAp67U1ghxMn7GQGRtuWZJAu37poPu5SA6P7",
  "key18": "3j7AhztwvwdQPhS45JgkSwKceUYXcMMckAw5u3HbeoiiPGMoZ4q5sEJ79Z89DfTF1cgc9KRh8iWr7gLmTq8WK7PZ",
  "key19": "5SVUTLV4Rw1hin7K57FmFYg8p6xywLKH937ERYsMfJMSBS6n1ykGVPVJvwBm121M1Caz2YvHihUDLvHsUEPQbEfM",
  "key20": "3GoD1XzJzZna6hVkqwFCaiiBDxA7TpdGUUm2BLrZtqHfh4MV6uSUAy6QiYqWdzvUezaJWemycasM8LqbDnGLiQCW",
  "key21": "4YtuvNw8iYk16oUW5K7bTekF1G6K3nPqnKX5neiyDQku5rYnoGtug4x119qkoqErLjXCzq6TGiqbGcWKWPDiZq6V",
  "key22": "2U4T1ZVK3eWMWjJ2Ng2Rub2k1ZES1giSD7dMj68gcCUnuVGSLdDqhy2kJUkvJkiEDdocnw4rJNguQDFDqxVpxXMA",
  "key23": "5ZcAHT7oPDh2vfPQHRYCUrdq66Hi6GgCu7Wyk7NkM6TDcr8q4Mf7i1YeYd6FuhGeb2G3VrwJanuhYAJyEUKMoB9c",
  "key24": "pG2vEq8mAUmUwoTye87eyq3nAUPwEKZMZSjswSXZGKNPeoMRTB1w9QvdcK3Jbvet6qpVqA5nnTwcr5pZW7kj87j",
  "key25": "341EeznaR7UxTYQczQur2WBknAjsfwqCac847KSG2HxSRZF7eW14AVSZqckAmFP6H9YVvZsWYrVdE6QVKBgwAJ24",
  "key26": "4n8Pr3EZXqkcYs49Funi5L5MnUe8VEc45r5KJ6trcqEnNSKECKTqY7JW8N4SqaRHisYTzADjtoAMHPdJuAVwJW8t",
  "key27": "5QJjqySDgXmwgm3cTDg2VxtbQLqsithn3QxY8b6RFtajoHp6k5usgj9jgcckw1av9zwLhJqc58x7axsXH5yvuUyy",
  "key28": "5x6nP72QEozpAJGZ2WkEA3CtqfsFaQce59UY6jPGSYQ3Nm9UdomXPuaF8xXnaui8oU9zUhTYufcGFpuFrTrfDUVu",
  "key29": "5stGLhiBWMw6YpSfmewEFGznGABhehUGkeciHuDaHUdS3e5rPTK1UquWk83TJJCZj4kSQ7E6NEQ6Yeyr4ErBWaFG",
  "key30": "4xTMZrnpNSbWCnWQmyTdxo9ekq56ffoAyPmpFQfc8an6JtUQ5qiBH395Pxq5F4ui7ooQycMadNmpEodCCtVCYqQv",
  "key31": "3FdYMS489VsjFVY19MTejUQ8mhdp9kQ9NHYoAU1icQJU4gDKLzpMFEwk1cdJ248ggaCS6gqYgBiHHHx8H75FHkjR",
  "key32": "5W5Xjz4yZ5c4KrFLQAs3YZ5VsD39CzHJFRTLFbRjUsEe4ThSJvZF38RYHv9SXcirUYaVxJw4gd9hq6MSNE26w5pY"
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
