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
    "2xoreyvWN1GJno9AacSo3R6hq6w8nJ7enafAgFb62u8r24PZh1SjWFr6nxLaxx61Ss66qkMXC1F1uNuKnQbewRNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xvw1w5truoGEC1wMEqTRkfPtP259MVKo9d615NHpppY6v4Ai2mdpzKuQzMxPHi1MpRHbuKENfmYRxrtGXLqhQwd",
  "key1": "24GS8brXkUyWzzi5KGqsj5K2zAiWhiq6GRebW38GxiGhWBMsUaJScTZJnCamj6DmBvSGPCtZ4gioFWLuBAqHi8vj",
  "key2": "5Vo4LktrR76R3jx5esUVEyVxTtvDYfExEkun3ZsJYapf8F1VYsfE7JBrm5s3BvKX5TCed4KZ4frNSU59nmQ7twAa",
  "key3": "4Yb6E7E5FJ2nAwGrQB1QAvgivdAUn8pVEMT3qCWeecJv3ewhXsXeXMXj4SG7cUAaQwKRTSCJqM99SbJzy99XRiS2",
  "key4": "4qhmDTqKAhesMPmEcLM51nqcPvC3xACwkVCxiDdV1HsxDN1HxGeUwY76HVGYKh2rPdwX7h3DhSaVvC2h957LCigD",
  "key5": "5jvpksv4Ps4MH1egewuTjfX6jbxJikQcLTtwe4u8pDPXrgDZQbcMrhgDU7XTs2PQEnQ3r5ZpNikWC5AaaHjREAKs",
  "key6": "4gu3kBiALYqf3oYwTQEQCDfc231UwwLd51tKy1mSYL8sMCVgXrraUo6fsv4Nr1SenDhjGMesSX9f8Aj51vemNmgy",
  "key7": "4Lp1HmtMppRtkn9NsAdCXkEjrpcXcukVZTrGZqs4UoBeKuhoAkaEQc2x1U544anDGA1W8DDjo4569VRwLt1mDeHW",
  "key8": "5HARMvMeJFH4TPFy85H1Cy8SDdM9FZUmRJJ8KNcP4twr3MCrHnQYvQU27w7NPNPrrMEcUiBHGHJ3Du8E92PzUX1b",
  "key9": "3r59LqE2x71Tui2Xbo4zUTT5jL1fqCcmUuyBJBSTTWfG7Q1eKd6YEFMW8gtf7iRkfMj5jdetGJ4tSWsfyU5BiHdx",
  "key10": "34uWQZYCBYGg4dKvuxkV4aXT4Y4HDW1XgJKDNRqMriuC57GYT9vv1LmW3ehxeXE6xrtcYqapVSzy5h7cC5RDbWAp",
  "key11": "4aEHnS4nSZ2qhR73tWG9ZUAYRRBwxKmdvYpXeVY3zjupFav5Nu3rYn4q1u58yJktSou4CXXKeoL9JPgMGzdA864y",
  "key12": "5rwohdGA2jktii9R1JGRrs69ytSUgaFeyVHVQaRHYKxv7UZnR5BJCKaGzx9nuowSooTsdNMX7CzUfEjejfFMH1GU",
  "key13": "29bV4SDvvPwFDs5wS1hajR8Gr8g1bsyUkUsxarb8KvBNLWf2FnceW1vX3VDZJFNAGBbbHKhmETCtrGwrg8Hg2k3r",
  "key14": "3idq1ruT1zHz8nqE8b2wDY1e7mmhDyQ6EhpFkMPyisVe99aqqGbVxig5fVGnvK1WP1RyCjZqGEAEEZQ6A1Hsj9qS",
  "key15": "2EAL1oYLW4ZXdVMUdvEEVpTgs2obUWFWeqj6rTpJmk3PeQrw6Hg9pyecW2CUV8FND4D12QgnbVsPQ7u1Wxxz8k8p",
  "key16": "9d9kpoHKQWuW8mEe8nSWT429Nfno9V4LmuZCZWrnFTuCr4JZSFRm7PM2onugGaxEgHby3pqbGTRNXAswmLnFpUD",
  "key17": "2WYEEJPt2fmsJ9He2Ur7YAG2cShKLYt4ENEkmTYZKcF3sk4CMm1uC9XL4t4VSzY63xKSrL7jwocEjXMEJh36hQC7",
  "key18": "5HGLB5ZKiouRhCGQY2N9TAjavXTvwJLHWPpihFBHHXvsbKa6UUYshVXvie7xroevk5CHXL3SLb9WLYmJuVL3eUoq",
  "key19": "2aSLqwgYdPDo4syV4RC5hnJm9dJq7bLrs5nd9X1YCaVwFxgSJFUcCbndegv7kkBkY2tSEke1CQkXsV1A3gFh4z6z",
  "key20": "4FuB2bQL8Ca95reck3kQqJFK3AqRmLUHRpnsoaQgfczXrUACRY2fGRhV4oCEaUsXr27xHaoLiyJS5eg4iBqZLjEN",
  "key21": "ynUerLVL4HiZecYsa5Hi4HchqbXuXnCvHDihQUcnXQCWdaUdEJ27RwtF5YT54PZNhDe5j4v8zX6HGJGnp4PDUU3",
  "key22": "2tR4NJQgHu8uVawQdLtXtr32W2G7GGGLkjku1dnft7rqT3wFX2M9YxpojgV28UhuTATbn49cm8nu8o89rVJa7J7y",
  "key23": "3bf68h5gYAEmwNTFo3NtLtkG8MTbTsafNVQ6K1gnGrrqXNyKdWAxDu5yKYZyha7hRu4f56qzvmKo9zPhqrx1ihyD",
  "key24": "5irPHCzb5LdjF2gXLuiUDzNJMsiysXX7zco9XnKie1Dh7Yp3og77TGWKVRtuhZpLgYgqD5uwhSHcnABwjCZR5Rqj",
  "key25": "4gsmVrkebnsqPFWXcdZcLwxNwT5Rm1uk2LQUMTLNAm5aGFZ22Q5bcyDAwtvSUVYycMxcVbaTZayDAxvxqHzDiDVp",
  "key26": "i8QogoVnCqfnoR9mYHtoYu4tJ8WRvn21v2PkCEPHbsPmhQoRfTobt4AhCnE4psXaFTXox3J2YfdcLYbJ46DAh7v",
  "key27": "5oP5jwf2aukztX8s7ysCukb5wy93enJKEmsmftbfgH16vMqFEottRRAvVfjgEFQ7FgZZ4ddGqQvZEubSEiZ2MamY",
  "key28": "498dCS1oRpMbxUyz11A8sjove1kS1SHpgdTDcCFMDUc4tpLTixwQ3wE8YhbHdTE58WEqWek6TcFDHmtw6KGzXTLM",
  "key29": "2RfZNYUfbYW6smdLEoXKaJxs8fAsEMgkJ6yNs7Mbnr6D9GNtLPY2LJK41ZEeEyw148SE5p6sxJE3zu3HdtDDGvhQ",
  "key30": "5XE5gfGLhXvEXCVZr21n2RuR69coiq97HkUgPxJc2j8U9KuH2CdtW5uyWod9zafFJT5965WJyHN6fk9TztpwCdcu",
  "key31": "48NvikR2sABAFceghK2igQVJPRw4iA6XzAMTF1jKLjH7B5y9uk3kfbBVT2xtpkza8QTvRfMGntGZKaXU9BiPEYc",
  "key32": "249t9DUVrjNQyWJAH7Aoeo1EyduqYwsqXBi1JvdNMQohwHQy1mXgPuqaDKqL9xfqQxbWNNEfxsTFQ1pHpyU3KiiQ",
  "key33": "2wabEAHm7yi8apHnWs4PVPxBsX2awZ3PDvh61gMRJ9zw1MTpkdrdG95BDANPzGZRegjiMZXjUmMiJESt2RPJu2rv",
  "key34": "VtSxj7Atsu5dnQBk1U5ACD1ztKQ145Pmp643Z2CR9LGCV1ELom7t9VTRevYXTNXMShegq5tjnPhb24UYibSXxND",
  "key35": "4giQriavvFFTuz6ZZ54uAdzzfiVykb3DXjgWeW3VvZMTC8GoCtH5LL3j9qd6UfsK2hzkm5R55Xr9r2pAutrAYaDm",
  "key36": "42UXz3PXAP4mEqjLH68sUwd6TzdVNonM6dkwd7oF8DRiFAyN7xKH5q6P6uRzf2C1qjZG3BsdaQbVfGHfbeh769FR",
  "key37": "2f2TcJGfDo6TVmbRy5PyNmqEYhduW4YKpPM8A7cH5dAzi9HSkzw69Yos4uWrrV9cxLYtULZpZmpXsmoSJcMEZygM",
  "key38": "3CNRSfw6Ec7jtwJj869t4qnnkwSog1LQEzDuqku8QXntxGvdRXN83uWACJ37P78y9o9g5qio7wBZzLctGBjbWbZu",
  "key39": "5Hk7qCoKZuRo97p5EHdtWgFXTovN7qBFjKJR3FSobSbngnM9b7Q6FhiftUp8YechDM6wX5pzeaMwQ3myoteiBWGg",
  "key40": "dqEtn5QSjQBkMuuZ27ucMbtXpxGX2kFMzhHu9CcHZi2QAVFXKKeLnGu9fkogyDAZi9wjh2SYtL3BJG3U4PZoNyt",
  "key41": "4EtDEveUARpep7t9VGNtjzVVpFRKJrhxCXADuM9sJFixpGtVXwoQZe8do9Rg34y7F33pePSQ6XbYVhKNwJRcgoCF",
  "key42": "8ruxggY9bDgKuZNoc1akrzcZP3eLEySzbRqHwPGnuc6r2PCaQHWcnkgZLNAzP9EgkrzyLqtWLCLKFmeMyzBdcfU",
  "key43": "3yh7fPUu3v8koY7AuQinDzqUS3T5yCUT3fdVevBFuEx9GUUf99Crdi7tfmAU2E1WB79LBPfngTjh6NMk6Q1Vky2x",
  "key44": "3yoVG9fXm5dknTkyYRwAw6cctGLfd4pyZcf47RwT1VRFsj9LnW2VtXoco6U7iDzbhbk3upy6c71iqx5VSYHGohZN",
  "key45": "355HNL3CSK54a5vGUVpRsJoeqCJRyu1LenMoTntdWPCSUJrhgaHxwcbukqGYdRdZfSNnYNdGrAnHV8piTWipvvRa"
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
