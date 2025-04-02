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
    "4vyqAJunYsH7LPRDmgpnpxxw1HoFgMnWa6ZYkpdrRkE8nPbiJf2385eWrfVP1AMTKQbTfEX9pr3bQQBdDqJgXgRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bYgrAgV5736ehDJ42ogC4yuHG6jvJzZnirALA47MbgNN9TMzhTZapEp86odqyqh5jzbqiaeMH1tfK21BAsckF6W",
  "key1": "2WYBQQwjfgqPsv8WTqNMAirZqpmwKsDdmFs6Pe9AYGbqAXajZCQtL2bz7etGyei5n9ZxDwsj5DwVs1prfKJfLKyC",
  "key2": "VcH5SB96emAjjHfoSLiSDbcvLeK9ynfFhXcNNyDez6RDJ8wP4hsFaw2hcmL7KC6wy3PGeasz1AvjcH14zQNsRK8",
  "key3": "5QWos5gVbKiDe7Fha77cX5XrcqZN3rFBxPZvFQ7fHqSHTeQcS8hDWSY2cRZiUEYkNvAsDeZ5BaCkByyUn1voLoDK",
  "key4": "cLLu81mhtAYEMFGMMKgmEcRmjMxtNHyQ6V78NjqVPvbigZ8j4duVmAzAVzyCYXGQ2ZuofmRAZvN7rkrq723MmqS",
  "key5": "2qdhcaLokCmE6MwiMEY3XATptp6tsyWnEjtngFaXVyRPQiMXLFFLDJQwT7XAsbmtbW7n6fHMwEkGos6jbHjwYQEM",
  "key6": "2iWQaGutEcJz9QqRdsiRU6vWKni9a9wrsZtpaw1LWEBmVSRCoZ8eP8xDQjy9C3djuhQQ5tWsW8gfui4hZcCUWNBb",
  "key7": "t9SNG7LFPLftd68ws3tup1MEqAsJSEQyfN8C8XHpDEXU29yuJdwXnqzCC4WkQmf14d5w5Y3xSy9VYLcQxdRrARJ",
  "key8": "25uzr1nGzAirvcsbVkLY4SrjkyR5jkewyDoPkkQV7iq1s9UEpPci1BUTQJ7oLv7wgSGW6MayuU6mYL3ZtaovjD5L",
  "key9": "5un2RowCREhwHy4rSKsUnSSodkKwzUXhYHw84Phm1YevsJf8gibYQ4EK4d6naHbPn2SE8osAcKnyjo2h9AczLJkj",
  "key10": "427hasRkrRcMFe7QeYmvWkV4mW9eESirCJDwiv2wBmVLQ9dYAfPyAsnpXG37kvNHjDuQveZYn2uqY9gMsUj1jLYu",
  "key11": "3rVdXXaNPb4ERxE6QRmZC6HE2NsUyaVc7EN9Z5gZn63dzM5Lk5DWFuSuTTdXp5KQYeDukRRk3TRVNKUHANWtCia4",
  "key12": "3k63f9yWonzoAJbB4EWDXCPu7yN2K4iqpuWpZps5rHqrKQScnER8376MyB77ruieMAxSFdQJako6gc8aYbT1N1DP",
  "key13": "2miPAYQZA1TcwhU19PwZZQw2qrncvkx2B7D5T6ek4knPZsPssbDxoGGqG8SbMAs1jRYZFRYXoB1ytKfZmDMpwLos",
  "key14": "5Ys6gZhxmSUyTPnvDt45YWGLgqPEswZ4H8Z9LBg6QAN69KPLsVPrqaxNNbjcBqeq6Mv5cuoaZbBhhLPSzo9dEYG4",
  "key15": "4t7M7YQZLjD3Yw6HnCNf3Ta2uuwCX7dY2NuDeQYWLTkycEeMbucFM7QpUUzV9wUcX6nWeDt5CNncmWtQCHW49PdJ",
  "key16": "4GZxbmRR5dRWXHfkmiXBNbC5TBCtqDX3eJG69T9KiTKGpwXdrhQDU8fWFoo1YTjstpC45jCaujv7VWAAViuuKMik",
  "key17": "4KeMgR7FNjK7Kx6qveGmpBwLvhf1zFu9VGTskHCP8qXskMAPtiUQ3FBUG4aoDmFWqzWo4eCZQtjyrNr3Xo7rkfiy",
  "key18": "3g3Cg1ZiSrHUjNnUabtkKkUDXLtmw3NF1G28kaS4TEpfJrkxMZjwqYRSxAdMppMcfxuzrfxSprrPUpy9pFNeAdZf",
  "key19": "4vKqxCKgvFVkzpttZknhKYy315CHVwjZWURGo462qmSKquhuyJHb7buYVyi9u38qa8DKcAGucmPJGaVs379Ch18w",
  "key20": "eqzLqDXHBDy2n4aiVWo71KZbV1GqDXBqAmtC3nLHoUm2nY2JMJVrrbBnmLaWWDW11gW3Byr1coKy4mCF6hGUbkQ",
  "key21": "64iE8LQbzfe6j5fxmTsPPuqk57cESS6Xz6tykvKpsTrAPr8G6YcCz17BLBKtr1wUdGomJSuhQwWqfnUsEWLZ1rKd",
  "key22": "45nydr4H8iRy1FfTD1zKXFNETfWEq9AB8CTmxqKnDCkqTNWqZQtuxe2vQJMX7VsBd9PxAHfs7DWReC1VDrdpoW6v",
  "key23": "3g3bUwLPYJqv4bf7taGT456CZP4p9NXSpNGsGdordevaw3ipfgqkUHuQKotX63syh8ttBse8bJ2XpUDcyqFNKc6u",
  "key24": "nRZK1YnGp7Zm2ma4GcqyVvJmxjPkqRZprh2JxvSrU8RmtRAamcgoxtrvMsQv6cBJjC7ioMHNXN6XzKHGygARXdf",
  "key25": "4eCqbS7W7bwc5sT4MkTd9UrC9w497FfML9ryHdHSwFuYAvLXqQJaKQCmDTxA5S5xaQr6jpF4F94nr7rmzfugbYuN",
  "key26": "2YfG2C5wjCG6kKWejsGPoG5FZp9bGhnSbAVkexEoXHpMMi1evwAVgCyCQ5vx8wCrwt2e6GmsR8CKQwr1tJztvzX7",
  "key27": "5gQe2C7HUucC3AVhs88DRquS8nLLucNpPL2eTZeta6TfMMaMtPtJCmr5XBFowrM1iDgtpAQK68dy4mE1DWcHvbD1",
  "key28": "4QodojeXaSgGNn46kpm5zsYPbGdbJ69WvRvGtAjDCC66d2uZfo8sqh1UP9BVhQmiSk6yq3MbrvVK99gLcWLjbDuF"
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
