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
    "3NgFU87CwVZiS8SfAXcC9TL2LL1M7W6P9Qk7b8sDUUG6wVbARTX7pB1rAJNrFe7SgWeyDfA6mNXCVNd5MZXW8s3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sZxuCDnLr9ZtirbpNvKwpFS6xidzduHBu5SzL1QaAd3WnhFqMdXRDMmfw4pBKTmrETmRBeAR2C7vUkkLUgoVneN",
  "key1": "5Kh1HcFsHHk9FHkpCtp7RP2mbXc1eWHVmfkzE9qyHWZHofdhmHnXwgadKwXPJBT4X6fYmywtAcqJVDWLzJ39Ymcn",
  "key2": "37RFg3GCn5JSn4i3hkh4HnM6CdUmQMRUVLjy9zgLQ3YU2QGh4MqVWGw1tQtid1kct5jzZVpHv2Fe7Sp3NWFBaMdQ",
  "key3": "26yo6yJM95oSuA4v42rCpfa2v5oVcasLpyKmthDPNuwsJ8KH4NzELSNGZHGYPfqvzpB8UVYsFoaFRnLamChRumrD",
  "key4": "5w1hkU24UYunndsJckPBCD3KZ6GcUvd7UAtkzgCnRNYkb9wMtVLB58uac4WjFXpQNhojwrgtwp35gCPKA9gmRWGc",
  "key5": "wGVDfbZuu8RNr2GRFmvtuJm6c2pdavPmekJRRi2fpedTH68uvmmg4NmQvogm7w1A9UYma2S7wx68Pqxfe4xEpLC",
  "key6": "4XhMXQFVTmuRMpuojGh2ehqXYiRs3uVpN1Nm5fU18hqbyztBjghFW4y7m4JHxNvwpthdb3jzbCCQRKwFYNKyHoB4",
  "key7": "2muxd6Ja8pz1KNZeyoUDrR9cF6eBKr1zPwDFNzFnkHXrQ5xcQtoRocRnwvjmnLNuXamCuWeY7DKWYiVWAFf5ks9y",
  "key8": "4dZWmtUmmQbZhLEvnZ4ANEv29B6jSJgZwqig4vd3DUmwwfEBv9EKGzXsngwjK8pTio2Sz6GCoC8sH28nLktxNM9M",
  "key9": "5W4ekctRbZiDa6unZE82Arr7PkeLuYf73AVmKmFaBSqEve8Fne2utPLncgoKCsXtkAP4kVGXj42ychaqZYnwRGVv",
  "key10": "21HMqEUdwBoiZaQZ4HKsuy7rZfH29s8VAL6rkdE8p2NHMAFFdZgce7PEyCsZwr5XHTrWhYsp2zMciHZ2a8bFsgH2",
  "key11": "5bvbj851T1EtUJCLmUMeu25NpBZCQuJJSa3Qv88BT9gfTeW1E2NyVi23kobfkvcNCByDUXdMGEDsfDsBBuKeJtpB",
  "key12": "5mfVq22a42m1LYExfNqFg6GaZfEAPhSSM3tJQ7gcYQ11dYqRCjJ6tTuZhGFAgq3LynEppr6ohqX1w8ViHipginvP",
  "key13": "4fz2qwPxLcMBPEpWk3zoJspxkxvEECgsCVVqfEQH2vGLaizVQe2xcPZPdrwYaxA3sN5L9NX3nYqXm7rvtViHqkkH",
  "key14": "5LUKXGYmBKDMoLzX6JCUM6R17M6dntyS836L4mjJ5CFewQpyEBTQdfcCM2boFsRDMErW6iuoSKqXWY7dKHPNd3o",
  "key15": "3JQKZsc2z4k6dLmsoWMKzEPsUd4rE9nR24fZrnkEqqUd7XHQLdexv9XLSD2BrT1ntzVyH8bcATvUbBsnDNcomQdG",
  "key16": "KYVb5qcKa49GRnPYrZtV8DwUz8f6nmYe9Jaerk7rFe9vXAXbDA2dxGkcMdUDdxxzkAKcc2E5XDsBR6vLU7ymk3A",
  "key17": "5zpP9vQA4579vVQCCKF3EqRMJv1y5j2twDxn8c7S7QoFLci5HWoHWaNmM6YrCiua8TdDuC2ToxVweHsmuBdDi3UX",
  "key18": "5GxG8x1x5dpa7naULGS4o9aHBjmkJu6LT7UATqisNLvmAC8m4nS7XEJTzr5SqtnMndqSokSEHn8HdPiYrBL6ZhX9",
  "key19": "5gz17vgX5mECNL76RU5fCqimP5M3Fp5BTrqmvgEQWnnNszh4SNTE83RxLKjtwRrytzQRemxzx8Gp9w6ezPaEL3RE",
  "key20": "57us3hwzV6fM17TLa7w2NsJJ28rH1MtnhcKLLCVaabfqsTdVzXRuEpuCmydVfv9mhcXUiNCyBWBu9SePHSAxMfLY",
  "key21": "2p8AXy2ZrXJa8Fd8MShc5BFXwuiQY3tqKuVHuAGYuywEWKiuNB4aS35xaxkkJkCdzxftNMiWuV5kGKtL3MFrAbHG",
  "key22": "2WvYwCUyTWZY3p2cQxbg5QM5d6XTg8MwqHi5FKwea5sZNBgWH7eHWLF1MmeMhGQSrupeNgetQ1s1Vfss5o2eXtcR",
  "key23": "5zV8ehonEt2wWso1LhBhbpMkQfvUrvYnWnXng7pcCDMjSdadX7acVLTJbfz57kfHNX8kFG7WxhhrDyPRk8XfbZA5",
  "key24": "41UMaJQFEKshiRVMCksD2NGt2XPLCG4jP2yZvE8uaw9rAr8RnoZgzwcryX26vxiVtsARQ5TF5LaSpACWFKiHjnc",
  "key25": "3cL3XtrXyXLuthB3SB8U4uMrLjykaibnjk3BUC4Dr3HKUif1tEM5CfMHJgu4H6hAznary5NYcyPxa5ujpTsDminV",
  "key26": "er5uNTy4exvBQRxUR9FWn9yNERZmUBGmpD3AFqGogrFW6EuTUG7t7F38RnNnDU4MkrEpydwvQGEp21iT1nh9NcW",
  "key27": "2RRg8eqW6EGPaEb9s9fZ2cWEXjViRBEjChiyNyw76h4L33UBZsMdU2SfuK8A1vaVuTRvhxwNTo53evo8rKKC8Z4S",
  "key28": "4yDonZiBh8XEeWa1ctYWgXD1uyMxjDDJUwS6xd83fiktuNM7BYVvegLxgscobcFuWQWUcCsxTA5YPcC8bw9iXraJ",
  "key29": "4QZcyquJnY193NfwZqrrDYFDf2ZVgf1sm23tWsAacL9MmeMvU49N4bz1BU73nPBTJhHfUzQCzv4dAFSvisaaot6G",
  "key30": "srhkSs6G96wzsZiex86H6TqSQTnyUbbZxaBxKQi5KhLU9qNnNBkNNLhUb3FaaH3DMh6vBdK7SuXoRwy4zzhwDK7"
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
