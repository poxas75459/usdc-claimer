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
    "4berUc4CfJ7JdppLRaizpgsdNcUC1AVJFYKVykiZwWk4QCBJZsgnwfibUxPyqKPoQwPVjTopnFenwiDRoqD8Ppas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uiZTNiRG53pQdddU8cjXp5K5MMkgHRJKG1UvHuAT9qSQJgsyicMUrV52V5njnWp3tkgNPECKuGfPjwQHaaQ9Ftj",
  "key1": "4JmKNqRaUNgvL9nFn72y139Ctt2U73aGpZqZogv5kz4FdodPeJfh7paKAnwdibSQD5qGxPJMWsJC8yxS5fx3PG3D",
  "key2": "2tGciiKFgPqXfFyzRYguUsvjXZEcnZDgB2uQwCHrCsDVT1kGuWFqBPGoXJhhn4UaDABV31NSWPoQdhLHWWiw9K9t",
  "key3": "BovKWahoJHBBaZctXgkU1mRdbyrEVDUdbq2R1vgwAvxeQAyNLM8LNWETQnVmpwpCbJRNXrDLab29fesD9ai1poc",
  "key4": "49xX2WoMcBCxVAqkuzHHDuMztaBJhAeWqFE962asM8X3BcQbkyJXysno58WhwTWJZpgtBfBvZmXrwAzk5oQbrSbw",
  "key5": "5AhKuwGzhG4h2tBnx5BRaeHD6bt53XKpi2TCgr6HU8jfwsvJoZkHExy27Ys8jEYbK8JabaCo9wwyQiERPkedB7GM",
  "key6": "5S2zVBaHMazRjJnX5aQAo6Ctv6b123MmThDLrSC7BMpAAEsVWPK1eUewotrhcG6Yn6uZUQzMrkjXpUGL3Nqt3Gxn",
  "key7": "23Z8pgM6c9GLmqd85qXyUJVnzbmw7yCmcohhDNSrRm6afZUJnPsQyMsLq2dpi71Zytg6Uc65w51UoTMgfDaNqqug",
  "key8": "3J53EVuvV1bfds7wriRLjXNWx5TAMM6EojZXZZcFSDp2hCgkefdxgb9L6W5N8AnYf5AmyuRxg3sRb9HJE1eNdThU",
  "key9": "1XfnpQgVQkBAbAmpj1uudq3XC6JoccUim2nauryyXcUnFK8Wdhpg2QKexFBrQ77CmTM6mXkN2a3JoBevuRJj2jm",
  "key10": "51NU6D5eUxTuB4YDbVVKfNEE8BYtdQuFGH687r8xSX2sykVuiYZWUr2zo2DzQTbmbwRzgE5Us1QRZgBc2aHEQeJr",
  "key11": "4MZLjHSXgZSgsF93XzeygYCmXtyUP9K2ksRsMa3KAM983vWrSpqTYNHZvT9uGgVGzTg9eCH7627mz6Fex3nTYG1a",
  "key12": "34ZW83dW1TwoM4kgsxrKwh2vY57TMMSgDswfjpYgqLy6quAepS1jLbRS1Ac2KCqmK8Ng3PUwLm2A4dqGw8qR1Gvy",
  "key13": "61VNX1TDqxuHAzs1hv4JQhNSHjDtbmtNyJe575q4J3qmd7c3uMxz3uszXYPqpUqkQVAWQGhMxqaT3Nr9TctckPe2",
  "key14": "2ccCSNyLCN7snkbT2AhguT9g67YUGGdZ3qQtzCJ4GKvAAMXZtoCXf9fQyCJk687RnFr4eo6toFiA5DbcN8nQhaFk",
  "key15": "2xWgNCW1bhuKjHwTcms5xvfV3WaHeqKxEoNxKaPYASCQzzPBWWTuiaJsj2c5NfzT65iU7evoVGWS6T72WprAj6qn",
  "key16": "25bnoiTe3EVJGLBzpQAZMBtNsa6MPAyiPzneCRwsyGuAjSxXeXRk3WjKiSdPEgbHVtCJB2wx9ETQbVeKjL1idnMx",
  "key17": "DbeoYoe3bBatpfSpdc8voiBK6ZKYQmcy34mtZdMmVwbEJsdWqvtF6x7oZbBQ8wnPNTdBhFugPQ63zVEd3MBfu42",
  "key18": "5swB75v6u3QE3QyySpcE8vSAKdH6m9xLEmKBpGtXYFVSZfpQz5UDtBLrWjpCu6WGaPopsyVjYbWxotwAZpVccqs6",
  "key19": "hQH53uXtx1F7CvrV2VMnnUuByXTYpYvp5yM2JYX92RaBBhoxFhffgQr9SfRpd7H89WLdpfR2WCcH13bNECQ8n22",
  "key20": "GwXqgfnHS9oE2buyuKYNM14t48DRQ4UmtfbzUKWbkBoQhJdoPj64GWc2HnY18Sz54nvR2GhZX1BhSYghDBhdXAx",
  "key21": "4iS5gaBajBLsCP1rh4FWCYdNbT2ys3bqeqzh4foxHBXw4syB1QzTap6iAFcKvUqf9shQjNrZ1895gwndqUv2joGd",
  "key22": "5smcqkBThPRKxhyr7q1CskMV8LoGoodfgyatEh92MaN4a2nBfj58VR78VBNBLgUCGr17tnHeL1yNmCdksjw9jzwN",
  "key23": "4XS7wnPmjRwwMWQ3JPR3vv99pkJo9xP7nviFWzUmrLBx69P1GXbNDWEj99W4jW83yQrJ13uiL5XMdVSaUDxuzquH",
  "key24": "u17wUDvWNQPkgaJpPjs6Y7nyu5t9XAk8RFvksodKsJpj5vPXVqgj7biACduXm4Srmw3dNwwGWgJTd2RsPmuZa5Q",
  "key25": "3kteiSwunjsYpo42cDrCFciPc61j2FgNMfrBBBT3GzWGc4Sy776FczY3RPjwFqNyfzSmev2ordv1TUKuAgcQcNnN",
  "key26": "3GXySqZPKhWo2M47u1Vdgguh6PAp3zFjBmDtriyZrBaQHt2q1JeGMvKn1fzeojLbsfjDVgS3HzBjiyea5no1fDdB"
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
