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
    "3FKNUsGPdvqrXNKNTqktMuzrCCjrQTZYxfkrL16m349Npof9Qo9YLLhqnq4E8rkJ8E3eMBdJuyNeqPLDnQb6BR6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QKohWviExMHU2QRJw5HUdzfrrfrW6Nx4WQJ7CPbatLvYoHfSe6yo4HHu3LLHLYDYVZErMUm3GHA3eNXFcGNbPk7",
  "key1": "27gBrmJb86TQTfwowFL7qWRyu5Ka5YyHtvhecP1F6y7pSCUX3TAGJx19JQk2uj4V8TaoK68NPqEDKDf2ZYgS1RhA",
  "key2": "sTAJAmK9b4RXPETSdNkQ7TKmR9c8aheoAurwFJ4QDvWFP6CrwBUUwQ9f22c4QTvRA8KWRdYyJix2siQnakyn3FB",
  "key3": "5vdWWjUsro9tiZvQfTbArmiwDRdj7ApJsBKLsMeabBAoMi6YPriFUnXjXDK95wqjKyyrJChnEhD9uNV6Qm5wiMfh",
  "key4": "3vgqybQwNnumhTUjgTZETk7Y9qPrmgpJB7UuSUyQncNZfYJ5M7zNGTFnMqNh3QqSRTQeJbHWZAXhVxEbvsgt4neE",
  "key5": "52bL8a5tyv97hRxRpzyBHZAQfDdUSFTGY5bGUmkF2TKrd3kadDz6Ko3DRPnWWFgxX16nc344fZRTjfwtSggGcuVw",
  "key6": "4h8FngimmZ8QboN1aDWLvq4doFp3xLN3dAGRgJqqMVECPVMyYCJfW9cuJnY6mM8yuFv95AMZKwf9prqspCY6Wfwg",
  "key7": "CjbHY1BQ2tTmcgwg1APiapreAj7dFH9RmXtbtz2jY68ivNUJNBb5uhpa7Bwzg7z3oRyUozAZmVNxQxjqFZKVJbj",
  "key8": "ZpjhSfv9BJ2MhLAngXstLqBumUyvopTUj2EVrkZStPo2HEcRSEXefRsMhfrj4byvq38tEAhqNPHmmeqMSyrz9p3",
  "key9": "2mvRbQwWY2RLS9EwGsZpeCfNGLEZaszvoEbfrMWaVwRAaED4nLkjAUg2HX296QwnokYPSyioh6xvGPMP1hv9drxu",
  "key10": "64Dnh7Fmw2Wui7bxgy57HtdysKfTDHJAqBcny2sTmveSEgf9NVVGLpsX5HqsaLwqjXUoJba5VtKhuWeAwPzeZ5PU",
  "key11": "3cWYDwqY6JfPrRweH8s5XzCcB3EDovLitMRfmkz699UD5SQnyo4t6yqvXvcZEfLjxuzn5eH4EGHmY4RC5sf7womF",
  "key12": "KSrLdQozN23GmdYUWTtVhbwsCf1qxypERHMFkU15r3KQQWMc7WhFdh1ptZFiZjyEVAYvTua5zQh3PP2UPTvEvnK",
  "key13": "3BiGTAjVRZbye7ZrQfcu4rtfz1bkVXzmaFCnKusjeeo1Z6Fpfr66A5DesLTbYZNSk7p3GTXj2oLaWEy9dk44rvHG",
  "key14": "5Zm7G4nkjfgedEg7QC6kM6HqtWwDRq1NdKbvEwZuoYdik1tWt1ahcS4yoVrWSijV7Ewdax1fGy8aFEQ2mcJK5Jeb",
  "key15": "3zrst7maBVAQFJyiaDrhiRgP2XPtxPLFwNo95gsEeJZ8gMGUcqQQZdHoga2uiA6m6KNjq8pyqsrJ2UToa6xPX7q8",
  "key16": "2MCgfD38NnmYHeNDDARqzbVKXmR7q9zc4U4MdF2f1Bs9xDERfKag7BskbeW74DzcjtwzppbtxTSS2ojRq1MwEwCB",
  "key17": "5vn2oZfLB9qLNHqLRLgPnzkE8HvUQW8YNHaJD3B8xzjKG5NE5P7k9fGurGzuvGMdUR96T38aEorSQn3nN86tJHZr",
  "key18": "3pFcQ65fA1pr6BNRN6jzNbQKBehhQyUqe2m1vkepeC9JdUnztBHpqUiBXKZkAov2uqKfqw2MtDavvq1XQaTLoKzD",
  "key19": "4xwFmsawyrFSbtvqgfjcEycf8DMCGYPXdXA7gZsYBKbmsLfJFWErHFevvLtoPiGpYtXnDYCpNbmbjZWBaV7MpdYT",
  "key20": "5HiJ5FwLR621NHkAJRCJVCQUYeiyecfXmXQsqvZvGzyhx3k2MssBZnvYgDjMdw5hd4ovVgmauzQuaNNnRWZdSooo",
  "key21": "2og8VegHLWsTSNWpFM5ourev3TgBrpkbRKeyGtFXP5eohwwHy1swFJ55QHY8rkvFxVfamPPDdBKme5mo8i5kLEjM",
  "key22": "9hsJaJizQS4mfEFC1GAE4xmAggCJpunZxmw6QqN5tyQHVWJ8ViVgZQd6xfoYhpwuC9mXYk2sbeuYNRXCqESvVB7",
  "key23": "5i8jkfs9cgcKDYiHcBAWBLZQpYGYyJHjpDUjQd2ko32x3AH7ssP7qBc2KmQXh8RpaBVH9TkZmS9LFyoqes765fhT",
  "key24": "2dnuDFHbc4Hjg1hwuxzDtoj6hEjRwyum24RgZydn563xDsrE8Wtdbb1JqhcmWrd7dr2cXdJTzzRkwJq9Q2Q7LpaU",
  "key25": "2FxA4dshFQNU8GKA43vfWKU9Jky8efHtAcKXhcKVLZHcA51tYznsw2HWYU2zfZedqW6xqQt6JmTYtECu6XGiWVoQ"
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
