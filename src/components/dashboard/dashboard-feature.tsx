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
    "51kGUjJR7oXsVk46b9Di3oKsHt4VWVTUTkter63UNQhmYnhQnzophtpN5g7t7y4ntfXunJv69JaqRmWGHg2hAXpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jeGXyKvfu2Uj7eQdTSJhsEDw1h3c1PLVSGMc4LjQhRDX5X1CzYXv8JKbywWxZthfTxT3nNQrACXK9NxFdiLJpVc",
  "key1": "1SThfNbSVkY9gSLVsCvHeqtSz1AP1Y6PkSqzorvq5cLJeED4YtrtYHjaxU3adPGBUoM5siknHQxT9Hpsb58EHhT",
  "key2": "iwG8S8HGu76H88wScpvY5aJEykskSttBSnKktcxH6hNg2uHt3ecTq9p7GHDiKjumL7f92PdGWVMpycY4mEUaHgb",
  "key3": "2nqAAFH8oTemL231v81DDDL5WbXZ9vNMd7768WrPKRQ4vtz8B3DsGzc5xtXbvGuhs5xAVNCHeaZqy7WVmymtfUhi",
  "key4": "Wa4abSjFcZABFPmddqBhTWkgYdcgyukyL9iju3vcaarejo9xf4kYDbyLtPSuppwdretyPaA2z4tsFSd9jALzrNC",
  "key5": "2toBTrR4aymNqSHd1hJg39BNp9XHJjBu9jDV4nvhqxTuCZHrR16jpYnCzo8ohdxBnA1fJpDrWYCAJwdAAmeeoJWd",
  "key6": "24uFdzYpX6Yg1uCzEbQ6hsYb5Q48PmCVPGEZYaYL43x4c3n9CwnA6GhY2YMYbcbQuZ2YwM5fEEkBJJiaLzVXgjTN",
  "key7": "3KeLYSZB7itWftCutYKdpn6sUJbPPitGwB1aJUJjyzBPNNqH1eo3JW4tgiKAcUA7CeTVNZXsWFWzitXqLzsj7fTC",
  "key8": "5AqEAZ9XVVP5rYGJvEhcDzerqVymcrEW2yX9kN1MopBAK6zSHwWr6gj4jjyWypFtna41SusLV4WKmbcXdjtAedDz",
  "key9": "5vgiK3teHNZRJK7SjfgZqeSJKMwQK8ZTiMmwZweRruqJfqF2LXcPEWJyyHri2uqpELCzAouuaF3MCx96an9JtuMT",
  "key10": "651HuTTAbv8tAB3Gsgb6oGRzYiXc4Faxbj1iZ33LRrjrFL7D2jsMwE1jMDvxiR6HjSiUoNcjQeqPnVGkTKvzisV1",
  "key11": "pMUBffUN4uq9J2phQDzFJqvFtwEP6sfts98QDpBuUgRmTmGCTsWJaJEDaXY6xfc7WTUHH9FEZZkUipB3ZxrhF8d",
  "key12": "2FebFCYbAqQukGGRZ6v6YFoTNFReXghGjd2s4ViP8jApsaRV49YC7KgSdrVGiDhZLkNNBP84kGY2SpuMZJ2oSx6o",
  "key13": "4jMtKF7LN9ewtqxHa9p1GnKgEeiBhimo2HgBbDSjMMNjSDx7k9ueqp5QvNzYe9GZuDB2Yq4Vtht4viaMG7UrFg12",
  "key14": "5S19jjmLYmPAZG8zHBm8ngMspiGMitBdBnbsUawmmmJ92TUxuaXgAh8JmQZRVn2oTWazLu4DyC7FT9FXmvVinQZY",
  "key15": "QMnKtC7kqiSQCnfwZjbVfFtjzHgFGvUnYEhcWd7mpP77tvtJwHUWWywrLKHXEKUtZq3FTpKjZofYJTaY4UJMKrA",
  "key16": "2kQJv2BAw9UGzpQsZUC1Ecy2HrS5YHR1ipX4oXYNirewkqQacBVwmFb7m8dPLUSHACPSpq3N9ju5qq8EN71DF6H9",
  "key17": "51fdNb1sGqMRP79EfxVqzq1h4CvphskyABCQL2vNmxJAxJdL8kRkw4g87Z1chZvukArfJHsReq7vbPAfxNc5njjs",
  "key18": "27CjDpk6VHHpQ3qoBGCfhGTGCUwpbpazaAcJntqjP4kxvwqVqpYQL6hb4aXaGryHYVgHNBjtWmnYHnbgErXL9mmo",
  "key19": "dn4P4dNM6MVANr5Xc7u1zeBRuk1vAWAAX2DbfEpE7JWWgGp8nYvy87SN4zkpCcThz7PLKiVVz6jhyWsr4rdpqri",
  "key20": "ooZfq9kxBwNJrfF54qoFudyLWrDcomfKcz5A88eiKVS2JT6wRYijVhQrk2DsaNBX1YKgqEJgCZ1QmRpT2EHAjQc",
  "key21": "2umx1XNYNKkLUPbsFkmrffEUkHbdLBUZmBHstd7wKqZnyhEw3W6dksvnsV865Xs9LLwAbtgi16Y3v3yRE3sUQDCb",
  "key22": "4RxETA84SkK1nVejghEYwbyvJuZyabhUkpxazgBGXu4u37eFJxq8QkgbPEqMdBRYKBvtrDUoEbY4wLRKou6LzRV9",
  "key23": "2yNvK1jcbxt5hhpfxiAAJwQ2KKeywGai3MWyWMAorBin2WHXCaadmUXSc6RDafoBL3bLehKxmEPXxSueH6aQk5An",
  "key24": "1Qj9CLuuUCNMZ8aEJhEqrcLWWriDmuPgWpddvLCcb6uJehEhtbpmhadiWUJ8wkFxaLC5Vv159Mh4uUrMxndDjbT",
  "key25": "5nuRoWgmrKu7k5QtHkoBPRQkJKYnnQCw6zeTrN78E9iXrkcatxg9bydsntQCfXjS41N6Mybv6qvnaCh1MQ4GsKMn",
  "key26": "2Qz8dnzCW6wPguHAYr3x6LyZY9mUVFVnDwqPFPrcJh2eXPLoaBuDUuEnVWePw1xenphzQae59vNGQr1BW8QTx2hg",
  "key27": "3nUTpkUZuwQYcJCWE1gBXCFxwdvwvTmtM8WhD4fbQXC2ha4D8RuuAENtjQDR7rXrLBsnXVpA1tcF99Sy7iBToMWs",
  "key28": "65RUM66BE9Btbfb7Tvu26wTXqQCMDZvJvQjyESd9Mq8MEvSf4izAhgVSCR2NjhthR3yg7YhqQYrGh1Wrxkg4rhQu",
  "key29": "4Co3auG9Mxve7R4gC56TvFQ8i1ZsF9ZcwUfkwLvkqzfYpdSmJKLWtjWwZWZe5aDHU8T9Srt8qZPbuXg17DK4cAj3",
  "key30": "3tb9q6x34K1szvMXayFkuKiHsrSb6jbE9HvHkfrWUNHTqt9fasckVH3U8AC22HmV5PEfTruYpLEfsGSEaYp1ZvNL",
  "key31": "4oNrsEZw3M5H7Tv3NqUjvbLkD8jgRDTDgQqyLqzkiwRDT7hyx6C8Aw1mJgBSVi3wph1KrbaUxMXD8HzwtNPMrLMZ",
  "key32": "5ti21Bk85Sj6gUny398dZH45UibMBL1aJb4PGi7DPBjBJcESAHz52s14URM4Jtfh7ATAo4BbH72JGmN3QsijAHGC",
  "key33": "3FkFDCRTnm9DD2HZjrgMW94ePz7hYFWsfQVg6Gcjsa86Kz5vaJLShueV9Qm4Hg9P9facS3g3om7zqdFJxVzLQATY",
  "key34": "2miaCRTxGtKyPLav7KjFNL4dLYg9bHGEYJjk8tjBxmC5zHnMVqMpwWo6yWfg51w7Tbmhor7gc85Srv5b3dcaEc9m",
  "key35": "Kg5UFGCV3FAYWVWLa8BHbZ7d25bLeatmRcVzMjT3d4eUnpDjN3Ae8EM11f3jibVWd2i3qURRUYbY1UsA5zbniFv",
  "key36": "3XjZg1id3CaoJ4DiKUH9Z2VZsRqGVHnXJCVKi9Bf1zSvmNp9mvsaTgdpawda4hSweb318VWHMDwZpFm4KTHhtTE4",
  "key37": "KreECtqUy9aRkpCFksnFMgi17Z6nnm2Weh7k1ucsC8NJrJFiCNXrVcF7gC2AfbYsVs5ppMzqXV94NSGfRpjoKD3",
  "key38": "ESRQ6hQxMVyR9nTQaETEsRCvN8L7ubv6ug3zJ5ZBw1jBPJBZafrK9Ge3uefFXLUp1yhJ5uRtRsnn4K8qCmSveQf",
  "key39": "doeuUkbM52wHhj6x5EnWwPkCLdwehbsybjwEmtZn7qwg9Dsm6yv7gMMreTTedEXcpD8ppwDhnNVbPWuR18jhWcz",
  "key40": "3S1fEKE2T5RLz86gHo4n7h7zrsRyimawuxZbh7MBSmKN4vLiPf1N1wGvy4PUpjU9d2gaQEiMY8wLGkh1Gxm54uJp",
  "key41": "2WpnqDtkzKwLg2YBYtF9V6goE33UGsZHyWqGNHsS9c9yJcPC5xBeom8jqi9nSqHpRazV4Sk4haPK6jFjtqNEFHrs"
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
