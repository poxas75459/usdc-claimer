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
    "29Q5yjPXiJUxU8NoigrZSGSdbJCTx3RuEapXzjPvQWd1p3hXtCLjg3CxusfsG3EaHCN5eNzvyH9PytWpJA57EdyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ePt9HeHAt4wGwPvbScEavxCw12RJH9yRRtjCR2no2psV7XmmL6jP532UQrJ82AmnVFPaxb864ALy9MdLFru8iD",
  "key1": "3ZTbMvXFznxTenRtDPcpDsMscmRfMiFQM5tXKxz69iwtasFNUFvgHwT5nwKkeWnfMTB2unA4SxRcViTz7BUxtLvW",
  "key2": "5qEtLLSXz565wikpE6LmvuuMWpKPjKMb9ip4dbqCUBSq1L6K3aLrYKZ5wEeqwExX3YgUpcxjvw6diYByXRU9rh1j",
  "key3": "TFa85H4zjhbPfWwrQUdJya7YELFgBNzYdhWSGNyKavRbzbTQt22UF3272jBP54mTDmGABgDmf3toniTzV4MvmWu",
  "key4": "2z2SCjnThCSs187nfNxymx4RVqN6A2MkSPAptoULybsg9T3GM6CdK7mbXwLhyG7K9PAzeTzf1QakEupFd8QgC98V",
  "key5": "3egmFVYr7fm3nxG38qH1dp3mud7YZyi1gcbUMLT7kdgvVe2tQ88kfaAdHT3GRGo14u5dWo5JhCPzvEqxvHTovdD5",
  "key6": "22vBJdctSx34gV1muNqmiPmYsjGhUcKCpmq9JwZo6iHNHTazvn63wqtMRXxU3cwgBd2UhNZ8jwkdZjEuLzrC9nsV",
  "key7": "641b1NJDtYCbBUynNxRAoyvYA9PDZEmX3Q2iPv9eYzCh8omXje52MF7YgZfuMvhyRsgq9RFGzxGFYGVVQrBMTnkm",
  "key8": "4BY9gqLCAn1aKb29Hk4NLeKrNcLjKci75kdknbpgD9BxSgokAdSzrfG1c6Rqv8xWBfjwkgDU5murKQZWZrXjC7wy",
  "key9": "CHDcxSAaYh74eBVyChTgqpScTU5F3nUcbhq22BmLEzGVz6BpwZrNLpvukQXensutweDe7wTMCHTkGpcuTRkVysY",
  "key10": "5LpdZDdgjbyj7Mez3yvgoSxbHQcD4qmgu87C6HdTv9ctLZ2gYv5PgJbbkS45eXBPMRvkXk5uvH7CWJkRCbREDeqp",
  "key11": "2WMrfCHTQK9jbe7AGrJzcCgr5ou5bW8NQeuwkE7qGZVW9ya8t6L4ehBd6ZYbMhkRxe4fokbbgpg7LxTvxXanKXKM",
  "key12": "mC1jV5sErrMuxSmWKJGNHg9v3ojr8WvCZWzngGQdtDgpPGC513YjKRrYsuqxgt8b5gBjACxyxt1Cwae8rsCDx4R",
  "key13": "5aRNTod7KLD3b8VKNn9SrhXECNQrc1xVXo1BP3QHK7uK8WLSd4ZhGSZkdMH4yjr22cvK5EPxsBpcmXKLjmtnLUhQ",
  "key14": "4W2uXrvSgXyx3L8GyTp9Z9w5L2qj4u3kNjCSsXB7WE6F7qYpiwiij5x86C6uRXxWGaJ346ZCtY2iZ4mArg3GsU8Q",
  "key15": "5ZJm2doakjEMZBxju3aBTzgKJr9Vt2wepqvfRsP5RuugK2BVrRiD1ngkKm5dT8nPzMg1466xZ8CuZnK3Lr8BtBLC",
  "key16": "2h7fqcjPEhDqDyrBUQ4dx4GhQVXKhVtfbN4MNBeMyuiijgwLcD5TgVya8RZJ23P7yr3WKC8vGtxe35MpMPvUd4q5",
  "key17": "4aFvBozVNsNhvXvKix2eSKY4fYaNVivQVEP4ZdUi3U6AjRiKVbtqPBSjKxVA6MFHvyKDoPhyGDPLuwH1q8qF8TBb",
  "key18": "63BkvYz4zLL6M4PqxgihZqt6KmAFsZEogdGeH5jYMWSnAjZMdnMEeFjmpmSRMbEbCWSePYei8jXFxL2EzYzXL2UQ",
  "key19": "4uwJGaXSZcQ86cqBKvcYdsoLdqXetkoLHmxdFHbDzUF8SScd5ZwszSHYmrzV8oaHVGg1hhsufFrrSzgwdAnkXcDo",
  "key20": "63R7tF8CtmbmajW9UqPPke1dDcP18X9ayaPpN7CDi2TczBanUyPkSErsrVsALhXtG7ugo4Qo1oeiS9T7r6wUHEwp",
  "key21": "3QbBiwnzmzShbU8XwhmXCf2gnZ14Z5HfNuWry6ca97e5SqipKsAUaRLcdsF6VvECxzn2DkNrzbZ26EqFbFjjsN26",
  "key22": "4DyCyo4XALWZ6kAdtp2cwwsEbuTCtqoVRsgLfF35tmqpCA9oxEJeTPbtzJDM6EsU5cP1aFcddikjFocQs3Qth5ZT",
  "key23": "4gcgP2VMKy1aVNwyedcpdW7TVXX3Lw9ESzv2aq9CPeonoR1NP86YUWwE946eXhcbMjzbwNqHxnZPUk7WEyCDbMF8",
  "key24": "5Bo2XJYeUw1P1YLhyprhF6RU75duLBaM1anPJATtzcd5TDC5gcXCXJn8FffrvAXvqkowupjeCcWVvJ7rJXwDs57w",
  "key25": "SyCf3fg6t3bQPMUkFZZgmTMrskC8aQGKeDGKAimkthNn9GJx8q5TPDNcUYJL2mKxnTMzztFcfVUWET5U88dED49"
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
