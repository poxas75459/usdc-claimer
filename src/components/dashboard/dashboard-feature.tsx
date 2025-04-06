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
    "sa2aBUL8dathENFgTZhL8eZLPgXHZtc4KSTTKe6Y1U9QQTP2y4GqFfFSqrbcrnYUZBPHL89vBZp4iwUCfZzG6hG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4awno3ftKMMj1i8dvz1BWDdHDjmqK4rappFWPHTjsuSZDoahXM8YevKvdeidaBRxN9pwAdh3tzkHcn4enP9ygGpr",
  "key1": "XeanDVXcXCsk6xjutsaZJbDgS4iLBysLuC8zhoHn42eCv7BaKomvMgkUio4vECC8zg7vfEXh7V2J8kbcLoJqqpi",
  "key2": "5RXnxEkn7tXPMPgCMDT4shymEUJ9AbX7emEJd4GKqs3A1HfsXhQVF8uvrupQJz6LAVdS8vehMo48UMTg72UWHCB8",
  "key3": "3fnwURAkCW8TmctFhsbTmZ1RF5KcViD81b8Goe5Y8QEQy1eh6jqAhTYjY2zemn4NDqzn8rmUk1XNmMfSn6nD8mT6",
  "key4": "28jMTxS1f1MUaizCPnVFG1PiRjCb77FSQ1SYFLnLWYjrafJ9pRBWWT2Ji6NSXsGCDGyvJNCkWoA2ZBHyuKUgSEdF",
  "key5": "9ygd4BP582cNuG4eFi7mbBoH53qnniXPVm1uzjybafqMHpPEDov4csdQtjes4fLXzv83dV3H5kQj7PVvkp8FbiL",
  "key6": "367gtnLoRWVTVd39dCEytRt4v7mPhc4KWAJMNrWGPAhYnHqvjWVXwPoNukhquMo3JbdZGcQTNXSeve61qxpaMwV5",
  "key7": "8ibBDPagNHf1jq8qCrNQu8Q5azuaWDTATVFgjw5NLqpE5HTxPXqhQp8ek34UVgP1mPLLxWG2qdJrPDeNgGZCqyA",
  "key8": "3GWtPhWqr4fyx3XchrQUUUUq44849vz1YR8ywU8KgjAfsSKXxbcTbmm7b6XKgBnHPwQ76GKyQFLkxUdmPDHicbDA",
  "key9": "5CqctpXuBEa3stzw6q7PmGjx2qiByErsRqoRLgYgcWzLyAT8yeKcsPJ1vjp7wpg4VxWZy9EeqchLz7uMkBGVwKYm",
  "key10": "2tFVWcuS4w2R8jeWCkTEEjatU22u7rcZ84qnG3MxC1abH3wjBW1uypYK4NgafM5einjfHf9hEBNAxpCh3EqZD7rC",
  "key11": "3rzYVeviRpFFSvzHrp97bwzTWSqz7Ctfw3cCyiCGbzWYUDQJnuu1Q1RJm1jwq2JeNwikLSTiF9C1WwXbqo3M2av3",
  "key12": "5bMo1pDPa7c6nGV5uKmHCWMPfVtS4cuzYhGSrEwic3Qfes1Piirsd6kPtcDTEMnd4zkuFbRMX7zi9dnr45WSaLDv",
  "key13": "yQ2QHWZyQFqQEb4L3KxR1JPYipJwLMgBZf7Af9jpCLNeWdcbLDuhjUb9aJdakN3Qy9ibG2tSstCxXgLHm2LM67z",
  "key14": "4GN4fjhmHvSXtXc4v2CyMwsgUS5RisbZpDdzfxvPUReniE9gKgzSieJY7EQhCRE4ixRnyiqzFS5FWwm5GFiUzJHC",
  "key15": "33xe1LeMbhrPhyKxw67PrVuVyPZ3JJN8LoyP69vDgz2AnfDVZbQamE23JDgMWpgEQVeG7oEwviRdRZMc8T2tcMyZ",
  "key16": "39gfF1BKEXv7iSkUq6dzbSTQ47oEJuuWvEeTk5qxYMcGtDmYP5pRP4bowdtXTvh1LzJBMa1apqjM9YwarzhVAuQZ",
  "key17": "5QXbCwNN3PVnJT4wgoaFa9gHuPfTawjQZ8JRs41JbVnHpdUVEEfj16bJ5P5ek7fZBTNQTWYCmgRvBxoxy79BeXTo",
  "key18": "3CwEEyBChxYXGun5yx7pMiKoDfyqRvVrwUq3aqBT4SVmwmVVkd1G98wCnZUwtuHgmAqR9ip4sDMqwyvdxebtRW2y",
  "key19": "3a3q96fgneXgGN87PzUtoTxSiFSHSwfZwzg6N1Nc2VfN9v28EXSNy2aFDz7XtiLoM9JTnUsX46G9rnPGPC1vbM5t",
  "key20": "nM7o7CKhzCrv33mNr6Fe44D9uhqtNS4WDpgQccXpfdWYuhL3nEhC6vgx8zeVzqXFLFYHPDSFP2jPT2BZS9QS8ae",
  "key21": "64BLRuRqzfy67vdJkcuQjnoszqV3uDJMshWWaiF2MRosqWv5VMUhZXDnKQrt1BmPiZVxCqH3g99WEEedk7FhprT8",
  "key22": "LKL1b1WQoTCkR6zkoVUQJneq1t4iKdtDvqKZZsXPnTWZwUZJyA7rLA6yQMUDwgxBt5Zvn5VeRxfMSdZFMWjuFaX",
  "key23": "5wZRW6K4xZigNksmty6mS5xWpyNSLWgrkipmdh5BKircK78XxNhQWqYw3jzSTTh3PrLKPwwwApSZAP1QBGUZHY8W",
  "key24": "4cTuiS3JvrUavioEu6az78Zk65KG5oX9N71buMmDxic8RfoZtA45YzRuBG2HRR4XPtUzHiZMC5c8KK7iGih3ZuLm",
  "key25": "2cbN9tftQ8AbLssEkaCpNE9KkRBCJ5sDQYU5fB9e1AZY9A1b5NfzaMfERhXFxJjXgKMKi5H141v6f7Qyh1f8sGoC",
  "key26": "5vxruqwDzzv6WEX1BsCw69dBEANmYj6inXDBTdiqqYtBvgmiUQzQxMPyHLYSBeoZBMDNLXowyrHSGRf2S6E5M9Yt",
  "key27": "2qSSApxUxu9EJ9A3MYAf9wXapSPif3hfTYw7sv7U8HM2zgzZ8oJ1YXNTZRcCcF7BAJawBzZqbWTkyJ2rHu1hwauk"
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
