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
    "2JXtZRxLTevTm6LVLidTkj9XUoyCAnLHB2WMR7ucL7ZZtxgRJwQdRfu92ymFdgPN1Ks9obygGohJhnDxif7zxodZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKDZ3i761RhPqTQDE5DA138RgLxinGQerpRbgMMDvmbUDFqZYbAt4LJehx73Cm1DoCN2un6Ttig8pVbBhLxJUnL",
  "key1": "4obgoEy7c3ehK9UR3DD2bx74guzD2AqbCWebcNPvkVW5XiptgUqLKFYkCb4oWJrxCA4iJP2R7MxbEPeHMfA98dLL",
  "key2": "myWSgE7nEj7vFQmJTqQ35yUWKBW4B8CG58gKUwHbXEMtPpb6HzQNCCU3HynCqx1LQ5NSAkDu4PrdhkDFyQ4Hmzn",
  "key3": "BmtrrNJQZCyrjmSL3D9vVKPyUZcRibcQjf8qPyAMLaD1MiDcFKRdAugYkfpSSDsA6J2cNgQqN86j1tebb5WVTev",
  "key4": "4RvaP8NoempQZZJt2uZ7c6cXt1MBqtkfF865VWar41k1Pta62uELSjoRa8gKJwvGVXd8U49R6TTTqmWsqWEYMWZp",
  "key5": "5MknCf36qb4r3URjxvMvqNSiDuzdFRJb7DnFAsj8jSV8Hm6RcBfqs7jktM3jdKRSxkHf11WE1zu5RskmEBWSjS6k",
  "key6": "4na6uNzaEFQRPeohSvcQWjtuaL6PXGfavYc2nPdTtHHS5ViiCYP3zvfqTdyvKtvmV1wWhkazTq9CRLAcrDo18SBQ",
  "key7": "2uieYADiqNZgLzqLy8Db3DTDZdcpS58CGmVSrdMYHKv1meDvzLfrADR64k3iReG2pMWY9NamKhPZe7bHgQUqCNNu",
  "key8": "4dk62NpnpwL2yYt4mB3TG3Q6nUk8S66cSavSosK1Veb2FGScmGH7dmXXuNfUnd14ijdGGZVM5jjrD4S5BJh5qHqT",
  "key9": "Vxn2c8XpaAuZsNtLBmifCLvy6VV4dv2gFevSRbpmmwjt2QkXR6KKtXF2ZgrmtfQWB59ZGoZJPNaq5gFAZhFLogu",
  "key10": "zrwv7M3a7vEE3RKNwqpk2VK9vAXpa39wT9ReGSGnMwCauTzExgfpK3wnXgkmhRXBRr9RYhMbaZmo5XtuaGAtzZj",
  "key11": "5wfGiHaW8y4CxzFJYWjiGhnUT8hMwVT71oA1zDUjVZ43diXeLywk5h65Vk4334je1BSJRnHj5M6DtFPsWXCgR73B",
  "key12": "5nxohAXsw3QkNaehEhGY2cmbDWew1g31WggEFfkto2bD27rfNh1J7a4MhbXyZZgX5cCng7M8S88aNPypf3c96gWr",
  "key13": "3teSPFEAWv2uXDN6ggzvHr38QBLygUhhnqGPNbExZfshbD7chmQ7WYMU8bWhLTUZmNPBdZmxpB3MAMzzMSSQR3aP",
  "key14": "PQ1h3awj1DyFZbzHEFhpJh8BpPgPCDCXndaFy86Hptg2wFKWAPEB12tbmV2PU1V3VYTqsaW9oA3NkgvrjmVL86E",
  "key15": "5QYqiQY15KBShHL2m5Gfyk9nKzyrb8dzoFtSZFB4HbMNMjmYxQTbi5pgDe6TwPRk3stqpXbCAKGsNaG2yQYJvYPs",
  "key16": "3xsvk58fWe7aML1mPjx3ddybGgxMQGZMkMandNT8xFkABFSStP2x7kuQztuS8mjJUpp8HZ1fNxKxGVE1P8DtCHp1",
  "key17": "2vPf2k49YWETHWjJpeNbaiFTQWQKRMun67TKp938nCuiz3wpJn71K5T75tWNGbgRVEcRVe6qp81RZnfwSQPoKtsr",
  "key18": "2YfdQSbmbGDTJjSrFSLzyPmXCiNtFC36USxZj4KxuHDZGSUREMUaP5t5WCj1tSDqBfQDpiLQfoHW83PkWURcCaJ4",
  "key19": "4TLQ8freSf3TE9exskB8TccuFzWZLgKoip9V5E5gSEBw18AcxjkwfzHEMLtudWcXdmEQaUsrQWqJ1QrrMngsDmwD",
  "key20": "542UC5PWWoFMdQjrfMrJrLDPaRYo3TDpuAkaHdZAHRNEGoE8ua67Ue5EyuQ9PgchGtFP67PtsipviCg9FWDMB6c",
  "key21": "3uBV5jfx1sDVnNh5jghrLofN3Ai6VKRoQAnvhMAdnHPV6JU96tuFV9jr6oMXaxbtyoPR3mGXMJ6b5virnWDi8QJS",
  "key22": "5DA1HLrbtVYK4g2jVnnGSHvF7Wv7n2byURKxWtGUCQ7NoWeFy2Ehbvp6BqymNjVaM9Gk2sujSbgqgve5VdWdHGgi",
  "key23": "67WXbABwqDt9tNqCkYtEsw2761h7YdoyB3aN4bRrCWSUFgrAqTQw3sh38wEoLRmVY9jUYg56mbdhLnCQNpE1TinD",
  "key24": "f6sXvNJzn6CSwJAdAhoPqEsgkyPYyFMALD8r6g6YaBv8LiWvcQ8jerUFgMgic4fZ81HDWxmrnZzRVeQxvMekGMq",
  "key25": "3AZFdYK6LkQgm2WxUC9FhRJXJCs3a8ZVvFWs4BrgEwoptCq7s1sUTp9VXL7Po9qRA62hfHv6rkHpt11nDtArJmwu",
  "key26": "48ZX1miLbA2pQTtNinkdoJ9okh6UHWTuUYBi1SyqZHBLyfAmqJUS8mwE6vV8gsPQQNV9WohdbvUXFMjsVSqKBTBh",
  "key27": "3Fa61yCUk1mLPcHQebLvFrCa9k5WJqLE4hJHspKaBuyUk8pUszELUHEe9FWPs1GrR6VSf3xVirVmvqtdSThSymHE",
  "key28": "2JwtW7hpjC4X4LkcBc7c4Vo3AeNdCPEyGeD64qJc5STvEi1215VXB5R2pf3p8sjqds6CXrkCki4jcbUDbsQ6Qx5G",
  "key29": "2sGgLmDEKvn5JJbuihggVMKwE9B22Mfkx9z42pYpunVpFf7z2iZG6eeE2vtJnytka1PHEi7rgcFoQHfwKZ3rbnBa",
  "key30": "4oaFLhtmXTTNJYGLpeyf8NDTKRS2BKGHQ7T7bJe8tkU9B48AYEDroP3xkGj4dAwgGSaER9m4LFeJC86AJZmYB8uB",
  "key31": "2XjcHiMafp3AwEZZMwZAmzSwKZXsrBvGcuyvTJa9NLbU9kTvvYdHTZnWzBvFJCkDBP5STqP54bbGet27Nx32qw8E",
  "key32": "5qz86jp6V75ZFwSPrjj8gm57TMA4WssQ3NXbZMNGpxYAwG13Cb3Ch3aRTLmpb6nkWcbCm7BL6ASjZo5xtqkPUhVx",
  "key33": "3tspFBmbhmsd8BQmNuDGJUidkTzdhezZJ88UARRmXapMwZqSgr4PgNBo8uxDRRwkzx8xPZAisLVRE4XhDgFvsJFX",
  "key34": "29Gp9JnE2rJhZ1VzJDYdHcrNogMAfpnoBe4zHDZqVb3uMVjL6NPQksGQi1yEUntX29k7iLUvcb2Xj1KK63RX3umV",
  "key35": "3zMNKF3AFm2N6v5cHvLTPnDaADeCrgFwfovF2GdMgcJvSTzUCjLxgSW9nRTHPExy8Peny2HzHYisNzV9utHD1RYZ",
  "key36": "41nLPbVEstsoNAvmgWtTtHn9EXGyLu3KoTeQQqJ7tJDADVFZUrtz1ieUVmbQvNBx8vxSoigNvBU8S7KkAfDf5j5V",
  "key37": "4rwCmfQzh21YwW6mnDCbmpKsyxp3J21B1m1rvNvSXYEEqbuzrJcQhChaYejbuVa5EBzLwAn7zAMgTEXo7mdQLDdf"
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
