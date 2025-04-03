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
    "5MY6Sgc9XCMkZE59JikhuRZRXFCxJDC4Vxw9ZL2nuZHVHJcJm7VUmaM9NpMtrVFdKpZckHMEoLFj2WQxWJQomvEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VNDD4hxRfMaQ167gVt2JyfaRYFWuz8fjdmmmAzjvXKjHTL5f1VamkoCUmrXnz7NnBCbkXj4NpZSGTGJ3sh6xBhy",
  "key1": "53GD3uZewSSSm77bDibo1Fptk7ZQup3Ay1ke1YbFtFZFYaYi3b4N65vRmjqB29zXPJQwk3NFsbtYXqcA3DD9QdrE",
  "key2": "3gE8JvKnJFVFi9PZcHm5dsovVSsDKEmvT4NtLorwYjG6xPScLiPYLdG98bLHdLgBbretaWr6Am6s7CjH1FjXgkdP",
  "key3": "3uczVF4gnq8aV5pSp3W1te4kAdi9wJZgzY7hxUxKqToNvjboEuKVUabrY8dgu9Znbq41j3csMJiGVrZmtazXUK4S",
  "key4": "58ZZHtTaeXSJaLvjFeEoPZHi5M2CrQ25A461icYZobKQHKkZ75VXzt4squ7EcEBoZsyWC32WETAetV9fabV7857T",
  "key5": "qL1ZYVT5pfAjGmpD2pfBRY3VoYjo5ztMJ9mY6Ge9c9kuSiTtgnDRuf46AuaZkPFnsykzF8fxnha4EQVhvmJjRB9",
  "key6": "6DFnEaQYyopgdUikwncKx76UYeTRyJcwNuWtW2BrvWR5UDSnZFzBPvneM8G4r4vTjcuKbP1PV1Fj7RiojyXDCJD",
  "key7": "3zUEGSEViikXGPyyTQDjBSA78gnXehdkfDocz2dqUK4JFUQH9ozo5m6sK6e5QVJGhuK1nJ8qgzMaM6jBLR4XpKeX",
  "key8": "3QJRYS6AUrSPLAcXjBn2y9DjV3s1ZfH65ofPwd7bCWpcciLBHKwR6oqYTkkDc2ib3JxNLgv232xHPSir417afB2b",
  "key9": "4NruYSDrYxx37BSgwFvXUr5QWDE6FBDEAojxGUke9RL6iyxFt25JRxgr2vyaH3LEUiK5AVPNugX2sFeKXRuD6EKR",
  "key10": "2NFEWMToW5DuXmvpngJ48aJSWqW6ZBkdJyYhkSrtYqMmAS6BQGq68552Q9YsYaXXozHDGTpNPaQZkMsC2gQccMiE",
  "key11": "4pvgW6P2hvVr1h5RLTExy6AEPr1bpA58fVKUHSRrvu8w9BfqTVTN7LATYp3hpGrQGtV6xdXyPJQiT8kJkssMVCpw",
  "key12": "5jpzooUdMTgsuYU1GzrKbDuyGKEYfCYzyZRmV5C3yqzDg9Z7SgVWG8nT5hAQ8dTNiZJuqemANYhsiFaVnRf1m45x",
  "key13": "4ty2w2mekp12VNwUvxQBcoPZsgG2szcKifSVkhFYqtLZDGzTpFi3qM1RkiuCsxteWdQpFxNWNwP2BX7YFJSbaczr",
  "key14": "2jc6cuGPaEsb68P9KQAm57vUCKsZXzh2yfHjzfDM4JKdK9Hb79qBMSDZ7tryKbc99UK5RzgRCdUfgXSeQ1Wu5Jfc",
  "key15": "4ovR1VozoLuABZe16b54UJHzeUQQkX7ECmwcEcbjWiKGazPFRZbpe41U3MsLPdPGrJ4HwRkfWFWkAJSPkQ7fb1Mg",
  "key16": "29ssUz6CgHQ1EzfmAEwLXQuJnytbe66BE3U23sKoqJPqHAa1yxVrTwNkCQFFPgdphyt8Ton34GxKeQH5zEd4wJbd",
  "key17": "2MfBtFF7L3Hokjo7t7QaDvm1NXDN6HntzPW7Jw4jitFFswdVbonFWiNYoFZj85TnWvnrN1JmEkUPoFu2F8CXEqoC",
  "key18": "iar7vPo3REq7mwXudPNyfERMcLzeHthppuqdfMJjt6t5Y6B6FspH9qkTiryn1rsGJ4v6TMhpuNEdAMXF8QQxT7T",
  "key19": "3k8CyRjAwoprRJQaUJJiYC5o1LFaPZgeJkRcXSZ7ePCwdnvBh9ebVYjAcwQ2p6p5a8oUsRYaUcsHtAgPRzBAYSEv",
  "key20": "2reCamFfoC47TuP5QaSYKxNjECasSQrKFKXHrwC6nYpBZFu56WY6yhRFo4tTN4DpHhmExUWpKqAPRB4kcUqHJA9T",
  "key21": "3i5pF4oN9ne1szh94qLhzEZeBnUTL6uj5wXkN95mRtAFadXjmFavTpHyqvLUaz8CT4vuphSHDRG5m7X9EcbCpxjH",
  "key22": "UwfQkQmtA2MxwSzwPLpDdEUq86qxqEh5XC62GnzjDgz6DDrr7ZRN8786KkvEXokrdM689PkjFo1rnxnDjrv893q",
  "key23": "5uabenjUppg9ZHoQqwssQfiLJSRYURd7CX8aFb53koVzTQBbjTmrEfui2nCYEAuNtBohZdRpT6JAPcev2VfUf1qr",
  "key24": "4wSR6fRDGPSpZ3HCEEGu7ZAnSQdcZtuWc8JAKa2THWMkjFEvdiKp1N8KpzZnQXCEzuYPE62iojn595UiLhTQ7Toh",
  "key25": "5651QghMQ3atcMHQMvEiewXQUEPaZMtWcsVBwXAJJpcVLGHyamphWyuSEd66QaKozvkSHi7g9MeDpTLZgkkJpmVB",
  "key26": "NgxeUZGpE92muAoDuNJCir4da5y6CjX7FHyxZ9PwgDdSLBRJmko2ybn5oXXS4FyzBTEViwdnFWyJtEY5MrGNWrw",
  "key27": "2vPKTHZBZ1VBsFJnJpHzgEiW5xxxR2s5cEhon5E9ovw4M3fqwcw5x34cQH1DYEGyWpvXA4pgav3J6VsMiQRMVx1u",
  "key28": "q2A6uSgydAnwGWY3H9oAgfGA22EffUewmAW5mFWVgexoGLrJFXUw3pKVvoJCaZzJgNz5eidpstBgff3tNmDpmSk",
  "key29": "4TmNFNnebbQd5QwsD37vvq2YNDsAUr2eUWRfJR1Pv94TkY1D3Yy5K9R6V2xfzLHN8x3kzyM46UkdPiQHfoHaT23D",
  "key30": "4mZvLwSmQtVaoM89nwxHQNGkscBFZcrxZnQAZcPvXV5sooLUrAMLZ9zZmHQyvLTGoSE2pEzbxkdv5BzdyC3gvYiR",
  "key31": "4FfnMSKdHZ17ArLt7kBM7MS6YV7SzjhYHG2vg5GweWkVbFbAk4xBjDiYNpCPT3JEp2EkRWWsgfj4cqhPBNLuxNiB",
  "key32": "3QhRUR74HDVrY8sPn8AhfkpC2VR35qTpz54rZCAVh1VxJkZ4XQTsaxGXESfhhKuAiUZ3NEGu8Tzo9fv2DGkTTu2U",
  "key33": "2oKQVksXJqppM8RN1KPwJJfPZxsypKe3dCgxPGh2z9rxKMoxVMKYHSWsY5EWMUVoCdeU61V9WjRYENSpYkEsjL4t",
  "key34": "53J9U2Xttv1dSpj38m27wuW8jQUDQNk63C9K4cRLfBe2vXRLD4auoEgad1LvmAcNLe44LWDhjCb99uoynP5xNjNL",
  "key35": "2gvDe9NzgZHnZM6ZskfcEabyiehoqSSPhJnExJEy8fUcUA3TCBzNra3MePdrc2nVjdbJ7CMoCRt7q1UWdVnZDC6E",
  "key36": "5AtjLcdJGrZcgzxvds8zdetVJfcbMWhJy2WmmFCtL4WXoF7V6uTyxZ916sK25HgLnBSk8uvtzVhj28x3VPgPH57N",
  "key37": "3hWNkmuJYtVP8WMEGof1oJbW5SsrH2W1beDZLUAMAEcSMrYBDxtP7afGUu3BtV5ZSjjXwxpbMteWHiLyAw9jCBwH",
  "key38": "5ST5cUdHGbVFnVsrCKRAUgwyaxtecfA1fyufN8rFx82rMtTQ382DPvetAzP26GaaLTvtN872KBs131BuMCDMtV4s"
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
