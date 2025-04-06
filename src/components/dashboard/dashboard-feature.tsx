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
    "3JdgWwuXN4Bs8N8QALtmKviUCbPLUwLWjdDT7mgx94gRN9yBMqDZzPqhpY8Fvxw5vMicVLFhAHmuBx3oDrNFnsFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SeRCXC2ATDNCr1cLqpPsDXFWiaWC2cQSDcsKZQxiKeY1D6GHZ1Zd3sECr2zz2vUGGajbooXZTfCYUaSSncWC2L7",
  "key1": "3mDETJqk1YBXd2dKdkzWrcsiDhLV4KJbF2HjmTaCBuWeC5Qf7bJ2QHkrMgkJQeBtgFq6iAGy6rNCvx92jSepQyFp",
  "key2": "4HUZd7YGrMf8mS8TmfokvdZarwNajnVbCbECdYabCY5fgB97bjDcUn2x23BWxz8gDDiwuHSeLDnVLhBdUEyKzUfq",
  "key3": "4ZDFA5y4tcecAP5sCUaxyYep5eQSdaqqQbLZak2TqbcGKpHdSbgCvecu8wKnX2M8woxEoV6xFXGTiFgvkKtVaGvV",
  "key4": "2i9qkFFzdL7AQdEsJzctCLUqFXz7p6JgpVD3EMKeShm8TxcHARtfmk3WV1KtPevoUeqcXMtadvDV2Pti85A28NuW",
  "key5": "2HMjJmtyUg3Nm9h65EPWMWigfyc7CJ7PDehyxqDUN1BMP7DmhbmRyvfYBW6bTL8NpGztFhDt8aPW3o3H3veBjcps",
  "key6": "5XqxWYdkixFRJ4iYNgBgJ3L7G2LpnB5hqu9UQAFMsmVBjHcRw53SUTcd5ttMareBVFnCXPtY6LgYbkNcA7qkYiDb",
  "key7": "2BUct4CxQ6d5ahEAU76k52mLuYQZovGPXWvp4B8dqYyAmey5A162f81KfkNVVESJiTmFurDBiC5WJBUD2gn2H9g7",
  "key8": "RkBZsVdfHACXKVuHMk4CgN2DgRtPoCYF4vvw16AQZ72oa8nS4mmvxz2Rp4Zajd15g8aQQKFVaz6i699TXdbUNpL",
  "key9": "3Scth14pjwEupzCyPL5ev8WHfSRyT4SUnX3NwR6U91G96sKhy3LPcjkmjYFGCWg8a16npa8uXB7z1UTijiYo26De",
  "key10": "4RDC2rNXbt4FuTCLEaWAp5idKfLe3LEj4pq9Jm3ETnW2Q3MUVWHf2PHKF4XZFfsk8u8mvHtBPDHg1JgQnwtAqv6h",
  "key11": "22im9k2nd6DVBogqG2u3QfsCEhPkohRBrbrpXCPZ4e45Zs1pcnJJPBKGx4gvhB8DDrfaNsw2xGZWXDaD5y8pBB87",
  "key12": "2V21P11hvUV1mSrEyZbv1vQzd526Su4JxpGRJGEZLVewXLm9xEbXytuv1cBsXmfVEp98oa58bub95LnCuQXnz8J9",
  "key13": "2974tBdAuRsR5M77BBZPpZY5VuhymxGuFNu2MhkDMgBHFaiX6c3z2yY3fXhySwP3fU6dBcHeCWs3PcewoH3maMdm",
  "key14": "4QGizTt6CZbScb7sFSQTEkYd7Cm3omtCBib1UmmZyJrZcfhhaXcWGSMEDJBCuSBmALVaCn5W5A2JttLxgdNDnr4A",
  "key15": "RonYorCp8SjpKTQY913Y42bB1HTJyPnMXJURtFAhTTP5bhK2uuuzyyDcg4D7MKiL8i3jDceeZfkEivmvou8D3Sy",
  "key16": "3TYzEZ6AAQfdbNjxGHr9xZFSFcSmDC7DApiK9GkxtxtVzUfioP81Wybqx92TtiKf1DBgejrNnhEvVgwGqKA3q2V4",
  "key17": "5duJhmHEPBZ48bq267GckPREMfWZQ7XqWrkd33gAZdmEZorj8sTxjgb2bnWAAbW5CCjCJhcFQak4caGxbfLhBz3p",
  "key18": "4Y8VCsypbitHhmartooK4Zso9c19ieSxbqbGvVSHVSKpqqNKfhuUVsX6kUbD8AcnnejWqMSEgudL3cc9vv9skgvH",
  "key19": "X1P7CEajEg2LcYvze3cjbzHdvJYxAC3cKBziuSgmB9JBpKQzqpqonuoGp9guypkBZ5CbZtHirnsZ6rB3Sp6iBra",
  "key20": "56WTDjExScLSj1qG9Wb1XcS9vQaBQap41aRt56KrEztHeFMCNhLKihx997zyNojNeXLXqd2J8XR7VAt1uF7M41UJ",
  "key21": "2VsbockAbaaotjRk1c1Yze2M2EoCoxqcYEnr3DtvmtM7cD7HJeS3uyzUrUvPYnBbePaYPoZXcvjCTVrC5QXjEjdF",
  "key22": "2iqPHqyonMxVc4u5Lqsy5mXRzUtDiJqGHEEJSd8Jz7Dbmtco5ekrybmUtb6Dw7dA2dJYTnJU9BrpMLNd5ogw2iwm",
  "key23": "2WwoaMozf4w2AHWvEpUa5grjAgLNxoFDntKVJ5isA8emXP2SfxKNhcV5gQdrSq7qvD6uUEaKA8aQH5D8GzgXe3UA",
  "key24": "3osyCtcwhuf6rtqr55yoAka2NN2yoad985VYjqCUprzJcYgBeb5PqMD3BFJz5GUdgfunR9Whb1HkpkVsyjMftmqz",
  "key25": "oLiygYRcoj4S4QagufXigypP4NpE8D1fM5ghUXWRbZnxBpxCnx6adGvB386eoBk1L72nQZ8ZDqUSdeaP1ADZ3QA",
  "key26": "3YHCLimv2QWGzbTnn5UxdgyJ7Xd9ouiputUAXfoXnXRAonb1YSxBNBY63V7NbL2VgoWyAWzyW9ebxpcdU3HwytWM",
  "key27": "63NkRP7jYtGUKs6sq7nVyiHXzKcEmcTpddWChn1mbbEukaVBmqqs1sZ1tAqT1itB1Ln6m5PCmTQBvMC1NHcMQN9M",
  "key28": "5jhdcstZKkcwjqjxfJjdRHhqocWsVwwBnF4CaEansNQtPFiHusvW44VqBnH6FSytBQKWNhxLXoapYJ8L6U2rr6kD",
  "key29": "2QqcJU1rxj2t3Yq1zdnqwkzaHZG2ru7NWei6rNvGfEU4P1JA9YATNDGBuhgqUFabQfSK7MiRoDgA1ZHszAxs8zz9"
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
