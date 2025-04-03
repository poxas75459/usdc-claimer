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
    "5sthy2iA6ermiUonoySSzdevkzZDN9tvTTY4CTZWX5kzTJgi8dhnYuoG9GyxPPsYtQvp8Yo2hYLadLbqfF72kSDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4say8sKXvsFiy2x5i5zJc7GNMNEZsK2KTFWc9zcL7W8rzro7HkAitgQUq5vSJ5hzNyEuNJHjsqR7JJxGZq77kayc",
  "key1": "3LAxNYK4WQDuaN7gio2Yn2Xh8JTUJZzo7rEVBVyPkD67kDvWw9Uvbg4uQfgAE94KNd6KXRvMpqLEBc3gvnrHKQ8C",
  "key2": "4U8XBHDDvSjHpZMCqcscKXoD47Zdj7hUMu2UQmRR1tU4KSNkrhg7xU9hVGZxgiorfE5GfUbmG4fUQLeRtzEKxpMB",
  "key3": "3Y7t6V5g15QbJ932FWXwetkLbq6P1G8tHjywbtYYfku9nhG4ZGW89GEzjgdfciWvCGiUqQfpjiRubedKXSwM7uzf",
  "key4": "vayN2NSvpWpQFa5dvgcrpSCtJ6Lmda696wReAGbAXPBMWPSJzJWW83tqBbCr414D5KWT5iLXyUPBx5ZRa7uDYN5",
  "key5": "48GBztRwfL6SvQVN4ANmgk6stfsm72ssYpGmSSWuQ5v53wDyk5V6MgQLRnXfGFsnKoPCZ4Uow4UdzsxZTd66rzcB",
  "key6": "oNyV4sBeTvFSwjaEVkLSANoqzw1MMN9NSLaifv6ntmmwUsP14zmjDufZRD5PBj3gr4j9zZqZbWcShpvvNzbXShg",
  "key7": "3yr74UtGm4M5BbhA4hsopKywqRToNewj8RTDTTHALZM3GCPpqi6SEMqmD5RCNrhYqdKtahqt6AfMyzqfZ24qhGZq",
  "key8": "2UxdfakYS6aD2G29uHCf8LQE7ZGsVdSMcdPA6fVqXymArZYuzEDa24DnL7kWYtCJ88ocFoQ2JbxkRYquiQgAZtxm",
  "key9": "5q1GNuNz2m12XMSsoWuudakfS5UNgqkXMpCwncRzMuTynkFestNAZjZHuzvpKsHm6c8Th3BWfkjVQ3MN8AgxcgS8",
  "key10": "5bBRtngRtoz89ow4j1tC5E5zo5mYPKAdyLxno55YyxDEdvHB5zUGtH55QNSSk8rxRvyDsBFiuJjPAwUzjQY4Q1LG",
  "key11": "3M4fgSuzQ4y68CH3eTyQWsx6gxXxwJWQsFdMQW2nwR7uGFC8WSgyRxHr32LNzXQeY6mPee4FPW7NraGjz6uP3JGp",
  "key12": "5rCaU1YKqFPTozL2ph1K78krZmSrxZMjMUj6WL9uw3JR47QvFUHWzS5srSq13163gAdVqJAJt32xKJ1csdCj5Bwz",
  "key13": "3X4Kccpdw7TfMHjQZ4A3V4WYeSZNiCVfAwe2aqyQxHHC9UfqrBvKv5NVRRY3fi8ZJaRg1n4SYM7KWdJZ26EcwP5w",
  "key14": "2Js6puN5GNwzwu3LRX1wcwSxKfsJYW6Rk2BpgJAVxUwdr2YfbRLSqcUYTnDnU3D6ZNTL9ySmRvLEmby3hEWQwDNa",
  "key15": "2N4DLbmzqLU6HeDJoS9cHp8vyfpMmZZ3N5KZeXTuW8n3C36UBdNnFi1kXe9fwDedZwMC9eDDfwbRNozm3LEcttBF",
  "key16": "4ALN3arHPnahsrn4T5Tn81SKnSdCa9pEM68dNXuEVNGbTQdMPZ1FWpWTqWdCrHHCMQVmTtzNVTxcNX6HJaB5CcPF",
  "key17": "3Yp9WAS2pSfV9pK4eUQFq3NsuapRi4eWtqqzBHF2DbNYEa4A1WALYVHcgK2V8kkdATBcSK4xqbGF17R3qHtYs7Vh",
  "key18": "3ovy6TpPuovLdkWuaZWwiWvHSNwJwbnHjgqnbjNrotRpp9magN9kdyQGpwu5LydohyY5W8P7q1XECKFqzbLWVMFJ",
  "key19": "1Cnr2zXgJvhVu6du4yFCWb51bp7zWBS3tTa1rn3e1tsCnwwNoU82v9tBhe1qvCxwntcxQ5iJLrbQymSG9Q7xXNU",
  "key20": "2fN1JqwpJEu9KMyiomFENR4AMGxKNBttfqPuLzpX3CXq2CU18NboY86irYqgUdosAjM8i2Bx64JKow8FwVUYFZhp",
  "key21": "5wRo7hrZkuiZtHz4kaZv9MR9ZhvxDCZceQ9EFbm2zGvFXZkH5GKSHDzQMQVxuRSBvpPTApMWLKGEW1RJ6L62ze3X",
  "key22": "5ByNiffX46fHT8TQfjuKnyHTnwA7RDAsi2BuakirnR6y53HRSuyYtTHZYyzhgFYNpFG45GFdVWMAtgyXHrcyAyvz",
  "key23": "4UCUK1S4NTenLTBKUQQMx3hMbuKwt2rZ7uHCdRrzzTDQZ2ex52RwHm7p7zLRi1N1TfNTX3aFTjZ2tYjVPe8STJKf",
  "key24": "2mtHoSsjMYJUi9pgQUPNS66attgQ4pv2rsv2mfRDFJaWYTmxnJXZb9FrrBbaE4VLty1pztFXB8WsFpFta2zpa1nK"
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
