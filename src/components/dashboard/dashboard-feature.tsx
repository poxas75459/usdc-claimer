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
    "2GwXipwqnVBxupcjWk1mjY3pbizJNCJnav6VNBpvkewJMAC9EdquCCqiUWkP2FMq1k2uBnJu3sfLjukqJatT5YxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjLk2wBeJsCYmkJ1bh4d8SPiCyQZHbY5aWGidn7bwEQqUmYnK6bEuQbfDN7N3i8vryyai5dnXVjWTDAn6eFKjwB",
  "key1": "5fncmWKxeAY1rsrYKvhvMWAtqjBw5xkvrKWvzPoLqTTRxRvg51cmBq32or9k6BhKdeks1mwxiEKRfCCKrmaRgvHw",
  "key2": "hTQ4uDjru9PbRATqsoCqg4sUTQbzJUKbdTFspUZSHQL9UemA6Kxgym6XzAqn5khrY6EUU3irndFd9VC5juzTosc",
  "key3": "3DKP1R7Rqi6u5JdfX57WkeXpa7Bv5py1f5zkn7PkbYkEfFZAeLp6WRMre3KLB1uup6ebPxfNJZTB3mJ7jrZ6csZM",
  "key4": "3RNHVd6uZU4bRKzWsyB1Fx8rQPr2uSiesgnoJ42aNXXsGVFCF7rMwUsfXbEqTQmkVXkZgGN8GFQjqxoS2aiHFLPE",
  "key5": "5CQXgyE3b28TSzwQKUYq3bEuFcg6JVmjHdYzY5Gcw6ZQATWfXj72kMivS9v3zsxEyvMXkitXZWCYzjEyRNYbnMcT",
  "key6": "3RR49WzJr9dge37rM8yeghrkr3iyXDGoR76HXfwhsJ4b3b5oXXPFHajJS5FkAAj9BUQN1qwXR87ovbTURhAfTPo",
  "key7": "2sW2f2dB4pCzEvtVeAZKbdXEDQE3mQEoH6ASRRjohtSW4BNPdWaaAofXZCMTW1k4GY8URKvSVRpMdugzmkXyBsPd",
  "key8": "31t6kpXNLiXhSf12rdMLKBavDqNCJ9C5TiGvqVWZ2sCY57r4orbR651S5ngBSDuLH1c5BAqC67nSksQUQ9iZZ6B3",
  "key9": "3jPMTt7nS4EbNVB4vUaAYTiXzpmgyqTfPdgeBy9Fzy3W9M1grmhoLw7P6Bs9mx4kv49ECfH77Vuxte3FSiz1f4Ss",
  "key10": "4HjAs17TABxzKePtD91rdpBoFFP3fVP2Gx7EcfcRXzR9CexJiA3uFuyK8xhbz3Ctjo2CQov5zmw5PQ2fagXHGRJb",
  "key11": "3Z2nYRZ8E4kkaaVPTgEuzJCd8s7gv16uAYHEhAs4FDh2S6Xan1xdo8pUE3GNJW4Y14xCkFgoMvaqS6ep6SWfkdmx",
  "key12": "37nhqXRfhtxBpzp5FYEcUQ4LF9Q52tHYgpvsnCusJ2p2BxzJGM5vfYff3ov73syWnYDdVBhnFGWGdYRAMGrv2iLd",
  "key13": "3kGE83FN4tBudaWAtBjp2wobctG6yfYi4RbCLhzaevDfHSeoZ32dgphhuQSJcP21iMn9AyJYwvTAJFZVNhMqC3Se",
  "key14": "3vYBRj1jmmxf9Tk222jED37VfdX4zx6cgtrqs8Mug8kGUFm3g9uGVa5DHDhnMYByF7CWoudAKp69p4BsuU7TC9oi",
  "key15": "5Tanj6RtG1wumAYEyBJZZbxZkddbMza3wYuz4NYuUD7Qt7SYdZo5SmkX8rRJz6Q8vwSgkSfzigFuQeRPf9oNMqQX",
  "key16": "5XGUCYD5ArhLZ4eHcWgfc75DTssj7KpxYvvXeAamwCK2tRg9TmaGpJHJTEo4XSFyqBzx7mdgdz9aBLn6wa8geQuq",
  "key17": "39vrXXJmBYmhdsgH2e3dscX4ERsKcwdrZBxP5q4AmpXZvSjXjoM8hf9wiL3qsFz3Y3bnbqeAECgnBuiEo2nvSGR7",
  "key18": "2zCmj8ktrWtWVHkAKGiK8RyEhzG7bU9mUrR3u1GVnwuRrDAKorGtZqvuAE3C8MhwiDFD3PU2fB678pLMgkfs8HQQ",
  "key19": "3Kie6c6t6maa4JwuZP3vCv9jHEjkLdDRrvF8eqRekrBoLjXHo64FseQprmEkkMPHS1tFiqF7aCk64eH44Dkpoq1S",
  "key20": "4fiJDH7JMZPjdbo3ANG4GYGktaXjRA67bEHMucGnDtavUPNzyPTknvLV6WtmDdDqanjcB5qEssjLFmPk2V6VhENz",
  "key21": "2swdYwDrfheMiWyJRYUAUfuSo6DbahGL2rbartcAV7CQguqmBmTVtr7MhLr5iu3AwqTSn4NSeeWdM9sR3PJaJB5m",
  "key22": "4QrMoHPujg3KnmiAwgtWGo1aSv8M11KSeFFvyD4bX175M717o8FxjZXDFhC7dH6s9Unw1CHWKskuvg2k5offCcWB",
  "key23": "4ZcYcnUwMevbLYqrSMXosgTrK1jefUKjVnU5MweDZS4MAkxpQW4Ks3BnEC3G3DNmSsBfnz92sbsJDsgyLx3tjRmb",
  "key24": "46QYL7KHm4WJVLE8tRBSygCJUtK9fKHNPjdDYySG5ACnz8SddsKxD1Kk4jy3QZoZWnDEbt1RrJq59HLe7LYG11BS",
  "key25": "3WiRZ395z1V18fSUPLaLzKQgshFzGjA94wCcTpfRA9vfavKHxfynqYNB3qTagetjKnDkMbwC9RB4ZCyZGPrFTte9",
  "key26": "2HZdqbpCkG6QuYyAZrG6m6dMQp5SqBbCWSMu3vp8QB2LgYMXzv2PF3zrNWiuBBVmaQx1QduAHZ63iyGNqYn2NdUP",
  "key27": "2WRaRsTFx9uhcRgUhQti2rvF6LFGbN6nnFHA4b8DyVgRFDM5LLiVAJei2TnGRHi32ekz8dqXt4b8VLcsq3gNoYG7",
  "key28": "3UKPnLB2kvBA7EkcV1BqFKakdMA3N9yaAKXN6jfYSDp8tvP9LaJbCb29Gk2e8HJXETXGbcntZ7sRMcDJLqAGJeU8",
  "key29": "3mWSpaTgD9zuHnCqj4EwRVkmA8YMDZRHEuwRSDqovDwcDM1rC4sJVjZo1mFsPMgJuBcfuG4n1tJy2eomrVHBG5QU",
  "key30": "63R7r8AGGSHzoLDAhUgmW3NiwYVaojZKXMRboWBn1ayGUmm9hRfeZwhp3yEeajfYTE8eBdTrqyNVyRfb3uvWzzYC",
  "key31": "2yuUW8rYzeQXNUzxqDWP81NYq4tYQzDaLqw4qNR1T9UhwqoAZCozoQqYV6n1ufTvPS35sK8HFeRbgeR62kQ7H1gb",
  "key32": "4RHfaV8EZrNrPx4YKt7cYC6Aw1cwiQ2VUTEhij46KBmZdhH3fF25MWKf6w1uG2LEKtG1un78KFTUTujj2yeAGBkN",
  "key33": "52UFxN7u4XSneNS16e5gQXgw7FnxXHBvmoboMbmRCw5TyrYiJLHwUfvYtpYgqqMGoC6ZxXDgiiWVFCnk1aXkxGe6",
  "key34": "3Hf82FdAJ4sdnbC1yu7gMYVzC9tNc6QmsWHGdhLJ2d8j3ciuUAYZxCDKH5qJLbqzNWBXmBcdEP34LnWJsuT4seKW",
  "key35": "39FcDUxAcNCazpAPaA7btrZPXskgDCVpdTMHdQHovTRaKH7YouQ5bLNDSR5grMpRmx3u7QbCSncwxMoUTGpQiN7r",
  "key36": "FXXJPvd5th9StTf9adxNu7EozBCwJDkpQSXjVFz5dKdWbvbbq82yRswkUhr7SCNZEBeSRpfnnP9kp9HR4Y1W191",
  "key37": "63X8nATC51BGaaB7Xm9GpYJt8p5zhtoko8niza8saWtk37RujD6jABAePuviZWu3uwv3L3FfKhmtczseB2m9LdBz",
  "key38": "5VjPrkSXLBkZCDJd3kWVdNr53KDbBFyUGVTeHdkcty1K12m82cJFw6JZtiNXamwgtRUnBc6k1WTJySrnLqQZeSox",
  "key39": "2JkGeEpR8iRFdzqvZcLryRntLEbswQWZtc1cw5MqvbueUtozUJBvHMrnD3QFBbMira2qbc2fgSYjkxFaGvqeZ9xu",
  "key40": "2R3QRusmYBxRkpugKyriJMtdDti3geMRoG1nDAy1V1yVdP6FkZ71C5nc8oaDgjXBDCeQfcoSQVDdjb6PazAkkNcT",
  "key41": "4NgZvRW3pF6233HccorrZH2bra2FG9acj9BFrLAgGPweSVimLSAKEGE7F4JykpKs5T38LB4j1XBtkybQCQ4oiv9Y",
  "key42": "4XzTBkGkKTdeqMpuJVJkijHABd8xeFyqd7RBzxw1veq6BdYM3eVYiQHuxRy6aRwYht8c7qZVCXofvr3BrcPoQUJc",
  "key43": "3u1V5XhpUxm5XxkbX4sDVshYXVoV9ykmjJn2ACBZbhUx5yA3eh9Bm34VNQ9SCGQ1i3s1bvZJiM3UaVozubyJytJj",
  "key44": "4dyWKS2SAK7oGsgPKVMNap2ntzGss2f1buJX5QkTwv8FA129ZUu3AVZRB8QjpKHJHzjdD2hWwTTUAMSxzZXo4aAk"
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
