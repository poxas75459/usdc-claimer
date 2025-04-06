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
    "5BPNjEjTwCU8Hzj34ixMhGarM32iB8A2uv9PjUw4dq5iST7neVHwCo9omP7Fs4yfLzMkntUjeekZd1igzTCYirWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DTo69q2fEBUYhYSLehba5TDgWX3WET9oW2QBPxcc2GfZKxY4JZuSJxPMsTnnruv4TxLiTaDFv1FJKDkCeV2hmb7",
  "key1": "4XPMxdmCba7Q693GGSAZDiMZnfm3X2X1bo9irbRsQRBD8tmJLG54znbZ5mq292dqAu4BHyh8h33vbLGWAAteknPa",
  "key2": "oMAZ7pQpk32544Uu6K2Fk6ths7ysEHWoBX8DmGi9AEAnERuc1TnqK5wGdxnrta5vYS79fqfUqwSjzcQn5dVXYcg",
  "key3": "2qMYxsDeXT32TURHkSGPwfKdMT9C4iBFAaJTqCQqB94nPVBTJ8V6sX9keX7n74gQiyDhjNro3ie96367UrG9wAGm",
  "key4": "6566yHw5Rz92tkwAcWqgL3RWKhnj2E2opRZQLqL9bFKTFXebJPC5gFMSmMkpP1u4SxVHTK3dwZGsxp2AwbwQ8STn",
  "key5": "5HK5PoZZBpndPQzCCHdz9nKgy9KWx6NQ2ZpzY6waSBr4TryFBn2b6Dhdr5wXBXCwQNDaJQSBWbhnJJzXTV3XZ58V",
  "key6": "38Qpq97S4mnZC224VLegisdW6whbsHQ4SWjXsPcukBCZMLQyBkPg1Za3ivRzqcWdi6bM5YxAWEE1nya8o9nC925B",
  "key7": "4y7v9rtmuxPqUAs51ewpzcHVTy9aH2TEtkhEC8BCKPkroGQ8oKvhNCr7pp4FgjPnNNZ2bBW841uNcBuyjdfzhLBK",
  "key8": "rzK25UeRJnTncKeuXY1M4jNT11kAdfcBwzqFxV3zgcCsTxwvFsZdkFdMUyMM3aPsFiUs71cTYLuXPfn4oveL64L",
  "key9": "WeRHop2dHfPjqQUVecxb3cH2D5t7dcVf8VciLHUAxBQ7NWDg6ZKmy64mpYfRzd8PFDZkcWKEeeRdxokPmqLs1Kk",
  "key10": "2Y1DsajML2Zaiopc8cty7uirxcaURjoaxVwBiGdULqd3uThZghvHhMU2ygZC6VUFy6qDFbG1XRZqV7jKtTQK6jqe",
  "key11": "oUJPEHyZre3d8LWeeGiRzWmwcMs851HNgbk5z7SEMVkugn9MrtqqiLBn9LgCQYLgnvBCd3eGUk68XHWqGjS5jk6",
  "key12": "3gaJwUkJEQtcp1cAoX5YfQ4Cc9KDcPTkkF7ri9V1qvr8GcjfpqUz5UQ7e7KaHkVbcceMni7BMcDauUuNKdPC1ko7",
  "key13": "5QND75XSc8cBZUg8s6VWQPCi6pjqv4uHNqXfDi3STczDMHLsGT5wgBMqRU4Ykio4sGWBwTx5RH771egKUsx1e3xP",
  "key14": "2BJ9w5qNA68bvaSBN5c9y66WXwe4ZjmqPN2Etic4UjtApzMC3dTt9yArNhArMLkCBrdWVCE9MtR2NiktH71EuRrG",
  "key15": "4YQgqV7oe6qUGzm6ThSJgcjXry6iGEYz4AP63pgkQe6NNegp737VifmzpF3cPQAM9A4Fpuf8sEqY9WcqML4mgYSx",
  "key16": "dWHjMMmFJBWE6Y5FzQvLLbLJmgtwqnHmBKQ8hQVZz95JyWncdkXPFtU27VvQ6U3xTBSsqENWiM6Ms8mMk5JpqeL",
  "key17": "3WuhuXS5re57VEtCtQGVo5skVxB9Be5tLN1pcwuXb4ZYgZe6k5G119Y6PKw26eviyQzgxBR29Q5NavNNNdknRxWJ",
  "key18": "4Vppcnr5ghxQr5XpLvx4YqJsWcnMAMBwB7iXFXbNUD3duErAzpZ6wFYppveRaUZRGchxq4DjuatsG4Ass2yYvLFd",
  "key19": "2WkEBzbRyhXne3kN7ie7RXCNtvfm7PixZFdpxDVu4jmyYGAztPvSBpPjmxwEF8fbaP6PMHzFyCLyZ2VqufpfVPd9",
  "key20": "3vA6nKHg79Hf3TewEeu248m4cmr9psvwjmnRXLANN2byp7jwifJQryXm2ffNx7xk3jrS9ukLjWdaQJUH4s2bqjk6",
  "key21": "26GSfHoba4QgSZ3kKvbYMo9oy64E5NR4Fix9rP84Kfym5eSSicTJXK8UvzC7h5Mvhgo7XQTgEGsQET8qBwS8mZJU",
  "key22": "D7Rk28mkv1Ph5BKKMxhXoZrjqAtwfu2JdLYTFRoiS8TA3VpArwVzA6KLCoRxBh8XFaAW3vLbE581tdcKTjtCJha",
  "key23": "57PET1i35fmLgys8dtCNAp7n7hQ9zoWg3DdoTWs7kRQUCQS9v4xLZzuUv3foy83z73JB5nsHsrtoo7g8mLLABXnX",
  "key24": "5EJBpS7mym8ZyRcaE1PhjcELyAdAFcwK15iDW74XPVRthcKcDBxMGGt9Jh2x9LoDXaXTpEm4YW8H4Mj6fkiY4cvY",
  "key25": "3oAK4b3Lkd5gW7GiekPJGVVnKpCXkP9WLPTGECya3Jop9Dctp5BXAxCGPtma1fGZ3hsqAHoizs6deLtqQdgBoRcV",
  "key26": "2vofxWrtbMYULioMDvnWUpe1rByPRsxiBGQbLv5kcvKJmH4oz8w73W65V5dTfTLY9uAtuyZhJ4egnB7UDr7zM21Y",
  "key27": "3huYCBJvgWS44Mv77Epci1QBZhg9ANbrANTahojTe1UPciVuEL1bCEy8XxVGJ7PdXuKaHCSKqQ9L8PWE94HYhdXT",
  "key28": "2DHzkNdTjhqoFBUjXvrbJtbE9Hq1WPfzL8cifP7U69vp6HVE5rDixW2jvFYJHinG6TAuDsZ87PQ7VMHC4kt3dtfH",
  "key29": "4aSSVMjbEuMDTDv7hFzXKbJwvFdfKN8X9Q957fBE4fjVkysXq9PfMSme2D1hgWUViiBqgrLaTsk27mUte4FwN8s7",
  "key30": "3AEjY8zgRe3A9AKophpmhJc54mRq5sdfvFK1TbFvBdevPTQQ2uzZqFyTqe6zNcgDT4j5sdVNMxxKyShrpekXiK7z",
  "key31": "AXrgtF3WmQ4optbt5sojtYnUorrZDsD8waKbbj332uDYGxdo17DzYg2DBX9uWdEfRQRNq9rzW3iMGeWQaLjxBaF",
  "key32": "35tf1xkBFUzeYq34KX1SkAuzjdMBJy7f3pgTJRUxF6nowvAX7RqPQeowwnaDxFgHsK4MpoPBRyB534qvc4YHbhrT",
  "key33": "3i94reH72sYoBXQCmdxBnvWrXaZCJAGfLGnjeUCKzDBZciTJFTt5cKtZLALKhJnD7jVjgCf9fFTXvggRBAEoW8Zz",
  "key34": "4opA31FYs9m89vYkZPdKXPGUc5gGBWkYoZp49EGP5bMABcYV6j3tvhi2H6pmikQd2YYeWQf1Ux3vsDBTfDaR9miZ",
  "key35": "46Ab6g2jHAz1CQ8h4nGKjdp2FSpdGiUf2Lo7rpcHueSiFxCtCDeZ1ZQJp44qTK2PL67SYCpsYKLXmHrMLa4LE93J",
  "key36": "eJhqck6ydA7uSqTRqg4NeuHrC2bW8D6bJ39APnZ4ACqTdvfp7Rrb6gfGofXiajLrsgyEL8725nkHjkJKJ3pn6zD",
  "key37": "4fZiaWYnJTtnByvj5LF1xpGVbKdGAbaYzBUh3wJG84wc5zfxBEMm3nQVakTmrp3TiEkpb3r8qtybrmE2bJAMHTSe",
  "key38": "4bGw6xiabeMQ1S6uCPSAaFumm96XKDZgWqCK6UBujRhu2qiGfZbySjmM8a7GsnMCfEebTUqVi3iEcBJvL5XWr33f",
  "key39": "4pyBWhqW8x7oBTHrpYg9SugKZcrfNrLsRamHGuf67RFLmaNcBEenkej99qHHYrvc3B9RpaxiBNSSyGZ5hZsmkkh7",
  "key40": "4stUqhJeXY58qCG8X2wzZBmz2gHM9g8Sv6QisMLRPaJ7wcRbxUTpnfCRcnweurYBEqEP2r7TNwt6uawh14NCcAsY",
  "key41": "CMED4NrWiZNuvkMYC7UXR1vJky8V9zWYWTSDC7nE268gtJnGHLW5yrpwQNZoRW5zDjzFLCz4Via8TUC6Ah21dGt",
  "key42": "3jaBKiiVyhR5gHVnar8QPtGYRg6HfJzCYEM5PLvonkH9eca7Qrig1xDtSmoBUpBHVBcM8D2vK888KausXCfYh4dK",
  "key43": "bTdFJsGM6vAogsyqeHSVmG2XmUqpJAno9R9RuRSZyuh7NhnLAposUfz7QUtJsRHdLBzV7vxoumn5edo65MSdkV7",
  "key44": "36sXviAjTsrDiijoD68Q1LJWe1ze1gKgt7VuZqHcCcsh3zTWdka98SiiVLMv8jxt64WhG8eVX56gxkqbVoWgcH6S",
  "key45": "5JeibgwBioJ14GNGWZezojAmedsz4HGRugWLMcvaeHmDUU9R6ochNcsdk4qzBY7PNrgfmfcMQzT19URYYNYuvYVj"
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
