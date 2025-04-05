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
    "2ASTeVyUz2ZGLuEE6aKjnrwPBYLT1N8TyV7PTKei7XjBBV4E1Gv9QCq56H1uoM5eFwwjoYpRFbgHK2KjHMYmX3g9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pnGq8yRWqcPPB7d1kXj67yfUNyxEH4fGFr6oKTCSoNA2V8W7XkgMK5Na548Y9zV1JDahT4abCTofVx2ac6R483t",
  "key1": "3RvbbnbQTEFu5F3hfpYa67cjA3oAoWVmNWjuEPTEE5VDQ8agGSF35cZvZ937Pzn81iMj7MjEpcskr3JtQiCFxrDw",
  "key2": "5N3G2gBpy5N2jHWbqLZ3G35FCn4QR2LmoYgQVMCLaHcTC9ZpNPHY3psqE541q3ykQV6GwZctNRCMrcnLxVV9KRg8",
  "key3": "3nMNoAvEZAa8pbT3sxfzm4w5ZofwQggkYK3kEFXyYPAToE72NGzYA4nLFLjRvGLoMtDBdaaZax1EbWFTe4HVfkkZ",
  "key4": "ZkHpVZwTt1cxKGap9uow45RXZFnPruWqWyXNaDG2zrQzQB6DsYYb5tN4NVSpaTJdFxJyj4W2CvkjmSW57WchGHd",
  "key5": "2U7wmxFQvrq13nYijowZHNyb8KaYuqkPtFYyoAFZabbsJkrnLT71BG1FrEim6ep4sYpVws26KPK1W8FNToqLXT8h",
  "key6": "5cdMZJ5soSqZ2p8KHoLrD4fSokxUpr8BzXMZwTkPDbSdD5kEWh94McAkyKF5yqtJkZv5emqPNSeuhEpdkgEUnt7w",
  "key7": "WraT5Gh35a8AcXUJJoQgqqTfaQU2qvpLDVh7hRJmhgsfZeW3vxoRgqxvytVoMfxXhoHD1x7iAxWA4aZRvvmQaVn",
  "key8": "FpUV2PBbJHNchsCEmmpxUPSpuBEb3y3E555hVi3tYXXm1K9n1QohKF3CuY7YGxPote2j9WGsdmeDNuMvXtiiptM",
  "key9": "ZZtW5dYjTFS2VLvMsYfHCTQMuAfQfjohNFLAgDGB66pps9MQdERvRotmAGZD2oXM8RsxEQS4bUZyAfJoQbj5ehu",
  "key10": "3mUwEiiqMuntYWknApLbnofko2mZ4wkkQCzS5wZXAS2zpBThkABf4ryUK26i625t35me9B3Ced56DhpsU3c5q77D",
  "key11": "5j3zXQDXafbXPpYzUNSxyUuZuePhTqTo43dPzSZXQiAw3VtzJj4K4LTuFMTZCDVpkCk55J7tabnSS2urM9QTqXHt",
  "key12": "5TspkB1xmZSpEai7ELAH7eX5dJxRV6XFeJxMsr95oWooko16TooaYesnNUsxALkAKFHcJmByLgbCw1QehBNVBaf1",
  "key13": "2SAMXsUv8FpqU7Tcz6sNZQcgw4jboJ6Ut9yvoCFoCELyhNkWrzhBHCAKLL35Ub3KbmMidERwwXKXh2cTkorvPmk9",
  "key14": "2vJHh4ijowu2nGLiFwNjUYPzwZKKbQbtCGoRzWx9JJRaCCdkYfdSC4Tg3wLMQLEoShoZJWswjqjYgzT3QLxkBpsp",
  "key15": "59nERCFC8jCrSjQhw35X7iJuHChskcYrMVsXKtxo2rXupAzbuXQyde59fUtwHXQCHk6yBX79uTR43RzjoLcnctQi",
  "key16": "2cx86Ls4bqu3RkbEWTSZeRK9SncmE1jyJYJiXccd6Wg3LSB7BCnX19PEJUhk3QUgVh1sFoRcWa6kXKnCnNJW71UM",
  "key17": "4UoHpe8D8TrC2Eikcu1aHdbTZF1EQMSVdya41NYXTQJQSJJvVX4HPrdmxZ72Fk7LcHGzu5eqgTHScpapX45FnMd9",
  "key18": "5wabnmaTHs9618WwarjnMCi93RWBEkNcunDQqMoBxb2mGNNzyMSzCEtk38JKHi4r62mrjPKBJoT5qXXV7CvrXUPm",
  "key19": "3gqA1jaNs3cX7m5vA591xX3p8bpuyNH5RBeR19RzAvBqDBMB3V1yJCRDUcHuiGZEHRRLvC3xSVfRU2RA5EJ6aNZy",
  "key20": "4ZtM1QbkjsyYuonXdPF9ZVgxbKidTxNG7qsMvpkSMRBKXqm1sUmhnppo3vZxm4vdwMMweAWaUV2j8PqVMqUWocFZ",
  "key21": "2j331B1jGn915kLPthqXEDKpxcZNCXQAsDfqEQaLL5sJ7PecEU89TnUq2ULeNa3Z6aTxs6gCysNxT6Sd4NRU9PY1",
  "key22": "4zobRSWic6upCGoTWc4X2wMbEpCVafw1x6KPy7XdquuyB6wdAQVPPnkh2Kti5ncNTFxN7r6sFcymvDFmfzhkUT4D",
  "key23": "uvTHJqNMEEZaP1D47WCFHzFNPGJ3e2pHuEmcRpR7vajA3tBDHYF7agtuvLw1XqGEMG1vg4sAwU1j9Ub6gH3TZZK",
  "key24": "5aVRaUpmgCf3mgSStL34MQNVYCw44s7vmKXWdHpehXZA4dwLJ76CXJytAaj17dWpLkeMxSSKTGquLPuwQBSKHSU6",
  "key25": "4Q6VKvd72aAKjwmfLuZWFxHb94ATrQeB8frdR95vsH6cnePAEYwW1wvxgJks2PQsbMwiTac6QRFpQTUK2QFpyYcx"
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
