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
    "5YaugimAXZb6XxnBYQJjZJVxA7dsSCXrhcTWK4JSD6BFrRrMsJ6d31ZFWT4KjrCkKtUj7NhTDBB3kkbeEnK5s8Ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kgK6iwsRzR6V5CmBxNTvE3THPsSJKB1GADvvZ4zMCSMTZuxpXTFzB7apVzkU5e2wqKoj4hLPsaQSGBdA32xc6L1",
  "key1": "3C9aeiZsVqpTBwHvKmmxJHwENArAWUtEcGgEPfxupzU15amifDzD6zVccvMKyheSPsYbPVKKogPCfzHiqwovAWzW",
  "key2": "4dvgcpYaChrfyzf6o6XfvguVhpTs5pSSKAwz2viSWd2i6MxfEP4a95S8Aso1rx3Sie7oKKPNrGnpkY7gtJcTtYcd",
  "key3": "bTBcEQHk792sgL1TeeYdv1GQPW3yb2WwXvEuZ5g9Hz3rJzL5nTu813DMHvYXBMbXuuZkUUTuXX8BZ5jMxmK9bEx",
  "key4": "4pn2Z911CEjV1jq2zpi32EgmzZZx9vHWWrC1kvoumnLNCMaNMQpMekfDExAccUTavFGWhtCmf9AxNxTLEYKekxkm",
  "key5": "4g99wKPtEwsNuUkx6p74PS9uTXgircdqkrhPR3DAdE48eQ97hXoiAbX4cZg6D1DSSd6DD1JfCsmgox2vXYAEEFcp",
  "key6": "3dRtyqqifueQKr5iMSYEEsfh2gLCNuUrEfNEMjiW2TsyDM8i1SD44GXTLp23Jr1m59picZTuHoG7ESGcaWuUrGC6",
  "key7": "4uXJbBKDodeM9s7hg5gsxBWE9zpJEzaMUN4PNqETDm26NY7kDDQCXx1Wb3Uj9xxUcrAdg1gJwjvmUATwTbbmG6p5",
  "key8": "5PiXGMZVGEGR1ji4GJuDN5ddyykGdspmp3iQ5cGKLZsycarvM7oDhKoQRLJomMJF82oSh55ceJDrnebK8SJq2zat",
  "key9": "4rfPRtLvXK3DfZv7Mv6YfSTzzgF94BPdw1hcoEHUC2nzrxQKhkbwWMrFQvxM5fYePwHwKic2rTu6XBmFCqz39WR9",
  "key10": "pYY1NhCwRZfmQFJRUBaDB44gHqDrnVduWHbVTVJgXwjbk6iCQsLLc9SNmeJA1FbrJ8pAEWZzoqbVadQWo5LFM5V",
  "key11": "5G2tKb4EWEV912pK7dgwdpgsmjGnXdyZxTyqCi1LchzMqEEFcfF3iTjp8numVzZdG9sqxqnUsYpCM3gXPCVw1Xwd",
  "key12": "5v5WAkWjneFscUZVTabLZjN2rzn7Zu9VGG2WdC2t2YuyPkBKQ9tJV1YAJ223fdEJMjXeEGrz5vpsPEwVEZyguynR",
  "key13": "wyBp5Qe5hB45sM6FSqCgaWEU8fVf9AYfbEtx4UZq5cj2mwMW6zaW8dLE1TNFmDVL79otqvTgQZo8dXPgpqBBQAt",
  "key14": "8ByAP6H7RJCvfgGzTxcE8EP38bk7mAyzPauZCcZst6MPtwQSN2n8pjvLtGdwNrvje9KMwUx1ftSbxUL6aqLvys7",
  "key15": "4fJRqedEmXoAuEjmK2A9mc64Avg8A6SyMtBiWL9vLTTtPddRXSWBZCnXmp2h8N5qtdXVheZ19LJWfydPGjbFAbDS",
  "key16": "33tmjK9GEhrmp7CUoqKbDA5EfXk2wihp92mbdd5oA2z9KERe9rYLivCuxTDV4ihr8AvoTMZDjuE1fifyAkVqvDTA",
  "key17": "5YAnSkwRaHiZGceWrKfWqmvDzvwcQJqAqY8yYYRibtBM49pZcszhHiHVbcHKVfkfyYwVUmmp7CAByrTUYMykjA2",
  "key18": "29owpyWG1EFcSSHbiQXXv3MyhahjgiW4gpWwFSf87xrUUTE1CdLcE8sj19XosjJvJV1BRaXzNEEpzDdUXdzFjSiH",
  "key19": "4VB6c9Jd45EDouQ1qFsxYakto1KWYK6JPdM52BGJa2GJEibRhz6PksL211iLPwC4jwp9fZQF5nhrdsi24R8Gerq8",
  "key20": "4cpXq4BSKaisfGQsSVhvNFRTHxF4xkggegjJRSx7CMxdG6Tt8V8xKkmuZX2ShHVcGxen9HjBjry51bzAvmDy28Ns",
  "key21": "32jLPBGHikZirtVcxFwqdX4eLf4nU6DHHrzUUMufebYmwvZ67bGYC1TtfmUR3FRJLdEnSeZ4dunwAENQSTyrDvR3",
  "key22": "kZ4fc1MQC9wHrPwD5JY1UMr1i189FmzCjoka5TDEMUWx5Ld8QEwJcdU6ViNytSmwizqUTZNLgCMEwac7yWH76JY",
  "key23": "2aQP58AKZZEcs8C1R6W8dkrXTP8iGanjX7qdMK4VHpi8Cc2jFWRKLYfvsMB9jGZnNMJjcSKNDhERp68k5u4sEXZ4",
  "key24": "4Tbi9froKbucF9UGnTQEmtj7FakfVp62sm3weszEK1M7MSJ4UUy2eABzAShRfvf65BC6vHazKxZLgk8fCmVXV4Ku",
  "key25": "2C6Y4oCsWQJZt5Vp1sdVQzgniCyEUSGpKdajRC46XzJhXXrq1g7yZ4KhP318987FwXW4YEMWPw6qBEfokA8FKpbs",
  "key26": "56KAYdJV1npekeK7DWah8EikqbeLjf1EoqLiRTzvjvJDDvGFYtYPhLmCLsBoefyPaWou853H75ZyKGSvjXz6UPU2",
  "key27": "4dnihopGtii7cCq1HuTJ6srJGAxJfAT1rrs663Y4tNZAyfFyrQWGpLrK1wSuv37Tf2dwLfmJpGKJnwjuNteEnB9f",
  "key28": "5GnnJ5CYZqbxivaHSvXmrToC9wkSCgRU5nrQvhuPYUEG8oi6JsVZ1cTxRwzJQqkj4nTJjtMifXVpYVzL6GQwLzbE",
  "key29": "3ZBqZJzF4H9JHP3jtfFUwsaX6bb37xT4SgtiHiUJNG7TeLQ5ujAc7xHr5KsAusZxc4Rc3KDiot7UxBpFX2XjhvJ8",
  "key30": "5xkEZp13YNDGUUrsLPnhPHZ5TeZ4XZfXAg4YWVjvQXSJxsxth21aBPdZnQWniBHEawK1EohfHLY5NBgXNQKok2CE",
  "key31": "3HPFKqgk48tMhEgv3e3oiPpVVg3zdDWh9231UxZkaDgjVoFv15eWHsTxMfH7wcX5rWSoTf7qR9TmMCNArGUvoUoH",
  "key32": "51ttWmATxsSWX55HnL8EZ2qVAHAbgFiGgrRv5SfafP7wsTi3Pbb7ja9uzVkqBCqFxH5kksCgQAj4BZn2NtYQYi7V",
  "key33": "2tzCBqFM6p4uwcmW2hd4Yz7MjjNJCQKpf6wXPGq2vfUhK8RwjnZJSRA8iLUEpPiQw2qKPdhqC5MmHrXBzUgrQxfn",
  "key34": "3G6LjNNjNKtXphP58EcqLaFgKi85H15ATrQXVSyqgCTEs7RBonGzNrS3X7Yn8YbJsAgiSX9MX3a8sxk4bB8XNXxW",
  "key35": "4higNa4z7NQyeRNBfHvY9MCLLQS1ErgbPMhc6CwHM9JHDJmDaW5xcF2g1UgnuLCFq2vG5dGf45uCenfjCc6Lk5ME",
  "key36": "54k7BdAGKw8a1KzT5qtAYGxao9zfUMQivZ1rfhDKfAhs5vUcmiGsgN5gVD893dJYpptyUN4azFR9y9cvM5j3GB4A",
  "key37": "3Pe2n9g2WNc5pvfcxwpUWbkZ3FGAdL1CU4CvPFfy6jaAjYtTFjWnwPxuB8og4LD4Nwq9h1yWxt5dwjibjFFLZ5bD"
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
