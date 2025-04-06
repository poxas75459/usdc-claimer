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
    "38YJnzBSrXRUWdUNhZJWkcD4efRdnUdaptz66pP79X1WirBiWkUTgJLeLYLxwEpC2MLrEm13erUGnM814gpWj3MC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EiCDXx8PFZiL1E1aGJ6tWAK4GW8RZUc3hi4jB1BeqoNMAmPFYRd923nGasxHHyMYcd74zcYkDh3jjHUyYVUhRRD",
  "key1": "Q1WetdnnoZgEGVTP2krXc3UtHzTbB14yG24KuHtXzGp4cuQejjm75SnbpdQrQ9UXWepgrxCmR3Lmf9caExaBMoj",
  "key2": "2Di57DFScjXBNvVFR24E9mF6PDiL521gcAoNb5Aes19ofbJrXN9HBMcZJqkcrMJRobNjZRzEdV9CtPmt1Dp7bJhD",
  "key3": "22t9Vbog1wtDXm3SKBy2UWbfwigQ7EAC4Xf1T5sVqSxkQGYQEUhVGDKg28koNbVqNZujSyxr1r3zbWUBPvTqsKRd",
  "key4": "3MpJt2yVxYJidtPdLqMPrfeQv8aWdezM9sfeRhAPZPKSxnp96NWav92v44x5v8Umz62nF2KBicGkg1waVuKtXmPc",
  "key5": "5HP3K6nPg9sjRcVsVfUMpi3mk72Vs9EDZo1YU9ZCXrukWJJ1nYPo3dcixhg1B9pcy5PohUj3QJMRJy4CucH4wfao",
  "key6": "5ajZuEMYDiv3iGuTouVdYtBrJisTF2wYJv5TvuuNFAVuB2y1FtN2vgFiTo5HxxWjD4rRApiKxxUT6Nheb2XnEebr",
  "key7": "3mjZfrHXVrYVeGNTGSV8Gac3JSRUXsixQACnz6jkeSoY8pJxyKCWGoicmbtT9p9NrHT1Dkv2ZcZp7tiJD7FtVDRd",
  "key8": "23HRERzcAGyK87jF7CciQfkPZkadMYZv2PTfxhJmohGY3MuGYnb1di1KQysZzdYB2y4m1trnJMSNwkW3FH5CPe6Y",
  "key9": "2qWWdL9zcCim6jvbaecVpW9bg2xWdSM4gNRMsRGxaMZDxkQoedHe6BUyeQThJ2VHv7diNDqgiYqCAFJmw3AqxLao",
  "key10": "Pm8hHhVvY2UnCFPaVa4R49TaCwM1eazosT5SJE77qtLmMqarFoKDHazP8ARLfSADDZ6BLfXnonJSsEGMpxuPjeE",
  "key11": "4nDE4uSH161sSFD7odK2vrSVrfLbvX4CBCTnRzjqNhbGoUCRdPPJQSRqBSCWmeTrknhG6KQCuDjZqA7kgR96V9me",
  "key12": "3x8gWdLxKBfAE4XHzPYhPUg5newRoxRpaCahUpZwUYUnTyGGhxoRZ7RfG6YQsRrDUKxRUh4rUfcGbPpGmdseaQzD",
  "key13": "LsAaj7R4a3BgaUrbDwSpScvDgmmXL9MbUU4B94vvPm9TTyZJ7kur8439EP2A9w99eB5UmFs3w3uTZa2dGQfx6eM",
  "key14": "3pvQyDt1TdtsonCZ889FhzPHDtQYc3sCg1d6cGs6XUA3FcmPdHTooGv6oiS3e1HqMG97vf8scpRqgEaW9AFCp2N3",
  "key15": "4j3GnXkEh32uNuecHNHx2EDyULUkHqJz7Tghe6CJceLPMgBxJmiUrLSKRoqGEf6NmJPsNDqD7J9bavA2FaLzVkEJ",
  "key16": "5BYB3Z7RoFKFAngGfPua5t8gypnNccNPVEoCxKzKCYnKMsYcqVy1ZRYMHPpxp5CY5Q7CRc4iQ73CSaCUun9KkrsY",
  "key17": "3PotV5qyJSanCZHTbxhY4jDoqZ1rEYVbUbnN9broxQ7xJjeeeKYQ8F59fukWMf92SNvzuUtRxPwGfktaq24DqoEX",
  "key18": "32j1NAtCapzFoyo2pMv75CL8RLCCDYAjzhs4FByP4ThNZqq1jB63Gy6tBNfnJdckprEfEYcYQz5Jv1w6jEdCCxxQ",
  "key19": "zS5UtVWmFrkgHLLA2dp3J6JVbcoX1TReTgEcug1JV1reU1VDMDhF6H2JwAThDYpZmcdHtgFPGp76PNCLXvpjQSJ",
  "key20": "27eEpPWkCbmt9AVg62n348FJCcekvSb9aZzGZnY8trNFcahSL3KPRATkBymqWvstkugGPT4CApjycEEmjzoWV4ic",
  "key21": "5BcBt9fg1GwUJ8Hpg7Sqg3zMbX3zvRhb3T4NbNZZtSoHz3bTXsYdBe8GqprapzwjdAy8WezEUe1ZZqcNhDjH1iQ",
  "key22": "3r6bLtVR1Qfm8EHVF88wyqAXYJfTCs6skq673VbrWDzHq5N5yEShbdBNV2tp2r2bojfFLdofhyY2n9DPLPDiUj3J",
  "key23": "4DxbEnrZcadLjVT8r9nUKBnw6BEDjxPSkQMMwM5yYCTuagiqr8M2rSftCVSTXfFQKduUe8ZWRTDCZ22gH4ZKf5iq",
  "key24": "276TeXxJEwHAsUKba9Eq9cZT4KKyadAjHe3MLfq3KUKv1ind9xLT2g2KW8jBfsghWharisgGxKTYqA7V2epC3qmD",
  "key25": "2dfPVZQ3KHHBdDcv4pVmAAwG6Mngc73XS3YGwVPqceGLXvqx7brhhnCAqnRt8yC9PonytzZWeEkuQ64k7KkX1RYA",
  "key26": "6hZatUGvvhX6v36ADfQeNUe7b1PAEjZ67hHmE75txB9vDBFUu3Mrs5i1srABrn4NAjLk3PmQCznjaGaZRmXrVrH",
  "key27": "3YKDjf4ZM7Kcf9MjqtxoTtcnv5sahmtHk7SkZS7i2bmEX7sUa2mzZrWhyYvnPKo7Am2CTmdSb7gq2VNo63oiBH9Z",
  "key28": "2cokbW4ZjiAAhLgFfnVskCwd8TtYeGSKsYcmxk1wPnXwFWw8Z6JYFmjhb9PnBndwNAc9DZHLqvnhUSCzJ9kHN1bx",
  "key29": "2ryXM8vCULbcVhSJFES2TeDKpFKrKx2UxHmouNPoWTUjiAwWKnWNBmZNMmDEpLoQtAoSvJq9tsV1mbRJsCMUbGow"
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
