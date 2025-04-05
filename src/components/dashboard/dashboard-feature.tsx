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
    "4z4x4PeoFcFyNehkeazH4YpT87Uyh5wkkiFHuvvsRpaAABhzgfp58VyhazA1WTnWKZUQzwfrTA6tNZCtW76LRznm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "khiXj6f88Wh6pvP5pu7HfnfkTzdAg1WG8ANf5yn6WCVP1PbiCKSztWktqPecGXsUUmXU6xgRmLaFrh9GwpdbDsJ",
  "key1": "R61HcpXnVZk96ApKKAr7VCXZFkP5Q7tNgYiocgdBm6MRaVQcBFir1b4Px3Bomuq9VUPRK76sgamGUshGZ3CLPtp",
  "key2": "33ELNAengZAgrdxzpxsQqgvWQkMiwyKvXE7eJh2McYimcqa3yugxmZ1VMXnnBo1LydfcixXGdFBMQidRA8CQ3TVV",
  "key3": "2Wu8DYqyEoRGNuBnJsEh6nnVMxMGV1szeon228JmpwPXcM9TXzyMzW3Vh3zsoKc8GHvteX87wnSCgxPUuxV6Eo2e",
  "key4": "3mKNcTKyYsYQNou66sC2bqbfvmQadtFKHdKPL6RnutWBmndUkFi7oiK1J4TAj9s3UPvZDar3H2MncyRR8sTviuHq",
  "key5": "4JN9WxJhDjQFaWm1L2cAiGq5Qhot2A5tSg5fGUzeHSLonNRb7sQ7nGetVUKJqXXb8tBP8BzQwU5t8xXyREaqR96h",
  "key6": "2aUXDeyTndhPxuBYvndNrG5EdMWWGBvtgu32w1G42j65crQTrzu72iDfputNiJRf3FuDk82FUxpUeMJ2ndFjg4yP",
  "key7": "5b9c7xfmU18gJkSQGYCJKAToDw7Gv24pte6gVpi2V2LTVT3FNr8pwzWp8DSNNaT6Gzp4PBjVBQq3pW8mUEp6xqW9",
  "key8": "3xdGyLFXJkAZN3h672bFNaiZUxqDWxdrjHGEs9Q1mKArUu32o1CtVrZdi2PnvSQmUxsog5hLeQT66AzrKe9Jg5BZ",
  "key9": "5niMULMg7oB9JdxTi8wnHU5ZrZtxa42uPeXrKsKr3Nk2ycLEr61fEpGa9XhsgUHJJ6DmkaCaRoVX5N7URCp4QBnz",
  "key10": "22LwE77cfuPt1ZkemNPCxwwuwDN1BvLA3D2H3oJr5WrSZ22RWusSRZeEU9XyuxVAa4pQEiEB3dXVMJpnnaS4SUc5",
  "key11": "3yKaXcZaaj5vn6xrivwYr8QoRo9gZt4jHswx8At235xkoz6Vg8JnFh4qto4dRq9Kk3P2VQAWD1UjbYocKZrtYSXL",
  "key12": "vjYHLxnTjSZGT1i8QBJG33cmVhZdJ27fnQAw73Cp1hewWonnGbMrgXxsDsfqTcLThWZk1771ioeTmuLTgfh7Zwj",
  "key13": "JKEANHXYbozE8CdzxsnPvp1HmLHKrk79WZAMhgmFrPFVaUwLPSckWBZz6WyB1vDyKoDZ9divM3C8a2WeQixunG7",
  "key14": "4vxKNFr9zQjKPCukHQ6P8oRKpBrhmrdBzbn3pba7Du8w6Fvwo2z4p942ms8BcwieybnL3F2QEeT7ohfixG7vQzfY",
  "key15": "59uSknieJruVuuxfEP4a5mmxV9zzjFTfiDWE8MnuBcg8czhcrg5g3wam9WUd3JJnQBgSQMY49eCNgLfU9tTNJKWK",
  "key16": "QgsXKw7fAtgLvifJP2t1JigtUkQ3tr4DeqnxCsBthmUHKT86BofZkEt3RQmP5vH9Vrwz5eaaUrY65u2XoeWC7qC",
  "key17": "2bPvVu8rVWix8vtA7QQnuLXrqhSgcT5mTDNgsb3hZv2GEG1LuHAJUKFCPZFKRBgbbhGWQJumPybrVAPywzsXUdEe",
  "key18": "29YSrVtDXxUpfk93NPdbi9Rfnp62UUipiLUAHwvFp5U11mKGG5s8Bd4BkXPVEy5keJNEzZwrF4CPbb7FxDjHwu3b",
  "key19": "3U731UzZ5AcrsqCTqpT4Eh3ZxprF59YxqWMBJS65ay2iD5MhP6uGEyW5VaZUHyJg2VXUMErWCzKo3DqVKPRTF7CQ",
  "key20": "1kGTSXBVvuBiR1SLLLUa25sgC4q6c1U6UZ9FVTjWR67fTwipvUw9FQM7MkFb5sZn31T24VmVEAVtNgTTYNkNDkt",
  "key21": "4X8bS1qPjoREa2b8hKgMhD6k2SdZCb6E2EYyL8p7DDk7XgmKqf2tTTbnruC64QxppH9vzaxo5e1Jo9f9rosM7eRw",
  "key22": "27HJjTUAs7jtixV2VuzCsNYYkWZEFPB1MemgVHSxQHQRKxJAe1xX4s3Zv4oBsfVQ4p8vxyeAiWdA3btkvh3mZirx",
  "key23": "5HDNMDCj2HPEUBYJZDdJRR4sLHaW21vdjTvMGdBdrho5QmEqHJHxkUzUBiZ4XMNZStvNwffUsFZg3xd2FTYHESKR",
  "key24": "3ehe7mMcdUF9omQxPyLATP3PVdzfRUy2eNqaSfTV9pHDkUn94XCdN5Jf5xKe5Am5arEoLyb4AmoLQHFa3i8JdCqm",
  "key25": "3hKvjhMJFPBPcJvWTmPgpWTHfK9YKVjfuuUjGRyQF5J1k43myP4New5WyRhGvXPTxE2nccF52g9QGtiJj8ngK5ct",
  "key26": "3D54F4mBUsMddMuUFinUvWZSyS7aAbbmXiByBh3UwYinGyguS1sYUakm5kwxZnwqSZQpyZifyP7fxiESZ2xXuyJt",
  "key27": "2SpdjdMH8PRcgXuutWZ6UWKxVe4r1s6xhc7cQGCHUBtrXTmAu4UizjEuzAiK8g6cX4sPBTVRGrf5hP8VYpBw1s2W",
  "key28": "5T3hojivVNQ5isQT8V2ehHD1agnXVA6BcJA69XN5ZX299Et8NQqw2amivniMVsmCg3m58hAJFtHTX81cHc3UnCoJ",
  "key29": "JWcc4se5CRQojpK78ZRqqJDtRQQJNGghjH3UgcLcG1xfh2aQLRPR9eDHTbjdfg5Dbmof2P8UXGPi6n6EAssiy1q",
  "key30": "54b9sW7p4xTJSLFSzYtrG9xP8Bhdfd8UbXg7iiAFacWaVexPcFKsFxbvoNWWBsQFxKdiaycHo23AtCNp9JKSHR5K",
  "key31": "4YTgNLAZs779qUNiaTTAywcnjXh6fHTmQeQzngysBHRXp2DeFujFw7YuEvQSyetbbDccw9aiMzdJxnzwJkgrJCix",
  "key32": "wxZ8V9w4fBFDFGuMrT3bAMpEtjBxYQpx1tfiQhgVJQk61vFDGfzpZYurf8r9D2BhnPnnDN1nLjSt6CaVnLh4piq",
  "key33": "47RgejSFAutcZ94C4jKm7uUAy2mFHtys5QSHzrQiydFCbT63sjR46GebjUHPMU8hSRdzGxt653VqG3VmGxfQGzAT",
  "key34": "VzF497mSX8c2D3w5QVYnd1Q98DY533vrryM1dDSUPTLrmGBbmAJuakCanNHNiiRSJY2mPZfwMANuJpWihHGE43r",
  "key35": "5WnKmFR64pMZJBkFYdrKKMyGwLgvb4aTBrLV4ZQZ6o32z1MKDvbn4zAbJP8TtLdkVsVXP2WwUMDCk5hyrAyp26Pv",
  "key36": "5MEQ1wnSUfdpN29XdJgK5ZtBtwQHYLvy2yDaqfjGoUA3txPw8ngGs7qVDVtHYFiRZCfitsSrNNc2qeLdNUg3sQBT",
  "key37": "2uVYnRuVqxWYLS59obz1n26MZSa9cq4dup6Gr1RimWZV988E9ijNNjTLNFxfjd8CfYgKg4tdr8XRNoJUYbBxHG2b",
  "key38": "2AmF44BLX4dTHi8YfKcUSVuiLF7hvQxibXx2Qf2SBRwnFayGS8Vi9HXMtqDmt6LkCr5Btsqo9ADBFvsQ9YdKtoaf",
  "key39": "51ved6YqZtzCu4NTnd6TUbTrV97QseCsHa2BqQsUErNZWC19PNBRvQsN5RgQyKWLi1dnwpGmcb6LTyhSE44M8bCJ",
  "key40": "43BNzt1RY4xT3Gx2EAu3crHVbTG1ipa8FUEUUv9UM4j9H1B1ojoDE7i8Hfyf6hC9xutTSHSMCY2xTJJ4AkdpwcJr",
  "key41": "3EQjDtQM5wyYba6Y8tJZK62oo31RDMM5XmxksgXDy6axdzHVyd6q6tUMswSiNCEYJtK8Y4Aau7EqjycWF65HVuEW",
  "key42": "tT6hkjVbKRz5S3L8SzCexN9ic8Lc1fhTmbbAcwjVM5bMijp6gaYcxQKjcgaRMgHqDz9D2j7GkEv1ZWUy3N765ez"
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
