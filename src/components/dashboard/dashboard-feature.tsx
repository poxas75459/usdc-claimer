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
    "2Unh5HfTGV2jxbaUyrnuSNDw78qWY7EJ1V3c3ui51rewmSZkHU96s62hDXHAGVjc1C2qsXNCDMxZqCY1FQosRzVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jiQH8RJdRhSncDbXdEyBhn7Uem9N2nhoAekM9MpGergf8dJRxDzLWwBMcgPmABgi9SmaPNKVDTNn2SefcwZESfB",
  "key1": "3PJQ3BCHUkXLghbs2YVBPRSkdMv5e2BzqQ6QpCnQNNkNEx7XzKe8kUXC26N9tpszd6NAMCqKjNUX2rwTHLTTKriy",
  "key2": "3BKqFuW7iQXUsQkQ9TaWAb8mmEo1knRfHUFH3kb7628Mf8A1tkU4mnH1tW6Pp9dR1ejRCTG8uHfnW7GYFrkKdAg6",
  "key3": "5drAik2fXpKFxhUpZjYzSrfdwHH4WpbjtbZ6iiMdm36qN9iRAWG9mWSkuhdRzJ7VFVzSHbLf58arz12hBwTAecJb",
  "key4": "5sWg937HjuJs7vGJqFE5hHkVEjefWZr6Cx5fsDjRZoGwL8G31WMMP1jhy4ZC3pdTK6YT4GCa6CPe6sVeRES3gNJv",
  "key5": "oqsynmFeqPfi4htAxavCcRM6RK3bqGHnXrewaBXaza22f6RQ6Ag8xxkDNf8DksqCuQMTscFj7HNYjqquFKcNDxy",
  "key6": "1RjCsMK7zHtv1eSH3MKP1P8Ljn7kZBGNq1YBSmZrK9kQesr34bgybWx91qDRU8b6PCdWN58uk8PRWZvDpiQ8VxQ",
  "key7": "47U3FePeaE6Wy8HcwGS4Q3b7wpwbMFNbzBx188u9DqJFFBva9cVQArGwHYrWd4zcxr25L8ok8f9CVQ3aemRgg6zL",
  "key8": "52jmuP7wciwNiK5R59uXoLm71Kp3pw6qYGCbo54qSjk135kaTaeJyG16MF5AdovrVmXBVcMXkAkUyz6YS43W9BvV",
  "key9": "5176qXbF9XKDwfngBwpfgAvTUdvCV8WvAfX35jZxgiK5uUErh1Z1EGBaGXguTAKHdfts8bXT81gwYMrGn9oLZKz3",
  "key10": "5Wng4XqG4USiKWg22iNEGL62mM4pekmphkoq5BqQw4hxu8L24ruXxmMS58LykrZE5d2tSQmujxdqRF1HWCmrYPeu",
  "key11": "2TSMM8iWsv6iDyVyivtRd7azxu4TRUJtZLoeq9CeJ33ZmEqKsakuvdmWKf3nXX9DMvwo65VeQSmLzzintvbogCPY",
  "key12": "4u1snyfRRdLbsjjKh8FS7qBuH51EtRiF3pDHAJJXCPv6DU9tBBdS5RnysDcfeCyAunhFryMmmLPw5DXVfJsDpzth",
  "key13": "5ExvKAhrT9JQYf4oCUJMj2GdfGM3tpzJnJPWZvNwX3J3BpKxDLxdqkqtqULHwVq3GWXaSZ8QWcN25vnaybtfQHBn",
  "key14": "586PC47FrRxQWb91wjzBSdySW7Cm9fyQYzx8NLNSftXEmqYhvGKZEXPBXGjQ8fc4ocgGEzzRpqJhZvwK5hzAyDwq",
  "key15": "2Lp7zw4i9PLAKjvGGFoiLS2EPcaAFQJhH9yPcvQSny7cGNpkhE4NfNaEbV3A171Q8yoDLgZVne9rUtkh7Q1wkH5f",
  "key16": "2ptd2NxE8AYNKdR3KyaBgKwXfhkrNbdKjpNKVWvLA48dAChdZP1b84Kj2QRwLum57XWB9LjfiLxGPxhJnhskN9tX",
  "key17": "3hnFGNL8Vdnd1rLviBGm3DHoSyDobKDj81bF4LKo5Qk3ZvjZxXdjSo8Bui6oiepYLcdeZgRFApaS7LN6YijFZTmv",
  "key18": "fS2bxPYCrymKuaNTmEMUM8TiG1Wh9jxnCP7KaEA8WQAocBcmnGTPEmKLxiVcBiaT6UByjJYkuXdoG3eRBDZny83",
  "key19": "4HJzogm75mPDREBJh73o6M7Pnt7aRNE14efHJUjd3T8VHoVWKH934bG3pg98nttqxJ6fH1Ki95CbpgABzaWcVnaX",
  "key20": "2fssVTMCjta52hHnnNehCb9CV7h2Tc9Jn3stQcev9fNuHBoCQ4ABzLR3MCFAPG8MsjkoJyM5vQ24au4G7T3bWk1",
  "key21": "qFfnEWi39UUgZSg9Fy61jU5E4kP86fnePqwhFcMsGfG5DvXcsPDSTcs9GhXTaAk9TTeR9dH4Ln78Q3FJoFXsh8U",
  "key22": "UiYgtVxfUtiazfaSzRGx9g5xmnaX1kdvrTR7YDQWrLvrDUVP6USUW93zmkpoRfeyRntsdXfv67LPPAZcSF6JydH",
  "key23": "4go7rtgZuGsHDwp2B9aAnmixJmFNvEvvZaRQbd5qYCBvQ371T83TTZa7aLdvzB858HmNStNbj9nivgXcmvjLeZQ9",
  "key24": "rVE6RgAcirgyTZjavtpH7cwdWo2SqtgrpBXH7KRMt7bQkbQnMu79pLv76Gqx9qJHTqeSHCwv2gtPS1gFUwLPMax",
  "key25": "5SKi68J336tKA2zafkvG2rneoWAuWARY8PWaonXSZvjZRHJmMmcMK25GfPvVPTLFghqggkbU1ir1r2oGS449kaoH",
  "key26": "5FJeGzx98MzX4ThvAnpEThYJ8ybd3QC8tmE48DBidiBxyBSSqkimUktwgFAuKhYBGCMRGbcdH2JHBmeyh91Do43y",
  "key27": "PdxEV9oq1rbr8LRWDTsZfG3FC1fEc87gMVfrXTvvpkNnPjcsTrpe8xEC3renNLcwUp341N6d8nUc7n7jY2e142J",
  "key28": "46CXf3b3WHGLtmp42fpiC2JcPbehzGTR6j9XGFRJzg2KTmPNLTnmR3yWdgPCSdVW9hgUhCj7j6CKb6arNitHKAyo",
  "key29": "3AbC1MPDwdkNe2EtibibRoHQ2b5DhJWsiHhPYn3NGybdBi6s1i6Z9cVT9zLiDXD7NatcxhdUrw33CCcsx3BhVUs3",
  "key30": "4CHUA8kqRyKD8N7AHjAjWmYvfc57c2VyVcZ4vmxuaVctN9SPXnynF4Q6c2B2TQPedAkRxrVvQTkKm6i23MEojQdL",
  "key31": "3UyLySVAKh6VBAynsDM7xJQGw5jHKdEKwMFZhEco5PdSP59oHZAQjCBLMDeMffkXSUxXEFgt4ymAL7Eynh7YtbQK",
  "key32": "3W8R97FW2X4HpdQf8yqiv4Gtijg5LRRHeaPw3MwCvVUcQBKsC8cjBujMfsej2LGoh79vZbcqJYTmF2Yxow91UL2f",
  "key33": "44pxbkbRY1v5QjUzzoAEQk9u4G37utzrhNXSFTmsUF37ZB6C38hPvWH8RyPZPbvTyuZgMQTqd51w2EL5BNywDUfT",
  "key34": "ussHaWx7YLectkN7bgmHuFT4c5ebEEv4bH8D6RTdg9C2yXfR1YbqdXWM7Tr3Ao1XCFxUMB2JuKG12CNmd8mbmRD",
  "key35": "3HtdmDDRVjKsFfV4nwjzbxGSrMeNEhpjbWaBRyBfHBSFQf97ogceTh29kdG5qWkXwrWFPFhNh4yKvBSmzMHoBN9C",
  "key36": "2BoemzEWg3GW4jaGgNBVTsTc7MSf3PkBHtWp3714ViFC8X2Fswtjbu992t2u1uwHjVEVquLpMHkLofVQKzyDJjQa"
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
