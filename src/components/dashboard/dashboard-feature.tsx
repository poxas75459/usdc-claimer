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
    "3ojyXeBNWJK4uNpgyJmfFRLThw4exNV25Un6skLQXLuKJxkwWjorzcxyMBezjDcCLvfN5gmujao4txdaTPZSGouk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LpyeMyNE3uVUrTSYrHrZX7vdnXA2jJ6nCqhyPdKsPMPPCUUAYTxLB23ZGVDpePXyQkA1ahUGK4Ce3kmQUpVkKF3",
  "key1": "2EbDnVQ2yTGE57wZQhsTR3VFH1RbhUrTSDbTvT3tUftNdK1D9iQxpdYNHLBVqZ5ZyGUhim9Qx4Tq3xCoebQ7eDod",
  "key2": "51XWsHEH4yQtZBx8r19RyjMTVzZnbwJbVTwMvLKoBTyQGgKgV6pDW1d9MVLRPao63wx4ZKrTSGSnkiY4cnQM4n7F",
  "key3": "5UXGLxHndWRSyE28yiXTkAFZzH4ffqxGhG4W49nFXbnHHj96ZeHjZ7xVnzht7V51AL17pX4UuodU8UB8u8dckMg9",
  "key4": "369PXPLHW79XhUgr1puwZV2LphvwcQCo2EsnH4Zy3cGSyFgBapd111YNV2Wb5hJFXUgwkfVwYMiJ1uA1eGEZKNYs",
  "key5": "3btNidHtU98QEyfXhvUsWEsDP4dFcGxv8EeqrBrftLQupRF2R8bgp5kQuYr3JJgy76G3UJRhk9vSwC7wrh3VxdpW",
  "key6": "gRTz8P7t6ZcQTMQQAorY3QGNoXwwzyQUePFQ1WYDKipF29zAAp4itZeKqrAQqU6hMdkT7535uAFhpTvz4fvZaj5",
  "key7": "37jWuUdgtVia3cwmDZ2zyH7nh2LBLfZPSCK4LBNxJYBewosJfXVvHBj8n1r1c3f2iRjoXjyakXGQZsHZch17fFFb",
  "key8": "WcxEC5RsNehiVBDV4mQf6xQoRpoDzcWnLnSJvRy3EE2Rq3zn55bxqtDnZbCSLPRCXGSaKW4F5qUomGVUADPL9kG",
  "key9": "2hhsswQs8JDxVFoHtJ7cUcqurEWc8unETYmSJwMp5BdbcvWkMPok6PZWEDWwqrVFLMpbCp8yCE4tcTUm9X47b8Rs",
  "key10": "3u3SaoYUjiXj7QmH35bioUdfUucgWdZ498XApHoGGhw9DTzUe7ELWderr1YrvqjuZMWMnLhph9to31nUVwLXwPJH",
  "key11": "WiyFGkX8usreS7HDjyvmrVYpWWPiZp6zt98QTMyHNHudPMDCA7sM5JQMiiHSrR3PVEq5T6wvFop5m3KkdvDWmfN",
  "key12": "5roWLe1zNpFsQ9y8DMyL4hLRDcvixw7HjWTr5YZLXGahy26X1AQY1EgXLnq7A5YAFnP6ed8oD3SmvSC1GnswqGQ1",
  "key13": "5VU62hvsSoBzKuk614JpaamJFeDj5nRnTbBeyDgXBLSvxyMiSgBAaZEuRx8gdXGg3H3vkeXsYVFiZDtxLZVGYVzJ",
  "key14": "2fy6LEkYTQ2HDTheGESavndCs3P13KeRrL6Pou6rUwEEc2CFkoG24Am6CRACMXRhg7XRL9WJgx34WYc8AD2MzcrG",
  "key15": "3w1Qz1uN5MNu6gbtwxg5SFmSFohL8zxUk8JKgLBwRL3esWR9LR2CSEpLUHe3wp1v6Z8VkVg9aSs2LfxhyK7ypscr",
  "key16": "32JKz86GFv35tAqFMXKFF6MSSYmnMLbUSGBWesM2DiwiP36sLh8cssAGfpg5LkYhh6BA981bhxA6u6FTJsheg7Wy",
  "key17": "41ZTwp7CW61eG7g9vNpFNQqfdQaazppJ6TCRei6qrSqWin1zBggv6cpi5KingR53Ztz57HqJLPXznkxEbktsgjdx",
  "key18": "5jUm5bMVeRsac18qXP8H97NxiUJj7G8AZMvvaaYieof3y7KkKERqtJs3mp4Xv4ULzyeegxQPEMKtceEHSNSDQU9z",
  "key19": "2RGQ11WK6AZSkPPJjGn5DpSSVTrbwEhZjDpXi1c6h5auEuLzgZaFhDtdeTsQELYWGoUsjVDgcvEQyKtfihQXHct5",
  "key20": "RimyDxbQAC6mBFUjjeGoJmjEdEXasfxEFf2oXUx1B2Wcw7BiFg7RxrQEeWJiqCVjouNFpzg3CtM35sTxhgxc6Tn",
  "key21": "4pB3YSfbdg4TMWMVGQhQsz5bdgReAm3eMjBtpQE2wFtZ1VCDEzWEwYfRZAJNo8DRMMRrLQfmArdvq1B4AQ3CnLTu",
  "key22": "4S4q5XvCNHbj4Gi8onQ34XdouJvxUh4H5ZxCCsXgpFXvgExPWGxLRf1NsWsCK84WgY9BpB8t2SGR1TSrTSnhXad4",
  "key23": "2kYG1CteiHX1SsAiXjz4P1hMvHuuqVvgA4Lj6NTUd8MrAYFg8gcQXZacHejMUnxan3z1Wq72mGsbaUG9TvuoREYw",
  "key24": "3RTSo1mAvNqh4hhYzcHRhRjM5msnMk58yBzKwpuaBrwRdmkxo4ZMNpUSCXyZGXPayeok93vSagqfj7zDirfcGvZa",
  "key25": "3uJNRMghxoaAfVKn6rCta7B9uvq5D3i9ZMyyyNtqwPxtEvLNrjQwXbWVBv48AgxW8rsf4vkZz9YDsaGLJVmfUPCi"
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
