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
    "4ejy2KY2jArFLk3mp5Wm3AYCinTsmjCXVopd8uP5Sho3QB7JyHDNaBKcp9cjpnUMUTShJxH7GxM5beinoD334nDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vsNQhyLoQUD75QQffhUjPMcBzeyfWSiuiCyakV5TL4fEPZaV6EquoNn8PR2aDXCH5o3oVcuVM3rPpj5Hzm8dzq",
  "key1": "36Pk1ikKsGXYgvbtYUSzYxDq8e6Zhw31kDFJZQU7GM7uLioNmAmfWiwyeVfoX7DL57TRCkNFEDREDbGpwHq1rveG",
  "key2": "5Zsme1R8WT2ZABFP4aoKsQi1fyAdnBqjPJcqTzdZLoXqg7atMJWnWZmPgbAiVkUghGf4p1MrzReTP6hELJ6Ar4F4",
  "key3": "mnKdF5LqHAsbTZTQxSgzeNbsZP2sGxidmFaapH1V5zvF4FaiVGK8t475LvrBHVvxFM58YEYWk5PHWXdS6vtzx3s",
  "key4": "4tMYhJ1pAL4AwR3KHBN4SQDuJoZmJLF3JSsyZfvmYTaZdJ8fLLMpsD2wyt3F2ep7zbZ6eBjzmaAR2o7okmjrPNPZ",
  "key5": "3cyftwHitZ9JN8djvGTaU9Loub8awLtNbE291nziZikcpU7P4mrQZJ3cardWQLUS1MAka2qDc5DuXkDze3C8f3VE",
  "key6": "4DTzWNE1bWR9qHnPyD9nguKAMLfvLMYJhfssHuFg5iMPSt2i3e59G1zYuET3YUN9LANTaCiCVxnbUj7x6ZZCBhyo",
  "key7": "4qbd8sEn1t42SeY5u8713QuW6KdjS43BsykBXmsXAT1Mpk4fRPAPRzErYB1jH92Q2cAMeY5xfXmhjcNu6y93xSW9",
  "key8": "5pffAeZYz8FLPYfqZqTEDNsSCwcLhxDdF2hYux1SKbxG299XkceSLtHR9Qq9Bm3PYETWoBNBhDxjWqciMBNBp4zM",
  "key9": "5yXBfGWkJr9TV5hcLLmRPPemHYBBzmHf9puY5TYGqoDwmutzBShQh8jdRNLCp3rbsATXCwgfJp553EJ4v7Y9rQho",
  "key10": "219oAKtFsGQP9yhj9ZDTzvubiACH4de9h7viUFJvt8vXp6XH3JhHyN2Be6iexgmBUqDkTc45EticCnXWSrZM9aoG",
  "key11": "2b9WuhZrbiQXXDtGuzLTD3Max7yM4u5Jt668YR6FR6b1jCXMw1RWDYef6sw4w7VLMccLF4JSfdLQEGUbTjnSo6CM",
  "key12": "2X4WUNtJ7BhNkN1kVtnXHC8Fite4Rk5P53K7uK7DuZMLNPrerKyidutD7WPX6USLZ5Fm7vdV74nteuKbqhaJBjAy",
  "key13": "4Gu7QjBXcCYSWPTPsZboYxrGGcRjj8bmdP8Hg6c6vQZ8yP1QpFjxzdXEaa8hNXFTJhaFNG1r1PU994PMRf9TCLCe",
  "key14": "4Rz2BjEmuUZJkBx7shr9ZdT4GqJRxAWPahqJLnaUwhgdJRsw76T1jhnk6a2xDd6HjPthrfCa1Uv1VTLsA1FqAwxN",
  "key15": "3DnaK8vfAV9qwGM38mCuTaXwBDTfjFHSRZ7ahBDSNBxGNfrJ32xztQKEwLjrXUw1upJHK8ffFdArHfQG3BQVARdE",
  "key16": "4LSTaUzvLjxxqTEvPVeYpL6cAyn7EasQsCL6XB2HmkchhCLjVGwA8L64LikgyFWj92UpcHQT2o7W2Ns7kJJcCVCV",
  "key17": "5Bf2n37sz2yiAbpLdBWe5pbieqXPA4VZzKaTTBhs7QXrCKVKgnLU3TFCEFF8cy5TT7jguGhmqBWc1H5G79sC4ozo",
  "key18": "2CWsxv85UgM4szAY2GZLTer3xhYYexrg7vop1jnLisQAaNCgk2uqkixhngLFTPTMppuNo6ePXeNVaVQSjraWmCmE",
  "key19": "51zMqWM5KyrThb9MUkEv89vB4TPTSfj22h3mEBDm69gxWFUubpmVvhEWY3MMvMnPkrSGid9iQ9CjC8Mo25iiy2Dk",
  "key20": "5omhkwwZzjxB5CpsDNo4F9YdbmFMKbnQNUUKkCpuiXpu5HEFjNoxiV6NKZFmbyMvoexhFQ5w5maenCuCmysDNzW8",
  "key21": "dfNrUHwQASJDSgcKe8Kxtrro9feXvigVHNqmKnmBPvgy8bWmyQ3ksEgHCUVZyEjL6GJhNH8T6m7V55HcpeTRaT7",
  "key22": "5KGyj1nWokS5bN6nNjYApBLZmonuh8BqEkKVQcNdxARccvY7eVnTyWhpJkNjhK7sJX3wNxpJeKLmoNNUiWS1zKJX",
  "key23": "LwpAkYvSBQHfNDq4p4ZEHtLvgcRUtKkoNhbDi4NXak9EdVaQHgzP3GscrgEJxgGK1FLqUNVtEHMk5nsk949ZzQB",
  "key24": "SZXzyJgHZo8R8r97UWEaidmL1EBMwssmGMxxAmphaQzSxA44e1wRuZga2VJbKNcAyS6m1dM1hFdCM5JmqtYbq8B",
  "key25": "2jnDvS5ASCY2v7sgFVS7shybq2QsnZnC3CuPP9eDDZHaANvKY95y26TQXScCQzXmrNd2tw9oH5C3KjiETmgXzq1q",
  "key26": "5GvEipcRqk1dopSPzaDmWLBG3ckJnGyiVZ79cpYi6EZbzz8wZJdybmynoiVz7gfHBhEvAFFRfA7r1nDao2jngvq1",
  "key27": "5FBAE39tF9nYfxdKA3VkAuE4KJEaNDYkUaxpBmq1Ly37Ku6ZhP6Yk9DkMfC8NFEroM2778xtBb67imCqwsisstRe",
  "key28": "517rpwfz2eyCB4n4roLPguLQBtip4oip2zuCC21t2aWz2i5YpFEdjpXwXxAqqpxUtVaAfe3F4kxhtAoSNErAuUQP",
  "key29": "2NqbWk6tMgCpckBeifJBxKnbiS48CwVMPqBnEoKKQCFxkFAgxjFpNKeq25cwcxuUHM4w1JFan8JA21NsAKpFdcvh",
  "key30": "3dDBCx5cLKx1FNKNfHMfiksgnxpRQgcLiVV1RVE1hbqf13W1z75a3P1SQ53eqMqXrUC2cb8VQd2eVq8rThcxetqz",
  "key31": "i3rM66rxWwnq1842RNTeW5efRxAseFhAo2RgU5KE3ridyc7SNjDeq2iaGJT2aLZhMfoXTHPpHJP8ScuzrYA9XYC",
  "key32": "2ozQTJLQCrftj7ENfMZPmVPfng3Z1uNzXNrpH4JyHDXELAxWd756j26j3SbsCFySA43aiz4WgTrNH9JtAdpAxQmy",
  "key33": "4Uuxpue2KZKck83gGPfeoatkwwJtWE4jMcgnpwySyYnbyi5jhXdTrNRa8ycVg37oNhfVSv563hnN2QJkGhrHwsQt",
  "key34": "3r3ey2DGraJWnHCEcyMZX9rshWx36UJ4Bn9XchqM4RTbASk4BBBL3PKPKupoRB6ixp892oUoyqDNnKVZuhtnw9BL",
  "key35": "2fnGyxJxaG9Vcx2qr5zzufvDGhRj5Ut9fp3wwWqty7WaDJhWSBLrZCM6ZewzPYQcEPwXjrTaE7bUb3kmEK8Egzi8",
  "key36": "3mH33PdPJRspwaRYhbPsmfGSv1zeggMtjaDCzqDnBWVdYS3E1HG5vguKvs5tdCnZDXRz7F2s48s9Bkeo4Cjm79HN",
  "key37": "oqUV3rV5UvXypJvmrY9HgkA2KqYkT3bTXSbEoasVJUScuKnWAzGjnYEKpdWigsZ1Ki7eysYREyyicod4NBTwSi3",
  "key38": "2KNsPEi3LRa4Gn7nopaPemWHZJXX7qnb6GTGa2J2dobrsbWpRLEyQsw4SePw5dfC5Crg4GbNYj9A5AsxdYJ9dUij",
  "key39": "V7o2BKzP2BNUHe1pXYS9n6PhPbsbumxrtnWVeeDa6J8XJQxi1exRx8H9Dwfbi1wdPb9Q3dLMj4tJjEBPsG8LBni",
  "key40": "2wZtG18MLn4pjYy7Ku3HRPgTMA2wmVgjPzaRZxDaF3RQMuuuaqkG4RFhhy4jtvDmDJJaXohJLdfu2n31LTJBJekd"
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
