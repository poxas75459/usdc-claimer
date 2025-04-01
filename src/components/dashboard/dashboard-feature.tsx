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
    "3BLAufqjZ4npu7Xi8mz1n4q18RHKMWXQP5kUEvnVPkFZehhwfe9uUzqmt6giVDFivXBXqJniS7PivUPkKH4c4rGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t9sKNX1krjLLhCcqRMMHqaGqYisC3CYSQddcQMGgDxpkyLbyDyWU3TgDvsGxcDqHN5HmrFabeJc37SaP2sxnnXe",
  "key1": "31dgRM5o9CqRuAmibQb7YaYBJ4A1rmHbnkhxed6UJQkJbgCZ9TJGGNHd113csGmDGX1pJZRhDS3uT9RjA4pEsjqz",
  "key2": "2p8Vks97b77VoxwRfJTehvXun75GDhiw23sQ5BgDJGxQbj79YyE7ctB1FqMv8v2TLYCTkViZNwh39xkcwyLMd3gf",
  "key3": "ftEQUytVxTWv5AozZvX9vHRpe2aEw5Wsp71yjHWi3a4EteEQc2tD665QV2cYwh7CSffM5MFeYz7w2ispEnnjq5U",
  "key4": "4ffvrkHfu3Agoz9MJAxdMqkgdrEg8iVKttMiFcvQRXqBY68AwWj63sFj7GvJ3UGuZr9N1YUzsKJsmeTTBMWBTrQM",
  "key5": "sxa8mP1qum7xvViqMCgnuq1Q66kAqZ2Ddz1KVvJH7uW7JUusHaSmzLxrZXoAQvtvrXZW9r43fUnHapEsmn97rUa",
  "key6": "4nNdBihC5uHX8WjGP6og18LSYe5wbWXHpbXYGQab49xboCarKB6wgftJJrwiA3zCS1XacQzgSvEB7ztpBpp1YQNx",
  "key7": "5EwVZ51hskh1VdXYqcs6WamGP6kRFXaNgTDNqKMwHitg3hARXEMfET77acm89FVYkkN2H1YefkAa526bLACa7DqF",
  "key8": "2M39CPsQ8KAqFz1koL1tfc1hXxbS4kPf3DaZaZEAuBGRBKWe9K5ATKKTKPchHzWdav7gwUk6S3acE7BEkJsZxcuN",
  "key9": "65S8YpMTHPUpSjWbarkdWPvUgnD6DTko3Azc2XxWrrmLS9tRgKb2VBzrENJf4wvyWm9AkQU6VD46RuF99DjnrTnk",
  "key10": "4RqqJy8DFkjZMjb1xx4EX87TASTDvTsVZXe87RvqpAPVmuBZAwX4iuni9AWpop7KQQ61VvtHcsVn3awAMqLWr69z",
  "key11": "2EZdAGBfZESLnzfEc7tdBTLCA6rSCqcrUK6d6AZhP29EVZw5SPCj8nxEbrzuQmXfRfoZEBRBquHmyHPwWSTjgfuv",
  "key12": "2daejtdqrvGHaw9xL4KDdpie4KKzVQKCKrf3oCEeyNbcpebco5bbdUZEPzGdWwpXsK8FUeMNxDhV62nyDENbx1eP",
  "key13": "2fNtM9ZJDz6Qv5ZzcehPXn5JSDZMJ1QtSqoTuSCgSfPx2oi87MjofesfmPhP2osdEoVWAujqKC5kGBm8rH6wvvn6",
  "key14": "3nEjx3XPTNTXyVmiMN1NZWdY3wxXS43XeYK37rU9fvVk2zmZ748mzE9THJ7P1DH9EL19YrWW1L1DLeeFW2DK3Kdz",
  "key15": "pjwnE7p1oMcbTCUrTkJp4bTUxfkmD8txVg3sxXc1A5qGEoCvKHUyNaUgvL6oHuPXUJwqiici3rbadU6QjNXRaCr",
  "key16": "2KJH3SHthwGfvBjhN3z7gF4hkR2BjpoS7bpR8GRu7GisLuKNgyz2y6YZjTwspsFJjTSwXsB7iZYiYcjSs8jx1TbN",
  "key17": "4QEHywGoStpj2rSDtvBY8oiBKNHzsSfviBKMEwPrNQHKtYZeei18QujCN8YXvYN2hYiGoc4gSGorYSSLFVFV3RBZ",
  "key18": "38orybUpvVHLgvokv2SAAAh2pjWfJvFehDtAa6Te62YNQdpZRfCSJFKXjVDL7PxwAQnW3Ghrb2KmZVmXC1SRJpZE",
  "key19": "5HKgGY5wNE9SFkzh8c2VVo6NacaP9ffFaNqaBtqsw2rqakomtph8BbKurBWbFNJn3MRC6EApVmvhm6jpDUqEfTD",
  "key20": "59zsqSAc5MWeMdCPieJTZphnoKHM44iSpXagwhSQst4eVmegkKHDkqg4oqwvnF5oQGKCQVAF9udYtfijinpXD1Fh",
  "key21": "3VDhK53UXYwtNt4NpzEUwzbYyQhQo4yFkZRzE3uZoCREiV78pLDqn4M1r8UhF3JRAyeFQcegrBEBdc5tDd1kNZKj",
  "key22": "5BxJRiLvppUvPB3ekdobdDgtP7cT5HgJJoER95cA9nfFKFyqkZg5zDjQgKXfZpmTZ4ByPfGuZ1WGaFTdmeDxqDsz",
  "key23": "PoDGvapiz33N2ydeyRM9GHAb9sebGUccHf3N2NbcpH5gAVEvwsQLd48hESJe7hy2LsiUTjAsokgizTwNu8KTVwW",
  "key24": "2D775R3Pkqvu88WsNF7dsNm69dYyAX4fyj4XBvUQPmLj3mRFScY5jRS5WzY5UkzruBX6e1YyEu3rTBUtt46Bo9mQ",
  "key25": "2NF9DhY2aoqBdd2n2fMYGPGgwnfas7o9mukbe441w7TeaPYh5XwHTv4rQHyJ8sYrAP9v5MyHV1aoCx5n7ZLVrVHn",
  "key26": "YdA1GMZ7JUXURYapbREJLUrHXD8YKfgx5F78pmJ8jpgJVDJGJKBF2nsdJtxoYM4ubAiMnK1SLtXLFgzAi619JGr",
  "key27": "5vCnmVXv78XXUzyzo3TGJ813XMyNgP7GmWdtzp1EHRzQ98KTR4jv8ofCCGc8ooQjGKhzFxFsrvqw7qFjbSbCRJEX",
  "key28": "3wkKk8gbci7fBgtVMA5UzXEfD16eKBVbb4gk1NwHzE6qujuQAzPXEjQUGHSGMfn5cmE4x1CuFkfckEwLV5yYAahH",
  "key29": "4w7VAcQ537YtKsew7c1QQs5D2KKUKfjUfK7EiUAJGziwK7khaTwefqmCkkNig6Td3F7KTbEEUFJgbqbWmA14UvEB",
  "key30": "5upDf5FqRy23UWZ6VDTWhnVnrvYMWtRe7qcWb1s5Xze2HVR2mBtSNnpLzdPrM5rnwJ3UZ4QFigPpCXduhUitmGJ5",
  "key31": "5rUoKVm3hxcK1UuJvhqrBUgnFtMrLSyeFCbrtWvearF7yT6NJPswdkwQggA8AEN43x2z5Vf8Essu1dUBqyeguJbH",
  "key32": "5Bm17ttwY6EWq7d1rJ5zSNm2J6Mkq9TNubAiSdxT7jCv4gdWdw2kH6MDhAebsWox8EQGSvaM4c33GqPocGL8Tpb5",
  "key33": "5XKmFgwwr6Pmgm9G7aXVoyWzFgSyLC6D1WpKrxPpxCf31Hj4AQutPemVKqQszTxZ23Gw9NXpAUav7Gw329DZWFaG",
  "key34": "3RuYvm2ETwRciskPt84gBVNtaVYhWacC5rMy1eggg5BGsZEaTyBKdgiTUVKU183EJGhniTJZZawypcQpYqirs1CS",
  "key35": "FQtCS1Qah9QoMEYdyxdbXy5D5KyaYWHioWqpc6iWhx6buGutTWhTkF76Hkz1k5Fo85JNcpxoa3jdqygNdJBCMNu",
  "key36": "T77m1DoWeXNNJskdBHaiVQWRzKUDrjU5uMo5H1yjH3CoPtkY8ErZyqpXJAwYTiHLwKtyNe8Ro1kNNzYseBDMu1x",
  "key37": "3ifMHzT1vKYxcqh7aTTR6WZ7nbShtWsoxdeBwNFY1AFxWQ81YCiaY8E7GyzhVHL1LviB2dFNAQwcHo3jJma6tdWK",
  "key38": "4bLkhBiJawjCMEZpr3BuocfPo6jnqcYbxKXU2cXUUYBNCsfXdsUAzJ5Uh1sqKShQ785gmksjC6SAh1U2GFB75912",
  "key39": "5ues3qc969dFcwFTGABYvTGGTpS4fq4xGA5z2CtNzKsUAUj1pT8iiv4yYp3qeUkTo7469Bv1YRkTAHwG3oqAWtzv",
  "key40": "5Kchv1txXtaVXgjeFsKv8krQ6x6EWidkkUaAF28wYWcHKewgZhFKhNVVzp3GEeE1ahmwgNcChK2FyNkmKfTEB4FE",
  "key41": "4qAFRRywSmLj1pTfpXkUGwcELSfdqYTfaD2CU81JigZrGbbMThrNCKX13WsRh7FA9tM9mmX6YNXBvhUsjWnFbfsw",
  "key42": "pBAZ2hY2uQeVPE9JGPfVXpVWTu66bvKcXoCrL7j2ndn9ZkP3542hnjrkU8v98y81cDFxxBdEiYE2aq3oq64YASf",
  "key43": "2RsAAfm4kWSgUHEmeZafeikgpcXkL1aTzz8FuiZR1W5F4Ze7CBpVCq2cjGoegz9cg9dsn271SCoXRUidAQkmEvQr",
  "key44": "2FCNwRWqqiw9LiBURWVAC2uFssreuz4GZVDh8k9JzT42WEiRd4FrUs1S3a3Y4gYDBRff6DbsuEuCcv4kyNJGUfjE",
  "key45": "32cCt187NyEAqTKQUptSVoxh1c1UJSXk5LA5w5zC8e1MxFZwYRGKqr9KHu8cGtUby4GcwrWJQzxYhjAAqBDMWwtU",
  "key46": "62qMmDERkAbvjjaQ6DhY8hPi1rbxupuGLcaosXM582r4CQ9SEEe33febYL5ht6fZGnro4mHnJ7Kv6vs2wnzJG6ET",
  "key47": "5FtZByd28QvpmGgtHMLExVBP9bTxLbrBz1Hdruka4KC3oT4tCwXHicmqGn8AjgyKxT6jPVkRJvy2jdjjAYCZDnap"
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
