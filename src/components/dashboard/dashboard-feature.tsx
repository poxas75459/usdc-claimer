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
    "66mPJitJFXSdv3NT2Xfy6FbTzvKrEVarXdhsfhPKdLBgWMTmpEyaVvSvnCdr3ikT4hQDgW6KZQ41vjpsTLc3jWPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VUNTCdsdNDc4ME3qrNWbG1yuE4KDBiunWqtJX6oRxi2pqEpS6wW4ymAJYzycnddGzoptcfgs6vDjZjKWJPXbMzK",
  "key1": "2BtoGzJTG3pFaqmrNbMdChjgqRmwtvLrLfGmKz9RrLjjxBftKZwn72svxaPwHoiy75s9XGEkjMtwhBSshnWmwXVu",
  "key2": "2GaEvXMCGNruYVDPs2oGxDLZuWe6smPsdWu5RFRpqzUGCaiWrZFGorVnqjPinVr6qwErLQTZDhe5mXMpvx18EyVp",
  "key3": "5Jwv1RGdRYVjxtPfbeteJn5LkbkoN7NeykLyfe2o6gGBTXQ5wP8axhjbgDsCoGji2cKzBL2HqbjFHuqBdXoBCYvv",
  "key4": "zBiDJF5c9B82q36GGohjuRmcWUAZcnmFj3yBzhJamtPuKU6gFmADktnhdZWrk5dDoJdDZ1BBarF7QhPTSNm9tRL",
  "key5": "2RdqhoRdYyjVwPDU9m1f1sEL9kPy94PWdBud73TZRty9ymqU37K3RkpZ8t8Ys2TTeBhtEbcVViVzwn3uQ3cSuGmB",
  "key6": "bs33CK41ZFZHECM9g3vUW5ouzhinWc1AKdnnZ1RVX7GWHvsy3nYiNBsE5hm9JG28haYUT5wEYXAQzSW1finEqLD",
  "key7": "3r3qGUZC3TveL38RJw7yJ5Xg1PreuN7vLbJXxHKFavEo39BB5WuPTUzmGbjqjU63wKrgkrGEJciNmXEsz7QMqxB3",
  "key8": "5aqxiXSxcZ1k9ugT5WAhRrDhXom2YM3N7QixVkwzLNxErDvp8u25QWXjwgE55VxsGgSwwNodmy4oq3byBUnjaRg9",
  "key9": "5c6BNrm3yKWWGqzMSvFG5S84NVC2jg8LNPNgbEzyhvVMvderMsRCkjPQQtwixXjJuT4KLPs4uyfxJ5k9ptH218wN",
  "key10": "jqTu9Rw3U8ieFsNFZscDyw2ptRnyJfHFpLqsWbVxC5a3UpPpWNMo2c3o4xt9JdnYfYCg1j2LT4zkECH7J4NxZLU",
  "key11": "5memYkAssMiWSa5aDhfKpVT54AL55ED4fdUQHkzG3ZzEBy2YndZPf1RhB4e6qUT32RwXmDVg1ByZwEU8HLtVCpaL",
  "key12": "5pGPQtQTfptn2hbRMqcfqg1GEjsXaRi4cuUGseEEDpSpL4NZXdGD2pB7PqLzodxVp6hNNodLeKXm1yisodtCqznj",
  "key13": "5P6un4HHrrevx2Erks5cNgX6PfyuFUzDUN8sJwUz8gRTKF3iwnMa4KLfwPiAbKYkWmveRrwRpumxHp9PTBraoNBR",
  "key14": "5oNgzmP9xv7LYdnKXBfu7JY9mozvcJVKpW71xDQsYyykHPYfrzTW3At1TYMMjoxwGVC78WCjpDGcS4iZrEhFdzYA",
  "key15": "28c984yrG7UYwuuN6U6zCuDdiL5HCByNcDpAv6fkmcSu6zSSbzng6jvneWJazD9CwqTj3DfKDGMrBMTeQ1S1iGaz",
  "key16": "rkzEUtkcGZZY7p6kCRGjWgtwLRxp4bmRjSR7cnJgMZSymwv1WdPD9nPvAqJhr4EWp4RsSN71py3szC8qbSBxLfL",
  "key17": "Fkwam7UPMJDSDrUyx6ZcTvqDRB8R2XmUWKrvDMMfzr7EYLKbPgKEpxgUg2N7zF7caaUu7yJuRbSJ94fkqACjKKF",
  "key18": "513HQNPNvKNDDfB7wocENtx5XtEqUdRrr8rrJYrLJ8Dm7twGRqY6U9JDcEUV1bVc3nAd4qsGYExMFk735fnvpkbR",
  "key19": "3Ashb7sqouoaKJ2JEv7i1PtBetUB8JubRPw1T5tz6NPDvXoisrqj7wB9VRwzKGdRzDvrDG2tomk9pmCDBZSjPFxe",
  "key20": "28mU2H777tGfrpVCbsi1q6w8kXnyMob1WBvRssuMnuWm3JjLyN3JSK9Aw7jQAreLcPddHPHaRgjPRZFaVaaqtzjX",
  "key21": "4tWmRuVuroXkS1yKBpBTh9Ee6fGp8KduupTXnnXrXtU954LWfGzKxRJXV6FEmCYMNpNF3bkE9AVMJEbePBypWe4T",
  "key22": "2MaxkuYo9uSzmRSUDqY5Co6Dv9i4gyhWSJiVWZRnhi3tGbn2n9hdAnZYAfubxR7zaBcwxJfyfeP17PbH1UR1so5j",
  "key23": "5gtDhqhZEWR1BHz4cgouLg4EuPSf9sEPM59xUVaZ9rQpzmPm17h912fhSVaMdZAhLeYuSYtw2aGQNo3KKaesUpDU",
  "key24": "uV59u2vYVYeoJ8DugJjYiRRZxHW14TrbmKsxFXhbRze6wowguGHouT54KSRnB4Am9XwNEhA4ioV3vTp7dNRVRjo",
  "key25": "5qHHBY2M5cAtfckbdRyEE7Q6UcQXzM4eCM3hdEk8bqCdagcTj7nwYym21Z5VV5NDeDs2zX6uVKQmAXDA8A34kLSL"
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
