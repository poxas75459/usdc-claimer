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
    "CeAAXTAoqFBzbmFDnBbmFbfgGCpRgimmMfjJeynPBohdR2ikRYZngNVH7UginsnKZGuhDcGZS5hoPcFmuFt27xL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ZGNLhwRU3ajGHDv749qoXgyx9AG1WdsKck76gXvjgX9m456nPYxcjrSD9v7M8eRpFJt7fHFQbL5ScUvXrviqiq",
  "key1": "3KpDkTCzQwvYYUcJ4prjJW3HHcfjcvrgzXRb9WZbbToD7Vh3RCyE5bsXnX5kYsozJrEfHMnQHmWCzZe5oq7akHRh",
  "key2": "63rRwWq3qig4QNuTAdMJd3d74vMxJJU9rQYdKcdTjJviMfuu4YSxpaiS378SiJrHFUCRVrSUBjX9NaYEpbhz8LV",
  "key3": "32tqvrakZwpTGq2ue5VK69r3QBfxwDGYMNYY5yZnYqsFooYNfPTFyeSzTrGnz2MxuFG8Nzwy79mDUfZDfSGpqQti",
  "key4": "66zR9utitxeoWF5FadMHEqyZ7a5P3dEMJNvfWznpWLGybHSgw9No1LJUnexbzuntXqqaqeMRD9te2MPcUzLGK2WC",
  "key5": "44aJMAFNZuVNCup8HZJXK1afRgjyD5pByf2KJr9mG3eJMJw8sv5AGfCwmCjtTthwVeQnFPBnjF23YfuFa2qTx8Nc",
  "key6": "2DfBVKaHk3sw7p5mM1oUDL7RfNeMnBMsaa1SfnWWjJcEAyA6NrFWbir666G3TZof1oeqhWUT51SjY4TDTCNa2zRW",
  "key7": "3Mwks8H428HznmEgSWKvasG9atUNCpwsxrSfHcKLfEEPyPnjWGCmFdEcc6b2wXqMMAcKHAtfdQsdkiQpPvcqxJav",
  "key8": "NmifKZz2B7Kbp6LBXKjG9Xg6UHaW6ydB7eNRkMpP1A5zN24jZ8HHXVbStgpd9iq5kNM2hGS9nvryLNDzEyCTMXm",
  "key9": "2XEXTU3CFYzmgCyHKuT5jZcUsrEgBJJXmKBSWFWdG4xnGvgFWw1o3g5xg1qDDy3ys52ca5vAxW6aQdvZjFCzkSFA",
  "key10": "2XZhjFgdnAdE1nVVmFpAh9F73dgSKuetWNCvmPQjQSxwdfkdFjJB6XuGBsAB5V1phGPnK216ysMGeD5WT6bG3LAq",
  "key11": "dMFpfPiLpqumpz4P7DAAVZfiUdt6rJJ26wqvSND1aa9mJmzrniTbQecjbYCSPup4a92Ck6c6aPSte5mQV4ucnma",
  "key12": "3EmkQjNz57RUj8XESePCR7gBdGBF1eyjpP89kjvKiiTHTAiGw7Y6nBRTufyX6NKih5zcQGR1ZXsjLrhpE42PNH4K",
  "key13": "3bsoYqEx1NAcYiT7sqKs4FYek52K9ewgWRCiNYqFGm4DdLtjN8NZbQVFyti3YH1zApKqGo9uMRanQySrerm5Ak5D",
  "key14": "4sY6jLVvQfUVk5J9gvjTpdgxEzzx4CkGfEYGGawYMqYR9WqcqEPv9tjaHFmjk6j4MWjcruBRENjWiHtGVfwmY3j5",
  "key15": "66rx4GSTdpggxcef9V9yaPZMNmAXvBfTAZvXcoNsR3HNND4XKZnV8NA42Ugb4uWYpjk2acEC8GT1ggxKXRpRcAxV",
  "key16": "2L8sG2pk4eqo5ovJUdw6RD4cqtfy3k8QgHQLNu4RhvNxERAamJDK2FMAEtQMSjasKmZhHmux7K2TpkJGhgHvia4f",
  "key17": "3Thw7aPwibp1U3SfJXNpKdzcwZJ7jo4wvRHzYbCJZHfoFs21kGAgS9pAnd7fBfwTr7t74TSfWLoxm5vkGUhuJ2uP",
  "key18": "4Hq9cYafMHcidBRDrjJUdMbxUi8SL5TrWj4bUZr5HnSwPZgMh9vvCY6tgqbKAL8ZJMSr1PKqrZxCjoer7JfQFHMt",
  "key19": "4H2bPtJjUuoNioTm9SeJWHXTmwmZ7TnANbdmuzhhUnLQE2Uz898rzag3Z3M4RPzGZBHptsH1mL5rbZJHE9832VYu",
  "key20": "33Bjf9tvA2ey1t41R1dzZVZHgLyW1EVpWiyVXDNvhG5kcbdQUaLckuBYhYGC5TkfY2as1VcNHVfDwb7LXJKr8NBc",
  "key21": "22m2JWk1HqJ5TKPVWHnaNWr9kVx5gJssCwVwJ1mqaboCJKy6t9ZdJ7TmxLYCEe7hhJmTDtT64132FbPMQkmE63Jc",
  "key22": "2ghbPdzsc3jHCXxQhaZLE1hpHxCVgVEiCBzFKaPK9f7wvc9TtNVJ45MJDHA5GT6TokGTgRuBtdYvNqEFNy83Tc2x",
  "key23": "5fT9rQSCgj8UhdemCstyhT8CWtVuouBQgD2YgGxbpKBEfpVXoAJNLH2ytCqCyZkFPLxJxBCAN7TRjCQWgdeMJsmo",
  "key24": "4nrzpbrPMPnumYiyvRjvMoDqnivDPJGyhQqGLtvgqiuaMDmrvNba25RMVyrvhWSo5u9cS4rhDGrmoi2AS9K2eJa9",
  "key25": "56meNWHrXGXtXnEGiYmRfvzVHx9131BWdSVoUjVUg9oUVEui4YDv66yNgLqXKc9X3oPAxYoL9PTKZU9rZxTwPYkg",
  "key26": "27TZJEmGMLyJrXKkn4jG2dZggc3Z2cGgM7CMaWhTuj9ajUWWAzWMUyUB9KCcaCSmBqkSJR8vxoQi3j4PwaBoxff6",
  "key27": "pgp7oSQC1Q86CsNm14ykLJ4boitee4n7K5zjVhXaBV3mVB6UsHbPt9oRmi9zM2WuHDczWezm2ekx8TzCUKozj1C",
  "key28": "V1pah5XiTpbH3MFVvKBaCXk2PaYEEyh1siiaKpm2Ni7uNbkaNT3u5r6TeETeqVkZgTjxofaVHiRRG7CKBbb19a9",
  "key29": "3U7GJe8mjTvQFGNi12QYigqaxMd8w5zQFbjZfNkKeiFe6hmCvEMsgnCuWdWF34wbxsCyCHsBEAy8quNPEtGaTgyr",
  "key30": "316mvmxRrHAmR9xQNXrmHLUDouigW4EMZv7GKZVUwvudMMtQX9i7NWLXWtsFpRZHKzMeJfjmUbeTCBr4FNBZ8DDK",
  "key31": "2MyC2DiLs4RAvmUBez6jPd2frwbrpFM437Q9jANsoSsn9vUKRQ93AUtaXShT6bNHnwnt3psjLm3C7JHDURLwRoCr",
  "key32": "2zMMjwnFqj9JJ247F1M5njx8Wsp69Y5gBtMGpCpGhZ84bXiijxzRCSoVCr94Hnd1EQ34yT7rdSVv65WQ8aJyeDz",
  "key33": "3oWS75SJoix14MCCbjj9LW9kAjEVcQWKPRQ5KmrtPxuyMJ6QYpES91acDrRB54chSiP5zyZLRwcjNKeS2DqyWKN4"
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
