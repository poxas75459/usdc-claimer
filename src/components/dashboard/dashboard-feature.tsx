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
    "4zcHSgiv32n5e2Ne7RiXhmEMpfRvSz5uDxiFDc88mzWakPg8Rg2a63B2pmTGthFWEz9T7ZWvx2HFHF75usPd6ZmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bpdB91VcJP8dqdhvJxrG2KhsoHqH2aMKcShtk1TSsDuFy2SpDf7ZY4PSr3SGRxtDb5zrpZq2qbB8dsg7nL8sHgB",
  "key1": "5iUrs42b988dpyygm5FtyzcJYVc3TzKK675irwHk8U8r1gK9GwLq4A1LNicHiC5QrzrxYhQRx8ejmTaRHmnxCAk2",
  "key2": "5x62s4nXTSbBwzhHJjVf8kpPEkseX11KuA82QBU4VCvCrGhCsJMb16a9uAWRKc65ESaBVdaZjTNCrK8hbcEXgEoa",
  "key3": "3fQ5dw6ocVNQ5T3DJjdrT2WfJUR5gvuxPsMsjePMLfVBbGJrpvdnMcFZLnrrm9j8TH2dy4YeDc6zejc9xmqkMobh",
  "key4": "rKddyd3ijEEBT1f2YwrA8DhJZRGsChwzJ5Z15WtBGv1YsVZsa4n2Xr3wKBheu3TnbBQ9qgHKWZJ3qDo3FtSiH4C",
  "key5": "2YKCKohW3fmLydGMKaTrS2j5QTVd8pHsCmKqB18w7R2VXFD1L6f8Kv7UDEpW3SnoJ2zexxw59NYXcHeWibvDxy68",
  "key6": "2KyUYarjXFG6vYATt4RuKhwCrPo7QgSpictBy1dUjBUuc2cAnoRtdypHrAqWYBi8Jh45NeF5PDfbFGSWBh9GpFG6",
  "key7": "5CXk9RVsW2mu8L9Cnc1HTKNHve1YJk8hxFmQhLFRJxR9DSyRYSAff8AZ829To2N8VHDhm4S2zRbCFQwHHWrR6RMZ",
  "key8": "59B8HWEbaL51KFAwqw7R8bE5pqApk2HrJtyymv5aM6nEdLd4JCbtQBmVKyp3jzns3N1LdhqxjFzBgtVEce94VHf4",
  "key9": "5oSuMem61WXonrS6tiKYqBVssaygyiKu41CvbkbcgmHpNY3yu2qjSxps1WZL8NoxWXXP4di6jAKEMrsX8UdMC6XA",
  "key10": "48a3q2FhfMLPS8vFFYaY3WGhEeKMGYugmDjHi222RGMf5kik9uxqqDe46VGKTbGfM24n1xh7zbscCg3hc2xH8P1h",
  "key11": "4CQxwy19WYoayFb3nYa9TKPhiK4sBs6hbFq5moYGCCbEaXBtrGa5w3o9LXzfvs8BWZoj8rsxnXYkRm1Y6KXgeGhH",
  "key12": "33L343Wgsvm1EUHCqo4EbXccXU6ba9RgtuWaTSZ6yYkfyBpqkjzUFKsv382fT76QPEVAAGtdHcn8HXSRxCdd3ETs",
  "key13": "2VxhWMvmviWFuDTsvFsmETKLtdj1vzCFZNBB17i6mY7ALJCj43aiAZtPATxNEWgoEUQMEQLnvLAN6Y7AGhQWgXVx",
  "key14": "2yJVgHg4zRE3wJbS42VGsbbqZMZjaVkGxo9tmQ8ieVykspkNqqWj9ZKGAmA2PByxWRg3zDYLKJGqk5PKgjSeGEuX",
  "key15": "4mRYrBSuK2q4GHvKbZ92avgToNXDXTz2VhNsB1Ho2KtsNas6mpQsuuWqhPQ6vGQBBEhvCzAdcXxYHnDSbYiUgFDN",
  "key16": "3wbAiwUfHP7ZMWsVq6ghDgzLpbasFK3pkkNrejMEuYiTVfkUCwXNuQ3JFkEVBGULLdma9NktXBt4BnW36WK3J6CQ",
  "key17": "2Svc5WpPAZ2LFpJn8Vt5ZEkXSHtMzLRX86sRySgPDBQULbjtj6cz2y8NR6JCDwyZ4iBGeqEgYrjki9QEh792FzQV",
  "key18": "5NCM3QsRUoHTFBBoaySsdbo1886b5RH1qjzddeEpvcFBuDkjDrZpNZHSg99vLoxtWPqNbWVxb9a7opUdRnc9Tu8p",
  "key19": "3i1QF2KrqUsH6gtWa2kC3uJcGbAS2LCqNhyYuoSWWhRtGyLp8VsJoZRgBREqok4HyWxkNzwWw1Yp3S9W1DkMiMtE",
  "key20": "RTt1T58w73R3Ss5TZGvJvPkkPvepEi8Ri6ZhrhsYLPRypxFrPhHPgaB15YJDBwRVU1YqM6ty3oYeqCHZiRPSDjd",
  "key21": "3ehqvwya4jkKtnnCNvKZ2w7vekrgyVQPYmFP6Lyck4K83ixyLNVcGqZbVXNX5GqVeLo4g2U6Wx1Ff9Qj1zMLx7zb",
  "key22": "5wiRhvj1TnvsLEwAprWqEi3yVfv75Ec5w1TakuH95JJQJqvzpCYWzNfAoErb2kxmzztEEdo15WrQYb7FTKfqHjJw",
  "key23": "1NKwAV1aVmMvQyETTLxQxAhgwJiyiX4YrxhH9Ls5HU6xQhN2W3DDwGg3PDrFXAUW6vQhk8DmmNnZReEhbAxERZB",
  "key24": "WKXVc1Ra5t9GWqpM5ZhM7Q9LMUnrb2SLvbLUM9PzwkRWNnd4eYu4btYaE3H75srHSbspwdCagbcsrChe4u3sKEt",
  "key25": "3W2eB2fsbG6ezhjVJEBheZd25FsLmoAtfvQ5jXPFx3gX5nfXpaVngSmxBh2wS91kFJ1qQmPUhmPswfcmFuQ9D8He",
  "key26": "3o4KnrgVZBGhnEvFrrrQFCmmcUYD5JC3kaGgWhDfeyBj5eyKLo8B83KnKZ4EK4ijhvz5KYysgzyGXCZrggy5BPon",
  "key27": "3gKcsVXTvvfYPnJfghjuZnW7TAucJQ5cfsrNqeHzRJ6ga3d8ZYHpJ2ChPVhmPT2aqQwoHvCdy6nXT5FA4xP8w7sS",
  "key28": "5R6Pc3LznhMPWWUaYWUbsHEQJwZErzj4jnPZA1d9g7nGreooYHmvWKi8SPSurqSWEB89JWHEh27r3AmtfrgLfsNK",
  "key29": "5T5YMPEgPBjSoJDUxycnQcBCUFCHwuRtwNoPg4WU7qd6FkczT5jTxEhnftr75kxjV7gshMYb6NC9dFtXyXYUcbkn",
  "key30": "4U3cmVUQUcEavWNjpze6sQ7fARcDVEUHELL2ywkfVRBGZrPf2JsXFtkWzpE8P1tPUui9Vn5FC1V42Vo2TnMZQtuT",
  "key31": "57icNqtSt6HCpgxnrDDGMxwfsUGTdipz5bgLkXv7DJc7g1KUKm7gA4xdFCmcFrgVbySgyzWckKBgN4wkmy2WiSMd",
  "key32": "3dTXgEPhmvcaYRr1YSzUhiEeEC84ZbdFtDNF1zBcNGvVG7GXHq2PXTt63kQQvGHQv4FWk57wFTkzpJoSwvdxNwJ7",
  "key33": "2KYaAnnZkUfrNLFx2UUKV5ME6WPmNrExdqKrakABKiiKwH6LUsEpz99y4MfoycdbEze6L6cpyha7DeTNqEUNswV",
  "key34": "5GzvB9zXuMY9Bia138N4Tn9sfzH8nYrKD5TCaTbhcU2pRPWRnGeDZWoGCVGozNJVMovjYCguBWEYY9x12yUvWdPh",
  "key35": "2bWpvsK2HM45bRiEgKQstHshs3yYbJp9u4DTYRh8FBUGQLEXr9dZXjyoyfyWoNN9mJEioDnsv5TyQQTpBnzDGSAe",
  "key36": "53oX9jLQbj7BxQkcK9yeUmMsVQA1J9S9nEorvpojCAbYWjNGt3jmsT1EiqPp5mEy3FVwfQt6K4a1bhPSjgv7y5Gi",
  "key37": "3TnMqCrvDEesDTGT3AtCQW5KkFiAEHW8u9yyWA6XTKaeDnk6iTeCsCv5J8rCWP37sDAhi8TAFnvFnCVxdrHG73kU",
  "key38": "GY8VcQdMp3nPNT7zBdfasAntEWYunEaf3pcyuxNKQz4aT24KKWWnSWXykxCR8ZmyX4RWnL8Cj7MgBynvE9YGvxX"
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
