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
    "5p8dgFtzXvRCQ8CcukHqkLUGCiGQYCV4UuvTjJoFcA8dxpYEUN8fxRQ5z6Qr8aX2tiDbPGE6q8JEGMpRDxXmemNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N3EL1fpAfK7GPyYzASMeG5hrjaJJViMMHWqSCESPkpmix8YewNXfj2k8K7zid5UDHWDwDQ7TQVjiTVM4PZsMSY9",
  "key1": "4hUTRvsq4c4Pfo1dAAzMDqC9K4doZAY7Xv3d9mXZUAWuWtU2aMU9dzYpU1JvioyQhJc6TbkCk6ZhPfVtm6wmfH5W",
  "key2": "S62DsiaiTQYHEH2UVcxBHZo44t7yTg8gWvuMMsB2gm8Jn6XjVjqY4SwsBEKiBZf2afoRpgxJcWnNke8o5a6sGrs",
  "key3": "5qGbfQbjP9V4YPaBTjBCqLZBuZzb4ZvRM1dvkeX4aXTqworZWPTXjepoetAyA63hshTL4HM6UeypFKjr8aNnJrmW",
  "key4": "4zvGWTf2v8rxMuxi88h5y2EHgQQ8TLXDoEn3w4nfgiYrvMvFobFVFe8yE9nmdCeGA2aE8aVFnVY5N5dRrTGuzRiZ",
  "key5": "u2w3P3icm58MeTGXANZoUYGNgCzoNfRbM6aRtFkGuE7MD34xmw2uABoBz4TrsMBn33P6c1Ez8fsSVYWM9TQ9rkq",
  "key6": "L5ABe1K7ujjuzQ3q82pCHQQ8SJF6BWEUG4DtNtNrai76hkipaKCpQ5gsxbCsCNdEhPCfmTRrQchfq676rKQz9Ay",
  "key7": "3LJNQ7LLR5bsaWxT9fKYN3fT9Bt3SfXM3WQPUnvyGHZGrEYZp8uyHGEM6jh8ZfUh8VZtBUcACqzQAtD23KgjdmXx",
  "key8": "2u9MBY4NY19PeHdXHYjoqQFveUwnW3mqyXXjjMM3zJV5nUGKRTRJmDceZMUiYsKSpn3e8Kt3QZ5mdAdgCpfh27zj",
  "key9": "5tj1s33k1EpmqWfZEDBQSkjEJLrJXAt4ZBwEnw7t93JsxQVarWPP2TPSuAk4mpk1gF6DrJhQ47xfuWHYGJTxE7N",
  "key10": "5uPahi8biACDgKxLmgbv7eY3GpN2pUYVsyzgHHL3ajjWTCW6eJfzVbPFzcEPx9kVK715DBKutf7A25pQ1MvBw42H",
  "key11": "5uFoX4eZdULpdsRFPHi2P21yz6csnbf6BHwTQzzjnr5xtEcMVCdSEBiNcda8vWd3D7Q88dYnc2xMLXSZo2MekR54",
  "key12": "54ri4wWn4X2Pg3QJtNMZQxkzDkqC59fh8RvDtw57LYYuit1nZb9GTTkRxpzvNbuPUYtXNsAjwH2f117odfPxsr6W",
  "key13": "4t4REzmchF7UiVqsjedmeRbjUDjj4JBGH9jQcxeySjp6Pj8gWAcf5tnwC7sRwfUpaUp3zz7W3stxWHFNmjPBDWei",
  "key14": "2KRwUvftukbAh1xzwHm6PvrcZMmV2RyyZbv2DcNQkrs6vDLpEEFHpKM5uuqTnH6vHPQDmPcLpotY7PTEu3ZTetcr",
  "key15": "51oShi1DD3ycRxp4pVYoSxVrHnA8Jqt2AM3fGYPokBjtQ71jkMGePpQR8V9YMFWqUUc4BSLeKA3Tfe6UNBrrHexc",
  "key16": "543tnE1W7Bvv8HJPc63FXyvp9sLckXpn6Ls5P1zZLrr9s44he5Cq8V8k8tGXUnZZojVFkJQzuL4kZW3WPhPph4gc",
  "key17": "3Z5bcwdo6MGAwkNj9X7zQjZabU9nwkmBDxzn2873YG5mFJxsYvY7CooRjAwmHkZZK4ZmKSoymTcU2opycoHwXiD7",
  "key18": "XhGACN8yQXDfEYbWRtxoEagfD2g4j2Qbj1KuZJ39tf9QN5mutFfqmDSwpTxafukFh9QCQp5zVLGPhAPNgxJED8u",
  "key19": "pK8AEnHnoqVene2eWpLkcQMrSkaBnQSc2u7DAke5Fdz6NLhgXG4SP9noQaPeK2JRmcGdNijdkny4JoBuRyvPLYN",
  "key20": "2Fi2tFG9YPU4BiTzZop74Fdh9BmMwAQPqxcU8UthiRibRJ4QXNiuSCuagF8eK3FKfL1BbypAr36ZBVp4MzT4Qbpt",
  "key21": "5UZfbnH2u8AmSGsGrCpmvyLaC9bEb6ShAthDjuAFjM9x4EP6Jch2UpBG8LrKtNx68iDDCTMMjD1pJ2ff4wJtPTGH",
  "key22": "5KoANpVuGz9zA1QrBG6uGJ8VYdXwXuWGGZSuMfzuPC6FaVZBh4X2zyu2NmUV3ed3jPiyHgnbtHqvbQiStzG5x65e",
  "key23": "5Tmgh28wFoNyYm9Asspt3QDMCDgyDPsZovfT5DTgTeswtKibbJ4y6mgZaQiGGejqQSdSPxxPYshjnrXZ8WCJWwoi",
  "key24": "5gqXjCLsHqdp1yn9eL29mZHbVsuURc7Mn8A5UDz9vnw2ozgLUXiWvPtfurC2DvTSdzr9A2q9MvcoowQPqjowP23u",
  "key25": "3KL5JyxzgE6jitqFiGBc17R4SpgdaLzfytiaMiLijkuRXy3s9tpRKPzd3JuFyQv7cezGYMh7ozpT8NsvoRHaNiEt",
  "key26": "5NGMT1MAchTmeRcVaX5gpEqwfTzT5tBDV9MduGSF2UgSJ2GzPpA5m3xF3zBpcv6VkzdRAsfogtLFEHytUyzi8JVN",
  "key27": "3PftuCEBsYdZu7axS64Ds5LVC2WoDvqxGuuY6VNDcWv2EHzDaKV5fqbd9LbeCCdE56zaYBEDyJixFTCf8LLBTyfe",
  "key28": "1U4GzKECj2KoHwvQD19jauUZ7Ly2qvJeynpdYFJXC8gg71pm9qFx2R7r8gGgMXeGMgibFMfsU6KXpE3TRPpWZ32",
  "key29": "5WahW2qd8cQx9dV1ASNqS3Z9GL7tE9ptE5XVehVMYomApyA9HKYXdFH7nZ3kGRihmNdfsMmkZMvZDdTwSXfXEev1",
  "key30": "4TAMmQvDArYWK9ZLpAzfZqQiWZbPw4NfB7toFBRbjPC6Hju3Quc6vyVcjPY19vSPvpa7qBxMKTe3kX6yyeMLvA5V",
  "key31": "4J1T7bvmhLjRYX8af19u6UFciLdRScSjgm5VcvyGuuwsWyy188ccLFUbZhcNpQ82CAPtHvabWkcgk1VZiDVAEMbx",
  "key32": "4s5aM78kA3Bj481EyHspDCBhR3qUcvGe357dqqQMtYwzGpHbGaRQmYFWVvHHx6bZiXkehu5ywQERwjQfcUBePgd2",
  "key33": "558gz3RRn1JoBXSV9QFqhFMYhQpY7JzRwDa94WpV5D97eaCEn3rx3rz37s9sTCp9cX42jTqn14wQW2nZUNhTrygo",
  "key34": "2dqkpg21JES5skCZgVHvLRtP4to2tfbHEfLVhYt2nQ5BF16LBYocARauxQjvzSHgWzB8q2MJH5QQgnX9CuwYgT1Z",
  "key35": "4FU6R7TrZ2CbRtZXu625hcGHp1FAgfS36dPg58PQzGSmKzykR7ahmuf9fPWk1zy4LbKTuGeLZGGg46iVUb4KA9HZ",
  "key36": "sDgGgfxnG2XjvyMfTQck7PCodMVukqFRVU6U7joZUPkZKRHB8x7fnVrUqLu9qhi7ZGt9Ys74kwkEteTBY4Yx4sR",
  "key37": "5tDh4XZoAA3SXge8NUQC9nsH1i1navqYSBq9dw71gRHHz2pHprLyy3c1cchDfeWywNiRJB74E8oaKg2ReEa8eTzx",
  "key38": "5LXecLTmXKZuypgab5GHS2zzNUC9DqP188VqFjxVaGDMC7N2MkywohxLftACjyj2E8P4bncAwQiyY35Vxwpv5nXq",
  "key39": "4rNehyaGkqe8LXyr2LsBo9LXCugNUi5u2xeo9Z4V3RQ6YnufPCVpaNTkwxBsnoDyYoQjfjTMiifR5iemyiNXJ4is",
  "key40": "46hbBLkn5qFpecPSLau4jbWekoMfUmJ4q3NSsQkgszPPpprBkTN6Me2GfcjpQwa1zgFi5AVxtkcbuEysZKLavLk2",
  "key41": "aH1BeVyedcJWmzLhmBf388TVMxma3zGjzyxjQiegDBd3e1gPqXZra3tj15oVnjUWADWSN72HsczP9z2yUqyik1t",
  "key42": "4XFWKD5oqfMpxrWEfwD2DoV75ueVKw4xB9QHBzGihoFSNsFwKXQeKTXZYzSqHj7NnGp1tgyPPh8863vNYFPauAiG",
  "key43": "2RSE7eHA648P9rvaeZjYa9tXmPt7F6SN46h8yBLHrWVbJqREuYXvhthHu4RVbhw3Q2DpoE2p9Zkwkfib6qb1KKDX",
  "key44": "5Cy9kL1Fo6ZV7pM62Lsum8ryxfZCCsau6a69KS45VhVDfddj7iTobdFP8vjhg1QmKgMnFbPtvF95REHTEM4hKmFS",
  "key45": "2Ds9ii3DEsjniwcYXFoSPzG3qTwgQ1QDDTiFcDmLDuD5BGYB8wCkBF7qG7zXtWYsPJKcPARSEPuTrnLMTzgSgLWv",
  "key46": "36nB5zRss8TAfMMVg2ej4Cm8HNn1b2EUUJv2AY7qWjKTAef56KXFb68DcpUFt9VQu2Jd9J5316otetMKhsTjt6Rn",
  "key47": "4ysr1jYTopE61ttteYQbphvaPfKhpwByswxw3WLqmT9DQjtwnv6NEfbAX1xxsAHSPMZbcXf4oEQWQSUpkZ7zqbED",
  "key48": "58sAJmmmQ3DGSQEC8BvVb5v5Gci2e2mHmBmfnkkgcMMmurkJ9yP2f9ooc9LuG1ak8jtHSQ1s1eWUgLxufimtgRqx",
  "key49": "3paW5jQDevop1XJoRxPJK1XREQ7scwgtbmPUNA7PxvKJVVWR94GfmZomNM5CJpH6kdsBTEPQ8sKxydKBhP5wJfim"
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
