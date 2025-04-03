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
    "5xNV1KJMCVw8rfaiZYN5nN89Zkc5U8B1pYffwYUCXpHa3ZGd3UTN6UfMuKW2yMwPxjo9AjowfKUph1uNtaLrqmcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLVr8voDmnA42Yiim9uuKPj63xCKEkKvVj7odbRcUrNu89ehBXBjxAcQEPJE6Ctx13Fet8YWMR7Yza1JgadL6ch",
  "key1": "zzxknhjcF3dh9TaVekki3NoEWkBbJSay18nVPtRDKBK4oA8Nhj8Vip8oBnNZHpdH4VQeVPUytuaiLTGxoXhNpQa",
  "key2": "TJvEigbhDNnQyovkTx4aX9b5ZdsHBApxeBAyAFjFPjckEAwmsSVrsvHJrVbjQEo4ZMPL24Dhs4xFXM9uqXRwpTd",
  "key3": "4uNmjAWHTdAgNEdQRistH5ZWgcRvsBEYyrGfUBLYFQaHUU7Y6o9j8TxsgugmKv3CU22CeoLtwJBJmq1xgs9rGc88",
  "key4": "28e3eVWMU5EWkA4rFo5UaWyK2yxztE3nySsjkgwUvQwps79m3y2jfDYGFqY6umFR13KYtyk1xXTru9fZUAUgkFmF",
  "key5": "5vKPkx5QG7qR8iuxs5AZHZVoLzxA6uckSsjF78y53nSw2mWLnJWr1Rv1eztzrd6kb1RehxpTU1CQMecTuASsvtg1",
  "key6": "4rJQRsfPjUPKN5QsE2FD9rNz8cwxVQkZNcBsgeHzg8JXAUFdv8JV7RUZLTupnF8zzjbBYu5DghCUQb5ePiuSARD8",
  "key7": "W2enVieUjwPdkT56kKaVxzFcuCdxoBddVaCgoJH74vH7JYEsx2b3PpfjtULpXjKzMA14kT3oSMY3Gbv1RHJCQMo",
  "key8": "5NnqaVy5hfymqLzHVxUc4RxLg7JEDQWDptkb9nwJrF9X18sDXqaE5D79ev3UFfEEh3xSNoGqnvw1E72xWHkgG1xT",
  "key9": "2RncycsN58W1h4cSdpsnk1T5poDKHaAGvDuCh1yUeEUr398PKHySA7kxDMaQb1hGaB1F9m4SSeSmwWc2sQk333LD",
  "key10": "5mciT1nPL19WmJ8LRUCxNRAbL7Le8QXYD7ivCeEJxp5MR6Wjurbynx29mWN59CpbdxVgjFgosHvGuEFrrUtY5WUh",
  "key11": "Q6kMPECZF1EBbJstP31Dx2zzbDwNPDEEbHVa9gPSnfF7BkNrigBa6w2ekkiyhuY5Ki6AHqQexefZjbVopbXsxZm",
  "key12": "3ZBgTR2HQNtswprAmzMxMSW5BXakQVHvbx6n5ddXxGjcRgmNdfrMtshNmseFhfwMRwby7EUPbV5tkDD9hu6vuzph",
  "key13": "47Dd7XGwRM63icYHdVqH8ej8ZTH5AvPZxNg5fdeNPQJTbor1RVrnGHLcepD1qjGbhcccXx9X7fYXNbiuC8w9pNJt",
  "key14": "wzPWxVJ9MEQYj1YJ6paQiKEwz82t8ZiWYX2CRp1ezjcXL56Yb6dLzgqgogGuRNzuvaGmNHmQGcZ1PgLtBxdfUPj",
  "key15": "5LGvdpptw8ErBggaYbzsvYiMpn7U7bLyWwwiSiGZWs5uPsxy96JhYi6vj3Q7Yn1XYv8wgG4PgqApzgeBFe124g5C",
  "key16": "5TaYEtCiBMM3HS8oJbKxurr4EYDVh7yhbkDKbznBfeDLES6tjP2tC4asxopBpggQERjhDrpKupjeS6kyvdQtYkdt",
  "key17": "2xUM9D6KmNbd81CCFC2irSCTkLLDtaYijQXCqstzswXVmxeDSAiWiMKdbNzPaspuAEzmkSrzZeXNcQecRc3CAgWr",
  "key18": "2G5ScBVYDeLgPtjZtDorQENoqKQaLDoEm5ZkPdX82316EmgAjNMRKYYnhumLDNnrPmnGJsCxdWPzC35cFR3uqVu8",
  "key19": "SFe8LaDw6cwoEF6qLAUSGt1yLsyGhWArfaNXU2QKnjVFL8tVjADY7KY4pw8TkYhHGJUBspMsXbyNuV28cbR6STV",
  "key20": "4RF33warS225fsquSgV8rHcTZ6RgH6auRKJg7oG5ogzgaeFnx1fGYkRjhrfRFd3nTmb9u4okMWektwrFii189HiL",
  "key21": "4q5Fb3f7Qy58xQCjjTeKy4cLBtHbZdUQs3eqgaqq5Vm9qpW2MCE646smNBYJCeMFHw7TbQyd3sQSMRZL5XDE7UvS",
  "key22": "7vpNFS6zEa1xr8NxJZggMhzmSiSua3JDR3hFnGmjifA5UsbqHCrqx3NbyV8QNGi41KhD4DWN1s3szonEKTpW2zR",
  "key23": "3u83L2F4MhtUsNWsbF3MQ6F8MSTn8ofPrKLUyHchP9wuVHryiA15kvNzWwmu9EBXrkJao3GKhrx9h3DaTw3gtMX2",
  "key24": "2E4t9VYuM38rNz4igHnXqyxwPwoguuStrd7tb1ScgZv7A2U25Jys7FXpPk9d3hvRBwcAfDWm5p1qkbRw6rpLzj82",
  "key25": "BmpNqvwSpC5Qe46oBtUAC59tohdjPUvzxuht6z8nwtiUcVXeKyfWgcNQH4kZhvXPpQDLsQaySPY6XFxHahZHQK9",
  "key26": "5zuSp33qKhK9zRv6kweqzCu759NB2DaabawcuZYGqsbuTmWyeU29sQjEmFfsrkEdQ6WMBdcVdTPFAXwkHVuu3upS",
  "key27": "2N2XusFkeeKbHsWQtpgKQvX9PYgohvyvbt39DiVCkq3wYQfqNbHcr8cP6XdNsTYsuqSd8VYXc8AXsRA5aBJgNgJ3",
  "key28": "kfvqEzaNABo5RoABUaGiHDbZwFf1kFRwxSeNx3H7UscaVUDsXekbaDXVeHY32pjBUPjaSWNHH2zgMAzQnna53wz",
  "key29": "5DuM1ydr1HohvvgCQjjos6QrwaCFt68F1KMZApjQQP5LA3Xg1BLjRevu22satZtFMZZks6zSocAQjTWtfXvZq1VV",
  "key30": "58xDJtqFY619LmDnpoZcy9tkZ6hGUzFJzFhSFrGP71AG3exkKg5oR6SeAmeoUAnarDsbcyvZX2KXGBuGVvebcRJW",
  "key31": "5wd5rFcEydSsgVKYR7BAxEUfb9bP4egUSR2mwfESac9QbPWgfeBPscv1JFyQgZ8zAjigFZd7ZLYqjSkekq5D4SbL",
  "key32": "V2wKVX73PmFHbf248qDY5v93jWm2eaXqAkBnMhtq2u45nx18oNTHHbmzfmSCYhSSx6wDsGTVgwyQNnJjK4KZ6L2",
  "key33": "S4bFXbDQbaok4tjchZ7UCmVu1j5tRo7wTzQ3W7JJsLRWZbghgkzk9EJYA7igxuKK6LNBZUM8yPMtdPpbyw1cqoK",
  "key34": "4hz86eNkrNiD8aRqMxV9o1kBzmjLPSfUa9oxbtbSauqGzXUuXtpdWYqKMD2vpLzdEZQz46xsHDwWVCT82M74qKXy",
  "key35": "3kS8Qw2SXqqvdWsWd1KjRhupvLopvGksjEidpvha1oSc9oEJcCUR2GBwwE7GsBfTY1QiArif1vCnmBkk7BakVNqq",
  "key36": "54xA8YGYS7cYMwSKeaSvoYpwi7ov15aPuFYsDyCXcU1aH2NtC5o7BzCKgSpgx8sXW4vuFwZyc29uUBqnF2nammWk",
  "key37": "2Cd7jukPGgrqfikK847ZxiqrZ7i9K87SceMm7rktxei2ap9BDfULyFWtSfvKwMhhCsQQ62smiGtByf6KW9dsrXq6",
  "key38": "2PTH881LfyNamy1FEmuUUNPpifuMuzUC6yKjsXBm8GiWT2rXvxSFHSx2B7BPV8HeaWcBQKL26rkNEzE96Bgh4Nws",
  "key39": "2shY51Jguf5KjKwFTU9eDVqg33f4eLe4nrceykMLiSCSoQLpyuePH4dt3o8p7o1cEqk4aHGE1fZovX85dRHVV9oC",
  "key40": "3zE833jfQ8S3PHRnx5iQ8gAfBQrGQTUwVMmY9CZUVYe4yYQFYS7ioPzx8TzVb1JQH2BMmUqqSnCp5DWVXS2zEMby",
  "key41": "3keiewMGwpmBLxQfBGRS1uqJhF2RbtWV8MfsHuZgJbSpgaCA9qwyo8c1m9DtNZGdzm57wdGaFsPxMtz4eftGft2M",
  "key42": "2MjcYabn6YirHCUv9vPr3ECS1Vd32Ykj3y1dZQVfow2MR7NuFBXC8wkob9PBrDz3ZiE9busn71vrbH986hD8o1b",
  "key43": "39pXQia8p5oNWaaxzuipXpaiSwh46SozFFqsDBnfEtgHxtJvktLJbaLqDmVQYqho5vpNVo1DYGy32sk5FoHB3zX4",
  "key44": "49ToehimMsY8MMREova7PtKmMFqLJKpt6TkXLmyKtwKedhTVB2ZHTChb7uZ2naDymmu49z1oAgbSns5F8QQ1nu4t",
  "key45": "2Bpm4Qp3SLgPogGndmQMdCMrBfuPSCZNWtuRsQgkwQBkzBHc9T1v4VoLJa5pWLHSu9mqmjMWseFcPVDRQ76kWYPH",
  "key46": "fgWFF7U8G1njMFzrsAV1xemJQRqM4jRNwwqjeBYZFqAhputw7fZpvHJMWZAuyNtqMkV6mQsT1e7UUfqxYY4KkYa",
  "key47": "AAtytJnS8RCuYzJppuWPEh4bVGGkfGBpiSDnegeEvx1yPWFzpkZurreNNZJpy8TYkYd4JPPjom5Ws4SGxs3nNFj",
  "key48": "Yn1uMDjFUPTfnECrE63JWoTw9M1SfodzaQjGK5Jynj4hPLNpzsZvtH7diRWkpjCsuaGyfEBiW8w8PmHzKvfDUkj"
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
