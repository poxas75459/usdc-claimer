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
    "GCH7LG4ieffQXPBAsMqmFTWYHxUzQYDwz9U91dDHsxhzayRJVEvYZYxAAWwUmKW1QMqWR6mbHeADFS6aDXJ5SKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RRxfocQL6EkSiSBfHH2jFoDF1c4mWUanxncW45NKf7YKKwV4E7aY6qLGCHinWQmJjvDt6ApFmCnTAC6Qh7VUcjt",
  "key1": "4hXyhq1XDCzvPeLn57j2TL8vCZ1UguMgG15BHhjrEzjbW7t3FoWadPJ593rqD2aEqpMe4AUE3VY6fHsXKiYs5Khk",
  "key2": "j1tmLRTVE5T4XLCS426Qr6e8nqbFYaL1GvQB1d8BGvsHDrq6vZMGypjxnYDehjeV7dUEMCjTLpMaSfdnnHGbPg3",
  "key3": "4U6Jpdb6K7A7wkmkrXA9JpawGt3hGw43FoBocH1yiTSwxkK6CG59rFBeQaciziMqf4jjuePss2WbLpS9Lk37CWBS",
  "key4": "27srGvFSvG7qReSmysLHmzXZYcgBtWrcwAoUxHh8cpP3M8LJn6UrUURXF9txmWtpdkgenEPLDaWY7pD4pkrWkkCX",
  "key5": "26nFjeeW4eppXjJ7QKY2WAMn1MSJTLy9sfsGHoXoQWikh2peLj3gsPz7YUWyL2fy9v97p1g5K4H93Y4C6nsd5Pkb",
  "key6": "5qV5xKbHQcndcQnoZBUvxeosQWkrX5ZKsTb217MQz3tiDvZokX7NjbyZgv9yo5Wr5Rewq5DcQ7FWMHsTC8DwQxLB",
  "key7": "2DKyLruZfnjwNgPgR5uotWEyBwwV6nsSY2LaworECcqUNsqEepvcofj3F35rLZNCP1XgWJMJABwswmLNJZMhYPG5",
  "key8": "PziyMtyq5p1zDre4SxpqgTERX3kn4bD5N9PiFWpQZisRkEaBoo5ADeAJkpwk5RsM1KRBntzfSqEJ3M72dVnVJ7k",
  "key9": "3RCYrzsca36DkAhhJ8JEzJMc5uXLT5db5vQ6Cr2MCUyFiZi1k6At41RdYaprvmxHzUzZLfkNWUEKS1xYJisv6S6b",
  "key10": "sTqswf97Xi5aKLgB6kBjz1vyHoR4cx47f1aJDmmovgDqGmo6a1agLgRxbvjTpEmN4avsdfg8mJZ5xiRXB5enQxw",
  "key11": "3F5xb14yKicS191qTTrnZciDmW7VtwXAoY7tS526Eq4YBj87oyfVdPGmWgG5Z4apnZ1t1wgzYzTs9DbgLR7KK6UV",
  "key12": "3t5sQqqZAyWWYSsZ2V2hp6iM7uFqR9ZGbW5c86mFuaJtsiDqZBsqk9Z92t4kU9hJsdLhUGgSuWhFghH9HJVZ6MRx",
  "key13": "xRpzt7GPnzNrWtqAWLWwEjvc3MP1vx9xVpSF3JG4YHGnM4o9DjJ6EBziDvbhvRSEXWEANijLvYBnmWwcwzBApMR",
  "key14": "4W31GQaL8U5ryNhe55DHDDjUCS1LSfVhancRePBV14NrJrjodavvpCAuK9tVqz7y7kn9Avt2omEDUwkzrENfdBN3",
  "key15": "5Yt9VGpXdui4ZYJbjM47vkbrHRfSAdsTYnYPLNAEWx7iLHKkAKbra2xPq3QkMXxg8TpnQJHBWaCRxNV7xsD4UVvn",
  "key16": "5M5VaTsfhm5Gfj4z1mJXiDdBYEx5JV7Bsx7t1LPwge5eG7GuCih72gajRVG1UC5728g7QUHUuUhnZvBVJdirYniJ",
  "key17": "3krwPhN8EvZqKb4KxYHasQnUDk7tiStP9PfZa3pPXZxntGdK8rGcebG4q56LMvC9CkN5yTBrEHmxFwxBFmf3MzKs",
  "key18": "5SchSdQZUNmPV6mwPkUSN35Bh7DmRgXn9D3xmaTgtGjKdVKTe2wcXeW172MX41tgFJFktUWG9rFzeqmzB2LJnr2h",
  "key19": "5Ft2aGb1BcoAhHs7gpJfVWv5CRNmTFmfmCJXv529W3M38FsYmimoJxUj1xAsPtECxXj78CpNvYBvJ4NWniaMtYF3",
  "key20": "w2P5kHWT1Mz5aN3gcnMW8C381wDTbKQmUjiQX75hKtqicDmPTVSMdZfzFuZ3ywHnvidu4KCvCempjTNRLhtMeCt",
  "key21": "ubZioLUQwS7YNu76jV1ZoPhJGEU2FbHZ8PijtdM8Bs4johtJqJshvtwYroW1haSmTt8KFkpkztrgnCnKDtSMdkm",
  "key22": "5SdpLBFurMs98u23hUcDsiwYiG7jCMtuuomzX4BwjG6gepRzTRPktFL2hic2PMXaJxDXbDQK4qvdcfmaZ4pARs2p",
  "key23": "5w66oPKstr3NtYH3mnPK3zZMAnF9C6UAnTyD8d9QvtpcZaoLZgDJR4SWM586vujRjeZfiaqnS4khnk8HFxGE9Tj8",
  "key24": "27pGLbZhcvzf2cCemvXFv43NvQQRMYBHcxag8BPGDaZGmtXQFbNRuuicp4uTaNdYdby9b5zbvT4LWcPX6EjqATJY"
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
