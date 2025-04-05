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
    "4jKxHfWx5hQjHRrhXbxdMdpLT3h4xXB6dUc1d3XGHyLtWTogCTeDf8sjh1phRnXAatxmtD3pdRnY7AJnJMceRhga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A7UtmD3GxFxscf1wWUiDERxN46XwehW5nVLHDNB1swz8FibkaED2vTpEw132oWd6NbpCCEvGZUJqzdnfsRzmjYh",
  "key1": "vZYAS4NLfmJHGeNfqEp2uZZmPgjDZDep5RENyGKRKKQR7UAVs6KbXNa1jRz39btLatmpeDT7Logj6tW1KNoWT72",
  "key2": "5zg53ww24kY7vSwJuDWEyFX3RhKzaYgzGNL6tnQxaviDTdKWrhv7VWD9N5dT7PXcLzcYKVHKmi5k4sUnTAjpnk5B",
  "key3": "4on3JJcVY4fTduticMZq61miwWiXiUwZjcVYJCMHfi9wUHdsDBxmcg5DJgMrK7wnxvg9rsBCZaEutFuUQhrfKYWv",
  "key4": "3k2CQ1e1tzP8bN5JLuED3W8LDuJ6FzxebR3uqUvtNPPaNaDSq8ox9xe2ZZ4hGYAqc9mSVjjNGz2wa6siQMtYDnEL",
  "key5": "4LhkfSkKrpDSedrEvaVeWzoPQYQeipy48MwauxENzP42GXBeTzmYZnyB7VkLRjHx9JsS6ewR9WeGrqRNBayZuHrT",
  "key6": "4DvFJGS2augSRkWo7p8UfxZeSV7FTKpG5fd8dyoLXSAms6k9YNznAyeRcEzWpxnDXy2Lmj51LBfFn8TsBmFusC7Q",
  "key7": "25k9yQApEkYPY8GKvGJnS2PG1s46wB2igGYhebkNioa3EGoPQbaJweWJtQ1ZhvhAnR9k6cMUnyN8TbrP93wuczL4",
  "key8": "21161opcikbsvwTL5wY47vqYipjfHtE9K2qFEMBrwvf1fenhxZzjTQuhpM3ehcvW1yySMB8KofvFpApRCe9uHLos",
  "key9": "3KVU79vhErsm767sHWWiTHCLknJQvfJko4yFtNCNq7C9CjLxYgjopw5vT4bzTACXDC6LvBJ6KD1gJ29rbnD4xmEY",
  "key10": "4cAtDgcpXnQEL17UFcr75YzoaJH8R2qzrFstPdSUXFkRTzoXjjwbo7NGjHgNAk9HoFvBhbwfJ3r8VG2CeaDe6Rp6",
  "key11": "5e9NB9spBMjCnrfaD9b6du51vZE1ZpFT1fQhWkxde1e5xBz48WXVFFhjtoFMNbN3fX65M42KTixcVx3tgdih9t83",
  "key12": "LPZk5ELdzSdQVVdM2LdKhK6HLstnz8zQNzHHDfEwqLM5CrwNn6qiNBKMHPpsrJsqquXZKJHzScSevxKAjoSe2id",
  "key13": "4uHGF6KNJy2vUBNdRortmimw6vsQqRJMvkLKp86qYckvLzsdbvuDdaVDJgDJX3T7gk1M8XDP79ESssJeKzY5oEyW",
  "key14": "45ZMDskeQtnj79eDTP4dAAeWkJrxRULwF7YKkpzmQe1ttkY3HxG9hQcHvF428ysnTTQHoG977j8Eaw4vAE3F7puP",
  "key15": "44J48gG5mpwpFNBDdiMmrsijcF9i7LRva98DeQY6QpUSQqrPfzHgtVnUeRt3HxYdK3x4ovkR1pWRSmXwQxPNU8JR",
  "key16": "2Ey8eX42P6BQmKzxqu3FsDD33MhVrCys2yozkd1jKd8PdJduMMex5hHMBMh7D25otYGgn9H9jHuuoHBcuA78TPKU",
  "key17": "2ghF1oYc5VBTTi8UnVut1dPjgBhZujshjUcidpGMow3MkKAXub8PdiTnt6Kf5eiSDtULnzVFNBsddzxXwxGjeaKq",
  "key18": "3qLfyojBgF9ArwEm6YFAcPXTLLzukEVqaZCzAbDYFUiExyMqBNFcLPCXiCxQFuArjYnG88G9Eww6Dc89vTEq1PR8",
  "key19": "5JLTbpfJsZaMwS66NnjoP5YoFWKDibFRrpiL1tmKTyWkS3icbpVBvi9AFkCTfcbyMoa1a6jFuheQXY87SVK8B1o5",
  "key20": "5qgAbwBHrKNwGjygt7GGUXVwrs427dz3DLSQEqGBvtq8Zjq25L8wygRj95Dr8prZ1uaRa3mSBBgYmRQbW1HAicC8",
  "key21": "gbEEgJ61jrs5kr8ZBhUb4SfHkovUX5wwUWRdCtfGRcAtvFpGvSChudXCB3ZywVWWxoDMgF6WaetB2T2AWTdd2Ch",
  "key22": "3Rr7EmmiA5zS1bPNyDNra5bgipJsXRhGCTM1aZa9p4rCNN7JfATNKVQxYTfxSvonFfMNBXDsZkA1GPX27PMGscKe",
  "key23": "5Dzy36ketyCgV3CdwxZyfJLTsVacYxPHwSpEgTrszT5bEDXrxh3AbiMy5nCB8coxuKTcft54tB5S5XzkhEieCJHE",
  "key24": "2P13KdAcL1Ms6VsRfzFSdtto7Xj1mvBtBpAvdKEvY5QrwSJB2HSbdoGJ5vG5uTmEn7RpZ7D3RSresDDaWCYhgjLf",
  "key25": "5m8QCoC8CryyFm9Vc8oLrhAmxEarCNoqkoFapX9MPRTTTkp3rEJ7Cd48oRhr3P77qdZGaCMG62vtsKoedJqeXQX5",
  "key26": "gjyjRNT4bq9nGVB8vQFhcLz4iJsCxgvtH7RHKkkR4Mw8VMDwqhBA1yUb7fCjvHmWpUXnYyGsoXA6LbWy13RvFkz",
  "key27": "3uEZN1HP5Tv5dTs1w9P7GgT243JckZHLgZSGeUd2JqrS3u1zfPESJzJYGJhTYv33N3UqFKDGUCc6VbYcmZLHdKUy",
  "key28": "5fjSxVV9mBoqEPGg5ZPfZKTBUYi11zvwZhrTsKgth2S6e56Gex6KMNS4ziK9ghtzdLVvBQLwgx53CQvBgQjS2wTk",
  "key29": "3nftuJqTpecCQoDJpjhhGh6UNBcLWL16X3ze5SMAfZ4vrGkmpmUxUyiaJZCC5xfCeTLPgrVEPoQd9FeFS2ej3ooe",
  "key30": "5k7kBWyDMktUjrGQgaNeDGQ8sEKCUWRjKgwgChn8A3JcYn4X3HFyPBRjJW595DW1Xf2fMY3M7Vpz8yr66uzkVVL3",
  "key31": "5HZCEbS418bYe9ZHXHGPERzMuRthEgCfSqVXUTY8x2FzWMdCYBXB3Qk9o8CfdvN7NxxsjF32yfKrv9x7nTH1ud18",
  "key32": "455vcPbd8kA8zDUVw1NSCjPJThg9JryN6xbarhwUm74Gc9eUScGtLpdvW8doijQgAdmdBjKqyQjDAZ2imQ8ENn1d",
  "key33": "2EhZDZjHTb2br1UhmwnWD1bdBhbCpV83JnwuiP6ZGiQ62SnBQwmT5fHM5AQE3WgKkj1t1xhotTe5dvZxAEba4TZ2",
  "key34": "hcTBEoNrPKrspkMW5QZFT65s5KqTQYDJAcWjkoHEpWfMfPfbBbVEkDSynzKM16x5W4e4ZVFLPEWvfUiikbg5sXG",
  "key35": "9TzCy7ou8DRJCwLpLNS2eUSRRh65vCfzDMrHHdat96cb6Y1rghUNAJXXmAiBVZHj8kSKHP32toi6ZLFNHG6eRfN"
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
