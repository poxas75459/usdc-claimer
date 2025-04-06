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
    "3mZogEcVnW5vHLiUhk1mLjWkuDiCD7jYEWuNn7rKbK3rfy5gGtLwF3EB1udoi2fb9SF6dAZ6hTjKU2CnrkCcDePR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NHrZZcpGKiuFFANNps756sWgWMe9UCWkKNpSyJa54SzYuCgFMemYzFYbsq21oJGj9PRi2GFADifXCNiJRFZyFbj",
  "key1": "5vg9YqpKSwbRWJDbUPxzg96zYFbuXtw31iXQJGQXGCp6ySkSTsH1MFUsKNuXLnnFPf54fyRXGwLmPQqNXcvwdNE8",
  "key2": "4ccZvZcEoiih1mNNiDXR4PFbRmgoSJ9TzhPSfCafSkwDnGbDPsyC3XsjzETjFdzGdrPTBpSLKu2UwBVVJN2iw68S",
  "key3": "2WfWPTkg15zjWn3Utsg892WoWgW76vgixvPVXvRC9JaKHRyrEURJ4NbQC9g3V6xGWbo5QrNHTi5Y4V9iVwgvDp8m",
  "key4": "2GWnpsFg5XdbbCcdsStAgNbsJiBNyrNfzp7ED6oKkbGzRnQuQ3aBSbjERxe3ZqVjSfyKCdQBpfnGXFy48iznzumv",
  "key5": "5Q3m4vP8ULMrfNw4uMzf84NmyH11xHT15WjNn7dmkizURUooVedUGp2suTEVUAzh3emxqvrk5HQevXf7T5iYdbpG",
  "key6": "2nqhJK4HvQ1d9tJoz2At9wfBM1aTGCxBnymQdgFSP7PZSAZ2mwQcMBpVgrWRkagVD42KLEdtR5th3Kasv86ST2uE",
  "key7": "5AEpU4Y9FUMxNWEe38rREa83t3Ew2y8kpbuZpAACDvkMVM7bFj6N1VTT6dqip6YCq53Wjxw4mTNwNxaZaVsfVhyt",
  "key8": "2qhN3dFwApfnnPduMStN7ifGogYBQWWMxNQeTN6qKKipMsvyqKT33nPFtPa5q5JSrtef1BiW9x4FnvLVwAZ6odNW",
  "key9": "4cGKLDyNgAUwrZ3ysyjXkcsvYtCkbSGAqEtwna8oK2HoCBWtN8iE46FMDzeQnM8Qvk8ns1w7ThNDvakCgYmWPJC4",
  "key10": "2xeZAgGMnYoaDcaNxDygA9FtxHg54ofRZoceUyXEJq8ujHNCkgahGNir7HLV4dXMr2j3hbDA7PDLMFJ3m7VHTg9C",
  "key11": "mARffr7Af69Q5A9BhEe8MUCxXYg3iichLyj7hhthXBMytsn8RU7nkxQ66AJVXjHXbRCXhL1jFumK4rjKKK9AyUm",
  "key12": "HLcUnprwAiHwRN17XX6LXRknJEqrW1MF5tj9hWDLGUAjbC7Vdqoe5T6Jw1vM6ASiY4XY8aayUFNCyUCbVhtp7Lb",
  "key13": "218mbj1YczyEuy4VsgNb7os8j5ncfRQzKnZaPNuGBrAML21FqGWNLDhBY7nEw7NoZX6rFN5u7epHWPSgJcX2mFhN",
  "key14": "3v2LwUZmumUkKfM5g662FR9SVK5RvS2iVnvjDpDdjoM6wfECcnHpYoC22VsM5bZP3wuc9pEsJYqqQ97Vr5ECi9n7",
  "key15": "5E1GZxegWfrSqa3Fnk1VUZQHLtQuQFQDK96SMM6HwF3589PuDvZHArncivZUi6dNMtSFtbk7J3wTAsZHLUBGtSpP",
  "key16": "3om2jr9XK8dRmorGjKxBiEEb2KZoZkJAEwXK727yT27NwG3g8cTgSdtVjyqr7NeKrZjnCZddPWHZQSt5t3ioonio",
  "key17": "3Ujjh3FNhvb1pPe2J9D4fuJa5RgKRAsC3RmecFByVgdm5m5UqWFABNpMfadsuDfkGNF94BSaGEsCc1uG8x2bkCVW",
  "key18": "3DGXpp746TznL1FjQhHJdxRcHU687JJjEsb24KLt2SQ7DyUpxescQE5u42ZSt1nvkLfC7qs4WqPFaTkPMGd1nukP",
  "key19": "2cRxVErpMbXo4kZA2cvWNuCbGp7MfmwESuS1HWCaGkbRYihMwQ3c3duWEaAbvxtQE5r8YHEJMN726GMSqrJNmJFd",
  "key20": "2bYh3RZqUk1iWJbYvhVYyUtoifeKM3rbUfWaiEUCXAv46ygvzV5Z9DVBrZbcp7tpT8ArX6SYdsc9totsVYi2uMoS",
  "key21": "5Vtg6VBHksuZhMwQ9nz4PrMNy1SaiYusub1mJoXoZhRyAFcW49YCxpz3BoYXo8RwCjh3RNS5pS1TGJftYdZkS2sa",
  "key22": "3FzLRi6dLwe9F9ENj14JyD5fZf192ymQMvY2cDJrcgEbydBqk8GMDosrpcmAWu9VzSGcagao8NW78HAmkf5KqQ18",
  "key23": "3AMm5GCcRtjsKz5MWzSp2bmkHvLR4UhEom6timGjiQDpbCvgNr4KRRfwTWR2fhVk1WX5LZtb9mEjDNZaaNioZT43",
  "key24": "4SMY7cpaLVT9gQKJjijxav4WU8mk6hGNhA1k1UpY4kAWagkALy3GjyRU77NSVetc79a5rim6ZMU62vkxwwn7E7wp",
  "key25": "3WSSKiNc5XJSgbPRtAUMhscvNZ4Fq9uuJxm5su3nmXHBAKphFStiPEQdFd1xFgyfXxCBTyZ1UNtBLMfBE8B8KVt1",
  "key26": "5jf16ZKeATqHUFEYezNzkpqXwuc3eczQJLReF2WFrQ681z52S8vKZ5ekxaWUHGAdMdjTzz1ZuiqQGemmsX9yrCCf",
  "key27": "5FnTXDoDEHJ8Vk2EV3jj8vL4uh5JFp25zX3XsAcXxD6Un9tqy1K9epsnLiGdy9TP95vwroXANQAiRrjjvaXq3EnH",
  "key28": "2vFA87A1cS9H33fTVnbtxuFVkwVFPFvEY8KhKRZqPtuMVkxP9WH8aX6eFwNRxwRW6siA6kDpLi6N1fz1pranswZG",
  "key29": "5r8KX9t4ibxy6R86gXeaNXP9GFr61jZAMLfFKFERqTxXUUm1VxD6RWQxoBCZrksW4wsaqAJ3ypimPWD7vJtgnsiD",
  "key30": "2yu74wdBfiogwQnsSrM8RZ9pMY5VWXKWvaVNT148CtJ7Uyjv9wLVgQufAAg55U8A7f7W5JcdG1nRLbJNfFXZYuEi"
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
