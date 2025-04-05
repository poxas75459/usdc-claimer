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
    "3W6eJXhgJw5vapaJyoJWQYBaQ6goC5p6GGPSA6fPKKVN74yAmrqURjzaDR1hxe1LpeViErdMaBZQHRvGQ6h74hy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bYuvzCxi21zTLvJn5o3DWEXmDptxu4iPZTAPBHh2DjQzDf45avJTTTr5rswaF7qcS7xNVLozPgK7gB8kLMj31ZH",
  "key1": "3CdREqL6Ng1ZAs7uUqe1VcqyPxcjVCDgsy9NVhQXC5EfuWUzaho4RX6r1RY83oTBtFxfcAiH4BQ5EtHun7T7nf5F",
  "key2": "2AfqfDJbAQ3r34UBWDQ2qrjStRA4SLmJCV3tmp3kJXhjPo3ADSc7XFDoL8NVj8CXgkQzGDofyTAovLy62guQFUPx",
  "key3": "98dc3UUHpS8kpR19JJXywrEaAFAiVF7ANe17wG7bxNfJtXQB2ts6z2SBqG6Joix5gDpZMcq4d5SVgo4eS5ZQs6n",
  "key4": "QSMgLPc9KAWVnYPH5ZJXmwSj1JGdPvWyRMrLwirhmgBUaEvvqCL7Cp9z31XdNxBA3pCmdY2Dko27AaNHibsujvu",
  "key5": "2YxfXyPDifzxqhb8ve2M3e57wFexiRPxGm8LDUgc7dUD8JTYMZ6TA6yH3sJsibgCoocRcMquDjTjTHY4NYHwN16E",
  "key6": "5ybT1JJham44tt5m9sBhEt3ACCRoXNtEUcsT7PqUuGCk86trR5wX14LfVbAmqtEpP3S6n9Ddbse4MFTDKY83xEkR",
  "key7": "2cqX2BaCgB99XL9VrRiP1Cgqug8ZYALRxpUBfaTT7q3X3g5XxRNuysX3cZWdWWpRDy4E4Bk4u3eBVM3YmueQKpbQ",
  "key8": "2oX8WGs5dnYWnLhVVzLMH6QtX9Mgm2wTuYV64w2d1eb9atQ43T2n5oGJ1pS64RxfPFkY6Y4TdG3EqmxJvSW1H7uf",
  "key9": "4DTzSzrXXH7Ji2ydCGPRNYKTTmrDhrA7EmGvntR6RejrxAdsb91BHwvL8B4kxm9ueGvtnGzqFTpiAA5W1FrHrpBp",
  "key10": "3JmNxggfAD5FEpLKMtXQmYTNJgMHY7Z3j2ApHNZCjVTGEfe5DocGRzEeLu8wPLsj4qsdnxCtqq9ZUruNb7byHMLd",
  "key11": "3aQbo49ZXSP6AGYXgaYNEeBinyFnkjP39Y6Y1G2Ed4YoRHMrHbNaahmNUxYbB1HceK32HMNEGn3LRHMnenWrvUxK",
  "key12": "5yTJiEyi9hh4zWYgbakmmu3AJZqoGTcaVfxfKokr13KgEFg7PS343f87V1Ftcdv3g6TV3KoUDq1obvrQzLqacY2",
  "key13": "2C4w9o7uCvpjN9rePbFpzxjMBbhnV8owhshDRmsDzfLVkqioFDsNfnqhkUQeK8QnPLGfE842sqERNMRGQsyCdThy",
  "key14": "5yVdM7scb3AxxL9ADUQg5QxqGwXNcGZC58BSRiJb7VimKfopWehzCgKDNTYGLBydsudGkqUUJFAxxaQXLa4X8vFN",
  "key15": "3jGwQnnCd9a3PRePDxbhprTrW5rwbiAV8v9BZgaVngHUtgA6gyvrU2dRDiSeUsatu2cZcYLWRTtQ66R9UB7hNLNr",
  "key16": "4bndPk98jpTmFyLvdtCSa2JNW3RD6CGTRPn453uaSu5fKLri2yYftd2qxbVngU3QVXRHetEdzUdy56mzNBXUQHiH",
  "key17": "2WsvafWKDLYVeTrpRYTSXA5Ex9rbhfokAZ37ySLJDcXkSLhv4VX9rZxuiWQ4hVyDyyVysCmN5oDkQarbAJwePrmG",
  "key18": "4d6L5vNqBsJguW79VN19URBHs3RqfGm5hzNQBtHg6q9AHTxp5HfQVa4brLyeWcaL9MYYJXmfBfZcFyBYpmmus6Pa",
  "key19": "aiv7VJwVTrvJ9HzkAkW3FF4x6GQifneM1DdPhd2QqLX8nmaVvWQotQJy166kZfJ6o4mKKbPAuZjrfp4fMNSUL8a",
  "key20": "warVqXSitSj2wEDebSb8w39e7LNAAVWXUtzWkwCK54PGwiPUXEsgJpYCm8Hz14cfqA3WmdMPabGkguYAUs3TDia",
  "key21": "22zqboZ2D29chTAKVGvtZVAjm2jEiow3VXqbYaCqB1YGgVFRjBJfkD4tExjqiy3YHcVMVNP3HnuMGJMuPaaWkEp2",
  "key22": "5xG6kDKLZLqJgcHp1iUNiQP5CUUDFSHVkQ5pEYxQqERyjZ3a1vu45iKGAijNXKnUHzDD4JxMKq6wo1eKKmA9nauq",
  "key23": "4eSUx4gHmCVUZSMbYXiZVWdRUYbXrqvCYz3Z7PWzRYQ7tyh6x8VC19zfXc3eZTqdLFpq5ckfbvwVaKmhFiX3r1wr",
  "key24": "PKsTYxX3nfaqNk4CUQeQDQLgT61hC3eJs3UV3JdA6PFG3bHszW8uftRa16wgWpieFv6cLU26qcGA5sut4KomHtK",
  "key25": "5cewijyidWhiFzEPmb3WCpWQMoFZRDcJ8tLLhVWE8xvZdx4CfVawo2TVTCw4egx6yjVSxWxjfYj3SQDXytnZRb9o",
  "key26": "3KV6v6uGbGnGkp62hUSc1jkD2eGZNS2dHmZYPEskHxffdhiYfARiVLr4SepwNA94EUseVmoHSFAg7HXNW7hqrkv1",
  "key27": "rKjU8XbHapMUaiexAYqFV95a24RKj7sTY1mMYPniNz2VGJbY2MJ3ZXnEWSrrBeUAPt6rK2jawqBkcRrhbcRBZW9",
  "key28": "33tGjMfjEN6HQd5MDTbqqL2YRgY2UUcmriAebma8M3gXhTaa9RCmJaQ7TALV4t97StNf5PK51JV8p73cvmDNDU9K",
  "key29": "3F7BtyaSDyJWFoW3sPGv4QMkD8uwm8uZ4NRkLJKf1zJ8NX9jLha1UN1N8d7yPSHzSLg4fAiFmFXaAWZ9bn7CzHH1"
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
