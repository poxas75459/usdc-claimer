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
    "YYuPJwYCvJq1MSifPdXCUKZEwcvm5pZFjhmTcpSE5kU159LwzpPUQWRSz7TikbTgTMMK3bRhZdCbvmPVBnk7h8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LkY6LuzhsHUo9qej9m2CWpXEWnfZ71ATpVuJEHXUfviVVhX9sTYA6Czyo4KEs5j1PuvM1K2k7Vu72N8wB8hH68j",
  "key1": "8fHpY5vmCXdF9excavec3wHqF7uSHzESze3r3PDmY96bwoLW7ZXNN814zfd7QPFkJrom89PvZBkxNbRHG9VRjoj",
  "key2": "5G9YkgujJ2AmmzA4p14Dp5LNrc3TBX8i8cCWXPrJNiWmrggZ4VdEJRgzVFXeLbkASQpTnYYNvp3tTAjRvjTixrzp",
  "key3": "2sEXS978Avdo7orBJ4fENEskVcwMVM6VKjraNhPk9fXKyaeXnTTExXKz5GesxgMt6fh2EuLdbNdo41Eryt4Jiepq",
  "key4": "4VdcdwaHYVP3wR9b8P3iWnMpw5DRzM3exWN4eddFLLyvGdyDbG9GcJ5EH93e7G7iwbA2vRw4e2cfUpeiNCPHJTwN",
  "key5": "5zprzNxjagX3EbzGdyyZPE14sNGNEMgN4A1xoNhkszMqvg7pcCGYf6QA2gJU1JEUY5zSnP4Txhr9CJJCSEbuvJ7D",
  "key6": "34tw25fZcNQFNn4asMifE34hr1p5jR8HTQ2b23vBsYAUWDh1uEn5SAZ5p1KjSGfTGDQVDQJQAF1fkFCtUTa46XMS",
  "key7": "33XcMpeQxfuWDQeGfu3JZaUQHcmREgYoi2BeE4P5D2Px99xPFLTjsDx52EfRY9dyx8TzLSANbCKwAo1CjonCM9W2",
  "key8": "67gHgs91VD8EXC29dnbFnnYhpMRECcTfp4LVLoWmCSGDnhNDDrdWrDEv3wB4QAkMBsbw84C3Z2bPk8bJPnyfi1ct",
  "key9": "dRNg9SKtCBPjcK1sGu6CkFqsZgqaH1sKrw7s1wz9vzVxmSykgx9Y3K9rAu67FxyxsAVNJhyaCusaY1qrewgARoz",
  "key10": "2f1bsLzKhjdr2rnF4KVTAQkbykcSHuopgr9dA17995XvZFy9f4gZSajQ6DeWioMKqvxacvpT8mZhNQq4YZFx3JQ3",
  "key11": "5Nhyxmi8FtbJ6r3DMjoBxxx3k3YYTVvaDzjxkuLfwR6pTVQu5XhxkmvXQtEzQGXjGxip7TBpE42wS8h23iesUJMw",
  "key12": "3dzmqKvMfMoBoTeXDmdNJj2fmwBydF1dL8JfFpRnntCZ1GRkeh6is3s3SJRDGkexcmHqey92yU6KFMDLutWePhRL",
  "key13": "49LuHxpfmCZQJdatakEDHcFitbDJs2bEJZDbRzDaH2Vffb1G1FhoB2EoMSBLimJunuiyCQbQht73NKjdGV2XuAcQ",
  "key14": "3LfUCrEaQFqk51aNTVhj1HFSmFAeR3FkYNpiem6sgK5E8sRfQNhmJLpb9GkAyHUrpkbUAwrW1GTDvGe6yUPuPjSr",
  "key15": "3zJFcXkdx15tELMB2LQAJTWKV9Nb82RE6FfV54xcrsyM1dJcqTcfaW7qjgjDB5afUsT92SpFbFgScdrXvxjkC46u",
  "key16": "32WF9fGUHd6tDuWsDGo5n1umQPkPUBSadWe7wbnFHLfGnEP2uEoxwP66ymv7uVCrPH3tnZGHeJUt6h1kL2CvzRdX",
  "key17": "4KQbDjHBNnV1mEMUgV6vfxUSFxNJVXb5XabfGYvrX9pavN9Ga98bTyGLkqns4jBxQJ8AZ5NTiTTm9X8SCfFNrVXe",
  "key18": "5qaj2GoywohXcXuiWQi3rESFibqSg9doUw6s9jUt4vLWJMyAFXBvP8Ke6yBqLmfnSctVgMgtFd27qFCatzurk4Yf",
  "key19": "4JQZksLM7aHnADXVwxNggxm2zrxqtbxwZ43KVdvKZfyV5gLuRN975AwjgVEdLd5TkyPVkhrdrfRHufEpbD6vQQeh",
  "key20": "3bTxdQRBPTv7MXcMqczoUpfpYEuB3RznxrVTyqk3TGhozwHWaBFSBfuKDURAv8HbDAv81B9eyb5pD7kh717sBaeu",
  "key21": "3BVsziGoEFu2YBbCbXYbctCA8pD156c5mhzg6tEpdJcfgPjwkffQ6wNyiTd45VXpVKTfQVTbNk1YsPWgpC1N5z8m",
  "key22": "BoZR7n7hebBqF63CMYHDsPXTqw9pKYwyw5b4f4WMRqqHZRER4wjCpBW4cKQ3TuDgg9agwLSs5GPQ2N8MGMHptB2",
  "key23": "4uNmEYh1ENBrQwHsYARdBEccNFfDNN6T9XB8kTgNLjVQLwMxcKzeb2XqyfpJs89UafJzRTnPjrxZRWNamyDogFZ6",
  "key24": "4zNjUr67jctoQpXHF4pzyzBd94RPkuprdfXwoF6KTVJiYu1LLmXL23yAYELuQrWN4B7W6Bzu5DhERT9azRg359fm",
  "key25": "2JjCNbLsyNteZMxLmgUJqeFSjBFgd3z42MRKT5TDy536nzPVDNCMvUVmLLCBCrXZu6LWKkhs3hnwhLScUD3Wuido",
  "key26": "5ByjvM86Rh6FoACcvNbjBEQDVeqNgYRXhDEm7xt51xCymuDcTmf68owaGVgZNpWDn1LsN8tyQ3PYDPxYPFpkREAH",
  "key27": "3RkhwfuaTXm5Dc1vFZYgGvh8yYmJnD1sGQdHsM9trbxRee1yEhnGSJ8AJ7iyJHfw2vpbE7eEA1eYqCw4Cnw2jsUb",
  "key28": "GHuPQW2AMCe15tSd4fw8qo3uN8VisrGLbMiftVHp4e1emfu86sTNkwUhRUoBxmwjRL2GQUNZQrJaKvScmYxhJw8",
  "key29": "3CumjJ49UwJj2iwhnWGY6i8W3UjnSnTEJzPS9bkv6enGPMbRoQPN5VkfQuD8A4GQnNTLLwWcRMHTYyH1wecAsBL5"
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
