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
    "5M646DqYpMaa7oEpc4r6wE8111G2uXYBtzgVkKMmguusmTqAywwfHZKMsjWLVgKGbtrfLSfXFQdWSd9uncEcohVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FQmrViQe6kQwZycyNrfvSCC75h8k9zipiPLvt9qCE7zM16Uo54hVehW6hXCoUWeoDF7hnqdHoN7cVBon5TjDfti",
  "key1": "5KJZ1Ha5oaaeFFdmDBqUTqXsb9kf4nKfYq7g546kR6myhWqEfrBkUvh4cHfs8iwMWGZHV2dFVe54L68o9KV7GRSY",
  "key2": "4nJFTasytA6knaatG6ocsRGrRPuHGN6v9kB5mQWnnURhRALt7dpSNCneGi38Wj1inwMpZFhi1UhKurnTiK3QZU1W",
  "key3": "38Vpid3fjsmoWnqqEXq8nSuAntsnKsDjJKP5hEC5Ew4ekKer7m9xdi2Nuh938qcHNhg7y9SHdbTJB8CmmXUvqo8R",
  "key4": "34mTehN8dy9yvjSuJ4q4TkmK5xNFpgf4BctCjq1n8MCw5TCqCii12o3riGitGY75MvuHEoMqsLvVS4sEBh4zUtc9",
  "key5": "2fuMZwWDtnfs6vWW65Cmx3BWska8CqpeBAzFWsNnjDoKUdeoJDyN8sL3sqQ4NP3unS5FuRsiCm3KpyZtiaywZoKd",
  "key6": "38tEWLQXKD5Yu3RPWqquABMAfGyn4qR1A8pXBUV9kCn3yFfxQZCf1GwqRYaaTZfCxvNfEGWGt5wJZz7FaJYMV3vz",
  "key7": "5spAKR2mX7xnCwmPkpA3xsYfzqMkxcjtW9NdzPVTDLifNezMyRBkPRWBXXLjhaqA9vpzXY2Qb7naa4XcLo4sKPhL",
  "key8": "5JY5tegqnkQm58JPF1xEuNndLrpEYn6cBW4t79rp5vPRG9fmHb7ELmb1PKX8bNj3nuLUGqpgpqQDefaeGHMf14G5",
  "key9": "4wmJQMdwKLMkXhsKMo9UoGJ2vf6NsRc3GmdQCESBRe8kbvtqSx7PpyZ7Bnh6CwjUrv3CfJkZZbiaXwbsT6SRxmah",
  "key10": "3gQTzgzTEBej8WkRiMg2f4vdHVi2p7MD9fN7ptqYph2rZWaMTKRvV2Rds1zQZaKRqKWPmmgoEAcLpPigjZ6Z5u2W",
  "key11": "7SybmBMHZHpwy6voWdiG82TQgtam57AtfvZDdHcMyxqY5EsD6DEQDkizntVMy9fFgtCZstKyiUJ2y61YNMorzyf",
  "key12": "5CC19E3Hrx4kJ1W8oEDKWNNWNnaSYGWLT4M9iyR3RroeEtvrPqPAmHAvHKTVtmsGoAaJRWJaLm9DryCxgaovXnbM",
  "key13": "3STwXb92BjGxHRekaGGeye7xG1ooQNb9Zm42PfMdQu5PHj85AHgWQFRoN2XERMf3ErrxyC6fn2dQvYqnby2pYdWA",
  "key14": "fHAEKhYwcvDqJC6EWB7FbMfMxoQMjiPD5Hh6U944RK2vgdMD46Lj7gv5vmBchzH9dPcfReSkTfe1Yu3PhXmZ8GL",
  "key15": "4hfZwTL1BSsPQXoyFBXjDFWPJ6GanuyJo3Wyqr9JmmtAzFfpYzg4Nd5fixokWGgbkB2gY7o1HMCmLRQRXAiZTZZr",
  "key16": "4U7e1cx2NSAiSwMB3GuSVMLasKxy79zmGeuxHUG4JoK5Frd5nUnX9PuBoNnqKYyX9yzb6SAAfZrezZ2Poaf2rVsA",
  "key17": "kKX6LybzzyeD2JvgrDELMjbGb6PMivdfhPxpxJPejwAcQKboiP998fbkfu4dK4z9yPSxMvSha6dgpvar1cDC9Ts",
  "key18": "4cnPx3WEkqVuFnubn1fGzRFgHg94Qn7f3XGzqdEQNoj8XrAHhV2S4R6UwP9z94NYtx7kf9ivpLcUs96oiA3vFfsY",
  "key19": "3iF9eH6prb8dAQasqboQvtxdhdRVGbZb2XqRzMLj8zu8CpEKcFdj51cCSNPFQK6GqitWUwiRz7r6k4Ropocvjeha",
  "key20": "4Jm2qfxiv4ctNCdcJhsMdAPWYoyEuGqcfE4qtgVjCgaBZZUJfbBu1ZL7tG1rL8HBC7AJjHpax37vovcbQWYGwdFB",
  "key21": "37GBvNhCU3dak3uWuLRyMwwvQHD2WkDLE9t1a7hiNsMmf3xzevEUWCcUSnUmEgnCp9gwvSFjh3oJawCGRicuBuEg",
  "key22": "3Xneb9GqrySFbybk9oCkpj3YQrWAgmVKXmZN6JrpBpCRL3tzub3eUwBR1xc9RpVbrCfVD7BYKg8bsACYPdYDvKK6",
  "key23": "3ffeRKprDWzgefLw6v9b4o6PDpmhym7zMLy9Y97dFeZG93S7gKJmEabW9Xhna2BMmQMc8EpZ3MhVW42hHWjD92pH",
  "key24": "M8UkBmuaS3B3vYLVitLrzXuQCx5bihS3efnkxeRTejJJtQf9VW6HguE8vQFYYjS5y7f9vfSgC82jnH1k2Q7zqoW",
  "key25": "4RzuiV4cvcDNDqSik7rdRaVY5RTKB3VkKkbZ8DqXeSi2yo6E3M1nGxA44fmFHQ88FMZXLbh55y3itD98UUrpCnK1",
  "key26": "4SBtXBKTjtQQsjtrT93REvcKwugVdp1bcTjcedF4diG4UQp4iigueNCqPUuuukzQDgnhxWSpZe5zdXAvMMq5o6Sy",
  "key27": "4VUt8AVPpQ957NQZFmnKkT4dydkxi8iSD5XrNGan1chTwoQ9pzxkrJFqvBENga2gjnbm1LHZM98oWae6K2VmbrZs",
  "key28": "5MzAXjKLX6YbXjpwjdUT89SX5GJQhpxaSjkMcoMo522FzVSEWEk7WJovhajCtEEZNVb2G3PyRjxgV9i1jBsRG59r",
  "key29": "XaGycGZGSeK8TBcM5g7Br9s1HYBiLYb3gn4PKh2SrJPS1PRa5U5wJLYEi1ZJy1tacyqcR6FQaKFrFxnLyWYLyVt",
  "key30": "3hYpM1czRsWaMfnwyAeLnJafh3FGcpocxVXHcgfKYVSAohF87Hz1Nf95u2nmy3LoURVKJfGhGRX3B947t5MMoYXY",
  "key31": "3U52BN6odXN5Wg4dUr3Lj7cBiNFCq43LTmz6uyNS6fgZaAzuCZwjLMBcncahoTTZ6PoYd2gH3WdLjha6GMcc7hH9",
  "key32": "4vUm8N5Pkz22ERX151in8GncJ2WKo3pYkKqHKiF4BP6SJbG3JHCkRL6N1mSE8KzKXNU6r4owRMEe6errxkMp7QWQ",
  "key33": "3jJvxQ1kCV1gx3qfJSjdW33RJ4SeiXEDbYPAFiJkRJEmZVvYtg1T2TimTjCUDkBnpw2gJBJQJuBcEwdEucvwuwBR",
  "key34": "3FqtwWiBmfKNkuPDTYQvxtLYq4bmCjv66G2v2QG6aw4aVycZ9jLveFRceX1mFJ4msmVzY9GGR2YESweSVQSMAyNk",
  "key35": "2fjwJ99TbwzHNCHa33eRK3gLCkzaUKXdHFohRsoLig4EmxDgkkHutRNUMdJgvVnMX6HZo7ZMjsh6iHQWfjMwUFiD",
  "key36": "4senH64Wcn3oUECSsY5TkdZgm4m172bXKVJPX8XaY2vke4Nq3qjn2f1nWFWqeJ4PtQ7EFVnt74EkHHTdysqcieud",
  "key37": "QXSYeBJyuXrKXbEk5ixSSb9v9KQSGf16ygZdz5ETs3MLzTBte1Uy4UU3AnxTiaLcgkNH6j11UonYZu9L9eMpJtb",
  "key38": "3EstN2tBdCALSpdQHpGapcyVgCPeLvtWV5WiEYxpHgwXuRGHVVAz2jL6T4w3VK2iqJnjoN4fZKVv2TYh2goK1azj",
  "key39": "4hypZrQRRM75auSTwoVVB72igEWQC5yDgZmdyexffwXPctxjK4BecKWtLCNcNE2FkFoN4kYZPgPt8KYRuYnj9jsS",
  "key40": "3vWRkGui576yj6phxPQPZXPeZC5FQXF9vYp6YPTGXTNY1FTwkmbYgWnv76QrpfnAVtRHP4jMPfjTKQmZwQfY9E2C",
  "key41": "58UWKMyoKYbrp5FHjW8AAiVEnS68YCqMZnHRC9e7pQjHcnwBWaVCoVpGeMrnADLjqxXMp6W2jyCCBe8AP7kGnjPj",
  "key42": "4AV3WWKqFARx9AT5pNLrnGpGNnX4tLdMZrdWWKHhhfCgTX8bebBECj25F6vvq3LkXALzSn72YLoQG7PwArPQnTFp",
  "key43": "3EKXwE97CukYR17rJLk8MNS8qqR4HbEe4YmrBE8sTf5ZfARe5Zz1kevMcJSKSbwCFQp7S4YNdYnecgiSSTkt6qeQ",
  "key44": "449tqnVeEPRRV3UPQcmEriA78J6GfeaThV9GqpL4H3nX6H1w5Q4zqMU8uYnosfV6fAM9rzi7gx2BhMJGBpHawff8",
  "key45": "2vBe7uARxKcW2gdGwXUGoCf96JTBf2FhDBxmfu8HwhqBVpirKAQCQSs73o3G3Hqv4rnfgHAubxHx8NR26dpz9p8M"
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
