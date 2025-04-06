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
    "22Db4obBH35vsRDeE2FKKoDvWqin1AD25kWAcWNHBmxXYF8M6hypDDYPwEQwSzMRr6E5At9EwZkFqYptAYSr7vmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R5msg628JAz1GuZhfKpcXKZ4b8exZe7rrb51hd2hybjAERpsgfzHYtkEPYEosfBEQ6RGG61xAQ7NQPCdxJayrzN",
  "key1": "2kK2XX2VUEVbAmoHbTwjj98A9tvxVDhEwXH9kLiXdEt44L6Cxji1B5sMMUbXYzJYGsN9rR4qGJrFa6NYKCMvPL6W",
  "key2": "42NFCJumjb9Pakvo7SrfGVGQAbKtGSj41iSdwLQbaQHJy43ePKAEiJYxu5pmJkkU2MADAqASioGfMF71o6HMmGwA",
  "key3": "3yt6Bsd7wuZTnpAJkVwrvXgVKaJkKBb8B257YDtTUfXsZ1UQAJ8tpqyuh91HqH5XGQRxbUzzF4cGg5cfuJznNyoF",
  "key4": "4Du6zM5esYeDXTUKKUZbBmkkCRWGqM2j9KqNTJjitvpTgwSAS6LpMLRz4bNjw8WdjJxCjbZyPrYyZVz39XDYWdtC",
  "key5": "2KbxvL8v6MGWTwo2ktfqB9qYCaHT3yZbYTYP37yyoUb4qw8cLRvp6yVsrCHJZapHRzs6Qy7uCJppQe6XPAXofcRb",
  "key6": "rL8x8DekVbwQY1DGj5m8imqv4JjgXdpyuyAfuPDErXy4e6fTABrkpApkD79VEGoiG5VNych71Am1S9NzNM4Fk9j",
  "key7": "5pamesp1sQgokbkGUCopXei8hdQ2HSG5QdRZyF7cU2p9s1ohrCPAHCZqK5UEesAWtK2VBA4CVRDdALrKgtpucRGg",
  "key8": "5c6woZn5KH7VptyPox9ucidoc7aeJQmHB1P92eK7dvxE8GaKU4HhPsw3vyvWczXgjpHudHHQiudTwhCJBs8Cz4Fs",
  "key9": "4eZacvf1AEGdiyYbYczF2cpmiSQqxnQP12z6KUYqxHBzavD3HVkwn4NHs2aRdyAc6RVcsYVTZJpKF3VBNHJKUFjM",
  "key10": "4wKPX3V7hFb2NGvf73vh41Ai4fk6E7dG35daZHsQMvGEbBvGj1qRwFKkBSKYxdmXdSZ2Xbk1KFrmaaVmwhTV7B9B",
  "key11": "44fgtgzfXfaNBGiUvnwY57oLQQyyuxRyH97sfi8z81Pr5vgaq4XWJ7e1WZakfK7oVJ77LGKy8FWdhgh9F9x7N9v1",
  "key12": "4uGiG19oS2avzwwRtzGVmYU8crTuwLPzb1KUZMuz2xYF3AtH9YSnyGjqwu7qSxUA39wPy7GdCUpUqhjuaFjKLsD1",
  "key13": "4Bn33ivnVY3LfqaQAYG6y3Fr9917gDdMisv6572ExYyWvpo6FA5ZeZ1uqLaHqgfsQcpEAiZH7aWhJLyEjiUis2pq",
  "key14": "2qHzgGdcuG5GWxivpEFLsWk14SUN5BhysHjYSDjM2r6oVycJFkvksfcrss3stGrexXMzJhaEDzG8H2sAMAVJLRjw",
  "key15": "4arbTdoPvmNpThYDPju8tLo8M8dYnXmB2HFS1jb3iWK7tGjnb9foJX7Bt3CAdvt3Cekjpvq9FAd2CJpp6yVjuuqT",
  "key16": "2B4DwhLFUzDkwwQk9gqSxeQeUuEa51Eu6Mta7FWiai2c2vo3FT4dZUDHnhiaBRGq2aiKH6px6pnB9WLiL6teRCx",
  "key17": "2XmEZf5BumHAKBjte6VEfaku8wHCUXwS7A1DYfTQan6ubieZYojVmx4ihGZwLQ8stquvXw5mqT9BEmwQYKdgwuTU",
  "key18": "yKJzU6Dz6jkDFxNcRC1a2xfE3CLxdskZb7hSmtt1X9ayWptxDdNYFUVJZhgYncycahxvBAWyLh6vycPfcZMdPcw",
  "key19": "5LtvCmFEmq6ELgaMSTSts221TdSMyjv1iheWdcHp2pcQozfCAdZjMkH2hZiZJURqRhyQDC5js6ft5JSB5TzVMS4j",
  "key20": "3UEdzy4DzbswQG26e68n5BYyTtBVtWJNNPBuABtTzTvmzw7cFgY6gvwQWuUMt1JykMWdZchGmxBanbHQG7HGBQ5r",
  "key21": "JQF69BzkBSvmBukSbDbxThojqoh1tUPXrxdFFezptA5kcnHzGLz7tz88QxJHr3p1CmPZasePk8XfHEsH2tps6PJ",
  "key22": "5bE1xzGK7tkR46u9rKDr7QB6W4R6mQtcgkvFqZdCuLsQ6dTKc6na6MeopiFuf66CzsXnVk29havmBKeDxYeKrMLo",
  "key23": "2CUA4mHjbcCXLB94nBcQoG76ATYg1zwVWWGWP8CFp8bcov9kkYw2omRkjWiqF1c65goMkbidav6fAaBYqArx3VEJ",
  "key24": "Fq2JwnuGjKyjEAwakuP65KubTeJtkJBivVFNGQm5Hf4sJRU54qPSQuNz9zZQqscJMhWaeXhULebdufXbYnshsd1",
  "key25": "3yeTm7AnPdcBQPdAJjX6FoPVcCPE5GFoYQQEzVYvBvuriaa4jKSAmJDVzs7wm7BTHHReaU9H937y3GCJAe7ZCgNk",
  "key26": "4LzzikeoeD9LKMnw4zbTASiR3XmTEg3SxxbT7BZNBhSz5TB1sSwjjAyT2DaqHCAGVMFdkHyXqazaYNNoAEn2vB36",
  "key27": "7oRBC6Fp4VqVEMSQHhuCRR4dGtuLho1EdLHhNapQ9F86vYtaACZw9Msmfzrj6NnaTR3GMdnapFEWy51ubHaS1VJ",
  "key28": "3PFZuorzVkL9GUEFTQCPHtbAkDtadhu5agAEWoRdEocxBpgdp65UwbBJzsbMh5Yyd5pk9GbUMoikmf9wsabYbT4E",
  "key29": "4ZqeBBuNq8gXH4zzr4LSHmiU9yV1qaV6Jcsp5jVkBYrXbfcvaw3p3fbNSH5HXHj9cugsjjpTPzaSyAtYrGc2gYhe",
  "key30": "weg4MsxmYUxx4TPWFR6Qd6N5Co23d819EBmuPfPYGjSx1mfLXnggqFNaJ3snJ39cXqDHD6sjAzqFDFKNFAQKV4t",
  "key31": "3ghmQ7QSdwcs3ZsYHJHLro6aQKLRoPwVXy1UhwxjA2h98JZuWTWqGX1Ut155iUapHTbsL65PyxGEaYmZ2ukjoT1a",
  "key32": "3LUJWiGXqi1r3B42Rrh9a7saHfNeosv83WT5CAHW2avDeGCWNTSXkewg8iDeWxdJZZWpfCQz21KpcMs9Dra49VU1",
  "key33": "45U1xMW8uK9inTzZoNcpPQB7dehqX6LQKv2oE28wo4JkpxTPVnbhA17hDoYyDktns2xZa7XwGwtSmYqpF32v4rxE",
  "key34": "2mjxkMsb4DfxVAGhG5QdFvwkm85Tx5qnEPinDA9VgHP4kkx26rYT2A3QMEGRgN5kReAy9QN3nrGYEbWkabiqeWMB",
  "key35": "4UkukEA9YNRxMyKh5AYR3Kw75UHdvkdApx1GxtCp76xDbtN5S6ooMZVwxm7Ji4ZjYBW41DyNpdCb4R6s8sNXVxZW",
  "key36": "3VYUJeLceLhgD6zhTiWrtWgwWAvt3GsSXDZhSgwikxCSEKyEHTHzhk5sYVQ44FgE5YkKCNFpMzuRKkbGadfyQvYD",
  "key37": "547BtjCGT9uAWKS7cWzcakTip9m8vxtxDuQ6LKer5GoCfDGSBTfdoJeZ2nRh4prgX5EdqnQKs68H15E6xYieSZ5C",
  "key38": "22SvYEQ5ChMqC98rvyMWk3iQkex777fn3YLYXEztErT7eGH13RqsY6tvofH5GDXncsZTNFPcPZyCHEVabrjiPH8E",
  "key39": "5zfjzJ1TfRxnFm1AgtXK87wY5EyUBXL1qJU44w5UufNcPbfGQ6b14KDhtGL4okKL1sRAyoHtpgUZe4UiMXj7Tf63",
  "key40": "32qQsR1J1rZQqjGLj31WQ5VK1CTksPstA9CbThfSKW9MEQksSdF9G8LXWNUqqSnnsQ43JyYfwstRaz2Reti18gnN",
  "key41": "53zeCVYjF1bQ4q14KtoGzWb1vHhqHUDNgCyPU99UJ2zWYnWE8739LA2rV1GHFWFr6QshyXUEqMzdMQFkqDC8Mryt",
  "key42": "2B4iXkbP3y5PQzUZmba7SbovT4WnCba44aSgTqZbRLDHgbNM8iVD3YkQPYSjS4wyiShoxhvuJyehMdMyHcg2kVp6",
  "key43": "6gaeZs6s9dS4qRUcFmdguwB75JD98Wavpdv8EoCo2Zvxg441XSoz17Qc52XQwo1cbxxHcas1izmLhMYAmr1XXmx",
  "key44": "5Y8KWfWQrTv7kJTQsVqVPAfVnHCcyZwdBhAZfj24WaDcESahyEEcmhuagkQBssafUJAc4zyayGMSE89TZGBfvkec",
  "key45": "4RaehHL4nogjkwwHtGaDanFEyfC3Q2o6h5Hf3NKQxLMXuXarGxmAsdgN6ddbD984nHJpa8uSfA2iKaZfaWnis7pR",
  "key46": "3mKrvPNcYtZswp7XmW2FxrYaaNoNaJzmqCJQj4u7trt5hvvFRbbpYMvuhYbRJQWNNqkQEP64mCfQxe5kRBttAC4x",
  "key47": "21s33CxGLRBbbyFSYkXRDJ52Y3pwWuKm79WzXDs33xj5QYAWQVUEwJvZFqVnCtz1f738s7c1fsZe78XCAhfbbxRP",
  "key48": "2siKD8PQTVkYM5TMKkSWsSinDPeQo7BTQYD7pF92rE49bAyFf79ZyNkTBVPKrk8qHHwwwvESgjM3dMbgX8CHuyVr",
  "key49": "26dJr6Nb6t1wppLbvetzeYPS2Qnw5gyz52mw4L2nb4dwrjdJxrcUAjeD8qDL5RUq9zC4PugAwoGJpQyurySuxM4G"
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
