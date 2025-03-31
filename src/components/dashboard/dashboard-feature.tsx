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
    "3cBLs8dxDUknXDWHN5AY82f2kZGPnaTNz1pngAsZo3jo51uJy9QjmzYfLWH1nKFACSGNZYTsbhj1q2Vv2GsqmEma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YXsKWbF84pt6MW9Mu8iZhNuJBLnDrDyg4Yr99uJBXuNAnJUg2DVLwZu4YRaC1U3U4BTc19rQYYHqYLU9R3ETEdM",
  "key1": "FhWGjt2DzfTkT9hb9iUvd8EJy5Y8yWK4Xpc4gMKekEntQasmUhcNC4xFiipW1FPCgfZ25NgyCM64i1QwHUSLEzf",
  "key2": "2ZJNhkpDMCMRfAzuq9sxn3c9ky8FiqGrovyfYX6NKx3KwpDtHGbVPkCdQHZGVRmJk3BDj5K5oezTSBm2BcnCzG6f",
  "key3": "5etpUwjMfnLZjzR7QVDb43qE2pSXPk1KGmEXcnhLqtgiRQYfn937CQj86zBYUZSyZZqxankgZHcMFdyVNnjuyHMp",
  "key4": "4q3C2nmcpx3bZW12cxNbWDFFwByLkCcWAaqnAY5fTN5CiyUrG9jNCGWSVAMnjpAGTpHbAjruCMA4o3CEBjbXQaPb",
  "key5": "5JhGx7PQKDviQVQsJGozuBGQySkkG9fHgqeaNqmeUP5VBDDzNiFZ5knYAdxzwgrwAZxbWcme9MnEnMbYePwTxUDd",
  "key6": "4jbgceqY6Fx7ZrtdUa2dDSUATuUd4ftrNLrfLXvpneejtcpEtuok47qk5auCvyCqYnLvYNxyCvEwQC3mmNiuJNUu",
  "key7": "2THA7v2RBE3mm5pEQwFjqCN3SWLJAzRqAM4Z7D2BQFbLz69D7nsdp7Ho8SdZXTjrVTtMzipy3Mt7roBMyaPryJy5",
  "key8": "2zss6STCnsPqJk2nmZxVWKp6hKfkf5mPkdu9sugoBDbSLgQdFzNru2Xnvijxa3mgEqACMC222tKyhJa6UFYxuDrG",
  "key9": "2XAkymp61uxozsdfr5mXaEwPsVCkG92Bm5UftoQNyFAfm1SzS8MBvSQvN5bu9BUvKiqNHdUfwcxMZUdwCPARqiZD",
  "key10": "5VLxcK7VnzVpPhYBdqtFRqyYpqCVYguwAxbVDAMP1amCknNvLmgusJ9KLZkUFAYnWgWybvoyg56WjEkbtV2bRYqE",
  "key11": "2SguGom5gxGHrsZvedWNydQAtKVqLEvvyXpaSAF6mFu9rKPmrr9H4QCv1oFf3raCZnjTKLq2toFpwwxH6zV9jhSh",
  "key12": "3jrwbnbnM662Ti7CpwwwjmfTH53jyCxGr69zxVNo4LNSsEBWbv9Bbsmj5AtJ7kQUfHRvR2U79rg2WGf4PtohyyPa",
  "key13": "21HyUTW6uCuHD2vA2VyGmQREYXENittuWr4YGApBhVDFdSn1YSXGdb9UZAsd5XWPDWPBNa789LNAoAEKcjaEdtdJ",
  "key14": "4ZcCjxxdZ4RCgNPP3xvZcHAu4nbFqFLRmdfHgPgiPUkSVjETHqSZZ9mvLTMUrhjNYMVX4MDcmXvWr7yRvc77LtXR",
  "key15": "39MMopY2G79FDrnNQsvXPLdhshU8ey7V64MBA8Bv3sTagvirXV4CUHZyrtFC8ygsVmfBQuFUkmXY7Cpgz2dcHBtE",
  "key16": "5eawoTRbfEf6HWpyNbE1psKVRs28J41u21GB758tao2efnQe7ov7NLPsskFv4gUHqhVxJEtudBmgGfMdUSGLGhnp",
  "key17": "4nHfo4gYLyodcsqwvnAJW2kzni2t6dmdV2k98aoUAgyTvURdMos3noogNSz7qppTGGV8MsaB1qhgsZ3kpWktDumW",
  "key18": "5smb6XSHDCLbA6tmtcf4zU7McZ9KPMFqiiV5cuLkwZxYdbBEXAYkTevYCt6kaCjyNPBEAkewSu8WcCN3kB198W8V",
  "key19": "4mESeEwpzNvhZSXDBptG8ikc5pdLeneMDHkAUxJpuKsfcPYjU8Wt1fzt8ZjDZqMfn3LfSSThpteQi5wGp42aiWxM",
  "key20": "45786vng2hYxRHK9Q7o8Maf2mdMpbHgNVU511ucBZZWUm4JUdHZe8EVAr8kkupxZBJpFMFgFV9yytcwF4tqT7UdV",
  "key21": "2zKxnvNza5xpwFVeiiZTAhG2skfRjtAew2zxRhrPykWVH9k4mUYvkQRCJkdNQTozGzVLHASenBChFcUfuAaqGd6w",
  "key22": "22ugM5xPdieAG3MemS6hvrpM2jpN3R821qu36cuUNTia2KiL2Jr5rwxeAj2xMHVwJnDAeRVs6E9tJ8ZbkiFXs3HK",
  "key23": "yYQrxDtM8dy5pKRwTKbaSpZbyuE7m2m1aw533HhH4cW81eqqkEEPkRZWdNHgwW5VTr2b56M6TUSB9Wtx3V59CJN",
  "key24": "56autg26s7F1rdTLgJEEEPHuZq942mru43HJfT3RtToa45MSttv5QhGo8hcc5UFgUoCTm4oZe8ufSTPhp635WqrJ",
  "key25": "4SmFwovUcZCbUMSAYCVkbSAZ6puioNgwKQyo1AjE86UVhpFmqrhQVftLkqydyHf3r9gbabNs6wJW6DFAoAeY6CeG",
  "key26": "4c5itqwem4ddDTDnbhyrrHRdxG4PCvmq5hE4b6FuiKvmakbLQC7MphXhP7a3ejhmcBd7jFaFRHKa1TvJoDYv2gCf",
  "key27": "46ZiLPZrFdi7ecooHkqozhcurgX6QHtHsiPTXgth92kM828TgvW6r8ST5gmGE44RzG2Vw4k9APpKCz2JHEwhT1RE",
  "key28": "5ypEwAMW3egveUyF42osa5nT8cDgBDeRngpPwypujfwba7bryNj4Ebw7oW3fedrbcVWeeP6h4qkU5ZpVo1VJPwcj",
  "key29": "4kAqEvAJUEZgk3HkSt613xNXhKV3i7AxafcZi9Xv8CqmUKanxbJEQKpXaoosYubKQrtdFMy3hbS3dzg69xFhxH6R",
  "key30": "5iZtStdkZFt9f1iRJEswd9wDp5eqEor4vdBGuARSUVxYkE3rBumsqwnfpWJT57J1cMWVRPFDJQg3VsFWr5h5MLJA",
  "key31": "44h2cSjdXiJAP3C4XnMCnWrNbhnkbLKgKaeEJ7vFHpTf2ACUBfWx23Q5yCuvoimnawzaqpajgFkxuRjoW4YzU3pC",
  "key32": "4buDm9odzfbgU5nzAjLRCCZjnwxpg7Aw6oz4QGuA83sbcEeWV1pn84DR4FQXo7SvrajVHayCXcCvy5eSmFhYMvU",
  "key33": "2XtJVUUvuzGeFckW4dAkdet7sf14SgqnunWMyexrRhXXCVP1UKb3nvTkywATv83AweLUN43GR1zcQycurzaHFLVv",
  "key34": "UQB1YgWfFekwgAUx5sZpNjzFT176XwAm1XaQmSsyXiddv4akBkx8FAWARTddyyuW84bu9Kh2YRK3x8rE5dSYkkL",
  "key35": "2Bt4hqidGemHK3ZDRfpcXSHTowr1d3gdbEL6VF571BMg1pA8TQnbt5oe5m8jDgoAtHu5gbykdKdYGxohx7GpEG14",
  "key36": "2GQDPCsyotoqv9mmnDyuaQyYWggayg5Nqibu4pc1hYFRrfKBbeYF9KVaGxdsRsvYYeS759kcH7HBfLjQ4ZEh7EFg",
  "key37": "BVM2K3K84Crk5gG4qVJUNXo5wR8QUShzQQyvEoxfmcVuKCAkR1PG44Nxk52CxxN1cyhxsQYggeEb6RAr4e4u2oR",
  "key38": "5FjxTpYdZJg3csNmTTCkpTkntX67o3jEea6fBKNupfcNKvfowFgJ9GHAiAyLfjuUZcE3AG7i9iic51vQBYR8E9tC",
  "key39": "4CQUVcTLDZCAhnxsrJm9xsqzK7QpnUD1QWCuRfJM7mvm6nqyjivQU6WJRZHxykMVYgYqekSJCuiazLako3aKfzJY",
  "key40": "3aLCiSYBXT9rBPiPiRSbbJ5tUVTM5oUjspC9cVaAjcgtPBjX7Um942meLmGSAdfAizySD1ukWtD9W5A98MJ6hbUh",
  "key41": "5DjjamDChv4aaUkgWzpRF5FGdMEGMXtrGWW8Rx64oAvfS84tYiYz9QbCfwZZAYNxNEm853Fr84ChooVLTmxYgkoy",
  "key42": "3UGDHQHt4Ug8S1czB7o5NUqSQRB3P5dbzkHEKmBpozXwE2tCc2ajyHQEDXYA6h1RcGhUTeD7acXpgkCQ9Ja1EVdv",
  "key43": "37tNymT7dbeou5D1cyBLiCTr7735f5nTRTw64Z6K1xbZXCwRwL9XAA5vqnKqcH26iSWuagZijcCNtrhC3Bg5MXNH"
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
