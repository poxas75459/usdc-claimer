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
    "3fkDxh7WUSUGg9wjLprng4nts2PTZaAYpvzaZrCaqRTjvRXy3p3oVH36LUBgmMHU1avAbAifTiJTMdFvBN46MMsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A4V83hEUd5ZuVz73WDkgamRxiAVorU6yVA5ffSFRpC4xK3S51q3KHHefw4TEuC4EmQCY3DxmhEhVksiVzwom7Lx",
  "key1": "5WJ67YFEJ8Hff8CZXF2GvkVkEgwTc1MKhpeF3mfQegXUF7Bz2YtZyMBVRX8jiyZdT1MCVfpfaZSs5sHttR5ht69J",
  "key2": "3jMs9WZVv4m6MpFJTtHfb7PFjxjEsHahGw4KDddgstKvFNR8SxP8nkUeRmf1ecfLac1NXFU4HNkA35rN1h3xsWRe",
  "key3": "3RtuiUqNN6kZ2K5NRdV1YVREDTWd64JLSi8JBaLvXDQSxqC9UU5KPRNSq5JiUode215j8dtfBWj9fwDDaHbpY3BG",
  "key4": "UfCKMTBPa5SVgihSVPbFRsM6QAVjJAY9aRgCdjHw5G726HikGxdzQ8EtLyqAj9z5NvTJMBxpJSKJ2yj9Zaeh1jN",
  "key5": "38q7VAAnRzZHoNVyzGMuseVAj36RfPD5hXNA8Fmptg7vg7usPQnQ2MLhxNQmtYHR9M9TbAhUeArh4xeh4FZzTjL7",
  "key6": "4CWHCE9RoybjWb8DoeN9fdAHYfpBCEsn6LzyJWyhN6Nfw2Sko2RQCnWAKvA7AdP5DZfXdBH9HUQJz1ux6oiH5R2z",
  "key7": "2DjTgnBDq6DmR4rToN1KpHCxJknnxCQty5NaFqWttoWqWHeVCpRVrQAEB5surEobwoNxZjAzdxwjwz4qDGyZuxZp",
  "key8": "9j4VJQGbK9URZFnQ4exDWbxSBZ931diS15XeeJ8gq5eqMCC33xrG8se1ypicgdRXUiYrwVZdsXAgZzmgwfSbVQu",
  "key9": "43LyxdYbJyAjAwgV3zDrkCw6Z7jERgL2c5HUN5o39i15Pse7djeJEdk4qzCiDgfT61GRfLkgzUT69r17qTs8YSGV",
  "key10": "2r47RMk8dhFSVdggpGFkCZUN75pM7Umsj5EUDRuynNnCnLUGJ5aqny1SsyVwkwQaQL2aSXiHQgHtNxWS47bstPxW",
  "key11": "Cm86PsQ4tsJjjsZRRKL2JHGPjM1LC5BR9YjsjsxYNwgReQccm8LodFeY4LuUBZSQmgEDjsAAQjnZHtmYdu8yadi",
  "key12": "4grxqBK1K3rfjSgUCFxmMQn7p9YCaTdYw5RJdhtVAywLYcMsB7BaD24BrPXxGDAv17r5RRB4XyRzsrSLaXmpzmj1",
  "key13": "3ou9314M9fnNkKoPYtQfeJzzACBe3r64yRhXZsqtdVPXQqjQKqzeadS4S26AyuA4sj4wUAFHWr4Z9eteuEtwmaGZ",
  "key14": "2HmgKoLFuAsTGV4tbDKpAEERweF237ZVSt9UcZheVRccpxY4vobiSmBZUCGVxgy5PqRVkmXRR2wPB6GgtyMpKQB6",
  "key15": "3fVRUvgJVbmS8bHtpVgTLdYxhi7VF8ZhQ3WtxAu3YApCrk7NjXEvxMes2qsyBuuKbEzCUikx2tn29yNjBEQnkUiL",
  "key16": "2AsPd8dCNE2gM6RqNaposvemSN3aNMZqvuFWKjpPwi2HdQpeA4QEF23JuCnG4zA6hroGWdyHNYxYaoPrSRv9BViP",
  "key17": "2Ffj7e1vUKGzPAZWjCrhEKNbd7DnhsNC7GVwoWbsjt4Ly2thYv66stwy3FLQLJtxi5jD2TaR8jnDMyJQaf3XwsYZ",
  "key18": "5jSDe1iKrcispkz7Loovm7r6vas1WQ6QV1fTDDcZrAT9WJnqEfcctPRQy2XRffAAy2BUuwtT7Tf5fasJ2JC9Z2CN",
  "key19": "3jD84fPSSUQhYecycdAdXfUUm8c1ZHhN6SrknzDjKcKQWaiKNaDVWdqBvxrZYYzB9PGP4wvwQXwqXU29RHk66XnW",
  "key20": "47n7xhcQeSYP6jDsx1uS6qpWzYEY54issqwzxeziKP3E6hSCrMPBNcomhurGTQJr3btnUAre8VYvySmRwqsSiBXA",
  "key21": "2fWW7S3UG49AeaCvXre5AXzCZtfdhDoBsoFqcL77fgtpRwB2HtxagREHrxREaV3xu2Mo8V4SZt4bRFtCVTe4pFm1",
  "key22": "5ZjrH71QqvZWitZras1ad9J2tVheT3E4sWpCh5ug1qQjyfiNU3cEhJckSf5YfpuwSk3uyG34bT73AvbpdEuaYu8t",
  "key23": "5WfnYPQEd4GH5o1s8gyeziQkjNRkpQQCch4wmX3GWFFXpvkhK1jSnhUeMz71HNVYFtjWMHvXgAA7u9Aaj8dLyN3X",
  "key24": "BCPS6vWpADXqtXkZpJNeA2JDTrQ7oPmR1HVdBuNh8AxFeJLcyNLhGN6QZq8Y7oUTnCPuu8bycK2XFc829skHtUR",
  "key25": "5EMxBW54SbV1H1k89bv9WR1PLJc6ohaMSQJpwbtVYasbjzSqhM9Q92Vyc3UBzxBZVbyG6ghj75vRnFNSiZKrqRnB",
  "key26": "4bTsVDsTKFSfXXZyinQWKNP3Psfna325Gvu3ucTUm5UcHBXw4oWWUNAsRUdnG1NDSTKTCK6cosJXjemsAJJxhi9b",
  "key27": "bvk9NmfKJbyBo3UjhF2XjgvpDJ9JeHMJb1YBmoCqFE5rVQheZsjWetudjibu9ZNsiestZXBJt9FSdyMFgYvbgbj",
  "key28": "3CkDX4hDw7JgSbZaCd8nuggde7Exe4i1FEwEenETL3XREgzxCESxZSWnMtZ7mji6CNsUYPhzvTUp1wyH8RAz8fwd",
  "key29": "LpPS8yTFVnXe9J47nChySguJewxXUzezSh5BKbhELpyKTR91U6LFzpoi3svboGadqZEZa8kMT1gmkkdeLw9TGEb",
  "key30": "LNeNQU1z54BGenddnAebLpSe6cApPVetxtPKvYLAPGn3jRQsi4EGKEHfBHwUWeWuzXwtV2CMfwmq46F6Eje9aFW"
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
