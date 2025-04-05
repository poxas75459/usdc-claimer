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
    "3sQ67Nx2KPZoC5EqrBavWEJgxqaSTeDkmy1ZdTcpnagmCJmcimkJnRYwyBVStKTMeKfXuNnrB5jtRhKUpocBVYtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vaoZQeLGRtzseksxEwtSx97ifX8Khc2j918FCe5zLnWyDDqgqwTYuDCsg7Wc5Wy6ReKkauUjQypsMKDkYQv5Sun",
  "key1": "2NhztPSNxXXV6xtauvvnKyXrHXSiSC5dXN9WGfArozTsDPPj4it5thQ5qpfira5guitpLvZAGgUdpoGqx77YcMkP",
  "key2": "WkmH4MjfyerR4912iR8jPPJHtzEbgn8gRSGJXGGjyqA8AHW5TARYh2iQV13ckFWTGij3BeJsYWNdSpnZjiGg6LV",
  "key3": "5Ex2FNPRL9XeQdkkLxKtMCt1T6VJadYnSQZdKBbQaBuNrg44WvCs4z2PKgBbEiikhgJLH81s5ibxzBekTEZoQkxR",
  "key4": "2rX8r7KfKyDCwnkCNSynBmoF3HgykWNvNsg2GNG6HqPyDNj3AiHuzHzAw8U9764KHebr1ZXgyA2MqnMEKvoKw8c1",
  "key5": "v45nsA3zgf1TgZqyEXFVwKmASufb1RpUXrDzKoKY5qS2yepq1j3bDnnNiwwFufG2HEPvhJ4ZBtNxVfNqf5D5LhA",
  "key6": "2UUuJZ38JYNGA9rHxp6qJNZcyatpK1xt1AndYwYXqjDtRuJqdFVLdLufzrDGxTiZf4HGceD1RKkRXtMWyVpoNVmG",
  "key7": "4tgcz9LbceD1NR31hduhQky9Bh2zngot8HV9Fg42ck9QzByjYgWXtwkSx4ArQZAD6bmCyzjMQytc7Pvfgi4NC4ic",
  "key8": "2FLU82vjn4S4qj9XASVvQnQFNiCEdLj2VSXfn92A35SE8gWKJ9wU4TkdFchXkyR3BvtjJPXEgjpaXthWBcgGC6kQ",
  "key9": "3QKrUiL77VWQisCBS5BQyqN1KHLinjLjHAXhEMXSuhHvHeFj8XJnEV5jMusRDWLRqCWBXFcLT4zg4huaFX8NajCf",
  "key10": "3m1bsVid24mnhQ8EYcZEYYKsBX5DugeBAzhDgviaF6gQfuD7MTSfYmswfiSdDspTpB75Abyfjf2PMeTdhZwAmkLy",
  "key11": "5ycLEbj7Pdkvf9oZni2SM589zCvmjwPoccNw7vPfxeEF91MacqmiJWXMjjzK7H78sBE1jLoEPB5yraR4aWR7otLp",
  "key12": "5osuy8J3536H2eQ748Z2nvngSizGe8sFzEr7JcU5sTN4KunaiEgMLkd8nBuSzg5rfzVS2yfHxXXTMAYiRvPszUnL",
  "key13": "4evqcB2x9QGXTXrHpc1qnN8uCMG9uN5owHS8RxgZitDxvk5i2WFjF8F5v16vyM1TjFMar8N3coXWXuKitAzmoJ1V",
  "key14": "3EJgAM77tJFcxQANVTJu9a8FbCwXfUQ7HFnbdyBx3pWdoBdrQDtYdAEDa5HYuSxGnT6y4LL8J6SwvTn6MLxHFpfq",
  "key15": "58FUvDEKt1B3Z1RiKTu1VCpxwUG4VyGyGbksWJSQgvcYBJkTeNYC2eY6rgSqJ3h6BxCBgUbEfDki16MndcE3cQKy",
  "key16": "2LN4Z7gkqeCMF7R2DorePrC5Q42n8FzZZZsPhMH2iFsV7q6Uo8oTB9xrZDtHhH6wgZMQ4sK4fQehYg2Zs6LYQRzn",
  "key17": "3ZFrtLKqQMy2YNMoLoNimhRhhcr8iCTuCwdJDUiTogZWhjot1rvF6Ji6QDyXctqS7ax5cSKCgrweBZr7E73SQasm",
  "key18": "2G1opzHqzaQkV6F6N8cpuwNYJkHPkc5LRBpTMFGxquxrEetBqAo9NAAGxsGAS42fuueHwEA56UMTPKoNHBwmzFga",
  "key19": "47JuQZ7ekhYqEfc9UaTtzD1nW5iYJLM4SuPGiZmhyf2SF8fWuFVbaGQa3y78kxGvxC3WwYDvj7Nz4gFfao4NYGAG",
  "key20": "4NY3pKMZP34kw9WYJyKQ5jPMVCH5xQ3RS9ZqZmRyeutfvLR2b4JKfbKirdZLCbPgYHcTiCzr6maVuQAhJBQ3owp6",
  "key21": "5RfwvwK7Z3U699JpViWeeCBiDRrLDZfGBXLBracMsCrzYA13f9gaBLWyLAWWRtQVwLcKw8J4qBaw85ESB7ScLvgz",
  "key22": "3t3oBCvvYNBgjQwvnrJHnG73TxsK92TyeL82cRt2hPrndcQj11Z9JGZcqdr6jZ1vNu88eGaGkyW2hcPi5Qr2vjR3",
  "key23": "2hE89J7JAVhX6kxjruZQFwdZSW9tWNsCKKMkEvnKyVT4oppXrV2CxcsjSMMztqFwZM8jz9ioQVFeD3kZBAbKtcaZ",
  "key24": "tCC2FhrQSk39BVf8AQTo3gHSF7GUw2vZVASjPjsMaDv6ZUmd2oCKbrFYxJxkDTwTZZu4rd4g8FNurQRanSWThAJ",
  "key25": "5mTxox4ecJCjVFSjhzzXQmaLDR7wFNyDghJfgcMDGQfpDV5t66Hoih24DvEqWyRfuH8CqrQpCCkrnqA3BWyCYKzD",
  "key26": "2kwLM2suumBZousaxcippPdCuvcc1jn33ArQPL52W1nTVyQM7KPdnV3uTU3ZjwazPAdem6Rvgwv3quGpiLXWu43c",
  "key27": "5Jb6tgXPwjcJAJhFcnbavLEyzNV3uugtaL3MCpQXXu4WcqSLkC6iGGmzDUNnZwTqETgkRvBKa6vqPmaLPZeE13SV",
  "key28": "5BHgR8h1SsR28N8FjJSDVdm9fp4whqaTJkN6Ye45M89nvgbmgg8S91M5ektJ9Lc2kByYvuWnS5eoet2BKBSqGprQ",
  "key29": "DAmDRLxksnh95bdTYGbm9yPbgLZQBuVcyheEKbHrDWP7SZTYcXMjW2RXZDdkarR3CqdGvqMoJASkXHhHmgCRgT8",
  "key30": "5ZSYbzdnyifk94qggtMeeNwQDZrTNGBfh9sEE4iWFLFqHGXxitBhLb5gnESp7VxdSQZGdcyxvSypPgkpBxC1sFaV",
  "key31": "4y4QuSVQwES7gvXXQ8ar5xPHKq4ZwP9aJjNQUe2XUmNieMS6QR2esys6UJBnSGBx4y35myZKNtxWqo8Ed6jpDhZe",
  "key32": "3eefuYiUpLjTtSD86cUkV1uP163ycNmfFPVNJ9ePBY2MzVDXRAgRY9HFAzXEJB7wvxYiT5icH5vBZCqkyY2usDDQ",
  "key33": "2PNk4ASCTFvf6fpwQqwVCTYQ2vZd9kkpHHmU19wquP5vtxSASMf4mNAhmnsnb4Hg1C96AXsJVWd84tUgsWguoZ3i",
  "key34": "3NYnDKqgH975wgSFGvzZoLFwvTxgLA23xFazDpWSddgV6t1ixbTpGuDhQ5PhMTbvxnCQQvb2DZEemz4Tut7ZKh8q",
  "key35": "5Xj9AkgJ8bUj1D68H4LNCzWJm8VzCd6rbG2HGbmixhsZeSKJ85W4cTkN12xjNZPZGeLKrkbRyHveTotskdyd7GUB",
  "key36": "4RxPRwV6JWiib6pGU6U8WRai7vQvKxxFfN4zWycFdmRmdJdiLurkhibfkzVqRGRSdZ73xw4aLSDBEEcZHbW2zbA5"
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
