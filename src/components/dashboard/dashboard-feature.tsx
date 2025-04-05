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
    "2yfxWF68yVNSqM5d3NKWw58NBMRPJoDyoefRpduRfDC3FoD91KWs5ryLAKvGkv4c9da5dQJgtbPkNocaWMuneWv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NR2ZaVLXxp4fNMvAGqE2SMbi4N76UQT2M9jToaDAvESF5NL5AHvsuXPEcSWtqnLut42e4QhMEjoAPAzEx4EB6Nn",
  "key1": "37BLGpM2T7oN84sBQiRUqPue1ms7ajQXRBm189sNSkCHmSLCpE5nxB57DpqPG9HybxJLdquHpVTkLasTz65AM69B",
  "key2": "5ZYXQiFYvUNs7CrJBX7Jw9PtvTpS5xkx9QVjhFsFJ4JUFqKxWUJJCmeeigemtuQrL3HnmPptry4yJH8tUyD6MgfN",
  "key3": "4BRszKnuLTEBfubPdbNAAzYG1STeoXYgUvw5pqkZLwrMNe4FyGsKmTdXFH8WSun6PYL38V5UChT1D5EBHgV6LRpm",
  "key4": "3BS3Nh8VVeEsgPiareg7v4XCMRtxmBqyTZQ59yZYiVPuHHwrxV9TTswp1gfb8YDxaGjUrz98vFSmVEw8xLt2KkoV",
  "key5": "4UipnVfgpEPEYz6nu5G43ckk6hiBesxBCPLx4tt7LFf1ph4zDeWr6ai2QZH4CEPznxyfVWsovgE8kPwfRbQyoWqy",
  "key6": "d5AbnB4wvr16HstHxK4w5LBhWRvAndr4cLkPLajsx4y2MHMa1sQ8tqyJReZzh2LUkifsrG4drEZKdjNq6vpDCHh",
  "key7": "3awvLt4BJBsMhZfZg8zv7FhJRnpWEY893rduL1mPT4EjULndDKLokbEfrUpJKobBE5PhCePHsJYpgAPon9t1kDMM",
  "key8": "5GbA1CPMC5wwUanx7C1DZCrCWMJkWCF7pDtsmyXpz6K1SPDstuMcXcztdCQbQ7FAsk1JfWHKsAuPKymL4uTHzjZV",
  "key9": "66aG37J8PwrQANTkDKFt4fb3sjPLHCti5nz8Uec3DraaUCVS8x7UpAqkqqJ1DKoEjLwFqWdv22GPN7819rQghvuK",
  "key10": "3G4wx8zAK5A86uhDhCT5U7rDvwPUQeSLu31nZASHRTvjRT7pxWVp9YGAs5kLk1BR8L4fqwuZ8i2sbahy5VKZWgQt",
  "key11": "4K2v7tqRnVNSfkCjdVu6NmC2MJNrL82S6jhDqtL32aeof8Bg9uHdpq3o19H1dY2B8EoJdKY1qYETEwuDUq8bJoX2",
  "key12": "3sot3NiXpemGP3MAGuMZtEZdKvwaKqZBF3D4qUTDffw4xnp1G9WiEgDp42RTbBLcUERg7KbG9zN1kpKK59Utbajt",
  "key13": "qsFQ4T7beYkbYJeKeuqY3Xeyv1ZMwEL35rr2apy4wxC5VpTRheSDcVzmdyaZkdXgPdsDSCBxweUcgXPxcyhtErs",
  "key14": "24umnJaSbHzUk77xCA6XAexoTzBJ1PKcSKhqWr6nCme8aQEgPJBAAm344dfN7Z9BxN6uRfsVUDL9zeP9zCqR1THj",
  "key15": "5ntW3HsEZJY7FToSKaA65C5mg4HmavR2SykroKHrnQmaquEppbHzNMn4DnnAvu9FLD9kpUq354UadMMTGRD4YNNf",
  "key16": "2yJkki7LUSsdQXfpC5bYtNRa4XjCGSjN8g1kPydPZJEWDLsajdCzrSqEkVhMgu5ufnRduXNrxQid7vaz4UZJpY34",
  "key17": "43asMR2JotKetPjpP3uZpyAMGWoA5JEt3W4jAfp38uHekyGRdNMiskLNjp8HPy32tDApXkMMsDhj9XK3LWR1wMsg",
  "key18": "4R7nyGJAnMKpKgAPuwbo4jotaoMVoSkNsYwm5JAXvKV8YKHVSUJvqu7CfseJKuG9jsN2PktH6Q7UrthPitewBzye",
  "key19": "4sDrzQbkjqhGhXfJwu36yySHWtPDPakk8rcGDbmRJcAGdV9m7nrYyCe45JXBvCza2zi4TG46qHFxxBFxquTNxAHh",
  "key20": "5EoCjnQq72TNuVZwJZ7jpgEzcx4LZT6gxUtUHyJDXBppiho213MYaXm8FMwKDrU8rdRgM6NjHAaa19GxJoyYvcGb",
  "key21": "4fDXET3WtmBkvGCBJbRjbcqWBBotBkT1sWotwWhjhWQ1pQt64X5kGLEB7wr2pnJB7grvsuqSwKukmvY3LqsppyUx",
  "key22": "54eRqFDgp16cvKoaihkSTU6xDmXn5gTBr5kB5uYNk8Tvd8ygymc6YCnMvJKrMoUg5MH7vf8WnF5EQKkvJXnSUywp",
  "key23": "yN8NTzEzEaXntcEhiS673iENgP9g3VLv7mYCkWjVnDvqTa26VE7YXopQ9eLSWej64tdSwiEv2TPZWdxn2Q274UR",
  "key24": "3EdHbQHgbjygQs5E3JtkYRVGpPoDRbX6iNfaTsJH2vwFxQTb48Yba2s6RKcxmJ9ao5uyfj8mXMCsEnULFjn8B765",
  "key25": "CRmeNjY53BN3VJrYySQeNxYiWr9EEjQ8QdVLaftjV88gG7U3fgyEgRtdTHu92DUy3ScSWj92GDUkjqCrUXP5vzh",
  "key26": "3FMRTqRQRgEdocSaE9xK67boWKVNJAooMVeJL7czmcL74xC23zPTXuprZdUkzTsHxkUqbbUkwws3FAqWdZeeq2Bf",
  "key27": "65EMdg3rX1kV6S9N1tcJZpYxyN5EXkHfo3bMrm6nG3iGjGA4v9RCyFgWAp8dtAxu3s1DtXPhxF3otQyJyE5auauc",
  "key28": "2FwR9L6jq3rXtFLRzTcL758xEaQGERHMftVy3ZPv89wr29deVkAekAAmogyCj8k1jnLgAG3JQsREgXWowi7zHBLm",
  "key29": "4ptXUPc94hW3dFUb18ucQoQC9B2zfCNwTUbUd3vwDCKL2e8J8P1J2a1NfDzVncfekadAozrFwVFSy6CyP5zH9Dgc",
  "key30": "icLe25i2co2pkhmKWf8CeRWg9JSxoawnYbqCu4egRG6XmNfj59HNdyYvaHvfoRNmDjU2pD9wk7bB9tAGjx8FZpM",
  "key31": "3bf4BqCFjH4McTZ69Hwg7kDb5hK1nAwR66FvjWP9M9xQ4Hmv4ZVZiAew9oFMrVPgsUuqSe84B4A4VQ9kTagL4GT2",
  "key32": "3DuAVjEe393hTTVACzk8V64Pj38f2BPcYuuMUSQRvvuc9JkxTq3woQqGJ1M5MLURuWnzR87MjM8mWPhKCbfJ3KEM",
  "key33": "5K1W7ZVfzMxUNsXpVCsTXyPg8aLXQNDbaQsJ9tzd2bwadQjSSvAReJMwt7PXy8CJtfB6jai9PsijeaH5mLTdBb1G",
  "key34": "5aAKV6qFLrYrVn6ci5j5vKbadFjVzwDNGHZT24gA9nkcENrpLkDJ89ZYQRaJWYAnFuZYfDmXXtHcLGrVebZ2RoKo",
  "key35": "3vcguef6NHQhdCqBHXHL46iMc2u1GgGmchEJB4D2XVHE11y719XLefGho3LWu3jurnyagSR7xEy123dZUvxZiDvA",
  "key36": "4FHgb1k9X9EdQVgS1DTxHQgwLEsd2nNhKXsjyG1DYfBwdxmVAQb9CCVkstG57Fuu84VBFnUaN6pEKKGkngqT4ey8"
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
