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
    "3ajicwtZR9zaZipmp5WXG9YFjPAbwrfuViNJo3zBjezEAruriB4QduvrJHhSAibfssEKNKdiHSwxDwnnXL8F1dMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FMiJKvEir2EGHaaqnnavnasjV91TRMygw6axRA5ZNrjej3kEdmyCgZv7Y2k9mNw7HjtyhkBivRu5F5Mtrqux5Zi",
  "key1": "5UYWEER3CdjShBpSbkRvW1PTit1Cg9aoVK5CqG4i1yvgUZEqRombTexPM5VFowE1kSbnCx23HfecHLrNwKRjN4Bn",
  "key2": "3LkMQGQgAi43fjaE3dvdQP8Xd4iELbtUAzpYayGQZbCHEQQXBMHuydkRL1mpnU9yy5XkiCBBRXxDKZuVPSWL7mCe",
  "key3": "47PbrLBk2UFB75hMWxas25aTFVWsttb2Y35dQ41t6K1PU3iWTvSHBJULNiK3Bgx81bFCvU3zzEHRGKXD73RB3ccY",
  "key4": "5XLWaX4Vd5rVJG3Y8AsZdxGQcAaug3jo9Vs1wk4cDY7s6PgJwevcCzqyuAzwCugKvaQfCPhFEBpFEB474JaF8gZE",
  "key5": "33C37ZPpVwF45a6CFrtGRck183iFMDQtaR2besXNCMnGjdJ1Yb37yS3RTPPBfbFoPTcgDuoJ824TYch8dfyaiJNt",
  "key6": "4hNLsb197DmBByuVAqPRM6jHDrMegpQvUnQVrKBkAhQSRG1dD4pD6hojLgaXng8wzWmhryGtyTLFEJrRnN7nLkpk",
  "key7": "5JKiyDNaLX8Qn6Dgt4fFFwgdzKinu1Wxsfgd1tLJQyvVDjxVQf8TL7WFigFquAasH78Dr61ihGL9MxmHL3gENbe8",
  "key8": "2QPQThoNGRVY8LViw5AzxL1BUwKS72i7vBDA1eXXToCGsH885C4FZ7etsxsoNhQCaZ5tMMmNkBTRHYYKxMnS6udK",
  "key9": "61Xi7meMkBsJ1BfT4vidrDNVcMjQZAAto6KHpQvRRYosBdYptGZWjvifR1VRW6h9vwnVccfuoXeAmzguvGLvd7NT",
  "key10": "4w7ebHiofAFPEBamx6ASKs7Qw4mtZaY8BoqEu3hGCcujG3pZA8hvDcRGqre3FWih1HQtUkpxRNiAFUr84VCBVpdJ",
  "key11": "2v4YEva548vDnHEAoLNXckwZGm1A4QYrqUmTiM6yHovVLxE4fEd9CWuU74Boamiiz7tynfzUr4KN9rjwmaBDGFJE",
  "key12": "4JAt6YygNH95j6DVVTA2fqkgJzEmHRUDLAAsFBK2bYf6NqfEmicnab2jChBQzcMzdYofCHfRKiCMViWQUW6aUpWw",
  "key13": "2iEzn1fCGd4DM3FV5X5dTknCMor6tCLNceUHP4BYH9zehPgK5fkoaTUjkPrBZQJ96FTmHUwTHnWPt2R6RbNVE3Cc",
  "key14": "2Zj5nL2gwbj2VaJ64LsQBNxP8zNDcSYSJaM1Eey7ZE861RMAZsYG7hhj7pN2KWNeqEzuHPwE3nX8xxSdQdwDyAv6",
  "key15": "2TYDboGPUkFuA9cowsgiM5hYLeavsXdbTD6aQ1HpAwXndsCcMZjezYaYp4sD4QY3N4G1JvDLiF6EtEGqsvUYFUF",
  "key16": "2aeTc7mDDmc9p9i81JWsgCRKqq7Mo4e5LymNuyFGs4dPb6XjdGwVfvsGydPH3jwQitXPZLQYjKBUr2EHEF9x8cC8",
  "key17": "3zQzKLEY3y6SBXD9WxY4uihxe5zmCXqf8JwWpCjnhBbGp7efjEN5yv299GvLkmk7ZKAuNBFQq79UiUWA3njKjZ54",
  "key18": "2kiTMi4q6tb24y7DyAuM8VcvjE6iadpWdnj2kDT86D7yWc6MVyARaSNE9AYGBVkvkoJnjfxBkhVn5RG9fpPTZrXY",
  "key19": "5qJsTyLkd2FURmfLYLrfNYfJLBHLqGZBKq5qv68RX4RSoe1mLr8WGyfG8xvD7xSq1kFYCSmqmdVVtdck9fPxAvs2",
  "key20": "4FKfDXAxwbWTSF4cTGe23Dn2qFQD6w5nJVDpt5KVTd9iTo3EnDZmJLpeDvS6i3Ygaa2QurW15j5YehhZtQFyxcRZ",
  "key21": "34WjWWFr1TmzuAvvyYvBfeeKVK4dTmNev3AiGCyHqnWkxju9tLFdV8TV5ypFsDP1LKUVkWUuwWuEMGfNem393wiQ",
  "key22": "2w1ipMARMdgY31PyT2N1WnNNYFBTcjF9JRNzFtCCjbkgXGrivwjpnoC1ZRD2Dgfw8mDQmKA8VStJgWydmt4ex2gR",
  "key23": "4DijDAvzxVyTN6Tnbo6ipiH95DFHyLdo3LeH11mrrE5puJZaNGuQPj2KUj2C4oRb9ER8rDzbuoj2sJwa325gK8FC",
  "key24": "3CB36sKPjKdL1CbGT7fS6MdZwMKAau7r6QUm5RZHW7SJ2pmztBeqz4qQqHgeG8bGoVmvPVJsCj8tgudfXtoSeLFH",
  "key25": "4pwc3xr5pZZnaHbjnAs13b4ssTJW2Pj7AiPYbCp66JomcK8dHhH23ZzTss2L1Hjo1eWVQsgyCfEudcRH2R96fN6k",
  "key26": "66EgQiK7ALHWvvmLCAiUC2VHKDKMiXkRJP9v1eTSNXYrgrL78CJLPh2NfQjswbML5W21sJowTj8WePTgvZX2CKSV",
  "key27": "2EvHEvbtcyidLeCj8tEqcHRtPg2gafg5Cw1NA5ug2JXFfD9JAZNaX3fR5UrXLCS2WmZqgZ4Ybvb1VZ8hPdCm7Nkk"
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
