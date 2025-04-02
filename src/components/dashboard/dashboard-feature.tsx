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
    "U7mgE4cQwBGmmz9GgK7H1tp4w4anUy4GC9somewxLK9PHdebcC8a2yatmXr47Ds4erqbLexYQdtQyTNG6Fu1cmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NtYARbQDbZZVL2Lnw8CfZV22owGHhwdME5QGDchEJaYexwaSSdsQe6eMMCnuiDG8PMZxVTNzm12EGdHFQ9RK2KQ",
  "key1": "4FcyYsoHE8DRf9odRHeV41fyWeuST7bKvxk3qPtDMG4Qr3fx3CSkdQSpSwm4s4ZcWcwtCiP8c6rDWL9AodqE5V45",
  "key2": "45v2812BfGxjwNFudNPqsL7ybJ5NKeXZiZDJDfFfueypass5kyg5oJazDdJjJvdfHLZnrAL2nSSnH82UnVj4ys3D",
  "key3": "5FSFuFsb6E5KsVgpfCFvGxEQSEdAHzrVoDRGsZCAEDynYsyr1WcMChU8A5ZJFDv2whzYxQA1qnxv3VuxT7dVnCJd",
  "key4": "3Lzvxhk5k5jFnT4D4qUA5tbDLEH6eryDxpcakA54XqKQmQXqDQdEfgKJYnNBdNBAme2XkFrnpjK1MrvrgkNk9dPz",
  "key5": "5pSzeFTJ8N99fa61kUWJJc9WdXvTjsbrmBt45MqBsWx8bG54rN5ABUKodDUFEiTJoaVhqULrME4tVYNPJbgwD2bq",
  "key6": "3k6HQFC3d69Xa8JDGRGjJhzuhn8UYuMW1gsg7jWXtNyQaFGk4Gb3VstLrWW7QsnvPwVU9EZJgfXCqwkEGdKBsG5Y",
  "key7": "jr9jSMZ63WYQNWn8AC7WUdeD7pmsZ7mqCSMAgMp6x4PzSbGUU6UJY3TU9UG2PNXijNUgVT4UrARRrbFTmMUTUfm",
  "key8": "4JeZeUbpiCTWJzTcXz3i5TCTprqAstM2FVcaP1hVDCxd5NStSzokosQurXNPBDqG6AuoLhxmUPVhzTcUpTN25g8k",
  "key9": "2FFgYHzGCrjMG3hkd3C4C7qL9HNm7FusBVxGi9ou7h8A31cKwW2HeoCbpMZbuxgf2k8naXiw4wvBADaNPtRP79xi",
  "key10": "uP9Zmdudz836LgZWoZStCxHeos4apVH59BVo5WUrezdQ585rPz83qn2AJ3aFrQTBmM7LtHRGseoVbo8zc9KxSye",
  "key11": "Qvihk5DhSbPgfkSqHnES7xQXVTxKA7VxmqBSBL4vH5neayAZuJX9ByK7tm1CfGESKFL9qFB5Cmw5HMgtjxhzoiF",
  "key12": "bk2kUnwckuQKLw1wKTEQ4VydH8HHejybsz1MwM8Y1MJMFCK6uTrmqmbGc94kH4Ns5VZTmBq2MF2ezRq7NxvY4Pt",
  "key13": "3EAhLqTr5oTDhDbN15KZUK9SkThDyz32ye2grdTG8LPUjt5k43bnFrdq6Cd2AfxBTGosfn9KhMFVDrEwvA3URRnR",
  "key14": "3N6LyHnsdAcZUCMetvac2zn17mRixxdCr1KmBy5VjP1YZm4wnG6koiozGEQbUBeFW1m44V72ej9SaRHDAwybjic6",
  "key15": "UsNkxwSpUVDGPxHB6N7fzs6VrNNf5YzcFvKsm9hr8Bp1xgnsEhQRD8zrS1Kwcwy8hQRQexh1PwjLvpnK2p8vt8V",
  "key16": "1pb1hLAXyZYCXQaAryxk9AW8fuswVVCd1UUPGGFSEJyq7DZS7ntiUDVynaskdPnaKDgBB9AykGne81Nxu8nkgQE",
  "key17": "5aTNBP4Emp8mx4Uk27VAJfDxcHES49SyQDki5kwH8483TSxa2VS73winsvEjZgeAg4LKDU9mT54KqW3ih2iQepsM",
  "key18": "3vtdoGx6aZv8A2r893shqd2iPBHTf1RfhiLUZJ3y36T3VkBZS4q8r11ztXtB4Z7vT1nvPTKE2aPG168nMCnYdwJG",
  "key19": "3LznyzsRXDDpAaSkA74JWDGJreEePf462h2LRxT7jE5NWHZ5dthUthM9Sg8ZgVvjYAGkT96J13uTegMFrxjXyy5v",
  "key20": "3WwrxETohStay4jzWkn88pFXfwDb1kwhRD4JiVaNMtACe5soqqt1N6AWWvPxPJ5Y4SDYrvhryrf6EgkgHw2x8GX2",
  "key21": "5BzvMxR4ohQcJpdQ3ywE5ovVwTUck1EaAF4PbepoSJsKbk2agywdySVVm9iKkQw5QGR8PSry1RNRaAvUXmiGYpHP",
  "key22": "3JwyqE5DL6Te6PCwkoYQz4Pf2ptucFxQ1HaCEEMpETimWeiy2HmYCPqWZJjuPkkek9RL7LyeMsPLZDbAKoGzPrX9",
  "key23": "32DrmhDCcxhcs7aaCwZyXeEc9DBHwuzGmK4JbcUy1iDqr9NK3ZMVvuEwpgmMiMMFnfBjdRu8bM13GnFMW2J8723B",
  "key24": "3GWwCi8gUwHhPB4pLrB8sinG9tTyMEBEFdw2iXcsPP7dSfcmF3TyBqzq6N2tStLQ34wSS1wvjJ2KoyXnWM7FneUg",
  "key25": "3VYq2nNTG9kKhUvob8yrh6opMMQhEjxNewtYaACsJQdhpRWzVH8e41zMkvMh9VEFNsgtThAu5r8iRuMWr32kaiy5",
  "key26": "2iUnFpQ4U42Ev6wBxMw3QxXUAxfEHh9M1fwvXqT9UAxsn4vRjNMfeZR6q3ZXvWsRChMH8jUYKjUSx3sWT8WR2a1B",
  "key27": "eLWJRFzJtAzD1n8mJNh2wdpv3joPiQZCW2bMMdfAFXXRiuNZ5ZfV2KvXLuPrVoAStUjfvmCS5WEAQg6c5p6tF2r",
  "key28": "3nkXGTkGibJBToaDVEZbTHo4J22fbYMTHC2EB1oDUrRqScvcxYc8XcpiLXmkhBotMAqGN5VV8CGThnnvSwVNFLsV",
  "key29": "5NgCU5qCDnSU9kE6GFEcjNoDsSaSBtH1uvCZiwsoTyD8MmYWXKzquFMun8xqk97jJ2LYSYrM4fZBbxFKmrsQGCad",
  "key30": "234mBSZRpdSLEAzxgYk4xTqtwYMKGFfAyFusoRgXYum1Gz5Ta9wGFxJpNk2kStWUTwWx6PoHNXZRyRFjU3HfRcv3",
  "key31": "2EALmsy7Tucc63PzeE5wsS1rnVK9HMvWYTzmjzrhLzXsQg3jrdpWe4bWJHSKkiEn9egdGnyfP5WBHtD5uzNZ5cKu",
  "key32": "w3efp6sr9nRyzpnVXcq1eqEbEyyB9BUxNCn9Qpg6uyi4VuTP9ToGwyyvp7zL2ufvAaN1Qc3azDhfHa1xVqmqrhx",
  "key33": "5qRi16KA1A8sYRhd7YPyTxa67WsVQSDhckbysKTrqdDiPhrrGDauNmX9DPbWkt7Tk6AXPDQAfsJzBzPwzZugstaa",
  "key34": "2txfZEi9F1iocXcFR5CLSNCrjzjmn2Zf28SeWPkEckHE8FPM1DF6zCeD7YGA2iaS6nJaFzCiaC1B5cUWFVk7JsCo",
  "key35": "z4rwsddobygDKvr4mkhjazncf3faXRq4KU2WHnUNAUz6JT6FZSjgPsbeYPd7c22kvjtUwPusTjaxeJEj8dZc4GV"
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
