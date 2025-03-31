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
    "3YGn3Mcrh25Ta8NE8Hmcmmtq1ok5jHVUHc8RuXecWqKMuoQYnkdqpYWNUbVzcpSHCKQwTPUxtafxaXwfVHUs8AZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38n5BZxbFjfYUZsKyVNquELtxev4bakRo4NHJ5xwMUZnFagcMqP2hLGn8x3VuPryZdptJGg5goqz46nJ3eafGEaT",
  "key1": "58K6NrtANQrvvjmQhWYVpPNG7FwMN8x7a5eQsMYoZoZ4Uz7fBGmGTiNmyNEYPk47JZzSXjhzEhT6W1oDb7dak8TK",
  "key2": "22nTxrDWnZJ3ejT6FQ9yP9FZxXWnzJBGkK4wj6gktEeHZYHPYb1aYvAsmD7cji5PDnFNXmYK6qZvNrCnutKPeTJa",
  "key3": "3HEqGeQ9piRoRUDQBs9r4emZRJdWrjmW9qxeQoZREx5d8vMmAj8hKLtTwbTmwdFqy2h3Z3s64vpHTuWZrSZLyLNY",
  "key4": "xzLnbwoYh4dordwSdXiaoG4G9zCpKzen6b63dSrkkXGbVCSZsHFMd9gdYCEPQgcdo9qidvJLvWsKQmwWTHQdmxA",
  "key5": "3dUr5Sj6rnjPQx6aoWw6suL8zqQKuymajhn8Z4YetppJsoFggHXuhyR9tpg6asHRmuYQemL24UKPXVuN9jQfwtXg",
  "key6": "3wXVYLzwArNL7VPc9TnyfB8XG6rVNCwP7fNvJZr3vNUhuC4CgcgK2TzREFbj4cJBqdQvDi2644wKWZP7V3HF7yvw",
  "key7": "2JjabBY5tFjABGPBM7ETJZb2nCJecvvSePkzAZ5ErhjoswugWxZ9o1cGGBNW9YqdsCxMT7ZUZe7hRifRVEExCLAt",
  "key8": "574noEr7dveQJT7w4Sv4ScTwxesHVCDbefKQTatbR1yveRf7UxzER4b4Yh244nN8B3PQhaTpwooHUEAQPZrS97tr",
  "key9": "4gq1JUXYGrZ45fdeXiY5w6tiF6pUpKTS1Q5N2ShGezXkhj9R388MU63Yex248LCi31b65xcwX1K86JUzdDWT2Sdz",
  "key10": "TSTQV5fyExvRNqdBzAppf4AmHnXfvYnX81jQ9zsqEoBn3VpjdhnMCuR4ZVnanybTstMt29rBgmSP5CtSAFmEtm2",
  "key11": "4yq9dGXYHj9ojgNnTyvKmxWQxVzAQjUhEX8nvvcy7FdBeL5qb3D6ZixSQEEbwhYqba3R2FfZjCVptAVJF7YFcbcv",
  "key12": "25CFfLrdaUWbXRaz1dbppyK6thXytmHicLCTMYPbjJhXd87o26kXEk23apSwsD39rJS2wFjavYpmL9iNYY91VQW4",
  "key13": "yUERXnNCfwpM4CNVHQFaVT7nH68zJ923Ub4ZRHt2wEAnD6ShqunW2PuybGCuKjQhV3V9nD7gD7mTDfpypYttEPs",
  "key14": "4wFko5YiZZov2gZsY3F1gxZjPxiPS4JzkS7rJmnSddYyUaA7wbi7nuAAg1zkEcxv2jm5tboyano2WnXesVjqdviK",
  "key15": "3Lduc4AxJbf1WDoXgizQ23pnVeZFbxSEmUthRkgHbx97gHN5VUnqzWpRjGLpcgjMEGsbVbbfpxtuwndpFDMuZa9Q",
  "key16": "2ry7xbs6hu4Xs2K1KPoAbQ6UBm6MvCrpHKzueRWZ77JcimAA1EkVzo9sUxh5XWLJBFnD7CeEpxuuFdWxzGA4SUh7",
  "key17": "4NREmUy6AByV5jkQs6fcftBh2nkFYc1xGfrYZf4kLpr4icYBQV9TT6YtY71Fcq2d6Jan4jWZugBXVBogNQxgTTec",
  "key18": "67nkmKEL72iob3UTrRgBz4QKjx1vT9KzqJzWYF6RG581XM2U9CooMFgXJkQvUCbnZcJ6MHN9uc32BmtL5HwpCey3",
  "key19": "4MJYS9UNf19uB7KMU9bdtPBmRTkZYvLfMwMRDN5ZfcSsadgxLmgGQZPMqy1fQRCR2qULvLcTDD4z6qwxxjx41EXF",
  "key20": "2mR2fcjX1xfpVemRWe8UkZVBt9gXVJ8U4saQeV5izTirkVrRPrMNkmiVkJqdnioFmkuF1gAnwvAmQLD7RD2tWcn9",
  "key21": "4EeJHNpDZLMSsciqjXgF1UU8EkaWgGi15EmYWzPRTtR6JNJxHAWuABwfCoQQMjJtwun2VEhL4yQ17n9vwJZcyDuk",
  "key22": "deYvBbCrCxMvhy3JUoAhc7rFtZvTAN8NDDFUamCwrFA8C58RpWvUp5KPg8h7RKx9rdT5adV1yefK84xuaYC99Wh",
  "key23": "rCQJzxhHBWHxYYusBFnYYQHJtUMZW6QXYUraseDpubtGg7dPz5geKBp2yd37nyxDvKg8oAtSuoSq6K1Df5U2oZT",
  "key24": "5M2Rmskjge5dXPZAMaCYNqwuXnj7BSGcDcKFkCAZk3RwSbrF3jXdmNqtvSHdrFaci5R64aXrsgtDerBstYj54Lkw",
  "key25": "493t359GWsx2zY5my5qsmosuXjeaER28SveVB4H4qWvPLFjNzwLkWrw2Hierw2kh1iwZzpfHpkYZFZNK1QXiURtN",
  "key26": "Bip1skV6bKFkAdwSC1vtT8Hf7VSksiFbX9NxqhJBR7JyqNSqjywau3BX79LHs5FkrBiRnkkZcJw7z3fSii78rqa",
  "key27": "5JcDCwb44skVSEhAtpHf5CrYetRBUA6rqpgf9n5HMopsrxYXeoHgCFNK5Y3s7uNskn5wDPscJrjWRN1N9WtNgZAZ",
  "key28": "3YcpEZNAapU5ty5dUWsHH5W45cSveMfhCahHDDeWwaQs2Fe5m7uUXSHxULXma4ax3dqynDuWKoajBCwNQTRJiYdz",
  "key29": "WKUpDbS7kT1yYne6TKLmS4wwctVbAaV7CWhXS5zPbK2NHS7JQejp7cV82E4yAncprUqvfSk4dB56Daxn1H3YiPF",
  "key30": "5Yeu1BrvXcd5xpFyF1XkfUaSxrwMtn8zWHqHQo68zGmjPVQUfyUYwj5dHopvcqjFdDbs1WCNK3SB18DCH6H49G61",
  "key31": "2kgmGffdUxLqAwaSjZKyv8YreNuyRufaNhMV2sMRw132BVMf5DUSMaYRxga1yVtYREKHGFYGWkr8mJfQt7Xoyk88",
  "key32": "5RDEK2bwwuY6Kd3ANtx5kgXRFsjTon8grSFjA7hNqdUKfMqGXnbkfGuP8aRzNFyj4mwcgk3jjePRmAeEVBjB4Xvb",
  "key33": "vhscG61D1VeEBBGDuKRvDn5rLvECXzg7PFgtvmv7k5wUFCuwmx5JTFFtt14dxPF9efJWWsuc2CqznpamoAh5LmX",
  "key34": "4E6LVuV7bZcH6g5GW6TMdbz8SanPLLc9kXiEuuAQwQbLm73Nb9kvvqKdDhwk5yew1egbKi8qQMz37oNyHLYjVB7i",
  "key35": "2KQaudvsWEj6rcy3vw2wdBKvVRo8Sdiqq6ejn8DHiHhXtLbFyVLcRTMam9KnTGvhtsgBMwkFpCUuer5qH5Lj51KC",
  "key36": "WnEReVirqbF5yKwaxbshpdR9hQp64Mkskcrd4m7afLkuAi36w74s1KV2xvfnAtnRXKotDg2G34fr4M53zRpqzvf",
  "key37": "3cBxars4DFjXiPTUXzcKppaw9jo72ePDYuXAgwTTTCsfGqgPkKeGBHSgTbhdD7GygTTqjTtV4FxpPbKJTqmTZpz9"
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
