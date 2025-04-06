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
    "2HQ6UekVkq1mggbK7MEzd5YuEap1naDMH6Yegyhw9tgyLceRvWYGPzmwEX3gFckZ9m4Upc5b2fJoRxewcn2yBVBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgrzbNuvN1KgkVVFA3TuoJA1ftdrsNhN9mhd2eJT7CdzdWYde4AMkJeHrkzphG6hW6YCPC7rANYCFD5TVyNUxrv",
  "key1": "WWXKXqS88CN7wxaVbSzWyGqDJL9RnHjeYcYKmYVKnfQ7e396ZfBXMB4dCF7g2oqbpVdi9YSHTQyizijfKDwauC3",
  "key2": "4qFETuJWhBuMV3EKa61tLLBTa5RgL7Jo2ihfWnFhFfYdMQqbxa5kqWXtuktgy978EVGqidE15AricD5hG4biRUY6",
  "key3": "4dkBi34uW8WQkEdRjPZLb8WHTV2t5rXFTr9Q7ZN4kVTgSbRog8D91Xf1CrEYcf1EvPhhk8o2c4VS8VWDAbEbdW37",
  "key4": "3nuvrz1HE5cZUpRWXE4D5ohx4DWnu4KsJmN6oBN5AVoRsi6feah1W7UJpVHBu3xmcGySuWiz3sypgonHsiUCmqv7",
  "key5": "4BH4te8PjEMAjuifw2tRdD2K4aKAVyPMwszMQSAcuhpp9WXXupM88s9DPDaZ1obFSBBe6yaK8bLCCZo97J8aYMBC",
  "key6": "2nJk32jYKiaveok3GRKvhWmYHYrqF65ugS2bSdko6AWmyLFXxWx618HsPZMf46pLp4xUxxVwfMgPFhaVKYx5vJkk",
  "key7": "42awHeA7nR76QRYb8T9TGozPVXmzqAJUDGpxbFZoig6YHFaNiB6979CovvK4dkoFqKcF5jZjSF9HPRukmVG3YyFU",
  "key8": "3PsqoxkPWj7UMbekBXeGYiBBuM6xTCMY6xZEubH5QvQxvzqiMDJTExpxT2jNShbqi62nowwVFSxo4oFhm4YJ96Hg",
  "key9": "5kkuwBhTVnbNwnXyainaUsX2ZwRSmrz94BceyGBFDFwnM7kEspkCbmpF3c2DMvgYr9edqQ58TPT9NzaCpdnLVFGz",
  "key10": "3op8Szf9jXB2qGpyzA9YurLbeoupkj85NjzaQNZouEvsbgYc1dZk2eTkWf6hesdKzwpJjfLasUjh6ZDGauHQrm74",
  "key11": "D9rJPUu687ByUvdB88Mme63Ynz6XiMec3sKYb181i9r7Fbzpu7cMUmk2SbByA5HMTdedf4zKrJ8hWqi9WDJ9Tat",
  "key12": "2Y7Wudb8N7FjNGx4vM9SeRuKW6m33Se1ZiqHUSWEKKagVPf45DkMrorH6y2PkB4BeP3zFHseAy4Tbsur3Je1s9p6",
  "key13": "4vS4towLGpN4poxRqjy8H4tJLzcDTAybcn2TWMYuf4Uvdj4BEUxzDyhthrWTqms7KRjdyUS8JFt4pPeqw3B8DzyB",
  "key14": "3JkKXcHfJX2thGKURCYSh5mzn3TBn7PU53Xrmuw2DTtCzWG2Eba3gsPmdWGZfdbuyJAbJ9gwCQHCMD1kKtduiPLF",
  "key15": "mMTJUQ2JNLwpK2AY3rjszGrxsob7Lw1JMhYJMRqPk2hX8ehBUzhEjfvgMJJSjHr1EsSeaEQZS5F37vbCLvwJdpB",
  "key16": "2oZvG34Vbu7L9PfjM5NwToRpc1B7v5sccDNT6xfqiRMMbH8gfXTJkYm2n3WRDiGcHGwL8fW1A9t7p44ahGt5RHR1",
  "key17": "5Pz8tCqk3uQiFd1YhVVSzeKb5cNLwgmfu1TgTZCieLU1DGBnYjCWT5N2HW9fea9Vvc18anydb6yztQDvaTngS3p5",
  "key18": "22saqfdiViQryFdsaeU3rsBQJB5pbp8uk29Kczdvr6mbe44rGS2tJaU22YVudVLMzfNoLCDCw4XihgN4ksz9pCDU",
  "key19": "4T85kDFKc838uM5P7yBcqugX7j2wd4xVbAP9iufXcTjdD9hPZdhimpQ6fWY4a49z7FYWnngD4G72HkMex4tJhbMb",
  "key20": "52epK7SaiKxN1ExSjGyGNRnmE2KAkfZiHUfEAVsHrE4boF7cywzZfbyebkbL8KH2DP65BJyZrzgWqL5Ncba9oJ8W",
  "key21": "XWoLikXa4VsLBKvb9nmCpMpDy187PBnnF8q22KGub63Ue6Z66CWUCfpgKx95aSjpQcyWefdy2TKba37w92T3h3r",
  "key22": "4xXPgFEwG3Sqsg6BJmFfdAeQu13HmvWXzDgTfpNvHHSCU5uG3h3iJ7J2m2dD3i9KWntzsaoQ5GZArUGifPxf6UBB",
  "key23": "4fQmS2Lu5yRYnVrHhocWAD7UU29JGjT5iLx3y1JpzjEK5AkyYQVkDY7JLKKkM3brqjcMZxf8wBBoorp3pdcS6uow",
  "key24": "5YaK6hW34CEwPYh9DZzDj1fDkNhGeuJF3Zv3hcvJSRMsvaJUxVsMgz1PxuvE7NVypgzL3kxJB112Doy4EisZDJpn",
  "key25": "5sjWjbBBQsQhJ7LCzvHUkYtD2uXrPc8h4ooeeJYp88uQngehZ36hArEg9L31cY37kJa62yu7UyWGGTWytimZfqkn",
  "key26": "2yqEHXCdnCGvHHX9vVd7oM6Y6hLVS5vNfx4KMEMTQQtDrpvV89iuKMBNoA3jYVRAW9GAScJSJRUhVCEawdTkkYF7",
  "key27": "2dwmoFEB961uynHhZN9RFxtycSXxGZ86SaBR5tyWoGuU9WBsDEXSPFc8NXXir5UxsNs4ff6bi285D9Ww4rKRtdGT",
  "key28": "BjUHZBKexqBd6J2NdBx9TqKhSxhxaeDx1DZAmiBED34vc9z3MzZ7vTFv6uG1qGzQD1yjfkrkKNAXE8E8UQZM1pE",
  "key29": "5HXuwgdyLByshFroY6rEeMy4MoWAG3EsaoqxEKMbpStcCVW1mpyi7eWxFPKyQUFHTsAHEkBqHhahHjLVoZAdDLQC",
  "key30": "5P9kmYwBsvTFgCKowneiTxGJZ21peycsbapyQgziqPegkkevYCLnre4qLuMvtnmBE7ooBnyeEPDPPzVebkBBbRSe",
  "key31": "4bYSdTWk82ZDgR7MPYUHGpqYLEfdZC1BAjXkP6iKaaz2FFT1MHgqjico6QwRdGJJmfy6Kmy81oY2DY1Xot4Q2KFo",
  "key32": "3XfTEsDv3orGd3JqaP8eWQYEXTFWAaggRGbSVXjgmh2yepU38o4Jw9q7NLRQVSZ6M8zUBVHksUrQQpGpyiBeAP51",
  "key33": "ZuqPMEiFSiHrV6ytx9EPvVrs23kW5ZuWYGt5khPJU4KepxQ2gMuN79zWYQuRstfM7B8yrCmW2ezeFdaQ126MmYy",
  "key34": "bjggqYBHEbMwRmvMTr8nxFcoREKA1YmdGYB7Fm7F8bNBFBNutLbNF2n9DgrekQTVxRrxKD2UvwCANjG1MaU3Q92",
  "key35": "jH2LYL7czwpWoH4MzdTiusMrpfnusMLxVLtKhP3LwEyH1XWB3H3ZjbPpNuAiEBqXf4TWBJmAFa4HsSttf9STffd",
  "key36": "4DzSWHs639YRhEMC8NVJ4Wt6kjKGocCStShF1DpHetkn8ipuwP2rBFN2gSrUD4w5RF97pMTbGaqtTfwy5CM1yXhH",
  "key37": "3v4WPDv2iip2ZFzkCiJpjYRbWgVC4gMGrWgmnSjswKN3Mjg1gmYaxiehK1NJPzcRYoEmsRzEQcPCcNgA43Lcw8fD",
  "key38": "2eCx9f6z38GSX1xBym1mqDX8TnPgaozxnrfbfrf2NXh1Nygr1UeyE1fPTJPqiCshJ8DwHTPxLDR2RSyze7YJkQhr",
  "key39": "2SFxW1gqu2jn8VohiViAsvBtx9zBUumMQ6YXx24EwU8d1niUihNnurmxNX1tAZhTj2TVPKcaSjPz8Lpd66gcDyAC",
  "key40": "5LQXYgXWxDvPiQ9XEjtnqNKwxJBX2cQPkfNvGg5tGLyG8hfgoutWCwc6JfMQNfhyvh9XimnjhotHVAJGztYfv2bQ",
  "key41": "UjUBEkYEX2CxZuEzR4EB7DeKHG1YN5C42TmR5uj19vsxMBBgMzYLAe6vwf6HV1ciJTMreV2i7YQsRnVkMFGqinq",
  "key42": "5izpWjBczprgWgCbFndudGR9sK79KEqAnbqkRy6Jt9Hh79DTUWa73ygxwM1R578vjiBAjQXDAUt3qRpwDpGiwPzL",
  "key43": "ik2d369qJydSrR3bZGgJz8GkYHpdvz4R19o5FrZpPtDVvQDuEfhMmMArT1dgrJugidiUacKEsy5KWJXsvLLoNQG"
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
