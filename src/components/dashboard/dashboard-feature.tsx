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
    "3gBG5iwPpH3iBDSAisk7orjds8qLVDnsHaXX5tx3a2MUUQwqEV4srFMrX5WmAFkDnDUU7R5dT7Bi8YXmtsV6oGc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4it2jv2n5Ck1TWn9KtTFjZuBZJDvaKnU4n1zwdjHVmQ5cfEaS3eKGKCUiQFiwMSZXDwMh245LjT33G4cZyZViTKP",
  "key1": "67MJnGC5DW5iLraT842ceGGztdUe754JzEehZpL4i7XcyZrbjYRxmpVgYZfPc7fPpvbzNUvkz4PSgy8GcsdtEkt1",
  "key2": "4b3dDZuGRegmngjnC3HYJAhG97a3SwshXyGgTm6rHrfKdEdAbduTFXTXX1oxQ6Btbk8fRztnh6pApb7x4QZbCs4d",
  "key3": "5PAuACUdMkwsZ9gdCqLnoiAGJAjzDbfP3i76TDyx9B874z1sjHMnSAX371PYabhYY7MfTiZMN7XMMeME1BbWh8mq",
  "key4": "2FfNSuc9rok4SdhPd58gsbpSRbMKQjWuEArd3gZcPaNnTPmDjXw9PNqggpNqfwiNKCP1WLiEsCKKa9THfJMXy1yG",
  "key5": "4tv5jraxHPrq2eoWRJ2naJfmSc6MAfHJzceuSPynfyFHXN9JwxiuMmN7Mr57yyrbP6XF8H6tzuCCH8nUMKqfbjbs",
  "key6": "5AFPFNEGPUQMxpiuxZciTd7qd1AmQM1sAsf1eqPFSTabPTSan8qhwEo6rMJqAQHJ78j9PvJyXYhbUs8js8mKxypA",
  "key7": "42U3RtqKWmjwYcq78rahosGafa7BdTtTBL2H2HLsJvdJSz6JzYgwiRko9zYTxYN7PFFPB8F6zF4Ki7L5Wrwnafa9",
  "key8": "5uA1H67NUrxToAEccQvwSHcXK3srF1wVyBFqDXihjY4TgbxXFDzib36oXQdh9YzCF88cdXwAHLHmYUsz5ynQpw72",
  "key9": "2KyDo9qaACa5Q6cV675Xj8jvE1gv3NT3JG2p2YbbMyrGVLTBpJ8xcByHxojVvsEi8czkukqR7MpvSKS4bTeuoqh4",
  "key10": "3K4LzDjoSPFBEdjYsEiLiEJrmpVM5fUfAHuABWc69LzYG4gdWm59w52VAUpbRgNsmVMovBnvGyVnKrzyTefVW6Sb",
  "key11": "spsvspSgNAyiyomo6dPXzG7EYwNr4jYtS5Vr5jHP21xhUuxYWPXffYco6LTGKGY8v4P4btUE2ZSDLX3DmcdNEBF",
  "key12": "3Sy1Q1DmF4rTqHvqodB8osowjaHACiv4ZAFUvgcRMyj7bujnqwgfZfQNwVdJNC7kdQNWSVQsM4LbcFv5xufCAjAc",
  "key13": "2s3Ye2mih8Y2tbSHXGMZQdXbnS6bCfyctMwCSDFqQRT4YBRNsB7bngkycmGfpGA5UgtE6nbqpVRDWqP4xDeLchYn",
  "key14": "2HZEz1VWnoLLwySJAjdHjxwyvJkYvB835rNn5cnePss3h1AdWKC4cm6cUKBwbhAGBPbJJayAV8V9FfXcLfX3seWM",
  "key15": "pPzTcWP4sFnicYzM7mxLExxu212HB5NDRd5PZycxzuVCo7xxSv1nUvkVR8rcDiV7zNoxzPEDy4Gh9eb4i4RJV5T",
  "key16": "xJwzYoZofFUxmchEDqXyLKeNK3Jv2wRbgjcXpXNaSQpmaCKwDVjZSzrsFwTHErP97bD8ent5n5LBnmXCMmbqN9D",
  "key17": "2MpY8AxAAsHAcGvGbjg25TMhvECDrwCP7QKaW8xF9UaRrzqMwm2GsPvv1yxXnERDFMKfCp339Lm9wGK3RxpGxp47",
  "key18": "4JTSgnmbGoUnQVxV7UcdZkYgpowfoAZXtMHUBEYTNgwK5W8FNVjAP2GMZRhENR6oxdRggRL9ZoQt9xqsUDY2zyWV",
  "key19": "3QegqVgjEdFHuEMFFyR5KYimALMQSBfjeyxFt4Yn1jX1KKXhb5tnVnFw7vBKPQcg3wpaGZeTNvG73Vrhm9TR8hgQ",
  "key20": "58iuCheMfuqqPXEL62n2gCd9FDJA6PD7ebfteh2A93BJ591oSojdLiRG9ArjoYrS8T4zk2DRDEM5rqFFx7YEaTTs",
  "key21": "3NtBMQPtt2i6TJscyWs7uatNUmd3buX7yTMNc2kSo4n5ivwrnrKgypYresa4CCPzLXdx9SPxJB1T2bVFJFqjvUgB",
  "key22": "V4GFjhjPnvcVW4ucCyswEd2vyGfujdbNxm7mDSS5ubRNJmeXsPhmpy28kLTv4p8MxPpd8xYoxDU5FoGvkB4toxc",
  "key23": "3xkyw6FVhGC96jQBM35XcVyA5Nc53WzDjyB9kNb3AGDDUNraiNvsEZveq7a3eMPcm89zTm65oF8K6isSYqjb4CEt",
  "key24": "3YqCfCjhaRc7Sjm4bVNqTstVrBoeyjerZGKbYY5Ji2WXneo4UkhTh5u3fZZEwzgMUndZefnmapoGv2hQbFvdXCh8",
  "key25": "3PPwp5Gr4qCBbWu1AoQY5JH5yVmG7JHLwifS7bNpbNJRzk7WSzvNrC4jq3Vq1oHU8hWFWJDZecvKFXBNbtpgQZjR",
  "key26": "2N7WXZoLnZMtW8v2iEQew1GzDnXUWQDq4pR15ZHjpAf4GEHeAZWkY26afDHr88Af5DPHUYLRHzqQ3HMuNaU6dRKT",
  "key27": "4nR5UALyv6viHHXzogv1nHs6an3q986D5N9rpt1NBxJFUpz5bnjEjjmm5Gh4oDyhQyY3WRkurtKSMa1ZnPdoYBwA",
  "key28": "3c8JYNRsdSTcqfFKsRaUa9TKdfC81758WNPMeifhWTFpAtbMRYTcDswb1vYWKV8Fdn5GB6rSK4bBSzsyGLtFiVtN",
  "key29": "671mKbYuF36U5oX3HatuAyz9TYqLenULANcsqvZ7d784NJaZimjvAWNBu4ramBRgNefsqkSMzx7E1d6hQfikhxgd",
  "key30": "5Uo8ABHd4ytmWAbcPsZE6aXRgW9gvpbPWMt4gDCFwKUSbiLRWak52xd5rxQTPTaC7LJn8c5RUR2iaAtcb3WDqf8B",
  "key31": "Tsxa5ZiUpi9BhaEmCyreHpUWLrXLgQurRyNfCpptAvfo3dcaXH72NJUDivxxx8DZnPXfEJitgx1iCZNygMXGb1p",
  "key32": "33ixsCtHmYCeEKz3TrPQFxXJ1fH2VKCj4WrSNhuG6WGd1dZyyWaiNXV436imKoSgCDzhZeg21F6WoejE61Y7UA6u",
  "key33": "2d4Rokmrogxhmrui8HqNRwLJqmgRsrnsCPFgQWX7xA7MCgHSFXkABfwXvXYFKQDX1m7GW9VmoXnBPQN1CoED3nGv",
  "key34": "2kBwUB9yWeU911GaEYWxGbixRgVfVTRiHCpdYtv6Xru5w7iaVkLijN4givZH6tivqUpXjwLEhj7vtjvu6Y8RZ2Hg",
  "key35": "3SGddjuf2ZnNpaFXBuUFz7Fdb8KH4GAncWuD3eM7M7czZoegWXoGk2YiNhoHEwEVpMEa5uQ3xK5jVHYVdtUg7EGD",
  "key36": "36Z3tPVj4FRzEkETs1p1XETNsajWTRHHfU5uYLDyDoCXj7LVx2XtXyPN7pQqGvfLR32L3XtxSZgWvgrPrNtygrZt",
  "key37": "4MSTHK9cx8PgftD8JvUa8FYpSsQ2obajkKVEMo4xAqA1QUXtZQJnwuoXfUBUHUAW1cQb7c3fKqTwopZoxWFxRvWN",
  "key38": "y3n9KHPvfWNKvtSvpSEuTiWbsyHuECyj2SJegzHNiGJYfNueRdwFLFQGEbVKZVL4nfJdTEn1qz6K64JY4AgU5We",
  "key39": "5J8Lh7MezBcm5geY6RcW7tWMPRS3nGsUwPKg1BjT715M9EZrCzn9M5d5DFHtFxDB4fdEgSDAnkLM8dNXTSxEVB5i",
  "key40": "4RiwPejwe4rFKaqQMELrUKTSGfMjhXdbwTUNHBdcFgGiHYhir57whBKkojgnbiv4rfjtDGUcQkBouMKNxYbZ9PVS",
  "key41": "4VBR6VZPgWYLa8FczeBxXHHRMaHa2sAF3MR6aWVDyS1pL6McpqJ2HxP62mfVWRhqXVdgYqM7tpRMD6GAzWMK3mEB",
  "key42": "4d4ddALUx2XZRJyA5X1Ew1B57aMEScmV6Wj7xeLSpLdchqi8UXoX77uQ84ViTRgujtaURjquzgQ8oiFdUigkYjKB",
  "key43": "3dthZGZM2d7YxXya7QUQCt2sh4eCt2QsCTaGHWBjYhrpJvmDieo2jYXfEe6WGmEkrvqUscSdaZ2sfy2zHt7LzWgs",
  "key44": "4TGSgAZXMnNRyai8FDmgpcu3nndVr3yBoAn2Lcf6p1y3DpC1GJ1Bp3dyA3ovyfk6EZ2SAyz7jQALTzoM98SGLxzs",
  "key45": "2sE8Md4k8Tcs3gZkjzU15AAmbNgjAuBxBJJZdhTg6Ye2Wux7C34L3h2v6NpbJ9SjRcZ94tHJjSsJMirFq7CeV2vc"
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
