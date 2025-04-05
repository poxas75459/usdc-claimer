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
    "2VRVu9JeLTNAGsnpWcdAwkViCoXFCD2VFHnmV89T7qbXQxvC4HE1UzaLjiytw71JiUAamXwmNqXstprcKR3FHVGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33vfHCyFDRgHcowRAiBad3QTBdgE9pciy6FpesBC41kWsH91PxKoL9RNrVfTD8qX7N4vbUJerp8spk7eqAmRSLeA",
  "key1": "2E4rFHMCq6BkNWozy4n37vFgB3eXRYSZxtMKAzir9qtV7zQXi5ZgKCjXnBkb2GmR7pq4mVZ1u4UNMHv2vSCpnXGh",
  "key2": "4AGydD1aZiYKuRGbNuKBLinYH6VobeVkviKLKePybpQ4FsraoCaa4wEWgaSAT5f5xXn92CkBEfEtSr2LWHpenG8o",
  "key3": "4Qg6viW17RaaUPvL4zpvp8qSkSYpD5KX91itEQv8Y6EHER1RySqTrkT9PTbSjWDZvigtdiFxZq4Z8JnF6Q8ugYqc",
  "key4": "CYaB3rrKxSuu65zkB2kuyUN1RWxMV9vM1QF1TF37uGato97Fj4FGSDY8KMW29wFjw1Kqsv9HyiZCuCRX4NBzFwA",
  "key5": "5qBchn8Ue8dcqcXMkryp2xyML3YTKvNYKdVU2Uq9NWGo89EMSiLq2t7i2WB5koKi1WZkLU4nndv6dvcDHUnumLpa",
  "key6": "2GADsEtpxXAURg5h1ei87X3dru3M6rDuxkh5QuEgJXtSvZaMSqBQD1RK2JxgxCUJaHaGkyLX3GGDn3pByDKyX6aR",
  "key7": "4NAytmCE4RZJvAVADpyvJF7uQHnF1wy1Q4Ai4EPHNRLtJQoqnnDX5eGRN2trmLUt4tJM4acAc5Jeq5y2h4KyvCJn",
  "key8": "qKht3R41xHHHbgAcPf4UFLtEynZ3vbboof4RbPDP57PBitsSQXDvxeNYspVPvHn1TyyzxnAkzfHSbS7ajruHBFC",
  "key9": "3QZGLdMzx31368J4hwWh8dygEeQ8QDykJ4mXYD2EBEnHuzzXAynjAnowUTR2Qmj8CS4sfBHsX8VFKQ6jnwsspuq6",
  "key10": "36fTZDE41TdcuaAsQSxeqKKtzEPM8pNRHM1AoCkvDB8iqDfpTQ38AR5gQ6jUfNNQWv6i3u3eLT17cQj4C79f61Nt",
  "key11": "LAhz7Qrzom8gGxDCyn8puJMSf5z3Z6UYFUGNru7QTTkJtdZ7AcXp5Ec36cE6mx2BgvPvPmztXV4xk5GBx1BeYMN",
  "key12": "4u1LbWZ8ciQoEFUBkcPgsqJSQesm1p4DJsh41zAhCCyuUHbCJDDdfSxSwYjExjKD8wrt9neV3mJUQfaRWSX3UPvC",
  "key13": "Vx1jDMP8332AGMti5urkYCQCapPS7HC4Cu8vVnRF93adQvYzWuwjC7C41fdwHDUWtsHgZH7mP4VZUqfqnpQoFKp",
  "key14": "4crg65jV2JaN9RkWCNVRFELRWzhZiWxrbyQgbrjkFVoYdRJZuBZjh6byHqH8mrzTngAfGd8CYHxMd94Zck8CaW8H",
  "key15": "3xHxUAsLbbEERuSgFvcvfy2HtshhDh5oyoDVsayiJSQDQRdnL1PYWCqmb8Xnxv6EALsxVXTipw7ukWkw1KNwkzW4",
  "key16": "5uZ6U6XbVdJuUpkfy946QeVZdqG5TA3Fr3JKAqsgok4DifZUEf3WKU3yuFinkcJa44ViRTa6JobH38KKPftZhfxU",
  "key17": "3eXeiFo3XMv74FbyqJDrDBbaQLhrRZzpxEaasAF3fU7QDeZUirkyR19ZsFXkbRzohFKsbT5AMuyPUXapsTyZQUjz",
  "key18": "3CqtsETvtthkw6k23W5GkcinSq8NxpiKcdG1H94WRf6txnDTa2i6M7WcY4Wa5VD8QJmcSzDDnhw5GuhFaDjHm9sP",
  "key19": "5izXf6Kipn2KnbnS41sB4AyKyW8bcB3vXAw4LRKFJNKVPSveK2p3GKPN4bdSqtVbWMiyCLQEbtE5e17n73oLmhia",
  "key20": "3pxUqdAEztn9kuEXhtDsXhb2A7RLF141qUG6s9iud52heU3GvNQhCfkdWDk7nnnv67jp64gcB695ApL2cgoQpAMb",
  "key21": "2VJTuxtERPRSRGZ8VHrAcnsTLNW5dUUrvRoRZwpKds8aDSLo4acsa3Zd7Z8RVLaLwYQFHmbD9wnmyJ7VWG9EZKvJ",
  "key22": "3ALFmhrcUoK6W5oz9xSdXqdLnLK7utciM3sFQHmQ3f6Ma3gMc5XN1vqgLMWTNRUjgTMgycUK647rbKfEYuYe7hEG",
  "key23": "3iLquQmx4Es4r4PUDsSgz5m4yvBxNcAY5jrNdBB23oKMSH2jRFSPFdW4DqSMT2r8TLCm4BFwZ2ELPvFNj1RwNBvE",
  "key24": "3jKVrzz6KMKkLm3F9LJNvB4GwLaaSFPfB8UPNQChQfdqXbMzxT3rF5mu247NYhDkogRDQ5bXXzByRdG766S8BRN2",
  "key25": "4xJs9K1btosaNkw2MhksVAYV4zCaTPq53xcQ8GW46NszXTeVGAarxAHRNV6B68hEzoLZEMowxZ5JZQJ4he9dh1j1",
  "key26": "67UwT6oorU4AXWEwBP8Qc997tr1tzrbiRyia7EqbtgY6WRCipNwEbNerM51vW5EtCASULSyQGWe5YtNxsLPhZ7Qn",
  "key27": "5EteMjHXM4DKbTe5yuiRTEUCh4uiDxbkTPtsMtArQ8pzDBCF3XxnSvJtUzabmGRNNwhEbh8Z3drRRh9Hpqx777CK",
  "key28": "z71iBv9M4TQwvzzvooFPx9UNiGjmpksbfqpdiUAYKk63kW8mXvkdkXi1XvCwsaFiTfmimuTyfi6o6E7A65qATnc",
  "key29": "4vkWmvE1Ge7Y6dCXycefT4QoHm7bJ5g3bxjNZaoMDKx9ESyBYh7opUnad9gmLPQCMf1fCr15XKwxzr47e38syYsU",
  "key30": "5RhphizHBVpm8U9N9DWDEGbZ8t5FCgDpXVcqRjFLyx9GwYm5p7ccUjX7qUyVwXs9jyuXYquMdtizhG3rtyYB8Cr6",
  "key31": "DbM416DYSgMdkh4RbK4fK3ft1M1emiMeKFJwPaiEYi5KMCJBkGzKdr6j3K531n665Fd4tLdUJyvqwuG498HKhZc",
  "key32": "429SbvNb4CuA9B8DoYgba9NNaat9jCREzn7YJ1pbLwTR76zXau861bZmsuZs3aphK299W1mjWgjzGDPmZVrXnzD2",
  "key33": "3U7tZnccC9P7B8MF9wfV3DNFPKf94nLp5rXdLj2mViWo3MapRvbaUtpXTXU1i9she1tzoENKpAh8GZSk3iDKetgb",
  "key34": "4Mbx7JfWB9Fqy7GAqvYXiM9gGEdzRb7jwMNJ9S28dR5BGr17NfaMartCs4eLEGSMa1hLk7BVDB7i2KeqiyDaRxp7",
  "key35": "5FaAR9YreTZLvWR47CtmsGVSjA6aH48rMiWmdbmBNa381e7HhuSycfcGE7SHg8YmKJkdwXAZY8mp9cuaUs6JEp1k",
  "key36": "4PR4T2T6otGtGkDXmo5CTNpxeEKqeDdwMrCvncqraKd1UqoZeLYz6twFfmR9fWvmUmDGDfHhFCkTZPBze9YH7rT4",
  "key37": "2r41ubU6U94DcsGaqB5bMEL6gundLWVSRmSD1CU2YFtMNokiLBb9mQKKyca2RtqaYVsZDebFSJwajGJWc81utb2t",
  "key38": "4eA3zefCC9MBqptcapKiiBRYWKF7jh5KLRrhNp7beYa88h93xNm1net2rX4aKihG46KNAC4YtEybuMchBgq7s19a",
  "key39": "SKJoua3LBh2a8uXxvWGG9SGFfXVcu4jKyyA7rBhqF8AESki38gL9Jp8ZSs2zbBJ28Ata1KaiTJBdRQBANQz35Xu",
  "key40": "4ZvS4tQBMhBXejFhP1yk2nxzCgdkiA7PU2fUcjoQvXQwQpZmzJfNWMJrdXWRFt9QWKC2XaY88bfjvZQEjzxum2kA",
  "key41": "4zjCsNzZBg9HAzXTCUYBd2vPATzcwRPyTJgyeQWHEvR6cG3yp5ouWC7JYEYFywSDhYtYEGVSLpSB4AQay6F34Mnk",
  "key42": "5gZENToWotdCudyzWuZGpVuHNzobbJGXX2XFaMah35koBZPu7VpUMcD8kaxZ9VfmqsjvDHxQjb2MgrxRE1Wzw5pT",
  "key43": "2HLuW6vuzzXBpDHM4da8Ey9T2z4YwKB47DGYfP4EZ5MR3GuAmLB3DuzZsTMwUo2KW4zJdg9NpJZ1qtnGLWaxAd3k",
  "key44": "cgPA9DZwFe17wtEEpWXwRP8cYkDTp1BYNPCK7UHxpjkZXQgJ5wkRKaqxzc2dpvu2ZmhiQwPcVg54HFKt6xv7y3K",
  "key45": "4yysNfnFxfaCtsBYnJhrun5hwduwc7T5r9o7WJK94nRBEoWxdvn8s4yvB5n8wgf8nafTsfFi6Yk3KtWe4jA2txd8"
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
