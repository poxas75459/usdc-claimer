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
    "N1Mw9A8cdjCzWtewM3CG4FX3dEcZdi3vuPZoBHoqP2uPUL9c88u2if24QLz8n8B1NVqrNtBnXeHLTY9tUh3REfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h6ZbAivuim3ev6yFYNKUtcLvuDX8Uh9hdxjmAiA8vKCjXeMY569Bp8jnTmiH2w43SZidSgrUm42PZGKvzDNiiRs",
  "key1": "3qbiXzPQYHwWEgWyWv7S4eL2jAeeEEMmUandvE48dC1N26XWA2Wnf6FoUYk7ZVCnLCKfGMsAsKrPZr7RAg9mkLgg",
  "key2": "4kKJ61ae8VQyuDqmwgtppWQ2fsXqsWwj2KkxtPdrYr1ffWjwAX7mH6GrcprzYzfffahHdPzg1PiUwRQrgP4uyTHB",
  "key3": "3DUcH3sCADqL1JABFCmvekjDJTZqMVnGnQ6jvny56zpyWn4Ra4AAqnkkVmTryfMUcfwS9jMw6NHT3vTL8aQofyDH",
  "key4": "5Jpczoi5apmut5yGDw2uuzC9wgz3xzsXupeeuzw28ejzzyB3QjSXAyeariMT2Y9fiaNb2yuGgK9SMBSDf6CAcnaC",
  "key5": "5X9vHNwY4pJP7zXXwtnQvStLD5iKnt8FF3ZfJdrWsBEjdn9VR7zYLhTJiCidvAuZvKxsGpJqxGMRDzTsX3Fxubxc",
  "key6": "YXRQf22hUumyMnQbNd4qWA1nmmE8gm6eE8sKYjaGtDE45BBM4XKeM7KbvTui2TPEapskNmiS3VGKWTUM1VcMwpp",
  "key7": "26S9ozGVTg4qKUEo9kuUT8MSg8WuZRQh7sHsJgoaopo3nTntJsMVH5S5Mnc1HyzR6QuXa8mfSnRpzJ4Z8tEBPkJR",
  "key8": "2WXn2aVJey6Lcs4eGdXehF2V2r67A6ihNYAhn6ELPaW2kwxqk2sBqnUh2SoeRBmFnVZnvcCaYSp3rCx8oYstUECZ",
  "key9": "4V8sRx8Kfr8rJXCQfCQbDhiveZpAJtw2UUPNP1wRtwDCbb65539MRXwGiSFg5GjV6aVwmPGwRRZW5aJoSdZzkuVT",
  "key10": "5dyBfVCAtLNdBuX7uLKi1YhUV9kxGzXzZFMhRkuhy1Y2uDKQxSDU3uVqUTmPFWxf7HjQxQYokEcQ3EtevuddzrXS",
  "key11": "TQP483QEa5KWnHui75CchHxptkGJp1wcA6h2UhydfnohH3EkdHET1jxCeAARWXSd7ZnS1SFg413zNegFzsWzkcy",
  "key12": "4GwEZzAoBqXbERyuPH17hhV44rP8GEo7U6GseW3CchXbkLi5DAYf2ydevTqcNK6eTpEiKas8HhYDQckxsaqkrhHn",
  "key13": "5hi5fobr8XM26WuK2WqZ71JqXdU2WxA4aPWd73RVFbnqG1AKw8q68u8sLPCbqupHZAgh4JntAKRdvNk3i6byEkE5",
  "key14": "4QaaABqqa7AnPJBSXSx1q7Vj8SSo7FDzWEyLJe8g67iqXts5F3S7ifFm2DXF3DEs5XkWQuZP53VxM3gGs1hTmooW",
  "key15": "5Fu1Vje5Y5YRBpFjUVW7gmNQKAUPH7fzQPuKRT6m8RdWXn9pKHt6FoovJFuCMvntsnAwXqvfBbg1w1X3UwPgp5Ba",
  "key16": "4wZMTXhJBhAwnZZdzAikhs2Jg91RgeZ1jkktzXuyYb844aam11HogcnyVzs3HhWsS4hd5dwVKxx61SjburvFji5W",
  "key17": "5GDXT4yLQkQ6ehBY5aKWZrfST4Q1K2oHPerHDtz77xBLwLz5WWCXM1YpNC7rGzp9FMPKvFAJiXL9TCYAii4bumRw",
  "key18": "K2ZwEmWrfNgt45FGmgCZkHBW2FwJRR2EkCc6dMT9dQMioGXZo8Z7Ec1ipiXAjcYB7gMfbi7PCDjJxtQhhc64c2h",
  "key19": "4YS9rkBMdJaCfvdLuJw2CFFV3Newn7jDuCMySUHdXgpvMYdzqJ45t7VBhDQMprwuiW62ckGYsCEdK2ATgwuAtAXC",
  "key20": "5rMEXEYDfsoEbJgZ1A5vkL39T6G7DfhtoLp2fTkLxAAd99ofbYmSb7pY9Ln2Etcbaud4h2fweQhzPzYGCwyUx6QN",
  "key21": "wEpaPtRVW9Xx7DHdWJCTmzHiu6XibbZ7sr51MYDixvVkMZMPS3XmwUPr8yBQ3vCvWHGGMYYZKcLhaRXG4q14cHn",
  "key22": "1BrZditQ3ecq6ATBspBmkWtNnnN2iXvbeEMFvkfFZxjHM9Zir8pLcihhniHv5LYF32nPi8MKxKhsSLJs8PoSmWd",
  "key23": "5EC9RN7budS3Z8cCK5Bbi9jzB89hNUv6JjPRKDrEN4jZ9AKWVwFLg2AwQvGUp4dCywAYcvFr3s1Wk7zsDc6d3EW2",
  "key24": "4j9hbTHCdcQ4VPFyaNf24dpbQYzZMw2w4m9PUJkRENH9288r7PuxDrr3kJG7q3wq3TYxcaDXaa9wCnvJkYNXcm2P",
  "key25": "4saJAec4rtFNhWgq6FSDXwXhuCRPHUYNxUX9yHdAp3pZnLEJYzx57DraM5vdpUfcXJvf8FjHvXQV53aQ7P3AxAiS",
  "key26": "VN1UdS1TcRHAqB3mkSW8DU4qDUFdx7cKf5U7HZYjR6VJfeeDjGkLxGrmSXBLmD2kcz5U5VMj6huHTjbA1WBNuSR",
  "key27": "2nZCxruh5ZEDGT1ARwR5ct8eW1zKfg6x8BBXNqGzKNjfRjVhRABYWW3iDP87ifDRwnjgBeR2aeSCYL9Q198BwLEF",
  "key28": "4oRJ2tN1CLCknpoekVCqyWo93ixZS35UtFv8AcWcCXmUJieysnXq3gon2ie1oxMmfJD5ESLnNdTgMucD1Pk4gddi",
  "key29": "4K1uEMQVuxmLHt1MbFqcP4VLeo91THfzfLi2CwC8JNHPnJiD5D9PFMUqAtbnkkedFVczmnQCoutHg5ToQ6T2X8jf",
  "key30": "2MC1j7DkXsPTuK3GHB65QePaTqh6zMbr9ZTJcRoTEjkAtfDD5bWy5J3goqsWqZf78hE1b9hH9cQAx6bn885KNTS8",
  "key31": "5138iPSmP7ykXH57bKYVW1jbaFaSytcRoXY1tRdgmGzHcPB5yj9uSR1iAg8A9gmodJXWtmzJ1CZJB661b3zX8EYp",
  "key32": "5EzmKYSBzNP5LwE8Xc6F81ometW5uCQwkivANZEqULt6zpEFT1hxXSoYVLtgy9Zqo35gjymn6P2pX4c9GwgWZ9Me",
  "key33": "36fd46hRqPB5rifZ45eGHAhgxY2ChT6P96x2JVksM7Z1sijG92A68RN2VkFooQqpowTfLrHedMjBUHCeDwLQ6PcE",
  "key34": "3bbBY3gkDWfBSWXPDuMzAZqjjJ7XD9kHSJZgaiTNz2UySUUsG1Si5WTHsbvwznyFuocDDCSJ3rSdCAkb9DRjymkr",
  "key35": "ZVgVuhNtfkYtowbUe1hFssBHawHUQkg6QxgCtbtAxt6byEdBNHYRjEt3QUnmvKykNZFSQyqaPVuYhwia3Xqffpc",
  "key36": "41P2gKRuLdpHHXREqEMuR3dcqk65PQZ2RqWqmWoQe9nHxDz3BwnMXVDCRuVmv1d9cgm2b7RZe9jKxrJ6yTJBTFPG",
  "key37": "3nLfiVJykFHtzGDqNDFZUCoKL45G59DUdHgxBArAncYyCzajz95Bu3bWgM1TLLAFpjQt7cnUprUkd8hXERbdi2PZ",
  "key38": "2Za6574PXCXSHtLDBt7pzbU8nhCgeZSMvivnMebKHdFaLEhfYSGE4uc2XYWP43AYx5WJ2c8zM9Y7VCNaWqtfoV6S",
  "key39": "3udtiw2LD3FUMBV8gYbwXd7ZzQjwvkuAXGzqGv7n1WaA7mjjBVzfkHxvaLVDcGuNWW2j5MVvVtg2Sk6LLNno7qjQ",
  "key40": "44XsE75wSK6Cy5tXmcfCYngQ85YnW7URKuTk19eX3H9WB31Rk6R2rDtneV1F8o9BiiR3Frm6sBfd8iRgDBkeoAEG",
  "key41": "46s1fNabekTQMVKgCXn1fKrR1HomCYkW71v9cafctuQeJTdECHgL1q5WSrhnPkNoxsyExhAuvuNw7YiJ3bMzgsak"
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
