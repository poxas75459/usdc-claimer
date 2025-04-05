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
    "2QMrdyq7tezyY3fF5C3jVbPaqUJqLryhVukqAKe3yMAExQz621VoKBJqQvPMEg1L43ZjkjyBhoayKiWFmnwgwtak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WAzxjvDUxRdVPyJq8wngZjVD2oqYiMPPht6SrYkj7eFPgrsdNXH7v46xsMRKjCNprSScHnEyFUHFkoGd6D9fXt5",
  "key1": "HaTmxESRPBZR8H3v7hUBgwrwgajaEeu2vw5hGZMN9kn5e1yGSYVfeopZP9cuL12wwprVNY2jc78A5WxSHjU9FSt",
  "key2": "3BC3pqC9B8dAoYFP5VSEVkz9bZpdBDrhPjnUiWkX22JY5d2uLqXhT4Dpd3SmRhohctSs5KtML3UzFGccrZWZNiPe",
  "key3": "56MjgmTUGYPmk29kfpH1GEYzNv5RxupfNvLUkQnT5VxnqQsi1qFRXbNTuT1fpR3NgsbzytoqD4A8LCR7coPZo7Vg",
  "key4": "2UUVQNNxaY5zpG3YA69qmJtEQdpXvw4nKp6Q3o3YxFxBC57pLpPqz2ErxF4gybGL3861EDvMHkywnwzrZM8dM2iT",
  "key5": "328PGYQhm91cepo6uXkmLHqbuVNRwvFoPQwsjc9NxdjT3RsrD1TdgJqNShL5uLqT2VWQBtLwDCSAMUVXx5F2MR19",
  "key6": "3Ewsxdb8Qr1gvTFo6zhNG3qLFZC2a7fWJJ1Ubr7z9MsQp1HJjFU3a6J9kVQHnYJ47gsLsti6riDxy1ERxahCy7Ay",
  "key7": "4zK6N4LY5EfvGyLD3NymmTCbvCqk2Fda2bYvu4a6N3funzpKtRDYkAqZ1kgWSQxQiwugJTLPAAWAQZEjVrHbZrg5",
  "key8": "2VTJaG7Rv2GMeQHvpBzVvUoPHwqEx4GE2X5AkcfeWvQdBBokkQxWkAM4e36XpjCQjCwpk6CVgKusJRZF8aY71EDx",
  "key9": "3EmLnNiubWFfZv18urd7dF4L3RkeNBLMGkXHJvihCxs263gRnsKbz443yY79o3AJCAFJECMAyiGWNZ4tpRaoTpDJ",
  "key10": "zn3PkRhw3mrQbpLmeJiRMy4U9o6DvXhQKRwKWJshkcQNnc9DH6wyc7HMoTWBzFKy8KbJpaCa9WptqZH6BueDh1a",
  "key11": "3AWFTEhvTGJr9U2LCgfNyMZjA8BtoH5JzCfvorsUStw63qVwz4HdEo6aCp1nzrckMHv9onxRXib7VGw4JCfxzSh",
  "key12": "3znGVsyqNe2tnZU3z4iCRpQsxCKc5oWvctrmR5xGJ9WEXwh5id5Z2vAG6d2AXBqxpc39XL2xujsncsvgr2jgBYpt",
  "key13": "3drF1ieQsiz4wnrcS75gWgwNn7RtLZ3DHNiejoVHoe41uUJTk5TdQYgv9XRUgW7onYmgjWDWL6PA2UxPgWbgQdxF",
  "key14": "5AAwTzRRzgC9JYL2kAkgpoFrKVPBBczCjH9aEP8i5im15P1ustSySLmh6y1F2h6KHnpc7SZto7qHdvN7QwBKZGrE",
  "key15": "3RYK3PynAZe1cEkdhFo9nvW124aZNRaczu95uT4S8f47avBGnuN5ikz6mEFiptcArjn8Ys4S1ms9FYo7Y8XkUJTf",
  "key16": "5hFAkUM2gu2NjDRXJTe3xHLAhVGDcyvUBQJLyTu1PDLM9SCMwqDQTX5skWYi18zsbrreRmpxiamuRkQJQvZ6K2Gx",
  "key17": "63S9shrEWcZS27u67ykDNyycKKMJwa4t7iSPM8ENiv5aZzywedD86G3PpahmuNMt7o6mXUGix5zn9RVx6DCRd8GQ",
  "key18": "4yC2E63AYvzhZ37jr8aMzUMoDC8fzWTkmpeByKDb2yoCacy2qxQTa9LN8Fw5dwgt6dnsFLvfD5zqFTgcHoedqoJ3",
  "key19": "4xTJT5iH7dRzT2S1KCGqT5Q2FDYaoeMW6Z8a4kEmfogheAvM75izEMbkXLhbW8M66UNwVn9nzUDyWuRnxNrDHCu",
  "key20": "2WDkHPmufe9eigDqU5r1TvP3dKW6xJAck6ovmZe9fMhP23VZawAeDF9iVTgymfCyVjeB7z8cWav42gqoBgpsS3uw",
  "key21": "njXDY6xatpFeo51pFQGNLYX6ZihJfas2Gf8Zk6svqWFeK5kcaitEAMPPf5emEkWJUpavrCd2wnauPiEShNqPxvm",
  "key22": "CuXb3Ww7Wyv3gxDBxUA1Hr7HsHsCsZPBaAmhtP4jxsj8KppwwshFEMGQ5A4xuLdAhqi7mxa6NPvZNdDskwcQS96",
  "key23": "4wmS9h1zYZPBaVMHNM1hA1wSbrFjVAy1mboJvcsr3zRLfaXcQqDTnsQCQL7XsWDx8h3moZijd4CUjLNCH9sSrwMZ",
  "key24": "4aRxxw9HnV2ahgryCbBzUn2kRWsgxjNsN5yXehqrnRqozQHGfeqBf23KZGfnUeZnja7JTEAnpDcSVcVCFkXNUrAY",
  "key25": "3etxhLxXPnTU34go6XkxGBJokT1gfVVr8o5AvBSaowNWWAPFoxnmw7fmJfEfQXc1n1jBGjqxSoEuhe9Lei5ZANkg",
  "key26": "sFasr9WMN42AgyE7wQ3Z44Jz1NSQZ1rnLMHECiKUVkuHT4x6BVo7wP9BqpF2jdJZKMSvzmpZWrfNT7YAzViEvKs",
  "key27": "2f5nfbitFGd9JrsNtu8MUSgNgbvQ8Lu3MUsWdwfWJV5DW6o3CLTFDNnxLogFepBFCgDj8aPHHgPc4Jk4R3b4CFv2",
  "key28": "ZxP4A2BBdrKpaqVAxinqmL6QimYqkBzUv19ozLDj9JTiwnk552E4WTpunVGAYj3N7Jw6mx9KZq84fWvSngjQRGZ",
  "key29": "4G9fpSR4qJryDsQdD5BYDSRi6Z1D5bGZvRVkdyD4C1HPP8zgn13Cf6puRX2Hgyrn5q6FW9F76oHFUQ655KyeasLL",
  "key30": "3Y8HG3gxM619XCoMgoDcn5AiKhQ1p8VUAHoYJxE7D3Mx7EjSMf2toHY16SLUXiCkRgAkBYBVcpApLjbdtWtca5J9",
  "key31": "3q9FM4Qky63ehXxkzbC1RfYwT8XbMBRR57KWPKAzwZLh5xPY33sMkvvPVPhJdXkhs3M39kEesu8sjbawrmuvd5Pt",
  "key32": "pe16QaeH76xbWyBxwEYCgeG23ppxYfCf7RmhMZ3V3WH5vuAr8C9otFWrdqeyZ5zH42fDpGG3mw1PAEwpYDw2z3Y",
  "key33": "CHnSwEWDh59WcuGfgAEAA7YnF4T6jgkPXZksLjGWYYxssq2ssQLPoKSM3aWvVGcDJHJqPv1csYc481zhKYVMHwu",
  "key34": "2zc8S9TbTjWFjKGJXpkmt2rXsfNFGgRVcM1qiQzx3ZrB1jmp9BLJni52Mvf65mvvnDKjYnGGqZxyBsFF34fjcr2x",
  "key35": "GiqeBj9v4B9jTYhPxkvyqP54ogGTns3LQztnJ5Jhbywa66NjpLn1aAX97a8MjX37YxRakBBmSV3STa1fzxszdDT",
  "key36": "5bLW1VJheEEW94HjH9WfQGWuRDR4SogJ8WzXQmVy7qsor42bizJKiziqoYKL4VmmX1rKMYe4syUwYhoksgTaejBV"
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
