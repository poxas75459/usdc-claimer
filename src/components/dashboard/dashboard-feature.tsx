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
    "64rnRTxAmup5DGEiKzmLXJpPepNckQRRKjXSFc4crc1nfwohaPg9iNxjF9mA85LjHQhT7Le3Mc8ue6HyeRz7dE9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42hxyShsRLdiJ8T1xKc7LR1U5WnQXLkwuayMLLLDoYGL35nCHGSJ5iZ79LwwfufmRTJYr2rG5yw8jkM7doTAtnUa",
  "key1": "3bMmhk9q2D5sZQ6SWEdPV3mouyt4m2FjEQUo6X5efiPgtf7aMgyibi3z3xeFimEkpS6mxyNEhEYYsZUR32EMh3vq",
  "key2": "31CV8owv19Fp4ybk3tkdrKr1k3JJjXuWU5EE7mB94ycVNwS6CH22HcG3kW4XyP5e4AVRdXyp7PKAG6VTsE86KHpT",
  "key3": "5qP4xkT8wpbaZygbAionFr7xo9RzTPa7bqSMmbytLmns4fPcz3ybuDfDYLQJfJU3M8gNdV7ZNDz9Y64xy1nfb7po",
  "key4": "4SUKKGheMWJxVm5hEtNK75bZv52joJiQQ8UDwcJo3C2jNxA2QQxJhFtYNP22fdz1CwKbPCTda8TT4FEbXWdQ6bP1",
  "key5": "2K3zeTgzXj4aVNtFoqq8nmUWTzUeFNgTea68Q7RLuFSrr9GLvY69mU71LS9WrYPzoR76DDkPdJEETbdapEmMLR22",
  "key6": "2mocaNRRVcSCtYqVpmv3poc82h2dtJhao6cccaWPN59n8euJA9tKgXviq2pBDhPSbCQbpsM1Jh4yV85cRTq63gim",
  "key7": "5ejNV9eJA3FyVnsrSdzonzohuETu5SatzTp4vjZCiBGjxYwKKpoQh7Xi3V4jMHaiEM743ujacubzaLNku9jAKYgj",
  "key8": "4M56FEAueM6YJTNxLmex4TyqaypeYT1vS3gkJE4m5WAMLmsMzAbqkRQidwC8wVBuz5efbGegv9YQLuoA1EKjrFvk",
  "key9": "QBW9G732kmWJSnb4KJJDiiM7ndAHFXWGmBay3zprb2pho2yySw9rv5XTyJYaEhoHUfXBjSqZdxPeM6tLzpb6Mnx",
  "key10": "2X4q1z6ZSzU6cMo86KeDanAxkjjgdhU7zMZ8DGL6gzU8nt8b6mXKYerKUeVuaADMwi4tqE5skGELa3CD9dkhP82V",
  "key11": "4VZJn1QzBNrmvbf8F6Ng4g5sboky7R8cK7jxT3623oyXLpp7XZFZrJtrXHcKoqd5fhd8okUv6XTsiRCxvcJXmr9b",
  "key12": "5fyGTvFFS1BDTyZd1csNmrGhNgtuVv4aUvjVbA2FLsgbqK3CeRLiLffwU4XusoSqQU1iEas2Awq4Jw4pdbfX4PHR",
  "key13": "4G8V1aX87f3wUuk9WDkujNdmxhAqGYNSDGnUMAntpzPHAZ9tkQrjuNrJzQms4jYLS8QDv8WN6fRiDa2F23KQVmAm",
  "key14": "51bBnGMtJGGuTnKYdccKHF3P6tc1JCt5s2RzV9sfpJcnfxR8bBCYJSATBSStshPuJcLNPGVU1RoagJ3PQxyZjK2F",
  "key15": "G6Ngg1YWoMkHGiSzXfian9gRW1EZVLqaY8ob1w8X1mLs4NZUCD1xdA8WqJ2BfEvMBNw7eVg2Ed49at2Bh1FdGkT",
  "key16": "2v9N6PvVBtrXkFEiXtLFMu534tPM9NDyTTGwnXKHvXA4RiACeFscYXjq5Q8g8sLjhoXhZ9R7CbRMybzpuyybsbam",
  "key17": "71UYWQLQve6WxgbFsMhbMbtirzv1VAgSMR53Joy2bReiHNb8Jy35UzEwTZsbZLEaDcTTwpnPJJ42hj196fpTaef",
  "key18": "5exonYr5Ej7ujZN6bEj5b2b3MaeWXqGFudY4ysncAzHjzCjbKH8bbCdeaoFQhU7dG3arVAZDNsNXZM3rsywgKxK2",
  "key19": "3Eo5fgx83jYGkPi5kAYnDhiNasqpe6nshy7vtmDGGvYkhJ8fUo7HWEp4ZnKh8H3QFCJCbosnqc1godmkGsbiujhu",
  "key20": "2yTRZWAq5ZY9kX22y8Ps6vFxFz32YWrM4wwF28hjm71VSkRgYnACqirHFm7WW2mm1Q69FACZmHux3w8imAv8Q8wF",
  "key21": "3pihGPkGQLMGpgrH5YiihHSVFutAcYdQVSYTLFQaNJigY8AvGPxSJvPayqxkT49REMnBxiJ7rwzueQ7gs1UFN2FU",
  "key22": "2FHZh9FuzYeqMhXBgAGTo3kRYaioj2uswTHxMcd68cp8bwiBGhXo35scciwRNg8GocmNKvLWMZNuLouBpGMYV6Hm",
  "key23": "2fJQvS21bhPR9hFDmv8tJ5sZjFrdjTAyNCaigxbRxNx9FFuR5XYd7VhTbvJB8n543m9zXqZ979XGwAYzYE1FfBRR",
  "key24": "pmVTgG3TThda6Mh4yQMKAz56ckyXykiAjpm3rbXdwGu63skfekKQ4GcXkEcRFXcgUbqcTMFusLQwqeZHcpEKAe4",
  "key25": "4A29ZMVg1WgScA8NBBkJxS7gK3dZCD1WgbgvwPaXatVMtzmDmo5EHTzNGQTTRQnhP247PXDsartVzvEUvvGFNX6x",
  "key26": "4ABgzJbnTqdHYqGpzLyXJLvskQtsZbxy7wv84HWvLugGgBxLNtMfRi3TQdgv5UaCgfxexoUnC8w7b51rw5yv7MsJ",
  "key27": "495HSodtW3Wws29shXgZ4snomoVauj9wkjVy7KeLMBMNRzXP15kUnHkGhTzNYsuLVEaGFeXbwcY2Y2RhPQDwo4B8",
  "key28": "A4pTXPtus8CnMUM2q6qdb2fRhwe7WePSqhrrGBYQ4Nd4DQdFninnPhMQE9rP2s1YrL2utpHakhRi1unJLcrfrJK",
  "key29": "SdwU6A7UmTxDFVc6KbxveXjkNeVc4b51EwbNKw5r6oEkAR6v1QjrVuvGqJGRhrANCPLyf3ShftYkaWcVBrjAP3s",
  "key30": "4vNSnVieY6kVZjTb1uxoQ8dFqBhkTzhqbx6ENXDywXekanVc6exBei1tvBz2GpjTC6npQNT5zmatg2moyv6fzbbr",
  "key31": "5Y8dUSVaqG1G3odSW8qE2tha73AJpZoc6cKfHq2XQAPC3RGbuk3HHjqqVagH6R2bZ87HsH4Ye5n16cPvgaCuAV16",
  "key32": "2wKYBQVUqBwfUHp3WSwtUFHViH3KGzvQZpnf7YqV8foTSzCcjTAJWh9wnTJzd1i8wQUpg7r8S2L7zNkxeoyqhkEn",
  "key33": "5Z1UHSZu1jJmNv5PgfpTHCxFmpT7woCJ7SeakMSxF4EatECGfjvWKvVSpZf13crYz54D334nxFYSmoDhGG11kFH4",
  "key34": "22MGgDmyQW9hPrQH72uosPtiQ3d6KmYsNkxyHpmHUjCYkbbcN38oXUKmsbLQZi1ihCkvi9Jwt95btRnSH4LiAVb1",
  "key35": "3GUkS8wvvtFuHhEBVSNQm3oNDa7CBkpGJqpkxAQEPYhdtj9PKQMrNhhVXzwMfdVW2UW7mJYT537antkFuxSdwCuj",
  "key36": "5QMk4sF5GfWdsKfX4edTzbYgS4jCgJ9B3YXCG8MNdMWuUMUvSHLnU5habzomCKoweQRnRH7njp1E6DgMFk7PToTP",
  "key37": "58RDUY2KJTaqSTxP2ZFRuZuSZ8Usnqy2hoWd4CMXeTJcrEkWQVCBgxYzRVBtUWTmj961DA5MTQxzrNthX4YVZcZh",
  "key38": "4dpac9nv7GugBAyKGKdJDVpVoVfwGrQdAgJLxeLmxFddbYXVuiSRfA3m5r8wMFcwkEkhvt1osuvVgax14uu9DMyQ",
  "key39": "ujJ6UGa2RvuiuJ7sDh3GHuf3SMCX2nYQ2ybZsmi5KqfuMLcNp881dcjG55zkZPjZAq1rtgktU4V3sbUMrzoYhby",
  "key40": "4xQnvurn7LE1rxE28LYjuojNsdZeH5GiGkaYPYNfSRegP94oHjNFhrLLzJdeL1AivHgk7QqWQZ7MNUN9J1MdXS9z",
  "key41": "3ZW2cXGJUjpBPDDz5a65Lo14L75XrQxTcXMoxGYx9ZroPS63Az8nbvwjTDdnM1GJA2u27qJRvG5QAYAbnPWpPiij",
  "key42": "4k9nsSeR12V76whLu7D7Q6gpSuR5J7K1jqAUDLQGkjGrK68qsJrC6BFgnCHyRYRxP6DM7XEMbVpWMHoso9eRigad",
  "key43": "3RGi7zQ4SZam2A5fTCxZ6PdVU88rKWHPP1qu1XCoFzFzSpzPdjpDtu4kteScrP3are4RJNPqhxkjPHWymmzvz5bp",
  "key44": "3hbiwPX239bHz4e37a79MNzL3rUFHFp9LUzK68gtmXPf4pHq8vNhdFXRGXqYqiYsG9Jv2RfPkuWqqXLBwQobxJPP",
  "key45": "5h12yCJgSLFGZjeagzNgJEFcSuqQ89SRFkCESBSgjj95v8qt1dy6drGEerdW2sLrCq8xHr47Z4JXCJmzCE5NsomH",
  "key46": "55UA6ce3jQHCKkRJA2GzZKRRkJjA6zW2UaZ7DnQi4vdNSHvdzZRS3VXNDqbbNCXZrNCgYKegT9s5aqAd9AcmGzNS",
  "key47": "37xnjtpK9YpPF9HA9dqaR2GB8gP3i7EEUpcM9x2M4B1NtJhDCLae9DMaeacdz357p7xktJyntEqBgJ1rmEyjez2a",
  "key48": "4d7tC7Y1SJdAEQVK8qKPZTqLwas7cxvzw6btYgLszV6E1tr7szt3eLpLZPWeXAwsUswADwcmWDncdroVSPzYTgnu"
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
