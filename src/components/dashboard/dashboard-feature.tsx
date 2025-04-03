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
    "5R6qQVBvom57n5cJxj393vAtQGoCqUXQoxAT6Y43TrvZS7oRZLuBAQwZYCEYuiRFJmf7fHy3oD3BhychSezqxCrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T8j8WWF3PKSLc9xrNLmE7F8nCUKHFj6tgAeATE45PWtEKB5xiQYroYppF63DXQFx7etRaUf7ESyLU1WXJeeQYfF",
  "key1": "3NdVJeurHqdZQePzKRFSWMZxxeAxCUpEu673yQA6zffrJXqP2hP5ZefLaN7mhy6352vbxdCurnoDBpyJnzehXmdi",
  "key2": "82piqcxgGucoW1ndwe5wLgE4DdP7Qk2sQRrCG6D8UMjdNCQ3BsdShb2m3wxfJbv65Tgpt1egikD6DNcs9FMBXNX",
  "key3": "35BxZfeXt2fDb8kaaZ9WFD6TEq9oqhFPQXScQton9PLjN4drzPhBA6w5j1UDsPtDopnM81QSFRaUB9jmJBGw1gGT",
  "key4": "3n8fxhdNHtUPbrfWaxQTKg5tFiYPBmMCs3nrUYmZFpQ8TL3u757tdMgQBEViqctKXqrmy4qiXrw9aBaxwzXJ92no",
  "key5": "3LAMfnbnEJrtCsS1J8Vh1DnnuhXGToeQqZF32PNrBkKyL7Jdwpsj485c9vTv93qVp2zPMbEYhSBBuE4ibhmt79PK",
  "key6": "mLuZqguLp8ay4qmdcnXyhBcW11srbzVKFxD2yAhiLnsQy3X3B8KttrmoobUuCd5HaQ3HkVM699hU8HfF63XHaSm",
  "key7": "21YEEMzw9atck2kQarWvAMGAJadyG1HXTaM76F5Lex93TFVL6AeG871wAqkLTjAb2R95a5Hx1KSHPqSKypYU5Z6e",
  "key8": "5wfCXjtKosUAeJv796hF9YcsCCU1dTLTWx7E3rU2rkEBeTPwt7MPYWBFJ8Gpryo4QpRfJRQNLhDYPS8YuUZNfDEH",
  "key9": "ELNvRXKgtcX1Au1CBiAjjZ2fA5G2TWGu89TxB6ov3frGGoK5CEmuVyjz3eqXdQz8BJ9Z9kAaWVsGnBkpZo62jyo",
  "key10": "5Hw5ssyFiUuBWcjb7izsjePu6d4DtT2DQB58ziMcXWnamdBKVMYpEHjGQf9rrfgLxTmd8aainrvTEaWzTaZ88JR8",
  "key11": "5d22KqRHosZFgrMn1nSHxjASUsBMCubPGh9aNSFPbQp5Bzx9JfmQ7kAzArGSiSDFv8xY9zuA4CoYSUiyK4xifbxK",
  "key12": "5j1aksCtj9ztAHqER5kCgDPrJnXTuythT2JgWjYBJgpP7ng8t7ymVKFfFuBwxhwsKyH5B6zodLFGcZ4KJck3xcZt",
  "key13": "4BUPMec8ib6CgahsPrFkxHPDXVN3NkpGcWLGgTCcjqBJDA2GZh36Rq45T8MhjzTVBQh585diLSZJmqAgyhRDcE3x",
  "key14": "3LGnktSWqpybvhugzAL6ewpvrePFpbyZt8Q5FjQxpyGSu5zH9hY7UFZ7jN2s34mdXMyLrN5x9g4ymX8HfLGnYtkL",
  "key15": "2Nr4seJ5nbVZdfYNVph8hvMVr5nifQm3jgwpKGEo1wN12hxktXYYgMY7kvTnNE3HqLRDXEu8XbtyvZoQAD8LLzVW",
  "key16": "65f3VDk3ddyQjrHt9789eab2RqEDE9Lyx2BBKucp67ntmaDWhq2Jj6yFJVyiuRz4E2rV1WvwFNmnJvfqyGvCx89n",
  "key17": "2Q5TPMVqTwL4sDWjrvQi7qvWKfejMra8bTZ2keeDSg5ZvvFRuQ7zdADNW54JDoF5iv6rpUfk5hmkEzSdu4voTnXW",
  "key18": "2q6z2qcZ2eTZJkcZDWQW7ZBtwXepm9gjxDS3SgNcpfu4L8tW3fT9i3PoLRnvW8giMfw2RgFKZVPA6Aokk2KVQwdc",
  "key19": "4Zo8s1EwtLM6NtHDNhQP7pQMU9Havia2ScKJsH4bjRmPu5FBv4y1hyxzDjoLgh2xgZ6GZJBQ13APrBP8FdzbXyDA",
  "key20": "3HymnC8TJuhU6p8vZo9NRvPTnTCMR2NftdSqPrwTEqDHZa4VNPC85YjvX5N6SXizyrJwFqs5u85c4vhdopv4NnMo",
  "key21": "3A2PuhSGsmdeRkG5Dpr6JXoW1Dn1hDDjr5VGkN1Hy6eRW2zWyPzFMtEc4Em3LGSQYw3RgBHrZUD8qcC2vznt9Co3",
  "key22": "SX7TbtTDg84dgnHgJBFymnWZq27Zf6XUhKwsFQ8NBYgeC92xNNrJEPTT3fyiWyjsLWNDiCkWCuVS9zgABx8t1yN",
  "key23": "MJkrzU1Wk3TqeYaquBi7WAbAUbaEzAtU8QVsfBCHmaKeLyxoexdi6CstkLwUmVBc21iFXVSeUiq2SpoPJo6x4UE",
  "key24": "5RN2aKdTihHi9Y7dqZDM2PjhwpznFPTcsFGCvAtresvKgBuninmpR2ZmwkAvZmvCdmcGjY6Anrqo571hvrHt8oZL",
  "key25": "2tcPQQu7EbcRYnizCbNWYpL4LqY81YBdvZhCnk6tUkQy56myjB7y7YEJyu45sSVspP8hvBSE5kzJAMNMUtggfu2j",
  "key26": "4SkMPFGEFCunvkHEY1GZJcLwDm88KvrJKSoJPKtvN84sKxBM7pEWmBJBLJ9tj7JnmAV3rMUBgE53QCvGe9vgdq4W",
  "key27": "4kysCLPejMD8Tp5CVea528VnZxWRavd6zVUqb1YSaFQo6nSg14WHLC7m3PzgHVyrjEd3Xa2TCwGYBV2EoS8aQbGu",
  "key28": "3XJmBuvXJw9yYDSJYiXMJs3dx68YD5wZdn5kruuH6oj5XpGXKzVKN9AVW79zUXHPaUFu6ExopwAuSiuf3QJozSRr",
  "key29": "2BVePV8u8TkXXFY2PETvv1i8NFsvvp5wtiHD1u4dzACiqajkcGmCJRptrAW7uG35kdkKyPK4G5UvQ46En2WjPPL9",
  "key30": "4yqY8qpHxsHmPKjcb4BCCSs8cftNSBuMKe3qB7feDTSaJHeNMdmdkTz2Ch5QpdqSjx759ijFY2oqG782eNZzN3nb",
  "key31": "4UHvErdJzC8hs8uhmMaf3TgaxHa5SmCa4UgF9ZT2W3wAp3Z46SN5gEf72JShWyc3iPDUocvVm3jCC5LYzcjevzk6",
  "key32": "5BJLxWDQ6vfWsorDirm6ed4z3ZeDoxCfqapL3yHk3JnzxvkLQHP9XoUdCdDpoVFbDkyj2dFZDzgo98MUQKeJcfMC",
  "key33": "4jnmsJw3Eoz5wcdNnThYwvzcrNxSof5anNsjUXavcp5ThVs4TkZ397WWzZjhv3gyT6VRqmzScFxGuigRrdZSDTcG",
  "key34": "5JQZesv6azabfq5ZMS9VGsN7ZHKnyPsAbtshj7N4H4Nfj2X9zSxWSUdeHBaUW4BC1cjh82VZ2qvoCrw61Y9uexG4",
  "key35": "45zA5FbCydgzsgW6XnYKWBbu2G2y9kcwrgMjrE6ZtsBpibbLzTdnR8Xc9kZxcwDVH9aDwhxQy61BLogLo7BcGeTG",
  "key36": "2SiPYJ5GU5DSB7q9prSLdB6Z6zYUhcUKHtoGtHvxGEFDUBagkE9W2U5wTpghSHPEXPyPoVrDKpLryQto2tsxg2bp"
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
