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
    "2CYi9Rw24Zz2iuUsmSRtUZ2QiuxTeByBgq2TCGU6w6ukCb56cj81spPbVJnV7Sw2WoDW1X9epR1ttmomBJnmpLMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SdvsSQ3zajXsQcfnW44xuf86PuLDTEGD1BaiRuNkkWJg6NuMhdnr5uE8LFBrrcRK9s4HpMSYQsH4aXzL89WQRM5",
  "key1": "4h7k3pqMPe8xZ3YKEAtWAdCttAoRge82xkbFk6g5RSuSSjqXM1M2k4cmHQzqjtp5U2VK8qTY3fcgXiuQuELDqQAv",
  "key2": "5oqAfFfGa4tURZcKfTJC8D7DN9axv9Xwnv3VvUn6WxhZFSRV5dC17gxyRys2secLintSaqn8T2V6cdKxcL5Yo22e",
  "key3": "2jHJrDYeCNTk4f4oJC2FgjfrPEhuQjGjBCjUw6eTq511pB3Y3XrjvQfgyAXamk8btz998e5VmatAUvdKAEsb1bq",
  "key4": "5YsVddRChn26G9B4dy6uQoaKDQaxbzsJ5aYmvK8EnDZhcSvF5WoPZJm2Zaoc4HhXYkwWgGywQBqxzLVw5Pn5y2Bd",
  "key5": "4hjcM9TDMZinNLNTj7QUcFkHzNEQLZbMmC2TKDmRnwMSQqfWAahm9z89FVGWBM4omCxQoGf69WZdEk9jyrE9PqTD",
  "key6": "2mHsgChsTKyyHukftUuJY3txz8gxUHRCsDE2THkAe1cFkRW1NEghWRzQFG8NpbacVKa6gCJuns2AXWcmRfjFASZi",
  "key7": "3xthuEe5sGxvcCzLz3QGwPtoq3x4TdPX7qacdpAdik2CmX9qmY93ccYHt6dFL5pqEACvNE1b6SeQjXcJBSDF5pkJ",
  "key8": "2YZifKYhmzdwoH38Vs4vuEpFmYy6j2jyXxMjCPggkKfb7tAbSfbQgoZEadGqmc3jFWTuJvypBt25NTkyuB3pem5d",
  "key9": "42FbL4HN5eKHicJhYAgsRUhqSJSedkGErG4Bairza3iWCxdLkc4ttBfxWrx7UunwdR27Q4HFbVmnbsc84oav6mse",
  "key10": "Upm5GbS5DnUffM2yz5FEDDr5HykeqquUxp4VFWZXetr5N9pogh1JU6isWKNKRASUK9a9CEmFzMe5hJDraiHzJeH",
  "key11": "4nqeGpT7RP7nRuuN7WPdGG7bSaoKVYCqCze4GnSURZYvSBDRVXro8MaeMTujLzdBV9dhJmxtQHtmYDYB254xhiWd",
  "key12": "2UuNA8sQ9xiuNVrifa7QFJjVqgZyPqkmKTekCL3Cmoj46VF2Q7GJpAse27AkXMECikYKB5MjTdijXWjN2Qi4ub2s",
  "key13": "3XEsqfs8jauXpV199iiu4rFU7o8oLdqYjaWe9VHPb4Yb4fP465mokfbY5o4eoaPpksUhddasKUfkCtBf4P4j9nPC",
  "key14": "4tnVygLWdzx5SapjBjYRbYhQKC6KgcZW6XWseGgnLTB75m56uxLwBu4pcoEw4Gb5aaou3qiBinJGph1J6SbuG4NC",
  "key15": "495yYfUsQjPg3G9pAjcRX6yciBSbhi1KYHHL2gma1ApAKYDopq6GSmfy1Z9wovhFyxGa4Fd6wLtGL5yb5rzkuyGc",
  "key16": "43o5VhdXQtDLz6uSuJe3r5qEMYnzbPbxdyEaJy5JwSvZ6Jh4kTh5u5aSGLPjp3QLF3cZCoanaVHLRw5u8k4WHTGr",
  "key17": "5rbFyS1r7Dmwet4To7Af1MdDLNDL1wZgDEcyNERvp6K9QSAykoaC3RBGEm7cMLikaZdKDQDZcK7c7mU5hCx7FdCc",
  "key18": "41kZTeq4SQdZ5r1biEANRiy9eXG6Uc46RCaFZ6rC63mzDLtbgQPf8AQw33w2eVfkL2dDTMf9ovN8KxRc8qc2zqXj",
  "key19": "uHN3wshBCfLDa8s2rgvEvqwDfjxASbygifhtdyNZXbWPzyczPXU9u7798KcYfjLw7EewFNgTNP39jn6tbf5vVmD",
  "key20": "2XTCJ5tPdQG3SDTmijUkGeiciNuBG7ZUd74s4iqCZNtVwSez19WWxV87ttqDKC8KzPha3KGctVkBGFrGndiCmghK",
  "key21": "28wG1Yh7nGh5ei7GHkGM143NmUFL2DjDREEXnAPeubBNP8T2QfMPZX2DwvxQ6dstjumGLFf3yscy3MAVk8HrEW4G",
  "key22": "3KNDhydFVJK2jGW7DcnkK5VXc7WGdot86F3atx2y1CQPrh8PqjK6o9w7e8WQ8gbtsEUGGk3SqbZ5ydgftGfrqouY",
  "key23": "DXwWnTPs75Z8LQdorkdjGRGYUqS6zak7f7kfVb3GC3hshM72UuWyq9VZajfiMiKdqbvoEv2fctpeeNYzH2aiiaD",
  "key24": "iuVJ3MaFXA6nkGQoCQKeQihTZq1fHFQkwHaCMpoD9AhcGA9xgp2dECUfZYr7CVTbX53oyUH2HBeUZqR9sevV2zJ",
  "key25": "BH8k2kw9PTenAB1yGMTW4dT9UMvWG7LrMXjrV2jjZ8J5TSyPvCzSgbhScyknzKPfTWqnbtC75Z4i2FggZiUwdF5",
  "key26": "5MEA8DYua3mrt61gKoq4qtXy8ytXm6VUwhCs76FKd7JBAktFeqzkMiARHPds7A3HQGfMrK4th75syLt97r6NnbYt",
  "key27": "4ZjfXpSCMQTyzJT62UxrGhyPTFhtsFwkqGhb5DAA5pns3N5HgLcZDuE54oWDu9Ke3uD9N6xtWC4auWgUQT25VvhF",
  "key28": "66npH9WUbfVjQ5U78WJKSxJ447SRrS3n8zSk8k5L5Y3qGRU1um2ZZX5SdEU27mk8DDnAjdjE192Wwg796nBdQWNZ",
  "key29": "VHq4FdenULY8Lo91CVEQxSF1PEMRERVPhGkyxK9EfqMEPqfgBpP4qbzhyyEEVtTEFexTkaoMy8JwctZbpVN4qHp",
  "key30": "r8p6TyMkDN4C6SLUxmqZpiGgYMpDoVfS7piUKmwRVC5sa4C5vgoJgvVrNLWYSoFLY3dw8vbmVX2iFdxugaGVR85"
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
