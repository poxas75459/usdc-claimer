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
    "4uCmQR4ybXkHjQsgmbADW4ZHvX53ndvZAZ9q9HDukYjghgGoyBBbPCBmmo2NDXgPC6CSUJpu2o8agJRbDTH87NXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zmWqbwK3aKeV1XdJ3nHBBzhVAQar4gtu3yqLDTwK9jMLJMexPHSrytZvsEfQuGAgHbYV5qVcr9nPy2uuTP44sWY",
  "key1": "2BVaJE1uXcEWYwZTMtykwtVpJBapeHxHHyKAk3tsYougVfexdTcagBgCAYJ1A5okeHZBZCCKD83VP99KpJnfHsEM",
  "key2": "EGhhjYxQkoQ9EorYnqec3pnDf1Tb1Tu7ADaLkabz5SQt89xZf2Uhst3tYowH4oAaagBHK1zQGP6bcF61C1gf7dH",
  "key3": "erNvUBhwJ7fLCBQZAL2cM7twpW81yfajAiSaQbgEQC5vxRceDfkCCWLSwG7vniWfixPWFGeX7buCiCvUvBGLX34",
  "key4": "5pq4KoPDiu4JwcP3EYaCKCGCgbsfgLu7amWvtRT4Ffjo1hZrNXMcGBHjC2ifhP5LqLVUGBRZwvPGSkYohhT62Xy6",
  "key5": "4XRUp2QzBNHwz5gg5YqwJRn5oRHtxuNRpYhb9LMsJfspCR1K2PJf5TJm8vgi5EYPrQDZcxDVVoVjoDQh3cEhMpRY",
  "key6": "47gTvRNuzJGQkPim7Cn5SHBQgRTa5cf2b7y1dJw43UsuMZFKg13fjgdm26FG8mpRtZPG11bhNoiYoBHyNxzBiWEc",
  "key7": "271bF6QD8ecctS5Hb9dQX6Te2GXMnkwLahyRajAGAkuA6Xq9VuRWEA2X29BxVGXA2SwTwFHHZ78XPmYrQGmaEXVB",
  "key8": "31e9BukKSBBZYsrridiLkVwqPnswTiAw2vq26qJqAxES2Bd3z93qguFP6eyPsSn1TxXZeMTjw9ZkrLUwAHFjC7f6",
  "key9": "5Fw9UMCf4uXrgchMkvAUzVkisn3BgrEYwXqpWRHwhPfNeYxGbzSLNNATnkBihM8Wie1DGbvRExzgcw8VSDQuF9SS",
  "key10": "5r7fWmZ3KjQvqbqWNprBtyWFEteHjMYMKsJdU2TtgBTSDAmtTxe9YKNdkzFmTadc4faHSyHUpboiJ6XCmPE6zvkj",
  "key11": "2t8SDh4ZQ3iDM4pbnb6RvV8BcPEwxFqGs9Ac9Bqtr31L4rqFPAmJ7h4Mx48mc2xPSNEgJuBmFxnkPxuB7wJwHy4",
  "key12": "4tVsCGbRwBiC9zcSiTmMoD8soVYc6SfWAC6cda9C291vMRYBKQLY96WiVBXfoxstsyxQqGkHbnRFpS7JeVm6FiZU",
  "key13": "593g3o4S4tNuEHwewWT9XKawmudyC6cbq1U6pfSdLqZ1vYJndMmfiymc3shT677rMzVfMiuqQgedDW7J8AecNxSJ",
  "key14": "5mQhRvEwxQnaYMSkazGGdCg2pdo4pYh6aCdUP2uP66Y8rWmjsNNw28gS1GivXiTzwUTimYSEx7n2fpafb4Xz4gq",
  "key15": "6p2843Did3NVNd7LHggHwRmaSFeLqCMYBTFh3ejLRHuZkd8V2Vt3gmXQNzd5cc7Rc1Jc2H9ewoQR2kGvRcQ2WiF",
  "key16": "2wFLZUVh8LwNDpjE74aWj1cRYdF6sMuwqubXVMDzfsDzKjjjcBBvFKNcPHH9LFm311LTk4UBzBhY9bVnhCsuAgDy",
  "key17": "3UDuvVY7bPi1PYiMfVktG49B3Hhfzt67QmN7XKyv3AjLv8eVq7weWqnKFKQb3NBAGxM4mzY1pJo3GR8smtwvGCML",
  "key18": "jX1ua9e3g3KBgwM4zJqQcjYqdrCTaAQo2hWrL6x4y7h2mQYg55MZJKzhxk81Ute1CpNJAwUArQWSX1SAPV7JRVa",
  "key19": "4GzeLvde2PdiZQzm7YcrX2tJP9ep1wJfwo3NDwiHPLA9xtbb4nXyUnw5JMjHb5sZVtjiWcNEY833BahR8h6qGoBQ",
  "key20": "T1auQ1XD1k2zk9f2yyJNDJiAseWFm6PuJ1pzv42iVLFTDgktz7shn8J4Mwg8ErpA56bu266MACgxovX8wXvtZ7c",
  "key21": "3yy9u2oDQTHm9Df1xiwthZ6gEVjZprjc43tZ2xz96GKK5pjbPSz2ZSgos1manPkvs9gE751wKTWHpF3a64ut1Rgn",
  "key22": "3e9Vt6kEjfAQzTPoSKEhAfTMnxjN4CuLb9qX9rfb1fmMmLLJbZtefg4wPRAhbZ2BJoWm2o7oJ6xQJuDvap1m9vQq",
  "key23": "di9iZ8NB5FnUcXoEXFMoC6dArYBPYUhkLjtK2L7fRpSpJ1JJBQ1QsmRt1UC9gRtRwM9BC5Zx9TSby1UbB8tLcAu",
  "key24": "svGZgykFbPMMv7tcLPYdb6hUANE9SAMCviHp66S4zFjpXKpsN8oyyVHJgh2XYGdzUgBzMNWqsGhDqMnAasgn96m",
  "key25": "GRF4iBkbFHQ9T1ZTSqTLPyedhtoBtNUaSLAZzpqy4DibP6inwb7nzj3D2AJQtgbPH3zPQhAUMaxcTYTgt3Pi9TA",
  "key26": "5b7AypEBVbktiLD8aDMQc2YkbbD5hso1a7ByFRGbHGwFEjruKqwLA3T5faV5EjFsYhNcH4UetNXGr5JMtx2Xadpx",
  "key27": "3YSSyUfsPJZE1jr5FDovuJ1MJfBm6n3MA6P48jTxrRH3wQbSvErHZ27xc1JCcrxguLkHBuEZSNujqri5514cJ6md",
  "key28": "34pcjrgwtUXHnc7Px2ZXHi4Q4NCCS9MXxB48KT2jvtZ9CQgZV2tLz1ggQ3yZ5sxQZxnPU3vRj65j22XSWtVBfWVX",
  "key29": "3HNCPR5dYf2eFpWfaBrD61w7xqTJ6Af2WFGd5HSZcRFNDRTm65BBLwJDxKhSuAhoVeaXmummSMbPpUM3YeegbHN5",
  "key30": "31YyxRhfKPyDzD5P6HHR3kZJPzXBj5oix6AQvhom38Ebnivk3XTGe6zYHFNsPu8PH9BpjxHEYVrFRueY3YtyZiL9",
  "key31": "54NMCT46uNkuj7q3LnqC2MDYmQ4sM3gcQrthQvtg9pLemisQKas6zBXG3WY814r7amMynNXfGi7etZsW7LhoomTv",
  "key32": "5UB6xp6NJDgt2Sj8ZS7PcY1dwjyJU3V8J3VPUKyHgWydaRfXmnFR38LeHnJMjAtJ7B4MJeZDFTA8NnQZUsDtHSoJ",
  "key33": "4LixcScUuVtu1VdUBnndaYLArcQQPMw35dCngtHEhsXvswdUuWzMtMygyAoBZERhTX443jBwhchiVAoQ8uYKTaJP",
  "key34": "2ekwSmUdY5a1Ma5621ndStfBHF2cDXDD2eTG1Rb67QZE5uoJUwtWwd58vjbvND7fveMQxpepoK4ifqqK4jccvCUG",
  "key35": "4qR1z4BPLPAvyF2mLzpWLCkikHzxsZrzcQbyKUixFSUicyxzmPn5f41BqFCgJFTPHbyEDLqbTR3TsSLYYxTq61ji",
  "key36": "5PHEwACEvhJfBqnyZ58PnNQ2mHMMGyFSp6heErS389JV4Ky6ZyCZ23Ymh9izw4JnkvJC6BMFbFeP1rt7x3hW6yi6",
  "key37": "4PmwFebw453cF5zYhEQDxCRppgZ8KAoeY2GCHcaRnfggNAHdfCsTBx443fpugxzUGrPHM9SQ5D15AvrtxDHXx1QH",
  "key38": "2TJC2AEBS3AJ6WZwtULiuvU9Z4pTzmxNLPXvMrPjoBoY4thAp77DPVK6pYK15VGjS5xF97bzsR3EbZuzsgkLx5C8",
  "key39": "26bWiZZNAeKAr8txMw2kJAFAn8QZxKjp2xpPkTeJikUBVpuUMcMzuQHdruqoinRxFFnnrrBqdpVdU5QEwgMMbUZA",
  "key40": "4SHpZYT6H499sRcvzP9usj74Uxkwi5W4CV3YetQN6AfrjSSPXsN2fWvDGbPAZP7praNkNyKezN2UzgyK1nh5CidD",
  "key41": "3DsTCsGWRPHADbNqwSa96dSZL6D5TMxdTc49BFwckMDmMdxwSSza59Xt5hEFVxkt8ecaVjmsyoRFuraK5VetX6y7",
  "key42": "2RpWaQ7EyVKS58NSak8f1CGQk7gkVz6RyUMsHq1zxEu4FDZpL7TSeeFbzr2nb3KyX7zZL3KdV1zPzzBHJgnLURh3",
  "key43": "2TAs4mVuW8Ya26W9VnbXnnX72hBohhLfo7jqNVksCe67arSTqZf3vfy8QfTLWCkkSi4XT3HDyqn2G8hQiQTNr9b5",
  "key44": "51bg4m5FYb8TNmKq6wSFkMvDi2CMdcDofqXHh6XvwLrQKWVAeVDKrwdALSHUS2m6irtX1JHNX1QseAXB7L7poWTy"
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
