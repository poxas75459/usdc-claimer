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
    "3KDBc3bmrsV7obktcTAutwS3cmGKojoR8TRshSZLj6Qi9FUCY72YDhSwbKwz9CwYzyjxHvPx41dAVNA858saRiSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iXevbpMEoSTbY3sjudp6ia3EZrSYYhuyjMTmkXZMriaFbjjpBSvExbEBja5mXiY8FYQvZzBZeMETtabfir8Sks8",
  "key1": "3WXoHoH5LTBdACHgXXKrp3CS8gCbAnacnUMxt6UFnJ1wF6n7M67JpB6hRtzf5Lh4DU166HrZ6hG4n49STGo4Lcp",
  "key2": "2ZZUA6wrUBvXKZGYEckgecBfMZB7VK1rjJqoVtWyGBMPHTSXx1JcqY1wqa2KBddWgjCEzfHar2JeEPdTG8rYZC3f",
  "key3": "3BWistcRsFSWktzCyxtJGKXgZb1dQFTJZRSEXNPfzzbVS28mgZ3qGACzoR8ZXcTY9LsXxPd15H9L3KPvwjpeatmM",
  "key4": "JT96cSoBHMHLuKqnFjwdxQPU8FY51aSDkHi6qVunJBz39kPqig8wAVu8VT7B6WbB4yeMm6ifsd4pYeGi44Ubvop",
  "key5": "Msq1eDX7zB3BWEwVyT1mgv9irLb3dUNLsBvaT4HxiMyyiYcJzpe8PjG1RUNqcodnwEeXcrj35rJPub3GmLDJSCa",
  "key6": "4t8sT5zMoubpfCvmeziZSaAi8XjEcddiuSUtpEt2CTR8zwLiwHsjntbgL47vhE1iQzMwhoZv5JegMqHSv6z4a8ZS",
  "key7": "V9NPwEkLmWZpomYu384PwboKDH1AJLTKmbLSy7Tz3LLSfecioA6uBBwYzFK4P3JoLxLqu6mVQPC8AqawK8Yh2Vq",
  "key8": "3ydiFVWmsPay2bTPsDtJm9uTZGmpZ3cRhKZgHvZ9dVCVchWmHghFXMjSwNAMi2KkLHj258JF617boyM5SSvApGx5",
  "key9": "2LLWqAi51AhwaRHUNWALPVwCxdgYwxcUMUu6FxxsFZew1X4WiccTmMGQejNwiaKSxXZwbJYLjEyvmr4RhsrBAMqo",
  "key10": "37XKMdBmsH7jyCcDiSNwNquNsoGd3ABivdBGxaF8gQRjzjNsfDyX8VjWvv3D4Un5nRnX9nBFymdfHf69sLs5e87k",
  "key11": "2CuRP8wnQczbVbBsL4BtDp57R5LtgNqPuh7uXksFAf2HFPVZjnsVkm5NzEsvafoCQFVNTdysTRok6DKJFQADcJHY",
  "key12": "6jeSNHCCpctrjrHpztnmmHcQWNXwSc6Dw8nhEyuLYugMgdoUaRKkLSP5w9j92EPcDFDGeVzaBorhLcvtZ1T5tNu",
  "key13": "4QoVrRpJ42FqaxZmE7WfxmByRQcEN9PsyChZRfeDH48h47HRDrMoxGLVqw91gBMuQEyXGWddeGFUFckQso8EFC46",
  "key14": "2qjVB3fd592994oaxQbeGYqvpz6iyBtLG35esJm8agopQ9pSMgEPDkdrasch1LizcwSRJoAPqw8FWQ8S1voV4GYY",
  "key15": "53d1hEj66yMoywvqkbjCr8TnESCr1FehdVCJ7T99DEBJQrcF3Gu3QuPbX21EvZss7xsbMQpuA8THasZvTwSWeBgr",
  "key16": "3AP2afpc1ySies3nV3DF7WkkLoKb91Jx2x54ygf2siAAq528M7Lih34KmLwDE2tFngZrs75sorhd8DDa8Vr6BgCj",
  "key17": "2qFxSb8N7kfVHeEGBuVi5BHiNbowCj87PpWmg4Aqpc7dm1tXQjks3Jo8GMLcjooZx71UU4QZ5tugNVWYu1YZDueF",
  "key18": "2veu68AM7hSEfyeFbv4iQz2tLoWEvxYJGmk9XXiCBXbgkfaGUUUD8uNWHgLMafyFpt4KCzrSDkVNWnFt55Spnnm1",
  "key19": "4g3TLLyse5REUJXLa6daVkAPDu4HJF8s8kgSmGhjS3GRCR3QHvt6cVVuTt2HaBSKXWrynQJX3m96Qma2VogDtAkj",
  "key20": "5jVrkpFze4U4hk82jcN7VTXRUn4QyNo8KFEeVQie6N9m9YxkX3JeP7AcwXsnQe6xqtXEUErK74qQ5z8CVqkwbkV1",
  "key21": "3igYBUd9edLaDHPpzoZuXRftG2Ukp6EnXFn5jjNZh4qcutJVr8ozeNuvr5obM1TMZHqgmMXA4pU53uUnxmJZfkMY",
  "key22": "5ES5RJTU69QKVQDYEMFKmzkVnMGrNY4qfGXGn2EjFpVnJYVk4sDtTjpp2vybpkc4Fmq44J7oCSjYyquGkEMJ1ydr",
  "key23": "TCYTu8HCMLDgCRy3Uf2A19Qb6TqZP3h2ie5qgV1pvjsDGFjLdSBTG4hWhjkh6BBFjk9TCmv96XWiesN3RKYdNGA",
  "key24": "56UVidFSHaeN2MYNT81QUZNT2W3TFg9Uzd54bLW5uEmAAzWZkLJyLfySsJNjD72RqYVYcm1fgr4Y3p7E8j58XbiY",
  "key25": "2CR5fDwZKejkNEArStCz41cTv7VuN4ppS3g8dbdN4xwZvqGLdXherWwsApiDJkVHL8yVjGcBg4eGao1kVYJaNYGo",
  "key26": "3EvDBqTd82FGX3magGEMfieH5XmTooYXHUhnjzG1irjBQfMB6kp5rhfA3pAWYzEmdPT46YkiP9168t4QGWcDtRwk",
  "key27": "2C35JTgatcP75t8yD1aQh3zSHAbgqFAPsg3r6DLyKGaPqvfGdFEba7hGpM5xAE75rm3XtD3Puif8Mm8kcuJQDLLR",
  "key28": "5tYrBy67P4bRarkLiVsGD7fiJ6zQ1HeLaycQR4Gh9GdbsK6iZ84n9rbeRTLFEyzQpapo1ZshgzULGNwqRZehsSfy"
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
