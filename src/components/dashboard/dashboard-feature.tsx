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
    "5LUdhK64YJh6YvvipYuPDsQ1m9UJerjKuysxmjSPLdzxhvXdXLTpNuVNypAFmDxhCuc2JXELnVgqo7uJkwztafCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xd2pxSSHELXWs8dszvvLJHywsjMxaxQkStMFpPaFRaNPJBWDTwYHNh8ikdszDK5bJg1Tm4sWEnnVGQ16SAYDvfQ",
  "key1": "4LEY8sJkn7Eu3GZ2wdSsJeVF8p2XjFHMvjyikpTghuSJqij1XUXQ37T3xqzVkC4zBXL9MwdXWEVkQ1E2LWEPFyVB",
  "key2": "5NXxTgmeW148MkiPPh55etdR561VBMzsumUsJXH48oyyr4oJ3pusf3fy4DjMTi5ECfRYAQk4poyLhJPkP3zuyot9",
  "key3": "4sVEwb2eGb8KVAX3bANMKPPmAmMv1EPLnrB4UwsuJ7aUkTzEipJE9jHweTsK11j5mSFHMgsQwFhF4ZXJePsumSa6",
  "key4": "4JU97ydij45Hmf8xFcjRgaSd5Vcz2N7hZGdV8bXky74jBQ3osVq2epxwfD9iEiBzRE7JiJF4ZJbJkE7rPkMLP2Ui",
  "key5": "4bmkJKoMxXQrXaoTJQYTeonegQbPg87XtE9o7Y554h1U1CLAUdcBYLQKVRbe7muqVs6cY98Ns9e9pCC1hSHH55tK",
  "key6": "4wUn2U5jXfZXUaXkDbKqePAJWZdwNvQnW9Eu3espnwcg7utGWGPMioe9EQfT5VpKrqENmiCH8JnbVnBW12urTBrn",
  "key7": "382t6naMJ6AQuADaZqQgTZq1aRDc2aidwV4BeVgVo8PrWE7e9Y6978Y4LyfiyuE35UqPJiqDEz7ZeqMifeeyZQBm",
  "key8": "37NBEEHyb2ExPTE9qLFGYJC4FYfM2w5ZbgsrTQf2EDZaZ9vbANGEsdrwTdHjCf2jCjgkEhCZUGh6Xp43jtYZ6sgb",
  "key9": "5dzNrJGNfEYgcksScines9sK2fqBRUT7FN4KGojS8U3rudauF4UzwzRJGbJg42FrFemDAPuwCx2Tn1Y7Rryc2HRR",
  "key10": "4kfGyyk3GH3swYEd2DS4hwy1hY1abxQykDJCtaT4KYesjCQLrCmDH9GwryiB2oQbYdE3Yg7vsmSFXEs1YDQ8w573",
  "key11": "5AA4sug9GwbRksMpa4591oQGwQyMDaGKzHnh19PUwEhtDZzUYofDyig3g1CykujS4PXRtgf2yU6fGWYQ2wH7jHJP",
  "key12": "2wqk6CfzE1tPWUx5SSVt89BLjBMkiiL7u7p1JbbR9KcbtNLLTwmiri4NFmTtJ9VKth9KtS5V3HbiuyindAuxUucG",
  "key13": "KTw8Q1qLxjE5Tno5JfpWfxA3uvySNh8u2DVHAP97JG8BpXD9s1dHCftgrpz6Veqmc7yyFsJnuk9MBNMBv2WKr66",
  "key14": "4zJTUt2JAwbNiw9o7r38DYZJ8sepiQioDsKB9fHjE4W9AeJ3LMc3sfBsGXJ7iw7JY3xKcGot86b3M65fDQfTTx1d",
  "key15": "4M5XV7uov1BPaugNrABKfv9qWwrkTPozptwmnA6ZBkGq1s9DANr2qTcyVb5begSaiKik9GojyGyp6rmp6CdQxPZM",
  "key16": "5jxgKWucH2NBQuULPhWwENb6GVejFoEDRACH2NWk3YKqVZ3Jd4QWVNWJv3gciqR1Xx1f9PENcogxsN5mswD1Sttw",
  "key17": "w2fs1V7fn1YmE7r5FSHPCg46nbfvjbUBBckqQ4W5TF5dqoDhyumHtH2Dw398nYur3PkEctPW5fwbHxgUwiahwZK",
  "key18": "5KrcrLAc45AQgAhzit3SV8A6eVu1x8cgRmpHG1YSnKVkzHYZVpqPFks8fPvpK95rSWgEnhzAhnC4GA8HBTPvmXFN",
  "key19": "5baCDaAdHBnesdQiGRNEFnADYuyqgWncmPLXvpquv5oFv1SqNqwoj9xBrps59sLFqNUzhH7trRv6C5rMBdQS5ECr",
  "key20": "4xw23S8QvpAGs5rYjko7zXQuEk2CgSU98oLgGdS96qvi8UtwEVnbMDV6x5QpnRgUVLKdQSS82mUTsM838AhQ3SVX",
  "key21": "61nKmmWL8aXU4wf1joKaB1dsBhGyhcoQtMFeADP9z7ePZQnSmSwu62cS7knXXjiQTv17ntpYoCmdfCpnExdrf7W4",
  "key22": "5pWFFAHtJFNbkaeQ75JQ8dth4A1sca7Y2smr8gWsefv46CqYQH8AWpUnw4GWXRtEPjDXiHCmFCMzQPnDiVaX91T2",
  "key23": "25aURHVyZvKztrPUpVHAb9z7SiViLqmdPbTfVMB3JUEiRErBBhxKjE6HULwtxtn2nn518CTM3ptEkdhCbExZAu7i",
  "key24": "2e53XTZ3DMUKwemEg8eHREb37bUBCfxcHVeY6Z9rhzKZWodY8t8XHcir4MSh7ymTboMNp3d2TfbtML79R6kgg4kQ",
  "key25": "ap2QtWqYDZLLpA4hZJQVQQ7rSuNagXXwgQtSM8amktHcp8tLqrW55MxTZRV3nGS46XnT2eba8K9n1kfPK63Ugiq",
  "key26": "WyPvriinqPxjt2yhyhiqoC9X4kzEhPNgaFPPrj111f9YuDH6caxETSSbzc8uuB1Y6Rpacz3hA9ja8srGZCKJzAZ",
  "key27": "5ReNNXdYJBGaLXL6apPPHcE4PLjk71bs4hhMifHWDqY9f2CNLVZBtDc8r8x7fGLgDa74v5MGUNzs6hNRooT6Jodi",
  "key28": "fB6HUpDzNB3vN6Yfd7HdTLwmTAiKsBKYtTeBzsahE5iARTxsXxjXcbWnwetLkyEvsSwMuYAtn1me9ky3MqkZqDM",
  "key29": "a4W9LbgD42CLfjaD79Mbxbo4Uwh9bSEAWHFjtDrQK6LX67ZTqAGZiLZMVMZMGhfEyXfpZeN4c9kjwsgw9DuTDYr",
  "key30": "2P64STzrSuGGWj8sXtwir9xmerLgwDDPqFZkbPHi4zH6TxPzFA8CMMCpkKjEkrzyLCfPbgbqnv2wcjn1akAaLnT7",
  "key31": "5JM6zioybV7NR1AbFCYR9HPC16Hu9MAXJyTp3NpSue3ExBMuASYZczCuqasbqgYdNtovYHvQ42o1jzGJ8e3HzZNF",
  "key32": "2ZCvoqrwNAVFbyxfQ3oaWwKf6Ak4X4gUG9cTmowSj9E2XPLW66Yc8fusZrDCw9VMsdqun6cTKu6YxfGy84xDqHey",
  "key33": "3tcTChieF4Q49rT2U7MJhqFeMG7dHZTX3KyonazBzKTRYFmBSA2JMPWDFXLLFJZb6HpjRPMwJBbqjbogXNuSBkEA",
  "key34": "55SSJ9HVRdXotCL16Pog7bo4gLSZY6uPFza6UAXLpkAZtNrCYWS1yDSH4PMUrsUSY1ZAmRFNAXwZvaZcYSpWVRta",
  "key35": "4TeWXgRykWWKsBb9nVeGbcnJLHiTMEf4A1xY9Awd5MHhYuUYttmFVgoV2yPh9QZ5E4AuSLCSKFQ2dYXUcYeHr2Xb",
  "key36": "65XaRR59k53ZEhwGG2uMXJkxAnFS3FNasut6T8FGnyDGSBgcUrheP2rJPrnhLncqXsRRgUY183uqAFjzQGcz6a73",
  "key37": "2yDgJGTr438fwsxL8jdJX8y2PZgspdBmDgiavvuPpNNzLwFgr15msYLLWd9h7GJ6Xhrk1fE78YfDqtFc8HoTHHPj",
  "key38": "2Vp66U9fWz1FcCXhzq7APfj8B8CH4oWoJCZJ2rAbqoGeBCH7dM7dezHZcjmzA4RB5s1wn3cmWDG1f2w4yPSHCJUf",
  "key39": "3H87DpcFh6x9X39ReWUz7VwKbqjRyyg1ge8Uqm4npgUgEJSDf58uTjMydaB1tnGJEQqa64GdNs4mEgYRm9SN35Pb",
  "key40": "2f41DVAovKUN9hRJU1UFuvTRomYhXFbqo2KPSzzfmTrAmifWRpvdPVQuDDdh8K4A6agMzK4Qs81iNUvcVNrYY7yT",
  "key41": "wo9RAgvFoApSunytyQieNQ71pSMMCJPGGwAjbWvEL4j9ZAj4W6BbzJAWcCgyJBgHd1ErB6PSnBusPKRpKLU13pn",
  "key42": "qVPBorUmqP4cUfjKdSEt9Mcp8aszWZUe1wZke1QjgboSM8q9qPFWpP7ZKSbHbhkuVaAAbUbDMFL97GmbAWk3zci",
  "key43": "Sq9pEcLSUMCQ7g8e8zx2mUkmP3T7W1YAf5XjE2odA7TegQnihmYZSrVmzr7oByMsBV27i4wEkoHBMkGjyGrsg6d",
  "key44": "4HoKNWMei74bWdUT13mwmSTa8VGKBPozJQLTAGDZfMq4je8No4DKdyqBAZfNTJ9uBj9hpBjwVc6g5sVz9bjXren1",
  "key45": "4aP3542Bd86GRATmj1rFaDWjkMWZChD6p7kJ5HUN8HmYq8YG6ZRw8RoUPopEQVbj5xKRSWZRmHppboqHjA5cDMDR"
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
