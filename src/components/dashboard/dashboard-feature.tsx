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
    "5DbhsP2fg1yrdnt9kUpys4r6A6uCYXzypqtowrWE3eWsn9sSsScHhx8Hw27DGvCHv7Stcae9QYgpWmatJnWj3L3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXnwrT8SGSQvUQyXrJa5M8bw2zxqK2iyk2heprB1uTc38oVCUEFBkk4a6T9JkVrmADkboJ5rmLuE4KtSVjLmA6A",
  "key1": "5PYU3j28Qs2awW1xnxDbfrfRc9u4o3aUCgquAYzwUmqPFPtsv7TVdfwsHPJm5mMZeHDfHSTC8HPYmMYV3hANtoB5",
  "key2": "3dsg6WNHKDCYEHdZNZeQWHEZRWmonGYV435Vsmjrun6knjmDC8GaaFpSXALzw1yDmbHZy3meSXnns1WkTH7oRn7s",
  "key3": "3afMCgF3mSrj58qTPwhrXecpR4obMuLW5cbFjcP64BCR4zUWvF83qge9c1wsLsWMmbbmd7wBmEdg2wsiKEgbDvcP",
  "key4": "3vYngfF8H8mqouXRvH3fMay3BE46tGHZnLDSohWiqJn5nSoAZa79DCdxJkS81jL6ye2nHhvrFK5YperQ3bUWddb7",
  "key5": "287xFDpFrn1dsqGEZVFzoS1Kj4uKh3XZ3SA9bhjqLZQgcZKsgpwVBYvZ5A7tPoW6aRQBr2T9FagXNQS3bjmnVsGN",
  "key6": "2kQWUkwtkfdK1eLLYuhPkfV97tLxvXtv1BKM7is5jSaKYD8gnoDYZ54c3aBvhtTiGvmkEURE4XQ3RzaH8oy9MHnQ",
  "key7": "uZMexNqdLfsgNGadLP7pZugULNSWXN5zjp85BCfVzGRQS6C3Y9ZGiErriRUp4uMRwoq7HhppZBWcyQHg9uBzP6t",
  "key8": "4SJjY7WS6JWSdFrnpt56RA9LKQHDQpc3FeHHCAuEYmbpqwP68TcfWifXQSY1FKDjjD5UAwNMdfhokcKJiqtwQHXL",
  "key9": "2hyxyD54L9PNzTCdgYpH5jFe9dZdhh7gjLmd5wGnPjoYvQvR7HD3foNkzjC2sKXjYz3KN2rNP5VGhSr5wtWqkKB",
  "key10": "3K4287nUbVWcGw2MiF5EYhyESd62m7yqg3W7zyHJ44y9STM9MPX9Wed8ZzBoiFcwEZ9tywi2MjcfXZ5iSTrA1FmT",
  "key11": "5HwKtWGEZb9yuPpaUdtY2AeyQJq9R9JX4VKfhuTRLcmPGHxnyFZwXLJ7M1zbN56S4L5mXUsYiDzjr7pwgYxC1LCM",
  "key12": "5kotnX5LhLDm2DJepzA4ykhHtAAdt7uHb44D7eKUNrL9mABY1xhTFVA6z5vZF67hTE6SdLECfdnmm1TsLqhBeqxg",
  "key13": "3jSGE4BNWFELHvkD9oyfcs2epmiCmBPSjdbV91mK6HaAJ1KVmP4shShNFaWb9WcAT9XEkF9SdQnASUZR3nCUpUVF",
  "key14": "2tCTXgbMpU2awQvmtxCSopkV6Fp2DpaxUGGJE9VfNZ1E9PbkkntvJuS2F9UmyHa4DpfbACKMCJpVMqxfNZ45A6e5",
  "key15": "5kKfwQH6c98ZbB2YgDYuvcf5gi3SqkQcyHtjxQ64Rg2A5qvTBQXmcnBCMfk4JsWPsFc1pAn7VRYaZg2FFjkTFaGx",
  "key16": "C7p2woMkjvJxgKY6NFYZwCazYQsEeeQyu7WRvynVk4gfv5bZG5JHGTLJwZH9eMBJkt9CF5qWqnjbffretPJsXcK",
  "key17": "5XQgpzKSasEpHhTRwCpeS1R3Hqqpot2HB7rTiYkB5cHUXK2wTiNSpuuTdYz7SRqDWz3vXy2CLP3MhKMNTpFWP5nk",
  "key18": "2DFtnbQjWeKMKqGPSNVze2vyJbi5jXvvFtcDfijU661u3uUZ1oGWGyzqqQKwxXB9aSqHzEjwdu4LkoAW1ojDnwnq",
  "key19": "4Dm4QfCx5HgCeraiRRnkmtxw5BGLhxN4Wn7TECAtsbuvm86U7fL9pwGyh1vX4qH1HW1bB4vwACoGMN5KHxAKmaUW",
  "key20": "4wvmb2r8784LkkPBWdgr9YxsqZ6rAdPq82fAv9RKE9MyGNmyvreGTn5tXvWmFLA5keYuqEsS2KasFqWCQRgUPTWz",
  "key21": "4324Gnq8pRNrN4cB1UCDmPuT5K2nn9FPzaSWtHycaSj3rWAcc5afbqJ5VgEtpPJtCScMsspvi6MinMacA7ekJVDc",
  "key22": "5UPCph5izzTidrhrVeDho9p4FtdqjLkD4P5cyEZd8AwbLNiVg1XpNFGVYaZtXUKzzgum3LQH1m7GJqwFSEsxrXAP",
  "key23": "2PpQ3Vjoa3RTUU9ZsktH53bs8LL9QqHWVuhmAt93GQNsS6228sfxfG62yURpxvFsYBJoiX39Z9Zm2taysukYDtAZ",
  "key24": "4vgX19eWViu1RYvhQdXsGC2hnQg2ipqF2DMULSUKXNAaLh7qJz1KU7t8eJ8XCqbevd1sR1q5dHm8J8NLNspt8CMW",
  "key25": "5skRv4wA7N6r5XBsHjg4CrCzEqSKmn2RrZq12sDi3EJZ4mZAfw1zeaussxtzXu8H2cwQqphR22cqEiFyRh27VQGJ",
  "key26": "4t3wMTgHppr2cvdCRtj3XUvTGr6oUUTWDM34k3RiP9P6D5r5tS7p8TSE57r2BuvDUip6B7YqMRg1Eh1RoH3GRWSk",
  "key27": "McTZ4GGCe75aZ8EGR96igWPzU4bk2QNe34intHLC3qUjHS7hNPp8diCuTAAYXT8NPfYQLPqwueUuSAcPG7ftCH9",
  "key28": "2p1EiMrjnBzu4hWS4MGSx6HxwiStfrxJstWSqgCk3xfsQQU1NuRMXSiyjXumb1AA68oMAKNRwqm2Ggdmdhdzuj1y",
  "key29": "A5LDdJiK9NFWckJCWWKgMXF19oxh5iKaVgANXecfxPC65x92S7GFh5WgLmtHumoPaVZwB8rniFLhLCN6Yx5ZWRi"
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
