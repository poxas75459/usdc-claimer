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
    "5sLkcEyUM5kiLoYgjuetNyffuGwo6vZU6QNTfcWkUCddq4dubNn14kEqVz3oKouQo6WYM1NrwhSX3p7wq9B8PSnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2imNcQbG8jLDJddSq6FJoa9YJAgq9WCto8UP9jYrAu1QWzmUNJidCosUmL29ntTwA7WjVzEK9mkbRDcDC8C5kGan",
  "key1": "4By1x4sP1RjSP9QPdyH9M5KjGJ52zXxHC5xrvgRKqzeExJSpF1k9cEyxhxdZXmP55czj5szKR3GaFn9muPcZrsgc",
  "key2": "2VuSeFqLLvxWoR97w5LFMYNhQ4JytwyVHuaHGjsECLXa7W3F5xVQjhZDHSZPV5H5TezA92EgRdz6jKRvqroLMukA",
  "key3": "ffTvcoazqwDzrBHjSVWXGxPFEiNKJxthTtoXvGRyyvLxkDbLrXrh198htcNXT9bVQTFco5cnzthzQfUHgnoHYRG",
  "key4": "2B4CZoadV8D3JFRLx4x2hsdW4LeMFjmhfZysYXenaEZiEiLjR1Habo5RCuAj4A4ERNfJiCWTmCV3faEKciTYaqvt",
  "key5": "3AasBKkinx9nSJtZ1cm6xz4WhKqTH4QHHGoZdJquGgHxXanKCJq6sD1dWCDW5yasKw4wtj1ExcSqk6pTH48wfDGE",
  "key6": "4iRrpxYRF2vFFNY9weVeTFQGXaUbtbyQzXK5Rb2BEbC82hcbdTFif3m9v9SZR1GpWSUJobii6AVgh4e2EvakQ9Ax",
  "key7": "436u4scB2rLxHDZhuFcvyaMeGa1YYvTpZwnFMpeR3mu4ooXZnrKfUNinqzri2Yaa8TCv7WhxsQWK3Ag1AXqbMGf6",
  "key8": "29piqGsrL4dVRSrK1GDaMw7ZHB9R26D6HmTXbLbrrHmZVnD28Qs3QXZ73pr7nzd8SsvjijPLZ9jzERgmP2vcjsYo",
  "key9": "5KvDVDPYa24oTTwz6znQTtrWYTxQ7uFBnWbGB6tnrikXebjU2JeqnvGdfBkUPmYDTsBghuMmzUhQ9n8gWHmhuX3D",
  "key10": "FKq64piyjkWvekcNGiWygtFw52A8wPeGCZ67423K27nKacj19C65oJd2Pk356ruauXBfSMap86w1rKs28VLmTGR",
  "key11": "3a1kqPcFjX6V7zo3GxMoj1VgPB7fEUYVRuVx5W9mqerKtMf2Y6Ymu5Py4umNpPqVkncijZmt1t3nFkPQTPUTr4Bb",
  "key12": "bF27gBgdww4dJjCYWRHVxQ746VAsKJkuctAZ8tF6qPvufgo3hCq6nQ1rfGH53NVoYz2Z2gwgsh2gTosTzL7Pt5r",
  "key13": "3CiC4tbKJ1TURAxWsbFBrJ2tdZA8Y3EiaEaffYhejVa8Tqa2FQDhZnhK1xn3aXZdhccR17rpR7GyoLkDFmnUfXit",
  "key14": "55gJGghCuMibaeh8rbAdP2LJkLVEyGuMBrXuxKSQsgn1rmP8ako2m13JLcFaGSKQDa4VwcaTU7WaQHFACjjCcuFJ",
  "key15": "q2GGaj2cHDFTomrJs2rp6SCBKzEVLsion3QcJiKwdYe3yfR43S4TDjUYoA3kj3oE4pVfYFQxuy4DG6hathzp3ov",
  "key16": "3cBeRGDb6my3QcW7LbFfXsUzveTMKbLvZmUj8nHTUPAeXUYgbJ65DGTJXcmQ8S5bELDtXK119fYMyKeVPhfdwon",
  "key17": "5asmbyzaaf6pP2Lreta6RjtD87gbbKXKJfAf2oTPv7815C8rWEasC7n5znjhTiZKXECgVRmwqawaJBSreDXvWgab",
  "key18": "4uQs5xLRpxr6MDuQmRW7Sp7vzdrwixbNwAXsRjUFxXrbgfPbVpaLmoQjogahcS9cCNGXU15X8HV17NkRtWSqYyo1",
  "key19": "31f6gX7sATQFCyPmyDUq6KAwarBskaCSi2XKyEDHbVbzF5KwgnCfkQspHsFxKtYKsNhMEKoBVGNAoAMK2tCcVVWM",
  "key20": "3ZJ1FQYSnSfR4nbaftAyKMWYUNnubGPmmsZQUx79gRHf3N4wp5vUFHzRpgzc216uXQDAuQgk9QhZ5MFEsfofvgwi",
  "key21": "2EgtegmHZ7KkFEjkFs6TXuAewWZuYaL6VoPdSNTBjJXTTyqdXvRFsRmR3ZytgYAb7pfEGijtyxT5cwi6b6vumGab",
  "key22": "mZ5YNE6zKNRjTC6oBMNUCodj1qKuaGPonJ44hB9asy1W7w9GAdjBx2Xtyo7spenoVfFQdCKT7hFZhZDWPujzKhK",
  "key23": "44GEHtxzLmE2U5xJNn9w2jakNdKq64QwftVduLGNty56An4DopzcwDj26MEQ4pndWd3qQzyXmkMPhP99yfTsucxX",
  "key24": "5Hy5AAtqVnpCzPuLQWiXfPqBhRJs4r81HeV1m8TQivwP2Tq94kTSk7T1rxABr5hAX8sTgR5EBLDCpMZgtSZxjKnH",
  "key25": "2q3QVfW3kS6oomUy1ffGyXWEZ6vPFDWBR4DGXcJgyA6mVu1yNSxkuv4K8ZvFVaw6McKM8DHmA3bBXyHFvLvskLvh",
  "key26": "226znPNT67un4LPfSPc3i8skWVVc1URa5GiuPC5L3mwqwByRwY6m2bvGekFkw1jwV258hAtdfXoGcGYN3njvAmSH",
  "key27": "3sVnsyd9Fz9GvBnKDD13Wc2H9K6Ze4SSW5XJhQb95kpoEGqXPh2YYF1DKVJFuTx3Hxb4ToevFvQHQN26gjrFR6v7",
  "key28": "622ZAaP1jU3yNsmym5xk5bXS1sf6geHLvQwcE7rjU4vdMEZCWBChPx6jjiMdBwXYqRMsXtFGWHYPbcEBw4GvWcYy",
  "key29": "35n2UXfP7WJaY5Sxbe6Cc2R3cpJu7tiYtaUKTBu5mXSH57CWoPLATdbinqBoMHdAWvC7Dy4NRBswm6XcteDkrrct",
  "key30": "125WtPY8onC9jSqP7r24tQuK6XNGf9sn8v3XgqggmeHStYzq2texsqMoFoxCz5Rmp8CmUueiVK4DQuDqHThx2XU6",
  "key31": "4z8XwvEKcGKHL1ffxwr9UEhyjCEN8mbiNB8rvpq2CWQBEN9ZoNVccVqMtxpNxX2WqST8ssszvVF5KQpPA9HYtQCU",
  "key32": "4g5eMy1wMHHKCA4jzr5Bg9jda9MpoxfnhYNm6J7RYZWMZKVYqndL7qkyF6CfPdGRj7ZMuW5NRAWNXyub4FRQNJkt",
  "key33": "65iacCPCorU3xEUEGh3ZrjcYWvMxJtEug9hbxdKgwVyhBnkQTdzvauKWW9MnpU3AZYaQW8g8Vs1KRhxgy3MfoCdH",
  "key34": "5W6gWUkKvh9REc4NfAJiMu3Wo3Ud9kHoi6a7CkuM5n9YVc9DFdwpzC2dC1bqxKqxcAZBR8YKgR4GXnMXUCHpCR3t",
  "key35": "n8aaw7oGT2nYNWmj2Ff5MTWfNiPoK4iSa4QFJ2XTbNramZodQkmyF3FEHgKPPWQc4qvhZgzwzZhiV2VZA2rQFUK",
  "key36": "3bYnaFJfbfRyjmGFvxTEaBPXvK8tVHw7Y8crsHgiRBteT4zuEe99nrxPLsy368uEbTDFDCy6Sv6gfweVB2YJJdqw",
  "key37": "3gnCDei7XfaziiDw6HmguVyVPf2PMZxDZfyfUKSZ4WGjh9gvd8XZAAyzfRTA6R2rZvCaM4Defv9wG2jPsrNzHiuV",
  "key38": "4V7bi32Eg62AW5AP2i1W8XYAfVwxhQV6NTafn3Gq7ABKSUstvxvpkVAxsfYN3imhatPiWPuCUiVUgnqpkpaaZDnj",
  "key39": "2VesRjFALQ1XfdeCtDbJY8jHYYFkxZtsZ3u3S6H2THJ7Gkr8W54PuUS2JFV9LnusrvXzYdm7nvno9fY6MEqXGzGe",
  "key40": "2THNHjbAUkMiqaBAexJvcP1w4ii59GQW8B3a64rPCE3Kbc7XLjeo1HvRfJYLsxa8wzXdZnAFNDoMGPgn6NdMGJHo",
  "key41": "3PXfHdDzjXxqdBugYQ4txuTkNAVxQxZcHprRbVYF6WAngcS5P3gTTniVWbi2ZXPNFwQLZtsZprCU7iTHXkpyp91H",
  "key42": "5fjvKq4yf7QoUajfydyRjWdafGienHZEXVqEjs5SS6bS8Wp7NiBfWe44i9aUM5V2GP2Uez5cCdZ81nVGgNeMPQkX",
  "key43": "4hAv5LSnpkQ889vCM6k3riTvASsZpi3QvyjtZLgXmGWJoDgDSunUUZjYzQtAassUR1tXCcqfCz9zRGg8e3YH2kZG",
  "key44": "2cDVTEVhz4mMya9s5sU1YuQ3CzKZLCp7ktQnQi7YKgQWX7ubRkqMLUbSfx72XnwaRF9Q5zbnhH4VtvRf1maposp8"
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
