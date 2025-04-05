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
    "42jsQSfoSgjRga9kkXo4RCYdeUBaZf29LtqcYfF2BagHGHfK2pMjMnjEaqAeb6ioNhbymivh7gLv77Cd8pZHaaNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xv68var8a2iRmEUU5MfQ29JKyGk5FsL4JJfrT4QNhuujv9fsL39rKPouRY9RSVSvNbpFg4xAYQS9qR2146iJRj5",
  "key1": "2qARozRbTNNYUyXVaikBCqsZEvQpTz7uqBnRR5NiBxpwDVxi2w2kAwjLzEtWjKmMbSUAGfZTKC4yuZiFvbhDn4GC",
  "key2": "5CFy2PdHrMMoPF6BDk6Kt5A6hkVxTbX8eSsyCu39sy6iP1fNCkXt59AAzRL74jvtAqMzt9SvF1m5CuFk5xLgE7Ab",
  "key3": "2MaPiL6AgJhydAB8KXZR4kRt4aaS9LJZmUZV2Q6opRQqaf6GXuw4GdTbSyYA82SWDqz7KptbHLbUJDiG3GfVeL8m",
  "key4": "4FQCDRebPDSLn7NN26mSvnZKbTPQqZG849cfQJ3fKqJMrMrkpgajAtjUUgwmnuuRHZCArVL1JP5hEWjXVw1M7tHP",
  "key5": "61g9zQH5LDHny6WgD2XtuDgfvXtrYmcENbRNbgt6ddZyzJCVPkkfeEVSBRa6KD5ctLfjiLjUWCgtiRYMtHNTe3wF",
  "key6": "5mo4UMWJqaYbakqe2x8DfczVevgyKvwGxKceuQ1EFEwAmLvuj13UMBNXciGdZTo51AfZjgWzZeH8jMpiqZmH1izj",
  "key7": "4KMLEntsH6Jonb646UFkfE9ppn74UHTPCXUR7bQmb1uXXd3CxNnzQ4wemCQ7nP7Bjzp72sZpjx8DBrM1Pj47kbJ6",
  "key8": "AgUL3n3d4Cq4WkqpSdfWxEnMCkJgKp96duFf5Wnab4ja4KbDnSgWLLyp1928C3R3xvXT9MJ6ono5ukr5DHDEDDm",
  "key9": "M8711Yo5jaKMYEP1D4Ztm6PvG47R1czkBqseqmNyYxyrDYPeBD6gzoeMD1uobTTE6Ve9wYGV4HPvjjTsPSkLPHn",
  "key10": "62uCoNAMaytsvK6Yvhsq182uTn7yd6oQhmLz2Kqo9ZCbLjxo9N2tiSW4edEBghmzBWZvyfCM2mZD83HiP6bsDUUk",
  "key11": "hzLZ2LSjk8yFVmsE2n8LVxKtPnq5j3NVta1sms3oEcvN1ryyXWWLBBF5K2HwqmJWzLC7HXLvj2SErizJx8cujJi",
  "key12": "C4ZmgokdNKn6hhn5cQv1VDRWdLDaroB8V3BVo6uqwY7nbaXgA9mMzLSBAZ8jv7JHFo5qjuV1ZaAkGdzdKWJqRDA",
  "key13": "4U2PXAYDUz9uKJa8Qb1qWbPCSGpYzKeJjVCftGT1m7y9cZLY9QQDo7oixCDj45XyrwJJEBCtDDADF5MoDdGvtcUf",
  "key14": "3aLqKn2eusaegpiAG5NGCHu2N2frnhzxBfoTZPdDu7CLRKY37WNw4AHrLwLX6P5o9cPFKHd8CfSiizdB3pmLybzz",
  "key15": "3ypFekK1A3V95Tf2eDvcujh427ozYTopzfm8qYotQ92ftUsV3mDHaRGkrqwTryvzRiWxeXZz4i1CzBXhQePqV1vh",
  "key16": "3DfrUTcEdm5QhoB3bGY5Qh3hZsCCzwTvXzVjwtbfuR3L7BMXim3YcvTedHHKtiVSx5XUCuSDy1idkpVYYZ2UQKUu",
  "key17": "2z2ekt7NXR5uFpfZcVwQdBYrbxCJeUf9Xz3RsmthxqJJpwkeceYU5reC78t9vAAQooLbiHYdUkKuWeaBzZy9zdrr",
  "key18": "2xurTQesY24FL7Z4hRr9gjYfyZYvn8hbPqxNDXJC6KGkj96mogqnLEfBRz4g8vSLznz82sPvgBHkYmCH8tnP7RFu",
  "key19": "435kipDkzJvxUxkKwdYNpYYqvw54xSuKPH4FbDzrbHnEFC74ELnr9LZVGcRPW4bxYLHRaMeSdZ6XUJvBhAUSxQec",
  "key20": "65yMwthWLuAiyawMKAtJCA3VvyM7FyoQdSV2xFWzx6tg2NsC1kujUeDbh9SjioHrrcPugSL5eTiUj5kXm8kzpQkK",
  "key21": "2PXADvUtCuZ9wNajCHoC2ddtX7L67f8ydhyTcRa3c8UYhHeNKJqSfKegr3RrprXraMkFHjaGCKZZdKjp9Nsu3jqP",
  "key22": "GTrfKEeLbm8Tza4vpNuvZjacbQDWAtnz6L17ZnWh54TBekrUG8GRdND5qSdf92QXRFG5DjP491JYvd1VBzHrdWh",
  "key23": "4jMjubbg6tyx4VVtgVPW1Agw5GorQnTmq6nw2bYoQ2QKH1kStpTbcwQyiDAAxqxGs6UNLVJ9rNhZuhX6X31skVvx",
  "key24": "KHjUmbogHr86ZtoqCJAMWAQufdjeTsvNU5fcZ3kjrwSoxBK7f56ADEgo1rAx3h3FK3vzeLDjghgZYoaRT2xf3kp",
  "key25": "PGiVP6k2qyLkivisfWGrq5Ly6hUChDzrDYaRUVm7TQKC6bx5VpkTxeoZ6MjQ4gMBTFfJKnqUyPpnLP7cmNhGTi8",
  "key26": "2k9mux2yZ2wTQS99cXgACje9FChPKLXqBiCohAjMCEqMJrKXPxMYAzC9ZNZ1QEGAenDT3HSTj24RYZQt7f2KEsmR",
  "key27": "3T3oizeCrn7ZwzRzDqsw2sW77M5DgXmxLJ17svRZQeXkmfkNR2KxJeg3wdDzDo7eJL3T4ccVUrh7oYSVrY16wYA",
  "key28": "2SwAJm5wwoDHd5J1NKu4f6XZtuhnfiWth2nGruCREWMs3MqaF3aUdBAoJS4FCVjWYYpgxCBZ5gNte7PocWYrrE5Q",
  "key29": "64m4wdAdfmmXdJjoF3oanLwMRNMCA9dEGFRfSWV6Bn3578mLYhRXyanXbWSxQ6amwQbhwZfFMbyEHgtd78fq6HVX",
  "key30": "2wgVHEknCNFG5mie5p9anNEiEkGx8WZRaVxeHLCkZqdH6AFkyP5UhwYg8Xs7gqrGtEN4SXnwiTzfxkLQLpNYTUQW",
  "key31": "47Aun5PAsyJhyQ8Nd1ZJv9RxKX7dLJcy6r6kEmusq29chxBLaN8xiww4CJdBvdswgTqQfnUmzj9t7GgbmxFSbZ3i",
  "key32": "5fVmPyBiRmnSNxVDQp2Hud5864rrxH98oxeUfQHQQFaQJfZcsgWJ6Wbh4nLB5eAa7Ji6j4oq1dVev3EUTMXZ7Gsf",
  "key33": "65VyQ647CCKAA4XfwRBDiLMv9W7H7oy2Qfem7KgDLfXuimXQEA56JGfUDH6hzSBxD88wEj2Rnk4b7yXo3j83TCHH",
  "key34": "4scNLhkRZLufTPQyUDvA3JFRgUTLdMRZyBy4taKsmfUEo9FSygWpfpKzsNwKZVPGBQUPYC2XDMqfbDZC5BkcYWkP"
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
