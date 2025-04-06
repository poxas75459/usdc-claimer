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
    "48Hb9ehSn6xcJusunc4TDGf26D6yKzk8jsDCG54dzTmHu5D3FoV8HWQep5i72VCMxbUkwwxdcXcewB4FxoPBMekz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2nSWqpMiRkwYC8tJ4Yo2jow9to5HRFfKJwJNtfqdH5NgPPpcA5LHGCBRMBvy24oCfbjWCpGxtjP9PzhhnajgBk",
  "key1": "51n8nQ2BEcxTxut8Xx86kENFmBRBm4escsDQWydKCebeyc1uuSAK6h7DBPmcj27ZC27kcv1ekZLdLJKvMerqgdjp",
  "key2": "4SgLa6g5amtpunteZCfKpuH2wtidxGJV1dWaekWjvW5km5UxQHtEg9f58NVP3HF43qP71HjinnhHeTozGDpPa6Tt",
  "key3": "3MBi62aWbZFpnSeqNgti55cwdQ5Nb9tXnFuuhkkvTgwhMHxNVVGdED2Hi3wZYizCKhe54giUNRUzRzruWVqpVxYT",
  "key4": "5FJ7WH66LeXQqupxtZ8qceLFQBFh2ZL8QzfSpGd4h5mx6LF23e4BVTc54t6THNGr8R9eZm65h3qJSUTHz14YjjE5",
  "key5": "zeq6hxzWLQHPJYZJwng19GCkZ1XMCVHuQdHdgXHNgiuWfakqxEr49mpEXT8Sv19oyJxZ5o5EiC74haWY3qwQnxj",
  "key6": "4x5ZpYVUZNb7sz1p4EeLweTmMKxPVWXwuodxpd1zeciBEVdKokzwcsJSiAh2WbuAo35NWNJwzezDReTwo99fazuR",
  "key7": "t8d3kQEnaXe22pGM8rT31oEj1sHfYDtAEBiRLf6SiAwBzpWDZsHuDA58aJakqAR8iTLdACVB7oHUUUPDLoudXAc",
  "key8": "2tFepJMFZ6MHKZTrc2zAH78HFbDKJzMeQTx6cGGg5Zb4QdCse3CGjkxiLDvPxJdBnpiStHXcfTktnoVSGJxJDGsA",
  "key9": "5dWoBXLSgZTVyQa4yTFMV9zYk36gAcJn3S1AqYYv3rkbbCaaDqJpA4dvB3FvGusGQEzRNq6tJH7sZDkS67fgRWoz",
  "key10": "2G2x6DoG21Usf4U9xxNcgjz5vJEBMzhouGzdJsdH6KEtCeQAdbxU4uKBxmrbscegxTE4byUxfmuYup5PPB2FM5fy",
  "key11": "2yX5YVEMdHBoLav7EodGkj8cPvoZqb4zVrtCyLuaDeBfrYNXmQn2xqzk9kuUqkEVCEuPgkC69e1bvSeJLchee1Hc",
  "key12": "2grW1oXy3u6cGWScmidVZJxbcAAALpJngcJN2dfKX5QFPM18fsorENTbhJYwGoTHHKQrZTxgnVS4R2zwAJkiRuNr",
  "key13": "2ynBbWoU1HAbKyX1TrTc54aKjVkzYomqvwVhVYSnwhoAVeKJFqBijfWLxTMHRhkJ4xS65DgzTMnw3utyHteUbZDS",
  "key14": "4HE3Tw27ShSenxPjPs5A2rssvebCkFiKwasQcmp1mCdP1vLH4jzceiU5Pwst2PAbmwMPCebFisceuiLSwFkNB1VY",
  "key15": "4UNZ4DxBAS6QrxGMdXBQzuDHxFwNXfCx9dVguomUS5fJ2racNmboBwFmVvQdaSmCuwoBWzWcgcKcF1yG8NxS3pPB",
  "key16": "58se1iUkewgKppooFa9XWcDkDKaJvYfyRuxo9oMzXJFfiWwyTX8GqNjTZU4D3FEPQFkkiCW9Y2nmjFAznPUFiVM9",
  "key17": "4WRrDc9vW6x7iFR8Pb69kPo48AgAGDaS8vb1uieovyjStAmHFwnHoJJXUuGQcn2Nd7nBtBMEvdMG5A8RyjXZEgKF",
  "key18": "5WvqWZhLgGE791WooMetRuutfKGpPRTb6vaY69G6VtxUWKvxqH5xCBEUfjkJa7DFaaEbnYS2UTHrBewSkSdNaR59",
  "key19": "4z4BH1ajNEqXnUoRJ5WhuMMs34iWgngguSR7QZLgCuu1APYLdVeeHoVg4AYYjguhuSFpjoS42wgb6P3rmbGDe4Xv",
  "key20": "35SuBPkZav5JwPVwtwXzanhWZcELUTumKB5wxYEvHGwZnLwVZt34mSgNdfUgqZankoRnrRrtodxDJ1UumTzoszTu",
  "key21": "odB2w5fHhKQKo1waiNhY72r5TAbsAAvMiSbCDXYX1SeMmzkkYop44HP6MeZAfCeTVxhJSuFGgx5Qwo2qramBZFz",
  "key22": "64fs6VfkCqyPAin8neige31sYBVE8y4dCvndHzeGYX4ugAfMgTwqzNx21NnQTBqKYr9WkRyFwZ9fe9WgRNHvQPaW",
  "key23": "4bw3jXKxtP9ts77qcyu3g2Ch164V435GUNufTiwW72xVaEk3STXWofJG1VA94pW44J4gfC36hMHdAwMyPqRcSkDC",
  "key24": "5Z8usmCeTWZHSVpdMXx5UYAcymZVuBCVzpRLVUjKQCHvDndnHSJQbf5bLUzyWkgpdcNP5udz9TwHDx7qKVW5cfJ9",
  "key25": "292dE2F7mGiyDNEKrooySc6RurG6LrewZxbyGxywixodsc9k3R9ZDqcgMt7WTvmpN89YTsvMsNKSwtsA3SLmJqb6",
  "key26": "5fmrhScVDeCCkP9pf1h3KzKJvVrZz6Uzi88YVAQCMKYcvWzh2WRtAYoJEXUH1TsSN1iuhGgVDhnbZRHmLMo4EEwu",
  "key27": "3SpetChfDMhg5cgzYTiJRE9MyYCz8jQeDF7Dp6CXXqEcuDhxWZUs8TMiJae3Tszibd8EyCgHhRzH6o4RysGnMnSq",
  "key28": "5Zeiox4m3AryJugDwe3cgPcvTHLuUwU7CftUAKvdH26adee621wgb9DJvd6y7WExx2H1nk993b8UnZ7KivQE5NkV",
  "key29": "3vQJdg1pGYaMkEujDkZMKpPgESdRDdFfpAmcLdT2hwp4RdHu5sh7pHgxuAgHscA3YpnLEc9qL4DUk49RKY4aBche",
  "key30": "59HYCNthgAmmqZGLRk4AirvYm6EgEXBURf7RKRu7UGPXcq8sdGCKytEhW2G4VVZVpUbun5NhpqJDNCh4CmY1z174",
  "key31": "EeXbnotuq54aiBM6NXPnmtMqS4D9n4zUwuHP6b28PuHCPde49kHs9XekuQDb5DWjVY7JqF4BdFGYNDtfnMz6i3m",
  "key32": "6aNfK6Ekf7vJXtg99CRPSbo99qzu8b4SNvbmKanLafaa8a2XRzCXJcxFH1o9BXK3QMYz6SULuD6GGXL8grNr9Ni",
  "key33": "49RPz9JpVVjtBXJ7myc411y9d33D6sMUWNtNJNG2DD4kxKaseFLqxwrywesQEghNGBSAZKCaHgp9XY815CKon5Tg",
  "key34": "8xp3HGozmnGc23TfgHA86CnFnG4pNTxqx6HjNDxDuRWJfMkXqvrqgpt3532eTTMUcZE3jAC1u5xAKsAnnzAGEU6",
  "key35": "4MdqpmojuSghndJZv7mpiAmSkFfwQ6foMXMaPSnNShbUYvYyN4kekFhZZiGSuHP7qwULYxGHKWRfRCm3jRAVxRmT",
  "key36": "FarbVP3zGRiGJ1BxCnviMYSKD5yep3VHmdH1kpMpYd2XrMKS2pnxCuceUDJgEGckAHwChmQGKT4eHAiy2HfDm16",
  "key37": "5FgXjaaGjy9K15sSY3ntcUVSaN1E3UVjeTfMCmbKCtzcPwfw37RvxRis1wX1qxShKhVjCTBQWqZxYvaF9YTNHfbt",
  "key38": "4gVq97JR8FWMLjzPupfwLiKrBKPJeqSpDVBDKPN1vkVGmTKeiq1wWAYuZ3dT5yHiQMJDxx5wLeuWgeirGUbPZKTG",
  "key39": "5nUbJgA8tTHuLAxqKazUwVC34cnofRHpQigWzXodhc5Ys7z1TiVMdRi3E1rdwpTHS5JoJ3eEqULBbFmtJqBp7Cix",
  "key40": "4Pn2yhxBMSPjmaBZy7yREbb3MYdAigSSgaDfjoCUmPvLYmGdtdJ67enuCgQpyMKTq9h8uJnjmc137F3RWUgmnv5d",
  "key41": "2ER22zYzwQcvFYn5HE6m3XFZinHJNRFreaZiDeHMkuifha1HmRik1Pv2RNLoHHmKTnnbgJ6GMHG2PhDkBXu2wnMV",
  "key42": "2ZHYTKU5Xt8jDkG3DnELf4ME1D7et1qtjDWZvLokfMaJ7h8V9RhfLW8nBHxcrwAkeMs7hULaxwdcKnDvaQKiFyzC",
  "key43": "65usH774B7C4P9q4vfCxXu2EgV3zJVXbDautoWzHCYuZTC4h4aBrvNywLptaMRPay6Wp744NJBEVZrVHiFhe6sH1",
  "key44": "2ceKWjW4GwpdcYSH8AKUzRt6F7R57qvjvpJ6rHsYoT7mSGHywd7CJaxE63pqvvyXyBhwcEq89ikAz6usboVcgHow",
  "key45": "2VAqiMxMf5N6PQn7nADUUNLMzHvRVwWaE4UTbwbVCpYMHvJq9sRnYrYiju81VNWzLv7YeonCXjXshPzqmNJJJYjy",
  "key46": "v429E2QqLfF2m7QtQ8ZAB5dd4rGcjpBMoviYaL7zYjmFidmvWroE7LdwXF6ccPEyFscjAhuBeBS4xEyFhcDsntt",
  "key47": "3ZkNVF465Hkrm78Rzpbq53cQY9q1Y1MmG4gmzvnGJnnuDchmyxrACz1BemtNNYg1L1QBoEDSEfDQ1jTVRafqpEFu"
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
