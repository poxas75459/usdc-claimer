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
    "9dT2xizJiAq4Li2zHmZuyKqMfMxBZZwGscQj1FL8gEzUPcJjoXC4QPghzWdRsUPfu7oTHj6q19J21pbMGRtswri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KRkNevaFkLxCS8KR6jN1bWQLVWNhLg8KsJGAwMfTyZuvrhsrYhqCL99a4GFA8ccGe8A8zTWFWMomzeoU4RRTsvw",
  "key1": "4d7dTMSJuqRhwvZMvY2dosV5rS16bXAwyWzxSL8qYUQ5KfeKdQLaaw6aYEyCZs1Xwcfsz2x48uWZ7z4sMFKrcvua",
  "key2": "3xP5QU78FntvTWjw3EyZc2Ug8g3ACzQQx4sxVFBThikTm4zx3udFKo5G51q4cHUGsjrEExWemzKCNHXDbsvVHYVx",
  "key3": "4WAUvA4B7WtXwtBkxzzcYYKBRNxf6WS4PyCMG4SRqQWJSC8Wki2f6vNcghJtbWMLsNCYct5JnmeuYDSawdiTGGmH",
  "key4": "PKvBvPH6YfCrkj2fqJoaVyrCHLFm8bMFGkGksY7LjkTp4Zi5LLgYYpZWV7x8vsrdJzQ2kunBuk1d56Np4Ct19Xp",
  "key5": "5of41k66KnoLakHGUJxCT3Co36ZdmWN9kz49RnEGSzDqVcH1raUWwUD3rzrRhfoVsLEPEbwka5kWDFmhhpwAZHRA",
  "key6": "21UKxPVqUPfn8XgvuLpvVWFEiZWQ3yy6C6TuHXdGi9Pt3vL7cGbn8dmSaNvYg8XtXrSQPDjAMzjVoanKCbyhRFKn",
  "key7": "5cjmp8mfbYr8UYHv8mNYVMDdbKGUsAJqq2JWiEeDnucDuGNDjwSZrN1XUm5yqPY2FjSzPR6ibuZLH46Jm72eo7u9",
  "key8": "43My1SqPiJZLZ7qEsGUJ8iNVGPtoPdJ3A5xpC7Cz5LEFAsysH518CHaY7GNp8CfaSavmyDtHBveUk2utBvts9gor",
  "key9": "1dYf319x15uaxzZcZGhHEnpqJxBA43eoueaGXtS3U2bsabi5qebFDrhYGk4qUxrt9yT9WHTc8pbaAKTNqa4MvkX",
  "key10": "4nEbvgWpyMVaiLByak5NWs4bsURP71cxtV6ZNkWsvk2xLfnqhRqKKjKmzhYPKvPUWACNCoTMtX2EgLRNh2iDFuga",
  "key11": "2ivRmMPKjgt76sbTSTqZPQnj48npeqvQWPemrCsBJJhNeb7W2YUJ2gwFymiTD3eHbGuY5j5kT38AbSwEXS2NEjxi",
  "key12": "mWen3biWyQNG42Ro84rGj6MyQpzuSd7RkNB13Pq42qwpSaYj4kgRbWepHypuHUVsfvPedUxKzoGwDHMX6LTSjFP",
  "key13": "3LGTGst5M1ShcdMDCer45DrGqzeRY4uTYbtTQ22Fkg4hrGpNksANqKPXXCNeGnk9TmT6GkK5HLXYPdyGqLquSDAp",
  "key14": "5J23Jt6EQL7B3dWhg2KSedpiKKodXbFmEHMJm9EUyfWkgEXVAx2tqCQ6A9M4Rp9cRWfzbXRaWPKQG38pe4qxL7zy",
  "key15": "5NG7rXHEz6RLuq5KsnmLmwfFDHJpVcuiQ1Vxd2gQMMxvuvrVSQNHB16V8fYWjZ8BfSPVw93ip9bBR33MF1J7FzvB",
  "key16": "4Lcap5Cb5wpftYZd1vygqkX38rAZXAyjvHNEmzX4rDdgwFCyfWVjZHXqPJ5NDcXaqATuqvdXhCQsnYDxu8hDqvjb",
  "key17": "7UEv7YnWQw9cxoA4Je8UhG9iQ6icAcKNtt4MHkGeGDjwXuBVmQaGsarR2bRpxXai4kUwV7mbEou9nMdvN3R8hDM",
  "key18": "44LUe4SwrNmgh8boeeFTWP3ZMNnocYqAwpokSJJB74SoRp2qtwyrk5C94HKkFxEkke223FsWwChixyzGLS4R7QCF",
  "key19": "ATtQKZmr2qttSGTBmDCnEfEkT2ophRqCCQTLqag6xVa4UpkYww7dqZi2EtnYKzNTYxhHKuU6jDTe5vyyEEePRk3",
  "key20": "2xLXZsgATPQtNEDCfLb6Jx5xjwJTXyuPA14xnygFV5FN68GwtYdG75xLXe9v2FTXo2ixuSABxw2n4TNGh2UxtGxF",
  "key21": "36MmcsWG7iW9KPgMKAZeLsKYv28hrGdfs8hAY3aXRzdwexdxM5Mhm7XGsngZKpu8ZH4yDWv93PiKSgapXyze7vGM",
  "key22": "4YiDpuV3qfeU1c7C9yp892mbQUPBMeoPFJn5EZyGT3dcvZa4byd2obX4vGt8Gzu6ojXyqu5Q6ifNjRoLPQhioL5N",
  "key23": "PZqimYDDT2AHescyiS4cNPTX51cjtF1ZMTSQhrmQCb5eJzN1jFaogEzHNcNgQ3YW4hV9fhhxZH1Q7gtZ65S1uiD",
  "key24": "5mUCn9ApDNsLetFaKGB1ABd2SvzBcNEp3j6XDcg6WmEq2uLCYvRFRiiFgntpBkVCMqbUWb9Eyp8a8eU2zaMyy2yW",
  "key25": "367iGcRMz3AjxVkNDhx5B8GYDqp6hgnEtVSc172ojbnzyZWAM6c8qKS6inUYBb4KWhE5xW9tbHXjX11mwnD5VUMo",
  "key26": "riJkAxSo2VxhSiwsBu8ouaatF1Cfpo1UL1MDYS2ndtRctM8MJvmiMG6sKB4eGhSPWLjXsp9CuKuXvGEaU82jpYU",
  "key27": "4XFaBUwbmbemF3aNYo1BCrDYY1cqH7v5So2HPWKS8gp9PUs1xwcarh7DgzikAVyxW2KFkdv2j1CGVaDcjhVSXLu1",
  "key28": "29ukR3YQo9fvoa82zbdcrm9atn7Ewm7sKgv5QoyJaDTD1vdV2wJAiUWctk37g9pBR6DnrauAKdu5qc6LLZPaPtGT",
  "key29": "4KZ5jVBqYwPuoEQKK6Twu2H9HEWazbi7g5CDX7jrL1B2smEuxznG2ZNtcnwth8d2KE2m6pGFUEQZHeSyZ7m3wJhA",
  "key30": "3xoQZwtDcP5xWMM1AnNNu1sv5476c2YAYEPnQqgGNAZW2WeK1utcWmHAuJrLeQefWNpSUtFFAmP83cz1WfvrxndY",
  "key31": "2GKbXzxUaS8C8RkKuyE5RkC8G5qdKseSGz4oAg3KJUvmRe5XrZgGb6o45VC5ZLnhrKDWMpgbF5poLVxqhZGiMYG6",
  "key32": "2BS5b89QgPBbgu9RJYPfsRrhAKeRozFSW6pgqPfmGJYj9rzv8i8yw596GgFN4p7qcKu3u3w3FVYxCsAHhkWbpzyF"
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
