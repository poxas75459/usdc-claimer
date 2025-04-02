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
    "3FCaWhX85SmUbETsmusXnrJSg66Y3H5yF571jspujULQEtfM1PmWZni71D3n92o7FMLyvHq7xT54899CWbSvukDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zo2i6Y1R8PuPVY2K7XePJFyVdqwNYtBjrFwofi9YE9XQQX3g3VM3gPiLyjJCFgAZtXPdcUSpaM8MmPoJ9pvTnQc",
  "key1": "5ntMYxaBnrEMwkomACGY59beYCc14WFjWciZaT5wdTBF8D2m4uiwdnt58z3U2wKKuhyqK1gCZayB9RA1PwgE5Lrk",
  "key2": "2DGJJGtcHpJbHYu59XYhWftX1VSMesPHVzzQje2s9sB3roNoAbzztXrHkZiQ1Z3u5oWaGAA1TYks9TJnfH6xcfH9",
  "key3": "2XGaHBPTPBj2HjmY3tZ4DqsNsmBmxMAb9tbn5TwYmw3Ud4JQiLhW5iRFZqJv1pj7tMZkrgAR5v4xcBGeBJ5t8ecm",
  "key4": "4R2Nynf3gDvfNSXEPaoEDSUbS4MfnpJGp5QTPgeGu7Ab1EsNKGYjweoYpFRr3n9aCgL62jWmENW4YXhm72xK8wSp",
  "key5": "64qZZw5PXPwuRsXk7xMCaiZoTU9UasfVFyN86W9LHxaGve7LjvZ2Q9NN31VB5t87AsFQUx4xiCpeqzpMpcJZEauU",
  "key6": "4nm5fUnnU3zn5mg7eeoeqdELivxAa1RzYcD8FxK9uB2pKBcBaqCxW916DEWvcEHghYGnmTpHQNsnCNScpFgebyzo",
  "key7": "2Ey9MKDbnzzwS63aDGFyAb8HtQb7dyRKgzFzUVzhGKYGPtiejBT5mcUPnRWrujeAELQsmBEqpVQWJHT7oVq5KgmH",
  "key8": "5TjynAwFixqMLEmDx27kAu1jdcVmEtxUkWE7KAYkANrRmxsETYd96nruKBqyKacQBgVBtXxe9AQGcQy2k7dy1m4e",
  "key9": "2LehaJu2nifcHTadWd6nfjjW8KPjPkwtb3qskPdtgXW9rWSVSuRz1EPZHLAdc1qnxHMYP11nHt6HKg91zSLwFJHK",
  "key10": "3WbsadPScoipUwG8DtRZg35Qc4MTQD1pk6HEqL8Lzghb9bheuaKxsWFmKbk4oH6vV7BJ1XGTXBLobfA84AubnLcE",
  "key11": "2iAai898ZTGRpH4fvNCjKamjgxecYJePLzhAtB5zQvvfCeBy8V1miMh71GtwxUgKxmg3PgChTT9ChxV1fzS1CoKj",
  "key12": "2QqEMJCvT3f4Wj8eNpviLAPH1iY9YnAXhKzbK1VzRnFfqJG4777oBN3EgmjJQhq1smQ3kpFVNC4HnDXqog9xmVSx",
  "key13": "3YDYq11FkgGgMGTqbvFGLrfw1ju1fy39x1W3yYQrvusizawMZgdpyJPndh3Mtvs6E5TWAtAiR7DFCvEyhGevTxin",
  "key14": "2MG4ZNnyBBmupsMy67nyU2eE6XsdKtWPAvdCqyPC7W2FXkBfq1oKuZjh4S74Wtm6Jc2jCQi7A56WyJNee7GR9bkT",
  "key15": "2onPkeBgN6FqJ4oqNrB2e5fxHVQ8hFthhLXGrQX38uVzS2VhZp8uNzrsnmZjfpP8CPjaD7yGC5g99K564dw26sNa",
  "key16": "4PxYzJQGmysqNmHUdmkcvMeBFwJtkNM2duZCwV7zwTgRxsJSxsGH5Ru5nPANyzfWTvkB522zbYa4TvbF1fmfg74N",
  "key17": "iiFR58bRGPphaZgviw4J6RPN8k5Pq4EQCXFH12DcrCSAByuSvELfocamiHQdLx6DYq4dd5nNVU3ejJDemjQDrYU",
  "key18": "2wUHJUZ2dvx2Yq4mzUfcuRTCVepUgqogpqADP3U6SmHgRMwXYJ3GAGWwN5XddRKtZCsVZcU98ouxaGizERHWU5F8",
  "key19": "4kPnzp1PNhah5VXXVhv9XeyfZ4r7Xq6jmPUMdJLefAu3mietQszd9bctZzgKsACzzX3e6KxSwaFNL8YUK4AMtTMb",
  "key20": "nVsEZnB1EZ884iTXjQ1zUszY4ESve7xwSmpP7r7wUgxqzf27gc33G7D9yqYCuMn7qpox8U1qRMZH1N7Hsiy9EAM",
  "key21": "2AjaeyQCsqSPJxKf4hVSaKMwHWuTEfHoQZQPnjiSvECsvnGsaYnHjhrtSkAsyRPoPL9gMR7SZgRkajGixwmwSovP",
  "key22": "5UZfgsQvckVKMY9Wzbb7kwev7QK1Ts2C3oRZbZJeTaJX3XMaeWrfzVhhUWowaoM5hvBGZSgQd7ZtdL146eB2JmM2",
  "key23": "3kTv1AQsDp4428bhXWy6NRQcbzNAFoxVFW8VXuTD1feX35ngdu1JCn1x864cyEcHkdvcgpoMjNJ6cAU8BUsHUzra",
  "key24": "5vQDbgH7dWC7xBF2nqxfoWqdGe2T3Bdqdos5qDiSPutRibbCZT1VzzvoBWnQ3NhJAVW6hdVD1sps1EEroCk9MCzo",
  "key25": "ahinbwuJ9rmzdwuA7PJAU2yh9LFaoVWbzwaKSThNPAMvJWjTZawwgCKHqZrsPAedTV5TGkWQpU16oADZ8J4bbEE",
  "key26": "56dbwNwVvtZ6YSZ6H1u8ZLyHHxFQxnEdLnq7G7REYs8GgmuMfaYYSYH9b2QBdKYS1SCyJsixuJYBjpLbfDRJJy8M",
  "key27": "2f7oNxjxf5HVNj9pcNVTqNBSQU7exdLAEGJBfACCxcSD6dkFMDbFSCu8EHYhoVtaGFE86yUtteFKPexwQ6n4MzdV",
  "key28": "3vn6YRn8c6G4W8xS9vkhmVqtDfQQnGdvZp3HdaqZdq6R4FDd8xGGYZpZuKDNQYKDNKU3JHaJZBgjNCiSRX6zGQHf",
  "key29": "4JfrUo1sxRpLfe1mnD295W634CRrAS8ZVQY2avbnCpDJovBpTcTkWCY6XHNxSwev63oAMNWUNeqZcPAoVCgLzfhc",
  "key30": "3JuCWVUDuVwiPqiEHfG12oQzwz64crPyCnFBJuBc6TuZCEJN3iXCxvwNng1X2uy4MZd2bWV2uZvrgfLXUshrouX5",
  "key31": "4Ekrik6dK8ZSmJ4KeKUKZ9ESXfuXhyFT6SwtGA9omVuDiJxyj29HURCgngrgakthoLvVXGYBF44hduseF9ru7pto",
  "key32": "57oqzjowj6QuJokmomd5HFF2Mt23PYHsag8fXSrUtiQi4CpaEjewr6jbZnSnjw8KRdysmE2VX4P6BrZmg2queArs"
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
