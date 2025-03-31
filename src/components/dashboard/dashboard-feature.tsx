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
    "25rQButtPgBNkWq6rL6KXZ37npBdtRvKnCBPM7pC2HFdnwCqPwGYUo5CcHaD9e7FmLBM9deQVsoCNPQe3gAaXhoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F3A5VN7ne81bH87boWJYJDkoLaZx8ka2F7AMiL59p3zt4Drk52vJm7efr7m4zCcthK1vLEdWicJwr32o8TkDeP4",
  "key1": "4HTCFYDM3A6pwCkjmhCvz1LhauVvM7yCgfLodPJVYPsV4LvyvugZFFTzQctvBrUeJXwDynVxxZNdTDJSvkg4HeLU",
  "key2": "3mAD1e9QoRXZCVb7kEyaHDX2sHw5tB4DwWFuuGJngXzv3EnNcPcyS6CEqimejJDq5hxdcYRuJ3vsXsMsBzBgi7rF",
  "key3": "3gbFH1jnsRsyX7eoRC3z9FD9ACtxhvhc3FnyNb9ztfDab2i2zVAr8ZfRPcPfsydrpakX93zNuzVxCBfGen3kSTmt",
  "key4": "4v8c5XdpJggmyRf4i1w5q9z3igGnsTNHNEXkv75T4TrJyBsjqL7PvTea88Zt4VDXoJ4nLEcSehNSdBt3JTYNF7oR",
  "key5": "3NsCh1X88eYv5EiG2YRpumogtnN8tPYjxgykBsMf9oPyp3VqZcqBBFBY6YPYjh5eAPCTwtCh2y5KucCp6x3CE4gq",
  "key6": "5h79T8u72VbvQitGhhzkYhYQDFWnP3BTMSDzCgdhk8bodA7oXiUxR8nEitH3QDBPCzGWbNhmcLTmGFzawVvzsfY3",
  "key7": "2CQKzjcnZiJ3nLXwVpYxYcW18vRxeDP1rxowVdRv5yqbVyqmqEU9H1J6r4QJPKDD5uhkFbZRvdanGffxakJW6EHm",
  "key8": "36rAZQuqL3NVygrvBe2VZnasHauqrPKdshw8fhNxGBqEGSsXVWMdFQDnUNtFbrfnhmucy6s6WB1ScSk7XEutLuSe",
  "key9": "5bfrrgpveQkhag3aFwx5DavETYLgYyffqxPLBTGjCctrjvWqTsAf77T4z1A9XeUWBQnLM5NVEc5pWqhUEud7Nory",
  "key10": "5ihE1B32zFLwWHD8sbijgo6expgsEfqiPjZcH5Xq1dVA6xV85miNoNRw7mgbKmGTix7grWz3ryGfLRdwStygMGay",
  "key11": "2BVyYqAE5jVBmPMz7Zd34TF4fDYqiDysZtJWJqn1XbJLJ2jJjuLVcNRGAFfWLFj4yFk7Lsx3xS6ph2RDusKF8Lsb",
  "key12": "iorD4MLorjD3kYXkzxcCkj6WgyxQsTSBmD2d9K1WrJjsfHKd1kYHY9W9BWArtFkJGqj4hBtzfNQ1mswYuCNRqj9",
  "key13": "4E4Axq7cLWyw7wcnMUPTMy8imT6UD2QfiibRbwUt6HXPLr1NNY2na9av8xwftEHYdDmM9mLTgq7SPVDwUSZrf3KL",
  "key14": "3d6Gehf65Vx3Rjs8cH9kcQhCnjEKXiSvvE2TGtFYHfx9JofFsZ2uYMnnmbfbndEXaaAc8TRALe2fC9CHq7hEdDoS",
  "key15": "2Cki39PPULQ35eEb1orYZhTQqfjyRLu3zSm4HdZ3znGbEd5WwXvJQUX84yVorPMVp5gUUNCEYWVMSPPghhPoCPLn",
  "key16": "4Ck8VRnqJE3BDx8Ecjd1E33ja8FDBsUutVQYW5muYg7tdsm1zmRsamJogsbgRqoxqho9oRZ3YjVAU4MHH5BWTFv6",
  "key17": "3LnuaKBKkiKLv5Ba3guxBYzssqUZ3JJuYRtHVuWhHE4uUMvbKzeFf9CjV9BnQkEgBKivcVVriTso4Yp4pvWZNRKp",
  "key18": "5Bnz9XHDhNUCX11Gh36HnaJASotypnC9Uf9DssaSjRQubBVBAZX1aVmEYqTD6aKzK9pm1ZtfybsxkCVjVwJsAroP",
  "key19": "5fQD43bdm7471uxawLWYLHThNZshoRJPVTyPBkueaUhb72VqkCskYZPKLamTrmswmTazE6DvC41AdRsNQEfC3k4c",
  "key20": "5EjJji6UdcBzLC61cQtCCmuCweGg1sUFzRbjZLpGtHFHKBZAkJoKfM5DNLxaiA7gUAfuN9eX3kVdXHT9bCBJuK2G",
  "key21": "5cS4PoimDtVArerix6Ahe1vhPoTUEGknBbiSsufSWtrF5Uxo2pMDSfGdyVRCb9i2BxfLkNuQ1U5ADREAWmuWCBro",
  "key22": "5vBgh7eEiM64wfxHpw62jDujLB6F9ochK3NHzrTS6zCvRCoVTYMp92BqDFagD9x5EUHEoYnxKXRzikjguVoMgMgx",
  "key23": "YqZJk9vWGtfcV1hqkWYm4Bay2PUANbzgTz4BuHtTAZRZfh8bNsxf4Txn9GdYSgvdsPLfB3mQohzP3tiJMwkvtBk",
  "key24": "jBaHKaKJmWsetkW7e7wqGZ7qcbHwRp2pb4cR4h9kdjHitMjqEou34mxJ33NmyQjxgPgg1PmCv6KT1561Ctgj3zk",
  "key25": "5Lv4Lsk8wZonwBd1Ykp7d6M5VFL1PXbPeunokHDcvVNSaecLY3R7CiZgJP27q6fBLSfZep2PQNKREuqWYrQWfiKA",
  "key26": "2ba9WcgP57QAvYFTuz923NtZyscpvfSQHdAfmo44rdZp3aKP7MRsQ5xJRKWT1GHsHByGqrjwZc687dbh9HgAi64j",
  "key27": "57QLWMjQ5vFb4czTu9b4rahV7xUCrL5b6YYffsuGvLh3BJtT1NBXNAVjv4ZWZpur3g3vRM4XPyXY6FHsFCiN7e7m",
  "key28": "55rZh7R2nmKqA1NkUiwFjGdBf1qfHqQjkiZK64HhhZUmB5KovkMLMfFznasVGAGQPe1pVmDCXfQB1B7k5CvqdUt7",
  "key29": "5Ekjy64sbsxF72tPnKfG8dM2FjiNY3kzHQnRsQTGPtQhsJHUk6CDTGCdKN5ZvKvweEeC1ESQCU8HZ9ueybwZNKZx",
  "key30": "5LMpuiaCTenDk64iBN3CrEGmiY1cNQFCrUoAyoWW6bFHiUr7N6kc6jnTFfFEkKdaxSRqvRaZNcYafkeN6JHvK4D4",
  "key31": "5o9p1i7R4k1BkZB9CkRvt4iLp4iunxTfUTZHnTTmtnganG8Ap5aj4YWTfmAQ7fE8Z3KUrwtJnNS28QqJ8YVV7zKA",
  "key32": "fZzGR6B69ScrqGDj7gmWHdXS5Gs2MG4CfYbXvMb3pQHyrkNbGzqLWzmGojTFkSeMHYDTvi9PNcP8TEAQyfX84FU",
  "key33": "22L8pdrt4gLTuMkEBiifPqVhw9UJHhAjz5a4FW9TXoacSE4jUSzmJ4pAzYALA8tVtveY9DTPchiqRjjhC7qdkKFB",
  "key34": "4zeQkUD8RsDFyocGbUW5hNCknajH5fQ6GPYfACEHMiFBKZ37UHX2VTyVCaFY6Y6Axdyr77AhyTK6uP8WYm9tM7ew",
  "key35": "Fcc8QwRnG2owKn89WFhHqbHzvHQ39BkCZgPR25ZQuUSoWeuyEw5Wm5fCkReQP64Q7Aj351vikhP2YWbjwBoAerb",
  "key36": "4BUqgSLKh1KmQNmRjMqhf56MuDPNZKKq7ttr8MmWeeD3Hy64Rv9dvFPKRPdd6j79YJMS1J42eQGLS4tx7rUebceq",
  "key37": "XVi4P9QNswAMd1yepGxSy4nUivRFQD1QBy1MRnL3ZsMz4QMQHjkq43vHhiqMXGRTqMkDJGUjasVTmkZx176NSBQ"
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
