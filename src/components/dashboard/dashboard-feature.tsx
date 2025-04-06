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
    "tFwRwFHTT1HztQEGqzwz7ViP9yENJLMY3nDrEf3H8DtPY4MPhgVQ9eEDnPJvZEnKYMexsHp4v73qzwao5Xc6RPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GLfTCivk58sv3FNS7SiExeYXbpeNdaNbmycJgbA9sUnxuJZrMvKzAPjn4DDjuVFdPbQ2yWJm7W6rmHPpWfvng9q",
  "key1": "4UFjdJ4uMBq5rSc1rxdAAFtUtCnv8J8S8ot7gS1cvBePtrh4vHfbJtDRpeTAf71bU9VFFDAfUdYz6HCmWTQhs8uf",
  "key2": "4kJryicn2zHrrwyGH7GyonAy7rb5U89CA4HZrX2gcTv1Sg6TybYHZY8McRzf7nx9zUXhbmP1uCaPheMSJ9JTdKXV",
  "key3": "4hLxWsBi7sbm4TXQnAcN6EmBd3GisCwUy6ER3UXV1mBugt8zPkBJznNxSXB8PRqL8SfzPUbvTFoFExCzNoXzP33H",
  "key4": "cgzAH7Ecg9EPongAxxfu126WyK33sgFu36x6ca9JTXr8axHUQ1PhtYecv6U6ju6cCgsgjiouzm8pLGkBKe1Dm8i",
  "key5": "2ayu3WFPDwheK3U9sbPjzFzLQbDc29GBqNjj1yQV9bsrVsgAtVNjVtV1FFFCYqeURV5V4CAhhRtF8qbY5phBDcQ1",
  "key6": "d2Zhw2QRorrqKk1FYtsBG4z5AywoT3FRyaESBSmZ8oVWF8TgBGu95ixHPxfe9V7qZEozGSwibBB7BLaPQAJvnuJ",
  "key7": "52KY7iaxJYRgjQLmouFc4bbpLAcb9wYLqG1xULSJmHcAbjhTzPSddbBt9dtrfLAL5kVbAYaXa3uY1ZPGKc5Ce9xC",
  "key8": "enLcYMFqmGkNnANnBERAMnN3sj9KYAE69qiyxadHZpx3xkbvGkV8TGeLXEevJ35jgZccM3Ggbb3hZythbrdKWsB",
  "key9": "4F3Uxm8egDKEmaxy5ffLEw8ZHTngZiDVmDPiU97nuy1pBHfPLWBDPs3Zo29CLhfo6oY1pR4jDwXmcHH8Da6AUqQA",
  "key10": "21e8mbbaQRe6pKyPU8cNQv8M8pFVeBm8xnpKQJHL6JFpPqi39PtMSAgE1tgudfUQb8bdSdTaT7avs8x98fhHNocu",
  "key11": "4SNg7KpVXPRShBncSyuRtbEBMvradAZcrKWzhN8yRvEba3U2CSArAKgEGVdcSpB3REmS2A7nUzk4ZApJBm5xYRd5",
  "key12": "2ivZGtdWg9z3xxtg8pEnypa9ZSec4qQyunYCoRdcCntoit3zmxEsTy14rcMzCpGTsFF5C9kxAgqLhTU8ZRLK4SVF",
  "key13": "3NUCu7TKaQxrGFCrvizV4cBF38X3TFiCpUCzRPfADQvKhrPiYHhBu1631LatL57BCNhaHwZi5Ne6bYh2Q2V2wQGn",
  "key14": "24C7owVraTL3MocqXJUemNH6GgekFgHTxsGYHTWtPtR2S4toLjKxKajTtFJddayysdf1FycwEa2cyDyMtLQSdNMs",
  "key15": "2ihJLu9ZhP36WnvgmE8ARRgKrxYYL2uspK53D3hrLCLxBL3e3UhULGdZMFZ8gr4j7KvZAqo2cupVVdFW4AwEtvje",
  "key16": "5JjGdGmbZrFuw6dG1YwyRBf6Knazj1ddFvu5PxWvSvP14jtWTuDVQcyXLtHVdj9FLFGDnzPwWVanyo6LeWWKWj6W",
  "key17": "2TQLVy8ZF3yxbttr23zRhujGq8SynXjXzpukSP8c7SAHUQg5dKc2LjSBzjrVgMwC5pVLegzsSZNxtvbvsT9ePetR",
  "key18": "5E15hT7xK6jZdNfiydkyxWL5xaFG575LekfGD735WYFMGQs38ARMqPPRNAnDi3BMFXjoHZ7fQ6mHrsdbEvaHgzt",
  "key19": "2rYr5Mo6na6qR8rjsD3CdypZ2SxEk2FfLppqBf74HRxxYffSjeupknkSPdGekguVsadvfg3o3XXJDMX9Nx9ZhZ19",
  "key20": "62uBjWQrwHzcAwr8HVEoxkPCrHKweFfwRjHZc6WFD3gPoAd1KZGUEacj5pQJsnZ2ZRep63K7xUXXnB491BYL2kKa",
  "key21": "5Q7YqCMboEfibtaW8t3bnLyk3vuQSuHEEyby4Km4CdxN8Dnwz79WACouPMdy529F2fYPoqmbkKBR6GCRy4iM4Y7u",
  "key22": "BuJ1BFmDPBGb9StPnzpoQLrCXQfoNrjTkcQCQajhjLKREFTgEyaUToo4sA38QN7U8tAZELvLM3dvk16k3ekZpfb",
  "key23": "63VspdqcFjuAnVPiA7Cko2p7srp7kL1GfZPMssVZg7cX6Mod1nKMf4H3JaAYk9s5KAT8rbEYynnLMTm5JsDSMwjd",
  "key24": "2HvA5guaapAdREzYJ5nCUJa5frDgty6xQcqsixVGMxxtHCLGGW9jjztzatd82Xr5or9Bx7eUP4Fc8KmFHr56MrXS",
  "key25": "YTEQ8PzS6HnbKM5P7bxMUNbvrezqSTLYVcsFqzFwzDk7rc7PeemzkH2RPzrkyE45U8J3ZjeskPyA8TRjdvNEsd8",
  "key26": "47bw8jYYXwqHyVf9aNSa38vs4EJ6YMDvkiNryWmGxkeKeiUAfXjLeRxoydQUX1qcriMuu5377zX49emgYvctjwET"
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
