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
    "51RNkbXqCeRDjhVcv3SkkyvKToMQGTbEKTYWen3Pw1Tqt3ZyMWtaCvChENgviQFRZfJd2Mp72nhVudo2ik4wbA9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GtaGCDsXvsWW5E7vJp3YiF1CBBj89uTs7TNS5Nb8QWUMxnRuwa3XJgg7WJFG5yT14pwX3RgiUCQHJ3nvY9u7xQP",
  "key1": "2azCutzcg1YzEu9r4PjaoWPtpGuh7RptkqvYiKga2RQoj6dLD6wF6DyoXCJ84e54eet6jUuyf9LHvtvDZN8pEwVq",
  "key2": "5ZvebrXsb5Fgrh4LeLrBff169kp73fMYqbaYaKvDErgwgh1WJvZjPsopFokhCR1WTWwxBpSV2LQAsdyv3KoMWBvh",
  "key3": "5fGYfrAWwHegXQVXHUBR6DCwbNtdgsGTR8YLYxjnUa78QchKKb7AR4Q6JvYMEZoVbq1NRLSx94VjYujhSeN6eTQc",
  "key4": "NVKx8SsW7FrQLeDyvu6yCMsVtEQjFzuCTSLkuGap6v2u2qSa7AgaJbAZ2aC367ajDuhxFs7n9uu3Nm28dWWCLpu",
  "key5": "5nPd3yF26uddMtHvgCQm2toqzTz7c7Dp24KbTDGAfcqcmaxz6tnbJBJnqeMWkuuNymkKgSjqNzDpXNmDfxiEe5gJ",
  "key6": "4Ji19WgYbYbx9opn6FF1Sago7wTVqs5okrDMzNfHXjUjPCXueMtrsiUye2833Kh5tEK523JWrje7MbNLf3vVGq3z",
  "key7": "4zLWf3ZamvihAbfjQogmgGJRUBM1HuDC8jS2W68H3WNnE31uaqN8uGWNdQJpWe9MJR57DGs6ks7GRKEpfgCQpira",
  "key8": "TGqQ4jB38dKzgqM2FfpSemqUji4x1WaKuXsPNBsj8gcEuvUjDB5RHUqgA2btrME1BTCFs3eqMjGjgaGHNvUgtj8",
  "key9": "2o1p5nETfuAH7xhZt6nYJshDLBMKzgQNRjqx3zfMueZVMkkRERPKwW3ZBwfvcDVjVYrZov9HgVBNf5TFp8vFug1y",
  "key10": "3RooakYWWBiS5QU4hBhouH7JXGegPsJZog6HZkBP9Kh9uBqkUXvXPL3WPM5pQvRm8MqabRiUgJjFukusrY2S5BFs",
  "key11": "2GUk45HyfySjRuRhHq8hcMyU4fQVjSj9fXNwxQYZsVcd64n6FH2GQPfWkniExcnemCx3pK8ihwxsGvSqd8yrDKDZ",
  "key12": "4WWp7KdexgcxQAjUFznvibGsFoovNs7J5yMmMes9Em57hfoUGGVy8zNfRm8UDsWSf9akj6cbysQiP5Qq2x5y9aQS",
  "key13": "3ijvJ52f7xNtiuTbJjnSyZyTgx4aLw2j6QP8fSN2bu11rcGS8moTuGa4veHCyiHqbRPjaBqFVD9ctmVFXe1k7hSb",
  "key14": "5r4M1ZbGGyRxzsh3SzwKBuBydjRu3MXPFiKjmJZionwKLW5odDYhaj9N1A1dHNP4gSFEs35snTwhNG9FZxp99pmE",
  "key15": "3RUkpYpDTBC8dPoWy6tQ4vF3FuGAH8XVDxURoHZqnDiNcAgekH7SXRKHTpj6SudPdXcs8VBr2dPjKmYt8nXiZPNs",
  "key16": "5uKuJF454pE2AepRTtwy18GSqTCFcQzYgkRkWaTn5so3uLf439dRfAo4sVodpj8cvKywS7bsNSXizuDUQC9KicfB",
  "key17": "33XPKkmqZ4J4iw2GueNwfqV2Q4DeFxEBsbYRYxLUZBjgJscoQ5g1jpKMnWNL8S2CR1jJ3jnrDfsF4JWXKU4TT8Nf",
  "key18": "3kh131zhgVWFN4V3hjr6aVJLdk29VNREwZ2U2cxsUACTfzmMNKyNpXGUiGQzJy8K6K1NChSK6KWFrb7es5m6yk8s",
  "key19": "aT7aA7s67dXNZo7MyEhVoyozx94xXisxpc2L1Ksabsx4MQZ7QiHozwJPxLxckng22GGZzNRrd7wBaYPimYkbtwX",
  "key20": "4EQyNGyu9g9fT9iu5JgjMNikp57Zc8EayNFStxZoNH2QKUDLKNRTrUqCnSYoD3eEkPEDvBhHS7crDeFgPTwUGTZG",
  "key21": "3MuniinjqYnijrG4Eg87sE9efVPmP2BqUdj4XsGLG2e8DsibmwwvicWgcgbZCwkJp7Tm1s8uPBJ9USduSmnS4CRP",
  "key22": "3n1Dh8fmiV2hyqCNyArM7sUjV9u7KevKDsFu4UL1nC7XjGnrNmqTe8DkERZgKmcuujpHAE5KBAtXqKfxoSnFo4GA",
  "key23": "5GN2aZFDBzzYrqKrLGmtmezFmVkYr52e65vFb1sNCcFXJfXQzDhvbpEWEjesRP8TiuVuv2AywdDVi4PzDhrq2wBr",
  "key24": "3fFNLGeYkkmDqpoayUrDmhv3WFsbfXwnjeShaV4BGa185xdTV2Lyie1HJNahKyWzP6dgwZiwFWiXBXg59sktLKPL",
  "key25": "5kG3fPuCBodgebLZf4XPBraq6ETyjhZaYCdoz3TYNgVreVXh9p8RnnrpQ936o7MVBkjgMi114ud7jgh4w4Tg82YF",
  "key26": "aRgNozQ6S9qYZfrQbmRacWvTeMbq93yj9bUHyn7GaeqidK2FH2Xs9vz8TjQnjHAhbgJvyfriiR3JiDjiqqx87da",
  "key27": "5z4e5a54DcCJjdHznsFXMEtYz4f4aUoYBHc9byCkGwEGkosUdvg5itbXw1cbttvuTn8qVt1rNjX7KWamb5CyMkLW",
  "key28": "2f2bFkZuTivZCjFu6cjRakSP1hLJonF6pBtiwSj5jQLQomWaXZxE6wHHagqDY8z5YSRSiHMWDdhZvFQkrTuD8CXa",
  "key29": "54Bdw7GcKCqmFqS9jKTqsMnkEZGP3jeMvqjMU62xBC9AwkaragoYUzL5TmtAz7bvSeNvj1jhHAkdkiTKYxwUW9b",
  "key30": "5BasowTNRpaA32iLU6rQfYqgGkWVGartH49Ry5xkEdPRjdgdFDaAV8kq6GvpdJjMgAaCPXgj1Wth6DssB7f7RdM2",
  "key31": "5RVBc6Dtuetwq9TybtTJ5vBnfLLwPtC3kM1X1adP6TTxwaCNKcDUiXQRam8Kj5Gmkx3jxJyaR8r5qnbifgTPCVUK",
  "key32": "4TsBSz6UqmwT4QqwZpgcKfLRoZzisqt7fVAAnG6CxWaa6j67zaNqKY8oXorAcvoD3i9rQExdVW9veVewPM8g3Hj9",
  "key33": "21ArErri8Xojb7ENgiK3yw82zPUV9x8zt3TFTTVPiSh2dJscgqqpjvRBLnzszWp7W8cqSvAYVPfUH43DZJGGakGU",
  "key34": "7GxCRXMcmBzPuDUFkWmmbR7sjpJfUGburn7N2uvG5w3DEWQyivXjJGWHTT9GRuq6Cv619XPaLPgD2PCU8rUCCdN",
  "key35": "2hUbEyPXgywTfJX8k6ctDSc7ptYuJ7gwpvrSQHGg619XGCjpjG7fDy68KVPokYP7bVxucxsfHBn7sXCRXB4eqMpX",
  "key36": "597LguALM2LqJV35gn1vzUDvqwd21XYU9uBqn6EAFVyvuXGxo3WFNa1tS61joVFYxkcnnNmVxFm6y1YF93tEqs5D",
  "key37": "25ezFqtnP3BwXXXjFJV5Rhjzj7Psvii5fvYqAU5zwyp65V8yusKYhyvKxKErooMj9KhKKyHpSLFH2vFKwGn9Sv3w",
  "key38": "4pRcqbZgaq6zZGqu7oAKP6EiMdEtMCgGwgnsQQPtiRvurm4mNLucxwy6PW6KNBGYqooq2S7koGwLebMh6xmDfubG",
  "key39": "a8Msq5Gpqu7ESBEjt2LBNGHehztZCXNnJGvFmh556sUvGa9EySyKriN14cE8qibJAjLTQ8bEbnemQ5zAxn9mrpH",
  "key40": "3EBqVzNdE9vxPcThMEMc7NgVudGrFMaS4ZYy2jybzmJ3zHPD7qowbxwiUE7Yw1DFtQXoDph4FnPTu6gBcFMbZYbS",
  "key41": "5XCT2gyboZYvSDNr8TGrqU6RHBzujeY7e4SP4pMqsk9jGfGDJB5U73gRSoaxpdPqhWAocAW2SYowoAHC8outbEQ6",
  "key42": "2TfUBdi4ywjWeapPpGMMiVbZxk8WMiM9Mc4nqMZ2rbAdhTEUZF4R8cJJ5J8Xsbu5Bw9EkjSTVJBcd12TSQQiSNtm",
  "key43": "h3XDTj2bDvggGoJPo8fTxFkoWAKZ3QDtQHkzaYMSGnNZysfQQvfyZ7MXfcr3DtHg2LoVBnBoaSfjArjpWGRToPx",
  "key44": "sYQRU6uNqi6KrzRUUf4bjwj4XrAFi3y9H5pDGfB5ffyJnx6FWVMyAR7TURyWR2h14ngvvTQsmJwkPKdwj1ssbiq",
  "key45": "3M4AKyB184NGCGfgS8Wc6Gfx5VUieDdi7EzK7hdBnHcewSLsmmo3UHWtN7nT59bJHv18y3sAVbiJkKA7ZGCC8PEx",
  "key46": "3iM598vD6V8SbhKdx8WGZLJHiXXNgzjMfwaJW8VYmaQ3UTZEkxsmR8YyhRSSBEMj9TjbquuimX7uQxDPS5m9s2Q9",
  "key47": "5o3r2FM5CbMAoKKxKx8vFX8Me5rkVsPM4VpDCMzRPTqoFDMF1wbKAaWEV2adv3H4vsfqSZEDmNppbgcs4QtomAWS",
  "key48": "2SmJRsgCadYew7W7CS9qTD5k6cKxZK8eVyH9X5KxF2HDfn41DVE8NUxLFF3PB4yyaGMDvogQW8oAxuD9AuAdoWYK"
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
