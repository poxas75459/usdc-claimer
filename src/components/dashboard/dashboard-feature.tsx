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
    "ypYkHT4JHdCYP1APjSaSMuYjEmBEFe7kc5UKWGBsFKWbSyJ3XYv5wYG3E4nbE4yu994EedZkCgJBWaLnqpfHMrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "652hbVAfGg88H8qPdrSJ2uE4Y47KJfzwpLkMkdw1E14qcERVUHET5KKa6dNhQNGPnEadRiHXjJx3eUbhouxr9qR",
  "key1": "W7C9wCRW7UVuS9KQGcBzf967xoEiXP4PBJCG22jtqGgFfNgFG4xxT6BfVPH8EjFjd4cqtm7h4zs6SFKtbzZBBfZ",
  "key2": "3MK6PyDDuk8QVaJp9tyutEuWqkb1hBuptfWqhiAf3Wm1SXEdcwaxWLRrv8HmNozrioHZXuzMRn98PSNFn9J1x9Ck",
  "key3": "4LD84feFUewC47xyPkUEGgdi1vrtJN72hqVF27uD9HiNCt8Df8Vpgif1QnBw1MZhTt7wfusC3LxuqHm4NNdcP2xP",
  "key4": "2bgnf4WmW6eNA6x77VuvS3VtasLCFGkdBCehn21mCf6qfo8MLwypDzSd5suSfobd2NgxSH2hPcCNy6gnETMA6P1w",
  "key5": "2H7PSTaNCXP4k9zi4P9i9w1GJEqwUeez7YgQJK14dKqiJvq7hd45nVGTHpvYyLaiSyUY8z7zpvVXJ86yny8pTMXV",
  "key6": "29y3AGnC4hLmctMpEVmhDJCtWLgufeXpc6FoPD1zwxqqEEDPLeGeoaw2js1ZuHEkg2GT1otgegLaxMCH6Hmat8zn",
  "key7": "25igojUW6txLJRKiNhPfmQQULg6oDAZL55fKuvjzURffE6UwjU83UKRFAmQbUoye5oWCYzXT3prKnkkqjZjT29Md",
  "key8": "4oH2iyMbpXhaJUZ6zkxr2EuoKiHQ7rT4B3vZiyDPdMQVP8GAHmmwf3yRKDXhQvFm3epoKSGpbvTm4obYJZbrSVnj",
  "key9": "5YS8AmFuuhJ2eNd7ExQA6Z59vkToX7mnP7wRtEMNSpo2CgiUnr1U6uAySaeu15eYVTyevgdDGDPYd9fixm86fvFm",
  "key10": "36tPNPTDETbmrQCUNA8uBFs5WuPmsmeMY3wWAdtPKgBcyFGXN9de2yEdsAkDAyuEwLXs91GFW8Zwad18kKq9Tgbr",
  "key11": "3dsfwBjBLKKxRAVteW3ZAToMBeyLqCKpoqe549RwnUYU1swboACduJKt6Hf7aMBsSBigQrdPiKcfeA7FbG1ZsTAG",
  "key12": "3oGuqzYGCrDHoSsuB7M2QQqKWJtSuJ7kbkYLwzRwaQdL9rotjNGQnkNxU34LJYBSMJLvkvMBNVcCSq72WupevhN6",
  "key13": "4yz8zU3MdhXyJubdTa32dorPxDNjmDueetLFBHXuxyXR6aEpUWvdenN4JAWmwf1wo33G2MVUWKhwk1fSC9AjaJjm",
  "key14": "coJgWDf3Y2VgGegN54K9PmDJJ2Pk76aFSAMEHLoPsjeaG6qFrobYf3hcdmzEFFNbP142UwWPYmn2NKxHiWJvZsh",
  "key15": "3nk7NbytfxMNwCBvkmBsV9xiFCatLsKpW2Q8QRiHt4jnpzLMxKSitkeiSjmvz35AKt8RnwLVyB26314BwVKPRDGE",
  "key16": "3i6WCgqeTarwp1shaA52apHbcQQhxFTSLPYEgGd14UjRE7dwz4p6ofUHKbzWUPhnYeESe6gASZqoNKSQ3kwSU6SK",
  "key17": "5q6Hm2XDipKFc2fa326PAWB33oPDoZbukbunstSXJTn9eVJKv5ZDBYJ8roKKjmiGkau9ktZvxP4kx1QsF4VZizXn",
  "key18": "3qMizyo7SkT5U5rawHXLUt4FzfPzSShVrtcR6hcnhi7aydGedGdjbYJ1nrJUyL65ceTxvw9DHwyeBmpPmcN7hnAZ",
  "key19": "6n2GQ7Ld4MgNa92LyozYz3K63e5Gj6KQFvvtvt2GVQScscJzDHnUR43QDvqX9XWTQHAg7jsnDmWdi6qAV1CxDcZ",
  "key20": "3obVg9SYjuh3vmEXTTrZScvQh4NdQjrMq1V7de1NcyJ4KahJPTf33GKad5Hm79q9hw3ySBSQwvrYYAQkdSnMtFYn",
  "key21": "43EjCFHzKTw5bgvY8ntCAKVdSWwZtSSLBFJVYnzv2FJBTZt3pu4jau7ejpvDvuzepKmbWsKTfrn6isB5axdmcMyp",
  "key22": "4uBoNfdP8JP6vxuSYfNSGfLMmgJ1VohGPQdaNFCqf99tByCMvD2udFrfjULzcdDNXqH9DZGuGcKb4Ckv5GFK8QAw",
  "key23": "4WXeQbg26GTD2iy96ttLKfuqipX54ebiR5XKTPk3bxBxq9yyedhzXM8FgrdogRJC5saGAGMrW9g5Sw6fDukgGZcN",
  "key24": "2UMMuVGBjuW6UQxbZXLyiwN4PGMaGndDcwBc9afxY6ijXwwkNdrBu6nDxaJUn6VbMWzwaRa5ecvGBwFyUmTw4dU6",
  "key25": "5NHZWZgKZR12NZh7e6khsqAcSyFi7mdu7ChryMmBAZUfmoTg6Svikip4b4ntgD7GrEhgAh9yZZKda2Gttz7UBzk2",
  "key26": "5ipu6QPDzxWWehNZmQjnxox1Lm96PWFVd3VQ7TxV2wiVaZ84JLhLwn9FvmPEuyUNntmRLmAkekW9fh8adhur16i4",
  "key27": "62g6aCRVsExQBGAMn2Tu9kQ4T1CzuJRQm5FJwTzLHFskdGeHLBt3CJfSWMzjbZgCWdJpF3orzSNjno4ouiAcaXuH",
  "key28": "3rVhcXm3rTey15AKVDnK9NziK2dkwpZwqQffVAzxJtoMp8wk3RQffdywPCt28TgkKXpERTovuVtJWom5a8hiviMZ",
  "key29": "2WrZJggM6K4GogXnCW1LSmskFhXcJ4yj6z6vn8YzBk3QwG4TQnQwRCtMCfr6ohYqqfVDfRA1CfKXWbK5isPhmNmq",
  "key30": "3eejBD5ZTWcvNF227W2KKWLyXopMDFHE3thLUgTXLe1eQ5t1oesiFG9CuvMBDt52cHXEQts3CoFV9KNtz8GDd7kx",
  "key31": "2pRa1PsWKu5RV97o6T7PZsSqzvZiB3uD48y8L5t1aDzbA41NwcisPXuh3W9VN3d4g9uZq6WSiBJWLKKERaTy6KeU",
  "key32": "2ZtEka83b76WPi6ukpPr4ssbSVRizBrvDaYr4XBxMCVAPCC3gwZeNLSEvj65E9Ee1FpmYeJ1J182H6BddzkJt1Li"
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
