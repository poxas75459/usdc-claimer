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
    "45R8P4nWmdfhTCQKuN4MkN6K7mtukE8BjE7b1xj6aWvcRHDr9uHnEbn83ex2WRKKnjPAkomi9tsdsLqFJCKB2t9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ebDJ48p9HrnHkCk8j9A3vRhA4HFWkNzGAncY9E8Lq2BCqSV99Wm1XXeCeo3QA3mF7irw5vcFxtWhDWmkg33qdk",
  "key1": "2F7NfaMPuV8WS7xFWfoJppJF5PoRa1V5n3wkXuEPgRmMofphM6kYzVdJjUm7ksnxW4o5vxWuzscZeQb9pTxBEkqY",
  "key2": "36LS1s42F9gjBhPMQ1UZfs6EQ7YZxXN99vVWBapqbMbDasTn5EhNavLZoaCfkSX6PshHTnZJ6u7VEXamadkzcWga",
  "key3": "5gich5xq1cCduvVeqkXv6NbXLkzfoRUaVnc9Fx3zXn1dJUDWbGm53GuxmXAnqPaffTj5pbLzSjDsAJc82YLK5hQ3",
  "key4": "2p6ZMyFP8AjknGXXbQeq1gJG9XYfsKUfvAauh99uEn6juPXLfZBVSMXM4sxSK9hy28idynd9ZooYCy9mtdASCgPb",
  "key5": "5RrmAva4wYnoxBrZaK2aaQBRUWxQ3KnqyHe81VFYHcE1nVsYQUuDZRekVPFPU89sHYhFZ4Rst77kEZJ7USVgRfXk",
  "key6": "45eHLQSpYKvE7NZif4hyjHeRMuSbuAEMgASboTvf7m9ZxPL8aGeqyKtyQ7KhbXucXnnPLs4c2dJbkw7TKyQhAUKu",
  "key7": "4Jop7sBRZs8ctbjfQseEWRo7D9TQ2tqggn788pDbbPyhzYWG5vKKMkmGiFag3zFbkjecPxW3NpoDJShj7DmLBGyN",
  "key8": "4GbmemvQ3HEuov6SGQGMJdx5ARrGzhzsoRxE6EMKQwXHpN9zwutQE5HWEohwVBVC279HxamsmFJogZmeDHBTdDbM",
  "key9": "4hessjdrPghjGvenZQc5M3efr5m5o4C4iPWFdm1jBs9ecu9XpQK1Z94zGKpvPeEbzckzZ9sPjiXE7z3Jb7RVXsFR",
  "key10": "TG8TToK3iHTWyZuw26YDAyY4CqTZqXNit3kntPP8p23KfZNBUw6kbaFydqz4PAwV6cHNef5nTdLH6SPqoTSFxR8",
  "key11": "2AccmkgMZxs9QEtewziXceYUfeP76dm8QUSrC3VZsyH9h3uweHmWTQUCh9GtLoyLZbPm4yemfZpG7takswj3EWaN",
  "key12": "3Mo3rYfFXv6HZXUJuAg7E6Qf1X5pLXn3k5dnf62UL5S1RR6J9L39E8bMD7VNzwTdWSkw8XMhZXurTo5cGVs7Lzfp",
  "key13": "5pRXqfaNU1mZZRbaJCFYUQ8XnMdHxxzX1Bfjnmz5SNiwehkST1k6LUhG7Ea9zhcH9zQkSzAQ9N9niUNqses3aNaM",
  "key14": "2deAQwKfgH7EGMALYvso649GHk9QjZiTafBaqtwkUWqhj7v1dDMbM1jBqsboN1WPv3JZDukeBwY4GsSbj69QXGzW",
  "key15": "wzKakDrvo9rgnsrftwpNB5QnKnP7ynwnVkDmGWFRLzPB6c663wZAZFgsE2YmqSopkWfJqtGegvSEtpYGqKMgQ6g",
  "key16": "74egzE2jLRGTf7cSd84n1KxxcBVbtwfUtdwWF5hBic6fcN8XYp6xuu7gcL5HiQLS5oeksWnwAF7A5Da18CLwtSB",
  "key17": "v8fXvndRynEbNw9pEec4T5898jM3f6yrkhCb7tphBiAbEsLs3ZMhEz34ce63NwtRqGrS8ASCeri8UK37t5oyQtf",
  "key18": "43oct81MAqRUQEf61b5FgWvfg4bPCPDLYmubcEQMUbX5Z1ew4uCAyrmmKXGRMVL54AEDdksSMSnjc4YuFZnWxMS4",
  "key19": "3HPqgWR3wfqryYvukdXh491QziWah4bapvbWBK6NZsahjYzWBHpQbL8V3ZGa82t3BJGYbSVB6V5YN6kPGTPxo4XY",
  "key20": "zQVVx3o9T3NV9fECbuBKCjNMeGBsBWwZhsTPSfjsLBXJwAwTArPhPKeu76DyLAaHyby3PyM7xDs2apsmtg47tfF",
  "key21": "4agtjKcVinNa13gLCQ7fMK24HmjmSwmZVnuzTTrbpdyDFUEJVpjsbxt5yq2hsCMB5eRpftFbuxKRBNHqArJyDNHk",
  "key22": "5vS5yH4rQoBU6MqGGdUWQNgJsfSWxHfDFDcN92m6DX1EeoQVvwcjTgxctTAAe3g2VoFWsChzx8VksskgFxg5RL81",
  "key23": "5nsUmz9KfMjHqaBERiLmFfH8xNsZXccVMVLkuxeSRW2xaipCeH3jY3GN2Pmo2WQKTpeqRvzwKJBvSqKVnZcU8xBc",
  "key24": "u4vP7chMKWsZ9t45k5zntXkPNeZGEzB1Msg42a5n2nbdurGQrQ1HP4S7bZvyQuzYnpPo7UvTz5dnmhcNM4sz6w5",
  "key25": "5MC8TK22hh6nc8ght8F7Gc5GkKjvw9X3n7CidYGHJ2f55oB1hsagfEHJiLWgBUKzvCoXZ9eQftWDCzDx78JkwtDj",
  "key26": "3P4TZmrTxiweWSaG5N2FwcoyYAVaNhh8dYtj6TQkcurRf5a6YU2dkNjjtKSbo5dG3u4rBv8AaW46tbmEHv9qMqzt",
  "key27": "3B2YvCESo3UrjPVBARD7X1DhuVBbgn4DN1i2256QaKfPegWhiF1MgRT5CmWakCve2CYFhuh8jej8vUbbZ9WoUnwq",
  "key28": "4k3E7kWsjJ79P86vXFt5A1SySJXdBye68qGFuwP8Y3eRhJScpAEqeunXm1WH7viJ8gtEHipoKaevuAKKLKSPUDFd",
  "key29": "3XkPa5qzQoEzogGy3sNysKqCSYZUdoBnAevBwmfmeQTYbj6U2AwwFUsRA7wDSgZ9RSPqt6scLSE2uevoTf2bBKsr",
  "key30": "3YpbT93TW6R3hD6Bt8q2au6xv2tm4r8G8DiCd6anprZ6uAnGqLfJmizoCUb6uA8gYfSLdmhZSNmKVBevLq3dco2Z",
  "key31": "2CpGJSiBRVmr5S93nUxHYZuXP2kHNjD4SFwymVYhos8q4z6PswJ2mZNAcNkucTzGC6tzonymuQ4G2jSHDZx54fGk",
  "key32": "5UrgpW8T9PqgWH5nXBZRbfPA1cxkzaTo32iymaRZkjbepKHUMiZjKf3atUdEzvN9GkhbR6W3kpZ6cvcFGqU7zBK2",
  "key33": "4dwSP9csWtWRLPGTuRfQ69TkTvS8rVgRXHAoQbfCobrAXGxtaMxj5M63vA8cpjS42G4NJ2cdezyZhv3vEBcLNAnv",
  "key34": "5eii8eFLTkRCQBXt6KeLMAH8sh3EoPc4RsVuTWxnbnRz52q2TN5qi2iSAsPWMTRgBNzFqG7PQAMdNkePL3L2qYXu",
  "key35": "5ro7hU9AuE2rdJ9mGHW4mUYxxoRorT2W8aqeF1dRAZ7Mz5QiH5eAmX7EXmgAzLYryhgRZqvAr2SqBykqzS2HK1wJ",
  "key36": "3DQyvKxnvxEUqCoucCwaNEHMSqFvVJsKN4Tzsxd16PkuKE4rwQfZsWWRb4DmgbXbASQKgCcarDUrEeJR5FAVuD5V",
  "key37": "2wPr7VjfHAaALafaApQLSWG353v97Ufo2sZ9VdRByxCfn4svMYgoJsjyKPi4cUh2ivzAnVkitNwq85S2NSdrt4Z5",
  "key38": "2HQmHFNEejFf6epTdhpEr8omhf7j46r44DTi4wdsE8gk3j2PaCbvh97s7Mz51g2vM9nGRNCd3AVzqYkCUVNCXnMp",
  "key39": "5YqfFfVKUSYqJ54eJ7XNJLMEJvLzA3wKFc9irgdcXQ7dztPtY5aUmdTAttgDMX5wNtsDkXaZLPGC5APnoUqC8uG",
  "key40": "5C8z8rU6ddkX4czVyBzCfFMmceih8f9QkoUvuvVCpR3rxFbehjCxkyJRzcvKy5g7oh6qzz7bEcai7CRobsc17yEa",
  "key41": "siqpo5Hf5FNexvkzGBsFRTQ7zBx3SbNiRrvNxNWoNtK84B94HsQCmqh2HvfEBq3LzDCj8v8UsrX4bmP95FWgseY",
  "key42": "4LdLABPTJXitU3Dg4xdtQGxN2hGdos5pJYVJKnhpnECe8cdEkqGK6LDRAFRfsN5wT7k1KWxdq2skQRRJdKje98cf",
  "key43": "3ysp3aYsKmHshh3uhZoSdzM1fCqW89aPidD9Si3dQLZPfFQVTPnv4SkGRq3wVdBTLDGmEvU8mD1N6dbdvzXbihjc",
  "key44": "311Rs6eU75oZVzukZGu8722EdfM8qWnmjX6inMSDXyyPxz9xmrQ1XFPekGB7Ce2PTU1TEmZ4Fda2WcotFQvDSPNT",
  "key45": "ZcarmD8hCiNphYaZAz8AYvUyJBuk8rgHXht874gFwgqKuqR3AR5P6ujSZoxXBx1teWoNqyVj9FWnHzP59kKx8q2",
  "key46": "2DL2aPqd5ypQ5wBYQfVGLUx9Mq8DC5CVKpQaiQxMNict6CckS9TjYx9EDB9Y3wnignZkE1q3uqPfm4PtntVUX2ho"
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
