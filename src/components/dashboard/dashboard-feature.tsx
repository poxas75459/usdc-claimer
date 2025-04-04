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
    "pVeuB4YLsQgmJwABLWgx8RKEGyt6CM6EMAqwVN9cSuRfXzrEB7QsDwkdBdiYrsKib6W1EyXY8fxdMJp5zVLTzLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4varesSYXAbd239jGMSfJE9W6p8nx2PJaFWetyJyC2Dz5CEGRKJohdA9DepA1kBy6YKkkmbbmWjH6xc5oc37XhAq",
  "key1": "591ivaWukWgLHQ8Q364tHnwQW8oNj2AWfsbj7EnibJEf4RK4vNXiuGgDQrGDDdWx43rHpXKQGCr33KqYuPVraCtr",
  "key2": "XfPUbhVeqeiCEDncKktdo4vTuUwRFMUDxxGYXQGvqKQEofh9eVf1Jg9KuzdT6pcy8grPc4GdSxHmop4YZ9XBRBb",
  "key3": "4WTKZa56fNWsQXNRNkoExDFLEYm2kGj4CCBTW5fvBQ2UZcy6Ljgox3TnGWq25aKMemFEtL1HbsJNmUtBdvXmJrnN",
  "key4": "5yyK7BKzPnoFaLLDfckJ3z92ATuAEQsbyWteT2c7NUfnUKzUCkR4xbK9zDKhDRcSo64pgENgkVwZh7MvWGgsgG47",
  "key5": "5qPRQhosKJ7P2YCtVCgJkYFfNAp8Q9ZZTtnE4YFvDu6Ah2L8A8WegdND1puyLhthq65u5ASxi7SzTBnSno27uUdC",
  "key6": "4oaZDyk8KZbJRnohQfHzxjFyzvwutEarR3iHMPxQuR1UtiavMU98GjYunURNqdsW3D4hgvvYcxFvc1dif28ejWnC",
  "key7": "474kectkURCp3GjB5qt1BWHsNKsNKu71HJt2NQZNKxZrKa6ua5dKmuNvWvmki1wrvFSMctm7q48kKikKBzb3BD1L",
  "key8": "25HFHuAQXZfZFz1kVz2dyCWPKWhJvtfEZQnkrB7ARMRVzYC4LAmtm7wrBsmCNyPP1jy5q985i6JLUAYpRHBHhPJu",
  "key9": "1dVDnkSzpv7gFSkxWqvVpggCHnX6mV7MC527qwqkay4FR7vcQp9bFmNoLjbDGPTFUYLNu8mp1rZj1TiJLn6QVsF",
  "key10": "2PoTLoEPmNwpPi6maZUvxbAjGcmUEtT6LGS2qKNCr3Li2Jwq3c4AKG1PKVa8ZJLUfYXq3UfMzueX16YpMzE2vvun",
  "key11": "3XeudkU4n5RnWBMnATpBHnaR6uLHyE3YMhHH5v9wYWieUt17p6Atpc1SV9nTVDZfnUXoHg7BDn5sypdmee54zZ7T",
  "key12": "3sprMQfZRm9SZuiXq55xawbFECEy1taimFNUvjGX1Rcw9cPw7pUUGBcYvuhjMSpTTqsqEXkxBvQNxoNkq98Bn9Gc",
  "key13": "4Pp74bwcsjrJcvL21oxf1n69xdAB6MiesECT5PgSq1whNgYRVeFW2giMmk2F56omjH8k54CmPJw41u9PkPdAePFn",
  "key14": "u3Xp4md2J8RKnLNJYzZh4xx532XReyGjNTBTvmzpox9wyxCMPskJziG2agMce6n3By52iNYBYocWZJuW9GcrAJZ",
  "key15": "5pwAsdMhFVN6n4ZSoGBJYqdm5PY7NiFR4jLCmLxHdG2GC5TnZZPeq9BCTr9TfnumtTu8prbn2WHAfNKQZNPB4MbY",
  "key16": "5tVjiCYnhHRM1LxU8Jwyr9HMgjqJv5XV6VoHPoGRPh5aNmEvE1NmuXgkRBtNKJzWQWf5sct2dULHC4uciJbFhYqC",
  "key17": "3VYn5cRm7BNdUxYC2Z65QNifNtqmnsEfgqgJ99rqdrA4cW2ve148v6AzGZ542YTBvZqzKFdrGNRQei2UxGD3eyJ8",
  "key18": "2CV4QdM3ErkUCmdUyYDhch3xHBtgMsPc2sTjqiKRqaNXdy84zqghT8ddoAS6fmwkCdNg8ErtkuHhrQUSGNEp8Cx4",
  "key19": "4vT3FAgHNeizviG4CK2AbYJBCcYXF4pGXba5yy9iXb2y2Nibs6akYKqsX2ZMSHHok4nLJGN259U2FLceU6enc895",
  "key20": "5vS48NfkL9UNyGpfaX2rdfbA5QKRxp7ACKHkY8buyHNvHcRLAtSdWYGcnTY2rFbebvb3P87hiyRripgYdcuomLkh",
  "key21": "25HQLh9sRaCGXHfrq98uiXV5ceuxvsoKAzUziYepwEYHfQZjdJhoxkxSEgep9iKhVWMdNAVKPxDAr9wTZCdaFbYi",
  "key22": "bvB7FNz5AovfEi2nsXemfGrQ2HcGcApMHieBSam4mHWJyj37MJrW6FoskTwBCVvk79nWb3AUrA3vssZwp7Q6Qkx",
  "key23": "3uv9eBy3WHBbmryjYu5D4Qs6dFzi2DfVWkWTpkmBRwg3Um8v8jeyZMC1gVESvMDq8nm9z5rvCNuThbHeo98qFweh",
  "key24": "2WxurzQ8Y7f9zuQGYitqnV9Go76o7Y5K4TiJX1QJgxAgmCCQWT43xujwNP4DeeNX5ea9ZnEkC4ugaPXAaCwnmWkj",
  "key25": "57mx5RWRvK6wSB9HbBJfEs7uw11Pasnh4YE5Z6ZqNB98ZJz94FbNS6n4kFD29ATe1evLSWS2W3zy3seHVTtADYgX",
  "key26": "2braTyVdCYRS5QZAM3TBBeFKMHT7vHfEapvBhDn7PtLqftM8SmA7dm2wpiFbu5CaHvjRQWe66s4M7zemFAgNE1jk",
  "key27": "4BcpTTdh7a67bHr7J2RwCRD89WravhPeMKXrtCuThCAsXnFN8xxXYkU91DrVGKYA9QjeYoJqhB9xcrzFKixEqc43",
  "key28": "3VCXPxXrn41B4wMFXXDzx5aQbMWvVJFritkJHpbuR23tGZR1YWkGDtryFJeWjvXvyUrZtLyT4kxy9VTkdDnEMs8v"
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
