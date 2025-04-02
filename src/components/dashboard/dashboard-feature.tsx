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
    "S4tUU9xJT6kwRpJn6VFbk3ZEwQfQ5vPWHjcKaeeTUTbCsKkTS2Bfppo9Sz8dseVW6d15zUjcJAsvWi4V3ez7KTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9MbQ9UTRDRSioVAsjAgo8Upp1BN76uDYNeyoqWCvcEcQ7Kc3pXr2rPFvXquVm9CvcsLPB4aPx6tHVJ1ZYG8Gzh",
  "key1": "5PSe6j4VvJc2a3AbwSCPDDgUY7qi9WTarpXuSo2iR3eu6Uc5cXj2CiJ3Ea4hHbY7Jb6kJxSRnJmpX6Rgmct27Vrg",
  "key2": "3dHXQxUjgiDHW4wMN7fzsco5Q1wRB9soRFwKcXcY4RiCc5rwUxkYMPrw3U3nRY3skn7TnT6Vj6vPcKq1PNP6oQtk",
  "key3": "r9Foqs85ZJmtfBCJpjHZHwie6vRiX5AzWXenvoD7RpNuYbccKKMAcNmoEmsH8Tsvjk9VjDcyLEyGWGxuySpnJ1A",
  "key4": "4e2vx13UwA5tsnjRAoLsXks21XYEPYQ5zZi4njkjs3PchjLhQosAdcNMGjpfUhabUTNqMfUVXVByxUmZjesr8aGC",
  "key5": "5wycF7hMJhDhkvD3RdmmrCR8EpvPHKEw7pjR1sjvhUbW24KqV2LodxtHoy2Wkc5pJuKuihkogLznERTea9w2MUn9",
  "key6": "CGUB39JV75aw5Egm7jug24LRFfg6DRQU4NVPq3mp4HRtjWjXARZwQt1YHQBT8HQ7RSo12AbHa6uk25cCwMCzS5r",
  "key7": "fWqMoAjHvtCVY88c4cP2zo9SF4xHrPKcNjw3oUFVZY6JU4QtmS9R6JTEy5uwcpi6o8Xmf7ynoFGwTZpBxegiHGu",
  "key8": "2feSHrGHn1BzD7JsppAbixcLZTTYGgzr6fUcAP2dV4UuzFx5uyWADDA6bmkS4Yqbjja8UosodqTr6rGY8ESrShHQ",
  "key9": "iCsoFeWhfyKQkS7R8DPW8hsZ67jLGak7M6k1PyPRa9jBh1VCAke88bejjk5zRQTXUuzU4CTy8aChTMghwUnjhSA",
  "key10": "4t9ZshDwgsSJex5kDrUX9Fw2LuESQMTACUbVu21cqvtowr4XnmfBFQjAWmK9EWA5x5Pecry3mVMp6ycFDFxKuMqm",
  "key11": "2fkhR2MFsy1esDbszvppfSfaVVpZXQTMmTeuqzGLRQjuodsK5ETCNkpvvJ9GWwnWPYXozasstPLeLcKVkpq6pdNn",
  "key12": "2DV7QmmFqueRn84dfgS7QQ5VggMfTng698uP1zEarU5Fr9UqGb1wckWnybfZbNAQn9vCUBzbyHUYLweJfLo9ZRuu",
  "key13": "48AMwQcQkWqzjeECznFTwpf1wPZMeuWdG6c9ufuNeLKEDMLCaNAnNcr6GCaAsR8jPWbRrLeAJZR5JXRgDtswbTZW",
  "key14": "4Hvuc7QvvoVzELpeCJcho47YTheDLpPmA8mhs349VDBgA7SPc5VVNqwaxSXekAt9rTNUSDVBEzceomERc8zh84Db",
  "key15": "iHqjTqfom7QGWV7d7LpCpSuGXvi7tTxmv5GDNGpGsy9aC7BPJCtpHPGW4zar4gk8dEVJqTQKcF2k7wG1yMyEWkR",
  "key16": "2fnLEgXPFiHbg3x1Gz6SWV3uNx22vS16C3enz8neDLWbteVEtCkgb4TKJS5t1ke4HCNfYC55dA3azRtMnuRT7pCe",
  "key17": "43qyHW7n3Y56yinSmoyZtTsWPYDcwByNUXqN5xEkPw2CeUhUArDSY1XF1paQtRFz7WzEDbes7sbeJDViCuf6Uy37",
  "key18": "XgPyLbHBD8CZRs6wmC3XVBepe9HJX7i86mtAKMPiGhbp248TqQheydwUqdAf3gn4SpvwLCoKb1MoFwf4HGtbNM3",
  "key19": "3WrFy2KeHEZmBKGLaancHcgCcaj7CMZGeXJbFXzurQ9h64tYFzezAyuGr7NtTST25JrwoxjMLFPvKrtw34PAwweE",
  "key20": "4WAbA91VexdMSi7tyF5ksrYjhaFkwijbr5HtCykNEVhnNxyFuKFJbLtuuZXT3h9XErJueUFm7jpR6fMV4TaRGzCj",
  "key21": "4GpMBpFzMjwHERmrPNzs6XuHArmBn2R82mkT5XCM8pJRCaqyx313gDjoCZo9w4jYrgWDZGYnVXAuCbUdN2T6Q8F",
  "key22": "4f8Hr7LHaL7acdvAGpKMuDLBpkEE1eehPEESSebY1XaWygLwWUcrNbP2hjwz7J2CVjRymgPKHdF43QpHna973XkF",
  "key23": "34D7NU2AzHAJ3iXo8TAVv1yuHLBVqjzLb29sizLjL6xMw36zfgbxqZv6HkLjgKET1cACcsoNPotzTBcv2XUKBRYF",
  "key24": "4boVhjkLodJzeBPMgah6yXU1A9qxd71sjW6879eQHafc2Cw4jbnurSX4H2ctNt5TUd98P6AsMrdyEzyfYUC4V7Kw",
  "key25": "4phswfchiV7Vjr63Y7mBNVog5dB5xfaZVU3DqWBbe2GcYLJQQynGwcANdCVwUJhkYjmGUkC1pCRhKMHq5BziHDF6",
  "key26": "KwKcawjGR7yUC7DcbzRXVWR6BBrc1YT2vhPRoE3uZSPsaz97KEyDuvzvSNeZYgtegoNtbcrGHxJARyKYsv2UeaE",
  "key27": "23JuLCSGadawcUnwyBTaUuvkJP6nVLLY1w2o6E2VNWqEDwLYdfmbZiK3Ad5zbijQdpJcbRhjy2kbKkXrPVAbPtXT",
  "key28": "4z7skYJa82MSMJLphc5oZ5Ry9e3KJsynhsntmhEG6D77RocLzt5g3YBjSKu4rPvQmLpJ2oEcpGoR1oBK9EPcnmp9",
  "key29": "3ChqH7833ekyHTpejuYh6ZM2zRADHbEkpnkQzKC6XzrNnqBw3hJch7mwi31Hy2SezxqdibxYgcrcKAPBj5iDE7yv",
  "key30": "6KbxkUR5gJbjePx7KaB33msrawphcRziD9zbFnjER7r6DBqVMWrhpySjvdMSTGG5EpoNjfTCLLprDXiPRMPGh9G",
  "key31": "HjcMz3g4kV6ctRMrxYqwaqz41riHjiJgZ3RmgGpD5hqRwm18kU7RbCYDf1LU8pygYdhDtHoedW1VRqZyVAtrtMP",
  "key32": "2wZ2U9re6po5e91ruZ5rR7UzeDp9KKu6xLALVq2sGCf7Gz2HAGt49a9JezhxJ6UVRNvrjuXe2ikZzqZnpp2JT2Su",
  "key33": "4gzX9uFmhjPXGsJdmfCAG4CXPB6mDN5dYnPdcNqtcPpfdaxyMH9c9yEe4yFGW9r9ci9EPtYtm1joxgx1FM59nANF",
  "key34": "4oyLSn3BSjnZcm5zyrnMyFvqRKWA4FkNCzBCSMaoeURFVf8RzpvD9Lk2XB22FcwYNkpUx3JqwM4Y34A6xTKqU28N",
  "key35": "4VJsAWfk2hTjkgsMG6yUSVfPVidN5mrCqD7y5DNS69cCyhKnC8JULGHpAWaNGSiHr865uC3YWp6hHd9sUYpps949",
  "key36": "3vjVtQQzFmEub8mKhBRBwZF9ZrQZZXHFb1JcFMJYj6cv9UkzPdqG2PLF1p682F6jyUP2FAb69eecQrNBKCryaqjG",
  "key37": "GYcaLYXVCoPNVP9LyAmstGv17CBPY5ixHocskmF43rYzJsiWHUPGJVrZZB8QRom6ZoYBnHPj5WqfanaZLgN87Pg",
  "key38": "3n35MPUc8yYcHf7DRNzGjYMg1wGwtduqPixkG4FajzwqXscZTh62mR9PmPrfm1MttPQySYdP2V5cngsqr6UNQeid",
  "key39": "2tBEa2RNEWqRdh75hY8DbwWD5hScgJdd4uWCZDJTz9gSNnFhmaoerGWnJRoG81n8M5PFKev7CNHfF5rg3K5AqSjm",
  "key40": "wexvfRdJZ32yE7QryfyXUivsekgPzLGXiRtEL49G94Nzi6mAu8JPjH7jhjXv4QSRaA3pebvKm3Epi8k1evxEb4o",
  "key41": "4jM2mNgnkrJGD7teq1RUYCSa1C8AdfWexXcakMWBntSXFti4ScD6e7nKNVJP1Yj6RByqUNGzmTuhhaHD91ucVfPZ",
  "key42": "5FE3vcf5N7TfpLNBxUCnPuEb75rnahaBoyT2oWxNQd9FxcTyxFmJK74NDf981WzQ3ARUu7E7VYApMnFpqSNzAVBG",
  "key43": "3bWkh5PLFpq285KeUDT4Jpxj57oyzmXvRKqhsa5qPhgxQxFFN6MMKRmu6Ai47AoM3DCvfKE1fe69EGEbdC3DkhSc",
  "key44": "3a3WYFikwrKeptrcYq9Vk2sDunygFQxBMGcJZQn6raNNZe5iYU5oTVtXU7gnDfnDX45fyBFn5kirSLDH8g1aJLXz",
  "key45": "2AQQPWRZ99BgpuGUpSmdhkQTLRnu2ivtfvdLEeKUoL2JRGAUqfgxWzTiSGFAzwbzrykRMP9ZbcQWwKnCKgG7oUug",
  "key46": "MomM3iKtitkbuqZCANd4A8RwzgAVBTjpMAsuqVPDC36K3bxoWzCK4SdGznbkyEj3JSiQ9Mj4bhvAuZAB1dcRB1H",
  "key47": "5iwU9ujg6QhLjGZoDK3zkNiotE2RfGbioRCde9BuoDbakQZtgiZdTvckH4fJcD7cbsDrqfscRSAnVmbLzUE8bE87",
  "key48": "3zkJTCTLXxYg6N5NNug7gpK3JDjz9rMsEdmY9kZTKQrAFz5R6KRjyhU6pcUodZPMLVGyTgp5UCZ2UprXc3CuL441",
  "key49": "3ej79sVjdT3zr8zeVCKKgWa77BiAN8Ye53LPY4jGtnz3xtUQLW9PhXkte9x4DGJcdT8JKGtxp8xF8pQfFY9B7Mq9"
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
