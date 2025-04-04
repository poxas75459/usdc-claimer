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
    "2hv8Wyyi9dQRRU8uTs3Rg35tsJ7MQYHXAG6Cm6fkEDz83HFX99k9H516cdoeyE7JMv3tyXcweL16HpaT1tdmym5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43QdQN3BELXcXEa1hmVfn6MMre65SjuMTTLHXmKukBx1qRcV9V8Xz12sBePKcMq5bYKtQubgPCZMubEw2GAPdZQK",
  "key1": "2LdSj7SKF5RgA9uhWTxoGEaic57Ljzkdov6sbGn2QpikJ4yjZhZm3V49UwtAAMWiTtampjC6V3U1huC1ERFKdsqs",
  "key2": "4mmxW2EfXZWjsNfWuiUkakUtafNct3mpUbuXcWcyHc7qepoUPFCMLwh88ouhXE5ydcgoJcaCdft8r1Gi8YYZTrQy",
  "key3": "2CpK5HpUp5xEtX7E1zTgMA5skBHZGAUKHo9Ej77AsBKk2jFrxJSvjzGHpx3euFc1tH5yPTzWnZnWFQ9ZhhJfuNC2",
  "key4": "3zJCJEM6EyThET4N3zbNvBebjsYqUyPRjhUw8zLgyjHGACP5TCfZFQbSMAZMxPC5ee6bfSPRfpxoKyd4bczdbH54",
  "key5": "2y6PfqaYYfLXw7yyieErCjx8f5Zopay52g5MXiXfefab59VAuq5XA4Texm8e3yrCWS5xrNAgQUavdNQCE2AtBtE4",
  "key6": "2MomkqWy4QvSBSeLuRGGba5WXh4Fe6542DoAwQXe9GjZrmngACEoVuFMKuQ8YtYZTweY3Xo3KiFtx6H29Wa9mhUC",
  "key7": "2ieXz6Gc4rwCxv9xb3LS644sRYbvahV9UKjSbhoFZyLyfCR3kQXPYCTz4N8ZYrG4WzGvhBc8mPq6iy111fWGKZvM",
  "key8": "3FFXuufNm9ZCSiYjwFtGDsLdgWNsZ7roFcFT9eN6QpPAfkZnXA7AYn5kx8XoX3Eot1YTY6ZcXmVkR8WvwP9SzVT8",
  "key9": "4bXfxW4UASQ7cc5PByShyT4WLBzfS3o7522KfejHhGznpzRS8cDiJ5tanWbjPzcXwNfm2tVv5RPpGJZi3bUxE6qj",
  "key10": "2xZiAa5uRw3ZDR1eqsbDqTpTJKd6kV1qRitJY8iJL6Ar21rcfvpZu7KUDNvK5iJDxKc2rZpHtxnw8xjdPbRkXApv",
  "key11": "4WKjPeXZbuC5VvdvBej9iwwGRViTnZZDZh695sqBcazSK6LUyikEQuWFgUZoMxd4VAgqpRmsHeBiJP9usNnyTMyC",
  "key12": "5uoCrUYwPWqzcDjvkvkCYqgDkM99Cf8izNiZBhPm2ZHXLPWWMUVfPH3EPpWzQxiaERgdBXVEDS61FK9usBYguE4P",
  "key13": "5GPj93G64VSt4KoCkzVQsNwRpsMBYhnRDojf7bvnW9i6MkPDxMGweuZodW6qbsx23KFDF8D2SQF3nsQ5KyYeYUo8",
  "key14": "4snVtmdVCmaghThYz6a79ERWnvpMRFABXTWkabBpdBPtUJLPJv15SjeCqFzABF6vWXcz5CGNeVzRn2hjSqyQCvXh",
  "key15": "3eKk94BPmRWwHUsojUinxwAZ1omEsY5axrmraoY9bQoDsNKh8U879JqFe4jKK7XPtX6ZDqqaURfu1r7MxGGwhYdx",
  "key16": "UauBB4YFNxeNjQEZ18LSGGfEXfvytDBQnnBiCzjGUjaiWR1QxUs4VHZouBM51BKxFvTvypSk8pkvwub113tyrp5",
  "key17": "41FBPhrKzhLhK4yuy4rErxcvrFLSvmZBrSa2UkCJcRWmcnC9WSayoHt1wbpL6kHUDqy6V4JWw1hRiqB8XKr8hDnc",
  "key18": "3pL2PRt2q9k4phWPLG1jZ9GdMrq87PcVDLxJ6upaqf5tDeCRwdeB6dw4ZxvhTJENvbiSkV1jfDc4wS9isUaVJvQQ",
  "key19": "2zyDUqJmatzF6ndikYNY7qaT9C3XzNJgsiz6my8N4KUGkQ9KGYdY8MQFMAfBmQEATJZL88Pe2d2HdcncVAyfyUwM",
  "key20": "27etrhQD3bCMccn2thdyWf1ZAVKs97v5ttb9Hx5QmYuYtYdXWcYnrozpAG2Etn8STtQ135ib8KELnz2xSkSTX7BK",
  "key21": "4gi6UwbPn6L2VxuSQNnb7PrC4267ZtKGGyKqXzT5Dh9n8whRJ8nf7taan87hzyhK3i5u4dFn4KRGPkexnSzXbD1P",
  "key22": "zfGV82egcEDNZtQM4CFh3ABTNTqEUZVddqg1WuTwPMjMZVsxa5Qd6dqfuBfrpjz1TVGSrHiumKt8rTY6s425Hw5",
  "key23": "EM9UJeof8kNJf7vKRZb9FRUAt3AoWyp1zQjWaBYkCswUU2WmTBqe21nn5dT3XBzPHkrwU29krGbKbo85Q1cq8qp",
  "key24": "cK74sYf1VkuoSBgCedaQQr2dshak9aoMLN54USAAknkzVBaRhUKLKQK5nW1jidrcwmVMXs68wJAtAu1zFSbSi1S",
  "key25": "5ExS4rxi2JUu9FK6n1RyXuP4krkGHUxbmVxP4XGTZvf1kKrtLQvmMjwyjC5cfMUtzEmhTcmFCjpXTkBcufhqXm1Q",
  "key26": "4hzdgSi4ANdgVYC8xVVDn1ojjLrREzFKiFVP4ioLnAxRPpyiSuepJr92oiVHej2v1XfxzZpUdFKDCq3WkgaWDsYH",
  "key27": "3gbHrmTLtNALZQsevo2otT9GMpKpWGNNAqJtZW6G6KxodmNPGup9u4zrL1w1pF4zsrgLtmXdf187dj4Yi8BUFrkW",
  "key28": "3bCAuKGH3yoZ7N1hdAwQhu49dxvkKZgwZDrSUPGTwBCxMPfrfinBpAuCukxQMaRzEJuicrZ4dQffr8Nx2qkBMHNc",
  "key29": "3HJu3SSU4KxKmcGgdtBVq9zAGX8DMxcEAPFjkFYQPe8LGnN17ivwpDrqXG7HsRr4uf9ZAKuA9Q4WYSnLt11j6fYw",
  "key30": "ub2HCxLukZ9iTyQdGhr7gontA2i1j1F6U3kUuLZyahgmpTGp4uGqLNEh9Grs2XZK6AFZkKE2fToE8yi7C55GYLW",
  "key31": "4p58VMQLy9ezrGcno9Br2aETQff3oqigf7qPByhqPtU1Aaadq3z9vhJd5HnpyVtpSo3VAu6ceF6iLMuLqkMH51Eu",
  "key32": "4jr1JTBCg7VVcXq1xhCkK6bVC1aez8rPca8pLiqjUYt2hbrv2W6C9daWqy74h5fS2cKUNP1Bxc2wjgHxmjJB7LBL",
  "key33": "8AWhJBFgr3RoStFMH9PtnJULTSu8cx3Qq7ySobjMfeJ7oyn8LiobWFonCnE8pt4XEC4gxJkw2yDV8htYMQcR9vJ",
  "key34": "3uchq4egdgQmhFpry5NEtN3fnXDdtyXM4xzj3VmdRGiEhwvzSKNZAwyMp5hQkgcA8jt235nYCa1GWDx4Kk6jYNRy",
  "key35": "rMgexexwXhRcjg46kjDxrsKMHbtFAiLN3pLHMWorZAV4xsFFFV1GnEy2UMVZvd9p7xzqhykAZyKkYrtXhkURZjr",
  "key36": "67SokZru7YUnAJf4cS9VUWvAt4UNcXQtVqHovxamfiskiv6X4LzG1jiW72U23YeUDsBmswiY618Ny8zPpe6EdBUY",
  "key37": "jMCXXmeEA3o8wt9PKw4dUYaswkQckpWV3a6vyohF67E8gU4C6BXmujPTtmYMMgH9YqxQ7HZWHGJwXvjURYWDWXe",
  "key38": "NcuRq7heWD3GcTJrFQm29K5qBJuSYBebU4bR6sK5aa1cQTtiFehsYyTrVCfCvjJCxdV9z3R2tKVjB4k62jVLC8Z",
  "key39": "5tmvpjTYkBW2VGhtsGrfvQUxE1hPmpqa9Debr7FxF6ZvKXf53XUSrKPTAaUVhTwYTbUoR6f41LUKEVtw6J3VNrxt",
  "key40": "3S6N2WGLQB9ypVTPFrZvqe5NU6nvXvkxsiCNVR6uKm2DBr9Pzvf2BhT4tNuhTMGq3pe6qw1DFnq99Y6YnFsoDBRH",
  "key41": "5WeoFQhjvTHgh1kJqkawiXZheXGXLg2MHerHCaHfYF3Gtas9b4CRMjPcwd8JbPLNm6ch3h5koTYMqMVopaCGojG"
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
