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
    "28EARu6WaL7j94PPWv3QuNe7QFWSDSr7TcrSqJZhpceGbA4fcCGrPdJbukW4hooz8T987n21SXQH3tsrE3Q8pBZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1bvfLnoJDvkjbeP1ES67mmeXR56f3t2snaUBVADmkm54nZKEyJFPLoxPxvRarpb5f2ujsvkce9rdt9DPeBaSXb",
  "key1": "5FyP4ZU5Xx1q6q4xH7inNgBzoSCX2mjemkFhnwGtLXMzNhBYCt6XdLNYWRxWZtCXjXBshSFEwfjK2eJCeo23mmte",
  "key2": "2yp27rHyWp8fdnW46mfGJqLzToiW3aeLg8o9JWL8MVC6oHv4FiRK9kiK4jHxWzJvKgX7TBKN7QMYyZmPaKGoC5w",
  "key3": "4SaBumfmndhJMu8i55EhKonE61umCRMefy5XFMTJvjUtEzpCPgc7Qo35fRb5C948tpS7FmTqVTb78h8Lmg7b9NCj",
  "key4": "46eU9swEnhj7gkgKWN6riJu7Nh39Zvd7mjLAHAsAuEe1gLfPuTpJ7NhjhRHdAEWse5w4nE3A8yp9RdXY8fFxVyS6",
  "key5": "7n4uGQja81Q1yqPaALGNPwstegSNM3yW22v9QPyfWMyG2gLwh5ojFBPDAaG8LNvE6iQxcNWs2yALgDFDdYFzWjd",
  "key6": "3jhpxrBovdVaYcGTaYN14fgcPUXT7N5LjDvjsDWqPPdaKdEozwLCktHJT6RGddTpNVYA4pxKxtxQzkNkjYugKwKQ",
  "key7": "HCkd5BsNL6qnoFMqvjhENGGpZdJT3i6VinpnBpuqducKu6UWcg7tQNRFWwUiWqQk2Pb3EUT5a3sBMZoHnuiB8XM",
  "key8": "2JwJ5XtBYYXzZoMbesvTv6rmNoZgK9vS4ALSNoFonEN7G6gXMCVnJkEEKBfsbpoRKf6LbVu2k6TEXe77hpaA8SRr",
  "key9": "48ngRbVUMvrVLeqkkQcuf8EEbZxxNABr2Tkt21hjp5o49uwpmcrv2GLS6jMuebm7Vn2thPYaoyUsgRYUnRr4a9Sn",
  "key10": "4U811iFmUSv7AhGqv7F2T2yTuvvLK64xVD66mamVpTVqyjUQ7xES9nt6qNqbuRpkQ6dYSuMq4wynjXMfoHgVQXRy",
  "key11": "3nWgk64EeT5PcDoBDnDF7cgVpY446uhuMUha8vyJcGsD1S5tVDdgsT4HENAtowgzbLwTRotw3XE1ma1cpdZfcKEa",
  "key12": "5B2mdAhDsaQDVQvJXNnXuRAPJy1ZMHmivcpyUGocho1Dt1a6pZFks5M76vkthJWsMzsvVyjVfQRxq7My9AaCTqmQ",
  "key13": "58dace1N4ssYPmM1Ti1CnTksAp5dviCbjTcnndNndUiyVFQVHEuposA2UFC6osBB9XeX88nrEvhiPRD1tz6iBpLs",
  "key14": "3M7T1xqBqG3fSXVCJHPAhpqtaQXMbz1pKh8HyNvpyQMzTJjgPERRudVBgEmT5ChmZiJqqdQ5esCpTijyWR3ki3Bb",
  "key15": "3hr2agSLgYQ3WC616epPjJFCK2ftoBAG6XbCPh7K4yXC4FmLhL26UbETiAqQu8hDpw72CoXJX8FWR5yHV3za17zf",
  "key16": "3pNzLaGXp67CmBdqEHqipqeQQJ54bGMc1zMy54CFwdtVYHXojsY23neJxZdVvBzkdvHVRZgTf38SyFR5FoqtLh5v",
  "key17": "5gsdRKwtFku6ZPseVBwjMNYg86ocL1diF88U35M25ZmPvZdJMXdpnQifaRzaUTUwTzc55U2tXuZ1geB52o6qi3dZ",
  "key18": "4tpuRLob3yNK3KjPLxK84BAtkCrMmRHpFqaDkbczGbjCwKzBsnHJYuAozt2928bNWqEoH4fxCBfXF1FViC5sUV4K",
  "key19": "5K4fKL8wNhjfz99kiJN27Ch7qvJrPZRbCWZVD9UDkezWDHzHiACEm3RMmGU1PaYTcpvtZb2xVFf16uvEJeACRhQJ",
  "key20": "jhdS26ggrgNQ2JYApzw6Uf6S3Em9GJV5Jqy2K78EuwEw51bBH4PBVoL1zbb2JoHjehS8CNyksExYc6UFmmiJcSi",
  "key21": "29xyfbrQf9kVbHuYsApzLNsJwU1DNvbEsw3AriTHG9ZFtTNddj7kwaigYJsgQKfC9UFzCUgxMkiXEKw5Dum3fMrs",
  "key22": "Jb9EvXHmpy9wpkvWP8fn7PefFj4YSBAdFsiGaty4gGzPWL4P43uGVTNNaKzffoST8xS2jjEhzddufFPtTWMxG2a",
  "key23": "2fGC4j8N4zrpQeTtYjGypGacqbyaKCQBfXci4Vb47YKcNhEUGP96116qLeM8Y7r9ks7bHMpTcmPYzdMjJCtXCYv",
  "key24": "26XNLkWyfeMh1MfQQWofGDPZUyRyA1H9CgukGRzHLqFUkeAzEJqtMUnww7K43CYWDJdRwvvvpSws2WsoYu5hiiZZ",
  "key25": "5DFuxTa8urLRYC2MLw8YmTc9qfEG5ooX1FfJZkJ2poBLpJU1TyMFSrRCgwocZE2whPChqkALn7Warg7EJK7ETR3F",
  "key26": "3T3bMz5RjYYycdKkWX6CtsZEHHQBobKbkdgKPUT82XTRqM9KSqAjCaQhLNmxGPDGrTe24pxdhMTYLMCC93TJNXth",
  "key27": "3sC7NRukv4LTjgsp6dUoeTALWFn9BbphmPFjVMTgmoNKnmkYrBTJk3udCchCFh8haWm1ugWxwmPSXm6yLXid21Zx",
  "key28": "4FxUvBrYpGEpAPnU2cjhqai5FMqtpGH1x26dP12gHz2YwKyNKWkPKci3fPo3quYzR7CLQsfaNBG88AzC4B8ftKKG",
  "key29": "5W9mTta5syj5T6Z2b9d5oNabNRmC2qhH6MBNZivetCAmC7oa8VnuvzQYrbWUoxLbSAfMtLLNWj9w68YyBhgVB3cN",
  "key30": "3pxRsNAH3DhreqPowtgE6kqfNZQ6jv6oTZX5CbY4FSdjqfTstTFpKNfhJb2meLV6BiWKMbojJNUidVxCsjC9QueD",
  "key31": "3nz46h4rEn8kvmGTMm8CiGw8EQjg33vCnpmTxRwfoajKoBJwJ15pzk45NqLUKhqWDcGY8MKskn524m9gfjE31CRe",
  "key32": "5qCC4QpRMd1Eg5CYV6XckTjowvmHB5cAWHKogEiQxG8J1j4TvoXMx9wZkQF9UeZQLP2PRESKp8R3dAKwRBuu1cBL",
  "key33": "4eXNC2UwaLhQiJ2E31ZP9apximJm6TJMdYkY2AeKzDqaqwxDg3aMDtqVtVWfiMhScxFCt2sG2Z6diXBAJrMVR3ga",
  "key34": "5m46D6NekXrNbdNWEf9F7PAveAxmDY6b8PRyFxTvXE5UsFim27FAzNMT5kopbyt5cNwTq557ujcvrsDHSgGtwCYy",
  "key35": "4Ba2WvWFfNcnXRtaa676xvdnLLc4DntwMd4A3gUgBX4JMqqtsMRta9wYCiNFPucJDrFUtNHwAS838rHZKAeb4k2d",
  "key36": "4baVHftWPzidEH4uDBiBPTteTMXX5zNSKE4eRh14yitcVSkjAx2vBzctMbCbd3qZ3k9HvWdKVPr254pdB5jFetGb",
  "key37": "bkjjodX7jPNWqUtNgku7cm5wvLHENzCsbAkobmamZigF9WDqyVr3NkdbYG91op9BZW7w6GPMFsi1emjKd6NQtLX",
  "key38": "2gNQvX4h2JcFfXyBNTV7ZVC6Do5SEGweEDzAzfHakF3LDHRu273iKcn9yyAXnY6N5thiuVchgMMY9U3XppkfpUfd",
  "key39": "3aoRFgHHCB1iTYXngEiQjAFEELE2Nxep6dhFtjuNYostowpUcyGJuYrysLFs8id8MyyZ3iWj4VDsi4DsueJet2gu",
  "key40": "3CCzy9zL58yMj1ZbCNttNrtmvGWWbRt6eBEgT1R43NmjsGCUV4DAm6iRqG5PJqWVYHC25u64unnSiLs3UF5Qy8xJ",
  "key41": "5VvbbCn3tYZvmYVrAM5iKozqdf3DmbRQySN48UmELPqexyVEpupsUsSDwZvGjvmKm9M16Ciuq8FB5C4vMwcLa1Vf",
  "key42": "5QpaetdM7WZcjBEsrKKt8q1G8FhB2iVcCoQ1SbjX9SCx1QmkkErVuNUtxGF9gXCd9kPL8g6JsFniKVvaBebpSJQ8",
  "key43": "4y6m9RdyBJHJom4JzHpZ14bGiUNbb8aAP58XRK89TLdBFgvFqNK9JC545PmDV2Uk6xD3QYyoErdrAipzYkDG3BDu",
  "key44": "FyErFg1oKmZ92VJtH3iEhL6RYahdmjN8cm8CJ125rmBQzkKfQ66X42MKZJGG8sPV4GM9bwngu6RDxFbhzoBQWTH",
  "key45": "b7H59rHE5wnZa6epCtvnLY663D7GTMBUfwXdx8JYfDN6fzU1mRrWG5MxBdmMSto9hfqRV3tbADsFAiaTv4qQhPJ"
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
