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
    "3wNCtbkCVtmvNb6NCbVoxxEXBDScWw1n8zr8tv1mZ3ECijL5sUEfJ6hYL6aaBefEbKSM5CQ8rSYWapPTvsV5wSQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ra9jShVpTSswRe4APJXJcnMwbtD58ZfWHwGmj77ijmTGE9M51CYuwmQghoVB93BxHMmqJdqYEXaK7SpJh7r3KH2",
  "key1": "4tFyF6CmcP9eVuDYkmQzcsNjtbK4C8iCJ5zjVosPStxmmBq9B7etSKxPNmC6pVWaGxNfm7rK2EyNQrFmtK9zbsRv",
  "key2": "5aWntZEnFFo7UPKNEwEH3NDRjHzu8iEs1t5xLiJ6FJzQrz24eC6hkNkUDMadiaRd8Ry7FpiDmP2W9yazZDnuzGug",
  "key3": "6xJZPJoBJTJQf1zrwEum9tXhLGXXawDbshzQw6yny5TcvsEJs45QAdGbYGgMsPMGEo928mECzpzw6EHzWKG3tWR",
  "key4": "2R1oEHngSknE5d84fnJg8GA9fDcnGuDyxBGyNVCDKVswCK9sh8eFbLND1RxFvRacP2oYtLRqrVeV4WvYVidgMjMT",
  "key5": "2wAcFg3NMcP9dhVHauiQEzk9gWbJbUBf8Wd2KGvQHj6DQXiZ8iYjKLWpJERWxEZLgfWcZ1vEt6DzN713rZkrd2nD",
  "key6": "5mAsPaNykXTUhr2XavtbWnb45GHELTxm2HXTanLwTx7j8VKEdXNEXdLo2uPHsTMW7qDGbdjJi3dSyS97H88cgQVH",
  "key7": "4veEGTRM5wmHPaG3ozWmVd4DVZRccStLyZtgDooYBbYs9hsXDq2QyMK3jdCCunq8S3tgCzw3w38QjVfHC2oSVkNA",
  "key8": "4zt3D3Fem6hVPzZYyuwv2WuSsNHop3J34dsuC6cyRRVWDs13dsVsSnFbaTXzzNNopJwYxohM1k4473xz9tb1cqsE",
  "key9": "3DFoaSdbzQgByXBvgSqU9XPKaAnfGo56YbCfpZD2vdMjmg5QNWGUbc5vWxsK2uEgeb7GbSsdEz6v2QpUNXQJugk2",
  "key10": "3M1aXS4EARnM41BSUHC8g82LJmo9iztqki19ThDij9DmwgDXYhBXcBWXZc64cXPcHUZceLuHMbVPdp88eukQREQU",
  "key11": "3TqauwBMaqcEhjmvYBCVajwHoSYC3TZN6kbGVGoW4BPrURSPDJDZPVjBhtQfpSFwdb45CMfYuMiXGeZyCBUSFe3q",
  "key12": "2zHL8HB5NqMKoAPmkTDAeXDijrDx9ioAaiFJvrgcXS9Hr4bVGR6JfKf3B3bZKGka8gv1WBX8mtMmv9yR2P776yCN",
  "key13": "3kCd7ySGML6uP7xpUocMo3Ywkxkuk6w2RfLd4AbF32PY4MWuj5h84zKaVCkdbh1Mg9ZZxGwaqeX5SfEufX1ck3oC",
  "key14": "2tH7N11PJgWBeqbHDJQPnj2iRwiWKt5h82CdhuxwZCJfWdw5iuaaEgmUC4TXdUiWJJQe5iG2ZfAA5i8fBaLDdbPz",
  "key15": "3KbeBZnR73HAKzfRBF9HKRRuysyxhGqJy4qHwJVxkvF9PZR4Q1c7mXpwLSJhseP3HmcwbPnBv4KugrnWtNfNtbxr",
  "key16": "2pYaA2zzQZpgsitFs7fN2KGwwXEC1WVsEt8gjgajfjF6eYP42Y8t5jfJXCZpyhb2s75LFJCw69He1HJMoMXL4tG2",
  "key17": "3SSUdjeZWVwBMhHAn2zFu9f9zbyQ7jZXoDMwkR4Uax9KPhNJT9jF5pUmbCUjskRBFMskRwcFR3Fqpue1DXW4i3BZ",
  "key18": "2YSFfcZTTp72boHTkMTZznScNJorW4S84YbS6a714sfWCP3XUNmav9swqjcUPzM3Fep3yNKzBnP7h6aobqZHEBGx",
  "key19": "3nz7ReZLdGZbgsGNC2GhdNZo3WxCYXeiwgkvE9iUv5M69Ktk7dHjRHWtfWRFL7UHXN9KeAx2us4rSQPnEufNagvK",
  "key20": "3CTLJnjE1UC4gmArntJ67MNw8cbcex8pZ8yw2rFgQ3SrjhENXgEeodjGqxYKgFvuzApXtxPReXxCSSAp4coLFuaG",
  "key21": "5TC7KPbaKAW2oGbhAxeSdqmvJ4QettvdVQbiUtvdDA8YuSD4hqGvP3PwqPt8PHU2jAc4TKmth31iP3W4KGmDxCkK",
  "key22": "2gZ5HXrppV15t9Aw4B2wNDSceELLS7ezceEGLwwWfkpnz2Uk8zBszgcffFYZ18US49VQhTTeF6oC3UXZwtEKS9N2",
  "key23": "5LAbNCXYQuRqmfv6UM9dym4ks9o8GQcotzZorNhdmVctwKrY4TSeGADwHYTT1mygekuoED4CDWVueq1btsZTmiHk",
  "key24": "GrTeht7aQRFQZ3sDW1Xg1xoKosxdQp6W6uhe8uG9wv4uRDj6yLhuj1w7MZVNPenwG513P4oRfssRjGozLSYCNpF",
  "key25": "43Fp9D8o25er5RRmdWitZJC5pUyAY38w9s7WeSrnGSYCemogsmjqjqYRgvYqoa41wEYEL96P5dWnxhJB7fMfEzyC",
  "key26": "51Af6VpuuMebHsPVJ8TJsWNQaudyioGjDTamyxxQR2xSf62Br3NWK9ufxmEzkNRXPumSVUmNNjTFNLcjBFewTgYE",
  "key27": "296bCx8CnTQTYuvPEPE7We7affCdtFH1B2vobBaKFsJ5rFrMevgVLKSyAcwyqsAHA6iWnNVnk4dJyA8QncMSeppZ",
  "key28": "2g6e1Y2Vf1QeQ9vmvqyiMbToXQ27NfBeWmpevNxxVRaEuDowtB5WMD4zakPxeKBUsHSFzXHwJvJxhPQGDgZC7Lw6",
  "key29": "E7ouvAU5QzuXCW4bvAhJUQwPhotnJyFHmzvtVCrBRN6JiZ6V43kH47HeDuBpGoSEAtw7g17TH6mXnTkz7kKK9if",
  "key30": "24DQ7Ufnbdo37LmFcidc8kY86kd79zEazavmekAGWgmHqmWWv8mBokLhLRjgVFc3Yt67MUwa2xqCQrzSo562PLLE",
  "key31": "swjBNiFFdhXgiJTgXw9NrskvYf4zHzurYBjgLnD8WvCVHBCAieMYkaCoH2hyz59H2GkvR6j3GghdUFFpCazJbu3",
  "key32": "49HvDhP5rYM9QAYpRx6gjWrEnNzCCeHucDv1LfE97RHFdgjuWoZzExMTDysvomoW12uQSDAvuXSLh5tcAKfy126T",
  "key33": "2UiHHtW7z3JMPqUpLy89VMyPv79MUgvSEAof8uN36jNLLiG2tQkE1NYMy6nf9Wv6LJvBxg7KwKquraoURRD9HPZG",
  "key34": "28DhYpF4Luy77PbgD79noecwJUrHwaZNmPxVwwrQxkRfTSSEGb5EpcwKXY8VzPjzUjLMqRshaGt1eCkrh62rQNK7",
  "key35": "4JnEPe9HubKaHYSVYKLTppucS8hdMhpsRFgRqFbmZtutKXzMNj9GLbcWHr9BZvRzBjZH9hGuUAaZLUZfbNFpNzGF",
  "key36": "4nca3sZXEm4TL3TDHbRoxaVAEtYt7RY9B9Q5VnrkmsjwBfvg8LfyTbYyUkfGmfifM1ArVrFQU4D8HoV9rz9Xc7Tr",
  "key37": "4BNs9UjgBhtQVDcFaA2DMBejezvNz2LBd9ZeBEZsDHa8FGUUEJk1SM5trFj5mV3v4JYrWo9p5YRkVXtnFBBjicr5",
  "key38": "gXNGEp7AJgZ2nQ9R8cYfuv9iEqdBRbqgGqosrXYJzeKKQ6kVP5ChGFPUmDgmVLFQiiCmMnp3NY8njFJQTgXz3nn",
  "key39": "2KF7QvTR1R21GEXwa7JAjkd7ZKzpusPhpF3xNd2N62je8seMAiuFsWGxMExxDXY47EubuYPNhpxrAUL3T8HWtNR1",
  "key40": "Xj9Y7SrLotXUWp7ExZGK3itkaYoPRWLM4W2a6d1AaR1c61Jmd7MSxj5MoTpPVPWYkQLDRPsXki2vmXDEyrCfD45",
  "key41": "31opKSJ7xzZ1w76x8AnZaCnfj4TewvTxFmioC74hYrdTiVxjE6W1DdHc45x9VcSbf7Jh1FHaMm5FaTqWXXbS1beZ",
  "key42": "jy7dk2pbqLEq1HQ7sg9kQnJi3gJHSMUamY5EEErunj9TkovYxaH9rLFjYRvUX2YPjJ4JhJHkWLdcimzJgukgaQj",
  "key43": "47FX3oHzY4sRmEJ6HFcFQQce6xpZe9UGUtH9HqAaVUHutWvpjZ3M5kL2rKzMniK4XCeYZ6SJaAARUUntpbkvBFEM",
  "key44": "3BWg7HPkkFbNuZsLGixg9d9MC5Dkids68WnX1qcznkeoYAyQC44GGofFwcvyELQoKG5SgDAKnYhd6aWL7PiGSny1",
  "key45": "3JYgZJveFF8s23gmEcZEuMFq5ArE5BfZ12nD2okafCRp1o1coYDKAoi7UxX683RwWxoXoNTNVoNadyubQCWSdwAB",
  "key46": "2b51XhkYxZbNRe5PJnECo5Vk5sMAtbu5fkwH7fWYCzKvq8vUX8VXaAsScj9LTt9ytW7ukQ19HCAs2LzSnWzhkkEw",
  "key47": "5TJm69Cqq2XNgsvFnH2CiZfjw5UhLfBxxT4c8X932Ud8eSMMj5xzhwLexXRxJyZT3udGWMZ3qtRZRQyFuW8zLVik",
  "key48": "2dNpn23vJe2kmuT2BmseuweH3Zv4CyU8CRJ4cudVrdf4uqwTt4HaxqPK6M5jDe3vEuJRGKTH7YLYo2L7wmYJYxmb"
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
