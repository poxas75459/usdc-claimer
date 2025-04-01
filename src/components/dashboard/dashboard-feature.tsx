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
    "2NikK4Efu3GAekyJC9F2Q3CZ4ebW2MqgdE9uvqkGmkKx5xmZpQaRQWAPQHtsCSJEiGYH4ErBfxNMog57y8FUoAYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zi5zucyXxLtNwNQ1wN2oRHi9XYeDkH5Xnbtgw3LwgTbRWD3drxUXXCrSjBWpEB7DCNot851gExpvGzndb5a5k8P",
  "key1": "2HFYqmrV1B9JxfNQEwkRqQpYR8D8uzY8RxLFbs7desJNg5ZFSWoMVKvTDZN1zS5ergH65BkHL8rQT9VfwE3BgQKe",
  "key2": "2SL7ohJu6GHoMPpLK6k2sboxj9Hfnj9h4z2q3pSSrXQeqjocSCzXoM8dMGQgKSd2Yf2RkBs251cqGfXEU7ckFZdz",
  "key3": "67WHw1nrLrATsbKucZgGTqGy3V7NqdTCzvQUcJu9kc3DPyDrCAFfPgvEGBZo9TxBJm7e8frCKnRZs5kqP2FtSHva",
  "key4": "36ULn5bWEgYtSQAAhKYZyyka99FBRCuHRXNm7BEHCUEN8kcPpS4owX3kJeweXP1ZaNPZwMqWarB9Q3qtF316V3uS",
  "key5": "5kFWe9Cevbedifpss1ESxCEAuLEWHiy1NYpKUYS3fZ2GVb8afVVrpjWS4CHpPzUUGZJG1U7QiGUxpmdn84cUeXT3",
  "key6": "WfgWkLWorKkZDmkzh9HveF2jfpTaMHqnUDBQf7qfVNHDje16gxWuDzYxLddG51XDkFBGcrAYpn2MHg8DrwPry3k",
  "key7": "4vpoJhGNf6redLS5rGZ5JjTENTEgaDLedrctSQjCev2reQqGYbYKF2YXhwLSchQV7JtVBjKeepHcjWNswWUXMwYj",
  "key8": "2Aof79mRtjCJs4bQvFEQ48dpswPjUMVikGrjqwe8iDG8JRqeYHeLh8JHiwfH2uwojJM7VXsKqZRCaTXib6RU5YcD",
  "key9": "4T5XfcjKWuamc7dVhjDDyFoopmauMcNaHuNGCuJ63GpQRyjRr2m5e2zuoeXqMYBou8FcpCbhmFdV5GnWB2Qwzs6N",
  "key10": "Eqv1PxBuFqwe2K2FwGzkJvyjaGFKiFKEpZ1LpNzkzMAuhaDKfznmjyGUaFdPmKHcJ37buFbK37sc6vKRFLmR1u3",
  "key11": "4yuRUi7tkptC7d9Wrey4XF2ruKfA63BDsyNPgezNvmAwiyT197nU39wDw64GTAPbeHD8q3xkHiAXSaqBTbaLRtga",
  "key12": "gJtzrGhT1cG8bautoJmVDk7ApQbAq5rmUyHy21W1QC4Vyxbh239MjuWDkENaMq5GnEvSEe7sd21XudX4qhb3Uwq",
  "key13": "4z7DLBm7MG5iEP8H6Au524TZ29b6vvUUUgpUGgyrGs4xH7KvdqHa4aXzArbTrWtVsKk9rgV6E48PUzzRW8eS1jpm",
  "key14": "65gHwUKAMp8JTa98kXTvJTVXVA9uv219MyoF7GHPF1RKGAypjSwaUNHFP1JsjJPaoRwkbLEGYxcNNXXpSB9TppcF",
  "key15": "2bxLVe91Dqi4gCiewaWZDAMpDKkUNkv9rSiQFWQazYT6iq13zvW6QbRHR869Jjrnry4y8kuBhd3RMCHYNz6Ss4ES",
  "key16": "66TSSh39tLpX2fKR7ssbRSybb9Rb2vMDpeXEBc9y7RxA7UHBm5cWtsqC8f2N6vtUZSqHzB9yvSAcFTxp9MbKxMgo",
  "key17": "Am4nntczsAoRvtbeDc4e8uRge6kmV2S3As1UL6wWB6SXSFmaRxAc4EB4Xg2Gqj3bA4uUfpLPy1z26afsEA2wwwc",
  "key18": "2WtvYCLmTxqWoV9MjMfu2GtMbsW3RNS9ECzUYncqXBqKazu473yVPvDty4cjQV9E8QFp4NR68MvZMg1MQzBvzdTX",
  "key19": "2J77o3TEa8prQrbZYpPF6w1pE5HXfYisvLkUR4YnbsMuVn7TYFGE3yn82FrKxgYPRFF7cPjtAiPsUUKB22Pdzn9C",
  "key20": "3dcUgpgsxojyTN6H2NsebZQVtpoKsZVXhseCHbvpjCT5eKttph7CfJvhMByKL18aSRjjatK9m9YzHu2FbErSsYSe",
  "key21": "EXEa2JfJ2396736YQCGuoPczojwQFZ4qhEK2Rd8eKTt1SbPH83Bzj9XuR31f8AhvNiRB3jJvdKRyUpnErNK3dry",
  "key22": "47EavqTWjrrh1wSiqZ3RsYaz9tFy8FiGXzDyuX8S3tJVtgXudZier4K97soeD8iwy5YKquJWERVeEu1KCCkkhHn6",
  "key23": "5B5LgnB4vNhup5QmmTjDKwim1vJqNx7QZhiDbLzM38nWTbvDnHCXSSDrynMC9ZFNxU4brJvcXdWEgVxCJRMp5wRx",
  "key24": "5cv7WLVpVX95v72ZAmVecAMymm85yrJKx6DQgHMeQWzZZ9Qr6qNCe1gKcQMkfhYgjDj3W18k13x2UwvGC2WmhhUk",
  "key25": "AoaFMGo1dWvsEBHn6kzTw6JUou3SFvpzGkfEDbsXB5kpsADpTAEG1WUPdU28AnybDxHn4NzVyg3pxbmaAVhfcoX",
  "key26": "42skUrpRikB5jJFR1hYaqDzkZYhXZAaqCALiJCMuaMxn9iXWbVtn3vZqGjuBhcwcW4cXiFSDbtn8a2rLSXrE6er2"
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
