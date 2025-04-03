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
    "SK3XQp9TmixC28raFuPSq5HH6xKeMApCqxTupL7QecfLtAWfUTUjFJwd5aZ2QtpQsCRpxzCdB5nDin3BirgSUXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2obLsarAo95A5hQHLiwcUSokUaoHT7j7trgFV8kPSFNUb9uvzmDKBHJsLAURhUrmi3tmEwTFjt1JzEKcSEtTRNfd",
  "key1": "RHTXZv4mPBvsjXUkCC8cc2PXYYQjAZKaP1A9dY7pnJpTK3PHy7v6tT7ce6uCemtjHNZj5wNyFNsBqK43tiFtBEp",
  "key2": "5fErSEJwXHbxV7qGFMyTH4cD2zV4EdTNvGUqTqRFFd1v52Z4z4Kf9DK4uezotLsmYJN89uXy8zJZSsJMsAHU2vzE",
  "key3": "okem8qVUcfKBt3sfQYQxvENhgjE8heaZNmnJ1hEHKHpSiN56EjSGaPkNDJuDefReNSdVrFXWHm3mYE58NaS6RV8",
  "key4": "4wPVrvu7GpFEd4ntGwsXtuajb6NvohrPRxufHSm6SEunseAoYj9DZCPeTKDwMvw7JxQCVN2LhLZeFaXdoa6bs8iM",
  "key5": "4ZfLiqRXwkQyV8Y7bPx7qEJtmjUX49hPD2GGjLyUm55FX8dPF7WTfmJCZsCLwZErSorMVD8YDYvXe6j7yM7233pp",
  "key6": "2c5JMajDH4Hbo3zWdToxFoTg8smSaNuG9XiRh7hB2qK9Pxju7aWnSMqL8EBCzc7mGcKkuJBBDVCHWHwioTDfgN7u",
  "key7": "4eziNthphmn5J28JQygS6JEd4X6Ja5Lc2Hqh2RgYtyPVXui8gYJ3PrX2r4x3Stb4zuaUqGuXiextwaFMSXAYof9r",
  "key8": "3B55XQwB1DAsQEdED7PpQU1RDQe3fit6UYYK2vDxtvSHg91wiisRByeLKx5jjnmdHEEFbqXhPrgaXnEuHQ3FwJy",
  "key9": "5TMuCRUyvZeQyetvLcof8mGkQFwD57pdpD51XjayUTPyrre1T4np2CkDqq5TxwdDk1fggvBBopatzBTJ6tkRQRyd",
  "key10": "LD9fZ72ffq8iBcT62Y9jn5WoRdo6x1dPysPwfUhmx8FT2PdTe8Xa77WfTadK1ezK9fhtKyCDpEWRERjjznpyrov",
  "key11": "4icf9GmLJ9TxSo2iVEWdumvohfUxtfT3AeZ6wT74QbqH3drhqL3zYeBFJaX25EmbbFgFSrfBkJqdkBWWgtFEgH8w",
  "key12": "2edWQhrkG6pbeqKaXNVEzxVL6u8kw2BbJP8ghqk4hbUDFgM818BcHQzbsUY4Rt6ub8ZxL98uJFuxdZagU61ACFgj",
  "key13": "4WB3oyWrZqc78q62xr1cEy7B8XZoeuLBZu8mFd7R6tF89QYqz7sqr9dLTDytR98sjPdhg9Spm7ewj86A9jheVNVq",
  "key14": "3SzWEvrtZqYZkQSpSt4un4xsdu1N64Tm6Tkngv3PXovHeuLqzzfRYYkv1vjzSVaW7LvcLZhJkT5efpaLVFJQyEsV",
  "key15": "3jhQmpsXjz1JzQ2XfP2d1oYvhTgeGL49iQgKPcLLNmPqgRd65aLJo2D3EnEbqU1kSCY1Cdne6UZ9UYT8Pk8Bk45D",
  "key16": "4LGkciBMJ9pA5AwSxYkhTkNtLB7h1J6txRoE7zx9zkFyHbz5L8vRsadCqYQh4Q7PLzfyU2r5tVukXUyW4BuMkQcT",
  "key17": "4Fbs5EFurY4FNgvwzJBU2w5DfkDNQRX3pW83eAQfBTNu6KbHRM6M1W8wupY794i5kLvQRsRqMmVYA79EMbeupKqu",
  "key18": "5HqS58aywabUfdTUs7RF6Ws3P55n3vhTiMrACrfBvyKQcnZyXUTTt7ym8UgyDr47iNpUieGT6L6KePgbf2bfRQ5V",
  "key19": "3fyGYdCH9C5rqaEBWxDKWWps77nhu2Tm5zPmVWETAbg7B1bXp1jr5Cb8DxyUMVMaM6bU8DxPZRbUiJXsqc75Topj",
  "key20": "5HifxGc5HkedYgTRrjhu74ubvpQEa1gWK8y9g7CPqGM8V4bQg7ThS3kwQ8shrxiJX2n2fGGsvJq9ReSvb9xdUPu9",
  "key21": "RyVJrh7ZnYpJntYjCYfrb7SWJWVyjxAyKVj1BKa6p8PYRp2tGuJgsB87L3beEPEYj5w3tWWBRh7Vh53Gc3USCNQ",
  "key22": "uptJJFooarHQvueGSLuC8FW28nrrZB3MfLPGGAd3nW4qbPTbwPKuRW5JzYxMytQQA9Qb7RyazTJPwvBWwZzPeAp",
  "key23": "5nCuJGTgwGKg1HakDBDW2gXuEz3LtdtyCM58txhaRShhKmLqKKXHVbpFscpSDkY85iYr27wLuwL6sh2W951CjgcZ",
  "key24": "29TaeygH8pe2rhs2QWK5XXemZCrUNd4rpN8diNXsC1rfB6Ge596h5q6MMf9Afuc9C7grCn1UqkPCcL2DRHRorCcg",
  "key25": "3z5UqKshPA53gBFZ6hRi73afcBJFNt2JFY7CaqouRTBMcdBp4aCTpwfcoPqbvnjCnSYEW9NyWbKhZfKorVT4mq4n",
  "key26": "3vVVJym9nzyh3mperH76DoJ9nHyJQLUMoPsCZJBvupWJnPycthJUXcv54QSmn572zU7Hu42h1o3zrE8kYCVAxbPS",
  "key27": "3AuYnA3jAohng8AQonuzwPVphko9pMkyjAgYLeiCSranxvt7e3eWkj4goqjFVPKCTcuD17o4HgtKMz8pvDppabhQ",
  "key28": "xZitjb3tEetR8b2p3TsBS2DHhZqxkTAb1v44ZASmdfJXNhJ2Hg5NsJZZiumYGs3nkCxpHysYJ6Ur9ZR3Fmu3NRz",
  "key29": "53Hte4Remc1QLQJEFF7W3UbdevLfugTyRHFZqsAepPUvdhK3gXgUiN69FvZThetoGsH9AaE6W77gn4ui5ZGQrGcd",
  "key30": "4nrMUvissBduFUxPq3vxTpbzZTAXxbY39xGdw31fHdsRgbe4SkAfa2AjcS8WDAKBYfmFntn28bkC9hE6wJHDwaHw",
  "key31": "3BuQNB61McxUbfumzYvfAGfeBSirCfshzoQNYV6wYKEVA62FXxMZgtsYST2EzNBUF7Kugh9TPGtX7Xb7vVDMS5h8",
  "key32": "4iEhgv27sBAqXGw3PyjtRLTQRhsTSZn1dEUaLAW4NV63xSHVYffLVLDbR86Qiw1nwMCdUN23GKTCRDXXa5GHw6uD",
  "key33": "2Zb7tT5B9J8HSeavn6yrBsZHku7J4Nnk75tP2yz8gviS8ix7zC8uha2V2MqBM9h4baba3hh4wxZxrvP42Yq7Brrm",
  "key34": "4x2YZejyryshV5okBN7xpDhquTjjHxtmqjbbeZiEL1EnirNYLgZViQQc6JK4ebnVkieYqmuAHT1RSuoScgtwezn6",
  "key35": "5Dc7jVTKdcpbENDPoWE5AuCZcc7ZxkuF6KNt8UtcHhArSRUohu9PG3hyBAhEDHE1TbqmggSsGDSapK4URGG2XYJJ"
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
