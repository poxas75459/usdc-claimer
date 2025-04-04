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
    "p6pb7jozir6LDrYKEi9PCEzGRz19fygXYQG7XM83vw4BxUQVxgzV34tVngZhNR8meYNJjMEmWaRHDws4KH15iHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dma4aXJikTuec2pXDrSAkNNBUu2L6r3mySChhbPkBdTY9pcXpZrGvudbRDpXbCRvw5msuLrc8R5JmsfgAVKLy44",
  "key1": "3aPQ9HFQNwQVxLQBEgvhVdANwDepeBjqGjs3bRECrUgYT6tbtFQy1E8yHMbiqw8St19MP41LPDkwTSNwDFwmGd8m",
  "key2": "38uCtJxxyixhRncfCzHqNDP85921JWk7nFVGaESbdap2p8MvqDBmNi8FFdbnZJQqvgcd1H9MBRnzeNutc9BumiDa",
  "key3": "2DbnLQcmLhMiUqB4XMn8fhUKcY3VLgw6355cgY53JuXt2rjJ7wXwYyUXXy8SaUBdb6YbJ5Q3bhhdjLnCAYhrM2y6",
  "key4": "4bW7s468y72BD8BeK6DKGvzbEqYiMGLBWyUVrokw1dhzmJQUF3weTernXDzeL1BKPgEiLUeAK5QxBFAWJKZ7T7Bn",
  "key5": "4p1F4Cnc98aJYTecMNnsytQfAVpU3mbbbUsdbRSYfrSJH4BZDYCtHzcwTvswD7Dd1wnYtRe46btEEy8NPLa6Kct9",
  "key6": "5dT1LABi9YMbC1P1sGYHMBW77TsePsMdiagJjWkgxNzJ5NCXhMY93rxqR9DMvq3rRZzQdzF75h5jaMQW9T5jsGJb",
  "key7": "5pdGLvJajcyvekP3g8L2E2TSK3PmyqQKwQo8ZJNKgBpwiJjPL4Y1BSF1Q7NcbM7PoVzgD7AJC5ke2Zv8fowuzPCK",
  "key8": "4htt4qndL78eEkh9sXnGWYKKmp46UDFKGozwmrfwUDpbiaDhFNnsXec1qQf9gCZwyTPTJzEdtFVuMPe4Wq4Fhi53",
  "key9": "24vb13gSRVRN8J37k334LXHJVpzBWFsZMCFwi535ZUAUZ2ks6CGUVryN1fRgiAi2QEhwzLBjySMhSwncJtyXYkKk",
  "key10": "5PUKQWvA61XxzLfscH9Px5e5VGVwtQ3NJRVTeQEBYqEuS95bRHADQsahsVbS83rFp6yLrXnB4ve7Wi4gwaTFJxPu",
  "key11": "5hGqNw1bWbXVjzg72j7d9hBeDKyEcFeQqxcWPX3amYgjrjDWexKTnCmQ3AMd7DsV8vsByP4BZTG6J4dnRVHyE5xi",
  "key12": "4iAxExZuQX1bg4AB5UYe3Sy7GnXGQ98Gr2vY2Sfs32UntaC9aQs33nXyt4WedUpc8pVyCSPmQgA4oNjk2rcxc6ny",
  "key13": "2xGA3GHuy2vuocnNpeGW1mSzeyAAU67VuYW2kfR6j8SLfzXVuarzbdU1Qt7QR4YVieHDJ8mC47h86PceQuonCwHh",
  "key14": "5cf8zKRLyNj4xpJFZ5UAkM5hiuCjkNu5HxmvC13nwkc6MH6stZreTdbTvUG4bewCdCxFL9nFxcVT8afEhseUJBmm",
  "key15": "5DV36A71sz3geMLXmxk9L3MWbcZ8qAi1dPKcr64vrZmnNoxt1b6f955xEPYh8yLN5vajVonA2ioZ3uSgEKoKS1CJ",
  "key16": "514JNUFfj1iJjpnwAhHGLEaCcUTZEbkcJD8WztD4gyHi4uaopDoTjn4eBwknJr2fBY6F7w6o1auqoAUoZAxcSuNG",
  "key17": "5Xx8zzHxRrcUTj1GmSJ8MuRuKtTFtQGXSFNjGoQHEDhPbwC1hCiftRLuMurQ2f27ue1ZMGApE2uC2a5mtQLUxGui",
  "key18": "5vSev1ukodCPB22LrcMrbxvhG17sqoCRCscQTihWrurpVq6V4yKAoSYxdm8HzFNoRzs2QrATC96hJEGbcwF9FnY1",
  "key19": "5HL4R4p5BZSH4P9HzmCcRL1sCNbsuZ7at8jcTnFPRxjsubzVsoweYiwsQTEwrVyM2A39ULcZudQVULPVHAhEtcX1",
  "key20": "52SX3ZNNiW5q7pDeFsiJAr2TkZ6WvmeHeebbQ4Xzs8qu15VcPmA11fkdvEM28NyBQnZkVrqyS7rQZqU6pM4t8n4L",
  "key21": "2GHnuyqA5XK1gQFSbMgPMmfnv3hjoGWi6E7RvpbCemXC6QdRQ4T9t5NxrcpWLSDTZpzhd3nKzG6zuqgf77d4H5ca",
  "key22": "HFSB7YzHxD9sgzreW2s7mXKVUJdbi6Ce3Wxok4AAgrG6J9p7NqkV1RC4ghgboBisixYebMvBuB1caFYu7ehydne",
  "key23": "duh4Txc5g9jUe43WyiyRiH5jf2DdtB79k63DWn5HF3R4rar3zRpjkUX6gNp3fVcf8AEoKaFj3S37bttpanLA87L",
  "key24": "2vfk9nH9Xviv1bZ5amQVdNksR5ZpPNYiWXDmk6h85kRboUJXiCrzP4xX9V963LgGrtrtEdHSM3rDQyQEHs1xTuYe",
  "key25": "4G8LatFJqbBxTjvXQBrGS5Tncdo2As828Yhd8PQweJX4pUGKdaHkhKuF9a89is5fH1duWZNxpeG8m8SroVJD6DRX",
  "key26": "69t9kuYxdg2NM67JDpSKAQb3cWJoL1CRftLdNec1wLCd4B5vrH5ABumgCuMXCsMafDQ8BQK6QG3W9HUNRB1Uxcd",
  "key27": "Yno1Y5oPwaSPub97NtZdNNaunoGgTAqHKQsytmKtRWW4LJvd72tvpDFHtbATdyyy9aguEZeuhW4bxGMsAvCYDfT",
  "key28": "53yzq2jCEZEAgsPVDpDNQ6L9HhFFdDE87pL5Q42MM8SU6cchF3BKA5hS6jzrndMFxB5YBKtJApK3JGYzbXX9L7AQ",
  "key29": "64t3gN6jH8M6AaadczB9Lmdyg9RyJGu4wACU2TPSs2sH2xQWSceBzYDC9xzinSinZF2iLfMxaKyER46s3a3ETQDw",
  "key30": "44tPDeg5rorsr2MRW7AzX1TCTCY2qSJEewLWThYrJmuH3ZYh18FJJQK8oD3xoo3iMqaAQzZViK9yz19He7kPJHEo",
  "key31": "628DXst5RvZRuxs8BY5SE597xZt6i8f9spQMDAPtGfm6bYBxmUKSF9VQBJ5aDtFyC9pfzGhw52ksdL4MiMQmQhsN",
  "key32": "61n9c63AxRbgLFb8eBoV1LqjS4tXT1PRBEFuBjBcW4FBXJw1ahGLzE4F9MPVinYyoe15HTbg5RVYDFpe8ASo9JRN",
  "key33": "4TEA5JuUJMYah7hijqPtqJx95yv2JhPJKxroUgmM6MF21rcKoemTvWVQFe8KqLjUDbmjAqRHditzmGxERRBHtunB",
  "key34": "59EsoqcZvQqqeCtjc3PG7QJ13KgQDhg3QoXrh1zni2j6Tuy499QZhU6tJNqBWMqBNKwkZy5mi6xKWAJiLYnPasHq",
  "key35": "4Uquzj13cLSvL6J9byr5LShUwE88bAqM8bRzCuVMq8s25aVsnxW99kHTqXhhtJThokX52H4fSoXXEkG7uGmtcbci",
  "key36": "HYASWLiTNiFQUQQFJzj5XSmmQAsh6dMenxLikXNaa9SXdJxoB9KoVeNeLUtv1DHdtGgWrc1wsk4eFNhSjrj5sSR",
  "key37": "24oHgiGVvnkCaziZ5LDGuF5bNXVTtmcbRPnB27bwNXVi1HzW9Hyv1DMParb1WoEd72p2UiKEdinskx6DcBdonRWq",
  "key38": "4APKC3NYJh5PrKBFxKhmsCTGjDjeaPLvQaQB9y8ZbRJz28ww5Aqk394jW4hePHuAzkmfmv6hiR3FpNFF7vYXwGXR",
  "key39": "2D5EgGcDGzqTH8LW3VY6CxcmzQSJzCWEmzX2EE5CieybAU925XZFzZ1eZ8q2afZPXCJ2cv44ZXHLg6Bnnpi3gjFr",
  "key40": "2Q3apXXnYYRZeKwxEYKjta8idVsych9FcshMqfhA36g53aSQtQSsnTHFdPUw9taQe7R27PZfTfhTxg7feBmg7F9d",
  "key41": "4qcixsXeoiNL5f1qU8xxYJE1n6fwGNYMPoJrGGZW6FRfJNhfi9htK7ayypsiXhSUr3H5oTPj96qYDXxivBCNTFUA",
  "key42": "27LXB6pYm8JCHH3nGus5PFJLjMcpPyjr8Q3BJyW2sBz3xkvcsFab5vYg3X8tdpY2YKS5SPSwctCQQ8rsLPEu6AST",
  "key43": "2pMPHFGqW7fHHZL2TyywXKQob9rpj1zWJJiWkg68vcC131E39HUoXhkAXWwjYS5diwbjsUiPtzqkEF7igeRfnciF"
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
