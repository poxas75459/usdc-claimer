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
    "3DiscmxBip5haXCMkWGc3zoVTK1JR8W2T5dBQcViMp8Pdps2VhvsoYB9KmeRUh92y5KB9fZr8CxaCe8sQ14LCHMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y7sVJJDK6Qe5fHa8JQZD6duKZAaQR3mCh9bZcmSVPEP8E5czascjh1smYLzQYwtWGzx8ybjtFG8S5yN5KdQM156",
  "key1": "3p9WuW94f41iTwJrBGJW5fdjiFAqv7SPw5UggEMfwnzkD7A3mM9hh4szNpU5x1PRj2mgBjAmrPNm26Ktpwf5xhhy",
  "key2": "42MnpeFMUaiPVq2vTTDoGyTmWe4gzMwScN2zTgFCh7MzNuYiftdvcDYKFvgZgFFtdiunDui8EMUUtRCmJrSmwDZx",
  "key3": "RgjbTm5UomLkr18G7ycfyvVNMKt4dD5VYcFygRu6222t15FUpfBkGqMPN45sAq7YbZi6GBsoFCX9C5EWBs5xV6X",
  "key4": "3wSF7QC7g2kPiq6szEEpKutMzgFTaznadDs16W9KtCHDDNHx6mdvYYdNK63vZ74eqEuoVVMtEnWbrABZL6c3hWjL",
  "key5": "2ALoyqGSGqJHExE4EJBsV5u2i41vTep8sW6FxmVLL3z7g5tFNCXww3Ta3ZjaWH8UF67XiQZze6kRTaDULkm4k32r",
  "key6": "5H19Eg9CB3KhQWkDAASkgAwYqjU3pAomFDMfiFS8dbCfHHiZTPBP7LFFgDPW6ny2KZeLin8waXMKFLpjDB2arEJy",
  "key7": "3wwwtbiWZnTDiNnsrHsdNYe1ENmR8HyfeUhsa6HYv1TCRcXYLrUp9fGAjPoCuqWEkqfQuMYoHPi4cKzbwAArScLa",
  "key8": "2cDi4fySDrxJdFEih5xoAUsFSgHQXp35kwM6vuU9cJuGpazCPzeFE4E3Z5tuUVusNZK9WWb4Gnc3SWDhCWLhVXoR",
  "key9": "4rxcdo87u2WSxARRveMNB5fbuYo26HgUDeA9kWGsz8GaoqW2dT7AH1mb9XAftW1Z62T8UFdHswshLH9tMDp3SCc3",
  "key10": "3Saq449bDMUDWHTj2RYfM9k33j6xEzBHaA5R3wktzMxyJQ6RPsNekTruYWRoTesk9yinkRWPTAdiriNVqNFYiA76",
  "key11": "2qgHooMKPJKor8LCNZ6wNrkxpCp9Pw5am7ipehQkwXh1wh5nXsejwZ7ne4a5mebx9cFp9rwreep4aqxogusf9rDd",
  "key12": "3PqFecbGkryQ5DYzQMuEKhqDTvUkttbnJThy8aPP7yviJcZ71jdXsB3sv4cC1JeuKRAo6XgAeSHXpaVSN9Jovo5u",
  "key13": "2oAzH6VZD6uw9YsYPXkmQz4RVNMwEDbAVm4JkzRS2xVwwFuNhx6vzGDxX9UiQAUYwPb5YH2jxxHS4WfHGWhLyQ94",
  "key14": "2FcvrF4xP2sfyQQF7ueztETe83uy9PYkrWwrwJ9N4wVm3DuqskiAkDe6CFwNgUbyFTo39XDgXR3Z5nUxzimQyp6h",
  "key15": "7sofRsDBwzcP46grCr15xV987wDRzsJjwHDq7tRWVpw1ocdsBPWp1D2gBFuhKEuM2t3KdH6SHBWwtSFfiVATafV",
  "key16": "5PG97RLwsenNFxVuVBMcpW6wkB8juPoL2kc3hD1BNNzSSEKvUoNE6Aif9pch2J7iaKBinT6HVL22ADTVPdm9Ni29",
  "key17": "4bK23vNzBSkv4Rr7VGeKYetoobZg78uEhc2EfYw7brigJPFsjmxRU5yXPaiZhBuVRSAQ75Rd7Vhogihv7dceKaXD",
  "key18": "57dKxfZmuMSK5subfqZbPpMjCRKPF6qWiSSJiiKGZfPPj7MYF43xgYLLfchdCusivytx46auhFzrJmkwhnptDSzS",
  "key19": "5pwfAdT336YSuzb9nVbGQtV8s3521KAKam66apBaZ3MeXLNNLAzUZgyHXveEokNc5c1yak1GFbT4AacND5gs4Kws",
  "key20": "3QVdVTYijPA84t3ARmQJ7LS55zuEB41s2KmSc9jG6Q2NphKA9Y9GGp294fbaQvSPDN75tjzMFri2koxT67HWSps1",
  "key21": "435nK1aZoqWtfheuaHBCtAcHZB9oaE16ohenmqyr9M68LjMyRGgy3iFKQXr4ZQpzbfgy8yzpfmmV8s9qKsg2n26p",
  "key22": "494535SKKuhMutRw8XRAm9Jy1RFAb5H6ZXW7m56UWSqBVeqkoHzg1jLy5yGD56WAfic62P9bUswJa5D53TDUXKmM",
  "key23": "3gWAt9eGmcUz8axQbrMSQKGAXto3bSnL49ofDX413THMXq6measoct9Sd9BjTdMc19iqibqEYzXDpKPwoZ9pdjq2",
  "key24": "3BzwB2xi2EVQy2iqA2qNTUgnmSPMfS97SBD9Hm4BxmPRtw84L4ScBFyEYCETZ1PBcexGm5B5aLKJJ6UXmu3gwvZK",
  "key25": "4YiD8o2hue8pRn9o8qq4DngokMzniMKKxK8D4fK7vVa1HsQizeqtwVA6e7fFt63wE6uFFu1uhToU66VBuuEC4fcw",
  "key26": "r9sAyGj1SuSa7eXChwNAHFvrWx5VKRW51Xa4L9MghFJgmHkU8VnLZy5NBfXv4huwLX3PrNsBdC7eeGF9kDbGyjh",
  "key27": "3qQ1xEebvaFTw2QDrWdkVVa5XUeH8pt3dbgYZJxU9YmXdo1NnhRan9x51UxEHbz5fgH1MXKmnwfzaYRNqvPqhnLh",
  "key28": "PFoj8iHqtokMVoNREA4XZPg5JdQu68QkKReDSc1n2KpZpSA6q26FBiXosBVwBKBob9UAb8tsBwz2Y3eAjCW4SY6",
  "key29": "2JBMchrkayKxtdiZwa6F6W81n7KmEJiRuFU99k5j7RQSDKR6fzZaV5UbuyojxxGYcyzho6AVQ3YDZNVSubEwgVAf",
  "key30": "5vDPPjc3Z7fk95FLgizWTZFnf9WSRRAV7x4KaCH935EY7nGzpjzV1VCwWZjXYYEjkLmVsD2jPM22DsaQptiFYhxt",
  "key31": "5U4fVnxihEgUWmk5jC7mVEhF9dmW75uCCYQp9hpHoLsi2HfA2r7kF9a8f5q5agduXMLgitjPhv6x4WeWJQEQAfGW",
  "key32": "5qJ7CktWgiKfbxFq1R5D7u3Wt51cGeV94ZpFiBqMtirrKssGLhu58QNUvfbbP1YazE5WBhsAQ4U6NNteBYdo95w7",
  "key33": "4dWM8VZywuy4JQ1CMHDsSEWnyLQdoedarU3gW8ujq2TaNx6zDTnSDeTNLyqKxX1nA6F8SNwMzCh8g3iPj2wYAQ14",
  "key34": "377DFQg6qjfvNgSqDoqQQysKqnCQDNWFgTzjTyy9DiWh8cjjYDCn6rQdmBcosAQun2UZCTsv9bKLJxvqd2kTZ5PN",
  "key35": "ag5ym2k8croT7Yv2qaBVFK6oN4A4kq7KhDjyJLuA34ib1upQCi3DYxJfxppNEGoodQod4VpSnGBevUwGx2Xvwxd",
  "key36": "2wQtouV1gs9Q96MtJxuxWzW5fXD5s7Sgfo9cqbDHiUFZaz8TAaJXAJM3dw6Y7fNd2pmVCHoY9wzyuWKzfUjN85Sr",
  "key37": "4CRU5YC54Lq26SQRDWrdwj1oQhaiwa2vGybTJu7YH34UghXXbcrcxWuFari61M7HC42tg4XHoNQpTMUGWidtvcXj",
  "key38": "2EgLRMH4mwTrLgPSe1mrMgxjrJZKb5ggjKXkzoZADYP9qejVwUCWY9P5W2fM8SkJmbuEHLoKbPvQNxjzMW9DcKdj",
  "key39": "5MrzDbaM6bEc3sakJQ52my12zHkz3N1L7LaVrqrFvi8gHJ5cFKtdZ5V9UiFgYh5B6DmeUkXhsMaCBkaSDywQyfnM",
  "key40": "3L7SvTK6jkH9LRYvx7CfprVX2jsoSMLPT2GbSktTud2Vab7NYCVdLatDiMiGhSs8cYLsMfjh8trjx5BYSMhDk1pU"
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
