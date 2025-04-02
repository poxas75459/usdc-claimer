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
    "62UFbKB8rMaNUyyhjiqpM9sMEtFjGnPEAHjadpioKbSFK12ABEBzFVYXfZKAUTADi61XyWJwGePis8MahgowuhQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sTLjznuShjbVdYPdwJcxQcu9aCyW9su16v7yY9ZmVyM8bdRgANznNSbMKi6MMfw6NJXeA4ZUPMRYSjLW9DKUP7x",
  "key1": "4heP6fVbC1aa3r1c8NfEowXDZnabrJ7sBz3CPkCcUp1ZFGZLZNuyPaLva6bj7h8wnLvR3fvZKJyKVewKa6GVbLAH",
  "key2": "pvS3KBFU9hbFpFvXqH7g9DFZyvybkqmLNYWhTNZE3qV1q29tfj71E2kbNQwRK4GhTH2X4aJtvfCUj6pVbZH83hs",
  "key3": "2My8qNMSk6FTWSga2FSKpMMmE82e67syecR9BGWfijf9AW3t7YDh5haPLqNtjGGdbyzsrQ65YcT74zRnw6hytuvL",
  "key4": "2L8BZeFA3U7F4P2jbNKTY7rChcQsxzRuNMpyMXsMeFuPRY1V6xBNBWwGn6woMfFCHTzyoex7NMSuFbdM9cp2eSAr",
  "key5": "3XzoVexjVLvA53MCTRxTYuJmSNSUK9DCWdaUgAvSzs7JYgsHtDK3E4LjT44GtvvwJqz1azHS2fXWEgD67NiHeQvb",
  "key6": "2nFJCo8ZpFc2JBbDz6rzT7ACuT6mPL94GM5RjtTqqfCPnqtc32BaucUSAb1eK7VxC5YL2ZLMPUiemknfKwk6JuZu",
  "key7": "urihk6d2SCor8qU7hCgnoUCKRWBBAJQQzPVHJvjqZKTVvkvE2CMinsj5XoxVCkRmm2yezuJDDGzXWQQSRcCcLUE",
  "key8": "W3sskEBZBw1Eomgr6VuWw18HqYQz6rbQEtRS2emqR4BsJ35RGAYcrZFohUhVo8ebZ8ad8i6YzjrvtUjqxcxCQha",
  "key9": "58ZqyPgV6gHgqWnT2xxpFJQmk7aDrKDm7R1KYEHXovFyA4FzgmPL5hEeNWCBi4eggGiaXPgHxeTPJnDEN5KkMiMA",
  "key10": "2ZRWD89wer7mcCLsHKjkgB1NJwBXKfK58bS8it2NzoyDuSH5AYB3nVshbfusYp3UfpcX3HZheyH13gmo4ibqed78",
  "key11": "269t3i7WxK9KMJM2ogNSpuk3ud3aGJyaSNFGoUJoYJNB1ty9yHv3qMd6FtxGq79GJA4eVw2mUi1ydaGVwzaWzxNb",
  "key12": "2ViNpKqGcgYYpQokX869Amgubr6YSz4u5iLw4Fs1dBScK8WUAmLWL5ceRjJjMaMx4AwaN8Ej94a1U6NvMBpGvTB",
  "key13": "35obyYM9Fno2tFJdBYzSt2Z33pCpZQXgvQfRAh4tinQVPwDBB6eD98yN1wsUwRDyE3yEjBBsuVhrud5c4rA5fHMG",
  "key14": "vR6dtNg2cPjPdNoxuJ8r7ejjVjmjcrK4GvgHBwC9rvQ4yk6sm3WNtWVzWk97M7oJAn2spdZwEuqYc6y1ifotzrU",
  "key15": "3g6HXbrYV2eCaXjvdLe5xJSWYSNLCU3SjgQKwAaMGRpNTdcbgwTyKjBKvPL1cuiDrSrajyWniaaBkg63h31b2ExN",
  "key16": "2PCQAndsxLC2nmX4KAz1p1zeCMw5JMp5hVgErjmEEWeRtENxVsDcCpAhj94kxTFFfhRJK8Nz325aJH8TDj1cLpEr",
  "key17": "4fiLHRbnzTwX6WimyGB28wBk2tDrpoLttg1xgd3f6ujoWXPhYMDqpNViSZSvxi8Z1w9zi3qyTg4ehNo2H6Evqpdt",
  "key18": "4r1E8YNYNBWBz5wCiurhV7NA4MxmtdcxY7rU9csMGME8GkiHMf9Z4AbgBysFMk7DBtm8c9fbypQWdNzQvUwseja4",
  "key19": "6vZZ4qqW91vH9syHWZuBJYYEjTqXn1V4m2XmDovs96GGNbGWTHh83xGvxS6N9Y5cPAoRjgUrxYa2tMPaMQ9PXzm",
  "key20": "4tXpCcfEAVvYfnxGrhqLKC6LHwBm9hSi4r98K51huyGxhCFxKucKs6o1YnKKWBME5NQydtfMeVAfiHTp1pu8rJe1",
  "key21": "3AecXHBk2DCU91Vxiw3X9fNGdqn6BnTjwViC7wZghzehJ1FWFAFfytPDG1FWL9hAy9zPaotkAt55FHX1XcRLy2JJ",
  "key22": "4eUvavQzND8GJ8RtPjZQWSMQcRxZvoKTp29peSi8Ciw2PELQz473rpoXBrj7rLe7iQLq1KVZZE7DW7Tmk7VWPA4S",
  "key23": "5g2C2Y3fvZXETWe2HkQYjcnsDojTdpCrGKWd7eMhQwKkJNV16EGix5GUbMZHwP4EjqF9KGmtsiTRTyw9V99Vj24W",
  "key24": "38cKaXvwpQ7EUnr7AmqWvyRnAuzPDjQkBh7MvvKbMiT6xbjuvobfyif9hBivksf3dN6BLdDwraA1Uw9ADA57jmrb",
  "key25": "2zKLXyuNxj3Ws3zLS4BCv3E26wECG7g7r5Yk4KrfD6tb8jFcga6DpwMNwmGmgbnfCa4UBmVSMpRxEp7m3BNFp2ex",
  "key26": "foe2vCGi8KzAaMUMbHxBVx4GBmHgbsm1nQWCmUB2pJjyQN1B2xwZBQB8NyGx2w8owm3w5ryeryqmeZeqkbC3KF9",
  "key27": "qz63nB7tZV8zT8PXqLTGSSp7CvWQgafX6RqhW6qioUjdepssLZ3yEBVLySGsA7YVzdD4BiET4BATAxeq8ehCAVQ",
  "key28": "38j33cEi5neQgb6Wtn7uctKJUU92AjgJjzg3LVWuECvrE7WFA9tUNXMvgfNGUxPGZXfSDjZzskZ6j7Rnrbd7HKJR",
  "key29": "41dg8H5DMm5gPUtbDQ9R9LMu8jo5RMyqWCh84ZXTLBV8DePXSGJQYqeVorpqQwP8aHazPzCjTbKDgpyXbZESZCJF",
  "key30": "ZAGxrxmsxb4doXnA4FJKpsWz81gWrp6YddFAyT8RaAjnm82uqEcJBNWERdfTsJp7Scn9KnShwFbwMg6FPLTYBxT",
  "key31": "5MJyYQN9zKG9vwuvV8qwPuytGHqQWUHcaNiMg2qbVHPoczsyFoFrwGG3EsPYTsHRLstvHfwF93ej1Jdnkcs3JiSM",
  "key32": "HMn3hA1MZNRF5hc1ouTKDmZzXVCr8CUgQqMVwTguNYfiko3rXjtHNF5qD4cZCMygD1fjPQXSBYGgwU37QNtwbuV",
  "key33": "hvjbxGMBoEynaz74p7RLDBNN5JPoVzeZ1F78s2W39makA1dZbmEHuor3uGqSocvyLCwqb8AkvK5GHjKEfPWfLqM",
  "key34": "4FUDP1CnYWwmMu9b4beFBsyw78MgiUkoY5gdcEpJPAStHo47atGGvXZADZ6vEQybVnxLxUzgfKKRz4ZQJRKaNUKL",
  "key35": "2Lc8NKLoDVjQ72smBAPU4KSivnXzwUXFS4oiEYEhuRp5b6Ze67DobtgtYoYTs6kCPdH6dsmdWiyzkgkhKBJqsLKf"
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
