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
    "5CtjKbQF2Vw29VLGFeV7qW82nXeQurB1maZnKR1zWMuhisMTrrrZZUUDtnCHVaXeARdNfrXDkQiAsppFxh55SFW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VbuXquttDW38dRNBrQeVTBMGCyGyVUmZy8sAfkpL5unP53AcQ4BtsbGJisZKSJZTJ428p66U97Xn17YPPAkfqxn",
  "key1": "336QFNXqmff6QyHpZkjAgxxZ4XG3zALPXQsaGq5BQyBNV9HzpF8B8JurmUrkR3waQSAPH2ZKS3BgsczZf8d39Cs4",
  "key2": "ZukWZ1xNXc2ePCnydemhtCY2A12axkyMEF6paHUKq5xq3hvE9xRWnFmmHrAnLVAceZZz1Q9xmAimDpBVcQCyMjN",
  "key3": "5A3eaw1f7YnAqZyrBQAdYNeyFrRf89dHs99SuLtMUK7ij3KiVXAMr3nAAzo8nrfj74ZMTEHuZGsvXPnYQ7fYq4PU",
  "key4": "47PYWfPLcRpDx6R58do9gGjjtVRLBtWHGEtATUcQEgntdYgje4pVdVCcQNhym2kFd1posxD6b398TECiNq8auUmi",
  "key5": "4vokbCiv7BJ9L28AYFofGeZDYTC2n45QLaXuXjpmTZmfDkWEuBqBqWr2PuwbPqkPE5bjFHa66Pd5DXiKvsFUYHUs",
  "key6": "2a9mwpDuqbj6AhVUW4yfK7dAQZHpRJbix5vwWTfFd6eAuKRh6S71o94cR88H9zWuFSoamn9epvbXuvFhtwDubLTW",
  "key7": "5J88nUgg9SgeBo6CJdaB742VgfafF9HmBADD9T2zuBRorW47KABhQuhzKzhi2yKMKpHyXHJyU8EjnXBYF6hiv5JG",
  "key8": "225XWxKvdUpnknZio5BCXvhtQhDsF84PgjHu8LXq5c8Djk4c9d3bGoV4rpQB8UKx1X5PFCuYneppCVZGSNggP67q",
  "key9": "5EQjsULSBzUiqtTgj2bAuYh8MDT8yK8VB6XxSf8AFDRsaYjpsGmoz1d7bdGaqcAh2HYngiFJg69U5eJSc2mK56TN",
  "key10": "2BytTDNoyHcyhHMihN5E5YhDegVz4hdzCQfCLQhZNk5m2U9rzH7ebgMG56h2Rth7gxthgQ88ng3aPv2kgKdmBbfh",
  "key11": "36GxYYNWgXPEUxbkDWRrfQvNib4waj7Uc2RGuRmm8whjJ3Ej5Hpp93oEZ5xkyGYP4hyt9wMrLtTP9ytKhNisd2GW",
  "key12": "N8d5qwoEUq6DpzqH2VpR3wDeTKu2v68oQt8EUWC5ukrUdwud9Vpk5D3kCXyrFgMM6RQn7zT5VyYD4xUc6NRPNw3",
  "key13": "DLnSBZs98TjoqbXtJy3wz7P9T5E4kjj5Vxu7QFznYEJ2Y2Whfk27aYfMvGPL6Z9RpSnSEQz45ochjXMEg6HhWxj",
  "key14": "62eXbsUVZBQAz7E1MyKgtYrzGBfe2rdcXyDwF58EBWDSArpnWq8nJbJG9QNRNAaDS26jUDebEL69aza1h3f5hW8Z",
  "key15": "3cw7VD16LvMy65wVdRusMKrA4eMEFbUD6DFxnB6Nx7qtbJVtwmCAH21VTj3zydwGiTSjtr8LtXYvQWkQ4GVSjWmM",
  "key16": "2CPYFEzoetXFaZXJLDMNdu9bm6umWEEQNy9A6ZsxwE48qMi76zBtXGJQYoEYw7rctGqkayjUwuvycHBKidwcYsxd",
  "key17": "4jMQo31C8ZTbczCrG8Rt3zHKQZnku2UYJJ8KnAMSYuNzAM36FRmwF4RJ4htoUoq27HdB8VthDWA7mUU13czVuJQc",
  "key18": "46v1YQ7opNkj7vFfVL81B53N6wgde58yqNVBe6gnXbQnhpPyi9pgwBqDU7Y2n2WvAkWWaxomMs55EFYxGD2TVgxJ",
  "key19": "4gDwGTZQ1uTEcLCfH6XC2YSJP2kSKy6irU8idKj864Bja6yng9tjAFUJ4PL6vvR6MM82HsUcd8sm1aBTENEU1Uq2",
  "key20": "5DU5XXJTwFtYSQpVy9nLvuwZvJdRtPK74GDF54GVCUsazGoNKLvHwQTQScrnspvCQsob8ZaEU9uVQmCWvWudTdUk",
  "key21": "huttYLRCL56G9PiRHbsnSPA1UJUcnK33ipHDLdh7GQTohr8UaDztZpYTy7yw2gaFrcumkqfNiy5KS1pVz6jXjB2",
  "key22": "4ZHme1KJGhLiHaTg9b7mBTGGqycGytaivyLwWwhmULDyqJUd1snM58T7n5hu6eNJzqvbFmbRYrcF6YtfRjSPaymC",
  "key23": "4QdcKyFDyTaaJqrtNFvvkwW9EGEe8i2Th16XNFEnN5sd9krUZYNuiGqtmS3WpCfSdtH2S55oNYQyw2cyUBAUqh1h",
  "key24": "3BactBE5q7SJKmefz9pasnsT4ktKevRfrcvYQ51QdtrZ4aPG9Vd2CY9UxwxXVKhdd4hNsWuaQ4XdJtYSuRBnsWtq",
  "key25": "59ZeBB51GuHntuK1NJhSLgNRDFJzZ5ppvymjtU8SFtCJUMWwQjoX7w1W5M3QjMH36wMdKCieJvYLk1zCigc6FK6K"
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
