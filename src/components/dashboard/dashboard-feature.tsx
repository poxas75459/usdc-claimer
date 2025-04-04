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
    "3NztxjoY8Yq8CqGtPD4f7wUB6L8EJLVYwHNb4KUNgTEgcSagm93vCGxeD4o1zCVM9VNVXaTSZWh2F3sNFcenibXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zv4AXxUEP7fZKVoQbrEdqomgJGRoE4YmmQmKSuRNpzM6x66pHV83xxPLfg4HWB2xRAU2J1bia2qXg7yspxt77nU",
  "key1": "2K7iE2rEY198uALRNhB5JkfsHPLrjUUGqnrRU7q2UfyMr4ujuYhNsrMMx2uxNMbuJ3o2bCxRn5Pgx7vSag4kKsiD",
  "key2": "HM2q4j98zNrL54idFY1V5a8PBLBRdoaXZPnZhNbzDsznh9HFG8324ixto5rQ4SPVsGeooCBWnAMVTdKs1Sq218A",
  "key3": "5TaNcdRsJxTFigsQKAz7rV5krJYVLqkZsBZfcDkNc1KwRyyns4E55BTCfShb8vSRo9NuCMfmNeRhkurghkJsPKEV",
  "key4": "3XyTutQCQ5qVWtLDoi9MqxbPJXSd8R7tVjuxLZmrefzRuNEmZvZZF9YkBW2LWB9ceqzki4KaznCw4qWnFJ4AcFZL",
  "key5": "4LtSove8SyDQf2cHk6LWu7vfrNzEgbxUJAo3UTKsXqXAFSYe3PAwrQotSn6NQsKdRu2gF16gJqEjyBXYyoNwXX8Y",
  "key6": "4cpSnmWRGkTPuywqVEnZT8eLptKVqjzixy8CXFxBnfMFjbbX941vEtAvKL5DrGyNwXSsbuZR2ZSUuHhCQqTzrL1f",
  "key7": "25yDuUhvzgMJy5tfmnbpMm2AMcUjkeWqdrEYtMEzBDwhGWv9DggvLBrxeqydmCrfBj5QMrzDfXE1NPQrdaFGVYcB",
  "key8": "669XMTMFHybKzAakLZzfMUW43w5e4DJw4NJJCUFjqdSs4Xy5xanG3JFZ5GG2K3e5HowUYHQGvA3m7Qth9ueEPP25",
  "key9": "4J5CHNuLjjDa6NZ143nfsdF8DnS9ZDTuZmr9PqS3BM14XZPWZaddvWVR6KW7dZcVbpjLU8SPRWeUZZRK9xWHWhkh",
  "key10": "3cEUX1HGRxejLTXGpJ3q3WrEz1YN1ydcDRTYa3NgsBGwesgY78uCRdb73KJBsS88y39QbqvnonGM3EUq6pu7ZbUD",
  "key11": "4ckUytnEgUw72P3437GfBTQNWe2YA3Wy3LxbnoLmAsfczN6R9U8EUSySkkPtDNyX73qY6NjjUtWRgPAvZEajtSCv",
  "key12": "endTTbFvJnpveVav2EZ8cfqywdJtuU2PDZjZN5E4vmVsy5qEwQsCZu656rs3GENDZWWGPSiJ1MYtSf8mLXAYBMM",
  "key13": "5M7MLXJ1VHsp84gQhDpyo6JouTgFeMbXBTHp5DdeKswkryHboFa7qbw6KH66VshoYm5GBTcdDG5DMw9hGzeckZWk",
  "key14": "2XQCDipP6HSJMW4DQ4fFAzKksid1wV7srzFaYGNUZvqvgB7CypSv1YACb7UgRp49XgNGEYb6PQp3DzHBu29RysBc",
  "key15": "3USMWj7nZpCDR4k9xcu2yBgqXxCKqe2qAVykJUnPahZUgcTVtxzWQiNZU4dvMd93dgkyswfea2aME4ghjfDL1u95",
  "key16": "rEhAjpybKRgfwHQnSLnp1Lnzd7AzDsGWrkUKw2vMJaDW2REDhzuJVcYfcGW29hukas59tqxdUPbR2uNwKaVb5B6",
  "key17": "2vJM8et4RMzVEYSjZB4e29yRXtReLHSy9d9YZtkc4hufBfwbajRg7RnwAcPsaAfgwPW3We3cc7p8dDjc91Ge7CcD",
  "key18": "2TEFojmMezGzn9gruqayun8WWgkNVYSAZMvAms9NGYqDA2tzYYwaa4p1gTVeh7YLEBVap32wfyHMdZS9ZbgPNJxW",
  "key19": "6gJ8JMZB5ZvGJoZgXTw47W2KAtS9HWHL7vdnpedfnm568NDwQrTYQPUZB8rB5dghmBqvJozzzySw4iUHv5j5Y1v",
  "key20": "5tH3FJAMmKi3ugBNLoBu5HEZunAxYn5QXA7osB1a9Zru3oPvDhqpkFgLgpB3bqnvtckUR8dTTxLzmGYGpiyZADRg",
  "key21": "MRtRy8BwcPBREWQRtAXgMrQjqMK4y9S4Lmemje9QupHQGSCTidoMwspiuQecPrj5Dbra4LdDgKFVP2gzBN3GmZC",
  "key22": "2PABLsPQBGamEUttWyWGDXeA5dFGMjuUSv1CNYP6ZHyihw7uyCbviweBLw6TG1yC1C9KDSQm3EsZbUpXCrzpsdKg",
  "key23": "2z4grWW9iTVC4w73Ajanst9a1mmeZvk9yYGU6RPM7zyQbaBxK53ggTQpstc6PGXa7qHSSCfRpWzRdq4d7zRc6atk",
  "key24": "4W6Xa8Jg8c7RGWejQgWHaZbykzpxYiqPbaE4ibWrkrk3RJy9QsbzWWDtqUfnF3zgV23kUXqQVeikCwqMTxNTikVt",
  "key25": "TNjobc9DNigVHu7yAmCCYKeypNWQoAthsXho8R59B3J5HqMcyEvtRfUUE5GUM9JdCP5hTXooVj3SihXi1cpGwfo",
  "key26": "4M4fEPGbCeXADqPTx1QUntSGWHRixj5eVsmhXLmuovu23QFckt34rwUXWXmpLjok4MhUkxCfA8AcE9y1VUasicuf",
  "key27": "2r5UNgYQCoKt8WXiBfM2THz1HtWc7CoDCFo734CS4f6vwaHM1NzQnnY9xwT8UyNhZ7vCUL7VeAj2anwD88fcspgK",
  "key28": "5C2po113fFKsQajcs251Sii7B67aua88KMyFVmaarp9vwWSvbyHbYAmqr1CmGGYgoN8qKbZ8FPq25tpsnVcf4QJD",
  "key29": "2J5XKYJ76hGoy25oEsLkZCbbPE5vkYiK4PjtWtn7D5WwimqSRt1tzSr68d8MFjBqW9Mqpqs72vSqjDBWCPyEjn6k",
  "key30": "PhebPbodoFRaQ4AYBModHByGMcrkNWYNzX77q7MUL84ez5yMhxqgzrd7rac2RiRzkg6NMb13wxH8HSmDWPvn9ai"
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
