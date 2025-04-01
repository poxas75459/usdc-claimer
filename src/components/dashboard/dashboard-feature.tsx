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
    "4PVTuq6d4Zhp5Y2w4VmsRMNYSiz51UHFDHBtQYSv4rNJtDnshfsWRY4QFW1uFRfa7m9vJuJnogPa7ScG9L9BgGhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WTKuhupRbu21GLk9UVTfhpTf2XnTWMnJjDEC11qdsDGqCaL3Q2BBsSYDqJ4XVgfGub8wDrRoo4qNe3T5yjyEPnA",
  "key1": "2AvWG2RjMHK1pUYc5ZaeTSUmEeEjJDQSN5yKcFomKTNtCbnA82FGrRKqwerusiTa1rAMJbBwimucgKqo2JEHed4A",
  "key2": "4rFZ8Y2HQCPLW5Pacyg2QHBGhawjh8bQVfYKKjip1bky6Td4W9pym4pt6mtzVuqVo8Nebs6vWArBd3KpNi1sS2b",
  "key3": "2E8pWPHdQxLXzxHgnScMYbCvSssRQeJzkUxtb9YqaKCb1AYor5RqdY9MiwrWq6dnRWXVs4pVJW8VaL5q6CWE7kZN",
  "key4": "6297RddcfXduVe6BvWXLzmGVSXXJBYRmVVBbADyDrFwLZXo2x8akQiSgVNoe44GouWUobK4pKoSdfiP9RjVj95XJ",
  "key5": "SCdTrdVH7ao2LiJAoWMqncgfPEPm5ayfcVU821sJQaMjpEi8Q8ZGqvCmRtbutDMhiv59J3EqkhS6pkcnpY1bCsk",
  "key6": "4rkLbz9oC5tTVkMCNygoTYMEiPhadSKCcjNbmogAwGc6P72DgRi2pURcXPjdTyV37V8m9giSDHmMHWsr41zgGbFp",
  "key7": "4kGFzpTkeU93Ftq5S6PRS4tiekKGH1btzT8Cb36ZUbedLm6c8er3BBmAHyBSHZXyvVLM2No1sRGZDo3DerJxUtBd",
  "key8": "4S3YRiXFw91Lcw9rmYJeUeF8s1gTLHQj6Sx3n2dt4VUfqsab5E39qd9HR8PXGNNzrCvmcmkM3wQzrbogcYgfTu45",
  "key9": "5W6uHbQV7zwzJoXdo6GqTeFbkfXns8o1xiWmWxxjWrNxUPWyrb8NCNss7gP7ptGmvdwBKE1hTfsHgdKsEKhE8iCG",
  "key10": "2dJEFeC1PDvro8gq3JY2GUW5iB6XyqZvV1oz78xCuQFi4Xue8q8kJW9ikNLSeU6aJmTnDwxMdHVbniv9cnvTTXis",
  "key11": "CeNByv4GcJKerR2n3YiJzsbdLQjhfwQVm3cCjhSgdsqXM26vEms6ao31US2NvH1n8XbGNByTC1YcQ1K9BWp7STD",
  "key12": "5L5uUrnjU9DiDvwcVnM6E6wEjxK6Njoh7GjWjZy3nvnqfP5w1DuK5gQxzwxJfMaG2Fmw8JQW2Efour74Ntv24dJg",
  "key13": "3sXgpYq3T7YDf9e5tVbF9jTkaP9Dn4hkF8jEtT8etwdXVCPzjJ86Y8JHLHdjgwbb7g5gyUTGcpV38tSaaEA4WLdi",
  "key14": "5H29MciJu1j2si6gHnhHiEYCRPSovcmy1is2oMEY6CwNtjS9jVSxcAHuNkmrziThmgEYJEbBcUSRYXAQRtNZWJ9P",
  "key15": "4HxsTnBe9Dxr1pxQPoM2ysGA3J2MwJ5YPAVYGtfaEXWioqi4KGHWHAonXygQXhjo4DLbZVzfoTPyabx9Svy5GrVt",
  "key16": "k5o27FLxeLjtxqWzfKt5BPUYjiyhWhwvx4myeZmTMZT58ePV3wZWiZModRgkPaDr71MZzPaCAeANcMMEuF6Qi31",
  "key17": "29Y8xUPbLAzEa4RFBDqpk9rqHNedMrDtoMu6e9Kiu6zkKFMqVxEtemPGT2kEFu4vGi8vLqKoNmJ6WQfSXEZXs9QZ",
  "key18": "39iaAmtS6rngtiFdBcNQPXk9Z4nv8xD31URSUXb9Qi7TkGosgkKdY9vcmhRQvsUy37aLsoe5Keko17LJJ3Wej3zx",
  "key19": "4eoBWbsNXQJM4hyRG4QtAgKjqw6f3Q5mckZD1h4uTDZPv8cSLLgTc5j4LnoX5goq2BWmT4AvaGEWyZiAfdLAqnf1",
  "key20": "4UnvMjqk7Z2LtEsaeURwjyTeqp19omNjUi5BoiKPSgKkpH1sXuAdJqp78SUzvVJ27nxEM77evaZSRyDocuk6jFiW",
  "key21": "3A3tcWLFqeGodMfE2HYsgL5zQrRGU3z9Ra8zEQCNz88BBiGjMDqp6pJbMjWKgGUKfFXKLT7GaCwznEYBb35QUd8N",
  "key22": "SVcrJM2LiAPypqNV7XsVeWiqzX2RY7LD4A42ZacCEMVKTB2t5Ly4phupvNdksPK1FmuYacsKmLFKDHa7yFAZS9q",
  "key23": "4QmrstLvvcWe6t6orLdWrw9EovbicYtzfGoCybGdurCWBnVpA9uanfYuxvrEt9uULSBTJ8X78QJvwBNCZEVG9DCr",
  "key24": "5zQpdSUbdnSFM3ouyJUP8eqaNAsXpERtXiAr6cGLLKpSRBCLvaDkmV7VybabrLj1sgq7LdaSYwz2yKqB6yhKKAy5",
  "key25": "52vCZmDHoVpfNfiWAmxdNMqEhsAGjzdy3z22a3nY9aSbmK4EF1aPt5RurVYtioxrCL7N8Zn16tMz1PbaCq3gZJu9",
  "key26": "4gJg4wTtzihfGD5A5apWoRfoPf86kUQsL1sdnrCzbeXeADMhfj6SWu6uGjkQbD8u1VRgqLPQTesCusrcMiuV3RRz",
  "key27": "3w98fEvXu4PCwSydgK6m2LpcnWVdXfxvumhNW1MdpHrDUsbQdvPhqDH446zsvG1xhwtCtY8EUaxENsCSwasjKWHa",
  "key28": "2itJU5fxgWuaNjyS4EMPa8TjwcsGZD8aLhsP6236ciGezCagqL8rXsVQfvzavuDZgZEWLVCnG5DJXtPdAHf9eBFQ",
  "key29": "5gixXrnyk4YXM3KQFkAyGrVFU6reYQkYoaE7siN3DKWv7by5TDNcFhmsWzseMvSu5RcHKLKmYStvwsqqX1rmDBgr",
  "key30": "24jMqv2vaoEPRfnZ1gUWo5uarJbrPYFMNLnQA5p3ftJ5531Uh2ALnM5TUyYk3UUg5ktJ2YBB4GkTMkfJzjSfsgAd",
  "key31": "4Rkg8NHmFZXidt63eGghxfVZg7tTLhGsfJ4JgyGS4VPPUuhHq6aEnPF862mBF64RA3i6cuogqiUdsBV7t6c1yDTU",
  "key32": "38sAEnzroVfbmt2y3zz6zBUrmSHndHafWJR1h3AF7W85fPex2DbNDMAmHFvZT3KsW27dyh2PZ37ySbH54PcvwZA4",
  "key33": "2dQBwxDAPJa9TCr8dU5LyEQwe9Kd8e4v6nZ5rWuWY68VjH6zwZ184wf4qreURQVrswnkEndyhCWMYuRNZS7ocLJc",
  "key34": "Cp2SqLJ9qEpvpJDYgcJBuNsSqShNyKKLApHwZhj7yYVXcREJuxuhpdgyNMyJU2cfcf9zkvQtk8aiZJmKnBvTjto",
  "key35": "mvA6s5Ys7DR5mhgntTrbmXTz3Frk2NJZDWt927XbGgWhMv9ESuJpQqVsTD8LzUu5ff5FGn6jjDVVxALoWpB5box",
  "key36": "2ZEaSZwka5hZmJ34GMt7WVsqCbdVq2dZJcuHPbyfkCtCZ5BArh8xYuZ3SfNfhochXdrTVMgvd3MLQSDkmcDwwsDU",
  "key37": "Gf8J5Ke9vADLDGQkTLFrCP7LuhH1fvFr2wyR4LVx3NraGji3P8275gFJAs3kJbg4K3z7Z6DvRZxSdaVUR4ykV4G",
  "key38": "46rZjFJbp3pBNTpZoYuXrWPVUtvjyaP9hTh4LyZCi3XNu4s3P6KpmEfPKX7jMGZnQCiLjkMustiujvxkKsdwT1YY"
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
