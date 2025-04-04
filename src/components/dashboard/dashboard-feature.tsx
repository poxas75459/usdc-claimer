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
    "3DfVA1QfzHcAXgrW3meVKXxQ9KpcA1MxatEnhPYJ7sd65Hvs14fsS5JH6YFj1zNJXNnUvhKzwUQvKofmzo1foXkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T1YRazKritjNfnWUcdvScQAES6ydxYpZ27GUCgnern2kR8Yda2uE4FpkzSrpqGgFdb31EFfWFu5rXcUPsTHr7nD",
  "key1": "2e62kvrADDdwiU13JXc961JHLWguvUKRckJRUPL1gJrebKeZZnUcS1hZYbPHM3QR57ukLL6BFRXBEJbfjWRbVRDz",
  "key2": "5hpUFSLPeHFDXdEVa5ibvF6S1DNM3DqqJETsYXWbHZ5q8RAncv4rocT5SyRSMUp9xg272QViRHAQuD3udzHnKmEg",
  "key3": "3ZQoiYiAVSALuyKWYaMAthgi2tN4yxCdZajN1tzX2MZZPXcqTJ6tLijZGAA2ZxxbD1347xWeaCryBDBc7MRsLhwA",
  "key4": "2QjMr1esyn4bKXJnGLX95hJZsHR5J4J5nHT83WTNE8JSaesBg3MqrLC1jgAhDfnQTFcugnU4dQAeWh8KVWcKx7mq",
  "key5": "38s7iV7PFbx2q5iwrg4aojKkbASf4HQpkbbk5NRkorjMvmvdvmwKtRkUs5LUZpCmuKxUuFfBmnYQWLZTbBppwxf3",
  "key6": "3o97S1n4u8hCRrEQUvARBpfQc3qWBhKYQQq7NiFWFRHjP43dZGgmNbyiBFs4E9Q7y93dKWuFX3Crn6op1NWcNRtf",
  "key7": "5DU5u9LhCuuHh2FUfc5hAXuyhyeQFe1B4VhZiz8132KYgGyJCXu2qrHR4UFekitqSvSSA7EFB5nfEaeYuf4oksN9",
  "key8": "3K85gWjwsv9aShXyqxun2HNWjGZT1p2aapTJAtnGGT972RyNnEPStMoVGEgtdjpetYfxPCbEE9FXLh6MJCnenVxk",
  "key9": "4YpHLxWRyPS7bhyoYQATzeAoLpJor9NkwAJyPLqB8tVBhAAeH569evp7vKhnM6QHrMuFEnEzS1wcniufB1wv81wP",
  "key10": "4DBBnTdPRYQFpLyavFrCMbbHLybxr2raDr3NEv7rXgSTT8DpEVMrGMnqnB2F9BjJVV2CNK8DwcniCr8Ke1qQZLEE",
  "key11": "46GZhsbMef1QLB7yyu3uQ3DjVDEjKz3wPtUXGNvnUhRkyGgw7mVUu7BFSBMUQ4GtbjJ5yhCrDjCcyeMLyVuURBRN",
  "key12": "o7RCrk4nNAyQ9inCYeaPNDxcUaD7a8J987fSLnHbupUEDnggBaiG2ahSgpqS7SZ9z3X5SpcZQ4hbyZRtw49DWjT",
  "key13": "5SPs3u5i2XZvLGbFt3udNHPGuYtgoxMtwLRczXgzWsH2ZAfxGWViV4NjYu1Nmf8kZBQQquB1jv4M9L1SKdFdK9y3",
  "key14": "3Jsw2wr8LNtYXti5Q6EvwWwDyC7hXpk1CLXjXQ1dK6VGnQWhwBDEziq66xTonL2rL3ohvB5YjB18fBDSzY4J7XDf",
  "key15": "4bcwwEG9GrB9DQ77GoLc5H6qmu5pV5ct99ADnzugqQAokDcPSAtu9kZfze186LYFrnvPjk8bpJ7cgP1PB4JA9sid",
  "key16": "5TBQWE5yXBp4N4rnd4mKNeSxaqWQMZb9VzNqHxueTh6d9epNKpNMKrvCMXx5XjLKYWU8QDWoL7cFB1KvnVCEmZBf",
  "key17": "4rZApZUGEaeGcFvoC2JfurfsqHVM8HzzojTHDJ4xYUEwox8crmp2k6Pf7ip7uZ2nvBDfziHq7S1T8LgxtJdAQftJ",
  "key18": "84UABFDZbYbPG8F4m16seaxmZj9ievpzBYGS82W1MjMw1iFWzkmuM5BCnrSg8HU9KbzfK6VSTNPLqutXQdiUi6c",
  "key19": "4Ctu7i5QworcrQBYzX8DpVtinJiY2canUxjqaeS2sbZcC8Dgr6mxGNEm9ZzvV5wGfPN3XGBQkfGo4dp2JBcoiFTV",
  "key20": "32enu1R9aiyjDhygH39gQsd875VuZK5sDbUWAw9n4a1wZX5EDtRGYpL8CSdF33Xfz1bie6aRGiNAyVTavJ179r6h",
  "key21": "67gfVyZwCeJxYR8SbeK71Swyc316yEbe9Xf2V6Nba7jAAiSj51tTGUdDzQDjtbPk4sMeAqQod5FXWXw3sdCQn1zE",
  "key22": "bj5wyArqSXWzLzQLSJriRD8MSMsvGtunrwshSYCn2iVdynzWaXVg7SobyVZUpgQpwvUdtA4vMaA6iA6Q3BYcMXp",
  "key23": "25A2g5KReeHcm3bm3QnLuwoDxPkvQWDv43XnFCXxirXC3JBmG86knSAFrfZ8vgyjb39MvtFVhoktT7GZDfBNT6sP",
  "key24": "PddjtxVpMg6Ci26k88QhjHR9ZFHgrtgnbchYYmVBSgvEhr4e6yngFZ3o6c8giVz4zL8B88wzDzdmkjikAxfSFo3",
  "key25": "5Ev9P9qN7qVRBx6MkvmDdcheysHeuWNm9hpFfmSRdqmxZBzfEGZETEQciUCsoRE6cFqKSYcbC6LLfFfyex78CFy1",
  "key26": "2EWaLVmrb8cifq9kvyhQCWYc4nUj8ncehDv8kMNxSfT2tXUob6Z3tKGuxaMEZtVDuNvUwPuGk4o9fxgti58C8sVa",
  "key27": "519T8DbRoVU47iT8umjReUBogjoWtn6cAwiL2hcEAZvpPXVodBryZd1gAzkMJ88Ep5ft1gEnwaxLKWLLDPefBXyA",
  "key28": "t1iJezWkPpmniB8tYLxntpjZ64E5DNc4YhaqkjX4Eq1kwRonMfRVFUyiuVPntBpNVizYtbhHDpACecQptaJAV67",
  "key29": "64q6acpAKZCqrCJ8Nt34yxzKokctvm6YzYhqVZJWSGMoDYfHYjkNynhdNtKvrpNiK2MK3CM4xnsmCkmgudUbqnwY",
  "key30": "53SKXN8koasie2QUJaDjV38RDsoqCzQ8tiexjPWBipNGin8xaaBPNPVFP8Y3nwVbAbfMZhD44Y7uAZbYdYX6za7J",
  "key31": "2VPkmYPGY9GchFSCdYJTiWJtQCGsLMLsdK5WE7gBh2KqtKcQPG3ierfsykrCXEW7FwFrkR1xH5AQLhkx3pDCfxDh",
  "key32": "Ho1U5CFmk7ps3Km3R4JaYHNcndFwbwtjwuaMvMjVV4cnTsicahoSZgYjRjubZRRMzDM3z9jiiUkcXKd77b4nGvZ",
  "key33": "1sPYetedUP9VegMz4phioDYG9yBaxtNju2Nr48tXdWftDWtvT42hEMsT63VVZpJBsj4XeewtKqTUhC516yMGdNc",
  "key34": "21fZP5j9Kimwwdubo5esx1KYRNYwtqnLtRxp22vXhiswascQBBXViAYXx6UK7JRbPGFY4kM5RDR4DJxP8F42ABAG",
  "key35": "5cZnuf4L3gTFQVLfUYDnVzH5QPTj1PKmoAXHL7jNUEYjGUBDfDf6noU39RBD86aitc3DM3n5Y4y8o1GceJGtZUEn",
  "key36": "5JGJUaXKJoRDjyBMCY4ptNEMfG7H7QWdzfYgvNoA91cCfU4aXGVRk2uYdMp3b2vcb5gagFagxJzAUUurxZnqgWPu",
  "key37": "3qG3j9WvND7Man2zHMzdGFR7H8iDLg3ozmAESXwF22eARQhicCCh3KmUgtUCpW81yJ5n5px8fpFPmLqGMNjY7Jg5",
  "key38": "2jTykFMmV8GRcMN4fp7rXSzjwWfzBrXmL1pyfmtUrZX8UvLERR8ksEzqyVy6i7JGHgmoVfRBayesJSgJggf4UoBd",
  "key39": "3RBXqntcAuvaUmbwXjC8w9iDnHTEvxz8i4YLMapSaC5WknRAKPbsARV3NpiGiHQZFWvNfkLGrj3KJM4zKPm8bTHQ",
  "key40": "23nc4M8D7gmVL6pWaWrgzuUJeBYMrpXDaVhBsioHGCQEYMe1XAFZ9qsn5Y4M4PQxbXdcTm1cjxrdg9uFjtpBCqRg",
  "key41": "3K2mDCaFqRzscvborFu5DmN7g9bAk9CNTWWyCquw5KrFKTfdTdvJu3wvb6fgM7FqjywrmpQzjm56XepEFY2qMG9U"
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
