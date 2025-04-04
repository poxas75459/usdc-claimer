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
    "WfBdWbn3uaPx16JdNt6ySWsLcfNA5uAW2CfX7qhrqGovKTcGkMGkHjxYktrob8NrVdhWGzArZNVMFPr8QQ6p6HR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALbHFbS31joZP2TeTkVxiEgsqzE9rY67zevKYjQNKRbimndAUrTcPqWkDKGYmrmkiTi9iLiq4y53BhH7PhnGe2j",
  "key1": "41vQVE446bGFFau4WMSfGHbrCQLrvGbfTkEjgn35RYWuGFTo4JtTMK9hzoZ9nVLF1SgjKt4vMoPd2aPXYNRGmcdN",
  "key2": "4McB4hEJVePgTSFvJnN5XnF9CrWDQyKCxRMEskbNAZeVCRCv6i21d1L2bskVDgsijbb1A2177eC5yVevU9pp2z5Y",
  "key3": "2fLh5qNRMzY174WNL5B8pMKP7jxYE4zg2jKGdkeeoGQ8kzSWKyRF4UPCrczGJtc8m4XNo5WFRop8M8x6AcYALwvL",
  "key4": "pm8Bnwyp2aqz1GddNvoGggALjAwcMKSNevqmetJD4LjV2jUJ3ERqs8epiPoLPzWh55mP4adn5MwwuVCSxc6QFaD",
  "key5": "2rmDQVgz9TjFKBHbNBUmEB3uNs9vvp8VPyQuVmPMueBeTg8XiuwsyRw9ojrC7aPqoxKjXeJq6CzuNjawuzf4DjZh",
  "key6": "2qo7Myq5jyLG6ZNe2eYLm9hfW7diquz362tD76XTUiM4fMyj1SGTJoVnRZpFpaxKwbWSUcKbuQWmXT1KSa1PHaxH",
  "key7": "4wZCy1xs18U8PZvbFdjJRpaKWrU8se7REjk9UePmbt5JPWE4QpEYgWBe3nHGmXLe66DWePvv6W3fyKEhffJbxUeL",
  "key8": "qTRYcvw9udonQTos8KHbgtXuKz5jtBHmuQ91NXwFKExPWT9BFyeedKh2yws4kCfEevU5JVfwuTJ8u5Ah64PqHWS",
  "key9": "25TSxadLYCPg9315SvzfESzU4M3FmdEiKZgCfejaVzDnKY4nRDm2rWj3FrjiKt3aQMWPB3ZMhHHkfBnFz9DpaSaG",
  "key10": "9nXkcnwCvezSbve3WQbacFiSvHUeqt3er58881PvNmPdXUxAsxWaXtzasresJd1yfofLDBWhwDcooLDLBvbciMo",
  "key11": "EyMccKKpuunznK97M321TdFGLZS3vFQUaJmrfhvTydjVZqzGgm94UsqATz2wkkheCabQ7a1GSTiMjp1tg7qEsNj",
  "key12": "4GGWqt436RhHMRCXA1EBf9yLJ8dcGGHL9sVve6ZMQmpSEsSjFU1waD3bMhzGMtkSKQqgBvW6Wf1tKQxnC8JSArcq",
  "key13": "2o4wdrN6WXti9XgpGhab74dKAk7xLQRjUCTsxEMzH1gLStMJ5n4gj2PntjRa14PoUTu1W263mRALEyTy8qZQpaCo",
  "key14": "SHgqWybmkfB9ALAnXHBEbpheUr2d3Y8DYRTQjt7cJVga3iThRfLfUMeKagtusfSqG83epGhidzvL9X38uktuAPG",
  "key15": "2V3jQT6ajAno5AnjELMy1xWetYMwazkQxFKiUZEqxvVJMYG8i5d2e3jHGjCnJjBi7111uzXqWyc4NAcornTd69rJ",
  "key16": "3L2KKpNkXPUwTS97tf3JzUyS9efJBnv5rjeKCQ4VSF4UeD2gX7F1XDjSgb4P7bJ9jXG7WWC7cRGvEmzFRNsN9sma",
  "key17": "3u99F98sWiGPJXvHb565eKYYtU4P4vPmx3jQyCLreUJxcYduc7bmtsULciTBs7qzvGqd9DVK2fLxAWjZFFuatKVX",
  "key18": "gGk5qMhrxmm9dJ9UWJGchyKM646EM2JYx18HBmBt1v5A9seJHrZ5LbrzM9BqAsqQSbvahH777ZxqjF4DRAkVj5A",
  "key19": "4REDkGL8iMsNtVje7YQi8pCeWQTCuzN584cYkKov9uXvN4eKSxPS9LgbKxULzfoH9cccf6o9tYHhxGHZ68u9Qfeb",
  "key20": "2qC7e7M4dGAjLV3ht9m6D2oaAkZi5cocm5uTw9W92qEJdCkoBPkzxdqkYxtTBWoLjn9mewvWAxhrfwLpb7gEMubu",
  "key21": "59ky1JCgkyRS86oqoALPaSjKGT6VENQ5xn256sAc74FQW3nHXQWzgLffgCnaGGLD5KZoJe7b2zTFYgmHB47TDbuw",
  "key22": "nRPLnQvPYfkiLXFVAMUG6KZ1Z8CoQafmEFYx5R1K3UYQyf7ZVRKvGPZSbaVkZ8MJkHgTobEYFtiK6ob8FEAjv1m",
  "key23": "4r9KMCN1ihgqJ2eBHG8vnB46K5UeCuhmscZ9HpxKRg3CFZv6hrGMjvJKgwW3NqV41fWgyKFogbfuvJd9f8R5fvvM",
  "key24": "4ZBQ6UTNexV7K6xGrXpNV5pXyUiMRjQUU3t1JqknPFxvswa3tK71JGrzcy5Tm2eSZK4L9ArpzAH7GFtNNH6SrE8n",
  "key25": "iWr5jB4SepSer6GkA9DVmT9xDT38iYU73KHebsxzY2GMPWMsbKjg57nNBw1gf8EEZMhRsfADJGAXACJnKeZH5WA",
  "key26": "3XWbpB7oioFvzzGcCd83cyMuGNfMBK8LpeA91Sry8WhC1bkoH6a1jAQqkB8Gg1CwguPAPypu4DhUrkAo5RC42FY2",
  "key27": "3Fd8LBU3h5cTbbW8YccuW2ZffsMEeB3xi7wso4vph4s9wQLw2WGKQEEGYf5CfJGzSHsk4SwErZf5Bs1kFtHT9X3E",
  "key28": "4gAuXLJLg2WMnAAPuAmrHLWFA6emv6sF9yv2duS1DctKZoGLVEquM5n8b2TV2eEZ5BJeZyoqpgTkoqmfJ1dtE5ZK",
  "key29": "5qfv7rXWMUdopoV7Tt4nxZ6bKsKm95gjm9EEFmbpJXkV5Z8VoQoGrxvd8XLc5d29bjsVX2NQxySXfBQG12CFcVJJ",
  "key30": "5KzemTHVrK9h8F1qKjd4Mv4MFS44VNpBEcqYjHZ4VAkp5nxyuJkurTTmtXJB6qGuCX159wBGzN7fUmnVKEioBVBy",
  "key31": "3LWAW1KfW9RWp1TpPSbDVm8UDyefqbgtJq8vo5yPF7xaxuKupiM3MNyQRdB8BCyvBZQwcmGfoiNXeMTzCYRdoRUg",
  "key32": "hXPpA7FdRkK6k3bs4Yy6qDTrpGncYD7UoV8vC6UvktJP4m3D9fqqnGHNUrbA6gyhip3gr9ZyhkSch5mLfo6ErL1",
  "key33": "3uqSafGuhs3SdzMkxbXtN5wFqvNjGU5PKiLUrgY1mdHc2a9oJjos1SuLFLh3CxqyubqDU4DqS9Nj7g7KfUcrxZAf",
  "key34": "5MZxREBLqf3w2MMee2rKwrUsdsrtPpVWQ9mrhA8PzWiPUhjEVwM89EdmZ17CH6i9yU7ZfTHJighBGRPDZDytqM1H",
  "key35": "4R6ezU2NTZfTvYcfR5jFCBmFEnqGG5MNgkeYMcSTybnqCG8hnois2wjSL3yP6KmZ697Rd4Z6qrg27CYvgUVZTn4T",
  "key36": "3m6vh6BSMwVhWDAfBDv7TvS33K43fxwjbDx5fAukEqPtvMWRDSFcKo7a3vQnQjRdTXDcaLa3EhEHHWiQavbADj25",
  "key37": "5VaF6HRGLnTTfty25pJ3bDzJvAXWm7DUSefsSupABRVSuZo4eA81NZw9e47XeBbXaCXD2JuK9DHV9RqBKshrpmio",
  "key38": "2GrHo3dtfTYQxXNWkxKuN95Tb9eRAkVgsRwiggRzBTbrJsnkqEZr3Hyqj23D1UpKtWvboxhdFLzi1v6tY1gCidGY",
  "key39": "2fy1rNKQACoH3YFAEGfnYtrNmYo8BpwduzdyVW67djNjMo6DGa1bC3Dq9H5XjamoG6qreiXahQ9wGUMRX4ZprQpN",
  "key40": "C5H2hkfwccWkNL7J7GUXtxBji8qi32dUDVkCLvRsBysDyZ54TkXXjBSW6fjHakyqMwpPawRCx85BjQopGU8AFEU",
  "key41": "KtaKmyap3hWT91NWkDYpetcsAnPbW7Gw5zDY1iGthgUdRUfKCTV2LmkucJoGdhUPMqT25ogeuyCXZRQKCzKGEKN",
  "key42": "5uFzfFUMxnvDkdaFnAUqS51btLvWe7U23CZZ1uwUv5VcFDkfwYFdQkb85o7R57111TNB6QX3Uy2MPRaf9ftNcGTv"
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
