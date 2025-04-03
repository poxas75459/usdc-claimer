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
    "4kDxXLCBjaww5RpDaMpe5MtZwXtJMuL9Bi1EvCLMQfjJ5KWzFEiLXZb3eC1rKFs2ehoYwZeE2SXhXNvmn7UnWZDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SggA2AAfZfRUS7xsEN4ZaBcwND4dcf3yZotUvQ5fhnvnBRn43FABFnHeKifTj4p3cBH6BDRYTEL39fpbqUwV9RA",
  "key1": "3rbkpUHMVRYrKLQEmz8aBcfoRqftaZzksAUGMStqvhqoXZbSwPBGfXnkKVbu2P6rgnmH9sEDiHkyzNLSnRVMVGNq",
  "key2": "2mrVugnSCM8mt6uL9sV3FbyQUAv43pY3bRGxY9V61SvF7FXg244s14zqZT9RhMpS7hz9BjUyoXkbjDBmHMiUdUUx",
  "key3": "N8YFsd4b1mykwxUzZkSmDtQLr6ERNfs9xd92q9h1pZWfTP7bwhaywXrsjfHoJmWJB3BeHZe8KCpq7F6d6mPanLu",
  "key4": "4NX1QzYRNAQMWbSokaceBCDBRCbGQcojRH316nqAfgz8RCkmuXkAMjGTCTLjdBUkzTtNJxy9E62R5xXXpbgMGU3x",
  "key5": "4goBCZEdW6fSz5NkVnufZomDs3yfUwPtigVvdhNrB8LiaQum1yso5CXxqzTZDogHuRhiu1fdJ9Rj5aacQxPsJeKF",
  "key6": "AjUwzct3VrRmXKC3pZgndcaZ1bsWQ9NZPVjsyoYSFTMfq6LqEsA3mgc38DGSxMZXCZdhvU4vT2jiGdTsAkZj1CJ",
  "key7": "24KF2GJWeeFGU8D7bHmAknrJRmo5WeFf2G4iwu55uUUyBopqkHPnKZt7vqHrffzHG9NfUQ7JczgcBs2Eu3VjEBVi",
  "key8": "2mFJPHLfjjRTkZCLjLnMAiRW5TxJfuRuhGWWbtAUzAExdr9w5DAURpXxhN9s3NyanBiULMnKRYAEqfKssdM4vKu7",
  "key9": "3sZR6zyrJWbk9ht5Hp4NbAwi2ySTxBZgT7RLpYJwijTRTqGh5myadnXq4pzRaEcgcK3JX2E4HDqs9sQXoL7ZtNsh",
  "key10": "4tPyw3hE2cE5RrP1H3GWxp6LESPN3Fp3tPZxggqBLPsSmN4fFfA8WPjMgCuhxaJXm79dGyogGBmZwmsRbbq9Y471",
  "key11": "YmotD1nYpX3Q1WV5SwDwtRjiCSguAm3fBir1pbEQLeh58RGb9643v7QvFegVSReniYjk1fyA9cE7V5vx9FSGB3z",
  "key12": "5MrkAJXrKVyZq2BfhWkyS6HeevUeuC2xRRJnzUgkRTDss9PVUU6JcHvajjJxuTAcvNqhuBJvsPt9jeReXtmfJK6R",
  "key13": "5TPjqSmz2QjANUY7LMAG9mfhXN2EgVb3vF7q5ZjfF4MSdeGuJY9aFheG7yBJEoEBsxwLcSpmfZ2pqCsyrA9rAsTf",
  "key14": "5Z92dtCMYZ8WCdCNg77sE8nsGY2q4kjFHUHrBaNTemr6fcKYrbL4YqHB8JovwGy9xQSt3q5drhbfo5TxdNg2zP93",
  "key15": "3USEnCRkCs4gcA4wFtQdURGCukG3R2mzv4g6TYCu8sc2QgGw319jBqwmqqpon7A7uuKGqG34Zf9yHLgExrj7Dthz",
  "key16": "3eDKquANX8jGy56sTGZoCm56sWdRU5nmH4GyHRbG8gekUL6eVR89BUhAcwhxxXQG1XVhP6sL8xxmZG4JSAsXMb8N",
  "key17": "4TBUSAwvMPqvtcgN8VUSycHi8ajmjwYh7zSXUsfnXC42p1hsNdcoQYtnGKQkX8unyByxfuKUya56wrMxHMt9qFKS",
  "key18": "wJ983ZzRzt6RYXdiJCcc6NdMwAcXGahyX1YJabQSDKdokFjdJfjforQ76mj7aaFPJJf7eCEe3dxKi8sgAgbshYT",
  "key19": "5b8E1mao4iiVszRo9g3vtVBpWj4EXMeAx6WLbdPNHeNiAYs65xTWpmz9peFUhfbZauveZ6g6kBSjSa5hQBaFV8YN",
  "key20": "ipUQVs1egFji5A3SjVFLihqdgPp56nGGx8pnBfXHYJd6ULRBQa6EERusFFdoL5j7k79RmvF2xDM94RvXdM5XFs4",
  "key21": "2Xd1AXaRkG1cAQeq4PJ6JuLbTDmoxwY2AgLFfnHhnaeAY62geqczGNDJyXHuQuVXtpLEPEqXfbTr4yrLaALcvdB",
  "key22": "5bhbpumEkWEahB5N7bcA8Qy8yUPYnjXSXtiiEt8QyUa3teB2Ad7LLyJUMAq55vhmszozjKYGv4UDy712atQgCAsc",
  "key23": "245TuPbRe3XZxnqdT4s33bwxyyWCpHYs9JjTXxLDTuC6ck1FGyTZ1GF5i77VNtV9csTUxLyHorYWSVYL52DEeNcC",
  "key24": "63FkLmH4ZuYaQ9zDw7D53eWqRWb8T7Q4dbm3RDsosxP5UWWoLJuJCUbkuYexuwW4rdxwb4HSFYvCRzMGhQHVApqt",
  "key25": "3E9oLBPqYDCC2tcmT6T9yu6DQxQXvVnGM7UvAjzcLBkk1k87zbe1iaHGhtvvytGd3QCfYaGQEifTiEWqpufvcaze",
  "key26": "m2Aat9Aj9dF7BF1PU3AGaerUNEZBNVipcmnXoTnvkQ9dJqXpfSxNJVzw5FUnzVCHwmxYrJkzU7pDDjahW3o8Ynk",
  "key27": "3vULcRaW4i54VRZomw3fMeoYJcBqA6UDi5dyHmFQgCyLS6zVSwChHEsbwVmEAP6EJwZNv6WDg5WyRZAHxuC7UYgW",
  "key28": "3BwZtW6jxAbAEQ4GZP2knATV493zBEG2mqSXwJv7tHEqhYkd3pqSeMin4vThBxF9t4PA7SAP9LDcCBa5fi26LZRk",
  "key29": "2X6HEro53g3WYa6a6P1LuFuWx2mvczswhFd3PBS2osQ4nQaZrAhise5Ho5SzZ5GGuzzRVY8GqnXZVb5K8uAFKcaE",
  "key30": "3kjkKFqzVt5rmfCHbPP4z3q4i5d7ysotefJ51uMzA1stc9fqh8v4ehSg5cmLddqcCHFF2HWoNPQD4jFnNeLGm69r",
  "key31": "3AvWxgQsUU1KTRYXhiJePQeHP5va7snXrJ8mpBT4nzNPr6CK9MT1eQuEpXpnrWpJZS6qRjGjbhC3af2BoCmLiyEX",
  "key32": "4XB9FitkbouvMxM4ak1enLvMr7sFtT3DkeTEwwiKPkJHCpXvXrSWE2GWnCpA4NSMrX2QFH3tuGs3h8vKxYfBoXHi",
  "key33": "3TWkqrdD7eLVyoVrU6LULrbZwNoyKmhrcPZYS4LXRAXT983Esjy2iRqTFM9fcfNtM6G9VTTzhD2Wnoytp3DZ4Tgi",
  "key34": "Sd9b8VeTKRTGbmd2o5oTyEnr1Lx6TCvN5oFMaC7nZQw9zXVUf5eiu1XWxgRYnE5jtaw4VnWk1gVgvjA6txH8UHa",
  "key35": "368ZCV6enjUQCUqiYAp5HrurdphLaRpUGCn4j3fXXfZHgcU48vY6Pgjz1qcpV2KF2AfPcQ3LPH7utKsVehNyPPnM",
  "key36": "u766K4ntUEqPEJs1R825NEmXWctzwegaMaCoz6VDsfvDNbgq9MbaEWCc8f5fGzngzGdKn7WbXcEHWiHb2ahBNrx",
  "key37": "4Q8NMtjKpbyARxTRxFJGzZgjnJAURzpDjcMxz2xQiH6FXaJfjLnyhtuDH8kEdS2AgPf5YsdPgyPdfkx7Xy7Zetvz",
  "key38": "3ktqY2cuUuM3K3P7D7J1sMnyqCrkAcSPHAsHRaQj77CFuzT6fows2HBn2ckRETQnRjWXEJbQdA6FipdzZEtAJVNs"
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
