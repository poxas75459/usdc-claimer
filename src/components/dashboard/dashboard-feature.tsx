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
    "3ExdVBTzs51mk6t5VvfRfukH5xTj42YpzvHV7XS8tteS6Gddw9Pfb5bK7K176sQ51tWoFhaAm8y3hTdYTh8PMAwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b32wiNsVBsQyFBQu3DDvFNsh9dpbYt23x1oJxh5KupmoLXxbrfeUpmZu2aXAYFrUeeobRpbYEFohpxoSt1KgcVR",
  "key1": "3CUkQsVqQcZaWJ474F1xuV6qfdyG3zQUVbJcgq6P9f8c5yMu2n7AvVARoquJmdpfCo8My9w5AEtHWhpHgboPVwfn",
  "key2": "d55LcgNqZRwaD7jvNdiV9TmN3UEHayC85pNMRe889E27Lb518XGLy8nskPt4QUBqw335gkTmKp7oCuon5qSSSxY",
  "key3": "3Li4SZCwAMS77TbxUYXHZexrXD2C85fSRNMAMSkX5eb3ovKpSBevethe9tMU2pQ2wdDWGGBaJNmYHGxdNmZGgLiG",
  "key4": "3gvQ2GnVryiUQdta2mjGgqo4RxGvZiynMbDw338w6uhv8Duy6cQ6BTqDyRJknKDZbPSnSKNkAEBojN39QJoSw6ph",
  "key5": "5PYCPJrT4TdkdvmKbgcpnVQPTnALo1FUwMqNGUnLXDYPMTTctJ2c9dSrwgBNvZ9M81Mb5khNsMrPmBQaUQ9TK3rg",
  "key6": "5YaSBb7Ufvv6rTxtuuyL3B7SXqRSm2Zvv6DEnxqWguT468CX298jv35gHoP5uYgdx2NtcMbMhKyFNf7t3i5u49Uv",
  "key7": "3aFTGqJqr37MjJLyohkNuc9Zhyohk5VzyvRTNC5pVqc2QN5z8c3Wf1G6GSoQX312oMPs8cdf9A8GNAh8MRfPHyTC",
  "key8": "21ESWuHpV5fGe1w3b2j3X3s3xRTkFmchekdRQgy3MJeM6sRUjo1YAE4XXyZAtAYC4nzmX6UtoY519noX5K8W4JpR",
  "key9": "DP6siPzVDWF678ZLXN4RmfzWHdFqE9gGSocA6xFNVCCahikNX4sVEQQ7GZJEtggNM96dsqo9aMtGDCMuYEU2LDJ",
  "key10": "2uDXjg3jMRaPDqTVaMzL2PboFcTjy2usS2rB721g2Hc6wnfMrSPXgDYHf24TsHw8sbLVdnDPZLavDtkprDSca8ey",
  "key11": "pw6GE7MM2WYyUJ3kL7Xn2DxVRszmKpbbJVwCrE8KNDNqZLAYk4t7wyfd35akKCB1JFQ26KX2HQJcSfWmJiWpNqE",
  "key12": "4gA1d4eBkArLJwyXT94uRL4aVuFyW5EFz5KVWo13skTY8g9QPENBywn2YanrnLKFdy4uTczAuZuQQEwCwyosXd2j",
  "key13": "2RQPjsMFYd9f4KnZKqjVer2xBVJd4CTmxGoNANkYaEDNTFMBVCGUPRdW5ZwworZj3oVveBrCLBv2cvhfBHWoTthb",
  "key14": "4KCUNic9cyMYPXroGqdD2iPg6exHADrZChajNXooYa8jWxRaGg7Tc3iyvjARq3Kj1BAmytnRdMHKDBuoeQtuQwDq",
  "key15": "2bZMUyqm7i6V2En1DGsDGHDPZcPqUauofufjQpY97B18cCe1NtAsjtoT9ifcB2JTDrnuyeisSdkuFGSERdrRKt2Q",
  "key16": "5Ki1pz3YTTfP41fPfwT2UQHMu9LgaVsYySKDyfDNauheJsyZfZYVudWN33TND1Sn6mUnzXvKmRXy7PybTaChQW8q",
  "key17": "AwZ82F9gsWDSXCYxTTtb8hnrmCaYyMXM3hbQW9x2nuEkFmNSWwAhacaxuRFg2xMGYENMUyDQWYrRmejVeGW7t4p",
  "key18": "2461wAwMy5cKHiXdMremqKgMPXsvPVWadi21pziyf6dt2cY4kmJmvzY8nWysHQW8v3zyd11vYbJnCuaY5a4jS8Ju",
  "key19": "8oDrfBZBYhatDg95hadSvkK7FX3xB1rHQopo5YEnR97TskibgRM4FqcHbhJuKN1As3V6KbYFiXceyzj13hSdvcw",
  "key20": "5idAW8WAhAovy416czASLSe7DzM6Qp19xVnqYZyExd9QwamRxPpmv4g1Canf5e72Kan12KxN7DBxDuTHctkk7kKC",
  "key21": "2wWGAKpHFmUWSAQMubwmnNYMuLp32iZSdyoqHPCj16JqauTs8cQBig3Wp1r3pweHxYeSvTcNcwnowLRwTZZsf1QX",
  "key22": "4cFwogSmd26FNCP37Uswy3JDaEzXGaB1Hv4ApJgPUcCwWBrLGB8WPu4omxAxop7bkKdbF5aitnJCSQ2tXW8APhrT",
  "key23": "5K3CX2aUY88M6SqndcLFFNNffQwabsSaCwUnNgr3W4EMBjnNvfvhTMt1f7ixwRTBd3ozt17yAF3xUqqiqrWPzp7W",
  "key24": "2LiSqmiu7hPA5wCqgdWHbzDvGbWkhtgDkWiNzpZMBu3XixcLKCXihb3gSYRYrHdYZ9tJqWg4JWd1rLvhf7482REf",
  "key25": "b5QqZyDYuQLKBkUSniGyLPgcp5Y26bci443oXvQnvPQbBEsba19Wz1YXHgt6BAwmPWbYLgBGKi8REd5VT9QnBYG",
  "key26": "3VqDnmmLsiSRdhJ7LpNpJesx2BCrLebhWV8MFgCsqmY6pRDE6bH112hoJwReiazumsBp3RT3qaFxxuLCU9uPBgL3",
  "key27": "5dWSy6PoLhf4rqL8QjdA2cT9qMWeAFPLMjzYJDRKb7kFNyy1ZZRd1t2xNKopgGJB43v1wRrmBsk92ArsY6q6NQeq"
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
