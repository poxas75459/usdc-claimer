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
    "23Bmhp8aaUq1EMY6o18YtxyRSFb59TPBRsZzAX9BYRLCNZg9VM5iXpaSfPteYM1zGnKkKie5NqG5o5dNi1exekKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PmnZgW6cwxe3ogarRZBbrc38UV1G8Rfad1dhaozS9MGLArefDpAoTaDu11naMooJzc7fgZ99Rx7PEWmx6UqVhEW",
  "key1": "3HnN17AscTgAayadG3JHSaukJxyBv9SvvztARbwmpnCQePgSbQbqCLEeKM7Rp1ZNFmsGWxWh2q5t2ptUxrZMDrN1",
  "key2": "5KEwVCPgC1bJrBLLefGBjyqZGethfYqabw5r5Kxr6r845TZH2mmdYRShKeQRrBA1RZ9pZ4p9sA5ttTdy8kpovBZK",
  "key3": "jvEk8DASymdvQnXhwPmLD51bekJUnFM9RjjiZ3TbNTzLAbMwuPmK7Hrqqh6oJ18KgagMcJHzBhsxN1JbQxfzHPS",
  "key4": "5nSi9kDi6MU9fFzJf5i1v4m6m91tBTM3etzhTsDbw4EcLiDw2xDFWjHPzKjf3vqu7e29zMtfsigZtzJ5X5hCVugN",
  "key5": "3UGo2CdSybZ6tF3GZ5kjBbtTm67B2MnEQdDwcwFs8RaBZ3nFf5eQRfW2axqA6DgUnm5DdacXty2UMaHWfPvvwKVp",
  "key6": "3tFb5MGLYTQujrEGaq42Tyz4pNxZ1EuY8vCWjyCyAiq4ehTQv6MFLxijqPETNTUaPgKJinGX4uzjzNXjVsoyFVjL",
  "key7": "58T4AQxfjt8zy4kVhB7dEJkbrBaXUs21ti7rRTbQ13c5X3x1TKtzfKumQP5tfcoK8NyhgQncjGFaxSuqWiJRE4wb",
  "key8": "5JJLpYwaobHbsSDq4nKhAj66a3rc67CRPERyg2wocYVDjyVkrybNSG5cYAaANUoHShy2Qa2WK9boW3ys1yMv33rh",
  "key9": "5yNv4EGYcFBt6rTqnPBNym8bbxrZvcA94vncwtmajzA2GyoFDqNnBFqpXaej8jh3AwhLLSagvcMZ1dzwJ9DDjV9K",
  "key10": "218S8agNUXwucx8aF1kouzC59SEK7E32vNpcvXXggaXFx44o4dMkRzgTMozVFD4bQ6L2UCAZRdf84bPZRtAJMxj9",
  "key11": "2KUk83imDwg8h3tyBmPNrhJiTgU9fCq6PPoSGPFi6avipwoRQ4DXQrm1xQEk5c28LbsL3ocwn7JXkyM4STXW5BeS",
  "key12": "2uLzwCugf2f9Dd5akBGjfi5TcLLegqgjzeneYphyFN2HABct4uLPJ8Hig26gNiPX4WMbBMGihAU5AYa8LU8Nni1p",
  "key13": "Q9ZuXehREU7WaUR9AVzm7abmCtTKG1h12Qg69acdsuLa5TZb8UeiFdgBtxyAHA1wzoDZNbwDzcr1GCN6pv4Yg3R",
  "key14": "2HJKXN7qPdfiukkXUECTeLdE1U8mViiVr7GrmqdhEdGKcMcGLxcGZdnS6ukY6qAmv1J8NjGHkKR125gxKsY6oy6j",
  "key15": "4JNfEh1cVnMiyA7pq8wZTChJkNEzYNQnVhBtVk5LNnBmPBs2frKTjeZQ1N2kYdz5sHxTooRkNKqt2vmzRDwPcduM",
  "key16": "3nn3sqXpgXUv1RzNUt22gkZQ31JN1zEGrLyJkz2bRZYBKjBNYxups6gNDzr2VbLMjwE4FaKh4DuijTAAcsb1zKy4",
  "key17": "5ewdsduUK4YHArjX2TPzbrMCyd3hZ1yXf16YDY21eJyRUqsTqqHWWwomG3yWVaREwVGzpYxvAXHaHbp1oQh8F81V",
  "key18": "5UfYXLHmTQiVBvjUm1WgEt7WcsPEq5h9CVZHwdscrPmyykCWeoa5uBh6VNoGHXLJ3uYWh8ih66pY2TgX9TBv791Q",
  "key19": "37UfbFvbhefKXLVJgAgFiDWDiqNtyt55E4f2Us1bBHDHvzmMyunSJL3bcrh9HemgRskhM5GTWYsexPUitRog768k",
  "key20": "2YAjHoQDCnvnfhBsjzPLgMgTmiGPPh9UUBjwn18hGNJ7aNJqQFj8BbfRRJv54kz82dXa4or2qRi3XgpZxubJ3Qx5",
  "key21": "29GRvyR2rjAGebMBkzsofiku35c76gVwCGZgi2o9Lxd5865hQWaudFoTkPKP9Ztb4EEaHRe8pPVJWLBCsGemV3aq",
  "key22": "4DDbPinN4PESB5BhtkPVazE2iR5joJrwcycqJ5dtmGjBmt6PFfa7a4DAYLZyLHC6XxnNPXQTfCqzFQekNbP6iDS",
  "key23": "4ZquuJdf8wELWMuiRATYXTtR83dXZfnRh2h1JFEPm5Q4piW93d9C1HovCZvcKrveQoWts7BNFwejWzHtgH2UV9Cz",
  "key24": "2abNrfDcjC3gwyf1GrEFt9okyFx3ZVFAub1r8C6ueAfv4kR6aew6YFcvZRbf72tDc3c3bacAsajhU63rwtxjLV9U",
  "key25": "WTfTWfESSnh8FD3sTcbcr72dBSMFpcsdUYnhAmSD3TC4K3hDoascW4EPCLYNZNp9iRjJoZt6G2DhnthAX8QCf52",
  "key26": "2YjGCDtDwDgDzibvsRHTZNYcGKY86MgqbuQ9gYSc15d6YSHk7tjQxKsGBxYXcXFJcgDA8FbVe11MEui1KLpxSmYN",
  "key27": "RqNmoiVzuaB8BwWgcQEZsp8ATi9TvNtCUdzS3USVJyrKNyhUAWBjrie2DPwvD5vcuQPZ7iy4xULYfVUjFHF3J3o",
  "key28": "4xE3J3E51WcmtiGBtmwid1bUkY5NBixSkujTeh9buFP4Q99LAustbpy1m9tURNvWheht8ruLSa2jfu3cdtim4tW6",
  "key29": "4w9mT7gF42tuoBKGWattQr13jb4R2gfEqNNP64hLmMFCfJKF3w8trDr1dzzgP8UYbHRcEWQvJyoekBWSoQZuWjE6",
  "key30": "3KgUYeRJAcMWrJZKjwDh6vrTDJvFyfk9PSJ3Si7HsTxBkc7QNF6v2DU3hLFqX1ggL47q31vzfCEXUuQWD9XQFsif",
  "key31": "2tdqGadMmgeNjMLAEKzkyxuhpYFx91oWW5t3JbVsMuC9E5GpSNnBLj2gFoaFEXvW6M2WDesWuLfuSi2gnoqgL2rU",
  "key32": "2ExneDzGsWs92jDJVQSTBjGcbw4JVoqNBc6GTYiL8w138zgwEDT8nVRgbsqUmNRsnVp4GtLe4vYSqc4kVmwJDszn",
  "key33": "5SHUoujLV5zAhF8gyREABKpVQaQ4HBnwnhBVJLNH3wTfyyM7mavB82KD4Um9UXFfJmToSqAdKkk3MGV2Zx16Zspx",
  "key34": "2EP9ALn7sQfeN8C9J2oyxxCe3GUZzu6XeX614nSuz7LA6eW2WVT3eNwiVkoeSX3cdKVbtfEvCtgDoyTes4Kqz9YU",
  "key35": "2xWQ9XW5cy1sXqwsNvfDMJ271ZopC7Dp7tt7ovfFHoGGRsBN6mVkX7RE2dbi8G9UxeK9mDzzPyWU1WVyzSZmBq3d",
  "key36": "4tXYeATt5fRsxBYW6bHPEXMyULYAtMb6xZcz6ysb4E9ebxPo5Bg5ioEM1m1zdAFEbr3d2CKatDJg2A5W6wzBJvLA",
  "key37": "2Atg5S73ozd9khd2bS6Vtfnh1kKBBTP5Pg3F2YVkQUzuA7fWXcXWcsLEmNPSvSctjawbYhW8VakWm2GLEFkJsYDA",
  "key38": "aQ4rB3oCbApin1XHysv2bUSP5QkmzVnQUTQdfeRtRp8uBDYJ78jQxFiVuhgmsdttQfdxfFMQ1rcy36iH2TF4epi",
  "key39": "4y48YVcbuY2DpqRr9o52QymqNsZgc5SxSAM3QAiWamTBcvx9qc9SEdigM5acTLKZSe4Akqa2WGmoeYqTma7JsYbV",
  "key40": "3A8xs1x4kKfSTjdHPnzhMmV3NF7wRzMWofuYo6tUdWDMy6c45QUQyJnbijdPDxsGFgg8wQ5z9XrxXDw879GvGa2E",
  "key41": "62AFBMLNSkENrtCLMD9kMzvKo9G3ArPrbDyoAhNKfmNNaoH2XY3FAZKLfSvCSTQ42Na534MaJ8mxkt52RyXp16WV",
  "key42": "4t3orQyWnW3MqbBatBQKZZER8fMoyuyvdJVmWMSYXdieEv7BXh1JCXpg32YyxiCQQLKBNZHRLPEe3n9PPLyQMuAX",
  "key43": "2725KTW4Pj27XEqKaNVxcbSC1mqP18PQwaP1LyhJume8DSPn9AJCnQk2JTSrfh9GaYmCBxp7U7gtG6gJ7zVfRSj5",
  "key44": "fd96pWLgt3gtYP4PpvfKVyFdwL1eWoiThkg8dMCyVkz7VuUzFr9SyPiXycDurYoC7PfWYZSGgZ4UKn8axCWGTBb",
  "key45": "5zdtqVbbq8dJRejS7CXis2fSeW62W37MjBWWoP4AcX2rx8pyvoDEj7G2poa8DTkup6vnu1Kgvr1JezGRFMZeCUfz"
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
