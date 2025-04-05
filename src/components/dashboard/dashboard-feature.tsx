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
    "2sQNDKFRwbdJRYGimAJWQFPw2D3W99DC9gvtjPVD1G8oTQ6iaNfSGjWnPnkPfaTN4WntdvTYbQvRULFQaKike8Gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFJLsThwmD7Jchc2YTZYnhKzv156LWgXWknpsKNAoypfpYjY1a5AtuR6XuPhnsYQ2GD9CAPSPkJHWKLPD6zfb1P",
  "key1": "5xfYMiACa63X4LrSzSZZ6ngUVhHeTWeZMJqgEhfquBjyo2GtzHLzYHqwSZSXgWganHaWyrSVKL8LtvPSxZdxxqex",
  "key2": "r97zqiDcRGiVHPa1pLWm7ycMXKwnmZLvL4daJtmmN8oRwbDdTLgWh3awi6mADrFg7YbMGyoAq9SmzTFauacDD4P",
  "key3": "oahoiZUFGjyiRzWUJtEP1ZuBuThe2iTQBFFsd7ExQ285Fe7eFJXs1HvZwhthsNTf6xaJgJ7PFrLJwSP7rhKNwdC",
  "key4": "2XtrrjqYSd9zLeqavBzFrUCAj7ioYgY3f7rBDr16LL2CdN8pCMsiF2z2Z2pgppMfCFodQ6ZicWjRwCQfmDCXi7sb",
  "key5": "2mMKV9W61vmFeUT2DWCfQmaHyA8PhwRksfzx8ABz1MtEuxgU29FVDWFyBNikkGnnAMkjypWata2JU3LCKawdQRAP",
  "key6": "3J5A8QeCh1Q6fpWmywvkLVzCwaLWb5fq2i9CXsCDYFEjRxgyj5ZiVjupCkPBiqnGqgtqe1dtxVD9LphtQ9NRabg8",
  "key7": "5kDkuX3ZADoeDjpiEBkJ5VXX2y3hDUTCoZ2FvD9cxZ2hBjYN4puSRGg9K1GaqGdSTuYcaFtpbStTNEnVqpDyGETB",
  "key8": "3HzUjW8HSZtMmWRCqGfbLrYBFykbHhWVJPGncuoyNeMHtb74xqMmFrrqC4x3QiSDPkvenuP9Zp3p2xbeubk1282R",
  "key9": "3HzpG25tF1CGsarJYzGygCGDnv2SMnwiz5ocQyifZBC1jFQzLCpeufstUvZGxQytRmwWMvC8MG4NwcJjAYQiFCVA",
  "key10": "K8e3QSfxKiXtXo1drJMFdmPh8rB5SCX81a69qjQ1aV1LrbBHeUL8zKJELE6UVhTQcuuxxJe1WsQirvd27e4v7CS",
  "key11": "34N6pQox162vP91ELtqZ9uBhGRVeA2xxhpCZbbVrmuDx1va6UjW9u5xw6LUZ3D19JPBczWjgKAcWCBdFFEVHZStR",
  "key12": "3dvRsdjqxMgg45BStiscirFWSbQg4whVfSJfgJRyBqCVuUxmpp4sRvieHtPyzyk9MfVS4wF9w2VsFhgu48jhTX5F",
  "key13": "3QL8EFYfm2KN5PbbgkgXd7X8RveyNZKkU8TXTrMpRFAQjp3BpFwqT3ZDJBQFZSwH9Dq2bpethqDCug1q6CB7TdB5",
  "key14": "APmJeJjYv6CxWtY4PZEwTbt761nuRbm4DRSwJsmCrCkj3oyDBUk61tSdpLfnxBqo5JtpgFMUkCUjZqUjNeeU1xC",
  "key15": "2dCZ3JXAbGysrU75QamDSQoTxCY8x6K6UBWMkQAnPuwUjuft38gsukaCd7LTPj6D5L8rFtbEekF1YmDf4qF1kY5U",
  "key16": "4KrdjEswMJmwpW5XmGXqjQYww2rApPbfDESGECHUGBnDqHZ93rf58c5xJmFyZSs3PnN54jQnuD7g27uQPJRj6Gt3",
  "key17": "2QaSRYAzs38nyaaKANDR7nCuxXWh6mFX2JnPsV2zDUdUBkjgvUKVeDABgeQQj3BNvxVPoQ4TPmK7KxU4aZtDYhzm",
  "key18": "257YefBd2ze3YWJfBEjJUrnLk84GAutyNfJRVbTo1Au7kzKGuqDhrQ8AJuHBX8NAkF9vEXzxzCX82aZExqXVrnd5",
  "key19": "2fxrpZoTpoE4UFGABaPo85E2zVDeE9C1LpTfJi24ufdvpip4o4JPFa6cRLf9Sb1SWqEGcwgCuTxL4Ny4wyyA98Q5",
  "key20": "2cUh6s1TQqgyTVQhs6PKxtNm5wMh2FcvmtdQ5itq9ViF5Np4Mm8JCdkPx1sYphco7pSscZT3dFqzaWdHZdGMvjZV",
  "key21": "4274quHThVZeLCywwXKSBjVqUqt79Ly5fVLD3fRREE17BVKnnPnhPBJS3N6V5osU4XqjzH46AuLT6me7irqf8Ep8",
  "key22": "3NvkAdP2H4YitbFS5R5CJbni7NhchkyfRZYLg6Q66Et5sMyA6AuDDNhHts4QeSk3dnnE2GFm5T61vFvohy9pb6VV",
  "key23": "CJv9URgWdBEyPkhwK5y6cvRSutj5HWrdNTG6MfBPqAMmsQwCiLqefiVWYEZfMiaM2TJkeDgBoVj99MxZ9XGj9yy",
  "key24": "3DyFdyDH4TDkednRtK3535wc2MHv4fXdbo4rD89EWzSZTStJ72hZHiwW7eigtSmgB1wyQrwmTofdjQzhd2GQys2x",
  "key25": "SgmhLsF5nvo74gZU1kaqief3jd77Cwg9LaoWTjNsKZNM1jDGG99e7SFvhyDEraxJn9JZ2a1hobfAeh8miunamoz",
  "key26": "yfxWkqsHJ35NnENnKqxT1VWMqXfGxU3MqYr5LW7r5CCN1XrFykukzphrRKk5G2sFaR6FT4k9vwKcqv7dV6cYF5i"
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
