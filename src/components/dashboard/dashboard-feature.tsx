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
    "2si7KTXuVia2RCpU4hBFBHzopy7sbVwpLbALPESKua1tNsZZN4XNUBVj89X7MRdzTX99AjoXRWFE6R5emwS1gV1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2ZCz4ByrNGswUZkhDmxRPZQfZp4Vnyh9x3gZy4HYjgVk2Nb5EZQGeKpP69qPREerB5aXvJfgME6DaVgaQXHtZ7",
  "key1": "537U1E6rRrsYo2wqEBruNXYEkxoaDKPmV73Bc4G2H8sCTDX1ZdeukCRzDj8oHMB495gtuJivPCzohr1cMDE257Ei",
  "key2": "62Xqk3qX9mSRFFaSL9Abb2VVCJBYWUEXaXxDX9HckktKyyXAxVgdGH7v5noSVCNNDtvN7TZjmidS2fJjPPX1YhzC",
  "key3": "4anXJ6HzLxzXoRHZ24mvgWNFWYpqGQD5TsVQCEfE1qAAiNKjkeF9n42TcLs5APuggySsNCZdo8h53hdwHG1dLam",
  "key4": "2MbsGYsgx3sFbcDqkvQsCTvfMKBPYZMCDpZVZgpPtk3hyBZmwkecjcxgrAwucEUPQ4H8VUVBJqF7cExA9iq5KCcK",
  "key5": "5nAW9qnzmDGxtb8DtK3JFbuJwya5AuFeJF7jUNzS5KyJnhauwT9YFhaSnN9kZ4JsDpKmd7jVR962EMArq1T7KCSV",
  "key6": "5Seb16Gs6eJpbnmnELHVsNdQdAq1sC1pWo8NcYsBXNFWds3yNfhx4Jah7VpiMLfT4oANsu8tovidz4yA2d1ZZhNk",
  "key7": "4ypeKmJyDj2vgRYoLoWQTeTUER17vt3kv9JCKsar8WvpyUr5xDrbMYQpsw1fnhJqb2GLhKRNzVkoKZHFtn6Y45P6",
  "key8": "3zWxTNWJfrn9yVoccgnJD6tzyFFAKgohY1WCPhdLMsjzEzZwJvcm3A6GotonynbG8612PJvvEQDdkMez2dHfQW99",
  "key9": "4KAtRh5T8e5o8v88985hZuoALzY7dxRk3rdTvDzP1RED14rqCt3o25GADTRwcVHa5rYd2oahUUd8iqn3gnY7C7X4",
  "key10": "c3Zx7E2Dd6rkQEh4L4ziq57yg1JNadgmXwH6zKhcfotuhwTAHPMva59rV6GynkiexYdFrvpMTyYibXc7uf4SSjt",
  "key11": "4z2Qpw8zdZZMashkEmp7tFKT84iNQhRiXN4pacHfXgAY2vzhGTs6hS7WW6Vo7c9kxm8UM1XvtAs5JNZPvrTXBXmF",
  "key12": "2nJzSSz3obzSPxwCbudWuhJrZBpgJDvduaf4xpdun4LETxzBzvvq5StYjnFx9R1NjYHXQ8pa25SrLCPAS98zy2J4",
  "key13": "3bEXqvfhNKhNUTr1YnwchJCM4Sot7YfruRBWXcbvpzsdWkXezJcx8D78eDgUrvRp5b8dj285FtZU6ymmDEZ4QrFx",
  "key14": "3LkTG7g1XdPMfpJhG9pjUMfoZwT3f3hiJN9WgtTue7diHeKjygeyJt9rR6AvX82hdV8dL5FVVwzDzzQTe1FYZ83i",
  "key15": "4QXCTyk5brmvYhVVVueioVnRKadsyHdkcgxKLz6atynP333h2T94PPtQZwVhag2ENe1JEZi66bpYPZivbhvDm11a",
  "key16": "2dr5wuajKvtytYhmnDuHopJjSbfDFgWM52xbkeoLRNj7MAUWmz3z9owFuqnpN3SV39V2wiNMk3DgAJjHkxNdehzV",
  "key17": "5wD8Vgxq6mpGjBJtdxJYVeBrvsg7VRytBGSkRp71UKi8kPtAC4mTDyJSFmcESJGa1ca4bKsThMwd3okHUepVV2s7",
  "key18": "4w47qej7B2PfQpj1796yGHugxKnasFthaQ49FgcJiRYy2B3EwxmFcj6f29YXDjuS6rENZ45YAkXANijTTcJS6zfJ",
  "key19": "3UM4XCJef7m5ie2LqfSbwKcjLaBoS6XzgGJHwsXMFActjmXRKzhKJ7MvQ9ib6mcAGhdMNFufrSmZAzgoHapvkavg",
  "key20": "3ipYLgSP7mW9BoKwvfyYcHpYu5cUd65bAqHQCrQbHDzqw7Qks3g9ZNJEvH1D4bYTPz2DB9cDB4D34VFdA7QgCbRh",
  "key21": "3zFqD6tuoyQHUsYyEP5yocFizRvaGUK2n2ZfipKbc92KgAbti6kCiMdjCBGQNmTeftebt3d9t8AtqnHHuqJqFfTr",
  "key22": "3a3YF8mg27HcznZudqRQNYtDxagUnk4MMqsuTajPtcHJrJGswyvZrisiDDRLAuysoKCE1YwbTCs2y65RLL5m5933",
  "key23": "4rjuZYb4kKcXRwoBi5HxZ2aCZ1enfsWkvbzxDiWhHgPoDHgB7wBVoVXSsgfaU5MTLe26KbW8KsZgFduAJMqumbP3",
  "key24": "3dV85tDVdG1PYE59rSZvj7q1kbF67o2tMJAxiAvXMYRgKzuJ64PXYPRzvnYX3Fxh1cedrqpAdhVSp9hgZjg3JnQn",
  "key25": "5cMFXMpmB9aYSJhb5TDuRUC13hKeNrNJMLTjyrQCzSPEjCwdytFrb5sdQ62b1pdNsUxYAdiFphtdr8BFfhNuvGCu",
  "key26": "3UGvL6fb51k9aqW8472fKEBkZbJtDYdFaPJCGyMqErHSrva2DWakM621e96k6McZL2CaHgLhM2X2UBXkvkVrhDAR",
  "key27": "bcSGtgZrcYmbhQ8CM4dj12fD7CvfyQ5rXzdzyYv9Le1tMjkHNDg2nkFG6Ds9Y8CugU2FFxS1wG52jVgSsqA3D2K",
  "key28": "3uGY1vYSqb3Rx52ct9zupgXPwDP6Qhvgj5hVy84dFM91jSGBaLcSWEMCvo5GS7pq2W4id2JzDVgiNtVkBUxe8TzU",
  "key29": "3GWAyM7AF4EGJ1Y2Zc5ZdwwhNyALWwWhCg7EVEJAU5Xm3sdeW94pzshzPAUifqTMa2YeNXZWX2dCYyzR58NCNSTk",
  "key30": "63mCXYWHQyFPBjG2xF4H5ihyxJ2UbcT2sqJyEbPTdzXXN9DiitLL8PaGV3imWaxKYQrq3dDHSXEoUAxZoPwnY51H",
  "key31": "3d9pqy2AFRDc13g84GHD59UCDThHZQxV2cLswEEidiqz4khYwktiktj8Z4vAwR4huBmxqxjMX2DAZuBzKT1p3eHD",
  "key32": "2hKKeZHZQoaW2mhjuuaLemcfo2fdVeatt7YWoVCpHTg9aUCMhRZpfEy5wJSBEHkad4rBHA6PzAD6pVsH4grGjKpf",
  "key33": "41UYU8z93Y9kvLLkvvQUMf7STDUNjuTTsogdxRe36diaopkcThy6FwT62Q1GMLqqFFsaeMWe18mWtNdJ5gJsCM3h",
  "key34": "35Xxmn2Vgo7g9GJ1xPrPPSRD6NiXBjRqsunuKfaHuNwPvHx2fx9npDZGHfXs8hEW6deKbbRzFe88pg645HiH7bqx",
  "key35": "5QHntQwm4wUHpBAvgMQX5x8Srjjoofp3tNyWNdhNRpvh7cFucFfY3zWppiWRKRGsbByThkz365aZskbrWBFXqUiS",
  "key36": "4qUFX3GbmxC7pGvWxbqRwYBD8Dn8getEggCZuxbwcjW1z4RvMfBUGeJVbbUx5To9pH8bNMHSAt3kcRtEDfqjvWHq",
  "key37": "XYpP2A1Kvph3nJhJKsVFr8jg6WBhHc4vYWrkaufF27r68FMX3FoKxyETLMNxZe3UpXzmRK1msCCDNUJAqa8RC5s",
  "key38": "5cYMbCyLDX531Kd1yAawcwg6M3WBQf6J8oHfSbJoyFQi9gSapo7SyDTeLTTZDqCLWWpqJFPhEe5mbhiQeYFgaGTr",
  "key39": "2uEZfCJcExjruLh5BSpsLt77idpEoHdBsGXX8TyRN8a82r2n3sfPQdXFcrdGdddRneBU3J6YhDhuoDNk7puwaGLb",
  "key40": "5HqUN8uYMQcgZbQjp9wbgj8gwav3RKM17PGfZTpoKXi4vyqvdNLiFRnSNL8KECRBAtcs6UXMk6QN6tpp6ZqCRYGg",
  "key41": "3NiVK2dyrXsoQxGjhs4zmrZF5D2tXmWsaVRowUzFcUm2XGqCUfNJZk9ETS8wcsvCxwybgTPs5vee8hjfVaK8xC9i",
  "key42": "4WRsKCL4L4eyyqo5MD3hHsSAyUrPV3yxBn7xbuMZX8YVpksbn5tQgyDjkUWb21B7647WkyqDo1dy4F6pZ3hJhbvK",
  "key43": "4Uw9Zm277VaKVnAYR3PywXsEnFUAaSn8xTKWAvFzNnMWP4PFuj4tfebER2GRKw2HGzd8esZsUEWLmNnLGZ8XxFA3",
  "key44": "59TJH3eVQgitouDKmWMK2kE74KbPvU4y7VdgPASyhC2jP2ZSFDa4642vwxyUD916pTSBSSTKRzQxo1xVMqmkYosM",
  "key45": "2MR5N1cGxt9MuUdE3DrqEmTpqGEC428tFgikgBdfz8owRQxaKYjDJgowmBy9EdQnjQo3fj7bvXS6tSSkgZkoWDk2",
  "key46": "3efa2yKcKg5dkyx9h3QECKKP5ziGgEL3d1bL3bfXQACmaq19pCKj8owAgSSQfYJYao98vefkqrw5XrBAPyLjUz1M",
  "key47": "2vPcAFWijUt1hXAj1Re3mm7yMBiutqqMNAnibhK3iURMpbKr4pajEvQae9qWxat2zGRwRuW8LwjHEnHbBeKCxoGv"
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
