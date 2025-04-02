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
    "5wJ9BhuqeJzwRhYLh1M6k5z5cDQqwTkSUgEw3fHV9HxBsFeLb2QQGrHCyBJ2oeoKaMS3uQ2eSvHmS7t7zJsVEG2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CJaee3eiq5uRN3HgXaaYyN54Q7VjtM3ryy9KaeQmeXaZq5J4sCQzfphwecYATqFn136TaF7MkE2kJEEWu7JVq5k",
  "key1": "3xa2m6kXcuYbtVqPr3Tus1uBPx7FEo7pvnMZztixWYFwRn3QUM9YGm5ExL5PcCgFAQfc4sfSSepGXHSSPCM8oE1w",
  "key2": "2LpqT5LsFLs6kQqYP3h9dKaqHsbkajvFfiG24zLcVEwcndsBVL62dk82LUy74kcuLXGwKrQTXXsKHqqLy9NqxdT4",
  "key3": "3LNaUb3tE4GsFtjNryhgVJCvh4iP8zRLDHeUfa9ZkG2VFocEuuNDzL36u8YCkT4Wyr6yN9afnNTBRtHHwpE21513",
  "key4": "279XWBohScRJa6ARe8QVDqvS9MB9o3bz8XzRmEJdZNwWdLD6QX1ft1CYvb8KYBENsgfrx84CSrMeq23n4vLgvoXh",
  "key5": "3uwXdDYhgm9A4Lti6NeGKah99Z3SYSoHSdoF7gy6VPV8hBhY8ZwewbgtspVc6c58PpFRD7EKBbEZKzBhmR7x39AG",
  "key6": "1KSH9VN1hCYamWQYQheve5iQ9FT3trrbCiDG5tcghAc3v5qPb3xzXt7FSKyzgB3v7qSdhxLVy8K32X8utzZmB8X",
  "key7": "4ZXfRW6y4G4Nw38yPB4Kg1RNC5oeruYberLutiXA3aPc5JiUuh16QdbYGNGqaQZPvG5wfnd92jgFYojGxUYfVYQs",
  "key8": "61cKo3xQY8z7XWekq8mQ4zafsJFSvHHtD3FYVHUqcdacMTcDXbLjsAmtDiw76Bn4QodeNMRH4aVGCYDuE98T3skm",
  "key9": "52H4PWexinEYmdGAk9tzKspJWb3cwrKTkdUunrVU6Vzvm9U9A7Xk3DWEvWjqNx8jZiur2sc1kvmpbNeceEBGjNau",
  "key10": "5AShrkmVWVfu8Kx2MEN5TDoPxToTem6nF29431g4DXk3rDTzEEJ9i4pu1kfkEeeMNqG2YwjXpsEcDXa698WEmYuG",
  "key11": "4TDfqGcbX7B3BVkqg2rsTG9MgMrTZ74X8KsUqbXgWD48b4V9WY91atHriXHQJjeJLXskQGRKiwXamKod93CHj1Ux",
  "key12": "3ATwiDMhY655CbDsThamcfKGqXHJeMiezjKzFxqYE8j4FpNWnWWeCdpnfrgu7k9r3S6UJEDQhqyygcEJBhND9W51",
  "key13": "4S9N1ZJR2DWqeyDpPMduTVF9vQtEP8EdRtuKWtn6NGdtxWEhyu7EY34bU6W8GQnjMTgp4KHX33kGAi1sKjzvvLnu",
  "key14": "2mx19ws9b7FZrTDDEzznQRT1joZtRndy7D5f7zyuWcX7FbRHSYYTdHKaA8hw1X5LbKWSc4PtYdtt7vFicedHKEwp",
  "key15": "3pcFnB2suiUYDVSVANrtQ15AvX2p7DbrPLrwiCtTQvH5eaxRAdZFu8mSrYMy8Zcs5AkwphywiGZkCEa8DBwvCc6d",
  "key16": "4ZGgwD39kZwBqUkpRMfARKRNMpwzBhB3cnJ9PUndYAfTNzNHpoyP6FT2LD72rRwoF7UNEK7aygnwuE4Ytdc6gDSx",
  "key17": "48Jzjj5nehJjCJCwCMqBRmk35qFMrrmhzVJTH26CHbaZYV8WHf6TyFS7gp3ZmQJ97fsdiKwVQRt5qYeznYgCS9su",
  "key18": "4AJ8373U4ydcEEd5UUe219S7zn8uHQktR9Md6vmXQb5MPfCKun14xbFmFX9BT9MfXqsXy7r2KcPDdGBCqP1g1YrH",
  "key19": "XVWSWTSGqGz8c4kLi3ZxQtgPZjTj5wGuwEmUi9mNTCyy4aWPDiE5xePNU4VKQfn2QRA6aDg33CtHpoy5uUCVG38",
  "key20": "5r5T5us7ngWYTCN8oByXughNxDd9ZuN9qbZu33MiBf1HgLRTsxhG735c4tq7G5AVfEKoHgbWnD43JCRaXuxKrpvJ",
  "key21": "27tnYwLJ2H9P1Np5PJKnXN3TwGzbtPEgNKZEZqJ1ngF24XaWwYVtKDcCxU2RUNkRJ2fqNYgRo2F4nfwMdHFjdHDU",
  "key22": "29bCHnYfr3vohU6y1tFy8ctAiNZSo51f6x6y6MoedPRnQszWzyGvCt8dTUSjeoZHz2uQmvApbbtAXutr26Rq1psX",
  "key23": "uCUQQrZPjdXmEatEqSwJ39cjC6T1NFQrxUtXb9oNNkW95NuaW7wBadccMeCWw4QdNk7pYDSKcYbwakUw8r8KLev",
  "key24": "5W6udEjtgdH74AhtUreb9RV1L8jXCs5RvVifUs1wcYo1kyALf2AfVx3Z9tGu6bZGeg4uyuz6KyNC5V3ZtP5MBcat",
  "key25": "24KcXcb1ubgQKvuftyTNWVYkDvrnCejKj5dCt1M7HreVmXuUK9D1VTpXcfA865pyf1zizXTBi48RbbwcUjxM2SVH",
  "key26": "59Vj1iSHc623c6oFQMhQttAXwUFPXCYFT9fJwfpRdr9SqYJAXwNX4oSzzUwemEGC3JtkkKbnv2FpABfk26GBcHVQ",
  "key27": "4gZD9d1rsdjW3bK5HFgv7XzrtXwBcCUT6QUNaMovv89PBFNjAzrGksFKBJafJHy9Qrxhh4rDrJs1oU8ZVLvHsT1x",
  "key28": "N2kDF4HK2gtbdQGAEDC9nZEosdrS7rF7chAiGzmtrN1d2eu4rNmR7RjtVqU5k59DT5XfrP1KAnBTMKr1jyjXViQ",
  "key29": "3V8y8T9p15y2D2ka1Q1JnDhpYSzwqeCPU5hMJc5fg3Ws6aoR1eBbTZSu4n9pq1stjTVXe9niBkW2mTWb8pqFJYKY",
  "key30": "2WfksYH3iEkbsuZ9k4Wnxw2ghdc4HPJ7MV6MHPW96C193vYeFDCmc47auk1bRP9WV4y4aQW255HGSWbNUwwKgMjF",
  "key31": "2dTweqw7EjbpJMHS6u4hVXGGTcbSdSKt6yDsQYj9zS1ZvcVzyJcP7GVDmUDThmukobGS7hvLbUNAEsrT8TsLxzuu",
  "key32": "2v1AnoHAqFVZ9e6h5BYSsihB3rXAiUw8v7dqB6wi2RXqx3QUHY55R2ujhGSH4fcJ2NkT6ja4jbMEQSsbkuujZPd6",
  "key33": "3evwP5e6g6UaHHULZgHWDSzek9pVLTjU86XKshYzne7VDypivge2yJBvxTY82F91Q95fuLXYLGfw3yEF7XCYLpsJ",
  "key34": "rFh8G6p99oxRv9av7RzUd1TSfyXwq4eVCg2xsGrcCoS36AR2rLFTpLidKsQ8M569rwDqtjEHKGymMnEaNjxwjLD"
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
