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
    "65FG9B2B2qWPWSdNSwg997Fe1HrFc36Wb74hm4UZHjaMfShB9V6ZBk9gMemwA3XCL8GhFfrw28Vn66voVUpjP2LT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mSqXxKtRS8jcmLHVEcvqJc41ZwVH8vpWnYmzUfxypB5pUssk1VAngP9RFJxroF9BzLoCaQwtVm59Ug6Xu41etkq",
  "key1": "2V1NpVvS8VqBkrKijJcYxLmJdqW8dttrPU3vje4PB3psqcDHww3dN7VmowFZyvQgi5pJBQtiN5LGGyW5LJ6MFWqp",
  "key2": "4R46r4F8wTeB9CNtpSCJheNS1gV9x467WbqLbcTXYbu7c66HYh3GEiRpqTo6EVR6mSyQikVTVWfbLh2X3bv3AhEd",
  "key3": "5ykb59Uv1j5cgpR9U1ZDm49J9rarVKw6MZh3wrRyKbe4pgy79x9krh9XTtgPxJK2T3UfQoDyFae5zVKRwFm7BmQC",
  "key4": "2vmVf7jVRppDLMKNjM1gGd2fSAKaU7wKwchFVWg4WoLCR1NLyRF3DTw1cgfng7UiGUDbB355FNS5RgcDLunj5xcr",
  "key5": "Wc2BQ4M5GTzvuii7Kwci13ucfEziqTuEDVAnSDdqzNuK6bmqVoebJy645ZumnesALBum4symUpbmyjTuermhhJh",
  "key6": "2NVK7t1Qs7sexuBF7cR4zBeSGXvkxEsAv5g6MjjvBH4HeeWGcGgxziCMDjRAihQxwnRr7i2oPdwfQSRjUchrnh1m",
  "key7": "ZGCyUV898eRtYZJmtMCiCtYv6KPn469g3he42zbM3Uvzf85A8dTsi6dHdNdD16EXNe6uNLuxgkmwvdApKKC3V3C",
  "key8": "4eLJaZJ428ZMNWQa1wNKhVqYZm4tELJjyjmoA2AvcYPX3BAQzUEtqAXRX4zN4pHVMVSJG5VhkdYu1t4q4bo7dLgS",
  "key9": "2HmRUT1HrHZ75o1EqWu16tPDNSBM6axkV74VN3xe76nVfn5SjsTEhiFJxR1ef5GFyPj4mm5jeQQiskkwcjZtV9wN",
  "key10": "2LH4GqpiQJbvS4E4N93YA1TZZ8rZdS9UNLjb1UPsqs8vj14dHnTAs3wVfQ3eqEJ9drq7PdtS2ZPpzWSerbW3nMxc",
  "key11": "5ytBEVuRXmxzbUaSR1okKoGeA56EucTteciirF5P7XXcRdxUxLWBXgd3z62z1msMUrXj1p2KeNXfpF5n25HMram7",
  "key12": "2WsZtc81kVhyR9ovpszTbnj8AXbUvyan4iQ5pQ6AmNQxSqmb6X7JFuyqfq4sP8MKv42Xns6gPzTSHxYEiQ1B2uSS",
  "key13": "4yBgD9WHQoYYZEmVbSu3f9XNLFBXS53be7n2Tobw27fEgwmRRLfjKRnLXHu7vWuoKYSBn7ZdNnagVtvEtZ92Lxi5",
  "key14": "4N5q41ho1um5vfzAu7gXsrCzgLrPswk1ghCbvJTmJ23ffFvajNihDK1NCf4ociM6Zcwodfa8hDCjP9EwfQ2jyFuN",
  "key15": "25qkqgaU2Y8hk4UiRyYt7Fww4xnuPA1i4Cd3daNk5qfBxW6KKUdb7VtspcxX4jyWaaB4CBfcWnrzUzJiqcmRtedU",
  "key16": "59eRuHAySgBodzcD3yj716X984HFwG8He4jfnDugWTn8715wtMawYmixvbFKsen7nMh8dKeczs5V2kH9rfDNuTBY",
  "key17": "2hmY8EoyGTanydxuaRptUftEqNru6Ry2teo5U9EazJysKzyW33Te6vn1faggq6zRSRQWA9jKQb8KfWHbwBedZJM6",
  "key18": "3iGHAQK9sMAAK8cCBKKHAqpqAe9QAf3vxTzQfukKQm5S4JaKpDGBEwt4o6DXG7acAgC74d6nFpMgHZ5WNGqwPMZB",
  "key19": "LE2VeG8N8SY6beBFash76e5x4AVtmuZaCKzWUYjq4yxkGTvi2tELZKQXhyPVHiQQ2ouGdej5XZ5dchD7427mkYa",
  "key20": "5qF8vG75m1ZsUzrFJu2eKYZJe7wmwP2jcpD4g1u5b3fxYvtNmVPgNwPZ9EdG7mdrm1uSCxR2t6eXvNeJyKvGprrk",
  "key21": "3NRdp63ZFfyqwYwyMxYqZVRS8gPxouSccndjoAmKY5XtYgMawygXSWmxHqcSEe9EQfMoPj1Gm1M4huHUFxUY2EuJ",
  "key22": "2aAJn4CmQzsPazThcfmzjTF2UtTmqGU5Lhka2jQUjDF3HYZzGSoPyAzxuEh8zaWuPPRGzfHCmJ9w69YeZH6CES5X",
  "key23": "4GufkY3Np9o86jE78m41thfN86ZhTnPoJeAHaBMnbfnpee3W17WdBSrrmyBECTsNfgie5veErrsx8hZ7R1TL7tjt",
  "key24": "2Z2GJSvbzALdsnadf1qpGGv3xrTChCbxRpFxTHFUiHngmTazFcU1f7qtNxqQTnuL3vTyb39cE8dvC3TsTi9e6xSo",
  "key25": "REQM9G3U6bjcCrX7KyZbYVFuRb2haMzmEtYZzXhZYwdFbrW6mzshm9DMdfHg4MLZCQQ8TV2d5XjYY9Yr8omXH4L",
  "key26": "3B3ZtA8nBPHLd1HuU34zs4AzQqgnAZVEAusdHrhTDFe2x1MNG7QFkL6XpjvZfW5S7no3qx3dkipPmJBhJw3qRpa5",
  "key27": "2RSywabAsJoL4nNQjmEpJTyhy5dMzuiXwXTLjbfMtwEPeoEwrrvRqr1SkannSrQ6avJS2WGwANr1FyAgUSHvgzNx",
  "key28": "m8Vpc2gr1dWWKtMoDsJSFTecdxgsMYj6fKgTRrYTdXKLmiJkNqyp559RXVjkwmYEiAuf8Wn6CXauCFDR2ApBh3P",
  "key29": "3jTNoYZagrK7aV7czieXgPMC7LHchfREpQQVVDhK6z25ijc6q6YjRgLwUirWaZq9iLyYvWw11orNjnWvxRbsuYcQ",
  "key30": "4jqDzxfr3P2YaQiXwvo3UoU4aS2Cuw5ZwBg1h9JJ6UCKeAMrb2RFn6v7b9pwu2DSJyQoveJxWF9CtRLUy7VquXW5",
  "key31": "5Mreh2du58V1RkubMfdfJMxdUbbP5tLGY63u2nr196YypieyC73PGZh3kLfqD3RL5CwHAySNNdqnYgkBsnEW2UTK",
  "key32": "PN7mpVBG9FKCqost5s3tEnA5XkxqAvHv5N5sThm1ubGRLCny5CQwaKXcqGoPB9A6QPU9VYUg3qk7qRi6AkExcP5",
  "key33": "2MKHCiWdjbB1BJbHSSQotyc4NAc4JaR4NrSBbUwF7jH6MCv3kDDZzYf2bYGU1F8MaN3bKoQb2RCznc7E8x2wt8Yb",
  "key34": "38v5Cf2GSUXxeMdscd8uQJrRkJp1vESvDzwYDk3GpFTU9cje3P9LGCrnyMac55e67mnwmt3w4Ayzm6V5nTvMQrmt",
  "key35": "57t9nr6gorsSkB8PFRMZQiBSYZ1NocFaKTom5EBpbZgQ9a9wE4U8QKPwgybzRYZdoohkqUP3gTgAXGuhDMaEohBL",
  "key36": "5UMKj946De7sgwWMEKwd7xjwzMnXjfgmGJgtxSGedkfad2zMEEvMn39NmxdCEijn7LoZQxP3h7FvRaQ4eNoFn5Wm",
  "key37": "42nRTcLt198qevPHAG33bFSTxhETxMS9mZ1tQGxdrvENxZtkKWKrRF1GSmvincx9VkxhRLNrha1jfCJbmbjddbsM",
  "key38": "jYBVH3i9Vei35JFucub3HM1MSpjtQZa2P3UcjtQGcxkpkStDqi4SoHowBisTpj7SyYELHxMCjWNrwKgn7aoNnKH",
  "key39": "64vhyZTKzyyEVepRLAHEQAF7NL8vmbBYB877rWsDNA4BTiQNDAx85Z96ha6CnH3SnEN1Xb4uYz5MU1rtfP5nPrau",
  "key40": "5XKfnmwnGnHwnCSjYddDf4m9NoTADd3pCEHY3GfjCtGHEAyEu1XKs55CtGo6UB6ori2Tk8PwuKRFEJZWVQ792rop",
  "key41": "37fu27CRGba2C7QQs5DCfXNQ26y8a141eJwFXdYy6ib6xdab1qmARGpfpuN6WiwWURgUmmJcNonFP8v8838GPG7L",
  "key42": "3nK8pfVWvAhgNREVsd5ZavpnP4nTonqnC95i6k5d5kCjJmvq7YanrPb7vWkEVG4jz3cEzmWHrjFyhYn5xTBb2FeX",
  "key43": "2TaxyKdDgwkmKE1DCLqA6j6uGvrwxiqj45HkbTjWAXZG7doYWTUTP7Gr5hUU7TujKANtGSkjsYux6ps1No5ck86P",
  "key44": "2k2cwjrFvKjPJju2PJvJucMHUE5jTbPYva4pdHpNhmAaCCenpSg4BaMYL1KfaEWTiKMA5Y2vykmg4Tdn1kB6HR46",
  "key45": "549ZhD4whVjUk4U3p5rLLTDfcuRuhnezRpoGeqP34WjaugymnSeDZP98Zc8EAFFPFWF8tvwRebmUXnKmHecJEirc",
  "key46": "5rA76NPytfwf3Bb7C2oLn8fdadr34ittVHpE2QvS9cQ6ykosU25YZdBReRbSMBqDKuWcfBEc31rcSekC82Gosiwh",
  "key47": "2ANCZbw8wcNf6BBhTssRk3VXLBtM8nC8xHPeVasUFSc7m8WYKXzisXenhMyh26cDNtREcU2rbiXrgL2jXhiqpX5v",
  "key48": "2PR3yN3zTtsg859Msfo2weoqsbTywtQRmuXcmUiAXxc9NFaTQPTvEdgm5qa5JfNqBQ7xvyiKUqcuvmxyqhK2zqmQ",
  "key49": "TiYyK99A64FJPguWG4G2VXi8qH4NtqtiTfYFSe7jWF7deXa2V2Ld86exECzBbgkx7ZdbeNFUH6Pin2xUcauk81c"
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
