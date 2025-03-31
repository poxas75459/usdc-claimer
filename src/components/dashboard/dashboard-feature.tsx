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
    "5Honjiq4JWefeiSP6ZEwkh2kiWRWRLP6DUwAy2wqUhE4K1hFx5jeAnEdVxw6n33BNAY46JsygDSbAUap4MtCsG8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o1YwASD2xiqY6A9eBx2ZJuV2WSb6wWHNmJouVwtYtvvEkvzysnsHHSr59xA71E799h7XatiRwKTfaH5JQ8LGt7Y",
  "key1": "i9DnZHt8ozjYMy19jLgB1KXjr9JEryjkb5TadxpHFRw2W9ewY4GjfQ766E22XGYkKEFRHikQFysGXNkY4D5upXy",
  "key2": "k1Ywd3uxTt9gh62F74fwxt8vmDfKC3iNBDMZKgCMasYAzQ4435yUigKr7dwEnfcw3u4hQvvhB5guPosSomPurr6",
  "key3": "4VoxwyF1x38rnkYXvrUvqawMTLAK2PMDd8NjUh8Lw7SWMFgpwGLUGJqEKsaJrKf7zbGRwDAsXevK7xN97APRLYw5",
  "key4": "3DdT4KRoXhDszKeSEySivfyUH3HRzaQZ9uGfcnR3QB76qMge2v7frZ8zWk8S7ifu4HhjzBmSy2fcv9KXU15Z9jwr",
  "key5": "3tBb6AyHy1ugzMgFjyEzpn7nUz6HXiEVqqS2YtgVJsTB6AdeEApw5GRyn9hexwRKgA5QSLCzRVdxLLkECxi2XZhD",
  "key6": "5mZTX1LM6cg9q9z7thHM4pGvEHkx8vvPmeFNgeRddL3rFvZG9fLarsbn6AddqoHcE8KpDRAKwteLpWRdh2wJUMDB",
  "key7": "59L2ffZU7trsENS9L3hHMEiCW45LZ98L3Dj9XZE5SoocBTe6aZDFTT2ZezQdh5wKwqejhuTu7b8e4cfCjHTEVsui",
  "key8": "2r1xgNWMbwZGXhBwp73r7W8itx4dkbJ7YGcDgiLHmXQSd3ABjX9CaH2mmN7Fw7Pcrr6bkEe67efneAqtii1cHt5",
  "key9": "4fEeiabXTgrJ5gGpXfYgCsMqNNf912fXSdP7Sz1tRNJq5g8m4hk3Toupo89dkgHo9zTLycPWF7iJm9k3Q3BBkH6p",
  "key10": "ZbbeXMoTv9uRE7exrJt3qyMjMcFeyo2eNLNRG3FAvDnz352QngmyRpYsiuMk6Nff4nzEDRPBmtb2C9BWbuhoZGf",
  "key11": "q1rDZSKiy91NiaAGuaDz3nTow5RPVy1nGhb4nWWoYsXt5WqEFAgbLiMspN3uLVfssPiruhjipBoBV3F4QrVaAas",
  "key12": "3hjuy1JtJCsvWsNXoAa2BjWdjaLe2oHiF4BPPpKJNvXRFHi5mNfYxYSQuNm5BmUr8TKufJoiSEL5v9sAC764fNgP",
  "key13": "4kpvMxFNFG3Moy7NuVp8TLrPM7rYAG1caSG3vKX9VP7j9atqrXADFEUqTFbxJXCPSE94WHZ7TdBHJSVH8RLRPePX",
  "key14": "NmtYkJy2J1mNHx2uh7bh2g1zUryadpsbfkbkLLD3vvw6Pi7VQndUQEqDUupMmRim5G1EQ7viBVeqVgx8CLCjpX6",
  "key15": "51vxiJTDDhFnNoupeFjeLRmZP3xjbNJ92SQ7ZtFZLxhpXRNTKVrhLT5qv1eVPad2CsJT39sUGFLy32HCoKJQQbq3",
  "key16": "4RaU8CymBAp5TU6VUGdw4ENKdX25kqdBME6dki13MKCCXMbmyHp5XzZiHgwGEK75jSLD6m3iG1BuMN4La7w7XWtd",
  "key17": "2cx36me6DHrhc7DfoGJpowjEbQrMwmzmP6VyZSa9RQGAG1fWFbsYeTbTDNfecTxwb7cwd4Jsar76FrGdUJyc8aAJ",
  "key18": "5TNJTBccixGsoP6QpGMBqwVtVX1DK2gGHmefvjMW3NCUaiaC8hLh8XgMcGEZpTdbDNpx1D422C1Snw7PtbZAMKmu",
  "key19": "35QiSTpwEZc3WyyYbq25EZm7KVUqo2KLZscecfeHJhirGpRMWNVRcU5u7dZnVLiFWnV9RscFtBVs8R9xve41qku",
  "key20": "K4GVSy6G7Lri6ms5KukjYoRxy7BRnpV9EHEsj9vJWCZtvrgr6fqpev6ezkKBSmWExr6Ke99QjohCbUoVSdtvEuS",
  "key21": "27Yqpb5jm4VHgQSpVD9gLUipKcDkzgU9R7R4RgyPYYGA12bWJXeFBKWio2EtZs4Z1mUPVo4Ds9koWf9pj7TdbSzg",
  "key22": "4GUn3Mc9QPSU2UqXE2kJyG7x5ojcBwRDNVeKWcWMmEVVkLrMCGPTm2p8Wag3M8MAeCt259PRFSpLjnR6fXVzE9ZM",
  "key23": "2R1Ti9zmXNmPmg2pVAgaXQVa8Z1oibeiqQbNGPr35hP78DJ4vZavXJ6ttxszZe3wYiYF5ToK44qbonhnNw1k6n45",
  "key24": "5hg73i55S967WTVX4h78crUJSq81TBymACagXzCgXVirgbMktTjVLLYg3xc3EF2vj49E2NyB5aubtE3Z1nWy9bMM",
  "key25": "4pjZ7NGcgwFJyyoYntxtnZMDZQHg4KtP7ciQea2h5GHZJ3S8gahKWDTFNX2EiCbHJP75yiD3CggHXePEGpd8uSXL",
  "key26": "5QFU3j6XrYnEKkEwXqHdHo8tCY73pbmkY7BkEtqcBhbjZKEhPMnk166xz78Ua7KJtJ3XAsnMmdtHW3urz5x46gD1",
  "key27": "2hYVMS2Ct62W4xoWqkiKJwaiahMdp1PYTZSYgiB4y3xV5dGghM2iUtSjcbdTtYCrKsirWuGgrFzZ1F5HjnG31ER6"
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
