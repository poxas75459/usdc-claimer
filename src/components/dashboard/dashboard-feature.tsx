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
    "3ZYy51nbdW44NAneSJikVYxAWbw1jheMWjSVSyxywzM9YRt23g7dzbpH8rxEZKfcmfHrux3NBz6Ru9YRVe6ZKFcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L7JZeUguXSQL6tBockLgEqd6kwaj1s34wrrjKevKfhmdNJUwxZ8nRMQ3TMFdN3k6JcSccHmykEs17wJ2HdwtKA1",
  "key1": "4tod7TZMto8JEQFPBzohMm3NU8jQA4yM7waa9ttBQHnCEfuX9H8KXd1r6h9taY7TSmEtoFLPbo9yUZzgQz7gJTf3",
  "key2": "2psb5x3vZ6mdteWUxZr3fM6RWSzvCU7mFpDwCruKSyueJ8e93gDnvSbyrDeHVjSW9RsCE5fsisgx6EM9f94jQQJp",
  "key3": "XECuu3tZBXJAY7KJ5Vha9v2LXoq9V2AWRZvrrJRAMaCLtdMEtmbcCAH2dXMzP1PNuJCahXgDNuHS3uccs21rMFY",
  "key4": "5y1ULdzm76x7QHamjYgFnRtNWGSe3H99VbTkx1MYyiMscwDYjUWLPCDvGup3pcFgVNpCqTHWGEn2tet8veP8DtpZ",
  "key5": "5x9kwdjT9sg4mudahkBe3C1ESDLyiD2oLXS5XQWBNeXdARgpM38RkVhkFfk87TFgfCVehmud6aYkGQr9QLiMXq8z",
  "key6": "5zcWugCwpbJMYaLTRfNars1x1iRHiBjYBzLR3v2r8mBGd2js3gTxBrvkD37ENpxaNYEsttUuRy3SM4pXmHJfJaSf",
  "key7": "4BdGJ8dYFvd8vfmtqDMiKkgfQuusQfLeyz5mMsn6Z7ZqXsX258BegkkwrsWAvi1zqGQGNt9kb8Uc7AjjyvKZGSEA",
  "key8": "4z9Y9xFnuJHpCzCKjZeeQ8XR18f7zp4ZTf3qFqLrPK9zBgHxinKBHRZjtWJ18fQWM3ozrpc9zfJZzsos7GHk4JpS",
  "key9": "2W8BsNELcpEFrc89z6F7MLSsABieRcAW3uwMpAVrquG7BvhkJEH6qYFuTvZtVeo4MgyYH3E3avLgv2HqmXtJsNdR",
  "key10": "YVUSjrod2C8hiwgDvmgTgHEoagaDZj9bnD2gapSwFjR74zQfDAacH7CqULHkcoZvjFC2GmheoXrAthAEawxV9ja",
  "key11": "TUGBTBwSjmRBJe5z1SRrMZJMhU33CrXzQKToCE1J7v7x3a5YEBkWhNR5G2PYUvDj6jSYiasXsFDS4fDs6NAh6Ka",
  "key12": "2xtcCAqLRfbHhvZbCctb8dtwbUP6rBcWaquDg3vLtSxujLgHTH7jAcDFbLu9aiqq4PjkbgXAkfEMM73UHY1qjuLi",
  "key13": "2EEUEdc6yokXJsPRhyuevyKP7F8KPetfQJfmjwW5y4tynn1Dre7J6jyXZMm6LvuCadzH1yuh4PdxJA6zduqu7KX",
  "key14": "5iWLR4oDGeaun7sorukYhKzqVxU3tzZH1bWK8ykHqRsmPeB34cLFWfPJYALipYAGiSAnfDitLN4KGipt8LHQwLkW",
  "key15": "3QSJEAq8d386nxpnsAgWn5dwhT5bh8QLq3BoX9ZSpxN74mUuu3PTo6bM7Kfc2hcSePLhrfU9W5WmpbXQe7Nf2mtz",
  "key16": "4rmCK3AykMU78qVjD6JYfD5pjfbkYCftkMxjUGShsNkojJkQzqCoZcGXX2hsbpyr5qnr37fUzgPZN1CVcy3qm6z3",
  "key17": "3QX2wAEgmZV9TCTNhueJi53zx89cgA4QQYUbrfoZGVRoBREcC3Thm761QSxWjh1Pb2mmoy9kEF4zhHxSk7427fPx",
  "key18": "43BiPoG4cxJf6YgKenSyaVssm4TJb8GefMuSPYKU6GsP3mqFmMMKMPgi9D539TLXmVbpdDVJAD4RcZUTXy546TEg",
  "key19": "5F54hEB4iofDU8BmzFR2uHRhdaEJGg89Tby6KWW1THbQy8e67qqdYfSk6HfZ72sTCQAs6oTuWeN3fobU59unjwQp",
  "key20": "65LKYyj5TuJzH2N1M2dZn9jZRxSrPSNp5FwEjv5tdyE7ChNZetfqYG8wEbykSdcFtskX9cnYZWBpWUiVrfUCWs5P",
  "key21": "3vBGrDRf7hxR4kWWy3u36E1CtimBqDXeyHvDoWJcapvXRvxhQB5AkYNLpRcPvrkCMwto7NTsyqvgihmuTea3K98v",
  "key22": "5sSAC9VrA9fUXbCdt5SM4mB7RniTkGy2ZJ3xYTmEUUhPCsEtnziEVihNqKU8dMYtyG85iVvN4rGT1FgqAPW6WRbd",
  "key23": "5sNFopMn83vZjXwkZsGmBfdBKWUAKp4dPhj4HHsP1a1z3f65Q4RyW9w3VNXk6THP7wzaCVoe3FdLFgiq7Uh8JuHc",
  "key24": "4FXZHqGfW8ozBDafS8jdqKdGivxF4JdFAVSdgmdd3ktjT4kWaLRxdBx9hgEtrVWdBKeCaFMTcNSU5r17RQ6LesGY",
  "key25": "4hu8HbjgBWG5s8kvnHoauqESks8gszoSFVCja42DXVNsVvU5zpPD3qt7H27yKmPFjfNCYSARTCFEmWL9AN8oKDoZ",
  "key26": "2fyTJHyrh665kRNhugsXiPBK7LPHxkJujTSesee7EYFxontM3QU1KAPmG2BggcaGmbRfZRWRepRCkfRgk6Ji5BNi"
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
