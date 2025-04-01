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
    "mMqiuNWmFiefQaW8AshmkEVaB8UidHgAhYiiiuR8AJ9x9Lodhhtfq45fNQtWKjSUJHtpZBxQtfHyawxKrzWqq1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyrQ3A4KdjD7xNj8vhnNzSbNXAGpyYjSA4gc6744qEBaMnnafDkjFskyvYbvK49Pe9iAzgFKgFYbxau98bfWXow",
  "key1": "3DvWHriMeo1ZN8Qgc6knapHsJqZpErm3tSWcv5VF55ZecK71Epfz9hUVCaFQCq7YM3FPXoYyfZvYhqw9nkDtTuDE",
  "key2": "5kYQX9UYr3T6HUCaxAuqpDMKxsxCKYzanbZWgMB9pxMwgE9sXwRLYS4VZuGRkm6Qqfuqp4D7S6S2Yu2Q7p32SsH5",
  "key3": "uaHKBmkqrN68JgUQyDRwenDTNDgZSijznnexMYXueVNzYSuirpRShaiPDxEKmuHvEezekA2RxxVhHfbN747shP9",
  "key4": "2ovrEv1jFzx51cA1ToHxQvTRpJXG1z9vyvNi3ZaQ3r6qua4NVb5S84qao2PS4xxYw3jFoxwX8zeHBMcf35WGF6aq",
  "key5": "46zjxfrn7EsLbnZmRjdYoGwZ6kDi7GhoYuXGVezvPxXUPaUvB5QZcG7kHDE2uXWdbjnkmDHoxWYzo7L2saf7Xwo8",
  "key6": "uy5ypuVmX8CHZKXFAhCJU9fXD5vJBGApM51LnXckkYJ8xXXF3gUb4JyX93cq6oTRsnmkxryULBhWDQ7HspVBVwJ",
  "key7": "2DyuUW4TahuW8t3RBvYCDNdxq3jLz5hzRb5FGqbMQ1xBYbeHHJ8uGsdrNJkPLQxGPn4z8knxq8eVsbrykuYLSSrJ",
  "key8": "uFKxmUJ1pxFWy9DW2ATqmZoKKCCDzozPdZ7zKgQN8dA7p4X6UxYnFfr6woHbMw1yHYfmUtpnTKPpamGVTFug7QS",
  "key9": "3Y6MVumuWTvpT2QKc4ASx1n2zdqMNahs7CaUWmjV689ugdHwHxd82jiPDSina9CphTZTUUMWDiBYYdcVspJjht9A",
  "key10": "uAtgJpgArGNaKhfZxqufbPJ2e3YP28VNqFGbVwjx8g9BHPWqmodxTW2USHBbnUyvAMifw1peAqjYvRUPSqxrrhH",
  "key11": "BdP2fx8BtMqBUygV17qM3hcmMhiwBVBr78v2ZR2QtiejHJ9PNFhcwi4QrMuAH9T5KPZ81zwVEuKLGy2FYBW9iCF",
  "key12": "gEQNpt5jPGbknoHDo7jXoQBQMpYyGaeH3NNbuPeA6beKrqSukE4VX3cETaEwzWPDKPT1MtubwKQax99TDCapjyB",
  "key13": "5Mrsn5cTimeFzabqcL72nCDNHpz8sBesqFwk4u3iQm1TdaMHwW6vLXpAMEGshi8MaKdqMgSo8BdY4g3w7g7i1DtH",
  "key14": "47VdszpeTrfwH8H9vHGNDqoiVvxLYBDiu47LSBfuyGVXaREMxbCNmTej8r23od8z7FfsD61bLjRtqL6ZgKsAou1L",
  "key15": "rN5c3nNiKoHAvEg2hNgho3JC5Aok42kHaubgJEgbCMZ3XR49x8JSn4N1ZU9PuUHinsj1KUuNeL8ZkuroikzUav6",
  "key16": "4sH1TTjYX2RPTwhx9WS8NWef45BE34n7ttmW1gBRrADNFpqinTzUaUuEh6t3sXQEyATRbA1k98f8VC5fZU5bPGVp",
  "key17": "sHjdAZx7hkqY7Gh8Xp6nkGQqGpUAawSrmXoumLcASr87r2rJnAmGcarXFbSrQmdRvdPq4PNy6aFaLoE1k84Ybfa",
  "key18": "3wmFF7DHYSPXncEAdx7H94ey2D2TQUYo5cyqicZi6Z1nbnY6nrAehLBRsqciRVu5YV5AfQXgQ8obaEfCvjBznyWD",
  "key19": "578v36v37FWqrzsHfQgKXdjLgz3B8LRzoGazSmWfephBBAK1QubHPgv6oFQdoaPudL4CP5x3giYiaQe454jqArC3",
  "key20": "4BBcfpZqAqKw44eYYkNvx66JSEWk94VfyFx9ij8Bk5BSLKfFHiAUP6oWJvtf5ALHWrZbpCW66ipXLmjhKdXY3uM8",
  "key21": "5KQnkkj2Z6h7PsVoRrGgqfdLWUrTT4VBUvXtc7NJKdauMbmZ1qgUYGbCNvMe2GHWBZyrUEQ325TD91wzdccMcG3y",
  "key22": "54J57ZcYWdWMMD75RvJvTMdPHe9ogSuxPDWxscGd15B5xwemnoFVCmfu2cVKc8q77sA2F8pjRqVkKeQns1QfsafP",
  "key23": "3dB2tX11Amc3F9UKs2hRgtnyweDWhEainyMrTFpsAvNbFyfrAr72BBvmNVRF5Eu5KeaqS5aaZxSG9Zi5Jh9sxqJD",
  "key24": "4p68kqZydX14TvGLr9SX1WQVfSTtR7SqS9aqzj99Fp7CBMJAV36nTmGdQqEwsEiVFKxpW48p2oM2rsQKDPBzrAxp",
  "key25": "31D1ptCsMCLXVDLhKUcX28m1zfy3KRrpwkaS9zmKkz2qSYeBxtPtcN2SWFzXAuAeGHsDqDeJKbTMi2NF119mtB1S",
  "key26": "5FkT4PSP6yyR2goSXC97YYQ5MczRrdeaGU37M74BVfZFLzZ1EhkR2ji3EQUbQTrHPjBCQ7fpz1SUeW3gLsDK4dUE",
  "key27": "34qnm7ANz3byXVnz4iZWBkrEzgoJYCbcukZaR79M1Anj5dxyiF3DoJzHJ3BmisaVjyiTikusQMzYkKAcbbZc4PNw",
  "key28": "3z5Y4AiwQMPBXJyvQCLJ7A6XXQVj5eX54wzu7NC6WLMMbzwbjhTuM15LCcsUPLznRQeZu15odULZ6MaARPKfX5NH",
  "key29": "4oNiLwPor5cnkgunHmo9LPRtfp2MYAZMPrnKyHsE4ycVeLn5h4ftUfbDvfUPztAct1pSt2r8mfHJhXVQD7CJr8hB"
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
