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
    "4DDATwCVL2QMRmeRAdYRrAa23X7SvUVCbRKvd7GBCub3wVssmE9UhyQt5M9hT7pwzjeLSMwg32ALhugAuEDbQoLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4as34qC9cYz1WJ3ry3vdNowtduAwYNcjsmPM4E41CjkLffEtZiDKQvGDADWrnV2dR7obTJGDB9JjdnD2UT2LnXRd",
  "key1": "5qndMN3zPbEZMtsPPYXfbKBMeV5pdJjzpR4vRwpJ9rDWUwoa1bnVTsNMpupJA7ptcro84sv9mJxu9KXC9qE6MVRC",
  "key2": "4euLDEgaVRd5zDh3BuFRBYH2gyWwvNhc6AgiUgtKjH4nqiErbHkbn65PuzmCAiQiFXzyD2zqCzNDzdgYJfAtnvY6",
  "key3": "2rcdg1W32GTYxMp1mi9aNRJCDWdTLU251mnFp9Zzsyfcq1Mu8dcoZmcbkduCrX7Dj1Hbb3hgKsoDuM9xCZaYUSNK",
  "key4": "3VzMz7JFQf7AqZ3hdsWV76MK8QEsJSTicC1GygvBCYK3uGt3oKkfTi5VQ6QCXT7vNw9ZfVz45SJTduxQY7dgocZR",
  "key5": "UbFNGBkgPN6fnnAaYZJpuDuheFtsqMtJNApe2kYWeaP7xt7n3mzjSCcoWRZ78aJzDT7DDjHi76MFSim5U81dQfG",
  "key6": "5Q4kiF6MixZKHfwNkkd9U8rDxmuNFup82kyXg6A36pKyyszuYfm8tjShuNjTCUsd8G35McSg6VqFkDjEDSwxZ5bE",
  "key7": "a8G448xToPP4YXGjvq3wDBVh5yErGoKoNzWwesoprFBYT7kfykwNNkdnmkQm9ChbJqFCdkVmarJSBS5xsvGZR1r",
  "key8": "2Hwij9uVxvqVWf6SAxJ8HrcBDNUbduqwgyQSZyKUNdAKriJaFKZuQH37XHR3Jh42PCmF7LkpnaSbok2HCSFQ2K4g",
  "key9": "4Wo7cUzWJbdRidyACXMrGVAp77BN4Y5xCL8Ts6PEHpkhGNYh2hUQQmSq3W6jxwEXErCQWWZs4z2i3mDsxqSAdcBx",
  "key10": "3aaUs19r7WtYmyY2wi4Jm8gUk95C3YWBsAGBAk4XWUzd2KqwEfCqSVLFffNbmDuaExkrZ5QAgFKG9uH3AM6fpbWS",
  "key11": "2EBZnjtcsR46VcWXZt5yXfAwVYPruapqkxf5DkJM4pJ9bSVtVF8DfVHW1H43FEf2MkqChafZ6YGeNjrwV1ZHrMo9",
  "key12": "3WZZBZZcDJnqcmp5hFwMWDcY8vmVCxjdz322GwtRT8qtSZgQuYPkegMhoDNSoPCzfGYy8or1qwgzrhcYew2V7jce",
  "key13": "4cFPwodDGC5uvdCpffCh8DHfoHC43XZgfvuBovs9sgFeG2hGJscutRvHhDk5bF3DmwodWWNYLGqPkqP3iGuSSHSS",
  "key14": "3Zqjru8RPWMVvZWbRbvGc5cwUuzNyJeMDnNDA4vsDNQkqWR7d3szKevds3JN7tY26238dZCU5E6V45yikuRp17Yc",
  "key15": "3sgTpFKNwVJ91E4hom8a2e7JpnUBrkHh3QW1w8vSLEXMCVXrB2UL12J12XMKguG9zBMtSpVWQzSiJGi2ENEiJvDK",
  "key16": "5zgjA2oQdH5uEm9oeWYDzeMJswZGDQyTsVuR1GV9fdXSq7EkhGhAHbbicgfGrmrFkFi2uo7JHtz3jzydXj2oPVrn",
  "key17": "4wL1iDMaE4Pv7maEZDcfgy1znGvEpkhjRupJxcJ12ZzPxM8m3Z4WozusYJjR5n4qGzuUgd98Pp1YVTmffkLJetcc",
  "key18": "5rtjQS9Pajz5yt3ceGrzimdyRxJqJWoYXdvkq3zgbhyiuTrcxTmZ1wVfpQbNxK5qxfhnXY9C2LYYcEfFkMmuasyr",
  "key19": "3cs3WNpUTMJMDpdbxU3kBGzACEM93XUVX8fb8utgQkSFa5KAgsxretp1Cw6BLzwTkovjPkQRnDJybqKytqCaBwvN",
  "key20": "m5MDB9TXcZSWgjxkmX1T15tbywXK3Gw7hFeRztW47TcrHhZnE1bUeossJ6ayD1dk2VeBNCkUdW3ShhgfnJsgRqg",
  "key21": "5tYaJmwKGU4gLxpvKULsTQGVRV2qEMoSWcsFcDgkoTmg3xQznakiAQxDpueciZBxyP6sSHiyH1XwzfsvQqWjEcky",
  "key22": "3qqY3tqk69BYTRLpYNyMoEijE3XWm1DxfVLfUpu8Sidg4nDWYv7UfP9oWf9XHMwdnsKsDDjmLWy7j3tpsa4VNThW",
  "key23": "52864x7EpEZvguEJ9h7ENa68g6HmAhi5Vao2b4eEBeGQajXVZWdjwUbeusGFAgv8y7AsQWxvrndiu2kc9TCDv82T",
  "key24": "Cn8ZHaCWehZE6zyvuC7cPeUACGgB9DY2uUq4WuEasx6vMfg1UtD8SmG5mLK36FDD8gKUW9gZACrTbzNNiwgCH2K",
  "key25": "3VMQGxPpNRTL86fNDD7C3D2PY3MAxxdnJZKqeWRjKhuqhtNNCUhhewdnYXnwGffWTKbTs9AjTFXTJHeQEmMMFScD",
  "key26": "5GzFhxnxFTtjJLTzr3ZYHcBJdx87Q8e3gocP4bDypXV3uQCYY5iBGJLhhzKJLuyH5GSFfuC5QuTCEoTTuC25o9zZ",
  "key27": "57LDdAKcu46sZTVTpFAecCft3KkpQGYwAEdc5zsPE68mXwcyeGYREAeRhzFnA73gZY4ZqrwmZ8uTWUhBmnfZ6Jhp",
  "key28": "2ChAho4bDB9NtdwBVgtwyqnA9HtbwAUJVJeWVuhPKE8F1fR96SSkmUHj49PrmY9sDuPydTBNYCKLoWSZKCnnxALv",
  "key29": "51GvHZ5nRSccHJdaVepmj6RyVXyDF8fddAWe7V4Kh9pUybpsJdhwpEQHzYymiyF5HvF64wRxb3EzKXeFXzBPCWMo",
  "key30": "2nEyyUydqvoPG2ArnyUGXVP745N57qsVXm3ukJmi74yvv8WkMnrBe7VTYGUGgvrTKxvVYPc5PF1WJJJCuDpyWqst",
  "key31": "47hPVBPB9rgz6VUJt5Ej278FzmnZHFu9FTqMAfryAhxdNX8iWm3mGhzPaUZPqpyMz2VoSGYHap5FpPBy97oFc6ot"
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
