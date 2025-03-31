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
    "4KUsnZFHXwyQLSNDEAShCGZvhLvGCaopK12meRGYvnhWtjvgintVnGyH7vDzvQPmM563gPYuPGrqHdvpeXe5WWya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m4bf2uDo6X2otpr4TGp17Z1QTNyGKPH3jjWm7WNncoAM63LTc4o8Pwa39o7yCzh4Zh1eMXFaCwKLFVS5qQQ7Uos",
  "key1": "P32Q3Ffr5ew2fzBygHGhWCt8fEuvwPac7kXFGB8bev8PTyYzZQrZoWznwDEJ3jbcJaxzDwVcECs9WJ1HZinGatG",
  "key2": "5Di7pKVj6yQaAjPwbd4xtb2sPGBK5iftfiscc3rPeKp5sTqmHhUvucCtWCMiJsfCTqaFA9tovRZ89yUiz31LA55H",
  "key3": "5QW7mehSwfPnx8gLKVPHswEU2RN2CoJLXdgCheLS4ePN8ezHuk9GK6BbG922CwwVBe1h1zL49DbRY86gL75NKvAg",
  "key4": "2D3BBRw6rnWWxj4R8UFPD8xFns5WUNK72S9AHHU4UBE1pmGwfuY8X8cSHgRsP1z3pb1Hda1TFb6fGVmNUo1HgxpF",
  "key5": "2uCXfE4mHHEDG5nXkgWZ799JdJUcPC1yAPG2rG1neqnHaQhL5WL1hH2yDg9L1necTFx6G3evzxVRTSQiyHvcT8Da",
  "key6": "2pKiqyUW8kz3hExkhQzYCpa4nfEfewtUqtadg1tvw4GvGzRZxFWm4ZUSwnP2XREoAoKWyLcwZ7bjHwNQM1HbktQa",
  "key7": "5jN23gY8t5RDzjMZ6wJJxwTJGiNRxfr56KCMaFUqv8aKZZ2WpiN62hGwXyrj4tJzkB7T3iDjDJh7RfdGX6y7qjoT",
  "key8": "3BM15dhVTLaLarqBn9L3x5T1RQrdwcRM8eBPpkpR3mGg63EqHY56E3wUr3mXkKQDesmAuF3F6URo1NQfEWiy9zTo",
  "key9": "3w4K6xTvbc4wfjPfJihQNtNEQD6PrZkBzKanN1Nmq4sBWS6RVpMBYeF2daQ2RUbNcJ1QQC9DUFr7CYoRfmrecQE2",
  "key10": "4U6PcNNVQWjMzhAgo3U6tx4MV6iZG1HAJGVFNiBsEVgHp4U5sd7Za2kMqea32XnS1UXt8uStePcMxc37EpL14F41",
  "key11": "5SjtLa3txgYJBaUdRkqQDjqdp4FdTexrEzws9H1rSBDTVM8R9sqCd1P8CK18PqGpgpP5cbVR7fhM2evPuZ5SkMnf",
  "key12": "nesfjdwvcT9YvbEm8CSLy4VXCQCMJjBayQZLpy1Wwhyx1CcWYrKHhM2uw2JYetjdwmq9d4kZBH46ntLuHu1SuSH",
  "key13": "4nDuSWcvhpHVSupcPiYn8qVLUhD1MFncWqJbqX5WYMT9viRtdw4PhwzuCgUWgGj82F6zZUPpKnSjRRcz8wFQAr2b",
  "key14": "2j8LWwH9TxcZwZj8Jr77rkREDAxSdSQm7jT4VcsQ9A6DuieNpoetC6YY8V4cFFNoNVgDzowpuafMkXHfDRfSTGxq",
  "key15": "5tfRHAvAV5DBxt1q6irD4QEhqNHwzzzUgtDnQzDEamKY7qGoqMkpFRyFYqgHhToFpUQDNhqsbgmUEynuZY37VsNP",
  "key16": "2ZpCb7MZcggtBXNMBdU7dRQbo7rntKcDvVdzq1GZQkkVeFuMLrtnGeingAT7g617SYrddfeZauqFp3ZatHhJ9exV",
  "key17": "5nPhi1weTQubhHpBoJxY24dhQ6TTMRfwEBEJAXr2NXEt96N2fHD4XKnD3u7oKT7kLHuAGw5kjGat112VkL1VoqfY",
  "key18": "5zim37RqE67wUz9ruAWYWdvdATfAGyL24TCUais1JN8NaM2oXSwNgB4TVcj5M9WAge1F4h7BquRurwmhZuRD8ZW",
  "key19": "3vXZephNNRQXirqUo19DdD5d77sJ5p73nCGo4xwUbG1LUGa7Xe8xF9rYRZ6PABq1XU3pneUFU5JdygR7EyNgkKky",
  "key20": "29vwjrQmNEoaubPCKRe6wgRWFQrmE5hybMvWWemVE9AtzZppUxFjR7RzLCCvj1jA6d3agmqztKYY5q7DoNBFa52x",
  "key21": "4G7fZF8gJjeKS64RTtQ83Fxbt8wHZDKUgse2nn6otGXnjKEmQ5cwwM1TKs78XroUwbZYotYbwXyeoXFbWjLQu9p8",
  "key22": "2gyNatLDuoBec35yWa1HtT5X612GoTxvxRfRA7vkqrCo4XqgYbw4iGeY49nfEvjtEE7sNcFRFJu7tdHDZ6fRsmMN",
  "key23": "5ZdVv4DzU16gdMh4RmMXcLciuCZMkQ83PKuKHWn1Wbt7HqQwo7GV2bC8oqa885ihsXmqBZXStwLiLHK7ZUWM21CH",
  "key24": "31NZGz3UMpeZJpRaQXUmfGsZBUYAthSvtLUWhfCzJ53kHi8x6w18dSTheT2FE4DvP4n5wWxu5YctbHauRHgvByHd"
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
