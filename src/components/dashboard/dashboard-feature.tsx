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
    "5yjB3BfmucmfPGed9d3gQ3tKUUJJ5ig8CzPrLYwFEEx7VXLUpdyRR8FKvhtYyiJxCTHT87Hi32NbUwZfuTXgJhGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHwwHRNz3sdtt9KB6q134LGn4a3ZtR6Vb6Js4pwwKDZx23pYmCZvYKRn4rFJ5EXEFz3yHPaVp3hsFqwja8Fm6Yp",
  "key1": "5n2i2Ta7YFmKVirNSkzF4F3mAn66ynR5JDoJ8frZBAwmR7msMVLf8CxSK7ARbVdfKCmtsPs143h6LZPeYEVpvQzD",
  "key2": "SLgEimxZWZhpPZxQMYL8E9Ch9NT2tyP3cTv1AJkwroxNDkHUZyxqjbxNCVQaK5wGU3opDyMTznbsW7dxHERcrMt",
  "key3": "2RPTBPncQvStUJFy1U7dPYzX9fcofuQdjZ7F7fkyjCpf1KkrJsS2NaBzvJV3LzYCwY8B5PRyaLDTbq4ziKCrwSok",
  "key4": "5HFJyYzdtUsoQDs7UA1351vAc2a2y24cQQqp9cffhK4BXwtLTaJiXJCXHmtxe2CvwJ9FBpE42oEsPvphVyJwkd1n",
  "key5": "5s8i4JngJPzdpC1wNezFPPTP1WcyCRnw1NPDW9S5c8s9H9BRyHbBRqpnG94Ah2kvjkUUL8eHHGtBN5d5uA4zDeXe",
  "key6": "5Tyu3dQ9ioK6U7iNqGyJRZVaXAxiqVLVwttrAGrB4SrBcRGbmPaQ1L9wUR2PMpNyBkJLerCUS3MXvvg6Csf7xYxN",
  "key7": "64R8BLXaGXeFkuR6aSkBgZ5eRnUsHT86jBzacfwgNvzYRYqUXMMpfHCc2SEsNYbt5jstLQTMPqyxZ7g4DTiNzWiN",
  "key8": "5iudxCs9EHXxWKA8ysySLC4RgU2jYHC1Pu6WF332tAdJCvPqanUKkW6S54gLCNd9NvA4Y83TifnB7sA9iWupdkEs",
  "key9": "fTjbR63hYEPNkNwBXEJFCQnCC4an51pDBeskBA4HYz3rEXCDK6rzkJ7Jom4zdH6hCCpPx3Wm4KvHaZDeKjNFkfm",
  "key10": "3LeZu88ecXCZ8oK9BDsxG8VQH3jaKRDMapSJR9cNnWNBrX3pujkyVTpdtTwgELb1zV51W3tGLjUAY5n7gaBDvGhu",
  "key11": "3FqQLikkEyYHfw85TtNo26eaXAnwQ3mXCBDkHtegswDcZqjM9ZptzXTSoEEM8FDo6nkXxTkhZ3JxUNNZeGhGuMDe",
  "key12": "5BbARcdzT3UtDNPXZmhGhootHBWVoVrLFrzfKq6SmqbX1Ex86MMWoTUVoSgp6uRQQi9Sk5q5CWmQduUs2Fd5CWBS",
  "key13": "4LL9cnZry8QPTvx7htrsvw1yYZ8RPzJrkLa1CXygKpVeoqeypKZR3Cq1kvWaBVYfbmzFRRBjQS6jE5gREPBbXEzJ",
  "key14": "4fxYt48wYEtCWn7VuuxiAYcyHcsz8ZR4Tr4s5WS9oU5mXB6GYhRGFkwGGoDDr9ZjZdGt5KQZDJBMAFDJA6PscebW",
  "key15": "Au75Dms5xwCmNC9ZFE3gEQTkojDYC47wjefVuyf62k7q8opLVg79gsqkwQZNk3rad1LR1MnNHDEywMNkXwsravM",
  "key16": "41fbSohHhTK8VHL6voTa8iNbBHcZJVPnmta73Vjhi9v2xAGsPAuYkUo6GBcxfRozoerjijo52ds1oaqfK7qmBqwp",
  "key17": "64y4MYdVnFAW2zmJJF11cEuzv7UzWGESPR426SLZt3wwvE77Ygm3cfx9Hm5R9RNWLV6a5XZm41MuSXfziLMzJ11B",
  "key18": "3gKAvcoBE81F6eRknfaQd9qQTUy1Gn825pw1fMaQxBn7DPdCm9W3kbqufhZenQupjCQwu61tE6drAdb6mjXumR37",
  "key19": "X6CfhCtCSeA3uVAeHeH4wPY6ptaEZgH1diKyHG3uS1viy4avTm7frkaAF6A6sQ6ZE2jC2ccBtubkdYjGRjp9pnG",
  "key20": "5uxegS6oAEPahzNyRuCpNBUHCP2xmqFkKffmNFXUpnmH356shUsPByupRpUh1HBTP4zNiWXE6EpYTSTsGL6P5zXe",
  "key21": "4GaGUhf7XgsagoCwBmF3GScY8eRgwpqHHB4grpRtxt4HAoW3mCkyZBjrNca6qBGkwDNGvM8mpUh2NARcCficWiLG",
  "key22": "MQCzTceUA8Sn95ChYT18X1tyfTXLdHZA3Eg6CmjLWExfjkY51yUp4N2CXsXKCLCEpU246opQK3i8HnozVtVWZTU",
  "key23": "2LPD8mk4vj5m8ADWSWdDLTxRHDuxx4WfsM6YrVnwQkDKtEtU8p5r1vS6qa2rxx3MfPqcP1rhVbSKYvozPFodL9id",
  "key24": "4FBZU92RZBFvyr99pUcTNCkXR8A4tDBWkkSH9rf1uN9kpCYLGAUHKxpcu9NqSm85gmLehfrGg8suprMnG1wtfreH",
  "key25": "24gZjczcRyB8n7gkUgv5qi667cQGveyQoRSToyeDjn861Mp8jdcF2GL6s1oBbvYDgV6JnbAfQyAM2amVBB262baq",
  "key26": "4ARAaoUfPEqNCbWG2z5PUi6H9UEtVHqZUYVRBczT16APqrrsKoGW79kQ4UptjS4tf85BskSpMVHFyjggQmkPq7JN",
  "key27": "FkZkZoz64QzqnhQrpDwdd21L2bhM5Mt3VDL74h3DX4xK7hYsnHF1WWMJ52Hr5Gh8aCTjCPLRVWf1xaq1WQjCQQB",
  "key28": "39B2jRo9W7yTSK8DssK2ijtPZ9U7E9s9tEjL9kmWCMyEeXPimsg9WQmtBD1CdaJhye67ReKcstjcy1ExvYGrxC3h",
  "key29": "4FLDMsF4zSXeqk8x39VmvPYUdd9xYoUXFjghvfzrrjXj18NTg7rnETej7f4BZK2vAY3wRiiAc5aQceDUuCuUNxnV",
  "key30": "4ouCz4QFnGYXrzDe3rVww3YPXbNoZeTn7p8jne2N7fQeHbov1uDbErhte1VRJnJWcF5Ez2biypS8e3Jhbh4Xk1ej",
  "key31": "5V2sXZNHpevNeFERT9wVC2WtYtVK8UWzZU7D8YY86J7eDRqtNhJeq5UPDpzTc2t3Y7ThmZt4KmJvfGZ8Ch1fdcog",
  "key32": "47EXy8tdhSMRXG76UswGXdbaVYTKkAUu2PrjsqjzeBQxKkfnFHNxGSWR4cjG2L3kxjAF8SDxsaaAy2GmZzLHeu3P",
  "key33": "3MKqbdZUxzL5k5sgenZjr34YC6RmZykZRxJgH4iReenBNwVf5yxwKsFmpCFPdk4pUZJfYPVhcc66BFd3QovQeSBf",
  "key34": "mMzZor7LovjvFdhzfK6HT2HrqVsJir5EBTVpHgfKrABiXa3Ea5P2JkYBY5AnAHQSqorLxpBU9dvfas5hPF9tAP5",
  "key35": "H87vckVKFxcwHaAYP4E1nfhmHz2zh361eEnGKSWoXwqumYHGeF8UTaziHqAsBTnCqGj6aDpG1gzfBEB8WQ2pVR5",
  "key36": "2HRswxd4vYmuqTttUW3og7KdhTNV5JHZXL8hVLELaZoUPFvZL2kiyAiEU3YGRS5PpiBk9micmsiLNogzK6uymQo",
  "key37": "2b6aE6M2giXUXuHhpRTJBLJKMfB7U21CJnNe8wvQh1kumzMtmvnovTt1vhSeMgnFdJwdrrkieH7Fv7pZVtvcAwW6",
  "key38": "2xWbF4kec2HuSmWUaCJ6ymvhEQrGnW5wGrvrEGyy1okYvtuavViwnDeMtXFr8KMFjoRiYWyPbXfmCAYKWPNrCrQH"
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
