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
    "4xJsdqBe4gEoskHieu8FZqSLDzH8qDpDcgP1LuMpd55LNA5C8axawgHbCTZe3hKVfWizULALUsb7DyzgfAgpZaXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49wDy5c5CdSvdGE8zkeMdfePELxMKVUks9QqV6nJZSr8uArittHXsw4smmKCJAdWzAhg2N4WmKcQeQEVh9kAaAem",
  "key1": "3QXwFV5DViYDQrywNHGwfzC3MdBAjS8tVXpsdcncqMznGHNVS3cxTxEJhEU4tYkKz6egzv2sApriyzhQALru6HUU",
  "key2": "5bSt3EMbLYFiCF3RnRjidcdfSEH5BGNq4xr6v4xZRr9hjvkFmGqXdCTVkYmitdjML3NPeiy4jhevuMVbTJqnYaTc",
  "key3": "2AVShmwT2ecWhwX3EsjMBjKtyMdGEuxoA3ai3GADyf2X2ZFSazZZpzgEvZDrcERXNnLJTNSprE38bMM57fnp2fxr",
  "key4": "tE5NjqsmtsPLKfoAXdNVv2aAwGv4hXvkvmdG2aCJN1w4HQo25EgCcsD6zP2wcyyEtFbx2EhFyq3sHiuffpNh6Ch",
  "key5": "25vumjF8f2dgQoGuDAbGgvRqwpLfJSMhTCjER3qhygJJxuYuZceVkR5UT36ctQseHu1MXJfemyLXn9ehvx3mvv8a",
  "key6": "xMbR15LYwXWYUny4d6wMVu1q2ijkuDwY7bfoodaDpkbtt5BvG8nN3g4CJAK5gXVjs8GHYk2tREDFFQUoY4SXaCK",
  "key7": "3ACwRYqsHpHaemV1wVhecEndBKc9n1fYFcNqgovTXFZjqUDfqTmfzxbBJgSVZSGdwjMXkv4V6JZ7S7b63j7aNJyz",
  "key8": "UXXH8vHv2ZUB3Us1EcuHQKjDj2tEEorFbQSQiqvzdi6wmy8rciH7Vd79dBfmWTykSyNVzv27Vpw6n4MWT41DgHr",
  "key9": "2kECXfc3q1pK19gSxvLCRg6hKfAJLGNHRMfxRiym7JKXd73DA5oeg4AWm6n9Qwxr5s57WKcnUN2Kddpib35MeV1o",
  "key10": "2QBYKjBQgN18eNrdDf8UTLa1GhxvDturxExc4w3fMKR6H7hp7vXdNgZ1ZpaGUkNDBMDQ9iuRRvKCNhumv91FBCDj",
  "key11": "tdmgLb76NHCVTMS6HL6geGnkP3fks2on54i8rwcAR7yUnattHu8hsQayVCDpcUTNJruw4ddRtDNMt1cs6eJPZxD",
  "key12": "5S1a2iTnDjmxYzRhYQUC8ZafSCkNeSwgHPYmrSGxgx3pEGHRYCc9aFbGGQTMCsTknZeEaHehooxVFW4M47ZqNV4J",
  "key13": "gv87XKP89tzUapWnUTEUEqNVR6jzAHdsLx23mbC24yueqkiCBgAeJ5T29txrokQckSXRadCvasfJgf3RLnMRTTb",
  "key14": "45bzZuvwsETbhDcu1nWKaFg8PRhWkFT7bSxDfLtgEhJp8ZDc5SGeb8UwmyNMWz5fmQjegCcHEgbgouD5cXth5yM",
  "key15": "3d9aGvd6v68iQ2XqtCsiVAi36ii3GCjFXmN75zkmgPk9jpi7XYVq6V3UW4hLqrzTnoMz3XEi2bTUEe12VeDZEc3L",
  "key16": "2hGtcof56JeU63xZ3X4Sar6VoLYnDhgPWznCsvkVDvxC5HQFXPhYAudojHvJNBhcey9cQuG6QrXnbpNgr3CYSnPJ",
  "key17": "5brNnieXpkpEaTiKL1SAhXeKtb5f8zVs7YJpKJc3TRLbvbdEuZiBCFHmkkFQoApWeRjUCdXeaxC2i9CaLCJLB8jv",
  "key18": "91mMsnxLZBXg5tunxum4rD9sPWtsqodAJYTezbd3G2P1aZu9Lw8zx1HqbfWHooSZwfhECBSPoAJDk4xMKjTzZrG",
  "key19": "2uLgbjrep3CydjkkpkmCnTHddJquRhhZJ6gdXt2jsAN1dUvmwpbaNNnzLnKidN8gfq3Z5Lo7VsnSusRyDpshywWC",
  "key20": "4ELKBEu5tVTaoy136D8hjSMpmAFecnsja2678yoYFsdFJxrwtMQKhaKZT8RYYrvJA3YQfTt7pMb7YWCiZspBwUzb",
  "key21": "52Q1fWSNGwxoeZ7xJydZqzrmYsQUYNvreGAqDrdt18yQcpTJpVnT32di5DPNYAtifZLXBjvCwKPWG6aqdfnNQbKB",
  "key22": "4uQpHBr2WNrnVs3U5mTwVH1Vy6WPS29eMC6kc99qsFeK9aJZU2RabfyDBRfKHAKRR1vSJFuG5HEXZYArVvFQQSmY",
  "key23": "3wdKryB6dvxkysx6kNZDVpK4afGiyo3N1tSTeANBdnrZsuXr5Ds64QdUnR6acw2dWKf7wshVcSDYDczWyGA2pEpW",
  "key24": "E2E7Wz2skwWmP1JAhwhX8hw1cvhRhDosJpxRBGnTAznX7sjGyKa9NkNz3b4Sa2VdmxkBnwf1pkGVSuiewLAKB3n",
  "key25": "4dfDctpfujHkkNKRGtHu8yaTnBsvkt9sHQW6byLpddqnMeF2hqsCjvSneJ8aNSogMNx1DmN51ru2ubu8Q8YQ7nR8",
  "key26": "5XyjHvTRfxDecT1c66chjzLe1VV3a85vqoVcZz811HmKh1gyJfoDE6T4ZiiJVduUYW3cV3LKwKNDDGtt563uQRaN",
  "key27": "3eviEsPk4xSzjj2pRv7WTPTUUA8k8eJxTNwfNKN5anB6sbajf2msHSriZChDgVsx6KP3AFPi7UwVEbhMCa3axo4c",
  "key28": "4ZkEiBHKtQSxExfoZXu6T7UEJjEsiFsNNUfu2LYpMm8NEaopmuK6s9jGNX618i7HoLRF2mT973mo4hiqDViaddgB",
  "key29": "4SrgUD6CYiu3WjnPZGS7omCJwsMU2qBeRW6xShs6JqXgvcnmj991JN4sqUUSnJsXY883MYyiBxcZVaCDjve1st8r",
  "key30": "3tV13uny5fc35qzdizzLobJ1bFTyrRPujELKFJwLUYmk4meddH1wFxQ3CV2o649BTUeRyT3e6LjVtR9WCsesmu2z",
  "key31": "528awsaa255bkndjBu9T4NQ9Tfv5qRuSiXnkPoEFDHUcw6tRhr1k8YCawFNrF5rKyAXEFjMhRiqJFw32LXqmLsvr",
  "key32": "5byEP5sXTDpoNQ3wgSfKfZsd3NMpL6VtTAF8jXiQ4RXcMLXxdmNzDUtkrRL1ELccerf5oXWpAJ5djHBowmoog3mE",
  "key33": "3xQ2kcXYtd45f9KeyiFJF5DMqgPjq1BnrUfzxqrGV1DwGBqZ7E8Nw1cd2XafrUMMomZsSfoPWFtNuxha7ivDvbGG",
  "key34": "2G4RK2QjoEAZEnnYMYLpEjufhypivLs4CqfdRoAi4Km7xHyoFFB8A6hz1E9MdG95snpZAG61s4Fz7LE1zfd8ViRf",
  "key35": "R8vrWSsQ1WB4ide17x23m83nkxh1owRNYMSg9aQFwinjFeGvpEbYDSbtzvW6pGi291jYUs766KrLZu7kYogVnAt",
  "key36": "5rZzZtA4C4qdrfBiAAP28Uz73GLTkviyzgyEq8M6wqVQPD2Lt4XCsvReFPhuKKJieekx7psnPEDzWtrv94Kuq9KH",
  "key37": "3e4wer6eN5WfLmzgTa3Cu7qYjCwR2riBw34qsu55V4Atq9N7PTEthiF72q3XCuq36mH7gNq5i8JFR2kHeVnsjLjn",
  "key38": "3dpqvGjVe2kRqrcdTcSA9VyxPqUvpaHicLnphtVX8hZKjjjagHvS4Cqy7fswF5TdyG4V3LZAVbhyddJWGs1kSCUD"
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
