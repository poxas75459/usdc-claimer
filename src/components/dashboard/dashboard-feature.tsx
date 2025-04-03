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
    "2XN4i3X4jT43TE4AWqbXBGJpXe6BUM2dXgNx49VUyxExJAvBt4gKxxuxsyHWUJ3fHMq4j5VimGKtyQRp6GrJe19P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXY9fkEZoYF5avx7tSutZQMuYracf6FGnHARrHmSiobebqxdKHvuzvSeNCDwsgK2ZFtp4EdQ6jgpg6bxo8UtyDL",
  "key1": "4NhpAHWk1Tjod5YbcUCRd12TjNMBC7SDbjt366Au54SvWCwB9GMJYEnhj29pRKTdG51EWV3vFxnfahKQjXPwWDvQ",
  "key2": "3Cyf2iE2Angke7Mz7ug4s3VpJZvG6eJLYbfJHHNRiBoEr63AtRz2rw2q7cYdYU4SnvNeuBvNmzpaAWXF1UY53BgG",
  "key3": "Hz187ZUkgaeyUpMRYtwPNCtxaCEMUtnnrjB5gjt21GfjXr2nCZ8kNRsnSYhA5tZt23Khj485bvEBedh2tLiQrfu",
  "key4": "5dMqAJUwCGD6dVX1pzqhYHfvfzUW3TQoZzqEhynNppydPZDfw9ziRNdPHpnpLVYKWkRAEAzp8YSXrMthWKrtAEhM",
  "key5": "4LmoUSFya3wcJ1mg3Rj7J3Pd1yktEpeXC4EdknqLYUs4sbjkoNgiJ4T1tPWSZJEmJWspff9eB4LBfBE8GAQMtGDP",
  "key6": "57nxK2T97JG32xqKxqxPmMbDPoPX7yFYgMWFsAo9fNpztUo3uHMZLPk4R1ipJkMYQnDcvQ7PRiNc7DTh7PiCL6XD",
  "key7": "2miNmKAxc9H9JWkQhaQogN4cJVF5NJSWQftRwDYjUfESLh6My8Sbz9j1wb844Hb3Hh4yrvmDpahQthcsQCGovuxu",
  "key8": "3hoaTYdQGaachMSRfZwzhBfrZ9LC7GNJdrK1iaxXVRapZFXMLZFoPnkbYqHm2b9v7Bmx3tDbC9waPgG1uVb9GJtr",
  "key9": "3vL69GbgZyUsfHnJT5LovbSUK74SAzHxSVUW8hQ7awvRta4fsNGEu6GCLzuVTT5YpTj4RLhiAtxY3jPsJMLxzM4y",
  "key10": "mPbFAft4y5n7eXcPJSBjbcP467BHFS2Mg5NtFjYrMxWA5fhwLE6FRTCK9N72cwj2VdzbugGaAJqVZ91dbRUCEA5",
  "key11": "2ywyr39tiRCojADrpEi3yKJE4zDFGoskRWe4HvUaVU8AnSSTaj6Zi31cVcY69ySWrq2KsWi1MBYRUmVHjwUzm2Tz",
  "key12": "5shsDF9nPQ9RuxLZav3EWVidWWCEhNQ74qZuEeauXijVfxbBxL1nA7VDku5mrngVUAs11qzAJE8pPYdv3KP4go8Z",
  "key13": "22UjTg5j5ZFaf4HHDRM5dUyKanyUT4NrPNLejZBNKcyj2BvkqLc7oEeUp3z7H5NVCoWuyRohneCCjCcpFhXdYDru",
  "key14": "2Hb5FDXt2xnV96pZdyJfVSEMsJKMrNrrbcRdsMoTeJvSyKCGwmHCX7FqsGhex2LbyhV9cj63bNsyiwKFvJb6uQ4K",
  "key15": "2RSTrnVaMioZ9R6BtEWX5cAUGskMtVnK6sjfPfuLEd4baeewx6rHDofpUavGE6E1LnAbCrtbPstoXWQvafWCUU4g",
  "key16": "6nCnf2o7hZgpMo7hHTTjFvgpcrwr9sLByokepgA68DgJkcgUuGHmJa1mH3Ssk6c5o4TGAcLGDCgPgNCfcUric9L",
  "key17": "5JALHcGen16LbXaqqahvpMZ6pyUTYFEo2HpqjeBvZBLmQqVoRBDsC5rTUMTSw33eVVhWvKeKdq5o4xA3vz9b1B3",
  "key18": "LWiD5g6XYt4JZqAGvYBXkVxCtamiHN3jcg5kxaEgLVKYjSermfPvJNp4QpoKZSLNaWpfhS6EfXomsHLdM1oVene",
  "key19": "4BRP4U8w9Mx1EotcHFAH8A1p4swFQ7JcP4ZRHL25CeuF7U37o2N4TQW3WcMwS4v5HkHxzgUGyoHPyY2qgyRq8Q1f",
  "key20": "4WACJDGrFa8yC8xNV4yQRtTMuzXcWZQW18pYJPRsMLMJW1qRyYefWB6jWb999wR8N9bYNjbWWUK3Gkf5UecY1dk2",
  "key21": "5Zrj2ZLpQr3QUPLeNamo28crnUgyzZWHyDc8rz134wJd5BvrocsesUHo4kBr6zvkM2hfdpBHtE1ScgN7qYa2VAN7",
  "key22": "3rTpsNzWPK1yBQqdSJfv9o832npF6yWF32CZT25eXFj9TkneCxAVPtihey2J3v6FVDkvGdDP98Yv9Xtvx3UZnmCH",
  "key23": "5JZ8KtJ1AFCjwFh8WWXqqi4QdFFKPrt8Jvey1ff9KB9vHpRx7xSNPsdQ4qphJru1W7uaRfESL1LAQgfXzGG2AQW2",
  "key24": "o3V2ktSj4Eue51uxKQhbDAGHBKEa8E7tHoZeK7MEDwQKSUbKBm7yy2DhJdn89a9m9gzh9FrywZXTAK6qoLBJwS9",
  "key25": "GzcUSVJSe8j7SFYFZnBPDtnsXzjGLHsseEMHeeU6jiTnZpGBuFudNfWc4GKFYiiuFLK9PfPBJa7jBRq5teLMkAH",
  "key26": "3QKio8wrjEYSvq1esnk92xC8VVs72RJj1jJbsFCPNBAtdcuj1J2xwKJhpcpJ3jseymijmevKuo4PvSuNg2VLsq7w",
  "key27": "316cPM45NhH2hz1Skynuo5aay5ZhM92ecBrAWYzPABNi64xrNnRErst2ejvyUTEvuB8RYmrtptQ2wNBBUXfDTva1",
  "key28": "3TyL55XgBxderhCrjacKKbwtNyH6vrqztSShZFhUxzbJGkrwqy7n5hnRU6YrK6UZYk4WKfHtbAEbWqZb9gGb5Urf",
  "key29": "4JzfCATPQSKtizT99U7Fz4kNFbKk5A7L6U6eYvKSXPnLRPkZYKu5aeeTVXaD6wz1ijhs8DPmZtqYvaZeNJ9tkXcX",
  "key30": "5msQPkXCAGt8tDB4dPQ2Hi8PpU31mxtJ7ME3Uc1kiHePMg5r89XfSAabr3yEUzixjngxUCk6VQL6Gc1HXsqVM83N",
  "key31": "2qBvwe2k7nbikZ1PVe83C91YCsiNVp2eSAyGzGNTC5ZMJuuL1FC3NGzdXcqGsKEBmDngKGene6QmaQjc6ayMdh7o",
  "key32": "689QTmkJQX9CrdxYJEt61SsD3BfyAbvD719QPLvCFw4GhgBaiUgRQGjJTHtfrD1BWjCtAVgKjAGF5M6TCGB62tQ",
  "key33": "P4CZ3By3mfEuhj8tyJHi4Bh9xL5jYEpXNEeEmqTLdZhVhvDUzLWyEsVZMefGvPJwSTShUo9hPViR34a25njxmCD",
  "key34": "44jZwzJKj7FPzTZUJ7hDc4BHGScg3AKJ8qPoPREgeHn1HAsLm5foCf3LH3bHKXwGmS35EKsxN8Bq6iyeHjnSXZ2D",
  "key35": "8oBJzac593dMjMHWVcHU3V2hKjAjczgWBoc244UM4aBnj4D366QigMhF2xNEPGbCVPUtNcZ1JTkNKhcjZTXqnCa",
  "key36": "5mYeB5K59a7eDLMBFkpJ22QELE3Gj1BVq3CPj8PXcHS1o9Y6Y42EgsBNhJpFFkAoaDwVtytjedqPgRSPNxEwcfX2",
  "key37": "2jHuzfz6uo3bsxEEKAne2ReRguE5iLCtLHxyYWXBrQKLpxSS8H1omTb9jt1GZ4bFs6YVis8vsBxtr2g3Q9dZbWzy",
  "key38": "5SA7pCfVVvnYk4EZkxQdLKdKbw2Hv4gy8K2Mvs9mn41JkNTEnuQ1Htnq626xxFPYxJgpSChVHffmY65AEFAp797h",
  "key39": "spC8eQ8vakSc8EKoxk23MDSjetavNWvvh7pbBzYXkS5sJ8XY4krPV9nARkHo1E1kAhcasWDh338DHYk89XZdxxJ",
  "key40": "S7Fcpd6hBZaHgziymWVe3p2uYtjQ3GsPCJXDDC4Rx9SkhfQ2cPpw9pWgFtT2LSFvAYwJEHEDJdm9JD3s8PM39yi",
  "key41": "52o572X29tHYECF3tajEhqU1jKXt33gN7hsDXwWKS1PPJQKNrUVAgFBiVQaLzep8hyrZqtKSk8rELebLzZj2PsAn",
  "key42": "EoFtjLdqDZhwjGCaBJt3aj9QJ71hAY3jEEQczmVyN8q6gPXQ1C7Ac5G9VWwHYRCUdWHBTm3DmvEhCGuPvd8znWR",
  "key43": "4uDYMs4dqq69PAaQUhkrbsKuwLcFZbWHQfWYVgDX3stEHyw2qB7oDtepA7Si9adWsSZDMP23BTwkfziRfHXRsd4K",
  "key44": "3QxzUAquEU1aJ4LdorFuNTDErkngqnxkZRAQMZJQ2DCoDxwciKBAYj2HAo6dthDcwA9wLF9Xc2QyjCgcSweRt6fS",
  "key45": "2pe9T54BAGn7ySRy2AQBVVxdXgeaScectftNCATfHH1iWmgPLJqbYB6iiKeWum3bRfMqzYSczLxENu16mm7ARLiC",
  "key46": "B18bvEc9mkenWDAQUXzxGPRyg9gFAsj1xs2eom35REk7ydqPHF4Cy4iqwAkbyiWHPrNrnmXWnkhZxFCmzmGmzkZ"
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
