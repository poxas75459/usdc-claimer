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
    "5QdTFZ1uB1uZsCqjW3fRkytzHVyqE5Pv5NwbQpsjP4WpvuekhpvNSdscJGKoEKpLgqBhVpNd2N3JPLJGfbVBFJBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vymkVkdc1XKBJe8N3dqL7pAZqrGzBWfouf7XimirJam8X3HGoJushPhcAWnJeATeHXKhHrfNeG5VbJfNk4jD2Un",
  "key1": "58NAgFDNH41bLYV4oofjdV6D8x4KmnfivKNkX9FMzv4A9NsFnaTLsq3thJXk3XNMEwEYW8LJk8XrNBQApjAmdCjm",
  "key2": "2wD1vuQ6MhqNRKPg7WaPmnMzTNeSy46EJrUxQD44k2YTQv8rCePoKSuGApTSQATmE4DMhjZCLMnfbKrM8viTuXsc",
  "key3": "2Cefemhw9P8Q1vgwsTqz4uRaaWUjLdBG51uVdZFcYptWQ654cFPv3xv6Rt2RkHf7a36s46Pg1riE8LCq7gEJcrEq",
  "key4": "5AvRBQQBRXxqyCARWoCyHi8xiKMGE5futqZhr21TPvza6AyWYQpxTfEWyn62p1m2cie7KeEDkSLKi4viKsKsH4XF",
  "key5": "4nKmhUwfsViTxi5cdr11AAx5A1sFnW2jbkgQpTGqgZz7urov88nAJYY4nsr2b7g8SXYsv6WuLThrAGbQYPL9REuk",
  "key6": "4Tah2HGJt6wYZEtt4zJsegr2mfmAoFoHjDXqpELeVYwtfHi14JBWde2CMfS6h7BDsQuN34mP1zL8ZmYgbNDiYjLN",
  "key7": "2PBGuXfysqEU7bk2bNq561XUC6YrKB7YqSWg6HS2wyvof4FpQhtXg1cWSrGqbSoumtf7hvpY5nuZHmheTif2fgmJ",
  "key8": "2mGQXziCHfRQ9o2nHBHKzo8xGrt1tc8msGXAfofExEsir5h9tQFjqxiHMX2T5b8R68k5Ltzdax66sbHneefHQPB",
  "key9": "4HPCW4n5fqka4A7Rz8dJqxRJZn8RqGmNFR2jdHxMGxCwPVQGLU99QaLRhURNhi7bpDkpaKCKs1Bf35aQGKADN7i6",
  "key10": "eF3GAfLX7e55pxuu7qe5PCacdczy3ALLSsisqa6ymDYsUS3BWbuzkcCLs1rgv9mNG8jjao4TDB8a3UarHwoTDgn",
  "key11": "39YTkM8JyzzcnmzKyd8r4MJhL8eocsrMrG7GAdJWZvBHUcjABaCP8HgRPicjD1Uzv2SEhQKyjBEbJKwe3yWXJyQQ",
  "key12": "5Hrstfs5Vkk9Rw2DTmbptNL1n1oLkBGcXhxbUbhDwMckv8VxxQqMbHzRxDn3wnhdqxsKDt5Q8twXw38G3xyndwfV",
  "key13": "2k6C8hGX6S7ohvhRXDrAjBnCGBuC7giAbaPgLhDdrujk4GBL8VvTgkhDQZwrnGCEyx4qFzDBE1uPjfZjXKY5Dyn7",
  "key14": "4LAQ12vtm2nSfYVr4m1WvazkskLHDW6w3wLrPbdYVCX5JAfby7yKfGgbS7SGAUkLGxPjaEVrvQ8hdYDts2rZTMAC",
  "key15": "PdYijFCaEJi792Bg7J2LkxrvThQbUjEXo3kDCtG3sMU33KMfTzrNvPUKime2VrZ2AzJfNh4mF5xTeYu9TnF4kLY",
  "key16": "3qNtTut9ZfWRT1H3fruzSB9JVjrRx6qQn8juJDc3qduNj5g6gFedtp8sfa4D5ythCUAX9KD2KzxomkccZXx9JHYx",
  "key17": "5nzxGSP9ui9XeXGdeMxcau7UVKVn1VTWGFkW8t7nAxZXLXxLhtkHP1RF15cnyqF5qmi9ZSBzGzCxfo6AXGaAFM8",
  "key18": "2NyYNpPKQksHGBXSDtmyLZ39bndDe7GGM9xysgbNNCicNyPWyEtg5QPYKUvLCmZH2BbHvrij6ipZuSGwcMAsNhTY",
  "key19": "2M16BMkcggU1RsT5iCH8ERrzJvSDxrZJn2VsnEEwRyWdQfKkB89zmKwnfYAK6e5kSGysXK5gbmr7em2MjMkApGCP",
  "key20": "3A27ofYTJtuxCJsw7ctAwkKqZ6aFoFi5TAg4vmXhWzzXpeB9uSWJVewNywCVBbeuYHHW1d4fDvvLKEEwZx2J4JG",
  "key21": "5iKTEXwWCe4dWdu8Tycbsfs2pc92Xk2cuFF3NBidNBQ9KNCg8AHs3xY1SK9orC7J2AiSPdJwUVaYsEzBsiuYdUkk",
  "key22": "3FBSRcdcqCULRHykrFRHd7yRgPnpc68B73Ug542Astfz7U76XQryD9FqesE59UeB2sTb6KARSTFKyfMsrzHGTomP",
  "key23": "4R6yxb53NGrfxWk6oQj9L9qfQ3UNUYvkCyiBj1D2Lj8p7xYSkXETajXLANdwTSGjDgjLRwvRD3krUjhPMxFxiEJ6",
  "key24": "2PsLSdhr3ZJYgDAsirPhnb4hLb5WvygaQquPjtsFt1LKNyMzHHbhijVn5fEqVec9QBaHDSXttei3sUPeVCMMDg7M",
  "key25": "5kREdPJJDRNdco3LpaL2aL1MYXJk2hV89oiA7jyFk56QpPWbefcrcGyNU1CidMZNPVSY7d2fiFeN8NkWMvkEtrrq",
  "key26": "wRonE1gX23GH8qLJyxF13aaSLczuVR7Yq5MXiACzr8oCYFhhRKyUkcio8U7KERfmShip5813CLimK5nLsgFUKEy",
  "key27": "47Cb67D8dys6Jvy3WscHQHiLb7RKDWu4a5hvoxF7gvSzcLgPePmFBDUJMReMtdqjSyhDdJQjBu4NYtHqvYsjLqXR",
  "key28": "2sR5oLSqLZ4N5V3ShtFsj6TSCCmyZoEWeoeCNzN6auMViuWvwd2QbJdZSKtbiiME7uAHz5xjhthPH8XRqyRQsjDz",
  "key29": "4iZZWrouvQSDGGcrxFg8ZgGfyeWGSWeK5rDm1nkLFq4St4YtyqFDYCAp8eGRE9i186wRnfdqJeCo6So3FKbrjzEY"
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
