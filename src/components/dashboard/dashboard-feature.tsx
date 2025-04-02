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
    "SKVhZN1YVfLTHBXYneqFkAJk2Mrpq1qqumeYuCiSoToRTNi64QpJoBRLspB1GctjgtS4Zvn8kfE5v4KqBvF2VfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pRCDdpnejjRYKdpPbRFFMz3rmLBhGc8W399Axgo2xHNp3c7FBw8FLE4PLcRyFmXJ51qkbNpQ1uAqtrYzneWmnnr",
  "key1": "5cqJzZbU7bafR4W1fyjhACWBgtzcFic9WCnKyCbiT2nNMA9x8G9mM8hyo38CJLZWtGEfzEEfyzxhC9tdZoVYYSXr",
  "key2": "5WpEUXKJHok2x3cULPMR418m45abhm9zgLJjF8uLagkZnA3eVeX1MoBq6mpEhSeRxQtV5bBmkc4g4uUHeNViSz6K",
  "key3": "5r6TXSgoWbvVfgNxpbpdm3ftCogCrBut72tiHekuSA7CmfH6UtFyRZ1obukcbzQT76YLX13tJjUGJK35jRyRGew4",
  "key4": "3batpCc15dmZ6oewC1qFWgrnr25umEJ8Hw12uD6jvMRYj44ncLoH9AZTDq6ABd9JouxtZha3fjfHSoDY5gySyVK9",
  "key5": "4jPu7XTigMaCUMaN1gncUyhZ5QC8oAKeiyokpjKHy6M55fnZYAYJq3eSysyisvds1pTSoCDpyzKdvHk87DQRFsuS",
  "key6": "5Wsy47h4CshpAKN4RXyPjnBfQ69SEkJNYXgcghdUqiRuJTvv1EEj58NRuai7ZWKb8yaT36PDYbpeyzb6VHGuj4BV",
  "key7": "WoJydMsVeW5cJUSJe6w7Ty6TWmrwftFJtL1phNNLU42rHR7VNTPZHxwA3E6snBT6LAmCpfYht4c7CHErcRxS7a7",
  "key8": "3DBVsbAMuLzxP3gVyFVefNbfx8MeFm8gvM45JY5faQ3KVv94PuBB2VR3SECtscceSw49sXXjAwSR7ysLCiVHsuoo",
  "key9": "2V9G31Kx52FpptCvLWhY6MVy943rXWyWqysoY3e46WBLZEdNoLftjgB67CGiLscHQp4ANPE2gRYeN6Qxi9EyKaNh",
  "key10": "41XAmtsYSahMMg9xyxKUKP698ka89Rd5ztW9aJKhKoxtvT9xYdVAB29NcUju9nkkKDa3NMsE1WhHxvdbGDHsbU6a",
  "key11": "4WLzA4nfqQH9tcgMeZeAe4XrQFXAqLUmytyCJvXR2cq5q5JSBpDcvDxBbL2F43e6NEF3poNs4LnpD5C5yV9u8Gge",
  "key12": "62vw4buD2mgcygdHrdc16tmreeqqBdS4VUU6ic5USiBfsREQ2zbsBjQpQ7LwmnWChXkV4tk5srJPbx7UhPgSeusf",
  "key13": "3cgXqv7jTYtgS1FpzLixMhCFvKw6rosZzoYcR3BrF67tU44Qfzjjyj1u3M1U9hMpcsYW4uTpif7nBi689TUmRfpX",
  "key14": "3AV2pcUP9Wgh3FgtNZCFtpWweGjMtnRDr4SJ5gCi85U5tH2F8wBAMeA6EHjBo5irpGWU9ZqGvzyMmDdjLbMmtnfS",
  "key15": "3A27MmnnU55Kgm6D4uydAP1V2MoyVAc3rSZNjWGnUrnCgBDsyHoygkf8o7sWevfekkwLpGs45HydJn1uKwuuBWQ",
  "key16": "2vwtBtKuEvzMckS3vrmjhMBoZeVtLLpP9xR2iq9UL1FAD21kuD4ZxDtEn8AKRdkZ3XWUggigaPJkdyB3Un7etfvr",
  "key17": "53HX89AcPcTjwop2Xht67t7RsT5amnsgw57zwW5K81HdmXBUP7SCn4PHXwUotmUkGjPGmkaM2waTREM25fGKAJTh",
  "key18": "3D1WuTQmjki7QCeaBnX3qgKNfyGsiMV1U5U6KGH2hzHjRDiPDN34kTj4rrHmYg5nzXikdToFAJKvmGtRjiQCd3f5",
  "key19": "2D24TNABS9VnFmZM4vLiiSNEE69cy1QSmTbiXeVioHauF37RspPyfVx5VEcQNgJE7mSBp2HuSFkswW71eMNNNejs",
  "key20": "joXRmDpSZAkr6o8HStPrfe9PF94kYYSXkHXiTb7Fpc5wSqDnmpR6wNbGh1SjZpzKiNdQ3aQzc6Y6uERkk2uf89q",
  "key21": "3yPvnCFQB7Tv9SD9tCWRq5Ua64iM11N5c66XpSpYCkQ2JdqdfLh3rn5Z6ywvPofm5vGuRDCxA9ZvzVvGzqf1a7F9",
  "key22": "3NcWBM8nDtGbvyYL9iWveL9hNvWNV4fCy7JCDTcc3sFkj4fmWiBx5WF96uYAM83d9FhFTRxYLhKLemVesUSYeBbm",
  "key23": "v4e8FQ3iwnVM6RbXbGR85pnBuCUUsbEaqgXd3BwkBJk1uxqr1sGYnroeujFG6mWU6BVioKK1qguit1a2ikoeC6T",
  "key24": "2UDvwAUe56jmdHXbCRvgNR46k4RXcnUN7WX5V1AdQFiGS4n6QJUNxKkhnMrrb3JDvybfmTV2Xg9mvn3RX81ymUXf",
  "key25": "2pbE1ao7G9uHt5Jax5ajze8b22xRwHBYWkWeCrASezV8EAPuewYqWTLokDWeLQo9ZseSRST2VQFsgiXK7XvkexWy",
  "key26": "5T9a1esbkPcaa3or2rFboCCrnxKaRt3Ys7XGXdB3KgnQ5CxZaidrcFMnxMW62CE9TzVXsBomcGFoo6Eyo3Tdq16K",
  "key27": "67HCDbkb5KrFTYasXBUb3utDrdvq9xisLhnXCywETo8fGfRYfz4nsYd3r2g1B5XevRDQAWZoo9Go1Rt6hgEizXbS",
  "key28": "3YAddyXSufFdJvkQRCowLGqgyLM9Wr1gmAAihvF7GF12odEqWrfHPJr4SvyZUE4CA1QmGKYADDVCothXfF8cARbn",
  "key29": "3vZ8QXtFeEwCXcCZ1orwm3WqzMjtJjpkbFkUvzBAc2keLNQDrHDXCQWsgpfgcZryB9XUZHRGEGJtCYvjTmZyaCNm",
  "key30": "D6bQZka1biLsRvv3f2gYuBi2Hd87MonhjRkaphCPahdNmhKxQTGzcRWLJuCHe5cysfR5cYx3C1v96RY42Z1LdnP",
  "key31": "2KUvSxytV8As63P99PKX1kh2kwgDmYHL1GeXyNppbwm2aKdpp45mCKb3XUKuWQNKTHcnTcC6htHSvBpk7ve7sgGy",
  "key32": "4PGPo1NJZRRNKmyuVGQ57UNao9Arbx9V7YRSzPBvzm7HoS238fzh6qz9bj7pMYcuX3ewzP22Q2sFmc6FVckJv3qN",
  "key33": "55mMZ6ExfC7vZ5J8MEb1y7T6ccMxHf3RF7mBDJyiEwCBqjB47MLcwKVSpmkgof8nNhc4hwUBAJHy8aKkpUtiYgzk",
  "key34": "22nrX2h97cmeckRD9esiaShncF4ghRbGUdZeqzE5kh1dA2WkDaBJ2VZT5TBjrDjbhFjgicqDL1fLJVPXNRo3yqTG",
  "key35": "5c6aNRJnrbN6VC8ykDJjGXATCb8EpLj3ofdgU4D9ygZAy9n4LAJ5ozZwW57zpf7HxReZLBatBwAvuTjXSDL5tWWs",
  "key36": "33LBX49VyDieAZ5nYPraFxqJTJRMBiEcGAWUdzqrVDCKdiNxz8KwZCgpPSC3jX2ZqiRiDLGb9rMWL9jJ3ZP3XBZ3",
  "key37": "GxnzQFsCFYFcMPkrHB4F3YvR8WErmWqJBCtgCoJCQkmcZ7ZZcr5eBGuQHK9z1p5RCmvqaPiKoq9SWmqR3THrZNY",
  "key38": "2RpMDBHMDkDyM87fvDD8kfk6rrr7WxnbTV88hWDbY2vrZN5AwMJTfaYzP4ujVzsFtTm6SRY9xmDKSqmRMg1rcBnw",
  "key39": "32dkQq71r1f1AZdDdG6otc8RfvEHL462Eqbs4kiyxTBTYZvLyNEdDdMHnMoYvoa2pw2Sr1psGiiZx9DhMziWpmLX",
  "key40": "3w4ZUmPdx7S42cdvGWoQ9zFXQoYd8QCd6qZo9Y14gb77EAeNz6Lnc4pdM9JV4SJ4XmZjHJGwkPdyNUzGc33tbfj1",
  "key41": "5cErX3JoTBoRMdQwKrPaYtfSX4UrKqjDAJZ5NWekrSfEDkECZuvPC6uDxpZhutZKA9Vrbyxus2dx6FNZVm5m87yW",
  "key42": "4dXsC6MFTLq8fLUCtxcpzZCfFa8guGQXkVjH2FAeMGt9zeEaebExFE1xHrYvEpzJsNikimSarRRHejziYBdk55mh",
  "key43": "3uZzeTDr5JPjmiS6adACoQkBb7ZsskfR4ToJzQZAQpcEUcGpQMdAgjVVPzNi2xZqsC9AMBUy5joHdinS3rRRpvdV",
  "key44": "29ZqfwfGLVABuNy2thUSQHBVrqkUZNHwrqFSqHDWhNXUCSdaS7GoeaRhZ9LjE9tpF12AUNYD8pCjma7QjM1PKFq7",
  "key45": "2rgGBdQof4fdWuXHNS9LYqDWNFvohLuvLtVpRQSngdUFfh9MDCuriPYbpTLmVCwuWCSGssUmJ8p9N7XwxN6GzcYy",
  "key46": "5XpDA4ecYGcqQCRD2fz1ZskLuMybJHEAWTmXsGHdybXEj3W4nedHLUgJxfxECHNmoGRud2CKbQroefk94FEoLarG",
  "key47": "SCH9XZgBM6sozdFnJry7gAiguacvrnJdrV4fmeufCaJxjCmvYQfbBekPfEFdtTH3Yhq9e9o6RQD2G6FfWgSwRZS"
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
