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
    "q72BWJZJD1UVVR7QFafbaob5SXAugxecN47hJ3s18esv5gBZ4G1QTHH9GvR2MoMgbF9hMpiUcfLLQeJtCe2mfh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fKZr9ev3ofc6ayhY8W9M2TFVjBoGWfiwooB3JGagEqDuNXJ1GVBTjeStV9DVWyxT3aRGToPPnothHQv4nvvsCqA",
  "key1": "u6P5Co6bjugZPDQyoL7qLkvzaQKTDdCWNtJTeyFcAFYHY59PCjrjWuwf6ZnSj9r7ZVoiW95DnxxDAhtup9nd5Dx",
  "key2": "42CfGjXnpj7oWmJrmAvWDrhx9m83kVBwdw1dhG1bWd2BBJmLEF9fhKqrRWyMrUVvZcE7suZtRTWzPQe5ba41Jgto",
  "key3": "2T1tMtEsvGcBHBMbfLkzn2bDAGTZabCMsvzMCPuNRrHR1J3JoB4GsB6hP1GEQTvBmQ8EbVTJGjEoQWKXrgWdzjj",
  "key4": "5kbUA9n9CqVrC266yDi9X8szSQj4dHWopk5q7kw3sZZG16KvX1aLnGUgHmnkwRFREzqUKQy2a7kRokin6atGjTZV",
  "key5": "yssKUzuwWjudScTDhWaRyVhxh92vXciyimf2UmUb1yEChoDFZTP82TUqLKth7xmkSqfN2FLhxgfSCZKQZYEk91P",
  "key6": "5wMSPD2zwyiSBRfgRJmGpG8L3nW9x1XPKT42kiYi8u717qDZAgGPuPq6yZCAtgSQaHESQSnLrrA8vC6A49Ttb7eq",
  "key7": "5WNw3bY8wEm8dD9SmZgM6eAaFUtR2udWBLMDp69MtBPK5YcMYJJgWTct8BUKAv3uzNJUCX4ETHrEqJQCCBQfGFPj",
  "key8": "39pHUR4dQ7CnpkC521tVU16YYRFfMKctHhpEDwUGuWn9QJoB87w1g3YDwtSiqmPbFKaeJFuGuqeFYM8rZnWZWcsW",
  "key9": "4AaYstYKefPVqQhLyt8SYDk7CvriNKCDKbsmC8K2JBtL52uCZnFEivDutUzTcKiNb9rCwXK9cgGNRzh9sroxkyz7",
  "key10": "4AeJepNjdeA1eJfEKzYKXXbatXhWL6MLapXz9Ri9GfsF9ZF6SCZAr96QuK4gnRuS9jHGxsf1Sce2Rkq2CMt2QtKH",
  "key11": "28pcRGwW8YHo4Yf6UcVqpN2L991rT8PXm13nVYek3JhDezN8pkde1uURKXVi7cjDZo24b5dRGoZgzMtVxcvyPg9Z",
  "key12": "eeKGyhTthSDtirktpog38gzhRzjqdAiNJoRKGpvwkyPCvnej3WhCeiKYLf9sbMok3y4Drc3fdkLHKSGG7G3SUuU",
  "key13": "3eQJQ62iHvF6htWxFzGDxBPYTR7tX75cna1W4WAd9hFTgpDEdbMo4MrgAswER1hoCj1ZxWTKYHBJhsYrB9XNGppM",
  "key14": "5GHgXKcH5g8VwJ5JQt2JorpRaoQCxCx5jxv4S8CujWFWu7QAYkpeKiq2iJPkDcugQzBp3TBT2eCixsnvSzwVsNW7",
  "key15": "3MaA3M2dn889CecLvCF7ghuqTt41TS7PqergQjSpbXCXMcf29YogWRq5WdGGg2BitPMFokoEoqTCt9RSTfk21Mb8",
  "key16": "4YLvidQHfKMZGFDuKctp14QJQDEQFj34En41jh2XAF6mE3CSmfoqY5MQ8Rcep94bErXRcqT1ggs3G3SqxCYc4Vnm",
  "key17": "5xyJRyvjA2mTSwvcYPrPSPLx1XmZhV7nH51N6LpEv1adiMRu1NqnnK3a3fykzje34C83sQVZAq3vLnmb7h5Zarmp",
  "key18": "3K3EiUoZiMUfYcFRErghcxujRLaEeYqjxGfPW6KBYAjHh5zpgwBcVUGF4Vsy3TACvbDdNA1MjuM18FzkUDYfsSw8",
  "key19": "3XZPyBWRxezTyrpW2UnkgUdV8dc7uJtahJbsiE9RBE1enfrN3PzNmCigaHnFASsgQDAVACr3kV6U1z4T3gpLSMiq",
  "key20": "p3ATndUy1rwfJ2eYfid42wyt6r7sKDyPFAJr4sB5mv9d1pMMmvHazWRoQQ6aFj3wDMQni5CyowDijDVpTXACdHt",
  "key21": "6bAanQ95rc1Jxz1ud2XWp5FUid8HGdzgF2bhGwmy8LjiXec9QHhsQUroHza4UrMSpLdR1moCCD3QcJaRviZMTAJ",
  "key22": "3omDKhKUaZ5mj4aLSWR2ubYMANzjjuj6Dp3kdXAoeg44CY8jtWixgYcBXcXSrEU2yn2ncRmuA8xsN98BLX6RALhh",
  "key23": "43iXx98inFsfQaW2ZqK7mpqR5otVY36SdoaBSTzgyj4mdGCerijk72UzPihKGcvZ1sPZWD6tmNMpAd39CaezPhwM",
  "key24": "4SuKTg4MNPm2hLZyZWDtNhPUXp4CG2syiwY7ocHTNDXHU4spKikzt7uW6Tp1XZQ1icHXJMa5D9xiyMf3S5qUC2ro",
  "key25": "2hes6PZoCPKiHxRrK2HWYLV6aZCsgmUNWzSiEqg7jzQioFwwRaRfaLzLgg3ZXA8UAcDjoRfuzoFtPzLc26A3N34T",
  "key26": "3YRJHNr9q9FsAt9YVPDpyNVZBVFeiyHzDNZbsCbfKzZZMUgQnWcR2nwTQ4p2zFhcfLHqU2dukFXmBRcch25Eyyq7",
  "key27": "22cPXGVw4du7bMhEtXgJNev2rS1kAV5FXLvAKfUfvvkci9TAsHVfNf3j6LcPALrDt7w1Gc4YuRcXq9rgKd2e2JDC",
  "key28": "4Ae9UwYr1MfBzhU4z36uoRhQUfYn49AGKhu8bj7RrQ7NoyDZAZ3CXfFiVxZjA2eMn4ZZ86adWDi12YjteoQZsTqT",
  "key29": "56T1TrfCHqZBJPLyRJze7htvK3v7DrSBYfid92PVdPPqn2c1eXs9vGFkLhWe8oY27cQ6jDKRTPbnWRgJRjqTLLks",
  "key30": "6cJoWTpr6gtnb1zb1d2HZ2FKY1K7bAvRuefyUYhg4jT1LUZcBHnwsEAqxpRHHxLZ1geikuiYR4Rg1KZp4e21juw",
  "key31": "5ahfsyUCeXx8F2oD8Fcg2veeGdURewyPcr7sqBVCsuSrNYHui8Vn5hRVNcptzEMB2BHK5ri1zSeor7HJaVBt1dy4",
  "key32": "5xFgW1xMrzAt3jmv5gV1KGUidw8xaYYpNTjzFjzWh3hiHrMA3twbbhqxsiSjatsGXhEfNkcLarSheq3aPqzzwqEU",
  "key33": "NHuYw7A1pPVkQ3rVN2ZuPtDsPsyZPuEAysYK9mmYXjt7b6dQ5WRuhdbNxGrWQFb2CKUpSqirE9yRYQ91bh76Qpy",
  "key34": "SKdfzfSeboHoycbBWoPDxG7479xGJFKquPJpyT2ofhG8xJUpiqKGkUGxs8z2Q9dqmTDF2TBZKkABUJfKs5eq1r8",
  "key35": "4LcWkGQ6zwYG1SQ9Wgo2CRvAbEuKVsjuQgNRQB4uTwdZcUyYcRREkMwmSojcx1VjJcFoFyQCMMpK58N82LGqNbzS",
  "key36": "4GDfYzf1u65dia8rEY5LJkxvB5iLtMDscgKXJXQ7fmeURgu3VC5gx9HoBDjhnK1p8WHrifijGCok7oCmKTFMipgU",
  "key37": "Jvrfiq3w2WhGqqbHjVZCMuKpeGeVMB82agXwdwPKDQJvR3fj4jBb4i1oojDZouuu67ryqigGk3vQSTS4Yg1Ag4Z",
  "key38": "5tSyevcAEthXt99JJKgL9cF1QiMNZKk4hZ12KWheoxvvMPrRZhTRdMeqpk8Xw2vdDGTBq3x4QfbD5RzSwre3LbmZ",
  "key39": "2qqz7Ma6Li7MYJibkiJFFwJB99xM98ZxAKzBYL3j12iBBhSWZSkkxbcyMWgJdWy2GY4ykHH7vQUE4sJsB6k2t1n7",
  "key40": "5FiuKWzh8DmmPuCxNEZZ7YaDAMVViCDZa22ynpidaBHiAaFXkv7jWKWdkTHWjexQGttAYnKG75HNgA3jZsABqfQr"
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
