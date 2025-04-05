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
    "4oaHJPtdyj4dqEU9ovVzPKMYKuBruG5yBc87mkzznmWXKddDEZBbmFz19LwrduLGiT3LUH57J7xYefd73wCTUSRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Le1NvYebEf8szXV5uUBo3TzffFPNgVv5bpZWvHYgGcnZkojcqkSa2ccrGs5etXBL6foMYt4TRoS2NfpcH7vRLxz",
  "key1": "5U9N1W963TTdmGAzbmHdyYKGw7UxmZHezshmqBYAc1mLjkeXrPfYPLt8ur72VWZ9M1EfDweXW5DaV4tVmqEoH1Jy",
  "key2": "54Je3ZTwdzoyK6CZhyTea7H5RDyLJMPRyAvDr8beSexHdwLHDiUcMHKypnyDa1QhBchp892KJ4NiZjWXTKkrZxeh",
  "key3": "cEVjeXgHiGri9iDTeuRiapgpbjbVGPhsJxKibZBNBUy82CYffz43sji6VrGT6QY2oJ5WbRSD3E4NSSNVn6vFxF1",
  "key4": "63Lnk15uLCetGqncyr7wgwELvXZ2kp2VfES3FWMweELEBHEW6cfddfo1DxPrAspdG6dfgciXw4azKXMp6PhH8Yw2",
  "key5": "5sHGqJ1ifCx6n8dqSfcpDcR9Lve2yPa1AMNvn5pkRXqyZS3dVGYSuCj5cca53sPaXpeLeHBKvdWWM7fHz3zqRE3Z",
  "key6": "3pbmm3k2FsfLzJj1xk7oBPWP9KkjfkMps2KLtz7yfwaDGPRfxZD58RR72qcv2SkTjqvndveBQbwMs7YBsDNvSZNt",
  "key7": "4gHk1taaUqDWpE7t5tNzC3MPqkJEhm2UaDoYRPBJm8nxrAXWSL9g9NgNrwN5N8PRVEwMLSbrjBwKycmshkH2CW4n",
  "key8": "3SVcvebnoL4NEmxXPdcFdX4biZBRmDeNzTkNswW4yiWyjYx6pE1CYrV4ShVYss5AnkAvNxcNEUEKsPvYTzExCaoM",
  "key9": "29DZHmCYNq6aiy1KGM3K4axYVDbRdSyzma1ZuKVQCPqvLLxV6ZnRLpXHzVZGQ5cgpehkEKQjk4p1H2u6JFsVB2AC",
  "key10": "q4tDX45mLXX6sqfQp3nC5TAyHSBx1WhqhGHqUWwiWLSFzEQ5YSq5ADCj7EJvbrW3aDREHHpmt2bJ8Rq4L1jRq3P",
  "key11": "XG3VKrEFCtXQd1HsGP3f8Rnuv9qLRaPnt2MHEAAvE5U9ycEsvSAuziaZhGTzTyb5UuYjw8ufkKCYrGw2z1Wkp2C",
  "key12": "3QV1xVpgV9N5y7mtJJtXJBMLQ7ajwAh8jA8RRfL4p3FRScgsYe9jZfnkPU5CngbWAuxQmKrJj2PHSLTKq1svfLjy",
  "key13": "2NWW2SQe3xZPMimbgwfuEmecNeCGpLnBJPQn3AFkx2jRA4Fs4to99Xy9HdbSa5JEEwtdBYEqZdAcevpcSb71NSes",
  "key14": "3RxdKGc2334mjJXpJWk8HAXuzVas98vJtAWu6QtserL3a9JwavuULu7YHTgR2jSiKniYoaextzp1JapuMnM3wXYk",
  "key15": "36BeS8RDmwSUP4L2qhDT8coshEdbXN8iGch5csUbmpe6LfPJ1F9hRLHEScZt6f3F54yJQSMUNxqnTKEyyyiUzKsj",
  "key16": "5UeZYhA6oZhHpKXosvcPTjMUdw7V8ztRcn3vadx89v65f6FwWDmCkCm22nU9yrzByJpMuuDJrFty4sGKfsEoEe2e",
  "key17": "2tGa7hFKYhenwSAxFm8vExHyHNLfMUgB5y3Ay69hdhndEjP9gbbCezFbNHhUt4CREJLbyx2NfZ5sxu5iQFejHqqJ",
  "key18": "Gduszox5fAQ5Y6WstgYHf7dkjXpsnwum5Q17AvgZQJskj8dHeCPSmhNKruUwezsXVi2FPcMYgLgHTyRQmFZp4MC",
  "key19": "uxHFqmNBhKE3PoPukVw55WduJxcEqDGWmFxe6c5J3YZcQePdu69v5ag8TDHyiLJxjHiKReCPYWEH9Jzdj4uNY7P",
  "key20": "D9x9PCihTn1hWVW4TcE55Phi7XU6eTDyE6TPdhMEAuDduUFZScjM9yEumKbyLFsiPqEhVkem469K3ixPocX9dcP",
  "key21": "2jyfPLHz45ntpa3cADsL8u3gvtLqeQFSHHw9sHBLNiygd8Uqq8egkPvi9rzUaRtprJNzsHiTfEqDAV155GZz1eEf",
  "key22": "572Stp1PJwFJjpVB8zJhoKZTrtTffSBzVTnpdJJmFoJETnKtuUiwm4UBmiTMg6FYPaGA1RTkZXECp5vyLrUnVavp",
  "key23": "3pDR5KUG9TxMapoSorGt1KQtq9zM67DrziyfPn4Ujk6XQXveZ267QgSNm7EJFYBRF6WEXwmU6C6SAHZh8P4eJa3f",
  "key24": "4DHvV9wQ8SFcB7uw2vZkFpLCovRg4frAcDFkFiN5y3JPeg2Qzvkxx7RLA88ooJ5YGAfQb4UYeAfeJVWhcHTjmvTp",
  "key25": "31RnQvkzNouwsFaUxgssChASCKaxkNfzKz2VqfvF5wrHY98u4F7GMUmsJc34myDVQVSCPqPGHkioghk2b2cAyTnv",
  "key26": "5YBuDA8uToRJJmTv4B2Jh1vuUzEz5AzgHj8XF3BD6P8boHvqqPzF3xsJ9H9dHYm9PEyNj8reMw85SqcLmPGHusDn",
  "key27": "5HP44JvKpcKMVhuFDioFcxeeBXG13zCmxUfUkLksmcJ1WNAbvxHahXP9Zzf9v1g6HeSphs5AZf38PoHbVsaPcKn"
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
