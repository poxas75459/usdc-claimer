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
    "4h3EbQwvqvF1ak9QnXJ1bv9RmzzK651pmbkFDUqeFQsuVheehfagm9eJFA3dBFp9QR8ovagVkwabbwbDneG4c2Mm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JxkWi9JmZaM6AtHbfM8vYTfntc52tngEMezp9PAjjbMnB16HrWJrsRgF4cEftuaVXgTzw84tgmnN1fuY6AjMwai",
  "key1": "5EDM1FeBTKhiUB5qB2SvcjXCpTH5RfSatnxuNyQhbX3Yw2Rthe4AaTNHZ1g2xmdwyLsewa599goQ2nJd25ZbrQLS",
  "key2": "2phrjeXCbKPGntnHDahX1egFVcro6zuQFCFRYrc43DVg7soVDb2J35iB37Jcwm8uACXkRsarzq1M5GaxtpANLJLV",
  "key3": "5u2nU9h3F2fX9KnygeTV2bQfCcD7xK5Kmp31mZXyMmR7FZRedraPgyspPRPjXeQFYtxMr65mQTg3ZepNuhvMqCqf",
  "key4": "3kGWenPsu61oEhVp6sMdEzy9yYMWctKVNPhFqbQWfRxeRoDmTNfzVWcvYCKEkLPLmJmyTgT2T76cisVrVoKgEY8F",
  "key5": "3mZc6o7eCyAUNYJAjkvmJmfQa3Hw7Q7APJTxVnUGDBFfJMdNxLZG8U6SerEXvyjNsLeZHvP5tkLAwjjjHZnPjduC",
  "key6": "3J1tQT4yaM9P7bbFyc1H95XEqR81oC1qfr4iE8gdEqkPXeEKkprLhMrFxV7dehcHSsb7U29pipmGVGDudtkKSiwJ",
  "key7": "5bvcErrtQokm9R9kyGkgeZvniP3pzWXmPLVbyyUNPH7NMBSn7G5zjZ86noPmpAs4qKVz6zZ17vqsQEnw27SvHqg8",
  "key8": "m7YpTmeY83piASJLzefuJmKcDjk9Yu3S6NtVLTuT8mXez5fmvP1EzFNP6S6tKvh2DxtDAKVD3RBQP21iR4TDPHn",
  "key9": "4vDvZZ34srQJ23f5Y5Bmsnm5PEercUbtYZxVdWt17axmjfXpaPtxfCDVutH5EPkZeExgN1PhLWTRYwVfUsZJqFVh",
  "key10": "5Cnu5ErmPrZBxLpxmxDmGik2uHCyJ9o1nzmVkBMMCJRdXEoBvJj3Bv1eeqVcbF8L8G4M79HdXbFCnKxAoAXn6Q8b",
  "key11": "CqgAwfxyPTwiwr2c76u7HRbRCaRzUEnfHi74qhtVVnVTqv4rgxDPtceCqPeoGPjGzhEsETRVVNTHcxRwFFwh7hz",
  "key12": "5puGdWkD5UYM71cKjeMbnBpkiyofF3u8DFBWEu4N4wo2KDLZrmcBExoXYXRHidE4frxZbUQN7PBYpw9BdJRj1JTK",
  "key13": "39nteuVzjBr7SaboqhNymLJ6U1ngALt2UDcz9pnXJyj3TEYWLtSbc7ne1HLhDzNLeVWke7EokSfuJAuBGj8LoR54",
  "key14": "3Yt7qXSmGraVvnZBvhmoUbKgi7oRUnVXDFNSEVSUYqouEVjSskDVRn9EwYCbRYFMQS8oQiy6hfdsNk7rvCxAGgJn",
  "key15": "5bMU5PyrGcn7uZWGfKg4gHAL9xF7siBv3Mdr7R1CuWsgtpHpjYFopjH3WYpUHSkuJoetgxXtBP1sR69H1HJ6u1na",
  "key16": "3wUSN8YoaWWLve3icfTfbZVDNEkcig6onV5HUVfMwFajR8xeTUpgJy5SsoKKv4LszZ6dRw3o6grVSRYzrumtoi8M",
  "key17": "67E3HpRYCy1ominbcbaWiy5noCrhSD6Lf5dZJSNDnrrURQgmNXXquzBadFYiSVCHNMRvghSTAuFnFq5rwoBJ3WVt",
  "key18": "4bZPhiusgzhAUzTeANXRNawrqTUPfq9Jusj4yGpgzQuziyZMvPGUW8vK8YDEyvfT7QacdoiTPMynoG9Zt3T9d8eD",
  "key19": "26dDNonYvH1P2umk4psYByhDibqLVgMany8BzyVyGforPj3dKnoXzjd4G8QUEAwsURFharbMFKDfpf6qGgquNmRA",
  "key20": "2168CxgJDCuZCEnDsmK25MHTRbzRak4rRUWKKpFGJWSYJidb9XQDULKUyHdQX2EE7totXhjVKswJXGL2TSkSEddU",
  "key21": "2tWnLjge5ALAXTLw7BpYcm4UoSayG9ovD6VDXygwdJG9eDFVJsLfqQza4S8zuXLRe2usfipXKx16S9nyhfqHghpC",
  "key22": "ZLyhKk9zRpAuVU532ZDxh1phmj84xwvVPNMFJya4RHdU5ntXRfT98SA8gpYrVajU55Yju93BYeVK7YHLDGGSNq1",
  "key23": "UX3utC1Ac7J4UrXh3iaTVbD1HKyPGPViDnS7stbQAEZpZnPvD6CLN93cUGgnxASjw2GV6x4Fpu5Nk3h4DeMvPR4",
  "key24": "Kyk9mmSAX2niRV6nPkAzJKSgkCAru1GYK97Y7L9XjmWqJDabkm1497fSY2gNqZ9yRC5iYBJ6g5yqL2QGtG3j5wp",
  "key25": "3zgpzXFdFJKEXu2ZmhL2K9JYmuq1774u5VpV3fKABopxmo9f8p83k6ef3a4FxJX1eVJ6ehL92EnzKH9i3bNMgqhX",
  "key26": "2oNLCxWvoTGfoahuv5D48CkS67hm7DBTtBc9Tu9oEkTU6ykgjuCoLdqyr7rBAZVDwc2e4QmKRAbF7dD31j4jSu8o",
  "key27": "3F595EaaieSYrxDNWQBaSwxx6PXRaRgkSywbJGaHANgh5uUqSEo7xJ3Bn9Mq2RYWA3dRHu4ekQ2riwW4L2oB6kGF"
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
