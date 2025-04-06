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
    "5JG9JE1RVe5evKRpcHo1fufs7kNyRH4MzoqLivyhTbPVbobFxu8xcWyY5sNzddPUbYtY6crsM4hPpcQUKaAjENLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4SvmTJymVc6p8P79wJMEctSRtPGHbTeQNjCyx1zv8d2AVKhX2B39RLfP6HuRHaKBGgy1dkGsrXnyccoQvJgABj",
  "key1": "5S66upn3ncF3HL1uxteTBpCycmwFGCdvq7PcRX2bh9gWwbSGScJg2KJTvGCNd78JNKu9PMzoNMzk2m7AwH5zU3Wp",
  "key2": "WX8U54hkqNY95DXNCdArAawjouZdtZHygpgnsUYW5eMK7Hcz7dmUyTgQqiW6GSFBcqAQEKTnqYCGAYwyUZMvf6A",
  "key3": "4vnKeBYjzdX6LzBVVsqA8abECr153D52Gsr3jDXqCh67hzSwmxsmvM7JVADNnipVS33RCydF3LjAFzgaKNzHSnRL",
  "key4": "3ojjfCtCLHR5YGPcyp7Ba8cS2mbMfgf1njyBf57Nf1jFsMrAGbYvJMARtCc7gCkpKk9BFMS845x6hJ64La8pMKHQ",
  "key5": "5d47DGqkvEhnAkJreueFUr4feWAeu6ooVyhY9zUgMPyrcB7Vx3LAyG2LbsDm2y6UVLrMJuVpr8GEwD6VuhF9Gxye",
  "key6": "4p6JEknQPxP1DgcQP3KfiVoLH5nCgjySnQTTkaGCsR81gqiE2P86Vmr4WZu28BV2wN7T994nFun1Q5pX8YGhLbBs",
  "key7": "5YvaCvYv1P1qKYoqdh6ze758PDmujN51gSQWH2rdC4x9oUyHwgWpAxUcH2PFwVCj3bZasyfjFyKNhHeh5nXLJQ5",
  "key8": "2javCiEW2u4r7XwQ37GAQo9z1MicQwc1ToYAvq74i4jF9ps3dLXCGUXbdbtc5rZWywYJpV3YTTX4G852o8pFMXYu",
  "key9": "2TrM6UyHrkGjCPLRbvkraf8vLSv5ahaQ32diW7ZVJE5k1m2CEqtaM54JjcfvwZ1zfK14ES7cWg6zbzMpxcz9hhDa",
  "key10": "3aZ3wFh62QDXxqfZRt9j6WmZq3zNEKuR8f8WNs2E17kEcLVdN7SyB2P2QC9JKFZJtugY2B9Sa36vE5V58TjQo5e6",
  "key11": "NtXD4vQwyDwB6JoFJbGbPFfywE7qnWJC1NHgkqXDkn7jaqLLq2yVZUiL8UkgQZMAH89epgvTcwwkTJyZSXRgEa8",
  "key12": "37fgKC75qfseuGJwsjSvbte4UAEQF62533z2iGVnAXVLtpevjetqJbnA4yMghHKvYYkPH619aobo3oLrrd2KjjCV",
  "key13": "gro2r7g2FKkNNK1aHuPdywgZTKwkgcSG9pzKHQum6mSZJrJHPsQ3Y7s9UysgSMuNEwQWFejP16UQhBKCcv6j6LM",
  "key14": "45VSnLSHWGUgbCnFXDUp8xdeTXchaNBFQ2UP53Wc33H5v9Eg2Vma5BHix4GcfGFZ9pSX6y5VGqehzCekUU4u1tZC",
  "key15": "3bJhb1ts5bo7ff8MMYtDphFPLnjF4AM9GssrtG8JJabGrHEVSiKNkWC2e3iBG6tMCwJAVpeW5rMMyNf7BrqDtN44",
  "key16": "4VeBJ4SmNi1rTj9h7NQJD6uWezW9G1NCnG6pUACAjJ3y2LXg82BRibBXNVe1PCwsXjp3c5G3FuG7VCSyCjaT9ddf",
  "key17": "3d9xjFGnwEbmsqQcySTjj6WFqFN3Rvkc3fnKxXqtAfGi6B4yoBvQfXWHU5m8wCtJSbFSzzvHJhxmzx5Tr3ZHA5W6",
  "key18": "r5HZV3eH4USqMDR1ALg3cfRANorbGwVAksUaDdog3UiARPZj3JKLPPmKL3hpbEP5ZiuvQJmFhXfPgKsyb1qoVV1",
  "key19": "47g8YmMcCxpyfgEBsiJTogWRUJzVZ4czh6V1RC3aZrjenFwGhYvL5BBcjbXfYWBeGKjkNPnZ7ULQcr1jBkiYJ7Gu",
  "key20": "5H9xYpnAghhKc5Mo875U27UbaLfdMUE4ZCay1Ls49MwEhiZJArzp3sdyREapjXrsfWXKEzfeMpF1iiHjv1DgGRXy",
  "key21": "3HoiTDqsryyAnt34WSLaTvn529L589uEULeRXuLSpF2coL41bG9oNJnPaTESA1mG2o4asEgYMrPQmCL6CWM9d4uw",
  "key22": "2Eu9aDdBahTXQVPk3k16hRLPFrJNLTHpF6zNcppTBuHPciiGSNguJ4uxfcj57NJbHjXQhAGW5M5NxxmMuSz8KPF",
  "key23": "3MwieMJR9pKEjkuELP6zxDkbyd6A3sGLeTMaNi9bV2zwbVXSPu8VcjgUNxRGHcxp7GC8xjh9vgJ5UNYjqwNnUGLS",
  "key24": "3fxT7q9h1FATZJuPnNHcsjhYFcCPREVqaw3vtQQ4ZwZt2W2sqE2cj8Vk1ajKnEpcEc9QNh7RzaTbJaXiZ5CsSuzG",
  "key25": "3svRP4uEzvGjKTxtmu53GycAa9pe5CudaS1AHs1Ky8jBfa9S43JXNZ56NwpuA4go9MAQENHKLxiQosBEyDnhmFHX",
  "key26": "2TM29iYgMCzqTw3fR8giXRASzTcpuDCqUfymudBhr2pKg2nP72eswk3p5evQwUfYMSU6PKZebWsnw86rhSsW9TKr",
  "key27": "9VUxicpejuaxT1dsV5UvUPejfhdvvvqsmtmJp6SLeCvY5nLJnVqxJ7xWPNrXDvDAPJVxUW8Lgu9QdcL76ypBkdL",
  "key28": "4d6cVBsqkDTpUA5s2brsdpugggKrGE41nxzBin9CTsqx15ZD3sQuYJb9AAQ7ChDqPk4gTtusQqoeDLJyF9uNrvtK",
  "key29": "3fNouv6J1V87RVxQbyCuV7B9ftogShiLXFaU1PXqc87xu3YeCwzdbJLQ6DBhakT8cCukWkyx82FvVZGK8QyxMa2v",
  "key30": "2jJyVQXaLTty9MBLzCZPyvXTu2d8gqrVcgLJXNks3dhZ7KdaK9CkKgNTrCGzGRHGBsnsV5xXoytiNRXUdaqLC2J4",
  "key31": "CGcisKYCAbGAQJp7A823m7uiGyWMQ2BNfoQ2szGoqfn4tqb21QZsJ4r9eHenxuYAgmDbEecc9k7KbADYho8ZXau",
  "key32": "3ubpHA1q2YoWyXeHsT3sikZmJbY9EzUJCBDmw27v2iK5wvbyyua9XiLD9vebQsrPC5MAm4gFvhzrPj6Y3oVrmZP1",
  "key33": "bniMHTre2hPDQmCzfa4sWEmYU5LoFnmdHZWTGSCzSsgjDCpGVR2Azs4ziuj6z4ag1oUJafZu1gQ2s7NCBwBLuJd",
  "key34": "5QuMH5dCS9Rnr1eNwShGQnqvtkj5nWLp4PVmEoCqmYD3DsFcEc5RjkG6Lg98jbbJCRu9uFKbyxAhizmqcKCoG5WH",
  "key35": "2iNG9TtgCCzUaz2Prqny6RDaCvkZkFySSb1DAkbVU1UjEJrEYEfVWSZcCCdp9cBhnKhcdyKqnQwsCdHmY5TmSA92",
  "key36": "52UjyRyeoAN34Hx1kAhZuiYy1WyLdCes7oexh8jjAFMMscYvDuSXMatFRuy3Qp9UTbh8ApzU1c1xrgsxehWE3EGd",
  "key37": "2o2Qf9CFPz1Yiiz6vFbcYp6GFEsXKMEF6q7Qa4XEEpoBP2G9T4drUvaGwuqLRugKog3kRAxUMBALdjxUJKLJC933",
  "key38": "2e6j1gMVWi5cMiozd8U23DNiwwcFBqrdEs5WVS9NLpjKBzPk92WpJfdva1QXSfXkD8SpZawxZECjjTmXz691wMCy",
  "key39": "2txzjoR2YE8xHAeN1LNW22xfZKNN3dZcXsiaEU7B9UeeowJHdkCCkYvpRsgr9kxrK519GoTuw9D2RdgFQ6cGD28n",
  "key40": "2kN5ve62yugjbAd8ygH4BhoRHJVV6ADYJcQNAsjAscxBxQCiqyFvhqCcHAWdaAw149wzAkNpW6G4SC1NtYoyDRZX",
  "key41": "4mbANc9TqrvZ7ca1MMWa3SEX2w5ipHvwRap5ZXPwA2KrKw6Na7pnr8jMnTL6Qm7t56djshmEVp2tzYd1NP1okyF9",
  "key42": "34CixDXY8omRREpEo3TXcrbjeo93D4y3Gv5XhhADjqfCfeQxvENVwYKMmt1de7Jk1RMCoauEd22TpvLjx1nkCEjq"
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
