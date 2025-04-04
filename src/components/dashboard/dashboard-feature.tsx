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
    "53h1TvbP8KFmxuU8uxzMQWjignVfHoSRRfU7DxiNfYbgfVoZ2aE4GFvc6vTmH9biuWZ3syK7JRpgri8ygWifT5rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GanHFcGjPAXyqyUuro5eK9do8BYwopQXcw4GJj1SJkiZLJuky5j9RR5sYX2Ev3m7vw33Ea7E7m9yXN3QWtKXWyB",
  "key1": "3E6XRSBfgCZ4D3jTnwZWDRJwxB2hCzsfHUrkQUuuBxa29TS8MPuxdYgATrKp7AVzez7Ap7y3g4tv4BtvnaPfkibY",
  "key2": "2CnFoQzvamLMuaXp9xZQVg6yueyfM2r5tMEwVZStn1HZmgWzTVX7o52dYm9BrWqQVwVTaD2SmCdmJKEzFgt3NBUj",
  "key3": "5HexufJrYT6nGHxhY1M4iTten7LPHmAjpD45cTxyYrSWqgechukw4CfEWp2C7tP2SCheVaeqTYPuc5VQmCn9zoeK",
  "key4": "34rSNewF79VmTtPPA7vJp5cNEeWggw9SH98gobui4PuLUcrpGtYQk8qW4hR3t2HMfEHc1XHNfZSm43YUJYKCm283",
  "key5": "2ZwkpZtTn8iuHkxsuPieP48aBL53BHfMbbLwCeb6xqQDQhrBLZafUtfop5BDn76bwEwaAV7cGvd5ZFqPvKeKJ6J9",
  "key6": "5N1hW42V1yJdw8Td3ibq8SAyt8jAtF4MGF1dauwoyoMNGC9fjha9ArkivCcQNpLq9P2td6JFhjQMbbtyAfETFVHh",
  "key7": "cs6BuSRWAj2c5GWKRSPWvzDrLEW14XSNUJWj1eGkdj2HnHtLrxBEgfxuUTybcwdPLoEVs4h8b6ekVNoTeUFgUwT",
  "key8": "5iMtpgNYDLiuPVV6dnhW8Mv12vySbPtECX3d6FbaCdzFDqL9BTrVgCosJad24zVqCbSBjWPMXEfznbLAd5CkEK6K",
  "key9": "4PGTwLKcN8Hm6S6kBpo9TpcDrQjmPFeFT5ezC65q1wTKnpV54XzbNosacwgVsMrgCorUWdScF7hGjPtHQpjUasLD",
  "key10": "3QHg4WRyW9LE9DANQkkhA4GWxrBEjt37K6tscDrzWUvKrHr973qvssvEBATCSacapAM542udmgvkzehPJyDHD38y",
  "key11": "42eXcp3S6uyki52HBJv79fNmLejewCHLM8gAwg1VrncdBV2qb4M2JMGSHV8Kide9ngUirzFpSmJYkqkSKoQPhnw6",
  "key12": "QpqD7ZijqUKdxydh6HZsoL3W5FcR42jibe5vHbX1JaN1df2ki5AvMv7Gbow7ovvooF9E7HzfrbNFw4Q2e9fBNaK",
  "key13": "5WRsSV4FQuCFogwxcuimveJEdKwaUomsoD4ioiwx5Ux5s7EkUuQjRa4ameB4pPyJms6p8hn3Rxm5qMrYqeZZzqJq",
  "key14": "3pQiWLVmKY4eDaoQCyqYsjqhkNAAybs4eQkpyCewDw8wKqdi4FYRujsbNDN2GEoafZz8CNSo2KCkwRzRZSgyY9zq",
  "key15": "UedGax2x5gdheo3aNMwmTMVeKgCi6XXjWFggWaJ3UtRxc8bGmN7QHAyEB4cCabr2LhajAZQYeLYHy2Tvc7ryNsi",
  "key16": "4DchZsLTFxU5351LnYuXKdHYu41fra6d1B4DpYmnS4AE7s72uQdTEA41dgYXTp429ZaT8B4j4kvn7H1cawR58qb",
  "key17": "3m8eDVsZFFe4R1mHZVhnG7JiWDNZZEoufDqN2tvYa3MXLQVCPNuDooQdLYAm7D3qXVvKDaXSitvHfrZRoMeoqzZb",
  "key18": "3pwPQnd1LKHRSYxSjgwysrSUBSjFgqRynVXeVQ9s3W7n3FJXouYyjWDyVGNEexQqhZnqUEp591L6USw7oHrkbY9X",
  "key19": "2FsqiBBzAqFHwcFDckrPrmyH4pZBSdKfmioxzZXazmQwu3YqFU51F4D4etzW5CsWF6yba7Jdr4ozMYUxzaSJxrMJ",
  "key20": "5DFNm8cmsLituP9ZyYqv7q28xfX9UZ1DR3paDgj9KYCG89Sypjo6kS5kTphy3j8yYrVPoV2sUp4rjfqjudCPFVjn",
  "key21": "5DHLRYpiGh8Er1wpTjEb3wEKVDMdJWGQM8tk7c21hquZ2sFnG8SSjjnYKtssDNY1zrxcpxybKWARb5EVav332CC1",
  "key22": "hYffLjkRsUhkfrJ5jsJZc9gWCrddZsPDuYkgpydVqYodwjfgTNvhGmAjfGSZR2fWxQWDduYd1hhHwmf5QDWs9ac",
  "key23": "5BChK4cbn55zYfc1UWz3bp8c4nNT4Y12eRoB5nsAJsvzGKZpopJhCyW6BMwmJC4N9bS4Uzajj9FAxYDhsV2wpXYz",
  "key24": "5n5JrJkV1yYAfL1wbAUtNbyr9jqjKbxTZBrKc2u8PBdZphg6kxKmgPRaaNwP6JF5bfjaAdZ6dCdTZb1RsJPmoncg",
  "key25": "3eGEi6QAdzvC1FYdNSxZCc8Fh5cLu7G7zPitcXq5wGLDEy1cVH7U1khxC3w8y4bJinB4b9PRVhJFQW1nvYJdrHGP",
  "key26": "2LPyg2MevpA8W7RRSegSTYu2hqD53JyFcuT1j51vJ6axHJF875JFGpFYEM5Cn5Ettz81rQru2P2BgugayEBRw5c5",
  "key27": "5nu77oCzB8TDcbRR6BYnkHRriw4A1HawaUeupMjcnXWfnBkg9tWwuA36apnkRT2Hb7dMLBtg4xQHBz6hCebPa91Z",
  "key28": "4ZJEG5hDCnokpFPFr3LuW5un1ngc8bCoRKARoTEh7c5uAzxCtBTjpaDuHKxi2R1K6C5pVFnYG42khFe5g1DLcnJw",
  "key29": "65nsDFmSMgj6WRPFRsxy2MdtYMN6d3wqjaZwTLjpzUUqC6b4FeN41ff1YnZyKfgbbabe1iYUfazPZLhAJNk6oBbZ",
  "key30": "nL6NQ8V8xj2MV838i94mwf7rSDYduEYMAWcW2osGB891bHdXFXbwt9bRFXrMAMMUfY8YrRCGftN4nmNMivq4Z3E",
  "key31": "56265g4AnAdDPWuNKrCTRdoFhLGxMdHRCUQySc4fP51JSK82LfboKEvgGeo7d799pXcf8EvNs4JfavhKkSXBHU3X",
  "key32": "3QLNChSPhak7AuwATyah6zQxY7ShCGnJXRymn5Wmp4vyxuRHNUjQQr637uM9kVqJrmxsbLSCNPNQH4DRCa8Z7Zzh"
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
