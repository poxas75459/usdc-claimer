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
    "vwcMHgd8uTGFGw2rrMZknUmXdxqbt7fXvz4Hj7P7v342TeaNPwmuCzJr7cSwyy4kJiMdiAksrkZzr1Next66rKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTxZVVPdcBgYeXb9dRJk7mMaFwuJTLX9iRxzLnyuKLPzkmcaSxarGMvzrdURuRRnHdJRJf2wcbNy2tHWNTsria9",
  "key1": "2Et2t7grHjpJkpg2HTEGSHHGrFAULCipfizeq8N6ZxCUZCq7SU5VvdgjAdXLUQq1mJtyz9bvvDmSkBbh2szWbzvC",
  "key2": "5ya5uQ52YDn2QubpUz4hroQAkSh4Raq48ztTyqMXSBpwWsYc4iUS4oMHrS1Rde8ofE58WKJaUmzKpQceUNp6wPRZ",
  "key3": "3j3r9MaB76EJrDKwTcaCYdnBkk24115qoJ6c9BhrM8BZzp7wwT7wFqWn6nhqCeKurvZ111yVzGX5fNLWSDocMwBH",
  "key4": "YsWoiqaqptJbSbbYuVad7Pb985VnhgsR7KLL7GPonhRrkQTPQBBCKCUrJCor4vZsvBn5QXtParpPhTAc4zJdh9L",
  "key5": "JnTpzNt95rXDZesGGkcMaSRi4Tufh6s1D7fb6ufDgZhWRLVqiBovHjqCkaW3ixXVHeWKGYcvc6e3e7f5cTZmDkJ",
  "key6": "3s8wKntZ8RQvqcCTGzH2ZD2getiBTyZkH7i64qgTws1bKLH5GyzCCHHudMqcNiwWfxedgcJzQopF3j7uTdjjGeKk",
  "key7": "5TXUbPYWZ7panaZT2MBJF5321vasLq1KehaNNRmLZciSUAmpfm3VdPJ1udz48cAqQF64npqh5zz4bGoFcyUwo1Sj",
  "key8": "4ocAdNEy5scMsypKGzw7L2wMZTqV6Z1Z8uPz5Tp4JVPCzV4o8roTfVasDoohot9GW957Ydjk45U5rrj16frztvrD",
  "key9": "8c9WGjBYj51NbGH1gDLDSGh9qaX1VvTGn3nvEH6pGTr4eP2baj5Zm1JNTicsmzZQZNr4JK7F2ucXXX3hv94aoY9",
  "key10": "8snBRGCYCG7njJhUue9SCiHSyRUUu5FL8hkzg291b4cbtAThWMCN8Yrp1mbxKSbU1v9g7XkjNxa4rS3b1hhR4GT",
  "key11": "tdN4dNz5EYCgNUPdChnyxywcauRGswJRrAhCJYQRGaaLEvLRQxvvCya6F2Xdt1RaEqYqM4utuFiadA69bisVP9U",
  "key12": "4P6LNcCgUga1bZfL8FVEMyu156zGrLc7ufxt11vTuWBfcWPfyXZuwjpktoBEZ7Xzw1bvawymJZRrqSTZiNxFdZEr",
  "key13": "2WvAReE8M5K1D1xvJ43FvAQGbPdr7ahFfsikw5TgcGXFR1K3sCFopyX4aqPPDgbBSU7o37tuwsdMKwsD3n8JrxJP",
  "key14": "2UtLDMkMjs6YjTNKZgH69za7J8ZSNYrCBKK2GJt1sAah9kxNHEm3fyVJzN8E6zCDhUhqZ25nCXwaHoSAwanNFZMq",
  "key15": "5Hyg7Cnqm1TtGALC8XcVyr4N6dx4LBNfTU4WRdNyDCUQ78JUZNJgKeMpyV3djNXvD78ubY9R4upouNwxfWQfnuDq",
  "key16": "2TmATd7XDDLrV5xxE1ec5rAuyxGfhhk3H9N2w3Dv7yEMFWoLbQHqVQvtzpP4c2FnhnwSW34DhJK6dfWkYuNYEfeA",
  "key17": "5gkqMVt7iCHrGByZGULD9LVcjmZqPUDvMBusvdHUW68Ns2rhLBZ6f4bQjhg22R6yQBmWjugcvxfEyaTA4FGrUdUR",
  "key18": "4yYmdwJrMHAyNRHAn1oskab6R4Wepe43HAebhuiXEJNo3fR7BuEDeRQ5rvrXRG75KKBa5zPDx55qvxc5QQvhdv11",
  "key19": "cBhVFFWYeMGDJNkSR5AV4rw1yNHUgnANFzBFDWLavziBaMh4X5YADwKCLAcYhm8uq4Q9dUL1dnhint7C6jY4tJf",
  "key20": "hNPdxAdv315hUXriS7SrHsbNY6U3M9i6krzPi4JRFNYpNtB8WpDntieNim4S3nVVAfqV2aJaFGqQCcPSiukF8Ex",
  "key21": "4Stst3h33oDGrxKNdtgpWytpqRGNn5owUVTyBqcKeKR6ybuPwYj8D4MK7G6j27L1DTKSuoE4fzsxRjnnVNUkAbrB",
  "key22": "5wMtrS75oMQ2EPTovUy4MfEp5EfCYgVt84gSqTMD2VfPX1tMt5gVGT8Jsq8pfq7gTzKssNm5rkQRqpp5DeTUUwQk",
  "key23": "bMHF4hPPaZ7SK8VxfnzJCk7fsyY8o2ftqKfAdpDQH5RjaYtztGtaaj6pYs58nhe6kAQBgQXFitxaNJ1vymFbiSU",
  "key24": "7SyRVBTrweLr7vq3WLshpavpZm75wDNeSmSyCRNfUgQvbbymRyw3Yr2RN68BNKdxMwdEUrZzbNcVKUqvuYQa8oW",
  "key25": "3P68cBtyXyvvAgpaiKuLcoPb1fogSV3fusUAPopeGD9fyGoy57yza3QNoBgbwV9JRDTHkEkVb59H5dsactHTAAcA",
  "key26": "3MDo1Waky1hMLwSQrbqRgbrLtjJo2SUqTrTEWxMNkrdTNnMdAM8cEDT4SrwupyGkBKbw2EsnNG9taBbzXdTgnHJg",
  "key27": "3ByxyCaM3NwJ67ZNJXEoxxb1viHtaN95LTUcqFbF8ZEfRyriL7yH5K9wTEJRKdXvSgD79ZDjy6u2Jz3NzPdqJcyG",
  "key28": "3CGM7bZ7SSFV8TDXb5z1qgBeH7DEU7F2oGbVxpi2NPCUzFsbzXY1Lp9DGWj9fzZ6vHGW8EXbCQEccJPnsnnTnq89",
  "key29": "RxYjeT5CC7fPYjmVgACmQTSt97JgqVQkK46pk4gwx183qa7My2F7HJhij41H7UY5dFdinWwfW89iP6oyXobCjGw",
  "key30": "584oxurzpF2hbth9rpGywXMB2SDfJC8yhu5eEvrfPv3H4RvNgw6T1aZFYSKqvV2QQ9FceZcre1M32aXhS1qVmdtg",
  "key31": "5gjLpr4iKqUzZrPK4hTHaFVAuF81agdtuu6mJAKGrCMZRZ3Af5FFTnDvmNy9pmSpcVMV1dNUfrB8VSnXe4hkKydZ",
  "key32": "zhQcq6TSMXGAvNskR7hQzyXcTkMfAWpE1JcKUJUVFzrqxBKy7Jxuvtah8pELHJ9RBnJ7gPzq61XVJ5cp6XNwwVs",
  "key33": "48wN42RrBxjvsjSGskK9XDVTahc1XKz96cxC8khVfpqWnNTLMAjsiJPVQ8U7ZcZciokDF46WCczd3qNpqu51xxqR",
  "key34": "4YC7qRT5barUiKZiuMkSMPeG5pA7vQ7VmmB7wnPTYcRdU7thVNKE7Vtwv3v63FFb25jVAiCryVGX1AJGKT6wFhFU",
  "key35": "4RTtpNApLoNVaDfpyDawJJBZ2oLxQUGKuFMA5x4ALgsVhsVkA6EXm71CC19R8Az5AY5Wxr9hqu6EuD3iMkMQKrYM",
  "key36": "25DRyeZ428dkEM5E6a3JKQKU9Jbkj7PzEhZ4qRdx1Nzr5sfNPZerUybaoBCkAbo85wLBthCZXrbyJ5Ro2hm8DkPv"
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
