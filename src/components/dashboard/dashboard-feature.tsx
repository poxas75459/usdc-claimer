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
    "4MU2A1wibMjkKYw8PBVKRNzV6NHpyLWg3XGLVvs2RW4VQqaHSZFwxwHAZwHBhzMHirsPBHxEwwVGBiZLTog1k6Lu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gu8oaaM55jhXn8dg8NhHPSEFVzAqZDG7Gprj7JkZjF5oHMTy81wbu8FCjox9W1pp4HmzvoUpkuaFdgG4XHLp6c7",
  "key1": "iDiwnLjWwYVq17pAyYTe3RAq62yZph7W5q4ZuKjXAGoirwDZ9S7iwV3QajyzCtYkpuZhJueu5Ez5RjX9kLz3xuv",
  "key2": "5akNZUvSeDMdrJXgXkCeUUVzm8hyA9oXZQWGtCbf6mS3tCDyR2XavfpRDPTYzWhNTFYyw1hXm2ZXvksxR36h4PR",
  "key3": "5BBYFU6m2c8G4Qw1XknapEn85AJTXaph61Zr9Jku73wt4P6dBSiwSTw1T9eqYq9xh4zWzY56R1oT1gM7vvrg79p2",
  "key4": "63iA4PEXQmsX63F7oH14i37ASmHUxnmVfDwZ6xqU2AG6jVCmYNF4D4odmsNNu6F8dsCS4RfZMSfqiPo1KqZiXaVw",
  "key5": "3ZWbyQ4vFKDrdvtXUg9bS79UZ5hSsMxLmWqUr8irCj5AGPun9SPe7zEbPKRACvzrzRUanEcLRPUBDcc4g1JrCQcv",
  "key6": "5n2ZnHsrpHHPtUBY7qhLaujxu38GqeMGgH2NABJnfG693BgJqcDNNV6SVk5YvMraAVyhbHhh8pw1cVgAPaaJyYtU",
  "key7": "2CtHafb61o89hNLfzBadW2YhhJWqSH5WWwUDcBcUX2BS4e3j9LZve6UC9mAaofSMHqVayH7EsuKnmooXhzFRpFWX",
  "key8": "4FwR45i78mmBKTXGpBg6ZYSYZcp22YhPhTUTUm21qoh2YPgdyfykKDbAcRHtixGBMva9BW7u2Y6pu3F29BeHTT4z",
  "key9": "5n1mi77w9HV59i85WM8fgrBeQfQURYhkuTX8s5d825HaPKUBwVxi3h48Kn8AXXiv9yt7edpfbSAwogoU5XKtMG5v",
  "key10": "4RAStFuwh8a8e5wfCgxjCVszWoDfyLVFTShTjtCWSdeeVoK6WVF83GdPgCqcvwPBa9AxomLAM1wmQx5pVCsRkL6M",
  "key11": "4569GjVNrsjsLK7UTQFTrvbaWZS9QYXWuog4SssiRoxv8RtbaJaBLPRYfRiMuFSomJbBPCvJDoy5UcqygcCUQcpV",
  "key12": "LSVLP62FC6FB1AMZNMrtjs9decRKUSfeN1T9wgi119jgUi42B3GLVgeXkyQWvzEPNQ8hXay8KPaRdQNBgSbEcdf",
  "key13": "FqKVZoopLxzxvhWgvNLfmmy86eqaFXVaVjNqE7nZEeQFN3oDXva81JWDu2Qub4rzGUArQjp2DdsvfQGwtYUQdNN",
  "key14": "4DGY3CFdpLYFmPc95NZZM8QddWL7dU7hCbkfKizBknunec8tS1FHmrT8YNKCZcrjbBaPF7nMfPmv7L5GXWGjvbZV",
  "key15": "3Z85oUZhoeRNBUHzh2UvpfcywYcRTJtQuSqDaHwJojP1HUB8EY7FMd9i79o8qmE9tQ2UFUkF8HXeUG6XsBFnKtmN",
  "key16": "6ZdcrgsGezoPphQf9Kewg5TCQvWYHC6V1SBy4JXEvyJXtVSzEpBwa5tCegHL48Do8zStKPEzwGri4KQD8VDbmx5",
  "key17": "4EVYsxZFoMebegjW7XdvVLTzdNYhiZgLFTecR5byThGpm6UkKF9Y6gA6nYp15XFnnfX2uXs4Yi2LGo1kdPbfQoPo",
  "key18": "GWDi5DdyggWHyaCq3kd3D2JAtscyTuHiQUBSJj9SH564xihDbjM1suhZZY6wNpAiEEvZgTq93Q1Bcphj5PLY7Yv",
  "key19": "Qw3nBn5nQhd95VEyncB1WSZBVJBhYxRQonRzaaUQZD5gbswsrr1Lr3xkrYT8Cgw5WMJU6emTgMWstis7A7Uy4ec",
  "key20": "2unWspKsaXwCbZhTmVzcSc9XtBQNfeSkE6FpJtx34GzS86y77UgG34ChWbz5iTpu1LgnPh2kBBRe7eEPTnSiMMH1",
  "key21": "4jJt9Y7oXdL3ikTEAuzq3MMXsekjxLFRwzRefcongj2U5eTho88K5UqoZennNYemJCRgUUB3KWM7mggL9htTvwkR",
  "key22": "5Qh4GXdcF3jw6UR8PbbPDuJtYjQVdQAyBtxMt4zpfp8eKaxbYQQxC2SgdxYGuLDJtkk7qeVzUZ4anephvkDn34PC",
  "key23": "5mKwkLCjQ88i3hmEbrnESHdHdG4TYumShkfu2L78k7mEtnumXEXUk9K8CLfV89ewEbT1iQCAyR7C72CU8UjhBeYc",
  "key24": "1233bUGDuLikeBn8WP5mxMHLH5o1CFRBWurtMYcpHSHV1CVkhQ13jiK1S6sJgQLLEiK4uJqiuZF83vTiMQk3TCfr",
  "key25": "2uTjQehiAB1FYXURT9ixxWtwVnrVycJhTfPgMXAkK7z5R2pcb2bo51wmRk6tQFQj7DMzVHiK63j9ppi1YVg98B7w",
  "key26": "2p19Lrxd3Kob943SETMZVKUvPDtLm8NoSJ48pcBEX4cyfzaDuZdSwnTmxnz76C2gcrMSr7P18UXukGCYpr9U7SiF",
  "key27": "4YkC2hj47aXNAzSJMFs4nD5gCwDpfBqeTjrVgASA5pyQRLj9YFGyPNnvBMNgv7KFEABomyzQfhitZNPUuD4NCx3o",
  "key28": "4jfnuYZCkQEs6fCxggDKWGytxwYzFdJ6ofWNe5C6iBGRiS1E3hYo8EGk9MmdkZhMQTT1eVpVcjwb2GYxqhpfJ51q",
  "key29": "5Ks6DiS1ThgWDXYDnZz5XKgyKgiDhFWhSPVa1DEpwHktzAVFa49uLByQDj8zb2AabCzquQDGpCakh32dKmDGf4LJ",
  "key30": "5oMVs46ZWUFs2iNXLzRDq1bxnWuCXRwPpDHULV4AtXPm7Rc3my7B5X1L5U5twNSf2ag4vDzAvXo5PCs4Yr52ca1b",
  "key31": "5YEh7ve9ZxvKg3eyjtTxzxkxczijHbqqB17ef1CbzeSvsGJWvdw3MSBek14CxiJcvTB3CqfEGNxdHccaS7p3NVHW",
  "key32": "4kfq6e59GbjJRFssk4JbmUXf9qt221TYDzURkMsbJR13CoFsfNBVrengZt2HGv8eD4H2EHtRY3tf6qGL1891jM1u"
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
