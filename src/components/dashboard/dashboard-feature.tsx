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
    "4HVEtsjC31wSwa8GXke92MYAqdfF6AnkWgrfKh8fEN2gZJpV5Kysm9yTo1Pd39agucoYxHJXXo84vDhAiYuxmGCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Unz6npAiALrBVFyymoQpDs6NyBVQZ9Z67D1hVCst1jTPNxrMrsdtz9NmcBjWG2Be8EjBtChhMXwZkwJFbkDbXGk",
  "key1": "3RZ9Xk6MbtofmGVLTCht3o5Q6eTXYRBUQyA8Q1BtYfGT8TRaex94JBpWBmrDyyfkBKyUQrvSaA3YcHBMnyuKpgLK",
  "key2": "2NvPxwp4PtkacGqpZP5jPeZTYJXEzNY2dnjfeBUSdtTSnvYDiqHkmfXnd9kuMVGHRP75So35Sz4WWh3AzQrBDxfR",
  "key3": "4wauJWinGQ9xrkU5ej2NAG4bQczgQACeb9Y7v4e148qsgVGG2Hg6i7uPSwq2jSeQ2xqXhKrV2mw2xLBa9ji3Qejp",
  "key4": "537uWuuJtejhM71L8rGwi2PvhhtEvMGTgqspX9LdKNAJhiseBTtkQMvWrUjJDp3FWLegbsRaGf3ZZhmcRmEF5xP",
  "key5": "2YMoRNvy2k6AEaJjPYqS94r3FTfpGmgr18PbJqcxxBh7EGMxghuW8k3nCyN6pj49qc7WkxiV3eTi5dLbggJKnTwz",
  "key6": "3m5Tdn7AZpcAC5Zw5QVaaMY99uwX6J41c89ynBtY3qGFV539PDRn7DLTx2keB7sqdFnuhuD6eCKVckRYXASDyAWv",
  "key7": "3t9pCQYzxCu5qySWofquJdHf5LQXHKt4wgrvMzw2gxJkdgfiAjw74SufaCMbGFQPpDgjHEK3QSxWdi7khsG2EZ68",
  "key8": "32BN1mGbFgiZRMPkYUnoGtzBtrPS54RNf8eQbidPhebNNGhRdoVCB2EYnErf9FeaFuwJos2mEbwF84DwTaSQXs5F",
  "key9": "4onaGi9sCTRhcyvCHUKQPUujKEfxqsDShP6kT3XyZuBtqEKmqq3SuiYiNcfKNcJZGFtacVX2MVcLZny8PCxdptG3",
  "key10": "29vmQzDUh8wqpSET1CXptGspkbtNzhzGQunHz5httDfB4QmL8Q1rRtKVosGF4o6KZxh7GXyAmYWj8iEYNCkQaVYi",
  "key11": "3A3MkTSaZP3j187G2NdJXNvMaA4wMMSYPdLHu9BB4t67rsacMAEdyCCVQgUDrCQcsM9ceTF49LhGK2KtZUK2uYRa",
  "key12": "4WL9W2jqcVNXKwFNjzRcCLHH4M9LTec7gXXk2DBhE8rki9N5vwHqTHRtG4DwUcyHnCp515bN8GZk7jiECbvA6CAJ",
  "key13": "5Pd33zvWvF83sGRPbh38rJqZHCRHm5HmJjUoPvbKZt3iXPiPj4959rnSoz1GgijCnf1dWQCXhmkYj7juSWUGyon5",
  "key14": "35fJnCFroibmXn2xUSgADZzfQUadPpVy7WPXzqTE5tpdsU3vf4S3UrJrWnD5VXwYf7Kh4m5hxNuiW923Rzu9NaNK",
  "key15": "4LavUpc45thpJ9pFZ4RFUgfiqmw9fVktRW4GiVciCUv1AMYMc1PPTk17D3fnK68e2YLi9raSkNdguGWjL6DYWx9o",
  "key16": "3PNEbQ4eAENaZQde87g1rRGoP3fbZE1arcFj7NzxT8qsisLGZCUNXt4bV6oD6oRBNXXBENw6tJc7RdZh38yjsb7W",
  "key17": "4h6UMhK5j6uTDkiXkH5vX8jYCNAxfns6BAvcRy2kdckQGpogMBf4XcfWQsj7JqiXYVUJJVgSVog8PieGAo29pPKh",
  "key18": "23qurtZTkkPm91h5Bv5QUZkMK7sYsng1BJWZg7Pw1gE8DMMvq5dwBaJdoRVQZypE3bi2WctPjZCGDjHjFwWQPfP7",
  "key19": "5xekvsSQzNoVkBsEUAv5GCnyiNzuWCwmrJKBXFPDkFJvjAXCqq3MATGgKB9uQjqbir4L8REyXh99vAGZMBFrJDgN",
  "key20": "67XTds2vcag7q1BrqEFyfCJwusxdq5dQBxiNzMMvwP2243GAfE9CsVMzNU5RqCCsGR7iahgU3shjHGuZgNgGtKmo",
  "key21": "SpyX1YHptsjDsM1VgvBXNwjGXXAqunhUBQDJsvKUXTZ8TjbfQxMX6MCiBGGmqQB5mu8zVYVsUExjzAAxQyH7HL2",
  "key22": "dHFcydQdRGTyXqZVTW86xnqy71mmuuJJkBf6oD9ZcnqiDJeByryX9H21xSjhW7fN8HyoCckzQA8DsG9FyREv5vQ",
  "key23": "5BmS2yHw6cEEXfoExBVj2HJRQwSoTJF1utxo1YvRucwW6Z7hVmow9ShX5LFLL5rVykDJvbBEk2jnKJFU92EwWwx7",
  "key24": "3sqCxeE9QdGzqykJSPYaKrXCTFQozDzvuj18JKi4Pyy6Fy6agAzFM2qSGxvQSLY2ZbZY7FXbTrtBuV3snZzN1tmu",
  "key25": "64JVQgaBf5ACHTBt6yQwCXwfqxAJg2UJMHTzt2pvYcQH5tFh9LJtbzB7NcYGM4aH4UkVUdFus6yjxPKRtsES7i2P",
  "key26": "YwjY7wwEq1qiFnsjJZgHgbvQmHacMb1m3acRVcoCuAWLb1szQsqEaNSfiSAF2W8NopXY8WTVSoCzXm2VxAfAuiY",
  "key27": "dw1vu5nWmTyx4UUdZRS5Cng2xfhEP9U4H3vWpQex8kibE9pRJoKAyMZTfNbEDR3MPL53G6FYipiKzvQ4VX3mgYY",
  "key28": "5uYVmyHBufvxPfh9ZJUFrhF1c7gGoXKFAJnYA9tYAdtVLGVmAxrRD2ngoubDMTDzfStXMGNcFp1WidJwxuhBTAGC",
  "key29": "2Ns5TaNA7Xh9dS6rCE5WsPpnHhcLe5pMjU3sTtAp2qrqNzW5W1EJDYtcaUgTPgPYrvjhDec5F4Xh1vaUKi21QMNA",
  "key30": "97vYG1utTL5ThHNruvK8SW7goxPwQ3mPmdSxrvuqe7UiQu3Y7sgxrk79RXTaPpDYFYyRWNTHVvvHpNYstrfZu7g"
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
