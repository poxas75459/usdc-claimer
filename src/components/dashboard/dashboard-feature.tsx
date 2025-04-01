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
    "5SadqBBS6w9gAaw1R5UvTqnMbb8ykrzbFUY1A9noYVGKuMzHHokWHGh7fkUymP8e3SQAt9Ahfa3prMCo6c5DvohK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VyJmbkHmBssuqt3KigWTp5ErDbwq9tp7NEzQzzbBNGExgPw36yrj38vKTgBdWztux7iv59kZZQzMqYp3UVD2m4J",
  "key1": "3L3KSATN1HesiGhBXU83Uuwqa45D2vxJ31fHVMpbW9TDttXQyURsrfygEGD7LojgwMhjrzxeWBFLdYFFvNc7qa5n",
  "key2": "4ZERXnYpRESJP5CDfvWdWswm3X8Zh5p7ZJgrEnzmqw1FoZf71xy1uJmWdg7CGAbxhRBZZoeuRnLBazEi8Q5wL9uU",
  "key3": "3NUGV2ywDZRHTRrLv7mrZeZohk5yxgBXB7gafjJDmEYcvGG4nzox98su4wXpRX2begi8iJ87pzbzXUdAfUTmJXsB",
  "key4": "3nK1hSykeocxxnNm9igb3aHvX3LwAgqkSzSWTgxKHMiw61RTPHEbXu59hfwnPtvBy1STw5V8bUDtkqeJyvvFeDt6",
  "key5": "5MSBaL5XbZgHDAQsrhb4ybnBkiKiwyUjRm5vUg1EoPoTmeW8VUkBpchMo5NRpX5Am2qraFeuWVnvKK6ew9pmSwFD",
  "key6": "4kbTMqq8QqJi67G5jjTgsW3Hksy4oiuoKkkhaqL6vHE7MJDFu45PV8QXpMAsnedpvg38trGnjYoEb3iAYZjNueix",
  "key7": "khRV2pNgcgkG4mjG3RT6gsxhgVwfXPSvjNLF4xniVgxdP3yVysWKgRHaVxT5diojN2k4vp6Sv1rjxxeDoW7Bf84",
  "key8": "4rbFnJxBEZuYRTuovxzxVFRDR1G7UtRH6unrXZ1iWS8Z7h21mJZNESob6XgkHD6a9oYkJaxf76k2z7ABNUZQoHzN",
  "key9": "5HEVkSyW6A7n62r8gapV1KwyALNqZj6XQFG1ycnPsYZ47UR34y57K4ZAWK2C9rNzXmo1VpnBtbUDdmNWj6ZquYgD",
  "key10": "4j4Nhr4vcYQ5WjXr8rSPi6EdFzNPMuWyj3xMuHzpJNTBkD4F8iaYEYhq6J3yhy2kVgycHPy6ZV3af4bf5ojRcTRJ",
  "key11": "3pzW43iWPKo2Bi3XjxUH2ak3hMZUQ9JYFtw6v1Gz9vezsZgBVLp9jauzBFg5YZAfUG8dRYww93BqvcRqCUCBU41E",
  "key12": "3f9w9fA36ArGndb4Zvc3H4KJ3HvdWZgiVf6AZVYxTmNPKJvxsPmuLiHtQe2ezZtzxcvTu1rHwyczvdkM7fJBXA6S",
  "key13": "2VYrv754SiGugYYjF9yF765Ni3F4mSJygZxyXt3KxtokCH5HQvER8XnwFnseiJb97xwNJRM5hcpQayQwS6AncJiL",
  "key14": "2fejJkndUXU8Sn91VHtXisqAZ8WrwPtjXqFJhThGTW8dciVKrRkBoBNmfSd2eARrko7daN6U5wHLepiUuDfHb4np",
  "key15": "4DdZRipVkBPkPfy1KePyEdsRhuLTuRVFp2zCUV68wtrCvVnaCBM56ND7dwQHVywN2QWEp4EBsFDa6HWrBx8xSz3B",
  "key16": "5j7y2jN9gdQ7Uwrhxg1BCvq4DiDQXqEfSWoV7hAMAHzhgZhh8sBaXEXqJpz5BsptkMnLg3kWT8VwmgHG9KUj89Pj",
  "key17": "MxTanFrFhPzk9saeGeZC6SfSoMm67dG3yf7fwi8J2gfV5yz5zkbSTjY5MGunPEqg5qJzpxhXpBtwgfys3LeEnbY",
  "key18": "5SuVrHQW8iYnuiw9h4yWmG3j1BeHAU62Kv2mJfvnC8JydaycqY5VNZ1usvZ8Wp17XguavWFi1gEL6HM7wzDpwRXZ",
  "key19": "5QL4AD42MGXh9PmE5vke3m85Ey5CsbLWx9csNrHCAAM4ybEnk7wVXmhRMHJa4DHMx86MntTPLyzJzrcqXcsVnySU",
  "key20": "5oGc2WnPLT4rkyjmVRMvKJgJj6bfd9PdVcXBc4eHAP2X6nLypVQHkyrkqiHw6J57FVdsHu1WuyKGSXc5joMJzoTJ",
  "key21": "4vX3zczh7XRKxxQFEtZCkcxMsRzt6gMjDLoTxFP8oCBzGYKg5N25XXg2UFcUVSGiqgAoPQGonCh8F2nY6G3mZNpv",
  "key22": "24YCTP2FA22a2tjvzHYQGw9e62X4u5Vr6azAxD5YYw9JDyB7GozV6A5DMphQL7jXBPWFgEMdzigLSCr2X3KkpTSH",
  "key23": "3RFeCsdaXkkPFZUPsNT6tn18PGQccdE7SyuxYjj7zqcV1H8zP1hYWFp7WALLNeXLHpe6v9XJUrm43kPXquBJoKGF",
  "key24": "3oB27dHVBhK1P3q3d4ayc9DrcocAk2HjHGwuBk3tfAGCys2TLy4awnNq7mvb238W4s2pXy7npcUxnY3hEeoNdjoo",
  "key25": "4dVmhRfuhEHAb2NZYz7ksorAJdNv1qQnTcdoWkxXqmr9AiftCmHDABwKmdDoK6yBpckRKWqaYCACTGN11QDcKzt8",
  "key26": "mjh6N9YckmADGruhuipv4sRdKmSjk4QqhBadgKaJxc2V7KofwXwHCihjVGwbKi4YBKfxacZEn1gcQRQnK27swuz",
  "key27": "oWGLFyDaFzZp8qaHKg727NtSuADJsVidxRZmd1A2TGADWgRdc3miysBGQ9UeEkUiXNxHtRZ4Y6knB8CRVSc6Cxw",
  "key28": "2isSiK15Suo8oFqTppD5LhT7bY5vL5QJ9F72NefmGnE5y2UQXdp7s5UYkozSjLZmRqEFxguarAbJBwhf3Denz5VJ",
  "key29": "3pwTQnYc9jKDvMEi7FGbYJVZRpYw4Cvi1vb1US5aBVsK4WEWxYVw3AJ3Mm8Near8m2cs5oQX9PKG7hN3BacpeNqg",
  "key30": "52tf1eU5dRyeK44Xag71o4d8ibXNL72TCWM9JQ5qz73XbZ825VXc5HwS58rAi9aSFjbmbQfs2U99qAqBMbDNSy1b",
  "key31": "32s42QCQ31PTHDBSGj87UBPTi2iVMkW5yXMM4bixjAizn17tAkyN6rh3xnVHrTKMFgmCWMEXJQ2NdKhycs6Liffx",
  "key32": "33LvCajBfyHg7LaiAmCbWjLL2TkHax9JPbmArgLhaqLpsuhrdLuUSH8Dsz4gg9n6K4cx6naD6PSm4BPiAw77XAqZ",
  "key33": "5NdFJHy4XrugKKnDqtYCFirSTBaqbZi8Pf8NzEkxvbagUAxi8YFq86VzeNCpkqhSaQfFaNjqDxRWcLMeTeHXAAzq"
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
