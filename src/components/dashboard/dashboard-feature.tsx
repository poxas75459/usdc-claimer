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
    "5FpL8Wi8Cxr4N39dnH1zctkSPtLg3MmRpW2ojs69N8mVwvKJ6rYXafW9T3tmxccvziudX6SoPcHu1Pn4J68GZLLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55A7gGqgftgXG2qnb2PjT56etdwjymDUoL12deoNoQ7KcCUmVeCwQ263fiHw19youDEVudyTmMtQtodGSEAwgKLu",
  "key1": "2KH6ogMyWZGcuUrCEPbj6uxdN5Md4cFgDDVBczvRt4sMENE9AA7LcdwXTs6oKRxRqbxY6hyhKPnATDQMUNBei2N6",
  "key2": "53rqWeFv5K7xmB8F42JXhNUAbvxfZTqUE9dU8N9Nhd2BH1SAffnyJbAy3mohyt2bpTbywN53YjiKwJUpRD4jpz6D",
  "key3": "2FuDGX1Ku3yPsv2xk6TmsafXE7YDtM2HisopjqTaN3gRzmjxxWdKJxNkkJC2VQht5QW9xtUpZkwLzV8SfHvyQGLt",
  "key4": "3mGqktvJFkCorjBNP2gJbiYDhdKwmBFJyvqszjo2Z8ictX3FBGWYvrxnpduS7RuFkmTUdCCWtvoVUSrkBFMfi1aW",
  "key5": "4Eh7oAsrZeJiQvvNk8HMD6TMSJ6xsdXzWTacxMtCHsBWwivZymiD16wUgxBENK8jHDPkdZZoDwxVb6DPkq1pakab",
  "key6": "3YUaFpgfty7cbeuutc6K4GC6otK1nZLLDbGHyBEAqjDsAqMZtm6Q7GcMtrRTKNHkWGRwPAseJVYEbHRg9i1144Tn",
  "key7": "qmhkLMwfV3mVBJhFWMNDFQhdth72eQKaNFQTYrfYzYUA4VAxq2hHd64xyiGWHgKP3E4CeLxDuHj165CpZg4m9cS",
  "key8": "VyrwAk7ts3hthfhQYwhyxSK5xGYjouAJCxD4RtKFqHxgTU5z3YzxADtEuyRC4m9zDUstAN6b7fj8HAPpUvcwv4R",
  "key9": "ckrMxAXKdJoUQg1MMiNC5s39RtqxXKHnLNN41RxKUkwgDPujrTgR6YcqB8chGYJhSRReBo4Gn4cXErta61BLiJE",
  "key10": "5fWM1dL9HdPqUfVeGWJi7usF2yX7sp2mQCBpi2LvY2CXgEf8ugjapjdwRcRMct99cYgSMw4YbgYKE8YDDWEc3TnK",
  "key11": "5f6ucZ99T1Ti24YJXmpNFdmRYZSkDRW9BiWe85Sx6d3XvFGkhKBm496nM6q2Kn9kGyuY8Umvc2CgVP1qCQzCWt4F",
  "key12": "cWko9bvkajCcpwqywLUicTZSn22f24dQVmJp4D9Px2bjn3rkm2eA28ctZUpzcoXKpxSzYQiSA5a8TKs1kByKFtt",
  "key13": "UpbtgrCcXCUWLJpWe6jSAnLMP5yLT3ostjRxLFsEnTKnF7fF6jULiB57fMZgQc2KVwK4F95xm35pEdqi1cN1duN",
  "key14": "2Qjvk2yVZZcySQYSnyrRNwFHMehGF1nn2HkjJDFDMjzVHCiFC8GAeLyV4wnKDjU1BYJxoaG81HzsZkJpKydPYniE",
  "key15": "ZtE33u419Fd9UokKPZaGY9fbX7vjX1JESEC8cbDhP5GbMe1c8NwviduHTPFigkhTCZMehVfPYurbn3GAkKbcviv",
  "key16": "2si42A7CwB4GsVCVZ8wZQZ5paZobmnZLZKPKUK5vLL8MLwEDQZnThBpRJA5LMsMUSutxnM87sknFAuPW3Au5gaK",
  "key17": "2EZmQUVtBdN8kXgeifdquSEiDEa1FhcAbAVpMdbuvw4GiTLfm8vPGVBaSRehYwoxpPYi5HrdPpBbv2JTWFcgK6xy",
  "key18": "4NZXKPs3gvZUjKkLsrT8sPnkvTqvJvuWrtdjs9nrhrqbAsPspJK9zRB55Qj4zE6RkKzwnQXyrBbNBy8rdzr95kq8",
  "key19": "4DXXTLYRjeYVor2MgfnuLvNdfyFt95e8jVPLnAdLiCqYbof1UyAbXN9JJKse9FDywCwwdfa7EGfEq9LFc59SnEzb",
  "key20": "2PAibdJJE4Hn1h28nVSMd764HQpHidGd3FE1GKYgNbeGGxuoi7WGJL9SxnLZni6mjBhwdT3QXTor6Q9pfcVMhceK",
  "key21": "3f7gBsP1zC4GtNwhTQjQdkJsEQWnPnQFfx5jLP8Qesj85U6nSGbetq7TC8LYHu2kwHJedwTsGh2nA78NH7NRQDTm",
  "key22": "oHDsECbijoWT6jxnfnLwagCbCfiWvpqioRviTYTPpMFqZQTEHRX4dirvhxgKWd8TZoo8bmCHtgpB8WWCVSP2baA",
  "key23": "2KeBucM8FBZ4sYXJvoZahheTQ8Hz21KcKf7bVd7rRT1h2EefWvvMWTcDTs4Q71qaZjjPQ6oBuXxVLVqpH9UWvzwv",
  "key24": "3A7JT76gkajf88VAfkMDK5ZRqQyZUxiciKUGeevjWNFJBB2cW3AQXSp48VsZYTEYoXm7zU9Fr44a9T1WgS6kJmUh",
  "key25": "64ndn19RFr1sJz3wkC5fo72Y94rjDtu8Ly6H1KTUmxyUHuybZtRJphES95hnzLqkqqPfgBJ8RymHd7gqbaLdoX7x",
  "key26": "2eZZWG3nLKk2DJ7Q95ZARC1Y119VGrZz1op9szv1gFdyJza5hYg484Li4bnD2CCZhLLVss3wmP8QsDxg1KGLVyPJ",
  "key27": "5NMSawgVoZybennhYZS53owfd5su3SVy9GMhMMn3LhwHpw4wsA3eBfejomgYJ3Ysgm5Bwv98yFzMUeKx5DkcLqZk",
  "key28": "34ykScVZXTJYUm5NLyNjze6TfCi8tVcUyM46iSb6nGD775k9MeRgqSsHj7qnQKTtsKpdBV8JMCQ4GDGrRkVttuqw",
  "key29": "5KYZK5JdRTwAu3hYRQWVNzNSZvpBTMe4pLe7zHMo9cE2UjvnawkhdqPs4dGaARsTV9Q1mg9Siorap5gD3VHoFECc",
  "key30": "3qm1Yk4f7RSnYDYSTzp8gEGuJDGrRimHqXQjZL4hyzjVx5HU47aNiKFy1rJVL21vRPDEcM3RH5ZbDnu4J8XNgYpy",
  "key31": "62nXpFyogsgGYbHZcXZYHLXWrLFDKuhby13oHYEqsJEZuEBR88nFGaP5jG3QsnoYcT9LrsACGceTrShYryH6SJtr",
  "key32": "3S99Nd938XiCmHje2MJHYmj1wzK3uaPS7Jfzv35997nVfX4WEgZCkd25oinLeCBkRoDpHXNtv1mWz4vCCEfzr8FG"
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
