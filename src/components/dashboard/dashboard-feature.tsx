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
    "2uVdz2iS5ye17wSLkCXMFFTyqNBZPv6YMeBsUs6xo27oMP9bwfAyEmBNBfFTwwyZMXE44mUwKxSFTUk3oVrf4jY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C2f53akjfTdoHaBRi7hX84FWrkvZcnNN91VVowuraGNttKEERga6YBoupvdhJ2egNwQt7HUmSD7Quwym8Waqsc6",
  "key1": "5wpARtrmhGGJFbbNotAriW7dMYYVmMq1PKpUUEC5rWUMR38RjFj7UXesV3DaUYmFzpRsrLgTvq2GvfdBtkubvStG",
  "key2": "4hKZQ6CDwdn5uujsmbfVhoGFRismQVpn4FEheW9kb8ets7QEc2Mf7eFqdmqxMjDKheN6Ym2wo224g3ya2JtpUh8E",
  "key3": "5LJ4NGcWf6cySs6Wprf1wSuNczfw1xPcVTQ7nVmuAikBSERetEghVJdA5HumvbAWqYL7PmihLzYEzMG5y3ZPEm6S",
  "key4": "5qdzfvffzZMp8VA8528KCiBNFJLVMDojt4JYmkcX2kzfn3B2xXHc57rd9WckACgYb44PcefgGLnTJkULJms59B1m",
  "key5": "3SCAUhQTfW6vTL1RRnLF9275dpBMwGgyEmjfFmPaLkkJVhJRTNyc13MknpxP7QEp1L8SxYvDjy2yBsuBnmBPkzDd",
  "key6": "4YmZw74TEsCQLi8VJr1bT4U4MPNr3XFiAcu7RGwxnTvLdw8nKo5ypw9n8a6KWykRsFonZPCG8E8Fz1s3wRSRhWXs",
  "key7": "xAGSjz13DpMpBmxErinKWhGXPNbuaLHa4P6ifCNdmEngK6NgNTHcQwJEgtzd3utVBwtggr4AKmnMGTNTjsTTkto",
  "key8": "jfpd72fmTiS8HiTSzGqBq6W2hDwGD7TTK8VEMBe8xrhm3tnCoWR22ZA4MXQZW3aLhKYwYoEqjVFrotiHSFdgtP4",
  "key9": "2LSQMqWuQs92QCyNMFmojuCWxVLFtVZE4bZa4bduZWJ4hGDhFpVHGCLofcY1iFHKBosKUCxg4HTWh9DGjg6q4x1v",
  "key10": "3DHYtGfvgHeGotzgdSJmXKKJ29yxnpc7V6aD3W13pviFL4ZNxJGD67Rkk2n8NargFT1D78qM4voUjAgqDr9CKmNy",
  "key11": "nKDfmUKy4RPEg6FKxWY2En58ZwuTsNR2JHpCBLFAUW4J2SvdYgWZZSxSadTyfSXbCQWt6fxKg7ZTpWj38D7HnDC",
  "key12": "3gnWy8mA1UfWBB6JqYtGqvsNNa8jKM4VogGoEjWLDLC2cK8kn1jeri7Eu2AusHC4Qp1jrDrPpsNhDHBx6EH9X2dE",
  "key13": "K9zRbRiXmaEqTde6Xnnq5ZEz2yLp9DoYKMLfNoRNe1p3xoUBbXAYX8ggLWtMyrC1EsspJ5W6pjymr648nu1kztY",
  "key14": "6vDh7cvmESTPTTdzFw9pxFWvAG6x13Ui8kdhUwfzz3DqVcW1UvB1GCN5AtwooydgJASDmswZkZYC9gA4V1jFb9u",
  "key15": "3eZJ2GqbaEyWASoVzirTotzEfCHRnr7HE2NSxCpDhzDSG9K1PKZ42P8MfkLZJvkbZRTuGW6qc2C7dUawwQ3zFZv7",
  "key16": "FY3QTFm8hUZNNJCFqG2VRDYeD9fPToHqJuS27vf1xML432g8tTZmRc2MJ76eHJQiZS4d3RWmY8wd5fZmLyGyyg6",
  "key17": "2N4qLAVBjKQ3VTwayxpPbrUnn2ieTrZHq5pfrmUMaK7n94pKeuZ1v37Gw6tJH1sQLFV6vCbxiitJNHfVRkg4KKFL",
  "key18": "3WGbe92Fk6LYva7ZresVqoW9QzBoS5sazwzJRq77qeSmjkn4ydPsabxVZc4jHQLgYnhg8HG24APMYfzWinttFHmW",
  "key19": "5sQkLDWerzDhcfDVNphmKeiFhpNoQdFRx8tdzJwhwjDDQCpeo3EuXZm5cmBVMQKgzwe3HArbQYhqkD3ZFjKP44X4",
  "key20": "D3fhTyBTtBEpCn4u3yLW33wEGsUnNP6ARXx9Zt8acqaPXzytHjbqrZdf7F2p4wGvJMrXBv1ayPHSzBgqq29YF4W",
  "key21": "J2BYGW13XmJGxY2JRWTGKEC5nw9hiYPTbg7dAr4sESKPouFfnZNbx6iVNJ8bMTNtuQs4rn3TTfzNKkUiUu5hZox",
  "key22": "48Gkjq3ME7XjXpM9XtJqGMLSEDojKjJTNZhor8Wh7F8yxoaUJW8vijcEYA8XgKYg9nXWZ8wwvZTKt5JLPajXjAPw",
  "key23": "2BMqBrTHH2k6K5EbALGLjcex3PfGqnfN8p9Bg3cTqDX2fma6ULoRY6rBDb86Y8C9y6sMnUMVKarjW1PpGaEQtgCc",
  "key24": "4br78Ej4JykLU7PzCykhTaPQSgErcVQSoWLn2e29ZMW8L8bZqZACLz2yCVDBjWYAvQJVuxMr81x8ALwmvtoQNt1Z",
  "key25": "46th5WjoLSJLuxDQeqBdgurECWusfTDjQjm9qFn3qiBZxDBstkd8UQno9wxnD8a3n2kXuwvPAo9PTbgtjug1FepV",
  "key26": "5HPkH2knYoYKS9nMH8wLSw4ovxtHSBNmb3SPaD2f3fsmSAzFibwVahTgFrwLhtRrPDjn9H6rZ8XAbzcxZubq6tyS",
  "key27": "44H7u9izmtv9tDBHv1wbj1JFRcwaPJW9BBXq3W8RNqZUf6a9voVTKmQEEiQy3mtUssY4iVGE1TBMbWFqBkChg6Dk",
  "key28": "5bvVN7gfPGRsr8BUfAkuYMdoB5FiiTo3NQQFXQmFhQ4NrF3kjoWFN6VCRoY8LUD4MQexeRX2MkUfFkd7QENwTmF9",
  "key29": "2Piq9EmUmV527nCghFTHTYRuopW4ScCVPPGvGJwJwwqCFaruKWvUd6PsgedSKB1SS1yecLQXq1Yk4EABU9ukdqSs",
  "key30": "2PnPVw8eBq2DenWDmVyVLq1ZnHR4SmgSRk3KMBRUHB7DpSwCu9G65Q6mP65X9ZkADuXuj1fkhpnQbatMeruGJaju",
  "key31": "4izwawFJqLue9SGmUcnDPZS3pPejyonHFgJQv9oo2e3hYb6bmjVMr9wCPFeaxe8qYXa894Z5USZrPFp9u8765QuH",
  "key32": "65BkyTS4yN53GCbymj3ui5fZ2RUog9wT7a3hWGh6QFoZj9PZAQB3CYcqgjRa22zXjTDfTP77NLJiDncJjNGWjZNV",
  "key33": "47XikrudWrmakRC8sgVYkXfFJTZozsorkiiFBRKrzofYpsW6mtNF55YUGdsVwMwachJt2jZThEmoSnZPF2hB2w6D",
  "key34": "3irkyeiusyCXfEaKPgdFiChQJPguL9m6CZFb3XEW1drw6KUTEmFie7hd5QiFTjMV2ypnL2aWBhzAJgnChz5dorPR",
  "key35": "3GwCytdqf98nAD8BgqvvZQV5Lcoa7FZUHuPEzxn3WfmygUvNBXAEGBMxRE5x73mUU3MxHTTLDLMqaZsWFWGxkiED",
  "key36": "24oEwV2XoDwLJpRc5RCKHfccgFUp9GGiLGZxVF8owHKHm89BQh3wEaE9JQwEW6RutC7poxF36JyMHrjfBLq9PByY",
  "key37": "2APoXQP15h2LLXpw3asvGa48PSeHpYnXTDdcmu3xbQWV54AMRqtM4xSrsPvuhc8YrP6JhdEP5zgY2kurDcVH9vwR",
  "key38": "5HSSH7LuwYU9kMfzQUWrfSBWnn6diWYUQzGGCW9wJNvX4Je9Q83xPTeneoYRkxqWxkunktcLnQvrASTkFAhq2QLB",
  "key39": "5MK9xLjeFbMwRSnct9M1VjYrvAz1j7U5vYtfafPi56LNH6XZYpQkDiWytA63FxMwgwxPUdU9jFNPJLdCiHZ1j3xQ",
  "key40": "2Bqqqyg95pzHXQnNZEt6UMGF5CqsxukQ57EqxP8zoY4x6VUhPSyGXa5jRtMykc7zU5djTh7gUaYgmYDPtRhjCZxb",
  "key41": "3UctmrFsuXLRvJpe3eoxF4y8hJ2NaqUFUkCPnJ6BXM3hHfmHtCdmda5vnKJ1ogo4yoGf6feqz42tsRyfZGc4F3kX"
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
