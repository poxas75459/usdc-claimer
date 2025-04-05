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
    "37LGEHpNvkipSyGx6fHtJjeYwKHnEnhx3KHep4CQZtbbP66ZfiPCGZykGV3wk2Pm4gpDg2ESaqXsuwLMpH5e5t1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UzXNZde29VMpJHqBts2SU35XHPEJNjUixnwNV6aSyAUHZodUk4hg9MjByye4PKAFiUzAmCbVFLagT3wnn2ymvVf",
  "key1": "RkGX1bMtCThZz3Gwiwrnbd3CwmnpWdFYjAMvyCCG1F4i2MZY2ZBxMFMGg3cMSGeU3tYh5rUp1HmKo3bLmt9yMvY",
  "key2": "39tYPcjfiEjmDG4qhJZjY3pF3biQHWQhcuFRa81hC5aUyaevRzp6pv9kVMoHUaotYDyQ7LnBRzWQ98UuLXi81mUG",
  "key3": "2cDxWChkSQegj3egbuvgH74vUcGLTKLMtG3d4synKUvUwz4qYMqvF7DGmXtu2eT6Tdr9NJDQV1Ho4YRK2Mph3aj5",
  "key4": "q3aGooYxXLUdsnrvJosimhnxbkvnQxgKULie7x5nn1TBGseyAS6C9LSVQBydGT7qYUsTAjZakq2zUYe576xQ9h3",
  "key5": "Kx83XWHZPiwK9vRWioVitzHGaUdGcsnXGfMZxuoT6jc9YSDSkw9aaaKLHedS7afJu1QknnGZZtoXfa3SFTcGoiv",
  "key6": "53fJx5pteqQbahJoYT8mGU8kmUKwiMhNK2qAApTUHyZUdbLtd3ZbfAZfgwurJy7J9v2KN2iMrdTCs2KP67Ta9qEV",
  "key7": "4gugYyeMnAh2n3KpesaNy3Qfr4ixyN4umiLL2NFUTemghKaQsAMDaSGL1AFwc4sxAGzfJ2vzFrUbzHZ7wX1z7Gm",
  "key8": "feLvMzw7QAKi1v6CKRM8NphTWiNopH82XSv5Rnvbs2h2cL3keJar4PpyK8RNedNpXWnjgibQdruoUgq8eeFFJdD",
  "key9": "9yJskCT8qERDXqHuffxsKamxGJX5b5B1FGvyby7y1gLW91qT7P6UVBfZX2y4ZS3vvNYhLKBBmeRKWL5ijuPCynT",
  "key10": "eTarGYpcVnvfjppKv4ugMtF89bG6KjfhskYVSVvaosFzVM1m74RTTEZwfoXDb2vKs5bwqJd4mvyeeh8vvq5U5mw",
  "key11": "3NNVSbHFZLnGvY8HXBPtgXfQjx8h9REpn144e3Cbi6DaGbjTUp15bPiEKKhYcXd3y3FGGybe29BgbKh7MwhyMDiK",
  "key12": "5KHmr43c1PiVzEX8qrJYt8cqb7FKAPYqoczKX1U6NUVthdaqL4YZ2gqushX7LdX5QNQUiteByo6jhEKm1YZNMCiC",
  "key13": "4YRxvM9XUQbEKFnWjcQ5QgFntdtbx9hxMivMP92zFutBeVQi5sxU7U8PNuU6SfXmwK7pepn75S9pRmovAMzWRsh6",
  "key14": "21zhNFpWH9KGJLm4PW76NiHZBCUSEB7o4eBwqcb8epfVT2W6UW2QuyMqSKKmjH5b4wtuLT74fsTPsRVvFA8o4Av9",
  "key15": "Z61fNaBJiricUepZnP8jUMjvh2xHBDbZAsGfh5RMgaQUgyALRQxFz4CbJAyYsrrDw6fjPhARPAs7i3ZXwshFXYe",
  "key16": "3cv2iktetJjKc9K2m5aewcKTTmJ66KeMvDzWgGcp5UX9gzTzz6ARoPqJqZxQqp6Sy8v6qgwvV74QA9GQzGm5Wjds",
  "key17": "4jJ5YU6TYMHS5fBM4dDWX3fSi8cESwFxes65FTF99Vd2oQARpPXPvr4viMdZGBMxLvtuXGJXCdaNyN2fpjdumUnU",
  "key18": "w1obDQwJn1STjeMZ5Pnnoq7R9JwBhCuBnEbLJ3g626fvgBArjDejuB9ubvibjS2jviP6J1AWZM3zsJ1KcKdHNbF",
  "key19": "4m2Mhat8XmTo2jHyS983cWtKSW3CkMpY65edC7YZh5b8y1j3AnKwetKatBJW9iYD966Riudyy55eH5xXTzM3zzVU",
  "key20": "PWwF4gN3949ceLS3nbBS1Zfg6SArqLb5JwpssrE5R43xtRvGrt2Qr5kQ93DeZMZhz6hAEMyVC4JGTvo3yE5UyA9",
  "key21": "2wzh9GmWb1CvagSPrJx2v4S5VcWjFduep1fDXFeZX1pSC4GYLHYXYNQoxYQ17ZJMNgcwwcwTQr9gHrisZb5PBV1J",
  "key22": "3w4DNMSpPMtKYVxHyWymeniNeYRzTVFgdc2Ya54inpSXbW1F2P7r9U1QYrBeG3ucY2BvZ2gwTdWkUvZ5SdBpWmw2",
  "key23": "5S8aYHU7QnBy66M8m8uTqNpGwK3mFsZ9Hm77fFdTwP7YdhtmBfG7vcEyujuDi4ZC1YW3gpN3SXLg9kSXJRSKik9A",
  "key24": "5uf5eSu4vyNA7b8AFsmsDJdtHwa1pdH2Wjcrs9f4NL6MYN2HgRZJAzPg7qVCAQfk4AJ6FpeEWqzzhMEwJT2sayau",
  "key25": "3Se6jxMbiBJM5EWDigELJyvbGdPpA4Ak1JzaXL2Rrw7HcmXBhcUM1ioyj4g1r7FwPyY6T2VwZz9vM3f12N2TZjJu",
  "key26": "2Tgs3SdGapvdPZL6fjXLtj9KT8iNTLG1Smqk61upEa2nfMfqJmii7mEWmhXarvScJAZDicdTD2V7q1ZwbKN7MEwk",
  "key27": "3qX8Utfz134A21AwyDVvC1cD2tRYqAWLVvpS1gR5AkRxVPJt8JLpfsD74coEX8iZbkhVnSSDnfYeFxRJrxckzXhk",
  "key28": "2MehrND51Q9cifJ5tLj9KTVYDPZ47mCxuHkwK5fcwq1EgNjNkBfHn6yPYbQKtBokv6Drx1Nt8WoayAxs499FF5PE",
  "key29": "4FTUhTq19pZgewiqfxCqGD2fh91Sh1JmfnWSQxEjNXFyLgtqrLat6UZTdxwr4bLyLAvRsJcS6Z3uMDebYYpLPKXP",
  "key30": "3sbkyQbkbdyK2r7ppWKtxx1qzhVNWwkxmuA3ETrqnYECUShwY7gb24Pb411royjK3AqCP3cASm9R4pupPVPRygnC",
  "key31": "5pExZ2vN2pyShsVq423zYQtJ9NRS4gux5bpAipt3kmCBskhh8tPEfuQtTuro3nKRVdVRknr32cmaRbnMUjZjs3o2",
  "key32": "3djFFGgER478gajUiKYVaHq7duBYoqtj73JeP8BCWkmqzHe3sTTgN9T5Z9v9mzco9pRM69Wmk2iAqZtXr6ieuVJC",
  "key33": "LTjWJmXKy4Gix71T3tLwWmL6RGtTdoMDSVPC7UcxvfPHpek4BREWbTPuqxQBbiDYNgBVahu9hR7UDhw1epu4cDZ",
  "key34": "5BDqgdaQo2KeiWEtiNSgXK2pfNMiCTdRKEUASADE5rFG5PnhnYSLS9WtgR9wJpJGmo1iDNjMcT91jgufCCytdE1R",
  "key35": "43GybvLEgi83ZWwEjyMs17Vo4MFkn1TgZFRYevJShkYX2SHQAJHBvmCmf824hAHtiH25zwjH41ejtg7UrkA6st2H",
  "key36": "3UsDWTAXcxcNBSY8UvkaUNjqh6Vh17qBaAneWuDPgGFhxNzPDQxyUvECL29fMW5X47EnHZLe33T5QuKRVvDPfZYb",
  "key37": "3tX7NGBQ99FBPDrUHNsxnFPPtDa1RjNQArXa2jo83pAwnnaPuxPc3qQ3Ewqx8kF2FmQ42FtzXYugLC3XYiUwuDHB",
  "key38": "pm4TVASb4MF3n1TSBrQToMBoU6xKuChnjUBk9LV9PsoASpxM3SbaAsb2pHzNUKU8rR6AU1ncerfd9oy3bMmXMD2",
  "key39": "2zgG9xQPPrgRtwETE5QUQPPFG9wRF6p4TKKgRhUjzsrCJhTE7qxzDT6i2H1Xo2VuxqCEBhXTadcptGvpF16ZADUw",
  "key40": "y6nHP5evifZJ2mE2zZ7Y2JJ9isAQ6N18BBKShws31zB8RAr8pbEsAGm51kuQQi266bp5BKJiqptDNWvmQX1vZbW",
  "key41": "pP8T32RfSF3QZV8haza9UXYg7yqZTH6BsDKzdYe19gvEpB6hWQeej3a72xcWwc8wozceHusL24N2RtEwMhjNFtc",
  "key42": "3cp8Jn5dActxDKZGtr3SPmCz7CXSpguKvMMJDXcpTaKTo7kn2LQv6wwrTG4WbF1ht6kX7Bj3RpbFjZ9cnx786uEB",
  "key43": "PtvJqCVPfoK2CYJcYyZYqbUb32msTHie8akxWm3AJrYUbbiucM5vansqVHpZHjRDZGMvqzZyQx1kkvTEhrT9XHi",
  "key44": "26eMapYa79h3ReJYng3cCD8RXmxxePyfAPVkLhHyYSfiBV7gbFwKeNj5hqb6ySbss5HkDHhbWJztgeEMPwB7oNp9"
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
