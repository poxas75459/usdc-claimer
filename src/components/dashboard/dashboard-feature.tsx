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
    "Essr1oepFQBXCVCgkxcLqmBJAYpYWRChhVa4ocQ81MD6PFuj5t5m9CLFSU4MTxn5Tj1bz4CgGLVMrxhgJaT2mjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22dLmNg3CHWhUxMmajfvxYkeQDReNb6UBbFvuegyPQbkPUixjBpr3Kix1ohQyWHLRsHtNLdtvbbxk4VWDaBSMK8K",
  "key1": "7cgnYXy3BrD3yGUVLELKsfsVMZMX9SzWDCWiFNnJY9665Gsz65y18dWDssU96rt2rZyAhD5SH4j5o2krDB139AB",
  "key2": "5dK8sG2R1TAVHHSh79J64LnNVFdbDJ7U1CSS24phMuA34jzANby9DsPRchudKnaMjSMCp2TBGDz5owL1GrCF9nTg",
  "key3": "66T49mHEha7xobwZCM4m8yHu1Z7AgmEdAKY7oyriH6BaYd9RV34Wy85xcsMdgG6jqWAp7JvGFwXRMyg27xD2KTkS",
  "key4": "3UZVjHPiSJHYo8aNrSq7rEjZQ9EKrQ42BbpxNgYRfHddGbqTZGFZi875kKxjymzSeipYzw3qSK5fUuzdhAfd4411",
  "key5": "2z4Ffsz6EHRNBUCBUH51hhh7wMHgepSkJTdyv1FoCenej9f61AytTA6k6y2vpHBaXoWGyvPnz8Pt4nQaP8zsA4We",
  "key6": "cHhr45dUfV6bew4TNWoAt871AmPNuUcQaMnniYtNedmWew71MBjDMmAsJcNQodZdw5ixcHPyyxqdJwp8G8f4HQE",
  "key7": "21RVfhMNXQMtaWZ72yLKfJDM4qCPvZvwqF8V9zU4r5Pw3U4eEqskvA29bYg4G7HeTkcq2PrrxSXvNGNHYt3wDmjW",
  "key8": "XCZiGvHbEke41qKgWUB8qrg3GKZzFrfjK6tzUjEGL7g5sfcB6qJYkueRPrpVrZh5gLmRr6Z3Fn9G5U1mmaRhkSX",
  "key9": "33d3BHjSWUE5TxYaJUDLzJyop84PKgaheNq8c5xD825jbBHWpj4TXpDhRsNAAsS59aw9NbShJwPhQicaWC3HLNyi",
  "key10": "2bpnN9Zf3oMAb4TAAmkQaGNLLygmyzKfe7LZKopsmAwd94p3M1N6Mn1FeCDzGJp98RdkcrnLM89zDdm8BYXHFD2T",
  "key11": "feocsxXUTS9YyXQBTsAWdiL5vHUSfGefg1rRiBLqpMRVSUCKTQ6cM9LmcEKU2GU76sYzucM5aE5L1eMnCYthXD8",
  "key12": "3BQ6Ks3zt3hmDZLfWCm1pk2xynv57wy7n8s5c24KByvN17NkxQVcYNnKxeKidmhcuHixifDH26k7wQp5wDmdox5z",
  "key13": "22hiepT3qCkEosfbUnjJRL8exM1Tug7ioJXiHrNXQZ2b4pydEa2iTMum2e7cqGtSiDsWzNJYDHrJNKHpuu7Jgg34",
  "key14": "24hsoXJ6RydCKD86Tgow357bQYAr85NReBqYGHTsJbxohfnKRMUQAfq2VRyvKu8JQR33oJ9qpBADNDKoG74D49ts",
  "key15": "EwYGx8EX8xThpbDdwLPfpHfphAuUaojyBC2R5oMcybWPcCQJuGNDQkNYkrJFgRi6pTtK1kcgG8qfNYDE2ccTAk9",
  "key16": "2ZKiHnH5nYApriqRfnx4R6GVW6PYAdNmxF5kUGN7Eaq7SScV1WAPsHsKFaK23pHDiRF5cbJ51emrYtCTDzKUWiiD",
  "key17": "xQ9y2UxnkJXnuhfRoe1Dz1Gn6N8Q2aEBmSxacgPMktp4fBFQSnoyXWett4xRYqfjXiEXQqnyRGweE4PabxaXgcp",
  "key18": "5fN3PR4yiPoaJMkPbyFpBxJ2VpbvXTYAbTxQCHZXu9Yk7jAtasPrrDz6kmc3Jhc7dC7x86XbfR4thve7C3P7xNTC",
  "key19": "aGM7peaVyWNfM3DEoz3VEtd1kqVcApNgk8jgLVi6uUW4Y9ZuMhuuZSEVUDGJvo533dbNXdixVt9FhkY6Bp5te9f",
  "key20": "2aipZaFC6tujM3q2KYzgeKeVK9XBiqWttjjVKKiCokC4tYTjVUujPjR3Pp6JRLp5bvLCTden3WwWzxq2cAnfB67M",
  "key21": "4sEjJtDQocr7Emoq3UzoZGKB6oA5Up73YDGUhz3y74yJMLcpsodSbK8TWzA95Y82Ze1ZfVd3Li82LNpngnd8qFq4",
  "key22": "2f2FxWtd74mAwRiKbNoTK7aoDaUR5HYPCbpnqTJB8f2Kt4eL2cvN6sKXbPhEmNL48MPhuE73HbScysqmxfUBypWH",
  "key23": "3uHi8hunjA3sKzoN9jqAbfBzWM66nj246CAjd8rLWmVKFgsYYsieX7UxtsBRtvfnd6j9prFXKi85McgTcGFyjg59",
  "key24": "23y7Vbjyw9KjnVbyrqFWVnUSmyeSUHNtyZmmp5KHfJp38Qp2w2MGH1ofTugwpYMoUfnd2RSodBHAHCCwyDQrULoo"
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
