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
    "3HgWmuzmK7ZyjtnPfVy9rzbjepXq9DdaJ7Whu7fAC5NKKxWN8zBXNp7V3xC3r9v8y1UHbQ1miP9x48kcFhxh4dgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CA6dKivknMAU4WV9XzzUsAKwZJEeWRkdthPzp31Cz4iv9jwbdK2pZrbLRkYcpdN5ZchqgnjBdoQKi8Kiq7Yve7",
  "key1": "5yJtxpGBbkzSZj9a3LL7Cx7AM4Q5aQgU4s3Fmrp1kwrD84SdnSP18uyde5mvSoS1PhiPMGBKv7csWtAUQUqifPWS",
  "key2": "3ZX9cSJYuRfPFc8Sr39WYCgy6pprCzdZ43VML4nHedBjKf1v1fmcvZUqUtvyiq1zdm3Z4fK7osgDdtaqqcxGHWe1",
  "key3": "iQ57TjGU9mPw595vvxeJE5VvzWrJ5sncdiFZ2McMrCF7wAanbXFLuLynPtSxKMozn6Tn3UwZrLX8gJFDdujE8gz",
  "key4": "64hbbGZgBkeMyQy5mio2nZnm8Zpwia8Wd3C6gMGDQAgS8GUtQeyoqwsvQ2jM8vs7319FFt8j1uvzZDqX6vrx1mbR",
  "key5": "3NvYBRKzJqKH4TbyhtCDFtFPa9p4fABqDBGQHQnY7P6y9rqTto9jKUU25GDazKWEsC2dabbcW1Zmvb99TgNhgrg4",
  "key6": "3NiuVzU7Eiep1J13KFQMZgyuLvawE7jqXodMpUsLwiBYHdKLDQzXJw8N1V4MR5yU6o5G5R5dPY2eApx1Few6JdWd",
  "key7": "659novJsFjTX5UgENi7VcdKS7A9nPzT6eBJW6RQ8EbhdtCTRVptskDopPXKCZBvxDFkTTPZ7TVNyvyVgYfE9V89M",
  "key8": "34zRo6j6tWJwXTRKqUgDTTMYW7yisLb55vP3BWAZ1ea5yA5sjF81viQY89EWvuRAvre9cX7Spot8kyVep1P7PTtU",
  "key9": "1XwmtfWJU7weuxHhYJgqTvRyp1W3KPWmQJ41yzfYnA3SAVBRVCDkCqjqNFvb4PRcioi7UfRLc81Wj6VNkEHhZz3",
  "key10": "3F8iZtypUKkJ1zsk6Em4qpafQVmZ7AMaBD4WnTvJh5jH61Fp8yfdZ642RP7uzf5F7obLJceNaqHdDyYQCMtsLHU4",
  "key11": "2JuBq32btjBr2bjYYezJ6V7TiKMFcTMThEzdBTrgyYH94xMMaMD9a1CJoziomd8f75Yww7KZGDUapm3z2RinSqum",
  "key12": "iS34Ans9BzVTStkeHLvhvw8iNEDB6ef1mYTspKJoUbi4A1X4MFUgdzCzMvt5VN8HFMhmuA11VHxMHBFUsZtx2vB",
  "key13": "3qvfMWvYWXSeusR6juMm6dciTFUqjk8VsSq8MY23TuRr1787ZZEDmbHKG5wpe5LLiB9hE1BQTpuf4xLHyxsiCJpS",
  "key14": "H7MDLPcNps42y2ckmrduc885UENoE1SjrDDZUGh2aQcqbukG4kzfPniiLSwUNTjfgayxwS28wKET1kNN8261i5N",
  "key15": "22NvnpepwbCJLpGt2p8hxodmTXifN1Wyx1Jnm22LH2V8fYkXwqsqWQgqSf6APGbiLfL3wcjLvSC1Z4reKJD6V6tT",
  "key16": "5izYeBbBvVk26cvBSeK7PjqEM183h9wGj5RynfqhtrJ55os3MLG8E8h3mjyM3f2R6z1JdFcKq8QhEjeR4WhYAyND",
  "key17": "3bYmafKwLMYWTT4noegHGfummYwgTufuzXYAadQMwmHK6HzPb431b8gLvB6KAJyjq6YyDg6wvW3eEKUvqac2mZiJ",
  "key18": "9y5PPuRP3yqPgrBfmpKa1WrGYawMUwthBEVRjRQH3BsuNRUh1gW6jycFa3mPAM2tYQdkwCCRyNeiBRbvBiKGMW4",
  "key19": "qywuKjGDytCnuAiPNmSXGnJpi2jQ7Y2qG9aQeZMQRUxqdd9yz6WJB5CG6K1CFuQbPT5gmXhnnQT7eWbeCTiB1wk",
  "key20": "3Cxfug9EYG7ohZR6GXmqdrzTaExZYBt8GtLYdJHQ9gwnV9fHnqGE5piKGiP7qmMFbPBskDc9cx6eK819ogdTQgdH",
  "key21": "7P1FGtx3vMcxPWuHohPMS9fbhJsYaRCUsqPVrVK7YQdmxgMfaBrAy7N8W3tRxbPwSuiWqxDqsSzFopgFiVbw3zz",
  "key22": "2RbcSeNEk9qkFTP8nvoKH1U7qS6CKwPkZAh1UR7nsFRqv44ULXaYd5HXDFQ6x3MP7drzwt5vocwT1AgcdHZeaaPY",
  "key23": "4aAenmJyAN5suP6e5fxZR3qdwzC6JK71THy5oV3UrjYaiYnJ7qzgyZY3GztToEwWcUHHL8PxciWXBAJa45Q4Lsg7",
  "key24": "569kGTgRraxD4vR62UVmxDirikyDNmyZCgPdDX4yvQRfZBiDg9sHyYaHwNN5WVRVLgM75596aqtv6BeMcVoauGVm",
  "key25": "okSSB7misaRMDS9Xv3FMVJbjYEosjJUvH8QaGKvHg5nB5ZYPyuyrh4Hs142bxM5uZ94i1noRvdg6yenXgi5Tn9R",
  "key26": "2bdnMgV8HPMkx3BGd5HqVGWiCVWMLaCyMZbv9YvJ9ee3C5VyHjrwJ3bWte5ePt44iC5wYiH8SECyjPpDHv93U39E",
  "key27": "4YqK5mEgk9xHz4LDAHLgtGwdbYo3gzgpw4c4JFcJmyutWFbEq9ADUR3bvvEaPPvGg6YmzZmMfVUsgzrzL6TtQSLg",
  "key28": "ga8KgvcY3knmnyKPAD18vStEQ5haWBaKw4LEuCzKjCP87cKCXzn71ECArEoKtNgbf2ukzwPMcrRzpxbP45ZVEUB",
  "key29": "5nDW5LUHQen7zgv8wf3i6LRmGxoARqTffgsCKoz31axGheyrkcAaVh8yswU5rNboGix5YGCoZZQXQ9DZtXYvmS7g",
  "key30": "5xvJPzwtii8gdsWKGzpTERynVxPrnQhw3f9njzcZTDsNuxwA4CSNw99FuzQcMMVb46MUwuxCFLxGffLQnwdJgt32",
  "key31": "23AGRdkUeTVyAfV5EKBSqMoe8YK29W1LEN6Lxh75JCfrffKidrD9HufskCL1ppnKTVSD4sJMN7xENCUeENtTY8dX",
  "key32": "5PYxe8bQbH2HCczb2uTrd5ZVNoGnz96QDwSG12kyJdsgu6k7rAhykMqkpRsBinkuCgDUtCdepfNFAqZxwgyMEeFt",
  "key33": "3P3uyLAz2XYN1AXzyERsYg4ZUjfGy37wv2N5E4zoy24CxuJdf2Gu3cezNrqErGuLni3iRyGLroUL9wDdwMXKGeJ7",
  "key34": "3m2s6isXUeZPgeUXowSULPQGnqLXayFFz3T4e7VxeBFEprWppzSxG8NeKEMXXpNX32UddhjkZNKh5FBwrwXapVHN",
  "key35": "SVsKaTcB9h7ZNJUoKB61FQxzXtmK84UzDzmCZL1rN4sQq8PshcTYBXVntYYpYqaTPqtRK27gvrHKDrCwiWJvxYm",
  "key36": "ZBZA1oXjSG9khwWMdirpyJUY5TkCwriok62npK9ZxWPwPott3GH1hUkvMCQxV5GSdLZMHBQGdvLsx6fLg1nY5Ft",
  "key37": "443uLWnTiyk96EYuGY3NoHSbupwuzpRKvtWAbteWgB1hpfWfd3pDtj6zFsSjidm6gWqP2DbxjH4ThSosDM2tNBCL",
  "key38": "joR8XATydsBe1dJpo2fWk9mEMdzbT8es9VKXtucxt13xGkVNHffqmuJdMdnfF2SyZaaWtRRBpH9sGNuNiJnskps",
  "key39": "61SsmL38QDQaayCgaXZUs318aVpdpoRDtogB5CwAcobBEWma11pU2ubEJPbQ6Fs7VQiz1q1o6GDrcaicgmFWiyAw",
  "key40": "5LAveBUnrRTG8EziMoB2ckW2apBLZQodHYy9sG3waYDqGzPL6EjvqwLtDZeVhEdvT8KgQUqmc9MAcAVXHpSH6cmN",
  "key41": "3oF1BLLz18gz7DFBU4bccczLPi6p7B8qDprgkHPnW6GKGq2pYQM1eV4T5LhJvvayw6dTqPbggguivNyAbST4zH6h",
  "key42": "46JCaoDLamWBH3sjRJctiu7rpQigpLyqjdGWzq9wfhmp9LPczJUm3NGqyz5689cGnvMDMQQQpy4Wj1iMWYHFFt9f",
  "key43": "3cdChXg6D1XNqnCojUQpBmb1484UNQBfard5eXyyX8EHfnDoiVRx65aLNiUQgLt7DCM35B6G86r329u5MA43nnot",
  "key44": "4HhjLu8em3STXg685kGxoZhAg87eb8KcNoJdAETiHxT1uj441vdT1SySCkh98SwTPV3Ak2AvdRR6JbvQ4E9mQVkt",
  "key45": "4HzWRC4Y4cSnC2ugCTCGFENyp22J6DTdrbPUrap8QbXq4dsuYNZUtTyLSUNq5hcNAMgg9AetaadH3dnr4EJH8stJ",
  "key46": "3bqq9JjWsQWw9DjDztT83unR8PY5HTiLLiRkThksZaYaJ7dbJAVig5suxMiBGfSbg31RHbaMvf6sJ4JaJNXQykkQ",
  "key47": "CE5GF4yBLG1ycmuyTeXWHgAJTziemFJZ1vvkyesJj6wwPwYhJPK1TvwBFBMKt8W3vetCwWe5HUkLNFEtdiBr4pD",
  "key48": "4BhoCZ5koar7Q4CzTGKdGdziXTKMDJknrmEbKCSUP2J2Bj4hTRxPiwQYnMRbhaoVQKv7Q2DGZquin5c9hYS62eSV",
  "key49": "36ojEPwcxkm3s8zsAh8gc1Szh1xMpUmtEn5tYPuHh4whwDnFbaZTuudcMaqpfgMdDa9hEqjtLKhEaTiuvpAB1Ts8"
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
