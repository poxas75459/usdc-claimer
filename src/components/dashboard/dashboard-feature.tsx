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
    "3y1E7ggAUzKDAnC2PTwvegdAX4x76qohZCfRb5ucWcpGZtRHZeWnoqexwRoMdavz7YkBYLxMjzeYcfGfFnCM6sKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PoWYHQaiNS7TYW2DTEvEv93hQ5kh6CQ5qEhy67uLCyhnMGVjdv6DCjZcGe8YvvSCqWWgKfBQfuWYfoHitKbPscE",
  "key1": "5DvBp35Vdjxz1TQmg4Cj8VF8Twh3XQF2s3JGqDm2DSs1qnKhTgq12S6mmE4NVTHJsHpJEaybwS9N4AUbv6V2cjip",
  "key2": "5KyMjbbFDa5Ly96MRsSjL3VfynaXvZ2AnkDCY2pzBcbDXhwsNe4QopdWfnLbRCdAHgKd3hZNJJ4gARAXiu2tbhGZ",
  "key3": "58iG6bzZ4yqmH7nj5nRm4R3koyH6UHqWdRBzMAgb7yda8CePb4b8GQgSjfFMFBhzNt8Xr562nW2zF5uR6UAprQ5q",
  "key4": "66AZu6LWZyPQRxvMyK4HsRBLBQ5tkvrhntg5xq91rsqFrBxuQseB7RUoQkhbq6Eutpp4q9BuKwzk9RJ3h5gwjP77",
  "key5": "2SbMHb8cRGBBfE8GkarHmms7ZDH8SviyGBKxyEZvwEicxCauN5HgGcyc6nXEWDcunrb2rtKUaYmqucpjExtoiKDX",
  "key6": "2Kbshussq6LjCa8XcmFnN4EpnLrXACXY6rWMDWbxiSHSGqastDs6QwGx5vur2eEUp64c4hPfJSBrxbf8y78K3vai",
  "key7": "Fk91r2ufu9UUtVCPzN5DDNy1ebNBLqer6T3L9t7hEkGfJLma7vuq8CUDyX5xKDJtVMw9fr2XAbcreYnYG9H9enQ",
  "key8": "BDu4Nnqw3MiUKxpsoCtZY9QaDUjUdBi9ZChcfi9BJGJGoBwC39XPDL5pqzcQfAK6eX2Dj2dUemj89NXRYWtKxLi",
  "key9": "dx9jbDHiwqMCKibo2mjYbqYGWdqm8wocTLwSe7vqvCkvFRoFVddYCxbfe8d6dra1KqNxyGkN32kLx3dxE3YB4rT",
  "key10": "25XcHCphpvZAFWAJxjSCVpEWnMdi3VGYYQEwU4AVQ7tS5vSu5vtbW8Ya6aKqCWMTAoBm9WaE2jBitQNAHyzaZbqA",
  "key11": "32WJhXv5aNMwfbJ9D1wGKJppcmQrNgojrh1BmW3cS6FJM2UhqLrJEpPgwVckE4dUmGRmZJCkpT4z8HduKj1gKMVG",
  "key12": "ZoM2LsGV7R4MqJ7ZZjJceZANizVExGP4Xjm16ezHV8XceHbDoSP2Mptgoc1FR7D7tGFtBet28GTwAhocjczM3K1",
  "key13": "3XgHrR54BgLhJUAc1a1D7Z2cyeMg8afkK8BY3wRdKtGBozYNGsCTkdDu6eKjoqmNFsRU6oWL8e88Jc8C6hCxKYXD",
  "key14": "2prbfZoX5EAji67Mei3Gz7dVgoGuQxYJdYc7uN7VA8QNEaMNiPWdC2aeMHBBRQFj7iehGG4ozx5BYaoXwpD9p3HW",
  "key15": "xP2h7Qv6AWFNvBxj5trbkbWardgHBwd1xYrSBsnHdSxPy3ZqnECJt53r5uVADE6YdRa2LTA7TKoqPHkCQQCCJ5F",
  "key16": "2BG4TRDhFwQim1jgWGSZ23Xe3LKMqRQLzYidnjJHQLhEw37WZuxxhEWeXBt5BGEKYqUiK6XW9fLVityWkibiFGLV",
  "key17": "Bw8NNvnVwZfgZmW1xSQvM86AXXYB18fQAzTQN4mjwbkSzmTEvtjUPhQ1JuYgX7HFgzQxjjBuDZ4U1tG4bn3Z8kw",
  "key18": "4NiB9Z8JtDsWaJeVNB6BiuJqdez8ua5z64nBo5gR49ymahtMpja1q9MRSuXb3t5LifkzUvsn3UFUVP3vhHFKTqHK",
  "key19": "2Bmdgmfsg21Fj1FMQXcTGmi27AXVWibqrPqMPwkS6YAWd8Axuvf6LWD8PEcLg2UVQ7vm4ZybmSNWQ7qscPY7r9TX",
  "key20": "2oxs6e4dT6HJkJWNQXYXTpkc9MgMDSvzgvyYTMpR1YTQytFV3YXK7FxqLA6WdGN6DN1ovXMaj1sTzizhVKrjspt9",
  "key21": "2EzZJjN2B8XvSkZGs4SQ2pipwqZ8d64TzwirqE1ybdWndQg32RDcNy6VNEHdaSsGZiB5JMr9wCcqG3eTxX84EwRB",
  "key22": "pCLGTrcMY31v29rckQvHSwHU7MEBLusq4LT21XwtbX43TWKCwZgdLhVhB4L5vkJoCC78fdWicp5iiaLq2p5Lxja",
  "key23": "6343oQXKwSdvuJRZaH4VF5gAd4kLBX6j1ZB8mxiXBYUZvYZJN7JvTZytWwqaEqekz4ufHM2eS3qYyrCFiqZqxi5v",
  "key24": "58uc4GrMGpr2w9waij8o9EaJ4b2QTVJSUdxK7JviTcXvKdtXjyGbZ8VFDiJyn9JAn6rGN1qz1rHXSnnKXJTcgQcN",
  "key25": "SUM32uGqNpEdaZ6mD4wxSWLFgQ21jukFgUQb9VXRvcTfDAYPpsYYaHcwKRDRSKoNb9JUAKbgJvFgUg733q9juWt",
  "key26": "2KUnngdgA9cHbhCgXzwBFKZPynXGhnfiQM72MrDnbag6322XCQfJNQdUMjXFcyEWc6WKZkPE83cwvyqpTtW8vCjB",
  "key27": "65JgWXCYACoq98UhfvNfrr2MtfKzpHdJq6rqsGdDScDsrmfuXr9ZxAzwFTgHChppeywrJz2LioBvJGeHHdNxpee3",
  "key28": "65jxYM2RwverRF5FFcMs7G3x7Wz4atCo1y1PVemawB4rEF1vkaraomNRtzVudH5bVxFEryB1qvBqEq8YZzkpQ2UQ",
  "key29": "66mYFAuNNEbR373FD8iuezUCsk5Nu26SD9cA6P3YJ9arzFjU9VCrceKZwQG2jSj1cNvfmxmETstRaU8bqBLaA5jf",
  "key30": "Hqo22bd5RWAZczf9g1sKszQism6kJsfG1RYN5gsKCVBZ76x7eFcdi54BHV9Jg185qoe1qXfQzdGHCZGfdpMupYK",
  "key31": "5AKaHrqmasQrunqpzHUpW8Ar9dGh7Xxh2nnUg9kBECk4Y5KbwayNruxtWkVyufShnC8HiyAoixVVjniuvxk22gRG",
  "key32": "4PodEr9WdLqguXxAxtoD4TZkeYCLmxSXGkxk21gWDNdjPth2GRfHWT46phD3nZLXvDNdjEW6e8BPcXKmKdnzBCVA",
  "key33": "2hE9ScZ8tUrC5KerhcRGCNjcyNCmDLXwFLxWNMuqhcRdRuZLoFU3B9awrRUEseUH7w5wvTeMAP5xwj6cRjGYCuSJ",
  "key34": "sSCxUGdqpxgjMoWTV5iENR4adRrt24YCNWgW2Umsb1eoXezmWxC3EARQCg7gpv3VmxY8rQ1PkJA2NH1AtfggE5A",
  "key35": "5azP7TvrcRgcnyiXAHD7HgaRx8VMRSwmHRvErWFgkki9ZChA3eu4VVF5v2gyG7VDFQxyL3KxSCTvRvnXaz9v5ZLd",
  "key36": "pvktiakZVHCfnK8Lc9A2BHT534qmjgM9pjEECe3UJVLpwJi2nR2GanqjEj3mQSh3voZE2jM3hvjvHp1K1AVcNiS",
  "key37": "P7cWNfYGwjPBxaLq3q6o2VmrKVBJPy28aZxUttmsEx8VK2qRrossub4y49WT9Kh9rQLiqzuhY4dQLbrnsRPaRo8",
  "key38": "4gfFYmrkYYNpxfcbCpANoPvMvPCDnk1W93q6mqYuJkSnfrEs9yBcpD3SiM54vB7BTnS8tHHAJA1fxSqqVLoDC7kP",
  "key39": "2eax5NbkDpcKtwYZf1QdZa1WJxheAK6vA4yr5c9xQ3mKSJsm7ZKeHPxDwYozVWNxaYutaoqjn1diA3smdvKu76EJ",
  "key40": "3Ersuv1PL1RMbm7aBxpzi9DZLs6yLJL7vze8UAF1G1sBGAeoM5zwjTvT5wh5Mu3v7QC6cKmk7RYAzrTAAaXkRokB",
  "key41": "4bHoExDuegDRnCZqeXRaF2wzJDi9XVQfgLkJ7GFY1knoaQ48vSjcVL6HGFfwHe29MP18aqBZe7D395n9MvGJfggH",
  "key42": "44Rxx8tdmCuTzJxmwqTSmTcZ6xbdajrCux7gQYA6yubPSK67JFSd1QvfhYrBQgwQz8BArm44uoKwixRrdHtW9Yym",
  "key43": "43ssNC3fRcbJc69WMFTETf1jTtFxZmNq5hx1xLRmay1q9xZzpwcMjverb5X8W1g9XKpuRVhFrzYRvYAbPw9VBqT3",
  "key44": "3GYr9GnvosXFehPBcWQw2ZJrVoVko5VmvZRM4MZqjEVirJuSFqMVKGH196Xe7iq41NjqV4fLpuEKpiBMD32Ur2gu",
  "key45": "39SVh5ScfYfdzu3DiUqhkezTCuoJR84eJzM2FYYJauauU9BNxGeCJ6br1uezhv83kNHuP8Fv5sLE78m9nYUs6JGw",
  "key46": "2HxpucKPa9ZekBx7ocR5uSTPtigC19LmDkEACvwAeRM3f536h2NnNu9qELH3gtoMvsPCttCv58rc7ugpRdNUqpep",
  "key47": "ikZLSW2X9b7ChXZbXg4y5vbmeXoXdXeNhDXAkRZoiWLWr3mKxUcTYEEe32b8pBskiX5Ms8sjeLFtqoiRYzXbBa5"
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
