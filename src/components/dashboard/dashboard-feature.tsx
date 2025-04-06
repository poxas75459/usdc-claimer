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
    "5BHz5Bg3kbJ2Fb2rLzqEpyo2AzKgaQMmDxKhjd1C86RYJiu1Horvcwbrqzxce7F2bkwHfqh71kEKbinQWs9PFE8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PgFsmCUHTTD3hEKBGZm2fXyXy1ib9gUxgPoB56smhPb63Ski1isaoypTo9hYHbrAA5GQ3X6Py1MjXegUsrRurFP",
  "key1": "2oXaPykUj53GQwJDXMLDhZHyLVfLZz76E9iTF5sNFo8jmyEwau9ab3MhCXYYi6HiYLphfJZUN81Z7pyc4onn1NeY",
  "key2": "2RGvwTV8sRBndaJJsUKBaNagH5k62oBeJrBteR34JPWYZUPhfJrywDB8Ajyd8N7rwUUepDjy7F9VpDaAKsJAcWAo",
  "key3": "wMCehaN99iTciydaSDupMnZFAR1TZ3hBiQaYVwbKDUrUQExgYVNnHPDHL1VCAF8FDnR5bddgTyYaK1h3KicEFiC",
  "key4": "26m3ma7NVyynwDHbpwve6SMBtDnHDKSXsZqQU2Lj6ZWqtQSHBFaTcMDfU1njcubShNf8Rq32zE1uuUs3C2YXW6m5",
  "key5": "1UooeLd8iomV1Akq8z8iFQCUt23UbCTqU9tEf73sJHkZpDCm3HfH6zKERLA5fFVtmsVBdh3vnSm2MM44ka3Gcyu",
  "key6": "5WH7uZXhojt1uMjaCp5zqvjDC1oSuF3exAPgi3HbZaR2YmAqYqAL6AcTPLc2XAcjM56dzq887oyaGActC2TizQn5",
  "key7": "3rEcUeqPSLjuMneiqXMJLNahrkdQazV1KaxDrFKuKzqbEj3fgn1PoJLmJK5bnsrnZWkP5ZWV7x6Vf8K9abRVfgQH",
  "key8": "2By3GW4tkRVHJJoodiV2rCb7AxSiKSbApeSUJan348Uqw4b82FZS4oRgKvCSUddtVaRyU9KXhKp6JifrePeANCc6",
  "key9": "3dnqnSTYJSrqEZ8W6tXAT5CZQkuWFSFEEaR29oTUZ2RgKapfct9GD4WNHLuiBV9fvLf4Qe9k89ad5WbvNzQK9TQf",
  "key10": "5LN3WPpaiutr8iKeNCW4BBQiRAD9ABeHoxwoKoSrX1dmHmc9RxcWQJVnMFQsy2Ffeh6hbJ6MHoBrBa4sSScgBrto",
  "key11": "3GU3tLtKuc8pPn4MU2dNQ2XPgYX1Kuj4CH4C1CxHamztfF9Sqh3RKBCH2hUjQ93PM6HuA8VGXnGZKJSCimzh2tPc",
  "key12": "4uxM9zfV8TbDGTvFnYHfmZbzLQC84Wd3F8G28GbDC6dMLeMXaahUxH2Kt9cU3tKJdPRhtGNShjHxfFdziy11WnSP",
  "key13": "2RwrE1jSzVDn1FVK3xHhjeyf9qUSFpCLFz7o4VnAPRTdFdhbgwcRM5brZwbhPQLxJu6d5tohsgLUVAZbgGhnZzSq",
  "key14": "sgSqyPtKwvv3SPmjj78N9hB5aPBWoGRGHfJ4hCpjXdV4es8cMaisHPSnPugCQBpGytpTED5Cv7k93h45wBAudt8",
  "key15": "38QQrhfCLS5vnBVWSiEhGwMSvEyjjusNwUQPYwySxrH4JNSjmfTi4GzMz6CdEhsDw7rCXdzvEMdukg56PugwRT6u",
  "key16": "5JnT77s8jY5g16uoBMB5gyJSwjves6yeJ7Z9rUqTuuH1SR5U9TrWwiXpLbakWWfCGWxuHujF8ffHcdUg9NsAYERt",
  "key17": "4yH4KXUmVCNYoBzmicBVgL17CSkL7A5Ys1pTdmnYgAbvCJhNitctjuHQsBShPkT6Fqq9pKQRjSCUzkejATQR9Csr",
  "key18": "5YqFAxyoxEEaB1RjGKgmF4k8y4pPvGJgotAuAL4KryeMwnedVTGjFWsweA5GQKEb2fDNqdcvWjUZacdwuTf8PSEs",
  "key19": "2b8k9UFPHqFKi63x4Q1jQB7hHf6YWyJoBoj73c5Yn2MoV82ejF1YtmWjDAcTqUqjxW6pfD5WCEGb9VXerjCpymFY",
  "key20": "2WpXNs7AiMuYrYFbhfUA7vMre4gYD74WoP9jnoK5q4sxJyZFRESAvDSoDWKDZSVYNWnpusTB4EEhGnLPSDYNczJ",
  "key21": "544FWJAvqz2Qi55PBFrMZo8FLuiuYoBgcEAKjLpW6c7sCK38XzimXDQ7kQQS9CE6AVBBoU4MDS2jhedooS3sk17a",
  "key22": "Thn1FvFwR7MHWuL9ySpPV9AEJeMjfzZ91EQgDR6frFn1eyhcNiEoAwhwakAwNNhz52kS3MMFbShM22mqEjtdttm",
  "key23": "3FvgFkD7U9xR1MiZbHt9bMq6pWVjyKgNBPGximPgMZZtQNTRUAm6v1oREJtKDm3ceLYJqBgmjSkPWtcWFpfn65jR",
  "key24": "5ZnH8DNfkz9RZEHJHhiTwNLWtnhLNkyrDGcPLWs3rQsV3Vj96c2FEsyiThWY7EsNAznoNuhtNqv8myaCNdaHrxEx",
  "key25": "4L1tns8KyVzEoWQ79jGn1iXAB3hGyrCfpLmjT7FaEKeZgRv8n9VeKzaaR1XwMPcM3zrJxV5QtQKM7dZKP1pCWg5F",
  "key26": "5rCmg6A8GwUL5QM7SbA1RySzuULVLPDJ3aPMGkrrn5VRxGMuCcu246rRobDDjsP7qWuRCtyNSPfJPxyjJuozmxX8",
  "key27": "2jv7X9pqtmqLX9bACsaDKbsQ3ak7iaVNodfREFt4ywdxcEjez7A2YpazYemF4eaCbLhAoaXwM9hctTRXG1xaHLAZ",
  "key28": "2PoopEeApVtMz6U115Kx63aE63pncP16jJg3XyPQeFzDQ8DZU7PhC1fkRgVYQHiFFXCRUYtrWhHWyCpZWDJ3KRjB",
  "key29": "3ecxZFSZPSojJJicxnfWENb3Cnqmor27CycwgLuUKDHSHMDBEpZ4LWMXxAZkM5DrgJB3kZRpoub1aff1pSuS7uG1",
  "key30": "4JX5838DbgNTUsB8hd17W6VmmqashV75ow5JZdcWjZfBrb96TwPWRw5JiyzgtKM6kG8EScczJnKWdZiw3BvaAZ7o",
  "key31": "4BNwPqWxZq4yCTLhFkERMUUESoHuJsCRdePHvxhMtkX7Dus8gvGBmpQKe7DsqrD6Z9DXCzMve9HkjXwTzLRdmwCf",
  "key32": "3RjFSkhqGbGkj6AKtmuUZDF8s3pKnNMTbUKN5TANGXGaeDwPKMDQQYnmurVt7BahTfGDyn4T6mV4tyyMbzG2AbQ",
  "key33": "5LY1YsqAL2GzmfiXS9AjAfg6pKyT2BTDCc1x9UbWe6GyyUtEsZWp7YRQLTNsnKviMRWYRLgNmkwv75mM3FxbwmzW",
  "key34": "5a1GVVNx4p6cGRaZYRC8DynmX4Nhea9sF6TUKJEK8o3Gbk3yTMYrfGzHwas8LG6Ja2f4jHNkFRvBqN97TBcZ1gH3",
  "key35": "5XnKU2FCnmCoDFx9w9Fna7CRq4nKCMRbxhwh4gUy4Es9AYXjw9QrsZz2nig1cqUDUmnVukGwfWdgK586RMKxxu8T",
  "key36": "KGBgT93sVPmaLP45P1XgcJxn8gyq9tZUzDuvGhRWuSUJnzvMFiKyDVvvD8PHhkGuFNb6pDaL9GQMzNScQR3qSnr",
  "key37": "5NeGPxi3AAnwiNEECoyGR7VvBBRQFZa9NvrWodYAGuZtTGYjN7ERdhJ8vYh6Zr9FfKYmbfDvgZFn3BzkTHCddc1e",
  "key38": "3CzRR3YfqzD9yCsEkfci1a9198vjCt1QgHbCbLSwHc2MsiNM9k27L1NPfsLpqp6F2Ag2ouPeMYmhUWmjA77C3ndf",
  "key39": "4Ecgg6Qjs2VeiZaCmdwa29rEBGhJfTjqe8Weczn4HLQwKQL8E2rEL3deDRjY96YjdBfCtC7AVSB9V5LDRg52ZLFF",
  "key40": "5Zr6HQEJgth2XSVxBUE4e1HdGB7PHXs978VG5dJq3J2x47TUPgeYxkwirV41hQZucvkE2c8coeErbrQcnnJGY2TU",
  "key41": "2uwyDJnj744avVmiwEimwPHjKg5XwWe4HHT7oDfQ3bmsFjnL9tr3UhHVyJPeHMXRcR1gr9KDuyjBDAwJgCN7V5GW",
  "key42": "X2o14XtWJwrPBMAB3RJvZGmsHULVR4HywEyYCaS2TiSniizLwKw69DpUmGEcwQ9cZUo45yGUoyCp4DwGmJUsz1i"
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
