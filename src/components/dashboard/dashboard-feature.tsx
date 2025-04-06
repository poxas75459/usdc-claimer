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
    "3vBVQkeTmsoxXNtwbLzx4v9XiwVJFhEnWqY2no2w2FmpoL719W96HJKGNC7EUr8mbiWKXjzPFFiWDeWePLMXAfCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjtCsKQyj6zYVYy8mV7uGEMz3oY52DBoZoc435GaGbCgnpdrpzJrGmPZtczBAV3KaPRmY6KkkGA3HyYA9RVRVyE",
  "key1": "5rHBXFF6LJDSMqDEtv2eEF4m8WUdTkDGWLC5yz9L8j6VdwUbp8VfG1zfjMyQSZCptLGQPb66JRpsXiu519rCZAjF",
  "key2": "2ADUFYCd5DF1DuCNPxC1aoAbCgqmbfdn1zCHZteiXKwuV2GgSCz6Xpo33dkCuxLqVawGoHbfsH1yQNsUB3YdbDNR",
  "key3": "3bsgtm1pymUk8RhbPf3b7R9ruc8X6mj3MREPsMz5CjVMAdfAn5ToFeAFasoSCCgqmUFKTzdRXmBQvAyWcZ14FANC",
  "key4": "2CMBgEfR4C3hdSxi5GAx1zByVY9T3P7znDcNat7sgmcQ4Hj7Vzya268a7roCTr4i8gjbxjWiYoPwc566cvqxsXhM",
  "key5": "4fr6AXtU26khuB64jDCqiXzBs1DpwDPiwwwQTtJCLgEkKmMYv9PVPZSsGe12yRHgBqgFJKr8SSPStNTqxDdqGoc4",
  "key6": "2AXwPr6Kb5oHm7G7qjfJ3qyjQXxF7V854SUbcDgnvL8wRXr9X9EYhma9jJRKUgR2unMx6LvLoGT8nv5mJbRXbqJg",
  "key7": "4MGXutxRR2Lv8t9xFzoVWVYQa7Kkt8GHudYrUvahTdzdgb2jEHMggcGa5RGwM6qH1D6Vf9Whab8bjG4ThXPZ5eKv",
  "key8": "5iiuE5RMKJaU1uz1S56JcuNCKLh6dTVWN4RVygDM64tZLUhvCKLsVfx724dpRjWWFyaob4opTNJZKxsn3dpTorSq",
  "key9": "43Y4zcmn1qjpoxPNhr18JaPg17WCnojpERbyd8Pv3P6zxRAZ3ujVyun1mQ9w9bAyLTJNNHrFarYGS5Vsb6K6MENS",
  "key10": "4YdNHPmEytNvk3qAEveiLf8Z2sa73prXvDM7DgZn6Pa2S6jsfrF4VjoNMEjouc9CUqtHfYp1euU3tRsBTBsANB8k",
  "key11": "5E3eqyt6Mbp4D2Aog1NxfT7pCQka3raDGjnpyJ1SKj9Xz2S86VSMroGtzgocTCdcUH4LL1xpPuc9JCcDX8xFkcWM",
  "key12": "5dES28Fjz1RFbZjwvbG1Yo2qYb3LHoTApc9g7RnMdGwdTg1T8gmRWWMNZJC49rYbo2cdaGFZuZTxpmGaLrGsfMDo",
  "key13": "65Fx4CuL9wjGuJCjP314sh3rPZhUCs1gJRTuniZgaLFuiL8N4iVe4RAthTKzjohLpU1hZVCg8K4u1PN7EdwHu1gV",
  "key14": "3vRGrBQweVGKvW4kSPVtHTXcy4ucPBkY9cWbjtzkcUrq8qJ5zegsZevrTS1qVBiyuciuTs3w33dTWxGkLbXiwwEP",
  "key15": "WFJvwbhCke3hGjoYH3xJzWnLkcgoTKMpuahdVzzYWzwWk59JzoyXhCSV2H4vusk7YoEJEihwgKgPwTeWFsCq6XL",
  "key16": "3bwao87gUtZx9ZHAbywv5PQ9k727VouwpGsyo5HcV8VXKNbC57NdBQoP1bhkgjztWbEY9zXwhVAkfadKa8c3uf7E",
  "key17": "2Fy5A81N2LY4acWT2susMFP6Rv78g3oNFxidix8TmCiVKPNhuUnuRGicmFjacuZFo2G2j9Koq8bR6hdFs7s6eFMo",
  "key18": "3SUZHc1sz3DSuE3uoKqPfZhNsvPuFmtvj2LyM2oFsojjjgyEZKs7uUWZWhe23LFEu7bJdG5kJRvSatLagTz4b4mX",
  "key19": "2s4vnMifo7B2B6PkXnogvNJUEJfLXZLd3zjmVKpkJYM4wqqwzhCEV9qvDZBYW5wHLGGUz7dgsHtA3hLzNwAo1kmA",
  "key20": "2t3K6tAgzs8WU4rrzVd2BcS9B9r6iEmrkLZKss99YEX6GKkfhzV115uCwp96yKXfrETqwxNu5sU6k1jwvndGhZeE",
  "key21": "4R7CDArzEa8ZVh1oFwNHNurMF3Mw7xdpz7YhcTHKbgyA8epagMVA9MNM4wDax8vr9s8Cg1MXLox8Ppa3yGfvHiYY",
  "key22": "iUqss4wcx6G9etigEsjsPT2YmZBDYzMQbfFgZVDNfSpP2Ft7csCLtKs84P1wFZ781ew6TRpkDjzaGy9dpapSyQz",
  "key23": "4tnvHkvafAcB9fBfbfcAzGGkPfW3yzqcQbTFPRciQ7MYZFUBAcrAkY9vHDSuorbAaf1rZtV9xdMsS1xbBWG3g8fY",
  "key24": "2vYjH7ipDeTw5Aq8dA1mCux2BTyvgDpY8owfiGFKe4fgQnfoGLSntvP5fZv3TxFSwFkWC9hD9bnzDupTniqD2sNh",
  "key25": "4zSYqQnXG3dfJgKRfuC5imgqJU5ZrmDVCxRgHVqZSpXpoiEDFs9AtJe7j523S6oKWz89qUNktY67j5YeJYZGBLsp",
  "key26": "624Mwq62NQcLjYQKHG656sLFsc3y7CsNHsXXvWTgWpTxfcsu5yDreAjmgtrEAcrTGhNUL7nsoEKu14xDa71JdPFb",
  "key27": "6Z9QK1zW5qAfCBSQ6mWLUN9u6MqqTCwBXTgCifoj8ox2B6GzZ8GTGHRjbWF82gV1qZWwoQbbv5tkaqnNKomxoY8",
  "key28": "53bcDPvojC769av3TKJZkxkS6Vqs8BBuRQdzewaxfgzpikzwNxxTuozjJ5tjroE3GkUyJTnBvLnBpH9GKnDguTbC",
  "key29": "MF94n9rBNuJuSTfwFVzDJv8AwarZaLH1QEW7Jry3HywJ5jwCDxgPn3upfXHtEg1EDbE1ghs28tLTUyrJn1Hk3bJ",
  "key30": "omKuiDko1inG1T6BzAd4huV2o9Xu1ZHinTzDc8Egt2yoHeovoHwSsQa5DtyVLzZk1XMunCFG9odxGULjKJiDaWZ",
  "key31": "sD5LEC9ryUstnediPK79y8gMe8r4QkobuMt4R13USeWmyEvPrNyjgCbxJ9GCTt5gAEthqNBZ49T4pus3j6WsHDU",
  "key32": "4YEPhtgYEFkAxBYHRyWu6gYbVr4GoJTCr5EyUzpbRbTmB6UU4QirHWnJXoqNjz1eyaYKmj8tVmhEhzftuMnTYquy",
  "key33": "3xBoGwPneX53sDxrjYAs5ypxiXeLGiYULQ2B2RwZTNNx9GdFoerJ5JHEVePUjpMLB3KUx8LdUfUdTwYi2ophVtbG",
  "key34": "5TLfHf5Cg4tfjgQYVtKHEBiGZ24GJwUjiWJUeC5RgFgnWd9riUZFR9Kqj5NJcNsVtpumk5R1ZXXhMjuSEs4pmSYb",
  "key35": "52iZLuC9LAaET5Qek39cTyfCF2ri4CrAgcJyGJL7TVPpJYvJKpAwc2fwyETEBkrgcRQ1J7tJZLoRBYUABSP7Sg35"
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
