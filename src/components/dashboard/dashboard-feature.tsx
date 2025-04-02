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
    "2PXLbTn5GfFkQyPVE6mdfRnpU62tXrzBqkG75UkSbck9H33ViSJSnUhtZvQiRdYaT38aunNnNNjnDjeDjiHE2CxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hQasGoE3QKMFBW4xSLjNsPFvGZnmWQCx98BRsbrm2LcLc4xLJTz1xaKvDbHjupREfqbgwUXaVr1ntAp4QQReNyD",
  "key1": "3JCkGzuRVcrVwtUSd3T6jznGC1EQHACJQpT8JHe99v6ymNvsbQn9begsUHrCs8AsRv7gjzArszCB1LsqNtSmZfRy",
  "key2": "4qdRgRq2zPGHTf54bzNRNnWQKidmgEDi1cudBqDPx35MvriBUSEK5j7prcp5oCqGd9q49u1dc5DRLSUwhoUJrDnN",
  "key3": "2K5NFaXhCpQQyn2fWzQ9KXo82YdM198UAjE2J4E4W7ps6stFWSuUx1CfsbCpW2oAeWv1Xs8jdvuAkcyf2jBDztKv",
  "key4": "67VSsPLHfLEwkEoMsCH7kvzZt7Crk7LNcYhXMv4EEweivQPHD1csWFpXQiadbh59dQJ6g3QxbSsDD1RGGQfVEc1z",
  "key5": "63ZwGvRSqmddqiwUZRiUbwR1mBQ261RwtYkdMH7JResp4hmntmGjBmRuSjqSHe2r4U6uugHgnDRbJq3iVqhqdNQ6",
  "key6": "2vykS5H9jH5razSF1Ec6UPMGHRgAYGVY8pstx8RCy8aooyRUc7tZeVeAPV6FyDefF6HgwxUJCTF5ABTd4e3Edj1a",
  "key7": "2QpsCXP2MToHnwQNB6V5dWKbUmnbCpHtjPCBS7t9hRpW6gFfkaGaEmWy1pL2ZiVWDQTv9oGsvoPWJB7LN76Kkfmk",
  "key8": "4LaDQavcnfZvmd9rJZ2f5sLF7Tx2ghZniB3hn2Zk4akmjEhQ2JhkRQ797qryjV7F68qCrE2rSbvvkHK5nMsivK1h",
  "key9": "3SXQNgyBxBMBHbiVRZ3PskmLaZcBe5A7Kfy8aT5CQK2bfVLh1Vhzoijct6JpmMGazxw1J1SXKQovY2j866s1Gz6K",
  "key10": "3DEmoUouFBm6PD9tFdkswdhSNZMeY2DTCKRCKJ5A69g5F2V3ZW94DtY2S87gTJso8dzTdptTr2FVe36fdLabZQPc",
  "key11": "3uVhGHR8WMNmq3WM8Ym8oddbi31F13S82Y9ygtxeAFvsiA9X5xAqJtyZV7eKJwwVJRHAkFrBwXDBQSH3ayCrH58b",
  "key12": "3qhWNWNfZKvS9FhAeWn8aDfn2MZTpvNdGtDXMBiz8LhEuLdM9JANj5WdbbX8mvb6rdt4xFL3HLnaYt833KHUgb4n",
  "key13": "4HE8SoRMYEQbgwvEANJxKdT7LQgHaW6W4fwpkEMC5CJQRM2wuHhydaZfDbf8QigPBYP5xt2J2t8kPE8i7YYHZodJ",
  "key14": "3d9JwKSjMyFVNs2kywgy4RJ43cCqNEtNLucZFi2H5wwL2h71d1AbsUdA8dCGkRdPjq673o4EoRo5PGKkduUTv1RG",
  "key15": "2toJqDiauWaYVteF8AZZ75sTRa4z2EFvUrp73BYoxqRtZ8DaiGyGCir7bP8bNHPkLQaNMt3qDtM2qoaHfX5nq65D",
  "key16": "5cLs8nDBbznxB43XLbHpxhDwbW5pJEfszUo2FWPTTrqzhgdL2XFd6MrXbHaUSDmrjKztqyWoHsLaQBevASchg599",
  "key17": "5T2xrnJMG6LBkC8DGXecbxUddnySW8tq18cSSd9f5UREWY5di5XyscVG3myqbgw6doXiUBtP6X1quWZHmFzmijCV",
  "key18": "4wesQe6i1HzBtQQEbvAoNp6NLMqSNvZTqKMBGoWycQKvC4dSFToNPxu5Gb2rQSJnryJf8mEWaiVXVTcew69tF74",
  "key19": "4zFoDagjAUE53AGP17ohKKxNNHgYyayrgCETchizsDN8pHddq1PgkKULUE5obCqkzS5Vgi6nQB1cv6EQo6fBVzAm",
  "key20": "4fwow1u7TkqcKNvSPEjUpRYLX9nYhxbgVdqUjqoon3rUVsRA2xvacMDFxQbnYtKxZSpkrsHYq9gBZZFGbH1LmqA7",
  "key21": "3okgFhdWLDXoJzr4NCLDMgG5HAQe1yd43Zza1kTEod9f5v27AAhs3akq9KCqsSDTGUJC2s87FUpdvG78WPYJuKZg",
  "key22": "4QvPDK9T781mZXXV3aRM21xZFr4Au8eangKVpwMbkC2H8PxQnxsJv8nPq9e3hM9e3f3QvyeC5x7ayJDHRpfXgYFm",
  "key23": "29XhtgwcVbsx9urCuazEnZ1s7La3i1RJKU3LhZu45DveG6JkEaW2uK1ac8aqatb4beQeL9n74u2Rdd1oeu6Q2cqq",
  "key24": "5GpxpXgdwWEa83C6NhQP7q6BmLb5Gp87QHdMJFCqEVW6gCxZx9SmkcVx3cEDrCXE7fdMbxcjhDQn6KFwTx2KJocy",
  "key25": "ERD9PM6ba89JRdy5hVhXU8UaQmehy2qawvXg23Y6Wb363T8Rqx5KDPWAFHKwnTj5tvcVS1X4F5AzEHKhif8YpxG",
  "key26": "1Pjgwf4wT7713UrMyMGFkdCB7CyMtBfnwSYwU6Zjb7cD6HLWAVhwAiMGXHUn3XxYKyTaPJaDVcruMrNHqmBaPCT",
  "key27": "65bigYFm4u3tfit9P7j3LN47YFGRooyMVKPNVf9equnZ1dtLc9hsYhDrD7Shvuj2zyBohuiY6WGhvhxGR7DyaRH4",
  "key28": "Y2ikbEAC1kqaQux3u7ZtLCyrmwcVSboFNhay4Z8kaS9FfWGKF2hKECGcfVYZ1GM5zN7HGPamxX2SKRyQnEJzvuM",
  "key29": "5AsTUz1QzHGNMUaXJGT3vrXs1eVHq5W84EqYRebzxBfNXkK5EJAmUpV3nXpPsPtT9d4cpRmBEaqEJDWGJYgh6zgG",
  "key30": "5tM5ckqtDSHaDn9GDH25WpeZb2UpFvcRRYNNWp6hrrq23iRA249WQzotdG8FzAhpm55TBdZCSmrUDMpe85XXzvDf",
  "key31": "4pSk6bafWpp1jNjVnDE36bPhDdtqadWBYTptgXCqJYchGC582gE8J31848nzEuWy51Mgp1qDCTEi8EbpfptJRnQo",
  "key32": "4zzgQawrJ7mqHmDzQ9wX1joYd7cCSKy2B8Sa3tT7ktNZv6Px49K9CCAFHY1pdxqBUpyQFHpwYWAkyfdu3NFH49WH",
  "key33": "2kRcyPvXVHLb9JwiV1do3vHiST4yKgX3efsVZu1i5a4k1TKj3QSvqHspDEenmQqXyfaEQPC3LVduLbvdTVfPPhzJ",
  "key34": "4LiEGa16cJKAM2SBf65vgQnS9XYSCYccy2d8htTaaH4epdQyRWXFjYYR23GuejX28DsPkVP6P3EZzurEXtYYkprk",
  "key35": "3vZAabc5g4CTkNNN6k8FNeSdnHtothMydcMgseEh51A6tf9KykSX3Pe6rXYDWp16BRcxhxAQ5ngT4sqduw6xtu9g",
  "key36": "4uaj5oouZnU4M5ir7YK2Zgoitk9rYX3aUZdpLH3XkJ7aNwe2DU8wMcN7iARJKTUzVMShxRfrRemYyDHDmFgfxTpC",
  "key37": "36vak4ANB4NscseHRsjVKd72hzL76j4QVCtfg3PQDQ2dHbuGyX8xQ46K9JWTcXbKqFBffpipYKJeNfrd2GicVx87",
  "key38": "2Rpubp3NpbPcYLa3rZBxiNAqLpUL6y7Vf3MBTDYEoK7B2cKNWAsmSmFdw9S5ZTf98LuoC3hB8AxZpc6dqreHrqCY",
  "key39": "5f8VZVVBmYVrNFNBJdMentiAUWatjh7hnrT47CyFkw4iHFsm6Sf4JJcfqV9tpN6DfQAuhEDe1ZRavhs37c68bKEd",
  "key40": "3kcoCBSevcryM94GRtABMuX1asr7F25hfhoFMQV92psUW7FPSTXU37LwhLttzbpn6LCvePH4tgEeURL1vS5tmLqn",
  "key41": "2DAFTX33UvymZUAU243bvrvMS7Wsq39X1u5BzUDdqAma5oEAaJsoAxhz5yiifPNnXSfU9hs8e6isA8we5QPBcJSh",
  "key42": "s8X5imTwHRKuSeRRCxE3WWeezDAtK5rv1TpWw3Px3JtfJTDodSw68DMVXA7QNWwNMQjfMWCVy2TodUjTS9qeaPf",
  "key43": "3FouaJKR4XpKToSzXp1VfpRKTA423PqLwjieGEh9LiKAtgrKdY4i1qqKnUbLanRJhNe8QRWJuMkyPWd9kLTyYZ16",
  "key44": "3PDxaCa6UCC1ZHDmfhfBfuXaEKvWEAJSULQR1QAbQhXrY27FaFLq1QtVpQWiVFY8PbjJVXEzRd1RQyK2UkmLojDb",
  "key45": "4YVSe2w3e1T3NxaScJW3XkjWrCHE6bxQeR1oH6DsTuUq8YkY3wMjEHVfCsddNnQttZ9jRBywKbaYnu1V14hKGjhA",
  "key46": "2gCBhH265MWyCbJt7DcDWRwkQZJWZrn5tiayVqehnZLYYszTgGYoQ9R31e7YVJdhg9NYZiv5Gr42kqdScVmBbhxe",
  "key47": "2hALrKPF22hVNQAZ94AN7DEvigAhrnb5ct4AzAcw4SimJnSXZD5x8oupmzVdf1GT7Z4p6EHJuexLShfUvGKoaqew"
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
