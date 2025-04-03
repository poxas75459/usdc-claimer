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
    "3QXWnpdoMiJ7xEJGjYDD3jfMrKN7ASAKPfLAU1hrw2cpnFLdVEXuF2Te67uD8fLemWFv7kC1tVXXeLMrk31YUSGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUCixkhnp3sUH4iYzuXDDW19B9Ld3VstMrgQbEc8Yt4KHggQV2tyKBAWoT6nNeowQzGfvn5UPSufiwPJMDfLXVJ",
  "key1": "NxsHXBBuShz8Z9wdbdv6Y3UHc3VDXqFpKakZfnhiPdw4ftb13HqmjEibzKSdjbwDkNEkMgFmCAuEQjJ8innBsbq",
  "key2": "27hxgV65aASMuDWeVcWbkUmRTxTCg2SWZgnMNKUkwxqb3Fv3UZnchErruP1qzfHcwvD8ZbpJp6bPQYgbVs967S1g",
  "key3": "dMLGcoNV8XVHivNUC6fafCKv3cbFcukY2QYyaSdYkjSWWg7rgBa5AniRQhPGyurNy5okbM9xVq9K5AFowzUbmZP",
  "key4": "3T9hGBeWSkcaPy2jAc7fDrRkpaoUTs3yBB8bRER9L87PJFN2iPHpN41mSPbRJvyU9Ux8vEC6ZsmH8aNddfJH7ihf",
  "key5": "276ELoVovsWWx8AviGb3zKCFNKQcjg5J2hj7QEaWfvVK9cgWGaTtQVyZ7Je5bzrRNYtnLUoRvVG5xx1sT2Lv8QKP",
  "key6": "2hDmyGatAHpfTxiLAab9t3RDckvtPMqaJQJcaum73J52y4mW77kCwgrxNhCpZbCuJGxq1pW9hjBkJ1Mar93PvaEz",
  "key7": "5ZPVULNesw76KojKARd6kfzhjfhgvMyiJNoreaBXczBvbyxc9Loy5tcjHsypskvoiKKYEKKQsWwVVty5uEyTEWm5",
  "key8": "2Zs4jQn8tcockKJaLGMBFEBAYBLJgZHbStnBgjwyhtTx4hLfB68fZPypZa8VMkC7i9b5GA2ozGx1ptBYPtVHg66a",
  "key9": "65acSvQRJy3NHmdrsibHxuBkHLyCf5bGTtQUEQ78EYEpfjGusRPw2hkMa3VqDBNJc9zu2RZACH7mX8tZafqyUYZT",
  "key10": "2xuf2JxNy65dcjh8rncwiGKmvdFQRmxbPf1wkiPe591jzX5y6cJbWwSCFQ4ejVxPNZ2HH8XKUu1ZJJC9ktkpskir",
  "key11": "2wJNGfwCYrUZdcgYZmyYzq4LSM8mGJCyQvfyJFxmzzK22pMVrLYy8j9RWz8S52DsyqpHEEpBbY8eDNCyeD3Qnp7P",
  "key12": "3JcCF4Z8s9wkKbEJiWnQya8iiAo5JXfcy2HxseRaZLEF5kyb7tGKu9cVti5GDGPSjESyea1ioJq6ikraT9GKDGEc",
  "key13": "39pV2BmYcamyxGGzgZf4WxTRQjkqouxvqRnkJTTbVn9xgbRV6uvQqFbm5twWyRp4XkriyXDA7g7B3Usb9qU9A15M",
  "key14": "4VB2ct33GWXcKQgw4qTh7eBiGtQ3CERten7qjM5wcE5LkTGPZihr46eP8BT1YpAxKUL9Cyfcqwb7NTkEDxHyS41r",
  "key15": "4x2o8fDcrufMYx56H24oMWFyE8613J9VfZVKceE5P15uQPJVBd5Rmu9Jj5EVs8seNpsL398ECgS9myWazfdkaCCd",
  "key16": "3w39Loni69VgMJVCDdfXUAk9CwMGpPUckf9oeE8oMn6fzv8tCSbLhyUHWV1CcD9A6vZRSwyza2Y3m2Zob3Hi9Kcc",
  "key17": "i1VQqcGFqnuxXtyZFFXt2obYoEitAJLaynavPm4LALeG7NWWuTsFXDKvzbaoahMCNLyekiq1wtawjS3QadBcdfj",
  "key18": "2HoQdg7dtj9jxrHspwhUivBkFWRh4bkyD8te8CQBTLjnosmS95CWuyKSx3UwPZL26JvEXQHSbq3Txnbcs2E4D21K",
  "key19": "VwGtuyzqEEUNBVF1HA1jwT3LhueHYf83re1sCpYvjCiGB6wuBRC8sLdCXH499Srb4qH2Vadq3o657C2ufiDFE3D",
  "key20": "3CkBLHLmKfFsSP3Q6vQ6eQoLfP4YmzVe5tLYmUtozRxjMvzkC52bYZEcG3mMMRnwa4aX9U3QwogoMeQZM2uPVi9w",
  "key21": "swjFese7RgiW4gZHdXweRTroN2F9tzBBLJSN1jr35wjiEBatCgxCW4TiJojFM8sEZdeitJWDSuR7f4sLEWRkDK1",
  "key22": "55WKB1kzUNKTGtoSeJSUZfFdzqFUcBtDwk9mJyCcSSdb5RdwnT1FAzR9DzbyRLkEjaB8fTKKkGGUgZLZprcot7Pt",
  "key23": "crYVkEZ4hvtt3abjMfNqFP9UNaJnHvRAjwh3KdBxChhwXefcgeCD5sW99XkT4tKdwPLeGxvPbzaitDHaKqTzCVR",
  "key24": "huhwaEPsv7Se2WnjJPwFndSV5e277TVbXyU4XmpEEBTL6EQacig5STwXnxztDEFxwS56MULuQdTyX3KQkM1yURy",
  "key25": "3oMHg8nEWn6TAJLZw9MNLZ8TZX7NFxUtLxTu9WwnpRbuc6J2ZzuWnQ5NnJPDaSg3FvqayXuxKsfMSq551QN6td5o",
  "key26": "3Ygv9D16YKoi6uN3eFX6eh1XRBhDmBJd6Y5zHekTmqreyjVCWAHS7TJ3JsHbP87gxyi4fGKzUYfy1Z8nJHQh8cd1",
  "key27": "4ywCTU4Gg4TekKkRhdvAPxjZaVd4ydgemRpmaJMY7NHAXRtvyNhzSpWBjHRxrPmxhLB5WCacUTzuo75bSTz5AYnR",
  "key28": "N76atXWGLVBBu7WcCLL3Kqn7LthuY99y379cNQcAC3gButt91WHZgvvTknktDo1MetzWfQNsvcA9D2aG6EpSDQG",
  "key29": "65AT1YNofTdT8A7JQaENGd1ABeK1osbzTxpGyec6ctbyKwvVBaVEhgA24FuBjC8J8zHece65XL6pPDaNFyJ13F7L",
  "key30": "3rQLCRS9MaaNF4Htk747CN8biideMHoDXT9GkBDT1uYiMyyVLcvjVEp2kpecPowWPgEKTptAjozMxjKFqKnw9g5P",
  "key31": "2VmWvPkZxEXkrE62DJEfp2aYCKCkvEy9De2M9D5Y3KMLitQe5qbymrE9oApoZK1GMYQmbeWFMJnxybZwazobZcky",
  "key32": "w8sm2mAR8bNeRck6yaFnht4hhYoZt9NjpsyrSMgnwa4y37yqGZYRkTL3vthGrJ9UsNPLHruAsNa4xsA4wM2Ni5x",
  "key33": "3sDP5yW6m6o7z4RCUZ1jVXc837u5emCDB7kjha6fqRfstirhj39ctyZAeNgC7JgrQ5DTiYNd1bmbRLeEwpHN4X8K",
  "key34": "2wyTfLsxjADRhM34eX7rCEQexLMhQW5xVaT3kUVxuJHBoH2p1v82QcPXvNym4ENNyoCnzhUZQHEexowHTCXZjFYQ",
  "key35": "4AxWQD6CsEHxgWGYm5tsf1ZVvjnZjSNh3XHKadGwogWmu7s2cFcc7DCN1qVbqMDFCoZ7TeykHXSgP9qbefjovFt1",
  "key36": "5FDeSzZjRKC6y7Fij22RQPuBeqh67twcKdfJB3isgMoPkkFBXULNcbozpmeg1gUyP9jTJZP9pbpxrGVsrByj6PbX",
  "key37": "2SqdcgisNYuk1Er7Jvf6TdfK2zxABnw2B9xYUUZj1ar7NQgvjcQkHuJhrwya6bgR3LsgvgQKJdPz5jDojGWkM9hF",
  "key38": "5XjfCaJNc62j2GfhvfLQfzdLhKQ7hKnENPWYePxRh1NMsrDM8FxBCy9reSicxh3w8HHPqVUZPXsNZTG9vn7L3tJM",
  "key39": "58QvLH18kxGEwjunXBaPqSQeJdRK1yXYfxa99wYRihk1vRpDKhZYB2j5haT1vFSrHrtjSvo8muKbMwgeAQgTRkS",
  "key40": "4U7WpixrPK8HYT4wLvHWBmUcU7YfWHskgYjjUVPEW3T68YK1TMEec8TU6cRLb4NrQsevqZvR7HkgK8Ttaf6vZ79q",
  "key41": "4dLjiUPfS96Eq7cEYiAUQaAjtYRdK3gyjqK7ohRq5y5q3QmCWxaEjAM1AVkPaM4uqn8t812Cch1Wfub8AydpbziP"
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
