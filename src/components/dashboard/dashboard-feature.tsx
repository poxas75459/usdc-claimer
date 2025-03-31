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
    "5razMFVUFpbPVcy5VdFS46MDf3hAdrWcbLGC3yJHGCf11QosF8V8ZignZX4HRgFbtpPJ1JffYNjoP3G4KBZ6h885"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M5yWuD5aTse8PvQcrxNe3q71ujWXD2Ex3zNEzUWLMPUBgxPhanXXjmhV53spEeHeqScw5EgbJU5hq3fg7W5279T",
  "key1": "5ZEBrzcVQmhaM4NrwmS9o57phDaTnTKaotdvuT7kE2Gt3P3daRWjwjFXx3j8kU1erp1Tkbkvz45jBFbrQPRn2JF2",
  "key2": "55yf69hFQ9tYMnu7bo1ru8cU6cp9po2TpBgZQJmUL6fjrZJ3EdxVdFkUSn5uGmtwFQEqoeDEbbE1BvbJsJhrhQHo",
  "key3": "5vmuEHEMDngsreaek7RShJRrjB1xnwZnTKq2GM6R7roVKY7iQY4Ztu25Rs87ghm3kjsFnG2GB38LQbKrGkWV1dML",
  "key4": "5vZ7fsxoFTpKHwxZMfjij3pVLdAP3xR397tEqxs1P8fj2tGt4ktQrv73pPdx7zu81Uy1rCsnmockHVH95i51CdjX",
  "key5": "3NAb7P94hAjDgRANA52o9ZnQFcpmpjzfgS96LBiTNMLZ5AerX3g6DFybNtxthVwTLfBa5gkR8u9UaupVcpjiXB2e",
  "key6": "4V7TjHTSvQLnBdt8b1EhTQAdyeo76dfhUqgyUVHeTGHu9m5kwhTu1rEvi8wRATvdZLcRV3HuPcPe9XMHZDLgahWB",
  "key7": "2NCaqse5Rw9C3DEZ3ef32Y2vkurtHMHfPNWaVhNR2xuJyrfAoNDbRbkBQxfGXNm9gusAexxnX4RMxRxBpEoaPRkv",
  "key8": "5R3MyQzCn5xViDNBaiJiFipBPS1XuS1a6gvzvG1xoAVeSjXjCLBkFbexfEVNhGi3EZ8qgWMBXfMG3U4an47gwtCV",
  "key9": "x93TvwwCJppxMKQ6VeFPWUCBdtzdFoPR2g5QNyueQYXGhaFcaGDuavQvAnapk4WZYUkbUydfzbHYKBNViXycPnE",
  "key10": "3WCu2VBqorhh53Tz4sJTAqX5s7y6g2HYAYsXTG1yEXBkpv8AZZWmETmrBbdQkLJdNWz2f1hDnSMdnfDMibRyJP6P",
  "key11": "2JqPE6Nad553yWRouMdX5erPzPMgDjh6jZQ9rNzzACX8DPk2sSz8bZmbzANrwQK8gSVgrT6vW7r5Zc9Jj78kq7Zy",
  "key12": "4XrR5dSgtXepS4W8t24rzgNoCCUQnQdKmSyB5UdP2ns83Z2yzVybwh9c1zM386TeMoGESNF69TmKeVPxJ3SdqrhW",
  "key13": "2Smvyj9mnX9KHNEeWKkB5Rd2twWaPhbhCit9sfS1WbZ7mpAgrohuva2BcR4kvZ7yUY1AHC4JerY7LtAdKZDvmxS2",
  "key14": "3H5p16g55m3okR1rzjnfg3mTe9CrrufWGHX3TeGxc5WQ3r5kLYMY5QREyp9iDmNDwcx8ufXbp8i2J3fHrrWeQQHA",
  "key15": "4Ntj9hHxyoWhQqC7zBBi4Rjr599zR9rPVtN7hCkywBhLKDdbJkGBxcmwJhXMVdDRbUxKjnzCGnkYBVtv71saPXPA",
  "key16": "122rCVPNAoYPnJcGVf5mjgTftS99WQH7Eb53ZGW5bRERvheFzE1s3QFZhftZFY7VQpaVEQFk3c1tLxvDiFQHYKLZ",
  "key17": "Hpep9ZurPCDbQQgZ5DbohJymVrF7wQ8ASuphXygmrqvfz98kPtojy1h81s8EUNRhSUF27CLNozCzh6nSp45w28Q",
  "key18": "rr4iadyqFu2o8p84iW9JsDvDBFLJTu5w9rz1Vuj7QMvEARxvBB1tZnatgavuGH1Y5gGWpcHDmPDGZX7cLTQM7Tg",
  "key19": "2a1Lu7fTQWJCXMAeCm8GhdXD2TGWRbk2AbQEABmry7yWzj2pws53mQopU32TBnatNhPhgBC3TcXYEJJx1suFCXCJ",
  "key20": "4HcsHNTZcENFhpmLMfzBAU6UNtLBWwTWKABQP6SAq6d5Y659fzZeukcMpk8UHaaNtYj2eLbSPo2AikYifTtYoK4M",
  "key21": "5ML6gymE93dChhYabY2pPqko2uTaFuLsj1Ntz7ocoYrei17phohMbvfhgubMZfm5D6FFYt119VCg6sqGqWouaNZg",
  "key22": "UdkG7TYFVTp5DG86CnXyMujtMyG5KhRzVakdf7rWNkWY9Fizhw1uZEbNz6Kfk2ta9GuX5SiAWVqGhgQ6oSwtchs",
  "key23": "5TTXH2G3kCXNFd6Kh4fawjLC63K4YZFyB8Pgrmr6Ky1GrpeZS1Q4vAfzSVgmqch3w76zgkUVb7kUHtq7YYFNi9Vz",
  "key24": "hGJkpd3LX9iYAELsBnCBZZnWDSrp1smWcXteBp4UL3j8yKBqrSPDsRS1cRWaaW59Ut3hqsArU9X5acz1zqNjxUc",
  "key25": "4uyjkUua2KQWRnpqbGENtkH3CeRA52onBy339w8sCvKpZxXsSZTiL2aj76v8RM81sgJSQUdRwY7jn81pPC24hN1E",
  "key26": "doMpV3qD3r4HLqjMxXPtnUtTQ2SacttBE8ifB1N3TBP58sKUaLhvmWYNpo5P8T9Y8DMbx3zb2pnEJJcu2k35cgJ",
  "key27": "5jKkMJEtBfp9WMLde1MXEkbGVBBJPjWkxUULrU2TsoETaKX8C2nqV2nLh489d9fjDjZsQr6vwuFcvCWqJoXpBSPs",
  "key28": "4vt57L5W1bAEHzUnebWM3VE55duhvdjhkk2gUsNA1e7ciVNK6yhmPJhGw97YN4S8Dkt2BFG58sqcUdC5reV33B8F",
  "key29": "5Q8YvcVrNJs5iLn2NdroQjkFmESSLgRwwnEcN1i7aZGQJCchZmiVwW27rTNinLq4dBedGXDVADmwixUsjLis6gY",
  "key30": "4erHXNF8JmXxjPEi434QZsbiBmGG8btLoDvwf1UvRQBV2Xvx5ZBpd8ZeUhgjqw9BpxeVYL9Wewm4sYNU77RC6sEd",
  "key31": "2UQTkUw5NDU8ffP7qvQt11PX8snUjpVSreJgfHHBd7j4UKmZoaUqeY6MA7hppKbh9tFqruQuTwtTE87c76p9sdkS",
  "key32": "2fU9jm6RAQazDAzqoeSRpmsMzCogAunFsgQmpMSgP9Dckq5eAqxJQDaRm74dYc2qstF3vxXkgbYrm6wyM2jhgShM",
  "key33": "4tp3bH2wTrfs1gsu1YNMG4TK4zYDbw73PqNtGRp12FFxxPMvEMYHCnUGGY7XHm2J6D32ATTDkdCf59QNCe8q3bfQ",
  "key34": "56u54nK6ggZ8kxc2AtMCDK56yM2yC7sp3zetpr1rAdsJV1tzcjBxUbQCBpSa4pLsVS7CxTPZAq5CjzashPKusRp3",
  "key35": "4CdMBVuewibtSQWbFDqPjgJwXWa9wACmNo29AHUjSjz4C9USsKzgZK6n2cz3jJKZrUXFcRSN9zRAbREwwSnarXbX",
  "key36": "4JMvJ5pECNyMBXTEow1wxLXSNcQDXxU8PfrPa2V8DKjALbTaZxV2A2JpjPCkfs2gvrfzzCFYHgViFdQpWGeo2d85"
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
