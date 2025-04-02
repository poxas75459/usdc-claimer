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
    "AaiaVZK8VLY6qngU9rawUnufZ5XNgBJLQMRfoLDEQy7ZExXE988Nsd1FzCiwygq4tHUgZQC4cXYZ1ymV2RmgDWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CR7i5uUTa6vZ7U2sW7wwmSBTzygj6vstxw36bfYbcXTCRHYwbqX7o8dVEkF6THa8GuV2JNJE14dkc541ahbBzrM",
  "key1": "22T1kFzCCH3rRohdgAs32moX4KfVzqfs84uSw4PNLqBDA7NYF9qqXSHG7CgrtRFnLXxLUZpRho3GXnqEk8F9HP2M",
  "key2": "4QXegz68n83QdqfN7Uc29ZvMhRd6xBWxZ1ujiMC6E2VmpieF7VhHVu3boRPzDk1aKkKA5CwPvjWJGxqBaS73yLPC",
  "key3": "4LJFh3ahzqFfMnYzboA4hsriKDD91av2pmYw3oqmMtLeGG9kprfNXE5fFaoYoBMkSRiaVcW8qPp5ZEsuW3jKF3h",
  "key4": "467jy4T9N1pTXLhQQXgFj35u9MUdo3p7Dr7yeKw2uHJkdB68NASYLzjiu9wowiuUmEMzANYYahD548GUufWWMMkG",
  "key5": "5PogvvyZjRgVWXYAhhmXF2qaiofunGcUGRpxG3oBobxnnjEE47ArNuN6kefMXkR823pRvnfXFbU46gAr8WmvAFab",
  "key6": "3rUY5AvSNV5Sy9aXbBwLeovPh6DB3HWW5TnKTUGeX5c42no1Re6RghjHE5XWkaxrT7ZNhGbvBUnddvyuf4ESoSof",
  "key7": "3hWdTrVwn8qnPm3F1dQwYr5Arnq5eNDz12v91Kc2HECeERdcqUUZK5RkjShuHpR6UmGgGDLhQXuUW5G2UK5VQYms",
  "key8": "wUaEq57JpLhZgXUjvcLBuEVSZDzZyiZc3D1r5sU3M4qHo32zzAM9YumBmnZ8Yca9WtzakUMBdixfujDcJDT9x2K",
  "key9": "5TU8vTSkMVnPNH5DqnJXou9t7JjDWF9qZJvzcoMbQdvYThEjwrfWAa2sHCXJEXQhVpkv1F11PNq3JL3my6hdcXZq",
  "key10": "5q9cfEwC8yCmEaeWt7Hxm2VWedcyk9KgzD2AUEJ5j6mdXwh9GTsCMf3oRFYa7twr3jBrmTDbT8tqnCB4wec8rAqS",
  "key11": "CveWHKYdAQk24dMMrjSYCoyJxM1dTHH1hzDv3SYA46C9rPFr5PR85VFG5UaXSS5xdXzZA3hTgWLyCV5o2YqHYGq",
  "key12": "382z5Mdw2V3ojuqxEWzhvoXioP6YYwdf9wv4vZ4FgXctKDhM9rw12NRCNH4JWwpP3WvF5V3ve3Z2bhnzkaoLvWMH",
  "key13": "4GvEVd3p5oXLa3srqw4wZoNE6cvucQSKAcn9a3LrFTtDEHkWzGgs7P24eadTQmcYUeMFRSJAF4bdGxtMJcrEbern",
  "key14": "63TQ8fZFuYSGLAU9H33BQR3CXqKWgj4CvjcSHFKhWh9mAG9vnubuzyt7FxhcXQS9LvCWbeQR64mcgbafHvmey8M8",
  "key15": "jM1uiJB3qohcZd3u8PZba6MVJgdMqGstmZmvtRU6Xx6EWUQ4ThjRQMWo4nV34Ps7W75jNvnVNsxzroiqJksx3VT",
  "key16": "36xAATwZdPPH3GDXuJPbhLPrF9jBSZjwJsdu9zz54ghJh4RDF6nYZWJwyR67qqiWpi8RFrywAADkuwqaJpfN5isW",
  "key17": "4hj2ZhB2cb1ZQUq4rr32aMqYfXijHUWTXtApf6zR5iWumoEobZGfo8epDXDHnXYRnYYwWhKRBPqMbsFYLLpkuson",
  "key18": "3qEqiA7q5NDnr4NtG5yRSYMWuUoE9S73JE4s5FyECFAADMxQ9MVeTbhrU9ozeUzJyE7QH1ECqUczvqY4udkrhhUc",
  "key19": "3p8AyFDj1vV6p1n64SGUEfHir69nrk5M9opg9YUd37cpFdzdVZbezP8w9n7ing9yNfTxheohH2a6c96ceALqwiPi",
  "key20": "5ByvciAomcrz1ajmzA9mJQrBPjgoSXuCU3KjX8KCv2ou93uyVNZESm1xuryVkC1kboZZmcJmXSgnBTS8xewwdk91",
  "key21": "5wmTbRwnGA3qeRXzoHvJdP1QBAefJtk8eCfmG9mh4dYJsSBDxmkjwUFe328A43DH9222m6zEtqz7iFPLwWUz5VfM",
  "key22": "5vHtK7MuH1fQ1nvDi9WBQQZDieDvJ4gK2TZLZLS1h981fXJ5JvfZ3sawkawqe4ocd2TLNLqhLASQTtj47hdFHjoV",
  "key23": "52j6GNb14bEoqJE6uEpt7NBw8Lt1t4rgriX1xSn9FbBNxzMo7uADBFx5kd1RutxTDhw5xXKeeGuzmHvAFASjiw5C",
  "key24": "3YedoN2XhzmZ14GW25Ubrk7D81MdNYG8yQGxKYMYygouGzMYkUCeBYsPUimkAZJwjfjRygLRFCxmv8KMZp1aLUdD",
  "key25": "3z3ZeXi1EPnSrUEvRXN1k5hhJm93Tye7byCiqF3Q5p73TeJeVmzH9Wcgw6nsazLUmcLRG3B56y2FrBaVMNpHytZP",
  "key26": "471m19vVvef138fSBx3bge8Hrx59xmE63EcnkwdXsKbXN887PYrPZVf1N8Zz3X6kKAWdhNxjNo5zwEBxa9rCo9DA",
  "key27": "S6zyTdataqvh7nBeFrE5FCCZYmhc7JkWYdbf8RnavT2DQSsjgRwN5FWa9qQ8x3xsq7HiK4FiMx4J89jBp1FUQPX",
  "key28": "g4vHuU33QbRRgVr3UqS2d6A2kNb2tZmPCimWBtWfJz5HUAtC2PcESPehmoumNq1SzsY29cfCRvvGsexXzfpDkHR",
  "key29": "wKS23YvHXSN7sKSn1BC2kASDCKsWCbMEnHEDZaDoKq7V8u32oQRSaVD9hmQpY6Ym8TQKQDXEYH2d5pzp3oxpSoY",
  "key30": "Bo2YLnpzEdqpqaC3RUDJLXiYy8XQVsrv6egkFA7KfjsekhVqfdjarBbjjaKJyfGKkdKpFz6bPPzZmFHR16HEd7X",
  "key31": "4bGhP8PJUcm5VzqWtSRJUUw8QDo2i8otfjU82XoWs7bFnnWsME9M4zbuXXyA1tdNSjweGookfHkkocte9SpqfcVx",
  "key32": "2fg1U2BiWbpuR4qMQXAaiKA9e5GVxhRmaVPzVgzpHZMVMMmkVJZkDD7TZW8J7zTi138X1aJZYx6UBFPr2djSSfGD",
  "key33": "eBSKM2cP4EH1ExnrbEPDuZLxDg23edyCJ3Ue2jWZwiuzRmVT4UGxWHMgefyoJY1UZM3ZPBta1RvZyaMq5kM6nrA",
  "key34": "LmezPgoAmDfruT5aMpoAkgfkAB2FiUjqFmVs8mFxnzdXXxm6tszxeyvTDxjgg2a19A2KC9KAGVAXvrikGeHXPF2",
  "key35": "49uytfCwHtw9b1n5bD3DSiy4gKj6g9c3tGNLMkLitr6ehrgZg9FuitYBg8Mb99fwynewREPiXjbcD2gVnkL5JXM1",
  "key36": "2T1R5N5qiFjBLfDf5aTu9uDBTKj5dQXmAwQvkAY5aRcWPi843mbuv3htrAHvHhDbEkpcbkddXXLfv6rdAkr44H5i",
  "key37": "NHFthzu3pTd8GsSj7WXvsSsNUuvmQgwjYJFnMYVg6nGGYqnXHZj2YHJtLWYEKYxvmVxBY24vDA3VG4MN8jsqhGi",
  "key38": "Cvdrq5C7TPUX9QKKEVbX1db3z3xBwRTMTE6mow7TjAvpfkinWaR5wprahmFw3oHtD1GhojJrnf4bZHaYoP77FzQ",
  "key39": "JP7XQ2NChQYNJcoV3DJckFDAKqLyzSZZgrwPKAgeGNPM21ErR8fJz5LGmmSJCQQAJ8bUBGer3LC1JVnpzWNgUEf",
  "key40": "4e3CgSSzB9p3kg8AcAN5AuYpUQeTpgBBiSQZ4ev45T1uU8dvi5wE5Lcj2xpXprv2mRSn9FVKp5pvyuwjNFTZXoSy",
  "key41": "2o4r6Yd7hFo5GzLCcaKwqrh5a8vcSCR1ZezVii2dgtoeGYzsMk5RzGRFafms67wQbYvZq8ecbr6bYAjJYNap8uwb",
  "key42": "5qgNVqXNjtiaK1H9GQXFmRe2vBv1jPdchCw1FmzuUSbP4HP3SLVGvmXapRdMGQLF7KXSS5g9aUWMhudAbt3UVKGd",
  "key43": "5bCbEF7jbfwD7uzaNZ9ZTcMUC2u7vzVthzUejRKn8W3HM1bUGxA3jCDsbq4SwLzX6boC4nSuGhRrnbNDxCuvbhvZ",
  "key44": "4n92qQFJk2xiujuRCiC8VCNTdacZGiVYCEGTa4xA5bgqzCE8Wy2DmEbeyjo8kzYDQru7sK8P6ivuq4XhF22kpBio"
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
