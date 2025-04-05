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
    "G4Grpob1nsxwNcVDiJTEkNGmrcfcfM6T3zhrygW5srKyJdCm4yYbZaReZSwuP3SaXHFMsXzS9C1SS8twjcQNoTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64rY5AqppUmwqM6NkCKLeEJGW5kw1keDnzJdJL6xhRBDWY6Pmfp3snghSTX2Q2dUw8ZuHEHvFXLZBntjj5VQRqJ1",
  "key1": "fA2VksAmTBH7tN9T1wcLZ9SDFy2Kj5rMQz3oJrTCJkR123WS4tCkwSkAydCrKb51Pe8cC5JrSHdXZyQUq313Msm",
  "key2": "tHXcKvkymwjEPYDVoxu9qC6r2EMH9XLXNG4tivp1UaJ6LfsLSLkyvvoBBarzPPXW1daFTK6u81f6hUDF1P9wWpQ",
  "key3": "3MmLmuWQ6qfz24EMy1iUxr1chAQSe2KXgE5pB3bPndfYhWAUhS2nJBxVfWQUDRqopoVxeGsM76z3C635kTdWvs4C",
  "key4": "5ctAd2hCWrRvXTy7SMYcyV7TQ5hjFxCdvgPdGpX15yoVZwLd6GioEGM9FniV1PDz2UvPfYhr52baGQAMe3DdY99c",
  "key5": "4K42SHU5g2isWV3VEeNpbspuCFC3Nw1rsWTH7MYQLoAc5XwcHTjyAPSQv3e1QXPJ2jyzDew7oteftW4rwvae2mSJ",
  "key6": "2VVFmahuxh6sPr4X5pqM7fxEhER62jTHr3LVF4Q1uRXjj46PrkbN98hvdi4B7jwMbr22v7DfGNEWH388DYtQRpsE",
  "key7": "5VjTh47WPbSEgJWkGDLVYk8nucPR8YJYUNkMtLwZ4H84T1KwJwsXzjMAdCsLp91dwMi4ga4hQoSRJLhy8Z5HWyYp",
  "key8": "2g79AJtfA6GK3ghajunZpz5U4ZU3XULLxS2KHphHe5ohpMtmgpEChwyyMkZXaP21U84fK2j6Ea3gpDdYoR3ndkLS",
  "key9": "KvyDS9SVnZNgkJ2dpbt2rwF1112NpZkYJZJW8c3xW8dmd8JHdhRNBicYkBRWnQF1by4iwJkqgL34tkMSgUVQYm1",
  "key10": "2AtXhsW3To2Q9GWQnFyDSvBUcyDgaQpbZtw6t5h9Yw7W1kUgQi4iWtKkkbFZoDDviMuezJsc7C46nC85Vo7i4GKH",
  "key11": "4woMzRL94bYDRz4gAB2FdYLwsQJateb5YvvLXWTVGrM9VaumhqaYr62yntFkbf3exv1tJQwe5hJsw9zuuS2Bv9Z5",
  "key12": "4nNDrbykud4wri2WESDHG5fe7uu7uJCcud1H6zmyLetY4GuwKSYYezNMF21Q9nVydVFviSyHDZpvJfn1voHEifYN",
  "key13": "3Rt4V46uQJvZd1KERY9C1U88rYp2rEiDaVULSKfd9rnR6yJ2vMKJe9T8CqnRi7pWtr9Beced83LhS62eGYGsrxSM",
  "key14": "3ZxcqjgTb86exi4E63Q4NnC2i6xBKbVStB8hm8RE7yVt4VgBLeGTsinDibfK5bQ1FxpoHhdAG6ec5g7GoR9uPxdb",
  "key15": "5rF5D6v5JzJdKaFr5FxFHjDwFXV53b7y8cn2rVLL9dyRWXimx3EUVEPfbDTisMGq2knRQ4n69MmTwKEGykD7XxXH",
  "key16": "2kBJ3FxXRjtz31cXidrDNsmNpyFNZTLqa4XHs6zQW4hkA3AU1iG54nPofsfq6DV3dxEDZo9qYYQn1W9ubQoMyvQq",
  "key17": "48YDWUfNXz313MmrHjYiEWATYFfgDQPxzAgTzTF38pqwNzZNoqH18pg2s2YKjSBqRd7ayvFZF9JRmiwJTWoD3hxf",
  "key18": "uiCw9N2piRWLb1kHEKW1f5etD2SZVgpje6VL6vBRYJev9MVvxXmpCnJjVFWGGhFNADLMXbK7AUJCQXdBzZfc2eT",
  "key19": "4awiNuZd5wgqGzsNjgkdsCEzimnBczYiusmtUrbURjG1DZ2dSuBxwSCF1b7yTLWDKEqZFbgSDTN8Mx7ts5vvhZW8",
  "key20": "23bmxgj1H3fCRPcMsQgEfWaaTGtovVtNWdc4emAPQ8CMAorbCnB52c1H29JdYdosJqaG8M9jyahBeTMZBcFXTpYy",
  "key21": "3mXLVmW6rWPabC7KEGMDwC3UXvtPE4wummHMQdRNxNx84eVMh5fusJUupgVDYXA1uMQa4enbk8zUpxEYq5tZijFg",
  "key22": "5NtwXhepRUyDADrfJTM5XB5CsyiZk4U34sU333ykb2yCgpiyWAF1PSiTRQvv9dAFaVwXaJwf3tvRDBKzdcsvaSsF",
  "key23": "2GtE7EcVJWVZ9rkRSzGQh6tLj9T7Whvi1rMvAEvyfsB8KBJBASsBPnHacmrYwj94htjmRFaoRUSpHhhpaE4u852u",
  "key24": "EvtccjazprD6hCRDHRQLeyCGrqyJXyYp9u3mDburWscsLzH4uUp6WK89RfPBNEPC9rQ3U6PcNeoTpeiR46kjUC9",
  "key25": "3vfLeAePhxgdU25HC4ZAfi4SeMcV8xqHHLQw7AbWdsQw3Jgif3nQHmYNFuiVwYGjicfrDuZRCcqqe8XT4V2427Et",
  "key26": "jNGtmU4B4jdmLbxQWLYESF7aM63WB6qsWHMTWff5QY2w2kQzENkBY4nui6TNXdw6jH3sBbFr3AhiDCn9nDVYfkx",
  "key27": "kh4stqGKVGRi3V87pwDdWGwvrmVB7cTjn9ynhygZmorYQVxeY3CaeYPxP3ZVzBe43ZKQMeNkd4RrYZBeX4XTS5v",
  "key28": "2Jfh1BQA7ktdAd5jaV7fpph5Xw624vo1kQTifYPPGR5uWGnesBGbjPYQcE3eGraZ973q5bRo4qTgFJXGdDN44SvC",
  "key29": "3D4NP9zbXxktZnhCYMnnanMHpmXot6W76dwT5KaGMY3JCjooFYZaSDHHgvJRWUk6oiUxwX8BxyrL1JQCxEnU9rry",
  "key30": "4pEkBYQ2ybSNA5ySZ5P8YtUNJCuDSzGnR3cjwSpkxSB8V1vDzwj1rYX8edNzbL2nveD9bC3UXFN561C4A7hkty7V",
  "key31": "3qtoufde8mf4GpiNBCYuMebUvKebCBCkhm9idHENUf7J5AozBc8VjLuqKjftLnBXKWuEHbTVERzCE51yHp7SHNuf",
  "key32": "VRvxwBHZyeHyc374BuZK78EuUVKQm4EYVoZekcyE36y6o8bRJUy1djD89iCHF2M9RyFzn4y1ySWkaYstdiwsZ8z",
  "key33": "4nx3vNo5e1AnATYzSNns1FxELZtUug7iB4zBS6gKeKdtdLDvschkPJU2ZV4uN3vkv2dxxiH58v2UrPH5GqorYy7M",
  "key34": "FHBYGSDUXrU9q9PT4miJFqG2iqth2ykrY9aLjqUQJEbewGbgV5KNUxZQTPzf6vYAwoJnAQzMzcwPooqoUiEsAYa",
  "key35": "2kWAaTjkazNK63PymAqbAQ3tHi1wGPFhkdamX7PZ1Pi2nT4hxNntJ8x8ib8BgeSQoTWPc2rGViNsMJk2ckMGfQy2"
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
