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
    "4rJq57XcPQPZFebn3UchZtJ1TX6Hut5wxkcApcuRwgiBUZpugLWUQhRwW9vsfR8enKa11R1mMJ2HVGSCGFQeDmnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRSctbw3DFRUeVwUdg8d9uT1BH6AfF4MQwpzcM2K1pWv7nSQcCMCyf8xL28mBDEorvSQrThp6PrV853rDM3s3Ka",
  "key1": "5s8MpfcU2opxVaUSeWMz5e3pUyfDH5DCmJ8CeqdjvVeFVCyJVRNyizRKnxJovM1HNCJTsWRpimUkS3UJNtxspRaX",
  "key2": "585b45LC2beZzFK9zJAzF16oAnifHZLqtTGnjURDpJf68Wu4vpSM6fGwvfogb1sWeAE6tigSgd5c85sWvd1bGogH",
  "key3": "3r5D52Cnai7fcv9uL7RhRjE8ouAyNsLeBg4MNPt4CA3JeeVjKSeHCfvpzThB6QcK1jcALrF8qkUDvUFYd73RtrzH",
  "key4": "2z2pQhsskfSzh5tZMnur5unReqkiexmawbNQqE1BwmvmjqXxbAJmQrFDAdud8SYG5K9kMrG8LJxvxnccJ9kVA196",
  "key5": "2WdkmdHDjwDTkKLvzUM7vwc2E8vT9PGbNWaYXipXniUX5J5kJX3SSaj2VqVrdTBJSJpoZCaw5JrxtPjVSWQmkQ1B",
  "key6": "23HXmUp8HRPFjochxkuayFeTWsFYAAEUhw5xzHBYFFXHkqQFgf59qJEWu4tVrYgVv5HaWw9pC47p3RoHy4wLUXWo",
  "key7": "29j2ayCbQVJfG3oFQEUzNZPrYkGS6JX4PYu9o95sVigHibBYnegTGHZQ5LtXgk3WGKL56kSaj4X3sUPSNAzX6GSh",
  "key8": "44znYNhkTHt1ayiLcEc9QQcqkza7wqRQXHe4NxNhAK1B5vUUPSN1k77Z6gxPwJATEyRvZhVTimBxkJmacroaNX1h",
  "key9": "2SvEXUMPRTsdRzhNb5AUq1n9bsX9ZNxneri287tg6NjQFBERtWE4qJz1BA3k3Zk2T6ufoiB4bmhYyCr6iMrdpX3T",
  "key10": "22L9zBALAFYUE4tQ1vag2uNWJDEECj6y4JJ956iDrZ3CeWUHpTSUyGPAvrYFXTFZ2NoUsyrB4tGTCtj5SZXVfKkH",
  "key11": "3DggKd9bZcAjxdZq9XDiEj3UJXSwgafBmoGXGNTwgK6agKyWTHKQi8TPurkQmUFKyt2x2Z8c3euTd8uS7LezBmw8",
  "key12": "5rSZWzBYrzv5hixCeU8cCTkeg1PF9nLu7zgXvHyACeUzq2Kjo8KY3RzUsvcLwUiD4C3my8GkFRtukgQZumFVjnwH",
  "key13": "H5WxJghvfEzGUBxEa6BmBw1v79YZabU9vNtm2otteccBpqTaCDw8cFXgUjTW8Wuj9Q1uQ19cjkd3FbVP7RF9BW3",
  "key14": "3LzQ3Wc1qU3m5odVzukqq4QeiYtNUuVXJr3X2KAqrGQjzeL8GmxiPetAG2PjSkw9AAsYun2SP8aAJ8D11afzTUdW",
  "key15": "5npNU257VeVzGYoPg3xgPMkwgDfXiXt9dfuN95gJKTWxkJD8ZhPJoZDusLqdpJk2zYSsre8DrobXuqagwiBAkxC9",
  "key16": "486EVoNqGm2upxU55Qv3bGjFUpEWqgHbaEVuepWvbSCwbafZiAJLBxZtJP4Fi5DqKjd6Qoozh2pgshCmC81KQmAj",
  "key17": "5yuGuRmAKaWsXfAdhNgtLDWxT2AUMCBhRTFvgJE86FBJer4hVud45Ug9NipPXGD1pWcqhm5RymRrUraATE4c61eC",
  "key18": "N71kQSEVcionubpHTKDixnNeV3PCDcmLUXgWvJcWEJ11ssaGQmdkwHqiL1DfTLhzRWrNG8r9zyzkBjdaFeghYXw",
  "key19": "4Zh51erwrQXWAawzeVTssCrqER8ZJQM8mmktFuPvQDEfoaa3hB7BqtsFfyBiTn52ardeVh3F2SHeHN2SkRWP7izc",
  "key20": "5jrWX9KabrbcUNb3y5SSc67DDBB4MKbSSt8MLDmngjRX6cZEx2GxgSDAsCdbz43huqn5fE5CSXqJrE2DyCXn6Q9r",
  "key21": "25YBXovXPwFnt34L6JZFLYeAgrQMSiPWhUE1gtngvfcFiSHboJFzG6t8HsJ7ZDkwGjpJg9YrjyqsSCczLRJjz4ag",
  "key22": "4e7ujipxu8J8vEZ41XFSfkTvDBQUhLeYzcDdChd8D9P71wXmHUNcnPpa7UV5M5FttY4drBCSxpsp1hmXgCzUPNt6",
  "key23": "4n79WCSn2xeRD6HRYY7St5yUnyLBVcwUcmjb9tFdEGr7A6PkAd7kzmi6VMc7fC554c72niJWsTwMid34H5VTNwUj",
  "key24": "4ehqYuJU3CHEpGRmPioYr5LtgoBhpyET7ZkQ5tz2ESF88Xn8852ic4xm8iN3DKkR8ZYr8kqexRvjSYteFvLRw2F1",
  "key25": "4xJXThGVLruapbGvhkUwczpZmDicBvUYzVbWw8owJ1gkhh6hMZP8zAKhnKMnazP4BZMjrp4fvaPyAiugw3yXfaWA",
  "key26": "57Auj7pzCBzV197b4S1DsUPJgEQQcjxRHh8vM9GJmAdQmom4xGFvQZWdasQGbQhgLyGm5mbeCJEUc3KqCozRX9g6",
  "key27": "24oU57mHE3X7iQ35WkVtwYJS1Xy2MgQ7fpt25eMJSEjToqRZ6fQ825dXhWYuZ3FDPZRtnvKijBwn6cfN9Kkw835U",
  "key28": "hqj5sJpC6vYEvpcN2NFoZZ9JvQ7YCJAeTHvaHcBGfsq3Qf2FoL1qM6iRWWJpzWi3tud4gy7HD4DLRX3wsT47ajX",
  "key29": "3H5aqRNNwH8KioALk62XSrW4djQVyB4o4VXNk7qC7Jd6xRkEN3dojpEseWPhwJakVueN59sGZVzGRiwTYoE7socT",
  "key30": "2HBHzaYwXETRHVRPWzDT4PwNNvaca1tXbeLFg3Xr6AYTUkm4DEpVHHBHSRK5tkDrvTb3vWsH7FX73YWk9txFThAS",
  "key31": "3p8JU3tK4K2zi2mM4viuMrQ3zoCB2s2fmUeSuPqRQSBejncEDu69mZPMSRJszJJxo6L1bhm7BBFUxWo2fRmAy7NR",
  "key32": "5TTETXgR93nmpmu7eKSehsk1rXL7yaKALuZEHMDMGS8P96pAt2yAZfFojLZQcwHNoYBGWL2g69qFLFhWgwDYXb3k",
  "key33": "5qNJe73kKiGv7JPoj4VDfcrG9y28p5C8YzxAK214d8SHhR3TSZ9yg1s7RtWrgJfHJh3oo6Wui14D75WqCGGZzbnk",
  "key34": "3rQKX4r96Vc6MUCuWqQnBBdfrvv2jgJZK24PAJhnQxksbgiYKW1byeQsPii4HnGfnAofqePym4sEm7EEhh7Wtnt5",
  "key35": "4694zVeTiq4vySaJneKC4Tv88WPVXAAWZVatThcrJphcd5RT4oXZvJSKnBVQbu1ZjRc5QwCVNZc8T6GqfFBq2ND2",
  "key36": "5qG3oq3WHTx6SvaB1KxPzC129bxYQcyK1zTGsJQwdBfxWa5ZBE3UgeyuwjXVr4fex88hAZsECDY2kjZEorFPLnWr",
  "key37": "3xiiN9LBVcEmbmS1rGz6zWWwtSJevu111baYjkJKtP7tRQm9qrwp1CgBeEPGQTokbz1HLjyXXnecM36kjcVsSEdG",
  "key38": "5qo6LKF3NUYSsHSi4g8WXchMhoBCSWfiB9je6MTvyWq751mmEe7JvPj3jH47wGA8zb7f6a2F1Q1zUMFwBrG24ndv",
  "key39": "5MZgQBfsFi9G6ckw8uzyBoGwK9SEjTPtqxa4aPGT79PpFWs5pcRSiRpPe46GmepEqde9pp3176mp3nW9NB4Dnw2B",
  "key40": "5LR7AzT3AwFeDcDyWj28GBt9Y4DT1NznEgobGriHYPjfsKx3vkoqrnTrDGUpaUpyZRzx69Z2NA8ej2rawaUYjgG1",
  "key41": "3o79ccYhzoGnTYig1nwkfu1ZFqmEzUSRk5dL6E4dyp6qYeviLZ9B5wLzHoUjfAvWvHhQjLeaKcKFXeTQJYcR5kga",
  "key42": "4iaBz7Wi9LQSzMku4j7Wkbrm6ZEmPz2xiX6F6Ug4vW8TfBPaZgSs1TP4qjz4vfBGCQMKvvDyqAA9CqCWcWf5EHYz"
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
