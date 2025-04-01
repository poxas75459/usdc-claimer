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
    "5BJqjH5CWgGFpZTb6NLcmYrg8hHAm9es7sGKEoYg94Djau3UuygoKM8vpy12U8dk2K75KFaZc8aQzcxBxrggEEd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SKWevshWJmisCeGxTrEWjCJjoz2EsRTRczifJNqFstF3NW3zBqJLh74HNVSA1HBfbmFVftbfTa7rMqQFffUfqiW",
  "key1": "VBg7yYXoXMfazNrXF1ES9BbR3Ex5mdQQRD8w8cEr9xaAruoaKzRVoxWME4TUKN67xvd6GtiKipvATgHC49g5uzo",
  "key2": "49LhJywaJCNsA18RAzR8RJrq5a8rFH4iAHHJwDwBLVqMH2oUfzEFfqtYJTv93jnwPXVgjxzV1W89Vzq4wSZjAb59",
  "key3": "3wZYL3bd79f1GCKvZbPqQ7omthHjNaTWwpMPjNGdDWG7ve9FkT38aTLiGQ2xsUiHik6gn7pEdUPEsMy8THdSjYG8",
  "key4": "2bG77myQRTyqYqkxgVxcTEp6mGREpD9vNFJxTFa861DB32gABLDZw1cpEQJnTKFN1x8hC3a1BWsSdp1rv2n8G4wn",
  "key5": "4yfFt9Cfft5qKMvwmyT124Ak1yUwUkDBFRKGNSBQ3D66mtqXDWzpyGK625BqDMRwZPahTCKFXHap2bFwX5T9hgVj",
  "key6": "65mJZ9EXYxQ3WVQiwcbVsNFY5mTANdrusN735SUZ1R8FEDrRJmZHvTqUgZQJqCjA2A6KKDyQEejm8rXXojQAjih9",
  "key7": "4hWeqN5F5NpNGDUFhRsj6XhA8ozA1uJ34qKiX1Hk9jz6HqsxLMigMhvHjmuXdD2BWqNsM5ay5NXFzyTVoC7GZ8hR",
  "key8": "5NQwXTRXdPY7T3afKugq4hZK6hGX7vufdx6fum6szUHJpAoR4whGBrufqKwYrQbpPXkxEi5iDzQxK3EycpXQqEyg",
  "key9": "4YBgeaTAjqgoDapMQbhcRkZt6gkrwB1eAQEN5p2jbZoAkeYSQfj4dfEGMuyN1jttenxJjUYzZcRZ1GD79rdNHC2A",
  "key10": "2S5UNtfsHk6aFqmjPDrxRjwxudNebRcurTR2JD7eio9Di3HRjVPtJp6SvRjNTbAwwaRBaXrSuvUUtifoS2BYJC3B",
  "key11": "5TjUfhrjdaGrpVNzB9navV1u9SqCLxaJmiKBvYTdKoTEjofNto3JtCEYKgy9wnCQQraMwXco13LwGoHjWLVQb2QN",
  "key12": "3gwe6BKA6B9GfrAvmU6M2ry7s7jPTD6jfsCbs5sNDejvwZiegUWD1BCwF1hGsNeAcgZ64cLM7sfGic3yp3d6GGwD",
  "key13": "2vXr4MoPB8kuaN6rQ5LzQJKknDr3u2eVMynbqM9GYvcrPkPjkTfQ4b5A5nDYRj6CY1QuTTsn8BnoHktkber5MQDq",
  "key14": "4EXjoV5322zxNyD2KshRcRqSEF4a1B9y4yq5fL1z1ZUbHaxhDDc4M77T7JZYCNGXuSpHmVX9Xskwk3TNwws2pGQ4",
  "key15": "4XFWRpkJzmKg2SscZ6ymESsUtkaHiBSBrrt9uvEQFTRdM4DA16DByQQUq3PBegsMJMwcGAM8k8Y8yWVCBNu6hcLA",
  "key16": "2HzYHEjBoJmqAg6kEEjvnPYnefN3wJd1x6ZrS5MYBpAUfQ8ts8KAX8eHp4JhFJKmnmJW85Aje6VeVHgHUnUBKo8u",
  "key17": "3pCuBoUxX8vH5AtgWHMKtxRa6cRi1izo3cTa6CTkWrhg1hRU8QPxZx9NAAYc1KTCFXhfJkGjFq7TsAiqcXKySrsw",
  "key18": "9GPhMifA4C4kwLV5tcV6i2ZKyiAcEqPzwgk1yH8FWkuiSSnWQGhoVW1k42QH3Khi7XyvLf6NK5NEv83DsL5YnTg",
  "key19": "wkuXAdXWzEjXiLyBkvnBqV2Xniie7fmcBa65j4rAbDfoqxqDrmr4dCHXhsnxt65KYMRoM7KZFSFcrwBeKNNV72t",
  "key20": "25Ncy6UBeqzNatkYYRampLgmmXXsLaHUqEadW3FatmKn8FCbKHsp5wqv9dfnAjErfMqGJQLaaxZAVm5r7V8osj5W",
  "key21": "5DbLWsC27AutviYUmkfvtTquHVq5xotm1xhqw1V7B4fKzrxLz1f66cSeBdNWzjDH97Tda8ij4hyb79TVEfE5Mt8X",
  "key22": "3VsPJQAC53q4mzCSCZDwZTwMUqMC974dtojqVs6Wxwgf5fyqWtrysdNi6L77wCGjK9zR2dyDHZonXpq2At37YxpN",
  "key23": "ACnsyR5qHfLgR4tgZwjZSUxTgTCmBfZtuxeGrV4kDDigM5vnuV9UXod1jfgcDMRkk6cTF9Co2nqUvMXGZfdsHEJ",
  "key24": "4VHF3NshaYffCMTZxE9mHcwKWUFvDSG37FR6TDWHvJCRF5AsvAftn1UHAjVnAnbW8RiK8xtustRTz85dxL2y897r",
  "key25": "2sPVKu6yGTeBZpJWRQBE5YT218VNjdYdZpzRr9u8kc5TFGyXg9xBmHjhh8cRTnJpev1HssyRdHoigo4AJVYpE45K",
  "key26": "4bb3zAwScJkWqrgfsaiKNMwvfAaToAuEEqQoJG23w76zr7Frd2JnGYo3ZgxCsYKVrvF6ev9stm5aLzno3Eayeg9g",
  "key27": "4bYC2gihBPpgV9Lawia7TrCppcNz1e8vSgy3dkhaG7cPtPdiAbEfExzPwc2wAUWtk76Ymu4SpmTEb1qRNrhwSwnm",
  "key28": "JmiyVroiVzy6aKW6zhAURth8ApgTjkfUz36qamPHVawTuTg7KDUf8jPUUaFtooZAvrvw6WT1J4MUFAy3qW6GQZc",
  "key29": "4vKvxLf92ehLEjhZgobpZdoF21k7SnyVFiQKEFmxtYJ4ZgRdeeFdQ9MerBwq711ZBhfTRXcv1Lhm9mQdeNVHJQNu",
  "key30": "31SukJxxec5ej3bWkU6SD4e2DaEoqVLWscFDjRgapYp8UHg8eitVDXXkdnVJYZVYtaDnjZn7Sx9d1CbjieFuw2vF",
  "key31": "3qUTVyrHuAQUNf5kMvTtuATjbnbK8Vwr1Bk677dhseRs1inESF1iwSN6eHs5EXz1rGcJG9yPSYcZNVCM3gjvnL45",
  "key32": "23SJkr9fkwWhzyzHGYMQWyHtkN3MLFFyZQsHCkVQZF197AESKhqCA2CfAPnG2ryJhu7fx5NAiD845HmpkM4TCsiB",
  "key33": "4oCqNWirYpo61PZmUaSFGxZpufVXmiiQUCdQXJQzy8q6KTJjSyQ3XhchKcgGgh53Eny6Du3wLE5hAJ3xaz9tSzyF",
  "key34": "3f9Tx9CJETLqTNaMugWjjATEZQAa3CitdcLyjCwo18Dahv1zaBPH3Z7DH2SeC5zFytvPjP3FY2pjbbQgdzrUXQdV",
  "key35": "2EG735eZ3j93mHz4Uu1gPonYdbBmzDafxkYfaBvifwXKJdiXmTqMF7CjS7gtthZa4RLWoprZju3T3KasVMiu8kwt",
  "key36": "3F5LunWL4AwJLWZouvX7JzjjubnQWPhdsTWhrdXrKtyzY9uT8GYzFyHHvCWvT1AUgxeCF8LzwEuy1gzGMX9AazKo",
  "key37": "5guotEiocLtzZePZ1BAmtoTz8XK6QPvc6vVtQUB8aGtaYadaBFPK6GzCQJco1wiNwpZccQtcx5etNhad69n9xB6j",
  "key38": "4gwWqVLwwscqPE7BHTLM8KeyZSE2NeKvsqpB2157d9Cb6MQRc43b1M1ufEgTTvWWWnqMUYMe4BWy186EUyvKVA1p",
  "key39": "2mWTU7MiEyWmbttfsY6VePvmGYEUE2JWqizw4aBRLSuxHZ2xtx7nXEDpdM8gHeRRP9WJLSYGNmPfCxXHWUesPgYN",
  "key40": "2mKhxxb1wAbpGtFoNKFg6ExBLBhQJBmRzaGFX8fJwYzKbPL6E798rr9vh4XotrAgc3nSxAD1T1JJQ9nJG85E7nZd",
  "key41": "H3fuEJbN2S9TjriM2aHmkbLeEGagA982dGXYvTdKi9VKew8kkvJTr4V4RbpvQgrSmSPBWHvy5ijrhvzbX5JLVjy",
  "key42": "3hWL94B3LVD9mzFqkKRrgPxqZMSRmZ9D7RSy83w95ZP7f1zugL3umu2Hj5BRhxZqkHVmNYa3dmEekNn6Yib7fvfn",
  "key43": "Ep1pzoMXtUkzAXh26ogFf8uNjus5Pt47jaCMRAdNXA3UGsa8mPbfJMde6hshRiTzuYmzwNR6KHn3AivuYywQknK",
  "key44": "58QRqQ3XHMyAmNZGVsaaEaLLWkNLFphKvvKohLUT9rGGZA4rJX7JhNmDzqHzVA8XNWmkrzWWXZ7zbheVwrnSkzc6",
  "key45": "56FP8JZcKk7uzmz8zenTsubb7vnxifaQ8gib2JMXycHixsKGW1GF5NQJbEqTrkvNNTc96mRaoadr6CAZLjpHG3XY"
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
