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
    "4voViPd2KPkrv5zn2rMgh5LEXkwnA81ZShTenYuJ5TXj5SHnNX5wkbYjoHHwsCy84Mg4c3UQ3xrxEHFsa54vhpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23PVdLpFEm5JgvVHBAA5ay6GFGD1JFWKw2Me53yNhwjd7WpRcfqHX1jNNgBmcUL8gHo78iHYFuT1CBjuYWDRxLFe",
  "key1": "32NiX2RhGudifrwNLdqM5PPp7DZuyUFjij4uZRUw5Pex8Spxn7BUxkdQZ1FukxS7FckvDp8dxWxyPV5SgArQwiyn",
  "key2": "241aAN6bjHkZBw1QPTJjNrSH4cETy5A91dv9m9zGhaLCAX8UX6mq5741kHa5rNjEHSMMyyRA1hSzJAmGjAGUHgoG",
  "key3": "cgMLbEf2HNU4MicYrho3V9q7uHnSJdxDUJei64EsZwN963nqEYj9KUECJy5StjLStQXUKmDFJsiirjk5VSAYYXC",
  "key4": "44q8rJKvgrPeYrcrBWXgGMkkhLLgAMZUELRSNQfK7ZxcH4ShZhqDFrxHrMWGYyVahjp36PbXqK6mEmBedrSG3L1e",
  "key5": "KBeuhRdxs7wejBxke7aVzPt3U3SmA5eC4xa2ijtZLNYQM7oGm4XoWU2zYkGFdWbvAphJjXLiekWrnC5t6yVRbEY",
  "key6": "5CJg8zKpDjRqXSER6SdxpdJGd74fRTUQsw5GThDMvi5rZhh9biQ4V1XLLYPUkE61Z2k3rYqgSxZNZQNAtwTLNJ4W",
  "key7": "4sLTsJgprT1Ec1Z4HXRKYxmwGkW8dVDQ9ZSqmN1tZn3DKwP3WZfzVKmSy1bHkEtFrzAfGj2UEk7p3GK7vbrtoQSG",
  "key8": "Vk8FPpeZsJMi82AYMBQhuSeQ1EM5f1DjyVinsudPMJ9ju7acLN9C4CCPpU9XE5h6L2ukCtxJx79BB3MfVQJC9xk",
  "key9": "77fGnvgT6TkVebaH2QrXNbmohYBDDSjUQSRM1e5giRZAdhkNK15DpJyoCfGjPUNrZyWSCQjDSu11F4sjCuFjUYq",
  "key10": "3Raim2rS4iV932WPWzVQLthrp5XjXSYB3eV6GYVVRszYrGUTADKTFJZR7yM8MShnSTdDEE8vBFVwri2GMkk8oMcd",
  "key11": "5SjFKMftvbnnzMjD6eDNWcbc92S51k3XSGt1StaGeAAuxdAZgnEShTw5vvBKd5Fqs4XjXeSqxNqU6p8THaEEzEbm",
  "key12": "4eyzabcuLwQghhHmZdtd4SykBJ8sBYRSaVKgQyNprqHkHMJgpi7AMBAk6C3XyoYRmEY2e782QvH6Sisv3N4YwZZG",
  "key13": "2RHWDbiRAH7rRh3G3DYqKiV6Gpn9sRi3WMx1Jn5XXq6wiXgzakjWrQApat7X5696eTmJodYLQmnSH1dEtnREfjqy",
  "key14": "JuaHkT3hPEtQ89vBoc5YXjZdneUbGWvCefLBn3RLA1VmmEqRw6TLRiHsS7gcw2jifEXcJsbgxWJgtwyp6BX94R3",
  "key15": "kCztFNoVw782hbQjBzGcmPSYK5U7gnUPP18r9JGVCZddTtFEv2kxrf2qAcnNukc9F47idrmnBsa5BukcarKxrNh",
  "key16": "4gtvTFWwgJ3QFmG8f2vLzDHP1Dg9v7oRjt9Z3Tv2rzEhkRQu3HGQhaJv5vMwsytE9K9nKac9bNJamGPD3yruaz8T",
  "key17": "5Asw3nKNpWNNdvSdF3DFqzCd3ZNL2JyPVEJhrmP4QEZ22p8DMhKMoWFkAEvrgDCMRD3u7HbKavQRkvGAZxPDBN4A",
  "key18": "5tfeAEBn7shJWbKMXZqAYxhYJiueNzzLR9tDqTu8uN7nuxG5rgfPJvXQ6AEmck7ds2YDnSnH1S6wQakXseTab4qk",
  "key19": "2JRPkxG5D2VMd1LEkc7G7XQRKkTBhR5jHneRAdKu1wivwDjU6Vi2vivwvk81bZ3Beg6RpMqGZHS2FriE1fLMN8qm",
  "key20": "iFa5HmbE2WjjguX26vqdWpuYuqm9aMMZRWcFJw1xhJS8ssGfxNCbEYVpZoL7dgNYcfn9fzkRUkbn2MeGYiKiYzn",
  "key21": "QdKybyuYf1DFWKPese6sp2y1ZofgmECLGTH5MQpTxe2SnuL86Pd1om1UcM7ecU8kSDdTYWBQJTn5Nj1zesh68w8",
  "key22": "3n9owtS3tvUdtsNv7dpJhhfNdVoUC3NXpiRNxz3FCCZ4hWb2iNPcaZqFKqgiTTA99cjhp9L9Sw9QCZGjARAC8RfG",
  "key23": "22CuX2DEBjkdJq1BAirLNTCa4nFeAi8f9z6XkZCFBpBF9U1wmFskrF6Crc9cJmEp1t5EjUMVS6f6AqCsbvTQUn4w",
  "key24": "2wxbVjcXf3gmWHdayuJvNApy7q5nbu45CruXp5deTeag8KBq9GZ1MWsz2YHsjvPmf3khD2gRAHPZe8NpHWHuHHH5",
  "key25": "22hKto2C1RU54eCUan1chSXUHLUXsfxPBUXpm5f7vqZ3YUJVXyDnW1acPgR8ifiGbs4BuaiNftJqEwSWFLtsMfwE",
  "key26": "2qvuiWQu5zbY4gQAegQozYFKrkgjhZUe6YVBuRZHqSdf2dmXvfWwh88vg9ayGFUW7FsNqpr1exayqaZpF5EJbGD3",
  "key27": "RNaKVkemoHefr1QUTCTxx42u9dqYJRPHbjZPJXKEDZkNpZMYuMyDBgu5kHsSqH5bgYKm1jH21fw3dLKbYtWYDQ7",
  "key28": "2vi8yXu9E8G67oQB6vG2jjt3CvhPc23i8SX2zQvsnrB4XYevZGp4WpTZ2uud4XnXK4uBbrHnkYy5VrRs8fNY1ikT",
  "key29": "4ipcqQRLgZK1MT6Zzd5WxeCDWH7D4mhPwqqWjbsQGfFrUHozebL3LXid7BKshCd9kAp5ZGGGFb3GFFm1Q7GDvaSr"
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
