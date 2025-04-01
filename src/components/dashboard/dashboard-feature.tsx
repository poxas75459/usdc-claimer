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
    "5FS3DgXShhEdAx1CHwRMfixBTgum3GkCDez6Rcax68v3SxgeSySwdzNop3uNEGwYchgXD8Pfr7Q98MieTtKQEj4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2troUNmZuqLSc1F9ZnW9oAZ6vSwue7LqTyTmr7ATMPPxYSVzcYPH1LDHyVZjzy8FfU7idNXViKBo98x2WyAYDm86",
  "key1": "4TFg4Yd7XJmo8p4wWqeEie43utHyGEeh81FWEuuyrjcxN3SA4jkfyE1Yzk3QXFfSzvCRFnuG5GKC25D5tResGzS6",
  "key2": "5rmzQPhMGPHPW4uu6C3SEiMdDT3jHCo9p235CbXQZevsRgsdf8dnNT7dFXdJRixkv1k7aWbyzL1Pz1djQjKU895q",
  "key3": "4yLYGkTsYg8AR5ivfx3PvgnSrMsEbEJ1ghB8gAn7sDdQvdj2Sv5pdobd6dfwWvk4SGeBdGrXVTJHp1Vm1ABtpqo2",
  "key4": "2SQDgADbN9cJ4aQ9KaLpJRGXHNoR9x3Un7WiA8VKqFkqz2d3VbErHEB8F7nXi863e7cd99EK4iDCZEAXMgAH4cEV",
  "key5": "66mzQSM9xWhN9KsKchraAy5vmgsiveXycPd82Cp6mz14AKuY6xZLJkYSagTnDs2YQvnbsHg4UrPsQWGkdxfSpevf",
  "key6": "4k1eqyok7zPxWc2D1nDJWAy9jhaquzgUWvV3di626MpVKzcFY12oZxXhKrGXKWQeH752R1R7Zz9H6hptZn2oVzHj",
  "key7": "5gwudt39wkhJFzgmYete9SGDEQZPAzoyF4Syfd9FjgPG6KEhWo5dWZAivEbhrwUqyY8RXJuVfepGMTVZ3k1aJShb",
  "key8": "5xr58qg2jcJk9XwQLBtTimJTyJ14Szvg1KQEV4m4wxFzy2YyCuwHwjTAk5KM2CNDgpYu1brac6uDybJkYJ4FQsAx",
  "key9": "36uAo92oHp2wEajZJ1rp6Wj3SVf9FGzPmR9S3TTmYxpAxmEQyX3jDUGwvuxPeQxbTL7S9w24be9Zsan4izrevkrP",
  "key10": "4HegFpUrMrU77iZLj1jnXFqU1AUqbUerHgd6U4fvoTGWVatFUF3PHqfZpF7KoCmM8fWuMFf3wCqQwidQjtWbT8xA",
  "key11": "4n9XUpGfKT5WSfLWKzGVh4mEUvdBC8p7gX85HxfjLSUPm4mLV4g6XyorkobXCPPhdfTiYkapKQvxyM8kp2q3SZaC",
  "key12": "4WZ8ScEHJxXuSMv2Wu9KGUyQt9hmsN3RhnsLcenk5ad2Fd87H2AxVaXfnXwp2UFsFUhmUoPN2MNhFx9BhQtTsVq3",
  "key13": "aJWVK74av8hPjycH35zsyXdt6ieeujWsuAezstdSYwqy57YMnrJBVUTqeHRMTVw8RTBBnqrRPtnU5e6htKnUo6S",
  "key14": "3dJaozV3PFZDTd5uxnRSKuShJUs2iCsoEA2krXQiSkX2TGAcXvzxAXpLgZdwL9N5fces9xYmEsp1mnTWbBeBgE1T",
  "key15": "2cCUyu3eCEVMTjW94Br45whZdpkr9barZsCf6vGrMXEqNBYYfV9WWDSoDYaMhzHAyQV1Z3XfBex2KM6NktkaiSNW",
  "key16": "351FAd1FV8HJv3ybZxFWkiYZWEi2uPeuZkCCCNQ33AKZ6RS8XJMh74eBbWoWz2R96nMH1HNrVJHAybgpAF2DqAdp",
  "key17": "5RgLxWHtdQpZ7qD7gLGKr2bfBuPizATmUiWH2sMJjCxYVjmeuZCPPrjfTzjFPfbmpatZzyfLt3CDph7T4us5pxok",
  "key18": "2FV5FvLMKxPGL6zgmQs8MAfL1jGaVqR9K93zM4jcQ8G1EUZvUJzZJ3nnytWBKapK2wizJ4GVkhYESWqdXYvQidWM",
  "key19": "5A9ev4WLBgt4q9ZWGDNkqFrzdji9map3Tr5RewarBD1pttHAk1UV7hcKc5nG1tz3cj52o9YuWQWWSscjW59rHxfT",
  "key20": "3WdejY1ipWweSNokzSY2fFthYEZVWQLY1wZdzmLzZp58YZrUysj1VVwHru7XPCTyK9UU5sKve9kCBgduLnaRCTVG",
  "key21": "3FqmekSdPpiEXZGiwXsPqUMvgLUxqxkrTWX5qDr8tNp4HxHDHM1MahgF4mk39gN38d6wjF5UN7t4NA3MFKUTgaBq",
  "key22": "LkTLF4wWjfAYk2C9cSvLxcQ9FJWTBgrNpPgpT6zq6WayyQHRNMpjnnaXoytbJLHc4x68LVmdU7Dc8BSo5U54gv4",
  "key23": "Nxg3XyWPcsQdF4mvcQ4FD9cRLXmHtxUUHhx3jW6k4Wf3VwbE8srHFMULKFW26JAwGW757RvaYeRsu68btmVJmP7",
  "key24": "4Bfgygp6v4zFi1RzAAY5uYAcm2LDQgNNPN7uvAn69wz9XebwL6pqdRFav3BS2b6fFPbewXGT1FVokXAgBejqMydj",
  "key25": "2VTJHmDWqXSpqYQ4yxvmLdHveyJPF1XV4JN9V6LQKfmu7N4xe4v6PJYeSbo4dKN4iendTTx7m7kaK5FHkWddciqA",
  "key26": "45SQPKCLgq9e4kUS74caqYGYXzznN2TpocqEUjxHLvsxuHek5GPJKEr61bfeyKfJM5AyA5o11QD5JYTChUwxcrqG",
  "key27": "5eMKs9qAw7X4ALnE7Utv8ph4UUkbPketDqXPxYinWtSRicx2kYJWXVGF4sJbLhzDBsfotCitP1AyWwiEiwAy7WWa",
  "key28": "4244gN4BMGmMMQorJ1KQSdvv6XEeZcj5uQTApYFDJyEgepmbNyWPA5muGB6aJyEGCJCtrj1Z4cDqLA2eK4R13LrC",
  "key29": "4SJm2KoFqV7uruU8AhHueY6wfXYqE7tR4m6XzbbuZGjijve2Tpd2wLfTRazxvYsuwtQwJitcWL4jRfiXssEBHLcC",
  "key30": "QmWw258f8aeBz6cjwuD9HGzf5iYYoc73hQSRPFYUaucKy4zM25tYFEUx43GFPVJYx3TBSmWrZMfHvpagrU2uRna",
  "key31": "DWqxvBNWFrrnhVYzCyxWifAHrkAHyRDeQFYM9fLUi8JZo6CxWMyb2Xd1v4F6ZrBrp6rmL2HXNEmZC1YDdNZFCAj",
  "key32": "62SyKnRaEuARc8tiNYTzNFDaiJ8BA56xLd8psYfnWG3RPJi81QYfE9w6RQx6CwMn4VvgP2Nqju88Mh4c7FpCrBM2",
  "key33": "NicrKK3P6pVuFwPCPpNtn1XGQqp4gnhgeNwsf7vxYBoL6urS1aoYpafQ6FFyYxmkSdRGKmt12eFoqQcF4aWFEuu",
  "key34": "7bf4cZt7gpPJaX3akYUxNbFjvLMtPhLMs9g4NjoMTA6Y2doSpQ4hHd4wvxuX1XpxSr3dWi7oouLfrqVs4dQcy1v",
  "key35": "4SRLP7NAU2rqqquv7FAoyzXeH8UA5Xw3dT62BmeYnVvCbi9FmriveDTMk5V4fhnvdQLSEW7oPkpoJF5UCHFdcq8A",
  "key36": "wG4GtZaDpUKZAVsQdr5sbDv2pJMAz9BAJyvEN5WhormNkkasmWoi9hq87r6qFCU3zfHPv9Rz2cPqunWPD6WfqNE",
  "key37": "3tTWx4Kag8Msb6AQkPwcctmN9JGYFMkUW5Y6gdvUuRhbenMabKXSdKJcJJEwxAjKmjtmCSFmwPmTCDBnXvJZmRpJ",
  "key38": "2URtqwEucZ8DdXds6HNmTrnVreDNi3moKTr4vuSb2GXppvmgU18YzCTemQPpyoSsZ9yyUpGCZnBmqFdkCqx5vsqX"
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
