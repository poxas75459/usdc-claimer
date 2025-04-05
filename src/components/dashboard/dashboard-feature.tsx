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
    "5Lg8k7sFA9beRwifHs5Y8FM5MBGAdM47Zgs25JdrVhuRvQU9uhP2abwHRyEoNzSqnCcsrJm7xZfivKZLbiLTvEZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "648cGHBA2WgmzMFvTnWMjEnWwCqxMmakPE6XU3wz7bASaFzXS7sBo7MDV2L1pPqMQx3qroCcse6tdrq5wEBVr33Z",
  "key1": "3VBoGcqPtkdJ7t1nr3JLfYDekYUb75zVqe1mkZ7ijLqE4iLuf9YjDkngRxVpNJEiPVhp1ukoLDVvsmf7djghpbWC",
  "key2": "2CD6doKCc7SzU8kPzgLgVieXoeBQd7ycXhQoVkUuyKd9qDWwfoS9iirg8N2giVXGzNrDrNmuJXVpqJvf9FmvGWR1",
  "key3": "fZBU3sia8zYDoM54Czerwqxg5jqk7fC5PEaV6gYTuitt4xTVDTC7rTzmFdqsJ5WGKcRYkkzXLbkJjsW731T14QJ",
  "key4": "3JEdaU5XvxsFEqvSY6k74XHsdFvSrPZN9CLnXb99HbD2dNUxQrgjnbNeABd1Hrw6ezhyJTC5q2UaZ7akxhTTZfej",
  "key5": "65iqQ5urrBv9CdLQHQyzSy4JXnUGzS9WTocZ76X4SdeNde9jPcVHjCewcSeM6xk3UnXf5mWHM6TcRH6xBFgcPVki",
  "key6": "2GSP8zoAXc9nHf92R4FbTzYPDvwhQcmZCXNBbGnXyDgo7nHmPKCDcT44gpqhpk9ju86A8QgR77CEhoAdEGMNkffw",
  "key7": "5WKzyFzdVrYnnUPXqXfNoiGa5cUg6GSqcsRoXXd5gcRRES2vEYiznSZqcrrwohpyCusiMetMXLmkVmtATLEn1qzT",
  "key8": "MbN9e862Jgu5dP4S3XsJHKD2PQ2LZDcf38UAUJux9Wvz3jVs48kjQqwEMchZhjK5FzoEoo2rWCRhnrAHxd1UhEs",
  "key9": "2e1LbmUA1tGQVp5Fnwp2BxWiyBk7MGdmpJ6zFg2wEWtD7q3wUZxZagWL9CrqtuyjxMaa5XPtjsq3DNNL7vFJnVCS",
  "key10": "4AEGEqNJQsmHbRSaQFuxNdeDykYyT19VTqmyadFVubjcNuJujArVqYgB1ae4LSNRskViS58Ffx5fFATkqLjXwrNe",
  "key11": "5eHpXgpP3PjzouFdmVxQyGxeg3JcQAL97cGzF1d6yF3xcVpEvYgMd1qgfb2u6ysN1tZ8Lnupd6GTc5eAWLs863hf",
  "key12": "oCq3A9A23xdgw3XPd5dt2qeGHAYtziCUj4DgfvJ23zLM2sFWB2zbnnaQeegRW2b8HSeKvbsMC1fPde5cZgjk5DC",
  "key13": "2dYLDhWwMr8pwvBeyxkCC5GZDFLCuuuo2X1c1ph5tvd6RfRnUqXwydVntpRnYRiVKEUnsQkDFi3xyDgQfxr1u2m2",
  "key14": "4gMGRrmZPovsTK3AoghGkvZRB2ynZqm42MTJbubwvm4Sy1vK5Sp3KnboBbyFKgTZCCwGJQCD3VRM4zqSGW3cnFUG",
  "key15": "4VGsCpXWoxH79Hgj6aEPzJuFEoHv6HPSFLc9kPmRcouDLWBA2jdoK7i9ZUPALFRoxixjxvcqcwaRXCu4g78GMaYX",
  "key16": "y7cUdXSDKibfUCebujPYLq3z3CDFyE7bjHtmxBccHyWFw8HNDMRMgpdGkfZXUABKVX7XTnBP62wfRkSzszXPdBP",
  "key17": "2Tw66QXYE7yw5D7nzQuvdW68skvQniGHhMRYFqJR1S1dKEMv9Uqv2DNUV6XHTwaiUeVVGqam7dPLYoJMgFp8rJPE",
  "key18": "3BQuwbphQpsgfuL8Edxof1PZkvUBrSgsuAeZo4a9kfYK9TvHmufnpMGQQRAQajMhwhqgRMLcTqqjF86jVbYwKCJA",
  "key19": "43DpEXG1VZZUXugw9oAC81Q1oZJLyHL7pLQWLZhY6YT83FCv51h19WmEd4cdTkauuX6bLxt4RtAHqpHCgS8uhMsP",
  "key20": "4TWmAfUmsW4TobgCUV5kRx7bHa6pXz63gA1Xyz8GBPx74CrhuQomYRT1MyudrL423guXVYYUNKhgvgEunP5QahZy",
  "key21": "4EAE3GTFC5H6TPPUjQqdo7wT1sTzWAgNXMPV6kuEwCyM3q14CEjZmG1CZGSnt83oyGdz6tqzogdWZ7CLaHsUnmpW",
  "key22": "4cqi45yzjaDyaXZnRPhRE4v1z691wYrk3RfEyc7jA8KzRYoiMdHBQ1xmUHNHVzSmqW1vSjD9S23ARHBSwZ39zQGv",
  "key23": "3fgrmKRLnaJEwsktem1p8z6Cf4BizwK224CAHRSJ5mgUtSF8EZcfaAgyc8X2rSnUDxudnakNSkv1vZxUkB6iEfee",
  "key24": "61wgMZZYVUprL91FFJQs1KJWbwZouZaFq6yYxg8fFVVpjP3cLR8KJWefLexFgEpYrCQmz8wGt3pmVcM2G2DF4fGo",
  "key25": "X64apd5oYJqUg8kxxj7RCYV1pbKHoJKEJbUpxyHPceStByMb7Vd5pGPeVnjb1CDpBYpJhxrtXLuXL9ezfDBf6DJ",
  "key26": "3xFX65Z6UeTUUTFoy9muT3NfGKgkmhQfrqF5wwYaGnscpgZDrt3UjLFZKFQUMYiQbR3X9NrRAbD6Pmvvw3hx9Xu7",
  "key27": "5jRwsBsKjeotgrSjP7G2C4LcHzc4MmaRnkUgThTTc5SLMM6877XzNaFqoCTjn7K3xp6GjR86WwX3ed5TdEdn8h6v",
  "key28": "5VCGAD8ZUQUGPADi6Fgti4KmrbV7JGhh9j8aCkTxpWuMTp1V4h2D72qb2euyUfUCbWPQ6mZ9GQFJHzMyhCGeTHZx",
  "key29": "WetZW3xYpcqLAG1bTd61h8Lc3BHR4CDPq6kWjSPsdn1uz2nxKg5EEBGjGCmpcggtzr8196x4vp9EWRzxkYNrGax",
  "key30": "48he12aEwdRs4Linq566JAU2zWLv58sbQPJXgntVQ4y5pspnF9hFAEDk4ReomY6KLMW2cP6ckpgmatzPTnixVE9P",
  "key31": "o8JJdPRCgCqD9j836Y9FG4K6ne3yCyQifV9QWBjnHCdNDiEztvCnfnNnDJSzgLkcAMVYBMY36fmL8RgwLgSnDz2",
  "key32": "4kVF64hzzyZoKLCyr7AVmKMBDmD9uNZ437Ma2suyeofRjmU5j8Nmgc9TxWJjiC561nLLeCRpJqGVa3apLo2eQ2Gf",
  "key33": "nPN9kureLoqhaY27qtnAMMoodprYYENsvVJ2cdX1tS6Fa5H2LsEbVok1CpTGdFkKHACN7rrF6aNW2YzCs5wUXH6",
  "key34": "nJGcnqa5hMMjvxv7Rx4Vgp9u3oZABwVxBG1BmBZLZaGoPeyv1DsUh7aBpKPF2yasKuV51ptQqmCA3aBPrdqmL1P",
  "key35": "sm9NZwYQyNzyjcpeQK1771BfZBNXidMJCDiYKitBLFn4GEB7CgqyVLqn9fFuqQr2fLC9EoMirKkn7AuDRdgc8Lt",
  "key36": "gdHezngmF77PwQWnto6Cx2K6dptW41ys78VRsk3U79vuCzP4w82TeuXtQTwxfLAPdKKANRbJtDLedPvB8nW4WXS",
  "key37": "T4ociPWGZX9npgfe3CkSjHAXNR552h6naUk7ZgtdGAHsNNMaVMnjuu5Vq19VRKkaiipbo4P2RAa3KtUaV97tUvM",
  "key38": "3ygG3Zzdr4D2T21AQkJvKNcxYQt5Jz3fgeYbTfD6xom9f6f56R7EFsgztfJHqBCQHXSgf4QyYxvHVEfh6urn5q3f",
  "key39": "4u2zs4vCDq1QoQbq5jG2gbsyKXu6m9vNMtr345xBAHt1nLYYo7Lufuwonk8JpnfzZjFnWNLWHERax1UoBrpPVw8q",
  "key40": "3MtdqfoyGdjkuNsyCDpi6AsAuoNUv7jWC7JRX18EjsgY6aTGAif5pCPxRaEQPPatuvKoe2nd3BjkpRj5k5PCoGGa",
  "key41": "5rZ5C1aykJom1gVfspDkmHJYCKfUeq8Rr5ZYwUeZ52iCyBqQ6fK2HLHy66bsUF2LteA9r25mcnsEBjYURfC45y3",
  "key42": "3zaTCYrpjnrX5LUmQs2LSfEz5sYgbsWXNLBCLiCUrSfuvnzCb4B5RGy1vEsDPwunWRexfgWciXGxn1S4pPcj5u3A",
  "key43": "5u8H1CdtdEawKXhWyBxcNfcpzUDtWzfeX1gQdsCXsxvjkLDDAvdwU1tctAepacnyYbWaUy8nu6qJW5BKapqJ6TE",
  "key44": "4zYDy1ALrGRf7hmHWGMWtWGBmWyNPqgGyTGVHYfSiyHfNCFQ9VLYQyByBAUSby3fRywoEsJdvU4vpCJNAsRzu1uq"
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
