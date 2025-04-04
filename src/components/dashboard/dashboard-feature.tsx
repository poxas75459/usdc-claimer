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
    "VuABGfEcwDEr9t3jbC2zY97X2fVMjci51atwiXgkWoDKJbMKXYBj1g7CfukCo1FToTR78Xgh7uqbTBaFmNDhezi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36srPSVBFRw2AyhdWGVLYeLWR9c1i1dq3f1DghPQ5VefEMnFMSrYvcZ3nssXqjuAitExp1vnDCeNF9oKYhVQHGeq",
  "key1": "4vyrB3qoCSstWDd8FJQzsmhwmxboApMfoV54t4vWRp1SGWnr8EpjhuKGDWY4mYwL8eGP5kRPTjKxtzP6vNdYA25z",
  "key2": "3d6sNBppcywCEpwSTGWaiFYSLBbYasYSAarJLNNfvSmiTkj3G6cnZdAs8C4y3yYyvBBGb2UF9rdkwPkbriBGJNHA",
  "key3": "5BdD8jemQH5RoPssCKxMNY3V7JLabuqcGuSoo9CsQHAHyx9eFFsQ7Wi1dHMKb4mYsvZWsMYeVkb6QZRwDguJejeR",
  "key4": "5CBLv96BWaiXZxRHC6n6NKL6ekVJKECKiqvoVAhKYmTAjvLamfyyWeg2inyzJTPtAxPvLe8yEUKp3Y21V5GCvbxE",
  "key5": "2sSuMrdr3yabBpe1viPVhQ6acTMNUg9JFoV16YL3PgLtCwmjYvxaGrouot7kDk2FYcfWTLGRuwTbzHNxBa49Dpef",
  "key6": "3Q5suKEJpWPN9pTgE8RjQRjqVUzdJZ7Jcwa1hheKhEhE1PDdVDJ5Sd7pun6KjUUCBbfM3dj4YFmTLQfDYgq3Wpgn",
  "key7": "3nTDqy4Mmu215H3jLskoDJEkRwEMSUq6LMYdXkdK1uDAKCcj9SfY1coweEdgVwX5Wz96JkWrkVwyQ4dPFJoemZoP",
  "key8": "2aYvt6ByoYNiNKPbBzcFbEhnwXhJFTied7cS7JFzbywrigNqCiamH8FJRoR11RZwxay4quwgJLLeEQHtwGQmBzXo",
  "key9": "5JqCmRaCW4tdgUrApHz7LdhqJRXSVJjPxx2RfdJZa5rNanTJp8ZAepMJ68B6dXNGnMwMGfWPGhFTUF15z2iWAVoT",
  "key10": "4vnjCTUpBaTMPAqmbzWumPp8VM1JXyPv6a1zXWdHXM5noSiEgRmaeG8xrbq9ChXggpw94BjA7KoLUMP6weNQ25XX",
  "key11": "3VWiHC8WzfLEAVFUww9j1L7ZLr1mVHjquwGAgSQTewULU9c1fY1D5h95EZe1tUy7u5hYs8vaMqxXACRcsnRy9GdE",
  "key12": "3AK6nwdR8KkPb1zqN9apn9zcvXSfe6utJTyLAF2ANrksv7DUtsdPp7nFSjK8zhqgvfJ4ss4SXfzFDdMYWb4HpFzG",
  "key13": "5QDmw24rMXKJasop45UA6j1Uq8DhiYK1gXbJr26rRwsdXjfywnizCwoJc6gTJbkj2EaZHaNBfWNMzMPz2eE6Krdf",
  "key14": "a3ek55BEKti17y7192GUtsp2sWXQ8W4EZizK7xyoZT7ZVYGQz5FMtVt9Fb7PTkRAGLMDLdVGkXeNDGbkmuaxpJs",
  "key15": "3xnakmAK8p3FJ5Jc5pgXGiz43Q1B8yjve3aqBCxvev4ZHiZWyE5t6XehETDupsESakf6xRun5gtpPi1gfgSuHr71",
  "key16": "3cTJeE1CjTqENd4d19vRuqFnAQciwSk9MkYNUwGjs3HQtYbK7KvzuVVz3RMEdgvhAJonEAmfwSALBmcu8seEcqft",
  "key17": "3VNnDMAiSvsbhgCLBpaeBqAa25uc7kFThPfsz5cU6oMDb3rt9xYAru9Led2bAAyoSiQdwxY6jWY7hz8Rgt1vYJYK",
  "key18": "2L8DFJ4V67jUh6pCHKzkZfoNp1Q6CH9SQekzJr61JcaxcusEQyB7unxEVWV2tiXDALhKcVg4VQxC5hcYM7kGj1Rq",
  "key19": "3HPcMUZaxPJLRt4ZNHdB6Vwzge8qco1vnWysLE5uqD8YBr4PebJTPKWRKcrHgewtpP1G4QEEifQwaPha9EUyaPLn",
  "key20": "3Weurg1EX6rMfkeuV4TPVTkYZDRvVz324ALYNgQbzfihqa1bJqG7QnFYEfqqRPkB5WMLMvruLXVMYnHg8hwWbViH",
  "key21": "5KE1eytfmtEwv25yHDS2MJ8wavDrUd22qB7ieHH2T5GoVXFTebC3DjX5NRniGjL2HQRGyiofxmkxdutbF75LTypN",
  "key22": "FZaBYhgzcJxgoNgMeEdU2vauBNkgUVavihoZoDHF4fqQLPijynxdigVxfH7M5zdNSyyU3eMo5Tz83pvKrC1ygLB",
  "key23": "3cPLTBi5ZJazbbUoQma5xLtcvXQEXcmytSunE4ELzg8pqAGpZb2ZA19Hfyz4jrucG5DiYMiyXX7AijK9bRrsJw6g",
  "key24": "21FHNMJZrGHgWkp2VxwuFYSfzWrg9eUHBB2WHA1LQczfReXDxArKEpq7AyRYAUTGXSfVrS5CCR2pg7wCaY23yfkB",
  "key25": "4CGm2sV9w7nwp45ZSBXy35YoeQZ6RK7nj3un8TMv2sD8BtfLxPYrg7aq9QiBrBQkuqwRWpqZMHvj5dTyapm5PtaG",
  "key26": "ipGE1P43eUFkSuYsbuBNPNsiji6XqFV8z3yYVmMyw4KwjreYL3HtEhkgedrFCNsCHRmBiAxuggnX19jtpji4PQo",
  "key27": "2QDUPzpFQ2KdaRtmk6Dqb9yaUotp4gVmnbYNqFvQfK1Xe8Z9AdeD8ryV4srQy9prnXXmT2iLE8j9R8TrE9Fro35M",
  "key28": "4LyEJkQPbvsUT36eEPNDbG8dJ9PB5LQYYtAn92C4oXQDWyW7AqwhRZfK4rMbWtNiut8FycLUtjtHSs4d4j7kPjWZ",
  "key29": "3xb3ScrD5uLk2qFZHGX99hGtfiQ5BDShKLcRTQwmWaN8MYovH5QUTHyo6KLoy68Axx7NVyjdc3PAxstqvfzzmhCe",
  "key30": "3YT9shGdMAMEyA6SiTZ7UfH8um6D8hneXGpGW3MC4QifzuTwDSuNYoatEib185pAYpr9rpwgffirwXXRcxqAGN6i",
  "key31": "4Web13xqksDf8obWkHxCpgpHmmeCbm5CCftSDQaJ9VWqpPZm7iGngFE8XSp1ZFKo27BbH6PdYfoSisYwoCj5vPEW",
  "key32": "3d7knJwF7jARH5PoxXJ2xFGiMXDKNC9tvfJUBvGphNZTvFvu7d8wyS4uiJ9R8u8232TPuWjZe78mhsXEQsDvjwFw",
  "key33": "4BLG7o91pfKUHncW1gVivdGBTgqvZomKegL8FD9TGSK3qpVxd5dt71hg3KNA1njGQxpp6JT36Bzzr8cVwdzvPQtG",
  "key34": "43adib6ereseFQsi6ciaqe5zdXvTmhgFxfpsPYjUMe4KZ79jjQUmM6LdkeYTQN8UdVmtUA5z63Cg8bDB1cJmvY41"
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
