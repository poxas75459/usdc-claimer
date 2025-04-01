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
    "4jb8mBLuXo6UFRR44SrqTwFbPVRqwRwj9zqhSutHkEmArbRQ41g3L3BjmVxV4FsvqSrS5gEH4PgpEnhw7ZDydRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVLhhhcQUM2hGhQK8t8DAySYxYFiAmmXAQRSNG6wgsXF93ga45DTwhZjwtGKLwDipGgDiFKm9Pba1tiofg3CNEK",
  "key1": "2GcuVDtwLbkWMH3hLykuG5BVEzFW6xgymHSE9ZeQJ9pT9kxp65LxNvDWdP4wGM8QxG3UxmeDibnth7x5CVAXnAc1",
  "key2": "4jrnaM61YoMscxFp6kJkc47qpkbuejWJLwFU6YVNkxawxB7gwcJVicAKRAuvqKiRfED8ywv9hXxKK92y2FLCjzwx",
  "key3": "3QgtoeCFeAQ4AQ5Gxsw7nCF4QcKVKKTY4xW7jki9XMqmEfCav8EzsUoS19evxtvNQLDdAAKKby7QTy92oudMhzUZ",
  "key4": "DknmdrZ7kyhTiTD3nDET1BSbUctaqRsQdVcbBUVsFKVQNhARbWAuxJemo8SnNaH46XbFw4kDKz5F2qBSVCLWa9F",
  "key5": "5HAskPKbNXzHBcD7YRmdLPUQrGqZKgWs6KvbxkhPic1Gnvgp8RQWJMiHpBSEkffYCvsBpJyA2A4Ym3FVQUTwy9AB",
  "key6": "42aKZ1dMWTbtqT6zYWDevX3ekGd9VRsB8vEYMdDbm5gSN7VdUt3c3h8iumM9gMGEFrz2dCDhN1xkvYxt74SdvhKv",
  "key7": "2pupBzn4borUfNZXgDt9atrCCH21ttzyACmqAjiyjiYtiQfJYN7MTCFbQ1LgETFkaxyuiwbTeYrBzY3JpXrjjt2M",
  "key8": "2pyxBJZ9eHJCFtEi1MKp9BpAZU3ScVk9BQa8PhWbhuSHKXFG8HstmFAsRc3EyT6ZbRitgq2rVcHsEk7b6tfj3Xae",
  "key9": "5QvU89Tx8qt1tbWzkKpZGTuf9jZdcN5dmCU4HoKpS7tF3JMKXtSaEoAL4nLbGUEHnjkE7My1gWJ3bgFAeWCK6WgW",
  "key10": "39z42iBuG33w9H74iMGFwPEuWukQC9rsqX3Vi5woibQ8PhE99JvfbiWZL2SfQjCUS7eEPwUrBBcMAzdAonPnGa27",
  "key11": "CaPuEDyVyGZmKjebYtnNSrJUJX2KkSrv97m9VurUuCYBWExeVzsoiVEr8aYbmD9uDM66zA6tJTmyKGKedSnMvA2",
  "key12": "5SzuY3Z9iQXSrQNEn7oLKTT936Bh58E8sZp2gQSDkG3bhVRjFxPh6axceNsRB97eHpSZyg2GVgk85ruBEhzjJiUn",
  "key13": "eXX5aX7dKznKUX49t6cBU5oj78jphfuu8EJFNAESXqrwCKa6s78JHTMBBxX5PrwxJ9WMgcajmPQqTDGkfMYLD13",
  "key14": "4guB1A6ENBKtaFL6cJqBuEQERhD5d1khaVRMhnbSg6ANzGpWFyNeEMUMNjTZuuBaG96JAFAxtnk8xDkXyuu2gvQh",
  "key15": "DyM16zmkmFpK7zcMravceEA8s5kzgjAo92sWQPoQWHMuA23bk3W9UE5r2FnApwp5GGBm9oDrhrKgkmcpdiXu3Tp",
  "key16": "46J6ySyhQa6YW43gs7HbMKKKfTT9145NprATmXbu8uWBZArpuoi3Jigt3w2Kxo9zCb8Wg4Xd5bmyhcyLVTD2XR5p",
  "key17": "4zVeKsAGwFTrVnyGKwwzLYckgH4VzQdQE1gLVnm6ksmtvKvKERm69JL7ZWpWLRrg5hT29H5WC7euoMXdUqaojwvU",
  "key18": "3Hw2ri2DDmASoBSeGAme9F8h9sEKSRqPQ93ypUR7ABdXBxFap3JZknNQBqp3hyJjiGBXL4erDfwUJdUAS764dzJA",
  "key19": "HvVeSy77iNNGCGnZQeoGXP7pQLUg4Es1aZ3kL2rJ52tLT79xb6623Uzr5vTsAYZvEUgQdf3kCxHZPX2WL7Tqpp7",
  "key20": "5F3rPMrWCTZm2WJHfai77vdzxJGe4CvBD2AbKHZaFF7R8nNzn6HJwBa5zEmuzHM1gKM5xGMyjwfwtzECiJugMMng",
  "key21": "3pFFgSnK8uJDy8E6uB4mdUk8pwzCaoPkJMgst5uukj9TvJUhDYXXKUwPy8kTk3pK2hHMnuLc3B3E7MD9TYjTCfFc",
  "key22": "5f9zyWCERvpPXxQ33STjLTwrCFST9jrEfUg7Be85xXVEMUmZGVqy3RbBfJ6GAFx4RW5tKWG3Vqf5JDYsoVqboGVt",
  "key23": "4Znax9QW4ajEfHyxZEYCUgCKmrBsNgzSmiQptm499DoWt1mP75pajG4HbZbvpHDcMjM6ctjsg2ZnkfvJaeAUtjzM",
  "key24": "rCRCkBXQSz4ngYE1nfMgP9rRaQMGmF6rCd5EiVbGhNJoMUeA39pWtx5jV1panYweHTvsAPo6N7zmVLJWWeuX5yL",
  "key25": "39e6S4V9KqFpSpGicqCsE3GXa8533ZrEoLyJM8rqRAutYiJWxgtqSWMfpeBNJUkEuphxZ5Zg39N5CSN8Q6SX8TRi",
  "key26": "4ZrayoAhUSnpUuRy9DwPznMJeZWcDuENuW6R4PK7Lx7WaQ2FGaZDkREarYmgqJUWiyExAH7qaGswYSdnw31Uswox",
  "key27": "2fjFKDpNVWtkZLQnJvpQbwGNuTaMP4LedEWLcgDELpUJcmCVed79JFbaxhMEB2Xo5yukJcresDQpazgAXmCRBjCC",
  "key28": "uZ5MV5dvoiJT81aW5PwzpWYe7zknL5qzVraq1fzZvGi5pv28Rh6a7pSko53u5DcdXdLxthoyQJW8aKhSzSddZgB",
  "key29": "2DCZQhSPAUu7kigNmCdsrFzaauiMUVZAdfQ6vngQ6hYf9c4cgKtDcEzis9bamfvogLdnSc4He75YxsFKfizbq7TW"
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
