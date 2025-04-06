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
    "5P7QuZqveJXTbbjYZbxZJ9ivHhrCkvhh3kqaZXkM4gsu2BQqmyzyY9zFrvjx9F5kjEmrgKZ6atx9WjNChqSHnSqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AhWd7N5CcbrTzZzVBgLBMbs81Y12wHTZaavDw7FUo52JuRC8Jvs7BhpmfBHiUZfaaqosR8CTPx5da7ig4wTXxqr",
  "key1": "5XmrnjLgzPokpunbvFeFics1pQwQCFkxno8ZUY5gmPsfvTsSaJStXbyUVe7Smr2QpRwkpAo1K3tY8YXeNvVCoUvH",
  "key2": "2Jh4bpVJuJW6iEvDFp9zccKuWV6siJDohbvMdwNEv6a8FdhtshKk4BbWrHcypUFiStYdD3aAF4avYV8yfgPuKCXS",
  "key3": "2tYsYuqKTTSyhnH2zfdkFo6adEYpcUWH3tb3t1pTLRX5vNumzYPPcdXrbr3tGwMZfx2c3zHRE4UhwxvZgVRQNYa2",
  "key4": "4g2qgTHLPdqKgEuWPfUwUcVnxS4H3PXMByYqJsoQTLUrBFUBeLLaT4SR7vWrU82FHHXh9Zu5wUguUK2nbUNFC9WR",
  "key5": "3QYjDx8wUicgTdNqKekpxgZVncpHtUDrkBTuexXUjqgYmVtdpYjn6EE8LJg7wxQSDD2sK3G7HAHq4S9yXZWcN3x6",
  "key6": "59W5CJM9F56NxDGjcsUcJXaSh38Z1UZj5TuLtCSsrmvKEDZpZkuZTj3CjsDZa34Grh37tgRJuzfJThAdmc3g7XZr",
  "key7": "3kRZiFmkWbKixokVwzDG6eRVCaHRSUEmfPJT7p2oizqCmMakChr2HnquJue9moD9dRQ9e7t7DZbdHGTrsqNWVoM",
  "key8": "5grHRE2W36uBqUPmnhNeficZ72PGWrwjasSn1aTQbKnpxa2tdsgVTJEaLpPtwEFVubY3GfeibBTPRbFtzmrWYKJ9",
  "key9": "aTXZj6qX1AehZX4vRak55ZhifwAA24vrQPCmyRNe445V5hebA9CCYxGF8YyCj1zzpCASDPud6dYhbTuNEPXN32D",
  "key10": "2u6YNSqetziBrchAZzDaNRG2FuKxNCjG1Md5yRBUZ9PaDwZNEtTdxSsKePKe96GpH5j5WYgVjnLqbXXwiJPMZ9vq",
  "key11": "2joxXCqeT1WfCMNFBYmpCBDmNfBRkpYnf9eihkWjKAo6SWYXp1wHWnoYCDYujzB1UfmcTh7dwuAPULK65GhU44J1",
  "key12": "2eCyXHFM4rHzn9oxSBSG5csT3wmGoVLEmNxQvXmoPKvysE8RGcsnAHXrieCHk66xEiHREauPcS5Jkgu2qeTgHs9U",
  "key13": "bjh5fS25cCxp3h4B4qEF8cVtWzrZr1q5svZCyU2PMqSL5PPG8XMhwVLpNKTg9ydtajm8kUkTwhQFBAZfM9fco2P",
  "key14": "3UfV9Jk5Tg7ogmRwMdfU96uHfB3XM8D6U1N4YFHiBeMKmsp7Pu3HY3B5dYesrUh9hRj6RKDP29YswENcqj6AYft6",
  "key15": "5Wc9dGijpu6dFEii2Yt3cxssUH7nDFBwySsDkM1RbVvd39Krcr3kzrvv8XnkKnicGYuf1YEydx1EjZwxiMYcyREW",
  "key16": "5zHB5qLVNz5e7TmghPqaKmPzioWXPQSoxrNVRXzFUVyeV6EALxQAXZjCGDYpgB5gvvwd4k2T3iYurToTTgKcNtRB",
  "key17": "4Gr6msnTuT4VqBfB9LYAp9qkqAW83tDYBPDmTo6zY1DzPcCrwpumyicdjZhxcwoFQjmgd2DErj4nmrrexF35NDys",
  "key18": "5TFsPcGvBDWrJiNihPPXLnWeKy2d45NBP5yftWJCcE5m8jVdFeYKp3wYMraLXk4fPDY28ExsuVKmUfLLhaS6o4L",
  "key19": "62YYKMEHMg6jhd1sBPsLFVpZsfosPRNDxP57qgrG8HtBhFQgfF8UEhQswaWv6xoNWbVrgxw8jXLSH1dYuqwyxjgj",
  "key20": "5MXHidHpjvTkyepeKejPA6x7dBo287NjBX5rCbpGkRUp3qMwps12xQkkjVufsCunNwEHrHE186ooPeBSUETArKqz",
  "key21": "5cfUffAb8WafZK4UKdjsFvrCfFyWMdbKV6WGHWGUmwZatqYJUrYTcYCyvt1ZHECWgemWAnAZPbGJY9Bz2MxU54PA",
  "key22": "4HAnkBddeQ6huQQm4odgo1t8MDs7KUE7Y3EnTL3mWzG3mKpLK1EDdudJYrEguxotGkRcWfRi1S31tMpVFQwP4QMB",
  "key23": "5oVuuqVqjbpRb48TsggUHPaBMiwU6qmhg2hSMPH3UkLhSsH5Bd4T2bWD3pQWqfiUSyxb3otxNTCB2BCTKbzqXHc8",
  "key24": "2MYP7jSkuidwgyZSZKNa2vu4oSfUUWGtsqCCgSyHtt4TD3X7RYbcrGr4ckS1AXjytaUYkpDdD3LeQTfDCvRL1M9E",
  "key25": "M3wFtkbHqxpJNYdrZgtpHFoq9jG5yN5WwvNDqjYptHYHtVGrdhqU8oH6EghHrPEeHGqzg1xo74GoVfjYXB9d67N",
  "key26": "2VoovETbHp8jeRFhNdp1UVVeT1kmDLLU41etVkC6gkhUiR2FxZSo1WgRMgkKtQyHVkmpTuLUV84df92bNCfQNLaz",
  "key27": "4Xc9fGVGBRZPDTrJSgSFA4QANKDSVWzPH5YocxF24s4tHCbNXiWV2myuHXqHjFQatqe4xVRx873SBsaL1gtfZKhw",
  "key28": "5JpFuxE3zhQaqq21NVhe1i8MEc3XYfVuXzU4eTswLD27ZvYVLibX2GFZetp8YfqTG6cJ4nNg3RQkH484KWKPjgqZ",
  "key29": "5ZZ5qhh2mhW2AU34WtyA2T1Xz3h6B386Kb7k4CREF2xiV1qUnpaDDPQNzJAhfdGCuWW5KRHVdzV66D1CVrTLenLW",
  "key30": "HLH3ZH6G7k6B3W4oJq1RdEtDza3K4m2cpXTq9JaPEtXF9DeXSpaZvWy33T6JNrFPQsrjVdz2WyKU3BL9t42kUXm",
  "key31": "4GsHUqqtsNGm8w6UgwmRtBMBYskkiMXcK4KQ716QRGzcp7S6LqXLnHS18U9rTUAdLdd4zMi2tfKB17vMZXCtWtHr",
  "key32": "EvEZAt6a1vSKKdtAkPNFKa56GtgLhELaMyCf2Zg5qp3YaefYdbFfEaEHqvKr4PRhGnM9VdJjDy2FtnVQ9qgfYM5",
  "key33": "DDvoAntkrGHJZLZSdJ7YgoQYbCSDkuZo3eRnkxmg5gQmzqyzYVGRcHS1v1DhZi5959gbCXnZBuz7iqNdPwTf2km",
  "key34": "2vjGLKZa92MGo28q1yR7VUtuHK2FaGsJPPySrJy7hoYo63oTRJacEcN3uQVtHX53kiyATEpxLbY4VSjgGTQ6AMGU",
  "key35": "3sig7YYCCVFkZaLzm2ykoSu8wA1vq5dNiUFvWs44J6qZnic83JBkUsxEqbmMQcR9efq3qjjaQcj4jWAxUvDUq8k1",
  "key36": "4muHe5QfVsMJ2oPtT5xpjvsJwB7Fw3Va5p4RsDZA71FsJvFEqpehxFYZA5j9AFrRgVNQGqfo6TiggPCXEi3ExqHT",
  "key37": "5THUYVFEfdn27jxs7VbnY6pi7Vkvi2LPXTYmYJKzeycFWToTSYbkizWUBhZoL7w95fRsWeTiqNFyyp7AgnSNLfm2",
  "key38": "4ykAFPBGZtsU5ezw5MY3cFE1fyFLWD2CeRwz6G3up1DuqhbokkxBgmPbVupTDUD2QV4chmn1NcvhQVGtsi45XmD4",
  "key39": "655hypXSxYjcjyDkygj9XhsBjHE4PvaFUQYwDHJbfdDAg8peQhHBR1ccJx4D3P5XJK3v4zE9Kxf5KiZZ3ryj73Af",
  "key40": "4HMpZ444w1EoNDsqWDr5KLN2tExR9PD8T4i72W4aCtRgKSLVix2yWmN5mkbKUTiMwQiwKEMoRYNzaLQtzsSEpdMD",
  "key41": "3gfWZ4eT4wWY26yP9FNx8yzv6yiEkq2NPBMTHHTy2jiA2s2THjZNujj8kvng9DYBREBjK8mTWhQ3RXKNLmTZmkYv",
  "key42": "2sEV3DLeWeoV4hE5EXrVddzryPGdK9CBZ8r2VbWFn8V1hCyRaMrPrZrwBm9eubyiQwG9jL2uimomhP7M3TSSPvMj",
  "key43": "5VWUoSnoMQcfqwwKoYoxMsPPeUsEEEgMDC4y9vvyEHVQaSvfBdanU1Wux2kNgp5JR6b16XVHscrgcTfCia22pFGx"
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
