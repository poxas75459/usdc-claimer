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
    "42mEqZCcsWdExBCPHdm5p1QLqvz5Jk7binpu5FkgjfiRobwJHYoTzNuo4LchAGRb9Edhb7YZ76J7idXZiUMaBwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47B6kz2Zvhn3zWKvL1QuXzqw6awCtnS2GLp4UE3yEN2E9SDFvtDrbrqFBQFDyvtgyxAqFaFNNd9rcMjiKidcrzuy",
  "key1": "2CFuQAfwig3XYiU7uVX8C3zp12wnwrpe3myMbLxnk1PxoLN6DGCqzxeATEKdGagpR4pyX64H8hWEq6wqudrLrx3A",
  "key2": "ewgHP3M8BmSZ9GajrTJWghjR9Av1jFhmgkkdxxBjJDjuCcdqp4ba7LYEPYGxtYxZuRYk6NLxcXEYgMfr5epXVe2",
  "key3": "4f5YhZdJ8UKEgjobJ9BmASybEZnYfccfUzSJtUkZcuxkV4cJWyoJ1avacM9GJPTKn9hV4Luure4pRPKDC8hPmE4C",
  "key4": "5fh3EVFds4PH4m5SDDFTYHXzAtE7YVAWFtukRVqJaMF25hJkscW7CYz1PtQpyS2D4zDaaoGBobu4QsyHnRYH4SPL",
  "key5": "34Lg2mDZosYmozWQocs7DNE8MRFywKk4FsjaZP49841EgJwaNLtYnqFwpAm2ejtWFdP79vh4a2B4dQguvCLjgBMb",
  "key6": "QrKVDyx6x97DToig1GzGJ4ntLTZ63iNUfVQm7Qjug8vRixi7CStgwfR3m3yhK1zF1UfiMbxFQBxAqjvzUrSzGMa",
  "key7": "3xdCbxsNq2qT8E5h6T5LLY3YaHk8ySKEYsEjveEzJC3B84G3n4xoFqHozuxNx4VLfkUoduobSf3y6SWwrcFJ7bVc",
  "key8": "3R4gLowWjgYoUYE23fJZcZib57SLpxFfhMcXVkuS7CNdfj7A2tgvjHCtdjuvjLbVacn23z9PHY22zBPg9N7ZP6cs",
  "key9": "4nKySogJWuJh4t3g6k1HxfFfJyNP58Xkk9yL9qwstLmqrFJfsWoQ4m1QuxConDrwis1yvJ1e2KAALU8mhixKReE5",
  "key10": "4expsPdvyLMcjy9bpCVR3t47gbPbxuEzjyZM1sSccjsy8kMKCHBUB6bvWYJThQBGJUbXt8bJfVmNzLVRgMpN16iA",
  "key11": "3tEDTfTpFBmuAVRLzy21uZ7CV2gXeZbCMNC199H43BDGGZvNWAuchwSNprwEQFZqQybb3cC9ZFaed5Qds2noAz2K",
  "key12": "5nJHWKAd5Qn1TRhPuEv6bpTQ38LHq8DS4uvfRqTbnEiRAtZbtGtxWu9yALoruzZJYHz5abJpGRRxiikfj8Bs3zQH",
  "key13": "GLEVCQPMTLkBNgSPZPtoAMXJEqs8gZdHHwbmJavjWiHfks5FTmSdHekC4xCoTK6P77yPnCbdTBdpoFZMP5Nirpq",
  "key14": "2EqHwBjKBz6LkeaWjgaent7k6vTYLUtXUiyAvmxZ3BjnhpJV67Ti1LwgWubAF2hqz3J6zdtTC4rRMasWwnFckhYn",
  "key15": "2bs5axycj9PBZ5WSEw5jey7gJ2SBaRfySd76dAsQKk9BVj5mUPtcNQ3MV195di29dZAYxvU7P8tBpQccS6UiYqDe",
  "key16": "5uXHdxQ8yxhrSDKfwq15oUay2hxo8FGJMeoe9yNrJgoByL7Ysq53b98WJJBpk9cVcBdWQvHiozZNCntj7V4CxjYu",
  "key17": "5zD5uYpG4afMph5Mq6Vo49i3QY8Vf9CJxvQrtEEfkYHgHU9ir74DA2AHLHgwe56tdK8GuANdu3LAqwNam4YDD8yt",
  "key18": "5CbvwxRJBVYv8PY4Uy6MBhygVRdw9GdFgQxgGVfN9hKY7TA23sfswoFBNEeXqhfp8aMrDSuPaGn3g4PS6Tzp7moW",
  "key19": "4gpsoX5vfDxxjHqvngCHYUiqs8q84gsoS6WLXGp9tghrPjEgk8miRiVMVybMHShBzkydeWy8cxm7wKwz886UwTFY",
  "key20": "2ucB1GqHR7B4FJweD4TFVM1QsrbYmkpLmCYmjw7ZfnxG8djVLAdYTM5v2YovknSWspo1DeFiBLv1eY2451w7WM1s",
  "key21": "57PiYypdsmvaxZLfWDA1BNnLsWnf45vswC1pb61TW6sbCUJo7BBzktzYGsfHoBBy7wdNPLprweXmPFtu4vnXVabD",
  "key22": "4o3mDPho9qTQPTU92qvy5GAUSm6rd9k3pjN79fbrm5JbH1Ycz6qqL3QSmV231p9cLyQuxPQPrGt8irQehjzuWjeY",
  "key23": "5a6qrhmscE3jWBB5Ew7YyUAo7a438SdgJ6PQaDSKPc59fcuETzNr51884M94sjrMdRiUsJ7KyzS8TuMsP7AJ4FC4",
  "key24": "2omwi2NCZSMbGPvfYZoErs5ohdMkDCyPwKxobmF6Fruq7X8iKHsqyvijsNY49MbKeGEU5xcMj7n6obgYR8XuGQxq",
  "key25": "4jueTQVmn7kL9MsSTiUkQiRovjFVpB9LbkVxx1pDHD42R7k9kroerGXqaHyFERrbzaEhfN4jTc46uUpTUz1mNboB",
  "key26": "4jqmF4nMPxh6H5GnrKRscvNkTSdotzC9MCdddHdhRg2X8CpFu3iFGy5cgKEcNvD9kEZ3FWE8Rxsxmr98AWKKhsL8",
  "key27": "5Gh6QoetWBrNzhdiKvf52BiHduRwDNsrRHm2w8R6NEjRhydcYWUE3UbgEBa6RSrqRpG1ftjEJ7HRW62Pky61dRHN",
  "key28": "5F1PnAK5GuHdi6LLAJdHhqrEPAfS3dkojqH19yJWbei5zw9oVSnk9kA7HjokM51t6vqmA9FmqRbNzZc3NxvF96L5",
  "key29": "3W5v23irb7LyGR3tWr7ZeKCw2LEZTGKbPehvSAHMZeJS5ATFHMeY73BHBFjwAFSzSYQ75WgcFP5GDz81qUcKKVWA",
  "key30": "aS8iBUpJ2w2vK2hxcJmiCzj8f3pLQ3tF4RnDVfcpXiYGomNFQCJHwMtbiFzK5zJc8qqV6AThMNfz6x9CwptV5PX",
  "key31": "iko189A3bRm8xLTozohYM4XoP9mgkBw18Cz9bvwTGFG1wjoXcfFaCfUzCLJ1ULAfDGsCmd5VqdohdDw4ATxsmFy",
  "key32": "21DqT4t9gmhiaJd1dx6pNUsifhXtKmBoQMiPaMz7UjprXwiAMPFt6KJ3oskAYSvQm7YBfHWAVytETNfTW1qGSdzP",
  "key33": "2hBJZqEYTHxu88JvrfmSraoCZEjMHEE414FhEMS9BDrojuqgjrVPQdCx4jnqvchha5pUpepzSmb8WG2ZoKmG1SkH",
  "key34": "2KAMhisqHhaZ5VBuwTQAPHBt8kfLLNoPLqfhwv8ErEXjwUFxNd8BKoNMFNdmeR2A5xTvf8gTdeuwAa9H6hDh4SMK",
  "key35": "2r7hzkFqWxLCgC7UagNKatJRJF4BaQrDDG3KruW2CSdDcVjnWkTSEY4PBQoFspL1yzS45w9qmDAjW8tCezzMsjeh",
  "key36": "51Uuhakk2fF2HZhkrBCDNDeg1K3uc1CF9owgK68MtrXv8nLCfdhWUPRbvuDMNuzDSf4taNMKEz6JuY77mbqmooAP",
  "key37": "2ecJFUVSLSRpbbpXf9oP1T7cpm3HuMUQFxNss2AFC85LhtwcdSaq6TPdczbV7GV8zwXQqgzYaSbm6x8YRMMkRtC",
  "key38": "dJ6XmJJTDd1YsfHTFiZUgmSQYR9KxKHgmW8Cu5ZyAXDAP4Kgxm1Ani7bRwiuSx5ofdS3PruZGs4RUPEfFc4JCGS",
  "key39": "5RqMjEvUzkQvike5bGdEWVFpt38TDimyWrsWQuRgXo5srW1fYzq2UHKvEvDDzvPo5ubRF7hkMrm9CbNVoS7WcCVn",
  "key40": "3Qxce9P34xyH6phrsSeA8BRsoLf9agSwMc9TQoR2BJFjBRS1GEHBxzcLEUkkZE6wrJvUjYJUVhn3jQye3Fcu85re",
  "key41": "2Zz8XYXeEQpmTccamvfK1LYAAmW3y9aHfj32Z2sJ5DAPxocxt4yM8VLZnd91KH1eAZkqdzkxyMeLvMfkhoxySCc2",
  "key42": "oSoWqA8LEUKmrLodHtkDvLfvQX5ih4e4cknJh6jzJSVPX5pBWTuJNr9CrpjqbffcMbFmzT2cJPWpzMXfQK4sR8d",
  "key43": "b4MYZChC8mR1hmCGeyQpUtPtjUDzi8n8MZt2jzqjNhREGcbvSD2TxVygDGgiHmSv883Av4tPy2ak4AAiry6fVMT",
  "key44": "Jv2cRqCeuuZP9hSX5VCKShyKkCGRejK9U4dWChwKrZxAha1uFtfuZTET3eM7vJN7TFzJP8pDTRBxs8CFpQqViJq",
  "key45": "3ZPS2EqSLNvkH6w9p7TtvxRJkH226K85vPHFNyMYLrmeCNBsNsi73Wr6C2RFTdYhNvv6VpAaPhgaxFazTk2RWxGp"
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
