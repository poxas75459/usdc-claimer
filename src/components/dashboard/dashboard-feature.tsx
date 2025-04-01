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
    "3bgixGoo1eYHebsSdGMetUZ4S4EfXGvjpTZS8asfVBeyNwjAsFKrzncUvszKUNQghqpmLdyTGdx6YMT7sDQwMLfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ArZTHvnMwPMT2827tvXV46qujnqopR95JsAnKTDT6rRN9Y6ySPj232BDyktkQNVtxYei8iDa7EF6SF3b9kW9zbB",
  "key1": "643FtVsbgXj3cxr65qRCXDqJKsPYzW3VgCLGc4Tv89JvTQWvS9j4evVLtfY6mHaxNi6pehZs8YrDp4EufJ8ypQ1x",
  "key2": "4MjngMpfgZM7B62gJ5gQ42XsxSHnUxZMa7EhYeDWun6hoN7dHNZjCbVrMcDGSyL6nhirMpyfHDmxY5yGoJKjFhK3",
  "key3": "2PPKwFEP4d6GozfTL6SmPkhmReXZbavFkPK6Y9ZTRQHBd23q4Qz9w1mtDJGUca4zQffW42AocyF4ZxZ273aSFR4",
  "key4": "3PuCNG9KmUFYLSru3ekgLgVLLLShNr5LnVr92a7134LwN8AwcDZnYGEK29fHJFV731jhhMzozTwXfG8kktbC3ppv",
  "key5": "3u5q3xhCkkN1X2fiTZqwQPjFGTD8vrgVktQKAtR7YC1rf9rw33HWdJUeyPtpWYL23rifHD15j8hjtiwREDo5sbne",
  "key6": "mkY1ekvBgxRxmRGZrgXeJWKXXDDVnvuV3oYPhLWWDmpRN5bGeQV4FjwqmKFhbQ5B6HhuDH86Ugp4ESyxPJnMewe",
  "key7": "3dhDicZM9wC7guEeEY2ozseEQVLDR9pyGGW6nFV8U3KrBtbUorWFoARMQxN348qCFTDxoed4BbTLYHQ4vPf3f2vq",
  "key8": "JtvYJ6oXuCZCaJgL8epKSgtrkkPzQBeftw59AS4kEASaGqxk1fZUmrAQw99nhPuCnHQ6CWnjS91DMe2HDJD6JgE",
  "key9": "nbVAHSrEkAumYtxfBTk38T3Td7kEdKcn56YbM7ggsv8udPrJAngcTjCKPR7UWvuuaWJ9L5Z2g2o1f7ZGhsBTboH",
  "key10": "57VtNUJMzPwkbjMxQqn8zUDFSZtmuKW77oVWNdM3iJBfSjPSriuHNmebZdcHLsfLExLsZpZUiQ2NMyscZvec46P2",
  "key11": "5bzyb5cTUQxUCWS4wWTEtAh7Dw62vffyK6uwt2YoTA9vxUEYnDJLq8ELdHGzTZQRtuBVTqzNqwpqFNfbenWpRN19",
  "key12": "2s6qt5WgMRaxBVzURG5J8ngTAJ6deFr7eshUz3V9MJdhQxL2hNKoVuenHhPC1URJ1qAitNsoEHW7RDFSPKR5JTKA",
  "key13": "4vTCZfwnudFiSS3toNy7Qy2mEV3Y9XZXi9nmSW7dtemzJC3TBEsAbw2vfRm9J8T2ro2V3p9YtG4SesDPLwuXShfm",
  "key14": "3veBbjt6bJbb56kbUc91YZENbBA98f2J9JAACc9sU5tnNjNMABK6jfPkmpsUnszBwTHy3Z1iJ4nEFt9bixcFmcxh",
  "key15": "2iAqAzASr5BXQCGHh8e1Dz3ADAyrhnwK236F9cQUw7iyJSRxcS24X746ToRzXJwaPB8tZdUy7HLRH2RswnVbmubt",
  "key16": "4rKmpsm7tSbnTew5cCdvmc1j2Vo1UNwKnhMqHPA7CL1CM6siuwYqQretxnqXvp1SCnSPnpMVXwWLHG9ypiX6wyhF",
  "key17": "2u2rh6LnnA4sVt5jnjyK2mzBVAj9ugaWd6T98Y9FdpkerSYu2V9dJ4dGKsMMgXLuzVmTdMZ6Lz4zomPbfYi817ZT",
  "key18": "2c1ygF5JKeoRxdTnFB5sCYv5AHiYj4hJCtWeDLVPMHSftge3HNHL1mvYRPRpEid88nV1QBvj4j7hefHagf3SgmRb",
  "key19": "58KnJ36vTWAZU9gv9QkyQQszBPmsbUJUka5Jbcmb7FkkKLonyLM7pcmJKeA7BabQQQR6Zws9bo3fNjcXX2R3Lihy",
  "key20": "4bWdLwixrSMYvJmcx1wByLzJq29HJowzR1ee7guU5kkkCV7LqToaMMUsXgtBYhVgjwUSgRRWh9yNvi2RfvH8p9s1",
  "key21": "2dcDqUcjVMHkZLzZgHnswvnw4HLKbrjWPTrGaBYDYWAXvjkKFddgADpiByP4oX1v5MTvjr4oPjYfmg9d5RHhrQg3",
  "key22": "2e7je87ebzbuL41G1XaxDiuseA6fTogi9mz17pFvFcVj5qKeoXBQxT9uTyngiT4cQazfkqx9ng87TYTu4sKCpYkh",
  "key23": "5nr8REH4bE6p3VTsZu9vPi6EEsgYtWTqFMGAks59bqUacYqHErLySb2odxPJ2r7Y2Bt7ZP2eHdDnCGGJLttHuu4E",
  "key24": "5MT6cT3dXiPTVzj82dVkwLYdX4Xsjw1pdXZTiVsUwPJZXGFYPLDRsjSdvgY41PYV1e1CkV2wVD67zVjMx5ofbvVD",
  "key25": "3b59qwjsgF4XbJZvupWY73EB1PWq9teCfGPWkybaJjYrHmgGcXDonqPjrU2focxZYVuEUcgumDiuBxhV6jh7Wdxq",
  "key26": "5WpYktBtfxLwp5pk2xQnWDzxjeorpm6Qsau9mJtXujK17hkYx5oVZCKq7eZWnx9ZHwdZTuiPQonjEc3xL4A6b5Py",
  "key27": "5nj1HxLouowQp7bzZaZLxBuiDTP2CVrDThDkkwYTqNGCp5P6ibyhfQv2BByF5UXcHyZndyYfD6fdnc4AonTsUZj5",
  "key28": "33Sqbmg9EuLA6SKj3ikYAhMfEV6zS8GdHSihAzVxPanrjxwNeSV6oCqadLc7PA3v5BuLmsSgr2vrWV42JE1JmtB1",
  "key29": "CdfE3kTNQo7vNXCVKhs3DCbzqe85Nfpviz1nTPrZMS7q7Sz9zaQZK82Z6vGP2gXqgt5CeF9EfMt9ZB3h5mhiUBz",
  "key30": "37Gt1TYBcdvDdECQ1mMDsqdnzRejV4f5nNTvXpQMQUigmGLNMGNqUVmMBsUkvRcXnZ9iHDRePoAg1qfyBnuFchJ8",
  "key31": "4bY3tA5nfoJHEcyrt7tG3sVc15TLAg5QDFCgzA1dmYL8iTaQHu1h3JmVGddCLxfwNfAck2EkFN1Lj8RSBHS7UvAh",
  "key32": "5vqjouutco6oh31k3cxWgFZHxRQdmpUuHLtBkwSk2u36NqMpmhKgwkA8VqAT1n6GP6co6pH3ECYddNvPwKrxc9Lg",
  "key33": "5ndbqJvm74cfhjGZxkRPDS8pK7EfTXDxFA92qdnyfouWC4E49yqUwnHD1c7RMUJfSaDpN7Yv5PRfVrWtBXVQTVzF"
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
