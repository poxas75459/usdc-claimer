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
    "CmRQyYgjdoYHUWL6FvcFdvExX1APgxUTgDUNkZaw2Le8LD48gnQEot1FSWjZz9pbWpApxQ1y7RZDC9NLWjMV8AV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgtV1sQ888ya8JRJuNZBLmRntFN73ekCbtnMPP9QmhByB15bwPL5Ha8ELXXccvcbqs7kVg4SAkXFqNCsFG8Rryk",
  "key1": "3TVEdMjjEr744HprkrD6ii9RnxGN3qpewhntRV1K1QcGcbA5WRNJE2sNcpmXZKjYap177KXr1rySQFcQz9q6Xkyw",
  "key2": "2JWNkxQxS6xp1msxJxSeBNHG9ruQHdxabbktqB7Q3d2Mob6o4aDnNrfASEUAfmoTftzDzi6HVrUyogfACrjApiED",
  "key3": "Kcv87YXQcsjs9a8oNHttfjm4PefD85yuDVHBu8fyzTV6NxyPW4gnokKnA6fnvwWzq5y5vyRF1jPAsPr1Mqi1cVW",
  "key4": "2Df8qMs8CfC3arzJRgyk7RkPrxdz93Qqv1tr5bQsrdBKnktw8CAWAEcXrFH7RVbSayqqnaUFDwH6L2VnDqmD3dzW",
  "key5": "2KP9PWKp1gWuSxi64oZMh5VG3QopLDyVzbmp2oxsueKRJdQBwpZaUM32BDdS1mXfaheX2aqxN6VY61va19TkDGXw",
  "key6": "2txBFcmCyduLxMFqBYuaw7pUYWKRwon6TECSv4TVztzhyZNYGufaciKGVB88dsfCJBQzZkxUwLqKnzH5Ddxa1wg4",
  "key7": "2GwbyUij8iLvaNS6BwgxbuYcbgM18k38hhPKheuYKiWpn5qpKu6MoQ3Vf8Hes8QLgVvHyQAkqwpyzDnCSyo6MCWD",
  "key8": "Wcm8K2PhuEwod46fmJGeDFENeEYwzGDbrxiRVuzvzZpd8XHByvTUPWgMec4pyiju6Dr6piBSJu6brHsYcGd1hoR",
  "key9": "4J3eivjpfaCoMFwmqLzpxFtRksVHLF2reLHTSWx6fNP4t9TJWRpmL94YXEe6nyCrD8kbVuH1opEhxVDLnwaecKfK",
  "key10": "YUGjXWzFWHHgQicDKcfZCJE23pJVNx1Q1T9p16QktZYWs6zzGuqcFmGoVQTjkAe1nrjDeQN5r9kBZXDj7rZLxVk",
  "key11": "3EivgiZTUd9FQicov5rhaPVHffsnjzqrHpxGAXsJAFAsNcBSAMVgkuhgs9cpyGzVpLrV3JXAajFz4kve7CHjgkDX",
  "key12": "36uhnnRBp9Q6wdYqAsDYT3wcE3xcg8w1VT2B4eSuuBJLMzwWCbboi2Zgd8umSP8UTD1bP4n72VgufdWD7NUffZr3",
  "key13": "i9imPwZC9JmZR8Nf2TYHLYhVSCrDY7tMXmq6EPMCXA2Sg4ETJU41UD5qdUnSfQB3fi4bSgnvejfvfjqzfMGf6yb",
  "key14": "3afNcjcCmUH4dYcdU1ySaNLYY1gW6dTJjwQ6vFBJXiPemDg1bQTNpNYrctCU1UyWmM8pPG6p3WkB1M84vcZ2KLdq",
  "key15": "3osBtdi1JAbkHki9e67inbpwJSc7QcFN8o8nX3GGccNo6eATvq4ZtthwKFyZnktFdgNhK8ULnmK7mxuDjj1S9dAq",
  "key16": "36AnFGM5wBZ6wgZN1g1qfvBhSpjT5CEMoezDFPgo9XMePeQ4DyQbyzeQACzok8k9YnrAzcyvWK5EDG4zN2YfL13x",
  "key17": "21CYrAD5BE9o83AaBREg7JTypW4hAtrabBSEG3USCmqu9AWECEz6Y2Ut2jFHTad2HaTAf9ezkUL5jZBV8F5Paesm",
  "key18": "4W4LT7iaFcUVZpPLC9af3Y3WvFpHDL5crH7UyoA6gqVfNTT1gRxrvcEsTD4oFBCXNY7AX7Qrzq6nWd1s9HSChdAB",
  "key19": "2vKkDB9hfHjz7uAddVFJv3GXKAmzNY2uacLimUueM3KnSiCom7SfY81qivTyJQ1iUMuyzc5NmgSejWXAh4Nabr95",
  "key20": "4bgd6xxu22g9GSmPRj4t4gCSFTcszPZ6jfEbPfFE2G66GDLYMDXw7BwLzAUbpa9YNBHNRbGXmvzKtY1PRezsMDqP",
  "key21": "4tT5A3qwvLFUou5cv2gGyXw7juKELek9PCukZ74nUKFxKx8AHRjZ6eDukyNxAj8XQfg7TeqJMB1zdUWPqYDuCXso",
  "key22": "5ZzwpKuTMZxWJRXn52CiLL1wAktmXUwEVWnY7QZbZZr35jJiSztjWjhRznPwXnoFWsTzf1Ua6CoeeNUsK9puRMw1",
  "key23": "n6QqaJSGaqP6TSSP34Y52Fi7q3bNxRog4gg2J51PiQv6paJspVkcvGY9frHeUXYhdLAuEWmb3BPbgCuBWqcXNqj",
  "key24": "4AUGdc1i7rGPQEfJ7hdCAHc8TS1iRxX6jDfArTnf98qKGa8i2wbntGn7GFZTm8ArHDy6caFFF9GMZDwymY33eFXU",
  "key25": "3XAy1L6nYcsnw7i4nGheQ2Sn6ipMz5w7EFzmiA6F96Q84X8sDop3G58Ltd4hffzXeTyXo1dK3Nk5vvV9XP6WWuYt",
  "key26": "pyUNS7vow2aMoYPtw3Edxs2cnHRnA35PbujZdEByGvVQnAmVRTf3hRubrP5M7XLVErGpxTVVPsfcyn1tjjv2vGk",
  "key27": "3U5hv2RZWU2RYz4vigJJpsLjdccKjkoRufJTbMCJxHtZ2fbCTqXdpvQNkrrSXw7Ms8L1WUshGD9J6fYKGUKNv3z9",
  "key28": "3gnfyBX5XBLi576uwa76gDcqiFg2Se2MsUjbSj8ehKrv4Qhj3WvZBth7Ltz3A4WfuFZU6vPztbFmT528kngytzGK",
  "key29": "4DzDKcBzrgs9TsdgzZrPVdzBgHzoiYPYBPc7fbmBVyCyhV1YR24fgKeRfmfggSD8mLCvgjdrrRLhDGHzxR8PuLxp",
  "key30": "5GzxhHtqfpkKbQCHTD7Wh2vavUWnRXSQCvACWJ5qs8ZADuvWSoMfTYfteEAnLWPhnE6TTToubPTAyJtpcH2yCiQH"
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
