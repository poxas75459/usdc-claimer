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
    "5BDNZfiZ3PmkTVEF3gcEY1D33VneqSV7yKkdf9mHG7NZ7XH1ewxEXnFqfPze8qiHyJ5hu14cB8XWXiEGeK4kNBe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pqwEce3Dr5w5JZTVPmYxL6ybxdTTuXfFUMMf1ZRk7HgU7jhbiFGcLCh4mnjt7P6Lew4bSByRx97VGZFoUftj7vX",
  "key1": "vBPfgcmvCCwt1XwUHqqkiGkZaKvReuWtb3RMAAjDvrws6WDjMuskNn8bPK3GpMeaGAPGf4d3dye1uag38CShrDG",
  "key2": "KJioga6kRmPGJj7QKi4eeZqpihjNcaDocADhaoYsBs3X8P8YZjKTY95r2u45o7C9952XymATkMYrp2HiPkHSPg8",
  "key3": "hG7wyVsdGv4tartWe7EapTwTxvD93HGmijvS1noxccaeYJ5ZX6Xq2JzzYaPZ8TRi6oqLYGMWZDMjLcwaX6ES7Kw",
  "key4": "4B565KpsWDCBQLfBqffjSruLq2r1yiq44fpPGBzj54Cnr7unAFkD7WEB49wFQLaTgrMg6N6cxmjhG1cYfSXGnW3E",
  "key5": "5RsDvvAHKYip5JrXMBc7EdfcMRXzPukuYFLdBRe9so9HdqWemqFM6PWZL1nQN3H5Sffp9HRwpKNTRPfuyGZWqHDn",
  "key6": "3ce8xGEKoZXSHUqLp2jD3s5UrgPPHfF1arbKsAE81a6WrWBPuay2nSTBBci7LpcGw6rcF6LoTQ3s9wYXLc2TPGBa",
  "key7": "oppQgGVDJMXhdg1cYC8VVU6yXyXcWU6N4WrGhhEXAvErWxN3tbQq3biTiVN45hLQzuzUobg3kHZE3KBEACVyTiR",
  "key8": "2h9FKzkGvBXAyT17J2nrLzj3PZ9ps8ktiQmXddikadntqAo63byhyuLJZxBP2EYvi6jQckn9wvabz4iGHQjosFqy",
  "key9": "3BdSEbbh89ZVQoyMZzEQC9aqin4Vv8ofgftZVX2uRntGCULs8dhJiPxRwqMeUiZhKMU4c6KDGWoKeQ8PWiFJEUXU",
  "key10": "2rBUS5s1i4bLs1SZsyjg1zU5iZkfVFACV52K3W6GQ3Cpifq8q7hEPRsTmaNWEevzn8HQxtb1dKvcnpQxedNDbZP2",
  "key11": "4iZ4qKjrT5Rpk4MSq5PqSDpNiEpWXhSPvvjmnbEHSrQfUVosg2TZoFFapsqnFKVCz8k4pQZxn3QMn6Et4YbwHb2Q",
  "key12": "75MYgWPgksBFLLPFBCSdgyfzZgqoVUqUs225iksENwRL4mESXaVmSDvRkUsZpc6xkMWct3GkuMdHH1QCh7qMUAc",
  "key13": "u3X225pq9tWTnbWioueENigcJjWKXrNiofU2PMrWJvHGx7RYg4PFPqU1JD1BQ6TxHnQihtyoVqp2xJB11K9AMqJ",
  "key14": "qcwDoDmZxXifpQrWCAHhdz552CcP8oB86YinxqgpooA46td8hYrXz1rLSmsyUBFoCPJR1CSv4Q3YA4khnc2HQ6h",
  "key15": "4N3VnkdoacMXVaawWX2m6A1Es5nJiYj8gpVhdsgj1sYsCRjCtjrQdQYwPFKYwJciTydsA1Qfwxhe5Z3bXuYtsDc6",
  "key16": "3nNxfv4Rpixjdw6fukAgDrhcw128cz7aELHjq73ohWMMePJYCvDioUdLaHrT1CsDy3nRnrG2rGQfGRX85zLouQ2L",
  "key17": "4D7Ecp8pVvcBg1skZgckb3a1mNghbbXwP8iW6tqSbtiseYhZMdREqJ1hdX33je3ZGw3yfKJKB538UjUdvwTnRs9B",
  "key18": "acvfWj2B4Eoz9G627wXZFQCpUDWuivwcUFSXAxSqwwmf6sUDuu41pgU5tnVaQ2wVFkGjqhnpWTD1F1ZxcxHDT2s",
  "key19": "4LJspPi5rWFCTEK3Frr1MwcxCSbtoZjfnUZJKzVzWRdQ5wJJotZkgcwebL9jxsKggKJHR23HaGZC9jZCVnR1mYN5",
  "key20": "4WLuRt3wdSSUqLtcGR6Fr9ZVoRpqfFraxHRzhQ59EXS3CJz9k2eDf93UkqSTEVWQmAryUdMnveUC8CoyQLeYxKz2",
  "key21": "2kMeyzxcBFs8BKZQUZ84tyMbSwWdbYwq7tjSMGBtMztffX9qN6E1qk4phBNfSS8if7hMDR9JasfGVCsrg7YYbR45",
  "key22": "4Ya6YbnGHkKkHyMregJt7DGF35w2N8NGREpZ9wRpsMD1K5Kha4ndyUHpzi5mQDC26jgyCvee3cdyLoGarqoY3TJt",
  "key23": "4Jz38pHnnVyDPKo7mHp3dYnqbnAj9js1R5GessZh93qXQkxqWpM6sEHjECYVbrJvi8hvzHxjQxonSJ569C31eUGu",
  "key24": "5teJtFysD4acTMfFewXuXsk4JNo2iKj19urv9eFrkfSkGB71hwUftc8vapD5Y5iCWgLQM8JacrJhYLpFZHu2myge",
  "key25": "2A59YTq8CUsF2PpVvqEYxJCjp1BgFox6fsZiEozju19m4bbry1cora3R8Xiz7RuU6ShmH1xMmUH2jPdUuxLDou6X"
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
