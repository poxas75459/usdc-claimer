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
    "fuh5SGMi1avod26yH2TYkTsKZKnePtMjwvDbiFHEFNG6GRcRDyrdK9oUN2GmTVXYKYrmdRZYbDNT414h9BrpRDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRV7wTwfY334KvuwBKCC4XdSXFDdt1ovFt63nqiE8fqjJS8xEmXrh7a6tvWnJjJQhiN6FgYSLHCZUFDkEvrtfT6",
  "key1": "sVyenvQrgYc5GYRWP6bFFNcnPPKgpf2uFa6nqd3qYTq2XWxFQrKwaK927Y5P3kGTgZ1o5tR5ASvcDm3FAAMXnJZ",
  "key2": "4xViJ7fQcqGiXquve5Dk6hsSH377732JaU9prsqzfdMyCbMJv6r5yUzK2AAdyyKxAGE97KpANX94j7d9AQ6Cbn7t",
  "key3": "5rAgcpcoyye6tpjUk2kGQC2EECC71sYeVyC7XP6AyYK6RtbLNQYRWHRJfAnN7SrCGDcBEc9hg49bGfysbbusjpZi",
  "key4": "63xx8VTq7RB4gfymvKbpHZ5yWJjDB2J8Yp5Sq9M54FYRXgYQausiERhK4ty4NB9GuYLwKZECvk3aCHtq5PwSURTP",
  "key5": "4Q6eqopPNZst44auPbHkYNXcNVGxVauGD9tmG5LceND2WXCb4dYNqhWRBEHVbfkZ1gVPqPzHdZeR3n47Sze5XdW5",
  "key6": "5EjnjGamJCcZ2tbao3RYJuPPAdQBghtQJxBwkXNuyUP5mcPyDyJDfGYfAwzfiHtdAWyhjnXPkR5LwMkGm3MxMC1L",
  "key7": "3j2nwaLagDEyXHFoGQ33pSuWJciZBmVbhRGi2NABZVhZkY7dgVd2jkFsxyMzEBnovCvxSKB6MEAxDvUJzMCoxPR9",
  "key8": "Wyd9YRJaCcaSbWFRvC1MNcF2YwAKxp2FuESw3Sk8qaZQWvZmTWJ65QkdyrnMe5vBstbyZb4G4A5zxdMUdep27UM",
  "key9": "3rERhjmt66T6mRQ5iMvdpqqsYRrEtaGhXQDVvaKiTv6VsLymNbuXspn4KCSCAQmRo7AsADexnPFFC7VrihfaqHk9",
  "key10": "39gxe1ksUtBxJCMmymRfSHLbzeZGZaeve1qLUQohYPtQHjde5n3xfJghykHHckT3obLwp5DjdCwg8TMvoaGBzj4s",
  "key11": "4fSu1x17tbFBdp8J1BHszW6EhZh4J6X5JNEFCMQeLQjbWGs8uAdQNJqy5RxVsCseSE1nnYQpQyAsKoZhwpnQ4gur",
  "key12": "5AfHyJYVFL8QMRCPvSQjhDnXh4b6XbLTLvmzouzBADwbq1iKCRs5fXZrNzzcEWX8fXnifn3MAtEJhKki16Sioi7o",
  "key13": "3KrbasMF71NCYqP8sN7fvYiL8GLESeJKYtv7qZugYboUxvsL7W1ar3h2E9fLw6dVs2EgmVkyYeGMUzTkMcrnLUXf",
  "key14": "549fuMLEKaKBfrP9EsdeoHp1weMe93fuJ7WH1MQrPCYv7NxveEMSRxZmvtjVmnPEwDov26VmnYQmpHAyMJPB2j3e",
  "key15": "4PzuyZDwrdGEvYWSSVbem1b6h1u2ftPsFcLd4beaWgB7u7X3D85im7E2LFscXqZiwR8jqH4w9yRAMh7DSpCZFEZQ",
  "key16": "3di8dXHfZghqGBb9fepX5RwqLH5Mnd3FSZf4fkF5f8KM9R41EcBEkD2QSmknwT2wn3F8SjN8nTeN8e89rM36m4XM",
  "key17": "zPR3m8XCXyQ3ay1jKoB3Jzz3C7iL95JJvbQpgZTHXxEPKiZ4ZEskFr67zKjKeDJuNEFdnkR1CBzd3AC5nzrsYpS",
  "key18": "4pcVJt39rjQsc3jZjHMLcWdRk2eKuafiH67CDXUBhkb9Au3LL335b6GCZJ5jvzNSx8J6Ry9xyHNjskB37cKjRFV",
  "key19": "3Rue13sK6AhcYNiN4deZMx2JL83K5jZjgdkZUDteGGmHtpWp9taJuBoqUCnf1Emc3wZSpgJeioYxVwuAFmLZ3Wnm",
  "key20": "3hRQ5PD1TAaSqU82CH2D65JNytR4gJP28RY4z8dv3DRTyh2f4jtLrfwo2x5NQoBbQmP7sQ8xLypFV7vCDtz78Qzg",
  "key21": "buPGiWUv8saNU9XvMNyNEyKP1NDJW6KwPSg7GvbXqjGnAiPHnUWX4ZjJz2Q9BijGng3YP2N3QSm5NvVEkNSMy9W",
  "key22": "5FPZpqhptyh5wtPYRXiJdgek99u4NK1bNx1u1emg8Wm4b8PMBMrwwCtFTt1iqsTcLMA8xU9VMwwYYuJTdQjJBmyf",
  "key23": "XctzMSyt9CgFMWra6yQMnYrraUpntQraGyBvg32BVELznMRdQRfhSQtQMJvHz3rkkQBxupEyACqJkRjDJbzmUMX",
  "key24": "3X5MfCA4eUqaQTBe6aenS3kg37tXpxiucbBJs1B7p1yeo2gfZGHh3eUTQqWXsGJjgvkmbd7pAespVrGCuLYu9WXs",
  "key25": "2rRtxmGSXUXCpWET7NSqzbpNKvuJKH2e9n932u2tN8KxKhK3ejn8Kk63ibs5xMLZdAyeVF81gDsr7BTUTJmWxhsh",
  "key26": "5yg5GgXbwF8m6HEsVK2q971nwyqQHhZizUFRWfhsJytUR6MLsupeEfFYJrY9JqrieveBbze21fsovZrKzL4d92QT",
  "key27": "3U5iiwaxumrRc8bX2Lb19K5MzbsrzvH9KE4LLmz4rJqDG8LjskCZhHdbYNEL7EH73L6rDMxVRpzmbJ5wD8dX5Ecb"
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
