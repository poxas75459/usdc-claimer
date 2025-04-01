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
    "3zevu5YYxNuVXUL7GzvBLbGLagaHjFa6WfzXMhWG4RcKjL9bDWrpLwtTArH1AR3zF2hJcuPsUJ4hYDq4s4aeExBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "16rpjqYzwFkztW2ueBYLD461LeB8MkuSdBXNkXQCxknzE4UNgzNZZRDUGmodtigKZpkp5JGL6A9vQX8hYDvDoBg",
  "key1": "2xq924odnaE1ck75yoeobgefWCbudxR75juR9nZVeNzap3gzyp36i57jgKBkMTRJ6sBDgs5gPY6Z6ujzkNVvwGwX",
  "key2": "5ZB1xJTCcdJgdpLMnao9SGRHZm3G5VYmXsNWQDi2yYtTcWpND1DybSzDVnPuZckT1HiNBLjxFP3rmyQFxZnNBZAu",
  "key3": "64rQGbidQcvg3DL7fdXaDPabiiGA27ZJJspv2ABtA74t4oJt472EEFCn4ipncBWk41KUL5jE6VvEu9MrMp19XnNo",
  "key4": "2yRAHJf2S52jPmuJrMKaQui9FzX4C4Y5VRgWsH7wj8qj1Hj1zFwjaQc1MdLayjHWiqWedmGDWaRfWrS9SNcx5c2o",
  "key5": "4EdeLxx2nFYAFGVCteURxrwwfM1zu8uArG9BGpNDzM4f1yUbntorXca4YqGugVSeNVrcoz2P61squaM751GX6vPk",
  "key6": "5wv7mLkWxVRvwPMEJF52vSWnfBpNpQREbHdpDkJbpaVVJ2oGaDkU3VYLaUtMjZmKJ5KEsWuL7NvUY1eWKLrUT77N",
  "key7": "46VhzNeaXMqcQ4LBbpVp7ddsYcRuHWcJfJZBXY4HYwmctLH48yEsJvLHJcPaXWArzfbgSwwbgUYuDq8R1nWyZcQP",
  "key8": "3C1BbEMNGpGs2jXBgGLfKD1RBYX6poJBPXVnvmuUzahtj5R3waZpXK4EprDQo891q9FDDnR7WtRFbEkgqDCPWJrJ",
  "key9": "5E5jDr2WMQSfWAY5dK4fXyRXvSp7bs1xnMA4MJFDBbEJsjfDwWqJTh4VcYjQhZAuByX8c1QhjZktNJBmoucLHK3d",
  "key10": "4HpexXqSU36DQp3SaieQ3tvPJ3AHnUovFfqjPLbvbDvEV5YYjGU8G55stUJH3gpBYJ5pv66FCgYR8r5RiyFpS8q3",
  "key11": "3uzZu9oa1QqFPD6QgZV8P6ocYrzpM6SHm9qFpRXLdgAQSPXZGkfDBnN2vFS6Rh4486E8MYtUj1tPjiruagedh78a",
  "key12": "2RVKAXiUuejESHWhT7kzYGriAR1eJtxL6ujQS8h5hqjse2BDskvjHSiEs8F1v4K3jER7KrRcSBcojBiXyh9dMGtL",
  "key13": "3hUVuLfd1oCJA7UsrVdbQfNYK7HCqkSzMtH7MmLmbsCzyyj8mb1VsVgnuN2eBaNLwkshgfPTeVq9N5JsYyBDk3V9",
  "key14": "3bC3WLezmhdwx4hCYpfTh7BXLE4abTNzLScRqa3q158X2jQ9k89R6goQUJuWAmNZKMnnWX1r1jxyP7YsvE9nnuv2",
  "key15": "2PqnbT2CAAbJCoKPDzjyPpVQZu8mCSdx4AHg8Gddsosrvh6L6xNBiqfTdHax6wGmAEGW2STX8pLPgg3h4TibNd4J",
  "key16": "4pMb3ztFN8yom6zNNpzr3dSHpMviX9HH1pkPHNSAbqhTrV9dkiJRKG6uu9xrT1d55n3ERZrrJoJ8JpzprVzrWJd5",
  "key17": "SWzbzSiThuSj7xMDs3VWpj5iSx7gg1FNfidcU5pKZTJsTxhGkTa9gNfSZ9KiJXSX6HE6fC5XQKRBycN2LWic78C",
  "key18": "qXy7RU4yNmPCqmyZfpC5uRqUs8vsiBsmta3rumtGd2DEeJA6xERf5YamK3DH8LQi4uWSgtAEcZhaw9i592nZfKQ",
  "key19": "2BcPwYGRzgCsnMP6uhzBhprtR4FpPsENhg9zZJ3SGZyWdyAZU8Cv57U5qaRTjhf2nfZYV2h8vT6i4RMQ1vjH7Kun",
  "key20": "xYwPTweCXMhQYy759faUoumDpsKN6MzsTuLBaZzviqRoAoqPNRCP64b3aqHAhk6sogzr5boLJGP2TpGJfcYtR5W",
  "key21": "2AcW34FBEk722Jhoyhh4ijdyryHpP2yd3TsP1rhbum9JxLGyB7FVA4J7mbm156a5E6zCPs86bwSDjPtYwgXWezg6",
  "key22": "gwpsUgLG1ysLB5xAr8aHYDBaCWR8WafUYXXYynYhpUZdrxCJA7WP2bzrE5MpamsM8d2VKyAZqfJLf2LWLhhg1RT",
  "key23": "3xQTFhoqGUPKcbRGw98oFKaGzamjrihBrvyDjiNJoD2z3PLHXN54QkUUhGJKaTYEx4L3DceK3WAv3fe5vMFSEPyi",
  "key24": "2SKZ42UPyHH74uP4w6G1ZHS2kr6GnMhYwk8JdcPFLF9Gne1n38eKNebNz8b5r7VKYnbNwVJQGFM5azS6oBCTMeo5",
  "key25": "2e1q3U9qXYJAVMCsko4sXiAPWP4Eze7oeMHurhSymTjcUxQm12ZdEu52a1iATCTtTYJeY3qcfqcKVR58EphKaFB8",
  "key26": "4JibVuNoMnmJY4MKs2k2QhWVF4v1KhfLiMuz3rDPhLww4ukzT7BWVw5ZTJ8Bnce4qUaecBEDhTjg8W3krskGX3hm",
  "key27": "5kFRLiFjiv6xMjA2ZQvQdTQRrUa5rNtme1MFPeU7jGixv4Uj7qhWxo8h7FMyA2NAujFTH5PhzbabyqYUzLrdaZBP",
  "key28": "4nkV1v9DBzzMrQbWeo4skpYEMrmxiLVD5yrtv41qyouAGi9PGbWEjt6NkCnR2e5Uou8ZXdz4wqoaH15uWXAg2vpJ"
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
