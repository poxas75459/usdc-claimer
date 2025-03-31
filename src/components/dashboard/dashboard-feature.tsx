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
    "3cchJwuPePoQAMsejEfxy1yUbptC1gRB3P3qvezwfSazWe5zkuRf8EhfJsRGCJa2x8zumB5rC3FugvX2S64TJ5od"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wpGvJ4oqHbmaVKyXWdUt8kJhFvCMNYYcUUBR7eTceXJ6EJttT7TXPPzNdsFA8yJVErmjcNuqSc7YC8feenFyX7c",
  "key1": "2DhPUbaCb7ZR1m4WGcdF2kpio3zYUjih5VG4PWNSRa9fQLsvAoxp31p9Y6FovGKUgv483hynGAT1gZrNErhfnKW9",
  "key2": "3pixuaCa3djDVwXrK5bMGMLC9CtamX5tUHD7jT9QZe2eTg7d2cFQDcU2XMLeS2evxvb6f3czyAv4HTAP2jqAW7sj",
  "key3": "3Fa3b168oM1QRtZVJVtBABAUuWwJTSAatLMBZsnUWLAhKeefJSka6WDuzKBJ6AaVQwiF1LWBVppaAupVCdzTfiK6",
  "key4": "4APVoWD4DXoSqJWb8EagH39SHi37F1ng58v6daQr13XCKnHEaNmna5ahrUFNgzP7fECPr239oineiAsp9MWoV6aN",
  "key5": "3mjc4ct8VXGpnUTNmPYNFh3uWn6BCmModymrEBFy9cLnP7wrVtodrzwrEbTixtESk4FLkYCVqgKGM4VFLD3uMPdG",
  "key6": "3aPbP77m5GKfDBKWwYbvF4ZAeqCriRuHpHrNQ4GY1w82g1iCJp99zN48abS9E76sT396kXPrYbw1viWb1DdWAsWV",
  "key7": "3s4pPwHd2Kv57DRksC65u81Aq7MFxLM4DXTRenKA92SSfGPvBCHiATiJYhJrEjn3Vp7NZ3eEc3hczaL5S12qDik2",
  "key8": "347QuZWmirCKWbyLphkA5KjbZCKFyoext4fgcQxPBpk4RZpX7XW7pkV3As6ikU1R7Xnsz5fQA4Yr1dnmgtgomLNU",
  "key9": "5e8M46cNcsbQ95CRved23ErQpbYRdG8bVgcJrSW3h2t4gh1ZVH6ybmEAHLt3iayyRqGXK1AktbpW4Nd95vMaqSCs",
  "key10": "5NCZF3t1NvfyQjqyLQse23MrXCNSP6xRgybafiaWCmgvj6pauTwQ3QUfTUaeFtp8jV2tkyvTUHX8tQQvaGC2D3eR",
  "key11": "4Z1vbURLbm7994rL2pycPLHhZPvu8v8DDbBMFfjcKzSfeWrovHHGXo1S7hjYCzHU8kHdnuEz5CE6LR8cL5d1xScJ",
  "key12": "3bh7Er8mbizQKQDxx7Ae1tY2FEMdpQWFq9sQjRLUsphfpcqhs5YZBSjbk26hnBrry6Wb2VLv3FBpnuguqwcVYyxf",
  "key13": "2fK1muNRstnZEnDyPgdYRubzHrHAP3gsL1ZS5HwLsBbQVxxiVcg9R91XoeXX24ARVowUJZR9ncZiabFvn9fi8V3z",
  "key14": "63ha7TKmxXobZgFVuEKvE6qyagyveCzShQfu57jxekLkJuY2K6RcE7HnwHyHjiXpn24sTRW2XomtgjJit6hvUdpZ",
  "key15": "3L1Kk9WZ4VuqnFwf7SGTLQ1Z2f79VirrUkCMnWeitcEHB1BpBkod5NsG4xcMpNQiXdV6j57Z6uwKuDgKBqa8zdCU",
  "key16": "2eHk5CqvUCcvBhhqUzAz2ywgJGmZyUyJsNHhWKyGXKBdS6uoVvVeez84Fo3wVjLyNtTYcJQa9teUomraKd71fgpL",
  "key17": "5w2Qwcsr38nqbr3L3h6ZPch1vf3FWkD6cbGZPrrLwW8LcYwLhYY6vb2dVXUA3VD8vdUuFFo5gNPdvu6EqS3FNBJa",
  "key18": "hHggm11o8seVQh4P8chTp3ELTVS5yAZNf39XLGL6ScMR3TduccfBzvzSDAkjduM8xdCa3JJ8y5EYvGnCR22jmWR",
  "key19": "5tBxg3XBycu7HTSZ4bCuTa9KyHuGmXHjTucCPAu8AtSSb93uZs68AQ5VL3DdbStQzqdK2dqr6Lsnbor5jP1Uskm3",
  "key20": "5orW2F3enQh5Ny9bwFEots7vhYMsEW2Lsn8EuuSioUA2hn4x7dK51FmuWhNk6HtiYp5GARrEFTKte3bcuVfEsLuV",
  "key21": "4b13zpC3ENMxtdA5SYcjAqeuMNpmxoXBCefNpAEb4JCNyd1vd7x7m1o9jjuy4CtndyMrAGRMbDLpdLd5KdRqFCBz",
  "key22": "4DxbYLAbiFMz9ziUEnWct5UwTmPTDcWh25AcgpDBscvhAguKCcrathZZW4TLcSv8KE5EndDo69WKxhovDKXMwURb",
  "key23": "5bF1pK98iKLvvro7STgoB3btMPZWotN6ho8hf9RJdrJaZ4V4eHHNdVENK2nptXg8v5YnY1YSxPR7R78cCh1Reznr",
  "key24": "4xLvJQXpsbXetK1zpEEirygUrsptGNJeeZ29ME4STvDjNfveveSmTFrrtxHfnPaYYHvfLdrRCw7DpxqqDYUCaQiJ",
  "key25": "5dmiyMkKataSpNcbrPR6RwKthhqo9UAjXXtWzZaNviWQEpuweaTF1oBV3hk1YsNAdTFew6AG5GmXYnpVJPKDxFTj",
  "key26": "Gy7QNmXbbxkfm8sPYXXubGb9Y8vepcPwuBS3ymXgCfWZ1zWjLkv8jPeJTQF7S8SBnSDgE1zUpZ4FrmMo1BP1JiX",
  "key27": "4nvb9Grtuez5HhUxtHz7LiPD7GRAHCwcPcc4ikTcJNwi414YgdC5gNNfuM33nE3Wydrn2xtCc1sWKh1eTqxv484A"
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
