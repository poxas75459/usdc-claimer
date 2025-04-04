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
    "3hQufZ2RQ3trVPKBq4sUZ3JKdvBCJGG9pFiPnL5wuWZZsU5hyt92UNJbjUkScJJMuzRysS11XzfaFCqrzbJcmL2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3epNYABqbhjXP2qhUvkES9QKcFcMXF6Lt4CoiZWQnKs5B7FSEnZppaFoT3v3wxFqGQCytcUr363d28UtNHJoJzQz",
  "key1": "54W4hYzha5BwPs4w2UQmLztkhmWfBCsgwDnzvQDk4snhTfzZJCqzAL4iC6fJrT8DDbrr7DXesGAQ7utSV5gD6zwi",
  "key2": "5f9LqX9xNXJUR1RqZTbMNbhp2SndkD2H7VzqzqphmEfhmm9iS8gNSyU8EYVj9GnMmNeNaafSra8fwerF45HJCcxt",
  "key3": "8vKCdRuSThr78gxwB3KNgzLMP6m4KCzSKpeU9zqSHWQUUSwbih28bSD9TuPbCwrU8quDnrVQ7NsXawxMnbzwTwY",
  "key4": "2HzMKGKKrKrheLLyo1s2Z8gg6KyCbhhmAMLUKJP1o7Q2qYbZCo55R1Yr6MseZoMg7xaMWf3JbDStJxGUKEPmXQvG",
  "key5": "5M9TsvgUJjTGiFGDkdu2yUoEJUSqMdkEQeUuo1XyNEdJ8R5RDvLpTqsyH88iWWV7ZPXJnB8PsP1hgDuB7Mdn6YRo",
  "key6": "5g3LKqTgFBkrPnUWCsERtUt9c2ERrQaMooZ4T2oA2abUvMSTWhXph66qD8Cqet6nk4HMFbhSdpCkFq34Uc21LwxW",
  "key7": "4vYKBxykC2RVq2rEfnnaZUQQnKtWjMu13Zq9bzzQfni4ptFkWSiQgokwyB4QXY1rMTB4iRzMhMThWt9LaYQAixvN",
  "key8": "2a5RC55x8Sv8cHJU9fhLYdM4gWgPpSCvDgStMpFrc9hPGdfpt3tLNzdMTGvLWQWh3ydecp1U361XzCG57DFU3FTj",
  "key9": "292XxVQULSeSqKfUhwtbmo5YwKd9E43TfatiiK5z3U1aGpPYrVpLftgRNfBwTJkYdT8t3XPrp7HQn8EXspP9KB74",
  "key10": "5ezM8itza1Dkaxy4duJHb1YnFjFCHKn2AcQRhDkzsRAXAfpD1MMWW9RReVdgvecEMvztweVK3RTLNi6mdKW7bfzi",
  "key11": "2vTRNzS3A3xhYuH5Jw2jkcsTTeegRLRAWvTFsNtPtDdpzmnXYbyJrRvFRA4E4wY2E1TV3uYeeEokEwFuSpY9GknJ",
  "key12": "4hr4CEARnMbDSHPEnvQxwpGVSa53KRUR6NJXxmgkidobHbz3BHa4j7HPjwv3iaQEKUnmZ9LACfZLd4zaA47h7roo",
  "key13": "rHrCteK4jMRVsswm5sbzZZ8suUqZwMbckSxidCfuQbaRdeNxeESP5pmTZZLzqXP7nNABXQJL2DdEPTqFh2MVMtY",
  "key14": "4eaymUn4tZNjScva2n9XMY8msVMt4QfsNnkPtc2ASEMYtjJUNSA18aD4TwCphhySp9ytaB69hRmigSUBRAVxHf5s",
  "key15": "5ieobhnS7boFDQqpvVSs6dxU38LRrEmm7rkFsHCc8pZzKzUNdyuQqe1s3ZVd64tMYaxgEYmP3r7nXaaGXUN3wBYw",
  "key16": "4vWi9kYqQLaE8L1a9SpqaTUbAzJwJaqSKDq1KNG227TJVYrSDRuhD1G3SjTEaRc6V8g4QWnq1z2Srd5fLMR1bRFb",
  "key17": "3HLyg6F5GkuYoMVsvPhhsW1ASrfLAiiA9CqLBSzJtue5UxMhGNTxdKVPjGDqfqkDUvHj4jcf1LWsTjgvdZxwiotz",
  "key18": "4C8Tc7LTVUcBGWzm1bbuCnfxjqvV8h6HP8FHbggWFstCUdEwkk8vu9Shjhf2HwzUwDcPLFH2iWYBLd3DnqBTkA7r",
  "key19": "3z3QDT98irX7AdriW72EehhLAvMavJsMF1z2qVjitxPscATEuQQDFoPAB69mMWz9qLzwn83LxcnZtGjEZqiinbyo",
  "key20": "5q42EAnWcSk14MwKzYDkUBdz1BSPzchiFnMN77qtPKr93odbYLoUd46ZyiRBNMkB66m4qwL2qw4ufihkjLjr9U8r",
  "key21": "2kfdZJdhbDog16B2TXwhK9RhZEBE2KNgVsRRYdeEJ2Bfq7FjPa5BWXY5dxxnK99tko3gwWZWHS5YaYMq7z5CN33o",
  "key22": "3aXWeQau5BUuN259CxZJVU4w86jRYrDcXu7y1LiVDFFiHK8QuPKZp8WU6hro49RTEdEsHhvCwQvcM6vp2asGje96",
  "key23": "3wiomnKGR6eiRb1m5HBwY2Qx3AihSU68yjsPDg2i8tBi2wtWrH6hQPordkH3jsyJVfyodUW7e1FsA6XanuyLtFej",
  "key24": "3TQzLChLZDok6aaC3FJ935UYqbJpRUCsQQQG6DFZDC2f2G4f2u9gDm7b2xYVdvkniebZdswnDYPiQuL1TU3kprvE",
  "key25": "esBvERJQNsRVazGPEEDCxECo8Pp6hZHeARtGG6PLoZe5W8KzFivNDJdf8VcBeX5Ywtmigzzu3Fe8oBhBF6g3T7n",
  "key26": "3Ym5rAyVBb4pef2M1czxZvFqFiMczk66q37yUcj7w7x76tyQMXw8roShH64oVYdnyk8pCuDqh9VxcKGMDE6Zcb6Z",
  "key27": "2dcsfCx9KfpLUyTR5W2fVEGpzmuHR1CMSUNtUdXp33aifjFYUMZqTf88MgLjWKBZfMCZDMdzFUbDKpz24JXDwiY6",
  "key28": "2J7c9ihA3pM3PUhSq76H3z7TkyjwJerQQyKXzb2svMaL5w9ERC19H9uhQWYHB9mjvpUTrtrV6rVSJg9GGe26VKmu",
  "key29": "5p9etwBraQPvi7BPyPx51VveeCStkLLaMgJVoqvPRzrfXMq52AGJpZqWGjcwGNjhTwnbaRAGESPduXY2nZjpZsqo",
  "key30": "5dAX5vTnVQNMxAmRUrHWLbUiwSfWHeHjvNtTP4CYqJnLASLWVh7emdRz5joHi9F6anAtmPbwNDtftwVw4oD43uaq",
  "key31": "4uq1CnwYRZRmCEAVubhTVgXrzL78DeUsaHXFNVyqSQeTD1m4E7JeW22djrfy7kWjZHYuj5jiZDhAZUsBE8ziKbFj",
  "key32": "T37J8JkoUUsAi6CVHAX9LQRqpBabERPUbmf3WgwWkgHSWpi2mnmagiia6MCC2fUXTjBSBM3jeCbkkzkKy5Hbi4r",
  "key33": "3EU6pCxRgSZtKdJrDAZy3MSuQ1v8pdXiGGJN9voTPxYDgCHdEacZhSBu8QC9HHBxpP1araWWyz84cWivBgLiemwf",
  "key34": "yXYhKKYpDsLr9UoZusSnnLqCJQfTfrfjtfgFixgwLoPYqY6WFccY2Nqb2sP6eH2dFNcF6PVAscyoB3hyZLEgc44",
  "key35": "3WgbD1aiEFLi5HVyQKGxMyUF8L4TuvmWqAzXntaSExGkZLmivoFjGWTYwk4cbfef42wxVpgnmYpMGx4waGQ1asH2",
  "key36": "3FqE7WMQXCEJmBj3yGGG629Cs1uh5TNGKty9SP25zgGmY17KQASVnFZ5eL97F6pthANWAArFdbwvC5i8spANHShY",
  "key37": "5RnkEg25P2AXFCpyzHy9BstVkWzQ4kwmoKk5sngkxqgUat7LJmEcHyNAdRWQ9UEYC5tbKVL7N9ZdE3ikTPc1A3cY",
  "key38": "pDbN3h1GfBBoE9ymf8CLfRQGoqFQqYpjHasdUnmNtahrSgLkd6XQVhsMT7FSbXZd2HtfDq5MkrxbjvYfuPJZ9eH",
  "key39": "4ck4B28GNs3K9MR8rayBQQbHNUMUsiNijmSVQGpf68TjXyQZY6PLmFZSz9iNHjqwtWia81UdvoTmJ4nKrd4URWLY",
  "key40": "58c36AZFpRap1yKMnc96VumJSoUBwoJg3uxdxVErds4aNyJvjTFxsur8PfHKCF4gVabDXEJJRnKbswEwpZaXXsdV",
  "key41": "63uMRtMokEaBQNQ2p45zBwpw1hV6oxNqnmh7zScd1rBJ1Jpe9Nw1mitqoKVhBw3xeDtMwKBBrSxvnNJb4Nn7K8u9",
  "key42": "123cET5GTtMChjGXvrKYaueFrbkdNrJ4zU5BnwZSC6MTYTCGxYdzvXFBfaafGZdUgQXbwqt21zn5P7JpimU2KFKx",
  "key43": "5eEz28LztpXBWB1eHSB4syEaWGeLzJdch9UnVj5g2rPVdnUcYZz1ooZ6HaDydTwqnbZYaayfjB6Ueb1b8a3Mv3p7",
  "key44": "4b1BRa2mepbfcyFDgfrRKL1njqRRH8DNmGVZnHDamUENAcpQMWruyeaFYEqry21GKLUYQBtMjGbMCjKPEj9hYcCY",
  "key45": "jp5mqHkACc1oSfYb3Ft4FR9gR1H33PJ9VFp8uAhXY8GEQWHKCGvjPTh9DnEteHGsEKTQESLMpjHLEQDNRuZQWX2",
  "key46": "4d35kQ74iY2UsKmtoHEtHrG5FBXiq8SbcDX5XtKMg1vQPtqBtyka9A3qKmhNCvv5qEb4KgJYyGKa1vmMC9DUk7x8",
  "key47": "2m6ZdgKy7sZMj7dQsk4shiZiJPndozebHvnxtagrgNMirPorvMTEHQgRQNsBNXKnRAS5z1VtqRB89g4r7y5cRhfn",
  "key48": "2ti46sLGas4dMfX2QbMcFHzZ2N7Mr8buV7ueL8ZZh7dvQL6UsWrqLLWJsoqLaErgXo5uFhqii9FoghnoBGU6ZMUj",
  "key49": "JGQAm91WyKP6FsckgcRxsdXXKgZMubS32tbMYKQCNBUqKYwapGBQUzVZyAjhJqdcihYPXspNjp9na6aCPDyx624"
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
