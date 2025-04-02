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
    "2BWQGKEjE6XwZgc35asH3bYhaEAECKqPA38tTHdfsGrgwip1JtstV9Km4nqZgAS11TMSuTgkv3AhH9P2tuCyLiMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XwffaKCgjEWDSkdx1256hAjcYEHxNxREFsKm2TxYdL8JMwg3nT6weEkRQTk8cA2ZJZp5kutRsZFbB26zQEnFv5J",
  "key1": "2ZvqNjwiSzbzkQNPseANGZUBxyEpa6F3muGGxNgqQXurBSjS1tctFPTNvrNpZxYAYGJphwqwmUMDM464Nb4V8cfc",
  "key2": "5vumTQqpZfLctEvvyCLFYZ9hY1EcV8t1pv5PwR1ukEWDRwhqXaDD3jBemAaUy663DK6T43NQU4c8rKczxZue6BDG",
  "key3": "3rSGD425S4krz9FnUmqA7TC5uZpJHZRD4UCwHfoimvcwCuTTrpkpU5qdMCWFsCtNdKhKJgfgfJcGYs3Lg6sa7ykZ",
  "key4": "KBG3qVgqtpWSS5Fb7mVV9NPTWi2EVSBTjFi1AAZr8UDiTa4umvApChzTLe4r9j9YPXYmBXzuaqQveMMH3c12oSg",
  "key5": "58N1DYUiH8s3rNGLTxF8KW4ao9p3TRZmTgHNWt3UVKQHC8Ediy8yrizqUftggCpDn7oYxuPxU6km4V1n42hxx8Q7",
  "key6": "29nzv1nEdudZ5iYeZ9192hSqC4kjjoTMTxZeqx6Wf7wM3HkXRVur4DhMQ1zGgLBZtyhLXQvU4NzfoQBkD6e6uRFm",
  "key7": "2E3Lg4QUAC5Z6SEmaj65tnNXJkqx8HTZTxqGXfGTEyRF2NX6NoCwT7JyGUrQvhUiqRZKAbZVWCVzC8oUUH3tTPP3",
  "key8": "3MFCJLu3hGSvDwrBhCnjHHAJyFBACaHnBz4416shvXVQzYxdxe4qJkfExQ8zn5XdpGU586XVpmBVcBDa6j77u4t",
  "key9": "3RPTLsqY3AS4vMcX1oo6bjjPD8SJu7NjCB6N6rTWtkqozt3H3heKYdZNPVR6Grsfx1dyp3GFN4sAfhTDDKr8k3N2",
  "key10": "JUrQAboaSFw35qrs1nYUzA3SMsDrq8Jn5kXMrjCE2w77nUu8euwLJaqUTJGGNKMupsqdbvSBJu52yfZ2jVVZ45N",
  "key11": "5rztjJGSMRbEcLt9xhZFuQTrgSXH5J4DjrkEChJNjrSbPuMNVAPgZHx7vHxvjoGNjB8cCQSTrvNxwz2cF79rMgb1",
  "key12": "6TyrCKdmE2wPSak5H9Ko1CMtnQi8vZst6szWH8vQfNW7TUqT9ejrFppzTNfmdJ6ncYj898n2pJzfJzJdEDxnuvf",
  "key13": "qZvFXRj38V3S6B7PU9M8XPqw3Z5rJV6497cKHqjB3Nuf5fSqz6UyMat5n6PK7C8AZPC77RsN9dbZXE69d1fZ5Ac",
  "key14": "5fSpa9tZehfYaDdopvaroNA5bFcrGxWvvvSZc6Ynf4WtyMZ8rtv9LALmekZh1ZY9Gx4Z2RRYVrVR2AjikBuXyDrL",
  "key15": "4oMKajLWu1CazhXAp5qWrZ85C7EAh5GhXGrgXnfrjUnhn6W51g9WJT3KzTFxzfPYQTg86TwsZ6GEuQmfn921DuTr",
  "key16": "5AMz6RxeH4gLX55dGpeGVTBKgaShXDhFyyNTndYrMAuHTTSfVG4NvYhtiwjumDWERdeQdcs18bC4Pev9gsPuYND5",
  "key17": "3J1MVYkjNYWE2h3yDs7mRTWTWsUqyYeM76XPox1q3REJcMXqzL1RB9HeiD4eBa6vBxQCtabsQAap95FM63jDY5h7",
  "key18": "2r1R6ieNpCEmHz6xXs681RPNxrjDMaQSdJfN2fG9phdgVLEKP8FpG74z72RGZQiMQyT6BN5FuAb68R13J8wXhRVA",
  "key19": "235Z6Cf55uTpp5ncr1N79uTQ5mFnDXQUvt4PxzYnskYQVmqkz5AN1MnVr7PMUabAr2ep9p8xXjzZxJb6LwFhddAK",
  "key20": "124W3FBQJeBZudMxDYqWYpiv3p2u31W1gMTQtizadmGhQLyVEfCBUXHWrBijQquoWygcsWS25796QnDhktMaFQpm",
  "key21": "5hgjaFzwXAPm4BEYQCbUvvVRF7SNgMTLLSok8NdJJosab4RJV3KLrpcaNjGoT3dEpTw66NrfgcykV1RYB4gv9LsM",
  "key22": "2c3ioMGC7v9H8RkXnMnBHhMYZdPtpJ2HC8bwaNzXwXnSvguT3FCCtrpMwPrWpL5cPcRrYrnfwmTYpHCNmes4p1uj",
  "key23": "5fgEK8FumrmP4rXuscipVsv6wYLy3ca4jdBtcp8icrz2kP1qku4VNzUbYJkaC39XX3e2MvjAwBafKyTFoLfGNBXt",
  "key24": "4k5tTfrcmTSrQ5X5pJSwVW77bcAb5JaH6LhHiitTHM2F3skRvuKuFWmnfaKTr49rKnxpFu94MNWJfHPRHPmJFjH6"
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
