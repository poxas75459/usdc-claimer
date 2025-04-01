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
    "4UYnz6r8VUoGdKzuNpxBiG3zMnkoAayrvrmrhiYN4NQiyWR7eTr66vkULV3vaEbeYzi2zn7iSig1zZyLEEkZTnFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jwhVB1nvuugH7rFTmZLVKXJu1R1HqfutcLJT5wnDS2P7RtoVaqs8xEA1gdwvkLcSa7xEsSsEEeQkL7WHqrswue6",
  "key1": "59XpsCKnAFkPJprSc24w4yF6ApW4oqX5Xgc9vtUVYPbA2aih3cwQ3LApau4NLrLDwpGBxgjXkSN2aKjUo2naSE1S",
  "key2": "2JeQKjM6LiFiie8SCazSSkkzqvwfcLWcudrGFHj7B6orgyM1J4NTHooXkJGQfwMukeYkHVDnq5qvFuvzVo8KdWam",
  "key3": "4LwKeiyhzHhVzhezqwbyY4ttYn53zEaDBtmLdY4WCgHk7scFpt6tb6G55CgszBWZznGtVewLXGC2wJXmaFa37Y3e",
  "key4": "5iQerHYzFdd9SmyjuJjoKf8smqaXxGhwnLePKNL9x8AtTZeQm6HyWv3T6dwS6JdhCsC9JXRzsL9p9KA5ZYw6cqvZ",
  "key5": "4bwkiirgGptKUsRA6SRcehw6jMsJ2J1hdrENnfq42YATQ7EP2EE2ustYqdB9YhfR2vWHASDkh4UfdLgstoE88dH4",
  "key6": "64SmHmvCsQWRpKAEYERmjod6jMP8QACWVAqqoxCUirYsK4RACqb3xx5vYMsUSkzTz1Dqawt9ZQct6CBDFjSXqNj8",
  "key7": "jyLhVKQoyGSwD7b91B2rEYCesohRhFtW6CdNWu43HCxbV6bXgcmb4XnBrdpojzD47EihvSVobJCWFMB39VbU2qY",
  "key8": "46nwC5uM2YyBGjyBP5sX1XpcifYj6699Qcz1v84PDLbEeqe3UYgLa4FvnCVghNX6XoPzo7mQFgKAyBueKjQwxPQ9",
  "key9": "2pyqdzgChFh1oCZLf6NtxfPm4gqKq8zHnE7Je7S5yTZvrWU92zPyaJG3vkFrA2oaC1XSzoqV9p1UE277HYwAC47a",
  "key10": "3YVzh464MDjKwoKk1GnR3qUaXUdNWnNZiRxRyaBFWakxGRnw6YVM9i1dsESzeBBHXCcVQ9ecYXKVvmeH8sNsxhDv",
  "key11": "AmAMnteh5ni5gJcLN9X6b9D78XtodNDNQ164u88RG7GqoExR43RZYU74T8AUuVQLnQXzcL76FRGyFbFS4FkpjKQ",
  "key12": "4oT2MFprrXZQACX38ikw3M5yHMtjCLLgXC8FpiWmZBcDpZiNNsVufySnXK89hnAJj7Ni2FbXxzJRqhbjBTeCMHAM",
  "key13": "ZJiqtGRESQwq7KHv3Dcr2RBipx89RnPr93sgbo7qhTQeoUdQverqiQVaDJv7ZmgesmJLhg9NnHH3ax5er58tidJ",
  "key14": "5NtH1p4W6pPrPh5QGX6SYxZab8okdMGG9cBw7P4m5pyFdn32TMxMmcNDdcgE3sSib5Z5iCoEcJfPp738Qt7xd48Q",
  "key15": "5SDtzRBZSEV7nRJBPZpNTBAo9qhcVD3WS9oTN4ZiTee1c5i2tbR2Au7HeSPtRmy4KiG67vwFT8Xgy6Hk4ppjyW8T",
  "key16": "2rCvBYxR2jzahiueHAB99P4n38D3sZfcrB94Am6cpRFzwYNseUU1mFSBfkJhUyCp6hMgDYrjjE7jmWbraEKDyLUU",
  "key17": "5kKxwfJTf8rLnm2jzpsAyzMngoKePvFYHqfgB4MouKxGsPZb4QFri7sbq46jXbABpfMnZAqZxYrgHPwwZRrQK4Dj",
  "key18": "41mHw8yb7X3d1Tr3Tmr9MayHXh5Cejs1qwg2dCL3a1wDYJF8zjskfGkMkEe1BeRQvJvvkDU2dDVaUDrfzZpW6xXk",
  "key19": "4FEkx9fUk8ddj3caGfXYQC5BG4ZcyWPjCopneGRpaFDtRhriCA1V1Qm2NM9CRBttpPp16sDnCZMpP8dhswEDwfkb",
  "key20": "4xd3Nfdx2HFtvkeZqXGdofxNdc2rckQot53e4tXCSb93jhdAaRjifaw3yeHqx6Eg2uEYB7XSWZDu1CNL447b2TZr",
  "key21": "5vtaPm8Xpgbv2GE1XjyYixhKAoidFWHHeZDwUFagK4s4dox5x1HZJMS9ScKB6wUZStUCPhgSe1NYjouCSP3TR13u",
  "key22": "37dFc4amYKQUyvboXmZtG89wCeBHEtcctK72niSHzxWhPhtX33Lkb56iiXsgozPoVYz2sfcfu1tyJd6tZadyBMHe",
  "key23": "2fucT3vt5RA8GEbpgrfjN6GLDj3iVTjmW8mSNfcF1hbMxcTgYkAwMiCGVMZBfrkCg7xfA7U7Ci6xqzUd47unYN7c",
  "key24": "k4CPjkYmvECVx7j3W4kPXu7SkNGdNxq8ip7HCCzJzatuw55ZydLpo2FrTfdDZYhoHJv8eRTZGZwtwzCHey9x18R",
  "key25": "4HVhjmfzEpkYNpp5K7eCjxLHgDhWZnqL8aWn8zT2USK1fSjEcYBqXKMfjc9T7MQJFPtQnKzMYdPrcoeyeUWFnAeL",
  "key26": "QeMHKhEMfXPcPGJVy6GitixYXRsuSS9ZjfivfzamtDCHjn1GHywcTWAv4FhMw2ynpNPTmCGsJ1YrTuLbUdFEo1H",
  "key27": "3AmdZUG1VUqqxrQuJm41n7wNV2Z5pYzeyFVaMR8bGd3Wc2fmsVySPtnZ7njBD7BBPYYF6hgYb7oBrLGjAEi3XACp",
  "key28": "edHkUoXwo31QkKCpQN5smPXDkeT6bdPECdJw7eWKT7s5LoBh1U4qTagZMC3fwoC2EJSZHLzc5dvvbGe9tJq12Xg",
  "key29": "TW9v5fUTRYDkyVbmYbGDTt4pZYYmKNojtRsFGYzcAL7QyjWXa12UT6HXqqGkZAcmsjYBX4bL3iWB3ai7qTzK4Lq",
  "key30": "5cNn8pmfHfZKwFgdQhw4NVQveMAvwDMixKfjTSrJvYJYsSTnqUEA3zGHPfyyrFaFs3QXpwoC2oEcXBkEgg5VV6Rr",
  "key31": "3jXUX78GXHb3EVx9xZJ6u6oCKiCrYRd4tTvh4FrMdJpezjzDcynLcmDaFNqC8PB8RKnjTDFNgPXCcztsSLn9EmDk",
  "key32": "2wXfpHU6EZv1SosfSDq7coFBuEQzBzN12fJJnR2EpWZhbTdj878iLHpgfVyKgHuuZ8wnCzxUV75q8cETTP6qCCef",
  "key33": "54M5kXTYDD2iWQxdoCgKXVfWDQcEdc7uPcJcw6NNi8gEGE95nK1MPHQVbyzQcTRQoBwBNTjfALGPuarqi2T7cvg",
  "key34": "2zhdUmoMFquMVHZQG19cwguHuSHCbEtmh3wCUZGgn94BZ6WjTaqkcxMBBVWP4c2FZUyvjT1cKeRFpAfxasDEgbvY",
  "key35": "xYyfEE8TwHAvFSFSWqL8o8U3Twk2Zhi7MTwKKSmnHvEkN3KKziGXuCfCkC4eCQZBdJFQrcFxWYZBFAhaWqFaLTB"
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
