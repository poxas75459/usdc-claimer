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
    "2JZGXJeu284JrqyLm5X4jra7miHkP69SSivVbrwJ3ak61P7yBUZzc2VpwWSX8nSz2xDWvsHs4JFcVqrPqdBtfqqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nX6fDEZqWKJ3pz4pCVYma48inUwvQVcV9gCLM9Sj2r6A9q9JoQcheEeMvPAQvwNc2wq7aNjrFdQiYmpddviVDE1",
  "key1": "5H7DAVK29sSukDyYRw4y2hrgtve5muE1GJin5C794nfw4sfnBUkV31fUAAtRbaEqNvUN8KFsyzehk9Qx36mXpjoi",
  "key2": "3Ye7hGVvPX3oJdD7dfVFmT7vZcxkZ6jvuKQ6TcfKjxDcXiA8hWCBkGecxHUmtWY222PPsRHGbysPjhWzfoBKY1W1",
  "key3": "2cUPVn7f88DXrNyM4m3ShtXpG7RAocQrtLDNsuiySHoT2zejf2aVtrZwBDqhTqvUNij5UJYAmzREhKRk6F4fHxEH",
  "key4": "fsysRQLCZZNYordGXa9GrfBoYQRtVDpRAiBVNeXdXpNwoU4LYbToWWUzpLkwid6q5e63BfWzE35WZFgXhzAcxNN",
  "key5": "4YCSgj8mfW8ZriLoXyGQbiSFT8T5DuJWsssoAPvhbudp7W1hubiMu4pKfLUwy2MvDrArdDUJB71MgFU99derSChq",
  "key6": "tv6g9U9HqqGJqes8esfi45erFcZgdC2uQBvXG4ts5RYW89LRaWXvtM3T61dBzfMNvVwJF9YGTYTuKBPq437reJn",
  "key7": "2u9Pk4ak73DYBYdwZStA6HbtDMWK4NXg1TFgMoVqufnduQMwokc3k4pYc5h1rq4LT9N8sh6NPpjQVYxw9Wgcaxg3",
  "key8": "VvFnaSBBUrXMv1rmC85u47HD5K1o6P9EPhzEYSYEMsFuZ6rBZbKpAba3Upt8voiwhMPAHGStHopjNjfybyLNCVc",
  "key9": "5XEDQ7Rg6PpPSaLL8ZBS3Lqdf75aPTPmyExferH38op3tbss4ei5S9wwxEq46LyEKyRikQ6k3JGYco9aFo9aqsdo",
  "key10": "29f8Ng9ApxJJ1YKYLbPg2VfLRaVoBSd3ggxCefzJhTqdMhrkiMR9sjdX5B94dgQFaxEBVtGGFSUG8434q3pPWYbP",
  "key11": "4LNUBNsJTf6w4vGv6A3QV7iGzbbvX9BkLrWGYkhPb4bEVzAEZHyPhHGuqkw3GgdEPqJAe549ANvwprksNVg2KGGy",
  "key12": "3BQ2kJaiA7CEvWGAhRj1fd4fiqK4fNNaKgRk4vTTU23gYcpFj6JiPvXkCGF5dPSMScpVunpsXrgsQJuG67W3QBzU",
  "key13": "5R9YUoATgL2zXdcN7KPGFFZLzNjouD6uyS6cVSbAeW6gb6yr4utUhxkutSoE9JGasC1vBnYLt164t7vnMrfuEiMa",
  "key14": "3oyCE4xZoPe5huqHDwcwiEFFzY3bL5pguQih99VjsngP7ejf2v5ECWX4iB6DbGb1BhVfaRaMT5pxZQaUKgENwDWc",
  "key15": "KoDuvYZd19B9JkY5RNty68QydZBBjDpe9cAMA59Rs1MRmTruhkm7LWZ8GdvQSCYxATCkpST2KQaPosfqkcJR9L6",
  "key16": "295XHmyq8z1mP43xUi5Qw1Fbb2P1pKtXoR3P31PJhWXFu4VyChxeqF6QmUsNScaQYE81vQzqoZ56RMDcSpFpPWNh",
  "key17": "2xk72uE2PwzsZiqUjc8Wmf6Cotgk456wg7sJb9sPHejn1QEkJP1DSbn3YVKHH5G4ADMbYkWLjxd3tAgpzmvu4tRH",
  "key18": "5XWF8xCf3Ziwywg1vVjyZjZwB6EHhCcTtqFZ9ixvNR2ouHAJMRNEvkWLGCg7F8srcUszgGG1kZWTxo4xLPso6BDD",
  "key19": "43UaJciddqw6NHQ8pAKdMUDYe1i4Jm59785HpoDk7bZrb3gssqSmaWJ4ozgFuRWvmBW9bZv87Ksfe7NgnwfU3YFg",
  "key20": "aXc5qnSSbRCu9MM9wC3go5ioTkpEBvVFZujfRSphsCQbsXzGQRy3uiFiQ1gbZnSX3D2RBkG88NzDVvKtzW8EbYR",
  "key21": "c2wESaJdbBCcv8QMLELHT8fhwmYvBUj1sefMUqc5m41kFnL4MJ3is3De4wN9R9hR3ewynpi5MB6RRt5EDm6D8mK",
  "key22": "4ztkhL4dVvGazCgCNMc1Qtn9YLCGA6YWM1Q6r5V7SUmwRyyzhGtdPYDGAQZSiZsxRQRhuGVKFfGHvYFrQCMSrm6W",
  "key23": "4RR1qM1GZYQY8MuxSn26ZHTt9bxbpy8LQL46FfiC69krxmvkFyVPX1y2b8C1Jjr8UuuBv9UD3CedSJVhBgmXvxve",
  "key24": "4tFjb1hcWAA7ZcZPenFaajCBc13PJzYwwkeQbnug2vXcJ4FbapHmZhp53ecbGiaUhMn4wrRKB1AWAE6pWgGMKN9T",
  "key25": "cQsgPF2qfGqoffo19RwvNncYD9GM559Pz3AxnmRQcR3zFxFeZ5cMp8difXR4pncoqwd4M5iPVBFeRifjbh8a3xs",
  "key26": "1xkYnTK37Y85oKGtzGv9AMxV1d8DpRmt6jtNU1bbBeHjGE4LNYBBjg2uHi7gikqp3gPyTSN595iCabytdQESB34",
  "key27": "5QVazjsnGnS1ehyyzZMURGgdkbbCYEitvjtJfb4XmdkTMcDBPYUx7bgSNu2ZWMTRn9vRARgc4CwuXDbsBp6XT8Tn",
  "key28": "2Msxm8SuD6ruwybuLP3AK9Bq7FBdJFNNATF5RPZjsjNYTpefjnVhDikg2oJCZKMiQGmr8Vvmfdc9DBJu4ML6DUv9",
  "key29": "4K46UEL73K19Q9i6V47rju1hJxbSVoDM6qAiBf3SZPG9qy98UcVyrxXauindfXX6kG8NjgvTt9YA9rR5DiaUPRiq",
  "key30": "4KfvVegq87E8gnrDakpCygsEagrk3kSBTEfJKe4aqJTK5965Yg3oLqW7cdVp1cTzxr3ftFfczmDYbbJ4fSUkuPuE"
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
