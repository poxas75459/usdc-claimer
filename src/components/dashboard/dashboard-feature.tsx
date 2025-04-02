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
    "5ZV72U6Lr8gyY1e7q9M4SkptPLMs4t86eRaxBr2x1HEMEjAZfmzkRK8D4akXejwtQFgguPQswsdkMekVRs3asAXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zR5LrJ1uyWjN8BggC6Lwwt1oTMk1q2wYRkdqc2wa7aq3htTUPFtdau3LphGGVkKy9cPnwr42YzWWGewAJ1Z3FeZ",
  "key1": "TVmqLG2Xvytn3suGb2fS19oSvLRaQPG9hJWEiwUHdctCSejN6j2cBEoUvjaTeZUTisPg5WjgM1vcoMAtzUhs9gk",
  "key2": "9vDLStAk8UhBvxoEY2qLgefkZyA4jmv9P4qgT5XHanb6HQptxrYTmq1jF6v7pvJuGSkxoYr83pgAeNSwHQPdM6P",
  "key3": "36D4UcLviXiy5zXvsEPBMZxEz5J4J64XM8sq6YPpKqFqxtvTeSrMNsEwtSwwd8kh6swbT6b9xUT88eRUstR5YvYo",
  "key4": "5sppFPZ9ERJnvXeDQ4ycq3r3NXDPSjY8depykRTjq7mrMAajB61q5kac4EKJuWagVH79ipSfae5u8R8CAq2xejv9",
  "key5": "2mgaCXho34npdeaJ2BoQhEAogghp8ss7dFMWLaqrDJw8SbTX6TZkBfnAyQBCK3S1sv8PZaBKEnQXwUFxuGHmUS5K",
  "key6": "2VXGJ1rkjY5Xp2CWgyeGTu3PpBuNNYamy6pB7chhrtKHGnMoPNDPP327otMT7BwV58FTBxWdbxwLGRmyWkanH8Lx",
  "key7": "2HPDsbYhcJgo2crGMBNoig4PddBKHnKgQkZqgapR52sbpeEWiyAvisK6jGGZLxM7iM5B89WoqrPogQW1admX43fn",
  "key8": "3JcyuNcUazP9raChbRVeSsBh9JCYQeSc72Zu4AK8WpTjNJ5iw9fdT7vvURijm1sbovkNpN6k7tkB7B4FVmeAxHbF",
  "key9": "3rDLUY9x43DQ8xEqLSbZh9hTybbrpjeUtVXjwVdzqmMEzsGdbaAfAHkRcQD7MQh8LyXA8wCm8qkfG3kw9rrkcJgA",
  "key10": "4wH57GhrsGRLScTZvwiN3hinMSfpcbq2Ndb52r2HYhGfS2UxqGNTkL4fQi9PHgS319GJPkZ55Afj7YWCx4Z8kG1n",
  "key11": "RCq89NMvxi74b7kqyQS83u1SitktR63GaV2EK8V5YjvXqJBq46qjxUdF7kJrrwLhfA8KzDvBdUyEdmjSZpqktni",
  "key12": "kTZiX7Cr1b6ABfq7ZjoBFHYTVXiVELeQ8sWs99kkZZoGwtmqTr9hF82KKwc7vfSRz1BfpyUxgAHiRKT1NNpgEZv",
  "key13": "4uvcNSPKSYr2SR8miNSFTCoP3RkgLe6hcnpA8H1YBuGeHk9KEmikGMQC121LoyG2zWrf1tTSfqBa9eqnmoDbhv6K",
  "key14": "3tZwptAzCSYo53GejAUdUwudXGMWrNPmokekjQrYnJq5sTg8rFrXczcWMsqesaJAGZdUfz6mtERP66obdJrzjWqg",
  "key15": "5hH41BwGJfFQw9jNkcasEgWiR39ZsNUXVpgSNFrmw9n1ix2sLB9a4NbWnut12xPS3tUE6jJtfce68yEyfurcgUm3",
  "key16": "5St75GYX4Fewq1VSCyNRFCLVunHTpM9sYA4LBUX9eVh7KY3rYwrGqtv5oeptgBR17o2PBrmYVquGZnsGf91TiCwq",
  "key17": "5vuEDuMyFFCzbcq8ZFdi4xPVD7t95QXuBmsvM78bjwphbEM2HhGGvJaB5hToCuk5GnBzyndx6VBHoZFZnnmX4XFC",
  "key18": "5m6BE7arWdWPpGUhGtXQYiNcKhUBrcmZKsJdJGM765ZoXNGtQqWVd4BcNk8yMVYvtNJuh5356ZrQ7AX3UJSfwSGy",
  "key19": "2ZQykWAusiYQcjN3E8aM9Kyu9ckdmFiPJJStKyyyWYwo1byckss5adRB6pFZwpjyWe8MT6rZyrHjQtWpLcCdM4Ms",
  "key20": "aoSJugnTb8msgAQEFDC6pAvkJHQMPve8qcxsihWqvnYC68vUAUxB7hRC8H2sha5kjRUQNaJHz2WnBRGjVbg5VTx",
  "key21": "65M4NpD9iCadK8V6YTfrfDcdMnq8dwCiwH1Dw44Y9RsqFaDo9vYgGUJ72HTBPKsQPHKJavNWhDW4NPUZJPqwMYQc",
  "key22": "2k5zCrPnxVcQzLXj5C9waJvDcR2geBV4KNrs5WeiNkLtRs4yd4cvAsvuXWvM5pfbeanosAMKToHSGgSQD52oGvsT",
  "key23": "55rsit15sSAQPSufEXxa1GsJChyophGLWDr3R35KzEE3kTapUXpDWAVYTRXbCfQCos4LV49WmynVsbuJDLp561xL",
  "key24": "3vgW1YMzav8NKA4zT5gHmdaWdeYktVycBvxknDG8n74kSRf2qXVvUWhMwxHwWezEfjop16oFM98rCdrHc9U4nEiA",
  "key25": "5ETDQTSYXTTabRqiHFBQNhJBCXCX94rkV74kPJrU6NigpyKhNYb8QxCkLfLK9ZzFonmrdHBs9exwG8YkXrDerAow",
  "key26": "4JHHcHySDEh2mLSntgk1VarpjAtX3B7KHn4XVyqV3hXD6C1mT4TLqsb5XwtfCJVUJkYqFYeXMh2oudcU8Q2fpqEN",
  "key27": "3ghtGsibUjJ1BHXhMfiovfFaQNcCaLZE8RcjoXeApiajqqL9LCw3ku4mK3Rv2UCDCTJWK14VHVYgaXfKhNG6YN18",
  "key28": "2LQW5Xuf7FvCwz2XvbipkNPoZi93iXYZz7jad8xZu1zo6MHd9c6m76RzDw8R5oGEhUeMN5YASUeym7jR34DBXu8e",
  "key29": "2LDjDyU8fMdXM7tARzUJK6PDVPtM5bUNbcoGrRfFg7dZVj84hcXoMDYXvdEeNcDawqQGE74ztbU5vVoieSsTrzhS",
  "key30": "2tWjsXibgvL7TYLCAB5DCZf9oswMbSDRt8mVQ5H72fGsDcB18yYf6AABYxeEgKq47LbURQCfhJiLv4rfaUx7npwg",
  "key31": "hYx6g4DcqtwfNZPv68c3SHjHbNBXZCoESJwkra11YCNK2ZKxYJfvveTgdZqvsSkMtCGRXnaQYeq1ejCH8GugsaZ",
  "key32": "4xGQychPhzVkGaSHWJYewvSep31k3oNMeUDTQNzTt9CwoXxv5PhFvmzBUYpcDdEbVMyn23iWxmeWP2AbHWz7eAhh",
  "key33": "uuF1VqQqfNjpu9VBuxCdCNCzhg7gFtgVxWxnqdqn8fQyrF8pJ4HTJtrwifqq1KynrnD4qBAEajN9PtVTSLHe13k",
  "key34": "yPTXbTYYU87foRaUCtygQc6s7a2xZvzks6KpTMkaS6SmVHDxXvhFm2hVxJTUS7MxKHG3Zw74biNgWhcTXMWB942",
  "key35": "3yBMy2t1SHJWFTix4cSoZabKF1Pbbgj3UWYg1EiPoqcAGzWFXWGQp7GEFAgq7pGcATkT4JgGWgU1WYWM5v2o2K92",
  "key36": "5a2iDCYbu6UrpWBYNRQQPgXShW8XwxhpWq2x88uBsSH3PuJHXGXZf4PVR2VLbjNHenRjcqvr2UFKRbt1Bj839YkE",
  "key37": "4XoVuR5Qni2mmT8GFgxU9BvbzNXVKUz6PnDA5wixhJ9PSADNK6mscpF5TcKrL3nv2pFurtVXTNyEFRXgx6x2DjBn",
  "key38": "PCurBeHKARzAqkdVvjUyZ31Uw9E2xs8MdpA1VRBpaEBzruVHD5jzQTJfrqBi3dmt1Z1xNqzUTC6AcYZtb1m1qyc",
  "key39": "4RVkbT4pDRNAqho443mwy8n37U1atGBcowjKHzPyyguNULZikGRRXqQ6WK4F1h3SUedxj7DyaSXUzDtgBpWwEN7",
  "key40": "mTiRuogafWMJUrCxPY5u1SJw937yyhyoBCU1bSUSfTWHdr7ptWudFzSQL3bDzE1SmpVX9KrNgPCqUT9gAUxyESL",
  "key41": "4vPBN3Xqq7w4ieXYdQKnmxWwzTzKGgaigPQzLgNMGpFLm6oKeEY4iRDxSW7yScGUQyYP67AB4rzEbZLuENToopFR",
  "key42": "2FoPt9TnKEMNTritVDG6M36S3Yyk5cXAsjiP3FZ5eXvqqr9D1utvH6PZLacfeAnVkNmqN9keaBWrc4cRnU8HGQoT",
  "key43": "mt1YJzjWvC3G4dNj9fKvQ3EGn8eA8ES7DaxswY2wM5d4kaNkPT7qw46Yjqjewg4EPgSXcnBEQ7ZiC9GbwgwGazC",
  "key44": "4rLiYgWdSHZRNdSZjsbjbmTgaNhZxxrPzHgNQCRVK2BYZSzdzn6x1rUxTYeR4vWX7cX9irrvaiVjzcDGeTyfsx6X",
  "key45": "3ysCnUn59LJwLcrcqb8EyiuptiXrivgHs5YAQyoFJBTiiANdP4YUrgbjiVZWAUHhr7CNBM2FLRGtVTFi9CbvCtkM",
  "key46": "3XPD8PcyEMUFrFZNWvhXUvbuJ9EZ1bAUNUAuxcWt2MNPGzGGu3sr9AGuVE9Y48RB5WQoRrrhx3EcY5kTwHJYzDce"
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
