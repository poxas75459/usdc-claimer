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
    "33kW95joWpBkcxJCGQTaCAWgT5Q4iEGDRLJjUoG8T4BnEUm8eBCPrqsj7v4PZrLZVyka2zyAsU17VQsb5NECZPuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iaVQsJ72Mva4kG9nVQka46qzj7aJnQhxNp6q5JbbdnKgZftwNZxbgibhBQDRqQw3ZVCuKVSmou1JdVbSPLUmiE7",
  "key1": "3NYTedcXzLky6gPcxosRHgEwLW3n6y93iUwtbghRrBrDrXvYfzpp6ZKTVcSBAg6HoRzekjY1u2wFPuyo1Y7Ruw3d",
  "key2": "41seJAN1JJQ6T5eY3Y1CtnEdYQe4DgdCYCehydUZGQSgrHnyLsdFfXEB8FM76sMyp9igu8e575HPXRke7rux1kyD",
  "key3": "JrsEFuBhEJeVNvuxbtto7wSsoKgL4kKzPUUYtZbPnUeJTKvv335Rnxk7Rn7uJcqjUatLFxGe9coZK1kTkGUEakC",
  "key4": "4iLKZAGbtpMd29JdVYFKjgwA2p7eCTRKESevaypzE5p58PaQj2XS4h5MjUzhN37r5hQv8TJFvq6STm1zAmQPKmPS",
  "key5": "9ERceL5j796srrnb91s9JPsfQ9KNccF2CYgitcZZQ1tSayDZyM9rWR4sRVibhSWcfoDoRQcFUDdnSMpaEJU8xvN",
  "key6": "5fu6NmgmGif7pC2NNfEXao537pC6K8SaREVA1zAXvNPEZjkKSHGkTiTrvifE6ymvjAfV4XbZzupoUUxinouX696W",
  "key7": "4gcYe1Pthx3bpN5eZi13j2GAggtTVDWd2RRYSdrNRbi93rqm6FmBJm83jiWTCZuLxqmbP2sZvyx2buxw7AqgV6bR",
  "key8": "2n4fUc98tyB16M6Jtecp2sGsR4N1gY9hZqKhcX5fezcshVVMinEMXex8imPSZQXA3BJQxeaD9ddLfebSnGQc7bBT",
  "key9": "4xjYE5FAaxd1eKFK2cF5ASYmHfGcQDoHzTgAenWSh7GV4yReqmAXuXGcCCpv3L7yaRcoGMSWSBAa49wG3TnhpJTi",
  "key10": "2x16LPWyu3KdH4X9ZbpYFF29NYJyMegGgpXhMywEqnRGp86UZNqswcAwJZ7m7XPNgtU5SiKmr6qbmWVau91MS1T4",
  "key11": "4iDXL2Qj1LCztJLFUxsVbbwTgAeKbJX9gZhL7QBjt39tcDEtfJwec7asVKjjzoW7QLGTtSyKnUDU34EETCRsHEX2",
  "key12": "bAvmDAheqJpMx3Y1zqCJhqxbzHtdyJFAUEG4xJ3WQsKCfSx1XodQF7miBoBDrD9LBc4VRkrBzmK8sM3K5SMAKtW",
  "key13": "4wk62aQWWmcLxNwfTw5AGz3jPdc4hgCRfjrRURZN55jAoZVDVm6xP4syGBq5YjPT4hcVXzufkMo2hXLg6pM6yGQn",
  "key14": "ALG2M8uANLNYE1z2No2ztJqLPwNEgNFrmgCPFgFS19jhaYUZLPJMghm5r2WFtoqH4vN6eXMjLJz8m5DeLVxvYaU",
  "key15": "4tVtUSu73rmjgvHkG4cX2yL17XHkqsTaNrH8adTrFx4HTr1hufktCPweYPg6h74SV6bx5poZmV9g2n1M7dBQgpMh",
  "key16": "RqRs2XzhTP74ajWy52vmhiMpV4t5nbzmBsVXkCkVN5mh2bjtPACuPBsf5oepFxRw8jYFoBdNKCHRr3Ym7xkFQKh",
  "key17": "2iZDDNgStyHEozLdAhouzzDNKu8PquTDLNUG7jfqV5cxmpwdpjh2QePrQrdfKoaoGEgswDZ9xaUdwKMkEau8FLVW",
  "key18": "36C2TDA2YGUvpRcAeeztrLLxWxWKZm1uKH1NJF8on555FmZECqWCL653LMgzaSdVL8icUgrtnVsa3wSbBg6DSrDm",
  "key19": "5hsS1ug3H7Zaf5NYGTmS9c3MwEKr168VYeRVVyXovTAJuv3VcKvdTA5pSyhr6ZD5zZ3YA2ZVL89zr5LGAMRMt9Qc",
  "key20": "o2SNZCTMBhzRK4HHf4qK5CYvt4fXxpnFxCubGXRCLSPFGzwr1k2Dm21u3AcVjyyLoBBKufRDGfQZqEBeJRtRprK",
  "key21": "3wyKMCCwR2zSaD1GNPTsCstK5AzFQ1i8Lbe5iAXaNN7zfk9Nn3vUFSYNiWrJaK2awzGH8TcDva6tuLzbNdvo6kDx",
  "key22": "3NTpkfKjTv8cgudAY8fUsvHeBtuCsRfcHjzfVhkfy7UEQ6TE8Jm7V9PTgjq3AjXYPc6YBd5LeXqAykp6CrjKC4KE",
  "key23": "53tL4H7dXWCgmr6qZh5yKbX47WQQ1waW7iSqwbuXsmaLs3RuUz9wSjw8L5dgA5Cfo3JdSejPwpasHysag6UAY69T",
  "key24": "5BSnQ7eHyYtBnHw6auZhaHbFXmRWour1uiVyoiQGqMBBi6GxHFxn47xnYm97REKP8cGoeqt4ARLvMsPe6ceuruZp",
  "key25": "5BjporriYpoYZTHRvc11ZcFG72UA5xLqXXgakw8e3PzJCBEX35Km7vVpwaJZzntE1THmAzmkf9RTMBU1y5wPn59",
  "key26": "4PWKhNmkBNQsNCFQF58nGoubXX4X7AdLwXs9xwMxbN6JMoWoLxUkzuqNE8dvnruysHwgZR6qYssNbNK7wTSPsNof",
  "key27": "45xChz49sMvZUSQUFDizfYbNYdTxK6kBP3zDZYiCwS4ZfFHzh4JpSR1fo2wHAgWj5Zu1wZTffxcPrptWeqyxpaW4",
  "key28": "2TmrQKh7bS1YaHe2VrQqcmYR8kEzdbePg64JPw6Pd2G1eUuz954qELbQxdhMNUccVnvibCr251UcX78waq19XzZc",
  "key29": "BNx1xUCeLRguDCrBt1nj7pqjSiKQcMbhcVTt775nCNYyLWjkeSnSqssMRtHqeCGgLbzPXnE6bn1R8zUrfJbE8RB",
  "key30": "67WJNG1yfEA1iTX8wErEfG2GsArCDY7LxsNBzuyVjJFRLP1ggW7QpjjzxVB6GoYL3KGVXYY3GVPqeRL6nGgR83GF",
  "key31": "4YXpPRHYo8JTzEg5x4ujFaycH5c13BAtjcxyr52iftdZbuqxkayjA54AXzVJYjhs9bV1rWgxXW3dk2yvBDHKWXvx",
  "key32": "3BMUFezwE24ReCtUTioRJGGhVjdyLF1nuD3PgnsHLyDay1kJVZ5e8kMa4npVcbD3LzVoSTcC2SgJxo7tcWdb1jBK",
  "key33": "3oiz5hRwWJrtm7UcMNam1VFYsPivj1KLyqA5S9dx5Eo8XFfnetaTQ6P6a5ZVPdDYuvv69njohYA63o1wSLFWynn4"
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
