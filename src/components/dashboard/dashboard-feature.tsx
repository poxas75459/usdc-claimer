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
    "4WMQ5tNb2cgwgfPUqjb8Sou1FMcCgsgmA2w2XS51kg1KZnuKHM5Nn47ekuJ5CJpXykC4wne5e1bD7dyLNzFvjGg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TBEJGxEMoya2re21r5K7hsutmpJQsQb9rvYt2xdYsjWHgcf9UaH8cFVbM32wS55LaSVFW5dGXvr1JPodLcjkeax",
  "key1": "32MJd5Qv2YL8ykGwRsdKkgWuZuUrKuVGkTSaXod655GAnNbUdHzdiiSXN9md66gj32dxQkmsoZrkJAj2q2jXNcrS",
  "key2": "5FZK1vEXZW2DGk2SpGajojdYKinB2sgiwHd5ZHkwSSaZQCHp89qaZievqNhc614bPXBY4VvpDccu5LNgHmX5p6KB",
  "key3": "4LTgFJwhHJNMimJdhi4VjburPTC5oZav6SBDPkiqqK7XNmVPeZPcZyxXPfBTt8zkTimMedpuVN5kYPXxQTxCJcdM",
  "key4": "3xKxN5yKPhfVZB4qF7VJfR9Hfgy2hCLuSvQxwtAbB66ep9oQL62u7mKdV44yMxM4SCLNtjsKhvk3RUC1wgwddM5f",
  "key5": "2t8uaxCTdESkQ6JQRrV9PSdXhhhK7AiRoPDekuhwCaFR4SFzn3TX4rVLe7fsetYz8ZgsfYrxG5UrnRtY9S8DVgpp",
  "key6": "5yL4apepNokUoBLAKpdaD67emEGgc8LaKhD44HTXhRWA2nTsRHreao9gZMxRB186TM8KLYmwnyVSaKyVMuSjXKoU",
  "key7": "3rYAdnH1yU71c6jJMCm2kQf8rki8Jj81Rbvdoo4tMBEp5YJVgeZygsJZev2DLa7SUBPDpQyM7Cz69HgiEatEUjd6",
  "key8": "iJdYF4jijpeBxt2enKMMDjmtp4BaPZaBgu83CBJtBpuy92rbc9RPWwYG6XD6rBqC2WUHV63s7dNQX2idP1GUsUp",
  "key9": "64mTQQ9M7CmicxKg7iJsHcYq87c2q19HJR5QCU8joj9eexWX4dTr5wijXs2vZY6HK6zTb5t2NJ5jLDpweBm66ANo",
  "key10": "XpfRiQDXNozjLq3GSuuhTux7CvvECyCCoozpQCFb8Cq55HX7HmujDdtVJfbM6v2y2erJ2tQMcdg6SH4TzbqxjJX",
  "key11": "3qLMQF4RdiAEZYR7y9TQHo4GAC5dKMsFyB3U8q2wyEYw2JXstK57bCMpoyUykJM53egjZa9ZsZV48dBWmRH4EUyE",
  "key12": "4aX4EhVkEtEbzdKmC6saHcEkDaBSQUmYnJDXpLS6aYYWuqbjMFWxWMSiJCu9FPHCvijHfv364Rq1cLjNeqr1n7fk",
  "key13": "4oqB5S4MmWg31NZ5m6D53aUDS8n2Hr68i2HrqWTcMz6t2HdoTkoWbcPSaE4X6bDsNnFLor16rmGoN28S2gotDGKQ",
  "key14": "4GwfHBkfAdoCuTfFedUQs9YvguVMH5jF3sRhYUpYtJowRQnN7VajTx2Fz7pvczBE2veU8xCmyqS2GoZgWeCuwvFX",
  "key15": "2RANGeKhkP2VkQvFJY65uqLQBkZzdz227yx7tn98qqxLxgHj8hXTkNcuYYwh1S7eZTn4sp73HSbk6zioLiR6PHAf",
  "key16": "4Hi2zBTt7hqGym8bTm3YmtwVj83bj23jX2jk7j5L2Py8iE6VUvPKxWRpSGt7ZkxF2LMi63wBw6cAtfZxSGjTkekq",
  "key17": "Mft4Ay3o4aVkG4srXW6VEUkMr16z6QAhbMp1VBAMLP9Z73QGbMHqLWE2ogskhAxnTzFkYui6QCLYAjFHRjxZhSd",
  "key18": "32sZrzMpbYaGVqRNjBaHUZBJUQXmkXpxVTwY6sz1abApu34hmwNSRURnJRZco3qEDaaACq7BxTiQvXLuJebiTL8i",
  "key19": "3yFHEY3ryR3LqSp8XHxqvsf3VWvEEXyv3NirJJMkjSnSpwbR6S1vq3vZfoU11TbYus66Fxsw1E3exAenSa8ZSrHS",
  "key20": "2DpwzL9uSgNq3xg5W36h2YuhcR3SNSyXYgxYmcMDCD7wvEkDFpxBRjCGsR1dryP8yN7T1qaBEGGH5LtZvNL533pH",
  "key21": "3pvpXf3LWwdCAW7vyYP7GfHUJv5y31MqHheoXX4YYjSLeHboafpBL7PPENZJRM2pjYHok7srSrtij8GVqeaC3nGM",
  "key22": "2ie6mEMVPqb9NqSpax3dn2KsQ3hzfR1wxe2yWn9qY8yCyoit56b2XAWqaWsMW9cRvA2ngbUn2RmdRF3EMB2sVCUW",
  "key23": "HaxexsnL1qkDvKpS24v3UabVNJqWuoVNrwGgWUf3zozHjCJQ1fvmrD5JP9PPbnNri3CGBSVzSYg3gpbnKGqb3ur",
  "key24": "2oA8iCVTZZ9YWC7AFQW35us4G4mgw9JsJgdoYd3E9Kaf6KGvNTjhvduys488MUbkxU5bn5MJVF8n56ef5KbPhSJj",
  "key25": "2ytB7k71aRZjwJZrSE27Z8hDE1zaSd3EqpT1ntR7nbFvEfzemd4BZcSd1p4ok5gQYXEtRpEpZTr5WA45Tw7wzYsU",
  "key26": "5U5YmUuvgCKnpPB1oes6CYwkuY9Rcnr8CPWNQ9wS42F53Kg3x5Vx1Z2GrH3TQBL3nVd2Xmx4fSDveT7SzzEeuNzk",
  "key27": "5PWyhm4Ka3ten7TY1d5kKSCcBCio2iyMFSVwd4C8VV6mCCr1ZWxpjm22xunUcFvYsnb1cKvWHVs9rgtRYgMqjUmm",
  "key28": "zVUZqy1xqVyamGL2JxufyoYDi9KhdZfgoe6dXFWedeNc8jdusuu4jo2msDiUnVJXeQxLnVDKdLrqFG9rXBWx3ky",
  "key29": "3T57fY11AYb46PhwcQ9fWVjypxCX3GaNgovJ9z9HKvRFRhvVMoDnMR19L56KaZfj4CjEm4P28WhMtsSMVFVh2sU",
  "key30": "57ffjSTZckkVHMA4vNoJFF8zYqyADpxdy4nogWyKzRP3jJ3Wh3rJhMMhdfndY5NHCRrgXJheVGseSzee417kRhyT",
  "key31": "4XniEqjVmYLKHtG6HMMK1whVde5ZMuodpzMy8MHfq7faMuCfCP5Fc2jiY3GMUubSKNG9tR6JXvrA1EytFSwhbKZC",
  "key32": "GR2tEwZnN3EaMbmGSGqoSkszNrzHEzu9CqxKJ8c9HVC3PCsXdrREWMGyMkkCMMtUJ986pghmbs99iUvAwVafgsy",
  "key33": "3dkRsccHguQt4DWQ7vx2xUwgS4xbBZySZ5PVWz77cJaJVhdzzyuAML7Tj2LguESTEcYHFLZwF4ib3xFcdR69Q26u",
  "key34": "48869dEfuzGpffGT5Djyw4JfQrk2P1TpF97gGgR59kW7WoJwxWJyGsbw5TGjsVj63dZPE6LvdMzRPJKjJsw3A6Yh",
  "key35": "5iAiv7SoBDpfXUe9M67A3tq3Y4CzKLenkA9mgBa8ZAMSCaWsUxEowybGbUEcRh9sF7JKwDST1Whas6CrWyxT2TjF",
  "key36": "4Fs8VwRYUQeQMY9UgJE44Qb1Myx6D4qM216kzBR2TT2kBP5PcKeCUtprjdbnf6sX5PeQmBm1K8DPXH7WAadvgf4D"
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
