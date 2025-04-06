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
    "2Rgms3HZ1J1ZHHNspogjxpmTFxh6nppi8MNMfcK2EiMKTQ6FRoJxb6XCnJEtYGpBb9SThYcMFXTgmrPNUasKqcHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55CnXaVQa89qfFjbEpSnj5yjxEvUS9dUMvgw3E4eyEh2zCG8kkvDX3CXA9dZJF61hBbtyF4n1NAzzoPdphtwcFt9",
  "key1": "3EZxrSYJyiqaQgXxodiJsCPjnUYjG4JESEzyUZSRUbr9ADjkGX6kYiaMuBJqvcCGEj5UoFak9CTqHbY2SeVH3pn7",
  "key2": "67KUXHVpDr1uCvHFqCWDhUdGNhhGV2hpgkGs3FAVTRVrhvPmgTv9v82VLaB85McX5iPcSrTQZ2ntj94pUz93mjEB",
  "key3": "4Nvon4UcLuDxULVPjsVngqtxg3eaS5aNXprQNsEsiomNQ87FYUTdejFME5CuBt3i1BghNiZR1ZrCpdiWCTX7UvjF",
  "key4": "iC8k2NY987sAWLiNHhQb6XpgzUY7eR59cTQc2gJbyeonWWb6BqzoYGTij2xCBNQe9EmK2wwY9mynV3rs7BYyKkT",
  "key5": "4bL2r4tBbGXE2yUsrYnZHo3raXER1BHAcnCgr5AasE2EHh4kWQ8B26reptEA1FkxgCQJUpPMXqJRZmfkERa4cfqQ",
  "key6": "51ufTQzn5RFBGt4VSHbpgF6K8fS5LRn7oTnFUtZe2xx4NxUZRj7Ktuhp3nZgCs1AGQQzkv4fNuxxFSMX1sYRphrN",
  "key7": "2QirqtMkQwSVgWhzfxpvLaBaTr4bhxqCqXxvTR686w2LrGHQC8asL4ttkuPyfFh2qpN9A7VWYJtvt72gNi413FEn",
  "key8": "3m7BpBGfsyRxgdFtnrDWh43MN97NsoEAfybHioR9onccgWpN9xJm5EU3G4XkKRwgVhGavj4xiCSXrQi76S6hAXFC",
  "key9": "57aQvKhZvgFLBn4GYNQusFqBFPNj3TvPEVPJ7ekTg6dJFfFhPsBRZwPyzRjhDfPQ3smqj7j9FFvYZaLFEyQ4BXdR",
  "key10": "3WMpUFR8jaTDTYpPoqJKcBgVMdgsECzRDkiM2aLH4kQ21YudxgeGhNwSN7TWB3fFbucUPVtgfbUvcMqHEQtGPr8P",
  "key11": "3ADfSZQfEr9mhQNzbYjhmboHQYBnwJhSSUk6qxWGMFRbmVnt1TzDfjQLDE17Cx3fiBub784zNEM7ZzHfMRa1S5mE",
  "key12": "4Fewqb8iiQZuEt1YytEV91hhKMY6DcobRNR1Tn597Aaas8gF28REweRQ3RqaaF2JYVgDqU2xNu7CizauXJSD7MGv",
  "key13": "4UD54QzCVuywspaTPuGtPWktJSfwZcedgJwzqNV8kwwbvQ6ECrxUM2vLq872wvgsXN2JS2wCfcUDNXFigmRXFKcg",
  "key14": "2dQxBaAJoR8bhfgNrHjJX1uWDKgmghndbMtEh4qBVqTW8sBErEvdTw1DPMETjUafDiypUCg34PgWvsZaHKxoZbEk",
  "key15": "4vXMkLdEEAU6aYqJ4gscJkTKBNLxDoMVhPp6jVvuN4mx9fmJUGHeVU25vVgmXJgEjYkFPHCNVhxMza15iP7ZpfBw",
  "key16": "2DpNsnf5MpUy5rDXSCgVpTysihxA89Rk1vmgq8pUb9B2e546YtcHuuphaGzTvAxZiU9CRYmhDZpKRc9fL98EVuyB",
  "key17": "4s9B7gzYjSBqeBbVFh43RhbHdqCUfi4QTJb4ERzhL2X8RYAcThZG2Ncx9btbdUisTo9rTgKedF5bEGZ298tK5ymC",
  "key18": "29kHqTGtq2LXHEt6FhBeeFTrNZhxuhgbmMHCQsamzqt3qf3CLJKGGfD4DrvDmzcuNSKuyQEjrYPiZskumzbY4j6y",
  "key19": "5HeWjf3JXLFbaAoQiTcckNqjrRsAkRFEx5bfUU7Ei6BKDvWWTMb9NVVLDNjDu1PDoMKCTVPhemUvNtzipGLhdRtw",
  "key20": "2rH7zjpcm172HF8qAaMA11cxYpE5gcwoFZ4BLrPvkmSoS9Lx7h7X1QGGxgESRCr8mk16DZ2UaQ6YBuUuBJDKERqS",
  "key21": "4PoQskyVPcTWprR9TsDQajFq6TeRwAeauLmguSRNTf37rTne99bQkmay9AxupPuPxurQTCkHSuLfV3W9dFguKeMq",
  "key22": "4ZexxDe8q3vXKpQ8pKh7DaeHQ8Sh99FRmJvssCiY5mgF35urxPqMVRgzd6wi6cpQ7BVPKBGzYBRAE3BJDGVoqW8G",
  "key23": "EAMCDBfBGSkkvxUG9NCyk5fA7G6sMhrip3LXsQaXaVgDitQFdzynVVsa5kPeYAERNHug2CzKMk1aVZKcVGZ9ZYG",
  "key24": "3x64buGYE9G6EE7yPDKvM2GoZv3dGYGihTChbyy8mXnqGqyxCPhvqbaWpjXfTwT1PVd4AAWrN8o798WKzHbgsWuN",
  "key25": "TW3mmUxbqhKkxNgRoDeDFipB57MXtmEhTgCo4YKUeiuAR5HfWNmWj13RLWsWS6zBp5pRrq8kruzRuhdihTrH1Uk",
  "key26": "5QBvx1znFQqKs2BjauZZdvK6PnYsPz41sNJbbxwmic6j67f8ARYefNstUQaJT8WNu8tmMqvAEuNuWTSqjFFJEpLn",
  "key27": "3sbFF8qCgpgncW1JKkZtp5kacGDugesDaZzX4yRTaUTUfEa6ge8BexkfiPnMu5RZy75MhFg7kQn6nyyYvxQzr5Pi"
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
