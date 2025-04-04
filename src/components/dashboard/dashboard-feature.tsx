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
    "47wCjnAhEhTwM9AbYkkVAqFpeff57aCEMeXdV6CzECSnC9u5yc8Yr12X4rr9vLXtFpvvroJNBQtxFAnEditYDZSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GwPiZMPXnVHqD6AUbGhmBhS3Ak9dsc5We4mD75ZZZZhLQmPQNuieVtzjmj2jr9udYy5ySuQMDZgGaTWx3J8PfzR",
  "key1": "2FbhEfxGeyEsrNDASigkaS7S1M7fnWM1dVY2Yqeyi35T7Njx6Acfq7RDEG7YFWWaRG5d7QzNQ5sbRAFQoS8QLH1c",
  "key2": "4rEZDAXpgFxTaLCisKw8AgDhKzmTZyny4CbZdM8MpSwV6ddGgAsMkxsoUvpztuQtAZRcmQpwZ9nQd2QeWk5yzXjh",
  "key3": "3cX71ByPHq6XcgGvSnHp6rcpXNuATNj5yHZg5eUT1YzfxUk6b29oV4oiTqhHsHAgVLdEAzgbyDHNsWtm6cLHVaws",
  "key4": "5CYhmjeFxnWzLj4wVM7FqL3kB9Yuw1iunhTYZKLzktkWRHRvwwDpghB8KobH2gNX1zYrMpzgHPZ91Ui2ruzDjHha",
  "key5": "5SjxG64E8tZ7Gp4b6bBwNu7u5fKTw3vnoPerUQSpokL6TmxjUQkgsZLyaup3oWJJqdx39owinyLHxVooYAUcbQ24",
  "key6": "33cqVx2o4RH2r44pULGgmtcQbCESTbA8TNH5vgDj3hdzWefJTwd5Qr9Mkccc2kfmzki2GpaKfsyTjEiJKAEgg2re",
  "key7": "4CEi2yoTy5DN7YhvuF6dUPHtYaYvvfhSegREdbKUazkWtNnWgyRq3a7Pw6RpWrnvmaGcNQzkTqdvUdBJvdSG54eB",
  "key8": "HWDE4ATuQxLbbLb3kRGCKhU1P8Svg3E15JjagF8A5BtSpvs5nLPzqnKSrHSynNKQSmjHfRvD4G8hPBEhVXgPoy1",
  "key9": "3Lt1f5r4CjZdhYTZAHo66B5xEdLuNUGov1KyyqxoPSfRzwwKgiwCnyMEB1FAEULah3RvaiRoHjtv5DSFTqef5eJK",
  "key10": "3NzamR9dea8jqQVi2AisYPUbFTSe7fBu9bazHNbjaCp3WSQCeBHTFvFnCGwdGPk8hWdCKpg2yYkES5gRpC6fS2X4",
  "key11": "4yKsRtypJV5E9vewDuNS494nBodd5QELD8qwSqCAL5ugB6225feRKt43QPX6unsnXv1aJ43Y2JW8QvUspu5Qm8W2",
  "key12": "3WGYqxnhuBr1cgFhjNHBwH395VZbKuSubSReSnFLVxgvrhaYfuo62R4S2KaXVDruTBj1nTZgEvxxtrq19S764jjm",
  "key13": "4f3XrAgSY44oRLWYcZqXyZ18pSpdKpP2qWRJ2UWPnZ9nCHT3uLCpKFHtLGKhXjyAy1HwkDum7vosGMfBHcvQ7MzG",
  "key14": "37ngFE2YAFwnaYtqkgUCbmWpgAvpxpVszaud2UUetthsjZ4FxQqBNrY33pqkqJS6HK7KgsfjgzTBiP1wed1G4D2f",
  "key15": "4cqPLAXm2rVSnGwRjRjppoLAo4GG74p3wBGfFYNtyZX1vr6uhYZfMVBbFcdpzupL5EWmWanifYEQcGT5QqJ9WWkR",
  "key16": "46MhUpYqvFb3gkAwvfVv3axBxryWMcW7b1nk5izhxvRJkc4Xq5Q4uVSDNttH3245XgzuMaXcVn2geNk1yae52pPo",
  "key17": "JYj5WsXnKNCnEk4D3feNnjbEwAK7J8BVu2wSTUvmsxQA7bzcNQzcoEFyH6cCu5BjimUzzHwtUWhdphnoCHJhhnZ",
  "key18": "3SoqdBa13Q9EmdHMkhU4Kp4yxLSDNe5WRxhx966eztUJ3RkNN2N5EhMZpdPPM1qL6sQHm7BwvWShytFsDRFCNK5m",
  "key19": "3qzXw7HBRxWnqHVrCabpZBYMkcMVRNydgYbsvkuRR1TrqFG7aiUrRFtg3rhXAKxR7ZvCVJLH7E8eLRC4yKhiFXM2",
  "key20": "5cTHCnW8uyhG3VzuxyuJ7h4voeoF4DTNQHfQH6nHgm8B5x43TVmEh7WMKTXtTCkME9G2jxQmpcijz3qJimB18ktM",
  "key21": "4WmYd8wjh1YSR6pB7jC3WEpPtHX7bBvngzaQZ1nCtAVPMKAHDs4j8bLN2ixgegvcKREy52BMmXiMa9xEH42dkxeb",
  "key22": "2z6SWMBKGi3T3B4ZCa8H38Gkz9NxskgNYFUySZNWnqXcGa99Md69r8QokpCxeRrMvUdCQhDVCbk9vsvKfqGX1UUB",
  "key23": "5ygadKgNoj2DAf2q6nu96MRWnSTcEpJSqdTuZYvFdnUShTz6HmjgVB3nYEfeS7ALHuYLHYbDryBZZhXmiAyN1sbD",
  "key24": "4uGTHQMUgNg16KDvuSWMzN5AGcfGL3KNiJhkcs5zxbCZA8BgUQ9k7MAge7BP4JFpha5GrEptSNknzV3QUTe32vXh",
  "key25": "4wGjGE2iCGMsjQghbeC65Wwi6iJEUXjeyaG9XoL9QnwuEaJor8PXtpxfeWCZdLxNDRsUuzrUPgvXsjYjrXjfsj6c",
  "key26": "4e2dYVU2BEf3jaKKawCnt2netbaPFvwNw7jW9qxoHEtET77fyFg27hFmdRXEHXL2S1iQvYXzRF1A9EFzSY9HFqiL",
  "key27": "3j5dwFBydygmSB3z2pEotGfSCpkPPwSgmXamg55nVVFXXqKZpZXiZZDtd7b9aGANSQk3nKBzeoKL6riC4vEbGxzo",
  "key28": "2tB1UJNhSqBHst18ewb4xnmTdupqeBU7uKKmsCx7TF6Urmiwf4ci6wbW9gKqhBSfgDNCZtTsqSpMa7HV35wRfymi"
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
