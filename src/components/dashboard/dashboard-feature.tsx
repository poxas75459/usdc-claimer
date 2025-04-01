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
    "51ZGKZkHRawcDEBTVgqHuMahaiMoZG6Fi93kJLajkuKCD7xdxodUyjpeJ53ieSShsaUEPb4LcBiGppcZDdfbzpxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nxqC2rn47fiD8zccszEph2YbyFCfALGeSPu1X3v4QsdXiVn1xsc1k8Jzk4NyAhBf8Xv2xY7b35sM1W9sYA8LYWJ",
  "key1": "Z3uiLij9xuiSKPwzXa45eswJfr7XovFz9fVaB5XzScCNXghArC5iyp4BK45aEKPYCtsg48TRmm4PHY8qE7oM2VY",
  "key2": "2Nd9QYw2soxMxNgCMtrThNNR8fcCNNUyxxXzSeg7QVnxMJpPzNMiKwQLJNPEdPkgz6rVJhieCMwPxnvJLFM3Bd45",
  "key3": "3fEkJvHGGRBaCfHygTVGsUTh9ZThFrWDpT21J8hfBUYs5zcBT8CqaBG1d1NVBqqDWxmsxvjmT3zKE52RBHoCMJF1",
  "key4": "dsqU91Wh1e5SNEZd3nx43iaPjDtKPvNVHaqJnToc4jguiVzVZS6gKmdYrfu3Pp6YY1MGjLVj8ubtYCHhbyRGLQ1",
  "key5": "5tDQLJqx34Xru8jrePhGtfmmeUSdYiK2Sx39pz2DpGjEN2Kq5zr6H1kpnnqUythA974xL184wKWRSWLZhttyjE4F",
  "key6": "4HmWWWPQdUcGSikhFYjp8TMgpFGEfE1ufEAgj9jXeML2KaDAffu5jCCAWc8kYxuKtYa2hwstiawt5dvdY7V2sJB8",
  "key7": "7VuP69hCEY6QmpnZ6E2bYWtBhoreRdepty8NWGBYPBWyZRovuKeQt9yytF2cUEUrpwm6TRWsX6wyanChTMApLMT",
  "key8": "3S9CJHwYvYhAv3YyPMFe2b1rC8jrmgcW5Z1P3v1TeicPPunUm3PMzaw6uapnFQGk6nTEfxJUL4RePvpNntFE6wfq",
  "key9": "5nAMRgZU19beZk5Vy92qWrRgLKT46iUoukoZJV5dKvZdSkPzPqtpQjeobL4pwxHDpnxC3ak6aHGbDJmAfYETbSQw",
  "key10": "5gGZrwBQhrkM9Q7FNmh7CQodHbQnNEhDGkbDVdvtVq558JVSNnbdeYiSQHmthurUryWQZMvxsd5qWximLDoLvGhz",
  "key11": "4Te3R7oeW6hhxtXVMArZCWJDH3mSpwUZZUCCDongZxgyFiJdUMrq2MxPr4bUpGCN63yYwjuFnByGMKEUTVTBBAi7",
  "key12": "4xmBH5gk4xiVuMzkT52GULfc7Bg7Zr5WzmLpsm5DeayHHBWDtFaFqpnddpVv4qrF2iZFHxCKM53QbtNuov8L3qEj",
  "key13": "3im9tLckKt5AoCPGxZwdtXH59zh9ey19LW5J2xrAmKpj3ruSfUgw7nmSt7edeQecBUYxqmn1VJrg77xAg1B77mDg",
  "key14": "3H4bnt7zZ4aNg3KYoRVhaLLa8PYc9wkADc5ako9wmtezD8FKxLExHhNwm4CUoNJQZgx12a64Z7yv5rEMmk5uFB85",
  "key15": "3tGCfp9fMnq3G9qpeopizvBifCeZs2MoL8wwfi9B1R33qqFfjXpB1oed9XWuaiTvocoXfYzoUDbAvXpNtLpxiytP",
  "key16": "3jRu6421j6kaGbWfWHBToz4qpsWT6gUptMwm8gkkEvVkudAHt3GVeHR6ktenfgiXyY68hWESQ8UyELv9Pir1kVmp",
  "key17": "fwRiff8YfdzmHi56FmZF3BQaKCyHDKfDmxhSNbRBJ4vv4ZtF6CEyMdJDr7Fujq7CVmdQn3zXVDR9auJnEYJGWVi",
  "key18": "28M4odg713X6CTbYmWJ5ZvKSQ9YH99sLocCUbtbvzq1pUprpRseCKnnkxnzE5PbaZQVbuubCpu9aMZQCt2hn3pFR",
  "key19": "3N4dGHTwdbdvJFKm4yRxN9QiYxquo62jrYeLsa3jsq8sZRJCgGQikrVxcNwRp7SfHZAjqMXyaFdkAXPb7AJebigj",
  "key20": "4vtEEpUKEhbB4ScvFCa2kvkWVBEQBQQobH5owk338zuYXohp8ZZMzMo118fxAMTAJycZ7HgoH6yEiQ3Cy5vFbZBz",
  "key21": "4Xe8KZqcdURLJKndn6s7HPAYEz1GnpZW5S75tca2WZSzNczWNLDViDHC8c2qFVeyUnxohe2d8v5deUiawmkCNhwP",
  "key22": "4VMjTd5rdt5SNctorhWedNtV8JdLAMzY46qHt7Ya8aNdnzRxDTGb2C1zzBj5WgU56A2sh562VaHPWRTjeGrQNnFX",
  "key23": "2KofJXroYe4nFWeQNFgsXpCAzAqyFpNB9nkW3J6urWACCcBcaJyUDq2Dz4Vhue7Zc2m9m97t3CaFyoH9PzfQrLt6",
  "key24": "2ZsH6oTtqDKyfd44m8f4Z7hGaYhqQaQ2veV5NtSRgVpkoZK8GzttvsUVRwAPCqfZxG6TT2QW3pXsDSt1qHiXgNHa",
  "key25": "3rRMxwYqqosoqnuycGAEmRQuTADnTj3ofWyZ4aXKWRSpFaDbS5QZdwRKQC127XjVmhugLjggx9edDdojP4UHUv4N",
  "key26": "2dAWDN454ZtwBMGCkC7nuPEVgn4uJmVqKJpT4Pk6qpSkmYBHL8knheF8VGAv2WPWjizUPYY1nQPto22wgCJCGsFJ",
  "key27": "42LPPmXpicqUjLzfj4ikP4Jymy1XSdzKmfvqiHKBjeNGHVkaWoof6i8jU2aWRfakHQrTxM27tFgRq6kJoFNZ7geY",
  "key28": "5Vko4StYLe5UDP1Xo4YAJKnrMC7mdMEzqnUZR674FsUXAed9ntduc5fJDhmrEjovgmx6YXEzTrzmjDSHkieN2bFf",
  "key29": "u2n6GsXwuDAJ5JqcyuDDphWS8nqL2foRYKxCU4yTPdu5uMQQFGhfydRRDR8mXvRV1dMH8Xy4noPWXA6eYwhWyAo",
  "key30": "5ME1bBKuyzKRytC2iuC4Nk8c9xcQdwkYCnNKg1GxzRhiemoMNdcfmywro9qnYHs9LA2ykY2fKvjEaqdUot4mrGxk",
  "key31": "56WoMnePYxkrK5wvRtoqqbdPS6Mig32qb5698hy7XchDKw45suveuHacKxWdamXRbBtT3bVAVdzDQDF5kM8nQvLS",
  "key32": "5jnbNFRrc3igL32PoWSDv2Mu2CxcUqxxPLdi9khhzXqy2n6h5vvo5oJa9gp9NGbrRj6nDh7Bw8MnmuvvSYJVBTfd",
  "key33": "4c2b4nfFZWMPqZYRcBoxyDy21FiytrGqcwxWB1bbiPZq25gL1TxH6NB2KRTH9oPYHgs9zJyDoQ2S1cskSiniUvEQ",
  "key34": "4z8NnJYwjGUSCn4X42XWh3vvwoR2vHfcZ1pLt1w3Kr9inmpDadC5iQVJfpw84WZoGoMTVesu2zMH4gzkvzEosGwi",
  "key35": "4b5shgNkNmWiDnY2HJHbU7WqV2aWLDFX8WoWWiCSyk8yzqo3BDiNqgkR8Dqk28FEWqoibNhXEGnKuR6ai9ZoVAEm",
  "key36": "5c5xTfuwLaAtmvuvenYtCbZjoPM72SLRnUrmR6GEkcoabyEbcq9zXGYFpsrz83nXzrBDpGVWP5eXsJkoqXfoNzrE",
  "key37": "3sDFMo92GNZ3Y7me1e9ewt9squjnVSwVNqjDSTPLz8Hnzz1cPMqYddXCoLUDCSaxU5Dqd52HfkWpV7Lh5NovB27m",
  "key38": "opQgzbFkXzzjd5TbpenoEr8FMM9ao9nSeCwfhLrTHsSnZvRgWGnhWPsm8ktv5kAXCpxu2jBcfcAP1kuistwDHar",
  "key39": "2aWePzYsWX4YDSmupKk4h6hGbimKzv9qt3JndaDAQD9pvvuTvVhVMTR9kkHp4e1pFxp6pBJXPaxPb1SYe5HK6bNY",
  "key40": "4fsyMgsWD7KQb3ophz1ke6ajNkPGJSr8LS5KFAW2XZeUMdDMuEweUKvKekDKjpSxjWuzG7KKLhbTy5ATjS4T1SrC",
  "key41": "cBgZvWNuDhuK6AuzTES1RqwRQbjnABRDVa5VXz54FCMMayVBuum7VYcqEoig6y3FUrzooH5Vu5ZxoaLNmEoMJ5X",
  "key42": "ktszB6joNQh9hb1LyESw2AP3SAQDTsqz11esKyDyWvANtwUAKA36UXGBnRimVJ6XmFr7aZvq3uKw7jEdWKRAaaT",
  "key43": "49huoshHPRZmoD8hsfx3fZrPLTiPsBfKgsy8XsCofb8CwXECpdXXiRiMkbtR8kbMpTirYKTV5dDWVMzrsWXjzmj8",
  "key44": "4vi1xa2Vqm7cTpBVJ5iErrHAk2LBjHs4V4HkTfeMeJFvm8pPCZipAUo38u3YQNoiie3xUNwqqRKTrqw7ZAS6k6jE",
  "key45": "24mgv5KEpUvZewxMUcUhaMV4B73SF7UnMW5SwW9Tj6t4Z5ZYByr7nn5oc3wgJhcKcbsUzHFC3ygap3rEp2yEhxzL",
  "key46": "1d2gfn3G5BBr5mSsbgTWoSmQMYgQNoPzX6BCDt3MhZXA9etYaLV9UXG2jrDLWQQar9Dw7oXn6iyLCfF2NkpEBod",
  "key47": "3k3wjShcp5EhJTW4Qpsu2VEz41huoRWQCkqeijfsMTfko3ds3yueV4zeMbkBkYgjAm2Gp1WQE52YzKvGEW5xHkZ8",
  "key48": "3Vt5ZwX2Ef2GugCr8cWJoPzoX7cuaC2SDs9v4uLvdCpHZT4gbBUanzHSJD4seExeogzS4LtAor1cqczJJ8voFfqc",
  "key49": "2M8CkCorkX82hn4LN27u4t7TuTAFtUyZmiEJr3Gw5qdqPYwBYNsDQxZuopEYk6UnN7Kk9QdaPCaJugnQAfhsux3x"
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
