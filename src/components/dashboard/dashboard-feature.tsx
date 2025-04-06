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
    "5CAWTcSVvmoyotgSV84NbPaQD5MeAbDKgWJHDJkUUpXjUocJfwigZyM2SwD8NWdYmeC448vncG5FL4K5B8UwZYu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wBTkXUeXhcs48c96phxEPsrBXSj5frWifAS6LNcssV6ZvvpsnB1URVnWqzzVVbcSPmTSdGUMMAdHCcL27nSEXkM",
  "key1": "2wmvC2WPymGWuXrsZSRybHZXdAxvLGuRqN8RFoAhCyvgZ6Jp9pbS76SskYs3nxrqaahkcZJgevPdAqzeUaPJb3ym",
  "key2": "5fK63ZUi74WK4DgDkw9wn16u5xYh3wgEzxcfhYk9eUYggPjeMHk3GpgcXQWQ613UU5JxGJD2D8Ep6Ef4wMrwEyuN",
  "key3": "4jKk3FWgQPkzbQYN5R5BMPncU3mSpUNFQdAja2EjeFNYC2Ca9hyEPmvToJnp4mSXatrisJd4TxFRxEprwrDY9yKu",
  "key4": "4vUCdtqqC8qXL5A8YpoRM6WoqBzDT22EgoHVHzeS2no3vn5UngQcdbbQjNdPbrVf9uFnwmirztKZm6kVNt433Dxp",
  "key5": "5z93VSZg6AhxuhAmSixfePLJAuUmAnyh1ZY4Vz5sL38wESov5kG79gZj7HVCvCoLjw6M87EZvhee9h9HXUQZaoBJ",
  "key6": "GNKB7uapd3DLw6QUUMYBxLDMf7gmFSmmzsbAUGDosrEpQoNg9RBkobZmMoLV4Wxff3pBp5Xtx5QRQFWohHuhEUT",
  "key7": "2njn38jkc7HJFUACjX99UbMxgvbaGpgF3PRnvbPZhmQs1GY7ng6kC3qHY7YUdZ1ENcVc8nvFPWD4uujVteuxSEBq",
  "key8": "j29ZEtWGdHns5rDRwUYwvjXrxb4W8ngcseG53rnLwEY2vB2MQitupAqrMbA49CRtNcUuGM2yR6nu8HJP3z1N4Vy",
  "key9": "2jqYnVuwhn5nWGx75aBdS9vuK3LPFwnT1ZX6YVUy4XJvAuihJgYMXTSWQGGo4q47QRpBTLVpwHwspFSQtAhK5T71",
  "key10": "5BqVmCqiWUYxa9vjkLMpo6dUJESusDeNcgaCzHHMY8M6uDLMXotiUgTz5uNvPNkZK6D2NUpuLuXQBRqcKNdfoUgn",
  "key11": "2Lf6Btc5yNEeCsLwVc2gyHVx3eKWb6iLYLuHXQsi27iV7n4G8pJzWzMTtYbDKA7K9V8dpJzmEMiBfPiKHL3d4oYC",
  "key12": "4ypVdf7C3shYxQK9T1ytPKHUbzPhqTMthfyESU8GzsLf3MvsDWA9HDamnGkXYYfJQp4xNxgPfTzPzXBc8yFqsM2T",
  "key13": "5PyStSmGYks1NeX71Vga4kjHSfW8shXQcyQJYijretow4qNku4c1aHg7rF9fGSHsQP8VzcRGhEwHkt8EYSVWe4oh",
  "key14": "tsRXEBkUQk5huuHn3GWadaAqzyYzfcHuLc3PtCeSGpsCESbVC64EeYe4B2Gcv5zJWBqSd7c87gQamMmg6kBRkZT",
  "key15": "Ta4vRCWS9M2rUj6TYFL4hXwwDu4dF5iY6Vv87Yp7gCz2Vda8jvZropJz8CL5qwFHwm2rUZ9LiF3HgFBXes8fvtn",
  "key16": "4VMgtA6rurXsqtUPN4BdnP6M3mw4dZ3UH1L25bXiXdu5ZBRhJ32VmtWsJz7W53nCw9fRZXpnDzXhmtHXweMG5B1b",
  "key17": "3dzyueomFjnAxW1d9mZaweKWmogCdBaJChdDx1CkeADDbkUP4id3FFdJTdwNXztUdw789yRhgqtdzHge6tHiu9pB",
  "key18": "35gh2jbEz4YeiKSZTVYgCfGp1z8Drw6nSoCvEFHXYg1t7T83RtsxmdvifvisnskfXdznXUnVQiEFQh1eqv5VuTAt",
  "key19": "3Vkybrwck2gpLSm1hGTdRrGHbKYadCgjwCuDc8bheDSmDQfCyBCmQ9Z5GN2yiZ6edghH9MUvuAwJfPo7Ni4Anbwd",
  "key20": "3Zujty8J28Nm4M9sbrBHpXuS1gyHfCCReqwdZKmfGVx479aKgeXmpPttkgsB1cQQoKUYrr8hZup5m6aHkdaEs4my",
  "key21": "4q5QK5RbJR8wMMPtjGmiyzntAo4sjfHsuwqJpAoBydp3UgiNtpbipyDbizj2xj5x32Z4N7ePzFZZBF8iJGiF2QEU",
  "key22": "2P7zCWtAkKapuPs4q4GkSQcKr4tGWY8GrZFDAjCKij1v2jRjGBQYwe5Jha9hPVL78opKhpAN6J4gagZmSMRE2oQh",
  "key23": "2cRs7WMprEP3E6PQ3Za36h6Get2Wfa8cojPTN9hESyTWL5gYN67sPHsjUuJYdS7Kn3T625F8DsS2XSdi8QdSNYfq",
  "key24": "2REvjP66ZnvvU7qcPtBWwr6T455o3FqWf8SnDzMdErdrbcyWXV7Beu9FtA1qsrQit2SMWWceCyfnzzcJCPCAnWg6",
  "key25": "2qeP7s4iE4eArBs2vY9DhhsQMDrAttQNpz2kuLPDic1jMjvBPBNG31p895QYhdCgtXvCMJyuy7YE25wKQJefwQta",
  "key26": "3vE7tkCUMpsRVE8kT1oconoa48mwGAurEf56sukoaLLVgDK6KVfDrgizDiFneyaTmmawo9PuHBohBxAWR1CffJJN",
  "key27": "5m8TchSJuaEHmi2mKKAYHPwaBNWjq9Cz4UppwFy1RZrZWXf638pAyu5m3x84whqzW9WEEkzrC6qJJgezQDyrCR5b",
  "key28": "2jLAFF5fFdAWn5Fj2xbHQ2WjAiLqibMsfyZhNPyWCKhWeUdNnyiqn4SC4JRiwaBd8X6UirDAA8GixGkjgKkAwNzA",
  "key29": "4ukhTvwV9sxDns7ZQdMFxkXUJiC5mks5r7ENPsBkN4bqVPXrPodGEGF8YgWPZkD5uiQt9ZyhXndgyfZmJtictjSG",
  "key30": "5yTi42Uz2FsguRFxiEZUT4ubE5vvNyxt6n8TmHAs6c73YZA168bDyAkkKohtFue8TXgm5E1GPV7jqcEAYeSm697f",
  "key31": "3ZJjyFRYVgC4xDrozbfaySNubvhXhux1oyUKzSZJuCFKVAAX9oC5FLEQmvuoE4WpLryCXPwgKamgQywyznGAZV61",
  "key32": "46MQaKYKFqtNvZHkcVgWXAa6qnXTRqa55j7gU9LwqFh3e6EzzePvL9F4mrfJVRqZGnuRUkKzjiDNoJ2iXsTBdocD",
  "key33": "4KujS7QJiuAbNQBTpGaPCLksVsSx5Zma5TXADV6WoJnamjfhn7HLyxMgMLTaW87d4hFv8fvCYsUMJduoTTmyTqvq",
  "key34": "3pfW4JApBaLrS598NVC7fsjNyen5qWVVuXpN78VSEgEjQcWwUsrt1sJN7XE7wr5Mvb8tE1hFgfyrJntrTEKjVdZ4",
  "key35": "m6MYjcbrjB2u91aCbD8YZWdjx8dMVXKGAn5C2FF9g91FdHRVQ8DN8sWLjgC4zQMcCzpiCpSSPpuNaXzoz2rnAb5"
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
