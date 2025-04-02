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
    "2PiMFFVAqzP6PbAD8fuA6MV9CAiB1PKigcXMkKNtemsFL5iHxhE2sViMgece4qpW5U8Y7TQfbk2ZzXu4jZLaaq74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtH7FU7Cev2X8oBNLAKtniVpnmFgmjHrfMN2f7WVdQL5rLiCuZw6StKeUdqPn87FLwUpEPTKtUXF27uu9CuGY1",
  "key1": "3P7k5ULiix7JG8odiCCtT3114GX4i7w44444hJmwbqcwZwmG4NGnvASe2fB9MFiJoDdD9QCptgCkBDWmw84Qp9Va",
  "key2": "3Df8dE8VvpmyagqF46JHEPBYS4yX6gYgidk42iTBNuwXd89e3hUGoLvzFvsubUeZXnKH6t1fFwEJ6jdRoorWTPSA",
  "key3": "47KhqWXnr58YG7S6GWLaeiaRuoh6KH66KjKQFdD584Jx1SrK6xLXi5MvwdsAhMbMj62BADtQEc3HZsqdP5V2WS5E",
  "key4": "27eNiMRdKyHFPGPjPpoKHNHDRPSNLJHfstbbLoTWx5fyCyoVjQDmF9bw5skT8ubB2mbTb6jYTCg6uhjSbk2ryAid",
  "key5": "57dX4exhwuTU7kSGSzzwEn7L7XuWV81dkjjTsRK4GgpUeGUbzRNMeed7NN6NWzDLYVnDkmW5v2ZUyYjtyXQS7nzd",
  "key6": "FGhEH77dq32rRcQD7bWKTpd6xgSecf7qZELLGJ8sZ5yVwhJtGqe1RdGHMJCSyQFNf9H7KY3sQ8jNtBz3C8qbyN1",
  "key7": "QbDDaAjtvguaNkTbrqiFRkqWb3WsF1VAkqc15MPuiyzEtEwBPrGZ9trfxcUcFGrXrNBEbc8s25fnWAAwztuaTuH",
  "key8": "ZWN63Amwi9sHoHfVg3d2WF3fQ6wmx59egDzSbVaPvZmBVLfFUuEX1M74GFPPurdzx1ixNT8dZmyeWqCoYvzBwBD",
  "key9": "3rm7VPFzFZyAdbXsfC6FUZtf6C3Q7jCNmh258TeJCyu2rtaVPqmjnjkoBoCGN2JD5nvuZ8wc8fisEh5LiYTRiBBU",
  "key10": "5UebbdGixLdY5sDmNTPJ3JLqs6AmnJ1AgVG8C1Ptb8ZSdbmVHr7o5Tenz6dSznTZtFugyNKmYhSbGeU2RknYRZhV",
  "key11": "yxjDR9RqvU1mMY5ged4xwJHk29JFNDVxuU5FXxyWKYVb5Kuzn8o4A6QdzMvt83Z5gYZtyhbX7wbPQ6gMs4wxpm4",
  "key12": "2N3KWMkMvFiNQwJYw2gbn9YcDTD48LVpGrW1W8xvNDTYQuDb7URB8o1RSQnwDaaF1T22pjPTB3SFDiHXvGGx3ujB",
  "key13": "aPeYq5h9itxkHsrL2i2RdAauiAcy7wxHcbzwm1CGGKvLRc5VVX3knzxcFYiaz7VXTNkJ1KQofHP4gHETjJt27AL",
  "key14": "4mKRJtkSRYnFZFtSo7iP8xSKNmXEaG4eyXhDZ14XmhJRSVtLQSp5B6acuoYy4hAwoRAKj6cavxh7UkTz91YJskQh",
  "key15": "2gKbDgAtj9wn5ztsZHrFfX4AVekwtSPKvGs1XSz8wyuaqeEAJmx6951FBPD8gnG9VLgC2sCWL9P5JAbVfStZXAaB",
  "key16": "3a941GzvYwkrB9XFfPUxMGdYkP4ZEkgpCBYpeLkhyU7swWkNr6Cgp6ZWUD5yV2v7nY4kxtnym4NL7pZEs7JPdsb4",
  "key17": "3qHgzzvvFC8dhMDtn9w3oZWijQcFJiwqUSWNnXTi1d7BHxtfpACqegHhUqJytXRqjMndUgAkrPmqzp94hrbHpqDv",
  "key18": "2W3tskucS6qd7knWRnt16Uh7FedY2iwWknNxmGBX7KiNWd1eZLAUTmFTrKwYbp5DH5vHovPfkiPJViABdWKNYcLv",
  "key19": "5xSwEjuvVKitRbFs5uDAiR2tA2mZATeytGp5oh6SQKfy7P2vLsAd6ovVbkBCkFH5BTxT5Zj1Gg3CHivLUMZPCJrn",
  "key20": "8nByvwb6q7Xa4eHWnyRoF7cGdCFty628VNohb1CkymfuW3S9WYu6Cfpzn47QcuhJ953SCz84LDzRfet5kg6XFk7",
  "key21": "eBmY2yr12pMDT3UYu2kmT7ZX4aqSAJPpiGM3KfHXBkwB5txGw7GKZiMRz2EnQBsUFPPMJGmhhqKbL4Pymn5psAM",
  "key22": "3fxURfSNGgAUo7W8Je1KKqnKthNHAmiZKpxLKMeWokXzxPYYwVNKFiueV8s3EtCXoyy3UtQ7Nbvctxu5xy5JFYaA",
  "key23": "31UEtPbzKrzPm7PiMQyvhSL54dAm5z4RGEKXcFBhrtDB9j1VTBNkeA1Vu7jocMfcwvncgKeV7Y7iSw3t4bcdhimY",
  "key24": "63JaxoqUj8aV6yZQ3QpaQyjnECb6LLciNesNoN86TFArrn1Gd9oqPWMWi5JetUfbxfa33NDoz6aiBFr8QS3iDSGH",
  "key25": "2GeQW2pbyiGNUPJwb23cyRyrZ5Hvf4Q7oYYck8HbQ62n5A181HCmjhbhFbqZRbSbikjewkepKArMQK6akAYvC6VQ",
  "key26": "4r28vrzULRmt58H9kCYm1hDqxc2jpGCygLL5PKMMdZLhRTV6v4aWaT6HzQwUzRFuvrZLbCMAVPXF5RBsohWVuAvX",
  "key27": "5sFbJNQ7NM2aLmtAsNcTHyG3xjySV2VvMUbeZB5PJtprULMDguAxRuLo2rw9h9uFpUqCmiPSvNWKWBNJKACa5yRP",
  "key28": "5Q3QhQ2iNrRxZ4hELV4EVzCoiTF2CXVVyXBBzcSVZoFXWaTzpfk6z53aeHQuz2rDuYHGsEVGvdUuBACCqZB8we3T",
  "key29": "4xP6JGzDd1Y7TR7j7BK8mP7FYxjRqzu4LU9KotHVpsHwkZXAYnnvGTRngPfShai3WToi5bwrAb1diSVyVhdUAmWn",
  "key30": "3sc5VeNAag5Vta8LH3jShhrrHyCHz3khKGgSZDoS3qCLqart8moqFPehtWpHfJZjepUKtd847aBiRupqb7uYMP5Q",
  "key31": "4fHoD72umhfyMhjJYZ6RM2eX4AEHaRWrDthyokt6cWKkrn1U4AooQ9wVPuSmVH3dZbTdWeqozrA8M9v65TTyRN4C"
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
