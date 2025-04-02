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
    "4SAw5ryB4957yGbwga4KtQd1T6XX9GHRCLGz1wYbPpoJPuhibXjJX657ByVKGxjhcXwZngQdBgedpxcpGXQueqY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVRRJiWNagdqwaFDQVeijh2pgN3jekMPiFR8UYmBAHpnFaPXQrPKVRSUzMxeeknRxZGLBx2eyUsLYH43F7ZLuKD",
  "key1": "4wWdKVa4RLmDmpkaFkixQm9c4M7Xwib1Gv4rX4hUdvS36egJEKTeLgYBhsSRYVv19YEJSXqXqWkvduHwXP6Dvpn4",
  "key2": "4dJnLq4SCoZY8X8T117pzDZSKLSbCs7wexoQQLfh7obYjBWVyvxh5SvP2DcVVkiTiDHNmT4rpyvkkeQiX1oYrmun",
  "key3": "5gXHQBGbRPaw68dtCSe3uXkyWzuixgAVEyEqDXLPdgStLWdkJNZ5CUEmrvwHygRW3iTgnZMuwGWgQ3e2dbrpJHwD",
  "key4": "3NkXaBazCQQNXH9HvjjM5U4jQytkPoyc3WdVJ8A5UZYNTRoCyHm2WybegRhuE2h4yuMABR48q4sM8bGAiCjuEzWd",
  "key5": "8Kofy9t2gSHCSevUgmVaQk6ZNUqxVQyZMPWNUoVAqtSv2yqiBGSWjwfktFFeSKqeSSCighaakTxcLETD2Uw4Sry",
  "key6": "2oXsoJdD28bUtBXPu7VwB555GG88z2GyCw8JhyqaGbR7Nwy9HnSWo2h691VNryHAiCf13cw22a4kWHQsU3fQeRAZ",
  "key7": "4qfQWiXSdWvQfs5aZWEbWpFdp69LLboEFCbfwwFMxa8dRDgi9PExwk65PPgGkU5a2iWX1ssqKNZZfWftbyQ5k9Pz",
  "key8": "4Z9wHvf1Qonf4nFNk1Cy4ASB97SFTcP3sjkJUxEDmagYF3r3F91SCucATZxtYUBTrwtVuqdLatpQ63zaMDJVP5j7",
  "key9": "3E9czPyvJi2xrb4d4e3FpZUETRfc8WkWrgkSA9zkmzyqrdnCKwFNZyebuQbpi8iT243Jg3CUxyT1kdmsndBZohbs",
  "key10": "5A7fJVrtqow4hVTRSjuR91uGwfzjtsj3ruc3LhpFgrMsRH9SHoAo3rm9WtBfV3s1BgomEMqeSjbiBFcT5qB8iYDi",
  "key11": "4N7WwSTonBmCmvtcHuMoy4S8gQahREsGWMtLLyq6wVZXrYFLAZPwANEDzgPGM2LSi56qAdLBNctcdWr8SzTEiUKt",
  "key12": "A7HJm4jwfPSL4TmD1jdTPiLETHMVNJjmzeYEzJTFBa156ukUMxENk6pbbeNnbEirFKjoqv3xpXj2roLqaR4WZbP",
  "key13": "4cVRmR4M2PJuMG4dgoak3P9QZZER5swrcHggXQ2cNmX9upLhfpRVVPsnNX17avnWek2uuxPQJ4MGeEydDZ9GuxR",
  "key14": "2PthSkduYK4iq6GSuxkhi3FcycGzh8V3769E4S9DwZTyQXgrhn9cFn6h5ZFFb4ArTeMJQytgxBZPm4NCpVYBgyeX",
  "key15": "5dcHeYMyKiS3fKibt9ymiMsDoT1CRgqJpqBGxTv3pwej8rR9RY51C6vfEa3AHfCXeZcGWa6A5HdiHcZhgVw7fq7x",
  "key16": "64BZbdE9g2xq5gtgTD1YJBYcsDQJdXcAygTwLB1Srsgf8o2HsdR8PJK8kfxhkFcuu21pJBkANGFzdNEifqgXLJ2K",
  "key17": "2nV741J5FBemnitzGrx3eJKG73bxXwyiB8goAsRvd593ZVubE21CtkLVRe2938McRmq3DFR8YvYQ8WVTtbVr2gxN",
  "key18": "564GX4ubYPeGBRTqbk2qMcNqVicd1qRiHqj8aFG1tThT77abDAtVSgUx6GkfrmmB7QjmJQ8sNiNsaAc8JtPMwuCm",
  "key19": "5vzePYiEtYvRafMcHAApWK8F2mmh8BKNjYadmLwGghFa1pNWEZ1AiLTxrkUReZrUjEsL1V8ywLMy45shgJ4RNiKx",
  "key20": "2GBepSM8jmTRyTvpJ734bF4iYeMhmpdhgJE67RV1X4AaTtGyvA3uXXat5avwpRcoA6sS1hmY1ASUumHLccLA21gD",
  "key21": "29og2QmcmnTzCKtUq3PqofeKgz1dMr7m1eS9ni4BY4wZTx7yPMSK74GE79Ecy32AoGQvLtLHV4CoogeHFkegmLVo",
  "key22": "5ZGYa7CkSoEpCGBPgM9ijnHXyQpcJbten3CLLAc6DXspYWofWWu5WtyUuVPNNWSJEBLisQMRmBjAm1sPtY3VYtzF",
  "key23": "2y9g4XxjneULq4V1XNh89UZvCxmzPkjKBRmKE7gCwiyD6oyNjUMfiPAKLXrrPH3zgMHTmudCg67iVaT26PByt91L",
  "key24": "3urtj9EcaGysbAqzBPz6hAuL9qQ2xH1sMzVn3nQ119kX1pbjcnwgTaFv8gu5QjMiNZBv9XFMCkWyDJEiozYcvkTf",
  "key25": "5X6mfKsqz7oz4dL5Bzzqaaz9WaFkZRre2ZsEsC2Qjm3VnzbywXFbtHQQepaNNKH72S8iEDhFWtcmwXGY5iFdCoP2",
  "key26": "5TUWptwdaEgahwT1s47CJF6g2V3up1TiPJaBosQ2QoRS9KSmK7YUDpixPD99yNKjidE6g6Jvf2fRKd4j8PDKP4Rt",
  "key27": "5CjtqNSMtfs3iGXSyamNmECaQ3ZjGiv8EcGJqEtYvZQYqcRbwVVB1Uw71b8AMppVC4rpFQ5pGx9HzvU77YGmZa9C",
  "key28": "daGdLS3aESPeTTMCvr4qukrKFKhUSqffFTJXeiGcqx9wPG6etefGvNucPXCworsAnvi1H8K5sBK5621jgwVVpGq",
  "key29": "21jHYADB3ea97Ee9Np1L2weSiDdPVzfBb6CJqc9mAF2fLcFnQeibJscMgdDwY8bMxp8VVj29FHGavYfFkxQhsAjv"
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
