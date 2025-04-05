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
    "3VS1Wn8MnxTC7KjpnoRWgpzWgcdWCN5JqqnM1mdMqVX9WUofco2op9bkvRWkdou8d4YMU43oZhBg3dXMshJ8G4Hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YbmHkDg49CPcUfATbyeYVvEms265o83AKQXAtxE382LFKKRVzNY1J8ndcsp2KGay6iQpgQdAJ4SnzUQRcq2Zv6E",
  "key1": "25iHykUuyycNptYJTdEKLNBqaZ1KTBkuWhTnWcwnDQXbPhjyLyba5iKQrPAo9fu2LC6pU9kcDmAUTeZ2uZ9PEAiH",
  "key2": "2nTrwcnuarxUxDMyVpuDJE5ce6tHRx5zTNsavfyCGd7EXEE5c5edYzQ8SZgPJdTqBqwNzyrZ8Bu31mrf93CTtnUA",
  "key3": "3QzQiEmR9B634rQHSCu8b6GwXMSDUQ6HzSkWA3xRTY9ExDd15e4Vy9icngqznVNmFHY9KjD4ykKqLxNTykBaoSxW",
  "key4": "4R6XDyG8jXwEexB9sDjtNDzwMzmJXHMpeqHdie6VJsv2GztB7JVLa1a44nrwsu9BgKj3Wm4bFUmEoVL1gbN3GUBv",
  "key5": "oywdXigpBejSwYovoapVcmorYjRQKjM1Z1jRg1KAgdmcEbThhwVBchDfsCTm93QCqqcK8qn11KahAUftb32xrpm",
  "key6": "DTkafAtwMsiBpEswSbyqgpT1R3iEtTK6kjAevJyoXc34zUou8ckXLxc2wvzL8JU6Mw5i6orGHZjTdeQauVda6ft",
  "key7": "42XahzS1LfQG3VLZJhWK3esX9g3pNf6sNyUkkpdfR31mpyHd3EpxUWjG33xYR346b1uvkxBLSvyEfijpvJ6rHAZo",
  "key8": "SP7P2df6iiPi2Ur7xtk4doZTG5TtTio5AFGupaiGiak7iBd85sYP64MnPfU8tfoASbBGEBP2hcx6mEHNuDzv4oJ",
  "key9": "3AzcdNDrqTWd4MNzXLT2VNq6o3Q9rqckp7PwBUN73A1L39GB7wbZzsb3CufThDADpm74H5FHw6vaNAtyKZJUenwP",
  "key10": "5Xxyx78QVXyZND4QCKgq5RtXFDB5muQwGSB52vowRnQNKKwtPehhnJzDU9hu6yb9tKEnk16HaHN9epbr8kmaxCE2",
  "key11": "4PwbsuxVTBFmQkJbRRQXqgaVwTDfmB7dSsVvzsqBf399QjxuXhXUB6Xpgs1xHEz86iRkTnFwdTyfw3x6Y6HCx18m",
  "key12": "5rL1JnHXDPRqgj755HZJc6skEjini8VyrZNvTsx7mf2SxjuLjJvBfr99wz697VnvPbNXXAwTcd7yN4FMWDqAzQKJ",
  "key13": "2tdSyUvbnFjunR636mc4bvFJPHTt6nQqtx2LHFKfKFji2vwGsiqkXFqEYTwu7AAawmkh5LVYy5QZ7oQHwCLejb1T",
  "key14": "BxJ5XE7BMrwSEiJPjJMnvJysfSzigXYtMW6aekFqQyipbiBqSjkFq4ohp7f1AsbHGD5ToTm93wZ8GKTyk9YjRsX",
  "key15": "5SMhvbG5K5ci3GXo2hACGMpkPhzAv1HSYg9iS4ucHnznHsJzCRc69XK5F2CzPZEMAmAs9ZE6wsXs8fGAk7aW6TFk",
  "key16": "4DPs8ho8XWuBxhzoPnMzw94YNrhCsVeFcsrRHYP4A2XXDdLdG543Qe2cGJH2h36VaR8eMaYtGT2oyRa5yxK4VKiB",
  "key17": "3AUFqziyRJQKn7kxGMKHrXYhWqYeH39QYAB3dkjczjp8wLzqqS4RbREn35BK6Ev9Mp18PtabckwBAfxCLPwj43Mp",
  "key18": "3ozYsdcUDLU2HTv1hqs6qn6MAvsVbD6DFyafDLQqQ7kvmF1aoHn2kx2xqasn6XcPEsB5ZTXNcDdoYig13pbySbtq",
  "key19": "3NAp8rv1QLh7YtyUwr78LusP5huc8m79AHa9d4nKWXTGJDtzzbA3G1QkXBFb16TXQeoTmiu8PWEPciNSpvSAbV6R",
  "key20": "2B4LyxyGAh48NoUVWx3bKoJDvD2vpXLRhcS8ZBcQpMYLjNcBBCP7biuNsaug4SzqMKQB3RM54z5XjY6UUZVnerEN",
  "key21": "5TEewt2wrnKmfZu2Aq2ZXVa6HXqo1J9NfwedbhtU2VoUxjPaB4meuU8cfqEQdpcqpQ89cxmhT6xfQ7L8BXym87wM",
  "key22": "5yvkaPv1cF9Gu3wbm7Ly7rha8xE1ETPgoUTdWFmrYZZgiUhz6gKD3BsYxkoXYTQHvFF256bouJkuQA1qt1xBjr6P",
  "key23": "MW5wtUEoopofRoxhF2L9M19HBR4X76rjsZ8LWBuwdMAyS3TsGSaaeGa9WoosGdSsDJcgTYqUUpGBoX7WDZxAnuF",
  "key24": "2J8DV7b1ut6WH9EvFghwzhNEzjBNL9jc4m1xNrSgcqH5cupXYGoJP51UhgaDAzVCcVxJfnfTkcrdQQjhh5gzE7Uy",
  "key25": "7ShKeEMQb6fvoRiMbD487WUwpRcf97Ec2bh99VLmjBjHDeHkwz3BL6eqTnJPe44XeYP3hQfEHQyExWyW2xg7n1U",
  "key26": "25Du2eyJcacXf84rnGMCPoLAgdfpeRACo9oGLGwp8qBYZXKZwUdzjaDyEt41orZyrLdhwDUbncHmSruH17pvSiSp",
  "key27": "4c3TRdSxvqbEvxxYTKGYGoXc4uXKkQVQrRSJdWxKRnYzfNsHW3aFMdH6mnqjuhYMvTjd79KZCVcoHNH1Aq1S8PkU",
  "key28": "56SkEG9mxEVyoCtsQYDtPFxdGqx2ERDwiXDKx7PGh3EoJ2Bj6vJuvPHEBAieycFW7FAC2Nh8X4uVRr11hso4enHp",
  "key29": "4E7pqnFSMtNZps1yBEfDbVAkceVJes3eMicUw6uUoVzuPmCrcR3UQErAqbw1Xu94EDJdhnSKJms2YCEbuZCmxpLY",
  "key30": "j9HTnxfVoM8ky3byxcdLxrrqRxxUQAqTh7yRaBUpjYucwBbF2SiEsee5Y4mJYBqh3fi2qtS1PG9U4ikT3i4dF96",
  "key31": "4NfJS1SPV6b8u8qGJ4mTQWycZv3rFhVRPqv8kXd3C6SnP3as9umzRMUF2AYJvDjQjRTusUPKqrkxSxEaFxJF8tKw",
  "key32": "XMrxKco9fxEJ7qbJTNdJ4TDsPxnupvHrEEBMNkC5jjTWS6YjZatBCd43AiXdXzVWm97sQPD5GxTa2Ju734mkYYk",
  "key33": "4k4RQf2hYUF3JSLzDB5aMnQED1dtyvkBJXCYc9mfeftufCQku2L1kVry2YNupjsSd9ExpnQFcecXyMdKBn94MJFv",
  "key34": "5W5c2SfJtLBUXcHc4iE1tTZr1h4XmKopNJLtTCB9C6yf5sWFjK72XVSub2aFedoQDRvrkbT8uKrAH7LYZaEtzJK9",
  "key35": "5K62GCsG3YafQ639hnNTiZJUKXFgRoWML64aF72ZSgqWkTDSgkKcJ5q3H6fD7w89V3eLpXzdGUzwn56MsFH5Mr3D",
  "key36": "67m6rtCo1qAqWz8F5tcKsYQME27GFNkHmycjmv5YVDgKEuAVnNe3UNCYcdbMH8LpdYL3Zrcsi1cKV6hLofftH6tz"
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
