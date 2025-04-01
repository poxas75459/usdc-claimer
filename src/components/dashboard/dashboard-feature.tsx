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
    "WY1x8ZiqRMfv2hxF67UBym5e8JybaByPN7XcG4umiVYX5k2fdFn5XBNpacmdtuS6ErpMWeVHCqoDTYuxMF5c7sV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aj4Uu5ENuZFqASrMfCwH5nezEAiFG3hN3SqiTJSRKvJydSPj9fZMaFMCA9TLhGb5DjMxnrN6SuuJcUCPC5XbW9f",
  "key1": "5yUvYp8hQ1EEi1UVX43V21CzJXTrv4Wv13NP6q38mPgLBxGgaQ8VqfsptoPqLCBj3cFajCL3kpLHyofHJywbzroK",
  "key2": "45h25Z4CmnKuA7BqcbZr1kFw9mUrcjEo4xKyqoqMhqGbzzp62ZV32hsUXQoJje18BCotYe29iRBzYNW1CFfzizU8",
  "key3": "4RTbBLCBELzisrSmxFnwUeuEr3HWVTN145B539thXo7v3sGSYR81G9QaEczFoaUxVur5MSXgLkVvi2fvsjHLCKWb",
  "key4": "4sCp1ULtqTu9RzowCDWQzCCJCvAKc6ydfihrcui1pfZ2Dfkx1xTrhqXfxDePLaqMDmXBKqQrbnsMjibe27znXjnf",
  "key5": "5nSMJceVPai3JDZhENEa3c4Fnbi2JVoc5ZSWWUwK3hVh4MGhmeFFqz4b5tWMNGEUqDCw73sLECzBvkWTgk2xMbiw",
  "key6": "2fCz8aAE6GaZMu9F78kMJciP5dL3YSLVAQPq9kkzFmB8rWyrisicjuUude2Aw4ZHr6G7NkQAuLqmicLpSNvfRM6P",
  "key7": "3CAidQjkq419EZThTnsuAhqo93m8s58YRydimmhTPbopuhM29SvHQCwj4omwJaEU5h2hdQvvjZzLekWWiKQxxKmY",
  "key8": "3c3ToSiRoQFs39REHM6Mg5Zda2v9buJ1ZA4cpp5kghCcrXc2FfTPvYr2SWyT3gtEREZp354BzAPfDb3vYXGnQ8SZ",
  "key9": "FbNg4svJiDUkZkbzCpnJtAkR6Y82CgHpPzFHQPbQM7tsjFhYjRtApTfuaFjK3uw3qEf2gEgxHpr3HUhomyhwJnN",
  "key10": "2qm3SYg6XV63AXvb2UYQ1NMbEmQGgfREoDZVPYUXNNCQyW98hDJNN5BHKKDS8RsZXegRgVJU1nzH459jLWKJw2s1",
  "key11": "58cqPgn4KN7ACUTwPXghaMwUiM5uwoELtXbreEsZihx4eA6fvDxpkYAfS3bUE3qfVbfraA5BLeG7Wth3ojZzMKXj",
  "key12": "58QBKc9TDPq9jpXQJ71Le1CS63AARf65AgigfSkjmQV5muhctYLPUGKmgkCUjU1T6qENUnzcFtmgvTGgPMDFaXc",
  "key13": "2Q3m7C5bYRe7mThb4kuxUpqF3ocMtEn3B7eT84E5rftiD2nDLCohBm4DFAxGvxpWxyqJsUFMBobLJchQAdfJpMZH",
  "key14": "41FicJuLEKVCxUqprFFLpNL24ybPkNerrxgmM4mwjKqDQahRQFko4bhEpZ4yy39UrK894UREWa5um9N7xBfNJj1z",
  "key15": "4LXVQRGpw7G4FGDRW7afQW7oJGvhCcqyuXMVaH4NFi6jgCQxQ413dYhB3fV3cAczugXXsB5zAWDxwhZfr3UGmei6",
  "key16": "5Ain2Hiuh1XZ25ZFcYRxYpt674LkdLkNbnEHpoAYhrkUMgnsaefRu1EtY2DQSYk2h3ZrL2xfHaEsUDzF7NDy4iWK",
  "key17": "3q4qmRDej76rKyn1s5fnR6r2D7vLJx1pdqxLH3nErhjMRx5oskDxZZEQBRb8qFhSLPQ9EeQdAUCzRHfRWh4FLTTq",
  "key18": "iuKgTtYX9zuGhrD96PBPbhfjiwvP4b64mg4EWyeXmsDftiMHR4LpXrpmHcoBxuSyquNfv8AaYLETLBvpQh7tRNw",
  "key19": "3FNoVddTZxXjJkvxjuwkFS47JETBEynF6VkrkSNYGdkty3o4mSVKWF6cb4gA8d5XdQGwmERJU5ZVWB7yp3SLtrye",
  "key20": "vUckFoSKgKgx4zdCrWBhWLm4vZi6GF7HGstvgQTTDUjt2NwjskJqmoWpSxWFMZysGtMFis9aj1UtAswWj6TusXx",
  "key21": "2DRVzhdAwenrcJ81i34LwpJJ6ptDDSABuU1h9qF5yGWg42GaLqSG1j8kUTjVVMz972bdi8nvFSPADXqcKeNa5Sj4",
  "key22": "3wkSyoUzYivtTGTJVuzxwsBXxR7dsSrHJM3oqkZhBBaAEzJ3Jw9FeBDN3rfsEeTmuex9kcqkkHpsHSyPquR6vNzb",
  "key23": "3ZhXDFnd8fafxpVcvWmxxJicWD1Nyrv1ZpVeWjRG9vjexCBbg4FiWsgqUMjpFLTbA2vMXswkjiJvfxQjFeayLueo",
  "key24": "33tUAosW9UHpSGur3WNB29xqZdBdrHwWKowPCw1TJAUJhAUS3YpdBU8G8pQ84uvzKn3seHC4tMZZ4YpCiY2m6kTH",
  "key25": "3vz88hhW2VK5q6XCVPnKxzTT5sTw67qUci3GFf6RdprRXGzmnWjxvsgyPMdsMk1Vuv8vxUyegUU7Lefr5E7E838P",
  "key26": "3vuLPrcagobj15GAaD433W4LkqyTtLtwytRpu5LQSiq3ctYpZun7v6QrKLVzLooQTKbJUEv8QTzF9YvUeL4Kg3DH",
  "key27": "3o5bwG9UcnuYzpcViwT9wpMmi9vUfM3JTsN3uuqTKxeEdEpnmNtpPqqQZsZLWWWHi3vhJ4jbTvbBqUzpE8D7HbgJ",
  "key28": "2RLtuZujvM76KUMWsvVYngZMwnUYUNVhzdmz5YMRNytexadMfV65LeJ3bFWiLSEnsFftRLEMcz8W9q2WDMhLA36J",
  "key29": "AY8w3KJds8XMvAtXvj4qQmDgLoh8BvXX9K21ttYhV67LvWauintkpmqSswka2ZGyEDEUQcfbwpRUf6h2sbbUVnP",
  "key30": "2KEbyucqZH9jdW7AxN8Zk7wdMmUWLAhT2VBCXqXVgpesTW5YESJLMfr4TqRjDv1FBPs6T5q5kxDK7eHeR6AgRKcf",
  "key31": "RdwKvrv3DaXmpfQbJKKsRwAzhfzUJsuMHM3NLMTPGgQKCBYokHrg8AKXFxpT13spXAMk8Dn8D3zzJo5jKWYT3Qa",
  "key32": "29SYWXKWeyecCpT418eBrKCx32qSabo1XDXXMd3DG9VZnFqBCEENhWrgJyLbjSvYWn39ajLSBVKVD5zGamYC58Ur",
  "key33": "2M8wBsusEXBs2PZjCxxNHXHbicnGu4fFUd3Axuf1n2eueGzkzTX9Shz1HLi1D2TYq1EoU9PgffYh86Dw1swfNj8q",
  "key34": "5nibesKxw4R5n6LGspuYR7KPYvTfG7diRqdzubyPKBswwXuaLE29eaEn2tRmbFpfwmWY5ccEntcv2oo3zNn9eVc6",
  "key35": "LH4ZN8QL9yX3QbgRZANncEFy1Rdr8to98yWPNV3PRNCb9fGNa7ZBHpPCQjpX51DW8yFTv2mgPUxyvssuu1MzRRy",
  "key36": "4Rd1XjD3xMi3VKAnbTW8KA9wUHP2PvUhiH7uKzfiyozK8jpJqZyP2fTMDRLmJ5m9AcsRm5foBf9qmH4JwgG2PuLG",
  "key37": "5a9QeZH7BWYAL7FGgJ7FHh2svNkQTTkt5vp22efDnHvsA7zWUsPQTGdaqwwU5uwAx9CrDKsSY99KESJ6Sz1t9CKn",
  "key38": "2Byp7cxavUd6UnCeLZeAgRQ6gvCvD7FmC2Dw3pdeuop3CiPAKGQYUsbAuQYAZupbKiR7n3SUGWRDaSkFE4EnkQsy",
  "key39": "2Q6wepFrkN6ynsyeFMXTj9wZushXsRMtDrS7F96KFYzEMgU8CiTYRPezgAQuiJEiNBdMWMDNZzbaUWJiUVxiaQLz",
  "key40": "28J4FB2EMem8o9eESzedtq2kMWR8xF2CJScrkCKAUJiqxdevNuf6HxD4LbqTbMSkPuTcxrbT6nkFZ3vLW5VyEZQ9",
  "key41": "4PnmpAEwLoWcaPA4dJ4yMtAM39DtkHETkX395yp24s1oPxrDfrjdBA34KZg7s5sUm7Z28LhVFP7nh7onjhJWYrXk",
  "key42": "5hDPJYQVat4Jjum3mb5cT6DQKxgaPHkHRpravs94qxpDwRwahtb8pveTtsvT2yXCJoyUvcTHjNmUiwLLjUELL4wA",
  "key43": "65Cwwqp9WBqUCTXkhEszhNbPqyrvdsrekcUbzmRoGhKeR5BoiSAaqNYkRDVvqyKcMiGry7ZrugyXBskGx9zZscL6",
  "key44": "35jPMTzzz3m5M5AR5ddWUMo6o4zhUW8a6s6URqC8Q6mTVfQ32MmYY5bawKE3knWcXXFVKfdehGbxYvofZYvDaytU",
  "key45": "2nbZP9e7G26eviLoMvjfSPSriCatM7WhH4htbr7ETYdbpuGj2t32vBVwq5TBwntjumzgLf9ctxmddd1BkZN2ssVi",
  "key46": "5aCEQiUAwTc7k8qenRtffT8iaMH6XA5mP8z3hSU4JWE4MdvM6pJ1kAJ9AuxzVqLrya5NVAXLXa6tRzTCMdd5PhPo",
  "key47": "4rq1nNhj4ggBFU9Qh5YbTckbkoEpp6L288HTVkLFFDNtdYJA1EAUHu81afZY7rqE6A4EohUTpJMJVZUbmbwaZocX"
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
