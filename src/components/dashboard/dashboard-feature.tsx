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
    "4tmR8MBrKThW8BydAYL7mSz5rWj9SDP4Za15QoKTLbb4G238UppLEX99w3LuCoog7wGrGHmJuSYKV52bekXzR8j5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i17jxzjQtHGusCwEKAGzwhgZngcMUXPHGcCs2pVc4MbBdo3KVYYcT55EuAiw9oG98SJgBBisfyEhJpzT8gV1XNt",
  "key1": "584DkNptBnF8ya7ofWffeKZpmtsq3sXeJjQ6C2DJC5kC4XWxyHzmLoGQLrzLe5tcaGmiXpTNgLsTSF1GyzknGc7M",
  "key2": "2qsUBtSW56ESA7xGRBX68ATp3Xt9XYZzc3b6prkotyY2sUyqPxCXp5MWkb7moM4DrqSVCQykPbCXAXQ91GMqPkn5",
  "key3": "1FDjYnsg1NtC49XePz1dGWCbPWy4vA9evPKLP64L9eB65JeSRGKHAfzw2uDhyiBer57JhT2mvaZbaoPSEKXcKaJ",
  "key4": "3VqG7yjd7H9ioNXExpJGnKzamwCFXPziHatWwXHni4Z6uc6SvGjPtfTh1hmLEPDc4zA2abxiCt2ENUoNG3E8GYBS",
  "key5": "27as8GGc6ufw1CLUUkCkonzALHQ2DiTYtPVzs9RkP61WLY5YbQZKERJfqNaCpN38T9XMpG25jcFeyUPP6DDoabTH",
  "key6": "3KDb4HAtittKQuBqs9ib6PusQipP6rdaj2wHAZVhy2k7zCjvA2nxtfcphJ7UDq9mXQPu6ptzJy3WR4zX5j8ivumo",
  "key7": "2VNKf7SDuj8WS8TQc6ZrHPuT4SoBTGmrtZe1ntU6orDwkX4LLpdPWiD4zRaYVNNfXLaFvXWGthdqdoMy6h1KicHp",
  "key8": "2yoLmekFEHTPBbh4DZMKZWu41zqFowUZAbKkNRoXxs98mAin8Dz77z483SzENngRuoysyX2u3X1nC7nTKB8eQ63n",
  "key9": "2xuhE9TtvFQqrz8Dxk8R2aHhqRicCeQhryBord44FbDP3yMjPaeY44ACfnEqwr7h8wzhbMq9P77oi2C9T3RxaY76",
  "key10": "4GYKnDZjAJNmqf2kWSz2SomxqSrAaRLajPVcUC6SA5M6V4j19aWNUB4ScJVe6NPtjsTqCfE7vsueLpNQ4zbEH4SY",
  "key11": "5kw5Yo9X9n7QKedzG5eswtpZjj7LBQpk5XzSihAozUjxxhJErN3HP5Dk4CZZWne9fi8b5DvAjwA1n6BhceRXmR91",
  "key12": "3z3hc6MJchvaDfpmuTCtyntrDreN9EZprvVgUTJWLH4ySmEoeUxy1aivKd9ECBJ6GXuYJqWB3HdzgLg6QYbVdqC6",
  "key13": "5XUbeZmrmfGRMNgXSRZBT4fXWXrprBRdcqoFoqQLCeVLRP1WSpXQZDZr8Cb43xXkoAzVgCgtVkjHhgaK6x9xwWMu",
  "key14": "2YhT7fLrvRW679gRFXDKYeMn73T4UzBVVHaxyr8RafEc9q41Tjv72uxUJAghfChvTa6VUyfPLDqAHcuX8hYq973X",
  "key15": "2V1Dp5zAAsjHez1ZA3f2b3vVYT495sCwBxnnSZTcKz5nXWFyUmwvvtvVMAnyTXVXnpsDsh2nXrLV2Eb26FyckELP",
  "key16": "x4kAxDgU2Lm9VrooMiCfq2ERJvmEWPJNpUxXLd2MDVkKCFg2etram8V11XYFoChusFQRjWrZohM6qXY9uqYG1Nw",
  "key17": "2EAhmdsVo4c2Z9edHKZmVtPPTBKm2EM1A6bx7EQzZF1NvJFjT3CAZkHRGjPjSUGwQLj66n95YMFKEd5NHFG7Fo6W",
  "key18": "2PCPW9hFNy75uEmFvzr63KPLJtJapj9Zp8mMWT89U9EPU4147JfhdvH9azBrmBEbq3LobZoL4Y9EbLTzFXZiSLP8",
  "key19": "3eMp1FPHxfww1NDuQKGHcYEcbd9wtM7Vyt9TjcSfLnCBvrQAuzW4gdFr2LY5F9a7bHVgsJCjv1XDRcX6Rqi9i2tr",
  "key20": "4fKqyZwWXXVMQMo5P9dPfhT3BSyCBoBefSCE79ppM1ndYRbqxRaDtjPfRQ4cPfgzawoBox7v1SSzXT6bsMdBTdi1",
  "key21": "4S5NAbybUf77ZAt8LMcJNfVDEKZBtcfjBe5He7eqw6D3St4BCuMfFhLSa3dRUPEcijJzhhEwH2cM7W9EUEU4u1R8",
  "key22": "54QF2aZNhVx74rWAaFofShi66jdTZ1boTDVM1nNJzWER39riEayv2gNpWnBmFyr9NC7TNjmBkTn8m8YHs8J4Zvub",
  "key23": "3jpa2AtgBsc7HAz7cNQyKYjJxbM1daV2fPiGmYtCFtYDnA1jL37ru25dnmoQH8faHV1gKAk9a4P3XoBDwA7PD9Sv",
  "key24": "3MYhi3XRMsqykzWWQWm6BzwZTyQVmhZMdpCnYQqiZBgftB6UmMNTkdYg5uoEsm66rXW6FesJGBmcZ18nR2E5J7gH",
  "key25": "59a8Wgy6F2mwD3N7eYptVNVYEwYsuTnEYHKRZUAPoi85WH9tKhgigG1aoY6rcgJhr18XnQWRB7kjqbF5vmP37xko",
  "key26": "i42uAL1NDuhuEiiKZ9E1KkJfJBg4mZi59byXGTkR8emo8LSVdmMKKRcbx8aAP1mhSqb26PVuteJVzTzTVNNT3Js",
  "key27": "3y74ifvDW9Ndcd5kbXVvVrYXsFm4u3GoRfVdgkn5GNRmPnkjnHX9KJ1J3iJoZXquoqsYr8mHZk7fMom1AoA9z8hS",
  "key28": "4eiodfURLLuTsbDTDT6hGu5j131zQN2uoKeyeun36sdvARb2t6GqG9Y38apXHaJgv3Sks9zXzba9aHCRNfnzEk5L",
  "key29": "56uc6BwJyAN499aBz1QoU82ekzzkZUBpBDcVmnMWBPDaZ9yomAmqojAjcENe53EVtPkHHQ76XpctAMwCRWw52yba",
  "key30": "5qTmDDFFXkJzoLCVWF2t3bm8pVtsMHeuPUD8srxGbrDKs8XvMWxXUcMAdzRi5j7ARNjRhzSsKLxPfdbJjnJp7u5p",
  "key31": "T5khBkyNxHt5DT8chvzNaJ2FPJVYcKhw16CoQoVt1HWjvioGxRQZX4pY5UB3dNFKmB7g8gggAN2mLqM4evKMfkZ",
  "key32": "2fGHcQk6vBrRBcbZVQ5B5TRwoxhwSV1HtU8S9nVtKh9zDu1fbWhvqdgqoFzyqmUR4EWqYPycjGx7ey5rPfvhrfKt",
  "key33": "4ETNqP5DjsypPfdi9oh4LmebcfZbRyX1DKko2dnuu1K2qfP8oydNDwsW3Y5KtAaF6asrgE2fcSJqUR5BhHnorJ6h",
  "key34": "4XijjN2iw2BssJPxEVosFtYsufBs9ydQuoLZJCQdSKdshqKPaoie5aAY7v2JFeawmgejgoiT2K9sEFHsfUmuwowj",
  "key35": "5PJW87ZfdbvQwd6P8tizeu2pHb8tgpF75gURCEb2mEWycoug3p2k4DRKZfHHAiyt5gDJsUXv8dAwUCLDRBmwmqDN"
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
