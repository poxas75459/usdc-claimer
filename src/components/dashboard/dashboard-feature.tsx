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
    "57RnANeEYGDhZHbDGzk1X14y34VeQR62Hdd7H22WmPqW4dtyNjt7VPJeU1HAGHW5kihefrq9D7pdd3iDF5rLQWvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q44jkf1gPcnDvo4VvXtmJjTbjZCmvnd3QCJKhg4AD9GqCpDrJqRd91Z7Wfy8UASBHE5V9AAbXi19nGniT1eemRi",
  "key1": "4xUo3iFnBBZScdbL9oyW4X14YYda8MDkvYp8hMTJisnxvWhtGyNBMtuwzmZUnQLmk2NYFDUgET9CFiXM17dCLJmW",
  "key2": "2VeByBrSB4wwJDrn3Zp5fea1SNwudZ436c8VK2WMnhVkUZT4SukamEsoaFFMYCddACzEF6gCt7jaYdhYjMwszZBQ",
  "key3": "3pMG2oRp3K1V5iWCWiut16gPikJiH1ZL13JK46CjkGdQYJmvnLb3K1JSQ8GD5pFNd977j16PeRcMz4wFxKspTrif",
  "key4": "3WQAG5iXXXXbdVpjJpZrQknsJQH2HeBp89MzchfH6AMQi1Wc7VJRKmUFocTx4wMAHmaA9kSXkXZT6EgttfdCDXet",
  "key5": "3ji6ferGUC7VbWaCLWBjqnz1AWSDF8cPgGx77DV44jZaEaeCQkxnVySjUrjXw8YSTy9xr7deUxzKEAmPNkGwfGa7",
  "key6": "Ej9dHCBtVd1GpUkefnLnCd1HQjFWFqsuHb5Z9NiJUhVV1TnE9LoSm1hXqUQZFCzCja7ZcmHWPEvtjz4CPmhQKcV",
  "key7": "2yvjyzAEztvC6v1oq8u2RQKABd9hg6wXn32cmMwcmmzcmVAmfnmMYUw7kZ3s5eiSktsHCLwPZ6MVyNBqoaRGAR3x",
  "key8": "48hELRSANsJTGw69JEx5Ky1uAgwXhFVTBYoP54pNrnAJ33uQp56MfT976cTf7pEdAgitxy1PLhBvTnH8E2RJ9xCv",
  "key9": "3TuZqZ24edR7L5zS4tP4uCNMHAqjhNQVWVHtGPfdo21SuJcxbgVFVbodhjBUuqURYDCh8mc6jR4U2f4or6BQJFYo",
  "key10": "3Pv1fRVKVcrt5GyNHRAwwe1wcN5gt6sQjUTmQLQE8H1o2rgpqpUNYCfVmX46iCexFXqbus386eUZzr6h1ZmgykW4",
  "key11": "5NW6dh13gnntSkpE39sZubAjdZkt62xrzzWzUSCtLGrxj74Mm9SV9SoDfnPfGUr3VwKfbM9LQY9LjS4xSsYYKvCz",
  "key12": "z7S6kb2pudNqy2jKD2g2dNPkaRhE6h9tT3itVsZd3ptwrHWnoGXyECKYQV7C1Grd2WJYMs2AbFJd3STCARKwwBL",
  "key13": "8247dNHUtKNgFGHNmL9FMgv6FTtoqadQrXsxanBof22ChRxkWrevCyUPvUZsauk6gn95ocgSywLk5eNcjX4cFTy",
  "key14": "2QVmKPN3VcQtDAcnZULhbHYb5LVVjC3A5snpmK77ZVoE7CR8G61Fme1X3yCb2jPkG3nTysdyqfeQY6QYeM4w6xEy",
  "key15": "219Lk1mVwEqNJFhpRoGXKUJSdTtUJjjDKUj9F9GGfUiytkL6MT6JSkeZubAi7KFQXXzS3DDS5Q9y4xpEuSb9jd6G",
  "key16": "2LsqMNCUwbaW69Tamd1rBs3R5evgbGt7yHoFJFiBDgrE1pSd3U2WEbPqRk9JjQfAeJ7iY6Fr9zcbvMDC3LEvaFx",
  "key17": "3wdXsE8eGdxVwkvddMfPQ4s3qv2KQPFb3TJxu4mtBSYAQjRxKc7p2mCVoCweRTXz72BqmjNCtSQZu59B81HMaqgh",
  "key18": "4jvG1gKg3ok165LGLJsR4fNC88jWcyN1Qb2VsL4rWNudzx3FBU5HEPstiEUHbV9hVqaduGuYRwZ31rWY1dZKYARM",
  "key19": "5Np6WtJcMagqybAZYoRD1jifV2rdvP9EVcLNxb8VB1jBx8PedZCfrtfneuNy9gUif5i7Qka696A4Sfm965DZ6FpL",
  "key20": "4UxcZs1ui2DB6QVDZTgi1MuAHt7Bc8mXfxh1BDtHcfi6JBq81e4bHxJ3nyFGfaj16kVQjEjcmmWEAGHAA3cfPoqt",
  "key21": "WE3r3SyuN9daaUmjoTpLvxCwD6ezEYzBNZP1oNsmL4tzKeLh1y6csMgEWyQwRtWYgYbTkxRWUN3jETg7gtkLYj9",
  "key22": "3jc1Lmz6KNPvnKdKu2uF6LE1Bs1vc6WYqAqM5RnUiqKJF6edSU4Y859ptW4qykFhgW58kkPg1VTYz1Xpmh7MEfv6",
  "key23": "3HJ9HgTtxb8eyjTrZdfh4Ne96zws5JQ44CdAzkjskUaMmzQAsMvxhHAiV8329rTZJbpfE8Wg4RHpewLkJXAsmQpG",
  "key24": "31qcceLEAnXoJXjVUXRVhDeMtPiypJHQDQ6FvZQKRv9EDePvzVXN9SQ9kJodjaA2QpMz3s6n1rxFykna4rS5ygC1",
  "key25": "2gFjHxgt5pFNAQxKLmTdVEE1i25wHNGruXghszU1qojB86h3dFhK4WWU8BnfCezEP1yrE6wiZDhwyGQEqe188R5w",
  "key26": "3FGUKVDc7HA6sST5rRKKbbaECsYYwprexKJmhVCUztC5wMfKLhgPbAkfWMBHBKJBs6ZTb7mjw8oZ8ZjDw4MYaixh",
  "key27": "3uyMtXhV3HUQfuR4qJNk7TfHNmpaFd1tn8evTismqBeMpbWVJe1qhiaDY5hPxcFgmgESjmqtdvezVcRK6tLntESU",
  "key28": "LgXnv3PqLh4hRqV55xa7cu3gnCctzPTFAfZRE4hscKyotgSexU2A1J9zbrDz5HEgDACZoTwriqoKRcTPh3Hq4C6",
  "key29": "4YiFCVBGArwswagyqwoMnCMuwJKuQmuCcKtFhhqBTU9PzJsZqf2sipqvsrV9yU6BkcZ3TGdwt33UkN7BuT7UnMf9",
  "key30": "RBuLHN7SgJJLC9yG5jY2StbMkD3hsQGFshsH523zYE1z8NB4ZQyWYmXSXtjT7yCDKwCbg68Y6boETegWdrnyEuT",
  "key31": "2SeiuKoAfxB6KfN8M3CF8zUuZgeyu4eTLqB7brx8SeUgBgqskHX2XPFc9vcXwWyRpP9588XimEWvPMSeZihfUxZ1",
  "key32": "bjv8k4ABqsq3vV5fjH69XJnq8xWP3kexWJA13VRCPX3L29TFRNHSC8brGADuQw3dxA4rTwomyFZh4g78roypMyP",
  "key33": "5MaE2vB1xUd3t2cp4L1ajRoLdBNLrCva2a854vUVrAmuWLSUMcV9Qo1AFRPh4icnTy5379jJVLo6V4MrCNQdDuaP",
  "key34": "2D18Ke43nf6iWQQhEkEh1bL2Dh91kD3GheYPziqonab98NWjVkNfdpfk2bjMancMdivhHMqoBchiiKy7d4KbSqCo",
  "key35": "4dc7rF2ANnceECXnJ6Cm6dTsoW6HNtba2eDEByKAzG1ZuwNDM63Hjj73opiEATpUP1LKZKiZ551GxaqjAnKAZkT3",
  "key36": "BN5FrZbvgka487Z1cRC3qavvCWAuyCNEdA7vFKW6ozi1uY4WihBcQiXik2Mp7KW1DiztV1nJ2Jfx1qvZM9MDD8u",
  "key37": "3TBieUAYi1sAD4pmm35DvULEm3fD47TBFamfNNG6aiERbXpr7sGGkAw4BdcXFKopsnDDJgZka37bhTK5qzkzb6cj",
  "key38": "2d7F3TV8ZQCYr4S9VPoRzvKJ9JwwfgbS8LgsPYkqVay1oQ3L316D9qCriEsJHyJHHM9dZSMNjSLdNwp22ZCWU4Cz",
  "key39": "3v4SA1ERt6jV8bySaYFSd4DRJgt8syrLD4PRwLE8wMZ66WqKqQ69nYHBstKb2HeM5Bz8t2H5dewqemC4p45gp22R",
  "key40": "45q1hHZm1BABwCcZgeKiMUbsgtRV9JsQpbjfhsXWziFWr1Lica4cwx4dLqcxmfFiNPMAWvx9Qjuvn9XJfJeEXVHQ",
  "key41": "5a6LABBRke6AgbupSBuqhC71Rt3Te92RZuH5ebiWUudw1My49aDDKihoykK6gCg2MLx1Hk9QVCBUXZLkeHVChCpK",
  "key42": "MxRAU7oKHHANxxXEk5APuhz2TUQfyAqpMiTrPYun7x7sTCPvE6gQ6F6rvQPwLdyj8pU2318vywikBjf31yT7J2F",
  "key43": "ManaKgnY6yMJFCDpiYHdvikT9SaZaE2iJ93kFEZM1pAYKDQEvwtWjKzyeY9cfDspXMXEuvmjJHnm5LCMhB1ZN1g",
  "key44": "3Zd7X98TnA3YQGkob83XQXWgreFqRavH94pWQxaeHoeNgjHabwfsNM8bmmvLbiuQoJb6iPfqKy7ddeJMoK5Kj5n3",
  "key45": "4Y2ipk8DN69WXmuB9znquJhjfPL1Vbs1jg8VDPEHchuapSUXhMqqQXS2nG3tDed7ezSuYgMXrpshvZ7uiXR6MPo3",
  "key46": "3runEti75ugtyShyB8Sb9sQtM1LusHNUUMHcs3joCu1YQvETyTVy5RTYBqCDbmSkG2eMaw6TbC7ueQPt24LDcD9w"
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
