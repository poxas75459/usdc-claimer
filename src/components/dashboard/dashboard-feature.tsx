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
    "3chqHVYJEzRvHmUaiEYUwXVGobVmSF5UC3KPUAcDg367AHyveJ8nXPebCpWJvBXJPkPjTKeE9oo9xZ2kUxpY1Mwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydd5tyscDBAwVGbUzG654z8FkdP9aAgZUaTYWBjzTHbAtoz9xWC6gtWYBgfuy14toNKWCfcqkEx7n7uZpt6WgFy",
  "key1": "4NrSkmAeL8P23HU4gtX4UfEtFmb9Lwf3rxnoF8gyjDDbKs52pbGUv7XkWGAVNALZ3nN4LJVoMH6RYZ6qhEy99dMm",
  "key2": "Vsw4vzdcw71PeHJc3fgaPH8g3TA3VKXwtDWhD4bhC6YzztidBk4escVffjJYGCofRkzfjzWgk69PhprFMT6kmQe",
  "key3": "5HkNbMwuS32eGNT7dCcrSuviFYuZ4KRPWcZwi19CZ2kCops9mfgupTLqdax3wQc3AmRu7sp4rUBjNFUhBr4uhuvk",
  "key4": "RQBTdGWjnvzRW6wuY81Ui8Ar7yrhrnQtj5FdCdSagPtVqK5TU8ir5qXAxK3GwocwbqYm257sLeXyDLfHmH19hFF",
  "key5": "4Xk8gYaTha4nc4LPLpHui9fkN929EthtUEuB4rgBkf5W7g6tnP9SWzjQR1BRvbHtRWxRYhGApeLrEJ5ujYb1bxn4",
  "key6": "HfjZyWosNLqYBwf9Tvwoio2jChkr4c5vCcuXcqRGsCjpNenjmnPFJZL8Jx2wdYGL9xpUkjrLi3VQ63akxEwg8Rf",
  "key7": "3raZKMHcGtxg4Dm29YcbPT57vXQhs6dzEnuFum2jE6kEfRr94RBhEsDTbT5fT76jkN5ShLLdn7GNFQ4o4UYjKWKm",
  "key8": "3Si4MCCj8rEj7q2SNLoWRx4HUrg5Us7t69UXNTxMpUahtgyAwCaV2N4dMiKGfnQNAC3Bysrtymm493s9HRj1hPgv",
  "key9": "2vHMep9ZZs8kFv3T1be7camsbsoniC19NwMxZJn484MfQ7KzeZMw5AZtsTijj8DFtMGL6wWoqP6rjztnvDaWvr1e",
  "key10": "3pfBRfJMtFndtCGqwuMKwv3e4NGRA1NexEgZgWfx6oP9tEG7vM8YN8BU8yptc8oAh9ZPhobckR2nYPZw7EeBZvsh",
  "key11": "54VyPRTbUNLLSoegJiAayHp6v2mKESUsfr5GmzHbfVzpSnjo7YUKB1tFVADHB68kDtHznrM1x6zqxae7YUSWX1Pw",
  "key12": "5UcJHhWPrpq8f21MGcpZPdq2vinXM7RuovSPZWcf5XsSUooEH4CALnET67iP5KP6jk7QE3cHapfMLknBgWm3VP3H",
  "key13": "4xN93TWaXmB8hRaU1jn5E5JqDKnyCF774paBRGgYVFDJHdaMfhACoRRmrWwijBbfWCqwYcmQjxtF3zRNyqmgAuQG",
  "key14": "2HmQhLvQf6vGiywABVW728KP7MHXrG3g2VGjSQXRYT3eJzEkV691ioiEVLWmho3coDWQSLpr8mbF3KTzBi9UCNBQ",
  "key15": "31wTEworY7g8UakiYyGTmNNZnPLWg5p6nhQxS2Eafz56PfKubnienuX3NpmtHyG7yRjKzvJnoNNe4GNY1do4djUq",
  "key16": "4fNiFpBCQPXGUVVyjZhwdpuRWAh9FHWsZN9mBUqaV5AsGFnyqPbYcPJX2N2Dtm3Qqfbj2yMspLyq7CiMRauNM12a",
  "key17": "2pFr4vPNbBQj7mDfRvYZKLCojfm7aoQpjdiREKZaHUQsPDxCXX1iarbRfoLimqj564ETn5y6Z36hAKWdhQXCTgEU",
  "key18": "63ZaQzQjUTdTLRCJZEJGT6iFRivjHAKzQZC4WTMRVdQjjr6GKb8CmU6FUNHbN3PLDKUaGkAuiN7KC8kvA2ckjpJx",
  "key19": "4zio7LsSYKT39Ap2VmQbwWHtxLaysLgUAw2sVLmQWLjqpfpCHpigabLn54AKUjFGHdmR5gG2fnDf7Jkjg8QLHv77",
  "key20": "3o6uFsE4AcP4PLkYC1VfVYjYsNu5mVwsip8cg8GrBAKZwe5JJQRBLm8fXzbkEhmzcPQzDfJng7K3yDJcU2jX9UFo",
  "key21": "26Gfu8YUo4DjBJXcpJvfayo8e222VqCycH6ZbgY4eGGTCPN1gkN5pHmLB67Z4qNWcJZBP7WfyKwskijpdobim3pL",
  "key22": "kgnAAp6yqgN4HtuNkvc7yJcaWM7mLbBDCPY1B7higME525VRwE9mDCoYA8F3X6yppVoYSh7PLLDXXixYy3Rfttm",
  "key23": "h6ZDfL1Y6wjmW6eJKawHjT28HN8ufG8RrZ1Q6DdG2C6bLaHfpQzAMmianKS3YCQRcVLG8FNNJMBZcNzW3zLdAmM",
  "key24": "59ZioZARB5w6HtPAQ2Mijaw7Uxq8hhhhU8GP3YMcpz4CpWE8Z6GrvKo8aJhnHcRs99xxSCvxxzaW4uidvZ4PbeQG",
  "key25": "5Td7B5HAK4RaiLcUAB626zho6hdmwf5pkXMptjM3BsngTySCNNjWtizAitCwudXGF9ungXL89Cnm7fhw5VsnTUTP",
  "key26": "3agvgs2CwYSUkb9UJgvPdeiDr5gJVb3tb8hPRxXoPcdjgrmQq7UP2Ug2c5EYoNQfnzsTsDb4dsePySZfAFSKgrun",
  "key27": "6MnBhjgpkAtB1MDEHsssM2uiQ33K42pUfVzJ7YD2ymiayJPtSLFA2PsJNiYJLFoT6rfDCgWh8ZFypmEpAmvCZBb",
  "key28": "2U6aCC47R3Bj3zXp7DRzMbGjWfCXfgYpG7oW92ZaA1E2QtGVAxn6Qs3egy5XBbJRnkNAxZuzMafJDSFfBeyHnu5B",
  "key29": "2zvoBmmgEFs2y9x5TL7P4vL5tJ1yuJypusxq135Leiqc1GbFFcLWxQUnsXhpeNRVqLZEVTMeVquiVFXZcBuMSbfL",
  "key30": "39WSsTLMSzDm6GE3DWEuQw8Bucio5pyedN1vHh79uYEKKu2btMcpKGmFopGwXERD2eXu9XNHNcavhscGBpFzL1Y2",
  "key31": "58GgAWAX7JANxex3xL5U8DJUthR7M3PEp1wLu8erEFg1e1e9pbiupUoxRU2qYrirGfok58MzLiHmHHsALA6DDnpr",
  "key32": "248RNoLj48yxjPCRRYMvGckh7fZVfwmhSPWJm4ZYTfXPGhnFa8N477rV6WcF8ArfVv2axgZ1veyJhbUU6E6oJXc5",
  "key33": "3LLJLLUhrALNiSD6YGuGPccKhxyWuz9r7dfWGQerbBWpSjwmjJhxRY7ASnyJ67UJi2M6uLEAdQ6si2ECauCRkFrS",
  "key34": "5H2xVsG8Sm1mZicQRxUp6aoA9senhMp8LdSbN8eNKzZ1QUPR82wqVCA6jybiKzFyFvyHQ5u5rZda7se1Sgp1GYyd",
  "key35": "CVzcWgMMTSee5T8uW52UEg1wpV7rKPPZzFzYo82DNT3vnAEpGdkgbu8kqGuiQ9v3Du1YhxAarHvActtheq7oDiL",
  "key36": "5Nwis6SFo82bu9JuCtcYk5ncMSjaHfoDvdnt3BCgKCpgxajTi5714saKwRPMRv9eg2vbZVk2hrejCGBQmQS5Esz9",
  "key37": "3y6ZhWGrNtH9RSk7EdFwPSYWtZ5rAuPsgkTNimbpN3EeQFRVhCqgyhebtXYC6qnBCSMnb3GCm28GUJJB3mFy1EQv",
  "key38": "37KaFuGsEzEhuGWzxsqWoAqtP9SURQxLRjWAScAYsG2nbXRqR22W8b6bufyCMpi8TMbPtJXDK5wJJ4hgBHnZX1Kb"
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
