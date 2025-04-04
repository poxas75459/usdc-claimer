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
    "4efrKC1XwNgG6ed81CvoQ2CoEvojdfJD5xcGdapRJTRkKAqXUTs3gneXRYgDzwHLgTbmQKE25oeN43i3ULbQ9x4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gkrs76638DU7FDSAVLkzoWcXYckHyuwM7TWQCmdUHuswpuaW943TydD5dLrNeezwiEZhUJf6vQZQnVJBviWNGGK",
  "key1": "4GZUfLHJfog6kbwYQeBAyYbrArMJC9CpnwsqxJT61idJA218kmmpnif1kxQiozU5NJ8L858AEetzwcvsaSCMU8N2",
  "key2": "N7x2ss87Cknz7iYgYfhNCC5yDFaKcv5ZutEQmGcdnu38ryroJRwxxA2GuLz8f8onEtZ1hgtK6jUY7K3ubSu2Jnm",
  "key3": "3yPnknHCY5qc6b8HnfApHjgYEXTWuWu6rDazqdM7SUeuj688mAkpCF7oDMWNWNqVGFY5YNgK8RGzH71yFN5XRtuJ",
  "key4": "61afTjtFiVbmAjD4k4BPfMU3X6jfURDxA944azr7BccKZVJPBJeCnesp1p192YhoucK2rYvfuqtkKyyPUtDCtp7y",
  "key5": "2zhb9MLi2LGrLiD1nysze8vmfeUVFDC2UovLSQuKDy5mUpYS33eS2BbBzpBpj5K7pKW75tDrH4NzcUJ6MRoT3w6a",
  "key6": "4bj2JF48ZmC9y9xj5ixgs46mAnSjTn5vr7b34U5bmXVMr4eTto4VKtMVx52jjJCxUg7DpeoofgyAj6FyT5MBJ4A8",
  "key7": "5xmnSrcAiFiisphbeXzquPWLikFHDJJ7ytEzRiy7GEYswV9DZnwEYTT6HXNfTX64XGQ4SMG5CtbRpe2vA2QJeYqv",
  "key8": "4bc8ttGoeiw9PPXueNbsARNm3mavAvfa3iyARZHdaXENiSveWKn8HxiKieYd8MsoT7RXvv2qig2ymnvhQTWBNPEW",
  "key9": "2NRNBJ9uKUTMQHozMZskbTXGeMU599KDgpjfH8mXjeBprDf9aaJbbPJyU7kxLpo9wmUKLX7K8H3tRTdeKBTDioxq",
  "key10": "FhRjcsDvZibRqckRg6pdu3fYudL1cGGut1X2ataW5NBJNvEu4of2x7iUF3YiD3C9yqQHtFjL51xAwRf2xkCZiXe",
  "key11": "47sG7SKxiptGNogFvhB2RtSxbxPWvAmn4fYibvCyrqa1PU7xqyic52jnrTGitAwpHYZQ1UT5xPRQSG93FF3JUjje",
  "key12": "3boY4FhGcR8LzirsBRSWVzqEFYK1jGW4AwkJ5yPYaVN4HPVLxPiXGVpdyLFiQTWDiH2MsNqoM4wCMp9LGxg5xYJX",
  "key13": "bSUWtSrSu1xwkrG4cYR8SL3V3dQ4jPVvxjVbZDAvKAvz8tthu81cpc7baYJgM12vb2JcYxDTHHaYDhpQM3cAoRH",
  "key14": "5139fKP9kr4vmZsRPPRCcrvg2sZAnFPheEfkNuct5BfV6vNdmPTXUH4RAdZwCJNREcYhr6p2JRGCdGxJaoPj6qqJ",
  "key15": "4PFyDPM4G23RqB1GLeLPfbpkovKGJuoSfdTkahe5gtxorZ7L7n9wsvBn8MYWRSmquKBPEfiDVw7BoFNrPUJsrnKv",
  "key16": "v7j6LYWw3TefT88wxs5yRVtLT761veTfNMBC3HeMhMCGTsh5Yxiyw2yf9DA2L2bHymE3RUfe48hp4MrZWvfNB6t",
  "key17": "4cbMk74MSevHLEJDqiWatzFC71iKtEWVPddMKLMT99jrEzyBFcWehxcgtqpbzaswHvWBNNVcUwrD9YhHBrBPujM1",
  "key18": "2EtEoXt6K6zCCh7CJa7iYxAQhQi9eMPVqP1rLN9hGgEAiSY69NRzTNuAqDQEKiTeBh8fLUkeJq6MK8mXfgLieE5e",
  "key19": "3g8imz9R1z7yYQ55prBSwBJGhzr1uDkwf7fgTvFy4XXZmtxPSm9TtesyGWndZoj9UqgacoN21c51xyTFwNEYNT4u",
  "key20": "3ErsnrzKSpf2tnMNcrwcQE1STya7P8h75hHTwWnwdFDQnnzmKyS4mko5Ck7MB6sh4y8wscBGaoqJk5BHwDpRi4hg",
  "key21": "28mArzCdYCQ6ES5mAeg4okzYUzQ3tuo8cUaUfq5KGZ6249ydwnrA3DGvvn6RbqbsJWNwEnuczKdpYQjFYarPzufM",
  "key22": "5FJgsfyeR3ar55VuDkP9ZqqTkxdjuuCDqdJdARZkU45mhMvk65mdqPLyEBbwxZmPF7mhxrVcnrLR1rPeS73BeTHv",
  "key23": "2hNr4APcPnQs7spQaQVjh4GNhnnX6ii3jrmzmLJEVEuPtzJByb5dUCQDwAf3wfQvvqHEYsE5AzYEhurJexZMKEoT",
  "key24": "5R8SunRf71C3fuwsfAEUqEHt7D31Exhz4jTUvbDSKP5A71aVBiRVEALRdkm1TfonvG31EqkHbY5dLmGc2bqsPusQ",
  "key25": "8G7HAhH29TxwBqZJ6Sn5DxTSoxbc9WFKe427zpg2SHBDUczjRvMpfaoeZqsea9UYQL8VVsYExR9kyNTwNZ7kF7S",
  "key26": "2MjRPrmTcPnDTEftvGKW67xwL5qAuWfrz5Vh2dw879GmXeJZGVcLiGVxmZL7tjw75R6jt1BtzfcqeT97W25m2n4w",
  "key27": "2MiSSd3wiFUHGhyGSZLCLDH8ctacj4uQvyQyGjHCExumkdLUS34ViQ3WTnG1SmcMStDbDQwZSuKRywKL4HM1zAeF",
  "key28": "FAyozadUWAn5jYbbe8WKpVT7FQm9KryH9VUdZvcTebhW4DWMwwUqBYyfgjep5Q2pb5ZKqLw9T2txkxp4A8iZQ1j",
  "key29": "3SX5YYtay1Kjrr6KAUt22izdbWJgNY7azZACNpQ2zqv8WfsMicmDW5cawH3EqhaWA9DwgrXegqyiFqjjQXTjvAdg"
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
