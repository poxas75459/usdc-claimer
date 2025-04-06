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
    "3tvUVpjAc34MCJdkEXNtVrWUaSR7QEiLxJ8SXgNxR2fhtid52S71uxqVrXNHEZgDjbyVS54GvnbAm7W7otQKtidj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BPpyfRFXowbfKGmzJaJ4dRvuS1mFysdSbwXezVoQQHAXT2AFUUmkdQEAS38VWsZ4VBDo69Qkk4qBPFJT7JqKH6Y",
  "key1": "3YDoQg258x91CVAhyPLuu4tQjQvyp1qu6PfLUsPi7rEsPvXzz6HPAuPrV5a1pwoW11qMFyaDZwgaPQVu3K9feCFa",
  "key2": "36iFDm357PjoCDtwCBcFjT3ADtCv8myvZ4VmFCaXhYfE3brC1cQ8avDvEeU711y2s4qgjcZTdb9s2529a6Tv2bCr",
  "key3": "AQYrYon99sS9GUTEEnruCxQsuHvn5L5cNCbmQEaFgpfAWSMmqckUh9svE1784FoM6aDP2MW2GzC9y8vKGVkrUJM",
  "key4": "3sZsG4dEBswJ9GQchVd8y4jxy8AN8ijt3hGu6y2N3fZH2Dxdby4To5wZcs34NbsrzE4wzSRTe56kF5tXpLWzzZdS",
  "key5": "44wpSjtKDwxiLLjeZQUXmeyBZXWx6Q64kf2Hx8aH5rpC3ZEg3V7jAcuanNT3k9KUwyE8kvzf3R9zQBcNfdLp58Td",
  "key6": "2R4sNAJ2wnnra7XBj4CoDYuzvd4sMwsBpx2UnWhHGoCnPHBB52hWxH88p2D4mMaBmCg1TeJfHHurNLr4JVtHQ4z2",
  "key7": "2HokhCSYnfh7kMVDeLkCXwGoggt1TUHbwDxA4aPGH4ojxzSzwRqXiEa556umrKxrpNVAZywqk6A2pwGtV6pYCTWU",
  "key8": "5iCNhNjHPet8BXqi9oNo6h7zbJQ9aXTMgBRxXqkyLhvEtT3imW45hL4UfJGKPaaZVcHAicvNRLMPBuhodaesYohi",
  "key9": "4Y2pzuB4nbV6a1AAnXbp8dAHmCqhAyvmbZVoDWgvCiVBBeb2PAUgvMX7DXu5W9jycznkxe8CnojcpbLp97DqqyHL",
  "key10": "AUZNayGkLHsqNVhCDvCRv14r696kaYPtXdpPK4hkNGHi5jdQtswLThDzK8hiVjsxzxWmCaCoWD3UKGncdagiWg2",
  "key11": "5VF9EHDYtFqkCDPQT8CdmPt3hP1ZjDLqBVGMaCHZ3FuKZooW2f18J56HfaDxbQ5sNMFhdNyaygGCutY8QK81K16j",
  "key12": "5jS5Bh4MEicbNm2gbSNNrwuw7i1MyBNfaS2sJjhQtQRyKJgZ3ZP2Ssbx8pDtH1P8Nt28V4kX1JDLF4e3w74fiNro",
  "key13": "4jrgiW5a2H7hmpKEGqMjM18h4QwPGxSw5jPjEXXd1fRHUqhRvn9En1WTn7cNTwoYaGe86oZNDGpg8UbK8A9Z3ttp",
  "key14": "2xbyaMpu791dp6ynL39a5FvhZspuoQ4tXNY8o15AXJpfBbZJF4rzehX7GPjewgXMV7RPWLoBN3DYt4Axz5YRnCbx",
  "key15": "4BAYtPUWjxzg6iXC282FwhobU2eS3NUCizY6s28h2WVD2kJGUXRpcTNia2g2nZzjQUrHUkDPsAdgiN1f5PfmNUPR",
  "key16": "48CW9HBWMbFCaLHZoRitioTtFryfUn1yX7MDFXdPCMUkBsr3VKLqUJf19PB4u7DmqT56Xm6VypRv6xkKCt6NXjhJ",
  "key17": "Zu7R7Vh6FP2fJSKPSouzkAhVgz47TyvQ4vgLEQwDJjudPBfWjgmMxdGEnwf52xxW2Uq8Fo8UerLEFchmLc6bLVZ",
  "key18": "3FxMsySq4kL6ePiSQs2ekt3yLgmUDkJDsw7sgNYJp44q9EEg7UUnzUQgxD448TQqu71H68peyczCBHxBgciZQ6Fa",
  "key19": "gKXveg6JyWyW1Ny7xyouc2nc4qnGB16VPaeRBPXTZTiFgQ1qccwHorMa9yABMF9PXc9hC5i1or8PqdWyG86y2i4",
  "key20": "5WgDmU53WmqLUh51pgxTWMgXYqbFf1hjKoggXQpuoz2ZoZa4Y2PDvYb16sZpaZ4Yc36JVm4dRVCHCg4eHDeR26r2",
  "key21": "3Ri9CiGLP3mbEUi37wQmUWGknDDr9VmycyknprEnDny9hsszF7VQt5KoDTZCCtYQyRmwMBLMJsZU4SZNx1aSJJHk",
  "key22": "BkdSrTzt78UqkGaXNsZo2uTLdDid7nddpQ5BMxXgCkuqTukrch7RcLQfm8az7bW36td6cLXPoDJTGawKfbgTmwX",
  "key23": "3PN4jk399BHqv8ueLb8kbPZU98JykS4ayLkr4Pd8eGYLiggbUQth776i4HKS91paxHGgagPU1DDVTR8BDfyjJ7hs",
  "key24": "3SBWUv5conCc882rPZbGZgBtc7rwMzUKVSkF5ggtkuAi1ufncHhxKrJ45pnjBfZeaTv8dM6Ehxn5WLFJRZxS2VXz",
  "key25": "3nFASYMMDWA9n7RCHyvErgAmojhsZk2jSX4AWG4hdLPWCnVgo9opB6brcdkdgHReErHxL5bP4gzavvXZHBCMHy71",
  "key26": "hwPLsREAXth3Y9i11C2HiucMAReULNqc8deywakYwid7Fk994MVCv2YHNAgZwxM1xWqSgvgxLa1KY2FScQkn9nV",
  "key27": "MfWUDp1GDsq3Yp4pRCxdn1CGuPbNXv4rJMSV8WwRxBjryC3Z2b5CT1XGKwP9HXHtBWFeQMQNQwkP3mS5UmDHxm1",
  "key28": "fDiB9hqRXStThbh18a3rKV7cnNoX53Z3Y4BPYk1Vih5opBZ7YNdwuLwtzRTWRKRoNEHrpUWosJXWXPKox6bJX8f"
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
