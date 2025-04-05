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
    "4dSSgREmbgyeumrU1sbUSZSq5Xpatr2hVJc5jqdkd4mcHGYFnfF1gLdKd4ZkC1RL8XdDRcERy4Mf39oksycwsCvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u8ZRyR9CSTzZdVRPE4YFp4YMTbZppHukoaJtx7a7PNJyKaA321CBu54iPvpbyL3z7cLXahmYFNaabPFDNGH5LvZ",
  "key1": "5kqHDRMgdFy5xDh4ussqDvt7qWh3oAFY6xMeJzEep1xJUwYQDFdGqxGgv7RvC5RgJdZ399tQmcqiAAnxa6FokEYM",
  "key2": "3KdJeMYmudUFz6yavP9YVXcQQ6K2mqrtNbL58nPn3MzahWD9ntHZi1ScxxWY2y4YwSSSUmK9h54NsyR6eRfFQ6RE",
  "key3": "5mHQfemF8x9fUU64LZVDDM9hPAEwQEX2WyNy57PqCMQX57p7xnTz2mGs3YSYfXVe7jXP2S3xNuxNzj947CzdYJpC",
  "key4": "3ogMvMh8iM2EQP4HALpCppKC1J3dVpmvA98FZpq4ZgtRNiTQTojWAiTfeDUZcpw2dHtNqG3TgggK1rNueSpitqjJ",
  "key5": "35ZwQCHSEgytfXvGDiwUPARzqfDNqbiyVET7Y58TXteM2mbiNfv7n1g3LjYT9Pz8QptnptL9LTC1J1neCiMCwExq",
  "key6": "4oqhtHqNy8LC4tHmCUCENWWHjQNYerRkMXGDdcfsV8XBLyRPz3f45koMuVehphoWzjeKZjEbUnPSCieEiHeTwh4B",
  "key7": "WBamPJkaPtMwuPwBPDgM4qHYo3KTnPEMGaeiNqiyeeTeLwvZe2wcijYHDbL2LchrAcmXoJhTmYbjKpNGhUvYk7c",
  "key8": "5SjaAbXUqjehCTUCVA28XAjsNEKCyQy3YfzYFDdDYUZ5fgokFw81rhc6Ha9ntJZsJe3y9Ff5XK7F2ou96YqqhPKa",
  "key9": "nw85hDFSCJd1sSkF6mm2YFMWyhQQGeETsAcRosCeo1Rm5KtK6RDGPJX1CXcipMBrnGSEoJYpUH4opCBCa91Fyph",
  "key10": "44LRn1okvLa7YQtuXEZRT7xB1cdUzt93fRsfFaLcd16zhg3WfiEBEsJkcU6BQuVB1qg3qsekBi3ofvfgKQD6GP4V",
  "key11": "7A4G4NnW8S967rSRDDkXmvweT6J93UkAVqhLCmarkVrBX8FNZch65ecX6ou331oJ9gFM2oRms1pGDjFqAngcEKf",
  "key12": "38RBtqLPL1mtvGqvZA1JnBht5wrAcGdfnph1w91TNT3mykfkdPNgbA9P4ZebCdvaJ42c77BSJ8ivn9MWn3EXtVFS",
  "key13": "3W4CCPDQAR15fv261Fp2tLC9CV2R4fnS74r2z1euNmzwYb5R35DweWwaK3ABErPjM1gctuCmd6a1URSqMn8iLAn2",
  "key14": "dVYcfayRYVsEWzHw1UY6JEMVnxosmpLJfDwmTRh8XyuoWUNB66BNcs4kxpWVDj2BKN3t2AEu8T5UqY1zZtJQgR4",
  "key15": "3JakrhHrjrytSrMDPh5absDJBP19KmvWCVW1sQjHRd6PhrEEBgnrCdbefGsbkoeyVaiKnrkW8QAgCjhFS2L7hEQ7",
  "key16": "582s3FEYJrKt2w2JpbHzUSq7WjEzDKwy55gga9zTpx5qpaa18bRRryAuWShyCrVWQ7sa7hbPk2ktBemQEaLBmLVZ",
  "key17": "5XE8DnF2kLz5FYTU89MyF7at6kZKmbdNDbPvwWosMDPf8RMfPuXhiHaE4Mc298tFEvuLe3KTrG85j82kz7hWxPoa",
  "key18": "63hYS9sJEKrGub18sspqA1uc76fmDLxhr5mmuCRwrkCv2YptYNyJ1JAzjMtKPKkf4zajCStKZAa4ay7L7fUo3uwc",
  "key19": "3Z7rVeYqNMcDCXfnQVpYQV3i44RkQ1HzL5rR2orMcWBEqzPN9Xo8JqWVHwRdShKtNTkajdzCuC9mefNZzRQxh1iV",
  "key20": "5n6GLBBcapttqE12NTFDVSuSwo7srqG4ym2fNMovVmCNaTEDoWqxq16seqa1csv7cDmkWUTUkYd9uucBUTNAcMXz",
  "key21": "37Qb2Lm6FMtk23VDpy73E9MAkb6z1x9BioJSNaFSqGPN6v95LVd9jtNvcbyVPLCVnZEM7VPejKHuebEUnLgL1iqd",
  "key22": "4Ziiic1GZnQCZmomE2TQnYndHkA2tYGmbcMRLPixdjEciGb9FHUk9gyNtXgyn4zgxwsDi3msWU4ocxEJwRDxKtFs",
  "key23": "5ZcDeFpthmsQFoKK8UfbeU6GCDtcfwrUzxZYqQHwgwr9gakaY6wWiAVYQbyxtxWsYfP8ogs8czX9p1VBf6LSzpEy",
  "key24": "5YQkmc9uLP3ureGTwTF8hNrxybm5Uw4rJz5rna5zsNA1gNzBd2zNGuvoU9TsaqMhCK8Am28UYqmuXmxa6Ri7LUem"
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
