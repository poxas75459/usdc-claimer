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
    "uFwbunpEeQ4uHzPcgyJo5RPXWaHzbqJNnNqkRRc3ZonB5uGgMW32Sa8GtKy3rt2dxF1LYVUv7Z2ay55wFNkG5s9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEfmRxeA8sx3c85rsG9McwtJESkAzhWUMwVXPPxCgGQMnSR5sUYmfrceXbBhoCJftTwQZNqox1KxpKYZWoSLmsN",
  "key1": "54YBSgWXVe255Mgar6nBjoQSL1p28cNcqiRXNksoEahjmjj5WvW2hPYouy2wfeWStpqoWy3BVJaA5YkKqr3t2s1t",
  "key2": "2NgLaazbBSpuDvaHvtkDedx2dfA48jyB798nDnGArGrJNVGDHkMChdoWCfZdXeBBi2cRmzmDBbwYBiVvkmLkvT1q",
  "key3": "1ZXEA4UbjAz2pG4s7cbmQS6q7YVzRLifzXWd7oouH38PoQZwm7R78aa6jupE2gDJWL8WioCHqWpokmg6mB48C7G",
  "key4": "5CfsJasqrorfTG6EA3SQGTsvMzirj6mTihmh5VLrve8gvdm2VGQSJBYif6VRAutM8NFEG4tk59z3BMZPrwFuCC9j",
  "key5": "BF5MGTftWHFV3NzLeWo5FrgcLVJY7wWXqBvVUdC6uT8J1t4TDQrHYBpxEVN3amwXtKQqCyhpxYLsXxvm1myPjXL",
  "key6": "56vzuj1y2igwii7rAjyRYARowoU31Yejw2EW16BGgUxxe2UdnkK5zxzkdhJHFyP6dMpQk6Ut3jPcw91E85mRbVfa",
  "key7": "4qNdSzbfNkLmYMfKpiustrxbpedDtYKEHg6QxQYjdEUYkEUvKt8241BMbahmyY1xjHqZKXYUpkx9shwYuKyxLkHh",
  "key8": "2KC8CZoMBKGGbqnVd6fSD4XpM3msx3eS6T7njdvjv3JbGAyx5BuEcpFLZb8KAFX51AB1vJobEz6aQURdRXhcuEdi",
  "key9": "4rvP5Fpn4KpY2oxgy7eABYfdFtuHzNijyY1yBvftcEAvqA1SAByuPARNXZrHhRyEPSDiBLmmmo6DgyoKTorsmQYa",
  "key10": "4FWwRT8yDNvU2EJvtahS7Soe9kh96rySBALoaCJRDh44iSudN9qVYhRkr2d2ykhSGh6yUsNPfkHYjsrceFNSqPMG",
  "key11": "5Ysd3b4fm4zXbwxU5E8AahzLhsYRiwwksxjBrbzWFFoTHsAZcUnMzm8CnoTjJJ21NBsHzGWMXkqr1wXJd6XJzbPB",
  "key12": "r36BiPFwVKEsXQ8WyKDU5nxWzGJG7YnL4tokEsBG2fvhxtgMMagRPVLkX99F7Bis5ncNAfgzvGAh41CDEgKM4zS",
  "key13": "59hB7aGWKj6mbNkCGtBky6CXSJbYX4J8a8t5FCTkisfKFoCuapEHVLEmesCDKodBdAWKdV9aqaebSSr4rsugRpR2",
  "key14": "47eJ8Fga7VESMuaJGv9g1QbNym8NP32XWgeZY8iNW1C8QLzbAqEhgHQEM8MC8HoiaiHiBzAPGLBoMFpNrVGYwrgi",
  "key15": "3c33sqhiMrZvYoiTzdommWzFGk1VQFZX5NjSrfcsifD5SZPChvs71GcwJJzyi2csUDZz3AJM2zociLXG2ohzDvnY",
  "key16": "5LCG5WUurGtsYFRf1GGSEPfAhsaY1qecRxhHFYB7pL6ypjMsJM4SbrrQLHnAvZaoWKphLAigvk45oCgbq3nEZNZZ",
  "key17": "3hWvUzy4y3E6iCTqXrZvidpd6jVJzDm3YwFqFtvzEJM4n9msmcwtASnEBHfeqEsW7eFhgpDhkDQsptqgJh8vLAKK",
  "key18": "3ra6THLEhJDyWMa8R6SUjsRGYbQrrk5wCxALYxcCegskoaNwZGbgQ4f2ojFXYPVz3Ae8Xaak8xUthaPJo2pjKys8",
  "key19": "5Bo9Jk3DfEVCmXj9V4bnnEcwnYEwmvaVRKCVDxx3YUa6D5dcMhB2euNpEzpUUGvdQm9WX9SpzRUpQdT8AGovNN4o",
  "key20": "Fd8ZSRRJc5mwnrNR9cUddF1M5karFuodQTtqxZNmKtzSqurNdHUGTyozerikvdsfSEg9dHdoGSgxn6eAZ7LR3yC",
  "key21": "7bAbGcoZrxdCTcEyFZv4PazYJ4uW8vvt8wrA7o366M8PP13qiMmbQzzCqkeZt25fq38wcttuwmrcS4syqabDRxo",
  "key22": "4qU3xjzzezsLsr5FrEuKsZoceNPGWXdWSs6DaSV55v2YuBgt7GXJzQeoCN69TVsyAjcZHoWCLingY3hQZCJXrnKg",
  "key23": "2WcDZsZQKJ4APwpKW2GYftwn1ERpoaZi9uLFC9catWV49tbP6FZgwWx8No2HJqexi54ATjh2SxTmVUVard5HbRcV",
  "key24": "2sUNrLhz3KvRQpHAg9U42C4Uan9EVHye1fus18Fn1QdBfZmsQfpH6tnUgTwYEMCChTpXFK7GE1Dwnipy4ArtRp7g",
  "key25": "2EhC8XeWW7AYNy1aC6Nkezex92BJqVYFETJTeMTLJewAH8bxcjxmTynSWVo8vXZoRQzTW5qfaY7718JKkBgVp9ns",
  "key26": "3a7nXy9UJyyJFf2hYw85EZLyQyKnBvydh4Xt2N6TDttfHRsnqdBP2zKSHAvRyqFYRJGp1yoyUn33edowjeFRAiGM",
  "key27": "5W8qic6gmqFQ7edczUBCE1HTvAgyfETDAz2mm5MRL9QxUXv5YDG8zb6WcgNUb5UgWMorf9qwDxTrGQWR8WCyuskR",
  "key28": "427fsH5V5hfCSjMamiVEPM437L2pjfBHCBd1yxFusLdE1SCqSP5KgVEBAo2gmsCHYC9n6enGmK2MGJDLRsGpuQJT",
  "key29": "5KmYqeWfk1FycfpBsuxvoH1yJf1QmH8nWaXToSU1c2TaArDVDwvaHsRAXHGDzXzSLLdDbSq9CK8N2M9gRphhM1Ne",
  "key30": "5Du1LckeSeZk5n3kMvz4BksFDD4GdHEsXzZ7sWug485QB5PHKm6NSwYKLL49ijLJyjxUPC3b3eRZjuTF8H71GnUh",
  "key31": "4R5VJyntfxdeJcnuJgqWL2WLjP7wkdLZwBpxYV1bceYRi1r3bn3yqPNxFAYoccysAFnp3vxLVAq1sJvwH8521E4M",
  "key32": "hoRxv9xJZBMJb6b8k7JzTfhY4YtdyaoU82zFTu9y7Psiu3iFSjhbG1yToU5wJtfLhzYjiPisRm3LDeRpLbYqNab",
  "key33": "3EnQowTcMcaiKP6CFy8MibJVbZ5zrLA7DhjkDgFtYyNby2rpYpk5BZ3L6QZ2vsSKGAuXN2hqnmZnwHX4STPbkB16",
  "key34": "3p4vRLPxb1sfG5FzejYuEaCx3o6gKYQpdwGkcC21798buHukSRDaMgobzsRveB9LrMYgA2wRUVWYKfDgAFy3xEvD",
  "key35": "5UYz3dAMduHMFZBwsKPorJBh3Gx4gq37s5Y2MMNyqT1FuWXUKQn69ENiuobywMnb6DRyHxnBm95ZnmK4etbhqE7G",
  "key36": "2nnUSTya3y7y7G2UZgVdmaBQSpUchvUXPCwrhMSyBcvaUp2LfepAU2jDNVAzQHbbHSBKMajixDLUEMxnLeE7gjDj",
  "key37": "jUUjtfvR16bEvDxxC4S8hJfiWWMLDxAdjnxDpTNnURvSXSuMyq15cWytejCwGajHTmzrEpABzHY57neDG8c44Rm",
  "key38": "3N3npjxnc7rx9w7Jk5cT1X6giFHyPZzLDbB9NyAxfLViEKMRLLbjk1y7tEemjS2DhKG8iJqZaT8rQL1idcywPBgP",
  "key39": "WHsuxnsJQM7YJqeSfFomtr1hmQrWmbtAbpf3dPvDMUx78SVnq1Wq1wWoH9VozFqxZ2wxdj8VE8q8kNtg9UYnGph",
  "key40": "suknWJciLPiofYFZtbaza1ovio2F7VVUTYocSXeqFaLJsCJC6aoWN795zbeYJj9XWdcMgNRd6M3wUqx2kvHRzSR",
  "key41": "31Nb1M7rHdhM7F4rGKarZkm7tg6iiWMSLGWwosuNyETxtxhRGrP1peHF2XFe31C8ZUjf4PT2tdmUwcH8dCC4qYJr",
  "key42": "ii4CSJR2fjV9A5Zd56ddvfUVGAA5Yq7jD6dhoNugVeoXABKwf1EbgM5KGy8sqDLU87uJ6fknAfschmA6TsM3bv4",
  "key43": "63BcucRUEsLBqzkCBQV15dbC5wzmmRj28mWLiz62ZGPBAQQf9cH9viCiAUiN2WHPQPhfYG1DbGT16dnaDgnUNJEg",
  "key44": "5epGvm9Fr8BiQK8XsFaTU7pnLELeY3vE6uBDnhLYdRHpNZwtWfyVTJYUozC6F8pVxccpKGuTCs51vWfmz4Wd1QWU",
  "key45": "5dZQ1CjiVPfH4sRCdovY4iDUHafEHhXos7EzxcaP5sGztwSLDMnbRZsUQiA6L7QNtbP8WgWVqsf6pix5XEa6qkLp",
  "key46": "3Fkvra4kPVN26vgqQCF532br47WPKsYJFq7Q3pNBNNsYbydhMoEPRU9hsxrWanCB6Xm1zvdhrCmb8xT7Z1vVsRxW",
  "key47": "359yfgnHmBLBpwDaAVc932WgmJ1bbQBCeivJH5iVh6N2kcv415BjWqwRboiQHkea9RPCuHKWhdSXd9uFTGJD48sA"
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
