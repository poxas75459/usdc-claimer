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
    "5jMAF8d5e4Kc3WY8bX1rdn6oDV9NzUhn835cpfASnGGe3E1KvGhofqJsFPxTmTYUVT4ppcAZ7E9Dhoa53SzExML9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45RChEAox2v4ATVwBVkjqceg931FdmDyG6G6Ct9HMgpwMDdFLWkCYKgRpkYdUm7rYZz6LvVQ6g9UYo5yyz81hXE6",
  "key1": "VBftrFSc8koRUGg8j6dLyfocLrcFsDhN3hLVEy3WcPRSdsU2cyVr4pNhV4SohwTG8pLJE8WysxDMbkRv5QmUHfb",
  "key2": "CVni6czq4DbioZ6t51fS2fTjUFHRLtacWVjFKdR2juWsRmZLj1SPgiKJZafzXfn7N47KMXKmmwHQG3CTPF8nCSB",
  "key3": "4EeJw4QhoSGUG2PJ6dGBGj9Qaz5HV4GNwch6JBSec3DTJk9rP4ERLFtQe3d3tDghNCZmtv1UbRCW8LZ355dqM8qN",
  "key4": "2FcdropHyyqbxfYWmDBuDCjVVRf5cixCMsCtUbxUUS7yJdvuPcAAgVP2MziAwtAh3X8yYBxMjAZsYseiV3CwVSW2",
  "key5": "3DTMok1pcagVVUPtecB3HjDUNX6ynwg46x7sHoJsmrZcsbskQN7V7WPBGumGHDNfPo43zqtzUMTmvRJDadLsPCc",
  "key6": "4TLL6icGcRxn5vmH3njy8ci96TAFQ2iQhwkvQpwbQZCyKg81fN4aK3EQUdNFkvVZ8DaZht5tBBH5Cu2GoNgGNu4y",
  "key7": "iQJRVgLh52fpiGS2FXmCH4ku92a1AdSRGXJ36nJNxt6QmZa3bXea5b2MociuPviwcoyoRKGEcHsPDVmLC8WA9AD",
  "key8": "5PRMzm2Nns6Wt2ghbrGPZugjuDcPKXgSBFcM7kpfTAEQKPkFiJrpqVv5psLWemjSMpD1zVaf9Fjd7Mm9pADG9UDS",
  "key9": "4sobEULZyD4ScUGzVHb2YS8PDVryumcH4irqqv6D3PrgsDfEmhginTRzCE4THLEDPpbNWNsyaGzwR64v2uh3rTvk",
  "key10": "5rk4PaY364Txt8ChPA6cTXyGFo4sB9h1Yfa8tbgwaK1PF6ep3AwP1iT3pEHQMenc7xea4H2jZEwxoYyKzUipNEn1",
  "key11": "4pXwpDqkicNpxqKWZ4zGTGFLLK9FJWwiJYgs6XS9oiA7jzGhBiStdhWymLXu6wg7UBYrMHN7QZKedvwjymzLose6",
  "key12": "sGsGdkxcrAQKBMFrDPy6TDhthFvGnDYV6bUwePLckhnBRLQ4ShHsjadQBbd7UEehoRc2bDAda1BMMXCzTqmhQUP",
  "key13": "3DcKkfniiDxp5WvcdybaghPfvt5s1Sskbc3Ns3FWLoDLgDcUCSAUpbE7NpiDGf1iVeFFYFvrPbXBtwhBa6E6icjT",
  "key14": "3tiaCxu4AhdkrmFDT43e4L5sAYQdSP6yrjKNYiynUXXoiR5UCXj64ojLMfCDwQomN6RtXzhVCQXKzLQQNLcGsfyK",
  "key15": "5Zi2EtuFHrbrDsdRwwKishsHyLRSQ1db9bLwoi1QqukueB8UZkAhtQh1d4j4QTQFGiv56Bi1zZRTx9BtRMfEYskB",
  "key16": "57nwLon3djC6EznfmKFCdJSKZTMepGfz3frwq8pkbieeGPxEg91DwpZ6T9EkXSVJBoZZkKEDeBNi3JMDHiBgopFv",
  "key17": "3GCGciPZAbKNn3yf5tgAGXev9UyRCNVT6UzydCsoqyAcWA3S9SyjoBfNPL1c9VS7VfAcktvHS6Rkiu1YYowvY6uT",
  "key18": "5xGyVyLFdix8C2Tj7f3tv6t5GxUAp7sqtE1VjoRsueKnS9Y9csgA85oNiACL4EQYZi1R6FUZzjEZCRUwpVMCsckF",
  "key19": "xXciGpDy9VFstJPGMUsx3JS9bC9h8mJd44T8WasMYkaqB2aXqdYySa5k4VGht9YVvLsLFmjFpUEc3T9K2qfr9Wp",
  "key20": "5A3JcrK468Ud3upRyx3ZzuSNg1Uqyv2QdP195Bj9jp9SGkBqeqHDTHovWAaHsyJdqBFkT31hFLXgBgPDaKmneAbm",
  "key21": "3rJFeX8LxBExWJ6hfqCo2TNYhBr5vb3RYvazsSdp1jkX4M9jNLqdkxpDwKsXfV3Fr4ouaa4sWsf7G8TSpfeZVvKN",
  "key22": "5YU8c7Yc2rToHxrJivzt6hxLYgWDxGSzAkNGB453697uCq7Gkjq4VVDaZiNNMTwuesDgk6JXCocdJM3xJKK3wofA",
  "key23": "59xc6HENM3Cd6AYy9ATWMf2u6bYdQkMXoNMSgVD2tUyDSLpCV9BaL7nioCFmmf5FgQcDLH4MiLNUotsHPSaawayr",
  "key24": "2DL146mHY645yGaU32yb533sZw4xySMzSsXrTJhPB4vftTea6zXhP4hVmkHHmj6uW97CMDYmWjZCjaJTPzqFQu5Z",
  "key25": "3tY89pPzQv7s6e1RT2qBBQHaZFsWttAtFjeZpBGFURCJY2eM1vP9nkMJAvtd81mnEKT4aCKaChUBj63k37DhAbjK",
  "key26": "48QNM92Z3nFdZiF1PPgAAvA25jiaMxiUkrxUmgsm4jNxGwvUXNjkSaCXDhtJaQowLzt5ijmChKBf7vQodX12PdnL",
  "key27": "9d1TQNAm8incXQWrJ3VyL6Nt7Xq8QfvFViXr2xTHMA7aopgB5yGnqypj26Bmkvs1amgxwtgak8YbPPDzVARtAuK",
  "key28": "3tLkpKkjBrmhZyWo5tqci2qvf4BRLfpmvqHxobVaEsUH5E8K8qPkbMiSnpUVkN65JZQr37S654TiiEEFQLXQy8SK",
  "key29": "3YygAzy2kfjFdnBK36XLypTtmbJ9tUr4HWp41tw292imCtLMvNcFSNDH2iEJDNSrH75WC8X37Fy6TY3MZ2FxH9B5",
  "key30": "5RF1gu4jQ4haEAuh23vLhGx5632qihoRbK94t2iELYWdzvDqxoAEK26n1CP5MBWo328pVkRJodXwzutRsgU4xB6x",
  "key31": "4XTGQUtcigoGDSnJGf7YrF4kio1GtLtBo2VqDqzPsgmzFaWUsuG3Fi5YfhLv1f1HAbU6ZCg4tFib7XCmZgpbF2Qk"
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
