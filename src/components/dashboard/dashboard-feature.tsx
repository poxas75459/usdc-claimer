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
    "5LjD6LKgUcQe6jKjDsDNt3bWPnQh7HyyzXdHyQhrWSS6BMZF6AkLGsBCtoFfjUSLUoeFDoa6PRyL4EELryU2r3YQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hz85GUugMFJjydbKY4VHfc6vun4193URKkdZ5nJM3JCB2dewjRaBSaafhqdZSWRwTY6ogeXxcc9MkdG5jufdhfn",
  "key1": "37LP5wom37R1jqJyEaqdJJorrDBT6fF9UnG6ho9oyMkEgNJnXpU2HWYXCEiTYLRSvHZsJTm7XdcBDfPvJAxehikE",
  "key2": "3jKvUx3Jo1Ek1b5SZvqFjTouz5v5K3z6XTwjWWQfYwn5LLnrEHpBXJ8CQW32TggRmh1JttBnvRDreNxiJvnb4utK",
  "key3": "31tCiKEJSs3ZdgJP1y5kkDrUxkXjAEDCVFVLzfyicnMK6EZnbUPUPvp42S1cwEqaQCZ5jvFZW5GUweAX1ZWVqjyQ",
  "key4": "65yvb8UH6LC1qkAAvCyhoLhUN5ShyEEC8ccQQ4jjEqHsi2CvZLwUcSWERQhWFs72ec29W63w7omAJ6Mu7ggwND5U",
  "key5": "4HhzgK6AncjCaPrPLmedwvx28FdigfpomnwPi92eRv5x23Ayp4tUCTxHaHxjCie6dT35vvuSmCZDU74sjwh7muu7",
  "key6": "pvEWLUjzrp4wmZXJzj8eLLqZ16QZd5f8sNgVESN6VZ1exdkKuZHzVMBEpe9yXwTdRtfYsKFqcN2pZKVoNmfuQny",
  "key7": "42ng56dxT2Fs99jo1aptj9ciotuJkcuvbQauG3PSRccpY9WUZE1Qrb8AtduYngf1nWwGgW8NWwEJSQCBT8oU1uhQ",
  "key8": "3gvQfdMCSLYU4M8mGpbk4FGnjpECV8ucVezzv1RyvsdDCaF5PFYQM9qKXoWhNpqVT5wC9267EsyH79h2ZDNxrwTq",
  "key9": "4sAMeccKUs225o4Z92rnRADKDcGuXkna39pdavggbX75Lxo6zugQfHYFUoePVYNsuXNv9VtNActXVDZSi8AgexKy",
  "key10": "vTbxu3jkT4YYVhspEbb1bGYPd1rxkzvrvrW66NCTz1iv1Y3dJhafJXm8kKshwDrNjV69C2tJrdG1yr4nToFdn85",
  "key11": "2fir1PWPU7BcR1BNX8bbb1mSF5RWMwhg64gXWFBhDY5mvSRQhiKPeWNuYAaHjNzMrv1i2ejm3J2sHfQRpfzFJVxL",
  "key12": "4t1HgRbdPMwb8mWq6ymjX5WwWEFcodZ6J5vkvhZKBmwKwz183rzzgwLCU27BvFuVhesnDsuQbz3kdBW4bQF3icMQ",
  "key13": "3JaZ4y7eW3GVuDMmWsHx1rpybLBbMGpB1vMPeytnASg1EVDzC52wRgmsTdfRDKaZ3ahriC1qgUhmmTfD2bPucURY",
  "key14": "4g6ZiCNxsDyjhXJnnW9JXkL4NUd28VmGDmTqkLdBR5oaGrivCSW2sz5jRJdPjiFSb6YGPEbtjrGRjXE3e5UU9LTd",
  "key15": "3K9X7NYprBemfpT4kUj426p6eSWDhy2ktuTV7JMUe1kErSkoiz1fSzMUE39g1gTXwKF1hVaLoVL6LCUyNH8JMDtZ",
  "key16": "2dW73tGK5e8f3MKiQJcAZ1H4ECVsTdSYorXRePUn2j51XU2T6t6zVhX9zd4Czc4wpucYMyW42W3ffTpHN4CgDJVE",
  "key17": "23LSNpjKMxf1tn2omqykSFkZedXQfbE5jf5uKU9Bb9TLwKW6LKvuy2qhuAusBGPw1N8TyDSztcjybSjgmQditTaz",
  "key18": "7VsvK7UdCfeUfXwHTxugMiEtxZeZEQWKJacBkgbbMYySgzkCzCT6DPAFJLXoy8VcgEG9g1maLmuAsY4FKGMXxwR",
  "key19": "5jkwp7t9AkFh6DSmCKkn7X8K8gbNhpqkfvvqu7GE31eVHNQozqQfDD74GKV6vczDsbt5ZXExFrahwKNUJsRJWSWN",
  "key20": "51EVdCvZfVfyDWxVxQUjvE8Cdx4Ap8RQkpA9dpGhPVjmagarAVNu78JywuhNb3L4kzcRbAZdEuL4AVWpJf5E27qT",
  "key21": "Apstg87dLN6ov2JPcnaT63q6Q57KeHymFv2Au1Xn9MyzTjnT451QwrMHbUgZTSieZGY8zC9xZU4d5NbKqL4TyaS",
  "key22": "3gTh4cw5KuU9B1FCsJjbDF2THuUPb196Mb7szHTgws3FjDv3WwPTBSWg2AiUBnTQSYHFSr8rGRZLVRxwzSXgDVmD",
  "key23": "2AiSuhTfz5QatgPerYSU6CfeP8nn9aEUKxVV8ASFjGbNterqKVXonsJtFEBJywpebmwRwQQrxyH9yBSzeeDcmQx5",
  "key24": "4qxDsbm87fz6HvZvt8CPcNra5kSFBw8yTfnQhYgQEzbV8CugBbm25mUgVfvDR4tnbUqk3iva1eunhtz5s5hD6Kq9",
  "key25": "kMqaww1Vh65FVoTCY5YRryxP7optfcw32QBsDwTRwmeVgjj6CEzAZvANvwS9tfFs88AkpqDDYLNvowBEwNxLARU",
  "key26": "3gByc6hD3DPa8ta9NpzkSn4XNmL5C9oBznS8vaYBJpqsT8nNzumcGCEnF5soxszXU3f1Ctyqpu1xZLZjGNi4V9et",
  "key27": "4DBYddHnaDibwYCiL3NipsHWJJ3CVDDqwudcfWsBsJtdchTLpbQFBss9eb1QFDvmgis4KgoZDPf45vMFN9Nfsop3",
  "key28": "4m1KKPB9ouAvYnZPxp5QoPniHdS2KEAE1QSxWdRB9dG35NRVurbjVZhC4HYjiMa1zTnwiKcKby8sJ7rgmq4fXEso",
  "key29": "574J3kRynMdPeNh7pQ47TvByy7ozMxPkbzCgoj5eFMbv4TUpFZkv2vYVCQRqAVg1r92x4zzre1Soqz6bEsrLna7c",
  "key30": "4ZbpgfjDQedw1NVZGARMTrDjwb47qXiRCBSJwArAuSMzhvuazUgFaL7JhFQhFDoewaCvQ6s2Tr23icmNS5hparoi",
  "key31": "QptAC6JpnsUoZGAQYihTAfFiLnqdQ5WyMxNUAg4Gg9wFjwc2DeuB7pSCDCUvWXpTgPv3Mfuv7AL2eWpeTPahVn8",
  "key32": "2tjCxW9oAT8eYHrAch1pjzFuc6rb87t5KcW9hmx9V8Ypg9BvLVh8M6GkNXZDnGuJB7KbdVo2wp7CjVe5CbNdoVQU",
  "key33": "4khmvh8e3mGfHKzSsLBXkm89rE7W4pwJEioh14dN4nNuStrsvvD84gjUGZ3cmeQuPNgoaY3AmsDrip2YjGiZ2Lm5",
  "key34": "5hWJ9etUqH23znHbedg3TCFf8eop9NRAxgG4WSa9uoKqPYosy2oEVDN7kA53sJNG8gQx5ubCdnPQ24z4eex7eaEX",
  "key35": "38rt4AxXKPwpcEN2wSE2X9dDRooq8962y1JisLTMPn5D5UXVARSg5ktb2R3jBzrQGdGrMnVVZVVQdGzJMuNn2cRN",
  "key36": "3Vp4DyW5afJCwkqa7xwAEnYqAEDzwEbHuZdekYjN4rYpN2Ss7GJHU67b2jSqwnhNxTyYTyWhGPaLmZyrYWb2N9PC",
  "key37": "4sg1omHYqWUzUTe5FBuxy5Eb5Ve5psXWQy5Q5udNxo2gd3G7FCzHu2vKR6xmysEzjA6gZTHZ4kcCzpWtaNgduC6f",
  "key38": "3Ry5sJsYV3hSjqEDe6UJpcS1P5ZEYn2AstpdLR7jcBzDaZDvUNtQu1J8osY6XD5DoQxguP9ELzVhbkm9gTgvgkoP",
  "key39": "2iEF4mqTnciy6QDWaqfDfF2xK6mdatZnJQP2Ec7ARg9VZtcH5boaayuZpy5ayoQhVG85WKazYoDkCpDLMKMS5CWY",
  "key40": "23SunYAZzRtAFToqpnH3gxn1Hf7B8ANvNnrgSiaYcFeuwcX4z7n6ok1QN259mg2PtXknmDo2CVU3B8huodXcHDbW"
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
