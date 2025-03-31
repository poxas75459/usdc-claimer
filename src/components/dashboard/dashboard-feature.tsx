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
    "2VLMjfXnDqCduN4fCvRXi3azKfQUn1xj7Wu81wzrJgNvckVjsdjEL4MuvdVmFNPySvKzzYHpf9vGqiehYmctjk23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSWw2LGxzMriaTygnVKosqzCQTCzUQQP8BFFddJbcjSjBQEH3HpM5MV5fZvPxFLFWJreBArAifBR4zDyXrK18jc",
  "key1": "5fYVD1sVnecqGoHkWENvrXZSedXzUQWrWA4J4wcu3Zterafg33uqbTrnNg3pRatpwgizZ5gGyYCkb2wfhEMhFmNF",
  "key2": "5a9UeCtP27bTRja7mfDgKyVMeofvFdUNCGUNZPXKZQhr4Qur69aDq4iquu93U15kH3uHHpxnAGkc191eACRyvBLk",
  "key3": "4nsMAoEJAtoexif7YLuzCbsDEuYiaYQiMwSrbuipusuKDDQZPSHXHLKVqQKLZj8Mp9VDc1YN8azgW9frhWSWwsZ7",
  "key4": "4CtFBRxSaSpDsK98oxAKaugtUi2Lz4hMVdD7dDWMKLcJk3sqnYUDUTBbvJUBsSYDqhAbfA735GQBQ84T6d377gTr",
  "key5": "2pumYS2TBibQbSqgdE2iGHREjZvgLnwghGKY7Jf5ha1k3zzX2CETMPoH5JbiakPCqmtvhprMHusCUYfQiobtZDYr",
  "key6": "2XV88t86LSzrcBFoKpZgoTTQL7pmTRwR4fRL1b1z7fuh2AEP11VfdJNhvvgtWXwrX83E3Hxhmwa5RNqgZtjAxJw2",
  "key7": "26dMZEGr3ePGA8kbP6ywc5Maic57HVk1dHkztZ2NLpRFQ3L2uQNMj5fXX4w9VFVhTMaGu533PKgcdYVZdEgsFQpR",
  "key8": "58ztWyZePgTwUDvzHuar51uwdojTf4oGEpMw5wAEUWNPcEEH3Y6uAcgrzMxm3yEohv2yYiycg426ZiUz6UVj9YvY",
  "key9": "5gjvuR3LWJndhtA9q43k3Y4ouLfS365oRho6Tx4Qbez9dmGDdLwNR9HJ6Zzq4NWhSio2BwWdR6ibiBQEUPL536D7",
  "key10": "2sbiyuHXqfkBcTT2kJKtK56oPzEx2Po5wtW2sSBqZjt5QcXmj3kwLNUwq8pwsiT61hKVn67xcpXott2rdTekfScg",
  "key11": "58K3AdVgk5BKNPcMrEW3DkewtGFQybz9vzoKAxvxyz8iW3odoKKrjaUsmLrKAmAnBD5zFNk7D11m98zacaMewHW8",
  "key12": "5EHmhnVeBRW3XBdLLhw7yyfYDzbsGJmYR4W7ctK55QuVy52PzmBTuhYwTU8iBup6vJx9A9MMfGiPVchXwmjS8udv",
  "key13": "3wZpc4PDtqS34P67srGn19ZqLNw7kUKo1ZH4eANgDhuYap4YaVaB6tstZSkxyMb7bn9bEumYbCm6R5EJWQE4KbBT",
  "key14": "2ES65ahfSxV31Umx9nr2QXHNeyrTCYba6wg4g5kkWAf7A6Gr7Rnc97BC14KeEh6DTZnhBaHWwntnS1tn4hso7Do6",
  "key15": "5yjf3aks4xJ8qNcYdDzMeKKCa3krAAiJmB4ujb8BQqnwYMAGXsVHLqgQnB23A9wErDL1BfhXNWZRuh3gLkgAga9F",
  "key16": "46RCtyV8yVxuDig6nKQYGn2pffGnFBquCkH71aBSH5VRi2tsrnSdUjARJgmuqnGRvS5D6AjN16aCbPuQvTs4Jc94",
  "key17": "3LdsLdrTCMQYLRneU3jxLnsAHdPw4afYibuSeBKoic35WDN9yVFZRn2wN9RoxRxf6V5K4HUpQmyy2FLNUhEyQMmg",
  "key18": "4kWjv2e8yVcoz9NA2sz1ATs64PWjpewsDUsY4ByJjZN5Pr1X2daFybJfdeNtdgkRSSGknvTVbyxNMFonfGbE7LQC",
  "key19": "5RPNQ2XZmFvzij2cg69MxiqU5G4xjWjD5jLZvLVKWcRgbTNnRHnpAtNjH8b4GHpCV5aa9QJ92ENj3iZ4GtbyDrXj",
  "key20": "2DgMqCY5JAZ1VKyfus1w75hLTWgEuVqw8ie8U68xdvXDMJYDDvSD2BEfnNxkYoVHRSDzuEDa4K7LgjqsRnWgHStC",
  "key21": "35r3Cd7KEWZD6exMMSQrY3BdgYkXeyd6JMAK6H2YxtCXKjZpSuPmRiB5ToHxRvxKQbxBYcbfoEwhsjQQZfeCSFv4",
  "key22": "4U1tziDyjgAeZ7Wn27YtkLMkQ89u4NVqwczLNDK4rVYVaeBopwRuyzAd1xF1RCyvBn7RednsYEukh34xoxxWQwS6",
  "key23": "4xnZ5ZvpBhEQy92vggAMhkpdStKaEE2zwysvd9je1cN7zHNH5KPSLVB7QvMhjnjCW2wY9EfxzX8LW3eN84NmXqCY",
  "key24": "4ntKRfkeVw1aYhgnAtdTGz4ZTdWwaXqBuWvVByffBNvYc6uJswJmdXDW13GbT7JY8HDzCXc3LDjCoYspLAqUheYu",
  "key25": "3Z6uSgBu6tdRYGLAwYXDrecewwoPrbrC6UirU8RrU1PRBu3pd4twyvxzavuNZVXenWSjnC2sccHLhiniy5WVS9gW",
  "key26": "3zu7NJDPMJ6AGq4ync3hHkzdawr6tJ84RacVgQtMPsgYZvYU1UGpdcVyJjLARdmzGEjpTxzjng5WZm7svZgDGxvN",
  "key27": "2X1QjNQaRY6ZF6BuXDEmiwG4zbD593HnamniD5QtjigY1QV4AHym9aZoL2DGiHcDB1cBNum1xcgxkb9iajwm3VVF",
  "key28": "597L9UgeemL9sBGbueYa8rbiMQWs6uFGPdJfnoURBFqd63YjpXi966uTN2NDTCzo8KpK1JnaJ4cfQm6yDBRmyMQT",
  "key29": "3PEbE73q95e4YsSZomt4bUAkQww9miXrt5z3JtQhWZ31vgNqqgrrbm6hYj6kdhGKFg3JtKtuRQFNSj39RH8nEPMF"
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
