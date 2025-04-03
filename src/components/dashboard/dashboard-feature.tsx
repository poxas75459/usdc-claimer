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
    "3LMzG5mjShNLYJYiqEat1Vu8gDiuNiooJafhcijMuGhyPmfmexTPdCt6DPUXspTsXKwCjfUk1QtXf8CcjFDmbzmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ogi1tVX2xebty1jTTwYmQzufKcMVbRiAwPwa8xfW5LcSLbFUR6TjARvTBvqcFjz1ewm7rPZyX63vnbAQWVWvuG",
  "key1": "2jPuEcCqDuTLj4WDnAFoNkZYzCPgCRWrPhP9vaTYk9nwnbBg5vk2sAnQ8RnyT53VUmAaJgkPU6HJ912RAkN19HMA",
  "key2": "4zFC9J162MseHbng2U3Kos1F1QN6xZBNb875uaNTtQMWwVLFyFTMB6gEVrUhERRzUyZY5eM2XLwJyXnDjcSXGt1G",
  "key3": "2tTThSebrY6dtQRoodazZU9tTm2FBKM2sp6tDaY3FvsWrG2D4LP8Mww8Ucc4XnZ1Hg73BM1sfUVuDigdw6gjNkxt",
  "key4": "4Nea8UYYtQRDTPjsGxx7BafGb34usv9qAPjWQQm1i6DYK6yya3GXptuPP4Zf6kotMFiNF4VG6PK9ASqT8f7QJooe",
  "key5": "5aCN5fyZRSsnhM9d5jYfUgDv5bYixJfgvXRUmyjDXyh6yUv9TGknwx54CmFPr35wdYskkjancGE3XDU7SFNT2Hd9",
  "key6": "4yAbLQtYRyAodXSFsgvPqUaApKW2hZQJH5tbXzFuJ5EhoX1uWXjcekpdjP2dCQcc7NjrY2tHP6tvxc88kMQCeY7D",
  "key7": "4k8mSCJsdRLShvLPQdhZfxeFPbxfXLhsomdNvj6jJWRM1usG8BWW1LDuKoRmcJGo7KFhbkTsHckpYWGWPbPDtFtx",
  "key8": "25Nn9ym5FcDovDTXa3q7K4faooij4oMjTou5s67oM3syTYUUA27Bn8NB9ALESFgetg4et7fq27L3vx8iVz26srRb",
  "key9": "4XWhy3HXTjoFn28JBuKPubHTNoP2rqdUqEn7uKxPihM1VfDKuMfkrhSDAKwmmT5K8JSrgkUvhmGqPSQuQKS7UqBM",
  "key10": "3KmrP3YCVQ98VopbDg92VDyWHA1yNMdSpVbaHcGWFGcn9E6c8CgBhkxUH99CKGU4eW3nWd7HWLFizNha3fpqeGS",
  "key11": "onjMEpzTE8gDV9wKLkVDs5bXPVNksTQae1YRrLReMRqf9CPVAV9yyeoKbHxhiUWQcugkvrq8niTz2tmRtRqyijJ",
  "key12": "2GkLErDHpU1Fu5PVEWANcbQdPhG4tkLf2eHLKjxeDrRxo6DwATrDQ4Z8hnBYSi6aohPkZ9qa1CRPiHnt7J7h2jU3",
  "key13": "jKr5ievkA29tR5AvgHeA3AoG26Zwxzha1YcZhkv3mgyVYyfywCfWEyTUZtgFSCcodRD12nkok2xfDmCAmiWY8wp",
  "key14": "4LRvDd7GFeaB3BjmgUdDtgdWJb7EUA4nfcmx8x6zxDT5np7UF7fzBBxiQr23r9nux6is4GWo36J6NWWxYQLpkNCP",
  "key15": "3fMtAyK7vbXmYpgiNfVMN5tJdwWc5FXHBazhL1tTGzw1371GZFTCMVHyt6BjUnjXma1NxvGcB8Rm6SFNDJmP66Ez",
  "key16": "2jNgf1uxyecu6kkKaS5TXqJ5QRHzAzVDotwVjajCA8ryYz1ZW8chU1p1N5ezXSWtkwZQdTgpoGWRUVKLyVioTw5Q",
  "key17": "27tZTWCb7ret7aHqrZ6swTkMn548ggQGZamPtPY4L9QWSKHro8NWaYTzYgJGuDyNYnBwHFGH6aKUs4TM4nPjdncV",
  "key18": "5wpvUWSVrSWDyzeAVKqbKMhE76xWYDeRHahMtERjaSPze6mtboRUdd73XjpSDrJnGW9ubJnbgSRSAdDzEPsE98rp",
  "key19": "294WYgZMAAdXLQgYk4rZkaRNvNjQKw8gfwVQvwm5vpeEZsKJvwmm8YPHKL2KG8yUPqPYBh1VWox9GPVzWz3ApBsx",
  "key20": "3XKs5BEFXxC3LEdtysKi7JVhiihFsLpkZBj4EXH6DgAg42wfzmDRyfVX6vARQTQdNAFXuBzt6BtGH95j5JqpvoYY",
  "key21": "3Zs7aVkdYdmHuwjQASJXgbycHPp8hHcswd45FSmHp2wMPaE3EAS9k7akMs81qtCFYJj1pf7FXAPdV5FuRXb5vjUA",
  "key22": "3gaBr4fTMbCtwjdPCiJNVqpUUgG1JBDQoW9WdaaHqmKBpDwQHtiBo2mkxE4HtiW2rNpK8qpAxdVXfEnNjS398Fxu",
  "key23": "4GS4sEbAt8Lar9Dh6bxAnhMpiS5pyFsCW91DzegTWpUGyEXkXyQpjTsLzJeoCdF64xYy7nsK9Hhvq56t57Rc1wNn",
  "key24": "4Q739VAcbtPGnSrmVvum97PYopn8P9GzXnTYkphsVDhhj5hEC38P3T8CbJLR69U7V5CgZWPBRrDq57oGYLTzQ9PV",
  "key25": "KEs1edYfj14QTd78keKUpryuf6XrRjVY2feSk1gAbiUMR3tey4ygNDBFDJvQtv85hTBPb2N2Jf9b85MysKNFbmp",
  "key26": "3Pxs7Mu3FAFKTscowjLmrjwyzPiehunMQq6QH9E8nFToaurDpLj9YYGkWY5NJPhaGeViv2qzMWVjLUrKkqMyWvdv",
  "key27": "F4T8KD3iRob6BfpZeyhiVAeF9h6QU48pkpTHBP91U9FqqKHdT2igZ49oFmC2yefT2Kk1a6ZRFVPT9k6jc47NNcu",
  "key28": "2dGmFTk9wsowEJN6WR1FJ7DjKpqqegsfCBCw3zmkxHpkKoquwbkPL8kUmtrQS6M8CqFWXm17MtN3SC1LC5BFVV8G",
  "key29": "5PdtjByCotw6rGwAtxSmWWNo4VptQnvMXXyxVXjFkjR4TxeYeXjYpkadCYfSR5PnarhXQobwsfKyEEWsszzKxXto",
  "key30": "66dCDXrzvbTJ6kfwdnLs8Qpg5DPik33yPouuqsqM7hrQdk7AKURukQTaKCoQbAU61jhGhKvhTe2kuhyt4vHFyugD",
  "key31": "3yKwYWTvBH3NnSZaXkgBFcTdnwUJefhrosTcYr1223EYUWwwt7EtDdK7EWrX3mvNWfnzopSsyib2iAWSvC1Yv33j",
  "key32": "AEdAZSGLfEvqHrVP2DHuMGqp1iUVF4Xh9JuUMR52Afo1qAbapYaG4b8wF5RfnhDFR6C5u3KFJaG7qCUbQbBd15p",
  "key33": "4C1jpF6YmrsNwo3ubbSwCZLrAikZG7XZeLsapP5UebHkm6YGWrcrd4a3tpBBURw2e7WG3XPyeXjEJAB6WTk5Lrhz",
  "key34": "ZFrP341Uw2Gm2yjdyAJ8a8d3kiAyw4vPvytU9jKabt7E6UEjws9HU7KTUxXNgDJP4zJzuvFZJdBC2aRV32GEv3x",
  "key35": "5g4RR8xGZYJ3uRnBYz2ivdsYkd3UNjNxJa6FZLtwbmrMx6hNKc5h9H8Yf8hieDd1eDoHC6Te1iLH6pPtPCgzD1Wr",
  "key36": "2dRQ5qi338pJcY1XS9NTtjCxW2gBww7Z66rXRkomncwjXdqS2X7hMMUxWJcbGx5Lwu44UBdt3hh2X5apJUH6fXyR",
  "key37": "2M5rQQTwex2RvG5FVmDEA8aE6bCUhicAeqvPgknhahn7fyKGGbJpQBX4QnRCTuBoStNXbYJ99iZHG3LwCcWV2PeC",
  "key38": "5LPEkYLXYEyvv4bNA9JuHwW7Q2mnMr7ijA2XwJHuT6hXRyprQ55zxTCTTWtN1Ci1fDkCVH9PvsWf8s5T3iMzT2vA",
  "key39": "3LwBy2VNtvTK5yFnhLoPjeCRuB3YaT62ZxVhSn8zXRN2UyA6dUk5Uy6mrSxRr2BqA6Ssis9dmN2aE9EF2YbPEEYk"
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
