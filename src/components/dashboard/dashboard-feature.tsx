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
    "2RRBZc8y3RQZQn85JpZSMiAb182AyK8CocW8PawNXcwhjNVXjfZzoqs6Duxz8TrVmuT5f4HmCY8TfzpNrLSPNp2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vC84Mc6jPJzw9rfboUkLwgivhqnCT3LoMJUH52JwqHCjXX8dR5kk7efRec1RUeYMLkLvPzU3crrnHjXemJoqiSH",
  "key1": "5CnvzUg8ukovepkSg7ehnU97icmfWdDsy9dQDKdZEu3udcG3YBU8iJopkwAv44k3MR25VsYhMfZg8Kyp9bt6pAU5",
  "key2": "4AcD8AR91D9GbMahUAB49BzBQ8rs6jciD7Rng63RJtAAw59W4JErQzd6XbwhJzrcfRkLntvGQUn1KZERYEFrBRfL",
  "key3": "MLvB2qQRFw2XipdyYfBAgmQYnWkoYj7NrYZ4vxSsY7z1G4sE4gBYjBZawBqgt8VyNZDf1NUmptZRULi2NhXAcsV",
  "key4": "4Jw7GPkjfwHwhPoxjuvVUJua1FrpDyvTjXSnpQPEbmrLvWEHuxE45YEgmvBh4vKQ4DndatkkbSbNq52sQECWEShM",
  "key5": "4gUxcu86ixP2fdRYNLwGporrkhUsdjKZQGy25hXon4J7GqGw4F5A3LZQ6aqLrDZ5UJKUoBTjEhiQV2798cTTzjBS",
  "key6": "2DPjv9EL63oSeDuhDXvuf8qeKYZ8F8z3AL2gMKt1xUZBbgdxF68GVzfM6S5qfJuAiibyUnSspTHRHaCnbCvqTdFn",
  "key7": "2T5KrsNhiVM1bUM1MRUXUnYZpb98ZsnLCiwoXD26ynAP42hivgbh9JJyMTomrsx1KaFLh48pKB2bgKsCAGftnKMz",
  "key8": "25t6o9AuFr2n9zGBLS4GXfLWGyWJ8Ne5CcD9mQniu4V57RDhw899WTFTzKJXvujafUdnXWSFz5N2e2bkuGNXLUrT",
  "key9": "4a4aJhUkGdXMc7jxd2ZL3yYEL1CsbEsq84yQsUHZUFAyRtQP3s7DgEVvWJ6F6Qg5hUkkX3b7QSKps9QYudmGXs6L",
  "key10": "48LS9EKDkjaG1rxWx5oNMwN3Upw7EpuZdtxcBkX3TyWhT3LgveBwMNVX3fQ86vrykdYVVGuXw3LEDdJSCKxUei3g",
  "key11": "4FHh1z8mL4fKkbTftYPDKJwYavmFEVFnaiDE38wpDRNqM7odoBM1B8WWTZSuPzEY3M9V7AQpL876b1CXCdhmpFxW",
  "key12": "2yCJvtAAJ29iaTd14fLYvB4HDA38AvDZXyaTtA3PXEaV8n2NM9kSaH1qpeKAqQnY78xy4SRUvBvoUUVEw36FXSJ7",
  "key13": "44uC95hZsLyAChiSg4E18L5gzBV4NhurQgb1Q9TEysq4ojYgAS5LicUhzGs2uhdLE9TSwsFtkiCLG4uwiLoMpX72",
  "key14": "5DkXHN2F2LTczsRa4hGgB39kKvm8XZtE7SThiLFiBwH2Ft1Scpx7Pt1kfb8FrPABZ7ZB7hpcHDmz1A6YxvCtHeFJ",
  "key15": "4UuhgLF2BnxvvjsSYiNPqavnkxmzUE1Tr96hqMoVyqmBdUVWhc6BYDMktf8Ly12Gc7Jo7a5ZCVSEPGq8hzAUXme2",
  "key16": "28WFFvGm21dv7QMXFey4GTDZeRYV3u8ystoXynMj2n26ndy6y2GLbcvbbiWg6AoDTq64xEVgehAMfQbcifDh98d7",
  "key17": "Ee6iPLMTMJjH51F5yWdzjSx4W91FiyLffNFezo8vqbQpfFQeaPFU6d7AB1ktXYf7UTUNpwbcqAuATK446AkJPWD",
  "key18": "5yZZgS5jxuwn13rXtkoFKLXzVih2nHWk1SPrbQy1oa1F67pdEFb8fFk57rpqEFfWKopWZjGkXhmzi4ZYTE9dV7us",
  "key19": "aPeFMz1EAiZsF7pSYK6GBV9BwetKbqUSgpvBnW5Ra1q8mWkHu8FUXHETzBssSpTVpnZwoBatFxax5L34fpQheWo",
  "key20": "ZDDZiKChWWA3YyKVWenkfQ2gfYKjgoCSbd6QUh4UChuDFUAH1RhpL9qFkWhRkMrXiTmnzV89hQnZbkwBvBzreZR",
  "key21": "CWzBTXaK3u8cSqB3rGG91aZXaiNS7kipCuyuMZyNgjt7cjbh17XhbgtfAAni6BDuzdKbZEbnqLetEBW1akE25sM",
  "key22": "22yDRPzrS7ieSnPGo4cgivSxZMXHMp3pTbmDkZaAVY9CwepAwym9p78ZiQhsFe8CDVa1uTNtfabTQaXesGufMVRZ",
  "key23": "3GK4YpUhiZVCeDkknWdT6HNxSFRPbjXzyaXPsr1Qa8n92H6LtTSveAyrgdiYEWENM3mKu2G8PyeLW68bXASnV976",
  "key24": "4QQtuEPD92Qy5BzdFgtb46w3TuVSqCqmHqJwYJHjmJyaq93dk44obuhmZqrjbQSY5RAXNqAHBjv6Wu8AmcRgz4w7",
  "key25": "475ydvPndVTMFmXAKAoDhpLUPAeduzTsoZHpW8gUW7xA3eTpFeKLXsDiTWqpCPz6GtjqAWQxa39PiVd7XGod3oPx",
  "key26": "2rvBUmch2hExwC7bpCBc8mN6rCrSFZBkgED4KdB9iGtBz7u6HyYm6ErcdxJxxDbaRmpvDm372ov74eMX4pTRJjA1",
  "key27": "B2FwwjSSdLQWK2WFmG4Px2VGZCZkff5DxskyQu5YcTzM6ewGmxRoTgkyLYS2WmPs13Janu22iG9rTRyH6XxhjMk",
  "key28": "51QMbahHMAGiAh8cU17ZTSkxET71KG9mTKAmirFVALWgMS8HU6oH5J6wpaUvHR3UZ1BooKaJzM3NucQSr74P63sh",
  "key29": "3WRZyMnKpCBhzgEKpxWv61viphymxwktdkCPrunvD9y61gi444QZWAN2ZXRU5CZnC4tUaqN6HNWKpofLoV7bwHZF",
  "key30": "4Q9u7f64vuitLPQ1cSZbrEpegmdtfqpeYLakbydzi9LdJb3Y7GuGzeiCueB4dA4VATn3beMbUzqKk3Ugf6UAw2bG",
  "key31": "48kW8J3Rqs4QSxK5AdBpiTSbLpCwwUHWdkmYPK31oTNdSXqyED8VrBAYTbj27jz3bMYrJA6q6RfMg2PSqoFL2a18",
  "key32": "2qP6cKHComcWt9aTXppg8RWLcPxeNHJkYsW27WhnLCVZ5yfNjCPBFMEGhfM48tcbsxtaxRLvbMWeb2GUMCiiF4Ww",
  "key33": "3hMPXB18W6fme47pPsVNzRq5TZBo5x4U9jWe1H6TQoyyLrbbviJzJhUMg43eHDgPgL4WdK28hDAF2M8achhdjKDP",
  "key34": "4N395jGPMQcHahxYh7TnvPV9ruMGGHn1xrDecaqh86TrCb2ehpiCFCjj861T1cF4ronCofCHptm32JZP7HkYY2tv",
  "key35": "46gFWbCRfBoMCy35nEsWhRZ5ew7Ligt9vuWZGocm3WsQ29Y1yVVnXkcq4dQ7w3q8EcH4NEFCqxfkYC8izkWawBfd",
  "key36": "2omEU6fvgFcrn6GV6AcRkwNFTFzmJwwToxfzcupHxpjv8SzjfoWEo6jURFJcpigJA8GkoT1gJoFjVhjib5mJYQnc",
  "key37": "3pTkhdwLtrVVo7oqJVSSMf8fMRiPhycddYN3bQxWWB9EMLCrqnj5Dit5XCZyXZfqPJ2qXrdp3KzNYeuM8BzTcNc8",
  "key38": "55iehBqXca9W1WfgW2KcXwxUmmZE74UXFxTWYKxaWQ4pBjMPkVRCFsCYHvY2PCvBG7UPD9cgmDgFT85U8CrJKHpj",
  "key39": "54HGqtaUCyErE65TsNAe2XABvF9nXjehyfgTkF6McBypYfgwnRyn1K1oyxBG5XvsCnkHFG1w5MbaEnqGx6C6GT5x",
  "key40": "3YWpcLeVnxGkacQpEb7J8sV3H1uRm3z6a7Z4UXaUBgQm95NZ5DfPz6xnU8vzzdty7JpqpjbMKTpLJsaMpFTP9ZWf",
  "key41": "wvYC9UASi2WpYEa1napzJxHLg2nV6wg29aekEXERcr2ihf2EkdtsX4FM7diSV9q3hSCpWxVq8VYiQcc4m1dgr49",
  "key42": "2CgQbw2vxSAkHrJwRLY3ZmxjTxseRnKfuJKf2TUdXKRjoN7HBzcr5paZ5tUoAEtifejfJ9p3EyqeFvtFor14P7Vi",
  "key43": "2T5syCDGvsGPBueRar4cgREsMq9Aswz36srjLWhNhhAD7mBNqhB49TzUBVpMXCFmGkmGV7XCRiVgo6T7YkgbRYRg",
  "key44": "QZqVup5ZbGYiKeU3HvkBxZduMwkMWZHejp6Xa1xUxJoBeFKuhDbjfDMB9AjUYW57D8d1atSuv1z1XTJwyA2XP76",
  "key45": "5qK7kWygN4oYkFetcTXbvyN2YQJe8ntbmEMjGKvJmJeE973KUZpm5McPLGpWuj1P5q5rwKpQduRsSAQW53nAyg1E",
  "key46": "5G6ghfvHmvwxNSWuf8y2D5DkD8AJehPm4SjXmN1tczVj3ckM8w1YRpmyh2EaVsK5Xx1aCp1YX4XfHzCj4Pj34gKz"
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
