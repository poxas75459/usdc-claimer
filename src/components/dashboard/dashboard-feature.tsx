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
    "2V4t3CS54ZqK3Hu3z7PP3CY7jm8Fbv9rjc6zWX7MXmgk5HXRwdRxVo39fGnVpcVNwqfHUm8e55RKYdLzGk4WAyza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rU6gMjTQpme8k9iYHdZ5twb597J1JXZVrXDFab8NjBHrE5hjw8Lgx3j18Ueoq4DTzJske5CLngbygkqSw4AygYw",
  "key1": "81aw58U8c2728LJAyimG6wpoD3KkzAVwPbtzSk4uZVAxkmv8pmAPzsBAn4YM7fGcAXMcjxY6vujqdow3wNP5PjN",
  "key2": "4Z1HLZvGBJtv2KhdAStZ8kAmbjBAYrMG5NsiAYSvFkacgppz4hCpLL1m1Rzaxh36bvzZgKUNzp8p5jrEMNrLRWbk",
  "key3": "4MyHn7NTqi6Bap3xhwjykvbf4ArVb9MfcyDPyA3gUqBtoMwC3PnV1uNvvzGSfxHbmTVFRMZpKH5Xv26zurdpzDCZ",
  "key4": "5n9mCXdtJ1NyiZPA8fvEHP42rpUNiuAfdVz3vQDSCSJwjZpf19wQXtbEjRbneFb4yBHWsUS5pqEWu8H1XSVVkhbM",
  "key5": "2J3SUi6HnrqDtCRAPTHWQPPAmec4dhnoF7CEZvUimTo8SECzr1KMFVjvaJhmZaSAa9ypVBY6RRcBRE4uUv1rbL9U",
  "key6": "26C1kZeu9dyBe5NUebRLvVDzytf6RMykLqXCoRV8P412wzeDM395D1stvQpYoVcFMC9bmzxkpSwiD9iEjTrxEiLk",
  "key7": "2tBDXs4BAbwLAPg4S7AMcpBYWFJDR4dKhDbQMMVxX6gmz8eBHHyqYLtgKVyBRT3RinijbaDEoFCRueVXyzAbcAEs",
  "key8": "3LsCEpqnQJWaqHMoyDPd92eKj2gmzAbJgTEbueWuFrQpbm28tdzAXmKAJA8T3Xq28qpGu9RqqC25zGGymQs5NSyA",
  "key9": "4PtZ9Uo5g9s18oEGwYr97CjqWwuMKBgFC9Q8dk1sSVpr5qG2CPvbpqcm2qaT68hBa7RoF3w3RpX3xEfX8ffjnKMf",
  "key10": "5w5a9Si7Y8trg8Dbe8nTfVh9D5uB87uFVp2QkBEPCwcLMSv6XxB1G9tHc6DDRMZaFaLFf4LtsQfKgs83hZX5zn8s",
  "key11": "mxVJL9KHxctUKEoBNJiNGpJAJgRMYqvQEx5QkqKuYamoo5iayyPzBH7tzYbtau9aeVCvkGEUS17P6yaqnUVik6v",
  "key12": "35uQ7WCCLvYCCpNCtDwW1zTkdooYYiuQf9C7Mhq6pcdokj4uGDfP2vUukhEAns38qTb6sRihe8JbKzemo2p2Tdq9",
  "key13": "3qsQ1R1NdeD4cHJjPmT3WAzL1baBnskSxK3mBZXTb5WWTVmCTiiLPDBL5QbSA6yTFiwBH7eXy4EDDLpt1XoVpQ8d",
  "key14": "2M5qHzxPRnxpMK2hXbkzRt7YsFM4CEyumMdsxRLu9Dm5vtGf29xW9UH3qdFZ2JheEwPbqVH1SvbRBad4HACbyX19",
  "key15": "4j5eUY4aCMFgHPYHLLU3skjaLrhbEFEDtd3u9gu6qRUyBgn11wJmwdt8LtdzG8F9gQof9v3ggHEwGsBEqs96hcB4",
  "key16": "Vf1GNXrtCNA2kLmfZsURxio5RFbBcGFeNu7wXEtffPih1vfmhuShD56ngoEiB3E6T3ombAu9v6121sewxpoQzB5",
  "key17": "5Z8XvPQnRZJkbLLHRUDwpnkrrkMJM7oCCGQBuY5wDdtjFUvdm9qMMaZCj9gNCs6ArsP5dYa25iD9oEv7NRNGcQRZ",
  "key18": "4LkFrVJr6y6gFUbWqnSksuuCfhGHFNvW1r5bERYAeDboAeo9VSuvLciRjKkBKt8gtzFqgTrMskmjeHB9rwUnYkxi",
  "key19": "3vTyXujKkyy8x8qRSxQQ5uyEswD9ECjYyTaFZ9rPfEQ96hu1SiqaNSSfzw83pJWbg1i2DhBo6b9vcVYspbMoRBdc",
  "key20": "3pDqZoLCxMCmqmm7z7CLrf3D6Meg1cpvkCNm1oq77qJjLPenaMtyVEFvAD5HYKAoKRHyJWymwUv2cvojeyUbGA1W",
  "key21": "dMbuWjey2ipcfUHeiubTUozYv7Rq6E3aEoVwzdyE6VqYGTfAaaXCG8kaQf9ae2BooVhKkQbCf2yyvu2f96woHPD",
  "key22": "cF3h4b3ro8Xkjp5GWkutx1aC1neSEiGs8FKQbjarKFN3SzSiGj83cnU1gxiZBQjV271iv9UidZ97CKeQf7wQhCo",
  "key23": "5V8it5V2btmfsbjJ95tGuShxZZfZubgbNgwJ2nb1FWNYKx6qsJYVJzKVswoQtBmh6B6mNWTYB5Ga2uyEdAvsUWUt",
  "key24": "4zNjMSP1qhPdC1B7VVvnUDrB5SDbEj7fBFdBshDWaadZRMZTSkbSJJNubokDsWMR7w3ZLgHvxNYoZBEyLhgknefY",
  "key25": "36Ku5e4qNVQ7tiZ9zg9zqFSdUu5Eu5E6yq4F691SC8VkW49wYZcgpk8chCE7hiSR5sw6kvHxQ2n2vNoEUBoLTMFC",
  "key26": "4AxmDEKAsEcfQrCDywiGEzT7dMFwbcK2oyYdfv4prjVMAQfn1JkisowyQvUTfMJ4bxBBcJHzm5cMWzCGs4JTeVC5",
  "key27": "3ADhFt1AARJmDRjNG8asr882CWT1QCiiaPDiCimNRBDry4QhzX7SAVLBiWaFW1A5HpxM81L6FVPpe2eX6ZRrDiG8",
  "key28": "5fZZfGiwzsX6HuUWsvHhKcwhmVt2MuS9pZv5PPqfh4aHpwPSQsNJPiuVh7wG4Z3hrzp7pN4SGJzJwQLEp4EXmxTp",
  "key29": "5c5FibYXnDyTSn38SgBUFkiX2xZYv2R6uytVifh5VjNz1YWni3Xb779JmG9e8umGWtjpMC6bXPzVJYyHQKJo7EjF",
  "key30": "54nZ2Bnt3sb8P7f8WyMQ23QBM7b1v1eRJmtnnNZjrvo4x3nJdikr7Dyup6aBWAFsYhRDqsFrR6FGgioUb2pzAwJt",
  "key31": "ejmZwzh62TTdZaZai4Zsd1DYJ9REzRvxduG3Ne3qa3wvmUKevkZZLaeUw6C7ieYEA1yPsNg8y6sfXRmuNeHuv8a",
  "key32": "3oQEKQkefxF7BApevnhhp9R5ocP1tvbEodSn6hDqJGjZRnUSfHopMF9tLpfotvYDVM1ymX4Tw6NKJoQexS6y8pcs",
  "key33": "4oisNQ3hMRTA4b6hdskgQVZV29T22WFgqxpaCDbYQrC7CBJ3H8VpDKGWvb3zM2YnMtSGDsW9UZvZVMmcJq4t9wQb",
  "key34": "5TByeSzRaZ2bAJ9bGB3NbpwzYBGehPZTMgCseNgpvz5PcKT7ZWPftMTwastCEPfda3SXzqTkQJ7WeUEJcj7XWNtJ",
  "key35": "4rkMsfZHeY6S3nj6SKZ1aAB34woKkrzfUCEkjRBA5FTTmcjcWSDzrCL1uRRkjgvTj3LmNxk6CKdV4VXUhV36KUhY",
  "key36": "4Ac86Gwwahnbk2n7kJp3oeXdosMA3xoczj8Yw7D6tNJmfnUgwwmJ8Fe5MWfQwXWXFNKMsXXjRn6HAJ3sxLeaS2Vq",
  "key37": "5cFJ2TqWUBkEqKgcx5xoE3Jjs5M3x2tZwco466nzYmtHrKMHGXnpNjDHHn4SnKkmzmhdtVDL3H7XCUPniRBV35pj",
  "key38": "KhivU3EDs3ZMqBCTY51P4xakYUzAXB6LDpk29UWJmcfZAr9vTrMtxA6W7bHKUcoZh9RQ7P3izv99rLwoh8oyE6Z",
  "key39": "2u18ESzKtw6qaTRXXiUt4PHBiBL9UgofQjW5qKJuLXk3PgbUqU1PZmcwLUSxuxK22zfZ157BBJHPfHgniD9REvHs",
  "key40": "4Afr1FpLhCymWGzDHg6z1h9mwKt3Ktdt7mHsk1mRMr6rXX7WRUvxFCigSGsX9SN6j6hBFAuH4YeN2wM9qgrwKg2b",
  "key41": "vS2MaNL6QH8FgNSKbjzSs5jwU9n4Dsc5coVXaw8fXyK3mVZGfWHnBfSNbskuhGU16A392ZMRtv3MCVHpzRsjKsL",
  "key42": "5dJHLotqx419mSDBPtpVkGfAssdmnJnPPhhAbafREg3sdJjMNZ8XpdHkeTQAmhNFu9gX9vRwmiiPrAMBijTHWVja",
  "key43": "3wm1qQxU1bqAdACgdVgq533tUUe422AKVkNSt86TCG2yRbTCjasvgtGxW7EXYC1w7JBLjJsezknFzBERWGU2gMWv",
  "key44": "3ZuT2VVze7E85cv7xBPNcm5n5cdR8vYPG4V3aWzddvYCHRShWDzk2JiHMRzkeBjS86drQ8hGwr13Q5riar9FDcZD",
  "key45": "4UUSeJnKjkqa4PuLKDApp2HKCNsnqQAPqP6ccqL5x52RQ2sya9TGmtzEfvWTUWhp6BNkh15qgGyqtiYJa4r38RuA",
  "key46": "KsF7Yfgu7wKaQS4NoqSFTyzD9AbNEvYGo3wh3LdHYPYjEZGPSMQ7m6PAwaBFW6xp6Q1UxAee1S33nnszhQqhBLD",
  "key47": "31TmhXXZvSwQic2AmZVCAbzertjDFkWpmJfU9VpqVxfv5aM3eqNcoJdnsEXjre12qmeeXUawCWnYKzt2MNWT5CZ7"
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
