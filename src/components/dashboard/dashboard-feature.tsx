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
    "3zmYGxnZFuPs2JZf6tdcUkcMYgeYHafsfhTEH5yYh448NwNtssavtnCKgrTfHpR7wRBPT7hZXFHgXfzbF6uc1L8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HHi8DCx1ZKTZSc7TSYpZtLAGyET2pWLhu6w6Jb5eD6kcfyn1WhSMnMCDtvCGv7k7CvjL96JomqarNwu1MTgkM2w",
  "key1": "ypseCHHonTKzFKTwwu6dFkSdkwanGejS6SDKM5suH8zegdYpPHUcj43FeFvezYGsBCb417t1A5Z8RoXaruRXCGz",
  "key2": "5WXT2ae3AWtxT2N6UajE9Fub25oC8pVk1hbgCtNyDDVshTPBzoentWyomUi7HPMBmCdofYvGsjwSEBThCniZKvAo",
  "key3": "5doq6zUpj7wfn37xPukq7c9e6iJUhTvxVjFMuK5ojkEkfaae7fJyHcXGyHgamEmjuiPvBdTWSvVRyWR8JQwi6S1q",
  "key4": "DgePvsu2MF5JvfcE7rjTTMkEtYonz3xEEQYPg5GZ67Ack5QkQuyc6WNaTEFu6rR8vFQ4tit6mX95Y5mzRuUWc3a",
  "key5": "2i95QqW5jNrmZBgnoR8rKx1RmkxLYXDfkNgQYtTURxastJVVpSvqEvjYjyzpr7VPY8GzH6Yoi6fbgc6MJfWfa5E3",
  "key6": "5QP4Hgixq7vKqyTfr2HLsZwM6VB8n2zxEgDtD72dfkMs5ERuScgTq62fmxUbygaFNJ44vQEnNPkjrTbtUV2NCsem",
  "key7": "3E929gYeDo3cjsbBTddYBuw63GHT27pc4a74wLKZMqXAhwNSF3Mb6xn2Euh55ivs4KT4qi1sJ8BhrXksootro7Ji",
  "key8": "2rVETaNfiQswFGpiUH5hyH75ru33hzmVP9Yi2zaXxdeEcEAFZxHH8pEb3HoxtVRZgPxKv5CNUnWQcfHbp2fiXqmQ",
  "key9": "S3jspSQf69tPaTU6de5L33kC1kXT36Jgt7y3VWCqxECkzru3gcFyc5HXmsewkC7PsT2zySgKMP6BjucxujE5nEm",
  "key10": "5zwJXwPkbFwbZxTxbDAZq7358t4CrpEkcSsxw2VBxo6128y8rG14KdE3ToqVVpTy8XTwB4z993MA2zjUrXvBAdcM",
  "key11": "47SKzjHiHDZiMPV6rnEDY7cudWpuUtrWj5ptuknGrZaRZyPXrvvXJNAAGm6WrHHk148z5nSFBfYrn3k5KJx4SzNN",
  "key12": "5LKBQyN5hLWnNrnrySSfLYsUqyYJVJSHHM4QbgaaxdAwBNy3kLqB3fycNjSwagQ15BsZJaXZst2mMCChfjnLYgud",
  "key13": "5iWaM6WSxN3sZ6W7QwEggthtQnjR1ZrBLgMPH7tSuxjJkCHuYMUVcks5BN4KofMy79SawSpHJietuLwKnpVrmvWM",
  "key14": "3p6mqqPy1Hg3Dipg43FTTV4LTm8ku7YJmKh5Rm9AL615uE141pfTiHG67iRSJJZXn78gyivGWi7nbx1FyZvMYLYy",
  "key15": "3jLCGtibwgswGFJUVG8or4L254GW4ZvW1xVq5ixmiKHJA23a6ZfR6wfLFGUrFDtS6ZzWWX4kLBP6VraW6E3ewmMN",
  "key16": "3HB3gGTXDxpjYmNWBVftTrmh4duodu82XzKWmuqRCVQWj5agasZpaJPCrtEc8fhbA1Fe5XE8g193PQYVKCF6Xewn",
  "key17": "2Y5zxMmioWQBWni1KHmJgPiTvUoYugwsu489gKYppBSqSZBDCFZyYhMB7uXhuRrbCkuLixn6U2xtXMfhjsjYsZqY",
  "key18": "5BeguqheuTUGtv89xEV7MhRdbMW43d9HsZUyDM83fKpxabyy8azLcjYBaVjEN7TbPLi5ngtzEpp76MbiG3gTBM88",
  "key19": "b2iaZeyC8Rf2KUpznsmfT7VD9ynfVwScm9XTXGbjpLrpN4h57KzUTZwZ6dF2wpEPruPMkkcZswCcS6CjtG9yMEG",
  "key20": "JAjCMLVphKV6vetw4DWx5RoWDRqZbzzfj3ixdE7VfvAKQkUYHKQQAZxUfv14offmKZbeTQqK7iDsQArYs6r8Gpq",
  "key21": "4RZdGT65VnzfgmzMH3caVSwv1JNfxUJwspQLb5og8kmtj3CyPQrPQfxragBCXp8jwhj5Hi9BBaU5vpRoii5wR2su",
  "key22": "2X16jCGmSMgceuB9GHzFfXMtyAmErUf5wK83yKLQ8LGSbmJyjhSY9FtCGFtSv3DypJFaZG9fFipUSBd9ZLUU4pU2",
  "key23": "2VoMhtR2gLjrbTXrFW4ZTyCaUtxMBDoX9ffSUVzKcyTzTDD7koYHVkkFBsUmLbd8K4vDotXAW6jiJN218wQCtCtv",
  "key24": "5vmjEGiinhxmThoYhH4Y5H3hNZ55hakevHiT7E4SEsLSSDywPqYXzWyz74A6hbCTw7H3TqDDZVUtFZCTAvCUjqsg",
  "key25": "3koNdTwyipa7CzUcQFEiGpuudSYyFu2JB8Ydh82f8YFn8BPn3rXPqqy6KxhZKZTBewBsAn2yTy77QPEyHwLvmtnU",
  "key26": "4kiQtvvANQvBY3YQv9VhidKAsVhyjYwes6DvN4iVvC1DpR4QBxD5Vmfm6WGK2rvqxjvjSQmnicH3hwnyZ8PgS2ng",
  "key27": "54gwrezpG2xj82rN5kKkpsG72nYosC8RDieLbu5MeHp6ZbNZSeyqPcUZzcvcM1Ktwjh6arM89rAPy3Wd4KkCpwkb",
  "key28": "3U9oy3BkFc2UPnxVYT3ABFNxzZvnZaFivVw1gYFZFL2bK4yn2om4C2ouaHunXfu1TWSnsSw7YCKjh6A2XvTEX2zK",
  "key29": "2Muv3YLLBZkvPHQsRU2pRqkYf5JoPrxs71y3W9oeYKu1oaDQQFiRdn3qG7dEwgLKx2NWZuwaZirXp4kGKJaTvyeQ"
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
