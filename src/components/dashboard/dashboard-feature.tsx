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
    "wHDTns3fCVp4QkUDocep8yq4mW1KGu7kFaEQsEcC36Yov5EskPJtxRdg6RWw3sWRiLxz7Mfc9MEq97Ve45Pg2Ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kvLrQMwPCkMgaWYUWpnEghkdUL3fq9WbTfdA5GrCmhtS5UiiCET3DY6DPa6mfHQyQxsBScxo19QMNqcUfrLFkaQ",
  "key1": "4GKUkTcPaajT981q8xuFFw5X8ntBhqchRhXpZDCp2yoybNiV55dY2ev9RPBg489UhJsS6HZtSCNGc5mQghpvdjYc",
  "key2": "pGzK7Dw6uxYYfpMqM3GLePDkmTK3nhGQ4pZEJc1ZAxnYtUW9Roa7mjQXxuzSDA2yM9SSVLHiFTjd3z9NG1ZwrX4",
  "key3": "2wgZic5PQnuNzepuUV2XpD5xKo4c1iqc6ea85y9VSpbV2K1hFYERTSCa53bUiDbiJLMJSn5qcHC5v9mZSrYqsZn3",
  "key4": "4Ds7Gth7ud1kv9rz3TYvNk8aNmZhnwo9qoNwgvxhvFFADDLLUyjC7KJHJ1Sk6ybL1xyMiGP1KKeu4a324ktUok67",
  "key5": "32VAHs9Z7KCkHKGAQrR6VEKmfJbdYmuNUJGhZ5cavioB6mvJbKYjNNug8tKTHjav4L3TU8Wp8c2jMUjJuXP2U1tF",
  "key6": "2F5PCTVrjkozWn4a28KwzWshanymmStf9EErtTLknfvUy3hh2xXF6mPN8AJhrBA7otkWujcjymBrpNEBc8GCmm7f",
  "key7": "2pB7YW8gPTkD2RK8ePNbxkSC7fqA8Kehvc3mgNmpH6Dun1bcMmRYeTncmBcgHLTUozPRkdfcaBGePAa13qiKo8PW",
  "key8": "2DoZoLJLu1ntZ6dXVmnN5quD2e45rmRriJr6JxLSFULxq7EPCkfUg4u7bd5VwceLSEW6vUyHDBSFQAQsrU3Qh6fj",
  "key9": "56AJD6SNz1e3BFG2PLxu9XZDjJ1WDELc1oDXhZBbVhZzfuuJoBGW6FstcmJPrq1fDiz7QFCS5UnVKqgwxkEiw7nL",
  "key10": "c8EBR3XWF3gwcuAzLqUd7mujW6342zMmBwgVaHerGnbGpUoQNB1iJzwLmygbS3zScV6j2nwPsqub6nSXV3v8wPj",
  "key11": "4Bez6AG27mYH4mDTCTP8xLwBEQL37vY3dwnqNGdaDvVRbBfFHkRQPMsnNuVkoVijGtm1eMiZaTYLm4uhSzUi9nYB",
  "key12": "5LVv2kP6mjV42mMFVeAfejXUWVwpTYjkPm16BTFTLrR4tHyQz1UCZp8jLTDg3tqNkkrbj5rV1pdyDB215jkjcgzB",
  "key13": "3dcLMZbANdmxaBRDyfEzTubS9kZpdyfaEsUFhi5e8dneQg1Yox97EDTsEzwaGfc1g9UXa8yhtR6Uc8Zixn7U8mAm",
  "key14": "3S8uSswvgRngh47oTuthTevLsEPqb2trbyKMsYzwEfV38WfWCzZNieLyTFgm9XM4Aam6eNWK7bvPCpwvTCMhcq4",
  "key15": "3nayqdFwe489gA5hh9ojDh38ZAQjjsrWpfSLcMpx7BbG5JC3vCpXwRJespqs9Qusi91b8JZX7BTidZNEXPDs1PNN",
  "key16": "4d8EHnPXveqirTkzSvrRcbMkYwFiasZ6cVjssSXfLHwx6fqtGqR1C9WWF1yCnnXUxXsfiYgFLqQp1tVFqHzm1nAx",
  "key17": "5rP4twh4nsz7mGMh3yZz1tomytbYhAFs3qCAvcXkKzw7NpxM3bc72TJ8XyvGMHTLGwnCVfLP2DC5kQpKvK1bTNAi",
  "key18": "2yZQVtSajcSX28ZxcMApW3t5tGFUsrk6aFUbKWU2oEJfoT92uQn73QcX2pRBsqBZkBSEESkdhgizFtCgsgKJggbD",
  "key19": "5oDhM2P2FZjt91tWxhh5Ha2tMfqttP4BtSnsLfHYUSdmrn5SoB5Yp9QZYY437qvk2uLBmBCYtJV5wUAkTs2uKxhK",
  "key20": "489fjt29CGzqTWVLfivrLLd6LC47KYbSvK1REJfVGKcrgTLzKVWAwXCCKmP7aYZvLK7hemoWR5p4kLaNAowAQ8WC",
  "key21": "mtHWHDPd5ZpgNL9xVdAa8tbzvY4teD9KiQmukHzpsBHgLATpxKnFasXaCbSVZJ94KoCPnMccqYu2rVnQERJhBew",
  "key22": "2Ydtk1gE8QjK5L72LFnRyDVb6YStcsEbRxBamyGD8qNJh8P7yC4QFVi1fdEvwBLwALpL13zfi4xkB3JLCdAp2mrU",
  "key23": "5YXHa24mHZ6xQgH3Ca3TdR4Wz3LCM8fKLQZxyuxj4qnswJSK75Ab8SAGGPgmN58FeUXGhkwXViu5MvCiHQfeawF",
  "key24": "3WXMXjF1sNvgAGLKcbppTDqsck5DSk1DQcaqEXb3V7DitqmmJY46J1eki3xnLgzLzum38sip7dJ9Aynx6d6vY26Q",
  "key25": "2zRD9WFrwhNGEYhvFTcgZapobPeK6m8y1rSFuH3yhp32AMEKLsz9EqtjS8ZywxmyJUm298ZTvN18UvBwEPvqMqkt",
  "key26": "3FwBfGE9PA3yfNtZGKAvKu7FkiFKBjieFMTdYwCzSU1GEV76aiN2LFogSqiTgFmucyVwNErVdVaxFdHRWFXpDWuJ",
  "key27": "2FSnRBWQfkaff76ycfxTG1r9p4wHgu15oXjeahEwrT9UFfcTFAFvtu9QuNTzChxmeEHYDMmnmTkeU5AaYXmog4SL",
  "key28": "4iiNnn32FjxEV79KsrnqffRD8LmTbpWdB8m5TtPvAQcf875cqdsJ2vBCjCgTszqxhMWCHe4yPpkwgA9ZcjHHJMhC",
  "key29": "5Xi6HpQJYzL6eauJ4bvuWkVKYDSmssmToF8MQpGJELs46ZLgrKAdqn4eypNwSR7Y3mMKM726koqVcErn46EttrUr",
  "key30": "4ss12iYW6T63m2pDrzQk2FAMBeYXsPky9JsDhiSn4FRhKXVyHHSWbKiVEgHDuePsbJ2Zbt382TBVdvpkqmtshHWR",
  "key31": "3kzV3ZaRkrjezngaGBeB2m9voz1KaXcKj1rjCmnRSmDS3pru2q1PWm4aeJhSzMLEUEj8TEGoXy3ArTncULjipKK8"
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
