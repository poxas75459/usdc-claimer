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
    "yBLzdRoKtGyJNRgAKUoHz5HtTMM1VLcuSjexTQsmZGCqVkhXsnUQGp3WKScMLdZer9GouTqwvnBBzKYTEeou5om"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y29BmZxiyChG9bSwapnTfvp9sMy8gpPUmwPvRRJ6pNbcbPscRpNQqrg4rTsgJgsfL2Ybjvm8hMTmtaMB2qYNAqh",
  "key1": "3dJGDYJQx83w6SN3MWhyzUBmnPXv32C5nB3QTBteKUAELJiZ6FUzwUgAREvCQjMhpQej3AutUgYxofRpF3Ge51wD",
  "key2": "56GrUa9psjeR2vQvU8SaiaNC2LQi278nakpGmKv8o349AosUDxoCxuDSTc1UbTUzx49QZ819RFg5La1h5N4fwdLN",
  "key3": "5mjhJvpUbqJAgnqUBZFq4f3rX3mt2qGpgrDhbjEiLnBit175CYnpofbdYARbR9E3D7HRwbxGavWwv7noXrXSVn7h",
  "key4": "2Z2houU9wpuHUKENgTP4dKYDfY6hJNzw7RKsiV3SoJGD7vvo78XnBdmvgGM3EigBZn59AavPBj88j52FbEJbJnW8",
  "key5": "gL9zG3WYAAUfP3vmiuJY7F3e4siW79zeoE4oSTcLNNqSS9GV6rsL1UAi9mdTLscmE8smoekKtyLWY7qva3fK7WR",
  "key6": "3B8awnq6M9JWJFczesoDjtCBqi31efDjrBUsQ2LMTB1JWeNkXQV7pshGqotbCBf2kR8fWYeLVhKijyBcQ8V69ie2",
  "key7": "5VYbbBnUBzTX1yKcDNhU88gfKmuWHJk5AHstFmcgRYtAZ2vCMtb2YrwzKWuiakCUbfJ7GUTEuRuz1CjUtQ4W8LiV",
  "key8": "G3XnJy2YLqL9NpRSZT26ptozZz1a7SAD5mMm87wbzarbJAhHU5EEth3mHBrtNt71GABpXPEhtjYXxHki8FQSWQE",
  "key9": "YGUf3PC6byR9dAAXE3WRMxinJU1rqW6TnjvxbrP1naSQVvVA7HTQEUJ3b47Gv7ReYyBChhbLFLQCLL5ZW5rByfL",
  "key10": "qSbu525oVVHUgmDG7FFzAJLcKHQPnAJkVj9V8JnEYRTeDNC6WpofkHEYsiFFXms8gfMb1h4cfjxqz2wLdQ3kRoF",
  "key11": "5WAyh9zrXQpH24amx3SecCYrsYjxsXTyJ31JyjYHc2GBekj6u8prPCdNbeRc8Z3G7KonrhLLLHDHWCwfHja4rntD",
  "key12": "2cPwV9hJ2pe2khdnFbfDqePVT3ouhCYTWt2stjL5bRv1Gtv3REeSTC85LrhS3NiMq1i3CxbGC7kdmfHHBwqHHdft",
  "key13": "4iwnKwFMsfQazoLYS26mZGs2XMYqXEzMMuDtAWzbXc8aPW31SjPaMiH2onSAhJuqstwqNCCd3MUP4911g7hYKMGy",
  "key14": "54xsz3uVvYf9TyKDjZmZgF7EP1nZUm1HqJDu89SA5Uknx8XBRxqs9ycE2TfRXGd164M6S18gZRvN2xEkWcF3PFXh",
  "key15": "3jmtbcZhxok8zQGEMX3q9dcYJuLZB4RZiJbCF1EfLXfpfjjvy1LC3qw5VJqeuombWVFmmnXJQfxPtwxpcBtboGXH",
  "key16": "5EY7RR6C7GiecUwFMzk69h7kqWLNwHLoYfAAPuQQtNHj1R3aREMHYQ76tjBDWJXnkTmzrVwF6HJpXkdDGh2Kuj16",
  "key17": "UgQWNTLzxywYt8pUNr9ojyXbR2p3E5CcuFrLFc4sF6mAaVDRHif1tMFby9XeSVCginviTrGoAZbxF1RpstjVQHs",
  "key18": "4wSVzhZi3jbdDprM79HWvRgWTvvHMo4BBWE7hDkuFHAEfAApyzeWfdm2NCCiGMyKDMhLsRYjzvWHZvjPTsHarvWg",
  "key19": "2qtxENFoMGdhnkG2zborZ7Dna2Wr8UaffZRWfcX24642GW7aNyThtWciGjaMjAWaMfdJMYBmYbfxyzErFojfB5SV",
  "key20": "44hidsMfzuBchADdL6VbWZAVe1s5GRGZ4crLTW8m8SzoiSvNB2RY33hhcPm9xFqfUDDXJi5EgM749L1TT6UhSS1C",
  "key21": "Q6pUEDzbKxt5cbR3msEhD4GsJH9cdeXr432RomHyhdQQrs3PMrVxzeoe6itW4JGTobDsYEXLsVZPENJLJSduqgB",
  "key22": "4Hxcfk9mmqFZXtkiqfr9K9qr5vKUVL866ELucS1eBS9UQdDbw29DRBQxhkpFL59cev6HtfcvvfXPrRWaBmzhXmgZ",
  "key23": "2XjEBdkB86K7p2gwQCrcWWwE5Mp9geZ2QjnN5NmDAghy8uL6CmgjprtR79M9UsRPDyHfDjAg2AtNP6SExDHJBUPQ",
  "key24": "fwmptX2tiwDQNnDkHJUfXBQc5rnQvsTKFkvrByGK1LRc52pdevZDwk444YZVn9ppGRKDEgrCCupybatfo5iGBh3",
  "key25": "YTC5pRXSFp9R1Arcahcd6wb2jijCYHjLKXPAjqeCfACCVjR42SoxpnksBeJRWo1kF3qJ4yFhJDsbx7ACgjXYGqy",
  "key26": "2MpRGdPCNVTC4sNHqJpAi1WvRPs8bMPcHksbgKJhWxVWPSwyB8373uuBaWqgVxiyvk4zcAbgn5ErvoaQsfkaxseR",
  "key27": "21dAhSz45U4DjeWtBj2URiYWJ9uWCctAcG4rAUS8cZGNG4hJnhz4G6MmGT5u462eyiX5izY2SGhGsuNnXNRfeo47",
  "key28": "2ro2TDoHFmAFe3X7JR7piaKrT4FuRZbf2i8brjr8xHnkUuXnw5RhFrtrPnY2F9cje5TWdDeKBe6G9UnfQkYDUQ61",
  "key29": "4VHtWGrbAvXRp6yoACfC8PQ69UZKbtbG8G8fvdfvxtVc9KyJQEYxCubKUVsEGEgemmXYUTuxPomTQk3m8H6JEivm",
  "key30": "2JVtEX9ottosvQ3xq8dVYGWWzwa9PnhWTrbqXm4V5tBoVnBRmdrLbNAq2eDSFSm1UsUJgo2zMMekRQCYT5abL77i",
  "key31": "nQGKev8KCyvdd9aCwdX6v6GFqB6MXDpgMSZtQE2EnRcL39gKjaqNPCvzpRqwGraRPkaKzkPtgqx7wFzkXSNB9Lr",
  "key32": "5D43FNsvSt3k5rtyjo6TeeUFTC8C19MHMqnCm1BQCzmKTXsk8NSKKijo6nm2CFbWpkt3A7sxmUYLwP1ffvsuZtqj",
  "key33": "2Ck5UbHMHzg76VmxZFJsu1gpFNKJuwkezAwR5egcZjjdwS2Q1L4NEYpFyrFfTUxmLvVJSwS4sc9Eem76Up8Uds9Y",
  "key34": "2NBjQrov7D72Gzh5ib7iCXmZ5djEABPQ7kSKc3bhSKuTHhFfniiuhMtMSCNWLUJDN1bKNyFTSZtViiKoM3y45x8p",
  "key35": "21ouXU7ajXkwmYFcGEQ5SUdwNBPGEyWXoVb7KLWyYAeYwq3NNJDqyDoWa7mbsidLgc9qTGtjBxp4c3YZQ33Enyzt",
  "key36": "312enoS8ZPsNL5yjNEedmtME2QGZ4uBseDADuwQzgQ6vYiFCmWRg25jVomDdqRFVtpCbzWz38zL4LvchofZNafBy",
  "key37": "44UxyyMLJpeRRQFRNhzzZyZDiBEQjDFMPgSyWDtzAweYr6M3QvqLs1mRf11326RgvCSEY9E498Q7o3kYndP2dEdn",
  "key38": "Z6EehBTupJbSh55XK1f6egscQtrnmKxEpW2eJBxFLkcdPqCrinChBAZCq1jmSPt5dQBVHaMhqj9AuSQ4kKxUyev",
  "key39": "2AgBAY9SKcTFQccRfxi1CjKtE5fn8KbZYSSfDFCpSU9Pp2GKk1MCeUPJgvuL7ZVBLkJJBQFCWX3mfXKNaXM6obwH",
  "key40": "22rYtRyC2QVDB4ytVRoVMvpkfRvTFcY843RYqWFQg3EPsryaPBqRt9bKtMxF35WPuFesDr61krxQcvswvTgXNWMC",
  "key41": "3RgZUp2JjwL4ttaZtZ75w4wJzRo7vr98GVNijFYGbuxqKMVGhV4xGQ5sg9L4ZkTUMrnK7omKPprWmmNy7sUZDY2W",
  "key42": "2ZyycnzvrLsSht3CsHaFKJQJvqVawpfVxK6bqf5vsLKBvTwP1Qy1inXc3QAyRx9DYMoEEmVrWonSDkGoMLq7bFvk",
  "key43": "37pCwF28VbNcpX9MnMQzhEqTqSBszeYDAtdsWVWUu6JWxagGFnu344aB5NLKbvCpHYm3obr6hpZiWDKNifewf6Xy",
  "key44": "2NqNNJD5GDcf1QJcFvUYiTEL65UfHv7Xt7znPg3sULoKDgWLbrPCSTjSeRhUoysPuXEW7QzVTamiHCWj3an9KW5B",
  "key45": "WC6Ew658SAfYP1ugSxD9S3RZwzjKSjgnhQPrdreJnnz1dGqzRzC44MhHUwNLqbMv7kYi32TTLaWEpw7f2Ni9hAC",
  "key46": "3fwwcJy5muo24n1kfRKdScf1GZ5BtqA3Y5XLmDv5AUCknGeFddSk237zMPYBWttaMfHQ7rVipcjChDNKUVsbeEq5"
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
