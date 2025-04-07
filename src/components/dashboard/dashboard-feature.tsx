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
    "cKkk4aHwMHu8rQuXk82HtHQ1gLtq78jvPCQD1QjpahY4UnpTo8MA2QsEvYsgggXwU1Sxefm5Njm843DsnBD2J4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7RhZLKkmAea5oWUdYo1ZCGQRFcjkqeJ32jnuhjeLPmj7Hg53S5tHMztgaS52BoSPf9Djj3jPRtR3uVhWsGJrpu",
  "key1": "2SrLRNqqAuNwnq9iL2xv92qTKpfew5tdRuhPv7nTJwbxCP353EQ24w3giLbPakMZJaJPajabyqPG9U2gwj3HrFdG",
  "key2": "2d8Cv3scuP25w4svw6uRGfXc6e8CmJqZ31W8YzktDVgn7o227BuZnjry9FEjA9xf3P6iXgA8qtkPHqUmHTRMwzde",
  "key3": "A29ir1XMh7enzjnRYcAMs8We7SnL7C7JhWwiFmM5P8gQnbWBm9zfNx3qmR9RnvEPNubBCUCxhej9Hej53JjYnUS",
  "key4": "27niaszL6Figyyiw2CzwBFxBa4HGhDYqtDtXJ343pEMjnXM6SE736Uk62yiSc1VxYEsoNa5zGHRkccnmxbZTkiSr",
  "key5": "PxFC8Gc1JwuJfNcD8o2DjVamNBgN2jXALtZjyJx626zKPUyS5Kz9y1y7Ha3nBmyMajgenBbyeEFWZ1CRq8pufGT",
  "key6": "25DEQeeBPHduGqWu6aeqpCWNxEEPL4LE9Nui6acp9FLBwiBZwrDQCU3EWiiDUypkiE7EurxFGWnqW71fPnzKaykr",
  "key7": "2j74ryiKnTCZKLc1AokSnmEjo64G6AoEaM6qoCxHeKEvRQAQiQehSJJoeX2MvG79ssPubgXPMErfoNTyC7eZZ69X",
  "key8": "3mrQhHPAgw8kYMhTsLSVfLzeSc1xtddp4p4tfViZoLz2ur3LfajrKTBKteQxuLUMc4eM35HgeiV12iLZ5b7Wskza",
  "key9": "3nadtEJBJv3fbpYb8cMtjnj9xjte6d1NnXSdUMzr4B5HCSKBZ37DQTL5GwJJdLysJMqovAVhjc7Gp9EK8AHw2SaW",
  "key10": "5kZmqrxKhmGkK8LH2ECjgMCv1dFn1DfqDndpSF8PrJs8mc4oApiABMFNckm1D6hXtqy7KDTzXASWvhBUXYc7SSJY",
  "key11": "BMvbk7LUw3HD6fwzN86hsiETQakxHtqo5vJ9pURkanXXefFn81EEwd4uFkWpA2TnfHrdFJBAVpTYtHYzwFEqfrk",
  "key12": "4TFNQx2tp73mr2XeKyYbJBH5dX32WiPDeTLX9aYB778aFi9HE4LL8gHGtrs393dM2RTWJYWQMKrUKdLv1bVyfRdQ",
  "key13": "3wgSVebDZHBuTkZnxXz4qHHeVbSqBTRrmU2CKbPMyokd5kw4Zn2Rtvc6YU1HhSPR6zHqGDwUDS7FZHqhSQTRFMDs",
  "key14": "2Vv5P73giCok5GQBgwZ9jrrWRMRiGtzzWyb2xdsTuV4pA39LCypuMyEeyuEBDpyZBLpPZ5T676qRFeGwtvs9PrjK",
  "key15": "5SmRzMYYZzjJptQSNFYzXqyzb4KVG5HZadVs4kc4R2Vqw9oemP6oHrc785Wa6WXjRHz6zA7keJWQmwEHy753j1MJ",
  "key16": "2HqPv11gsJodiTQGPGqgGJ5MFei2CiDqZYw3njBpRefk6xqH3gjyRSDNkbY7WZwiZASKnDmntctfm5AGx2Kc5URU",
  "key17": "RER28LWtdyJ9DeVYTS1rDFakWm4HJPVKDdS5EzaRP45BvsiUsBsQxKWZVswbKkTjjiXUHxjD7JxA2KGCNbcBuvv",
  "key18": "27tS82UPrybFjdfY44KE4GU1UbGhhgXV4PgVa32C9qTgNf8Hfni5HffsjuZsoaJb8jojMQZhap1WCH2pQKt7FFE9",
  "key19": "3LnpFGT8qh9QHf1FBEVkfz9NMjhiKuYt1aTSd7FAz7U1LbmsFPBG968UVYx9FXh8QsdnednGtGMRqWNJskomsKG2",
  "key20": "4rKveS4eLKxndfavWZHJ7i6BuWQUcnqmadyS9dMwLUPNrNQhhJefHsSpUsqCS1Fs41YpbMz8aSaG3AqqRhWZ5EBw",
  "key21": "4DTi6jKTos1tCUA5hULaKNGRT3PDDDrBL25SM7cwce4h2b4dgV3nyx8XMKRZDoA7aaPq3vzkvgkTGEenDsfgqD2U",
  "key22": "561epWe4zUFgCpQ84ZgN2q3FiQGTUsJhBnrumwQXCPajmwZ71Y2CJ3cxTWXr5Gy3fQiTrHyoyVq3PM73Qyqm5K7Y",
  "key23": "5AudUNAJNG9MLe5RSwmpsndSkNfj45bN72dLxbkeG6TG3UMwLkgCgvG1za5DvdZmAxa9XxzUNZyQ48qAMziKwVst",
  "key24": "3U3ShHWQCLFU9NvbTijrgChyoZUc1d32Uem7wszJcYktXMxifqeaZ6NePN1Pn6mtPhTuGRBqW8U1y5v4Np84u15j"
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
