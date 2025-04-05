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
    "2fMmFSoZJ1TruCkHHTSTCL26Tnq2uieyP5vZEnQFv8hhtw1diD6My2nuQezPQgo9fQBqTwDKWQFjDYyReTXyctrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aCMZDGNVzmTAkMMSMjVm7PWwJTUBeqKR75p6yD93D8ByhakxU5ckDeZYdrcCt2QgrPiJ93ywJThpJBxbB5sP998",
  "key1": "3BzeU7oPMjCHNyB8MPkLbBaZSMCnq9nmB539E37DzJg9DCaAND3xbCCN9CpLwJJSaqi2qaWe5BcPQGxDHQ7Sq97M",
  "key2": "3FanS3cbSAezHTd8y3eXAjXR4DERSeG5Ss64ma57M7cqdC7ZHTaYL1AsfJjwSnFTAZ81MGuvHv1fiXRbxcmzTSR9",
  "key3": "4Tw7r2x9LLJAGNRR6H2NrH9BNgDxw7QAaJFYCeEzJ1Uk7wwZLt1EUgmANnfCscZLUdJXghTtApmYudKBZQuP7ekv",
  "key4": "wkyrPVDzdfCRGDGivp3hMjDqbNYW2w4vJ3BngJctA86H1GVtZfyyaHpZWxvi56vWuPNJvwmuY6GrEqFTNevuyB8",
  "key5": "25TVbZSW9N6JS4udDZZ1B2QTuZpq1SURN8X839VbK5MfLeBEYfW17HK3QANtQ6T1ErSDypGRKESVQUMJSUy3BvL1",
  "key6": "YK5zZkVkzbN1pMGn5rQV5Jf8btDmEAq8dtnpys7TKVVXjsoks9Z4Qy1rDQudCeB3VkngmTa6ECUL5n7TqqbyWBS",
  "key7": "4fGYjZSMPi8X41ByB5SJezHsd9CRBJnC9GSeu3KywLKZ8WhJGC68mggzttXotD2JMZvD4vNLC7btWUYJRQZ1bTNN",
  "key8": "4kkrUoYgvMgxdtykjZxnAmr7XBMhfgvJZsxLSbe9Dv3PBrJ3MsUkUttPp3gkwU1F4zDEdZdufUnobDnwdoL95pkV",
  "key9": "LkM5eQDn54wdYsxmX3pDG8LcpGAieJiCgSB2EqeEqLusYwY4SZt62fDSn3KvhGmPnYuMEhtxgCN1L2N8VyTqDr8",
  "key10": "5SVGHdYWZ5MvqChSbrisPnQTeRA3YLN2kkJ7q8n8oizjV8apFKxqz8nkcLgLM269V8sRxqQ9Xsspxdp2RNU2VJuW",
  "key11": "3rrNxRaaaNB3SKwixdD2vcT8ftum2MUDBYJouVGxK6wsz7dGJ6TVePmWn3jftcVQiWqs6hnnK1DzasZutkPkuzWw",
  "key12": "5Gv2m9FQTPS7mkuUvoKxT7Rw3rVM78Sjg3hxWpWBzAXYMepRgzwhZVVvhP7TNETZtK7tZJLoT1Mcb2mSq21rPt8o",
  "key13": "Krfw1vhHinZyQNHhCvDbwv9PCZUiHLV4aBvq6odewbumPV28ECuRUsn39JN4d878J53GpbhFnyJ4TYiodmNR39p",
  "key14": "3hcYR5iXive5hDj9pAr8FMiQ5FpbrooF2ZW6NFdJ8Y4cFeTXNKQhkT7o6CWRNgiPmyTwPNANGzBx39qabeitoe7E",
  "key15": "oY9iqou3tSXwpBDS1LSwcGUnfv12ThHvV4E8okCJA6esgEfrBc71jGqzNsDphGS5Ss9hFAqGDfC6HUdSxiraUAe",
  "key16": "ntt7N3wZS4gFj1LHNouZo7SYys9wDLwVAFgW3ge4vr1L1pA6KB18Zi6KfvnaM61utWQmiGmQT17MwweaVjfG1qg",
  "key17": "342gc4VTr8HY7RN2AXUSei5BMUL8ERY4eJnNPRtmwXVZ3ugcJuvHCHREcJabAemk5jD6UfN687HDzQ1FNQrHiFte",
  "key18": "2mgbt2qw4D22teXKGhp5vC9ZJ2P9LNBsa9ogixHmo5EPc7ZM1TSkCfENzqnB4rt8xDxz83bXYz5qTUP1JZPv5FQu",
  "key19": "5cpwEtbuw1eDPaen1tMtZQXb3rqBHiycBUyG5eVD27LWWrtVeh5FF1h4VEvQV9qRNcLeGd6uaUoUqtNmTveG5UKd",
  "key20": "3vZyK42YvAfwY2Ti6PqsiFQsFd7wrXGQXArKZUkVK31mi9BF5161g8JmAKBqb5uzWzfPE3cqioWQGb6KUQpjyzbm",
  "key21": "JFUxEMmqLadLVRKWxng6mYbyapAYAocVDrUYbNH8mtnfHemcFKKEaS8j4jeTqGScaJcr9pUfTBJy9jc4os8g1yM",
  "key22": "d1KJEbZ1kLD2fVCvKspEKvLctBpJTRyPoGAHvTFzg2LGTpEqHVUuYmRQHZ8q3FYeKWdNxw3fM6ERS12rdcWNu3v",
  "key23": "3FMhW1cab6bctNYVTSYE9KnKyvXTg8qJd9PSehfB53DRvmAs7hXKNoFrHqNejPPrFUgp1d85jK5AkePwGJQwpxkJ",
  "key24": "2Lt51GAXp5AtuTKgmyWNUNMXwbZgJhNkoqvyvj2A9GBZdBRgkzhV2d6EXckPim6ughbddZhAAb2DNa3W3eNpqVMX",
  "key25": "52RXYdBT33FNbwzYbvYozcM59W73U1rc3CHRhZxeawTdXa5377kRBpgEodUEBCe44HszQEMdaWboa361qaGzxdb5",
  "key26": "44pEFozL4kHbizd9rpQzc7n6KTmRyBMrUHa9WS5URemprZaBqvi4CHyB1zrute7hRRyCVW5xSLrnF5BaYDAMvY9u",
  "key27": "5Q6328BNTiRo1ctFcXJu33A58mWir8dAeohrPWA7pLQyUtuUs2z6ukfwoDEP4uuSFUHrMi47FsPZGr6m41jMdMFd",
  "key28": "2v4iAvnADPZSgWLE9cfzSaGp1nmRdBT8Em1uytF7eodxbsr2aV9iYEbG5fAjrEXrSdjuftMbqghkNZCXYtez2Uro",
  "key29": "uUzTJZG5itdGCAQ3jUgkrPx21N7Eu2vXekubBEBpKXVyDNr2kauPz16vxFkBTxeiVZVvqQgEWLZagMFtKmW9a4E",
  "key30": "3tm4PEfsvwL98VsSLQAxGsdy4TKoGhX2HjYpTRA1EzuSP55iPdoh9dEA75o6CyzParNbsGvukeP2d4BVKuUKK2Nu",
  "key31": "LMNb3KXWXRsMJw1YwmrPvA6HmeYsfHJTTQYqCVDxVZSPKaFRiVj3mJ7kXeVV3KYnyeJGg347WzjVEgCFGYRuhKH",
  "key32": "5PugZWwKEXMfsEe6omUVnGZWrUGDpCa3m2uNo1isEKJRyaZ7TQVv4v4MZybzy91KmDpbGp3yCfSWXkpftZmFtoF4",
  "key33": "3R6qjErXmfjNvZqacSz8yCrv5ZLhPhhUBuo9TFWkUzLPdaw3PfAx8owDrGaVRRGqnGCqSbrrdTU2T5bKioi9EDPH",
  "key34": "3dgWJF85pSj9iHG9nJokszxaFApRXG4UWBiBnsZPA9z9bPTFpMSs3PosLWQTZnGWx7EbinbS55tjpXBVJ19MDvRx",
  "key35": "2EPjeqNdLUHXAFxh1HsgzpjzGWoLyP2fAjpusP47eBtZTq9AQz98aJBov4D2bGFmsbUJEUpJVfJKuoLq68JKVw2u",
  "key36": "3o2MkPLtzqefZ7DmgehXJt7YDsSE7Eu3L7jCQHeAHTvdDt1z4F5rvy8JTtzP9VkDurT9xxs743tdFdbx1dBLuEEM",
  "key37": "5z9UH9C8FzRuE8U7pnGPv1gKLbmz9hLJm4RKnB166iTKEZPms29oRySbnfeW4WCA11o1n71BXQ4SvKnniuVFa4jk",
  "key38": "5PRP73G4MvnCVsqYsDGoksaMS3akGhF1mnyHz21bComUeVPJCNb1AwwX7P9y6Ccyb5ehXdPPGxES9GY1MKnztd6j",
  "key39": "jUXUWRmFi8HdyGeKPjGtcL18E4S4WLaScFM1qpDEFfZmyXicDYSpbaFUJK3NChS1Ybfc3SwrWRxndabw3kXmVXT"
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
