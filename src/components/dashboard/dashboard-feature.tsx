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
    "46omkin1QUHsTohdZicAmpnhR3DC4cGR7vyRcQkC3qpkCASkUWpFqq1ze5gNNhjcbrHZ1ssJ112oxvdiZADnNSBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n9PAk2VyXtuDTFN9p71X5SrFC5ouosW3Pa7GQqajUeqrzDbPYkckdhUDWG37C83vijQ2tGdEJVTL1qaxxEJ6rru",
  "key1": "4hVpQVqHer77Mva2gNUM6y279E1MEQm5gNDxY25xev3gLKrwMXATyUMJL4DZ5dT18vkotdCDqibXyDsRg9JjDYyv",
  "key2": "3WqBdYSpR8ehtg1xvu1N3LWhCKX6d9e59nd4hhBMiNgzsepEqkTKs2gtsPhHtQ7bBoY95YiQK9HYz1siUAUNVRmk",
  "key3": "5BDyLGQkCnhgqPP893J5LrcvRBFtPfQ2JuT8qzvT2AHnGwP3mCt8g9tfGdCAnH83CtXc5VPzHPgHwpfUpndLCeEt",
  "key4": "2LoEVSaLairc8nZcemMP71izau9GfiG1pyvgTyqimJvxJQmUxzvQuBoXK3SZueqCk1BRJNJgq3MqjZ284iZLkGcz",
  "key5": "AXDv1i2q2qhERBUcAJxGztVAib338wkwtBVb6x4DJu5CvYTuh8G5zjDxZD9QTpnyFiDDM1BxpD6gmyUizrTFuDi",
  "key6": "2VK9pWEDTBE6sR7Nu2Mg7YbVHnN7StuGFrAZXynTTCxqrHSKdg6pVhvefkUfJ41K1giMs4N3zPtYqPeVnS2obLEE",
  "key7": "5bdvMZv9REB7BUBYv2kdyFwNYy7XV5oDTqvKcehj3oyjsPLeg77M6CdWJFTtqQirreyQc1psnfn8fHWRF1nN8aeS",
  "key8": "5CaVYpFQzWL7YzVWkVvH3XL8dJyd7E3pZLubMYZhwWPgekPgYvhVKeJkAr5pid5HbK6tJxcP8hh623NC65tnhVAU",
  "key9": "SF6onRux3M1YQrPj2MRPbdDDB1PjWgXK5NHyXrBvRbSwRqUGPTyu1w81Jt7jhKW7Vfje7AGMidUVLyuwe2LUeJf",
  "key10": "4FQ1YuAJrC1cLbUiAnz8yt4P5Xd8pS1qv6wjmjNt6TqXTHcztKUihhtpoHVi95zCMqYrBrtsELgA8afNroekvKMP",
  "key11": "3DmwdyVHt8kc8AH6mZLNozD14ifYziGfVDyatc5q92etttqEwG6yQMhg2Ee7TpMAkBpprhEvmrWzjq624VZrmsQv",
  "key12": "5LKUHmqmnaW3DSUH85nKn9iEJMBJHEQfDa6RF7AfDBbdpehF6X7bmFTxA1QnKmyv8BkhuBzCCtnKsTTLb7cAnQC8",
  "key13": "SLtVnnhw2hu1axH8rvwfz9FHCYmurqvMaAF8MdWtkpjtVcbTTkT9rpoi57ShXiWmRQnN4T2xpGd7iRxbq3iqAJo",
  "key14": "5wTsknozjVYNrpV7u5xDCdL37MTPuQVWtBQP2X6nnJQgrWL6hxzZpT5rMatsk58rHFevjRJLUcFfAo23nUGSppVA",
  "key15": "5BcgTAyQjWQXNMvezS42dHFFX6aA93WGEu3cKu6nNaHESqLbPMoPmSVLNEnF8w1PujawUXc6nxxfRzhxoagM3HFH",
  "key16": "3RZWoBdQk1cw6DE8i4d4tq7SuCVdABXUEaXUaFYKbsQqtqWcwE4ToSh8JMcrPdK4AW6Bn4ufnAKd3URwXRUvWgG6",
  "key17": "4a1FgKrUqDxJK2W5K8oS8p5dJs4nRSEKfQcUHXNL9seReVE1dAXs7yYGERPej1hWzNeYyXqZ52wMEcGBitwKRqyc",
  "key18": "64znMUYq1w4E1Qqrp1mNfP1tugzMzAjucnVKjVuBMMzv911ZnFSgSQY5hGToYiQNDprWquRUqp7dHEodieUvyL5D",
  "key19": "3uGHKLooDUwYirmdWM1cdmBTq4TRwjgzpUqpBcDTd2YYZNQFfiNs4fmG25H21mtsLK2o9o9XUMV2HU5wqLC6XfDa",
  "key20": "2KGaviYApdyUFZTARJCE3Pysy22CnVRqJR5a9a6Jks7Detm8zBW4MAmmPquKd5Xaf3o41tnMxF81RKEzBn4tPLDd",
  "key21": "2mfniJDCVh7a1hFWMRpNmk64YLYVv8g746RsbZGMVsGg2skDs5HgagnwcSoPXuWNMY8ktUCRLCjwzT4uVC8ykeVq",
  "key22": "B5RX6zECqbpAZkjbttysPjvsj21wVvx4Gw7dxnouGXF5pomUAmahZRsJHqc5dVBpe1t2TrTpPVWGqhc8St5mX88",
  "key23": "3gngwMdKrMWRAgDgP5beA1aMQNkt2BixqKvWhwQfRCLQDmBu8jciRqpEf7caJaYcuH58QrqNigFaEftd1VEmAeCq",
  "key24": "2U8k9pNugkk1kkoEyGnAjK5HEwBnpYtXdT7cpXhf3ANnnEDw3pmtmjTc5dxjg2Mt6cD797pmPy53CgRdvtEysqPz",
  "key25": "4Xx2htsVjsNQ92e9eo96W9DNnEjMcS3Hjdok9Dk9SoMCTYrB2QggqmQvytwrYyGdWSYbLPvFGAFFFmPEpR7Z6SRA",
  "key26": "2xZcCn7Uwp1wTCeX6ZRMe8zTtu6Qn9Rs2gSS8PCLYUbeEGGJBcspxjFzq2tqNyrQhqgE9mreJabZNr6YqMENfyye",
  "key27": "3ZeV7FFHpjgQN9GAt6m74WmY9V8reH6fQXBAWsgJnMLMBbdy2qCgDqdfU7xhZ3Y5UnKCR4UXfWKvtRHUjzAEJCEA",
  "key28": "Tq44FUPNFZiCzY3vqPuGow42EJWTwKEaY8a46L14ymEdguvkkXPemEHdgeUDpJohzwMNRt2Lmx2reFXC2TZw71u",
  "key29": "3LtwcDFJGchf5WwHa5gGPxK1egoApqGLsZbKqHLsMo5gLGUJosnmPHMmkW1Qmgvke8LDtesFFm4thA48qwf5Z7aW",
  "key30": "4B9J5roXpoZuBrJHUJFdpNe1DBxoujn5WWWojJJW8JHfykyP1NJF4XuxssvuFMiRDZf7ptLSoEiFJRN5doRbj2YN",
  "key31": "5W2RTGV6RKZTTk1Qqk2QHU5fhNLLdgmtor5axgBumfeo1qYM7iJaauK3ouZNFKEjoJSkfbbg7eYYhBPkD3K1rabm",
  "key32": "4YuAKMGGCpFpWxi53ccTsQg4suANxUmzDWeyy5WdPFBCCGvKG9SsCN9wbtWE6W6bxJWejzZGetypGuQRA8pmYUBi",
  "key33": "21pnHsRNKHNZX1aDuRxt9R4ZeKNsEs8r48rxMuASxZsq7LA89tKwvMjDbZFRFwxtnpPVaik3UmnCuxBSwnbkVKGW"
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
