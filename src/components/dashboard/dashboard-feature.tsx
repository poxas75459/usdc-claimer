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
    "3YHQzJtGy2auTsCxUvd4wcBYeiZxZ1ejw9KJerKpPMcTnHjCG5Wo1svb86caeT9pkh1MZfCv3NsfRzcrMRJd2NPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JzTW3sbHbxqwD9FpqCLkNdTvqdiYzj9oi7XKiGrDHHuoyXf1FNeRPqgQCe1mQxNoKu4cMBxF4m3PAUnrPhJNqBn",
  "key1": "4qPhV89p3w5R3LBniDmFVvdSUURKA5Ey8HTT2r1tabn4bixuBhfhAswuRVdHUhxsdS3ZESdxjUaFJUHRn698chgX",
  "key2": "4sCpCCXWa82cN2FesBqEhyj184fUTKz8cezGDR3gPqkPr4vfooR2QFLpui4m8ikyV4so1cDA4mFezNKhvGDFoYvL",
  "key3": "4nTQVSadkNPzwX4vfespE81bFfmzNHuKmX9njtiXxqUo5K4pDvWDC3taF2Z8WZpU6n4Gxd7w56p2PQvNdstxxKgD",
  "key4": "3KksAX2UL37g9r6g77tch2E7tcC2mm2CD3PZkrjhd2d6bT4p9hdAW7WopwB98AkAcsRuvRfckvVkxY44ZBei6m3A",
  "key5": "2p5KEADiSvMazxp64uaQFN7Sbckk4GvktxvqCP51HLu333fzaUVYbbuJ7TupTJH4W7PYEM5FrY13DzW59EiBqWDC",
  "key6": "NFXw9u6rUrF6eMdg7Hx73dHD2QCGGwdSpg9EEhrB4B2eThkD6PmL1JrD8oxFr8FJtpCrNkBtXC1M7LDqAAcNa1o",
  "key7": "5xtzxiT4qHtpjcNZUuPp2UXS1Wo5z4zCnNUQhS9HsRBLRBNt4PDz7KPjdFjY44heeZRh8U9jKCk779uU68adMpSW",
  "key8": "3B1bJHbJ4WBZKNe8r4EgTV3Srem25P2ezA8wUKyA3hUdfD9ix6fzaccZbt99hiSExzCKrfartJaKc2VQPtqNZ9NT",
  "key9": "iGKfLTk9cCA5NKpvjBVyhds2apSi4sdZdmqPfYnMbzMCJqF47ofF8MXkFzTG8bFZcVr8w8CzoNza7ZjL3Rqm6rz",
  "key10": "3fM1EA4d6jKyTQUXW9AdR77i11a6HTgHgQp4otRPSCD7oJKjdnL9KAAhWbGbS9ehyP2zkyjE8jgJnggPUjJb36qe",
  "key11": "2x9qksWy8Lf3dppZZYcEbwWw1Ze8NGyU54CybzPbQQ7eQuTwZFYnRUkBu9o2sLuBV5TimmfgBrn1H8G86fFF9LZD",
  "key12": "ChGLm7PyjftfHbptVtxWTnjD8hymutjgZAFonJaSGFm5xd5UUKfTjiKtUTNTrXccD4FTTYhkKZtd4aCQMrdKu6T",
  "key13": "56o4yv7wJAcuDnJZLChoNzimPk57Gc9NiCtHHWDPzi82emddd5iA14fKBvaVFGeu8RajGqi9zeGmcfT8pVxMMWZw",
  "key14": "3GF5sCRYPSY4GgG4u8j7aGuEc1X2AUdBnsVuJvKKpvSb8XgEDaekH9VvpMwZXWVX699UL8QU3dNzWMewg52s1MDN",
  "key15": "4HmPBpSMa3U3VqMbe9uXMoPPwQH8HEp7qEqrtn5PwMamtzNoidcLfKzZojaqKxE96b67ZXRFK5G5XqpwsW97KDvC",
  "key16": "3tMCJqAD9eTyBQrac3jk4EYFUEabRUEhuKp2365Zbctv1w2hseVefrufj1UKhqSSfqYyMp4VEmBQbfBN6vrULaiw",
  "key17": "5LVXYQCwPK1UpP6GYwgwYkRuNxoDVe5UkmMj5C7BK1q1H58C7nTfGohjkHirnP56AU7hBryHu6CEJNix8ffSvmUa",
  "key18": "3n3bzFVWWMFKbimf1vYeBQEJG636HzFmeMBxePBNmNiLJWktRbAHkABFCwUkUjwzZmZDBAEu1qHjXMa793MgF7dH",
  "key19": "NUezwNV33KMhsqtvQ68o99Zim5SKnQL2ZcDBv5Q2reLNwpvf7q9xwrMXgTJvXHSNshbYfFYtPxwonB7xwaN6JXm",
  "key20": "5PEXQne4sG7zv3eX5DK4kEnRbVZL5cwrT5NueWJ4BiJV9KfZtJzW65Ya26pjvTvhQ6kivMhbqPJm8hC3Ax2Urg22",
  "key21": "38oCaNUL3u2JTUnCT4dyvYAeFdfpwNo4mN1Hh5Cdre7kFAXAkxDSt711Qbhr57it1jpvJPFcFekGH18szczWaDUp",
  "key22": "GBNZkEjCB86n9wZKXGfNinheSWwneAVZGfNaTKSL5EHvvCQ2FgxoSiZD7zESY6HcBSkGSKijvwFy18wJXmUnKUq",
  "key23": "64WxpeCX96rtdQsDQAAqtCfMccVfqUNkSt8TYnGrbUHyCYa2gU7SQJwczoJrxPbzA92r1UhhL3Jec2jpcMQgsvwW",
  "key24": "xxMdiymc3GgNSKTxSA9wrYQTAikauqW3MTxjXNqs6HtB7iwoqukJD3twQhAvNkXLHhWVxrD93NgNnymf7Y1Jqes",
  "key25": "3QFV1k4Env5Waxdu8vgfRVoV8EBiTLFc6nRSuRjQihsAMmWpz25bwLcAbww6scn6rQbdHrct821xCTCpuFcopua3",
  "key26": "5NxADZ6uqDzosjARkVjoQLC7Wp5HpxHwBipDugarEQttsahxfj88dwtv7EVF7hYRqRkNyTmwFkVzv66RJVHqpMje",
  "key27": "4wkUbknbonBRAwmWX8W9tDSiQ6fPggtbMhEM1jCkw6pGDMGeoVBJrGNLFkoq5Uy9sXDFBdh17DzN8abKC7GThCKA",
  "key28": "ZwCs2qofRddTS9SikxWqqSr8qvbMK6Si8EhdjizF2qZ3Wct42sg2cTteX6QtT79UdY5G5Gnn7DTRwSp7bSHArUx",
  "key29": "33a9xgiaHqrdZvphX9bEyJqy2SqVXfdcRtmDXjne2SBZpb3bhSpTQFFfkF4AUvopo1GrMB2MsiE6cvKzS17NuYW7",
  "key30": "4Kkew9LAdKLtqVwXykkKDu6iwWPtLncCNB1M1L7xxZAbQLpDCpAVYJEPVHRhPsL9dSV2MKRa9HkGGywnZgdn3SvQ",
  "key31": "XLGqezzDCV7YAzZ6MVkC7gfxizo3cLBUD757t7wHdvyEB17yKATbGyg6g9emdTk6DkLXTX7fHbiBFQiDp5CVK3V",
  "key32": "3V3i9VJ8YB8JTMyBn4FBqbL16WwVg43GnzNuG457NEgELZP6S1avtdaERnVM1PPBF9mwxhYSLRdVCbYRATv14BZQ"
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
