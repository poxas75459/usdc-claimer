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
    "5gXcwUcUZEJ8FWBUuRhmVA3XDdcPGt68uNECuN2o8RsufQHTU5bHWWgLK8GD8M6JhftPSmz5VEmrCRtw3D2iKqMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b5h2zASUuJuY97kAiPJKMy5sJNbkCfTXHV2VYv3WZjttioGBhmnKGcn6y79qHPAWXKAQKbW2zkekujN6mQqCbtB",
  "key1": "iXAwXVEfBGZWYjnTjM7mjRHypoQ5ZLRsBJwicy1Gw9bb4Wpd1AGrbdJCi3UsBE9dCP7Tb3RZBBwTb6QNnqP28Qr",
  "key2": "4ByYAofJXPeC1jL8MDPyG4w3gPZRWUg4y5TmrpD4dT5mGRZ3EW26XzgbZub9cFoocZWmmgYGQ1jeTo6migjDPEF4",
  "key3": "hztLkwtPxmjxobu2J9RSGsHu5uctiWZWewHR2qA7hcevVaoosHU1fKKCJSUwBgCVTP39RRB8hsYe8EdLGGLkY6U",
  "key4": "bgWyEXmp1yf66aZgcrxgC8Rojcn5cuVZjcdE28eQ9dx8qyhnSwz8WphMPYcciLryAYsuCDZ5befZ7sLN9mcnzpJ",
  "key5": "34kPRWf923XihAKounNsK8Tv3Jg76A7kbDTTfxM545NpSJnAEUiUCRKAMeuFVDBQE6rN98B5dWx55c4PupfcaDJE",
  "key6": "3PQRMfdTuG615nJQBKJ5tzJSaraNee8FeebvwZEgLitKwHnyYsddKz1SP1AR7o6Zzn7vDpiMENV6TPTx8RQco8TU",
  "key7": "FW5FJW9jnGW4YpdTijBnYJkEDiCoi1Aru9SpxnRPcCqKFRs521y32PViS8eJDrrMf95L5J8fAWaYXHBDtiPviys",
  "key8": "2SZ3mY6sd7QQa16rDpEMC5fVuvePLwzJUoXeMtJ4G34VqcQxUrF4N6BW6L8JpxtiT85Yk3TR945hZHkfLzF2uznu",
  "key9": "3zAZMuTiRGmYXRSaiSZqdujDK21NFpTwXyLr1YDEXBr14kedPYf2QUbPAwmWQdrm52J1KfbgwDEQuuLGTq7z8f26",
  "key10": "624j42Z37PFZGxdXM4Nw3p2Dx5M8Do7qNEdarHzmWJiYy7ZjeSwe5CYZX62BEbgTWZPh4UiEcnEGbL9yYyRfpiGX",
  "key11": "4y7NEQr27zXffBg5SMZPsomHpHEYz46PTz6TeKvThAScsnCLqugTpSDgdi6XJ2asiw7WYDJJBWzs72V3sqmKnuUm",
  "key12": "5MgPZXRRynFZMbvTkaPbLbMzczem9eTyNkQj6w5QjsW5ASn3ta8sanWngsLrS5HtXWkP2iYSXycgtmGewKW7jUn1",
  "key13": "2655XZ3aP5sSTtfzExP78b5osT5F5XXhZbR6ckre7RhDVHSUoSPJDLFyiQvJXYx8fKJYPStWRjbZMA5GfxwNfnE2",
  "key14": "5jqvN5dhbqCRGzz4buQfuoZJZfC9YhhxM8QACm7hWSJc7hhSTc5UmEy3L5V5s4fEXYEVMH2xXVJkw6a7etxqmsoi",
  "key15": "5YtLb6jZrvzq8UmZGzR1N4mt19iyUZC9VC8HC5XFfBecudBzqQA6G5dNavLgiT28uTrUqwFzbGDdpV8ekmqgjhvP",
  "key16": "37ThydVipMfvs5Wagft71gpcLdYPxqL7W82ciH37JT984C6d4RK4FrSTWy1mH4sFkErXuiGcLjJrZnk2H98cyYh7",
  "key17": "4K6k97f5J7rxAi2jbHiwTWRbp2djymTQXEALcyAAnPhnQhqgqznztnrdAo264LGPzUXgfKi3oRU44Q5eUBcFwbBQ",
  "key18": "PJgX9U3XBwu6paPDU88i5gjfpb778KMmdPd86a5KWdFtXiVUzhfK4Z3jV3DASnW6g175cXonyKKsFZNoyYgcszS",
  "key19": "mQurgwfSywFDawckmqCG1BC5vT5UxbvToCnBwAsZkfz1A5gAUPat4oSZC3nHS2DdVyjHi46k4cirGHLvSYyQH6h",
  "key20": "4iGnkyhE1cZabJYpR6DsSsFehwLDxkjL6dAM7KgyKq9XnGeRFHzfwi8S1zV5NbNQPNt5id6DcsSBTvvwNqb4SFFw",
  "key21": "2CJCpEXorWtRvsZcydacmn2Wd2BvfhDv1c19KrbaJuwk8h4cfKsNR4RbZsc34wyYoSYbbZhosgKcqf6HS19u3G8J",
  "key22": "5UqZ8G8ys9znHpTVrLjukV2sSZZQAZFX5rkMixJhm1MvJm3cFADF7kwRmpikDwmoLNvKxMAJRNNTJgiTzD9mbzsb",
  "key23": "3T31GnASkZwQgtyUWJXKyW77U3UsYsBe7eFzAgBkPRvsYHJvd36jQpv7NyiggnYE3CPhPBuCBN8kBhA9WdtTobk9",
  "key24": "uBywBwDgYa9aHnoQBvq2rbA7CZETxBrM7JuPbZxSFBww7nUdZ91yCPnFeZMcu3oDX7BEoPbWs89ZzYtab6rVcBn",
  "key25": "2Nn3i6JAof34RMqKp3BjTERPjVi51DJQYY5ixHfcxYNboJeGk8WtPefdi1vWN69EG91M9UnEzPmVNKnKq8oypbdH",
  "key26": "2SBMvnWztaNF7VTQLXMCgPzyNvAqxMqzyrd3BezLqXCu4ybprLKVFkLTxJnzgme6N79zCA9KYSAR3D64uvCEPeVX"
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
