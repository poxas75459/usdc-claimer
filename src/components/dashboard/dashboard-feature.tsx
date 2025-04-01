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
    "vRpWvNZr5x9eaC6LnZdhHZrDrbUjjfjJodFaVWQYw85rstXr7Wt8yxUjcCJ28ZnYPVoriT2GFSyppCy3xrtTrtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PCQJypNoJz9RX9ziSD6tTgtPZgTScoSyCpGy5Qw3xgABXzfX4rAfWkHA9wwbCJLG5cQzmhZ5d7Sw3eBt38PHY8",
  "key1": "5dkbZU2vB4gnqUSTxvE9KjGEDv3B2cBN8JT1TqPWV86zsAJsJJELD9rjSH1skbqiQNZWfrEtCFokwpsBxjBdwvCT",
  "key2": "4DrmKVrR1vVgyKj7vWDR28zEbfnqopnNbgMSy98cU35KC21oK2hWUi6dNd72pEj3m9AeEPDiQUBAk7MuudWmbyYS",
  "key3": "2PPn1q8mRuyeoKJejPEsGazwweiaWzDjzuoAGs9jmW6pXxysBDAdVDghA7Fku3rYDHncPpRy8HdRgX51dgVgb6ie",
  "key4": "32CwxJyKtk1hDehCpDG1TmcvoqQeqoz6Z2FZwvJ9H9xKzB6y2tokU5qU6mXQR36sHvTDmWZfsLWevEmaW53u6hT6",
  "key5": "5YWTrNL6B75QTto5mxCDpp2wTMv8tkwRjakvfMhN25DVpSgs9Nfkj3SWgspx5zdPbpgjNUcjY6RwP5JyuqZNDfNy",
  "key6": "4aP4Jh1A1Wytmh7urHFH5JyamHMCurLgSGK7C6wTkk7vtVfnaMT9PHBT6G7RyRZme1MVesdpVUe5smn8fiw5vGNN",
  "key7": "tdHZA5CynuEk5LvzQ1kjGwzfn91ib7m2G1TsBQgXLtpnCti2kYXMzsnN5Aq6jW7ZGUPcvwfZ9ZQXfSK9UeWzi2c",
  "key8": "221DmLKBj3Rb4AgLCcX87v1RJRmdxgzWgfDzqf4GDuicFB4KYAoyJ1FpLc8vTa8T4NfKD6kZVcZnr67Kq3BspCv6",
  "key9": "5NEJfzGaFEj6fSgeY5W5BaE5uZKn1i6ysPqzpWygzFVzcmZwTmofzdx2s1fQoHnJb1gx7jtycRfcQ2mok4NdWcUy",
  "key10": "4zsmDeEuyTXA78VfgYg3NoHza5dqZpB6NPTTXkhoBsAAx9kmC3jwokESKQhs9MAY2qsBTqahYM4UJS9Ne8XQrwuL",
  "key11": "2VLQA1zBGaojJB6R6fS67YVxBtBAXRtkbzn9r6NynjLuwPBnCod9qfz7SSbtv7235P3rNsHEcHjkk4u8P8RS1ANC",
  "key12": "4RVMjbg3b795mDG7KPGyE3SzE1pV5ieqCDtAL1CoT5qQpj7k8moBPxkdjXNr19AxFafHSeVrZEXGvpw5CcwE6Qzh",
  "key13": "4VMzFjNiECxM2UbbFg78RbeSPsf5B6jUEy6ftAecFspmiGCiXdDGx1JYDG2Vq1Urt2NQDTg1o6NpQRrpKEeLwb5P",
  "key14": "3uWKMmLFtaiokezXrTzFVWKwC2dRDVfvbXwW7grCbys65E6hpjvTpS5jR7XK3LuMps18WUaDMYKb5T5qrG6V382n",
  "key15": "2ueRDzJUxo8GucJy1zXDxnJ69ghbRRAx3TS47RGsQ32wwtbBbv2K3fdtbqivkoWAPDRtpRNDGGYYwXux69JvSPGR",
  "key16": "2k3Nd2SrhUDPMe8V2pYMG2AGadh91hyh2ckNuk3A49XKos5uHCgxdj7Lw4gTNGFGwmEqccDL4K8habYJHJdV7Ksz",
  "key17": "5ijBUQfPgUFndGHmWUJBkkyFugtZcCdtxm27k2aSeUzxm28Z84EmDdBoa4JZSvRvEDNcEz9k8Qri499m1QT5fCim",
  "key18": "cJtegCHoAmhaCEEJGCb3dkBcTNpjyyhbxGdbyttHkReZuqLNj6rucaPUas9ABhdRvZJtA9FLCN3rHgmSwAerv3h",
  "key19": "4hcdDP5TkKbqJ2xysTLWndaKuZQyq3hbu5jBoxYFCgr5dwckyoSJjrKpprAPsyoPrXV5vwRSBnZarsgD1ArQeCm8",
  "key20": "3xU8JjZ9CQha3DaENKmAGu6Y5FEWAjrr5VoctqoSnimmdPy7tvRSAyhtLS99JNBREahGVaEQPbXuHwQykubtu1Dr",
  "key21": "3eZfCL4inzMVy137TWySV7vfRQGodEDhpveNWp3fzFS5NZ484nuCUcMo3D7aGm235MdukqXWCFaP1QwZaJtrhUX3",
  "key22": "bxQ43b7HrZhA561EqoA4PSdeJWPfQ8uv3fBX1A2RWhS1ZWLwxVUfoWPywD9VBdKivJvmiUBgE7kPzZErgpNChpn",
  "key23": "4nsTNWivG335qQoKxQoGDUZ8rMLv4HVSbVDLKcP2UU3pWpy2kJDCN6MLv2Q2Z9twRf4b6nApt2dBYXE3HRERLtSB",
  "key24": "3p8apLtL9Whhr8BYx5TRSXa6gKeQkR6nLu6oGTFUKacF59JdixDwZR7dZZFiEU8ST4EKmThr5A8GBrGp4uhAfoMG"
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
