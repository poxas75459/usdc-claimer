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
    "4jttdqEyz81QShDQseFVAJsaJYM2Pcon8D1SVDCKXYhhoXuQp52AwRPkny3YcJpBEQVSM79UNZso9EJz96ShXi7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JahHfL4mZiiJKh16WLT9tvijYUkUHLBkiTCJ6fphudgBMv1qnLRrHfxhVqksAjycm91exftfVyfWPAd62GsFk7t",
  "key1": "423esyfqsCr63AeQeFjs1K6p4x8dmo3Hvz7Ecy9tCivwD5UjeyYzVaPp3pSQeg3dBDnNDGTk2UzrwbbQn8fKtvto",
  "key2": "4nvipsxjsaf2yiPpQDdsrfXTLSe78Q4MQaovTFzpGMxBc9B22XyGsSJYnvh8Gi2EgZkttuivkpTw4N78Q3JjT2ix",
  "key3": "3akFhyAjMwqAgssxE5ip469GMUBqVefZ58rU79k1Vuv5h54BkD6x4w6LmVnRiLwq5zzhAE6HtUuiY1TAHar8KSYP",
  "key4": "2HzVuWiQZZkb88JD6TDnggCGReqKqqFr5G3h2PiPn3qgDrUdgTVtYt51anVVGpAWPBsTv9aCNdnTkVmnfG9QsE2n",
  "key5": "RT5cGoJQ9iq97Q7S1L6Z2wEo52v7YLvR6mY69k94GNvCYGrW8p1FSn15jzUEmKs8YA3mXuZ9bYBnuZGc8gnhA51",
  "key6": "5jknbzD1YhaPq9xZYpm3C3vmHL9xMoEbkqBUmXzY93EctDN71H7FX8EPjLQLaPF8CHPEiJ3ZqKMM7xEmTZNR83yJ",
  "key7": "QcLG1RHxzNs3PrMyzN2bqfWB3yycMig4bHq3xL7TMHLzJSDJcQjmr2VfZuHSWaKzdDmEmv2LQWxPYrYWSAHTX7X",
  "key8": "aQN42QiQdhyWVDjC4bkGXMxZHzfGxoJSDZkMRCoVfSPtsTzLfCAKvW7L5cf4JpDbkMKVQQmE1LsM8cVcBfVRWBE",
  "key9": "4c3D7EMjGf1fAwz1bv8uGHwgsqotEg5FHmqfo9tnBydQa5cWFdMBcRQ3zLBdkhEanM7zQm2DpGU6k2S8uAJeStVQ",
  "key10": "5QNa2noLW57ht2SRqYthiiJcWXcWV3396BHpCCYjpcngXxEpQWtYJNQtC5VwTJwB4cmLxF8d41mtkK5GXYtTJ8UZ",
  "key11": "5dzmvBFiRNXtT8AXwMBNvcSoTbL5ySHaBc6MWwpSBfZvrg2dMN166UsvdnA9QofQyKhyQKBeUrJSLCc26d4p9rq7",
  "key12": "24HHxV89EzSJ8hoK9MrFaMg6BZCNeT37k6RqSTrG5eKjrUzoue9hV2fp5YiwwDQ4HgCpv7QGkSdwRA6X76jbbzHF",
  "key13": "xBN7TTHTVLvAZWzhJFUDJE3YjeTvXAsHc8R5DsaxRhVN8KqbYuURAxx4KCincY2mhRet8RyUQNqHbJh9nyhp46r",
  "key14": "2Kd6R8dDzhyokieno3LCf5yEoNy4Sf7gtR1wiTWTMYg74RBDLdVvGqZEsudxPyAfch9TS5Lw7GjQtgrFFGv3D8Mq",
  "key15": "4hRiLexVTw3ZBK6PcySLnUg6nQLNxBJNaqLVyN7cFRkGNhgR76mtP3cbwV5Ucp6EK1c5wvkXS7tvo7LfzB1sLGnz",
  "key16": "3Ws4isvkgtMpQhDgXNryqq3pi3wqDZ9BiaiSDD2RnNyhSwwRmnLovaj6nngcfVirUKcjRH3MtEUsCMYpdeREXzF2",
  "key17": "yojLFRu7WTnXCHX9B4ZN4zMNVddFSFRLUawL1EGCnZvDktY1G1GXe3PViAp6igrq1Pm9hu2W3FSqbWwsbeoysnn",
  "key18": "4rhMV1mdQQ8SJmpZH9snuJXm9HgyyzhodpxrTHmGU1Pag9v7MBybX3yppsBCjBYG74nnhUkCDCDg2sRMXdtU6TZk",
  "key19": "63FXkkzZ8fs43ht44heh1X8moR5cBCdGLqEb8mfxouUpPxiZvnv5XYLuDDcNLTFqE34jmWDnsqsPkuJ1BNLgeoQj",
  "key20": "6Y3xZL4e8RFAjd68hqiG94fTsg9ARWAY7cByS3SkvTytF6FvGDoZVAhGqr8xAtdbiN6NtoKNV2vJsC2q2JsnYF6",
  "key21": "4pJVnNU38e4R8ZcyBrtqH2LpY9vEckeMEJzBfXMrztfNBCZQHJX5JeCrKJDRDDDXH3ubNFS6zk7Gd6k7J6JwtEQN",
  "key22": "1ofxj1r6zwy3FeNpehs8BHPKxbzztAtTvzWQay5rxwFcZHE6EA6E2BRF8gmfUiMTqgzGu4kBQBQDYAMkz71D4uc",
  "key23": "3Fwh3NGeeoSzX7D2jKXSKNQDY8wPHGue7Emx44jKpseW4c6Y2u5FQPPVxSNbpDQBjLvE66uT6koXMJovympQgo6F",
  "key24": "4YSsHiDRT46kmExSMNjMPE1aG9KLWybDLeMRmaUq4Ve48vK8zooCjptFhcBNeUVA5sqYXq24AV5hsfeMFbo8nqqG",
  "key25": "2on3KQeLYQJoDSgu9k9AzcohyLqvsLppW7BHwWadkjQRPvxp5XS8qjin9NukZWBqQxR9M3SjD6iwtN46BLmA3rCA",
  "key26": "4y9FjaHLtXQTjim5CnNBxa8jM7ZbStLUFSFSy1gbwXM6jxFzUThAu1HkzpwL4o4sDPC37rN3y2Z69jAfm6Jz33Xk",
  "key27": "3Un45CWSqjH5mkDsS5NDCJEdy1VCoBCpPtivZjgmYCT6zpAkNgzjUZsLN5HSJBFbmp7bxwwvifbk79PwW2CBbqr5",
  "key28": "3BiCUSPHE93JCYYVdMN5snrjRHs5CSpyGHGjobYJvFaxLB2A2picXHb8neBX3MdNzjKBrD2U7cWha9rTUEJKZTM5",
  "key29": "rW67RrBfkDotF2yZyYNEsxxyfrpuYzzBE3gJZR1Fmi4mmh6wPY6kQGhRsbh2Tj8oX8TUQrko2GAkyBu33HJRbXt",
  "key30": "65hz3RRhfj7Cbq57hqHinK8M1913X4FeX9rx44wt1n6Zqp6YXTz8aC9hTegoCZfoorv2o37KW9qwB5T7aUKZViho",
  "key31": "65kU62RSzpqHC9sPZKnozjqoAwcsq6g2N2JJSXqneTmH14kCYWdUfbkowrQTiYgivZm2hKT6qbjgvooqgTejhqGN",
  "key32": "5HqXcTuyKvz6Mtgnb8EgUE9Ati17R9SuNE1w2NsLkjkhjUAePsfuUHbt11f2GgUxPqjagpuW351e1zMhEqDrNHg6"
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
