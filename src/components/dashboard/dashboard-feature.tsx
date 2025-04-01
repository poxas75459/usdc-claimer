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
    "5QpBwBjr8yCWVmmRDL8hESeebbigH7mdL4yueNqXgFDCGb5Lm5sPyTFqYH93wviAHYie778STvtLLTvZC2UbCubc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hYeRZvanyj5xTSG1o1V4DjdLgybFG16MSznJSQRd8HCekKiS8mezV6QBZqrFiP1LfWn7AvTb9bZRUth8QGRx5eE",
  "key1": "pYB3TB2AzqKkEoLprMbqrN6akr7bSsouACPWtaTGhA7dXA98DUnYzSXUB1dzinU69dUm3tbEas6JQTkXJdKsKjw",
  "key2": "3kuajuP9Lst2g2Ua7qyNmJh8zdWKEjTMut8APJHFLkx84X8756Mb5bS1Equya8Fge2LnqHNfJFMVKhYBHmik5Q4",
  "key3": "32qBgtuv3qThHnniUNExuoaV8kMQuuN8x8gAMs7n6tdaRuzjqPkbdwZDX5XqHCo3jyYhBoPVKtqAW6apjBSj3RDk",
  "key4": "3jARgxndKsvE2owwatXn2rT2ZA8ACpZK8ihTYe3rYGXoHW6bBu9ZrrnbThBhRF4c4xDLf2qXnwf97kGqHNVky4pK",
  "key5": "TdQc3PjFcFWkKaNsVrHbFuS3zbHnBxKj96jy62uJoCf9yG7emfvuWPpdM8ufnRLPqcgTZDZHdgn9AqXhtc13g9R",
  "key6": "5oaePRwWtcdyppNVbtaUpH4hhicmuM4UnNh6mRgda34sGaP1fRsovvGBFxveZWDaYrnG8cetRLuSb5W2VVMNvtQ7",
  "key7": "rVum33ngXXw8hT7ejXMHaTmcb2bhTLfYJRUoG3vuzz81qD1KhzAzTnZBFQ3A6eKTkvKuGebMSDxRd1rrrUejE3M",
  "key8": "5wkVDPzWqT2CVjENAkcoijtYmTyANHZyChbDLgKfwssDqmqw3bycZpiAeXzCPeKCtwG4muaFHEBC28oQ4Fv2GMY6",
  "key9": "2pHWMgcagMJw1LntPPa7LnfdADZEuTjCoKZDzdVkHr4dJtpnjHhoWoswJgbATBnv9LYZcXxVD9fc7SxUYWnxSaSB",
  "key10": "4KqdU67h5xEddJ5fnapztuR4RRF2NwQQ7cgBhNW5YycFC8Xc7WUNK7vFoXRa14u7aMbDcUxsZopAc2z5wgfkHKAU",
  "key11": "3yhhEkvgoqyPkkCDuncy7wuczkAGUcbNqdvVYE7r9aE1NDNitCd9cF365ZWxTyuwB4jHLCjzwB3SWdQQrwyxhDkL",
  "key12": "5vu59Hdh5KH7abJeFAXAQXFNsYgGyJvfEtszSPVaxNp8osMdSvG92WZVuyeMtNmtiWWnjyzcCg6TEZh8KQgd8Wmg",
  "key13": "mkwLiKdKPES37NVZ267dYBD2QyB4chwVqBE7SD7iEWAc7QVyjnEFLQRMaM553oHg2QPCrtXxXqKYJQzHiuWa1X3",
  "key14": "3ouypb1McZit8pHRZ7ivfg9wZ1iGz35TuHb4WzL91jJGbifKwn9wkvVSFB4b4cp4kFeX7oKiLNa5qBe2pXoEXm6T",
  "key15": "qGRXHsnJfXHFJmNtczqfPzF5aUT3EfZQTeQ7Dv56WF8e64ubHaCj4cYLkSSbW6n9akRY5ofwacQsm9KJVMXMKUP",
  "key16": "4LfpfAZbkjjrKJsG5Ezjfu2ksHDwhdKBqi3aCfo5f9KBhCZX3JjnWDccK1DYoKzM35uPhPxig9ToYQ3MFz7PC7K3",
  "key17": "4PsQAjToGeQWj9XRmrdfZyfd3zZBo8i3n9inouVYx11YVwgnkNCxn4fjjwa1CosqdMHQtwmAiXm9AW8k13e3BDLD",
  "key18": "3zPzSUcS9n8etuPvsCMiLkdmr3LWUor232PDWte2LYZzW4Je6ci87JaoXeaUAin4zhqm2R1H4zoPHvNGk7tCNjAM",
  "key19": "akeRd1FuXH8otwEcqeTG7sz5VameNrhdWB45hJkkDtH5eDY7j7XgC7hELagy1LjMHWAyEWNXkaottcKzw9gmqBW",
  "key20": "2h7nzAZkTNuzjNTnHQrJVNChmYFoUA3eqWhrUGpZB3Cyx3za1jiopRh7gJZY2pAQrzWrjyj3C1KhnBiAKYFtCFc9",
  "key21": "2WdwKM1K4snixCSMprVyAdqNMRLSauGcfcVqfmcipczJ9pP6WEnjqxQpSJHtTj8W97J61w2qvpZVjFQduRn8L5Fp",
  "key22": "2E8fStU4Tsth4GSJFV6RVZwWmm9ra39ZC9aZi7Fb2Ei682ybUBnqyF7USspLpfzG4EQTG67sSP8QZ9hCsj2U66iP",
  "key23": "2dCPEeb2jREua2EmwC6R1wNzaACDiKPqJz3W5MmQd9gQHm4oMt1pTadeToYVMke7S6T5PfngwdivH3E8xo3nQJLu",
  "key24": "5qNrAkSmc6SHf2Q888KGhftqmWnE9YkPDgSZLBctu76KS8z3SR2qSKrXR1WysnKAVFSuk57y1nz7qtQgxeuqT3tp",
  "key25": "5bgJ5rTExHmPCBUsi9aqNmzkqQgdWyF6y3uQcwKeYYX4A5qah7ux2Lmr9ZBn1ugop4ocJj1exHHqKK8cgfPWjHMJ",
  "key26": "fkJwUN85RtyZeCGZQ9jhHZNCsKsaug82HWjcrdrqTjLGPtXeWKs6xvwBiDSv6taYrNtdYW6nvz6iZw1teK1pDhG",
  "key27": "5dRhu7LWEKF7LikZpFwFumsE1HpQfZkRpuVk3vDoYNSm6voPDo4aButYyy8LAZA2tH7fWJg9aF7kbX5J1q1kADZ",
  "key28": "3xVjTVziAL59Ux4ivDpa2K4XosUrHYFLB1FiwHs9cuGkW1mRSFpX7xvs5cZiTPzEucj7WncY5rUSwueoanPHKEAK",
  "key29": "5eVHB5kpPYxrUamHZUDoT7YPJi6QzGALsniqkpLnZ6iNV3SaVoKQYaXsFjsvFaxRK31tSZXFahJ9gjif6f2Gt5Ss",
  "key30": "2GGA2qaUcrLrX6vvPcUokiWux7BzFbjdPYmVVioFDmwFGfwqFUpY7WBGMnEXe1sbfdR4H5hcq5icj2s79SyR2Tui",
  "key31": "5v1Ecy4fvSbYZfUjLroNUvPBGmy5XX6uvHfegpH8qA1tsaYVACAdn7FhJL5e1UacLi6ciwtf75MuE56WbSJZAm93",
  "key32": "26eowdCCjmKBaB7fKB7vQoNP1YUoGsYf5nLB8Nj2ciMLz6ya7SdTDi1mPcMDhg8MwtHueMYSzTLaDojRBaBE3LdD",
  "key33": "4mHShmuGgBTt5G5myzYP1dj5cFtUc6b7P2Kjrdp74czRTAowsn62bTkVHzaCjFoR5T4HbgaFYMGbJmAyGy8uNFyZ",
  "key34": "L3G1ztw5Ndk2vrtYtoXgFsmBonUDP6QY8aE5psXvB3222EwxUKuUK8kos5dJQomxwcociFpM9YHRLj3zZa87o5o",
  "key35": "2qNVfJFgxCcKUAKs8e9sAvhf6m6vKqhqRnbUVJyLBaP1L9okKogLFsjbBDxKyjbisnCdxxyTMEoo9JTBm3XYzoEn"
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
