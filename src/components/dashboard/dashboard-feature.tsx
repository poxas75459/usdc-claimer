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
    "DKZ368AyDWmZPNr96BYW7qDD3j44CseCwbGxAdsV99LgMyegR4T9tAPquj7UsNWuyLEFUmn2fp96PehTCPQFtwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KzbtU7j96jnUr7ouAzK2A94UjmjX9V8RpQWRTuvczmxAYsAnmV8tVq2xudXu97tWdoeGD4TyQTUVxZdZrjLuSCc",
  "key1": "67qszMWZKzdmGQ3DoiwkPXzyJ7tTTQtVWo85L53mQqTJvZm79v3YvvEeA92BKVwfcxVze3MDXpANXzfRG6d7o7Na",
  "key2": "xSMonxTCVr5hxS7baJySFMTGiirqQE5Dmn498wrk3PRYDWdFzrcPQ5MtpLXLSgBcTEuQCYcxuyd2huVGXj1KxZF",
  "key3": "27MjDT8o1VMgkTWvuEzwdux3PLG5MeYvLxZd3Hhzfz6ZLvz5ubsJyHCVpFSkWUwxBpPkcprqaEKnevkb4fkxkGuB",
  "key4": "3iDcPH5nLe6mjEj1wQrFAHeQg3GTwnzmnKGa2HFkmT2WdETv4wgTapihaKC2fwiVzmerSu4DKiKeDVYGFEoLbUMh",
  "key5": "37JRG1w665MS1w36DmYBr7ooS31eXbSZCz5pa44pc63XLH7benHNr635WGVwiYJAy9DPJ9UXeP9n28cc5JSsNV2i",
  "key6": "3z2JZ7BLHgo1d5QrmdXebgDSdLX2dpevaT4vHxiJ9AzyBrdoHaqpcaUqXSRENr8sewg3BfUUzx2UP193kKyZ4X6n",
  "key7": "5NmLhaCLU4xojscFQCqw6Qo4xjP4jzG5KWWoDvM1o4gpBidx2QfeWqCafszwqvZznL7tstjaU6rc2nJQafFT9qoK",
  "key8": "t4p6rr2PBHAMt5nLa8sXtg4eWfo4MdKkNJ1uCcSDDXUBuMyt7o1J9uEhsMBBVz1sHMxUXh2i6VBD3httDb3a7Wo",
  "key9": "5BgM3SSYW2B2VPdWyUSNgX1siFK4LCFjsM8CKbnbJYnfZ4ZZCCK2Ftvr8LxTKKqK4mnR3FYot7ZwTEhecNSpeaBT",
  "key10": "4x1t5wE1BApqpUDHVnJduqKoXH13EcMMMQbYZFWwwHw5nfDg182K2U9NgMUiZbfvrzG48KuKYQYovs1DjPzWpL9q",
  "key11": "5YW7Kc2J2ZqBFoZ6rEL1dx6G7M6nkmWC9VDm1qf3mDB88XLu3JQrAKGu2suYnoKrkpHGcC9HzmHfFdBnpo24wAWn",
  "key12": "39WFFQNWtvmzbHdBhHWrgEfkAD4gSEJeBraqAoCXgM3hykuYW92WpJuvmzHwBaazxLm98aQdRWfm9YL5ovEtkawF",
  "key13": "3oCJXv9dfehqxFAxgoGroBpqeJs1Ceb1CMinX4ctz6mSZQ6geAnGXBqh6Xsb6hz1GkQE7FGGf8swLh1njT178N3h",
  "key14": "75j9bSAWgtJ77w8dDpUobThTjk8XzgvVzG53wa7KGQRwqq9nbEdeFfDPjCUhWz3Uqk1J1iASEuHU8p78v3NxtBt",
  "key15": "3bmhTABXibUrVBvZ7inLTx4nmBxcmVsru5RmBQ4m1MQB9LC1VkLHckEPdKiarGeiLjMksweUDJjDMqWgYKKyuA1e",
  "key16": "4vKJon6PNU7YQ5dhhprnAkFJsPZKZxLzYHsox162T8XCH6JpYttirg2ps8veaqEiz2cdxJqUuj2WZrQoMqHDKCuh",
  "key17": "4YM7CJoaJX3ybdHJLir6N5Hop8Zr9GbHabt2rFuNCX7Lyabo3xKX64Vfj45HJCtoZgi1RrTfvekeaSdgSQyTXjeb",
  "key18": "qQycPNyuzcDdMPpFgr3nsf4NMeNgAVgY8xG9R83MenHTErjtBLfzP8EC88ED4AYBPvZtbDbP5rsuHC3jQSndU2A",
  "key19": "5eXzVK4qvsSCjZLoydEwnE68CyEcYXXs1Q8MHaCUiDQwbdj73j8M8G9u7F46u5b1jGwZT38twr63fqY3NLwZdpLj",
  "key20": "558Fc4KDMiJezWmuLDWesdBvKFyaLyJqDotCewniyjdNnpE58vZtDrp1WaAfJ8zRzCAUdS9B22coC55j1PFcHNDo",
  "key21": "pir1AvthXjZznqhHZR1KJHQsgvucqJHcbD1nA5pMvJWpQdgGYiGrxjjJvWHvsMatXFy68HPM3CaiJxhotLohJwK",
  "key22": "CRwaBf33pkuqJXoTYFYNs5vR7pWLHqi4ZC9a5KZrQyjm4sGBu9NJMSwCvt6cQ8rEBG2G6fcqU2YsxSs9VM5BazH",
  "key23": "4U5NebkQPGxaijS4Qbw2ybDci7dkbqhWJG2MNkeSXFE3WQg3xMFjZH5KxKeTzLx6KdVevH3bbcy4VwAaPnUYZ9Rv",
  "key24": "31hQRaHLFRBbAsP1gHvunXgFMp3HLMcq4WuDmnUG1kQmCkchvEnFjkXV3zeYKYW1SEBH63jW92NsvuqG7FTe4GLV",
  "key25": "5L75V4vnE5dh3X3WsDaqvR5F3obD6jPyYScKQeN7BULaKvuPFPCtCGViUwGb8Ai6SVqgwMuNCApEvbTs47frz8EF",
  "key26": "5WNYxjz9vmgVudLu4Nk182nKdhhWo7AdvEahmTev1a8wBLLUEWrtuttFaatpJ84ZgPww6aktjuZeTj2UVBaom4KX",
  "key27": "46g9M2CPFQGaK1gybBY1f2gycs94Tc8Vh6bmmG24pkmtGzftRaoAAoTsUQwLQQpEC8dLp4z3jyHuvQaQDtSYmBxA",
  "key28": "3FeUGcNittHSGvmh4YoRnxsBNye4cGYYa4uh1UnEq9DynniHBJ89o8f4pi4xn3zuqPYruHNqcYonyrEp8HpCwX89",
  "key29": "oF31nEamnbsn8hYimjhkG5K1RFivX6Q1DfK9PMygjoFET7Q7bpaa7C3Zv8EkMCPwnrY9gC4kKCWMkWHTGudgUxJ",
  "key30": "2fXYtUfCsg9VRGpf9AXge3yNPQvNo1yaapdaQmVoFS3E4b1MjkGtoD8tmqBVFaP5erVXEu8cfp6E6HEnn5e7drLj",
  "key31": "2ETXqBB5RnWm1Cv249NYi9vzRqUyw8EABTtexBU6PuyTkTZwJ5sK1R6WRYgUY6xKhBuATgnY9mc9w4bJZXd6ZZr1",
  "key32": "f7yLsPVzBwagDTbEj5KCFKrdGySRmozR31fPMt8ECXMX1REjhjKsZVgZyCzb4NxosAdXxCSxqW1RkyyJ64n7Bb5",
  "key33": "5RhmNujk5emuayv97NWMs3YJWVPNeXSsKycKC2iRgxDFPSCcdaL26Zu292aQWrYq7oPnZUCeaHZGEYgRcAY3DEyX",
  "key34": "3DpjL8Ue45Qt4zc7rXoLB8CnZzyq4kjbqA4RjVFSUSz5BHpqo5jW7fyDFuEXBDwFxFYrNn9yd7e9J1pP2WWoCkPa",
  "key35": "4jyykVEPXkQrSoN7cPHCchQJtPfzCbusNd6cPCaa7y4m3qbCbMKpVLqU6VkyroWbM3og5UW5TaEyygzogm2r9bwb"
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
