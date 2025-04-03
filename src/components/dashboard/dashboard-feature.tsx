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
    "5dJ7RtEdfMNud3nkJSvJ3GRU32iCq3gDFrNLotPWVmgyQGWJVT8gupsKihCJkvW65pctBMJEc1QyZSMGSgKZgshL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ohU5i5piNfuzFX9pBN8NPowQgRuvCkeuB2UuyhgYS1dQQSd6Kqz3T8BZTDLQJxbVbw3UBNcy7H8NvFMeG1Tq7cJ",
  "key1": "5YSnjBdFTZENUMnDRiuK1bXeQ7D6BvtQ54NukaEVwHguEjNsisAEvQm9ByqzVWHEeg4e3CZx54LMKYUK5HeFMJXu",
  "key2": "PbiskTCjaAFe7Tg58pZAUDXEBUngkqH2WZsmYkfNstoeehZtXfSwmTmeNvxZvzmEuBByirBFRJZ1H82ahhEdqYE",
  "key3": "4toC1JoW5P9Yputu7EKSWAx2krdX72sy6gghWaYSUo6B3WMg1xEcPk9YLkxSaaiKvSjS5LZWjeZgXyapBzBS7r3F",
  "key4": "5wETdsnSc6C6YkmjrHA5LbwgYphjvvyBhnnfJBQAgKau1TTTcXNY9eGf3YPLKyw9AB8gjY1xmSMWQfb91Y8serVt",
  "key5": "3Z8rKWADAeeUcBJiwr2WXi2ZGKwGiWqyM6Fm7ERSQ2MRVrGn7hrzk9gto9tWTn7x7AZy7SBqqU9gN75hri8FYfiJ",
  "key6": "474JjDK41gfbrDF8m2jHxM3fV9hhMi2keYkFD9XWA2rWDqyAG5PKRhApxbM8ZV44vPzXbEcDRRFrmkUWoKk6Cvb8",
  "key7": "56zkKdUgmcJh4mz4sYnq17hyRmo1PCxUv3wKfTo3Mp41QBC3XFUGNwtNMzhUNipFJdngaRBsLu4qAAghEfN5DGng",
  "key8": "5FXjkdKvtm1qYVkQ5kRzL3K3bNaTD4UYwUhhGsiw5VmSc55PyiWvFpk3TCwpXUabujiFfrDfvrc1nWsowSCcF4ys",
  "key9": "2ic1giouWshuLzCZDWDhgznHmWBE8KN3Vv19WbE6XhJx3fRjhy2doGCikzon2EtceC7EEPvZP8oUr2559qgos6Bp",
  "key10": "61ecgZtMKGsvZB5cjrv7VoTkxdT2PXDXjrCrBHF7s53UqKFLsGhsvA5avW2SjxyR5stN6ak6Nj1K6V8B3ddPaKoh",
  "key11": "GtC98BAY52FtwoeuGxBRWT9nrkXvBBSvR3MezNkY4dB3cZoS6EfzVwBG8X48s7xQWBC9SE33i124shFKq3h54mP",
  "key12": "5QMRdvSHvvPQYAKAxWEeZicD8kCGKSeKahs2fqZhMzc1GhQfc8JjxFNUhaw6UJY7JbBbaufxRc9SyjKu8diQvcQG",
  "key13": "N3bRrDP9s4uSPVwzaSJ6JR8Wbxz11Svy8xTunSCFnB6BZDmV9vhhRzZBef6b4EqR812VE7kbZf3WVu2tK5nNqcd",
  "key14": "5c3SsEoNwpEfGdz6tYnoQXPeD4eDgP5h5HeJcNjLb4e6tJGA6goU9DDrhVVmttGnmBvTagFmbVYet9RJrAi8PX72",
  "key15": "5r3X2ZDKLAbkCpCB7wuwhrpUDmwjoLkFkngoDaKupKvdWB6t6Dtdjzi27cnawEsXafQTi2FnDsskxCJxg1YR8wvV",
  "key16": "21VWX34Zz53Xy4CMGv7YbL9zWxKwqugt6fSx4JKb7CFqdxVHmnzxx91CHvpuubqq2P17e3E2i7VHML1WsqbeuefT",
  "key17": "4thueWB2WZ7iJHkiavYaD7VvXstJ97rSDTFz8pBTZpm56dntAUKzmiexYG6F8Rj9YvywqDrdGDKmcPe7NGoK9ppn",
  "key18": "4azbaBquP1yuXuinyMcAqqpzygSbx3D3fjRjFzcx6f4pnGYUYyTkzF7f8Yuw1DhAZsUXxkrTHhG7PaBjZPzSQ479",
  "key19": "3eqZYpv4s1U3XVPwspbMw9ApaFvgAwNGYvpHBe4i8RP7166ZcREujfQH6g7zCLr23fUmTCfy54ZPjiD5qnCcYhMr",
  "key20": "5JFbWvtsi7cLVvsEzUNZEfK9igzJYgpmamoSpfGnWYaHNFhVwy4r7fVsVSuSRmF9QS4P2whgzieampfgCC8Z1DWd",
  "key21": "49de1NeUXqsohdrexzPqw7piiSwsa4GeK5PCHxWL6SEsTmDQHtz58SdJWWhnvC9SZ6bUTXn19GQj73Mekg7fgJSC",
  "key22": "4tz6hDvM7GgjPnhDoyFnSAPet1KG8qSfwckxbwYQqKDN9b7NCagSutkjPpWLRPucbQ3cbuVx64zt625trNHzySXX",
  "key23": "7NZVnUH1f6AtgpmQVAuVkUNN8wKXJw9LJDcqe4RWMwzUYFK6PfL19SJ9M2R3euVgM1WjnwyBKxJLEFb4u57jzqG",
  "key24": "3gmYMzbLKPGiQet5xznFrsuBaFCotMshj6CGwKbW5DrfmpbizFJW4XzRonuHeZWC9sBXikLaakwZyn23cgmMdW15",
  "key25": "4tVaR2j8r2cro18nVKbtqoGMq8G2Cq4yxdh8ZHcj6Q9jDLcSxQbR5c5KNoh91yekjovTqzyQ4TLoWDo6A5ETL2Nw",
  "key26": "2CfWRfyfSx3xjANhQR8xBj22MeZfQBs8hE5fLguUPuo7oCrVS3XbWSjqM7PVahvni3HkwKtFz5JLWdg37FMYmpnm",
  "key27": "35Q4MzAXFUH5EkWLikmjdWBsHAd7tL5VL1YcNDsAWD16vfjFBVHTh3bUmBX9tQcacvhvgvHe24sJrwKPf7zWSb9",
  "key28": "3manfqSMvw6tnQj4CJc2jKShxDBVG1u5dS11hUCBFnF4sjBBvkuGFYq7V4NvMonsQp11fS1uvp8TqVN8T2UsU8o7",
  "key29": "5Hm3ycM54aMGZXzk862fPBKhxQGDXV6UkSNETgCsXqjHU9ZENx9f1VDFHjcPuPxhPrB1nXfjQ5CF8Gzzuhk5tFBm",
  "key30": "5F48cyKM2nVeZuTLur3fkUjbE7H7XvkPFR12K8YFKnWE4hw4c9k4PcLjkd5HsV3VVEHWkXWhBvZ8wv1PrfmmCEfP",
  "key31": "5HZSFUaNGg3kSsUKmaweV1AFk1P7GezHk96fMGhywLnkcM25pFLFwtt7t1JvnaCaox1zBsUa5HdPf4CmT9CGFxGm",
  "key32": "4vNX6fyk9R7Jx39er2WtAczKRj5GyfrcAn1voKd7pytZrh1YRaN9egQB638eGU7aRwyNGoSuZKXaWs1rGq4BWze6",
  "key33": "3bn5SbkaWjxq6CWn3EkSQbAD3vVbHMkSA1urhqerAnNEjLYPdQsareW7WAjSp8HQ8xsfWg1yvPwcCuDWL43J6qKW",
  "key34": "62MD5pbac67zXNAAa3xX3QuGcUK1mxW8F7MPgfGAyu1iPczctHv7UvUZRAeLTyHyULmHJKj45dd2Zc1e7GGdmyYX",
  "key35": "5ke35xnLS3SHyhcpLJhN3Dgr45sQfp8aJc6hviHcwptCiq2f4BYuhGEgGKkcw3kovAVaNeNRm6197EU5pqMmpLgR",
  "key36": "2yFq6Vqr6paBFm1N1Q3B5A9hurPu2QemKGcsjKvN7rhnKRSpGxNmmYthu4S7W3YA4ym6CfXCsP7pmLPPv9jK53jD",
  "key37": "3bqj8hPahGVCt4Ft3arCLtbcZ3B6pbB3T3YRafqEhneEtK4c6K2VVYwMAFGUzQ2inmsA7DyjLcnGvSAZFAHXAand",
  "key38": "5CfuVBdYjddKQTLcKRdkXf5XhaTzYw6qjvLZyAXck5ps3x2NTBqn9pZCH7Y2UGoGZkMh3ksZbm4r68X1FquspCYn",
  "key39": "2ZCrgsiA69xcCTg5VEvYkG7ee1ErJdek4bRPzf5qndeRkNdRhm48L8KFW746cGyEy8we5mnL9s7BE8GgysbS9Sx1",
  "key40": "3XnreACLeRKyoR3MaWqtU2RcYi8LtxEbFruDMRvFFRUXm4WHXEyY7cXVGpjsqQxe5X83a1m9JJxQyHXSpTm9bYVR"
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
