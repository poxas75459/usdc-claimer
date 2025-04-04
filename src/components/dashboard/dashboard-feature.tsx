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
    "1tRpBtVreAvHmvkkFgpn1CyZWSubJvMT7TBuHZvvhGh3zH17DaGo1qm7fRKxPnc6bCNqRF9JrWFoB442BocYEP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBArBVztLfZ39g7aYxU1pX1A6FrrAZW55WoJT4ncgZdtL9xv9FF9PhGXz4xeajgJNmsUPtaeYuuZwwy3svGwG23",
  "key1": "xYpYMja9bAeuFUaQzLXHsLaBY8zrVpkq5wsRcdeewqKRfnqPwxwftVWBnB4rEPhvu2adanPpkmJ7dzvCJhRka3b",
  "key2": "3p9thNKEzyQUwoDqVgrdzAiwqbJ4XPGZfL24WnVHE8yMGCXLAcHb6SHjhoueyBBULcYBp1fEPqokR74f8FV4CsXV",
  "key3": "3NQRe9J921NmtybqgrHsuxAT9buPCdVnWdnToKAEXHzSw5L5ckc7KVBB6EDU8mY8KiP1jvujft8s7DjJ42Z8dHHf",
  "key4": "SPTJFHSiTNg9WC8CW7qYZjPaXHKWpjBaKSCPeu1mtpRujocJ8X4xSwFpK1HCMdfuUtS1gMNy3Hkja7H9zakCqnJ",
  "key5": "5Zn92gg75euWbzKgGjCAsnHpPKFaLgZKfchYCMWtKmQxzbKKi8QAQJH1oLgZUfEsT5M7LmwuckGhUTcJuktTE44J",
  "key6": "28cNFd3Hw9qspd2Yf6sEvnnrqMQBenxXWiqpSRFK7DTNwe1LYGhsmR9nJNMNpaRgmyc5o3eVcCAY8bcFJQ74cnkU",
  "key7": "bxVPgHM6cmjc5VVvjr6VMW3Jx6Ys9NboYiPBCYCEHa2Uvse8dunkB1ZgqXqXXTr5KwxJ1zE38Ue75YBhYc38kDH",
  "key8": "5sSzh54BToZdm6cbTsnmFBrAcRiSeDhZYsveXmRYcTnZExLu4McFpPHNdxhDCWhBEXJSkQEHBgQaUkmpWDEQFwrS",
  "key9": "4sGQHfKtQmxp9vJfXNj6GGbwdgfEF6k4GU9KQE84mJm7jbNuBBh26o5NDY4Gk6vY9h8MRPP5p1x1wvU2zmsybVoR",
  "key10": "4fHNigq274LPE1YK6hVDDFWhhMRNhndwuBSBiBkw6TgtpNh3eTfNpRebLbuBzQPeF5Sq8HvPj8wYkUp9CUwnY1vJ",
  "key11": "5Gzpfqtahdp8FD6UTfkwvHWvFEANBhs9s6B4gRuV1iAYyXABo2LPb4rGMx2eBm98NJgyRznDYBhu6KYTXQdGzSUc",
  "key12": "3XFKZLEtAob4abieaPXDdbgincs18RL8hRtUii27gaYMe1HZhHJYVqg7fcLdCppA3wHnHQDDEqqXXBn3qhX4TNWY",
  "key13": "5YDFGpyHiL5SsPNK6JpJMKveTDwnwTX2f9uCGTfot66J2eUJ6r87SVEgTeEWnpLnHdUfQkbqDb6a3qM3HfxAvcLc",
  "key14": "ReCCAbW8sKJGa49vYbx6N1pN1eozxV9hGhNUqbup8HuHVfBY5A51ZLBWw7WWdFPKis1LV4FFxkKrkhdBEbQgP9H",
  "key15": "4xLVggwb7yX8zYMtMVKVgQCKcyCaKdoHzPjNh5gcDWWR32iL5tHTcBiEp4e5gg4uLy3NLNqrLejvS6xG19xkJ5Qs",
  "key16": "3rQ2DiyaJg2kAt5Q4Y6B5kCaD7HoCCCzPpqskV1CQkeESM28TCAATq5MyH7SgzvMBMH2cAfymeFeKQgVcyATBEm8",
  "key17": "d1L2gCwzaedJjuhWeuCBg68CAADR2yhrrW9dyJSHDm7EK9mWHqwyzV79qnVKbowwEWsguRfqH2z6sx3xGcGVRca",
  "key18": "2hm9uQd8M9kaso2Lxt9wTUr3sBKeCKHU1vSgS8jTk9xFczecGYvtRk9SGDzb62mnHXq1YwSaGCaRGNrrMe1WB76L",
  "key19": "4YeFJkaYYPyGTGAQoxv3TEPUwVq4up5RNTWc6QdKMGsf1ZxTLqnEGMWruBCETW994XUnNcC4uhvwTsw4T7pSDE6b",
  "key20": "5StHtF1yosWMNfSrS7oPUqJZKoJ4BMrGjNZH9gWSrP2itnDNUtxwrUnuTCf5CeFnStyHhhCkAHZBpUyX4894SwKn",
  "key21": "2TybYuFYsBbKTDxwpPrMwJrKnv4Li6juoxbkWecwKFvYuok2UjRme6PZ7FS7ipkb95Ntnfw7iSfS7XjVb9UU2TFZ",
  "key22": "5mb7x9ynBhLEqMYMRFCDHM7tHskRgZhgpwbaR6N27pvG9KtxDWXXqBn7haTPEVULYdcChZSWWsrvADLj71LMnqMX",
  "key23": "2sadyBpLEz5UJSB4XqJRZ6ySdj5VXVaSEcc96weRNNJh4qqSGZqNofhoq47EA2Qjte4129t4NCVsAVbaDf3wo4Yf",
  "key24": "5PmgB6U24krCiFHr3DZGALqGEnW4xrgMzjfSsEumAkyo9GD5h3Yrq1usUj3r7kSrG2TBajREY7wLyqb1BX2V8agW",
  "key25": "3FhBwAeec95eDE2baGhFWQhKnPfjtWJgG4yAu4o1B9qd6epKVrpnwz4my1uomN7Pu1QyQMbVnUjAEsB8dXSy17ke",
  "key26": "MLFEj7bzNK6ZxhogtnsEdLn5pJiEaGYra6T6n6NCRxShpr5EZQSYeD8jjVKbmrc4swE6hbhrpZc7RKTYN5vNTgD",
  "key27": "gveq5UTafjjwrhpsuro5cM1JbCUrENpwjBkekWsGp67xBz6Rmp5xQsA6FZUL9GSAqsJSgycm1BxjDEgEdvv5ckJ",
  "key28": "r9tTEQL1FdB8N2siJT3PVezeADT2MeHpxvRbC7tavdcfHqfExfdPWKZUWZZwUzQDTEeVHgRmTZCETtRp8yYcG2Q",
  "key29": "4K2tvghy6WGBz4Hz6sYy4ZMCvnr4d7AmcaN1miS1QKtUS1zKbshNQyHnB1prCikyj21hxMSapjYqnpgHXxe2e4ki",
  "key30": "27ctCPQS4Amg5EdXMvn6phzY4EJBGKDjDmEaenEZWBqgdbVqDJcVDTr2z9cAT6B1DNmuWSZycwMBEFDsTCx6LtRA",
  "key31": "3CcwWBAmWibuMpSXDsqe9ecj1gsb868kWqs5ZYoAJuD6V5xpjTfsy3LuhcEvFbT4SzE23SULHXS5wo15icadpas3",
  "key32": "2Z3tUAgJZDfakmwqsH2Z2h3dG2yAsnfcvuaM2jush4rqCesQhuxxHJ6HJbYZEoEr6tqQi48JRxbdv16msksdNJKL",
  "key33": "CwGTvSSrNhLaPuet35wUoqSJaHqcWZPe4X22M8z28tUmYKucacK83UbVnyU1vNjeny2opipAqVf4sYvq6B918eq",
  "key34": "5VTZbDKKzPzH2MGD1mit7AmsfsRVpPbLY7Lygz1kxaDxABPfGDo4eMfC1bRidu6iN5724JA7WyuuDgSKgP9bFMS6",
  "key35": "2tCDwMgkbQdS7jBPLo8eqUf4L7Nc3pKKWndYefyrJzGdxZf94pAUkcUagpgNuxe6XPxvrTQecQScaHJsJ9h46QAd",
  "key36": "e2RZpJCGZRLei9zhWKP4bDCGWFPNMi7s3YMGDjKTgVNUEoQVSTwuvFkYFCvsJdjjboRJ8AohUAMGeqBZtjbJUCm"
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
