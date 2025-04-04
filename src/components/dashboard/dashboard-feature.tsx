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
    "2buSFjz6ARnrWHEWpoLz3Fryqyc9ha4G3uhniRC4xM1AT2WyyDzm1iwcUtCPSG5LAxLJijGWGKdRtRyDRCVURBBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tSdEmC9Aj7Sx36roki6Ej9AQA96batR1NtPACnzZv8keww73Y3fEQ7tRpAc6nVvPuiBL69UUEGJKpsUHsNayz2",
  "key1": "3bPGyiaij9r2rcFF3WPcspncas1ahy4qtWoS5BFaL9QrnVWC6YAgeMoHP6193PbbJjDSFBQuNqn9z3hGKZvDCcTM",
  "key2": "4PcDzD9UGxMmW77P83zUtrwQfRDsFRxREG1w3oejJooPQxKKDfHSGYabnE5A6x7cc7xf7nihpYjGWtuSUL2E11cG",
  "key3": "2zRLNGivPrAqTn1whNNmzJ61rtjMZS2EW6rbsVVus5EX8A2YXfZUcxPfFBj1Wuq1WhgUKQ2TsaFsWT5yLy4FPFrN",
  "key4": "3DzMidEGfkqsNUWZW4WddRbW8Z6AMe4yV1CEngQWq2QAUXaKcU7MQgoFp2BQLcDUB2FTJy3uX7CvVyHigmiXi6o7",
  "key5": "5q76MoDXF9jL2Pya3iqVze1G7UXJYivC47jKRwtGMV5Tcrn8H9XTbLxXwFwQqG3skLJBdyKPAJv7SpeRmEmRASvg",
  "key6": "5K7yNfk3b32uDVX5Brw7N3zV7P2mGbkVVuKdXtDhX1fWeBV3baz35xWB3pjRVDt5rWTV52NzYEfFCkzcBGc2ho2N",
  "key7": "3GpeW6wKDhFjPRQjG9F1a6M693W8wDDYkL3X6ZzK8K6JxkMMRvHWnRY6ydoaTezSYLcNYwmEqQ5Z8649z6ZDpu2g",
  "key8": "28fE115zVbLF3db9MVivGwswZVUnVJA1ZduQYboqFKwcnCnhdBxBf1U6yEZNmduirrcKiangadBGrgeLrVJ3jKXc",
  "key9": "2dNXKmbdAwqxDgb6PntWqwbFrijtSm7pacfXBdnBMYrhkuEzJNpYPf4yPnV596bVe6h3EcfbGJZ9jj2hJNvAEptA",
  "key10": "WhiN7tuLPpe717ucwkaHK3iCwJgULQdR21oQv1CVTS4oKvPF8pwiseCg2ns8wedouyW9Fte4V7E3qbb13vCAqiM",
  "key11": "39aV14twVKLMNBrq7Y4VtLHAumqfVVkxaxojoQfK216VCid4cVULgTEu5W6kuXDrtym7LrwJVkeebHrRhgJnrgq9",
  "key12": "3rJQgw9Z3zMEzSfGtrkPHX7rk8bpCvoAoVgwhNZe9MMLMSymRNf7La91nU7eBjNJR3K1NuLHy7qJ58kJcG9KsPhw",
  "key13": "1k1cv2C4Qdy7s9VjqL5vHy7xHHPPYsHa9oMUZh9S4mtCbkmLiV8MDNkNvyJSSbp6acaseM6KCBDwamfp4fXhmgx",
  "key14": "3BCJUhT3YwZD3ThLU1F3D8YJSNRZ1vVGYC3r8rNwoWhQRUs3sqfS95gKyR8UBUSwH2aKjsFCACMXBWXz9LbLbfBv",
  "key15": "4hxTT5RJZWX1p91F89V6bZcFiE3TYBAjWPzVa199LpPwBCTcwFiPszCob7hbznKhkah3ih5GSVhKSCh1X6e8YzZ9",
  "key16": "4LmhZ6W72wDc9t4HFiLmZpjn7fRCgSSxBtcH1Xn6iSKgxiiUhCgJdL6pkaRedvLPVuFuFWWxWeAcaJ8czcNghbaf",
  "key17": "5nLuEpg2LYvce3uDGgJMnoMfsi5PS6JTJq7cNQVFVQM2ZvS37Z3qnqQpzTsHQ4t9GEW8WyAbS1Hq1QzpQWwhCEE9",
  "key18": "23vaDVWdF8jmCFRTTxZJr1NGA3kzxg7aVN2dnRABFVb9CyNSxez66kns7pPPno6U51oALkCXDQ6iUSg3XoRuweaK",
  "key19": "3WBnDogWLYzerfYdXVDrakzLxJbkHVAbWhPhoe5QopD5EEQPjCBzVpwMa9wah9XMgWHVaUj8Gn5AAdGZNGUiYdrU",
  "key20": "2haeAvrWnBr8kkK2WiCPR28YYzgjhaZMPzGGZpJ3m5M4TtbwW1J39yzyAtwmFoTFT5Dhg5tVqeQSgEfKQjqWx96v",
  "key21": "5Ky45CVpa3SXPDrG8JQUCrUpsh7aLJ7nbAk7uit3U7LAyNb9fARRudVEWNiQd8JVZ2Dx9u95wzbfZFVJUp4MENcs",
  "key22": "xA6XfDoQi7mkgNLwLLeLF7YDqi9VPPiTuj6mCDvfkNLpQvt8JA8RDGQv1PAgxf3aWYJToadQLgaSAsyXicLtyWz",
  "key23": "3ZyRXj2ePzpU139fEwRnWfaAiTV6VzERbSgdk1K72H9nd7TThwwQ89hQu5cwYUSy92vNoLtPiFKuEHidYnbWMMHr",
  "key24": "56pbioi4bcvnjg5cgd3QTQVgU8jTxv1ZRT1VPmBQ1dgBqKws3aZKpHbJ22RzRUkvLLvvLQqHkNWUHQxLNDM3i79H",
  "key25": "45b8xp8Ejg668adezLemzVbZ7PzxxNtRvMtAHeKsKjtfLLVTzXCm98ucu7LRfgdLnwvgVieP2nL7KjT3N6wsX5Hh",
  "key26": "3itFNHF9g9GKbetjX8zNZDkXxaG5gnrb2swekMyGRqCN4bekKoG2A6MvUNUzUsmtzRTa8DWLhuq75PYhwBwXfuoG",
  "key27": "2ZNbk5JB2nTMjHo7D7CEtjC7mXwhx7CTNrHwQi9rdTzbJ5sWwmqPX3sMKRPGzeg93QQ5i7KsSnseC3KJqbhA1oDX",
  "key28": "kzTcNA31UuxRjMXDenGoe9MDL4muj9WYpQGzscMTTZX8eH35RQp9azySeSRhrM1aQqdxKoaG7CHw7538sHk73WU",
  "key29": "4WWz7UMfqrFmGciz4DqZo4bDQr8hcbpzMadUnBPBsRpLHhD1aFkBXMqSs5QtxekPBEfXYtj9meRN3DP4AgcjWhQH",
  "key30": "21jH5EB1J79dEt62XZBvkJziH96ZEkYh4dukecmprgTGokAS9guS3ejATgbhrMsLgfS46qDzvoHdpfihgpCYEvZR",
  "key31": "2uhT2UzEK4hwB1ccRrwC5Kz62WPrkBJC9dDAKbVMaksxKz8bi4DXtt2yEu3iqSfJYUBDvHz6uaio2NCm3XU8NUgh",
  "key32": "rJJh5x3kTbk3esmnv7RF3cmnxi8gyuKYr3omeE7APnZsjPiS6cAdT3EhABPYToUBM63TA7s2nLQfbDUwjhe7cc6",
  "key33": "3JPEhHeTFt7Y5edGYtq1YeFV2dfX5dB8JGXfUXeW9Pv9SinfqpKrtQ5sBoZQNPAkbBuxME3K4hmUCEZt5KwyfwQN",
  "key34": "4akf3bnvqtM3sD6iUQEJkX9Bfz7genKTP8sKgzpkgyuQ8GYxKnvWnfQy4hgi1vy6691URRDCvTZRzRWLthoD7VrB",
  "key35": "3zRLijVruFbnxtF21DcnHw3ydXddnGkBHgisixYBA8xTNht1zhwnFccyGGvbKLSJbvPzHyVQVvG41E1b2TKLCDCZ",
  "key36": "2mkW8bokw6c1mtRYUmeZ75e2vfXUrc1V6WoTPCd7uQZnsjx4BTnDX89D4fpvuiVcHtoE2qLVxuNBdQf4znrN8K9K",
  "key37": "3Ev5TLWdSkdHvEzaKufnV3dMaF2Szy6LsyqqFCFdSxqYRBp9m4fpyVpFtcdjxXjP8AurtdEEjMNCa8Uhuzjb26B3",
  "key38": "2ijY9xpznLgUyLeuADrDrNiSCuffo2Uq3h1fXKZt3BiCMuzmYxcCTwrowRwors6YVxEjGdk6M5sXqfQDDWNEonEi",
  "key39": "xbwUkB5yjwFJj3kZZgBy4qjdEvPNKB4z8JJnYHemF6MSzUhZFq653dCzYoz9dQNfFxn25BB3rAA7iAWheJStQJN",
  "key40": "2fqomJikXJ9t3Wds6PgLjmrpHNMzr2t5K3ndVJ98FWrn2Ks7hN1T3vbsXSZDshi4D5iHDjBnTxG3U9kDytoRC3TP",
  "key41": "4kAhZ9dumCDSxqFrdnQYSFCefPvqwm3TFveZKz2C7dMc98YYEjNeH6Ur31ZHbGkupTbS78TMT8op3F85sCQu4wGr",
  "key42": "3WN8tkzMwA7XXj4CvtGGHfLiNz9E5tCiHSzd8b9EJKSJPyhZkNqaf2hCL671L6FapQpnWbkwFHw7M4xRVK2yi5s8",
  "key43": "48syPauyrCYMMUYpzHzJChxtihrSH4w5p2He3zenvRemL3kVwpE6nzxdzEEJ8ZhytxLVNdA8DkAV7yy74YSKc4bZ",
  "key44": "4QdsQisT5Wa3SD8mfdcX8LCJejEDUgnKrtxg9tYRkq3MQgfVoa1CGQn2xSeH2MxTpwuJzzDc6jDGcmsUUM55aGNo",
  "key45": "3hrh1xuMpg1ahCkdw9nvPFjuV8EzVvK5taW4nKAR8TvBpte3EJZFDfB8WHGoynxUnkgVhY4DXqn4USFSJMMWYhVR"
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
