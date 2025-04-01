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
    "5Cic1HyoWid2DbFQBupfcXJjserawL3vvzBcvJ6VGufNqNbszh6CnnjHrcJ4foY21Y282phmo9WkFosPqFSSANA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R83zs5QEcNPcpGuaAZek9XWqPL8DtpWUuzoccYgd3xx78gPKbLJ4UgdoRArcZnxC4T4wGTWeyjUTqhUsm9rCnjX",
  "key1": "4dtqHgtMskWqG92tuK3yGMrWNW3bNQtmJV7xC4it8cY3BryJVbcoZQkzHZMNCthVGRbzHrAu2y3m7gPc88YRLt2M",
  "key2": "4XphRE2iG5icJ5fr74967so2Tu6ZkzzXFm4gShhJUPXvkquM49S3B38QCrKiGZDwcfZYVuMxygCyPbmbujHYKiXr",
  "key3": "5Lyyefd2cJWF1vJToqT26X7A8jjSRB9nwoXAj8U2R8qmNGkFB23bKxMN9Zrr9RsY3CaKirTX4Hbho1xLZkvTLgEk",
  "key4": "2DcVz6JbnjzqG68JsWvgx9n32AMg2CFNPkx9SPSgcU2bzJxS8YscbUVwE6c6pc81xyfYjMSJPs95UqNSyfdw9f9i",
  "key5": "2zKXqZReZmVZvptDxuEQx1eBZmUehQdADARmcvQgpdauw3NWercvmLA2S19CoU1X2sqW9k4jqK4p18BHW8UzqtQj",
  "key6": "zayMCDzkYb2wEGBbnR63UU21H2DeR6dZgHm8i4Eh92zn8VqRLdfq93YLiQQmNxUVv5zu9CihHyisnHBG5BQQRFA",
  "key7": "4xpVG24eNbp3Ax6DEb7JoV5DwgC1tXyiPKYoyTJSZ7NSgVWkKmVnPQq94zduSv1FaEmt4mgQ2MMtfSav51bD1cSN",
  "key8": "2Fq87i6wRAwzpxb399kYCHffSNfMMt2dniSduCz7LzjwNSktq4Jp62Km7YWMMmXt41cGUjUhrMRHwnpD7S2eZWJS",
  "key9": "5ubSRdhJXxMhytdjTcSfq4HPVsjPV4vcqwzSVziU1zkW9fqKqHouQuL8R9wecnS2GN74XSHufg8YagQxpFMETzxv",
  "key10": "3TQJEVHSzn5rx6zbDgD8JxiErRBX5cEv7G5tsVCmQvkZy9Bni6UoyAyEkUW1GkFT6kpFodYxg3fosBauPZ9XrMb2",
  "key11": "1Y9no5szJjRUBoT3rEdpbJ6fqLDQv9oNLr8mJRixByN3wchFMoUEQ5sipboPf5KzuWpLuKXeBwtcTL1FSgyRvKA",
  "key12": "2UN4m82qrHRR6Wacv2BiZBQw6DPnfMRJRQFUchqmANdw5edETNq3EddrZHeSNGRakPcuN7oegHXpCcoxektBJ7A1",
  "key13": "5i68PFU6mooUMmXmmJAqdktv32PWLLtz6jDWFjRFQnhcpCBYzuJH3GPEw68bYQ8PNujAC7puMVwGwk3LGyoyCjD6",
  "key14": "665hy9sfsevYuB5nMFgbRJyEVtNNWMdEEQs3NUdNZFkvcSBD8apgGGMHytP17Uz4Y1zGWp8Dqmns165URqX6p9TV",
  "key15": "2nJyGFAgngWqHVsyYQyH56VHR9BuVZibv2f7R8ubwQRg86CVkBFj1n8YaQwuV1iQAwux9yLyDBh4AiVdjULpsJWJ",
  "key16": "2zxAkPTa7qWUV4QrC7mhXE3w8LHwAWuEXMJoeUFvN9BJeX3n7e6odQKEn6ajga1t2GxCo2yidnhNimAZ4URH1pmM",
  "key17": "3xqzhkrFmwRopHvxyQJosvXbkqcteSEwGkXTFNxfZ7daF4nE5tNi9Sy9jJhxBDDHZhExDtBj6eVaxUtofzRDoyYV",
  "key18": "8BR9GKWmRAgpKFqfQfD7S975MXzHg4F3Vuip8P2KUVSdRiVcgwFfJpokNs6zvs5qpCcVh49zxB71sc6SAXpG1pD",
  "key19": "2V5kkPC3Yitd7EMfcr9acnMwA5URLNPkMfS4esy1cL7LoTMH6nmMzktdVjEZzPMbHcyri7KevqK4Xf1qd3r9QXaD",
  "key20": "5qEuPoYbWLWyESLFqyP8Qc2z4APY7tPk6Rpgym6EgLv9kAEW4gHR7kEF77ZKVCrvim2Hr9JAcrWySWiZ37qahtgT",
  "key21": "3bLMvUtwXe6XsBd8GumnARM4YEgLsBL7xr4kir2NF59d74FUBSVLoZrzLCfGqatXxC7nurrd2iY723n88DrQCcYK",
  "key22": "sENHEwC93NmbmcBedurQ1vkb17aLAkxVJMMdSk3axg54jQd6eNd5P8pw55RzD5Yoso4u54uAs2o5A5ztm1ytj7y",
  "key23": "2htf8uBdc8QAF9mjGf5mgz7FPbhZTiuubyXD1RgYENLR962CFUDGYotT8XrH3MQeCxHsum4Riajn95d3snQdtuQE",
  "key24": "3LXhgwxjSRegBuDqVWhGgR5d5PYemmwDn2YJ9v1QUGM8dsiU9o5Kh61FoHgijS4xyipU1rXN3G7AcMVvLafTytRd",
  "key25": "2Jse3KP19r7PTpuvR24PZnn3XT63QEbpzhqSb5ow37ryo5scJF7D3StYgYVns2y5WEUUsw2ACJikZEAyfngZKDR5",
  "key26": "YMMTAaRC6LnXEPNeFtnB57cjgkcEA5YU3EKFUwGerX2kL8qZTw6fEUfdv6yXyoJbXSVdmuvqxTwXTaJJc4U3Mwx",
  "key27": "3Bz6DAWpvBS36HX7nvzX49Kb2q1bpmkAZiEmRm6pLg7UFF7HYwhYqCrmteqrHJUDt6CkDintxRGU5fugnLjn9anG",
  "key28": "5TvAWR1SdSdCKd6nQeT6RSUzdqyQFhjkHTDENNuyWiJLyeT7AzBo56bBDMHDM6mnGhqxAZdZxHzFRS4ZY9UakNqZ",
  "key29": "3MGHcSZXjhTojKxaYWUuSkxrntLgzoK4y78q4DYHPMyazEPanjr4HeFihL5CiTn7f2LZR2Xthx26LeLAEfZGxzAd",
  "key30": "29nGm12cWUQFBcePbKv9QiGDUzL2XYvv88YESVuC2x4nxnByC3twK1DGtDRP3Gp79dQJ8XKCm3stVJ5Yv1J5aCB6",
  "key31": "2k1KjBuJ8cEHemeQVb51UhsMbKRCHRwnth6x4s4uzm9QCUt5BeQ5sV9FNKF9LvkHGsXin7TDxB6WokGA7Ch5Qwje",
  "key32": "2EpQ2NiuKew3t5epgrkRwSsy9YkZxYJCH6zeWBzqX8ZbuBGS6C4Gss2iB8sHroCvxpjzUhd91F3TLXXesu9DhKDi",
  "key33": "2kNeZ3jVa558UWPDRWgHfJMKgQugGBdMhdLxUevn33sJAqFycEQ438wABSb7uFNFFrW28ouozR3EsF5EZSsabMmH",
  "key34": "Ms3c8ffn8EtV6LkU22yATbRu239ZKLjRAZWTtKJvaKJtXspKibwtiek1bd2jdboQ8GTrn4hrRhDVrrmvtKUHiBZ",
  "key35": "3cfBcKoG1JPhWfe2REne5GhTZxGXQqxGy8cuKz4JKAKhPYcPxNksh1xU84NkDmm9eWmPzSH26HaMXonaYrpczFHt",
  "key36": "zwkiZ1yMHPPNaPKiBrCah6pBodyfHfSAWwo6YsrXMHcDV2UY6RdAZEeJsVHbscnv5jpobCENRAQ81To65tUgoDU",
  "key37": "5qcp3jneWzCQbcr71WfNzHb2EPQyxHKqipV4ABqitb7XsnrbWjZi7EK1ZaiV4fSLP557nu4EN2rARjMKA7DeWGUs",
  "key38": "3Nuwd9fkzu56tBrEEyhGqFk41xpSzQXJf3uDWCdPzWbrzfuKst7VeNf1YznHwhxjLP5gxhrxsg3TrcK5eKVya8jb",
  "key39": "2WBtxJEZonKAzPD6ab3kRfcZLTN3KYgUubvN5cFbNYy16tcHHdo4UXZdTX9AD8G8BPaPjMdY16aoFWFf3eoHtRRX",
  "key40": "42VUQgzz4YAbTzTzZLK6h6UkXYCMUcXUSkh7x54BUPouafmKLukQr9fgU3gpPaqEP1afBGhxvfByuL1XNf7ffekm"
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
