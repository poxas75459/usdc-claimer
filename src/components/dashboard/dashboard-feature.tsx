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
    "5MJFcWeVBebLmVLgRTcfma3eXiD2HqPYMecPAjikdyRQoLx8fsdaf2KYq6zTbx4r1oiEs8k7RzmBpAknFAJndJjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5SASXSqWQwhFRYyX1M9PGzMqGDG6pu3PqY9mU2cmeZzqUmSVxcvrLJWQbPKKVpQbquY716eZqH64ipbL5twRj9",
  "key1": "4phGqcpohYxQKuCCFvsVhUdsTWpLdo8FvGqXo3kEZvgNhvp3ZcwfEF4NEBM2ZeRFyyJQncUp7cfsjaXgvTczPriE",
  "key2": "35knuCWKRhxc9qNoejhjVJv8zT29w31rn6wNFqoj9wFrkeCohNpozToueejEtzhNEuRMQjBE5dyPzKpDWanU8ToN",
  "key3": "4wipjxpXKpqi8PxxmTbj1wxmKeBXFTXS16sqifqWrF8AvqNgAzJxcEw19uQQMfh1FK1hMRqB5UrE6sbbLEu6KHg5",
  "key4": "zon4ZSFTUMQmtSf2uzfFf62bUxFJYjLMwjh5W9fAtFBvV3zHN6zCdPmmWf7JswXmpzswU1NbMvDATzvuSJCJCzV",
  "key5": "4X9WwtuZj61qxNmao1XP9zV3NFzB48Xs89tjSNruuSBKH47b4QSGV3BsjTrFQjYhSEpoenSR7Nr5kfNApeRQnjsQ",
  "key6": "2QAFG1Ju6oQkEHzbRxQzKrsLdg57u9xZ4WafgsKGHsPJqqvmeazLRLXKudZPjXmVeSC9KAUP73j48u7DAX48chPr",
  "key7": "2ceFTQbWVo3vRqgyGjfdMVa4fXqVsPmL5Hgc8UygmZL7xeiixekQwCWMnfqDW7Q9oEG7kWvhz1RBVUn8SejY5dLQ",
  "key8": "2qiu52jMC3NpCYZRELhxCETQDdLgRaGgA4VxJK65TV61GB35AXoG91WnTu1B5HXnFbPHio3TzmA36xFanmy7U7Bc",
  "key9": "4Tpq4WKfpsq9pB9spdC6d81EigdCiW2dBFf7wSdA2gXyfwbKqENFSaM6cEFmbkvEhAwzG826GJdx2FQ8BRaWLYsP",
  "key10": "4S8uGXyD37DzB8Hgqj9gSx22YvyRwjgW1Eppwo6KwN4nvj74wnRtSiw1mSa7fAkEBQYUnpkVrjPT51eXkWHtWHm4",
  "key11": "hWHTYmgjfMyibH7sMoR3yt5ro5WsoLA2km8c1jfeC8VQ1NyQPDWE54VngXRw3WaieHRBveKi8kG9Muu7gCsCyZ7",
  "key12": "3mtgG1ocoK6ZrdVoYWWd8n6Td9fm56dKoJ3SdtfSimD74QM2MoWuoBUWHL8pWLPG1VMoEAvkK5EzNSMDE3xizEok",
  "key13": "5m19K2QSSYspqfwE6dggEfGDdsAB6UcnwBYkrsPkcZTVaB7hWXs56DUS1CkgKm5w1is84P8jL25DcQQtXLReu7UF",
  "key14": "2iSHM4joY18zASMUqYVKGGxPJLo7iKdPpr9E2bWmEvXFffrisrLbVB82TPne3AAWHS9vrwKXzbuTZPPmbg92cNeA",
  "key15": "gPyCBFTA6ejaSXgAmSaiFDCgwrrjUKiGm6gTVQPy8YEX1gxCfVc5U8nZ6cJiJTXnyJqWcwsedmaAnXgsjjAWqsN",
  "key16": "TYpZNmJZb78zgaceykbC7X4zntGqva8b8dt2bxs5V3dn8jhwfGG7m9LuPKjoWHf5Ch2yzevXqP97CM7kBAbSWwd",
  "key17": "tuu8QsUGCNVWcoK3nL3ea9w6nRuBBXHCSTNUhB15QzvLn2Wp87vtvJ6MwHe5e5ymUfSmrVJNkvADQL29Z9ZwLtp",
  "key18": "2wkoraHmnydwkD6pDzgjaQk8RcirhupjSdWCPQN3wq9ewSS4atWPtAKUSjAXXxGxecRpMukMEZ6XabeiAS3KUAbM",
  "key19": "4SjsrQefQkQmtJPgP53o6h4MGUrZRBxzRijGJcJKUXPbyYSau7UjBNSNYUDxG3jurbGZDrjTQdWFcFMF1RnDhGCd",
  "key20": "xgv55vmoBUXjdssk77EufPQvYegTVRVsvcSRZ5pHMEjATePm8QyT1Ax1eUNmqRZPnMnYGLNsnPTRSZTt5ba6S25",
  "key21": "3NCmd2c7DzTg2fGdTMTbPFM769HsZzUxTzQMTFxGYqyi72ptvgXFaLS71ia59xQjeCCJudcmSyhq1ueXvx79Sjjx",
  "key22": "EkT6kN29XpkQjromgfyhkcDLBfM79MXgowS7gGeNyor9ucpqHS28zaqubVbv8ANn7Lug8qq1igUSky6c5TYy13K",
  "key23": "25eZdDTMRGefhUzoAaNeTyvYBqspi5vyNAw26amUrJonCNYt2zAdDjokA1GpVuyLsNkh99to4iqXJbqHyZ6yBp8e",
  "key24": "31VYXVj64HnoFtenuB5Z5wTEfiiCXhKvt5CuscsM62PRQPNim2S4tSchecwj9WGy1vD9G7zjaA2oh7NpVSGSjY2x",
  "key25": "4zCPvDekdomFUWZ8qMc4YTYBbUCmnFDsiQ1VMqxPUxhyrsDaYovNtWvKBcBsWJrSvt6mvu3pDW7qVyjTPwNfV8Fi",
  "key26": "5u611iUajMadxKwZSs2cAwZYLLhNdu36dhYBxc8GHhGfKgDse3ig7GoF3mTfG6y3CJVg77aGamsh78EqYcmrDuHp",
  "key27": "5irM5L1i1VcEEUfLQ1Ehh4TADRsFazFDASPVDs79YCeZapJ2kavmQ9FCKPSdFaQFjzLYpBeaxA3Sra1yaUKWoGor",
  "key28": "4nFN7ciPvn3jCaAEx4fmvyv8jHtKgBcCBWSaqMVSYBZeNUpMWJGHdeoT2ZNMuXALuKEKu9yMx4SUkymEoRWDKtDg",
  "key29": "5rpzXwNsJJqLibfXPwvKXs7rHfpU9DC9mg92vPeeZLqukVCXzNCd4ZiEnZKMkY4R88RgjiDAcmzPzDg48Buwa3xY"
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
