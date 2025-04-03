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
    "2RsMpTnjBo42KFBCzXAgFN5fAa65amUkvu9Y1rmyqkeUVamtFrZvEdvGwmeNudFhDbApaCHzoEgtQKfNfjAgZDJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8AAXdRAD1UVZ8Ju2qutwTdr25EuGc2JyQTgS24YmVGnLJ8fC7T8nDDGLBBmAMNxMvJr8ffskQf2DWwKzqd66qZ",
  "key1": "4zmC92qDR2pksGoWRtZE8jCFZRgmGPgVQGVF3NFZNphZHLK4Ayu8uG3T1YY3wuYnTarkX3jkgDNBD8oWkhi9z8aP",
  "key2": "47yNMyc6HA4AD42uMcr2kSd6gYDUcoXUXtwsJRZKaBg8uUYDkeiE6NwvR9i8LJYZC4a4f9sxTzhq97FgACSENcu9",
  "key3": "ULKvreLyuxSLDhEjYBUkdPbJRwoRuELSFG1uK5k6PgtDbgo3ZFJd1R4MmBSW4JbCxvF4mdjpsafS63tpe3gnwA8",
  "key4": "2mCSHyVhgvM91STVEYFPgjmSdLXKyYj9kJwoc8s9fspBN1xCwb26SZy87bAMeYG9FDEBHcYgtEq3wsykNuenZ4VZ",
  "key5": "5WQf4cP6XRbJNShNYaQd59qe4cgYpiassqHosV4XFCu4JSedNhqHWMSvtFiZ9UkpyfExnkiExqwZLb5FRgdom3Kg",
  "key6": "3HJ8yweA4n8xzvfSR84hBbuXxYyB3F4dr3bBsVCFW24JTtRL2ftZ5AMtnCTggzV2JnKDccEQDyzQPns7259er2hV",
  "key7": "41ryYiC6ZuPk7Tw9DFvmGpJKEo1dQo6wsTtVMpsGEyzV5H5YCYkrkUZxHYjZV4L8N59hB2Fq9WovAPguSH3kS4cX",
  "key8": "3JH5zE5GjRA3eitHC4pHWeeeqPxFPsujBfDpERLHwLJGvjC91WVroz7K2VD1QsBipdZmf5CaT6KjMKDLerPXfZcV",
  "key9": "4dvE2p79bykYoyhZpuaM7LpAV9UEQydwqRRXKB3c1K8cPdzta8yULwbkX7ArTRVnzDQn9eVj2r6aBVHPDHUfqMpM",
  "key10": "39We7aYsctyhUoyjtawsvYhf5NeMFWt5yR2qBAm9vNpErpVS8SVMA5sjDNNNPJQvx121SDLwkdNQpXybrgSUjNT6",
  "key11": "5WkeTdFY6aamqsHULEp32wNJJPWaX4bzB9fkahoCary4AHA2EtrmiuFpU7uPb4EzDSFuGhNXnsjsqD9Q8Q4zYjyw",
  "key12": "277ac4frtc7F9uahbV12v9P7ZoBK2Xbhx6ehywr7PRmbVQL9CdCaTdD4fsUpCrEGnBKVufcCP42eYQEqpFe3MTqr",
  "key13": "4yo2Bu16AXjGhfZ4S2CpvAcRiKTWzxhzSyfNJfgpNnrT2SH5QLyWK9qRyas9K4M2NnkLibEgqXqXP4v1vfQ7Bwy6",
  "key14": "2QohzYZsfNdhSMZcAMjwqSvQQyXiMbuahQdgynfAUL9obdihsHqhmabEFhxLUeJW39uNCA96KZZUA9NJibEcSyNB",
  "key15": "4Yhe8dZjuj1CWCfHLKEapYV4DB28RdhyKyNXg7QbkQULCmkw93a7NrW4iFZg1rQeuLyRb9J3beq9BN5WKW2qRb8V",
  "key16": "4sJ2CH4Gt5GuP2dg3aPhnNtXG3n2P8gqwEbCERxgrf4Eb6JXtn8nZixfRV91bAaQd3k8Loe9cLSgLYFPVUm7r2hX",
  "key17": "36DVp1Aujv7Lvw8RFHCDw9iJ5mQL7Ddn2vWz7s1CbiMQ4T8NabfSdYRDCxdYg4mx9iJvuJ57QGi1PEds64t8rp6u",
  "key18": "4LCpvafX7hh6xJSwsP7hH1nr5untiUZPggkUsbCAh67qHLbUc3otLRS9Nu3nbreE4y4BVkuM4dS6SzCnLngcNC6e",
  "key19": "2fCduptZoSgGgVxYftvNTSUDhYohzZ6LBC6NeE32wYwe2aTZn8LHyWYobwNuysMcPV2zDUq9WTgKtjAKPLhgCZ3c",
  "key20": "5tZNFEp4V5fuSCbzsdd6YCcJ6FsA9NdEkTS8zWGQc47Dt2ygVnVMdwikjs4sLKm8TcthtxgjkTcH3ejBNSRS2ajp",
  "key21": "5FriJMGZ4c3husreNe1zh2sKBQX1fiBmBiUtYUw9a6o9LYVtAB3XUNZ8MApYmqmf3r4gRLB4bMQxyFT2L4WH9VGi",
  "key22": "5otp7qcVGEsFvacurqwSD3ARoYfPmetPcFCNLFcZ3RpACDDt5UFDEfQpxyLb1Uas14RMP2yx9bLkb4MuG1LdTkDX",
  "key23": "5tZZL9vBSmtaS3rxv1oNxwQRx7EzxWgeET6M51TG2bugfkHCks9Fh5Dnty96MnA8MNz8HUPVr8A1UwrAjzRCywfk",
  "key24": "5h3AjNxMVMUYvyK8P52RtRqiMC25o7zgpZnCMcPMsYdvgXCC765Ypci5kREoK29Kt6aiitz53t19MJ1zat3M7kFx",
  "key25": "5oP828cAYBPj3z2rD5jMSWEv5vz1K8YcZNxSKtwvW3tTT5UWEdLxYo6hR3TmqmYHe8X5XcbrbCreVa9eMKctzFfi",
  "key26": "8sEuqpHAw8phdKFPNJFsNPeicrMMkLkfNxYPJzopx57tGpoJd6ZvFYzk1ZQLEsHU9rMdVLm1DUUPvfwCwzwE6eE",
  "key27": "3VhPZ7njXUKsgNY6qnF7Waa72npftGXNoVUwsEBCjEhttHAXNHYF5Eoen7hZaJ6H9S7MiWL7d2mXErZkDVDLWQbL",
  "key28": "3tg7Km6gSKkFd4Xp6PDMUJP8NaScQwJT9JHH7ympQX35BtM29FEVf4TgYo2hHSadn9vrCi49i7GsjzBUmEB8d7bD",
  "key29": "4uFG4awNfVH5kp6sGxHujhV7nfxABv1BPjMRBrJDWk7rSNwyp1zPh6QcM38epovVoJxmAHKDE1Yf7U2B4kagroYr"
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
