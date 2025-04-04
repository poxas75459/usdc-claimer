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
    "5kWRHPVUtUFdmCaocYYTgtJjVxmpEJC5MqVDQoX3x2Y6ruyzxfkFDoZi3dfquwhV8ueSsZBXjU2V62ocd48RRhZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WdDTMHAwti684MGUVdfyYseM6poYPDS4TDstcwze5NnUYxzQRWQYvB9KGAVpjMoAqnwsSmcQC4VFR8obF15kVAe",
  "key1": "p8JaQW2xA7BhyMgH4yDyAToZF1Lx3TWFyUbFg75dNHCy34sh45bY3JjjPDyJtrEpMstrGuPjpejC8omCa97wZpV",
  "key2": "25wypupSpgzxwXUUCX4cSrkSUmKYKacHT8jJMjaCx8WGrsd5rZMQVQkMjnDL1PY7WP42p36gPke4PNPbFW5o7Waq",
  "key3": "2gjp9esmUZoJz1EErf2c2fe4fnUbtFMtpQNTQYViNd2E35BdAcgnGLdRmLagP9SJs6SvLgsrVdD916ntfxdMtNJE",
  "key4": "3zCBALu8aF9vNdWLhkDo2SZkpLJ673oaLhthWUJ9hrexjAjGqn2Z8ZoGsBzvcEXRyjGGwysu6AXmNukiUoBKtEkr",
  "key5": "2phoPsx95QVzKiyJPvVAcaGxvMPZegpSSNpYH3EFNTV6j25ZhNqoAkMDuzcxA2Vio9UMP4DGiQp1bqeiywhKvCjJ",
  "key6": "2Vz9QR6crCEgtrhrP2ki8ELprMcXqYJ6xokJFTCA5rQGHN3b1TeUmsGHWLfuuj1g6Gr6Y9kmS55umP7j6rBd65Qs",
  "key7": "5y1fKtZjWQLPxUGHspfvqyfRmUsQHyeudiyXGuVNJ1YdGnfbzjXJpd4XAhmRSYshbPcTBXo5kta3mNiBqa86n3Sy",
  "key8": "PzdpP7Gf1V5Jh6qdxyesufti8TnanXN7a8EF1ZBdjw7A7murPovUd3MnKn13jStqjMTMdLshCjnm1aa7ry9aKQz",
  "key9": "2WW94SSLJgp39GrDsp7UiHRmKqQsAnmzLe8TXMwy3XejjogrqEtMc8LscJUnJA3DtEkDwmQBaPPJRXqgQDnPKwqh",
  "key10": "5AUYMHz7YSiUSNZwbpf4veQH5MEt1LC7PEwbz4nwpo7sQc6FsnBmKXXCbcRzdQRpErAztGp5yxsjP9wV6eBowxbr",
  "key11": "VYFyRWwGjN7QrexuHgVv2H2Dc2SZux8X9oTCJXT4nBeoWJ5746GDhC5Dkeih2ZurxrAjVpfKhuVGXGBve17dxQV",
  "key12": "4TTA4AtmgQWbBecyrAVoJF79BR2Tx4VK97YPvW5gB6iaSiQ2fCkZrhL6uSWARGmjVV1oFwhMowU3uUqhjYbMbpoB",
  "key13": "5wQc8J2KkWoHNvRAF5Y6KkgxaQ1NUfSBqpodLaCQHRELGtoBQHFXWyjAb7n9AcQNoDuMFTEMhPv7eAoJE6hZa48h",
  "key14": "5pabDfE4gZrnv5Gm9GpjM4VKMSf5RV1X5JNsc82XTQYR3AiFqMFn7ShBnLmebLt98STrbk5zamwytrv14Woo4YGw",
  "key15": "3bV64zUVKT2aYi9J6UHqasECBk8gQNniCWkjmrzZjsy7iyu7bix8vYRQs7ryUV6fxdGfrcwqSwrU7kZum6HRx1th",
  "key16": "3mHbCiUGi597DXPNMeTjU6Nmgs1Nf1fRN2pWP6dZ3EL1mSzVdVChkcRbmYJyVMQztKkbPtk5bT1vV4T6ZcjcT1YX",
  "key17": "4kfgebpb8CDK2MJ4BTF4qKmx3WWozyVMQ9bdp4aDkuBfsVzBVqEo3EBhHeLsqwqcX6yayANbNtYSLvTYyv9rHPTH",
  "key18": "62eixsVA25SjwjU996w9TFa3pxj1KvT8bd2kRfcutYaC8oGHvyM1t4ANLujg4L6aTe2BacStNhFBv9Q3dVpjh2sM",
  "key19": "xNAGrVDQpTArcYWZJ4QyP17FibYNzGmwkyMLkzcjA42ASbEgb9TxydMakJg4Jc1c1ehbVJbgW8mnPHrvixUkWTe",
  "key20": "5bt4eAYSy6V3MxvWtnAAXhPgLQigoGRMdRftUzPK36MXBcsr8UyMc4o3ZKPByqjTsP4MNZd8WqKjz4ZUv4huTaYQ",
  "key21": "4v4mEgioUPCWgjFawSEokzionNQcPdW7jc9ZVFEKSUQ33ALNA7QfWnyRUi9mUsvgqwN42n8PEFNgzPgfJ53d92hF",
  "key22": "2Qg8EjV7iFtbVxjh4TAXgyVxnuZnZPWhGMN1vwHTR1Nh7za1FLEiyVuZoE9cH2foFK4c8Zsq43hAAmLYxPXMDqv7",
  "key23": "3WmEW9RXquQaYeebSPp4RMNLWSznqMtgpGQ5338zf3ErQbSyraevMuwNDMvfwVXERTVRKe9aYFSxDmn34B5rcQSs",
  "key24": "5ajXRin53oCbxLuW4kfGeGqthaWaP5U7S8ntW24QLjXeEcK8jDkePVkDNEzHycr4rnrVJiuJ8D4u5VttdANxu5Qp",
  "key25": "3YH3DSXkSbLwgAsnganB6NfG1a7EQnXCUJGzrfFTCpfc3pBnAsUMgcv45hCcnYk613sXRA9Voj7dCpMENYLCuYv7",
  "key26": "5FYfFsxCmmJmJUu4WvFjvDXhjErB9U2Ci34Z7fLvPg6Fa7LzujDiKdGGzxNAbwCE6ZLFuUim8hmP7y9DKh2QsQhk",
  "key27": "2uL6czFy4iZCfbb9VzD4bHV85PBbQGAtXBX5hMZNC9iVRnLMVHucdNRuvgGRgSkUYsTZdGze57bBZApBiBJaHFGY"
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
