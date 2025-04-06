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
    "4L8qte5mdc8freJHd9iyQMP84jC948RCJy3oVZHSGvthqw3D2SJsaTzvYaBCufjn1F2TsyjLVFSmSa4XNrUhrLr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SS9nCp2hq2rVAjyiPr2qoPS9UpCgcpuVYoVrBiqbvmvaHhQifYhbPQkHoCnU9J5JNtmVkavKuCUGfyKdsr5EozQ",
  "key1": "2RvtY5GtxHDbV13qcKcFv1BLemRBWiLcmpQ8eCc7nqvSMpGi7vCMzX4cYE9b7WejRxkppmYKswCppim3rxjSi4Tb",
  "key2": "2nLCx54PFQGujXH4vroN3VxdHp7K9n1A86hYRHTFjTKCuoehCrHXV9kLqsPvhjidd9hfLewJmJJ4WHrhv5QFqaoY",
  "key3": "2kavBgPyeVhhZ7my2bA1jkP2yAiRkbFTEMbxMimnwxfKTgvXBTyMoG36oZGaCiaBQwStESXnY83fuTh9K6sv1CkY",
  "key4": "4qB8nk8ew8Ut8Fs8SsnsD8FQEwEQinc3za7GagDEkjKHqqMBkwMqayxbFH4vitLwvpAeFu6KtCQcb3jurE8jugi2",
  "key5": "2spAaPeB4HfBHKT14qrr1chuJkMwRcikTmC3tmtwFZhAFyZWiPUKxixcZ5Nx9GSRwMTcCrbrMY8PtK55xVyJqRup",
  "key6": "5Sfm5vWwm4kR7RD6SGanJfX2AAj3758CN6q1QMKXooK4HHd5NKXkpXmzvTLQQAvpaMpLA5zauTJbAhWp5K9JcXSB",
  "key7": "5wpw9R7UMHHdPAhPU6BVrhLxovxGwtgQ3j6R2HD9eM1H7CvuVkPQqSSP9NGooh689K99xRDZnkubMhP9BB1XsRus",
  "key8": "51SLDtRWLLKNnrhLigWHvRhjmfwtX99Nm8RcGMWr9wJr6mZ2THLtehDCrCQENedBcwf51TuYJV1AH7kGddpptkFx",
  "key9": "JuN91AkSAqpmiKBHip53YEG2RekDys4mS6rNUAm5h6iqSRx8K7TgzHXqgTywTGee73GRa8ZGNKsuyxViCViZzSB",
  "key10": "5ueCJnc9gx42NPCKruL4fLbcUJRFtuZu4L26a5WTZZ721d4Zd3RxooxSY6Swo4cwq3UommaPQErAJWXUgvJS64FT",
  "key11": "5SiAnHRDRX4ZHmQC2oiJzNVNjgGNdFUJX8pofm3Sf5ia8Ayt8CPN9Lbg4E6zunUx6DwwjnUZvXtS5UeC6TJTmg8J",
  "key12": "58NG9A1dHMfyhbSodbR4MQKiRRZPbTFxmq1co2xWj74x7Pfg8c4E9NgYaMWtJsUdDJ72rVJEHpNMi8WaBzXD3sAv",
  "key13": "2SZQ6KsPB4eMBX2xNnBGjKdsA1uMdCzzp8pvRd2LPtrLy5mWNhT6uwyH6JPhRa97K74ahKemtCJaL4SSTSVzY58Y",
  "key14": "5RLpRCbAnvMA6rLP38zCC6zUeaDgSsPKFjz7WYsn78eAWDBcq33mz2PWXgXd31xjz6aCrNqCT22yaFP6JNkESxi5",
  "key15": "ZN4cb8hxpJjmGoHAvDLSYeHJUmSTqNsPS42uw15qjToY1Vt5hsjLfJSJUosUDFZP6UrEbdNpzV8CpqxKGue8Udj",
  "key16": "QbYLRhTHeBDed8AfqCV9GTuXjfoSABVb4ZvCJkHSALMGovDYLjaKAwJuLcLMBKEqtuhT3JmtFRznRs15Zq2JjNc",
  "key17": "3FtUCHFuQeyCoGLKew58jf1guEtHVRGQFwxcLFbLHVTc2ABSDHsqxiRjCD1wCaqaweRUKCFMrtVZaVc8sXXv551B",
  "key18": "4zbQDPHupu7u6ikUGy2j5BLzbN6oZQo2fG1gi3vM5NuZXAwaLAfuePzjCX8MRfZ8quTFhr8PecbBmWK4UK4bfutd",
  "key19": "bxnQ6qzPKp7e9Jyu9o5NuQ64MczUoiaPSVhL9fgxhQT9pgR4cNYTgYghtPWxFrcUqEfJaqzvAaMzccyTLipZzyR",
  "key20": "3Aa8n2wDjj27ABJ6wP7x2evaU24ho7rHUrHGRSfEKdUH2Eb9gSw1f4Vbk8PcAYJBDfR72H47DG8yuwqzuzyEZWF1",
  "key21": "uQobyP7GPpX8KK1E8tJFbwFhbVJAUwKqQK9aVvrmTEV1kvAKM45Aam811eVuqfaDq5KLLyewYVYpW2mYRGSpLt8",
  "key22": "36NmGBqQ4ut1pdcz1C7FBu5us9YJxitijNaBNBShBr9WK2FDzk9vQvmtsVZC2D5oNTo3tJsc785vgi5zNeeBVs94",
  "key23": "5CDf4v2bHZXg3D7jdca38MK77MNxSoHr14pfbtzyqfvJA4G8QR78feP56LkLvQtvejbrN2EvLm9USrVk3Nh1EaSw",
  "key24": "BjwRnTnj8PfSxFSHqQxuZCoVSuNvYzeFUaWtXhPWPV78HXQXFXhvstgJqsydr2BHPWPyS6orZChhV41qDRnDcA7",
  "key25": "36NouZ5RLfhwTaZ9LoxsCtou3d8jrqmTkVWR36QnfsuH4y9WV9o5932MCyyQJP1LJN8rfxRsMqrUfNpnQjmdRm1o",
  "key26": "5ZpAETKswYY56YvFuxF1KHNr2CYZPZm5wFEkmww1PCT8rbuiou51bmQ4oZ2DbKosASNbtSwBAHo9sYtgFvifa7QQ",
  "key27": "kGUPDVi5iLzQBzuj6cqtWXkHpnkyujqAHt2Arh4E7h7kEkXim3pjLYgq4ZLgkE3c8KcdG99W8hbBwu5Uu2QJoMf",
  "key28": "47jKwk5yDH5HT73EUPFSPHaT31fAPzULnoCP9nGRHGrKNAoCv6rZubjbTk5FiQcsTV5M7sqFgwVfkGAS9xQZPHFi",
  "key29": "3uMVFzLwmJe3ogwDCfWFY1YnGMnDuE4ByGtPtyRTnCHLJ2xyhnpQQzVFL6FhdRYdLBirXYox9E7mtejfjoGonxHH",
  "key30": "3Q9y632Q3oX6pQeigVyXcgdGd6pKsLs8E1GJpJE9FUgXh2PHTcbkbYEWruguEMbsq7JpMs8ZzPrV8gudm3cYKLe9",
  "key31": "4WD3GdRz3sSjcfV7atRy6LhyTCUrCBVV3hxD1dZTSfLyouUHxNZqM5rvCXSKFdnZQS1x4Y8fQmK8DEDjnLnXMtBP",
  "key32": "5hJqxPY6AbAzg39Dfhc4Xf19pF9AyrjHBy7PTdqz5Q9FygNj6HvMGvaXtXaMw6fMTaCbRS91Sx124kQVBJDfhLn1",
  "key33": "5A8wq3MmmLrymx6fAoU4qPmbnGwyw5NZn6wuEgkv7TPhfhnwpaoRt9HWBWF9AsUvTQySFWjnUFXiEbiySmditmb1",
  "key34": "7nJHrUrQHpjeM3hzTqBjvYCzfcgq7BU7BCn27f34HGrbjj1DMGh2vzADYVnCbUmLeDmixQsVo9WJMyB7eD11mox",
  "key35": "SiJ2NhkKsnMfFcMxBywAKE5NbCyBon3sHpfH9ap7f7wmtyDunNV9uED7vtD4ij6q6r5Fs9G97nXv8n8VnXMYw4r",
  "key36": "dNvPykV8VnraAq9J42MiCvSboEXjNeAeybZm5wiHkQkVynSWRAqYPaLq8uraLY6Jb5dsvTSnH3tTEvD6BizChuj",
  "key37": "38tfYVXRW84bw4aMKXSULFpYFREUh3TEAXvNS1Mjw9aWEBd3B8Mfr5bk4jsn7KAaaQ9atxkiSKBL44Zp7EwSrbQK",
  "key38": "6AFpTBK6TZCfym7P9rT11erZ6fHZd4KSDUiQ2d9CgKnWwNCwtbrtucp9PisWn3ENUXkRxsSkA2RqBaKtSbd5Udp",
  "key39": "2drRCio45eoXUfVrWjh5y7WNn43XsH85BFw4nvDsNjM3wWomv1M3p9c5aiAebX6mNn89fNhjmUGPErhr3UpfeU3",
  "key40": "5iWWg3VRt4UHjdjyQ6wZbhaBTBKPR1LAGtQ9Y42ePgczHRsFysw51AaEHT1X3jvbM1o8BknFqz8S2rdmGtevbUeB",
  "key41": "3qU3qXmYq1PnQafcEDzEBYT9Z91CNdyM8dSQpDxkYKKUhdEEQ3T9ZWeqyQ5YZxBGTDq3wXceU3Xhn9zTtV56LyM9",
  "key42": "4cJoYPBThkLNdr5nB4odcWQ5psU7Ptf9Uh7JE9LiM3McSdWS9yXzBabvA71Qo6xwA1wAHvedDEvGu8vnnopqQBPN",
  "key43": "8FafbLjSbrXVXyXJDx7bF6RrVJFUiu8rXuEP4BVDnw5Jny1oSvfZ3w1dZiQyi9j3JeR5PiRUemnjr6JF1FdZLHG",
  "key44": "5RraGo7ZuRtNeWyr68i861EhFXTpNP5nU4Mn7oRpVd94N4V9pH43cc9ehaqs1MkBj7krSM1u1daHCocaqct6avp5",
  "key45": "3Lu5gb5oQJS743foeugKyALFqvg9eRsneXreveVK7S9znMivybnwfj744jLnhKAzfz7mCtY1h4JaUpJH3Xwx1jcC"
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
