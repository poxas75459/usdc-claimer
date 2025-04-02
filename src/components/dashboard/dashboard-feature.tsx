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
    "41BnPPA6DaBAivhC47zvk8Ny9FNkexoVpZD42rQkAy1teGHtYR2qpVAPsz2fzb59UukQ2hSzVwDSCurGuTNXrB7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwUDSWSALksi1Qdv6aEaANUfhqyRK3xWDXHCsJNu9WtNVWKvAr9LDiGpwwgWG5gxQ8QWNHd23u6GviYDRNBFUAw",
  "key1": "4sMyDHtvc6S9qxkUUXQsETMTUpvbwVbsfx22a9YYDVpdZ7SCuz3tizNzJhPkX4vMetLNjv8ubKv29hfiuuB8P3X5",
  "key2": "4UKvA3LBxqPEPki2y5hqskK6ufUXyH1tHcjGh57ymedUXAgGiew2YjKkr5LPGFAKyfaXdZncKNxuDay7JQeMfU7d",
  "key3": "5JSx7yJEcx8x7G8njo7fDmM4WwQGemW4zewkYBQuAowvUpfbz5vsUNQxwPzh1EgDAGUQroRyerhMpK2FAaMTL71q",
  "key4": "2XW5Y3AkrtMiKZcSMdbCwn5gkW8yMZ1gJvbf9dgpBCiotpgWgEcgxqDrVJiBgmxEanyR5TBTJTkVpiJEBGHWgAFc",
  "key5": "2hcyZjR6cy2YjKb4XwCSQtpxgpwAXH2mUwfPhRb866AzpbdMXVufjMB1fBDznSCvUE5PzBUzdh8vhQ4iszKRqCJv",
  "key6": "Hx3QnAXnCsenj2RqsfPRWQz5NgRaZmcwsqMnEGWhGKZULXXZboC33ArT9Y1773fwUG4t4UTwhAUBKh4751xwiak",
  "key7": "3GkvvPfLsqp8ZtwV9qo4rTgCAAJDWQWLmj4MCWm7MAW4S19SgR8EoMuMCMA3En5ig7xHQk1SiATcLVPMw1Wtrw7U",
  "key8": "3xAVFBEKoksNMtbX8rMDX858shqdCxzx6RR4PmjgtBXCS6STZpWpkiQ6aqMMvguchV9cHhoq65aqaNmB9j6jYkWD",
  "key9": "5uxU8Aiu5RMzbKoTHsPVpe7aDQV3e7vC6pd1CrP4puC8GiugBL5mPWYqfjRerLQ6QV2MvzLxuCtdPqAsiH3fMhjN",
  "key10": "3Y9XpFp6wNyJx6Y9mjZ68FaFgyeTFUAhi7XyXxGwDXdhkboC64wB47eHtGD8u4hZV1GhF1gQipUzv1mPXPMpQWVC",
  "key11": "65c6hsrryirHQZPQzZNEx6HvnK4RKPfHa4yeVUWy1gwGL5obxGrSAS55ydhLG5URgSMnW8zLYGR8iTCrH5WJTyZB",
  "key12": "27sBpLg138UC9dEXMiWNyW7o8WkvGAoFwsJ5wUwvSYBbETWhckQwE7j7aNBwUUTgBhjYTbkZzptdFbnXtHQC1cdy",
  "key13": "43LzoFopSEySj64RSVwaShXkv3HsrisvPcUKgbiKQf1njRGQV6CDzpW3w8tMLB7uP9cq1acJ172ZLqke4MnVYezz",
  "key14": "4vdBz51xVbJGJT4qkQYRisL7X3uoNvJuuEBQQLhv42XUR4p8B5oJs6WQxBpB67yaEHh15N1UXAHm42xuPd4qeTUa",
  "key15": "4JmTL67ZyxGVfVP8DTBoZNWH6WAfo3JuUwnS4K7dxM3t4rX9hB4cYKhH1qQRzL3YAb15nUCedgx5n3Ad4SGmw1T7",
  "key16": "Q4NwUeX4qAUoQXwWyY5HotWbcXCZiPoerF6fQm3dcrNhn89VUJJBbwYTjogpeLQoQt9S748jQwmhyVoQcKVVanh",
  "key17": "JJAB3hhfd1P3U6722vSv3VAAPumNthrmxpeZHqfu1DSY6qkBQrTTX4XN4Hi9m9aQ4PZ2hQNBF6Njh6ZZoH96uv4",
  "key18": "2jWfDNAYyMfMpowXomHZS8T1MGtdKrDtU6tX6od9Yp2emUATuPy4axNskoHAwMC3hVGFh81wnakHi7r1RnDEsKYC",
  "key19": "eVso6VVaG3SREfMAH7i4urxY2gDfzsLWwdzFZXYtu7ZuJgKg26v3L4ozsGkjGrxFrY3gyrwamobhBiB6NMFttL6",
  "key20": "2coRZzLw6xHaiCtTawLqPcBQbQT5Hv4H1ivAbYF8rNLk4pZbUqwAc8RAHMCnaT9E1FCi47xozLd4HEetN3tBjhJg",
  "key21": "3QbWhQyJQqXKY6tMkmKtFe7Kzi4Ci1QkTRCFNNDsUc73CeBofrNc5UezN5fgsnfpwcG5tRPHcf2Pbym47cACwVoM",
  "key22": "2faV6LFdgYtF1NbFmYRUgDwADRoWw91U4Gh8XWXWLjLkMjJSudPEzqFvEAz3SdtMLVCJ3uDzbuaDj8Yekn6E6fXF",
  "key23": "2bNS5ZxtYG5D1htUAAhB2XBkqXiAZLFVm5SrR5J8VPM32X8gBbPutMQRsGmr5i8qohXmZnPSecJMBhjzSyLx2ktQ",
  "key24": "4VCP4QzUMFqUMaeYWSQWSH97A95887x4knBqGAv3Nf66Zvo8b941d3aXJ4wMfJUrZMUbtMeNGKxc75ZVFyvKwYdA",
  "key25": "2xfQ8SAowJQmrKSqbwQNYEnjm2c7EtGvR3YJstRpUgeA3fjQcrKTsXhGLnsx8pTrb2ouh8bNPYk7WKVLKgY6QCs4",
  "key26": "3xEzPGdYzH4Djf56PctmiRWnHT4gx3yCDEYJXT8CeGigsjMsp1KYAmpNeCweiYi6nbs1XQJpMDbKErXictuUYi1b",
  "key27": "2rPKehdez6e2t3PRVBvcnwys7Gk8m9fBhwCimctedQaAvapkXDoo2WTUGmJeH4XV2AEu1Mt48rpECizmF8rFyXrH",
  "key28": "3W6LEULHP917pf8bumY9S4W8xUAVkB2vFzRJnw7Sy55hVB9cmS6HpYTzy9XsXT52SvgYaajpaaJfwCm1ZYKH7T4Q",
  "key29": "3dGrCj4X5mkjnRZtnU4gCAdBgF9yokBdzixfnSvui4RzsVaK7qysU7mjsAWWWsQyBqaKunbkhMcJdtEMdFzajUWB",
  "key30": "5A8DAFfuSdZ7MNxqe6zcdqxP39gQKfffFHAS34yQBJSza8hNJa2wGYBDAqvCoByUKgvVzCSev1VWMPTPjZAnygoz",
  "key31": "2AGtA5swus4U9UT9tCPz4m8rUZAmeaTEzZhNneBE4bvra3sFHku4XLw6U5AUvtvNwVe3BLZHvMBpZvu7nv8xgi2a",
  "key32": "3LVkEGzyKSMpBH8yC8ZhK85ZdJ7deX6GKg33HyVfAC9Gu6DgobskvohKEYYNgqBRRJuEniabhQeRQhzPCJydzFNv",
  "key33": "3VW1nvUKxV2t2guN59BSKE6Ci8mESGt2KgR3rrxKSQp3joNbiCSBzp86se844DXB9Q45As9X1rtpVGMALJaTEzB6",
  "key34": "5k2ac2LtHQQd3zungK25aLS71vgqsWhceNSyeW1fFWhCbzFwdrSg18jJWeySm5qzoQUTZZYmYmrTnwzWDUheGnnY",
  "key35": "4HKEUYK9d3MQeTwSorEpFq7Uxy8e9KqLXdCAZ4ymAEjYfWexjksyRFpt3kPyN4VnwMiVbybdscTNwZunBc5ybumg",
  "key36": "2tDAVNEydPeE2rLWBhE2svWjFmjke3mQV4h4swQP1cHDqXC9SUxVqHWsR9Q4QQR7evGAtuowUJf5tCRE96rzZdGe",
  "key37": "419XUhNsdzRPy3v6pnMzHDUWGfxk8DCruBpyTaUizLe69i2oSoZh99qb9tCugtVbzDLCNsXvG136NnHt6Cf3iwdp",
  "key38": "65eS7EDYka9vyk1JweSjeakaHYJvWmzwJJcybfEQJx32xK6PvE3zgJ5EjPjj9fCf8ek5PvoTruJeGGrxrwvnuWEs",
  "key39": "66boBRT1pS3Htg9zBfkYDGfdzCaz3XRn72HsWhwgDsHRbyT7d9YwRPVFP2rxGxTK2BusLcRgRfVWZGdDjfKUxVna",
  "key40": "KqgUsXEx6ZVZ1UkBF9h4faYidjgtv3SFNKU8HoF2zE3iVFT2q3NrXV8eEjfeAMwUmabHfcwaG7uHUG6BTuZxcHK",
  "key41": "WB1FH3vTEwGEiy362zVkTwXbkc5FGUoSL45ARzcxknyHVZ3E1gvVe6CZjDZCSLVxEattGvkYhx81yartNjDqeYU",
  "key42": "5oih5mPwXTYNFzLuyecbaBvaHxHGo3YLUqL9rWvQt4zLkTw53kkiogbmEtXQwyauYbwvgDwBjUB3PZVMgELfATyq",
  "key43": "3MMgrUhK916JxE4qPWpZbVXBPKVxjmQPLngfsZqg4G2DYqkrEAj7PpnRGddjg7YDuww6nG5u9PJDWWSiiYHZ4KUq",
  "key44": "2inpbyLEHQRHsKGVpFnk8ij9dbgjWZqFNnznp1Sf8S9tHCPYN1Mq7JbnrwCgLdJ3NvdagQyfP5swMH9oGKk71JH9",
  "key45": "jhNUvacPkjWtwrpcY5oxtsSfoupJyT2tgeUyWsmqw1c2kaS9q6n7ZXNERtbgkcctCQqKdJZxUqQqVXLhmoYHLcM",
  "key46": "5LmhwRazmTCcA7XqK6z59RBUGTEDQ5V3BeZ22bkTKgEUb7P978tcazkABX6dokt9k87ueHeRBNoL9VWcRXuPuWDg"
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
