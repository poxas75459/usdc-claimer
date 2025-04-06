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
    "49SQXCH3Tnf95dQrkPBcVpjqx36QMoUnDBnTQVmvey3VXFVtssad7x5uPKJ9CAavKLqLFeuaHsA3sX6DwazmazKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBnQUMdE5FnVgGiEDVygipkt3f9Y673CYxorBRYC5LE1nwxCLvFsr7iXBfBy4FzQbx3hF4LuTjgbUNhz9zeq7od",
  "key1": "4asfFsMo5tEgCfUUvcZpLSGmDHDG9XzKJk1TUHveJswE9ouTaHPQoDCgAqR69fDy57r44WnJEbEtVjPYYSg2qeZ3",
  "key2": "cqGcyZp7SBKaUD7Li6vurZpDqwf8vJuQXt1HbzVqZGt5mZDWrB9hA9JX6assJ1HBULLczLgAxhNdzveDwHCxt4z",
  "key3": "3ZpzdNXrXzy99Gv6DYJP49UxU3wCeM3be8EHXMo3jQ4q8QMBNPgqxTjjZgQfaQ4HF4npidmXKRUXRYUpZyEWM8nU",
  "key4": "5opcnZqS9gpX9sehozw9AWwR5WCABPLWiJ8XxemA8ARDiXhTjTgtvWPzsSUhrJzMvbyrG1YymacGVTzebbWjZXzR",
  "key5": "27wUVLGoEMziqXksZdXGBk65Yyj5VQQJKQUAkuiTXt52cjnFvae1sJjagwsPabDKwjxSigWEY6n6e8n5dmoLeTqS",
  "key6": "36ZJv78c4BUhfwTzW7NfXkBr7TepXrBaQhH2DkRPyU6wQpEJBbCAguGH4zqRsH5Pi85RXiULBHFcccbCtmi69a5",
  "key7": "53HV1zpuCBNnNYfBG5wBMaUHL7JiPx967PKCH5Bp7QmEUjsyqWfmtjjUWcYUyU1AqrmTYs3Zd22oY6mBexqkrNXW",
  "key8": "2Z1g3Q5znzF28juuAVJ5in9roRuAhAaBJVDi2yEWUfg7TJZdRm2VbkMn6MtcmctttZsycevoBYgxWAjmoGLs1xfx",
  "key9": "2pnitLzVEbEp1UGtjxSMKMdmZZnEtSUFod2eZ1DUZrPtVS7qbd8YFHT1UYjX5BtRGLfdNetQhZhhW9psnQWPWdfD",
  "key10": "hbuMHtnbZAT4CEtW4uxHG33zCyLby3z3SQGda3XtAfpNt4MZajmYcACviaqef63Eq6219tFphUK7V9iRqztNL3m",
  "key11": "2ABubvmKy2AriLZrcqpkEGCyoBNU78Se9UiQrfXGPpzfAgMdkW9xfKrWi8CrdUR9HjU4kN6Bg6wU4yZJi61Zt23n",
  "key12": "s39aGcwvPxsNfsT8oXyNCHwivCHntsSLb8wPQvb8wfRKCFsT88bJ9jzRrPaJ3xmKqgEyhAZgVWgUeBw5TyykUrN",
  "key13": "25BDDH11GYcrKwTweHbyc3QkVsCfcRRqLQZ9irS5mWqZFGtHKdpbUnmkuhzyGf76iQJVj5EGQg5RMi23LLoFbLZh",
  "key14": "4STN2eb3b2HJNkCmFjvRyXXEBTvDD526ZrWBFFKN64vLEuJrSUsYvMFZfHFEDPNRHUS6JN8cmKiveJNgGXV4STo5",
  "key15": "ABiGmA3Uic2NhiqPRsQ4oSWdLNkTA9S7uRAM1Y5bXSKRrQGEMVXcyizBKcvT2yRp2i71aqBJDowZit6qXPfpAWJ",
  "key16": "26TNj1hDNP3Nwpu33v7r4Dz68GP7Z9XJqLS4P5zukLx2xZnjuUeXsFQWZT2RsAy6c9N6Ftkb5fD915Q2PysK7esk",
  "key17": "ua55LVyUNnJZZcnhVdoDdkq3tHfkd45cWJkdXavSA3Jtv88m2Xfxp9oRWASHshGuSJrJpKRDPZw5d951YTLDyGx",
  "key18": "4URyx6VX4L5pdMVYgEBAvrn3entRnZfGNRPCWaqmHrqYtqhyy4tniSGZ213eoSpmsewrF6LUKNAM8Kb3SYLeioN5",
  "key19": "3AcdZ65EQXu3UikFbgHUUkUcHRRvjv9KUqfstrWKbaU3df3U5rQJcae4gZTN1fibpVmnzY3WXEyhQahk8HLapZuA",
  "key20": "2wAcvaBhb953FKzuMuo4xGJHjFTSqpLtPqKCSM1Z9QS2h25bbBqkKCX8evLRQCgU1iNfijyKhPHr83vEiGuV8VZW",
  "key21": "iBupLkgUiVBso1cm5KzS4PkZXpwXWLfNMM2Q9D2GS5x3uWeY6WZnwCuV11kSd5QqS77Xpr4VFHBK44YCa71FW7H",
  "key22": "CfeSYcBg9fH7EDyirsc2nxeBD6q5SjZAEGoh9yY1HtYQyT1io35R5qGCq5v62Yx7LCo3XsgXa2DWND7RHVr2S3j",
  "key23": "41MZuDTdUcwRvz7Gvq3AR31mGQxppHP3YEDB12bX7QEXL9bT8UhskDXnV7E831Pgz3CjR9a4L4Rb7e3uD8cnfDKJ",
  "key24": "4SazKbCEDgyJRmrByW6H4puTfEzigboa7u5JhqDhjfKunYnMLnp1Y9P3JhEc9hWV1aSsMQtLXaftdALbhbaJnaBj",
  "key25": "4fXBPDxEjKNdba92mjLNdK1A4ZQqDURf23gf9gwRjNUUXoZajJ7iLYi2gqAtZnPVoR5STowN37R2s1EdLSCbJMrN"
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
