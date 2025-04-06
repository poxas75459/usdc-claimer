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
    "2ZeKNv191FmEACJRt8WMemoECzeD7kp6xTAr7gvAzrCsTZHP8QMHAh9iFTVZRqMpLQSAinGq5nabXkfMYEyX1jH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yss9BUTvoYfWXXVn8Bcx6gSV741W3NSTxcftpoFFR9di4cL7mKBBDqeCsMvS24tkVQdMhwZBFUpsU7vGRZmLAsB",
  "key1": "3KP89iZF2FcQq3BeGmZ8DcBzrXaP6fniLf3HMJ5HhvWMdEpvearpP9xdtfbL1YzSY9smURZxAcJceCpqAMNkJaSF",
  "key2": "28RDTSFabB5iJVN7ekiMsH8aekA65QbiojKeRmJ1C4WgGowpm46wpNG41tQddkvPG9JMX7Am86bwiefwaRb7vqG9",
  "key3": "5gTWcCEEixKT5HACBBJCKSbsGfqtyiKhUo1BQ5yjxira6231z7xHYQcXAkpuhVrU1xygtCSkmyHct5WSRftNoXLX",
  "key4": "d6A9V5EPRkgWsgDUm1Vwf68SsmukNJvuAbGqK4jW6qg7pWmXVfjyszddLrWVcbmuDefzRGfSHSmChF9YMPMnrFp",
  "key5": "2ryMXotdto4D2A6tFtRqAUj9vBWm8KkjHA3KnPFtiinPdeskM8BgEvNH1audLiHkCaLPiFsudEVYg9KBpSXGuYmU",
  "key6": "5X3PXHQaqPZfywncgoduz8iHM6GjdCPRC7o7HxeUuPGBwova3bYqtQCZ988GAWWbNjprXSherz7v6L7ouLHgrXkp",
  "key7": "39T8tv2XSjVM3PK4uB5RXHvANtznQvkoQusF8AqzMxgggjDhpVboF2kjE5VWYLp16nY1G36u5Cb5AAui7FqY1N6",
  "key8": "2gqzA6fqmiW38JG8aniDS7Suwy7PFGTmpduqouZ1XvvkjC22u6sog6NG2HKYBTtfiiGE3jh82wtuTUPd3NBMqZQB",
  "key9": "XtQDCRkj7S84fL4fKvvBuEDnnHu57w9vh6aZWaAhPUWFNvsrPTtv6zrYwb7YGA7e3bXuqLNiqhf6dFyqaiigtUD",
  "key10": "4P157zLLhCM9vyiETfQe3qiTsjgaBnurHa3nkJtKZAaHCYmnU8797HsRkN19nhHNTuzt4LPTEm7ieWxHMg1RHUMQ",
  "key11": "3BcMgAvKWGarpxzBNRtmAHiz6zZFrmo8RtAnRMQa6WRMtx6eSrcqtBnyFsYL1roJxLxJ4gErT8WrUGLCoBv8YDhm",
  "key12": "gTfxqbw8bZdZB1BCArdBs4k1dLnczVGByP315HHbPKDYiiXxbvudoJ6ucBTM5oykHVUZRhKz41Zhgxs87FCMU6s",
  "key13": "Eofb8HeFxFr3aajckc6o3E34HkZzxa161DK429p292UXCkPnoAynMzHrDFVF8RMMWSXDkcaafS4XFvjNgEPkRKU",
  "key14": "4sT2cHdVCESBFNJjng3M6PjoYpM2h84Pe2nZcE8rTzzY9CaJ3BNEyMVdjXQTXhwLgZVydK7Vb5j9VBvakoRx9K51",
  "key15": "4LvwmhdBcUMKjnevfrkpbciN2cWnW1kjexQd1y1GMMMEydYnYZMycpJvg2gEMdxYsaybchedyV7V5dokiFb2JCF7",
  "key16": "23bworetasakRheRVd1JXqHqsc4hurVwvpCvMFi52Lym4YxBMXCLCch4yRpjjSA3e9Xo4fCvq9THfEZhkiSi2M8c",
  "key17": "3AqAVHJqvDZAvzsJXoCuMnf9rhF9azJoGdTRdwJ78Xo7bRaeWwe3dvpmgNUhNffGtoKcrokUvM5cDZ6tGjXcVPWm",
  "key18": "5nGFDykaXMXZ33hwCRFrJkUmSmoGHiW3fuipPCAfMCMWExwRA7v32Nryi8rvpQb7yBkgQaGNWwukqqUzkYZerTHS",
  "key19": "4Y53HnB9Aj8pioa4HBguSj8bJjm5vm1zLJZBASbLfjPAYLmbjHZDYBZABDH7YhdxBPaTt2f7iEqSydSPhB2fhaVe",
  "key20": "2duTY9fG2wQvKVq1G5Cdh3rSNjxi8gHtW6oBhFpfcN6xkE5TEqNGcSrQWSWE44xVpd61PAyKVkCeQ4qVZwYRCYJG",
  "key21": "3XqxUnJpmZLQw8CsgpoYDY9nxjJPD5w97xzHTBUQxpTEYjmafJBiUysjkJRGf5cWDgq7Ew2xthvjBMkX42zRrpoP",
  "key22": "218kJMTPmMuoDkmBDDh23GZJxR9WXqLmawYZoWWZcKgQiRMhikA8sCNzpSGdy7xCNRPgDB1AAjXww9XjE5FtGofp",
  "key23": "3JxMga1etZ9VNqLNqgda9eMtNfTCJUepF4gXv4quqy52jd3vH2C4aLTKnaKWLKsTwr4eDf15zzKc6N1MrJVBGWGs",
  "key24": "2kL8VyLLaYzqLFftE5i2hd9UyBqofoiTxkjoDnA7Q481mp9gU2WbFQPe6nWJAkKPD4zrPb8R2voxadjFQNZFe21j",
  "key25": "4158EwYSgbk9UbFks9oNCEDHWYV9Nzg7EBtcJeQB4dacDnxNxxJrmuyXWRYMx5CTo8dstVErBHU3TiJszEf4E9t8",
  "key26": "21viBEAsNReBfnKSMLd4s7DdxtHdJD1sWUZqP1BV6uXBzmiB4SHr8K4Gf8bvZ6e8S8texHUJY1Y9pprU8mLHmZ5L",
  "key27": "5DZZxsaLW4VLRhbTUe3QxPVYNrHyoEuwA7exgaPTG5DFsyedhz1iJbbC1TffPpyShocSMR4kjN8s54BDHq1qg3MZ"
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
