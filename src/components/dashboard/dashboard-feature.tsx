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
    "2oXdqMFevZENLjaDDwmkgkHU7XW1CzopYQwo3A3zHC1L7TrVDjcEHDi6xSw73rfFvWRcDhtAiRPXHpzE2HS8gXcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ykWY7ne5YWQpBcNhTLNcNQGPArXQRidmKUNSh6cLrKwd6t7wduGFaX2tk3KgRuuBkNH34uVMZjKv1Kvwc9vpgEE",
  "key1": "2zKQ3384bf5HRuH92FvEmNgmdzSMgTGj6KhDzP36FMJ9c2bGwJmTH4zYSCSiGjJEhHRJhgaGGL4YKAkXgWeeY7tG",
  "key2": "5kCLRm9nC3rLxUzPYyRzzU422VkLEmHBAsH84fj7RqcjN6BPNneZcth6JBoj2PyiXQt3aAZXr6Fx1zgvzJWGaUDM",
  "key3": "4Yq8EKUGrbsNNjKZ3jPymzPwEYszYLdHycheyKqUdDhZYxKANed26vCbsd2nhZda6bQUD4sUJqP5n8ENELEksAG6",
  "key4": "28nJ1a9bg9Nvoc9Csha6dAgWtVhrFQ12fMdTJCamHq9NHCw5GNhVdjBcC6APDxhKc6Gn2NoChzmYNw41STrkJ4dz",
  "key5": "3nB61CFRV3biDSUUtraZmvuNCDcJm1mbADUue4QBDAwfun5a2qdy8U3CCJJTGX39A71o5TaVb4vg2S5eJVadr8Wy",
  "key6": "4jya89Ttgq4U9ph6WLYCirTpEdFFPgtHfJWfg5j9hvfcuuJ1FcaHJFFSiNZQ3QpKYTGo7SnyFcDqxPHX6S5UPpr1",
  "key7": "5tNq5ddV51dHsRHrPX54yq64G3rqJ3iTBy1reUMVBfk6S2fnBFgwtU17DZkmpPr9pocpVNxfVD5emdCExqDMNLnW",
  "key8": "ianXB2jUd9GDE3rwfmjhZ2qnx5Vo3WJLRjb4JRcg618G29g1oeic9jknrewvdMxLWtCZw6HGL1fC5osmsWSsFUW",
  "key9": "ZzGVrtzeiQhZGDLfz6vaSdSQq8owXaRrNVnLT4Dtss6NaywgRa95eFMXuFPfc6T7eAWCVgxhEwD7jEcpEM7uPaZ",
  "key10": "3WvCXaBEYFi7MhoP4Y6UJ8Sww6HL2MBQv4tz4RaW4tGzUdJBxyuHJXtrcuaKirBAKVBa4prNaiRN6FQzLhWdxqW1",
  "key11": "4fdbP3Q392ALVTZ39RZtPEZc85p6DHzZ69ACsnVsPCZ3FtWmSA1C6ZyQuevSoW3YpaxQAZLd6ohD5YUdarynezcZ",
  "key12": "4rH9vdAFK8nW1fsZctbAx47mFVqxXWGBv57aSTeysY8EPz2VWWxzNkkDwuzPh3DMMzkmDqNCVK3MDZLm8M9c3VH8",
  "key13": "5j19JWsqYFx32kkksjxvW9B65cDgzW7KZbhZFKLSG3FKrUhKc71X7iqpTPLT7L59tAvNnz5J9tyLCSkdCAo2BaP1",
  "key14": "TbZySjejqw1KFW7ev1ZUNfrsxFb7ZhEovRAPA5BpBPMLBo3UsZjjE52QzUAzBLwFmzoxXH6wB7fMU1AqPLsUe2u",
  "key15": "Tbt2dGiBY2g5Hvq3yxFCqw2acuo633MgeVaao6qAMg3fr549bWfC8Enypf6gVu5AQ6QUQAPqpsZBDFXLc4GPX8a",
  "key16": "4AgSznPaBdFoQHeCAB8vNF7U4Z9RQQ8D8XKFs46FxHjs2jA7TEfxbwtSfSJFD3Qt4duYNSZ9AfvEFpc5fkmbKn7z",
  "key17": "Ne6Ca2khJWKWpN7EMH2N2b6Ky6r3jmXPj5AoUWjkcTjGZ25fWR1Dx4Rj5Psdkph2GRqmhrpDBVgLLGkPVxm6aTH",
  "key18": "2rBSWERakR66jjntPjCqpo6c5r9ZJCDX7XK14sQjmHGTuNVE4gKEGue8aEoerUBxUjTgqf5vu74n3j4yTNbRwZLC",
  "key19": "3F867amMk5BQhTkdVheq9W1jf8PhMAHbLbNfJt7EwEqwZMwpC1ZX1C5FCa2D1Tqa8yWfWjcvd3y4Es8knHcHEkZ1",
  "key20": "4M2Yd8rTHqYwPT3Bn5ZtAKLDYGcVHWT3JePCNsFPRsunw9bGYAFqgTz3SGQ1Bo1HjQ5opPV5u748aCoW6xCi88QK",
  "key21": "56ZYmxwvqmq7oejEJb7muN6YGre3u7ZpKsAvHBSkamJp1EgEeCUgVicnFeHw4hFW7HH1Afhz6Nf15cP6zZz6v7i4",
  "key22": "WXryAjVFCU9RTZPViG35QR7Y7Lry9GX1K1mtHGHUwNXZta33n3bKWRntjPDA4GrvfdCb3vP4U8AT1JPwgxnCp6Z",
  "key23": "5HptCkNbvisSAAwsnBXSBBLA4xvp7D2LPsbeqZ37MpQ89qTTxBhE3ohst9J6BuLSMEWMYvgoTJf2kLA2CuoLSXNq",
  "key24": "2XKmkXg1WhnNZurnFJaBud9rn8E4NLbj9qNpcaSbyAi2ksrLM5E1BCUjCEYTGnC2WBqJp2RdZGbvYmmtEcUTqAsZ",
  "key25": "2WLZ2fsTtqUhTYvCccqjkj4S9YMaLhMY9miKEEiAozHE524imR7uRQ4Cn4nm77spVqcZCjEGohrvDqHU4jR3LPDQ"
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
