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
    "5bAM69xJjE4eQCVDVG2QsxxQfHjQiG13MRi4jWFTDsmaK9UMDqjE3rwGjtmiFfWaMSxxWETLcVLFYeQSuYkcUoGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XwdrGPn2374Zpe77kD9g8nNd5RLKEbq4mP9cDULij1PmtWZGFCzMdQ16YLyqVTW8zfdtWGuSdZbk8fRceEm5rUv",
  "key1": "5bfTLPqJ92CqhsaXME7ewi6v4Q8c7Vw6Zqe3UTMhcnpn4binyu57tuwmDZ3CXstvbcF8szvLTXSSEfhuQSH8Jaba",
  "key2": "3vgfH7qX6Ng1UF5nQC9S4sg2vWF6RMAUTQteG1vjs5jBbLh4EZcSQZEX2xhW9wNTj1DAH3wWBBsYFzBWZZffvZHP",
  "key3": "4AgxDTKQ2DAict7cdXhQV3rnSQGvdYfUQd9Q24wa1Gzc1Z1tm2NKhf2skagTS7bNy5SDo1BtLRrAhydPzPih3zvv",
  "key4": "4jHTPGYNsrzGoRJTirfCLP6EJSbT86DJxJu3HgpmUghaX6MRb6HxntM84d85kW4VdbATabZVaXEsTmzzzQSG3wUj",
  "key5": "4xtNMx5mP7ZxvL1Kzmj7DjiUP2wtqriviHfLvcFVMULbyPzRyNuw4p7ymGEdpVQWYXNLZoxwDeZ9i2Z7zUxt8uXE",
  "key6": "5trro9r2GyeB4JZcJomdSb5K8W5hksNfPMsEWVZBbNx84PUH86Yptiz7yhE19NpfBJcH94d2PU3jjPqKu2sSAEdh",
  "key7": "5wB3hrZXhhqHSbxKnxsUbnfQ5bXYYdbarHAyPMbgS6ycpFC7XfNSstYgR8ShHaPp8sS1aQLErRCZCeE3aK1oya4i",
  "key8": "49i9dxukMxAMD46UTBjhMysqUkhe8b6U1Y71vfsh5S7t7N1NQd3k5PevxuyAqMcm6AJMphxzPNRY55Unkecmdcnj",
  "key9": "5qYCg5eBJird1CE3vQfy3G1VYvXZ78nki1MJHMwiHXfxuFngwvCrDAzoCB4nCmAes9x8aDtksNDxWscng2xp4rzB",
  "key10": "3JNYQQbcHacFE138DbjBi1ASbfc5JXavQ63mrmEqCUpDEG6yBDBPWWPq38FssJ5hf99DVJrE3gDZz3h1DdZZ2ZPP",
  "key11": "5SrreFk5zeVGaetu83BC3TpHpCWQGPBdGA1z3U4hEZzKhobuEnYbUK8VbmCveT6JmgvWdyR2t5ESBXvN7VPuujNg",
  "key12": "5f7K31AUACF9Fpa7yBrhoEDWoHvTzAUYGRY3m9EdzBfts6cQK5rob3S3xTDDYb76KPmpBFAvJwtpAuhL8cbZL8p3",
  "key13": "EjmwtLZrGaUd2ApYPXBWgShKo2vpbXA3HreXfQbEfF9DFXwX9cZ6pFBkgQF7CPkGoepxvsNLUuEQFRqCna2bxu6",
  "key14": "5nkeKcUndk7HFSHTrZ1m6quqoGVwmMoHncaoWzgrYck1JaTdg5FGtDEqZT2X4eyGNxgTno3Fa8LHKap4jb1MAKpC",
  "key15": "2bwAdfc4o9JmzWUA4QABx53FMnAmSB4Rkst25oetsQYmaMDyeSqHZNNfxfrMYJygmJAHx5zeHUMJ7PDVyuTVQ7tq",
  "key16": "2Q7HcDkK9mdcrfy9JAPtEv8doJfyepCZg8y9sBEtHjmfgKQoqmvn2ZWbe6RhJ5kcgqAw2UmfGH49LuXT4pMGrgj5",
  "key17": "5f8JBAwAJ7hpb7ZyrB75t2vDcreCYnmNvbfsA6AcBoZFKG1txGMe1S5n58fJwFbq2kvRR53XxBYdtFFihDKjyquQ",
  "key18": "7TJ3axC5EEp2rzrjcGU9ueiHT2au9yC8tpxiqQ8FrHbemqxXXL6jeFGVRq3nWqnuamN67fDpgPBcFRa61rBxfPV",
  "key19": "4SfqWnjASAB5WEgTyvkWZ2kqEe9CWELGkdi95bpVrPXDZTxn4XYKGP5WG6T2JvD2xb3svV9bLxv2ExPFZ9D4kUwj",
  "key20": "5Y5XJwzWCjo8NbBe25oQynzVtxhjjQuB9U1mphNMxP1tzsAAR2RokyxSUtb38A9QG4HBM3dP9RqPPDr2Rz2besZs",
  "key21": "2CD5LWwMz3W8KEjdGxBkQJkeP9YubYviEZuuXmzK5bbCfabxP9tbw6o9V8deCrnuJnEZHX55WDwoF65pguXcRTZy",
  "key22": "61kP7rmsNQcshwkGWhvqJMcuLVBm8ujLGk38bWv6SjAxUBDWXnKnoAPAJKZ1eTgL9y1JUosdtoic8oXo7W9BZTeB",
  "key23": "cfbE8RHgMK3hZzwSLm6dLafQrS5MGtmf9KbmYh3Ti1mrUL6H97Ydwp2Yu1iK3r89UaZGYUsxeeW3WZt7FFtaM2j",
  "key24": "3abR6Rm9oBNMwe9hxxRdRDvdQv7GUS2MpyjEs8RSqUFPRMoH27s4tRafa9bEBHtCPLUYiQRD7uptk3kLvFoiuGyf",
  "key25": "57fbsdrXjDQXUzhQw7UpyQCxjgFJFGTzLKG3WsqY4rZdKrB94gq1cAfmfUDLGoaMoTsg3s4rbys3JrWkWS6Ht7rN",
  "key26": "BDahLiuZ1YeraRyLtjL6PQ26HPESQpN8ytchorbDVmHyvyTTJadgZVvWX4JZ9vwYSUTw9kvQy4okVxKe5zQ54mt",
  "key27": "5JY8L11MjDHxKEnNppR1ABoYgSPHfwJtPQR9yibSGyitsMqT1W6UkbbiKn1fF7qgUPzP9fwz19BzYnCcuqqmUhjU",
  "key28": "2ddDSXCPkN8S5HcSnbJKropGHJdJWPeVQFLMfz7qs1NsewzxqM2W2frj3WhTd9UwfgKx8txwnKsz38B2MGw8qVZf",
  "key29": "4AMd8yjUrDsRJvF3wDuK19mP5NUdcY2HFRyfU4sN3qU1PzkmezDEQhLjtr461Np5331h6wpzbQrYE24TJVh8rjhS",
  "key30": "3egj5EpD56ap9G9CZUf5Zddb5avBFqddegW2wwTCJcE1gKp2pARxzDWHoXKDdoLNHrS9M4JSGHChk1GWD2RiTyFd",
  "key31": "4BoCGyUX2t676Z2zj8YfgZoPi4MsgDPt7d7kQtjm5tmr5oSoJAjfmq4EjC41GNiqzfKPLMgfooqjRuPCrivCMfhd",
  "key32": "5fG7NDZYeFpC4mtXStphLrp8L7xS3m7mcggUWdxG4rirAZ8iPA3KNN9ZE7SodRE8sxsryP93LE14nWnw6wk2NX8v",
  "key33": "5b2otnJAug5gEUjB64LaJZqsbWwLqufZZvwULUAkN9Z5A7cAFgbBgmHcKKQBjJ9w8rM6FhpcAAHfDvdVPeM3VQyr",
  "key34": "5F1Dm5GwZERREsDT6G1mEDG9P7hXztXK13moCQdzcF1Xuchfy3vHNqXEYzqNNH5tYvvEJRZiHPVtrtWe8CwWWFT4",
  "key35": "2ytinmcLcnxkEeWGgLRYo3vJFgCohBsstjKifnCZvjm2oo3cEvz84y7vhPsvWJXhUbzGXvdbwMkZsxZxEpX9uWyv",
  "key36": "3dA5K5yFBXKDvxcojK5ifwioMjyjitURcSyZaHy4aKPknMBPmZi5BNRZhCx6ADr5ecYEMGArSNwWkcgjdfVbge8G",
  "key37": "3E2DFJ9TyYSQS8mWQDqNQFow95DeB3nJar4hqHXfZh5FN3dNe9os6NfFdxRGcvVmHdDqGwPooxzCLMwsXxRwZfTn",
  "key38": "5eWZuYx48uYgpYgfs6UEogAVcHamhdxcCGvJp2WASTnWaRhezAu7CKFYLwN6mvasjXsqJpCmC94VqSpvk88WWKHQ",
  "key39": "523t1NdL7SVY73Qj2MAqAemeBg5cVBuzUkrJ8KZ52gKRmhqrmwdAYja59wDnb399gLA97GiWB2Ya45oD5PSXtfpd",
  "key40": "9XHmfAW5S8RCtQW2sgxMUwmBc2vmJt33Uk6hW72GcFUZ7LxkpaUtjrdVdykUuAH35gh7eTRFyV5NQ4Tp1kZh9dQ"
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
