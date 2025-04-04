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
    "4Zr5pgS4i4dNv5zNxCRJdynUmAGdfBYL6ncxosBF2GBuXVzq97dHS1dVvRVUigMeiscty96s6kqTSuWqCNsyk4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uZcudeqgYk8YthZHb11Pv8UrZ8Y1ENB51uHvhpTnQCpK8gDyRS8mB7rEhJg42fC1D8voDzV9FYeyaPQ4CbpKyeC",
  "key1": "trax7VTou6qYZ1WWAFZ8Pugvzu4fPXbLHdEaYgWn6M7HST41bNcDA6nVmRi7z5PFFuv7iuQoiTCPSXDTt2Jfrc7",
  "key2": "2nVGFoCugathk3mKZcfH16BzG61c53XVRQTkiCyQstryjbdZ7whb1keF6WDLaag8fXj3UgtLRw4ox69TzQ7cREke",
  "key3": "5TQSHaGiiwjtD8HhDC3vhLXqdtDoZVzZL8m7MFVZUGco1YTQr6KeKX9y474E98VXXQvVMZkCVycEdm8gvsa9Yfqw",
  "key4": "3ye5qgLiUzQr3neJskvkSZ6145ouLzF6yWayE2ABQ721mHBt92yCZ8cvaQ2WehTEBXjNMjTwtsaoRNYxwr3yuyNX",
  "key5": "5x1dsf9iLyehJaBhes8PPxZvVDBPvdozLapiZf8bvxTq8BHkFqzdmQRgEPE2GKAKLJzwizsivprTPbQvDS22t9y9",
  "key6": "bUzMqwmeW98rCiyhbFiZYahpCuKcX3eED7DnEf6HRx618XxDipmQcbgiskpQJZc6AohLm8GFgEckXGFzPKb6Xhw",
  "key7": "3yAFewg33jiw5Ac5n6P4QijwAyEx7tVdg1QRdj68Zy1x7SGE5KHfXPApgYkfZY4cn5U6nbKZG1PQXk5u7QPnSxf",
  "key8": "3AUAMXU9RRorSrMyT9YDMRKPuphJibhwfokEhgZBFR6UKPEWBnjRgzsVNfJE6r4FiwLFMzCx639c2RKR3j46rCXf",
  "key9": "4xw2K1jCkuBqLRkkX6xiQiWocnMzjN1wyDbA3YusV94jwvhpuPvb1ry6ip7Chj2fS1qYkLraK5HXJ4tZ443UTm5h",
  "key10": "4t7RaEJjK4GkH6LGKpXdBQr899ikaQ3xLhhDVW8XdUYpucNjei4krxAdbH8kga9Ej2Gok5U8wzC95oLoi64suCyP",
  "key11": "2xsQPMSpAWLRdmna88CgrsHdX5Ws5yFjABwmX4A7BMbSes9GVbaNQ4Hh5Ghhqr9j4tbuuqGn3ct5jico3L1zWte1",
  "key12": "5XpgZFRNiGHk5EciE861kbXW78xhzrG4s7XcVngR8Wd27N68p9wdqVV4mQLT7QuoV6pzEk2Y7uA1vXiARi3d9fEW",
  "key13": "mVCwj3LUNfHxvph2HQ8Sx11eNaSSKhkxiLYV4ckcgWKDRte8VUmuBMPFSU92mDcKSdJTmZ7XN4WVisXnNKK2rMa",
  "key14": "2pP6roUu65NB4hJqwqPHHZSaeJesoEZz76mnjJc8FReZwasFHLa4vhUCiLxKPShs3YMvNiysJiW1hDVLpde1oei1",
  "key15": "2YCzk3H4WgzNzA98bL6MH4AD5zLtHGfjZpU6UbNf3XoYG2pqRtwxkCAZkbznwdVCeGDPHMMWyy2wSCsMFRvuKXgv",
  "key16": "37BEs4wfxiHE4KrysCunCQWYa77Y7S2CVcDtMiyHDFB6iq6LHVdspUGV961qZohxxNx1PxtCmXCErGMFFfYNxT1Q",
  "key17": "4xaDkNvUsBeqWiASvxw2ZQtmnqGQFGQCExrCwzyRqL39UmnyPWWFPpFSDZxgvi3RubA8PX6dm26LN4f5DFw2RZuc",
  "key18": "62pqsZC37hbMEsDFrVHpJ6UwDEqP2zL7XHcvhkJYrzAQ4hFmrZUPrNS6vks5ECA9ame4x63pMk3QMS8Zgc3ANYsg",
  "key19": "V9o7Ea3f1wbWe5ZCmUCfVfPejVeEmWsgwioKtddYwsPqtJFarZ4EpS77WA82MkJUhidGzAaQGo3EGdFwZzBj52A",
  "key20": "5uPDmgrCM8Rt5TQinQPQMmUv9jyhQ7tmpfnZNPfpkU2d2REnxH6VffwSAcYKtj5go1UL2XVYepTNucdTieAUVTtr",
  "key21": "2Hpthv5ijviA4x9zsmZyq9riWrNaRrbMBsaKqSWa8nZfk6nNkxwGZDbqJNMg6EJxPZWWJH4zsNimYvxDq3m6yAg4",
  "key22": "5AagV99AxPTEjfzsWqWNPi3yW9eiExg3ZagDJ7Cu6Genbk6xdM28wHfycTjeCgM4EWoo8Rnjx9xeWCBBXiAzoyWq",
  "key23": "5nFDiFtArveHKRknbgGkBsCt4TJYo3BgUT2VLB9XfzFk2uerpzm586fkoBwyPKa4PuNw7anNp65sc3eKTKR9Jaft",
  "key24": "2fNaX8Bkkdz4bGTTkPSpfJCTeLbipv4Zwx36f67w3BA5VWdv8T1PWCxap9qPEgxSDUEj55AF8fpArsWTZ6oyCnLZ",
  "key25": "5fBc3bGxsBBJYMdrWuL9UvJWhWQyTAsT6P7CBT47NQqAaPw6CEBSfu79NkaLJ2e1WTjfwMN4GRZEmGjBRStMgCzE",
  "key26": "GsreNPKwiJ6eqqYnvTmzKZjjkCZdqFRPzvj8c1Fbae4tVgamxBKXJdj8xu4zKx4WjDfMnPVZ7CmQNQG2JvSyXGa",
  "key27": "2y1fwu4Qt4NKarUkoC4GtoGSsXQ57FtJeaCSvX6AoNSxtSttRUkqfbpxkBdD36yG1aabhNWE64GP51kGcF5uSwnf",
  "key28": "2jLuw9EWEbENk9ozjVmkECWQuLu46CpQQyBgyiqqAgbRjshPhrP8pLDQoq6zY2CGjPaeQka2o7PKrXGkPc8yc7d8",
  "key29": "GMCc2ev37MXzyDz7xEd8xodxpymNzvXWsRkdXk21YcX4Bah21JE6WnxhwGdGYMJRtb4PPx8Qw1bwBX4BpqrVqBN",
  "key30": "1n4mW9WkYwXJdGUUm4FZoqeCs1QjeieuTstDtr8gX3NM1NJdWguAXT88RG6Acy5H26SonTnYVRHVmPm6SianRsy",
  "key31": "3SSm1CdHWmvjNMdam6kLg56sM5rG6s5SMPBux4s8jykuneBee7s5Q3NmrNtMFxwXoWXCYPsJvXwShaRVCGUdo6RC",
  "key32": "iWFmRYZfJPgJPS5ZNGrFwz8UEhi7FjKa63hrjShD26CoeeUgEQqgobb2w55ibKM11aRUZQDWuqqU9pD54zR1J3i",
  "key33": "3TTFN3GTFMunL132NmP7HyPh9265ogEEwJyrN1UJJwTMpRRbQXqro8FCGE8TnDqXB6HhaYvsRQhGaavyEjcqXwFT"
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
