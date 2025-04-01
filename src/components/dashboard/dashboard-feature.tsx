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
    "4kYbQ171FhMVRyaAMWBNBjtM4WzNdm4V2GY5NJgZ6HXdQXHwJGKdEGrAu3ajmgTUukuDrKx7357NSkdczSWEFxb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1eodDkdwmy3WJ4aeGqBaHKGwmBvssNHsfjJBE4zkBCbeZxvyG8MCN1wxmMqoMsYrsaMwU3yVqcB5uNchzekeATD",
  "key1": "5SydiExfpfkKp3KBgEoQ2rET9vuiJDnqYRb1M84k1jMV673NfZyt6LvjPye24mGyZFzEYoUPmKNbYTQybUiTNdBq",
  "key2": "2u3CGPNZ5Tj45K1a81aXWhCWP2JNBSGwHHMy5zKtjW9r9W2SFbFvUk2NjiLiebmfMChi74bRH3o4LaZ4FCbQMigV",
  "key3": "31NBWLQ7xFEqLk8bo3DoWT389AjjqZBKZf2sqUZdhzYtcUGnPSGQcxbhzF9acTTRfEcLwvuW4PGYvqg6GqayRJWV",
  "key4": "gmR7vJzHpxg9gpAPUiYEfC2YN7vMWMThh1wTB1VjpwfLXW8ju5PjUaJZuVFfKWwHi49nQtaxZ8aRLPV3KuEcTpX",
  "key5": "5niUATYDXyNUVZnyPcXyCspM6YsYfuAE1K7in1EZ8GYXrnGdeBdLRfJ9nTXYaWXKtKfk2DZawJKMHZVRoWJaeznq",
  "key6": "5H3Tn1rPZGR6nUb6tQYFzY47scrxYpgXnZn2PGpwyjiyJCsyoSXbXpBENcNB3ZmygQAETsHx9iLJWtuuoo3zh9uQ",
  "key7": "4juJPzsMiMn1b2648km5Yq15FKrCJp9XH3q6rmp8ttNM8VpvNMGGHZdG65gntqPLmYyuTUaZRkpj96Se6oaxgGHt",
  "key8": "jLgTVrgj16D3yR3a3uJm3nj5XoF8K8oRcLFK2tDriSMWA1infdAa3fmL15P4crswE5PqEkXccyXyZRc6U7r2R2V",
  "key9": "2EJrJkh1QShAFWpqna8pFQnwqCtsCPVqz32vSeysVTqJcgGotQqoeYGsReq3LT153rGXuSRr3jFSbkhv8wcRLZLY",
  "key10": "2Fax9Cq47JwVLEYFNHarHqqUouvmgbXjAny97zP32YgfUYYcXbiVEXAPh1Vr8UDHJgjbWTbkztsmv9Na5vRAuZiw",
  "key11": "65NZLyZYCzTZRyFzk2hf8PcoHsLZyfwWfgHPJYTPyPtPqxDoxES3PJsES4uraAwTxvQNm8Bu5hwwP2tHzi5Sz55P",
  "key12": "3WQCVMHSrETZGdMvxgaS6zMXk5i64jqdK6buFBWoVJD5SVkNRPGZ2DDkoBrsVs5QPPuSKfkFjNU9oifheDXqVDwB",
  "key13": "f2dXLD5byBot8r96G1tXNq9WZ2kgX1AxQEoAooc1sj6T3zcNrjBR2HxzsKh857zDCuiJS6zniF1eZLdxFak3Q7R",
  "key14": "2D2nNMX2DDPNLhUDmzBVP3EiPSbJcvqB5VyYsNhZbxADBVTGFuemGCQTvzhoCF4HPbEvD5iX57WzARorEiyYfsQr",
  "key15": "2oeh8Ug5di2465MPBLSj368fAJkXbz5Vr8FsFxetDtxKGseZvBg9xebSJkknejj39TAvxvcgNU31MbiSomRZ8wJV",
  "key16": "5yF8ifNMwngxtVGUDidx9c5pEpDHhJo1xd1RVLYiMAbMehDJfEURcBP7AvkhNzRTcQBsszsf2rBzKTaq9SQrajLR",
  "key17": "37mafs7EL2AW4ZjFCf6Svrr9TZ713bwyXoktGW8vgnRFVajxpDc819M7HtXsu7CJPa9y19AKjwLyvx7D9W8GHjo4",
  "key18": "4mLgi4xZBgZvaFvGNbnXMBJ9UsZ7GRPJZQ9cMgbAHoLEf7Gim79zUpfnWfVPwh2akWCWeAp3wHxZhmVa5fURJpgb",
  "key19": "naaadwH9czP46nwPKQFLtdvwM6xMstGcvSQ1uDgF2aGYDjkizXwsRcKZUMZPNZKpCFd1drwzefSfiDWMJgP89rL",
  "key20": "4huZe2XF1WTWGXt4kS35HsDbW6JHn349mzUZpQBqNd2nS8C1wn2uzB89ZmqVwQ96hrKizuupoLqrGE2g3HfJn3UT",
  "key21": "5w2KX5Kej57GWwUUbj2ojx3sPxdpvN75nB4uwq7iN4f6GVH82nYny6JWF4gKJr6kcHQY3g8K3cNv5Ersw1Fn4HV2",
  "key22": "5eVjiTYVPje3cXwx9QqWTzQ7ws7uevBe7YkXCcDbG2zDUvpDQYwBGvWMJbpnB9A4sB5vePBpVgp4UBBiBLSjLcBS",
  "key23": "3J6Kc1qDY6tpFRw3udJE7weQ3uWhTW5vqcfycTWzHD36hRSzq2bCYMYmqjRyPGKjYgHRy3p3cRFfR885Eyrkebsz",
  "key24": "ZWqMCmUWZHVkgsqxafUhcTYajFemxDYChZwYaq19iJwHmfirsGGzLLWA3Zes3Ds52u4kywWRoEgkZAC38kwmgr2",
  "key25": "37FZ1SVqNJjVd9neFZHYFgWgMLTgLbLaY1w9q7DHrM14BNcZcpdTcajNFERtv17XYRUm3zCmVVBshHrdkavePy3C",
  "key26": "31zzNV6UVWkXzfeHuYeATgZW5ChLSEPG6A1kXBFEZ9YHdGiT7WpWyxWkozW4vrkGuFzTYuL1epnoWeoXq8XRq79J",
  "key27": "LEqvemjYmEMSPpVZn2yRnKBFyqoVhA5EMhzi936DvpeqeL4TgKKkjzMhUn6nCCAwXzsSW7kMbwG5jcHZ9ytTLTA",
  "key28": "2oeW2WeCq9kSJfbQQMBqZcrZVxaZHKdbSMkhVLzRrjXkQwPR7gDTnBpmYzcJB98ya6eonaY8CSo3u4sepPrzU4gE",
  "key29": "4eKRwRbVvLHRBbTp3EC2GoXKPj9cYAjNS9hJLZpicqQa3boUFPg6MaP7i8WsBFbsCLLF1EQyexbC6ySWEZhmJfHr",
  "key30": "5ULrGhCZH9QSxsDjozMrWDXpRSp7hEEUU8SSuq77Pyk75Qr6MhGBQc7PeR2h5CNukGGZHyLKLMGtpJ9m1JexLhqP",
  "key31": "2QyWTy4SUcuSkmXmhKQes1dvoJSLbihheoyB46156LA5JE2rHeYvSnThXoRoGTJAXHFjgdEDLMKLTcBXuDYEdUiC",
  "key32": "3C4uFiUZmiGSqbdCiwVzYqVmceGAfuQLtxEzUAUun49nECr7KzQCvQQxWUJbBGHT8TfK9mf5rB3G1CthZZNYUM2B",
  "key33": "32iHB7vRHFzJ7bqfpS2k5TV6myArR2FWsiHQ17NWiEZ9ARakBEGBozr3vVWjGi1d8uYsNrnxjNA3uieJQ3DtN99V",
  "key34": "3pDncGHXJqXcwAMmHWnVH5w1JanMUCwaKz5x4289Uk6sVwWjn5EHyhuZAur9rHUNNTti7PowB1ecgaB6wQZfVA5o",
  "key35": "2pNjAY7AoUgh7twYFuX5GAy3GpkKT6RbfTqESLVNMPbBcDno6Vb1XtgoAUnodPP5QvevYgHUYqJNXn24kUbZAXT7",
  "key36": "67XtyqETzmB7fwD1QxFZm8dpW4uLp7zWYE332pLR69PdBRRq1sm4T6C6iKcDjyMUaugUFhZNRmV2BUaH16DtD1cQ",
  "key37": "5ZvJmuiqRGXKF7qQQwsw8XjVaSGc5j1Kdx3fHKjCP8KikRwTPKPBCjNU9uLbhVqTeiDcd77zfmP6azr8jS35zPXv",
  "key38": "2y7fcG6H6HcSTeExY8bMXioGkF5MwkNCaFemQshWH4dQwheypdmcv5r7tEBnSKUngGmQwopJfTP4cVVYUPHTWu2o",
  "key39": "3eKpo5V7ujq7xkPmTbeDoPAThr8qrsNUetkwAvNA2HGMk2P3aFGFjEL9s4XeGXvxDLJiSu9XETqsK99gxpmrnDiB",
  "key40": "3PC1xdnPXRa9NYrGZJPF5AUz33EkdYMSicq5RAqDU7yFWGNKRyogpgnM2QJycJf6P64zDjpA5yae9hHc4gBPVGdy",
  "key41": "3zifsdkrUWCfJ9fHZUjXREYVm1JEb6jmyceqjkwyUTtxWrN4SotBofDGXotMDGBupuBTri2R7zT9iHpeMzJy29zi",
  "key42": "66PLZNTmFuRHLsQRqXp3jfSA5kHcvcrUnQNryEw5sdi29HFZ5voyNMbaWnmLLKT1e8ocESyNWypiFLi11hbbELrf",
  "key43": "3pBkjzxbowUR4uFh9jgiP3XdCY4euF27f8kz9aVsUKsmZD9WurSjNsRJEVbXAQdkq6HYJWjQaVW8EPqRaDdWE3WM",
  "key44": "2sCjuGSrbLPpPxGyoBMjfkFdbLoHwMPx3VKaB1sCvKsFUvy1zn558vsKX7xSz8dcD94mrKZQXVsCJMnsA9piG2eQ",
  "key45": "4wnj4F9x9oHTiLikg6qxSfo69DRtCiPXSvRGD6XjYY2axnLak8CuHJ8eWQ4mgTwaGSYNRcAD9kEwcH277bQ7MSDW",
  "key46": "47ZyFnnNNbidwPGWxq4TMeof7L8qogBJ9DhahVZmiN2gq1QKUzHsMM8ptVxSJtgLPo1JDvKKiDaAAc9YtNBeMNZw",
  "key47": "5UNciL8tai5yFM4RoLdnbe1Z6odww1kjTaWQqjPFSUqEV76ZRS5bgsLhutqRiEGcLAqhqX1kKKnwKRv9H23ttPji",
  "key48": "54DSTbwWtcwDuhbTWfRHKhA6yirfKq17JPJCXxT65U4ufCdx7kzBcce4HgsRZ8bTEVvZQUyYBH6AhNDPAULJUL1D",
  "key49": "3oss7LgZbuwYfVUEiL2dF1rdjueKCtuD1aeLHU2KA26D3QWtxcXfvnhHDEVcocwtEfACiGu74yUc4tM9oMDEkqk9"
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
