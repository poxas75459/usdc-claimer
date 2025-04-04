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
    "4LBuae2Ci6n3tNuCZueohTx1XfC3u5HRt4kXri9sttmzjHMuNyh55xiyArTxuFCWfvh9EDB4vhoc2PSnVprFfuXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67isYrseosJEd6nEXq6NKNvjQ4ibuNhBvTLZa73tZx4iq7zgE2TLfC1wtSyKymXFxium56SXkR12TQAAgXTK8M91",
  "key1": "eiTArgpHYgDYH31xPeJffkYfghtgoRuYWfkrUmh2v6Eais4LQ5SZNL1DMcwbkkinAzFdQWJjgre5WTHbZtp3YGh",
  "key2": "3e6nBbbifSrzdu6npzpUpmAXB8K347FzrvRdpi5LtXRsiqguQKmr6X2QrJECoPfUWR3CLdV9UKCb3jQ9PxbcmBwR",
  "key3": "4ui5G2tPyRJhQVvo81UQc1LLZ5Azy7r6e7vnuf5CDt8qSLm4iJHtg5mZm24Ny7LR35HTwBXFoiMKmo8xEvMjuMUF",
  "key4": "4doaXV9WE7skfu4Uc9GymLAGn33F59Tzndm7N18Y4aRqKrN1QAxgoJdoBov9jwPL4XQNqpyo7HVty2R4Vhe32TW4",
  "key5": "48wsq94yWiqenVGxVTnj4haeojG2adZ3MjxjySLVajUSFiUaK4gKgAZ1ADbva6uvMoLoTq6WKLs4mWKDqwbNUhqH",
  "key6": "4FKr519WH2e8k9XvTY12CZB1jUJEmFcbNvViCED7yXxsMkMMXpLr75wSAcsPCCbJeQPYJ8uXW6j4kWQ5cyDJm8BS",
  "key7": "3X6fp77SZCEprEJrfQYtxiXGoUtTD2kZsrsTyerpBZB7HYtYDnLWdGVmHRFsxgQfDViCGY48cRzvfixbSmEXN3R6",
  "key8": "2iQ4hVSje6knW5JLkvUAvZPoEnLe7rzCbSukbq49nJfUTLv2iePPb2x2xDUcWGpm7MsAfyibwD7HSv3QfjQF11Xs",
  "key9": "4kUeGHF4CmpXZQMH7HUSeBEKqzfJGp9b5RXhVypNK9uS23bToS9g9BHBqE3wmepVL2yJyfTc6zc8Xi6y4gTfyFzd",
  "key10": "2BPtPABAKakMmj746p2J7CP6seWdmmH5MhC7LDJgwfKSnwxdNhrCq6J7Una7J3VXbSFJpMdg9WC3GYn8jy4PZGdJ",
  "key11": "3WezaemVFhNVqnAVY1bFhHQFUV92CxmgJaHHRNmVJT4jqxWHkV2ErGm7vwJQh2SaYqMkYAT72W4Dc3GEDMgxTPTp",
  "key12": "krCk6pvRq9HRHmzpFGhgwZVbVH8NpQGVa4B4m8g6g4z4KJP6bYsmdfLkH1T75V8RRtsZvN2Fgr9praihgFy6STR",
  "key13": "4A5hjpfwkznwaKvHNTawphU7wLsFb7qh2PkWuH53wRHuKCXSQFfJcry25X6XMVq4wzxYCTkDitXMPLKMoPBGs8Dv",
  "key14": "3Stj8gDw9cLsYLLdLHk694bKx1qjsgfRacyLfj4aVaDS76LtQj9H7gbv9W2KwPq9DAyGQb7TDdc7u61AKbaTxZRc",
  "key15": "5JRKWWaDxXaBt9UQMAfTRTE4b82pKdSNGBHmmregbH75jqmM2bXDzoRr8pvemYi21dxDRoqRvXcARyjozmwitTxA",
  "key16": "67EjEGqVzVn2zC2uccdqtpci5FqGd65paZdFiQsqjQaVmW8FyqvyXLVGFUQV6nczndJeUDLhDJNyjwhzccPro4s1",
  "key17": "5YZS9E9o17w1W4K2DpysQb9WL6yowQJiW1QRTqwM86C7XuHQXTaD9LFY6Yq64DuKDsDC1yx5SM16xmMs5xmTnpdq",
  "key18": "51ZmV2zWGsFbDVhSSY3Tgpy1H3FATE1pDVXmSVqHJrLrs4DTtGoEYd5mzFQRAMubizwpf4Z2zypjyH6znHTELLxA",
  "key19": "37mMWTgfwrTovzg7SaZocqbebznM1ya7vAvjyJASXwoHhPN3z6fXi7uNY2MkHNbwYeSnmHToxJaKvB3Dvkbu5qPB",
  "key20": "5gY6SmmMz49B5fDPVinYtkUczx2tsgCqG2KhcYF51eWyoShX47vMMcBVTjkqweuYtcXfpi8AZGCS36xHq26u52E2",
  "key21": "4eVVBmdwkVeCcoEUZFZNZNw8tfHQR7fPrFvvT8uiBZn9km1rdagoLn3vBqdfzVncsVSSHh23gMRxJ1UzEweYgSjV",
  "key22": "MH8gbCpQ8BVLwzkhCQSQXENzTqEteqAbRQY2qaXqAw9w4s2DbqSoyLT1jctH3MMfaNUwA7SPzNmXArGrUSzVsMk",
  "key23": "4VBKBiME8413Cv79VbF3VmEi56kGpDdQqF3kqbvjmFTuKGvXrRC39YdsMXzvxRxtEDd5AKdP1paZcTB46gYpiVUM",
  "key24": "63rqTC4dYYe9crMErE69KMmLhK2Je7W7e1bQepMwTvHxVvAEqAxFF2ZM9TjM1M4LyhririchngNeeAFrVg2Dt53y",
  "key25": "2ap1aVcL4JvigZHPyk9nK5RFdYPZpPz7QeDdrGqef7Wbb9U5SNCokvQzZYv9jWY2TSe5zot9Hq8KPRtCGW4Z5eCS",
  "key26": "2bVaN8BRmaNVi5ueoFCTVoSrJ2LaiKGEmcEtV8sB4hUYcJVH5q2YMKDpCw5Tha7kLKuq3FVHQjXNCgeceUhftAbJ",
  "key27": "ae2AyfXo6RJDwukrR2ZFZVFgzBXESmMyQhtyWCHJszijijvLASC8bAqmf1D2DGmjRmEtha7awp3xK1yMjFyWXzs"
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
