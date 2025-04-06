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
    "4fmVuP7HwwEBRpbcwDHjxQWgrBiXMGDLwfg4CajQLFRWtFZUiUBbDsB56S1U4CNMQhEnD2YptugcSjqWKq42LTZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3igXuw2aaEYr1PgsQz5AjjfctxqSADfV5hPXK9BZoR6Hz1usCgxDAQptbMWTPdYkmGrdVYFbN5eSYdvaQZw2rJ8s",
  "key1": "2nfKtSBweGcRAZp8AcpXUEcHq3YHyT5sQ2MAv3G1CGsB2buNmT8HMGKJby5jFeCcwmfbEfaqeRTC9GxYyAJFaArB",
  "key2": "4aydw2j8k95SnprNkwb5kZiCmFpJo9B4duEmsbp9UjSBakQ1zbAatzpDPHgLgiuBv91ee44HWPB2Ph2udaFjNf16",
  "key3": "4qr8vDEyLEioKRntPmdmRyuaSAp983wj7n7Q6pYaqun3uGrjFGW2DmxuH4fqEVZ1hMveMcw15LVscnU4JAwTxy1b",
  "key4": "4ZKskdJQ3VPRi2SQNVUnKgKAh7gPsg8KUAoUAUS5WVf18CdVJN3xgrMqRCBcsbbRog64A39GrpY1UCRM2V5cJ8eG",
  "key5": "fSyVV2WqSGgCDvycvHokFGn5xNxki84VtMGT1v5ut2ZxsUv8wZABENmykhZK7AqDPKJ358CbkQRf58CDAKdaMXJ",
  "key6": "WZD15db6h52HdUCdvWgHjWYruTG7dkDhB3oKqSN4uKpPUEUs7vgMfwyVdvJEru4y5H1UmhRbTz2dXbxpWE9WoM6",
  "key7": "67XMbxvLyayf9GWEzLPoZiXXLxNugQgjydxbirWJNjV4yYUKoXtyJWe7QFiwXBrwFwEMBRFN1VQUpxtp3azYPQuc",
  "key8": "2yoXeQqpW8rGbpuNmyGHQWtYHgKuXq5TUvpRVurokc6DjkZ21HxCSd23g2TLZf7GPxWQDA6aKY2xBPCAgLPpbrFX",
  "key9": "3f3zLx7j93RaiX7d2kaGcaDvgdBEajz2ptkZGf7wmfY3Bnv7vaDrsPwQ7uEpUuJfs7ncQ2WSTC8uC5rFrZcnz9fE",
  "key10": "3nnsTq3yGnKDURsXnCBPzUMCXsFqmgTnDtrubaLsMJcnG21dBnJF4Z7wjDgUNJyxgLg1VjxbGpmUty5GCmjSs9UW",
  "key11": "5aBjNdtBQoZwpPX7TKiZweKsCo4DQoZcuQYX4uTo5D8gk6bzeNCMwMsGBqjGM8V7GLNVH7FYPdNBCeMA2CrDDYj",
  "key12": "5iTHV5LMDuW52sKejXBQn7Gu4qyN4SQ7ABzvfZc4u9CLHXyNzZbWswa9cSrYm4rXA791KTLGsDJ6SnkQmJMfixHz",
  "key13": "6632T36nvPXL3zPPAF7udiAYdXTY6uhGQrPWCYucU8dMKCbvLjSAuCP23AL1yMJyjLZddeQLbB6N6Byhec8Q7ruE",
  "key14": "Fg2R5SxReqzEpujHK1QT1pLeomp66TAbo4BZBGxHSFUrWKuTU3HucfyfRYWaCvPztcHFC2H8ivp2mGKwJ6HVay6",
  "key15": "efhRTPvHu6LyGBYTV9uQHpdZfrA764tZuvxXZ8E42sGJ4uoEN8MD9L4qha7RuSUn7a9PECThWZ6ZSN9BNTCvCRg",
  "key16": "3GHztcWZac5WbJWSQzfxTpaPDDzCedpQzvjMePaiiaD3NfGMJoAZAWCAbFrSnGoYUfsGSsTJ4JjBjnBETEbpdqqH",
  "key17": "23Cfff9hmD1mKykeE7bXzrAFvsUBuZV6hYyHNUWKdF9WiDUjwWndD788qJtqkUrQYQUHQkXxinkfUyDB68RvmqZ6",
  "key18": "2kxMBEHHg2r7X38JDptqT313SupNzdZMgBHKzUm1pXjosZ8UKCvf4g714Vu5cZuWV4G2aJGbhqbNACiqZEcAdjw8",
  "key19": "jpVrSMAj4TfcgKLVoni74EbNEymY9hUpH3jsASTQHeXbGRrnsa94KcqASA6DsYQXnTeS2pTP27ritcH4iiZMVJ3",
  "key20": "5PPx9qj2JFxEKRHhvCNWAQjpk9QPnoVTnzjwRiFskm9RWLEocCQounK3kKBfbtEcCcZoYtZ4aVkye6ekuUpDMSaq",
  "key21": "3toDzdFXXjwarQmwpS5hPuakmQGj9p5z111FibR7foNX8dnhudxYzfzfrzQzgDnCWzQF57BHaXjcCfVmEchZjKZ1",
  "key22": "3zp5PidDbjnvaorbAMCaj9LosByQuu4Wmi29nwotbWRgGWZF9mT8Skpq3fNX8xMj538FroVkjUBQhmSjpwxvu1XN",
  "key23": "2B1hF7DpVpK18YKb3QeHpxSryYF4EMpq28W8xxCJ88KJ6bx2ANKwWfuHHxdPeTtYfZ1sRcYbcgZLkC9wEmcJ9R5L",
  "key24": "21bMPCU2N5kfNJcURHYQDmpYexBxBWazP4tpqnb7NLTLvFpkZ13xhBvcEKZ59jpVhzNbRcPSf5xsuWoBhCbAspnT",
  "key25": "kKtuRKSAYFunbNJU8qAxusWKoCbXgdMe3BV6v1zZdxbQG2saFXRrQWNXRHji1Ja3oE4FFrjNcNnnKsEGu3rgyGR",
  "key26": "2saK7Ph6VXC7MxhJqDxNWAUS7FmjKY3ei1LGAP1iYvX4D26TjWMZNgHM3bXjkXsGHKDzBexhnVeXvznQdwzYx89q",
  "key27": "2uK413FrkABiJgEMAHmkkLbGaX38bcT7P2HCZnCFgTPa3iEBLY4nBRUfYakgsyXpGh635agkXtYFHC7QvA7FhZau",
  "key28": "23wJFZhWGosnB4eePgM93R6pNpQqES5BgTe5j5jGArgySJL9iLi849Kzbhpzbf5yHz8xcpSSYgxc5Dd3Egi3JvDo",
  "key29": "3hPt8TF77QHG2pUpDUsfjVsCTL7Ki5Zpsdpo4M5Q2iKRibfEfBmC7RcgJqhMoRXvXfLdmVhbPpBfqHAdzYt6Ee4n",
  "key30": "1tET1hWWLGxT3pvzHECyfVSa3e1yMGyHX7dH2hpnt7fQ7ZDdSV9sWR3s5Ezvh3xH3Z3HzTmn4o8zcgzY5dQwq9u",
  "key31": "3y5AQNV2sjESn8vobTS8GAPowWqHEzRdbHzQUUFuiLAeNapQoF1ks59HcUH4nkrhkAeLBuabvixeV7koZ6UM8xHX",
  "key32": "4AFwSgPTER6GAUNPjPttxuLH3npAJqbdDDgSkxVwRTTyurV2JViz58RixCv6Q9kRmTUV7fubihDw6bqBSFh4UBhe",
  "key33": "GPYSu4N3f9qiMtPNEcQBNqQDAr9UPxDAAUDWTspqnf5YS98UbJHD3KvwY6MYrULDPLXZcYDYEZgTcKbtkmEpG4C",
  "key34": "2ZZTtZ58pzdVmZYicggEZWN9UBAkU36tP81xrN5j5VdDDW9knBojNNSzfZFfgW8ViNukPBC8jNmLFheS5HxNKtxd",
  "key35": "3RHgUL9sC2ruttoX8wTTp3eEKjezVrgGFxLpc5d8GcrN9bsaMBeTQxApKpqML86ANB9R6GdhJX6rNRwB1RuAmvcB",
  "key36": "5eA69gqXJ34WMDmTrmZbxKhHXWSCoJcAGPbTtD9tkZXvzJqy3hPyGBEsecn58Sd5PMYicKeyz8Jhv9EygNj1EJ8N",
  "key37": "hjxrmho5JyCeJFfSe2zB579FRMFcNNBMyo8HVVcuqtaiuBx6g4TSgegMQ7Y46HxBoiYiKom3XnQbEu6JFJGo9VC",
  "key38": "5wgCQfDSqYv5DzHhBJucsRbwArUBJ83awH4te7B4dJzbrJf8hEsGpdTPTGijRtEWN7quAU8LvmuHGYvhVZtChA9U",
  "key39": "2gi5NHECcCUw8C8nhraWPqWfHc3DfFwS39BCSud9QSGsyNzQbtuj7aAiCpKNMGoW6QwwxEpiiQQp2gUnF35DmAwE",
  "key40": "PvjaA5pECBVXMhgbscAbGwcnxgZcUCCv2NGgjKocL7QcPdNnr64o387y1ToRbrJqviPQkzv1YrwA9qwBBWbAr43",
  "key41": "kmCgjxp1WXZjDwyWFL8HQZKYDZNbWQt6ftJc8eSu9Z6zjcDDAv1b6CM72bSTeZ5WJRb4pTVSWPM2MdAhQFnZaAa",
  "key42": "2YJcWPnCkTnPVqUcfzTaxA79bnR4Pmuon8mUcA12JMwUbtRA6LnYuoGsMRub21BKSDrxkBDpSeYP31objnrcYJWJ"
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
