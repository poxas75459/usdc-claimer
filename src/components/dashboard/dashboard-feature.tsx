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
    "KYtiNKDxGpJJJ1k5nRDSbUi3eDQf4fcgWhRRWUsUVTuJiFh7iVQwobg4hYQtcjHmJ2JYfP7w5vo95R2fP3jao3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gXouwtruBh5U2Fx88FZBPL5sQECTJuUi7yCLiSSdMYPurfCYH1TyajxL9LtysAuxk3CZgEYzJaDdzco3AruF2ov",
  "key1": "4ZpRbvEtWLYjX1Fkq4S6242UhB4EBym3SUQbax2BWyh82XiXgTDYvNss168DaFWtnpm3tT7SuL2v95BpSerngATH",
  "key2": "55Ag6djEG5rdTsLWEe9WAmUN7cWe5godfSuw3tV2Qp4bBfLDs5yfrTaUfSf479PJhiPkhjFNEPaJajpohU1rFjWn",
  "key3": "4fATXX6Km4ToNZJds11jS5JvcW9uQoMK6Wc1HWursjGPoyRtuAu3yiLnR4x4PpwPdrr6Ehzd6yGhNN99cr6jVDN4",
  "key4": "Gn1JAPRf9PHmenLgvoKk7A5t9NYvcXUAvVzC7Tq1zS8msNmBTGPX3ENZK5yPGs61kGBDrQBanbohZC2fxDoBhmy",
  "key5": "2xuRDUoM9ZobK18VV1XJ8H1TZwcdDPVDipnhhwAvEEsTEShnM5sj7M2BfVENNocsJBjUrJvNZ15Pwy51bBDbmYbE",
  "key6": "2en4kA4PcDYEtZ69t4zCTyk1EBAxzzveRE8vwULRbG6Fkv1JPnjjvzPko4ecKNJ2XiFKAuEtYHHexW6wcho9jwxn",
  "key7": "1PWnSBv22HNXRHVUiS7aa34Bsxi2QjMQ4ym7EEsEwkXQiBz1xrhjhNZpBBNhzF7kr5mwkDx4M6hu5owE8PcNTCX",
  "key8": "5kAR5T3fCKaaByVH1c1h5KsNoX6K2dzK4vRHSvQ8qbvRzyAC2f2oxPq7EEBQi6Ru8Mmotjkvwr29ToP8MeFudocE",
  "key9": "4dVxBcB5qPkKNXPB6Aq7gb6tEbQFvi6T7xMHiymbNaVUyWYU3hTdvXWhMSe8Q1Bc5HKu8ibFNsiU1Hcvs85vgEdH",
  "key10": "3q61y2XUPpK7LKt1PVDdCmE52mxpAg8rpohdgxSaciTaMxVsF7zHQkvfKW2vBLMj2Raq2BHTGuHLt4YeFEEFRQVd",
  "key11": "zKoHFf3bwAe8k8gF9oRnSdamQMfKDhyqm4mu6VmAuzcWaSaxd6st6ndZTHCKBbAQr2FX4d7NAyF1htK5TcyCbcm",
  "key12": "4p3Qb4jhQW5VbinNtRZmDRci6XELi8DExF8X89XbNCYtw4inSFbiBiDDwEPUUgLhG158z9ALMSXRtbmAaEHpukRT",
  "key13": "4xM4xYo4kTRPhW4tG8fTmnNtbjq9fiuZSi2f3U56LCsVb57k6GS86isRbgdr1GwZgRYEqkxUn4XqkieBd7D23Mzu",
  "key14": "5ipcq26QVjxp9wZ5z6ZLbD9o2dGdr2At7bwRgyd1Az9TUxM6CT7ytMUM5urigyU9dzGCjAyWRmSbK6d8TsYPoZZ7",
  "key15": "q1Y2BDk4Cvft4mVe36EnQLEGLdwJNYL7UBAGPzSZTRJTXKngfuKqLX5EB4fdgPXVfJokS9XxQavhcf6p9uES955",
  "key16": "4Gx2sC73SGA9gYcan3L8fVTiJtkg5nsTgxTj2Pr9HaLSzPGszo12SRk2pqjavhdE23otKCq9nrttcWumEH6bCJj4",
  "key17": "RWWobtpUbuPpfnXRV4oRBjbgJuS7TqtBb1emcBCvXV2LDGnYVPyyUFycuMYwSdy6ujXXfgoGfYiy1ngDsfNnrSK",
  "key18": "5fHJr7QW4iHDpjtp5MP5HFXLBrtsBP89eH6jA3akbAiebDKTe7LoUieFcYNcj2xPFAtB61G2uisS5p6j9BkLyGYg",
  "key19": "2ATYdovVR3ux88DHCK9sxYMagWafk4N3es78ti9csrxCa1U6TeiVwM5cc85FWiyziQgzh6b1VP1LmFwtdwJgkaE7",
  "key20": "qYipmhWF9t22wR8G2B5sEcBRcaF4d5qcHK8QqrX874gCeRPyHvhbfwaeGjkGXLiTMRkUdgn4YrqPZCKXMi9A65t",
  "key21": "3Hz8QpqNgiBdRLyVuaft42z7yTuMFYPbqxzhTxQVyoe7j8jr1uiwbZ3zsDZ6iDdAsADmEDie9WjGxgDUv6iujXtc",
  "key22": "3ZLeanrt3Yu5toQAKKKrcHJiqVZNyzVEAXiLx2aVVhk9c69hLRWwbfgeJpKNWBC29poCEZoBfsh5cEvKvZMhtStE",
  "key23": "5gNYfX4hCZYpNM4VqpyRNydviehjpyZySPr8mJMcM5WkeCf4mUrZ7fTJ16DW6uzwMQr2Y5t7EWxR8ffsnQG31fQZ",
  "key24": "2yqvqiHup6t5e9gir8WaRGRudkCLUFHcNMQLhJjhSGq1ndnnbVs5Bgm6yXd8fZVMREbbWhH5moBdUD5UREDG7BE1",
  "key25": "3RpaL9Zi9EcSq3gezu4ZvYdHnQDH2QyqoMMg7tjxYwkBZDfy2D5PdHzpe5vuxgcze9Y1bsbsQS87fmSMznFwSYqu",
  "key26": "5EqD98uRBkbWPkZysNqUWoiKU8pdV6WRrnAXAJS6Wf1nBUBdaneAf2CkJRydcKYen6LWhfQYSkGyqkw7yzSkUNuk",
  "key27": "5KhmAtqU6CLdyoudDEbvT45572nsfYhpexCuUKB9jpJChLpeLfAAJT7Q1KBkbecevkKHkgKTfZec5E8Z5ReSWHVe",
  "key28": "4qpMhuRhTPGpwq6cdUHmn69i8EJVEjKLmQVayeNTfkf9i5exraqMLSypqKcASyzKPmNje9M79mkYRGRtcVpdakPh",
  "key29": "5q94bLoUV2YfWihaXxNSE6rb6jkYBAjR8vEz6q26h7DRtN6Y9iUYfjcMsvHtX3Z13JoLuXVcB3cLuV6tuDxLQpui",
  "key30": "398Wu7s1BfLMDT5eKeFuj5WSi8trdrVMDEWHiwRDJmxx6sSP6cXeE16pVcp4XNQLoodrSukzU2ihBhfW9LoGsPGz",
  "key31": "TQcfJNymQJFTxw9HPS6kE7a4H3imZPYmhkbpZNHJjjJDHTuAyzZStU2CPDydUXvAnoYvs1YktkciM5sTqfSzu2n",
  "key32": "39H2n3Bn64BSioTu3arJKgR1BS3iEkV579X3YEJmpsn4EqamYPfMZuyxfZZmuR1QMacFh5n1TcdZGC54FdRMokkN",
  "key33": "5HNU2pfkdy9uAgtpyRjwbApdtfrmASgaeU5t1dLBBG4kbF4BAFpVoLQmKnkFQwbuVSfB7J7tvBaRHNDv4kEGKMiT",
  "key34": "4Ee2huCrEKJujs4BqqYqHkNsWL7V3MuYmFa2UKoFSfT8cBEMsVgCL6Dh2hKdWErnLJzUZY8nVY5mKAFFbJMLV5Ym",
  "key35": "3sT7Rn6DKr7iaVvpZk1J5c2nJfGjEyEinZoc5zG1vjGARciofKeDh7oB6xc6soVzu2KvfP2D8UJpPeAZonAZsqiY",
  "key36": "2mYN4fB1NuFrYMu7gKEt18wALkkyfERjak7ZqgLix5KYRYK7GfiK9VuzaSiSGFuMyoc6Xw6wUqmLsfUQHohGe3Te",
  "key37": "2DzWfLhJU1HLggqTH1nGiyo9FR2QFSfUtJQvKEwTZ8eJzUFDEZPf6XChcnxy7GZDCuhtQ3NZDvzitbsnSA3N8X94",
  "key38": "PqJ5jg87KnpH8Q5FVGRvVK4NLnSwxrd6HBvmR5qNNuY6JEppLu6dWr613UAGZ5bPbgirufbKxkmbf9j3nFzudS8",
  "key39": "3DrDPXDFk9sNZd8uaLy1G3RAS2YkXYnaw94ZQd1Au9BxXXDp9NzCoRwfsFPvZrmxnaEkZGVuh3Uu2nPXrVpuBMuU",
  "key40": "4GFjKQbn4qYrNz9Dam53e4MGutTW1GrU3N688s92AaBh4HwfqYecyyaEwLyMpmvPSXcBESfSgMoypKALFFc9DnhU",
  "key41": "4RRV55UZEU271jCQh51xcr46htY6ToNq9Fz6yfYozvTYzAgHSVEXgzYDmdKpE8KiwZQTPUexL6rhREf8ed3GAov4"
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
