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
    "483VQy8TtGiPrxxF7RFUuzNWzVm2iygag2RNRHyKpsUWxST9GUPKgGThkBJRfWRCaSs1NvyKqhbjqd1dtux2bPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmCQAJmuNTHCqpJNL9yKm3iajd8xq4bGVHam91b8XwH592d1C5JuVnNYZed1TbAeVXnR8KMbbPMsr1V2NjLm7vG",
  "key1": "2wNAF4HTqmwKYpq5xP1yiVv4yN4o55Ld3VtTaJ7njyfLwDrGNkRy88XubNKFE5DzYykZoWaAGZR4JyqiqRQQkung",
  "key2": "4S3Pm7qzntahJ1NiXVfwALFUkJHCRcaQqRZzu7zKnimS4WjHsv8VvwTDq7Fo8Xrpzo36K4gCrjFUdvgrwsZUKGdX",
  "key3": "2gGhA6StmppKRVTQPELy8sz7dgHgJRZQFPENPGDQWC6apsKKiP1TVw3YbZ19AGEfdyY1ttyEECFzsZYpLP15yavH",
  "key4": "2P3tH49ks2KP9GTraH7qx8HuPv6aX3bXZdKTBaADiujmwfFetVPcsW8JptjyRMqHXjrESigXJ7k9CvAxo9dDZtEK",
  "key5": "2ySE42oe4QenRZfhDAjfyMmG7V9gULFcZ6XuHQdioEsxH7xEjhkRq4RMhbm2q1LQ3KNaSEM71Eo8iAERZm2ybt6F",
  "key6": "5vBkVgpvQ3Ns9YpWPsUkgSjwUyGUqCSDXF8CuWaMD46AFN7r6omJamPgUexkdMNmNiHw5djK3K5aaC1YJKBJXiPC",
  "key7": "5QDBiixNsj9bGL8ZCR8AJmTgjavB2oKVzeB9mmMJ8vk2AdY75hQYRQt1saiGtK5mbQbdZJqAG2e4rNbPE4P82S9b",
  "key8": "5YrhEvYpU6NfwUf4wnDXRtEkcRgNyB8xit4BgaeqwzYkYxJb6852F77v2K7mwCgUJK2j1pMGgEboMmcrPrnCEvHW",
  "key9": "4dWjfPTeR3Joz77PGHzJ3RzfEfHJoz8erLNRg5FFBLhWd8ojDHNuX8kQ83NSgjQgDtPfXZTg1bT1vGngaEZQCLER",
  "key10": "CocWc77RG252BAbi7DtFWn7JNCLcPCMjkryk4Xbzmt8bxynXJ1Vr7DQcHWxXe4ZmL6exiF1zTH8pNt4jH2HAhjY",
  "key11": "3EqwnK9TbdQ9MAX7uJHa7AevYtNKs7QrNsefjaWJjGTxBmVQ2HGDvi2FaDUv5XS7gy5rpKMuNELZ5xDiFzp79fWB",
  "key12": "23N6yE3uqzKf7HgHPS12CDWNnqmAXfsQUmXFHEhzeYGEC8d1gYu35iDbontAha99Yoha6TPbnQ5uXMYWcS9jWt1x",
  "key13": "29aUNiUM4Ht7S3ygZ6d6NC927CDdbhWDX5RAUPr26nbF49Dge3vEvkGprnkCEANHs255iT8tMZUCVKDUSoeutUKn",
  "key14": "4srS1Zs1i8SauRvLn3hHRQQBGqUCGhZZ6rcXJaH5AkQNcTwnoGXycthfHm5xxAKVCzg62rDhRUxcKuXsjZM432EV",
  "key15": "26o3soFTV1ajyp7522c8fDCceh8FZUSF4TuJ4qhTw4K1e5PBNtux9G5KviDzVsx5pxWSmTFLKCLh5VfVFz3hyktU",
  "key16": "AshSCY1xgppe9RbwoffPa8jJGPnS66iFzWNLSsY8kkFBGCvgHxzWgMK6fXJd1EszyUExtgzBHq57DnRbY5nX6bK",
  "key17": "5CV6AMJQWfsXGcxtLz9AC8cQ91CpWr2ofqRPLqsmxoc9geaBS5CRJiZYi1wPB2c14YGAzozxaVoCVo9ZCRLuXgty",
  "key18": "5fZYtBpYzcowpFcyqsRkwuowMD9SftQ2kLa5mLgh9YFwGG9wcquM1nLa52XvVbCCBgtrtbQrkidg761C2SMxmNMz",
  "key19": "5eSZB6aieaHpvpyy839sTSjVzP4a5kLiuiNdwGFUEGivY58kNTAYBv6ui4VMeKjziwNLCG7oa6uWQDVzATfH7YLu",
  "key20": "ynWKREXhy7A439h2n6ZFJoBvakeccmiRGbuHFUsQXtSUEZLt57hiEDei9ki7BrkiFphkTa6BiKynyoo5tf2bc6P",
  "key21": "4bFzMvdWZjZXKa1eCVYnq3Tj2GBBeim2s7qbFsWkTkQjMTuWPGTftcP42uP5WQqBVWuvbUY4Jme7rzBmgNpxfuzN",
  "key22": "4yxjbRCFYeF4CfWbPBVGeKc2fXFsNT4tgqhhRJHx6kZU1Gt9obvcEsfnADUy1ZFbEYxM9j41K9Zvcu3JmdVWw9GT",
  "key23": "KyWH68K3jh695GnJB5LS6XvMiVD75UGP1C3oGAQX16GALV3BQ6sNBuJsKjJmKncsVa5DyWdCyDYVspb37A5xkeF",
  "key24": "67FVZJ2d5ZfvLcKbqwQB9mGcJfZQBjFtV4RMNmtYPTypDEBoNfuTAo1cGXFXHSsPMewJFHjYARad3F6mngbtwY74",
  "key25": "3f21MFGJazFsnyC3tVry8djd1ZXVoaMgMhdFo1V9TyKDzhZgBUdo3w5fHg1qmSJdCCCW9bGHArET8CVdHkJTiarU"
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
