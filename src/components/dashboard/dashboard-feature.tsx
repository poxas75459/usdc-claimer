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
    "5hR3QG8aubxP4kkfZL5NFTAFVL9CphsoEVcrG3sfPcm4rhFMNXeypVU3eSa6ZqN11kgv9GCLWb4ZcegaHHLujuCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pBfmSJBCKJBPGN36F3eYK33dH1WUjjWcbnteReF3fNQPyWveUf23DywSbuk3b82GNz7ZjMeFn5N3gX54Qgqn1Yf",
  "key1": "5bM63viXqNo7p4HAJFdi4j99CREnDzHxFZk1AqBWS97aTALUXBzpVFZ4Ns3weWrZANstaqTpcG8EXssatcZSzPsn",
  "key2": "3dFACYMaEFXxCS15FKWGkCQU3RrP79wTEfULwBvNigjth9ipJchdVqnTJZe9ZHevyZzW2MUwr6CkUBVuiDvXZiH8",
  "key3": "3Ajer7dFK8vHEdsMzftyAJ7oVWa3EFSL1AeCLpoSXRt4Zo1vt6GSopEo8pBQstyjErWWtWG7zLUzEcMBwaHSeDDA",
  "key4": "5jG3JVh7sheFfQ9rcngFoHcD5LdjT2Pmx7TnF63Gd7MEUiPR9F3phpJmWE2WpJjhgZZMejLJKDVHFYPiVr8VTLxZ",
  "key5": "2tK2EnK4VrCjXRUnjFaThxJf1dcZiLP8e8PCaGvjGc6yNPs1SLKLerm8g7GxMyJD2WNe6iryraKkrceMBw2KWLGb",
  "key6": "GuoRpL2AX9MW4EPGHorcfYCYdHgbJKrfSMgAN3jFG1PjrpRV9Gk4ZMvo9UVNW4feBaRc3pCY4wT5XHYm8M5mym3",
  "key7": "uitcfjqrpdHS9DCyzCnsdtFwN6Rx5cbLN4qRWvCmpaZFrR5XFG9a3zBG5qiBQNxEw8DjUpWRcGcoJrAHSH1Esm3",
  "key8": "5gm1fUVHJBW44bbGf9kQ6zir7yzyBzrPnzm5PPQHAk6AjdbukDvBnat96j1fp8ZztUZAzA615JNVcFugqrgAHCPp",
  "key9": "5P3zUPtDddQXRhvpirjJG3uHbCRpNRNKMhsdq3zvDooxYWrVSUMyrBY976jXGFJVkMuCbFN5RcypLJZN1dT5pRcD",
  "key10": "kwHbK3Y4jLa5yCN8N1nRhcnevYqFf1JXt6xeC75P587qA23EM2aTvFr7cysSrEitTrXZsA9anpwwKnPPexNJw45",
  "key11": "Zyye83W6EvCQ1X28D7KnRQ4qLWPrdnoRFptQ3VZ4dcEW7K8XRRBGDvaA22LbbciVyFMYnQrEq6XwwsaSzYAVzZG",
  "key12": "4q42uXoNCUR4AGk3V56ygJVJpk8bNCH2x4Re6S7d4Wqvt2WMZUy8pv6Xci2tiun2MqJbRQPDeegvUm3jttoxPM71",
  "key13": "4yMbf7Hfs3NWXGciPJAquL85Kn2teMb3rqVZVvr8v1mQbshzkpGtUqrfgJYMcatQfsLtcTqaVFLuBz4MTBVvWgZh",
  "key14": "VSWsdjb3XvDatWNRL8R2hTpw3fWVMtPLsbQaCo2qjTfk1Di6R8i9PWzEeBc4QLwsqb3DLfP7Y3XQ1i5HLesRNNv",
  "key15": "3EPATTwc3mHvhRbAJ82iCpo6TWR2YX6nUe6b8UUcgTHbd72mn4oxQXwzrww4FGd2UPB9LMZSEZq1RQGqixnmR1u3",
  "key16": "E6YM6AcZqj6cbfuox8AKp3JwkgabJNxeZXn8KXAuS9qC7BmqbShDxFrHHBDwAzXaCgdwXLN89dkB63HP2LdB254",
  "key17": "2o27pe1EzfDwYbtQMGWnBahGjY4cdXRwtqeZZg2SqfJBqbGbkA9tgYBNq9DqdjJAhVQa5U9ouKwjK27SuPtvbqTe",
  "key18": "4Mge9KQbDjJBDYQjGDNii8Bvif7BRXHjTHZmWhq7Abzy4oWFcv6WarigVpwNWTDtMo5vDDShr9oFwbkPv6ZnHFrM",
  "key19": "2St8noKbfgEjaXL2ku6cyrqFfpY7B99MuYZTLH2YjiFNyQ5GNn2ZrzXykyrrf2VH98CkvC4XZE6xDZvRTFamMzuk",
  "key20": "5SRRwURLLkv8yNPggRXmQVeTxFoxKbkYqLyoui2okNt6hxFxubz1eR9AoGdBrizHS8EKUgAiumgj1Q1TQdkbyjpx",
  "key21": "7rT6CZ5L2CbJR9USxxxsVNWK4DGzMnyR7FAhpi8FagZ1Yi4VGATN8wt4gRzrKDG2KZ4k7Wx4GYvKj7bJN9pwQa7",
  "key22": "2bUx2wzTDDueNQaud9kmqXpd8AX6Jw14Re5Zi6gxRbRXziQSnYYKNE32M4UP2D2BCE8NAdhKcH4AUNZDEipiBA4j",
  "key23": "RCFm69ZREYEn2G5t2nAr1YutbhaLZYzCURNuz24wmefFhD482mbxdQsFQb4h5Dc7PQVgPCTspMywSMmpVe98D1m",
  "key24": "5CVcSxu1YPZ8Z55LjxY329do42vjTKqSDTjec3EoGtKE1xpYn2enW1A6bM2PpDRhPkUHohX5FdWw2QiU2wbtb2XW",
  "key25": "ifD6NU3YZV43AiVmNHQ4M7jWTdyzysgDgLxDKLihf4JxM2MUrfR4ph9JY5KWsGti4pWHVwjhCS2qYveH51tM7EA",
  "key26": "2Tstts4fBNhcBn12s8gLVrdvgQykkp5ShCwncYawLChGdhc6fnhWKk3LUSp8EpHA8iHNfuLhLzLeBhQpG9cAUXPU",
  "key27": "5nbyrpVmQeRqsLVuT5KLmDMLhMiEyHi2MeN4zQkGt1bScfhcRFXDEfrFJDqn3VQecEwznmKC2uNwCGvJERbEkeMp",
  "key28": "4iGpYURnaqs4w34ssJe8xtzmfKFandXpJgLRGo3nFgtYesqJaRbUwKMHmJ3Rqwfy31RwLndL8PBBqYD5h4xQSqzg",
  "key29": "YH5LZBDcgtHmRmXMXjUv5gLhZwMomCfb3CAZzof4memKKhJcunbhP8kc5kojgDoXKzsXULteVQDJxm75k6jygTS",
  "key30": "3bK1fsX9fdzeb4j6DbiQWDQTgSgd9LXFQe8reAU2aR11jQ9fTaV8adPTzEAbxhGHoqCAfeVQsDDUkJk7ZRXHT4st",
  "key31": "2sMbavhYuuZRuJuQfzrTkhcn84kLpMyATWtTgLxQjqCjwqPeYx9CbrDjc2RX4wiE8egKYKfpAunPBbJQ9ahFwiYQ",
  "key32": "2KKYmPjaWTiWCSnYKAvChDnekvTSLmCPSL7XzjJmysfZPKtqrC45fEdB5jTzffbM14Ri15EqNKhJDgaS7PFJnKcv",
  "key33": "hkWTH3XbhHdzVp5JvucDb9xnKcqiUkja6hvDChrymN5xzaqHDt7Zhie5wmGEhrj4EcTpYpeB6ovXAnsyhxJtCur",
  "key34": "T1q4ba5yg9hoA2pmHaysuUmJoNZ4uGTRXrd1Pz5y1BFtR1Ug24ogGtBfQPaGp6EZEtqEBL62uqyScqLEqu26fqn",
  "key35": "3o4tFyqxqwX1QDWAbn82B4hNNNsWbtKHexhT6SsArMpjFrDLUWhJCmWPYw298QAK6pab6M7ccSBpaEpbnFNmCtda",
  "key36": "49oeJd3qrjLcx9PkbTW79ovBVitEfgJ8sThAQQnsXjDrhuQAKzDzaStWdhnJNJ52E1VTptPvT6fEeDhhmeC2GbrL",
  "key37": "yJ8dMUmT6Y9QNrZoaNEYg9oVorgdwdWHpvCkvsXsQn3Kh9QiUDyay6cfPjN3cipnUTzqVcw8naGRUTRtKNZ3kEq",
  "key38": "5ounb3bBHWgGER1FKGiGDiNQYXQ1NGub5qSfur69pX5WMybwhdvChtg1DQUsDtjEDL4dqLX9a9u5dygdSD54E7U1",
  "key39": "21d31MsSnk2okrTDdVyCUNTb2WKGDY85FMRDzkFvwEcUfVeyGPzBuEGxcnMb2rTr4vbvJGN861fvDHULbw8xsdxV",
  "key40": "4WFVGJJqJHQRXmpMX2Houxh3oeq7fBoyuFepKegj2uJxhbfKM6tSz5H5kbWhVxGMpHUw8z87Am1jNfymtCidXSu3"
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
