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
    "rREXoa3F1FvfdNEEtwhS3EE2Zqabfp3RQi7p531BH2j5JSmKGmJhftXw7N6XP2y2WKTxNCdX5zkbiWqos9wb1sH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WALUxzyDQQVav8DX62aUU6UKkqAxMhdKwkPtehUeHyXRC5GwHufnkhK6tSwNepGMDxHNosbiF3BDogzx4Nvsk7W",
  "key1": "63CYfJRzmB3mAWCWLe5s9bdRwte58EQREYc3zgHRa4Ecx8urkgYR3CztUXvC7HtteiHknaQiMNHjrpnVVewZFgza",
  "key2": "ReEy8M9TSqkcXkXtNH3hH6d23YtyrphemgFuMkyfPFjJjij7urvWthdtLLLArwX4ZiGqBxx9sFucUKjoHkLJSwC",
  "key3": "4s8yrqS6Cd5Y8KApgr9vtpqVNuAyXuqNM1UR62mBqyyBJFj3SJoGdkmKTYVqSxxVBqTRNL3y3b2inkhWCDfPVbtx",
  "key4": "2MBWpaEVMjJQT9H3uwebC1THYprTuTZudVbXAHCnKJDeDr7J4SW3wuYVUQZp8KbxudF9wizqLGfas4RU6VXBUE8k",
  "key5": "u6QtAG8PP7oWMQwiByoRHCynK2jHmSoJA22EFbzjrR3fWNb5FGpW1GhXuBKU5nyXAg9CpLSuixWpHdVC1ddXjjL",
  "key6": "2n8NP65uzJZoEwJtYNughN2Cw74H6Cv3epJvV1VQW78iWxyGhyDtxpXxC9s8rBjhiQeeizTbaaGZj2yo7cxFyDAP",
  "key7": "3xSpxRivpXWfBZGr9rRw8ppdrttN5KmV56fnvAvKZHxMDcSdgDP83VA9ERUBVJ1muiUD2ezfDXy68n8kmKRmuh2e",
  "key8": "5SfdPMtJCC7kDqDGWJV3vFxysEGMqCQDFUSFPzoB37i3RdqQ4BcRaRZuJfgBk4opRoZuqcocMicp8TYZM7aS1N8A",
  "key9": "4gnrkxRSV3MoQC5McA8pR1ky68WTxkPM6ZLB5RWs7ybcvRCvVikJt1nPcrXeZsuFtKGJeQ4J6e5fRJwiY3hNA1TY",
  "key10": "2YkaULe9br9wZCj6CAXTSu9rVkJReoa9QnnrsepwonCEx8JALXHjaS5oWwRCErHUECWMxfw4AL6wtWv48B9LpDqL",
  "key11": "3apLP1CJnLzDfxmZatCVhSfDPdT51nEcse2rB7px86suYfXf9x1RQCMVrLn7nuBzD8uKv73cWQ82MT9Uqbg2K5B3",
  "key12": "5cJx6EUXW2zzgVWuJdC93Y4roLPYYeCrnAAYDDgxnZyusoznW3eKBoLGgUaAzZYavnfZcbBzwfbXNh2TK6u38M8e",
  "key13": "3yELMDYM7opZr8RBcpWrs25LZVjf5J89KYCeYY1FA6r23LTdSy6SZRbUCR1EAU1qERh5jCYRifB1qVeoQQSZPvC7",
  "key14": "65UpPFAHYTdL1YFLG9Kor2dZ34j5aY5eC1YwzLv14UZSyu3XL2YvWWsGeyUowhYZVMaKVofzfJCeZ2a4VpbXEFVJ",
  "key15": "355deYHqg4xHt2BN5iLPNPXTMRzF8YFzvk82A9ZWNKi7JMzQVmteKi8mbfHBpwrCY7Qga5HgknsxPj541NYUxwMU",
  "key16": "5gCa6inSdgawp51shHh2SdRtXQ3J9vDUiyWzbcNNfggSXPcdAD6oW5C6kxhVuyWzW45RwRS7L1QjHprMpVPm8uQT",
  "key17": "6jjMr22y2V7y2PbYzzoBii4FC5fxSPsjB9UkbYk9vgVf3vhLQ8e5j3UDwQPEV9EwxgnCbZWHSfBgEFwwuY47tyF",
  "key18": "ZDCvpbtRbdqos49u6Wvaavw4KZZKS1eDppZShDHE5HQUNohgYphrDvvMcw93GdBmiWxteXN1gm6P7GSMaD2kP1y",
  "key19": "428rM2vcfD8Z7nWxqMp3YJtqkdzwPBHdxhJhoKg6iVYWAPyHsg7PfgvZvTLPZYTBZCHzKwTkMetAUcmusZPbDfVg",
  "key20": "218EcmCN9eTHHbjMp25eUC7iUzdM388MQHM2QqFVfAU5ZBCEFhMg68LHPUAa3umrtAMbFxUnMe98zmTckaAEW57S",
  "key21": "3qRkXhR4yRA9baUASw5JjCesWgZTLQED2U7mYXNgrTYjSLVfGQKgB54c1jSEHmoive4og4wcfiMdT3SmpgA3KFKa",
  "key22": "4oK4Hgek6p7ydw6AuCxdnYBHEkcKry2r7ia5LskJPjWvUBjVhbjDuEc2hxdqymrALHmdA8VaTLVDxsajJw1Dsty1",
  "key23": "5dboDVAYhq81Q637NsVpZjqNcaTKFxB1Zop8QatoHXXknSirRFSkPPgERQKBK81LAomW5kwESiUfnM3HnUjiXXDw",
  "key24": "2YQ3iAyfYLjMky8iBtMSjEL8akt9LKdoSk21Lhmbg7dC37Nzfci5x68nBqLMMUwQhWpeMHLwz6mh1pV7Y21tTg5c",
  "key25": "69dF7FAmXDptwxuefyNguhyskYoxt6AdRtZoc9pFSB5xSnY1UU84TDCoLpMFbvAAVdfmgc1e8D7CNND7UXfhtjJ",
  "key26": "4LAopCxJpvkugKA5eQg91MdQYPDRXjWm8rUAEJeeRnC99SYbz8cDAjHx38aCuNqoJciUkzHjr639a3BkXMijeLVf",
  "key27": "oWtpQZMFYsk9mc2UhQuWi7NPSGntHMRdKCJxy7YV5a7gT66KbiWWcxN5n1hs3WSAytdh5dEXP4MV16PHYujML4o",
  "key28": "64XRAPttiuZrFYvzefFJyxyhtKWo1sPA4NrXt7p6VwJBXjeeMWVotkreTMoPrPmNiNfKStxP8GEPkBue1MUYWQrP",
  "key29": "3qC7wSccEizPy85mSHkkqnjYwiRaQ3KHXKaCpRjKhbQJjQJw7k3Fhebvxurgxk3VsrMYQH58JEWLwUv6irvSVoja",
  "key30": "4AtoYVGEfU4f6smpvjWr8mwtw9fctPJjHK4meJaUg2dvoVVit69PgoMdnvmukG3ked9NqiNQy95NZQfnGJ8fJp7N"
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
