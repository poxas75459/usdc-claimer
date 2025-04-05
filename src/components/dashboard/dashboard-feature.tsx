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
    "BC7nuNpV8WxL4nncXQZHApPbsYiak33Ban7Ki9Jmaxfa5YJ87FKj5eS1JLCoMZm1Li2d2fj1NveRgs7Ndfm4pWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49oLoWFERLtYzSrpkdYAnE6QGfzfpgatoBySpe3gueM6PLFRNKokaH6aw3qofkz4M8kVphcxsH2i5dxQiHqWgAwH",
  "key1": "S2BniKtSUbJ3vQSfRT5QxtqMuPuf5qZqwmiQCtXVSQ8fH6URK6ZSf2R48tLUP2xAk9y2ApnLsxXZXtqbriVKKMF",
  "key2": "tmmP69PZX1YCpK9jgxbXBZGGwkJH5XwcoHP79ZfpARWviF5wJDM1NTT3x1LwhUKx7yBLGnu3w2vy77wvfa8SgY4",
  "key3": "5PwbWy63gPdr14QvnGYdxQigySCdsLCn2bNVMtZgG64RvsJNuBKqLdYDu3SpBmp8gff5Kg9s8ug14NbjCNwJJreQ",
  "key4": "5DEWHvQsE15dg1nSPDVGTmZXxXUN1hwKyL5wBnKVsjGz9WFqJmJPRFLLCbe6vS96h36DyADXu9g8UxW6Ao8CaDg1",
  "key5": "RoFYGSwBNgxqgD8r6QQwD4m3pZJDyw3gwsKTyx6rKVmJySrpUNxapjDEbtBUY63zGoH8YUpjykXuBRrGXoYYVT1",
  "key6": "5KarrDUjYWCSS535nqAsrAx2yCFGHJCL7rKVE6ELPzoPaV8cxqpGGdX7afNFjxBwnsvQE6BUmhgGftTY6NBQ6opX",
  "key7": "4FS8qQTX5Na1bx6DT2mXNZCpgPaD7zESUWXE1M4ny8rxxiH1ZTivazTiV1CLyPAvVznmD2pqobLAghM82D3tHK6w",
  "key8": "5CGurEhHG1odsG6PCS3RmieThp4KHrhGRQJGDVHSWeYaX9p2PoR1mPY5qwXniHQjYMyZT3Dm4yn5YEyxYMWgJBry",
  "key9": "3wjZPjKs7ZvdcMjdrcJro51SZboYVUrnynEHfjnUBQfMy3oTwBvcBQDT8wgHNADAfLsNn5NPXmas4crJrrXtdwau",
  "key10": "5FPxn7xbJBmgUYTpSQQN1haKpJXsyW3EwydmW6uGGCcFUQdsC8Z5Rikpq1BRgfieQjjtEzjuFRTjMU8RJy4q8vtK",
  "key11": "3FTQATeh39WcbRBh2JPZ8JNwMrckFMUtscKK3VSnhzS1Jk9hPANCvrEF2bH5N4v9mF7X6PahqD1u26eiQUAVKHv5",
  "key12": "wyMUAn8FuQztHM5s5GCCwyUFFVriZRnVdNF59T12Kj6Ut4TTpALdbvbwGZkNKyYFYKiPW6yf1LSt6Uz7GnEfF9i",
  "key13": "4mv3fxD62KGJ2AUaERJAQwPeoUTSzYgUz2qxr8GKNJZPnCRYsKEvZh2ioQtreT2ZcYrbcpUwwEdcyBw5yZRFSN6W",
  "key14": "2aLEVJ811J8BAMbPLApukGcNsnEKz9PrnoTwhq4m8H8NaQEAKCt3RR6wrJUXQ2fGoQNYLUwSAcB4gZjmwDYgBoeh",
  "key15": "5Vj6AGGwgGHbNiHPdrhGqkyL4dWK1jG6XZ3grgauA265pjFTFWanZoCdVeoREKqJ3DPPd2yweom6JTinJ8pGztCf",
  "key16": "4JNGbRVQWd4m4oNKmobKLcH1mXUHTDPf52tqSxcZNVpQbxgWDcjidifPtzzpg3g7YMwv5ziAVMRnD9Ej2Kxcmdhc",
  "key17": "2KeqZea3e3sTAjUFPmt1QXtUtUZqpUFiakQatUF2PCHYvPzZbsDBRLoM1u52ZMPNESPAHFS2KM3qUHxphk7DuWrS",
  "key18": "raNAg1XjBsvgnntfuSpip4zKRQvRmoiifh8jbhLUQ2yxCXkh6oWRAcYnGfvmJAdG3qNxBfEkFRqbcfqLLTyYQHK",
  "key19": "3Zm5XPX2MVRwWMeiMD3toNCFeaEdVZFxFg27Wumx2ePMbA25QQxFTPGVgp893kQKzBCjoF6c4CBhDbzrxHhJdDkc",
  "key20": "3jj8J2Rdcg4EcDSXgZaHipggHjmJ5MPEqAi34wqqGt56vMT5LKHE24WaywySfzMyb3tGtjP3SjXjGQno5VAoGrz9",
  "key21": "3abLQWV7Mt8shukRvUibG2zskgxdPHnvwhjyLWR7KjPoFAQRD4s2xtz6WMa2yUxCuxmyhnvxGVzu5rAXtTo3qSd1",
  "key22": "5Go1aLiA4pwUFAtK3WehNQt4HHJ4nSrRVSbJgBjdBoN1oiZHzDQ55oJXTmJWxVwFwB6XFv8b87PvYQg4hFUVvDqA",
  "key23": "2ZrHv3PxkfJn7eU7YoY1HtgsekZdvR7YznfYkj3uyQcvdbf9TeTwdo7RVsEMGF4idtZGyMVtEAQ2mifKQjeubgLm",
  "key24": "Z6vffT4hXDpRzBrfYHzHmNvaJes8FQUQc7VGGyG1wuBYJt9bqeFHWwk8YEEUp5ovwuh4YvwWpLWmA3dZ98VVJsj"
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
