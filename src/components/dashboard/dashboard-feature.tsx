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
    "ThALsXAHNbgGNFqBY5GPwZWuu8kktjX5rcFJ2WyYQpAgex6YvrPXRKtWA5sv4gT5VB9ofgPhMatWG8cwZKbRVzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wLTrBsv7rekweDxwwXixcgSWSpBJFU5NtQGZNhTCjVEufKwJYANZRU9c8HVr9C2J1uxdL4hRvVq9VAgFnYcCSJN",
  "key1": "E2TuYYb2WAAccWXFeJHu2hRw8FfMKQSY6WX7n1VDnjYrHr6FYy87nahDWXook5DzBtyLF7DjWh1AdxsEFqTCnP6",
  "key2": "2R1vT7ocMjELMwrK2sXF2m3XahZWiPGy8xA1ZxLRj8xZvoAB8x1eeyMnyD1g4m7MRkBKSn8kXPgHR5nNBesky33U",
  "key3": "RhtDifvJprq44ABWD7fMo5brABq4MA1DBWzfgjvHYJBCjP9WNDoE4115RB1YATAtsr6Fsbwtw8BCUHxqaPAkgsA",
  "key4": "2P5yeryGdCpWT8brq78ddABxT92Tw5CHNVUFBbFhmbsMoHTdRyiSB2jvRmDb4YrKZd3AmakjxuudypbzuEL8HaQM",
  "key5": "PXBZhE6PXm2PD4AjhQMNx3D33rzSSJxfUXerzJD33CJGUPLxryuhHKQhbqsk5RdDg3k4Tvcnw94FhgdfudVpyim",
  "key6": "2mpnr4QBzaWqDaAu4kgDhQ1Yyj9aEBRL2XYSKX8rNWpyPZtEKW76MyrqBJP5qdeGAMa42UWRRF3mcA2Hc71vjGQM",
  "key7": "2jXfUgwJpUub26Eai8jECiMuiFKEb1mDX3Tb7wGaFuazC9nPuKiBnxGsGBjCcAc7uLVrkHeksHYa4TXvNfzMgWbB",
  "key8": "2Akma6c82KGuWe8kQheTzNSA8VM6Pv22ywSgZ11XQHzk1ZtwS2NumtdU6iPN2gmJ4fa9G6s8ZAe3UnzPguLiEZ7B",
  "key9": "2KToQ4k6eoUTozZqabzjuc17dDdTXUyd8oV4bakVMREJQMEfnbQAaSrHv3jdGwn5W8EwgFUWsGeFXF3DUjDpGaTw",
  "key10": "5FQF2DkUJ8ogqLDmHA18mDXjUTncY7UPvyFQvc3wW9TEeryNu969ARsq2aEdWxj68tdtdFmreY7XtwH5pS6RKrTB",
  "key11": "62QhZyNqkCaU3LTxeTtuEoEpUR5EFxKUBvyMCoVnf6w3PomwSFm7JVo9Yec1qVUqGJeBJ1BxYX5UpwR93WCBjyQi",
  "key12": "41LoYgZKKWXvwcCwRUY1NpRkdvDvmg4ZEcEKmqwbLgRhQGi9ukxcPCrttaVS4FGMgV1JUEKNZ1npo3LfTUA3Nb2V",
  "key13": "4UjpvoGtm2tEp4tSeHUtfDYfKcgwR7Ki94Pv78taSzccmMcmU43JKPRZvfhy58dLL8CH2KzuNQgz3LZqoWWoyPEZ",
  "key14": "3eyZbqtasCVYwYJDc5LSzrZZRfn1rjrDUN54FvK3CAe8BgQz9UcAfkCNLiwqjebZSb4VWh8YGkovvrZTa9ta3jt1",
  "key15": "2TndDomRs2R3f1H7PMhu6V5XyhNbkiM1XpjS2iQBtJpjpU8TepzL7yhmBSXtH9Wqc8Ev4FeL4oE1CfRLZ4wR7uWS",
  "key16": "3jiwmp3mxPtZEzYfb5ap4XTHpyfasMkvbpXkYgw3dA8GTWHnV7a8rBwiC5eUS5LoBkBATAsaAns4V6s355nPiioM",
  "key17": "Sg67hDdGXR9sASo174fWUJmReUka7ZgNNr3k8kvoR15wbTy63Qki24F8TPBiTEVA8vSKRBW4Cnq4h2gptv9WkG8",
  "key18": "5rye3iaVKMuJ3ASuEnyvaiowXwHXPSeHXmmG1EJbPngnd2Cv23sazw62DnH4PWNGQpNLEDCXqaukVBCC6PiqQJUq",
  "key19": "KET6ZQp3ZpepEPhwVepAMWgHpS57steJCssXuxuvMagmuFqpyF4j7u5Z49UKteLWhGVYmKh7tJmcC3WmtVsWVs7",
  "key20": "57BUV7PqpQjNMwEUfu8GCVkvYoK5y8GcTe89DTwU9BrearQVE5nAzNAUyXreMwjiXvJquq1LPd8EMWhWf5mfiQtM",
  "key21": "31nfqdrk3zppfDArqEMh4YsR6pyx1p8A7CJAJpaRpAeUQHUSoYUSxsnafqLphEr9wbWioszDZCma1L6VrndftGrm",
  "key22": "dLRTUPzqAuEhiRcT33f5iV2S5CGdZUjJRJQBVbFCtT6JnnRWaqArBRXzr5ZQio4qcm31BhSx4X4BtkwcKH11Tm9",
  "key23": "3hy7t89dh1jnqMmQVwr1pH87ZUPtoXnDRWTpsspiNdspaQW8uxmvGEFW12jq7tfM13PAtwi1xoJK6sg49h63pgVH",
  "key24": "5GiQpxfmu41z1igDGpEWkXqy8uFmdwRg1iQ9x7q3nJF3ssSvVRDPMqb95YyoMuMKbNLxQjDdN1WCACu5vseKJPQE",
  "key25": "6pNrkUbtgZwPnQddMnqVDW1LbiX1ZdwyFxYHu1q2gJenXCnE1fqxvn78V1NDokK7jzpdMAsAqRcdvjUvmm8GAtn",
  "key26": "2zLq8r6bXZYKpLsuJc6D2tDtyXJANr94aDd2hFD6mJgHq8A7dun6TH6ZiwbNS8EMtvxGw53xdwgp6T1pUdwtA8FF",
  "key27": "4U27AZGeA2EjgCcheQ5bWFSC7aKPAHfZ9oAqRKKayu6xfP4k3adMTzPNxgzZdbbB2zVVxdcWYrDx4QivZPKUpBuH",
  "key28": "2496KzibRCuZZvH8tCJqhTpQVbQY71Sfw2zKwdYiyFipTeeKPDBEn8zMm6niun6gQZn5TL5aJFU2UTvpXTsjPWNp",
  "key29": "5q9gvQWHWhajMHrst7brEt281J6fNuQ5Wp8xGtpF6hks7BBJ2MuZiJreMHj4WmPATEx3oCYYiUxD44AFJK3gtjH8",
  "key30": "5aLCmscEKA55qqU8PQ3By9v7RCcN3s8SHATmtJvNvNUWMUoieHPDoejmbZq3QubYAaHsqAURxfXjE74QMqPozHPJ",
  "key31": "5WcH89eRoXN933JweQcVhdtiHm7MNcx1TLw5EYgXEz4zrr9BbWbbvf47GD4ZgzLKTYaFJPgXDNsXxWZYp689y8VV"
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
