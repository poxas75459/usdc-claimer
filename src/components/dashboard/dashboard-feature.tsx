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
    "NZXUzDcg9yBtupQHpGSgamxgt3HK8UZndxLgujDRoqkmJR1XCjRGdtbSd3kyqVWQDBmShGNwvWYHQhAxc3ZVCDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cZK6vQdeUzd6woiRDrbqhrrFfW7Xs64ajFkoz4F4oooE4uLFf5BZXActZ6m7deatjTqZXT7UbaxkDQ2wYjjP95b",
  "key1": "2xrxFs8LTWJegCnmvJnBZ6JjzTbuKw4RSGGRz7vYZEFiUNkkXkS54RFhPM1XXg7fUVGGJjp38aGVsxkSLZhJPgnz",
  "key2": "ay25SfgS1DjApjQvNGCE6osi8g1yumwk8VLRHaQfJbvgkzUxWv9wifkkZPnPQUmhoHTjN881iiorshQfvFdtW7J",
  "key3": "2gsnjw3dE846h4jtymvu3UJza6K25e59ToYB8x4ixvy6umHmR16VZN12SX4YtptaQGXquKZPMMRKAq2hT9YUpZgg",
  "key4": "24LGdPLj1HyFTWntwC7dwfCkNHLxR15YiTL19uywMLBALCC7z6yzHZiZ1fCVSSPwRwWGHoBz51tyUGUkEKTm3jy2",
  "key5": "5Ubfzo3sk4rUTwoCJnRbGBQpWJkGnWnsSqMDg7WN5ik17RpXsgg8tgG24gnYK8ap4DdGvKyEGsV5LqS7NYUTJKwM",
  "key6": "2sYfnr3uvyXqY1qxqPfJWj8GCkqo9rQdgdpfG7yeqT5JYewRaGu2QuUJYfi19k9fsE9MAKKmustm7eSVekjZrDWx",
  "key7": "25x79FMHXZdTSfQLXxBaMXHfoinLehMfrJDjcLf5jJmY5aaYbtypn7FSmsra2bcNFx9maH8ooLps7q6u9qkNwyzf",
  "key8": "2uax9DABw2jE4RrNKnevUuUf1jpqbPgyS2XZNFNZ5b7r6tzDJihB7NZvfptvd3Jqf3m38iZtygLT3nMWKwa2uUew",
  "key9": "2F472N2rZJ3c2G9z1ZZ9ugcUpKN22RRgA4XPrLdMUWdXuZSc6MCZmK6couKf4LSpAamPja1qotTvxbMRTiM2fHRt",
  "key10": "5GjgjrfxatF9eJJzP63D2oneQDXr8AYHrqFpKYvBkGbUkZRrFMfio9DEnCtNtmJGJEvBNJsgVKz5ELieVDAWqqwv",
  "key11": "2rXPoZKkr8fuifATsJTftUe1wuH1cgrVQoEQeq4TYwev8JCLr17YgzSgbQWswuCJA9Vyknq13v8RpX5B6SnRKMiS",
  "key12": "4h8V48PNzBfrpv2Jqh4s9D3UgVbGL6vXxzgtcdeaiokCvQDkRMyTfbDUPHLpb7dccUSrQWQa8x9woiRrvo6TY5aS",
  "key13": "4HwUXYcTN4BkD4gNCkUzv5hSorNDZF4BfHiWTcuGUPW1Ju1pW8LCRouk4BHj1JAD7wfTuLjaP1FwNYcWsqtCvF1T",
  "key14": "dEAaeTcxDNHHwbJta5szoSv79fXK8hKpNcHgbVBtxXw5KvUVL4g6oPzV33sP58NWowN7xQqrs1xqBkVhermixNj",
  "key15": "2D3Vx7VGwrUzihDcky78wG5GWbVNMvK36a84Bc5XNCoPuja65rF3MPZs7NWNTdapDRTyJEsZ3aRD5EfqYFYRDZFr",
  "key16": "36hLaXCosC5uTouKVj1ZGDkMHYx3nm7CvdG3KbSsb9FGjbETMQmgG6ZRCTBW8iTB3kJLEWkoBW3MkoE8RPrCnN44",
  "key17": "q6Xncv8NyWgMUdwJHrZN62qoNkfGQJtNEyVobnMcw6QVo2r7FVF2S7dvjPQZSQf3qsiB8q9SMhjqBWdqCBuC4KR",
  "key18": "X7C9UkUZcPeFYjUwLAhaYHhixcRkHGXSEbSXVM3cUMcEJRc7CnTWtLLLTLPMUPaE2sCa8wbfjHh1EFiiKUVRjwt",
  "key19": "66zJCV1mQHR2nRadtmk3QgiZUHKzPvCafPhoNNa5GTGPP7pzwTvWkqGvTu6EUZbGUsCdMKinsMvqAX378bQNNKKe",
  "key20": "cA4hBNf2Q4LaM5aM5Dm5LJaGVTd38oxgSbKBjmmFyHt5nUhopMK4Gkp1MWNkZJKNASFTetPrxcszTo4z3Vr8yjn",
  "key21": "63JxrV7CVcxgbFqqgq7vi7YpVTaAEDt5nYGtR67ze3AnYLL1YeeNyJ6E8uwEqBzPf82zRG8qKnBMudojikPi855y",
  "key22": "3codf4CDsa1A1EZ3gTNn3WNhHQ83CmB1itNegx738t8JZ7nGJYnf6kfEK4WbRN5F1sE6mhfrXJu7P9RUdUoDJ1e2",
  "key23": "v27Qkfegmra7fSubo3qkjY2fteSNENFkbTwUSCp4uLuTjrCZEPa36M51PQNSP3o3rwFgnmqoCqk1bRDKKEsFHqD",
  "key24": "457mZZEnbLftaZLoKLzngPSerHybr2LDw183dYVs1Pmhipqn2jqfrETmzdsKbBaxB6ZiEM1HtoEipLZyNhgZZB8K",
  "key25": "5rcDquPn9jQ2xnVBSDHDQk1FXVsMX5K9DViXNKaAq4Db4i5g3THmRBfEymXDUZuJR2YRduezRe58nHFDbZ1sLc9c"
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
