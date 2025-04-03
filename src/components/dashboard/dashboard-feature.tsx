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
    "5uFdVgBtp2LcG1W2sWBhqA15KBfEjTrkL12hYwt65rNf8vDrW16BoXXxQAFEgeNDpjRRZSZwfMPHcJPHu28C12Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cru1xMmxePEp8jueoM9Bo8K7WPf2eHCUMtoBNHNW6PVSPa18cENXgo7UZU2zub8kpH2LgRrBA3ujxqXRs8fGKVG",
  "key1": "2cvVeZgXsBo9JjzpKPBZPbUViiABEbULdfzkrbVyanmFnN4N6vcRUNUr4dT1LKoDppU8fNB6iwT8HveuvTzZcoZC",
  "key2": "54G7soqFEWHeMwH63ca48edficz5mQS1uEopeZhE8c6mty8gfRAqZkxdq7YaZzFySj2yRrxbST2mmBHgurNkRzo1",
  "key3": "JZMhupphA5UdQ5FNcDDoF3v5s1ULJagqdi4eNhPdQLh8FyHPUpP7JKZFGzpU36NjAUNfxa3h5Ziz3xjPPFkM1T1",
  "key4": "BZ914tfVFz146tCka285eYTtGJ2Ko5k71iAkbJUZfDa7RAKgTwPMrAWDYcjC56CUGon3CDbfJ85FqBBtzrbL7da",
  "key5": "3roH54Z7oDh43h667g3he9HEtufE3kr3SV97cU3DDErnEiwQ547Av4PBFVo8cNr34oT5KyzqKAtm1pJi5sQv4Sct",
  "key6": "2S9gLMwJ3XSJnj8usm7Tz4F7tWo26EzZdeKWzUrsbW4DYFTtvW2ytWhJ1hRDmEnM1YKKuzHthRi6nZCa7nVJg3Kx",
  "key7": "5VNiTwqaL4B944rRXbAWohrfPHGW8XpPVehTt3wkYejUSNWa2Povoogmv3wyPu4VDRGV8UEXHAq1gwTRyPtxNuM5",
  "key8": "5vL1KiNPTUtXtUzJPA497mo2vh39TbQMzUBYUHyDK5kWJAi8rEXMKPpSUNymfHhr3ph3ikDGQrCdvthbHt6h9K2U",
  "key9": "4cNSuTaGt8fJmj9AwxswG8mDBMMFpBJVpjc1Zz1AAWNJhpVzk9H8ccZH8ydQ2RQghZyPbLqcAAjoUkmciKWNXDMZ",
  "key10": "37T2ppgm5hbFQdSSLipT9hJkF43PdHngvMFJAZrj4MaPYaYnAq8aTKZD8vzeFL6U5dYfzdTxX2ed1JdrnAzjM3b2",
  "key11": "GN2xWKUTGYy6SYerRSBQCnHUgze4nYvKA5fTKkkmoMUchBKptwtz6C6gXS5dhsfPRbkk6UwwjMTACvUvSe1iygY",
  "key12": "2Ret9wBWKgfwpvzQF7BoniJ9nfWX8YHyeHhfwdqYasubxztCbs5DUskxqn3ryoXj1Qhjcxf4VatP5nxwJtGPAR59",
  "key13": "5ozJKCqiKC9s8SeF1eAVk8D66vmTuvkur8UrroEQEc5z1962iyWngn8fh5z7sFNqUJQgsWTrWogNiCCkT9qGyaA1",
  "key14": "366VKnWGJYg8yYkYbjKVVpiQLGkXoY3Lmy6DTvAvtY6byzJGn1b9cbkXxsAD9jP162pVzHizCaeT5poh58uJDHiA",
  "key15": "2Mov9JFR2WQGwi54ZuQ26QuoUVprxkuArgxuz9ZkSpu8sA1k7ovvVMAE3veRdZYoZjWGTsidyU2Md4BXzhbHwhMp",
  "key16": "oB9inVMEFNVaAJ6HiKUw2YhHqnPe7cwp1TDSuZ4M9J18Y5eQNgKSK4k1k8yic9dn4kig5T6jNXCzjFs5GYPCp8A",
  "key17": "3oFvMeCJpHsVB6s7bJyCPzRnad2x6Tx6z5EzcA6c58ZNveuxd8UiL4medLiiebHLdEnNDfEZo6XZLsiYT7ZAWj2k",
  "key18": "4zcGvGa3FuWyP9PxVAkTYTfdookCRbnw91g4NuthCLZ8WJD2yGimufeHeQR3FpjkrmhhqRQM5UnZU5tgUUUup4Xi",
  "key19": "5p6iZhPadfAVuVJF5KBS9AthfrUNuoweUB5XzguZjRR3duVB5ETEiYTNcL55FKDkcz9F7rdpP9nufsL7LRnKjjM2",
  "key20": "32X8uuEyRNKwdq9jw6VWokuDz4KnEvWmrqhGgkDhoMLfQktdzh2btevd2z2AHJvTNq25ADpffeKrX8zq6VnLPrS7",
  "key21": "4iVmQ9U67pE5w8GA6kJGHCi54ugp2QDecpD1X2eutSe7aCyvcRqF6J4wR24u2ikcenf6xZwuX5neL7MqpnVvBeoo",
  "key22": "3XG2RDpSVaqVJEoS2CN6jBawjkaMHUcJGjHCRRhfmsDrc5PvPkgjVxHKc235ziZgXDZ9rJmbgWTWuD1naU58vJqb",
  "key23": "5TV4YBKreBq4FRjMBoRJRL9zC7pj7nzxrrXNZwHdd4Mp3UCQjZXekq7ZhwgKVS1LLXhBmtuKFvVAoozA2HAstmnW",
  "key24": "wGyid4jUsJ8S9ygzNp9AQ14XNXCaAjfspFEQvubQta6zywncN87ijB7S9gzk7KNtu9CrX2L7EykCcaZ8dN2otzV",
  "key25": "4Ps54rRSfLonpFvfeDBBKviP1NTt5SSm3crjbNeoH3azjjJW1nKFUtohUkXWWjznViCNRPTV6JDJGaNPAga26Gtk",
  "key26": "5Ndqfxi8mbeZMqu5bMEHQNFdCfPxTgXhMJTi9pRq7HkMh2mEWwA2ZaGCkUc5XAU5PzfbZzxFCmoHnt3sbSJJdJTW",
  "key27": "aAKLCAVgcoVNBX78nzg32uvQjNt9mt6r4RpNEVncphXoFVwgRFao95kH5FfLEbkzBYq43M6QvgNFMZJbe5hSBqV",
  "key28": "5g4aY8maydbjKenGrC4ija9XYUPUnNvc6ajuTfSLdmx4ngXZ9xDbxbfXqBFsnPQXs1X3pPLBZHfXFjD6YU9qHxaU",
  "key29": "EUnyghB5LJ3NAtBaKH1L8ks317T35umgk7Gik828ZNm1dDkd9wJhmwWQMWqNV53jPiP9nfLU2KYxTJ3jQtzpFDC",
  "key30": "49ALPtKhKf8WCgbrpBr4AuJrMMprxX4BDfpVHdqZr1tqhixyFrRbMT8bMVYci5b2dQL32VkZFXUfLV1eCp3hPAE9",
  "key31": "2jKxvEwMyiigBT2CVj6Hr2o6DHi7oZBhQEbMLL5T2suKjQ9z9FQ3R5HQ2wKiLzJ63tZ8frenDxRcCp9qWSFhTw42",
  "key32": "nD4KpjHLqf5qTHNvswgu1aqwPoP4eTaCe9orrQrjtbi9Rsn1bZeVbccmi8xoohrU3yU8aHMeiZMNm8zXf5WFeJC",
  "key33": "JCGJY5Dwnw6b3y92eUeWp7LciP3v7pBKtA1rpuuMkzXtAsMS25N8CnuutoAheSu8wF737yxq1WTDfBMM9p5Rchr",
  "key34": "31BxBg1C4NS4Brsv4Lh6Uf9TsxqoEVjdj3vtbydfHGwxnZ23RP82twn1dEbT1Cbaj8MoErERJineq1T8k4gmS1mN",
  "key35": "4HGTzfVmJKGwLzHsAFktsjUiMNH5wdYrne1A3QtndbhdAn9Etw1KFBNSkZVM321JRJFbUwxKmNTsMSRy1Thx4oBu",
  "key36": "4XX6Zgt31F8Pgxxjgu3158pCuGrbP7pLHtJDeM6GeA6aKWXBvA5Yxm7bGxnsYUM2WKNsYYpTmeaRi2S62WqDyUor",
  "key37": "3DVRj6uRJzsCZFijJr2kbuM16ohViPV9xg1KftCUtWES7njRpnwBQ9RT7RCtG2i27JKnEu8RttWW1VUnEDG6F9Uc",
  "key38": "RckBawL1DNKJq49N7vm8unT8Uog5XNkhDxKcMYv9RpBWAVnoT1L2FwxF4AEGkDzsKABSzyneMzbhb1qpPDvCrJi",
  "key39": "o3AnbaQ6n4vv4SVDsd5MNUEUpaD8nvCDJu4sD2nZ2ABAMKDp17mWra61SwEjkuKxmHvFqbSMZepXt2Wkv38orJx",
  "key40": "4oqad5xzTQEe7y2bCGcwP8fnzfazRqMKUR8jCg4Eufp8H4QofgaTNnui99kbcoBUJQbmPC3rR7wh4HiCm4JdX5AY",
  "key41": "2ttaPi15wjp7Fa4JQN6tUDb994fw5MkVYDMvB54kX9N8GY6SK1yuzaY9tbVGPQLKXANP1wtk6BHvPgpLEaMhit2J"
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
