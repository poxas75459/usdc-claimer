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
    "9aVKWXEHYCfoVJcVKtdcjhZ3NcdW1y7DePrCm12KAUNA24qTrtkFmfn6aXQbZ4EaM2GdYrxwQJ9ZLxxCMEYhT9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2979Zsoym9zT5KNkFht5idpJ2Vn6ZMHLuDm5iakQwxHHbgGTy6Tf3nCQvpzDgMNxjz3NUAb35jxXX5v28aoQkuYK",
  "key1": "xSxXmrpW8HYBJYHjrmZSTCx4Dkp9Mqy1vDU6cmjcmuWFm1JpzwYpCvYq4yJyyRkbpi4joMFCL9DUJFz2jpjQdik",
  "key2": "4m8cyRaGBhydN68Tc6rVkJbw8DvZS6nNrwpc3cnocrfo5KFTPM3Jg8tfWP8j67xyiwSvrbarzn1E5Pcy6MgJELyf",
  "key3": "5M8QpYQyjMot1MzKfqXyvgKTSKepi3PiJU4G4YN4js2zPFS5q9BEVDCd6s9BbhSg2uExA3b7XeWtwmDCJ2VS2bBg",
  "key4": "66bMuqhd11R8QaV1nZWzkksV4EuxpSnoetCk2Np12ZPNosE6SyiA9EhwoyicmNi2N8YTzyaQ1BdHpAKTeD9HuQ65",
  "key5": "62E3vBRCBoDP3mz5TH1ZA2LjVVxJ4VDD9wW16tGUa9qHVJ48tDHP2V9sn3YKkyhVZ38vCKWqZYxxzYtPDTANKtQ4",
  "key6": "62QKos2A7M4ZDNsm9UoCmouSBddhwjXWQN2S2tnYEyUasa4ahkwqPrsAzx1smfU3UauWThREizx2LA1fEdVAmF6o",
  "key7": "463gxDtSuaokS7rthA1uwohckPhMMb7yGD1bk2yKWdKsyxqLdzWDrmZyMDxh4pLWzJyVubu1p562TPxYiGoUL4de",
  "key8": "5y5M88hqDasrkDHM8Bpzm7zvKnZDSRxgzSLbAyYrnhRpwQHFpiQn3tE9mVi2TZCpiJ3Meco7Uyix8kseKYfFRaM6",
  "key9": "2bQH1vsqWY1yfq5UqrBeYzPLuY8fDmg4JJRoYZTJweQTRqNCybkNjnWXY1WFPoUvgom5Af5mwddDhaySHUhoPJzy",
  "key10": "BMGDnvhQJaiQL5YogHtNCepf527FBSig6VbZZrY4kcJ5PLXytn5RccmQ3RQDmtJsdMyJDX5audLGnyoz5t1nirF",
  "key11": "5SzeswWvHtNxpg2uVWeX3CekfvyDPZECSeKi66Sz57zKTXGbBD3WxhY91s9KTRS6yHpV8uKaL2AYoyfPC2xMYCDJ",
  "key12": "2mMt491s841wpfyG9YA6ppAogWwYdPP3fMrV9WjciAbSFUNACyN5wEhfds8ZNcbUgD6CCHbWU88snKYyTpSYGE4a",
  "key13": "4VkfZ9uTXFct4j6CbSnKcHTnBJ4BaZLQcK72RX4ge7zLe8RBUWnjM9WoT7z3PfZBN2DYpCg6mKCWzoPpuwNdqTyK",
  "key14": "2dygf5EofmRpowtvci8V8ukRacY2koA9sJ3noidovGZFLWwoqoavqBdGPzcfTMxYf43SPXVkxpdHEYpWUFoqHgpv",
  "key15": "2hyucm6UQc34tua87VtC5FETPwYLZRz2ABHAiMgK9jz9eQG9BD2U5Kn5a1EQz8kUXnAvfKd3dMVYAdY3V32ZbEwi",
  "key16": "5wbYxk7sJnm7Xs4D4eqjQ94YiY1pE9cZu4WBBwnJrAmRnt6Z1LnfHezuUWMVvZHEejbAdHEtBzatZSHmXjqD15t5",
  "key17": "3iKJG3ZN9zzcqenC71eyu5VYWL3oGGEd6xreyitJkLyXDB7GCfjkZTzJ6XDzPpx4eWRurUCowqYLvd2qR9dTdxoB",
  "key18": "3SNGsBbjMvU7rE1o9nPB58bG3dTCdQApH6FUL9V3tLkVfMUhBBbt8u3MxQhpE5T9tJySNyDsLLtqfMJtXHWVhZDf",
  "key19": "4z9nL8haJbbd6ApRzcJCYZZpp5nfiF62XsbBcmRBa6ddE3d3CSEgY9SpTSaXgnxmEx1re3xiQcNiaBMeF6T8PPtm",
  "key20": "261NBozi2Xzxhq2yEZP6YxUvePEDFzBxK93Lk1hEux2hAXFLzBHy985tybsVEbDfo6xSK3GZ7v6DbL3tarNz7TzU",
  "key21": "3Q5ewvJRmapJVQPfCk7i8CCUT7UPPr22WgNJ3uauEErT4tJhoWajVnmWVhGqfXgvAWsjtBtku3MfFvYWTTSyK6DG",
  "key22": "BxmpR6bwnbbnodWAwxifFenX7V2agmP7jrPd65zb3v8VuKCoEEMApE3TGVPWAYBp4mjx7RyQdgY6GWkefazVoYQ",
  "key23": "5WRPjd9NFAP3h7KyeXXz8PmKPggBRB9st1XGpX8mVMPvXZhQ8j2eRxDMg6oCxJM68DSyhDU4M9p2H5gyqn9qfN41",
  "key24": "33c4zax2znvB9NRCZjD8bi7BphQbX3iTrM3pkgWBvVdSK5QH4T3GwwjhnjVvkVBhwhgb4pNCVvDYfwZhZVMHQCKh",
  "key25": "45hBTZbQWrHoqWKYMrp9b9PaV5iaxb55ULfySpKoyTk9ojwfdamAt6JhgmitLrVmapKYn4ajB1qR8EfPqJYa2sMc",
  "key26": "44ViecpMKhABC4iHJXkcvJUJd6Rgv2wRNLKKqSPDqvB9rfxU5zRMRrDubBAG6Kdx9xaD4kysLrCcPHVjwVU79KQu",
  "key27": "2Lm7T4c5WmuWRSUuGz8euWKPnEubGNX8Yq6NBDuEs58hh5VcdDnVtB1gV4iJ525rBsTagiSFcGzDgV9KkFYpV2po",
  "key28": "GcRYJJEGnhi2Mj4qfJJVAvVdMLywpUt4BYzoCvLU2nxcd6NmnDhYxSUysGJSoW2rHqeLNkXvbFS2Rustwcgu7P3",
  "key29": "3XfLg4m26KP1adhQvnpAhn5q9xhpWpLXu8NPzbE7kUUk8rzLB97S95pwpt83qU2sr3ADvPMnWfUvFCVQJGgncGAi",
  "key30": "6512kBpTyYt2Q8uVSprGMqim3ACrpsN9nTiycZfPNLdbSBBXdcVUzPNgP5EbLb45YjnVXFZh3rBAg5sGmCM7ZyjY",
  "key31": "39ivJHnoZ2ZtrJfrAyrWsTHAAPA7AtZGsAypiUf6rUWDE75SyYiRGbdGEBorkQFm43MdmZZuhNdhKU45Senp3FzB",
  "key32": "5E1KfeR2ze5JKfcfAoJgzuYLvbTU1j35S3NpdezSkUeTD2gN8CN3phLpfPUMXdCjf19ezaKLphRQRrYge6y41yd3",
  "key33": "4mXxBFfnXkyiWtsXeYyRop6tpJ576xvhmeyFH1WkbBrqpVKcoEKkndATKjVsaMWeBDEn5co5oqvtfmxCxL1vspTU",
  "key34": "5QMBxFwTzdH7ojwScxzocxWeY6nUPwbDak6ihba9YEfCAExSj8s5jod4LsE48CEjugoRsc5tf6sc9Mdt4FmBtqSD",
  "key35": "5UtMcskzGtQ1N2hV2XbMS9WMzXb2zYKMZRRXSa8RZ2eppDMPx8zGFS7LLLgmd2irG1TsH84tSbGtTLEMyG4QUSrA",
  "key36": "LPUsCWw4eu9MZod5VtpexNtw7cjR6MeG2dsriZAvhyM8Cn1P9di234gfqXoogn5LAsZodiW3Dqi8jL1dYEPwgLM",
  "key37": "Ex5WJRRKoYhbR11JXAgy3GQfc3cKrHLr87KmVmeXSvcH4HGx59pTqYxFne7sNdtwVNmsystMqNx9eBf1yWov2rs",
  "key38": "4DowX6GJp9jqveMo6rhSxSGLULgfGePM6zYkErayczFbiVepLtU4PnL9wpMh4Wva4wWtb2DDmESwGN1aqrasA2Ts",
  "key39": "5QcMjbNEJxj5j5kAyRCvWgooz7ueAEvHdrz8b3PwaKbCv9X7jeFAhPY3E7ocoqJ9bkHyExxdXkpDhx5Y9KLGvpve",
  "key40": "5xfByKv9BAQAZYWJoopG1hx4yf3wBJMtBUHvQb3Tnb7x8TB4bK1DfDbodLySRNXqZgX5WMDNdpUNxzAEPBZH9RsB"
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
