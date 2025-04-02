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
    "3cjdjUKeodSCvuVkqGkzQ7B7rLJ6L9q8pQS6AkwSeZ6kLDcsr7tekWbHeMs8emiE3HfHcPoXruwcvhV6aKaLz5Cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29wdmHcVnxUZ8R5UTe9Ap6o8qkArKAa3jn24KA3mZWTV5Ceh82GSD2DcrK2EtnsHTzungbBENTT8WK3iJrmLn7ow",
  "key1": "dT4WCsVb8fVw7xdPksk7dDpT49orQzRPTXKNfMTu7V1RpL7yLxHmuzzHcsKCkWmvzjEAWwvD4McSZ4cTFCu21Zp",
  "key2": "2sK7DsZaafCnXKnyVhE1Zqa7LURxnUX9aGK6KmSLjQpHVATdU67FhifbrniaXZddWsMwcTKUeC5iYgkAUus8iNDi",
  "key3": "3jLz9MLfBdeyTersmiLz1vpMqjup7rPeBQTitWWNGTsz3gvxRxEiEc1tBoxpkfGo1zfTgxQqGFuTpqKTJmAUjs7q",
  "key4": "5rgn149toiryVvZJZMCwazx5sbGXzhFSD51nkBsgjRTy6sNSEssLj2bSaeQeaLMtKvy1XXmL3P67b3ZfzabZtzvs",
  "key5": "5x4giaNdUQqBiPZJYFKUyZjyUG2L919pyCWRVZe1cec4bukjpYS3neaTvFFPJqYaUh3HrZ44pa6N9MAS3xsCZQBB",
  "key6": "5yq3tiR4gXqgtK4NpHdmYWsG3msX2qkSU4ZWz16uRii9XaUA7wKmGnBXpcXjStWqVCTe77iW6YF6QRGUVuUEqBZv",
  "key7": "4Qivwps4XeMhpXXVneVz4Uc5ThtM6xqnobN2CRbJ3HDaV3qQPdSTwq1xmEnzGJQeTMaZX46FXfmbtnux29dJ9z5X",
  "key8": "2chuWbypdG5sRBr2wZezEiqanPBW26ijkCiYUiQtSNrsHsdDPZAk4rKtVVWevRv2Bxd2dJzdKuSf4jvs6n1w9inU",
  "key9": "TECPnVhLMrUh22NVtzkb8EaW6egoje3qrETpMk4PCC7GHWzixZ787WfQCf3kaseoz67q4AMyDEPBHdkpAP6Fomk",
  "key10": "35aJPTkvXRkiJdoBEYY9Lak9FAwz3D6dqRm1nQrCMHwEbEsmo2hrhcF7Qp5bYopipcaG5bwYVy57afWgaS4x6oFF",
  "key11": "zEjh9y57xB5bN8n5CqzLmqq5zH1pFGXYB5KjCwxX13KssyH9P9zsfj1jD4uFTewxHDwUF2Xc3usTE6X4S2mEHhM",
  "key12": "5fgSnvswAyuGQWZnuGu3xAeJaRGW9exfZ7UGBGeGV9xgurUPeJmnVNRxqK3uJ3ksHBTzcZqZMfAvKYNWe7qUxnhs",
  "key13": "38wNG5BToFcHPmnV1NZcUVXEuAMKG1FhWK5CapDBycRgpZhqjhF5fxjxFU977efEvxH8eG5KNEbuVfsEcmjnBcaH",
  "key14": "5gpuY9o5w1u5LiHBdCdhdwbV95XDtHYZdRzSsnmGW1S9uz4NnRwxLwXj5UXctraCafgw6kZ3LPQQH3pMuhD1nSf1",
  "key15": "N4UyBuoXYWfDWgdBZN8UTLhN8SuFztsrvkPhSZVJzpFqCCDkaNztraRvn34iTkgAmLkWhpwgCiXpjVPMW4PdGzE",
  "key16": "2VJ23v7BeTd4C8z9wfVWjtdjqaZ68aNrYxcqmVzApwQSh97MLtncgPY1nnbSmJerBJjYqNEcJh2pveSWduqRyBET",
  "key17": "27qugMuBwFZWwMyieEmF5BM2TorEcoQNMgdmBcJVDunTtve3vYmHCiRUKWyV5MC9zorurajLtc5vyZ5G9FEbvp5Y",
  "key18": "3Vdc1RighUHGViZzVQxVwA2hNWkBbA6V2sBhJRm97gMX8woXP8xfxvz6vSDqJsx4DqFDXsKLQrsodKdbixr6RBxQ",
  "key19": "64X9yqoLRE5VDNtUeF81o15qWJAG5UASvJrWQpcWPNvQWgidQ5JQ6hG99wzkGVGekVMt9LweA1UjoZUcZyHkGDkp",
  "key20": "5oHV9tFkSDwjK2Q6BQ6gvRsjBbfTnrN9KWKTrZWsWiLAHtZy9NmV3XHJdSMnug55JwdFtDTR81D9oLnPy6sBaVDh",
  "key21": "363cebZJhrbQfvrG4TL227B7UXofDFMYKpF87iEEqhMVFfpbbiNQbDkJDZiBmwREF5FQva6ShyTE1AXJbEbJtV84",
  "key22": "64VQBUF8Dg9u5RcMNutR6VnTwfSH4xS2i2NbAwGFJfrfGQWqrng2G4sPjBYWjw9ri6YcCeMh6DFwmydszqk2YQLk",
  "key23": "28GYVWpD4paKpUKXejiH8281B2DmhaKbKAzW3W5wXMqQCySiEh7f5RGtfbGma3mAbWJF8HYUj2HvzytTXXc7HM74",
  "key24": "3g3aod3nBySZKDkgZVFnxTU9m4z5CbWvUzM13mnRfQQMAxyEBygn93aodeE5ZTbU3rJxqJrWVptuKGfed4amg98C",
  "key25": "2pX5F7L2XQTzkZq6bWMjKkHJfE9a1mTM9L8EAq612MUoU6jQqkkA5FwrVvNF4QNDtXmhHN19VsGQp5s1srzEGAxZ",
  "key26": "2KUwsjHqAYHt7DCWhKHi6kr5mt7vnWFB4Gs9urLmsXuR4NtpwLwtAdRbL1G6Tk4rczsDz5wngNuBxwVVZ3myyfkH",
  "key27": "3LcPUpvx6Yeswm3kj9uvicbd3EBzbezdcYnmFSpCKBHJmACaYk8pFGRPZQMvovdheHj4Yjp8WLaBfeZZdxSGk67K",
  "key28": "1RMTa6k5YDKtHnX81xJYZAbQ5sp4f7pCc4YSofrkX5NpeqWDGbDfGtyvg69h75uUPaQr3tEbTWo7aEJPBqT6TLM",
  "key29": "5LRxFfHReEUX23QwLTkwkcN85dD9STithZCTWJvHKTRNAVvvH1QspReZ1REuMWM7R92kze9J8o3eSjnqb56xqchU",
  "key30": "1TDXNSba9GCuZDCFFEtERA4A5rT7vhaYzJsZptVUSRfZRgoPrrGrkDf4dBFfoo6UXNhoBkqx5YoNQsRQrVw4fzi",
  "key31": "61U4w2xW1AdyK1kPfvAnU8UyEzZQH5kM325Zoo3ktvtJDqe3WpGcjRp724JKWvCGifEdTx83JHRmjqGB2aevMB81",
  "key32": "32bYSKfFaPsuxL4W2MSDMC9vF97r7szfESY286ahGZQuwjmrgjwF4ViTtowwAd4y2iiEk6z5ySETRcj1AzepiyAj",
  "key33": "5qh5gLyBfyPGqEaofa68NGB1qCUKAwqq3sjUxxVRJAYYEBpTLFQvMWsHuVQGzboYTuUz1WLhmfEzvy2R7Ywv1ZUK",
  "key34": "5QccmCN9QstAQboq6A8Nx4n1LvkC18SrSf3eQZSwqDrGtkeArp12q9VULuzooTDGNSmUhpzhdJ8Mt8Ydt9C4uhEh",
  "key35": "5sgAGD9BE2FvPA5Ta6N42nrCir2EqzeXkN8e374cPwFzKobrxDPXQTcxCpcLwU1A6S5W7HszQWdgMoHLhRF2NqNa",
  "key36": "38srFsHtmsjZw3UjzFtVy585PAh1Y16L7wBBkPpXg6msejWukHgKbaqEDTi7mT37QjrmWqUUhTJrjB6qwKYUGWHm",
  "key37": "2y9UVx9XDcsoj3NkyQUzYtNXhN1MULv2v95DSwJX7nn28xzmrVrTGCjzqW8PJYf4BfG5CpJc5LnTry8GDx1YwVbS",
  "key38": "25DEnQrCATKCwqp77QSdopEggfLqgjckJBNpRYPP7kmm7UxhJvn2mZx5dN4y76zzjmMkJES3aWyEnLKW8wMEbbjQ"
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
