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
    "2kJSzvsJW3URnC8ggPhBT8xLVdZT6qbiKxVWTZkH5wFyBJKh95dQqWCkkf7tqfr4XiNngjt4dTq7exZK6CAsh49y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HPsV5gAAJMdPw7za1S1qhNCV3NHZTAXWPKMeT5uN3X2R7Ejn1tNQxnD7r2hMZURamSKVFrsjpoZTDq8jBtz84e",
  "key1": "5Afys4gpGacTnjDshitDqUSUFmBwWHzabJLeispmY5DR354ySKqjDavmLLeUnKqVGLopekzWmF6W4jW7E8ekPLiT",
  "key2": "4BkikxV9T6yTqUZzh57TAiSph35oreNEH2CECPXrp5tYdypuoQXzwqpUEw3i66QnLW6pPDL3x6XzCh67hxbRpKRx",
  "key3": "2a1aSTGt5pi5CxXTw8q96C7gJP9TN9qQE7hnn45GoFk6c1cFe85TK2Fbib8bzxb1ZqZ79DJkxAngi9cD7t89ApWf",
  "key4": "2DEseqqgxgByfTVvHZpJxgrGZR5rhMtGqUSxpU2PqoVWCKE47RtTrv9ty2n1PnHBMwwbvsw8tfdDQbGTRz8WvGSU",
  "key5": "3XcSyf7cbpDqgoigHqEVXCK9iFydLDvM1KL9ZZYHLfa9S83QA5ZXQqcXcr1jECxCugHwtYFp2fYidqBxy6drbYsQ",
  "key6": "4epJjqSz3rf7xPwnC1bJZGhr3xuGEehQ2mUqErLgMvxguBUoZ3Lqr6YsASAt83kM9YTeCuvXNBFT5N2EFiMYYM1B",
  "key7": "2Gx63gV8HjNnJLyZJo2hSUsnfUYiPnw81FDGKbF2C9D6MvTwt93zcv46UYZBtXbMNLLqv9C6Zf3FTdtq6DGN7HTS",
  "key8": "537wUxaK35t39fhAmPVwXhai1fJtuwnb4RzsS6g8X6EfboHhRVHskePKwmhK9z96Bo9BeQRCoVQ9iduRHN1cN418",
  "key9": "7V1XifPB4CqUYyQ7GrUeuvRQwP5oBgJYWQbWzwQSQYzFvJ1RBSFqev6UQzgXH6x7GL7YYDp3MRRhoUALXwZuZ9D",
  "key10": "4QWhWpnnosCupvdK4UvegGLRhziv7PgM3ViiV1WVgkNXWmtnBD2QcndEvXLfYouydBPKFsXUQKbPgLK8714H1zhR",
  "key11": "59xjz5BEgY3AA8C16VArz6cy3ftyQdhrAxwVVJMxj1vEN2Nd98ZnqS6kkhoHX23BzHVTr5EUg7XMjYsiyo4TPCtv",
  "key12": "4185WdbdWQh4b8E8o17quaRazMou63snrNPVtgS1mp9aLj7rAVZkxJdVhMT2F9GQdkmznYQJQB8AW3npjqWkE3bE",
  "key13": "YbnzSKxHfeeT31NK8WK19KKUfKRWeG5mwXxbcSfhSrqHgF2EmaErzMJF39Da6Cs531jToq8prbKemQFYT7hXS9Y",
  "key14": "oJN4JLA8c3dPy28vH5RdB2eW88M8tVCZCTpbo9dZXwtPVbiqvkyMeiGvra27yktWBYy6Bjwy7YC4KwNsz1NFqcU",
  "key15": "5oUPX5CbiWsmWnxZnczdTm2wpaVmTHSEr3FkGskoUockAWatc8bjZTnPm7xVuMgQeihV2RQ1AXVMzupRcfAKqTqP",
  "key16": "4yxyBksoggPAz8ZMpeuoT5AjUwdqoziPEdKyNiMWYJCVvCJmgKLkUbY87bkdFxgURskG6bddmRTKAYuxGhmYYeTq",
  "key17": "5Y9ucgnx74eFqbvy2rcL1ojQD1bXRK5eSRhgFxao8VUJAxS5MtsfTuZiTyi35LiWHDfksMHNndo9n6uTB2xjXgUK",
  "key18": "3wv2jBaDqdzuz5JiZtymPAHgAMroULkctEDr8GSygB87mRiQNcCfDxNy1ffpCp4yUmvxLnEaEacmfHKzL2kNYUj5",
  "key19": "36rkM1SLs8c1TmP9kdZ8PjFG6rqhH85Uog926idfoNBxQvgMXtnfTDNG4VRpMqptm9EtegZNsF8MicvjkYrJzn6B",
  "key20": "3tEZhSCVE1daPdZmr66TytJ9FybG57PUoFrmnWzP51daHfRqGyHKUMxC1AK8BTpZkwxPxR3dQiRsKLuTYYRwnLDM",
  "key21": "4JDz5uj2sLadJHyWdnVCpaueHrBGZ6bZUauavuJcgaz7hfeyrpMhXvtdM6XhpfUBhbnwLBcVqtGhWG1FqkH9DwCe",
  "key22": "4PLfMxcbyAWeh8eQFWULXbkLEFEFu9pNjXaurFnr3xYB5R8ERoPotbf2nwskSAmmYvYhfWwoik4befPwPbftpUbJ",
  "key23": "4eo6p2ZFvzAK99E9U1JQGYzNYqMWmM4fBYyeRhnNfscszGJNn9NPjyR85YKAeHwtHWhArXrmaQGM9UpqGLJqNJiF",
  "key24": "45pDG8pmLjTJ5TDwjkWHvjcZ4i9LuscBHMXuBPGWrctpkGhnxSnm4HSqqU7mRxQYZjkmq368xTAMq1R8wm93CG9B",
  "key25": "9g2Bftc2TtGPdgPwGHXsiAv87NH5MFoBQTPYUhBWs2NHt2sQ6bEgzHrvQ3NoGASiUes3fgdSzKSZkDpMXPPEiQu",
  "key26": "4ssGiuaGDDbWsnTmMP5HSaYMB6RQ3jDkciQGqJRha3X6q21ZHQwvfh11t9KPdRbXyL32TDsiKs6W2UA7JhXCNMTc",
  "key27": "UDX96uMEcMBHmVUjvVqQPVB8a8LEJCpgWm83nmDkvzWUTFY3aXE6Mj21bmyBrpEvKjvKfhvPejCe6mouNu6CGED"
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
