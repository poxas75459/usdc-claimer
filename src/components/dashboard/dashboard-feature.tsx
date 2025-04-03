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
    "2auazy7nHyVQSsYXr1i9NQHX2Vf4ZzVLSFxTJUt2J83zHurrvwxydLwFRZsxnZUuTWyADZA7Q11oMYy79q8HfZn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydPfWLTbrafVXG4HshYr5xEvguotEE84dvpJAMZqcgLbpmsTfMc9y1E52nnmoWUX7a3nCwGTW1gTXcV6hMBW43Q",
  "key1": "2Ttfa1MMR2XNtC8a9kyxieDmWwh6qhvFTiNCY6WNMiVmp3UYwGns8Wmj4oPh6FCWV4MA7YmCeQfsw3S2VwdNx4aP",
  "key2": "5KJmGin47sZFKYkFbtMT2Zb528FmpoECQpM2upZTu33gLAY6RpXKBefwpfBTCEKV5tNWX6Pcr1zjUf5os16RSY4d",
  "key3": "4nPwaL8ac7nR4xhnHrPGk2nMZbasSvAfxyZNA4BQBqgMDLwfwKVb2FjqWBjFkavaNRdAp9GUFn6deCvH2EN9AQY6",
  "key4": "JpVcs3r1GT9PqusnZyMfwyTYfsKbsvKqCNP5c7PFm4rensfsxguPMkHQJN6wxK7J8iWs4dCVdGBmvuQsrHSYkLg",
  "key5": "2t4Dih46VA12kwQwQ9zNkjUturXnujArGDGsamHjKd5RGFsyLse4ENabbRTHL2yzsTbAPZkrMWRWCaXkK2dwvtzr",
  "key6": "2zMZ7yZ8wGf7dfpv1yNqrJFHfzfziex245ryA2kY4UaGVGGfZMdfWSo2qY62P1ebtSECCW93kEmCktv1vZCh8vjN",
  "key7": "2ZoUscihjRDS25cAS2NZWqGYYG2G3YSSUaVY8XD7hwkssuX3YmY5feKkbwWmVDQ6LmaQ5hLBDp41WXmZCCR7gSZH",
  "key8": "4wB6zDoiCrqUvJ3pi14wGeVU5YdMDP6MQXEeLULuhhmTh74jSX5qHbjPb3hubV39phrNM8y8VsPLPULgX94XujbV",
  "key9": "5k6WpqaSYNLRWvCJS5DY6W3zji1L32fdwZuN8nm93C8L612FMhARPZQSCMSHukx14UMEDv1biPw3NjnNWyqyyQBs",
  "key10": "4MRNgt7CMY1MWAxPU2siJmozbZqqidwyx79A6YrNXXqLGQnxmKdDNWzkzRn2zqbbYu9dv2ZAowai78CW1wUi3sMC",
  "key11": "3RwdCpzTwEHpjPCJsG3sKJtQafAo4BgjAarx1f5AqbxVd6A8AH27ScdMm5vW8u6qrXaUrnvp7TvPoU82saANmW7M",
  "key12": "xr4p5zRSZk2r4sPrwMwpEyfVXhiz7P1eeXr58qnY4qAyLhw2boe9Ec8q2tTibWwzA2z4xm9cBsLh2PpWJR2tcX3",
  "key13": "p2fvBRLB7NRM9fvTXg9H2KJSk8A1zJciEB5nCwFCmhQxRFAfD98Tkj6Mt8Nh7prPCKeSjtfU7uj8bgFtUk7Vrq5",
  "key14": "5SJxSU3VBHRT5pNY1zQq6N1WMVuNkyr1Zr1Mjti9GzNW2qUi9Y1N98y13QTeh4mFehwUCR5X8r8mcBT1Gt5LqWYJ",
  "key15": "346fkEVriD7TvZx1s3M8nPBji4vrggfmKrTGryYo1BtBg1UidFSApEvcSHSrVGdgc9rQzb2du1NvrRGuv8vjxhCt",
  "key16": "4fMiK7wV1b66BrBkmL4MmbS9Hun6uoZUpqYwsgjeFykthheMb7exFg4QtT1zmbprLXRGPCYtaDnVtQeppUCmUfo6",
  "key17": "3hzoJe4RvtkrjNa7aLp1cBtUgpQVaLbxPpFLEXKaMGaTpmpkaRVrpk4nRn5MVVEerJVo6C6EUxTtf19Cp7dzgjX7",
  "key18": "WSNLrHduJH2rBqgMtJD7xUY8sdUMQhAABmhGaf4Jv5PQQVnTx4auE64oN1Gmea23LXVTsWErdhCW9xTi9BgeG4X",
  "key19": "3KwxSectE1rViPWZmgdCeYmm5KeNAD53s9o61dNeH2G5W5ANEaGsiC9xbPdWvhuLHfG3mbp5TuiyUVoAkFJjoRLo",
  "key20": "rcMm5C8YesPeVPkU88abqqNp7dNeYJxwJKM2SP6LfV5UujPmmgPo5a6HBNu3vapDTbMn7LiFNtuoN6EnW1tuBpA",
  "key21": "5NQv2Jb7X3QaZoGur3CfvnZKXVpExiY47EEBen3o1zvPEops21NZr4gnDeQsGzoVMhADqZw85eDSVEAVUKryZDLU",
  "key22": "5UBghR3RrmBgVJC6wcKtcm2QRyu4x1Ni1XsQZqhfqFs3oeWkM99e47VfUWgdpb1geVeZhuzPz2cdpY1CdqJk14CY",
  "key23": "mXQddnznLc3JEqXXhE45JH7oJbqihDKk8HPMGH2JLvWSPterH74ap7wQw21PmtYFWtBDjV4ogQewe3ZDi5QzQWY",
  "key24": "rtkKb2yHbJPmqFZ4Rt4bUa1gZ1d2aav3o8MHwgEtTnMNihrRJb6NYePcD77YFj6jgVa4qZDtfWGoaVyS8YRnvJ7",
  "key25": "23zEHjGkybsDaic8tHgTy7G9vtLUu9Z22eE3gnaqNspJuo5tV8GJH9cgtkc2Qwy2F9JQ11QdFkSK4t3cpVEUmBeg",
  "key26": "5MFscRQF6qYCYtQJGvrhSqWb5sC42bRcpEpgSPxSjnCD2FGPyBogp4adNtZ9kWCsqnf8NsYeWkYXkMPXLPuZdyDx",
  "key27": "5Tm4V2aK43kRo6eK82yzixCNZiik3vNKvHzNTQ9v2c5FgNy2h8bLfuYAMpfo2xDDVKa6VdvwAXZriHAhNzDrLcFh",
  "key28": "kdZMyELffTNTpXwbib1WDMFshLvJHK1To7gGMTXQxtywjbRGBWv9MR1sh9optbC9Q3ykcyFuBKX1U6Ykqro1zZ3",
  "key29": "ZoEDsRDh1ysWMiVuvuMPJNbrjFjiVke8Ap4wnuBqcd3iaH57A2otm8QW96rZJ3fmwtbXUzt4gS9jvdGxsTmFiNj",
  "key30": "3coPpKVbyzyDTA7FTif2zEPjxuYEmRpwfYzSv4da4PiYMHGJrFH5pgtijL6hZzGuzEJHsqZHAAazN6ZGZzNkrrUM",
  "key31": "3gg7v4Fq6kHAXuXwYdwBwjZg5a2atgurjGGY9uXxEf63zRqN9FdMwjK1pj1zhfv5TyuMaVEaCMkcdCrmUTrJfGhq",
  "key32": "5KP5Rmuj1RWVmDfLzSP5fBGJxn1PccAyTw1o1mcNWTu6paVf3D7ttCc5DQWivbHg5xWLxX235WBzGmDs1rWCiFKk",
  "key33": "2kyCTQsjogsNnUHhKBJSYrrf9cxixv9wBwLSGJexLb66R25hNPX2LLBR54EkXqL1iUA3CsfjcTzq68vogthXTScJ",
  "key34": "3caG1WW1cKn1DxZFrBEGqwFtLpL9Tb5SgeNtmejXDZG8kP49Fd1HrTeSbZFyqe7ZTW9XCeC1CYZ2csP2vgRbuZQ5",
  "key35": "3E79pRWetT2fgnG5NiYx3zD74mb9C9cPT3qK5WPQoD8GT78tq9Nj8UyAspJhz6TuaauPqQK5XprKkBk6UahiaDdS",
  "key36": "KoKFZafmR5S3RUwSwm3rfompVqcfxGxPaoi5kmdLgWU1KPvrVp7x4kRxpHAxqzupASmKpSdQvj5CYbb7E8TUnRo",
  "key37": "3SnomEtAiA7cAHBXKPKKwqezsixhaxYSK7tTQyQXjBTHzMbMgL8k32tthaCigJUYuuyWM3dE9JGvcPXg6kqzLUsG",
  "key38": "5r8XzPugroTzGxHG8znqcRQf7YMvGVQW59Qu3x8VTaETzsKUeXJHs8CxPSkqtdpPz7dBpgqvZdT2s4JFdD44ncMi",
  "key39": "3ScbPCQYLixaAoZuLTDsGi59L97f2N74ENSAwqRiseRhMyUCPJXkjpN1NzQW95nKQZmeYkZGeYXwiBuQNg8CCTuM",
  "key40": "2VgVR4Yexb8f6gfnTwPh7Bbb8jcATMP64FkdBiijsEcuRbHpuaR52uUC7eeKcSG7N3H3t5XdfgkcgEvy2dnhy1Gn",
  "key41": "64SNRduBh7cbagfsFkST3vr484skjg2Ydr8suVrqtr9RDDCxo2AyhGimLNeRNDaLNhxKE5sPKz3NHDvQcmcE2bLj",
  "key42": "2rLE5ffRji8SBEKDH2XzC52ApsGAua9Br1gBZQL59EphNgkGrZ7zyygj5gatEhSEQT9PMLhRW4g7psWd86dad2F",
  "key43": "4qT1kEyMJYbcbtcCYvvqEb5MT3XQBtiKyz48SER62whbaVMM96etDMrn5ZxK63L2DZfvFFDTraWYsLoErZ2FkZXk",
  "key44": "BqGv5jhDrgr7S9XWRFh51tWviRTUBjJGhh6WMexApKmYacHk3daRuE3Qdnhcv9ZcsKrySYW7TEtRryHgD9TZLEU"
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
