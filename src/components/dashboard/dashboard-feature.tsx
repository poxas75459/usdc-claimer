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
    "5F4Ts9g2wGmbVRH1nzLAebRLaLxHzxP1ejavw8M6zyMkGUUohKVbWtkVVaAaqJRg7upoBDqiowxzhjNbzA7sSsAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66EoMB9mcP16oxW25Z3PPwXhZsGFvqnhnAWdAweZicuznHHAbgzyHhmgrosRaAeEm5zrJpVJ4CjjbLXC2zghF5CS",
  "key1": "5cSpB31uzsWXALm9aLxgkXXBiUBrxrHjJwTeubCxb5bKm225yGs13p9bdigZE9Js5XhbFsbmtwyPVGaUTZPBineE",
  "key2": "66SzxmFuJdEfHYaEFskpWGP2Pz63J3v7SXgsZxQe2EZSaRCtj3fYmn1BUo4CUvvqfjwmuddFNdyYHMAWNDwr9DZx",
  "key3": "3ACdesaLBnsHrX97eo5rg7ooFmztZEirtgJbFi7NA1gJbouCdwfQwaxdEvBzUzZnoEF5KjqWczzuj4EMiW2STLu3",
  "key4": "5oDijPb73eoYXCfXTw7dmuQjLUcAZdkavCiP6RKog2wzFYYi7Ddx4WpfKcwmqizQowydMSxm8MrMknWcAPwdiqdL",
  "key5": "2nkKfXrJifV7wyzXxBECieDxnd6tArjp44Bq8tiX2nyTbCTHWqCthkmbVd47GmGYc8ktTNG2fCdfrXrX7oQW1uEw",
  "key6": "33tPYgYX9U25upGUeVU2kbZ4i28e5kSypxFc2bwyfZHK2mW4LF4yyCrv3wafFGJFurd4cfCWJttHeYuvrb6pFXwS",
  "key7": "5jMFDCnqgzSDQWj7cXX1xifbWTpErpnTD8WTQ3sbTg83RDyU2HxrF8ERw6zfeYW2b5E7jvVtDSzkphAyUqnEL5VV",
  "key8": "3DB6eZiKirAj3aDRzk7RMGhKT5UiD1F2ffzy4eyfMibmqYYQ2EjEsWcmjwgmZ5rb36Aw3dpxrcQExmc1TpZCDGAJ",
  "key9": "3bB583bEx1wF97Ep8pp3Gfpsv5UfZd8vtmrtv8B3KGDCkvoYg7C8R3uBJqcHPZk6LhdyUmDMumQ2PBXJ8R9RbYRo",
  "key10": "2vaHiSwe6jGsNQ189YASweZbsF8J7diXKp5rRaKRxAXTRERLZPE8bU6nsdfaGZYqjHz8ggCuPB3fgHmbSfYMDRHJ",
  "key11": "UAPg9CgmNFJTvq5wX3STTMJ7XcjjXN273yxug8my7hYZnGNx5b7zGUXGnaL3KMS4eQaxxirJ769UYHShC3ZmKNK",
  "key12": "26c3TSpEzL9nSNUfiCW3AabA15WrfcpqeyAzXSbdy125nHwsTAWNLkSotySszuARQYZz6jT656TrH95372hWW95n",
  "key13": "25q9EPXZAqRSjdYtVoeeS3hbc2a9RziQLRdTfB52Snwsf261VnyhzrxWRPLvqepvv1TuwgBSx9TEMFhUbk5AqAck",
  "key14": "5pdDoRi9fsHVQoess5CegHYajWxyUYiiT8RPyBhNwTmGai6YnSiReDstPLiAZ3AVvZnPdHQK7cZJw8E4uXBE9EDK",
  "key15": "42gtYKgaAkGB3mUWD9ZXdYLL2PH6NdV1xj6Q5PHRAh6TzTLMtrLu7TDqXHrVuuL9SnsxGk873h8sqGsxgFKWErsN",
  "key16": "3dB1qNYzzd7USQq5RdmGJHFneiTXpmPerYzRcF1NXt9PviVTMX2ZR3gHVHGMPzX8RhFhv5jt2aXwFv1j4kSKyhsB",
  "key17": "4KK34bhR4N7RufozU5rfE5rRKcaNL3mNEy83PqzF4ccyDsZAVMwNu8QJfsXopu1MxVRFfncrE3q53m3aBA7hQgL9",
  "key18": "47xby2s7zF1NVVasV2zEoXu8G6AKVyYnHi9RS7Rr8ktyovEwDz4rJkkw1cszMoBWMAx3cd2qgmKDea3VirdDWr9N",
  "key19": "H3JqeF2fbdgxCrnbqqs3QB7sc3vFD5ttyhrs8RRdF9cbRkcPaciCv5F5LdpoqJVFmjUXAfcvRYd5V9yLmkc7PkW",
  "key20": "SrTNZLy4uoQv3oLKytAzxLSYkbD5QSWdw1zToJkRMQjDiJwzkh5HPQUuZtsKMf7hj4vrZ9z1e7Ls8P5CsRE4MGX",
  "key21": "5LkcRKQUvsPvAZrLf1wGw1YGZq3fyo3RkY5zwQwAmtP2wcgyAnmgNt1Ec1uSP1pHKAa1PinFXC23trAfTvp3Zizj",
  "key22": "3YxtHUSwouzubDY2s7sGXReLxQ15L1yaNgihJgsVytvUKBvSs7kyymCoJdvpWbvNSrPzAdDGSs17Yqsp7Zth5952",
  "key23": "3jFEr865Tznj5HMSUs39dDX56daKSzb35EBnxxBMr7Z2qmLAbVM4gdkNiFuapD8zQJG44o7AGhur91BFRMNbNyFY",
  "key24": "5v4DyeZ24YUbpFL8pxWLvSjDvsFK9zuBXoLvCb66C7bVyRHTEX8kgFJUKqkLFPxhZGufsd36JksBaxZYNraHfXZn",
  "key25": "Fuxh277vFhuxdYocca1XvDGn3tePZfHvXJS5UBSdVKqtyXhgdGJB24t524wrNcrkpCcFyjfwxjURE6SdgNBRK3E",
  "key26": "546yrRxaQyr2U22CCfB3ZbBpb8w7JQmgM5xFVbSXej9c3Puz23xeSKp8gfKun8tJpcT4P2bFBeqsieBS7iaLjQai",
  "key27": "2v527Zgm1RVReuXPc1pBCTKfrpVocyfyzq4gYCX4aigsmpS35KNJniqdQrHt37Qz7JyTCdfFu9sNSuziaiayT7Qb"
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
