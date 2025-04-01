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
    "2cyCJXTYRgUCeCTzB1w8oRsZpoMR1XqA2gpYZQgZTF3BdJYsh6HACJPx6N5mfADTTfHWwNo3ARogaV7QxVEdnNtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8VTtgtYWzEX4tXWPYQyn6ZpgtNeHcJfohDXUaYCroA9bgzBxQCGKv9fQgF1yScJyqZ6eZtCaYkGNmtnq6ouEAx",
  "key1": "2FGJADjByBEFUeXsRVQrMhUd5tHgJyAE8tkXmifqSK3Rrim8H63ThJQ36W8MbVALWsNMxu1SQASUC2aWakZUHB5r",
  "key2": "4Csx1XY86EhCKGW8His8i9Q6YFahFvmdqG2zuwSJdKgiWMRH38yDzHeQtFvJP888t6akyJZowW48YtuzBoiovTqJ",
  "key3": "3JuMP8hfAjsM7B7mRWMYQ6KyBdAjqnJXhHdMjEmYqAxM1qjnDMNdbHBQvU9n7eeGrT5w34jChfy9FPVe1Ej6nwD9",
  "key4": "3xNuB512hCMm5z2x2VEV9chWkDDTm9AeFuf98Kv4Ruoiz8a3Taepvp9c6Z4ZxKAFYaaqwdGCbVX5LYnEoQqrCimi",
  "key5": "2XfS1pBdgYzQCNKQXCQtuNaWyTK3eB8gAQ5CGySr3iyu4evnykjM56TGGb7zxbJtuPMfW36X8kdhP7o6pwuNgQGi",
  "key6": "452wMVBL6eXHqHhTejLRWEPqKVx9foHzhwM6kgXc9bYW29ZJQ1N65UqW57tnPoxCXKSfxqnXhaags8Az3oW85Tr8",
  "key7": "2ntacscWsvrqq6poL6BR5W2KcTprtguMhUV9NpnXdCFsKsfDgZBorDwPAUBKAnVnnKAPwangenWq8rUQYH4gENWM",
  "key8": "2GNhQXNm4XYJjvyWZEAdAQExA1DbeiuNnaN2HLqmXAV3vUWddmqzorYA19yCcmtK9KZ9Dhn8i1rs7n1qKuPV3Kfm",
  "key9": "3PVjPZWce7G3due8CxkoWK7jmrYPVfTZXtqsPYGa6bNBPEyMJWn2LeRQH4gknDtwJP7U11A7ubtQB496rRF4VfFU",
  "key10": "61ZxkEHcA8zwyyf21SK8hETBjk6374TV5dd9WMeo11GiGARC2fT9qFXhtd59Dq6qytF1mWXZixDtprhCem6Gxz6Q",
  "key11": "4b6FivBqrXSmHn4LZc9BCg2rMuY7d2Q68v33SefLzLDGoaBuMusYFW7DHYGhVzzzPfEPiNJJyHgcazmL6beuxX8X",
  "key12": "5cywNb5Po9RAxPDzPSLAZLSvtmNo8fWcjdQn6hWM48nF7DKV689Tzi4QRJZpMCzSycuiQWVNjg9DddAc3w4rZ5tX",
  "key13": "56vvNLuckCTxTNjWmFZaadykykFJq57Lyjhfa8qaFry5RFSnxYXeAPnPeTFFzuYWnQw1o3p9REU7kRAPg8cDKh6j",
  "key14": "kzB7HFbsUdKZ4DjYm8RhRYXqBzct1RKMvQJKk9GdTh1q8DtHFYyemUhtrVN5ahmNecRREU6i5WBrtGDfY3U5FfU",
  "key15": "4XK2NdNbCMeuUsi7DR51QrZe8ppjALTJVUQw7DX3w7VRcnU3Jct6tEP3f4cCevPSUNWcGNgAT2ge2ahyHVo8kEyg",
  "key16": "2S9agZUex4uocAKrXnVqhNp2xpwsZWus9Z9VRScbe5G8Xf2BAidCmQBM2W3rqVawELwrhgs1qQYtL8gt8qVL2xhM",
  "key17": "5Z1X25QgY8MdYqtgLA8Q8bHTe7B2Q1rDNTuHLwJidewiDqv26S6goF1CWsokqiaZfwVH6ZzNmKzC1cfjhnuhWS2p",
  "key18": "4tGQNGaHDKXzGDAmrxSCVuFcwbYX18oxgyNaC1vpmtxuoAbqTBd6oM1vbgxCKYCqdM1GW85Ncn6KKxa9sEbcNXhn",
  "key19": "4nFNXTYZThcvxus5SBjE1yoYX5mP4b1NkzbruzUnKf9rWQPHKfDNajHHCUJ7kaMiKPwum2u1mTnENwfxmS3jgRF6",
  "key20": "5mbYd8M6xXezKrPwCX43AaNvas9jmuN3xnEf8MANzN9sa2QZbPy6gKiv7p9DQQvcz7VptvEDRRMnTLi5MWt32UpQ",
  "key21": "3i6MvD5pR7jzMp8jdzGs2hXXr82xYLoJEC6oWMEUscsrPHs2KnZrYa7kfuUuk3iYTT1eEYmqvPFqRUCVqG72vixT",
  "key22": "2RSc77bwg4RtWMYmCiiN7UiNDwixozNtxdApDbYu8LCcvjuL1pScXNVMcoSZG1VQbUwpwKRxiqGvSoEMMDn9uneS",
  "key23": "49evT1epbPyonH9nZ66m4AfvhkeUKCFY8rgjtBgYjP1ZoaxsLjhBme8KYUf7ADoFAyBL6RQQCJ5FQKVdM4oZYF7k",
  "key24": "3PGwNth8i4h6BYgiyHDs9RbRJZoefbBmE7DhioyLT6tQDpvCLVVYobwENkR6JrAvr4bNWkwHsKqvcRFNTBWtR3K1",
  "key25": "sKncL4AiqcFBotaWX3hTkjB82S5rRkk9JhCr1d5cJN3W4S6nAYQhN6LfewZ5GgaEroSGQnv2pBvJrHTcjpQR8ty",
  "key26": "2ECMg6GtRoaRvAjWGXY39d9AvT5hUmBTuf8FsrkFQFDSWAkDu3bTqaEDV938yKNCsyiQJr5TR55EK2ShXoXRfwA3",
  "key27": "43iPLKgJ5zArKeCrh5VVYeAG4iiAi5amWX5E7TXYosJ1p4fYAWZ7P38rh62LoNMH1rZCC7NMLzGvUfwYaitWVEyE",
  "key28": "3MAdRVz31b1vsX3MexGzhTMWdX9zyrs53THahpyiz39hSoqMwE5NWjrn7tJhpKR4atQt8wB7DHpdjfSuvoSBDUjr",
  "key29": "62dNtZaNiw9a4GhQoA2FVrt6VGnsVwtE4UtTXgNoAG8cPtbkkx56AwHJEH5uPf1bn32ZvRd3PNBCf9nZtdZBpWf4",
  "key30": "42qo1h4CQtAs4CujDWS2PqMdtjn7n7P3gotAn6yRKaj6mS8YK9DfRnEZezMXPL5SgQLssxsB5RNgZKDugys4gSRC",
  "key31": "4opA5mtkvtjDh4yeKaMPqSLP4QL4iiAcnkj5xMUda5jXS3QYp575uJbVJrXLtYh7PWhDENCVsuEV2tmc3W5nnssM",
  "key32": "hcun8f9z2xQhNr97s9LRuZokQ6MB5WqE1u1ArarNjm6NzhrQhmQtmobAmroBiozAEegpKPtpaT5HfHxtVxbhP5h"
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
