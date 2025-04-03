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
    "8bwoAQbiXCradsizGxywTFvSDt8M3D33qmAfXMr7LXAE1PQwYyQ9SA26ZFLq5TxS13FXgbr22Cx9YEAw4sXtKgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yf6VionmFzVGkhnKmcfNNJd378wzjzF7pUroKLBm4HM1ESM6fTehhNRNopPJxfw2GU9wA19LWx4wXMhwfF4LLh3",
  "key1": "2Tsv5TkiVMcVLvadQSqMJS4Ag6mZy7UpivfT6uYJvYP9uwFs9Gsa9cZXokob2xY5Ajhw6GgRcCZDw8xeLmaVMBqV",
  "key2": "52S9PsXFxfnYQ4dS71mYURCKiTvBmyQjHxSrxBGpEFAQzYRVR1NSKFvr6abu2U3M37WDifjQVYQZ91Y4mmYYE5Hx",
  "key3": "4WVq9ya63m5XXoKeRgJ6AF5iithTxTFsfjWJLDwAVrr2hgsjrKVebEHuTCpsCHo3rLJXjkQatYFXi5pBAMFZpnzw",
  "key4": "32jsXSbNg16gvyagpJH4uUmo8mf74R2FSeHyXoCsqMiLEZCU72jf45jLjv782x2nkARG7cE3UxhmAeXGffQ9ZiLH",
  "key5": "4eq46WvoodDYz2wdrp8m62B5YFnZFQheKVSXLjmVUeRNwu2NA3Jphhi7vvPP3HZ617SrXX8RjuG1RJPECu6XS8UA",
  "key6": "uswCUnVDghxBJxid9RbATyjxMgsdAkTRuLTzNPzF29VuhckRmDs7oUEqMFH9ddgQb398qU1igM4pfbJQE2kGagT",
  "key7": "2aGgPNGUFiu5CQrUGM7EREbEErjQfbSTARSUo3AMzYoXsbp6k9hoKUGSuCiSHTBHzsq953XyXgPMqECCZqGEcN2S",
  "key8": "mZE3RegRoczZCRAwazF7rZivCi8z6JD2Sq24sEUMsHdzXGUHZoixVdtCPfPoPh4zhska69Tx7y8siuCDBPSNnws",
  "key9": "5qM8mCUc4oPhp7ioRzbn2vrinmWjnvZPXjXCFuh9JoMuJpkfXD47QFpubiKiSPKFiGfrso8EQAEnhhHaNbL3hH76",
  "key10": "2XwFnJZJ4kbxd3ywjBjXmpxpvJjZukteiukCPRYrSbpGJkFFyMjPNbTMrX38166bomnD9tMnQTD4Av5HmcK9rEka",
  "key11": "cUCpCRr9r1SiW635Gg3jDrv2kQfzTi1Jkm6HCnnfSkc73gSi44pjSrZV1FzmxhbjpF7SNYzwdMQMWu4u4cmzMQG",
  "key12": "4kMQQiTqXC7tcbusV5WMveNEkbBpbDF2JvwewArjPpPXJqX8pvfhsrUaZ2J6DjBL1VpdQtEQE6bQnFWz4JuBBFyk",
  "key13": "2jSRsYzGU5PrSP67n7EEDZsinqPbGsnVmhRqESaecbf5D9chqVANhyVbD6DYabR2yEkPAKnxh5cYkXf4mQK2GgnM",
  "key14": "FxeKNXUz6robReieeod2LmzUc2Z5qiMe1126Pjs1Rkyr1j4c5urAeGtohFenDzTE49yHxuT637eZqXtDVziLgtA",
  "key15": "SaGgbeTvQEZ6CwoQCQtXeNVMApSgAcN48SPtJ7WRhSLSzv55zN35vnxijgWiPn47oX7ikccByjcky3cxNqj7zsf",
  "key16": "d2rdqDFF34vE4R5mChpWzvD86bfuX26urBLqXe1rm3FBridMVcS9wASwgmkYMkLQNj9Gpg8Q2MvNJBzRqJniJYa",
  "key17": "4NcbZWMXrRm2ex9xUEJh2QLW8FxwHfS3Zw9nYgrbr4DTK3dtoQnkoiWrxthDLiTWa263L6icw6T5btSeETqeH2vx",
  "key18": "4hyApnVx2mVmUGpm9Wb6D8baBJXdqofw1R2UFG819YUzVzkR7VCYwkLMHiGPmRVY4EtgdaZy5oqQacQ9cy6qgpNQ",
  "key19": "42nG6BfkmiZeurxiLEAydz7TXVLoNKBzg7xs1Wcvxn2NnHWpJuysBg97FPwsVyqgrqmPXnEgoJTnRZRAVtbBvd1i",
  "key20": "3cNj3YMM2iqXzH7Y41tC24TArLKuAm82R5uXPEkBWoEE7nduWdQTTzDsZAMX4dEh1BwhJ8V3Gg4WhVjCqK9xhBFy",
  "key21": "2tDS7LgV7zVUNQV1cyryadhmV9ns4TU5Z73vh7h1BM8qRNK59HMYBdHPhyuP5AQjiyMrvMbgQFZQbiC3w7XAroT3",
  "key22": "CQyxkffMfuSYB3vir23DTWWZaf2J35r5zHqnk2pp3D7oCSK6R6SYXk8ToNWZRF8JWCC8M5RTJF24uU4Sc7Y92yF",
  "key23": "3xnENpQbKNTy2hfxBh2k9SHVaYg98AT35tc8XtnuexUP2drjEuhySdC94uzkPonHEGQHEceJfJjzmMLLTWURUc5c",
  "key24": "52b9gPDCBoGNxgK7FMXF3UfpaB8ppQ8sqDWnwV8hbygoWLcoKrMK9Cabh8AZe5MUmQXNzj23nKSHeotLNEKcJRJd",
  "key25": "3YPNyVbg6J2QMTM5iy3mSU2EFbRY8pdbMa4iUgt9ifzpnnRrrKqMuhqu2N9gZnbYRcEULowKk4HeEJD4pyJXy1cJ",
  "key26": "vRKLxac2kdyMQF2TaypxR5E84ceDH14GDCytfCaeaeRax9eUT5ukrvqJ5Z9bWAmUSCqrkLDLAC3Y24uswTjMyig",
  "key27": "2eZKJYUzQm874pmTpT8rKC2citru6iEUBFkxhpPUefAd8tNVY1nvu8GeP56yfhEQmJBqeagv326tbii5awzkxeGd",
  "key28": "2neW7j5xu1Yp3WFX3gdCoYeoYDT2vo3aTBW98VdAiQxHjFDTwQmziRr1CiTUX7GaspBmWXCuWA6KuaTcwbkx9Q4Q",
  "key29": "5dc2uo9NFB9gqfxegCYVyUf14zH37EUTgTwSBevGyA9T4wtRNb7LEw6WKLQP8igKfeECN9rDgmBMBC9ryqRUUs2U",
  "key30": "5huZwtHjmjYnYSTL1Zcdxpg9xfJ2utv2RjMAKbHTpcVG3oeSWPxZjMnmogDksJfQGVbDpnNeASL82Yei8QTPuCbD"
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
