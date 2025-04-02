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
    "2tPYGe6RzkukiRTd1mqbtBaSWrmK2t9QHLWjtc4uhaNBk7mkAWZZK5Bu1bh2C9KaCk6hEjumKTej2WR5Ea8umvTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "439oXQtkV4FvzAQXPsnEn8Mo91R4CZN1bAFFxQWTbY5gosv7iam3JQtEoSfZFVzQxdoUrundtoKJ3PFUffDmAcNJ",
  "key1": "3i8orfmzqtAYwX8qVH2pD61Mb1NvBhgdNavEQ5k8HFZoQF15PpdLMxYjAB5CaBDZj18RE1FF8bseTY7Sfz1BER2x",
  "key2": "4QYuRSxBA8uXbEEFVns8xj4XB3NHVZ1tqu2xLo6Mj2vzgcGAFWnkvR89bf8LryFvhePLfKDrwgnyFq63ATMPmWjD",
  "key3": "4BcCjzB6ipR3ff1uKv69MSjZrV6PW6YaXHAq939x8TQfrfvGsRUZVk6KYYzfiXhmf2DFWyneSbiwJb6684mvZGNQ",
  "key4": "4XHrYkvR9h79JruFgprjKAv6y8kjSDH2wfv8NfZD9f1GFashFPVcyQCMmtFE6XeB8eXnCGsgS9yvgKYJ5Y5aR2oN",
  "key5": "5Ctu8PPKtfZSP9EG8xpacrxLq2MHVYKUfTbCwveif5aQzB6mzQjyDZAQ8eUoV44ftxszpCLwQyidbzAdJQpgoico",
  "key6": "5uhrQ2ioTwjHvoWkqyCiA8LXb63eFMnExNAWCmstgssLPZnSiKNXW5Bku6CZsNtJUUvfVs4Pgyz5ez9ad2Ue95m6",
  "key7": "5dE9kV9ytp55AGhhNmf7DUSderE4N7TGPzphpvSttimkV897KUXbsUFcCPnnMKf7JdJhpVgnJZnctkQyNhjNtHPK",
  "key8": "62heGNrZ1Dkx62TCV5UHvyk5iyEaFJMEbSNMEodLsViHqhfyb817FdS3WQx8UsEmxsZAJoCD1Wt87dLFFkkUzdyz",
  "key9": "36b5yRdyu3TRg99kLq4LfKtCYQyVn4fN6bs1CyAnhdZPHjrECyHaSKBMKtNqmqETATBPBTExXexbH7L3daa3Vy9N",
  "key10": "4xaruhENFr4Tc3WpmmFih7bCDaaiazrPEwGVTUER2yK1YTsnj6eyqBDBVfpDxSyVQMpKEm9729FJATsXAjFvwX57",
  "key11": "5kPvaqcTdwtamLEEF8qh428NeXPLCxwgmcDFx66DgYK8xuWCZfZScMfmM7YhCfFU1V1viH9QzdgB47GkUcZ19wr8",
  "key12": "3DQBCWtLYk39BHPojzEfRZxroZUvD5zqRSYzbrEYnHGf4JCZDPKw58Cd4Tk67x3sDKVr4ZpnRXipt5mDE6WYXe6b",
  "key13": "54UeMBqiJRCS2dZJ1sqixBXDHzLwAU8gYBVtLZqog9GozJpsUKvCjoiWrjtDc3Fcm8pw1kQfAUb84t3kJKzG4XEG",
  "key14": "VUS13yzAMzAjQmGu3b1jtarAJbvynWK6pirzEC76ZUsMS8Y6cKkQ7eHtKnfjHzXS68ySMidh8TqQSBt4rwrBc97",
  "key15": "2xuqJCNVnAfqw129HDXN4U9qvTqSTsreENoMzHCc8FnaVihA9pAJ6bYySyoY6pmtuNeQUzoWmbju3ezNG52ASHqN",
  "key16": "EwAJnXSStPZ95Lq71Uh953y41mm8MxtLrQZXTKcVeWbX1CcW877CpZsdUzvhvrSTYaqqycfqfkcrdviQy1tJMZB",
  "key17": "3mp5cvKpkXHUdGtWxNwCspNuSGZAk52evwkpdfnD2C4avxCzQPo8S5UkXyur4zT95r8EaHRgARPUw1v62sCj5woY",
  "key18": "2dk9uHWSnbht9yTQtzr161ph94batSRddrmZE26j8U7vxEeUobYE9NosfFCcJu33QLaQtwpjKAp8uM9F2nubZZ1q",
  "key19": "TrebHSrzYsDjapsJ9s5GxU8YzXxNpFBKWY7b5CxkuyfGtgzfv9DzAUp4LUq6FfYEiagyW6CbHujMKi5saq1UnVG",
  "key20": "645kg3FzCZVwMdDPgdphXPpUc89pkUFPoUwjsFHUQqXPFDJp3NWq65WYx3xgNsJsvqe4Bv3jnY4kSLJdVS1EjmT5",
  "key21": "3SqCfw8CVbxfPoAnVEpEpwqR4hCB8c3w1X2i7tb3CXimBQEgXm3vUyKn9zUPEePQS5z9nkHrren2CisveeUo9RTr",
  "key22": "61GZcZ1VVQj9e8gU5bVXmNJtnFewfuyxvdYUReGmMwgeyShqXtm38gU8e5VnsyKnALDrTPU61ZxmqRr4uNar7Ao5",
  "key23": "4shbHNm18cFgZ9PhpJ52hvQbnLZzLoSVmH71xQkTFj19e6h6JHMgYWh3uz11V9Wf8Aesm5RfMDwDo3jCbtu64wcX",
  "key24": "281SoQrLynY8CkVkmexAHc4kjWcUyeDzwQSfDE1c7AV6VpvtktUF9kuXFTssAeXp3FoKXKXu8BcDCoDjoybVkrQv",
  "key25": "3Mm2antJH1hKAiL5vBA82MnhWFPtgM1FPp3jPS3DM6NPusgENZaA5sKiPugrNjXeoCR6eVzuonwwGbaBN6gQnEab",
  "key26": "413xdksmnuFSLPpzSBwRtZbc3qCXbHn4Jbu1iwVRBW6ntzTEnmjVnzcdZEfmjDXvfHtAvRu9DqTXGFrPKrPbTTr2",
  "key27": "5CDsEEi5FUkXLr2z63rh2UfhaBwQrN8x23LW1f7JqPxmWmRbsbtfPGPZaZSUy4rD45dYhuM6H9ULK5McHGbFKSE6",
  "key28": "3JvgrQtEih4uvckExNktbAJrVKdxZoGQbrHEWKHL14988dyfPCK8nMVEpvgW47iZSkSasKWwkHfBHiSpPsmAcjMV",
  "key29": "2HRxCzwyVtGigCjwiQUwv71Ai7dskV27dDnRtJw9Ht1H34ngugEFU5GxUw3rvV2LdKEKXiBo3QfQzB4DEMaidxoV",
  "key30": "2o8iNWMHqTUaxm3NkzZPCzTgAX41MJrDpiyADusB53saYZBZJ1L82zP2VaDHCz2QgpJdrNkzoc6AT8DhsANJngxw",
  "key31": "joJ4bVY8HVMYjvJWkosP4Ud9NAfM6Y69jybQvzk1YQs8Yt99iRU7QpX6T7YQkF3svDSAnEYrTbhQuZfLXuaq12K",
  "key32": "513K9HWBR3MbVZNkHN5gs2JQNBZJZAGYTqmJgQo85UcHgsWUWJT6Gz7jXfunN19TBjXfz3ya2kHvn6giJiTsBkyk",
  "key33": "2Lvk5Z1d5rFx97mrcLP1KNnKvPDc41RPaxa94RJG2Bn4SDjHxQY6ipKmuhFzZuZpzmxLE72qB8f8bXi3HqZKu2Dc",
  "key34": "5npkZ6RoaGnHR6Lf6WTkW5sSg1qenR4SBrjRCPHWcbpsQUzZA4B8zEfgdktjk251feBsYfnVBFZYndkftGcSiWSZ",
  "key35": "5ctQjBnFWmMaCTYryDUvo3WhUVXvtu5CZBHJjwxso6gkte7PaR87b5niMUQk3r4bcgcW4eCaqSRjRVN1MWupG5qJ"
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
