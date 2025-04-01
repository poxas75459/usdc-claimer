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
    "4BQj5iaNX8HLXAMjcB7p9rWXxFVkiPomtz9UQtXMR7TeY2pQoZo7xqsqGfdqQgDJg5DZ18Yh1M5BM2opSaUVFryV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DuSDY8TUYUg4QiiwSX9GV6UV674JndmJCJMKsuddtYL4YUtLoz7e5hTSJNtAj9s4xdmNGF7ghkLifJndFmuKoqh",
  "key1": "2b7b8acpYuGwYMJ5J2vHEZoLVW3Uyp6WkaGJoemEPihqJgx6XjRSGgi42rt9coaD2Yq8evDkNynz5S2AXAJ4wRYc",
  "key2": "4xXPJseS7U6R2TMsRdvpx5vPsGREqCB8yRVZ7vdz4bYop8LD42mpohV8rdJcz9tEfZSWSzAVgHj3ocM6MWeaVXR9",
  "key3": "W33Jy6frnW6vzgYpjUdEXDEub528YZx1Z2qRXcARQzYDkVRWNB4qjT9m4TpKkGQmPNNs5uCuVFpW4QJQpEwqRYV",
  "key4": "4z6xzo6GvEkiLxvyqZmeBZ9xzhGTGYdTyUVosqfrT97CJoBiBq5G1e9eKW8ygh6enxryjiYgvk6imn4FSMEL34yB",
  "key5": "3FiVmFbiN5RtYyeNCqdC7R16ztiaPEUwnuuPq6UPfT2CVkpDWEKtbhRxA3RgfmLi7NYQMPSJ6DNLyG3EsG7Juaf9",
  "key6": "5WX2TMeQvtxqg1fGJYivFdFZAhBdfaXL51tfXBLALpPWwTtErSBJyB9VNfCVAW8GXX97f1sEHvdV4xxHiyjc3t2V",
  "key7": "pSK4rc2P5UiBzypqzeETzvV38JCi8Lyxmscok9Y75HD3MiFkLf24xHqbsyX1jXJib5Rpq1sE9YAnuhwfPDTRjw3",
  "key8": "ZREBcrXMczF8Bf5smHb6Re7yxgzDBd8gyoYpwFv6Axy7ddFm7mHitqS1wbYLrkjb1fAJ3KGnWcPDURoYjmSd7r2",
  "key9": "32ZFfGJcQty3K8EhXaeTTSLjgyKnRa4yFTYF3ZjnmhQ3YxLzGfuhuPynLoS45fQu29RAefdyYjMkNay2sf5oXBeF",
  "key10": "3oCzE6XBX595CPnxNztT8HY6tBqGKQVJnSfuQVnidW2R6UuGb3Let9vGK2MFu7UNjDdQhTS7Qs16traxwNNJyP97",
  "key11": "5zm6kRsum2VRR2aHKt4b6kq1iWHwmYzsFDunJ7F2ahk8vH83VZeSguoBQ2mPg7LdFdYcWcUyyjHpjqQSiyYYaqAh",
  "key12": "44AKAAvzDR723zX3pp9vhhUedVvYNTJ9ZNb5GjhY71u9qakzGDRQ4vPJsEzvzMQ6gp1xz1Kh787XumDTu7L9AbSP",
  "key13": "5JX4jnwEwnUfQYCzfrnsYrYXnFHesBFNTiWmEPjp4wJVc4Nu1oqwAjgqsU1XjsQZjPXsDgAML4GWZ4ipRHwuJ9TW",
  "key14": "4j9MAvpZEAFnee5aTR19esy4GPGB6PuPFJoPRhjxK2C5eWgZPkg5P1zobM8GnLoqSyaH9xXk4qW48bmeqY4CXt6p",
  "key15": "2tpHUKMNQxkkf8ciBbnSGKB4WhVGM8KQSBhQ1cSz6JLQvGQ69a8exEW319sjgkjDuThsXz3tbrGDaxBEke3g13Qe",
  "key16": "2FcgXd6fqAnbCwDkoU2MFbN2DRZtBwGZFRdoCkiGU81WHXp5DHcBPDyJ3K3GdXKmvKAgTnbo9DiX5VQx8MVxxhGF",
  "key17": "JhF9xojFUi1YELiRqR6ZwFFvfbdAMkWfzhM9LsKuR7fR788P7oL9k4bvbVESpsuSP1Y1kpxASqNyJEN5WVYj42U",
  "key18": "kZnzkUVJHjUXN3Mr7BmkRsyAZr9YryghyBQ2S9v5TRD5UGiVFnxGRcvZ7sihBG4baEGv5w22MFo9AxceYQbSUH2",
  "key19": "B3P72dTFZ8eTZHBEJ4JjFJbBGzTGyevTxPw8jxpBAbMQLjBUoN6YKGqcwdrwa5dnhyB56QGQzWrrjtMp7KGPM5x",
  "key20": "5KAQ8pkqwN81mHCxuJhM51fEUCUgHETUaLRt52bipAs8bQj3quswY3c7e1BKhxLfWHX89AwjSR1bZg5dpExf4fRc",
  "key21": "4QdCEcb3xSXyDg1VpQxyeGC4RdsJ8CMyRz9W27rysFarr8xNRQiW893XtguP6SDPxAYtgtXHw3UtDWtu1zEvZ9nd",
  "key22": "3RZaMPq8e9VCHdnzKbmzShfPtvPhs8cVvDUQHMoEhwWXhmGfVxXE3dQc54CJuY2ELK7rmepy7RpaiwruVfnaGYHK",
  "key23": "4DcgQV8LPfNtdGMgiGPEx8Qea2up9EopPrfH4G49cWdcmau2H6VEBx1527mA99zre3WfwCEKsneS7jcRf8WdXuv",
  "key24": "3ptBZTdvg7MQQYthnfLgqyrWqaqTS4e4DYvCciMAmNazBn2hDKrSXbQJxvAn9YjPVZHJ8hhnLE9tXfCb46StHDK7",
  "key25": "56aQAjCQAqzE6ach6D8sWc8DA83TtLC8BxtNHqzD7UXRqenCMTMBDpqh4wrmaTR2SfkSzZ24LUDNnndwmAKBRy4Y",
  "key26": "L839jnMu9E8mbZZGQoqP2hoLWUogUvEsX3fdTtHEoBAwptFGhLUPE1yUBtkLnVwTSTCPmE9Pc2x4CaVyrqSr1qN",
  "key27": "gUHAcVpBjXx9ECgF2sUjKVrv3CtJEzXFCyjKEpQYQxg97LaurfB1id7FPmt5xfiCmWj216kiACEVxcvaWiAY26B",
  "key28": "3dQ9KYfZPvK8rX2nQD2r3maf4bn6uZqB2jnbSjLBDV5bi4GDtujfHbvF1wE6M4BCjm6JsqaagYquQPKxMxq6SQmb",
  "key29": "4EXEckmmdcXT2AD6YtZ7cXeVJqCkzA7gXGAzU8a1oAEaCiMDHwbcXUTG53GWKMLEGBFfuKEgjoHWxxwqmEUZnurF",
  "key30": "2kQHWHkTsAMfgV1UgW9XEQjvoWd3h7PYWyMPgFvePwTsCjGM16m3Wkhq5gPiRivXipR6BD5SqXHcRtHMuZp6sMdq",
  "key31": "4MuayovgCUDhqX5cwsjDY44v5Ke4XtFZ3FW72A5VTUZVm7AA2m8aBrzghtiidNGGem5oJSWMKz1xv4o4KXgLQTof",
  "key32": "pu2Ae8miXZGRjgoioTxYX8eYWjuxiosk5w9b7DY7UQfiDdeEtxvmYhZjRt3gC4ft7NETc2RSSCyeyFS8o2GteFA",
  "key33": "9mzHDRQjFq8TDeqmzNE2xq8m58wvEiENWobCcm5pMZqhbdkdgJzfn9YsY1RZZPV3KfQhoJkhpaZ2N37rECwJ6uP"
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
