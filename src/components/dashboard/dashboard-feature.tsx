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
    "4u8qSHhNdU6boXfgkrvrKgxDq7BCr4LqENQr6KF4keyHoF7zYudBWsuuJzJVWzobZuzvURzDZgg59X4JTfudDz5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sxnSeKCCiQSLpLuNeTH3KeQvQ1r3ndTWjzvXCu7F5zDjCFFKJTVxinKdgANHctt8SDZ8AWUvdZ8R81tHqHhUHUs",
  "key1": "4QDG5Utks5Kg67jEWBQP5tZChTgwDQ1t19oW1yvRFa45ThmHXcc9u4vMZuR2tFQkxgFv8WyAiL5R1QbWoTCAEfa9",
  "key2": "tBcBFz2FFGB5QLUvtE7hs18GND5TYvF7MktJPv3AgVNLrKhadfcL9vF6MTJVZwe9xWtxp6uDU5jixrkpvHoyLbU",
  "key3": "3oYkjrJJifnab4BswSFcyAuUVvsmJE3k9GfGK7Cset1LmCMDj2uUaGCvTcxfRyEVXxXv3YhU3Af32o9PnRvsXH15",
  "key4": "uJ1vxKbSsAWXpbgjgBeMr7YiVkW166VMh5pgGu7fu7w9SW6NURLjDfrVau4E57PLyccf7JLc3KneV2zigDLMRgf",
  "key5": "4aLsWngT8Cq8WES1pLbWD42qd3WdbhdGXasJyjBvUJWxRppewJE7LJxGU3TttZhsSsexVUXDhhuFF8wmqraWEMqV",
  "key6": "tbSGqAwoqeF1mcMFFqDhLCM5z6aNegh6LLJXAREhfdXsVToauFn6d7zig42MK56DDKuPbpkyuzdDnqb3qPXavft",
  "key7": "44Vf6ymVBHkiEWDHJdUBR9U8Q8HiUsgMd56p4FqtGraESAFT18nufXzdw4JwS6h66NRUVPfxMWTvUHCCChmhmewK",
  "key8": "5QsjZypLRPFrrHR97GHLzQFqKeyDSsTWki8EHXLFo4i4F5MBGeLBXq1ttPDX9rL8kn1p7GKVE3t2JJkeFhix1T4a",
  "key9": "3fXuTGj3xZSk666GdXXgwbvSSzzDKZXp512HTaukaMXoUhYwaXZJqgjdfAEykX62F7uLb77Xc1pLk5HuF8JF3pZF",
  "key10": "3rpbatYYMUZCSF48fdWaoRwzHa7JfcKZdD2CKUTUp8barfmjnZxfCXjchiBA7JbCwE3QUQmJapcnfSfpSy5WKPGv",
  "key11": "5QBmYcRtdPXgfNW7ARr7jtf5Ys1QbVbAy9BDu6pPLkVFu6bYtyzNijBpTfsvfh2RjCn5FUishhQRKykpPeGaGYon",
  "key12": "3zBK2omfVHACGY5TcajjeE19efvzehVQD4ANdh6xTJWi8u7yHGFKN27faSF8NKfqoSTA3domxAcRqJpJmEYUwJZy",
  "key13": "4CjRQEp4cpiKEQgJBjpRdBjpmuGWq7uqH2AA2FcyCMR8nEkCSuh4VJFAiPYr58iTmt9KLJA7TJ5PJ4pdj8LAnuU3",
  "key14": "5wfdbm9Fj5rYFoZozr9dQYbS98MaqL8LaNyGCgG3f545ETKpTKH1JFyt4JwYpFZ8wJubgURASUKTX8fLxNF8nBBj",
  "key15": "4Swow9fkcrq2kwjwSruH3UHeCSLPWodX7MUjQmBfVNbCT2s6cvoWe69yVthfbWAy3UFhC8anicZX1MrvdxhXJmbL",
  "key16": "VeLCSYibVctTP8pU7hhhWQGHyGa5kmaopSbZaZ9oiXZpCLLbGkLQSFgv2TwY1d3fjtSZuCXhY2AV3Lp5JwBMCFn",
  "key17": "2uMocnDNuR668BtCC3MFgT6ZR41LNGyypDhqYqsbXmVXDdzkAhY6Q3PrUq6e2i9uZvxS67AJzG3Fs9EAy49g6Cst",
  "key18": "2SYEcngWUftQvXZjweP1ij8csAgeAdNu7ciYbutZiySbXaKFb5gSK5Zv8neAMxGEChLoNnHDaSpW4BxdmMMhTMSp",
  "key19": "4a7VKFQBPYqFd9iZicztcCBS5w6qRx2fac9cWWFvWm6hETNw28rrrJgGTLBC1L6pynSvgYhv2vLCpeouzEXC3QgV",
  "key20": "3SoXdda7rsn9qAr5JVZdt5C1oz7YGzztrwgYPpDwqFH9BRbKSRUbTpygFnCvGR85v6CgncTnTvJsTPMz9MFeUwiB",
  "key21": "4vbHt4d4hUsY1RSYbYUfZsi796yBpSrhhswkXEjR4agFhk2NCxYFgaXZAyxLRr52t229TihhsfSMbKEy2pCK9Gxt",
  "key22": "oarHjUUNWKcGEdetbpWe2z15PmugbCCtE8nvG2N8VzBFGDym2vR6dFqPk8xdW5oWZnyNU2Tbr3mVNaPJP5Nz5NX",
  "key23": "5krLs8ZkStyRUeJiRS2V8hSsMJgRxkXSr7L9E2WcmUHaDr98j1emTeXrRNKC2zWHrnRGWLYcLESk6YtpE5vMZWfV",
  "key24": "3j33DJAUWGAnsyVif2hjGpXqtLvWBcZgYxbeWyrRH5Z5h554wQgTAbzhf4ynvmj2JHV1JhKQz1GMTDXfMnq4mGri",
  "key25": "3okDt264jL7FiM8qAXFNLZyHZLPhJ6S91TCdttvqdSBwUDkJRPzJLJiLHWgLdxpU6hbYrfLARnH7iK44hS54zDak",
  "key26": "2ta32dPL6h6QpzWXtVU7d4abmfEosy34siHcdFcKWmbX7jWqzM9stRgigJfTE9gEN7KmtHQBEwcXrSeZEDqhEnk7",
  "key27": "4iu631kfzc7dxXuC4gQZHaMPpsioUutNBB5doNxxvT4ehEkXtWqoENjhdhpwTPK9SNdS5U7ke1uMPsgvev5ZZqAE",
  "key28": "FYTbYL5Z2R6voMHCM4TW1tFZUjrgRcEX18anYxLQQzYR68YLMiGDwVotMgXfZ4BeKrrUKTgKuVNtdx88eh5d8Js",
  "key29": "5BTFEBfhxMhsp5qifnWvb21Ek1K1YehavFP5YsZPh7FBPm3XyRpzCCcoASbi5QqPBMGtwfZaKE2SfCet9JKzKHy6",
  "key30": "3anB4VLRXTVuHVsyk4y24E8K66T9FypYYPVrtraSD5T4DdwzcdRiag1SCPEwVE8QNjWvJKLNXJco5Ke2ustko7c7",
  "key31": "3pbnwksgSGdHa7UBraeXaaNpZcFRQgYpwEfj2utPfzkqJHG5edFWG55AjpkkG8iuxw7zfWvuaqGKXVR4HECchg7q",
  "key32": "rLAAuUsbzysgvUfepUkFzkk5Xi3swJTSRtpXhmeqtAnBBavnSYfAcnfCEsiQkwEufaL5YD7xVEpuH7Mnp8gSc5z"
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
