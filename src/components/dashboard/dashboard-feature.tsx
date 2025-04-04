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
    "2cf1wBHCnjkNHacXiwGLQA4UGKmakpiP2mKG8EQah8ARePLd2DidcEzjkL4p4dGJkHaL1g2RxM8W9H63HN7HQj3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSSWXSrRfi2NyEuvyxLF6oQn78iHqRyzWQMJKKke8Yro54pm32iso2ZbBFNRbkSioPtmVthJxpZFkghAZ6oEDgd",
  "key1": "67VemREfW4kLkvxUM7dtuqsb61hHRnzb8rdZGwg1pfxn7yJoAZ1oBny1MV9zrAeiDCv5x8pKcazaCtHMpHUq9Y51",
  "key2": "2nsboQo7qgGDswm9yogohs1ReXbrBZoq4o6JzrsNK62frwn7QKwD7omW6sth5FRr6ygHRLPVxMvmbP783PkMxaNU",
  "key3": "3wWrwz4RJD2wJgPLibXeoK3XzgrZs7aAuhqUWp4mbDJnKpTcxiQpxPB6xfn5A3LcotQBPLiCEHo838EShakFQJ6c",
  "key4": "3VAUKGJxKPg8n5NFuaVhSyrPjnA1acUxQ8SwrMQ22R7sNsDZDDFc8AQfK4PNBuWiKZyucmYKepVU3TtY9cQ8ENnS",
  "key5": "4bnJA1fpzbwfa271WqK5tPSvQkSL5G3V9nYA5qQLhDvg33mbRUhDdDgL3QsGSNaZMDo6gfJ7iEoZuk6cQWixk3rC",
  "key6": "38gUQ5DFibNnYB6J4rRWH3aVKBmMyDfq1Jv616k5XSrmHE1trkrGZT37MxxTvhfXyrnRg6v6FGNawdG8NuMnCpWF",
  "key7": "2gYQBwGhA11e6oi23aYMseWp3GPxpk6NkLA8qairQd4k67oggzBF7sqtnUtWrvLpinWG6YNDFa2ShN5EyeQeWE3w",
  "key8": "4Y2dFxmmrTu6dUSXvDDtu2A3Kdoh5CfAmLFJg1DqgGSLeP2CUDjv5ZeMBznggGnQRnovDesX2PjkJe9nZ9W4Siht",
  "key9": "4WhCC4oGDQ3UKwPFWBCe2b2mkZAnSsprYFa4w9UWFoWnmAtebodPMwTRW88c96RTtHcwtrM5x6F5EEe3dY65MnWE",
  "key10": "2Si1gjFvXq3s7V9kakDrTDwNy5bAoHSP7kLjvix8rNoWZG43SiXrHD5MtZRdwT2B2iPBJ3dMiixSY7mAijWC3cMi",
  "key11": "4eyg7JUWVmw6PqaYJNcWcwhGSuBmCnjxCGm4ChAa9G5JCNRg5QwwBRWbHPMR6LhGqhD259rzHdUeniJ8DoUA7Aqp",
  "key12": "1Z5q8FVuDqM32LUUmpzNJAss6WNRnaJrYpvm41TMWdC3Q43jFLg3fCfpGXhv96Mq9N7NorXHLix2SD7JToxuU2N",
  "key13": "3jgsZxMwdGxtqs98LmnP3DKeMvRG33wwGqgTvTvqdTbn98rq4S9QrQnwva5YZ6g7JWUMr1xhryBwsFYvxhPb9M48",
  "key14": "2XuYUPw25NdAyzqf81FpuaW6F6etF8ANq8tY4Pto71fphFj9744xPHVmb6mGuo22yhb2Pj4hBgzVsYx2X4e6CbsQ",
  "key15": "SMPzteGiGXhLKj6cR9akY2n6tdyjw7RP1miAqhLdUCnwuCpUFHNcjqFoHQUhoucMCgiRg9FCH1c88aZcZXnG9kA",
  "key16": "1exRpE4SHohJNf6aTSTUdBjUTKtq2g7rnypGBJpMUUq8teq5TezKN35FN6Y3JQLVAcmdzEVwVq7kcHWLPRuR9Th",
  "key17": "31r492WgyMrRzW6rhe5gViebUUYP9QahwDbPmtQUF8NZDUcytFJ9PiRd396nsuR8MXCJb4ghB5FFZRcNRCJPrR2s",
  "key18": "5JseyUynzrUDHFfwA6TsfStGoGZxRq3jJbxBxvDwCMNp5b3wLuEhLDiDPdJfbMK5XmDmUzprnW7bUxqx8TRA66Qu",
  "key19": "5csBbskRdTGvsQzcvPkFb6HPfdeXnaXDUu4gtAuzB56TBnvhfn7ADVbRFJEcB2nBNGq3kaeZxK5615wQxDMDJpa5",
  "key20": "4EycxQq2kbbWAcy8yJhHU6Z6HbgKP9gHta7Htkr7fnSZhHjsAawx4ZkjRR95McVXsjGFvurCvxXGHH5mxuEcxd4A",
  "key21": "2atiJPUwoRCgNzbayDnFL7Mfac4cZs6AVbrvRq9SCS7rpMHixZnYzaEYHJ6VCpYArDLjmgewZzun5opSLzpA8nJ",
  "key22": "2ybYxjAJBPQnk9dpukKUEZhaV1dyX84RjTGh6gpqCexUvvxRxjAze6BfZkRBmhuLcmoz2tyNdY399joNjp9CEPUT",
  "key23": "4XyVNCGk2giNw4MEaESvx9fVgtRgSbCUH9cUK177B3ywH9bATN5fW91XfkfgvSSkDkcq9X96aJDRdYQ3jdvfHE8n",
  "key24": "iHMekmUxny4fqnNWdp6732P574MkqayupCWd2tWFcqDRJbxwZS4RXADSmaVkZ9n97MptJFAEezTWrJFmF3vCZvU",
  "key25": "5u9acbnGVZxFnChHNE6C6ff2Hc9BxMnyKvusJNxT1XMcmikjon4MSdTbd1K99S3Ghvc1XFwZKFmXrTAoJpUUMt21",
  "key26": "2krrd8soEpMn9gTCMcmg86tkXBxJTEhpMws7g55gqd9BauTqTuUUdQGfLpG4PXhqqhpy67tN59ooViShYX46WoH4",
  "key27": "5hGaAtKWUf61iywXBNYZyyXcMnTZMeEcRLmEweCmxiU1f4xbvXLSvvV4m6vTCmv4n9ZnG9comrYZ2ZWFqPU51gTJ",
  "key28": "5RyXvFk4HKpyxqxu92QcNKtHX4hV6CXLNzVg4uNXRuSsZ1z1ATuD5ndty7FLRYabSzMGUnVXfSWymc7QxUDAVNFd",
  "key29": "4dp3bDepTSozbCMkWF2aosx1Wz5kuhHiTobdYL1fQiLFLeSkGYA6LiwLbC9YuTsiXuqbEX3dRNMEZEf648i9GhjT",
  "key30": "3246sHQsMGKVaRovzCmVUD42ZyQr62MD4rH9HgM3tw1qYkWyuXPW76rH6eepBEsXwX6EKurLT8YAD9H1vYCcZHbZ",
  "key31": "3KZLveBcmLk5GZgcCFtS2uuiXXk6i6xhb9hAHA5aW3Tp9uhG78MFb1fZUvKfkd5dKaNSg8y3mT6qrrn3FWF2JLD8"
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
