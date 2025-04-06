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
    "4A96yVs1L8MWtjf8ftHvjUVoCThSisrNBBce4WeG4H1PEKQdGWTqyLQ81Nfqk8oBLK9RZmMVEW3u1Ht3LSWKeZRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53pi4ejYcHEXXKiELsEUyEaeBXU2UrYSKEucMR1EkQb5iN68fDmCYsfsHkW7brLx4sKCrE2eUGjXrNLuD8bgHbvZ",
  "key1": "5ZUPwdkMnnjVKn6EcS1Mr4ADUCU82jRrVx7DTwtgtyLhEv65N38GiKR65T4wxdodCsgUqqjJMctpzXdmHKEFdeMQ",
  "key2": "4TWTkqtiGXvo3VGRZ3hiaRD33WAhNjSSv9oei2tuxEsba9MsKczNWvTnomkZR3NZdcr7zCoRKLEJipvRwTMMjowa",
  "key3": "5HLxkEvBH2zeVycyC6jkE9fSctswpgNrEc2kTLmgcFHaGhfZecnaAoGhhpHFHpQyTy5WcbVHvQSsCibUrPM9xV5C",
  "key4": "4C4guffTHhFRA7W1uwmZMmHeMmf6oZZTNF1zmmxhqgGC3Vi5Tc4MSFxdBkofUy2ntTdBuG9AAwCyJz5tk7tzgqHi",
  "key5": "3pEX8N1UEGoV2yraBRvkLD2hz8WG7aaJ6jg6haGpNQPP8XnV5zGrdsBATgv7TY1LifwoVm7CHi2jhbk3CgdrJGPX",
  "key6": "2RKuikQH9c8sUhrFjNJwn6gohxGMECcZA99NkLFzicV8xGf9TdPDBppWpFPNzPSzxf6fHPsWrcDYjTdqkMryiqFn",
  "key7": "3ZFguLayj4L67PVUyHpmewk2hr84WaZn4ZkxLkxnABFH5eSAqHJykN4HQvCtvhuC5b1JJkarUss36F8Fm1f87w8q",
  "key8": "2LjZ1YgXajT5Aso1MHdA7pfhyENZL9Kf3XcFkaSYBPSejKYjx3bfsLmj7fVQHjx6FojQeT9Rwb3Md9XRXSaMdD3C",
  "key9": "eK3ymNSBauo8g5V3QcoGTvEWfZNXr7Vtj5QfBsv7AGL2nXanxETM98Me3Lzmd2jCjxRXtGPqaVHCx6FaHquknPp",
  "key10": "uyBk4JmsTFkohceZWDfw2FyQeX6XtGgUUuoBATvyL3Y2paBsAjpBJJZ7GvkrUuBfoGYQKzCVP8Tj4PfvQUV23Vi",
  "key11": "5nhoHjUmfbTk9579nGRoo1uFwUm5cTKojXF78tCEhJRjSswBTVD3Ngy3XU5Z82pc7guMX4r6ML2PromyiY1g3MQd",
  "key12": "4RyUVsM2gr4pnSASRu7xnQwJAbK5RhWBAgw9ky6ykBLpZ8e7123wwKMZiXNJH8hbdfsHpVuHFChF9HGc9A4dVZRX",
  "key13": "3BzK7n8HquoYDppNFpqvvWw5K6znkYvYF6xoRzUKdF1bWHG16GFB7Jz34SEvrLLrkfZhUVp88yb9yJrtfszuUFpW",
  "key14": "2fphwvPf184ekCeEuwyGkv5gvEjCmuvbLpJkkboLB3krDJ1R4Aw766XLLxVEjMwcz8mdPMtENCYWgwdS8XC4jGuY",
  "key15": "5fHkQEtTPzho71bhTCS6TJwVw19UfguJDVyw8XNHLZLhbnjcG61KqzP7MMyJGL9hu35kfp4eh8CFxQd8dc5YvMMS",
  "key16": "5NYH5XxZ4JAQgCwzU1Brt4Zjs8VAnMJAPtaYGrGhKe6uiaiBxqGcxx4o4EVnyrPd6haonq19ajXoStt6hH28QZsL",
  "key17": "2UCsDpGww4RpatFrwLtfps26sWiLN62Jioqgwk6Dg6yq7SGdt3Kdyf9wnaWeJY6jmpsuJKUqJbv7nt4ikZRB8uCK",
  "key18": "3Ebuf4zzcru3TAmN9Ntj1yKcA3T27eigKdJRrPQ4iCiZYGxtT6o7V9RbUx43SLkCa2oRNZpENsJt3NpPVwrPyF9L",
  "key19": "2VspYABv6CJ42Xg85DivDQRNW1aP8hEJA3zKcoVAuUumpRBpuAbV3rz1vVRkuC473oFcQtsqByGXr2CUGX2YMJ1W",
  "key20": "24t6E7YBQQ2viXDiLPcrpKWnbf3PzLrEGxbbsaoFGcETDag7LN7QSMhG9SNKCXG3YJHBUkH49odTnaDCbjAHbHia",
  "key21": "4ceMykYH41ymudQfpZJwg5vCwvJHyTHqGdJMMfUefb1xbp8SFL75wLP2WPzFeHuvBmRCnZXevwEQSftCbuxpkGJs",
  "key22": "247XCLxynwUS6VDnmf1rdwz3mPK8Go2FaVJ3uuhu9wDncixZv2j591iAr897nLmNEPoPwDzVVjE14waC1oTECnN1",
  "key23": "V8Yr6N42CXzNn2eJcv1bYJQJbzvQwnUK5Vd6jj1DcEsd5yt5NdXGdTUH8NRV28RN2Zf81h94p5ZhJAME946avN7",
  "key24": "KBhZn183pk1hcLDJVgknwBJ3bhEzHf57EvTgkJC4QNwD5UkxUEyGn76dzyGq6gi6jBg13iDjXRdmpQHVHQ5foKu",
  "key25": "4fnV7n5KTR957ikaDzP2pHMHqCAeLmqNAdnANyazz4PcHzNYgMqsv8RAMPYxT7YBrfaRgfvjP2eoVfCwFR2jSLYG",
  "key26": "2Pq2sfeEDsmu3foWDBnrWgcQGWNmDLgH21Up7Ax8xgYx6C6CXS51CpPVWvSxKkfEG8CN4ek1niFf2CGmpzvu1rXJ",
  "key27": "5P4KTFNUdLh6QMiUg33KQHAhentR1EXJCp9eoToEi88xmyL3A14kVv4uCLjzn6tvAmDHDAqZH4Nj4NM2sepPogbA",
  "key28": "4MLX3cHNtkWySUg9UDgwYH6ketUUaddifqKZFHKTwXoiquwz1WAB8j2KDY51RBpqqvyZTg2e1jcjECz2D4NfqoE",
  "key29": "5vB6zcpYQ9xMUfrCULqhfFUDbkCLDr7QgyMdBBgzkW6ynY1LkeU5s9QxPdEL3tKWqiqYYE8xf3P8ZYERe8fsv3Bu",
  "key30": "3Np1Ssvz8VLSEizBSsLD12AWPSYVeityrJB81nZVzh1KWDec1xujturwaHUTQwGWVqYTA9dXJTgr3FTNTLM438Qd",
  "key31": "4ttRP7eNJUNtEzLYu7QkwhaxJzdMpTJ9qakVsddjsrTAnZ9ZCcd3kpAR7a9yVuNDEzrzFQRKVns8xGDsKtsvP1y5",
  "key32": "4VkqAnM1oWobvfYBHVxaRdNVQGeFFn5GmJtW1M4LTYed3MtKJWQkqXuKaUg198gLRUwBsqH81XXaCoXTZgh74gpn",
  "key33": "2izmQ7AW3rJ3TZCwG71fJVXKcjTwKNLDu7GnifNgTuh6vsyJwKA4AcSPPr9xBnX4wJZ8trggod3joQZWs8FYBL34",
  "key34": "25zgaQPDtCmgHpcTVYZv446AfJGRmprmt87Hwxibx9W4h8btMf1jbWHfboUCw2LxzHBkRTP7jj8LaKLe1wHKvaX5",
  "key35": "662qRNJPPJmtTveAs6485D8c7zwMgP1JSfi4mJ6gWGtWLScv3mhcL2DZaJQbNqMjQNp2iLLVnTy1ryDfEpaZxb1Z",
  "key36": "2oewn36qtnk14RdB489BiUx9BnVAZTS7nczMNB6jYX4RyGCkLq5YbW4KyRxZem1wXSsMoNCr2bJwWt6xuBtBWqok"
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
