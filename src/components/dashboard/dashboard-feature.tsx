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
    "2tzsYgDC8tqvZ6TTChUs5dRkUH295yhNh5JXQA5Qz9N1PpRMmzMW8xwjCQ9aPJyHvPgSy5ELPePD6rZtJXdoVfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62UzRwKQ3MWXSGC7HHBmZwjSfa9emgaN2YEGmzPZh7Mwhzh7KTPx88L3CzV88LUUZyUoyhQS6otPwbm2bmEb3rR7",
  "key1": "4xkKMrDE2tzBu4uS6LHukR4RaNB45JQBrVDwuAE765gbS9gDkuqATdgseCPQgCkbREX2VgTF6r3zRzZhTCrqAeZ3",
  "key2": "57hysgaBFjQrD9357RTQZc2XvcQGij19zE96ueYQaqmKQATUJMbtX8scCLXjgb4RzK7DR5RkW7bDCjrzFJgpyfgQ",
  "key3": "5QsKtHVh12agykWNnsA141pmnQrPbAHDmm4XhGtjAnqc9a5ahieg82Ez5Mey3CTBNQAp5bEt28psPzv4wdEDFPmh",
  "key4": "5vCmr9BsZxnXPktZ3YrQYSVVPdYfHSZCVXLTFRRyVkgaPAwYSi4TgtPYem2grr2oEB8RaKmTePe9j77xmkrPSmoM",
  "key5": "mrrmdaExjt6PS1PyvaChwVEhvTtgC7ruGivL4Zt78Lotcfbh6CNekg85gAHTLzidUqRBcXSZudpnetUpDNU4CZp",
  "key6": "s3dcWB6ytYjyD5dMjnNPLunzL45zsThn3Asf6VktRour5S43NAhJVhYixg7zdaPfnGV3Wk6SZiwy8T9s8f7Xp7w",
  "key7": "2rxbvRPA9duUqeYiJ1BYp8f16mBm2CZBzuYzhWLBFVhsdUPHU1oHAJUH9qibA4UC7tpoRhjS6QaxNxpCbPxgJwh2",
  "key8": "27vHrBCSEapotDMndinYBehnCwukPZYbc2czgzPnHso8xxctzQoaSkdmtzgre7mPYYyoc7qV9eDTMAWRRJ4xoqUm",
  "key9": "22WQ7LchsR3KktHi965ruwC8EjKqmCDLiP2CSwz8YpUxB7zKyzyuiRFtUuKBTb6KQGzuTi75w7vxHbDjywEdjvtz",
  "key10": "HGULQHkcmoWX31iRCnByK8UWg5gLotVwzTAv4qeRsezeqo4Q4GLm74ScrosXoUjKKyoHYJi742S1PTdmqagEazr",
  "key11": "4TeuxRV1bwrdbTxv4vb8y72g9qwobYPjxQ7rggMGcx6jrCfgvYT8365mUFZwH5NAjiuCVKFdPcbg562EMTAQfNFj",
  "key12": "x9xPLpeWNwMvucGSrcEmFXwcs2WpMeUFkGGiGdMTvm2AbZ7MaSm6baZSyuaGWoz9U85XoFZMUVN3fr6PjtY7M1N",
  "key13": "3RANcZ2WjAvgkDNKdYBCgLqUciPjqFg5M6WDL1dT15UurTpv3sk3Y2jfpgvkpPSw9EVfDaEFW5Xr8WsstuZhwkgL",
  "key14": "3Rd9KEVpkQC5v4yapwr6RBpEtyUWW2U76ubnfkKageDVXoYYvkyAq5oVSUvBhrDjSarDDBXceA3uetKGQmvuhSR3",
  "key15": "4iysartGASJeyTzbUsEaZYKneDGzgN1VMziX8EbFi51v8LYWeDkhyhNDZ2HDjet1HVxf5XWwkszdrrqc4N49XmBS",
  "key16": "338Q2zzRjcMLSbgA11rZ4TNFeGDSQhSdMy63WUFLaMyyobekHtFR5MAVvLNNqQN7f9S5phnDcwKJhEiuu6LtcsTq",
  "key17": "3GRULzn85U5DPbEz6X7Lf8em3CN6pc3QnWr62yp6DikpTDnsuXon4819iNqjz5nRAaUuNhfryC5wnzYjc2wpz6Xa",
  "key18": "3WcRxFzcdrUisiiTEgNh8LYsHQpbxDiahyCzMmgwFTYr5vGKCLYiEAtzcXQohLcdPrixZVfQvMdxUaBaAc2PP37r",
  "key19": "5f5uQK7HQU3hD8Mo3sBQH7aUBFWVxSAYsVHXrZNCCwzYDeG6FqComeGKPYP5kQ7iDvWRTQPgr6Xcd1WsXVX2EWyb",
  "key20": "22eWsFFyNk2Y4QyT2TuH7zbipUvHB3p83BEAhtpCRijMB8UXNH29BBD8kf9jxohUssQeGzFXgNeofSGsoeZo1dfn",
  "key21": "5qzemCKoy46GkN3eGLMjNH8j4MMkcc4c1zofaqWayQVNvsw3eUtiE7LF9y9JaixG9VNXqF8sFHapajCuRPBpQ8Ka",
  "key22": "p5q7QUxZA1zCWvyiuDmwr7EjzhR5Zv8hrKCoyMRP5eL6cBo4aVqfWmcQatNZHRACogKTnT6St3DBxyH2oysrQ8F",
  "key23": "4cgZkDVYXea9XvNGnkAnSqgobVK4FT122EhttCiBzLvU8Y7KwZAVofHoNPeDceH73mZ9wUEQLv9temrXqUoYL4Z3",
  "key24": "5R2hHceVw6GmBJffiswzDzbnmmH83cRfrWXywZi3hqMy1dAFkWDxxrG4RtmJsNKxnHJVRzZnpPMM5a12P68ML9E7",
  "key25": "5VArBC3qTmtozuujp1wwjqEJfZAgaRbNM1d93Uk5aN6XyJoasbTTtj1NLesQgrAqV9HHsfFsHP2TgMJVd6Txhw4c",
  "key26": "5DB6i7wBbnmsRzW9qfY9Y8DAMmuspL7NvRbM9pmsjU8DAGjxSmAHNmR38sBi3UP8i9fKxAuEp9NhU7kogypJmKbV",
  "key27": "3o5wAnZS1kHAN9U3xRHQF5eXfutUHTJwnqZ8HTfAeJGqKXkDH6WWH2ipBgLuVMRmGzr5g8MkwPrvpuGXfvHtyio1",
  "key28": "p2D6L2gSBaTKRjJHMXUx62miww1BVHVrMSTHiBC3JXeFhbb3edfXrWdCT4twZrzJKYCuyDN8vAqAAMyDKckD34b",
  "key29": "3WuVugbmaNwg9pWeCxLWmUnPgtYFcnbc1BzugnraFWwinwH92Sbte1xXLGfDeWXxkgspNSTYyoHMCfNXr961aDa5",
  "key30": "5CsxrFCoZbh8Re8xx8ksXtGrthvzttN6139mAxgMDLzzobByfkfmcnNaPjPaqU6D9S8r9BKiLenJae59bEKS69Dw",
  "key31": "FEb186xWXDwRo6XmF3yvLJEFUofPQrdLodQvge7VAX9FBAEhWjJkMkt7n3bVbmukLVVQC2AdHf16W4wtq5ReaXx",
  "key32": "2McC5jdC3tKoPdpPrfGeChaWa25ZeJbSb2BL49nLvM6VFEVMw9e6P63eCWbrt3aCN6mx8eq9wDpnNUejMGJk1iAb",
  "key33": "43qwom8bpEkDkSPQjXZDLSbfT9Mg67SGni12agV9sXpZMXhVXDm1tPqvF8aUdZSnfpjGNyiN9UYjn8zyTrdReoX5",
  "key34": "2SevpZSMLZyRFDaTpDZfFacZSxG3dVUT6ZPqVvpvcHLWhxVcNDVYYUo3Wu6tTXkD86aR92UEgLdqN6Hfb6xaXi8P",
  "key35": "4J3CDdEzMimaWsb8BU9WdeimV22moYC1ZaErb5DAzSuXvP5Z4efdZxUuYVZcZAAE6eZ9trKp8zfmawmcAbq6TQPa",
  "key36": "4hv7ipqXxuHBbUTLK23RBh5Q8tJ9e9cBrye1WA6QkY9mx7ByjwbPAi5vS2jufwPe7ViQpsQuyH79GRnTXW2aPfgP",
  "key37": "UTqu8cge28J7VU5GD8HvfEeqTbU6rvcUh8PjBQheuEAa71BbXNvktCd7vkrAGrXobrkUADGLM2YhvvFSeXvs3oL",
  "key38": "zNa134usGREvc2ha5r7WhkYKXBJn8RkvkVSNQXFpLvekpZYGDQYvXvTgUEiHRSRZbNczYihDiCxj9FWcAzAGNrf"
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
