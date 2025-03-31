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
    "4hCyWTasPdvtEZ8Kt5bNqjC2x4qv387Sx31gQ6JNhcTSCpQcNycWw19agVb2WRxMysWfsaoqNf91zUS9uumbCwiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Shj3Zi4Y7yK8j2TLNHBEnaypFA5dY3cmwXnDci6nC1gGx7vjbsbvV7s3f86sFPWKKkxuGSnqNa4cf1oxHeMCMS2",
  "key1": "4ZDgBDAxJS5gYRhyEfAM2MgWeapQeERpXcqFYQADigHsPp5QU71nrSnipMTxCDT3VYyUo7q1MacEQMZpNumACfy1",
  "key2": "gCs6faRX6311kndu51goLXSCzxPRx62vaxbMsAzcqfQt9xVgvSHKiK9hzS1RzMYVkEPLfYrSAUbtgEyW8A9JVcL",
  "key3": "4fR79PMMX4hEuFiARRFPcBmDV7V4CkumcacLjw4wuiBR4C99x6iKruU4s5sxSgY6A5qwG5irM8dCkdVUBER5UsUK",
  "key4": "ox6SVbsoWTFzBpjqbmuAA3AfCq5UWnmrqi9N8odTpqwQHRKDzPQUTn2Dm5qeu3pmpiV3Z6HWBjzHLqqCRKwK3mN",
  "key5": "5Z966cbJCQQh778catN89cZuAwCZNsd8smuS9cixB9ZvHfYsckSFR1azHgNmzfqRiAPi2xY1NdSgyiTm1gFeifEb",
  "key6": "2uvyqCXMG5jeWWx3Cuk8Ee33XjoRCGfi5fj6Fx3F837mXrPoFkjbRNGHKez6un91Yw7AqUG5oNU6YtcHFpYi4dtD",
  "key7": "2481ECBBeSsc6XGBg89mgNhPcYbQTJGGpEsHrJHP35urHNNSDNAGdXWbBwaX8427vF71ezVDTSwYQeY1ot5pfwGo",
  "key8": "QKQ297PqFmwvPrTsVi66Bfc3Gzwg7DFzSsGX9JoXsCDBMaqxT9G9LsAdb1eRVGAveiUs9ssxebRTqSP1LoNHgJb",
  "key9": "5bvPyYToQXpFQmLxuYAnDb8H9SmzKQ22yxVGW5Kq7FAaxDuyfaYWoLbFhiHhUgyZZaVzj2LRMuMbnPpGqyShVG4t",
  "key10": "3tmcfm2gwWwLP1fmVxbo6WEuALfhLCEz9Bp3ho6Gag6dCa6rqrVbcPtEYXde1YshMCjyNAKkY9vR7BjdG8pFHfBM",
  "key11": "4WCorZPfKxRmKEHH1bJjsua8pC9bS4fMhQv7sQPkfPTKQi7LfUmsN5gGxBd5xtBSsb6rCouNr89KVGwyZQwej91S",
  "key12": "Ck2bc6ZNPRVk85eFvk9jxDtabqk1XDayeQy7d5X2hYSCoLdRYWZdBSGoZ8DpsEkqEgdFBrekFBZoyuoGdejxVyQ",
  "key13": "5uADMkqqSbSknufmHpti4zgg2vZNXHJxfPmxDZYNg5DFtMHC2qdf69nQRwJPuYeW9yfnk6gkDxqoXur74Tx3DBM",
  "key14": "3jrepT3fuunPE4KxA5xEPmiJt6SE38ZvkVjSQkdukS65YHs18v83w6LCR2bir3faxP3vVJmuAWHXVXwQvubcaa7M",
  "key15": "5wjucbibTCE8eP4YR645Pc75M37NLuspDkX9HFgxaKaQ3fQZsRyTZJxTkRhc7yP8Xzm86y3oSgFQo2Jwck2r62uv",
  "key16": "eXuQANnEWuf2g1JUAd7PiNyw2PeVCE5NW4vpcDEEZjzUfxHmDoMBuH9t7D9r1uUD85n6WQ6AzknH3Wz2aDAwc8u",
  "key17": "UdFhkwVyS9w5ZAjex8hWfUW1xUzavWBPhoPbCBF1McneF6BhD18AdNJu4eWGjVoVvK6o4ipVR5ZgWhkzbfYWm3B",
  "key18": "TdwyLR4dcni4GyCsQL2sDyv7jtYbSzw32NL9thU2xHa7pHC2J5rhu62JdvSFmVBEyxyVxDDcx7sranMT2JdV2wU",
  "key19": "48ejBhQvJw58wyJWLPv7987SDFDw7gJNWBbdyPZekoawYRxcjpZzkJoLbAae9uPGM4nDJj4t5Mmfvy2Z7c54TpTu",
  "key20": "48FTrbfKiQ7SVyTnMU34aRHnRcL9Z7DCrxCAmFUY9uLw4Q1E8CLALA8T77KC4RKidi99qEoRdK9KkBHXgCvUzs67",
  "key21": "5TeNvmWvq7Lvg4eVbgD8DMtGsVJcW5c3cRUFngT47eFt1FEXDq3dLoW5x5iv5VkwqqxuMj8tDzcd3ZHJ8khPcx5B",
  "key22": "4YoXe5CBSFBoeY9o7D85DuYWt1GT1ZXw5iKoZ87WyDGxui5LapDp4mZbGi5PzkQE7oyxS4CbHkX58npqoTKccYFe",
  "key23": "2TQBg3NP3tqUvRfr697xC9gKjmamF4ZBB3UkSXiwTgdEq6nHoPtfJL5ehR4bYLJNk6xWbbtnbEBSD5fya6RyQ6nS",
  "key24": "2g6ju9A97GXsRcWky3CiE1SKdnn3AszzRRFUeXny7d2h7HNQ7Xpc3NPBnDLx7whJDhxj4CHGhnBNZpnPixWyRYwR"
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
