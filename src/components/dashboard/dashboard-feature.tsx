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
    "27o5BcdVddRcBwYsupG28DjjUJemhT9yU1SfeGhxThnetwTdKBLzwGpLcC2KGHPPA8oTmASUNP7wFXFg2f3ceayC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62evBEPmvCRFGF4MP332DXCHYJ8vEkGygRtQEdCZHh5WjnBXoQh1oHLbUaem2BtfPvxkXdVSM56m7WyoKkeTg4eA",
  "key1": "4rKw1qQxxKEGDLsj2HtBJRBqTbA2BJ4nqVB8X4xGMZWUGLgqefdtQVLueEKjpgHn2hWaBuksBgi4Ag7qXRGzyuVV",
  "key2": "kmVVCSZKE3HUGZZM7NU5x6w8L9JC71mSCE5NDjnWDVWBpk4YQeJ6E9GfZkiSjYTGoBvppareMJqvMeRJn8WQFs6",
  "key3": "5xYWFTmxA6P7YZH6HubRHX1ucxvwrc5So9ymrx6QjfUK2tXVvD8FmBB6wKbCRNbwGfyK4zv92M1PAdb3zn8FKP1d",
  "key4": "4VpSjpai991New6ZgwWFhDGAuX6TwY4MYL5EvZqUN3XCy9CrDr2oMVD1SR4hzpGmUaBbF8igjcSRVgu8wuCcmZeS",
  "key5": "W2JCz8TnYN3u5nA9oDFgWteFwjkpj1pjvx9eo1drH3TTiqZAM4AACXD8d8YJyjDyLngJ6DVbTtggfbmxU4uiwUu",
  "key6": "3o3CeryNrUvJYEPgZLHeD5tAFEvjcEXGyE9BPxJNrVAvAsVCDdo51DZvzHQg5XdPnEFUSiSezwJzUzyDP8JvCxFn",
  "key7": "595eUYyi7ccyZf6umMr97Zw2KQ6LMDb4518oSmmbf2Ct2ksoBvmFGaxuhePYuKa1FNo3wsnipd1rvmT4Qt373XkV",
  "key8": "5hfVR2Gw99hirzCgiSbh4MubcDQwfan6f4XtKzv6UWTH1h8JeeiwwLHnETgZeQ5TnMoTVAP4THiCNwixkd441wwq",
  "key9": "2o41Vd7wfBR1sD8DyHj2TmwXbweckJLyNpn57b559KPYg8fTHGSgQpyGNDHVPBUeTFugfDi9bVTVy5YQwovJwM1S",
  "key10": "4BqLLHpJMrFytG836VyWMGkPrV8sCyzKdgNSWrQhV8A6xduRnoA6wY2pA9thZK8ZU5K3E9NuFV9W8LWz99vQ2Bs8",
  "key11": "3DrZWkkb8yFzgyfoteBYaEBB1sFzPZr8KhsNffTQV2ngvboFKsTtksNj8HxonUbfVhMC2haczpYWkU5zrdKBfGxx",
  "key12": "2TDu1KixmnaApM6wSdjbTKepeDCRnQuJeWeuKt7rstbqBbKHhw6d6DXX6et8tyvm7FPGi7QX2kq4oY7ZSuT2WshC",
  "key13": "4yUUPW9nrNa5CuCinDcthYpcPqrdK7ZioSNmh3m5dtqPtSo2pCbrVTjPPqxW9AfFDiJ4Spj44jhgX59Tg8hoPD4v",
  "key14": "3PKRT7mX8Bxjx18XoGfWHuvGYWaNwKe41Ym8bfu5JmiFUBaAE8PwRPJNrTnnLEdmLu5Vz5ezy8im8k1c9M5fAowm",
  "key15": "YVzoCqKMVReeKcphBJXKS2fM9Lp8x8UEFtMVaxsSmcisouMuwhSNkNcvER8NHxExpQezmqHsV1TEdiCKQHbyVkV",
  "key16": "3PpX8dGaYNAjBxurSVJ9Z3WZeyWSM2E2nzNHTUAcpi4HrJBqT6XJR4dGwUtweNeWMr67F17Ww37wbPAtQsmvLRnH",
  "key17": "2AYNjAEp7gRT1BAS7qFZ7HtS2p69Rmud53LdS8J3X66cSzwJ7zAfrcBGE2xWPMjzFXHs7qHLeHLUo973kZHmqK13",
  "key18": "4GeSrWyPjAqvkiXg4RjZqvgHN9wdKX72qqDEGH9m9rZPEM4q4Fo79Dt2mreuca3uCV3CwrXrSbqFmz3b7FYa8szx",
  "key19": "haq9Mpab8HVJbL3LDZAes3aVEDi1mNvV12NN4GMF74jrzQz2gGEgwFicZk93bMUTFaeLJPQzmzHvJMZEr18M57x",
  "key20": "4s8oGAGoyuwcPzsvorwnqrVFfm5dVfQsDF91vb9bzCs8JxLdLMhHN4pkUPe3gZVdWY3c89UEiVcKzujfsbNAwpit",
  "key21": "4rEj87Eh7BZEPVBv1SG2Kbtc2QuPFc7S3iNZ7NF2aKhMy57hW7Xe5dFevqHLeVzoJXxtgtcQ8w32ACpvqGYPMAjN",
  "key22": "2utxJpjRmq7XBAMsPuyBxV3H7LsC9uHYrPyJyLjmEtuBw2XxQxNCcQpNTNq3v3P36egjMQFhGtvGt7co3KVwkUrB",
  "key23": "om2j78AxMTmK6DKmnkQjKBV6dQT49KjNNkR5RyEnPWWs7M6tr6ee9Zje84E6M2twai1A6m4z1WLgGqhR8XBqsb8",
  "key24": "5oL5EZfh7XJLeCUQvRxCvJnguPTmdywHFQ7wPP59bFMxKHqXxitftiYQ6h6vnKpytCbu2FKR1CGA6fpBHBu2t9eT",
  "key25": "WRJk8tzkZb6jTgVs44GuNsNK2z9LYUbWJDNbvFoWKTxzwgafXyauStwRy15Kay7hmqkyLW85aP53yXeS3neCF6U",
  "key26": "576XWMi9QoqcFUUmQfJ7JcK6cqBMdiP7AovpVujSMkyqAaM4GmVWx3m1K13RHZDTDjUYarLJTQYWAzJmfckpwpKF",
  "key27": "3mRvdi9MLgB6ZdbjumxEMjbaDGcdp8UziQmQJQXK7PY14dqZHHSn9N1Am65HsgKgmKwzn7JgLNXekjsAzqtccytM",
  "key28": "4oq84MqH9UjtGgVGMLkvuPT78ZXofheBx5NnRgEBwE3XrTK9n9RzUdcApiG9ShbppN7QRUAB1ukivkfeKy8FZrzC",
  "key29": "5HfL86ZVENoc2YzKEnFRt51QW11vohtgsibvmAKxwecH9B3aqhZwhKxUNeDC9jTUzaBdQi71BMuQruCFGpq6DokV",
  "key30": "9AmNFCWJKndJptAqsZG3W2KfuGLWShKRKNfavniyesaRcVKPhKDWeYEhFp2EXyD2KA67LbKkoiMYKeA38e9ac7Z"
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
