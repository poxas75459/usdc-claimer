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
    "5KKSP7iYZ8USAeUAkZbSd1hAAyeKKymPCf3od4ohgRZxb2m9wegNdgBMHjHcmNCpKJ7AEbmefoE8K5iejDoLDh65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bXrr7MA41fBSXd9dLTAuMywA7agdq4XVRAzLp4Ac8G4Uyd51deExUtiAb1a35LjgTKkCsk6gc3X1kcHgtaRoqd4",
  "key1": "3ryLPgDBTwbvVHVP76dhrEpRASUzqjDfJff2Emq9d5yr7TbkUgH2hqLEjxAKqs3ZSsbC5PZWgKK7WU4no9G7o6Pd",
  "key2": "Mu2DxnaRESrC1DHyUYhTFcoxTtEe8wMTBmwtBeGKPVFNXCsAeVgqgP5jwzcnaqWh9wrNMGw8w666PuRqg12AQ1b",
  "key3": "2hbsg53CdfXk44DWUh9R5ZEzjEgKv8HR9mb7k5aAiX66KJXMqNQDs3kHWTWJTvKKRUYoPLUVmJmMqxAoHZXDAnTP",
  "key4": "PSYTwFFVW2s4TDAcd91t95o8mBeWjTUfxytfwSmU7zpuwRhWC8kobMJeqVPX1uVGDv8qh5PPCyxV4tp95rvjukX",
  "key5": "5Frr5RQ4EeigpTfn5dhyzK5ELgqVDoQZb657mpWmtnUgq1T6wGdMD96hNuPARBPWzgjhzgkYiZSJsZR8t7UMiNiB",
  "key6": "3bBEJWPLzUWVHSWkTYfXV9mDRre62MgjzdUeRm21uQdPKrezLcaK6eAPF7wHfqA7JyPvqjwmKb9qejmtGs2qi7Ac",
  "key7": "5oPtrAkiBLiw1fV6pX3hSavaZLwP5nrnyGvkk7AMUgQMWMHex66iwxL88cypdD8fG3ZHdDFTjt5bMjL3EZjw2wvT",
  "key8": "2fPrU8YHiZ4vFir2pZswQwwJSXFgpR2snYYmbfENpJYydr2q46t3R9t459Xvj1aqcV5ku7tUjfStQzJ3w7ajgimr",
  "key9": "4pmHQGzxzRz9Rw77hwyKadgnYCZKnuKRqJibegHagRSA3GsjJa7ruVqz4rqZqSa9uBMc4ZCy8T32iUsUnJUdS9wr",
  "key10": "5QZJVatvZp76dbwUgNyvt4dcweDoit6VcG69kacQ1J481JxMVnPA4jY8Vj3teBjFavkDKT5Z3tzPd5u6Mjv81CY",
  "key11": "3zaVLDCM7jUPvs7aSwawRc7fk9YqqxKngzQjLNbaSkW7oPQSWHovCFLv7o76Keex5TtHyugCHdXhDgQrEHi7o9e6",
  "key12": "2qfydntR8tgd795v3FSTPzpdpUdtxomJEUxaF52cNyjcMZVf77UCsSd8DAYFjBYu5XjKT7hyX5888GJDKK9BFW48",
  "key13": "4kbd7ybHxaiyUwnPjy31yEAtg1A1F5LF5ELhwiFNDqafbMyqBXdtTx8QD9YT1zGjkHzgws16TeMQ4begaDe3W4VC",
  "key14": "2ZJxTiPUXuBK4h5yg4BfYiYy8rKrwk4fcYQUFouqCKzRN6EowQt9ugSFK47hvAAPRHMpEMzUCN7WbzqFkLQFhR5B",
  "key15": "3EosaRcoxJxg5rbqoxc7TgbHAz3A7rVJ7c7JaZNiXMDmcqoBWNZZngcr1yD7AABcbH96zTQKp3j3S77y3zFFxHLm",
  "key16": "8JfNrAeHgKTobb3yND3VceQDn3aCXDds94ZwhJJy6T2y2eHEyu881Myu9j5uJ237J8e2ZNkX6UFJonXM2W95kB4",
  "key17": "4D1NkqBsJSrbaNDwtdjuy6MEYJmu9n6dyucyFv3GvGG8b2gSw7TWjqtpu2RpmYd2C58b8tg6oNqyPb8iWk2i5EYu",
  "key18": "4fnpYbhkKBZ77Zo1eRHJ6xHTnLCo2Mprzg4ojJfU4Wru8M3mk2r4XG3inSpD1cu7zATkM6qWVgD1nVaLdFEeHJsS",
  "key19": "3pKBMhGKUnGhFPzwc3rJBSfYZoc6a1WqkvKYJFBz1KJmqoMvKSBgt8bqjXc29MdG7Lu49wbpmsHq1ZTCP9aPHPpW",
  "key20": "4MV921Kc3qhwMdoRsVcdd1jGW2UGTVfStvvzHNAg8gHGD2knfJQqdCeEqRKPT8D9vroK6W5UmjR6mYsazHU9bLhT",
  "key21": "2sMxRxebPXeLbbtjApDqhuLAf8CKWhZ5S8inwvpEnrwzv51EzirxNcqEbxNF9TEye9HwRunHpPKmWfSATTVp2Xu5",
  "key22": "31MN7NRuBNfYeYFCrdxWqcDS7PSo33auYMozbMgEPuaqmr4t6pTY1cfsmfTUHVqWp4dBM2kosUugasvcBp5UJ5XV",
  "key23": "3UwpP91sEMj7pxpqrk8hfdrBNdeoNWWMuPHTdFL7FKbcxacdocJHNRLSSCkKgJthSPKXe7N5cLDaAnrbNxpaEF1b",
  "key24": "2fvAqX8LuNGRK1zrdR3pzjXS45VBeMiCrbGHaPHjjmCssTfiTb8RLRoYZTYv32Xt528UPMFkuiycwv8ycfiZghnV",
  "key25": "3hR7wq3Q5Fj6vxQZRKCsxuB2UJKFi7TwYLYkB68ogRTosLAPJZ33R834EhhhQBXWGVBBrVDbxE1qog12cgK1Q4Fx",
  "key26": "63R8CPx6cFfKDT1PywKQXChcJJ1V5CvvjCkTVBoytvQSPfXdeGx5e2mM3f28jzGMtDTZ16Mu59sCG557nAESD9Ts",
  "key27": "xnkziE5Vqk5Wafo65i2qDqm1jv3MgcN5rifTJXbGGTWRDSp4hYNNobHQkca8eLiEwd4PXVhcf8j3nrxjD9kFhkz",
  "key28": "2oTyTTgvbVfYwWw5LBSA1wEv7u4gVotFY4Zy69DS4cDtu1S9ng6iahYiQTnPTtUpKjN91QeyBjgz9W418yezsF6p",
  "key29": "21gcjUAVY6NGZb7RzNhUCdbtT578NzBxD27JkkeVtU9hxpkFG1traePJyar4tWisMw7DhudzaPQQveDHntK3Qny2",
  "key30": "3WuhYZ6UWVGBXEWpiLenjWhgAWDvHSeu7MpuVWLkmz5rzruWjbjRJiqsKGT3j3D2DGm8LbdFQLxdeNr1yr357SuW",
  "key31": "4SSye7mpTMnPYGGZ4pkBmRpw33htAbuSwN43MtQMefcp6cu9Vp6Gka6PFYF4HMFVqtwjAjMdBDAKSWKHwm9knAqK",
  "key32": "HE7B72P1nM4KpSBhWmumzLp8HBv1pavz5c3SPFaZHiDSxEQkLNiHVynctfgHKqWPXBf9wVX57D7W6UGBUCVCa6W"
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
