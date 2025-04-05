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
    "5uXf8Zp8L7BYKuoKeApyxX6PvwHj8TVAubTAvpg7caQEfu87HhZg4GXZwZoXeFbk3k6pHrtrKz5iZv1gHKNhzS1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pq2GJmD2H9Xz569XLSRRsQYCRdXNkHxtR5aNWkf3tJFjXQkpDPw5GG3sPvvDeEFzh5nk71GHUrCFWwKaabmWtCu",
  "key1": "2zKZACiWHnGyyNRhS2WB1VPsw8jrnzTFTTWTFfYbePFph9N1XzCxmnNdW1cK87VU4RK1ezNAixdj9fApEfv8mtd3",
  "key2": "4meh4BiM37qYGBeGcps3jwTwxMwTXDMjnR67kCTiRY4KamknnzVRX5dcbotMFSxzqakfJy3VQLMvn9JPSFWsWux6",
  "key3": "3wxaKeVBmzG1cxF3DcHwNAvsV2BGNH1LvSpGCeYEXXFiCUmyH3dWk3ezFaqcdRD4GtH44ay86QC4sXyiroQpBJay",
  "key4": "KZmG2oJbjiDKZ42nHRSaEHrjViDyJVj6qMqLQCYBMrfutFVrvirrgUjQaA7gDiGX5RYTsFbjwPCW279NcGCprSZ",
  "key5": "2gVhikjsu4mYtmUEdGryoS7yUvJrULGWiLCTNQTfhroe9GmcgE4tiQjwAZe6UsU41gQvmtWMbdATgRS26Dhajjrq",
  "key6": "3fkuhCDM3wr1P2J49UGjdpPd9oJJw3S9GLgy1cr3yh7w2vZYpsY98i1tAGFM3FwKrH3TDW6hPUqCYQmJcyVWVWzr",
  "key7": "3er9QvRP5vFrtgFtCVkQVcrF3eTwQ46Fw9gCe9LnCQQWpVQj3ZzYMn5dvho8dhxt2YjaWYF1sUx6ucUQWW7CZgDs",
  "key8": "4YyM8xLPjDg3fBLQrah5G3JFjRc4816CWe1xMN3occkxMntNs84rzGZhnW22A7TKjpNCQAM4XdJBYQV4aSZYPzuf",
  "key9": "3roj5s3LzDr3D4VYLQYTHVK6xPbwiKW4TLfV7v6LiyBygp7PvZ93aaoMGMSi22eAmafE4tsDDnx2vZiwYMfofLXh",
  "key10": "2TBYMMAKG2fNJDj2XqF5QZC9spcQPNCe5g4NkajvrnvBW7pee4UoKvoLKbFqNR3Kt7eXYzcsS7mnyy2YQtaw3vNS",
  "key11": "4bjfgv5pP6Q7P6XpzVR2gMYYtP6EymoB4nHUEuDUUawwp22XF49EPLmJKki1vLjQgyaBDdWV3qtaXtLdDwdVT47K",
  "key12": "4kCU8shgAgmDeBeh5RhNg1AZCGbwej9WBYtFURQL4aXZJmp9QRziVVK64pXjPxRcYV9X8ZzKEVt82hskwaTm852J",
  "key13": "5sVBTBrRuJ4qxjVe3R9ThTNUdGekcTDL3J7aHQnJCBnjfzdUwVL1PzuoV69y7MTojW564E814FozfUXPEqVKJdNj",
  "key14": "bLF7wgB9r56AwD51VUAAUg5Z9D5k1m4gJjc7VNWXkcVvtfFLTqRXqtiCAxCX9PUVc4Y3tzBTkpGVji8exwWXd6Y",
  "key15": "4SpS9tRcyCRuHyKuRoEtspkqEMMdXTu8oAg7oAr6GpqTW87bh6SvV6ai9EyUJ4jTbFxbEa7hEYe8ZrEyutZDJ5ra",
  "key16": "5niwdKw8padVaLyDk5mvc3ykKKbfs3qAzbDpqoV58huTc9cKGhdc4UesG7BYBY4yEyHemgKGy8JhkeMLep9t8vr7",
  "key17": "4CNzQFvDnv1ANHvhT7PoG1beuh6Ap1gS5emxuUXtdevmhFmx1eUmsodeVERi2wAXFRwFL6VqYDWhFvbFzcdnjmjn",
  "key18": "3HfNEG6BeBRmv89APSp2RTVPRt1pGrLdZhxZ6fPZHWqwa3kGFhiQjMAjLLZSQtYunZAoHDG6NCyPnyf1nVb4Y6CR",
  "key19": "Y7Fa3cPqKuj2PUTVKMBbpzvs8nYCAMQwxbYm4TpbqDwnFK8o1EKoryBUctwhRqdDnQ4GssFNzo8cY5i2Jp26Ek8",
  "key20": "5ynE1wKmoRQmJnaP22pVVXzF7w7kJVPg5mXfTsb2hWqfrP9XT7o5ve11yFoSaB78hHD3RxDtaar9P6zkNbXSRRK7",
  "key21": "3YkvetqLaMGaj8LBZUMttpBDXTjw5qA6QTxuukpM9A8tHxmLhMKcUTaGpQusgr35gwUw6eTYw7jdSB8DARG2DJC5",
  "key22": "4bphGHRQ6tyGSrrKevwXfAtYMZ57cZDKfpkYiHdDKDY9629gqEi2Rm8SwXHDbD2LsRZLCqu3qWitmqW25Z7MHR15",
  "key23": "2QecjzhFEpzuDsGTsPyBMtdj7PYX4TWmco9doFmo85uPFRXmXSrgHcVHLvX2eiWhqdm1tYuzWimW8VbLqmZGJCcc",
  "key24": "e6W9hUYy5kaF3ebGVyQoJ5aFE1Fg9FhvN8gBNN94UkLCMk7DSxRnuvykxTm2UR4d5CMpJxKDwnsJv56vLmyk2Nd"
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
