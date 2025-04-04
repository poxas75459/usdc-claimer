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
    "5C46iqR1P6CPk29HG9YBgpYhu7MsJZhkywLdwygbPp6DRAuhSTcBUMcDiJBLVYimyLEUcf2t8ShAtaT41avr26cC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64DUgBWm9y7Kx7TtFkqCGkgGdGk22qmv4uXMwAFELa6tgFHqo5UWdwz5k7m2i1jZs5AQyirJpKLKiJyY9d1shsuM",
  "key1": "4M9ypYdGiAAMhnrSzrTN8DWxwYZvBNRevb6yWT48x3oYfeJHBrPRWeYUFUds8EBfz6DFFyFiAZAYh1a8Gzd5MUUD",
  "key2": "52DtmYJKbuFL8o8b7wksrgy5p8p1f1Vk5S2jPcJ9t8h3jJcp2F5VsVvnmJjeWcn3BR2bd6Q8pmQQYPbRPi7HbeYo",
  "key3": "2q8iEkfEyVwunWsWhGmEzACiiF8y9SpPS1pVwwRWWLHNCKaVSBkRLQ1T5RVCEA9QAJxtaM57MCaH1ibF3jsFZ2Zk",
  "key4": "4wtkRgz5uN6qhTFvZLGUd5s2phFkHAWFHFsJXWZiiqG9xDD1dQytVPzqZf1HMqruHFptpLsp75uoGthAjwms4ndq",
  "key5": "2gbfzomQDmX5S7fcDWtzdMCnDZGk9mkSoqPFonn23tVseqPAFyYkNKWzEX46g4mVU1b6AQmYUkoZi1MVzq5zTbD6",
  "key6": "69abqQmPACp3tQNCGJ6QpuQJFcrB1wt8Z3QH2Gcumsrqz6JfLcKGiMjus9tPYHLBt3sxPE9pBC1aPfN51knH8KC",
  "key7": "5P3jZgNXh2ZdNbqqMS7XbyZtzDgJTZkNdihmeg71apDjms6sWpXkWY3Zmn9NSmUMaHnQessZCY7WqwewRhmGyKXc",
  "key8": "4GpUyxTTV3EbFVcgJwvKabASkhZd6AR2grZrG1ZYGQV7gkvyNjqHwuqokkvd1N6q11Uc2Mv8dRqPaonmHZMW7K4s",
  "key9": "23Gi3d3JLZBdLZG1RU9qJeevrTSpnJA4MPuoEBKivjuSF6uVLMz9cAy6xEvKhV4K8zfshJXEY631F8pnpfGM1u6E",
  "key10": "46R1FW5LzAG1R1BWTuFKisvWovqQpj2y1BwkRK1CrRAT3kFSAw6Zy3ponpoA2H8PBFxJFoWbx1yxKGRRo6no7BCN",
  "key11": "BXdGbqe8V33V1X3XFTiGDDLoPwFMPTUTEtW5EdAoDi8yYPDiu21Aj3kA3jQHPkun8vYNZ6mTtncQGNRrfSecxwA",
  "key12": "4w7sjMRpKqvNYfPTLSyoEcathmb1pr6ZrtqYx827LfKQbXvnwFmC8S4BE5JGeBTRCxERJCatw5XaRMZJcvy9JvV8",
  "key13": "u5oqWj2qvCyHm7Uxy2yTweo47u9UGSjuUKLe2StV6b8Ve2R1rRAnYGPoWFK7EXQCSK2ECFMZcQZvW7SacL1ARDA",
  "key14": "4c7dfUcXJaznpgbiepnxYWNtqDKG3aFihCzey83M2oWPJgzucFJRmLYhFeQmndXfV267TFqg6sLKN3waJNDE44uj",
  "key15": "2ZX8NUp61K3DRAusxcJTKQQdBDQZ7J6a6G3vGWfLPdcQmQn4yvEcZ3fKkMnmUyRRyUAtDkjSFSPEQpnqtY2VHs1D",
  "key16": "3tbZM5cnaNADMV1SsV7LZjVXDfYAFtDV1XWSMC8HSwV2Yv7xajpU47bknqZksVxvDu3otHMGGVPTa92mxxjAYyQk",
  "key17": "4AHDEXiMSNZz2Wq8eDXyQ4qapVoKbfZSEvQ76eaSPU4syRftsz5YESZ88TRbiSe8xpcFeoef5KbBrg9ie8ubYWoe",
  "key18": "GFVaPVs8oxVXXzNqXVQ5WMiSqfMXYJsYdQRxP5AsE3e8ijdu7Wg9QpasoJWLsE2Pa1AWhh7wDq8FZDRk5JmQTZa",
  "key19": "4mF7qD86feUY5WDrZCR86azgW1L7zyMAQV7pmh4BdumLTogeDVHJKPTudhUVDyiVAVXh2GxnwsbEhd2ytDyNtD28",
  "key20": "3BuHkPZANZfKTAqCwzPq2m56TzTpE8bQuetsTU2fiQs7QkNt447DJGckw1GDhtqmGaM5F7Zkwge5cS6XSrchDZUk",
  "key21": "5JdqVKSvcNrJ6s9we2ywaeMpMyDcVSfDyam1RC7hg16ncWsVqpwrdQZVqnFWd46sV4KmYKd2WaN1sJnWKPjECYJJ",
  "key22": "54sYCSUqdyLDYTi6TXVERbwdpRvNNbcPHCiEitHjWrrzi6qSWpVgLjXDiHHFxvLwGA2f78qXc68HfXm5hxyd9cp1",
  "key23": "5D4AYhrdoorr9Gxx27iKfF4Ay72nVapWdaU6p7Cejq5Sk9M7H4QyXkMfiJuWjRFun9mj3rLQwyvgtGKRj7zt22CW",
  "key24": "5W66JWHixXWi8MG76vYeG8eJdkKXEVxhXJANqUoi2EjM5ajjehXkUcTCmBN7tZ3pkZC1nHXhpte21qBUHuxJXLKa",
  "key25": "4VwQTAKMv8xaoqc2Bn7EWgBy8KZsmmNEDUcQmgwnYdsCKELnXSboxze2wAEzgt38MrqbRvkfK98jt2RXAxB2r5B",
  "key26": "5frHw8pRPVZM2UX43JdyCtHoYEpMW8ACJyMsLc1ej7PpD5X7A8HmZuwibucY5MiuAvCxdtWcdVbjrLvkDWwdcu65",
  "key27": "3e4X7HyD8Q7a81mz1gHbsVC7HWbR3z6a4pSYQZy8XETSGVFH7CAB3FQetrZrLtBx4FhaJccTrMR6bfj3jyYTB99m",
  "key28": "4ophKrM2nfmiFovyAhshD7tyHLqyhaYrUD2Yr24Jzyvkbj5KGFe3hBf3UBZfmtMuhZ6kk3b6uP8kSy3TNU2WYMHs",
  "key29": "5h9g6NUGZ14dpqkxWokrYjGAB7iKjjEQnxRiLUnTX9JWpUAMKZczXU9x7m8PSe34VMWnvDqtdtLwJNsL9N6MAhXJ",
  "key30": "5FLjh8kvfczXEKkgwT9Gw7t4vvQHLaoZVomYnhzkEgV8rToUvschkKhc5ex5gkhZ3D6k6SZknKzZMeHkyRsqAtZV",
  "key31": "3Lx7gknHR3ybjduPiscGc9kUs7mrcxrjJKEKVzQYViY8VrJWyneHyvJqRZp926pqiu1uD2TxsUYassmsjdjkVrDD",
  "key32": "46eeragV3c7q3WDHoFRUhgUpsiJb2nvt7P7BsQPw9FCQuShALNCHUobuFQRJbkuHvgB7xQByWJAoQ4KW6j4GSumy",
  "key33": "StphtfhfGCnN4dgzW8DPamzA7syYNr2izR6vMpZRkexUMqZoHXb632h2RwuyU9htsScQXt7c8S5eSs7BTEeWf1j",
  "key34": "58FGCJ9KCJDSYqguchoUgKeQBisRvLnE7FVpdvTKYR55XM3K6xxko8hk7qLfokbqyNd2ozcr3FgnvFLzsKGBTWqj",
  "key35": "62zikykpWGCKE89bT1jg7rABfPJupLWWSt3N4X4wJJZQ3q1XkiKUm4eavr76DEoNbu97wHZeiL6vvqYhTXWrYGEz",
  "key36": "5xUfSZqZGZbQZsPjaa5VJ25E8CvZgY5c3w5gNT3LpNQom1N8qV3mtq4ErUej7LVrBkWmpZ1uEekQEL5gjSctsiAh",
  "key37": "2ZnVtY4AY4RkuYTYzPpNCQSyeJvJEp56b8SFDYbwtzRqTCx7ajacfzKGqdTyjjYbkKhLAYvhMRU6EpXtpGHVtCAf",
  "key38": "5edFA5mt6VZndBZUtVCnu8KKbANqkUhwAhyFcJsyk4CWw4po6WK7q2HBFtyy7TZbwiLhDbcN3FW9zGjTroaNrcnu",
  "key39": "2p5PFqQpwa94A3iNrnEiajFnujwbQ6AmsHfTdfGh82p9T6LXfRSbSva8iacQ4istee2Uv5MGog26zXxfmyqG4G1k"
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
