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
    "5gvNbkYQu6Jt1iokvocrgqhxDs3iLX5Mxpy8AEeVjT9mnRYHc6Dk2q67FCcQrf3tVAoh8k44gpRiodppdf3JFA7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d5dAqmRh1Mz8CmHG24f2UzMpoxicCCh3ELAbr7BVHNAx1sTRrHAZATvW2p7Nth1JUa8QFGgJzeYicmgkP8AXvw4",
  "key1": "611ziUDHvd9qni7NvNzTfEtwLPfy1FmQAZMk2xFritXjDvExTVyun7iM5QGL6udqu1YBWRMhfEkWYfZ7ViEzscS7",
  "key2": "2WsaLjGtKrRi2JntiiSk9pvkwntRuuUxSQQwLM2VV5U1i3839shhxeaTHjFLiVbT6GnowsD5VZq2f6JFo5mUBaew",
  "key3": "2GXUJHMgR8jr8NKHVK6iq1a7f8w6CEJE8ABUMJGwh9g8jZHMxoyH8wZ8jBNJc5cSZN146VBpHNJ7tL5vX8vH3RE4",
  "key4": "N17eciVRxSYh5ZxzfhViked62hLAuxcDGs6YAK1h4Rpv8Xu5Xj5ZAL6So7tg8QRPBUWbj6w3SEpYtVfA5iMcoL1",
  "key5": "qYCqyUFfN5wFJhXCqQbt2hAyyHUmBFCrpqVoyvQpjfESE7wW1Vtgywx8E7sRspkVgfNJSH5sHtVyojk1jspPDdD",
  "key6": "5b3iTR9zpk1yf4bjXCiEssnssq7HiVrdkhGC7F8dme4jbq4kpmZDHmrWQvPTdH5gJSyqZwi8GDTdPJd8WCutzCM8",
  "key7": "5Kvx86JCKK1HrHPBA2eHmZrsy9fZvtz2XGUeu668momH4gcLWCn1k6t6wsfCNXNGJGFkEwhwmCE3qnN1v6pnNnS",
  "key8": "pQ5J9LVDLdwzsoDmbhxapCAfFhZ7USpnZVGWxkEuSL5GqDyYmXMiHc1RxzgtZtRdvt4ibqWtxcaPKrw2HAYB2Sc",
  "key9": "5DeoTF8vfPVBvt4LySKgF2oX4qVBAVFbHhQBiMKXWTMbxgGGMMothSJWVKJg8WGgZPnMas6pB1JPFaoRv6NR2FgE",
  "key10": "63T14TzNM2oUQsMgDrsENjF6QtjtL9nZvoGQkNEdRpQ5x8GatTCmHcN414b25PvF1n8wF4NMASBq568NfYUSYZdL",
  "key11": "4zVnKh78BS99KzyJSDN1bg4DuGXX8LaBdBUy5TiPGK5tyEAh6EaM9eMdHojEdq7vrspCxEXCfztLkZNut3jbFTgp",
  "key12": "Gj6PkKYXMw6AwhYpTgx7Jr8gR1M8VHrGevEu9tErN2sDZnUH3AwhkDNoHFX4JU3M7j5DxUbxjho9qAAjZaaUw1v",
  "key13": "518DuukrVSSHfesfq3kuur4AEFEwmQcobQhrKojqZ3sCotvwH8qricvXYSZtdiV22SZYKNitFaG2pBZmAQh7v5UX",
  "key14": "4n8kYZ5dctnVH6oGSW4KvueAXrSVUYog8J44FMKeLpJ6By5MrnHbmyjtEed5Dsix2J78o71Yk3KiugcdT3aotQqP",
  "key15": "3DmUv7gWMQhQixG8pzQMJbteFzeeR74wPRRF4UC7gJnnuf2iubZRTTPvMUyHahjfAbGkq4DtUrzp6LPcQGK3nJsw",
  "key16": "2CMWtnCHZJ3R33zZtkzhWyFaf9RAzit67WM8VRYr9QVoyB611d9saRfCLZbopNgVWGP1MjsX1JJz8oXAAeG21QWp",
  "key17": "4iNUMNBVorsy3Usokp5FTimQmwyyGVszmwsjxNKCL3FnGSmZEYm7uSVfs5bWUGkrBGNVru2QqpXWJMZpiXnefzZt",
  "key18": "4PPXvcnN1ubcsG83PQVnrYH5o49RVX7EuWiBtozPsfJZdZoXTKtJFka35bPqEG4msdDmVEfmuYoqYUsfhSi6EWf1",
  "key19": "StpYog8LQD4jRNN16bgozGMg4w1iidu4Q9Hi9mjjnrP1UDtft5T1DQSirDSScCpyu5X2QNrzumbpXCifBRvRQyn",
  "key20": "Vm67rUB2LEU7UMCm1fxGm5FirG8jg8RNpXLbhimbZiRsNNLgrMbaH5JquoEUyNgkWkWrDkh2axM1nrw4LesM4pB",
  "key21": "3Vi8qHVUvM3S3tPpbjJmWbuZVoJSvHjko4JuXPh6QY51kcLXMX3XmU3koBijceGWQwSFduxnLCJ6GoJKzFeuFSVR",
  "key22": "2TY72Mavaq2qwdW436uvffWEhcXmZRzHwnughdY57beMdSTXUxBB6PWfEa3uL2r5rJ3RG9s7s8ocdCsfKZp2A91M",
  "key23": "2rqdGwJuyzAFf6wBy98saBaiNDAwDCyychppGkmy6FpSqwCFPkXsSeQiVyg2z9D3cr2KJBFhGw5KBpzakT6NXNrJ",
  "key24": "57fC8u4NyJDZn2Xze7vU16QaAgp4Q7pjiUwSWHdM9FtvkD9V1eZTFwygmAEKqJXMG2VC85P3NDiCWbPsZLTVjyx2",
  "key25": "4AReYc7ViUEKm1fNdkFTpdc3c8J52kPsDQzjhwz9YJstnLLknaeuDEefYeTWMeFoNXKcrxHJbAbdLioi68cB3A1j",
  "key26": "3shW5k3TDNY4BWdwLY3PPbsrxpqe5cT5RhNUPEohKuA3iWTpMVqebCSoJ3AYN7U8wCJ3h5fUxLR46MYtU6kdUyBB",
  "key27": "55GXh1G5cW1Ezh6A87onLAjkxGqWcW7MUHxit9oWYDvVin74Bq8UrP2U6rn9rUZHvaRLJLLtRgqVac1mcW226MST",
  "key28": "esNYV1oyHgiHTzBaAt7Zw5yGRpnwN7BwbAHxNtJJLHLwZrdDwSZw8DH8iBD1z6T7XkhFxM4o7MHP4MLQmfY4sGV"
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
