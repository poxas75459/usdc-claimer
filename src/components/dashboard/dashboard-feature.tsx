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
    "2QNtBMvPTUkkVm4srgJgHKKEiMqRzCqLwJmDrYNDfBNy7XREUPQLFmCz1qgnnagDEG7jEybLg2FR1vPr87zXem7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrWoiMkcgRQta8bfMaKpt8nrN7fQYBTDnsRojAM3upvFYv1HWc8hBLJYXcfFLWZjtuUD96DTZWJSYYGgS2yA5Kb",
  "key1": "skSAUHfesrChxPDgQWazG2A4ZzsFKR5LL3by9nSwufoweCLWJwQqURzEZFtGj7BegPN4PEHpWkeWzFDv7QJxbCr",
  "key2": "jJPXi6hAqeAS7K1naZmxC6vqfG8AqPDMwfyu3AQkfvueWwZd8bekbqwUL5FibgqvqsqoKXBMc7Hupiub9Ba7kXa",
  "key3": "4A85hCkmzdUAM9VUHs5MCywdBRFfMRFwh2idu7EWo1dBto5PSaF42iuQzzZWziZgq6Mq5sR1bHHC4mAcfyN9yUp",
  "key4": "5sP6Fmr9LijsLnVsAWg7TBQxmLrhWXZvyRNuV1qi71Wsrp3Ko5Jat1A1ABnQDVNGNusVguSacDd1MjgDW5cjPTa4",
  "key5": "5ppE4PzQS2mBUUU78udGKkfHT7Y77iyEXyYTqrbWpcJNrchFkzyPPQAsa58ayPYuAydwyBNgZGEBAAQMWnuNB7sz",
  "key6": "3hhTDJhPuLCgPfGfTSjeYnv9Y6RDVtvRTE2wtaS3r1NhmtcTgPuboesufh9Hw7oBn9Ko6yepHEW2unUtEy7FsBRT",
  "key7": "2Q4cgbkiSxS38dyAKKM2pkbMieBJyhbo1rkfLuCsrrgciHy8p7tn3F3UzVD4YEBJFJBHRoPLMVpwtWpTRorfAtbj",
  "key8": "C4DU1TywMZH2TtmjyJpM6fuD48Cef65w41v8J7HxGKHJJKqQqEMbG6eajniV83H6Cr2BxxWUf6M5Lg5iEcqwge1",
  "key9": "2zLyuPY6Lz72k9hg64q5dZvBnvpLeX4kvcHMtpv6gS1uT1JCvMwoJ4xA8yiu6Eie2JhgwEDyE7q7UMuCCEKrQUTc",
  "key10": "3Avnc5YuB4v1QvPqYHdVxsFMYgL4LWqGWJKqwUworx8NGWjW5YRLzNZX9tKqBp5Xr5CxWMxCopPyA7EG92gi9pYi",
  "key11": "4oAEUCACK6bp9j2fVScLoN9FfNUXfaC7Ju5tg6XgGdNPDkC2b5J9cDfhNEUwYyetLopGXnpVT5zeWmzdLAo6kFR6",
  "key12": "uK2QeqCF2YrF3TpPwDhDJXjVzTSS6UncM5eypfdg6Bn8MgFG3aqhEB9nuqShYkQREfzbxMpQDzU7wxvsbphWvNb",
  "key13": "9iNdGLvx937agTaYnawR2Q2cZVhHPx2g6jFj2bm3xZNXkrtQz82aso3mpPicKYdyoPDEvPfepyuoekbtypbjrwo",
  "key14": "3CYUN6GrojJhBS8EsXjLEFHjeUZ1uEiZ9KPacwP2vsdNswr6eWYsUxKVuBGRMiRcP6o66nJQ7fmcWy5MV5sfXUne",
  "key15": "3RCGApXo4RSx2txxJW23bqsQx378AviWxz1zP43NRQRPrmexXWs4amjoh98AAB8CJBvCcKifLZ3dfnqaoGtWFNeP",
  "key16": "5JoBRAz9swqDX1TbRRtSoAa2pjhBTHSytoQZtYH2pwrrkpKRrm4EhM7D9KvtN6QNsJSKaw6HH5D6yMxCzo9yC8bY",
  "key17": "62343L6Gu5qBHFsJtexDjpm69Y3TtJQisHdCtwvRUbn9fcQYcQEsLka37xbKGaRDpQjbGjUi9j4HCoBa4HAFZzTi",
  "key18": "54H8A9aXCKLnJtysXQcpefuSC9CGZwV8kpSv1PWH5HSBig5AFd6L4jWBzEdVTzpmrbg8XZkcHoNKnVE9QxgSXdvg",
  "key19": "3aY5vt16B6pvG8gFA4Cvqx8tKV5eXKkyh2TwCd8aRUMSt9onEpMCx3QyTjDdGMnCx3qeegYh7cn9tUGe4zKBUAN2",
  "key20": "3QL9LyPxD4MHanBuuSdqSXu3WWruFLc4Je1MU39soi5hrMSuUAK6cCQEvyeWueEShEK4RbLdUPCCu8x6SLoGcGbM",
  "key21": "d1woEFa6J4yfN1BnXDa3SXMC4nXz4uMYCDxW949x4qSQrXgJih1mtXbZ5KBMAigeSUdNzVFeyiUHphxD2CaTx9Z",
  "key22": "5x761Lgy8qeyhKHUvY2xBYNVpDNoUvVdjk4AWRSxv5nPBPcHjQPkNoYaUMVZQMTtePYYzRPb9Rkt1ajxMQNq2vRB",
  "key23": "dyNFVW5Ln3X78ebhnN3ziSyNgT49kCkCvTeMpRWHibFeALQTSdDmae6SPbKu1FvWarPDzDUq4HqNvaoFkigv8iN",
  "key24": "2vQjnc4eg1zkYRPBefKmJSJHW9b298GFPuTeoHKg6LwK4nsvEyd7BTetxNuMaqZF6VqE4kV1aryrBBzYHFzHTkDG",
  "key25": "516KdaRofEXyN79sZ5NRKsZqfPCituHFkyZUYE4SaHCgEBzTGoN6SdUTmKiApdbw2wMyAsMcoK762LfKEvaAFiL1",
  "key26": "3KGVhmiqXtkXGT31R6iVgye5f7YRzuQ8asgreBs36zLMxj1P2vjpVPz86SvViY3Mfed9PuzQW638VB15YP4v9TNn",
  "key27": "2AVnkzZwHuQwYkt4Sp4f1zq97y3uGTFUUy26Y88idsdCBzydmqkRPrNrCfxngpBh7pi126ntivikynB6Y7xXAA3T",
  "key28": "36hGVF5TvteW11S4vR4ExgtqWeb26MYPMboYEMuPXzZbXStmuiGRtzxKG39j86QaNhVWTo3mWQaNPw3oy5FV1thY",
  "key29": "2PBtnVCC8pKL8RrmC5pesbufzAbx2hAMNENMxwaCzmgkaeYs8wGqEmxEXstHiuDkiHfhYo7frwszF8NRkH1VpqMa",
  "key30": "3RQvs9vKioDYRd2aH5endQLPGfnSdoKiY5eyBjjCTCpL3R1LDtF5R4dcDfSQhugXu9teaUAFUVyV1sMW3C8vuzyD",
  "key31": "2yKyMTdjDTCpwJrAJvtSYSXLzNd5R4dwMZmCFiGYu1qfdcZPbkpMaxDUV8CpDnUAzr2pcX8ssRqzrnfymW748BLG",
  "key32": "64CMwV4MubtWE5p2Hi8Wr831ZoVrfU2U9tY65YQE2knj7sPRLhjAQvtHNSyQmxHALo2CsAwuCyCLWQVTXyWCEy8",
  "key33": "vrB1cyvNe9tNbyJ2dNyceh2hmp5nzCzj4VmkYStjXNLRz5CHYie3WWdRQPs9LwSCsmPBfnzjauiUSxVYCbKFAJu",
  "key34": "5V6oYhMcVKHwosvoiAh6YgeQDWbGda3y879nqAAxrgx13G9nf3WxZGvA7byX93F111ekr8NQwneFiLddBBv9G1jR",
  "key35": "26fVCiJAjEXr7NzYAYMGtUhjUaKzDmH5V5RepFx2eZQQMaFWE1UrWjaxt74pVYvByzhq3mKzZcN788aH8uMm3UDG",
  "key36": "5TaNBuXZsN72q1urSHvXHjW419yVLZx3xyM3i8TiYraESjkWcBS8LW4abC8Hgfzkxr5mWsBprYSjdeH7aSwivY2f",
  "key37": "3JygHNgxtLFQfzd88FzSyKLGxaPaYGA7S2CCR6RPBAXYmxCBt83PyVoeeoMirt7mZ1YPzmWKhoGf8sh2Ckb3kQVZ",
  "key38": "BEXmE69Jm9pNXs6Wm2oDfziUh4S6Sw3NTNLBi52KaLRx1pJ4F9pVZWR7GMAc1AZQXEPrrsWUyy6kchbyhFFzSBK",
  "key39": "3wSJq9wfQLYMg2WwmKX1KYBipuricyf2AtynzijKuhGHi4HMFFia2JVBGFE9oJ3HpGQ2LEVPmvvHbKr3X2MgxZrK",
  "key40": "21Vn26a1kuda76aUX6FP6WdPRrRA2seazk1nWhnsarg4WRN8djxxoezqgdGEix4ZQewiVfqfvKiofGG7oSFGDHFW",
  "key41": "4BFYduGgoB1ayPvzpqbw1wDmyYggfN1eZbPj28GwFezurYnDJVR769ahSfDj4TsWPfC6aP7AhRW3t6Ncd9DFRw9x",
  "key42": "TqdRwnj799feBDyW85wKPULUpkwbfurGZpqC28urAuGHMVz8rzoopRxoUx8oDMgvuJZjRc4Ctse7PLU8hG3N9DR",
  "key43": "3ZA43e74eUD6sSxXGCQyJ7UAfnFPwysLb8fFENvQLUkVRD5kLH3ov8NvJengHT4eApvJfi5rEeXrL7abNWdfCAeR",
  "key44": "5c56BvBPoz1xqUe8P6eAwW8oRz3h1AaauUwSxsR8WCtehPjXtTHvnyYUuxzbZPEke8QQrycY9iGKWv16zQechtpq"
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
