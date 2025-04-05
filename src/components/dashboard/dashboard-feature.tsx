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
    "5zAtzqdBFRi5bmFYcfZA6WYKmLMsGFJWbR51aagWrCX8h25JyHjp6cAc58iJHQoMwEFDf5RhgzmhSmbBkB8P4BZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WgPYy4g9sheYdaUp9hwd99oUBkoZTjBVLT36fsp1q8wkWrXFhsbX8ZY3714An28HYz1fNdoJcvn9jckqhD4c6rs",
  "key1": "27eQc6roFZduTeQQejxsxwtscPoYFaegPZYcb9FKWJPYeo9DG5VEm1pgCYUwwvHyUjAayaZNM4edNiutQengCZcZ",
  "key2": "5GLaLmguiGE23YotkHUttHJVT8oX8GFUu5zMa34AhU3eEqqg6uMLbjyJoSqtRxUALMP2sMDgtYqbDAPmBXuPRaXW",
  "key3": "54EU5U4RMsXqtbtbSA9tLpFRZJukEnjvj5gpP1Tt78XVV9Xjcth76H9zREudk3NASuRDTBmga7TSwGcvdejiUaBA",
  "key4": "xmGwBYPRxLX6VQigY593EyFXeG1FHWVo1Hsbnohf2koF9DpW5CmdRozEFCbac4RBLbFLGTV1spvVPR39netEDqW",
  "key5": "PhKxAPYdyF9YSuchNFNRBtoXmKvpix3VhNRijK2TxLwEWrAzGV73Xph15wEbDvAHPKXEQE2LswGXihPfcrWuxY8",
  "key6": "zWt4j1ixr7xD4BLPgqsrYsgbANFeKCZ7HWoayRctgDKeKKekFrgra9WCmTVAkcxjGgToLQ9Geqb2y2kDpX8vXqN",
  "key7": "2prsAnuQK22hJFcvpBkbkUFj4V3EX241CFdmwqJ4wxpArvhnXtBFno6vptKZxWHvKtBbMzpWkKW4dzHBNUEMkPBY",
  "key8": "5CaDYLLAGcFkfbHYP4t6PZ68Ec8V8eYiDrdqxEMgncgDcLH2p2W81Jcru19TbVY2sz8EAKfw45XotWEsFmHmU61J",
  "key9": "5yrVuLvLDdGGpd5GSZ9iUC8d65q3Vq6rKQ4xCvTtfHZicixz1JVywJPinQ8EQPiV8zs4C39U5ixSneGLkTXCDr62",
  "key10": "24ZG6EUMtqXqRJMFc95987YLcE9FF8bLPvZtWA1kuTx63vEBeKauEAPVRfxVaDt8jD46Zefa8GrbXbKJXi1hWjNz",
  "key11": "5q6dqyRBWdE17CMdxWqV9LA7GwMN3ohCLhBG8L5bomgkfASckwg2CGuV1gWncGgJFwYoukucvoEBxXVCEA5rVFQn",
  "key12": "35wN2Xu6pLXgNLJBrtWbxmtpWVYUtVZT6KyAZUTp1MLGqLuLpudQi1Z3T8y4gRtE7gSoG1ftSqNrQLHwFCFF1ftA",
  "key13": "3Vj416J782tJzGffxR99wtTqWw82dFHd6GDJMx1BLo8Nev7giQToSxnXuFFs4NqjoSYmFGveZ5bnYirAadD6gExo",
  "key14": "5tfFas4TMbBeQq32fJE6MpHQVGGXe7W4MpBsadtd3VosTMkBLx6UjBXXUS4smSedPW6epVyvkb9rQ5a79JTdCAtJ",
  "key15": "3PgUyAebbkBazcYTipxQecWAEhfhB9TTWRhaJJCcBtT2KQzuLCRmT3ZvF9MoYJYx44UuUftoJTVJWkkAnX7zGiat",
  "key16": "4RpEC9p3wJ1TdqnN8wrMaMwQYXnRmg74B93HdmkkBGKtRfQjaure9NwAazEPrp2FLfTUifQLUXhQSfaHVoYFWGMr",
  "key17": "R8srjcwLZoDJxaVq2jFbdjX91mqtiP2bQXJoCGzDjDfXkKMptsz8h5T7JkuK6L65H13621c9dYvnie97ZQSTbJm",
  "key18": "2sZ2QHU7ETZZF2eKVi3oYqaeuQmMag2Ubp4qqjJ14Df6kurLmn6mREFjHgj5Vr5QRDVs71cCX5wfGNzTXGdvhfCy",
  "key19": "3jFjbSN8fyyxwPXYJMpZyh8k2nPSStU4Keg9dmAoiecf8WGQVdaK5ZbuWGF9VhBW1i24K8dP3hQHafLMS8XpfQco",
  "key20": "3DVXp3XBj4FaExucbyyDPB4PKcUFz5Z1FS64xEm7k9N7DM7qbbGsgQcBUgCs43g8zfgtLfSSn6iv5VXetYY7YRkk",
  "key21": "21AVzdcG11bKjf73dSUWZh1Zhpx6C5cKaHxLWGVdYKgrePDXtPjUSQehKMwAWZUXsnM1BefXdokecYaxpEKkqJpZ",
  "key22": "4ZBr4s6zhE61XUNtGFXsgzgTBN4sJGGRjiV3KRfdhywDVCcd7XaPEroiuyKzoBXicX1NFqoPppUZnKnSJdkdZ4R",
  "key23": "5B2fwZdUTzvE7LjVSaoYkj2yHvMEhrz3GXMKw6LNNapjFKPK8EysC1n15qT4andzJo4G565MoKYATQwugHqwoUK7",
  "key24": "3dPUgMbCTHAeE7yACZGwpSiujaynK9h7nqCBuGA3wuraiuf89uSvK7D5h8S7JDfDpBeHvKPSbrrNqaJeKQn76bvm",
  "key25": "2iFr99nup6nMQXqrDRjUzPDaCspqA2ZFhBRt6iKsBQtsZqCtSh7oVhnuyRMbLf2cMcahMAC4dr4atrjA58HRqZyN",
  "key26": "5D3X5FajEgtgiNWtcoXr5QnDZkETnZ2UqXMw5QKSF9WGKPj7onRAN4ZPCFNnfKADyLNr3U8DTDWcTiuSXwR227MF",
  "key27": "2hGhD2AKnsxMvyAvzAmh37c5gdwjBSFq9K6ni8oJUR8aE4yE5oynvM3fRLYtW5x1YW1KmYrzoUHSfXfMHpBAbhoa"
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
