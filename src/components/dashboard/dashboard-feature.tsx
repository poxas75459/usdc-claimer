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
    "2At1FkeafWqJhHkBSLL3xEFF9fm1yGTcoz8z13wdcqoKkXZkf5bjqxPgduf4C8vs4jAGhJqmefkVp7NwKd1bJVdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41qey7y2fyL4j1Az5Mttc8iNwF24GmseqY5SPAkSNCaCR59PaUvutaYTDkgQUP1AxiDmxW4FDRBWqcq61tPFqSWt",
  "key1": "97a5RHMNJdpxgVk5SVtuqkqpTraNdJCCQeDyfwRAcK4N646XQhNgvejS17Uk5CVgoDpSoKVFM4p2pACcddLyYmM",
  "key2": "25Q1jkv4zoT1vmnVgh325f2LgqzizpunNbpFDRZyGwBM75aGYcFmDQb4UCFrNHjy5ucJGpqQWfbU8rExynuRLbvR",
  "key3": "3QRGCBDS8vePeu4rkkaiKoGpncR1Ge2hYazux1faZZj9hdM6rCp8itKw2TDjpuHa32Vr4ohLJFrb9DuAWBavPfrY",
  "key4": "25NJn5LsyGAzxMx28iWev48x73xrZ23uHThvRbDi2CQ4UiM1G8DcfzjUTKHYfNUmazyePwiRVN32JYpUtVZVNNxV",
  "key5": "HHCktBp2nR3SiokmheAxCxSJ4XryRxjnvi8CDVwF9QgGJdEDwMGy43JnLAvr9jMLGzTphzHfiRfgpDcSuHUjTwC",
  "key6": "66k8Pt2xKEHxMZ1hmCcTvbP1iYzgMrvCjD2jaMED9s7mFmLgqVDQVo8XfU4rezXgtMHfVgDzfXJSFBxLQgYxZK4r",
  "key7": "5cpb4mWR4AQRy1hSdN3Nnv7pA3DrkXtD8hPmWXsS3ngtN7TSs5oAZxR6mq5srNZD9aK7BHhAiDBSjGGW49uynaQx",
  "key8": "B2TQ7W8ups8Du7V1QFk6WvpoqGy8Zyi1FYgZB6SosQCt8dxXeSeiHAcjDUNahDrTX2ttfiDENYv9wxTkJnKbAP7",
  "key9": "5nJWJS1nsvBxPZ6cKYFvQbNp3JZ6ZtsJykuV5VjZXo6ssyh3PLqw4CFbua6nG1ozLQ94cWvpTcVTLZpZvnDGoZCY",
  "key10": "41BdQeJNpQDYT5vrb1PVpdHbbvonr4gK1sk76Zg7rWMeNiV3kbUGVpUVZvmR1yBLbJBT1zuzTGmTe3hUsYbMLTD2",
  "key11": "3q4qXydFQFqM5PQcNizK3EYEGqYftqJmnA6A3NdJuei9dedktuFXJ7gVGZsD2Hofn4WnNt5G35F8Z4rFtQPQGz2W",
  "key12": "214ubS1xciwW5mPT3fZ6FcbETV2M43XYvLeyu1KtvvSr9TfnqYKWEakYVTvsyDDg1ShXJvx9ZgEc1tGkM2VGu68U",
  "key13": "7TZh74y6L6krQ7D3N1NaRes4ah7Ad4oRzkKES4kwjguQRx7YeDG75DsFoDdCTx5qVnnbJbPQXoJB9CZvoPbGHe4",
  "key14": "392UMNZmjqKGn6vqGfQ8XcPN21P3NYMtTmDvHWxztcZFd37FqG3vD8USc7dKz9YcHRUBVoe9RdWL62odFKhMRg7b",
  "key15": "3VKxDvRak2CiSTRQQkY2P6fE7F2HagbNHXmH52bwf323DQ85qrThgZi5EPPuMBgzzWBHVL9QsHVgKja2SKrCKiQw",
  "key16": "23pmwoNsAcPcTdWBLe7CRL8nWuwPo3y1urQDu1hLoC9Z5ZdC8mTFqsAiSyi113SMsaRmzmM1K3u7Vx3KG7RpcFso",
  "key17": "2fRuwDonQHoQLGbJWXVjRLjRNBYTQJfXzSGToKM1jX2nsArG3yXD6WUJidNcfHo3fGE6N1qMwCAtYU4EH1SPsaVW",
  "key18": "3b4AUwWiM9EVKHHdC67MsWt29TnvZR8jxdzZt8Pu3YhEXfwYEr9bfNJyc2TgvQnHardmhJ25pkxmtdevNiWp4cgK",
  "key19": "2VJpi3T1LAVFoWJvX2VeXyMhaRk8MwhwBcEL7WkLyXx4ibi5bDDtQpt7kYkXbz9TRzfXZq5rM15JyK5x1EemTqoi",
  "key20": "4zoqviUDp4fiL97Znz9HxgVCrQUYaRXHiFMDfcWsP4ME8SKQjvokCnc7JjfYs89QYkVmdCyoUYkDJP6sdXTc1FMy",
  "key21": "47SzchMcWApocv6CqWHMG7VEskNNbwqFP6oQsdRC3bkxpbXJEDHE6JtdrJ5tVukRnh2kK75D89nwQ4B1aeoHyZaA",
  "key22": "2bVvTW7yQ7dYNzPNaBrw2ybxT6NiVf3hBhbT8bYfkzqgTx7cXogRt9ZVkQWkg1Mb5EYDfn5az7o1zRBFzUcLtXJ1",
  "key23": "2fYGV4Z2XCzzRoAGgsJuhfThqmMudWgxj1rc6JwnKkz8tvS8PYf1DNpMG8XCMGPo1vsQjcskdvFyNiqfoMGCLu3i",
  "key24": "5ni8p3c6bUNxtNAcVjmZbFXrVscnG1aGgeFCqzLfgYWLVUnSFkgWKgBAwtJswLG35YypFgwjz65r4cFNbU8WJLie",
  "key25": "3gnAotRi2vexFEuxF9dzihwSf9zX1p4foHBgTiqqUmi4qqfmX9FpeTUNpuiAFaKmx8tyjwP1ozx1ktWvGAATh9Wh",
  "key26": "4kNKZmeh9SuSud1bHNsQD9H6r6QV3bUbsanYXjhD9PdFdQBAB5CrWYSMCqYEkcAqgaM5pEq2bKYjYkTuaPRH6JKf",
  "key27": "3PWTa3oHfzXSZcHyeAv91juKUYYhaYbHv1CkPUdDtSXYNHLPUkVrhThxLbKq9xiRDLge3BeqYY9NmW9m4c9iiyug",
  "key28": "5GD72ZjwTbp5Z7wtreMe2uaNixeCy1siK2rRTqpcDHBdjsAfXd9FoBkVURRp8UvMmaanXnX9zQk9CRx3Ajb8Th81",
  "key29": "PsfU1LNGNCPV3K7C2xxdBVgnSuN7KBSjK6hFKdh5AsHUrxJ3sybGs8RcnfQc4XaWaxUMKL5PMDULRwAhMBi2zEb",
  "key30": "35FFPkttcVobjNcA9b2ouNSgZTvhuFKJK1MXMzfJjm34vkbrK9DgKnRtv3FYDjSe1fNGXraXamgGHggAb899Z5Tf",
  "key31": "4nGWqE7DVMmhMGmcFV6ThchqjtJ8KZBuwC11uq7LHJBLs8HswpkCz1ZFKYCRLpwsvscrTbwadQLG9oPQipPJyHjm",
  "key32": "3BdTSgtyq8RG7AB5oMnuFsEr5KkVqouCeRrmETpYguKwonHe9Qax43cGgQM1HvyQEAGYQqA99gkGgY331VbgqvG6",
  "key33": "vaSLJmmNBTQMCVArDSv1Lw4aZFgS8CSXfrqwuouvRwtSJf2EfxQ2X2EDSqpNhd4iCumPYxRchwwZfaebpGyKM7o",
  "key34": "2prUa6ZyNDxEc8Ub79UybzNL6VcwcMmzVc4o83fuzGXofnicLpLf8CPmZo1NHBjh4ZJtNtz5PRDX1SrDfsYMCQCh",
  "key35": "fHPhbQS2on6cbEDEqzSyczBWFDBNWvUAFhStPJS5vHTMLRaSeRq577uqTmqF2VUv2hU3KyLutqaDevk3nQ7RG6S",
  "key36": "5zhSiSgZDAidiXH597JdmAZF4vbxnrxPWEXQfNRZiu4Za1BDapJGui5ML7smKeWj6LUvKiDDBuFzEK8uZg3mNRvb",
  "key37": "5KTMeWuUxWfvr4j9qCjhp7BJES6MsTaXUueJ69tA75vURxpAdrWkvLRuUsHvzv8EJ6sub1TXUtJBxPrrX7s4hRnq",
  "key38": "MdhERznsSTvXtEy9XnQLcw8WeDRrWG8N4TUd4gUGMMGi6FenYbZnANqyWbS6zj5ngFoUmxefK575bXBqE5cTd9S",
  "key39": "MNEKpf8w9CJaxtxJKHh42u2ZQ2BAHQeg8qrnZkBj68jivMoBiAQvXkSegeK6Jnxf9tfc4Dwp1w6eMGCLmNYoGe4",
  "key40": "54aMjsSAE1M12VVQdFx4eQ619BLjR5TTi56yUa1fwTWGj7rtTsc77CiQAnrmLNdvvGTjtteQ7FwiurHhpB1RX16",
  "key41": "5yzqsH1uHAJt33o1HxuZxQpwf4hzCKbLhPE2TAzjrdvgd4qRFs47gj5LzH9XoBEEkd5dxmhpEwP4wqzTjaFghKmj",
  "key42": "RVEggnBNpD3vkSPbnUTJfwYMbFPKVy8Bsc9qfCnsD9dtK3JDqzpBw3E7Xrazym5gScRTr7JHdSQWZVj7zPkpy5r",
  "key43": "434dgyK5q8W8sevBuQ2Ej1GiWp6TAfyN5TS1zdgUYPT2pTxPMjQSzXvpznYtp1hMP7Pb6RJeQFDXmuWw58Hx3dmt",
  "key44": "4EJRn51PXqTTEbi5eD47aQKkBBu7LPQehKA5M8gGDVRiMskytbJJn31Tsgtw3t7maumPcqQoDj1GSkddqb5xoWFZ",
  "key45": "2tHg7Dgcmxgu3hiEBKCfx7xC1wfcUKuKMdyVn4YuBJbi4j1F8ZZan5wfmGaJ8LesLAWdSddhqKnFzLt4huJBcncL",
  "key46": "3PQ3CQsDDdaoquozESsqGEqnfEPj18McqGK2UeHtBrrWJArX4TMDwoj24SgYrPEqpFANfaswamxdhrN6NBn9h64e",
  "key47": "Sd3gc7xzWfNWmZMXqPRDidkF9HT9inisZmHgxxJ1fFMY1EmHdQjDuSzpUMSeS63ekzA6YqNwuuoxxdpkYThm62E",
  "key48": "7Do26Rz97zA488nRYV4n1KRcFmSh4UFCarSipHgwq4YEihg6zP5BoBqfbuNAjScUByXD7ahDktXKeNcTjpxA5Hq",
  "key49": "2BUZPeYQPFv7Ymm4BzXj3bXENieecEmbTmvLFeH6QpW63TLcZbjTP8pTA8ZrY42HUESkbQgPVeiSSU1MRJMazboB"
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
