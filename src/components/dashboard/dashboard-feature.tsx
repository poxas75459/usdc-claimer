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
    "2iz78bkXwHbBWa94Y7qdTroJFiieugMdKdzw6tBZkbwwn8PzUNiXns3icjttQfNC2RdUn4vT8QEb5QXwc9dYBCjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UppxXPFMho64YZmxgJ3mcGi9XCWMvGX3k5HL1Bq6BaoWLTeDfbx8WmZVmLjv6m4HQLZ1Cc9bU79pupz6Qbf8nPz",
  "key1": "2L6nLnqGjExK1D4BhjMrCMwB5zLsSvvc7uhKdASj8t2kixmx11Fm6XbvHPhT3225jbxmkMiazFnbogyi3LWREjcy",
  "key2": "3UbcbNfdGR9T8vesSd1iL2rRW35kMn8TUtZjDcUYjkPPim4HNqcfZBTGheKySw6tsXbFxKwbYoXJXKwTLKwrHBop",
  "key3": "3WEjt97isaEKVM8fTNfEWt2syFAbzKE7ppE5GLUi9qsabDS7UpsiWZ4PtfEgtfMLDgXwN1agYStNnNZxhmQD5bDy",
  "key4": "Qn3idfj5UFcRdxR6PwCTQtzW9GqkHuTXLYT1dq8bab8ixwWuWNAYPzfHDshAN2wjDFo1US1g2rjsvTEVxdPjWoi",
  "key5": "2jrRTpZcWUZvZjzWbr487qYoU1gc2xnv8jTLy26gPe9D2mZ57RUGSsBBZoqQ1JDkR6o2vCgWUAk8ZwrwdRESy8Lq",
  "key6": "37fUaBHN2KxHHXwLCWtpmJMz7jpbf9iNkSh3HDfRbX7V7MXZ4JepksYwpwKYQUyDJQ78cSdEWZ7jCYjXo8RT6VX7",
  "key7": "5fcMM7JsUPJo8aKaPdrYb2AEeeSEGTXiFTs4EBo2wCF88f5251ZWbo1kiVtxnFuNXd8RK7KwNZysvQMf33QadJDf",
  "key8": "2fia3xrfamvoBLJDoCwquw9CCag71QvFurZhXY9oovE5qZPKfLTEJZGhnhhjbPx5ZhJdvKvf33Srcyt19pzvRoTG",
  "key9": "3DBVqUUUhKQxQYi7MLzPp7ofvE9nn6Uzcx6dZy4XcfNgaV4uNjLWTxUBinTmVEwCjxJhFWKfzFBewcEiVFSraw3f",
  "key10": "x2aURVPg8HrtKhEV1NRxufgZbeq2QTKQCGpaevW7NrD8Fk8HSivEKmPT3QdpgHy36ptBrVkDfjHTXqTyrT7vHVa",
  "key11": "2rSw11sV1Jg346ksC96EkUgSeack9R5W91jigqPAHazCztcKpmGq25UDXuqTA3ZY7uSxHJmrCSMCavrrsLZhPun9",
  "key12": "34CipLF38b2VaovSA9Aa7vX3wcD8Nr986ikfK1r4pjUZ5uKvksQXoMRj9Qcs6BRoKkDZMhRY1hYY5wf8GFnmNg4z",
  "key13": "6g7QCQZwznkJNrfyxXmZWcaJUytRRVq8eFbhqceH9RDTxeu5eUoQxQKcXKUo94b6VJZaj2V8TKUGQbwxkspMA2z",
  "key14": "3udS467uVNzwTnCGRyVTeecxgXZrxwRXmPSgphBFSvdJXbdk9JndVCVgRrWhhFpG16evT8NyZYRhvpwBrdydF1eg",
  "key15": "3aTpS4B4ADEY6P3hweH4nnjyn1mhXxBkJ5852XYyvaTQhZGMEfzftXYBiu71ndwevcD3UoQjjojNHdC4kBFJjivw",
  "key16": "26t2BCfdc2s1NrnX1gUPRyNAMaP4NDx51YJSWHxHXjnnShHjsaXmEdsiyijwCX1G7eyFABeNbuUs3jzmZ7675PC8",
  "key17": "3vU88uyz5vPayeSe6Z75GoNb25d2sULBbw1whxQdqZ5JCJ2AYZuaWw8SC1xRJvsghjqhGkLEpCUGZsaTaJoaZYvM",
  "key18": "4thG2p1pbKWaZujoGpTgNz5VUskx8kYeEMsJZEfJU7h5E915b9UZCYc3DYM6tfGJjijARVM15SzeVf98pV5AwnG1",
  "key19": "4KZ6dshs2mNpfoAN27sUrySG8aVdxJzfpfUdaYbb3dpnJL7Yit1uTXD6AssjVyvk8Y8Pag2xmXpCrqnGDdmjPiy1",
  "key20": "3zhsWHAzpZigWyercYiEVA3vGhzYSR3pcTgXbkchjLzxkyeKUwstfemKmV2Y7DYMSSZbpDYxQNaNNmTFg87mPyiU",
  "key21": "3aCMUQsteXMpSzoLzuX6wpJ8cYWyKznpanvvAwx12twnWEuKvVQrsweMPTmEBqmjqNGAsh2yc47X5SRuLLA14A2D",
  "key22": "2rSUEsJJ3HErSPhjhNn7rbTM4yrGHAMQHGWsAYddjmovz9dzpC2xXj5JYEbMfAYw4omrjaRgcj3pndu6Pn3g7m76",
  "key23": "3UMzYmwWx6PNgQPmspVartuZRCvsiKT1q3DG3HA15vHpriyPFLwhr1BAZoM58bTJBYzk9vuiqWCqb28KTkoKDxJY",
  "key24": "d5UvsciZxmxp8niKkjewFBHPCHoDpF2kfRycNkEfhSECvWae8zPg1d2ZJzz5rERVK7QybX6UPjoJPa8mnwtWrWP",
  "key25": "2JRGht6GYx8xxNYb6df5DuCTgsK5g8QmXS5Nbust7ezGwbK58vbLunc9pkQhRnw6XD1yLds7wQw9FCGs5fQY7eGr",
  "key26": "4JdoQWde5zcGzbVaJr2D1LU8UkGS8jdMbV3TkYdNxVWNBUjhrZrNaQBWfYA5d7jybcKbbU64ucaKzcri8K4cDxry",
  "key27": "54MEGC7PvRPDabGYgKCHNKX7f8cUeXjnhPtdd3y87MLtK2D4K1oS7uNdSkTEhBULdUARcdLEEHL64nVnD4ZzdQEB",
  "key28": "4weA1Dwzr41Y5JD63h5GwJUwpyMvzfrLQzA3VDBLF3FwEpbcaFqgNUvGuCSXmkdwUY52zAg37VhsjHMDHeGR7Lkv",
  "key29": "5j1WbP8x4BNdLGWA96DmV1uiTHEkExcV1ggLkkHeGCCmWQYDeEPQRGvqRQnYppEsGVohvp9WnLxao3EXjxYpBK1",
  "key30": "5jGdYSiST3dNv2BG7TLLbNkJun19fdgjfFLhrKamU5Ek4nrocgBgMbWMrd41Jm65e1Rio1ukNrtKBHSahKpHwop4",
  "key31": "5iB7Ce3ztuPXWQgv9bJpMBQzbJYuj82WZN1HvHHYAsY9hPsFoR3BbgybMCQJ8ePru9AcbYKfCrarSyDNQY2YdvaQ"
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
