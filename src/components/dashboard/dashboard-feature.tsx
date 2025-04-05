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
    "5Zgem4NwBwptxQwuRcvNX6JWsUfaEhyXVJ4PuDYy818PD85vr6T7Z2zY2KMe6iZQrywptupjmgvVajLC9S7wikMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3acBbngjr4acVCPTqWDkSn5bx6EfgcVfX861PEFAd7EnvCrUtZiGyb6wvu7CeiqtmTA7rhgjv8mNE2a2ijmr5QSi",
  "key1": "5m2n1REKH23S4rJWy4DwqBuVtAyBgi4JxJ3hToLGUNjnKTYarsTitfJXh5Ne9Pasi8yx35SNXWS7y9MxXcAbukik",
  "key2": "2LNUHo79eRhLJ3SAeDt7YsWCfL36bEWe1tS3ATXysqjAqPnvAVGf6KzQSDdiDtPPB3aD3gbxFcsNWQoa68QAMNGb",
  "key3": "4EFu3vC5qTwxVDSjQ8GDUweLc9m9mKmFwioQyYcXs3H4KJHxmAhJ8JDJD1eJzw5Qo2LfTmG9LXVehRPettx62Fp7",
  "key4": "3tNHA2R9MbPtGJTjwLebkPcNxUYQSAj3WrFJ3Gyp9WVexF8zLp6krRVsr8UFgt6zHhVVGt3eR1edcWfW3ZJb2KkP",
  "key5": "61CddVRCPx1b5k4EFArLfGuALzbvMj8t4RJe1DMxPRzuARhN94TNR3aL2u5CX1E6yGE1osCFJfRv15dtzofsQ5g",
  "key6": "41XhH696hsccL6pLuoBAb3phShPyiPWPxzf3ey7xQQfXJV6DZsKzsfqaVRRDKHWs2CpZP531FFETmHBdqTvaZRFc",
  "key7": "2ZYFFGh1cL6jXPqrc3i9zKRmA2JjnD5YtetFF8ipqHABy39dVZGwsfoY22NBDGxTVryUmdKQSTnaxU2ptYkPmKTk",
  "key8": "51i37xSDkkKfxYXr8DaXb8ybrS2wk23twdGJXfkoFWnMgc24heGeeb1cZuakMENspjGs2xLwL78ktxoD4uGVq37A",
  "key9": "fmFC5HSpNwc4x6Ej8R54tpavApaB4qntbu4a7LPEWxkSuUAAYPjEvUj9bpL5JBR8kNfPsQVbMno162TgQAVYp3Q",
  "key10": "46c4QZLF2mEEcFMkCqHj2Z58wvaRdorNh1u7qaYHJ5rAQYfY5f5ax4eNhMtyZ2ovtKtf83wvVe64RsCyr9B4uqPt",
  "key11": "sziXxHZ8PyqbkFXEnu1Bv5uKVqTz2rnjdQFjxWM1QB7hH8uwme3UQA7YM8KGYtGKiSxSRx6Stg1r8nEcHxYJcTi",
  "key12": "2PxYxKNWPH7dRFDcSvBaBBbMfK7h1DmcNXvASjVKBqSEgKDRJpsCRM2DWyjrKscabiR8SJEiWPfQRgxAfYEovPDR",
  "key13": "3ZurTog4XeEVsRi1GpWvDcv2RpyEZLknCcEHWsvBk4S6VmLrhQRUTm3uvX9BzjjnueS1niMvLxddiEzukqAx7USJ",
  "key14": "25rsBBDE8AzH33HmVKRa6F2PsZDKnwXi5vSFscPesiQ1w3juKTUoZCrm14eU2vXgWnFVQeZf6f1MKR1owNn9oCiQ",
  "key15": "2KRjfxHYGyGrE6vq9H5v3vE1zgb7EJxdpPaqhW6KudsHRgnwbiWvFnyirAkDrTvm1PghTXcBdXrdzLVoXMBZ9YzD",
  "key16": "NsFQR31VoaXvyf1hJDrci9TorXWYFD9Hwts4voJgzHwC2s7FkXW27jNttK2nQd6vZE2RVRStjNYJK3PUkUL4MHn",
  "key17": "4GtgSisA6GBVUwAZ5q35bxJ1eRTjChXAcai9a68MS3RpsPcqzsi6LMZB4yFB5Lsrj3qGC9ktNRVW5y74gv1PgKip",
  "key18": "4PzwS7fQkRier6zHekzwf3PnGcdsqz63gwRGKj7wco4Aih57BeQhR7DNUjJQf19xUR8vmTvhmkZLhHj3gZ3HyMrY",
  "key19": "2MGMnKXQXH5kS6knBWqe9QaGrnvj5op2dmP6LgWMGope3Gt8tTMBoRcWjctHSGtmFKr7TEgL1rcie2Gm23ktnkL3",
  "key20": "jHJstmwUDaf7X7xBURT57ERYvCJNWADTrHQ3SuMbvXvhpufR5GZYdmTiCaaBhCcgyfYZngaMWjZZXhLZaBfaEn8",
  "key21": "vnm3nRAyDSTojK6DLH849j1uAaoheUZdLkBxv655zSRb185QZXRMZX5oQCTRPNU7Wtver7XjevHYanfEcpujuUA",
  "key22": "2JEJ5hDPGLX4ZT1CfU2SvZBgZ5xPn7nguFJQYSyqKgyjtAUyPmWVjHQEyCnccwfJ4d6MGZbAjt92ZBr3E4v2Kckg",
  "key23": "YGT81KZGJ7Ej36e9jULY4ZgWend6hwCXeqLdH82B7q3HBvXQ1zLKzhyN2KRFvJiVUwh6Thgv5nihNnvE2jGauv1",
  "key24": "458asRSuQ44UMq25HtH68np12Tz4yixdZwjCrKaS6rrPLQTTXQF27eNUAueLTYcaADRrQorPNvJGGrLhWUNsQvCo",
  "key25": "2WC7avXPNbaP6VrXsthwRHBtVuHCFeEXS9JMGkCfMi7NR6t9dPrAmvev7kMvLBzLSQ2WoSsGNSaqV1dfQYAVipVB",
  "key26": "5wGU6pRNRz7u56BfFR99LysoxBRBvFCq6r9JRa9QE9kDFW3gvUVV54Nne4rxb52nH93PE3jHAMimbKBEDfxb8aXy",
  "key27": "3GhwZVRQLxNswxafhstdFPXngeABPBf8WPi6WfBdKU1SHArvmuRLiUqzcHUd3ubiUynvohYFHGmFgNEeak7visUS",
  "key28": "36eFsXsjQwSBqeRsJF3Je5XN2jFaWfYz8bdoWZoXPGaLuBMSuYFKqhbdkin6vT5wNuxsEyszhzzvnUYLQ42WtWBo",
  "key29": "23AnedpagsFFA3nsLeHSBXRFdfkQGGkhT3cb7hNqsPmKhCo8RhEEPMQvcXfk3V4R6SAietw2oKj9aqvLk9wJpA7g",
  "key30": "4YMryMt8VDDhMAhJzfziPeisjGy54zZTNNjix6uRa3AqyD1uiXPsvPoPy8W1Y5gYCvz6ipP1jwVMEug3FJaPnvEn",
  "key31": "4DfXWSR1jNoRGjiXGt8R6djM1FUF9UvELUr7AtHKTYNNVSwJt9sNhFDAp7PHakQWTm3Xy2VSqh4Fh7xBD9SSNEeU",
  "key32": "4fN6HzwmkL2R3PGvsr24wFDJPC3BgpUDTmxiC7CEz95wAswZYCJeN6BtDfA98k7nGvf6QTxsZLRTu7LZvUGxzUGX",
  "key33": "61ttqfqyDxgXe5tDb1zi4rrMgmPZdvemPYKqjojE9jrmh9NWev6UFXXw4oR5ttXcocgX5ZKFEVEaaBiaRDJCkhDH",
  "key34": "4fwx1BBcHcj7uTPQcubZbJyG3kkgUM4tDyumraf2J1vn5zJ9NVaKwkH7hmSy4R1x2X9MorsyBmnXNXQsTQSfdQWo",
  "key35": "3GZiNmSYe5fr9dmEEJ97iDCbCVK4G17bp1Fo5L4fjMLqHVncKtovYnKqHy7v93Q5TrWdZ1v8WF52NJeRyYZmdsdE",
  "key36": "2KNX5eULqSAaJXCaLNPLtKan4DYs3m4eXC6txbxjLxFM2ZcuF6NeqmisfgsPK9MuPeDxF7EaCacCNrppguZdHjYe",
  "key37": "2gDutbDmT9JwvawkKLRWAV9GVnNaCEbBwZG7UZqexzP8ifzHgoMkjxoP9gdM1p7sZpeXYvtkMhrLwpNJxRScvkmL",
  "key38": "2q6rN8X2hq63mLmAjq2UKH9EMeGsnPp6Zk8HidtUvRfJaq24ccBmCwzdGtwUHtHsDhwyZUGB66znJba7VkSjQrFE",
  "key39": "3LFhbonvZivbpuSQ18U2evrA3xfaMsSu4Mdn8sVJSZJ6Y5qDw6371bVmhtX1iueuFGC5d3uSe98UKumWhVpv3jL6",
  "key40": "dgtiaACiTZ3oRMjDH3ZLDMm4YFjdQFMZawkckpERp2beXTbLWeukKEJpngVKuniWngaBwZFxy17RTmB5CHxPGuu",
  "key41": "2qaygKNQuWaeRh1FtHZAVMNXJrABfcQoKfJbQvBYfgfm1j4puMqvw6htYk7vhF2SBdewZ4FQ8swCxXahpYrZmqxU",
  "key42": "4QWNAUE7oWAKeUfJixUX2iP9T71wa73ozG9DoKsHDUYdw9GgY4DciBtj6DZ6Y3agFWAjiRsiu17nF3p3V6jCvRgb",
  "key43": "66UuaUXPSBbxQYSCUmcYwSmtBgqKpCyCbAVkMJVWUJa7sRZ6jDVeBDLUWaLZaoDWTfMTzctkFERbExsQDhbUnP38",
  "key44": "2SMG6yxLbfUHAZNDF57aW7CYXKaicpqhnUmERSskS1ib5EnUpWJzuS7wcr9Mow1y1XvQUphD6PmxXMshRSSf8hDg",
  "key45": "2iuVixszPtUQTnQ2dGJh4dwYmLmy7UPbRVn2pEtDdtnWktkUP5X9imLsVrMk3UjUjcFGwZUiUudLSAxkmCF7CWHY",
  "key46": "4g7u6f9RqLRsv8vaQALAaV87bcaxwiT2LPePAUrim4vxEom5kGZtSW1kdHcSN4Efnds4eixXCDtep7qk1SJwXLqb"
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
