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
    "6Jgbn5m7vPriXyPZnKJCfRTHp2bd8KF1zHazQjdFD9gZdBAJiqk3nUSgeQQvi9jgmbyp4jKxEz6BC7BH8REcqoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wc27SbHkpJAuMTDZVLdoie1SCsQwfFXxeYN5QuPFZrsTKLPaWxcFxMd3ZihhbMgQbQTWs7G2hsFd3TdV1rcuBuz",
  "key1": "4PSgcjWGdvxRECYQ49CMqno1jbuuigM5BNXdNbhgY9SJvuvvrxNHtXBR7vx7oeF71rcv9EQBjCu6QyiERZLNRT2t",
  "key2": "3RTXqdXKUmFvpjyyYBE9frph6kWjr4C2NwSfVSQLSMy11NQM8cbsdqA7DvwTA4QEsKomAwLZ9WD56XadeAGy7nHD",
  "key3": "2r4VpF96eK4cbt1HqAoctiVkpQ1hDrNmUnQ14FAe3kZCihzEuU49udedJXn1eS6gYZ8YKcn2TkwvYoS2MZ5gFsgP",
  "key4": "5p4M2BHjDXAB7Hdi82dpyzaQ5mb8w41wEfHP6nhw949KonJP33yZBgA7BEsRJ5n97uJy7AXXvEjxBCcHcN2L1ffn",
  "key5": "5YDHDF5yQukNTp5SzmsyyLFv631Lkdhnd8id2uZVm9kjbhALxJhTGSUjb4y15eCn3bqmf2KKgMDfibdLNbpbxX8B",
  "key6": "3hQ5dRrVcHV3XRZXVLEPWCqu6CP6a9icvSeknYVDYb8MKAFL8obSD82UbaK9Xgw1R3fd9iRCGV8r4Pm3KrFhtJrV",
  "key7": "2xNK2NzJNP1B5JbwUX29ZDGwvBdKz6yqpUzQtTvBgAote6XXGtorsw3PA6HoWztaZ2Te85rpgtkstbYE4JUY4evd",
  "key8": "51yBzAUJVDpySPz2XZdrN5NszJfG85nG4FsVRkbWeTs9DvHqYLyd5Xc9mKnyzNdqZuh6U55cBz3tPZFhRFEbBXaN",
  "key9": "2Xfqjgi2crCpjS1XoDNaf6FNsZmC62a1aQtVqfZt7Fp3j52HjBMHypTbNvP1nXoHoNb8noHVrbfddzhPUzwd7Me4",
  "key10": "4kxiAxWpcgh6ju5dWj6EJePLjTHJbb6GV8BRzDDxm9KErxftfCK4WT84Y2gVWbMSHJpCPfsHWT4vH8vUkiAPr5P1",
  "key11": "35iSh46R71nLKKydY1Qe7wDUWez27ViqgnibMTgxmpnrhrzw9yZ17XZTVYbmzU5mCXza9dv55qVSxWzUKRxFAcTZ",
  "key12": "53poCdgW98buZVqpBAg3epbxgH22Vz7ENpX2r78vWoAwjcuMLhubyaQBr3xLtUm94YwNCp7iemUAGQSBRZ5dTZRq",
  "key13": "2uYoem9tTTxnGJ5WRyRSYp14iSUjDRurocfK7pF4RChwsNWGghp6cKJwGPSJoS6BZe6uDpB7mRDhjAG9QfgPHogj",
  "key14": "21KytoNAotbzrDHc1YT3Bo3ciAAwjL8NBLuMSje4jEBwRGrK9DFat7ZaWNq1iYjyobHqJugvUUJqo69DdAHQPkMM",
  "key15": "255LAbAyCXQ2d8vnCphTMQwnoCXCzzBLCPhsWbNSUWwP7HAMamMhyKRzGP7e9btkUf3BLJK6uEJXqXn5pmT3JwTu",
  "key16": "2Whbb51Qe62rwjjrQEugZCwDQmq9ebnygWgWSyY66mq9emwFCMRY6VT8HF4kuQqH31V74LMJa1DgXKTH1DspBe97",
  "key17": "3SummC5FMbPe5PG6NXVz648zZxMwnFwyWrqmUyrde3wgMLDQfWTPcH5tH9QQXEQYSzsQajPnFjoRwe6EjV9g8ejf",
  "key18": "2dvrRZ3kMWtSzDoKJNHKaiTxVSpuRudiQ67kpjREtKUPPLbSBihkWwZ1c7ymQd9yReDu4rh9MBsxSznKzsaP87wo",
  "key19": "XwbQYqXduTBSmZAA2J4EcfLHm5hr68EkagLB5C7MHw9C93zZmZP2Dya5QAAL5LDy4qWRmoUo5ReJDfv2xVNaGVK",
  "key20": "4JHvXpY8sQvuywJ7Xyy4iJxaFhni2AjawXPkFyFMj1e8b5GHSxYQzxdx8hiTGvjddHRe6pHCQ2KsrKtNT76rXMZV",
  "key21": "5RqqotTqt2zSG18Pt9WZ3Sj9KVE8RJBwPdQSzxKzqBtZcWLaGE8KB4fgSUap5P5YuJXLZZvvGX2QaTvZw49meWKC",
  "key22": "2HTvGLtSNpQyUEjsRJFbtBVBWYssdES88KrvfHwYXWPYPfvscpqgruVD2zFga9Bc19ntudPFyjeFvw6CZ7xbuqvc",
  "key23": "VBLvCQ1rr5odBnGoPrhr33t36KERCLqKPM7DueQb2Q7B16eaa5cDNM9JPpJx3n146mWtcjHLbjr9WYFJM4gfsfL",
  "key24": "2KzxVx4niYwe5v9TfJ3B5rSfsZHwZwjiyprp2UC8z1hhWHqWa3RPLgro7NG2ye6kMwJWqcfywUc74vthNunqdEAW",
  "key25": "3g1kyCMKd26Vh6BbeVDo2AbwrJrxD11UGyDmfj8xyUPu5YTXNAz6vZ7a6Qd8QVcAahMb4hkABkewamKBUY3NLEHH",
  "key26": "2kiFEvaxS2KeNKfn4MVjbsdChzqXZcAU8rvEM6fRLHoPa1vgvCC34UMrtcHeBiqfTr91U6am1xBx2GyX76U7Nq9m",
  "key27": "V2yZVbowjAg2TmhmkM9twchKKvtx54GUdxV9STQeV2ZzXX7hNsfrsX1dwdzsZW3XGHcJtyH3ZztfdtDqBsGodZ2",
  "key28": "5Cn7QQhwPUNTenGEXxYmJKRsCZkL9icvAGvYeMwCbhUD2AEgoRgpvvhJVuGaruBinujk9sF1N4crCLYQCk6C4cch",
  "key29": "4A66MTTpC15gEqvnpGWF6RvWGibNtD8Bqb2J5tmzjLMgAgCK7fMAmEqKN9r6rQUgQmryNsyNFqTfzL8GqpAeRHt5",
  "key30": "2VBE4p9uuN4MpZGfEJKpctdXJAZ7LL52CMSHDvXBs2vUcYBNHRdGRiFbMeC4DXci7HeGxywP8JkCPgdpTDpDM2m1",
  "key31": "4hnsPjYzFuG2qv6NDtd35h7r8NC3K1WbWzLmxJKThWSAkZumnqhRPRReL881q6qNbGM8hfgoMBRUWFS2SwNaNgw3",
  "key32": "5a6Wfofq1LdY3fLpBFMfyLiVDjWkpzfgW7t2yX6QFBWMRtL8Wv22V3MwM48wRX37VVQvPZBP71npM961zw2pj6Th",
  "key33": "2AY89nDQX8tavsgmpuYfKByfaScAnfuoPbRUAhgYDiTXCfD2bsRSPrASnUhxCfyCis1KEG45qQ5xi1uQpzEQuQVV",
  "key34": "4xbmSNMzy4PvFQ8i5j6ZgWxrVtmUQA9Lty2BthJJjDQg6bu5nRzi4R6uJs9emfb5MPCQQkqLuVQPsCbe926nFQuj",
  "key35": "4PstQ11LaNowUrysSygSva9yPpW8QNZL11kKFMZGJ4Fdn9GrD49KoDSsD6GP9DK7GdXtAR6n5o3yE95J84zA4uUQ",
  "key36": "4C8X5Nw6eHkvDtNmGo8XuxmpLDRHQYc96B4BAKXsZAVYw7c6K4Yb3hUArhg1yS6wdS3x46p5bEZTtEMcRs9V23nC",
  "key37": "RavgJh5yxVA7ZtbVXtt1tW3gjZGm99svgrSvVc5SeMqHkoShXKmqqSrQVfm554KfJqoXyuuWzimc8HSjb22fkYq"
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
