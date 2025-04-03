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
    "2VHHpmxyTnAKkSEK3PfDh6XMVx4ZfvYBmNkhuFyKPC29uUgnhgXo3tKXMwmVbCNHAdDWJ9R8YufJyFBgJprYJy1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hjgzPAkkSvRLAXsVQr1hLQtaCz3hVWegTYZXVGg5tPtibQkHJKuUyGLakEzEV15A77BLiJd2hpSV475pVJTyCVf",
  "key1": "3n8ehZggiRfXFz2X24hbLwsrHKJaKkrssZ48xDqXtqiUcyXPEmjDzMhgWYvurd36yzQcudq9orCQga8yEvtmFb4e",
  "key2": "4Dpc3wFKsRCrSye7wgNzVASBP7yrUc2kadw3FuzkUo6WJwappCbzZ9QHnPzSDZcK7s5rL9TEUpkoGqejhKcJU25e",
  "key3": "3oeWcyDWFzjuEFRNLDNpLFTbNDBgtNEThDJMNT9CvMBTAiuaWEoauFHFm5GxhqtrsCxLLsg5L4EAi2zH6afoxvGy",
  "key4": "41Dd6mXZuwNv6sTSuCT8aKvJZt6Z6cBEnCnc6r81nzfPmbyNS3gHBpyH4V2S1j7cV6eGbfjVDcKsCkmE4XiWsT2S",
  "key5": "3ofRTe3ocYumG2sRid6tDsV6ViUb1GdFHVqKPy5fXWejX2bJax31kUmaRu7XhF7NDiKDhcbvxWmd8HmHEJa4eZAM",
  "key6": "3PF7DTNGesaktVWtg3n6jfRJeB77n9wz6aMwDnWC9y62nwE77QYrceuB7D7k8vAdqLFvooAvpNtAtBahmPuoMcLt",
  "key7": "3kFHzheQj3XDvT5BtEBB16CsXQznFq71QkJJUTkhYd9yLTxWFHNy9PhQdWTLq2TbvtxXvFL2DkE2X6ChjREWWe2N",
  "key8": "4aYoPJYbgTSWjStgmQxssWVtL5BDhAsnwwhFchVM7Au3GSszCaAwnDeMMvZcTScdNDc5XE8qrup9d4AvbENkZxSk",
  "key9": "5dAnZBoYfC3eMH7eLQKrNJw26sSWbG7JfM6LPhfDAcWRBRp1wsucZdfNWh4bGpkm6VFPjja7c8Ctdgvm5Wnw6jnE",
  "key10": "5LhEWHzGShRjy47tEcqe8dSU8AG3mhrttJKMzCSZGmKCM2qx7WnL4mnM8ChxW9scStHVT2mjzvaDtcmsBtY9zgvR",
  "key11": "4n9khbZEDgbQPDdjkEMv3ZMDnnRix3VK6zhAiTwnbarr34HHkKJmvm9MMRhca4MRpoTLiSHwjNkAC7vKumcqXPyH",
  "key12": "2HBttQ3Gqsgj83oFJLhBpKNGaxuqxJ4zGRMY3EmFkU2itLRmRQAFMBpoe1CRyKkjrorBTyifJXJxgBk5Uzo3y9cJ",
  "key13": "5AxGHT74mHHkZC9rXC4KXPwGv3TdEytg7YFbfbQk4GWJZGodX9m8xJMjdFhpSa8nzV682qtic76bPH2S84xacWin",
  "key14": "4W7gAaWiszDomT88LDmaGKtwzy2LczrN6AycNoAo7fG5DvFmWZgvrZXGYphat646U5ZYGmcKaEy3Yxh2CVxYgCCh",
  "key15": "rwLzWDu8MK6vvrZ9MRvaBHCK65Ar9mh7sW9gKz928hQ17dtghGBk9SUGiQRZdwNgY79HjVmMSDCAgnc4undD5QM",
  "key16": "2JksXHwaqtUhZkYiQvABLFt6wcqBj6Bu1b81ktq3Xfk1EGkKwvqjGzHFBhkhdCntB5q53yR9zKm7HNxYtqfjKrYb",
  "key17": "2ScqKzeZevJcyiaSCyLcfAgaCFWf1k9bzshXoFVLg6ZQFHwZJfpbhnVh1e2uiVVYdFDFxW3tGYU3FRxvLWNeAJBF",
  "key18": "3wbvBYgQK8CVrhjTcmZuNqdfNiR1x6yGbtmvSj8CTD6e71ZmNTooTM6cE5mXQRYTw5aqX4xQgsfoxegJscfjweHV",
  "key19": "3FfSjNfAJ3SgPM9A287rX5mj7GXo1jUBKmzUpoibbhHrHSmipR1DW1PD1TF5Kv2Y8PYo9fj7CF7UcfcnGAh557pH",
  "key20": "4ULwAdp6QCzcqyUXUEY2L72VDGVbYvTmgDNLAZzxaxuynBWprAgenq1e4NNvoqta3RAJSSm3HfhnfLE5sd7Ad21D",
  "key21": "2fQcRZ7eRZikahtfWThfX3q5RwEG6r5F8Qr2UYuGM4LHKRLP61RPyaJM6XxF2wrRYdj6jKeibrgTTrfUuPtMzfX4",
  "key22": "3DAZhj4sxENNeJ7TpRLiuXKMkomoXJjdUPsyUi1WHiDNG7cVBkLLNREyep1KYkUWyp4p6rU1DeUDJDbWPF46Ac9d",
  "key23": "31sv6MrtjuvDW7ewtE75W9ueaiJZ684tGb5V9GkiViLSEVtmBjTgzFLQd2bKD3pCdgGthZkJoAJUZ9ufx7REd2CK",
  "key24": "4UqdZ3TsNARBmRd74jsYfiT1F62qcpsCnDij84PiGz5vcDsKo6t3uKWnqL4JEufd9WmigAJeYDpoQm2iBsx3U9My",
  "key25": "3ZxeXUwqDZgMrFuHSJWjMo47naMJV812BeXXA8PX8aScGfgq1LR7FTCRhfDTn2Q2rbep7afnbgibLvdZTkuf1x2z",
  "key26": "2BwqwazcmZzdwpQ2M78zsQ4GP55pHxxRGnkAByPCCMeVKSZ4wvd7nxvXDvZgc4KwHEGNhbsnerTRXTEFAapHmHqj",
  "key27": "5g6zPCjsdZHN6sXMZMtmPTtAh2Q6pS4HDcZDXWGS3pFu6w5NCVGsJGaoFYCvr42Hcbq2D2kMbdCgQB5GrqBWthsX",
  "key28": "xPmvJsbatda1Tbsbvp9uWQfQZNVPf3KyyNLRRJaRDPd4mPM9RKHrJ6g6pwThtyimM7a1aBjttyWbwv5ibnSjNts"
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
