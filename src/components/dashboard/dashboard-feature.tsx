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
    "4xtupnk3URfFDTtNCouFjXUf5WaHfJzq5J4qdYBPWdSeqXMG3Gcqawwqzmjy4QD4AMzj2MgJHTaYNtQWKaT3EdeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rw86gjDKtnxzBX72ehUws78wCDDQ3gPzzEnkBD7bDfsHFHj9PEqfSnJtk7WVDebd8WuqvzhcKkpkrbv2d68ymdM",
  "key1": "KJMH5WUpY6FMGp4xw8VtkC1PzjrTUBuTXUWNFndaXkHJa3z6YLgSxkfZdBUc9Ap5pamE55UF92cXes2Y1MZtFA2",
  "key2": "4EaYXU78DeZLvXC4AqZtQbkBxL3diXRwYMafq2xkAkjyJRbnx1E773ao8n7iNa5AcaNsBH73brVqWjBG8gRAZNJ2",
  "key3": "4wWB3eoAftvZHFR7NZTjuhQ523FYVt4Snhm7Rh3rQePjCnACTbj2UxvXenJdjYH3bhfVjzUKHyaq6tnns8Tt39aB",
  "key4": "2aYopPmgqcTv6Ak95ozQZLCw5k71u2cn5vWtuAbn4nnQTpSyjjMmh8R9D2yWRVD9LNF7pRoz7596Q214BVdzCbcq",
  "key5": "ihUqK7Gtto7pnXAmd4F5oyJ57vDVRKNjpRn17vJeTHMUdoHwM8jCcrWzpkhm8qmXU6kZuKj85NBd6iAZK6MWgEX",
  "key6": "Xj9STZ1HPqFmZBBjuKXfP4qFY2CmL3DTYoDqWWbhKCzLBTicUk36LyVCFamkEcpw9VKnkwidEQ8Vuudzom6v5qZ",
  "key7": "49rQc1yTKiw5kRbdmYDFrZsQ3NnUkYSZQx1GXoZBTRkUx5PGUuGEnrM91TBt32kzUF2ZSYdHqZ63ZVE5GvdXW9ja",
  "key8": "HVjJKVLJFccGoeo5NwxPxfxAEpUPSZXdWQazeBxJJmBqmXLz4ShjRDdsYyHvRp6wXvGJroKY3rb6efssMDLDsLd",
  "key9": "EgipfuHnBP5mYm6EXBZBUMar1XZpFXiFK6tCN33b9JuGKVzcQhxQFpNgzi9YNQU5Zd9jXNHwsSqohhEVKDtFx7a",
  "key10": "2cbVYHqkbUXs9S5eJ3iiYZcwQLZhtbDi8nxSGkvn6kSePHZweBF7VTpx9egHhpHu3uXAP5XZcRxCKiPvKCGK8FGK",
  "key11": "5rB3HsRMCF7kdq8EareHHSEadCwpRVzs3vovunrHmMqxsZZE9CiGBWgK9boe2Aev1E1Kn1YzPa2Fna2ZspV4G8KE",
  "key12": "3nxdesg7DYnPDPtiumcNwT4zAJVuAEQMe9icf87GjZLgpc7Jp1MSG2tYFg4D4i9G2pJBFtFotq6UJM6kmn7YjawL",
  "key13": "D5QGdwRHnKyRXCzr6VQpETQxR8qZa1uZk9yViXtk8442tGZ2QnbyMdXfBbKqKGnXy77uVoKzZyn8HkhiwNTv62X",
  "key14": "33GVSrc18PF6qEFzk5mpDtL4GDijF5VxrD2sEv1vDxC7Xi7X6j8R562gLkQTqW6AYLhcd99uqyUbEqMXmZnbfH9K",
  "key15": "4RYfR7QKfMbcJRvJzr7idqsjByREqiyiMF1o8qWG57MwDe9EwBMDgbE4rEHh3t7acY2C27cEqW7mnWq7bT4PdNF",
  "key16": "5d9Kj5G6uCQc7dTauAeQGPAzRVgpi8MoGu8Dn7vWDa5nhvSWzbUbZAve7Mb9jTwLgWjAK6VXHPfcX9tSy2TDqFqv",
  "key17": "1rVshgw99SMyFLcCiqfm7emX13eUPVim7aWx3LWMa9DCp7GHmzXYahosKYobRMb4uxWgDVXsfky51QgjYQMstFS",
  "key18": "5cenH4WudckcS1HURtRD4MgodkoQXyMqmLTwBooQLfxSw5zXcmgwuh1ZP5ygjPj8qYNqzAqqTH3SxoonZbdfnxkh",
  "key19": "4XZ5aW1eHVYen1pURmfBREmheCrKtGaeqm3HYWtcDcVtwxJkUBWhQ3TZcWRArighcViuUf958nLeMCBcVWcXg6Jd",
  "key20": "3LVpWFnbomc2SFCUkHHf4EeKeKeDNGs3Z9r8zCmVvLiPGAFrfcGe73rXrg8ty864ugLF7wMBoTxUe2j4AL6qSLMp",
  "key21": "u295ucuDtVa9zEFQghBraY7fqUUqATA3MiiwYwYBNseYrNqcY837gUhHqHY6pa612Vf9rpZbydyu7auMveQ2G3d",
  "key22": "5YZQAE8t4ZapaRuh5T2cTN4WSo7iSRJCKKFNsJ4wgVa8bwKyPjUe9innNybGkrW5D3DLc7jy43m9DUjX7FQYr7Hr",
  "key23": "2RnxCSME5jUmFHkVhAu2fr5x3XLzVfwErH3FxjaFsBhsFQKbBif73pmGh4D1FSYmMM748hJ6UCFxTFCCZ2xLdyeS",
  "key24": "j1n4tVEi831Rnb5eWtZeNzduPY3hWfdmfaVFUpGcyGkkqL5LX3zpqaN16RDoLTVYDSRsRSQg69ixKMfF7aUVEoh",
  "key25": "tHW9AyHdzYsxMGRyBW8vYLE3VafE7u7dGrkWdHHp48jLbe6WAibEnhc5YEZq1tzUTrca3rchGo6PhLpD3RYzM6C",
  "key26": "2fkgbqoYQC6EVitKT2jARBe7Uq58Lry3LvNix815ji4jQpnB4HijD8ALdDBRAKdcgHGLrTh7dJ4WhpcmfRFL8fkG",
  "key27": "4XCoygQZ6fTH626kmZyUQQ4TCb6LGmuLPvwTojQjvmc61G7WKtTpgQ6MwRtA71UMjDTxWSBCAaWSDHhK8EauU9ep",
  "key28": "ZsYTxLfF6PGRLdpM9o25UdH6YTvgC5EhQkkNBQ2b795t4214iZVcZ34YQpXcUBs3qCm2yBQc2GdD9MDrnnk5qsA",
  "key29": "4x3etrnpvjiord3X6pEy21owe4Ad9BAGiugwiGhDrBxU9H15xaX9JwHEvXy6rfspNLLEie7ViTpPkLXm2AFDgeUn",
  "key30": "21LhyNj96S56QvN4ndBDozbs75uhvK7h7sDCSyTTrnGHXRti41QGzW9e5pBwvK9pUT2XoypTN1qjjWJhyeAwTC4P",
  "key31": "4Exd46rU8aL2XHPTHS7yqYT4VHusG52FhQCL3vnymsk2eNQGMrye2EtJbtUSXVbtmVxVqub5nQiynQQAeCfYbgdm",
  "key32": "u4jwDiBaytZFRVAAbrrdsGXHuzjFa4vZ4buwxn8NjeQmJm2vGXGJtHLa7qT79RrXWnkxZnZB5uC9JvnWN1TXZN5",
  "key33": "4WZZkwgcUP5Z3DjqxAqzw8Y7fTH6fdCdtDxw1egnSQ7DzGgAWG38xBKdCsEeARnQyPY3A3bvVBmHJ598bpLX4BR5",
  "key34": "3mf5ynw1VZmHeBmT1mBn8L1os6WPAZnYwMj7nazr3agXQDi4GPJmbAcR9cX9PsXXJxnrygNiYyQvWZAbeEhaRryg",
  "key35": "3GkUsekoHeArYtkiFWp1YFXpcvGKCbK1e8ggxHpyvLMYeL4TQuxT5fkJGzisoNfzEYLuhSk4cxUYRDq4mB9QNVcA",
  "key36": "2Ufj2uA1uxwrGQ4jHyHbToBz7AzybDk33mgchzXLaQc8HTa2fajJAYZuEc7iwcpkUYckHPGcNavLF9yet1k1sAEx",
  "key37": "3s4HK53u3fU7QBqDs15SygvAvRgK6CHBWV4QrEViMxM3gpTut6xS5c66nfnmzjL6g7b3uMcCWS5UcJwmTM1QFNTz",
  "key38": "29ZjZyHDc32FwxpPpyNh7Jxqmy41MAXR8myQrKdEjp6YXcBUiKw9Q8hQv5Vke8hunXbAc9WQvi7PJuX4xDJE79Zy",
  "key39": "2827W584JTfTxngjrj6kJMMDBrNhNRn2NsrTdt5wZHMKETSir3cRuhhauyudbNNQPB8onhuh3J5BhDTXfqhdKjYM",
  "key40": "3qAZeU9PKL23zrvciWC8nweFJGiZRj15QzagBw3eUwh5wxyqUCwp5ikfr5znj2zVRSHGuwubQajeL726Rx4EmT5Z",
  "key41": "3zc6J7RaVM4rnBXj7qF9c98DiTzXefU7vgtCgH8vfv3CdPBg8weeLPD9UULUd886ZfXgqXq1ExsWqV6Cp6rdh5UY",
  "key42": "48aYhVBVSJnfYjF9YzaeRJVDxKdsRzyVGicq15H4Cv9we2mNoPiD3VDF4sNcPTSZsMEAyadnqNB7WCSw4dtvw3xo",
  "key43": "36ppr9EWKYvrgRdnCBkmbW2X6Voo9WM6SW5cwiUxQfoCW37LPKnVoWFBn6B9fet17nN95RkgWTZ727M5VTPSuuka",
  "key44": "5UtHGx8d9SFtkxYrJGQRKh2fpc88X2JwBBzBXDMDMtLES3dMN3f5HRwe87YXhHT7uN5z5x5evunWKcDd2yiEpmNR",
  "key45": "xQMhfLrrby4XinE4mxs2YpJZWem5qq1LHQvdKmtMJpP5FpAXA3ezqPxQEf9iuKaRMkPkiqF6PV8pexMHAwnpAfx",
  "key46": "3T6P9AgiDRB9WihSripbF7Eh4SnBANCT4Kf36b8zaWZb2DBUxo6X247ZkqXibAYrzTmBtc6MdCXfwqkmMjEG4s4T",
  "key47": "5c9g3Y2gQAwh1N5ogDpEhpNT7E9xbku93dxv84oreGP55MuHhiEDjfTh6LNGd1Mhm5Sm2C8BapmpFxm9nEjZe2Wb",
  "key48": "2LrhKGeQabXrd3SfirVX2vYG4rugAVRpUUu3Hx82yuzvVGknjW9smDRQshVaThwjSV6fZJBkGSEkqeCNtFD4YEJi",
  "key49": "4vmVvcN1Yz7jSLYZ3W232fAQ2k1b4qoAnGMztfYjztJ4uc8o9DJWjL6CJguWSwfqhniH7XcFZU9b4GVN4XkNgqF2"
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
