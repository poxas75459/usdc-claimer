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
    "5KF3Awm79KhK5qmNkfYzExf4u3wXw62mKuHdGxkUw77kPkt3fEBumHGq9eLaYrmvCFRSzxqmiQ8L3PHGRhiFZtmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dUNnHGkGfzN7kusv6WCCrx4V5v7WhbwiwN6ZvLjTss6ReaTY3mjKe67HsHS1zFY1KndbMcqFxMQVcsPm7GXNbBf",
  "key1": "672PqiBEDRXPeV2cM2upLvNwJ1FhWdJREAKK2MdsLhgN2eAPmh7Q7dBdbqVyASaNddRniXqhZfXMJMzxMJn5v9V7",
  "key2": "5DxBotB35fa7g4ZuguyP4jcPXixEAFpTN6rD5e7VSZTdpmjZ5HW4R8UoNuR2aga8rQRbyBafcmVPkbu5TKJ43YSb",
  "key3": "3PE5ApuKdsTi2KdzTwSeyPfprNfcu7bCQVXwzLhfZrszwVim7w21RJoJBt8MMSdugM3Z6dsNkZgL2oKPBWCVwZGx",
  "key4": "4xDYt5bQZd9XCXTUUWMSx4wxg9jSf4BvBxiqnMykEfSaujasccKAU2gXJCcJy37y2z7qHgiCjfJQVTnx48RvKaWX",
  "key5": "5u8qoRYSiU2Ni8gZwWJc1wqpiH1tGpFmJJ9csng7H3MCc2yiwR8dKiGgauqAS5SVS312t4ckqxTr2KxNyJaHDRRN",
  "key6": "3LJR52Ky8oc7HEqbC5RJVenKsLN584MgSxo1WonD8DZxaYsskzQtgSfvEriqf8Pnu9LTaAGyx7yppZAFkpdnxDde",
  "key7": "2o8xCyKZpiFH6s2Yg6QW1JFhDNtuo7Ab9Ktj33TAMZpp7mFDAbTVZ8ardDGK3ezd4AKNfED9QYGbyYQXYHhsWF6V",
  "key8": "33hkKEd7AiCokkw4TrXKsvQeVYEm1GguNDWYCUJ2VcVMJ85Sk2bVRh3WTdunZyfmsVADE5tMc6cCJeb38LFU2nVx",
  "key9": "2moVXeeinioZJfqncVf89ECcazEcfk97ytUnMjxDHu71kfeiDNqciRdyw9VHr55jgpA8rqk9rfMooD1einNfd4qi",
  "key10": "2VoHN9dBmdKNxJvwDXgmAAg6HGX2oJvitZ9pqhiqLD97g7CDE3UfGd7iKQUAcNwiEdW6q2N6vDk9Zt4Ndvs5kQk",
  "key11": "5jkF2sGNN5rqDUrxx5bRLthzy6Gkvw6M2ZnZS3ByfCqke32RFXZZ7KGNRcnHUs7gVU9ZigMeEXW6FgnfbEmoNyoA",
  "key12": "NEwW7SaoAbARECNRFHuYsKTaZT9zP8x9DVKfAfnDuo5LQyFk2npS196b54yJ2WvUqvriTGrG9ujv4YjsAf81Mdn",
  "key13": "2AKG5ZXbAxVKnLDN7f8M5qEF8D5EBi76Eb6s93zn7goTsfFrB3ZAmgBRUTp7TVTwr9SQ2LeQRg8V9U1Kwt4VvNx",
  "key14": "3v3Q6LWcqfDgYnFasJ5d7pHhoFfdMauMZSLZzL6Kg4gYxGPFnEkSqJ7UkQEKmUXpMVchG12DkDf5km9APKnTNjCs",
  "key15": "uHjPZRuoEnhDjXtNFnm8i2VhZc5rCD5t8LyQuAg2XgyKW2mTodH1bPcibqKMhsVuHqmnYasRxCusBae1rJvJ19J",
  "key16": "KMimBdj9qm2bwGQmHuhNKPtAuVboG553QNx89v412CZ66zrrGZYWS1qG1omfryLVm2MSebKwGAWQgCCN2p944Rq",
  "key17": "3etG8x2dnEd4N99aC81sgWgjeNhXzqUj5gXBPkDnBpS5mWgaQuEpF3amXrwHtYEudVFYrwChgqjgupgvJRNYrS4Q",
  "key18": "5aXTPjSXqn7KUNgkU483MiwMqS2GNpo3NPaPVqSnLSZw3ycahy1EREjZnhAHhDdwEDT15SADDVqcxvY47pP5w2RA",
  "key19": "4YsrTB7t6c53oJCGBLjFUX8sfEWVWMs4Yo93Go36XyQPLtTF7s51VA8tu3afMByzMk15i2KEX8g5FQFjw7R6fgiP",
  "key20": "Ts9cKMCupbVLuA5WY6ZEj37LZWtVT5PguC9fF2we6NhMxQxfjAajy6bctnnVEy4AQXbeHfcnSmhWRJYpQy9osde",
  "key21": "4CQAtGMcZQRKdg1QqaoGq56jWek1vCCfyweSgAZZokxujTU4z8BRD2mjwRgb17PRrsUAFwVadBgH33U7wkJ4gGHG",
  "key22": "3spN5NQBnbsNtkQxHZCxLsWqPiDm1HAEPMh5W25ir6eRcTps6otKdRkE9U1wdw2fQZfFjrCCaT1MNeiRdzhXXSat",
  "key23": "33xFcZTuJ8bpMz2HVRfPKgyVst4L5ZvnV4YEm6JS7Kys27xpNTGL3AFAWiJahvAR7v3pacXvWZbvvWjt3qL1zYtY",
  "key24": "3Wix6VUodrbCGA2sgPPgn6bHdDEE66Hg7Qsag2kYdqy9brdD3uEQ1LzzkGMVdk9L8QxZCZcUBu66JdRn6RbETBDG",
  "key25": "58CYkDc22hV4U4y2JBHBHHzJmQ5WjvskSdgjozVCfj6uJBqiTdeMujdYpvVGuNAApAyfRdyZMYV7knueHhFzXkmf",
  "key26": "66AfVpPDTaxPiku5QQ1uh4g2Zz5YU3DF5v5kTAqjsyuieGP81w9iYdnWCjtQMucFBVvXgUwY8wg9ebjUZD8u4yhj",
  "key27": "JiY6aFYvqnTzdFjeh3GYDVSbsctdXQGzb8zUVyCP3F1tQQckNdy6kgtVgp9RvhMkjKQiJaRXv6kQraHg8wtg94J",
  "key28": "5fqEg6JGRkMJq59SbNpTfWub4bUiTuqHq8VwJukANxT1MsB3ExW4ixCkwnMPZwq7dgvtS1nfKjvvepmVNYQNz2cM",
  "key29": "4HiwGYERVGWo6peP9zcREPiivdawZ7vhzsw4HDHTR7AbbfKThji4msCoHWtZv7Pff8JP6D2ghaEFxT1U79567b6E",
  "key30": "6DJD9EdYzF82qMP1GuXeKdCLyg1b9ANWGTcJz8fAMobaup7pT45ZXGtWkxXfbtyynhoLb6F7Erww9rrdSA7WwfB",
  "key31": "8FdN5rds1Zm7VKkfqzK4Qq3XSBurt2RH631wcrGFaVTMctFYuj1uN33ApHXmgnicwLCV6nVLGmLtoBz59Li8McP",
  "key32": "5dsVAYq62hJMmf6oBRNtbKPi7PrXyNkCfZMNJYqhM5tqyMqFTLdXUWXkseWDNmVKebqDTAwGFMoLrDk7pqAQVCnr",
  "key33": "3ChKtF8LoWM1V9Nr42BKFKh1wRWtSDL8AGyWNQYVQQAtWKBQRcj6R1Z7wuit4cim1W6CFbVrFzBRxWYPLmv21wh6",
  "key34": "41DExV9s7AXW1NXoLruQbMaZ92SS1uYwU5cEkQeGd5GejWwciSscQBJsGjwZVFQnzRb2qrWAzjBCSFG4CuVSQViT",
  "key35": "51TFQRuMZaJnkq7TTzc2Fu7wVr548GDzmitqYMuAXHsZD3QW6FzNETnh19HLXQtsC2PDgMXLH8KekfxVDzGvoHTH",
  "key36": "5hUAnBNZPEJ74bkCR8FkSKGRJadAP1iZJ5SL3EEeUxBQuVYT8fk4TfCA4PQ7hrJwzjCGrE9fwPWFDu9iYGKWzs26",
  "key37": "5EUVSXFAUKCvR3HhyX94xrpDUyQ4i6tzt4FTHp2M56PqEHacDdNutPSU1R3ZmoGodBiUtM4tJ3Bzap9fyRSHQ6Pg",
  "key38": "39oorMu1wKwsDDLse43QUidxSgCtECAgjkqbPiEa9tV7fyixFW7AoumuhdFsBuC1qJirUFpFWw9pSTzBBexxyxT8",
  "key39": "4MFSEQCn45MzX6r96SGQ7LkJRQur5baUTFkaVSPNwCVGrzVBsDonqpuuY3CbNdTNwt8Ljch5kt9XzHog2R83J6gB"
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
