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
    "v9a1Dt4W84e7KeLn7gd5MApeKxAbuYDMnaUwxiu4iwtfctTnKvzyPMDPZn2fBdhfAXK36pk5es6iYsJVGLVhZ4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EHrEFLynsWFxoBnofkZ8PKMeftHkrmrgN1jRD2CKAAqdobcJ4CoTLahNTKFEaxmtAPBDogeaADCxskL4eiBoP9M",
  "key1": "5oo4vMrdpUv8NDPdUvK4k5x41mnNGNSWd56xWg9sWBpRnGP2xkW96UdSnafEEPV3CrVpPXoMBueVsYfzFGZ33cZr",
  "key2": "3A9SSTjjscgZ4vtv9RXjZHn6WMZB9da7F2X9QYvnMkuVUQ5nmVrY9xUuWAmiuT8NsqSzUhNaysfPQ7SEE8hHktNe",
  "key3": "LD7Q1ouisGtDkBdBbmzR4RDAhPT6F3xLXKyDAugntAwnXmunLdy1P8zjAD6UWqmB1wypbQ1noUBBagjiC9uJuMC",
  "key4": "63aRrW4j2fkfkyN8QCqxuGFrxh3q7XAHnSEtayeowfdkykBk5c2VS2fCB6wqv45MgsPwsJCrBEHaMTZud1xTgjqr",
  "key5": "rCdwm1kxMKdHBJrGJXgViDgcYfKNxKZ13spZiyQ7Pjnhgb8yyaAPiEiqA1eeRDndF6jewDpZNK9YUA3You3JevD",
  "key6": "2GDTmfFSpGjF9G8rqZbahZfUWudWy98VGcx1gc46sscEbCdJcsThNhgHQoq2qx1Vq4ihkk2MCHiBcoN8udwdiShn",
  "key7": "4Uu2izd7qyT1sDorEbdG7zbnvdzDgVoUM3kGVzzJYAiLarFv1Pzv6kqGEQyapBkN8j42yrc5pJ6HmizfTGaYNKoL",
  "key8": "4aMsS2GdwPtVfsQ8ho7xduzubG6PsjR9b6qHed5KyPg1VyWUyBf7pptFvcxfUFfr7nmMzU7BzjTPVXS4ZCupjNBC",
  "key9": "4WeT4opc2LxSeMAWoGyo5BPudgEEhHmnU6vMyZWpyVpthVZxPyD2ZEtuqHNQqQuHCqCAwcFTuAiFXKBUW97co62t",
  "key10": "2cNSH6eQbZFewxzQyTngnbkwbVsTv1zgE2bnXsyofFj82sV63SDt1rn4fX86H7VxQ7AW4EsRokkiHtv9msiK9na3",
  "key11": "2iW5k9gfhMLPjyMsbymqAiBtVEnQey8hHLiCDY6hLZBzBRb8cvKuMgAQMPqyzjNiHoWENT9GGv4pCGJNfVdxMN6x",
  "key12": "x7HZ8RSvpntqnufFTENQ7QN5PFx6D32txYv34R5nLmX1bCa6BGsoLFNoVtgFMBNgV9jficvpPhzyY61G7H9zze2",
  "key13": "5wfSeLfg8yq6AdgqPNdZbdF3TvGBwJ9ZTwZi8LmVURWnKPLxcTgGJKjpHddSNNX6eytjbq2EDbWuJvRrwb8N7akD",
  "key14": "4a7h6kTg3q95M7hCXkfqVHcaz788nsh5Du9Qfn8oRBrocZCWCBwxv78p8Fdmu5QqBRekVqnZ4aSVLAJCD3ieEVzK",
  "key15": "b54FvMZgQY1Y26jf3RqKUc6mohQy91Rw7Xcmh2fk4414Fyx3HMAK5B3oJ8uyf5jSZqW22jTF3K8ykfbscyn2T8s",
  "key16": "2scXqWNvfp4wC9rm7h7YfxRBDt6s2XUjmNVzhPbr4QRqJk7Yko4k9f2rqC9vjeBFmBkNbqryz3FVqexkUofvvtb8",
  "key17": "2HRcF6jtzBK589RNzcf4Wwc8BpHh3QZgniJFQZzBHZiowP94C6b1JtgF1kfJbmFGo5BBRc2G2t3rUjtfJ7QsVrV",
  "key18": "3jhLayZZ5bR6BRDicZ4EAdHmgLuYNrAL1WPHzmAKLVDXbQtPVqpQDaTRiSWwrW8SrMYqh6W4mPnKEYVrEkW2yzVs",
  "key19": "4oeWXALWKZVaNJkovndhWDXC37QCq5NqRHNkbsnJSLZYuZzn6CLt65B8vDjmFtoko1DhAP57uzXRK7BsjG9E9AR2",
  "key20": "3e8ixj2TJ3EMJjmu5QX6VhZHPaqqX7hYR8AVLaBqLWqdQ1T2W5bP9YMmHS4x5SXWYgG6e2cczTmnjQHoTN4FMukw",
  "key21": "3QFYTdM1CZmVmTqaPPUnw576kHwda2oy5vpbRUGMBuxmL36ir7pobruUyqJMAGhkqG7xCvD7oWykMQ7HsX8zpyow",
  "key22": "4MgBEQSvrTkgAbMdDapYdvgq5j3jVhuXtCks5xtju8ErQKFxwboy1whdLBMvowEt35jWCgwVaswMGkiPxSzcYMQ4",
  "key23": "4VBidg9aU84q9nBkekMKeRGqK6vEmzY1NZBxfhxwFhVeXAsGpiffNhJrB5KrE7Ffi5mMfang9HkzNmC5r16Cksqt",
  "key24": "4jZz9tys8gidWG5gtC9kAkygEoZDPvXcjLfLQM6BK7AB3tF5Eo87wHT6z6S8Xj5D717rSRNq8Lbf98wnXPPJv4Hf",
  "key25": "5tkPgbrEpV6eHrvKXZ8GgS6t1dkMAWKVsVwYeUheNXqS9bS5s6QbCaBMe1ubErmW2dL9g93uokGxXX88YY9BwkZd",
  "key26": "27Yp64nRX4qAx5PTN1StxD8wSzUovh8UUCFxYkwDRpV37SWu8nqi5UpEc6HewPJQxwrGsVwb7z37ww5BJJCFpp9b",
  "key27": "2Rzdt2eKA5AsfQPWqF2auUztTFHKzLRTiy5dtkGzVAW8BvjwBGUYxsvp4bq7MdtvgdkaYYDL6yX5yDfEa4JdYqgr",
  "key28": "7YETFVb5iZisaFspponLfARSy2w32qtvntQPfoNDHZjKTkYTChoJfwsw9PhyiFcPQcVhZB1pab3qR3r7WJsAoK9",
  "key29": "JLxBFWEMtx4YfKB36Zg68SWdWoPAoNdXPEz9S3EBSE7wne8FX5iV4CNYmfB2Nygpbx1jMr6jNo1tgifrtDnEZU8",
  "key30": "52R13FX9Xz8jXaQyE9vSamtbe262CDXrTAnXfQGenUQ7jccD2UXeujvWTEC6Y2PDQuJEmxQNvJpve679nXYqCMUX",
  "key31": "wFfUevD2oHcfGLfpnSxFJUMgTjQUBhEhJk2MDMkiFi4s3N6t1J6CvG3ig1B5ZzacJLzbqfgCy4sHmveuu8bpnnj",
  "key32": "2R1Z3fhwzEox3wTZZ6QSkFYcSfQjUzx6XZ8znF52k2K8MpQwEsEmaic1U19z7qD9ftTj2sx67NKKHhTrg6oqQgcW",
  "key33": "4FnTaLZaBTnYy14hgSUah8vWd2R1sgfZfaDjCbwY9pFZ8QdKA9kaXhJR86JpHoQn216C7XoSAH2uP1AppM83CYmR",
  "key34": "5pswQ43Nk3z4zEiuMNmyEkLChJjhcftxXA1e1N24VQnkM285QG58qkKNcWRupu6AZK8vi1MXmn3ES4JsmXVx6qib",
  "key35": "3AJrR2LXxwNKD89epQBeFNrnJgyToGCK21PLFtphbnxw9pGmQgSevdgBxfwPLA959RRBhsKd1hPyBNpGSzsvgDy4",
  "key36": "7MtAjcv2RfvgNpy42ukaCf9mSoYR9rWknA59yfEuZFB1cR9LDFbmFJnXLGP5ahsHeFDvngjXZPuAh6cTQBcTEon",
  "key37": "5JH9sCrA1EDegfj1jDruVt53jj9QgnqVFZncEJAzUV38Kw39jqfriYcRZduvGkowACtkkCA3RhoUq8atyHkP1zgU",
  "key38": "zGKHUQspVM7NQdxAtvFZVaZV4mvjZpRNaiwnZzyoNPS4HMrqrE7QTXgurYTAcQS7cGwEZ4w6ReStAGQGgka6CXC",
  "key39": "4fsGQo3MNVcZTsVCfZxnfkwAy8Fx68RHJEUbsxieHrgBgPtTfSifRvUbWA2GiMs9fw83se7K1d6w1jtotKCqVZDk",
  "key40": "2emzttHo5XyXuNh7ACPZsEkNYirVFpyEb4Hnz3YHov1s8T8Fy1prsm3GLzqYx6GrCVZFqfHFAxUG5dxsMw3EYsRc",
  "key41": "nJQLPKJ1egXNnCvf9D6nJDQFhJHAxhBgkSXmwz3mnXrtgMjdBABJx9EczCu29f4u1ohdZHH9a15V3EyMbhcryDR",
  "key42": "22DrANaa71yJH5suVYfqtxTCqzzhydmCwUimHeX4safPt2RSLa1hrDRB2Bi1KCDAYyXg2C9UcDZq9AwJvG96UJPP"
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
