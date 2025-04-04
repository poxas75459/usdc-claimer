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
    "3i8rcgSeMkLt2241WwdM8qBKDXsgKoHdCxjYkkdmv5hmS6NUjm5XL3ZN9mCksoX61ntDn55qQF7K3wpPad38gXsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dnTnVniwFps2dMZSgj2KNJ2yt8ZZtdJDZFBK35XZBajUXweF6cdETJzeS619FYLGQ61JZhwf4tMnrv792RzboZM",
  "key1": "5mNaey8CYzExt9GZaw2yNc3EPfFkLJYQy8k6ne4jWi1gXXabDrsT7K17fBE9Ycs4e8gNCYyc87YTesVJtJfTgb58",
  "key2": "2fxCkH9DNkcisEUMJVh5ZidexWGBgtPthz4EJTRdLVGcdxB15ifAcKj938GALvEXNuHYNd46SWfztVaMM25rRGkT",
  "key3": "5nYqqC6FQ8GRGQTQ4wxLDos9fhRopYsRwvDVhREZSUxm9V3dNQ43zPR1wjefVqGUooExAh1y8e5VJ6t32WTAGifs",
  "key4": "4wCm6bsqjReRgaGKFJ2fRKCD6ENcuyEamatbLMFwNW1dpnAUCd5WSr9X1UhXn5Yzw9egRqzAssUdj8EUeppToUdM",
  "key5": "4u6kSch4p23EBSumHHGh6bWHnt4p78jFbfz7rA8vuoP5yMPH4xxnNHL5FT7Wd1Y1voW6NRadXCDUfpySJZRxUZp",
  "key6": "dHk9zD6Fq9ZZmbM8Szguy27j3gmAu7NyXFkychEwiVumC4AfU8Rc7pzsy8dAndKsVknsQazvLPtzG2TYFQQDGGP",
  "key7": "3GYMyy6RerVvuF6qe8fsg7peRnBjWLugcfuodqtDjpp3V6Xq8AQC3L54Ktq72aC8f6qcPoYGmxgj7eBUEhZUY8t5",
  "key8": "4F4RDXxpd3n74qFX7YsczKycjiDoSisRpVMd4UpBZfy8LuDDCw6vyoHRN99QPprSpT5PFMZpFtpPBKmGPxyTojdm",
  "key9": "4r7oJYQpWmwKCgSXaayED3L6pFkUa3o14w3yELk7nQE8f243vLqLXW8mzxPuerjX1yJkYafUgKL3mZohvfniHauA",
  "key10": "53dXnXKVTHMn6uXks2SoMXyP8uorEtM3y12GJ4yTm2xutWXokesBhNRriaknrS3hKCrUDYgMvpUDEXc7WdDfn2Jr",
  "key11": "52Z2VR7xebqvFy5sN3GPFq5Hy3fY4EcwkD5CyncPZ9ZdXUGt6EJEQYKZw3LMUkApXbq7vYozKazo5XXiArtaBKnv",
  "key12": "5JYvPei6H6ooDYrENHbKHwLRohV1FGvUJnEHASMvBfWBFVQtEGpkREBDHQV5Fu555Fo4ZZiDTwKLHEdhvnWTPJX5",
  "key13": "44Cit9FikYWTxx27sCuj5hNW1XNLsphP4z1KKbKebcwK5np2qLiXgGACHjQxm4Z1gfUvpJthXcH4pqm24fgatTp",
  "key14": "31VWQr9p8uVPHnq8hU6EH1fRceX3R5F1bxHicDwKFLs6QTmMhCQ2gz6LNBeGKxVfAj6JYvC2ZgSrW9L5SNrtHuCb",
  "key15": "3c5nhG1JNht8zer4vfNi99toHptcr1nSiHbHmvqguFLYrW78mfScCjKxZYmHk7KV9SE7bv9DQGscBTNM8UK3QdRm",
  "key16": "5z7bMwfVxVrtnYcfD2DXtXdmENgXWwSQR8H1ABRRoBY3fFETXwKQDGrmMv4shCbF5KCmGP1rMtTawf8HfFcjBiFi",
  "key17": "5MXLG8Ltx2UR72dnXe2hA8LwV66kMV7Sf2obRXJjvkAYcysxDNvfRo5n7ATKrdsSfP1iMM78hJJttz5YJKDYnzQp",
  "key18": "5YFARKA5F9WxiCDWk7Fi29xyxvBjXjapFFopbuPA6Tskx2gBzY7wSJFcs7cW3qkvDkPcwR5mnX33gcG63xroUBaY",
  "key19": "21Uz7hyAMZrBYGh5h55P4oGZ13H5BtVjikhEvW76jrJL8xEDBh3xzWGT4gPkCSaFpq8xwnbD9PTaExHmeUPLgqhs",
  "key20": "KJni4Mr4XDASxmMqazQUgeyFu6WbzfkNz4d4MbvyGBgAe74T9gc69M3ffBQLx6pkZSZY8Hgr1aPcxMZTZAgtqNh",
  "key21": "5mF5543CwMGG6MX6bRuUD4CuitpQgNTeUxTf3N3euuTpYdVXFgWgmMKyBKJWinDCxKGKKgj3sxFPeviS1aH3AXkX",
  "key22": "4J3u9t5GH2Ztde6gAWE65rrspTHowjFDWabmz1AMhQRAf5PBXn21kR5aEtjJvwCDCWWM9Z3d4XEeNHnuHzoo7r6W",
  "key23": "32doX3SegeqDKY9GT8nBzUAekivy2TEY3K9gztK4gnBiMHXLjEy2ixo7JdKNaq2xUHfEJfWPDFzscdBPF26J7gtW",
  "key24": "4vybE7ZWc6cpBwo9pNhrBBEPMQXfoZ69QW7XhTrqiXk5FMdo1QMpDEQh7tjkB6RNJzuSqQBVJAmxhBdJnLwiHSVT",
  "key25": "2Qu1qZY3mxc1NbL5Jy5wyWqC6yqmnYvHLx6KXuwakJ7SewDxthhMA7x7gkKorpwT7u6GLEmJLNqVRpEZMjcMt8QD",
  "key26": "5DMvgrjnPiG6hi7K7t7YJetPrvpB5DzJ3b9gMAPgqPbwpRKRCJLpk3T316ZPooud5py3JkxfBdZjkjqbukrHmEuB",
  "key27": "5ikvrW4zJ8uuopWPxmaahRuhqs4m8mXYcs5RSBfkEfY8946CZ5fu2Pevu9UoudNAjwwPR9t1tjgr87qVymbvWVTZ",
  "key28": "5fz4umozXaySBzwuWD6mkHRe5WmJmr98dkbqnbfcePAjobV1FUBWVq7GYMxfGRmR2oiBbaDAcsZ6D6LxdeYczzPN",
  "key29": "1F3owosvba7k3fLmQ51MTmK6JcZE6PHZbn5PH6h79rqGyi74zq2tLpv4jm65aVKmg6GQ1qJ78jSQ3HcCduHhWiA",
  "key30": "yyu9LCzD3s6RhZxshrtEGjGocXD74AegFvSNB2nK24MW1tnwGfs4UQcMJP8tgDRzFMViaUPnqSQ78jaSfMFB8Z4",
  "key31": "q18cCBmRhrNcN8gokoi1zoLxPFWTqq3gwtqsuKyW6HqBsX5u52Uxvgt3cmP6XLf4ibxvv75v5tU4MFNU8Mgy6qx",
  "key32": "3fYBR2V8WUEoCrovP2Su8zbw1JaoRUpJe8B9EZ5f1jd27Qy56tDaX83jNcieKZfk3sSivFXLMzkttyuMMEkkJJHR",
  "key33": "3VcT3KZg23N14dz4ut1ijPqttMytiCf3rHP1oCgirPkezzcTrdVdE9KQ21LL2dxxqmpDXeNVgX22gc7JWKiFBnEc",
  "key34": "3QtU7gFdP93Tidx5A5QSBEHMKugFgMytpjFdxi5W2NngabKFWMumhemJmEaKZWxoJ3X6XsnGKgoz1Y1eBWGWjxPw",
  "key35": "5iBxFEbnddtTJGM2rLUGh7qXnskQ4BniWawMJN7w6S87dLAdfBQ3GnEU2W3AP9a9TtpMFvtt58qHaPUgPWinn18n",
  "key36": "5PezHiZ5R8dhnnz7otiTHwHWnddszFPbz7tKVWzdqiVN4gY3Ge7MBGNpbPdXdzoAev2bF2RSneuetKVhsU4KPfrj",
  "key37": "5Ua9F2r32ksT4FHQoVnqxQ65Y6Vup91nM5mMycW48gKJm8bJx7wVDeVd1MPvKNhXieBWxQZBoFRx2Tf2BvZcDAkf",
  "key38": "39cCguMVVRVUsJ9YPF4hnf8AXEfiYSpZAjSs6EbGnrKQNerKxhaqiZpEQwHf7BMw4rKXEjGLoCf8yuNesZsDKWhf"
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
