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
    "4c4wdB6uq4kka5zKGTXCHx242ePFBc7VydWLepxFA4MYSqbor3i6nZcEkhh4G4oc9pXUrFVWY116NvESsc3Tmcyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TsZijXtU5CVAUcQ3MCt5oRpkqT2LcvpE7hwiKtaK8hUs9qi4rjioTznyaRMu8XxYF8aN4agbuocaKnrTAsjrfUf",
  "key1": "VScUrSn5sRznPTsHDDLeiNqLFs1JAi9TzZ6CZCL8W5qRLA3dgE3kTKXQNYX1bBSYmU7EkDdHwK6waYbTg7mzY3K",
  "key2": "4i2rSTNtVBCJYT9aMMGq1EumLrGCBrdVcPsLXWbL2YeBq7nbihpQMUjG7qsFpXykgdzuHtAGrETcWKVgnszJArSN",
  "key3": "61AucEizgBMiBqEVc6ctaHeinCD6AkMGMyriMTGcBtMWVzjLjPMU5ERG1jgAhyq3xjudFZAgwbpVSZb7gTa1v65T",
  "key4": "41DxTBGCE1BUkUwPbN3G9URF4Eee8Nmu4xLYZnxYEYq8r3nvztBDsNdVi8WWbNc1Pxkh8Yd7H1fjD9zvh3r3DyGu",
  "key5": "3At4M5fFvRhnYasjcPxnMXzaSPkkdWWotWhuE97K4vAECoY4CMAxoGaZvZdKyMXrsdKPkw3aGsixE7E2ZbCetv3Q",
  "key6": "62NyAe7MHqbnmNRBBAC8CrpsGS5Z9kkXRKJo2SZFyQ8mTqbhaRDxtz19vswnBM2EsmokeCaLVvPoEu9wMqn1xz35",
  "key7": "2F6agN7GgLBQPhryESw4VvGKhMtvLuBeecdXiqsxMAPEswCgu48gHVMLBeLvjSRBLSWTNU8MZRUce9KoE71quUwz",
  "key8": "34zkLyYoSDEpBWLQJDAwxFtEZ6Ln72oLCMgv5RfUNtAFWKPVePvKu3TDFG8hWrixeqXEQPFXeR74HNTAmGgV3i7B",
  "key9": "Rm1mdwVWWNJsBYdCkhhDptLBhjXFjKk8n7LNMtUFS7wv6s45Hc3tsWGH14KUNSGjkE2UzWLsnVknPrNwwEY8Xzu",
  "key10": "5E3XVXX3i7LrQkUhHVRPH34rYMTdYcJnJttoVB9ZaeA9ZyJ1mJHxTe4XdsHCHPcgBxbDyoe4QVGzDHKag6o5qmQW",
  "key11": "4LVPHeozTA3Rq3D5bDNNe79RyucuEksPFvzbjroFvC2MM6QbbTST6WNVWCFNVNAN7gADr23CnHTcVAArjdZ42nkq",
  "key12": "2FMc5j5LAXiHmkVZSZ8bNK5tHSL1ifBt7CGMk8TEVjn6vWqrkKXyzzd6CHiwHVzBChApTXgszL5rzMXcj7XtJ7MC",
  "key13": "ERYHZtkgSsBGJbfhQkc3NZD8yaRFPQNyGa3fe43jT3GLkchQsESaqFTnCCtQ8HC2LGbhd4bYA3hENPCjpoCnER1",
  "key14": "26XpGEpejXP27CxZ2sxRZum18mgPgGaHVMDg19oj2tJKK9jPmm1iu2Lt55zw585TqQrzSVy5RigCUpCX8ae2LqHQ",
  "key15": "4Ee6oE2cjtorLrQn3d4mMNdT1Hr2ZMWYUgsJiWH3pUcGXL2hbrQYL6du9GN9DpdWAkz9MdzWNmo2ZbXzupnNyEGu",
  "key16": "39BnZot7JcCrq72Et3gjGsdtYhnPm1d7Pn2T2e7GqWYoCzmfzNXx62pczv9jWsVtDS3Hwb1FppJFxAbDZiYcpu9Y",
  "key17": "2A8kvdXA3hMknoaP4L1FrQAQXWEYA7at2NHgHgsDCe7mpwYa3fhXiCsSLEpyqr8VJ385aWsn1N5j2dFQF2cRchZm",
  "key18": "5G5z8CnUhC6qqsk3iYi5P6Ynuy4tz8ktTbhqbqTb6Ufzxo7UPYoTYn3NZ7VsKN3yoUdimUFmxFwWHjT5yJ5mAZzi",
  "key19": "2DgU66c8AcMYGuLL5Yg4tr8JoauyjXsKhoc53Tc6dmR8X5VH12aNMuD24nhGirkBeeBAu7MXkAvxj8ZXkYzpKvih",
  "key20": "3vHu8EqhdCjFkj1KKKCCEyjapPtcU6adXQWDbH1Ng4UetLxg1pjayrhoZY8qZHURaqdVF57Xb7oNkjj9SNQePxHW",
  "key21": "Y87Lph7RJ4ZC7E8qAudLq5G9X3NNBTfZSeoKnf6uuNEMqeppdnbAGbViM9K8y2qWcsTxd3x9B4YdzkubCkQmAmp",
  "key22": "VphSxgG32i4ukJmaSvM3F4pZzUGUWGN9aWxwK27DCbJojfQwwVK5iF3q6mPJUR9EHimfH7pLoYXtTTwBNoDNK64",
  "key23": "nk6W4z6ZvRKH8BmxYmQpNYYM3im5MXhVFEViCgcWJnT87mTqWdE3ZdLcTaPPjNWNzfWrjyti1oejWJv22zCYBFn",
  "key24": "5c7BPz2etY19HhnqBqgscBuBR67wYdt9WGP74ynNWVJwfxLaizC3E4davrQ9m1mk5W7t8agxmwY3dH16ejjLDTNV",
  "key25": "53oUznC9sXVi8kQNK8gCW5NZ5nZrsZm4yftjokE1241RtQkM8wZhsN9mJMCMeEFfAdVWJXGs1zCwECgySMJmfQU1",
  "key26": "3e26BWKjkEsUNW9gKV9KjDYGwQD2QF7R1F4i2N1eV9RJnKZ93kLV2bQ59ZJacwbn7WsvagGUxKMoGgR1h1tJw8wP",
  "key27": "pqimJADWjHpeabzoKn9oFPsZmVJ6AqbxY7kr7imnk7L5DRUyx79CEEwC3vjyk4t35gaTmA8A2DDQe1FWNo6K3AN",
  "key28": "4yKKrAs6kPwzacnYFFbVsN4VmU69ZCTKrNCWqFJgAs1C2A2MpbVGBHEnB7xEQbd2DsuDMZrRjm8Bterz7otnkZZS",
  "key29": "5a9bYvY3SSXKsPoQJNto3iL1j57utoZDCEBWCXMUZPKKcB3xccmvtHjJgfLRDwxnG4HWtySa1ZTuLv9P25wMGF9o",
  "key30": "5ZcSz5ssQ6yiU2Rp6HnVRhWBe2Jv7fjvxzvp466BnkTUt1kM5Uiumfw5a4eRYDysHjmYoNFc3MGAdVuGdNvjbYFG",
  "key31": "5HQTPC3AHGJY2SCHuXAU651LJgk6AQaZ2aaXnUm2pChi5Xh3HzTCTut1c8a6cYdRpdezcUeSnJzCPVmmZuBDh5jJ",
  "key32": "3mauAKnAUwuKDcizSfUro6ZzSBWrBjdNXJzcdxszRHdyDUQN34t5nAwFs8nQrfnNVpiRgkBDNfDpLL22pV4Z2Ld7",
  "key33": "M2xw1bWybYeKnVEtatuRNotWQdEjPEd3dkJtyJsR2keaHaV8Qrpe7oKwEB7h6Wh2UaYTsn4TRr8dyHsHYdiY9Ks",
  "key34": "4qiahQkNJnDBVv1M8mnEaJVFGZUvL7GcrJdPhDoTpcphVzyt6wG2cH1Ckih8Ko4uvQETWzU1qdFh2dWaR6Z62zU6",
  "key35": "4DbNK8gHKtJAjRTHTbNnwLedNSCu7eLvZAU9TdsxLLQbW3Q7XYTrMxsaqFGRJVMgPXRja964xrWWfzDCN3z72H9F",
  "key36": "3E9zuYvAbiNqjVpjsdP1JySHTvBJRLwGNbhtidgAj4b3UCQJXpKm9TqxbuAgTi5AAe3TFthb5xz7quX7rDAQhXxR",
  "key37": "2tYsusnmG68CpbaDDWDVFie9kkVfgAyhENdatWcqH1d8peESLnge4UC4U774k84ezhJWo1oA73HzGyVHq34YWZeN",
  "key38": "6249tLoiACjdkUbzpqaMuiz6zBNpbFstUb9dFZcvTmi2NkT9qsDCRSreCLNvAipMLUeLaXwZjTKsKXGu6c7RNDzw",
  "key39": "4hLnCteHf6zLsxiTF3qanhLH4hFEUK9Chc2TjUpUX34P8aKuA25uHd5G5gayiJjphJ7PGHfLt6adLDDY59189h4h",
  "key40": "43ExocHUmcMfNPyCTsjfv9MZBTyCdoYL5CBMjcsGKic8ZEW2pA3wNPYiTn5ZzsLTT1TfSzbVB7ni1SvyoUvH35Ek",
  "key41": "2op5J4NFCUphTfySKkyx7ZqDebQr9tXpi6SXpUJw4G7Y6NG5G2iCh86Kaenc7vs7rg4rufPjomc13xhvUWcNVa1b",
  "key42": "2TyDCJ779TUh4yWGXq74VquXNkNSgFvsMLkaNKbQoLD1a3oJ9dfMFTdfKJ1dsLJPAqLdvkHrLRWeNYhDmnh9GqK3"
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
