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
    "3eGZDuiGHfDUhpacuFyZmp6zGV3tob7J5euh9ZVpwXfzhyFTALqeE5aZ9ajCHyhJRyYpJYer1K8TiDR1ryZVNBnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aXfPwuN7h4y152zMNgdTi8BwgNzRKuUa9BH5RHepd8cWfN11RieWHiw3Vighoj8JjG3ixKB65icPYkrFfoHCKEc",
  "key1": "5nRurxfhuafjzxtym4x3eu3uVY15XLqdm8VSyY5QxTmTRNJM1WDiESVPSYXvR9rebyLqakXNXmNa9dC33vYmd3Nt",
  "key2": "4cUjUDF2najxBU7qyVM3xQ5iP2YiJVGfyexYZQ5fhitFzjEmpPT2Pt8q71Swv91LPCbL6yNAsRDeowZsf1BeStd7",
  "key3": "2ZJ47J9knk5LNC16z97AGq6yzpEd725A1uveDneVxUDGuzHR2PsSD7rA6DDdPyCzjgJYoDMMk3hXRKVpSvUK32Lc",
  "key4": "3kUFT5magfS2QC7hhwJVR5s3a54JspHXDAUkahfrAg3gjifvbKDrV8xjwouYTLvXk5gCpaPASUFNk2o8kZtZW4AT",
  "key5": "3a1fX7hykoJqaFPxvBNVyDFRb5dWZYDmLyM29QLSgWzrjTWvZDkooMV8jKqWNU5Rv4G1LJzXF9h6B1t1LEFiJTzB",
  "key6": "2SNVg81vi4qFwtbX7g3vuDXajxGL1RzHma35Jfi4vsDptiP98ScUwZrb5s9eQvmn7RdkefJrMWB9Vde4yJXzEhHz",
  "key7": "hoAt2XTpD1UuHUjPqxmRKUjSJs95SddNLJ3qMXoS9DhA4s5xAxLKYTjpkrvhyfAkEzH9v8chevReAUa3C3AH8pe",
  "key8": "3CNEYDBqTiFTkq1Q54PWrpbV3qxzT1WLq4SnLxynqShkAvLjXfBnzQfZcriUu2TTPMZTje7uC4JRprK1spuSv6pR",
  "key9": "3sAaMw77gvFcodTYgrrjt4Cv3GKrrivi4Z44Uovn8kHfetAYoTyvCpk7sCqFitTQCnRWtc3wY1mrUw5fxYXJm1Cp",
  "key10": "2dGHHz3s7WCUpLXofC4V5RXwSsJy1VVFtjFZWoLmtJC7YWTjpSwCp9vLBunr7Q5KctAEA5yZWfHgCqfMeLk6kBQW",
  "key11": "5Y9qGS1imYNe7qRez3yPHcNtdts8qanRyanhSqAt1tfNYDPvkFA3rX5xMdmRDLAAkpqR8subNU9n4CCDiA5UBTpj",
  "key12": "XyrWxKETavp4U9TRT4kRTzwKZ5N1FWxem5cNKKwniyRjYDztMusfPUJRaMnPbh54RnxBsLnLqTotRBik88f1S7p",
  "key13": "3o4nDi7ynFDz2p5vLiocrWK5CDdn44qZpTQiHzB3TEeWuGtpuWFbzCWk8EAbttkuvdUHp5rcDWJg7gZTt4RDbTc4",
  "key14": "9rJfjS2WPusawF7H8RUbFjn8bEKGxvWBjTWaci17WQiqoPFiNcT7cxn1qpMbL3KXL7LBBriBrPwvJtKtipr73Qe",
  "key15": "4hneALEXJEWNSh3vZvnxUDb6a5eJ6LpKMYgft9JoJ75d8XqHZ74Q9ikJGs1VpEJj8UK7mx9Eq67g5pTkS3du9QMH",
  "key16": "79nwgTNvudk7eCRvT12caG81sveFaHXJkU3J7jGWsMbbPbTWZQy7jacykmCahk4SmjQBuaMvZqFPJWSY5CQ88Q4",
  "key17": "2xXFuspju368sqc59wnbwB3M5SezDquhppgUU4YUNrWWErxphhxw9PG7feVj9cwRdz9w12ZURdm8yJ7MbXGW814d",
  "key18": "67LJcKZsZA41V9t1Mc8iga7XWJagfTz1oUs6puC2qnGfvao4zeq6CYyX8NaPdjb1BbfmjQjW3CHELf4jGVSjkHUk",
  "key19": "4ztKsAdt9MgSFyFRBoPuqkTuvVkuq8rfZXiycQMFuEgxzMJSwwXEvWbeKSdJtkDt65NEpQo6xhVxDQFodw3j1441",
  "key20": "E2idQ1y7kkfajk3bGzQhW75jDa4Th9jixmKG7GBWBXKdCuQ2DPRKmCdqScMLT7e5hP7HYrx1XnqF3EaoPpLgHeU",
  "key21": "5YuoPWBt5yqgyKdD1Sz7w11iqrhEgXaY3xsrHhv2egcoE1MZcFBDimfGtscco7a9n9yjTw5nr5v9LVgqvyTQkoE5",
  "key22": "x8r3NVS2xDrwWcKadRQKscnkdjjZ3pVMa342DmBuwdmzABWvTc5bvsWwUMUivfzMUCmuwfwZLaF3TB2AUETRtfk",
  "key23": "4PfJqvuiqYdUYqB6isYTbjEhDyAi4HYXuQT7TaN6mDbMoAwEYcv8ispPFxe4v9arzAvjfnzURCENYsWEm5EQ774D",
  "key24": "vnF8HHK5VXVrgxXLZyYtYi2x9HHdfKxnLGppfAnuCkpMFmqBuEWhZWVbTMuatwjfzYhjqDiPcXBvYFcRK4gNWpt",
  "key25": "2Dspqv7svZk2KXHcFH5i1zsW6zYtthbUp9yHo8d3XchEjG4WyKEUFyeoiB13fHFJ6FUa7f34Lu6DMq3Q8HtFTHv1",
  "key26": "4KV6CbUFN9X3EpJkcLAfZTPBA6KJ5JHyXyW7S2MwcFzLAQAgTtbPjmTZcdhyivdJt7hUkppenNdWd6kjBghcaBox",
  "key27": "3wWM4Te2KScKcqGzfCkLi44JXNuK6G3NAJ4gVBVB8mQo7t15Fw2BvCNjenSZ8p4cADUkZfR835bd5iaLT6bLtrYN",
  "key28": "4FPHnfjPEi1mqZUFcS9pJjR6ff2vec155PyihULkkVxvX6KeA5XT3AvKDUcDJSQCsoBpt7oosWWBYW9tAA6QQRNX",
  "key29": "5TnAAya912u1MSPh3RTVpRCTvMN7chruXnQZNcmA2gNM67p9RWCHaE3W4DcjK6s3Xv6y6ti8ih43SE74vTpg4rT7",
  "key30": "2ESM52D2zN9uAWR5rCcBATF2teCXLvTChzBJSUpVrX5epKssKzQ6LdRUZ3RUXzGaVsabHNQm87SqaadFjHAaUAyo",
  "key31": "3ias8MjapntWaE6UQrwFVDpRkp4cFkcdp7i95wscgd7v7EMAX4Pjza6b46RLnRP926aGrUHt6Kdwgi82XcrrFgVK",
  "key32": "cambhxGpSTDbD5iTDN9oedvPk9PUaTvem3xfzQ7i851UKT73VRs7w7yoV2o6Snb66MJck2KfiwbxeQWLmdKCjHs",
  "key33": "4Sn8jYkPiJnnwUE5nzQzFVZiwoTd6K1binamzBukynxGmgenPPv63HHCzy9WYgUZEXMFWj7BhrSvDYsgo2Y6c6ks",
  "key34": "3M6g68CkeJuC34mDzorGwz5dYWJuyDUJFxL5NCAWb88oaPCZVMpLtMFxPgdCuuGKL6hmYkjomFjedfGABC9CdQJi",
  "key35": "2T4MQ3u2hooUoZvtepcJLnFG6UyEWPwtQadCb2VoXEU3TLhRarBeikhGcTDozR9dwpvPt6YAqaGekHXvM7DWtKvo",
  "key36": "2EEkttV2YZZQi8Ph4LWtdCkEySW6gSuRv3FnccsQQjPjUKYqrJ8GShoxyPToZfhtCeYxNrAKh3QpkbFtnpR4PwU3",
  "key37": "4Fx9CkY6bxKxzfaQERCg922r4vU5jxxw5fKwnAuH5oAxNAD1SvUhsAXXnAGcH2NMs2zJSs4PrrtC9NU3VWAJR3NW",
  "key38": "38v9o9URj5S7ecQm7bEy78NtGhZUSHT5fF4Nar2UXDg46scdBbzBqFnY2oaecSG8EyCecwi8NSto1FsFkoNN9B6y"
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
