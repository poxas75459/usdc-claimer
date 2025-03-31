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
    "5kgBSWjKh7QxqtoUVME9nSjQZK8HFA55qk9iWbSWek4CemFo79gLaCLJZfSPUNTVxaT7vJnv3tdQAGRzJ8JSCVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x41nYcsdraTMSypS86ENqZTyjcLd7rPm4GC5dGpzqrwuqL8v6Pg7cZcRiwggLwzKDbidoeyFppVF6J9EkCWyxZA",
  "key1": "4kT3hUcFBm7LiaKnKnZaKjixZh6B2tXPqatr4cL4xgwwqnV27VTduMRsy1SuVMwL8X9HU72MZziCK6EkkwzQiA1T",
  "key2": "2Z4S2sq7bcCJhKHU7UhPeviJjJoRr6s8UUuXhQjvvdcELJw4LNP2EotxBHoNjnFKy2pKVCrGYSi5CDC4zvDYmhPK",
  "key3": "2JpUosgLTVEHyzqjEhDPnuS47VUH3HB16JTjozHPYZf4rYxeGJHrBLq7MxhnU21dANixw9WZXkMUHh4PSqA43SC6",
  "key4": "29hFtVXFmkfeqKLbyfwNDpSPJuDQboP3vxhmgZ7rtbctzbbpvEKRVmGLxx7VJzXHFcQgaVDwDbNTcQ2akpMuEdBU",
  "key5": "3g11LtSCtpS1T9TfLvoww1Eo5MmJJRUtp3tzDFndmNF2C79FJrj87xWTbs95TTQX4L6xoUVUSbtQ7H6XarfS7sbG",
  "key6": "2hs4dmBAQbKUssgNh5jGbuKe4oj5Mh8VL3iD19pDKg5WU9shNe9C4CZCNT2SusFCVZidX8NKF6tBUn3sRZUFUYbr",
  "key7": "5f9rwh4MacjWpTWqBrqftnK8Ezegj1P1dfdHpLmUJYBocFd7qKsB8xD6fczs5As7HXCP9wLJtc7oyMaCAf13TsVu",
  "key8": "MesV3r4reRLZ7v1T5Hrh7CyXmSHXw7jjKqd51bWCwK4Yjzb2cjFGeTFHWj781A1q7mTo6PixFxTWwfywFk7Jpcy",
  "key9": "2MHw4W4nmYS8JhHP5tLbvzRhPrXXJhX1iY7HPia7bTokNHCvSouNGtdZC4nUegkSVm873UwJ9Se4noSEm2e6cCCi",
  "key10": "42wCaGuXATTE758t8GU4xwmDAYbvNuy9UP1R7T4SkDVYhYHcQTN6DC31xvQLQZZfKtwhPmuf4nUsDHXm3hUVuY3p",
  "key11": "3baNpLaKMjWU344Lvcvvhk3VnmSsghtCFrnWqu536ajwFz23qAFjwUgT15yYjwX7uws5pcMiCLyw8GULSLu2Bg1R",
  "key12": "4nnagt1po2m3Y5VaxJSBCFytCcKNt6TwnBG4XPdyfk2npHTKQxMCVoiPZYg6EMYn6cJxaZTGreoKEzSVMUSAqedV",
  "key13": "3TcNd9niwC8Bgf4Kutw87iCBvSp6pdDGE9zXyTN41spYHyih7baB3n2soLxRWQA3yvjtHK4N9vtM6H3hW3Ft6GFg",
  "key14": "2Q2WMbnmEnQ51GvGFEyLxjLdE5w2KVvAJ23UPNLfzdRSYfs8mtnsQibV523LrZCzg6MTagVaWsVPtDmTGySENTwC",
  "key15": "2exREsxWTS8ahvripNUgq3ktR7ic6uuRkLv6epegQXPv8gG1LV8cBddapWCkU3Zx4ZiZzxoyS4b147dCFfk5m2E5",
  "key16": "3E5rTmUENYsci8frQwVgGsvwRA8LGcgY5EU2uuCErswvnRDnqHW5rqq1s1qnZgQUtWjPVwrztLKjx1WxqYDBwXBw",
  "key17": "pBZ3QnLGTgYJPtxWQGr5Z6Kajyq5UrxUMriCBmJ5ehzTSqCAkaoCEWRtvE7pnKdtUFJd1b1K4JxmmGKKxsd6ZwB",
  "key18": "2dz7po1Cpcx25YE348urpSmq1kSxABkAHDk21uZqb5gUphuchgS1U9uyCCXDEWwj3bMnqfPpNdF5eaEAekpSe4vt",
  "key19": "3Ym1zzdvHxmKBdBAqevxrizrAKkxEVu1tiZjbsKZ8no5quKF83TQCQhqvR6W5dtzant6nwQWqF3CTwnzeiZs3cG6",
  "key20": "3qaWR7biSn6zMGi9U3fyinCveFYQGsXrry9RRUkPwydgAQoEuAtzvYsZdrbdGcmWKzZ4er3N5xcD8u5njDjxyFhz",
  "key21": "mDbH4gNjuLeMYHZGkZoKjcgTD7KhqDyhdLNTABSgY1tJXfGFkHjvjtuF1ErCXcCehLNokkq2sxAELvGNYp3R6z6",
  "key22": "46r9SuwZyQ53FCPZcgkmojbiFePhc8AfthnBF5jjsEnNtk7X5zmgsud8NvB73U5c53cEAVbSZLxoyBQqe42dLmXY",
  "key23": "zAjc3mUkf7qaKw5kGQskA3eNiJaq8PARsh68ffYtJgEgQfvx7f7jjuZ5kuDvTZ3xDMoF97bPAAHpSirj2SHmVN8",
  "key24": "Y3TeP9R332koUwx7HkpGpGnAcyX5TkX1UwCQQdk7VKJrwsSJpHKZcN1oi14RTmSsnH6XUqkiscgapaWWNNWtGjP",
  "key25": "46fHKKZzqJBHqhrpkHFdqF4cKPNZpUDjtsQd2Dyr11bHqR8iJyqBosY84QvZ1JouRiEfF42sRewQaRAKUyTVwJJ8",
  "key26": "jCAF8JBfTXHzPUZd44FtpDxWt3vDfRW6M99kY77W3sGgqTY3xqs5Kgp6hixNrYjQnNeKamTej135JxR5UzXcXDG",
  "key27": "4MkgbxF8WH4of8oWhKDQqRHgXxAsXLFg7XiVxTYZAGGdXq9ckAHaL38yy8z6LE3vjmvgX4ob6KmZg2k7nhvvEsqo",
  "key28": "32r2BtDU1gi7ADxPKvKfC6aBYSwZfjkACCTm5JM8NjKVmFH3nesxo7RPgYNJBP6orx9kB7H6hQEDBKTDHoQ63sLz",
  "key29": "63euuXYDi2ZxQwa5kJeUoFuGyrvGa7EuLZWpS9Yi2mkBkiyyGUrMQpR4hWNV3S1fuURvXUvgabXZn2RY9vfJ1jHM",
  "key30": "62ekQWuaoxEBqcPnXBDza1ooF1W9XcQ6DJoZErjfySmpvyQXptEpP8RBErAxRD5p4MRNjrsqm1tXvUrhAvZomTQp",
  "key31": "2voKfHzWn4pPJpQj1orcQHkD8BC1fyKYNyDCFxEz4ckhUD3vhrxej7hovSgG2XFfieyHPkL6vV9cewh6jfpfnHu2",
  "key32": "3GcE7xmRAR4UvkJ5BMMYYY3wUq9YhWinxLBsyVx329TAKHvfUyKrZu6pDogA1H2xzLPmjtBFoBBwKy1bwof3JZbk",
  "key33": "51Nx9Um4k7m9D8eP2YX4EGA7cyjKkQmZLMTC5euWXZ48NftAQyAjSwSq1MZkEuzNpwCWYE9FcgmL1WKw9exfSyR4",
  "key34": "4auV8RoynSCBYF2TG6u1tnAe3hqgHLvYkCgsAndjxYpgbQtXLhAz85SFDGwJTY6nfxG91MmRkp1jFEvVHtw59FbF"
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
