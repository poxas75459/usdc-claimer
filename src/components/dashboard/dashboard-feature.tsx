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
    "4B8qzkZZKz2nEk7EfmJtxpuQsDbZxNSrZmggDpUCwvbygZkRJrRufNmAq9zgHQyJF8oF5X9HZv32homunR6W7tck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sw3n6bYwm2Fge37vmvEtKhsGsZH5qWmEvsQashRo6fyGBt8JXGFwyrwu526Vnnkh4Ykt33ZH6f8aoHnegWR7MBq",
  "key1": "2mKC7xKR4LavMpvqJMYhsTitKy6HMWKwmvNqBuY9taSt47zynXc6p5gm7VCSKHwhAXaQSjyWRhnCmcYtYoReJyzN",
  "key2": "2NYQuYMSLi5op5A6h1SkZfoowapDELa6X3Rq3o2QvdtGhhfHReR4yerBfZ2qknAZKEpqJYFWpAhvCakC4YKgbwRA",
  "key3": "sYrrR4QWZS6Qv4Bs6ec4TN747pUmT7hLcUQQTSPEdwCALoygBLdTBEaAFc4Ziua5WXaGnt71T6eycd919mMsLas",
  "key4": "vatGq2hHCremvMqEmPEk3iDWxA8xzhPznnkaoR4d66i1gbbXtne4YaHD15uA5atGxTaqGEhNg6FMAV6TzZejRNw",
  "key5": "243NQ93kPvMvssgdhCReNnj8D5GtpYXayQNz1avbMaq5GFSm4LsZeHsAXu5hfSUr5oktCvgSasQxscUunUXon4Ux",
  "key6": "3WPzr9nzF5ytfMnzxGPCGo3DajNptXxAzZYD4QycYYYqf5CahopxssaVUPP8SsVba2zDhpkJFbu4NGvCss8i2Yof",
  "key7": "3SEy6U2f7SFBXFBKsZbNyyHK86UWRZpUfnwHCy3BpQ3vcPYxyxWGLFjfpELL7R3XPVMbMuA6J4nM6F9fAHX27KnF",
  "key8": "schvHSNAvxe5idmcqQbYyupWoJrT9X2xnoBL9xYw9HmFYaAtnvQ5NdUSAsgp45aJF6GDtzrekfG4CgwiEXosCEd",
  "key9": "2oUPakNVwmmBBhDxv72HoqKbZdVP17PWpoXLHKZJvzSjoJ5T22PP6DoisBp8wk85rVuXNsSxngqrifAxEQnWXnwo",
  "key10": "3yCF7jnsgLjMeKZ4fpm1nNTaCCVzvs4h42xGps1rTYg9qKNmvj9hQdoTQozGmToWzevFw8c7ug9H5VKwc83xS1aA",
  "key11": "4EB1KhqhQmHoN9f8ZhaSz1ri8aeVfKS9E3NCAGgi7wHcthMgArLQJZUzj4UmiThBiZL5zw4iL3JZXjeNGEPCeVtg",
  "key12": "RuebSg1sB7vyE4GSDqbaruhihvzb6Rm4HTmLJQZw5mbhN3qF9SzijFdqovXuVN96orskZ5M7eHegkxZS1oT9Kpt",
  "key13": "67fxyDiBApoGPbrzny9fDR3b96P2qHVB517PYdgL3xazFfC3UhfUZweQqcqziSa1mr1vzmnARpA1JCsaozZLMWnU",
  "key14": "3uyrfRE6A78T4kMbUdJBazzyeSRJEWd5trbeh2GKuXATqfMEcZ8Wkv9eUMPWvhyCXyksShaxmJeQPhs4PoBBBE1S",
  "key15": "35H5mJ5wAnfPuTXzpNnBYL8EhhYCVjRnw9hVqYnsd1xHRnSdUDQ93XQSnEdQWNDypvxkTBFmKhEpqoqyDzKNnPaF",
  "key16": "32nrwM6oyGAaAJMgWkV7TnF61g1yLf14eoxwRsvivXn1hmwann6nQxpfDpYewBRvFP2mPtnjkT9vM1kjdaUhQYHG",
  "key17": "4xLBM85dzgj3RwKfYiguSsXvrVbcYizcPMJLBMWPBwtKrbK12V2tMiZv1trszfn3AJZBFDTsQg9XtHGcdSVpUvav",
  "key18": "5RGMQEW4pQinyL6eXaGZ9Yu9bFcXwyVDoRK35TZs4UMRw72SohCEzJS7ShbxPWee2j6kkePKGFLMHXUqgrsEfATt",
  "key19": "3YTfK96zmnto3cyCUGmuRbfhrBGnCC5VKsqsYne9RGtFmM2kKAtDXfddTEdjs4J6vToEMRgznUhiG8R9siqELn4d",
  "key20": "2UBQ7932NgyZHVE1kWB8guMCup3fgTuCWMxJVbyFshU2oy2CFJtWjDttpRFEbB9gf4dHFEzBpxuBgDcvvTa49JL7",
  "key21": "2NqrYstV8gGRxdzBjCgHX7ekoKLhn2fYLAiTUcBsnh44ZM2FPg6KHzAKMTcNzykMqf1bgmdHcT1NVDK9oGqSx8BF",
  "key22": "5m3tKKkLaTU4JrwvGc1i4tRPuktV1gDu6z7svBm7CtrnZBC7Ej3rGsnHTRpDcZsgq8GXRxUb8Xr5hMuDUfgzunz2",
  "key23": "3v4HHaWCV1CdPjVaf4gc24JYH395rnTTNf3zaeDk7L21mj1SByykQREr7rLaBhV8KvDaFf3qZAQV9TMzaDJFrPBd",
  "key24": "2QoMfX49jgtSFLnQkik6DD1nZw5sp6g56whPuxBah8vFCoqGcKz2strButoLGXtssSfAQbgPBc4HJmNiNLesywZD",
  "key25": "2ScdNypeRuvKWeMY9M83Hevi3bE8D9ZnAYdWurN6W43T1rWEwZ6egZtfGKc1nXE9u5967g7gjUBYhpYKo4zYtx2L",
  "key26": "HuUS8wvhvvj2WWVeTxcEQGmmLFxffopma3WVNdVAm1h1d1R5XXPFGzJ5rqHYN8x31CeTfFrXM4oZn1RTLbiBM7x",
  "key27": "eTJfdeTza1iwBeBgTwRxYkuSAAB2wXt2N7245Lb2p9mHrZ4Fv6FGQFxS7egMpj8299MV2HbcyuAbpymVnRUBZiA",
  "key28": "5Mw9oXhukwzWasmHvpiZSZ3wcDvkCTUgX7CiL1tKG1n9dZ77RNDVoN3Tdj7S7TmVMAdfkRhHmb1Pm4CEZg51cNpr",
  "key29": "2Rs6XkLSS2gfhu3nFmPd9hJDhmemwKVRDBmNWUJRSKxVMsXCDbph3ZLACTyvgRSHaBB73e8SPv5AyBHkRXMzSiBZ",
  "key30": "3Z9rAsxzGbrdhT18dx11CFbHqpHUZ9mogdPqDxyo4mUj8ZT4vVZJPwcc5RJ2EsPZ7S7HdLuCgjRhbnsq9RjtWcUb",
  "key31": "3YF6g9MTf1kMouoEzQQDThAnq9Hxw3VTdXh4nXaKkqWuDmxDavfi9eU3f6TV7kKV5dV8ir4D1eKsHL7qKnbnKbEb",
  "key32": "63pDrnEtGdYPLW6HWykg6Z1AC8aj6fwtWNKLwosewDatSnjj5tdBmvmwTcxKtJL9BNKf7MsyzBb1PBtHmaERTpBS",
  "key33": "n2Ge2ggyLsphByunstN5c3JKyVLQvmdCczGC536f7QpvWMfEHwW8jgwnkDY4KJiCW4s2DCtv84sNKZsRjRqKpTP",
  "key34": "52KwtQU7fReb4tuoTxqkD66e2frsCJQJ8HUkAoDKPJQvFBXRrdcht8EdJRKjikACkUrfV34apscKupKMBHbmRvg2",
  "key35": "2o7mztwGaTmEk8ELVPXn4D88XxuU8yR5NgGdSZc1qc6bdH69jYogowV6B7yU2tuLCq6XoXsnHri3QTA8jJU5wsK8",
  "key36": "UKbbEFHU2uJ6C1bziBrYuZLAVwdQ2n6jKAjMK1mTT2dJ5jLBkPkoaB7EtNGqgT7xtsFYQFAbT5LzkET9fVgo7XS",
  "key37": "V5LmZZKUnX6FYCQoNRknYHgtjGGcRAuFph9rs85J677BE97b2gtE74GDQnqdsGpBBMztWtQqD4LhNnBzyyd4Cjr",
  "key38": "yVcXCYytVgUxo9riUVc5HwfnvUDGpgWmJKZ7JrBdWQyGYcPRoXMkbnwnjAQEsreQmU1u4UEq4Q8m2R6HEALNab1"
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
