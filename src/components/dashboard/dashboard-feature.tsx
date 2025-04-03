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
    "2DujUTSMT6PzNSU2YiANVyF4iyuBXLCXnwjjtSuqc7gZMhteZmGfBUEu9kKoFDvDpG1F7GGk9WpN6xX18h6ZYm5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WAWjuVGApCpB6xNjVcszoPWEyiDfxRj3iAavTN6UESsYc89NSRiW2zk5EXEkVJAfd2aDodJxK4MBwS31pLoDGeN",
  "key1": "39B6bVdB2siFYsuGzyXy9PuygYWdqqKjQPCZk95X8wBZE3PLU9SNWzt4LtTjJRkoMAEbw6E5doejHmPSf1qNCUQt",
  "key2": "5mKaYN2WbvNkrk6VFeo4CfTt4gnxwM8LGS57qxZPogca7jVYW3atjjfWRgKLydmLayziKYLNjJLGHqynHh8hVnkC",
  "key3": "2HpHGQzTiWWBZMuiAsoNvcWKRCHzjb557KnbMkDnPfFemLTDqwfRs6yi3FrEcbGtFgQTVByNBqEEBAufoydRYSPf",
  "key4": "33ypXFVqvuJfnyHV9Hhh75rcGPrWJv99dJwwDNVTtEi8kfNwCRX17DDCqETSoek37VEnpLePwjy9VUeaj6C23enJ",
  "key5": "2sRrFj9T2nsM9upHxsHLrBEtnVtmF6yAumyPQuaZSg264iSzSsVUryWFKZJTLgdQ71X2cPAULwcCywhcsyZrXRNg",
  "key6": "4GNTyugLvwjU7rhVTE8nSZNojAnqbsTJyu1VhggQtp6T1worCuiX1BAqFf86esA3j1g4sCwGa8yWeK9RzTCQCdHk",
  "key7": "4MceZhVExLwVz8K5LwXkBKrjgEA8CgsYSLpHpRFT91UHg7Cq2KYg8J9TpBEG3o9af5ADw1wngx8BwBMnWMPX7Gdt",
  "key8": "3vov3LsmTx5gy147PEVaUhJMU3pZg7BsUjCoaZHpemp49UoAX9qfBMrcKCUvYLrZua1mWgiDuY6j3u4TpPqAafqc",
  "key9": "3oTTnNrP7NugMxy5NGY73kqbrmMPXJAqkDsUN7ADoC5ZfujHsVbVJg6FyoAht1jDRWS1SNj7pwEZgYHKGhqDMN7m",
  "key10": "52c4DoSjL8VAQTkhakjw17XxB4SzzxmzamcmbxysRUSMnXypSa3vZHWgkk4ygLJcWLQDVF5NF9ny8znx6wKJQNU7",
  "key11": "jmtt9tJjjUHPPxYadxscrcVtbzfuNcc4CTNfrEzx3sVGKedN4A7C8nxHHMZ2HX4jp5qSZpe1ySZKrZAnU93nzyp",
  "key12": "2f2vLHCidW1aMVbwed65ufJ74T4gN772xNYUePVQLccejrHmDh9ZuvFSjJyQmLqmti613kF3AxPn4LFSA9gYNdjJ",
  "key13": "59CUfc4ZqNiY6mK3LHekKv9qLrmcSRtf32h17rcNkM9pwZnWW4vqPypTMxNBicN8t6mFVdqKBRsEw32NJ4j8y9YS",
  "key14": "4N4qTEBsNeHmnrLSKEMcV1DFZNPkw7qzqhvs5rV8kyzdLAwXiavnoyMdzASp2G9U2m9ep97sSYpfbfYNXqjK8qUk",
  "key15": "4FroBtCJYx7vqxUTtAvHJG2H836AEgQnZ4rnCewMFavP3v73NoXpHBrpwKp89eJaxzLDQGNCPajyVLYpYq11UkNS",
  "key16": "3AJ19sA2Gmpkk5jVXJz8ivshFgXBYKGkbtHs4956tfKvrUwKxJoNPE6YKhNz1waiNZgubKjbwueeZPaF6WR8RXLK",
  "key17": "2Jq58DaJWeSM3VjJTEntRFJttXXqZza7jtbuV5vFSprw5aYsQ1yMGLD5KSDdu7kNKLrKeptqngfZmE8R3FZiX1sZ",
  "key18": "FApBSZUa5WeUMvVbm1dBipBccQQNvfERLFKJjykNQywbVDG4hpCLVf9G2RnTZii27G4Ucg3cQCQV2hU2WiSr9Yf",
  "key19": "24JaXjNsnWF96bZJm3ZUzhd3NmfktHRGw74JcnC9dNT6K2TcxQsRGMDsj3jCnHkJeYKJ49qxDQPTgsFnpQ3MBeUg",
  "key20": "4r9ERjfimCVDuMAwC2H5goRGvk6taATavjPMoP953xkQkHDQMMfGz8E39d33ZCdaQsChiXFGLVRDhtCoEm4JviKq",
  "key21": "2ZwCqe36Mn5999XfgXZcQp5eqmGV1o4dXVxmnCH2TVsoTTQDevySS3d4aT1m1i9ho7HCjLPcPMiR7rvP1GGPXpjR",
  "key22": "to7YzKUEbd3SPQAm9qXRJdLrKuLrCLt85GKtu1cbEe3zVZDcsnJStvVd3dV7VWSAsJjqboAr3RmnndS6xrKzVJd",
  "key23": "GeqzZheXJ9qVYdXvT46115atMZGhiotxzbSGKocBfT4SrJ7jgXyro21DhLZNmTZehdyBzFCudWYMmjnyAf51cPm",
  "key24": "3aELRXEug2uW3wqmcpNXx7AXV2Mehw7oV6qmQKFuennCG9mtPnBhe6BhkrpSZfFMe9h2nRL1sLNDBdwHZY4EjAAG",
  "key25": "54iULZSsShDJGwWQuCj6RAk5fMxZCwTchm84oVYHDrqFK7erDaTGPjrZvTmK12gVVwL2QASca3YgmrVScLXkqogb",
  "key26": "5mE7YPBcrRpsZ1q7WAAFH8cwVy9a9NiqvFmfbLYzJ4c2jiJfczNhGCXXUKYU2duYwtnvgbHfaZbwME23nYuMe6oA",
  "key27": "5y8R1kRLZDhWVgoNdbR6MVivwMv1MupXKN9W5zuJAndZiWaZLxd7Lrwzsoenx6ajat3tnTxYA3MzAvoW8HR5HWYF",
  "key28": "5NsbHFPeVNz2SYSKdH1fwZvpMatfgEFAdV3KUfLKR8UYjKcAtBR4z6VrhBVTuAAgE8puo1LxXJbdcZsQzFvbeSGn",
  "key29": "3FXbSaejZ66r6k4qa6fMyaQQEAnsnifqdR8uakioLREsFmAu8owiFQd8N2WqeTnRKVxPdKuoRtUktUoFP2NS1JJk",
  "key30": "3XCcHma7kYUPTmRp1Heo8yudD9Ape5AgKNQUShQFFMbsstwRiGmR6BdGi3ThSQEJKZtdp5hjAhb5AahBfCbSo2zT"
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
