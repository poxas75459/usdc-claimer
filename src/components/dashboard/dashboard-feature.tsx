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
    "5KURJMLcfwJsDaEV6DkujFi7inHmVrfZe8kRz8oD1EyhKQoqo1pcM1H8ukbhd8my5gUrBvH189YFxxXtoq6yuu9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i2qxZNwQszsdrSr9b6mzXCuKN9TFf2jBFWz6sbigTNn32HrvX6rVgnsDjc5VvC4RbcFmP8vHhVm6mSDUe2RfmuJ",
  "key1": "4Lprk2Q9aUgq1pZf11Wu5arKAq8WCoDvJcRG8yK4bqYpKA8QDdWm22zn76t6NLq4L7PLQuVV9FiGvgvs8axzJsza",
  "key2": "58RwbhAG25BHXe1JTm4K1SPYm7yH8tP4Tkz78p5dSipgWwfsNgt3NvsmoVmj8dwBFWvef3VGT345xbZg7zMzLPSu",
  "key3": "bA84TCVxE4GQEQr6x8nhzD6KLiTpd6g7Y6DRp7YSr841wRXY6yibSocpLR2BvrovCN7bb6TMtpmLjmdtSAZ8EWt",
  "key4": "4H296xQQEinGg2NdndC2fFkG3hGC21r8kgufthd52gQPSpcKPDwUxWNY6ZnPpLNPkzLA9cnEi19WbPYLDrPx3HaJ",
  "key5": "4Um9qofUnpekWhpYeVyDjWLgy49GW3RWkYvhE597kQbXv15xfcVG3casP9KcLm42XStgRjqn7DtSBXATjQqF8SZy",
  "key6": "3Ckqc8Y2VwN7R2nUZ89Yp5Km8EvsmMv3aDe9qTC65vYw23vLwZsbYKuh3vL51UfQs66XBHh2mpJtEExm3aAWFmsz",
  "key7": "Mg1EU3nGzznAfwTPAZhcTtpVZUA9sUtsbgSpafkyw2oDydjjsiGzWxPH7E8DKHaVxNf65RCyCb7D78zrBqP4QD1",
  "key8": "2CaRSyK6wfLLkCMWw9183MNmqQqN9nG5gtFU89wEfymjFmTYY2t14T1dE1yfzbXjFPWWiGCGtDWzKcT4DW2SEhYg",
  "key9": "4W8iCoYQ5MrPfto6QYzD5M1QJHGEVPnBgiv6c568m9nFeQUErs3ZbX4misfWsvAY84Q42BhreCCZHX1Y2gUh4nya",
  "key10": "4dW5gLG3ErwGzDzSLSFNYwA2PtKKh6UP2ZmSH67Nz8YaTUZzyM3KDmZMhmMkRRh7yXCz1pQ76oKaTejXjyVhtxyD",
  "key11": "4ojGDzRHmvDU9RNrgUfpfLz9KS3PCmz8fYM7AHsz7LrPag2cn4tUqi1st6VxEhBcuH85qpNAR4fMjmSBFG2HzUFA",
  "key12": "61d4THK4F2EDZgywWZFk7sptr5f1ibRgUCcW6mNNySKUXEymWkwUjUrQLq45jB3FCkRCf4wbXkkAVkB6Tvyuyoxj",
  "key13": "3XPLraKQSyH7vvrnp8DgP3EPtn4Wupa6bdqPHmbFCNfDhEmzy8AEowF2dA7LsCvSqvKAMUTURtAEcxXhwbq2Ygdc",
  "key14": "43qvPYpvU2cBwmbCFSAXnfakbdhCTsZjjPb2LZfgZyhXFDPrqxdANe4Lvnjj26RuJxnfCeaZtdaGpk5ZNDRAvj9M",
  "key15": "5dU5UC9DsPd4CRMsh1mUsyLTbFP4SfyFFRPEqmL3Aenrf3DD5dWfZ7yuicPobDJKXP4NfSdf5izy3DvtP7rB2Qqs",
  "key16": "t5Kk4YN7pgZGyDnVqeAFvtWeaprSMeq1FXtrrVrhrTmzEJJhQPJnZoKjmLq2osrsfM1j87t2Rpxbmwa1TMx4TD8",
  "key17": "22uVcYsqaYj1vbX9rpMg32LUy63ijDPrj7eee8LF7sasKP8y9eqxGenecRBwPb9WAxGPcTUd5oWCS5vbjMrKYBFV",
  "key18": "2F6hEz8G4CJEmYJYBxLLhUjHhJuegd1SJiUBxHEg8ubSEnAWUNXzvBeU4bWquM2fNhFg4tad7nnSfzNXfkRwXesQ",
  "key19": "3ngnvwgz35pdUYQZd8nrBaYSb5hsSpMGyjsGXoiYenrX4XyaxsYo3JM94xkUF48c5p4Ke6tmmCDKH5MHoMvxNKry",
  "key20": "2FkrxuJwR5AxVPvRWd9YgwVN9mnzLkXLsGfMofx1onjGmbxLiiGYq6DfAd4u7Ro3zdufqgRhY5zeNZuHYva2UADM",
  "key21": "3gHtJUkMCjatANykVbdvWCMMXCPsazLa6HMEBWpEuBJc9di94EJyXajA3qgTdBWtxPZvEW28ZTaRTPj1CptLp6TK",
  "key22": "36ScDEjFmZzqPfNtskb4rvoXKcxaHRUmZdB4NP6MaNQXotjwAyZuWa56Jawfzemu2gdaMdbq347DQrkaWTWxUQy7",
  "key23": "3LdbAQkpV4VPZwNRLnUMVMCELiJNQuzDDdtHwER27Wa8sxzr8U7BjB9gmTBQFtdaz1rxVzXKBCQdoEzy5xvHxHbh",
  "key24": "4xAsFkPzGDaQgdVwjmJRPFwNNXrn1QxWZYb9BVYNh17SaijRSNy9cnVnGYvm1BnfiFWTyx7H2imYi35qdTWipQg8",
  "key25": "62t31V7ziZcmoxiZVEumB8WdoekYngSL8nk2z3Qa4mcJHYaEfKV1UxtuhnuuxDhLpNCmnQBioYi6hf9CeFA46VDe",
  "key26": "MuHL6T152uVQEpCyzCniU29ySacpB9TQFthgX8fwQdqizPBuDNYXqQoJcL8e2KNmjqBge1mhe1pgAS2Xt8t6urp",
  "key27": "mks4fZt1FMxN5v7G4PUY9ZKu9CdePvurBP9evMsPQ5F6wgWNC9c7JmSwiRbidJBzZAeE13kfAvciXo5gfaFj3Mh",
  "key28": "XiD8Gnt7h2KzBvp1f1KDAxwNnPa1qcX5HK9GXLYxKo3ywFfTpz3tUmkY5NnY1296etxuANUxB77CFaKaxTSir7G",
  "key29": "4PtPdQdUJybuMn3hQMqjYgZWQspGtuPCb8QLQAm4QUo7QjTTb8Dum8segVF6Tr9MmXprvaC2yJC4AJ3szebMNGJY",
  "key30": "2z9xYmH3RLM9TNuVNeZDubjxmgRi3JRzTDvSWuGYXfhKr6JwiNA1fX2GYYEvF2FVHBqftxryXhaCcpYhK8oVxtkB",
  "key31": "SZf52mWrttHRNJcCaXCi7De958jpE7EuuR3dMNK53GW388rN6DFukoEC5FkYemDkev76cbjqX6NznsMD1CFdD3H"
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
