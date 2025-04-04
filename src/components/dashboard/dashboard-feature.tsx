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
    "2tLoYc93fdufoD8kexauR4SxuTvtMiUzPsnjNeSEQU6vyg34BY9h3ZyVVZh5fJW8h1YVMvK5xQbK59EqFs4takYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N41SEoYwLyrw9WxP938nwEwDf1B6uPQ5np4oQgPtjQCfk3bKqsbEwkthNjJWN4CvbT23beMwYBdofSUbSR8aeVg",
  "key1": "4BGfdE7mPSUDkUourfK2qwUdtN6EUdcXCEfYmrfqacRCPAyfJ9XZ1nqv9BtWwchXYcGxPnHXhfydSRT9rTDihibv",
  "key2": "67T1p2TG9JnFiCD43D42q17MWsc2fHJjGxD5JzCFBNpiHWwBkwnDu1M4KB1dccRrZQjuzSHmgpa2TBW6DqeGtViA",
  "key3": "5QBpHRJPuu7obCuhZ7YkDar7fdVx27iFrYg2KW8CsShwmLYzp72nSuQUAoPWkGg6DJa4psjpocS1naZd1gFfbJ4P",
  "key4": "5As5s5RJ5rSgZMGfRh7vzkfvj6UE5Diyjp9vsPwwmToV4KWbcxuef2vJhxQcv77bdQzNsYhWcx4eiR6P3jnxgsz1",
  "key5": "3zdcXQRMoh8sRA2fMPCNDrmtgy7SVMiUSaJtD4Tt1QB1VnqSVhcLcfAZdtezqyYDG9kVufnjEZXCxMxkP3UxJCfS",
  "key6": "2yL1XycqQKXmfa1RkDxme41PCo8QenvHg1JSnEYmLGQGafNSBPPgguhYA2AE5hT6B9DGT5X8xyaR3iuchns7SS6a",
  "key7": "5da152ecVk3hxr318TkrkiwZ7RLQeM7441a9oo12XGGBSLtL1tFyLxFNTvPpJi71N1iMD2EiEwNHJqhQH13eNGdM",
  "key8": "4z22ywn7WSTXuYzR9sHRrf5xH8uUwWMHs9YgzMgdMYESGtWn9ie6VNyZ8Tkm8iFaiDs9wzMCjffBN3AUM8xexMR2",
  "key9": "ro1Cyg3kgDKN7kM3ezAY4gibua8BmY6fbKkamoxoEcGoWE1Q3Uu7ejEf1X3XYhzaHNamoV5boSMFHxovqrU2g4j",
  "key10": "s9R2YdPLUwWFKAV63eTvDyJy2cPuZsP3aND5JcbRRmH8zzE2EN71wsZfawnoqsCPqcC3z7LiycYbcch2c3dt5Jq",
  "key11": "RW3fj57xwjokHyq8xh7S3j9XYWaLpWErsdBGy14Wp6o1mRZFGLsN1fBC9rcNturtY5SjBCsfG32jCtpFZUF6UvQ",
  "key12": "4JedT4KBkrz6eixuCj3VpDwDZQpVynqDwLuab5VLzBPN6nuYMh9CdGeetEih734XNithMBHRuTk2k1n1EZZAZWPT",
  "key13": "4tLMu3SukyvAiLDWx5wDfZuHNUCAMW5oSwz2jcnHNjxPxtL5w5esQvZ77AKXCFpqQPnSaPMeHtHfCvX4M6YFJMad",
  "key14": "3En8xuY9NTkLuHdj4sy8GCLzmbifZg3LNHDrDv7X2MF3ga8r56VyWezYghQpoeJV5fBWkPk5w1ebPv5UN6dX4DYs",
  "key15": "yq13H5UtR1C6zJxMqQUhTYp9w2MHcvfcS6bJhwMt6LZhgVPgxhUrdotSq8vP6d4nb4QaJhMyJdeb5w7AL2J2fsN",
  "key16": "3fwHwfxwFZZkYpE1PAD9MdpJ8cBFXUuzNWDMeWDWR4msdUBtKuDJY3RvJToKB7JbcY6HgM6wqqpGRskB6bAHVUDS",
  "key17": "2SEwQLa4Gt2QjFaPM2kirKjAQgFxReFmCH6sUxdnMJQynB3CtynCcwwujwnotBJdKsjLS3bvHQEBHafkzUK3Fpj1",
  "key18": "33FPViz5vjGN5JZnS1WPB5HkjRyjz8mYL6kUbxtLV8jV655XsRoZp6aMSQLTMhvWB7hWJTWV3xSF5LtsvHbuLUGG",
  "key19": "4Vd4BrfydvFq5XaX82zCuxGV85bBMZLkMFw7emXZX1pa1QvP7DwBWDRPGWqXEDngmn3g2LEnHxhxxBgYKydi9jRc",
  "key20": "4R5xCr38SUW3Tq5wZpG3Tdk7RLtajCC1CN9tWWhf6PjMSr4hWHHe2HGZpGuGHFUMMrbDro23KhZbiYSnGGjonvNH",
  "key21": "4gF1apU3RFS53PEc7qM1hsCB5AkjZpFmZAJabML11Cp6GJdc3GLUYNZWR5JKZe2VfjnUvd75neqvnNvbtUJBuygc",
  "key22": "YbtysJvDhJq8WNBQXGEjkELWUBa61ZsUK9Z36koWCSTsSYPckNhABHYMMjamnyjT9tnxDqNm9g3J7TLUVNTLqaw",
  "key23": "K3F8ZeyFRTQNotcEGNJHiBgrfnF24WmRj9bgeYppu6NJZ2GSozwo3DRjntNaM7przUdAiyfKv7dtNuxttJDnS26",
  "key24": "eQVvBLGQNkT3gDfFXq6QpyJQmzyCNWV1tnuCAVkVCBYVf9zJrBoKpN9iK3JBao9ZxPXPxVQSxQdWhpcwmmUmMsr",
  "key25": "3KsB3uP1KXFDR68zQPSAWVcRd9G8NcaS2VwgHNx2QJDLmXGeAcaa2Go6pQD6Pf8iRQ9i67EP1hJWgF5noCgacG6x"
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
