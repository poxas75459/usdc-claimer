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
    "3in5NBLob3xhqZDzbcyqW6EYmGuTYzTvspUq2dKxjT8o2eA7vc8zffCo44f4ofpar3StNtachrr3CRJaYU1whQ8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hcbwMSjkKxfwgkLSiYuvHhSiufHtQPaCvCKFS1UCoD8njs2Td9sd8mKJ7ST7DWE53NLygCR1tJGDx8fpStmjBJn",
  "key1": "3Ag6tWvRn8rd3ZY6MYhzR33C4rWqYwupJ6hmNQEPHEks7gSahTY4FLYnHyv67YNBqLszHEK39iME7hynXizZb2Px",
  "key2": "54YM7V3Hbt3PuFYyZ9GJESbLcFp22puq5VMxWFCC2Qv3P7kAX2ryQHuJMmnxnDWPEhTHLdGWJRA448mTR4sExGR1",
  "key3": "4uyMGpCtqLG3QvtD3MU9HiQNS4jwvuy4ggojoUf1nQ8Fz57AE2Kz9ybawa1N3zvxKChRBfuPbcxcn8BUhXwACmvC",
  "key4": "5PuSvuiq3w9KURoGw2BP19uLLMWteJjHVPoAA1znBEiyCBPnTY9Zz6tJ3TmWgXyN2qZMT8tAvwjmGihMSwerVGn1",
  "key5": "5aDamBiHZyGbaXoF9EVUB9Xx2z2ps2ZMGMyE7AFd3vpmbCeU5F3cE9XDYcyhp3ZYmmhRm7mdEM81dyH1uCx2u59Z",
  "key6": "3tQEhMm4uF9gmY4E8whmQ6sEhC3EaTE8t93h4vEQaTpdF911TSeHaRLHw9FHF113uGEsA4Cc8UsgWDr2Q9WnBeFp",
  "key7": "5A4dsJT3p6UX9JNdkNiQnEpXWuqdbAUSxyohxNCUG6MPKtfHoQp44r7kAnbrMYTxFyP1hAgVYMU9xSdKX4kp2KuW",
  "key8": "2Q7tkxfV6NHMCQAYeJCi7uyDdwj1AzPkcWerjxMhU7GJHgzEkP2C86ndDUBwn3c6AyZ555ThgPW6g7Vkk3xXQLRC",
  "key9": "29MMFb1HAGCxkN9PYf4QbTtyG7JuuKqCeeCyaAe2Jg823ADRwFxgcp6BbURKH8Si94CEPmWqGQjZ3NuC1gq8JkkB",
  "key10": "wQZHNWWSUGbrYj2kqd7Gb5LUJiF3nWx5FEmK5QmQJuSTxu2NjSCBWu8h6SkavZ7MVYa1eXtcHby4KWr33XoZZrW",
  "key11": "5U6x9c436QWPkBwKSvvPfZnNHxPuc9RGz7cPDEugYUWnsXk2YB3PbpoLzvt42fNuEhocZ9GcyL53uJYpDLyf94UH",
  "key12": "5vMXHrqRe5AxenukojU9LZT7uNj9P5p77AGkHGfwNurPYX6tVh2f7adUUSMp68u5z6C85fAV9PrjGV7wG4WNRaxM",
  "key13": "2uBVCK2uzP2HMtwTHv6r1jLPqFExdLJDaxCcuXuNVfXbwpXvkntaDKHccva8mqjnBoa2wwwHdd3Xy4xyHLdqQPGB",
  "key14": "5bxv3CPopXDmk2jHNXZixA85S3hJyFFY47GpSLJACDBxgu1bJDqS6EdDy38712HZhBrwy1PD4MQkRm1aJyhH2vfY",
  "key15": "3AnPe3wtfeKL3Cr7fg9gy7AYWz3HQ48kDyK4hnQ37D8CdEV7f7AhNnsfLkpLCozeDgvnSAMuX4bmVcborrYcPAso",
  "key16": "39GXAdc1xeKAgwZBUkokXyMar7r5Wf6n58AMFV2LMXEb53kWW7HMbZetduzxVN8T1J1MmTzxujqGgc6fZZDXUEH2",
  "key17": "4RpBnC8zomYUKuqP7YUuhuLwunyJqY5RTmkPQFFcsH4Ze1r5EzXf1Es292idDU9vQZU8dtugBWBQRfs7ADQw4m4G",
  "key18": "2wG1jf3pCQRaLipUyVPeBWrzpYar3Bw9cbMSLavBrosjX82vTbKbJvknenuMaWwcsbAKPqTgDcz9jjSwstMzS4za",
  "key19": "2EfdJgaimiV9jmPoxVYf7yCrx3dZ6a3EvVHTVX9J9ThqHmoJMDyJ9RhbWPghk65xA2XCViULwxu1tvFTMP6pE4UD",
  "key20": "4XBkNkxxJ1MtxE3agVgH6mvtnLZNLfEJKuRnxUha7tSYSjHA5dsA8AfXoXbE84kBV7yfHH3n8bTm7Up696J7CpN3",
  "key21": "4ezunNno5JH56vJNBrUWg88Sc5CMhvRSG8EuSSa4GGGkfJwYJVpZCTDKFQky9HoAaaQB1XsVZw9aMcN5BXFwjYmK",
  "key22": "3rkhNdoGYVhjeeuHucbiP6FswzTVDktfFv7YhSJNc5gC3UTCkWhE8kwTqKU6CRGZqEUtxmWSoVEaP2y3aCE7bpSJ",
  "key23": "57b8GhWPPtRi2bE81S4J5Hd3xhkj3qMUvUehrdRgGmx9e9L8WasQeuNDhahrjMbgnB5HQinQhj8xyx4D2pTXmjk7",
  "key24": "41XRJQxZiQ23ULZhUBQvDeFfBpF71uT4ugUopBnf1s4QvLh4S7G5AixfZDmuKcs8GMi44BK8jufrpKSCkzAmuCA3",
  "key25": "4yR3pumUdibckhJUHSHFrpgfMNKpFwzoqh2jQgA2jTHmGoJ7Wpugoh4RdSTkGiUUDPKUzAJ1pitcyV1MFs3y2eWA",
  "key26": "5fsjk2KsmRwbaTC3zhy8sYRbcshzFWdmY9GcSSSsfj6AJksubi6uLKU5DXMnYzE6RFFbCTStt5HbXFcV9RPmDm19",
  "key27": "47vakPUqc6z6E4LKzD3EDCjDvxHA9yqfG4mPJp1cywYWukdMo8RddUBEtTWArFQwgCfSAnnwox8qdXzPGCq2HqLU",
  "key28": "2UEcZnRFWTuttRjcagSX7c1948C13sLPCKGbv67xR2BAKzwnUyafD8qhGc5mKo5yXj6oGfNw2cB86o1MXmfsac1x",
  "key29": "3kVkWze3JXaMZtwikJZrBnHo2joiXmoS1qpwJGmUAp25qbexobfPeQyssCdEAXFuH6jvh7SHChB6QSK2oRwyrH7u",
  "key30": "3t3r3uAUjrCT4B44sGzuXm3op1iEodLfUinJocvnLGjCJWX84qqjzjRYDVWqStBnPy81LjRaMMHZ9DwKdkxfCD9T",
  "key31": "4d14Gh1brxFKz8zwPYuZfH6p3pPABxd7RcJDfY2TNtgHk2Gi5p7rhPEq2VDwAjLrm1PhTVtRxi5FcdoDgryWL7C8",
  "key32": "3jSoEDeQQjSVVuoPG3UCxoZzZVhVL1vhyzGHvbwPawhC3e41684RcycTX25GNYcW7oLQTVv5qRpxEoswXvauBdoL",
  "key33": "5UBKTPv6YuESnVknnxkqMym5m6zjXKB5BrXf4HznauKN8ChoCxXX88TfVpHhe4wrtDb58EmqbNfeDUZF4oPfV6K9",
  "key34": "4g6Y4JSp6XZP9tfZV37h3fex44jkrPnfvmEhgi8NwcgNmU24XwdqycfuhnLy7sEnqRTso7QhbQ1GMeDaZcY2Wq8i"
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
