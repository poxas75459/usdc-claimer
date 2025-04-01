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
    "4CTgTRc6f2Ja1CYyTxpkZxQzet3rp95hTqNumjYL8YqrEY13oJPEv7LBzgPU1PWbyr6ohm33a5qfioQoLQiukbx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MJuEsmxT1ZigFbjpABvY7AU6zkNMzyfeKRWnfSc6QCZ4aWzKbf571vsWqimwGe9JCkjCEe1o9ayxYy9kV7nFc3X",
  "key1": "3sneByBkr5nU97pA4caSv1B11guS1R2zKZyc8gWVS5cqPTpriT2YLuXXJZ6rqkXySdFWWhMLbjCck52rbmx4BGAy",
  "key2": "4apNNiWVE7JeZEVA7TEo75XvBdgBvJgiwYHEZimwAk7mANbQtWameQ2HEnMxG7tD2afL9ShZ46NEJswqXvARp3RC",
  "key3": "4icSCticnKjubuMyFNJNj6RJNnmUo9T1dqdUTEAMyKWf7nZKNQVSTDaF3bmeTurGJnvLQuRxR7h2uAkHMwXGZW2q",
  "key4": "3JAZqBojwni5wPnb2G1CsG2at2PpHSSxKDFTmxXRXCZHRtrwdV8Tu26pmtoiE1KxxtT16KpGd9HFeoonHLGLqc9m",
  "key5": "33g9TVPcSb8LzeD2codkKbae5szV6RpZ1SU8pdKPddZDSDxadHHQ5v3YrcfdEsCaAtx2T91DYF4fxa1CkMWXG7Sc",
  "key6": "37QW75nrAh3stcq3DbATkeU12oDJyyMobS8zpuTYiNozorum7m4yUTXGT5pvhh4fqteLB29PSf9tniH2bu3Y2qA4",
  "key7": "2WbfajETmJqZBHqycNzwWu9xwkHvyyvN1wUXTgnZ4HHnZLZUvrrT6pbrLG7AzZJEbS2TebG1KcgCeDRomnSAMNLT",
  "key8": "2nLC389nUEX92GHmk1pcMwFXc6aS26mezBndEmLE4JcjNQWVMmS8qGXqodkXyeHgK88GnLc92A7K7Qe9LLypyrEm",
  "key9": "5CiAT1pufdkdyY5Jze83MfK17wxU4MNNCmLoe86oWyoVYjXFcJFeKs8DqHTo23jdV9rJA4BxHgTAQSN4QtobTjeP",
  "key10": "5ywqTNPwm3M4idpL7yzCjV8gY9iGEKYT2wbpZYXNUdhKPnFjr9PuY6ozPQVgMQTGCo8yEfejTku13mP9kaKyr7ah",
  "key11": "5pmD4aCCEYdLmxDjCGpfWaRaxHWASiUzXvCGUanV6zUfE7XNBXNGDScrMjZ9mYHdz26gx4YYZWZQgSBVjU1XphRc",
  "key12": "5SGERPGzdwfqUC1yz2WQRRWHX4QsjD4TaTEgz6v5XYcHPc1zFeQSELzkCVPeRGugYE5bheyYy1khWoN2M9cfjQhr",
  "key13": "2pq41ehrhVHYA8TgLgBcMTRGu1hgZFeEgWPNFoxjQqYD96XED8j18h78K3ZXmmzGrKY5EK6ngqhqkvv9nJD3b5rM",
  "key14": "pPnDNhMmsDTup4mnGB5haSbvjsWK8aGFgBxpcbL27jQ9GiojRsj6Duw6W8xZMiQ2tFDVF39vWWFP1XUCTnwWrPF",
  "key15": "2GfXBn2eodhKE9FtXdH9phNwg34Hj5p2E6VjDrzbNocKRY2E9RWVDAHVXRzP6D2RrqXaStMVNEsae31GUcTBhWLz",
  "key16": "21YZwNWoo2VbQUPPt4jyoHKvmZwyjcB3qvne8rbVpgLgj7Wev6FytikGuyN5oLTrsy57hM5fVwNHeRbgVj7M39er",
  "key17": "3hdtPYYsQeYU5yRiV5hQokjHTwiuwf1S4L5zGRUdnT23cZydQXaFV5aNKEXwotppARZa7xhuYAnbQrPxi39wjAPi",
  "key18": "3EhPXgZCkoKXBhH9YffFejPvxxAkTwXf9EGguQo9VeQL3Fk2BBHEcUk6dRBiYBCUhyCiWfkZsStS58DgxusxvQ92",
  "key19": "2w3Knz5yn2j2Zg5yegqMzvDyr9N2RKUvf3wLcyTNvqH99uA8Jka3aTXWg4NTu38mZWoVHLzG5cyaZUse9TEvpmaZ",
  "key20": "uPxXKbYYaahCMtKQ3THPzsgib9TAgUpXdRaHfoEpSdixxioCDyPjiA25466WUEkcmTbgY7ZSgwtB71UPKtHK4uK",
  "key21": "4wvSfuSHz9X9nEh3BaNadnemntPz4non5vdHhWGHekqQdqokKFj4V3hFUUvzcNybzJNfBQe2ZzbyKcFMpJ8D19B",
  "key22": "649TGtmZb1GDxaafMHvXJjQ6sMypwtGQho5GsUMae6rK1Mj1RxRVccUWdh2xxa2JMkvaX8hW2nEksQiVbpiVrgEz",
  "key23": "4K9y1Be8NmiTaZLScK4kczqLgNuwA6UWJufCGNugGwa1uKEsDc2tBx7r5TKwvAoosaqVNqMzEGxgfyiT2zYZarWG",
  "key24": "2HUTvjRPPYshWiForjeZA6LR5FqPm9orkCCqa3Zbr9BXemiEmVGcwerHzQKCo8e2NN97cU92mukd3TahoWUiVHMs",
  "key25": "3WnTSBA8ZGsFn6n6fn6Hx2toTwLnxN6d6G21p1Tp3x6DLr7dQycGXGap6SQ8drN1E8Pr57SF9U9SrSiQBhSw1rGH",
  "key26": "3HPkXVtPTieghmqXJF4J156How3rJyE4bN14odMskDWGoAZiZyZZ4yErzXi98fAtPnVUdT7KRboo4aDDcTsaTzUx",
  "key27": "2SZVVmLmbrcXsNnUep9gVRMmatgTkWGHVszVkPzKH54D5zi6iJpRhSEjt8kVZsKZvPTXW19yfsMyv5BHCE6N5iqV",
  "key28": "24vSTZfM9dMD4Kf6dEKHthtooj8Xxai6KayThaJNbtCKvGAgAeou8XztByc4FSW2NQjiA3s26NDxsEHkX4ARhLAq",
  "key29": "4pa1YSv3N1UfkQh22FhXLpRdBRntD9JV2jVxvb9G8J6EsYuf4BTGimbKP8onqSbdYmkSkpRdzQQZvBmY5LPmxY67",
  "key30": "549nQbAXGCRhiVmMhzNKG9n73gEeSgfGFvkD8rjWcDUrhuamMb2ufZ4zjo4iJNWaViyMGeyadRAvPD9hZN8cPMmX",
  "key31": "54NoqRf8uitPf5GBupCa94wbWfRU81qo3wHWPPUZTfzUiUuoEhgzCYuZesLMdeTfoKLQJKs2VoXQJBc9xZHWQ3Li",
  "key32": "5iACHZEnt1nrv51Fou5efTSyVGRLQuCPtHygZ3FXXua9Gt8E5LBzrxc1zAs8vSNJdePGBTg5JZ326z7fUxjpkFgt",
  "key33": "2GUh35qiSePkLar4tQEMEUg6Mg4nEdrubeDe6G1j28WJ7aCtzM8HhT1jiSDFw53TYvdnLAKxNjfmqH8Q9W2LQzfm",
  "key34": "2Y8G3MjZL9XWSwY7s6PZtmKC942ZUtYj5QPVtqtZqzd8skqvZaDEkJA1zFRYa3UjJT2VjQyWgTA55WcbbxM1KUXo",
  "key35": "44thmjKsmLQVhj868anKpTEhGM7pwAcZGxFB1FxLdqT6aTUQ4ecsfkRytGQAtBFh4ypiG2ZcWLwN8JPUnKU3LGaX",
  "key36": "3CpUocujcTSovP1MWsiZcSrroxQBAoobKcJtKNzh3yyhdDBAVs3qZYWD7fS3SJvaWJr6weQ57NgXS4zkmNxayKm5",
  "key37": "3Fz3srqhCDtEeVHmfUTbtNtwyE6k2Ye8UrAhgMeDCpaXsY8TvGi8e32p42haiq2EXyWXejm81oupVsBK6qSqhXJK",
  "key38": "5uzvMHqnGMkqT7myELLqSct9CnrwQSSzmWsgNXjhzraMc3EJEMebxvL3yQjCowYAoi9Rad6YNjesJjpdh7yRqeSR",
  "key39": "2TnhrhUYo8TdHKhjuHnT7ieNDZHJFPgJTDg6KGLNKaU5AwNX13MLVvEzti3L8yfNYRSSMRkPffk5S6TkGLNHzWNq",
  "key40": "2R6N8EyvURZ5kDcqzAP4uh2W3FmKwjehLYJWjBzD39My69pqgEeuyWWewj3sd8wumSGwDmjWKteNg3Zka8cyLqz1",
  "key41": "vnfXZudQrUrqudyJMj7FzzMcFPKkYcUHwfu4rXVxeH6tcFMCrLfjXjMKceLACaXYTPNVMq33E7dAAgEAVrE9LHQ",
  "key42": "2fwsFoQZ1NvZQWuJ5QNogPcA96vSVH5Rzrw67H6ybKBYerTTP8z16DP1LgxfcygKXt2MWPH97FQR44JzfcY9SXRT",
  "key43": "3jrLzxeDp9oKAYZJ79Tmr5YXDNnh3dGjqPYavdAyV2XP56AeAoVDJbY5g84LZZvtCsEJ6JAMMtca7GdNe9zsGoTB",
  "key44": "5QCw32e7DtU91bMJPKCSqNufdBKvFLNr3nHf4vap79BP5StHFX6GVcXV4P9f2Suin7Wo2SHCy7vEgYpz8Fpg7pbc",
  "key45": "5uBFn5rTSP8Fy1rWPg26gGhphJYuEWZ2pMsM68ruMgyu46pBoHLFn1BpXe2HAoq3aa7nQxa84B3M6KUSWdbEvz8u",
  "key46": "52gjLohUqy89on1WcSh5kxofzuWTVzWMeVVRHddUFqrU53UF7ayYLqjPyvZPpGGugA3FKEiymVV92attuoLCQkZj",
  "key47": "2e8VN5od7aXsmGRGA3PVd8oEsfHT34zG6djMfMKoEUvyAvja7dQZQLA4RFhxjPDQDV13ahj5NyAjAGLfNDBxHaaR",
  "key48": "4H1HDHT5vybun7tkvLMDzUVnNAWzgGT5Q86TLcr5Y5bNWh2QPDTyjLCYAkiMkCBSGwHsAfVx6ndqZc6rhw7nxAZa",
  "key49": "2gUWc7fYEVoNAjR8s1upk39eTPd9rykSRmqSmqKHK3yXePdEP2gJuexBaz9BtD5Si9zpT1b9NkFVzR58jYbkhqzH"
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
