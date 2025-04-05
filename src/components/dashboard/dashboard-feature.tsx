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
    "4e7EaXukQ91w4o7Rv5VSJZJHHJHZLB9xHdpbPKQ94JeiFZocZaL9Attebkk5rtBZMzYRdwFgURYG74J4quEVU5gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EG1zqvQsz1yXUEZPHhiSjDZqUg27wLHjeAkRmQNThYdjS6NGJBUCqgY8FHHe99thG7c1cUybty6XGYTweTHXADt",
  "key1": "42wj5hkEbs5XRkAuH8Pn2s7cdNhTATiTbTmmN9Zw3L7td6r9ZQKX1Vh679pU1sV1HLRfi6tF9W7XWgjYP52TWF8",
  "key2": "47VsnZUFKhjyjkwJUtPr5Xym7H374XU2hLDNSK2Nwefhx3WYsEUWngtntYZaCJ1XXjvyCYokij5FbEXACFymd7aB",
  "key3": "2cGbEwE5xQM41jF2AnapMCZifTEsm5cFxLneC6LxGjgF29Q6zUcNbRCH8KbSrLmzKxnfx4Mw1KCSwUNATvMChkbv",
  "key4": "3Sbtm4bYvzSxsZL2m3y2E4o9PfymK4WUzkFa7b8cuu3Uig3M7rAu7HMQR2k7C2JsoWuvsXSpLeoYYVKS8R7x3SdZ",
  "key5": "51r3LPaCJDknKKzk8x4ZkWRg1dEa4K1nfC7npoAezV2sY7JYARBMTajQz5eKNymz1Ayw8vTGyiErZtaw4bGek7sB",
  "key6": "4z2PMRotWyyCQer7rw546WaqMbPtCUSYNGgrREHTCJ5X5jaVXeDp3HY5qC9cBCtqKp8udkRjeUvx282kbxQZhQJU",
  "key7": "2wWCBYuBYjxfjp8jiBec7PpY16SYPcJM6dKTfRthmEP9zq8y3nWXUzqykQBo6nDFQJdiDkjtEV8qbQku5YMeHUoV",
  "key8": "5bipooqgBYLUehtW2LX5Hd64NmmvWg6dXxUfhZtaWyHqT9dfhRdp2AVcU9mBUuwN5JPDUkWPybx19HFNSneW559v",
  "key9": "3tAYQrVmL3jL6oNzdraWytnkae7excup9ik2LTHdpZ7Hg1KkLEpq6vfphAfPrWngjeqNM6yK8HhoiDGa2TgcsWP3",
  "key10": "2akGHoLtxgH6sbNbnxadXHJXCXRaJLT2EaN6HqfUbJG9vv8gb7u2JpzYyh5PxVrxRTvtr2WwwwNQYXmXL7XjtzD",
  "key11": "3DXZ56jyK5fozRdpbdSi7XsQUyw5QW8TK9iYL7LhrwdUXp32xyKKv3raPKRDLVznSJRkzDWV71xneAh5rXekoqqA",
  "key12": "3Meg25jb9eD4Qx77x3dyTKV3q988Mzk3GtRAWsjyQ9GAXuXeLEbjgkDzjSk4fCELbZbR8KTAVQpcDZdgcHsENWkH",
  "key13": "5rTirxXZXeXrThWTnvzbCMAMYGnneZ9Hc6EHjSuVztPSwnjEuDosymtpGHSKdxRnzorEA2LrZ2ZXVU8NkspubA4x",
  "key14": "4gauY7UzWo2SKubah8QKo6GYoyjwgRm9s33Th1uXsXAhgzarRiDGaWEgGC3LDckwvva7HgTMhZQwiMf6aaPqFiad",
  "key15": "2HGbs9uxCEbVRVXrgtW6NhVyKFZ2pEr6FqMhTN1GBzX4LcRaffc2xrcRDRbarCrLsc4wEJMKtd2PG8qD12hnhULi",
  "key16": "2TXYCGp5QpDgu6YwtfXFHdRGimAF47ryffkRtsxgQ866rKJ5WpK4vswiaqbftRiF8BkB5dvh2J8U9cufksg8Gf39",
  "key17": "56UiHV9gsbx669e8bDq8YzQf6VGii2js8VKQpRzzPAxVR3BtUt7tQ6NUDT55vCthwcW9wagDePiirABY1Y3os3ed",
  "key18": "rCgepPpCT73zeMZg7MxGqt7gAs536gAPKMzDWi293URrKZnPYVzohyaevXBw6kJAzvyMioreLhT9WS5w8qBsCcj",
  "key19": "3oPEegYoz77cdEj99e8gCoJVoTP7ERdpKPtaQB3f3XJ5XzopJCvnH2XCFqGHNyzNaUncCJGknGFVg9vYNF13VaD5",
  "key20": "5wDkzqhd9RATBf2NBTsRiqStow2dQ6a3zy5m9Kf8RNCeT1BcxzPzMNrd4XuVjaLhMkzWEqoGD9i5Mxivp4nPRUop",
  "key21": "5NT7TQirTJ2RmXBUWmAK9obq7zFkYtMnMfgg4MW8HyMsU1aEhp2ssXaZ8suxJjd7sF4RsQwkKxL6Y5AxrT4RA5e7",
  "key22": "4hH7pw1EvSLYD3A778MRyDYsvEDn5FQwNkxztWJ2zxz5Kku9QMFPowGumuqLLnEhnKYYexzjGKMuyMCRn2XVB69Y",
  "key23": "3DbWAT3ujwcbgaqiZPE32yTEnnLaWYrvbGVZZJFKfwSjXANJhwiorMf3GdQBhhBgKToEV5gw45Svc5oWuEsXft1e",
  "key24": "37Y8YUajPD3pvksQUsMUp4pHaYnmzd4sgGdJ2xuV9iKyXBjbvmcZ35VVmQjrcKabC8mswBVnRdntehKHpVLKxkEQ",
  "key25": "rvN4cuDvBMbHmChtix8yjVquXj6hpeZhsb7Gnib4mNhkMaFH9iC1Agp2NKGVVRcDVpdfwjys4xxThKSzPWaW9jx",
  "key26": "47FtgrBnLy1xaDfXfxCNAxXNWH45qEg6bjAxkwxBo6tk3UGjPfBqWZsRn67dx4NEsoyrAngGBWKe9S8QUUQfbUrn",
  "key27": "2RFXAL8tkC8RjyR2NRZP9zCV3NeTAFZ6amhBG5skEZwUc95U3TLZYRbPZPB7x1WrHJzv7qQrmLKUccnwtVkj6rJv",
  "key28": "e6jCjxwdirevfq9DqEB7D39bdinbSm4e7Pz3UGjDFSWoCEthfwW7VYfJ6owXJ4bLvqWJ7rjoxW9RR3Fmig1hKj5",
  "key29": "2WhfzVZrEZujNax81Qs88pBJ1HjKAdutc84E6w67hkQLXGR8YpQkkc1FVGu8bf89Rph72haxDVpT3haGs5xssXiH",
  "key30": "36kqtu3EfpDvZD2o8SBGa1Z3ZoVweacL27fbhLwSLH6oVvAayNcnHxER9EmKGfZWgwnbViaTgXNkzg89BP36Ba9b",
  "key31": "JXPPii2UAFCBrsGcCeHVo1ndvbiBHX8T4xrXjJgG5wD89vwgxPh1R6nXGB1DpqrAStwnjUmd61uotPkfVV28ScJ",
  "key32": "3NmnqQwXvPUMif3hjiA8qAGGCXQ7YKfXQ9JiRDwz9mFtx8ByYsE9SP5gexbYZ8QQvRXuk6par2Czt5BE67AcJbWu",
  "key33": "57cTJBwiQHkoFPX3G9ZqaMzNaTwxXxsS5d6m3Uhyd4CH8gBtWArvE9sDRAVBDdArpiQcKJ72ARTNBegpm2eJBHDV",
  "key34": "3VTfFCMyPWdoamBwiiLSRPKdQRHQjY9xFnj2JbgE75vbpRqrUvfmqsREEUpWAG3HogsTAn3bB213659RrwM44LFj",
  "key35": "77Knt3HHUErcfqkauvgVF7VWdZD6XciWWTnmGXL3G9WjJd1WRV2VvTA5WdWUWWMutT3H4NuqQhQNwhSxGDBQJPy"
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
