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
    "5FFGpt6SiA9GYE35yksiPKrV2ZAouPMFY3ismDaLPcSc7zACpBGQtAh22CjeYBGweytqqfHM3PDJFHUA8bNQHxNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mqnisTz2QLmysGygqvUdZhGSciaqqe4PJr1aWLUWa2zt3qanqjNTVTwpRsDDPejA66X9Jszc7TmgKhyMNHnZxpy",
  "key1": "4nhX9K82692H3FzyJo928imuQjUgTWKuVfC2WqNuJtuVx6g59ZfWMXhxEVqeQoLApJ8y2pgjTe9a9EJZRJz74P2F",
  "key2": "4HxFR5iKPorJBecEUPHJCjuZwUwid8My3VSvX3a6Q1Ry2yFAZxpkchy7x5c6nQCtqHoMCad5Te8TXcJHM8gF6XaS",
  "key3": "bUGjZoqEZimQcGpsoN8LTVTP87yBLxRcWJqKbhYZ14Km1CJFPCgr9Xk6DaoULdVs72WgNf8b1o4U6wgZ2zRUasS",
  "key4": "4Zjwrzm1X1SU9PJQTK5MWRu1EEDaDcgqhA5Lj27kBvK425Z7M7d8s2Z4XgYZgGq9Mmc1U2kozLiLMfbxCme411xb",
  "key5": "4myy6wA1XZLJy5PuZVzTaYb4Sop56WcVKPcpaYBg9fXJAn7Xq1KWD85rygWhAwGzN7LbG5zmB4sn89ztEdJgYW9z",
  "key6": "4FCgeQhMieQrzEQr49VAHxvntk68EadyAc6GUA3itu8KPpecS8VGmNkCWWaMBN4kopStuJG2DTrm7Evx2HHBSey5",
  "key7": "eTfmfS5EhzhYJbYozjE9YDmdqy5xvF6v2QfZcXVsxrXwSy618JVdvfFhJa1k1eFpgyQEa14NkWjD46keXCbFh2W",
  "key8": "3KY6T9Q33MqMUb6gvtuhR3S4k4SYKCRGzfQ9j83LEVR4skn9qLkZShojPS9VVFuVLvAi5WSvwjCyiiXi8UvYhEgZ",
  "key9": "22jayRuuay8ty94c9VNGuWA9M8D2WtTrHcFiCJFJauCURrn12UqPEPY4k4CDGmaX46nSfx2vRKmYvycP2v2LWGRN",
  "key10": "5mdxZmnheGWVeLYmqkcLWiXqoHHJLoHUgH588NRH2uegYX3SffUDwZLaSb8QDdmTmzTwYAaY4TLvXQyjghBHavhV",
  "key11": "4hb3h3G1xA47GENwGk5rPqE473qA239sst8QqfiwucRWaK4Ze8HmCnXMSZGpJ6Ux3hmczLm2UFgUhuqhGYxqhMY9",
  "key12": "2PwUEjQFPP4pWRFbhCdHowwBZPsRajS9XT4hzhUbASP12Ympy6RstYH2GCCuL4dnPEBYcsXntfzQ7VHV9Mfh8K5F",
  "key13": "e5opiWF9CesHabmxRXkv2WcAReNskheT9ha4jMBeqM6wZ85Bh3BSoPakb4NNV5MZMbWQ9KfV6JGXAmCG7GveV81",
  "key14": "dGQWiTgBqzmEgL1cfn848U3NdKvkQh6AhoaS1UR53xZMgSq5BukWmz23NqDMMxe8JrH71otMzYRpnk5pJB1sSvT",
  "key15": "37LhkrAiFj3horke5njWEa24vE9o2tsP8kAByffM4DjSenHwCLja4taYqEwdikUVvNPBKJHMWY9qff9WWmKTGRtB",
  "key16": "31WDH4sdxcGczQtqrJy1yPqcEf5FUHUiyd7gnrZeMb5hBXXmUeLvVBj4kn2SzHUmjUcm83Q55SYgmREu2iDNZ3yh",
  "key17": "4uiCuY3gJUGveZU2C9BwHN7cSQHWjEo6i39AYs4Tbj3quUD5V2V8wWjSsEtzzR2CgPT4tivJgxyuxeFKVkiimFti",
  "key18": "5aURFMJzcqevgKok1UETg4o2VveQkgrPokuALHACmDrGM3gdC26n8avz1wbmg9dbeWhQHKy3q4PYDuXzNC7oep2q",
  "key19": "25nMhDF3trzAxQVPXN6P1DVHWBi47DEgSaoNR16XoGbHc74kMzTV4kug18FXo5KD5frddH8MbcRFQJHdhhnj3bj2",
  "key20": "NYXopNMTqFahunv77a7PiBTAwfcSjtLRnoNABg3Mf3F1UuZtwvKFUCGB8H4qvm72ZY9GeS7NYRaQ2GNuoPc38Wr",
  "key21": "3tTKRaSZpCTfBWMoZR8NWM98u9iVk3wmNFzhNfKZTJLA2uBAFhQir9Ye7fnLXis8zAVB9t4q6sGBkxsQ1MdJuqQa",
  "key22": "2gXVH4MBPQprZGpKzr4e5bVmicoN5TV7vBq1F5XPfdm9W1XRR1Mx2gEQ1jPgRRVvLMCbeaXYKceSqabWEozdtHDA",
  "key23": "2gS16sETGkA6XAC4CV8WRtDbmH2nM36YwQD3t3TaD5rjZseF1Z4Q8zkkYHJUK5nYxu19oQVW72uUkuY87bHF2oH2",
  "key24": "2fvYja5RwB8g1ssR8VTDbdK7sYCcyQux2qN7o1z52HrhsSJKnftZLmVEpeanA59P1hCWhR7irMsH6DxJ7RFdZFFw",
  "key25": "2YcLGBuoJ7RsVtqTS3LWWMXCpGm9wr1Gt6BRDm59a7ELSLgeMZD8ut4hJvNTpW9uG18JJLTKjWsCUjaHCVSh9Y4S",
  "key26": "63Ka8iwoLWPiaaV6GyETEVkoTbACzQcZrPELL1dQhB4rFuCxMDrVGcdsdZvfNP3t5LGYrMoHYUsb2oRLiAK4joaV",
  "key27": "6169zTzGxCPDGN9qLXpCNMgNwzyzCyRjKTA3eyseSRPUgBouatwk36P4xaHeYxTK7KBpaE3edtSMScEtu1SUr93h",
  "key28": "2frTLAfJVtJUpfDCUsa1XgDPpCjZ8SrQyDkV46wvFRaSkh2pt9jxNdoSMTpukFyUMSdBxaUktjM4Um2jdErRbzaM",
  "key29": "5euY1qnEdHhPA7XeHNhGBsWX49zm9uEzgxVUbVUEk8qxzdrba2Lo9eiAAFV6P8oDYwLveJEHqdtQCfecQ48wUZe2",
  "key30": "3UevP81JMxMLhJWFXUZmDB3pMrURCYuv9v3bUfC6R3czTSaXk87mGxMZGdpbsqUD6VppudfzTdHPvoPqipTwkr5w",
  "key31": "4RFXiZUnopPsqeJvhxmu9sN4Z8CKQMEyvA8SB44wMrfwntuFpztQ9TsFAUpiDhx74YkW6Y27SZ6b6z1c54VqT4K9",
  "key32": "3dUmwNsxxSymVn2rNnkcFqxX8Uj5LTar912tx1mySaEedkSyT797YBLw4jmeTFE4eWh6UBL9imPyz2xUm49v4HZN",
  "key33": "5AyBmDjGdDcBh8pfcFdgJzUNUXGVWYrf2M6wfi2vcbaqEpgnnXj88ykhnGaxSzJiiWtLimm1926jKVZ4n5bwBrVB",
  "key34": "48oT8g27TyoBWpUqKqJNyAxDUhU1ZHPanBz1EDZgzXSbwrsmR4poK3qvsbEz6rKD4Mq1FJjhVdDzBU9kENAse2Rk",
  "key35": "285vqLUtEehYEcaRhkR5f8DuEnUfzmLcCp8UeG6UBeLxxcTcykXg2TBs14upP145rg7jWkGiY6rTPv5QT2kmXV2Y",
  "key36": "2G6bU7u3X7SW9eQBNmZ1BbsQS42LrtgTJMsvyErh4nsct7FzakATczfM1tdgTsqcKEz8rfXRVAw5UiALmfrjMbiM",
  "key37": "3Me9fNsDrLLL3J3YZBNhCC6gwwUCSdxtyi3LB4EvLBGVoepb4kGuqJJ9u8SswKHuTxKVL9o7gEmHUChnZVk3ZUj1",
  "key38": "2Dk3Yw1dJN2gVGQYpBoMxRsGqEqe71WNbJprLAwPBTS4cBZe7eQK1FakPRUts2GJ52UhXqFarXMse3R1ZStgCtE8",
  "key39": "5QftLBfhdqgHvCmhfmjxjnCvhzvX1oE1KfKyJgHccmV2TtQLzLGSwNpKXCYozeX6MgbnJSSStzKzHMT8BDwCa5c1",
  "key40": "49NicMM4qDUC12P3ppBhRZWfJ31e9wcLefe1BYa1q5ig3NNACqD7nS1Ci96HeCwFdogCNELpwN1Fh51Ad3KHpwj5",
  "key41": "ogjV92bSeYwBcPWsgfRzhQeJFyPFm2xsBnbKrnHFGGqSjAvqrzFRL3wLCeJeJhkp2532MQMp1z6Q7jftC9BSp6H",
  "key42": "5yWx4EZdPo4aWinjCLZCecM4f5LhZ77Y21weGGGD9bJJJvfoSwkAmreYPxnA3tw96Rx6D6TF7sky34fCHc5VQxNk",
  "key43": "28Ugmph8dALh6iG6fBVZ3oB4Hhi9yu5pk1sV4G5Qz8D6kUY1VEr9EdWNM18VVSNmDNx3XZ5mWP4LKHjz43kkKfsW",
  "key44": "5ooxcwxqqFAQv71MAQMvXYbcgFmF3uqfR8xHc7hB6VaUuKG45jetbYT1KiTXhS4U7GLnnqWjWHF9hLH1bGgzrnyo",
  "key45": "4SvVH5eUbqLxe1inCN8ZXHpznkitKdkdyLb58C7sZ8KC6qr9qxRrrDrZ8Ex4QL6Kc9ztHKMH8QicScyKaLzjgoHV",
  "key46": "N6gr4ye9PC9ajLRb82wwC6PqvNpAKmxwjS4xZz9kFuPMCXJkd5W6ShnLUi96J3S1dCnGXmi49Y2LJYkQEw1qJfW",
  "key47": "4ATmh7FPuU9AipGSUVXUhCTKTGpEFHun1WwNHCM27UEgyj8vDsX3kCfpqVQBAbzim8BC6MoTrDtNLT13Tf8PFkHj",
  "key48": "4jaHLbGZjusXfZfsQpiLPGyL6dGg87EjMhvfE6vmf4BrNzXUq5YUyGCCrYcuW7Yr7JwZVbz4Vk1FWv6T3nMmS7y1"
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
