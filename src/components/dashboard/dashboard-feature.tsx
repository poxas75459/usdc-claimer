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
    "2XpxhraLokCPTALsFGRrGjsL5o6KvU7AvuBAHQCTZZX2ahnGAvPMgwZhUTNuUh7De1Vtwb7diHn5AQr92VnwTszi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D5jziEoU387XVPmxmNrb9myseMqJZGQHWkspDVEwwaycp1XhDK6SxJKCBbFUkB3thaSzq3uD1j7W5wi9oFugNgB",
  "key1": "3dJeapfZdYDrVSTUPvcCmNG14ADC6u8FhtgnPXcg2d19gVYnWmNmHd4U4j4moYFbc5KXVbxCXcHPVsJqYwf7y7AY",
  "key2": "3SBhbcoSRDG8yPuXQyP1sH2Hq4kcjrF6oxQPy1vJpFez4Enz9jMvAoEGmrLL6oEU9oxU1izTw8T8ZALJrPtvVCSK",
  "key3": "66nNdhHrAm4nKZFTc8hY9fFeMYfZoLEFQXC9AobvGSF1BGjzQvYaAGkBFPrdWfAJhNTc7mdcsKwXFF5WWzyPQZdM",
  "key4": "6ZtShGccFzALcFhD8ZXacSK9AXj3WTmBwYZnVsYqo8fZ7nPxA5f3rx4gRVbx1W1SeWuMN5N5qoXmgWqcrs7LpVm",
  "key5": "36YKthk2d8UFE1syB6tC8QzuY7QwML2KzGtvhrxHF2LyXhDC7BaKB7NJ3YhVxBy86tNRxw5KSw5nPZTKZXd9oSB5",
  "key6": "5ui6bgVAT1Qzkfe67kBy4XEJYMzRApgNNmUYKpKoCnquckVCkeoWHAwGWefVCigdztpZbwGStwuEb8NFfruNSMu3",
  "key7": "E1oSckZkBTcrqMfecZa6pbmMogizm4wcBpKweuzvZzPHKcpu1mUhDEPHM57HzRjuJGx84rbDrzbSXeiPZM12ykn",
  "key8": "2JmsiKMWZGBbid3FXc2YHbXJKbi8rc72wGNtqXhwJstZpNGo9sQNNWSXi6qDmoE7PE5f6aeSskUpv1XtyNHUYTgS",
  "key9": "5mEdQhpWfMGJFWKKYWfJi6pEpJuNcFMXCbustFS74qbi6Dcd2CdbB5iSK5kQEQjoiio2SGsre3jp55MMKg6HHDzV",
  "key10": "2MV1PuGQSXCVKDoZgS59GJLADg43DC9gKrZuyjLbeVGeaFDWc7wWSnjGmoU6xtW6ehqz85P958aboGVan53BRj94",
  "key11": "2hdkkNdEiTa7vA8emRrq9rAwEuSoqsXBNYiu2bouKf2RH2vtiUV5oueyVHBkGMiTfskLhE1wrUcpA3gkBYZss7wj",
  "key12": "2VodB2S8TU7RBMaXKP54pJvutwPFRroTKMHyw5WBktY1zW4HwK7GjMFrHtVRU7jtBu6UsjpHh6FvsMqw9s2iX6aX",
  "key13": "1tJRiBdFF4CUKUKoV36v7Gumdsu2z3NLHUq3GKn9cofD4pd7kEcjTq327gWJski2Q729GHon71bGXEP6QjsiNwA",
  "key14": "4a1RnuphKY9qpfoF4XaoTQ3K4XoGS4HanQJj8JJ86hi7fbg7Q8uZivrkBMa6g1q5BSYShm5SMxLpUz7PqDohj6fS",
  "key15": "4dWoPGwYPnA9JzGrmCbxUsRYRQR9ZYoHQtVMdtWG7pYc6ZW8bL8YqwsYqgAXeFfMHFGd9ZP4xRB5rLC5N8mR2dtg",
  "key16": "21RZTapzJYz2VFpgeTT43btH7Aj3FXvsRLJfZXcvd4Ab1DcdoHqzq9SRFDrBWvDxZbhvxSDd2aHPsS6aKLScyPVD",
  "key17": "4qk9k8Ckhm6sc7pRGATcFridbwurp8GTiNjasUbFy6YXb7DM3GXSD57eYF9582UuRMDv9dFqRwHbtWWmaJpkAR8n",
  "key18": "49VUyoZj6kVpnbzduznRR6VsVdU866eWooDtHmWEUVFT43rdHDT4JyWnU2r43pR7z5sz8i5AvVVKwP5yUbVBUvpu",
  "key19": "jmGuMCuFLPZ2YCx9EdvFqxguikW4Sn5zFuDye2VseRnyx4hZUzrv6xLQbjzmFmdZh22a24Xq9XTWw61uWJ8nmpx",
  "key20": "iG388n8y976xcPZ63nTBNKUXaff2AAYy8RsMD3zAEvbSPAiPZKBxK19rT1F6deUjLQyErM9KUavfTQLwEPF3RAk",
  "key21": "DEmHDLbBcr9YvzU8qEAKy8opwdzQkeewFh21ufGaTGqXEfFpdeM9dggni6t38x4zPKpLUwnoRb8kvPzD3bH5Yjh",
  "key22": "5pk3xq5GfxLu7omVLVxFyAdpV6DR83e2xNjPtDaPuw1ZUZicbRfyXiUQTFye9Vak7UdiPycNpK5wj8Dg5nTStnRu",
  "key23": "53Y6qw32n2Bi2fuhrtfKkLbsvKGJFXnDW349vzxVHCyrjZsMFfotoQECGnkAsGMuEQhcWy9TZaxP9ZT6qbvVMY4",
  "key24": "2Dr9rupaZop9RMxHR6paRfUa6gvF8QajC74PuUbfYWiucVFD6SEsDhXhJYCfr8pTg83fnJXFRqPe7z99VNCFpew4",
  "key25": "2jgM93wm5AXQhuAunhaUdHjApq2Rz9aJPdPQy1hq2ESmm3Lw9jLuB49rFYV85aa3Ygt6uk6ymV7X1AJ7RzJ5gVee",
  "key26": "54oBGypD5ZM9PGDRoPX6zzpU9D5GAn4s8AzqqmVq4vW9RTjPDH7eocFEKDeyW3hFKaM2HaaxtrSf9De28yd5Exv5",
  "key27": "42YKd1u1hsupZyFr4wFFMiQB1oJ5sXZa5bwt1QqQH2HZj4mdtkgEXVybhKpxiNdtx6VGijWQ5js7cA2517oEFjQS",
  "key28": "29RY7LR56nHGqs5R8VCTcLYQxjZB2gfse6xQWDBzUZtNYFJPFicZfsCfL3i1CDHxfTq2x2srqNAuCq2iLZvZJPHz",
  "key29": "2K4tAEKTFoN6D4UoX5WXgW4U57rkE2g6S8iUSZQQEkN793iEy42T6HSTATm1dEzt9JV33BPaotRqhu6Zkg4HGXKC",
  "key30": "5MB5sd11Bpr5zoaim6KrVna5taYULm72DnHbEnvLngwoUDg9pVtWZeqrPLcD7NohkXcg85En1B2FUFe7qiRP7AKy",
  "key31": "5QXsJp15kk9rD39BLu8oF8g117RVLJqQNrzd36FDN1cDuoFb6MJKr1n3deezSSNbJCp6fcgcS9qXiFV7DyE1NihJ"
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
