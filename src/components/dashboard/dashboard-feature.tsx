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
    "2uANvPVCvexsZSFoN72vNER9C3tAUBNzduqGpxZdbJSagLSdHg8vFP86PKcxsLgCDkfudh2n3ACxDwqCxYKNjcYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUTFNkJYisZ7QEFKp7QgHgSZ7mTrXkwE74gRWiJ59PXKam9H7FAAuY1m14K7HQJeDmuoM49VxdpBWpNvFtJu3B3",
  "key1": "3ZMcbWZ9DfSpVAhMmnXhuLePCZCG5iQ5xXXoptbFVAiKpz4qpHDNnZVky9pGmjvK8nVphtpNtUWXPwbeyPX1kyj",
  "key2": "oKiioKoXqM23NUbAJSFfSD7p6Nxr2gi4LpcvH1rUewuAvNWtufCKzA1Lv1BgGPr19cVFmXraiaUoQNkv4WENKbu",
  "key3": "4TAEYBP54uhdsu5dFPUFxoATaTseUGQAnmbh7TC15ocfThC4Q2g9RCWXxhe29zKV4yx416wwe7eUXZpUyUzouYBE",
  "key4": "4xMwwF7xaZbH7zydmjK9GySHkgwy5tmyU66FeGU4Av8SekaD55eZRZgXt279FGGQeaBXtPVyywz6ogM4Us1JFDjR",
  "key5": "xHYQnq5fJJKGfbfQs5wbU2Se5Rq1DcvBeu3FD8ZyR6q5M4rhr9TmbcoQFKbf3dwh2t781TDM9XUE2uTPKiR98Dn",
  "key6": "4yC8eou7yN7JoEi3YmTpF6BqJmYkpWH3z2foS88QPNoehc5hycV8MYQts1iCukoUqPg1Ebm2pd5fnYaMJEYUbTT3",
  "key7": "5yDJhtepcAdttEXMtyAz4CySFPbTLyLQPnAJNwmUC1V6qawvvf2tMGvJjL4aRFRhj3N3J1FqZPsGs2o7mftH7RYF",
  "key8": "1FGXCCFgyRjfLF5N9WXT2CkQgwLpDVLeh7NqrYNAv1Qs2JdvnVur3W8wTC2v6URnhitUiZnuUHCVbX2BxZzCjdx",
  "key9": "4mdtQJwUqG4cEJWBGqmRaKQ54ax1EvqsxkAGj3RpFR8GEKpPPgU4nhvjsSfJCLRSLJ3Kxk8Xq9DHMdi8yNAwLYBY",
  "key10": "oMCeBQ6F5AwkK1YZa1TtGkF26VZEtkRghWC6R2vbMRxj3Hh92SsQtmycGT3B8sou7WH1bWAyaZkVWR6LBYvR5xk",
  "key11": "5zAonaLtTAP9J495gT2Le3KfwoEYGx1cBEm64a3RrpkZYMVPyG34ZucreqPtDn3Dg8CgFk2XFHmwPoiaER8RUVsj",
  "key12": "5vVHt6b9kApafzSWWHWSiR2w4ENxc7MdkFwCoGKrScevk1Zx1yi9GhXX2batvHd8ZEspcD5sfGrkfoaHpniYJ6JU",
  "key13": "32LMAa8N5YBfoqKDwPkJrybuDtSd7DikugW7JQcgK3oZvD23L8MDQHKHFikTTyzsWwAzPEkqwS6XfoHhBpLRjiYA",
  "key14": "aRqnaWXbSoBQhutJEDKhVy8Y57QAvonPAUMdC8abV2odtgvL36US5cvZ56wMPbJyrtkhvgh6Dod1K9D9qpZzKTu",
  "key15": "4yTLiXL86yiqM1KWiSTcX96muzn9gnDMxKELqL5D13kZn9SRwDQDqeyY533RN1yLrwzHQGW8QdqyjFjQhQ1ytBzR",
  "key16": "4w9Vd9tGYHeFWA78rVnD5bitq8LEjb3wzLFuJ3t3GDUyJLGPsWQLNfgv6oSv6AiJ9sjQaoXxhVm9gSMSNeowZ5DY",
  "key17": "W8LyPhR3tMLqEbJmHX63KAmyuuemUEtT6Zr4sQdaP3cPhkZRqGsbsrSfDKUQgAFHco2U2VpKChsvbYgtSkE38my",
  "key18": "1hUDn2tzRQcwBukKSjR1UqLhre4mfGH565w1yysZy595f84LbY6b4t61PRajzS9ka3asbK4H3NXXTmMq8K7nFqZ",
  "key19": "3hpTo4iQQRYnWHrk1W4oKoTS5oG4LKKvxyJqt9XGUH5G8o8RQnhEuj1X6iitN3r6vYiR4ZAPZvCdhheFNAHushZA",
  "key20": "5x2Z2E8FSHD8R9CY7WZmRgEu75GJtegygz8qM3nY5z6249MrcuVGpT2HhQagTq2LAe53binekx9crdKBekhe1qe",
  "key21": "2LDbq57XpDomqPMoJBC1RfK1Zsgf5ispCHzRgDqySCXRQuWwy51XfkehjFGjxFeCvvzpXoyyNA7J8GtTYziSvH6h",
  "key22": "4M9UgEKvYUkKEGWXUv1nWM9exmxgZARVmiwuFNjiVNeT6nxonxHneKDzAtYSwusGWSDdfgFBr9ZqkULdtbk1bTro",
  "key23": "23XnLwVZRqr6UFeUPkUSZBv9YcV2Kb4TY8Z6ppxw3Rvt6tBtorTbv1iT2824JtwF5HMqZrN9VG8SNJf8R2jGjMkA",
  "key24": "kvU391waA6S7YofLdZiTCrkr9k9BpVw6PBTmbQmtL8eBZAdwqCcafhRRrhXvLjfrd4LBjzYqT2eWftC2Lkw2dRu",
  "key25": "SuyGFjDas8agqjJKE8HLVZdhcxvzd29zM8TJQ8qTJv1Z7oeCo8sFv6FkE885kRKEac39JvmgYCsPRw13WbLEPc7",
  "key26": "62ihjqUpDpGnkTuwDGrydStLqFcnya4bvHQsTjPgkb3EtFXHky6bF1jnUY6VnUfwTYddTYRNXQJszN1Z2o4UAfS6",
  "key27": "4kbNxvNkiQqKUR3Zzqayn94dEHBRv8D5ZBukcmzxHaW9tyFUPjFrXZiYKoTgLXtm5wEfEwdVkrTHvmAZ83VG5F56",
  "key28": "4crihg6bmFkggXSaZK3kJ6FahzSxMPfqpzGYU6ipFAQBoTQfCNKWgkDtPcXmVStGgWmTCHQFG4daPxwwP2wwKvN7",
  "key29": "2d5h6C7Ha3g3TWcTfUSadXw16gX4YN86nf2G2SwFpQwohj5g2wAwBUMZkNhxpnXd47sV2u9CEkhWSums1q2tP6xK",
  "key30": "3HrjoLkdMhWM8DZCdzLutDvFpBb8eG82LmsT3fn5nTZVmkME5wNWaqFnXoHiA1AXgLAB73dQZtNJPF29GpbRowq6",
  "key31": "3Hsm9Wvcw7jxroqUefCv2vxSBN68oxfqbtRVewd7n1GWb4A1J8MET8yV3tSuegrabgdxFV2fsDT2C41J8dsYU7ZV",
  "key32": "2p9zant43jWNvp11JQLJjZNhiXp6z5HL3JgHBcQ6cZ4yaTEF1J1fr7UNnTTJRUj3qVjW86Qt779JEus4sH1fVzJN",
  "key33": "5P7pTmuTwyiD5Fhk6QfXbVqGjVyhKuY9UYc8RN9NfiQaFeXM6YPhrYng38ofZnKWBYFuVTVdXyC17Ukv16YyrpCZ"
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
