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
    "5rKJcZi6P6MeRFK4wbKjsQvfWFw7PAHRNLeBgw2iSrVXPMFcFoQ4XSkkHqwm3pPtSAue2esMttFRMqUJTg3M86H1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LqRNc8HWvwEtmpicYNVkVhUo8HRhmRKGriwf3VU25YmkxTEkp5nKDC1wQMv1Nh9CGQGgt6nXFSu1ySxZ3EhiAja",
  "key1": "5xRgX8Z5o67xEGgniZ7wKuD4bp72bduVM1LqyaRx3ZkATWD4EkZojgHTGhgfTJdP6Go8Dv8vAw9H4fZWtWBrNyYx",
  "key2": "5FDdafursK5F8gQgWBPW7DnDybnvufrdzPWfP2isPMJZKGCi44pdjALN3FkaJXLCqyAGAzGoBNt3mrJQvASqryGm",
  "key3": "5G2ChtrgGQN69QVnVMA292JxEGWiKSRjaMvB2PbnhZ31XoC6881WUxrCMLqSnBxFFxb2GdKJy516vBh5kqaWxM4G",
  "key4": "5k13GTZwyo2Vyi8kS3HWteAHravi1i3fSxRn6qHagHAtxFbFfAqwVKEGDJz5cYjfYSjHXrGLD2zbw5o5ktBCwkVe",
  "key5": "2javf82AzXpsKMwJsU288FkPkELxYxddxd4q1dpDnLMGw4B1aezS7R7RqbNcNrYKQYDKrim1VorSzwsq7nX8hcVw",
  "key6": "5ZBU7EpCKqxUUzvxRhviupPjtryMoTgPqXovNPZAuMwtMRQJN6VN1JaWXpimwyCjfxCvfcvWVtFF57K2jShNk2VR",
  "key7": "pEjKgXe2R9soKHXJR8ViaCDeRJ69HouGbuPYCPihUKPrictcYtnAbrC4NvopZ8K9znZ9eDAULWZad5Agcfo5v3S",
  "key8": "4dkHM3pvfeiTk4W2py7fR6ibqmStSGFZyEgfwXWdPtfLRJ5hXX9gGcT4Q5gzZeSj71K4HqPTePNcBVhaHwQCg2hc",
  "key9": "7ATP97ZzAwTvNTe8WhYdg9bBSwf83YTTPcRTa5p5FqrKDBE7YiV2DEVbcvyrib1HpW5421kx7JhNELRa7MvPUpM",
  "key10": "2J6DbwgcFLoaUj1xHMk8ofBTR2U5qY26fMpLPQgaSosGn6XckAzdvL5q4ixK5p1nSaSNuTWoJUguYMXjeJLZe2jq",
  "key11": "oftjZqNzGhfrGh22J2foqSHpR9Yogf2bj2Mwr7J8TbvUTXjVEZpzSfsLozdZefW93qxPinaDDjEZU3oKhPmtYPe",
  "key12": "5qnF5aYwtAZumtSwBW8GhQoTY6p7gKawiPYXWmbhGd9Dk7rv2zvDfJvLNGPP34ZpbtGj8keN8dMdRbKHAwuJgsJf",
  "key13": "3Zytw7SuTaAmqXBwCzhcCmGGCrrzCvYmU9HmimPt7aJ8Hi9rXbDNLjvJhoqnLEf7jGkJK1RbDAXx4De2Lb4zEtgQ",
  "key14": "59a75KL17A6MELZLYxs3rM3H66TKLs8wbKvQ7midMG3pQ7WGwTXwRw9mKPWKbjz5tAUZKVPXe7NT863i5AnwDL8Y",
  "key15": "2VNe9wnTu4MWTHzj982sDSyukiNNsSHYFV7XRHnTy6SSABvmVaMCTCpvdcyQk5NTQuxz6bK2rZyii5jVggdSRiYC",
  "key16": "4ofvjHqoJtshMoXM8QHdJF4jXhVbmswb7wxnn2WvMELSBS6SQh8j7DtNvekj5vzBYit8eLe16jaKkoJfL99MkquT",
  "key17": "3JrXLEQUKXGzWuWSTzZUJSZEp24Xg5bGP6GwPsUJeVcb2qADNoMLKD5DkGRE8t45vvEQ11tQ7bEyrm5zrtZnwpEv",
  "key18": "4YSwQs5miNmCoy4WuK16xJGcZXMpmm9diyJGASC7ruEppmxMepY68i7caheScMQpZsCdE6nszc5fcuhY9Yj4FE7n",
  "key19": "48uJTMMAAtTZunC8kReaSjqw2GJC5ZetvCkir4gNYfTPcMUtrB8FUJHuZbaD6YbpnyXaNMLwELMkHdzAcDHmxfNZ",
  "key20": "2Ra1JyHZDLC9kZQXHMtDF2AaKwsuUQKDHXmYMfLNTbtTGw62UNfocm1Q68itzmSwHhWe6yY1Ku8szPyU9m5hqGj",
  "key21": "3Znm5LRAgUhqPtvTVuYav49bfQnDh5Eq1Tqo6hYgnQFwrA59cn5tq4gBjRYJjdiXcsR76tgrxp6LkunZ3JSJYSy4",
  "key22": "2Wntw3eG6aVCBuyCDmp3B4Stk1ogWz7qV1SYrVwamDfSn6KwQRoJ14QNECffSL9wUC5JzkWarZhWhj2J9Jf7SWMh",
  "key23": "35Ksnwe8AuUbX47oqHeUFsja4R3T6g7CZvRukDBo8SCRkY4Us6eoVeWdWzPR2raTE7kKQNBshehyioUScwWw629k",
  "key24": "4uKfoNbM4Jw5jdyNJ5W7RqShvYYAzcLQtucMydC1KSySaqWuAodbQsNFa7zjGiLaLRJMnEDQb7XykAhKN75oSBu",
  "key25": "x7VXDhMFkwwGQVGBvw3hY2zKqh2EUZvztqDzotpGgsUqCwGtBk3EyezeyzS7bfnajE49N2cmM5xQvUhjxAPyuiq",
  "key26": "4M1mdtGNhXx17HyqwkGJimiZoZJA5SPgykPwyg1z2DoE41PLWfvMWXDxNMGNXxne2UaXk27fPKWCMfYNHWWERESu",
  "key27": "12ARxbvgkj3GwCAGZsFK7ZWmgyj531YkU3HUo8MxZNrrfySTsbdwW6gwh2URXJvHqp29ptsdbQtqGDKDYdMy2hs",
  "key28": "2CjqhDVPeaJ17wTbfrVREa4FiwtxGWmwhVZfn5bcnShLEiHxXRWd5bYszLxtQ1DFqf48BfttgL4WfJdYx1EDs7dH",
  "key29": "RspLfyMeHQF5DvBs7ttEWnKhaZaUrdxK4REW59cBd6cXPjCrcNjSwWoWgLATDkE294v2iSUvNVYRRvFJwk8u6WF",
  "key30": "51wASGXog5ZZtjUiDiE7t5MY4tuwcGSKcE6QSjbn55hXcWqgNXgxxrNiA8N8bKvrY2a7p2cq4osnpnBcwDAcU9eK",
  "key31": "211ZDNSUrDHnhnyuj4wrkbv6wxCgxyZkQaLKzs7RAXFaBiVpYGiyKxoJ8PHXUDdKsmKdfmieasRBqgS2TfoEUNKm",
  "key32": "4a66axJdZhqGtwXQG7Fwywy6a2mHAdwfJaEjmMqp1HQfSyye7Z1LjyheSisEE3WUJhQQvTKxZMaiCpubx2KYqjsz"
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
