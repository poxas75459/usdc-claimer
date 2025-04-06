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
    "4f4CQfCaaCDLjaq9GM4UENSTpgJw9bzP1qwHeoEjjM6J5tBKxV5BziHT7xchyMQj2YEaWq5pvkyYLUAS3x3irkEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FknicsDDhKyqDKGPChHCizBJm4zp4zNv4JSkFpeu1n5KQFpRB6rccdTBWErpgt7e7TVPYuwY9Ld6994kir1tcAB",
  "key1": "2pUu8YJgNeGTKxkFt1P9Q9CErCaTKpHriqyNXpA3VTr6Ft8gWx99BhNWj53p75TZRDxCdarLTUyu7aWPCgEmAvtU",
  "key2": "5wXux3RYMvFmU6yoVAhhYEqW4nV6qkaCEvvhPZuTfZN48cPvv7TRSCUH9LSsjiXLAPddLXoQTBcoP1s1D4CpfBPY",
  "key3": "33fnBCirXx2DMCHqr4qtTJodFCUEvyKu8Rraaz7nMpAkTF3NgHN2H3WXp12qhHdDdhNAcvbHX1MYLDfXSu3GRKDQ",
  "key4": "2tDfTcJsaYKR7aoFxvXbjAXHsnDxzBEPyU9oYfgdEWUg8kPkmzMBrkJEF8bvVW9HpCtu6gGr179CFUVc2E6Y5b43",
  "key5": "2XMDKW1BbpdppmBgc1q4egvGzbAHxTCDXiLZHDKKMvnCfgNcwJGN2a7BHCoV4eoJouBSkKGseuxMhJN4kGPWsxad",
  "key6": "kh81PvbRycbZ7RfagGF4SnMtVqgXWxotjdgG8mEPHnyqos5pLcmDzgBu5SetCFTZUEucR4eBDTHgrYqUTHmWcyC",
  "key7": "61RFTGt2dFibWNCFbJrLZw7YHFBLwGygo3QgY4WVSUV2jwwereekoj4bQaacUky9cJZD98DYyyTSq4RGmptpDZnB",
  "key8": "2wGn5toNj9aRqxr2ZJtBjPnLVrb2cex6LMTE4h6gYm2MHoQHfdw5p55hLoM58ZQ8EvKTWdAy5ha1uHg47pwJJqxy",
  "key9": "2gvgSy5h87ft2RmPLAQDGLjPKVQnTexy8G3dFosyeNAuUiDHRH84xdwCR3otmcko7ywQ39N8oHdBogckcJZJjaNs",
  "key10": "2gJNQpWpAWmYm6TsQ6mv4gSVPLsPX9RxFmG7zkvsktPs1BReSFDFmhX1UuzXfPiUnXQPxfY9k1UHD4fpceXFWME9",
  "key11": "4a3kTwresSuH9EHRfxZvpZv921SQBJN9SRpDA68XSHuvTyZSY2ceqWFTGz5ZZMQwLim8BKruZNBKdEGamMtJ4JUh",
  "key12": "iG3aEPazK9dux8N62yKmxruDBeAJP1g74cZRdm1B588qfh9DhXsb7mSytngZd8gP743DWD8AEkV311jTsxZL2Nc",
  "key13": "61uTRsxw7BuS5KJjNXrakbczp41Tz94sjBVqp36Hk5JFs3VceBZJJSoPFva4uN4W98T8NU2Jg74PoUkRM9sPXiEn",
  "key14": "mu825xuEvSJTn76g88dUnea2691K45M3z694H3drKyCN86sMXqhTNkco1UzaDDt2NitUqbcCc74wMJnnXwJLHJZ",
  "key15": "FCEzWSrpQe4HWGYhqNwN8J5ReBnwb85CZnST7bhhiCfaEFiuoLgxVjADYLyx5ExiHV5ddcMTFQf4G2hPjatbhKb",
  "key16": "599eLNvA6GxgXvMh5HRTC51HMiignouzwgmcDCQeDkTZHFwCPz34isze8sDn5XNtBFrhKRuz4GNNVGtND2Xqv29Y",
  "key17": "5DAr9TovgpuQZQJhjC8Hx6E4wUa2PWVxXSUf3rRY4yM9NU5FxZ2JQZsMsox7EhZVP2g183zHCYgyHhawG5Fecux8",
  "key18": "KMoo5HBubgCzi5t986Hmphb7KvRxWfF6dom9Bx3k5HEVzXg2wUdoymQ49UzumCNtF1KBtqaNCHbvfc64yzqjnss",
  "key19": "5NguQwfSb5Avh8XHPtzjtdMrgCSGU2wL9NuJwrT5LKDkZmqGamxwUntbLtqBguzRZiez8yMnidbmwyRz14gbPiNM",
  "key20": "4gKLWs7wqd8wniTCEWEy12AfMrPX8nkfAbvDMHnvSuaDoSnNr4MJRVeDcs5Rz4xcLsQJcL3dY2HHdzRGZEFnDvJN",
  "key21": "7k4jnwdCWzRVJqcc4PKd9rskNARPGBL3CSKX8nyWSAeNfvup4SEYJPeWpWcZudQLMhStCG73AwpEm9NUbU8SwES",
  "key22": "3Q8rgDwxz5bEWEkFc7hFcLhTd3HDXZcEEXQMZwHspS6mxtEKn1P9Sy4hATVgvoQ5UZMR7p6ek39Anx8W2CQ1zafb",
  "key23": "3X2ftmv59aPURTet2tDCiWoEhnFMr9HRccciGiKf6GAK7VYBvhDiLoBCqpyjnqG46bAat3YQvPWb7rBWB1MS6xiu",
  "key24": "2XoLKVHpfkBorDoy2UkQV93h76Lf5afLAM2KTpPiBcUT9VpjqrtiKtKQ2ijqk7BmkPSDZYtqEEAmiS4BfbsMdStk",
  "key25": "3xZTJoktjKF9tgKGBFNFzxg3JLGfW8zZGUMeZCzPq1hLsWLnrvC46RfEEQsWwnHXhzpqD3pPbEnB7LVYhJzFPbdW",
  "key26": "662AcZJM3LcXTaVtrejCmyBp7ikLwPuh7iwzn81i1Di44CBEprvkKZiDnzKLPXatGTrCFDPDZBS522zdwXGeuiBM",
  "key27": "4BQFomHRsMEro1teFP3gahSskwixD8pa7MDruzpC6vKvXUepDxxVkGggUV3rC97PxQKBAaFwmtS7PBCZpK7x1RQQ",
  "key28": "4oxwyki8kUokyaGnsoH2QyBCFMaFR3xWmVoKCS5TTmaDE2qTfLTJmBZ3ptEzr7ZJpiBm9ohBFy35eTQuKpoY8xEp",
  "key29": "58M7nbZy4Vv4DQ1TeQfHEEDUeFTVBMwiosn85za193nK9ykixkXCBrmYCvbCQx6jLZruYFTJ2zMYdig9kyChctsK",
  "key30": "5FsoDiCfzLGLkzWg1bJfVhjPuyYfoU5Ckqre1SxoqU9BSTRkg2EnJw7sCHvEBjjXggQSMT253eM8wteak89fR6CV",
  "key31": "K3R9yFr4o3XLzEaSj2BDTtggwi6Hbv63EoyLvJ9AzvkNo9gz2EQxUXcn1P9xJnfvmpjTgFYvrJftq81YbzgMRmL",
  "key32": "2eFYZKJmHMLcrQhkYuThBHk1YfPYyCNdnjXgpY3bkrYo5oCMWPeZAtYZfak6fKn8vV8aYUomGa1c4VgZpJarXNef"
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
