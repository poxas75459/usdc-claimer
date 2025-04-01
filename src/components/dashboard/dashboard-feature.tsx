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
    "3pxqmkmVbYa7Wi3vTCPqJH6VVYJz4DQFWDDbMCd6ckV4mpiQK1uiUqD6jLsSiG6ef6qzjc19LgUxLLMP6KANteXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H1TWnPjCzY7M9Lw7W9icCyrTpFcJCwQ4XRX3iKDzJ1ZUPCkmKwvQhXiZ7a7tMPpgg99AzG6463uZvPLeVFCGNBP",
  "key1": "3SK2dHxbw6UL964BzQYB8P6KSac1sb3EXqPgdpo1ywTY3DJxgpPedeR3gDVycEbsot5kgixGtutRB73LdqQ7mTQ3",
  "key2": "56itgaxdAvDbL48Cmzq4pFVsuHzBkUBwAMmP5bSGDTMy1S5g77HVaLLv7EDPSd1t2Je5TbJxhsPubFLjRYNLP2L6",
  "key3": "zXwbzpM2EcZogZbN1FH6AKkzD6wzA7e3CaVejtC66HwtRixWsTymsAZ4DXs1LmTN7zs1dw2SeUaRa35uzCdkz2x",
  "key4": "3GQ5AvUXTiku9BNkx8S3bdGwUVG8ivGveyZgZPpvtbJ9SKLQTUAany3uLs7SYizJoEfCRsopuuzQ5DZnegk3P4MC",
  "key5": "4jAi3Y17CCVGwYbfRm1xT84t8U7maVbGhWX2yhwiobWcvibaRQqbLCuina88hHZ5SibwTKFnbaU9YzT5p9Th5Kcu",
  "key6": "3tYSEL5FtYVDGCqYa17SZYSicWvVRq9kRQCHcuyzKneSANfpBdXX2sNu7pfLF9WxkzcvkZofTB69ET5FBX8XdsHi",
  "key7": "29QobG9WEoYZJJtMzwMCQfWnr9N86SuLd7m9yYgdijy5pDwwBmrJ68MsVkYAbGZh9QsPovAhamyz3UyfBkDXVBxw",
  "key8": "2pp9ZLm9MKdsJP4dncSVg5xKWUELX6EkCqD6fKDzrV76oHDz7abUgdmUqr3CHXHT4JnFUwEKhhpqVbAAgSPoYSH2",
  "key9": "5q2Pi4KLFZ368dgwtLcRSqsGJaYX2mHrZNG6MeAygeBFTnjdUA6KXm84KkDAuH9y3CfRUzFVVkij1HkY1gujoZHk",
  "key10": "NbaBrJWgJcfKgMqHVvX31zbRuEsbNUbjrg56xKtyT7kLX9GR9dZyy5ovet7oa3wYa4ZRGzjbRLqqnJrUQ3hQWSg",
  "key11": "43pcVRWTYna7GpjXHhSotXgvkNFWrZstc3DwYRsK61W6bJJRU7b57W3TDxLBg9Tgw1NjZUrcoEygw9VgM6VocQxQ",
  "key12": "meLbmo6GVRNmaBy9jLukDdZXkdje1beB5Ea4noDUZAP31SMG3FK4kmXtq6QDU3PKLCeg1AK51DoNR5abdjpbFx1",
  "key13": "2rjxxuTKxi3AgsySko6bQK2aTD2n8nxipWaBAgFydCrSEE2KHEgNcsuCooruXmP7UMbtb8wKMi2onNy3LX5A8ep5",
  "key14": "2BVZTmRHxFYLNkNc8fJKaa2mb7nv7zJQq7SHV881Mo3yhdFXiqyrMnwUmSK1458JqyuE12JCS1TSpQa87intdu5z",
  "key15": "21mPiwaqLoW4xp1QKvMFqBLh6jonHHN6JVbbNDwtSCNb5ik7E64jW6YLp3iA9z8L4aph1jDkLQiW3D3K4xfBCoix",
  "key16": "BuztiKzqAuDXJ8uv1748GL2z9FBt2SvTK6KJr4Fg3DdYie4Mr9sYaXqaCG9cShaDf7x267qqxLNBFBebFr5MAHT",
  "key17": "5qr66tmPWaCZ5p3pmFG4sndF4ZdjqbwjtL8yFYWWG7ESiJaaQqEyinCawVuMqtrKqhnnkBHZVeDhuBPnkdzxTx8d",
  "key18": "5PFVVifX3i6NqVUu8eyrnsjudNPUvmo9WQo9gRLkgRn5ZaD1utkArykyFJDR9yRNx8WrvExAQL2Y2MRuq8L3cjqQ",
  "key19": "2xhbyADU4eALJGcATz1mDHhLTS6YoXLTPJjhbLLuRki5j68zhXGKR12fafqQGhaUQwH1xb8nkfnvdEoGqiHezdTk",
  "key20": "5rtb4PfyD3RGKKtR12ghGzz5aebbnRAHaNyGMPYqJYRGuCQdz5XroyceXDTH6KQNxf9XpJEt3YgVDAQgKVzzV2LG",
  "key21": "4buF1oET4VBEkWs3F1ZRBSRMQi539mmmj71S7vRDQNUsrmn7oe8UtBR5gqRSa9pD3qtp96Hyr8CvYbDJaw1fxHF4",
  "key22": "3KqSPYkM7CFRwfzhWYAH7XQNrfxN8XXJFsx35epewUgoXBvWT863yJMosAnsfXjXAa4tcBoCeZMwzt2cpsi1FWPZ",
  "key23": "128cJwxcHw3ugE3h9mQMqLqx9Nht3eaMSF2gEwgsnAJraQ7Y6jQavsY88gr4wme3Qn1bNtPvCP3LMcaB6TtrGnd3",
  "key24": "4DUmyFqHGgQVw8SuuVCPfHn7RH2Xd1MPdBCofSPc4VhokqghWDxRGGK8KiGw9HDeSB1yVBxUTZboyqBfAZzzrUea",
  "key25": "4z5brd3Apq34JQue1GdRmTsTWwFUaL7JiGLtTfXRnRjoesN4381Atnxjv9dTr4jjNYx6wC662QK3ej9ZWCnSvwM2",
  "key26": "27CJw45tYWWV23e9EB4NtVNusR9Pgit7WnCHAHUewNsXo5ShHxLRijKq6Fg2YFUX53xokS9NKRyf13BxzDc6DCiN"
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
