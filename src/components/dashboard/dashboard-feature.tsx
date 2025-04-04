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
    "5bMQkcAg58WHv5zUqwoHn2Bv5UJ7YqtbJUiWVk6qcAZn3Ubap163x9zyQyhJJwYkZU7kFtf7BS5zernZNumhje7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55FeWaoVP6zaX2vgfTsPvxv4rE1XeoPfcZeqLmi1U1HY5hRCXFaWLnxiqmZ7TfetW6UDeJazCSaKcWdRhAQT6h9a",
  "key1": "299mGo5i8uMipxQBzoSh2neuFkgbrxCj4mCW4TyyjJKgdhNtnknijin7gm4f5B9izU1VtLBtFZwV3u3WNYiyG7vh",
  "key2": "3UZgmYh5dbBtkJLq9NwPdLSmGagnkJ8BtHFg2vVtUtjfu2oMzsztBS3yRCqhiR4PWrhhzzLMcHANiRHM3y5bjptz",
  "key3": "5MZ3hFRBYEErp4Ydn9SHC9zwyEFEdaXapFBN2BfuQspq1fCCKMNeR5haqaNWEG8SLCgcHRfPsPBQySq9pmF24ZCU",
  "key4": "4QPZnzwzGs5ULw4M8hfoexvBw187jGGek3vT2beyDbPQGjXVWactsmxTFJG6W624tL7hDv5E4Z7NEESwghMSj3uP",
  "key5": "4KGcGRPGKvLq4sYeAgS7fmGq4rnXuns8ZsSeaff5NmsBsQJzGDVBdiiefvM4UkZhNoW6kd3v9fnkTuMc4LNppfFd",
  "key6": "2Hxiwd5ut39cX3tAWbzd34NrgBJ54MtcGtZmZjWifSMB3g1NjNkHDCv9uHSBHWAB21uwyuRWicgkVr9hKjVDBNBA",
  "key7": "aoWANFLx3ifiVt2RkGWpiBMKR6A5VJdn1gxXYmSViF2YcjwRGa2dmGZVSCTtPdNNhbuFAhZpMbso8wWfxgHv3SB",
  "key8": "5xtvcpc8MrXvBz9geWUQpMMmcf9hzRqJ17U3L5k35D6CCxwpG8rgsJ8xFafEWLtgxKsbJyNRwsCAwUjbTRvV23cc",
  "key9": "5ANccN4ZNH7omkNqXHy8n9FAotBLeic1GxuB2UUGnh8y1Efx4y2XM7iptYpXsZ4XGmx6zisxRYrYMok2MTwKewgs",
  "key10": "2AYWUWpFRWSZUAZsJWnoFXA6wJgGQvKxPEn7sS55jA2jgu9fwz1UyyFPRNf9vp8Eoa72fikEae8C1ZJQvwUSvsMq",
  "key11": "2DCjeE1njxW9kymtCTxWerYvScNZbTGSvTHdcreV9MqDrP8FURazqYexARQSdo89TXr9XAvP8ckyxyWndPntf5W3",
  "key12": "2N4KnYu5E9Q675TQc7bgBrf51PqS6DqmfWe7cqFNid8NCuPjhK1qUDnxZJYFgXqkV9vWT6DFLadGw4QaadX5cgu8",
  "key13": "3J3xERHUytcs4jNaycqoXxe9xQ2BZK8JhdGQ3RK7Cf8TU2ax9md2UzasoN3oDkCTPGvLE8q52UnFbAyFof7h6jzd",
  "key14": "5FAeyUYNS67u6mkQxdssbLW1pRc2ALSoVzHgbbsSFDY1pDamR4EJmVgAtPNiciVfebjyownhtgrDsSjNqTpJ9cDb",
  "key15": "4B4ji2hNt6fcK5bpTQzpzBLCxfSBnc2zkgZvb245hacaY9BRgXi7Tn7n6VKZP6S29RfPUbkafFEFxbupsfjMZQep",
  "key16": "2HF28fKvf31GyANRiYUrQthBWArGxKseDdjKQWiKN7EcUJxZQYtYon2163HAvaYm4YDsHw5YgE1L1qaYZEucu3Hx",
  "key17": "3qkHwdo4BMBYhEjsovRCXgNoKpQXVRHra43gpggg6FxC9ZgQCUDn9HNo8acZRwtRQZgHJFecK5miTmhFnu9D79tC",
  "key18": "5BucnWZxSvA7aioSxCaTw4drXzJsQ4gTkWvKKHjF3buRXDoAU9xnPJL171CY2w53qtbte6DJy8UfwqYmLzz9RkKZ",
  "key19": "dB1pBLtdgpK15gaf5hCj3ddLM55YsRJuBFUMwyg6C282YtST4wpqTQzZ4osf1onQF4rjUfcGoygS7ybb4AWY1c8",
  "key20": "2qXppEt84xrVXHJFRgrBnnyBREXSGhgAaEvWz43oF3rwDzzCmsgrvCbxTL1YuS5y6GVZ5HQAHLKe5PP4VixftEbs",
  "key21": "43R7eEazw25AGyE5FxF9XshtXRUmoSfUogsqveDkTpPXaD9fwLvjUT743QK6hdku8GRNKWCrAgPHYFaNxS9t9ZAK",
  "key22": "2RZTiQ7aJ1oypmTsq1i58WT4VotPEqmhk9xRTRVAW2NsPi2DfmNNMVzVGMZVrATpZGHGqZ91rgW1XWP4ZGWuj4mn",
  "key23": "2SbBVRtL2XAg4CSLgVR6D3JnL4eNXKxYXTS1nqd9C6brFcTA9q9MY2kDQ7grenDLKhkGF4taG2UspPpd29vH2iCp",
  "key24": "5pHH9PfJFJ5DRDRkZQVP2fZaudaGdLnf8nppnK5H62YaUSbyWN3HGoDrGiBW9saesSBLCRKERAkWWXFcHbPxpLJd",
  "key25": "4FnQmpq9DjQQryzCpGiBPGjsUJTfxZxj8aowXdTUMQDFRT5KbjeDejbZUgu77sNGbmcmRHKnKuNrxYuoS5hyb2Jm",
  "key26": "5Azw4RbTNdMXXzDLjaEurpyEJkzoyAaHJyUR7JuHNAYGe4LXeDsnyK1i1apfpFahCyNJEMsDMqtdnzb8Lq13ZK9W",
  "key27": "4ycWHNy2J4h1kMh9v66i9qnyLizZAkD5rxRa2HpqmMEQK8iXBuboUR3uf6bfE1LSNzAWVHWcmYfmHfuCLcp8J9rr",
  "key28": "5xyape6kmBYaGrvnD59HB2xLKWQbk5vp3sWN1nSgZGpauJaGNe6MuYLvDZSAjsMi62TL6A91Ca8rusSPgpVhgYBC",
  "key29": "4PvSYMVj9hbVCC1QJaUjjJNk8Um3gF69uo6S1A6jvdJAExkLntaQULZDKnogN6Cj5hmKAyunAtjTgCPw1aZyteNK",
  "key30": "4YikmcCeHbi33sdGM574wH1QbGD2MCWWBRAM6KqUBCuwPLxZHLDEPzEDczgUFdcZcuiDEtB1ia1tbfquZ6i9k8pY"
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
