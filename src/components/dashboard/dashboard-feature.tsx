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
    "2hNKYzJxERK7rgiUF9KybW5n8nM6uSBupcmMiCiwtE3x1PivEsz4p4hVuUYJuex8usJcm5fQzUnRpabN1NMup7ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43EQtnfRoyvsxXt6AmBVvNwmwUKmydw9MBg7zqhTTNVgt5UfBkXBKSEeq1La1v5PUhtsaFUvuBoe4phkZykUVkyv",
  "key1": "4PzPYjgHUwmJW1Dxvnnkbn5WMvMLbzCq2Yb96CiXB1fsCQS3rhLEBMfHp1j7D1ESwXZLmcU48ymphpXhr3A4sgeR",
  "key2": "4yxtdanb1G79p57RKokeu9kXdck9mZ37Y9A9oZmWEutHEjweMf6fwEZJhBjqPoRpBrHpSuXi5Rdg4e5XF3SdA1r8",
  "key3": "j3sFVjRTjmvX6kawhiYrBrodqPiZQP2b2MiaP4F58R5kG1ouMJ4gSCbxhJvwNPrSYKTcxuxcbfkzJDpUg5FF4zn",
  "key4": "5voRWZHQcwh7zrVjZKhAd7x6S4FawyKmrT1M9AJoDbzNbcqmxrvpuj7TUpTtWix94ZjjZ9bW2rjtWsHbmi3xE4oA",
  "key5": "2AGBX3G1CAhPp2RxgdpsPbWa6Uz33ZYmRaVyHquhx7DBNZuVf4e2XRETtTPGDpDM24C6bWz7cf8JQRLbshHCjdpJ",
  "key6": "2cy7EZA7ibC3HoPfBwUPoRfb93cfzFC6AW89TZjGxEM9KgZurRoVNAZtNv185GXVfAWdNfJo4ucZbY8xFFYDwfbw",
  "key7": "EBfs3cEqbyCwaVFgsYRmgqgpU4izSHLnPA16sknk65jvLLXtGFdJ12RJsoQSWyB9ndHXWwVbKTbvM4hm1MhmCWz",
  "key8": "THqE72kpZfTjLnRxWtYoyzcK9JoKDRjASjWFrW88BLzkUMXEXzHe6P1wJXVoVmSyXbjRs2ishC3wGqMDUVn7yGW",
  "key9": "4ambf86udUZnmp73rt3TmLpAmUcZ49hND91uL9DiE3EeNozNNWXvmcMWuS1ooMnXMqbrMTZBrLiJQmQEvK75iFTo",
  "key10": "o2Cq5qmssBUGjsrjFdJ7zQiZxarh9jeT9eewr1ELw2Wn3HqKjcXeYUSSbTa5YLw1vkE41t6FNww2po4oMhXA7PV",
  "key11": "H3oAvJL2WGk3j5Nm6V3vr13SGUhYYAcKEeeVQZUWN1VKXZtqpDgVBcGomNNCnQZMUTPxADCaJxdXKwL4yBDs15S",
  "key12": "2thH8wNGRP8yf588GzF3v6bukaBwVTsyML8VcTkwp9fAtMALaXNSo7qbdkQFpdV1s4HxbLPASjuy1GzcqfDuqWSQ",
  "key13": "4k8ygG5ppUcgedNPJJRTRYqeR3uxf8p5HiDYS1UDMT8uPyrxtZCfbJBPpZZ2zGB8KJh3jY6fdFGRGb49yjyT1faD",
  "key14": "2muwgfB8wjMFHCPMYa3rPPccsYLoZiKe4rzD8AZ6G869gaSEyxq4W9P2Y8k6ngVuCCyfvH4u6uW2KjyBiCe16vqy",
  "key15": "5FUWGvegPpPBBeZqePBK3yeCkFx3b5DDEnbaT8KcKDVwAcUZqxSiS4npbhkka6terJrBjiyVDhoae6E7jyTnrikE",
  "key16": "5zkxZkPHM3cgA8sRMpKuW7Xmu8bsEsuj6GT9L1rDuiHHCLEucneECjWxy8o8ughvknRXxr3KrsFdsrhpFbd4GtuG",
  "key17": "3uTx3LxeVgvdoBYCjpJnWEhiwZpYsPgUaYWAinAJXdCwTg8YQhgQRtxa4d19GzmQ1b5aqmXec52eLu8fCmHtgEUG",
  "key18": "31JfL1mhuE3aMSxWa27VqG55tAQANWWqbzpZRamCFxQmY2PvjCiG2hfpLG7vf8uGei8yKP91ymUwZ9rEseHFKoKk",
  "key19": "XBEMoqazziddXaQv9pJjZ51po1tX1uTZRs9DhN5ZtyDzV4yrBNvHJdV29wgNrwz5BtBFLH79wn9un7ZpcVufv4m",
  "key20": "2kVEvPpcs5zmmCaxDLEwpkmzUG1uymKZ3oCeryWnGnuKgH4tQsAEM29SqSmMiEXpKisEh8C5kR82Bsz6JVRcQFjd",
  "key21": "5q4Y4rZWoYdZGfUaW2r6ncLfcvtLPywna2x2U9UxMK6bSY95VgroYBwhoWLDCJXgbhAhHY2ciA2bfTuPY4Q7uHGa",
  "key22": "ocnbmjmoy6T9bGCuEtbbcs7U7UVME7RhqV7f67fCWr58wf3Rw3mr7bahv31tQFtkmcWksWtZd8H4ySxABnRm6kk",
  "key23": "51PwQsU9E2KGwCEC67J7QNKaCtjQqvXUMoc6QQtxhbg5vtPZL1Xcj8rrcSZ2vxH9Hhu2154BXTbQk4WeKAkMcuhf",
  "key24": "KJzVkgVnsrjQ7wEom8pWoNACBKZFugm4CRMpGKtXF4kr6AYoR66YVjwKrJG6aX7LAPeiqivGAdxMda2foRR3QDe",
  "key25": "4hZucoaBEEASBNZXeEGKvLTQhkt284Gf7xdhurJteHezzk2uXbiPP64PSG8rDvNqooe8mgpVa6DvYH6VLEqJB3bL",
  "key26": "4G8LAWwRptyp1qT6sKD3PYZovo24XtWACzRoq3A6UynGwPQdu1izAF9AkJQdg4gCAu3FueLGjkgBvgntM2Upy9wF",
  "key27": "WLfvLqFhNf8XGN6rNGnFBkk6Ji2C23xyyuf26HfEAXpNf9YF2sn7sYtoEBHzPmqPiPvLF5B5uxc3tfq2tsCWipx",
  "key28": "45FfLhYP4G1ggGmesorTTs1qyEdBUTNgAC9zoutDgGyqkC1M1u5SBqVmAyfiP9oqcLroCjuvGK5WjihBC8XGwpFP",
  "key29": "4T3Nkpa9KAW6W2FR1jK96LW1vyWZNPZ6f1GMfN3vauL2g76QP2DUuaUwFLuo4ScuMwuponHVYfh5hJA55swP3Zsi",
  "key30": "3Q1geQ4prDESeoH4bqe7vKF51vpPCZpTkk2L39W3k13W27iesKTv4vhoeHpScezdN44GkhtvKeYH9NkSWvvLnqSk",
  "key31": "3dLi887yPXBnm8yqSWoCgx5sUNMZjWEWvhAWe73mxx4wjg5uY3SVux8kCpFN3ThGHpmQKURef5JG7KxKtJ2CFVXZ",
  "key32": "2fnroSUpmhF5qTi17F73spXNgjAGqf4LTgzcLZSxBi9vWR6xgKEgVDF9VVa8koNhJTCzWWLhg943d3ZFdMdZBTm7",
  "key33": "2tm82Tk7JMUjLRX7fmQ6RW7TTdHU8Jcw33hHU7Mgjmz7GkMWCyAf2RLzq6weTc2LtqJ4UBe2Ws2yD9PPkaeJrA4t",
  "key34": "44VMogQuTvWFBxSbw7PiUSpSFh2eL6zBHEsXhZ12D5UtswH9FxJukNgfDVKNVhN4yur334pbaB6se2PwxSc1QwD2"
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
