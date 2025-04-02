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
    "4z1FszazEToBQCuddzGFHTCKxNPTccMEoYL5Lg91qaavZudy5pJQGE1K9JUcb1KQDHa6LtHEuoecwwiZWgPX1afk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61AZodv3MW3F35d32G9e6aRLED7jhbba6SiVi8hhA8wPy3nwBzuLxhkTxTqhEW1G4vfihE2u8dpeUYBiXHgot3KE",
  "key1": "49GZVh8nHArYzQGfw4u4Ky4MvdcY4e3uW1AtbeP5Y94ASsNyo8iGRpzcoF3tLoW4hbewCAiXt3AjmDdTow53RNLZ",
  "key2": "2KHQXAxg2H4QqozWkH6B21dWn4YfzgmpoceHBjm1VeNmmv2Vn6mz2TW9oBk86xPk8tz4FpvCVDaeFxWsAHzYFkVQ",
  "key3": "4EqZnWj97Ts3f75pn6V9rbdWAXxVsN2eeaDdBNHMQkt2pXGShVUvEShSG5nEu9P7qY7k3SR8Rqmz3Da62Z54THNH",
  "key4": "5vWy45rTjuQ9mdGraFWaNsezaxSnXJpExMCwsithFD4pabFRwkG3bSGbAcvKRmpMLWxbdtNhnhAsGoZ7GEde6yk8",
  "key5": "4uR2RuN8MPrb5w86zPjFhHNzzFVx6ZT1tiJgHQYNksYk623ydWUhJq6AY4GzgkZiJBQdBFbrTa7hTLXD9fVTr8PG",
  "key6": "3AuL1qFRKxFd8KqhU6URnsxJXEi5GTaXWeKLTsGqZbLQNCtjZkUrNgcyp4SHjpnnFBtRm2UernCkwGq3HbZN3p8t",
  "key7": "4GZUxH72w2zo9FmnfHDfaZvtatzRg2EKVs79VwQRkK1LfWyiKjiop4dJ4u37AutwPZBJRzbvzSaxEJUH15zRTPeo",
  "key8": "NR1WTecdekoF9Muc9MK5Lo5G8buZeWocLa7aeaTXuRKRtcwf86xf4R751tFZgg2kNw9xjVbcx4SAZirQ8eY5WhH",
  "key9": "6hyHvfM6wD5AWW649enXAVKo4tqANytnxD7MbcRFE5Z1vEFukkVzwi12T8XXU7qXjHVFtLBB6ZauqTKak8Vb8oq",
  "key10": "5Nh1ULV6ByK4yeJFHA4n1g1fD7sXhLNUkSruF8DhNxqFnt8t5EJLLsD7MDc8Yc1hFPgFwRB48KK7Zg9nbio6Pd5t",
  "key11": "D9eUEJ9hhTQ8Zbb612ooxKrbCMqgAjM2Qw9dDn8VsYP8WDuarMSg6gCySTWWyfWsZk6g1jMA1mHcbD7PLD79UUX",
  "key12": "4oPCGver1QXfX4qghpTDNVRHNaNqFmTNjzhUcefLKBx8tFrVtUQQQ2c88Yh3cwG94q8wN9v2KMWh1rzfWsr5Rb6W",
  "key13": "43qGHVB5TUXZ2kgcma1hFTsWZHUMYWQDAVKwypXfaboeTD1B2BSK1Py9XExnveXS9BZdpGMnTpRGxpCtteURftEe",
  "key14": "5nHuRuZCQbRuFwcx2ERQEAiKEX2yvyEJ2MEbVyZ2qFjS6QdEkqNgXQnddtQVzGadPyvUdjHEJATH8juke3i9i2oK",
  "key15": "37VovKkFLenkCRwqr8bmgJcyv1Z7LDrbjXxExRC38WiTTAnru9evXJVqEpTRFALZd3RNbDNDsQNHFeiC8QuQ6MWP",
  "key16": "3rqw6h8EuPNzV6ffYJbN1JEEhp8zTmaV2QwQ4HjdMgyJqq1hepRxoUStTo21goJbQTu53x6KsaGAR4mrwuySDjm8",
  "key17": "4a6p8ChFi9sJZTo3b7txxtTCwQ2J1GGReZQY8qJxPqWX4WCUWAQaY5dxYTTYAzooF6esNuREttcgYJh5KJR35Nr2",
  "key18": "3L33Wj8ZzjGwyuhNoazGBTs1EmENcommTZxKydQGU3BBFxUvL2BsAwWgKAAkuj2vUhqYsN4QHdE73UvtLj34yUV7",
  "key19": "5evR3HZL9D88ChnqcQbxZXuXKHWRZjGNE8Qh2gf9cnhqetHzQy1cN8TTk9PC1xg3XyweaetZr3tFbkic1Y9cnRXs",
  "key20": "4rtfhXGQYHKZWAGXHRiu2eufeZLSWkmEEq4UbRgfuvaok1VjajzTKzK5m7kF8LToH57RzALAmNFn8unHusPrb97R",
  "key21": "2aMigfDfsdGHYmzXitYpHcvigUAXSRxNtiEoFq8JHPFzjGLQUoiU35K9obb4c8fdPxy16F5zCMXcS7RZLzWQTWQC",
  "key22": "3DKzz4hoWsMNyNLnTZwrCPe9Aioa7RuQ38f4AdHHL7Z6Y6xQsfkNWKY9MbhZnNS2mrf6DuJceurXrjM54tbHcEfr",
  "key23": "4hyCj4YzqmRJRnYN3STaz1jn6st685BYSwoaw3ZuzNv1xg1E18TSzU3T3sSREEmSjEr84vFwW2DRfjmhSiQRyRMi",
  "key24": "4HTDQNspA5bw3f1NSrbtTpom3ZfGFC6WNpx6nrPAiXskkgU8RA9D4fnZQVA8Kw7vJFsa7rPgZf4ipAG1zWowzT4D",
  "key25": "2FspoKrfJ31aS6n1iNna9q3owdcPsg4jHgT1V2gRGdWUvDEb4HYgjeo5JenHDcdmmpi5bwqgFpPXTUDyZXepBX8H",
  "key26": "3cKXPAr6Ve6iZHAPP22spL8htWJaGFw8Z8L2ufGghZWapALc4h1Eo1LJ926G2yYvJB1GuGS2aFP4sodWiEKNGDKn",
  "key27": "3VXnhyyUhWEKTwwVwPU6HN3DJozfm5R3p2gWfpz5Ka6Pd1tNutr29oGk8sKSEQed5CZ7ZXq89oQjLbMUbV5hU5L9"
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
