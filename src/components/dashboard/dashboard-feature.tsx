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
    "5C7YrdvXUVoaVABpxM6CqjBXcRDEZ4TcJe744SxmFpc242LwwxwsbqATP7wjFj75H6nNHCY7rYnSLnEbrk9GK3Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zcJn7e14mqiVUGB5Ge26RrDM94YWXtheXL9Te1dZs9nmGqb9jKWk73j7HazXv38uCLdmjxDc9f3raxbWRUK9QYp",
  "key1": "4gehzuN8fsaGfb7iLqxkR4v8dsgKpe3jGWkQFpdeEBXe5Hi4QHWyqVkmtGr2r9PFJqH9e5NoSgoJ2SVoMoSs5t61",
  "key2": "2XT6UALcy3tcg6CsBR2vGZhf6wMn7BSvqX2KiFQ3QEfqhf2m69YnddEk5BNJDRmtWDjiyqu81dKMWKxkv98BNP8M",
  "key3": "42PME6zy8RoNoQVpvaUePP6ugeiDNxrmDDKaop5L5cqpyVR67rHrqqeaCyiszXKLmRaFnbs9x9ZFh5WX5CBzgsSy",
  "key4": "3HLJUQz6MgYeMpyFVbiLQV4AWtSc2N56vXWeSPwEkHExFQnEWX5GUD4RHD1SXeY358acacGAWDgUkPACYuxKg8jt",
  "key5": "4a1VoptNw7jNQMFSQ5CKXBoUY1PMo43w49t78CpbsoBHL63Fa7mbAEMhL7wr3Q1ekQ5UriHjgCDS1pDqCyzLectp",
  "key6": "3kvE3MfDcVoTcXzDVaEjSJRkH7Ypf4fgiix6abHkwWYNXjy7t6w2YJGee14jj8umAJLtvUgdpgj9wLce39YLtQCE",
  "key7": "WzXSasVszUAsrh4nkBipGtb65pqm218zHhCY2oSrQYyXXAECGatARVmXyh6w9cYNXTydgQ8EniP8UR1AKMXcbaX",
  "key8": "3zafmX4ZgBJfjkt75G7WKXoZq7nZppVBz3yPoCyXA4eo5PjVD1y3MAAge5dTWScGgdEAtNjtvHWP6SQuzkBktXuv",
  "key9": "MVmc53Yq64o7KK9XEQeNrcq6TgsnLJRsaC6L1HXzpNgeaUxW7yeH3nFyptR4mCWT9Bx5EiJhC9fhXzeFzWSpxSM",
  "key10": "3MATdfjYYAUTECfx1D3Fft3oMSzdWC5G5aSWdu6MY7k1c36tJ416zQGVc8ccFAiDcnjRRfbdCgY2KFVKXHqpPztW",
  "key11": "5J25m8b2Sd5TU1AZh8zYiGHYLStS4GJTSxqp7iPgwgz3h4ugk6irS2vvppCKq35RiJAap3tfFTpE66HmJYUH5PYx",
  "key12": "cPcTXmcB8nVH88gRsPdtYA8V5ieFzVWfkyg3P8939QpM5LxjLhjH2AasdXqGbu698uiCMbbTbm7gdWwormyf8nM",
  "key13": "3SejJbbaUjNJpTwaNkV3hN62hPK1c9RcjgMx9iS1yvuDRPivi8i6QTnm6pyKcw3YhzjtFf134xNEpy9Y7Xxb2ny7",
  "key14": "5eF9VR3wYBSaUsbfs2rAZWLEKWVSGjXWTsi6iGub4BJYxWFFCFsoE3DEFWHvwZHSH6jUoubdTgJ3235vJwFA9kcw",
  "key15": "xDjYJSH2W4NxNLsnGsBX3nwuLbXJdcRh2s83ECRdbpacgUUGozPWtZsiZyLqDgS6kJTb1qgP2wi7uocyd5Urzdh",
  "key16": "5pWtd5G7Pp2Tzeus4BMvAaoAqhNTqAWFvYTwYmWrqRzZo3BBa5tsimieMU263e8x7gjb19r9ZREfHsPziSg2xx5a",
  "key17": "4FZZ3VLC7ERNmKD6MP3Qb1GUfEGXugU3QE7ebdMvdD7cYvvSBVojozHRrAwxjaqcg3Ma6xciN7ydb2XenBa8yDe7",
  "key18": "38zeckYAcSaczc2S47K4BWynECAcDcZcTREaLTrMibiHfWY8vF54Vjebi6AMAnomb7XvNLyYSH62UyYMWWVJerYA",
  "key19": "1EiVQx5uSTa1zxzBJMcvivVR5pG3U8ntjMBP7HmAJtcUxMpuTViiN4kokh6JGyCNrtSATgcy7t6uJagdm38gn5H",
  "key20": "4Xt6KdQ2xQATHsUJ6fv1EkSU139A7isfodWQWPQwUSSUPgU1nFWoXdnDj2zECYDUm97bQGFtBPMHVPhnqDkqmW6i",
  "key21": "ZewH7rFun8uhoGq5j3WVCq8rjEj39FsPyuhgGVfE3xQkkqKTYSn7jgCW6PpN5Xwp7kzQobu7sUCGicZwize7F2s",
  "key22": "JnbKVit1SEMZgCPxA8n4xMbbnkWgtj9C8sJWuMCAzoKawN9yhojM6eGkt34uY9o9LMCHuCST8ReAFVby4uCAqAn",
  "key23": "23UtUJaQZbq9k6S7WNfxk2dzjCFZRtHsz5LCyGGGV6CSYFxWrmS5yvjo2ThMRHQ4g6WsYWnRGvcKXBek2tP2KKu5",
  "key24": "5bcbUsjXwS4DaUUhSbdJQLFWLxVY4eLDiewFjnCc7b3HqLgNPmfQnrfAhz1obKUH4eHNdnbNSFPBhQmRnRKs5BtL",
  "key25": "2dCdmHc3tc6gZDEozsVRUs5tqWZduv3fyGcXBq6wgU8cvjbPGPujMXYmmDiduS5GiBXrfHM3aSD5LZa7Yb1dkFj8"
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
