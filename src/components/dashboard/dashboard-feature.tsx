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
    "45MEXkzphcM21BGmMpo5FnUBs5F22oPbkvVERihGEz2XhqzgH6bPbHH36TY5CzPirzd1kpkkGkxPt6NAMY15qT1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ksjnf78m2WXJXvGbQmbP4ndFFaQ6ck2nLRmvLheDt5LFosWnM7UFBNs1EXxL8KTxAbuVmmS9vhyeVqHXnfTr32z",
  "key1": "3CY7RtRh9tVwT8PdFfTHTuPsT3pyEMSrNUCRCfCCfwXdqzwjBYSuGZC1z8b2TxUU9jHAqjpum4QthapHWUC5Y1Va",
  "key2": "5XayhZGmaLHJJY7kU9FcvwS28DCLi3gYxTHygqFweg4sZQWKwmZzjGN6rKbbUa5ijx59JNQgPK2X7d8pkp8F8qx1",
  "key3": "66CM7PNakcSCk9nbGNU2Zvcr4yrCtrZyvrwCuYRL1jrjhRTBzTigmYvNVth8zrGZdeJFRdMcpTzzdPsURcwWQiyF",
  "key4": "4obtsrBgkgen3BLCuVutRdpovNTPK8UD8SVeY1z7QfcLm9UjZ4hkuarBMXffyECz6FJQ8YbV6aJ1HojK2RavxsgX",
  "key5": "36CDoUpw52nvymYefmyussiHDBcHyq2tN4mZyXZiyfpiCNgXkoXNNg1FUwPDSUcn5KdYdASop9meWsx4SH6YwHX",
  "key6": "5opUVonMBvUYZUuC8eTfJ8VEPL47PK9Pv9Uvjsu7pivvKCEEChA6SF6md9kK7nYdWZhbHd5doPRuBgntTY2hyt7S",
  "key7": "3VgGC8yNDHW1pRgSusGaCoibUAfLXmiZcQBr3koNsoWbLwwfEYjzUzpLGa1fxaEG9ZfeemeSEnSRcyVFTGq62Kzu",
  "key8": "4miQud6j2YCahfd9ZD1P3vV7fz1AxB56Epigtq92R6zcNsGiv9sQPzHysHeiGxF8motfGr6fhYaNHst3aCmjkQZv",
  "key9": "icfFW3NbvfvtVm7U38Uj8Snc7aBPpqc6iQS2JW21z2J8GrFYxJB5m2bGKwrunysM5P1ugVPbgbkwPA1jfzKMGUV",
  "key10": "31RtbJTLVXAPb2w84LLNVhY3gv5rkYLWWXwHh1nT3DahGAhQebhJMLHEaKQ1bxKbv7UKHZjKUbSZvrcxg8jqEJMP",
  "key11": "46bG4ReXpFaaQ9cHsgHNmGvcgVx2stKSxL3EZDsBkWBucrsaQnJXArsiAoSCz8nGrNBVz4Wp8vHdR3VtuvLU6ALn",
  "key12": "4NqQfJvpXfP6f98b57UZqKSJ75Fe5yFFnp5KSqtaGNb4WfwBHUkGTXXD6mckpdHQy3TVcFfynXAUrax1ExQAijaJ",
  "key13": "5u9fH9g3GopWjY8E4a51QWpgBpjFKxaUq6TbCU9EBpXhU8vofCMPGN8RNrH3Q8BpGMXcA5qVk2aD2PvFJy7ts5Z6",
  "key14": "5av9xD3QDMJRfcvHUYqA5TXzLaveoMUoReFqwU8eF6r74M1yXsensZ3dNRyXUkhkoBRvgMRYprDkPJ4XEwkDRMyo",
  "key15": "CxUVcPeMnTGmevJvbLuwstupqwT1A3hYKDpeSXjimL2mQD2rupHHKsVW9W3bmQBvfFwmxmqMLnmYcrisQNRn3h4",
  "key16": "4bGfgCzRtVrZMQcPfc1Upw73SDskbfjqk86ByBDrs9g6odPpiStN9qBDa8Er5Aw58sUSRETdSPfYbo4D5bPpicRf",
  "key17": "5r79eK3KnHoJVJSmwHL3DfUsiJQ59WR3WKZTqAywaKs1vQ2pcArcLP8v3YdFvXs7rqAwzV8nM4Q5TikXsog7ifcm",
  "key18": "2quFnWvFL6BGtLHNR2Zjo35FGvtiAyLHPF9N7DyLvLnr323MZmRPaiHw8EbuDBoEqF5ivLjni2AXKxGT9chpc4j5",
  "key19": "zV2e9tYNPMXqHQ6UQCHHcoB5ZftC5duofDecscA2MGrEc3KGzkZD73SbvLeKAFZkaCzSMxfVgRWXdFdquPFca4Z",
  "key20": "2PgPHgut6FXK3hvJyQSVQ3wiDPQJf4BqNJgBYBXxwZvMUgh5CLCxDBFbLDmcCnLe9qn2bTQM7GYZ71MUmgZLR2gL",
  "key21": "2KwwwxzmHSGoNCqtY1HRZaZThczhAnRVWNMuyZw86hNE7TdPKM1SS79jvE4AC2YacoamKoAZjVMryJQ6FbCbfJig",
  "key22": "5DXZS6rYkMcRrwGyPkc9hTWBhiFd1neBBbfrU3pjz4fwykHJRLm1ueivwfHdQ7q572xnCbYpb2Rza8S3aAyojXMH",
  "key23": "iDCRdPcrRBnmuEBep4evvnNgnYab1qsKL4UBbNt4MhcRk7YQ9nrrH1XUbXCSv7yo6HaecmBaFxJrbfEAdq7k2wj",
  "key24": "4jYjPethtNmV2fkENs6gZa8VrS5FevShdtk3FzA496kyBcdrHjSubtxLQXnJuR2tPz7FzQX45vMCGAkq9X4YoTkh",
  "key25": "4YbAHuv7kSfmx557hzeCrWkqDJz3fVPHGUwh56h8cLe4TFgQ68C459JmEoRvmVyxpkDFL3JShw681oXNA9Kr5nnW",
  "key26": "3Y5KRLGxThLEweixGD6evvkyGh5qxWzNYJ9mpWNwXtdi2xSE2PGWthrXxotTAHgcqESsNRJJ1DedYweVsikAN7au",
  "key27": "fdmx6JFfpKkGngCXxKevtmZyG2ndpNZWZtqhtgWfHEqmDeGVMhYF2DtYc8NtdPr6h6LHuewpmVCrGSTbY5My4tm",
  "key28": "2NfTKBFDS67xgv7rJgE8fjS5PMLCjVhGNHhBeXMrRKHZAQ9MEr6VHvxRbv8h5b5KWTMutxHyT1SmZu8zezdn4WXk",
  "key29": "4MxmorVJ9LzhEfm53NaAuB6X29NgSZBAANqht2xuLvzCX4rBN9vT9LZrF5smK6uCnthjd6oRs5Jhm1DuM5CA5h5q",
  "key30": "4gBEKmKKoKG6tDHWgiE7HFbDLkGThKoL9c9t8KMf2o26KvscWVTWhzRtXycvtoqQdy6sEZHGAYgM46RcjBj8AMQo",
  "key31": "5v3FSZizRWXFtB32rMmTk1aKdG5pEP3B7RVPQWkn2J2jzScaE3CfGksCBbfsApNcawA76wk4u2JQGGfzBFQCiDfm",
  "key32": "5sbe6es5enPHhQcQDtuSrG81Q19rqBVyt3khEsbcfA8APkiUXZi9yCMzDm8pkU2cYrJekNDVtUqw4f8Ne9AJrge1",
  "key33": "FV4uTEosj4WtV3YV4j7fxzQUie4vJUeJmqBYdo74erUz2DBz7qC7g36QAEZoW85cr7xMwWAEXWxJdRCcPekj96o",
  "key34": "3Me9mbzmro3WBCxqrMtDUAUQfdBRvTbSBF59sH7XsCyMxexkk9riwD1h7BAWAg4EvMcTYe1sR3aApuRSFThHFxZR",
  "key35": "5cW4gzg5MTJbFyHc3zAiwKCUz76UWqYurrqhSaDfTLphg1dcrn8zxiwdnXmSd94VZCUZ5JhdhQW5k2CRqv22WBsg",
  "key36": "3RopTDehzVVxytwegXm2NzyUuwAhtb9TCzWBPcEK3ZuEGt2stdsfzpFGDXguW1UT2aaFo9qmjRo9vicuPi3Hsu4k",
  "key37": "4XXBRyZKmNvQgjAnK6BvWLkRhME72ywsfqAs837mLZWVCgHGNHmhmGsxoFtoeRrCacP9pCdnh2WaA2pum5Qb5Bmb",
  "key38": "PbgHGEAsZXicHDuwZZdU9w1erySDM5DsitqXB3JnmnrHH3RYA8K7iYqpzaTuscpPNWSSGvPV6YfFsSLjXdUPEAs",
  "key39": "2xkmMoo2DVe8VR3PWrvik7JdsjKSAF7SeVCExHTac1kdyjr7psVqMdJXDUFvZVjSRMSgPy3BpzRJfNjKBqpaBbhM",
  "key40": "62T4KXKGn5dC8WfqhU1H9uK7WhN27aCLeAgNiRABaxHpf7pZ4BjKv86F7poF2EANEko9sucZLxgxwawwtww1VzU4",
  "key41": "QuyfoeM1GQrtyKHdw8Yvc6NuVsGfrKZkvk8uGXcQcUQ3aUNGz26xJBgZaUrSUNJj8rexveSNgucJ4drsoMHWKTU",
  "key42": "WNuaUftr3uMqQJNWjNHcJcndjukm5K21CUWf6QdYS5N6MydkQuZqxGgmx72BW2mr4z4wNdCitbJGWQXyNfCSBRH",
  "key43": "4oYW3AmmRWQSQkWyYhxUUrmqWSZq18Aads8ATXSh8iPxygqNQKtSWRDGb2CEV4yq5h9dX5393Pr6W8ff6KTENzkP"
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
