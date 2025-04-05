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
    "4ceQesfWMq5AJf8YNhAjMCYDdABJqT5cgLr3RmmY2yvNU2W7rbMRkVuv2FFEeoKdKmEapaVNqCrPrnigYVxGbuvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JtbHMEfH7GJpL7X4pT2nnccZ79DiiSTTDH6nCkrrPbHzzar4xGHgyvasnLbqGMHq58bZBGR2jGfo4mDYknh6ygD",
  "key1": "3oPTUpEn9SKKcb9zyiXc7Vj2NHyFf3J1k46WgBtVpdFzetsskSAaNHoVT2SuwbA5XKaor3EFaWajYr5qrtsjE7YJ",
  "key2": "34wdMZeqYNL92PW1XaLovFvsDojYGUAXa7NnjZWgZAhaPaPGN44ck6DnBq5Cp3WAeZuk2QA1CLFevRQTT2mYtHyz",
  "key3": "4xy328rYb7WaAfzfDRHwEZqEwPBo2k9KPiKFTAeooujaHTKkuuM4NKdYhQ1vS1iGmfZuua3wJrwzM6wghemxyjrw",
  "key4": "65FfJJihc6r1i6GZArBjHhdNDyXUnFxMJhVzH3c2qkHWg1vLEgmTFSe7PsaHikdxx5sGyGTrJeC6q1e2cu9jMgA3",
  "key5": "3fcYHFPUXUvzkTdmdeeAm1NK97NHPma5NpDHLkJ3y4E6iyoD2YApkwLVEotMfRsNmun4LQUua5bgtLRaEdXShUhM",
  "key6": "TYprxyrvEoBUFehbiMbvFnDuHWNhk6fT7qqZqFbapu5imxFq4iQMGukfunWrcbSvmjeEVLxBtHvJSnKamYCFTs4",
  "key7": "33LBP1YZysruxzoFPMREoqXPTDeGt1X2dsPfvYsacSspXZaJpoioNo3urmnSci6eX6zUDJhwLLffzQVR1d9CHk8t",
  "key8": "4ppHpB7PCaNweBrTNQ7rL4Vk4wZqHSX5LdmxVgC7mRsb8gMgqXQxRg9mdFQVbvCPbNLS9yNthNXNQMpBqZd8BUp3",
  "key9": "5RwURpQH9nF3TRVqUb43sKm3SZpLdBSm6GChbJPdof591JYGfSJnejCq6FFMA8rjjSYNdLefduYLHj9xXwUA8WAJ",
  "key10": "3kWmrLdENuY4BATUPQhdbb2JFQ9q2hQtCn3MjTRGafYC36Y35ACLw8zGE3N1Xd4cVxQZ8Cr6mXbnmAEuhTrLSuTG",
  "key11": "5FZHaAmkuR41v1qvjUJAeK4DMbuAFPNKqQSSmQCnpVPFWCbSp8NfhHAS6LuKho6AqYyfdGr1hcjt2ywWBJZgdF2y",
  "key12": "UvbW395sSEDDuJemnV3PAhz8eagTFEqeG66iBMqL5aaE3PhWk6zhoZuVAi6CvCrAD6L5Uz7YRQ4Qjyh8rCrzfg1",
  "key13": "M85CEBURdfopc1ewBoH1b4agdeEmvYnkZrakKrw4kJ3c85tuRVakn5qizVi2YqkrqPgfu6kFGm4Pheqzjhdcz8b",
  "key14": "3voCz9YzaGokZPtWfQkLTBefJt9tsYrpKLkENkRWH5ThQt7NwEbbtZbMb3FJvPyRb4C8SV3ZyzngsXCzGoB5t99c",
  "key15": "5AGgFndxhGCgTLEVdKiPzDpguHNocPF7ZK44RaHMFzRoFqFiCsARbVvPZY9fsfZaiAeA27gbrPH6jNnRwTd3arYf",
  "key16": "4Yo3u4k5KpyovhwfJi4zR1z2WEfHTmUWfmXjv1pXktH6ctes8SE5PsPzC6m7qqZPybNmes319pjTbJxsrEVVLjNB",
  "key17": "5a7nmAHVtgYkBiGvEvR5qvJqoVuQNDzTapksnTCnHiVayw4Wfjv9kmypb7pFrrT6JANUXTZTnScd61iVGPFVowDX",
  "key18": "2WuENQTbd8zN8yD6gF1ahowjRhZCNNdRwY3MggsYGSwsKLcwNAPPew7BmV3PFh1h3X1KQUQemQgXG8Bv57iYAcTG",
  "key19": "LqkJEsuiU5TQcXKkteTrkw3goY53dK6sfKesr8ephLM3XYZxf24DPnZVg54qyvS6dyx3GaV7FDWgGozLkoNazYh",
  "key20": "5YR5Z61fzABQtuaUbSUayJXcjLEPwejAXZXLTjE6GPDPvhpW4KSnUHnFnXQMUSEXdA8m6u7iCGjv31tkgqLk7Vjw",
  "key21": "46B4H52i6Jbg51KJdM22k8w2jw3cMbJUN3Fh6H6DTTxD9NFiDmhNc6F3smVMYZFqRw2bJyTVkYF5RDi7AUfUk4nu",
  "key22": "4V4VvJ2882oLwNPcNYa1hh3GHcBWWAepYXZH4MK7miWE1moRGc7A5s3Cm9tQBe55pxWxBtAqsdWVEbo3ymhG3tRu",
  "key23": "a5EXMhbros8Zzn2C9DX5TEWhgYbMyGYfPbGpGHMc2zjEBwramBGdYkvYjfx3aabnhwDQRu24R7GGCvFCyTD57fP",
  "key24": "3rSS8jG8ANWFkCSiGo6AUHwbuQdWszPzCqoMQ3t5Z9FtEp2siPwsrYuobF7xnacfMdTFyav8GZ2xhWcZYFTmp5N",
  "key25": "38ZC3uKhw1uDdVjeaBcK4YPMcTVHGA2rtgUxfRfvVZCXepACvrKydUrbYK1hHV5gY8VtyR5Sou2MS4BxmAXqBy3A",
  "key26": "5cW1X9afgKAw97DZJivpw1nUA2N6XhLK747rfDHp39nXsZL3kWFGq8qpNs4KZMRDK3psAqicVAvw255B9BU8FcQo",
  "key27": "5wGhP1ashV5WFSyti9vMuHVbs3BYQikGmkfACrkCxbrLZUhAPefefWLFC153xNMEDqJpd8h4dZArWpSD8smL1akQ",
  "key28": "4wh7ujDygPqe5tcao2jqiUyjsQswj8K6Z4aeCVBssbkkHpw2e6XUTAewYw77x8pf3kfV5PGrJSn8mJsuJVRq71mk",
  "key29": "5ZdoceVwRSCwCjvTDA33iDcw3ZGCvtrHDgpWmXM9gm7SZum2DBVBjZXW5ZnYK2ukwCqAAZAXgLNp6ePjwgtsB7Jj",
  "key30": "2pgihYHkw59rxCuNLRZ3pyJAfpD812TpM6VpQ5hjnjN3ucuReuNryxdmuBzJ2RMYLwkNzQzWSJniZvgGxWuVg7Ws",
  "key31": "4mRZxGd3SCqvJz4quVJgZ8wtWNYaw6ojhZnH7U2g8NatrzqrVHbosATn7YjXYfovxfL68xtCPxYUjP2BR7hXnvLA",
  "key32": "roFHVjrCjiLuDGzpHLDrRRVBbBPqiCszLMkUx1aP2gZjUxGABgjVjCMVyUfvnpczqE4h26gp3SW246WKQEqAAJA",
  "key33": "6329AtnoQRUWaFDEWC5yY7WRN7FPkj4spntZhFJEBR5MMvWv84sUqmpdh1nwgt1VLUphFTbTWWn3xfZHvKxpWoGg",
  "key34": "3JoiuBKW3awP3Zum17YbNrQj9oGejCSBFNbhYvmp7uPQ1gMm2mYtQCW4E99K5BAmkkYmiCA2YvU6pd7AWUp3Hz8n",
  "key35": "66oNvokfGCF33LXDzJYNk1m59ov7gFAWmrbzL6fo94qfMueFWy9MbLcjV69GeGbz7fNCQiqWrqS7gNfjqeoS1vdC",
  "key36": "2Nok2JWnHxZqkMJ9RwcATfRPctxwdgkGwYG1L7pY21bHYmeZWg1QzRLazaEWgTkVvbrbN7aeC69xSDQ2cM513fpF",
  "key37": "TCRaFcajSr929ieSUQJRx8ZviHTCwGMcxypeNwHf6aVUnjYr1ZWtLJmFWXo7wpXzviQqeAiFyRav9orx4EWyPsL",
  "key38": "4rFX4wGUufTeSWpEAVhYLDDWirZRSfNWB5Yfx98AKMVqwUvM7L4EQRYbZcQSBDmBinUdpZ37QAYUm7FHaLnmCJgT",
  "key39": "u47Ydsfb63ck5L5yZMPFpm9T3Sr7kn5yHgpuuu7Qr9MJzwLJTdqnSPta6hicFPt7zfmJVfS1XZQmW9MQ9L1PYH4",
  "key40": "5eZmYJWxDjaVDDfeBjzirJmq6jXVK96dnq27bBfWRKKFGJSKzaqzm2w6q9UcYEkxGju22xyYCxRrmx9aCjBistvW",
  "key41": "5osrsbW7dGgZV7wd11G35jSQk4EohSz7MwrSqUdvGm35G3DC3pTvrUQbcXHckfHJF9t3aoxAGrSY5AmFdFiKd6dp"
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
