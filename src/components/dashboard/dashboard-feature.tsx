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
    "4ZGkuTifJuhJaBX71zm6sHExCk7MYWjXNY7hDgTWG8Udj78uahAXS6YLaCkd6Sg9v5FTpYYhA5GPs6zbUzTzYkry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvZX32GokPEQtvp1TiFMWxpYZyxS68BXPBbDLUJYLQVPzPA63qtrJ94izY3CnXW5UwqSKLyVR4tDVm3ouSLkY2K",
  "key1": "4JE2csS7DH3ebtZYsYEqxRjkNFxfvS5d968FHfAEeAyWA7mk8pewhLu5iSKvm1U7LoCnNo1sgRF5V2viLe4DJEVH",
  "key2": "2ejs7RoNmihjfs9f5pySHSuwJheQ8smb1kWHirm78HGu3zN9fBdhnnC6nhZHksf1GwoRW5Jt883FfiR24AjMfxsq",
  "key3": "wMzmLuW9u557YeUsW6w2vQnr9Un2hec7PHYxQ2fsgbw9ZmpzAujYN1XCsxkoyxEA8gAGAq5jgkAnSyryKBnmmxS",
  "key4": "2PdcHLvpw7kBuFDeeSePkeALPyJ2g5rnqSC1fv1mgrd6m647YaAgZRWddWDyveZ2HLj35TJM6gmz77XvgBWX4r77",
  "key5": "2NsXhzxSZgh8Y8xS68BK9yU1GLH1tsKqY7dJCrVsYNv4Wr1ra7sa7k9ZMn2WX9bP7ZRXkgP1Tcgg6Luk4cw3YbDh",
  "key6": "2MDzKWCXNHVxGsAYy4MRk7egcAzwmHm2TJUPGp2HjwQ6WmW5t13FpeQqCty578HvLg3T8uNn1hxXtWdZ1bysF3ap",
  "key7": "67C4n3NyzW19wpVpKCTpM7gJczczVqpdQWgTcuGKUJaG8t16RiDo7Uw4R3EVCzhyoVXzCFhCj1hySiXP3odAcA9",
  "key8": "5uvZoCTtSUqYJwtPMi5quLGGwKPhDHSLZ64v2oGCDD6heWwtYJsquHBG533JWbhds97B8yDEpRxyqca9P6tSD6cw",
  "key9": "43j2bXomJHFjjC4b7FfVjJu3P45Pjw5BBfds3rEnhCjGHCj9QEbFNeFE3rVifYLhFFZQEriE7XZyri5Ph84y6Svq",
  "key10": "3PMxRU7hP8vjP1goF6RTJmZZdHYkf1ZsJsvK7C5VNQ8Fb72yRimBz2wyFKXhsVMpyWob2YJ8sNp7twnYNyy2ikQq",
  "key11": "8DoxUoMVXB1PgFseWYrFecQZPYAcWu4aeDkpJnEAjHqmvxCGnhkv6FMiCnfye43rK9XG9bA156SXhGqsgQVnY4F",
  "key12": "5FkYwJfx2HNw1PbGquuG4C9TPQ8tPxdVKdPQTWSQFeF9VtKjPFnG84a8xcvwawvtDSpDsQPx9Huosbc3Vf9ef1Fb",
  "key13": "7MdBxCqXmtwx3dnrxhBJBvC8mgnpuzeD8LyBXh9RTeB68y5g8z2dFavfXen1VPQRnVi1FEfzuZKDznvkDyyYWQ2",
  "key14": "jBTfCQvesvDBKBF6g4SwdtFRbP65DQijhoqUA1x9AJwcPSb66bLxGfCAZLCM2BW7YWyeDjB9aiuftZEhaTKPWcj",
  "key15": "rb3fjpFFbMTzt4AWcGa8h2HeoY9Fvy3f72o7bfXT9UMjppBEpE7JekSLRdYeGX8zLgTXwe4p43YnqK3Dh1yxApx",
  "key16": "4ADhKvCPCiW4FfjyzFcEpMYEpeQkH3pQgTpRP8m2337FP6PyXyMydNU2ynMrrdTghHV1NyMP44i2chbUNzh8uESo",
  "key17": "3JChnVkWE8fJcBRw5hznmSvAcernKkYjfzbRkzWgbgZiLrc1TF2JDV8e5suTxu9zEquAwinA9ry1Ni64gWuhyKuF",
  "key18": "22u2sq27R1Gzt5hGT1VQtfEm3EjVQcJgcWvSi74iQha4pSA6NVnHTbDZxE6pd9ULFFaAtvyR8eYzoFJMJ5iieHhf",
  "key19": "4qDhofQetDwxKeiY3BWEyCyqnr4yoMR4UZUeA5U4US9J62jJUwXbRn7bQfAQyFaJhDDPk1GB4YdAuksXw86qp8RW",
  "key20": "wWNxTBShTkteeGrZbURi14W4GDKtt1nzGkVxcS3vkJCwZ2yuUvkfu4jm8SFCWdV3f8Hs3oNLBrJvx86HgnBAYLs",
  "key21": "4E1x3k4necYXtNVpszaBbmtviS9SNidpLAuMUAo4tQSJ283HrGo9eMgwgsjpgW2dZaZoxVqWvVHCcZLkBumd8wVG",
  "key22": "3JMuavrfZzjB8Uq4H7CCEwuQDnxzYJrHXf9jrsHJoJbCYPzRgVWXqpKtPe47xaNQLK9qf7N2E8sefEUcW3c9i6pv",
  "key23": "4fXXRPkg77srQeE5oGziKfwnD6K7kRz95Ynx83789PLTkDXFiYHMG3CzXqQniT7XSZ5yBndN2EBztnC1jgJv6z5Y",
  "key24": "5pLfkPDsBewJswimP6QvG1e19yKr5jHmZcrtrug9mdezBsRwMChGX7k6MGYvP8rvYzyo2XnLXRwaqFmjQfyB9mau",
  "key25": "5DWX4qXVr5xBmyfyytAvi9f4Khuha4CFaaiaDT97SP25Vzm2aZFoAKXSjG4uGNzB11JXQbC1HiK1pRdhWW6hXpQ4",
  "key26": "2orfPV6rFF1Ks1YkW1bwfo4DrVjmc1v3Ha33u7JyzbbWYdP1YRR2jMuJMQoyZTBDPawgs67F1si6ZCg23sjwyryL",
  "key27": "2s1c1TyXqSezXRWV7R7yNeni5Kgjatrbk1ATs9sS1VVnZS3PMVJin9Kn2oSrqHAwKGF4e1KgmHWCnzyeQby4oXac",
  "key28": "4UGGgBKE1yoWuWzZzXuDSgxDZbWZ7YR2waTnrFsaqaY2B9eyXFn2jkstQLArAY1KSwpWzNGDB1LAjSgRbNZrDndX",
  "key29": "5pomynGoJStHwGqRWWcfo79M4NrAgCCnTFPT6nTjBbMhitaeXeHf7XM2nvZYgMwELqPRP5X8rEWFuePrrrC5z3WP",
  "key30": "5zkdSJmFUzcJKAiRvCf6PsWqVshYrqTjM4ZucJch9g1pB4gb4wMUGRRum4yiCxpivfV2moypYm3a7v9W3E7L6pnz",
  "key31": "4VG6PtTHib5WepvpsZM1rocoYS2GJBJ5BmBKqcNFJCYAm1sM2zmh3X6XruFkdtCZgL7cHQ8qJVfnx6YLthCQoECh",
  "key32": "4BRxgf3MKri3B5J3d7JBFLppVYeyL8oNSP9DD7woE2m2UezQ7amTVcxd7NyDoJPRcpTuaNq1ESo4QGJp6kQ4ExU9",
  "key33": "kRhkL2jhGaE6JLCyG7KPXe1iwqEHfvNx4E4gcktvHKhFyhfn9AQLWiPpWAU6UicS4yvdaYKPMNWmLG3H6r1wQ5y",
  "key34": "36n8ovfTZhajGqZho18XBFBsnqgN1GqDL2vXMVZYoP9jfbuvgRrcUAQKE8Kv3L26gZwyFyKMcV9RP9CtXpRqDBZ4",
  "key35": "62C8HAKW2FbrdKS3kjMzuvEZbaJrWx49nCj67NHAvGARv9fAkXJUsf4aPti9coxJbCVD4WWNCsEC1CqBkRsPBYK1",
  "key36": "5cDZGPYgu64QYRnzHQnTnzEGeRbbeJJF1ABaRswsRmUqgrgWVKR2faBuvWwhompqppYyGANbFvn1Vu51EFpMY71R",
  "key37": "2vmtcbz4MjCdrKW9oYC7yMD8vi17ti87vaxzxzYCiBKfG1zFKnSDV5m7GQ7jBKrtgdRXW6kU3NCDMZCBGyQLo1U1",
  "key38": "2x8mutnCrrkKhRd1nQ77K4Ff7oaYAB8sBWpzRcCgbz5reoB9DUayBuRztmRFH2PLyaxhk3BMtQ794avBkdciRg6x",
  "key39": "21hu8QJdLCwABAj3qd6NzZHrowsHeVHJbYvKKf4pMTo4yLjgtu8af5r26iR1mUVTMFqJpVCAJ8KusDzHve4WByeR",
  "key40": "4Qpz97w8Sajv3S4iSSt7cNugDDwFTzENvzKKJP9MxGu2HqDunffMtfZZPVRU5h8EWjgbCAvFbta2q1T94KhdrsTG",
  "key41": "5wsnqJc65Xmf8AzTuSg2vFSjoYF5epVgXtovkJCTQujyQnhcjt4DnQCCranHdH6aMMkh9crEVEdknwnYiH1DWwsU",
  "key42": "tZRhKd3NjHpJDQtooq3mx8Jzw6zjfCTrTkSReMrGvDXU95dvD15WCC8X8K9mGmNAbBP1tCWt94ViUfjsyTHG4d4",
  "key43": "37XhD6XBQrQ6Hn7QjmCBnZWsR1hbE3c9ujgCaGRRRZ41CU3PfMe4RPtTcHp3RbhP27JHTuvMgqAak1PnVKJKj9oV",
  "key44": "2m6Ea5NAtNrurzHonCN38qRArv7YrhkC6VmHw5XWMQouweF1o1hbSgNcAL2iYEzV9xnfGmnXmKKHdcpoqqBz2EVR",
  "key45": "5Cr9vcc6qkHkFYys5UFguAyorBKEWriTD3tgZXqQDkxao8kNnWkqcsKuasUeEVaienMSmYkAsasnzJa4NtGVHP4h",
  "key46": "358tGBYgh775NgdgBs8ZnKyGfwi48H6WCaKZHqQCz9Xmz2Gee9v17XWGKvYxzV5KZ4QyeeyLXWjLJmMqfx8urLPg",
  "key47": "5Dh2eZQFo3zvpJUAi89ZjT7K2BecM7MDTuVuNisV5AFVd8va2QGqxrjcazCyfyLCCoezvkNzaDHypkwAytabchcf",
  "key48": "2ooy7Awrs3uCuudVdj8eqcLeq59WDjxsVBsMbfJF37jBPwPyNKajRV2pT1YKYndQQLc3J4dcMhXFkCqfuf86H7S6"
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
