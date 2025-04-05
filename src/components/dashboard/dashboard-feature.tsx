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
    "33EoUbgJdJXNmnUay3rqe3GT71mD5MzGPwxHQ3wc7Ez9NdU74NeeZbbUq4YbrYqLnpNFojmr9QsF3HSiaNNtuLeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33HbR7oGpYzJrybGjaS1JQegKB5NEtSb7mhwf7kPCb47U1wWfF9XaHp65XYMP1NciHKJZza74HvNWG4AMheaxkLg",
  "key1": "znBdqrJLptLkZmYRHjmNVsZ3vevNJSgzq3UmUWLUTXAtn84ZwW2xnmc4iUszpfiPzjSGK2F2nTsELc1cwq1z38g",
  "key2": "XNu87TpzuL5LGTSm5PwZGoyLSn9oCTLpnuDWknMQkYRaQxbY8CHw5vLi2XN2sUhKf2jW5dF9HgyUuz8dsdfVX5C",
  "key3": "4bZXJ1kFJyZ7ttmPKPJySJEV168zi9VqPo7Hypd1hoqHpDkqC4pD9Q6z44TCV1ubrUBqF95WEnMmRjcUyGs1i2iE",
  "key4": "5LB5k5sTaqYu9mEL6iqE8vEpYwdia1X3N9snpEpKkB4WCp5nAd7kRHH49Mj2DhZShKa755kMJkSSb195pfWQvrrX",
  "key5": "2juh7UN9SLdNQPuquct5jaHuRpukuhKb5yA7YnfafYDuax523uFqdNk7DoeN8BpsHcQGEMFHakAvZjSqQ8e3GjnW",
  "key6": "5NBbmpkrjJBz1yF3uevtDtyE81AGFnP2HRgrFzXUVQaPp2vKS1EMpZTzZAiTeuMXpNVjyGbLfMTAsjXdhoZvuBY2",
  "key7": "4NDVyU64u4KwVbPQvzvEqxan4SN3grhtpnNJ8YA1TUe9Z39Lzn5yxNq1wTJ3H4J5ZaxijakwypW7eMh9qm3Zaz2W",
  "key8": "4aPYNmL7XgPV9ug2eDvMjee3kAHw4Bfxm4FgzDQvRQa59nRwS1k3iciisQHaqCgMBeiqbLM7nB2DdXUSuQ6eMKoQ",
  "key9": "3WFwpBea32jbhAvyCUZaRZYfVEBYauJrNSjybU1vcULxA8eh5KTHFmLLPr3azYRM3mT9g4DG39YfjZqcN5478bDe",
  "key10": "3yUeRcMjXaBHkTdrMdCpQ1624WkWsTqJLbbfPq23LncfCCA6R46SBhe5MVUw1Kac99poaqLsg89AFPspR8HXgPTj",
  "key11": "419LFE26uEZAWnomnr6Tv8LxBw3qYH1hvW7uWAksnUA2byJjTB9HaSjDrGT31uRhqUaFm5WP6o4QLRRmCPdEiBhs",
  "key12": "5bV3DHdD2KDgf4jYLMBcEJNCoJXBxxP82PyVnrkR5YiybDKznD2ofvR4ETC14c7LMnHotcc46xgpxbyxJCn99L1K",
  "key13": "LFjd8EZ7gTrfUNtjK28zccsF65m7npPsRdDSbPQ7kUieB98pa8Q5LQA8cxu836a1vjTapC1YYjoWeLvAfwJBgJ5",
  "key14": "2j3HXM1aVYUzN6B6mKVY7y7yCZCA3jYB6BcVv3UUMycyKioze23ugRrAjN8XC4mpzdbxr1zHY5nbpDyi8WEUwbru",
  "key15": "5FUtaRMVTDYBxByMFL71KhDKWY4ixkdn1XgPhFj92jBWXLzSqyPHDcrYWaurfJqFFA5EvxMMTRCxuPSKuqwaGi5e",
  "key16": "3zvvfbc5LjaEh6FUaCF25mtjLbm3YdHmyBiMGtsZVQRhyBKofFqKzPX6x7ScVMgESV2EdMG864rPshs6jyuooubC",
  "key17": "3LCk4vSTGkLQwVwe74rxaLDYcUnS4tLghgecQT5EAatSQSKow9JU9Zsu1MSneHE7NtgxhrCCDqSEccTApztNmEY4",
  "key18": "3jytdMTvgg5XbANL9CS7GeDQ5p47yM41rrQztNH2cLrtoPu77TshAmCjWpQ8c4fDqXH5NYUP51WSbm3CpxHuxnKo",
  "key19": "44HhCneE5HuYJ7jghjM1yVcQPm9JB4eHVfNKbJH1ED67WbWLDVSD6f9xkuKh64kem737ANRfZqfXP6tdLHxdHNaW",
  "key20": "5DjvMMsTAvTDSseMM7joviLsuRb5uV5PYHSYWcDW6WnUHfGop6EXmKrN5cfBkdm4UacKTZVDKCvghFmDz5JvqHoo",
  "key21": "2ZdZXnbS1p1uyXKnMiDiLYiWJXJ4DLzUJ2huV9gHXpnyLZjGTHfEzKKpeLE9qZKKMbkEREmh1rtrHbBJGa9bsVjr",
  "key22": "4efTfAsLxuKZpRXpDRPQQevaTM6cyEviJLSmMCSoyh9GTbPn5sqUysoowPmqqPia5R4ofaG6jF8tDgT4jfxmi3Qs",
  "key23": "38tNbveyhF5Y3mrY4qe5vMRfyQvjMgtiZMj9jmwgUvPveLnc9eG8Qyh29JcFJSu2iU3ym7iv7v1PvKHh8fNkjGc6",
  "key24": "4K7h8m3e3mjAkp2HE3ZdTYto4ZSfbNjCMKMVd24XnoYcL9bXhDM1jrvxBm1KgtFhpk6XyqSbxGYzH8RSYgPHzvVQ",
  "key25": "4LGc9HFXBCvuyMqsoXrCZnMTputemMwh4iEbj2TQ6guuAz7Cc5QpTkTTNBbya5p2uWvzm2poCcBMJWRUQLuBknyx",
  "key26": "2qmKHnDNrkmJMk68YVjMNXjxLWZySSx4JHDCAuY9UJLuPzSL4UraMQr5mt4iugJjaa8e6c9E1rLK62c5G6pYjLUX",
  "key27": "5QfSk1xydohqSZGHcafoCK1ptch3KtxsaDkpn9no7vbL2VBAyH11sFY5GDZxTyGqPsx1WYQ8np9e3F8Bii5rrvCB",
  "key28": "5nSysr3E97ERxpRs7wryhh2A4BrZCdigXgJwR6gyxtSDxFxpfJ4XWxqEhS152n8SxEqST92tA9vUYndoSFzS93nE",
  "key29": "55JyhSGHz8SCUboNyaxFBx2PubgxNAgFGaSAvXtJfgMfLydB6eJ4MVNCQKT2Sts6xoi2MTsY2BBXbhYnKeTj8CyG",
  "key30": "4nydY63tjNvZVLWZEJ9S1UvHc7n7z4phFmsqcex688DuXa7DF3pV66Fuhzu196kNMi3GaXYaoQJEAcby6Em7HHFw",
  "key31": "3SRC762ZGqrAnfZZjeb9AKNjbJ2WTftf9R3cDKa3BPgsvwNUCvveC51JND7GTEhvibEP5xLRkVX4znDRPYSYHaFB",
  "key32": "3XEttaJMcBtsmnGoSW9cLvpK28eaz6QfoaXxUfALZsbr18Bvs3spjyaHRTt3eQ6tnkcrFc2APcNBh3mzzyVqrjbf",
  "key33": "5odmjBBDnGBResfkA7TeCyAWwvbEMXBfMiZUs5xV1ybmmS8WxRsFMGtvEUrmRMFiyfFsVhzZUFBwUbxKMTAnPhF",
  "key34": "5sX1FwzCT2pqpdjmd6UnDKz176TvCkt7fJsmntbqUY5TvMcMevaGo3LjdkXAKqLNrsMJTk9PFkCBy5ajgDSa7RP8",
  "key35": "3GaZZjxCh5xd4gGAbKJc7CrEbTKL4ycezd3VZcwUdzuepWPV6Lm9QbbaJQXa2mJaSjFt8xhnnQf622mKKAq5u1Qe",
  "key36": "3Fo2spZNYRidHU4hBAv9HLVvhgfeUsqPWsjqcBMjGJcKknRoNCyiRs39XbAFMmdoBCAUp2BZXxqzo9ymyWMjkQZb",
  "key37": "2rtbjMNSeKNYvBMHenpnAkbim55NWUJB3QvNintX3VQzP4Z3RTFBoBoTdoqoZFoY3bp3c2BF3VViWarkt6Yj9K8t",
  "key38": "3qr8MR2zV1kQoUS6eWF5Ld7EDzWTaRs3K8SJoFB2MrFkaJV5kCaep2MMTZhnaezh9qn9DLbmj9CbEysVCroLUtUj"
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
