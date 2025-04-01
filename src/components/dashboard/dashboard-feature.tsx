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
    "5C2mmqTKiMQsf5MhMqGWwadLTc5XdpD75G1CQFeAyyuRZ4iiggRL6RFvJUneEgL185RKtxMpRFZxHBa5qdcXVjr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2q9adPjy2kAy6nxRetCgmv6DT4ThSafpzFCdTs217xPGgNqM6ioCirBjiH36BrjDRcSrH8ribPShhG2k2thmxZ",
  "key1": "5Wd5JjkWaHgFGEaSgPiDCxq17oEqkzxqDS3bAp93q1Ju7MZeESwAhWAgUfksHpyWCvVrgrcTC4Wsjv1xMyRwyYwD",
  "key2": "4W7QgR8MvTy2jNkWhGoQhKNwbUD4uo5K5C4uvYyQqMs3v84TiUs9QujtdKBUXbN6b7ZUEo2iFWjQ2KyRGUdWzhx7",
  "key3": "3mvDxSfKUGcbUr7hjXm2dx52rfjpouqQMY2ZWWtY4TqhPMHMojqH1qe1U9a3TzMMSowBoT2jgz1mjEeCc6zfyL2V",
  "key4": "2efWz8HKcQUq36ZQ3AkWP47xqbVmzVL7KEhatDn925VR6MCvh6yvDSZ2DhKo2vQxGP6PAv3t3V3EqYbxs3bJtsqV",
  "key5": "4FbxSn5axn4Cm8NHcmf9AFxpwsNt4aY12PcqDs8L7u57esTTHR55SQWEEzLdZryodq3hthYKVzUcCwdH2FAj3dUb",
  "key6": "4eVfEj6mEQpZ1QSrCWyfbBsekx7epzdNmvM9QHvRiEhYCarEoVuE3y7qYeZ7WLjzjodzbgmduvnoNeqX6KMXPPGy",
  "key7": "3iShwuq12TBs2PL7KdvQsrpgGUz89uLca7BDQtapJbjPHVp8oSnv7pny5L5W2MnvPGJvBgvJKsFYvnxjhfLmJCV2",
  "key8": "3Boi3ResmhFPiZwkkP4FqQoy1bKZFT59J7NDZCQM2BMBa5NjxDCUrrTFC4YWoA5MBT9FLomXYzBpTzPHz2RcvakU",
  "key9": "hTJB9SXsdFPDYqc2ADLCNuvrGeBR11XYJwqeEYJYkbXnbAaw7vYBZyq7rM64AvEHNwNFfpPBrkgbi7PZYeFp3Wi",
  "key10": "5xGq5xHYYJCkZyvDQyWVcfqnfjQApTJTHmana9MKkBGZVArh99ruz2drd74XSjwGJB8iciAvZnbGH72vLorfvq6K",
  "key11": "38oPsoYgYGnQ5thctXM8nz8WkQuQNUhpRGjencCnYjgCFJBfgoXGqe7xCBqagDpnSMLPaeM3UV2fXAb1ZsnzUZkc",
  "key12": "55PUiJu2SNvgHhCihgCFzyW743Pyy36TxWyyYtaExtkG2JsoGXSePVhagXPMjSrFhDTfSaLc59DJF8XgSWwkAXbs",
  "key13": "4D5wGBtoq79T5JoHFa56EQ3RvwaXb76d1Yizw6fMQjY7puTyGL78pmbDNmtGsmkTgnKc52TBz81Nd76LnxcfmuuD",
  "key14": "2b9cyHD4BRvH2BW9uRJE9eSh4EGPHim3czhYH96vweTHkyPW8TTwYBssypLexpYuexjcnpJh3nQofgknzNjWddZg",
  "key15": "4kpQ62n3wNHsP84geCTNdWiGXDaY8Zwqzn6YBN3ZSxcLvHg661yrMQczfx8VFTonHvPeA6rmbiyduRpCPuHDSe6S",
  "key16": "3gYvcrzY8p9Nedy1Smbd6XfPQThe5ejEEPhuX79Dr5GqP9UhRtw7kkTHS9VR9NS4Wp1Qpp5UXCVQFjNUPft3n8Ht",
  "key17": "v8YJNErU2J18SKpjof6J3saic18gtb76TNKZKDJjAN299RtZknMAxw9nMzPvTmdGEuwaiS2uCPApAoq8XUxDeNx",
  "key18": "2g3sRn18662hkRDBeRfdbcrRVcyLT82SRMmAWZLdB9m4DCgJ2yRRUSAbhfbjWardCkzo4a6ayGfTMHWkG9xYUPq6",
  "key19": "5PJLTcWz5zhBn7BhDruC4nwxJJMJQrPqvqeMMmawiFPiMQnVgZzr83UNu59xseQxRcqhTFLBQyRS7joZR95zjYPj",
  "key20": "2oHQ9fsyqCNuoHZ3jKKXySEBNmcxoa2ChMWasXwVRRZ5dTiyyRGJTPa6wL3EYN7xkF2aUZEqgobhLLRFtSUh4UfD",
  "key21": "A1eDgcuZfrsZ8EpZEvHJWmitqs75gx4Aio7E31sQqxousi17MozeSYpnsHyxQN1s2X4UPYDMgwDWtJwuWjCXRmD",
  "key22": "2Tc5cNXjujdr8zT72NRacsw4UCYuvQZ9mtdTbXk3Qe6Mm2FooeGxNqdoq4NBjLzGjJCGKqWHLmVrgf7gKc5zL7aj",
  "key23": "vkoG7xxis3BVaozTErsusQj3wRnbuegZwCakZzdwP6am3GYuiFqzPJNvSoARc9pHUvDYv1nojXvwwodm3vfh4LM",
  "key24": "5ERvXaLR74WgrZGK7aQuBMJE4AYiLaW8qqcx7LeJCSNm2AYb3PyQUJ7ibnkfQp4o1cGXGQNfWBwvJKhAdUNr68Py",
  "key25": "mzBz5zRVFrEedtF4LaN1HuGH9DLV39QXrLavyQJQuUZY3pnHsgLYgf5ZeEcSK8nxxW9WxY5U6WkLo56nRQBjJYz",
  "key26": "T5h55d1Y4rSjMUePCo8to2fXCXSAD1gMjhqxjY3K1P8PHBFYeDgHusP33XqYkw2AdwYmwgX77TZWTTNJtNuXV4R",
  "key27": "54v6juUaXgmEtSwyXL7nM6Hw55UDV86ZPqLczi2nAddfzKWp64PMQ2Q7dTiJby7LLHasikPfryRLgNzxZ4poW4RL",
  "key28": "24oRLZLRitemhJ5QKCqNLLneK5Txir369nbmeN11Enxo2PzX1fQjvTeJdSSv7d4Bx9MjWMKhCAMKUDLrqXm1gxG4",
  "key29": "ccNdcrciMAi3f89u9y5rWGon895pvNhRpSo1kVA6caJTR8V2y34euUfhGeWiHhJ1zuUJMdaeoAA93RgugKZiAjB",
  "key30": "4VJ9X6RbL6tK2kJnXHvQd4R6omrHb6qjB952Qtds5gnjdGCGAjadqxh15XEe7WdDBnErtUxbwA93ymtSNFjNcwrX",
  "key31": "3Scm2JwvTggKnTNbmaSjUHcxp3taQNMGoveGeYTWiBS1wWmRimFbcCZDfRkzyxLyGyBSZZ6UETc1xTCaAKUeedLM"
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
