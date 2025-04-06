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
    "kK6BTcrwYEBvX5fb2LRskpDkQ8gAAiLTwAotoemwrV4GDBRaAcHVE6Q9eKjhn31tLX7a4ZVh5fDoSy2jWDDusTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253BnBEP4dmrE73fnDRiVbBL8pjRuMWpsSeEtuADHb3N6tuSeos1WGHVnawGpvDgDDQmBepJUSnMLHFXE5Z7rQtB",
  "key1": "H49eihynTKMTjRzFGA1zGfKBgVHLxdWvyjzhhHp2yptMXjJi6knHXkPHaCrFVU9NGa4GPY1TTVBJvmNp44rA5xb",
  "key2": "4XyD8tmZzsPMnqkELdJ35yHAbUQQiYVqCdACZpefMTmFRybQBbZPL6K2vkcSqAvPnAcKXZ5Ss7o4UoJKjZY6LPyM",
  "key3": "T7c5qZCjjRg9jGxN64FDaJtUEC7CboKh4E6fdhjQdfUJEGdcsLc7f6D8upSnzuLnVpxkiZCApZswr2ddbQ6XeFD",
  "key4": "2sf8tstKjXg3aLrjXUf3NfjDb3YRejsE4HTTyGTvcXTpGgHzPsowiHMW2idXaETLUvXG8k4axZCfCG9rZrTMsVhP",
  "key5": "ZqFXwktagEDLCjcdBogmV6NgzKG4ikEgzGuEZTLpSetJXxKuTdLY6hwP48ojTNbmCqMVm7M5nukELQc2ML7zKMm",
  "key6": "81M9fX1K15P5KTM13DfydCHJ5udoX6jjAR9B6GGFDTNUdEbxpbkFudpNDi9MsCqsuPcwSGcoWrTPk7FTcpv5GNv",
  "key7": "3m95YZjWtqcdzaQiDNtCSDhHv2nteH7xqYfLPRU4Pjq8gNkLtss7hvoj9KMdKt1b4Cw7idZCALzmyU6KKzx1DmDC",
  "key8": "3qhj4qJjmqvgj4923BfpB1oEHrF8WQdGGc7Ve2vGbVkp3EoQNkBkMv4XFupKzxYQRnk1hbyXyXE3sPTRuZX4XCC7",
  "key9": "2zY8jngQWH2aQa2AfakfkyyceJag1vKcPUfEKCaYnKbKsmJM8Hq1MfXpzebpGb31yEduhiAwdbZGRMFJ692Q6iW",
  "key10": "42K5XPAsycRPAwqFs2QerrHoj39KGcWkCNQfaFWXGGgqpcYZkay85rqQBoWsHj9jqYfAKMHjEvXcztpaHQdJEegs",
  "key11": "ukddWVCcfNVDe57jur7tFif12ZwTFg1EAc2dR4sv5TqmkzrrJrT12VD39yxJqAaY9L1UVTsxk1TxLmEqF8ShQNn",
  "key12": "5vrUWW88fUxmZqMqZiJnVjV8XJbigGyUdbBX8V1LBp9SekJgtLdW3NEdtfmjXragSFQCWBzcYjWkUTh5CGJk1kG9",
  "key13": "5Y4MhQ1J26njGf1TtS6XqYBWAYverhmknwtZ5XFhTsuL21M1QK6MaLD7un38rAeHnf4sBoWEpbqkaagAt88h8jXY",
  "key14": "RhRZkghHc6cigdnPhoSGerKxP648EDzjauj2g9cADU7MFbZB6p32ESiDqxbeQcwSspGcaYWKuhi4hNxsLWeJ7Wz",
  "key15": "ftRXJDfUQWvawTvFaa4ExuAGATUoRPRwPY1yFoRiB37veToGxHdTTbquRAnLZmBCMALQ1qT596gszCQTL4xqRJK",
  "key16": "3Y75Xz4bTVJwsJHiLGhEiKCg9pPQFTBJvSBs2VtdJC7uE9hZvXYsRJquqaKS4zW28nL4DsZsi86eAwTtYx7GzZGr",
  "key17": "3uaHbwuq7UjBqT6FHJXeQmhvTcxHMFh2QGsi8z6fm5KKESoqbdHD2ryXanDQkZmBzCxZw4Z5ys7LdPasZDsoQPdw",
  "key18": "QpyrfvrCcgZWEGp8S8PKqEWGsRDB2HN5ne8Z5UaCx7hKaZXKBUWyVKmFHJsaQujrG3A4Lh9L1ctHBkrw7BaZB2s",
  "key19": "5qyoQ1Ji92T7M2ZpkTH8hkTetjzhRrwij5JqThrB8FWRZHSZwuPCkFHHnbSP8Sb8ZmGx1crzacHWnyhVJ4c9qwx3",
  "key20": "3rVimA5BQMHwQ8pUFgWb9p8a8badUSn9zULnsWQmV4ptebJVZrdCgSC3GnC8xoKHc9NP67JCDBSHpNfiWsAdPRWg",
  "key21": "3uHJ2WWvGgJFFoPjy6Ej3vNaz51Ge71kTeAYnDjQmwiyZc7nviGQu7kkpd8jeR15eVhViTCTiziAH2jDKsQ7iCHk",
  "key22": "3JhPvbGQh3NVV4mS5pV1MEykzJt4bockTm2RgWZ9937DPBSpMmveNsoLzWLwsSrdFJgn2i9SRrLAALHybDcEYtDY",
  "key23": "3pNHfqgqvmGztzmvGxh2zLqpnZDK7zB6Qs8QWQR5hnmW6mg7QnMSREgodM9oN9RF2rjzQyQbs6pHD1MLgKRSuPFC",
  "key24": "35coQC19eeyqfFXFugmQNVBNZeXpFqhHa1NvxRhcE7761wipz4JTqFtG5L8qZimZbmcaf2BiDq98WRXwMuQoav3S",
  "key25": "3Gm8tSLT8AfDqT9HSSZkT8nZCwZ9PPeBSi6QzWUsH5VxmkdxtjiD169cGfdp2RZvogKYvMSQgkP7pmBVeqgFDm18",
  "key26": "5RJkMYqsPYB2LfEc27MvoCxPnxbc9BekHafRTbhq2i9qQcqMnL1VEzwrXjD7Mk89jcCRSuJkDTKWtkzKmtZTPrXu",
  "key27": "4JW8EkiZdTs6zYw1txgiDUydKQdGiAFHTeLhhVvmUGRhoWGk5HUjCQidm4jLL1mpwAys5R1hmptuMMXrdzdREEo",
  "key28": "4F1AoJHCJQwiTbjKujyFsWEW8B6zDZStmmc1vvVvZJhy5k7CPN8xndqLouji4HQMcfFmG3H57PpZku4GtH1VtEx7",
  "key29": "4pj7GjtfcUKy4y3XJK5rfT5GmkKkcvrsHR3AJyNp2iDow5FNjKeAUMV1N8fhYb1stsbJoQK4UrsZUYQo2X2AixSh",
  "key30": "3yQ6HrjB6iRgmLR9sYYpCvWAhduAfPiqCZodNjka1fN7xk8fDjFSRioZ27nRD4VU9BVA4onbw2sCVL2fEwaL28ja",
  "key31": "4r6ewBt1NSmCcaZSYJK2BuDiZ8XyHw71Xveurkp6FMDAk9ws1b6a1FsT7PmnhJZxkV5DY93nU3YTC98w2CzFTQqQ",
  "key32": "5PeWgo5Tvqx2kJiVtfsQX4VzdASKfRNYCLvhmfDFwgyrQ4LwUY93E5XtnLgAqh9G6dgo9QDuLu1dqWtrVQEuTfDo",
  "key33": "2FrURvwqsL1tjjsGACfbKNF6BupguF4gX7w4EmgHvWCFLxxCE8yjiaKgLNPTjm1MRkTbcr44pyZM3CeieYPWXyRH",
  "key34": "2AHVgt4ahk3RzMCMzZjnombk9kLRqC2aUCAski4pcVvzc7N94abfAdLKrpeawtKktZAuqACradAjVszE9Nw8HoBW",
  "key35": "5SxsN4HsD1AiDMiShrQPYC3ffphMKGspQjeo2gBmtDyGvimJ3ejgjnUX9GSY6B5nWXMtHQQYN2yLfFz6otNmhcPG",
  "key36": "5jZLKxmXybgxjhdEq2Jf892XDx4bGU1syNShmxfW1PjaX6hQp2udJ7NDvcTGHjfz73LFH1y2wqhbJEmdPefrV3gb"
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
