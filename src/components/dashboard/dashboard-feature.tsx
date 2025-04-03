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
    "5ZB144Sk5wVYP1wATvuX3L1sKiokSBAiPZFqNYj6WWio8Kyx4yuXG2qvtiPEhCgqC5PjrJaHzfB4uj8rJSUvvvCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z14GNVRncmYwdcCMA1cvFo3DGoXoxinALcr29omzksUhjQ2NtiRQqfz9dpoG6mT3ixfyRXUhqhsADkQRbRsEJA5",
  "key1": "3cbzEbbFA1gbrsf97FgoFF1rFhiwR9X9h7Uk6uBEqMop2pTQpoKdAZ56YJt4zA74WtKjQ63QucJwi6o6cmU1qNom",
  "key2": "3oagUnQcUcpJB3TR7vVrdJqAwHwM94tEwqW8NR1Hrgbm8Z71MStySB36vTJ4auUDYca75unrG5bMUeNEpncbvYHQ",
  "key3": "2xFhbvncFY5Mry7qrnGsZ2Z4fw8rhcnPJdMdZkB2gHjUrPW1JjhStiX4N58SfDSphroRGMHHzqYRyu5VsAhPonKg",
  "key4": "3aDmEP7jnbxB7dY96tSEKWhxTrUb1zwzDzx5b4Lou3puehzJ4HFp1czV2j9hRvT357Y9YXYogiaSBXubXRfLe7JW",
  "key5": "3xKyuqndtu21Go7AwawH5NHj7jWDYxBYoJogcyeT476qrzm1kWw72d3xh66ZuJAf3iyvYVqouevpkzresVo9eDDk",
  "key6": "Q9rAqnHt4TwhvmBjQVP8W5TGnEdufMYCLai17Ebu1bLqGP4LomeP93fA48EEZ9twU4diVfSjqWP4dB1UG7sb2xu",
  "key7": "34fTD9Tbj5Boi26iVuq3hv8Wpz4mH1kmrdH41R71ymMeoL2okxaTeYcBPdFt2mSaT4Cm1kZq5ewir25wEu8TQTPD",
  "key8": "HUFnNmy7RWHDyrdLEb8pnCy9f9wvf5HEATKUNgZ38jjNjmbVw3JdkBWQTih1TA1m5NoKBTrmsAhaLsfokaEs8VD",
  "key9": "4E4eWkV24uTwakkUKWvA2x2hoBshUmiFFBqUgbLQaENrHZ6tmKuKJrrdoq3HaFMwzsC7g3tvqXQiBLS7XLV8KwnK",
  "key10": "3JFr3uisbAwHJ9QeHA2fTUyz7XynbjSbzo1CHSV5yCmTGiNHHy4PjECzKkixYFokeUDDWhrf3PN7gKJnJiry4Je8",
  "key11": "2EbV6DWSjw8XFfYa2P4W4JMjjJTg3pH75zNsutKy4AX6ihhnaFLNcwkB96uDKadz7ZBCVBWB4wj19KzFwe8gLXbF",
  "key12": "3wtQGXsDxv4aqkwDNkLSyTB31f9vveucgaMNXPXyegypqW9T8c6JZaQ26ghA1VeeybfLapAy9cjjdmUUVihCoQwj",
  "key13": "5b3UGy4GAzszMvNQ4zCKi54fJqfQYANgq7MRwDxt25vK2z7p4s69z2HdkAuQ3M6Ca3p3nTc13Ap48qk1XjrPiszQ",
  "key14": "3kAtYqx8mygsAHSFjYEX7RePm2T4ozCWS1df31zFvuLZujmAoHzFhNneoE9YRTvrTwi9UqEcjCfqtcBCbnxApomH",
  "key15": "3o2oarG2gccvvkETmXox45JCRhNRkNuz3z8zpQ45wZXd9WCqsrKWjJSVz7NW5NAP1KoPdzPGYhkG47WJMZbpTYf2",
  "key16": "ukFpMyZCRxRmLySLiae5dbHAZUX9dDzxEwniBNmKFcMgfuxVHxPb2bb5Eon3JsrrdXMUQFn2D5b91TEXHqssR5A",
  "key17": "3R8RHpdkNv97hrMivWHP2mZ5bzwosgVwTrgmAdasVEVcbewaBV1xXeeLoaRAXiBiGqJoWjTBsJT2CZ2xFhGBYqzZ",
  "key18": "GqK1CdsjgSfg7eZZqKw1FawbEBKwn9mCRShkkyrPvwfPDm6puLc84m9qmBnMdwnFDGpV4La8ToGxtXi4NGyWdqs",
  "key19": "2Y7g3Mtf3oZ6j4S9SeXNrT4RmzrxMj3Gtco5R4fTsemUEfAfuQMyVwuhmcWkXnVn7M5b5MJpCxy7q4nYuvibYCsx",
  "key20": "2gWqAEm1yDs9UnfTQSWacN2zkmeav2Az6e8k7hkREdKkx2ZB5ANDqguKLZw8RMsXHTsv8xJg4fo4yRRwvAgpmpdS",
  "key21": "3uu8BFUjtcQSfBne2k6teaPMGJDL5HF2RBNfjmCvvMdkzqKRCPweiQMz5TuAho1h3hnBJdZsYXQ3hBNUPrbLdnV3",
  "key22": "5JCHgeVKkqD1nDd1e57VickzyWp3p5DtzCPREY7wCNENXsFjmaHnjun2KaebKjg9dZDbLE3AqKkKKA7XToDPBfBc",
  "key23": "3jTAwLu2gV222sD7c4BAuyJyVNikDzvBuPiw953SxnU3zteMjNUGQrvRjbVM6hgEqe9uPomuDWjYgP3qP5pYzPVB",
  "key24": "5gYt8QaRJJ9KayQtmzwe6NzJZbPgD5iXcH8gn6tydB6FhRhqiHpNJ4oxDC6xctGoWpxuiCJKscsiPE1vmdzLxco9",
  "key25": "4YykR43usReMMouToYteWDvtT8M2nr9awaGJ711i5NdHdBex3U5nWUdFQCPKysKLFzTQ63Ghc1MzNwEriuDY27v",
  "key26": "3pNj6uhVJCiXWyP35os3oLZStDBg5D67VpVbeKVShewQ2kmRR3nGMEfM8bgT2Cnyr59ktpnZaqQyHophZcea9Wy6",
  "key27": "5F1VLsdEfqDB2odKTUcJKk3ZMmkqPhefii7wn59oHzxZVUXf326Ms2d3DTV36AKBfHr9nyJEVPGc9t6scTD8VeHZ",
  "key28": "2i9bB5SysHu9F5r5vssMUWRDAjfbbQYF647MeTm11bYZXEHSxptfXz2MVqPEmTB3p3MVzQSSAp2kNXxAwE7TgpQT",
  "key29": "4mdaabZA8wnurzvnmFbekKVb3GNVUuAqZFs62JyCgh2GDFt3g5Bgg2SNrpgtBGs3wxTkM3vSS21RagHb22z5Vs2q",
  "key30": "5oxqa3kavrwrm1Mq2tcM7LQ1DLtbGpogx4nKhkH3v9VCWXJR54RALBFLyn3AqvMMcc1fBo8h2oRZqNDGYtJggC2D",
  "key31": "bE651xs4PKuy2xW8EsQ4dHZijawHkq7DfEP1GYchCc7JQd84DDEerEc5ubDuERhMS15wFMHD8YDcLw2kaYjS65s",
  "key32": "5C6A8qFPLUM4HghSnRmwMBM6neiWQFDXDhNupTDmNKLTDNweDv8kcby5GmDwxciSVj8sxjN5noRMS4k6ZTSdx4ij",
  "key33": "5aFvg3JwNaKqhYe225wJXqLzGuv529DQ1S6VuHshF8j2ZmNkVKSVzkK8L4nUJcSLxXnBiqC4m7HPuj5FbA3MFjpZ",
  "key34": "Dv46YRTYKRqraghGTczfU2xzFdsZsEf9cF3eioGWRjBtZAkoFNXMmGrtQ2V3tverenNgiRJ3yFrdLV38cjHtq8g",
  "key35": "UUnj5GuKXKDbpPa1nXHqthpBmt7aXcb2MRZkvdrYw4PhuJrYAeghDMGb4iXu5tTdJtug18DrJn9YvWLbAKoRnvw",
  "key36": "ybHSbW8LaqnNdFLcmv6pyHGdQ6anzyA6sgCcNyvf6trBnxGCDpU6HCajSaoBgbSZEisCn17rfUpLend3e2jZ8Ai",
  "key37": "p9uWZDpx9MWnLj328Ytg1tHtmNGLcbC5RT8zBGfYQxNTPk5a2QXqa2cAmiCZqf6CR2mYZm3L115HfCTrK75hTpS"
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
