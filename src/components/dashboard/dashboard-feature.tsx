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
    "QRfP7Yn8my8J5j41gGepcvMnRNy3RG1XSkUhECin4NKZVBwJWv83Kebfd94XziYK4uTqJS4923M8b5EpePaGgdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUBLSvS91thG1CP6L4LJZFYtwE54JFpnGNco8ajMDUFJouCMYFjJsrS7xc4HCJGhXPhkN2o3GXCos5n4Waanu8C",
  "key1": "5gzTg6YetiwWxvnrBdmgXMw2aoBczo6NtEhMRxByLKqGhzE82bDycHpXgRgxpYKJnYFa5x238YrqnnA3k9oTQeL3",
  "key2": "5r3hKb9whiZEDPEUhADufg82vhcxgBZFzcV17ViVFkMW3ZizAeafxofHHiLGwSqcgniDkEkeqRsswYgAG6JAP9D",
  "key3": "3xZBCmd8Vd8QoBMt1dZsJavV1p847uf3bLUZ51DWdNGYdqhRUwmuGQKE3Eu13niMjT16nLFVEWH4dGC5TsM77KJP",
  "key4": "5AxE1kzjUQxpiCFhrcDQkRezziEinE3ZWyQD2SkhBSMxje5JYhLmy1XHP99Mt3gqEeUQMweQ97PwF35jN8ErjwrP",
  "key5": "48GucjCp2d3Hav7VDTVanHrTfV8Syz3xvRnnVLAPUmb4GX3uqdTSkuiSNAqRC4zP4g7JuSQcvFiKoQgJiYvb5QiV",
  "key6": "4U3Bgm8BMp8XAjWAM4B6dHwRr56F2YDJoXixhmXmYz98D9RkQsMzWxmDJ9Esu5efi7XMyKCCabv72mfDYoXRg33Z",
  "key7": "2r5La376pDvzfRjekAXhz62XFBvdLiGiUKw4HNRqcH82zwkumeXibjnHRR8pvF2KHanKMZKTWc9iQ7bJVYM7dzJw",
  "key8": "8w6mt1bf3eHZ2MPePXKi83319RFqbUM8WoPAGQCTVpd3YCVCDxfAHr87WEgoDopj4SLP3AQe4iVX7EkipaYAda1",
  "key9": "mKJXCr6n3RwGuV8hrdbNJoyQ8iwHQGimEexprJz6yYUuekdqeHZ25cJJ4tBKp7R2PPnXx9UuHtStBLhAfJPM4Ni",
  "key10": "3Hc5z2pDu393b28iji9N1ofDZHNu9gskjZivxZSXLxcNY8YVPTBxudnYAUX3JgvHaLFiTHD9qH1qdaqGngtBRPfX",
  "key11": "2qrbcCudqxNEsPKPo6U59c11ahkcRAcQsXaG1mUokUoRyxoku4TZmvajEubqAyUv9mAftXnD3PgW1vq8LRe6g9Fb",
  "key12": "4HjbgxnYWJN7nTCkS1qbuS3kxC1dh1tnPReNGNvT5e2j3z48xhkLcSmzkp2SKZ8MzTXXMcbNBjSLTKftZPA71hNj",
  "key13": "HNRC9LqFce66Mxya7X6g6VipYoiqrK29g6J31p8KCwaVyFxfVcDrPkCZDGnJSJAEsDtWBtRSGNYcMoocQKpxaTv",
  "key14": "2ztZ6LQF45H276yqddnyB8y2Cg3i67SyzaubYWECTSHhP42Epi6ziE7RrcAyid3A9dpEC3nuG3RRxZxAnVF6pZZq",
  "key15": "nVUrmZoyPLbGsuxpgYa1mBGposoomsMomu5ZY8rAgEX6KGbGyu8TU73vDqix1RSRr2UUxahiNLJvWpGVYnq1Hch",
  "key16": "45GKbcni3UTm4xvuThBx3cLLhX7Mm85HYBDN7q5GAQB2yps82UptAFRPUUEE9J2AFAWmSAQzdpfEDjbTBcGUof4m",
  "key17": "TQG3kQoGbCskn7NYmtKPH5wSU4fNDmHk74NKBrR8rduSM448wYT94jUrZApz9xF6TeRHpsLtLiJyEU6ipTMdYj2",
  "key18": "33Tx6iGu592J2pRrwVKaqiwGfvLCH8suMEgA8D7Ry9tFAwY2q1SaZmfNPi3kXHNv2UHR1rbh9GofXbRcznaCHbiQ",
  "key19": "3fbnfwFX6YtmHFBpCDkULWM9zxTTzY9Yw8Koe6VpUvAjNbjvNwuBpgNDqc7YkT2A5pMXYo9inytJNLP69YwzUXPT",
  "key20": "491Wpi8zcpW7ztf8GLWVkNjUHf69qBdUzmxPcBnr91v4duxMFXs4YtMjWo3izTFFpFRRHDJSJ29Sjy9duandwRzu",
  "key21": "WuaPkPP7ThD3m2xmbbsDepMCTg4RBdAukDXi1f38c7kQ5otZStUF7uPip7n1MAJE3KGkcfd5c7YMKdSXneJtgYi",
  "key22": "2mkbNn5iBk55RH29YpcvBAMWF9d4TYvzAxj1nGs6FGqqWnSWVSpc2xMrcXeP6aQWD8qjPMvaeVTagGZ2n8Yfn4wE",
  "key23": "2WS9D7uK8aCU6hsXnXJvFzxrYh51rHNowRHmxm2Fxaa14qncGEPzX5UwYXvEdy9rvprfpP28jYaoqo4iCiE4hFHt",
  "key24": "ipT6fbEVX87uJvpwKEXMPqWMZanTAdEfpfBJJR39aa58DBzJP5axRfyEBjfyimXdcjCxxe6RmdL1ZfuobkRwtYC",
  "key25": "4Hm9fgW3Y5UD1REUtjDy3y1tL2v8wx377PLcKUsE7bXvyM8ZG4mwFJrWZT3jTsYoZY7ztYAarhwD2Kz4DGxBvTtm",
  "key26": "3WbtoS9NYy56hmLTkxs6eMTpZ8miPuB2JsV78Q8o2BS4HQ8zuZGgybwdCxCqKfNc7VdRwezk8mRH7DLs4A7gt3qB",
  "key27": "25sFy6gTvAvk2aMPQsH8PWyY3jUyaj2WENJkRACiFUfuUuVAY583SfsBp8uE5beYsCKygdQUSD5jYVv2vFc12X3Z",
  "key28": "4fyfDFWiNt79fN2k62HeJk1Drr3p8kg44JaJxqtehbpszSXTmh3my1Tg11q54qMuz7Ny1xqdMnPXbU7XDvsr6eAH",
  "key29": "3gyN6vf84e3k4VX44Ei9DyEpBRB5gi9cvQJ1Eu5vQ13gEig6G7qiJnT4qSco6gFsYrKKjxuuhRkjRHBgAzU8jT5J"
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
