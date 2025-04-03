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
    "3sYTFV76Bt1dgECfYktZNmhaeeZBiaJkc7b4tMyPsAGX3EL3WNJr1y4PHEvQXz5tJYkdG3QWggwkmf6tjQ5mvD96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TJSjF1xpr6fhT4cAwpbocjRNaSwN6hoZX7hMZd8xPaTD2iSUfp95WconvYGzVdQQoZmP4YEBzbNVtFA8bQhad4s",
  "key1": "3irvGJPGu6qSUnAt5WAzawxwRVWdTb24gstisuMxGMiMSjoEEsJXcqim2CzSTBVTUY74jQ4dHksVkBq3pYGGinNx",
  "key2": "4Ljorgwx7U16xuuYmvE2WW5m6Dy29HHWt6sdekhr6oof2aZDok3RbPLWzNNTbCu6XwmwsCkZmnmU3sYGzV7m8pbT",
  "key3": "58R19BukQRJthhguQkHhmMXzBUU1dRCa8YnwshLsdjFM4TUv66B77EJWhMF4nPiaD1bkLoqLqPzxLv5WmaeAjTPc",
  "key4": "4NwUmtFQjApeWYXKTZRzygBTay9GLoYc9kcPrfoBcNkwVxTaNNpwaA4tqk7pYMpzobUKx117QiHjUYJJZdM1BMuh",
  "key5": "4jGoWCnjbF1N2oNij8PFqcnU1DsuRDZSMHJtkJWWX3ntApBwNCpTx8dy6pmz5gT78GRrqbfi3iXifkxGZy9QQcaS",
  "key6": "2XUcY9HdGYooQABtR3S9HXmRqTJD1FtTfbRP6cqpbpakbUVb9cHXFLj7PtQetS1nwoT94v6eL8zyRQkyvHntbusV",
  "key7": "4t4g5Y4xkz7moz9yp5bFBZVKxidDJDvaDTLAF2h9EKcpcm4nGhSDy6zYzAQipuz5Tsytivrj5UbMiQ6EqZVmBDty",
  "key8": "5DARBmF7UGMsZ8Sm95Qo3NFix7BoefBQxQBGSMGpfPzfEbcaSow2BWDsL54YUYAWapQ2RRx2JLEP3GQTraXeQ9WS",
  "key9": "4mCFQjaGqCmTpDNsCG2P6PCLNc8VD49E5677EHWSfPvZ1NMeTnLHG5B1LZuSriDDZQ3dZgwT58H6QCTbAo2HfFum",
  "key10": "4jVN2BipfxjwuLYVKTVzNXqXoUUVSZzj43ACHM8FhAtCVbJUHrRiAuXVTCej5HmDwAQjCZJ3iZhQVoBnqLWhJbGd",
  "key11": "4UcMpknFCTzh5HyyGs8hFdwgPWQvr77Z7XHeAgcbVeniVsigrAHtSd6uYsDdW2r7MKUcn97UjiVy2QQmzD7B9VQx",
  "key12": "2Px839xp8YDcnRCXeJR1i47vjSGUCfBP8JZGssDiqXvanureknYvbKjsJwVUCaDGV4Qn6MiJmXSiq8zCV4nLTEgH",
  "key13": "48N2PL4VMPKAUG6HQGY52W6V1Ttzg61xRcZbAEF3TmLukpsbH5ZVHFEDetMR13R1K57FSHDv1aReGFBcan39281m",
  "key14": "GtcfhV7GBo2aNgium6YXULH7rCpycUo4GmF5XPS1469GCx8ZhS9R6mpord8dV6zbAjxgnZFFmb6xzwvoJxSVuCG",
  "key15": "3NoSS5rPMXMMqkRrf1Cw26rX99adbmBbKb2QoinPVTPXatiF2wCUQAVvQXo3rZbY3sAEJFsG4uynMnqfBycWhrdx",
  "key16": "hNGU2UbwQMYKwn2mtu22JocgGHgHpnRAGVCCToET7vrHwfv128puuvgxExjQxqsTEh42mX6pw9giBrXwuKe3ULF",
  "key17": "nRxz576dYnscM6qj375R1XqFAq3Jp1spYynfaZPJnHMG5HrirZjBj4QzcLkvhFRGjAAucVdnz8SWZNG3Ve2hbBc",
  "key18": "1g9NcSrE9PQcbRWrxtcgJER3SmNxDmWx23EszMyzUJ3wYpnZNA1wn2YSKbQhUWAVWZR2cx9sQnTQpdCywyjqWr9",
  "key19": "2Q5FmN7XugVNeng4XyWrVSaCmZ5wGo3Z9JCA2yUCHg4MyVV6eobtRmFRzDUTFXxg5LaMkosUPwZy4P6Yz1zqwnqt",
  "key20": "3mfo2kGGEZfXbQ6CCu8NNehAbh8V7QqGzfGULXQaZfSroD9qqaDcAofFynNYwXpS1UKWynoYwN6o56vg5epcL8Zo",
  "key21": "4JHEt7mHKVZ3icQyLCascDuSN6TN8i2wfRuUWaBUK3z6VXTjMvMNzeCzEiZAExg8oezbhV9Z1TuusYm11qgfxhFV",
  "key22": "3h5nZUykeQEnhhN2exHEMJxD9kGJq3xVGg6TtUuMjJdtTsm1c1rvWRTeeRoHpwjJsMLhysFECGhcXShj58eNS8Fh",
  "key23": "3kPZX1ahyx77Sbw17Yso4t65wZ4BNDtG3RE2bygMnz8b3ZJQR51qytJcJLDquRyDxzhCdvWrGQJtZX2PhCyuopPR",
  "key24": "52oghwAMW7cZ76P2Zannm9wa3T3XZ7v9nWPBmwaGFqbBzB3xWg4ZJ1MUXs8Wbytno814knwTCXTx5a3SFj59ojmN",
  "key25": "pkdb9imf9ooxEBf4VLVDSUkQ5H5XuoeNnxjibiW4MYF3yRmJcvxmM7oscMH6CYG4pJrwrihHrFkBYjwrL7eUkT4",
  "key26": "3KMHVmgQybTDcEi4k799oqN8QCAn4NQbQfcYg4wkEXjDpdHCgyQnWRYvDQgjRGFQQnbw7pWymvCfMyquTnfu8hN7"
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
