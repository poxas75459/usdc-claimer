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
    "gAhWAsw9yAVjpFq3NQvF9wr4SjGhD5Z2ktFA3rFes9LDaLaDsyJFbN1SKyKYkQKyqbRwdQHt2GjU5XtftFtAu9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3guAPPBusBzTN9obBrjqsa3S4xqKnBjrdsp5ixVfBf3dZaCggpgxCTWS6jixFZaFkYenuPEDRaVPuEHxqTXgwyo2",
  "key1": "5vGNGPPxkqmtTmDbViCkLyzYN5PzsA1U85PNyZLjRCdGgGBJnXfrhKuTDrfD6wTJCm8d2zpvHLdg8NCpQnZum9W7",
  "key2": "2Hnd1eDuB7Pw2DHoYoxyem6BfL2Fa73pSHv94BxhKBaRZMpWGu3xBW6UHWfPUsrSzAPwsVD85PzrfcoZAB84JQrZ",
  "key3": "iBVYY2kZfA1eo2eDiCX6vr6U7uMUHRMNV3jWtq5fqDhV12caLv5CgxiF3sQoHTKkMNgE8tYKAS19szQV9hgsoma",
  "key4": "3kp1v5TUk9g4BidJioQYq76ePDFTmiEtWAfvfoJpmnBkkmFYLX7agHuXatwUzX98VaB646rrYxtJoPySRDDoGLhr",
  "key5": "2HXRRuvGHJprGDkzxzmiiDfNPWkXE8hKz9wsqCX7SVzmj7oTxJzfbWeZG1Bv5sAZNK8egY6qn3Q1XJpFphjqo3PS",
  "key6": "37PEZL2NiqbSQ1cHJXpgbyBXdTEu9rwU3HypXZc22eHeXQN2KNWbzyaJP9T4j6bQVWeTz9Tkd6NEWqs23Ytu7nC7",
  "key7": "2y2ATkSUe7FR2Y1HqXg2vX3m9F9SokbFHmPk1GfbUDAT2RmP2S8fTKeb7qPiRt8LUuwvin8xku1SzJaDqwTwLFTh",
  "key8": "4V1UjVwYFJUbFLMnt2bu7gkzovxHLfnRP84jZEAqrQMLWWzofHYBZKJ4E3eb8FuiNTSzRVFrMgX2rRs74JaEQkcq",
  "key9": "4Ef3QSbBTm1erS6gx9eVTKNa3vtCuLDYmkgUfxSrxd4QBdJe5KiMzFvuL9Gxa8R5JU8JCJSN6GvQjRbvkZix4nBi",
  "key10": "2uWZCqPV7EjBJP7StmPe64C5wu6e3wiG98USL3HJxP8ABuxgEALdvMcxJHTLZuMLMZQ738LY4W9QtyFPid8BsQJW",
  "key11": "3ouiePCouVuWcFgkyArViFHfdpndc8Py2phJGpzjwtMNuswQk6ED5nYUjdZT8toPEPnwWGVW5hEebcJkkYLztRpM",
  "key12": "43yTAKpNEvdZMCDmAJAccB6zQhHVooPTjNYB1hELjo2Loddm9nA8sYrgSF6TaaJgTATT88B2jHDc99hoEP6srVAV",
  "key13": "3yoFraLukNtDD6HmoMX37wKqVR9ZewPfcF3a4ZBK2BATJ4pM45XmxBtEnTuikXSpZxW1MmY6vjTQdUMzkbyXzA5e",
  "key14": "225Q6K8U6EzjUpt9tH8phpsMPYzcTRs8RCGUc8fEQ2BoZCfDQGLaKKc6Y4mPBnQz5u3BTGvE1AUZNaVakgiwK5M1",
  "key15": "4Tg8YKnp5s67VpCFW5XnZANT8HomWpiKaAvUTgdk2QF6b4z2EyYFJczWpftCdQaPqmjeTXhAwFAG5U65LcxDrPt1",
  "key16": "5wffLNDxYTeqHYaYqFgHzZsX1yjqvRy8QSveyG7EGkyqcT75b1XE3T9n8X9F5BNjyZAqL8mrN7XoCM1LqhfnAFtX",
  "key17": "33pQjQ3L7UfV7xqvecC2jXNLenhmA29Nfteo9zMyXi9WfgvkwdYxVysD14SA682yLyWyn6BtLGAQXEh16hzrZq3o",
  "key18": "3J5fCtAQe1cSuJU97TLTHNL7WEQLh4CBvjqRvyMQq1wfmd3fceRiS3re3yMgENcWyzNNzS8URSh7iNpVpgn8RVX1",
  "key19": "6Lj6kFqXAQk2pisjuj4qqsheM9iXAjXQMtaWeLzQjyNQv4QBynGa71P3XyKwv6xrbyKCaBniL6714qcVJFPmAht",
  "key20": "5sXfdUCnKd8r7wUmD8B9paztaq2CsK9jEiziLHFELcVChbsNRCBLmeHn54Y9P4sDwFJuo4C6nRcjnPpDHwfgkwyu",
  "key21": "2hwHeB5tF5NEdNBmviWxzWHLG6BFVDEzUrvLUbaBpVTvCiB26EoPF28P6ggN1NnkehottyBZM8oeBVhVyFnZKxJJ",
  "key22": "2LHW3MWdxUsk7EaXgXUxUdAzzAxXzQPVKwqusjNuaCyMCShKKeqVaT8zUQLrq6L7WnLQ9aVi3YKxQCRWGu84Tcea",
  "key23": "3UA7Kwu1VGwtpY46oHNNNjhGdJjnarvK7oaZwmvF3DoVtjNWQsZXvg3SME4rpWco4N5yB5PEq1sSR25R6jcWjfwJ",
  "key24": "58cJZ7uJvud7xXbGVP8tLUVChwNvsTRdqrn67ZXywCBoc1HmSk62EiNREJoX6UPyvDbVe8rQndaEgdYxJHR2k5dD",
  "key25": "3BVoQrDhkBHVP2vMxVRnLKBkg3gf9j73uMSmQZmzFiTqPrFj7ncW1V1ykT2rZo1Tft9GoSZ5ExUFnqRDqAQy8E3B",
  "key26": "4TtSjGH3BapPvRUxBo7AN2VxaDPukskjXfFi2K74V3pf7Wpvz8Kgyw3QMccHPm89XD4AjamLoxtE7XSjZQoT6Yoz",
  "key27": "5h8srUAgAKCsm7jVLSKaWQtsym5YdhNKmcHDFN5pGMKQgboJUnfgSrzpWC7kNVoxMbtJgtUoiCYXSy2kRXvAiMd7",
  "key28": "61SRXLcnv6BVK97qGKCG1ut2DZ1hrNXnVT1dYEr5VGXXxcUcf7R7k9MpfqAGznYNYrTbHtJKqZN1qeKu658J6b3m",
  "key29": "3AvJtAgQbCXgS4eBguvtpm4UB9iJyTAdRLNWC7TS2E9KUsn1gFetu5zaRdwnveudTSWmnhtXETuMjKgDEUbbVKSV",
  "key30": "2eWFsQTYxdWZFmqTUbW9uomuc3e1GiZBvJbswuMBEWgnZm7vW9NWbME64mK2V5reynQuoQ46GBB2aBeTRTHB7Vs4",
  "key31": "3JGxJRzH9M3s5f3LfqD7erwmEEEgc8ME7xNnwSwrNR58jznWkUMNa8F6Whbq9nyBrB7EiPqAEuxAjmrDcmE2h1Ex",
  "key32": "2EFy8xuy9F4kXGyym9deYUnMjAPuiUAsZfjuvGRj75Ha2sFYTFghdog3VcC4jSZFzEZPxgmX3ksdpeZYtZqQrgER",
  "key33": "4iZZ5cBrC9cgo5hpVYBS8G6AggPcAE6qZdPDnzpjgRTZcx1juwdrsrNM2umQnHP3ePNfYYSZD1gjstMnMKmbZLou",
  "key34": "2Lo6by3p2hfSajEWYRAEL4B9KUH3tyqjUm5FB8SGzcUP3gPESftY1gAJb3P14MnYWiHNv15fdhwJAiecP9jEcrxJ"
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
