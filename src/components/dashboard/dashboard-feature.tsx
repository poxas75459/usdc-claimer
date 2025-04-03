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
    "5soapYH33KMdp6H9kdDWQveGyqhHqFXWxfXRfBq8hjPep429sWRDidNFUuk9g7NHJnzi5F9MbpBcPvUMRPM7fz3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ceuB6MAo7NP4jXYSHYjCPT4K1m54gW2kUxZ6bQPzjBdxVk1ydnBx5uFFHzSWvo6oftHAwyFNwxn76hMMRh9qGz4",
  "key1": "2bhcZMgk4gEdLGGkDwhJkBDVYXFNRVT5ZcgNhuYFg7HVu2J2xm7aGyQkbw9NxV3jy8mW4yLAWMoFNT13kYPuaor7",
  "key2": "E3w426TuwTwHGs6DUt1hTru5LBqn9A3yLnsBNJ5L5QTzgAckM4hBojq7vRsxWCayPtb7STGfcsGf7fXi4crx4qZ",
  "key3": "5MtcMfs3QVYKweBfHo4JUhxzZDR179PXK5BdCsm6H5VKv1CeaSn1Vh2oxhZtTwJV5vKnu6W17zoQGgea5nWABL7x",
  "key4": "5AUTc9upTLKH9vHrtdGYC9nHQ5xbguPQLnakZgxUxy7oYBbqRpNZv3doBf8cUFZiCYn1maxsRunxVCifLLaXfLLL",
  "key5": "Q9Cm3kQX2beEZMdgqR8DQb8MbSL3jU15khxDHZjBu7sYTH43JzSCsyMtGVEHesd1djxLyPcRvFj2ioS5x9DBM4e",
  "key6": "431cFWLpi6sThhEvqzB7bgwFnuZmxC8CSB7WuChnGkuzKo6TQjwbw9XiVkQMN8ok9ivCgBcN2mBkx6CFs5X4UrF2",
  "key7": "5AXBJnrpysoW9vkru74hFB99yinxWqc7kwCT4yVeyTxgq4xwT8CynERH3izHb9biwX5GWicXA6XuZbYCrHKSyqJp",
  "key8": "47mnuaDNVLvkKHnekJv7D1eapZgvtahB3dh4yrZGy1mrYqRATsXRi3DEdLJJf3b6Jx64mVVNUVzNhHjyQuo5Eq6Q",
  "key9": "4QBWKZWFUmfQRSF7jBTLKUj8RzoEAvxLQbbngjS6CB5CRWSZnnxTUUDMqB4tFVTTnrdbhjxVatx15chFNZ6m4Pj2",
  "key10": "2bdJsXGsp249gncNrdgz6QVWbWTM2VbFDDxi439aiTcpCh9xta39ypAhqR4VpZVXJEp655GwzUXTQfwjPBg2Vt3A",
  "key11": "22Hn4XbCAu74nq7AYUfC59RvN1fkzfrfjXFuWmrbbvVRvAHhBpAe8Tc9YXZywoW8tkHUJZ1CJgH13rffQ1LTNHhA",
  "key12": "4hvaMFP2LUQM4rXSNPfQLsjWRbWsiZbWWanfVayv59vUxtp7TgjYA9WwGC6UShLAMHo7XJoX3oVuADSMdQG6BqFZ",
  "key13": "32DdozssGjBPXXy1LcJXNU9PiT2WVwt7tyi341FeQvyuYhszXETCWde1kLTdbZDXdei7bNwD7dnatnQtbNK1ovqv",
  "key14": "246crAug2Z4PEmdu85K9AmAqbWCY9tjX2U5vkitqZvX929JGfr86mEfMh1HPJMsSDyeiKkLz2taU6Tj2hfTi2Yep",
  "key15": "2uLqrQz4wNeBAt8CRHz26MoXAye4PqgviBXePAjfqMrszSCsZDQ4F9eU2fsHjFjpRrnW79xyK2aY6WrERNXMcvEc",
  "key16": "5RKER9aGDkZkJZrM5wW8ctLkKhh65NUjPVG1AKw1EyHCREFaQ4S4RwJVDTYcAvPW5a9QrYR46n4UjN2pfKnFD2ve",
  "key17": "3Xmum5ZQBbeEUfqkLbEztKC3KxwErojzaTimyTeRuGCd89tXpEQfKiKd6SHZpcMiEsATcwtgCEzsZhN4ybxmc9rj",
  "key18": "NcQwcckffZTAjSWAvmB1eHoqQjncGy7vvaY8rrSwcqKTgLRNjhpfFpjuqE695C93tL9mzzVYFR9fuLvm4CRYmuY",
  "key19": "5hKGgBbT5gyjYTVQfobhqZvjx13wgVpztV3eqs2xioKDLb1mmgTM7jH6jNgXzVBqc5ZBT5RBuuArQMFwMD69VvN5",
  "key20": "4E7V1hzrQ8yRcBEGHtCa62CU4FSi6pqpEoDwRua6nPMF68z8SQvnMzYJzg5G7pien6jZzFDUiHc1fyVh49fjfDTL",
  "key21": "2iQvB2xMrH7VxEtav1YDbfxM7zd5YQar1p7h4k66Y5CZSLnJJjwXoVPaiysjWg3t2vQmNBwWnMNjFvbLXb8rYM96",
  "key22": "58SpMA1M1sDtTAwYiJRxxFVh7k7h1WMZ6CcxQKPLhr1Bs7hwp441HYWE9QyvogyHM5HzdCiRTrHL4aiThFiWL7kS",
  "key23": "4DAh3rbU4Y7JgXWwFTeaZLV8KdXHM2TNRLsMqcouv7eNt2gqdAUUm5XjcqNp3Rd7VwKrgCwSP55pJ9rdGyHbaqjM",
  "key24": "2N37HVrexHjsmHpG5UmXrAcG6erjthRMAfj69YQNYcF3kgk3Ugpv1JKAhS7vsHnqJzrz4ZspJam5scDh7cEZ89Pa",
  "key25": "3RY8n6cVmLSecQ3Ln5PKAVqz4oGYQsD8aL9AsTGrkfcTwoFUYKixQCyggNGVmYi26iB7AyKM1sCxLjkivwiYUSDa",
  "key26": "3jSW8ommEoX73LXGbkUGGTuRbnYs6vhDstHhFQXXDyVQG22qeJg1EQtxdrjNFTv4SMih3xSSmkCntQZRd7wkGroz",
  "key27": "3ZebFUMa6EmjWBBhwejsJhqQt338gCbKVeuQ2r2apvLsbJUha696ojL74dAiKQzcweRfJx5rBhRig1esgX6DFg5D",
  "key28": "Ro2Sk7ZhVsD2kfmv77jMTQkt4cFtG3GGKMJe3u3Cj3ePFAuDA4VAbCr2C3HTgkJvXij4r4twgw72iuywJ7Rq4Cw",
  "key29": "2zb2SzZQNSbYNqscuqGEPZ5wGFgfzFjAQkNd83xeDeaKefnduwRQ16KhJB7cBA25RLQ5j35Bq9KdxruDZuoGd8BP"
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
