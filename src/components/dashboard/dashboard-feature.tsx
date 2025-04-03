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
    "3NjEPrtCN5SJQKrcAJydSSefGjkYnL1vCGYh22kFr4vJwbzHuGNCF1BdjymWvvXvKxRVEFNGGDaZEhgMmVZW9Bdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58LcbqudrsheZQ457mi6iDx2B59TKyhWU2iAFr3qpeQyEGa8nBs195MqTb96vhmGTzVNu3oAHjg8rBc6FEdQJD2i",
  "key1": "3p34N1urnp7N1bNcy62PyPQLDUbLYHmjRLsX8ZsQ3BeGsG6Rkoj4tPTYR312TNFCjybLqAx83H5DZpHufRYN8B2n",
  "key2": "25eQB7E6igTbfLuF8wSEEg1YJ57cLBva67UMY5zXX5bfrNJdehqg31z2nhxgvbdfYxi6Y8Yr3r4d7eURcjM85BsA",
  "key3": "47UHQUVgc41pXY4qbhVobYxiTKiTyeXdxjTVYz8sztvQy3PEvFB8uGYbFfEEDtxjcV6br8F37A9KBzJ5Y3uB8R2g",
  "key4": "4FkSAgrKMBDJJNZtUN8r7msUKCDprEtR2cPEuSBkyakq1mxKgaXwjV3p8wWvUnmAvxEdVrU2RuAB83LnWFk3SeND",
  "key5": "NwQBVptAXQ6B8Fn8sntSkexn3rmX4zMeTzT4zP9KDD7FRquo5Lftpnj85UMZ6cqASPdAeyH9wCbGCmMVpDqfSLh",
  "key6": "3hFYVroH1tcJ7CciPkKXbSq91c9bURRimxG5PdWQUnhACKXj84aXP31sVdnWTBMCuKkZ7aN1ZeaKfXJUHH2EeKvv",
  "key7": "5LPGspNnJGjspDhPWecdAYvfKNS886nQRBawjH4aaXApw8ioayFm5jDGLEkR2S8JNh51Ctvob5DFSRf8qaERWgPE",
  "key8": "4uwRS8V2BNcFwYMND2fsuDfMzhBUXC7eZZKz6DU4D3yqMtyaCP4ejjh7uEeVk1KukDHJrUJszBy4U8mEsG31Sugy",
  "key9": "5faDEtTRqEc2WDdka5ybpzSe46DrJbCJboGff9csxs8YiqwnnsAU2bVkKt2WZ2wqKXVsJn1M8vqgkCmPK6VRpbok",
  "key10": "jctZqp3G45JxZ5K3Wjhzz45NuYoLNEbmJVarWhnDfY1EFRZDBv3dyAEbQA2zzD7V9BfWjLuVZtwtiLabNPTGTtm",
  "key11": "3dp88TsTGf5ia7StXoVNkSXKNMFhsKug9nwuYAfeZdD8Q3YpRDdQkLR4B87cfLd9aYr3tPyEFVJ4itNagNVK54PC",
  "key12": "aujTTJAGMR7AhgtwB6h86DD9Mw19QZUdZd7qXwPs13KEWds8rs7aLatf8eY8gDLRSR4Ve56L8nYHqWyje5VTKej",
  "key13": "2fdqK9mKD96W4pAwiyn6s3KgMRnj4UWxxW1n84zunsSX9NtVaDosM1vrQF8TJ67qTYqwqCv3TggnQzegD33Dckux",
  "key14": "658df18t3LEgAxGEJtKZdVnkPJEDnoNvTTJqf8MwWdqf8GKpNUbCpvp2yBiYkf8vRhhdrHDnuqqoCQBksX1JQVoB",
  "key15": "31jRQ5DsLajfXSn3ekatuRFhyEQZwahTfK83Y4pdBnBYwX3RmJi9xGJDqDHULmz16YLRRqR4s53HdGFUE8ALFNYN",
  "key16": "3PJ86SCw3Q2UNqE4PqDqgRSrQkmyWtn4HnBqddw5S9rduxujj9KT2GvvmhJdiUqQkK285X7F3aaZRirLyRkvPW4V",
  "key17": "21U3AmXad4mvGHPHqcTr2hKg6ZFBsKJujQ38BbXY5cLcXnAoZ1TpeNVuaTC3ejPRVTCV2cZSL1eZ9vwf8scBCy2i",
  "key18": "3ptJNxYXKisGFrNQDGRP6kXJTSaiowVwyHMQkeduTpgJSuc5AV1CkdvLSWuw5J8T7w8U9X1fgpKkCQ9TWoH38D66",
  "key19": "JRjYpXGRs9PwEsZbaMmEFYAfWpBQB5reK38XeuesSJR4dZU7pya9YsG5xSQ2MUSpPmyJjHMPa7xcZ3dFfBbdQgM",
  "key20": "3akn3xB6rUtePfmfcC1ucHLCkB7YNmT5XYRip3qT3nDk8JnMGGXzmCpy7nH5mDvRvGGH7HAcRNAkoeCXxHorfpUG",
  "key21": "7sNm1DYX2BU5z8Q6HUzjP12FWemHmAC6vp8EVPUV6RUGNGgQrGgHbEYNDP8hFp8TBzDnBLCwDhzuptaoS5FMAVR",
  "key22": "61ScQ545ozYW28DF5iz3WuqnBquMHqzQZDgimUKp9HopEGPnfddeXc6EENBEBHNGaSFeWxBmEiYTdDthY9WfL36a",
  "key23": "5MjgudCfrbKn6UcRYwqbp6zzEa1ARGxFjoECoTwh13rSTNWmUgW6Qf7aYFpkRduBFyngGe1rHRLPVyQRtj3RcmDy",
  "key24": "4LE23gtJPHZQTrkbL4hTTuzfuC3PpU5HNc3cTRFQj5Z7rUe8Rgs3JpYFs4JZumxnySraa1SgUPdAVkj7GS448Bd7",
  "key25": "ZB5YBcy3XznyQfCabRh7EVZRh9PBdK2t3KyDBP9zg4Xy25mJ8reAWDKYNU9E4EmFxMZp8TbiigE5Vkar81wxjPR",
  "key26": "5zmXcoRgF778zjudYRimVuPvcSAJKvJQEL3m3dbALhXpN24H8Rzk4SwbWcrEVdsWbPUAoxTSPYxP9taiETANYCGs",
  "key27": "23fCVpETwHnCdbiM7MXSPHczFXcno57UPpF6P6Ah6HxzQyGah9Qj1QiNmanqYsbQYGr1EmvZpLFqyVgpx9w4oEew",
  "key28": "2JrdVqUTDoEePe5XpvkdsLpmN2P24dJ5azTnYjQnCmDv4rZERjjcFkcjnNSHu2RWQwKcHYNuWi1rHP9BLykVThLT",
  "key29": "3YdKu7STYR1WLJunTY7ewwCAfKDfTdNRJL4cG7sPkNmRJ6gfbquAWQZxrha1AJFizpFsn6MbbhpB9N1eXWrjuXCY",
  "key30": "2aQD8L2LFkvJ3Qejur8TtfVRLsk7nd6tLxqE5VyHsqd8qpLamUPjxgnuRvXc7kpcAgT5q2bvtm1Y4fvru6TbLERg",
  "key31": "QbVguzqo7V628genGXYfLSDnNc1xjRTLzk8F5HTAxkCjBrFcH8tn476SWQVKbiy4pF47QUaSUFr6xNijmmrTfDm",
  "key32": "VVxS3KMaPMWHix3WX2kNCUs4vmX4wQVbwV3G6BydPbTTY4V9AYxwTqP9C6h4ApzC1ZFFusXRtkA56P36fFpXTgr"
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
