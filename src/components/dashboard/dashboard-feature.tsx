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
    "3PikQviC2hNJmNjCncd7uMK8tJLJU7b771rMzaf3AtAPUjSPziykTdnrZpTzoiFHxv22g9ozt8g3fAEqm22yvJxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27eHPTyX8gLdLsLmc7T6qd3wBdYWbTpAWf2g3E1Qn5VnEnMK5ntAFmGicQyNSmMdNXbNsc5L8gBun2zZqphdG2ke",
  "key1": "5QQvE3aMzNnAe47hPN8a4i7Bi6Fgn5TskJkmhojePQTKokdqREqYpK5a7W6CtrzTJdD38oFrk32C5Zs6ZokG2pWx",
  "key2": "3Xbvz244r1WwNvu8vpTexUCr2EiUfvMGEnsU6SpaMQkXHWooFX1fjrC9AJ2xcg2BGjWFChUwVxeDLnMsv8iqUExR",
  "key3": "5WVYvePfoTWqMfFjhqXrbgBAbGHjN5NnBtRZvUsMYb9KnKMEQVwVt6yi7RkDKJyPkenGPLDMv1yyD3NvDAfnY1rb",
  "key4": "24TiS4y9q2kQgmLjanjagfbgTwkXwpQVuNNU2yiRVPQoi2mPSsdKMdfLBPUkFQzALKCrxkohKSrNcfFxWq4ZpZfd",
  "key5": "2m513J6KmkfkZSS9d3s6nkUskE2wAecyxFVEC3Mi1oP9eay3RChgHdw3ZwrBUNUQEsjMfXWkESmSFNrv7X5nDWP2",
  "key6": "5HTUJSSfW38wemLYiHVGZtG3LdexsTGrSTbrSkkHeykSEHAuYw8P9QpJ5LNNjo6TpWUwJSYVBaskLfZfrCaZE39a",
  "key7": "3X9NwL9WJEhJmnJviw7vMhma9Z9rnWfdaq7BLARJGYuQUUAzQybrFTp4k9PaSXzcWACU3i87Eu5sYS91mfkSQy3k",
  "key8": "3BiZyeLtPeGPc7JdqxqhVUEUpQkLvyQgCNjxbUxsRFjpgaxWm1W2L74BL4cXJ7jiUJW9y7cjfkA3sjnSuWcX6xWw",
  "key9": "4tG7YX2PmFGPkcavyrmjF78TguhpQ27p2gb1xYJqzHM2NpWBpsHWdYgfDTcHne4sFiEd4xCEVi4kTuvAXfMWERpb",
  "key10": "3UNXvgHe7Ao6juhWYaXPL45ZYGggkTvhpsh7Tp8VeNcVodtvHdJ13B7vx5zmUC5cZBiDREBsg1bdNBNh43h8gcN",
  "key11": "3vU8hQWatpqBNvFkhVnPPgjmuX63sasQghWE98ziYKF4xBFgxQKqXxYCUZCKaxnA6bWsDjreUK7hGnAYapp5nKVr",
  "key12": "2MWT6u1G8ye8fncgg7qifZMFB24iWC4yzqWfbbScCFGTpiVDbLMEHFTb1we343VpWKxppyCiQbk5D5NKGwsA5W8R",
  "key13": "4T8r3ksZ4H2opMbJHfZJfaavrU1cXiJWBLwmxsHfLu1UEboVUoVbEyVkQWZCGTGoUL92zgKJaUSF5PRLXFkR3xbh",
  "key14": "4HyvH8eCCz3nGuW3zPbBNwwJ9crVnw4Wjzk3iiWTAQ7gUDLLKME1T68ZkWFKPvkrVxwUE4KQdaJ9tRyrNK9rVQBt",
  "key15": "3RbCLMNBDF9hhWdRMDQtfFRouwhUjH2UqRhnPymdgofrmXzHjQWUqAr9qU2u9kf9E9MZ2THSLfmiDtucAqyAJGWZ",
  "key16": "4PubnggM9a8zs2MbkY4fKR1JJJPGXogNfReHsnZ25J1G1Sevc4tsFCvGBdT2YJNgQUNBfsCdH71bo64rkewait8N",
  "key17": "5ZZwJGC4ntKt5nccQGyGZFAmz71dCGzABPkrpushbntULwRPJKoZngvjRTPrVpdN8P6Whsn9Uf5hjHYzDzmeLT2y",
  "key18": "3V29k3P9LVw8gePUZTYGnh5SAobUXa8hP9qNMw1RLtvV223btNVi4MySfMTcreDwnYTtP5iXRnZH7XND3FnJ8NFj",
  "key19": "2vSu7pvSyAyz8a9nbQ3UY85fLtVAYtX5pf4H8xjXAVUunA7kwW3d5Ukyh62TUUUTsQUbKT1BBizjUHigJjVfJVLN",
  "key20": "six1QatLgSiFUmHKyNwJknKfcudgGzBEtyJJqFgr23tkhkCHuRvQCsN2q4wzsEZLifuwMC47BP7HTPHPrqaHdjh",
  "key21": "58QJu3mhEaWx3fsiQYn4xKYnCVxhJ29fhL8c37qeaUrYsJmabhYkZ2CasvuJWR2yAr7yubzBmLYneekmrJ14S5Y2",
  "key22": "4h6mxfzJpTafqMSqRavehGUxpnYd8auECqonNf85xxKcRXQ6TL4x1gN3x8gGjkMs1RrFfvBJF9rU5NrH3fcGZm5q",
  "key23": "541ATMFRoBPp55YDkjf3X2RgPDzLK5aUa74QB39DXj6qD2SoaNen3WSmukERie3AMn3ZKnyWCxrnkqUUa8SKsdVD",
  "key24": "3188sKiGyzfbPsbZBay548xmuU2cE1DppXrnBYU5kF5Tub6y1C3bn6hkQ1vWUsxLU1bj9wdMKGP1aCyPMGKMQ9xw",
  "key25": "376VLL32a3BZkRMPHPSKZcCy2rm9oup7Quy48nT65EtAocsVwv8QWEjdkVkZ1NpHWNcB4byDPF4HC4RjFnamU4v4",
  "key26": "3JtkPDD4gK3w8J5wGhAofGtmTkXMW7hikAq3iF6PnVwTuNFLpMh2nezCGk6S5X9r3762YJ88Qy8H157Fs6PTxz1w",
  "key27": "EEyZnqyHU4xGtysAXj8R9sKV5QwECZtD9oXTZLWDR3R74AbTdBB5qFq9dQuc946gzCJBqaXhjzAekFtZwdWHvbo",
  "key28": "2SvEf6whW9rFVsazBYQLU7YmRiTBJjpwyZ7aw6uWhQj3eRog3ZqqcvuuWNisW6SW8tUytzrG9EAkCnppnifey2WS",
  "key29": "5TKvYgA1upamz1pSttv9njiecEbLFWf9eLZzqybn7ixUL3ksUzRsguuRMmaUoQBpTwg3UJXsc9GiYiZXdWz1EFbv",
  "key30": "26GeTecju4wRE2RwacCiETYh6Wr7eC9mZbU1wWPANweehnTEySLf3zWsgPsKgakJQaQr6vLuV5W6nyJ7Fg83tKzU",
  "key31": "3AcGpHR8okQqF1RAT5ixUNVz9qYtA8se8S2TqjZJxUe7bsPLG6tFv8uH8tPT9jzze8kydBKgRz3mv5gHzfm8i2a8",
  "key32": "5N9Tum8PUGE5gNxkcTPAE4VthFsSSQtWMg4NmnowwvHhWg6MUHZEwMbz4QgaK9cgNSh4cyjYurnyp94nhWMhhkxG",
  "key33": "2gHJUxYtU4chHTMRDvkCcjoP2SDvn4o8mEAWoGff3cePniyfW5gxSefPtz5c5vUVwJFrcVhH3CAVaPeDmfVxxL9a",
  "key34": "5CaD9TFAW4abBXbA92qsmU48aZCr8eG5a71TLExo8XAX2z1r9hVpohewQcdNepZHx3ZdekQth9LxFR5BcfhEvt67",
  "key35": "cayreWfRmgLGToFqjmNP2VDdDY4RCzX8tFApuhBUGXKbnKdsfWv8sE1U14WogKtMeErzwJGu6rka1N6uyZcdjnp",
  "key36": "yMXQ2rHNJGsDSURtDwxgALJMLDpN6mXoKpMivo8YPn96J4eM5b7z93VgSGpUi6Hh8MyWoghS2LNMHptEJuVqWN9",
  "key37": "2CFkMCe7YZ18mtU12nNCvJyYmR7XThXFCkh2ghg6zrW1FbkAPwRwjLDuywPzDKxy8YyFcm1SjJ57et6mmdB1JdrL",
  "key38": "5TjyBFb3LDJWzpsFT3Fnm1zmqw6UnXQ8R5AS2kU3RRT5JVzvA6PNLuWBRbPbNFkCeexirgPjKni7yJSr28KTL3fs",
  "key39": "5tJgQm3nhv2iV9RzQWC5m1om45DiPCQpUYvFcPr3kfMAtgMcyQzorzbocSTWVTbYoYy4DGbPERjNvJomachwM8yp",
  "key40": "33Sz7dsm5QFZhu25t8KYL2eArQESUUF1krjK2uZAFRQg7xmP2ePzg7Ls9aQafgMC5Ghn8MNLkizbAotrsoDay1e4",
  "key41": "3ikoVEfd2tqVh98B3efGVgPfqdmCvu6fX5dNNFjUXzNXYykoio4iC44VCz95nAF9YLh2wCQFfwePesxVJhcntGGb",
  "key42": "2oJwLjHeSZ3mRPJGQi9EqLHMQ8Fuje1n4r2Xi4aoHGmug7CKRRzx94Ef5bzEPY7uaxqtbmrprQDjmm7BZ8MvEjBn",
  "key43": "63KCKCQjbgjvg9a31TDtxk8vg9vVivn8Zuh5QQc1AUuAFvKkxBohtMGfjw7r2E7imKAGieMTe9fGBRbHUCrvGF2N",
  "key44": "2sUjVfNx8bvJ7jkX8prbp9UkuPtzfEbxcLNC3WACL9grxKFoK8Kq2xRMumJKmfG4tKWQY3zC5uufaGZnRZDdtzdA",
  "key45": "217C1V1fg4X512NCTs8FeWM2tbnEmh5Cjy5QPZbQceR41WaCzjV6iF39YNdL1xGhb3cgCokBmvnU9CDtnYe4Eb43",
  "key46": "3mySfTXsvdeMAaoho1iGmeTYDcYZU7QHPuzjhAXK3RhJjwSxnv9fwjvb83cXiS4itbdLZFet9nWBaJBLRUjwikAF",
  "key47": "GBqN25JXRC6mJL4f794mERfsPtf1JT8euVeiWG8M8ULKPPuEDRiW2LbS9dQk9VhYKWVdgHLhJzT2MbMaiRPJCfF"
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
