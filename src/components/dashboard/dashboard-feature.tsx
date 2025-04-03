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
    "23NGv4kBBC8drk57X7BDsSLopUiG9xawSXDCMFymETuLHFZuPtY5DCBGrmepU2h7NhCP4nQzir6YAiQ31u8McwUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSGThkZ8dbfncMW4GgfLHew1VRYieK9R9X7fymwZyvhZdBDqRHsujH7PRf7JSvLgWVKGqHcyTdrZtGiZRrK7zzb",
  "key1": "1WBVzWm33rdAxM28YRBgCXyUDiNAH9zUiiWbuuqwghAtkzCBD55avdoZmUKBkYFyLaMWzCt81V6VGRkCJhEVTDu",
  "key2": "4mmnrx8YxVwFcRdGo7TcqQjMumxHBjyyC5m1cTddEs913PHETvjf7Zk4NmZ2ZqvhZecSHXD4yUdt3q7YaZgcwXN9",
  "key3": "3CxZ7dgVKYvDRhZxGiXk69KB8ohhGHAy7zfSc6QvbGANmy3nsAPFrfsWnh5F7kApahW7xLW8iMAt7dbP6j65SzzU",
  "key4": "49KFuiwQZ9f9a7Q5qfbronbRjCpuLRZqtHrufxCDefWhtjAJcqtGG4wpdkCswECyzRQLWb5eKqEyUbkQPLbHTJre",
  "key5": "3EGvnZURFefErWuWXuHV18HeYMP4KKgamnXCkoQq35vAUjva5D3u4GUSR31GTo61Lq7pcCCAxm4KCJpZxTs6FqAw",
  "key6": "3NJPyYRYDh2vX6jzWKNSbAhjCRSb9XEMLsxJWhNGTEkexuY6N7Z3t2Pa4mi75Lkb6UfaAf7uJcDsouqWwPorsF6e",
  "key7": "3rZu2bnfVK5gnALpXWwiqeiWZiyUbG2RUQEnDmvUmyq56znNZ5ygSwD1dq2zGu4C7qEATbkp9QqEwfJyoo8vLLHX",
  "key8": "5JG9nbDF6gNCgyxbP7tLy8jseaYrXdpbssmSWPCJbnPY5YMoezZsSnPKHrzkQThes4jp1EUJbrdF9MipNQYX5F2g",
  "key9": "53hZvCE9LBeE3wNp8B4eJuFCUSmKxTJpin87HB39iyzJGTY4yZHtw93FFVHDK515w8fNQ8Dy144sJgRBKQUSwe5W",
  "key10": "4r84iWitCVDZimSPn68EfZEJndi8pDEyGtJVoM7YP5VFEMHav7NXP514pSxUCgCnuB54fMeY9pnVUNjw9SdxN7tm",
  "key11": "dApXYGwGx3aR8prgWmDXpuadP1hdU3P9CB85aLDf5uneJdbtQtz1xCbFnjvJq3BrKhCgHPDc74m7n5GQpqdkrSc",
  "key12": "2VPk5BVeq21uCa4qjHAgaTtv9NT3bdwsngMMd7P8Fcn7wLPtyjtoxq5dhmvoRgkQiovi8NJQvCKNQk1AqZYz9XXb",
  "key13": "5eUDSv9phWpxYi8Q1Sfo3UAx7DcGC6MAALyVzoSREXfcvzD4uVw9pubdEn9TxaUfuho1fkcS9xmpg1atw3uxi88y",
  "key14": "2c286to2SEqJfTMFd3aa3B7PHK3JFsoqM2yZyJEq7taoeJeVVQeBQgKB3T7TUC3YsDcAwvmtP8YT8hqrXJuYKrLs",
  "key15": "4g9zakqyDku3UrsCNKMpuyrGXN7CPxWCD8tSH3ZA6FQitunXrTKCRrzmyvjbSHxHB68A36JhW4i8jrsm9VWFtV4",
  "key16": "4o3etR8PR6r95urboPagwhxzca1NfoJ4L8pXSh7g7cLMpqskj9ijDXSdzEXW9wTAyZPaJKMfCtcbMKy9yWN5XEWP",
  "key17": "4Zq3E6D1xdRgonGYCiVCSJefnTrnQ9QG4mSh8QPyujQykpEn84xcLCvrzhAkC4c5uPzZHzNZUrpH15izrcmb9B1r",
  "key18": "42kCMkzgdGjU3QnkMeMewRN7nh4V1Dz4YGfvtfJJ38LZkEgRcZriT4vwHxSLY4wX1CFeaMofsUKaRBsMbf4rAtyG",
  "key19": "3yTc2jW4VHgkVKug93hfMTfQjrScyyExL8VX5Jfp5CtcTcQGvger79BibQYPmQa9PkA3vY88ed82QE2yL5UZJMFY",
  "key20": "4yMuMRBh9WYsdezZ3ZaLK6F1bNDqB1xMYDxvRR7JHGXK4BwuEcAF7RwsdzyFfPCqKj1vFCT4wgwhqnXjTcRyqDtk",
  "key21": "4otWXUaJpM4nFD4m4E6nQUtt5Ubqq9f2o8ZTr5AvLzMhofw94LYiqibnU5iqUAR4CWcou3MUasKUkukAGZhnKSse",
  "key22": "3gLvNELNHSYsjfzQHjd5mBPJ5gKtJt7AdkzH6XyWPKGwEE3RaFonYC9wiujR8f6YXCELRSbNHaYYZMufssNpu5ps",
  "key23": "5y8v1CZxZXuVwPvEXYW6H3Yj39ZdvnCC3rmgo7362zmJ7pCGAXBfTjjQC38Kan3xC9cYXV9JUgpRctWyfN2heXxG",
  "key24": "2iMMNwHv5wg2oo4JVPBLnQEp2gs1Y3UR3kdmVYFzmTs9SQCPaA64bD6GcCQcQZLBeyTwxFeL5E9guBasBPjw3gcx",
  "key25": "5XDNKofSegu2gDipUZkf9EFGvodc2onkGNvVtZBrYvjcvkKuy2WQBtZ3CXAci19i7LcWSYqeREPAVzCMMQizzbNd",
  "key26": "5iq8nM3PrAHP8mym5ECBeGdyGEcNW1acqnoeZ6fQJ6pnVkLwNBdm71FWP2gVKoTjMboXhtU5HALEqXvWRy9ehSSv",
  "key27": "3wbrF1zJVRvboHUgid4pmejq2au6vCE7auSruCnBQsHseknpFVqbpTYA1St4zkUc4uk4s2QtzegFUGtn8C27Qosh",
  "key28": "3s2qRpsnzv54EqKGEamYBNEKtC6ymuNrXuVGMCxLywv6aHqjF3bX4UoB4apFk7MQ6pRUNeNV3oaT7DWf9zE7VQxt",
  "key29": "5S5qjtKJaALLi5mQCcMb1p9wM81ggAonvrfZd3NrtLAeNNqnhurnYyZC23L6HMZNcSHWyhMHTRHoK4skEom6WfE5",
  "key30": "4Ypd2KWRNyU7PgiivKyudjMMpjQpFgZiL4vf7srxnCtQxFjzhRQB2C9f6cNcaEmC3D72vpzAZhggM6HHLGPmdBtZ",
  "key31": "4epBM4jb4b3u938vRGqhX6PsaoMqJhBdPnSj8nLDBevfTtCVvYvncv6TRiQxyR3weBCPrP2vft9tCQ3NAhWWPX5r",
  "key32": "5EBkX3DsRJqNP8RWK6zLC5jMQ4FogdR7Y181zSUwQ6hh6zwsJr4QP9Ha2qpuUeX44qMnjeRncchfUCZjoTka7RJf",
  "key33": "2WCWFQKSXpGhWSuiJPPeM6zySwE21AFMwNZQYvaUPWynXqSJLtiPcE4QsTn9H4uRArJBBN48FaPuswnHwkBS6sbr",
  "key34": "5aa8A3zrw8hd5JUepy9t4nsPpEF6172V9YrD4pKM3vutek9p3kGpfZxPJDxb37kXjLybvE5Qf2g5bCQKjT33eaPk",
  "key35": "3T3wHq5iwczoZZNQ8bm18ygZZyRyLQC4hrGuxprsiCmPexwFNrKGbXq23etwXaiGKU6YudTxEXueHJTJVYUDjiDZ",
  "key36": "2h2xhF1AuVsCqJnq6hWDMJ9XND4BUvSdkdTJocyPhnbG5Wt6nhu81PidzNenYv7T8uTZJAAh8FzafyvjsNUjHH6B",
  "key37": "4oASeyW51ELx2G3BWispaET9atFjGUEmyjBTp3YAz6KgHLPRYSJ65j34rYmS2xMwoc4KjeVYAtjH9MoX8raUFVB1",
  "key38": "3oSFM192g9kEhk35g2ZXzyrcCBbmpJv4aVBeTR2UiBiKmPk2eL5da31qkYvn8gucUaRVxMoc6VqMxu9724CPrq32",
  "key39": "4sNoorhjREMVT9FGgAAJVX9LHhGYycUw69V6V555ESvG3a5UeLu5DkinnQynKVePa2r1xirYhLifEbTyb5QptZ2h",
  "key40": "2LpzsykPRiAWdVjRhgJYDjqmXVbPXuV4YxckaGjadN2SN7AoRU3evrifn7yH5FGpukNCUGVWnLEwwNtVBU5uGe4F",
  "key41": "4r2DChcsxMLHNfzgr5nPLo6fJP5X12tRs3sRqPymnocFjkf41Xn3GUPEBDFFfRNTgjQLNNPvHVkmVN4dsHUAxPsK",
  "key42": "3p5ijZpD3g2PuhBcjHoJZKe1VeKvqvwxV4CuJTWC4Qsv7uEdJc96AttxqCWTQb4aptq9EWiiJ5LJLDafUURjfBPu",
  "key43": "32RRk3cxM2aAtSNDFSoNUoPKziz3uEQjCQmAjbwFPiEPSaneRqDsy7wY4AjN5L6PA3pYB8oewpzUJFH5SnZn4RAN",
  "key44": "TQM6Vcbdo8tKS7jRwyT3LrkTbSWyvziAoRvfceaM4D3vZ6xyFCL2m5A48znZxAeysnsR49GY4aH4jcrVSqP2E92",
  "key45": "282wgL71p1BiCBiZ4VTqC2eT7ZqLDKdhcSnwNUsBsqoQCMFLE5cuEYuqcsL5vxFaFg9btoYX8C4112d36cyhinLG",
  "key46": "2dFttTKEiiPNZivFcBrE62LQqKK1SfmQ9SVvu64KeL14b2oixw89JnsuY8FugEFY2YdmEc2iFkWWeGNa2rt38BiK",
  "key47": "cdurAvnqh8H6pormG1MUJJFtn7CvCuz1ASQoKPqoMPiduY8TMjRWfojdooQLjW95yfNTVVuinA3RMnMFj3FFp3q"
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
