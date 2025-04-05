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
    "5tLY9iBdy6LwYBKd5i9ouyuUW3g2ZjSu7yQ3TpoYdFc48VAUkWi1GUHB5aRtknR1eikjGuAScBrtKY6HwG6vtAnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KrWiLiAGRuNnNjGhNAw7UGQis3Qt3aV3V5GrCUERz3zV9QRNFRVaqMbsdz75pUvfgEDvCRN4qSaESzUKaFcKQ2J",
  "key1": "gx3LasYkCBqD4YhiN4DTWRvw5uBoyqQcZqiJ2WvWEWdXc2a4wksbLNVvbC5sNjYQnFnHX3magxaG2BEsBTBwP6D",
  "key2": "s1H3KHE39fCesRDjgRkNbihcg79jY6PBQ46jDzeQCNVBWoRCiScTshXmoNZmXE4zePNrZguVJytNwxBvJbJ1eTj",
  "key3": "4CcMgFbzV9V1GufpRkbCEp3qPqtbUdXUn9xkovPot22vcRM7p96nmZByBhxQ4d5esXFrpmCFJgQ6P8kCe28HbCf1",
  "key4": "pkFRnrnBmZK43yoWnAJNCfYVbZFdcV7zjY8qvKpwP4GbMbEzsxdnT7PJj8z2iVJYRuYpjtTynoNCLFLjcapHxUM",
  "key5": "5QzcoxkBxrrSJv7EhPVhK5gW8tGnq3EYAiSzqE5hb65PpQNwWh8z3Z4N1Knf9MLsUiFi6i8DKSWux8gH5GfjKsgV",
  "key6": "4ygEyaC83uGirghz1GaaJUMb8t4TNwE1YxrqJGrwgiqy4WncYwAAhzaX3HNWmDH36KNumZUtuvEZfzwv7TTXJvMA",
  "key7": "4zrLk7Jz4uwLEfXo8E2to6LUuwRBiq9DAEcELsouSEE4FhabmRUiBwnfJYaAJSxtbVeH6HsGR13UmRyiU19EKzkN",
  "key8": "2meLsHVRLVeXHKaY5dovtNxEa3RmRSd6EYGo18QoHuDABcTzXBpCrWprTPYqLrkW6ULPtkcG3Vdd3aEoNEhLXa97",
  "key9": "5HB52LDg4gnKAScmvVbqt7XdAfeywvPHjca81roMJJcSP8XDkmWUfz1hUGAoyPWj4gGbEoJdBDyyS4y8y1SegJnq",
  "key10": "27UwW7muM5asb28S1i2AXc5EiKQeVUw899coEnK67RYibeTnt6DboNb6kVLzCcjren9TAovJtdDrggoRkxZ38L54",
  "key11": "2dtTt2orcsKSAtKWu5D1ApAWC3GndmdqTjNFUkVyxNdC29mfk4tDFHYofKLBgrVCreRNb6uRAYMKUdPzmEmQmEUf",
  "key12": "4YBvz7CFY28qYDgrACwCn7kY4sJJdByLcx7ZUmMV8jHVsuhaHN7DYJE1VnuMj1wXf2KF4gyMzvYiMvMNDwfzTwLW",
  "key13": "3hJ939BMtUePGCaAAypUVzJ6AEm1hkW66HyKm6v16st7HZBiVDtJ9cB7KhgJjc9DXERida25GgMTozm7sNaB5H4",
  "key14": "3iLJeHF6JxaSd6BqWXaKTSvXKPEZvM4wYqRq5XRvcYmQRkL7D4Mi9kHmbuBVGaT17riKmPfmTNRVR9SpaLiiuvFJ",
  "key15": "4D7WBjrS27yMmc4p7TRPKcYF9ooJxzrAivpR6Ak9RnpjJXDqPBEiBYCdbnQn2RbvKhRGmCy3Y2MtsWBMimgF7Kda",
  "key16": "DK6sTNjKiQTF97mrZrSaaRSWtsmsBa4Enk7pM6RGf9U6egHT9DXwxAAP3BiAMMZRvdWaHLZwRzyY4TBdvot498y",
  "key17": "5DHmLPSRGkj2tMhGSp8VmVZYR7G6uaALBLJneNtaEQJZGWosx3Ggrs7BYeHTTEU78yUe3fDRmAiExCbZCvvNvWzS",
  "key18": "353cLFE34jY6E8bJ2vRW5tfsCrg5MqJtGwDD4iaxpPFfjsYLjEP6Zg4PQsP7czeTAtdw9ANjanvELMRWM9xbuABN",
  "key19": "59DG4FY9v2EUiY4pVmnVGfDWHNnkbvQMdheUs1mNggbGtAP93r2zZzVGfs8gZjB8yWv52n493ZeXwaaaye84o2Zj",
  "key20": "5oYyVXaQYDaVzLMRzcQ8AAPSHWUXKpg6YyAGmGwVFgX8gRxUCpcVDt3HUXrEadtovvAtT8NscGkb6SV69fZsmJeV",
  "key21": "3TQUhLL19Sv1sbJnY1ZXurbz6SVvAUbNuCaejzBK5X6TNSvd98U2cNXrnEqaHFunexfnYL1ch6WrGANEoVg741rP",
  "key22": "4GME6bgEVQyTKDT3fDWJ1w9PYGegp3ovqhDw9cqvNwgp9heJu2YFiXQcyvHTAYgE5UoD2cSV3RmNJuqUQ5812JyJ",
  "key23": "5owWVQpSHNLA7ciKaju4fr4GQaKGynkyqfrWzXD8uchwf5AS7SeAunvx7bKx6XMv5nZjW8qrtzSJg3VgLXPjWx8d",
  "key24": "2qCiXhPPzoZzdjArZtW4qBaHcyDZ2VRZL8KhmzeRx6PouyGnbZzgPaQ41z2xUaBHXKbs8d5ZG8ZZjYKmQhGi4a1Q",
  "key25": "3kGvSbeiR645PxhdypMk7KMUoqH5uniazvjD6wx4dP1b4PBB6ATL11RB8zoMJLv4jgNVB1p4QQ1rKb8Nz1drLCD7",
  "key26": "tQbFh432X565FLZpguUJGsZ1zVGz9bmiVQwVp1eZKchnGRCyeVNuFNig4LzMKvRF7VgTqq6RPTZxTnwQXARoh41",
  "key27": "2FAJJRWD92tfYhySrFE8DZRe9p76PwTSvHS9WM6QNXBtwx3c9n9H9GXKBvvo9i2ppkLWpMs84GtAsZ4yR1L6AY8G",
  "key28": "3pimLg63Le4qvXCRmGtw9gzxas4YfDqE4ZzN947A2RDFDTeXxZCJBziQJLBrUy5bWStWk9ayTPv2nTKj1T59SXz6",
  "key29": "3qc5m2Hf8GcQ2kUCxjQrtn98icyaANR5rCWRHSQ7xuHeeQXCQ3u6UkdbEUGGraBufJZc2VFZ1SHfwYtZXtdBSNZj",
  "key30": "4BvaJAp1mbrhasDdiBAnfp8DzHExFujqUYFzpkST68hqYCHgsQJHxq3epaEsXB9jmBYYkiU2ArhJJVucGhbCjNN7",
  "key31": "2JGxdSzTKYLVxJKK7X5PKCA8WCyymc5rmzzsFDbPfhtrf7aJRE5ciwh6WPhpJqAr2NYjz7LjYFRhSPSRJdbayypv",
  "key32": "DJivV96xdp8RW4MKWwiDCzo52rGRW2ETwJS7rbXfvuCPiMGZDLfYz8k2sq1TiAavzSdHkZk9AAhdVuDQfzh6uYN"
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
