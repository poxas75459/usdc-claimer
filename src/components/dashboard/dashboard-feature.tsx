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
    "23riDkKYqFHVpgVcdZG2zjQbNAJQQeGAXahJe2XpB9LSrrQxUbk7eRjmQ11o91hjbvDya1A99V4nmPmmuCnXM9Tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y2eiwF67Q6UGKoGj8Vm7jDka9yWniM4EbSjySwkACk9cRfCj2Lfg3KoapMMty5MYhgBUk5P7iQS2N3yLoZJrBSs",
  "key1": "3S2N3pNA9wTpxCnpUW2NRnGqXzP4Sr4EPPP26hEyzd8yVwi99dZKafVUB1d8FK2uamdqFcNRmhrGy4YFTViTgbC1",
  "key2": "2U2Qd6CjNx9cbxmEyUKKDpZwK25dFySchniVWKufqXAgLCzR8M9V72ghWuAG4mwndarQwoKenb8BjdKhR7Yw23DT",
  "key3": "5bETufGi3gteRYJeH5UBRXjWPS2bXqs8LgW3LC7wD2q3CPNGf6TGK3Q2UMUUnwAhVaLeiDnBKh8t3sNsywS82rez",
  "key4": "4TpkcLeo1To7ZEwrLJoh4n6UzPqmfixbPFnQoeLQsgYNWVKN4S142SYAwENEoqv2nVtrEMEjoVGmXsajQrHMq1so",
  "key5": "3rDAezsM1GF9LjMCjLECZTVLvXYY6MCCD1sxU5NNcUohdqnG4JhSaaY4UUeo6QtEQeyEstYYPe6H41Db3RwqUQum",
  "key6": "2UPxcXWkjqq8gs4ShFguswwqeNxdsJiK8UVdfj5ASzgfLorgA69bHGDdbzvVLFNRpNS9wMn5nkQXKf2PG1mos6QB",
  "key7": "3dS3X548ojkE6zWDsE8fjC1i8cDGqvZm3bU9KjZCbJShhyi1kJzG3SxCqirZwAZnysG6XesBw7RSZhGJYmWtkfVS",
  "key8": "2n8xoQXrgzUpKvj7pwr8uYM5BePmYt4XGRBkVXP31QwbkFZQaoL5oFkCx5frbyTotcWemgtta4trsEj5j17rwY4A",
  "key9": "52c5K2NB2FaHcwUpnC4P1eHoVRMtmGZHvNsr5JHkpBYSzM3AELEN2mk5yZnp9vonG6tXPDesbZB5QNkbJP9wqozo",
  "key10": "5vREXXxsMprx8hHCSPB2YJV6uU837EgtqW78F7K9fL3sYoq8Goeza6Z1duS3mxgFeXMGXDdbNtyRMeD8ytzoCkRC",
  "key11": "4oxt5nhmhkaeH14Ng54isMz2fBE8eRre6R1CueRahjWeAkq7VDb81LaV1ym976rQ33oAFJpJPiyS5wpVicuxvNau",
  "key12": "4ppyKpcLQo4PLDrnam52zCzzrBC7yyJWW2U1PRmnJDMooPoZn7dR8oycrx5KsJd6PkS6A14JuRDz5TBGMcXqndx",
  "key13": "5KPEASBS7zuoe15UoS7B4NKhTdY1dCmnLKm9DyCQzfUAQQrojVwZwVbYfBj7dX8zsEEwGsinEFeT2HBEDoAofUtP",
  "key14": "2TUa99mDYZCn8bDaoZgeYn7kfU9A4XU9TGHtUuMSUaMAdxNnp8EMGMBw6RTEK3xYP2aL5ZWEuM4uawZXNqmXcQFy",
  "key15": "5KEEC1XA2EHnWYLc15quCSiMifLngVSurbYcW4up2XGQ5gueNmMLPV8KDmQ9iFARMvxqZxRsjhALeZ59kELS7AiL",
  "key16": "5vcPEpgWaPPbS1mLubYFH7s2uoqnFrWBErf2V814bmkFz223GQUMHwrowWDxCEpu1D2rcgtmrxEFyfMyc8J6fPdi",
  "key17": "4vWoAT6y1aU32ue7DNJsG415GD6jjbaeqN8KEJiWyVoCEtStFNf2JxkiM5GfzJrEvrD89YaoZGAVotVht4hSVzy8",
  "key18": "5btRnMmStsczDAj9ZB6AyU43CSxWeQDwf47pDyKUXeWWxBvmiymTJHTknQWL8bL9AaKMPeCxcndEucbSLWp8phkq",
  "key19": "25oo6hiNqxWmELPFzkNkpDVrBh5TMAkwZkSiEAN22JeJtAB7mPadXJ8T4tuX8xJta2y3AcEigqzK9i3kefZ7KwiM",
  "key20": "3cVEg1CoGENnw5JcTuC24HWaeNeeBpdNHApgeLNd2xFC5ZFjNfJYqZ17bKd7gK3MJ9q87rWe2nGbHi1Tiy2Y3kcz",
  "key21": "4MZDKGsRsuCxupFHiuKdp6c5nNchwjg3mkj2NoaEcxxWotnKk5iNYZAPRpTamjvMxyqxx4ffvCYxTsxX1ZrRWfbf",
  "key22": "67MLPCNPMpV1eXPJ5Mbbz6MYLd2mhbFbLAPyEHCmwCpz4DioxgDuZYnc1mHYqgsH763tB2E5m8SoWv1K4tS1cnPo",
  "key23": "2xGPYDV9UCX2FeHtA7iHjnJ5cvQjzAT7CZP7UML5uem1nFCzDcTrbXUcZVDPevPwZBpxtAhD161CfPNTRQAcLBwk",
  "key24": "uncBPyQesPgdNomq9YquyckECK2wj2wh6Za8VovMSijmTw7pVXSEXWHU1v5YWQ88VWZdXZP47qnohmdcqrAVUyR",
  "key25": "3B5hxkDD889HtQhwUf6GmezKonXhqZ6qCENGaT6AbbghcrZ4TLwCKjtyK3uKEnVNpGy1v26hMj4gdmP27b3rKKEi",
  "key26": "26wn8JdKnGWyHn5X2GRorfbHbeFonYgM3KmwBppMd9AZyCSzemt7CVhkXj1PuhTFmuJVNPJfN4t7kuvSNwhbeCcf",
  "key27": "5RTb3XLRAPDFWWTDrHdSLHGijiaMMDHinJHduW5Lnz8Y6txU2LVu1tYHfNTFg9mPbC8m2ozcqKV9nASiN64rwA4p",
  "key28": "3Mkb65SXsWQtYGuesGDhANNtq6w2ChcmExWzztZL9ENnhNJ3k6V2SXPnfNvkwgM5kvFWishmytAB6zfagJBCk7Gz",
  "key29": "inUn7fuSsZXKgUcSCBNw68wfLmAuQRCdBCaj9C9Vm5GmwQ3LkKtxa4L6XQeveRhgb5B9h31fRX2Xtc6fkJ3SRQz",
  "key30": "2NMZVbojNQz9Xikk5vdqcj1nC7pUTWzgnTsbetpwKYgSYQa5KTHteSj6eNAXKoaGbbgkSUdyr9uU38XcaaNmHVWP",
  "key31": "4Pdv991mp52SXMuJfRM4hiTgxd4jbbLP8Py6N5dMzVCcW8ACxqp9bcYgP7kNjKC721kj5dyBa2Goy4PYf1H5aAW2",
  "key32": "5mKkLrZgm2HX1DdQA8rTycPQWk4jVNZEsqEzmNXWb8twmpxn3X8Abg8kgFN8Tfdm9igzLmWoWGPnLB4n9vnpvkVj",
  "key33": "44UA1oaz1qGiV2dwEEiRTweCe2Jok32G2Qkpm5skUct9UW24nG1fRAGEQm225M2s7rRPPySjoAybV2unddrGwRd3",
  "key34": "EvcUf53aZEKwuhqLrMp4pqQYdJuysP426ANVmeFhv7r3RwjmXTtBFc3uMG6XFsJ2WdoteeBfj9iCpPoQyZzGWNL",
  "key35": "3dwQjkZYcE74QE7QwtLcRSUut1SwvAcy6u3jZezoQQKVSp6gPkLS4ZSqBg34DwBwS5FbAHfuQPDYAiNTh5dJNKPz",
  "key36": "2DKZ5VSSxVZrJbKCiwn4cKc2nfEXrRmCQbxyZ6Vn9hVL1JKSqhwWSd5NsmjtHjUCsC1zLvwZzcVaT4DQNuJAWUKR",
  "key37": "3WCaPiBRwpJDZJZ83rhmp4P24HL7CCsABWpHzoQoxxHCJoi8nsbck3Y39hYEd1vHJv2f1CwrDVEqKfVSe2df3Fa6",
  "key38": "2VnKmnXbAuB2WLBhu5u23SP4zL6eXSgqT5XziqQbxWi9a5UMUHfQtn6GRxcHGRbUn8C9vjF88zCjdwL3zqpPd1JE"
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
