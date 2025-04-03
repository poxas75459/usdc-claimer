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
    "2jWDQkVbXT6ooGktWpQrXNXJjf6HWJQhpejPAFBShc6vsWzzCyAGTtPeLduFYyyqKbMQkPrYNo1WSKaco28RyHVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mPHn7kji3ZDhrP7aQ51Cfb1izE382UjAT9Mey2eJSwezpiv9rJjCb1bSQCNkBdpEAuhwqCQ92paordYaCqUnGge",
  "key1": "2U9z1dLVesqcoBbUFRUtBsra5TvNwJbpzZ3jCGJ375YQ7Xmykw6cwF6rQabGfTvnw4GRUYGHETyW4BZNViKuTm5U",
  "key2": "3tY2hdMGBqXUMGv9iok9SLUaZR4mG5jJkvFzivWDWymkQ4ASCiCkiHyWKYJTUYUx35sVH2ZuMgExrhVp9Kk5hoTb",
  "key3": "4vpCfCUANSAatP42pqLU9CWmc5CUwygMMjct1moFa8zj5Qi16W9bt2K3gQqVKbxsBaAZWz1pbcQcANF7CmEgiako",
  "key4": "5DyFJ1PcZbZwGP7mKt5JEZQg3fJfURoeMFtXggMe877W4TeGhHLcpX5iA7PJdLqYzJJuWAYPBHojaum56FybW8ph",
  "key5": "5h1Dq1exbkFghzKBCZRD6pqU5zVTyxueFNAKz3DnFWUkpq3PkAHp7svFNr8r553tMyDJ8NtCKYanRC2tzjivp3VS",
  "key6": "4ShA9fG5bfaaMLi4fD7Zj4dYEiRLESJqgnJ2WK51Q7AQjiDxEeMQh4QRdECeRB3Z41z9xGaj6PM6GJ1Y8eyKY8qo",
  "key7": "4LW8a8romyRYG2CaVnPpBW6ayWYPatBW5pDUgGRowHT1eCXf2kvAaKXNSk9N4tSviv3jfYmK1FJGFxfbUSw639eY",
  "key8": "4dWw4HSTQub6WzBPNeeTMzEuEPqEvrdM6AwvdzSvBeP5U6TUdNzTNnKsgUeTAAHZ1gG5qV7GARHwMvxVRJxryUYa",
  "key9": "4WxYFRURy56YYC3S6kBaiZ69qFpQhLBWSADjfxvNkB7qwt54EiLDPtLm8jbQxK5Jn7RNJhnVcqDhYyy64rgoBJY6",
  "key10": "5S4pDsEEHrFu5noHvSL6hGRVNuxTAi89MZZgfoD8SJtoDtXYjJGEDUjVtLg2d6AY7zGV98MK3e7mBXsAX7fGeB2U",
  "key11": "47CfkVRnShzPxyFZZqdbPCESoqnUPrWHFWRgPDNXQt8hbhj2RNBimvFG4PToUBagWFTXF7EEGtfaPsKuxQizcZDM",
  "key12": "4jN5VFCDeHziiRSrM2ZeyBb3gKdpvYWTvfxScgsmwaXbAL2ugeZxCWWMZcmeyh9TJMwaDAGj6TuNEmKRmL2sSrEu",
  "key13": "47fpZ46i15b9AVrVWYVp6VV98WtaQHijxERfJ6QYnsgQ3xdXLP1DM44nhXZ33Pdt2ayHakhsq9bfCpDxFe2kJ3CK",
  "key14": "5dig9s6g3N3sbamZBWBWnB1R3mafodQvkDW1arnMSsZVFegBAU2z7wtdnVekGfFm5uiDQm7HFJ9usN2jW86PndDQ",
  "key15": "5PiTCZ3aQ178rnaa66D6rs5mEMUYmHKEW2VjDUVJM7m9MaSZXfYj9B5wdBJc2544TRpcWUZp7TpaWyaP972oWqr4",
  "key16": "4z4b5S4ETTfdu5Sbudufq9gWZpUSWR1LSPXS8HhS7YsnYMaQf2jQbkPwqE658wPP59uyho7hRQXGJVUEAUtzwE6q",
  "key17": "5pWgdTQfsp5UMYLoMWL6BXxkp2TBjiayH1AU6En1ngq6Q8PP1dQwe14J7GAXpwBUSxL5DXavNr1w9Fd99tCibj8Y",
  "key18": "5d5kyJpvJGvf6Qb5s4yphyH5S4zsY5poSM7CC2cRyQuFr76hikLVybxYN8VLpaz7cjS7Jf4aHAnoGEMyzrxbitQY",
  "key19": "2vMP6fBHmU3ftM3jGeZVUvhTPZj91of5B6aFwSKHaQFE1Uvia1jPWWXht4DAshZrUTBCvXZBkPP8dgi6aysywKeR",
  "key20": "2Lvear5i71tWtMrBPvxqxPhXkEVd9i3VT83cj1Dtaz8t1vguP1Q4zDKgFaKoqRgHUE3z1LszK87PARS93Lhb7L5W",
  "key21": "5G5cRRimLE6AZaVirmEeLhsvRjZb6Re47LDmfbpUrbQ5oH7wPcc2Ac8rPmCZ34cRhT2WYyD8cbwqtfsTuUwLne36",
  "key22": "35UwwH4FsuwzKPgMwSR6Xa6hYrbLdZiTit7azgtSVhphfAqUtVyLnAWCXyoT3gC1BeJhNZYCahJkz7Pu76MZAbrg",
  "key23": "3pZYSNKV8uXmA97JZdqEWNwhFCxzgAZF4UEfProY73jXub9n56AXoprGa4HBz98wMhJVBAjRLtr9DTD9h7U2qchk",
  "key24": "37VmKyEUsD49nZVg7jRcQ7BtvErgvVVS4qXiAwc5LK3mPynw3QXgYDFzj4dj6iVWcZzo5K2aKtvR8LT3FCz9QjS6",
  "key25": "3V2uj9fwMU7UufHYGhVU7No6z1X94yEae8ZPhmFWmTy6sjv1hMErXmhLZgTLZ9sFdzjiC7qhk2XbTaFMmhrHzJQm",
  "key26": "4CckLKaPyuzr3n2BNyCVSsfULVNpf6a1MKX3MdKBy8gyf4uWaAYZxrJ633MgDrJ5ZBevKd2Lm1ngg1iJC2HmdKat",
  "key27": "3J9E8QjTqWZ3pnS7XJSYsLk9AFjsoHXupNxcmoX5474k7bF6THi75yUPHJW153vNbvXhiB8wswFgKYuRnRF8wG7R",
  "key28": "4Sgpc9M52HXxJowZrWxpCNUdxamGN37btVzPkg7M5cAja8LNMta5t3iPg5wamAwHPppPVXi4HYRukAF5QRgpb5Fn",
  "key29": "3AMgv8VBo17SUP26CRfiuRqYtpPQVBXHuiNSgNagmjdnYpFz9YkeF9VaWKhyvHLKydLjA7RUu51bYRT99bR4w94e",
  "key30": "3yxZMr5TtkzR5mLT1sePoEF6YXx2qZSffKVoz1dwo2HW349P9Quv9Q43yNe14kKByN7V2Vk8dRiy5msDEoupYQ15",
  "key31": "3VM8yuyhZqJEkpTBWbtkZ1SpuvtjX5Hi5veMuLbEKzSmKPaX1dcee5XBj65pLjPYvUuzNh3QXzEp96TdJhuPW5iq",
  "key32": "2nhqnZSmWLHvmyGzTu81PHLukRduYR1ZeRzqRGZ2kmN3itcS8mj81NyuPJSy1E15rpT5dHARJduES6Hpo8d3XZHH",
  "key33": "2UNQ2kwnCZZcZ3SYBbesaqyvSx3Em8DpLVbGxhoouWCWpHm3L7VDtRw1Hm9Ee9HbJQmZ6Z2y2mhTVMHK9aLDDStG",
  "key34": "2NdpUJ9437wvmpKe8wktvJud1ipbVCWM6KHo6VBSGVcQt4YUgkgNaEy69xDyVWcEVKZVoTrSBnx5ZiLqzBXQqcoy",
  "key35": "2vrfu2StUhZNo5aoNAY9S4CMVRtrGJDsX1cjrtpovqMSq8h5gwoizankQBE4BpnQm78gFDpAvXW1WissXioJAneP",
  "key36": "3yio9zx5ak5hy8WaY6UDHHbPewkZSm94wtNjh87Sie1Gug36mLpnFGfcrPW1a12S9EFdGp9WZaetXjJ8CP7KAmoo",
  "key37": "3N9PDAPHx92EprCmXhqFappZWa84Vwq9Ea4mHppcs3ceeH1d6V2yrHknBj1Vr3dCisFqRSfwxJtRLnMTXGwXAvps",
  "key38": "2Mw5xkkr4PrYZ8v3heafGRvafkLvD9p4Dnu1JKnMDi9QXGVsVzHjZFUxfNjcxJaZuP1NHRx66w2ARJaRdXr8amYx",
  "key39": "5dUENnjdwEfkwYsmrZk9G3ZSV8YdWQLpJRGePWd4erf78n8aGuPzfwVxUBkyYzjiv364R1tM9NbWLUubYzzxjJTo",
  "key40": "5Uxpj8zeFptgjbFSGqw2FQMVHmTe2rK1ygkutBNpZxV2bqqXs8ZpN3neFdkesTqC9C6GCbL8fceMJTrVG2Vh2Y1D",
  "key41": "eRbv24F5PTHVSEBrA3s7vpofCP6FfCqvxg8bTbkw3WcoAT5udMEMsDN7uypcuUj1A6yUvxMcEruEs8BcJdfV3ut",
  "key42": "5tc69bqGCD4RK1qqW2xne2XLD4LaQcZS6LF1irkKGKCfGDwRXWgF3HxysRofJvr3Xxe5Yo4KKSf1SBmzWEQgB6rV",
  "key43": "3DmWyRQVyG2stprfcvkcwFzGYkmBNj7ZYsA35ihTP5K3VbxYZ8whq9SVLuVeaFPfiVPfWKTxAQZ2jf68n8SfyTCk",
  "key44": "2xTbXdqh3ZpuV4HjkD2iwmcEg1UVjzpEFh6Y6BTqdJNiWQ8jb4RETy2k82uN7Uz7CFe3mrr968uQHDRV1AhKns38",
  "key45": "67M4sTv9ZEdWQjCkq2mFqcT5j8HLritvrovBeGgeJLeoe9uizk1Z3xiTnKAh93jpKiYgGCvKRhe2nW9FvLpRUswQ",
  "key46": "JtJoaYWahsogvmuJmaiBkivktib8ubGVZMK9HjM1pKsruL8XLMtrDNnF5CspVuszCvPKVoGVFgHJYzykEPNHNEq",
  "key47": "3gyW9pF4bqjRiwHDnZPPNScbk3W4pVjxAnMKMdvsztNTeCGjKdWur1DTHa33YdWPzyx1m8wo26TnTuF1ouGQDcPk",
  "key48": "38zm7jBNLC8FYtc987fmtXVYMnj9q2GeE9Hr1eGJzCGiqcEM97RnezkAQxdgDPyHtqVM9PPRfZ1jYfJwgnu47nyv"
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
