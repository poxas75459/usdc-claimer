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
    "2pCQQNwUys83V7HxZXJSR62Kk23gh9e3k6xjk1DcEYPVSh7bhv4n8CM9Rc14we9JVYmJPqmF4f6F2SCfrvvC7PZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArGzFC6jUGT7oJxiSnjE3EKp6panUkGYKpX5WQqZfM5TMY8gxdwN5daZ7LT5jK63iGZudeE3JyB1HvsSrbhXSWX",
  "key1": "3sxeWzHx2ZREh1SRb29FYtcfWFPiuaU49hpDoetAXheWKi9WSQ1CYyBZPe5tgBckUEbQDDvhfjw8EFGNpwmR2doX",
  "key2": "mitcWfVaxuuNxsKAwKf3gBapxDQXq4KpCvHfcawnCFVqDfbxNT6sXUYsvfvRnkgxUtuqovtJF8nBtUipx2QzzSL",
  "key3": "2vxo1Cwkk9qros11oDewBWxZ11bHfrjLdb91Ug8xkxDNUKLQDwzYgjP2xbXjgZrjQTXUwiXcDVGfwJ4SonMhYT7g",
  "key4": "3fxorsQA7eUH2cYRbbeeAUZXAZ9SuCXkdHU5SKM47A9LTHkd2RZtUCWX3SAbY9EU3REYtf6Ny7tGs5M9CYXE3nDU",
  "key5": "456SmxxN8xXtiXmaq9WtXsrgndrT3S7tuCD5bPAog3QvqcFhxUcTQimJaub8mpT7zS9dbnnZw5LdaHqYxCS6h12Y",
  "key6": "eizi2gShqSu5tNSEu7i9teyMAahfbRAeRxvzF4BiCHjwNXhEdAWL3yHbiYb1y6rH9dvohfnREFPQjJAuT13grgo",
  "key7": "3yzg5JGhJihw8321t1yDhwB5r2Tgu8RS4uGfbkmeVRQS5swajkhAVpBcFcnC82aUNeoviUemqfN89eMueqX3RRsV",
  "key8": "QszS72F6iq7FVi1DLhSB9RrxW5S3oDpDmw1zm9ojAyXeDFB5bNpQcxmQPMZbkZcpsjLYzNqaaVExW74CwUx2Gcd",
  "key9": "2pyF9QV3W6b83Szkd3dBXYcenTxNGHL2FGLe1sPLBbLX3dvmnk3xWnBE44k5m7A6HNYNHr36ZiPrkk8MkSUM2QRC",
  "key10": "5u8iF22dGpVbppTqSUnmpb7V4Px1QVYaBPwkNE4Fa2QufsH6amTq9dHE1KWDp3RepxzNUi33a4g6rBzkrt429sZR",
  "key11": "5mAXHUHZPPoTeDzaghxSZ7kWzwWYq7cFSZHH6Hd2yqfr2Xo3maTxo2E4U4a6QGc9L3N1KgRohCM5mLveRat9SAMC",
  "key12": "5U5D8EKqeqX1sS4s2QTofzf4nMox1B9t6RFNmpgaPdDfvrBE5fHQuPd57VuxChVh6mrtjAmqPB3NJMTgAyFAUpqo",
  "key13": "3NAEkHSpmhish3s6SCmEtEyZvVqmGmrc5fzxpyRKnNorCQ5kgvdZxMnzWaVcjtqTGHSn52mTAExeFXQ7QHHmDYpg",
  "key14": "5o9NHNbVXgrSxWVYbvuULZXYivhbjzeq5kY5N8ajDVAmfyXytEzgwLTGJfsoUEWjSiY8Dcm78fPZEArEaHJjXbfH",
  "key15": "4jWgu9qFX6pJsSwvnHyKd85jM4K2yHEmzm1kCCNoj1S7puewL4TDoAqRCUMALhoA7tuYa3gHvy5q2dR3ppJxHQDj",
  "key16": "2aqKb9D26gHkB3npaz4FhacUm3y5tz43vZDsoXKFieuGwzM9e3RqUmfDc9k3N1VfWi4Y4hFQZMEynPKZ3dv6eC8p",
  "key17": "7zs8o8jFhT4UBK5BytyKz8BtFexddKaY6bDXok1JmN7a6hbQmdnbZd3xm2ceFsASfxf51LP1kdFFRmcoUbbWCcV",
  "key18": "65tg8UaL9o47429Wxeq4Y7gi9BmFJjXuVypdiaoCZ8VUiDe9zf5GVw3rEXUhzJBvCVdXssdojot2249s4KMDx1pP",
  "key19": "2VDrhZKiX3Y4FCLYZDn1VEJPG3B6oLX1wJ9WGJQLYpZHBJfoer4SwcrAaMqftsDWvHi4zDfH3VSXDdxe7RGXy4Q7",
  "key20": "5SPNn9uhUAmWc2AL8iaVwrkMD2aXmjGtT1gXZARUHJnizFWBy48R4ZgcjRsKYvb7x1aVLgMUGZvdJcHGJoP4oYKZ",
  "key21": "5xBWLZDxrHt7wHxwXsVspvfgAZUPbJXocNHnReu7isvQzmuWkcSG5sKjgH1BsJgXCbCCB6Mfc5KfivcKYZiv2DuX",
  "key22": "5xbG6MuMGPqgTCHzoDZTzq7DZJX6mZdn9Ch4dXsHGwmrknNyGX78tuHLrCidfAHPNp2gYxyjA6N74nwiaLM2afGR",
  "key23": "37w2NXJUcNgAVdRtUgCJb2bxhYB1t7TYnYdY1Nu2E1ZxxPrqjZUmoKjQLtqXtGKvmLqrUiyFA4hHAc8LcZdNDcsh",
  "key24": "3g1bTNr6YBfYnwUNSCA7yR9sMRLvxGCVDAf9usBDrSEEKoRUbUD5cd1TKKE1pr3yG1H2u5Mmha7j3qEgZVh7KRFf",
  "key25": "gGj7oe6ouvPR5QhtgMqZ5U6qeogb2odAuYqECrmwYHtQAYRzVwG2tTTxfPRsyidAKQZfMcK3zU32RokvgcVCVdJ",
  "key26": "vD9QUzf7YmNWZg5LdPtrKE3kaBqZj7DUs6v8d8g9qUkQWga9xe6px81GEVp1LMyG8H22do9rKzHzfQCpRTJEiv7",
  "key27": "MRq5TJJvs1h14HGrEVuAtEyespZw6a6imUPu4i4dyyEJWRv9Jwc65tNoVuccPRLP38e4zbjmL5DKNWnpXyFcY53",
  "key28": "4uLRm2jgX4XmH1YHGuuiGaBmtMdy7ms9mwc4qiMa5md1C9xSLf3iHzVZQkovMunDf1Wn7P7ak7PombxHDk686SUL",
  "key29": "2QzNMkEeBSEdat1RwsYwWxyLRdrdnktLRZms5V5byk7z91g1YKCkDxVfwXnViyMERrgfcjPy51gz5ZqJ1tfhFa7q"
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
