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
    "A8sg4p3f3VhoGRCdp7UT86kjoZYWTguXGAS2vK9e6MHVR1UpazfA2eqAegSchWaAqoFUm5zhUmBjp3jDHcU37u7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65pa5g3qi9fJG8BEq1tHxYRcgMrvV2jRoTHyTJQXqc6qemGv5HWeEYAinRzqNKW615jDActArVNh4tmETVVeQeaL",
  "key1": "3EAtnmtVkSjqL3KKsB9rGhKQw3ZLyGcSwcc3E5dtSTV4VzSmDtxMuf9XpuZwgqpJgs1yaj2hoUrG7uwobkecVPNX",
  "key2": "k31Th5w5w1oBdULyaFpzXgc3Hvaf74JyC2eaE2wWSEjmipw4HXAFxe3za7LS9hzcK2VLwj7bV5QggiEQf58AEky",
  "key3": "5DDYJFPTUoVdrhTjjsrNRyL2xh5HmUcXew41GVGLDNg2cA3wrcQVXDnUUaJVgh65CJipTMVQuDTC4Z73RzcwP5b",
  "key4": "3rhCDRJumjsCSfNPwEjQZJoXyg2yHPgdPtiwxNL1GYnC52ETVZxFo3wbksi4MDxjTU1jsycvveE1Ss6WQkERTTEG",
  "key5": "4BYMZmA7QZYF4K6jPUkZK6ekJrUvpHfjiqmHty4n1bEfuo2C24BG4gSi5UZnjYSuM9NHPVDm3f94p4mwtCUrffYj",
  "key6": "t4dFV2XWApExc6MJYQQ9C2Mfw6fjDXCj2tfKw1SvNGQTYCnAHrqd1vvETaZ8nHDS8BGSxy22F3Bm3VdoBbB4y2h",
  "key7": "zQ9NEG76LgGsSz8owXRk8mazJnXYGcT7kCgqqUswFvohZ8F8rv22GBpvqZaimEvYL5GzWSjpZatDvT2BXx7Dxsz",
  "key8": "3GFX3qbiXXrBFYqj8Sm7kjdKEh6pyZzjTE2Kw2rKWVfJXDV8PuWcZC4H5K8jBaW6gYm7zZQQagMtQfRjXaGiuiCz",
  "key9": "6275wKgpiLHyTpUSPv58SxQ4x21z1jo4dy7hUcbVjazavNyDHDKiStfkPJH7burBJHDS4fePScmwpkxk2BLaRpLn",
  "key10": "5Bh3sGrXz2yCXR76rcrMUnF2PoH45vT1twoLfsianCwtDruB3JaUgyAojdMS4VpXHf6Kr61cdVKjxqUi82fA3RBL",
  "key11": "2Z3SFjhfMMomwokRTsJM9nUyy9WLVnrSHDTsMmmwbQXEvFwqeH9nXVhW6z329oPHpwXWUfkZ8GukQmp7sVLmmStB",
  "key12": "4fCQrP8qzWHjJFpMVL5ugbKtsre4vQrv6iu3VPUkyZ8RgzvSszkEmr8PebUNYTT1CpKZ4Vqy4B4mxDV4M18pe3aY",
  "key13": "3o2ViE53kHhpL2nKfEcN34vJ82dBc6nRkbqQLGN1Q9bDVPSdg4YcCGWXZiMNVCgd7fpoF9YFQGZeS4vD2SEWgJir",
  "key14": "4wwsuaXYAARpzKHJbXPZrw6b8SNKwJQpWwmXZU52kM1F7LdQVfGVJmSda8wEptbeDeMCMaXxxhonUWCEebijzahW",
  "key15": "2oov56g1pXvEHyLmE28BCkFtMaiJWgTFCXTgKaS1PpLuqpxFA1wgBnyUx8MTjeqJTnobkTfaFRRfYJpF5KphSCJf",
  "key16": "5sRAuHhMrXw7TCz7K3sfpjTMGpxoGvfD7Eb8JLjANgSVSAqVDafwMciXn3smVKFZzcoMJLN4rbnxZh223UrERe9A",
  "key17": "25c8f52TDqkUnthYZ7fSJHDAnqaroU38fEuE4EkRFznHnKmWhW4RtFvXP7r3ZscynL5SrvK3Y95xe9Ui6XLiJBXc",
  "key18": "2Cx8LGU915P2boVuR8aAf8F7vVVbqnsxWvE7iGt2fVLnZg4UqkznxoMHopjMvAon1eRuE9tHUf53AteL8DS7vJEZ",
  "key19": "2JbngpxcFjvAX7gTrXk41uB1BPUjXDDjqjp9ZiYCBgLvHQVteAS6W1EpWX3Vvb7g6RG6pJVieuRC58Vo8wc3xBk7",
  "key20": "1Krzrbwu75pbnkpwJb72i7h4VrD4M5GHoXi26cCJgTos8RnoJzMJqNm7pgWnwQfQXoJt9msG2gWoMtKs31VKtEX",
  "key21": "3g4gWUZggCCxaavyCoR2fvguArw4c8Jv5QgRtj6yKaE4aKy2NqnBLccVGvTLcwBAMF7QWXz19DwVMrNazcX4Y63d",
  "key22": "Txu6GLcVYf3H9vrsGr1RBH4sxDTC7QeWuHNisP4PjavAwtKnuGuU8Yucn33eTGE7hex2joTWJUjiGd2cigcSxKk",
  "key23": "3WHGJ6B5n2XUpCkeMJdiLdcEajqcvPrHY5P9CqeMKD1uT1oPFj889a9LdnncQBKnjNRvkdifZzyjY7BPJBE3B8e1",
  "key24": "4uCjoRiVzKXNPFHFCfDP7Zggkf46BHgMZuXoGPwhn3g7kfVdWPzaefEucpUCFqyzLhkViK2DeD6vhEmwXHxDreZ3",
  "key25": "GwS7v5cNi446NMAAMSFXcip3rA1uRkVrLd6gKuJCVueAx1xvwnjfEUe4CDk5GyzKb2JedYQHBiePRzjFes9ECc7",
  "key26": "2iLEJJJGLT1wPiv6uYAZbfnj5LwsN4cqUavU8mSvMR15eyDLEB7ijtDdNH2Kgqxzj6FcvCt1yWgZKrhvCS8g6cxR",
  "key27": "66QUBoH4vN4QX7CKHhQiuoUr2bf5uSWkTffLJ86JcBYNV6pi5otLZqGsdGWtNJJXA3yFhG4xyJGCwpqtGYgNvfkL",
  "key28": "5gjPS595UVtzSZ9PGPZoWhwtcgHYqzU8MhdqD2N7UHhu8RGKQWiCSRjuuNRXbNNpidazTiGwLkKfkdo94nNYtMbK",
  "key29": "39uZBZ2QPuf8ohbv8FobM1XPMWAowCTErbpyxa6xJ6PM54LNfXtLQs8ngiY3zLUwKNYbDDRuw36LKF142BH35S1s",
  "key30": "2triFvq9qoTus8i84ryy5d9brbxd94c5FYAGTLaTDq8U9dUksk33fRM6RGoL99xRCVAtGvxNGCNovDHxB49uNDcA",
  "key31": "4ZJnMzuYCiBXcy4jFDXTXPLBxorBDyUHffbpK56FCZhWjNTWcdx85gtzv5MC5ei6TJQ3yKtNwr3Q5RqPVDSKcDNu",
  "key32": "3YYFukDca3LumUPBp8inRynZJG6inHPLWyimdFGMYLr8kxfowADcopW5e1gatxZohTGddD4itwKKBABYafmMV5Lx",
  "key33": "4kYr7JuQr9aaKMzxLjXVFpqFFf5waKksTRNE4rDbHL4vEQmH7R2hZPxBqo9JXfm1r8UsmZsihJCpg56ETDECzZsv",
  "key34": "5AbbpN57NW4ZCZ4b3DW4ofGMEbjs8CFhv7dPDU6b9AamK68EuJcNk4E9kJGMs2PLanWjGEo5HBK88urFEVFqBTyu",
  "key35": "4spaj6Agi6r8hpV7QhRGMYvsJeJtLT1NAyhYM3bqivaGB8ZvPrAYLCFxRssYWyPoxoypX7ukQmNhCw2xXWMbnqoZ"
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
