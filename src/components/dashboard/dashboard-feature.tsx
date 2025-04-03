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
    "2cfUdM5HgVdcymiUv8w16o6nysMDgSXGEeq19UYysGjp1N92rfvDkCjJrtkBJd4CbsBggzf4btJF8chK3puCJamH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yHNSRxgYoQUehtbVNypz4CB7Hh6tsvBVicuawBZ2XeidXLh84y7x4XTx7dVSm38rGJgHDjfykEqL3k3zYshWGr3",
  "key1": "4FMS4wZvkifvpZEDH9bDLFdAK41jnJbmr8xX9zWnF7sfpkKq4hMEFr3fDRpCw1f6YxUU6BxHhYMftJGcRsD1phhY",
  "key2": "24Lf8if9iibgrdfFgXadTjGr6kPvSEwQV2FQM9bCcJwVwrm8j1vDTyZ7XJqqKs5ArNQZL6hg8KRzqvB85vriC8yM",
  "key3": "3JPgdx7mj7a3cNXYqwkCfdFZkVR1LpJ4kizbnNBGuBdpKksNYpJo97ZFJ6SA5whZXiprSk5EDYmQ6hSRJ34BwnfS",
  "key4": "2qj1ubySnRhQ51LauWBUasPvSwCwMAUS9AVGzpgPvjsHs3yS3AoY3tG9a1JK1G9yfMwmbfZfozj6rK2tENs4BmGA",
  "key5": "5kz71CMJ7uwzB89vUh5G938vqW8MjroEXh68egsWxsGXSs8iUMUM7sC5cHs4bxARvPxBtf5V6SVx2Z4JcgE7SwED",
  "key6": "3hc9VJeupG8dk3SKPiRP6Kdi1Nib56CHVei8WPzBVWUKJ3w8vpzJwzw36RkFdHbFjoasE71CqvBtUonuPkVVJDMn",
  "key7": "9sxc9f9HTitP5Vqg9gYEhy3CC1rR4VdyShhD17TPWjACtWe8XMyk4giBDTXboc5Vsm3ck1CTj8mcYvqJC86NFNC",
  "key8": "33KyJPzm6MCfV7kGGqe7YGpbKi9T1poh7d2Bs5rkYXTHAec2VdXycqo7A8m1yPG9MELTmfnAdjYvbtju3CPRSbNJ",
  "key9": "626piaG5JkkDKX4KgrrYWazAyGFRbd1YhQ4H6PtyadxHWyRLPqmrBvjfVy9pG5aUbVRH6seQ2Zwd4d8njuh6BkwC",
  "key10": "2Q32dygDMe1vMwp9Rjiwd4nSGZDbRWfhLsdnVL9Hm5eS5aCmY5Ym2ZVsx2vPuJUEXmogNAqJHj437VQ6iuy5ZFrk",
  "key11": "4DzYHCN1N1tV8ViuLhikHpYZMJ4pEgANVhj13Hw2ygpnjKTz9bLyRKwdw4dA8af1EqeM6wafQ9kxXiwLq8CZKHTx",
  "key12": "3RzyPTvwHWWUz8aiFBtZNmAqWVk9THRgRLMht9gaSjLDjkdtN5XET1StD7modYBad52fmJ9M7E46DdRk4FAXBJPy",
  "key13": "2jJZ3uvyqdTFxyD8sFzDSg9gM4T25q8ijLiBCDDhG3LnTa2y1wHAqqJs6i77pA2d2iRowcFTTvE9Bppd4EoxfDGK",
  "key14": "2C2KjV8pq7Ux81ecdVi2xCASNVKepN3Am8DJYpanKTSvyAxoeWu8PJQs35F9a4PdE5MfrrY7aPjQtehCidXkiZgk",
  "key15": "3tYartnw4ewxS7RqFrf6pqxqFBnM8RX98qCaTJkmUc7W4EXhbRdGb8MMrCi6R1EgGnbmLzLZT7PL8cz5cfMr1wa2",
  "key16": "3oC9foCBHf6U82pqgbGpYyDyntm6fgqdDLAz7o677iQv9fCYwiiPJxdeaDBvXe3uY5qfp1HfxXwnF4CBks1vChnj",
  "key17": "DUxUrh7A1b37a95bLKEa7SAKCcAfqkFiGg9Tw7doKHVHiAaQqzx9Qmgnkb2qUAnS6d9DLGhrAvAP13EsgVupWRd",
  "key18": "QABX2DUw3WK5ayDJG3ZJxoKe7HDV585MTq1eQjHU2Azf6PaxGBLG4kGxLJuKiavq4t7A73CjMsdmwaC8mcb81yH",
  "key19": "9ESJ2zLM9pHpduDYAzfyrRNWWVbGsB6MbcSQ2HrC6oxoY9xiCx86aMrbC4u8nzwkLGzNbte6CHTd1pc5JJwTGea",
  "key20": "2LuPhcXSRNFNFX45sgzHubyU44jbxTxBEoJ7GWGAMGQnSwqT3aXruNpKLWHJFmdJbhx16TXy6b85m7Er24jS4fx8",
  "key21": "5tfLzv2DC21ngsUeLD9GwqitxSku8fqjxW1LqfR24m9yRnk5XEgrbCTMeypBAhxgqo3qmqN7x9Xcvvs69Rs5wfwP",
  "key22": "2CfztxpSARGdeysTNeHvr5HbXAmzDjX7pog4B6x9uXXbCtT4QtcBgvui3Up1CRoAi94jpyRFdzZS8AyfMnQuaRuP",
  "key23": "62QXPkRRXGPJ7NPsNRsVnSUTJYopUszhjxAqJKAM5hMTYaqV55wPaZbUzowpYAzNYX6b2p41qBbgL8F1nw9dfvLe",
  "key24": "3KuNTE7eWuVSvfrDZfEU1x2fuTCriZXJJFM8UMBXB5FTpbKXxir5zpzfhxGgrrn5CZXJJcrroLSDM7rYgk6ZF2P2",
  "key25": "2mSoXvew4GhdNvEYAfYnrMZ3JvjjcjKaNaAM7t8v7rQyVrBG2EyZgZTBqA4J7L6iiZ7EVpmwP9pkcx6qcDU5AonF",
  "key26": "2oWg1cMcQohTjAW1Rb9C7uhzqD28fUQm81XS8M8LRzf9w9Camg1wEjqJ3HykAcMMMc2rYK2JdXejnfTaAQoffL3h",
  "key27": "5UDuE6owsATLRcoL92fGxGmxrJakKAk3hNzB2wLK9dYkUWMGm5wBph3Qs7e63c8A6hed7WeStVmQnxijJrumBygU",
  "key28": "5c4crrU3GDos38qj7xjD5nDSUEo1Pkr2KcxBeNN8YL1VaNWmnP4EnDnHfBASNwVkCEW9mwBDFATPQZbUyB7Gi7Ra",
  "key29": "3826BRyFHtos5gZQY85sjNaM7iiXJ86gSeEvbd9j3S76nGUegPrcsuzVL7fHf3gxaskY77ZpqGgZMYSa4WRfp7Tx",
  "key30": "3vG7FgMvNjruXN7ZbGCoeaCcA97QFv8j5rGk1fnPX5eBRNaRF3EKhj4ASqMFBsEkyPqRkZz8F87Bn8jNzJx9hrSj",
  "key31": "37xKaRB7RREYtYNtVYGkP1qxGHVWsPZAL6HsE58NRtj5pWtJ6RxqGaCUhw98N5ECNJe527dhwghSJiaKHoDcwXUu",
  "key32": "5xxMAu8SzDvoUTVrx6VeWi3Cyix1EkPQnbFgbqrFHeKHPL2ym8Lfs6uNFQNRkE7NWhE41P1n1jePRsQNiG7k9nWo",
  "key33": "5ymeyuXF1JRV8DRtpkuVkHm1fEDQFHJQjnvVxRyasvisR78UZrjib9xWWkit9wVvw5n79EtFDcZwv6cKQ4TY7epB",
  "key34": "2uCVmZdqCw2FYSuAY82ZLVDozfAYxy3UM2cSkFtfdEHb2ErZifocZfNXwf9o9NvmhTn2G6rj1cUhaCiLCbhzz7zx",
  "key35": "4DR6Cj3Vfuxfj74yBeBWAFDgUg3rLFBnvM5BJcfYGW81Kq2yrnneZ9BYzsQNYCTvHFVaMsJZU1BJsdDARTocLoYT",
  "key36": "4ZYxc8ZGK9HmUCtcTtSE5zGqZEJnaQd2tQTvT5sfikbtUCBcxcqEjT7J8WQxUSVd9A16cj9DyCoep6uqscQ3e8VQ",
  "key37": "2jUkA2TadgzAQN42SGxyv6eRAvQVn5Z1if4PaL3qQUcWK4QJGVvwggY79cDrXCMG3BbJ8Xp9cva4szB31PAfVrd2",
  "key38": "4Rpgcur2RKnCYFBh4h7iww8XiJXYaGgqHZoHEtKsPzX2c7N11ijGma6wzKDawZfUo7esa3hU7KzQJPc76BKX4UGm",
  "key39": "3kBEa9DKVPeSabeivUUmp4sw4pEHtRQQpnATb9TS6RcCcHrCeVH4QDsmMuk9T9dVPYDhhEBDbvq56RobvUyQZzrw",
  "key40": "HzRXduutuqz4bi2zarbruG6JgfHrHL8PNxcgRE1pW2cDoPWhd4nP4ixqu1y9GTokTy3o7vvhord9rn7TtfvPgYv",
  "key41": "wqxZgjmt8avm4Qyw2sY6teDQq9n4imHiHbWJLmXfCUqUpb96WTxtwcB8WbSLDGkAaepqfPrMsHfdxcb2yKnemy7",
  "key42": "2Qg4XsD4DqWHDRQ7GF6q1xSExRnAEP6eNeFDqn3cJGAWScizXHxwBin6pEtQ7hUngzMNNqXTPGkZd12LfYBgNSxi",
  "key43": "2WZo4R7KDTyELhP4QJaKJheaBcGUTrkmW4hn64SHM7cVYoGdSVca5zaREPGcqxrbrdnB5BYRKCant2pjQBmN6qhF"
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
