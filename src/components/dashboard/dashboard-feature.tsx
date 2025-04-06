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
    "4xm6Yv5Xk4nfdPHbHa3fVeYAkhV8pcoq2hyoiCcv4gk8Zk1vrpCcKNL4KeEt5o6bRJ3TVycqg27e5KApDgcPB7cW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s9b8vTbWVHTzfidUYKjXiyZdJncGTqH6Wsy3xiDmcn2B7D1QvYUcpH71eMX5bGdACUUWbcsP41ciVJtcQqsLxHH",
  "key1": "42KX6ya4LATeKDoP1E3d8jhGQGtmiL6NTk31Ke3CjtcJefY5kdiq7TXZtMmvWjt9xwE3ZbfMLesbJpt8hpXr6F7W",
  "key2": "3NPCq1W6AX1rkesKmtYcZaaan1tXVsPmZ85CG26KYRgAYE6VDKFKwPgTz7EwquuAGNzFCdfcq4JdNLs2xrsWZMmw",
  "key3": "4qCva1FSdgj9MEe2tWcrdXtP6Ajbss9YoJSNAxV3vch4dxYSJwaLCAR415gFYCgfkyXiidUCNMYAYhCrQYsrbQmY",
  "key4": "5mY2PCCJ81wk6Ud21SWSueQQF8sduC9hU4yJAueHjGGEAjgTUqGz452e1Jum25cBvrYVMwi3F9dgmCbV1SU2eJtD",
  "key5": "2XvNbrRKGaRDup2nMNyxGEg6hY5424VdyeUYExZeS3gsPkxDzGMTaDtsP4uRBCNiJNJmNjCB4c83QtPPVo8PDiWv",
  "key6": "3koHf1EC3kFGAnrLSkCvRpWpj9JVxkCA4dGDiNJSr6Ld9EjvhDr9EqUnd4LbEUrpKRXcNDrqdF6NZyUt3637goiZ",
  "key7": "5obqxFdCiYcF12HqnA1yufYKWA143TUQ8Gqvhjq2JPkpa3wLEgziYtCzhHyuL96VH1fdcGp5x63cnmBgBLevtRL2",
  "key8": "35yrEVxfk2sW8ym6gbNi4zrYSfxNwpTA9MwVSeFxYC2MuCf3DDNoQJ2yheQzbpYk2Rp7bxfYFvEp5jkmToACPFmc",
  "key9": "5bMk3GFuSnRo1GofjAPT3Pho2Xhd6UWm4HaU5nkzTjWLvYa6rXW34bYHbehYyhaKSJh4Ew6uDDyg3G6iiA5mdeqx",
  "key10": "2Krh1WAAiVmxhcbxjexSYbHYhLFn4iFmspczjxiVpcr4UkfmMUeDAeX12LaPhN7SfAsZhwmNNKXGs14W2ApQQF8Z",
  "key11": "4vKb6G9JC4XQJYGz8wLMMsTiATXQZMDXcRNqFFtc3bUs9tQC2LMn7XTjd8yeVTF5ye65bNdVazrWSj3o1XJBguSL",
  "key12": "57GJDeZyw5QLbVjH7rmYUpJMekQyW1yiQzr7TMtByYh57yWEHKPcS7m8UAS3SnCwp3HrXrT8pR77TKvx8xtT3grB",
  "key13": "4k2KWKN9egRcU88kEaXmxeBSpKzgE9EBcrqYf63zJgsRDKcdgagXcYaD9qH2xfrnUcQdUz2VeNJ7QEGYYgyJbMjL",
  "key14": "2k6fgfFeVuzBVB8Lxzxx81hN9cUoEzvsY8rJG43wbsyna5EWYyQhUL1miVTP9A9ssT5RKxDsGGYBD4d7A98HLf2U",
  "key15": "5RbstvZ27SvQvG5pAPq1vEbmjwBTnZEnwgYAu6ujHDMedbWfNrsysJiXo1jZYMzQPfijbcgxoGNd56Z6ZJLSwSXM",
  "key16": "3Xu1Es9gtFdEfJ7jQRVM6fu19HcgYhPFUwZsXVuhYuLCZa9Kex7kSrTjTzAFZNYYc3HMynsF4VRKWp7sbV8Lrn1i",
  "key17": "4gj8grKuNVjPwYiGdVHLX5tp253pnMfEiYkUV5hgac4VUYX4GgjVLui6BVDfF4hQbWiEkc1B3X54vFaQKiUvWfFV",
  "key18": "3mf7XkuNkF7cjpFLvBHjjiA9TrgS9S3AfcsgRX7MeiivZQQKpi6RBrCA3h67EB8RisQpzrVZygMEhTDT7G1kAKYQ",
  "key19": "4DDBMteVqAXD1AjhT6ZjDTMXJPptohSb3B5texok1DwE3C77UmBGuV7TqkA9qqTEDQv87a6kCiu3tTdZgUjUGimq",
  "key20": "28mQDx2drfy7LinwZoxTBY2iV8ofcpAtc8PGh3hFxieqXMiWQRRzqgjCKFxLyPYxFUW1zT6ou55j7QuCVjMXWrhX",
  "key21": "55abFWLs8pJqYdbvbVDBbMzaDKhdbZaHaFvk2id4Dx4eZefUSJktNdLWJqwWE8CoGzDvQHcZp26kuwhgJLqxN87q",
  "key22": "37ykn6JRJ1rb6BzHWrDpXiyPxqmXz2GDNxXAQGbvZMPZYn4jRJhQqrYrnYUEvEFyvsPWrhXv6cgfwCaCKTZPfHXH",
  "key23": "5WwEKjLpw1KvtJcpS95mRgASDTtwkpFQmNeTMhdMhis9jWGvPGWuMehRuFzVurc8iGgg7LZYC6PKS2XtxdPgBNUH",
  "key24": "LDRq4n46RieeiemXAqgGLcw3RorcgZ9JcG2VygBB4ZiHuSUigP5wBQFeP2L2c4QVfQ18stKLaLBoySMVEAMkxR1",
  "key25": "4LQt3SeUafF16rYpuGF2TqqfbGAmEGvUkaFPaTmHN3TzTwAas44bzqvnnZaz57rs428MA8ix8RrpaniLeKzrRauG",
  "key26": "3tSaj92vvcuyHV7EQVguzStjFzdqY6AWZkTLS1pXB2JDi9g9bUHBUJLjXpDUEpji8A9Yfb3zUg98o3rDVXYGNFqt",
  "key27": "2yWemy7nd35RZtVvQp9NSH3Y1DiTPidP2DiRJ8QdqzncE7WxzetbsyqhSpgKPQTNfzhCVoQcXqDcuHLLJRy5geU5",
  "key28": "n9eRryE7nERPTLXkhAVtuXuAtP8gGx1nENEoxvU8bj4WSHetT11sNfnDqXCpcGTfRvhgufBziJpmThL75LqhZ6q",
  "key29": "2GGzFnirSNxiGMYVHNmZGi3DdTNgMWs7XX37q9YdfGamZiZERAHGVzUeJ8DD41GtDxvUQwxuPVCp6HvVQFNshrJz",
  "key30": "35XbA9GkiNaDUxhDURVAVKt13b272yqytB3pQxWp1yg5SeufFv4rc8sNqK8J7y4YvDonrG2Gk85F2ZT6gAgoS9os",
  "key31": "9rZ1EeXtCptjNdDLcLjhgxscCr52z9pUSQjXjgRTdrKUb42YhopCyDYVQ1Vh3kHXKg1chkoFjBVZWeaVfiw4LZA",
  "key32": "2RzBAetbUpca7YUxRwT3cWYfy1tpKrECg4NFZ5vHqFmNt62JdKyqs52kNEfDAvJ1qNNzNcZEgiZkYjf4PnDE6H6e",
  "key33": "2jYpU6tZNifuCqyBKaGoP6ZrABWmzAvTmbLQ83GAJNda3Zrjr7CiiG3juGianS6eLBAGsxA1borD8Ezmynvo5kt1",
  "key34": "3C2QvKQUpcWEiu7a7AYWtof9zxwV5ih1Gi5JZrYG75ZCuDKoayiJHEKoFTYa5333EYUCXcvRuJetJQJAsS7TY9gg",
  "key35": "4eF59oQFg4w6nFHF5mhhxCY6CBxG2QMxsQmWV9WrhpncVUATaLd753wz3nDPKm7YsyYfURdx7ocMPgHzimqASK1Y",
  "key36": "yEum55wZy1CJSrnMPuuqWzfxEo2sfNi9SBa4XDM4e3K9U8BcjALDVyr8TKHa8tFNgg3a6LZ7qteRfwisVCduDC4",
  "key37": "N2aWZaFksYpJ2PBmnc98LYPhzxofEymL1V9BCjMSsBsWgeySozqQGBSEJaDucGQWQJKHnLPZYUjgucYPkyeWiq7",
  "key38": "3PJJQMSBHQxD2LKSxyPYESvzMtheu1U17KVTkjaUMRCbq2uhkLocs7coeWq78MJEje2QSfPEzPVLHfYf5LJxuzdU",
  "key39": "4KBsFGobxenGbnB7YB1fJFCeC7PGmhh7aoRFWbvis6hpMZUKXjG81Jh4wpVZvKcyMKbwHqMoeY5UHQ9XDVo5fDyU",
  "key40": "64t2tQT588detnPVnFJCWREFes3kMu796jpLFRPdBSE7TdRLjZkMUnJgRz78iAeygwai2oumciqqJ29qpWkNFbcJ",
  "key41": "4nsiFRQtZkcuVovKW7BkCscQR5avCdehb3syKaVWeCCnqEqS3wLa8ZHQTcLx5NbQ7sVHNe5xMErZa4ahQUSNWBAv",
  "key42": "5Ktonf981iHgoAEGUNSNGiony5Dn19xDUxvbHek9tupEHY9SB87V6uEeReGMVarSQ5dw3HXU3UpLqLBWNdFt1BXs",
  "key43": "37jp5qVgyvj1YJkfQrDNqk2v56o7fmiMjniAYvRwGezxjMvKXntbTFnR7jGUZxwZahroEXWxif5eSmePbeM9RDkL",
  "key44": "4G6nGrpgoP6QckbpniVH2iobN1grncKn2jR2SZE8AEbBBRvViFoZe4TxoohigXy4PetXU1D9ibjruJfWXSWvpu1N",
  "key45": "2vKy3BgcVajd62H3oYfjN6Fr9Zd3AA1fovCKtEJXzxRiEtdbtL8WwDYrApWsk2Mn8WCqy9qvfnaHDh9NErNcUNVo",
  "key46": "QEE3TAyW5mstPCVuF6RJZ3vRT69HpQTvSSFNPihXwYmw8RrQiM5MzWgKtbo42cSDapT5Nz5BCjQJSmMCxKGyccc",
  "key47": "4odrGnWgi8Am7hKqhYweDbeRLpN8SW5HBK6pbU8PUJ6c7xYwyEijRxSPezRHezNViXwCxprEvdQdn39zPr4HNYyG"
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
