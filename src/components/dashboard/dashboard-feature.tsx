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
    "54db2iquiAUyJyHACPzTJFMqTQAi8ErqdRkcpv9vaZBhEHB8LkBoJv3qSDPiM5bTGMqk786hAECkXBAtDMp7bUqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XwyfFPYGBxNL7KhaofJSADTrkDZBoNEFrVT5LQ6BF1yRycnjWsixPNAwkz7T5sDcbLevbAccYfU4mru2zBsLTdj",
  "key1": "5kpkiSE3u9y6TCNLKehCQoe3vi1EQgXE535DisChYiCqXKbVn9Q1moBAnwbFVxRk9XJL2f7LQdNJYxHSNQEhGUim",
  "key2": "2kv14q7dqZ66gNB3nA8nLgSoNUD3vme7pqZ1qf7W7vvZKyueTdwaYT6TqLZ9FjXydRg36Cqog7umQrS3U1VmRza2",
  "key3": "mAF3Do3H3vYkgei3ox56zPSNJ7ciN6gd1Z7GHRyTTkrv4xAygHwq1rkErbY8axhnbhxmk2BWxdco2bxVCSM312i",
  "key4": "2YZqznVc9WcQM6JiesAaPP37RzoLmwZ9sLhiNs99wvg6BzVgqeJRaAT4SKNoJTpEP9PnFwibfkBCza1gn4knvTqJ",
  "key5": "srhGCrxuZRzviSBjB8FoZqzQmyfubLgrMfP1txsixjmcvYm5gcGrkU7T7rYq6DrYRb8ssvx4gcbrc5PPSfoc8Yb",
  "key6": "45zfcmufrbrhyE8goeGTC7WmSs4mo5yoGKDhSXiHUjBAtAngM2KRgiCig1k1iW9JjWYbSkWRYGHEK8kkRbeuqhDv",
  "key7": "5ZqD4Rqc3dRijsFcgsmiLHXogBe3Dh6QFKX9fBiJTh4qLZFbHQps3mDXd9yX2D974rUqDMX39oQXyr6yqfzyFFh2",
  "key8": "fDSvsyBbecRqeFBFG28M1fqQ2Sc4WdT4toRyDdShsW1AMrB7GRumoBcZpqR684WyK2jfBsH46am7ATmSh1S5Rei",
  "key9": "3q5uAkfHaGsgGfgVoSZBeGDaX53emBbUJnbrE6seJ21s4LoEx42x2YrxvLAfzi6SAK6bDrVNcbv9is6WnnDuK7mX",
  "key10": "4XSa3aLmZ2cxpiKnvGTos4AU9dXN4jCn2DfcmdXtnajpZh7YfaXdbYt7R7ayTMEhbq4vUXYcXm7deSoFQabywFAv",
  "key11": "RxmVhjp5Qovtsp8CCjYDokk5imcRhEQGeHWxXpsX6nBKDoTCHeSidkE4wJuSsQra3TUuMPGq7M49UwH2UZzeP9Y",
  "key12": "2NPpbRCkwN768aNcDfm1L934K9oHqW4DW4iaa8B7jK89BJ8LSwbj1qkbWCBCjbV3pKMtreS7YtR1U1FDYwdPHuXx",
  "key13": "YTMshrZvwURtJRqB1sx8PjXZFZybFMqu4wXjH93NjSo4cBFgwCa9ASEPQX1xAG4H5XUPFb4A4WjZDahhSGsdPB9",
  "key14": "4eVANjButyczoJamjLmtLnwW53oXacTRQrnxEMYnNpfXTWj9k1LWf8eXHtTzee1J7oZDsGgVphQk4QwRDK4bPrAj",
  "key15": "3QmeKF3LGy5Fzz5J1wxtYp1219beUxZXycEHdy896LHycmw6Vpka43mm9to15zPHcGWf6owCiPDZNiozwXBHh1b8",
  "key16": "24BGt4ZDYdfeCmjxeXFP19zHSbX6QkAc1BZbARujZvseiHztFVse5ohGHZ1H65BFAc9NDi78nxxKyhdfGgfTFhna",
  "key17": "2rD6C8vLWtxpHrt5a23NBb7nLxCHHM4msgajBpX3hQGgi1VKKFvJdec35Pjp6przkAwqdQtoyur5m1xa4Pt11Qcx",
  "key18": "2s1CCthvBhXz736XB9cFiHDtZHd8qLMSnAr6j4Czdig2bcJZzn4C8Po5my354CxjfcKeYV7dtXDwS5DGJeR8c4sw",
  "key19": "3cwpE6VAfvn8DUBDE8G1M6eVbViCJx7vqXx5dbbybhqDcK9KfemWbUApx9wSp25XwyNVG9ku5hz9qiFLFgD8oRgY",
  "key20": "SFjJV2ahV1ywpVK7G8EvuQ4TRH4GVHgC7ZvgxaRyDybQJwMKJx9hyo1UFZz13deDrih1G7DoNGViqBcBo1sFo3P",
  "key21": "2QaTptfoY2CAJMPydw2qdzaXNWqa1pNvLjSZUCeWp62pmtQL2TdPN8tTBxNsPQsu8TP7jAGaBnCk7DYx2EBaFg57",
  "key22": "5T9fL1ECUnEc8aaWmQJgqhDXn186NkgqgPwsJkr6HXFSaPmDdsPDMKhDzzKwRskH4D5cGFPvR5MtDLXKmrGRDaob",
  "key23": "4VRQonPvkAB5DHwf3zkEvyrJYycpkamtJZRJikP1SKYr2EXe9CYSnPShECtZHReV4pUMV2FLYpsuyAT7rCSb65E",
  "key24": "3MCTBSGjUvKBmMGUcugiAXcetqApbgPkQBsXGy3KxiHuNSWKvvhmM1aayqKuqnPWaVB1kbKBrpFA6QdVyh5rY2yK",
  "key25": "4LEgZctQ3MmawHELG3BQUuzmmG3E7S9VHepgnkUbAAa8DsBUcCo2DiUTWHMvNfXvnJjXmGMEZ8Mbn3YrNufaDej7",
  "key26": "3ydurEjGXnjbHY5QQ9Rft8GtnKuCHg6FDFGRuTE7Dgn12LSiYgPTbBFiiBUSWNNhxCUmHQGEVanZ3PMqfQsNwQwP",
  "key27": "5gP6ATPqPvyiiwjvziqqKaFgj29PzustYeTVYL1xpr96SHr3YjJSVRBW7GZEhLuYcpaNY1hGt87t83T95bm57Bxd",
  "key28": "4MT8pPc1PEFNUH2ciQ4FNSrgy3mXkmbZKMKfMiPvzEXyJfVwC3oGAa7z3iRQ1xvAKP3Syc64GBcJbXrnU8nWyGHD",
  "key29": "3QPThuYVEedqU3AseJxMapdvwyoNAjGd6hgvVcULk6YoTtgFqyDASDJoiaWMcEn5aE27hunU6cCG6PE3UBZ2FqkE",
  "key30": "26ro2izS4xg3XhKYSUsryU6VP7GTDd8FAtB2vTGj2mfVyppjuUEGFjhderjNZt7DezW2J2hgVDrQP4os2nvmrx9C",
  "key31": "4y2zBXTH9315GJnc2TUGpkbSaXtd2trASw9hKdmCGGUHhfq44htxvNXZpN9ESuXbctyuEo5fThcs5QQDjK9LUCfY",
  "key32": "b55QrAnbiX5LSXFqzHPMntkD3j9ZfzufJUxNtrDfaRxbRE2GAbNgovFMRg4ZCYKqLSDYUioRR5MyrwHPgDTvMrc",
  "key33": "4Ne8S3PKF8Xwkc5BS523ubPYjsBderUARek9J9rmCYUAn7tLdbeuvgL7TxM9eiQRLZqvdwicwkmQ5NdmFYLaLDkU",
  "key34": "8i4z8MXTUcuV7zEXMYsbsBZWaizBqJC3vBx1tKDa5YyzbsiVqzrKyBepDzkKxYuB4v83LcZWvJZJZHw3MD32Shr",
  "key35": "8yWCDp6XGipMndtjj4Heuq2jxsgiDQFcSr18cRmipkQosG6st598BMLYrmdTXvwgmPzfX5NbRKp3C7u9g1oeqsn",
  "key36": "4Ta7u9qA2eHifkfVep2LmNLrF7eo1BwXDg6cdYDA5eWUL5Y8LxMsRJgn8DuacVDonWtha7YuPUjC1CvCiFJS6CML",
  "key37": "5jSV3dm6DdKNzbrT6TahtUJrysuW4D92EhyzxsHrM8G6uPxbBRs8cknzBfvtQ3o9buodHiBUJcnrrgpiH7odUrPz",
  "key38": "43kMJuKH47uydsXXDpsiwGRXLn41iiYkUTzUYeymfz3sBHiQ6DPYw5gmGVHGqxyWwPTHyotmtVNCzXbTfJN7S86w",
  "key39": "2seGT1EThHU6K4CStWFhzHNCAi8EBra9Z3qp5sgkkU2dZweUcBPsD91NETFu4zPqDQ4Y87Z886oLrrStXEcoZnUi",
  "key40": "64iQJcc15FiXwY79v5nqw7wXejQQZPZ3tUmMGdjvzyCmn6nhq8pUBmasF3Cq41n3kbC6pjfeMdc7WuHm7nQ47WGm",
  "key41": "5YyFPY5C8sEbSq1kLKZkCagcGqWGA2Urx2ckWrq71P8sEx6itVFSRdGH5gcs5g4thqiaV9f4mp8iNEndmToycFJT",
  "key42": "WdVGa6gbpZdCZkjcDLYPdDB9XZGispXAtN7yGF9i4hqx1wGtW9N5ogpdLBTrCEQjAKJQ9BMxcrD6PLMWAL8YwKR",
  "key43": "h5XUFTpzWYr3C3TMKgcYgoDMA6dJhcC1YQiy7wEeNeUy4yJ273LfsUupWKjjGujamgCQueHSPk8a2zkn6pvVgYg",
  "key44": "42iWwf7Ks2Tj2TRSvEPbmCiXPk8n54KWPNXdkVi1zxVd2cdUsZ6WMyRkQHoNXEMgTDVrCCYW9yNRvRQwAYCZVpCN"
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
