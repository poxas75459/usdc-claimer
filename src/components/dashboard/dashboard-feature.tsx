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
    "56XHcwUzLC4Vk7CN6TxeNWs1YGRJu1kYiRWHCkqAgBUCeJx6Lf6oMnAHyrYMNKu5VAPsqtFLCWFZF8Noo8FnYE16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3opxNqpNQ233jker6spHKtQPayNUCBSWbdqnvsE8QhohSqn2c7L5CDrGxFhFFLM1Rog6bTUkodMrAW1fRvw8rFCK",
  "key1": "3DgoZvfgVR1RTmuNGiHFG9dQ9qDnsgDRkdrEJvAkCAi8CKhc9hMFkQPoWyYCPe96RthzDhm2Q5W9gDS9YWn45ELY",
  "key2": "nHQAHcd3dVAfmkykYXE297Bg5cVFgA3aZcuPLRFUaenYG5iwaH2LrBGuMkunBj1J9C86hH7XunHvAyVCM88iSCx",
  "key3": "5skJFSAaJK9YDV3VBEsXs16K7N4wccRomuxX3CJSTtAXnTdezbFhD9KQuXsRuJPdJ5nQa6J8DmsyznbcoYm5UqVR",
  "key4": "4gNapbbEpAZjGbH3h376g9kRRe5fTtwr1ru6yspVsbD2QPqXuTUF1WgF6pHbGx1ZdJufnMS7sPrm7HRxSjVFJJMf",
  "key5": "3HomQ3xm3Gho3EYBqGbgt3m6YAzYknF4Li1VZ7g3jHdCYrUBwvQ6vVxte6YQ3LF5aCV79yPQUwA4YKe9JP3ogYrX",
  "key6": "2Rp3mZaCNeLKcYgeWpZQkCjuH9nmLnAmk1FW9NffJBMemEmaYVyyF2wXAyX4Rdymyp8LBT4b3RkkwJyUzXUtUkjc",
  "key7": "3hbR1E4sdLcVzg3gXkgbfMHeccyVcGvQ3ea7cboSGLpHQ8nRpzD1bjRjrjzK8NAtS5JiFZnNtGee7qjkppttSKHf",
  "key8": "1ahtzXtvpat4CP8ayLTfN5UDWwhBuTW64RcN4NuraGtfuEonLomaU4ncjSa3G62TsmnFHtdq2pGQ4uqzrVDd8Hd",
  "key9": "5iG7urfykNxZ61vZFELUXnGgA4WwusvsaTTFa2VSxsEKzWnftNsh6UyeX5jDHKxNw14en3XSPVqqJN63RQp7qhbP",
  "key10": "SfNzcRNxxwZVsv3K8M4pqiAAg5QrWfiCKU2ZpJWDGEr3HmekfHdCjX1dHVeKKwYF7jAA5sxCUGgvcvd6KK8YpYA",
  "key11": "33a5GsMf7a9No9NnAj6Pmnv4Smu5Hn5rkfnDCoVjdVp2EiBqZNfuLK93Gc5BFA2xwR1wWmawFepZVwNNpYmjcJP4",
  "key12": "33Kfn3ZSDgwgGvHeonfXKVtgZ8C86KKD6EchiXBYPATqcQfagDN6MnxeeaThhZoSRCKLfMo56ChPGh61xdiZ9hKv",
  "key13": "49JsjBG3dmemt9TtJtWCF5HHUnbuzHCZSyFuPp1kqLLpv3Sf9VUPEfY1AwgFc2YhTxrkpBJP89WcH8ARLitUip1e",
  "key14": "3p7E8nT2DU9atkMqTRGmStw8trN6yANB9b96o6FMG6i4xfnWK2s5zaZUuuNL7Vm9cccb56gaDymbtwm3YcSzhf5e",
  "key15": "AM3AemaEyKJKHC4LGc44U7EoC8sv3kv7QbDdyz7mb5HBa3e71RWCCgUbyQsbjVSRn6bckQia17QPnkCKtteY9i2",
  "key16": "2yEYHNapALqHtsxUhJ36E5RqtZX4SjBBmSYnFmBDdWXML5Hw5urMC89up37fzVzx2fxcQ9zFNwg3GiRgtuGvtmV5",
  "key17": "4z4UiPw4RZYLUK7ZojcxKToe5WWxx8DDpVYSPEht77EU6smiUiGUfVPsbTAJtviuhzXrwR2X2eW1vfrsCUQ8KMYN",
  "key18": "4pRbZwRx71ESVQqeaBVMu6gqWqg8Mc2ov2NX5HRBa1eyFbdJusPc6cddj2xLJ4NvkvKSJ9tTkq6WJW4ZA5hsh2Cu",
  "key19": "4m9vHPY89vWQxfwUgMYEA3ng5nLSc9ocipvUeY3QXUmDCZEWuUFRcRSerPc9Nj539TYwoiMndEg8CmwPCp94iHiw",
  "key20": "44xXY6fHhLQ7rYQ6LbREFCq9Hmdc1jHQYGyQDVNmznhrVJ4L828UVV33j5UdHBKuBuvrrKA63Ef5hB3xjNgTTcUF",
  "key21": "2FXHW8AcCz4515FeA2KK4B6R4HLK4DwyrjPJ5DVwFCv6iXLACHSkntVYvR1Sc4EL7PkcSmBChcr5fCshrj5qyTtY",
  "key22": "59CV945zmoyayEdr6b45kadufF2gJdqaaDB8M26C2kNMDZUnUZBcz3P173LP7fuCXfM7d6zU3r2dsbRPfvn5kqgn",
  "key23": "5twv2He7ewnRG8DxSrqaAEfhVCXww8W9oMjSJeSCvaLg5HmyAG94aAJoXteaR8Ez7KB13A8qGig23tadc5nERQ8B",
  "key24": "5Dno6ZmA6Q2JeNCAbcsNUpSnognMR7HJKAYa1R6wMCja8sWppcvFYFcZ5xrL5NAPgnHuyp4QvGRthMgk4HJ6PZrg",
  "key25": "5b6QiLg7G6QjUdySZViAs9NmHfe9rdyAwmKFde9FryMpcQtBRS4TqTMxjMB76HSMPKbbCCKz1bEittYhBMfLin88",
  "key26": "3zV1tqSHasxH9G8bLxxN5vuoHeGzLRXG5FFYU2swKQj2wgaSvedYTUg14hhCCMFqzUb7iA53MhNrYbooTCcpHN5u",
  "key27": "2Kqxv2nhw6NHfWUzYT7DcSTBSvjZNC9N3HSVaVtXoVvncV2WfethCqkhuyPiRxin3Qz7Q1vT4AhokqVnMvqqQay6",
  "key28": "4LHzt4fK677fEGc2jw9XW2WSFC3Xuk7oveRiGXTeQnFukySrKiQqT4y1keENmkidd4PHdGmr9C74ZdgG9kPHGxqQ",
  "key29": "2kE5e11CoEiHGqkNs8jLFTRA2vvwSTbL3YAvCmR1DL9utYjJYh4exWr3bzddUJNEK2kaejnVce91nTaBx7vLDv7k",
  "key30": "HBbMSMayVJLSUMwdbLRNgRueWKGBsk68kwqEdmnxtgBY42jTbQ3AG9UbgYP5f4MbHrZ73haDgxTWoZumjeSEFgA",
  "key31": "2cEiv8rsQm6UbQhAQBEPtKkKdmj3ipayzgMcE7tCumGVofvLy7yt34K3sGb8G7kPsG4wWVHGGoxKewMvnmmjw39i",
  "key32": "21mR33q86GEAgzD4SV4yUpvQJTEtsQ4Lz2mgaGpadL2HaEVCLrLJe3T3YQKFug1caURJexvnbUtSZD2288cezjKg",
  "key33": "5Qeas1s3fLQNimEctBNBCdTtpbDCfv7JeoPgtyTLHUzx7jVvzmyubMkpG4Q6z2eEeH1pQPrtKiVKWnaRGVh4uG3J",
  "key34": "5Zw65EBcuswRcGz3VXRjDzPTuiYSxSjhRknFc2J24jdtG8jhYxKCHELecQkLdw4zDiXT1y1TztoSGV1tixoZPru3",
  "key35": "4mntzxjxqN4nvw3izuVEGdaP6PMSeFKMYnZFFQLseayjUEUsSkuGArtqsPKTbmn7FEr4SKrNUxZS2tcY3RQ4d6X9",
  "key36": "4pfUHvHN2ZjjXgR45qnJTSXUQzCGsVZfDXf2SgXTkJxDz8YaMLtUhBvHkv7nKkArJ3mHxu4dJBGMZgWQXH5xrcnQ",
  "key37": "2MPKcfLeJgbP1EJQqirUiGjWksCwdRDnW87N6kfPAxXEPa5w2FbCUdtWpg9Nxg1Kq3kxeGU4Pp5JmfF5d9NyRGUN",
  "key38": "559c8SdbpYPdAEWsHwv3xwCfjayNYbdg1jJdbxmeG9SqsY3caipLCewkVDgteCojmrc8YVCaq8kJD43adbEkYvCo",
  "key39": "2yfv9TVpPM3JYmEvXkxTj5c27wDD8tDf8moMkBsXCcWvPEDCzrfDtAJRvFUCwnr4ii6iWcVzzu5qvcKajJPVxGdF",
  "key40": "2dpqTrfefPv3MwqpYgMQRyVk4YHzGe2rpn1gUrRy4y5dstHczqfBudRoH8zB4FL1cbqW9hf3egeSxvxNNkx4Syet",
  "key41": "5GEzREZftCpFAhAWJ2VA1b9c7F4t4z1RvnJJ31fBCDak73GPJt3yJmzsupbjuqoiTCseoGUr9hkah5Z6EEprVHMh"
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
