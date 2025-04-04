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
    "3M2JVsYEb6SqjELXZobZBM6DT7n7hy85N32WB32xiJmsWyYoUVecPohRSdRCgWyhMhU1UbiY1Q7Mrvci73sorV91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66M6WcAMCaXVKtZNhKnj5NSeEG8wTGTU8BukrEDM1eopVvrDQUx3ZDCT9w1oFBgBcwEXVxg7pzKmeGuhnJ1LFkco",
  "key1": "25GXQUBRnAmxGP4rcmLD2YfuF9n8J74ixd625E669F9wDrtHTGjenPFu86FADcGQ7BgcZ5ceWEzmph76fAvD9ZSX",
  "key2": "2wyNRdwDh7mVoeFj1pGzTYoQLjkW3Xn3HJ7qzH7cXZ7MF8LSk1cpJnFVhh1mQaaobvQk294kvmduToo2hDuUJzyq",
  "key3": "4AwwT5iyF6cH2TRdvvCjXNsrAkpv9kCmvjPRZQP9mHwoR2TPUfgVrwiFvzbXVf16BFXzdvyqyZVEwx2zZzCZRoEi",
  "key4": "65nEs6YThiRhHhDNCPEtLjwXRwP6n87uJxy8acJnFPu8M1xVnZu5Jk4AbqL33thw9byx5tQVwvfkZh7UGNUSqEd3",
  "key5": "kiL6P6nWyUGZZupaXsZZHCPrjzQDKxPsVBGjLxakgo1gZQNXwcMFV4Nv8JXS3Qs5NoL37RpRjMQauoZ4mzxw9ez",
  "key6": "3thVVSBx1TJ6UmsPucE5uimz62Qbnaa82iCpyHCHtAQam9mq5NSybBCpDHKvHoyfvzMt7m6cqkXHdM8QrPRcJXB8",
  "key7": "R2jB4QjG2ZU3MMJSBbRmi1hh28daAKwrPeyVX6gNfhjwUbGYqaZYkKhGd7yiwfxqgEqSnGYZvyJqHfzB43rgpyh",
  "key8": "2LdvVVmZusvrQ5sbJfP9dPUrY1DYkUyz7ks4nkffymMa8FxGwuuEZckGMjAw3B1mEwjzNuWTo8NHdE13LbNUGvsw",
  "key9": "FkE7YfW8HKKyiJshBL5FGhKBs3WYFQeVg2RU6grL76wDVGCADAGZE7dQ7eqyBmZoJikdj5abnJe5i5FULPawwVx",
  "key10": "5ReeNHRZ4RfyCpkXGt1qRhLgKra9FUtEjKwWVyXnxC2zPCCa3C5rhNuCMV7x1hU6zNVkLxzV1WU7ygoPX4sgLtvJ",
  "key11": "2pzTkGecLLSfPhvxwybyEQbMvcNVgTwn4b9meMNLyKV4M1wzXoMd7MojbZqRASbMtnhmEsrH3kwZWx2Fs4ZAz8k",
  "key12": "3WkAMctFtxV2JDM5obeuHWQNAQY3vNsmqEmjxk82RPGFM48EzRe3aip2SpnkDHB96BpdJRRvVnfzXtW6TwihUb7Z",
  "key13": "M3jpFJbDuZ8U5FP5n1ov9M8uyq5SiTWW4VPGaeHPqXKRiHhRHTHp9SgPCUM19FU9HdVCqUxBceoiYuESAeCXgL1",
  "key14": "3Npg8sptAZqPhhXgpCyQQEjraGJzkZHUUYEsGbA2YgVdqN8sRoG3zPHa1x7GgG98SJDdDZQM1qUogFC2fq8iNPry",
  "key15": "5Ge69NvSLMFjxKv6nLARM933YE7JcMDtJXpSxJi7VC2TtwZJyuSuRt77raSpuK8wMwKstSasznuyzfxmoWHYgHf",
  "key16": "4WJGzHAV3VrAWUnfXuoPZ8FX3E8oXmoWS2jGEbj7jey1T3LNUXiKmJmxFUMJ1JPF1qeD2LNXex8m9FMZjyEee8pi",
  "key17": "3GWoSrinUuXoMJ1LVYNFnCQD3cs4zQ76k5sWTe1SVJtqfF5ryGu3zBEaiC9AqW8k6VgZV1Cpn3T7EtoYM1Hf8pZQ",
  "key18": "cmgWLQrPVug8gy57fGe51HTDkRwyA6tjkGVk8DrCotYe98rGCCZzRNUQ3523BziG3mfhrvpKYEfaLzX5XKg1bhp",
  "key19": "3GDqXFmWBndBEg7KHTe3Bg6QFRt7kU3r6m8Pr5JXohQQDYeqfNjyoGKUVDgUrscTNNpNpirXF3EVX9UKhhJ8mRLC",
  "key20": "2mqVrJVT8TcUAyrkcgsL9MRz1UsFM9vdDqcBX8zYoTyRaiEhca8327gdNVzBJJy4aXfuuQCJHm4RAqWx5qd7muGe",
  "key21": "5PDLh9pG3TsxNebmejGgMBicMs8nW8g3RvFpfJ9wSXUG7Baav89bFhmK6xtHYeAPZUfpD3uz5YwpNEG9pP7y91n9",
  "key22": "4DTYrRLERfzFKGgf9Nv8a1S8BwFPv6YpFbHvhS3EbsRiXLGc5jzrNozL45GNEJLsk51vgfiMAtdfVNbmDwkVmYZs",
  "key23": "2GQ2xNNNks9AzYWL4Leou2JPEC4uow4ahMUEoGYj6cxf2aBauvwWTSmbNZQqQ3VrdvkVysD7NSzEQaQGCAgE822H",
  "key24": "445WSd86Q4dYLFRZ5EvvyBSJLyfopsLmmAxJFw3QkYgcmbLoYposJ9mu4t9ZwxG48oPc76HTsLoRJrMH9qYfzAZi",
  "key25": "4nE39N6peekUEEDSqFWNrhisB1C2hHyJL6cSoLoKU8aP9htkMcstEZ992R4dFRNj1ekZamD2psSnYCu4QWwwzkd4",
  "key26": "4cQqfnznKwESCtvfZcSu3HB24h9YJBSYDM6n4W6ph4LPRp1VwBumnXXSogyGhjAYcYAecU1Ah5Nc2nKskzmJfe5U"
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
