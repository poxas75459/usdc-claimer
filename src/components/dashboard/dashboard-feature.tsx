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
    "4hKVxvpCpiJhgds7zvsVe2JyP8NwaVjPXuX33wF94sfcfDWiVWGfkV2NCaf6BzuN8QrnLPzsepMhTpL8uAzh184W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZtxzSHfBXFux4GaH3TwMUaDB5NDeWsYcPVpGxChHDjAg4MYYZ1sgazGKXcpGre3BdRBpXgeYJW422ACXsJ5dXdV",
  "key1": "3LziiqDnMPTfBbKJRFifNKRUDYfN2BZCWgbL57GbuyXdfjJh6xUegEyjfQwybqf2h2kf86QmEm3gNopsBfEX5w7j",
  "key2": "4viLSf92Tfc11Aow7ujMAjZHtUKMzrbq3aLtAk3R7UBan9oQRsLzFjZYgCJHm1FY59g1c8CpjGd3LxBCMwYjL9Tb",
  "key3": "5Dn3Xs8pDpcyDFPPhQJabvFLtN8HdmyZs67WR3tBf8YUjkSUZzgN3Cg2a69Her4HC5pJiqRfBVwxLK3FuhEvte6T",
  "key4": "3ekhYfZmoQ3vaQrZPfToxvkhQgsAdzfASeJHwnLokhP8hTuMXB6ghZNwnQejP1gW4Z3HyUtnaGaHHEDNxurJoF3k",
  "key5": "5DBTwUwyaZdUpzfNQcYPiaFPrkChydnCpMoL2pZ7u7uug3Jt79zkGA4g3i6UXWSLwhXqpkALNRr2nzWsLx75cTCT",
  "key6": "3W35xZXwGhjWvXTv9P76VXFRkn9tpTVDQP1Hgy4uE2kbvma7NBE78xNFmNnnTftT1WvJLLXNmzCbggJ4r3hmrPNf",
  "key7": "umNUpvStj84GWYRuDSxhdwnNRmc3XizsqQrTyGap6HmNWdRQjuXGE7av36sahkchFWaStWsmYmVvVEs5RCuTDGP",
  "key8": "96NxYrXBmLDKRdKczTTjH4heq33aNGJQpAPPR3TyxPevNDnLW3FCqUHZuAGEehsXs6pgqK4nHdNbhkf6nndna2p",
  "key9": "5sv7Sdi2GemHn8F94adPjt8NG16pitZBJyj8nYVREGkkGDcFtYk1Kxfg5LVctXnqzh39WW5SaqnYtSN2J1kJ97Uk",
  "key10": "4ZzeqrJ5WzjKWp1PJ1V8vgdAnx4qsZPAkg149URsH4K1K6WEiwm5YsFZZpgZE1uNP7WxHTJskkRdxWKAu56PqjzV",
  "key11": "3Gsqd5whRYXkVesH52ms9KJsTS9aPNoN3WPLAqPVco2MuVt72b1JzVBEa349SQy9EaKtpRkLEE8YiN4aGVwGB9Eu",
  "key12": "PSyyEjGtBEzaRtiH2G1jS3A4gWbFLyoG8aMWAeaAQjErzCHwqZaSDEUxExMjGL9UbnAVR79XJ8bA4tZWr4sspzs",
  "key13": "4JkoiLtbTDiF8MVxg5dwgLqYtnNea2GdQQQXzVA5JVTe9iVCtQxjJdFVYTo5D2V7FUsv7DB5Tv6kHTUNGe2jbsaX",
  "key14": "HnzhT4ezPm3ECQ8nKzNBy8mfUsAE5waNiCmTawPQ11NEuvQnkwRYu715Ai4V9ALxVtSSztGWMmt1gh5vXz2vYUf",
  "key15": "3ebM9TE2zRYW9PkbEJm8rKJ3Xt9howtv46qV14uP3fu7hEhfkXNFMT2zHCKKb8tnEB53pk1wJFbjZjdM31HyHJAu",
  "key16": "2C1h84qnPWM52RTCMCGpGi37apyd6pzt93Haeik4zCNepPViMLmiZ9u68v8Mvihi5piaS6gGXZRx8VWHYEyJFppu",
  "key17": "FPgjugdEQmLSXUVRprqkCnxLMCY86dhHwdn3uTNJ8NcomVWcnqTvyRDj4SodsDG9uBUdzZS54smntT7H9dSqHb5",
  "key18": "w652ARBuDjNAhwW47kDNPKFexStKvyiyL2cQrL4JHjGH7UjFAwfFtMn1A9Ktou7ijBj3TKhpJokYv866iGvxmWf",
  "key19": "3soxL1CJU1h8DDAKPaaHk4GwuX3X7QyKZFG9hLSAZLfVBknkBMtoeQo4P85W8j3DaGdoVdx6BAXstg3fMek9eq5e",
  "key20": "265RBHskgYS5385QjGJT3uqrkUondNLu7cJ6ZFo9yA2Bn155QXDnMvoqjk3PWEZKZ4dqQm5h2E6pPUZsp54b2tkW",
  "key21": "QJ5JsAYGx6BWkujMRtKo4mmzM6LGB7a6QEf1d7hF8URSnNXRLRN59S4GG1436BEzpSVQEp3swnrWoeFaLUPmmGP",
  "key22": "4MQeJHEKHpAmt3aJ3115XWte3sv5qqciR28gCvQhLeBfkrrWPqE2tDH7kkVB3zyVDvFt63VPnYuXXDC2jMJ3eFGB",
  "key23": "28hifjBxDjNcbCNyfipDtuTZeMkckW1qoH9M2GHbq58PG9UDgDryMvVqK3z7wKHgNMQGgjyJVjFLGUfU97CAMqEu",
  "key24": "mF8maUcSRLBvm7PxZGLd7jzXX4J8vc8sNty2Nv66qbJ9yBbh6UmW9suvAMWowKYnQDMRniep8frx9jjDVDm2C26",
  "key25": "3JRJBKTPMypBmZcgEAWyGqoAsKChvDVVwmT56rbhniHKStZirkEXK1tEVdH8ejya6ewATx2FVNHWMRJahiSdydwX",
  "key26": "34gdz6YKrRCtu7oETUDSxJ1AFXv83o3rSqQC5FT4fpELfixr9dpAcsheQoomN2HGy65L2wwCDjNfkr8H5GfJLkq2",
  "key27": "4srNoFXgryoberetBC3rPaWrfcs2KMSfeGbfZAHQzXGmDTttsigTbMNCEAk5MLe1xPvKULMAfjQbavNnigo14yo7",
  "key28": "3nByJnskapWE73N9ak1NdaEdXAHHPrRQq7JJEJCaqz2cmZkhHLkE8auhtWEpxyrVhiFq8yGwMR8iD93T7g1BYyut",
  "key29": "5Rx2DV5M6fcgPY9PJy5nDFhVHQSYKrn4j8uA8QdprkcyEA8mob6PQMm6YMgkw9UgDun2CPpSFz4fwHKnYSXmYUBf",
  "key30": "REPHWdJa55nCPKxdC4tPK8Kd3bsLHUvjN8qw3HaVPZqLynWJdohCGwdc6ZzQewYEYsfLe2gFrwUdAbY7G4PbhCX",
  "key31": "3L4fqr9Vdj3JbUxrfhxgQvFx17ApszAkbto5537K2ujMDn2uiSbrTRfSC5AHe2BUPahx2pYWEV1YoHJ49HSVwvBY"
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
