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
    "32eArco8MHU41quHTyZawMPKnCH5r9bqsujMTCnFhGMTcJC2tvqxMf2eL4ew3jQ9s8Xp3V7XM2noNQn83R39A3vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mzdVgUireuYKRswZ2iKPPkANH2A4pn73QWEA5TttNT2jq5UHEiKjea72VuA9ma2fXjtMLzkaXik4boRL8dD3gwd",
  "key1": "VFwH3ohF8dHdD5o9BHv7tHcNZt6EvxWPhw6v8XgrYiRa3warrcZ6VAa6pNXm9T9HUemwNzMsNsC7nwq5oTe5o4h",
  "key2": "3W5YqkBTApkJvSn8S2VQ7tsgaqx9Mnxjzda3LGS2aHMx1Fn3tTTmzoGrLHqv9Twzp6csdmeSvsppu9bD9cn9z2MX",
  "key3": "5qPVApkzirrRQ2QvAZ5L52Z32TnzoVnzET4Q7Ju2xZadamH5nMzyxaeL2JTi5hnPJ8hYdyDb59urJbKYtQ1Wzqy8",
  "key4": "3bSVxoJpCgJqLv9Z71ceAnPiK6hDeeLFcfP3cD96ap2ua4oRkuSGx17jPSLSfZ6SeiTRU3NE7LmaZ5Z6cHND1pR7",
  "key5": "kiXNdiGi122zQwiG33EBx8FDV9zRQVP6ukMnFduvUJek2qegeHbErsVs4aGKkTVzdAJtJDdN19uZbRpKqCFwmrV",
  "key6": "4ydrhku6gWM8LAGFp8er7YASfGKyGhcjoFpp4Ji7VRLTQmSfir3fBU9KQe4ecesKQFghprbykgKFi2pQSE2Grb9s",
  "key7": "4vVruyvEobCZfUsy8WdM877By2rHWgtFZrEwxju1hQKTMD9MictQxc68rfPeZaGnBwqi889tnfRcWEG2QwsbE7BU",
  "key8": "445WqmmA4rp67sgWadMLjBTLA6aj98JsEFHRgeLd86PFAxZf4RnRVyUjCF3Wit9aGwGaHYECCMfWZLe31jDwns96",
  "key9": "iwzEPwX5L5wzMdYr5mKSge7VgazbfRrqQD63ch97dmCWhvSihpvAv1v6pqJ5emrKKBkKKECe3uNhoMsJEabvErQ",
  "key10": "fKwPSAGjzJTcYiywCDjemxUQznsVUTyyCePXyRS8JDvdYY1gxUKY6EhXVKkabybkuHNYmZ4p2EPNT3KADpepmUC",
  "key11": "AqBAgU5JzM3BAmTrPf6LrjdXjcPd7fMcwedCJK9cmXinnN2gNn8h2jP12TfMRzrgWpi6X9aJ8acrP5c9XRJWTPu",
  "key12": "4ZVhRomzDFH6oxyCaVqsDBBF1yv9qyHmrwzzzV4PvY3AhW6dqbdHt3PkCipaEoGY37XitUC9hZb8wZPi9kTSzxbL",
  "key13": "2BPniPLcqq8SBvVAkXdoJmXmg1K5nJcGnh8KdKgsehboEkBovEX193C3aJVYvq1B3Wy9ysmijnhKC2MEuBqYNUfk",
  "key14": "pvHvSCsxgYEYxkX8iC53m71bfTcAKcPxZjx6dXTGXhcvHrZjeMwmNjzWmxGh3RcLfGoEBYzCuwV4arNaEAqLu8T",
  "key15": "5rQUY7vECJ3AHd9qT8qUT6aZyxAou4ABzBzwMUq74Ax6L2nA6zB68v6gjvq52jzG4Af6Gyji3YpR6WXpdDVqEm7h",
  "key16": "51U21Ba9uRRSC8xPrsPTifXhYPj1Xfm1XKAGpMkW9xNdxNMVWiUSWagK1sFsw1d56He9nVWDsZ8MDXiiMMDtF5RY",
  "key17": "3SmLa4ar5RLmFyMmE94gCDnYtGxUMxYWDnCQKKVXoSeP291rHPipr1ZJFniGgnrSF3RDxxD1afJe44WARTTkLc4j",
  "key18": "2ybC21NMQTGjHhd4vefSvFzfXhMRYgsxsNmmqodB8qNbJKgoG83ovX1K1ruLaHSURWVVvddhsxiuwd7Haf42YyCZ",
  "key19": "4STACRRgUrMhKT2Tcr3BgmB857nQPqtRTHYq7YeBshPMzEqWBHdj7JtfhMw7945ZnEn7NbC2QTQTTXxLNt5uk5c6",
  "key20": "32ecSHVZPaNyywNwoPAGESzpx2u4oMu3U8STesKDnFKnqHDwUcWhSmYGDnjzjjYbBQ9xiuPWQR9gLrdGKavWmbG1",
  "key21": "3z5AudFYYyhGdBSVFwq4S47kfVLFpwami66VPEj63UDvGnqtMa5fmHU5KsBFDivT1pGRTeaeBgpxqgnsgMcJd947",
  "key22": "5bJ4pSpAcEVYZgJe5rHVJi4LKyDCgRLyrxEh71q4oh6xNML3cS61FABuFbXcYaYrhLULjKFnvpPcBvcPmSxfCp1n",
  "key23": "2nAyHpGtJysE4oC3QmyFLSKHsvwsP1DFAq9WMGHoEbheAZBbXVv6LpYLDumNBdEvKCpff61KZ3QF8wVHyQpEYeHm",
  "key24": "5GpfF1Hf5cUDjGpMm2cLoVQp7RWkQApN7jMNCgncuXwND6okPPn7Bnq7Nrf9LXLZUYaV94VHEPBfNxAqmBW2kj1t",
  "key25": "57WgGoc2voEXefMc7jBzckfjbHCq7H2EptwKbRBSc6TXsTmYv2syR37KtJXqmn6SY2hrtKP8Ttzc4DTVXDA3x9dN",
  "key26": "5ELzghPDRVjWhMS2oHjJzHrkXdYDTyUZ6LtEfBYyXhkcraomDXJ3EmtSJn1FQpFWzTiGn1cnboxDvkyiF9Ff85LE",
  "key27": "4jiTwd6S1f4Gb3PDsrDXXAVDzCcCpN1VXojC8rt35cK2zcTT5B5CzoVkqrukamModHDUDzrwsE4AWVZ3FQ2ewgmv",
  "key28": "48mhu4nmJzSyQ2LV3em2jTG5NaHT48rr3g6R2MymnKrXWm9gizZEYKuMu4SYWgpM91WSRXpqXDiYrVVojzeRQfER",
  "key29": "43AH3BHD2gMC6nePrgKk2FTk8CjUd7dAfdqMmfKXHBCwDCCMoeybpxpmaLZ1uL9vL8KwRVnCVvUpRg7LLWBgv9Ub",
  "key30": "4qQh35Jd8BMLQzv7JibX6kr8RYRiESEj2jjn7peLxeV1iEcxTBc8JFKfr6FJDQxUFKsrTz9Zy6Vn2wAtJe2R8dph",
  "key31": "3MXdmR92eATBJbJgyCXp7dNY75mR7YYyL9nGPxsYeMMxr9WZr3PX6mrcF3WogFhnAA99XvXUKyBikwNk2n9aGju9",
  "key32": "4hAQjw3WzwDeMqp1RpCfRa7Gg4kBCskC7RRRLh1kSnQxkuJcK6CykSxJ6m94QacUZGGv9DsZUfmwwASwnXF9NHLg",
  "key33": "2KsRiL9vXu4x4qx9QxK9141TC5kPxkeLG6YdSRx5Dfipeoa2xfKWoGmXYQPZRQxbrjs3NQ2ELYUDYC7K59Jy1GRh",
  "key34": "4qVEsgW2xbZEHy2fFXeY6PotAjWyqJ3vAQZa2LpRXWQsY6bFVexGmh3sdT3SNBRgHr4qEk4vLaV9YdY8shdL3WLd",
  "key35": "5TuX2okuktEW7vTxJinFmiNozSDt3CYN3JNLDiVt1BPxXtNmfx8TcrLN8tombzfJaFAT2S7twRdBNQvqu9oaMNfW",
  "key36": "2S5tZM7V596CTMZauzFSytHjFLpPrDf3rE8jXSdNmhcosqvLVxcBtV8rwCZu5SqqTex9M4R27HvfKXHa67ZQRdVv",
  "key37": "2JhMzxboKM1X9D2WoNTKWvMNQD4NfxvN5cQTH4bWC5QWbPmXaLiiBSXaTPhXumYCcJAT9Guoe2gYQXfdzgcdDFEz",
  "key38": "2kb4zHGqaaxnL2Ns1kJLSS4KGC6TLNXg8YQoCc62JxLJyAw588SFVhL3Mr6azb5taM4PUgxobbfrzvKsNqrL2PQ9",
  "key39": "4p4uBwyKTizab9aCng2NHiWeoCHznBcKG2cydifbX7aMuMYkKHVzmLAWMYhJA6TGgoxGyQS4X2ZTi2HBkdcbVx8L",
  "key40": "5zgYGgGotG7rfwgrF1Qb2FpoZuUTVPawqqAz7okkE5sWVVX7Gktio6HC1NCaRXKUUZJrAgU4wfe5HDfoz1o3s5MK"
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
