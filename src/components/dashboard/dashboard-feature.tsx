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
    "N2Ui1CVuauML38M4hcZxu8LRSC4S91SaHDNw7UnpcTAq6bqkz1CBExmW7FEvtnjzrs1fmjWfua2dKgNFo3mAcgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HERB2iJaHbzoTvJbPpnnLXftgsfVnieNzxART51Vc83FdUyhwBiyiYNvZum4Erf6Jj6eVXoAaQWDqfjmbHiGsyg",
  "key1": "4ZS5auoMb2JLbZHDsNQsAAKsQzLVWsMCgtZ73zfoAkJC8gHaTRb43HZirx3KsF5fNvo64gLiNC3949t3uEZxFADf",
  "key2": "4keiP2tptojiTFe3C8ZNMnMd3N4BKnEHZ3i3Rtf1EnFz8wc2LAcnkSLmBod9aK3rVUYLNvyJxFHYkzQnNHi4RSmX",
  "key3": "9wFVRSRy7MiqrEgCrAfYenzb3FrghRPkPQEVVDgbE2f1pxJ54164v2GVqfmSctyn4VgUrKvhK5gS4eeXwCWzK9W",
  "key4": "Mf2uMLjqG1T5dThZzy5nmoKUbir8KytdEyft8eMkJq7DA8QirWLPNLfL9Lq6cRCvSV9uKa5bo3wEfUNfqwGsVGn",
  "key5": "2RtKJeSPpaeu8WU2PvdedbN8y1xpo3qRGFFnbL3HYWe4hNnRavupjuy9PBbvwbpZRT341MuhHjL2JMyQxMoK99of",
  "key6": "663G37CQmGR6Dom9ueUdSx2xKmQbX7A8VhiUvUuJ9PDCLHKNmf6ixTGYjAWSAbQXnw4QFw4KkU7PxJ4hGSwbQyFt",
  "key7": "2VobVyCzKAM9EZQbzr5Nz7fUDjHSz2T5dfbW6ebZGpNJzAqpYFv6PLB9Qd6LxEb4Bpzzy4EDfnWkcE4Xp2kujkgE",
  "key8": "54cpiD6Z312VDaeiLMs3qypiLmA4cTiH1C3gbNTvyNnWYrFvRjnL1qoinKoxLeqCDy7jSJbZowEcJXP7GwNpP6Wr",
  "key9": "3KsDrrAbBWGpXuZ5ebBz7NG6YkNPyphJQqyFLacpmKYsnaAC7NhneAESMZzLFb3X9WoXouJ6xMu9qkv3Y5c1h6VU",
  "key10": "3ffAKi7FSyy9RL2dwi8cfDMx91umzxhTZseuYFcDuhLo8dLaLeiqeUxy5qRd7ZEaTWSUeK7MwtpVQRohs47Z6HBe",
  "key11": "39TUaRZzfzCZs8dyhAWtCmrXNs7ocp4yAX8XzYEzQEtizZ9FDXuRAviTziAHPti5AkxgotuN8QuVg8yZxv4CJy5V",
  "key12": "2n5SHUZnQXaHq6iKpaTTPpbXdBJDr46Qva2Fi4Ujfuzcnk2b3GNHku1roMtxhXjUp5tiPa8aAKHJWsTunRSPc7cA",
  "key13": "2BhRLvNjhuhsjLJVoST3LVNTxtYQhv4qdqW7QySpKmM1HLe4wrP6kqmt27iwLx2AzV7UNYqC5MMV6PHRxDxEeLba",
  "key14": "3LKM6m4wG6gkv62Y7hq9X1jc4iyWFDZ7VShaDgME5AWFg2XnbGmZw8U7CVb4Zq21r1vZrDNjHzcAgamAQL8Ty3jn",
  "key15": "kYJLKZuJLi6aNXQ3vHrS1dECYALAxxng8A5o1wZzTseNs3pGTMTsTCiDXPeWB3iGViYs7WKJ49qHsiKMqxmHU8J",
  "key16": "4ehKDMsSh4sWGRUU9fFk2pEHN4zKN1S2cCpMsi9kKzVP6vzfSBYjhXXNgVpSLwQPSbWhz7i9426jN5Ju8CQgy6Rg",
  "key17": "4Ato7LpWwRrcAfiRVbst5TJ8zxzXsLJNKHdQAw86j8G9W1WpvWRuBYzEe7x3K1tDMKBAN8wC5Zy7eGXvkvc9dEB",
  "key18": "bNdKB4mqBCaWuynYVYGGyDQoYhkxFGaP9EtS5BJXN3XdcZnB3tTSpP9dwjEJConFQtKfT4kWP4guR18S8MQXbmU",
  "key19": "2aAUVXi9RAws2Y1n1m74MkqHZQKeH7ZKCKQYxc4SJy1AwysTMUF94oWfhoGuMyJv7nSX69te1MWrCTU2tqg8GLy8",
  "key20": "cvVBjVTXYiXLKdNMUiG77arhBK6czri4oNqazFuPuLCES7fRHSAPPE5fmo4DVc5easfGEkxKpWcK14pDQPaUjvu",
  "key21": "b9pvhhMCSxXjuU7SDwuxnczAT42finRmkqqoT1XzaLRM67qW6pmLCeQPgsRh7E37oyHWXCTZTmqgt7h42xnvXPC",
  "key22": "4qriFEF61hNKLaWPmUojXkXcQPVLhj3Ks2q1iiiB2b2oRvkeLdBFdeY9nwP1a5Co8QYDYBo6AmdbJyz9iAzh3MYm",
  "key23": "5HWhrm5YBp4Q7GEstKRZmvQ2e5TDSm9HiMS7c6x9sBegzpoDq4rvH23R3HXUoHuEAcNqUPqi89ERbqr1WC2z7qar",
  "key24": "4dpv9re1ezjy3ihP4NgnnecHGixndBXPZ6odPfG8g3jV5Lw6bU5Mpzs2Por1deBUcpsmrDpJfABVvVVAZ3qUnjTL",
  "key25": "8C5sTDhZpbFBXswRrAS4m1i7QQPHtvw7Tb5ob44XLn8gBghKoZunnpvvUTVT7biiEjBsBPz6ZhjyZc1yWY1mPGT",
  "key26": "fpcegd9o9c9W1Ff5tpnoBvNBd1zMnrLwX8THTrbwGLfazdp4kvqvyvAUdJKR9hne6wvKuFxW4d8VnZt9sSUWFK8",
  "key27": "2K6sXtGpnvnaZnDCVR92frcamvoMMuYxuRu42Ra45xYeVmHBPJVQ7frcLERd4PDpjrfYeXyZys1vb74f8T2Rhwvq",
  "key28": "65BvN3qEAS57N2yRXYnUr5JsgvbnvuZWxA1TvsHTLGwQQLL3wrcUm45qmgZ6BpemmwJzogMFHaqKPPuWEpPd8vUQ",
  "key29": "2ZbvLtb6FbVVzFdiwGZsdCjYpcvz5J7fDFBfWat1QGryfNzjU3wZkumbVae8A6AKue9eGexkN7YmaJUKuDqCM9BL"
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
