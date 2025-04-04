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
    "3yXdzkeUVm9fbgwGE5Zggfy17x2gdrQv8fHcggJLcssF5JJ2uiF57n4PoAQS1rWJJ4tymefvWEFs7b1A9xEx5UDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MuGx6Ls5fCayUtLdSAtczvfcYFg4xDY7yY4p66acKv1rUdLvhbWa8zGCjTktfNMf98AeWUnUR8FFTv9k1JmfFQZ",
  "key1": "3XsGKwL6zA9VoR2rW7eDTRkYbZ9x6S453p4Sqev9k7cRiFu1jt7JT6Mu7iPiPSWfcFVo4pAZY39EAporRBSQjTZg",
  "key2": "5GVh1KHNoGkyYmsFux2pr6WGwrvweCS4yWguH9xVKuw3t2NokZ9y3cuHwKW4frxdaGcgjBd3dfCZ1RMHHZeA6w89",
  "key3": "58sWE4w1t82FViHwCQsWaNeviotRiHXZbjxaRH3iro5XHBpdtKpYRpCA9XkNPYLYYKySKXF3qAPnXUCRuAecm5cn",
  "key4": "eDLspkma7UEudLKUNL398nsrZxYFc8TrmEZq98FNu1JpUQXDqB1A1d5UJ3txNeWbG2Vm6YYsov5iRHUMfyrobd1",
  "key5": "65hqNDVqpR9KY8AABy9ADFh5s6C4o3FUVqZbHKqtvrNJhAdo7ADrqpMsLEcsSANENmx1ZccpZCvAkn7tYPsuYY2H",
  "key6": "2R1rwf7F3DLcS2a7AC1a5e9ZxD4PXx4y4ZUNanWkrW6SVmfFDbsopdnKghbht5ke8fCqbFdtd4JAohJek6PeNNFz",
  "key7": "67mDxQyxAPzUTf3egaod7NEm1vs7mvPxYDbSCckrr44qSGthaVkbN98MpGvHXsKvLH7YXistbYBowSXGFMi9Vb98",
  "key8": "5SJvdTdhuy8TNScbCvx7yctjNKgx269VDsar9Fn3ynhBUifreeARvkqJ6eeh8EZZ6eQvA5HPiyVzebz8pmg7n9vP",
  "key9": "5eDdMuvyP3AaAHwqZ1SMU5c4NcF4kVMqmVMQ41ddo8BgNkYc6ozXMG91YJU6d6VWYPCe4zLgCWUUZ6F93p9QAqof",
  "key10": "3iGkL414eA1Ve6cNowjd6RrpDGkhNs5KjMkeVDr8o9qsc32ekHig3Y8vRwzQmLVBLBA1MPwgDuV4Ag6sUVaN4UAi",
  "key11": "2KFP1dirbFYNDVe9qeSJz8WbTLLCaBmvNp2NCjFEnPJ7q58MvoZHkRYvbDhLrLUbtfpzmE2DjPNhDBxWnQqYPKCP",
  "key12": "vdZnabzMmeQSRxKQskcJTFtib5Gn29HLuZVf7mnFhngNi3QruNwTyFUqAderbvVUP7Z4mbV6udCXz4wYu7znzSM",
  "key13": "5zvAgis7fJcRsuh4JXUGDFgHZumB2qLjQ9gpsjTvY8o1EbCXg78o76sPmLb4VDyoecj6cfbzxSEvFh5hKPHTTYvP",
  "key14": "yn8CxbTFcCr5BHQvbP8rewKfXCz1MfGaxfVCe2NqxyQBt4sxhWAZiunJuntado25V4kMKHRHGu6XaoXpheBBiQB",
  "key15": "2TpHXrTWWh5siKshTNWbiHqx2g9r2A4mrwbWvD2mZiWtUR5vSMxibUwzqsoDHJQCiwy5vU8baPDwFQE23pCR8q5Q",
  "key16": "4F9rZc2XsA3PA3McppWSnj8Ezka1bpHjwAax6HtUz3iJRVa2f1c6N8sJKHY5YmPzRxHp12cv6LXMN8NZkxMnAhtL",
  "key17": "2nWp69nyBQD3iZHecm9wkq5HH5gtFhXjypbEWB7kFDfWwtLj6q4vwneXh6PrZGD12MocCmnMKyDCM6iA5TDZ6UY8",
  "key18": "2keDf1MEM7s7zKV7THnaykHKLVeMvZURWDEt8zwNdg2P4Usdr8a9JjhSa21dvg2WSwzEy12Spef3s66nbFoKuzd6",
  "key19": "4jzFa37K6UkwgMfc5qw9nxZaV6mkr6oYQ37WTCyESZB7C8awCxEStJkCNZc2rmMeGaU7RuMXzdDPyQET6ToJJirg",
  "key20": "583PQVKmwixoFVivcyeT1vbXpkSbQhDqNdU1h1LMFZUnCegWdq4J2Sr12rTad8vFaPVE7Zg86azHpMrbCkqcg38X",
  "key21": "48GdtQ6U5NaXe4xUyFQJ5TsF66AnyuFdRNKchKqLxgXyC3MT8iUi7K24rd65DTFtChJHPs847h3Y7V57kUHLcZaY",
  "key22": "5GPNWw1ERH28aekS1vydGpL3vFv2HBhVhEHXkdBRwaJuwFT8WvVmx3aKRL9BYEuPEwDwX7Cbjwo2kCrKJefim1MU",
  "key23": "5jqG4nNfyx6sNvbHpvNs8Yq82ft62eMUXSvwwFz9HFs5BYziwmQwCPCV1XpW1DX33oaBTkq2Aspm5GiCyyaH46mP",
  "key24": "5w8qhkqaVj9sBeriR8vFZGZ65budBvMCBvJEtmeKVwaw1SeCxtRL7SdHepA7jHHj5zhcwBaK1CaoWqtWoDY4LU2p",
  "key25": "5HUkDbDuMB4G3L3zoj3fSztZUBS6Zxzw5zfeouhuufYVHYCzCR13VHPmAuuSCmQp3Z83brUgM7QV9btn5sMYEuPh",
  "key26": "5YmshwPDTwzMo2ukdLvxdr1pX1E6sSi1N91Y4BKUScms3cVaZxxXuJvexKJZzR2a3Do93rZy9eDuGcSsQYiJGCUx",
  "key27": "845xmoZvwRz2NtGSafUyn5GcBMmzCU9fmFpq3v577u5gine8LPC3u6KBXaBFkAKNajNvt1LsRUECYVN7TwCMJDL",
  "key28": "5i2YidcTSGckDr34JV3LM3heQ1yENWrvwmDADEr57q3bM4uRorfDZByekmWwZGS2ysUnnY7U7BK8sZ7MomQM6M5M",
  "key29": "5sDxmnRkqtFQBhcniz1vywfaNBmbcaMZ9o8CbBjHiRt2VGfJDShGab5LSEDz8XLTfr5ft7sdXdkVriNmQPBGAgbG",
  "key30": "3ssemgWoPRcgKrYyfNaqAxP8yicoQzn4QPjf3tHRgPXY7EezTp3Yg4pkNQrakYQunD5YKhkqtjKJ7qWofLMyQWy2",
  "key31": "5XdKBhksd2fbw8E21eVCZZPytoxtwgW4uM3hAnTgkXEzUwrUKq3Nv3E5gKB5jiHEe8sFzcshKMPUevA6L497cGH5",
  "key32": "4prn6U32TmUeTJReee6hYvcuRso3qzQDcb7xWu18YkefKWxS6Jf2ebrwX4psRumKvBwRNg37VXZePNb1xzi7kSqf",
  "key33": "4SaLFPb4cNvFKL5ZfEmUrNGykptiQC7cd7GY56cvswcA8nUFzwh2QsuYDkP217A5C4CPLSe8xSF9EDhesDW6qsfk",
  "key34": "5r9hnTDenAJVnT5ZkZDCUh64USWjwquqWuGR4VZcrHNwP4j2kGj6FY7msctyJeJXYXPSRC6Po7Q3A6uhsnW9QBm3",
  "key35": "5FeazAqBbhCxx6Sbfu5g1GisjRRA4EzRQsomgmzaSd3HSGfMzTt1CfKnMmupcJCsEPK46njZiQ23e8MQL7iMLuzk",
  "key36": "3hBGvHhkWdTqzx4zWbqHqp5kcYiBZUUsgGjKjQr51SduouBPs7MzXi8WiHUsviwi2F2r2hzbSU4F36yNhZ96HUfP",
  "key37": "4UE33UfsPD22zneGHh511fhM97d4ToTKAZ9veXnf68NAQ7Qn6LZKGfPDxgG5SKLzf8cxY7Z8KcoxDRNmCrgkcaEy",
  "key38": "4K8zkR5ucz7AyT4tWSzgmSc2TWMovveyRpW7J5Pgemt1JSRxGNxiCKGodShzHDCM87K56YikQxoFxYuepEMrAzAz",
  "key39": "5ecbHPPrHUi87YBeXPCTxXUkwsoqcFE9eNA4tB2XuXsSDUpZQQ9WU63adnaLRBuGuhd31NC3u3GqwWzkyxLDSZEw",
  "key40": "4aLSwNPZjUAnwyLRHPq578scz7eSFQH5GvtcTJGQ37nB9VVfB91MzDJYC5GHd1QsEF3A8HJay1y5UyAHHkpKautS"
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
