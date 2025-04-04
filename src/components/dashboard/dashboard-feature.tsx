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
    "4pxshrPYJEzuPAtQgtGTBFYd9Ad5CQzCtWgFecnxCu3t9JdtycXdY4fwfichseYRHyuEVqgf5vhomw3ftvon9Sqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51iwiqhKmC5Vj3MkeT82NJyPj81bQCYw6Gk4dv6PpQ5DtuZbbLeHzxWEKmnsr8rZYgHCScrNTStwczxDV3PBHPh8",
  "key1": "2h5ecyUyQ9x2JyrnnK7TaxUVCMMZgaebbgCjeJhcZmgmSfbRi1f1fkEtvGp68tMaD1VQcGbi3ewY5oYPKQWNGdN",
  "key2": "WKgFzJrEbXYFPv94xPHpczqw8MW8T7R2MGX4wVLfSUX7dmmLt8BPjbk5wSNA3KHG8x25ThFVLzmigRSLzu6PsqU",
  "key3": "4eo47dRtdWZ6v1uJ9jhWeurb1G7gS1rBQhyD7iNpnqtojLYvFtBhtpyPikgeQubWpCfCWikze22KwEjZcjG19wB7",
  "key4": "RnJAqSeEQ2rQmAPZdphBdsgVF35rkmBhNGAqpDjc6mBqwcRdUMVFCy5ffWovZ6mSZBND7X9Brh4d5jFTQtsan4F",
  "key5": "5RgfgA9apH3Dmwq7dXhUEXLknhS8gU2o2nKdMJjHwEdiZL56dsumrTFmnJLxXNrXGiZnRsnDqG6DDbdNBZFn84sB",
  "key6": "DYotkZyoWTZPJDigfV9TdLWQnkVRcaNhDWqP4quGTdEpPMUpQ2bo6H8GxKZYBWDfenCe6WduWMvfuym2ugYDy2u",
  "key7": "32nS19FCNotzmGD6SNNJQEtFbMK36mUpqvPfm1z55E3KQAC4ULxu5ZoTkuRCjmbafJomVJZ3Qiu4UJAJiZYj7xgm",
  "key8": "yDRLk1Hug6m8QSueEFQDiZw37ZiajUi2cfyVoGdk14W9DBKej14R1haS7kSh6F61kixg18VmxntRxthLZmSwZHC",
  "key9": "5fAEMVtPfzoNm3jJJTtKHveBNVAPYJv81qBZW3D8sAPW2KceH9eiv3wTMsUeVSb7gSpQP44f8itUbUN1NqUasrzg",
  "key10": "2fZuR6LoHAr9ffFCphp8LzpeYbbPboPtWcBXsvcfBEh82cGYoTzHWVrA4TcnyPPJYKxYARH3sdCbpAFfxZ4GfZLJ",
  "key11": "4N9ucqhjLNDZ96c8GvUgD5qM3dkN8rzzu7ZCQNbRHWpnbBenUXku8RMWjwAmS2T7sz5gq7YTNPSvDtd6hUQHvrfu",
  "key12": "2SNyyGqA7vocS219djncm8PzQtcKLaskif2zwGmTCHdFrzjV9R69q5Ua4jRbYb2mDTftoqghVqsdwi8tdiuE1ypF",
  "key13": "5TvGKqtwpW7WiXE5jFST45cWiBGtyGDQK6wfLFx2fva6N9sgB1v9dN2zqkYaNDpYN6EFYJtiF4B4a33Jgodyv5QV",
  "key14": "5KXqmY4szBYB177wdim9Kd44nLmkKJRdjrLJiMdj9vjLoG83R5YjW12fxExGfnLMKdKnUhqqwUZpFmp5uqGgxXE1",
  "key15": "3Pg5NVKun2SmXb49ESUSLYyNs8JYsAGsmdZUURW2Xi58JmrqXkR1V7TQ7WWVPHXBu7VMMbd9hBmem9EcVpTUEzuv",
  "key16": "TYzMhJXd3aSjAREVfHZx3WD5wWMKC62mE8JnWCGybPSMQ3UUzxBFKSVKtzErWiwudcXTEB1NKWu9Dz2GHaDrPNE",
  "key17": "2yWcaDaJN26tKunsycBs7Y8KqvsBkk14bF3J7dFBLcFYt3YjF4T7xeajtyFzaFgWv5y8jsuDW8TgYJwDWefviKzZ",
  "key18": "42sPsFxSqtQmBUqoCSeC1LYRE3pNokGwgRrA6crCCJKpkcwXgQJCWqKHobr81KAGT8qJbnogiiG2kv2SqcuPLh3p",
  "key19": "k7Qs5FpyTg1BXBK9UQpr9CZ6euLJmKBygDrGrZ7LQtfbXSGUf76ZNY8Yvxph81rSzRRTzkeLLjqLJS3jqUyoNdb",
  "key20": "44U2UYjYzFeTAhEb9EJiqrj5ongHZGCsEgY2VzBS4XMZy25Sj6TFkZhTsJP95sa4Lnuwdj4jPXJnvxgjZ7BYwJhS",
  "key21": "3Uz998PA2YerSMgnX5EvqVG2t4FF1wRWySwY7HrB4nZRaeVTB5jvASEZKrhwRuVYpijWvLuQP2W1fD3jb8rjWWJ4",
  "key22": "3nspWi3hMadQtqWBRwFnzW7wQBGG45zkTAZPCVyXBsXNupW8vwXMQNEW8V9z4Q9mqFhBpePjSdD9kNWjxE6gkTxE",
  "key23": "38ojQeHNuBrkcTMiryMsgsuF5par1ZyVGE8pVMVoWM2dLRzRBK39hyVN2zoMmAuWF7BYNqN855MCk7R5UhrBCa1Q",
  "key24": "JTUa4RLCsxnejwUrtFc98XLmFhK6z8NHSXtZoowChPSJ6SZwAZHC5WhjDmdAX6X8u9j2Pdm3hfy3QeAcFSLrw3J",
  "key25": "39S73TVarFdTbWW5HCe1X8k3Q6CwMu3TmA125AGpWdxGscZfCcRaCc6P91aW5pt7vBP5XRheaqk1xi6ZAbxgCror",
  "key26": "wQM24X41iqEFjoKFGWLkx4d2VGcG2hh43YRhv8rj59EPjtKxRGPCDyLBvsuWSxhg5tLqf4qUYkMuspKa9ZFJXwZ"
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
