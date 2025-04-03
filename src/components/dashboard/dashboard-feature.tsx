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
    "2mZQ5YZmTM1Gvucfzhk9vcYV3haymrZbpwBphq7jDwqqezRRRu6NsdUYkdpy4vGeLyubd4vx8VEUoXWPQDWETLXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "REzBPMN4jaMjzbEKAW29STLJ3HKZtdmAiub3zbo56SPUav7Vo7euYUH9pDGYdDCfEFtbPV8CfYbMbwnkCB8KSGb",
  "key1": "5tovq3zKujR8FUXqe3SdnEaEUTQh8BtFK6ikoBotSiERqukHevqcBfmXnA8z8suBd6ZRSmB27F3JXRABprLLSFpW",
  "key2": "5eE8d1myRowP7AG89S3oKiC7cNzVEGBbWgARU2itLJwZCFmLTD2dqkng1Ladte13FKsvoyozVFggAueH5xQJLFez",
  "key3": "5aq6DaBAQYLKubWRrAhGFax6jSMCgT33WamP7ap8g53wxy3QWAnwuYHUsEK23oSoay549AmHgX9N3i3BCyXMWLTF",
  "key4": "3WBfhndJvnDcjpT5Syxm9xRhDSySkyuNirZ7D5XrgcbpGTfPdKqyH2LyfF4J2jYqfdWx9q34uVKrhYgfQPJMDWpw",
  "key5": "2yMfRdv84XFkGLgfgmnSgVvz2FnGZWTwfnbivyJx9Yf2Ye7sLioP8NDedNCF5F9dTyoawhrQhNKq8EWDHHhaFVZ7",
  "key6": "3EZfF7nUV6fidA2Q6ghge75YaqsgTS647KWWgwRfvo54LuJd6c7ca9q1uobqwtSVa6B4hrCvv9EyGsSdvXGjzVo7",
  "key7": "4zY8CopgZaSQZjE1ucYzwG7QXzwtNWvvhbCNHw9dTj5qwc8QavQxY4mriUZSSttYCxi3v1Cn9MCG5jKb1yQkY5PF",
  "key8": "tkeQTwGq935efXHb7uZhbvZmqcXwzdy9AYjKhRejB5HhrxbGW2oKaNE6Cg1aJPgeviyrM5bDzn6KXsb1wPGZ9Vd",
  "key9": "2Z8oC4frd2nj8dVSbhbxV9P1mrRnewPDXUC2FVfxFo36BrFuZkCw3fGora6WL2MUv4GquTtHZRNURkEaszZwjYy7",
  "key10": "4fRoWWYNRgGZpfjrBjh3jfWc7ZgQYH2Tkp22V5CwEMZeMAxtCA8DDW5ULy9sBWGPeN9XFi7bNV4KeF8YvTyBbXSe",
  "key11": "5RF3BAX6sHzBUh9s9Lv6rz4CzqEzvdNZFQLJ5B3EJHJuVGLynnbfKeqPGPPLejeaz3KX3ymHvbq1qRuZgrQxeWL",
  "key12": "DUz2pSytnUKtz5QA2x27sZMTuJdvFVjRfsNhss4DSQaPTNYHxrxBTDozCyHU55hxovCJQMhDyVbL5q9Vpg8Vqs7",
  "key13": "2eVEEx5VExWsteR2egaBW8ESyxG7i2MmvdSau3ntSwzQ6TMkShVAez59eWWDuYBpdtGbc6ieeaX3LbCkSr5EYy15",
  "key14": "s49g5EXrtg4NszFxeavBxwCCU3v8Rfrut8r2aEPftwpSw13zXsrwzyB6cU11frYEztL94L1FhZj4jJJoVn9XY1G",
  "key15": "3uiHfsUcTmaZbMr32yV4SLv6TcmF9FADriefa58qLBdZn4DPtMHZ3dBLbQgEg2CeG5ggS7vVLmMuaxEnNEkULZS6",
  "key16": "49Whq1C8nD6Ev58Bf9PuPGHZ7zr9z9GsPrekydnG9TxfKpCb9VjW2Kuv8xfUWX5Cxe5J8NWijb4TBxdAu9uPwCAv",
  "key17": "3H3HhaFFrtzYJURAzWQuG1wVehUS8Fs4wUjKoZGBu2Hocqbq2X7CF7d81pFc4VXTh2phgLKt9Ajz7zVgDViv63po",
  "key18": "4xhQ4pRJGW2ByFLv863xSPUDadDCDGQCZDguaQ8MY7TnzFb1muNTqG7k3uJ2LUzTX4jEzF5X6sAt9dT3VmtkVujc",
  "key19": "oNG4xGGhX3GxprJQiFMJc1213xKNZALnEwhdc6buRymhTr39p3Nc8mec8PSXEFcGiGnk85scoHgfU7hdtgWTWkp",
  "key20": "5KwgAFC4LWtwJyqYKFNohMAmmp3QBGVSpNsc21kvtuMHXG9vj2dCgn4kH9XqwWdP9EUcBBNMpK9iYa4ZL85Vf2fa",
  "key21": "ZTthAhMbw5cdf82Xga7yqySCSHhcThqhMudVhFzY4p1gfFt4NSiCGqYyWXfqSyuM2XKjnxf1XEvVw6MmZVoAJSt",
  "key22": "2AVQMRDV7w7Ghqwt2xa881i5zNDeguLZdqVpPAE3miqDC43XEvwGNQDbAWQVaoWp9dmfEEaaX1LXD8UjY8UZVSZj",
  "key23": "2catVnUrMC1ECBHLmnXugWqDtSn74FrZZBn5QMnFfYpa2EpSaHnLuP1Lhn8WfAeZGC5eq37WweAjePw1eptf6ncZ",
  "key24": "xcV9wVqsQTAsbF3htCXUeb1re2SGhgXmuXPULD9t77RoH5hFrptg4nTTJo6NHRao4vGS3kPfTg1FYxq8diK21QX",
  "key25": "25PDJJNFTqKRe637UjVVFUxrYiLCC8wsamXcVvFxYnszBQ4pMUEog6WdCYrYT3nQuouK7tQK2inRrMQXosVhbtdx",
  "key26": "2qbU7H2B1urCnXFJKHvWtTuJvGtZYPLcftwaVgsj3MRTY6fKWu5N8ogZvH2525v6QAiaR4FUVhdecwhoNHEh7xrp",
  "key27": "2KuFiRXR2WKew7iH7gJCRAtkrTyok79puyadaMZ6G8BjKWyuMuVmdRRNa586bMfsjHh636v3v6yE9B7QMj1UQRrQ"
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
