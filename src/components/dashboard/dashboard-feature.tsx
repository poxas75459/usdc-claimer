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
    "MiknEPSdj73gDGdQjs7aieejWkAt8ko1GqeoZin3zKi5buLQ2yBvDdSfm535QAw2QFPqfAwvJKwcnvKNGHpQZCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLZ521uHjKoDqF8ibKSPKCbofjW4JLmnFWw6oqQkHhvFZhAy21UKzpcGcFL9Lc9cMHSPaXJcM6cuS6wmZqkrJwj",
  "key1": "5svomVncyb8zDHZyLggMkkGtZsAuAPnUDQzGsj9j5kxkvizJCATA8xGfxweEkPbTo2bXr5Np1tgKkaTJ9C867iHJ",
  "key2": "5k2KSUNqVhzhmjJoZLKr1midSt4oeW9e7FnBaaovJTayuwuPqQRMiNgUigrNnwBgTGvSu7tcx1B8PMNM6VQkDG7g",
  "key3": "5Q8hoQTa1AKuK69JW33xdBS5WdtnmzUMcVrLSukkQPWubzpJJwMeFsZ2YfLm9Vxmvj2YbYdC7uJBi5c8sVSJz3wc",
  "key4": "4LHpcgmjNJNztzYoRdJpnzn7ATKYpBSkhhU1tkM3AWS2KdWKmSaXrmTyMtVnsNw9mohETntPgwgXmkBKKtK98hf7",
  "key5": "eAQygjszSJqAJqqdpu3B3vQhxXidJADW2QWcpH1PYuncjL36rUUgZ3Xhzgh5DjG8XA7yJqKpbavLbV7jaSJm3Bd",
  "key6": "TECEneYnvpyz8nQSrngBCnwvCTFusUwGXdqCurUeDhEjYNmCAJ1oNLmoMEFmertPVM2DFekVx5bCUrE4K4iYyfk",
  "key7": "5odAhEyGGXuZh4jNqZkHXxVL51sz5JX2auAMg1PiLRDQNG3mFzTKnSYydkvKUUPsNfLSh8xYJW2vxGZGemJRpuZe",
  "key8": "47AudatMYb7e7AiZ3KXteQDK4CXkt9SyJUnM5N6HwVijtkGF5HfeuizYkkGfJUUGJQPsc91RPQNvi4DqfuNcmxVG",
  "key9": "2LaihAgckAmbvG6p6vXk8d2FB9QxgdCi2uv4pDF28XGErRgcUWqxSfzcPAdfL7PRRjPHHkEHiLMAGujLgYj4YC4n",
  "key10": "QfjbgnuoMqAGq79MSXCLNxYqjX1eat68sKxB3w8yL1nG5WrU8VHW353TjBkgR3SvbCm3SuNr8EccHiHGm9TpT9K",
  "key11": "4cyEpDJHjc6KT3acHzmVYEa3LZFzW6RNU14iSkZV5GQu9nXxuxTtcvd6TDSq33ZbYeT2e5PjXk7CnUbbZkGZP1ub",
  "key12": "Qs4FtibZ4xzJZAhYBLHMVD2vcpxZoRXySXYwYWfCvBh2jnnHNGGq2MYYyKspLijs79y77WELp6M1fpHbn9DUCyQ",
  "key13": "2ksvha1ypcCKXWF1XASm7wnQD6RX1znby6gREokfQoc2ewcZJ7t5XyoTLcWrvNgHDStH2RgYFG4spB4cD3RxbzEL",
  "key14": "29wPwDMKPgPdrMZB5H3Ja2dowYqLKs3y9QZ81zSY4ZMVsCccTPJqxsYoTV9j9TqpWYSmc4AUwURN6YFUfosEAbkH",
  "key15": "23kKP7kLL5sVfPk7KRzTA6xfVkGUeqEn2QnK6N8YuXFKvqWAF89pznAzE86HmBNqSXQNAuszNMwf86YgqJmZ87Nc",
  "key16": "5QVJ7sy5a8oDwXz9ongo1LjHVEHmsBug24cBdMVfqRyzZYwb6AU7LcK3AG85V4opbFvmuGFwdusrtfG5EnwssYNs",
  "key17": "4hBVrfkAgcqEwFNGehmKJKxjAjsxQ8aPEdgkhbAn9XyAqxU9zAFoT3U2pkUyeV9z8HSfJdPMmhkTJWojsSrFWdbW",
  "key18": "kvk6qNCG5Bh5ydsQQ5mwJnz3o3L7HMsynmUZtMuEBKaVBTT49zbAYEKFzGceU589QNEL7mm64ME3R9fXGSgeJgB",
  "key19": "4gmnRsS4mTTbGRWWn7QXtzsLKNSqiKFdz2hJmANe8JT6SNCVHFudsVGetGGafZNHKzvtQoE7G2Ai8dkJxke2ZqHP",
  "key20": "32mZdM3rRZejBrQqJyBLyWB8tVE6UVVf8k3XKMcLhY3EzmE6nUiTxAT7USEqNJ2whnVUtZ9wEaaSN4uu5cqpTG4i",
  "key21": "25uUai3kTu5bEmFosjbxw2K8KEu27fFfisFhXK3g4Wts91JVjFdhhyjGdnecrYQp6ZrNPAtzdusYdwdsn4L1xYYV",
  "key22": "5JuBMWHU2i76ag1QP5hqK81nvo292UnY5ahw5cQaZphRxkXfgb7CCBKnmo53rCfrQgpammQCw1ispny1ZLAHn4UQ",
  "key23": "3VCtnsfrcr1zQtSD2hWNWgLee1zJEifEx4hyc17TrsjurU2DxTV5PNcMMpgwRfpAL5qXVBYg2pjoqeMq7pauyHNc",
  "key24": "4cEgaAUoQzmS4Nv1u2aKRzYpQmDjaqXYCwGYHeJmp93B7Eev5kiURAcMz49nXp4QjyF9zQjfDWyyBJi9ECeqaKzK",
  "key25": "3KvQ5nkFCdRkt8Ac4KZ4DtM1zFbYs2mGijVfo8cky2Rt9BRWWFMwRJp4eRe9UNpJWgoosMkortcUt3kcssWVRkm4",
  "key26": "3QV7fznNZbHtUkbyifCNV24MKaQRNdXHRfZQMQUtJNoBXNgg79tdWQYVKsMr1XiHhhPWTFs6Tg5Peh8JzjdaM8vv",
  "key27": "RKtJJRiNRRLRV1riZ1PcVSbWtkSMB1ZPvJaeFHdi4V2LmVaoZ9gxmiUCpEewcR512cfSrhYAYYmeuN8q5fjV3qk"
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
