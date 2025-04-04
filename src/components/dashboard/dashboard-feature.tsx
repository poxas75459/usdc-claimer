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
    "4CzdodT3htw1FZjg9jFVGq51usWQC54z4D1mg9xKr7KDB7wDU1WJMqaoQrpa9CXv14uKNVpB7RXKnUbSdrn91tpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UAJyTFxQC9aDVG8Tmk69SaxHb7UtZrM441DVfYsYSCSpTT5K792oKomcF3zLnz6ZcDWNjKp7cQJEuWApy29zmw9",
  "key1": "4Frs1w9Z7QoEosF2Zw18hvYFCw9U5f3HwXtSufRSxnHCs2bV2zwUwtQn8nR9eH6UncxkDq7z1YBxHT2HfLdrBbJ9",
  "key2": "33BhkHcdW23z72fuHA3xy7FnEPox3BgTfRC7Zm4NcDWiCi1mSaVw31AgHLk3QTxvqxMnoXqPHx1CnsUxjhEB5e86",
  "key3": "5diSW2avR5d8t8ndpNN2ix9STBc7wTXzHfQERfCRJsLgf397FFVo9w98jV8kZK7wzikRXVA75h7X6oKLCgBeFtGT",
  "key4": "PnDnVDUsABfJps7HDokwPysCt9SnEChBhjXS8N1BuTDdfgVooqii8keeYQJSyKCFVCUyQwxAWeK97KumyqrpE47",
  "key5": "52eREVuSECnoK4U6xUw2jGD12PogYnoV4TdDLjXoyx7LohnqoXAfCAfh8WhDL7XBB7a2AYwx8U5m4BRM2V241b8S",
  "key6": "5i6zQq9j82DpeLZrQakKJctZVm7DuhnV5YwBsG1vrNVQ4fyG5c28UcwpjHFCsfvY5V8c8Lo3MGNPYE8f2yoWFkyS",
  "key7": "ZCcj2DHJJdiBgWnsve28oAjWnAMkUMqdUwzzU3cwBSJ6eTiQUpAWrU2zThhMoCpZFohu3nV6hTWgknGSrEbugs8",
  "key8": "31oh7YFr1XsgKxabZVNMhjWtAxjZq8PXeUGSsUFv27FVvwkUm78yGXsZgnYo6Uu6DZ9qM4qZafknLLE91zPzXDZq",
  "key9": "59rgrV3Q6jUT2ki2uKJcXrZhmZHBKNRvtmLiddkXWiW4rF4UPiMmBYRjK4n8qeEPj4HRY6yQ3whuppG78fForZFG",
  "key10": "4YhiKn8RP1K84bLmQSGwYr5Up7azc6ZScMMH4mDnDLc8R8PoG69ZDuH9PvBJNarhmoJYTMakB8icHBi51CwG89YT",
  "key11": "3jkHGFVmTEq3LHAmmTFBy8aypFKqCXWb92mE8xNLHDCCDE4ehkaZuFJLFo7jNCccFwpghPwHQVFWMRkkKhWQ6e3a",
  "key12": "3DkbyfcxpZf6vSUf4mc5RnCHPNcf9Fxe2vdp26ivKLs5ZVqdthGwEc7yXss8pKxrqLWQg8bYwoa1Y5qrX5U2kMJW",
  "key13": "3stzcUwkLe3XrmSTt73UZQRVZ7iVkE5ATrEgScQ5Q7aZsqoNoWnmMCfA7LWn6GAq1BYRuibWXnKKHsN8pSDsANRK",
  "key14": "3uyb2qJaHq7ag65PG4egrC9hdrUJTeU1vURe6Khxg8mcpXSYQGFFCethix6WrVBAprYa2zdCyVijMxHc62jSRo15",
  "key15": "GqXV2HeeNyRaAX5ZS2d9GhxT3MCu3gtGaj39Sb9qzr3Sx9rGBFsQGxXEfGKVXRm93vbAa2vgXMUCvPMF1Cpc3gF",
  "key16": "4joMZXApyrLUCiv1ZstrB1QqphhFqpwPrX8cBDJmkYgUgWwu7a7c6iNi7XeNRNqoq4asvfswfZcnZadamXEeWzZ5",
  "key17": "45t8EXFfUHSGXqXtyeUJmkPpdK56hHJX5MWWsC59NN4PEhCuQ6eZjNwooFpMYxNaALkMJZU6wK5Yqntq5933myhP",
  "key18": "3CTRjcF3zby3k2GhCY3kdxzXgygPqh4qHJogRczGn5NATwdq5KoJRUVhZuwPjPuzMEThmN5F4qiju9tcXbQfTT3u",
  "key19": "37Ymwzxxoxb46U1oqk925jbY7UiEKLj8XWMLHG6yuvGqR2HoMj9kedRbuJFcFAXujN8eUvYn6eLn98pNTSeWcw55",
  "key20": "3GBVZUKqvpd2DxqsPGnfeCyDafNwh1efbjpEt376soF5HEG1uk1LAg8KHZVS9fRXfGvYfCJJLCMb7kw8oqTm1bH5",
  "key21": "3MRpFLLeacgM6yWnZ1HxVJKPeL1bg4wNMPH2bga2jbtL3kMGJmgieeKQ8YCZe2fenEkmR8xzZ27fzBAPTGH7Qe1Y",
  "key22": "32EFr225auXcEKyuGTFVTR32N8FyUuTka451TvztQ4KUihY1aBt3k89kqkYtTS8dK9nynyXjWHR7GER9NHvENbAC",
  "key23": "5nVGPw9pgqkTwUhdsX8zhna56A2JjXFX7n7VxxKC5EFTzTWTQMre6oirzF2G9qBZ3p45yEnHkZMnbu2awXzzKD4q",
  "key24": "2TFTTZPQ6ww68cLUo3QREMJUsDUpVUmVFRQBXcQGKBLEKR4V1znZSL8ksdfWBidMY8QuMCkjcHF7iN59HjsxqW9c",
  "key25": "4sdgxevGWVyxpixALfJZEUcGZm5wLeJedWgAHQqgB1Ym6uStXhrnx44Pmx5crnDGtXzF1bxAH8PKvS7bJMJc98fa",
  "key26": "4iotQ3LPwsoAttPoRfhkpeDLRHWZyzFHodzMBPK9sZi3cYBkG2BNNSgbiQ3WeD4xeo48QZTt7xmLit82je75gKPe"
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
