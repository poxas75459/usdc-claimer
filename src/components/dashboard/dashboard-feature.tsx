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
    "3rqJBcYTwyroD3xszhjf8mCo9zqkio25MM8TfGzYjSeZZnHBsTF57VAS9HosqFmU8uCKkWP48JVV1gcZ5fh4c2MV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vxcfUPbgamXWL8P2Nx9UQuiF8SJKJ5rA7CxmrYQ5sJoDY9heSQgXaqEHpcfveCcSSsqbEk23H8hwoWaTt2LqQmd",
  "key1": "4uUUJfJ3THxAa32asjKNUiGfJdtR4ET8615pFv3iToocL3MYcPiofDaJcLpXhJHshGdbpJgURM3G7g8gtZAMxhRX",
  "key2": "2pM9Yiyicys4RS7CaFd7XGeUqJiE84FR7hhmGp99GReSi85duCfHBX8FSH1fQgbvK9e1U8iEfjTrBHcyXrgUcPQ9",
  "key3": "MwAcAaM3G8U21tYnfGFJvHEEsqG5uRZrHWi3awnxSVZ2KV7CMjsLUGz3CD2E4Ltb8dV34CcJtgtEcr7yBfYz6A1",
  "key4": "5KTwp57cEjnLFypSfufyuFyC1LkujvU5ckd6N7pSRVaAHxgGieUAXM1bpJv4NAR2XayjZsr6xNPQZPzWEMS359yT",
  "key5": "4bwzLkEso388Je1W3gGary9akgUtuZSUGhVxar4fkSV6RtN9kbH2nwuNPQeN7VYx9edC8nKgjZnBJj1JWc6SH7jr",
  "key6": "45G2sLxiScamUgnpJhirA5wTJWPwjRSVB4j55gfzagHaTW8TQmCgAjddKXrkdKArtpFTvF5WNXaD5C9NEMsxdYj3",
  "key7": "bVxANaspDMafDiuWnhe5UD3yWxJXc7bYPNyXHKF8DagvYKgt3RmZvYTJYBU1PfmBsXAkzWsKy6HrA1XnJcQLd9S",
  "key8": "2kHGYbhTUG9qd3hYXBvW23YNoYFvo5nMbobxwDyK35EHWLsSXTxWRgnRGKdpVix2rFTFRVjyoYwi6dopfXU9meee",
  "key9": "3d8UhFhMjPBhwBC7QQDnrPkuZanCq7Ejng4fe2Td9bJm8FsT5xdod4WSwm6Tc3N6tCUeqMgTBGgYNE8UYoJoJvZN",
  "key10": "4SBp8ZvNwP7NvtLQAV289sKH3pgXzzy5HGBNK6xuRCjve5KHMhcvVSRaLD6wQU2Z5AUiFGB4w9yk1f4Wcvh14Wn9",
  "key11": "4KrZCbWcGbywxi9R2gEY59Uc37jtTSi3VLHnLSDC4eJXRV1EXXNgDwY6VFiRn1yYYVHpcDwbPSNqG5DQ6QoETxoM",
  "key12": "5vR1ZkARTcEej3FXs6NdNXHrmnrDDqfU4tn7GSVa1mejSBE3T6JZtkAMsfKvVDpcfbADnTyqt5CMHz4ApyMsUwJF",
  "key13": "4atQQ59eRbKWr6EXXHEdib3vL25cGuA7eGrGWBRHrHhWawLP4Gbn6wkXsjF4iH6Y1bjHu4SEJQTwCqmMmFT41KJW",
  "key14": "5pkgb1txuf1BnSeCvpS5UbkUmFKEserjU7VnVtBofq4dvnLG5V7iCquLPwZGvHUCF6RUWf9iJscP7XoZS15a23R7",
  "key15": "3N4SFr8TtR46UL3Vrtq19KR9Th9QXBdstU6JAqrfkG2mmYiuKMWgW1cR4pq9RZBvhw1ieQwkcmyiE4DHWKb2sPjf",
  "key16": "FXDL6xBxM3wnErVnECCmpQbuANWAn7hiXmiDEaPixZXebsyB33kDUh6uxTMotEoxNDAcMrjEySge38rdQ6GhcnV",
  "key17": "4ftcM9MfntqaMT52WkGYztLpgRSVPzxwqP2ia27HxkcDxwYHkvmKRZEeZGuyL23kxe2j4GjeJQ8GRC2VqdqiStFA",
  "key18": "4VzzcyFsL8PqKuzeaAPPtBkaMHPipvv3QR1sxY2aCgkgjgiQHc5WJoSyoMUXMbP5Xy5Vv8eqNxHyPBCLi2d9UpCc",
  "key19": "4VVJGLdfSqvbFnwhMxMbdGZB7vKresNt7G2a3RH9YgRjYPPFWRopAMkhDSidGGNRytDbgtFyyvGup4h9Cxf1HANS",
  "key20": "2yXVFZwb7jvpB1q4z6VUm5uUrefR23Yoh5z3e9FaEzXNbBuLrmo3j6FpWD4576BmTM8jn1HV8NxX3U28WmVYMATC",
  "key21": "5s1kgbiDTToPnS2sfT9KVhYAjMyCKqr6GvTDzZzZiN9L5gXpnXWY3WPi5fgJA7ECWMFYrLzFFueDwKKdshnQurj7",
  "key22": "54fYffQJEwD5R3Z7WaMSQxkMYZCkufUQByiwxzMHwFawguA4GwDhMiQRb7g2kgt8bVS5t35z213yw3puoPUfCb6X",
  "key23": "5xASWkJaW4oV6YrkdA59Z1PcyXCxApFdU7P6cPJEPsun1PHXuVSX3RWxKakPjMyDQgFyuZKWsTSRwLEgmB2Dw61a",
  "key24": "nNM1E9nSXKqD5HjuMe2PLbvDfAGWgcPPbVAdUmyXFpQttgywfL48G5eQMR8QsTCoFdvp1HJ669eufKTTC7ecYxV",
  "key25": "2zj5fF5HLYE3tEXx4TUJSZsUZ1GJU8Q6vWY3pg4C89Mpk5Ho12c69ikzgJxwD9RGV1YAmqafS68Q9JSrTZkpzjSU",
  "key26": "2LAF36sXes4QXY9VXP2N6egoYejBTaKwG3Q8Cyrw7pHumnzLpKxxSERBYireU8kiJUqBwXjb7zpZ8rvnHojyF1DE",
  "key27": "fSDzKVpbr14dhUGCNgR8K9qrmvwJpL5TkK4Qt7KQRgbcCUa4AgEyAWiPX1Hx7g57bM2oB2qdpEqajGWA6Y7QV4Y",
  "key28": "c6SBHvx8uByTVvaYqzU5MGjDjUxekbS5wkGUFcGcqKa1DibaQk3ahJwcsCQfR5i1H2hPmVt6GAHyLpZcgLSozGK",
  "key29": "5Gkzp8Qg5RnfMUkJvL72RMXZuuiJTCwwu8PBxjrrX9QYrWTr3yR5jh7tNmnx1QhitrHK5sfkjvvzLzw6DsVTPcMM",
  "key30": "2Nh9ib7mQh9gLK1iBbGQ6wYT5A5QsDZeRDFF4ovYc3jF1o3VUmUCVJJfYnogvP6sCPzeN61gU8au5z5B1dZYNMdp",
  "key31": "28YDYVUKr8q1zC24z4mMUh2To66QfFwUn8rjE445q9LgNAVwhHAJ6GKt1PbPmJbg72nhxJHuS2aDCms8gzMVERxX",
  "key32": "4exkqPG3M2FzufEuz4bGupu8cY5cX8njCrkeP9ejViH5vAxfdemYPfTgXNWZbJSVa9XjZSNLKUgRHwFwRanaxtQf",
  "key33": "35TTKa455s1JTGcg2XvS8MVxszaUbx2e371SMsqfuQDAAgoFu3abhNHjLxB4tm5VVe4fvrPfHD42joEFXUjsKbXQ",
  "key34": "66F3JT5QL4zLfsgTLKRKrNtmuMaiXFVYtUUXgtvPDTwxRa7LfyDkysRo4qFvqHacRNY1Qh7UW4ShL1ZUDSrA6Jbp",
  "key35": "e4QMhYncDRX3GR4L8Vy7Eu6rjxMXdGeWJzySrSgD5dj4iac4qg1dAmgiB3gvoeozb9jgbufUt9xTBq4CboijuZH",
  "key36": "2Dtoix9YhbdhEiS5qWcb7YvTaNnegY8mdGbL2uLirLujCygBb5V9QPA9jsxRE5eDCr16gXYyVtytzkds51vAdvee",
  "key37": "2FERG6DDvLbHrcsYZHrxJwftALu6zATTQVYz5fkTpu8askKAvDTkHJ7qR7P26gwNW4Zy3nmMPkTCjW6NX95BJC8v",
  "key38": "32XnyPYYn5JFwM8QgmZr7GguS6vUPJhByFmH4Ggy5Ua2vESdewGDF6QhBwDhMxs9g3XPasTiN8Wfcx6Cda2qyBc8",
  "key39": "5JuDtTv39ws1pGeyEuNMndAFNzpTXJhxDL3zfJ6XsHo4JSr1nohpdGwCrsYfrAev69bkEyXW22NeDdeKtnnbMcZi",
  "key40": "5399XAsXP7xyGGovAdVu4WMMHhqZ5uvv8oDfkvE9bvhFunkSsnwwHvFF22wzt2nSyraj9RSZPc5ifLwVTXuTEEFu",
  "key41": "vUP3ETisTbZA5XjDqVqtZ13YVAnwxoszz1SzV7PvPG3WJTHaP6nrupfi2e9cyoKAA8UKhGhWcwBBakHhBpjN4t8",
  "key42": "2scduFio9FqqWQ1Khpf1SNzxT5Rv3vu8wLtFzAcT4qPYDpB7rDeYsDVUCAyRBKeYbp1xVBh9cA7bnpFnX1U382ed",
  "key43": "AzbVF9cDN2xEnkmAWJGWXG4b69ofTspBCpc5T6UCifMHLYX9fDzqjawJVcKdzc77hwMCp6uoG9UtRBwWWtxPCNU",
  "key44": "63ZSTuoZzdmAfpEd33SWGesf7DpC9jJDds312uJmmns7As8j6krdvMN75g8fQDLLR4fja58V9BR8ozG8KEC14wYo",
  "key45": "5EvGDV2uDDm6y4GhfrPyWhtAvTHjLvLY3yjcZHXZeZJzRHRShVZSeUpyShbcNuRuuWeBdoKferp9cEF8pq7KrHBK",
  "key46": "5r3wNgq1rmDRecp7mzH9YaSp2yuzJfvkSrAtkRz8Wazs35N6vZbCDwhdTB1SGSjycLB7ZGS9iCFaLFKp2CW3byka"
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
