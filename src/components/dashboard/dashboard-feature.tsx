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
    "3FdYdeF2f4y8Q4cJFao1XX7F9JR4woP55NfA8K3eAFD98Wk3WAvyGnKbWz5pWvVfU1iHgx4WzTT92hreL8iLjPYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61qMZPnaeaqtKRccLfxZPHUiCcvzdYis1Doe673XQqYWuogxzenbQkky7Nknn17xXusj9gXMZ66yxZj2zHBT5MhN",
  "key1": "4ASoo32bPibgf9v5U67XFRgMVdUeQN7fsTBMATM1fnJrBPjknEWLVkW1UG2Wowx1A3gFJFcGwqnDKfB7Ax3DtbqU",
  "key2": "2z8jjW1ecdz1B1KePEDSW4dRRQHZF3gDQeJxgMhELBfFPyUqkGyCng4CjGjNkhFjwTKwh7zWT9ee8t8D2eWPPe84",
  "key3": "2RNj2B8gLdxcL7J3JndHxa4T13CkT3pknUf8X8hVrQkzREK4RB7T8Wcks5hyF6mNMqp9EScc5ahg24JxiVpbXkv5",
  "key4": "2bDRVGUoQw4KuTgnHwbGsCstYufn4KWmFy2cXQc3NK1TsiAxPVKRkz6EcDsMcLXvTWVtk7vBAzZQEVRLMWjVS1R6",
  "key5": "634Ru4JRF4giRQQoj57QSqXd7qfA832mMSXhqvJwThWGT1eAkLbMMUbZ26BuTjHnxT5Him8tpBifrRZDeWRkKFAF",
  "key6": "PRjtjPJrYqYpZjpuaUnZTAQKg2wBYLgehvwbBC9V3m4zy5TBrF4yZ9PjykFNaNpxcYZR7wqidQqdzZtsDTmJyaW",
  "key7": "EAnqAEGNT5GchcbR2MCTFsTdUmYk4cjokhs78AzwYpU7KSVV2rGczqD299H46U5tN2pi8a2fr9JvcaabrfYcvNd",
  "key8": "4cEZHG2yZqZV5qkkjEZWfyGrq8vz8farrccy8xXK4299pfPYZdQtrRCTd6zXa95heTaMwh4WNdjLFb4pt5fRByUs",
  "key9": "63iseBBwmxL3GbxT9pBvtsMubwpt8dAzHbKRRoMi6LDSSo7Po2Dy1WWuGzcxpJ4ethKXMUCYFbjrXe7nTGBSxgbN",
  "key10": "QfStSeHw4jH232pZ2Y2uYGwCga9FuhWaHMjbXRHfywwBicTVsJMm9tvNWVhi4F9ebtD7UHkT285Va6ZBYYQKMhF",
  "key11": "2ibNJXYP8i4ZdL5dchtWyaYKaE876Z2dV1EdzGSaTv4JJBqNiseYpfVHv4ciShKnCxBJbcxcaKxUnRN7YsFDF6Kt",
  "key12": "4VUBKSj8j8uFcfFDDHoVtJ8D3W65Dr3sbLRzNnA2mVcFkPV88eTYriosa1S4GtaQEJR7hgkUa2PxHJfjEEfepVXR",
  "key13": "LSQkFwaw1BnfjFitqzaGfz22XfYTh5tJkvMsWFzqYXMVkC8uPvpG5PJsdh9JQb7ebdVED6P59Q1GtUP7VFjwoXn",
  "key14": "3Nn1jLmCrxDwESDxwevgeEMHrsE4LSJDJWSZCKJdnLKWGNeMFJkujXAfVpirGwjtoon7yMUbADCqFx2nNeK17PnZ",
  "key15": "mgDyVCX8dRReq87jvdtNK9kztCLCYCBso6yAKYRAVj3CsCLeiAzA71zeQZuWPx2VNr7Ksitf1ie9w1RrriX9E4k",
  "key16": "4Q9Avtqr2LC4Ewmdre6m5LNtqnpLdGBGTJGpxzh35EaVAg5J5FjTZUnhD4CoKU7Kh4Rzg8T2zAY6PYL4G4f8ktDe",
  "key17": "3yVKQzbEY5rxsKmLcUbuYJYXNfeKx3tQfczbJKAyWj3AqUDPsMg2nyazFYk9vxjYsfHMe1hiEvmHE85hBmMZ7vrv",
  "key18": "2GY3WV8TKNwyEbSANh4FdBKbZs5k5nT2R78G7yYa3SyExH1Ubz8Wzhi4qnQcGYKYJDGijKqQEitKMPrzhdFyrB78",
  "key19": "2bg7k9z8QB2AommmWa6b97Sth7jfkLe1CxVTs2RbMBW6eWrKmTtaufW42wUJdZ2amkyKLohXX4NVCftwdq7xmmmH",
  "key20": "4g9ytUpSYRPM86371kidP1o8enzSHN4aoXJzg5ft3aPANXpdxDox3hVwoZn8av3qy2shsKYRZ9kCUgapN57s8pMb",
  "key21": "3pN9gFBR41XhgrB9DMHnbB4bGjVt67PmyKgXf9JSzj9q15hA31MLPeoAhEjWcrMzGyMeGHjt97vjzC8r1edn3CZm",
  "key22": "hqnHdgkeHQaJ5LKeZZmPy5MDxa8groegU2uuQcdeKcCLgmuC4V6So7QUKbsdSvtThRTRagpxr4RZx8ieL9Jc3ns",
  "key23": "4JaKNqehvBQUNzj91kLox7MBbLpvEymz9dJnwMq4BrLfN8GaxA39wUepJu9Zd9HyTMebPeyDAnSECA9FAHYSUci9",
  "key24": "4UE56QCtm65L2jBQvQVmrYGL7ozkAvpvZXBakADukjYyJyy1a1jGEqABDFqncH1hXuTR97RLzTNus1672EiXqcCY",
  "key25": "2bfNpNgJnX4yBJe6mPiY1eHk9UNUvPowhkMKnLbqvjdJ6D4bnbreFzuqFmzaoyEbBcsiQ6CBFXiYZR2QgtUEhxmQ",
  "key26": "HSSEyFWPBxnnwWyMJorhMoj1PXjN1qeS2e6RQC53p7Leu9u1Lo62pL1DWcHNX3c6Aan4E6VLuq9U6d3t1Sk7sjx",
  "key27": "9TpehF1h4HViBXgKWG8Ru4V9NgX7diSJsTfhZhce1dpi6CNK5NPzbFG5n8gWzYfeJQ5S3gSfoq7FtoZ8P4qv3as",
  "key28": "3V22S4vT7b8XwqLjXVs9qrN26dvboMrjPY6EdWj2vprbwefbPF5Lo1e4dQygok3JPy1LP2CVCQLuY5RBSF2KvXEm",
  "key29": "oLWvMe6RGGnk3aEq8nAw7nqaacacj8QfwufWMzGg7eV44j2hvaJpCFsTxWwHzB9ZeZJCaURL1yju5aduZU34ozV"
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
