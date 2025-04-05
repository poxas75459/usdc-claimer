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
    "52sbPeEcYwF1kEmK5N6Qkh94CUm7AzytfbJfh1pXuS258s57Ax5o3kYw3WQuPcUAL9vXm7HZEvRVnHqU2J6StUHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvD8jtoXD16jcpDaTtd7uSbRWBfxkQURy7LdP8bpjB9BpiHjPHqb84CaNcVAAHdRvA75iSJExCEKD7EEsZYfNKx",
  "key1": "2cDH9kPgnQ6DyuXDQvsqLfqcKer7MNm2xfXTBLN2mSBnTFzuvQU9DRDcgTtEZ8svUXFhG8wP1gZEpCruegn3MGFr",
  "key2": "3gvzBLHrC8W3AmifCCy1Zgvsbw98kWWwgiXiRPx2tzw8XZRjH38FXwkCk8meSJ2PyTmBi8GBJiGNGAEa5HdCWN9u",
  "key3": "4d2tuVFMYstzBb46LMDrs9KjziGUmZvwESi1W9nQyQBNbNxsGxxGmp8X6QKEXw9Z4vGMxqkiZWoP8ck55k711rKq",
  "key4": "4qWyktxkFH8LKwoWMcVYQAatDJqFBSGvV4JCZdMfs4Pw7GR8jmYortXADT1NjoBWrszWeexbPp97pwgsaLfmygGX",
  "key5": "vd1kgS4e8mzz63HB9BL7xTYWymWsaK1uio25wgMpGu35wtAAz4nuuq9FeLkmpVwxUZB3eR6YWWfJUZg7dswh5gS",
  "key6": "5UjjQVy3sGk7WYwJohQJwFwH2XiZeMPeMQL8uTwgs8vnaAbDt4H9DgdCaLTi5cHXXDo5dkch86Yk7hFFasEezyap",
  "key7": "5WrXxat4kofcPWSB8oAu6ZxTGiVYMZkBWkoNkyfKJwFWaw5Zg366GFuAHRn5jW9ZsEe3A4JBEgK2a4s58ze1Pp3B",
  "key8": "52QBSPP4YnsQXUJffVxVRcKM6u31fohriNW7j6sS8z9QF3sNEG87LdrMsrFXUgtUESw3BpaYQW5Nih4ZBBVe4i5W",
  "key9": "3WAsSdPWzY7tJYX1uMEJVnBT8xeVZsAEUuWuCLgvExKe2rS8jSmXyc1GP3u9EYyaWZTez7NJt5em1KXTp5CTSsNg",
  "key10": "2Y9B24L2oBJevUZJ1Q2E1LYY78mgiyL3ELYCRbTYYT8mpGfALNKNb7CevBxszqTqm3rFDwUH77LndHp19C79SVsJ",
  "key11": "59gkhGDKwhAXDP8jrJGjHRg24b2DBC11ncnG9amwai8DrbKmhL33b3tEpoGPSprszvUHhrznbZJdatXDCnucSmqG",
  "key12": "5b5sLKAv4nKCzeTwh2ksCgbZVxG7xUPQrvRMoEHSaT2TcM23zZbqNku77GWEBWhPcdVeiMdG6DcZ1hVs6jGB5rq",
  "key13": "2EqTLR8ji3Ao15AW8hyxcTGeJZy6C3A5vjrGMqQftH1FXrWH79WNmutBYL6ooBazMeBjCTsGzxoKLibjxR85mC5V",
  "key14": "2KRBXeDtt2vj5duse3YsMGBoV6CoTXK2vqjsy9fWKMDqiJq4nZuGCs4osBtXGTmNMymUAxRR5NovbVXi5D69w9H7",
  "key15": "2ivR3UKBvgxFxZKV82EDw7qAEbfmWBxfKQw8MRGF4b4cHyWNAxRHNh2KxMpd3q2r8RxtZ9d9McpxUQuSRK8jmnid",
  "key16": "2JRyhZqEjdYKRJqR3GK5ty41K5vBwohJRJZZ6LiGmNQVdqV1vapXSwdjDx1jMkbU6yPXb57GyejAWwBfvbFppq5K",
  "key17": "26NrEorX5edRe9fv7UJwFg1PqpFix5cGh6BFhJ3A4kiVaznjHEd1Zvbq3jpAVuhgKGxubtYMrHVTQsR7hJkP5Aq5",
  "key18": "wXhcFSbGV7eJifkNfsyxKL5yooRpkbCkkmn25BDoR1Beb4e9in7ucVawBUTKocTGyHjXJjKoT7ibWmvyKKQbW3p",
  "key19": "4vEXRehw6iCWECFhZrySPQAXdzH2cNvEzbJL3JzYzgFN1PuEA1A3YyXf1gSZyKThMSeHQCSYnjWTyoRZv3RW3sUa",
  "key20": "2uVmi8NCJ7p7Fr1GSXdDVJU3CDmP6VNJoniaDK6hGtMpcwaA1kE1GBsQ87B9DDencAFsDiMMgDtQS8cVpawVjnSV",
  "key21": "54CPLrXRx9nqp4BuD6NGwdYvpRGaAxe3M1UCnRRqFRebscyQR6h9963V7j88qhZEKRACPaf5z1pPqLBayd6jA1XQ",
  "key22": "2r5bndWtP8USF6KvTSNMQ5ohuJw4qgdKywXA4KcAFM3xZzAQLeA55H8rRYJB7xD8YXmpxm3JMYGwUQwaxa11GJQU",
  "key23": "4ZCUfU2d9itNk3oxDjtBNQ3ekta6hDESgxnNFrxNLmKxLoMufons3z574d8KEq3xxMr2s6GJX7LeBFPKhcKiNvuj",
  "key24": "nzeAJtXWhWSSpmQaAjokzof1JMuLtrioka3V3Qnf3H6BMQJCgGiK6HiWeqesref1gspnAbTwzPHmj9yG4sAtqyR",
  "key25": "FR8k7WHHRYFZiBQLCzVNQ3aoc2YThZoWqudroGUnauLxRxPUEy653u8n3S8aKn6Yyr6YPu7XveyiHoVHKmevcou",
  "key26": "54gtpS4FG4MdLKHa2GPVnLZzKKvaUNDnTS5jbtDM9T6yiwbhYBCTfxEHFZHeD9EZbBBan7HcviuJbbWuMZCcGTsd",
  "key27": "65Centav7jFq8NQmxykGr2iLGJhtwySLzd2a1BD1sm13TSE73Q6ZP2EumiKqe3VYr6zG4mDyzwrvZ2rMJV4kwpS"
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
