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
    "3xnMVReDozof6BgK7GTxexgG8KUV2YCprD29yXS8qnpbvuDmyqntJmNyA28ViVwiwYEcpjWK21jT3Uz6We3W52xo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EJTooGSrwXuo16vN1Ndc6oP5kdLdxwZMjvegFKHio7QdeUmTU4c73BacRtZogxmoSx1hJtiPS6TbKsD5hhdGwL2",
  "key1": "4QbqWMu1G5EJLZK3rtTtUBRycS8QWs2yELBJccprArsb4uzTAJRCW1jR169YsQWp9Lj5C4saJD5ndyD2GBSP9D1r",
  "key2": "3Nvxsa2Dt2RHfb5or6UL4RCqkw5KrsqUDuvK1LVVgc4BSfL3hiFNtZKU4v3zskoVsbewqZdkXCF4NK3DRaXY9mwF",
  "key3": "zaSmWK2jm3MkxGBxPs5YWBdPrTkbhNrzZ7kkArYjmMWxUmZsFqUe6nUSmQB1k2dDUrZKhwZarHVxjCTkPR4Gnxt",
  "key4": "RWotonYLPiBLTyJYHCaVpmD62xATTgudpYJMHuPw3GCaWzRk6GSknYCjTnMTNC3S16ZVEWCczMqssxAuC2U6zGs",
  "key5": "Kf1Fh7kSjJjSkKn1hbDsPHmrAUDnEqqg6QBiBSmY55SpDE5hdrAZmPMiSdqhFrGbhdvDbfghE6aQLjwf8NtzqcU",
  "key6": "UGEjDUpZjE4VkZj5jezWpbUTLgVHq9HAaFh2Ercf3ymhh8ckaEgqE9imBkGT3syKh9MnK9KULwBXxXzaicyNroH",
  "key7": "2WpXRsQqhs8iqBwfrMs6u94pcWYYCSrHvySshjdEcx56H4Rt3Z7ntCQWhhfW5EaEcQ2oyec8daQhDohe3AK7dRL7",
  "key8": "5VhdQb7JydfekoS2b5GtWf6ijBFEQvSZ7oTsFMet97wZ7RmUzMxnizwdJqHrBBMJgaw5JwgvhNNHAd7k8usWBQtw",
  "key9": "5UY8kNHCzk7M39QRhYyn4x1Q3hm4sfpow4pjx4wvRxHo5N8ybN6PdtYwtFodsdQZyCPqmr4yR74abJtnuVF3E6d3",
  "key10": "3e5EP7knfkXPLLypEAxxSvtTYRf4wcHBqS2vMKz5VCR5XEz7UYvZHM23XHLqTDtdeTgoYL9WqUyiqLawtEjKb9fF",
  "key11": "3f2XpAMuwmhRYt7ULLU59Qw1QRpZLydXqKv99cy3yrdxQfYQpwLFNHS6nKYaTQ3TKvcDsD3XiMBmnycyM9CSpCDi",
  "key12": "449EUs2jM2x93m5FSXhB8VXDxat9iGxgotMAyHdW7w1HfeDJVfDdaknC7cf94LUVb4Eeho5hDRD6iPKbPFQxEstN",
  "key13": "2ap5VRmLg7kkUPtkV7Lry4aWzFkr4HroUZ7z6pt2mNT4mb57CVqNJMEAXfxkPJwcPHoZ3Koq439XmL2xAMaX2Tix",
  "key14": "3yj34sqkCPMWApYJBMvY7tQiZArcMA4LxcmG3FTQPrh9FRNz91JoEk7fTwJYiUQEtnqosS3ECvdorhSWnN1s9UQi",
  "key15": "4MrK3bhf7UkbVP6W6eMgpXQuGR4nS1jwxX5WsRYzgHRx9Hp5iutasVA2cCrVfDj4jAcLTBX7mx7o5TFp1yRWSE1U",
  "key16": "3g4AsFAnCahxa39oshZVkBUM9PciYM61Z1dKoL6GrLE5df6Cy4xeXoCKQ9HupJSwdAw688VwcBgndtVwSEy7UGJ5",
  "key17": "5GsSayeQMi3zvfY2KyT2Vbt5vdknGFUAU1rv5PCfFEvpbZukrTZ6CdfRiiqQrT37uigjyqsQNBKmeyjoA6ob9YLK",
  "key18": "3DJH4FV2PTmY4zQUQtxwccTtD8ToYy9VzpAC32EunrQXmRBRmeuzPhdf99MARrnX47PPPX9sCL9ctcCmRF4G5pzB",
  "key19": "DzbY68j2Bjh5r86qti6buasnjuDwQmY5DAukFtc2A16zHaMHbVCVac1Xa4bV7xF3MfTFgRJKbpHyVv9bCaTWnS3",
  "key20": "4BWar2W6iMZTHUnHhXB5Arrvbod9EEsZMMev9hfNqL2q4rLnHbZdyALh1AHHVeadVJYWBvseJcrnnabdDbuEhsQL",
  "key21": "F9WANQmrwAxh2J1A4ZdkQzvGnZ6uqqexMdQkXwouKbgCnc96PcJ7UX73KQuuQuZo8e3yQT3FkbBzWDN6JoJFJ4o",
  "key22": "2nHRJ6JcQDxigogcYJxoNJAJaZhxXbp4vvSYF1Fd1vuFBzEDfPLKkJxABixa3pyYmLAEeE53PWRfkrXLYzzQSixd",
  "key23": "2gDB94FbtuuspMUQu1gwgonXFqgvPFiVQM6oToYXCq1yXiVScWKGaecijyHtZd7LdeiptCJwJtTZWi1vnKygmGfk",
  "key24": "5Jhh9fVJuZg6otsXNE9ow7LA7911BgXU5XYEcGZKjDJBWrvkVvFRqEWquPaZRjisaDQ6x95UsZpn9feajcC9QwrV",
  "key25": "5kZbPqaUGeSEdudPio91EZurFKMdDyzvwo87MpzjFZEx2zUxt1rmqAygUuGRZfqx8Si2gjEMLh3TCPTNv4Wgg9BM",
  "key26": "Hci2KkfeJ9NtnPwHvZu9EeoriYctkdwAR25X1CFTxTJQKNg7nPr35Lv62Er3kc6ieB9QQm314VCsjL7dLHGtUtH",
  "key27": "624mFEWfsTBGsF8uHZiAwcsLrnD6CxLvZnWtUkJa8Fm76x8wEsheKrfG9qhB9Ph6yBDRqsmR62MdkUnQ4qwshxcd"
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
