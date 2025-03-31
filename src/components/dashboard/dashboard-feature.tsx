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
    "36beei1EKkDyQXQ1YDtjQn5LFXEd8Mfr4NyfqxgyTJZAxN8LE5cK1gx6dRMC4qwSA4d9bUePjAQKfpYA4eiiSL29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5giuKkEYoGZK197KDjKyrbR4z9wtgFFS8YN6SiHspZsH9rwAaLpuB89vMLxKenkwP7Up9nB2Fqs22REKP3jD5G91",
  "key1": "BGU4dhFB6PYzz8565ykCcRajCV3UfrRcddwMb4cN5ea5nKxY8Cnh4EDf97A8yg4WzHpAEPqNi391ApMaiXhYFH2",
  "key2": "3d5ABaka14VWay9Xct531gn2NeJ2WFYVKWnCu4RQPqeoURhZNCoEje8sgtKRjmLgZzJNu31UB3LrBe6NLFDCovTX",
  "key3": "3fMcFcdb3pWk9sfZJ6yeMvP2MohJWTm9ShRQB3kQ1WLzjX1E9Dr6XUp3or4JTp64KhZbBoRAhZszpeSVEkGzPS2e",
  "key4": "3dAzBhHjPgqH2UM6UDd7kKNgshaACarZZt9ZgSmMLoRKF7vPwNbRFSiH3A5yKzCeUvLeHTu3dMYpv9oY2RX9neAg",
  "key5": "5kApotMNsoc2ukS9ux7C4pBGVRTULHk75jfAtX7jpUKhK2zHREZE9pVgdRk9UJkH9KNpcT7adW6B9CDpPhaCFoty",
  "key6": "3v62kUaC9Jz2MYGy4APUxAfzu9CXrtS33owGzokwXgD6ksKiGkWfzTjTJkDPdS5d6NAmY5QW3Z2TZ31UzppefY3u",
  "key7": "2VE1k4CJyfZ4jMtQf3GcHM1nU26onzhsENQPPqi9CyhMakWgaZckjoxJKAcWSXKc2suPGD6EMzHct8kPsqtDVv9a",
  "key8": "4sjZW2Fxck6ijesCAcV5ada88GfxsnyvBwoAGt53dEFQy4bYxERXdMVXcfPR7of626KkwyFQ41wno2fwd5p4LMfT",
  "key9": "4ocyv2UpoTkubnpEQSDsJCGKqUKrJxEkLDbNrto8wxZbmbqfrMKb6gHvs4h6YTABrjhr2uvQZoQHaYBVVxWjVmx7",
  "key10": "qFURYoY7c4KBWXrEQAHC3YaVkTMBfZta5xc1K8rfG37F9Ljmz3at6TvUKw3hrMJDa8bmVsHCYKPMT45MuhYLRy8",
  "key11": "jvUGaUBNQiBJ4zoFzGSvsqM79hMjLzQMVjxiRTM8wjFEfCh6ZUGNA386t8nDFGrpDcUUfMDKCMRRs5HDMv24UEe",
  "key12": "2ryXiktEuahmH9VwCnqPNQc55k2C1KpS5ytzE5szwNN7cVnpfv3JEwfv6fE2X8S3f9PoC6tyePLMGeCmHB2MFY2T",
  "key13": "4PmrSSuVYnitk5WVUrieAShjmySkUYHjoVw4MF2btK9e4wazu9QNdJRFBFHjjJ5vw5CAgmc3bKjCAotJHRayvcYo",
  "key14": "5aXgrmZX12SngpBnm1rE4QLTH9kPoc1YRvFSGm6MfTyegoLoUzcTRLf9X2zhKgRyTLTkiZDMuFy9bdidsZ1rGaMv",
  "key15": "2ms8eRNc6RTQQmw1rfeocXvW9bqwdtQxzMFU37x1c9btmE4uMhk1MVfp18HrXqWWp54yLcuU4nqFt4goHemchQGZ",
  "key16": "3U2bVYNLUtCjLiLSqeMm3P5Z5Rtgxoj2RtV8qAKEus2377TKUJv6styMUwNSEMzoCndi5em8S2aoWCykvKsErVrq",
  "key17": "31LmmhYQwAFpXcjRZNiaoE9nkfx5TRUHXUPHLjecrvfuhd3TceJ93zzT8TVgy6a5E52khsYVgjqapSPcfzMBq3ng",
  "key18": "5ApbsdS3dj69gxNeuFwK1SdU3Q7CZF9N4dReZyGwWjpqYDmJx36MA8ZHCy9HhyCpUB2vMS5KPzfBcrvmHCjJuPrL",
  "key19": "4YYLUvHvSCgo936DAkzut6r5V3JGp6n3mXjNcE7hnAodYAtFwSsQr6XGbNoHUVqeNxyZktEW2CrdhVfUPhP6zX7q",
  "key20": "3c5Tk7LqsNA93kvv7Fc2znLEdoKyp6mJ2vbiaKedTy1M3xXMNpEJwUheCyaKeNaZBwA8SAJrunyxcvzuqzu6UWnD",
  "key21": "56EZTTnyixpSixkKYB1NvLrj3JU4fHHzotkThDGpMYTJPhiGfAepzZvJp1wG6LPA5cvmNfzrvLaYSzp6EAjyRfXz",
  "key22": "629uopDJxYBGtEhrwFFzB5mmGrVep3NHnUVUd281rpsbbamZagaxgTK9CFT6ELBDwNFNs3jQ3D1S1zeEL4PtxDCr",
  "key23": "4XNTz3yRentHxt5wL4xs8tG2gwTNMVzDfa6WsFLNpkfwyvyDL6bWCh1NfEi8cdXiThcTgovnNHCCV49Rzi31P4Z3",
  "key24": "3vNsUMkDz5PANbuzNyvsDyoxRaBVwePbAB8mGoUkm6vsS9JjWHymorqs1m9vsf1Mvo43Xn2JRJLqisEdYnq27B8c",
  "key25": "32ArYbfj8fPPKmDUs11rfupPRsRjXH1NCYXYzR8BRvmH85j93odpdSxrWPqC3jfhrzHH3xUGK2qkpF31AKgHYGf1",
  "key26": "3pDMJX9SvH7oYxSz6C9qVUP3Kot7pSuwXBtkQM9dJxBp87ZbtPsPNFH8to1PombkBjKjrQj8xWD7i67SUbkjwxMz",
  "key27": "5rWnJhBRwKe6WRSLQrcUvNwR5fTgFtE7WY2qjQS9bYcEJhHHP3LSKyPaBCxt9fcdbZbDxKCoc8FrgCcusCTihppx",
  "key28": "FvbmG1P1zMEGrJ7xZzvd5gciQg1M3nyMHkd9HF5Uk9rhGgw2yH622Q4tBnuEabUzXKHxp7UGP1ohUdDLxUe5Eiw",
  "key29": "5eFTEiBvnpGGh2Qu51o9wyHHfAmaoLpvajWXZCoB9NJRCUotU9eoazWMqEfxprgPYLthbQJtynCaBje6HsLosezD",
  "key30": "2CquYzXK5ctbyphXqQh8qpzAQ2KUhYb5HKmSnBKQK5HrzQve5RxZBCjPduGFLTv2cVQKwMUj7xD9zXG4fGPVXKYZ",
  "key31": "222RQqeActnzy6ASfmiuhSTADtcAkbP9bzbNyVS25JT7oM429WBJyNPZEwgbAogENUFVKP4MXeRjboMfj7Cqy4MM",
  "key32": "2cVbVTf3hxVKNr1w4Xx7SSNZabd5iKQ2dBYbZjjvyMD5txsaUXn51kzcDf1FeSJJ7QNmMLXwDgak2EQowtq3GHqv",
  "key33": "gfLPEoVhucRhkKsecbQnSDPjFUAhiMxMQzJ5bBcwraNtFxGizEu6k7BJAtwrAneHZbgbsBrsqvqvHYeP6W7cXMV",
  "key34": "4ZsEFdbc3B1AWKZHrnhNwm1ZDeo6Hb9nDd653dB2nNEwHCa1QzcgJEWGHWpTjSfd18TCmw7qF1787bFC2mhYUQt2",
  "key35": "4H1WfHzEou6u4Nz5HVtgbzU3XtNPigMvaivjdztjNNaxYv4a6bCj9MmEeDR9JSrKNifmd8ALLwLd5qf64YjeMXvP",
  "key36": "3r8Kjf4zj1kDikSsEumVxGTXzjteQe2c3hRBywecVixHkg71TJyH19yR1MDgLVKyzbYXtFDduDNBNf8UFNCXqXtE",
  "key37": "2Y6g7jnWGaLMHxxXYPkrqfxBCNMcwEQpZMuxscKc5GHEA1rntypc8q8UMu1Vzf231xSYn8Gy1upmbfwKr3pgyhcB",
  "key38": "5ofFvokYfGwAEZi5PmwbDaii1JjdHqEnjDHzm5ySvJcTNmsRHsADotFAxERziobscnpvDKP8qS8tsbrxhcRNUmdT",
  "key39": "4XsssUdkx1Ha31mJ4kry4d7N4KrtJKkoJbjDw1e6UJETNxwPE7DhFBYTMPZPmQ75t3oaDDaNFy8FeL9BPLtiCca8",
  "key40": "4tq6FEVagTgUvmvX6cZVfoJWwvdVicNmmt4B6Rvh9ensSgRkwCeAbCaZD1h9Z5CfuM12TG3EXEUUZ3uemUAkvmQT",
  "key41": "3tyV83o5zDj49pi1KYknRfWNLni7Q2nVFEoCkNSohkzZXpdxEhXXULRWbMzmEo1FfuMoVDHzGNdupXie3Di5PEa6",
  "key42": "ryRmNpv8eRaRw6svBegPMCyBa4QuEAKnXBDXE42C3esMFJzAUy9qRAsfo1jyJrWwtbwHgJrUxpCUAG3gnEYayM6",
  "key43": "2TniQtFuG7N5A1pyXhDyxa2fcDvqW24rLAomfK5FQZ75GBtEfpZ299eD6gdDoLbhX365JLrca9KrLgFCJPHPFrzt",
  "key44": "3AmUWL2gBYJ8nuU3qNcjhwNGkm8CDFE7wTYu8jZnqitEEmJNuHFNFTvcGKHVqk878auZAKAfKuKbmcwm9cUaJcBt",
  "key45": "26xwE5imukeHPp61YJcPsHBstjpvyo3ohs5B7UyFo6DYsc5uhV1RjKGcyRfNHcyrCBRsg9xbWrgE7kwaki47Fwcy"
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
