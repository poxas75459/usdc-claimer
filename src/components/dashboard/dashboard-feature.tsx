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
    "2vWUz3wcYi8RnqLWqUm2CENCc96nn344WTYY2hgXvg91Du6vmzuqQrNwsACiaxfq8Rw7Leg6PrFZX6zLuWeE297r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvxYfAbkPs8ULR5vGcUUCf77XhXFh1KxMFPAxTybozEnJBi75ABwZn62H3n6FggTwoBFQSRdVtJuoGgRvatBS5C",
  "key1": "65b9SXF8doXKXVm4Yg1YXk9xESFbZBppYsW9GSzo2kNCdCWxhwgww1PARFsEjRioggnnQe1LFjPEyyC14Zpecerd",
  "key2": "3RKNhhU1RPV8wnHxcWxnqaVve4XgzpXotTSsDV2NruifJLAodGzNQ1wuFuTjHZJkuHAmKjGsq3rKdWqU4yvvAGWd",
  "key3": "4dsXsKvHjvwyKGc1e1f6AeKYP1nLxqjgaDsSU4kAMNZYLq7Zvt3Fn9Ptgd7S48epeLvh612YMF2JZA58uUfWPsfE",
  "key4": "382r4b32zmWMug3RXVrvA4t8MvYnKrriCN6tRHF1sJaj1F5drgrpYTTwfhsjqm2Fe65d26LvcRUcU34jm3w1McdR",
  "key5": "3Wzb46V8Rd8Qb1uRnNhtchJ27DnW8Sc5GauH7rgdQKbzpkQH1i2S1qZmYAbxR8pPN3jz79Ts46zQKaroWHhkW7oV",
  "key6": "zj1JerG1S3ym5YyTdJd5Cmq2NxFz4wrs5UuXqixrQTwuSE2ZL5zD4FhdJQq3a63mL2dJf2yuYuX9ANbUQ75f3qL",
  "key7": "41WEwZe5GnB4R4ZhiywbDzQZeT4CoveyrwSkSL3oauH76EQvchrAMe88DQdWfqXquFojpq2HfHoPi7cfX1m7GTAm",
  "key8": "5PF6hdE542Vi4A8saVSvNUaCtSWfMmLbRbiAVtDDsjPxHRc2yb1Y1QwewZq5LksanRHBkkjkMbaQ4booJ6Pydroc",
  "key9": "2g6QYjt3Fvsq1oRMxdFsk5DGaVTgo7YfDq2EY27qaGJtvUKXkSfnWVuQkCnG4pCs4mRtnJRUWRu1GUi3iY58vCA1",
  "key10": "4ZHeEmBTFcrdyDHMy49G9H9snN2dZBQ9c3SzUL5LZo4jD6W3EmcmZh76fi2nnwbhv1S4RSRiKjRFW4hbSAygffzf",
  "key11": "3sq8EhbJeHA1shAR3SS9iDBRTFM3ELDsgo3fnpHSgGez5bBpQDiKjBsTxLJCBE1eVi1j8ugee4ssAkCoaACobuXG",
  "key12": "5REMyH2MLeyvMgd6aSGMZuz9Drd18aiEK96WiFdY7v1dNL9eMmNi1H7AzW1deLAvhaE1Nrc1oBVgUnsY2XZJmWrX",
  "key13": "35Hbq72X6x7ypbxK5xgU8XzpLeYqBGQ4cSeTmMekWJQUV4MBGKZ4vFt7KXSsCwpDu9ZcDpfwgK8gib99YFfwxaAe",
  "key14": "4HY98PALSuR7BLsAeJ2tDjtEbheKNnz2Wo79dTGpmocMweqoWp4htKMF1oghbeNVd5EqPm7CbDbLezF8BEYoZWFe",
  "key15": "24G68Equ2g2cArm8naQPd5UrQyAfhkrVGpoLfconKBYfusLCESXK9ewAxnbkd7F2T1vsGJH7uvixa9HSEeUKJu3w",
  "key16": "1ZBKSH3qK8ZAW3H12WDWucTP6AiYKqJmJqUF3ZkFHhHmPbdwAuigf4ECCxTZpsco5DAbG52FJFzfSHUNyGuc42m",
  "key17": "3SbiUGWcmxLjscStYNjJ95ufqX6eDXMThBNH1yhYWmaKEwivXwJt9DqSZvbAKz7YiKVnDg5HmjN5417vsibEhj8k",
  "key18": "MPKkMXy6ckQLGBGpw1ZUkVNN4B6zqCZekKR4iHRAa5ijWcsuZ4c9jPoT1QxGXiK6dtLDFr5j2WUBGA2TAZuC7Gv",
  "key19": "53TMVMpwf8mZvgRDnCzNaQCrimpnnqS21s1guQfyCuwH9J5Bd3XbxxLJ6t9efxeheHvBe9AZouGRSTndmu35omZP",
  "key20": "23wKBnh7cyDeqEKAe3YTUbDjsj979PTyTwkq8oGBmRBKGN6xvdYHNRGJ2wFC511ndBH1jVU5Vc2fZKZK421k8Qz5",
  "key21": "3jRr3G33TJxv4vKEvxvZSpAS9pZQQGTwajAsVBFfamw4hnBKEShj1vsJ77CgTEFm5CugRqewZCxLRU6nCies2yzs",
  "key22": "Xy2qgxLG1woLNagQtxspLDCXZLhJGveLTPG9y8oP4ri6S69Bt8Mg27kpM4FQfpoxcfEJbetqz6Htj2M79ZGsKjw",
  "key23": "42RKQevC1pV5qmwSK8UQqCk9CvhaaoucLD3EL5PFzM2bjGD7SiB3v16bZnuvHF9BPWkHe6po8AGyzXsg6qsu6rgS",
  "key24": "56iH8VXgnMugF1RYYCjufwawYwqsZZMQdxoDfufSkiFszhtEPTPkAr57AQbe8gywK4fh52TC4iu1GJDKPCGBvgzi",
  "key25": "TdT3tQahD57tPfm93yYcGBuoh5S2SF8wW4akP2Xv2ZrcUV5yVJtpPork4kVPx5KoNqGtpNTbS48TXEv7VkYpdxr",
  "key26": "41ebH3S8zt9BmGGW3XRjs6NZhj8c6BsvfCPaNNH5hc1yyyD6NMos8BySLKTMEvGCU2hcWLyKtU8qquwX5Br5aBiy",
  "key27": "etGoX6PNtq7pMvfRCz7y9wknhyhdApFyVFHbd6uQKHV6dCvHJLk3vZ5YhsngsdiewDo1tiLVqXg8vZrGnT1acb8",
  "key28": "3ErGo3q6c5BKBDHRwUgXXHnDh4ar2cwAJVjjbz3sgzu98kFizAjDBY58uvCGf7ummk5wk4gSwAzhavh41GCp7oWH",
  "key29": "4Fy2iQEb9BeYVomQ56XtsWWiGEQqS3tz2zJBQLYb9z3CYP3fr6c6n7sfnPwo8gV2QsVQ97DQQ3hpqnibSSmKc5Pk",
  "key30": "3A97ZDkNH7tkPRgnupJm9K3BNyF68qwgADywNiSvWYHuYJv8AHwMNDD35vFadXHSsGYWBqDfrcNRfxthij3ugbzZ",
  "key31": "wUHv7Wxa8htsVB8jD5JE6xonKD3RMjjYyKpxzE5T8TLowNhKnWsz8SPeX6C4KFKdayotDhE58C4hUNy97Z2xAzX",
  "key32": "4SQpk7v3guus3hXktv6rR2Y8qnZ8Bw744CuhsKs5wx2cdTW1SRozB4jt7pRPxL8q1maC54z71cUpEda9yyoPV17a"
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
