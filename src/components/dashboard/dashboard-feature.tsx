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
    "65ugLGcMRovAptSbxh5hqvysxZjz3oVax97vhsjjnFSxPtbA2YQA65EBRhedo45wuXPUocwUQHYErwEViyYHccg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BvRPhw6s5qxN3mmKLB1JnQX6WSbUa34U4L6MfFuWMdYriDpFiVFNP5SMTWfXAy7wJsjD46HZqtLMCYJuL8n8dVA",
  "key1": "2TwhCzhS4zEgL3CyvUF42wDnj751C4ZGSXPfbJ3id1kisS5uoaoA3Rnw1XuiL5vCPvU375o1QLkNuniJGLa5bqGV",
  "key2": "J1mP6TNmcn6QvEYts76StHuw8ZRqp1hkjs1BNhg7ey73wgLNT2ivjareKEVdG332vsGsgLxLEJc8K185TXebUqH",
  "key3": "4YFXwcgxHeq1WsmhkJpT1Kz9tV9RSdSMqVDjZdmJaf3wkm5wGubLqeXc7qYLXzPtSMK6mkb8eq6MFfePJMWqHLZK",
  "key4": "4k8GPYETBji6yEJdTmdRS8Sg6QEhjbmbHRYrAdZiZXrirXZSkZVSssXAt4wjMx3844XJcuAqD4U9oRwVVqTdpb2Y",
  "key5": "4juNegGFguCGuhx2utcFDYkmNc4wAstWT5wo7ymVipCWcqhUM6xM1H7hhTQNLYEg48xhpvJtx3P7GJiBFX5hDGfU",
  "key6": "4kS98dN8SLUaFuAU8yw9vwhuvtWggaWnoiFBTd36tEQ4Nv4eREsYVcaLMtag5V7UoVmYicGzhQzZEijRmWCKuDqg",
  "key7": "3xEFJKJYSXSSQXXGQjPcd8ZJxDE4p4FcWm8kBiLPEBcooH3UQxHa124YfPT4J2mu1Moiyn8dVofyf1YC7kSSzNuU",
  "key8": "4NuUd7z69VfNbYwhyT3ywWuUrs9wzXJmZgW1jtJfrn3Y72oRftRHY9r1bA4xAiBXkVobPiSoYnjgv4YSsmRwLjgN",
  "key9": "5ztTtePS2mx9fZaPHidGgWWaASjdfCKPRiXVtCphuZiU9Fw4vRmwcrjqjqrjboCP8zMBnVAaP72f23Cd9bDbAz9M",
  "key10": "4pw9rSxXBGDqGJEQSNXVkkxF5msuz3bHRNScvECngqPWdU9QwWxgzBSYMdzM3h2FnBdHMG1gF9cMZiYBtyjPk7YQ",
  "key11": "5KThc2wa7iBUL7CQnqk3HYJsswM6we14bNt1CiNthAdMhQxFwm9kvcBMnavyRRg9FCaHxiVhHxFWYSUiuZS58XUR",
  "key12": "2US8HMnNqDSHqs213WSh1vsAuSHhAtz7jhGFXfXY8gXyYkuFR9QYz6pvjX8yYe58Ytmvf1c1xyMVhVMwjjouu8fJ",
  "key13": "4432SooXpfsNfHnY3Jd2QbKzfhzeYVuvtqKgPkr9TG8Q7McG5qMewqHMEpYVyZXhhRAXNiTjhr69sgkTdPzydw4z",
  "key14": "5A67BwanuRN3d6mg1a8Pobzr4JT8ZBrLjpHfSujkG16nwwFzpsXSb9iF9ndwJVqQQ4FSVMjTJcS5CJpwCpSRpdpx",
  "key15": "4uMXisHbSYppQyr2RHjCrPnUqPRULUb48CEcitez9LzBPAAi9yWXcNNsVQJ5nA7Enqb2WRJvxMPibs3FRUw2uFdK",
  "key16": "5cfPZwE1UdMjrodsT13BCZ37qFYgpJSEVGcn2FuY8E7MeHTF1h8WM9UjShWcRXj46W7J6d8x1neT8xTWyTRtVFU1",
  "key17": "nux7ruTnnkbWPbkxiFX4UDRAeNfbLQMqXbRZZbr6wVDaVAUx9YH7JryfAWuP1hKVyhqU25XL4gnX1LKHY21XfQw",
  "key18": "5wfLYuPm9Tqr4VL48ZtqxYjvarC2T94F3BWAEfUD7UHbTWMuaAt3YKywWbab7ZmvpbVQFy8tJ27WbLPLuYrWmZ7a",
  "key19": "3ps6zQfikDSUFvEE1VF9JpCQygS7XFCeDyANWFDjkCNLb1YfEDGoTKVTMgJ3eVK5WVTebC6Bci2HdD2cpMB4P3F4",
  "key20": "25KbVbmKBWq4B1S2qcptewfzaLGB3r2B5oXxX13ekexuKmyT4S1AjkXktvKziMRxb7ytqooYi62FyMxUAM1HmgYp",
  "key21": "647De8R1AhwdXsqTxRL6JYBGDh2dqwdtB9s3qpVZvE3y6PogTV3jz7ox7Bj6MyvyxHMgDwhfDu2Megq4VvQ2KPgo",
  "key22": "5iicSHUqWiQTFan5QZWLA4TDbdFUUgGXgmsfBbVnhWWRCuMyAvm3imLPXNVQ8tGKJStZTKJaw1JKR1MApfQNw1si",
  "key23": "5KEDGKtmzg2Si4ojHQ1XKM7JVtHBfoiivZvwWEGEgJs6Xm8oZUK3zWs1QWKxYUw1nx8hMmcvgHY6S7cE5PoKPVgj",
  "key24": "4WLv9E2sPJCKJ8xa7U7S4iu3cBdmj82RkefSzMnGnKTLomsMEbwo6kLFRHm5r6iSXtGLGyTa2iTJ514u7dXMTX1Q",
  "key25": "3aHtK9ynxgzcSLn9bpLPcFiaZnWwhuLqEH3314YXwhrNsKhbw1CjeFXD1Zy9kHBE1VTuH39MK2H6HpnXsSpqkqfe",
  "key26": "3fkyJEsNaDuVBbdiyjbt819zFf4gHfDZfMqmg8p8bnekUVEb3vPZucrapFrFJFsGD3WCuzkkzuMmviUJZrTAEbxq",
  "key27": "5tiCcxtaJ3SZkQvq7sfWdT21617LpHKyfiuqH5w7jiLSCMmUVarrz7nsdZH9dggBox5317qREehNAgJUFMHXhyia",
  "key28": "4TGx7nG7t7Jw3SqFvy61Dadrw69oaMfUsME5JNbJGum4tPsYBP6L9nbHLe9dorGdm4M9Gmffk7rjfrdPNT2zxzgf",
  "key29": "2L5J5K9qQ2cRGCFn1fmBD3yyDaCAoKwFPmvFX3MpNTpGDoeEkdQ62KWtQ1H3F7n7sfyg4xase5xETrLsii4abWd7",
  "key30": "5NiwmeLVaFjRQ6vLgFA8i7uKtHromQ3R6aKF9RDefHxaGcxWoRdh1q4XbJ4uyC5V2PDXKAEX3TyMRjgj7yULk9rt",
  "key31": "2dGNbUCbWULKase9DhhNiyEVqYoDjyQrUZkNERwYGw24Zx28NT7hLUSo9widGgZMQoX7bFTwsSdBa6XnpNhhP965",
  "key32": "5mJf6ACXLpcdrx5APU76CLxhZ3Vzgk1aGQLJnU1uTG4BebPREyGJBPAnjj2Dvqo6RQLhhnYg8MJsvydrnfFBFPLJ",
  "key33": "42SPdn8Kp3bSDHr9SnQ88uHthMDvU1BeDkhQADfxjEyTNwCuT58CSDHHQ22KNP7ALqKZ3ivKqLgiBe1eDb9Kvx9G",
  "key34": "5ePGYTHsDzmTWPPu537VwAiHavUxE232HVV3AVBZaWYcqPcsxsMkScnkPnGUmUKMyDz4KRUyt8YvMG1N2u7z5jg2",
  "key35": "2CwUvjmpNSgigqJedFPg9Mw3KZBDiSajMcGb6Z4DKvNGtgifRQcktwFsaaddaBwNgSnPu2YBieUwRiCKfy1RqveL"
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
