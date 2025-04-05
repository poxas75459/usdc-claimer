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
    "yY5aaPfA7X2Dr9Wy7U1ZHCfV9QJLZMZC8ud7zcQXK1FdivjJqr6Suvf7k6YTYMUiP5j6FMdv93eYAnaqeEFoYhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VZQhowqSPmiLhoxsYxqnXCPKaz2rSLX5MAuVd57XRctFEU56urwEPuzhsdG1pck9uJhxZuNvbGzhVDVRU6MWsKQ",
  "key1": "2ZRHFrqWcXJNLTEyZeEgwMz2sDg5iHihzQ3YK5WrBaBLfSex3ceCPdB1v5bV2BWAwS9iWCQmvT5xxBDXfusgY8JE",
  "key2": "5KJmnEp64rUS9PZ6vSU74h7RZiWtXdkHgg3GEA3jf5MfwhMKDV9vmetDmGxCarsqd3GyazVEhGeRh1LeMiik6ZyK",
  "key3": "3JpejzfbzdxDf2faBjG3voaWBbsQyBzH3GL75mW21WiLESeJk7X4ps2jtroUQA5FL7St8K9DBW8LQLHENiqwBwfd",
  "key4": "r9jNFKb6oCeP13TwG2zzS8vhXB4EfPia45gqC1DwFWGmJZo5S8opL9ECkJVLXtAN1f8vcU3FXX9cvZLssqaxfPP",
  "key5": "1qi98gDYet133QxcMmjebkB7iuA3hEoDyk2fWahBcn4RQCrVaSGHVMEEAQaqCqjNDDMp8HcFrQv3jgJ2KnYBeJN",
  "key6": "3heRPtFF1BZFjXfx7F99yUat3qDFs6fKhZxzBjijQFXjiDzxgGkbCUjWqxRooMQrcoHhroqLkmWxZqiSxtxou22f",
  "key7": "5vuojKDy7obUauYbst7kVuDeSqGmFM51saW7EGb8nP3WQ4ACksGCspRu1GkD43RigekCdwxuwdwNntFwKj7HvYJs",
  "key8": "4QMhjZm5JsnZW4uZA1TGkNFrrDiuTg83HirEPvwTQCzJZ1oLLKsM5SB5xGVPt26scQmGG3EEqdvdi6iWASX42RTq",
  "key9": "3jqHzDyQ1ZYryVFu1pmQQEkH3R9pkxb1M97pPfbs1M62PJdfGBSXugkdvoZspqxm8shPp8gAnAAknma6v52Q9ovC",
  "key10": "ATjWsTzxrp4yoWhSvisk6fcMbM6ZtV6grFGb9rDqNzSyKJxyUphHocGqXBxiCqXMGvzT4x7EXxFS9AuACeqh1wz",
  "key11": "2QRdSMheDjNKyfmMyjA9NNG8rVQNiCX9Yao9LVonDv4BFgEqPyzk3658Ay4qpXUq1eGdHJ7gaHaf7n3vCgwRBmSs",
  "key12": "3e6UchCFbbRdqH126vzaaNFMAb6Dt12WSq5HmvwxpBMNSFs9A64Vnwtp95eeCUN334NC6taa99xAp8dNAkEeZKbE",
  "key13": "3jbxqUHeUM71u7YFSSQ6u4ybYZZEHBEeL6CCTzhDSGGJaZ2MRYeqiAQwxTo6xVMKzATUETvfiNAx7jkQM8KRN4K",
  "key14": "4R4nYjc5HW9po4g7EfYyL4JrZhvLSyMLANyxR6QQiQBrLpXfJGYc92qHM72G8iCgB22sLfJXrGZBYnQkfH6BjJ6b",
  "key15": "5KQDt3aBL1oPUT8hTuQaSooZGx64Esnjfpk83aLR6LswwYebJ5iC8SVRzbQVMmx3kAFcSeiXFJa8svpd71Cerbd8",
  "key16": "3bEfqk1LWAij4xHACKVpB6NNpsnDHzknAPzerSFePvB8zdMXuoy5Nkicv36KtYzHMXg1UXGd3j2riFvqycJyKF7W",
  "key17": "5kZv5nX8RCrCWbBKyQyXTFdcRtCSA8UpkWhPgzgr2fdRJvfa9ZTYUD3DWBHcJ95SBHvWYG71AMNfmFN8fUW4kxng",
  "key18": "nq6s26vzXcfLAigiiwHobRnrRXgWdDr6A5gHM8xF2up3NRTyDsEZVsyKyEgwa8sZdaQrpCKeu1abQ67A619CHRR",
  "key19": "61cxAiS7WMATSEAgr6rrcCQtg6pkAEkDCNv3LCYNoAjpimuAeAuHLmmPrJz4LEuoWA8zAqwCzVKQDFHk3ywqPDGW",
  "key20": "51fTgtuxNLtsFT9BMT9MS6CDd2kNiVBLvZ885cdFrsAhEr9s14ACzuZxLxNWjMcPsap27686nhV6JK5ahAmZq3Gp",
  "key21": "3fSFkf9kGAitAYNHk8UStff5TQJD3XMjEWtymyQfoxHTmBmJuK8EQcQ2fcmvHoukKYzyspqWiMY9DstEPDfmRT9q",
  "key22": "5CFRxvzDrN8AaFCg1L1WRftCGwXePfAPAMUvrCREBJQDcUn1rRtjqVaqmA2uYBNbYDDXwezwRbgGYfzezNU7Yjq8",
  "key23": "3vCmhAZ59TCcBVQwz8snSo2VgkicAz1kf89EZceaJEHjDGDNmxxxxAFHGx5HqkHfW2KbP3bxm73hY8wYwg7e9Yn6",
  "key24": "2dT4Hh4Mx4X7Yh62sWZ4Gay4L8pE4WWPqFNmMN2VYP4mqE7Cz8heSMB3vfTkifgd5RYe7bKgBVmKUePgjsuzfHEN",
  "key25": "2P3sgoedexNoifBXfuMrZnZUDArf3QUw3uHyUPiBqwn9YQWcnf23ZNgn959xcheGsTxHCmyASJ5Ds1GA1GKYbn3f",
  "key26": "ydTUMB8CiotAv7v42m2u6foAdedv9om1oqXfC3gSS9r2a7ppvMFZLmHR6hWbETBbhzPCyBodqV7mL6dhe8bAmAK",
  "key27": "4zmjT7yzxMyJEUt2FiokhT3oXpesTnSf4bBmqVzq5ZYnscTF549auYdYiVLBA1Z87m2P1fR4WuVxezSGGuUxfxRp",
  "key28": "2V4op9iwbmJzKwtnj4qbuQuyEXVk5Ei2nY959Hes69vSU73SExNSGFbhDeCMfExco6n7AqyVcWft1F3YZA5UfCHv",
  "key29": "hV3rh7vGcZ5rPckYjdCwR7HPrwterDD8BrcRnKEDmLXEwsWtfKThQ9sVEa4cHJX1a3b5GUoZScXvHFeqsGqbdgE",
  "key30": "2Yw7c7BwpLkUma7d749hg5Gocp9YEs1SdEuuqrtqMj5s9NUU6ZbqdtMsXgjn3S5rQcYxrKRRjkbdu2tHnqawhqLm",
  "key31": "5J6Zi4b2hJnEScx9wX5GFFpaKjvpBupkgaw12VnyXFNqt82QWH7uYNoVRScM3PDtWyCZZjBUJ9bqkgkhVEzZh5q9",
  "key32": "5R33SbaGEVV9V3k9Y1kUu2DixcubwQMt46xsG1m3NKd6E5VBrfBfGKt7xbMaBuUUKAJkkSZtr3T7sj4nqnVY2Tw7",
  "key33": "3GcYFgn2W1fLQ8LJn4xqfVKAe3tbtfyVG2UDKXBaKZLRZJudiopKd8FQCFfuQkLXxn89yiHecxBdTisJ4J2F6oWc",
  "key34": "4zXs4MpFVdeuJuBbKZha12Wo9dVS3WWPiL2jP3TBYaf41uN5HmSTCSYfeZbzpX2vTagrU5pXzzwvxvSY8SV8RWFE",
  "key35": "1NdN65qAX7viCCfBhFvPfow4fpgHvT81HyimszCQNL5QfNkMt3QA2JX1oNd1RcZvgbPwC4MYsjnry6ekzRdfGNQ",
  "key36": "3RsJBxbMxQPoKc6ZkngDALt7bs1MN3eRdqasAjwZZzPxDFh26ApqxKLDP5FHRKyoAqSaDL7Zm6grYq2zQNhD8UJZ",
  "key37": "4eJDfDduNuCmVxpgkd7NkB8mUuQvdit5Ehr9TEcz3nfLnoeF8Ge1mAXfk8cgkYwBYFncDmVnLypS29Coaw37gJm3",
  "key38": "bK57d66dH5gXvQTkU79Cop5HkB8f6cyyYKZLXyHJkkyC46eKL95xkvbep63PrM3atcygfpee4VLgc6ED8wKytMB"
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
