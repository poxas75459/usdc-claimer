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
    "2RKAzyKgPFUWwQMe5cafYjjvyuZMLBYhjcw1H59euGQPgAsousBSkgQ6Ld5AhchHeE3f1XH4dN7wtfqq7HPpqniG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NaEUxtb3FNTkc7uqJHBgJha57E8twYsyGnzhFBNCVwdfUCGxeAWTuMpjYMiWKp9D6M2kHGwnE3NPq398WwDWBxs",
  "key1": "5s531RHaud3tBzmnuszi3U2adTVn7X5k5bo9Pw4jVPqVhznHzB8AkzzyAzLVaRe64aCGCXuPP9TSMNdm2fyJ5C4g",
  "key2": "2MjbXxnMuBEXovuusnHZJayWaT6HFVpnipPdjHpggyLuRJd7AdRJmcFFgKuTGfNiqpCWgTQ45ckSX777J2uvpJbR",
  "key3": "39KZn3zpJ91KyGhiYyoGSmojCoBUJ7AiwMQKMcybPeHJCG9JCAVFpfaVEYGn4Uj5Q2mQxEkcvexfn2RVjstfsMnn",
  "key4": "29PLKLdTAVGDyPSQY7r9edAW9Z4qAoEYsWc9mPhmsSsRNzN81iVW2u12swbwCRK8j5PNVACYA4yAoR6R7H357ZfK",
  "key5": "5T3jRHeqcDhxqEXfRJidri55CcuGMBxE3yUnuZe5LHX7DHce41TkFeUKRCGNqNDgaXCxquLAA2zqwqb5a8h2Yqv3",
  "key6": "2VTZruXnkn2vx2m4WkweTPTvTW1XYfpv3yDrg98nH9fzDecsPUi43cmmjwa6dceLH79A2es9f76woadGKabBYa9D",
  "key7": "RM1Nt4jnkRZfHij6WafKWide9gkT1vSj9xYv3Wy1fkwghY86qG26pX47BNhHHu3bvTzSCSr1q6H4QRsn8VDLr2R",
  "key8": "3LXmZbGWdkBmETqkQNYDA27sNqNQ1EDWhg7FGi9YRfxpVmY8skRypYCqo1HRqFfp2HAo8DKw5skyd5hDUm1uYkRD",
  "key9": "5BUfFWMcVHXLikFx36a3LoeFCh7C85s7FA8KxQCsc5W2GCCa5jWMrpuxFqy597hHgF64A6bLHSux4ibHk5FZt9rz",
  "key10": "2HmSvF2XcZQQ5cRdKSPs6DgLnB2LnhNpCmVC5HwGEkhCJ9HBC3q7Pof3T7vMaLXuVWyZfzcw8vwnJqs93qrrqzoN",
  "key11": "uoCVcay3ewADTrFHDYd364mLgL9aHHBHa6gPfFqTkvz4GdH7aRXVLGXCytiXjC14bsXbhf3K9625rThG35u9JH3",
  "key12": "4hqC2efzceB3yJurJRxwCzCgF67LM6vzXz9AWoYyFTuq6EhgFJyQcaWP8av5o2apYCjymUhx787Q8vLC7LD8joUF",
  "key13": "4eCLP5BWnLjnKN2BEb8TzSXHJrazmkHTs5uh8Ti7jE8PR6wfmTQbf5NR4DqxUy2TnynuXJnmD7zuQKTTcUDdrtQp",
  "key14": "HAghAzJJbTwn66LZ5p5icmDWYzirVTrurBVDyNS3FBDEhCZfssSRoYRCvEZcYy6ZP4T7Ra3dwqZtRvX3Ro8rTfh",
  "key15": "5i5denw639mW8hQSVd2R7KAj7dZcrmGC5i3SzT1ZCkrb6St7dEX41fc2KkqcGHi19q76KHoTeeqzqBwwQUJCC2cY",
  "key16": "58CtJzwyYcyVsdCfSvdAa6Mpb7y6TcsvmX3NdNTB2RqNtvyQq2RV9skb4VaSmLCVvs55UUTAHHjjec72HUGqP4kt",
  "key17": "5gHSSgu3hdWjov6jhKMe6nV7bB54uVELYp77vLpiohku64BEPWE3WbAZjSMAkSTxrWzyvrdzEd9FsT3ZeDcgVyQw",
  "key18": "5BZcXQu7PERhwgfP7ZYWR6UZdfxVN7edrNswnsm284fWhPSyCMUi8K43z75zSjk8dzXUupi1XoyVRKJ88JF85qab",
  "key19": "3xhhCYzYyQgWMtwdDaVq3JFRtjBynyaxn69HmLrUtheu2qAqUpqZmWRe5BhMRLYXwSfqLeHPfSRJqUg1Np7zhkLu",
  "key20": "MtGxXrvyLgz6E5tiSXh6jdNFp3tiFsjeZUrP6AKpxCRTYAgYEKA5kpJFTsW3eHBUhkp3rkh7CVPBdZJQkALij7T",
  "key21": "23AaDNLPNEoqi8TWwM7vMWrYMRZvMCEk4vgVwQy7qemZLG1LEmkuFeZ1xUzjQwoYTtcrpgheiRURdFJaLx6V9gvJ",
  "key22": "22sLAgYM7AYHV5wscj9vAViZmz3Cg87yTDWghgGWuFmj6fiMAVDfZssjuqZypPu6Y3gW2hh6UdUhJZ12Y43tA3i2",
  "key23": "4zifv9nuRjf7c9JeGJKPqvTVZsiZYyjUATYesWNUpfvUon2f9vZ7YXzygJvoFy3qf9MxAE4kuUafTcA9XJXwCxMm",
  "key24": "3nY5NAHoS4RBBL1phTPHFThZMmX7EVZtVekhqMdvYnUYzE1VS3GWwjzhcLukLYPPFufEhpq21vKWJyiMg6Fe7BMf",
  "key25": "225jKcsww3ruVfdEGJhFqbkF2YhaGkkb5aCWG3xS3rQ3rd8wqWc54mF2RVe7PocZutzR1XUJ3JHPSBG97XiqQ4LR",
  "key26": "43hskP4LvmZADYiLNmEZa4MeurRxX6yJjLYHfrGceSFcvEJSEuAWwhjVaMfgMK9E3nXcga8k6ZSYhPstLfLq6ygx",
  "key27": "3T6TPMBqq83jMXbcZwruMUSQn9nTqvcz2wRqWfUUAsxoWBoLk2pJbcwYenRj8Zv43X1wVKV1Jm2Ew2p3ewqjYyQN",
  "key28": "aeqn7A9TuYkneicwMkUi4AYH8b3W7tGhe5MHmcJyYFbgQ4z614SC1F8agNt378pmyyzLyLfpn3YgfL4ywKVhX8v",
  "key29": "5kcdGZyVwgCuFyneW1BkhcPtbdHVBxCThwhaMAYedT5ewtLAgNcbqRr8DJ4WZ8yLcvQ4R5uN43i72kRDR98PGB6z",
  "key30": "1MdJGFvfStnWFAjKmSAaAmtUQeoXWe9AbAm6nBpaSy7mDBHjDjZyoYr33Vwkowss5fhFmKoy6y8BFWqYdvnSD52",
  "key31": "4Ara2PwkG1aa7L51RgwvtuVJUD5AdodjGKceA5mvoBWvaxktH6ao8wYrYzu1ZXHazcueesR46JWoXyB4qKXDdYnK",
  "key32": "vC1qJ1wFYEd4BB1hbuMF6kzkAMRSZr6tGk1g3tDBGSvDpKgU3wvHVkModRJr7widTUzSzyZAw39LtZjYS16aLoV",
  "key33": "63PWw3XBsUJCM4EgcTCJt8bxurUgvYUBqJZLHhqAs2T56tvWSsFRk6Q6fihFtjG4TzyjCGYYapYRW2W1hWh3793C",
  "key34": "3LXgAw2UvD5DSfC57nt81jtAcKv4Q4nkiMWsm2yMNTVEJBCdZQfaGaK11sAHLr6DcGpV83GQtR7XwEpHN5jfYWYN",
  "key35": "41sJwbfNtwTDJQnJAtK6KQGuCN9K3BKBCH2MadRge6dcRPXykRnesXAKks3h5h8BZXTMK4TXTTR8rEuwhZLhqzKm",
  "key36": "2DaiQnrYuJ311bJmQaNAPPsyYYvkSbF6bP1wGL6pprQee1VaY4cojTTY6Pme3XrjXtyPAJpY3bsNyZ6qMHjCZihf",
  "key37": "48SZDLKAJ6xmeEaf7J15uGRZ2pZ6Ei54jp9odt9tJk6qEH9ACqMnRUA31bMLGGmKqeNBsc6UAVyy2Rt7zgDLmbhK",
  "key38": "56E5RxiVzTbJiY6nLdCfmvReUmGg1jbJsxcZ9ohSeVVX75zBdPbzuoskitEMcUuSxbJbgq4SXPWFr9yH6g757cbB",
  "key39": "4tCwbdtnpRCQRK9aA2Uqv3fyeQSrAbnXdJznG67jCqNUMmde1to4kvqiPcr6TT2AvRDz12MT4d7fTp4fJQL4S86e",
  "key40": "CNTS5H8vLpbDt8Lxe6GLQgR84Cc1akQJK5se4HGvGtg2Hq9VdRh6KA2QdRVAsUQKTTwmLh5aXbcwxbrP21N6maG",
  "key41": "4zCn8YziwyvYgZoj76XyQVtXoZS5LwXuAbPd4T8EDRUANu4dCATRqShKLLiBtCWqXc8tZMxc4rDF76qF4gWbFMu8",
  "key42": "3o2hSx7PtvtxAAg4eDzAqgF6aMJLn8Pn9j4EYQyoPHGjzFzT71HfcKZpsTVpmdaM9PLE2qsssUgrsJ8EzsJBVEBo",
  "key43": "2D2YY2bEYvuCLFm1ZHot9cPZWXx4y1sWhFEtUYNdJdhFjRPu17umUM8fqDipMRLQEebm3eDtKjCLrYxyVhefvZhk"
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
