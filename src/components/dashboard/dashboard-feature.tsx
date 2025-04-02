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
    "9o2kSjxZh4PyDRYZtRwW9yVAy7V2occhGqxqLWW9LwVXfLnE5qdz5z9GStFXNeFV3tM1kcT6nfktCxLCcrwHtFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TP6ynDeAU5wh21S5ggvUTkYp7DDPy3iWZ8qwc6qLGRJbuyHAdkcNMoXT3rzFXSLbUfw9gGsh5YgM4Lbv6TJk293",
  "key1": "3nb6BBwYYBCFApfMPFRjv5ig9QFrbbt38BmHpGEi7dp2Jfyh6z9sQWaFA8hT8kCoiiMkd83m1K3GNc4L9yPUrZ8q",
  "key2": "2fZjLUEXzEzkn2JcVoSQaCEgRXNgE1qA3KRKMkWftF8jycdmFeRkx44jQsgaTHgaeDdKZHbh7QTNMKTKCdJTfVkr",
  "key3": "4Pii9V1ffuJB2XqqNDPYuQ1nF8rsBY181iiPE7rAu8L1hhAD2564HsMjuAuahSwJTdRv9hdaTvYuA4XiqtiJLmNE",
  "key4": "PDup7U7nfRu1cemMiVziijQcfJ3cAGv39UPcBqbRehiZnLtcLJrjn7VYUkYLH8KH4gWntLmQbKCjs1WXCBC64Eg",
  "key5": "3w9hwP32h6WFAWuRmLdK6b4XPZHsjCHJh1kxVzY3MJ1VYy4sb29rkrdvKSjS75tkYEAYH5muXjx3hPgJjo3w6Xhp",
  "key6": "qvANAmpBgSPUKFQ8HVAPkonTD36yAtrppmDGcFEgwsH6QhaWMdTt1t6YFtbyN3hb3yhZzRToPBeps9rA1HXsKVT",
  "key7": "5cEicyyGA9gdpE7PrdBQ5DWvEWwBTKzvFdM4WC84ddC7VAqMcwaBvXMcLzruG8ZobbkyEyWLoHorhFeYfYNWcFBT",
  "key8": "5HyEYCU8kfANBaJWTt8VPkCPsfdHZ7gvRqLUMewNpQmo57vS6P7hUeht8yWBcF2ePa9pWak3xN1faeM5YYTscKno",
  "key9": "5pQfBTzogaq1oqJaSgqtVP6BLb5STfYjz3CqoXChH8owTorjTy3zwcHMoHzCnQjinwNj2NYfQmW59V6qvwJ3M4RZ",
  "key10": "4wJzJo15mfFCo5gvUh5rVaVu5yqb5xVSjcMu8oQXshA19NDa4TZBX7dhEe5v6VrY73gJmr7HAFqhMz8LpZc1GXAE",
  "key11": "8JHufT8H3a7mscvWNZmjxNCnSrYWJx2RhGgkco3LsrLzvMvYSCP1zBhEYh2mWuMzTkTfbBwgPFHewvaJqSTNshP",
  "key12": "4kKBgpJ1hHwV2t9P3qgKc6zmerzaoeeQmvn5jR1mEcAd4ewCnM7J3K7xZPuku8hT6qwtiaUyLBRySJdmP7pTkFoL",
  "key13": "4Eb8XxPjdi5Ge4v7Chv7R6AAqbyE3ELocF6adovjakDzKoaqQvxbbtYjNy7PK1nwLHs4BUSb96YPn2B8Hd9UJetp",
  "key14": "AbouFVyNnTCVJMc7YyEcgmVBd5wz3RoMwfAT6a2yrzH53FpKGX47oniBafYNMdKiqpk2fezyz6rLXNund1fVGov",
  "key15": "5Q9xuimXBMzeiPG1baX6VepWN3nbKk9vL4jKPemRJvXCJtCbr9Teu8id8gYBi2oXLqGmFDfKWkiMXTTSGDNnZdb1",
  "key16": "Ph3byzU2qHjtjC8svi6HsuwsWGYFnjqxZFNYkg17nrSBXY4MSfM7LHBaCZyG4XyiwmtFyCJSsPGzdfkdDzUhMys",
  "key17": "3GZd7aH8Fo6TT9H5KKGrk6CAptSbyJ1tV2DKPAz65xGTavhuKX9YZacgbWzK8c39Pw1VpohaaNGxuVHSCqeDH3oi",
  "key18": "nn3DozFFjnKThrAyvsU3Yc5k1xdXseYXJ9DC9x13bxa4BnwrWQoR9Linz4NH6V8CGZ8nzCHb7kwqCHaCTqxgNc2",
  "key19": "2GAdehqJEugPu65dYy8XVSwqC9Z7nghkwmwNiR1WqKeBEJt95tdbRUxGjg9xQW7ttBWvXkwUxam3NJz29DpCFvz6",
  "key20": "4aKkEha5fA3TcS72mbNVENvQWtj8uR819YVywNWujSVQ8KPYKotnjihHPj98pu2knTyyBbmJyyjZPwzyhLcQHxsk",
  "key21": "3ZdvTN1QuvEsFozk8C2WAMTbkU6gHnMqRtMTRyJaWd49QketHbCEpC2x7NZhm3XEnxhYZscUFrnAipFikvVjfzGM",
  "key22": "4HcG5BM6hTxW72tjHZnHjzkghwdL94kNJvazjoTtTocyuRgoe9RHe1scGWgHfrcgS8bLuYMtaCoZHGE9X49i7bnp",
  "key23": "23i5UU3cvBEewXTv5mC7GWpS5mAyvfF8WEJeWXpNCEJGFKPb42smtmLVeYmJvdik21vCr7fWpRMTGGuSm7DRdZps",
  "key24": "5EUsrdp14nhtPBHuVMhaHJgzvQAwcCML2buSnFeswZq9oDi6wg1TQ3SuYMq6YpQZQ7UDwZ2jsHbZKoRt88ouupX2",
  "key25": "Xq2tu6DtKTgkTPMrTTk6j88gytFMpwL6z4G9xCpeQr6iscSQs6dxqA1ZNvQ5C6ihFCyxUdG9s1mgpVJKT3Fh8EK",
  "key26": "3KJ8RdAiSi3FwQT3sXByYdZmW5hiq8P8rri8uxDRYTC5zmYTDF8BQYLB9FhB39eaC1TWjJY5iiN44vmVNnZP1UKw",
  "key27": "zyxjg6JrS6peb2gBtv6AxmwCokdhqbAAhTZBqDnWTBkyPWGen3V7iN6dso69rWbqnNf29ZxyaLtxS1b7UKNTknY",
  "key28": "49rJ3FVskUkPF1MCPfo1txWQU9NUiivV4PgFUE5Uj4f7vJNNDbYjVnCsEQheuRMH72khqd65zwLzzrPnJk7dzts9",
  "key29": "2a5CoJCboMGPmrAsSyFtKrYUmafWZWa9NeKr9x6zNsgNwARkSPhufV3dJzfdN7qUpJxYwPPDREtu1VPoDTGsqvyi",
  "key30": "thYQ3vJmkTo34XnwJHJU4DsxmVnSZ7GDcZ8nRbDujbPeTHjkkZyHXm6Lk9vSEbWe9SB7VhASkUiGuRnYxmbKnJG",
  "key31": "2DFoxtmt96p4DCMFRjTSGAF77NJjxRqRxTkja6QvRvzAbjEtY4yyuP2uesGYiDeXhUk5mLRqHq5czDsK1eiHAgBT",
  "key32": "33sxorRJmWjv3KXAQNTCz5Y3ypTW2qStcxwMsDNHzc4MPK4UrhFMEvMz6YKZ8t8RmKJNNuswjkLNMyeJ97AtHzJZ",
  "key33": "3K6XZKMtAHySx8vpbsbKQ2QwwviLbuH97v7jbV5rEkAMit7FnvgVbfm4XLfojYN9ber1d5Nd7hLNsA8kk5Wdq94K",
  "key34": "5Bq2qZ6XswCvSreWYLHc5RxRaCwkZyithNekC2fxKkM2L5noHNjmxLsMM1WJdzrwGep75xqcSqHtXwCHsKMTaHgb",
  "key35": "4zRPqcfkkSUGSUEcV7NJy3X9dgtLvD7nkf2grgRt7UhBdB465wrFoWWZDjb1HLowAS4GMKAmYV79qisec62VHdrK",
  "key36": "623cFsHwF9PuyCXDaG8qQw2oa2VL6gRUBdv2zuaL6dpUekvnmj8uophzwRmdarCHSduNoyxmVmkeFpjvTV4aFBV2",
  "key37": "5jpSDw33VjNbc4tYpfQU2bMruJSoNBy459zC2GNTVWEz1k4HnwBwiNko2vPHtVymEv8BYMJNzyRnzm3PABjstRTy",
  "key38": "5Ne7VNkGcLFobLkWHtxTpJ5uBkpNkpuPGoPz9eGwyqmWQRTEEzydws4u6BRTDXNqtexGEgtVgYvnASDZAGZpQuSe",
  "key39": "xaG3dJuPirgWhP3THqt5VuSZGhHo6UE1ToPuQWgUeUgskkkJHViKbkkLEuwE7KgxBDoWAvZWYwhcs1qdVBQ7F5f",
  "key40": "sKQDn8LF71wAvC7LxhvDuYrsEsu1cxGV1RzzWTXsXSTxeE2qU3RMRpKRH951QMVQXEoRvMaz2naEmqreKQDJXcb",
  "key41": "46o9FgNEwjgNUydaZjaKzk37dBG8kq6EjKBPw8B6HjhmDX7Y2fpLneCZ8yd6BNwhnTbMsRAiF4UTN1npZHy6nyxL",
  "key42": "5WmJ2s6NpnZCJkuE43TYUZLXm6vKPjK1zm3fVWv64isxXvqxSHMpk1eN4UZxUJujbPebdnf3rmsoamtNMCxkYpEi",
  "key43": "64q2uizsVFZsRAt9sKPwcqRBCL7ApAnPWr7A5WkQq2Jc9dCDMXBtfxyMW1oEGNmnkVfaWGXD1ozBjvEJFWMcnwkr",
  "key44": "221An8WLya9cqoVxGC6BwsvhZktUuQryTUaDa5ZHSmBJpjmmr3xaXDF4AoKgs1LAqbBr1bBX75Wt6P5FnSmngi27",
  "key45": "26SPX4cJAvJuhxgKMSFBRJGVyY2ky9Nj4RDf5wJZ4CKd8AbstT6RWZRVZruHPfqY2fSANBvK9NPkAUL3hyT8C8QR",
  "key46": "3xTkrYcvqPhyX3BETpJ7m5eR3NECpVcNzpLe9fw4ExvBuXxNrwQrhUw4tENW5t7tc5WCV5to1W3dmeoWkroTHqCd"
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
