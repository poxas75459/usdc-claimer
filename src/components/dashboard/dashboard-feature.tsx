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
    "2kZgjh5jFZVjCDJz21eiKesqEfXiDAGiKJGGcvgsF7rkaHYvw26iCVBKpusJ37xVjzioAhcSbcXv9bVemJwyaidM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iKp5MGosnQLyNSx2QmWGPsMJywDAYwQ8BBJD97fGF95qpVgAfLNUBsf7pU8fKxzGrxjTbwQ7yrAN1uWn9fXLaYL",
  "key1": "128T95t6QW9t5K3xajgDXk9wpC1X7BQQDqunxys15XcpYtRths7iPGqJVaSETNE2wyBXUqJQSjiTSYB4V2RvsMjR",
  "key2": "5qkFFonyhVHerzHG6wMZSVP6viiH77kcvvuNcLyMhUta6PYtY1g3J5kJxdNnaJmnUYCGhLAy7JdttcUfyK6HsAuG",
  "key3": "3VGaMBnA4bTBS68jvb1rxsbh9AjnpsJq9KEmfbHgp2fjbkvpMfe8dPaWhWJytQ5Xr6zJuf63GUCDhmnuPS9SCtPA",
  "key4": "23BXrSB3VUq3xzVJt4Z2gbaJq3CkT4fPLo8rh8E1sVTg6qC7TWL6awF6BitmgJ46pZVrRAW3pKomp5Vw85m9oMTD",
  "key5": "5jUejgahgudribTg8frAK6bYsssrYQ3qvGyJ9aoEsD5ixenWTnFU6vw6FyqUv7LxYQLpQpVqAEnc5rrqyV56xnbu",
  "key6": "3BMB6G1GAZzqRYkXMKn7QfTMTpSkua3cVFpELj4XYTCVkzhDdqboWBkiW9nVmBRw2kDxMNyMBhJ1UZyi7isMg698",
  "key7": "nfjrdFHfcNWTKHrS5psghmyvbzjbMEkH63H396gp8FSJu43oo359yJyVCrL6rNBBKiGhUdhfci5ZcLSX5zrTc4m",
  "key8": "22ttXJ1AwuQASC1ed86bsUprDG8FZfz2nzxGqfGgHMRSnR9L7TgWPQ7oX5aDgXn6bKgJVAy6XuXwAaNwPsjft9Hu",
  "key9": "4DZjB8E1vHgoHQGPt4YukneEWpWqjC1K7PephLyuZABGkStT8HAMJhUNMet7g8ezhETGYpvUutTS1Dm4W4VVF62E",
  "key10": "23XGsnd85ZFPRvZJsy4sLzmjrBduKMM39uqHBfnUDKjqmCJYsoCyBqw96X6EVNSCUP7dwHFqCN8t21ffvxdMyuZJ",
  "key11": "3J9UCrPfm7BaGa1yPRQVd1o7AvL7eEwmD837Ltk3Ef5hcozPEn1NP6tUZukGQgaEY837fkRe7k4cUPqS7PcZzDa7",
  "key12": "3te4RkhUozdYFQMby6R2j5y9DuRJNve9S55pVxuSsCefsQrpWQnvYv6RxRgAbrJTzpgnpNtCbPD61eJW8cT13pZF",
  "key13": "5dMyfiYSVuPC1XFcV54MuSYoQpa9hgDbgH2krJvqBT188cnirAi47j8pS8jB4gvjTuTsS2wVQPnYNDZQV5FQwaWZ",
  "key14": "3qsXdb688sMiQw5FsxqiF5bKZe8uus47xaFMnNR75u6prvT6dfmjvEdFdgYaYWY7HCfHvpz6NLYQj5kjtfZMfyRC",
  "key15": "4tdbjG1U59dJU78gkfRHGk1H3FF1g5VYZzcndcHk7VWgecPY1XevtywdhfSfEYqrbMTs5D2cau2ACUyAhNP9iiss",
  "key16": "4bJYuQKfminkUaem18KEzm5JtQaMh4eGke7rEhKyymCJP8Q1m3Sq3yTaC1w8XGunFC6DXG3CFw6DyGyWxB3W422b",
  "key17": "5Y6wAfJLbp2Q4vJCqwPeTLhZLo6wRaWwaUgn4MCTNJGCqbp5aZ2AjmhEWcdmYKxMWrAxHNxAagUHK5FdaaZsV1sf",
  "key18": "3jvdPV7uu4iawriVzrLauSs6BPutnRUdvNLbzsYHyE6TjnoX4AzbMZpHSDXzrWK4rXfC6jMfi8tcmhnNDGWom7uu",
  "key19": "54UM99a3gYJXrCesYixykUaWVDipzBrUKArgjc182BNU74G26mn8JVgv194f4w8X1UnogqtJhVuaGQecdQp1rY4S",
  "key20": "5ZTYW6YQLHPFokjvLrRX3J4miLnYhBArSvnpm7D48G6TFdhwdEWAEzTBCkd2tQPcNqwth8mnEcLusSNj9vbvtFzH",
  "key21": "3vS4bxiXbLuUjAG6tDxy9ivgApB7TWrXa7vxbCqwEqUA3pXPcgqtE8ygr5RuKw5tJiEwkUxGiiEAHuQ5N2zyJEME",
  "key22": "2QdcYh79T1tGBvKQDvTkqwUcAnS2G2zvpWRgsPH7JbDoyvv9K1kzKZVZAcEcyX8Pg1cyyoKDPDRMoZuNJTCug2pJ",
  "key23": "nUGa5A4fknX67fGZFw27pegurKkccCr6j8G5DgoWav4eCRZM1FCCB6MMypDCjcFVWhSV7YzckgaqBWipkV6Z9jR",
  "key24": "5dtYGpuKvWmhVSrZ2WxTNiu7Y7Gsn6VcPxMmC89qvfhmvE1Ws8LwvRBZtUutqEKEpcGpa3gx9ohv7H8XVqcFjrYE",
  "key25": "5fLAREJHjCw5MQxvgFe4LaT8N1pmvHvwN2Ae6F5VfXYDLURzjuNVK11jJ25A787fWGBnrPAhhFLqBFt7QnChyMHt",
  "key26": "2ckMkt3u1Rs6btqtb9pzBntirxc5WUTvKFLfC7URcsWwSP7LmyhpD1k8J71pWtz3Yj1FEc9gU6bEmgG7V912oVHV",
  "key27": "bZifAp8AfWk5J5vBpyisXYBN9D1NLTdyZptVaKPb4ADfnFGasHqNvyNRqAwKovjAHLqhE3iLb5wdrKo1gPL7KpK",
  "key28": "2a2NnsbQ4XCNTbTDhthSsoEScQkCgQZesLDT2uHZ7KgLqDFYKeNg9KGW3Rrcjk2AUD3CsYhdcpPAYnhoE1DYgTB7",
  "key29": "2j3jRBGLs8yw9jBU1yHwVMtjqVNhSixu6w2R31rEdZCBhMP621bkybVDKkppcVKrwekzYHpfs9xNVskT8kSjRwPF",
  "key30": "2mLumnWT1zNJvF99T8Zv1ZHeX1ZAz2qsQd5wy1db4spFQnT3c55GaE3jxWNjW6vDe2CkEAAere4uNiJMqTqbQhbT",
  "key31": "4YBFnEH9FDLH3xet3pQworVfF7u6wBpchzcNepzGtNooCsvUyevngBVzRhR6V3gDUDaknTCuApos2kDJtKeDrbCr",
  "key32": "3bWWu63iW717KBr7a9CLvBpNbUWKcPgD3PeM4hFY79um5myUhX7Fq7vbN541NjXq22xqxXX1mydpVkEWeQ9Y6NNf",
  "key33": "4h9WmKkG8RqSS8tVFfMYM11eMK7LPqon3x9iWG9t9gyja9Gv2ZXaNWJmb3jAnSgKLTtPCSh1inBuT3Z66UCbeARj",
  "key34": "2qC9CChPUYU7GtyeZhT6W3nS4psVawLMBd6cquxWNPH6VcYJ2MeAfnqB9aepSEYk8p6mypSXsGr72aqJUWkKvkv2",
  "key35": "35RDr2pJtU59ybh9nchuwTxEXLZisK2Vgwf9G5VumZ9U8RNvNuXc2G5GNc4dxfmLcRv3RLXCbca1f78gFoNCvqvr",
  "key36": "31qpMZKSBicnU62KcDtBm5cxZ1jvcCR4yzVWVp2ERUUkNErfiWsVtLvyRYaKWdGT3WerFFrVJM5fRdxKx1nmmcQy",
  "key37": "Uqg2i1mBBzkzWw5bfWuhx41FbptUUQSrvsd917HSEA7rE4tCv7r1AJNKrpwTG8gEdVEKeTGSDUnsiuCDi1GPTPh"
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
