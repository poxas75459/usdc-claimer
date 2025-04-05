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
    "3S9M6BvETkG9uvMKCBWt9ppKb6LVLVQDddTHiPAQdyDiQvWDidUwNWipZdFQjV1JXgSFDxoh9C28aGAN1CVbrDpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r5ypKXXEPoZHxWYbsqmGc8YBvnH9GktPfQvEeTgteT5p8kNooJqDVVvBvAkYUhudQo8dvDt9eJbhB51u7i54LXC",
  "key1": "4rqU9FnEzg7gNTNBGHV7GhjUzLRcNtmBtLrUMwW6w8S5YaihXjs9bSmMbVwKvFF2BDDmMD2tmPj5WVPz98EB22QS",
  "key2": "5qv8Q5JtFCWdTzcF3Va3B2jbJxas22niKdSHyVNzsHNNpB9sCVoynQd5r1o4ZiB8WJzjone8fUKNLkvePG6up4dk",
  "key3": "2vv1kfEepNaf4RTyudybask9kxoR7Am1fYi7tUpAPGhAjhstGBw684ZP12z2rNGqniUsVmHFfL28SkaimsrLcvdv",
  "key4": "3hxwUPHbLiw6bU3hc4gY6kT93hfskfP35CYzvYQg547jafBUx4BeMRkRqhZ1kmo1npLWRBLcvC4WNetw2YbdycpX",
  "key5": "2FurNCTsdUnBaEkbapMtNCj21XnXUifuzQ1MJyJeJy8W31fKJNGnSRYavkThimbQ8tpw1pzJVLvunpfc9HSwqg4A",
  "key6": "Uvkryf9azMaH9kXsdbiMQFkY2qsvKn7ZL76bRfkTHDd8G5QHebnxvHEz1pN5kiRhNg3tqHcv4v2VtWhD4EmvsdV",
  "key7": "5mfn35ZENYoAFffzvj5yYqVmcYMUGd4UeG16cQ5LuU5kxhcDoQHfkJDWm7YrKr3V1VXZCjjLCkFew6YGGBHDNBRg",
  "key8": "2nwgvGKJoaNrPrsJLKmb7wv2Qiug9cc7XCnB6nhCrmishAHNd6vWRh15sgymob2tvTi7KGFt3CDUqh85u2TmWDrW",
  "key9": "51DAT9YytfQbK5bPMq9NWc6YgHxF9Ajvx9Kzp3Y3wyyT2AEwPdb2bihy4DnRHrTyLoWvT9eAsLj5FkGUW5M4GNTj",
  "key10": "2B23n3HLX6VpjjaCBpbjqvWnMtNgFbvmqsJRJxxTF8fpb2iprapFgLRLZBPEqbc45tWzKsAd7pWTMxQx5maCK57n",
  "key11": "2k8tPXyo5VqcFVzzSWwBhmfMAgnMhen9TDoMNXthjHiNFrXBZYqLSrPCxdxSJp17EYsY3cyHBJetutyreqjPCxr2",
  "key12": "2mDi8WEa4rDmEZxHTVMyBCY6zdoryPykJSGLeiKBm3g6dpN17d7FJ3Qaft8iKLHDtw6sKh3uoUxAWAfcZgHQgqaE",
  "key13": "5p7niZhWZtAuing293ythJmvjs4Zddr3MWLmQhXXrsExWmitMQxZ1Y5e7mfU1BTTMq2FvHJdRPjsLCZuXwbMGxTn",
  "key14": "5qA7ooBSGHfMA7548NcjeDDSg5ZDemRFPjxTRUn5rHZbmJ2KoBhg8WwNeGB4QZYBWfkbasGqqVckvgoxknJYSV5h",
  "key15": "zgvicGxQFHuedvwp9tNFEyxAVDYNUmHNyCuNsJrB7HLn1xftZFpJ2MfnG1xScXaDhkR4zVmtDw2wocJBoYBaz7H",
  "key16": "5q5DiDvBU26QDeZ4ALKk1iUo8iPM4ctuz1nK8gSaYzxp53jbu6iWaCvqwiyLNGgami7TPkU8GQodg8oZvUJcePSj",
  "key17": "36jvjdMZevo9ssJcsDV2DEyrDDvzDWAB6e3usKuteQZWY83tDVNeqnis8fzsus8iwrDUHVexeP4kuZSGWhVJixto",
  "key18": "2ARR34iunAMid4sqmoqWodGRt56GoU9mZVi1WAPW4wxyVD7h6DFYev7iBFaPShNojukqUqzdHMgUaKi7HN2DBKPm",
  "key19": "5HszASbT4jTkkmWgYZn5cNeQeKLuVb2jFarrBwiJbPwCmDE8aUBtkjwwq7kW5rhD2fK7ouvZsunLpoYdqJPBtjXM",
  "key20": "4pFXuPtR7FPz1qj7RXv3TNqfCDwRk8mRMoCTzMu5tpC8V7cj3pXuQMpUYotMPCM2tshFzeZHiHtr7tRBBpMnKT6H",
  "key21": "2STcJwwcRWrDKLMhAEpcfxX67by5cVzqBwRkAg4xd4DUP19oTkUQmJ7Z7khBH7kJKzx2Nt8hjB1Vaw1g2XZg7ysM",
  "key22": "3LFZ3PH8NhQ3zcWMakifiXHypK1GNaVXTVCc62SBgDRz8v4vboaehPVEBeff53qdVig2nfTDT22NmyNCaYTYXM1W",
  "key23": "3a9Bk26z2FBNcq4JdxavELrNX84FVuTZSfEvaDZP5z3f4j9Ki8wB1E7fw86gjcTj3oeYvuCPiMXCbFowRj8r3x9y",
  "key24": "tQouR12FnkGQ7BVttiFZoacyQgbW7c4sN4Fh4xUSa9o7UzmxUvcMUirhHasUURYaaNxNeGmg7DsRRNRxhrbWX1H",
  "key25": "5ipnweuew79tNa1wmPxDLC37UAjJ7XJ2Jh56GUnceEnseEjQhYr3xiyxsTMK4uR32rggQYhmGqMSGYDBiYAFP4do",
  "key26": "4t3NmWKenDYaUMA4PRJinQJxnCN4Xbk4G9nPQqcM5DPgMMdtA7UTF3yQXZ28d3TfEFs2VJzgomoqCkgoWAjTzS1p",
  "key27": "5HGVdUYEhG48swVz5aDF1YrtNnr3mzGT6oUfkKMiA4ibED2fGUBaNkgTGAuUNyteG1g6K7na7AKeJWATJNMGWnx3",
  "key28": "8SdFwRR9Ns1i7kXgHSsNDFBTUBb74jvX3P8vSBDjdTBcPJN6eRAtdzVA8EHjKBSSdqYCJrg6QQHTqm6NzviFJaH"
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
