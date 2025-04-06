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
    "5RK7kiJNzw5e8YuHpL7Qsxj19dX17EvVuxmGNxu9w2MdZS8n5164KH4dSgZzZubueZpCxKpMi4U2FCyTwSBttDPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "594d7Bzm7V1eYvvqwvSiinBE48saMGqe2QEaQm1feDev4TCsDtnqa5oxDxPRA16fQaFEx3oCP8bPCKhVLM8Vpb4i",
  "key1": "37NRXDDmXTrdu6YmR75nHC5Z8vnx66uxhQw3aBvAL9Ds54XKQXn3xKSeNsLfbSFR8GZjdv6aK1cr1fc2wqbmDVna",
  "key2": "4E83cbnDgW3sYofDfwmnQcePWwSsnMeHUDdp4m1XRMRKYj1NPaRJRq2Jw1oEsr2n2bAN2vBPQbwz9QWwNGVBj5e9",
  "key3": "3TWxZkTNx7XiYtPUmknRkbDKKGiWX7S2TEZv9SmnGEZEcVoo4YZ5y5gWWaxwEM49HcGrUH7BJDBux22sKFKJaAAR",
  "key4": "5NBZD8ESqTyEbpAYnSTPhSnayym4GazpjHdgsyjxFZXBQSBq2tS4PDomcZCVV3Z3JtVbGGNUCnjY1XHj7LnmwBJz",
  "key5": "87tsrmURreCuEXxBGqisrB8Vpj5Y2xR98qwErz27KgmosbjBF5mTmsnge5PB5fxoZ1sGsm1GLEzDzzFSDE1DjXp",
  "key6": "53vT7rbBGnfZ78m1zLQjBMpWo2PpFuvLMnRXCStfLgPbree6HLx68LFbsyBNSVCGFu9LXFnXLBXZjNCjLtvojjJS",
  "key7": "4qqzmNego4n2je5UkgMdvU7xeU26rJRZJ1SPTQiCyrSFXMQ9hgEUMejsTCYXWeUjiBFPDY7iVkeH7Wmjx4NXtAP6",
  "key8": "5nrm22HvGJMEqDaDD2Soqv3z4xkCjHjoC6g8bfJr3hbhffZyyRoqkbTmVigzpd3dWk9K11jVDhdzYSvrAeJEXZBi",
  "key9": "3XhvxY5KA2TCVBM35oSMD3J6fsfGeETq796HYUyGRAgTnb7uuv6ptACdJFyPWNiv673ZXPwrUonBy31Kq89twizW",
  "key10": "5NBMw95ZkZLwSBEPo589C4LJWJAddNDBgtfd8jutxA9dpZUTvkX3t1f8PnpT7Jmjjs9XDsWsXTjrrh4xgtoV7mJ2",
  "key11": "uKrakGysMtb5Xtr9N5WzuxqmRQg2zrDPzz9TkHvjRoS6v4F1UC3DaUSFSg3tNcLPrc3zhH3pGbDEbUE15ep6wWU",
  "key12": "95Z6NzLN7hRcPyNephFQpoty5M7kWCdfb2MA92HnwmFiCC74ja9TJuNNRuHxFZ6eLixpWYqckiHbNERH3XhqAQ9",
  "key13": "3QS8DUMfzeGoGKuTfuPhbENwD9RkNDdpfnk3d6GofyMsFj61Z1GV7RdJEoi3tvQpsHrQsPrtE6B2yyLpJwMoJShx",
  "key14": "5nPqkn1NqqV2TpuE3JzBsZj5BeVEvRkn5ZLu6Ct9h2UtiD7uTogoJVME4UEAFPatpW73W2aVfGpUfwKNeqL71UYh",
  "key15": "k5LQ9LuzepUb99GvyGJe4dmzdr4hmarh1A876oVctxHTCnpzQctDHuV1MgbhqWksULGrHz9pSfZ4AxxfWieBBZV",
  "key16": "27CZtP9icCEv68PHqodQkd2JwsmFJrgbp46AcG9R4VtuAXUFMRy5MppKkK2zbbKvfjKKdh1vtmTJAye16ffm43gv",
  "key17": "53Q3qWCqPdPU9bJrK6cNwaFN19KXqWPdbmLUedkgh9QuNPR5gxFWJNT5H8iNf12m7emYCkhGwmAfxeCMxpmkFNua",
  "key18": "xBgzm9DxWdX24e7arEi5sbrJo2QpQU3iPhDNdXjvm7oaNpoqR95RfH77tWUaF2wBscJdGvPKv4kUH8LtBonwkZ6",
  "key19": "5qmRp5oQTTnu5gJ7ZUyikHBYPCzLzLy2gAHPA7J5G9UwuY5JtRFfQBGisnjsBiA4Qk2tvV62ZwwGacmfvLRhmpzg",
  "key20": "2zYtj8JDeToc6ynfTcVaQ8pgPeeLR2goXTp4xysoheLGPV35PUEbXdbctYfNXooG492BDoD52QxsQ1kf49cj6tQe",
  "key21": "28UY5o2QRAdqDWxiq7xmxQYF9J7cmRBmFS99C2n3NFEHBXYvbY7Pi7XVZKFY5fbvizmyUfkwQ8BZ5rk3MA9vkigV",
  "key22": "3R9XAbTsdmk8U2Pa5tqw5axFDzr1wpLvjjZFyzFbpt6oUp3BRjHLHsZS7QT6debLQKYSi4S6MvuRuEZr1jaE66p",
  "key23": "4d1TBQDnKjR8hLktPxqxs6kmFt7EEF2GdQSH7KhQyZgdnmDHPEn8qtVFJfrHKCzUtHU1su9QvVoYndSUHbfDbuR7",
  "key24": "3U1pBiwME7nTGpbpDm9sjMvuz3RiZHkb64axTyVChfjnacn5nY5nfpuikRbY6BcqJ2exu4zY62dptDKpRTkbqNia"
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
