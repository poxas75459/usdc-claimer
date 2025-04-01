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
    "5JdMYZa9sQwSSmnFbmo1tsLYZTp3EiVo9gVXY2DUKu7RbRr8Hnfn62byEdcEbUF29SxEPMYasjTiGRk7KXcUWtZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L9ruBrqHyPzGRgZLxYp4a4JrhdxJbU915aQrxtpozkoJzr5yPriTjwAw2SWcbshrk6dDtmCmDmi9tzYR1oeN6JL",
  "key1": "3bcbZxrWzrKytYP5iWknSfruaWVxj9k6w32Syevpq2vfkQq2eCgFeWeD9ogZbgF5RApctd5XhDF7bzFVBUJ4Ytqt",
  "key2": "mERZzdsCCg8AFham7EdZJzCi77cYWgTF77AxutipX95cNFxovJhJo7r98ZhJg96KkLc39XF5joGgbKQoPRxBgFB",
  "key3": "679NBbyqAcBS9VcfArUgdj5d4mGshREd3nLytdXDJ7yfDLDpccr864y5adYTyFa129jqwpuo98CayxnoQrBrcPoQ",
  "key4": "4JpBhHrCT5yWD3EjQKHFMz5bj37g8JHjfWWQzoQ3Gf12wzjFJHmaAWXH78GV3MmNSsmrMakbRKKGVKRsJnKRq8HD",
  "key5": "2NEvkvVNJ8mKBFTHSj8sz3HQeSnF7vFtM8yvV1V9wZ5sy1Jcgt9iWN3cE2LPC4PsZpvWGJLGg9uoYKfxBdyH9RGN",
  "key6": "2Z66jo65MFmg8vht9B31EUsSNuyXx44AaZo7hN7WzHUSGqmpgxHtygMgUJixxqM8WQ5GYrxj31obF1X4p29MKpfS",
  "key7": "5je6BJvnZ4BTE9Av1AZk5iK5FkfZQuTorwpYoC6dz9GnNSJNwqwo5tSMwUqYpGJEeXcXX9agU9hL4WSgAanAVgS6",
  "key8": "2He8jVkKTqMz4j3BBHSaQPBcTQbHM4kwFkkUzuL7Dq2sPV7oiYPGofnsqhaqxqzu5gE5gqnssiSWBx6Ctz2eYHgH",
  "key9": "5pFfhPZi3UeTY2iz61ckCZGhmwZEB5jm8gVxvhHUnsuuW7hRrGLae6JDDWC3nhe8JiLn8EmpXjzJeLugSk4bWvqH",
  "key10": "4Jqvcci9Qj6pN5BEBL3STGuwN7A8x7QRTPdtCJbEZUXk8Mog5os9xGoik5MLbE7LeZgmCnTXVjAJFRLkdDvh93cq",
  "key11": "5hQLhpwZjVNw2XeWv1AnETMDVhrtjrhaXVr95vcDeRZjnd5K39VQWFWapvUzyvsYHV6G3qbJYpnAUxXZBHVwYqfd",
  "key12": "3FvLmcdzZdzKziPGn9azta273K9qPPNoELCrCB19YHBV3bWQsGfhPD2ewwKYy6Vsvo5qJGFy54HSraF8cfLDVptc",
  "key13": "5G4x2PJQXRjuJX5CNv5ZjSTzSgL6Dt6xbKQ5Kv8tVshghLGkBUhngUhF9DGYMh66UtSVeejQ9mc4on9YDd1BeMxd",
  "key14": "3YCPtus1NZhn6kQVLR4PKkKzrmDEJsRzJ7EMUe4epWz4gu1zbRdMP5iQxQCxh2NWCdyVwWLPh9LwoPFsXSV5sjYg",
  "key15": "5X6nA7cLrn7kk8muFFEFqE1xm11tErCYs1uX4Rp5htf9R3bVz3mqjFqQA51Ccgcd9tNCiwbf83tWdUvUam3zETeY",
  "key16": "2fTKnnowuiK5mA51h4USjCCBUEEHAw2rpqVCfuEMNQzzSpwz4xWQKcHq7LnDbAeh1UJSRtJ7mU2LNMHS7cvLhte9",
  "key17": "3vzQ7AXZXwUafFrvvGb3cChPt4AtPyy8X2nK8dnFYePWDNog2DkcTdNx2NWg7epfqWAw93haLkQoarKZZQPchicP",
  "key18": "vubvxsM9WMozHc92QagTgQMahtfyAKyS29J3iuCxd6MNLcNUVEyVst4owi2YPjQXSUdGqv3N8j3C4S6gtXdQkWZ",
  "key19": "3SxviEZ9kDsmPuuFEdpMrczjBua3iaJgW4iz3LY5E6qxptHnWB5XaNQZwrf1ECv3MZ5Xgnozzv6pM1sF7nGSPZbE",
  "key20": "5QAC4dp1XEu3YQ49KnbhWpZxZxTNinz1HHXQNmdGLDnzGv5JDg5UbSxBZfwrRZwiA34Ztg9haZYWrgwh5kmFDtEY",
  "key21": "xBS6akn839BgVBi7kQZUyq1FbEw5wxu54fRZB1NRJUafSaEERAnDjzCr2fxfbD9WDa34yyTHgtFkm6h4nhx7eBv",
  "key22": "3nKTSQ3KbRXJGqaVyvDzmyn5kKN71GbNPQ745cTT2En8henJWZpFCVt1zmARfbEa9iNdPApz6bdfZRzFdREPeKBe",
  "key23": "25Ut33QFdbtpUtcfWxdvZH3EcCoJqQo88xkD5uADVWEEmFWj9c2a9GsruykiUJM7ZRLLasR64J9f8GxMfK3e9arF",
  "key24": "5mNxFLPPWLcTAtdQ7EDeGVSBshRoKMRUeW26RKd7TujRPcKq9QpRcEoPfeyuf7GDdx6ftaF2VxXzWb1cnXJbXFLX",
  "key25": "4mj6NGv3yZFaXDzx2UceYHhNqzFZLNQv6pagbub9ZfY8DtjwsjiqjvxC4mdnoohEUi1LEEzY6JHKea8ZUJjPDksL",
  "key26": "3p4Wdmcw3tq7MYQKvw1xU73MdMjfnChkJXHBA31foF4JUrAKD3RjoC2EjaR4PDfxYP276ERDquGXgB6rSsQBhuhV",
  "key27": "5ZE3gaZpNdWb91UAsXtiukstEB1ZCTAKTCw4oGZT25223nCEkUW72CcBMiXtkyZsXMtDuNCYi6WgszwxEFBXkF7i",
  "key28": "3W8M2jSdnvwfztyqYT3FkNJ4S6h7PcDp6bwqmGb9YBFwSaTkhgyfZMJaDSAViN1tGZeEFvwwTKqRXnefxkVkVpTz",
  "key29": "4XtRjnh8tyodTE1ZD7s6dFcXLmvbmVndzACShyyr2p7sKLHr837FfgPGgMLFwhFqKMXUNWqijWqya6jX9q8NJykC",
  "key30": "4fFmosqqRkdnXugFr1bheAMXVfAMu5AK3m8Gj4ngFmquH9kYydhjcytrQmTHwzcHyVuT7tE4KyoUTCgi9TStJ9fd",
  "key31": "4CTRio15vV7CkTcSoCWjsxSk8teXnP33yfVfwPKN45utiG58t2Z74ZJ6JNw9Tc95YGsYFVuZU8NVRzLu951368s2",
  "key32": "4WBgUnFia4CyG5SYtDdHaFAmsPEazi9LZ2azifqfxB4LyCSVRAK5UeNCVrFAW1kuYdLEADUDKT7VNgtvtKh6jb6m"
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
