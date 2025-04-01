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
    "3JZh7p29786DwdoK5ym6bW3Vn7RLcVgb63tZB1Ab2qR4HR1avDdHZaJS7MGRE1ZJj6BmXioQv8MjcjDYkWFdCcw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BD3D5xLEvZ9R1PQaRi7Na8Ebpqxxi7J7EWCJiFwg6zX791ajTneLxsTiuxcmGPtMYmV7PmG75YDN8BmAkhzVqrP",
  "key1": "3cdN47YQ2iZREcXw5vXT21tmmEjnbeTmq9dfvALVVEKkfvRMUrUuvEMgwA1Bz3BA8sXooj2oHW6mBKuvBYndiuoW",
  "key2": "vq4iaToELuxu58vTX53HnPABuMs7Z8HbnymgzNipvvXYvz2YHsaG2oHkSEWUyh8whkoox73PgZonwya6xCGaKLd",
  "key3": "48UCLKzSDKgnzNJH7SQW3nAp7FjQTJjtaHV93THtu86v18jLNwCGpSL2sooUu8QfbEJqy4U4EJ87BskpZJHcXmuu",
  "key4": "5hJuhtBdmg43jcNsL1C7kH9YWnMfEL14HndbZL5eHTecmwj75nJpirsc1Yprs43WZRhcJSFwaL9jS7WXxzZyUmFU",
  "key5": "4WqPXbRha1m2MQx1fHxXZro17xeTtqhtwBc6SdrwAKphvDHJL31saaSDmR6j7EdPdAPw3metxNPthBnmf7a7pmWQ",
  "key6": "3YtQV45jQAQZeqJqpifmirNwUFKFKgTNsfc2hcMZ3iPc2VssD4dfmFiSKBBdVANARmF5HN3q5cQXhCwn3ZVn2TCZ",
  "key7": "3vNAbjLifMnxtWKwNdVHFK3BJpRP6RrwKPXhZ5nLp7p5WtSWLgswwJBhRAEpQ7yVrHWxp2ShDxHh5fs93QygHxdE",
  "key8": "3jdjnxCouhTCdWDuK1eRakznCyvvZ4DDwKd1AHDnTe9k2qXSAMsmURiyrRW9hFb6nfjoNXdVoTPJoXEic5pVNFbL",
  "key9": "25eqYia6W4YuuNoNd7KiFKH5omEXM4CBNUKPxEsF6EZsf5WFNPnHMnBWtuuFUC5M6ukkkuWXBb6QpztcoRRqDBCi",
  "key10": "4Jm5E8uj187442mkEBZbSmWFQLsA4kwyYMwedqT7P4xKjM5vcPawLQ2wEie3xvCk8ErCGeEDxLvVE6QbBTvPza4d",
  "key11": "4bXFCrMbv3NzrxqkACdrQkehM5Y1u2NJ4uMd7fgXPYePRh8jghe9eV6x5XWxeL9BKWDT12g47Yxom4e6EahVqqsB",
  "key12": "2DcrNZ3ey9Yk3tjY4JNSCodUMustNm5YqHGaxPC7KfBKUdgiAZyBuBcDCCLRyq4Uu1EvZ5jdjmYKC49cxgeARX2U",
  "key13": "nzQ4WXWESAiFe3AYfkik8Asf7N2Xx4JGfKQKaW2g4nRcWqJoxoFg48Pd4UZkQRLfFFcnjsed37znjjQ3o4Uohob",
  "key14": "2qEveK1WHLeYeJiuhfihUpx1UX9KrrLxd5qVZTfHGhiyXXRipymi5YpWLTti5kuf1wKb3pT8juxnmvnnzovNe4Xm",
  "key15": "4f9agh94HD5DbtM5HXykuzkn42sStm5b8nWsTQAm23baeKCkpn2gwkbKqLUPJTZfAJiKVAHWBsjxeLavhtzPMUwF",
  "key16": "4vjHCuVo3jPSRnLczwVqE8TvsuCdJY85nhoSrZj3wkrqrvXyiwj7Lt2esymVzrhs9gZrbVBUGpKEAX5S4ZGvj2xG",
  "key17": "3fKNDzEVdYnUsgVnxjDWvYdFe6t96nezDBWuta3ioCd5UDkn8GC2mF4Ns2YNoyNEwEUbp6mt1oifd1BxuXE1GGL6",
  "key18": "4WzGGvHH7ieibrCsxUqP1CqHQMSDUaKF8FGRaUBgERzBXM22x2zXpo135Eib6xiUnn1ns45PqTUnZjBeM4t78uN3",
  "key19": "5JMKBgt2YnjzBAN64qmj4iu89DWjaDcc1DzDPBYkrbpPMYnSf8sh6TcAH1hwzxp1emebEGw9JxUAuSTDDJ8KsaCH",
  "key20": "2Ti8e1KA9UHpCK7GvUZ7VwgCnnWMGBSTCF8P5UzAYRTJCmStZoaBvJbtrExXb2rUtSD1gXQ7xzLC2Lt8UzJcdTQa",
  "key21": "FxeR3ChYPHXkpTw1b1xq2Q3DJrCWqCCa5WieVHiR2Se8L3agM32p5fbHvemyWuL9dRLRvrUUT2YzoYKCoeJEzTy",
  "key22": "RRPpEqoiQxvRewct8TKYtXwRA73aWFDE8GwtsGFh29RZa7fuHq1K5gysQDDZwGCdYnqBmzAYwbSuoV6sbdPKShp",
  "key23": "5e6tdN1gn5y5f3RoL2KB27irUSu8733p6tbyNnQYmuZRVySUFudHz4FpAGc6aLuyAgY6ATjTNvWtBdBxAxGi5iXr",
  "key24": "2cAxqKD2cgYk3oV9m2rzJyHK1k5UiTPvJhynHCTZV2RHUfNFWQoYrKKjjpGNze2s5vcqo3ifGVFmpPkTaRFDf7JT",
  "key25": "5D6S3esHAqr91bVcHsMpJFdqENrWB4mEwFSFqu8hLnoZ1a7tc2BtnVDf2B4ZRtv6eedTDsmAcsUNAxNgU1hnEkP1",
  "key26": "4Truv9nFAQDGxfxojUYDwpQ7CgHrTQ7y91fwEqgyk1gBLnFLE6Y3YFFYTMakZStYaz2W7vLeqGgNCiSBgi714QZr"
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
