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
    "yyJigvr2acDKW1nUtTrqMemojoZXMRTS9EaTA3TY75UtnpjxSdo1SMbFoRZxdQ1SSEjT8PuygLxKC2a4i8QRLDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pRsbvBtXRSEHNd9nBVxQHDhJFQUzpeJYdUnvC5MwFR6ZTbYEThDWeBtYEjLxHBWYHoWuNdvDVtKA6M33tpRBB6K",
  "key1": "2vQ1NuV92zTcz2YperdDHK9bnShjyntB8qKvL23UNGNf5U1pTC2Lp3DMUnpyjKEp585CbxXaAkz7EwXs27E8ffud",
  "key2": "5DppfG4DL5L5nswfiuh1oYDcsUYe3nZJv1fZABL3Jq6Xc1F2VK7xSeCkdfZLfdaCtVNfSiJRM1TF8gsm25wpqruG",
  "key3": "4hwdzBNg9vvp5mgPxPQ3E9pXm2MSitpmFSJLMU6iQhLEtR1rjBKh75FYvuhbpRVQjW2ZYAngmVqBaQy3AP4oBci3",
  "key4": "2UNWimWWRuTL3iVaBfjK2xG2qpTsfU9LyhKoY9ggyR4LHdXY4nezZuUG57exNvEvJwXSp29eb4wR5egbjFWca9Db",
  "key5": "2KDHg6H2U82gKqHraUKVZsMKadvXDEVffv1oDYYPLebqRuopwig2ZwtGRNdADcbUQ7BE7z4mGgmE2jJiTps85KPj",
  "key6": "2X7TGUQXhK2EeMip3skfJodVLR9bTG5tKAoM7xQCb8PxwMMwLsx5o6peyvHCndCwp8K4wvcbokDz2byYc4ddDXJs",
  "key7": "3FEDvJCZngJfYAm9S8BYJQ3dtc5WevCyxwqbcFH4jQkdWAyZ6jeYHerhAUSehrmm3MCY33r2rRDiFJsH5Wjfmpgz",
  "key8": "grPS6YdM7VupfSAWJGkVyqP5FCaX2odTiJrst9hmMo7jPwGXuiNqk8Yn87dN6rA5iaAyUQVTAH4h2PQkUrC9zu6",
  "key9": "3f1Naxk6QpcXq2oSBVxMysWWivoTEz1uhVzhs2iizFbYbGAXWP9px8aJEoELWWdPkKPzUVGELcLozsxA2uTXxh75",
  "key10": "3LECYGAsUcYDzKvAmk5FRFPb1swfqpDLkruWPr4bXatseuBt2DwG2Bvduu4ELd5CxLVwkTGg6HPKrx1iJvDf3aW7",
  "key11": "2tp6RXGMAvkR5XVG7Aeg5UfWsbzPQeAEzTinv2vtPTBuondTNiT69AkkdewRdFRPwky6drRCWFWVTPuywNaPNtYD",
  "key12": "4hsjG25aRx9FEU2K79gJV57k6P2JEvtFvBqHu2ERJSXFhdgGHCPeqfKjZbXDdad8CgpT658kgnjYFvBrY7QhajP1",
  "key13": "5UvPKMpRcQq2G1PUCJDcrLJkYBGMsoViHjpVL4SBS61Du9cv3NrP7xPTT2njrKLD28ktLmJZie2wkWZVJAQtmDj4",
  "key14": "2fTtNUnWUWRuPeRq4p1ZmqgJkfZjuZ4oi9vaeuTcE9EgtebEaYCdBVt3UJdxXAt7THdFth4LXdfzEFijgQ82xCnu",
  "key15": "48Dqu7ihCuNPq22Wyw5jB38wqgSEj8gu5yX2LqwV33YLGbqBr7FN5fYb12Vn9CR1CtEcNVygkhbY1FTu4seJgmw9",
  "key16": "2Tt2VpJnoK7c22t11DowMA9mKzJRFj6z7jWLMSCjRqTvuATAP3zUBiLCLxL75cEbMMdhTJqr3zsZNirbDkVJycBh",
  "key17": "5n5FsyjgVpd3ZJ4NdzwAN6seMuXPw4MCeGY5CKED23tPftCC4rM8FL4anpvKdDTybRiVe862WF8q8CsKmJQtwEJm",
  "key18": "BUC6s2ARPKg7tgBL5TKDoxzEo5rCBYMcT9o9RmCkkmBwdsFFnzfkmf71DepHUjribAsegtGmM71gpSqMQYdYKDa",
  "key19": "WmubLW6KWWRWeRsCjHBuZnjZSiTX237kmqqg3jEaEPcUUsaRcswp4QNg8PTPpHr6ommyLaKayemCBj5q5FD1XAM",
  "key20": "5jagqoVFQbcws2syfa5obgPHJRqJBnyYJoaS2o8KovJFKfVCSVM8Xq1JK3yMSzgvBLYscAZfKwDtJAPJtTzyPSG7",
  "key21": "4GjuDxruZCmAjJzFkZdRKDeUidDyNiudWYyzkStFTCtteVeL4qMfBA44EUHJNkujx9v5vHcGaUuczB9K4swK6gjC",
  "key22": "3B6JAxZXajnyUoCbJNhce7xSjcAqRwpNibcrq2zcBCCaxMuHdN7mhyMBAEjG2GuaabxkpqjkFZz6zqmiv1rH5XpW",
  "key23": "4H8wnPSfuHHDQmhURJ6PHhcqB8XdrFHLmgYqhXzQC3vCYgMntKWquaGyrcPcDqFB17Yg6SBkFnyYXs1JGuYS5zid",
  "key24": "5rHzjFe7bW68WXHe1rnMuZPwDN5ciAffTxfTF5XxpDwyAtmfijDvfaQADiS9fpPmtg747ToEg355tV2uoYKRCf4A",
  "key25": "3BgCDBQ8eG6tFkjZ7iMBScQcrZjgzviob7ZPcx5s6oxDrBrmnSnGCscqFACz3KBAD6DMyhE7k36GfuxsTLb9xifB",
  "key26": "38ejtfjLkChc4jiwkaBvk3JnDZrgSwPS5ENz6j3gP99KsrtfCHpEFELriSknjLDwwDf3wPfh2VKK6GkEK2ELBfG",
  "key27": "2rU9gT1kgmp6TTYmpmt67MsfXjtapm11wzUyk1tPYejxygJnvGRMF3nQDe6PDteUqtCGWPjEtZ9xLrMdc5xtD7r9",
  "key28": "xbAzRkkTwRQbdYwb2cjkKE3nn3jVy1WYM7sUqAE6c4uFKLr85Vj4gAmrED9yZa163qQpnMEYkSdHd5CxChYq21N",
  "key29": "4zuXLT2zj8iRdaMBaHD7aQ1j6ozRtz2UmV2Xo8K8gdGqHTex7LbBM61wNgaXibCB25vhUKDRaCHQCHCxitZPuuAd"
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
