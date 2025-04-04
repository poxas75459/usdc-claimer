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
    "5t8WpiayYPybpEz35u6qm8o3inD39WfjsMybZo2DFJsoSgMnxTmRUXYdewaZM1h8TKGqk9wQGtZWkH2Mht1rQLSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFPbuybVkfgxv4fNJzA2idmvgAYR7ZT9XRYYTXLzS8r7ccVTJjudwzTzVBkVkH279zCtHvAeHFDhVZniX4kvuxc",
  "key1": "2CdpYAPBQebcofrV6WizKHLEygDHWcdtbQ1c4SPoMgkFfsyxzZBowPwTwHa4rj9PVU1ue9z2ckgbqm6YZVLUofqA",
  "key2": "3k2i4SkPLVX8d1ez5ooesjCWYtZKiDc4EpwJkmmwJLnQSKMddgsfvna4vBrnyi6V5XgqL8BnNAgxjDuZzmcSsa5H",
  "key3": "3Noymim8abgz98PduduGiMW4w6Qv9uexCXuTWqr8ni1RFbVraeHVcHqmn1DNHVgEm4jUWsw39mW6ECgBFQBgabJr",
  "key4": "3D75RxSTMSeXu2UHh9mJ1nuDXntT3SzqEm4JDS7E8kaESda5GNqpi53vcKZuVhbEQvYp94MmiPJ93kKb3qohahhd",
  "key5": "2uPZkGuGiQe7MbanW975ra9WLFT4G4nDuko8QtcbFWuhQHvtfZ2cMnZQsrVfw45XzZsfwAiRBTzYbxbRL5dD3VL4",
  "key6": "2zNK1msYJsZoHsvpSbeRw8ST7DT16avL5jWAYegFn9SbZ3cUHA3GMpLQdN1uNZh6yH2XHzb19KbNrXgoLbsdB8Ra",
  "key7": "4w1grYm5jbHaksz8hRQcPACgptBHVHajPndvGy7afBjKjFwo8Jw47w6zTQuyVdM6gyzLDuERCF1pqQQcZtz8t8kF",
  "key8": "GeeRFdw5SGUkSSzsM9zLKHrLUHovSWRJGukZeJa2zPNH9SuzdnhEAXUC3UxgwHLrv5h1RHAMaAqK1JjgSKDE8Fq",
  "key9": "oFweVCfdJLRDkMTCLaJBecvGR4S5UfUJCEqT1ZPBsGCappjc2AwYLhwJTFX3Z4X9qYac6DBCCji47Ye5GrJdxU8",
  "key10": "5KwS98KHbMfYqRtdkCrFLaa2RH34vNXfEfijyMmQspm3ece6K9THqJvB5gpwphKEJA3nSYyLbSouSLsqo9N4wa2p",
  "key11": "3oSeCJgvxurvcDTQ2Z4zDUNh4PBpLbecGnqxr4avNyeo2b5BK4D3evCReEwrDyZ8BYMQK8sEpG784G1Qt82Wief5",
  "key12": "5SvzdKMFj7V9KRqdXk7fTZFAYYrmhzEULkyVrNwVJfyqqvoXPN8DiruXy2vAnWsqBxqUhdAWSq4QEKGbgAFVpvjJ",
  "key13": "3HyKyZT4P2AfvFzoHH4mRYmVshuaGhUsboTdK3yLE1kgrjPXkKDb7J3VBXNweMM2TAGxPv6883Eo5qZTPCEtJYHM",
  "key14": "2rpDJVjwKefpVCew3CmS1bMh4AUFb6rmZgE8ftpax8om2nMWwBBpi1KKMhCCWW2WtgWfW84L5NX7SppNrJV6jdYJ",
  "key15": "3kjw2duCE2HSjxpas3riYX2NgYSpsLto2SKXZShjiJG19ivW55EQbsebpV1mSrnBGHjXgEU4SNweeY2DywZmhrBj",
  "key16": "5zf6tNRDf6CzVDFqtuy5S47x4ZmHvwyToEaGx1txXNTMjhHjeM7C4LGBSwtt6bHqQguwa3sDMDSUPMdkW6mMipwe",
  "key17": "3kfZs5P8bZVaw8YcPiVB3EUkvVv3NtJDcubTFq2TB88gg8Xucbk9LfDf6sVzTnTWCbnreJzCqeXtH35kRH2y2jt6",
  "key18": "2NqGNdzme7oLDwPgkE3jK4Vk4eNjAzftRaicS5pNThvqG6BrvufRgaBFkP5MyiwNoTF8Wza9aC2sADEYbsBgwiQr",
  "key19": "34F7mrt5ZAyrHVXoHi7mFKEgoMTFtQ111P5KNQtqjemDdzBBptJWgdMGLpeuoWqCzZbdSM9Zah5dn1BURsyaSR6E",
  "key20": "5MTJ142jQAG3k25WHzeYLL2hLgkbdQS9MrPVGLYtNJfCMWAyxg5V7ASYMgA5oknS1cEk6xY59Y9QNxKXEQ7KDbgJ",
  "key21": "4ENBMUbPiVtJ8NEGjSBBFZA6ug95WEhrVsSuzgUr5yqNNtfYJ64iezP8DMwo1nnXQfK2ai7txooMCHqAh7GdemcV",
  "key22": "kSaAnw4NWZa8XWNTXNbGkPUwfTojqRt4q8xqXssvJX6m2yJj259a8GN2ir7YycmmyK8C7JPbHpiRm5BBLzFvmws",
  "key23": "21yDjfW3edz6wT596p69Vwc5PkYBe9sZLRPUAYbKGAm1znUznZa9S5zexH9ZMeBVUSZVFp2pirQcjeFj34ri1x8D",
  "key24": "2PZRnvSUFzRTmBojv478eDBmKTY21S8F551jsSXLm2ADUhH36oFg82AHD2iX2Q1XapthKXyvr4J8yQPjKu7rQXXP",
  "key25": "4r1WVp6VQGupuiUmfJW6AYwcScCBmRiLkFMyZ7tzQMo3yW193ZyRyesKL8wdLYq4DNUUWyZ1DTgtxJZrZsNrVzCe",
  "key26": "37tUSfj6bJ9oD5ABE1TAMNJF6K4UDU8T71T1CmbGvfzNMxpzsfFp9xH5JebGypC6UrLQkAfWEtRXh5ysXWdi4Dbw",
  "key27": "4A4iJe1ySUDYRi63MH4jPBxZppLpmZGdfQ29KYuA8QZiARozuLLWiBfiMBMSnqg1f7AfGk3cvFx8Znk5LtD22QmG",
  "key28": "2D4iQyPboe8NkEBhPEwCQGrSqprJtEF6htcrRBeznGg7oL7DQMKkx7nQYy8EJbo9MLYd27noC2V3PxYL6YzrSieU",
  "key29": "1qXAgi7Ji6PJByofRMW3EEksrB5GA5CPm87Uv7ABLiZ9nLDET9sZG6gpeFwd6s9eAN2VE3vnu3QbYUkNZiajrN9",
  "key30": "2APtR4Wz2eoKuNk5MtXhdrzzB7yT15bKiquzzmBa1yVcyLJXFAEJSvExLs9vxPaQqvdDD5Kg5cjwAKa897jvebyY",
  "key31": "5c8F2tKP17mxemZoGxpYtD2mVnxVtuDSxafubxn66EBXZpVRuUFJAoJEduNXUF3Rvx4MhDoPDf3TMTxZZvtGLNXK",
  "key32": "5eRj2bNK9YYt9bC658qdrPZhGxLmaaeFNNHCv7edqtmgg6JRCChRjeg89yDghVktpTfPrQZnX7JvdVM5QfgPEcQ2",
  "key33": "2vfWGYq9tZRwiV7HG4EMJQVrX2VNBP9x3nZnMf5ctZBGm3eEHJotqTvL3NcgNMWgpqXb3JUDw4wRVdrnfXunT5e9",
  "key34": "3TNzgtjS5zvn4ifc1hD7Zk7z4PZErXpt72F1byW8hu4BBVmZPymHeQWh18d8j63q5uTmvgNh29JDhbHSFSVPdsZQ",
  "key35": "ebYQwYxQaiNyEZwrw81zDAqF6277oQzaNG3ecSMF7fbjc6dzevyFmLcV9kAhCeijQCFvDk9nQM6wazsJ4JHRY6w",
  "key36": "cWvfrNq4Ua8sTgMMoMnvuLDMJcAjL386a4Fugg14sWx2ttayZMWUxhZx2EAtCoyVjVP4uZZ9Jk3ELWzzc96nEkX",
  "key37": "2rWPFe9su39JDEVNrMcPigNCQzegenKybb8HRr9CnssjqMJB8Qf6uNw442tgGkN2xVaN4irHwpWv88hPSDfqWnbb"
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
