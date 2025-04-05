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
    "3T1diNb8sZnuR83hiSMithESM8VFdPsVmaAwzVWod7AtuYigYQcxpCgZiSH58D8MtWsYj5QiUHuQJxP3MRoZ8f1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KUVuKYAdt9v4wjLQX9bsHiZR7PpLz4VHvbAWygmwp4i2pPWV847cVruE3Xvo1951CyGHN1C4QVKswDnVfAQHiVF",
  "key1": "4VjAAasRwuiwbUqwJHhZxvXzZ1yi2KvGteDvRuuYhM6KKDojDtYNrKbRqjNDxjPfQjWSntTMpuX1PCMMmf2YvG6e",
  "key2": "67DJgpFFBwUjG6VRfT8pNfATVFsUhECEL5AQHCmbX1WsyUyQ2CP3c4tCE9FWjDnWKAwF6PW5zd6mC5S4gtZUdbrk",
  "key3": "4dMcu5db6TzKDEA7rwwE2VaPBZYw9La4ZtJF83MZtpPwgCyF6vyExJop6b8GZQ5whdbzYkCXFDLsz9KQigpf5g9c",
  "key4": "5XS2uVMctJ8C156hDBdnTQNDL6jfXZj45eDpJ1D8Qno7HMVBfFVzZmPf3GVBkiJHVPCMcdumtb6dL1X17UXVjKt9",
  "key5": "5WtSQZMX8JM3nvisfhTVfnJnJxZdQF29n5NGzQN5cYz9o2neR4cq4XUp2t9w7SkKhMcKJB8TDcFqACPo7yn4bZwv",
  "key6": "5TCJveb9NeB6h7zZDVgYDkvi5hYy1YCTRxZ9CM9qFxd9Gb4wfYqsS6d3ZDRDpSSnjkqaB5Au4fBexqzFkGMmib9e",
  "key7": "2rYp9TCxNS8MQkQ3rHaet7kqARKcM9DmHSy96HognoThW8AgkKxPVzGZHRq5J3dvpsartcfX45JjpxP62HgpRWcq",
  "key8": "456esk5AKkhDBPrBadp7RMmUnzUokicbqEqDu8rP6iAeB6zoQC7z9A69djDBFPKKLzgivKFavbSmb5koMNqNsbMM",
  "key9": "53XScreAkjASq9oa8QDAFUoG4XHKtVxnVKYMV5i5SddaUCNVmRQCTR9TqHVCRb5UhAhnHtjtjxXzQdMv69j9sa2E",
  "key10": "4RT1UNUAdUB1MDmy6YKyVsMG2DDzbBNJLNK9M6zS2GBVADfAryoiJ4EtE7KJizh3cetZK9qysF6JkMqTnMrxc8LG",
  "key11": "4wtJZptAirVZymUz1URg7fuARCEd1nuxWSU5UsKHX4CfT9kyJwQN3A4ZzpnLMx8sBCFrecv3kU35FfQekRMQpXrs",
  "key12": "43CJvY43LzrZNgrmMDaogo7awJjkLyuho2cda39MgybaARPhJz21pU8Vbs5fGrvhrBmMREDCwmY3TAevAybLauuJ",
  "key13": "2sTU3qkYBLaktL49BiYAkSn35BhNKBHcvvww1hpc8RgK9FrRgkeErUaPyntoqAU1MpiRX8frcYq6LmkpivAW2CMQ",
  "key14": "5kYkFDzNLmzv7C68k8igicsZFysMs8LQvPwieSWp5YSUGnZkaSV8iCSVL28T62t19GjQNiN3YCniYsz87KXefjKi",
  "key15": "2rAaJZTaVFr8wk91T69Q6euML6bhKKfd6cDt62rBS3Lm9BCJfUs2Jfhr7HfdrF32QFKc9GCeus4Nniyknr2s6jtG",
  "key16": "mB27gNQLXivBFCRnivrE8B8mkFN5czcM3zLd6PNwadN29J7pLemZtaay8TDTEAoBrwk758WnckDMCyUcXqoFdcx",
  "key17": "57cMTaoQgujnzmzoFHNSRPqCdcHu6b7QvPxvAyw8ApkV7R8huHHeJh9MvFULTN1RGm4ZSew8dXNoj77LxgteqsAi",
  "key18": "39rY7UT3dM9ajPpkQfH3Z6bb3xSizX7ogSUAesie5Pre5VweE7oqPqNZ7nV75HPopx4NX49WqAhrmSxZoVfLB6r9",
  "key19": "w6aFx1x7Cnr27cAdJq6jm6b9DTyzQuvqmAPnk8kjE1KVn6XSvMXpeTwxDoGevegf9ZGrRhAmNVijrKL1VUx6tTG",
  "key20": "5WLPfd4yeHcFfuZ4maJn4dRKAbzAmHE5pyu5wsVgSswoANayfok5CengcBdhyPtGBDdardyGmWC6iMXCTthfFFdW",
  "key21": "3fNRJZkJKjHu1CoKwhH5Qj7AZFn6dv7Wr7d34U3BLBujNih3KzdeToRKiRWPSyyN2FgUgRjiZuoqVQ1ieXxuU6hq",
  "key22": "nAo9LctDrVmTkMYgDPX7L8bZPRZ4dTSQLAPx8X9dEw79hBaARuNAKKNKgr2rnWxwZUiv2ajtra1Kvw18WAvCiGc",
  "key23": "3BaXeFLJZ3gvs53ECYpJSnZCjb9bK6CoPcskCb2Gy2796b7DjLnFPpRrSxxVHonvTv3jJcn38ozoz46JUEYiyXVH",
  "key24": "5kHUgVexfbGauWYaCmvot6WgZ2sbT74HwzyGf4oiEYNpX5G659Do3UWLEFawV5Ms8nXixu3oJhggHtb1wh5Xsbaw",
  "key25": "5wQCSCYWFTc6rfDzHD3Pk9r9fYcr9zav2Y2m8NwCViZXsYVtWdhiMo7s8B39pXJ3BfqFysfGV1q9wmJw1USSgzRG",
  "key26": "4WzYEixkWdNa7k9xwfbTE9Tw7WdfgN51DhDkvBei4NrU5js8gNYV2D7SwpHvGKb78rRRGc8GyKpCSySr2TmH3zkX",
  "key27": "HFhZH7DbnCx5sk4Ag1skUfNSpqow71Mjw7W9ynswzYo2zidsDbaJDTbWyedwH9HjqeKBMf5ZwEUeomdqEUehKiL",
  "key28": "3hwySZfWtoHXJNfpKgsHLEKDRt3ikfXYHdzMVcjqcww7MCgUoJmtKqrBGkAzasuh4ZMv8KrFcUnDQGykbsf8Av7n",
  "key29": "acV4y8dABxywR936y4dQJTwyU1gHwcdy24LwQzud9tK1vHA1XcsYYKqTDcccA36YCNhwyTFEQp4BJBNq1ZSgCd1",
  "key30": "2hKfNozMqky1pyfNFG7vgocWSTNZacgiMWu72ZCQFiq7TQdHauUFKphfQfCUGdvKg6cAH6Ka5W56Eh5a22KJEeoy",
  "key31": "2j7jfomQLuB2bTsrnvpUWWw5efgPYXQKQ2EXwQfNjvJp1NehxhjvTP4xxqyuJwLb8TopACAGqLiExBxzTfxNd5aR",
  "key32": "3o7nYPz92HiridX56aWqKFi72XuX7SjAaZb8SP3sSEdc9zM4t4fYtRbTbKPBdYvkWcMmjHfmpFUscYzwTf5Mk2Zw",
  "key33": "3eRpBQ9dyQxVg1UvrGKLt8veYJdGpWsehMLQDJinK42DkJabHZsnUVD8SXdY4L5NFaG9djYwrL1BagbbrPziqqt4",
  "key34": "3cHXK2gBc8zDbJfX3CEhWjofWKzBp7AexwMisSCYCrdpnRkT93nRrv9ceYfRPbuLCum9YewyaJPCPz4GRBeRH217",
  "key35": "5FrDFygkrQLvwQp1eMbzHsgxt46RrAjLMvN7HbGnPXvcXsEUPLzYfNmwEcsZ4Cd6obpiQZEAGwu4zKPuDKweCRwu",
  "key36": "37dNMAGbNhbXnNP88WYsvLp9fBbz31A2YxcToYbXLvZsqzzLj1A4oeiA1Evcddmh8WmgAvZeYj6aiLh1fBanG4Rt",
  "key37": "22jvxbedvcaevxPU7xbde6ktPQoQkS1jSWeT2xC4arn8WwivXxskVwxD5Zf24kVcR5EyY1xSow1qNnbbNmMe5zqY",
  "key38": "o9RPXSXggRaPkwuRdD9WQQ5nfbn5jaoNMLi1cxzwpNR3UCCxwJmwuFfLC1uAfrF17LnCQy5Dbbd7QAMY7aDGrKb",
  "key39": "yd6rjDjrMxMTgW5toZ4DbCP8MigtK29NoTnZN5nhcGgpW1QS1cqyTq5ja5hAY15ch99UQhsJbPDUhvidhXa4X1h",
  "key40": "43ZTv7DgSvRFhCBPH9eRyQit3kjCAS4KbuLBwcycpjRGnYG48QUZ3jChrH67dXSXpBcYpqo64ZEGKnZfG5Qbz4Jh",
  "key41": "5XfjXC67yPEeGHsgNnsKH6Ef3TtdHSedM2TqVrU7WK1uLVyDnv2mPUvsz9rNF6tdmxrh4MYotCwgXXz9whxmwmoV",
  "key42": "4gpxPkWiMhMpiCqbMLKR7M3hT4r82c2n5kCi2AXBLrJmLS16VM5SZTeDkr3MWhvWYiuynds6bgbfLeemYvoUfniQ",
  "key43": "P71ZzSUCXYMN1uHeWKdGY12vNbJ5yKazqPT1baCyWAwvqdsiCaJJiK9SR9KecMkTJUwLzy1tp2DfzS3BKRZPxqP"
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
