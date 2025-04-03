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
    "sGcPKenbRkXgASi1pHGZ5SbVu4LRk276azMNW3fPCscVCD5nfkieocQynbyHQVfLWU2mreC1kykx1y9teQaSCXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ehXdAETWjkPYkNo5AUrubjnxcLsEHuVhVFQvFTZjFU1uSkkr2bPrXNY1BQMedH2d4LhNDqXLBsMQixsZ1KpgWVM",
  "key1": "u5gyUJzkXqjnmXeX9hLiDTCA81FLNMvNv3zHM9geuEWpW1x6Ut3mTc6jbS7hyjqyF2ufzi9ZxhdmrXFWo4UHvRy",
  "key2": "uBySh6XxgCLxuGfxtqnkQ81DYFgp2LAQ52V2y6KXomZD56Ao7zavAVW4XPaUyW4ytQY1n4MtcAmRmTZvs41jhAo",
  "key3": "Mm1R5XYiPPDsnCqUHwVP1uE4kW7KUi8hrN6QoEeXn2btjR5BTZvdDbz5Gfk5wfCkLfVFwtJeyH7XSQ4xgrDNC5c",
  "key4": "3Sczt4e9jaqvMFoLt6BQNtNU7F9nsnGMsF9aUNShoe2BHz2zkNVavQd5dVPGeNk4em2SiuZUpe2m6Rn6B83LKR33",
  "key5": "3caEHykUftRo2g7LQLd1kFrdD2UerYLLV5NFffFiBTFvRjoSGuhaFSS1Mrg39KtRwYSXhyn8u8DxkeDm92WHvE3G",
  "key6": "TNHWpbAL6qyRQ3FcicNTDt4wdbCFjN5QZuUTaiLGWydvTMmZoganhaQin5QdSbakScjWnQjEcuNifVtBTdjT2Xo",
  "key7": "nzaMM4mToyESvU3Th11cMV4AX9fTNyjef2wXAmXCH7SE6z5Wih1umQXKan4qS5trC6gSk3Sf342VvYhQqSh4xJM",
  "key8": "3URuyH4oTSfK7JQMAKnCxTxojWdfWtRKU4rEEWkyCLiVtoxmkeABc4ehKuzDKXtFu6mcdCcd21HGvbEbXsEuzqZT",
  "key9": "kc7hjiTsNQH3nJxXDPPpes1SktdcrEUqHfqHMYEVg3vd9vtv6yuTEr7eEQLVQiewFYaQxgHWzSTmJGJm2x8qVTa",
  "key10": "xVdxkYLEcEqTbiSrP68znTYajeXTenqhGme2oxdBXDSL9AddP8Mz9NuWBhHBeQMy9P6WzZfwZhF5H7rdvmW5MTb",
  "key11": "8nsTsRj1HVfkE6Kk8xZQcRFBTBdyp59RH24owNwxQXBjpHbfQHMsVBKdzoRcwb1TvyiSmMTNNBUGoirs13maHmk",
  "key12": "2tAEynaaUpenFpMXcLajhShpKpGcvhW3V4bnaW1iL5rJP9hwyqmeewsD2WwPgCZSU7ohydaEN37Uz8L1v9i5sZ3F",
  "key13": "5xcrD7QW8k6X6EPAwpyiwCeYdifx14yZemrQF1gGt1zZBY1in7Wqx53PVuCe7tT7bSWEQKYAQYWo3uBnSUrGunjx",
  "key14": "2EgwHJntbvPXmAKedguD1C64h92JpwoywDJ68pntd5FmUvorX3qZjT2fUgQtXnP7idNNvmPZcCxpMjDzD368kd2t",
  "key15": "wxEreNJSfdFNUaxxFRpY4Jjw1mwQ5nTV2GAf1aWukB2PhqkPzTqbdDnAr4HVTwc5JE7PcksLaogk96TtB7H6EoA",
  "key16": "U4yvcNTZMZfii2fj4Zre5zCMSqE4s6eAkE6Yor2Bnt4rB7x1zK3byfHZ7NzXd2CtjnBsPgDNB2DZKT2KUgcfqmn",
  "key17": "35Aj3L4WrvSmkre2ARuNsmDngVUMeFkkBVso5Nr5H7u4tecTELnL1aCnMRvuvS4WXm6EmLjZgC1y5NJLA6H6uDD6",
  "key18": "4qD5HtS2teQT6v6ri4C57rPv1Qi5uAUzH1WVETEHbwmyuwDPHUbkQYCyt1DRqSa21SwGNjqWGyp57MKPRxuEtsW6",
  "key19": "2Npc4jFWSjo5hcxLJExDfWqqjJRdKRVue6Rsw8brNdcxy8gvmQot8XriKzcwciav2ejAnFeYsXuKn2mXduh62vYm",
  "key20": "3kvUDUgWuL8N5cGccmb8EXW71ZCoqPQXe9YnY7HFZPLub57BDwqrvUsQrBXtrgYgHcQVS7BNbtLFX8C18e5j4Uiv",
  "key21": "4e7bJ29Z9EgzgU64H2MfQUFt2AqtzkrtKa1PkFZt7tP6V15y1svQkfHQfJnQ9dPx1bqeprGXVB86273eGKVkZhMC",
  "key22": "gw1h3FqWm2FzKKpMzUEr2FJ4NsxCqm1rs1SUitPcPa5RqFXY4eKYXdzDiDvmy6HHgcDSyD8KQgmD8r4GhPa3yfr",
  "key23": "2GgTLaBVf4KZhGFHUjPxiyMYr3avQJMNeLHCPAXuiBED4hvNusLbDho9uwm312pz5EikoM7WPeWjQSmkTwzRQe4U",
  "key24": "3YTvPhUgVubKyqDH84xCuTkf9Ue9J1ySLBWRU8jb7FBKcBEFwHdpDGuqMyegX64HHJEa7qY1XBhaQaZFkmkpWiPJ",
  "key25": "3hSEaKQ1vdYtR4Mt8yHSRkU2vAxnH3XD8RKCkKNE3sTgbkxdVjWMtcu8aKS7vzzyg25pPFzducWL1FXPhvWJdVGU",
  "key26": "4tnp2BVGfwCQEd56PkZcuSv6M7wTgX2kXoYoqVSLyYQEw7HYoFFjLcVQAwTMxr8CuZYhko9gRcNLktMs4u9XdQ3Q",
  "key27": "3TD87Hr78nBkS7FNUxkinsb1iVKiZ28AFWzBSEFzCTZdn6EG6VEpE3Xfsi7shhXRuYveNGWPe1VvXe5zqYnVScJj",
  "key28": "NdwQ3kMDkjNxcYeK8HwXxk51xCX5BJwJtVHzLe7dz9vAn83V5saMWB9Si9HTEcxZ8o3Kd5noujAuJXbUufUHeMc",
  "key29": "6rZCY19dXup2XiBCgF2rnNo9XDN9tPjgGESApe6gsAqTBQhzGB2QZeTtKkGXjYgzMBNfKVP8d94q9SSUdgJaU4V",
  "key30": "RQ6njxrcAWKG2USHmpVUFyapmMSX7yQiWPReh92M6KWvMpsYPN8Mm3eD5R6RUavm5pgrnNgSMxLdd8DTs1aCeGL",
  "key31": "5cB1uh1KvLGLXGMdpysrjCr4nAK2WHa3M19mUym23NW8LQ2mAsjJbRuCdGjeAeHcXs9SWqa71Xn81nNvjgdLzM8s",
  "key32": "3Zxb2huVCMVGWAXKeEKnEwWVp11nXGSC4ekyXotv32GYbp4DSqsfFF5LS1qBWu54ZLtUbyLxouGZPRvcvQFsmhzf",
  "key33": "Fccgr6ZmB2ui1ZF1D1iybxbGgzTXbbGh8bnZgY8ALA9mYWn1M7V2CRVFtbStk5sW2aHh1Ht5K2GA5wtVohL5Fde",
  "key34": "39rfYzPydZ3NHpLc21Ng1swU2XKbL66UacbzdHAPNryTP9uK5ptMBMGtDJpzvKoqu4RnyHBp9Ppuc69tCoqLn6FE",
  "key35": "bSNwrnPy1C1VAtgdW1UyYh3SgzGx3QbBmBkaeWGsiZ9DXLzfmgiLQa9it5rg2Jf3L5FZG3QHibYMkrwtgfzqVjS",
  "key36": "xn7LgxaEJjPyRey7fJgjvSth9TD9Ly256F1Z94Vf4LgsRAcVpY5mEXtk8bt6mvxZJd31pSQWFTLjPo5aBU5oGQL",
  "key37": "2jsQiPt991A4qMdkba8ZyxXRSU4Br2zWUyrq2Zf7wiq3Hj1GygR7yGgdvFc46TCFqYTT4xhkdYb8LrSpj4AxdAd4",
  "key38": "2huirZPDAnSwS7mUxCUK8u7fT4J9Cghsje3K7JU3F5LiVivfhoawLL9JuwF1Vruk3XDC3wumWW75etTDsHZTexGZ",
  "key39": "5bxM4cHWTP4cemhb8V7kgCj1yhAtq6yvLWhRTF67z39QHC6a12fxorL1ycKdenPsKFBstCvWupoUvUGskPPLbAEa",
  "key40": "5B4GTfHFKArXGwmQ41fqWhX4ia8QvWJSS1Kiaa1hAZ4TsgkFR8TdbwAM2MyKWGsdJU1p2mWB1oPX24egGjxWGVi2"
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
