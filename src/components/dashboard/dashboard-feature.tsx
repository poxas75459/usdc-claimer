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
    "qcNoekhKsnxwsXrFwY2mHnCibsaeHri76smjhy3bJv3jmP81nsmhchP4sUKPfXQuWjxvxK9QkuqXUBvtpx1DcUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DUb7bVJtWxfAiuGdxuUTp6rjZN25rghFb81vzGfsqhmuMVTPk9gy9XwBkud8yzieBMZBBgWudVWGTwNK7CARvMx",
  "key1": "3zjgV2ufERaJUPTxUsj9djFQwWxK5AZepksPAMpG9V3ZS8hcbVwKmWbS9KXmWhZGm6Kdo434ZKpnAybU3bpy5VT6",
  "key2": "tT1xpymL8kEoo3TdkbYidEkcGGRjPBSh9MZaamSVkQBaRkyBGkCRKB1BkXt5xH2FLDFE9CsRZECCt4HVaQRg76g",
  "key3": "5ABpyGiCPyG4kgCoy4auJaX4cwxxWcooZ6hh2ppmfJrnKEH7NNnK1Ff8fj1Dt6vSsM1RfChrWHDBaWdqB9qCVgad",
  "key4": "4SgG8uLTStenPj6i9KAqw1mFGDigQhNjfqtMdpubXHZRurhkLAS6U6uAE9KxbQKcxHLa2zET3hjWSFQNkq2hJawe",
  "key5": "5XEjDGuUbr5mymRnuVYnnKqVQrc8wMWHNWVsuUtrrWSrufJzKwaeiDh7WgHwFQXPaCGpmF1CNhJ5XKsosggXJZLM",
  "key6": "2BdmeRhVuBYUzNk5grhjzhxQvLMwAssFrSsy8gXey3Z9qo1Djr1NYDGR35ns3Ba29GtgkrKaAVLPTkAPMXamjcX7",
  "key7": "2wdDZHticEpvbvrfhaeDcGjYc4tt6vtGjWJmzC7tM5k2GLpRAuKzrTvYdBDzkSGAqKDrqEREHgKC5WgFjC5jQ1b4",
  "key8": "5bNhpncxdYuKXRYktKVJB9HFNZ6Wff1cHNTaTXNAG3zbxap9jdZvQtoaeruvqsGB1dqHhP384wrTJ4JyDqig4DMt",
  "key9": "5QnBaTxQZCGz3sZ4wsUVzzdZiZ7RKPdpG4MYPbCqnboLLjDiCq9P3Sd62NnsmxUoVXTmgfJfzSJGodiuHMfq2rUV",
  "key10": "3ZtS7W212CSryBoHR67j4VxQrmvgY2MhCvHtCPQcqiSRiMh55DDHqgxyqWNA16LvMXgcjyU3mUC1w7gteqrtYncA",
  "key11": "38nLb92Mp4gxWYmrJYok1E7Kasz7jS7xumjhjnKoA2vc71LfiGSZXjvsxAKsq1hw3UMgXVwrFvDBzAj6oHEkNCKi",
  "key12": "5u9riLQAVRZxodYLRDptDQ3YAD6NGu7tCLgBejZgK432ds1LN5uVfkVe7miigTFAatK2wKSYu9EZNdwWR1cDdDes",
  "key13": "4TEwVo8HkoJ8VFmuw58xEf87zbszwU9Ctkr1WGKFMEeacZs5KvgcdP54bwb5kZvb8p4wjkd5waGi7RGefcKQ17Sf",
  "key14": "53AiJETxLkRVziNyN8dxbxAhJH1fJcJGnoaSGTGZsSN3gkRdvuis5aZ37gpReVZGvGFVZrqqyP4yfxh5c9gC8wF9",
  "key15": "5XGojorXM6XwSdzo5kpLd5K2uamrawkhvrPRaLRNQCoytFQwK6Ws56EpRABSEfwHT2p4tfJrJ9doFTpYDrZTMoSU",
  "key16": "xzUibt6tyzceK3i82scaQsyGfAosjT2LRaMndjDu2QEdnBzhdXPUFBkmWNpgb8ncy9rt4QuwWs6Cp3Zky46AJCS",
  "key17": "5w34AoBgWN6SY7QvEuLBhkMnXV8NLc5uivQYRKkkFcdiYoTuFnAxYMSgCN2WJZjWR3jLn3JaRTz1u3aigxrBFrqw",
  "key18": "4hMxWa8tNZLm4QUuPmarKUut8P4U94KuCLZtWmByMCuBX3LeRUcDEW7u3kF9Z6gipgXo7DkA6egEFHa1TxA4g6KK",
  "key19": "yjfyu1dRVcadsEWqZPmFH7q2bQaJzA6gs6TUcYWUrCEgqepuN3d6N7kFm91p6eMvwEpzcUimH3p6dS53o76vs92",
  "key20": "3ooyb4YRfuJPN5e15Y7vBbveary6YsrC4kkxEVXeRoopCjzkx2JXdY8uHhRGbngQti6pzkh4Af8i688GJ9x6MDnu",
  "key21": "m9j6bWe8zuq52X3coayGGvt3GC3T5jC8NCmWi4dPjeDZQfbvxW1N48EqCe89UzUNndXY298vVyyHazpt2R6eewc",
  "key22": "44h5RaerbhyqHEwJtSVt9UmDmteRMHhZrgqPnxTRUKKtihNax89MiXCKSSDBBXNyerz1wnJ4iWCES2ak45rHBkDN",
  "key23": "4DtNXY2vsz1dfTNnxsGAc51acB6rmoxuo3D3MY9aKEyFk3jVqrbA9shAiMXYLqkK9QF9i9t97GziENT3zPw3Ak6G",
  "key24": "2HFo2iBtkzPbbDsHZz9hRMyjMeMbZpwt8zYTeztqhe8XaSWgwk6728M9rqLcabeaMKnc7zFEfNjchYo4V82c11WR",
  "key25": "5o5mfhgiK3cVn2KuL6Q8qzonT7XUowNESyrdLFYGbikAJjTFPPSZFb16FhB4AnQRUdTvooKLvw1owPSEB4fxMwLm",
  "key26": "52AdF5RmABBk8JxKpRsQ5UGdMQy3qaBVzGtFYc47WZC4wcQPtesA4jpTksaYBHBN1nPfn1P1ttQNXHzC8Q8tLVoH",
  "key27": "2yiLYt3PU9Zf6UfyvNX7HbVwfWU6cRwKmua9uemwqQ3ZGhKDL7aTLgH5avAdGze2rTNCdGMN78grf3g4xP1RuCUP",
  "key28": "2GNZEWT8gWVqfuuzWwEFq4NiKDCfi9EoaVJCHTa3Fe8YHDFnTxbu5ozMWZ29TArNr8r5e1BukieCG9gF62QDnYPv",
  "key29": "4nj63vyavVqAovumDQwK9iBMRSF8vKhscgfuk8PsFLLni6FP71NFt7FaixD3oywDmCCP2Vq1NMnVYVaprXp7je2n"
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
