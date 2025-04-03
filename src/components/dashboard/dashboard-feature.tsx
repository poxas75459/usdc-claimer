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
    "5FNqS4TfWUTXhqkGyWCvBHvaLFYjZBNX62yYqJgCVCHw69cxHP3MEsDKrwAmse83tiUiWF4pSk5RUzETrqRTpoaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KE6Jqk5TgLkNmBYsipAZgMamBPvwUN2JbHeopz7TrPKTikjhKG2v3dmzBmrmpPnZeJfCf8H18QM8cvyQS6eX1cM",
  "key1": "2MQaxDarMNcQ9V8AyNAK5jgr7ivq828miJJ1DtLfKik1ng5UyghgZUNkXxdyWkdxjT6yzV4FcS9UGkBjrirjt8iM",
  "key2": "45P9AqQj2ydbfmqRcd8QZrNwnCpk1BhVG9R5w7VLP8s68uTTnquLuSM7C4SXt5Vgycov94dNED2NVJXE6vRHDcvT",
  "key3": "2fi6ey6tRqrX7RyYHCTcji2D44s45xMLxpCxvEnxbEG87hWvHj4tqkh1hXx1o6tBLUQUMQvi8weEJmtCxKh6eWom",
  "key4": "3Hcfeo3KXwav6hpQrUeNbFnk5Nzpm9JYcUDMu4JotgzdKvQqjA4Xit2NAbroZwjGGy5fTDN3hfRT7uxPPwbht5Q8",
  "key5": "2Yn17hw6ko3R1Fx5gUoRRZKrqTZ3uvKhV4XBxutxZiruGSXzA9fPmf2cXFjMr6B37Y8X3hJKB1hzCBqiuVCjpmgc",
  "key6": "23X2skQqXeV82T61V9m7bjL1VfeWbBXxAKgiGib8ZAAbaQ6ow1zHMLc4o6hxHiufeKP1BtjRcjdCFMaz4NUzSs2v",
  "key7": "4G7aJr2Z3r2wxJa6FccyB2aw5uRCEXdo997kgbfJqKnG1mWPfmw1tCD2KgYZgxX9jFZenZ899YnZnhcfNyF9G1XN",
  "key8": "2bUk9s7Kgd3PsNg1JJKmyR22dFkRG3euHcUtL6QfTzJoMnrndTQMWe9DSED3WxrwQn8JWLE14aPe969iCGmY6CkB",
  "key9": "4GapTcPTFpGKxijNG616LWtivz1yJXsMVV6ExWD4XYikjq7DVcGdoGDiZwx1b6i72cdEMMijarnEZkHpN4EbMWW6",
  "key10": "4TspyZPaeKhHmUT1jJiig5s1r6i6HHoK9izLzBX3SG4vqa6t4kURbDRHbLCdGKg1gQQFLhhJMMzE7FYhxAieojag",
  "key11": "4fPSZ1HrTCRGFt2rt8BrL1o4MpznHuGwQfHvgwiDPxx6D7xgV1HDuMCFR8ZZYGcyXH8C4PtEYXhPnss3jw4nqZ5W",
  "key12": "2mUvYLyUYfNLwZgyDsFD9vt1qM263ZMgF2DuLXC4Moy7kN9X961HhWYgcydPuJU8QKui3aXLSLYa2ARcbXGC8Qom",
  "key13": "2MNoBGpovnpt4vjFVJ7sjiQyKzmk1ZFBwi3Asyi35wYZjLZR1GJZi3W8fCNvE2KxxpeEKPcztacn1dESqg2Y2Mkr",
  "key14": "kKksihFRqLAHQMhKctBJ6PngoNCv2k3oJyGGrbZN1hcGFpHbrQWrJQMb4qLqkgm5tTFZNtycAzERHzvqBcKhKqY",
  "key15": "shJket4Ww6ig2BFv3Ft3XSSmVsNuPB56ftiTmj7cwwfzsJxjr4Qv75J9NVXNS1NdyrHL97qnfRJxDLQzgzfFio6",
  "key16": "Xu7MiRRRHDahvtfCUgrrcahc5Fpe1WH4DN7kkGtsweajfiTSP2h5ANJxNTZuyEPHUL8WxKSPeiA4uY8htR477As",
  "key17": "3qSunbMGvpMFxb8YorbJxt93ynn6WjX141MTkP5AycQyAEB12qm3CvXFfabGYBCi5KHa3YUofjzFPgKrPMKpuWo9",
  "key18": "3MHd4Am2uAVuyHfy2jt86y2iHunyfd1MhFgQrBsQVfZHCdX8aDqjY97JAFR16uXVBoQJPgRQHyqXziLCmMwL41cK",
  "key19": "4LhpHa8VoxQt2b7fxtmK4ENttgdTuf2rUgQySaSUJqR5z3UeWwmUZQSjbc55oUoDL6twVriy6FNqrQfpYPum9orz",
  "key20": "4pCySY5FKaSLggzVw7t4GUabDZMJ92ZyyCFhG3D23adNxD1WdY1UzRuq58zcufKX6c8zqshiHpiEK7i5yV8RW4zK",
  "key21": "j9F7N1aJrX2zpHaJZtkcMXcMXcSdEPHNWCCh3NZRvWParGZTvuCYkTZ3Xp1e3za4yJ7g9m2GuQcr7UWXDG7Hvww",
  "key22": "4f9okXuPydf3PzZSej55W3KGp9eHgytQgo9zMN2Ny7diP4jpXJgPSu4zTgwoozVb2SJfMqVPZ9hxdfuFm3L2ucot",
  "key23": "8uiCsusZfUMBwsTxLo4EoWe6hMXmbH273FHaqfQhwRu1TqWY6y6pB5pCkzAPQi2QC9inhJgGCQRwSvdbRDgu71f",
  "key24": "3UUHUsaMK2yKzxjMVDnMVAzESGNEkXxK4XU8wZyZ3TidTyMJKmA5fceso69jbfjycyio45DJn4UprFpFoNJNBqUm",
  "key25": "6ps8mTrnbSnw4MU6fqhPfUzaA4wtx2KGzjemYRE9myy6Czbd9iyvA62jHb6Ytkftfx8Ut1XA3Kd9q55ua6g8ugo",
  "key26": "4vjncAV8P9GtTS5jsxJmduRZTSxVC4UnE9YrgFzNPXqNnnMGaE7mFpCeziPHRVHmGudYVytNPqdPwrCohfSKcTxT",
  "key27": "THdXU3Fwj55AV97ViSxypMW1ZJduivKGXyTr1HneAXmQv9z4GTXH65AxUK4g7Tyby9t9UgG1TVbF6gvtMMq1dEJ",
  "key28": "4WYJZ9YBHQTq9sdsLaPCZJWTxQEPRVZEnyWXCr2Z8iSYe89xRUUc5NaYjAEk2AE8sx2ajBYPb77onWAgDkdh5Uw8",
  "key29": "5SVLcugzV6XEWiNLLqdjeU98HJYXkcEnLZvMT63NbaoRrRLExD2Vdx6NR495JGGgLuWg2z9GH97Xkuh6cva9zRaa",
  "key30": "3gGjKK5QPG6k2QE6Xb6cS7pmAxS1TzADkhvgubPk71MVotqRLRfknUt5QJjnexLDiojF3uWumpj6QmFFgTbLETBV",
  "key31": "5yvXbDUhmbNP2BAezDp67zFKfMKWtKk4oAphcjgqvAozqa97G2K4Ge6KKVpd1CgjHZxMtvC65aechPQRV3ddELQL",
  "key32": "3dVXRiqShydPooEA3Ds1nHKEJpmMG8fSfuQtULVLCNFAs4rDtCorU95vwtseErTcQtMekB38DN59SVGnwVCZAQYV",
  "key33": "2cjrHj5P3EFhMPfBzkBsax5pYp626RN9EzoeCRk4XMd6ijkhAFpvjpJ9xhsM2F5NVaT4DrA9bQj9FhkC28dQ9SSD"
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
