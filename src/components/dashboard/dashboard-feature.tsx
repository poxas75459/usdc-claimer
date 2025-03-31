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
    "5ARYEv7D12HxMrmoow9deuDQKr5fEbspPbmbXvyiyzHxSfLS8UkhBWutByeTUqkZRoRSngxegPL9hZfPhPa6eXE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i73cE9oFUHQTgwYodB3tT8WNypSmHoqoszEnXfMitYmEwDMktzw5jK2PCLZiYevuxXdfnrGSTGsJDLVKG1oN9oZ",
  "key1": "3TrbHrytYCSGExgUvdkEdPoM6Kx5LFm2u1CTFxHxZu8qqGaG7vff9gyf7zt6NE48uDHHpGMPKGiAsF4ExfSNnW9d",
  "key2": "48CFaBZ1wC7vumXDf3Roiw5kSd6CnD9pZA7a6FuwCTrWibYR6UGhL3QSPbFRdR3ZocQ9nAkBRUf6ftKCSRUx7H6F",
  "key3": "e64Ew9yy9wUe8UxMpxwg4NZL3qZtyjNazbPfZv5e3VVs3yPe2azxYsUXi2YE7zr6ojcq7djPmxpZKgEUMMusqYP",
  "key4": "3GqPQHUYxTJ1WWa3W5rR7WpiFhLTZh3Veqv3pxjsThZSALwGNrYCSqfvuonFwFKyNWXcsktEJT3prGb2RTaaR7Fu",
  "key5": "3uw2z2ksCJMxDxyQCgCmC5eaKuhviVSjAT8DcsGvrxgx2Pztd4RrnpEK7h51KvU8P49F4cmhwSr4fUGocxz19qFF",
  "key6": "3peiWrAd5o9sSZDMbhWvzz36eU7353QWBpKZzusMWh6An6ACEUFzo5zavbmiMkiaDuZ11RgmAYY9EmsF5KvNRRAS",
  "key7": "2aN4feeVngdLEoXzz9YBXfG3PjrnEvDr8rtKgX7uuRij7yAWUrYKZM9ZUfWiSKMQLiAzDXd6WBgrDPwJDr5uRUbh",
  "key8": "2nHWmHUWeBa1oFRLCXDz6HGn7HnTuF6ZFAMWXqoxsZdvGxSonZU5SmZtb5KaZDDe41Ur8BfS9EK4UpgTAnX9yXZM",
  "key9": "bFEyoxVpZSNvKiXm6kqcgjjFRr3SHojWW5keuSaNUzFrsYQWiHWMNgbZyMic48bCHXrF3QsDRUEZjU3jAtZgq49",
  "key10": "2bfrMXTBBzCSMMAMoYzFMY9ToYjm5LFTZsZDkdECgEZeqMbEiuLZZtvBULEYcH5v3gseAnzhK1mAXxqnjbsa2rfN",
  "key11": "GkpMCg3KjYf2v3AaAMrZhYvSbDGpA9fewg9L7DFbQVyoVAZ8wGmgyrv1EVxd1oyvmm7iV7UnZ4XWiCqw2eJy58V",
  "key12": "2AGbZCZBnvXMe7yrprv4FxcxwFfanRezgqopynkJCAGXj5syWu4PZcC6zXicHsrkSWNVv6hHjc2E4UD3aiTUgpaz",
  "key13": "5tLRtAoB8rzQ2ZPVCprxtYjCNKysjMecLfngDk5DzRDRK6MCrVtfukF1YmgsaZpXQSKvZCrAxEwJZuorvUcVrtvo",
  "key14": "3Z2riS7VQsRx9rw1dB1EerkDAnJBw1RSUadugyaEqvH7KKeyXYq27x6XEk461C6e9fgdv3JnF6mZRY78Ygv4xB4V",
  "key15": "67rn7Th6F47zat6KgZLrKxHnFUY37iXcjYtbn7TUasWxruEJQRxi6qtBUBNXbCGDwpJC6nWT2dm5VkCM25QP3nJZ",
  "key16": "5T93mBfxj4w88x5YDrsqENUTjEumnibyYymoGEacVZarasjaXwua91MpJoKVRcMGfjtWmiMnhqwJuXe1ZpAcpuyt",
  "key17": "3YCBs8mnDKv5uVZXrFFMN2CvTXPnZZRFWGBTSzkmUUbrjQwu72wu6KY7ezEr56EZTfrMJCzD3AbVmK2GH2n5BWUJ",
  "key18": "2BrZ7cJM9E4f5YgAeV5VNGMrXSpM2D34qDsXzQpys77fpR3FJdXx2CDHAP17K9XRgP7Hw3JGtnLkKbLswU4jw2H7",
  "key19": "4buKhXYLKXnJyg6DJcDkz9bHyMgNsVUVEYmNvXM7z6fT9Ux1UKGsAwA8hkuA31pW7tkEKiPHZPm9EyvM5Gu8HGq4",
  "key20": "3Znckwde27Sq22NnrDTVoud8Rq5SpxNScRrJt9Fs1WXJEpAWrkS66T4fPezh3KLuFD1mi2rSv9eQKZ1TwdEQpt7d",
  "key21": "3txjkcDYL8TgPA86CCvA1Vxj1QwMuBD6aitVpqLVFcGWCeRhfoA4e8QeVgNdjfrn75vkPtdvVg6RG88r2s5GjaRb",
  "key22": "34Sohtor2hqQxHfnSuc74HxuPN9nzjAEiFUazU6sB4cquFivLVfnDSikNLyqmrggyqiJ89yHXsoxDbFc15HNhhFV",
  "key23": "3csef4JiZjEzgkR45pLHnnQ5Xsv45C6e6LHFoyFPfZY8d2G3biR7DQvGW2KCPFz7wRfskWEqCHHcxp3t74pXTkvA",
  "key24": "4ToQ9db1kKesXTpdUH1N93PeMBszrpcyYT4fuhRYZTRaWuhtkkNGrrcnWzSwDN4daiJC54SgM6siGk4XAyQEi98F",
  "key25": "61rEVTxjtuCGetXteuHKZK2GWkna9CyWyXU1E4QR3SEnvSzqfip7M4mbjXXzG9AxVhrdrWmZVBVto6DtL32kSaaJ"
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
