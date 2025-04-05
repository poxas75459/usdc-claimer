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
    "2HJwDMo5aj95DhgtiYPdb782ySwKzS8zpaBjXCmrLUTiFdaB7W7SouFoYzqsUhXXcvwgd5yha9rH6KRfUzMmPduz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29hdwrWKT5vmSfK9YJQfXMrCPRv7rJ6oyMbLatcXj8kQ8XK6UH4CWofofkFVjjS8ghmizaNSyrXdGGcGQBJQkskX",
  "key1": "3gKSzzmzgHrZkJxt4jJugcbDD69zrk3yPzW5EnSPp7t4mT2H5EK1N6eAaMwg8dzLfSGvg1HoSqnGk8SSvvoEvd4Z",
  "key2": "3fYLpmm3m3HaPyRECqKDbcPEF128BdgEMqGqKJDhVY94UuQ1ED32wZXrPZbCz7kTywYG5TGj4NZYq7DZxEANAu3w",
  "key3": "4kwk3RU8kpvttP3sXGcWwwFthYTukNK38D3W1rsJXxkfzgSQkCAWWNR1NPovyXm71tQiE1NzBZUzmqj8Ua8zoSR5",
  "key4": "2evieTkbU5joC7eQhfBB5KDWEgpePjk7ssrwRwJ8ux7jPj4PTgGYuyv443D1Sb7vvDGWBHvrtxpZNkS1erHD44k2",
  "key5": "2db8ZXkoZA63EqtY78PZkU54eGCoWjiXDfwvq4nekdoBTwC4FMUGryFduS4a2MxjSRJo3YDCcv5VQrt4jSU6rELv",
  "key6": "4hhFffuo5JFTCceRDVXwnQDCy34e2AgXfEnYAi8ZG6fp26uL6zuoefXw5QkXpbLzLXpFpPREFJnL6zZMG3VnhZPg",
  "key7": "47BJMFUApfS5YLJWLPLwyPZJnHaSwPCVk29VubDCAwukErH5jV3ERfKYg4ndj7JKX3JqXK8jRcDhe9GbCaMieNzc",
  "key8": "3oDeU58Zhdt9ykFs4WKNNFJtV3DFyaqz144gPpQhRtN1UUb51w1z72MGzTS4ttQXnpUhxaphN9c5WVU3mNAXXUc7",
  "key9": "36WCxP9Tcu9ZnYzPUPCuHGniRZUXp9B78pP17Gq5dcv7qQno3XCYtPWiFdNLhv7yFKfrzW3ty6uNFbMns1pWVDs9",
  "key10": "49qEYbQsgUDUerbiEW84zaLv6AACmm9NR9VdrDwa6wz1oxDXCBu3W7cGdJnT9GzzeTQByS6zsiE21JCZNY3uM5VP",
  "key11": "5DHk8VkTQPQUpMfb6MmwYZE81nJ8EXPoxUoV4aU2iTYdFJkEW1MTh8mCs1uGaqbCgapCSMo31s5wdJ7FS7p11Vci",
  "key12": "4XjC531aUnx11gxRnQr3uDfYxTXJisMux9QJeEqmHBYdDkmqi4RPVvB87q5ba7PMAS2d7aZ2ni6W3QdGjydgGqpo",
  "key13": "2wYvaQBPfGucdQNtKqpjiKoxNWaSVzENgstzRypyaZvs9fKFT4VPmLzxK6bRtXrnZaDhrheXJjjrnZr9ykQsXPyd",
  "key14": "4NHvrcXAXEasMqHbmwUC3nuuizZp6y95dEcCQyB8dRBgdPe3xU722rgNW2utSpk6ghwnd864DPHZ9pnzMEYJubp2",
  "key15": "5Kt7Q37u2fCJ1hGP3hAB5PaH4v2eb5yFAdYGaCRmk3mSwFQG9xvQ9zZ2UCDef7qPTPRbYZRSy4eRV2GjaboNbFHy",
  "key16": "3N1Zac9zUVeSkXBizwK8mZE1yWqKpgvnxMyN9gKETLF6uKWk2XpskXpXUsa4rbJyjrx3ysdxJojp9SPHj3LHatzN",
  "key17": "5vXwBYkUfjhLcZ7hnxGHt6tLNFpEJ7B5VRuPUPXkVZH5oXbubNideLhSL1nPT3HrfpNsMwMN6DhGjzQryFTcgtLt",
  "key18": "4cqasgEd3W22Q77cEcDoto3hiH5yhtbqCq8DXKwT3eXFsRit2teLjvbzzfJBuy4zXV4ZBRavAZTdP8hD93iLnPgM",
  "key19": "416dHtNiLpNxBUwfVVwKJFXjie8f5nLsQeM6yK4BRDDC9XyTbbKoHRuX12kU8hsM5GzYeunrq5rAVsJA7ZtHbCEW",
  "key20": "4CVwn6g1HrNF4Zdw3YcRhjkCDwdsiddVJX6yVFU1GdmC2NDxs4M7Soas4zMgMkBLS1j8u46rpUZszpJsMLikryyH",
  "key21": "3bkm32g2R4xgy6frtPwdu2q93R3NrarszWWCWdbfsRWyamG8G5sgra4M1MmQAjVRhusrnHg9KUcxDkkzcJNLAbGE",
  "key22": "3NF7xynasDcthKcYjp8MaQnChcKKb1ohprYPoqiqPHSqhR3R8tA5S8jX6r9HDyzPqrwxAd9RvpSBSQEMh8uLvHto",
  "key23": "4R3QddDbDRL6cBZjjQ1KeqrfxxDF6KeL31RcGHEmdEbvdteLULVaazJSCmG8n5K11qKdpQUAFb9xo8dtD9endefU",
  "key24": "4uRMwCF3FSztUsyrjXPyTKXqzhMYspcJTECBmw5XojNEiqRaKm7SWVScPvdByJaVofQi5KH6ekyA7DXuXrMQjvZF",
  "key25": "EGuUeNEHJbqLzj6ipS9gBJzbgRgkzqrQo8ZQ1UyvfviobD8zExdWoqy3bS2UPZWhNiSUpH18EajuH6btFvPoQdL"
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
