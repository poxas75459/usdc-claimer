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
    "2bJaLh1wt3BeL754xftEg7wMZhhffz6TB4EggTmVJ1QyV7zmM67bqCFKhJeESCQSbSSSoa51dVj6595vsARLPqJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xRBxcL3PWksh7U2knANjdSaWfEN8KajCosBoRfAWR6PwYMjANtDXZwEnnmnykpY44ggWencHN9v49MihCEg8mHm",
  "key1": "4tF8DnxL8SoZax4ovcaNgNp7gF6Simn7Gvjiw1UQZ72JWoBDn1G8Ds7gsFMn4yLWover1j2TEn8ABR9zax5f9Xj4",
  "key2": "47XmHAwrdWHHeSWtiQnSJDDoAtDUPB1Mw5EHAkPxWsD4T7LUTuf2BVKjTptKSYJEHwEoGe6UZ99Gfn1DvJD3kALx",
  "key3": "v8wj6WYjNTkVgMASaE1fQVYie21b6RxhzLjzYgUnYkrDq6KTFeTh6T6MEJ9qPeXpGbbxq3JFhCiAmv2C8J5ikMZ",
  "key4": "3jAymF6X5CozSjt8suxj2wCc3DX9SXdcqFu6Cb1EWYwaPzZn96bCEsAtSM5boi4qxeWYZ7yLVgQmXzffmw5CiC5D",
  "key5": "3eSnepvADMGJ4KEgpAQa7TTrbnJsEmHLScycHr5bFyW5APrTorzLSYb7wwCPk9cGyyYTvKfj4Jog84UXT5e15ZPw",
  "key6": "3M6Uj7YYKjndG6ve3Yao1dTzAiJkrTqAEeoWvXuhErQ7DCokXuADzaz6ZRQuKQVwfUh4dFTRZQFGLKK7FHcAk6HG",
  "key7": "2udbX42uUqK6HAj3A4HJW7L6ZeKZjVksnYA14msEVT85BMdNYWfVfXdZK2r9KCM4MR4QEeXvUrrGQfYkV9FVMVMd",
  "key8": "2WXJpbo2FHwXXGZmsnKJse2nZpr8DatrxhBKzHZXmVq5tJ52eaaGZEsDAfK7UZGwMVhzqpc4A84XSDAudNJdtEFa",
  "key9": "2EmBUcZ7fKeg1bA2kGdCTPm3uMrZkNVftzDBZCfE4sc9TZ7iCAdpJM56xEwWD1yeXQWWu1KfXr7wqAX6BVgMzwFm",
  "key10": "4wsA1ejfzq7Cm64Q2kWQa6AH3mgnhsDJorRiS58a28rMxZyuJ2dDkmQycuZrKCjo71Lq8hBUZYXMyxJVSbjTTQsY",
  "key11": "fCfZ6PzBVTfkmH2qepMjkKhx8korETvPKgL8gsXUTozB3sWy9bJF6J9TjRVf4Cvxi6vS43Lsp4DX9d1fyC7DNeY",
  "key12": "RiYQs2MJJKeRewQJtNYrA6PzCCPNwDsvcp9mm9pjeKR75ZY5omjyYzHdRmjzUVXwy1FTceojUuoh8rryRSJz7MZ",
  "key13": "32t675zkzg2BQqJvSAapoSCXY3jKF5M2PnEKzqj6LWxuBiBPGM58uq2cBWbsXrMT64g11ewcXV2T4aBYZtJdDrzW",
  "key14": "4Dr7eFbqtJ3nWPxvWfub1jDY2i94CiP7G7sasA4FSviib1zF7Wk1x8rb3KNoXDk7cek7EXPALLtHLktfqpmnrBTM",
  "key15": "VhtBWHp8BQvQdqnxprri77wtgJ6j2Bo9eP9fmCN4mNHyUPTmfoB1o3hnyh3h8PN6122WSxBpAbqziqx3h3tWq8E",
  "key16": "5sgWCGP2QU3DeRbdcctgywXU7JtEqoJHM6Wb6G9jHmExiVU9E36eL9FBkq1h88NyjuiWDneouwN236JPBBE6TymE",
  "key17": "2U2uYkxVdibK4e7YmAmyKVkuteAAjeCTctMjLH9nDxjeSrPGqFDNW7kis4GYFxvcAQnbhzBRjRDGrobqkLnQv4MX",
  "key18": "rLUNqjURgtv7VRKLMHCVTb6bwGXk7DnEx7GUDdfZtSF9ntiJhCkxie1XVZVqdknrpKtNVrarzdB19Wi8DL26kns",
  "key19": "AQW3nrux1p1Me8652DU2rPt6pvKTWT5B4w88fc4jr3KLCJfh7T9Wf8HtANqqgngTfmfdHUuysafeSPVgfnwY1Xj",
  "key20": "2i8hA7DWVQRpfuaU2b8P3zzhnyKXScbsdK2gJYzz3DUzhgzspiVPpQM9uiRTYut7bTMzCwEt5qXSYfFyp2tSAgAF",
  "key21": "2uLAWuzGQosU7URSkdH7d7vUEptg5CciabH6XpB15evndfTAPTKVeza2mSkwvpbYwvz7N9otdEg29dw8qyj1dTqy",
  "key22": "5op7LDQZ6udXUGxzWZzJdK6YNKgjGQYsArvyBk7tZk5cWzgx5bFczuo2RobV3jgRTSHuYUsqKXKScNEiHcTLf74R",
  "key23": "66Quq1DhvGQmDzAgo2wsTaijraGcUraA8fjcdJoJqhcYJGggF4Z5Uda5bo45s9aChLrvMV8gXFxLfgaD2d1c6eiU",
  "key24": "59HpUJoDa37jBTwUXNc7AEkfwxv3qBz6QwDLu55pNGaGBBpBFzuy4Naqkbi4btPLfXGyB4zadZ4knCJybyDLvoV6",
  "key25": "pvSbBDmgGFsR5Y5vy9XixMKiCzEkBNzKw7C7jgWR3TbZbMhjGfHTnavHranK7m82qgg3odC6eHZnCwQrbRRacU6",
  "key26": "2FZdq39KAnoTgzavjhf1ymwhqSwuYtvjduhRQVqyrpiiEnbZLCbR1tXX3fnoxrsVYcK731tk3a166SsLRwYVQKqv",
  "key27": "3SxWLEUzr1iWp1TsmFrEMPD2iimXuNqzMhYhhMxVkAqbQQgZje2WUvyvAt8bNQTNGMjCqq7xt4mW8eG2FpxXTMov",
  "key28": "36eS4y59yLombCjfmCcZ3heE81bs91YD6bknWQc7BxzpUwsgsrkYqUWXJ9aVkTT2EG8tE4j6nSjWppmJopdV9uvM",
  "key29": "5XHNRv2JaEJBeyrMZPvA6WE6ySCSTxbwqJuhPXZcsvxhwAnBa3tWCQqCLUDWEygXjiweCh3x63ocMv6MHHYJ3Jpm",
  "key30": "4gJr21o6cKEvLntJsvKNFKLXJzVKko1EU4LiGsjDMi252RJwFLSzhU9yYXgzGTfqFhBGHSFg3ZefjuJqUKnNU4La",
  "key31": "13uyQv8kNtqWSjE9SabKESXmZs6EKeFzMbfpozQsxzNZg2hsqjaMdqkaGx19dgN6oyVTXmMvJQH6ac5LNLt88E9",
  "key32": "2kJBghBLkFL79qpHX96uisUwDcgVeibU4YaGsK5F7H1XVMms7BDMHJT8wqU6s83A9EgopPY3cehvm7BJbp9Zccqa",
  "key33": "3R4dRMbFy4QQ2s2Wr5eGDpTvP3ZWGQt1d4Q8xiQTSin38rqcvw4SByiRoRhpMVBkxeiZPhbX1fKS85bARJpp21Vf",
  "key34": "2BytyXoRKCAb7UWWcdp9P6osPKbKtVKi9j7gHthj3szEz1cSEa7RXDrFPqctvHFRiVW3CXNVoo2gdodKaDnLiUbn",
  "key35": "3xNigJ9HUqzhhCuNEfiGHp4YuxLbB9UGVBNFaC7xxuzodLcoEfF5mjkR7svYs8QFk51TQrxZKNtEgeoWnZbSfjtw",
  "key36": "5FedeBcb6MzxGJkD7uZEyqGzmANSgzVD5nzs9rnfA395TVjAW7jHLc3KwfHVx11W8x1oBuyR9EhAYisutP775zTY",
  "key37": "5jaCYggtuk3NAnuhiMM5NEPsT1RFxA96PCqWS4vQgt3UAtxgGmjGncDhUZdCtR2RJ2a8XPu2gHDFHict2UY1Wno4",
  "key38": "3U1ndUQZFNtS1DkwtAebQs95eAXmdcxuyLZiyokY7Ae3mstmuWkkviPg7pWYj92YyNHx82AY2gYmNc2wbXidUfy6",
  "key39": "4rVJHEb2bMGnhJnt59FpmBNLzA7xnZUqYzZWQuYhiiYWj8rzmjr2AZvmQU6QSrmxt1cBgwUm4QL2wNecTwHzAiNb"
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
