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
    "618y4o76YgM3bX9DSdeyDayyHSruipMam2H4xFZoAbmc5ZTjtLXE3BiUAa7WxRfTBT1Q6dBp4wQ579dai8NhUvUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqYyFJCa5TdTNnu4QyfDWJvd76NA9gi8sGDCsztNHKUdirj7cc5rjftXFYw3J36MVCUofYByRSqbPmUBgoeyaeJ",
  "key1": "wQfsoizA3HKdxnk3HkykqDj8JvEbJFFFa8ArmEZ3GtV686JHMQmiKXEYat6RUR6uZCAv77CLL72Y5vjyKbquQUr",
  "key2": "2t2np2gMc83JK4TxsiKf8DMwYdrCQpQuqdRQXQBef2R1uP9c1jPsfPe6JvaB2LZHy3VKzJhRM5tZ1XT4AfJssz73",
  "key3": "5yurgYkbEGaPj3mQpmVqxxkVgAhptwGLPs4TnUuMSEwFYTQSkCkg92XqSt6W46vavMaXyEcA4ZztXp9tQ47sRh3R",
  "key4": "4KvD3So1W25SkvKtPk92KiDis7tz43drmHefLeAT4ZU8SxvuGbgXH8wbpdqMne6U5vSNoc1kqbeCV8yC8H69kseE",
  "key5": "3bti6cdHaEMkkaYjoHfUKaBZSL2URsDxF9q7PU4obPZ1wiAjM8MYAkXHE622ss8j8opJ4BiLKQwZNtMiugSZmcPt",
  "key6": "38H2rHU8sytmXXFnkabx2gdhT5SoVK78TFDaFqAYDA4J6UTFyD45FdxyfKKbo2Xj7BFmGKRdi3Z3w8T38rv8ikHR",
  "key7": "3VmfL22Y7anoeikNrKoZysBHHyoQ9ff4LtWh8RCq4pw6yZ4VmR4vBvAyM82soH5KLY7hhLDxWXP3JnxJ4JZd1Xxq",
  "key8": "5bsdFDRZb9o7Z9e9Cik5o3vLM7wFQoxsb5HsNqE2z2thUZM9YTDzotY2FgHjUDWU8YaHuZkAkn2zgx33uHonPKNG",
  "key9": "53oqs97beWbnoaSUtbdTT7N58BC9ysbiW5CUo9cU7xHazCKLGDNVLv8sLh8RDZrGEzFacthxUT9qniGn9MUcp4mE",
  "key10": "XhnR8iVt9vB2NHW7tjT7ds7qyR41hnEntAYxXYtaNxJQUQeszi6zkR3cuEwwaJJt5VFRR4SokJTXLGtssq875Ex",
  "key11": "2jrepHsLnwpsQrFKrrhVXJq6fNe2zKyJMSDQsdVnX4wXv572fgyfrFi4aLHGm3nSidZEdaLLk8GzqMb1HSEizzkT",
  "key12": "5Z4kFb4eceCsEj1Kzofk7Rr4R8gcJUoAYuq7anmYFr2GRUeBBPqQXKgWwpzeoF6zkbrkbXVfinmrQ3zh228RLRWj",
  "key13": "3y25vnyge9i9MDMMPAqEZURYrBcmSEeN2tqERgAERy5mtKw977oxcUkdj4QyP2vi2wFGTUW8vzepx94xFGbK1XHj",
  "key14": "56F1vDSwrsPbNtoijfMEZobnX8Zg5purXBkVcnsz2G36WzQPTzhXCwabMJqNf3FztX32oN2aabsnnpsYESEAj7vn",
  "key15": "Jf7e9XArJh9mqmh6XKSFaQLDHU7xE1GGwRh2wNuJnCDxG63xnnfVunu6XBmHKbYiJcPSU1uWeXrCB4FFb9vbEKW",
  "key16": "4zerfPCQ7GrTDD2rF7nsAcvquwFr5PT6jcRdrvjy37zEL1J3m9riRcv46Sy91gU6nigQybJqMoZHSC58bd4unn5G",
  "key17": "2mum95gA32S5hLLvd5DJduvrWxwa95g81iSM9cSabKqBSRrznVBmqByZgD3ptFiFTavkXYxA6MmTVbDaniXKnztX",
  "key18": "44kiDN1gsGrDRXi4rvkmjbqLkrZLFZr9MA4Bfyonm76x1xhEvhHvGL9Aoii8zvTgsUjThCDStrmrd55RhWJNVuZq",
  "key19": "4uKXMPa7jpwZaSGEnV7LeRDsJKHFxwzPhsjAiJKtPtXWgSguL1SNLsE2MRt1aKRcf1ronkP3jgGgi1ZehfZCjmB5",
  "key20": "2rdzahi73pvox8RDP1zchyQ3Tv6BTyBpFWRJh1qqVnmXPU534LCwumThdQujTd9B9hDPrQmQEEXzMMeXndbU1rDe",
  "key21": "3nGKRpRDhBYmUji57HPp6nwN1JxwszHHQUAFdLU79GwCzkpNJe2hjp45z6WU3MkMxcpsuHgRHoiSBesnpCCQKgTn",
  "key22": "qtBZaZXu9RUrKEYpfYgKoE5RXHwxR2qAYCFaQ82NYm7jhtc8xLcRm3TMGf4SzNetGLtBb6FkwWw1F12engZenvr",
  "key23": "5uhniUG8SBawLC5uM2c1wJirHzCJpDBAGpCAHsqBzF8oFNodT9NYfHKd8HWhzdbJRbVGgPeCfkuGW9x4w7mdCgrj",
  "key24": "2PHwhPoWrkSvRpQPn5DQvMDE8uVMDxzRE5dKBoehosvtBzo2yWVzX8gynavPqSoKVUmUKzZDC6WnG1QQQNpbbWHY",
  "key25": "4C46uvj4rTb9j3vSHNtkmu2DoSW4MwbFr5gakp2gcV789YW8GEZAPxgAbkA8cUYjn1tFcffaj8TVpBEKpibXorf3",
  "key26": "56nPW9tPRbc6wqBNTMc9dUuMUtv6zXEvoZeAxjcMa1Ai73XJj6QB51Ey1CCACA5gdN8yBJ5jWkU721gz6pkzQXnv",
  "key27": "62wQ73cyVq629iPJNLvRfTtp2ia6UafkGKzsX3PSu3Bo4h5heRTK7zSYiGcx6x1NdVnaGGGgquFDgtdey8kMFnoP",
  "key28": "a51RPAnNYCcF7i79AuZc7ZASdTafHRrbnE82ppZkPjZ9vtCy9J8Kg7vrRrXrg9A3egaQWvTJKw3WZjGhQscS9sV",
  "key29": "5iScwfF96ztgaghMe6W6yUgfruq4VFiH6nx5gMPZ4rhBmtDPx4ja11bcVje9b4qVL2Bv5ziXpn2kcKwnCQZRj1hJ",
  "key30": "4d5uQmwbcVR68SnfGcVePZEKH1JeSUnp2ggoK9BSugpM9HBcv28LwgMGnqNH5FsGjPwHWYzEGCajsqSVY9ZTG53Y",
  "key31": "3mSdBCiRx9mYRFMmXGN8fm8A5bqX5qFdYxGftg63tz7HbCVJsFSQvh5z4NJeWAW2AQRzwR2j5SE2n6gydbGxgyvx",
  "key32": "pcpniHMw2tf871LhY6BAFA91hGRgPFL8BsGY2GgF3rHoScbSxoXSvXEG4eHNWvFHPYoZrpe17d7hKMirnaaGJmk",
  "key33": "3RMci7GUR2BAJoLpFxEgbsHPQ9ioWcEjmziwU1UTnS2vFQwAznjDLTmzaJYFkvNLaFzfEKLCmx2QsLoULkWJEUeU",
  "key34": "57cn7NSFyEqpQbbNoT2awZDfoLuWJP5UUMnAxV17Czb8LtPkA85HqgUMYVNsWLDKQ94of25LDzXBSmDhwdA1aYAQ",
  "key35": "2HP31s9wcFdYdZaDDSPsiWG2s7j7JehSM5fEZ7BnrXwiAJgAsBhAZd8VsXb8SU4AFQttrsRChKoQSeE5JhrzazK2",
  "key36": "2CJ8vCP41gsDu4WkmC65SHVRhdTsARwLx2DFfgrZbYwTeestoZB66oAGq4PYCa8TrkpX61qCmCxDUj6e4jr5Kfm6",
  "key37": "H28FFYw1ybfVbVYjn9cKNZj8wg7kqKRUsFtRj93WxSLzZm48ZsA2aksmkkKE85zHE5wRpDwthmf1y3nonkkpwQH",
  "key38": "5kWwTowiubtMNPVbwdfnWqSKXpiQMV9MToqMGs5R8rdVBsjagLKqEoGLnPf5CH8eANS4PLacYZMLg1ZeLjUizGz9",
  "key39": "2fyXk43f1WgJM26fCM9FKmgWxw9BehXtG7qrUbvtRJnGRQwaEym6ZpaXWFucqhKaeqxp3aowyKhYo3ccBZqqPQng",
  "key40": "2aKeU8ytTDfw3Kp254NdxAcB6giao8isKzrUhdAq9tep6CDZJ37KawRj47HC81MpBPyeii2JDFQMwdZCCM9PYagR",
  "key41": "XGTrUqirQnLnQoKtgqVNGCqVh6Fezbzy2ikkefFu4w6tGsheXyfBxJArgGVwZ4HPNtfhpUJ45a6EwbEuuNVMWVn",
  "key42": "5AXHrXM4HskjqtkhNvRtfPDXkcfC49dAiiR5L36ph9HAWzFbuRxoA9ns6mtjWEidgEeaCu5kzNgmZrEMDq8c7tTp",
  "key43": "4nWiHzrbxWS3xDvo8BZZfdszEGoVSzhVVTKZUEWXtqBWoJ5Tb32W29acuYq9jmLpuyzGJ6Jj99M7fYXwpA9gNskx",
  "key44": "4HggKK9dyh2S44MqcczF2ntLRfxaDtctqXvkKKPfggYdwdwK4nrjhme4VgxgS5SYNG5wAjzPmkoxoAVvitF4sLy2",
  "key45": "cT6jBYCp65fxxVWqVUetEftkbwC3oZNoXRaoMpa5ZYm6Tj8S7rqXTRWk86vgiXzWeEoz87MKFUwSuFaqzp64JdU",
  "key46": "5UFpzmHBcqX7RsoPQSXoaZd6wFtHaXXwyXi2ZzC13qFmyV5RqQsWGgQ7nn4oJvqNMErjvi5SaWvb18W5ELPQkp71"
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
