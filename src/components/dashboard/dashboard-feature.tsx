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
    "hsLtdnVBDGsFwZDYdnjntLnM8BLk7mzHsKc8jcf18TSd5DNH5djzLyJCeMPW5XaijmPXFDAELiS821Pt5p8sVBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DuPAuVU7bWanzrB1fwJavhH1Evb93T6YDAGkAoFmfVFmTMBmS4XUdLSAxjSSBpmL2A5jPVdH3m1nbPERWeuBqTv",
  "key1": "29ukffb3kKHN5i3bXXZQq9hQStiryqvG6xRbqss2AmW4ZExMnHdoGttKfdZh3tNQmZJMLcRdpFwp5Gh8SLKhnB7b",
  "key2": "3Q4kLA53ncXRDPqjvBqm1YSBNzJagt4A3q1iArwh7ARKM597YJvArYujznoADW6auhQvgww36RvYJWhq2kk3jjKr",
  "key3": "1wbY9Yf3672D4Xpet7UbrQRdg8pjp8LEAnJFZVaKgvFJgfLB8NoMnVkW1cFJKcMjWCBRUYhVxheNUgyxTNnWe1W",
  "key4": "648tcyxbttDwu4tLiZZXyY5UwzaCFfq1zyKGsMJJEd3Ay6AHfBwBHsWHcEqxj7hD2fAC2VNYcw7BjbDuGBd5SGoB",
  "key5": "4wpmDHSGBAnCpMZsT1GnaSfUvyns5YDDKt41p2d6qATVPZWK2xX6SszDFu8RqfR4waMrWVDJK8nP3eLPE9QFVmUp",
  "key6": "4gZB3C2Bu5dKTxF9W2hikPunPves7omAtSWZzKqtR4bH7AEnFL9YoxE6JpVrednjzU5ohBZU7R2PbrBWJcwpaAqC",
  "key7": "5o6TVRhY2FmVtG8zyz3o4hmB3amX8Hq6VSLatWTHuuNtWfnVyjVZT4LbUXBE37LxMrpnyYX7wMsYqV36pVUbEoLG",
  "key8": "2RrqiZphVJRQ4sSFof952xt1Re4mneNAqN6ySEv6912fVgF5Q71VB2NcYw26K4MbtjpcKKjAy2f8NDDRN7mhoC47",
  "key9": "3UpSUx7Mtb6JSWJS6fd6FLPe7op4RuDGeQYTV93p3xrSFeCPdUDP1qiuobjqSw4r7xFpKyrvaQnLsg4GHSgcJW3Z",
  "key10": "u5eQdgEtDqTxWFSLgEK447EAn3Zfc5pX6MMUNLBBz6w61owhi56NNakw1aU9Lj5pacnAxUV6PF74AhfSFzJT8dr",
  "key11": "jk5vxXnYGNCUimpu3KjGxZHWg3n4HqzXnrUjjQW6aFNWvvPnyx8DeL7DkVvfCkb8XwGiPZSDybDJd1vgSHQLCSQ",
  "key12": "2HPxHbbE1TMcY5PCN43AoTPhWxntz7Z8qnqTpDNVSDipUW9L2zPtGTprzSfUgBSqzwDLMvUYPsx9s65p7qPkoAde",
  "key13": "2Axfd4CWyaecbJVAENE8sQ7FQePGnt1KKtW7dnZPBiagKxzBuRS1kMBHnQVNjbkhjhYSbnMxgyA88EKXY8xj4uXB",
  "key14": "5bhmLU1sxT1zqarhxfKcgNXuyXZatRVBQvohBGsTfr4BVduxwhhatoycQvaftoQM4CdpC1Lpyva5LS2kwoEZxZkF",
  "key15": "2nEmMCM4HPnx2jdP7gXRa3XhoCqjAMGt49FaokGi5KemzNajtEbLxVyWyj2zsgCkUNsH4AVMeQGPQCnSPPtXsDkv",
  "key16": "5dEmZafMqZsHpCzT8q9vgQgJoSKsGcvBxUpkC2X1Y6ZyNZagPNRovc8GiyiB5WpzrzYo5EYeoPui3hyy2zWT9i3T",
  "key17": "3rcCzVx6eRw5eUEozm3AezTjzEAu4LrBkcYXrDb8bxXGT26xhjDJi7GjxuWZE6DJATczKVZMhLApctKn78etpp6g",
  "key18": "59kv94Q7smVnCwnbtLoNetcq3vWhmBLYbsoVPZc5tPi8b5swFdLYji7Pq4KaEugwYnecV5tmWy1UMjR8kTCroDZd",
  "key19": "4iCkmDdCPiFnh7A6QKCPco8XzgfqyA53DpfbGWjLs8HJpbyHzYHeLZ49pEWQf7dAqaXC9GeytNwPVArHZoDR7DVY",
  "key20": "7jyYM8N3RXyaVx4wyuAryynehUPMXM8pGPjUsojUU6H84gCsQDnsh1tciQ9UTrAhe39DkoVobEVyjS5wsdYe7vC",
  "key21": "4DwY3sDgaEyosVxrcRpafV7ySwBSwmkK4VDuNrRN5fvsrAb1ngrUEJEseq4eaHw2Li9JPpPvf2KmCJdMkBRMff1u",
  "key22": "Tt4gp8rwxmcp81qFpWHL4rii95XbMGwKwNbzfBxRJ3EonT4nxH5qiQhqPkNN55BNcuNjzhdJ3Cp3KNkpU1NxcKB",
  "key23": "3a7WeR3GEnY9aYAVNyR31s8REi1abCY1UXDV3qPD7hkkrC1j2cE1UbhwnWvdNfbNivvrRVhgtGhRvuru6YtwkEJ5",
  "key24": "Sa1NCjR6w9bhhQiNgXrP35ww6pWpg3URYQYgQJFXw8JkeMs9tXXoodLNfRcBgCAawDXhVwdx9Lf3jqMZAKmh1a8",
  "key25": "3VtxZddTjTWHpPbLCvZBd3KYqwRArTVKPE92Z3b8NQ1LwC7MHRa67LgV6AjEoMusiof4zvma3ViyCtkQzTZU7UGN",
  "key26": "2kZ7HLpFhinKMPw8BrtHm5FudWT7DhyvbdmvrRKnF5oHCVYqKS6czkqfspchBR4DmhBoZvG13jrkX1At5RczvHYR",
  "key27": "42aCxW8HCuEXKWhRxYnNYSaKtV6ZkC1CuyGinjQVM5dqRQ7fob4f82vsv3UfeiD9c8V9o7p4DQ38d1YXAcRqUFU1",
  "key28": "64EQfB6GEbU82ubmezC1vWdZ5Spz14i1pjRiHWRNZXksFKRie6f42zjDcCwUx7KaggmEqGi1nCQJ5VvZALVG6ZFh"
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
