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
    "4W3bodiq1TuWTYcPxaDn41F22hFaWxeqBPeTXUcBGoi5pfQMtSteRZKX2hc8YTqEe9rJfpsLc7MpQXmcGxmQcyrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GfTkdzziRnRjcfXEEpopD3io1ubw9bVZiUjzH8ARtR8gaScFevYW9kCZk1tATPRE3EsubtwnoayvwqTP4BTKvQF",
  "key1": "2TCFwgcmAx8zEaQpMzy2FAWUgo9X2tkvuGVp2YQ5e8TTMrowQzfAeHRxrEZNi7DSfnngGkBWmNrKTsstc9fmJwFU",
  "key2": "57PDxjXe4VeJ3M72NewxRWNuTw9vYuh8V6fwaWuJm4TGaVU4fs6eEip6R8vreAZTwEEQHJgWGshVXdgPH4VLa8ns",
  "key3": "4N8y9HCPv5N7UjgD1Jt3LADWW6fShzCDgL8GHMME2fB27sszpm4yL1VQpfDpEhiiggjiRzPzELbZ9g7KkS4xv6LM",
  "key4": "4rCxuSMjL2i4tm8DKCQn2YKJRb1cJNhEKXGtJ7Xaw4U4Z6cge5F76yabrQ1NidK9SPYiu9xRcMPVWtBtvWbTq14F",
  "key5": "2RmhHvXoW9efQiy8HWv8vxU5W3pRYodEtQLpeY6BwTEJzagLE9epNDvpodkVHTMZwTD6J4ZNNLnVAZq6tRHz8Spf",
  "key6": "coMu1qA7LJh9VC2iBpxMj56Cy2AjQ99y1QA1oXKi9Nzyuuo6njZph7TQCYwCiLGUN4Bfiq1kRzrLRdGYSypSynb",
  "key7": "3SqaM3fLZjaG46XY3jdfGZgRc6X8Q3eRJ2imFFiZckEHdrgcLS27isZLMDmpXHjTdKMdQH2nXT9ECvkjNtAs76H9",
  "key8": "2BVEgZe8Zh1sQZj3uxPqRcVgG2Fma2VseogwyC3A76Cq8hcpg56HtD7mnpR2DEtL3egwMxUySEkZKaYYrmVBUukH",
  "key9": "3JwuKpuiZJcXmvcrQinur9LHh6oki1TKMZyAbS8T566KHxf6eeTf54NWZQK3aP5ACE6NhU2c3q2QsfapqLRvcWQK",
  "key10": "AWUBDosAhRCfedzBBmkkptJx4ua96kx8iMU2th9FsQkmvPwqWMu8W4m2se1QHZJGE9DiDTkTLNVdcestLF7h2dU",
  "key11": "2a48esjS7AFyM5MesBenZa6P7noHF9CZ7uxmLUjA8n8YbiJbg7d7h8azPTxyAKvNhXNAc3k2pXvhZrkrFh6BtdMx",
  "key12": "2LnGoGmHeP34skDLBkHusov6iiMH1Xd8r7jTGP7ZJC9zGZrxDiZ3H2bSNYFm1aU9WBoRUPMU4j4rKU9PBTG2yJpt",
  "key13": "24A51bmmTwvWWwwHb3qTpCKGZZZWe9KSaHxdFh3eWyq3LCoqaN5SeoePHd1SozKeaX1ErNCNbvmEyGGBPjPimFuK",
  "key14": "3jwYDtiNsfQxPndKTJ6e93MTqWGdzzXqsDVVRRDZujnGyRzRugjcqqTyTmZ8VMcodvMPk8vXCmPjryC97WhCHDk1",
  "key15": "2rKivSL2TCYnpumeo7GX5qy8GdgaJKoREF3oeBCRjrmS8cZRfJCmmc6PyNYdP8pbYsugUj6XChNDQDUUsNPwRe9K",
  "key16": "28VYDpiVzL4CGzqwVPn1oueyhJaaBiSfdWPnZTvBTKhAisboq3kjTtUuGNAcafKwzSHaB71gw2VhFvN953UDHViK",
  "key17": "3ErkULEKX6avRSqzCMkNTwwBFGWMN15viwLeVXEGG1VpoHVzCPzt6U8UA3hZRoHzEgX11KdaFPKCiNyzb2jst5NV",
  "key18": "4fQnZoqvwuLqZeq8ssQD8QppHdb1mFxMt4Ra5m7YAwYTuAWc5MtKjjksGamF54Wu9bUMDGvJ9BNXKAZo2xJJG8CB",
  "key19": "34dCmAmjYT8Gau38h29cinRYMBBV2h466SqNh3RSU3CX16y2r9WxkoutHiQEvbb7aLxQ5VffgUHtxkiMRAfcMZ1Y",
  "key20": "5ia7bp5BJ7BP6L6g1jL6UhwbLHdBCGVdt7ntQK2WgTcYXQWwHWvFsHN3Ko1knce5FkzGfevr9wZZEJiDgK7TrpjA",
  "key21": "58vJnkagtDNMdaRk4Ym2TEcCpDxqstNAhjk4z4fbptePqvEvCKSTEy1XtiQpyBXhdVm2d4RH83iWFYVEkh7F3Jw4",
  "key22": "raRuKF1m3ANrMrbQWmoDPXBLd1UdgVd7WXnXC9XHME7fA3n5WgcMRtaoPkNEGcaTL7aXr31jQEN8Woxf4HXJsvu",
  "key23": "64sw6L69sv7rEGHkYDgz6gpbRnnKG7wHAD3maXjKrA5P8YvwzyaDiEijZRRmXTHiBN3bArx8a1N2xwqYmrCZPSLj",
  "key24": "2gQ3bJzWgzoyMyX9hHBuEvevqDY3krYZ9W5RX6XkkhTgnVeaqn12Jf1KkBbrVJDnpsSf6MNSDafR81DPFqxvGHnk",
  "key25": "4D525JBavEaeRw41oxvnHEkFeumMQwQPUSQf3bap6Y4NQN7yvai6B1jEg6qPrK9dDzaAyBurMkhLuuKuMUjodQo9",
  "key26": "3ZH5upNqf8etgZESn1DatgzpacfvUCv8VsnKVHzqB4bgXm8GFKF2wHtgtDAk7M5dTbUr1Vyux47AW4nRLQQWo4u",
  "key27": "5AuJWNwpBxvs24DwLv3YEEmPW9G3Et1r5zG79dNH2msT96GoNSz7qDpHnbqry76Kt8MYtDbgajAv5vqJLi91zBBX"
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
