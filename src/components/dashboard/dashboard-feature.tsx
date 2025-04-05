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
    "2Geni4ifSSYF8kfW2MaWVTQjH1nDaxkZwueUhDbyhL2SKp81F7U4Ti36XDt7TThECjvat1JUvq9YiCoAMfzWyJHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABXo3DqPwD87rzWimmp4DhmAme1RA9JsR2PwXGAJ3343SMhVg4tKJ1e7tj1vLfacqAWCMu8hA63R6tMeAXY17fF",
  "key1": "34oHWebcCfxRft329Spk857EhgHsng1H8S4LHY1Q77Ce7zdL2iVKUV7bJy4fxF7D3QUuVvYwy5P5QaMS5fDi3VSe",
  "key2": "66MwVFYQshgQwacEYa8cULcm7DGK1rbBK55MTKJSPvUtdirEGU5dy2EFQWdzYFnU9HSa6DNmiSdY6LtnjREmC3VR",
  "key3": "2XxYw6YhXSrEYrzoNmaxTXDEUAs6zQyef4XVLWk3HykXZ4ZP73wyEi7eM87yjufjqPgJCmLv66Lf8ts269JHx8zS",
  "key4": "2b4LRKaCZqRPo6sDTg1BgKzffJtwbSL7wAGCbZk8gXqG8dhbxV22jqFVVDsEDt4biEf6ZJxpAmKkXHp8NPAB7jz6",
  "key5": "2Zi3ULxR9ujD1mynR54MSisjkWmACKctF8yZzZQeypsDwGgzNZidy682GVZWS3sehJa885ouSp6fjcZ6b75rSv8o",
  "key6": "Q8whVAvAmcyLBPPQrk9VjuLQR9g8hRexaqGVBq4mTZ49w9s7egPngV16XotH5xu8UnJk7VaL1jJwXu6fdCVShmL",
  "key7": "3ZYm1shyx8g1FKVAqHYz9ASPhpnUeV7Y1Eukre5cKdCS9qMEEgzZ3MNoRezwWpWxnPDS7DoGxxoFyRKQMzXHAiKG",
  "key8": "64qBNgnAvX11huU2J2pwpfGTx5mgasJLF529dHN7iS42ErWfB3aVLABa8JttMZ5GdSBbfzDveWmzBJBFADJak8RC",
  "key9": "5kVbLis9Ky6UwvmJiwyam4k7pk9iURXffUZvPBC5XJoZaPyt7BCD1vQwZnz2SHSaApAxeoYCPGXhjaBwKoU7jYZm",
  "key10": "2nXMh8urUAk9F6yofgmUoyS8tu7KENxXm9s9Pz2334yWWBg7TYFVmQDdBZgfXZTRxxdFFL8oEy4nK2TAmBuCPWDB",
  "key11": "5QU5X6NmQMSbmFjNdhYzeTYaP1RDBmn5B5AbCiA1bkM34EkwtUjtqJnJukqEkEW5xePKaViytr2WuKoCW95v6TTR",
  "key12": "5gkxD1TNCsgypo2NoX6Pnki356hwstT5aDgVy5imBXcCF7jKysG9jqM7kLd1BfJhWbutK3sguKoxJdAwFgJrwiT2",
  "key13": "3GG7FRts4N9GK2W5MZuUPjtXzvzPxjY2Jv75Aj2FrWjUex9gH2YkXFE5yz424ebz5kTqbheT7MxqDozvJkaPdyGb",
  "key14": "TWfwn1bGBwMLqT7gAxG9MB9p3JPzkSqPfXSGtMmeNyvxCKhCkSw3hEFoV2bZszQ3gvyC31t5AWBZnksH9Jg673h",
  "key15": "5Ykt7yKvBdstMXhD2g6MBH3fYKGQY7KDMtmc4m59eQYMumu4HE1n4LEQXd7RD3csaEeme2msPoG7xaPVjgQqWzz5",
  "key16": "25o5Py3xqETxvwnNJ51DFSKdyN9VBhMQnd7YByU3AmhTwBSMaVKcwBvJgrHr2SqFzZQpK7Qx1VkBXvP8mDoS1tsg",
  "key17": "4B8zGh2g8Svkv3vqM7vi5KLRzJXYiyBraXwtJknfnBifECTEXny7Bw7T998P1BdUiMAU1j53F1qBWcAkqdY1sT37",
  "key18": "2VhtdCXwS94u12YVVSqSViUfasHtwGiWjbr2mkRgnSJn2J2roU8afEbcdUV71rFhbAm9jD911MgeW8gYMx6rGs8X",
  "key19": "4PTXxhu5ebBSCL3rUSZXXFzRTbdZU1NLaSZE6HCpTwHPStw7FxVZ1WbMp3u7vgEJZatH3C19rHDcnUST9VBKaEtq",
  "key20": "5LdtWKGJ1hRmxL34Le3xjVcccnGgU9CYr16txa45SfQSpUbXhBTvqxUik1TStdew8zQLKRoFJXLpXypxSWo4NBAG",
  "key21": "4g1XgZHujjZt41hRCSifmA38q8JJCaAf2QhmTB8hPgckZ9qutjVRp6QNGj5vTqYH8nf4TC7f7ZAWquFxGmBidnA1",
  "key22": "4p3mRahVp6r4LwAS3WWAEA4RBgSLgSVLaboWQKMVFvm7ZFBML2VLdyNQcevYS6TxmF5mvjvy5WkNhufTWKNnEaW8",
  "key23": "fgGTeuLFY99dZqEb6PfbxvHJbyjWwMfYdGHb251KFhfS47GYsBFzLdn9qPKDEr1V3ZUMt5veD6BxfYWYNsx2qA1",
  "key24": "62ZPW8Y81iJ1zdLuC7tDdhKKxRZ8EBYB7nLVucr5HaDUdCi4nFZ7MPciAGfZtJybuKXWA4vadhDfGH7RdRfqPFP4",
  "key25": "5VuPs5kEWqJdQ43JzEjQrE6LeuPW9Gq8kUjyoKxTgTUCJdGydhFcy3JeivdNhTpzLyvKE4yBwpMx6eqedr1gztpU",
  "key26": "58gbE2UH3ySbzFB9YxjRsQgzwJXjdJA7yxQLfrFrM4VEfW7FvGPdEbuXs3p5NBJaMs6EootdJgUcnjSQTbbb9B9A",
  "key27": "54nn8AaoSwiUgRdKY2yaM18M3jUBFFAoGtV1JsTorS5uekh7M5eEzkSHfpa27XtXuBpMKrs1xniUUhfGs7RRd85b",
  "key28": "2cKt42b1zuX7jiRApj5VrByNczLq1VaWJAKvvqG63kCGhfRZsEYdLcRBFPzsmPpRZwg2W6sSSPbXgzUb4dDmAokR",
  "key29": "6184TRYUooxu2aCVSWcV7CDSFGT7vXtJY61YP9rJ8tjCmh5EMDbkb85hNnzAM8SLDUM9UDm1xawy8SxUwumfJo5e",
  "key30": "hCfQzzcwFiWK6bywHQQHDZJyM5wdNuP5AYpXzKn27Qo5J3mhVqQZAtuHzk4FFvpXP4C7cqCUPxrQyia82zZK572",
  "key31": "4QdYpCpr8ymZ1mrPgWhUZUzjZ7s1SMEkP89CCqxebspkMMSZcwudNSXZQE7Qo1GbNANBMj69pj9Z6feYA3agYSYZ",
  "key32": "5NHMWFw3DU1pQtxLSJJfCh1Sf8i1H1AWicWtp9F9aLUhKq97tzAJWdtY8eR76XVFur7b91Cm4YuoUuXKeDvbwzr6",
  "key33": "4errAMLhAPdVZzh1EdtHiYpGZsiYwdWFTKQ8L5nBqtSh32AEPJp1gGED83oVzU4qtP6ExeRHcfW3hYPRsMXe6Pku",
  "key34": "2FpXTYSdqyCE92EEaAb5ugkiFvEJGQuM5tkhLATBDHU5abFwhRcLcxWcasYQnjeSmdELSHyMp4v8rDvoRPXEdA94",
  "key35": "4jxieBAqLPu9UgsotTa3TUvyVUtfB3k4o2QcsZ4oMksEufZa4bHxgZguy48t5cruhCgzxb69b8V5kgykcbJRTpyP",
  "key36": "pH7yj2PXpaYn2QQUMKHpzLL1ud8Gy6tCNMEJ6qbNQySEmH8iU5GVwkJgmdM4hCYGRUN4G7tXqsv63euFZNFE7R1",
  "key37": "2nwMa1dBQRhmErc4WU3UZbCc3kfJvyEeMnBS2KhsssQBsfFejmsaxFLNCJc5UKNaSmxbtoxq7QdkUStBhypcJzqd",
  "key38": "HTKcPoLvupAPpVtYAX8XpLrerjEKnVtKQQnDSaPGznaGPQ2bJqXzqDQ9L75nUpj2jrDfx7neeLXGb8hZRYkWPqQ",
  "key39": "5NuJtUsQZiHy5sMDjF8rAqosqMUHyxArwSK5d9pkB3VwnN2kfSYpMyYU3nWHD94ySseUSztFpGxGjmCAr2CrdGsp",
  "key40": "5iK2RnKDgJHj82BfFJcy2zp57aqnBA1FD1yUxW6svKGyQQJnaHnx8mGaEKdHFQdHVKJa2k5KzUc9kVqnJBJ3bGkb",
  "key41": "5dSZtaJeePsjMp9HLgzPWTnNi4gJvwar82WhMxAKvrJZ3XmdChzLQaYquC2fP5eSf45bqGbMRp4n5Q9hzkGKXsH6",
  "key42": "5ncHoAJ6StNzAwgY1RtVv598s6xWtsRxxiQpVyAwTQRm8qDZhfA8aTzxhwupPWje3vHXJcrowmDLs9B8pJWGbGzB",
  "key43": "1wWiDn6b4skcATGnC4vsNBJYyHUnsvsvf7ZLQ3BPaC6QySkgaWmfDQiSHQe2HaSV4ppMB7X6hVkHgtqZ8zpCwTD",
  "key44": "3JQHBahCSHm1T7hUSW2akAGvygtp7crtFqpDrpsCxc77AKzQTCK4QYVmu6jd4Ebf94nsFaqusRPwRAYdmmQ7tR1S",
  "key45": "2VnNXf6Y4eZRwZ73hoz5mj6B9n7nWEYh1DxESsZuVuJt8nHTaoeDTBwufGb1FJiYVKo8uJfSoF5hFGBg8Y7faRkM",
  "key46": "4B5swTmhK5dQcWjNdDFmN4hE3QoT2d6uSzr9hiGvahnpDGbGC32uZTXSA1txc2pTvrdmAiHqVZ4US5FCqiVyUD4u",
  "key47": "ErWNeFMX647jXU3odSDm381G6gQ2kUoEkMyPnikFcnNHzU3AxbfotzPqGR9mVoPWsWZXtQh8jj1kg1HjS6ucvvV"
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
