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
    "3JBchadfMYAtVT9cwpwN7kK8zVLHq6jCWjD9PSjpU5oTzHsdU5jgk3jqCWsvvNNiHnCrHXRL2Q4b1H1T9ZtxeGuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gxbRYhhJ554gg2J4oJCLdC8RpDg1DvagNssLCVFh8nozVVw7pRP1bmiBDLcvviH2F8RguVJkHeqMzMgieWQpi2f",
  "key1": "4kHmBr8AZsZ9MHsQm7jdu5zjAvE5rWS4VaBwcAUehye23ujZ8DiMonFsvfp6Azo2M5uya4K4pvxKx4u6xqgtQoE4",
  "key2": "2hn9D4YwTV2cNM13im4uuXd8QqqcaqKy79kB75Ldp1Ayb8JpxiXPiQwjX7vZt1WLMkUJovv7xQRTMyN6jBEmjUga",
  "key3": "5tkuedisemxuGNxA4fEFVXfR8jypVWgQRA52XENwB8ohyPM3rgVRdB38YChrW77XHF9yZna6fVmGsbCMU5HZtBZs",
  "key4": "3ey4PtNrguZrMTj9qremh1nW8MtjoXhyPAvwg7KAyxBHdmKTkv99NzzvCUcgRYk3EPVaawpZYPU4ATJi19b91AQ2",
  "key5": "63Z86FEVvr7XByQaBiECcP2pygF5QonE29Pt28xvCSBMowNkCdmM1b7RYbU2APNtdATeTEcvs7F1YcQNXMp16R2P",
  "key6": "4uYNN2BmSrpTC22opzQzNVGP5WUuPQQsf69USPCm9hCiuMLCsBAhCuUDfmwhS6AC5Ynvp9pJLHsToeDsNBQBy3Uy",
  "key7": "3ni9vSy3uacCCZdLN2yAo8DKRsDsUr2vB3AainbR3gRwK1hB4uCZwS77WjHDkAVAWvxM2CrtEMxLFtk1H25oGLU6",
  "key8": "4MxLUEmtsmqLCjmcztqcvE6HzKgXdAPJ1kW6LfgM8x29vCxp6hRaCRVooa9uZ7NuahNjS5aqRJWjhZr5nsm4aZtJ",
  "key9": "2PA2daVtSomgHfnJgCC1Y5pg8FzzgUv1iycVnqPBidpbVP8MHs8NHAk3J5HnKBCmASdiVov5ASQg3vgzTg7AkpiX",
  "key10": "2c4JUq3c3VysBnEQjFtaRRUj3aE5rdUupiwfFvxtX7K9CXVA2NFy7YUpAsWBAJ9jUd9adSd2cyMUSNTJYmrzzCsL",
  "key11": "2Lb9zFRAXXQ3b1KakRqjc9YkQNdop7xDuiRy3USuFbK3brxUi6c1U7iqn5PWuzkFoc5KhTu3g8ZgYqosLFHa6hdR",
  "key12": "qgtbrAZgWAkxa26X2e7VJmqNXYe6No9zSpykqPFRm8RkYgpEzNmek9xc3pywvdef9ukdai8sxto4UysvSuPN2do",
  "key13": "3KcyFttohx3nN3nqXzzhp9xMrJ6LbyK3k5nEKwHYzmSEjLYuh5cF7amGpsdGdWgUd5Qbu8BNiby7iPLoVV8PB9hD",
  "key14": "48g4VkQBHpQGDV7wT43dS8enqtrKeF71ZA7U77Wx6JG12yEeSPYvUVmMyyDvmdNr9Rd7ue4g8RzXLJE2DVNSQfiX",
  "key15": "5CDiuXrJWTrSNhKae5Adqyd6E2rvUDUNHm1kZWZA7D5ikFyFxc5NLcrhBSmF9mryyvTaexQ12iA9yfBL6WvKjbgm",
  "key16": "2HbYqDBvS6NJJ5tqMxH99aRWiebTgTTovQzypwmRv7NiDbG7SxZwNikU6SaBjNg8VCyD4uqCLeJr6wV5HASHaHAA",
  "key17": "WsAu5Rgq8eR6Lf6LoJkh4mCNgyNNetwSSxDpWyJKzMxUvSEERh6ft4ZJbDk6ontPC2YxfcSx4we9NF6QaecoPKV",
  "key18": "2z1SXkXc2RVAeBR4WsrxAQJ2cny4W2Nsz89mam9jZMBWCCXcZxpNYy8F1TYvFfHGS7A6ZbkC5nGheqLwBcJquy8Z",
  "key19": "26f4tKisXrnETwV3KZatVxqgY511nmxi8AsM9mxJCZbHDRAuotGqekmc8ohSEMPy5HQM7BSVsPniMg8KFmhqGpp4",
  "key20": "2EnBLgomPJ9VPxHXLHzyxJ62TJcPFo6W9422wbZWztFHsVqxvTRcUp2Y3TbPFHsHz9yjPY9RzFRn4Ugpxb64x1q7",
  "key21": "24b8yiHstz7SZymECHXuLmgSZnPdicfZKDAqYTDqpJnTjF39gUrTjrspHh3snUSd2bghYqZR97EFHepGqKwCuLnh",
  "key22": "Wm1Efu36SN4UtRUT36hgVhErXQVMSFXuGdmiwcxjidxDmsTBqvgdo1LS3wAnNaibB3JJ8qd5n69KQYw93ETebjc",
  "key23": "5aQext6zxy6by96E9eEd4nCmpZw93P3SaMfetycBzBnwsXd1tEDDgTLXLSWnbgJrpwjo8o5LiFPjiJv59KMRiH7C",
  "key24": "4sZYcPuz77LfEbZhA9hLYb3uG2cRMpUG9rYjztpF2axTnxTnimPov4tmSJvkb7PHgYGzE7TtdeA5b2F4JbkQHxZG",
  "key25": "bprCkb5kVrXDctjr38gWbK9qfxJ5iHpETH5ptm6wCXwvXLj5wdScHbUcJHLtDF2pgbYQFazbdJ1gzD4CRnW31k4",
  "key26": "267NYxZijY25yzLzqeSUS3rUXBr8GAvHAT7zaj8fvbLS2t14omqUvu9qPqfaxVN6yuX4JUXVWsuGsUyKFv2nsDCb",
  "key27": "5yRBryhEmLqjvRULmGMHHXvd4nxxZ5dZWHVssSgiuJcMqzERAbZBAHzXUMQeuh91nh91uVFUowsPwZCxhWnZmA3y",
  "key28": "MaNSQiYaEpvMPMdvWCSkJNimmVifKQozkbAVrGbfyHsB752p5JLUftWzcBBQaAGD58QKQYxXvSpB2VrzUXfQtYr",
  "key29": "5DLJLZnvUjZyXt6BVymGQGbi3Lmc2sZWQCYQncM2Fqc7qAwfYG5cFhHFFXuLpBe78MJ1dVQbj56eU1EZJr1769Cz",
  "key30": "4XaV2YoTSLiqZJBUYRVHXQ7U6ZsisdBXyQh3MY1KLUnWb1bgyGu4BzkhFo3uMzfeVNsAr2Vz6nxm1hjeDfukQmA"
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
