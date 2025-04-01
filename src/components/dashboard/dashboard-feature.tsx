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
    "37Psnc7GRSS6TQ5YkH6Rfrxx9GhLn8Y6GJsACZDEaS2S2f53NviTwdqe6w2iQYRtxTjkqS1VmEtJhSm7pjBY63ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcyhEnz4BksqeQydYRUM4xUpqJQSM998TonPPzah9GGTxjM2cju6Df3tSG4GnQpdBddcs9fCzwzSht5V6dnN2os",
  "key1": "28Srh23Rdcn99CebKN9e3yhUTXtqb8skMcCmemNWNgeH4x2tpLTEUnsY5JQNzrWxZ2hKJyzApptoMWUphvCxU7RP",
  "key2": "38SxSdS7TzDJ9TajhAutVujcZAw83U8s4U8YaDJFEhzWNAnq47Wo929Fr2pEZ7tfrDw9qoc1yL51zcM3NLwP9d7r",
  "key3": "22Q5gVz9QnzZWubw77DEJVEENyycdrPz4ea5MgnfobJRZz82U7xaSdBXDmMMfAZvkibTy63xSPC3oqy5xRFtMyKG",
  "key4": "2pnsCTaHGCjLfw1xSWn5VMAGujFJYdm2pwdydmJpi2Rm4dvSGEJ2fEGhCQLPV5E8dgoH8NKmj6PD6XuA3AeEYgjh",
  "key5": "4nhM1bY9PySsnPshy4jj2TjfAuCk4rFT8gVwRdXErTaY4KaXauoUuS7z66cgPS1yFMqsBEjEgspiFkS8PSDxynVL",
  "key6": "2rJ6Z7afdAmBgt5bRgjVJxFL6QyjoztWmxFTufb52DdCJKqKiAWXWigQrhovniApJ78x97VJ6QwuuFhYdK82JrZc",
  "key7": "2uzC5DzBDWHDZEadrExbztxXEt5rMMi7AdeH3szwFeS3cVNhWwf1j4S2AVDoDUPHJbrvMaRSe6WBTxNKBS8JTfjx",
  "key8": "5T2SgCUY8aftXSnzzwkA9PiiBVtuTkk6WvJF1QFY8ALaJXMHfiCCHtTUH4pkShNxwNTh73WEmCrV2y4iwJ32tmCe",
  "key9": "5ej2747iRinoQ67ZR3psfWAfQmz4Qxssjvf8gnyvwFZtV3wvHCXT3wF4hNavt6hoBZfdo6L2M9ZrszvfYDN3SSeT",
  "key10": "3ARq251iyviChGuK7xYz6pLvsxgdcgL8mk5noCHH7CTcChhkFwMhrPgbEXYC8rMDDyAHcHUuCK5ktMEcHZgZHhDz",
  "key11": "41n1eMnfaoj9XWq8pFxi9RyTZD9yRBYkzDPTX8Hq8A3gAsC1fqtbHyAsvx5REWa7NBgTtmmTDmAkNPSCxRM6zpmH",
  "key12": "5idStYCa2jU5N93Fdo31ie3fKQeHDPeZCKrka7FVcKHt2XkK3kv2vVY6qcYmXGPs4ofewB1eE5DCgSqjjNajqaf1",
  "key13": "4wZXLMZkUumohawAmrDjoQaTAvY93za1LsQCUifgaLNUN7ibxj2aYN1ZfPTcDD9MTmfRzaLo4gEkvWvsXYQZ675X",
  "key14": "4RC8hqxCbsidpX1NhZKPow4opPtQagkG93VWJp9pyNdaeXzdi88cK1Pa8AHJ7gFksNvzfaEZZJNhGJfHZtyq9XAF",
  "key15": "4ZG2SjoGYHoCZmJPA98AC4JxidAfsxwcFr63M3VeNSdubK9Dg6FDPW4ALnp6By7W3Lhqsncvht6mhdTkasspWvxU",
  "key16": "2kKQYKwUKD6WKiGz5hvjqtknAHdv5wNp6U8PTBHD9ZidmnwFHnGXQEB13oAHHCZ3cjzRpguBCSUfPSjNobVG9dm8",
  "key17": "37pxnypVQgmEiqsJ7w2889RM8DcVBYU75ZbSaVs7dtoyBknbtHL2cQnB9ji6BcLyTmYk8aeyva63tsh7qQ1PTmRX",
  "key18": "5LP7UpKdBJhj82bekfPvz8k9v8VMP9u6zwW5FvAgayj2cQhfs7wm9VzXjMMf8TCmrt1KeoFtwjynAN22d2Yz98oC",
  "key19": "36ZCTT1jrhoU4pwKykukZkcJNzD4J7GeDfxmHg76qYdhFacHhx1LmFNL21GSaJjJ4WuZ61S1AXADMXue4eT4y4Qc",
  "key20": "59j7Cc4b1dzf5V9S1EtFHTEyXXyZXDPamCwiNqXTn6EPfVkN8jNMevDmYLAhqki3ujALbFvr21wS6PmXfni8pVhU",
  "key21": "8fuLZ3M9g1ZPru5oLXQ5J22Jpb97aG1AgNuuZuoS7vZzawTCWixY7dt4ppaYZahodsVGgbrk6u4KrtYCAaViemS",
  "key22": "YWXfpLvJ37FBUnP9uLDL1zFbDGvQ7sqaC3iKgiffg7ur3jv1o57Kv41Gq66Zt4ZmvXTqqHapRztBZDkwFfS6ziy",
  "key23": "3b4E2RVWjMheaWZp1H2sAnkhhrLPeFhzLcugbbeEgdZMSss6BaR35M8ntC1uh8gjdmT3R1Srm5zeXwfziNoTQXFM",
  "key24": "FoZGeMRyXqhyNznJQhafrKuARVfwkryncbBsj3SE8rpffqjC1LD84uL6hkPKcT8uTkJyn9Ty1BvFJ1Mk4aGX5Q8",
  "key25": "2QWGLNRp5ARi3SBMX84pd5qo4Akfx1V5dmHMMw8qAKMnoUfzGqeiY5u2WoBW81uzLPA1oPCq96YcdNDyPZiNjSmB",
  "key26": "VXsz3WkpRMKfRTkgsNQF8KLXVTVC2FkX9AosLg6xUz8E3rdwM39RisvFJ1uPkecTGoYLLc1NUm91z2dVuPdnbHg",
  "key27": "3H1vFf47sHsjGZooA7fP7rXGwLk6TBEREaBjz3QbsqMPwqyAoMCFbGQsjUXJ7mMYFBRFurLfYqoAkfKxkd41EaPX",
  "key28": "4aB6D74ZHS6Ra4pJbmSKW9DiDeY95ZeD8kP1HqWBGSWHzPi9JZFmYzkuQprBJZR3osSKB9yLEHygo44eHtDNkatq",
  "key29": "5g2Hx9CAdHoeXyUK6Yb2rpocvMLaaNeuYTTV5Dt5Gi7FLmdqSdR7u8B6Q6616UsA2jYL9HbrWBs8ioxVejVaWNZQ",
  "key30": "8eSC4mUtmv6bzCvk9knDUkerNMXPHPmXLpreyospjDGSDbJPyneVBcfEAt8vo84XXbY1gSbiNzFdJBhZj1EXFzG",
  "key31": "4r4SuoHfy5atQqMGXd2FRC5Jt8FH9gXHQZBmfc6Y8Frr9DmZZjBhmEVyywKREBqff92rPhS7SFuQzy2AyVxBSyuS"
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
