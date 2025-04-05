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
    "3XGaW139PKWBXaB3ieZAotBUgcuwKjULkGqmvZ9zr4YzvXzP1sdo4sAjBcNVQeM3hS6YUSWnH3Y1TpmpogV5977c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PrU53Au9Uo4YNdtJRJjUkSh2rQZrm38pXqvCLB4BeoVzwod3yYAcE3GYzedwW9CtgHot6EFADbJNCT4BWFo6dKW",
  "key1": "3By2dB4AZMfs2JAHzLtweKRAxWZBQoJB7qgN6WHLYBEHyyQzNhN3mD4NnFXaxb47xapu3KAisCk7u6RSKvtKWSyX",
  "key2": "2VZfs2yi66Uu2VKhFoLdQL7FEimQqGR9giTxvzn9L3dfQZdatK9f1J1xJP29sz3VMToni14nd1P6bNqjGrPnTBwQ",
  "key3": "gvmDGdidGdVUspzFrGLKAK6JV1MWZRk4KiYot2o1KMx4YwgVtC3uXDmCYAsGeUwMwKdR8U4DqcpvWkwB7jaie9Y",
  "key4": "42GaeZxpFYjZJw28f8ak5fbrrUsCLt3fJQyrY4yPaCfiRoacuwx8om2PJxpWoSuqAhWAer4ckmQUoc7K7zhLskM3",
  "key5": "3E916RCpybKSsLsi9z9HTsW3cbBNMYPH9i2jLra4kEEdwnC43vUwQXk9DcA2pvWCEsTbGw649onhdLnLAntUSeqm",
  "key6": "54njACiD5FRbqhN7Qb94tkkv4RKS39ioBTegoj6ihmNYfYzpkDxygFz6gYTqQzNJwiCos8ZrMZJUHarUzeAYee4d",
  "key7": "4XketyrSZ5hKSQPQy1GGNv5sj7wSDLSdJ2dFXpeZrLPqvNtGatAYXK9mqULqe8DAQDkRrY5Qc6sDEMjNyZAUWpUt",
  "key8": "5rFtCiAmPzNSu9KDcudiGsGMSnK6482ShrBU5aVTL2Np2JKuhCKiTGDASimS931LbCQohZm6ZVaBb4m5Pd28TfJs",
  "key9": "3qYe2XTiRyyDDq5UH3z4hEWi3rMGDEgfCjumF3NkPnkyWhGeV71GbpF4RP1DRc7u2nHQrFmJJxTjtBkWGcTNhEPZ",
  "key10": "4Fcd5hecrV4MMsxGKc1qqxpz7e4A5BSA3P5dCEZNjpu1TavyQ7tSHnMh4HwYAMCkPP3ZzJmsDWAGoVR3EkaNrMy9",
  "key11": "38WJ4fw3LQzbrS4wDDtudXLrqJoRFmD9Vagy5SeWdCQG6i4dfVJcZDyv2tR254aaxAUTUyJqFRfqcRZPi5TBfVH3",
  "key12": "5pNE32v6xMFkFCdpX9TFMTDtpWNeFy2ptQQxnWreWP679suefaCSSXao5hj5XXDcxCHY1QKmkobjBFBaYba8bqMd",
  "key13": "4k7WGVEHkrpUjx6reP95c9t9g94cJ7cxzNcQiAvKy8ByxZW2e4t1uc1CpTzq4j3AdDz9Vp4dbKGYeLTLpWDmyF1B",
  "key14": "3hXFALSNu73LWu3GepJAphthmBJNLJtm3rPz82x7zogkmbxrroTExvzG5oCUJT35RiEgZQrQfXcia4tJZVzDKi7Z",
  "key15": "3pNosv5LbzsTzDBta8T8TZT1ynaGtM46CQWtNeXBcMdBTNzrgyiAdhVqSBBP4Q9GxYRJkm8shgbZgRdVSafyToDi",
  "key16": "42geumz1j3BzeS8x1yArJ1c3wQafc1nU3xM9txNtNqw4wMs6LfV92pQaiczYzYQkNbfkvrWTSMTFxX2nDTchuSei",
  "key17": "4U25DQPSGCeLTmZwcsaSzemaV2EtGUZJXCm49C8cRAwL8gUWqC65w9nA6mU1wRFH9aRvLvQvSXYk6yfy8QzTHUfo",
  "key18": "4Wt4LcieSJQ7AVy9WK36AhyzRQXucDSpMCufw8XCKoXabdh2b6LZRkEJLQvAv6mdhyAUpzWFBWf53dMD1yo2ESpK",
  "key19": "2DPeZcjyNrYDSuvWgjn9i7VxrPUovxXi2To1AAuKgKExy2zRigDGCVkqVG3fGbKYBkVocAbWoypPCvDgyRbNVigU",
  "key20": "64JUprciyxupPaBU1MwydbYpgBuveNDULo7XX3w99SKBxGwBzLnjhnJT8C2bTqvzcqvNEmLbzwDSCJzHt7B5Sq5X",
  "key21": "2QfezqEtie9cwgFTFYTHiYY5FuFPRn6fuVveZ477Ag54C9JWpppwCKkmDtum2mfCVmhYcKHa3HFVHNgMQ3j9a1vn",
  "key22": "2mhaUmLc4RTdQpCHtxb5HgXGBUGsaGeQtDNhodSQMxUjSiKzDLVset5bqqxPXD1us91bopVRzC5saDnefB7FJuag",
  "key23": "3ix2Q5eS5EKBopjgPbXWyTttMqxKGd4K34mWYjAedFZPuHretWf3GcRLPXD5XdpPqZU5NeQy9NW2SeizdNobMH6U",
  "key24": "5EMjZzotk6jMzaVmMo8rde9Doksx72svsh1hNpyhFs1iE7gVsF9hsHtkaMPNKjzNT1SarRbE8Fax7tusNbR7xhVP",
  "key25": "39u77enZ2StGpHPJetqGWzWJ95Z4vUtAk9F1kCpA5Z7NrioLifCDLkCP6RjNXo1Xx34eS1DeMvrauCyUt198AxvT",
  "key26": "61Ypaivs2VzLCMfwoEggvAJwXBJktvVUZ3nCV1WgJqPBZRown5GQebj6eVEAgUTBQp6Hgv78r1UWcMD83hDgvSnx",
  "key27": "2sGeeiHZwpYab91wsuB9rQPjn4UBejYZYgfuKk25MD4ui8GWxvuL7VymNCgpHUCMhpkmzHU3J8SGhNthLwKpL5Fy",
  "key28": "TwCZUBis91g8P1hYH98rXHJwYJpgEushh8ZEEe6wpvNYcaahJPtxfvcMXVojmG6JBuBtuUk9XtvaJovrmMu6dos",
  "key29": "8MDCkQn26MLgvD4RMX1vDYQJrhtZwLPdTKDsbUBdUZ4FdgQCzz6jPH9q8Bj6g8JSz1Uo9js5QWmLch5dosoMW66",
  "key30": "5j77GPPrAhVeZH8FQ9giwdRqXSRw9yNr22KFRu5Q4fCi3fDJCcqYnxcmEque8cTdniZVWJDG8T94XD7tfUDvg5Nh",
  "key31": "3WE6LyXfZETiyvdyonSZuBXvQyGPtEhP6AzS5hBQrbjBwCsWmWdYt5uQBVGBTZgbqmVJNNL2HkfVrjguG92WDi7b",
  "key32": "5nTB37mPh5PJ488muFztYuUf9JbB4zFRrHs8CoVBeVNYRkGP83We2j7AnYn6futRtec5Z2mV12L7vRWbTPfkdhe1"
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
