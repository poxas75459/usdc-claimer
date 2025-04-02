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
    "5dds1kCzqq2G1fLNnJsh7N9yc4bgBKA2UkcgFYdMsre3mYLxLGN5AKZ8AndbQaGQ6Tm7cF6ZJ2wp7AMthmumhmKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NDLHwxY1FruH97WgpvKebFd1hJKc3bbTKE2BAmUx6PgMpfVdrzkzDEHsEPdysmrCU3eqUjUTP7Lu1DbrmoJMKPv",
  "key1": "2jwH4KfDbDJZNdx1AK56ChCNdTt5sn13cACNXbBX3jBYmhixcDxRzQFeNVXW7xfkxKHFudfDyjFmcUcgQz5MbAFu",
  "key2": "2Y2bVdkyQPuNx6ke3yxYssEHuM4gNSVudVpkCCsubUd7oxZ9ZtPZnCnBz5ESScsFVen997TmUUiXzVikTmREDVSA",
  "key3": "27THrQukPuzbg1ZZfp6RqBGEfuud1YiKLWogyzbSM8TWLptHsK4X2AgbEZK1MV9dTqFm6VEQ2wWitCjDiX9GpBuu",
  "key4": "N6DAPJyWWupAYB6NwzX79gaZhwBVak5yqUkHEJe2sRigekafBrdWosdbhXCiEem2ZTWF7pEkxNSBoqhJKtd973D",
  "key5": "3Fy215scxcbiKz7wXjDVyGsc4SYrik2n3UCFCAra1rHPusRhLHyUn8F7MfEJtY4447mbmY7B1mDKb16AHnmp5DWd",
  "key6": "4JMnAPfv8t357fXGVMvMwqT4hXGyzEwqZP69tqVoMNGD9NPu4kVnoUTw3jnK1UGzWYYAZ2TstreMNw6nHnzFLvJX",
  "key7": "4e2NVuHpNBGaiWG5SsrYuFv7QCKnZnuuEMMMarn4oVSECqxSjErHRD3pkUchSRTTwnVkTYCFVrE33JeoABA9R4Ww",
  "key8": "j8eq6NPgCdRF46ph3dnAYk2Tu6NUb5zStXRVK9oUQXZc9XpakRubNMKga4b4u179XpFTcxFToErkZFaUywauWp3",
  "key9": "12bdqNjQXTwcxU8QViFfWcV49mBdq3gshQ7ZqqLG4TGe1RokN63acH9X7zuSryo2PW4TqKEr2T6ja68Vsrw7Dvk",
  "key10": "JdJv4CcY5Jaqzr6SJ5hfj1CWmvQZLajntB5yAB8uFjntG5bVFKhyKcHm96mym1KUZcGzX4UkP9wnu38m1xuxs6q",
  "key11": "2TJiC5EkzTGmJ1y5gqFfGxQn8mwHQs6Qs4j1fTebb3mstkqFX2j6xMVJKjUMfynNR5tZJMuQzVcYctVaWmdEy5Uc",
  "key12": "2w4mKNiXWuKSTFRy8DrXPAHm9PKh3gboTwRsRpZYnzWf47V2DzAAqiMjFEi2aGCecLcYMhNSJNjMx18Ns35CJFaw",
  "key13": "EL5wdSDc4evFLXaaTpRYQknPx4iDRMLqsXcH7MQTWPvpnuuJju9r1cmKS9SoQiqsCnHa2cY56HTUFYMRFkJc2Dr",
  "key14": "4zhMABfxpgQeWA1Jh26y2KBEt1xsu3Lwt43f7X8fMD5fDuQ8mt193BSi3hdXMe28PDrRYHXvR2wpXg5ZyP8Fhgj9",
  "key15": "2F1B4iCo3TbJmtR61hpV9nUEVoHsAdTdUo9FcyP5UX5H3APeXKVthHeW6Db8S2x89aGfGBfraWDT3hVw45FAbMv2",
  "key16": "3UyGAeGyxjGS1QHG2WuhsjigvemdLBD6S9xi1i6m4xaF84PuBw9iWe3kbc9LGEQVSHMdetGvFctGQyEYS9S9oW4K",
  "key17": "2VUSbF7V1Bk3Lm2g23iU2HYbaxrUkpssZAxL67y2bMSah4VwrLuaQsFUuP5mfSsZwyKjVRUTethaechCC4xXMkjB",
  "key18": "3n7pKMGVrFaMsdt1aeNdGJAN7T5H5ZfFxgfjf18kZnCJxGn4by6N3QxiDz3q136242YDYUKy3jNUy4jmuuNSDUoN",
  "key19": "3RVnUscfE7HzgEg4feWpKZQUmpW4Cxoz7pBHfjfXUW7hQFSg7G1GipPQnFNnBzrunPWjG8yj4GnfVckB4ixrMnF",
  "key20": "3Xf76MZZhPdJcEoZqd32KUcqCCSRHtkvNQc17siE5SQyocK9LDX2gesKYGiYkkLBsp2LUiVJchHR2WfrERoSMYsG",
  "key21": "51YkRZs2Yshv7RaSA9ZzGXAGqCHUzTqgbLfk7sx7iXsgnPTazJZVrp1TgM7wfh72ihzStvEEZ4v2kbFBc9zWAFN9",
  "key22": "r42oRsv3efm9NBHBbQ8f5efzpcSagHpyYaMA8sQLjwYEFsg9kUWW5UYERMteGPio4anjn7frMpVnH8zYWKXAaX3",
  "key23": "2bDBS6WtDwewJ9vJV4YfXEi2jh69Tx9E9wUDNj3ooHmKaqNFWEQ6SPhvRJ9JHh3X6RPT6vYvfxzuyPSwn2pwuvQj",
  "key24": "3B2v3zQXXaP9mNbd6nzsUzeFRVYLnr9he92twsgmDn8SHCsCWye6DhPX2dN233TvSXofZcbusWJockafPJSPx52g"
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
