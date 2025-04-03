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
    "5GpZvXBzPmT1qPLp7VPpNcMCF4Qzehd63dbe9YmXNRAfj1UwEAciimjxqZUuy5sabWBtyWHDgYkqeBUNqzqjyZJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x1P35rnvkYAPGb4Sm6z67tf6gaLpUUxKwLoNseWfgxxXjDRkfY1qxbN3DeAF7Q4K5ELVBYXuAH2vuBz2eTbh4gu",
  "key1": "3KwJvvssyGuw6QDX3tGdwqWqTbH1AoLZ1X3mPsuz14NHUD7m6u4FRE1bnMfYayvmt6q6xSeDuWPc7Knok5Dm2QRW",
  "key2": "5HecESMrdHBhKFFgZkz4FYEuCPrvZK1GrHszuwK879g6LpAarQDRoK4JyKuknPBnQg5atxV24H6xqBHS6YNGL4og",
  "key3": "55wBQ6tHEoGPCjiRU2g5J269BmcBq66NphskAiAGJL8QKRNiMEL6KB51n9ysJxGEoP6d8ofT2FHNLGtMPn8Lbh4N",
  "key4": "hCiZBy6V5Bk4ApybgeqChJegcL2yGGYGxLas3T4BjGgpqD7Cn1uLqNLR73apoaFnu8Nwcrif2xdi5UdXZVc2nwD",
  "key5": "3zBbohhAgKoNvSxdXov5ycZFWsB866WoRMLeB6zwMzXBfVLNUebCdsK5T8bz7FfpLXydjWUxNJT3YqAkzQ3YqxXP",
  "key6": "4YGiauDohNguEvfHyoBsc4pEJWNgq2CtSDxePGZiHZcyQaCp4xbaJm6PDBvEbHzRUSLw3LecNvKqCws39fbhodG7",
  "key7": "5tKsaMQjmSK1TjZJQP3LYbpRb46FqpSBYzMV68wyeNSZM63QypvbT1LVDgWH3GTvSoTo5yAs4ySnMy1igqrFkxnw",
  "key8": "4BrYvPLYrEaafx6fTXFwqdFR7KcC2JxhQ6yJnNWF63owjk4Geupqf9VTpLxU6vLEwUf16ruzN4XTspxccR9idArE",
  "key9": "eY4q4xPPWXW1Q1n9VuLH84TzYizHS1CsYbthGeSPeenWpuCVkRGB1itD8iqF2wcxvDoNARTczTmGE26TRVL4gS1",
  "key10": "59VCsVGA8fc6aodQ74yVyL8BfVq5NTrMzZzXn8WjxHXLhSRVnAhHHB7A5wMoFYxJXinhLY2MrpkmFH5xRVhKhMZb",
  "key11": "5TmE4ymNBgwbsJXLX1z1tc6GpaN3gPnp1AYBYtAfL1qtm6Qx6ENzzYqVYArfcC2Hvb67bqh5e6DZ8mVtTBYY3oZs",
  "key12": "VNk6KTMjyYN8iAyKGQMKa5L7mguSTx5uGRa262MqxW58zfLcxhfkonowdN7uEp4TNDKs6ZLG3HNStKHaqoMXqfD",
  "key13": "26bAgb75RLjweVaeWZEoJtAbpKBixca3EBF5JszfqBPgENeCfW3UMgrzerHPMG3ZzrfNiBMryS8t8UDVoNdnnNy7",
  "key14": "3vDMjPW9vFtgrjv27UexB6NzT5FCbjxjMXvXVRwe71sHMuU9Vfo3MsUHQjYwGKkjN6b4V5i8T8WyVDUnx3g8HxPG",
  "key15": "3kTcYY4facCcusrA7Zkbh4nRnxywJZH12AaDrJdfKPd4vYq5RevxzM6euBR9QCVBs3LqqKrTX5XyTdHsi6RVAUv1",
  "key16": "2tPbqwoCywEnGm4FA9k45LFDxtKvhbRWQ2HaLCm5b8jkEDfQV4HWhmVngCcC4pvanzucMg5CTMdGWZuLDWccxQrz",
  "key17": "WGEhyWu9Dt6LfYbn8fugQD3Zen97Zt7zWX5SAUjuQLZ6k75UKAbAU9JPWqpYDsBHvKxHW46rseEMo6F11iJvCkV",
  "key18": "gUgFoNTSRJxakFnGt6pHo8Z3SNFAYeAobGzQxp6f5Ycqbha4DpRaTsoeTWt4SyPTVZvBLj2b5DN3HbtF5VhdpNt",
  "key19": "3We1MXd756HvAX3FYYiHBHtFHJe41Pt8QX6dnJCRiqCnPcWWbLeHjBhwrohAU4p6h29Ynue4eEvGSc42t6PkbE9K",
  "key20": "2GeMwQPsD2A1tS5RZQsFJifqyNkgouJku5X7UtwvyZqSMrxLyG9WPPJkn11er62HDNU3aaotbjKpUVjFa9Hn3ECB",
  "key21": "2a1EJbzmCi1JbBJKaRTShbQbARzuYTkE2exTDez5wzfi9x3Xh44ynBfVqPqNTQ1fqPFuewfSPEyerXkxasTbfe84",
  "key22": "5TkSpPWNFpfVFjPVP9JbzyKS9ARpj1U9r3ZKvEuctGcrmE7astkxFHky56mPSzyzd4xizod1ytmWLTg8aSGa4RjR",
  "key23": "3RoFa4D26pZjxSGYVX6GNGkAmkRdsc8eQRMjTBrAfhB8gJSQL5LTtSJz5APhhq9CovDKu3kBs5XAEy8QD2eQBaeT",
  "key24": "ndcuZtKUJrWBy2pQLWQerva9uHw6Y4fDN1ygswE4Ches294Wy9n65veDSFepJqjhsNfgvY6koXSChtVsD47Jin8",
  "key25": "PMaAn9SPZG2TKpkMGmLLPCcMn6cdU5apLLNUF5zVYEY35gQMXyNxPmeaywGCpM332xDcYe1yUNatGHKaxLdYPcH",
  "key26": "4H9nTkpcjMCzkfXrhmNifovG7hpcKDXQp1yvUS6qz77mNTjxd1tcxuREPZXmcXWLgGTWD7UUj5eDp7pvSSJNBZaV",
  "key27": "5pWf5XzT6pgW5xEzjG9WBmrLXw7a7528xQUZNjbdbuYYdTCPKST94tyvLod6pWmjoGTc4nHYhDZmjE8XV34qkDeG",
  "key28": "5m5N1ZbtrWu8FrEgit2qDLHoRXbpNT9diH7qDLoHtxTTRXnamNRMum9FUnZMkAfQbQet3rohPTr8k51dDjqnjHyC",
  "key29": "5GPRSk18NYEoweZNRWzKeuDYf8Mefrxupx3QDoiPtUpeXZug1K19Zv81JjtupW8VsHteZy65YLWMc7tuFYzToN8h",
  "key30": "4MD6usFsypUHgURaeBqPPw67AetjDr7G6y5HMei8LxVzteCrPELGkDMiFokJDhfGoQGTYNznLhyrra14WuKzmbjZ",
  "key31": "Q7wxvpJUdVttaarUSzoCPAzQFnTG1dL5pN8ZoRRaRpaGBUhVcVFagy3AVgsRwojUmCQkcJoAvVRrCxgiNd4S24g"
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
