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
    "4r89NEBwCa5vAKHYKXDYdPRNc47fRzztVnKGLe9HvTikCcb8m61MeWtkvPR4DVfKJJN11b84rn85R1qFa4QasCQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fA36vsHzsVJCZSuD25f2DdymzYsgLfN5uLtGKf1Jrnk5Bbnuvx8cCE4V8iJirSGTws9U4vDzvx58xwFdybMn1Je",
  "key1": "4FJtM8Qhzi92UqjWP378qB6V13trg1iabMrgRisLZUcSsnhsosXF6dDvsHTAc6hNcu889Jc2d2Ks68Vydg7sKyXt",
  "key2": "2q9Jezvq9Ag8tgYJdAmi4nqDY6SeF6Z1ebk1ohhTzqQBpW8Vri7xK6F5WUzmAjv1zcHzKEKdFT9gtGSXRJi1eoMy",
  "key3": "45fzMp1P3yvf8QNS4DrmxBMZiwmf8mpGN1JVGUqAt389YadRA4SdQ4HDdJbWdpFmwVdCLP2DvTrdWaJSVTxNixiN",
  "key4": "4AnDFMS6dgXPDte9jpMFRRvEkiXpzMavX2grLYPDCm86VH8YB5KeATSKZaiD1MAD5tmzPKEUuiRZ2EeKmXz5tgWH",
  "key5": "5wbLnsqDz24Wx3kQULSjPjaZUnW3zvpSayNFhQwzQ8ZXnMx24ZG1EW9N45vvhENgbNUDM9kQSsqmQSo1mawkQNi5",
  "key6": "4cae6yPHuovaLshhUBrS6FHjr3FtdXHHiAqkSA4dfBsaQiP291fNUUoeubbXG8XvGDeQ8AtWqqK3nDceR1r3bNsC",
  "key7": "3PJYVy5Ce3153P9HmGWJvXoFE8Hh9VQPFLzQaHyavSRSEjGP9EiLLRTqGAhDWNepL9jVsNaCGvuDiXUnFt1o6Gke",
  "key8": "2epArtmvPxpuUeaFZLcq7Zt3z57C5bXjzeGhHdVgW9PtvMV6ks8wwQiUnCqXmFfMASxCXJg6Sd9yRbSHGwed4dMb",
  "key9": "4w5E33wJJxU8P98J1wsAFEQNMpeLGY8vWrRLyeJVWPHtsWaJRAs3ag3xL1zfaqreU5SgiJaFr7vUQ8CWj2aJQBUm",
  "key10": "63Pj8e7ScHRGD4V22xK8suSKMWigFPS7yJ1nBGAiJTUsKdQ2t6ynE4jwoNfHJiKR3TDM1kYruqENG2hebZcSo9mE",
  "key11": "5r1gyKrnvgdeo8xW51u4JBN94Bdy94drpDVS6XyppnFpP1FHZ3XEU2UGhzrZTtBYu1MMZXQjNUoWUET8VMBCkPbL",
  "key12": "3KHEHZUukkMrnEoGydnxEJJP1Ysv3gLx6YJfusE6RHgCrC9TV3endEyWgtvkamWb2LAxA3s4bhvyqPni5xULgZ3f",
  "key13": "2qpATErcAYFLeHc1nf8ExPwWKVuRGVJsM5u9w3TZbH4X5ss9bftcXkp7pSvYi4X1hCbdXP6wPGJoZofKMLtwBg1L",
  "key14": "ZM8n2GWqcUX9bchhxb6ZsNTuHgbH6sTCpAxaTkpNvuCdTu9nvyK3ny3rN9bXa3HyY8dfFmgKcm8uDj2kRkNezzx",
  "key15": "3gau4qmKjhS6aZdghHo8GxoYNMXuGngG7EuDd6ofCqmKiK1KLSJgPbt2mQJWYoivmwYAzasw538GvFwot6WUtPPr",
  "key16": "rqzHwNjCXB46LA3sS55K8Ac91GNuTBctrptqydRjHP3ATsNQtGLLSj4yhxP1466tEvxPwWHVsL7Czw5PiUnc9aQ",
  "key17": "5jwNwVH3RQM9b4t8LzDALtT9S1pzKs8vbKZMNf7pkCaiv6b1d7VBaKuxZPh6NpGNJHKZr6V7dxyttPpDfTaEgzAM",
  "key18": "5sxgqVQu25DLgJPQraTnTjmmYufJswbzuRtAZFDr2WPMLAjErk1WRbjpaY24tbNB6qjXCX4YVF2nUWFBsXF6jivG",
  "key19": "3vsWuGGT9ScRQcJg57FebPFvLcwdWrwRHvnbSLiPKn37qG3f37rZXXUL8VDbS5zebAh2marhbjusdAzoYWECYHWL",
  "key20": "n2zDp3qjaZAGuE5bBa95FxZi8oaXSig7a9abnU9CBJUvAQeyji4qMFwz2ifPAZQZSkmyWn2Zkthvzpw3zaXKtYx",
  "key21": "5jGN9CnEcaC61rjjH5vHCQKvk3F5TrEdKvfQJtiWb7x24fdLuDNLUPtutKVEZQf7jk5NJgx1xeLMfTQ8YUQnfB9s",
  "key22": "4wHpD2NccmLVpTy1NxLZ5meBnaNChRwTLv27Em6DBWyzvjBS5SDXPSGJkSBjtnPxE9dErnPHXGfe1XkTW7V21NxP",
  "key23": "4VSnTCZ8LVWKnxswFG7NNghkr6hpJufsi9iHKD21j1eHsDbTruWEUq9n5dyRL8RjiqgxTA6VWBtUh6Qjx1CaxSww",
  "key24": "5bksEAQu7BpwF62JDYoZHDRs9sR9wyNQr8VaE5ABnEQYwp7xeb53K24YW7FrVN8Nd3MXhCEqxe6RtN2eA3SDiVDg",
  "key25": "436qkceZJPLQim5JruLi6FG39nTen2JtviTuM6RkopgE5tpALFhwHaLXmicNmHJ9Cfh6PsuGj9B19NFGHM8BgUZm",
  "key26": "3PnpPXBhedEHaMhpyRP9qaXhrRJ17iTXanFuvhsouipCAa8zvoHc83G2JedfTEXr9iDLkZho3mpT1t8drA73A7wV",
  "key27": "44imSNxyP9r95LtETdSW99G7uStvSWJ37MBvG2yW4DtodDyeBwiocQSK1baiAodjpMZfCXRMfrf9hvwHgxXQrDUu",
  "key28": "4G5SDWVCDZaURpXQBrC6M1u9cDT4yRBxYGxPVVVZsgE5vnqraKBBZ8WhBT575MrzttzVRng3yNn8eMVg4YVy1Ui4",
  "key29": "5XMYvHiqDMqk4tNNW3rzRfRigQS7PGSj11KxJBanCYCqEzT6ZYWvTe3oZZL2GyL2UVZjJ566QPX9qm44UkMUYpmF",
  "key30": "ABvGpm71zzjELvhYesJ8dAbQh9QoFUkabwa3PveQNtana948hNAHg3przsX6Mmq3wJZMd6yhmDDDEHTBadqeGJK",
  "key31": "53BJrtESCaRbHVyXHmkJw2Vi24ZN6SV58VxAXGJ5JHcwaUps96wLqn2vFoucDrjU3SeAdThHLZhKjPa24K34bjWH",
  "key32": "3HYQL486bB9DuaqfP1hEeQRpdRCSu2PWNAq2wCm658WMonMdVVMN5U957NiRiEvy3z5NVimaynHpSgUNoF8AR7oG",
  "key33": "22DinK4kMnZavkJQmTtftmbdXYSeSLeqHbewpBwXJbbVkjuEBBGfiMKwhooAXfNGTyfs1Hw86eYUMUYPWDK9u9Su",
  "key34": "2tZVe3aVyCUZpAmgbvw8N9vC94KMvTpUuxRGPEutoLXCNvrj1dvscSmBcJUMcNhcyxTR7jcrWdaW7nsUCAjxFW3Q",
  "key35": "2buZhC7rQctdLr7U4YBr3iE2dCpgHFdsfkSrggT2HH1MZfzPQM67b2iDtgExAZo5qW55HnvXKbqoJMkCX87B1Ute",
  "key36": "4kWFV7WPfsGq63NZqozzNasr6Eq4gEmc1X9mFbDVs2EGr9bxVMKCH1wY54DX77Pz4xpt4ig3uquSzdHZGSAPYpqo",
  "key37": "5rBZvDavFMpLc1PayXEBE7qBkC8GEdmXwuAYkQBQeLYd5rt1AZvfEjAvoCtLRtmFJEHWGBcHu95tMg8ft6w3ijwm",
  "key38": "LAc77nSswzTVzjL3GiqYBvjqQ6sCDx3Fe26fypYGiywUnYh62n5T2BG55xragT68NfHGS7ZV2w6mzoruSrtjkJC",
  "key39": "66SDENPov5aHiJGRGHExfjxZyUfQ78Zom8ruJ89Xw1KBN9Pscekyc3aoeXar7of4mMsET6cJqz5P3FrJHEXcaCDf",
  "key40": "2YrBqZd3SgGZpfFjCm2hVhsH2FC53w1W8NMe5zaTXvLY9Xe2tVAfXFwqUpJU1hKvgp2B8ucFp2jKY5muR6PE6vtJ",
  "key41": "23i7ADG4h7EuWX3s8Fd2xi3pCwh7gR4ri4f2wGqFQ3xPcKqEhzobFaTbLg1RFXJwS2CjwLJt8Dswe1ebwyNiufry",
  "key42": "5yYa6PNgYbEA4J9QVhtZHjbmrV9NDB6K8ecn6nhUg2E4Qy2PegpFFvYPUaLM9eFDqvgrQ4jCbRW8qv1R3kHufe7T"
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
