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
    "uFjWexDX8wuCeyBVdNtAHqsPjCFz6wKTvGrP7RXLHVeNunbBL4GpJ7yT5mNHPw82djtYLRqKmB7sicRRdwo2fRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6WiMErKQdJfDuhCD6rVSAqqWwZoCG6jTs9u2zdGoGqNPUApgT6zUNJDpsU1sRYtc2o7uZwrhns5d4Tfsx3Mk46",
  "key1": "x7BWbBrvWPxCMP69mKBx9fYp1ncRHGyDdxGTDwTfABGjZLAnTD9wPjagjRbRszBx6GKUdZZZovK5JcPTA8jR4c7",
  "key2": "HbKcytxnFE4TB53y4Rrhc723QbLVoeXnPPRGciLcdrZMuFgxgBpKToiqgpLchnYyW9hwnKgoHcUjV3HRPfcmjwQ",
  "key3": "7a6noFjqdeA7NmXUqmBitDFWPwHCeiVgH5YNDeC6sy4QtAobdnaaQaMGhnPRbMX7vBGtB38AbPUuh17CMkmX2Vb",
  "key4": "sUWfvzwf4cxrR5kWbNqAFsnGa2Cjbdji5tahfMEqt5Siz618i7r6CkNrhWpEByMHK7hUmW6sWkhofXFdUJ4cdAL",
  "key5": "4qf829uPngYUymNtVWHYerPDnweReMTJjHWdxZBRPmS13QsQ2nugoiQ8AXuMVFUxhm3xoiRRCoaoYJcYnw2bjx8k",
  "key6": "2T9VeLFUdfPqeRr6fwtysGnwGgR15MKcqaVnhevUpvggHdFwMsWTqhiJxd5ZZVKk4vk2tkuqPKxwmVsiRCkWmBCm",
  "key7": "hkLj2qHHKKARvwzB8pywaWoFkssS5yMUnTxmPR8infytw8rHkCUNesAq1FB2q6eKiWn2mFDhS2mXhAGDDRnhx3D",
  "key8": "4d3jQTPzJjdRdtbn6mF7zdfSemMqhm6KeqSSa8Gq6JvZ88LJHWUDUjpnjJ9rSu3ooNV6jqP9qxdxT4nbbFTx1nef",
  "key9": "4onGzpXeLS3EgP96fHBNAT6sPrB6gaiFWPfwvHhTwzU3uRRm5GA1sHJXGvEdozD3HLPr3kzv7WpJqWNcV2EzLXys",
  "key10": "5zd75T3hkew1EpFxNULR35mBWwJKJaAHAxipVrxRacTQ83BACMzs1AxQmmejKStLFidwqwv3WKHo29QdbJc6fHJJ",
  "key11": "5u3SzguaWVWeJ9tdmB6Q5XuKnmce7wipGdHWMRT9QfcGDXurfEXyPvP1oT1rX8oVEKv1xxBGAghpp9hnoVrET9A6",
  "key12": "4EHeitZvSiX98E5BTNHpBopWNys3XyQTFh7Js2ntuTpwxQBMTMjCHAieAKfsCcD7LnMkqtahyFVxEmLcbEbqaTwV",
  "key13": "4FwJPhMRwJrC9vT28RGbMEtp9rszjBsTHUqb86b7aouzkUQi19xmiDTRbaJYA5a8R3wKUYdEe5f3FVHh9BaLVATE",
  "key14": "rqfnqv5SjK8JnBoHhqD681RD9pbtzWhxXdWizH3yHwgwT57qJHpDGD8hgKJUSstDzR5VThZsU6MJ95nzr49XDjN",
  "key15": "62TCz1qfd5wgmSz6d9ceg8di7goJQHVFjJVwV1QCQ72g7AnyCcCjhVZQUxkAhyZCa5iCzx9TaM59sYeac6BeeBEG",
  "key16": "vzbWVzLGqKAVBvayMtZhzyDD1rzvMqLbJpmKFq4wA4ZnQDjar3Nm1ztRdeoWJG82ivc8UtpSwaLMcvcF8FBkrPw",
  "key17": "2AqX5KZKeYVMTQbwkoKxfvE2mKw6dFdDBZ4bR9dpMN6dRyEeurf2SreZJLpXKTLpidKyMNvFJhTeyLh5n3SU4Uo8",
  "key18": "3YPjGaQ9tTcQ4CXvyQyRD83TmTvPUEsK3cFnXAojYoTDirXk6ocdZi8wXWhKN2GbJLaM67CceyNaBXBDgXAcNGdr",
  "key19": "6AcTY7DZH4DHGE1pwNsoYzzank3GBrwg6TyoZvjtKp8bHXpL3Uezd9bGd7iuk2ErEU6ZJDrMNBpq5E8N52CTDdd",
  "key20": "4rXpRpJQTBAKNQmZTbzhju2skkcNygErApmdtk9EFT2DyiZoibgmC2QETXQMKipGP1yighBY99p6bpY1dkfeuEBW",
  "key21": "3xubMB2evswNr2zZWFwWRo23QbJBfzkYMapxV8ywRCca46DUb7VQoo2Lh8w1kXkiEQf7kwcvQCGH6TTzWV1oBEW2",
  "key22": "2A6iytgKgjiYLLw7XwNCBNhakGdpPexPhonGn3WcHNTmVg9HDqkUddyhci1y8Z9Jd3CgbyzaGvGWok4ETHiEJKtU",
  "key23": "3twFJkZm7YYJRMFsgpZpMy5YAztZce5stD2bQCVCFYmW9dfFuxHWua2qzRfpWXGXuGq9FKBiyni6a4vti7rTaZXK",
  "key24": "Lam19MTMnT8avCQxqX5BRUdCTexvkeDnJJUkL8WWd95VBWp1BgNxwATkmkLShJjYyV1HK7NKkL3zVzANfvahhkU",
  "key25": "4N1iXhVrMJaFAQ5aMmbzsxhCAkPJUmyiDEQCTujuenZyaVxJgG2b3gfEwuJFpV3tsBMg2VtizCHjA2Hv4aUsfrbe",
  "key26": "2HazBs6f5fE14aLQmuikP4m7z3qCyztwWZFt3BkuprvNrXsBLYGxq1AaGkBLiT62Nk1TUddHFK8tjnEaudqu4kBc",
  "key27": "xZcn2nnMkcBTwemmuwLfAMhb1iPUb7Z2RVU9jE9Q4qcXWkbSw2RYC6FYtCqgDgJ2eGsEBetsZh66eQ4Ptx8Vbs1",
  "key28": "2QaAW1LL5smydDyx1k2VKmHfJd5jJ3zUqoRFkRZ2VjgbEuVRjiNCdrdJbGHmK8u758vGWUoSXd9u4igzFjVUBE7f",
  "key29": "4DfB9R6RSno5sPGkXho22tMRzq5FDqW9xyNsBHCN6rTFDBApRsVU5vNjxQT9mBsnM9hCA4MXGKDzZJc5sjB1fM6C",
  "key30": "4DgZEcu91L98Qg4255WYsfG5zPYZYKXjz8eZfMdpHVhx3bpHNe8Ap941RxeFjN9nA926pT83Jf3faj1oiPMSBhNr",
  "key31": "NFWaRgwUZdv8RCsoD4j3ghHeq2wJki8Y5BuvGhyT24xQvwyyZUTNGdMMoD4t8a8yj3cBwBQs8dNcizaaHCUV2H4",
  "key32": "4iK7ZqSFkxS51fMRNnmsc5rKcgDPadfhSo299hdbJBbAvwGuxFztxhoFEJLyehLDfG77XrQ3GF5exGbPeFEsFCYm",
  "key33": "4rvt92ydmBzMie1HPZM6VEkDgqwRpjiWpyhEzDd812zSq4dXBX37K9wgm3HsVjwprgvscjDr2ebFCd8SxCtBhPmp",
  "key34": "3HVxWjVo1ZX88FDHn1xCifKu7j23fgnjDU3rSx1V2rECYtBDo2MYWW3UGjrHgRPNhuoLUjpmfR4t2efkZjBNbm5H",
  "key35": "5snCi6Rm5y8VjYaquGpRZUzCv6GZD8CHdZv3eF4ghyMQzdKkVJoV1qesKhafTDXUSb15hQ2BiHrkJA71jfbF8V3u",
  "key36": "FAcxR99xwG2vMy5r8Fger38CBwzuBWEnvqB3zADHQbqZK4DntPYiSGH8tfvXDsbPyAj1LJABHjuZdHa9Wh2Zth7"
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
