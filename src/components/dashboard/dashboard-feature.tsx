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
    "9c6DhDW4De2YcSSD6N8G2gpwhKHbPD8DfiMdj3s8QvPpypYpzqWzkQuhvbYZsbsVXthjo59AZeT6n4dUWqUXu8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UZQkRLgrcJit5cnTf9WF83YN5VFq6WM9Joy2DDpVhK5iKQR76Ux7hMgqaoLHDTB7T1YshX7DHRF5p4Th2Kd7NSu",
  "key1": "47JLa935A47vM38j9pgQ1jXJJm6nMqsbkg77v8EF1qBphRqo3NoP7uVfvUoA56WpqLWqwgB5kCewe5Yp3yeBmBxV",
  "key2": "3onbJyKoAD4wzfZnsD4KwQrvfAXRGyJTfXAV6gMTaPV52TM5ivm2cqywHTV5Nr3o84YuETXYGnTLafRoa9ZMKiS",
  "key3": "64og2zyZYyDohZ5Np4236mnkQLcXntEehUPU4JyJXy1ukqt2BALueoGxPsqKHmNwrXC8wyhvBY4xK3Cx5NnGSMF8",
  "key4": "2ickhsnmpayGPTs62fjeNsh6oAp6tLf4ZiEUyu7CpqP5e8CdSizv1qVSGFUcnPds4KAksspbG328ZNEXeqpQhEyG",
  "key5": "2QmEG6nAYgo6NsZpkyAodqy1wWcyLL9VYXWx5trexi6pFkNcKUqwqoCS32k1mAeUGTb9YDRqAcrUQzbnZCiPH7kH",
  "key6": "mzKm6o8TwrFQkZMnMQdVoa6T4HShLLgyNiLqKBwZK43rS4NJWtkqBiahUquHGWe7CwMgqvfH6BHXUJFtTUNDW9C",
  "key7": "3haph6RpJj7iSPbu8ZKQTQdL9q3vyTtHC9qVtTD5iE1BGPnwjDLMzLBUVUUgFG2svZ4H5xvq6rDiz3wRh6w8Z3QY",
  "key8": "4csRqQDCsippqh2866CjpmXhvPrWZwcZtW952Pj4vdya9SenxCePZac7QHar8sNEmUWJip43z1kSEBUJvhJ6d1r4",
  "key9": "a6s6tF8m53iZZFrWNZVGD2b1EAG8kS5MKY7VpCmkFANzB5sJv1adJfAfVokwGYeb1SuKFwDc3bAVcTcDeU1s6cw",
  "key10": "VcvTiVSiwSqPrs3YPLJEzQBdw1xYypm8PvM6kfhzzFZLduKTJUQoKuDUbmYMSBmrniYuYEd2ppfSrqnd8cGK62X",
  "key11": "5MZaveaKMSciiQPgacNZY64bHuXhsUjcJvx8YLAiTwvK1sYHw8NBSCdSgqLjWrsNg79T5p4oN7sg8DegLgT4VpVF",
  "key12": "3qBrFQJLazoU7diBtCXZ4urxUdSW1D51Eo3xn2oUGwc3Xu5bc7YgHNThtgqtEtpfSdAxf2Uf2jnRiSZ3n3nWBfS5",
  "key13": "5L2v5ZQTwRQWqMtJsNq51nAvR4o4KkjJ46hgtg3Pq79SXt3TpFms6dXsZLNVcitdDcnTdTFynQFi3Ev3rjhryhZh",
  "key14": "46Yws8LyfLwsQoKekvCHg8EbdkX3mydQV8yazJrstuaVDugkFvsGqehu8CAgz4Ryzaz8qPTwaTUjxA1SGX4VQ4qv",
  "key15": "4RtjzgR5p9vP8qgYRuU8Mfg5WsDUDWTFZF64CDGrvCNcPBwDjySigYpcHqWcJHZBrjCeC2mcpkx7qjwiHYEbrvvc",
  "key16": "4yPznejEj1SY29cSiXoQNooBA5fXrZDBd9hjWkVjPKJmvPojEWEsKUtPFjZd8ZVQDQg7vrJ4eHqy7ekaDXzSi1Ru",
  "key17": "AeDBi6ohxZQiQtCEjTYk92nThTQryz6QVYE1AR8ryNJkqD68BJvPXxbFRyqEDNdxkxgNpx6TB4iBPyqbtQyNtkN",
  "key18": "4jKiEsdP3xokKJ4RRPf8emiKLRikhhTbbo3P91bwJqj13jR6FpYZvnsCXszidQrUZFoWXZNK2qWbT2org5c1QwQK",
  "key19": "5B7nFkYC3FKVETjcPpGTcqumjG1uQaRPk6SeZpDJ2MvjdyDAAST3zyufU4rgvKAWWeGYDsynFPGo8GRiJr3GA1gz",
  "key20": "3n5bJssZgpRWnjwF1DN3j5zhskDNbpDwxY9mMevndTvtJ2ci8Pjmj957J2sgho39zgU8DVEnTsk8xBVCnrCFEwty",
  "key21": "3goQnAeYhiJ7PPmjifhsPeLDRoPKK3GkeDTryPg56vPcECdGqM9A4b9vXqnwUj6cU5q5PAwvprtPgDjXHqU3fbVC",
  "key22": "2Bdps8kAnxttP19HEX4Lxeb7xsjQUsLLwMKk7ftypfv9nR3WVGTsjUtGQa1UhC55oDucpxVGX57Vm3qLA18BkVyJ",
  "key23": "xpc2vh5N4nEqYa4qfshXhGhRdAeXzPXU46dApAHLWhR9kR5evyYRjPaGZnie6LFnXLBZDGE1vu7whqN9deWZUhf",
  "key24": "4mA6fzmmXipPdTzMzWbAyoQvmhWD9N6TjPq4ruwWTBMDEos1oUsjRoYpwjeQp2VB2friyNvC2sqSxNA93JuCbMg2",
  "key25": "2MnLthPhhpXYPNaDr3QevNGgpurN71gnx19VQnQQNS8oHTk3rVCjC6FFCc9jPoWK5Eu3jBKG8154ftq5QhzqDyMT",
  "key26": "5EhgRBy169LdfdTMDdczx6cQQ2FX8gQZGLbppwVUVnAJUDogz9rJDQyM8ZxzjsL4wtCmNYkqG9ceSdZi3csPn3PQ",
  "key27": "4Mw7mb16xiMKcPpQLCPgjYmgqdtW613CD3gyEZHrSqzcn2z4BBkGoTEnurCNFHq3Hyk2k2vizvHKWFC3JCukWRdW",
  "key28": "4Lad9kUsi5CDDvZQpbS5G8XzdUiQYx9zYmzL7cH6k1ALZXaYx9kfYafeVoBtjiUWze4GaKH2K6D2iuE5wZJcEC3K",
  "key29": "5rHBxXYpaSzVas2gAqGYNwynwSkE9R7dU88nsYCwixVQyxu4tLUDt3BMLmxaVZFa7hEH3DrLeFmSYXuDqLH3SHsW",
  "key30": "N6PrbA5PJar98984QmrNJ9xsf6r67wkEXLq9aYevqhZwR2Mi34yqojyo1edvt3TypSwU5ok2W1Qo8Z4KePSgWZC",
  "key31": "3Fe7qeNuCsNWNpJBWvnx3RXKA4HJU3mrTzDcAbYpXLWdiP2PyghDtTne7EbkNKDeNaQBBnSAemVkeEKYUqBHZzZ9",
  "key32": "28r2sCsp7qD3eQzze2MPRppviUCd3QNnxg7nzLBR4MjzrBtetoh9yzaiBbkev6hEdkiw6wb4oYiWydF7GF4GNCnJ",
  "key33": "2SvFSgrU4GJUCVqEyPKWUxV7AAtYxzvYaN8ib3fZkVT5dZLmkjgc2s6Uwchj19Uc7LKy8CFYQdACYm3R1ANH3e43",
  "key34": "49Xhoo2pK9EbEqurHeUTkcoKb8xBH9YjuBd1V14h8uCTb339F8fQhPCS1wYxDszv93SMdjfUtuYhWyEXMoPFVRk6",
  "key35": "xLZpXhEhPYiv3DKt9WorSWepidteRLQQWX6ocb68RsdHVGve85Jtr2UHZaFUGYuwncUyaercecZAakpxpvwTiXf",
  "key36": "1f2sTJ8qchDMUQukEzJsndGBmsbbSKUBxNdZRWDxpX2Lf3cXLXHAGjwq1p1c4mHWGDun36YDUndafL9FXh58Sco",
  "key37": "6KzfQ6gRmMB7eYvgHgSxa72sbmhwNYLcLGEs9z5PvBsGKPXQVo5JuJ62WDRDQiQ76rtokAyFDCVXFK9cfvBb958",
  "key38": "2FgXmwVX6HcMMBx6N8phBjbVFuzqLfPM6oAEvjAoKpXV2p4hGz4dNvCcJ6Tzbj67Q7hwSK4nu1tJm4fysS3shWmB",
  "key39": "4rP3wChwyDU8Gn9Mjg3nFzfpaCf2QhBr3kLhCfPXskNv7SfA9nDoePxaf59vqGFppNesb868ZMP24k8aJLEDNVFQ",
  "key40": "3es5977hdRJDzpV1eZaTfz7rjgPLXcANUALqRQDHUmaCwWu51czeDk85WcfgUnRZGHwveKHj3KkEvqEesdWUVU3h",
  "key41": "3UKhCgVarhRejnSbNho9MTgyiK2Ew5ZzPsAJsw1gsMmgDybKbVZKcpf8oZ11nDf21zavspDWockiqTDgg6kS73bx",
  "key42": "4BwfcuBXBTxkaCN8JbmXVuBpqbVhsHZyEdMcJg87Sfo27DfF6XGT9t6yi3sytGFRfKrmH8aa7Jk3pBctpQAmFay9",
  "key43": "5aqo1sRStyYKm2TLGNrBb8MwCWbDztPzs5VreuSYEHBepHebW4RqxjypJQkZEs2ci3W4PpCG5xxscHpzzmRpx4tk",
  "key44": "4eS6gMc5BVUN5hyzvqB5H74zbjC2hpaKbXK6kqUyhfBGLUj3PohM54s1xiNVKA6EqJFs5KXZQYd5bQh6xsUH8YfA"
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
