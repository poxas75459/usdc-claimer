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
    "cTfNE5mfw6LayR2WtkBVLnqke64YUfY5Qe4WDvGFzgr4UiYVvJfwaWkBLkwTR7UoLoNeYdLBnJ1fzMkzSFDJPMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wqVZNciwae9ip7DU232pReNjDi6ssiXLEAVXhmtMaEeNjmfAr66pbgpiAdJo1xWdDqrJ843Vr3Pm82VodzV8auB",
  "key1": "rENdvrHDFdbjR946yBC3EirFaWEiwN1f7u8nYUC3583vbrKwJd7b392qZe2TYNFFWCjKecjxZu8sjqkoK61bCxf",
  "key2": "66mwZp11BvLqAJXnhHCUBqNTNv6NLr8fZDub1EaMMvaKACvSEz2JhHLqm2wAUqJAoTxnxbTPtPk7xYqB4XX4REmE",
  "key3": "v3cJGutB5XTGytyLqCyj9QJZDNFYkQUiv5HFQZMG9pEA1HsrpcvwSj325x11U4upb5vG6YnytpyLMmJ7wr4yn58",
  "key4": "2ud5ibKAzfsr4UJcNgkX9TrsaekZFCB1rkeX5oai2zZS2Ku6GmZpCwsoEziwPqnYFVNqgSd4QhjBopCNWMz2pu7Y",
  "key5": "NcGJqQXWD1CVBgueFskizh6NqBxz8EWDcSW65nwDtTdRdyh8n8NR6mDLE1ABWXfDaG8itXJBtijgrtrU5269nFT",
  "key6": "265fuLgHCWumkyi85pW2TzYGG6XxoJm49VzEUv4m1gD85RKjChMBXn4mnH7JrBuBV1JD7zRs6StDf84HDi7NiLgg",
  "key7": "ufnTQv5MGRFAHhEVxxqY5PKtGMJj7R4awRgw4yzWFamdrkJAeg1F7zZFbTdoTKfYeGjdC4YFc9fiffSBHgWXDKH",
  "key8": "3WR3xV6ccrnoGpubvMUh6vv7d2GGsz5hcjxD6ie9Cr5zXToqB4s8MejM9DaGGeGPVXt9UtXtTFwYXpe3f9yJTnRq",
  "key9": "2iBJnREQPQN1P7ArRngjZsCwdvJeaVGPNbd18JpeYZPMgTFWUn8yMJvkjKLzGVsQab7Caiho5NCnMRJixX6ZLy5n",
  "key10": "KEFr5XNXvK278BcHRWaKVsxSA2eLSBXCANN1AEnzNPhfhZEGGpZqp1hANvRVUEfBPd4wVKG67n5G4rSu8AZDTPt",
  "key11": "2b9pXKfXRTS2sYVTcAMrkEHpKxMZL9PfJeSaDs4jU7x34LS17sTuZyF7ySzEcvWhSWjssk8bkePWSVmk88FYJWiG",
  "key12": "3QyzpXhi3keETijiLveFBwxutJyxWBFrBtxQHi3hy2Um79VX9RuS4C3wsp81VLfFJN2jD75Cz8nCtAnJMgiijWqk",
  "key13": "6PFvzcpVibXu3ozPEWNM6x2Y2cQez3RBDhgYz9Jr8cy42qsFHVx352xHtJdxEFCXJezdNDA9VVKQFpxtJVopXob",
  "key14": "2VX7bxSqgNeTnAa9aoX1suDpgYK5S4CZf74qUvnKTweGjCsEJsB5vpDyUAiYZtUNcmAwQ9imBq6fNjKUCAErkhGK",
  "key15": "AMHjLZjkFyWRZEPvcT8Vuj1LXMejTnf3sAEdKukCQmvTZczQLNcnxcrB6Qq1wf2tfyDUQU2WfvgVJ8M7tZ28TxW",
  "key16": "319aWh1vTc4Jur6T72KR4DaGK5YxaJsA9ZfMPrf2GMdJLMb2NE98caqA1cHJqCobhzud2de5fVRJr595A8mMsMrD",
  "key17": "635dfYerEETpNhym2rB4ZeJ6EtMfqGGPMrxbZQMYZEn1MWey6PP1nk4uia25MYUJjWaJsfWsrR3G8uWueJeBGQbG",
  "key18": "M4QfwRFLMENbJ7FtKq7dUk8rys42ZCbEANvpEz7jANvepRSkPXS7e9ieRkiU3NmSEzfdfowYPZxbQGiUnReqk2P",
  "key19": "2qDQZeHfMRcdAf3Nz92aPh1S1CuAQZS18vjEgEszmjHVD6naLV8qtxsRzr3BMQck1YGUTqK35hpLBM1qywVEPEzg",
  "key20": "5gszirHtjWWQ5mmn1DazfJScHPgxUwZqPAT9R5pky6kwKx4gPrFJoMcXyY2XDiVQ4yhe7qJFmJRDXG9bPgmeYAMc",
  "key21": "59nTuTismgWcbp5rFRMBL8RaZsgHPNsyb5EtkWvMTUU4hB3YjWy3fGijTX3jsGLazxJHLxzu1eGcZSbF7kBPYSbt",
  "key22": "5TnpajgPTNcEpixkQCWqHNwyvH4xXwXQ5aNuiBXGXYtZtfG5rVALVDLasSUoEbSZ4UiDTeaNj7MhVSSE8sTTVPpq",
  "key23": "ziNGLKhj3AT44vCsa1BkkYKoc4TpYwG5saTCCqgSsrDG2Qa1aVA23WJJ5z9vpkx95xTvusdVED9BmpZe4ye6KwN",
  "key24": "2kb731PsGzd9zJzSJ2MkmGXyB3V3d3na8Ega3psVTXjtULtLJEJEtajsQzJopMEiatYywWJjoreSYqcxAcrHHQPQ",
  "key25": "2fqQ8JQiX86wJNUz3Em3Y3WBz6FbrTr1QgwTdBYn8sx1sBK7AHCpdGApEe68S8reWGYY3kxdQV9n4dDxVNVGYj8r",
  "key26": "66C3bq8LDsrov92rM24RXP4KY3VzBw9jFKc9MzPe6febTLNryefatbuBdizZGgpSmVNRBJnzAp3a3Uy8NCRGcQEc",
  "key27": "2aagnuz7pY9hDZGHXFNMJWmNAA14P3HPdvnenmkGRDW7v6ReimnymLTmvwGVBZb5ayzdo4nRvMikhNQHs4kX6ztn",
  "key28": "23pps26fNs2bHYV5etx4BGNXNScfwQQ4qJrAms7YVc667U8m7wo1jiyBuwrAGrfS4TTFNpuPgM3TGeSBu1PW6kiv",
  "key29": "zoa4HyG3j5k9H4NhHVdZC77S2yT1GVXpSVwbTiNAFgFR6rbMviE9iNjGmqYZwSjmd1q9EymDZTLVaNCWbiV7Dd8",
  "key30": "4NhUhuGYn8ndzkd1hNj6pe2PUKWhfUzs43fEnBGpnRhi86SUq5xso5bjNnAnhXureGJzKQdE6UkVihsCy39GmFY9",
  "key31": "3wjhQnWzmVS6dLQHVKCVp6XSSCBtMtLFbYRENyAdsYNVL1wU8WzL7ub8WscYUzY5hyNqRf4Ue7xVfSYHroMfosQ8",
  "key32": "2dnuqeuiNskK5dAPymNuyT2NTZP7X3TaV54cfR1YB9NuWCmbqpgzDg9ozzyMqUxLbpDPtZ4w7yohCyWdbWzun5hc",
  "key33": "2yVhstVvZ4d1JrnK1pyZEkxkpy8UTUiTybkVrttTKCmveF69znCWRLzymsUTsdqmuF3ytkXz2URGVPe8VxcAg911",
  "key34": "NrV2q54tGZhJnXf2bK1zhFDGzrGubK6kMEkMfbTzUY5JHivJxaKhtGB7sGqB4qVLYQR9cULAoEpCgL2VHxDEkEF",
  "key35": "J38ektCqJEhgM6dvdpGHAYVbEQdV87TGwHbBusdKyMJhKtSohQREpwJ5cChKCRrA8ntZkHLa5i7fZH2jFgMgmXd",
  "key36": "5MKLyktred4JrU7sUtDZAnFaKcduyEQMx7Upb5mpJd7MbuseNEekRTVKgM899fMn85Wasr9Udxb1KT7UUXLpkPiB"
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
