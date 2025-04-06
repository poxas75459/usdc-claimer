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
    "4nwe1KaDaVd447AjCMztQ7tTeJ13rjWtxdJPohtVVJsYf4TV6iFTNb3DwN1hQqxTTCZsjvVZoqfpaWB6x353iYL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z9RsiEKYxHMjkau8w7JTXKWqsnAADYX4Z5zQkb6Um3S9XorSTdSfN75bgogfqcYgxM16xuYvLi3mGE22RuzTkcG",
  "key1": "5qLgDP6Mh7K1PjaXC1AppmxaA8zQMYxpmpMdhKm1jCYv8qUcgZT2L2arE1HntpBMAeeMwPVW9qhvScj13YGmYgDJ",
  "key2": "5QPvEjKCHu2V5HJPoo3wSheB7PwK87QEWuoXjJTRupTsqV55kPdSNBQULRGyPP9wWWwjV1QkD4A35E4ZLLgEvqNk",
  "key3": "3M9h96twdzZnj3JaeHPpGxXWoncLQT3kJjDFtW2XRx44SCjqPrpCX6b8LYiPrXmk4Hh3fxAYwvgdbzDDrK4iRPd8",
  "key4": "4FBdMQgvuALdkZ4y53xos2MhApVLh72cBHrMZ9NPwwm7byY1zRGz3rwhu6Z2XtdPD4C8VPcroWciPtV2Cq8Na2nZ",
  "key5": "2GmX5ftryugB6vo3LK2QLqtox1cbeAFKeiessBUHteAzNrCppaeubnCW2KBDcSf1NnB5D8G29vBK7WGxR3D5CbFt",
  "key6": "42KPoDBzcqNsTaJxuQvsi2dtaPADVDo9JdEbjWyfPo1MpXDFVzW7gpDFJw5agd8yyBQQ9rc4fNgmnq5nrwzpdDzg",
  "key7": "4mhBoj3ZePESdvLkKUYmtjNm5e7cNde7niKamr6ZaCnwq1aHbdAA37P2niiwhUyEEk3HJLUd7BghoyRyVzajZq1s",
  "key8": "RktNNArX6D7CHxYLTRdhJG99Hs6BUptoXU5h12NxT12KXaCZZPM645aKuK9vKwxodnwcYYfTc8hCuzT3W1RtGw1",
  "key9": "5pgMuskQUr4pkTtwUEL3Xtzsk2SBu7kBhkyi6HvX57ZZmJKgVeZ5ZcFxMgFtBFNghiGyeVZJjbJCgmxpteYMWwu8",
  "key10": "2LZaYxohXj9xwFyr1whrrgzFjYp5JApao7a3CcgG1w9joMFZtHpG2inWuEDDmf4LU8smo4J5rZZk7DPP65ahQvgf",
  "key11": "3RkZfnDbJ2TyxLSQbRvjW2ZV3dej4FCsHhxSk6twpDc85AYWdTzfidf9f3GQBbiHzZGYKkXGy7GSjdC6ALksgAQA",
  "key12": "REGz7fTN6xtH8JUu2524A5tQHKJHRiXvme7kD5YYJLpjGKSqHxStmyVwVPjHJmu75fFGwVApDLPU2EdH98haYSW",
  "key13": "itE85ckq9Aq9ZXFmgUdMkng4kTEieB2BUz3VuT3gUW1832jh1Vnhz3NZ7r1xy2m3TdNoCcBrP2qV8QBwfehjb52",
  "key14": "3YzHabuz8dDS8daL7ZPyg4hULHakC2DmmvcK1Fa4DMNuQQXygraA64K6yHNAHpBTgsPRhv9nKtcVHL7nRufADCkr",
  "key15": "3bLkZyckN32JxgJsGgkPZNSAJxY7X14Sr8uLdwZATN9iN8ADyS5diWBySQqTDZkkz9kCPePwq9WKkMfPRd9YPSqr",
  "key16": "Uf6jNrUrYx4k2vYdmZHRqVXJTzVmHAwoZjd4Yb81KBN81soVQfXLWNkt7YR8jknQJshJExLmpcTtZHjyjXsSLPe",
  "key17": "5kqiYuc2CmQbniXLcUZm7FQgMZAkPogY1TA3AyFJU6JaDL77fTUFe2PbX6ApP4Pwc1DuHTGAzAq3nrC2sjjKYHwq",
  "key18": "39bZe8x2at9SmQftg7mAUtovQGc9DC5DkGfXo4Vcmgy482onAhvCuQnPU7AYHeZGoxPoUmadKHe33uqjQ6ABLYqj",
  "key19": "fYEQmwUtQVVnSLaPu4P9we5Gi6X2EFtQYygQ5XRgfnwNJJUMpJDjGAMvPWWWbvBuycokoY2EfgWAkfz2q3VXoYb",
  "key20": "44PJhijsMz8zSZySeMrwL2XfEoqp2yhbzW3nhMFrXoRp1T6sZeiwRjRZF48XjWCUD7F9ZVSKm7i6YAdNqxanuAQF",
  "key21": "4gReLsZf3TgJa4MTKfuVE3cDxd9V8BdbJHrRgABavWu1P9bCsKEwgBRrXHSS1Q75euKbuhrNfHsvKresP1ghJ1C6",
  "key22": "3N9TnwVNtzgHPzVaRZJLn517oY4fGymSWpod93yVkSpQLrAhWoVbVa7QnKqxaieYVgdPx5sRSiJUxDL1nZkX2eES",
  "key23": "p9YKRBkhLvzhsnv6BYorThR3SPnNGt5ziiGwweU6jcHpARhYMRgCL3xrgkcyZay3axXhEeDoXnz5Yfh3tNXVKzF",
  "key24": "5P9ovJBu6KqFaMWbJEcYnRS95ZFove81Sd9tXjh8RvhhU33bzhSBpQ9QvJXwjxCJzygUEZfB2rptfDBnbgWSvif8",
  "key25": "4m1ctkU399VuwU93925eKtuGQkubV4NMHkBwRzQ4fSzBZCYi2VZGyXSnaNX2jsaVt71E3q8fZ5p1ESda22YcYYVW",
  "key26": "5bf31GrRz4qF9GV6uGWL1Rjcafbw5Wyb9sR9jsf8QqdwmnL3GfRrRQjpFcWkpreyK9FiCgQvJ3LwTWbfc9cP4qcR",
  "key27": "67pU9ofFtZdeRZoi32MHYkTzp7K2f4eSYQpxA1Y7i7EzrqZ6V2zyKdtkxG83XcJyuVPa59tkQizHarypRw2iQ8Lm",
  "key28": "38tZrKLHpJGgscRBrXYzWn1AyGEQ3x2v1sTRidA5pMvxubVh3or9r1d3ExXfhs48F9G82CdjJuPXoKcmtjZs9vPS",
  "key29": "3BuWrCQ6VuNtho5FoSfiaTFY6tSQ6q7Mxdmwhch1W51gXPC6a3K2dykfzkQ1iLuyyEwTcUFYZKYkaGpKq356DWMu",
  "key30": "3qVKuexhjhM5JeseaQBPAQPBfpAHjyQHMEdmLpkL4WDXFsKcXkLQSKwHfwABMWWb9irM3DJtNCDwbnTJGKHSwtaC",
  "key31": "eMvQnEXbekmF7JRaKRiHD2kQxwQKEdM2EkYTiiFSAsnSNbqM7PTciQV8RG8njPaapHgpcy5M9pjNNb21eW5UNE5",
  "key32": "4SEn8vnMQbaovs5YUpCNngBzhcE3zdyuiGvJg9Mgoq2xyPyEmtXLQ9yMETXRSpYoc2ouDzfUQp3KdXFcRzfNtXtz",
  "key33": "3PQVA9epmBtGrJdu1JsQTYz5mv9q2Mx8DFbbZQzxvf3LpfxFGGovGjrJibabTR3P6vjZx4fyykByM9hkqfxgFbVV",
  "key34": "5jQ2AxxwsFuLjqXXVT1LeGXXz89miP8BPKVqNiDiidfeF9T9BTgxnzz31e1UpUAJLi2YFmUg7uSP6c1iZMhW22aG",
  "key35": "2ziqq5oiRwSjBZkSpzNaEaDVA99nQpgkYTgQPpA1CxuQLu8Zwrkq4Yr3TPfUQ9qYvpkmp2kiRDbH2Gcc7ig2CPX",
  "key36": "NZEtizFxdRSvgRxkScjjho1W15CR1YQQr3GwYDurrGdBJuTv4k3DSEaapi4UVUTU6tgem6n7S1xsTDiikd3qJ5Q",
  "key37": "24QpBTZCXoxcxncXfxY1BbBo6qshvAnKKC5dNY8ngKcYp6NdNWazXDtTKesqT1W2ZNYtuScUzkqNxs61J6NhwdqQ",
  "key38": "FsGYFs5DQUCzALVnjL1btbzjUvWrJrvcPQASTCTLktZstZ8i1i2hxR4nRzpqaT3Po5WsDbAfuGuSCYWF75FW4sc",
  "key39": "64iwMDQPPCbVX3mEB6bZYE7f7WMBujgPQFgVcszgZiKJaE6KfZikviw1QETYHHqepdka6dKZ1rhzbMviHkPFFuY6",
  "key40": "4cvpErk52ykUTfQp1Ks4W26U4ZepmSULHjpqFssNXx7sEf4n5tr7Q856mmkueHYYdzuo6W9gEfcJTTsNH4AzniyG",
  "key41": "4jmnBXjeiQLNTWGnQeyadCboqNEXuV6hgifmXWiqNyF9XwwmC93CQ3omYzzxXMZ3qsB7S7UsARvoP4GMwEzva44"
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
