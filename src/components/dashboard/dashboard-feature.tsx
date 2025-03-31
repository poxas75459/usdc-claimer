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
    "4MEyZFCy2yptQWHesm8iWgZgkF9Derq65s4hMwFYD9cREppVnNSMSEycX9Wqs8RAnjo11Cyz1agVooxH1YmyFhpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bztoHQshn61wdioEWFQd6KAbEXnRAeERiRFcMCvDVD6k3qvDgbK6zbnocmAnyPSdsc82ibgQJRBnvmKQDfoyFtJ",
  "key1": "2Qwaw1HFUxPC4m8otytSbJqCz5vxFKJqdGHovHfmnMn8QsGbcF5ge6PMp7563QtrqhdNPaMZYkRxJ1NztY99t1nT",
  "key2": "37mckJNtbNbrnGjybUSZaTYgEGmSYz1FrXP3s4NMjMArQDBzs1R1mvKFzkBY2XkaJ5UHrfvkWzA8qmJt5nJ4gGr5",
  "key3": "Rieq5pxHRHf2UmqTTofYbkLqD4AMBcS4KjfwKsk5MACt5JijXVY3h1aV7bHCDH8krA7h3GJ7PsjVkx7QkdqUtbr",
  "key4": "4yE4wXwVcosW5vHvHAjvvK2gHs6J1esuUUZPWSVrH4DpJTgUMMtQnN17U3ZS1U78AZz4dhBASp9dw4E9jCeodJqn",
  "key5": "5PbSxkMWBL84pSUFWQQbTv3pBMCZf2yHrrxpZDSpESti3bURAezUeYc1i74e8Ezfw9MAA7RBJUofaBCTSQaQLBnA",
  "key6": "4oV6qBMRpfvPRNA8pJZmCheDH8g4sXP7pFWb1CRYDxgHo8Cjvnm2xb5Zono6b8maW44L6TGaVP2uqU1TXqGi3QDA",
  "key7": "36WDCorRRpuvVxC396Bdh3tmkSEDVcXmKV2XxinKR4rL47214Mot3RFZ5gpy9cH8jSeQ9AWDX2hGbpuoivJfV4r6",
  "key8": "51jBJQRpgKi4gqkYPaVwY8ufo9B4BfTnz6Cy9mbsHAsoKfDYfNpFCNqfQ52t6ZiTu7WrBwpCxFREt6KgpvqTmtEN",
  "key9": "26eAngKtn6F5pU2kfXPaENLxoQiUfDWPj16XGreSJUzbXhk8GkdBwwvFuDakGPRGsry5yZdRbCFJE91FZUM6V7MN",
  "key10": "34Fuu3LJiEjYQfHqWVBE1A6PrnWSmcC2W6Hk7GrwTRiu8FASyTWcBv6eLEJKgFz6LeRMd6ULwJNttXFMzcMhTrzQ",
  "key11": "3k8p1PDZcx1gDWxAEsn6vpHK8iK42kZqqTnfesbGDyqz48hKHAUpYmfG8EF3xaUZZMRvjEopmXCJL1FLTtQYj1U5",
  "key12": "4vh61nzvvkzF13gh7fG5KKqaSpG3BzWj7EfJqZHNLqmVtLp2bDwueEQYoMHfYJ7V7pMpxR8fybHjkdn8fREQ2KVf",
  "key13": "3V9L5fW7byYPypoqenGtpJk9XfVf4m1WLko1GtFwXPsgbgZ1qJpraErZTdBoTvyB4Bwm7enTXCc53LNHFV7gEEi8",
  "key14": "4Y5rj4ZHPBTw375cdk1uiwHRPxM17YsrWN1GMGbpM4iHJabrnafiosWL1MzJ6z7xcDmjkWmJ2GvHMDkfaDNZbq3X",
  "key15": "3grnhX1J8MWDpAsKizYJbfPwcoYqVivGccrNr9mJkZ4G3uVNQUpLFPZ2tBpe37Pa3LedFtV5UweFkstJKgtGdv4W",
  "key16": "4XNzjPk3Bt8aWAFAr4yMhoexx3vUgQ7T2prtgfBf1WyFuLv7LMLa3TmHTiCdLEU5FQ1nkWmWhwgvqCGEbQXLEMkK",
  "key17": "281zN16VycpQ9Ki6kBWwYwdX7zaPJ6fEvdcNazuRt995jfFNUZ6gsXEGahA78CvyzgSS6Z3LUE68jgRhDmxGhFrW",
  "key18": "3dw3w4gPTTLyTchRsfJXMbQcAEhAZ7c6mWL7LZAFS2vTaWVhYCW6Ubp7xuAXE34wzybtGDhqLAVuupDq2rg4Dofh",
  "key19": "3qumEaiTKDihY6oqojDaeKabCwFdu9pLYZm7qVnnS4EsJ5A2EqCcbtrjq8WSwHC4LnTmPA4CqUbTEHTRKhkTmWgb",
  "key20": "3wNVCtDCCPH48xhokvuEpFGVZ8pfDZehfFibfUPE92Tgd3Lg2FKrKmA57btUMPk8ENqF7BJyiEFaDr88eheEXp7w",
  "key21": "3Bj6eGkCYjyvUNsdmCKZFWuFT7heCGPGJhLbAT1ez6hiJwCyqx29yg28QXZuXfeiCfQjuSYNarBmZvsekMHQntZV",
  "key22": "5YtAPv1FDdxoGNmjnnfdC85atRWx3XgKgRdRWzD1PxeUioGv2uPKZKWwZtPziDN1Yn7YHpd1SS6S5xAqkiYzXbCe",
  "key23": "ncom5oSLYdLV3LD21pSfFhMAsUD2M5QYPywG9dqf14LFNuuKuDnUvXkViuMv6j4z8nj8xYmE2vprpF79v5A6jeg",
  "key24": "3A4VBJ47Sjc6w5tgJF9CxhChB6y3qBLMpXnwmsgKEiugUmvhuf6WU8DCuzxhiMLxr8vaNjrgdUQSQxe8STZhuFEG",
  "key25": "5d3kFSV3FuEji8zcMFXSo2FfYUECTwZFbKEnDUUML4VVAREVb2GdgvwQ4ifQCiYkKFN5wB2a3tjXScCXWMCxV4Le",
  "key26": "5JbEY4nx5XUQF8NuSdX3x7nnjBd3XHNb3fYKhmWgfkiwMoUhVQYyqJL4AuFYvgkHGYnanzPU2Cg2GzZbjGHDxd5a",
  "key27": "2ZJoY5VySr1BmFwLpEKvxXyCSXsnpJffDd5rLWJibToRnahc9vn4C4coUSx6hvszefx7LoPQMTt8JgBvzSDiSZMs",
  "key28": "3hTsw3kiaYsmysMnw88tAB5BEY8w9nEFrTr2gEr1kG27fLvUcWLbrWBqz5fPGcKbWZNxzPzixTQYEinfxNQnUTW3",
  "key29": "2Ts8MWEmonuTJd2qzCfRFsBp9MEC17aCufwFzPHxpg4yeiu7NwS9ph5U3j91ihbbXQFUMo9Use8X1jMkrvH33QWD",
  "key30": "4NjUSRs37erUQXDPrguZuUZZdhJzHdJUdwREry7tv5WjFHNR6CXcGTMYqNGHR6xz2HpGuRPnsCD7rzz7yKXaQjAj",
  "key31": "TbHEPWRnQdXnh1AbDxEEoDX71eCnHwLRgYCaxx7j1KAmNoPz78oeBH726FLcXiT9Zhs7aL1N7GP6PXrTA866LQt",
  "key32": "4uxbUcw1CYajsA1xgYUboq2Cjrwy8jC5yPa2szKUoLUsUTVjj9d5174kdDVXzYGJcY4EDuBTNkBWEs7Vqqe8EACF",
  "key33": "4VgZHZkhTf1QRX7V4EMaaWup9nrRsTv4KjtWRyAB1qdHkeiYz5tmuwetTvxKujaKaSmUTGThau9wv1jG9it9vWDR",
  "key34": "5yr5KAHfDV2PHsVtkXFWWAPGtQXC4nMuCf3aL3GTZenF8gJqKMxoqo6rrhxZTtEDU6EXULDfzCJy4fevDQtEZ1nK",
  "key35": "27CBhtYys2uDkrrXnNK37phNa8qAJuhKmfKKtyyY9eSWhR6bB4XNcwbGURQX8edLBJMZJKUT3cWVrSkMaj48RJCN",
  "key36": "nNrJ9gyBrfA46DjAb3ykfxvTcfZPxoVcES6rANQ1sZ35265f9q3GAN2pGenjXMtdTQW5m1W3hjuu2iAdHYdqj3V",
  "key37": "oxsTuX5X849ANv8VYxcNjJPPKCvVALT3gzUKvybVzwVQo5SHSogCgb6ddtgSMeyBG72aafw68CRT9WDau8dp8zQ",
  "key38": "5RfSKo8eT8Cbd3oGMMqJbn7Zt7aUpzdqujabcRhY5pxm95Sqf4pETTxKaNia8nKsheGsPx1xGdXybg8z3Hj3Jhvo",
  "key39": "BE36MGdFkP87aTHwwhwRYNHnJ3FnwbofJNRtSquG5YA8J8S28VS8E7nF73GvFeg9gQ79oEkRjTXRgEhNAzgR6So",
  "key40": "33g3Z6PhwNaKJUa64rxZC6VnsZ3RNZx6Vv2qbJKHJ4HGuDCot5WC3nf7aN7LBdKGVh2RwjQRx1eAfrmghQbh58a7",
  "key41": "5o5rHpXkkmK2GUcXYGuNVcZHCy2rnkF9ECDeTJ9Nnp4p6fb23fNwh9JvpwKFb81uXUZQduRsjTNcnZ8vxrEsLc7F",
  "key42": "5wxwLYKm3mV18Eba6nx5uQ6DUxYSwEqYrAb6yhQ5kKSinASjd2Zb3pgYMSpaLis4J7by7jAYZEE6TE8qazY5MrH6",
  "key43": "5qgyvLN19wTXXArYfSRRDpFfXr4s122LDaVS3nznAYoaxnFgdzhQ85rJC4oatUQ8xmDgeaZwnGQwN2kQXGEHMtfR",
  "key44": "2MdWJcEeaHnz2mirAS37PDa6VinMSiQFvRvn5heN1XjaXdXg4wqaSoPcfDoi4JxS5UFLBzPmHtsLavKidk3eriyJ",
  "key45": "kvGxHNZiu99u9ExF3S38ZPSDE32r2u19RysNHShPNmdthqnnvcaEGrJt5mAJj9TYD8bFUqH8MpuTGVeNCQckZMd",
  "key46": "21EKFuxezQ944m9Nn1AjbQkYU6yTma2RA4chVbsyPzGnYQSWV2JAYDkPpfggAHXhuwadtxDy3hJJhgqjSZyfwbnH",
  "key47": "2mY6seuSXanw3s23Lxk37R1Hcm32H6shmKFBx151KAoGsDF7pXCE9BG2SU5TKhWVk5gkYEXUE5SB3Dm5wiHqjnyi"
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
