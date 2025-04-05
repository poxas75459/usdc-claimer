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
    "4REc3R2ALXGNESQ6ah6JUrpUmHcJY7oGcLRc75eutTJHDTmDLQhPYeqPAVt5myfKxZNb42cpNyZUXfQAFHeCcrLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wPb4EhiyJjJR6NmrbgecnRKtPiNEL84ERmxh7oRrwWthAGQEupPfuQpzdd1rLRPGJxMPhRvrmA8cuJDXE7KoCuR",
  "key1": "4SU1n1Mee99TGWWrKVb4wYfH1MUHMjem97G4uyc5R68HF6FBYmX5YwThMpo4Cp3NsuVceF1BQNnKsNH1h9d9uNUG",
  "key2": "4gwtwbggCpqfWzwbmXEUTpbBkXqBwsiTQbmcYZRuZgPFRxzwTX1AhLJz2yW78acn8dRWVNrcMvVtZZQMJUx9QNae",
  "key3": "59P4H7sTXsb5AQJJ1QqeCGonECtyu79w1kxEqVCZ6qHZAVfRcX1mS8MJ5nBB7K7DX9XqgEXdEUkyMLTrbRaSbmQ9",
  "key4": "3p23CNg1kjNi9ht1cKo8PV2geG7d6fjQecsG7gq4WU1MsyjUcUdMa53FksydH9EXyHTqdu6ztVbq8BXrEG1ShWT",
  "key5": "4ER75wiXDbwx4SMMTAS4ZpjFCuV6DQS2qQMeDWMPVob9xaJpYnrnP2hCD4Ef3Ut9WKtXtY2gA3xAVE64LzBfkLY1",
  "key6": "3fA68Am9SNXsEZgb6RRcCrPDNu1RzFej2Q4H4q5BNr86LRMj8ZdqjsswWkyhP6ZfcfCSytCHQ28dBC1MPkRgrBLi",
  "key7": "3M7SnWaNgyRYv5tLZA76bvKKRshy4M2PhtBXpUB1W2W45WdCd2V4VZbtsv37wMHikhd5peSmA2iYb29FpZBXroAD",
  "key8": "34at6UQH863meyY1euKkz321uWeaEGfq8ESc2tdZeyQ4SjYnMMzruJv73HSm4p2qvSnAeQdwyNHKY4kBV86XcbjQ",
  "key9": "3TPEdVVWbGm7xTmhQHBnyfxC65nLu49pzGDdx6W5rXM6UMckZHeFBKQSosKxtMKdgvmMsqFsL3sxzcoztae4JGEM",
  "key10": "226w1bDw6XDCDAKhii3arGMLkvaSxuUZ9zoe6MaMbcVZBZNedbiTypjFeFviNFaWfmhzdZfmErmZ44yVniaHvEUb",
  "key11": "4v13sqtyyvHiZVmdEjhaskgcmbezqgNY3PFcdF8BKqofFkD7WF932tiDNrz4P5ayqrJ93MubJPhfSkFeHHAmStV1",
  "key12": "6gULAPPkU8chEYtvjSws9jE3Rcc9Fbv1viyfw9gJkA3fGmsbkH7RtseGCmdmYiswQt8oLMuZRpixc5TFw6qRcrk",
  "key13": "3Bgu2Sdk7YNm1xfrntJ8vPDr28z7D3c6ELKZEtRhKzMZRiEyDkQ7E76BW74nt8br6oipr2kTM7QQha6KxMUVqY9V",
  "key14": "4cTjQX57GpStDEjztRHHASXaivPmJ3SKkQqkzjm7xaUJ6ZKsJRXg9ERNyRhXLJsanpkQnxSYjSTMLxFfNd7crhuT",
  "key15": "4LtwaffqMcGbay6wbBf72SH6xtw1AK2vhE5EuSyGHghA4fYcBym8VzLh9v3j1bC3zJznghzQcbCDKYikdk4uNuZT",
  "key16": "bHTsPcXkz5JccV9wwoAj4adg4ymL9XC1porj22fCAzjoVB2LR6E8QA2JB3ewqGAhSK7wgxAj49Zdb6ByCDnxFjT",
  "key17": "2o9BRqREt83cDMTC8DfMwz5g1CGrEQYWWRFsdospokXKmVRRBx4rtpANrv25DA7cTbjQHk9Gr8pQsa9NaRnSJLzN",
  "key18": "23KF1CbBjTNsc6zeHBpysbQiik8DNN7dBviM6JjUmuVn89hsWRKmNHwDJPBc8kLLXmR5Y7mbia3se8QNvLWaqLVh",
  "key19": "owVU1vnXWBCz59srG2yw5XRan65U1namJer8pw6bLqokFfBiUYvEgrkgmAWMqvbxSqBvmYa8yTj9mSabpyWVMvN",
  "key20": "3k1aRbvRSPzAAjKSRgJvfT1bMRGX8fGHaVadwZdd72hMqCUo23gEp67DY16e5uzenDQ7kZTVXtr9axgLXUDiVh3G",
  "key21": "4UQ9Fhes4X7WQmKw5375CJPYcdEGnPHPfzfci6W3TcNHA3hcU7HnMNQfSs5SsNRMd8wnN4gQznBipg4GJ7UgKwju",
  "key22": "46N2Gg6NGcDNgQ8nvrjZjyvUhnmS38ybmJFhkJtsPrDXiYSwmRnTxGzdzSrDjdW7SVtmWEZpBB59ZKAxzAU9H8od",
  "key23": "5MxbW3yy5hznPFQgDSmUhPF4ZbSDkjX8xD3zKAftESpAgYJ7cpHwRmk1Y7D1XxGe519Xb67DG9GPqhuqioPA7ecH",
  "key24": "51tYo7GfwFnX7Y4tr7HN3MAxvVtfeujEWFajSmsk1uaMDenMpjD7XLvsmLchvQrCchXT3xdCsd97JJG8tDLJTgbQ",
  "key25": "641GnhAGKnmrnYKp3yXBG3aEtWrocDyP5esDUgYixk3uVZCPMKK99w2DQD9eWGkjV6mQkTrznqFT7z82nRFRG6dn",
  "key26": "3MhgjAQ6NXgpCS5FWzqhPpg6WBSpQCQBj7oDD6ZtVnADA3yW7sqDpSSr1WVkzc84XuVUde52pj8xDqxnhRc1qZEZ",
  "key27": "9w26xRTP2FNMLqmu1C277HE82YTE5aA5sTKmWc48aZoXXc9Y3S2hTs5BGKR3ixjKmfTPzNRBzPoTeqWNm8CYjZm",
  "key28": "iwD2DYTVwiLA15BKC3ZRZRyBDX3eSbznPPsTTUGsgQLnMYgD2rsx2Es5zVA7JLh6Snz9XTHP8oHmgPWKNncM6cz",
  "key29": "2DpsgxwWkNg2SJNQaoXMAWdXpFECBgu42QcZdSbzVzNvAhpyUovyh6d4YCdUw3VKLB1zLHp1pcrXRq9p9tz6L5vs",
  "key30": "4XFUH2H6aJ1rnZUFafmUYY9SXPAY9pPEm4g7NLfdHzmRB8h797HQJsg9C5xWXQem6Q71i6zYBDJZgEaiD1FTMKps",
  "key31": "2bhGPaFfrNUwpwScKTRFXfo58jXpUjWdkYTk9vCTeRy1KeXf1WKV2mrkYkaU5QF57qHnfoL1km3pZjvQZd4ckC6r",
  "key32": "2RJnaU5tcFhtU24g3RtcyC8D4jAsecMzsAz4aME7kG1uCCXXqqzPsXozaRJcdE5uFGr67wR4hQsT9WdaM5r7A9wu",
  "key33": "4q691Kur9XJe2qaUSXvFn5GibP2YohFDeNyDeaRk88c1jHwSQ9ECpkyC3JV1MkXjh1L6RXYdZdmFyDppBGBnRJx2",
  "key34": "y5WKJ4gWZUN9iY5qY7hnriR1dWhstzu1s8RVHfhFdjxp2Qcb3GQntcZXXWmgRaygupdjxfZc5PbJzBzvMQStqF2",
  "key35": "5dpZBNsDenkwrLzC7WYehU4tL5gDKTuBm5gzrfoa1CdkmJko8oQD14BNpprnir8VKkpnZK4XJWCWbMqdpjKgNXrx",
  "key36": "23B1RcZzKRXn4ZsQM72U7Mc9r8nCgMxECiP5Pdn1LA9H3VSt6MSuhVWq6hxUmeerWm9jTGLDkd8XTy2b7Yo2KteJ",
  "key37": "2gkbV5L8Jc7i21X4pDKJnJNcBWSAng7XdW86rPwqxbBbatU2PyBEDy4L4J6RGMboBU7q7Vazbm2sp6eVVQKWwa8Z",
  "key38": "4KgZN98NL2kuBMk9fnDRSUZkAstCYgQkk14xPrRKniYvmtQB7MVGdTJwau6HG2xRC4iCcTiCuxvZXX5oP35FnWus",
  "key39": "5no9qTbKff19WLoVaXArW75Yq3nfEtYMAWNcwqwPEejqCqxKqaauouCMhXwCEHVPNDPqAAGLKZbFX1bugWNk67MA",
  "key40": "3eQqYiQasNyS4zyFaeBSFApKByfzq7nRmDkBc4vzYuWztKp3ggRigsAqCJUwJFHSCpMLMpoe8WwQMYB7nXgHQshG",
  "key41": "47R2DxNW57yNtBkayuaSC5g3bhJKXK4YDyTAcdBw5NMYumiqL3ENY2FtLDqs6z1niceoxrbTT8ZYgq5Nz5cvNRnX",
  "key42": "354SVhog978jVceXJLbsT54WDHVqstP1vux7qgmGBfJ9fNaJAWHBtHyYiV8AkcWLTBvkKnhXsKo8cuUmda9oF7hV",
  "key43": "EKipfk1E6DdCMF9VLrBWNP3GrHpJ6mR5A2vmEgTuXNUAzqzWoh6JPCQPF92YqZGuJgVRyZXEdhzukQMR7yPF22U",
  "key44": "hiniwyD3ZkxiazJeGKXNe5RLBUKkGUkYhjik6Fd3QxDWTyvrG62ggwP1sGtd6EvRiNaEKhqnBjE7fjjQYsTGhKx",
  "key45": "2yf1X7i5mihUwjvEXic7k9iBgAdqsb3mBjH7yNmfsf9fRUZSV4Xp3w22pB53c6uao21SqRbsCvQLUhPAo5tcgH8s"
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
