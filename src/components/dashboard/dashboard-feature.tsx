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
    "fg1bm7NANpwn5UV9Zqu8H6Njk12ThjE5K9N6zcb3XBWSqhR3Vvb8ys4f9LEwqxnwh3kTVGhnAyvuoqe887Ly9k3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WuiUs2sotX2mEYvVnsaqGiEo73xjmfeGog2heuP8E6zgpHTpqHtdJFTbxHL65fq22kHmfZcqPCxH2ddxScMemZs",
  "key1": "4vsCaiPEMn58TWrSLiFgCLVaNDF3jn59TfFYHu2TSoVVyLEFfzBKX1qTVowe74ZjaKUPCzhPGTji7tfsx5V1SoyP",
  "key2": "HxeuCp4uUJ37tkkwAQrrBe6z7kEYpXPfGNS7mYxStmRYBUwedwZSx2yhbESxLc1ieyV4u8FtbbA8hXP4qvYMogW",
  "key3": "CqK2eHMiBNkcfCUhda8EuT1cZYPrdPZWt1ZQnZiHNuzurrZz5o5t7dDEsxMtSRFJgXA8oAWhpBj1oVKbVhLNGrZ",
  "key4": "3gmbhJZxYez7EsKdQ6vddT2KmSE4ksAAicuD9DVYHdB3Unem4FtGzpEQ8jNDk7YwrwexD8i9BiYGyoqxSGn6v4be",
  "key5": "3zC4GJjV2f731XRmdKfgz9Li7SyxvQNAKpf92ryxZLUEzJhyRJfM7p9nDr6PNxq2GtqJjbwHnQEZxQVdAf4cgnP4",
  "key6": "4pQpJN4HPeBFNkVDueuANwS52pStcuUXjXwCEYwzAEBnLVqjRicCEfSxnCQbqYJsT5eezkNAMA6faCn81deUVTEQ",
  "key7": "zG1KQwicHVYGopaJP7Hnv8tdmVS8JswZX4SEJWLiLkm4bV89cCHnevyhGxU6r3cx7ZDULxvq6qGB5kyfhjpErjF",
  "key8": "32V8XE5D2R1LDgeCUJVhHMxrztDf61nXgxJpngP3YowJ9MxbV4ge3ndNGc9ChE5yS3uwHoR7zYQMgNMvrMe4sBDJ",
  "key9": "4ekuoeSLX5HreMauHNcqB5DdMzX3Zcmd8viWs1KdKmVftnHNk7KUXQw7v2y3dmCUcAXVoYRUhTE2BJqAZeak9GNx",
  "key10": "3BRuE4QffaW1Hn2ZUHo5Av2rcm1KGmYhqDJAox7ArEG3Re9VSsa6ad8WzM3nSpL6nascVAMHPqXRHG4BFrwQWSxD",
  "key11": "5UyRcQSyoY9kReYP7zevTcwfJFN8xRK7ya8FCSLwzgj4QzjHPq2KMQQSmmVhLCFPDh188GiiMJCtdmpdzdg7NL6E",
  "key12": "XxpnF3vh41vXSfAJ4FXGNHat9Avonasw9w3a1EDHQvDHi9HtpA9QNPz98uW3Zvw3pRNLJqSz1k7KLL7seGgrfPD",
  "key13": "652g571gDB2NBXeR1teV7bhX6aFBQsEWJJ91MmJ2P9QsWy2MGW7K53FWfoh3DmrenCRuiyMSx73Zv42iiDQ7e9gY",
  "key14": "5i4qLEjrNSP7ZEowzutzMdWn7QEaWumeNv9eJKh8f6HNez9mwTYHedWpnRd6J8FymGXdVyP2xxMaRtLFCywgi8fX",
  "key15": "3DRn8BURK6rf57q4KgQGEgjwh4NRP14skPrH8NkmLabwyF3kixbHo854VEyZgxPRWB43soQo55sV2BwhYwd7D1JA",
  "key16": "5EaVh5cNdVZohGFmdBY8VxUFdKXL5hnQHvRYbSEmKg5NYYDUkc8J1ggyz8uLZJs1uUNALPjU9re8QPbUEDVzvW8X",
  "key17": "2rXkDD698Pyv6e4urP5R4qCaCFA7JaPB1pFHdKkkHMrymTkXN5FGLbuZx8TnvNiU5EQJYNZ3JPrWvwEtR7sscHMz",
  "key18": "2Fk2HLmX7VhqBPuzsVysdtLPf7izmEZCsW9eDsqi9W9RfnMSdddeEwDA2wfn5rCyn6jC6RddnUPWjE8aEQQhqad2",
  "key19": "2smULNHGC9QDbVcXgBwG5RoKpPZfQ6mX76JZPNwmFBfxAtMRyi9aJDiYd6rHYiae1mPMpgF6VLG6eHZ1suPhm7q1",
  "key20": "5FsNghCcrBxu74r1B3nm2FEg2QHgvyusgW1X51Fe5fprQYv6eaHxmiQF1EFDzZZWAwNroAqrg2UW2M3eRVm6ckAm",
  "key21": "66tFngUq67dqMtZZ3FHJ45B1V1wZ55ruz3rbB8FTYN6VGPBDhciFjw2BDwx4ZeUcLNZ2VbAMvkBWz9Mvb9hoxD3J",
  "key22": "3dSGM9raS2MgCJxu9Fu2A9JCmvc557MjQkeS5SbmBT1iJDdpt45EKDdhhyCQJxLYrh5MX3vvP7ovQi7XBMrrfm7r",
  "key23": "52H4jAkp7NbetDpwVzJGSx1VbQ6AbnuuGtsRezrmtiQZ7TJxjSMWLJERHkuMAhEcMetbzj5Yn2ARc5DMcqbKsWfT",
  "key24": "35zBT9wms3eeFxkZuuZXnSB8RtPUHZf3MkTN43LMtQoT5XkEboQtxo6AHgag1V44JuXkU9PkeTYrgVMZBZbwzk6B",
  "key25": "4rTzZZDoZ2dKj2juFiLRzmDGPfbuxLpuhwnBR1z8vUVLG58aX4ELEP5kVDVrHks8FaTBRKPjLcVSzrTwZ7fAjpkX",
  "key26": "5keKfCm8KiBvy7KzAcdwz2R3xC5qyqQb4DNNZc8UA7Dosdi4oeR5XT3ajZRiCGJXt7QTFZGGEB2y1PGVYxWDbsNS",
  "key27": "5GDvLQ1iiLdGj4MGswcaaHz7Fk4VLofYkVB6U575aHniAgo4JfiscLohw5Hwm5BcQwZTEGJ6SxGwQNnBajmJAQEM",
  "key28": "5qJsaKRcCEeAFSbTCRawGm4YiCMWP4VNGbbvMFmY6q1eRgZRzzLoJW81pznpcBi5Wz1tpETsSsN5no9m1ah7ufPb",
  "key29": "5BahvNmVS1RG3vyKmSMEM56jmXhw9XkAmfnzqTBWiJByze7nhpDor4pCL2CRRFiJMWjzhj14hxtuam2tkqqguqgR",
  "key30": "4iPF8L1b7Ze34vkfJJNgTLeFcK9zPJSNv9M56byz1mu7Kz5bQV2VcZTdMpKWYTGgiHQFNSBiRegTi1k7Kqjgd3mY",
  "key31": "4Ho7Qk7E2baHnXogGKEr1L75vf3a6oo5snoGBJ1Es3w43687y39u1PeTzqFDmGUrr13eNfrii86QUu5Qz47tTi5o",
  "key32": "YHAsrPR9e4vrEcJ4BAMZr7RCtegdpW3XnNWhsU71kvTxK7cC6LT88LZGRyYccSUJok5CiKX9ikrE2rUdG3TdPuD",
  "key33": "4pgndPZbTTBtR9Mvi8KzUmHEAS9nhVHEgh5HPVjvapMNB68BZiVQHRb7iov1UXELiUSN7S2fkkMEd3yuV1oqVbct",
  "key34": "4KByJCLkEtCNhuddSm57dhk2yjmLmNju35VHediSRKtEqx9EaYmNcNDDEoaqjhFMWJhPEstynXHdegLMyFioFnku",
  "key35": "5rX3ArVYWrLUChwutiWcTtFfjYuRhLX12Zfc4SHtdLtZhEzoPdVPzx5vVoXwHwpMNdL5wRyzUxPd1kV7jf4xdAqU",
  "key36": "29pYisAtfh6F15honXG3mTfE3ZKjvcheS6UJ2jBKvCEvDh4gZXtH73LAofkCnnA56yiUsYntfTgDBEkmHNswgo2J",
  "key37": "2wSzsjmBavetkgRsX4WngSvbJnJgHGAfgQF5FvFmvy6BiQT8PBVWpKurshm11wmjpnsB9ziXJtTxttruwWagAkYp",
  "key38": "5qpiQgQjnBnqjjeogo7wGdoXkSW56ncf7WHShqZjYjhtmiqFixdjwpNvckrTnimM5fjztay7tHBaUq7NeNxRumTU"
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
