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
    "4bx7SRaGhBnFm5DoCcCmShL6GaYq3UVAwR333mfSJW6J7LSrunhuQSsSdhPJaskfR9CdMsM9uN8mT3aG3bZ1i5yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g6mhsqeJdrjwiu3RKWZqoWVySo7oBPw2jVsm8aJdpDzyAuwsTop9YsBmHcoD1njZBg2yGoEwwUevKpsHRegAkru",
  "key1": "22Hx2mLiczGLvgdoRXQLXvmX7feiEhMasfyAvgCm9jadoLofu9HgkNVwRTnVh6dqaHTuc3Gkm5Ce8YY8Vm7e9ko2",
  "key2": "5EP26NpGm4HtpdBvexQbGhGcm311vjiwHMXr13U1vgvXfFRocQw7Men1gXcPj9z1fbSFLz82cqDRr2D3xTv7tCsL",
  "key3": "3vvQzbpbJToaCtBkAj6VEVoVHJPnYzc86dYd7694dNVMVSjAuKys3q4H8VdynJk9h6B7ALYibv1FzJLnC9weRCMx",
  "key4": "4BhWeoAD5Hd8F8VmWWKnbNYAHhKP1G5mz6t9BqdT6Aj1WZpGF2nZtkZs5vq9sbZDHFRfxH8BKL3Z6HAjgXRYP8NA",
  "key5": "4FHfKTxqgRUzQEWgLU2gyWad2j5CEMvfRU75aABWyjUq7YXiZBSVpnikHdz9gAwjqhx8rnoZPH9b62DizJuCNsX7",
  "key6": "5W2JTKx9bULYssV9APN1a2DcV38ZDHcxEGKXcf4u18x7XiV6Yf1gLR3Yoo3ZkLQBYmhm5EyhMmvd9pH6GCNqur6s",
  "key7": "4FoyVpgzzrgevBVwcgU7Bfezt8eaaV81sBNrCc8Vw6f9UMiczx1Y33KjNELEmk3VA3vX3gkCBTh9PTTA35nCysdh",
  "key8": "7dSDaWJPoJxa66Lo3LSpFwBY9w5wGaKvfQ2GSDVCb4MyFEHHavuMqGFiGHQmoVyoREUaWmG7sqh3ZePASAJPqMr",
  "key9": "5Y2N1sBRsGBmFqDSxVNDakaUU4fjrPKZjNe6kXvSeC3SWyouLwAtdgeFYff2TcajcvqJs5mFjb2cJyDjfZh9vQhs",
  "key10": "kA1rPGz6C3WtnMi8LAeiB2q2rHy1QnPvHrqBiCX5BCUYouiTb9zBLDfe8dcrDSswBpX9Rq9gVAUpqWJxqYPRfWe",
  "key11": "5ZjETLjx1veJcQVneKYhLN3A5GXSkP8gA1RRQFHthC4oGMUfKei8rHhB5Kdveo3KDi3LtdfHMPMi3n9MyimCkf6v",
  "key12": "5zEymrmzGvyeWForfKtMsBM6ERVX57nuL1bYHmGvQYFL1x74FiPnMM361vg8x3r3mFCrzo4RRUPMs8bS6aXWvjt4",
  "key13": "5xZANQZucFoUdApZz1N8BKWwc6gf35kaoSasV8mvj1GPonHe1S42Vqo7jqKZ3C5KaAP87GFKiZkQBAwY8Ux1qECx",
  "key14": "5L22DWj5514z1nWvqS5cXfXAY54MKxiSLW5JKHWPFbyFE1DDNckCTMyXbcr33hbfajRE3Vx2g1j4DGM9Ev7ojWSE",
  "key15": "2Xhw5XavbC8CGmwtgyR9RNct9CTTzQeouMFhRYYk5R2b7P6Q8f3a1BSF7juiZngxJSyyAhAQNwWfJhPuUhDuyfQs",
  "key16": "csCRwyBz9wDdz3jnr5AA1HG2zXA1xrKeSWLzEgxKXZFDgt6r4u1HemNBQ45C5NooKg3jAzKegmbSoRQZpfzm2gn",
  "key17": "3r1z9LnBDoKBWTowF3AiANyyxP7LUgrSwz8ghMzFSMyMDZCP6zjXfXQH7Mef5DCbGCAwRBZBk7whgQ7WZwR44gfG",
  "key18": "4CnmBCBukq6H3cbkNaWBKAE1NAT7HmUFMeng2HpqucDhJBTaqQB3L2xjfw1GeHZWkZoCqzuTN93zRBAWGr9nYeUR",
  "key19": "hRuqk8jW3Ww99L14LzwZ84LHtN8aNGyJXqiH3x1CJ8MoN2dxS3pQzWfEVDGg5FvyyesrFpRidHt4UJXSQ8d2U3i",
  "key20": "5xNhKqAijUwg3d3tvDRR5TufrahHaE6wqQcXBMfTwSAywoYL8rBqQCzrzafxkD1Qbhv6JB8WTjR8cTS9DAY2atcB",
  "key21": "5abujVBtFf1C58auWj5HepzAEazrzxyTQPqpLvoqy9uoUCjVZNVFqh3qgesX3enHUUwPWi8VbvR7i3WUYHqzLNzP",
  "key22": "5PaUG5TybheFtceZurFRDuEMFr5cMZb5Gvy1Bm9ZLPUrspGsJmMvcJrRfXGfi7nJFAgj7taiWNSLgtFm1hJadjz3",
  "key23": "5RD7asrz8pNyaABMvu9ozwiJCrMvudm4YeCwatsDjFHsXUAnTCebUL8ffsyhz3wAJfiLr4uB7df9pyZD7vFpdjCS",
  "key24": "JUes3K7g5nMoV2BsC18Yf4fyjaMvPsBppN53Q6EodfMvW8SyBAPAqeXxFUiMktmYGgdocxnWkvMD7cNXpT3vzrn",
  "key25": "yGmoaBtFGukNxxgx5MEWbCzmJuomZK9tuNw4GS5FgJLomBSJTi5PN8a1p4ebzrdEuUCiHVPKXeNKXGEKtMnn9ek",
  "key26": "384T9cZQpBGEAVoy4cqboFJ4KCanmLeo7gKbuJWLuEHFQD7urkXeFscVXfRoFbakfM1aPCXJb369aDGfwJNNnAKU",
  "key27": "5ZPnz3wwsZzviRzYVfi6kHYcaNn6jaYaUTddNJNQmkbbYCuPkKZi6hnqDT73nh9rHgkjHe21eFAQbvG9wNaeHsAm",
  "key28": "21bq8JMDm1vee3v5sTvFexEVZHtZJUUb1PKwyUmSUVfC5PYhrFSyY2h6RSzQZ2CRUWhNJGf65ZaR28o2UMKBMKbA",
  "key29": "4i4AZtvWLAhPmdj9k5AW9iYfVX3cTsu9s3ac1w5CZy5ptmgwcZtkVBMbYZhqQyEDMTVUQrH1hjbZyvVXqyiz5CDo",
  "key30": "26sL7xc7eZ1WZMH4BaHRMNaFR6WZYAznbeTwqUimMUCh1K5iRo5YQfiCZgjK65hEmmSC2qp3WKd2vU8yzXsd1avN",
  "key31": "5UY1zyfMvt87j1d3HMS7cBYPSsBsYuZp3mqerWCwzdV4Fu2RkA5oZCjdP2kCQo6hLv1f7oVubCaRnr9okZbxzhng",
  "key32": "2wnwBMcQmp9hHhPY6wqAViFvzhCagACjR6v2Z3KwUV1n6rX9NEJxbFTp2tJtLGhEMxEJXmDdLqA1mD3jmPdN8wGK",
  "key33": "5A6SgZ1eojiP1kLKRgXheUzZPE59UkNa91GH974idyj4GoiitXMvzs12ftvfMYbahGatMTFYpJ11c5atkPKMRkbh",
  "key34": "2UYY9DYoPLXBDG8PWVJC29U6db5pfwbCh7MxZHB56yvKhghRHZm9Y6W8x7ieF2jEyuYJypvcy9iYN7Gsfq7c4maQ",
  "key35": "55SQuq7sgMbXwZ7QuARpkLJNxk7pfV59bVVYWt9yCkLE3WFqpgzwff4V6SdygBvvgT9cdirHjSyphBVKm3CueDhs",
  "key36": "wSiPb5SLMFJSQRvUMZKJKYE28Zisbjd7xUAg1exwFDBoyaz37dYQBNYqSHhLhpznmd5mtdTshrzTvTjrp8gSHE8",
  "key37": "61LHSA8g9hhBmDypyMXC7zYY1cqrAbfvq1mShE4HLumQqzDqm8qv5S9njmGA9crowN3AW4xa54RcH4em2tErkXBr",
  "key38": "5X4s9hbs4QYbGPcQF4FNtkqXAy25tuAABY9dT2VbTtjuzo8DaFxGuVS5qUirBPVnJn1B3k2STEtyZ8iTTACuf1Gn",
  "key39": "375MCq6sLghFJ5UbD8EvvB9Dk9cF4CrySbzMrvbxyfy5oDsf57ydLdmuWmBFd4cXnBb9129UrarC8Aph9dD88cQh",
  "key40": "2go7sg7K7DfN2KQBoTQhtyuJrhgFg9pfceqDw6cBfTM8Erac6L5naarMHCLe36Acpjkyaiokq4Ao3oiM2TYNACgb",
  "key41": "2dqBe7JSdRAjfCGtTNaEmLLxyxe5EAMv8KL5GAfWjgrVMokvsqjzL5DpWJYqU9PjpYFYd3Z2KHj1dj2Faa2gjce",
  "key42": "3ZAqx4JvRuXSvYV5iJ6Hcev1kJPMJeQ7m87qvjk8ciFFAwLd7pXpBmtJeeqNCWTFYunCQkrM6SbBk2ftKPM9aqcd",
  "key43": "kSe2AogFfuWazkzr8w1cmAJ2jF2M4vxZer6ScLteCYeiqSxp4EWzAvb7CV7q24vMurA2vuxxqGK6cUGCVhs1CXY",
  "key44": "2ZJoqwUrGi7EAbcYy6uW7b82vSZKfch6AkwpCpveVwQJ9gJgFWDRFxENTQGvVepdfGJHX4Nm9McM1aYX5hPGudyd",
  "key45": "4bFnpQnJdgteZtfKLdi6fFLXXMqG6TigxsHZeh1ND79raacsNyyHz19msh3apxnQo4otysTtgHMYWMf5eRwZUaq9",
  "key46": "4YCbVwQcBWahkAiE9GjwbVpvNtUphSaJY1r41otaPJPaNsQ7HcVpjbckY3yKmkt9g4gRkceoaSAn1X1u2ptQSoW2",
  "key47": "3c5GfRqQwYyegcuCPj9mVeA27Ti3BCGLWnKMQb4KSAVgjsJBNBFhTJDVC9Sc1xxsKs5ZNkuqctiD3xpSuJ2gZqj9"
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
