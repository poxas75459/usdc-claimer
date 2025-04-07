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
    "3ia614AxnNspf8CiHvfqT144PtDguCPPMd8HUBigrj6BUZRSK9RvoNSVu5jYFN8HY6aAisJLEpog84p7DkTD9vJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7KK7r6jdrDFESyKHPdRTj1QPJZXTHLPpzTofgYqVUuX5KYC2sQ9yuPtMcqn5TUThXuGaFucdRVhND3vECz9puMW",
  "key1": "5gn8AGZZzYkAgSMSukcrxmGB7ic92Po3keCWWaP3Z2jEPPyQN8ZRMNXs3GJKSPYCW96fwmdY3b2GwhuvFd43A79L",
  "key2": "3WfVZkm2E5YnkR13HV6zisxwkA4pcA48ktac9oUGMd5eVQjLXCXXT7A7QngoK1DY9CkyfHCi2bvc1i3BMjewmYiq",
  "key3": "ogNk2jpJ1rMQqWFLxK6xQNWDRe6MU7hJs62q8AuNm2myC4yRTBbCUced1kwdGzzePSWDokPsV47Lk5ihz1xo9hT",
  "key4": "32SgUzqNzmPXp3tJrp9kSXEvo6Hg2yNE12gb1YL19VMNG657MrkSfxpDJaUFieYzXHfpWAxZPx9p8jW3Fmar7XE3",
  "key5": "28YTZaYRm4yHS15KSZtWHZcxuvSVueG3oQZzkA8naETSNirtZFiLqC83VEi7Ld27a4KEiXs3sEA8d3j2SZZK9X79",
  "key6": "2UMKm6etUKorG22aVq8MptdBQ8FYk3MBLAzQqT7XcwrW9u23bygfz45anj53omDnnBgo8FaWLCDjKzRvpXAyjBfu",
  "key7": "4fxWRQokLMJwZyzckca4sHfp93FuGJcdCB4BBo1TTU7NhzPX2eZqabSsWha6wnu99X1B51gMUrszf8XRzysydf1s",
  "key8": "agsqKyG72tggUQPeKfKmeENUHX2hWXHZtyZrj8kUBnAFxqSBQ9FD4QYDYq6CtAdVWsUoHTrJtxwB9teXxNUypzG",
  "key9": "5xJGUg2CCmfbH4b5DyknZLQ8hLhrrYqmV3Zpf4iDS6xBFLRoE1i75AaCXxZS5D2n3sBZgMGNjf8FCNyopy9TFJ7z",
  "key10": "zGAkbuMb5HzZkffWhZsmVwo3PKB94PNknKTkHjfN7ipJiTezswY6XsSh8s9DTe8C4CVU5LeyZN6abUV2phscPub",
  "key11": "2v5njQ2adRE4rZfteDvJHSxxxMNSeYwgSUiu8QCrSAtNx3pfwNyUaqaR9HzQZGDVLqYbDJrtwHKFmd5uHfvqqzp5",
  "key12": "4BfaSSvP1V1QjZhRWKD24EUhcA83Gx3g5gbiYzPbMXis7NgzWcytbjbLuXqMXWbkoJtE4rcmdwToxRKRpmt9Jpwf",
  "key13": "3GKMDZUNXmFRiPfBVZN2oUP2YckS1Eg8KiCioXhXUGc5bqJYY6jueZNQ92QhcykAgWPqXPxa5Uj1K6TfR5ADQosq",
  "key14": "5zwVr5Rjomcq7rYMomGTqfprwjPUi4iGHuFTrfwSvZSKuaGFM4yd4yKN8pzWvZyzNX3e6GTWqojwbTY1QxiYC179",
  "key15": "2q8q49dgPLxZrQQGcR8qKRyNdAiX8nEVfLAU64VnbUqaiPMaxXH9VnjDVbrUZ5azGjFiBdCyZxfau7UGjdyvoqTB",
  "key16": "eWaZhCeiwfUYddKHMLN3Zg3GkJwJMZeQn9TdRwHC1z2BumUHgt9b3nCAYBHK5sVgFggu8yoGYjeU8tDZQ9YGUGv",
  "key17": "4jfRT5rww1hfKkZu9z8C3L6JK9fmFWFpXok2zazi8mYgPEWJGzoZbXGAcP9JTbsyuLAceybSG3gkBW6okAbQ8A2r",
  "key18": "3UA7iHy289eiRk7RQ96pTZEvd6p2dSQMWRXYMAYWzKk28SdJYfcpTchK5u5kFHfCHZUMJTMPNZ2DEyRRM2vjmgms",
  "key19": "3esZo7n5VSoKjMiCorwKWJqMQJd6jG7WpzqzKLa2QUJHiqfaXFDKq8pFnZHmKcPeJTaAC1t3CwogAjRGHDqBM3Lz",
  "key20": "VtYNrTYevZoQqn3r6sdavE1YhYYN151hfGSQvWppQhTgYmpRHmsP8cCAqSjGWgyUUSyJTNak6YQNpjiV6PqJGTQ",
  "key21": "Bsf33aQBmmHwFtrmZAaYppTZBAcZwmxtu6wdsXbpmqzHzBkJ9Xm5nxkA8srrZ3RePRX8ri6da2z8sx2SG2hHpta",
  "key22": "3mWWg46TYLpcDMcH2dPzogs5P1LugZ8QGvhErXZhGeEV1d9SZbZUJwDwjCMPXNyCW4ZaCUVeyLtENJCtqAEbJERC",
  "key23": "2rYJTcQ1EkWRFDuKXXqSNaLNvmZ9HwE4Gq5dLoyThpAMv5pn7TwEZKmEASFkegHkyBS1paFFUghAe4m3yKAbPkMS",
  "key24": "5fcG2pTuVWqz8ZU4enank6BhRct2c7WMShW97JurZYitAFEaGhZNrbv8WtPXcCo2Tn1sX53huyfscHfaBNrsda3D",
  "key25": "2TPA1bGPC3ei89hA4KCkN3RRuFT9mebVp1impjg14RUU3XCJLnSmkZXXqj3ehdkfC68aBpKyLWDYRpi5E4bNAzMb",
  "key26": "Uj7jmBxtsaX2Sq5rpHKsFhpU6JHyx7dGLGhsXqYhPkioQWXcVKmiQQdBnQtdiSYG3q99rM1WHdLk1BGKhdsGx3L",
  "key27": "2M4hJzyHBKtzE1Q3bC8Y1kK3XegCpk9BagbL166n12hnNGQeZsicksKcyB3pm7X7xtKF6fXoCNTR8uqMqCkRSrNR",
  "key28": "3e2MoD6VuvMtzSqd3FSfUUGnXcqsgvjZFkQsjt1HG5LrsUKCf398oBwKhsrCe6k5dCx8XANXJPjHLTrqqrVTGm3Y",
  "key29": "5KxvK6kagoYtfaDpeBcSrsac18Qz7ZKPXAa2yNUQbb74qeXnrCEwRiu5Jo6MUU8GBs6QyDPJ4A7uTHmw24jkZbuX",
  "key30": "3uofdR1S1voFwneUwX2JbQVZNAoSCkvV5XX9ThnVyQbf3nAVyW4RyGTq4sTRhdmGTQW3tuUhHZzm6aPGCooyBmhL",
  "key31": "2kbfuxiUedi6NqXMhiQLAAbiA88y12j34HsHy6R8ZnoPE33MNSqW4A1ico37Ckg2uFhNRFHxZZTzo1KW9n2JFhZG",
  "key32": "3AQxc9fj7uM3nMXBEu2KHU9QJAifE8iG3AuAXZJLWKe2F3XFAVmF65Wfiw8LDp8NRnesSi6xufMoEfmmDBr5tGzv",
  "key33": "Ma32HPvaHzc7Mpa62YL83EdJjcLAWt7ExaGPUAtfpGdQi6vJ98NLEty4Sm2e7jPFxMtmzy3uUvx1XjoJo362bNe",
  "key34": "4EkriqnbySuE9FZUtCDeJaneEtY9xGGW4k2NTPvx78KyQjVN1eK2Gzzby5vJYgGLHPqx9a4BGHXeLK78yT8gVmDQ",
  "key35": "2p55YLdztvFapqChti35HRnj5cZNeQ1GwrJCzQyPRTTiM5QsRFivaXLuaupAC9xmLcdQvFLxWsWs31661D7da6ZM",
  "key36": "28rQVY46Y8DS3CuDij3HR94WaxdmW14P34gtJuF61db69ndgcFBYE4oYZySxEKLEYhQDmHunZ7veZp4CpbLyGhNg",
  "key37": "EC5PfuKUR1sAnwoEKxVUFdJ1qXkwXKPrLBYUq4eckM6yrviCr7yxi7zSnse9Gm1ByyGfkwWDFmvgfRhiNEKQ9Kr",
  "key38": "2wxjpg4dy8yWoctJcfU3oEG1zSPkrwXCkhVXQFgHWatQwQuox6tTy74PSdPmfSAMeZ5hMXG78sufKrsyC3TFRpfr",
  "key39": "57xZh7iK6bXUqGXEDPbeuSPHFLhph1EjSuCwfnBXBqNEngACpns6uCCSenQbCE2MAtEwVAo7i5zPzWtibc3ZeYYU",
  "key40": "41hTZ9qWMbdoifLvCQ3AopggRXLJPdFsTTX3b64R81pGgKVH1hGKJN2b3wfsoNjdxCAxATyfWYZ9am3iqbp5yPFu",
  "key41": "47Wh6x54zYyiBMsJnm43h7YbGkWnMNVTm1LWgepDeFxiRFnspbCtpc6JHjgS5kGSEhoVnWY8w3c8Ymz9dY1H1LPC",
  "key42": "3fDTTsd5HAmnfQ8FjrYevuuBWyzPXZ1rUurNvSRHFVphxT8w9YHSuV8CSuhoD54D2WERFBQd4XheRLKhdBua9VbX",
  "key43": "mX9bFEiYZjuRUhykVy2UzqyET3qB3YMcSdzN1spRckTY8W6wvp4k2xPWozP7bQWfZtEtA68kaJtiQETKTRUwzJP",
  "key44": "3foVFLMT7LKhK75s3DNSZjV2nWMd5zrTzr795VE5cXCsKqoR7bBZ7PvTxVvqZv7gZ1XwNpdu2SNHUVBpcRWsrYpX",
  "key45": "zEgjHzG7HuFz11cryWyhjg2DzrsYLoG93obLph7pdnwmvTZyA7oic6enMHB5EHXafQejBt94nqo9JEdUmDJoP6R",
  "key46": "2j8t5rvE75TUFtsazHYfoFj6aEMifpJi2GvPMtkxQq5abCDAr7uig1Pcqty6NN1UYVBjW582iyD1jZqbLwnG1waX",
  "key47": "4ZU4e14wCExKCXcbZkdDjzBU9n9S2C6fiuKdDgYBdTtkqBTKekxLHAgfMpMTW5DVJjgUWvJtExGUTcsDgL24Hprv"
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
