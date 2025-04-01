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
    "4Hn24PBhdX99QPcXizRMxVZUF6HUQPsAUwP2c7LHzxjHGJFQBW4qksWvuc8W3nHh8GMLqkbQUU2e7z7FBd5oCA2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33gf6M4Vu2V7CgqDaA5jbfbAhY9xLwKDiZdhv3fzZ4eAT811ypVje5hqxhEYnapGHpWnagiuQnDnUyPfZDvW4Ehr",
  "key1": "5cT7EUqPUR7954ip1eiJxTTQdhUxPwap95pfzUfiX7WbSQBxJ8y39Tk2JDdoRgBVsm96MvGLgf5o142S9DLzna1m",
  "key2": "nPweedL4Zgz2LPYP2TWffYxu1oXkw9JMBkeeYbwEuXTHZ4Jdu3Nnj8o2figBS89VEnACDEmrHg2pPQt8uTth9sm",
  "key3": "5jLBxJMQzRnuv5LZf1GL3gdVK99caGL9PJoSCWNMBy1h6HeHKcgK4Z27cSxy9CNdTYguW2kSsoiDzYx9271b8WNx",
  "key4": "5NYoKwmdesgD91oN5nT63WGonbvW8UbqbQixzmhZ9uZc3BV6JYSk1iu7e85fLUAAaNrvZ7QCty2k9PM2QrnoDEU9",
  "key5": "4Bt7eoP59sDVcmYgLQighyQKREULTdvwVnWY8FADsk3E5j1QsSUen72oT8WNWkNDQsWXYdHUhDRZMBJrnWNoctiF",
  "key6": "4As8WpoGTtaahxtN3uc44qXi2xbhhADi2xtR38M4CsjRbCZJDqvqwRLw5TUtyoeUNrp4KGGCbCnXtre5oyoXqZfR",
  "key7": "2Wt8e8wgPHKnnZo2iEKDHG9sRgtSdK5RSTcCmotUXqqsPrGYVNzJC6NjijN2vJcjWbrAJXSf8qjZcpEVEZw8Ec4r",
  "key8": "62yc8M3v4MQDagm3WHzSRKQe9AN5neNyYweYPga2QHNKoJo52A6xDpfXqStJEdAKc8UftwDxWFSyv6aupiddvz1e",
  "key9": "4HFSD2idPURMgeK3Y7Yc4NUAKpeC5tQUX6EtZAkiz6YbqHfUgrg4D3Qw6QC3TS7W5XeR5FaNYEoFbMBJv2bgqVez",
  "key10": "4P9k3UEH1smMqsdpb1ex1MUne1ptX2AJtqdWKTcmEzAttDWjundyBm8JohBuB6qam4XuehBdiNtDPPYXDKfzngT5",
  "key11": "5RET4jvnp2Ue1auMySzSYNPYEQ4esZNw849TNY7m8xBjGphsDfZPrwkZRpQPJN421nfJ4DRqk5bTtYZPNWbGqMEV",
  "key12": "2Xe7Ux765rQvDZiWxdmxUqtrfVkABT4XZcPTKkrYxzivZqequWUBCeSU1P8fZYSDCmCrWHEQy9HsiQ1H4D8dnfwS",
  "key13": "4rq1EfCMteR7ymQT4tYHEemrmYuzvo3z1L84cWiMXXosiAXTUqo5pshZwVBEdqJQn2bEUuKVYWjPqJ5LCH9CXNeJ",
  "key14": "212ZJvNdaDGaPUVH4kiNRskTmRayrS35q6yN2jAyN3Mwi3kwerGDJaN6JzGsjwidMeXCyoUjQinMk2Y99NkQKGWc",
  "key15": "4QapWBc3UoAKbVe7jD95mSQezZcg9pPxAEHdofBEFaxfhs4ut9ACP5k3u6n2UMKKADFFc21P1P4RzS852DQ6sRDc",
  "key16": "3HB6rUsD4gWA8LgRtv4HzuWKu67ovPcWkTLbdeqea1nM81Aok8KrAKLYgidA8JwD5rUoCsiZDiwtNxmwkDsLFF1R",
  "key17": "38qMSKbckYNy93zDrGgN2vuDnXY4HtjQU59NSbCPG6vCxE144zaTBHv4jWyZrkpSLPLbPRF6cMAyE3Vgu9uazB5X",
  "key18": "5u9pJ5pbxfsN1TRrfSZENMK81qNUVbYE1WDCT9M5hAgvqJySzRMKFaGHGtSy4rZrgdm7baLhf57GEVeXPQ4fVnmj",
  "key19": "PL4K8vodP7NzfPgRkbpVRHM2wAHWkPx2tjRrUPz7zcP8ZnM8TcmSaQytr6ide2rJLGitiKbLqEQK5FnRdJhGg6F",
  "key20": "3oBT6LZCHghzepEqkEQtcqV3dUPkQKQPN5W77bvoFiosGcZqKbUiCUPZyizmvZrLPV1KHwU3VT8XdP2PnEAgaihx",
  "key21": "4hP5LBqk8nwuNNhCKtPR7QsLAqzJbMDY4Lp39iFWYJhUtMyAmuYi2dpQUccibzKdcm7NseG9GJ6ddgLQRffqanLq",
  "key22": "3r3Ugi9t2whGkm8mT25fT2kdsK8TCqSer4CjvePRbhiMHS5VwHEWDszGQ4T2JtfUhS74piUWkGZ2PQrV1GrK9c2J",
  "key23": "phQJjHF1Mt7qonATLNhBp1NbqpgTsXczwYmwdMy3Vyzeq8K9p47GDhhDwpjXzzAVWvPu9XBrFPDNrcVe8A8nkPc",
  "key24": "4unRDH3ma55Uv5PtF8VSge1s5eCE17LkdmscBjmWfzB1hq6uxXvz5hRqMn6uSbWjVduUQg95xGN8sVoiBtsya1fX",
  "key25": "SWoAykD6Stk4woYZfCCH7MtSf4QLnZmp4gEProDs9jfKeaXynbrF1pRZ4KaWoXzBfyUrrXw2J4NaiRUwHFhYM3E",
  "key26": "4ZH2eDP7hB9bCKE3LZevL45zX4QgnyXpL6YTY3rB4UzCoXasFLneZPDUcESLjQ6M7hktQFmAKPogs2F24MvDubmv"
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
