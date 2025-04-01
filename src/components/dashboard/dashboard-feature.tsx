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
    "3P56H3mwsXxTdNrn53AhEWDceQzMeNadBexMeNQgYCSGqQuZoUmixm7eGRXngQ2hCukkcukLNZQUeRb8ZqW5yC3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpLZTcTHKgEdpib12vrsL4nV4mP5EKg2CYHWVJnwkgrg4QQiLFCJGWY9iMZ4oCC4W5m6NVjkN5xh6t6NCgFxggu",
  "key1": "5foe1o6EqkNwvTvzH6A2SfnUom4ZK6BstHDkF78M9UuHZBG84vwJEhMrj8LcAGnpd4atUpxReb4S3QcFU82k3B9r",
  "key2": "TQM6XikaTjf7ch8QVeHnBbf2JKnAo19LtNzpdo88bDoWnLGVRuYQeKmCoUakKDorzXaSns8DEQSJ1sojeyfBvHv",
  "key3": "54cHrnB4xVUQWoWuLfd7xGFmF78m7bsLZsPbY4b93WZ6WNuUtk2jouPW1rCisNdrVFnXptJHqYZGHBcfrTJgdXZk",
  "key4": "2GVdbxucKbfFBTLVqLtavZw6L4sGmnp3LNoo8AMKZM7KrTERVtGmkQrRoz3fEdVrFkBv5Ag359BSzmnr9JL874i",
  "key5": "2Zdios4aLfSpkRm3JSkv2112qjaAQENqs9fQu9KhPwxpRHtWf321Zv7KBx39HqxwNfHuuKtz5xoUACnfLJW21Uu5",
  "key6": "2oePX96ghybif5SD6MYFu1jHAgnfj96934zsAmxWubJWpFWExy9nCAQPgoLMtHKQa2Lts3DMLEU1UGsm5CSDTaFb",
  "key7": "619rJuQ3zRHbvWzYLp2PyvrNDcuuRpsFrgbDbgmQge28Md8HDT9FwueZ2xHF1Mg9gZBykMhaKJ4UM11jLbeTP9cs",
  "key8": "2KZZMkmh99VQxBK9YZ3npu6gkuaTcCXVabPAm6uHb4JHnnNvLrBxd6MPS6NFD9GviHTu1Ga8oEr52rG7pbi877T4",
  "key9": "5maMj8jGLMWcrZD87drDqKxcm8R9tEo1BJytGmPH5QA6zDSWvkUy4b2fFBGidcW7dfG6KTdPipGERnExoPJgQ59t",
  "key10": "3wXFrxqfGNZ98UWc7achuS3pQw6FZNBH2aHL77GaBrZx9YQgHkunpNr8JnYWcPeGcfsDWmNsgvAjSYBrbLcx2A6L",
  "key11": "535SEoBg2YLaLfXAJshhvhsFnqXvcFHfEUsbUwHi3aNZt7LTsQ8TS2wQFpXPTnrKFgZ2v3ymzmdoNacUydvrvKcd",
  "key12": "2LdC6H1RahuBSqCW5sLfuvLAKaiHyoevYPbvxgaRokYKsjGm3a8kB6cnMmfGAHZFKqiKrfU53JxAPseeWZUNeJgj",
  "key13": "5gTKWmKdidoBoPxfH1eq97orA88UAsaYMczAZhkHrmFR1BjUTM2RvLBypVehpFWYm9nWJSZAdSyFgnw2BwtroGkb",
  "key14": "48TWYG74gZSjVbDHSDHrimAuVxrfwAjFbJJsVLsdZnQfLMkioEvtNvS7FAYiBdWq4BHg5ZMeBNxZAqM7Hz1CF4Tt",
  "key15": "4TTtBLYAUxVoqfzJ1r4DRYePJ98TAzXSrbk3HUTXfdc2kwuWenLGKtJdP8sSvtT5n8kh8SoNt75wGFQHHVmKxiT2",
  "key16": "2cZ1xXryz9RoMzU3Fm2gC9AYCTzirB2Et21vP17SdXiRaJVv9WzRAYBeBLxoDuutUMS4hpBu8S1bsxjKSWiy7oHs",
  "key17": "5euhZNS7MwhfBpUGsRkFf8W63v35Ehg9ctfL4jKDgzUtBaz1dS7ctiE9fkEouGhXYw66HwXa32YaAQ1qL1tbCwWi",
  "key18": "4aEZQWPCN7HarUVsEfTQK8eRS8eKNGQH35QLcBibbC3YVn8A3bZKmXGhgJAY47S6JxavrjtATAbNAo5eKw85F5rK",
  "key19": "3xF7N4hGcpmT5UqyjKFt28v1dxReZYN9DQbeTdq7AHwAq7Pw6wciszu3m5DZ6QWMZmfWxrt7x1vPMbGabQNAyCpM",
  "key20": "5QC12p6d8ppUHxqJMizZVY5qpeoa1fKXB49WrRMQ6xxyqw9z12arEB3GAfe9nENqfwLu8wVLe6xd1VB1uGwvp2oz",
  "key21": "67cvk2US77YkXa9B4LovF9Bk4E8skpWdFsm2PREZAcjZHVdetnCdX9vpMeY7sBUp95EnUNpba39Pmjkp1kZApgTK",
  "key22": "5aee8xS41eSgFL4DuTi2oHJjtK7ZVrsMNAr8ZAYedCr2BWgRJf9AeQkW2ZVX8aWVyiZ4iExg9mhtBivEEfkDdfxw",
  "key23": "51TWYsTDHhs3YGhGGwhaWwYynPyGRFhgDS5dgGYD2z37mKVHxhtqiNw35aGoVEFfsqoMxRqdDcGeB8vHCoPT9mvh",
  "key24": "27bi2YJAD1SA1v2MwTxuAg6WpCNiLdab9vTeNGDoHL19c4BqVdHm7Mv489Yx8RhvLXyUas4X7DPQiTUhsdXVirJs",
  "key25": "49U5J6ZZ557MDPx9Zdgc3eWh8MSDjXko5aRtHZhWceuNigswt74VQw8isXxpW9ig8CK6QX89gv52cfcUs5u9kMLz",
  "key26": "4MvJUTs75Wstdi9P1JhwkynSBUCtetigQZ4Xhe92us7pfLRWC9XvospoMUdN8UFsgAQ6RsYvujyGzjKCMYRFvhW4",
  "key27": "HZyttoKFPfdbAjRshmvm2h3Zx4Ku1swJVJBJWFRxVw1b4UPW9aEtra9a8bxUtT71eaJTUgbEAPAJQ5zApmgfZ9q",
  "key28": "D1UQSG9k858p7pvJ8E85y77RqbzcTWP6hFkxdHyvUYwA9RgEiu71JTeHBwBmsjThJReTsukmAtfRSnXh3WDs15j",
  "key29": "2bErsxDLemtucejueH2WhuzdVi8H2ZYmgq5zEWWjwJ65MSS5FrZojrDouEjusA3T3K6e7JjMw5Jthtod3JffVt4U",
  "key30": "3muaDJ5UYSutWLT8jStMnThyNdz3jpGLJRyAtvrJnDUtnqPVMnmh1ukbWFkESafgVX6Zu2xPfoR1jkgpe9GPscv",
  "key31": "57emr5YGdNcHo1Q3ygWxuSrCmDWim9RsAynH98tgeVummpo2fapzNe5JEXABx61TA8n8hrQDPJjwAuDvnX35YrG1",
  "key32": "9xT3wzovKRoFsYzoZZkTRPAkAmgebP92sep2QhBEof53VWUpNQ2SueV26vgqSRKyVqwoefwL2QKCSacPo3e3oLy",
  "key33": "Skxbva5RsXc7FmL1jW2bVjSfVCUmmy4bFVpy5YD5MPDT4r8nBropQ2vAan8BL7NMGUdqFCkj9sLsSCC4NiY5moD",
  "key34": "3UVMy5JP32kSHFesG7S1XuGaHXP5mCqGj3srTczdDP68H3tb6eYziBsgKb8rHbWirPQbzYNa7nQq8satmTF6e28C",
  "key35": "4PMb19QTjP8TfdDyphozvm9vWYMRxhTjr8D32X1ebRvCDdtPvT1fvaXSfizkXeAGoqUrtdwt3WY3hrkgPLE3fhq5",
  "key36": "2wCGeVEcovaEpDvP8KmgBj8N4oootfxfJFD33vQYJXCqBDTsau1fpfQQDGD2WBnYsiD1fZvhTYDJ2SGWQKtqCsFu",
  "key37": "uAAHSgLda49AX8tQ6C6E9s3sw3WSWEjkYYbVvK1hb2m2kGM16BYqCQ9L2giXAjJ9svgWW44o1yDG4a87yPXmHxw",
  "key38": "5LGfvyouXA3YEE4QuuMhJLoWbuaDBzusYvryZmooZGG46naaKnu6grKdW3GV141u7GqtbTe2z8757Z6sXrGGaUm6",
  "key39": "4srSUkSijrM8qUx8ZitSkTTnukMqX9YEhrVie1rfVnRduQzVkXegaBbnaLgHMGLfJb1KtJQQMxGwKmyEa5suY8HT",
  "key40": "3u4FsvY3FaeoAJjNdxM1CdmoPKL7gyVTr4fkLBUK11ZmEx9iUqRfs3kK2qrNmcaD7vFrLs6CBLA25RMba93vgDpP",
  "key41": "5nNU8mf6yLPZqEP3XkBZyRiPCrpiGN3dz5AsXLkW9EuVWLjyD3AHE8rdu7YMradKcRPkgvJSGMjvF7gfZi2V2MLH",
  "key42": "5SqXYxnhyG9tGRUDfaYqxgLXTa9B38Vxuq9jfTJwyuRy9CanEPVGHRsvBo2qpZLLbzLfRS1fpsVWauLreXx7Fn9X",
  "key43": "3i6AJXC7izrDoFxYb744Hy25wHVUbqbwb1ZNwKTtjGKoxXBsyNoURAsHH7keuj3VrYxt2h8S6rXsR5bM6HmH5ZXN",
  "key44": "61MU8oE1rDzxysq6RWQeG5TPSGp8RZrCxJjwG9bcbbAGNsad8TFi9anukgnmuSViAcVf4rH7qt5Bezzt1QZrXn25",
  "key45": "2SkMh33JoZh7FsvYmJdEDCgCzJNaPSfafhvVNLdLT1bggyGmRrLnV3ff9WXbJqU8G9KbavziikVUaz1DKH6c4o4N",
  "key46": "3d7CK4AhLpmKvrF5q5mEj9a5cbXhtNmSKNvbFXxVMbdiuaBhtjKjDZfMdJkBXqr9qPSSPpvPonosvCGnyh6GMszp"
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
