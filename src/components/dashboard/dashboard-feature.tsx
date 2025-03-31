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
    "2bsSgFZ6hc5L9maqSa8oCzMVSNeBDseeuTPvhnQV1Qat3MSnKjqXafPYgkLTa8oRdwXWpJ4NBxjH1Zb4cHvg5NCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41zpV31GHn4sZ9zQ9eYQ8q3iRGaxSP3SsQPRNaukAZ6ymw8nmeUU8QakgCMEY9PXFUP91UkRmxLNfikFkhooCWGa",
  "key1": "2zoEieZjUbAzGqnaAr5ieDxhUSnsWxNMAncysMFnAse26TcECo7wZjPu5mZfjSfn8xHCZBrHbTvQhjU58VfkVdzE",
  "key2": "4yA4sv3p98LfPiW1ovEUjeqBQtzmM7ZN8ikJdMKKKGrzUw1nwwdonE3ZcZnrf5XvT5PrZhVU7hwFM9FjREwHuMHK",
  "key3": "ZhdpAdXhVD2UYpNAoditEL6CdihL58CSkqkNQyghDvrtkimz3SDyEmHtbiBSqWHnhpEu5n4W9NfbvTGG65fBuRW",
  "key4": "66k8iDfazrn9PXiuKbQAqrx5BhUh5FhQyHdbajQEopyRiQf9vkGQvNRj2sbFQ5Qy4RErhz8cMibL3MWY4SMXtGby",
  "key5": "5gymDmh154tHubRU8uWmHQ5R1wJ7UfXRr7EXPbJ4CfbscqiGYbVPTzTwcGYcrQzufKePKhfnMKKytv1KhnrvdNhd",
  "key6": "2VifthJaSKyVEFyhZRtVDfoJRRDxdqguaQG8NgqYy4eALdux66Nf9tFhra3AyBYo7Vs9De4ngHAMRXoZVGGuUWCR",
  "key7": "3Tegci38XNq9p5dNfJNiw4gTUgGTi3Bz6dkbByMjKngxDQF8wum59zHSMVbtLBrUvjfpZLmZcdnP8wRULj5gGhn3",
  "key8": "5PGMreJ1SkpAzCYJigyhXpqYkpPhjt63KMvQpD8hTgsWMDbn5ZnJpmK9ABDtxfN94uuF8fxoGknyNMpTrgAA8Gt4",
  "key9": "4UGrvK3XZke6pmUg99iiyNZ4CkHGjvuFCM1U2bEyeQazbFtXwixoZJ5u3stvtDR5wtewgG5KoxpKZYqYY31yWgYP",
  "key10": "5Bij1bFiDMs3Y7ecGEbZTiSKG3iEppnozGiehuWEJ28nMEX7BMABUA5X1ZX4a3nLe6d7gtcPWwtT12K2jaC3GC4U",
  "key11": "3LhE7M745NM3LDyPnrdgdismkfuw7n6gcYiukEEQpupRRZ7ztHQdgMmPmf4oAY1n9pXJ5zC5FYXHBhDkcCLD15bw",
  "key12": "3T6YEkiEeEK9W5rkz6RUAo7MawLMbppFpedfXtU4rYCbMiEz9xWX4yitdonvpKZkMsmDLk9zu5w9D2k9K2tPcXA2",
  "key13": "vuobsZrKiVtkHAYwF81cpQTnkwF4MLDc1pZp3ZMsE5Kyb28yWvnaZoQ4J3Fx48EX7Q9ViLCitf7jV8mCs6RV3hW",
  "key14": "2cxq716uutLs2JhVaKNqWjBNwShi6pfWFV8pDuRhgGyBUUGyWGXfLFbEvipt9onyq6WwtoM1Co3nMWim74qCsvM3",
  "key15": "HNwpnMDWfjr7si7UBdZaiiPVowugAo2UhTLWW3ZKxNT5t4aaDisiMUhqzLgfBiE3amJ6mqq2UgF7kJ45gs3cKUQ",
  "key16": "3Z1nfmdDE6ZZcDSPG4KLhriEJK2nAswHTs3ss4RDXymsmfwRRLCatcnY7iJAhPidG2v5f94waw1Cc41LVdXhpoG1",
  "key17": "2b3bixFf28CtXMeAPsqYwjt552d7RARreKTgdYX8UCC3wG5H15ovnie3Q6HHjoawXnqAQq68nPeHxu4NHLPpAFFt",
  "key18": "4yriyBKi9F3NahR31wgWdYkkqERWZ8Mo1DqSutVdUk8o9pqa89heoDYZ7KP1DB7bz1cEorMBi72FPSHbsKQNpeLy",
  "key19": "5swLohbGuo4VbiqPaqUmYnJUV2buwhoyGsSHxJkmqZd6LGdX8YTDckWwSA3wfDtot5vVPowcKpbUS8YYZGpyfucv",
  "key20": "41j6FBYctdTUrkKqdbUfPU3Tydu7wfZnS7S37GEjXRBf3N3rM4TP7YUq4Tdm4T8yFk3qvJnxByvF6edRvjiiDLst",
  "key21": "349rzRB1psJ2HH8MGVDzQe5ERdVrHePjjE4FzAvbLjiF5D4w1JCrfzAF72wz5zTqGNT7gmDaZiK3MjWCvmQbKevp",
  "key22": "yJ3CaPSt8Xh9YWpQGmEgRK8TmgMRQ8EWAmwzzfFvkqgzW9mMVRRHRTN1mYCeYssKA76afDJizsQcHDDAewyUa9y",
  "key23": "5V6yB9JPrSeATGX7pZDc9Ghr7J5udLrmxn8DntEzigieUuv3uqmU1QZ8kvBukWPpVNcUzm6FWutXvHU4FisGk2pr",
  "key24": "2FkETZ3ToTYC5AenEtTiMgPKmwoetsjdmn1Ry3RVYT9pnEx3X3D1THLXHKe5CF6wkF6K4dmomrkJy5fEtYq4uQgr",
  "key25": "61rQFicPaZyHHQgvc4vTjBKAD4os4LHM73PtoNixC5tfoP2aEwciSJLeKo87kCr3oRQCqS14Gig5UwvNrijVUPyB",
  "key26": "5nQdWNoBiBBo63NDBZzSfEp1BNqLSFJSeZgXQsuCoFyrnLcimSX4jsBc1FDAXJBpNhxJpoi1RHcbW2eofJ5yA157",
  "key27": "2FwHscAG9UYyiNEEY1Dw6nM14PNMVkRfBjQfa7cLwxFCAeFU834FJ91kKyWYmgTZbhxBh2ipPzGpYyVt7wEc27JM",
  "key28": "4ioDzvr7gszqzbxxDHd55tMug762j4DAPfHJefKBKdvdR4G97jnB3FFnWkazJLedTLNCN7xXBkWLGh5SyS8azuGi",
  "key29": "i6yit7BDdiahjxGVrgchmnCox3CoFHtHZKtaaCM6ZS6MpRVRPsYgwgai4g2nrgigB4GAiTMhRRjgw8197JioVeS",
  "key30": "4ZZfSfD9BJCNZnpeM8Y6RVRSszUKTCYCTUX6zuhDL1bbhzqgTEppaVwbEiytm49eGXpR4L8i1xktTktDhMrdXLUk",
  "key31": "41BGBj6yZpYYbRB5uWEc5ttvQPUgNTMHNA9s1RdHFgs3insJ5NwR7ovQmTAnYLtuSQphbD8dF24WcLz9UNp9jRnG",
  "key32": "51dNm8qK77swRNkLQLXXko21ZcDnVG9mTaG9pcbPeTN65qrJj15nxrJByrHYC4itaXM9UU6AqgS5e6bTNWLd6JrQ",
  "key33": "5gk2SrvUAFon4bfNnYonmqaZKjBfpfrA8ZewE258tre4yW8dG8eZVu31FYiFqK6CwCppE7x9xhqCJ59kVKAdyqSS",
  "key34": "26UbsC5AxdnhDyR9CkLuCzih6W7RgXGsmDhhTVMto8SbAx8m8noj6dx3UQLmon6dtNugbqRtwY9LZou4xSxuCNZq",
  "key35": "bcs7fG6HZp4GPerxqRHUGejaGgSLw4SDY66xPCmozSYkpEdbBWDigkRVYJH1KajqzzidRST9gWPDV16mTLRkZ1L",
  "key36": "4xRKa58dJzHn4fnHPzNkaBZrwQjvsq2xW1Nt1h6dLvYdKv7qScTAFCHHjfD2Asc1zFm2NVGDVaqjbmNssTbSo4BE",
  "key37": "2RpiXMpu6oDUrFVPZ5pCPNzoNV2pNeoMmutKw2Meg8yciNoDhoiABrKzrAFPEmXeWdpHfidcB3vYcvoGyTuTDDFP",
  "key38": "3x7XCfvrSxVKTT4S6C54rz93783wbsd8iNKdHVvj9UhtFWQY7p86K5gn6utw64bCa1frZ7W6E4RpBAnHXUHGngCs",
  "key39": "3U1MFHDYD76ue4zQknHR7CnCq69rGYyCPpCTovS8N9a2mFXQEjXNfrmHLusrtQJHLLJiJzen2jRurieL3HYGSxUd",
  "key40": "47H8fUR1Cjh5hbAW6vdMEoqqsaqzSzdwq51nBkgEhwWCC8NRVgBqEakBwEN6D8AD8WZbvVdkWr4e71SzWn7ZgPd5",
  "key41": "stiMDMzZDwFEHpo5nv1hZ9KwF12csDqu65uTnp7q8KxoCpyXDS4McwFUwmCn1qAg3NYKit61yDZKRWVjbCY8DWb",
  "key42": "2adS3ZrSuiebXj7CC1Q8ozSydvWRW4ydoehrKaiwPPNvc84E8XLyyizBX9LSG8NTcbg9b12uomwe7dQkjzjDhtcV",
  "key43": "3oCqZaSiLNKxjZJF1AaC3Nvv6afrvMqvT3X1fL4vTfyY1fzuomGZdRM3FhM8LuChuujW2t9XMws9XKVXpfcoyBF7",
  "key44": "wVcJeUmcQagDHtEeJ4e4SuPV2ULM4W81i8Dd5DqPpr1q4xMnLuMqyWYZLF41H5nJhd74Jutursg648RCAvC9DkZ",
  "key45": "4QjzSCQV8kuE4dtBU9dDQ18b3fGhCBaK1sfm6idSfKJXV4owiKMcWUExG52TgJkTPhGdEfBVB7gXmxz7JsiUVKUe",
  "key46": "9WdLBbL8orABeNaRaV28gQ74eXQ6afhTwYTTRHDLTsZ17Bi4rVLp9sjyMXhUiZ7EVEsCJFtMoSkskcRxudJwVAo",
  "key47": "4a4Ad3VZ8kbHmF2UiukJE1XB4PkZi3FiDgiaT7bf1JNUxDiQxTBN6dA4HA5scuG1ds9FGyKGeqzcktq7KAiucLGp",
  "key48": "2qxuubdwx5UHLvNuzCFd3rpT7K2VRGCKgzdwhbdUUxTVU2aQS6H7ZZYzbq51aiyd5CfJ3gdPJYsG4rYMLNXjHpu8",
  "key49": "5tg6ykvhA8cBR3vfjF3Xe7ftJc5PUceJZEVhSG9fRrrBLYC69BCTXyJKBVydL1uvdcoYrfhR58ozQRdkKrnAiZ59"
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
