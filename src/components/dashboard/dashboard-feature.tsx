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
    "5gYrmCA3vYzRkG2tqPibY4cnYbq1ADkidmka9jE27hvwPRhR7gCHKCP3wNwqzovrdirUkiANcj9XaR6XsuvWXKVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J6aJnjw9an9bb55M2t1PJSNytM9dkhcoBEt3R1E8wFARXNEdbG6XqB5atfoV8GaY6x593cdzazadguNvG1SEbiZ",
  "key1": "mFJjbZ6x3FVhs7ShrBWFGKoaFm2qNk8XFNQemcG5Nbc5pit4sThCcEjFVqPACnTHa5c9Z7iTXwZTLqRxb4FY33d",
  "key2": "JFAH63sAbBN97i1yA1XTH66tLxpyWC17y7Ja4bzkkr9FrBvPQ9k1xru7BFAuqskWSvM9K3cxEyHWEuEW7mF7mD8",
  "key3": "3Jarp4AAvPYtEe2dsMQEDNTN8dVPbbSWA9PLttACtotkmVE46WziVTYWh6HK1vnQr7MUuWHQ9ZoLrshibD2VLSts",
  "key4": "5yuWUyDS54tmhRS4cW8SuayR9zsxgBoWtdZTAwxZDWJAR8YVM9S6Vp31ZvjBn5oEwwVaqKJSeaU3e1yZkEDRQNaf",
  "key5": "3yxxtD53LRJSyyDi2Q5vg6ZcjkLGWSzgXxxddkLWQYS8sydBbWSKinGqGimNPaQk7q9D4C5Au27F5GtKgoaAq1Lr",
  "key6": "5mJ7U8vXeDzXGwn3RRzvZJRwXS5bsd4Qx8aBRSq1gzdzdhY3KTnvYBs3rabxwxT36xfNda2GbXCotLnJu3aTCqc7",
  "key7": "4F6ke1eZf4rehSP2vsYK9aErmLSPWzFd1KyJhUa9YvqFbGjoPaNDTvdru3onn8XeXK1H1reygTN7xhyQBvHCxhYV",
  "key8": "4XooFeS8gkaU287vnSSNyM8aJfU7pg4kfVZMvakG8bUb7SY349PYUwNvKVgsxcY4N3uepxCGDJPtij1PDVitWbs1",
  "key9": "4YQKL9EY4FGVe4huVdcHSD2y8C13yEyejQhpJRsSVt5yhdupBeceRjCCV2VqfiNjw837Xc2MBmgdKPMXwQL8dBdZ",
  "key10": "27Bo2okNsRq2AhrRVsUXwG5u1YLCDfxQMSGBJ5uvwH3nNz6NaM78ZaZEYMWAkkM8PoewpkHu9CZzDH66rr8cgNro",
  "key11": "5gasbF5VEqcqnWxzBVnKnpAv1THPf6Q7JnKPoWSSWwTqwByxpYj5tXP3qHZKoXdB7iFZ3kY327gYCMyHvdxcCQKn",
  "key12": "CjzMcYXHActbZEm4Mgs7QYGbcewNdsgsSybVyZRMYXYKjSZqXqMcmHbRykbfD1s6DQ3ForB72jgn3jSXagjNRsf",
  "key13": "4DR17VhdH56qxHahjhzcoJLrykJDSs6iqMCnL8JjHFgETwhBVLXcu7EzaHJ1JTYbvisTphfqvsPLjW9ksR7eqTN9",
  "key14": "3X8bZQ4TfvfTVcVqKNjvgyotDFwfs36QjNSpnEJjK7wQq1M8f8CYSAMzQDCLTBA6fmPAtAmX4nBzA1vU2coynwuZ",
  "key15": "479UWSVPvpCgHViNX9sabZa2ufWPfiha4HjqXiGxb99BjdQe91nxsf5xpacdnMT9qWsGNKbCaBBkErx6uQZvJvf5",
  "key16": "2g7MKW1CDf8DLk8r7mUFkdFF8PrWQ769GFdiEfgM5fnCecfptG6csyys4fKZFRxVshuhibkSqD3xiqqKnTTm8wTL",
  "key17": "4vyhVTgmqP7MYojxYo9aPtQXJ9LdsjwggVutg5uPXvsQyMMZESNZAjkPPmyFGVU2CYtonCPNC7ndpSd9q8W8L9EP",
  "key18": "3rVG9wfX6ooY5MFeUBcFDaQeGsgeypsKAu6ciqGrxNxYtjf2u8UzBWCA4tvVsNVFj2vBSdyt2qdq7hui1CGMfyVB",
  "key19": "3KpSi6FpPZqC8VtiSFiN7mX2Bcg7erqRB4DprWuodkAknJgwDzbeWsu3QzLc3hM7XBXytvoUnqiUzg5SbmMEAeq8",
  "key20": "32b2uABnQS4QeVY2epmzE6UHnZyrt3yy3ttx5oww1eDv5zRiQLGKLdEmvpQAbQeC5h8tHm1BGGojtGD1pUiV4XVZ",
  "key21": "2TQDrhFZ4Mkgp77r2b3VxKfmUy3eA1sqPXhQmZ5HezwU2epQucENxwDWGuUCbrkRMBzxsFeHQCuqHwih7k1S5tkZ",
  "key22": "2jS9NVGNtJqNVaGwPbEFLS8rTAVqqEeHoid1TF8ggXbAAq9iqindwNQmFCvFiHegNQbrt2pMurzankyF3xN7yJWg",
  "key23": "294VNrg11nPzCUd9RGTji8qHGeT7kLGs3ddG6a2y9EvNQJHBAMckHRyRPXspbPwWqi7i9H7CE5NpBHF2aohwBowg",
  "key24": "2xH2ChbTgfZrSkViaXtDwDDCd7GKUqVnWAcj5AkP6yMPseVeXYuohoaPgRVk7PT3JvTPvTfjuoJo8WLyHdM2ewwN",
  "key25": "3osJiWPgJoSV4yoGqxN4EsC6UFCcmc2saUWD1G66L1YxzpTgqUSspPNo4D3R8NXumwU2SwSSjhvE3WB2LfnZ8DLf",
  "key26": "5ep4jXTi2DCbCThybQrGM81xephQQThLh6BCEdDY2cPo28Bbrynj5rXQanCW43bapLvjYB8dR9d6f4gbPrf4DtiQ",
  "key27": "3hQTvBWxpoZxEj3rzCpWm3aYwxWhwkW8EFvK6aEqteoiRMXHEY6qcFEpKC5D3fokn1THFkws894roZEiunHnK625",
  "key28": "K3tPVpR2QjKFWYWGTg8mrcSfjitRTSEpQgn2UYf6tbDvM6o9p87RfnCKPMHcB9WiiquHo6AywQTe7vWSTqSEisN",
  "key29": "57FHfepBsKtLMzEVb6dQFeKNWrASjgsgVk7h139obg2HDg1yLTEJXNriCmLmX216z7EThooJN8j4sM23AGa7PXLR",
  "key30": "5YTUgUN8eXTEqPn3ffdre3vV4Qrp3gWpf77pYYtSb3ZWtP2RTQqn5HUYpSmC1AKaNSTPDDVmZwdvuvJhjYK77pb3",
  "key31": "fd7Ynvdk8jnDw3T122B8GtEM8CsKobcSb9t7KsonWGUEx3piLP3M1k5KBPv7DqqDRrnTgyZSUYeRbM8QeqgRRe8",
  "key32": "5uQLxiHmKRatJbNNrq3ZzMBpb7L2fbxTnwNirzbii5UjitYFYmJN9Nnip5RyoH8zHMRKtv15KmdndveG7ctug9Lm",
  "key33": "4k6KNcw65fnr7D1Y9VMSDB14A6VZMdCSq5NRF4DNQQv9PJf26LzSDuCnkvHgwhwc9qEzCk7f7TAtZTb4KxqJFUVE",
  "key34": "4Ky6qQrCM4TuEABPXJqnms6wF8XZGj2g8Fga3NfVhDZTwAnLg7wrQorXf8gCu3DTotCFVJQCqTQAfx5hZUyY3r6S",
  "key35": "2WFi1qn21gmZuDcoCT7yTmeMZuHZ6J7E83jsTRfVYxP6RaguBhxfk42zdbpUw3yCdsEurba51jRrF3fxc2cH4hTt",
  "key36": "3z7W6Dag2mNeDBCepZwmQNaFRP7c8moVEMurzqUtDAUt2xzXBZqWvC3gnKrWu6XnvjnNTf4JWcXpCSQmgt4Ef2Ku",
  "key37": "2RpuZmejBEFsemJXRvb88wkA7foXFKAEhVYAjMbdEGUHaGaQZJxkqqwhffPGEa17mSKpHftJpwzT9251BkVzLcam",
  "key38": "2sFXrfESjX9u35oJjfZ5V6mSs1DqFhTgQ9eygPUMrNQ94HpyTxF7PHNTrzXGUwcgXQwZwz7LEjo1cdoAxt8dquaS",
  "key39": "2jfAsNawyzw5eVzgFjdSSf2sh3sLoevm8xtk7UyvapwzF9fCKdnzhJrHCVha31as8FNmAt62gmV8rmZx1p8ekXuv",
  "key40": "4YdJsxWWRreFmJ58CUjUQkLEEDikSg58gduskgqcN4JJ9jC3rFhBEmdAZvrUGHxT6Z7NnRbwgTepKbNQVX9MkZxh",
  "key41": "5FsA4kax2pRmyjJmfQkYehm8WxPJ3V7smyE6aAGdxQ4TE9NhWjbWmi8dyBeeSeKTWLqfRzup52TgXBwQFvcLxavm",
  "key42": "3YaSqnFFQw7t3LuDMs49VYDhesZuTFCBNguKPPr1L8GTWx3HiptpCMmxfVdVv3zxKi7qSsNdLxTRsBkhbnFe3gxo",
  "key43": "4xRTy5vUzXRsbP1p1EL9jqWYps9419t9VscPbRZXQDwmW7AbnAtAG3c4U5dBbtFu7SLKWHATW94hYTqXVH8sAsPU",
  "key44": "2ZydYfhmuXjNmWL55q8RibosuYJEMHrvgVZxqfvuVht21C7r6WrdhBeDfUMXLaWSzX4TTDZsLavcpV3CvZZdvMuk",
  "key45": "5BS4vHfW9fcKfL3Tu4Df7EwSDiRtRzj6EMqtPy5sFbLEMQNtPhnF6bQr4dGn98QuNJ33QzT9kczmh4GusSt9JDy1",
  "key46": "64NVbyA9FoSEZ4av7G7bxD88c3MaNLCfDJoopAnrxFUcWTXnPuQQWX3QQxBrkJr15mz4BVYDiNYCFWPgeUC8n4Ba"
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
