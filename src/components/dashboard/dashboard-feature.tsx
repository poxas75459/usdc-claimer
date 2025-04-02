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
    "45FakY2cgRVm4qcVU6ndLFR3UnFZbM1pqnkk43rnBw3WEmEXuX2eqKJAFePg1TERymiu7TQPnd5c69raYmLzWNiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QUUBLoKzu8BQ4vi4vyMTC3cTai7G1R4tMDtotRVM36bWHC5xNkvzXcTs28Qobh8JvJJQVzzmefNyp2466WpqM3H",
  "key1": "2SKHPxpRZ7CE5JFw2BYTeixp1tHtZV2TCAtwYpzJcXJLfZ73Ld2ndwyUsXGLg9KHXo8UVyGfAWEVhv1tFxwdHkgQ",
  "key2": "zS11Jtkr5o1pUt1Xk5TD1n4LbXeA3VUymmhi7B4dVKjc2nJFevL9z781iH2991w7cEy4XEREcwGucoBucfNU2tK",
  "key3": "2pagvYzmyt5BrmaQHDSL3gf6avfkyZB464dp9iKFfbqDdNRLvhBVaGwGf6RRZNf2MFev1zRw6tGAZEmjfngoXAZB",
  "key4": "3XBZajgAWkxZ3v5YeuSUav3ewKfLnWLbsvjczuMMhEbE3PxGS738mb44vCgoWU6G9y33SoGPhbZkrb3e9U9BkFBH",
  "key5": "43Gn59TYggLjvVvJgLUfTXUDeCefPdNbSee9UEprWb3X9YThn1Jpkkhc2hM11TVvJqkuFENtwxrAhK5RKekCbPwU",
  "key6": "sM36GEe44uaRAc4ySoRMZzxcoPKRJuT9PnyRJysKumBbiQ37YNUZBRLLLsaniwb8Nv21x287dn4CEMM7373YqyN",
  "key7": "4YgNvZUoisELpeuFq4wNzyzM8UiujvRU14PVeVcQyjXimc7a6eCwgWb2NfzUdpoBv4huRv29GY84bTr4g6MCbuqx",
  "key8": "b4L5Zpznz9XNopkm9q1Zsa1giXBaK4r8jzLX4xssKcWgSv8Vnw8epm4kQPXnqv25x5cwNaKY3JB5b54Tccan8ho",
  "key9": "2V24MdpimU2KUUhdu8YJynMap2VKoPvBDE1Qk71YKMQYFAihBbDK6kap6UB2KngxkUtkBBqADtLdBG5c6edbyg36",
  "key10": "37M2o9BZzzV7tsUJyjJw968nn5Cc1iKnaZpKHvAkR1wdm5kMw8JTVMwjkig38FEvpmJgvPBM7Xy5JLFKRGbnbjSE",
  "key11": "5PKM96Jw3G6ui3stmnqo8QMihWh8AbRu73XvZ5aPxQ9EcGLZViixrWHoJBCB5XkEUdiQNw1jXDzMje2wda9hTapj",
  "key12": "228Pm39Wrgr3BKKdBgegzZZcqHiWSVcWMAvAbeddNRsg49fgixihf94QeDXw7y8wQUzViSTTkxc2EXgYZahcDGTZ",
  "key13": "5umkEYb3zv6kkthkBU232413GnkJZ9yqocs5N1UBxX9yBegqSkywohV6F9zFe5M9r9M3qm2XgYPpViiaPMmJoGYD",
  "key14": "4GuGkgPwqKKcN7g516keCy1NYYMPptKq542xywhDJjoy8y9WqmZvSYYPZJtVbRriGdsAHkM8JBPvuRXMYRBb9GZg",
  "key15": "5wrcAeASYQrark1GUfCrjzUEAPh2uEi3mF7mgX4LauoaJT6moe3ewn7wBLCUtVVh7JyHgRMyahiqKzTjxJSZ2WfL",
  "key16": "59TXfkM8rZ1ppEN7HAZVuZ4NzfmRBEGJY4oPUL7BT7KKrZkX5D3burkmS3zsRSrYJAmaaUvs4jaUmBAoYbmZ6JES",
  "key17": "aQZZ1C8mZPPVS2F2ex1rbxNqqhVFbBkqNQ8MAZ28jxQ2UZw5S84AgxjaFUMz2RRaG9NDrqJzUJoGms6uqZAbCFA",
  "key18": "4GqEZvzbMdPuoRS5SuAxuX6WCfXPES1JctGSqaqWBoJAf92Yw6VhCBTiCE7s5kgT1a8UQJCcBR67TbCGh4wF8iFN",
  "key19": "5P3TJFhUo1nJxay8zcss4V5Mg1PrBaabQGibM3J4PXx2HDPs8x6Z6EQJvvmhuFExKdAzkJpbnLG6Y6G33JFd68Fe",
  "key20": "LvcqmhNFXg6SsT9cMgdv21wK2cbH9jpcTn1DA1a9bcxLFT7FhhbQVZnyDUZNHPYd4HN1gWidNyRprGXtzPeWMd8",
  "key21": "523wCm6CTya5kHtUeXzZYFcYNgAuBqNekuSkRWPYngVG5UAva8PYfq9gwWc3uqd7uzfyuc3jAv47zj4keztrbqJY",
  "key22": "4XMjZasxQ2dsoS2R1w9SyaALy4oXBsNM68WN8vHRhFLcmoMchrzZzKu1QhefU4WNrZBr83FrmYmdTcQzi9uykD8m",
  "key23": "2yrSSn3A5sYaZDYc5eiRxwVunJo7j9SNVcukX5cwU4ShVhwJgGunKLNAi8RzFnsXC9zpMLCaYqDNkc6jffvjbx8p",
  "key24": "4YeGJkz56pFJh5QfGfpoZZXZg5K6joLkPDWXf8YBBLaVAug4esSoLunAuYqkP44zPxuoEFxj8NjC82h9cqzP1weL",
  "key25": "4yZXehtWaYVUwzzHxayXsaBgok1hETEMWsHt5S8z37E9CWYwNX9Gw9xDwr48SV5BVAAadjrzsMqVhiD6z3wM8uCb",
  "key26": "61rYS3gKzfnG82pTEErWMqVoSD25pncWbGXaabSxB7sBE2SNWHc8aM1ZgRcGuVjHBjQqjuHcYExHLshz5ZAykak8",
  "key27": "3NikdWTmnGYb7gx6beTb4w3Ty6buXTu48VgcVF15Ea3vKNSCAtsRC1z1P3cRjuC2zNrVnGMXvC8mun2euDfcp456",
  "key28": "7J7dhQn5p9Hxwb6dTKRe21BfbaAoDVvdzxcu8hbqmNswxzyj5U7uVEFkHom9GcxkygmyfAw5ZxSWfTr86PY5BHV",
  "key29": "2LChScXycHDXaqztVzAqQ7BR7bQxXpf13zUJxwA27bdcQS281SWd4X3wR3XMNGZpEDsMddMMeDPuUhoCrACw1DqW"
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
