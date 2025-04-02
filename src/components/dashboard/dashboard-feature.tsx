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
    "ASLKRiJnUCG8rCZRGmj24m2dShsHGe5sxhoaDPxoFvPSJWRenAMy3ogxQ18dVoENC6QMGkrncztQbmUJhkVQfyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rM2M3TGuCXmR5z5GeRi3Rcy3H7mHwd7XKfndozauUKDCp3mYxMTbEJrDoUySCSiu4vf2d9ATUhaCkHX1rYNbXU9",
  "key1": "2HguNkmGHYXyybwqzz7wDC5VdGc1Fec5xGswEcrWJ8Y3zmfJs8NjmYjEHwLZNwRYE6kVpTdMkoCNdnaYcoqU7rnB",
  "key2": "2zdfYPvirfzBADARyLJWT49sgdtBo517f5gnMFhBLWyJ9ow8mx5y8KgyowLHumQg15T4mZY7tagWijUV2NwdU77f",
  "key3": "461zDTTbBbifgUJcT6HhPzMXry1Kw7JMutmy8joi9CiSawjEkua1gGkiEHtqrCtkwpwjqgC3zfYoFhzimYqMy6R",
  "key4": "4x5tsEzB1hw9igRWAsoYd5kYYRLaqtBwBJa4WtVnyCwqiy5rmMeDCbbaN1UK3aPqEkoF5dzVjiN75Po4N1extcTb",
  "key5": "DoHSMaV27BmSeXsnVXuUb6fMT2MkHSCrAr8rVK9R9yp7nPLFQ5P3QPVckncRe9emABo4MJYNR7j8EEXqBCsfKRt",
  "key6": "4nqNbdDUSXMzqQAXmtKdHA7acwg3J13HFghooZBjJ31uS3AwzyzqBfn9wygjW2WK2QP2XowWAQ6zZpc9ARqUujMi",
  "key7": "5EqTLGkMHdGk6WGroR4pnbQXQgPDVRczk7jk1h6AaiWS3zgLhV4YSAPNbps7egec9xoJECiAp1BLnYvX8ZQaZ26",
  "key8": "21q6AFMVHC5e96VjqmGagrNAgyA2KnyiyVNkTr5KhqfyZ4aj8UHTW9NrEkxjruJUBjAUNCqJWgoaKVXYZG6ZyQPx",
  "key9": "4Gb6wRzsTHmy6WornZTxVA5Qf78RLMBZ6ZVx8J66NCaSW2j9gDxS6BKWGfgcrz45wwHvYMC14CBzsV5dJqu6UFLn",
  "key10": "yHPHGmnHfoSPabaMexzmbJiorMJ3YYtP7jTsQXMEFS2VuG3Xy3wzMDx8BMw8K2Ke76ywFz1VPkeK2hwVPj1iHAA",
  "key11": "5WmEsFhJfLf73XkCtQ5rZN5Py7ok6nLdKqdUWMFU9qFGFxgVdcmrY6c6Z7XQcgw1kbMviNcvdpF1kkufkJYZg8Wy",
  "key12": "nqLQZAuQD9oSSr921UUUfBxToGMh77eZZ3mzh3zrNUiT3pJSaZds6C8XktYAjWxphWHjKQNsNdEtgVb8FTCuXxE",
  "key13": "ZuqVM16PTgLXB8DvUZCzfkBp1bQv686DDVmTLGk2Zg1vQpW6cv3wnmPhbk3WDVQdpgQu1D4yJNhY3pAPaV8CAgz",
  "key14": "49f1KFQcZk9ySFiDgKZWsNHc53F8nKXoj9TgsZLYVozjieqTAr7z8JaZKtrTf4j1ZhXst1GZQS5YJgXnF6cMYC2S",
  "key15": "5KU63ogtW8Yt4NFtvHmVeDFbAPQfqCC7h73dcJFbkJajbi2bTy5ziUt2ZAa9ZCWFq1kKChvy5eP3q4mNYTr1Fb9V",
  "key16": "4TSajLAN4sRr7iRMvDhkc9ygqZHwUoxqggfETBqDqk5cQ4tfxRgQ7iC1SQfw8moZSuP2L6qxt1jRf5AqbnQLwhKX",
  "key17": "3Hv34vy6ZGuJuBsT6ZCR69Ap5pcGvBh9L6tiJgVKvFsFiRm8LA4s6ooAg1LWafpdCCcyA3WKEYKf81h8pPeEPkuv",
  "key18": "29dVL34iRJdqusR77oQJxsrjGVtqexjhHnMwyw7RkWDoZbUR9iAQrDjabfbx56rsNHXKbFvnAyJDbxTVPqASxAc5",
  "key19": "48XZ1NCHvEWmLyMyQsHsoEToQzTRkWbNtaGBmeU9AuqE5ADMomb1ZQaysEgr2qsfKAVgM5855NhzfPMMbNUaoaPw",
  "key20": "2HfvM4TER5UbFsxKMisYLqosDZA16SMUXKoRd5mXWCbUCtBEZpqegjiSukTvG9kmTmjnQVxS8kVK1wPDu9jcUFNV",
  "key21": "4zobrVbRFrvgXqhd5fJ8nnXEAmtN6DBLHAuKkdDCogUBRAnvhMAJoZYynzVDBLe5wJvaLfLZCxUbEVuSve5RDnpd",
  "key22": "4dLcQz5oydvsPNiEFcCLtzdNWX6sckoGNVgCBDrt5emo71NvuFb4TvARxtKrcu7pZRiMcGYX8n7MyusCUFi5A2Vb",
  "key23": "3B7NBfnmw3ctmQrDeapSLipnZdeuVYycwoPpQSeKHLTC34TV16fE4y7iT8zuctuQiT91ixW3HjmWae1PPmcj3Zc4",
  "key24": "43K931Zih2qmmxbE6kuJGTeird5MpUMtCGReM7S51HraJdxEj1DzkgvxsRQ9duxiMTByvwc2Hu6ZsPJ27kiCzoEx",
  "key25": "49Ma4kS8dEccizaWBwvhtnuTYnbnT1kwDkK9VfeBtTZXDnginznsivNr8eitS542rLLBaeMXtUZv9ugni7rDNzC9",
  "key26": "3SmGCwtgprWp74QGVhttJ7sXMQ16uaq7hM8fnPCTUt7uAvXYh2KRg8oL7AbNR5xWM1T3x9dN7hTkp8ouAgT7TXwp",
  "key27": "59Rz3QhRDCh4wSFBKCQqW7rRXSBUEtFVovv8up9jnCkzZkPNXZgEyfBWXLhHkfSANSD24JATMJ5E4i9HpTrts8oG",
  "key28": "2tGaayDn78SXwQCh2HRRpvNYWTQM4g5jWAnxN7kQCwDBWvbJzAHFez4ohQaFx1pE2bASnuSL79CMKurZVwq9Cr6x",
  "key29": "3cxLydYa68yZJ1LCdteoPdpr1MnxqKpXhX2TSQdewgcVoCnQZsDA2gxZiaQqzZ1NXaVPe15Wygbxt5dCvPeDGLgd",
  "key30": "5FFwGvvuL4FBFRFy7eX4eyVfFqZJ8ep1AcZJv2LjYGPULpQ3gFD3VYMkgDvuNve82jyJgDKuKmQm6N5EXhvK6zty",
  "key31": "5X1FJWDfiudHFArbmqPELkC6YUEKzpg2esoZgZrxkp3d8uNZ9oUQhTnWtJ5UvNRpBGunpqCH2y4pE6MXyc3YcUWw",
  "key32": "5sUL2zHpui6yv3bFPWAUg9URzK4WocykkPCo9gMop5WhWdTC6P2aeppJeUVnTNjeXXTyRAP4h5UsUZ8gCKYGo4MY",
  "key33": "3UsLHRAGnQ6ubJLQMC2DkMpmEcYHkYp1mZp8z1v7DvKuEguTuKe9E3D8fYRehJ4NrTSPj3i6sZFAiv5yXSasPjDc",
  "key34": "2euz53k84HfJyp8rYJWVVWwbDSfQdJAvzhRriD1PidVzsVdmS61qAPf6TwBdhjkLWmwBWPkPDCvzp6jUukvc7SJX",
  "key35": "2BGL7YWdLBnqdrPjs4Di3RVFVfMfrDFKmw9YXNSjaHWyizxqPMTbVkiktF6pXozMEfrXKMjuj4LeJ15iwK4dCDf5",
  "key36": "59vhVKDTporAqhZV25duXP3XjnVT2Fiokj2R8gFA2SxFrDsBJtB5xc2rEZhdPNEihvVXW5ofjqG9v21m5gqWezEc"
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
