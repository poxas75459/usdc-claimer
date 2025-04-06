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
    "RpXANG9t4QFG2MokFZSZitGKixpn1JWDwRixqFnqLjSqXpNP54bsLsfafMPhSRNZGjgRAV75iafRq576dz1uZsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zo7bpud1YHnYyy91seDpigJk6sPuGE4LAAFn1ufjd8zAMVFFcRrdvUM3gKHpA2p1qbCDPKULWxyMy27me9gAfSB",
  "key1": "3H2Z24eNKwb9d8LvmHAmiHxXucyK8PaLEDmBVSvKUPvyXhk5aBod7gj7Xby6UWsivB1HLQLpNQbhnezjdfBSS81A",
  "key2": "4uxwbJKsUUjY4KWQo6djBkGjD8wZSbXxWRQrNjWo2ioS3Hw38vfEn9Rs4dymT6DJoXLbXfgLSvUEipqqcXeuiqEy",
  "key3": "3Lqavw55dcTpBaQK1KyYFPd9ywzmH8ySi7vwxb82xVf26ocLgk2L2L3Por5af1o9DifL3GMyUkfodd85dRn7ptdb",
  "key4": "53bvm2WyZvRPQXdoJDwGrkJCwFWgYaLuNFWU4y2tG9kieXHaEuTSphKhWVZ5j9hDo6QZCHari4J913z6fd6Y6AXM",
  "key5": "5Ah3juFDpxCqay9JnZG6GtjpGchhyA4MsVkB2tBZs6Eevt2MLt9m6NyTkuekXxWyPxwZe5xfoMUK8dL1SRbyWCwy",
  "key6": "22N3sJLRUoB6dme3bLYbUtLn8HM28WSB9kqqoXa2DSMpkzNHeCt51GReWtxMoaihrwiFmrtXBTEgqeLQagjrwFwQ",
  "key7": "4LKNaUg4U61wsXFDagkUDAkD2QKogk1m7U5pcP64dh5CL64t7pu1aJk8VNjoEBwa8Lx89Kxh7NngfqPSYXfnfmt8",
  "key8": "4UpEkJciYqtWHHbsMDoZYfkhuSLuZwJVmY994NmW1XzZgswexbATQcsgeH9ba68Ks2nx1h1qB3T3hJ7Ph1iDrcLD",
  "key9": "5GsHWJ6eEmzKq1Te5fQk4WpEqxRNCcRcQvNgas8PJqGHYnMTqkywhhnETWLQs7UHH7F1R2GTaUyc9kdweyqTJwrF",
  "key10": "3XM3HrAv4b861fa3FjvkBC2NsqUNX2s3RfyxE3bxAbMp3JPECSA6CQS9UmRuxc2drn19YTyHWA4HbC7st4XCbSBN",
  "key11": "4yqNp3497B2oyfW26vERoooDMNZd7EbAtNjtAwbBTQ25rX9tyQ5EPCKneszCqmDvUuDzNXBb6efg8J1v75FGZmP",
  "key12": "ordyoBFVL6FjQtbu1F5xYVQ9acs5UsfHgPeVVg9Q84U7aAEvHQ15U8CzRrUoS38KQdE31jroNP7w6yxMYYUJxPt",
  "key13": "5ZZyd7A2AFyTenkND8Q8KfZvQoAJY4fc5BAwfi9H8Pp4uhWUNXrXUEZk8rrWym45831bWeEZzF4xTkDEo3r4oihh",
  "key14": "4a3piDxMtFSnVcGsWbyjAvEgdKApQ8PVNCn1BH2hyUYReuWgM6UiVoUBaPyRr5UVM3fdbocofjHarEh1Hqgt29QH",
  "key15": "3G7n89HNZqqiLQh8Kfr3C8n1qK9Mo14WntKqnJAEon8EFAK62svAHrWDVPDZPc7zajXFRk1mCn2feSQ9oaBmrpri",
  "key16": "2g7DbQnT4RNog2ryAhKWtYTA5RpNo2kVJVDXnDdgQBp9CiPmRkNgw56oU3DNQJb8iBcUw1fZrQpAiSkBi9ycpNcv",
  "key17": "BnZBQuqxKJ8i9fJeLN9hdaurFduvg9hyHK8FrSJWSe68MHwGUzruMgvya3Hfyo6Zyvbvt2C8MS7fQUjgm3gCCxQ",
  "key18": "2YYBooQVQNJKEots9dGBep52jgi8SqdJM6TutC5rBgHzykayV6LeFZFEd2oH6xDZU7A7pdiGFEd5GRz6QAwRcnVP",
  "key19": "bUgj3aFoXnNK2ZgFT1LWEtVNvXeWKXS9ATSvY8oF5D7m1Et3Kwe6Yzv67i39mtQc2ySBxBpGNXChndeJ5Jnw2e7",
  "key20": "3wU6co3msqGB6taPHZs9bTZSRfccVVGXotBa1kK5QmyfqeYNvUXLkRR3KrEazfsgMKs5JemB71v4CHrkfTSRWdfq",
  "key21": "67hdR4PRSJjE4MrbRPww62DFUMviBAfyuUP6Wwmo9WiqVMbQ6DhNwX5rLa5gQTpdJugtucbR3yxsD7xq9fjd8A8V",
  "key22": "4mH6erCoM34fEPVfX9Ja2C5eHDtSAmarDJvmEPgGxTxNgkkiyRgPq7RXDRa6qM1zrGcFzD5vATEGdxemWaQPu4Hi",
  "key23": "5oAmZYwMsPsYhyd1dyEGuzvcNdH8Ve68HQoQPUmRFZXPSyJRx8rATHxWikKF7GwjDAvwRZ3Xqxvod3aCFVBQT3q5",
  "key24": "ifV3wdMeKW7oTmte7bh3GW116B1De2cL9Q6LwPzZwLrQJDZCoxTaiVmJksff9hVREuP5zQhor2aWRrqXbgDqf11",
  "key25": "VbYuwKNzVRvp7daHfoMSpzrAWEg2bnV9zyxuxyv6XbSUXuvdqCjXskmLoyap51EcDUf9dzKTK7QDh4RVaYGCyER",
  "key26": "2ormbtcAwJPSuVyY9PWqE9U6KYjzbpCY1KhGsTEAiQiCu5yWi6mzbSTWoNaJu6qo7M6kpdiZx5yGCfQS5vcvHMoy",
  "key27": "A7KAt1KCvuQWwb94qBkv364AsoeuDvKrb2tYRiX8qHuTsEmPXsyMDjiEzq5UCtLsR6s3SsF6S2FYpVq4oXPkToQ",
  "key28": "4V46KNfJVPiY5jFw2nRCFKMAV4WC4tFHrDLBY4ikX18SarXwLSdkWz5RVKapzc9WkPKDYvPHXaMXhux1PQwb4CCw",
  "key29": "3eiJcCsPnGi65BP3HzPUHquPhAunBasnMQNyMYm9fprmscXa6U2enPt3ChQMAY7LYD9uHEAks93mHKAkouayDuGo",
  "key30": "5P6VH9tqwVbbn5zCKTGMcgVvkbvtcaq3fFQpgUMEKRApbR2tY6EgqmFTYNYZn61PKdjgPrEXSref9uZemkEYJtH",
  "key31": "4Xi55Dvev3L1bJyKf2KfHPu7baUjaCB4Pc9df9cLTwwYenhXRbvMqQGfuxUtA943DkfHaXdyTu2gfFptGfdWemGw",
  "key32": "4bRNUHWKinp3gpyADm2Fi85tRnaeYbet3JRXMEtChtQoTHGtRWySWfr9muePZn6e3kWbw6WKCp69BE9LL2oSxn8y",
  "key33": "gWzzyNH2xcnQ9wAZAKYvgJR9g7dtJdSCkZnLoBmViM1jWd6ofcrqyFm8L1Hz9TSLZhu2j6m9LFjQ8gTFqZNQvBS",
  "key34": "dExXDRk93CvTVbtwB5ACfDu8XX1xVn97Sd6AnTY4feSdn76utZuRGKwnkxZ2VbcZEtyvfAFvk9BjHr5gxE5mkSv",
  "key35": "4yXPWzAP8hgdSt7aZpXXFbG1hn6F5czuq13obD7zZs56dwsTB8Ng7EwFVScyyGLCDcLcajzX7aYjLCHLexUTLV55",
  "key36": "2JeYHctoyKiEMWTxmkkABX4cE8xttY4hPxHe3WLsmouoAC6hGjfrPzGtsioFxsrHABF7VbMQmLx8X5CZr1Ag36QP",
  "key37": "4SxijG8bfzGgrw1EoH11twjQRQhqzqchx8HF9tDcTfCUPiLtAeRwmswTWpM1EgYF6LBNLyUzfKXFFmCKMNdzPkjq",
  "key38": "5NtC22rqYWv4ePXiWCjGntpM3JLXeR5s9mCVtsSuv7qNYF9bfgNVr65qBVTy7wxqPLEAKesKJ251K4FZtb3yAq7n"
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
