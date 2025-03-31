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
    "2rH5i5W3xUzGXCV7pQmprwhC7Pd6LKCEhGZBLpCgJL7Ng2xmp714WfyDRWK4tNMAScKrKnJquESk8vBneKJUnZsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNsLjAeWsD5RtqHmnwZkHHJemsQccjXiGG1tYuAeAa2gRJZLvZZfuajYpD9us9vExzZmiKqobGNCajv1uXRFoNP",
  "key1": "5fmwFmjSX2G1RAF5su8LaGEUTZqU5JdLZTxdVb5vZzXteHfaSrRXV7NxrfpAo28gvPrH5oqL5PHGH4J9Mipfn3hK",
  "key2": "3BckHZtG14miJ8cfCMoAwTRbngKAwZGAzHdQPtVTtosLPcvnEex6MjADV937qe27sVX5cRkrniBSZJkhvnM82Ba4",
  "key3": "5gwMSufuzCU6yByPbi6p7VzxEcxkve35XQisTRr6Zob5BPxFVXMLkJifNYnC2jTYuYCmE56qk499LKDpPEeaeTrq",
  "key4": "35FrGmeoQmGhd4RnjoDUP1HMwUcEpfSUJzQ7U6uCX1qNQN9b5gWngnHiRA64Ns26nBQnqs9v8FDFHfAX9xbaEiTo",
  "key5": "3wWpWbCvWVZdoczhsYzBextJQKAfF6KyoXiaHAvqM1f1MX1MpjzbQy6DRo94kLcyG4EzafZAsBLT3H9vGNAJhBNj",
  "key6": "5BYRABgyFt5tQ6XHJa6GoZuqFsDwd3ZnTwmXVH8LMKeMQySax8JhvWoJWbc9sqXVvNs6yunwnoM9aSLHRBqRJGDf",
  "key7": "4Ct5AENyg49wmt8Eczd3UU5GdLHof5WqjdVtavdmd6vsb1WjiF7TYemVXVvo3Zh6JD1rnKA2hYzYyHLh4bSEUnib",
  "key8": "JxJKipArEaaBykWP1dekjLy4iQWoAPKE74Ee8aYdnQyk6zWXWN7F2jDJC9vWTrXEj8BsD9dqMfmyzcj5JSeTFiX",
  "key9": "tfLPnQVkApGLZtEvtPmTTKjPZyfz5UEgQVA75USaeGEA9hBmYUAHNfJeMaC31hng6SurKbTv1ig17SEqgGVhmAG",
  "key10": "ch6DQWTqaA8JybiMxU36BmnkPRneMpLb1ndetdZqZw9h5EVpa1djNrpJuyuqBeqqHCRi2tGgKdsDb4KM8YAZ4e7",
  "key11": "2BrRurMQUESjnCJxCaN5nfzGP6Me57gqwT6pa7SQViiwibeBvG6VigZKD16A2NRcvJ1iCefBsXoKz3GYEJsRVcB3",
  "key12": "6AtUtWWmLfv3bzpZEg8cg466kgfvfTAwQd5vWLodvvhvKB1MjFTKhnw2tnChokRMf5o4frQz6BG7ctkWijvnnRe",
  "key13": "4vhXeF58VPiu1DQfRHBMDBRB1ph6dDPFPyaXrjjDXicyQy6BhtG2MHuSQCw8LgkXRRqfiT6iDm52UwgDgwNQFw2J",
  "key14": "4ZpcYRkCn3j2TbW6FQZu53BUZfyj8cNPoBQ2ziiZCBSh3JGDLURRqHCjbxH2qNHpbr2CAWZu4cVNm2jrzHiuNDQs",
  "key15": "sHqhE1VFt6KHrBK7jWkV2b4Qc2AWM15MbVs9YSfqtBk85kEJjqcSgHWEtUXwRXKDrXrpaKv4H7n6wuNa2u4J72d",
  "key16": "2CBywUPnEUpTSNpUwDpaxRJSZNFpRdPojN7ajkkNWFX1VrAMsuqq7hjwUmSx5wHhY2jpRVd8BdtVPUVfZHtzp8aq",
  "key17": "DtGVLbh8LCL925LK6r7HYCA5PzYhQ6T9iTvmUGAmEvSSyqdNKLtPQN7HVKkmZJHCyPdmo59GUABf7xqmQ6mRgm2",
  "key18": "4z529KJm2HpKkXmxihFCjQ72rB6nXn7VQY7M5nZK2FfjHY1ohJUyXQaC6NsA8HZ2Ljhpin4C9QyBVXtH6LLuS6oU",
  "key19": "3MATFEgmTvBt6QFttrT6PHMXpQvaTBzFbzGRWHiRgZmnvneQ29pPoJM7dqQkfo21noHRJmSXhqhSyLvg3SeDvmGY",
  "key20": "LzKb8XhaWhQAfqAiRkbpDD975C5D9VGNQg1R3hvtKE9QyqJoHQLHWLsdivpaRTgavFJeRDcXuPxmf8n881Zqecc",
  "key21": "56YuzAe82q7uHqFpd52WaG9MAYW4Pmsrd6E8BRTTY5W8vPRuDN8WCyGAvjN4EFAkG7mYRRivXBYD9JTekNjY6oQg",
  "key22": "2RXTYYHEH23nNUwX3UxgcerPTPjyJ8tsds9UYDRWArG8v2BcGNcjnmRbQJJ5zjYCktqVkbWzniHriy1UQLmvS2st",
  "key23": "4Ym7GN3aZjqJg2WcpwEtWyvxwf51amRX5JrvzGqz74ydiVtCHawvni9Yn3jTyFJe4T6SuVJ613QSc9ZGSCrBsVRg",
  "key24": "3jREkteMruhTY3V4D3dPaeJdopioBJZUfznxRHME5h7iEbt8x8dPfqv2rqdkdMYdWuRDadGbJ1YkE5XC5umZ9gcW",
  "key25": "4KgSHtByt1h6CWFNDWBZZe1rfs9G6cTnWWiZyJdKf72BFgMkbnhQvirKBLTMvo6CfMxexVuW9MbQGvMpr7secRio",
  "key26": "zHdNhn4PPY575SCrnnCPviGm5gxdQALicZVr16M2rUUKaRowxQ9AYqqv9xYs1jqyLHRuhpnpKE6AGR94kMkkygq"
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
