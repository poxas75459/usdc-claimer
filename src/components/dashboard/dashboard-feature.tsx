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
    "45yyLgQTvz8pPSK3c4StCRszZH3ikXKvgZj1Vocqyzb4JquKmfQzkpJe3jWyqb6TqnLe7zZggHJWgyGk34rR4NRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zHXvrqqvmggYYyq9Au5r5jFVPThVXv4X5ZBYZeDbsqsodNfEEjoxx2tmvZubSH8yLWfUo9TmTQxZExwrMNF1n69",
  "key1": "2NFVzyC75eXqBvUyu12aaqKPB7E2TLVwUzLszA4PaH8r55kUsXbi2qDaKeKh1MHv4t8TmTEBs4ixaLRZaNKLtfFd",
  "key2": "5jNxjrgovMiMYKknHZFA4JHki8XRQX1NUYFCoVQHByxJ7aGSkVLTyYVfVhywL16ueBxMc979Vn46mxeXqpg2wvhh",
  "key3": "5WRLcfpWeDCA1u2KvTZjT5QAPdRfiPE8gNAWMRy93gZHauBzyxRfXgW1HoM6ekRcjPUWy5rwPYkotBbR2DDxS7AN",
  "key4": "2E8SYTKUMtreHnJDAEgxwTiAE753QcSsWv87JF8MePEZ4CUaVCwa1tZTCuwsKeD1w1mYAmbG8gDE4ncZK29upW7o",
  "key5": "5iDtSUm6sig7L91mC4DoHTaRfkB6AdhJr1yHm6bo93vHcWyiDhc8H2THNF32WN4uRaF8i4zauVH623uDZDwgVaib",
  "key6": "3fCyBnQTz7fsbNBWXQHCgU8FUNhKkanoGLsXF6DCJpWjgNM9co7S2t2Q6dCSYpRENTWgqxTX9LWieXzZVF8Q7j73",
  "key7": "4PdkUdikzc3Goa3kGRTH1Ej5ZzwnRD67qyWBwQSFYPCoBaC2yYFWCxvwiJGESTKQKu8ESXtiT3VX1unqYZnQ9ujf",
  "key8": "3mjy1qRAPL3Vx4WpPuxv2F2ALdQnBT2W6DM771ZYCJNqNAVQh2RB7ktGo8cqym3cJFi41gVm8wArmEREVya4fm9w",
  "key9": "5ZLDA38PJdehxuNq9MrhHDQGXfcb7EvRmyLtk5gDCAEXdUzCKdVuQmwhboSmYshtM4521Ptf7Vi9mkiTk67tj9zS",
  "key10": "64PAz2Ex8nBUw7j4D1WBZ6gMx63qQnmqWYVod4Pkxw4yQkWbh46mMKbLYHUcfaEx2rRe3KhNcyL1VHxGNhc67DoC",
  "key11": "2Tdr8sMiZRBSmkdizwUSh59Fzhso7hRmP1ifKFsCGx88FXnMS7WR2FpzkodLDg3hJqiZPk4HsDUsMGQymJm96yB4",
  "key12": "4Js22MG4isdi96M9RxTKGhCpN6rjsJUSWz2FWVJjDNMpHo7BzZviv9MTQYUNEu4qYjBasqcuXNePKhDs6HtwawqK",
  "key13": "2A1r3236sBmdMMA1VicPRFvdcNnBZUhUNiGxuZoRRF8WctJWDJnoCtxWujLsi5kv5oueSTvEj7a2B99iDhWStZEj",
  "key14": "4udorZFjgmEbq6zUisdsavhynxAQnUmpV4CcDeHk93qjNueAqWh6NTYrgkLDzy71H8JC8gN6hByX76GDGnqfgKZq",
  "key15": "4jbkJz6DzeAcLpWUJQorRN1aXLzq8LaNiteFAnwETkhjYKKgaXx7F8sYq5iaSMKWCYThq9KpYyxS8jymThZNWejd",
  "key16": "3dKQ5x1wYnnWKcjFLmy1BwYu3QGfSU5tBNB5CfjbcZv3ssyxd8qsuJTRATGMcfm7D35WQMDdPGEh2YT8xxNqbQ6n",
  "key17": "4LP3ebXYuUAwzC15jHXhUMM8bLvVkVPncJtpkA5RyQGMdZHdPuMJvcA9tTfjTTjLhRPGWq6WE1h2JQaUhhDMZfrm",
  "key18": "2ezpHgrpHQJakb11DHuLDWvnkupZXg2bhGARmfN3zfz9D4zb7mzEwmi88hzJ2bvzEMNDyemw3gW3Cv66KuzoWrsD",
  "key19": "438fKRSAVtBhrzeWVZc2ZucNZgMKyj2u2D9ufEFYpziGQLP8QeSsjfwnkyZUE6du3xFfsdoiWVW5WZzJ3GshrkMx",
  "key20": "3T6c1VEPSQPQuAFYHP2pP9VtBsmKhTQ6LMfsCFNpbXtr4aAq3aFtu9aR2nXAWibiujeenKeQjQFCsWnUpdrsCAfs",
  "key21": "2a9NL1fQ3RGkHtUQDHj64RUe8WvqWT8ZTgDgwZJXbj1FLy8cQ3FEnRqXWgXZ89h23yRDDk6US8ZUZgHBqMgz1zJD",
  "key22": "49fM23JLtyWqocf2UkNaNhdJkVKAeQmMU8snEcM1ZXkTgL2GPVuXraSgNRPyNPj67B4YSrsoAiyvgmUf1yY858we",
  "key23": "4wukxg2iuPsJZ2bqFn92NJ9YreS7DkDpsjtG1uXAvRzVwJ5q3MeDtTBDaDN21r4HPnojyES9qXKmFuL4nGY76jjR",
  "key24": "4Vs8UGAYC7z16nHJ5JLywRiM71Qyegm8SdSS7RjgUMh4QKhoCDzj2T9ZZj2CeT1AvZfqbhNnt7vSsow1gnq68TBJ",
  "key25": "4AmFSTX2NDJPRRCQssmEYJNq6e2xTaR44VY6M8WEZW13FEiz2H3UdyiKa4BEQXpYPNPG5BiyuyLcHYXN2rYCZ2GK",
  "key26": "2uPBtf6hQR14LjesyNeTjU6iMu541RBZqZ2voPMBcynaPpyXZbY9rL6gySqhWU7hk8b4jDhXxMPfzEM3CWGPNnDL",
  "key27": "G21kQWxYPWJcVgYoLz5szP8G6EzFfPCGUhoFmUDTgnGSvccsjA4gGxV3RwYTGTBBfPb7Hoh4EGyuPhwJJkQXKX7",
  "key28": "27sYAMTMU37tZB6aXomDaU5uK5FTj6Cds2pW3BZyKVMb37rr1oxPX9HBxoiqTq7MgYN4PkvAHSwA3o4Y3viru5SL",
  "key29": "3KXCqvSpiFoS3XXJMEV1aTbSZfGabbpK3wXZebaeeK5fsdBf96yAWpDHbzgr6AxNTF4YRePP4J68XKWqvee3DCGy",
  "key30": "3EfxpWm3NkBBSfVAzjZuynBWjuaXTqXuENJFiaf8og71Zod2PcoW1ND8Jksz3uKUYk3oBgfZj9dmZhfGWZCVhv8Z",
  "key31": "wNzi2t7AdXcD97qT86qfB85RJrmCCbYbdMBZH9RdUppXpbmgSqNnoU3pAN999EbxPKi1JuXMKqTg6JhbkaZkJGa",
  "key32": "4vX19FkJFyV9CpiSfSnvsAVseRaGC2sGvWEiUfhX2ntU8soewCzyXpwUWTqQAM8jLjxTRjSi3gzQ1QELjy1DHFmc"
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
