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
    "5bX858orEiGZZp9hNZ5MbsgCrmYAD4HrwM18yLjPcM7n1oecqH7fv6wXBe6VWydN779cjk48faE6WiJ56tiaxCBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BdQaCLiHF8wSxRddCJfF4T4daKnX8m83ugtX2KdLfKZzzy2eyhD591oEQJYdPwShQE2654vtePMMsZ6AaGxW2e5",
  "key1": "5LMTmR7sUq7hQzTZ2cYQyW4swtMAHZ4f5yFmNR54bHGPvSu424uGitFypbfgf3uBGFsiZvzgepqfjveiWRd26rwg",
  "key2": "33ognnSmNHyHiNvGACNQtYkmu1G1PsKa7ZjvScVz8Euh8z9YApmMncUi8tpqePhcayLjVBcv54kjyZjvg165fiFP",
  "key3": "4vjjxthR5BLiBCx7ZgF7MmZK1B4bftdEYRzg3Q4rFcWDXd7RYfDU3uMnzQp8szeGDLjS4MvoPyY7QjTMZMoF9MZ1",
  "key4": "3h4exeFdFwqvocfC48oPfDVNjNuH93tyXEig7SzYkoDacXhxAqDR3vPj4VPfEtaNhR8PKz4TMEBwBw5PrP3CwqCg",
  "key5": "fUJZTcXZEvN6wcXo5nQjdvMtWEzTSwpTCcQDgegBygsMF9ji1v6VDMs5WBBTTGSpVxRNzRAWSNX3feoBgrX8WTc",
  "key6": "5FfceQYcpRcjzfSquH6PrN6nbkH3W1roMS4bhpmWp7qxBjCebThL5EWGEYK9QQ3tJgvpEn88NHEyyjAAP7Z6RwC5",
  "key7": "3Nt41F2Gecg9r6QqgpbZbHnkWCxSB7QjvQ2YA6MLfUoL45fRQc5jXQxs5DLiVqwtYJuwxg9an67bzGXTHsTnnrBX",
  "key8": "5e66XYv69jbaKZ9fNUoxdwt2uR5a46gPyXAsRHjL9ffTNytJpgH3QLjykcd46qjHXENSLFVYNC3g4WFrPTy7RTSz",
  "key9": "NSEcFnQqr44Sk25Gs3hp2Dtrq41pniGcgrDRMd8A3VpLYe7JTq9J6K66VC7zkNMH5K4SDvuo479njcXpWAiTNFk",
  "key10": "4Lr3CivvKjtKgBnfbBfEM69GXvCv7Nxb8AC5157sYbBaed57kDqkBgaBew3WW5BJJAvxWyCQkCa6F2CqrEoAB3kS",
  "key11": "4DAMistGC7DGe93SQnYLwLRFxp1gJJwNqp4zzodZrab8aqyHeZ5h92aa1pGyW3mjJczCNnndwdrN6ZmxqAREGwpR",
  "key12": "3DZ3ZxM2SAbGWFdMw3CE4hHfrhNXtzH8T9WNsDLKked7G1E2BPc3BU5Yzc8rn3yxN59aRJXRzB74t62q23x5H6D3",
  "key13": "4AhFFr15GVrdrP7Tdwmfqogb4r1nRnJcG7DGR17BRnKc1WL9TCAaSKWJ2iLN39WgVs7VQd1cJpJFpx5h3Ke3tKcd",
  "key14": "ZXGL9EUBYpV3Xg112DhzxiT5v4v3cPJUHjSBvNvHuioRJosNQXGDF4qFQorYzmndy7YbAYzdBu8kbmF8dzoSPzf",
  "key15": "3UkcZxEfECpeuZ26feHb7dGxzBdux7JXQYbnpqAzs9sSzanGnDvFrvGvivo25Ybm3VQiLT2RDeiWYcGSGFrzeNJu",
  "key16": "2AQ7AkmE8pHiqxcGA3fRWkYKnp8FbREp1af9ABeojtJcXXg9sV2CUxMHemDGbLn9Ru6eaWfXUbpj6EHA6rb9Pe6T",
  "key17": "5pHkSKTae6rTV8NsHh6b9nJrSFNda9BytiaNtyr1rBwLYGvYgJxuDtc1nB2UtaL1MP9y6bPayTQ9QdeQpNUidr13",
  "key18": "4gwn7D3bxmcFy47CvE6pXCnr6pUz18NgTyy8XVrBpw6GuiJ4PgbmiTfcVKWiXgn75UfCzWZLzDn3WqY86Soa6cya",
  "key19": "2NKq1C1zrMK7VBEj6RHtrqRCmFazUUYHhnUd4FkzCxPXw3k4c9p12ohqGZMreXy7ZyNYtcNHjtM3tqHhCrbGYfSg",
  "key20": "35BpVyR8P5w2za8DwHAnTstsLF52FquLYhDcYqXoym748MguaKodWVGW2aCYa5PgKaRPecp35sVPcS3WHH2XBaSF",
  "key21": "4LYTkJQt3V1jHjsGNX7UXP7oKBwpmC1Fpd7SwdFxieKM1aFq7DF1Hmsmi6YbN9wzYZ8NKoAqRekd91165TJqfBzj",
  "key22": "2NMfB5z6LmedfCs4STxz61GatxmtfAF5fU3hkY26AcsYdiw1vq5X5qJbSTcLfF4sDP1AgEvh9aRB8GEbGyi4TACp",
  "key23": "2Xc9ALzVumpPGBg2JYMPuVxjU5edeNS6Y3s8Jiycuzhm8FjUq1kppucqVQnjvqfQToCkTBAiL6K7SwtEy1gwRrXR",
  "key24": "41HjSqgwanEKKK3cmSNgXJGHNXn9WBPRfLnSZsxKBk73F81YrLiAh59KJYEiW5SvZJbeeuJENxRfdpZtADZhV97s",
  "key25": "mRjPN22WivhEWY9Ne7EUEkGLPsHEnR9En8NUrTkakaGnTBPNXWrEP6J2nw6PK5HUtZWPtsgLqN97VNnv9UpQHmm",
  "key26": "4CtHCSzMGc2fkkzsArwast2yjHUrBFBQEAGytKrMSfeSmyGxEvgj3mGrLpi678Aa4317euwmJtWdmzjgNS15vuWb",
  "key27": "5Wf1NEgCg1cYEdjVFMNLqiZg2cRWakYHCA8xt4p945N8pb9yGjC1ap5HiahzKFGNZ2Zu5fmHi379vewCPxCQH3SG",
  "key28": "66bUQyi58jrEwBNATXVnmt1o8ANPqe55USZuqnEjcDmvaQz4r8n2SzJ1rVczNVMV2hS8pCZbe22bCXg9ivjdHshM",
  "key29": "4sHRPQPjCuph2t1ZDjWmyvnoR7hzzEEaUXH11QgWBWXJCWt9iosScvTyuaGiRwLGRPk5j4USFCSotpy8X98JMyWH",
  "key30": "4UmZtaV9PkYPrAL79B9MQAUVjiZ8soDeJisn5bQavohcS5r7A29yhx2yknZj8Zww9Mrxsut9L82jbBt478cMJ26R"
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
