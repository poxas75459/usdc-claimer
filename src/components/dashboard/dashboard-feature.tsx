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
    "A8U1zRENeA4vmvcGShLa6uXk5gY74XYKx7VyKijdXuDErT25n5o3MhoYvvgMxyJ3LEqq3Dhu84k4cfuYv5jLH4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A4s8nTD8b99u1SJXrrUDwZjjSnoRioBb2fmGoswPZHfiQnZHREFzbbKXhqeb3jy23DEjXdMYuHXDiNUWs2eErQg",
  "key1": "34b8ttSEY684H7o4hJKWW3oDqMUuoUg6ejF4M2cjZc7qRU88NBKRBYJkaZSqJthZjJYKvHJQfoefKyKVqudJd3AK",
  "key2": "4fdTgmqm7EADNqK2hAb7ut61N4qpwbUXwupb6ckmRWWHskNQ2Hd2L45h61a55wyEPENMg8PnWzfWNrq1FARpVUca",
  "key3": "tc8vVmPNr52F3eF1JhNjMqbEBH2FuZPUw3ztzAQ2hCsbGDW2a2vVRckpsiHwwkXkkaQUAjzGsGbJuiQjrQVSQgw",
  "key4": "5UL47xYX7WB9VagbQ1c6uX9T1QfMKwuRHrXAsvGtoS9YoriynoYdHF5CspEBP4UViQxDLcwkDPyT6r1vZnFHu6At",
  "key5": "2o5jWUKWFsgDd9r38heZXDQNSWTLmN1nsnpQ53kMBesfSdrNAKvhSFfBGtFLXx7VG6RoohUccPgD9syWPVWa3LTy",
  "key6": "5pQnBkKR7BGzhAspUrSYXf57RxdD6yvNHR2NhCeY8bRPhSS4LFhMDKngW99WFCqCUjfqU42Zetonr9Becb6oNQ6s",
  "key7": "266uY4XfoUSgJ1smddnj5ZERadHrM2VX6hWMHiTDWRBu15MDvHVUBRwnNtht2Gkrpj9ZLzt3q5gnwHUP2T6vke7C",
  "key8": "3MYRNy5kZyPBXz1dLYxpRMNHMmvTQHU2NG3oq27KU1NvGVr62WUgEVZkHATXZnptSwTHcvQp67ahUmksVZ5CDXpy",
  "key9": "4ui5Ek6vTvKU1GjgTadyQLpLjP3c3rCnpebpf2DdHAznSdeR9uSuaiA4vf52Tr5qSR3Q7qh1hD3c9gfFNYoxzdy4",
  "key10": "4W8nae5Yoqo3JUphJctFj874ZHC43WXeKbBR7qKaSsYafSCLXFj9ZLKukoE8VyE42NbU4EFUtPj56t6oA8HdZu4J",
  "key11": "3sJzBo3LyhvovYsNdwPNqBh9wdgkzBjeFKryfRnA7frSdSvH5UKfMuyrzZo3Ca2BFWHRSfC1bemc25EzdxEYJLBa",
  "key12": "by2wRJDExEpLBrv7ud8oGr142V9fK5S8BAp8mrM953xnsvKjtJ6nVKmeSqHvYBRPTY6VzzKbk9KH1P3CpDc85p8",
  "key13": "5k7kT8uWY9SBH7vhLFbSDBJZJpMuXpz1X6onWCAarLzE1j6YbBgS6sXRmmH9PawF45DTuym5WXdenXFnLnScb3mi",
  "key14": "39DxPLAfN5Vh2EHHP7UsxyLPDi5J9xZYQWEZcCNnBw2cDEK2jkbZgcc5RBwseU1yaSvmR78yzYFNmvbrae4P1xKo",
  "key15": "44dXAFL2egu3UTv1ysz8E6XtsMawUT2tscekZv2ztySLQFiqbVwizvjQ5Cpp9AdkF9ShhhcfrRPXbkawGm18ZBew",
  "key16": "Nsee9EAbNpzsSRDL7ec3VxeAtMp8iygriskRWJ3MoGRv2iajRVp6RBj2wa4truURgv4VvtGdA573ir6M7gPXwmR",
  "key17": "3VBivLQKtXGYmsLWajJHRu4DABc5DhJUqkvWr4fnvngFBH23fFsyFyw7rNZ9KZbvx3HRgTeBjGjogPewrajThCSw",
  "key18": "bkGXvnmPMUV3RD6xtR7n1CizR9PEtWbGvFLQSiqnrmB7fgkibAPALf5gJv2jcpaiVdyEN57bdAxkXVJ8RCmiKC2",
  "key19": "5TCpkq29NjC4ABUjbxwf2sZgN1cq9HQxZrjzgNPiuDB65CxPgPwsATiY3PpxL4N5TCavBkbg69p55H4vLFjSM9ma",
  "key20": "2dqBqUPYUjYoDCeAsYU2kLM3rxXHjFT1HbPq8eZeKfLbMpQoErxphP2uVEyFJVYyY5DXejsnmnZU9Y2UKW2qDXHK",
  "key21": "2J4yiAs7tBAPEVyYE5fU8rGjqiAHWZnbfSKF4u8JTqneBqptjtqGZSdGphgB5kc2twBJv4YGXtsRVD4FCjCwxSz9",
  "key22": "3RsQErCfrdfTNyjN5Ncgmhx8UUDGSyj9wnLdzLhk6LJLFo8uABCAdShj3XRmLjtgjRtom5KGmVNxGXCpUcA2d2Tr",
  "key23": "2M2WAvesUsL3BYCwpAneqe7q1Ff9e4BA5yxhAxAVeJyymNNBoBFf7WGULgq8TS8XCff5z1Rb9oQs3zhyKpzXmJQ3",
  "key24": "2FqprtzvTmwkPKaiHttNkCJCtWGFA1TvXBMx4nLYXUtayxj3SvALDKhReG38mMEW9PkKHRLGXDaxF9sfCLES4WC9",
  "key25": "26W46n5aNWMbAiM7jzuH5y49WfxPBHr8zvCiTEcixZ5U1spaiNTECwVBUm5bSMuNBbQSvk48isW5U8ZhYYFNL5AL",
  "key26": "2njsNNsU1W2NxRPd7Pi7XKP9nyMBjNGtWzQfVTfrSae4RZViQcUcRKFGeG1dh22JQKAtEF6JW4cKWKHwx5PvVT9h",
  "key27": "2e5hmjKiPBmv3DQn3ncVXkZhrpYWWJ6RYCCyVpqzvcfTqZw9FnP1QZXdauW2fE6acxLWWQPgifUTpQYkCReDBPHL",
  "key28": "63TZe8JEGQVfvq4vivR1uNYUGjihHJ2RMaTssFGCnMq7fAZsMfY9xunv1ah7TbwQJQFnt3DBdWatvcTxyFdUx1Nb",
  "key29": "4sYvU9PJ5en1jv3yAXBCG9dpfa4oH2YUwEmJqr7NJFx3q2N2ycw4cFzstveBmNayXDX3x4CPuUMaTUJuQiejYDNc",
  "key30": "2H2kEWXPjy4U3JG6rgfDA57Hd6ibwCLDT5u189wT8y8DuVJRUo46PLfeH81htTejSLQF5XEQV5d77FpV6SVXL7fs"
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
