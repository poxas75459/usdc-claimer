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
    "54JbXnKvkcWZGuefRgfatnSZNhseKrCtbVpsCHeYkvkjHcBcrP7dnvi9ozQm7MuCc4SRUtLC64nwr42RqaXZCG7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bfG4gwkikU2VR3DXDJSN9591QmisRaYpHbHZRKFwMgK9pUfVg3s4PnVKhr2yNGUqDKpT6NBMdFyqBTtvqVe8dB6",
  "key1": "4BGJd7Jqt687AdT1tXeDAHJG8qeYGZBtvdAKemBi3wuAXp1WdhskfoTBUrQNWe7ijv4nMcwP6TPkD6DxUkkEbJiY",
  "key2": "2DXTuNJyBwfrEpHjskwvVumZwSezyVdjoWMh54nDx6sM6SXFZp4T7G7C8fbztUnpSnqQNBBroTwNBcKJtDzC3euB",
  "key3": "3Ma93NP6Q556P64HQAytXh2ffx8726TGfD59MiYKLjBo6KsV23EukYpvtcXiZ78AP4CFTmdCz2JtVG5bLoZnpfmQ",
  "key4": "4AYxmcdvCdyT5xvPcbynwso55ZQCUivkFfAeAq2D34rCKynwW2jy8nNNb2qupm4XQGxmwUQBxSEHc7fdCNmLzzzo",
  "key5": "3Sm94aLccfPHxsRv86SkCgafUjLi1L4tkRfZnG8QtP8tEQCF3N1EujMpTgzywk995mRGBqFaEzaYWNVw26KSvPKN",
  "key6": "5cRmocGq3qQwnq8nuMXk2GXh8eyAVmCHYRQQLKwE7ydPRcCo9HVbErwSENjhyY5UbcisWqoyo8HFfKhMV971B9Jx",
  "key7": "DVx3pMwqoSRHM3JTgS6AScHbYdf3qRTsUgsVXH6RxtFDdsmttLpqLCgkXv3vXuYtySrLERxnrCfktzjtAd8GwbF",
  "key8": "2JhTk7P8ngDdV664SUycv8UP5CMNsPaHXfL1LWUk1NBUHvRYXcokTAjtYFZNd98HWGSvQvdBrQLbruGzj98X5Pqh",
  "key9": "2PmFzv6ByQ6TFHg1MzuwNxX4KWtUYRAj22WX94p6vrYotsk6UioE7XjzKQCy93BUzCyFmVtXbtd1dkeJMJcadzjR",
  "key10": "LLtp9qSgB2E6xzNT9JpkmRtvJwZf3LF3jd4NzGHdqVR69xLokUPwuVTgH4wrDn1cpFh5WJQnYPG5N2BcKD8WoTi",
  "key11": "5VoGPGPN6aiW6W7F5t5UW1MrTbuMRWp3XM7DuStFh8AwcT5W6tbMQ3uYHVPush17yqbxDPtr1HHBciaKux2JGyr",
  "key12": "3Ayy81wza3mUA5X1zbsDHsw1AWn9XbxjY5egQH3j6bed6V5W61YpAYG4f6Er4V5YBz4WU1Ao4NL85XeX14b8xZiJ",
  "key13": "3DtzS1pNPkzewDPZaXJGikS7z8oSSWbicS7zuJiRj9ixNfhmgVzmAT15JA4YH6G3xpuDCa4kfCUxUhdqgzXrmn6y",
  "key14": "PyaLXSYkBRq5a9PCeAHpyhwtkGX86EsK4yRVLLZsfX61WUizcZTRTBsVXqW3mZ4i3MP4u8aweebH8CFdr9uxH44",
  "key15": "48rgtsCz9p8itmGdywFLn4g7NwcsnGWTUVMJtUqtAVsxV7uhe2UzMcoDRLXZ8Mh4q88ZpvwGSswgMKA2NXHjWrnC",
  "key16": "5oTHMEtNyqw4wyRQMw3dMPvpBDL6J6x1BmgSDj9iQXeUgVPjcYhtduByxLy6SGTSEhPw5WNYT41znWJF6uih1Hxg",
  "key17": "5VVcDJNwscTDWGccUfKiqm2ngFzs8YXUYtsqKS7E8h52oXxeiRvbAvwTAuMq3AxvWf4NdcJZ1CALuDoaQWHivsXR",
  "key18": "5M7FQDGeApaC8ftveh7dSfHAS7F8USiLKbUMBNwor2JL25Q5XNR1jdPck6wnQNwZFg9KA7HcBUzgjq7j6NSpjUqo",
  "key19": "51WFyfrJuguCSgjiRnU2ryZBh68JiZvr72rJSVGM77rfnqgDs9S7RYfkbTkhGHqumojn4Mbqyn1TKHw1TD4yYvR7",
  "key20": "28PfWjj7rzoQ32G7Uwvf9MsV5Q6NL4HS4hSQ1Y2MEB52TsSoSNqeWsZQFEzs1biSnxDf9dahrQgze8NpjzJK7JG1",
  "key21": "4pnUgKtJkgeSsj6zvaSnLGT3eqAF7FJ8Dp93Ar4N91TsW4cqEghYkV35A4dDDnS8jZv28Ez6f3QVVMBju9Hu7HBD",
  "key22": "5o4YL4imeNJMxmkFYu6W1EyFFKdREtbyQMVtcR2W2G1kfk6Q1RdWerFjht5cFLAvzXoENUxD64zz7TLnhedHKBWh",
  "key23": "3FLtJX3HMtGy1SQLRs5vhE7zCcg5U8Y2czfUvv1FUGGJYQ6qYFWbMjVVU1PgmoL44eZh6jH5dDmFRMiWrnbsrjrf",
  "key24": "aAPqXcmgD67EUFCfuYBYzr3sjA1VtTkG1QqcchtJoGER4P8xrTFVAzqYownbHJK14eLoW2ekph99r3ycQh2f13Z",
  "key25": "x1NFEvygTHcuynwSD3FHoEpRzafPoCSg5Y2qzGLCESRkoobC87XFTZZ5KRzp629cThXYjHicaUK27Z24uHT6n9k",
  "key26": "3jq1ushEUNpUhT6HhK2nVB6medJhd8CEhhmGsKcFRcyMF1qTzCvbc6DrVFjMwDL1c6E8fDezZzFjhiM8n39TXNAo",
  "key27": "3QS1FXcWpjUyMZDyWHGB9BJY46fBzz5aWe8cnX7pyhw4CetmQmhhkmUq2jTScn8QZg5UaX1y2EJv1njiBnH63yTM",
  "key28": "4wMqeaUL1Xk5PNBbJUqA2hoGzAm6g8uv9QwrF5j4rHam1D5mJvbvdP7feaEhQE5BCeKnYQ7Yy1JYksWiFiGXK9C8",
  "key29": "pNhCT36fcV7VYm3FNnHkFnuVHNLW3JnsgjFExBwnRvCpChumKdzCLYMKKK9dQpzCwEoJTsFzuJ7DD1yJFu94sGS",
  "key30": "2LTYk3XbaeQ6n1FnTyqKGHPNvxTnyE2J7bcP6n5VmBAuXzcYuc2BFuVPt2LmngcKqUasf2NBJW1qzyFvbaKpLx7V",
  "key31": "2hbzkW6bdGyP8GjNnuMycD96KZiMHgogGXiR2Qm4hUF5Xv7PaRTE6BZRXsHZH7Ey5TuYokMtoLn8UdMry5DK8bct",
  "key32": "b7e7uJgWrP4hN8rzkRVGGB85thF8nZkS8B1fMnk8GKsNCdgLCC5L99q58zXLQSkuhYF9TNDT3tob1WnXFYd8vXX",
  "key33": "4EmjTUkB2p1RvuivSwTQzmuSKqXekSu9aPkY5zT1nbXZwHBHd9NFxnoGiG1b977PhjNzNQxsVG2jr9GRgyQv3HaJ",
  "key34": "DyQ6SUTn3pRbnr5kFV84Wd2LzCrY7qMH9Fftuur3mFtxx6Z2ixM4NLbnQbwtWxxsdSno7dJpAazxJjfV7cwvLpT",
  "key35": "4y8Ke7b8LdMwUAUHwpa8LiuM8bcDz62qEgBfEmBqhDUQYpLjQUfZMAL37XZyydUS4gyGr9e9SfLsc1JMx5rih8oU",
  "key36": "418xhRRDJ1DrybUQavnw8kvXSwWUqorGTH3wJrP8bKeBP1Y4Hg2Az6nPw3F2RP5gxnaJEUZECokwo2S98XLSzpme",
  "key37": "2C4BTw9w1iNL5hkZtpeynopTp92urj9obX9vd21ZF8uiPvF7UKx7U723p88SEGgWXC5P1h5X6U5V7TRws3w8CCNw",
  "key38": "4zaw3HeEhyvb9LP1imc6HLZqk9a178rkQkNcWW735NfUxTumRD39z1YFn8ycQ39EauiMKf8TMHWCcgcBCei8TFgk",
  "key39": "5napxv9toFPkVf5gJ8XoiLY1zA86kop56vjExNiqQ6euhAXiegk6PQrwXZC24ufot5c6H7oHRBWF1kVJ68cKesmu",
  "key40": "36WvUAugzugUfvLbDKefaK3XhmvpU3zihKwKm4grZXymt3rZTwuPZSpxAq37uZgxMmd9kpdXPFAMBGvD6a7gZHMX",
  "key41": "4btjy7uhL98gLzaVu95N8mGiJZMvaaDbP8uC1Lnwk3uHEcCn29u9JWWcaWkmPyqrvuAMVP4oX8QpAHWeBxsyejTH",
  "key42": "2rtffjRD3BkDDpgk5eS4rh7k9X8qdSjKw4jfZnageSEeCvrz3n5hKZjAz2LkU3HbpPtQapPEe4xXbKm7MY4pHFxB",
  "key43": "32b3Czr1F6U6PJQgy3rmpe2QTgTMjPJRaEAE9FgTz3d5JjqTMm3SrTat34xRcATiQc5g24fMr9NZpzui6P1ZiT2c",
  "key44": "63GE1f1bb5LeK2XH5L3aWgji5nEkXfLhCZ1gR4SR29Tmx17vpdjAt7rJLyVtFvm18Fdgib6Cf3ixTXEXmuRbi7LJ",
  "key45": "2GkaiNw62uqhDVV8EnuXnaWMRisoWo5s5d61z7uNzbem8ni876ZjR3o6sYZBW4W4gAFr3KMo5CD2knxMpJvMJm4P",
  "key46": "659pq2fVDZ9P7UcaQAaw89mGbNRskkxzc7EiM1MvuTSH7ig4bj3oNZbu18HAvn6ZhDVh9MRJUhf44PNEuDpHKXWA",
  "key47": "4cay9Pc8tZS2H6wSVyPYoeos1voSnuBye7Yijn8Vkty3P1zVg1mJ2n6TJBpDupQNRBm6ByfYMoYhpqdRTaoGYWzS",
  "key48": "3j2j37Z1wRWMvp2uqYtmBFXwNWTHz3dt78RSrmu2vwZ6XCmJiEAfRR2X8Jc1aAhFDhEPJagQV38gAmtfs7VP45rE"
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
