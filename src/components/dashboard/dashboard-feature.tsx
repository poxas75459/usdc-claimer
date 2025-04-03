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
    "414k1g6CpUxuv52MweNHuJPp7dmmFv4w8oGqros16X1fWMhRT1TBFEfwbtznZvQL1nozo9bvKRedFCN2a5KdDnx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c5CX8PDSyJBpUZ6yhSnPrtUixVg5Xiet22oGypxfyTF1hx1garwFYUN7ixo9KotSKbdvxdVWUABQcDpi1JB2Ahq",
  "key1": "2mQAx69XHjHgR4jynAc2nTcPGGDPn1jQhbG9DR6LgDWrB1vUQvRpYHCcziFEgDeWw9C1in6oupAGNDPuuhZkLx1j",
  "key2": "NjZveuwcas7dcKe3VhC2fY9hpXm8v16BnAfY8nRSgTjz7P71dwHYqpAzFHJARg8Zdh7yswsfyoEXdLH328RvzSd",
  "key3": "3VaCNgxu4jABqgQToaYfWnwnaQkpZBtUxAUtxmvzi5qLkEj1NNQofpZ9m4FATATyqx2CAJSnbHF4G8uuRXMD66EL",
  "key4": "298hdRevkVyfvisoXycCV1bMCdvP96HX7h6qwA3WZno4brT1pxfNJ7T2vn5BomPzQFuvzCa7AiQsoAPcaYjxpYA9",
  "key5": "3QKMvnbnbWcAxYzQTZeqn1z37VrU6AhNxp8JUmEfSJPwCsqmxitJaqHdayjbDwouWcehEngrcLH3LYQgdfsnBXFC",
  "key6": "5Njw7NNM5BoE2Vgdsqz4Px1F2P5mi8PgTw76UUAoGNn1uMk8U8XiT6nCdubsUrVk6Ert4hHpr6iLt8AbCRjgyxqM",
  "key7": "94LQooNt4A9XxH86j5c5gD2PYEty28LMSWfnskPYiDzuNCsGwtvCuBFdTknz9v61v7Qy6Vd2Uae4PEhBzCMeXf7",
  "key8": "i8j4R7AsNFthgAWejDHHxFGXNUBWzMhVfpDATT3BkvymY13wStWHH1vrRffDN4Smn9hFebrMvG6th4fMAppD1nB",
  "key9": "2otUtZggNW6uf14T85ZTvmxPpeuApdELcnFrKfSZHCuGffdXn293z9xzhQh1SeN7eWFxUj5VHRjwjTHazBzyftjF",
  "key10": "4ND4xJFG1xRtiZVput1vXcmpkihB9nLjvDB5se9qYxEAJYQc6bHA7FuCJEW29vFid7YkU5MBctkxZX9LmALzNRXj",
  "key11": "63kZWKuafn25QtmwLCMH4FCE8EoRWu3JkaqhEePTmPJqyqcD9dgwfMN8oMoPf7VndMxngsSqbAH61U8DiUYt2yqQ",
  "key12": "iQiUEH3YM6MYwnbKWANUDT11aH8CCCXi3JibFkrpUZK476uAE2gsG8GgTtBznyuBQpUP3E6gq56i5GstBmYzRsN",
  "key13": "1FW4mUmFah5xevVoNHmtmeELsxxsi5HrTiahZCcREoWoWnT3hGXtLo7SGFHryF87cdG5eQx7A1dg3QvC6eWVMvt",
  "key14": "4akMPBc5mdgBNENjTMSTJKbwUrVXDVMUm4YwuYCiyAr5WRnxA7BgwQp633n7eAkgkqTucbA2SebYjyKS4beagrVF",
  "key15": "crXqhWTDZ2qeu4SQ9WRwJXjJkHyawk1RMpFJf189mescEajumFA8E5wp9QNrSwLzKajVLQrytYSfktuvb76dSYX",
  "key16": "3asBVh6frv8QNUskLTA41ybkokNgZzb6osvnJp9HhGQxYebaNamfobzpZyvwWFgJxbuJYoY5hjpmHHNuvFpLCYL6",
  "key17": "552MAhWNXe9ZTTVy1dbqeYNQDHzjgAosdfkD24tvwP3nRmjB6mqNSpjJPGxtpZBTPSZboKbiHftr58xZMLud1UQ2",
  "key18": "4p83WAPJ7Yev1vgwA3y51gh2aZczifzpA8GyTghRDmdFfWCJRwEdFLdgn2rdqPtHwne5XYXn1uCHejX7QsvUKCE8",
  "key19": "5bF6SCs8MkRJomsHFugoZXFn8iFix8oEsf5815HiFptF3BzHMkcdWGSvQE6beAByTpGcMRgjkgFqDxTGETtrMySe",
  "key20": "de3DAez5eKMibvvwqpb1JPvwT8W7utkqKvyAQNiEwAJafwRoRFv6voKi3tN1HjdWnfsspxUHFRZeBYVTeVAAtDG",
  "key21": "PxCaoFP9Ms57h8XoWkAucpEaN7fFPi8ShJRGqMxYztgqUUvP4b1n3vJUAD6RBe6EQAmx2oTTFstrP4oKyJrzVtm",
  "key22": "5fP2UEAGMUS1n9ZCjBuKp4wXNJtN2UuhNS7WPBEPeCyqzexbfUJqTpZpqmSPB5GTvcqjjxtSgx6hPyDSKBomPKpd",
  "key23": "3zNxkn64z21XEBqCqCHCaMP6WeDLXAJjxnB44tEKU3BJLwrQz1YW55zTV5zgYVcSZXhuG5wzokEwyfWvaMBTp3Vd",
  "key24": "41KRZuiyMvgeWb8H6x4DX5jy7cLatR2Hpbt5Mzss2psxQ5KmXmW37XbygAJfkjM82VSD79mU4wejKoTdC3fbk1MY",
  "key25": "PSZWs1qqotNkHmZTc8vNJZCRxm28U2Zc4fxmZeK88RHFpVDDiBkd5D6BZVMcH77SVxdRKAktMT4gYG2eEj912k6",
  "key26": "5uMRCv7eTBMkui5XxSqrhLXinDbXyU7693eG9RwwU5Ukgz5CbLuvZkTVm9THmRiuCbtRU2rL8XiHM4ryyGRZcvfp",
  "key27": "55ZosvcJyo14F6U7PxDtR15wPiJP5UrmziSrw2rSRNWmPN11xriks76QhkZsZXx9Z3oYZCZWG67v7HjpmLb6htRB",
  "key28": "5gWJUHUR23vKscpHUwWovmwiZLw6Ns1cniWEztLUA7dxHKPFtigerD7qFm4mdP332XpndHHtSHkVtfoNVcjf3EVn",
  "key29": "3jG5c55hexJgkGiXv4uX8YNgMR2A6dRM8AqNVHymNS5BvmbPw3DZCV13DFC8SFedryMABBiy3jJKgwrqNZc5XVEi",
  "key30": "4uYcQVwzt6RZCqhMuaA72EnZWGSUEmJbnbsKXz79JGifoxShdmtb95z8eeHn1sLfD3HimFnpptPABVFjNXE8SRC8",
  "key31": "4RZo7WJ9Hy5wESNZHf9qpH4qnULt8AxCEnAj7qLq1itLE6RSVZX26JsHwsBTksWRKrhReNfWihgJdMuYonx3C5i1",
  "key32": "5aFyEpuWZFpD9XdaQ96KMkyYJsQCK6S6Akaq6mEKsZzVK59TVUppDj8ZkpbVfRAdXmB3SGsByRcyCEz7Dc4V7Qbi",
  "key33": "Kzh7jS6ymcVGBNn7qPnTFT5A2rJ4ht7a3WKBRcMZoMLf4HqHurQpoGM1bGduWM5bFhAW9GwEjQbWuPxhqvqGUE4",
  "key34": "5K8WFbKu4MbEQSvjtYraxGykvgJATvPNJtgXYhbvEi4tiJTEtxS2vMk7Cd8dFhGVG8xRqJmqopHvPKpN6wh9Jepj",
  "key35": "3Cn3dR2uUy6LKC9wf7QnSq7vyznrRxZC8NWpZeLQBZRSYYcXTAjJm5yaYGW6EjezyyU4StfdP7askysShAAXvo9j",
  "key36": "xZWUoh78kEBVHg7NdmZS959AzMU97vmBnNSgiR8Fy56X2jAbY8scGPBQHito3vvbtixFc29ycGzaNBQyNNuRKWY",
  "key37": "24pfnpJnZ9sM969evUgNax67ZzGV2ZDc1i5rsnuE2hjchhYaekECYsY8djsjkiA2QxTeYPL9DAkU7BpZBho6yNCB",
  "key38": "4ZfYK2tj88whb35oy3BzMZNzi1pMnLTtvQC7p3kWXwHGYR9r5GkrgkHp32bzgGyWMbSvdmPv7SG3uaSZaAvVc14A"
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
