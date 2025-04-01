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
    "42rursvBbnw5qr8GJjKM5UGShBZrcEwVr4WUkKgu9Tk4NcttgwwbHCa4gAduSfSrQUEVHGNidye94udvdCAPXYsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DJeMtdBoB51j69jAQ4LhuJo6T1wDpqPfwBwhReKpJ1CzBfGHgKVg7R7ZcRg5NH4FPVsoLc8nwqLmbawd5NxCuCM",
  "key1": "3tY7mGXCuhh7teJV5t96H5jBxtfHoqZYA657e77TqmehvT5YXZRy5TVYuZD8WjmEtfzYKvDzB2sSsfqET5oCpqGH",
  "key2": "2NPGLy7e1r2fxkHD5KftggYnyM34Vyvo73S3xHy2vKBjTSvRF4vLfF2UNyALeExeKmiGfThgBxc3iRuAR4QAy681",
  "key3": "2tLDpVMV39yHjUpYFA7q96auGH4rQ1fyTEubK9Po5vwtYmLHfyRiS8Fbkruw9W4skkHbngC7MqXL7CvaC445bHxK",
  "key4": "4ax5A8hjMYq1ygJ163wMtN4wTuEQU2Jrx56nTKmW19VgJfxB7wv9UnzKU3ZwFZqQNuZJLXKif9VB1vRMDfsHRWz9",
  "key5": "2w5wLjXhpEcGf8hQ74LYXymvXi6UuPs3u5wc2SggJEgZLHoQ87juLAjqKwroVRuoCUmWB8zoeRwJiHJGwddeJgCr",
  "key6": "5ib2iQW3xZebrYU8NtSuqa6FP2atwUCkpMh332Zvta6sQZJkJSiH5u3kx2NyRQS74M1fDWNcomfShaPzQBz6LF5t",
  "key7": "66tjsNu1HdDnuKFUVZ1dhnRazaBgdi1M3xDfttosm3iyQEpYmCDWkKEtbCFbpGYXTU3jAQDMqQhWWGgv3BSE3Cxy",
  "key8": "2ET7XRN6upfHqyjnRVS9ZJK3DFs27KWKTamWqFm8SxtXwcTz8AQSpS1Zj64Cw2gHpY6sKXvSZstZKKxUDMdXRqYb",
  "key9": "5EDjH5YGxwpRtpuiVNhEqdzk9gvJdMSzPrja5NznpqZw8uUNTFnxMcp1htcPJP2ZHMqtZPpp7NNfkxhrXxMDdFq7",
  "key10": "ye5LAuUewZJqAGASLmFcEjmJut5UmWCGnxJbNfJRymfmxbN4DYn4HceA1mSLyZ99umwhGttxGGpeienNPu25DtF",
  "key11": "3G9ps1QqynZG3x4cPdcTgded5LFHG2piZBZqzzSP1GUSaVxCptYWA4PS2bJfJf17CRRvDv3cKFYqMie2zkiaEXkV",
  "key12": "64vop1JADQmrwzi2p7UqKYKj7P9DwAr11BrTMRNRaTPR8qW4bE4WrkWg7c8s8jdVST63RRYgZUck7ioPyKbuzEND",
  "key13": "3Tv9NRVzdatqPHUG8dUxVtgb6ZGEQ1XWchJqMrT7r6mqksS3GFL2mH8d32mTWHeCycgk4QeYCHUi3Uq15tMWwmcT",
  "key14": "2Gqxb1Q1MSosw8sqvPoJp3jv333FLmfxNdPL3dA7AzSJyqeuMLMtKBefpnZXn968y4MfpZdq1VHzpDsHUQHRhv4K",
  "key15": "2a5vo7cuRvqo9kGVkV2pnSuRvxd7xwPdEd9qnFSraZuMLUVEhdX3KQ4p2zDWdBvPDWNJHLPZEYYhKL17vm8dGaSA",
  "key16": "3Y2ndBFBUxch8b7AKu8zduYRihbkvyjFWob29JwLP6Kd3bRWA3DWkALm432oBBcwt5qPN8srxUVtGnTAovuV58FJ",
  "key17": "jsybnv7kAjTLdrSRYeBHXGXfhDD6ajXTQBzrpT68zfVP9cE5AXJpGN2Rjx3ZBFNbUUqA1TXT9bN5VBQsNpSAT9u",
  "key18": "5KNeP5a93EvVGmRykZ7e34N8yMUaVZD5vUSCxPaHa2VuR8UURvSEEXLueX2qBT3E4U9JgYLV9XCckBCuiRVRY1WE",
  "key19": "4JTmmAM1vhTmC7i31rLLyVafvLfvas1TBTEgj1UWppVUSgYfhx4E6X2yeEx2ZPGaU1Fzi3zb5TAWwdBYLGaaKnz6",
  "key20": "4QkpDU6UjAF3feoGB3uGKqgMqBFaEyiPLvqusb1TUedQFgcsZfHMDAe8GxZ3NbsMWfnVmg3bz8eoPArNyTBResE6",
  "key21": "31jGypaCH2Wye4MGTxisrmRvR8LjuEqwRkdBiE5ciANkhY4rVnLMSMzEHJBtxHEzhtngsrDHfZ7YoqQsdf3bzHBg",
  "key22": "469WGWaHAuF24ghmnfsuS2Y8XMtCB7KcH87PGu6o1sGS8yyfgvGcZC6HGyDPNkmCsZzN22x6km7SggAHLzD2qvD2",
  "key23": "4qLZDrTPycapiP3DYqPUxvHUuUS7WBxgjWcxBXPt7a9urtqGfei8dWokw52nWCmmg7jU1nxw2eY6VcvfkBSzFV5u",
  "key24": "5rybSsayUbjMmHQTSsaFfZPZ7EdCmLjqugXQ5kccjX8BqGDisGRYoR9s7fkaEJ8XfpZe2LQS9Mr8Rb6uyjSLV47D",
  "key25": "uAzgTCzpjJu45ZALS54E3B648J1MuM55g4mvQKj6dNYqtAzBTTzi8eR86e6rootWsASvSRCXmWdC3d97UBPiALL",
  "key26": "VhgLbTgNLpuBXnzZ78Cqoh9HX3enUkTSjkjfRgwerSguosgQ4mZoG5HvHZsmtE3gkFSmFg8ebqexULdcV4VfLuZ",
  "key27": "3RwyVE2t71Gnf4d2EHuLESD2x8hWWXNTo7tJrPbEwDfxcr61dwy2rampRy7MeJ7vCdV28RWYA95MwBkfuWLq9itG",
  "key28": "5B2QP6L8Z6PzWg2EFheRNNTwpWhLaD3VYB3yXhwUcckLrN5aHvca7daX5aJ9T644JRUNK8LF8YXo5ULKaPKd8LxR",
  "key29": "ZMR2hZ8g1CbVfLwfQ5zorEw6iKLSoMW9He4tC4gS6hDyPcp6oeWLyBQRSLzcT1eVGTMRy5jC2m5cCAx6VGG7VRU"
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
