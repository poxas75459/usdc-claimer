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
    "2bQvy4rhNPe7u6T4EyhZj6PnUKnw1wiayVauyYpUZcZnWd6Ve2rTMtLr3JDovb4aghQ5F2Se5vcdHH9B5Cta11HW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7i8ctRgtjR32Y8LMecWqnpC6DibwCPPo9HVPKCe4ekGvmdcZ5xqeYieE2KZgkXAnS3H4BwreQDk2ZoAL2Tnu8h",
  "key1": "5Pnp6fqdjcWgHDvBxVMr9JmRopDQ6YNWJEkSkci2ikbp7iwT1erarbaPn7LaUxxsNukdxXSZsWUicM5JHAfc8UTB",
  "key2": "2vifGNdk57wazCco941dmdvNvWJPT6VDpHN4G8a7E67BnRdpUndUrEaeNbW3BcFtfMPG2erPvhNBaWDau9q7fWXo",
  "key3": "BRieiz7THmfSbhJjJFwcUQLp7MUTrqFHRQQr46gC3XBCHkawMmaVRwTuRjBdG6StLXzsasBtarPSg3eUrQLKPuc",
  "key4": "tWZspybFxVyutBBjMubo6ZcccRAhjYCCVaUhfjMNXToYNqB62wyGFysG1rqb5VmdNeR7udnBhqtXNqRNVTHgPJk",
  "key5": "e9mQtdr8wn4BD5JnEGxhRAF9QMj1FkDqWMkEM9TaVyGaH2MxHGRCeeD6no5vdiwS57pURSTi6WDe4WqNadBEiD5",
  "key6": "ibAtfJGyrY59gTFLv8QjNSZvQ7pTeXEPkDoD3mVTq2p7sxHADD4DeZjjUece8bDDbhSPrMxBV2Jvc4cUb8hNQak",
  "key7": "5eJ3hqsmEgUEYWqznFNmTd4tr4cxWh6enfeyhsiUw9AWwVzP2iCCCTjtCxCQN4zQKhCjpuc5Va78AHF9JGJpWASB",
  "key8": "5GiDfgEAnLxgtHKEzizFy2VBFfYG4H421wt6wdScmNJSSnNY1mmjKXbGq6tBRFML8tqDSJ3EgRDkbvCd7yDBPFTW",
  "key9": "5G2JbSXw9gS9C3ci1gVj1wsyuaas5Ug46bKmkSMUrMsSHAUdAx1FUNWiEKK6JBTdQ5iHpGpKN1UqynHnyCR8TaMn",
  "key10": "4s99EzbD6uKzThHyxgbEQM3xcjyxf1NFZCbHRMu5uZKyGRjxBoH6KDs56QVKDYeeUs7aHtdfLA9HApsDZ9BF8rX4",
  "key11": "3ymXpcfoVShqzihdsvAdEyCZ7pTdeVHwAR6gf5kvMLxbJFgUDGKYWMMkvWGTdZYv8oH5QqtMViHpRHHydujB8kVS",
  "key12": "3kRe1WsEJWHtQvHvcs8iZdQ4m55H3EMuhvQ9JxrF1wCjXpfyGwDwJzf9bSaEy2Yw4Bt7pmUHjqja6m6gP9Gthrfp",
  "key13": "47U8abgJof8MiAEE3GWQd9wTpBghUysgrsL2E1w5GFQFYcwpgN8i9WjVjbGHszNbksqMhJxYmfE9ePxWapUYjejN",
  "key14": "c4PpSA4577sgWw3ZKu9cv8B1QWiYKwUwtD68rGNyPQ83UaD5R4qgdPkUsBjpTr31248ZzggfmK8bqp6iuQ48zVv",
  "key15": "4VZM77MoDCEJ5qDgckCf4TrjXkCeRJHVpcAdTE9fBoB46o3Zu6X2MftXK6zvyjMdmND1ovPCZw9ssdCx35Lg6pZU",
  "key16": "ZtHxG84gSdco8dm257LL1oQnuYdKxUgeCTwKnW95Py1HgNFHGe8aaqxmxxtKL53V6oXP7MaR9RqvYUjVpAjmrUL",
  "key17": "4TVjjcwQ9JoN4d9hB92WiHgHpBZPk7PsLxHr2HzMVncFFCwHmsb1wE3WLtP69aeNbW5YJXZ84DGWeP1D8dx6jGQn",
  "key18": "59r5tafV8qxiKYjvB8uMua3pgrrGp5y99X8SM6owXqqHjEoz1fsMJR1j1B6Hmayi4NA7KQBPSeS5fwPawzAEezLR",
  "key19": "4b87RFJWAvheeL1naWk5rTcG47stdVFxwnNBNgnCVM4FXgCTb2z6LcQC4bXibo3sJ55GTSrRafASN8KzcAegieAH",
  "key20": "5yGka2XEqCLnXoJmJcT5dny13op2F98Qhz8nHtcnrf5FhgbJEVqmKMj4fzrLwcFSVn2nHc5DEB8EaGkN7d1kvj8h",
  "key21": "5tPj9Z2ujKFLNk7b5QbtknJPpVTmpE8KZ9HGSdyzk1E9xuoMHUBNKCMKZom9mAg8b9Xv4qX15JybW3Wc5t7W9x5T",
  "key22": "AKQW3PZbZDnq6UJ2ejoWLFpH8equp7iXJSto594SeY8o8yxFYu5k4mTbwgMcoMEUKXwVzw9zeGhwoeJwX1TiZji",
  "key23": "3uMuhFDTzgxErFTDUHTsic1gupmUopMcEczC33FYMT7gqt5mDzefrtJE9Z7wjS8QMhuymgVUjd8Fb1TBjxwgNFuv",
  "key24": "2GQoNW6oGYMKYsNVzV23cgej6dUrdPhJFqzVLgxuxxHAhsVo41w4ystab5KPEZNNm5ZUtcgYGj3kFvow9K25uNzV",
  "key25": "4fGSGJxuZ2TcJJnEAedRoCDaAF8oLSYJxX5E8RX9u4e2zTSAsSYYKywY6FQkpWopbqHSPWZMdFTW2aVUCNpbkoiE",
  "key26": "kERMUwhTbGYfNF9pFxDqAPPbX65gnmL2x1PVWog72qWnDeekqMcTjdKGuB2Vdw4TCDqaKaADGZDPmTvDHMZXjxZ",
  "key27": "5DuJeTJ4sPAV4f3iSSmD3eg2Ho5DKp8HsYdPZWPWKP3H1b5Zakn4ABHgmYizVNAwDFmasypFSXD59PxoN3G3FDu7",
  "key28": "2WmTUzPtEujnL7ZYCLCrDxyH2uFCNvQZkLjcasaGxdsmG9HvdoAKmXRJ5dDUtjudc69fhBvwJUaYnU4cSUW53Gn6",
  "key29": "3tJHLZek8LPorMfX6DmdAYcbeNN7CdkMqyyzxq5D4cGfrXkv3VF4RsLgd4eTUiad2JA3kJacsz4p4Lu3iaua734x"
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
