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
    "39Yv27mF81VQQd1XeBYp57qw8V8q93aZh7zbYEsoehS9Ds6L7sqt1prZmjcSDDn7mwseEeTQxYcsM76qSXTzLTR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PpbHtr1RxD5iJk9m9dE1V1TLXwjdKY5DvNjGq7nfksaHJ9NHGFTBubAErGsL9BPmEX8RZzscE9uRyzHXTxCDybC",
  "key1": "2PmjYxtg8FVLougqFS5CdsuPpd6zoZ11ej8jxViSVmBmB3V48dbMPUCagLDBbbevzkcQTbofj1puQFHqfHEs3DGW",
  "key2": "2VfciB6dKsXKZhN8BwifhBPR8oKDwuUsDdnvhaJzGbXQiVbxBKmZbyhzKcYjFMcgNViPdNHka8SDTfKVBDEU4Les",
  "key3": "2fK1v5KU2Pbfyvt8wkG4bc79bfwzj2pcwBcX4mQZFGXueNTQr1epr6Vsqdu2GEdctvxHKdqgpr2bc7m4K2Ksgojf",
  "key4": "2jaR9B1cAn1MS6yosjkdjTY4B7dj3dptyhgM8WhveT8NF6zZcVQV7R2uVHyjvveAm9gFjp6hRLpA1b44ScHyB9xd",
  "key5": "4JqVfiL9CAxZ3PR669RF3734grn2zMe2baLUg49t2kXUcMwojrBf5knMfJnaoxLkU9PCC9BaoPHnFHfw2TQM717S",
  "key6": "42yjs36UtnBhDDf9n9PKZHMgZxdt3zCkdUu25TXxg34MoBJ4gZTEPYVPw2n2z1vcy6uPDG8SDmx2Zcw3sA4yHpit",
  "key7": "3idTvRxToE6H36Vc2UKL9UXptDWsP3NTRxS8TPwRWGf5ytoiymGEq31zcxhtpBTiTN1a9uGdx3C4gsRm4TcmBZo5",
  "key8": "eE3EWoVFGqwLdHemmCQYcUW8aLCVEwzNvyR5Z7LXsJFtDwNXztvLGcjX1T5cuoJSpZJyoej57mnxcLhwi2qwrVE",
  "key9": "uc5S84cSMENtDMK9XHuT2Vf1Kg4DsLv1se5vUFpxr15c9j5wFNwSzHq9hSvY7uX64rQcvAUrhpS1r8aCCzFvDcb",
  "key10": "oafj8EBoEW9X94vSeWEsCerSJ5tmnTrRCHX2pLQsiw7Fhj9kkNrTprK4A9AF32mhj3XaTUp6uB6xt2FKyc8ptTi",
  "key11": "5QfNRqXoc1QNqCJYcNMimsJU2iiuHXxf5UJvamh75kTcme12aDR94Nh1JymfSAt6Sc2oKSB1LJTx8pRFKgKdWk6u",
  "key12": "3Hf5vwprvkDzyz3PLwXKZQQr8M3jUs6CJPpQXznRDTRi2LiZEg2dX6nyR2VYPXZaYgNGC94frGwEnjY1eC9FYLsC",
  "key13": "61Tn31FQmsuQUNwHQhCWRz9xGEnsRoAf3m2jZhbboFR81j9ABGTvn4EVaYT1FyGsNCharLbSKUStnsTGxxkydG1T",
  "key14": "5F5VS6MNFwfxCPyJCGpQ5ExsDu3vNgDmKextUk5Ac1NhVPyDBtJHRJMTrcssKcYTkTz2h1ftPkm7buLNenQBahoA",
  "key15": "248qXSe2r7KV69MJx5LHsMGqKC1DcsitDbvknXmavm7ookTacKPWpCgmLWEA2A4phZfw4B27tLnxwcFusXUtqCNc",
  "key16": "31kiowg7V6gbUuSTvtNBbhebpVqu4huimBkRfA8vEjAH1KKP7Y4vP7cRjqhvBj1rD4PbPvoL4aEjjRYWgqqoyguk",
  "key17": "21SppZvS4xopYtkr9FvbqRP8T5e5rkf7WgDwUmwhGweXemQYqu3B2srdqb8TT64V8TmyNG4kHRHZeMfsiB22EcsY",
  "key18": "3L5ZQgBLQEBFWCy8RxsZycogUWaNXFddeaC7PJxgKQa26reHchPuHWGG6BjnRoHXzQBLXFsrXFVSRqdxwZigB3gE",
  "key19": "3sxpoMLM5UxTPJTmGy9jdt287JpKogYHU3E8PNqsYqDTpoS3NzDBys2kjaWqUWcgHBm6RJupMXmJY6WQcKfvhXne",
  "key20": "fshfPAzQoBBvN7hAiSzXM6iivsfm8d6RAiSuqzDwS41m2rDckyRPhB8SwjY7KwVUNKXYNMSYsppH8pC3HuHUtuH",
  "key21": "2dro3fWbr7Xtjgn6MCFwmKXwYxA1VRDhjyy2TUAUZxJDMh18eXTsvVKhxQmdywd26AoY5rsdCG3whuE9vjd94WuC",
  "key22": "YJeaMvjfvgxWYhg6vrrCQLu6TtmQYFVQcSCQ7rbdvFfX3BhJfdjSASs6UY7AKetwNY5qq2n9j1qQZfZbgE9DovG",
  "key23": "3HS6yqRvWb9AzhffU2Qvxx55y1zAE5h3g5NaYLUu9DTgN9GLnJuzjXmTSqcbFJm54HVvUfo7Ruh8fdCsPsFTMjn3",
  "key24": "SM3zagzbaFhgxgxPn3dS38zTbK1JzcrwpsAhQXtCcSHG2JhmVqNaxwCC9VTDaWxbUX2nKchDsEMJmDugFAN4caK",
  "key25": "3EMgmvT58sBWWb1HoMkxwadMusg42xkKfWd2nTyA3dsWLhCkusSM3iHr4q7iQWqQbTg2k9AN5YzuxQNLtAHmJGJp",
  "key26": "5xDjBvRtJe5jzYELgQR8PeD95NcPZg5HvPRiwKeTtg5WEoKNF5sPBTSdQHnXWUsiMmBrrQdfpops7gX7BAiLJjfP",
  "key27": "e3L1VV7JrsgzE6J2252G2mVBPqAfzwFUmast3GY4RnkZPYZNnCQo3dGCWavakx3t2PAqb6VgGogF4GHqYX1RkJ5",
  "key28": "5dDY2rEeM2cw1Rm5Gx4eos6he3JVaPNhCbB7ypJgTwGxs5292uH35UDHZkc4BkquSrm1Kp4SV5haUFDSEuuWPPiF",
  "key29": "5HDHF73uzrmAN7kSpzKedW6j1eNNFz8af2ovs72g6AfCAwMjByvXRKuECVtVFhKwzLQt1npx8ATeX4tUuuLEsMo2",
  "key30": "62AtBho5vPUtY14TH9PiQBHmnvQHbkjRnABjNASgL7uuY8oPTVN6eNgG3f6ytdR1BkG1xu6pw88b76ybUYeQwnAs",
  "key31": "eSr7i78hBdFheEt1f3ayvhdsvEA1U31VLo9sPtaGFvrFsBpnCVb5z5v7xpPEACxY5RkcPP1us4nabbA8xoSoDD1",
  "key32": "4KhG3nCR6a1gwP7LsX1KYia1DKqfkqxXAM8YhQ2T3Bjwrq2eK6pVA14rthha71hide6mh5Lg7bhicBzK4rxbhEfg",
  "key33": "614ExmyYqZZVK8ytHrDkNwMEFPP8c9euk7PW9YSusbWzWkjdYbK932M1ob5P83TBMhUfvvHUokdsLpgieMSPuEBM",
  "key34": "3WFMtWsZJG9yiKeHvNdsTqYFJj4JaBNKEJHN4hecTdiJxnPg7eXgFGpuvSRQ78zCGqu92AFpEYH9MtPrNZ74DMX",
  "key35": "SK7pauWTsjPgDi3WvuFRGWUg671V7Psq4A7NXW4GqmpduTGh2d5KfiDsXvNmcL9MENea46x749geZRUWFrdG6gk",
  "key36": "3gG1epfygrVTKj4p31B2Cu627obipRyzTbWtxm9sxArqmWEL51KKBdwLDa9aCferFmNsWxpdVbyeJEeXzqg1UV8q",
  "key37": "5rmLzFNZG6488vaQ9pZq8fXNVQ5zgovJSDhDRBMCzmBrgGVEH2xb2oFRpvMfZLExQb5o9iQSSArHC7h33XXCLQYn",
  "key38": "4vf68NrcKpTqoZQpQ5DkTkzVHRdHktqG2ME8veq2o3qH1A4GbJtP2MBXmsiw1bahyD4zw2RovptSfUzpypWBgTvs",
  "key39": "3YL51vhqbcXarjPigoxT8gaysX6YXmpqVc96tui2pDamV4ic9zFjEnSqZ8xyxPjFY2teeTDMATdtQwznSho2s9oK",
  "key40": "3gGTrLUuczgr9RH6n7bFUw8DdprRqFUKWaPza4xbtdd4SaY1pAstMrhxTwLtaFa68BrqvUYBYEN4vGGSUdhqMigM",
  "key41": "4qdTXvVBhW7rXLtoqruYELmb6X6tzQgVeshwCT8nmzYkiCB9kc55ewcGu59vtDvfgTs2T6GcHwDGVmUQLygJydFB"
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
