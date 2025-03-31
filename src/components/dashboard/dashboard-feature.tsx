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
    "BwvkNZ19sXp4UtKBwpyZq3ZrBPPgkE7XChPAWRpqUm5U9m2H4uxhMN4zXKUutxLD2Yk946J3sAVzipbh8CBK9k1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tHWYf8UjQVPWDFxsUnwg689CPLGF7DH9ztikryvJSnLy53tCrrE8QdzGqNLsdcN88na92SpcY4d8zD2jWUg4yBM",
  "key1": "4QAWZ3e7MZLsuToUoaUeVE1Y1jjo2WSmto2ocVShMAbNBk1CJpFydstHPzQ39Qx3JXWBKDVjPocESVQn96AMKgHv",
  "key2": "5hix9pvQGZoLvRPPZpzuSV6TESpPLxBLNxuKZdwnKFTxwmSEv7su3dLDLaHvf9upqJzs76dfPV679X4nA9wDZqHU",
  "key3": "64Nw1DnfSAaADz2c7KvdaS7YvcuLMkveXRviVypAJAKubKXRvJexCX2VStrLDGNf8KRJTD8AmCuMsnhvwdCMk1v9",
  "key4": "2exu8mnXyfayYXB5MwngFwBSYUHPkc6hmu9CWGECcvXoGuFsT3JGmC1Pk2VJLU3qRhDCKMotdjj3fEP55aK4CVks",
  "key5": "5kbeuX8pJrHQQyRUWoGeCpQXPGtYpZQRLgw589etxcArdHH561gYbyQAJxLuXKjStay2GmyCtRRq4ES6K3Yk3aDg",
  "key6": "568wpKeJb8NAaQMY6n4U8fS39r7EXXwxpaRDZRtUfLYFWqCVQBLkSMUtrLk1L95uLM4wXV3CeQT16cQnFycdLko9",
  "key7": "5nVxibJKWr7DAEdpvZ8DJexa8yDRyvLqobM7MnrM75Vo1cUTYKvqvW5j7MLMwNZqskBCZbUQBSVCvMNvcy4c98PR",
  "key8": "4a5uAnbM4TyqCoHtufp9yFdFpwh3H2pXuuFRFgnvJs1CcGBST4nTgcy93JW8XntjmCiDJsZ6xqYkuExfUSjRYpgk",
  "key9": "4Vs7ireJbWTdFMnwn9gKR73hJfsWKY3jcEcWtnf7MtbcFe3DafzoXXfNsk9Emn1Ya5rc5iovhTe4abDfa5M87TZk",
  "key10": "3ji7jW7TSF7MdRGoREHy2zMVHtSmf4U1eXbMP4rF81tsem3HGrREQZTKr91eCFzFNmfEw2RnAvBnnzS28vnbb3bX",
  "key11": "5YvBE7sPdZXqM4SHTEiCxikGXsgfCmcGqYnQg7cYoJWHkLhENNy96725sFrHU6TJKphV65LKPrdHNMgbj9BKdXCx",
  "key12": "2E9pUZ1hAsq5VGNFGFwVUeMNTm94vyyGLBkvCsgiAvwfjgaqw3dixo9itB8YYz1zaTxxN97ueBbpowgA8YDGxnGi",
  "key13": "4oTTa5KCyG3Td8igmZPnWtMCVM259qfJErDyaFi8igNoheNT3mwbofQGCn9uFzwQfZEBaK2EpzVmiE68ugsB5d3q",
  "key14": "7RVkWYQHhMDbMi6Wjh9z5BampU3ygqtEBEWRvmTi2Kyhm836wUr3QbmN1wiV8dRrhtHz4Dqit78Rkhq8RPEXuFg",
  "key15": "5BoYjTh2RbE9itq3FbHV1Dy9FSgc4jox7vCUpc2N7pUxz5eWzhtAtzHp2QjvQPxxB4bE25jPK91ZBWiBgT5JFCcV",
  "key16": "2HfA7MPyQs3tCNP7NeDZeaBS6rsFrDXLmHeQVEFTRp8d5a6cgaPkUs9CXTcoPnNYAc7QFcDfiE8Sz4JiyN131r38",
  "key17": "5ZiDHBvTVWAsLDScSB8cLjHovwCjQfaQW7hVv8GUrjRUhSZxwooS8XNQTu9suySjBvoR463n8yUK6aPbV2LYxJ2G",
  "key18": "5L8ccdwVQwoWTXHnRMHJ4iMgLQTLM3xbvSPVrnq4VgdXQikjQ9v5gD7rFHHvQuuU6bpVNpRprpgmJ9dBYXPNWTEB",
  "key19": "46ttWSEA8nQCMk8prBFFsULyULpRdz9pdGW72784snA5oCkpnVUe7ZDwYiJ3NjF3Nii1abEjucp4AHiKnM3EGWbz",
  "key20": "3QKAN3P3McAHDCH3Yjp61fuGHYEbStcaYna6kiMKU1p7eFYxRHN8Tu1hvsMK2uk3V436MRvQwAEZBXWRaVYhT6B7",
  "key21": "45renmpSSm546G2z5s6ABMNDibBrSjZ4aPAUQkSG68YS38iW4PX5XNSqk6TyRxufXQWVaDZ6VCUcYiSmXW63qpw6",
  "key22": "4TL3AwaB1ybR4MWw2AVTcmLqEQtfHPrbtVoP1u76DMGkJMZEPpqeHNUdZXmd8oeuHzS1RhNpkDx4jAkjsb9M7MZf",
  "key23": "25hQ4F5MhEQbY9j2rG19ua27kaN2bLvq2i2kXLGZeHQocE6nbstZW2mditH7E1S1PwkqtuEomVUn6v7EzXDFQnjL",
  "key24": "55599kEWtRSbrS6cUmXZL2JmPXqAngm4BK2uYsvXTpX8HZSQHToSBLr57a8KEUaZMp59W5cMBt2ohigsSWkJaWAS",
  "key25": "49fWJ3n3cuH1wXNh6vfbyeHmhS5zj4t3eurVA69cmTjYTKRaPXJMy3SfMfqkPNb3GLyEqx6ymmUCNuK9NXt9rhnZ",
  "key26": "wkrrsPspqtBCUTPkhGNSK55hQbKdLW3R5UHqQXtmXxZzhVf2HfsHYdephmEmV2n6q3YgkdTuzAYaaBvLWNPfP4h",
  "key27": "3u5WoND2ts4dnC8PWPNn51WnQZHmCf3fn6n2CS3c6Q1hgx8uQDWdjqjmWgKeZ7vEAAnE83Y4LY8zCyb3TiHkeYHD",
  "key28": "2CBveH2eQoorUPpKL3aDuJXjJ5mJ55evd2Kco7P8foWasSsishrBNVz1639ajPxt7TckLaifL8VEkEWN1VnESU1U",
  "key29": "62TVc5SJHbknZMUiePzt83Bj1nenbwbgDmj27P1vQKZABXJUnZnW1C5C6LUoNK4aX2uT1tvvZHDik4CTBL7tavWn",
  "key30": "3ffRsWUcU3SsPfVabjJF9FvBXMrgko9N6YXjVvD6S6466jqa2xdrTybjxttiYR7Z8R9z6SubJPMMuwafXzkRuu4f",
  "key31": "3q9sjPDN8XwgVzFMzu3o8KGtF92J2d4FYaF47DRZ1TuGsMbyVyz4a4YqEBuUUuaedcaopGCh2mM1zrJy2RU7PU7f",
  "key32": "4VCfMAZMFRRQEmcgwd8G7n9EkECZCq9pps6rK6gGrkHE575jtwDfEBD7m7MAX8DAJ37nQjkR364ncseCx5hgC8eC"
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
