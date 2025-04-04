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
    "5m66V1J1sDXipbBNVFswHuTiVoFpqS4sKEBeU1WrWCqzXcATtviHMN38EaMPqtrz14bkDzsc6XwkXiYzonJUf5VP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SpiYG45wcXxWM2iWmsB7YYzoj53dqnFrhsuqZC4ykRYyc6TWBRZszotG3E5gbBYGd4Eu7TrBtfYy1H43pSXXAr3",
  "key1": "2XyYMAVc5zonSqnsdaEDVd7Y4gYDUmBi2HqVVfHmCkKCiA7TVKkddJqjUHFksWo4fg8Ay7sFRxU4djDXD3R99ou5",
  "key2": "3E8RRVFFY19JZePe6xREjD9V6pnDo2MFzoiuNHA6LRzzHqFHkebayjUJod86ZxP871BMvAeDT7GYRK4TcVaDvt94",
  "key3": "4b6doW4USeE3UogVuidx2i64rqyP66n7tJ2eDAyfJWkCFJjiVs7mFHdZce4nZGj7sfYKS7phN3bWhbLFi7Tjw5Px",
  "key4": "3PaPcrLw1o2BTBwNk84CTLA9SrGGeyigAEfhhWmCwnGfXdnqv7sMJUWQQvzH9NpxYZC1fM5wUooxuuCcB8ZABZye",
  "key5": "ZYNRfNaucTT3LEcgsf3oBR4mxswx6fk9FNSLzwDRavEteUBS8SBn9hEyJuZAVFUwpd5ijvi1RDX9ZQu1xEsPGTA",
  "key6": "4TDSzANJ3dRkubErVb2ECWSWRKMKEgn4oQnf6N8hK6HUjcYYaXzdjMKsHxmCVkmSMHaaoRjf3ZnCBDmpssiK4ahN",
  "key7": "2LgWCKyJApd6zHk7acXzpZci6m3HE9VdgAGnbMVGLNPhLhivp1Jfx18Zs4HU5wAGZwsyc914T4YEeYZxa4ipemus",
  "key8": "fVJizus53tpbsTpziGoogFJ2A8e1jMPzutKDXnejBWCRvqSxfBiE7GVHq2U4CFX3JEDPRtPpwBwi6jNynUPByPh",
  "key9": "2ExSXvoscjApiSezdnS6TRS7WxaTicoj7Azkps2o971uVx1qyDd7MvEVesNoEVDetnssYuLJZQN1yhSmzFfP2ycc",
  "key10": "UniBVBHBqNMvdprRZyfXRY39awrGzuVG5mjHsu1nAYBbF4E1xnLbCK7sZ29GBqM6bZbDyyAEZgtdAwbBpX1sqVU",
  "key11": "5iprajSwX8DoaVgfcBhz6DUSLUuKxXjsXs55idxmSiS3U5NfTyJFGyCkbYT4DhSQ46Ydc95sMue5BtMntRb6g5G3",
  "key12": "5QiNNx1h2Wncz6EVCTTF5uo2oHmgTZ7u4bobhy8Qzt3EdKR3rgbCMueESLTHrDP33dReFCjGMP7RAdaCHoBgkK2k",
  "key13": "3bjj86GtjJ5kqjyVeCR7DfXfXpP9PfeMyiJjDaRpMH5sazkawHapeHiWKSGbRwRg7rej7JXDw6t4gEVHqahE9rf",
  "key14": "3bDDcuGGmqXrP3jk8WX25TP8hTCVqW8jq2aicRA1UsQ2z4CZHB3V9zE9d3h8hxwAbzhBHUYvtx2CFXx1bTsexwYK",
  "key15": "31qYBSaBXAJAE6wNyWnpcTw8utiuUJ4A61ZPMw7ZAZVuHHY3PftpVmvTFgUFi3ECtC1UnMTHCTV5FNbaH8NWaqzP",
  "key16": "kaJWQ2Eyeyvmtp5TMBtTEtEuzvGpXkNDT6JiZaMB1qZijCKjB3y8BBLGLSstLrQPNcBdWLNqCFkrTsTYpyGByDi",
  "key17": "2CfHw7DA245GQJ2nh1su8q3RmV7S4ytpxeGr8sHo526E9B3pc5Jhs3NXsfSaJT6V7q8i1CxLA813pF9Gg3b3pcTw",
  "key18": "5MwGRLkkDro8kTrYveXAvdemomYEdEaHpFjQKCAuajuFdgxyiMXjNVoo2Pt4V2q54rZgMNJhcK4FD5E2xPca5YPt",
  "key19": "48fAAXeqdvGebNALhh3KmHZnatTfxucBmHp9xJkfzxZEVHxhKhpqHK5uT653iWJiDUo6H9f3xhMwi2cvCGCE7Hxc",
  "key20": "7kMXwGZTez2zAeCV3U7mSvHp2PjrGcW3RegHj361hA1ExMxjbxcq1vPSJqewWiqw57bzVoMdENnDUpr5dj1vUtm",
  "key21": "2d6S4NvGnp1Y4EMnJLQWccCfiXYpNppibTtiwTqnyrAL1Az52SAA9X7UEydiZ3zymTMGGPke51bgr65rrCf8eFAa",
  "key22": "aDVqcdSUtD4N8MqoHnQX1HKS3dL2ctKujfEgpTnLLi1cjJGibMCeHGgRjM36ZPQVL9p4tMsAhaKEmRdDMhWKp1h",
  "key23": "3z3SpSiB2Pw2btj85ej4VPwPiJuynqQwUSppPodUkCi95abpKSCmBUkRVrKgMGjB6pLKPb8W9vB5ds6cjvQRFnCW",
  "key24": "2yQJpEwn889PGqLgNtxrJ1SMnxECGoAPVMkDjmnfxNaQLqJWPXyvYrLsgo72uui23TV9U6RkuUabbbFHWjucLvyx",
  "key25": "2ua4xxrBdY9QTeFsnYWsTZkD8Y7TZedaaghAwkEtAzJCmRWLwZtNm1SzQSV6f5DF2nAFatMg5ebPrmrcLbDpXrGX"
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
