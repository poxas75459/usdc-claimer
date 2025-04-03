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
    "4gb8qZ7tHepH3NRxHzrAeuuaUHAgZHcEVEhWX758bMFsg7KH57KgXe4ir4wwNpXBNuGWLhqems8FpL67KqnMrTCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tth7Gt3D6ujDM7YoWzTG9syhyRzMQH68W2oJssraSxd48bjxpoTB3bHocsn4XnU7FWBmNzBdT3fkPRKooKbENLv",
  "key1": "3Xt7PCQ9B1P4p3Nd8KzgRmDEkaaXRGu3vJexmvrgFQgMZ9rNpFvuNNcnfeCKeyZHGCCXYc2EUPN17kabDaUM5tMN",
  "key2": "5k3fRFdV5sA2LmGRukCqJG2AYM324zeeUzE6VPhtpXbU7WVvMBwfhvjCHxp3Be3Yes7aXZRHkjQP4ofwRq9R4x72",
  "key3": "4P6GvCUnXEuHhmC29oPKjc9SEev6mi2QHpjkVm1xYqSCp98x3NSxcuQ7dg1haWxKG5yf6co7akGfE3Q7qnqKdF2",
  "key4": "2sxvdUZStwAPk12jztKvQL2iWdo3WCASdGRxzksDubmUd168bzDtRDaZjDxCJtRKCq16WKZfp5rfZ6zBLmuFQLrK",
  "key5": "Xrhs7P9MF5j8snULbD4nqnR3d1RtZRfL4uGEozXJK4iJHQX7UPYXbt8uvbekvTMK1MFc4pmpWhUS6xsbCrRiP5u",
  "key6": "33bND7RarpKhbjFLWjvaWY5kGFq7qXbv4UwcztSTUdLvDxd1FJsCJmZcnr1RPMgxgszEK3tjkEUkktrqHXjV1k5G",
  "key7": "4t7s7nrqWbQvvsUgu9TPePcZ7vLhY9APgZTpiXrwhuS1HYtrQaaK74GRGbgFwEjmpiVF2zhpKyGjc3qf71W2R8Qu",
  "key8": "4SWY6jKS8zY12szMsbVZbXWjz19bJ4yYBToohsqLF1qSWsEjSfRbBPqvmwr52oQN1zjE2RNowp1n4BntQWXqL5zw",
  "key9": "2uQSenqpsmM9tdRjFykbjbXzaDA4xqVUt4EXJ21bFy8nYMSzzNYmPfiZs3yTG4kUYEYF4if4L7SXaTfWXoWh8VfC",
  "key10": "48cWERwTbRZRKmPBSvdyWd6qML2LV7xT1Siyn9cfBr4c8Vtx58BMLtuvmju2M5ZL4X4daeTnPaj7NvP7W4AfiyQt",
  "key11": "5boAPZ946D6yCDXWkMAKRUKfJA8RjhQE8dotuKRe91gS5WtNZD6XrGLz3bDJ5hwmsWHd2JHvdGmpFwX5D76iyHEC",
  "key12": "3kfP2D2E3EFrgEzSuPR8DJCPQLGhBAU2eMpbziZZAq6emTVBvDZBS36gn4ZbXQNMDiUYop8h4dmvNsxjZ5dcu9yo",
  "key13": "22QtCZuHxoTirkJ4RrroSiJrWQ1upnTKxXzhe2zJvQtY64p6QWPQ2fJ7kDeJspDYyRXjnxV2a42m4x8m57aexSqq",
  "key14": "5QiRZ9sCC4HjpJmy3mQVTjz1AcgaNwrKYsxvmpNpfcLXqdzFYLV5J5o9qnwqxkE5k7C3iZnYcwkDfPLUtnjXpjP",
  "key15": "4wAZibBhegiDZhnErxxKmXbXcSGAZdo2w4tCCSzYWyZqJgtGz8ZV6EDvjPLzEBNNfddVRLzYTRCmfHjTWLutSeiw",
  "key16": "p5tv62TGwivPyUz6KFRRoJsZ536rXkm5BKwy9ZwcWSUj54m4FqMLMFczb2VdC3JgLHeXyPXmxggDPy38NPmXRdS",
  "key17": "3AK5uQouAUb9AsFQaEcnx3sySWeYEL5tYkzcGFQrw4EaaY86hHm8vh4JcqYLK9LrjumsDCuDNXTjsD4ccYhH3RsZ",
  "key18": "2qThm6pZRi2Y3FmvAPi4E6A9W4aHwinfTHtP71KY2NPympYotHo5HeMkJnTgiRqr8NM2oY8rur4LbxbHJ8XBB3ZA",
  "key19": "qGBDGBhLZfMchUoeCxFxb1jyxBhxr4mRtMsyqRLRYEJgFGMyrdHKcFxFoPpd7ZFRSnn69Yh1hNZgtBdNMP3fxto",
  "key20": "5gPjys285tfMMQSPQRknRNXxfJCia7uCPAf2EfdvbmMaNGNSyuT1FV9UDiLWzVm9sv9PKxTrw4NzxX77xfyWbXeU",
  "key21": "66wbNeGndz3AdYDcucAxS81FKrnZ1xydNxoMpFM2546ChqrhwyZgS61GtCuCF1RM91buFeswD4nYiFB33zFWLqkZ",
  "key22": "63wgcEaJtzrHUaqBvXvgCjRz4uEAJ1JCox76q29z64aLWvLgchqphtQ1pJEwhznLsVMkeM91BDboxizxjEbCf6SP",
  "key23": "4zqPphraMFNEdRVxMp4YJWX4EaQ4YAE4dM2bWXLahCsSbH8KkaGFkTJHUxxftocVKJwk5nioVveog5JQegdLjYSi",
  "key24": "4iU7xzpcdpgpcNrXqqfWMfAaFE169Jf3Y2bwk4oRA2unJYuRV2d5EeQyGgKkM6HQNTZBH38XRFq4Nf2rNS7rPtQw",
  "key25": "kkZPYtVFxUDL7yTBFuKsd6yH5pgYRiwfrwsRV9JeMwkzgqrPZX45mCR4Kg3CJxKfsdSepuBBPGcpWqgvf4TjNkL",
  "key26": "T1mH7KNzowWyuR9RZzLZFn78qs7wTwHxUAG8fE4FoRU4uajFg4LepcZiaZHEUeDLqh1tJt1en5bUCSgTgXdQwBL",
  "key27": "UKnkmHUtLnisQJ6eTakL8ZP5ZMCkHzFurSDRQf4iQ8viZQxa29xNLQ7mybuQJmavH6YTB94g4Eag5GosqDDcAgm",
  "key28": "4nzX32afL4dsQogs3ax6mQpfha8u8BQ7sJuVFuLDPyzPLQD9oSeqWw6ro5VTtn6N2mfmohxwRX7vX5Wbi5cWctTs",
  "key29": "4PAj6mRUsYukZinaf85vwJV9noAgqvwoEnkNZtcHJCot2GJ5euteUWbP26yYskRsoXHfT7Vxt4qBuojXoTBmMEFT",
  "key30": "3PBxqP2bLkV38iyFEJNxbJz8bxEJneNeARVwMdWgtErDK52FPgV4mmTzuutKuidWSCWeNH5CoUusY9MRNhteg8FH",
  "key31": "4Wyxg38cvi3ayyc4uBnA7pKmKmU2XStnozB7nJqZ8EtpdaDkhski2yWFHFk4U2QmtauumKsuGLjUKYkvPgknp28D",
  "key32": "3ZAWV9U28ppnXT74HmkngNxKByh6vQ6ugy6NyMVqdP5pZU4j5HASyTqchcdzJoWDQAEkcdWktdG5PVWur5hHKKGa",
  "key33": "5aTHs8qoDPDnD2DQCVZpHWgjDmbCQ4ZfgnfRiHnoCZoJbpJEasf6JQAY5xHbxutpVVxVQURzvwHbnYaQAUp61kQx",
  "key34": "4qqawuq1S2YEs8wvDTWJCQthJfQs3UTB2gHVeCpj1EQPFyQ9EHsuxujPkdsTT24NcbngTPmdBykEFootXJR59DsS",
  "key35": "5tAhZvtHDC5GAG5q5yzUVv2ZSM6pyDy1bD26bb4DPEsXCqLAxTpTZe4neavs4qqLeLxQanu2AeUwzEg7yqwifxNe",
  "key36": "3qtPFwrYSy2UZr131HpcAyJ7VbNj3hRUA7kNy95Gt6c7MpfnV3hrfvgzLivL6J4uvpsXmz2WXjntwuPbvkMWYx72",
  "key37": "c6pnYX4tVZHZiyURHXoQGGRdzZSmxHap1HMpggrFBkRbmd6FaRkx2ZNdjbJHYvAviynRXFMX4Q2WKRHRMn4tiDQ",
  "key38": "4dNSydtTdNbFwu9Wb6jcsMQ3ZRHd9wm3coCpdYfwn84xzrcFWTe6DFmUKkGmv2Fzbhq6MC8XmoemzJu7EBm99Gsp"
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
