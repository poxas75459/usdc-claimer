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
    "4fjasbPCBENBHMfJ3mgkLdZJg5Qxug8JDFqJUPKUGi1vKazVAcm2E3nem87jUqwbbUJTGLZ54jd6wFkmfaPu4wbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ux1KWNCNaXRVfx7tRGXzJpi2pfJMGSZV75PHhZxtahHSnShkkS3tGXKC9DqSeZUppUYfpZesQq6BcfYuVHwMjL",
  "key1": "2UgvCFzNL4zJtRbqM96gNSQn9UiYGmE5cs1HYXNAAed1o7B1oupHThJy66v6y4cwb8tozdo8j4C1kiw9rn9c3HU3",
  "key2": "3rMCsHjv6EDCFpN4T8CsoYmwPyds8tv2PEY2R6g458ZEvKpXnqmUgkDJphCC7AQ6KgZkqLU9z1oxfgthAemHc8um",
  "key3": "5z7AHkCrbyp92uLTFGdt8Ngr9tUR7zDXBGo689xxTo3LyhwftirTuzfWTVsM7sKDNTspJToANdgopqccwjqkiKy1",
  "key4": "2zEgZaFLiFkExH9wtRdTv9wSgFMRCZhSuBsP94eeZB2qR8RhVDyL9Nx47hy2bupbG3QSXac3NGr5JYrsDcy5eTds",
  "key5": "2aCSRBoQmsEQqxrxAi6sGN53itK3yFAMELgRqeB1zdxgqr5zxLr44mCko1z2gi8aexfRrbshp5H3PYaD4tCGfVvM",
  "key6": "3vRNSBSbjTmVCqkX4qyNAacHQN1gfnf6riJNCS4GUyJqN7UzS2WNxQtPAePxjxzDEdMKCB6UoRG96eCYdPxdpega",
  "key7": "3KbNcWc5QkE4yF5yayJbyjTVyGLd5pS3oX4QNhaAbn8X1XhUhRbYdChYcVkGMWrbF7omhjot74srTpzqKbEMvTU2",
  "key8": "5prNwFtKoDtWQraUQkUEvukExDH51wMQui2Dt7oRjDXc8F2QeS9kRHf2UYdwvaLPtoFFjyWA4KeetGxRLrBQUaJq",
  "key9": "4Vu4UhQhNFszDoqyDwPUszjdQ6BQy8J5TUeGzBH52qpFv15A86oSqPjeDKWCt1VSHUxzuAPRYVSwc2MYakWTSe4s",
  "key10": "5WestSQCDfmrgVNbo7mwAjG3oD6nNb776vRL8w4ZVpGBNNjF6zmdKFjJG5Sw8WgsTTdux62KpDBxXvPmdtsVPJ4s",
  "key11": "4aW4sYApdZEyE4HbSt2qJ76ieuMPDLuaTDhge95Vs7nA7YQz78oFkw2Sbu9zUo7YRY6SbquqWxxiYpAKpeHVSiNp",
  "key12": "4xWWWnBFvL3VBWVxpie23dr9FnnzMsJhPDRp3utYK5u8bTAD63twzDVYLbUbN2Z2Jrb5MTNYuonPv4gWTqoudxTj",
  "key13": "2t75Qjpk6DCTPip68DKjCAb3ZwyTo3mcYVREuTTbeV4cY49NT6J4U4pnUF1bZJUEoQewg8NirbhJaV2FC52mzfeD",
  "key14": "4DsQCsFsGfGYJJ2m4RNbbi1t763XZKdsKZbxJfsay9S1ZcVYJnBvgAPX6wHT7wuaYa5KYMeZP4Hn5Q4pW6TAu9RS",
  "key15": "wdq54pVbhDBULcWgjXi3eb35Y6HXr76Q2CsNmAX2PYeXyzdKcqSaKeg1RdQyz7qoT81BpNRJ2tD78tp6znvZSPg",
  "key16": "5oV91iQQWHfoPACYUjRca4p8L7S851GcH97PdmEYwRjCLX2ijE6mQ3Xwa5XsYwY7XZC9d9uWMgCeJsgff1SoAcH4",
  "key17": "w6sisHWpT1wsLb2eN6Xx8SATVoivMrJRAo3e21iAyDvS97yu91y538ZGex1Njr96QEYkWbjHbTzFNwX5NQPGEhe",
  "key18": "23nsdcunMSmc8xtFWa3krASEAbQuHwLtPgvy4hHEPNhejB82yBPebJwQLJf8kGjG7x3Gp9XYUESrHM57Ccsq5bzm",
  "key19": "3CLYY9a7tAdYbi5RxuAY7JvXquFddiaNDERjBswL5pu7Lj3JUtSDTcBqPCMmmq6f8a9b3EmptzjeYN8LxsGL8LML",
  "key20": "3QmJmyACuoWyoKq2RaeKk2ppDM6iQePMJgYiUjnDctcFrsXM2bsTMsca2sMD8tJA5wXb9dDXi61bZnBB2Km8YwPB",
  "key21": "51vZ5DzjxVacmL3iYJBw9SLCnuU2fUTxcZDsvamtPGAS8YpsHkpCfA6yoQoiPpfx5gHHck47g3PpnKZswYm7PaYz",
  "key22": "5U9CcWie35LM4FbhdAW9pZ3MK7M4XBekyP1LkFFNxe2tvYU13JByDJARvLHsgbdiBNUo3Qq9hor2AS31fRTSWNy3",
  "key23": "5SdcMr14F272or3hqkFrQ8iUd65aQWb4mKrGn5QRJU5a9JH7aEojw2b5HqBpUZLGMouDWcFPSqzJ4g5guHvq1QDD",
  "key24": "3vKG6gWQTJLJAAm8u9g3wi9Y6zUttXQPXSXFHduDUkiE8tu2ezoKV9d9VG7mYRrhNNq1BAJLboDwE5Km4uU9duMA",
  "key25": "4oAVuiAEEBhdSa4YXvGr2TWwTCGvaTRZAN3cwna1BdABtwkrpNnyce7ComGApdcia4kquqaPEfNToQbA18rvCAQt",
  "key26": "3jJ462RJpsbvfRtmSeqnkpfbfQV8SLfHXrPQKRs4Luj3yMZjAHXfD1k5zvuckNcssmK88osmk54HojxPPVEecAXN",
  "key27": "3hhSR5XHQRyJdC3Z5UyZNpbBEbZFtSTvgEuMt4FHBzmRfxY6femyHPih3zXutfnkHJ2gxSqmuDuc2p57ocxji5Xu",
  "key28": "5g4TBWqUJTYJm6h1wj2whXZCWLjxcmPQyTajZ967P7z48GRAutrpe6Lo5ZNk3RSGadaJke9QEYsQGwuMUrecA4GW",
  "key29": "qdLdX7UiZMrZgseyT8KoNZS3ejCNDi8NmrRDXsxsfUmkm1qFNvFFLPmR4jEqp5SsCdUGPhpfanEEvjs1ny5yqZ6",
  "key30": "3njmN8AzREhar4WWEJPngLV72JcxfXVkz32XAT2Jgvk5Qsc5SACaj62n5BgQoL66SaeuyiHMZ8fNg1gqGfcqkYD8",
  "key31": "2hPY18zf6mHLzccjZP7dCQfFz4HcMEbZ6wAhCqYKbzZALKT5fVu8tsVeTJNtyKVvLAwtazdPy5PEkBCW48vpsQo1",
  "key32": "2Wg3CVPss3zjYm7T7iCYsoKgP2gi8U4XiGL8p1T9KEcx4JksmcaWHMNaeYRNtHmz73BzwBKXYVdGacvtBEEvZ4uk",
  "key33": "5JgsrzT11t66s6LcjWrMQ6jSucgWmGTMmVR38Rb3YS1nqNkp8rQuh6v71gr13dPqQqqfw3Amm3Ze9LtRqZyzW1wP",
  "key34": "3ZnUXBvZ6AiS4m5oCGXKiAghVZXKjZuRWLskM5pU2Dg1mr2w6TZsQAutDB5DwKtjvgqZHMpYpUUocVRao1rwesFi",
  "key35": "5HHRegbsnzYb87QK4pafaxZDmWBReGdQ5S5hK85XMs6cmrrqwgMzL4KBAnZfXxCZGHTP8AhFRX9MFYaVB1YUHPAx",
  "key36": "3j8boSGUHKcUg5iHAUCz7Ybz4oQ1UBFdjX12zcurRNiMNbPzfUaAviNgijhNPTpK2vjcifHxLRes3G4XaJgxcm7z",
  "key37": "t7V55UEoSoCWBhZk9ceuqEwPFgNTBHDNcFE6L7NcaYUEsgdEcXEgURo5woHGqTSw9wCGnZom1gD2XfiPvrhPP5e",
  "key38": "3WTczSvtZPeqj6saUSJZzXFKPQTFgzRH7ixakmYjsG1KUeJVJvgWkbbJaeokM8Apvo9HNF3ojbiJDibCbmLEX6t7",
  "key39": "3K5UABtrp7zQfkX4jSL9MQQHZBazMGpJv5uX7YpFaf4RYZSzUw4wD2ZWPUkxnFcZdZd3u4g1spDWJ6mEC5FSsjo2",
  "key40": "5AgtYxFErqAyAiG5Gx9QP8b6Hga4MVrWH4cfrFfxDKfv8avzGCpBFdbhR1SGq84n8LPCLCwPe717iK1BcrPwZzsM",
  "key41": "rESSCKQeyzoRTo6w6h2SXTTaRiHbQqBeqDvZk4S8YJotdpF93iL6TkrtU6XngLUHsL2RERWZppSfEeaaAU1U4nv",
  "key42": "5pDZMrg8825aPoxQwJgZK5uFu9Z449iZNUi36CSB1Qjg1pRNniXr3HUX5TNgYE8pdBUYuZuvzs35Nrngde7teZTc",
  "key43": "2aVQTChzTXwSRzzDDC7SnxFz8ZSfN34AJcVWKqGUmDsLkuRBTUVSmrqq32cz3BvfTKx18Bt8ZWTuY9sLfYkGoxoH",
  "key44": "4BLd1A2PDM4EUBzbqBS8tu5EZEjrCLNL616Zv93HFZp4XeSedaXnjhLpzakZSCgUX2KLyo2ujfdmB4Uvwc7NTZGr",
  "key45": "5swo4wk5UKdB7LzEBckros4iSSiHaXavKvXkRPHNSchnFHRXszBPmQPkMES11NAwp8n3A5x2AJaX2YzBLqmSfYZs"
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
