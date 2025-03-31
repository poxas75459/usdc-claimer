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
    "5g7Wm6W4R9FQqNjXrm7rAupD3h9y7peM61Tj1tesmsDmVLLK81SSxVjsC7eEva2AwsULQmDCaZMDZLF8KQqTp5z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ew54L514mNNPEPpAvbRgdsFZ9yVaRXDj2jyfwva3SJBfC5MfAbE4AWa8KYCBBvETy2Ly49FVcN9tsReSPAPUtLY",
  "key1": "2vx6CyGSWvDXcR7iGWgbke36qSbcs5DumsyGWFvwzL8iKvsVXcWHTFeDwow4LoapctqbsLQBg7MxinHySyKpZP73",
  "key2": "53hDLgLUWgaFAHRaDrma5jYLbBZbPTjnkUnZkW26m7bv3xNoPgJc3SQDttgfm8dR6JWxG5wpA3ofK61Cwq3EmX1r",
  "key3": "3zGtxZgeMz7jkKFkJximf4Xh6G4Xp69HU2MNcNqsyqSraJsx6LmZKiAnYBc79LMTW6yW7NMk9mQTkTwcS4x5SE2Q",
  "key4": "2SYhMhuv4A6bjM1wscJDbMZnKa35tpjqxAV7egFa2HnWaBycJUbpp1gMRg3Yn2VeVJv6tPMMjrQpJGUimnY2xRU5",
  "key5": "3vzhx9EMB7z2fTQ5L9G6eynKug3HCBeW6qfQP1JeensdQM5h4wzZ4z8MTsSHPXPyzbWcuPN8ieKseb4VU3kRNmJX",
  "key6": "5DsFkHiVznNzvGYqr5HxyQQXZ2ZbCcTtoyeHZhmupRaJ7eGxjaMxzCBRz98F41ehiaJ7EPn6R7tgPzxtHjyrjZfM",
  "key7": "3wN994GfrRD2PDqZ9dKFxgCXxnSkkeoiuJhyV5E5ya44oNJHY7mZUUAm1sSVC6eMTv41XFJgGa1R3Z65oGm7bPpC",
  "key8": "EwQAdF152KV7BNmK83Nhg5mTAZ5wyuCdoqhtZ7zGB9oiMM5q2xrcpzxQUKrD2qwZzKrVKTR5aZXagisJ2WBsfbA",
  "key9": "3sRb9ffGiTbbgom5c2A2fmEuiJ4LoCTqJXG6hNqFozfhUfw4oqy16NoRuJSvedSYWDWGmgpWJEA8DFMYuCNgEba9",
  "key10": "3eNg6GFesXzEuWE7dfZ7omqnFhdwEKU7PSmmYknA7D3UeoE57WS6LfobZdx7gkYMHnYySEgzw6biUbcQrXnrT2S2",
  "key11": "46DrXUtQSQf1sAuVQtjNob3P76sgFABKZKUmjVXpUCKecq9nxxPgrYmL74WPBK6L1txLTSFDbE26GvygTcWamc7h",
  "key12": "65qBB37ZVnq7s7Ui6GjeJSjcXpTkg1j7TWzXuBnPdC9fQaZQZQo5V7SMxLoXxYGX77ig1djnBVECVCUjn5JR51dc",
  "key13": "3rX6fmHX3vMf73FVw81Eh8tDYkrhYLU3W6rDMgaDgKDUQBzK7oneqadKjSD1eDY31YtEbR8uQb6EjfRq4kzeNMXs",
  "key14": "4BJtUWN4ouP6WPaKbDGtCGBsP6o6LPYpBZTG9HWyMQxQ75A47GML5xivenFUpge2EGdAuMQLYfJQEiweLoBHNA2W",
  "key15": "2yrvDpf6tigQV1kGeRtumjQKeJp7bXj7ZZ2kpccXcgp3La4w9kuYjBjFUDYYKHpfykVLLXof7Hszi7XAj9hp1VnT",
  "key16": "5Fh9AswTVJLESZY8GWCbqPFbE8tBxXKrVTBr2qipDu68miv6XP9jds9YpcXk2VzM5vZfp95p9aYGf1Sh8Z3nZwR6",
  "key17": "4qpt5TkNS3AiRfvaYags76hRrYyjJztVqpVbTz6sduvAyj1LxVu4DGxxLCptpnwncBULMiCzXp2zzU2ozHyyfVcY",
  "key18": "3gqhkAceVgdZGCyDMisSJtwZUexH3VCbWfDtvm9KhpQiCtPQramCntJQYeE5te74Yy1eJQfbGdWvvrZJHmhdf72k",
  "key19": "3iKD53t92LWgZS2ghrdo3q3hjTQ9wzXQk86j5KdC4eD8WfGine6AxKgha7JJmhiatkt5MGFSojaoRVfgmUBnXcg6",
  "key20": "3WuykEvViNf4biYVLwhUeTCcUY8dMHd6avrBSaob4fReDBursW5tZjT9GkYMa5yxkHZnnE9z6ZjyvSWHF9qnyygy",
  "key21": "3RJE7RzkW5N73ah4ZRS2hKD9X9nBXQPtpS4Vbox8mr3DNCM6wPrpW3DGuVuMpG1rNJYfkQgVC5KYtFw69g8Ldu7e",
  "key22": "3cuio8xqiHcmQbdA1jgaMyoZXM6Y5d2hp4fpmrBLYR6kngoBpcmCSdxi1cMh44Fzi7FxNN5ABCbhzV9211GMNKvW",
  "key23": "3LFJTRTvQcz5mXWmMEsxB91ZkatGW7NvtrAgJMXxnjfnmDaCcSgKn9N8Pp8865wochpbPBncY5yXo2Gf3XmoaRAS",
  "key24": "3KYRTr2TgSUthb8pfDQXEKZMSQUTSaPzYYaHQB3ReZQqCnSuaHHSknqvDkKY8FGPuL7BAGLsHGFZP2xk3FWC5h43",
  "key25": "2uUBuFJYF6B3s3BjB8Sk54nJoyxFsSXMqhjnNxBjmzt3Ku8h7J5fYfoh48qjpDWQzcr8dCcpQjiqWaNYtEhCGEJe",
  "key26": "4PLUMQS36LTgrfx3H4xV3BmdZ2uneVrhrWqu1F6Dm81tab4ffrV9yZqNwjfcF7D6Zea2dKhbH49Jfhut8VjXik4E",
  "key27": "2wqv2YJo3m7A3Ag8zy4WakdAbt1QW1JHV39mo9hpAncbcwtRgHFQCS8MRob6pxq5VbttqYHeuMmZe71B2jtNpEU4",
  "key28": "3MnC3Rm1dfkTXW274J2wExWStoqLqvyaGWtY8KStkubJSrVPfNtsLW6tPAVVLRm3ryQb6oVkAYkrsgZeLZQi67Tn"
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
