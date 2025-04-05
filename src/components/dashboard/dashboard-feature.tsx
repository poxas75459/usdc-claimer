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
    "4jmpLbBEtoeHB84U47SbHF4fozwRfXeo1BZG3t7Vdch1dHGK44N96wT6bvEqo9t4qndfBNDYiHeSkyokyFHdRseQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39UGuxZrKrbLiNKtYvivN627CFPtQ2u7C7bZZsXMUFriqEojJMZp7CVzEae9Sh2ADQznehhx7noWWTdhbdtwMQnP",
  "key1": "3xeptchp4qMsD9gE7L8WnDxQwgToTeZaSGhv6AjugDeW41oggsRqBpj2TMGUs9HCo8QrrTYyMFvCvFFZMPBW6G7G",
  "key2": "5VVBds9zkH5MwjLg8LaAvyg7pvgWePrL3TmdWQ13gH8y6387XqoAnf1i2EvwfG6oLhmqzGDEVfQ8CTaTpP4ZYnyz",
  "key3": "2wBcmb5ufBgSVSvM2yA49Gd6SZqm6gKeS9qndVZTkemiRemptNjvjNKSYjMafgvJ6xixmRf8bGJvpJAMAr9tC5vJ",
  "key4": "3sqek5wupNNhyYzw5ZdkuYZYJwkyDHrJdJCR3nS1zEYj31Pz5HGUSDwD4rvU5FwkwqkCk7tdRAgZggoXD1ah2q4e",
  "key5": "2SfTFd9Fge3UqNgqqrhpCWuDeWRnfko9yt9EMneAcAo2axTJKQacASUjVcKKTjSX1xqVuTgHc8BzjSZYUn4vLDVu",
  "key6": "mvo8179E5dkyDPatLr2r5j9T8bmC78o2ctN6LWeRMW7Sj8z1CyQp713cifH4oHDaAmBsSFWxan2dSbTPFuhvcDk",
  "key7": "5mbkT6hGChxPA1rwztJvuHEuKN84c9vZZ972eD3EQACtS7ZS3GcQ3FRQ1N9txEVz2SxB8N1ku3imGczLipw73TaL",
  "key8": "4misu7cRLUUBLgNoEA1KvnUPNcREoHSs5ETnQRrACuTMPqRmvWB6DTcj8YY9QwNBYEht5ysmyE6Rk8GHvbLuBykQ",
  "key9": "JrWgFGYNZsnvKAzrxNtxsx24MMMa5Wi4oAP5kV11Bh62z4ya5h5EB7t8iVvK5WTPG9bcNFTXFi3cvjPeLhowiYM",
  "key10": "4MescdLKduaf3wacqRNSrvyxcCBQ5NH9ThbKEpfAC9PqrWceqAYTMSmZwLJ4u9v7RsVSuU8V3e7n9gZn6nHZePmo",
  "key11": "4TCKZVHUsCutENFvEpSm6zJDgCAqD3Gv41mVizQ89vmin7PkwnEPU1Fy7QD59VwkYrVdWCuFyXqXemNKVtwhUjyP",
  "key12": "5WLbQEH8VXMUcHSvzAfWAE6PVjjJLno9z35my5M2GsiCq6dC5S6Zep8kCnwSyU3WbndNWpgwGcSvLnSZ89aQixzF",
  "key13": "41wRudU3nyg5nm2JkZTt4cKKaMeXegvYMn8mE75Zmvn4N49Waz8mswNygJ4J8S7jfoX9vSMSDo8UMsVToanzgBgk",
  "key14": "2CzSw5SiaWSy5gQynQqVcoZBS7yRKvwwJyBHKfESAq1MeyggYLv4JUXSv25tV1fvJSxBBhnj2HuxJxnpBdaPjrin",
  "key15": "5LZGetfhDMBYyWmm7jy1BxfBXB8JYfiVNh9jJZUedQDxMuqJ7cUscbTySQRsxUeJ8152Q7fT3A5itUS2hyrPryQ",
  "key16": "5gxWxafHNEBmMvrZku4m8gcNed7yjzXu7R6NoCS7RKVkavQ31g2PDws2Jd86FuHmJQ6tfJAa6jc3wfwD169B5xpS",
  "key17": "dcCqQaLv8XwYGkYWiHcXhhKhkbJqHGRpYWYoxNCNkQDTgAq9wo1tp1ncthY4hjxG8EvZ2mphejjkKDVpU93RFv6",
  "key18": "2fp2UaTeJ4Sd2EEFEs7511CsTgefeBMy5kRPD1yMmbZ1DgbDx1Kr24VdUwJiotcA2PWRdDeobLGNNX8vm5X8HefH",
  "key19": "4uY7LdjkdEMhPjNx7HXuDZ4ywxwsRznN1UCWPFxTWAct7LXMD8q6KbfmFmhyjuvmGspTq6JgiZJwneCq9p75G74U",
  "key20": "66f8LbgEuEGoHmEsh5VAvadEMdY35Qu3QZMFyx2ywp8NbvsbcjghiJanQtPz1wBFofNDQFKcApmNobA1gexwgKeB",
  "key21": "2MKvjvZNEZ7Q3vDAj3TERVmxdWxZAPBZcpuUZ9cDeA88mH5EMFJyc3nADU2EpFr3zEdCbaHszvpHaQPiWwBa1bQ7",
  "key22": "3TikL1qCyQs4QEVUgeY9t6zC8fF13nBfCCdNdeMqXvF5BJwJAocmdVdVMRm1753QMcT3YLvYhJpfHvAUgSJrUWzD",
  "key23": "MXT5pQ4VyDr8fxE91bCdXoBdb9SpCeuShiynLEsd62ngnqBXQY7ZopHh3sfnhLkhV5PSxKZkwvDbpCJj97kCo3r",
  "key24": "64xD75dYA89wY5Eu75uT7z5zBZxeaNiSzxK9hQKpMpb5hMXftpJwTQ2QX9P63HXvAft96Uyou2L7ZsSQjMts78E3",
  "key25": "3tFeMkUARdYg5FNcfn16HGKuyRaUC3DGoqJKAexqiZcCprHVhyg2Pjss1wKsGVuNfCNZhfgWopWA5JmXRHAuiPh8",
  "key26": "21ZKPUGFYQEmGx7ZPRRLQi9Ugc9n8TCZsvpZokGRWK9FG943SDtg6jLdjwJhYwkvFYpM9U1hAYECjwTHwePyo7nF",
  "key27": "5b1VbAUTnjNUDLGnqhrETNPddMybKFMd88WEqMf3mEJFFLw8nZzTvZypXgyp9kQxQ7GmNQyTpz89Xnk6uvycyH6C",
  "key28": "uPiXpmVN4q46jYSACXsBn2mBh2vUTYe7cdFgT5VRjHN48T7Ahro65xqsHeZSNjgvU9mSzEPYC4boscU92frsPX2",
  "key29": "2X8Xys9mPPfNJf7UNDvgR2m8y1RmZ2YuDyrF3GDm8sQapD33hmB17r3b7bTx9zKptYQ2HKGLRLaPVHnXThiYMYxt",
  "key30": "5VtwEDTRPdVdDLvk69i63465m6frb5SYzaLUzYSmPjMDcCoCPEJRbocbd23JfXqrJFyUHDCMHETLW8Fnvpb2E7hs",
  "key31": "3adNirifdDdgeA8gnZ9p3SSBNQthj1ZSrPewRTwqGGSNdv5gva3R6Lrd58kyECjGtHs4dKZjEP9jmTEWHy3HCbCH",
  "key32": "5ZKbCTgPGPGczRewfwAfGzhGRyc7Xkjy514e5HJt1jDLt1voxGi7SQtchXU9ypxfcmhtXUCHuGyjzDEd9yssFBH9",
  "key33": "5QK2GZQcFjmzx3vx4E3V7PT8ucW7xvh9yWkwevqWzkPLtCWNLsLL573yEDYT9Xku5fvwH4P85XozQMgGtzHEfnEN",
  "key34": "28L8DWENwpDAkSFRwL8HDNLwkkApvhSqPMtUoqCLbQt68yd4DCWSCfVzWv2D21VqCEpq3zGoBAjZyWyjAX45RjKS"
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
