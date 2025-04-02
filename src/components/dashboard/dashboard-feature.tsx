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
    "58UxZt2FxduwwASnZf6Mnvd92xA1qZRAHE1aKiACdM9ZiUm7ZtYj279YaHKsancctJbdN2NBCTSrem1cP16pCNJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xzzZKrUVx35ZAZKErTRg2mF1fmtn8aBdMLC8gG5iQranwdhxxZrVzwQvMxXpUfu3YFaK4cvdw7FC4CyeQ1Chm6E",
  "key1": "W4hw98pBkbJ1YuGU6js2JdcJt6558VHk3cauaFGFkrsyDkjegZAtFHVtQcp6MKrBKMTbhSjNU3eTv9WS3HeCcLj",
  "key2": "4D8bWUCZEokoXeVoiLoDXxtUkaJekJi5nny7Fdsmi9uTvPCd1s3VAhnR8d5Kt1mWNvFqdqAH6h5UQeKiryyk6r3V",
  "key3": "4C2V9KH8L5GWpXuhexghGDvgPtZiWfUinBFZHchygVJjUUAWkFsvAqjGnoQLdc1Dw6KsxYdMBuCqqLwChYvthsP1",
  "key4": "5WVBEyHDqq7FnczfyrUMWavS1V15tj1nXmUL73eeUwbbeYWqNC1Nu5H2wZH9mN5hHusspjYaLXGKytdeLxdHdXgq",
  "key5": "42yRFEjkG2d1X4FpQywWP4D5LJcR5U8NL2Af43fHjD7NC7r7iN73qMdHLqzxqvmUFRX1vLwAirNvSh2ukqEWyNhx",
  "key6": "2jNGESpbS2wDe1MgTKxG6R2jdhSmV5FPh6VoYzuBAdmqbnN25KYi7ZFuQrJKSH1xnnj1Fe7KPK3ZqKgSduT73yK3",
  "key7": "c7simgH8sxosrDiybTx2Jtc1PJVn3fTeLFjnZQiDB1wFV6Yzq6J2rs2btWsXgGC6kbV3cpiqjmtnRs5eZwPpFN1",
  "key8": "a3v9xa3YPH8m6cj18NLnxvgjdp7dqx7qpF5NTEJiN9uemKbaWLTBMseGY3RvRACo1rLSqqnMSU3T85o9gQPxym2",
  "key9": "4Rr3MvXSiix26mfyWtkDiz7izuM6iNn3MnGyk6NMvFUiuHwYZYYkTKDKnCvuUvx1RbT86TXHXhNLh633gThkNuuW",
  "key10": "3hS9QDwwWr6CR1FnP4AVwGPvoYuUvXT9fNSEx3b5xSMBuonFxDcnUBmgg28gqA5xFRvaTMEE2YaLtPBrTomcMnNC",
  "key11": "4AGtTDt3ZdLDCYrxaaqavo1ayP5n8diea4pjuzpbUZPpn68HDaYEH1NhYkxDLjA8xM9WMic6k7xAbHvcx9aZCAyQ",
  "key12": "2xe9TvdTUBRhgYCA8BqQtpz9DtJg79HEo6utpQ2pXJ8VZJ7Hq7Rg2j3WJw3CwENDo62MFXajsKWY4huUvtcu7xZX",
  "key13": "2KimkVbPtoTiEvdfjecqSH2tyUg9hmC3gJNwWVzB7ecUEfsLqEkBcm4TuRcLTg2a2bnkzHYNZfiKyZwaxxsasgp7",
  "key14": "2khw62zA4W2WCkm3R5iuBT5wu3Qi1SMefoLW6Z38b7aw8Uvq56XgS8vdmETf6TwbtQ4TMA3KKAPUZP2T3EefvyWp",
  "key15": "3KBEKDAZ4kEVsEMg6C7A6gvEKw8iUwVNFvFeXCS7XeQaqst7zXtFgYAnXBrZQ6dkkDwHpSFJxxmc8xQJmYNLKnGa",
  "key16": "2QmXidUwxCFznhoAU31CbsQWiof5iz4kXJnwYYVW7sYKxbwJpEUesSwZNGiY2qnwzytmdxsCmvxBL7uz3uPwBTH3",
  "key17": "444ssdy3qaMFYpBamNb3CtHE2CqqdPUigFZY5BqAWTU9mMvPW69ZY9adaRxXBebaow5wuiBmpf1XJRdDssgmR15P",
  "key18": "31tUxEW6HVPeDFVS3vDd7aNK7XjKT74YvGm4WwgAUGFqXdKzrdghWTLb6wnryLvHCga9ECDkzgg1Y6xWWcBQftkf",
  "key19": "nRmv2yoTpqRy8KNbvdm2iiWXyMVHfSWnoqpFdmqySe87ijKtDYsocaw4FU5Hz76bea3xY2jGSgLHC2KTJzaRZCi",
  "key20": "4n8XCASptVcjpjNSyF2Ap53jmSCqK4F1hBA1Jo3PmJgjhxVDT99BQvKoEQWDWDkmNBRMrUzqYGiVLRzE26jESkhi",
  "key21": "3LApASFRjGU2EHSxgUmgcyRdNDtTAaPFdqYbpR1wySAGGdW15YfMkhu8HZyfbc1HWz7pZ8UFmAZXas14BF5PZ4V6",
  "key22": "ffWcnxNUcNsif6yQTgpT3aznNYt22Hkr7vXNa3TpGv6kXsVWLUNywiKWQApaTSgAqks8DqhAUJQ9CBvEXXHPaRA",
  "key23": "5d4evhkFGEVQ9NMEYpV51AM78jSg91RxUcyMRZvxgH4rQ6sAWD86iQGTEegz7FMi6wfKY131TiiR1f5TfECLGSQF",
  "key24": "4tvZhBba93apXRT4jcxjAgGM9qz7UAxmAjCjJjQ2QYBnFXfz9dsm2jVxp73uhX7kopRhbxcWDneHveTLD8Pk8hBM",
  "key25": "2itnR8YhUW5c3mAm3y8KSk5j6ZdS75mySqN6XddkGcxz6L9aVbJJ7PFH8q2bAMZvYvCobF2oGwstyD1RUvpk91H2",
  "key26": "22qvULmyhoKuoAhcPpg4aP38G2T6LtjjJdkQQZfMnJHi4KHZ62s1h1RsLCuCPgjFcXCnGJEaW6KfnVKMJnoZw3hh",
  "key27": "4WRR1qq4fyceg1BsqKWkyQC9Tco5dKyMhTDGtiPoc3obFzS7ad7RAqjZP9Mrx9mSs86Fdr4jJgNwKfpo78gUkqku",
  "key28": "4rbSkgsGWBTCdUDq3EPudB5xjTcaDQnQUYbSXmnDbAUW8ZiskrDiVkzGJ8ULbDmpEaz75TncL5KV7UeVvfrDdsNH",
  "key29": "5fs8Q9tmW1a4ug6LieW9wwwWto8w8sqwLUtcCZ66HmW3RKFX4K7dkPs91WfTwnLn4PQJzgfnkPJvaCZX8JFUDtwR",
  "key30": "2LYvGHKjjSomX4va5aUBWNoGcNu1Pz1ndmrHd99zej4vhDPvBNTVUK5EZwxqRfsJXTPkvgzm7qdK5vSdnhEZuDoy",
  "key31": "39gRNp1wWF9TAszuhdqbsuPFstoRCAehh8WtgzHTW6otCsiMDqDoqcmTcHDuXKMBMpDSyutY4GbnW2L7HU7a6aYR",
  "key32": "39KckZeG8QcgfDQsUT6kzYzPYisgS3S87hEdHY3j1rome36FV7uJAmiQe853f9Jk3C3VUmPEhznhTojcYGxntUKZ",
  "key33": "46uwj2EY6NLuSkTCfFjfTvTrxTkRg9mJYFZCmXxSfd9iM21w29yE1f5jpn7pGvBrefaPKRr7GnovnipDueWcaq6Y",
  "key34": "5dWMaSKWvqRQtE3dnzGEG2LR3h3oLqqszDc7LAim5kx2x9YtzBaudaEwZN6ULHURqXfnHzaZswwRq9h36hDuRzPz",
  "key35": "3tLLjMoxLKajLCQivEnWUdWY2ELmxa6s9nmgPn9G52UkcuVmJ2acxxrEUXXK3ybNMWDdv4BUfRReWc2G2H9NjaVR",
  "key36": "Cczfj7uupzcJy5U5fbGHkPnNLCzxbks7FJXCyacBdg182mouszLaBTiSTuH2oJTAKzUPH4PF7DyD66RTzfVzwdg",
  "key37": "4JqMbLENf5nSHSjXWKS3oQ3uQxAh18sv3cdrL6AiZhWK3anwr5CrM9b5pGzjR1vLJg4UGJeN9xTrXArYCpVkue8E",
  "key38": "4qe2gmZrHadwZoNoFqrsToaSENDmB3vWBd2ucLZuR4NoTJFS3LH4RAtcZLMqKfXxyJJaLyJnZKw2XA9177tR51mo"
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
