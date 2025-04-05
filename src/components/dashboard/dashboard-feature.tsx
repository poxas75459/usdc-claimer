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
    "2PuQ1QbRKmDJU4oqf7qKRXRhQewd3xX6qfKUJ87J1MBqbGVGZBWTo9gFsXi5ratUJ2avCQQtw85QAfYb7zvfgpZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FeJE4aduPXG55QLcrdQ3XbEYNYwR569DYvdpCTpLTr3fFdTSJcYoeFNNV9oVvHR7xtqr7xcJe57ARdvixwJS8rc",
  "key1": "5LACfvyNi8mMwnupSxsPmdSSGggk9QSYrvBx7QNBhvtnhoB9aa62Ve2ioQr8ea36erBdLdsQiXzQug72LACMzLqc",
  "key2": "coaSMSe7r6ivAztBHaDFRm9ob1iKcNhP8TqpxiuEh6GnJdMzDBmLMwTHmKfh1vRd47tteGxihz1NWivsqVZv8Rb",
  "key3": "2a6Zpk3gpUY2YTShcRZzsgRT4tkZWbNHwxtdiHGnRHAmR41GXhxcDo8HFKpFUvStv9zywhrEzWy2upmoHbimPrvW",
  "key4": "4ervnxekHThTdvNNc9gdtox2ErLfyFdPwoVJajVRmbQGyVR8E4dV45CETfHSYZ9NcHQFd8gKhFZqhTWZ1G2FR1R6",
  "key5": "XvXDDAQo1tVMWSMsJTe49wyYx8FrbrADNDqg1F61a8GnNtWxzWTfSNM9qCkzhcfUMM3uLyU7tUtNBb1XGHd6nZc",
  "key6": "5n1nGSb5LybvFrn4qtBfBeVoRCBxBtsp8qcNoiETwb1LTkFhuEEkEicnBhfxs6DHLjcwYnjco8gSfFsYnNUxKh2R",
  "key7": "2bsAG3VyJWNP3j4GZvXsTLvRw38et2Q4xSdxNGB17gAuNWMedC9jaN1tzQrkwuucz7HijQWHxQYyWdXTwpTHeuym",
  "key8": "LkWyjuajkLm6wPWpKdydy3ntgnBopnAxGHrqy3t7XZUkde8KqdA5mCnjjL7ECcg3jtFNHuY49q6M7XdeuJeN1GR",
  "key9": "4gkkKrVR82oRn5E47KzpR3jun6FhPWHp9P2EBPRmBYuaEEZXybfcyfdYccvQ8eZM7sCWQ6ZipPh6aG9dQqQDWDc9",
  "key10": "E7cowD7C5EfoNdFY7N6sRkbw3BTkKyCrNehcfxivPpVwrff52RLBswkDThomDYuPDpStR2jxNfqfSTeASGyKGzS",
  "key11": "2AdSFhNKWtQ1x7i1kk6urNh1PYnatyXADVNv5PH2vbnuwctJpd9R6TaC7xhnURoi9U3ajnzviUX2qV8kNbruH58r",
  "key12": "24WR2Kw8dWh99ZrMkeZfc4xCRwELZSaSLkrTxrwoVLfH9qDNFBKCmwLj3RSJt64VT3rzXie5nWzHLCRbWZV8yKKQ",
  "key13": "5xmynSzxpuQ4iiFrMu3FJV9VaffTHghDmKEUzYRen41dE6brFvJ12sEGE2BDBE8XinEz3YwSJY58HJPpwPS6zfG9",
  "key14": "4FgvZsbjibauxsLcdwtEjwgsvvrhruLXrNaCX6Qo55o43y4BkCa3p6xWiSJxQuwws5oPXd5xT6h7bNFvUMkssoLu",
  "key15": "3FFZvCnabKm5YMPxd2CiaqmhHmbPfN5m2zhyPk42TDRspn9SZ6KHsSmAoYxAr1KHsNuL9kSexmwvUtGrbEk2c4yu",
  "key16": "2wDhWqBe13pz5T8fH8XTydoSnX6Ca3ycmypPaFSGwKGtm4SsF78efcd9aiF1BioN66gDfpDikPpDK8dpVcFQbuPv",
  "key17": "A3y9s3NdoidtB5E4sZxSrPwJ326qQuyDk9PyuKZeH9jzYoMTSfUixmpCUiDzt9vaTaQB1ty1NE9tMUGejYTwTaY",
  "key18": "4gvrY88uSqv2WYntSN7fe2zSpmWSqwM6v9KjdzW4RfdA5XG1nUANnfkuZyWFLg1PQ3rtkMNvpdmiFqnHMVNYh6eQ",
  "key19": "3UHgw6HoRxjZaupZ1PsbLHnU6pZ6Bn6ZhqhbujgV3aJzktUVNFqxnXNrThRV7Hyh89AhQ4KhFrAuZFQxhocvaE6Y",
  "key20": "32FSFfKTAhKxNn3Tv7P1wx3XAhPA4CUZWnKryP2bdZNA4STAVdbxbK3zab8uFQ5LKGWCGmV9KU8SUe3SJxPiPVSy",
  "key21": "3BRQvBerD7GHgx3bBA9tXYQ3aRwprCpNW1yZM4cWf96f7B9QHqe8UAuZqnMnxoPcqDrzW9b3h9YngykuKhQEz2wk",
  "key22": "5QVhcs4RoZqahuwcKPFbZnV8qeNQN9iwo69mDC6g4KEdD83FjWUYVEB39zFLhnpyipQfGVZ7ZCudGKwwo6YVZkGs",
  "key23": "yn7V6QX5xCHrG6T8dHikvERioKSC1JFooyNYV2Xc8o8QiRo7omN8SXBK76yiUs1riPdb8nNUjLFTj8xp2p5QJw8",
  "key24": "4SPXR2XRaeRS5miX4PZYchmkkWCCenUj6kjxfLtYMj3mRPWEB8fDCZDKVWPGU3g7sCg8nUmNmsqSiwb64PWVeieX",
  "key25": "36e3SwPadgnUpcapcASitTF3FEXGwtjUQ4PbPMCmyHxc1cYYCads1nnpKZDbx35AGxhwFd2KqV2DX2zpsBcS4hZD",
  "key26": "2iHaK5jdPy5VMWrNzivUf5RVvqAkckrH48vJdkbw1HrBU3EWN1m77xML1C4Q7SaeJdcnRsi5aSuAJast1odjuvNi",
  "key27": "PUrh5BJ2X3pMUU1ECoi71RdXGxXMgFV3cTbnJYDsqxE5kResjq93QMomDHSYUUEx8NThvDsiHGMWeFHwMj4w1ik",
  "key28": "r9NdFg8pH7VQrE8acfzWZKAq85euwLzhVX2kda8C2tR9YqLXZcph7zakxXLj42VWTqELL7xLZ3RpVffEmPNgFCv",
  "key29": "4VdgLx7Cf2bUCmhfdJTFQZcYGpeXpA7HLFMucEhpg9ekWKsEfUtHzHWvJN42XdcaweboBCbj4DrBMpPA9rZmQ2mY",
  "key30": "3vyQmNpyB1WiRmjzN28s7b9cPxfHWCQwFAxiboZGJmye6vrH3RbjqgpqeyGrzeUpKpni36f5DRH9L51zNHVsrQGw",
  "key31": "45PVcU8EmioMc5Gnooybim5nYCJMDg4SHVirsvNybkFBMhL4YWb8jdfTVVhy2QAjy2SoCnXykghyQuezDPGQ2B5M",
  "key32": "7hCyDBF8cM19jVDEzS1T3odoz3Md96gaPw7a368rmcYV85E4TgUDetFzrJoeGu2S7oiEQoTPd5VJvycCsMwwBKh",
  "key33": "2cm1Qz5hky6ma5sg7q1rtqUiaD23nCcN7PSPK2msPAwfyzCEX9zn5RupVdvWTrFfBzf49MbgRUXzDUCj9mezBPG8",
  "key34": "rmyPH1152VPpAsQckumAxnRX1vHK8DiYJVKinkZqAvqxyqHcc54XPuXro2AbUoMEQ48m8NPYsBUs7sEusqiJuzP",
  "key35": "3qYc2p9S4qt9mVG62bwo5PL83BVqZcPL3Ebx2JenoNJhwJnCvdUrDfHmaTcnwpi3yMmnjHVkFzjVr21o1zyaZVuh",
  "key36": "jkfQ6xKZd6G4fkLbgQGU6K9j5SaPrRNa2wiF8EcrvxwCC4uiWue6nPEq227pzUQ7JvCMtwzi5x38YRSMYx13bdg",
  "key37": "5BypPGmnJJn9AZRPty2N1fYAmxzqAbev59RhuXN85t2pyaKZVetDcXcmhtUAd7NAzGrbPNtkBKw2sBELQ2nyuW81",
  "key38": "491SwC9Qb8ep24S4S1JQNL6rhZzTrYeFfFb57vjjhvMTXJ4eWugwSYnUAGcRkW7PJrRUywsT8uvgoghirQLLrw15",
  "key39": "vaD53JgNJbZDpDRAbcWdsJfqqHpGsRuNVAGRpDuzifY3LyWTZ9mD8M2zQouZ8yk8Z775rX6EAc86DeYRoFxtoo9",
  "key40": "2aZYZg4MaeSwTCzWrfV216KLxnYXgn2UDzgFDkd5ymeUqEGNXyRBfcvw76UDzS9U1Gv8YcpqkAF2RRK2uzx7rfnG",
  "key41": "4sWWX6rgmbeH6C4mW2Gn8fJv4oBbJgv6bQE7VrNw3R4ckLCN5RTJ6EBLWLPyh7EnpobJE7DjiangtssvqGYWnKNA",
  "key42": "4vZfSV6yYKneenRJPPjA2bQEwtEpyCxteq2BxdLVshbmd9ToSW1V5hwLWH7QqsY5tQMZyWi762NXAVzyJx2AzdRT",
  "key43": "3BfxFzj35sdSYqVZJfeL2QcAdwLCtm6wCVnFMF19NBLu8HDn9JeYbqr3N3sJDXqLj1zkyXEKwns16otdPQNDCi1z",
  "key44": "5tSStJVsnELChkokcaPMQbsJK712QLmZ6bSNd38J3Z6E97cR3gfjHcyN4XrjYc5zuCTQe2xBHLdQkju4q3VSmTf6",
  "key45": "5EAJfgjurzwCBjiWUTwRZ8UPfUorcyyUT2afQFC9Rk5QmqFztEAFDRp9k37AccS6wuKUz88re96dgdWJnxwTeGcb",
  "key46": "24ier18vJEWZ7MoaTtfQqNeZcBeMWFAN9jUV1iFCdoLxBen6P2iKuNe96s2f8QFqTeMs4JmLpse7JmzfDE9dMuoj",
  "key47": "58M2TG8trNXLQ6pQp429o41ecmzgw7CHgdPhxxjoMv6DxknGKU64rp4HpzqZs3GENbGbvEr2t1oeXZ6XWXirA21U",
  "key48": "2G7dyQxSVdRX2xJDCQdR94jZsq4h2DRRj5QiuqmFfefiBwaUAABZhghqguRuSSy6JECgw76GT9BFajL1Rycw6mtt"
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
