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
    "4AqvuAhgE4DrB8XfUWiD4EKRkYLXdfm4z6JBX9JcHQudGH1vtVkUMXL9NRGTEupTw5oG8JZbQXVWGmPufFyzeiGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65khRB2wLavnRK4LvKFy8hgu7gAQapgwp9dB2TQ1dat7Vhpi7i2fThoZsWM2AJ2uHxUBjb1qL1pMXkvkabs7A1WZ",
  "key1": "3wQFhCWTme1hyHnkaHUgqoboGy52hP6m65XjrSLJysvrn8Rdy8AS8XqbvZoEPx9GogY4mPmqJjPMoYWRRNPCzeyD",
  "key2": "3eqJzw69oHzs2UWdmtbjZAjooCgKs1KzmscXVkd3UF5bs54Xxiiq28KoPE6pFZnjdXBrttHkGSTmweZYSPUrYnRX",
  "key3": "5UczNiA7c9jiXrrpjWJ5umpSrpmDfoFCkucnidCyJv1zu6Z9okD373JhWuJreGVHWYSVB2mVkBQekPid7Cfc4im",
  "key4": "4mypqw2G8SFewe9zqxeQvyRJM6adnvBLVtWrSmiBufn6Q2cJvvHc7pdEpDRnrXKHKGZtcLJLL8WouJH1aEjbokUh",
  "key5": "3bmnP4T638b2cLveEVJ9KfUyzys6aWpLvkUfPJPW3okqiu32dVqBUnizq2ThEPxofhnFLvY4ar6FAZXKuB1326Ea",
  "key6": "o4VTUt2GASL1tatXyZzj5eue7paAYwXn3RXMeNmdrYocPemSkVdRcaWkihrMDMWumJT475fa7rqLoNLa2BBRctr",
  "key7": "3A2twdSofVhREDKy4q8GS4oi5HJDaBfZM81P99UjkGfXjWV11J11UwLsKoHFntnENQW7q3vVSf3donyz2US7HViZ",
  "key8": "4eqtoP442STtgNcyZFxQc4R2PfTjSjvX3dfbsGRSenMfgAxfrAoPqNj9jkCCxsipJ7UdYp4ae4GxbcypAJX4eYms",
  "key9": "faYchDofC1HH5WgcEX9yp3LuCRsCp5rgjgE4gQ8W2XSLGnryfAdzgYnFiDKE9U2JDxQ5qFGgLuYtrZLgPmnhasv",
  "key10": "4UrbgkZp966t3Vafge8xw8TX2d3DA3ZayBUhLkWfbRowDAmXuYPryMMdtYUY9ooNJNeFax7NcPk17w8AjnGUswuz",
  "key11": "37rKKE68hpicnKNqtKb8sA6ch31aBPkHjbaZwtZHPwi6p6wLW3tnE877tR8RfRy6vgM5tjjDXBjsqUVdtGJT7ird",
  "key12": "3iLvDo4ZKow4TQiz7R5D3XqraSpVsSPmTeZsUaogC3nHiMnBou2yFQkoydG1mMEUMnp8SJTfNAuuTS9u1pHt8gLX",
  "key13": "qTJd9ZCTCXKeFnFSUHWXgpYYxPeLQcEBCaibXCkBC1h8fMmQsrKxzWvGPWNwtDcDwkLkjJW7BKkhL5j9VaKXJ5o",
  "key14": "3aT96CTSsGPVPXajwGCU2pLtUq4JVUKQYwRMpugFrWzReTfy3SmCnAWUnP3s6ASkjXzeAtZCsfKKwGL65tknUGyE",
  "key15": "FT1ZtjaJZqcZJet9aZx9QwVshr6Q6T8QXWHjmuB56MqUhedSgANi8fHN4m8KyFjhUfxptZq7KJK8JjGFNV3GDcH",
  "key16": "vioJpRM9yE9cSvqTPNUuV5RW86EKDmyv1tvnK3sHt35MyUm8Amxiy8zqKBXHY6htwvR75aH7JjeoVPYUh5nE3bG",
  "key17": "5ssBi6HGF5nGPaQ6xHHg3rkspuASvtAWZpwPrufojECsCnapoXQAaBAci56fNjzT5uYJx6GUezuP7H98oLCSEHDA",
  "key18": "zm1mVZB6ZuXK2v9LPSW2mWKzqM9CKWq4VrWWDkvtCw91XdPvD84zbnwg1GzwRs6X6HTg1KwnoZMaPDBW9hcHPYV",
  "key19": "5Q7UuUmv6k1fWbsh15udEBRox5mzNNNBFZxZVHiaRtt5y9vCjeeNWwkPjbGQvc6SEvWcDtnjRG4r58wWycsEpCv5",
  "key20": "4wTxXEpE6ghfbYcWqrRS5E1G9bd6utr8BLWaPrNA8WkhkxzKwCurxNWyR5Kq4mRqLP7JaFtgk8G9cjWyqK7RrQKY",
  "key21": "6CJsyrmcsn2KCdmNNKaZk1ozYummsCiwYXRSx7tSxfeUDnavmcV5mQZ3zDsQLuvqu4BgTYCYHnX92YYHganvNEB",
  "key22": "353vCBDyVCejTZJtXLrBJ7CWq6wCmZWKKtsNkZmZggvc9qnnSSNVSszmiLCUKVGUKFAgX119NXNFM9ot31xAqmfA",
  "key23": "5hUpQtGTcGhGC6tBGJP963pvMd6ikcTEPeLth2Nxh3YqMz3YKRjeCTv26B69KoAynoSt9PjLsQroR4YNfbtY5iYa",
  "key24": "2xW9dp1RdbTLDW17VfRafQgT63qSgCZnhAVQJ6PnFznJ57vhNQFV8TshiCqQbrLp44ebh8Nq1HjTfBce6cuipFaf",
  "key25": "4j2cvVCWn6ocnCEL5RFZxGWYfukfMc64Nu6LZ3bnQ113Qi8RN3mpmQBiJNn9L9txb6oa7TPWzC6vYm1r8KF8hth2",
  "key26": "5yMxuUFLucvjWBMzMAU98uxucPzsrTuLN6ytNaE3iMYLaTJP52zJ9xKXkbxmydj94c11jDW8V5V3JuBa9TzTjkXF",
  "key27": "51saBxH8coHUkvNzNiBPZG7ny61ZqFGUZYrhHejGbrKHbi8FtuHeeiR8khEGEMfA8xQTZvcgNrWD7gBFh6ZLJvUz",
  "key28": "5X7KEQXKKmTMoFSnRhZhkx9BPSEoKmHFoWrJEF2PUbi3KtZ3Hw6rSkcg9yqSW3FtWe6ESnqWTu46aGc6CeQhnzwR",
  "key29": "2HbfXUHaVNeHPpJPavkTYkN75AeBzgcknYKuxwa14ipeBsHdjJnAeDrunRNov5aj7yp8Ph2EBomk2TZr7ZchxEnj",
  "key30": "45dVrWUzn96JhyFnuw3r3hw8GSdXG6cSWJEiYoaS7QV2JPqxHER9EYncUx4HQhsc8ZhZh6w5fzfufNCzVtKbWs8g",
  "key31": "5Ln2LqMXBXxNtg4vP46h91Cf1JFbxhrhW2Ui5j2gtvfFqcbypSwj7GZ65UAzGzUA7SwiNfusL49uDNRqT3tbFF8c",
  "key32": "sKX2HBBmDWT9C97azKDwqsbSdLYjDQUMQKqrF7LDangUM3fFHBHfRPBkBUifR4UivfR8SMdKHMGSwkxMnNVXC11",
  "key33": "256iA3fuzSvr6kZ14SFKfmQoc87PTc1FWQ1VyUHNW8yd2sgvG9z6gqQ1pVuD9vryCNV1HmtZmCq3i6yGEJBxDzKm",
  "key34": "49QkCdSptHA6hynnnXQGYodkVFDkjMQqDHXwyHkGHvCmo9Umj8dJEorMGLDJ8m4ZHrrApn8Hs5Hd9tpS79yeYtZr",
  "key35": "4MLajBdidHU4dJHz6S62MqP5soxHt49iXt45fWi1eHrL5EMcvYjSixfUJM92PPSxCdjR54DQZ7snUvjxkyDEkMfL",
  "key36": "2F176RYT1Hy2ZuvbQNcZ4R4bEyveHhSurzxmUoZ5ziXB1HtHBUx4j61kgMgqb3aHVZ3DGBB2MYqYWh2JNXo77RjE",
  "key37": "8HAXjXgumsoPppWDB1iiJFpGaCd58unuKWpnKet1VXryxYN4eHANEV3YF84gdNXs1Fuq6FpYnKu1wCwZCtvV1Rk",
  "key38": "4wrtAwvLFrWqwWh7Me4c3cU3S5wx591K2okxzpfoW2poiFq6RXtSJsGqSm5J4HvDVYh4B84QrkupamzjmKcVmSoX",
  "key39": "5NpLaj5YrUDMw4CoQdJdkktSUk4RT3we3gunfKXfrZ6DqKX3gqq1umLmSjSK7hA4Q9aFUjDFQ65qGfnrmEtkxSgd",
  "key40": "WJD1LVNTUiqtg82SGcm8LtmF8rsEDETUi2sACYQFnRwSC8npsdkZeQt7PFVwXTuX7LA6W9BNvvNtTnQ9ZcTkfKV",
  "key41": "5FUztjm71vSy2bNChqNvHqD9Tsa8RZGnmKmAaKBKE6f44WKBKwHJKLkJ89fP4RAtigt4kntaNSe9pefNemNiR9EU",
  "key42": "5obxsL74DazhTyv7Q7zvMHn7nUnqZDAjQpN3DcRTgH6NmDew2Pn6YV88B5kDoVgFjZagEge1FSZyBou6rkfemoDt",
  "key43": "3iyUTW6ujEPsbA31bEJBUcxM6N2rSgjQDBAmR5NKGPDXFRsnZauzXMrXQueSX5PEyhNQPfvQkUAQn3PW5iZeLvUw",
  "key44": "5JW83XzEyHwwuu4uy43zkNo5D3zhVcAxh5GqpJqFgggpU4R2yah4wJKv6DcebhzSJb8ER7eqMphu4rauGV8YjY8r",
  "key45": "ZppSnSdzyGSn8Rg2wQx6HhQyKFRHgkmQWMrSwYNddjF7k9MYDSYhj5mDq9shEKFVChmJb45JWU2w1uoiDbsHn3j",
  "key46": "3uGVvReXFbVEG2etvP9cutpyn9jYGoVvuS2Qrq8jWbWJ6GsF4o9qcR6Z5fuwWFfJ4xtausW5BTN7kYkAwsNWHq6t",
  "key47": "UJWM1qnN9n7KU3bpz1iEwYTmF69NpS5ZZ5TXh2xvnDJqeFaimjpgJkZAJ7QTkBDiqaMPdDM2fmTaqacKasb1AGm",
  "key48": "YQ3g76zegBgzHE2waa9MwhwVGXWfzZsUaBSndfnxdCM4FpW6k5r3wnAk4Xja7cU6iLb5wh59skzZdSVw5hXqK8Y"
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
