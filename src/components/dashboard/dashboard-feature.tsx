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
    "3yftvdfAuAcSWnUgMfm7EXF7CGq1WMUGboLXRZY6ai2S5mZSSYsoxhsHCtDL7PKER66CwfruAyK97UoNGg7c8RDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dj9GUkjEkhBLszRRy4xy3Z4Wkk2un3xHLLaiwZmnm7n9LoVaBxcNJA5mHhSfvZH41NtizehzKiJ7Vno5Z9odXDV",
  "key1": "3FiEDqdhwAwiypKiiQU5PWYYiJs2xPPNCZbWyjmFsr64yws6hJiYEjhxjHCY83TTA4Uw13eFXkVUcq8kKjcKFtKz",
  "key2": "63AjmemZyyJMvP8SAjCgMFgBKGWFz7CDfHtr7sEyvddTe1ymiFSvWKhJddfBwybQz6C5ZdswBPpivizJE9xrqpPc",
  "key3": "5TBeXoHRxDda1WDkTPBXC5so97V1mzDkTZ64v9qrwtQLRHCcRt6L45x25kGmUiE6o94DDFMM6h8aDQoyd3nDNkXP",
  "key4": "5PbHmycWdJKJXbFxi9eL1e81VQTwPb4nJYKLVgg8mJBp2gz91EB5ur83s4o8XVd3iTAXfBx6q8kKHCpJxoLP4kiC",
  "key5": "5WDiXV3piiz8fpienQwFNoyaMKkg9gM2F5toVf2MdKp1m6wHTxfQo7daTetXXykVUKv3EJqsNnJKf6H3na8tg3Hy",
  "key6": "5VtfUzAwmvjBH7BbtK9438DxhstqHKbWUMLDsyuZgLJ3ESCqMBDqoQT9LN6eEg3QwRRMvkp1R26Qo11r7dJkNbQj",
  "key7": "4jR8DKQhgk6frezSPUv6EqvavWMLUVHFve5LtrS1cWRxv6BK4tzRX4P5H9v9XD6BFaLbnvZ3cDVsabE9Zm5b2nqd",
  "key8": "4f37rp6DWEnPynSZr3wpNfc4URDnyoiE8rRxxXZ8cuo8Togk4oDPgVXJoxnnvexuTieuMBZue9fMN9K6bqMpYveT",
  "key9": "63TDPsxSk458pT9nM6qQcuVsKwQrqJDhbEPuLFz9RTTpSpqGFvrqWXmwdVen2dAhTEkb2Rnk9nJ7M7bszLLrH6sV",
  "key10": "27niHz8a51weK84ct1JVxcL9kaps57rHyW7YFAD381SvxUjJfydLK6jidC8stCReiCr7rg7He28YdTExXQzY5Vqc",
  "key11": "2wj7uEscdf1kDUTYDbXXn6r12nPFogf5Zr6A6SVrKnpGe1R7GhmYTGcgBrJCa7Rih9h4ogSiU1TKaDtkBVdq7wvm",
  "key12": "2RXsSVWTLrzgmGFJLfuZvhojxuTbh979JsRxyNrh5sUcGAQtX3UfGF5GNWsLU88bQNsKY3u7XSfVk9FcdMha77FZ",
  "key13": "5J7H4h46HV765pbRVUSPgt48XrLQ8sZSP1M3LymUfdYzKVWnyrjQm3vyjZY6Mgfbwc3va7WqfF4m4vY21joRJQn4",
  "key14": "2Fer5PLzHeyMs6Kt8bVPTWBJVDtdDmt9BAx6Fts8zQ7trejhBWKHxNzBBfejfYWVj3PP59i5HYZ1qVyJbQgcVHb2",
  "key15": "2Bxoux416SSavszQxmURJQRciBJFrLw8JSTndxKbeVrgt5AqLuATLjRasyzkxsCV47v58ACqBmMrQYwahJXGDeRm",
  "key16": "351nAUKTBULBa879qB5JjbdPyDKEcEwr2HpwwJDAZv7MTBssGXKXUSFq6n16n12zDcrTG4sWjz7vKFdwNBTkKCi1",
  "key17": "51Dt5Rwo2kVf9McsYwgHu4kcfu81tsZ3uLjt1dxB5i54dPbKYBgqJnEsTd1nm6M12czQA17jmw4SrumDTcKNq3Lr",
  "key18": "3h2HNap3k9PKVzEucinrKDhAJ1CTazwgWSTgwp9Rd79eyTNGqbhi4N6vB6nbirousptLPijYoooN5zNN2gd9Nace",
  "key19": "QzmWa8BcHs6YK1vUAFKRmxProsXCDZKHnzTQET1ydjL64Uoiqs2r5iTJhanZfxuxfsNWsrJqgtjPuiiFmTbZ7yC",
  "key20": "abCXz3jTYtyMXJgPFZuqL1seKXZNRg18TywyjE4o4aNW5bbBDi5qo9VgdJVJBrwFAn4mNFM1UHoKaoeU5tCq2xm",
  "key21": "zXnVMjN8NfuE4PahrzdEKWNGnfWyq8kkFGz5CuimcnA7eiP9MYanG2xoJbgMbAkapJqrtykUtUKdaY8gSwCg2EZ",
  "key22": "utfwA5mDK86pV8s27dgLPtFnfKoPrHBPyqptHxdVka5vnBq77CiNXba6xp8ravUutMyfydteJHvz8fU4gDt8LGP",
  "key23": "ktps76BFy9otjcPZUnBFWhDbSJVGtyLLVAK9nrPM5qhDNnZWKLAo8UnkfzeYKwb5DB42nMvDbno5BfRWLBCdBti",
  "key24": "3fuohZ1o4KvehKz6TY7nV6MzMWdajgt4gh2ZNpF7Rdc535s1j5Fo6LDCKB3Xgz4t7j2twR9bLJvJqmZ7WQqBqnVi",
  "key25": "4C8W13fFDn4CykYeR1GSsSrTfBczNf2JepkAj2G6oFozqp4m2P78feNMaKDkrQxoEuJR27fa3aqdE75SmtaX13VH",
  "key26": "4rPTwCc5HuHmiQcEkmmqjkS6YkksoNTs3XCpay5tYz5bS1R6jG4nqDRrA53QemQuLe25JFgfcSJAMUm8vnxs6MGS",
  "key27": "5J41GSJHF6bnmVLkDGSpo9irVroohYCLx3mzh5sXXKjRUpqTKbrojJ72sJ3qy3zoet7B6Px7QBhFNLRrddVCbXtt",
  "key28": "5bgH4ppV78fBQLxeBc6bhhAQpTfcoy2sQTKEKJKVg8DsNGCbf3Y8pCpwoYv2sxdWMPv62pv4a5V8Ntw7mLPEytHn",
  "key29": "3zXX1iwrc3RGoT8wtrJ22V6PYoMJq5frthtRrD5CdJhaMH479DpgG3u7V75n8sj9pDpqAd7sUA9XdaTwNMuFiUSE",
  "key30": "2TvACXLKVwzy4KwY341k4A4v5CXqFGiYbveNthHMnmezKmwY1SCht39JQEcoKs9UqaeeuU2KKJLLcSEyPqtWxvkM",
  "key31": "5BQqppwbXkbincZwteDMqTHLTiJkEREzNDJguXaZtTAkbwq3kmGmJWcJyteKK1pSf64PG7R4hJidSK3BeVytxNHF",
  "key32": "2ed5DgzH3KrR2TED5YGrZCNiwF1ptYpW2nvqLQSPH4VJma9w12PotaUsfY22TjWBgWFjn1ve1fNrYGbgbRNqF35s",
  "key33": "Fsc4fuUhCPUuDipbAhqFg9HM7NJCMAiP86byCBEYZMrekj53QunGbntW5agrkBp55BkXbDmtKh8WZSLEzkaJrGZ",
  "key34": "5vAYSyDsBspWjUiUJ9pveS8H3QeoqbTt2zdtsJY55TZkNStu4SZEXWa5Pj9W8PoMeAYixcLoNy5XNanN7tWjZhaW",
  "key35": "TvyBACGS5z64ErtUraiRpZcNknMTFinmohcKdAtf66GKs5Dff5EfLZvxKoquBo9rxQGfcoP8RhF6PRNHdiVZvTV",
  "key36": "2m8gW1QD3F2LoqKAygAy9aiyfoCk4WhUALP4LpF6rAMuaQhB6ETDvbQxheDwaP4o7mL7bx4s61S1E7KVA4BTJbsd",
  "key37": "5mhNNg2hRvt92xkiBrT7FxSDQBLUakfsHvbyiPZCxbbGazaKMKXpxjWm2TiWbnDdWHmBxdfU1k1jTp3PSLt8cQmq",
  "key38": "3sxE4y5AMEGyEifmH73FpgvUmJZPBSuBS99RX8phGSnoJZAjLRhLtTxwadmp5K8USgCaCwshPX1bQ4rAsEpLV9Lj",
  "key39": "4zrsRwJGKiTrjaat9BNiQghAvB13xuoARkCjLwzc5zn5RPkuwR1kKvK6dmpkBpZusUwBe1k3N2EpQA1CFyVM3mFJ",
  "key40": "4XLg8Lj3Xe96zXvDZc67A2tCb4wcFWikgnoUbbdgHxMG6EecPYNtBD3SfQeCthjXY8txAvhFYUc5GcxgbXsx3CTy",
  "key41": "Q9QkiBLo8yoQScNRgFF2yLwCn3qyEM3xgXfDYams1X6eeenxXHnwVDzdxr29Z5J8jSNC2JY8vRXKisJH9b5uf4D",
  "key42": "2s6sD37xEiwsikBJCvuFGsM2JiHUMsGAHNmb3aLnpQTtfNyx2LVKiaFbQEGzEB9eGyaXGP3LfatGGEz5TNq4fX1w",
  "key43": "qtiZsBcvVPNMwg9Ko4aAsergQwWxaNrixPBzWc5qHdAcqh7k2AoMufT1cwNiqVaNP7xNzkDNNCxNdPtD7eeUu5K",
  "key44": "4PnnoSLUBwJDaSqj2umnxaSU59N5z3WQJi73ApHxYGCgng4GKwrnT1aRfuGwREkKeF1buEt93Z5VhViBHXRYMLzs",
  "key45": "3X3gWvk2BV3ACCL7S6iCicpTycoHdZGLu378f1ZK5xTMkzLjEUo2hUgd37Gu3Ec8vr3jVRcf48ekFRj8rbcHMEhW",
  "key46": "65Uwzw2zpnM2h2rEBHU7y2ope6UndWk5rPXGCww45Z6uX6Qg9cv3rEzg5C6pzimhQpvRzefJv1RmgMhzijFyNowd",
  "key47": "3Tvn7KeFKC6JxXkJoG286j2zZq5RVkkWFGrCzBxUZYuZ3YS39niRfoWq5Ejojwdyrs3P9MpR57u3zsmjEaAWcUSX",
  "key48": "qATBbLapd5KNBgEN3KMM22N4yrrTKxR6ABu2NfrmKfaYRGdEUWo2DLAN7xLaQ1coM6ZUSgGg4YDkPdm6zQeoE8Q",
  "key49": "63QuGcWYQ9DoKZ2JiCXMYfyu9mTSwViDsf52U2aiQr9Tgnf6yk155cGZi4fchkXqz9oWgjBeX9EtioAqkUcYFC6F"
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
