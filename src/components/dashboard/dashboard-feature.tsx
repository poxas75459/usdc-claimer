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
    "25bevmtBDeNJVPHgBMQKGGRecKdQLmWtgYP17wn3cuDKCiGq9Ejnz48o2i5RXCWpPw76tersF7tQW2xCxEZHnmNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32DzZC5iEgp8YF5nEkg2cHYfnmcwpkJM6UZ2RLU2wQDNDrrs1wUAjAaE5YojiXev9B7PxZMicwzToqSwG2kuXcFb",
  "key1": "2PMcUncP1xJGCxSPMuGppQoQ4L9VuArTCBvGQrVgCuynoHbJXTsGmDukqHWHexLjLPEQf8V4KFX4xYSv1H4rMUAU",
  "key2": "5ySX9R1XTWCQxadEDUetxGgw6YgCWu2Ys9cyew9h2Q2rMR1GC1MXgrURZxDtDcqPyggDRAmd3JKXEg3HnBKbCY4p",
  "key3": "kurucWjtb3a1MbB2EB9Z8sAV1pth9Qrhye7cCB7VSxVK24DHER21DQrj3BLKAndFhJF8Fa7r2SQSLsMTQgFCxMx",
  "key4": "5VrRDjWxRjeU3dDXVLp6Ww8GhpjCo8MeekMpQ7o5Ci2EjdpLFjUmWuQvmGWQo1kWqF8CRn3EEhEvFgZtj8cYoJjE",
  "key5": "2BjRi6MioKVDepm6TqXbZxbaVFYyiiZh3rNDUzUnE72k2W6FLDUdykDMvPTEy9ZVpoaPA5qubZFGFqvpy3EXrpkR",
  "key6": "t61jTRNNkukZa78Y8NxUZpcNUhVpuoDVLXvp7nu8sT3Y1N5bjVRc6VmttDV36ck78v7An5dpqvnwPSYqQgxKAdE",
  "key7": "3JPS7UBEWnrsFJoZatdcZLQFoXFEYrwrWk42ZAzSJ6teKFemo9WcqFPyvP39Ph2cDHYsXx4pCRxY8kgydajX16sM",
  "key8": "4z7dSGguzBcm9fk3tR8v4rf6dKBh2HG5xTdJccjLbp8AmPPtDTFR9MSAK51SHVYiM8f1YAiJ9NnbT2pn3uEwmDZt",
  "key9": "HmeHtE6wDKb6aDbnf844fwykza14NDsMX3a5UMvkFozFvAdJB1xBjDeg7FgjRYwjTyXpgwYLdMJ7G1miVTfTtmB",
  "key10": "5oGAoipWXKhFvVZutj36ErUuJL1X8DJS5fJxELrUz9iV1F73pTvvN8iybux2sNG6q6XcGdsWt9LvRHVwqfm4c4FG",
  "key11": "5wJRoonyUfEGMVZQZfzoqDK3uqbeosDZFbScn1q6s99SvPk4H45WjWnwKNLvuvoADTer7vTMmhVPTLwkD2YjMm6A",
  "key12": "4kmq7KxKV1NrLqUqLUv9YkP1XC6cfei6oPCW6UJpQB8fmx1nTvi883wzaS2mCbBWink8Fp1LwAi5duehruLsdzTg",
  "key13": "4wKvmYGXNBcok4iXwyyUCET8patGcwRXzcRDYGKYPqauhGFYuN9vyWj6wjtyTfPc9ri1qbqeHdENCkQoqdXgvZMa",
  "key14": "24YGZt8mZfJgeTXDwygm36nsDPJoLgCLjmcS5jAFjpnN1fYFV4qrabzWxRwJfdHcKqZUrX68vgzHmFmUJHcAg2WF",
  "key15": "237zsbTbqxwz5qyVagmway99ELupE4JT9z3XavAbAu1YZPZiNJWZdHRMteRnW9vVJEnxS2iWmfzhrb9rukGuaDU7",
  "key16": "4CWbFJYvXUAsW9A4YnLgw3kAta8LsHB3gB6wfvsgJJMCbmsXK7JvTYSQabff2qzakZm6xBSRT5BiFGPbjWAmX2Dz",
  "key17": "2CwpUf3V4DKwsgQS7VuQoEN3q8QSekTytiDem5GMkDTvCAoJPbiVhzXqVurJTEthnGXpaUstsZVfH7nP1xQVTVVc",
  "key18": "272BcxDSEYVCjK3EUjwy7pF6ePaKrP2uV6farcJWR2QjTXwRyRnjcTsyein52sztWpE3Gg3V2BBAEQmpbs8ZAtnf",
  "key19": "22ppYjgihx8o8uxjx8QvnX5gJpxrgDZHmU3kGJZMTreYwxEboDBDeJRiu1z1Bme6gvwyF5HKrBao8LfgcyneFVig",
  "key20": "3nEadiJktkbbPjajSep37CHKDS38QZ4r68GYBaNBEJLwiBB7wW7CY6a7B2Sm8cEn7edxgA1L5goWyER81Gq4FHk3",
  "key21": "55HBTxr8MuAVCJcGFjKctZALtG3Ay3wVmpmp9GNn6dEhbCupfLHUuZvMh6u2jbxtjNrutGGSzthQhbTGo2B3sfdg",
  "key22": "5j4j59oqo3tkU1TNe3Vz44yvfcKsDK7cK62eDMdziZipe2QeLKfq6rvvEsnjZ1qWxGMfrsi7KbeK2zniXPj9iPU9",
  "key23": "4YGwEXjHYay5Rj2iTA9Yd13YXSQpz2KSafp8cQC9MNepcQveGDYAFwYNRasxAiWh8WCFre1d1U51LnMd2xZWYU2v",
  "key24": "mrF3g79sTEX2Mk9YSt7N9eiVDAwGSkTbLL8cnR7eve2HUXSevdjAYsqCFsFXPfeBMmjGYCc8e2wBJS6kd81Jjui",
  "key25": "25sX38MfhoGPJHeRA8rMWEsy4T26UmVSbw2ynSwsc5wo4EGJV94zNy1NifwqDxFNM5WEYuUAzeyYwAnncDGd6rNm",
  "key26": "3PcVMR4LwBpP9BJm5395wVyYnwoJqadB8jKBq4wQ93oARhf4FQm3wJ6Len9ADQRsp1L5A2z883TLotyF9hYDEtjg",
  "key27": "67GZRTjQyWkW8PRkpFtJCcnwD4PDpXMUBHxDVDFWy8SYdfQaoeSfsFeRZKfEyNJUpDbFGv6AZBid1VHPWqXwDi7E",
  "key28": "5Y8NPzRqeDZvApsMEVscnzcuhRjVpNVft44nj8C3WpTFGjKUJUd7FnpLs9xXvnpFHSwgnn7Y166MX9kPbdAdicN1",
  "key29": "2x29cqW6RF7hDLR3FAyivaCwDT1nTQx8PJsR2qkbymgSADPTn5xzt19PYrGJf3M327PXLJfsc7XUeLd11LRLPPkx",
  "key30": "jP3X3UNMiqRc1idJm1UfcQTmTimk8Nw4yzjtY8cA98D84wEopT1YQdBSr8c5bd2tdnDe3P79yMeDvbW8Eci1725",
  "key31": "2xJD288nVVKTzQXPcQv7TAaV4nKtTy1VxMjqQd5q45pR96kSKyncvysspiNtXbf4CTAAsrx68rWTSXHgq42XYb4M",
  "key32": "2BkgmmJ5XxNHwVhVdnvJoY9YRg7qGmnPHJ5B3MGmpFG1GcqWSxxoSJgxHtGKHqrXvnoxrtSDmceca4KPasmTdirB",
  "key33": "2rDUkj6LtTbk59fbgKn6KMPuKJkeP7eR1K2XNXhxjAviWTFBBaNcBuFcj72VuWcXLsZ2J73kzhJaFKZjfrAxRcAP",
  "key34": "5Zkf8g9YAZtUwFUBdqczmF6daBedBtxp2seJPXo8zJ3QXHya99qqdZkv5chamoFxjYjF4eo6SDGuZ1aW2vcqrhaD",
  "key35": "3MWjJRYq3b15oeDGjrciT8kupUuMw83VbxyYBqf3DeAK3Hozjv4McqDRaMtKkJGKnxvcdRL5jFVccN9y1KGaUFPD",
  "key36": "3BGHUwQoPuGMhiAWN6Z3WrhCkfypaohqtDpdxQqnRwDy2WzysSViGSbCXofpT9MPqnKsYX6x2CWwvz4AvzUPqFZy",
  "key37": "3gbxPkSa48YPcVf5LRwTh7hS13nHUppWuk6Xzi5JY6JQVxuv3q4h2jewpju2VJniiAL6LU6KWDzgWM7ArwJiik3w",
  "key38": "2uLYiw6z8Hii3v9hhDm8XmTEjmgQCrDfN3RpexZgDxttcgdKUWFmcX3JxN5VaZCED76skcFz5QaJf4vML4D12GGo",
  "key39": "3EictnhnQkfaWrixRu1yZMGwKgDBrZwdjY33GtDi1fvBqoaDm3p4NA5e9HbLz94VK7bXE46HM7BBepNWxwFELat3",
  "key40": "5TwvK641SZzujYeTspKnBZnj2feRoF9rQN8EnS7V1xadHR4aU6yiQ2CHumSUjhP3FerJL4TbnRNzrki9Gn7BKMYo"
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
