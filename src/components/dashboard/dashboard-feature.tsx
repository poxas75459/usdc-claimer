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
    "3Lb8E9eGZhrmU8qyRLPyqNyH16wBGa8bU9xqWwvGQZS5pkEpZPiy48Djn2jkUeYP68oZttjPPBnPTqkpYbGGMaNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwygBhfhvPUx1dwqaosbEmJgH5EbeeJPf5rAqjTmv8oRocyscnm5w1R7eHRmmyjGhkhpVbmhnSkXn12bmdGdd6z",
  "key1": "2GAXsU98djn4YAKzDiZWKSQZmhNyoy4Zv5Mk4cHgmFnWJMm66p5TMWyJaLcscziUhby5W7UoFjRnFL7EPQdNQ8o5",
  "key2": "5wKxmfpCuxipJj3wnxun9osKV8hbSsCWE3nHj3huqKgJvPZrZPnbkSbfShKaEKsWKaubB7MjmmVTtkQxoe185NCi",
  "key3": "3TYrcXzbzMztpeeyj82gRYsETJAH8Tnqkpzbf43u3h1Uuj28Y3BriNzHep3ykYhuwAK8YwgLFNbsLFAk8kWViAYg",
  "key4": "2mP4cU6TZuDmyNfKuusTStbDDdDz8SCM4M6uKjHUtbKGSQB6ctdHsuLt1fepaSctAQCar9PYwoQCGQsT5ekNUegR",
  "key5": "5g5edgRuJVBsDJsJLzVxrUjaLjVa15nREmCfGfvpY4CMjNFgmwgLZmXdkJ3DdXmeSsGCzBjAvNJcS1SC2KEXvoyN",
  "key6": "2Az3Pmd2NQ2n1Vxa6og87cgvkFWMjiotsSZv9PGbDNqkEHaRhwH4Z9e7AqycrXNn8bda8gh82hDtCm9VKVhkhKpG",
  "key7": "4K7zjUXAbr2xBhoCJb77J7Ainz3sRnVBNzvxK3xXGLF98VBPeskpUhEfr18rxCWfGSVjQdm6ikWKsMfBg9RahvAm",
  "key8": "5aPQAJmPjak1CDGiZt7HQtc3sgaF68Yg8qh9fFrLRbCxyERYM7XNPk5oqNEPYHZWuAKRsjfEMpKELQYw9hPWeEjf",
  "key9": "2oacLy5Ap1yiqCuJxNsUJGaPVae13qa71DqGBfutnJKcVBRv6PB4cedonzvNtaaBXBmbLz2oYiwSJeZehHUms3my",
  "key10": "jPHPqE36DEgrcT9Lw3m87DUBvHdNuRXb1yKfBkyi1C85J832pJRRkKhSXqvVKwzQ2CDRaGt1iUKnVyEfTdgd7wT",
  "key11": "ewKsBW2rzQqSuxqBvXHDiJSNyXRuKxCXT7M93hKZ8Gvk4quHm6t3thEvXGyqhi5bt2bw7GUs6HvMFUM1Utbrt25",
  "key12": "t4DRnxxz5XCpeiGbLQg5ADnXuP17kUKs1AFT8ANRoavkFqapHdmFSi2jENgoFhz9D8it9qmnaZbag1CpAizvi31",
  "key13": "32HG4Unx64tbERh3Lv5eaMmanY2eoRnWCvLHhHMdk2mNmkFM9J8WVmroWac9UnzYCDJhRzSwbAPLYDtNHdEsGwUQ",
  "key14": "5hZ2mKUqiQ3djp4yQPeMTjrPPadAMXCvjiVo9DaBamnrxnDs5z85Vvj7SuhEJfeUUiNCFWNYwsNx7yiytPGyWsPZ",
  "key15": "HViBgvxNrN9AqMyLt3QzCDc2j3LqURKdmqPNoBRkgCkXRsTJfSTAXxSLgoyKjxuJBeRwWVpHDYzebtpCMmzJSvY",
  "key16": "qMCzW9nWCNR2EAGqQiEnmfEQJjyxB74PM8ntif4Ro9YcEWEyaaM9ue8eAw5XHkYku3vHRDhbKx6oGrA6CKV7gis",
  "key17": "678QWCrHjaLa7pvVZPUdyLqMDpwEHvwDMYKnxRFoeqECzGeUq2ugp1KgzdPnfQwTWzaZh2ddgVmXJGtNakn6NFAq",
  "key18": "wGgWkxepVHBdYXLEtfZ2noN6WYJVeuPkn3fe2r3xHGvh2J9c4wyKZExpogtMPnu1AjfosaTmS8x5ryRdvybVg87",
  "key19": "2dYHyKyFCoJSTGxzGEcfCfDVww7LDH6mFPmn2ocfEekZxvyf4iZPZWFAPdJ565HJmstVED6cYjv2PUDJ45couCai",
  "key20": "2ykm7SZBTk36hh4CRj18z6CnEjpixfvTJCzeAUzXzCTb9YfnZzKCEDBDeaBxgLo3JXbkoefH6vpkGQJ4n33cbpsA",
  "key21": "5kX5C9kgxSGbTrQP1HoYdW7V8pCGHfgEp2jD7wZkcXpRmMRzyXQpUyJKuE2FREEMjgujhUtgkpdYDdsAzdxEHhat",
  "key22": "3RXunVyf4zuSFR5DArgu2HYgfLXgDHKMK5sUYcTcymQZZzfLdvuQtzh7gn2k3HFyHUB59gpCS69AjDKxHB1iozUD",
  "key23": "4S19xqiw1kuDDhGdkkKK51aSBYW3VDkv9rbWgZPLhvWjsRYajidZ4zUrnuNkU5Hrwav3Ti1fHXauvKHU5R45kH3D",
  "key24": "2yfYBtZA6XokY49rBnvunv1CeSD9oJmxBF2Mg1MLvDtW6TS7cKz6T2SPEsnEoDKiDgnnURN3ENLMNAKqvbLGPaMb",
  "key25": "5gD4Cxv295gguAX1icen7C3dvq3yBsVnfeAKC8DUYgeNErvJZWBxDuPyWhzUp6Cbzqf7M3ywSiUPfGBgdvLcCdfT",
  "key26": "39dySYMACxTokyoFqAr2QtzLGZ4JBbPB7LhwVB7ctSwV6DKQSQzYj8ivc1JqFNcKXFR5srDqzz65cvpaJiDJLmgt",
  "key27": "5pG9ycMFYryiBw6vsPN67nFjcCjjcTbdRSUGew6M57gPhBiFq6K1Gz617Bzxjxp1yoqs4spkeK2TEGUnS9LuahFr",
  "key28": "5Wy1rn9Nu8vZXC8UVVGqoF65pT2B5Z3vBszqpB2TNHE95kmZT6qDwdpuMAfpSdWaKGhaWdWqFc329DjmU4GLQ9yf",
  "key29": "LqYVTjCKECFevXXYXVvCREiGiMw75GDAnsW9YZxrghFrWcDFEA1fEgjnp5bMjTqyLLWNunV59HaCp1n1xeT3pS7",
  "key30": "5iwuVfpMuqQMENwbx33umypUo9gLsuaCBxqdd3pH5FygidqrXfpdw21nQwQ1GSpF3kJF6sYJuX1PoVJ9zy5nuJ4a",
  "key31": "dcKqjV8di3Gdnn1A63bDZ3sTG1RdNxHTTn7tUZnhqxzbcWzHQHjan8hihYNJVJW2Ha534Gwi61JEnj7kLM7FzNW",
  "key32": "e8f6pDUKTeAcznL7EHNUUbktjXRjKsSFGfLB6gUP4Qc4xftjwE6VixjjGZVZkSoTyCBEGnNxHE61ZQUKNUr7W9P",
  "key33": "5JHJiB5CseEeVqTPSzH2HJtW4QBCgnT4vsdpjch9bqt1fGAp4nFYMC5YgeXcrkskE4CHotpEu7Z9bZySH58SSNen",
  "key34": "xzGN3z35F2vgokcSKjotXLoFuPPSrwaKHt9kww18L5k4hQVtBUZh2jGW9iBnh9harozXzV6DFcZK6SedzbTQVtv",
  "key35": "28KndXmWQzjT6kHehMi3C4Zvb4WTYGrgTAw1wYvWXmxvy4QpFR5WEDHnX5BdEq8Po7HFh64PEPhRiGucGr5KLjCw",
  "key36": "4PEyqgejECxv3X9dRtjcrWpv1fngAQ9YNkFwKkHF2pFfuRYGzfgtuBDqvdTUagyU4jFWQKJNwabgXDXckYtF21vg",
  "key37": "2dwP7JJpwHBeoT5Ubq4FHXD6WbnrrubCcue64ArBpc8vFPiHY2nLz8uMa9ok6WX9bxEdbbHPKC9ffWC2frAV9dYF",
  "key38": "5p7WhfGoNmWc4LgqXSinxE8si5hhxAfs9YF4QEixMGSGxJwGp6h2HHUfS7RNsSATjP1TPnwyurGkjFq5WoGTGddw",
  "key39": "AncusYoLueSoy4N51BVfmFWdNiQRkGHS4wGxxybhpYGBpWgppYDUjZ1vqU9Foke1GTSQnytkxDUeFRmWeu8AihR",
  "key40": "3vf53DWFsZdwEbvmZN8FYaQNMxAmCYW3m5ZFUwxX74jGs4GRNbH86Wwr8n4dRsvVAwD5LDR3iKUSqWn6xPVe9GXa",
  "key41": "xUkAtoDWNux47ceeCvB9aJDgKgjJVeL5LDSm5Akhgo9tKteo7fdWdiGr2UnBZJb38JtzP7NTZ9RCRioTCNqpXim",
  "key42": "63sHwAeF9bemNfg4oKqgoe3zGttuuTSNEsuZtEnwdmtqjsbq5jNMzpzhUsT7qFXUfAZsu2YHG6KV67dpvtHHFoud",
  "key43": "3FBdHDGVsd5B5u9TiEhz8i3xdPzjrDjrQBRYAxqggvdU6Gb7pCBZuZTNFq3uBvUtCZsQy2odN7ssEHbfGAjxvVm4",
  "key44": "4eziBz1o3GaMZQWCpBBLCqzz3L2YdBgpvhkT6CAjAab1ZFNP67PcVAcFP1ULc7gRin61rt6yuE3148drqqDeG2qA",
  "key45": "5kmGWdnVq1aeyQrhvBA5HawHKrhisorSUh4xMrRpbvoFkNc1LqkSZqe4Y9wSirRSB6Cuoa87pTe6bjrDW2KhKWWP"
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
