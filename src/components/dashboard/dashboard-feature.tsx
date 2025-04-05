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
    "4eS43JRdzByntoEFcLBqAWqjdwRAvmE8UTc15mTq9fXExiAjp1zFXRgDYjA7tZX2wypPjNYt1Xm2eXqZhWVFebUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yv7oCZmp1y4GSgrwRCqKuFNg46vHXasWxg3ho1PicwxnrcBBoMnghQPkuK5vduuwj1cDXP5mTzayYc6hqsUW7i2",
  "key1": "EUCKsJrUaQXZrbXTmvuRbVADURa8CyNPqe3C1edruAVNiot7e4aR8xGBuhaHoUNPfvYnvWCczomv9LzyBNDKBW5",
  "key2": "4dvoSBrXx7H2RggTkBw5G44Wb4UJrtv82ba9cPhFRsPPRR2haiwXLK72LSNDWieWPQgDXDQauRbvVkwer4PSjAHJ",
  "key3": "2ASpBGEFULjBzQCDJWH7GqRe9DAAKfbRKZVJB48d3q7729RcGmt3TgAVNpeeZ3UymaKzBPGG3XfLTTtvaeNbSEM2",
  "key4": "2Jk6GNA74H4cHEcW4DLE3J89Tn5PaNoH825kkF4JQJRFW2iziNW5iasbPfGmx4RcxnuJqnJS3vPM3paMyXs3Kgnk",
  "key5": "3nnUaZKb4qjDB3x95uCPWZZkTYwTeqzqL13LUthXhqN6AD3HLhoeGSDJk6b8NALrWEWZJeEiFuoT6UjymdFt1JHr",
  "key6": "5R27Az3JTDUMaM437sW5jjYsvKwdvvq64azKNpWa14n5ZVBqUDnBiPng1kan8FuUB7W6tiBCLLdkeGpDqJCfdWkZ",
  "key7": "5DE2GMZwvKi7oyvi8wtUgq4HtxLHGRtRujkGayqVbftYPzzZWUB9orWhFwua8iJozMQZWCRgsovXQ7dViMXXnvRm",
  "key8": "266uKdmsAPUB3nezk9JpiLp7fihK8G1Mnm3ieeH76BqcvM5Gfsw37b2MCs62t1nNr1ScFysHv32p6i35nhRchkrC",
  "key9": "2wooDADRWHnYS6dVk2y1ZLghUwmTmeg2cVG4xDRVhGbozFkVqUQeR71RttLhL95Ffb7bxzJr1ovRZD6ezG8Hb3vD",
  "key10": "3KuwbTWTEW7QQyqtNXe1NiPuanix2x7RkBUdeMS2SDExj8TbJduonS2ETaqMC8UNN74Ey1UfyEWhwtqdcLSjTeoT",
  "key11": "9AhJR5zib5HS5pTHDbq4jy5DHGvzaHDNiadLBfnucrsjNxCWEW3RcNAX4X8GMACu7mPnWrQ17WswaLM8RpEodTB",
  "key12": "4G7anhf3n8tjhGZMWaUCEFq8AYdYh1eXzCPvwFEMF2hn9GB9X99G9Lz9vnETGvzMcCcuZfDFsu6BB3z4ruATbZDF",
  "key13": "2xz7NoswvmnGWRsiNppTYeGwrPRM3t7zZoWZVqkAYJn8T2NuHtSKuYKZFRd1Mb368JRBtYvqMxZgRMvSb6KCWQfY",
  "key14": "4UL3JRFhvoKmfcXVBS3REZ9NrRCB1hJzrtm5r8wjknieufaCGdK4iwwaDur6zasktx24tcu1BJbbngtcsZvapBqq",
  "key15": "48Vgb62PGRe3ATKaQ9B7EbQpKggDofaLajSqQWkQ3dDgoczv7Uza9USvpM8rcFiNdEh8KX2cKsBYQKmf8gYkwiji",
  "key16": "A16HDrtxX4G87NfciNvYdVret7pzPuHUgoY8KQo6Qkjk8hXAvQSBbaBSGutDSJ8BnipofLnM2x91UBLXya7Mp1S",
  "key17": "4cwXnSk3nh966h9GEQ95GdovVSwewgo4NrUP8xDcBH1Mc5zirpwmYaLH1yicAeq1kntwpzrAoHiNP8LxRqXsMxZh",
  "key18": "5CacVqcbcmrujq9HoYc9isSrjiYRp87bHUBpBeyfBBQigk1yE3mSUj3Q62kJ9vG7JRxJ4XXzWkPwZvESWggCoXtJ",
  "key19": "2EyGJ1PHfvuo5iY3HPJUvYAf6WExFqTJ3vL1zUyg1bppne1UHhZ51uEKzEknkXJB5iU7vspdGhmz9tPPBteACmfS",
  "key20": "2fNLVtkFKgzCswaWLL9WZ37DVM3uXmtRgH4mymLL4x19DoobFmXDr5beZZm4LQNoaScukZfdcEf2yE337PES1Re8",
  "key21": "2D3E22exEUP6Niiu7Pm27g5bA1V2RdmoUYqjWqnLWU3VSw7ja5BgQmojZtwgbYVRqKn8JSin7FrMmASiAATkU1ep",
  "key22": "387mFobnTseFWBFEvYL4HWa2tM53wtEw8Jsmcoq2tQAXamsXTaTvQY7sEtWsJto4sJTMNyQLbUMNewY64PvC9Lp9",
  "key23": "2VuoaKohcvMrvTVWBKNBGE5efnM7pCQhok3AQej2cVvJiZRxqddTnxCcPdaxLchNF3okvEnQLm3rzUK1Z4ge3oMb",
  "key24": "2VZnikQMvPdeEawYyT74fEUYZAVQh118fn9HgrHKdqGGQiJznJPcb8ELwFVbeWGRHB796WZgSUe6U4Ya2PzHjvon",
  "key25": "4ojVUdmGiNiSY8KexR6fJSSF3RhR27zJHTR1aEZhGevR8LM5vFKJkVCAsTmUpDBhYdXiNHBy3PmGf1TZdXiKJY5b",
  "key26": "5GVoBjdDz7oegeQt8cw4ZurPd831ymC2EpswVRM8ELFAEoHREKXiDxuydamtUwkC6Y2deL3VgazViPNfu4azbVEu",
  "key27": "671y3RfmSn9CMp4y1ux6eCW6TrBD3Hc9nu5LoVsbejGvqstZDM7C1TWFxfxaGhkLz8yhwSDjduChMkyf77RQzRRH",
  "key28": "JSpintDFW5ze9vBS8vXmLkMx54fQWzKz5qpJSMNhWp1ZkwnaJb5MqkxCpWtYpAR4VXaic2mnGNGJpkFMXaFF28U",
  "key29": "2onesTQXzBoSk9gSh1EseQCRbSoqAfaiJHfUpMEt8kjCxnhzCHCLtRS8KRCivFQoDxa7sm9nBJ5GKgbn4jAkhSto",
  "key30": "3GbnvFa83Lqbn9pg3NGMwftdKkYTYmXecLm8BPKjSyzhgYg72v9YcVFiVTcYMC1e6w8tRQqphyadzyzRaQhL7pKZ",
  "key31": "4MP4YtZze88wGZzmQZu5RRFnSnY5Le1QAK2YL4txmtNfGFrHLoKqux15k6tGE6KrsS8u4dMScUF8fX4CH8SNqX2T",
  "key32": "5kKKMBQ8TukAYo5MRN6itH3jDNSi5xhuVz97Td4mfForFdLEYQppShWvNYQFuGVZkWKKY1YyWNtCiYkESKStTuQJ",
  "key33": "dKrjtjFMn1DG5fNQqoAjjWG7XmrWBF7x5AA8nrS3XUwMmKH93sZxHae1bAdTpTZANw5pnMHHU7yYCmyJmddnTsz",
  "key34": "3E73Hv6mkCBtdcYjrEuSaCNmn85LjNe2kZYknwvEL86EZzqoydsjoQ7VLXFuwWTZR3QW6vSxgwT3SeD1sqYiwzSS",
  "key35": "4uvmG2Tf6ZoSYCcjXXMNftiydmorcw5GwHsYXYsVBVBz7NPk9bK6SzidUsyH3P7WSXnRBBWhf8f8N8cP44Zk2Pt8",
  "key36": "2datiXxBrSnCjVqJ26VtQvSPqh92fsjueQeo776Ax9FfFw7KUaKQkQpNbnmbQFFU1GyttdA3UJaSVzhb4P1PMD1K",
  "key37": "5oFDmKxw2XD285gXgEyTFtzEaDGn4jqjc3kbaLCTP3DqPw5kf2ey6G8Fmv8Rfo5TSZa5zohuScdhDtCY6wCYmnWR",
  "key38": "36uq4swM7bBnmtCWZp8YcxirU5Wv8PUgyqeZCMHJWqseaiZVmW4RYc541ycdmPHh18Tu2AiaGaW4vUtNLDMgmNPn"
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
