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
    "32BSYXsASknEUL2mr94UMKwV1bwXxxSNWJtqS6HNhpqS4pn4UQxEEyFgjeAcxTMLJqXwJYcTxKvWMHka68ZzU3AM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iUfNcD5pbtGrhLJN7H62aydZv5qALtNspvTozNyJoWd4RN92rYtyTgxUdEngG6c4SLKkozjfPvAuKvUeg6wyE2w",
  "key1": "2Fg74Gqqyqcs1VXJrqusD5EcJbkTwPcVx6N6ZcAWm4Ken8ukEC3Fak5TW6wUrwX3SpE3D5GMQF1HU15PSVgxAwe5",
  "key2": "daLMJJfACPcQq5hbqDm5Y2t7651vwnQDXZvfHA7fjnbcqrQhFDWFikmZFmQqceh6B6SEsMsgdEz5HdTVnorY4co",
  "key3": "4s8Wm56SwE8xMxWyTekHaVepiWWqrv93PVaN9pabd8CFma3Zvdwhd9uK8gGeaDttoWNhrpHvbMnYZM3YKZk3iHLw",
  "key4": "2WLEx4RpvZzu7xSukUDfHA5c1saB5LA1bkAafLPfiQ8m3B6ZvuinnM4iyRXymDKuGorzm2Xvx1pDZbn5wVvVp3hb",
  "key5": "5zBHzMujWosSBwZC5YW1UWMYPRaVkfEwvfLxpHSrqNeBWXTRTKGtZVcdtFDprFosYacRrrJ8gdpZtEueZctkGK9M",
  "key6": "5fcSU3UBD8JBSgsURK7EEcjGNponkx4VDjNBJFQuNketbi2AcK7Hxd9cnjca7ePdL62NHJ8D5uFPoTojgQcUbWS4",
  "key7": "5QthPNbxaZHEjAfZ7ivfvAasnrg3TBMAqeB7CLGRNoQftmqLn6B7suBSekRT1x8GCyofCH8ucMo6FHdoRhx3aFhD",
  "key8": "2CVedmhZmoh32NbZKbLMwpaRUndR9wQCFbwG6BPuyJPUk9UBL3R894sgj9v28eBiepvGETX1eNwd2j4M1nzApu8g",
  "key9": "32hF1cHZsmoBkchf5irmvxCCCwNr4xtBQ2fbNgeYWgUmUDzLbCX1Gn5LvEL6ruqygmbS6TuWMid8kBLtBDVXL8Mw",
  "key10": "xuZXAw3X9vQNCC7cJXn3RBcvDMCMSeiheW5Ya2MUzTnSMjEhwboDgzRKVEGkyNVary2zvFwwNJefJxBDJaK9s8E",
  "key11": "2KVkR6xvvUfUEsAuB5pR77QSbRJ3cxFA1SkHVUNDjreVXhF5DEaZXk12sE7XEdv797wMSr93jgxxV5CFSmoo7VNw",
  "key12": "5gYxtVX1wrXmHF1YcSfQSPk9mZRcf8HGGmSQvxia48Yxx6HB3vjfAPXsnKWeHVc5Mt4BYfgDwU1tz7mKyuKg8NYL",
  "key13": "8t1LHP2tJzTFFEezTPJfc6CAnJVnTejue13nXdZftSG6CaBhugdAmRtYovENarjUCCWA2aM9EyUe8YESCZs5sMz",
  "key14": "3SKJowPSAHxDqDPXQbXVoZMThjbw9jXtQor8VrqmSsQv7i3qH4nCAy2PpDPikQv5YNuZWQyVgdmufvviVa9vduN5",
  "key15": "575ZPCNjww5LACSHvgSqsZHfYChF24kwaQ4JMLJ5Xf25zu2bJPqW2Mec9R4aX1PMUsyutHqXeaVTumLFA2sU9hd3",
  "key16": "5dkdUC1uoYfXkGA499wuCziLjVBmhX4wQpJwQaFp7oEr6xqm3reWiB5WWf8mSoqmPgdjgWF969ZG8xvriGDqq9LQ",
  "key17": "5MXF61KkGMmScZrfaaMamNwgFBnZ1yqNseR4NeD75rs8Yeypnnc5DTcC26kpApDqXobzgtUtPeYbjbB8Hx6eiQvp",
  "key18": "3LjgrMKhMY6TB368ZFCeQWoivSC1i78HnEzeFdTfFJZ6VctJcGFz41kESGCqPiixVMKbVdZ28p7RS5AVgehaAgn5",
  "key19": "3u9QNM4kKnY6iWJxAN7W1cAo24x5c74FaMho1XUFDTRZ3auBkrqqHRbsvGpjSHaGk1yYPRtUeVvawhoepqSKCigA",
  "key20": "4xmb9Ku7hP9N3UFRQvGeyNwy3UFcu4sV6GVNU83UezH3EMmefXBLkw5UWSZaVH82yrNCMxona12nJwUXTJ3ZCKtH",
  "key21": "2kyAYvMFxmw7BqDrAtF5BxdnnnLVCDLzMNTavfASaweamYmho86RU2vKFJjs6ToeKqYrBuPv9T67r9YWbGwa4nH6",
  "key22": "5EXsf2tLWJG9KxMmiuUSHX4mCLrZhNsAHkr9wH9S1SqG46JZGKb42kiPNRFkDyd9WnasfhMgRpfCQ9isBynRNByh",
  "key23": "4MirL9UyHymWkFdHKGM5b7Gn12hwJrTA6ir75zEUKCFqm73eD2pd1tRXwfqTpN65udMPKaWzfTaH4nfKtSA4EVaG",
  "key24": "gkbQ4DxLLCjNxn8waAXUik2gmGNK5DdrZYtxJUa3XK66S2BXGbBi4p44kx9BVQriwvXye88Xdb6XcuZbhpro8hp",
  "key25": "sTqJbtAj8seNWMZTYA1xHCt88q7fUymknXFtBbMfHWhpsbSNhESaQgNq7Ked4KtNUr6agCGihMMsSjc6WNftPQ7",
  "key26": "MCeY2qrjTkdTkPjsYxWsUQ1BfsmdXBXR8YzkJpuvLJugPkrAg18UPRtmzrgx8q2rFFutXdgXFerq43cnurb2x9a",
  "key27": "Lq62QMV3ANGpd2j3J9fLA63Rcb2ZX4Zg9uJWPX9p97zYMZTVuqt4kjeYCrLpAUKUZUY7sqDonfPwYLxEU415dSc",
  "key28": "5bx6dGapHAavutRQFocwNWaDHphoNPKqEtP65zznmMXiy1vFU5p7MWUSTEehvu5UYvrJBYf2ZbP9FpVmcTcFUA2D",
  "key29": "2WAT7aN94NyXWi1W584zx2Vso4cboEJKrc34veDjVwVk4R75GLxZGGTU1jx6jEvjXSst25Tb4em42fLNC1ZXuhJZ",
  "key30": "3w6Dsb1TWkasR6aVe7ZjXw6BPcsBJT35nbk98DePMHGesyfMpNe2La6oF2k4ZEGbNccXz346ps5yw543orQijMmG",
  "key31": "2rddyp2Z84EHNQov57t2b3NCA4NF87S3h7KndoWv3jAZvFSkABgE6qxFa2JVgECmLvesC3vFaBbefJVARPkHYVFN",
  "key32": "2HHw9DSJmwvHUaQRAg9eGCE3QFgeW7HsQ3ojbheXU8Lgk6HgWGe3dPoGE48KnbiFdVpNRYMdZV6gjLobZXnLMfvr",
  "key33": "jA7wo8zmXxj3sVjH2M6PP2GX4Tdo5Q1s3rUbRLopPwTsD7CGJ1rEVV1Fap3J8LCSCxLmtNYy3UPzARG58dX2EqG",
  "key34": "2tZQNARtEXxWxSq1dcm3iutgW3GQxuZNHcivaYHU3VirQzZJicoMtxEiH6v1UJAhfnnfvnDrzdTi5JyXbTL4d9iH",
  "key35": "2k8kXxJRvXaPGAqMRr6AqHkYWmCuHAdJfQsDrTV4DufDqHsbAmZpSSkP3zLGq6gW1ZToUzhU7fAa4eNzuRzrXMeF",
  "key36": "5xzmYyLqAxppWMqzsRWUxkvDfzUsoTpFw1BQFDmV7e175KnyAqE7fbVPHWr9E2arQiyYeWv4iqhXFKFRfobZiKXB",
  "key37": "1t9DPvHCan4tjeTTX8mHvbxZDVAejJ3zpqtd1Ci2UpM7gAKATHJoyFGZyrYLzgpqv5Qz82fsqNwHTkFwRXbjZYc"
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
