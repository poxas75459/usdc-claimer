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
    "2QQa2brqADmeFJNHyy7J57vpj3fnRZERViQKHQ1Fdw3f2mpZYbsSGD2Ne77CkS7RfwiFgGpDWMV5FxbiXbabCaYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DC9NM6546PeiAuaNtVwrU8whQ1ZZTvKVpWk2QFJWFZ4ZmqUMzoChpuWYJTAjXeeecT98c6XFZEmKwVTKuvcQUFF",
  "key1": "3kTZfP4uQ9EsJ6QmLn4BzYwQ97hnpkruAm44daPzwreT9FihqCYYGmpXDUtqVjkNwtdh81P4rWvPGi6wYJqRQDy3",
  "key2": "1tv6yQ53KLavxLZMtemTLNRYbyj7qMdmbPPkGm68Qahea3X6wfVCJnt3v37sFnGoFRDFp85Va4T7Ufjv5V7S5gg",
  "key3": "4dAJ349fq9fb5MucAgmNCXHFaMdRcN6MnFdDU8uRjLGpYUZVwhKMjuaypKQzHkqtRHWrp3VQjndEritRF3y6DGWu",
  "key4": "5u2UqozupckoMKvYYArSU3XVYV6TqcoVttWe5ZWobAjkazRPXk96WSwKVF8xpCjwPdB95jaAqjT3M96N6V4ms8ZK",
  "key5": "2cbhpMGukruDcuTVRHp8WYvH6D7LssRYz46qaa6WYDyHWJ9hNvGemJANX12LeTFXXZioNU5DKXbGNfAqdmGK2SLL",
  "key6": "3m6vYHzeVPygyJWTXHFXZhrYZm3Pc2XD85Tmcd83EmM5RygKH3f53ic8v4dfTjno4N9XdTgNy38eCXejUmFwWRtM",
  "key7": "5LtWh6z3rG2KXynj9TaFeegeC3H1yNSvgiejMUABi2MKuX5DtoMWfVVrbvUByUdEPRbSSAnBgpw761QUKNHoPvkD",
  "key8": "5ZGCCkNEjBAUUQRv7NHtbm5Ba1qg9GTy6FwuLCNHhM3MvfaVSsoBShqBZaXiojkkzzPVaYdeasgP9jeiHRRVxh72",
  "key9": "4ny6S5A4NrFnnYGjRRAtn83pSoB9pEhaN3CsxdszFACWzxttBVXVrKJCQ47Z69yhisF3TbVAWjrD3FXuFEJHcxHQ",
  "key10": "BjZHF8xf1HUe6wjxpZA6y1kbcnkB9bt2358gZz4MyjbreTxHDuFj6efqx2LHMHRJzaztS3zn6bB3Zr5yPrfEp3n",
  "key11": "5EWw92Svgwp3z2REZFFLjtDPpLvUNz6bSSFSP9iL8r139d4jWDpbEEahofkc2Ws5Ce8T3ehxxQKEZ4YNdgr8yw4h",
  "key12": "5NB2YDisrhnPTocg3RVDTVZHs7jjWJRQTmqfAX9NpNAwD7xsKstwziAg4vTyEWXq5iM92Ysy7LcDxt45eRu3fAxG",
  "key13": "3Ld4bcpWz2K3w3TQGjkzUiw8c9EDDariATpytkxkEDJnrTKd6w8D2a1QcRMY5KJKpybJuAWVkrPLnmQkYUZmJA4f",
  "key14": "3XGK6CthqbQYeBUqtzkHM5iQSo16vSGuyGhnMudgoxREWtcdkA1mL3d6hnzoknkVVQnyc2RuQnURjWcyYYgWiwg3",
  "key15": "jCibUVAVwsTEPkAsX2Hg9bW39ACcsC5KnZrAibMEkWMxKXqhgDKSfrbqSuf3BjvczT8dDkXRx9ZjQoDryXARd1W",
  "key16": "3P9BArLXEkf4bkCm3jmHURjir4q4AzinmURjHB2ncatJnzXSLW1oz1f2iiDEshDzbhASLepqwCUkAA4jF5KbCuuJ",
  "key17": "o5eFKGw41hgP4mmiZ1uv79KJuEEKEEUSaCetEQiV5JfheDVJKhuTQbBtmvn8Y1MotxPgMy7cw7uxtEhCVU9KKuE",
  "key18": "51R3VDyactGqumrJjbXRCuFkCeg9ZeZvcwegMinMJxpyQyZm5jCep2YCiAkRwwW8nbuGRUnJ5CSRKf3nXMXKBh3G",
  "key19": "MVVT56bHTXeKPxFMq2pDUxfArb25iv7izsxBcbPo8Rz4U5oKc3q2bgMhifDkfo242SgaBjvdnHdf2MApAX6H23U",
  "key20": "5x5yjyYnt7AfnG69JurhQevxab9JzokhUUnpyXHmUXWgrB6mExBEVkQqm1ycXYNt2Vsj5Kk7SKxw2AvtLyzZ2S5o",
  "key21": "4kM2Ap1N3Dp3WYukwFbfAWxohMVYha4iPcuxVE8pXQzWaKsaooT8b3TMc5xNV78tVP7TBQ8D3Du8CS73bhR3edKY",
  "key22": "435CFV48ompHWLfPunnfKfGyrf1eCmqX3zKBmDRDdhcUZj3xREpbDmuewWbGxjyoHTDBMrG8ig2MRiP2epAyhycH",
  "key23": "62LhmS9964EEwkLJwLi9en2obq9GH9HU562ezoJNZ9tKL6JG8FTqrg67PwwrY1sF6NyXJmjXNvL3ggxYwGUytj8U",
  "key24": "4VfyFfbAeUj1unvQY21Q2oHn5dTQmY39AEMvwEs6jQcbt3gFMeAVyTEWiBtnYNQo33YF252qvsLyWkoL7nKpitTh",
  "key25": "61xbsbs1J1Pp5a9YhtcVdJrUnXcGurVnYUx3Tf5kcNYokypxtjwGU9MyaSXGEL8zym7SkkBhXvV7nDKiEfpUTiFh",
  "key26": "5VT8c8y8Z8hfW7GZsLENXftaXHNawBrKcy4intYzB4GcDZoc1uyyZJ2U4Mzo5hMuQGYoPwKHnPbXQAhTNPPccxUt",
  "key27": "5nn6Jj6U2GUWrVigQEAzxJ7LpT3jKjMMSZ17WiSaVfWyupgkTgKY1bWLJwvE5KcebYsN8en8hHTMSB9Ygp9YSaEM",
  "key28": "rxrbpFVt5PuKG9H2ZadwEc8Qve3UUTY7ygSPJdacxEM7hxrosF5u1W37JnVdyJMX39Y25DqngNCMeM3jTr5KVyb",
  "key29": "oK4bNrB3zRqHd2CMLsNmfkhBeUkfPkhad4pBv6Kpc91rqrf7G4RNu7gGRTEBAccsAmjcKbcSnJXroAmzMdRf4K5",
  "key30": "4Eg7CErZ8jvLZSGBEDd145rVdfgQ1UiMbqmiB7M8JywcuEmKGBFfCKTwAtDKvXi1iqrCvjcqbX7Cw279pzxpRFXv",
  "key31": "4CcdpJAtGBiVzgsRvJktHdGXBaysKsUuZVNdGFJTc5a9AWWdjR2WKSWghYsA4KcPtQBmH2SLndhvR2fNFoR34Rrs"
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
