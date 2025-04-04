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
    "5YbEkkoQXsTNTPzuYMK8U5oYJh8qUsYYh6yQC6f256f8eZqxbE6PTFzZegKCefcc6PFGHbrY5J21UqTXwogAFiLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v285pgvKFtX8ptNqD8DSZg4sWgaubX1ye5ofEYLSKm2yiCzXvZLQPsWTvSXzvhb8qpxkHgPVEanq4MusJNEhCkj",
  "key1": "2zT7KKvBgnoMqTwBK3h3zmmxUth9GR1xLXP3fYzxJzdAE5NVyPqZwoTFLvnSG9McCrDosakhyP1QGK7UB3djtYKS",
  "key2": "59nf1PDw7bFdYpWnAJontmDFYSBQfFEdzVa85gfaWP8BYbDQW6y6BJbrRoH5udYgmK2aTYveHQz3YwqekiTzbSCT",
  "key3": "4Mzq2JDJ8XjEk1hEtWzvfJ87umZLU8rXp3qC2d43W1wxrszv6UzKJfEkKGkaYyL6HuUgtNk22mDzFN2ek5CwrB2L",
  "key4": "KcaFEvAw5DmdN6XAQRDoBqqp8xyC8VNrGfjokEbSAD8JdkFEzp1NvPt4MXsgsnoB9wg8SRZueNvY4g12JAFG7Cw",
  "key5": "33tWmagcoDaWZhsACFhjV9tujBuN3Q16cKv7SjfCS8ZeMfbZn5KFyTm7aNqPsEe8xiMRTJ4REiS7VWKxrkvpwGwf",
  "key6": "4VjUNFndHn1tGDPYAhyvhHaafKuEubAt4a4sRsmF1MqNDiQR8uTqVFJaHa87ZMQrMWKNBeog7vbEQERd3zpq8Ng9",
  "key7": "4jNhfLMceHZ4puqdiGjyX18UTwarntpHXoB7RYKqcM38LiFJn1qcqmwy86uWGiBH45jMffhpus9iv3RRYPsSvicm",
  "key8": "4BQKHQCTzAsyR4cEaAuX9Wg4uWJCk4KDAGYTUyeKanxuP4SyBTZRw5sUBtf3dA8Vxc48B8Doxu9gjkTXnYsKRvRM",
  "key9": "5WnRAMRAqm76gvX9XkHDZpUCEUWUPZD4wQWuDauabzwbahw8U96s1pB78pJJGsbcz7qVHRW3BNQJFN7tmRcG97MM",
  "key10": "2rafmb685xkVmqTzFiuoXKMUkxRxSwTvRA9dccAW3B4X6TbjREozeETYms5QsXjH9iibNjatn7TizQpoECLwSChu",
  "key11": "3YhqF4vBETXtGPupbShqkUsqe58jDyRpW35iEZr1PJf93q4XAxeVaZRUnY58VWcYX6DZLzELdyPKUh5qjCL9J5Lc",
  "key12": "4EUKKQWWf5LFFRj2VM2vXFR8RM1Yarpov7EmzkCyAJxdzN24uzq7sdK13pA6snQ5HGiJpyz7NaNVhMmUk7zhwZ51",
  "key13": "Q61Kx8TU9banGXusGNKV3jp1kbbF9GJ5nLW7uFHY4DwPAqriDiHynzyoDVnf7J9cbht5biBMpSJX6hEbfcJM6yV",
  "key14": "4cRXQ5NnzQ4efobrroHZYrTZZ6NSUfqjmTHNTgPhRnmShFkFMYraxX46xYUVob9C2uUcF1j6q9KyspFknu3oxdT5",
  "key15": "5rApDhSpeRQJ1Gk4h8F8XLjNZK9hSuN1xV89kK3k7mvH6WxwU1nXa5N2M1jaMkcwyAiTiTdJdTsH2adyaBEWNafR",
  "key16": "5HWhuLM5r71EqiauEvXp5SekACTcXZ2dxu7t31n5L52LSZk6F8f4Ni9J2xmZLSKpmBnzkzG21dxznx8U1eXzkzXv",
  "key17": "3aquvYAVvMeroQxJ9eZvvbF6vEhfpvXNUYmTuZkeKNpKw3KytM8CjEqs2zYMxwE5Sut2hBvi31ZSioo7edRbJtri",
  "key18": "5uQwXBg9XWYK6tC9Ud7tQPyeBZ7Mfw6Rwk9P2i7dqks4p8jpT9ehfaVQ4nEdkR4sQQjpJJjAN9qZMVvor2poACxK",
  "key19": "zXELC9VwSSTVDA792kJXW3yyK8gZdhNn1m32TzRbbVTiBd91uUb7oyVrMTypYqi8iCT8h8Nc1T5oqbUebMxBh8c",
  "key20": "2C2svxkLARbRJdqRgpwdv4wwu779xRRkgwGt97CNHiYoekS1y5yBvGAbmetfJwkEhTZQCWN6SCBG1E5djy3QRbJb",
  "key21": "3eZ6dBGqyk3GvDgiyPYRXyc3x6gQy2mgpwt8Hn5XFX2LFRVG3J6Q22TvZsDm56xuguGoPVurB77wSdC5jcDb3aGt",
  "key22": "2ewPdNiD2KAWzooC3VHYjAm7yNYXoFa3hBU9846HfHK4LfG2f7Kp4gEs5SFouyeRDhHjL8vo27nk1riZNALayykZ",
  "key23": "3RTNnLBJ3Fk6AtJdjHegCjRP9tEw684NhkBDvh3N7MNkc3kFQfh3it4xHHd48q8UdwUyVHv2wSTy4F4ngjZesQfi",
  "key24": "4jwrbx76yiyirqvuuQcrvsnLfJnBm6hrrh1m8rgdoeWYSd15vRjo45TKNxriL8NsKipfDDqB2PwTG8M59wpHUEqm",
  "key25": "4kq46mPiFHeUqktjsqq8SMSNqq4jsjycmMAz6NkWQh1SmRU6uPm27AdFNvXe4RUavZL1HVd7iv7FJqgHgPSjwcts",
  "key26": "4fQZkKHcPQ3oq7CxNdAwPADdwmQieNbjcUCqF7tgTNKmAbAWZLW8ZBEzzZMhudcBWvVBkNfVU38ZvPWgt1EGhCFE",
  "key27": "54eAqdM3ysDgbU71vPQMDDTPGTw2GwJzoXJkV7y2FiYb98arRczheVX6DLB13WK1WoM9bzKTQVvztS8SkHc6RsnA",
  "key28": "2tGchvT65RFjsZiQQec586T7ArjFoxEPui6XTqyQtwkGEtPUhFQq6mQwp3PD9DNGadNRqYifRk68TiFPnkQXNMEX",
  "key29": "3h5PvrPaJD2DuE48WVevnTrXHmGSVebFwFVJ3yWm7w4JQGht3y71VyQQuNs9v58eNJbSGmxQHyL1np6JoG13N9hA",
  "key30": "5rLD7zruE8QgwgeTm9aedjk37Z4scxobkVncWAJtmuUiY5w8GzzDxntJ4XPQCdF1sBQB5pALBLyzYFptgp2WFYKg",
  "key31": "4rGnipQWMBi6SP3vsLR8vZadbwZUJtGkoKfC9XJPCS4mdsxU5QMGxfQ5FTZq5iEixSwkCiGKgVfXDzfsz3AtUrRV",
  "key32": "3Sf6TBsErrQCN9LJBbcVkYa6nNfYM8ZhZBXpUJajXfeXX1cv9LuPJSJsjQxkPrrbGohPyJW3R5kponrXagJLBVhu",
  "key33": "4UPkTYBCbXoM5y9dNqFT2szr9YEwV1fqsT7sgaFKXJoAFBCWMquKZfMtr1hremfipPzqJnbiBxuu7hsXsyhMRbDL",
  "key34": "2DpuhqAV62js15w6452zUTCmLruc8eauHkppRKDxpuhw3JipnM57FrVMv23qCxfxJHdpWaWy7FoU8e5ZSC5yEeUn",
  "key35": "3MY63LZwMyz43wZ1j2JdgdzhKH8bwxj5VFwkTiLfXQt1qLDgDthAVc3Zxg1PHz7iAGDEZiw11Eh4piL7ukZHLgqi",
  "key36": "2rCoMoewnBAVURaFfohGUJPghTDzSEwT2E5drjVq5bxguXcX9CHg73HxMnf1iBabj9mQ9LhVhZJdcEVsAeRCcWoT",
  "key37": "2XYdm2QKc5SVHwPQqtTFhBdDA4Z8N8ZTt1tTHDG1ov6Hj9YpksXm76GUfJpeVCjLtjaw4fNxyVKowDWz3bvmhMWZ",
  "key38": "Tc1nx7NYo4GkowvAKXUqsFvgzkNZWEu9X9dsPqDZjEAHp1FYyDDaKgBGvFfa578bxf2713yC6mGzKVbbhpRKRYj",
  "key39": "3m7HC9mA44brYEzgqvnVcwUbQXa2fXL48aeALotQMK6S52R66BSj3wgaKdXpYXKJKAU6wACcDEogt3vnfNRfTMM"
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
