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
    "3C9rG6mt2VuxfJ5UySddSQ2PbZP1GPYxeLgUxJ7fg6LbdcNuG7RQ25Xb9Cikic7cAiBnC749xHGM6vVgYw44ienh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qSJ1JG4xnyYSw1rUuYLCR8kLGedUQvepmKnwnLCxJsf7nqKjXLk8vM5BhyhZctpKhmg6AZcNdiAxWwJA1xm7BSZ",
  "key1": "4uVGxAicYYnPn26QtMhyeLjtTAqrwzd8oNUvLA5cLtHDDwtNqi2j1Brci3LrMvxuVybxnvKmVNehFRGJFdAguGNU",
  "key2": "3FNgy8BomE5BpjmSoLmk1J5zET9vpxvcbfC7ZnaD3CzfKZtxprFbFVbmq9fecWJpdPBU1rXgdwRo188J72igTNZR",
  "key3": "37kczZocZyQmMLxPpsepSBsvRpkdG8EN3b3EYtMGFULuahhjpiLCjEiDRiVx1NfHcii7JdVsmiP9SCVya91KNiaU",
  "key4": "4bjydSrnat1ATfAoPECZ8ytK6Sv8NZnWV4QC9CQXgyvgJn8F2NEAgR3f1FtLueUizyoRS21ckbyLirF1MpXoGPrs",
  "key5": "4hShoHC3BQwPRqPzkhpexUxmQW55nDj5vDiuvyA633jM2hWU1J1uFXc3kyAAaMYL1g7uEBdz4vJ1TXBj5TjwkRad",
  "key6": "2qkpj4fPG3zSi7HTBaR9v5upDsemRmbxgbCEZhNE8iBwoGtrGHm3Xs2UWe7NaYyRsWPYVQdoGZR8c5sDraxMArYT",
  "key7": "49j1zXknj8sKR24wPfTauxiE5onebtFrqrvWFZopBcmaE3jYFhV6d81cXH8fs67VyLGABQEALnuKXZfWAV51yyKi",
  "key8": "kAWxp8xM8PjS4Y7GwBHw95TNenRA2AC2Ft3kjFP6ApESFCZAuk3dCabXLfqbEpZdFm5qwcntgutxubbi478zYH2",
  "key9": "3VDpNq7uNk5FaN5VKgKjRRSocKjPm9xRQwhMrFX8pi3qQM9cChLLqmpBBqdDm1dQpiRu7jDbAYuAeXV1EvCVfekY",
  "key10": "47ZjnjSvTgqXUNEwZ9ZyjCZ5o7i5752ksT8KdLCwH1Esns3itNXoFaP1LfNa7EHER1JQvxcJCZ3ovyxL1ba6VoF2",
  "key11": "4M71iwNLdFv8bQ1b5ybdppH651UiN6dZQMXL4mQXuy11eoa3KRGb6YGcYgcDg1fZiLV5EiRtGhVh99RZ4ohvPgF5",
  "key12": "5hCH4vwMXJWPXheruSqBKKb5xQaoNKxmPz6gow5VPZXkqSu5AEgZKwwqieztb2uiUvzCjSMy6VH5nHa3qBTD1wSQ",
  "key13": "5A7bkqQboVxjQBUgchHiwAjc3iLfiPjGiAQwfcDkoWcMjAhxcfGeqj6KTkgjY5Admcs5YBUCZu2QoEy8K6Mz4Soh",
  "key14": "5J5CAFsX31181wufK39iYWmRQGKcDqJABsVpfCAs21pZEmWumwzMarozJjvwxaYwa65FBJAb9X5bM2CfFVwQRa1z",
  "key15": "Buy8MiLCDttJ7M78Ni1jLLm2ujmh4V6jyusyvzEaus5zJvUB7yPi6YPSddysHKfG2b4AKPZSZj1jKoZepLM2vFx",
  "key16": "2517R92puU75RY3SUiVu7U83WSfwsEBRpRsYRgRHXmHuMG928eBEQ5aEs7keh14un5nhC3hfJWi3uVztSf6HDpGe",
  "key17": "sXNW8VXYm2wq6zHrLFunUKJbQHkyFziK2daQQncpL6YJJe2VEZ6hMwSYAGNa6yDrXaBCRjWuFaFbWvgdvwyyBw6",
  "key18": "65ESNZ9PBtfgabSADQZSYHFNzKQ4DX4NFwNZ4Vvd5BTWNbrTf718iRWYfUqydBjCgkkroKvarkceMaZjB1u7td8J",
  "key19": "5LJ8bu2YQbWabiKmcMmwdqDLzn4qkRm29kKXxK4QtY9SfarN3SQwPbsint7WmXBaGLWKCgEEHkJNuUFiaUizeVWB",
  "key20": "4Tsqko8rHSDcaoSyFu5FY3zLh4zQhqjuNyNaLkp1tpEbJdzYzZ3osjZYJRDcYWTX92aew5andsLDZopnCZSQsbHH",
  "key21": "61VGxUgA11NbyAX31ey1aNTuv3pdMYRWaCo23GKkrKsLhavjdHscRdvkLfqssMPFNmE6Mpx7s5PcgYrqknN7ffQa",
  "key22": "3ebf8KRp7pRnTWC2gMuRKeH4GCj23SvFXFsxT3Hr8huXbGgJWpF3cbiiGnM3ssUMnk5nciR1EkS9BrDYsZnZTtos",
  "key23": "bkqpkYagG1bBLVHiZKfBRz32ncdpxs6nuuBYJKWZ3YmS9tNe9oTUdaCPaQRuXDUEcNuu3g9KWKErTeymXyo2ffL",
  "key24": "3RxfGaT6YKjqBd8RQZJooGAUpiCcFibFMUkW6YWWvjHHSBpEBxnB96ntCHEvehv9JdHAUCAgFG1XrvojhhrJC273",
  "key25": "4HqwgdXQ2d5dnxGmxaJVM2EkzAxTRVBBpxKsYc8bvAGSa6phndQs5aYTWYzW9ofsczqymiVhdNV3W79Xag2JC8yV",
  "key26": "3npYo7XoVT8tiGgK2rx7VF3kgy7PULg6Sa2X8i1HC2CTAXLUTF4MUDfi2VwZdaG6o7ozuSHHYU5Ut4XxLyGnyMG4"
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
