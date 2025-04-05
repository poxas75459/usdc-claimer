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
    "JwxLXm59L2owQ1CwtP8uY8pvMmx2MgXTjgEFi15CwbJSRokWWTrbnwpBaZpKWL5wQBD3bzXDSZ6UTXwyQrtEJY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YaUnZAq4QxHwH5x3RiupmzFFeWQcBWY6ogRkEzfhachnDmos85UxjHJ6BLvk6iaDo5AHwHNtQV5jEekDPRzF911",
  "key1": "5WBLLeWbsKgkzRKbUvvnPFngUaMQ9brVLXbsCrnHHqHrK7jEJ9w67SML4J9GXFW4cp4Bf3PqRLkPaMT4VNcrYgKU",
  "key2": "4kJRUozPYzPifn7QdXXoA5V1tvWHtCuHK6iJLKpi4wTaf3DYpvLYBrfLHZV8E7PvTkV7nyRi3KStvRYvUjzdH7b6",
  "key3": "5DBu1Tmnufzum3vn57SCx6wxUEUJXZvJDe3XaYzkZ4F8NBnVZN4Ysy6fDzRrS4LCsuzvwt6J3T7oax8u2YxFjNSg",
  "key4": "4cUrRiEMGGpFgPpdHsSqSFL9c5E27Rio9nfmwYCWRFswi5qffRd5eMpNJiVd4TvEK4esaPfRsQ7vauBbi6XcWpnK",
  "key5": "3cPuoZZPvH6AjXaLcDP4BKuuJzQ3QFn3R6TG1xSP91CWUA5ctygMcDiC33KoAEdAXN7EpHK56ZeZQwocR9pAWeK8",
  "key6": "viPZvNL2QeSk6TqvMV2JiMA8wgdLWndqdo8ptwFZCr1hT4VHL2Qc8gZctLX9W8LB84HSWT1DZzFPcMZSu61K9g3",
  "key7": "3pzK9aHZ6WCpkiNPztJk2pZ9Cn3oJ5CbfAR9qPbv8SVsgMarsu1PCn4c7aGz1Jpog5LqEsv385BuFuYKM5Sq1wad",
  "key8": "Fpk9RcfNUnewzNWicXiQLFBn3wYf9AXWSp3RacnFCZoHLYu9oToBLpewWwoizSdPua5EkiQ6oyXiXCLA6Ht5WUR",
  "key9": "2EtfGosM1kLS5zeN6Hj3Crf3iG8NqiMwiV4uvbbSzLJgVD7ruUov5iyQp3BWZWCFoQSy7zANyW1NvevQccCM8Niw",
  "key10": "2fxBcj7aTFB1bEw75m5nxentWJdEKnLgi2udE5HmSWUnnRf7uFGmDYEmiZhTRm1f6xLGqiZaiGK7ioh5wk3cFQF3",
  "key11": "e6zdvbp5oMAZ997mVQ7feRuKWdLxpNLvSFa8xxpMZCkYVk3zgSKSTvmjdFGB1JRMMqLD24i8anmkmueXMA7wrUG",
  "key12": "4zYa3hV2hJaFEpJ8puptKGBYeHMr3BQM7AHPJEq4aiqCCjsV1RCAvFRGW2qVEpggi3iTEkHqnvHkX4yufMVhUFm9",
  "key13": "4sJFAmv27cwbouqc7xhXVwP2SETAACTRCwtQtd4Quk9ayrDR3x8776KEC6fxezGqgjbHYzUSaGgcTLezWMgRGUbe",
  "key14": "b8YiPy5nVNSv3XdeW34YxnSDwnYEvGnNnAtRpoM3eFSyZDgSiHe8saXEwdL5WtC1RjwE3aapzqZDi7xpkup8Rya",
  "key15": "4sQhVrEHb1aiRGLWwZpRSqB1FGXjT2FkJ9ti2D71AsFFVFdtb1ZjX54npDdpxkqQvrSbNoBiQMoBTE28puJAT2EN",
  "key16": "5WXD44t9Ana6FYJxHmxUpBYrJstkCWGbmzNFnTKAn4dxFwuEnoBfxtjfRuoMhAX7zvpEzV4szjt29MmUNpzv3Cat",
  "key17": "4gnxrXmkb6otTywCK95MVyiFYq44bt6B8sdeoikBtiyMM1fqkT4iXB7FPcvnYirUK2ttA39QatLNbNADz7RGfTmE",
  "key18": "5q8hYxbN4mUws3zTjo9rz1Uav3aucNo5GqgNJDCQAP88c3XEZDwwtj38NnnmvH1UHPr5eq8of5wybaEbmi1KHPCW",
  "key19": "54D9dusp4V3eWewd98HN5dDnrfGYQzy29vuUiBGcGgrvfWMih7ZoLw29K6SH5VvQgkLSzT32L1AGFGfozzjs2B45",
  "key20": "43ox1nNniVDVpqpbJAkE8v41Eh6vAfvsiCn3aKt1CzBpwhfcvyShFQhx9USEZ9kehqB7PmmjPHaom5f5DtTV7y6L",
  "key21": "mLcmhATpeTdFrV2a6zkczbriHGKYqpobbcBEQQ9VXVeNKn7ibAh2CrRBvoVTykCEmUHquQa5FWyWRabGp3Bwhai",
  "key22": "yPuTfxiGY9iUBjcD6rMRj4LBs6k7gyUUYsteb6TBUjazvTBXfv8gWoC6G9UWdrUf89kiUuvX8hap3MYaqCpumFc",
  "key23": "24HNzrDSGJAD5sw6fC1Ts4eiivskDq51T7ud2NR1E8jtBGjkFMykWhLqA1LuXWsQJ28pqhLAaCCLDNmmN5haSJKr",
  "key24": "2QAoa5gn9NuhKe4i7VqN966qfHvp7jmo7uTMYNDGAduqBzDmTutFxpRx2L1kxPy2nhatE6BPjMHGrBN4auFgJ7eG",
  "key25": "38XYbpMqwPuwKMQKuxtxU3dvPryD4HxWgGHvPcUQ7zP7NBvmDCu6Ps42MSKaJA2N6LN6fGGaKiN9ipDBuWko3qWb",
  "key26": "5e4HenafhA8hca6Y9e3CGdoWfFunYTFQ1EnCqTCLJZhWhd1UD3VzYdnk2Ktz3ejdFU1CsBqFJghVjzwpc5xa9JJp",
  "key27": "5fUihQFWXCZRnujVH5muwSx2tzW2s3jazNNay6s9JggTjXG35h9DhLVeXcXU1DbSXjSYcpg7NZaKwiAN9Sm39W21",
  "key28": "326vB9nw3GNYYgJaqpbTedWP64jZT8Xiewd17WP8LZdmsvQuBim977jJHavTySzegHmNB9DZfibWzZkS2K9i1z79",
  "key29": "2epPLduSNXMroJX7aHeoCyBjyndDaNf6edY7veXGF7wwtajFdjxCmKZBUkz5qYtstpeaU8XSUNrg4a47zZxJFkRr",
  "key30": "2bqcQKjfKzkF4uBYhgev8Frk9Et6drJSCjE8AP8s4ShiWCkNjcFtY9npDQeTSQD1cH6xEDiq67Tua5cGtvPtdaEs",
  "key31": "36RKYqwDswavkosGvdr9V2tFr1DiPW2FFnjhPcEauKjHzb9BCYEcdcm1j5sjev6jisx5iQVqJDSxa43vv1jgDaGL",
  "key32": "i2MFw2CxMg9itxbhE6LYQkd9KxwbT8CTTBdHr9FNhKdYYGyrV7nkcNzxfdu3irkATSkdePRHqhfbU3KpCbaGhGx",
  "key33": "4W2fhJiXvGbkRU7wjwb7cbP58ZYmwKDBUCD8NGdz1YHQocFjchwvbxcTQuT1VgXQzzRmXiabeubnBm5ZWuTaRMm4",
  "key34": "2SCL7qpaWceWSmY2gcqdjNk6YWp7gTNL7MsAdsnzXdeTEX6sJdmZQNA1eSyiVkUvQ2pVY3YNH48kEsrYeonwnNV7",
  "key35": "fmNwmwUn6ZsB3jDvdxEbq6Yz5CutB7aDSaMAG4iEMcAzYigJECY16sEyLExbGeBnd2C2qwJB9Wu6GxRKbLTYCx1",
  "key36": "4Nu5QNRNgE3keQim5uTPg4JvmVymDoQYBmii9XC6rpW5UybXaxf4uJBRTzDTtaeiLVztqUEsNsLbMrGXwDiNBixw",
  "key37": "3cztY5Bmh4BVHbafvkPw4tv3cY9WjzY9zqWKoaPTSAxeCKs96jMS7HNHh66gjptKXYzNg4RxFGXGLY6921B2zvSW",
  "key38": "RDc59WpiSJbt7jDMKzuQ4CKTDgc537ZC7498urVc8LzHXAUnmZuz6eAKaS3ry7SF9ibFR34EHFDLyXtpwMVTR5y",
  "key39": "3H4vLcSyHUxSP35baoR3JHzbqRfoWPLUMWt19TJu9FwqxHUr1b59xqLxhDAj3SU7JryNBSbR4bPH2szPTetqCBsH",
  "key40": "2FXkjicfUn9fef9Txr3YxJaEwP5YEkemkMm4quxJHcowWi9DHNn9gQhuqzzLPjtuuqykfE4AFQTYDNvnG9EK7iLz",
  "key41": "5vBQKxFifeJkaVLmz5swmC7h2dPGpPcwwo2Yz1FWt3C9qXFz26NBHjVtp3oWePcte7iHQURE4EaEuPYHPRbvYcgy"
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
