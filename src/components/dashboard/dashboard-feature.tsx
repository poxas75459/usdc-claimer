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
    "2tYUnsSsquJ2Cre3ZSypPudEsWfrSsFuWt12bgtLegA5d6bak8Pbdj9bSZTV3VXcHZP15fDLjR3KCRxrB6MctiGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x8TyPXDX8SRnY8vcULvWtqcJQGeq6v22ajFEWhCkmxVWqHfFBwDLcxGqMRymQGVVXL4U8SMdtZ2SYZHWrZkbCf1",
  "key1": "2CpvTpGrxmNCsHrR98o3w2geYpfehztzVNJRRmLWcyw8eSRKrq2SyhkaAKw5Rfw4Z6H7kLxcKs9Tx5SWGx49HZsK",
  "key2": "5e6ASD7cLYtQctoTuiJe8joViDSF74DXqw4PrDap6oGadvtDVajwhijWBFjzQMWF3jPdFaJH9kFCwigdqnDPRzBo",
  "key3": "4VmuDSq4tFkTLog8HDWs8vBRdkhcBYCLcN3eVWu2CvRSJeyKqAP5FDeJ295B13opJV4sVMpMsLQkc9Sy2YHSJyyM",
  "key4": "5HUsmq5V2QZjbDxC4tSXNongdw2gDeZ3dv4sLZbf2hLooPQwG3V8zXLsf8VNa41P7iAfY2uBFKmZRuy1CdFKD1MJ",
  "key5": "61Jr4a3CYfxntnNQx4dkp8je6jHfnp7aLJuB7FtBwz6HwC8ExC8YTMuVrqg9A8bgYNoZ4bEBcUBjCYTxpzQniY1r",
  "key6": "5xhVaTSrdymiU15m1LUosqtaj4npworprDJgw56XQvqzXX5CegEBTGtu9ETT2PZEBjWRMSaPFrLNRU4TpDiJKpGC",
  "key7": "5BrFx9hVAdG6yNYPBdetW3Bxxjc9QyaGyKzJQWG1h6RJqyWCsFk2LjMf3t8CsuwLadoCRJ4mCjHhkg1vFL71sMYn",
  "key8": "66BH7R3TDBZEqVvAUpKN9yXCxhzuvL52FoNQQirUigfDyLK7KWCc3mz8AavuMViQVQD3xq3ap78UKuR3wt86EumA",
  "key9": "3WZzYTxG7qLdton3ExLymDvpqDSg9wxtdnnJ23MTiMqrC2SZJCnpXaVRQNBZfbE4eYc33bAm22e4TXnpS2mCf6tA",
  "key10": "2DfE1ej6TdwmYSLJHvvKXgtUKUNjeyVq4o6yEHcewdeX2N5U8aJPJQGBDefZJRVVMt6MUoUNBGjzS2L73WQnJrAT",
  "key11": "4TarqjC6ENMVocS7TbjuQC7q8Mefub6d9CM6kGe7bg1HeDgCcaHXKcf3zVeHtH9fMrNKgrxYk7hFdeVBpNa6fcgi",
  "key12": "2hnY1v3UjdqkDm8pXSPAVvG8mTMccXc6b2Tg2z7RhGAhDdYWtwAXXH3iWZqi8FJ8C92YfxbMQv1LTG7qBCJP4rHD",
  "key13": "447KhaP6zmC4BbHFghh4eHjNU1VYTdpzFJsK7kwcQYXYLnZkHcpsJN6H3iVox1Qg8NvU7b9BupRMogSJxwmdfYhy",
  "key14": "3EbPxrVoH7JrRXr1saeA8cuo61LMREkKLFoXQoLzDm3qdCYHYzeb8rXXnoVKuwixp6Ti8jVaoFv3M5NVD9rKz2kt",
  "key15": "3K24tEbU6SdYiYZ32ih6WQfKmR8cq4HAQP2wWhUf2na4j3YCXeoGBT4wHNDpCswXLink7dLs5H5uz16H4U33fF5U",
  "key16": "3KLkEuwTsx4rE7bcZR8RXazMpD3GWYGyTk8RqKVz3tH6u7FM7gD3a8SCmWhsVr3AxTi3vAHAgDue7qvvmr71a7BT",
  "key17": "2KWvXcuGkJcyR544dhpN2Hv3iQoJNC1nJfq38uis7kbEjj2BZMg2cM34ptkb3wCt6fxiYoV4S8WR67LFruvVEH2Y",
  "key18": "Gp5YHpC2MN3u7vhpNUdBSKJZnANMbagmcoQRhdmwJ73t3RURf2ELisAvFDpSpzw8vv2FGpL3R56dC3ctJyGrLex",
  "key19": "4cKBGrUya32B5nQj93CdHFuKUakqYNQJuAKfFgzHmz7LUs26ajtLm16tnoTxSDziGDbHap196KP9iDogax4yw1vJ",
  "key20": "5pU8X9wtWcS2GswLdJEDvSRVs7B81v1RUWHNKvQT13tARKYv3rSzWBzmje4i9Kx3j2Hg1986aMs7hFEAYwJVN42P",
  "key21": "3tXyBMAWDMFS8jxi2GGuBdc42E5XP68qSJQaRcLEPUg3vVrP6H1XTGSikUuoCtX2XxQiu3J56GYFcHVA9bQXxMCz",
  "key22": "dDc6GSREXYhHixd1LcMZ4jnLb5CLcT1m7NhDUtupZommfbxvyfmtXricXXSnAWGtMBxDsQ5fXmxE9eJvd9Syn1p",
  "key23": "XELgWsx9TA71cHCpToyJ14CKCWCLwzzficu5dEDFaR1zXFAkNCcSezbe7U6RaGpsZhzarVveSVtAHBTTNVEnfXd",
  "key24": "5NK6FiJMLWefUiek5eBQ5CU17B9M2CVXDkgmK3zKEC1t2GaJedSdXKPGgHXwhEEoLdov9PutbF1feYozhSHqHcHH",
  "key25": "4f6AEdqujQsE6zk3T7ssThxBbVLzmoF831c53CEfvHtu4PJiuYDYu6C1bK2zkBu8TiJrcRGMe44azgcDKLmczq5N"
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
