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
    "2gareXw7jn16PJFkrPKNncebm7t1DhHm97nr536bAVAmzVrDwZhdo9vhP4Y1npVDHZw4y4voQCR5yyvTUXRq1s22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mMcVK95u1SKcqf4zAEux9iD3AooX8oruboUG7rKS3d5SsCdYRE1CDXHG9BnbY6UAucu1aLkGvWcHXmqMaMEc63i",
  "key1": "5bvdFtmEN3zNCq4JuJ3Dp5QuuvyUwqb1adgmntNyRaKZMjtBN7r4C4sNSVR5X6EBAWqvuH5RDEqKkKLRBVgAPe9s",
  "key2": "KoTkoxz6mBgSmJqQ3v6y2cDQLtt2Hq1FhzquXhwMY3aKdskLwPmpHs9jv92xqzViXGGaW2WHYkfU67oFXJtJ42C",
  "key3": "56ffYjrP1hjmHRyDCZrXHFdz1W4Ks3Pj1WzreKpzTgiAFs3R2EC2mLT7qTrHgJZckGBQ1Pn28j4tUzBsNAw9FTKx",
  "key4": "2EJZJkt4QTiwYxJVrTMqcqEa5cKoJabE2UFvXLJfsNiQUyhgcGUjoQKPt6p6ra46CmUNxt2Z5PXXvkVrjh5hJqU1",
  "key5": "2vxBv8FfzUwtmwombuqW8L3BLW9nHwGAtT3ucPjqjzEcRzGDT6P1LWiPbwcqKKu6Dka6teLjGJ9Zs2jZWFiWKqgh",
  "key6": "4wHw3PPM3XAUdjovGMSknwvBnsxQRdKudBY8GvPDN5rmoX7SegoZCAKSa6fSWfhG84kEtRM2jAVM7FZEwafZ2nmL",
  "key7": "4AxMhYpHCYGPftkfi37SJYsjamHTPtx5q65VUQTPNCN3xyw3HkjQn3GpiNnE1x6bVFtnJiPohD66RUxDCm6DLshn",
  "key8": "2yAZRUB2vdLXwJgjfvvSF1iPHapUYj5fhbLZVrvxZxFPH8xe1iHtZWHmKwToxTNxhPL7eGof9DnCPXs4jy4hMVy6",
  "key9": "2H2cxtwYz9m2z7CSqFAo8iyAJm6SS8V2qQhYwYy6VstR1vzusKGZjZUF79YVjrPqvi8HcjuKegJX11EurvcjN93a",
  "key10": "eWe8e5VDHnjoo8frVLM3kFqAURRFavKyXTMoxrBks3JaYvfQtaH2HfAiApCzdpZoTu7iKa8vGzjsKVeADPYiGUt",
  "key11": "4eyFMyjzABPtoYDJm2ybMpkHnCYGZswLVEWyvgUjMhf8QtHovVtd7AqQRRiPPR8EyL5YcqZTxsFyc5fN6YagAMiY",
  "key12": "V5ibJTy9ojx7zjZTBHjcPQs8PYjS59HbsghLoiVv9wej8ktLszMnLuVUyB1MZeRAHiNvLLW25pEpctyDLfhpVXn",
  "key13": "4LJLUom2UChbMw3EZRC24Yaov1TfCprCpDngExPMw7AHpGJ58Z35MQQxkeNhTVxeE8bq8XARPR23HwtH45AVNkZ2",
  "key14": "22XBwzhMcmDihDUrg9wBG3M1LUaqKhzKxAXRRSaf2W8t55RgNRhWKGWyWXH9QwBMwLDajr4AwuWwRKtqxoVj6YtX",
  "key15": "45vvGtTXLMYtxR1GwQgX9vpd87pSfvLBeXFuKQ5NFuPxxfXnta3ocP3Pnt9wrZGp6nTdXbuW2w7ABPRUWrFHnHrJ",
  "key16": "2PESoAEANnidMo8AF5EtzXjarGiPAadCktUwx9cHVPNShxHTCWRhDHgey9jnj14EFXEeV71nJwUsa7RHR8tReUuX",
  "key17": "2QMbgJNnGw4tGQHezHRA5p4qrUZRd1TB1di8XirLAunJ2H85k8ppfEiKXCVLrRpoNUQTkgLAQbCTrUbrJXtezW6G",
  "key18": "2a2Y8nhzWv7xfq7hUzQqrFpjauVwFrAcAb5zFpdquxwBJanN5e7ug8v4f1N9VK5FSHYeSgcEizvLZHd9rzV4PHzC",
  "key19": "3hnTC2vF4fxX9awwUa1HESpDuVJyPWWx9cmULfANtETCMWXnotZUV7YvJ6Hg6vqvDjYXJyUwNSYRB36LSTcq4FqR",
  "key20": "5NzKj4GonoMZv7PgWrr9mBjkk4U85bFC8hEkmUnYEuPDv3CEhHxVjrf4L3Rdt6HErKhNgduW45mbx1kVyd53J3uw",
  "key21": "2FdSh9jDytNrVZs51EqnqEpynhjHnEk1g9geJG4jxuETqGueVQmdc2GzbAdkSLfisyFBjiRv9GfmtV8X2H4wGjr8",
  "key22": "54hWi5ynrSpNpzHFB4Uieydjc7HFxguhw844ij8mdDbAqs5wdLKhYyJEZqoxEGVBYMKsvA11KdNUTDaKeEPez5ei",
  "key23": "2oodT5AD8NAcEiuiUK8kFcy8sUB7Br42VADUnWh8aJWegH5CYzH24sz7PY4KL74K2kRooHahkN58PUusAYGX2xk6",
  "key24": "3mRjaSsCtCZhoQJCCdWRf3EjsUyRimodK8UkqhHBpzXwvhhTmoSGLi85bD2zJJj9XNK5EjmPmwoNU4U4U6HQSnt1",
  "key25": "dW4MWPG2LdmRMEu4rtmCmkJFFXUJm7FPkHAP4s5FjRjsEBkZmgBZTynCpWfpaA57MhEpkeanLkDJ2zpVfW5Ynjb",
  "key26": "45QtFuNBaCycGWT2kTH8MwfLGGszfHFW9aYMb9CgyLqUr7czonDmHVDory78bEnNyTG1bXU6SQYyejWyDRAnf7Mw",
  "key27": "2ESiGWdL8hnTDbVdYzd6ibvDbiRbAohPgKjiggG3cjkXfrRG3UkF68pW2dRmfMjZTubVrS1XAzxHvoYZJGRuLrzb",
  "key28": "2jKUWhGiPjvvHHqRedpQvVTrqpdvXYKhd97ApKUPpydV3K8Ah52Ez7CGc7EuFPpNd1ZEAuuZsb3cvwqthRToitAP",
  "key29": "3gtfbJn2osMbpdv8fmSF3KwuZoJeTy1uwNaNH6cscnHKZfoaxTAT67bFkmtAjoB2V5996bvCqPCgc8p6Bz8nfsiK",
  "key30": "2nVveiNT3PqHYoZdyKktKW6ddY7jujaCziHwSPruoEB27LQFdyRr7Mw6DtY3vb51der23A6zgVjTcfiHdhT8FFiP",
  "key31": "5pZGrbqtiG2Y3ufeGayh6sabwy1pD1KuRVzJzUXTUoEgyTHuPkbFJzfUCufzNFgHgxtJd7EZSVG12sf2Ptkoqzh9",
  "key32": "4NKxoV2A9kEVLPoTwQNeFwvDYvS1XMpWx9u1R7JJengNtE7MaHXHQuohLfjrq1SJMo57QDqDKMwJ46zYE7gPQGKM",
  "key33": "4NjNLjHj5qmvHo4KJU231qvRcbRQ5CbVjyLpR5vFYHVoJDYN8CPy4FKCSpwPSZ7uhk6ZtaaD9smGYLmr41YwVQtP",
  "key34": "Dy7BNqVFdV7qJ8vXsB8Gaf8jNXTpYXPUdGaSxEUehfLHVmFFN1Fa8ZSJaAQB2qgkqzRqU19gpdVYs5Wts15MRa3",
  "key35": "636pmLcXNubJmyov8ajZq8xX92CDB2diAsgdgLdAW8RqpcaV6Jhw3aE8yQff5EPNxGjQj6n2aHsN7EogwgSwXRhS",
  "key36": "5dx4N74eWoypzu4X2xcHbmioWzCLeh7Rc9hWUu71r1hPSKCceP4RiKHYDW2TpsibzWsjKSJyXUhgrTaiec9mWrHE",
  "key37": "4hFwAnVV3R3UhNsH332U9SCqwMHUnpHUc7k6tJbazXCVuuEmPVGMbDzTtbuBLb7B61bhLRpmYXq3W6Rxd8bsXTGT",
  "key38": "Q4MKDkxuVgc78zX7QC24nwtbUKAhaUoPN3MXeqQBQN6uVdLznxiQpCFEhyoJq7fgHga7eaSFuKSrBaW9cBLc5ht",
  "key39": "2s53wzYDUvSh5owmJ8jHv7QWmTrreBWkjTUbX6ZkcqM1iiSeu8c9445SGB74aZ5iPZE1Sc3w6xQPpfd8TipxQig7",
  "key40": "4SwrFLjnRbs8r1f4EWzCnKHCcZzzH5b5itYqV4isGXqm3aorS6o34FWFnwPCMJfr9EVkaoCxQHMJPSc2X6E1cKTv",
  "key41": "ZV8UX1XMYqGague5PYSi2p8JJmLQZnPB5MzmQGsSNsVjw5pVW6eGS6gur4WQ6dM9rGvfWztmog4VbXjHKauGqG9",
  "key42": "2dQ6pTK43WCrYkRHEsnF47x3jWjvT36fATtRCipcPu1gkmno1Md9fRbDzAkMHsNWdsfWNk7SqNYMYFTTVYi58jBY",
  "key43": "3Mmdui5NPTGYvgzG8xssZMLtjVrM3oCwHnhTMpDoRi2wm6ZLzzgcA4aHbB9cnbTUNqPwnxz99bH6BYnci8bRv3u9",
  "key44": "3mxsT63qoAYTcEXbEaqfAJRkdX479g16N8nTSdrtuUjWG8QytZwHNewEwxicce9Lskg41b3hYHbCUk5xphuNd6Bf",
  "key45": "3TVuXibrP6dX9Jru8EYDS6mNub8b8Com27QxWFtDktJ6dPdBAcaWamvSyzbsTDw3Ux28XPhQqcz7N6kUnYPngT6z",
  "key46": "4iwMP94P9PsD9FSX64wTqCcEQL9UUAiSx7PkcuF1j7ufzcrMynpoSowwxXwiWfxdQX9Zrnc2jh2xQGvd8TKTc58k",
  "key47": "2328sqyCUWT3GCCSA3nw8BT1jwb9Db4VpnRbVT8GyEhSwHCt7WbFTJR5cLKLcyLXp7d5XxMGgW8TVvDdr2xSLBwk",
  "key48": "MaxMGZVXJgK5GuemTMPqXrtBAZUjwPtv6WPrcUy4DgE7nTbZmnzD8cnRwkJ2frSoE7ovRJR7iaUAo3R1Ng5DvBB"
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
