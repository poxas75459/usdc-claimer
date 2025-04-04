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
    "3NeUjDMPcyKjfq6XbhqBshT7SukM5NtqWt1kUsPQUjhgA6SZmPu9GEsmS2FuVuUazqEMquYcCRVhkMfJYHJPEDh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qcVtnKuRjL6ek48qRCnMEnFqYQ7ZRZVFgpfJnJ5hiAeMyaXQf5MBCrVg3BpTynNTHaeyE4yJ3Vqoa9yuwoCDZGa",
  "key1": "K1Zq91duoADpBrDsHwK63xstyeVc8gpMHZcTX5RxdC3EU3qv2UHXeSLRSZ3XqpZmiWbAF3dqcFR3BmJBsw9NA7p",
  "key2": "2ebf727uZKicPbBBrsmSmh8wEDQi8feBmudZ1MqwMoiFeQpzCkCBMXKeDm15jhygzt2UckRagtBZd4LCLMU9dir9",
  "key3": "1258TpLS42ukCijQSKWfWBfCTRibsDFbRU6gMxAYmuqvZh9A6ngCPcE3CjC7J2zwgjd6uSoMm4tDvDBTfVpf5r4i",
  "key4": "Cb6cie7vv2XgyD55j5LRCevoiR88y1ijcQNZaBubuuwggacK9b2NBenqwtWKUyejmmYm4i3W5wefTp4f4ER3HCL",
  "key5": "4RuEeZhBXpsu7oMMY8kTPDiB3keJk7PFybusgxs5gJcNin8qGKmRJJoHeiPJe3d25adCQVcA8AwwpA6bRDNzBGwq",
  "key6": "3dqoErTufkcVCdZXdgUwhFEh4TkfCJrKYHU3zxkM5ytJieoEBrHFjucnbdDEXnsYh1wrGAySi3hZQvsUbgfKMAv5",
  "key7": "4uqfh9Symw5X6PfZGJEqyV4qC5paD82tycAuXyksnKJS8WssEU5apjvv7GbKtUv8fJMv3vr49LMiarEiwaETXpLe",
  "key8": "BGQTtHcBvd8hiSYmBPfUtGX6HLH3TGsfAyGfNgWWAeUefKMYpAJV2b3SFstCbuPkyMbzjMCo1bFA7418twLmKRg",
  "key9": "RebPMujc7sW3qT8B4b7o1ZjZh9yrpkVY2HviRPGu6NQd8a9f2b4RHFXLHqMy7ZZPCXoFaGjWqqSMigDtm45wMZu",
  "key10": "3W8j7sYdqiFwFbGmfkhoqLh3nzPymbHxDRuqokU4JaNytCAPSpMewtdoa7mSZDMnXQxTnT66uXs9rNFKewpihRxw",
  "key11": "3qQz4fX5Ze5Lbay4a22jvVo2hSHnjGdMoqbeBFmVmWSE9CBcUuckcLPbzNZTGtFmyKmvB41j4Z4DhbkSUUBRTSdB",
  "key12": "2QmDXFimZWJVsw9Th2zEpJqMhbmPrdKQHFRoefc8uZbbaWKbZKzrwgKRQcriQEPgcQGmZwtJHNt9yJJ8G5QrxNQG",
  "key13": "3SZDoaNqUxLVwBPdyrRUx9p8bwPFKqzw5snFXRek4Xo7NJ5cabYJCWSkJkaFsbCDjboefCzPqWkMUPBkHJdf29GB",
  "key14": "snodjWF6mgG8X1EAhAgvcPFaDkxu8xdX1Toczf9uRuEb28dBuPyXGRQPpHfTRMeux448MR1JZENL4vfdsFvToc1",
  "key15": "5z1p1zs9viavSMxyAeZJGWxi6pGU59Ao1xviT1bTyKApZGN9F7ZFCLGD5kauepUQHwaSsUMeP6AirDGsDkYfH2cs",
  "key16": "5NgGwEGezgPn6yPuNGTtdULUNS4daYjk9uLJ1jmmhAYdkXSoSdiM775PuRCFzVioMQYvCk8Pd8oeoBF5ZNChsrvY",
  "key17": "4q3SCG7nQhFi7nFnoQKoDaSGTTEsUQZptZEzrXX8bE6GchNxtbwh9XkcwEkHsUh8o3ZHhm3jvUnvkBFK8DvyU39C",
  "key18": "2Lwh9ogPYFwQv6XVSCm1sWsja6GKv63QaqmBUbXHF7UjvGLyKcU5bPojnx8jgmQofoRhuk6gdnV6WG28onew3k2b",
  "key19": "5gGFoCPgP2xfaTNBQcSH1gM6XXgNiN6pur1NHyB1JHPPdw2MgyBfwL32Wmc2eC1mdw9LPF3R95cXsq8K2M7W77qx",
  "key20": "B6RNvHuqJr3YVtd8H3LtQFt47aPDack2XBdiBJQ3hYAp4cN2NchCJJm6KMrJw9XELCAvxGz11dgNEGEZVEg2VBx",
  "key21": "9boqpYuGaTjNTXV5qb37yPiiMF5SJbEwvKkdAwE9SgZmUqBMKGYkGfRdpatKcxUrrqk86S5PMPAYHnvTEodjQ1f",
  "key22": "34anEqXapZ7yb14Wr7jjWzMY2BCAj9s1fv3vuE5bFdCdWzQq8ZA4kymSYtjqXiQyutUjgTK6TRj9gvkbE9K6JEyj",
  "key23": "467sghkChV4RmgcLWBQYCh2FKaQqsePb9yBd632HfsNpgymEdJU4i744Dqyi4FmPm6hMsEQZB41KxL4B7o1eWkWs",
  "key24": "YA3FonKHTrnHwhsSXE9yZJJ7Yi3ier769CVnH5eXYR78aGjtbTYKVCYEoFgEZ9LCdcnSSaCCDtH5nJ1xoEe641h",
  "key25": "2cxZ5AfCwJ9VqFqjVmUqyaiSL46Qr5WoPcGWCvUgVED8SDpAeCrEt4Da4gbhaxoVUHsfwXjQHtjrPxzrCA6VyX1Y",
  "key26": "2UsMTNL3aB8H1z5JpWrRh8F9XhjZmZJEvHBdoLecwQibuTKC1PiBnSnTSgSQjfmaSTZM98EcVocfUViobfSsyBwc",
  "key27": "85weUM9rFxFj2U772wH9zUHw7egMULR7RgXriPwsXvsCi3No21QaKo7wiDgoBGLfQa3qn2BHo75tzBacNtJ74Hj",
  "key28": "4f7z8hk4yhtCM1JoPHwFRxYQwopicM3qpdjkf3YeJBbh5g4sRpDE2zAmAKn21yCs6QiwwB8MVfpAZMQxzQY1aG4H",
  "key29": "cm9vH7injTZvoduaLjy7VsZofT374FJvvkmwZXAJq7Ez43yThyfk4PfJKfNSFCH9pHftYqjMUxmotuzfwsuyVdC",
  "key30": "4jVaQBty5duk1oJsXsT47pu9kNFyHwA9YVj9psPDS2ScG61qSNBiGsKdKKybr7M2X3htcvo16pe5VCYjj8M72Dgk",
  "key31": "5hwzokqqtGEYNWYQauRopmW9QS44UZk1PQ3geV6JWnaM54SyFQz9hCqHceKaLVQGinVYmT9awyz6mMPRHmSxVMwZ",
  "key32": "oc4Qe5iHRfdSYKY93bpD5tPsU4eWFxeRn465v8QusGVhCdKACemAhBNYjeeufM3vyG4W4zJj3YYKcxBnfWDd3mm",
  "key33": "32XRbXFxfWf7ybgqGmctzBZ1cnuR8xRTrSgExB1JitmX7eGpnPwCjCYtvP6JSHZAJ3Mfc8uMtjVnv69QccMXeQJk",
  "key34": "45uNZN46owqVGng2SVVbTNm4A1j4WXFkyYpLdpArrx4u2ABbJfiL4PqjLuqJwmsk4cwabStGcRLc5KmZ2vGKvvT3",
  "key35": "3iQuYxPTU2zPfyktEZGpeWJCtpW3MMRw2KTFt3PNaRNWsj8gF3jt4oeAnPWdzYrspUarTM66D74fr8BZzkAMP1XG"
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
