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
    "3KMp2mRZEmGbdiQrty2sYwCNfTbJYKi9qojjNRmtBJbXsVyQPNfLpghJCAnwo5h6vETcePMMVWdWv2saFKe1mYbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zyDvRvKjdo3N1VqVeUiHgdA9mxUzHJYy2ZYNtfudmvgQFEnpPTByYMHubkroAivJbBxW1wqfpCzJtm2R9iwmMME",
  "key1": "4vedrWJTCWsmiLjokujxJAKMEZm6UvKJWPJZXmYHHghQq53rkAP3uQVSdqzZMot17EMyEEfvsYXDyS32KAbPHBjZ",
  "key2": "2kor7DN93DUuK8CiUpynDX2eKqrMBLESKPeZtbPaMHUvmZgTLfG8TaUeeufUmLGXTpNkYS84o4BpxzmTtfJbZwUe",
  "key3": "5NHuwL6qxYKpq17fe5TroMvcYs7PV3qSN4h7JDzbTXZmXQfYzPxw6tMGSNhwwpB6ym8TioavDFYN8s7saDcAz5Kg",
  "key4": "3G9zRRCKjwsSe7PfRx7QRv8c5cGCHMNQxG7aKx1BffsRJoG3JVqGf9EZqLcZnj29kzS1eyZsgfisptHzzwe2YuS2",
  "key5": "44HEbVmU84LCwyZjGKAQwVDESS5JUSgwE7ioysbGyrJxoV9pQ6C7UmJv2vHtc8j1vB4A5TvYJVna784qnwRkbfMe",
  "key6": "4wXUQaBMxrGAzXXBqUF4pXPikwRh6khYkjKwHMTVEm98QQPJ8h237CMHSj78BSQySgNCYSrqsFzS4xhFXHxft4ih",
  "key7": "4cPLBzbCaToHv74Zjape9zkh8uprkWPfS1xESUDJsnxhdkv6s4achgEDT4xoUswqmDXBDVFjAEJ27tdSAXNZdpTs",
  "key8": "2oukBDNR1DCNvNVW546TRQUt3VFZUnqwAcbozhtq6NiYoRy5H2aBMXYPm2iiyFh1YgMCxd2PVoZNKWWP7qbT7ypG",
  "key9": "2H7cbMXRrFnLwqz7peen2NoFzN3MzDG7hpu79iwhTTT3vvNfpfoeQ57Lvq7xRah6UbTb5koBvBDw4XJ6DSR7MnJ9",
  "key10": "5R228KZwWX5nJBpr2FZtwLKTXuY5rbpFR5sjXvZdnGMvoaAuLvR8vpmgcxhxwb4d28DW4eE5fJmETvfACHPKNwF8",
  "key11": "Xe921bkGebbyB9V2ee323f92HT14D2BD7iQY7wQEhgvto4UkNP7WayfEEpDst3VJAFrRrfc2BpN7AMEf9WvYC8h",
  "key12": "2czsa5F4guCtSXpPWvVuZT7Y34ArTSDRmoCzS12jXzTgjLVrU2Ya3wBzHzBQUpb6wobegGhZgvAf5EMRKkDe6pZY",
  "key13": "4K9Cqkf3KSmB11FThk2mTrW29VTiAK51bDD5VSY1FBAiae1bZEPNwFbPVDbrV6THhBiqmH6uVGEqQXscwazqLB6j",
  "key14": "KBCh9EHExHhayK4yZCdR3vBQAr1cCgWQdu5W38A9VcAWHpWJZsoUu3kbGG5Dkd7G5fmXuJQ4rSQgiZGBZBEJo6w",
  "key15": "4wky2SoqB8NY7j4q4aGKfqNgR1KyqGrEjsRe6eqbn7vLbfjxVr6zELgg7X5mGqtWkjTsu8YPrRtKm2uYzcXEgWpW",
  "key16": "qdGbEPcYXKL4mdQs93YmgfDB1c11meQCdtNyXmSFaNYNfRg7m9BFA6MpgQB2oi8smXJfpKNEbi9FyjqJ1C3YxP4",
  "key17": "3NXZK3dBpiivtDAHqeFZAZhm2VEaLKaGS9nuGPCRDV1Vm7KTF6rLx8APJo8Mjn2L1duHpgQVn6idyjMsaVTY4ymZ",
  "key18": "4urRqKT2UvpRdEQpNVKN2CWv29ZunKBbNBwKXAqdXqEXWCgS8kD33cZSzea2XjQJJkAwAGebnjudQvpzBmN48WRm",
  "key19": "3Rj1VW7n9ArmzYdP4MwtswtDk7KAhqLX2XjyoNPJakah6w5hawzP9Hcve3Ktzk4pA6kB7SgttpJvHPGNyrv35fEf",
  "key20": "2Ayf1bfyXZadpCw4E5xxaU51dTNCeFrcC9N16ZuA7RJDvzm5VEDs2pcUiQ26mWn4LgdzkYAvHEbCFrTt3vfSmGgz",
  "key21": "4SWecTGGgrk1caaaMVwSqWW1Fd6nbFghT9q82ANnKMeiGwtk2gbcGp7jg6HngepxPX3LEuASZWDX1LozLYUWAB6f",
  "key22": "5Ep4fQ4WtT13iPXXWGyct8ixFA7SZhnEC2dcHZfQ1L3eJNqboUENNpbrQdKK13qN64WFuvggyeapT5MYwfEiGHVw",
  "key23": "43MByTzf21RP7NdqcuTfyybG4hXSG1GKhk9oUYekiXwFtWt1KB895d2ncsGwXskvnnK7imYSDqLWaLsLAv39dtLG",
  "key24": "3uw6X522LyG1bLx4wdtBYhw2hNNmCe4UGUxt8tY4PV6ToWJZKj8nKdaMgLdEwwjJtwQn9S5brrENyNMbCqZ69kb",
  "key25": "3ZADkiCA3JZLL43Mz9y5ZVWVTfxgBiGjsMuAmEpt6F7aQaQ5f1pxYPNFSAkogxvkTXpRfvhVtc7HDq7YmpDRUrv6",
  "key26": "4dXChYG7dK1gQsE1sVq4YTxoSSRcopvaGcqgCT5gWJR8uS9Fqk9dF12EdoR2pCKMpfvhHBBkWt8bTffF4b7YJ1hN",
  "key27": "3FjJYGifxb2WN69DpNFdz2TFieJuw98fFCPAtoBpD7bTd88TRzPDr1F6BDdPyHtoA81zsfNmY2iJQ5Yz5Y5Ds79",
  "key28": "5hQbTVkjHehnZ2v11DvrRLAV3cKigwdwFdN1TCbeAKjSgJeuP4wsZUXa1QMcqZ9tsjUC9VWWkYzg7nJXyszE2Hsx",
  "key29": "4bB8pKY1Gh6AFUKKoahLVEWnnUmz7nPbfc2HLMxfHjxT4fGQaPF1EeFkfdKpqqi7t7FqLN25JGpEuzLJUFgdUX5v",
  "key30": "dZL5396HqSPKsLgi1ssBkWkrJtVCJBhnWExspDC4y6zxiB24yPXd6ECoDE4J9G8HnFfqynrqW6FJWy9HzTkFc1e",
  "key31": "5Af9ERZHCbsyanpfUTU3DbS36rQdWsZR6VQJv57sBJW6oowjQq5BNo4goBrq2LAvak9qoCBmhTJdNFEXFXHmi7VQ",
  "key32": "3ZCsuizbBGRjuL49x8m3ByaTrnGFKyKguHEhTELRKRHQdY6YCS1BaWPyj7Binc2Mmfo6KQBammdchrWRjWKp6Ntm",
  "key33": "4qrbpNqzTQnLX1gY9CHh97so69qGpBDJe1at49zj69wdVVvfofMmPkJD9pqyE2ywQSVEziceaFWDqYn976F8GpQJ",
  "key34": "3T1kK6VFaTcZvwDarmSKcDcXEYsowP7jDcExSweQ2ZrZNukygDHyWTxywL7szSxfnZSe6A3TFqAp4k7gNWdzhN5P",
  "key35": "4akeGaYocYwkF95WZ1K523Jh1BesdqSNhkUFv1QJnLKQ3M3JTfa8Da6nxYqC9eM3sbbGtQ7QRtfbZh6CfPZ859xW",
  "key36": "4w3QzjyGgniwrK2ooj7m4PwhdHvLi3a4xrQa7kwZwvtCbV61DtJb6gMXMp79iESbDnxJ1m29MtbptyXucwC1KFpa"
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
