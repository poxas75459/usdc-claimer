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
    "nj3VJtZdvVY8KZXwYZMDckhVca2XFzVQchtwe1NjthociEmYv7dBVijYSGkHL6GoMEB8bQNUdvCSDmsLKJaqdug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1zPNEPC1ur5oQWfJBGngRAoQj4c6Rt3UpeNz6HpN72FcamEspGY8UHe7rTy1ctFUn6oEx4Ft2SorW9EfHmWeRw",
  "key1": "2gEExaNgKuRhMmJEm1vy9wGBrmB82cemKcDpeYF4QeN1KMXveGrnofkFACjyfG3VWgq5kmvWCgTx227YZj7RhcMR",
  "key2": "Frr7F239VhUDRPaKcZ1WdmbE5Rzv8AKkTvuFR2c8RKdALubhSTPrajaqTg1k2F2aV9T3jwCcqwNaoL9jusVFXSz",
  "key3": "UKQ6vTtpLHaMD9gyVc8bS1fDGMV5exhMgSR3XSV7XKu6zDqbqekaNJgfiMAedrd7Bm6kffCZugY9Fxz84GmY1JP",
  "key4": "3Avw9cpcSMyq6R1ZN7pEVBxcAQnodrHs1cVR1DNe3N41K6zEagttnodokaGZySynstkYDqqUFiC3qMpz8wHxkMrr",
  "key5": "2oobVKNKgL9fJYo1thDjL2tJLCeaXKT8sEvEd7R6ddcRffUwCc6m2msA8E5UEEAGvkoeX1iuHnqBzZneoqKsxHux",
  "key6": "4N6JP2aW58cqmEG83auFFtzWCjjHbVUirVbqRz8URWiNJXSW6D7drha29pFYtUSFFLmj7jcPGc6Bq3EyTqjQHRQw",
  "key7": "4YEGMuNQp3xDyVb7bBPBitv359KLSdwEse91eJNBnAxfC3ogHhWYGSiH3cNeHvmw979GDjMuWcmNUGgZuT98jzmp",
  "key8": "9FaScSRCNgRsg2V8tQVSY6ibgwkT5anjB6mfdBihaUmc6exQ9UVtWw7yjgd6PaUs4d2ybNLhffoEddWuEsfw13i",
  "key9": "55NEU35yK15rHfQkrWEFhqJaEMm76MQDXMu7mdoEStCFp2RhwHutsycnVvEZ32X2D7rewQeESXQCCjodi1MDsqLC",
  "key10": "CKfvNfmU4yDH3GkdjVv3fGCC3Sao4JNFu8uhHcbPxvk6FMQotbd1CMJjWc6tYUYnPYUDmcBhq5rUjNEQxoWR5cp",
  "key11": "5XBBgGGW3guTVWrUhWCYwVA1JBVmCvXyiPKpk9UFHcoSZbs7gVo2pjEGocWgLqnM7exgTqZmtEkv4UN1dZHtxzuf",
  "key12": "3HTUVBgsbjC8z5tpzzb94gi1m2oRooC1vMEga4VreL2boTfcBpaAeusxrybP4hhAgCztdziMJBUQzxDaRp21nSZ",
  "key13": "5Sr3Vk86Ks7VTs7NoJUtshzgaFPT3NakGEsauBRSRurzdeSfahV1oKT2XVyV563cghRhWR8GrLf8VkiKqtWk5ZT4",
  "key14": "4boFxnB6btTPVcmG56Wq99ijnWozDNHqVqGDYfePy6HM3yet6UcR6X27hTMgwJ8PhMnNZQ6CyyGxe2s1YSiWQjXq",
  "key15": "AQmd6Neamm7j6onoPUULASpu27jXjpicVrRNUHQbT8jwfiGcApzcJRnTV2DHpaww4ABVJbKJQPzxFW4oKQeJdCE",
  "key16": "3Ckd2EQmeC1niNzNJuzyi5w78nQtAGAmHdDx1tq3dd24kp37K1CRbALMLwHfUB99WwqA19MRMPBLrt8eTS6H8UG7",
  "key17": "2qxp23fkWtrQpDNAStR5WjCtedqgxNVjkWecTc8J9iPhKYWFGgE5bSLMT3QQViUKmNaoNHv5k13DrCtHrFcYZm4n",
  "key18": "49SkpNAoAWswFRDmYE3Jpw4tCjPd3RLSLPLEgNHm2zahkdUUHY8WnrMfcREYjcvJnadY8KCNVaDqyXoNKtDE56GH",
  "key19": "5meyezmwpwLekfKveEj22WZ6foUPej813PFnmAm2djhsW3EuxSSGSVZ8zJNezVYZK271tqjgEo3s5JQHh6pagBV3",
  "key20": "3i5VSvR8gdtu8yareFtDvwWCwjxmiKUumXfDMHGCLq8DATRzrmgN2NNj6YEVx6ZTWctuoGXkKZmJTwak6jKWL5qS",
  "key21": "4hFMTqqfEG7G7t7HjgkGyN2kB6RMsoGBavuyGarrzbbdoCBHYgeobwBfNrK71Bny2kXFHY1aX9SygieeTXdZsxR1",
  "key22": "26LVtGsNZokB6bEw4BEvQNVQrxVC5bU3FDqj4qY7T9XowKgtC2SnRkyoszjnVwR1h49LXaXu3H99rM2xZWDKPipR",
  "key23": "xv6B5WizZ6AzJMRvijWgdWgbhumvTqM4uJbdNfFD4XqsuKpiJAUm1nTdMFkaj2J2mr38K8E36NiWGKbyxB3yGgW",
  "key24": "2MMVx5PMitSY49Eke1my5WgK3n5qY19GiYD8PXsxDmNadPZeFhJb3XDMbwKwQQiEBx9fWob8rHZoyS22rE3QSeNY",
  "key25": "4B23GhtKYi4Z2E5GpPfA88yjRjCfL57PThDSjtrJENepwVAxPGo5feFe5H73drv3dYxaAXbYBLUX1mgYCEAVXjia",
  "key26": "RgUCf8eyktX32QxffBD2DkbHjkPNQR77Mq21bSY5o2455NNYXhcoUWTg3Wj5LomVNQ38ZGsdDcCzjDYw9pcTsB1",
  "key27": "62HLWmgvekUzw5rCwqvcJ7gyKQiHcNAnE3sfwbDaTSb4k4AAWNwDGN3k2FjtKceStYo61ranLE3fYRZcrHX2kMGX",
  "key28": "yBM1fKmznsxei2qp3h6kjv6aNoXsS5KZA6f7ujZMnr8kEsZMVJaKKC5QeAKUFMXZYyfzBcBhadymtFZhDtBtdXo",
  "key29": "3mUEcqcfZZuxiih8MZ4pwwWfPPiVC3MgNc6aUDgwmma4ipiLLkvGCQtiw7Sk9YpSQvECYhBzejEKeLwvwJymHwk6",
  "key30": "5R85KnHkDgVLuaJi5d6gjYhwRDJUBp3yWdaNQNuHTARWpdnXuLepgTTF6FZJnizy8B23Kes8vDL4iv8u8Ruzt7GY",
  "key31": "3JGR6e4bcFFNwD5zofo759ib2X7Qom78Q5y9WD5iMhSNmSgPXdZXDigD3n9UzDKhx6JMiA9apYv6k58DGfDBePmt",
  "key32": "Jr3Zd1M1PBp8ffQDjQ6DfaTwDBTSXZxyZ49phRNeh1841UfM2duCyyCo4qQzapVc9qHzkaDVTPes3govLyX9s1B",
  "key33": "CyuDCAH8pPGwwmKnwULUTLjZW1ohq9EXMWi7yCgy49CVRuZu2Gt7iznLT3oYNKozbEJmr99xqUvfEoc3ZskjyKZ",
  "key34": "44VB3oSqCHxR5TdxtogPowXivioNfDckh72NARSyrN57x74CB15YCgfzabgdP8CtHp8tk5br8uJTcJCx7ePvGA99",
  "key35": "2t9Mpa1rHDJWq1U1gBBUMVT22EbFzPjkxbrPEWKFY7LvCbjHrMVpjziDU2RfgWsfQuZFGHZKho715yJ6hJsAKUam",
  "key36": "54MCpE4aaQ8x3RUfwwo4G68zcMVUUuNjixx3pAdRxfE4VWquVXXLjYcCRhoX3bTdsca5ioeWQiRogXxWSHd7eSyL",
  "key37": "2TCJ1x1Xzthq1RtrSJLKb4ZXHhThAUsDDwE12rUnmonWb66UfFRjNLcpEi1Wpax1GT9AjboCf8QDdwh832FN5spQ",
  "key38": "53HsPdwR7QvocJjSiTJdFSNumSnu89WXhf1GRZ148J14gnvZd8AbnUujLSN2Pvg6RqanJGBVeyK9dTTZ7iRhcq1T",
  "key39": "3LSNViaQnNjkefTKYi58LVT4pNCKr9eBBJszu82L2Kk29cY8SwZgpx5B38hyHZHYgGWoxBU5E76epDX1pXcjsbcc",
  "key40": "5q2HYHAYTcgabnq6JfPwMwR3mDrYpx7vNKaMRcWuBsJQ5YrnYSBiZNqEWibGvGvXmZaCKYZYqqqDP48oHSBcDWwL",
  "key41": "5P6E6YhNPY4EpxoiKrcuGTT6efpgD391LEoT45ww2YT8Ak5Xw6DZMi341xgSXXJZ7v4ueBDwp6YxYXxtzsSkPwpZ",
  "key42": "4dMwQndNCzBiK8HheuMfCwYBuqyMM3T1u6Lixhb3vuTAeAnVADXzgHSFUbhLTMTnzSjtGRRHjKGKkdoB9Kp7vnBa",
  "key43": "ycazfpdmKKLLRQBacwBX3i7tMkpyeaQjSLsMLWGzmACG3pnySaXmNgYMrudymmLwRZGAoEvdyC7XKr3ZswcGVS4",
  "key44": "4W4EYaW8ABTSkvL2xB9pAhTNPF83iKnChjJrMyvVweMb9R7SgTBKSnwd7HR8s5vUMZcgoQG3LpVZ8pPUYw2EAk67",
  "key45": "HoEG7LGtbRbA9jf1uyLjqo2rxN1U4ziDiatV1Y42TQMbfvMeMJtjWAn4AyF45H7qARJRPejqzSc5NUJP81rsqLd"
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
