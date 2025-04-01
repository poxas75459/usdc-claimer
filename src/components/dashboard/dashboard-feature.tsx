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
    "3E4Ysinr8bGqPUQLVqzkv85dxkPJiK1qpKM93vghXuZwmbJWY8YTHvtm3jhLqq365FDeppb4bp85dJa3fueU1iEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CTMYwSZze99DsH5wpTc5AGfvNsLKx5EtHD2XzSC5JEaex7betsEmz35p42J9p7Tg226YsaBaKAVkbceE2QfSsSR",
  "key1": "3cSqZF5mZREoduV6KRwKhsmPZrUr9bcEpEtKiXXghpJiRsngdtxVEMXGuQWnM46dmdSgLtiNy4zur49DUwnsNgbw",
  "key2": "jh8ywCAC34SBei7XQSBEJRGv4v6uMXMLFBMWtDKej1GcVD2XG2qgEnr2ssTVMVS7whYmgLuPDQ33YrvmiqP3bQK",
  "key3": "4Q7pvCkptD55rzu3osKXEnSSqkfu9jMnB3eCBfMouBf7Nm5op5MTpHpERrmp1SAKRCwsLTQ8hUpbccrto6HGjk2B",
  "key4": "5SCSC7YpfMxkVTC37ntLWQtS5ZNjz5T38ZGrFniJGddcUWXCxUJ1nUiWtihCi7cfoMb8EDhsF7kr6nLfJLox7DYr",
  "key5": "dLNdDCjNpFNG6NPDbaUCKSvbVhDvnWXX2iMDPFChAmaHLBvTu6jiyV4QJbSEDzMveRebvpGDNBXpkHH5Nc6ykg9",
  "key6": "5hvYAD5atFMqEo47edJardebpdg8Ut4oS1mrF4JvGj489iUiHmCcJQmos4Fz7AmKRx2nQZkyVxG3gmq7A2zSiCQa",
  "key7": "2WheLbZrageRKVWZNKvkvH7TPwK886xTJ8jCxxdAHofpq3bDkPbWAy2CjHY3aaGLqLUfmMV4zBfV9rdi9QTRjUpx",
  "key8": "34PirY1wW2ontsQ8spMEff7c2vv5Nv7T63UGmprnTtGmGohRpAxotrnFj39zQiPMsFPneociUWhJMD2DoB893mXu",
  "key9": "EJyBmtursDEzRsTuHEgqZKT815gGpXedhWBfqgimbKFW4eZ9Tof5uFvGfa2UyTVLTnUWCb1nJuyMfTsDBECGfK2",
  "key10": "4jSQFRYMyHKbn8weuUhB3kwxxozv2H3WZAzetiyiJinRUjFoAQWP2e61wCCrZ5ntPEprnAxM5CsyHRbtrw9EkzC",
  "key11": "2BXkgv922uQ8bzvESE3B9U4tPLCVtTZkRr1LAKuo22wpkQSyTkEbfmjzcdVGfRSEEaaUwVbnV6xMfYq1NnevzkLt",
  "key12": "5tz5YG5QC87Gev2H5bSMAHZ9QdS2ahPz6dpidh8huNYXk4J4mHP9F7Fk1Te9LL7ijww9RZFKvU9U1NxSfBmHjvws",
  "key13": "5cG4ZLrsPYHLsb2o72nEExCGASXEVS8YZLMxskZ9mRmA2HwMppTSx3bQ684gf9aNg2K84AnSiSNJhBhdrvrNY56X",
  "key14": "vSShdrLMdAQGPNdaUEzWqkMAzrd5q2Eich5vRgfAxKUXbXaDvTGweuzfvvxV1Q3YffQseQ3rojPwviEB9KZvtvZ",
  "key15": "3qUWz1KPUuWHsCq33wH79nrQ8TBfWBqY938wMLvsXrX2eYPN1ZvTfnECot1RQRV5GSGxnAbB5zbAHqfAeuAARyTx",
  "key16": "5JGiJjh8r1uS98XBHJ6hcLhWvACGf8TDHVZXdhvyY1txrCatGq4fQrFstcR7f7wNgU8vPUc13hnWrE42KPth5d7X",
  "key17": "3E7TstfP4f9pcgKbVeX4yRvuyFSi7viB5uyLRtogbe47hEtztrFm4sARAqj2Ex13iZFvMpm2magDsvkwN2L9LiJJ",
  "key18": "5qV1k1x9u8hfEKCCZm4VD2M74GR3Egx4gvZHtKxy87VdWvtWqKb5NU3g3Lw2crPNhSEuJ7x8RHPVfdf1VfL4WNC8",
  "key19": "2rYNnQecZ6EtRxFKcGiEV7spb6iQGBemGnZAc1QUfkzx62LSYJJM4rPdTeKZFziH7JyG9G1wzNzJLSNDjE46ZdHk",
  "key20": "5x2WbYJ3XDQN6grkeK9gQnjRkTCR8ZTW2Ps42HfxC9Au7MS7GjaF1GF3956goeQcimrZXhS4vz92wiWmq7pZFDN1",
  "key21": "Az56Yw4gdewWCAz54iAXdiGV1bwjkdzrDo5t8s8HiFQAXezL77wG6JMqrRudYm9nhuUkbk66VxakFNdXqvUkJFk",
  "key22": "4GoVYNtaV7RjXKTsPMUoa8MJFa9NPJmBZyQDQaUQJx8MiELGnvPaBe3XBsxzruUYefViMrPJmYYbUptHK9SenRHs",
  "key23": "5aZWZiJgdHdH4x9PJEAszu9m99arCfUoMy1fEmvvc9xT2dy8N2v8nL12TjvSw9rSPhPnM3bxwfNHg7Gygf6gvv6g",
  "key24": "c9BgAhf2g1vGpagGnzYJKKGr3sZGaRsxz7uPdmouXY6xsmMNrHzsxyZYFVvGBa8yAwmTxfXCbhetPs34XtQhur1",
  "key25": "ipgiDVKRBxCh56r1Cjo537tWswfgyML4ojRqBUua3rLfqKzvSE6MjxHf5ZwyJJZQdmdm2Q43Lh4FmQnBMpgdpgS",
  "key26": "5AaQvwhseFAwFbGq53UDdQ3EgGz7Xf15zkUtHKvqrA4ZAYawsJqrNKCS34RWZ2KSpmWcngtNfqmsiffLwokLARy9",
  "key27": "doTcw6iQLj5khK3GokMNV4VhyzKoRqbF1oYvJNvGxUSdcLPCxhxnsq1xWBXaxKA3amfwGS4QmDnhE9BXpPn41FJ",
  "key28": "esE2aviWuUJujMgPqMi62vGcTW5gpCPe7ebcjW3BTViqnaJ3phBJWvNZVbo16AhWgQUtqUTPwaoi3AMk5urs4pV"
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
