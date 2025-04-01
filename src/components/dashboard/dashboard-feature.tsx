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
    "2kNtMMeNxSmWyk8K3K6BQjqAVo3T9fQ7vBZdnEe7mx7LQmuzhnEnQJ82MpVWqzA5ZkdbR525pmJPvLFF2Yoxcc9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GWAQD7oAMcMaZwd8dDWDPmVtzcUgiFZFbYBsHCwVMH9c3Ru9yM3NUpLc99HeLstEcSusNqJGmk3m3p18v33sW7V",
  "key1": "2EQBbUiXEZt7a91zt2Zb2JRMYQFoVhvLDyYAkfT35cwm1r9wwgVP9PajxumjgPh7HPVSc7Lz8xFpmvPcoDn6t6XN",
  "key2": "5KH99fnxcng7mSq4NXevn7ckragsCNfoQJxPeEottHRL9mW6r6mbuGEZ1QsBmZdW8PuCnJskPHEcJqZysb7CFvfq",
  "key3": "3of418nYHqRML1ALNqdAjjrYtXezssGpbjaT4C6Q5pVNATjkNVK2Bi1LmFbK7TSMDkjJ1TXZrTs9azmdhCsuo3JD",
  "key4": "2fY4vsVafmRmQUWLtu2ff9qe8X3k8MDoRG9MKix4knVRMp8jncDPwRrmJ37WwthEequs1TeSS7BmsHDmwY23Rn4b",
  "key5": "3BMyYStPd1HRQZ3rneBB1VE9hcvY6aneeBqmnfPa8APR4WS3gfkuLu4bBh3SLibbcxJbRQ3E1iakuzYX8Fqt6ERm",
  "key6": "5WSdnD5VN8PP2TRjTnrGPS8FY9RN3wP8XBEY3MkAm6sRGEFpQsz7rBKKr2kxd2aEhNkBrLKdAcs8a2vANTvb2C8y",
  "key7": "BgZtkTBujHjKBzVoJTBhct9vEAZRB9VWMVX98unQ8xhk3hpzJa6NZRU1t2WF538Q2QxFeM4CUkwVFxtihS2ByV1",
  "key8": "2NBns1qvXXz7jziBiA3zW4xxzVyn8z3ZJoJSsHr9D7CijXABY1ncJPbwYXTwKHqhx6Hj2MFksi7BDaruKHdsZVyd",
  "key9": "29qEr4iortGehgyfCLrbsLDZToHkdKUGxusnfz8rZH7nVubin2iRGW7dUuaeX37JaQk7tS524KBuzT48484LvLeP",
  "key10": "4KVF23KTaUwT1AxxZ8CgW969DfRRLXFBF7hDkNKq9VBidMXJ8a4vSnbpdP5eeLzhK8B5kKGSTK9MqUAQEJoJN1o6",
  "key11": "A3Z6dQQfKeBp41Pe32pnxS8S1QwWrmYrvchfwQaYVfzYgFtMmMrQXTNFWvdPuEKv8xbG1TKGQoR1fQkRfEfWwWz",
  "key12": "3H28XVYKoBho6Pwyb7gQvKrTG7ScNRrs3QqPmg27Q11kk1xTqxpH9MeJKuwNDnYjgqjAoC5PzSxDdfapoZCRJRLj",
  "key13": "3CFt1oabLFrikzaSDZ38hnPKzoGD8HV68YNkj47ch8JNqqiJRtAnRLiDPUnXwVD8jAF3EerFRtNUKcUyN6gLsM6n",
  "key14": "jq4ugwWohfGGyvaBwTDfYFSGmKBnnfuUj2orLPx7uxdx6zg1c3mo7UiyE71vPzfA2xnoCVraDU1E4vh6GNVVUAV",
  "key15": "32fe4q26WFpLjAayNvaZfHoNWAY8zbJSwj4coxavTHpYEQZbxNPQpDeLs2Rq1zA2JfKu1FfvAYGRMozc1BWjxi5M",
  "key16": "5iHKvPsQbL4ojhGwJdAHZYSZv9jVFfydhXvj47vjeap5D4h9xMfKCoobM1AyvdoZLtyaN1cjGQV1eaXfu5aTPWUt",
  "key17": "41jpgRpYsKXemJyziLZZi1pp2SbLLPuPtHucM7495diaE4HziQgi5WvL5Ty8LF4oPidpHJ2BDtbRKFjiE9kvkMF2",
  "key18": "4G7iB6zi8SULYsx8WUphmCHMfgntV12avigWajtVLi8gGoiGjSX9FZijgGmLQP5J8LHHHDaYSBjTgsHXEWQXrVc1",
  "key19": "3cwg6KZzzrF3YHZyaiHFT6Fni4qjwkHm5xPAcMWgDYVquDH7eStq5ThYz9zAy8Zd32queNVtGeCSfS2t39pH8HAj",
  "key20": "5Dwigm99qfC4DFvVbkJkCecvNYVY7bsWn3k87XKCp5qhhX2xiMDjaM6cEnqz78LLEc635usfQQTS2hgyyEgJAtjy",
  "key21": "2c2J6Z5NmSFNe5PQBEdMTGSwn4ckKj59hKbzzWqwfs6WgNaTdFFoMV7ZucYQA66FeVSUFACVY6XSDjLJCdkmv9nM",
  "key22": "2DRH5BBEKkYDQRprj57ULTe8cxtAc29uFpsSvooyxFUxtueHGDpWQeYm21Qg9p3oZMcAhmGrWb8B3HwAiag4FPyL",
  "key23": "2rzHZ5nhqS8DdMjDEhBqyfi6xoHUSK3d83Am9AmpUkWwzSGbcjQCpoPv2JGCaTwKFVk5NyEr6U65WeESiJ6WtKWk",
  "key24": "2zwP8MPL55xxq9fo5PXqxsdWk5UbFAar4DKgc5WEf7EtZW4ZUZPDHDAvzzFH92aBQPi4FVCfiShVMQPsWqBntz6i",
  "key25": "26sSczZFCPJK8qkvxTPpgPXLZCgaTd7cbVPBgeNwzXHUM2zSbua1fxY5nqc5QwCheFwNqrqGP5WcJk5DBHBU7gy9",
  "key26": "4zeezP53SC1v7NgC495WmNcuci2nEeq5JCyBaX8UhtuWahFbeN6uBXKTyZLgx3kgLyHPMVuQRuPtVSUHq4p6quJu",
  "key27": "2hVdKbixcCpYqF4jm2X8wA2FXpPkkiQsmym1mKnPvjgyU4MWdqRbciRqdLFkbqwGA3dNTu3ABDfNRXPDiMqtxYg4",
  "key28": "3QHAoKdyfTyCkuDZqdgA2wkKbS7TUwUWq4v9K9RWC3VGdHcY5ftv1xeeoQDwKRpmFprdD5gLWe2TkVAREm1MceJF",
  "key29": "4c2ph2MQVgcDXGVV2xKFGASparjPjijAqSv6rNiJSpLK8cTCo1Ger6ec76jchihoWJ2STckpbK1N85buAHpYhBSM",
  "key30": "4CF13bVKzhYhUUUMRWNSe6CoEWMifQMpYBU39c8KNBNQU2XEXs7gjiGpwX1HhsDtAdZiUjYdET3D73yHN7vTrGbM",
  "key31": "4pVBBSGssDaL3tDBK5NpTTNh7ytCHTgqjzCDjkMetpHoZ7Ut93iKpuzyWr4F1sdvtA5JSqF95ii43ChQT5CFsX3V",
  "key32": "3fgpLrTVEomiKxWqAEC76zBCzf5T9PSWcyXWoTDmPvVM5cgxiXd2quv5mu5RhRqBmA2DY5rDJWcshnBkyhuYZVwM",
  "key33": "49JYRdCGPLpsZqApAe7gf32RnjWhhSs5UVhgyLrqxt4GEJykURcvrg6B5zSNn7RHRQ99p7orYQM1TCm5xyHnVF5L",
  "key34": "KTkeXKav9P8rdcMwCbatwPVXxT6VVtugbTyyX2nqbgatn5kDxGVQtPkeTKvfttvSd4hjCHy42P2SYN9NPunTs5G",
  "key35": "4k1jRxxefsWhg5ackbVV9XMt8iEedTLh255sRphsNj82diDY9p653KDuADyrsEwrhVvLmsZvQjp5LfmEqvNMoTuN",
  "key36": "4CcWcuWVkuSLc4M1KWdWU1LKtUM6P1vDeBTT7aQGwGs69rbxuimTb7Y2xsqUYxXGABu4pkELpzd6avG1gUWqCUH5",
  "key37": "3FdPJZYKYmYo6J9kEjAyQtA9iteqfyaveSMAeHGcyjgDHPqQbWeFEWsCQzWyWbKHGJXnGqk5BzJ6JLP4hTtDVNt5",
  "key38": "3KotdWtM5nRpwroekLYN6nntV2gXNZeD5qSq23JFXWePyh2Nhtt8YC1GPziAeSdRSHqXHbPUvHgFeFrXhQFAwYsM",
  "key39": "ruqgJfd2JZxRt6cgbxeVjxJQf74dCtnShGRWTuPDkcyvwPhAGps14oXhcXALhud7PmwX4kaW1wsX1FYGw8kieUb"
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
