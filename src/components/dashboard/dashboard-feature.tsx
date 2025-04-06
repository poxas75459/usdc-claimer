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
    "GsLPo2ud5ZWnzyERNCQ9Fc4QP58QSMSPXfxwZ6F6Gpnk9nrF8KLadazmV1cKzkVPC7nx4jRFFo8S4nqH9in7VV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PuJ2L35FCobkExSnQdPANbDhTZvwRwH9NNmfVUjcBqgEzHFgHS4LgjxE567yqGTkFUEeQZic8k3X3J8TULHizJi",
  "key1": "2Zcj15SEXAXkUJdJGKe1KZpYBiEUQdBx76gaHbAkX1imxa5z8vDyGCG5pwmchjdst3wcTx1GVFrqoFEx4yncjNLc",
  "key2": "39gFoi3Wcu1mLgrtUnaTNdZ6Kar12afCQMBXhjGBvBfxe7scHrzcgKU7bLAXPu4KV1mfEGpACW1FfR2JqEoGDqXa",
  "key3": "agnqHgKMU3VFQAyRWtSCh7TgtqYSUwkP3ok3CbqTR4oRbXheK8tD3N6e7XJ31nXMTHwHutCcEVs79uxSvJFTXeX",
  "key4": "2pz8opHt4mXvauPMbW8TPUA2KJo8qMLbMK3tJ1zWnXiuo3H1YaAyVSCEaU6qHK4KRd6Hgbs6ycnuXEBGY3fHqgr7",
  "key5": "4RXKFsScR4W8HvrcvBtUj9FP626npyrRwdCfuWZ7UtC5nPcasACxaNaeom9SdryVtw2bWiDxTksuf9wFKxEjaCa1",
  "key6": "5TSLKhyXQMiFzixSVKh95ca5o3sdYTxg5avsvzAdHwQz4NwEcvvqHmcmh6jkbFZxmckR78FsM3oZM24D2sYJ9zSx",
  "key7": "26wqNcjvDtz59NrBjsDvdYMF7wcLBLug91yAuutJdXCzDRrvV6FMLWmQxt1XLYvUkCdBdREYzNooqdwtvCTXCeFT",
  "key8": "671Cgae9seqa1Z7UoLgAWpmdLSauBx1oqo5VDekb8Xr9RvMuqwJG8usPP1ZSkbpSLr8uAo1fbezqvwExegqTCKH8",
  "key9": "28iSvWpFyUoy5kdxtXPLpYwTXDVDdMwH7XYYv1EiXTTHijiWLyfsv57bwa7doi6JkKCxqQgRozs4ioepAKv9RY2A",
  "key10": "5YqpxWansHJu8z3xrD7b2mkK25kiJp5dN2aPVvrR1JVVG8JYjGitzbuUgQuyRbsFPuVoD7kAZ2aWuJRsiAaeyTwC",
  "key11": "5tKGu6rFn2dPK7CNwRYbWsdTs9p3wu3iGsyPj8BA69JpG4urzDDGUgBASqNnASRLycr4BGtWDX2EPnYrAsSd8BGE",
  "key12": "2vU7J2AHMqUhXuFQCRcHjqjnjuc4kvoixCSE7Die1G6Gr4bBnbQoaEnZu3ZoGGtB3BU5Bbbf7NW1iKzfTGbQ1bi5",
  "key13": "3UU1DcYZN9LRDCYvSwJZpzsAnZyhAY3EHdtxgyLMzEx9gLZiUAsjSPh9uoCzZLReatTVa74jbEJKgjMiu999inaX",
  "key14": "5Bv6UVnwnff8D15ZFHMYJxqYyp7TF6gjsydqrdeGWtbw3t9kuzWwhQYT6YeB1ZyQsjKBzRUtiGjFmx3kVFQZ7B6d",
  "key15": "2vD28ekg5ALqgfaXg4TFWTWCG3rprBEHzTVPuU9R3hNECBtV1BmGcZq3LNdgQp4bneghWCopLPsxSxjA8HCuU6Jk",
  "key16": "4P5ooktiHQ2WzjNesREMCAY4Zo6TZ6hNJpemdHYhovQNmoKme413HjdesZVTXQmwzmV3Dco89vhw2HA2K24iSoHt",
  "key17": "rg8bX7PCmqWBTAXNbjzCkNCJqAfaDcTMrKNkXhLN9eC6qkH2Zatw3hMcan71uoXoMzZFsqNppZT7E4LeBRhAGPy",
  "key18": "4cSXTHTsT53oSdGGoNChidok2Azewt4imsfe5ideAPGZAcEyCuSPBtakRjecBkkpy57KcfZ5d6arUPW4wmc12GUw",
  "key19": "44wFQ2xbE1qXHjiHJH5NmEHoXHfs8SwjfE6nDnGpxrJgWNysypwb1MckXHKSDEtbhSSfMq3fz91MdufMa6yF79We",
  "key20": "4kFR4SK7WsHPdzqi6VnLiEcZeabFx1LCUowTCxTjDfsF88P1GotQWvFQDgqxYM4Qqoqrkj1xUpZhqFoRBXC9PGap",
  "key21": "4mNPBppKModFnYkZNbRtvs6g5inGqRHiTj8Nea2rMFn9bfsuBNFEHExKQ3iMU13qNbUfMZhwEknDwPxgz85s81us",
  "key22": "3khAqcvf4jHGxzWPJjj31TWmtT5fx569xYgfSTvCXw73Ecfov8YLD1zvS34Lkto5Ud7z6dBHQpRa6Aw4pipGeU2v",
  "key23": "3UA7ukd9Q7FxcuEYwgvMtotFtde9BXSNXAsAZrhADY8mqDirWDoY7Vj6YoaAAMxuhV2d4KpvNxRgoEDeegY8P7QG",
  "key24": "2GiRFHv8agP243j7GxJWPWpPXMLvmGJ4eLpyDTXePqvr3GohgzckLXouMRxVbAFYQUQ36HSJTgv1FUVx66jw9Nwe",
  "key25": "XfGwyZpbKaWxRApT43iSwnuTaNtbNNfqf8QQ85Fs9pb4ywe9ScppdA1fMpURN6jgvWMZzBBJzcYi7GrfUfcHCdS",
  "key26": "49GshQe4uURXNqdR3WQLf7qKX12RVpnJadztv9z4V7VP9bt8iJnHUyYNFY4oK3ij7V4c5GeHx1QKdgbDLbL91TxM",
  "key27": "5u5disvrn5Hxzwitg6dZLq2AKuHzqWTJvsrw3akgiLSGae2rn5NXoYQchEZ9xrDf5FUkkC3XJgvQxFss8i5RhXYQ"
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
