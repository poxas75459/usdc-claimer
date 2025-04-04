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
    "2GFJfZ8YWeA7AZDS8qqW5WX9pHWNT9L6RcBr4Tb7XnatyegVdGvUZWWtqJt9BqyjE71dZDQti1tmSFn9Ahje4kJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GimQmxa8ScK3Pk5ijWhivdsPxQnCixgEifgEZgZGAG3paRsjSbM9yCH89kCSMN2kHFvtymha5jbfC7TfXBmtcUv",
  "key1": "4TEYLvZPCRR4NsDRZwDV2k6tBFMY81DvHfEsG47uBHvPTyGS9PQz9N5AFbujBm4kubjTpM8ecjzxNjC41yWYoJK9",
  "key2": "5tA5i8sPU53EHAcnvC2fo212UqoPiQHoWkqRkwXZ3kNMuQBLovYz8DW65c4GUVgofknadrbGZCh6ZamdB4rabmjB",
  "key3": "2obiJN7jngtXs9YwWEZvthQLxR45vxqfzhPpEdbLKWQgj5KEJeAvSNA5nkWZRrwNiup5YwuD9xXcYhaDMpa5wNzb",
  "key4": "4dCeT5c5h3CL6AqSdjH35QdejR2JkZjKG67HrW6ZLi5jKtTMTXEZDDwH2LSoxLUXvUk8DZqVuwuVqchU4EWCw9rS",
  "key5": "2wFEZiPzsxMKCgJ8gA2Lg5SyNt2JZN2bQjycMTyZrvFrEJP9dseAKSK94nG34hkVJyKAT4a37G1Lg3WKNmJfUXqG",
  "key6": "5FXKXm9UL1YJ3xYQQ3i37XcN2qwJuH3qFCFc1yjkgjLozhZCXCPQceZ7ZBTYcrwVGJk6H2sXdaiCNDT3fFrX5Zp9",
  "key7": "4zXwNrmcCfppeDCqmV9SoZYKhPmHpmtTm6uqKL8BYiGe9SxuhvAvUpZqW9h9i41HMhXQw7wWWGYDLrf928jNVvRn",
  "key8": "4dWmyiZ81EFUDw7KjJT7WJVuV1vZAM6E9p1P1faGVmZLfSnLuuCQtymdW87FcVuJqeh4umMRHXTUfQFbTCCFaEyT",
  "key9": "3ZWxrJjQW3VrimjbkcevGgN51BmM5GqCZsn1ABKU7aEruCs3RCLLWhc7494mNkA3V9vGSmEWauhjW5XG4UNKbVLe",
  "key10": "3wW1953Qi458QooMkp31JWqYBdMt4GBQU1oD1oGpjSdy8P16HQgzM6QSpnMoV3hica5UZPaRjucUXesLKcRydu1j",
  "key11": "2k2eEjitatrEk4cNCADjPswjgxcwLkw3xgrLdfYv7XezEAxBTcN7aBSFc1uR9WBPD6xGAkHPVVnSbqXLtJQ6gRhv",
  "key12": "3RNwnHpzpNBhZL2wsczHvQNSKE6MpAiCsF8rGBkUZkXZ9RdEA2eEGZzrFnwa7mv4PKRzu1sJcNeUkwQeUiENktw2",
  "key13": "3BjQf6grakv3yxhmvEoPmNrFutQww3rzVo7fVRBXjCo4FRS6o587gYxrdE1mcL8ms8bFqjpFtrZdZVUN7Wk9CsMN",
  "key14": "7AgPLjWkG4xUszk5p428xFC5gsaCUZFZR4stUFqUZ3S8kfhrYfNtRGqmCoZhVY264DkaCgQfaG3NaGgSdvFEcCS",
  "key15": "4nhaKexRbmXYmf7eX6RdrZZWYhDSAhDsyjf75PYhbd1eMAy231eNm3sDKyf2Cg2UaPEjL1LWnURyBibabB2kxmT9",
  "key16": "27vDGBCNiFQayeTUiEqs2fiWmh92qraADkkq4jE8hAiagp1dxPqbKe2513nBEVPAxn7WafJG2oYiM3XiwnueZU8d",
  "key17": "4vVQpJiYgjXzA9MGdE3XU7gTFjUMkSWWrcDCR9F1pZyCGznFb1nSg5uVkDk3iH8s4Ve8RG4MqkSaQtaE3a7rmAfA",
  "key18": "5RDhuxTYCUmEbvcT8HDjyvSqftrLxAVZ1ts7a1BvBHM8VJQ6KTDBmGZ27HHcrZb46pWZU8nroogj1F5AtGm6Zm7s",
  "key19": "4zvMaLrohTxKA46JfiZdiRhUSx4DUzvD3xgAQa2XPWMD6xV3EC9aMAr9gxcuYNKfGqLrSTWoNw4F5p4FRZJgRrGt",
  "key20": "3NV2m5Y52EsH6Srtv68Zz96V9X7RUFFm5RahJn4knBGJXcbNE4xpLJw6NCcVogmAvGtGzdrdXMijesUXPtJAAVE8",
  "key21": "3uCX8jKYfHu1uoVjXpTuufrxd9tfbVwjFv5pssCdsKecDa6GYFxuMQFvG3nCDqNyr8tQhMWgDj9k8tZP3hzN6pM",
  "key22": "2aWNL6fWFkT3RwFaS6vCm26cwK7eH3JqB7gULFJjm8vGHoKVahnHntHFBSXxb85goWpWvgYEqqtzg24P2ycDAkYQ",
  "key23": "2JkRUoqdsJLAa8Wvqxivv3b7JgjvWPrsGwbVSMdY2b6WfFRL9nVQgU644NSvvU5rszRuxaswxQyd6e3XsA5Hekgf",
  "key24": "2o979Wxogn88HWEkFsKAAs8o6HNhcmH4LsK9HJr67y57cvVsh9bSw2KGrN3wPbwhg9dENJXStWCRe6nHaq1kDPwx",
  "key25": "5DKNGaK2FPcEFGfv3nAnDvHUptnD8xz1vxT3WmzsezaNgMmNgGMZynbtZ7wPdMucJDn7t6TzQpGwvQFTAV1tpBF2",
  "key26": "5KFEzf3kYafpeX5bmPMXkYe28uGqvNWxhwnYXV5RRNgZCff6w7z1v1xE3TmdWcYgfzCUMEJ1BXc8gRQqrUo7ok14",
  "key27": "5upArW8Y9kFGaM58LduPyozLfzDwn4662PNFQLTxkydFuPQEtqyfRosYP9EvxoNuf3efkFV14C6n3GKoiW3BcAH1",
  "key28": "3avnnmGCRbKoVJDMLYzUUhcJi6VYqBnQwgy3bSVJbkLfp8DHvnykpAHqnca9c2jeWWtzc8QCCBpihMaAyuA3fBVJ",
  "key29": "bPvjjFtvMTBFYWpQ2SaboRR8Go2HS3tifJGuEgo6micCHme8Dryg6LCeuW5JJy1H1ejHEGgCAVHUT9mhUHAvGZi",
  "key30": "4pv8YBKRYisunXunS7rsaFDy3L5UFWKzUQYZhiqtPhUiEpJUQf5Xy5NwAQiFuCYnUmEgVpdTu7JhbzQ89nGLJh24",
  "key31": "5jk9pDLRofCLdoxFj8Gd1u3jt7auBBjjRLHRupNBcQYwTopCQQLfS648u7p7neuB3tmPnnZYFcGTEvNJ6vw2JU5Z"
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
