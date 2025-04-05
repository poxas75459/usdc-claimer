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
    "445Xw5U452eUm865v3YV62S1tqGnKXskjy9FEYNkPBiJRXoaoMcQJvQoMTtDGRER6mvbFzboBW7192QALTqkk98f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QmWgLEnuGNJC5Ay3YRYRujY9LzwC2BJcZxyod6fjwBAWZVq7hHatKRQTdCaBa3jW6kqe1MeKMCeoUihNNvp55td",
  "key1": "4UB3EywEhDC3WvuNe1GtXbxhHw3bkjtSpM53WsusjiPBpFJ2uT1iPcRguGd3jLVra5gJEEAqYqZwgFXJW651ZCeA",
  "key2": "3vj4RghLibyAEr1fzWytmjaRLzQJCCJFqgdLTDnBbZmMNvpJ7bGhJotjxcxWz22QyxWVqVGfGRAtAZwZmose1zze",
  "key3": "44fxxMN67QZDV33B7WQC5KcArsP2t4x1KMvb3AnQYUrFw5qowWba7VeYJmXXDbv43m2Ukbeu5wcVrmjNVAipUcrA",
  "key4": "5yzaFmY9g9KhvATNpzfVnyfNAcW756Zi2xwbVUfEqvqp8iCPnH7nUMjwjuVMFntKiVyxtqfCm5nvgF5J6y5rcQ7X",
  "key5": "2rSycLKRRJSfpkusKyhtaUNWoj6JgCu4reHUk1Cz6tGiyX4xxVYoqGkMDZyufvADpvDnxbrGJBeVikGHhD7D3XSv",
  "key6": "2RMbVdio516FszJBhmMKAbg5RtHaRmYnxe4nwGKkFn8BnS8EzHCQ4CrSgwAYd6MjwczAZa7mcNkvd9XygKxVSBbr",
  "key7": "2RmhmAJRZhuvEjsWy3E67idGNX7Y9SAieeQRYs1L4fcUAuzKrj1vRLwupKMMre5iiA6fXaH2tvxVuefhRWEZrkug",
  "key8": "4qH7tpUKNcuwJEjDpsMU2XTiA6ahXoWX49cBnysvZW8aCv9cxrf1xeT4SpQdfRwLuALvPmbjDNU1A3PPZZDWqR2R",
  "key9": "51RWoay7YC4v6AZBEoc9iqss7pyaxZ6RpDd6jQxyudcdzQfhmi1UGDLKgcZYQ2ALjBFk4a5iLqC45ikeErM1hui5",
  "key10": "2nyS1GxBpJ1BpmJMzfk3Xt6LuvB2bU7fcKRmoy6YSTCzAejMeQn8v2TD23mGL4UF3LzvA7Av4euTmwBDUZaVWvV3",
  "key11": "4agg5qsukPHq8L7faLk6oi8HhxPJnHcknFkRRkksv3VM3puHpeiP8WYAQAhiYj4bcYHyMVDqRMPd3j1uzLSGCkZd",
  "key12": "5nqbay53UUT1XteWAuUWYtB76aWqfsvvjn8vtBKJd3MtRVv4FgbrSE34XMRnvgZQuG1MVpzFcK79tCX7KsGq4Pb9",
  "key13": "4dtq6AS8KTY1ZSXh1gFAG7gowGPfQc7fnnFNPzK8TpMQiX4hVJ4dyN1Sq1T6cUBCngMy41ZZ6BC7msECV39oe3tE",
  "key14": "3iFDDXFixoJdykEtPM5fN9hyN4byeBsnPdwnMsRPUewSU8bQmBeXQeg4gU2Fu3Juc5iSQieR2NmKHnSbUfm2sHvU",
  "key15": "546C9cJ6q1Q7vJ64MbpkweK6PrcxyfcjkQKKmTKDwV4YQzCatySma7kvuf31dFMFN7g72utR79eWEd3rtJkqsQBd",
  "key16": "5gvXDg4YNvg9dcdYBejnh8h4mxyEuvTrbfxZ7WccwwnBjm958GRo8EDyoaJdFUc7WKqQA8Gfrdebt6xS87MwyRTJ",
  "key17": "2HUh6hQMxWTUsbx99wPVVsjY269dPtmvfLXynxKnfLDQA5vk4i26NYm316dynRovrdpeYjdJZqnbDLzQGnfkH37s",
  "key18": "npeRgkGnaPdYtTCpCiorzRARrutx4hcxQpmgdWrBYPmE7LnriipqK2nCuNFktbFi9ZZQi6cmok95RZxDxm3TDDH",
  "key19": "4tPaGcYSmRm5Gqj3czfozYxBnRSHnX12TPAojBr83BnYMP4NgjEG2dm3ytQa54qZw3mE4eJGHHGfB7fQDiHGEArX",
  "key20": "4vEE2WUzBzp8twbsG4eevAkVNHUsecQF1p62rbAD1DL2nMrKRx8ag1a5pEZqrHsP3stVi5xpodFZoRcMuxbQ7tpT",
  "key21": "5MBcETbFhv5KRmvN62d5Ptz5XmNsRWAtEVW2Lw4DJjipmwHiyzhfoQ1yrjeznFddSG8UwDLHjbbEFv9dg4wjuN6V",
  "key22": "2cH8a46r4BbPRX3MLW2sYCvHGBbJVQprPTnSon8nocECHYbXS6a38KXoWfRyH24u6hrcwJtJsXh7MiKPRJFjMjnq",
  "key23": "5Z5eFZNjWLF9oUZyhYvVgT1YpdbGoN8TUvqqfmEni2zgRyjBS7rvpzJNxxkcEdgVcvvf6EwmhnSQmPkNsdKxsNAe",
  "key24": "51CJSh75SHoXSeLZK5F8nD2GwCrjdGAwe388nT87U3s6nT5nFnq5NJMYd7VUnDr2eELqSTwYvjNvNWxhqdnGeBgY",
  "key25": "4iUtTKVE4eRCPLByrJ8ydf6yAzeH6gnfvKVCuX4KoH3PwqHGCMv2y36vUWzPZoaCBd6Ug6FNhu2niVCkknBj6D93",
  "key26": "fMZpZn7Q35N54KFXfhXA8PyEi87DsRj9SRY1cSezEXh3NUAAGmiqanXP3zq7SpxbJzqQAs4y9yxi6DCiXM8MUtm",
  "key27": "58gBQXdqZBrgGBh9pwauosRtZ2XmgwhVkB2VvAEReqLoHimoGZFZNVFZCuTP2hcXXAsZ9TPrk5qBVcpnZhy1cmmB"
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
