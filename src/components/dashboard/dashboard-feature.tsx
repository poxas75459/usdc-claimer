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
    "2qF2iggUcKum6dpoLWmSDLyim1Jvhg5YWsZUNryU2kzEUQ4bJY9RL3vfut4v67PKHP2NXuvaCwYmbUtBp1JEfvYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qwsfawXBUwYsttoP9osC5zB9PqmfQq1Khnb3fSyNC4jeY5VKcqLnHgmisb23KuU7ytEFK95tuorrEsp2wNTmtqS",
  "key1": "3neE68zfmmTAQLjymb7rs4nghuAyo9i75u2cRTYAY5zCYpd5DTCFGoSCbLDajHZ1yx1qhyeqQrKj8USb2srjzRJG",
  "key2": "3T5sqH1ihnB3YQgi94L6pSaW5KP9rKBRt1XrTfeqoNC4HEDrrsThWyTeyziU9TnLZa9LMPwZm1azgbnHqW4WgCXv",
  "key3": "4srgdJF83WU4MqYMQf6uJ1rWDvnfuovbeLx23WuAKCQwXA8YPB73cLdwdDKuSFEPxZoomyKJgDaxrxUVcdVPP4nK",
  "key4": "5m4qTBH9LDTXCF1raMZY4YjQeDPqsyU6N57ML7NJVfFjT5ZxDmaA4gUZSdrX1kstCBqDnNdTRBX21VP5resMLVVu",
  "key5": "2mbg3oLvdnfU8rkCUC9VKc6Hv6qq7Ky7J4b82zPBxj9fsZjkjuJyp4v2L9QwsPhFPARxjAq25t6MaKp5Fs7yL2dj",
  "key6": "47M4JWaGJwNEMtSpHJLbwbKYceUHn9wXCE6dvtaoAHev5qQzLeucUv881RtxCzeQPwZf1LRp6RKZSD8xg7sC5EFH",
  "key7": "5HswnbUU97iPwT2Sx8EHYMko4wd2LQxoB7hFHW5YvsJkNGn49i9hYmKFVG1FhEXcNiy8Qk537gBWwKhD8pzaDhqZ",
  "key8": "pvQCj69Tp1j8wpZF523vVhyGLSg6Lgq58nW6cbNb1Qws1uA4cqkQ6Nm9DtFLmFca1hLeLrHojq316eTgzqA4LMY",
  "key9": "4UisGXtethdZ4WuKwJgd2To5dVU87NvUsdVb4CsRckg2kJmmj3siH3DJwyNvURiALpShpFuSb7MWp3r3iZ2m4h16",
  "key10": "5yaNdxzetqaspR5Rsnfsn5Y8k8v3sE4Cr6XBcQ3YtHVCX4xo3ha1fzEcUnVuLMeUtKmyn36sx7XSejtLd86Bd4kJ",
  "key11": "5gAD6CHMkk4T4SwrQoTed5UCJorsLv2ASRgxrKhTb3SEdosTtBAZKz2jnudFvy8QFT39wSntM4CNJKDx5p1W9yTY",
  "key12": "3pMTMdar9nBzVDT9c2yy7tYKArsLGdagxMbjy8efRS9tiwp8wh8mvXBHsNXoWL3BLrWkC3C7FQF1eYSg8kVVp78M",
  "key13": "5Q7Jh9kJCPFHnBEYC5WCny1eQfiRRxbJ9dBxUs4Xn7PHpcsFLCNXd9bpPp1zUEb6yZd1y21DwbZcR72V7jejfNHw",
  "key14": "5syweDeuk6kj9asD3bfQ76Ry3VkeV9NKsaM6Tf4QbsVAWzdaVyPV36ruWVZsgZFEm961Cseaaw8kBFTYSvpV3fYa",
  "key15": "3YV9mYfhq6dYnhERRNrPsUUWJK9io12f1PTjU3U6TZYhB1464Sk4aCUHxiEHa7cyuH6DRVqJzC1Kcy9Sr8YpyP9n",
  "key16": "K7HbQ5nu1dq8Y9ravx3ZaAEjJPegfWr1MjNGzKPrhXFAN1nQWudWPFkua3H4nVQ5add3bd3AayJzqqYrUqzewvd",
  "key17": "4rtqoSpUQYu2k7uyfU4aqA8JbVcuwF1Gm3DcxaWJdUgdufa3ftuud7fK2yY56xfm8eJRA6FHL8moffxfF7V8JcUM",
  "key18": "yF7CzQGEVTsFa2eXkDCL35CxLEmkVmEvdoiNpfciPxqUNdaMVD276jwt88pjTKAVKWd3Hefmng1Red67rf32NbM",
  "key19": "sFsEfHa6y5YeHpk1GaQATytGDSfJJKBXgX55KniDBK3crd33doFmoARocmS346ES5PTHzVVVJjwRYU1Mznfcva5",
  "key20": "3qNr19a7ZXcqAbuzqgzxMwo5XfccubRmXnnEtXiFwXswqmeQg4mKcAjTUNuBAd22LdNy7EDTSbnmBbJTGJUFLPzq",
  "key21": "4uDgz4gPvDFoGX656rEvSA8KHoG2uoTR6ohveuPVyYcqjfy7ApL94YsqvgonvZZxigN1nRDyFWWhfimkHnwK6WJF",
  "key22": "5kQKgiyWWRnD4fkXPtukQdtqxJTQ9gG6JzvsHRK4eRPCuYxR4AJCjKysWpAbYtTw6ZJkpi5XjLdDUhad8Hv5RWaM",
  "key23": "3ZZWTPa9bdyY3ixPxpKijagJWigX9cQpM8ts1aVM9LcpgVUEE7qP8UL61SgfJwv6q7k4yconU8kpd1SHEkTpWBGP",
  "key24": "545UQMyZVG8MsDVRtMYboPCwRGd6firSaCRNTJibbj8khs4MtxuZSBqfLAuVB3Az7bpyg71JLQTdDFJcss19SzzK",
  "key25": "5Q5UdwbCPUwYpfoa2SxqxD9RMKuX8Lq1opBTXEm5yBpHe2tTgCA6CusZaKXn3emkjq68XF7KxUVFBdnbRUKLxjvX",
  "key26": "52bYwy4ym8BMRNosAsPxBf7c1cMkAF6xsZz9okErTWWdm5YCUEvFmji6vACh2kKrUUeSknUT38xuXJEqqf4qGj9g",
  "key27": "3HKPUB6seCpRjMJf1YeVsvBVamd4tqZcPFzFJ33mAWmirkrt2HcxzwoxFLdCFvZiZvewXLzWuYJmkPSy2mZrEZNH",
  "key28": "5snP4HGCwnZnKrACoa6ACCqTfZ2Zd3DABCC9j8uH9n4R8Ttd6cMN4zwT6TchofeLqNBv3CwSL9use7wHEwZqDLQJ",
  "key29": "3nN7wRPSYoNksrBbo8dYY4VJHpNuNEa8qdEVdUXU2ZTC5nUAZ4rF6EkJtbwtd3HYbbCCV5oMq5ySfgLQvDLi5toQ",
  "key30": "34tEeJfXtmi4qKbRJwNqtFtdoxRqA1wNQJZjxco6SbXSWmjEoUYvMbhygLh6AmZz6w7sazfiwuo37wqeGhpeSSy6",
  "key31": "3EkkrZ8JpqNXwBNBdB8B24kAyJQDfP77L6vxBeyBWEWZSZwgig15ShckpGAriZUQrnhNZK9vb5n7xHhhrSqftMDx",
  "key32": "5zfgn9z1ZnHdJ6LJ9GoqbFLJXbD8vE7KqXEgeyfBRArV18r8bzhV7xBqAvidmSEnA2wZcpQGToLt3gx5xkJdRkmE",
  "key33": "2VxTjXQpmX5AMe3zBrkRmzQJ72gJSBUA8pKv3adyXzLauT9fmcLP9UMSecf9ZMLHamNDS32EJZktfMqzZPszK4Rh",
  "key34": "4GnhcheUa9PvpxLss74eUm9ciPQ8GWwRc6WG8BkGk5TjTpHjc8ZnK57TFuy3TkLHfxSQwCzMqVK41YhPZSrKUhWY",
  "key35": "k46WdXk4AP3Xi1c1yQx6JyZj3XhmqQK9XJf1ZwCCuLsNxCaYMzmbmvm95rGLU9VNJpYNpZXd7ELV87DRFkefTfb",
  "key36": "52fMwxLXA2aacn7uYtWTQbHC8VvDge6HLyY9MZ287BQWpnPTFYatcasAtf2tCa9nFWooKtpzMiFjFMoqRiie5SRf",
  "key37": "63BkYkKx4i8UJMVNCh4vTof6T5GC6Dfve11DdTkXjoNnvGcWhedn6NWK5rJicBQ3yE2VttmBo7YFnGUQDLCth9xF",
  "key38": "2bcGRuBEP8a87TyhgWCtgyFE14aDbFGAr1kk5SU9C76BX2WkK439RRa8aqWS1p3Zavg47JxyRXGaFi2jhbbVqSk2",
  "key39": "4iURKcxzHWBuDKUMM1UDi5FUEC8YsPh3GSGz7PfMUAP2Q43vCzKdhQUWra4qyMtNAJeAsJU9qWHq9Lw3aJTz2GoV",
  "key40": "5hdanpnooF8dXVUwxTXhYCoYMEbF3sPKWwDFa9h37gSpzRtfu5qke33jKeeRzNf1JQC1KKw6pVF3g2Jq8vKTCZjc",
  "key41": "581Ehp9v187q4whzsii3kuqWJ8ZigvLhNo3PFch1Ja8DKutYwEdFyWgWtsWq14EJVqBYcFzEVnNhFUx3nriXFJ1Z",
  "key42": "3QWhsgzr8LrCzty2FCGeA9woFJqFJb2BjCSkyavHtQsjm2McjMBKp4qfgfpSRTZ97a44qU8BdEErAntoVq2iggc7",
  "key43": "21HUnXBQYy5t8SufoiuFntyEpgCXcBW4bLJBqc5DvrQbGWz7JizAASgQKiSjEyMfy3Uaf8o9sAigfyioTw8aCVZ1"
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
