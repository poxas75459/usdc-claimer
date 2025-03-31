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
    "5zUsnADkYdYh1hr6bpsFf9jwQUKKJ8c1eioNmzKKUXvNEmz3oqQJB3rckJqq2wK7q6x9iqjyzXTHFcwoZXfD1PNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbq8J7uKdCJoiWTx8Dg4GSfmM3ANGXUS5jZrrMjyajXeHFe8GoQQkZLLUYNYkgVYS6zsPW5GyuwcUUGxakE9fdP",
  "key1": "4TkhayW4ZD6FHNdKAKdpnBGENLBdw8cPEw7w1Att3diLYUEz5VPTcMYHbVrx5K7BHTxNSmNdia75cSnZSm5Br7f9",
  "key2": "XSFdzfXo7cY4ef7rf1pEhSoZ4Zt5Yx22pqWeLhyuWxN884nryXxKuE6Meq6qYTYVqXof9dAFj2wEeXYfMNJJPXP",
  "key3": "h3jwQ7id2ormbC2tGEhr1SWJJH6bqu9CtWEKMCScuzvj5biQhAtcmdcFnG1ngMAc7y2NPtN7UDMtu3qwooDbCXS",
  "key4": "2yMkSTfBLwgKbXnL6mR87yWSY75xUHSMpE8bmGFsWGUojsnCxY6CeSKUBEJ9BDSPAEszU9wBQ9kmybsbHezAUcQ",
  "key5": "3XjAScNV5TmY282iLK2uoGZeS4nLgoP5iNF9n5g6eXBg16WqsPFEoDBAhDspQSMAtgEqygAagmjfMmDM8tqPG3iS",
  "key6": "47h1PyskDtUvZmJaZ132dUsbzhr57wterQw5BScxsGBCTaSytvEcJwgM9JEbAWjjL8Kgb6LfCoCgBHBPNP1PvsE5",
  "key7": "4t3131swcGkYwU7jWBJzd7eUMB4ftCJ4vse4SrYKhujajepHfqyniuPBRtcZFsEwScgdn7mg6atSnuU6jUcbLkC7",
  "key8": "2RH3sN5wYUTLHie421BDwRt5gjrteMWDUaK8ML6rKPCCbvrjTdhRuWkxsVfWovmLPQWPhBJhFZ6Gbrvr9d4gvYB7",
  "key9": "nGMsJGj548JyouWpzbGPvFDWgnp9apd5yAbCWYfU1uT4ywwifpkrdHQexqwS8tGutAJTPfqCAgGx7td62W6Y3zU",
  "key10": "3iHuyuWDopBXM8kgxCEFLdZh9hDED5TxbvRy9o1xK4Rec31GaM71DmCUXc2b5qRQsjihC5u7msuge7hPK1k7zciT",
  "key11": "41h5fzcCcAHNs2sgYS5SAWrHNzAVadXhWQMLWUqQwoAdt84wGKLKCErLZ36BrAadnSgffweHJzzuiVCPTcjid5yb",
  "key12": "3tHs9dRCgFGu2pzX4XLfVuisQ8y593H5Fzsunu9PR8YBYS9s9v4xfwPJabMbYR8QsJUTT8ZTn2hGrS4nqhf5r4YT",
  "key13": "2fyYDZ3HsS2c5BzdkceytHjzPH1QSMRRSyyYhLaXGHt3wB9aUgYgmomxHtt4ssVjMAdKV2ynwRr53cPsrBhTfVMV",
  "key14": "3PQhdJ1ZrmfYi6Efs7YkpAT4YUifDte1NT4sJ8mDd4nT4PZ4TdN8c22mivXnLMBypAFZ3exLUQNqZ1A6rfmr6LRq",
  "key15": "5P1zeepPvXhhvcX3oZMUjzz9MS9MfseCznSdEi1UR6TT5WHbAfn1ANfzgK6zb8amnWwC4tTUewwaNFGhCpb5vL9F",
  "key16": "5r5zbUsu5MoF7or2tTCwydqEbHvLVKPU8VKE7UoNNmjYJmn6cKkXeXbmHiwUdgrSTBRvnxaVVMJiqN4vvM71a7ZS",
  "key17": "2mQq6VE9KbcXM61ZK7brfr4QExCnxzJCc1Dnt9GRnksRrZPz9wv7SbrvEtoqQ5fmz7KBhpdbUEphysBe53c8Ytwv",
  "key18": "AyX17sMtDxU8pvfJgQcKxSKHxRsfGRTyy6CHJkKVGJJB17LQF6d8Eu2ahvtdQjbifYbmr5gLgydrok18RdhbpDU",
  "key19": "Zkvqc9CaUo5rikbCutzhwtjhPUa4m4oDTz5fXXx85ZNKvcTvYtrqy7ytaypqaAK2QgBPcoKJGNx8YgLbw2uCzU9",
  "key20": "5FQjKGWw7ybc7TBknbxWc1ghK9ahS8pvRxsRiMm83kv7kMMgQZQRhFztqa24bA34GDtHLUqGQiKcGAkAf6o63yse",
  "key21": "3CXko2JvsZhi78SusJiGEcRP3PdhxAh4fr4cQ3FrkbA16YmaaozMM96mtwApqxhs88bvvQcNiif9xphjEHP1gyc",
  "key22": "37oNpxP4w5iD75XMSc6gbFfnWB9KsV9Lbd9GPGwcRHcev1oJPcLPhSBtBPGDunSVB1TRzaTYsGacSCvJKqg9UpVi",
  "key23": "2pQnDvecMc3AfFe7Ge2ZDwvjBSEMpnHqqbehH36qXPeKhtCuN3n3wAv349dwHU9fnpnoXiFzMcWibopye9v1pE3a",
  "key24": "62C9wNza5KoJ1JF66oB2cqtjVm9fFn317WLPW8fxhPVsu7MqdvoSEnNZ4nLywG3PiGh8SRVth5WdTBXr4JGRavwa",
  "key25": "5nFYDbVAXxX2DJf4JbZeaXi1PdtovsCWsuTmfwHGCmNXyrnGg15sm2RhpX1SZE8TRx9gfetpGwXgPzd1x54f3K7F",
  "key26": "3ugGTJwG333erdhdDSq4Cw3fLNwamtT4dfAnqEuPk1FbySf9YJaYCkvKx8yhpTMEqKoM14hbs3qukyWcm6bDZe7h",
  "key27": "28pMbKfqAk2H7YSYviiyGy7UqHsJeqXCRGRfmjtY7xExbhYg3tYyjqbeTV5CFMrmsSAR9TkHX51Q2FiyrGQ1ZbQU",
  "key28": "UNqVZAoYUXzbu66ER94NzJrxFCMFQK9DsZMxGLmiqamPyhNMVvKt4DTVRagobHo1BpbydfU1oe42Q9ZBWxUnVeV",
  "key29": "2QxyjFJinae92GoqEH6JXz1niQRuUnyopCHZJB6CukRBwPCWVCKQBm8zfHQY7AjnVMsPbsmGT6MC1bmXxpCR49ZD",
  "key30": "3CWqKhGMxzTZ6hytDpXnH2FDTgS4tJtWatB6c3CHzeN8Ny2SHc3R5CCaXfxK8DcxdHjFo7kSAhhBhqgkZD4BFLV1",
  "key31": "5n8Hfm1YRnQxiPAqYTiscWNcHVQ5Y9q3NUXkFJcpU8iofY4sjBPGaWCBuqFJZmpgQHrWNLQhCEnAo1enzjcNVrTe",
  "key32": "knijCv1V1MLBfeCF6yVtZCTfB7eH5w14SShtyTvEjJi2omBxymyhBBHdeqLYwe4Fw1wP1pBWEX4AyX2Tt5vuPnz",
  "key33": "a36WgmN7NvzRWS2C4oo65bC1q8dkvrQNUp5ixNgCkSHpi2F2DNS4qbHWfogTjVvd4f4R9ReA6MsH8DSC8L8AnVY",
  "key34": "5yz4GmMNqZ8ovPct9Usajkre2H6jRCghfEmvB8jR5dBzFjvfmWKzPQi6DpFssj7gHHvtLX7HfKuJvESWE4DAvFPH",
  "key35": "Q4Vvr6ey1po2yRpidwH2umjc95MhPbvzoZeZoPVWDRBzMkL5e4hXRTjTdKD8dgeQ6oA8GLxvXxb3MF4NW1FZrXP",
  "key36": "5B7n72XDDxGT6UD5hPgtQSxB8Yov7QRXaYnAnVEPqk1az9TaqpfLXyEZizKQ4aj5qN3tFqkWtgG8ANQchxrH58FD",
  "key37": "123JoKjKFadmpjgCp7WLgMdyxbvQcpgangFpvLR2amNp1jJ5xokfYm33J83ahTrNabPA4VVDdojc7wibSnTNnLFH",
  "key38": "5PWFX3fzFWorcJsQcsVkLocMZSwkw9GoXRCUxjZGb6ebZbCsL3U3XaViv94h5MQYh1RRpsQ4Sg8eeWyKugj9eRB",
  "key39": "38wDhh4a9g6o12iKk9HLj9q9MveRCe7f9LnkWDZtshPQVg6PPdFta5hxyDC9xKiaHXVjYe5f8SxfzsJVrMnDvmmq",
  "key40": "5LcB3hf6iAAX9LJbVeaVheAFPnL7jsQ5PQMzUe7V7RaTArjtgec39vUkE35e9To3CrY7RFkpGpWPYkgWKJuxAJ3A"
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
