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
    "3C84HCesi68WPoMQqme9yBvhXcHUaWXCzbHHcfhxCqnpbdt7eyhXtsZMbs3F7xKB45Xxd8YASSfqGwkB2sSBN2nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nRzJvcsaUgZNVA6LFszp6Z2h6KS6UujNgTKTNw3zUtn8MsBGYWWY5fA6rnBxSNLdxU7i5jhcG9raQ2vsv4YtbZ2",
  "key1": "2HFkD2TJ2xTeXArHRYnTVVrjHY3HzTAP7QQmDS7BepKbaPQZmuLcULF6aXNx4ebrAniJNtQUJgo9By5zDfdPTKn4",
  "key2": "5Rh3Y1YEn57jeCeLDifwBRAfqPasMkw8VQ3jYhGsrKgefedf4gUDM397DP4RzaDzcQpGuuquBGw1AvMGxU5biVYt",
  "key3": "44zT5g5EHXSEbUseLjZ2eoSCCQE3giXYjQDRJDeu2S35PB17jFPdn1pED8cJxappfuQHAKMU3pLkVt8xqjSvnbyh",
  "key4": "4dQ2N1G89ZQqt7hbzkeHHAYbLiCAz8QBQbM5jfPZktkFeSRsNj2BwPo4yShynh6fjKDL1W5t4Vp9uSCKVus4r3eE",
  "key5": "3q9EweGNnj53K9SUxuheT2psrGoWPYYRG4V2yseDLkJwtWxtkZTSwFkU1EDdUy3rppWyiPfodKhzBGkPXbbfnKiv",
  "key6": "3RL66CUPUSBTmZMVDUz9MC8o33GWurWq57i763QTT3XLPCz9NJ1UYBm1dCXPDHGNYkCjyjz2d5jyEqNFy8im2PK4",
  "key7": "bCGMErfM4hXjTs8yfcE5BSe9enwDotR8EahPiQarw6LPW1jLK625JicRasC4HU9uZCAGnGSpq6QRmFAPhs86ipN",
  "key8": "5ZeHUQgm1mQ5eHoFQzNkqaEzcuEdYqX5uw8isEcjH7gY5bn2EvXQueaS63pFny1PqznQjjk4xMQoeVMtbVzeNM8w",
  "key9": "672dHvL22bRpjt1AAGchSzqjDrrBmuvoXs3nvCAHHXkoQukMqmXS5ejvGj36yCnwqzScxyTD7HDAJ1vq2NxmSwtC",
  "key10": "4oM84thzJ9sKmTKMasZNBV97VsH5HKnf21oXa9xy64AxBXSA9WpfteLVZXbNUZiGfM8WxfcMBJWQGPWJBehKuTU4",
  "key11": "44ubAuY16BNmJV3AhYePnAYVHLSvMcbzippqzE9QVGcQE1N7Ej2GKk8xctG6dX13u2mL18UHRAE9v8wa6BdmouGe",
  "key12": "vxUHhE7Er6PNTZxLnXVhTCCXDpeAmWPdVrZAuQZepMKZk5EjGxB3ETTmQbG7RPDwJfinzh9mkiomd1Py6xGFJKG",
  "key13": "3WS9NxnPGMhmGhkncZrmmRZkjvLqxt9BAsnF867pTqikQe6P35YM5rhvPeyAUzMQWmCXrwSFHasUYVuLwB2zms3s",
  "key14": "4XDpwCMfe89JA1hLpsBzbcfHkoGsrkr4PkPRCugp67ZUSDQBvkrbA2Jxj4dCzB3zQ83KJXBbWQWMFMMu6GZ1AWf7",
  "key15": "5PJ1c8uJAo8VW1hGfEo2RGcNsi9ysssSNean6p4gyXAM88AQjyCiGXf6oGrEQodhxA2mrmSCMCewSKUW7VnMXv6C",
  "key16": "4P3LNFTvfqkTU4ECFXiQRaqXDinntmGfxE21S4DkQMgg9vw52tWGrP7ocNBu5T8vAr1oymjr3KLX6pC4tQiwoNwY",
  "key17": "5cK9hxq4eaAAyUqPpXFw5PscrWupoVmY9yb4wrQS9vXU1Urv9iJEsKtzat2HywTWGZyUVHHr25n97JDDWc1aWBwG",
  "key18": "W988TJEWyvuf8ooUQqLfd6ZtviYEPRYiRGzbkPJArNLrPH87DAvhWS8nGftwV1JrJTD1h8yzXKi2PgVyec6MtxE",
  "key19": "4QnzUQxukz8GeSthA8Ao2pJrjy8pdcGYEDrad9b4KgyyDPFWv432eeiBwfdbKpvyErKGwXyXBhwDmbjGmQfMUK1c",
  "key20": "3d92uqAo8VNWoXP5o5zt7X2e3X7pbi3XKYmbdY43bWzGvbNS1y5P5XR8HbSkJo3wVoMqz8xrKk24zZ4yW2eyA7fF",
  "key21": "2xp77RvgPQhVjWMnwgofGyiF3CP1jApiCayDjkR3r5DggRKrRqfnKUGLQJTv8tWGzXyqL6GRxbQKrtgZT1h1DkxL",
  "key22": "4KEedbY9g7xGuCExFn1Ey5UdoxU3rcPSZzcD98gBVv3jYG6kUrkPPaGjhbcvamQzHtbTEehAMzaM58Q8ikCKEDVJ",
  "key23": "4zkLwfqQzpv4nVaUaKsfevk1x7vQBbJDemCgePVBHzpqW1eLJWNsU2hurJrrE2hswQ4a1MjKfapstodeuKzY3Rzk",
  "key24": "45rTjtdxcVTDnn1ZXAaNhFsMRJnjppDuPFEtcXKpRKFnBuPZtW3McGjktECxVAVLmn77ticFaxd8tmNwEYYw7xfH",
  "key25": "35my8xMBJRsH4gWwuLUNTuK5xv9e3UHMKCXsUzimmbWGMFGUoKdZsrrLm3V3Pip8mz8vpt91Bn57TdcuPgngcpJT"
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
