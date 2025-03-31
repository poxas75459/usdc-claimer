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
    "oTa22yVZ8EybtgBGWoRbDuX86cJHCTfQq8yQsCofMVEMnhbgQpDxfGaYMpAR7g4Ae1ZxjGrucCeaQ1v64FDUg6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5unZqLcR3sAckdpH9s5sLpbtCMtdi4oixAXS3xi9seRRwJDWVSFj6xbA1st8WiN4ZCWzqLtLRQi4eFNgTuuNQkSA",
  "key1": "4JJXzGEgJr94MxbFPnhB9iLu42votHePt2x3YLAZAdcXTsHmRqm3RBzNHweefpYEe45LZtzZSmFHbZB4a9pkD33Y",
  "key2": "3BhfypCkwWY4NsDz1kbBJFPWL6nxww4EwgbQXkCSgracNNCWTVRw2vLLKAHZYoc2Brdrama64GXh8hgSa8BRbgsm",
  "key3": "3abuFTSevJhRkur1FS177Z7CFuKfH5QPGBWMeFM514cqhikSi5FmHXB57L7Deg5QudGPEkUYLvY1S5js97ajYnxF",
  "key4": "3xinBuFb1JwmLtkLRwKsmboKTvCEC5DNeGV14h2fudXS9obgPsCT3xpxbKuTcLDDF454XpCUGAuBbNRTuBwWHWnw",
  "key5": "QVJf1w5WddmcK8gMpwbpo9grBHaQcz65WFjyunZdEBZBDWp2xKMb1LLs4x8gduxQrLVaRfr5dNETZevyvFU65Lf",
  "key6": "3kTaKG839znPwCRiLSrK18R57DJn6szCK2ZYfFB7F2QCMmtPPS2eV4uEYBjZ2otvfYRGzjL3Xxm1mLfZkEMbTMSA",
  "key7": "3zn8npeAc2WKHdo92mtGbu4xLquErA3ZCveV1cCLpXJCSM4GDXRAidHni5yMg15qCnhaHtSpmPsD3hdMKZNi3wke",
  "key8": "2iydUSbW7x5tvedNyR6nS9aUhwvhQA53qznbNH5XWWNo38XTFDzmNubbKqVxtfP2SsgAHdBxwrGqJw9XUk6HM1b5",
  "key9": "2uuGCS4zy6FGA2YZaXZ9icSFfXEieuTqs1qzJEHH7DBD6mK4umYeYY4vD8qLCQpCZEhG3qqLakprxazXH8XWvEqh",
  "key10": "4CbWtJg5eMi4oqxoi1GqcF7hwutrhEWukSA5uC3UuSso5uuzFGgz33Et3xFVTVxdmePEVBDp1nNFnKNsninKc43z",
  "key11": "45KVfQ3WyC7PGwXzKvwWgrPnrUUhXr8o32eHwpd1UmDRuRbfr878Ndq5JBWMWLKaKfUvQRNomJGtHbHtosB7k9xJ",
  "key12": "5GWmbWekv1g1wGVnpwHfkr6Rbwmo7tyXwkS2yaXP13vsTuxGwXJSfWpMmztEckb9K2r66bj7vZ18AZojEUkVdanT",
  "key13": "3HKVabhqng8v7R5A4at3aS1q7duxqKdQW1Uz9A8XbGiqZsCqtSpNGocSMTvwxyvFereAGSa7dQFcFpoMKY5ZXey9",
  "key14": "2P7ZzD88tqGz1TcRxWuh2vLVd57joyh2Q7FJ8yAb1FKD5cpHPa1rXmZ9Xovbogmfcd3YfMH2DaRpBsLyMJrTpAY9",
  "key15": "4ukebkYYyEMcqT1ax4GEgKkJG2aVzvNJc6czEgSpuJ4sTUEKHUA9VraJJmeerVbxgHZncnjJCPpzrQcFsJ7c9JxP",
  "key16": "5v2mvaqDgXF5Azka4BE1XAeT62dYTiaeAHGSRndYLQ3sWQTBWoqPyfpzmyax4D8Bid2y8zeiZnjweAFMaYLRreGh",
  "key17": "38tnzsUCtWXomipzPAVgJqiQcQDLfK7E5ntuG3d483VhUySXiRjWHeRhMrY8Xg9aiHXQdgU1RjUmgzAUq9cDkkUb",
  "key18": "5eCSHTNW8XJwJW5CQG21yKHgRT44BshWnAENTNKQD485p2ZriU5pB5jij3pbFtMnDamvnCDg3R3evt8Q65gJkZ1K",
  "key19": "5drGg9eWghGDrGtoZLCzbnrXHeoAEupN7tDpoAAhfVWUFiais5gFGTTu4ZM9h2PA7jkVvMqRqkdP8twUpmdxPUVh",
  "key20": "D2hhrBNQGZdSdhnjEnG5NTKihocrpfRthTFXo2HUMLmCcXroPr5r16Zd3vuog1ukx6mQkFeBSuhq6cKKdtarVKc",
  "key21": "5UESdgR3mLP8ZBSypVztNuiKZ6xwyNPj135w3wP6gRyrEGRxvUxBFQLKAmSAgHvsevUNQ4QwehbG1yvY7odYtwjK",
  "key22": "8dmFVhYVdkJf8BpfHq2NeuoS3Vo3eLXExoKQx6LtJz8KpzZr8nT7jtoYZXNq1sH6PmWaofsRqfk9DPByeSdaJxg",
  "key23": "5K958RA8vBw1rna2z1PSk3Z2ogkuTA2u1cytyiDNrgMmii1mJSri22L3Nft3ZcYrhyVWBMLffQgQfcigYNptar3o",
  "key24": "2QBsr7XG3rZrGLY9JQUBngrJxiNGFUyearXJK86si5ro5vukuU8TRzpVYzkTmtx85Sc2X85zkJpPoissjifbXWnB",
  "key25": "31cgoHsVVVfia1Yd9PoU9GBmJUAfwWjqiSPYdBVZazd6UYzxG5NH8UjchYYfQUMcSxmgTLc7XchFq4x5e6iKMmo6",
  "key26": "3gEnsdCiDwdfTJJK81UYQQx6oFnvxqzPhNbmrCJ6MS5REcb5YhHgKeFicX8e2HZ7w62Z8VQL5YoAaXKeTRrqLGcg",
  "key27": "38RopzWsX2UtuWn3shwVuGUEWXQnoSu11YZMBb4wQ3gEaSHuQbNmA6C91BQiVi5aRqNSiRedFiBEK9AThQv9443H",
  "key28": "37ZLsmjPkDhrn3yq9YBWT5tgS4yd5Hjoyx79x3CHp25D7FxuiTCTYjAWhAchuuKbRsnnzTkgthkMomRzdRi84xz",
  "key29": "58NXPJRonphSwKMSFAkJsEJ5kPKsPsgrU5ZKLErsfc64Q3LiAY81kowcCgNu1CqtZ5rGMD1V5KAwsugE6QACRHJD",
  "key30": "56g2ictMVkNjeCX9LnqUZFtapdYdXbXVdP23KUFmsc2FizViDHST2t3SriLzJY8koS6V3KCVvVQuLtsCM9xTzqvL",
  "key31": "4gkknUQxrn9qVojQjyWmm6sYmuhe2KCUUqcifnmjVA3uD3wzfgv1Pb5p3cfE9Z74wCqaeC3LYPxjmV1xKbYM2rJ2"
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
