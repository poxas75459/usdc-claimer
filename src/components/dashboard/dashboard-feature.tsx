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
    "VbPk3XEnCN1TozYKvTxGatWu42hCr8vgvg1Aoze7yUBf4BaKWB6DYpiFftXjDoV3QtGaxyUGmKY7NK3HrRoYUBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y1bjBLci2SpSPUwsvsxK7T5APf1jDawCwJ73Dhyd4aDGPRLB7WBGJxsbguGXhkmpdnC8rhoLaztmGVF6vvDNybU",
  "key1": "64VwY2spdX7kYyZNDcipL6H59DYEs897RqddYo8RqyZUsdraBi3JajBqauZyCtU6aX5XWjRM35N4msaUU8PkLNJR",
  "key2": "4RMP8ZeCahcqMMvxCGGRKmQbZjAP4sWWFe9TBySaY1YgWM3Z2h6Y7XpwSeasBNdN9251T6vwogKtJFDPSJDkiunh",
  "key3": "3FWJfiA6wqTCoSUanVnf2kgx5qgtZRTzS4zTHkuFJMEhR6UnKbqCpCurXtWLztJ1nEk6MKNzQ8Chn9tntCWyBPCf",
  "key4": "5KVnRNiW5j2xitAPUBQmynzof81KrB5m1VuSXuzmsHu7wd3ZaHDCkd7Huhv3CAG7regnYHjmP8RAPvpRqKU41qNP",
  "key5": "5KLyzjxEk4zgSw2W7kaZvtg15FQeowFfqSt5UmQ2JeDRbPtmcEHRns7tfWeEEfgwp3a9Yu2EwPZ4ej8yeoce1y1T",
  "key6": "3xLf3nYrVh7kQWvuGVjNX9TYzdWFcS3J5UQKTUsgi3DfaBzALBYuWUJLeuerAMYVq9PmEmPxqtBS5ekevYon2sjr",
  "key7": "4jEPfrdsHQZsS1Cb7MtKQrVTnLWbFDQzxsdtPQDc3onfzJnXm9h1arZgncWMPuxvnVfM4CPC1uKNbhuLjjm8jxBv",
  "key8": "2JiZ5NME6p1ot8dRt4ywULFgPNNuH2VDM5jwzaq1jE9i5Gs2qzaydpm3uW9izuFBU5m3B9CpUvyGxdb5czsJyCLb",
  "key9": "2AAFSehFN1PVohw5ficjMEydeAREo6sz1Wmog9Rq5o3K4yEfQc55cKz1QXC1GALLc5CKd5tbifa2u1X3vEamLZpM",
  "key10": "3C7UhxctwikP46PDyHwDjQhCiMEw8RHY1qcMGz62hYPAKC83ntR13YkPSJdn6g9BwghTf6biu8iKNSfuafG77wKY",
  "key11": "2bbXSUXZ1ijciMC8PiwqHv8d6dej5NtSmpnk2vs6r2wymmp1aFbrS7B8hD5sR2DRsCwLrJe6PNidkJJUznsMftSH",
  "key12": "3mxfLZ23XBb5eqJm7JryHurbidcKqkPLxy5ARm38X5uMqaG6yTDi4YDAfcMDvN6eZkmJ7WzmYQorAnfHTgtKZMsm",
  "key13": "3y8YVMju5QnVWDzTHLScjPJ3xwSJibAELxqBXCyGfCA14fEN752NSHAWjxuXMrDtGSdt4GzY9zsvB2F8vnTZUbK3",
  "key14": "5gJUTAD2MoFVCD6dYKQwxSunG6KnECeJHk9YP9GcFpK5J2NEMT6NMnG369aZXGhXo9XnJTXvUNUVQnkjUCRp9dsB",
  "key15": "3CVymBBMjKGF5dE7R4MrUjJdqt75GVfEPyhUvuD3dqeDQUM5JciXifegE6hPMGGQQvwHD2hpQXMb8VqAEJpUB8NU",
  "key16": "23g9YzWExogg1nD9VEhJKwChST8AqimxSfdcqjVykJJXuuRySwcXpTEmpipQKy117nCoGriLEL9tAUsnogiB7m4m",
  "key17": "5qEZvoh8S6ULXqkRrtUCdEpW1kzhmPQ9AynZQPxHzJzgndQUxpjkXRaEVrtSWA2rBVdBRmsyjdJiCfnBfkH5TbXU",
  "key18": "43vNRLnsX3fJDyE4mPsieJfmBi2bH4L9k4igucVx2k1MYYjcFN2YuGHVRr2j5ygUNrcP9qh4h5uXdMveBF2RMDzK",
  "key19": "2iub5t29qrdRSntB4iGLk5z7HRDE2X3QeJXGXC7tTvRB6vmZX8WGEt5zqMr5755KPYWsN9HHuzSRY3wMCPhNidX7",
  "key20": "eZASfrNiPe4Ra2qcmVQCog98X37nAD8i6zV3VZA7yo34bfURZafUgvbFB2WhU2furMGpShuLG3rThLcB8YawDMp",
  "key21": "3xCc4m7S2fuVSXQ3R8DSK9wAGZRDVpNc9v3Yc45S99xP3UVuBFxo35zNF5AuEL5orKa1w45bezkKAJ3MtfGQXyQi",
  "key22": "3P2VYnWLuT6vUHXiFSsVzre8o3iBT4XNhV2RB4PFc7nfnjTmLTHuwyuSzJnTsDh2fx8u9XjebRrLypBimWB2Xb2F",
  "key23": "2BR2nh1gzRdCMVsK217Wcoib22VEQUUfx346wkfBbaHZ8VqkvT2iSpgbNnFLCWmLKTCEkEXXFyKZevAXXutuuBP4",
  "key24": "KX47y45GBHTumsL8ogyuduwuCrrofewRfcQnR5jjio3JDpM2hd6ywsJZDaPHKdbVmVt1JGLEGJR4GfkkAt59ycH",
  "key25": "5qpqT37YsjTeiWRqUyeDWGCqVTTjDSxfpZRP3cXxwTmzvgpUCmGEVgwgmiVq1wrRaJdHGNbGnwqKemfEW5rn2Era",
  "key26": "2G3AeetmnDzy6B5AwfC3GeZU7nAC2mT6BUu1QjYgYPyVY61NLZFLV4r7oTmLD1BKuSPQudTupVtcCD91UrQVtTfN",
  "key27": "2ict8BNn5QEu4VPCn6P24askvt2zSSoGeg7JP9M7frF8m6bCsKD2J8WUWL7Jj3zK8fQN2GRg9cBUumFWs8PKRMc5",
  "key28": "3Mof6AsPY3YTYNpNs26JJHAVShMwX5KT8VUUTaJoZxuf4XzZJ2E8XcLdJJYrpBy3EdBuuyuc2prUw3MLQ7B5b4jH",
  "key29": "41hoYNomtFqPTkCXKFUX6Fv5JbDBEYjaYi3fEj5Rasg84Z6a9Tyd2Yrc6GVDPbkcHHbydQZxRLPZBhj1jumuswTS",
  "key30": "5hFhdXanrXQrnpwmaajXmYwGDUxpg1z9hufc72SDmFuPukiRfy1rBBLkbETBxsNMsGQdvpf5femKxPd2AVmpjkqN",
  "key31": "3qwp9t8vGeE5uFNZazJWhk5UjaAB8r3AUnB6uMSA5WsGjf5LCWPk4ziKfa76KtquqboFmp2K9eawYHUBfSktvDox"
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
