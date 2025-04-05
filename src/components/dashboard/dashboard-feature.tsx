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
    "3WHjcNxVHkXCXVGVCvJRsBijhkPTVx9UrHERXyWZD1HvMJaHBzbrbhsqky3nKYY62NzKf4bTRLw6Hd5vPAzPt1SP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "we1Er8TRv36DHjL4GVWSca5PUERVhiSbxDAW5SPpdiKV91FdAmtUPYqcdFNu3AJLp8igyFKTq5C6DUTtHf1nFMb",
  "key1": "CLqBKdRM233kdNPzpMGSWxJVc6uEX46FDYrkUSfb6rCLtYAiek2L7qFK33MmqUV3zoo4vrpj9TdErW6MwQLuCox",
  "key2": "3nwGeqUw6WAKGHXSzHRujFsogaoAiHD8yk3EvUEseUTgVSZzExzkKLDFmSrR7rwY1DxVq3dtJBfKJhod2p7CWBJP",
  "key3": "tt3ZeYqV9WwJUTH1QvdMXj2cj5qmFcn47BwCw8zNBn4us8boLoJ22a2wbGp7z4qFqVGp5wuZPqgCr5CbbK9sPTg",
  "key4": "deFexJp7Kstgws11pkJW3n4d1mPhVZqU2erXioSKLx38oayLJM95VXS5LWLvGZ7PvLxzgKjvRQK2jXvg8fmGyew",
  "key5": "5mw4ZHFSXR4wnU3hP4oTXVMn6ruyGLoW7N8mhiRzRpWZCqf9jDU6ztEbbihWQnYvaRj8cx2qJMeb4RwT2vqdZuwM",
  "key6": "3GXtwAiP3617Yxgx27cdadkSJ8CM9AySkXimcbYce1zTvtbmJ88c1r3F3Zm5exPS8jsnZRkzsXN1xqk8UrvPTL53",
  "key7": "5snSaSqRK442JQnKh1dQH89g5aMpUiTKE4ExsXW7BZJvyEcuYUWPwNgpq3KoZHJgEu9hexRzU8h8CpSt3ZWyTSx",
  "key8": "5xCqy77M3w2zobbrUYydzAipzXA65X3zvoSXAG7DurQrfeBKPbMPjzkTzzEVk3293mvF6s1D2RZgNG3agQVnUcon",
  "key9": "UcJkm9uKZmb9SygNyr5fPxjfVzbG96vyuNJrNaNQyz7hjosjdU7gTTcV9JRNyuLc5du6FToft5P52v9Cwfbx7yg",
  "key10": "4PZRVraTmkzr7xw4qrZLLriHKEVcaVjr7X8b8WCcqHo7AoRRCN2Hvh92aGnjBUawUt5HPCdSSrGUs4ed6nCkiaTF",
  "key11": "kmXtwCwCS28E9aEGyEhyg8oZUFThzqxL6VfELN43BV11nUcF3TETBeSDQQeHRgUxjQqZjVDGd4xJazYv9tVGbeU",
  "key12": "JwkR1ZSJ278KJEcNZtkaLRo5vihMYHHFTAsqwS6w99ZFqJkLkkCByyxKdDyVXffTbEgSPcYSqapqS8vWkty32eq",
  "key13": "3SvH14rhzpGuju7msgoW32Uxs4RjagKuvR7WYz2oYoUCmqUYfj22z8Z3trgspkbx2Jptgoxuv8GHgXC2p6EeG345",
  "key14": "324ZVUBzaHan4VSxhPNNRTJxXfH2yYkGxygFmaLaWKtjqy1JKAsk1E6nhadGeW4RShJyasQ5jvquJjq3FyxBtWsB",
  "key15": "5jxRy6jZXhBZX67HRMBxJHEaqZKUZ5uWJuCWA1cxTpC6EohyKb8vbb297b88cYiHLJsMi279nn19LLa8r6427n3t",
  "key16": "51q3mgnzb7AVdejzRffgcSDPf1s7CHMqycJgNnVG63ScjXV6qbVn5KKdwzWNaQY78QgUriFfJxVA4F3WptxpuG98",
  "key17": "2wx7nSxrNy5c3Yec3mWihrGkQw9z35WC2x2rQUP5PUSbtM9jAcUxFQKzdfXnrTfmzTSaZr1XgNoJBQA8F8ZJWBEF",
  "key18": "2DEszWxyW5DZEJi2kMJHKiePGgsG2zqHpwjgRSyy3dDciHeNTefYGew56z38gNqY9A1zQZdCVQPDJnWYud5uVRCz",
  "key19": "pkXtuvg6BsUu3Mdqd5sKeYHcfHzQgHyg88TfrM8LcMRdkY6nVdhVx66GsR1AiyqcmF7aSttj6zEPQN3nqGj5Pje",
  "key20": "2roKxTZqeU2mDdMCb7w2tA4DGPHeMdNyzBV8yiub8qww4WebjiUQfT5BTqz1cQjxtmJGpdGpetHYsXTFP413bZtp",
  "key21": "2zHzPEk92EKX746eJaYSbd18CEVher6LGBFV6nkGDD1byViQVPxVGchnb5Pks6x7gUMJ7wUuCa7NurxNUaxY1uos",
  "key22": "2L4hNTm6Zzwiz8o1au5JmqbWhiEiDGYXSG7WVj5YCYJhzZhhH3GG6z9MaTFgsCuNCcE8tfSr8Vfhbr61LEXWEdNc",
  "key23": "23VHiwRbLDxqEceDTpMyTqZCfxjwRwbcM4As3nZk1LykibNSD5khdeXEeoPNnD6Ni8xY7UJkv2rGNzwCcTTThpwJ",
  "key24": "Wfw9TTGhi3WmfNd2AVgFjBgTvnBXkHwjWV7uaL9tJG95X8MCr5Rh4vyz2kz25ST4cfrV3TwjenginJEaxMu2v3N",
  "key25": "3enfkeh31Z9HdoJrVPa3KHpFjiC4JELCaERgDtCEAjStXDxEGo1AEPHbVwgznCeVrkpnyiK2yohdhLekntdAGhqY",
  "key26": "2GUAyRQEFwnjwziCn7Jigxx8MYhhBSjdSu3VxpJShQbBeCcDu6HjpJC1iRoF2ecZzmUsQfys3YXZx1co2WkVbijd",
  "key27": "5vyJUPzGMxbXwWX4PSf4BuHUVh5tod418HgWeKLbpq8GTx7c4oN1oieaCLr1QnWZB2jwyv1LbZsTUFGuT19gNiAN",
  "key28": "4K7wG1CVnFUkQiJUD96oLeRHJDrc3FzVrPU2c4mbRVWsnqYaQQ7EmpjGgkXmQxf125cPaU4CcvGtD3LfdBsfFfL8",
  "key29": "58wPQ5dBdvdALhqYeWCnZpZXzdN2EnX8V8LBsdL9QHnz78wVtPSNkwrjLRKbaQZkt8KP8ppRuH55Tsg5T5gcQq16",
  "key30": "phCFZEvmUafr4LMyvPywBukq5A8oyrtYja7vvih963ctRWZPxDhWgFdeKTjrJX7dKNCMjXWmktLP1PKsQ84WNxh",
  "key31": "27xEZEKDgstrSefaFiBs2cLktfigsaYXX1rnYbVpbUHspgqry7UCcvh1p5hbVSCZjq3CTD1dpiz8cMCpiWZjiGWU"
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
