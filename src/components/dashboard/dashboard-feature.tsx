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
    "39AFPZE6BWqQ4cJjy2YnT6JwzbcV9gYdNQvm8zzcxR5Spc93fHFzN8BfaXwizgQtmENvboirFu56d2EPa2pLST6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MByfxDeQsfLM4e4k5hxahmtuX3ohMk4Dogb2r8kCixbzaLe1f6iJSvTNFtASVxgmHnbRt5w3mjARXWcrM6bGvTA",
  "key1": "oqcXR9MLWZ2zFV4nkWkUjptC4EeBJaCsAXAQnzgsynVVk7CNPYzpR5ir6QkBgojZ8QMqwZMvZRMcP693NYqZ5or",
  "key2": "5RXpp48LJt5sp8FAwpUSxn6tFjTUUjAswDtcfmZFxNHcybSHZxAdFUzPGNFQRgsrM6gh6SeQ5iNm7CvVQTMYkavu",
  "key3": "2gZTu1T3LF7zPq2VZ9EVmGS3Tq6EeCYQ1n6aYbyN6mdgEJRGb6FMTfaGgJ8FMspNbuneYp322fytAFzuDuh19joz",
  "key4": "5DKcaAoU9jywSKg3B3xeNdA4dQyCptwgDEqwjpzsnyj27M1N2LDAUSf9CKWDmJKUiAWeA9EfegCBgodecgnqrppo",
  "key5": "38Qik49f48HF1N5ZWwY3BaksQZb7GWaUqWpcQyb4QSqzatcAkGs7RAcTDScdMfBuUSaDdSheTLCBsLfetq1we8XZ",
  "key6": "4puNHdHmcenABPwAtiBmzFBQR9UPSjGhaHMo42hLTSjK17qQGdtcBFWLBag6CBPBXJEbJ5CmsEDhWGx3h1d55Mz8",
  "key7": "4baEwdYyzPxGfJPPBvE42c3j8d3bDaAkVLrHNgZRmMXMWtReNWnrseJcXa7192zRwqPSLcBYrB8fqoxPZCjpLX7G",
  "key8": "xqn3YL1bezo4atLuQ6yV9pWsdFV5a6ZsQ6jfHXDLRQs8TL8ZJfkQ7xeBbfXB1kgTgjVzX7m38KHssbVWSWXvbLJ",
  "key9": "2MoVGVvot9Kp8a53GzNE7bZk6fda1vySNj8DVxDVumxQgPu8vE3Bz5t9m8aULc1pbYcDwfxBjKACMi4iQBRrvFN",
  "key10": "28rrcA9mKRjySnWmEcgMSQEpThjFYAYw7Gn1xSeQc4YYM87JrW4o42wDC6t3Mxz1V2pAPRdHNkyYdNGBE6ZoqHM6",
  "key11": "3eNkw7gZqVGeRNoKrBboGtF5sm7aNe7pRG4pFYKASEcDSGBQihewJt6aTPJTeU5EaVnp3SyUDbfM7rM2rNLr9JYv",
  "key12": "3369n2Prih8U2roCx6d84P6r3E1hDoESd9vAAqdpN6DkNU18psGJSZnBzPjEEre8amMAN1Hizzic3xaSTQbFeiVx",
  "key13": "2LbLptkzoVoGAiTYtFA6k6TJwj36oo1MoLmUkhkCsjC6ra61DDhWMAbEEVMK96H2r11sWcBE7RG8YqLhHnQWNELC",
  "key14": "2Vf45VhqSkr22GzHojVLmkVY9UEURuDPLN4Enb7qJJNC7LTJfEjYbL6snRh6xL3gREDhBa5ySHTxQF3J3FckD3ZS",
  "key15": "3ppaiZiVr2tgfVbEHvrBYAWi1gHhaBYnpmQss6NnPjnnnJhj2Adk8rRafuqke1SifhKpF2BTQ3KCvstTaVmD9efA",
  "key16": "3kGSwDKQa2N84jf3fVmBz4Hamqo4qN9cCPJ4bCcHYQUkt9zBN83Gxe5eqyaJdAKZBbW7niokA8fGHeFX6qqEaNgt",
  "key17": "q4S29NKhHjQKBz3Bf9y4JBRRXNxiPoxSnjWY8mD6vWu1pzJkNKpb567Dyt6p7CSxM4HYeCFnJGYzk8HwYpr9Ddm",
  "key18": "3HoTf1EwNLbkvZ9G8ycEyDpMYz4i1odY1GG3e1w1MpSvnv9Vxsv3j9HCb4esPCNcqAQmXCaicFiVWE9MqnbAQpWD",
  "key19": "5W6AgtKzGdVkAS8bS23VcKr3zq71DbfAv9P8i2BKR5ZQC8aaqqRGMgK8twMHgEsPYF3UqkDn9JnnprtsG5ixBY1C",
  "key20": "4gjJzhQBVUKKtmT6s7twX7hncgcg88dqaLDMNPeyfQgsqniFsN3LaMYvLEDg7ywhN75boxTiyKM4LykF2LUfKap9",
  "key21": "4o1TMww9z1694PcpF2xvHpPPJWKTtvH6ukHNJXLBBjrx8t4Qn7iiWw8ov9UnoVhKqv7bir84A8SRpBgzBwwtWzwt",
  "key22": "4sBE6SvnaYwbDeiZX3cNpBWGT8mHaRvaBtwgevU1w9WY2vXrMUGT32pjXmMJwWvn1UFyA5UsZGvfgArehFkzu1rt",
  "key23": "2kXc5xHiQLfB4ngZX3H7ZEGv6wwWCuo5by94zqddMWwFQ2jrWj8drDtsuscP6PSdZvSvztcN2qzvnE5oX7QJFJz",
  "key24": "2L9wWQRZpH1pv7bnUAuTpVxJk3UrUo6HUieUsQVK4LMCX3sNBqbSS5wJQkLFpdsp13NVUjrmkj6v1MfLZXZsgtGD",
  "key25": "5DC97Wb3ZvicXhSvvTbMWWmpS1NJphPpTP5tt5jB7zKDGSxVEje8cERNQrHLK2R1TDQCC1ndfFVix7GHbLeUCfuG",
  "key26": "4TNuscjdEmVh3rUMjJtFn7qEZroSrdGvz5H39gUJvHDXdvjWYq2MRw6jgsXni8C6cREouKqjwkAr7TLwMHRnHZUS",
  "key27": "3hX29zbw8kJFD4vAZEMsKSdFPF9akCVJ8bXjhiVnNQ2NMwod3NaVqzrUqRngJ5wN4EjdKJ7q7bAwYu9tmAT5dBq5",
  "key28": "4Yz7eHrW1oW5hXQuoQzxzazg4AdzJFkwMiBRffpcXgNPuYe1eyBHQz7EaKSiwTT8Erzpsb4nfvfxNmhhyWTwgwsx",
  "key29": "4UPnV4LG6NnBgZkZrEioPh9JknUpmyLH9abfd8Zwue1mEhyh1UcNAiNerXMDQjrshWv3KwQnkyuGxqd9w69kuEQK",
  "key30": "5WURkUJWzbUa9CYqtEsjkTFbFHFjHPHeHTu8ByxKhG4fwXqyXv3d7CBsqZFeY5Qd74kUZ4G2ibZweyhLwn1oESoa",
  "key31": "41gb6zs5UgPArUX47CqSLRMJa7tKojx3PrGWcKgp6FMcMwMCitQy6u2hgUnzLeXE6Li9PcwsgWQQYm916G1HkMgH",
  "key32": "3snCzp7mH7gChkgjcpti41pfQ1gmrvVraGHGm7ZTLmn4UFVhLgYHiR8iDXczTwMiaCpxSpRjWZBfwnqm3daEGSc",
  "key33": "2Do7B8zw7ssfUm8KTNF5Zg4p11hzKRWQRhL81ikMUSG8AxAnELHUKZEAEXypdcakK9vcTFc1YvGAevjmzcMVXe8f",
  "key34": "2FnSSfcTUGFYtBHSHviwcmetVnEcf5N6wTpGC4A1vAmphpUZam7qdpcWv4qLcmDALSuEmd9DdYHLiCMAb9ocvUz3",
  "key35": "49jtmNgtNNR5KVQA3Pe1DCYwi7XMNHKiADYBWNekzvXvXumDMnNQ8SD89EvWqft1YNVZ3Koj2w2LGAH5V91esDGT",
  "key36": "kmb1Bx4jAhggtZ8MpmHdBzuFWAegqPevWKHWrgRNhhQGE491knAeg2AhiKZYKdLJLCarZmdFdYxwv9MPuic766N",
  "key37": "356ySq2yE9SfFHYywkdPKPRr8QVFc5LRs7eEth1pqQNB8gy9YBqA8xpMfxUBqZMACJYsbf4JSradgDrHozyCZCYu",
  "key38": "4DWdNEEArFz7YnM9XwyPbjDCxyn1pe7FcS5nKBQqBenF4xfLeu2VdRiEjU4xNL51yLjmRmKSKGtDRkk2v9969GZz",
  "key39": "2XZdp86BFro13LX6YcrTrz1Vxdk6HQ7VQ2jx4LP1A9PGKC32jx97ngw9CRmhPt7ALMMvMB6KyRBrvzWstBc4Bb36"
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
