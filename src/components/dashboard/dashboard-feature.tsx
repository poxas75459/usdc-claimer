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
    "4qDFB26gQt5wre9QvYe7qnEpnfEZJ5eiVypXL6ywo2uUiYZJd6wT4HFudbRkjEmuaJko675NpFURhChyfw7y9eLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmpPZ1Njym6H3LU8Exm55j9LKxjMP5Rijzqcma3Po8UWraYVgUxcW53hg9beQTh5i6EvQE25Bo5Y1T5c3RoxGYY",
  "key1": "3auhfjACFQLtHxR7hfnbcng5c8B3bCV3PMnu3hCHcysJv43VqjQgp2hXE1TrsKPV2Q8aSDRMU4kcaQ6evLjYrNty",
  "key2": "5PKFLt1HEH2jTp78r37TaqYgTG4ujVvE3DUH2LkwFLboHv498viqQCMJ1bg1HujGCwzXNpr4mqFg7q8AA13mA55s",
  "key3": "3jbYhAEAitmVziuvQDrE8sxRF3KRmr3MXQHmpoBwXn4JfwjrAXF77zYptzg7VCx5KrXuBheFhXEM5DMmefBouhGt",
  "key4": "2h1KsfUhds7HRC9LvEe3cuLZZThQP5sVVWAy5yx4RQGiYvBD14kkUdTs77NiztxF9cwgj9KDGXd2cmqJLeVwqerq",
  "key5": "4keq51t2PgyxtVkttuAmPq5xWHF9ppiCe8bz1jrdG8Gj5WvbTauJFtWA5DYM7qEmzkM2WeZUrUkNMX4T1Soz8BDR",
  "key6": "5Q9zq5NeDn6GBgysoe2QaQQhx5UP7QnjQ23D3QW1xpFDDrr4syRJ4Nje5xB4GgSrSuWeA3SamCogsQLcyTAXxN3G",
  "key7": "srD9bpz2KyWYLcFz3pvcZuDTJSciudvByLm5gb8LSqxcZXrQJkTi7bmMPB99HvyoWmnsudGEe1ws268KFYcNCRm",
  "key8": "26CWi7Bz43Uq7gupXykssARQZmWx81QMUk2q75xuyEZvodURRywq33GaUBN5HvcSXiYxwzozt3wAuaFh98Fx5nn8",
  "key9": "2BRxF143rJsA6qWkbvVgenjo4xn4Rqw9ssgxporADy27BL1oxjV6JBjZYnwq5xohWJd1j5ZRysXfN6JpM8bi1bb1",
  "key10": "6xpws2aAfTRfDWwVpNdi7qsVHp5bN6sXJQvb5zhRJ6TvGBY4pXv4cBQmMF7q1f8bY2Z1AauU8wRaf2yiCUVVpaW",
  "key11": "kR6SyvaWHDT8xHZ3HJ5PdBzBCbfhbWSeFaVpXFNSVwQsRv4hfhTRtrdRkRpWrhGewXCcFJdFJ5V2jy4XWRaUdLo",
  "key12": "5xqiPGhfT3Mifo2uepKfpXiLJhGvXgsZYqWLKgYD6cpFHmP4u7MqJ87ypH3WmnfgvxThDgqw31UGJY4SGjVAHFA9",
  "key13": "5X9ZrkTHWVHQH47pRiVUyoWBFkbWBYh9LuWFC5NhYJjqhrReDVRPghL35P3K9hPyU3FFh7b8uVocGpXuDATe9Uy7",
  "key14": "2fU3y3oTJGX4jD4GAw16Zmkvh6bQqCTn6PFStzFz6MYiAMZceVVHhw5xTA7mtPK95GjQXn6YtM7noiR1xAYDje2z",
  "key15": "4453LpnptiHUnCaH76KL37H87gjPCNQX9wRtacpaseNvih2wkLVxxbCFNKvWBmyv36pdWBJ6sYdtoLvNbaBTyhfm",
  "key16": "pJ7UBxbbwfeDJNi3cjdhCaRgwP1PD3HXCtrCqdQo9ExZekeoPwnzHwiQ9z7RD6yPdchBAaRMmy2jc2KN5upnq7Q",
  "key17": "4d2itWMUEcYukXxk24JuQWB2i8Cxrjg4E6gwGhVpjNbsn55XDgtK5sg3w8K1YeMfJYVvwxmk5fcxnZpxC1ZXjKMq",
  "key18": "55rzJLW4JTryYMDCzHDedPXhi3UxUP7ZyARZFAMyVtRDT68NfQWPvp8VEvkaFoNSQSED4xhuVNSnC4L6YhLeEPhT",
  "key19": "3F4BGc12b9WrJLUqFqUjvxtCU5n1nKnup7UawyMyEiEPvRi57jjycDktuisHGX7QaBn8GknpvEza3cVSzYrDsQz6",
  "key20": "5xboQzwPHyZU4YByU4TYtcECQBreubTBZF4W76H5JzWL8TzsCvyP9oTjSyL4rUc471HXZwnYFssnRQvjViKG8r8y",
  "key21": "cGRqyZRuCqfQ8M93G2mpkrw3jw4PsXa2nMZj1mpvYUM62eL6jdoi3wkKLzP5uuPGKCndfBQC659AdZSxNuMUJeJ",
  "key22": "3Hqdmvc3TpkHuWX1oKB6poGmerHsjBPC7jw3Nx18Zxzu5eAUpeiXUUUf3gFE8VT2MTr8zjLqmEx8qtYz5UYDBLA6",
  "key23": "53VEDMAUqivtuRBRP1zNsjnaCBzH5m7siKTwRLVee3y3rJfj6TGPMW6LZwcfT6yDwDL5tnq6uFbr5f8fWVcxm6Jz",
  "key24": "4iJrN3E9GAsWwyT3FCB5UMNwyFkeY1bnpnbcrfL3FwrhEb7d1LvDFcB4RY3VU6ACWnXtDVv1yd2GyB3j9iE8GXnn",
  "key25": "PuPdsF74tNq3jD8xHsjk6oontUnuzHWyKk4Ru3EgAhbXt9swUk8c2bnN6YeufaFDDQXhYJDnA3eTxyi4wfwWCc7",
  "key26": "4kagUu6P8b9x6uVHHYMVYEoPWuXxs5wLj9ryfRZTbRFgj6fnF6NKJbEdqa2eMC6fZgKjj4sExaSy1aG4JazJhkFn",
  "key27": "29Zzo9599GcxQSeMgzy7etsiSszwTR3dfC9f218oKRPepxQGH8i85fibBF22uUCGi5KHr75eXqNdfkcmVfKnPhsN"
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
