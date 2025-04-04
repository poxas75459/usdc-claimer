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
    "JFH1te5PkARFTNQ6mAzksayfayYsPpGj2nbVdoEWFiAGSqspUsAAT92cEi6Fx84JLz8xbVmVH5P2N2N9xgsApRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ufmTP6KHBkP4XMwzogGADGdR4R2q4G42CkMfRyUAHgenh1RVXKbwL721zuVtTyWtPBZJvwjuwGkrZa4ZXYzp123",
  "key1": "3bciq9PWDpRYXuVSTFPvHakdKqz2yCo5fHmurgRLZD4BzRawvcb88Qzqy8WA4J14svERtJwZSJjHK48tj4QERgTT",
  "key2": "3oqAnGV6QeUWH22BXNQ3pfnUVY2WMKV6VFiGaobzfQmhG2NnvQ8AL2gXdW6DZbAjkQWMhmbcddaXVV4H99vUUjLY",
  "key3": "7x7xCApo6GjmGoFAmKch2GqjPzjLLgK4vQPzFgVH9eWGLhm5qvrroHSWmrNck2bCjD3cq9NENop5mKYwxPhJ4HL",
  "key4": "4sxU3ESHkca2g2D7BkmgP6hXTDLDyFN7Bed8hxLK3Vj7AJaGrMAf472yaqYsw2KxvVq3JCgBfgsWrdpH8dcZhk18",
  "key5": "4DYykRSw8QrKR9ggzUx1moXSkG294bVQBqGpVBp3utirqaq3m3qsrj3rc2tfLRrrLboq4egfLDyRzsvr6oMXhfJJ",
  "key6": "YD5DyrK11LYZfSeRApPZotPFCYfT7YMghr3xYnBse2afL1ga3eKkL27W5PimfT2Fmg2SgSGHSahnXFwswME5qQT",
  "key7": "3uEsVYekZYxzf3AKcJNKb6mUWwGidbFEMSDSFeCvEmaGLUMgb5v8VeG1NTDytGc9pTLRQayEoDPBq4saSazRKocg",
  "key8": "52nhcambJTZHjzheuaYiDhqSt4ZPP1hpFYSxXVjuuuF15eX43mPQgauc9x23wL28fxPJDp57ca6TqrtUdkK698Lo",
  "key9": "41JrT3xKy7dq1cQdfHPQ6oKVhZAz5zBARH4dVoLmxUwkrUKwZoayphM8SuxAsY8YhXJmRTKXgFoL94z51aQdYsfe",
  "key10": "4y6XsRqqyHXzmaQ5Czf8PmzWC1RWXGtEtVwTVjRNwQSuSMfZxBwB4g4s4xGFDNjgKsRmKYbnER1b4BzfdFWtFRfJ",
  "key11": "41q8nyJkU3fcvbW3bPEKRT83C7QEDtn5pyET9xHf8tS8hfkABcuoCCzibTdskDVqDZB3bmvNnXR5jv4EJmG5Ym34",
  "key12": "cGKfdP9F1tkdpEFjEH1NbweUteUL63WYD39hwRFZBVcFouAHihJGD8dq743HWuFNiZiZ4syc9NtYTWrZmt41aHD",
  "key13": "44jnu4iTXYbGxv3LsvkMmsz9Wk61LAnDvMmC5YbVitNR8anGMavxQMjoxzusfVKosREea4rjdhPqb1Sai7K8mFYq",
  "key14": "wK5iwFJvXc4533u26vCwU6xPu3pXWHduVZPAGHf7ZfrXBv3vF6sizotxQ99NZ5X4eA55bxQpBxtnvk1tjHpRckU",
  "key15": "56zPKEhrmfJqbVDTUCpZncKM9iKZASf7UMDpkLNfWtRYGTNdWufo6dQaaVSjz3NjUFFBZozB3HiJNeWPDdVX7Rpw",
  "key16": "4TShh6hAKyJRxrjuW8w1LgvPATT2M9ucak4SVRDpNRzUcq4FRPQSL4hhavxwt48NvyKpHQC7oCtMyD64eXCFLf1B",
  "key17": "4iEDzU7LUtUW7TprxwshSLg4LpuAKTyB7z43n4rAYqcJjAxLtKXA8gFG6HW1HPRF5WDLS7RSJVnJd8AJ71fwsLMq",
  "key18": "2NcDkt1jv5wTcPewA6Utok1PawzZzjkLZxqdgm6cn7fFw8ccE3GUcJRKB3FKQG4cM5itbP37aUZa94zGVopNT67T",
  "key19": "4wzK48TAeciAx7L5J2kuhPM1EkVTEt2s1ApJpDmiffhqQ1m8ayD3Gh8R9DH47pTYicmzjcdFZeeYcX84mydK8EGZ",
  "key20": "4BgN2BMgLxE2xbf8ML34ym3hupiDHJCKSxVPobGAnuJ2SggDTDuGT7P6enx3ahDAgrGZSgTezAhR5ZxboDvRAQvW",
  "key21": "22gXXnVmQQfEJsKiVdpUvoHGFNqFYtazqeCrma8YKhNA7bwHbFXCQrfwbaRYTrPcwoBnLWhf77CLp1bwJPrm8HuC",
  "key22": "3Ho7CLeX9zdV2MBK8PvSgrtvMHgpf6yrhA4QiiynNxwQUHY1kU2GHRaFTiLRooPteBPUUG7nVdogQgcaF7MqZzZR",
  "key23": "4Cp3aN7JxweNtVtjyqrVKfXbVJeF6zScZeF1iHFsi4P9d3Dd5twn91YZNSYNVayuSdoKrQEMAmfAxKVwcJKorqRQ",
  "key24": "5VyNHqrEmaWJdqHhcjgrMWoRvqjs9XDu48YG8GqZv7SmmpkZZVQ5t6dqrT2v2wAp44ARrVTN3ApdkYsefbCBoqPv",
  "key25": "2tNFB3DBsnvuruDAJ2698VMsoU99qLaeTGuxM9wx6JoZNdgZUmXLrhKqABz7Xj7Q6LAU7eznwv1LsQa81W2wpLvp",
  "key26": "4KPkKtk5WGaw7Peqi5C278Nwk5DTVqzqFrJFgY6nVz1DgFkrjhoyzxxS8vnjjs37ZLjURLtxZ7reJ7RLeTsyKvdb",
  "key27": "3Ly3FNwNqRKqnoFAJgnohJcTNS6CDFH1S1YgfHkwbFnnTrKbMA5pCowy52P8njwhhyNEp9bHzC9Ya4xfhxeiiYbb",
  "key28": "AyUPtsr4wdQiFEfFaziMoNMzrmRUCdvap4r4FNtWfbEMw6TcAUy55tutXtEdvQmcp4WMHXBjxLi7WqYHiZSi3gn",
  "key29": "4Zumggw6hiFdELB2h23vFrcy38E618PAHwNt3tyeovwK86tvTGiHrR8hZC3mghJHgu5CBLJvwBAvH83hQSRspNiR",
  "key30": "5Er4EAigGLJKBuPMFKduHzoACNGQEQw1VrGwZ8ZzafHzjZR2L5gwj1M3bSPYdFeKquarY6j7CtRX7madz2tEkUkh",
  "key31": "44GscsgMU8RGNVifVnvAWitav4x5dCQohFGmzyLtTQq72Y5WC7WWwdhfGF8C2DsV8uicYV4a3TtFArajhVGqg53s",
  "key32": "2bYedUoobikvtpHxifFqJehiUuxRpLao2s8e73XA7ukDeemXhYKzGaL3f2ptEjLUNGN47QfYhw1KZxfaqHweUKfL",
  "key33": "3L2Nv2so9e7ewVbyUousE8YQyz1Y3MF2cM4Tpb5kLLiSrK5hhqBEd93ANX8MWi5QNXqvwwtJ6Vzm83gb5fd7KwX1",
  "key34": "2C5G512ir9rySyZrHHbXjwD5qxsdimvjphsv9sY74QuVTvt3u5Up6WatfNvVKcnPMgxzCdRnyRR8tGdukMVYb7ie",
  "key35": "3MNxwnXMgoFwQ4vY3NkcKvKjYs8TZXDHsnhuRAZafQUPN312ibqA8TrA6sq1RjH2rc7os2s92SfezqduQybZsf9W"
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
