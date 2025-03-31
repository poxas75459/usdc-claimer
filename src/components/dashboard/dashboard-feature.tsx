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
    "VyE3pQ83eosa8H3mDwFRgRcCgda5J5FPxsoe7ukrKgdVDMYq97JRDoVGXzgMDsuBJYgY6S4CNRrHebFsijSDAGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AV6B26m4Cq5XJeySyieKJxxwi9XwYENgDPDKZZpexD2VJu3M6BjKbj2FXQiJz8GVsb3rdCQxur3EShksmQX9zXx",
  "key1": "5bt4LECX3ohYFBmxgX8RE96jX5fhSv8t883JH3r5hs3TCH4xc7RchsT12gWLn4oPycB6kH5pCddjwmC1urmMcbqx",
  "key2": "54zx4pf8xZ6dMdwMNt7G7WNPhGft7VcuPr3D4gGSHiz2ftahMVvHcF7BPvgN4PPN4Li6WpiBNEMuAYkHJ6RnedyW",
  "key3": "55VVETubNpYL79hhE1tK8tsHJt53QdMUcZF5WadTBn1pYcNv9QV1cXCaGxiz5Vf2DHCX716XBQ3vZUTCfLj3u5nN",
  "key4": "31XwmVX86mrw1mev8LWYA626zLpWmFhDQJ2pJu7wfBzRUgW6pxVhwJrBzdwLxeykCUSjnYnn5nWepcFMcvzbMpCU",
  "key5": "3jy5MAeofSGmXyKw6KnmKiWxErYGB66V8SVz42VMd2FBV1XWqaQEBsWCMejp72UW5MYZbSg2n5PchAyun6ioaUAE",
  "key6": "5A6rPozX67sjqzrGzpDYeWdTt3LR9XV3sCrvA3xQVtWgBX8Aonn2VcSTPrmndctmnxw5rjLWoVcJoSmVHeP6L3hd",
  "key7": "3wAcT6qxnHvY8WMqwbSK2BEk9yhYbbw4E9NQfngfNjA8qde5vAMwpXjxMszcXwCYQSSSWnu3JV7Pn38o35aMR4Es",
  "key8": "Fdj7XwJTf3SgPdrbmkUkmYEgUQNp8xr8VKuQyE6dsM5LGRMqGe2AWzzYyGiBvmekncqsM8rJzusEfwGsBM7c9Cq",
  "key9": "4xjbDzv6VaFFaHmc5JXLkuA9yWrSAnAVVzCAnpcqb1zquxHJMnbobVJiZQ5WVzFk1gGCp3SNBSJudRVxvkHCnPi9",
  "key10": "nLVWQNYQR1DYw7NWXiLdgFTZ3CzzDMrcwey8ExH3pFqWVzWUFpjJXxA1nJDvKgyLCnChhfmoyXDRMQQEFXxAUuv",
  "key11": "RRhrWuCdp5rTsXm7TJmPFYRTWrLs3zhbK29YHFaiNbUkxs1R4B5pS597wStAUzRcGyhUdQrWdBzc2xbaQSZxz8f",
  "key12": "3wUSSNPsiY9VHB5e1jDGBeEPTSRLF7fYeY2DWUad393FV7C3t7uWxc7wGfc3mHKoiWsWaLTfkZHqC2ium2jiKqmY",
  "key13": "2WLp7fbpZK7WU7HPx9v8qc3XpDx5BTuTpoyf5pLNfG3UcWUSQ7DBZNcizRHfGzFnYHYijzZaxtgpTWnmsz8srx56",
  "key14": "5bbaibdcvGbPMRGqD2bM6jWsZj5A22xnXtv9Qh13aAnsD932pjHkSWHFSyQargtqR9iHCc5rxPTe9GhCjA3JiCdr",
  "key15": "5HfXT3GtPsdRRgRFPfh16evSzWHeyD3Q2D877NXCLWdo7cKDdEJFhqSa2arW3DfLbRT8LaZDtDF5fMi89Vdrpq7t",
  "key16": "4ebVQrzRA7nYex3cwNu4oQbUvCaYVsZ8DQ2eLwfuF4aUDJovwE5TPjXsZ5L5ACd6HrUE7wacceM1afmxPwaAVsgZ",
  "key17": "3vJLKfikFoBagbrrcakVitDUDQW5SpKNUsPbQywY85qCBWwoMcwdmvz5VFVd6XQrsGt1Zrb4Zmzgzhbzq81ppALA",
  "key18": "2xxFnBzJPbNT6gKpdKEs4BJJc7d8wCEwKgDFn9SwexKEJEc1xwrHuzCXEe3FW4EeAiCjqjYTjvAQ5BEEA7a9f9UK",
  "key19": "2kRnhbx86fvp75aJqnDvQ4tPzaJwwxV8m24kh3FHwgwVHHZKxtVEiC8Zc45pVZCUHCkrnDYCkcKNG5irUaZ4P2pG",
  "key20": "31RuNM2zvWCTvairAp6M1sSn9arvfe4zNSwLBG4ao1kurUEDRZVJWkKWKGY3xtaEaDRKPeaE2h2wXZUDPv5g372K",
  "key21": "539JdduXbF8gDnJcG562uqTW7jpDm6yWVFSMf42rP7mL7Y6cuiaEazoy8UsqAsJVaGUb2Kc5ixeJU9AvetdVtLSA",
  "key22": "2xL8f9nJ61tczp4c498qjAYZyeopzPfKsVKmYFC6CebNURfwosX4PGPt74XeA6E99DnWb1frp34Mv9XSsjPdpV7s",
  "key23": "5RQm8C61D6WtTAsuF1S1sDrgEYGmfEnpaJATCJUMfiACGD4jH35rjhXzB7eKDuNB4q5vA47bxKdnHNqhwnAsDgkx",
  "key24": "modHnMkFGVeN4rrNPVJABngG5UDb7DzSkjs8zsBHp3Z7qY1Yis9FzAHizrJwQpUBUfddFcMhihXVJkTPVhVpPoR",
  "key25": "5vT3mV39M4osYPxF8ZCpWtV6LQacaKeDBgsqErRtMcAxwQD9hqVpDvmG6Yt1izx11Cj9SSZ3pRtNqJHvQJPrc2nB",
  "key26": "2XrMKxVs6AZ6UsTtAbkghwCmxqRfitSkqj2sZ1FevrFoeraw7BovAKA1TShCHZ36h2BEKpc67VpndPmoPkcQdBix",
  "key27": "3uQg1Z8EBDw6HZWia8PmHTzYhrsUBQkqs6UdZ2asbREwVQzEQXdCnBDn1wmRgmmJaTNZGDKZXnEM6RwoAYmTNxCS",
  "key28": "4B3D7SJA8QDRZuqchgWLTWoU7oSLgxaFHdeg27n6FQfNaFXuxxdySaxoJ1v85GrvNV37Tw1asEVGiytY5mpxX6Bb",
  "key29": "f1Hqy9DJnUAsqQTZENJSpxDKSnT7Ebx7LL7m5SC87o6awTGtxQgUgfmgrypFEaLHy4KBW8jnZRKL8ZbsiVkKgFU",
  "key30": "2r5MKq3WvWfUCojx5VFNZg1iXqgugaZBgWqJvjjd66PE3DUNBxY3C2vnRPpa4fe4zZCrRt5QdUefMtYBFY5AJhDW",
  "key31": "MRL1dvfcwtay7UKwqNdx41VxMCNQwuU6viyNqgHvafThLvR3ACAFpGxiqK4hxpjpZBdfbPDgg13ZjvtxMLETdjc",
  "key32": "2eL3xyBeY5QZ61S624gjH94z3Xzm3cVDyrNamg1bEb3qANRERstN5eFfmy74LPrSNCnUYLoR1ACrKwKt6oVtxLot",
  "key33": "trY8MahatwVpJ3HNfjdhLnXq88jWCwoyx4Zq7JnA6ZKiKspscZEZwNvK4VZrErrHzG3nsGQ4XhJhhYDea9GrSVW",
  "key34": "33oEX32kf1YB55JnmmimSvN8RLrEXxX2SAMMwmmbW62Mg1cE2Ersi4bqeoLxan1Bh8nTQGn94QqJVJKikWBHHfXd",
  "key35": "21jrCvEFo2uxmvc5bYxRtQUtBERMEST6kb3DkBm6DyA2HKimnvZPsaPASc6eYNo6GNtVpLKk1D3EaCZEBETdaR1V",
  "key36": "3gMvs25sFsZp6ycAWrNfxrsU6kn5xJArtsCQYwaRjCnn6m2wRZ3Z1FiTyhcBJPtoBRRQMDG8q9dQ8i5fQCFuRanC",
  "key37": "58zUJbnXpcZKVfCzCWq4spPV285X772UZ7TkvjcJBZkkoC6kZtgni7RyZ9WpspAfiufgdF8sRFYCpT5GfhrKpfMk",
  "key38": "iV7r3drFhG1yzre4yx5PebtPsUVvSUvYKbrV8XtJJbarq4UXnP6EBi384f3S1AshCQmuFFbmT9QkwPC4M7rSbdk",
  "key39": "5W1EUcWUSc2tL5rnQRUMWLBPWZeynu1FugVE3H6FuTT1SwJTcP5xLeda6Y6EmM7PuaUsRgqTCXcyu1qLETS2pmuk",
  "key40": "4u41oF6Q4ukH6U7Rrbm188XGPriHxPoYq7xnfTQrdrzF79dCYTyoTYL4wS8MvRcSQSshu2H5niivzq8DmDVmGM1z",
  "key41": "3MnNGFiVUzM6xaNhdn7JNsxKb7TaVzz8zETUCfD6DXzEcVF8NFqjhCrsFLAkg316GPmLu9eyomUHBNx8Ac7y43kf",
  "key42": "3KPfTFhCGK2EaTYziUrHaDBAPSRxfBGYqyrpa3effANU1mQLBFEDgaXzcYqPo7hrDxwAQTZKyTE7gb8rggTZzo3V"
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
