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
    "5gyUVMV326V6uAX1PaxWf4dLbzxjLn4QKoFeqAEw83wNtR9k72DLh5ZAwjpjJa8T8Bqfbw4fn8t5JSQXmoWoADDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xoLsGqr1ftKqTMpmYCMfyz11Bq58wWt9CEcKUKNG42eRaJdDvpCVHj75wQJ3WKhz4hpqYKqXARBJKxJiigA11mM",
  "key1": "4vi7E47mdzz4hB28h3vDEo2kKDdHqJVSWJS7oCHdRnzvepewj2aNpQNCs8HYniNrr8oAxBe4u5BeZB48Af9EphkE",
  "key2": "2Y1cc7whhb3A4V4gHvndMAECpXqzyg3GJp8un87vHjitkDs6wTPk2RBU6N5RGA27FC7bANP6P3gPZEu946Zb4YGt",
  "key3": "Vo7csnsvp4xGKAKqGwo8iKrdkJ1smuLZCYG9Gq5o3yTnywFi6iNKsf98BeoexQCnq44tzBfGLom9HpmG3PFbpo3",
  "key4": "5sBUn6suTqanREyTg85dByXzjoMnh51ed5cqCHZGvqHZA6tX1okBume2fR8mTPxyMRfzfY9uh9tUZn1gexumdxuE",
  "key5": "3DPuHpKrQFXpN3pHHeu4UuBPL7o7TAWDTuM36bwM8QzBN6GEVzQ45FYxeePWuf7fXXJYa9KFXmXPXxYGWFuR7tEU",
  "key6": "qLqyw1RHtDm27dmM2rNZzhhDg47XyQ3M6gLwZEe8uYMK62nVXjTmryeeQgGou3buvADKvBZ9VMWALhgdTcUtm6c",
  "key7": "3kC9JVDAnD8LjGCnxbgLWPy53uWJcvfXBEyokA5Wf7zFyVNYm8ey5b84vtBo8dXraYePS2Q227dbV6ooUtaEHao6",
  "key8": "5Z5Wcya5bvJN2EYR5Wqh9zAqBkga7c22C8TpnbqaHdpUuzJEiBhBbEpTY69C4tcQk4GwVKGAvywJioAeTGp9pK13",
  "key9": "3WRPmndyVEWSFmXnntVm3UBn5hUmFbK2wac9CAME9UnAFa3qX7f8FEiNw1m1XDGwvqyK1RuaJmtaQkBtiMQnNBxC",
  "key10": "93h4r3dzjzTKqaWyDijtK4HcrBbkP3LgVnzVsbDLc1YE1xHEzH8Lxk6uUp8JGv3iFBiVPpafUVxf7p1npodX8WX",
  "key11": "vvxnUURpnAK3bbv1Xf1bnfxKeugctDvsDT5ZZD8mh2UoPw8H7SpGEEnJstiByDZScei6uLXNkaJyVsGw4Xc3yGN",
  "key12": "2SPoHgvAmw31vjAfG886PXUiFSUNr8ksn8emaRn4NiAkGv9qCpxfLCUbAypvyVhiPHe3iWuRzFocfRgcE3jjn2i1",
  "key13": "JKJcxpvxr2nRkSkTGRtpbL6PsSyx9wUGEWjiP6ptbSbjUh5sZRFWCNgo2UaKrAnyj1hCPFHxwNv3gk9k6kYSRPr",
  "key14": "2jznjiyopswHiFDsRwm4KhMZSRYSr78P7ghBCKXSEtMGTyBSbwBMizjvkt9zAo5vVBqz853AsKtinmBohhDnwjzy",
  "key15": "5v4KJPK6oUy2YCd1AsueCwPS6mmkgiVDqk4vATKkTqEUXcdjD4Rb6Tsv2PwUJ5cpifzHdtgh7SUr1dtKMnGHfvdn",
  "key16": "ht1DKWVRQan9jd16FCHMyXcTXZnqZVzSQ5bLGspriXdp7hvEbrFd7hujQkdWpZFTh6HLLwkKAijHtQenxmDSzKM",
  "key17": "5mU6suAWk68M5twWuFPNVU4FFdXN62ummQpJrnWVJaSYyog8731sVUMNU2QrLz9c99uyQd43paPaEBz3RYe3aCMH",
  "key18": "2NHuBrBmGCD1vZBEJyWW6P5NoDGJvSvpdstaNN2XwzSwFWUhFJv9RuE5dqFUGNW6f7jv4X4nAMvj7jHShifcMwC8",
  "key19": "3YsfUSiopX9cbhe7q6UNWgcZCuvkWLERCwd1SkcaMVt3VHpHEKHcJd7hprGiYKNjyGxtaU1py2HS3YMkbnsvDubS",
  "key20": "5ZChDK8qmYcRoGMsQMQA4HtUavKiPngqH6QVdrdUMpnoEPDg5nCM9VxfsqMes7nJcQHCYodgBK4bxStKwVsFX77P",
  "key21": "4EpmCkYPgA2NJ43cqDeccZyeMQsRd3sY3H9t8A8dLPfS19gkF1MXZgydVXp67VZ5NA4tpuxNaR2yAHMo7wm1nMai",
  "key22": "4TxbVdJRqiUiea6Wu834WTUpAf283JhRBY7jxjayjHdQx4uq3ArYDBeZVM4S6oPF72miVFo3SEwCsBDTDipHt9oC",
  "key23": "5E4Bo9MqAN93xik7oHMYq4jLHDoTVQWcYEk4YiN7MryqPtMfQrEwLFFsAppWuxcQQY4bpWZeF8PWDb8w6BMTztHA",
  "key24": "Wgh1un8rDnPAYj9LkeAZg2WNFmjR3wHFgezWjkTeEaqXsDyftgiwurWYHBGsEE52fzob9WjB5tvCQhRAvRBfVRt",
  "key25": "2EZoRXGV45KJQd52bRzLG4RNWtu3o8W5H95XxnnDmM1pgmnvZ3VKzJa6V75Eeo5db23gw5is8sq3HtLfL8NGExe6",
  "key26": "4a1b9NqpHCCTmWk1nhnNTkM1cgk8QhrfAzNfzMB7sbj1prSWGohjbcWSCdhSbbZBzBBrsEtbyzooTbthhbntxVE7"
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
