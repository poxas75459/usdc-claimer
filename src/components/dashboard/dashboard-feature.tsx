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
    "4xm4eHDFJksCqeB6TuJzm8XA7xszSxaUACfB3viRkDR5Zg1S6ppSj8qGmy7h2jksWYNZ4pD5MvY6gvcSnynsZxFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jH9y5nzUCkMhikv8mhprKw2zdV6bGyc4pL6NoT1pGHEpGQvdJK9dB31uxYMygGWDnbd2Zwf3NzcmE4H1uLzbLXY",
  "key1": "24BahJDiZ4R8dvMAGJXkKPJLTMnThon9PKE7dmuSpwwRdzkqfU8Ekb1EJRHMpU69TMhTKonXq5ocxrDmaD1FK1X7",
  "key2": "7ay3Dps195ev4jpCgiywgHrnbEvJ6THH87Q1PMK2nqLLsxPEUG6E8mT9uSVDwMezvXJJtBm5B2bUEaemiwAqsC5",
  "key3": "2oqNm6JxEnmH3bL4q8ycD8TgipVZWRKodBjkdQ7Qx3msob35iAWvDWzK3ZQhWPPEprxXvFKXk33cpA6Q1DEHN2hE",
  "key4": "5wivwt7ss1Ya4Xxv9H1s7qJVRzBPgMHnacCfZLPoY7wRjX3q7M4jdptTfRn7ZMHvu8y2waStNd8TAYbGDxtapYhH",
  "key5": "WCYr26g2zUvw3k9vj9J7LaBFq4HqQBSeKvvvGmA36PrPigsWvs1J5pHD8BGswKKi54ktxveMBuY6gf3FNfyBxKR",
  "key6": "4bDu7ZP8mk61GearVK9vtF19QDmkrNgNp2Vw5PrBcgL8XNPVuZKGwVtBEeYQWjZWSsQR335Dv5GNgdoBt5zdWDkb",
  "key7": "4Cca7jsvkR5XKZ48EwoX3yuFXqzjWzybywQ5N5HxAQjsAqA5wfXWuboLfYDdR1BsE2SDyP7GAGSdDfMudZCXz2qu",
  "key8": "5HAzXHhvUD4zPLpK9buTTNj9RT5VvzXnoHQ3PiiQ2KcHUEamWWNWeZz41FMMa1C1gqRpyCstukCasaAaBCTxamCM",
  "key9": "2kVqGVy6Tu8M5MNjCEQz4n7sXDbpW7t38iBhyE2LRfktH6FNrUpXpwTnyfSw6XHm8JjEapNwVdhvSGtxU1RrBeXc",
  "key10": "JgzGVNiFmyWKEuRbNZaS5PirkU51BMnJ2fhB4MVdRfPWBmDPtWcMFuzS6FyWo6wdZmLhJj8Ns4JYfHoeSdW2fy9",
  "key11": "3Ei8xVKobAiq2gZ9VJ7JPbY6VL2Gr6ohHEaUiUj6HDAFCT1QU1t2orLWu3j5NSvYY3WMNxKUj2X2AF7uGuwspiDo",
  "key12": "2UpyHybXaJSbQ8Z1pwamogeYHxsqcAS6FwHT9UtYthzTXwECiGMGz2eS4qwhqLkZfz6WCqQxEKL85pfMfPjiZ7Qj",
  "key13": "5QTf6yH7T7VYszWk9zZyNg1dqJeN5Sp6dJeqcB1jxrhTM16mH82F6P5MM8VZNFeu5YMVKPJ3C2kuELJuhtcQaF3",
  "key14": "2skMhu94KiejPRZAjw88S5V3mpJWcdMVT9NrtmW3aF9vBBXyaBZREdystAfVZ6pzn2DUEHnYRHJQQtfTRmmJTJ66",
  "key15": "2maXhRn3kGJCx7MdT66PyPwCTzYvPmec3MUNdQT8hBfkHmX9ZsrVMK8dxtcSeGV5AZKNcQqkAAjsW1vPBfB3DbEA",
  "key16": "2sDYKK9fYPxDSx8wA1EcKGugCeERnXRichSeudTyGoywBUBB7ZT6abbaUqkMMNHeMhTR2Fn6WYduLF9eiBhAX7Qd",
  "key17": "4U1F9Z2H5gA6ueS77XT14ZBa71xZLbGkuj9g9iNGin4NT3uVvqCubui62QpouvzgLaz8nTFgTVVSyu8Wv4Kasq5n",
  "key18": "445vPW7bCJtL8Z6vmsVg9pi4LrWEq5UzqjqGXEhaG8Hg6DBC7Ziov6HdcC5cjVz68arJuTKxcYzuyaJfqiTMnPj",
  "key19": "5TKS5yc3zBFESgoz7oENBziyZ3h4w6Vrd7mBvbN3bSw23M6ZHeYLfWbuRd87Y3rbUyztPD7KnRqb1s7uSCqPD4Gb",
  "key20": "39J5UVtsCeYpQxe77B6DhpPsNQwSw91C3mVTKsjgTQZ1noqZBLLNF8vKMRXJeAXK8cbpK7VcyLfGv8FJhuutCjvE",
  "key21": "4Z5BbrmEKefpT7go9zvvGNbjt1cx8ZGZeuEyNJvxvML4inUVhZFvuBDczvqMFhm9LVufBeoHJUxvZti5PDMDnXHv",
  "key22": "3scC5pP3dL2kaPqbDG1sUgSGoSPLVnbKouSEWM89p395z5ACX8pfLZRWu4uDvvxoeKTRLkff1ZWDrNL9BKrSGg3c",
  "key23": "2Zvzm33n7UTxXMuidGbJ1XKUBipXWMHC6bK16vFWXU5arFDj1kKLVJRUZAFSBB2wK1mSKVqQRMTxzZ2oRDrwKwSj",
  "key24": "5fTme7NLk4DZzK2kVTZ6FhkdKheeUTzeLcpDzeuRJBKEYGKQdPoBLDjEqrzS81JZxQmsfZgaue3RtripTmHZD2kQ",
  "key25": "4xvVhtbEuyTozkiorNshw6UUTiD551fMkoHv6QwABXygSQsLDoCRyYP5ccqYtsMpxhJFnekNkzoaA9pKKPMS52Re",
  "key26": "3Wyipp24AyE7Pu2B46TteHZSnJaNL5xorMWGGBsC21AKoFAfXM8fBx1wsFoTB8vPkg92x6nzbb2pFxZRKb3TGAYX",
  "key27": "5VZR5uA6KJXmJACTqWYMVznpVAkV4uZb87ZoSsVyFRS4ujJnkJxFU2Z6nSC2dtNQo1JzqSRUApuYsHy4QgvgH6fT",
  "key28": "4tmDXkyKEhkbbPAozBZRbaEZswCwrBwzfNGZCaA3Dyqwq4YrLqEFCFGs1H9bbNdprheYzvNYmnPTzUMPEZW81C5E",
  "key29": "52gksenr93XR5sbYeaE9pg1ZgwmiFrrnocH9ToMVMEsSyut2gJM6ofqnZ9RHMEYDGxor3gmPi62FAVNTX634xA6P",
  "key30": "3MmwxRZvxtWzuYMkr5auWXmg4ADk3JZKHqeeJuYPLS8GFYQD846dQNGDMqqcCnXSNtzh7q83HYyyUn6LDSS3h6H3",
  "key31": "3fjXEZQosgs9grBJNNw9HVJDbFgWWKvF1fnkrtqGqfaEFBpu6chBe92CXpeAKNVP9WMDCQqSEtXumhVtS3wqLqvh",
  "key32": "5gdrJQ1GV2ShWB9cXtjiper3ExeJ411Kd6LmJ9KPZfZNZznJxSspaJi4Tad5ZGwWrdtnn57H2YVg9qERqYZGTQgp",
  "key33": "3L9i3xcyKFXL8cywFYWxHtqB72V43pw1vuk3Gktms54y3nTzDMA3Lh37kjGxhPsG66oYe6EKEvF2AmKHXhYw4zPH",
  "key34": "4ehjFwTVNGknkYVEDGS9xE5xZQs9wQminUquLV1DwWkzFjUpRAse8r8H5FrMRxio9BqFUj1Yo239zEEhReT8sMmj",
  "key35": "4UWAXC4FzhLJMbjB3hPCUzzjX6qQg95s7PmViFWDy11mne4uhj9WWryUQnV1uLiys1tstZFtrafFj1rfEFijzyZU",
  "key36": "qB1WzEugNybEsTeWybnAMSYGVwqNb5NgK6E5WyuDuunNdC1XyHGL4ZL74wfHUHxTyfWmPixHAbafn5tdfEDKuPy",
  "key37": "1YW6nZ2BzvHyvKbwLvnjm8pxKXB6UPwTJqbSjUunaCv2heTawEPviC6dLma2MtsiEE2KUrWjCZ9genvL6Wiujox",
  "key38": "2xcqtcgKQoDs9ETgjAAuAsX44rSSUTZNqV5FFRK6phZoHkTkb2DPToMzUoK2L1yNrSfzoo15o4sonofqZL5ootqq",
  "key39": "3Htn2KdVaKm2iEyM5AFazwy8M4AjbuTKvjLNmwLUj5Y8VsjxDEsZGN7NrXosUmfRUjavGpjMyFymxuy5KjnbgDZK",
  "key40": "3WnYMu74YBoejCyo3YhxmBabwSwnbqmmZfmj23f6S4tan8gVDt1uonT6yvin6hcqtWoN5whNrEdWn2oWbGjRvveX",
  "key41": "afjvxGuiSo7LdhTZbUCUU3sy8zZ4yGUvjAHUJy1mqCUudfmCW5DdUTXKscj5yby5ASMQKk2gp1S96dg3R3BwRzG",
  "key42": "2FVnNjobDzepTvYHRvEqEdEGz7D67Jjcn8xBasbAK8kXkrHuLMsvGkV3f8qhGSAZi3fDhrfk1cxmVsQCggKEvmQP",
  "key43": "3TjGDE5H7NtzbSH9H98dPZ5LqoyQz3Zdpe1EBYJdtG13iDC6HUnMJRUD1vK6Yee2EpAcSB29wUAGtc3j136U72ud",
  "key44": "2MPcTwVXsxzLejwiXb7q9dmkwvotChuckRfH4Hdan2twnm8TC7w41nLjug1GecrxM5rPyA5r6yETZCqeiGyyBWML",
  "key45": "4Hrq3XW2oEpN4SpLSw1ZicKWhVARfMhrKgbU1vpzs2DrmTnPdoegjoRf1ZuqGo6BXQwvD1qes8C47RpxuEyM37f7",
  "key46": "2P5cGn9Ug9A94YmSZax2HFsgMpHroYJhrpKRh65nEXj78Ljtvw5gFkUicQ38tPHoKyMfJky2ajxudoNMqhVATNtq",
  "key47": "2euJHQoCvjWiw67TSPK2UesnBCrME4b2RtKiu8rbaDCdRMGDu6HsWBkPVRsHPvbanjTvbudR9sa24QSWYSME8vab",
  "key48": "2CT9t63fxCTPPyDru72PJNL2oracAWtmjEi777VqVayPWUtQC3Aj4QfcjGgbgrWPUDeWbj2JsbNuwmjLkugu3TMj"
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
