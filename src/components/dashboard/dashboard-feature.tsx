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
    "8Gvp23FynZT3YaozhgRqYMw51xJPy5HHkdG1QCTGR2gCvzAPrZTJaa6q1PDDfEATffWFJH7ob1aCaAyrGoE5bQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BEb8RTowFHXL32EsAfZbkVZ1QT8c2YoE6Y1evHmEz61QnuYf97hcnEU84tQqgdULXTEX8u22MY7nqFzeBFWMnUN",
  "key1": "bgWLPzUfn7AyM3vEPsB48Ldt1LzVMcPg4CivVExMbKAywXk7LhjD7AQaFggbVtbJXsNmDUVxbErt6Jk6xccZYU7",
  "key2": "59eCEDjB6UqQt5cLvK7KefBbQKf2wQ8GyUK91ipxbrAtY2vEh1jmjg9vt8bmRKYcGWjUZHnrrnLqRT7YthHAHVhd",
  "key3": "2W3LY2cyqLBso6yxeRsK6kBCbz6XBo275qdaMbaL9AcUyfVv5GU2eBGDa36VTJGstQm1XXaFKPggwpYMvNMaRGLH",
  "key4": "5Nx6ApXP8Jq87e69i1Y3RiXTanzKfVQnoHC2jj1n39qCidf6N9iKV373tTnJJtVEatDM7662RFeiKzPd4HiS6MYf",
  "key5": "5PNB6JqffpBrFcdAzeDrHfLbsbkomvCwnn2eXxz64x85YCbdrKpGNB8S8GUT7Q8X3875de9D4YdXh1bgKvcSwnQj",
  "key6": "aP9iXDEU4Y4rTmCNGvPcJM2dLUFxPWyXs7gg1GChFrMTavHr9bgYM9LyPy8u83HsZRXQ9Hc7bqGDN37D44o8Y7B",
  "key7": "2RE34witTHb9QsaVkUx692TZC3coKuS6H1a5E9NrnjWyXw4rMAgwcYiFbDKRNmQNoXAjWARyGvak6eSBFmF49NMA",
  "key8": "cXQYkp7VLa7vsELm1MjAwQj7ErYiSigDPNiUwsNYXKq853FWoUctwdhncssHDcrjNMk1Hyf75dRCnDcZPq4Cwv5",
  "key9": "3wpiHwXYbqupMScL2WVwmgLaNEQ1xbTDyn1ASdepQbW1CYYd4qxLmo57wDcsGkNHHbLuSnkCVpgMisC8uiK87urW",
  "key10": "VyQFtpxmr2X2gFvjsXJZf1ZkHVyyo7EnjmUvGs5EAtaZSE7PhrTtZTk4ruX4rui4M8Ef7gkSBGVfMK4ZLJsiKjz",
  "key11": "2R6LSevjNTKVq1a9aVZ64fVBVrm94q95anovpeMYjChW6fa5CV9Lck3GHhbapxiTLPwRfpv6FXy28dXHLw5ksJk9",
  "key12": "2U8Y4p1gYLuD6GKoxhuSsRxqmoj25yuz4vaT9wVx2hp9WbDsDcg5v6ab4WSg83wiPedRsK3nJZavFm8rHmZsmEWV",
  "key13": "4B97tCWHVjz3m4MCWSpE8H1fT3hodtXwNfAV74cqzpx9bfMG67JH18aZtVHVBjq2497h7hqgzDd1fC6BG65Kt9Sb",
  "key14": "4jiVRXU9YnVFeZvE2JGWyNWaQ61CHBAM4f77CuVP258RQh1xCiXZeXN8FVFGHcCLM1Tct3QEGJRqxsGMuZMMCEp4",
  "key15": "5yB6vKbNTDV66t3JG9TbJjcnDvGzYXB1QV3F5cvxgjouEHXLQo2EUsStW486K4SWfkRT6u1mvjZ5vzctkmjvPqGH",
  "key16": "4Mw2vFNaqwiY3BVcxjyKjJFrYz9Za1y85p9tj4gvGFUq7stKHihNa9KtbYS9T6SKo9eArHZQ5joHnZT8yoJB17JA",
  "key17": "MhjWaizj75q2WYPfERmMXCzLEMQKrQg21ED1zn3wqqLTyUAstyL4xvzLQpEkYVLduNk5skADoFZwvYdNwC8bhBJ",
  "key18": "1ArcvHvNqwADGE1ppTDyJ1RaMRoURiWoiP57NR8ZSqzSR984NZgRm5qErd1XQmttqALisZFSHunkWnNF1SK1Crg",
  "key19": "3mWyDhqbX1ai28b2u9qwvbfGvC3fdpLSsVru7nBKvSSWSeWGGWSjkRxQfdUZzbPSHtATVTuhc2cqG6w4upsSdxkZ",
  "key20": "2UWixX9n3iJRggrE4HdMdnPTRPXH5bkDYTZBjMgTJdFyFccrU2gGHKTM38ddLQ7RoGSGt7banFLjjZZ8ujmLmRuS",
  "key21": "o4nhtK9bNFMXtFtJSrAjfPhdNV27xAuCSAT2aa1C5N8BpGqwKyTLHDLW11oioLCKMB1YKCkm9AAorMPHj4AqyV4",
  "key22": "3gfXmbTgE8hjZHDbPLiHfJHn9GFQiU6P6Xqg5gNT6yfSTevJijvZrNvpHEbkPy5D3zZEq3vff3k2Ntrh8eBSmHRT",
  "key23": "3q4QXM1mRum3DN7DHpKFjZfdcghSTANWFwGmJYHCvsScLoEYd9jVowvSkvdeowUhHzMrafEr7fXzDEjFs63SMpYw",
  "key24": "4w4ZJxVz3bDko5fhyk8mq42NJB3gz6mYSSNptWnq6ry2zqZPSXLaiM1R6CCBCk6GGNt1BBpQfUtMey7Wz9enKCyx",
  "key25": "2pPnrFqS8cAZhstLQwhF4b543wTb3FRgAJv4bvt5fM8j1ZEztNBUP8tV6iueCiH7fbGWxcFaiu5z5PRGkYhYAR7s",
  "key26": "GrtWMJQ8bT16bcnCq3aky7Z6Vgx8zN14ExL89eVs1SyKavdRCrtbUqvhPzVaYAP77PKzvGqXpAF6i9hNLp9oseW",
  "key27": "qwfCAXketgU2EQoqxFu8AgrLez7hpXZfBNSk6dfu19ytAZNTKp8WbnBM9wWgGV4aLc6VmL1VUi4RTD1q4a85y28",
  "key28": "5Wc5L62KdN5BwzCKjNqh24pvgkNb9T3sowdaAHsYuyYn7Z2snU5fbCKK1Z13u7Gs1Vt1SbZGJKoVrVbFHFho57Gc",
  "key29": "3Yxf2LTVLS9ufNWQfmwrJgX2qvTXMLzkdm1DCrr1McJKnwBJ6V3Uum5J9HsyPCQ68sE3kmKi38RgD9ucHtJGB1Ky",
  "key30": "5wQyFErmTXjLRMZ3pYNGRZPzQ4s7X3XZHLFAecYWXGeYyi1TYKzhMErpA3CTfk4k7ovCfPXvj7HLvf2uCx9ouCw1",
  "key31": "2LuLpu7vQ7ZJFupgQt1K42CHonEVMeLcMMuNoJpUNJfiKDpxnLsfiTQKZTCxayqq6Qai5KHjz7ifnnAuxEYqJ2RX",
  "key32": "4PySXZyHfPFYVfgvkTfPbHSNbeag4eKjbhdXtMg2L7PZSfrW5esjZho6SCX7WMYoJyKfJgvEFxZ8aMUUMqmC59i2",
  "key33": "62UGzAApg4dLXC6oqU71oVuNN2xyV4iDm5pNE4CxYBRC9PVsvYfi5d13bDSay89hEHWo4U5riND1mkxxyFx6KB2f",
  "key34": "kXcJTLBw6ZaW4mJckcXERaXD1QRw2YnQR4kQikYvWWR2v5LVNbjCF7x3ujiQswzvc2rQuPZPr1A4eKNXyxSzsdA",
  "key35": "63HCZtqn9GuCzan1porMQxK1EPcVEKeCuhafawRBbKMBe2eeP4AikDSGJopaWsWmyHgWtuVxb8vu147rKfc25L27",
  "key36": "8whK3vN3oSLMwyzbjLVFacXxevfth3KvNXKuJDn2F6qQPB96WaknXXTJdCbuKHxpd9FoZWoNxYoxa1GaNYAt5mM",
  "key37": "2ScVvMbS6ujK6U4Q7o7WbNbkjsmS9yK1JJDW6v14uvqDd8EjSENU4866RY7EYPwgGw4g7npB39NCaErohYpLvk3H",
  "key38": "4XBH9z2QD5L4qheo8XdCqgmXQhERavLnEAmKLYBW7KKrEHCY9u99YzLdqHRxpscc4ZAw3mWusNhDRs5HmE8wQAPG",
  "key39": "2U1Wby6uPKj8bZVivEmGR8b4qXr6czBWaNMCXtvZtfe2hjxLiYcwKm8PN991CsPsXAW4S4d6P7oSvYnH236qurXX",
  "key40": "cTwwwnrgD1nffYptQzmN5SvmCTqeUMnmDWEgZv3jpsZxAQWKNBLQR4BVTXRfNKQgenZZr5rZwRCjL4CvExvBZ42",
  "key41": "3VRkdT7HKSAZeGtvtgjyc9Wew9z1WYKY4eh6mkFpU1uFN8FV2CyKMuc1Nn8mZHKZhHQTt6jJjseXDpYLpG8WTmGw",
  "key42": "K2kyJhVHn4bzGdEVtJCh3Vht7fZkPWfmwfpwziaV5a22JPYN9w55Q9m8WXGsp1ou77TGkyKJQfwKZybjEeVyufA",
  "key43": "2vfuwRafMjkaCifARKtBd65fGM5X4fzgStj6asQEsGo6hfPY3KmfAGGUwr5xbi6DTRE1pcHFxGnHKGv6MK3vVmY7"
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
