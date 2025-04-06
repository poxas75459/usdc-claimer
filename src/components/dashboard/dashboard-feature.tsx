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
    "2hyHG863obKzEoihkN18bmTak1vY3hMycBaWYosoENpfbDirgXvzGVA6JDhxWx2L65wqdGhLQG1X5n2MuZjqewC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XBAUVb5mjgAbFr4nK3Kso4Vqd3Xuexbxm8aMpJDhwksTKMjq7fVQcNefhN8QjvM5zncWFVTsX4pbprTUgPJY8pc",
  "key1": "2ztrbMH3VtmD2XPvPAuKxqSZ4bQNKmVdERjJhXbSHiNWRHKRsXaTvYp2htAstPNz2roh2D8BnX57cak91ARSTrNy",
  "key2": "3HyPZkjBbqhLRAYhtW2kiFSTnED7rhjcrp6nRgN59JBcXcLdg7s82rDSptXBa34pbp1cXMcBtLwGHbS528ntYkUF",
  "key3": "3WiX87vV5Xo7fzGWx2W7mj6HzExRNNG6fs9WfuodgvCbVpRQyM5pkmqwTYiXfDyXnmdstgHJanMp4RFoGA9TZnei",
  "key4": "31iLPaHaDWwZWBizawHzAwNcghpBYE9k3KoaLySdjobRhgrvpvdFghtCGFN4eBf5VPp2oVW8yhCSeF8eSZ1Gz7F",
  "key5": "AhEZ8owjDssSrRAxmozuDbJA6zYxh14JeM6pNTnEoekEiYPyFiFP6wAnZk6bM4shgcZg65s2GnCvXpqsuHdQLnT",
  "key6": "4ADLSUCmhiRKyV3ofNfdE8CyetFsw69X5MAFQXp8kLM1NdYoU16WzQJQPAh6iDikMXsMN1jc56cSLpw4dgK9GfaV",
  "key7": "p6GMBPCwFtPoKt5qAka5H3f5TsZryY5shqeArUQupp8PF3rq6KV1KLZi5Tq6azSEkRvvobTftT89va29vtbG3sx",
  "key8": "szmEk4H2StxpgpZVuiMQEweg5xUbar7cQ8KFUGEJsvz9fWw7kj9ryGQjr3N1K2WegKPpyxDNMbZCbt1BBuEfaQX",
  "key9": "3CShPMgwPbdBLbSvcM5yZncbNFddVcm5EtGkAAt1thCY1CKQKATDe3ewcX5LMhGa88TbgBQQaxb7FhyHgrvHmyc9",
  "key10": "2SCx9F1DaYL34EtTybww8NENNccLW5vcCEvyki5TUKhm4jjF3EpY3GWCkBxPWQQGdskqhXy9vfnh2tcyym7fsvyA",
  "key11": "96LkKx6Gro95b5MWUUxETb6sYFXazRqFs9x73fd3cD5thwRzN2thCrPRnn3dxTcWvcqPuPwyiGg7Lf93URfmy4a",
  "key12": "4nY6poL9vgMvgBZnWcpcmdZLm94gbnrYKQai65dwigAaexfBym8JStUupVnShfXyo2cSgvAzys9DDCkiFdjrMJJT",
  "key13": "5R8YNDYBzgue9iuSiJiP3CJ81JsVf8tDP94m9ChjEm2nvzNKagyRGac39ZHraJTe4Srs3H5YNHDGCyYAAuVuLqsD",
  "key14": "44kEbgq7xvD5NuWACsmDh2p7y5DQX2Pgaov4nzkmvpbYqCAmS6nXSwy7diE2JqD5wFSxnJDPUuSWLwRvqeVUo7E5",
  "key15": "3qSVidwVnMBfb58M1VXnUeHkcs6Sfg25R77QVMhR3iA2eEpE1Ba5uctA2PZ9ihMHKsLPpebPXuKp6osYNevWQVTo",
  "key16": "5Y2YTas6UFh12o5UEyg984wouNfN5M8Er9JW9yoVA4m6CbUu8m2ey76fsDjG4WrSmbgPej6KqkjCQ4ZaxyUqZQrf",
  "key17": "3CdUNDTRphoEYQjnvUvpM1DNZmYtC4KxMGg8KmCSredoSXDMYTHZGrLpdmX4ojChBRoMSbYtbj82bgU62s6BRz8c",
  "key18": "59zd7x94fxKh3zsYE36dQfYDxK4S8VaXQXPBERt3CPKbRp9S66ba4ATDanT9WtQ4SjPUidVXs3SGNmzyeTyPzjAC",
  "key19": "2C97jfFLxsEpMbweBVfaXRXohcVYQvZ4cE9WcmeomhaKXdZirzvwRvK6oZxT2yQirzP8HLVQxMHquLZqqZshZHLG",
  "key20": "3VhgtTedYM4DXZzrK8zScjzYCyR4vvP4MXmWo4tqFUp85thfCUqmqKuFHUGfk6GArGsSgbC5M7p6JbdTvaXFyMyj",
  "key21": "2FohANKGyCWTGHpNgD5g13sbWxjAhsYBUn76GZ5yVvVzp8nYMNJ4EcydusXLPGrdxQ2WYvafybWgu9rYAn5rKDp1",
  "key22": "5gL6AQfLhAxzGndib9JSZW72C5Zr5SoiHTy68o9XCYz1JRXQxf8a1wtJLTRRkfJxRQ95LebWoz3ANyMw7rx5cHvn",
  "key23": "5ARybQgRk3Je36Zdswwri2S9veX8zxHFoZi5tSCsqC7ku2KVnAaTUWMPjFC7C9vydfGhcY5mL1PS83qWJMVJNur7",
  "key24": "65VxdmKW5XWoBiTvZawbutu8UtijK8YDZ9YhqHQ8hSZ9Vk9mZ5Y6uiTomU5nZiRtGE67L9HXpCqAovZXgH9b3Qzw",
  "key25": "4tyLwcbyKeRc5iiswnX1MjuKBkZzsjZRFLp7nyfpJnkJntffc45PccYsafmuFiwYG3aFR4NNyVvYwKfqePras7Wh",
  "key26": "2Py7QcjWS1WmKa4NBiNtmpPqcfzrSNEXUCQbjW69pzja7EjKjk2CwUaDLpbr3L9ZEQm8ZLmuAmSou4EfMff58YYi",
  "key27": "282XXHaYkk5Ak3RHBwpc1jQ7GgC2zqM8y1CuuNTBC8PQz8eToBdHJNgBBZUCaSTQ7uuVjmM1zQEfeUQGo83m3p6i",
  "key28": "4C1CfRB4S7fKjaC3AnZb8MdvdfLcyS283bXHy9gLE1s1DgdZAFYadmD9sHi2R7oUDMVGst33JeUZgWWXMgCMhnmi",
  "key29": "4pDLTmGHkNDrtaQUVhfU7FB5W42aeSZ7rWW3PsnFdAVv45KXpWjjKuqHSfRLywDJ9hNeXoJAoMpQqCWubkbo7wVF",
  "key30": "2fDCkrWTgsgMNLKzNzJwmfJ2gnkDKMuL3M5HuPKhUmN1qSTcGdcmEj9bqe2ADvmfLEDen4LmpvbfreDLjUC6HrP5",
  "key31": "adrH8y4S1gGgDhkvg5U8krEcCfhENzXQGCkuFNkgmUfGoKYJRtZbvCzSRXuhGhhqqEH2VkN6TFcimddtJCpooBR",
  "key32": "myp3hCM4eNmignYFvZ2wzsTRpyy2ZrxtPBz8MAv5s3Lh1KkEMjy76Ht4GzitsGghHj32Q19UVa6tH9ozTXMHWUi",
  "key33": "5nL6DVvVLN2tj9VAn3b8JyQ5Qqqtmgjyd92L3ViUTZdvvWRVdY4REDgb6a5xK79GuhauEnnEEJPfDiFE7e5fxmrn",
  "key34": "29KsuPr87mYVr1cxfERWMq6LTk7A2CmDN9sowm4GVP8k9yQo8icYA6aHe8PziUTgFJDkGDFhFj2YaozCKSyoJ3VZ",
  "key35": "3gsqCJdfR8MWNiqqDxU9gmgaVq9Na6T1o5aGJtmC15FFLXHEEtzA4LVitTTGiDE9b4rHRqE7KRNJmaGwg6EwxPUT",
  "key36": "4EbMPfNSoEKRroHdpFqeNQ4W3Uo4actzC2seGLSkv6Jz1u7DQrdHBeGgzdRVpSsqpgXvhN7BtjZ39Zp5z2UfMSaQ",
  "key37": "4TJQzFoXbvg21yF61FCsU7q5BsnoZGa12Sch8Rh2YhLL4PCB12m7cbqVGXFdeokewU79TGE9x3TbHE5JBCukDEo"
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
