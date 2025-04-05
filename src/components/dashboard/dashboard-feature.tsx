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
    "2ETJjoUpD3FFswd4ZrAVLmNxKXgsmxsZ47S1oENUE1LH5rZgnMNDcBMey78C94fiGXeYAYff2kbdFQGhzEjCwQFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bcqgjP11ZYabWARbcXo1a21mww9dwYkLJ8dPkHqjZtYYkZCi2duZxKGtFn8eE6rR33ZJGnhhqHAVUYBCHC8qEtW",
  "key1": "2GQaDC1kviBNoBudDE4aoTUoMjCWrqiUEq7u6ZcuqCW9wkYGtxafWXeP6VfevTQ9gyevaGqwEHzSG1r1AMDR7qSa",
  "key2": "2JdXquvrnjKiK76asHQRnTtvadGNosFgNvemVhETTZJG34qBAwZVt8UB9Yy64z3t6L5dc2gzfUt2F1qxSoZjSPTj",
  "key3": "YpFyXjEuHA66mtixymGpwthdMG4yqjCphqbQEijxHXoeb969UcekUYEKfGvDNUMuQ91in11fAtAFTqTR8xvnZSV",
  "key4": "2D6vD7mdezvtJEYqJTGknB6SeScGtT1EoshoXvibkBpdvtsWn79vRf1RgP24rDpGpErodWBCJAFqwJjRwcjRRJxQ",
  "key5": "5DZKt19jJprSJq33MUyCEFHEjJp3P5PyEx4Y1bCzf8VUKhZoBDMr4kry1jWQFtPnspRj7WPTLutQQhuxcm4PSucY",
  "key6": "e3GbDqEZfvmzebonFD9efWC7gc8g6gQ5nuNRjBAefcR38LyiEqthTdsokkMHvpfH1oEqVeNtT6HXrsmdM1wRguL",
  "key7": "sH5VNcc74W3g26mEFiAGUnb7ffa5GE2mMDE6nTJxNTMiNnhmDZ8tgYfBJfYQfq2DaxFfFJ6JYY6P75GcZCjJEfV",
  "key8": "3rUSvNEH9Pt5ngBsB1uMQSiLfX11XEa9Nr6DzBxbY9EF4LCqLEkQVUfRpUnG5DhXMzLRpZNTBWK92bBMLriRknqk",
  "key9": "Vyqa4FPUTWPt8aVLSU1ZrK8SRFnxToE8KXSMqiGBpfvgQKsR2CixxdjF4ZB81Bo2uDyESRpSFtWqnzLZSA1cX3N",
  "key10": "4Da7uDpufxbtPH4SgTyqBGXf4EmuJ3JUair85wYvYXJNs4pQi69q7TQaEL2Fy92SoQWmP9XDfmAkL2f6fx8VGe4D",
  "key11": "3bs9VhVkVVUrbwMnUhD7zViVVFM7wnpcxtMJqnDu9L8jjHG17BrEx2W9BVbJ5YGx7BPpe92TvZViSfsDq5KXppgJ",
  "key12": "9qLrzwsMaukTPyYfc8k4SNY2q6gqUP44zEJEygXMDE9UeKAeLbpiZStyqouWGJxXGyBN98nndTRRV2vjZQu7JwC",
  "key13": "4AUhBXL5ts9CpvF1ma7xciBFyhhWqb7YwXieevg7yqsRLwvHWrSUomFYRT4utnVHxj1jrQaRAa8q9wn1DjbD4Jj9",
  "key14": "4ddVZFMgcJWNigK1vEenPGebZuVRXEuBf3tWAhVS6xatZjCN4gszPrZxRYBav1h4WvQt2zFNwTCvPfCdeqfcWy7x",
  "key15": "4se9UkAL7KTjV69m3C57V4TEZ15bNz3qnBvDbak3be73cvjyWzMRHKDNMa2EU7XUWZV7z98M2C5tGxeGzcLxWjke",
  "key16": "2cubdzf24LeB9C5dJMeHxpPmoJZUbmz54Y6qTxjSGgbSi6RGraQFnURFe6C4XNtU3kPsxPMHdR1pdwUHeGZVne6q",
  "key17": "5LLzkfYbZbMMtHnjwnJJyFiuVG1fKXHFTBm97bf16DQELagkvp5GAU5ZxL7VnYqCwUdkYwdrr6YwqyvFkrgkzJPM",
  "key18": "63QDTto5VDhWY2YHBqm1d3P4yrQ7Dg7qBGHqtyJBc6wLxFiq7Shoxv2RFUjZGx1DerMSUEXxzNBpKomJtoDtxhb4",
  "key19": "2xegwi9tCXAmPAKQcpDxDiu67CQkrpsAw7i7qMWcuNgWDB8x4gapcJrb3DZcAu1taa8EKp75TN5EaK5h1Tctbfb1",
  "key20": "515ZjjAm5N2dQXPPunTChvBq6oJzt8NizFSgDVLhaKsMYKt14HuJHMgQ1dQw8pFTfjJUgDPbsZZcC9SFDW6KMB8d",
  "key21": "4NN6diKZFyVCavinP53svyzo9Pdcvu8R4hxCiqrKGZf4PTFLpKvrA1nAjhzLhrJ96mBqTQVbmo8DXVAabmpax5Gg",
  "key22": "3QRnY4rkMFSngaWYmnTHv44TzELeK9ZNEik6GMLNE4tvgNMG3Daf7Mw4v7wJptcxx1qZppEV3HwoBZU7rZUuqkwg",
  "key23": "4puYu9yGkdGBBtV7ZddLmu2WWdSYRitzDd47y93CDZ26PoebeeKSLNG9TUQ53TQM8DRSPckio47ZwiWEG4mmwEtE",
  "key24": "5ELoyAQmDnEUH2RAiNWk7M2Lh4dDxCUYt91Tkxw3vWNxBVUip4J9PsQ5uTb3btVFASEfQ5XumVjZDjN2fQtHSbwv",
  "key25": "DDmGjT8U2BhJdf9NUtBbMnRf54iQwuwTyK1E5D2F3bBTmdqVADa1xvWdn3QFJFDmeeEb6eXMfiVmMymG8nky9Zy",
  "key26": "rnqHEQ2L6HhHHbgACapakTYpBTzEcBucgjH178xcPeUTn4oEXkxoXC3ap32eqNHtuzs4VKZ4ePxJRGXcYgAwBpJ",
  "key27": "3GvsVWFz4Bgrjt3aaJVehWdHyihjUvgTM7UomNGP3wsq7AGhwLiZu1EXaA7GYNW9yRPZD17pAfJMDG296iUjEKGA",
  "key28": "4xiomuPEnBQ1tGreJ1LwC4ZjU1KaQGcBZkdjy7ZXqtwfanzJP6TXH93YGM3xgvPb5ue3rXXq2XHt3sqNGn4AgdrX",
  "key29": "5arbrFXkHuGvhJrGRcw6mHsSm7wkoEFD5yu3DjwMCM8rZybQ12j4dTDB58dqzBDJKNDUdgN3RnHqLCC4nvjwSDhR",
  "key30": "2EiYHHML1LqPoS6kyaRJHhfg8YVmgfJMyAwfR5W35nKirxEeYWZNE1NE2RDKytqobGZLbGMfor1H9pbtAwA3H4eC",
  "key31": "3FyHpdoF4Pf52oqT6ysLjmW1XpZUqRdB8NXpSNf1Nz2Nw2k9t5cyboCPNoHE4NX1uboaLCyHhx7Ehe28qghe7PzW",
  "key32": "5dFXhxYTAEij6edmHaRpz68txuAmPeUhZHU4sSDnU6z9eKeQ512P8Lg5b2wci8dAmEfW633xwAnFYuPv4EaLhT8Z",
  "key33": "3McaqQ6oJW93HUpsVq3jrZ39QoaVANbo5P8ExYXzfn1aXQj3QPWL1qmUnSfyjQ3Pj7ErsuGaNKHqtPnKi3hitB8Z",
  "key34": "4zcc3Ma6UWJNBysgvGxGgLUAMgWMsUeTbgtUVz2L3ewkrpLFzHQXHGwPoRzn7F2F3ZXutofdLdbqNoDUDGvRqD6i",
  "key35": "4KtJoaVeSveHjUPJhz962YSFdbECvR1ifPUua9YBT1FYgUHitgAkVp1Fo564mBdQTi2wPfwgjGDXkMGShRzdbhhv",
  "key36": "h8m5oXzY4TZvCCPH5ys3VZHqwhTq28yPCvXa1ZD9iDZCmhes8t5YawPW98pDcHpLegozyBP3zoyWqnupKbTCWDJ",
  "key37": "3HxZA7Hobfh7k4ZZGsPGQDfYsSsn38t1pccMFuV6qb87Qp28yUy81bpo2dDbJghuFUrepkaUcJirT8KVvpX3WLNV",
  "key38": "4PbhvR4g3Dq9hyihssBE5vf9BviD6V8TQ3zreX4S4kw6N1T16apqfQJizEbM61dsHRSkWFAL8JGUhJQz7e4RyueY",
  "key39": "5EujAavLPWt1iRzJ3rUZHnLSpYGxVZy8ZkPmRNTV8VAuMdmSwQxTYajgAEXCMo2DPwDVPY93zCcKPW8FBp5Eq51t",
  "key40": "4EDeYAgnMK2nDdxo4GLHuJqzkciSboKwyV4rsjXcK79XzTxpLt12tzxTpwnGh9t44vcAt5Ey8s9J36zvJMbg3UZ",
  "key41": "57SJ26oQ8DDBnNgKzaJRLu6TF75xsxJHJ7q1vAfoJCiN1UvK3fzkGWbLRjmER5DepRsU7SMiM3ftM7smNWHaEWdy",
  "key42": "DJcyEiKjiJoe4vtjsYbPFrjtHSznU3RQKYCoLGuEkUujRXLJ8mSR7AvpNdB1PK3ZnLjM91hgbXuNiXs8xKctnag",
  "key43": "5sW7Yq12B4QsxgnibDCtBDaiZx2jYYyuzZjcZ57eNtjuXSRLt2xxoqrpKqPNUd8YKNZio3dTQrSSCDjzUn92xXu8",
  "key44": "5cjgMnwHzMm9zSZh1TppeUMSfEemwu2XnQ7F5FUEUwHf5VAz56YzS1z4qNyoiwFBSL6d4yvSgDCxCwFgJgo4KkQo",
  "key45": "21mRwVMG92obW3b3xQZvShhy5Fs7MeLmuaRHvMonyr1rCGJtc8SEq8BxZjnK4SL8LN3ZYgARyBSmPp2deKTgPM5Y",
  "key46": "5181g3kGXLzZPzg8axNBuu8KRmHgqA8rZ6ssALnSaoTT6NyHiZChreJPLXWbBE8SL1ZLfdCSqSsCUy9KZ3Q7G579",
  "key47": "5YrfrEUqXfkPvmsZEpQbj8hB4GB3X7J6PAYJWSBTBQdvG3x6SVUPqoGoZ93abiso8zLbMku8PsEP8Y5Ccus2cH2o",
  "key48": "iXYhMycJghAB3Pkg1G49WASWFkWW37wTKvkHuTYwF8ynTYtSifvLteJsWCUeTGkkDZzS4nGr2ebYAJ9T92jDEfz"
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
