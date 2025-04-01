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
    "3WCXvibZM1bs5xP4J3spXA5Cn9nrFVsfMZbKSFxq58DdfWYMZSN9nUKGpmLAwkPBQKFKukwhaztSyiEiNKyfHWXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZyrCAmZwBuDTY7D6RUw4ShqqUWg6gHpEwyabPgDYpCdo8LdTsoQUzEmi9gc9djSXEwSZ98DLnerCD2pCEtdaY2D",
  "key1": "4i1CqXrPzPBADTaxYLLK6sagZKihdeE7cTDWrYJCWyCWPNfvkCN9kEziwGbBUsUG93nt7VQZ8FLgBJ56Lv8HGm1D",
  "key2": "2piMvSNrJuXtYcLZeB3VwkcQjnTLPVrLoYXtEtZSrk2AhUYjWbuFb8F7pPE14W3PNfaWeeGLd1J4profgAWoBzHM",
  "key3": "PYoJtHHqeT5xEuDGATY3AH2pDswMF161CifzCCnvbThrYsKH6aUv1D5PNxrLvtgabcg77LVj9t35FoSqzUNjEjE",
  "key4": "xENifAVRJiWE43athcqynLbESH5VS1725evBnq58XFMqT1EaP4HdhqkMyuZpMxRykTzU1815yb5uraL8Wm2aADJ",
  "key5": "5YZnyPP28PcpgzjnyULkQpfmrrGk61wcnwQP5vCUrfDsJAo8GVBD7WUEhoQw3C8TncTaTDYL5jXfSErLaKWpTxy4",
  "key6": "2Vggv6C5Q3sRKUHsLegCaZdvzA969Up69DAEk3njtnoCNx7cGb6YRYf7z3XzBrYCLiEM1g219UvVRuxy2fcvBRDC",
  "key7": "PDpMqcD76tugqGJyrDxSxXM9GuvvBqWYX6ZWGFmXNnYbwDPiHbUDSMvAfGrd1NPCvnJc3MuGDeJ6ra5oMHrg1CB",
  "key8": "uZ4Cm7nPGCi1VL13Cu1kbxpzwBJfJzVwAxqKRoYTKUUkPQYM5AUSprcoxCV3eVTT9VsreviKCBfAA1WcUTkzpdy",
  "key9": "4uLwavnwNJMy5HhdU6CWRbqYhmPjCfQvvhsZ4pJickjWjjgs3km4skgJpJVsJSh5MkM4Ry4jEnoVASTYuGhcsbQN",
  "key10": "2NzdFnxMNfjiWvURY3S9ZyCoAPXFtQ2AuyDBzMo4azevL9Kfzt4qU3dPPUhZGhbL11WbmKmGwrTwYo9rwVMCe42n",
  "key11": "2SvvAe7JuQf9H3jGZjk6HJ4UqUj673eNc4fzCEqkGkbcVBpiE4HgSTohKuqG5CvMF3VMwATUJKkeMnszSPYb5Mxd",
  "key12": "2ZVmTk72sA2tG2CT3zMRaqHUX64GnAZhASZEzaspbuq3UkqWKRAt12zkyVnha8HUZN8axZoZnHQQT3MEdGiT52BC",
  "key13": "3RGNc6AnaYvU4kaPNThsVwLSTTihieaauvJzhaqjUJzgWBQWg1GUS936CrMeoyZ9Xn1VXhnMNtgnXJkocbF9kqXm",
  "key14": "2G7CSESBUk5MXrrbpgmyk23MAEokduXwoSEqD58fz9AABXm4KqrmPmRhyFtjekp5aeNACdvP7D4ZFQWW2dFK7V74",
  "key15": "Jx7EPdhdGtNMM6VzDA941bMv6jntUhQSC6Nyaud6XvXSRpxn6uXX15LJs9iENk6meTcobmjkw7oRU3MNHtrHcbW",
  "key16": "2t2SSG6UeaP3YQVPe5fd7obVJ2x6k15aHRP5RtrTgiLQbPk6s5Z6M8eLhZh2RW1u6jJ1DtKXZLKLyw78RnW7qcQG",
  "key17": "513bxMCCiaVJxAPMu71p3RKymjSfQMDEgPv3t1D1wafFczNbeXhRYDzL26EzFAHtYVvYkPWXMP1XuXpPWXPyKBJb",
  "key18": "5dp9ZD7KMHZKASgstLHzpDw22YYw8bdRwkEKuaySJjZSfNopDvc5WhxoVJeQW48yxEhwkEqHRqrZDrLTpnkDDMz3",
  "key19": "3XCDHVTpsdkMw8tWb2Xyc9MPqw7wEVBZ3AmPXGJCqpk4EBdzquGcCS3USsL99SjXBDnWGa3pSqYRB7wLiVKXgPyd",
  "key20": "5mvDnt16HDe1iL6htBTmwrwZ4SiKHGNuxGS4Kgcvrz5VqFexYAgkch5zoBhGZLZpNiqx87TBL62Hd2XApT3h9jgb",
  "key21": "2Es3WGf2B7n6KzpzxpqwTTAqWGUouLpUnHZz4eMBtuWgrGD9tcAfJVMSG9m8nZSfeGrc3YgEiY2iyrrGTLEZeqDM",
  "key22": "2qrPAU4nPNozDtMLCARYHo5kT6s9qtgew5va8m9eyuk7XEadJeNdpeVP1t7GL2n1W6M8rrrvtddx71YxMzeaW64c",
  "key23": "1WSt8kMYj1HhuTKui1DMxPjmqnFSnL8WdZYJMFEQS654gjoPz2vVUSbmppZK7agJTRW5g5XrvVVy9avspAyRc1w",
  "key24": "4Zc73HZf7gyJktE1xUZeXrzu282uGEfoWedaQUe2vL4Tbd6z6ZooXgigggA7XY4EmyE4PPCDtXbJMQd1GvvTECvY",
  "key25": "551CUDTtgezFac58LF1eyqzcsU7TixChfHaS8RLgE1vHpDpCqi4wMWKF7W3djT6YHkfDmD2PHzWmngDoTbB4zL6y",
  "key26": "4jfUodPGhwcY5EuzkHRxwj6f2J1zXLQvBqDceXAMKw5KPTF7dw6sdXpvow4RSqus5PhsBzwPb4rjNFBSQw8j9Msk",
  "key27": "mF5MaMpzH2GMMJyRAXQrfBXxhVxaf4JKEY1PMbg6i1RVCjGSX7UXB5vkfpfodaMLJCXy8QpQztnQBTCPz4bJQDs",
  "key28": "5RepySogXuEVnTLVoJ1nYgkVNCSmL85TZEdqSeL15ukYaRUrz2CgvRNpnun9PW3s8NhNNQDoYTXVRauwo1NVEonv",
  "key29": "4ofvdWzSnaNmu3kKrfaNxw2stbXL5eioAh5AMVUdBemTQLrP8YFqi73tM34TcURnwkTW7UM1Si2ZBDRRLUV6Q2LG",
  "key30": "2EktLYrPbo6UtX4seBaPtucZZdg5Mxt7B5Dy5KrTyCPv9obCdake61Po7JZrw89Fdud8eKRFVqMQ9Lvw1nokxXz6",
  "key31": "3YjiPckrsHtHWLDRDYMCenmmZtwT4fkLvQjn7piU4Sfghrqwj5ofRRQRHoPZmv46SMV7ChzpvSz61fFwVaZH7Tq1",
  "key32": "4RxgHgrM2hYKg6WcDoSw8CAxwxpprGEzMozirYVqd4Fj73922c4Crgm89GGro2oNsftHGdbih1S9Z2r18oU5kgg7",
  "key33": "5KqARiDhcfvEDgq4SMeUAL8tFAQwsASUMnRrqwfLbMpJqGCrhUpEohqmtYM3SeK2BwV4aHQ84LPVucPA17v1pTNT",
  "key34": "5RwXwuUywDCidtNjueYX738QcDEVqo3qm7U3pS6mDArGZZ6rye2NcMpt1B7agXawTy1KZmDZTADECpyq5vJfzudC",
  "key35": "3yuQ2GEBe3sJXQ6GdEt3i7aiStmvgPn2xvydxHCJSwYQW912jJfs1nHqdzwzRSCRumTDbh8coanCgc99QbzM1Koo",
  "key36": "58A1QBf2d6zsTeLKtK6d4SpcWDzsL8n2vmELKNTqp1VUM7qS415YJQoNy6gEWtku2tUQXw8Zm6wgoiQTQE8VR5DH",
  "key37": "3oHg2FTLgRLgZqkJSGw2FZaePWJT9oFBtuGbJzV2qg9z41XKGeX9SwpZy7VbuHnNmqn2ZYUFakEF31NUgHszSGe8"
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
