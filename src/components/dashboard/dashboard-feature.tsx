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
    "21A9qgvFUqAeDt91DWy5DzAanaMRJPqAEi33w7VukFuKag9S2n1k1A9SXtTdxxzxrHaoa27pfGMTacDL8zc8pgcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JACpzv96Wctxqt9WuSQUo8wgLbxFcuC4b5M66uX5AbhpEqMmw7MQK3WZxgWQmDTibYTm8T3u8Fb9y22i7U1GmAY",
  "key1": "2C87HCyuftyiUs8w7yN9hsh2uQJD3fZBopCkBSZtpJKRDP6NuA9b76iX4EXH1g1ycja6vzozs7e8oUnaFxUPUj85",
  "key2": "321DNJ3XQWmJXcXtMXW7H8MHGhSq2fnosGTewuad85dMdcaYZs8HYcxK5FhzHdacL93uYbmtwBXXAJjDBpvcXtnp",
  "key3": "1q7QWp5KDA3BbjmKWZJhNwKcfocBbyumTiV98uHZqDCo7yeeUDcBh3PrDRSWLMChPguKhPsBkJ2pdjtKMmuoGWs",
  "key4": "2hXZbGyfrEewKjUssi2DaNM9cpfdXDm1s8Eyba2ZceFgc1FxJRyBQmiPyqnvJk7bhj2wH42saWKci4csycXWVgAY",
  "key5": "4YuomQyVo3zaUPhsV1y2ofcqJLr1jioo4KmFR9CtALT8P5C38hXBPgk4PjZacpDRT6y1y6h16tsh8osCSFSnGBNJ",
  "key6": "5giMtF4VreaGEjQVY8ptzT1ydLCLnzxrAzqP9ieCmJwkF6LKmSRm3ncdRrUZJgNMGvyMq3Uond6WwNm1Lyz8prJP",
  "key7": "5Ap9fktAt53aTQmdSpmkRXHaSaNLCMmYxWA448Y43Z5jubx3rff2E24xF4hq2aBipwFgYWaTWpaHFkpYwpKBFgpF",
  "key8": "mK1LB7NEdjPjud8TGrAHNKaHpVvMk5w2eGTAcFZySm6yXd9Zh8vazPHHMcALFi4JhtKA8yNsam1riN6TLJ4Uuoy",
  "key9": "3MNmy45sGGtBgHfJLpBnRMbmNs41x9zqn92rKijs9vfhZfwa2YU9z8En6NoUrdQSkaQ9rBSJp1BhjAw6QNDsStPm",
  "key10": "xvN7Tb58iZVh22WGNkiUBXLrLVq7EqNvfXTKdoAbUoprEZ7KB4f4ScHd1NwW6SeGYiQ5Nj25CBbkZ4qtzAkyMuZ",
  "key11": "3fPN5NM8YSyTNUXABvH8n4G3MW8F9xW5poFN8bzf8wAcwQk4g8M1eXjJvSFrsfpksPjALsf99kAadCeb3B29pHDP",
  "key12": "66WteDvmUJL7KYqEY8GozhcuiWD481MA8aq4qmZZrZFiTQK3mg5oVYGJHPhcgqq2aifDQMPRFrPLd59jfg2pEZDD",
  "key13": "PJqtcm9MaCJ9p7bFtwQDCKTaHasa7xSFK2nFApwjJ68U6PuVqEXRuswqmYfFrVfWbPtnj2e2HY6mnhNGSmYVwji",
  "key14": "ngsoU1X795t6eWG974Np2XXyK3ujMe3cbTjYPGK3aUHKAePPXy8tMMkB2KjqD6gp89b6RiWpWYjbATtHfAaHbN7",
  "key15": "5Jf98ZXXomPqKbsjiN5Waci3fvtDdnsRX5AN7ychYjxW3yBFhLijQCCKXj4HPXXStWSemucLZw3cwys3eA4kCcz6",
  "key16": "641jtjK2EgYaYBPiP6zS5D8BiJ6XF1rUXNnoiLHD4pDs5E6cvgCmWReU2v6mVpg6wLVtoCnnB9DxqiJr2R3NNMP9",
  "key17": "3cMyNwkeefe8qUaexGmkeH8fgt7t6aBb2FMQsvzVzKq7D9V42EzHUdt1e1HfTWQQ1YUdqdNEK7BxBWwyR3KbQ7Ej",
  "key18": "3Cu6yn8Q2DoqZmLJGLUpK7GN9QGsUeydYgVauEYePD7fnwadrrE6vZUobnkbVB5yYwqPTb8tDnvQTtJdbP35LUwn",
  "key19": "67KfWMEPezv3bHHFAaqrLUC9buW6KvpXqCMiKrXFQM3bDmSHQC7SWbr3765fwDtxRdVE14ypFw3xBqenyq7V7Vg5",
  "key20": "4YeaBVs5V45tGBuUYvMmBBjbCKERVX5ZohvhBqXi27XKr5oxKTDBMu5wbwVh7SSrRFtdWB8Ao8gKvm3RAoy6s6nb",
  "key21": "3S2pjfVeZKcbts9g93fSAeFjoXF4zBPqwT7FaL1NB9E1dx2Dqv8EEvEB1Bh5g5XwhkFYgnrivXvqamM4u5Z6aiMd",
  "key22": "5XBHr5KfzxU8Rfu1VHJQVqy1CeEJAVHW75QN2VPonaKedaegUVPeuC885eBPkUA24EvbNNfjLi99FSuBUWZ8nV6u",
  "key23": "4WDDfxzGpC9zjmkdqT574Wq8ZkfjVUPS9LHQ113jt8n13REX1cN8SyJx3hSU3gjAkkfEWmTGq81qhN9Rrv5dP2TT",
  "key24": "3mjdponTXbZr2FeNyDa2LERMuoD97dFK9ZSnDmGbKCh2U2vHzESHyYhXZ5NfaqUarp1WQ8EE8aaL4S9fZmzsC45i",
  "key25": "568eaDvCDDnEWriAP2tcgyiin1oTpDdGy8NpGu77N9Zhz8Bu9AVQau79AXpbhHnRotNNN4vncT69nv88aerSpiQ1",
  "key26": "42Z8AsjxYL8h6pJCfjM4UKiexaqqRir8N8hs1rNFcYGHwcCcQZkkM1Ru5pV7248cLi3JAMmnwqHkw6Rb1WjzxQyv",
  "key27": "Y9bjGMGb4VnZjy4h2ktpTrXfMbtZsa7V2hdnrpQHBJFCuwi7NoQUwqrxW1W3DjDqUvFE4krdwYSq9mK2pvByoM7",
  "key28": "ByGqb3jinST6dGQskwuRjRkMy6mbj1LWq4N5rTdegLG2e6ysZjAHDdWSAUAXG5bUB5ceP3oggz9EUKv6zMjNpdz",
  "key29": "2bLFeu2cibDCEnThEi7S1ePY1mEsGkE6xnEV5Tu48rG6SQhtEoQsjekaTXUhQCTttt7C4CWtUBdthNhjxUU8awAE",
  "key30": "4DevfR4eZEvewhdJa2Howc9u66xKJmh2t79kvLNgAkcMnExuRpNigA3aeTtCMsVUJ7hYqboviEhZrESL7QS1WD56",
  "key31": "4hvg6WZrFHGfFaWF1BjwREYgzeXkB6Fj3ojjFWuQkTTQmrJRFvb8SjG2ZzoHL88UBc6MhP4hPVxGyUPzjBYdSanE"
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
