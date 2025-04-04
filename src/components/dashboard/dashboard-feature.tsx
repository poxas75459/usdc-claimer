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
    "5r2azbtpqECFjaaMVUFRG3Jqa6LvNZ1c7HiPQ76XRFEUW5Gd2spMxvuG4Nn9BtCcpuXLZP4nzbiQKuN1e8JCfQnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BGWfoUde91Jfer4LphWHLFZ62RkrqeTetRX9itvJ5hT3VUL7MXQaVBkM65iF499Xmv4u1i2xQwdP1RAxknyyjfr",
  "key1": "5vCrau4jPymV7GMWnkDjDiDvv5xK8dPjVLnD5gdWizutzA5d9h5mr2ARXnCz5mFVm9soRECYb5VuXDxnn7GZACSQ",
  "key2": "3mdmDwJwqfjzdMvHAXZ9ck6CSV5hk4qyGpkKXKaVUaKbWcKsz8v4mBNukHniejJe6aRt3CR2EZw3TrBucNc738N9",
  "key3": "47ZDbZR1m89gWZ353aB3LD6GeVaLvXLvGbXsmbBEGKkSEtmBesdYM1t8g9S5k3wuuuiSwT4qAvmU6QTWZu51nUeG",
  "key4": "2xZ1vBQ7Wor7fZghu1NgkKRgd6tWWL1eco8hMZgbiHiNH5UQUBSFWhkU6SciPuwWJtgNpQ3n5fAmDb3EBdCnXz3B",
  "key5": "3b3un66x3psPSnCdKq8nDJAGHJEtaHjoP176r6eS4Qu8kghX6bT9EAebt9jBt3ZhyQmLXEZGqYxiwt8xGC1KYSYj",
  "key6": "xAQCo1gjRFnp17EzxLaaaAtGtmkugbFgekEyHacfEA8KK9zdwrWSvsAqWkDsUyJc1tM83XUX4BpvzcvXXroBdES",
  "key7": "46h9AdZbNJj5Tw3xWgB97j88Wk3wWNaNFbinRuCK5bG1YejKMB79QbztdGaR3NGAMoaBu4JwxUdaweUkhwV7LyBS",
  "key8": "4RYDVgiJdEPWnv1RW2x6ASEUupW45ignYwMr7rm3qcNgUEeD2vVJGsG6ysg92Sc8xr61xExHA1gGrxTPzeTLoY5u",
  "key9": "2gDgd2bqgem6SWrm8MP66m2GuWi6R9TU6JEn1H21gSYweLXJGgjmsJHWWYRYF7627HrtzkaUrQdvsVQcg5r5RoyA",
  "key10": "LTsMtsqQUGcqDnRTEUw9cmwiBzaok24QECk98eTUHh9p9ivr4jRX1N2W2N6Nc16SnXVnPVfjfh1veSdjsT2SXb5",
  "key11": "AiBXxaD1jTBXJdnLESdAhoMKQYzUVUvDWEnY9jwMK2XqCeSztcczbxzQxxoWHPMqGrtxCurbRc673Hh2iDsyhAC",
  "key12": "3uQ3qVeVySp2AsCyMks6dugeQvz3aGgW8rupbwMgEhqJtg6SYgoTnGtEZFdfDd9UqbuL3xzfudePAx7ibQfMhP5C",
  "key13": "3KhmbhurXqRYDzh4LGfLGx4jGXVsNShCxm7MFSsD929nNvXWyjKKWa6kDeVwrBR7QMhdKGGZFoDZopyNA9n2fKzX",
  "key14": "4AtjPNtQyXjabgUv3ZhoLYYDGKB8zyTNQxGr8bYfFb9v4fWx5rLsdbnmdt1kmR7W9GYbcA5XzkGrA96aNPj3J16Z",
  "key15": "3MSrbSMZALoUGxLDsvxA1ozJ6WP2DPxvAb9ibQrXgZSbSLvoeAsk5Pm6PndTs3L3pMdrcbsP8f3Rrt8ETAfy7R2u",
  "key16": "PFKWqsN4SyBKvkXH13v2aSLXRCNo8Ug5ZDqstMJVEvjKArWq5dFLA4FH535B4yNZ2H5B6i7nJs1jbnQSDP4obuL",
  "key17": "2AVpDPwE1jBRm3xdkvczgDtEVKnFmVCgqoFKa2G33ct4mma1W3peSJ3DLof3yaWN88uXFbcn5r4osrJSwkpVxMw5",
  "key18": "33c8NHNSD8cMK2Bsf2ucH6ayV7eATrfepjdF8wB4DMKyiCtjBFPuDb8LufJjDmQVrMLYenkKsSuoQ2BckFT6qNDR",
  "key19": "2W4Ff982z537vbYhx79zomK76Lq1Z58aTVexrrNmbhrzjj7TVL7mjsQudFQmpWHYXB1CXY9MVzsj1icPX6rrf93",
  "key20": "39GsmAfsJjGsQ4peRY8bUDQLiTLjPz84JvwywvW8ZDmEYzjAmKFPS2g9A1RCQPeWHYTVdrYdUJ7x3hVJjhhgfPze",
  "key21": "3NcpVLb35TfRpStN3cA9kaf4DekSw84KAihCL1ubjS6Eui6Ci4A6x386XkgXuqSBuEZi2wLvQpBpvnqUDa233bb1",
  "key22": "4ekmFzQY1mSo9rF7qwCRWtWwVKDfbMuLRKgaAYnUnqwM7LHUL7ozE7WEnkRbFqjo8c56m9hHcjuTTkbC1uaWnXg1",
  "key23": "xcmoxJojn6Cf9xX3STZU652CgGD6u4LAVhdBXzQshhDXjfEvLFrMhWyXNceM7wyTiUUY8zQbVJJ3di8QujbUGSG",
  "key24": "5MnXC3ukhny2zHUTEey32YR3Mo5vjYuLoasChjjcyuVVkt2ku8SAegTuNndkarFhdL8uGMWZLp5btQ2D3fTPBJRV",
  "key25": "JXFYr3V1GpBgVhrK1g3MUzuwJ3uxPWXiDoQDiAfhZuLDRbVoiK78UaW5uusmayR6JuTBcu7Z93ar5cnBDiDeKHB",
  "key26": "2pMoVJihiduZfhnHgCsiNKoQUpH7823sUgFFXdP54aAEZNARaYZDL676puDx2kUKFAN6tmtqTP9ZKzouvHCSm4oi",
  "key27": "24CehtqUfwif9kxFcLZAZzWitb5Y7RKFVdHVDYhovd97ZR8C7nLHGVGFXUjJqZZZTgTqULiiX7jebrmkWhf6qRcb",
  "key28": "3cYrcjSPtGZDhHWyyeSfyD51aS2XmEBcYb9hFJkkWy2eCM5YJAhtFyz4UH5vyUnffmn1dAVzeyL2KjVy9uQUuott",
  "key29": "3nhsxNYM8LHCMXUBDmv1eMEa2XKWv7e8E95JhZjQTk1MQp3vP2Cn6zYQ4hxtaS6SQcWRDK5y9nG245u8SZeMbuyp",
  "key30": "qp86Ch2ytRewYnNPereoStkiKX4YmyWMb7CzaXHEs4YxpTK58ECXtMd7UWSSbVtr2pDk9RPk3RGrpcEwnNfZmho",
  "key31": "38TTtpjy2UPfkqfRawPwhEcyTgpVhoqcuVgnQSgw33RoTbSqgWtGdAXU8AiUhRqcnSi2hxpJTagPNt226UAHqCHf",
  "key32": "5faN8i9tuaY1Tv87WsYTxxmUNwgep24k4fJiP8fLKkBSVd8Rt2ZxjNusSae67a6povCFjxNwAAjo52YRHnJGihPf",
  "key33": "sq6brBhfktV1Bd4kuUinagEhSKnKbp1bNbrZoy81VyjeSFMq1W3yfy8Vm8gQ6JiH73c7je48bttQnF7QXWK9XWB",
  "key34": "3XExnurAfCQkfRTQtSoTzwrA3edWPKGYqvkxVmTxCRTgRCGwz4d8Cip1BRd6FKZjYfErYD9nYK17Hvh7PD7Hr9Wo"
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
