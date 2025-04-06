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
    "z1hrdoLFKrDZqALEanEtYqze7TXG5n4cLLKYKSm8z66nDkgFuyUthDnWWtEfPC5riNvNuY5zJQRnmzF1VjBcAtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHhvGy2Pj49hxjUejb6hC8yKXU9xJBWQhgtCtMTjC3XtLgBvJB3DL5ZBQXxn7WvGMvW9MZLQWoa1y9xBuFd6PBE",
  "key1": "3vhNV3Y85ZM8HV6uUZiEopwynRB1axTzUb7im4uDpy9tPkJUsHXLsTBbDdtiTmGjmEvZtkJL82wRJLFNqJ1sNj17",
  "key2": "2utD8AeVoBA7ozXr6hfbSyxBLjegPHHGcUW6bLNainJKhYpEBUzQLkeW3yqjt5itSVKEcA28fSN1BoZ6fK1cX1Hg",
  "key3": "5SxuPdj6xicZjKjYqvu85uJzXs4vMqv7uZZVg1PBRmZkZdp371TF8av1Dnvy1AZYgRfYhL4pSkjK1CyPUfPvmp9A",
  "key4": "3JmES4bhJd9n4fJk3sjqwMmmbMhps7YvHjmswGnfCf5PQimecAAFQrdUsZfyGYKckYyaMrioBePfbjwebT7uEPFG",
  "key5": "2ndsrhRN2teXXKtzZ73ckkHymL8TN3kJD3gxaB3HA5HqZ1aJNJRVUJDxa75bkt1PYFZtPKx7DcPduantM3mvdRwV",
  "key6": "GNmM3NzkrPL43xTzHiVaY5KfThc3bSbSgyF8JEofmTx2Jg2bJZ89yuLRDDdGGfzjp4evYLZJHthgJ6zHpuHwGYK",
  "key7": "4pqLKfTrnwGY8AeEiTcJiE9dgD995PvziwD3A2MfRiJYeaUFsWyCfJSXXfssHMheroo54aLju9me8YJ4rKL5M74n",
  "key8": "sBPozL2i1C7aT8QuHQ55cYDCzE7yuw6qNZSB9AEC77XvZw55gzSvxmuz1pcg44giZ9tZe6z8jAYR8NGj6fvzvFf",
  "key9": "5JJRP4mKF3Wumuk8NxvfD2iMcZwUc4KF4sD7jbv3bNXxvcZUp8HQfbUW1mjap6kC14Yu3EaAG61TvjXWorvUr8hn",
  "key10": "wfRru48J8KkaT36QQkmogeoq3TWe4spzsqJ4ToB1TVhnt7pHqpEV3bLBFjzeyg5gAhN2jDokk7PfLigL5qJaAof",
  "key11": "4xnaysvSCQHcLnBWGuRPFQiMCczciDcdPC9YmCbgbBozc7u3XzaE8ZdBBpszWetGVvzhQv9dzQDBwLv48pQR7sfq",
  "key12": "2SJTvbc6H2RnTdDes1ZsndF8Ak6es1kHcgoM4EgKEd43avXLwrwT6NfwK7C1TynebRfSLymbDXpVZfw6SbC4dDwT",
  "key13": "5aCipTriuYk6mpJFjaAybNzXmMWS9CEAJn7KU98rGuWRBft94Un2i9vdeRdLUBbs6Rzf2widBmixPMeWahw5YrhR",
  "key14": "4MFyhnpxqWcUUS9rXBo15MqTe2gAhCHD9iFfwSTdHRVAjMPYTLxkAePML5mMTZnoZVCrfCX8uAptMFktsqCJ3kox",
  "key15": "25LyFcrh818jBKVA4qAGtNZmN2L3UXa9fJDqcCrYiE8b3GPYEfnTE8n8SC2HXYyT8xsGhHyvsb26WpgWVP2FvnmX",
  "key16": "5wEAmriw6sZZp7Mjhw17qM2rdqmVwhLHVz2EPEhXDwyBbXRhjJa9ZSy3UAY3cHT29RRdPe9pNjKjA41q2cVLetog",
  "key17": "63AbKDPRxCGfKU6mXWibQJp5rRTgcE5LNVknK29WLQdzUm7sZ1WvNuufQazx5KrRQsJpXCG26yq9u6pTQ21S9LwJ",
  "key18": "5U6qHFwPafqy5ix6LkZH839f6c2fcnsU8VYbXGwQbdyaJ4zJM8i3bBCB1TzGR8TPAuR4WQTAZ9SX6n4jdxmmDHSQ",
  "key19": "435kj7RYLQ5S5CZzQ93n7BcvrDxd3X7Fg6ucY8cfqQVjW2jWbuLt2nfMz3BPmiGiqRDxfeZoXFDZ29x54nWDEwZ",
  "key20": "4nCJ3fBB1pZD8jQ7tWQQfrtYENPYsDpSB9QdMxXRV7sMJaCymmG13jthN8GEQqoxUL9qwstegRbJeFYjNCGTgAf1",
  "key21": "25A4wbu1Xed4uZNasq8KmpuUUTa465xDbgnH8XP2DspdugghVnPULvfM2uoBHvSAH3cmyHfqc9MdnmCGp539mAB4",
  "key22": "3U2oZYNCeCTJRGtFb5E48L6UsgaCXj2YjLLXPGgcPDvpKF5x2x6BR8FtWYhZswGCddFPVs1TQB3h7ayH8LT5jv4S",
  "key23": "V4LPepgesjDpSKdE2Xs9cMxAJcuf6TYwVutNU26zDveHc1CkMhiw7L9mYGfmU8KRWnWZgMm9WrhH1Zi6cU6gfL5",
  "key24": "4hTDjB8UmWAfmq6g3y6Vs5ihNV5QNPr6XEGYAAB7SiQbfESMBr9L4DD6MM6EDhEbGwiJdjYL96Adg1JeLMhpz9ru",
  "key25": "2SroD1U3ib3pBAhB9LsT5kUmrhJMGLVWRGfHgAo7TrWatywXLMqE1kAt7qggUaoZAPeJ3cTP7x54Gu733jHuiLMs",
  "key26": "4FQ4MnaCWCHeMPr1uCNgE5335dpDnoVYqP8GAo6DRRxBusQssWmXhEB9oR5XgbYLgxvD1ZanS7gVqVM7TqwguCLH",
  "key27": "3KUQ8rDxtzneRvLhpkR44cFEUubN7RYrk8iWGLk1fyunjfRAVnRD3NmKhnM2gWux5t94Xeu9AR8Lb1goEnQzNVLe",
  "key28": "4k9Z1T39ySLb5RqEg7wvB9tcLqLDKQfrX1oAumawzjwwWES6phiDPDbsfsWR44DUJZSs93J3dY2EE6HEf3z8ba7w",
  "key29": "4pAvLMTJaAEw28rL6SuQ5QeJoxsGvYysTTmnGQW622v4rtX1ZcReBFgCGnBaCRaKufxubNc6G5qwGm1xKbxhDh5i",
  "key30": "52boHpcpjskbLqpmCQWnUzRtmxDvyrPuCjbNG4H1rSziFJsYKgLGz6TY3bJQyMTmyzFwTZtD8BvxjZyN2N8Wd3SP",
  "key31": "2NYWxqAVgY4uPCZJ7mTbzdoSfgPkWfVkmjMyVKNHaggiZT6DJQ3BUfcKvwWhJJ3pTBido9VgWrs6qPqumZQdo2sn",
  "key32": "2MX2NKimLrbU73Ep1zMC3ka8obNtsMTdJPzVS34BpQqRkKTQt9zXM1qwNuoYP991uKxSHMP73Yr9NhvK3sunwRUV",
  "key33": "5dSeWGQn7y3NcodRj8SnkhxdwZsFjWYQuAQ95T43k9kuJ9DzmFBjQRxXe9FqBZK199NdnfQLxCdHRA8EYmGCyYic",
  "key34": "9fxmx14ewaSxoveSP2DRqTPXCN7SkbshFF5k61vRRdBCMLzRAFhEAXDgVLaTrn3sCNSMQNsnTfM2JmP4it4WuqT",
  "key35": "3TfZ1VBYtudpkrpT6JkKj5sA5ouTHLrSLtyDCFf2aBvw6rYJ8zNvwX6kZzWxZFhvAuPAB7d8ZjdwQTsYkapap7im",
  "key36": "2J4dujwZhfUNHpKtExrRVjT5MEGvqyhz4NDdZZLyqxinrdZz1pQD3hzEjs97zX2Zf3hszdUvFHuzVNGdQ2r4UnNF",
  "key37": "4bWg22YahXiiomaYd87vSoPfmEFcHutpaURM7n1YnM1bNiFvYvyEP5wedWN9uiqzc8yenEtmoPEtewoHBx6fHPhD",
  "key38": "3FPghokBwpsL7RcuT2LyqpzbmDgGQvYEv4WgrzXiu8KP3TwqrmWSjdphzaRSqyiAPEfYUvmnrroBe18FiH5DJGJV",
  "key39": "yTsh8BsEyCToZNuk2GMSJUrE3iY8PeAgcjjrnpNebKy14nd5m755fevFxkrwH5UU66jVLtsakc72raUe5g2dZYu",
  "key40": "i6tp2yuqBeJthhqoXjxPUifW1dESS3Md4zhwpNK1567iajwdNArDoEkmpT9oBWgydmkV6pJBZK29CrArcpWFHbA",
  "key41": "3q2PF3zR1JKCyNjY3EfQFUM5W3fwkw24tLGriqMGd9UmbVtSMoRuy6pEvUoGnTdemB9VZRhyjWoQAafiHecMNkVK",
  "key42": "3f71VsgEaZzrpAS3nQnPqYqeWYaW4iDJquAWwc6ZfBsfTegDy3jcVB8TLttF6BU7aB2sUHnZsX1NCjmG7HNfL9sX",
  "key43": "3MaoJS2UekxYaNuNjd2rn2oSkuiHrNhshyazC95uKjft23N4S3HyXb3QZUTJV6twEvGSuJg31WNBzxxpbJzzxEiq",
  "key44": "3XGkfJZnbEPprsyQkJPH1fXoJbjveBMXm5eqPgARLnrGJQ75222SzCxE4yaAQExyTBqMfUmQKLx7vZ5vUKCjbXqh",
  "key45": "2o8nvh2erNyD9aD2PQxsCXiuSi2MwwEF4YEbL2AopJTYX8uE2AnnugfLGAabEJMS3xLzdvERf8ELQpP48uZySZ6G",
  "key46": "3F1S42ZtYRBXdesm5v2zoErGq4L7vXqcv3c1C9mjo2gndH9v7R69c72cV19NNEdFxgK6pZKa68cfpYgag7M5oDxr",
  "key47": "3sMR7tcYFNo7QNLaQxcyQCeeZDdVU3JnHf4u9TcX92WcNhS2NUZB8m3JG2obrfxTrmt8nZCC1jBxMKD5N1hgdJyD"
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
