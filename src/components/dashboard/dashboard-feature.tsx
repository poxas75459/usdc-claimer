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
    "3moTxG5JpL1cY6qwVrnYzvhmgGkBFn6aw19TK2C5qPMmLyWtw38mw8QmZT11sNYK8AwKiQ6eRhAAdCD3qLCX8jiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sbd3M9DLRbDoTE4J1c8dowHzp5835GyntPdEYSnVJVHVGcZ1UJw8KeNA1LiPBtTn86o754NBmuRc6sMDd7iswm5",
  "key1": "44TNYuzAUayuvHbbBtEmxbpudq6tEtLH9Ao4P6CeP3gNmfgkeutzJ7qvxxyMLLZMW6RGy8qZg5TvNALMnVbqXdwe",
  "key2": "53MRyesfZdEerZbW6FyJ3Q8RkwYMdVrteXqnFpVcP9SvdpGFxKNxMzoa9in5TmKYZ2pGESNHb7PxKPgrMDbbQ2UJ",
  "key3": "2gYhZdWgmGfLFejTVh9MHBqHDsREn3aJYNj6RD1UrZQvpLe4yzXtFH67HR2X1ynyXV9cwanxxs37nhxyZwMNWZHK",
  "key4": "5Juknb58j8x17hEL3yzEmzXUs1TXJst2HRagpcgxQqsaEv1pHbJ9ebTxYJMaEDu7GdsuY428RqbJ1sAF7tQm9eQo",
  "key5": "4qib7vWpBo9E8azsSfmTsw7MzBsN1W45jRreqHq8oMpVgjAQWrmGnYmco2BrLE9kQMGgPVQgayq7jWKPKY4WfMp6",
  "key6": "2MsWXLJ2qbHZprzujJ41dHxY16imMLjs3xbv6WeHdR4M8Dis1FwGQR7sgGdDnpUdqQNYu9qfcpu5NXMUHgHx6qEt",
  "key7": "2mL1kjiWJPRVdxRRoA7sb5TxL56UV6Dd1yNVR6SPE2A17sujVkHbsN8m1xReuyuDoEyUYiVMmYBoohrLgmvspBRp",
  "key8": "4oLkDn4hodtqiAkLZTopwaTXJfj6LQiwdFtib79Lu3jyRZupWMBACEEBXLWZwWUoYSiAQh7LMiFNbAsXPzMqZxgg",
  "key9": "3sQfkbwyrz6Hkp5TqQM9y6YYXBMnzA8ET4BquW3mBJR8u7GTZ8ThofDH4xEzJb2fQ2MH97zJtFnpnTUWQ56YK2FM",
  "key10": "2jyJXXh6gyWoUYRHvpPux77V7wGpYgT2rAoAaUem7krs2GnkiS9FND7RUFi4bxzTeLMkPsof9ufNVeWsR7VQqsEs",
  "key11": "5dsoYboCG6BiLP7aqvTpfGjF9HR6Lpx7EgBhGC2FieCuEntRDy1uBMcpGvu8SMkeUYk9tJMQ5z2ycxbVvXRYjS8h",
  "key12": "qWTqjHWbVMTz8Y7qobm9DsLq3dForRSdiYWrEu7H3D8uE1ZLFfYJB6zQvBm3beQk79zxTuQeHKGFWmWCGbS6UFE",
  "key13": "4Wdo8K2tDGeKeV26EehjdUxK7aT5eXq66wnUF2yArn1oKr6Vf53KaGpAVYpozxW7GqnVrYBLpLJxE7n7vsftiqAA",
  "key14": "53pSpW3ikUmwPAfxHmqHVgTMSudw5H6vpTpjzBhNZqqp1pvJGUTTioxoAkQkk575rqTMAue8tvtQcF6GuJyD3xAn",
  "key15": "AWkQBoZjWB134YK31SHZCCk3qrZZiNxrmMxxRhiZQxpijhKugowmRFYnKXSRHJQEF6uqgYL3asvVR76Fp2tAG7m",
  "key16": "4ppWohBi99ymtTedBrQ6749A5C21uLdWhsXxMY4C9MC8r4Zwh8Ue6QcRA5UqiWaibBEAgmAaV7FJn5ZxLpy45RoB",
  "key17": "5f4hGkdvEYocNPNrWmoP8usyrTDoXbmaHAv9P5DcVD9TVYFvqHr1LW4HQfMT9ZrFYKxf3yPna86iH33HDSdaHRto",
  "key18": "31Xfz3L9Moo8HX4eE1waJ9vAayTtGB6CcPfqieeZqZEhphDARNUU9XXwHmMz7MFjveDC5mFnnxUuxYrKSGhPNDQ2",
  "key19": "2J928ZzkEdUor6rQ1aRVyjkt3VeLwf1E5Fx2F1X9ZdKnZ5bapJZN2k6Gkg2EJFCkDBqrV9zwFtUt4X5TKXzfjgH2",
  "key20": "4fk6xNYaTGE8ow4JeBMunw1foAeeRR6AQrFzsRRjzREsgu8GvnB8gM7aggw1fgVYEscSFWBfcFFREAfF8S8gZRRf",
  "key21": "FW4gcxzPXBLFuEPtqoQssSgZD6vWYo9vQzMi2vzMWmtBAhhDbwDyxJtvfncbfoM74NKTrusVsGyqAP3deTkokJh",
  "key22": "25jNivrPL8MKshSdmzBDHMQz3rLbkX9BRY2sywaPuDydYoZC8T56BGCM5agxmTN4T1CPtoJqivD7yEN9fgvjqFjN",
  "key23": "4TQCNp2xaFZekw7wPS2TxmP3kJCHipf728sVvday1qZRpsmyyN5m1M51cjWThYvQS3hL3Bk1ZPSrfaEQnuPUEroL",
  "key24": "4UqM7t5vfvunRFCF6YyaXZh9ZAtBkFnTpdqddouB1f5ya84PVkU1JcNY3QEQwZtFmGPGHBGqeeNbJwKtTG63SxGu",
  "key25": "3YxnF8NfuBaZLzmFCunz1UfvvwYRzqVbhqwikUkBZ6bAgJ6BJKKYk4xtggSPztpb4Hj1o3nc4fd8te2oPdUNYzZL",
  "key26": "3YGw2559G7JSXgH6q6x8c3xp896e9KwdckoHhpqaWwSVeVhxVPF35KrBBX33TgFpNqH1mqLWsHhzpLc57XJ6xr4o"
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
