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
    "66g5ZmyRTec1MVTjFdvUkWX1qpqUkaZGR6WrWcCLBJGZVYjudBtswoXyPuVB3G5PawD4Mx4XGFzjv9JsnzmCoRSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ax5vT2yMggqiT7xNmLp6yWMGhQ5WUp1wDtrjMgjgxvDbErtNbxi2hYs6zqyCuBU5sqa87kqYB9mzzB4SSe4ipSH",
  "key1": "2sTpPQmYtH2b2f8f2C6MSqtms7exeFHxGYVxzg2CerT18jjTkTeCuyPqBcZuArt7CAGVn2efGqc2RgvcJWjeVFXh",
  "key2": "5Jd38YiU9A2JfhE4aidxtzV1yCjFmoxozr5nZarqwkrN7Yyd8C4T6eZVCCZG9Z87cAoPfGMcnekDE1PDA6FjQT3T",
  "key3": "2NkMGXghUCiunZ2TkMKUPgCoekRM1K2XNiofk5U1BTrMdNeWhEbGLLUhunDF5VqdHERi8YDv7w8KopxLQFtzyGtN",
  "key4": "21pFAKgsqZC9cGw3YVE59R5rSq4KnqEAq2HNNKANJ9v7bnwnEEqmM4d9VWAWzCxgCuXiWvGJzC5Lc1eG6oPPcGv6",
  "key5": "4xK6kVqv8nGouTtgtwQwnxrWFH6ymH8ZxHjr2kWLcg2izHt3ZYtLaVe68Wefa44esppHoNddnDaTok432NU5ZS1C",
  "key6": "EDEgknQtrra4N92jrNAdsJVkLvuXt6ragvAQH5XGqXfTd7nzaetxaygCviiAn6ZmLhoTyDEwXjNQu4yg5y6wyuc",
  "key7": "4yXn9jM7bMdTKawcLE5RjNJRGN8X2r74YzQQJaqyP8tKzfjeWmVKgZ1GAcDKqvjRefXWSYDiCtz52iKgQWx4sGzB",
  "key8": "2uwPY12JxTCxkkB6mxMFq9ro1AYwTKr8qmaDBrhHp2puxSxnU9HxhoDrrVqn3hHu418nvg58RgqvgExU8RTVQto9",
  "key9": "4KYhrU2h5G8KAyKPrpKpodotizAypcZNmxWWnK7R7xCEvNrwRNxrY9QwmngczwSfEat9VVcEbmogGjFWBeqF1Xz5",
  "key10": "5XMGkPgQsoGcwSZTgYyuQAy1p3mLu8aU1NaDvU8Yw8JNraWgRiHHZSBxm8RLRSK5zVtJvASd1RRQQKUB9AZazzFZ",
  "key11": "N5STsGSwJ6KbWZqvhr2PNBDoQLZGv9Zu7wT8TxoEiU9cmWzhqGDVpaHHZMhKQkRWpgHGy48eimxrMt6JbweCkkA",
  "key12": "hbRzkGa9bNRAU3bkitEMJRaiYMXBeByoxjeZoXiJWDpaTXUCPhMqpqAfRZQxnzjFqwqCxaeHg6ByZX9oYkrxV82",
  "key13": "5PLmBTkDKejU7hUaq2rZnEFAb5Q32iity71PzwJ77jojQk571HGDmix8tHa4DVD8NPXYF6sBV4riUQjS8Qdc9qJ3",
  "key14": "5Sov5ygV33XqdGEszzQ63inPFgYcBK9cMduCRDKyJNruSsY3Vee6qS7NEuUBDoPmrEdAD4C81PoedNddNVBBgikB",
  "key15": "4JsfsYkix92j6qnrwzMkyVVgjoEJMX6EKBg6VeHMpr8yW5pHaDxVqk6nnwgjoiP676125ooDdTYNXQoHFMySAJKp",
  "key16": "3mLPEZRPnzxwX9ApA6ZuUoV2y6xGqYP1Z8ZbpNMPbc6SocD9BsXLLLrJankvwfwKfeLqEZuqkHk4NRd3rEKYdotH",
  "key17": "5zBHKuGt37Fuffs9W7UTvVo9kMeum3wAy4H5yfUpg6kRyFpMgzrWbuKnjjZJPojdezYzXAovgHqfvRKbNfJMTQfd",
  "key18": "5JTXdTHqBKn6h5PtEENCz6VNgcu6sZzFWRpnDFgqhzKsu1DjVu7cpetsJPskycht3A4HS7RU56aQPtWigFxW7AGM",
  "key19": "3AmJqX2UM5s8XwmEAf69e4o673krmGVP6AfYcgj2K6XidW3bDxeExiYT6gFHGzv29dcKkPL42nJRhA8FZWUKYc59",
  "key20": "AkNzquB7d3hdzVeQYX9ioGvsg2fG8Luat2jJUjoP3Coy6PqiitqMWD6dJW2R4thXhPucKkArhgemeKYYTPx6etq",
  "key21": "3nyiQbt9aeYL75SWnV1syZgESFuq2RZwXCMPu1nHEiBjLC5iNNrLscFY2jeRiCQ2ubGavZZEjWNQFXToqYkeMb6k",
  "key22": "2KbNmCx2ED876UfsUQBr4NzV5n2W8k2iNNkyDHacKtAPJQJA3mdavbitbWMZMQfm6PFQJYJ7coeJrRFQZCKahokV",
  "key23": "2APUCDEaBQzZZqWLYAaoqp8y33DiPCZSDKyV5LX3PRMf4CxpWrjtDMP3YRPRUtiZp3BKchy1sBVJgyieVHYq2x5d",
  "key24": "3jAfym5Ze3zY4JYWszejbQJ4wN4LEd3E6igPhrVrFsYDS67VYjNRyBhs8B3q74TGHGSps4FX8MHXC7edVputR3Xm",
  "key25": "5PrJMJ59WcXoXvKisqeJugYPve1k7TvVLzBrYVPnnbRfDFFb1E1BYtCjXxJ1CfVdJ8FLhtAqK7kFZfBSi3VkJoZd",
  "key26": "4ZbPV8bbopcEDmA1G9H5SK7oSKcKD6DRrQpTh7tCHiarFQ84gHiGodiSkeceFDp6ERhfyb9ts1hbEUCe1L3SJTcG",
  "key27": "3x8AVH8YZGAst73c7TuAryaEJBeCnbaMUV7njDajtGVp3sYp9KPnJb6kKioEeKHfDHpLHK5D6k5xCaHeuc94Aztp",
  "key28": "3Tbh4RmpJtKin27FXLrrPHMZwNUjM8vakGLnctHXaTVNoPA3YqffN63s3C2AgWVM3EhFWKFREifTo8oWykVXiE9d",
  "key29": "ePXnpv3MZTWyhpSzGj8unr14WVnrqr7SY53RxQk5XgZJGSr2HoHW8RfM8N7pPdnqMaPu4a5vU1om8X4oyrNVLqz",
  "key30": "2rMPKCNv6wHENUBzh1KYPJsZFg6GiPcMFMfVef35BvCUhtAFyQ2oNMvaKDXYqBKRziMWtUmNvxhmVfZDgHpN4R9k",
  "key31": "3hpuALoWT7tppDNpFtg6YjFpdtkUoPcThzfMX6ufosgvqq9DtKLx1K8xnZUqgotVDr2aZPTm1xfSkyQ2eBZ2wT4u",
  "key32": "2sr1KEKjajzsdU33aUkW1mgHpiC177JbN9LMFV88nZEZuUY7y73S6dM7SiYHVQWGgj1uos9XwjtT73FazmGcajkk",
  "key33": "4DGckHfQnP8EfDyvupHJRT8A8XFc97N6hNiy7JoZ4uwU3ExKR1hpbUDQj7rbS3BU7XrPQQQ54PBS2ZyBXK1oP1G6",
  "key34": "357cg521pPz3ig9RYRsPTNmVTrVYKHRiAdFiQWAm6daPK7Vs6QSQzQJyp8UyUaxsyu3AUraqif7NrayocQejDtMe",
  "key35": "4Z6wffskrrSK9djcuJjutdA2QHkpRt3DWiw169rRBDuWVTPCsmkNyxopqbNKWFjV1aWtqdJZfJcjqoHrxwsu7A88",
  "key36": "5zusNs6Hd51UJW8KxJ6y3x8rpCft9M7SoR7925v7X9zKXVindrJR1AB1HNa8ubZGsAc9B8K65kPLwRRkWo3AZFPj",
  "key37": "5Nq4Liom6uSoFj5qn1oLrw4rFwsQ7t8DNUxYY7T9ffNXmF2WmQessXjoaRVheGgXeuDdPTbhwQbVek3RxARKYrea",
  "key38": "4JdanuCuBRGdf81qCpFvLNdBZygi6L79sPoP3n3p1uDrdihHKjK1tnLNG5FtRW3ph8xgf6n9433fkADoQhmPYVzR",
  "key39": "52nTk16h7gz4QTkcVqoiLGAaKprCL34Dzu2mZe4xfnn1bPz65HQahDJ923wdncj4bpuMsAe5ZVE87NmgWQDqj6b3",
  "key40": "2WHWEf1Sr4QZLS9Jqq1p6RJ9728YjoGixuQUunaRMqBjQjXaPJs91Lip96zDzUipNceA85pQNJW17ePt8WDPnBND",
  "key41": "3V5SRf6nrjaAnesuksetniK1ywxC4pJCF75ViibEBdrbHdFn3aKNGvAQNgUJaJwDUFEPyt9eeRYZL6RNtSPdcho6",
  "key42": "26qs2pWEnYCJ5n45sk8DrYezMFGPutgRbobUCJbnBGDm4HfQNrPmFutEGPYgrSn7gMkp1D8SMSYRNAm1QUTK4Gmu",
  "key43": "5UfB896LwAq5aCeesR84EGSWAMSaBoatmx3n1o2hjuGcgodjyR7xbZJhgiTbmNKyNoCR5gGEuAEvLm8kQfjAcVoq",
  "key44": "45guit4ygBHe4m4nQaqWqEYrYzwihyzhWrvScVT3WY45PnsUzRFTupUsXkJUP9rcgveRovdVLU7E97g2Rh3z38LK",
  "key45": "2mLRW8wPrA5WBnFeJxgP2Ua1D2JgnUxVLmoxiSW7rPzeK4DeW8LLS9b6qBCHv9tyxLTC6u3H2Dg4EKF3Arb3UCbJ",
  "key46": "LiwtU3kciq2bM4rkdsnUkMurNR1spuMD7XCcTmfXgRfzpGCgKb4NzGFH8gm9TkX1nM8G28R1GSPhcVBCrdFWGJ2",
  "key47": "2dNXfgo5QRVCrhnHYYtLf79bdse6b56KRsRw1NviRJsEvvPktqEmbMhZgnQTJQnAggEsysFRt5xsXe3eVFZVnVJo"
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
