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
    "5uQiERS44FvKbujNeV8KoL4xqMQM87sFhUazTVAz43F67Th1SsBnMGweZYrL1i93ZjAgkmS98rs1ZdhEU9DfyzDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36tTxAiJKYG9HftbUVykGFi7nfe1mVnmKS6hWEzqnmYPrxV2FShT54pozJLoR13ViGU6pq27kECgpLM8DHayHwk7",
  "key1": "2zE7vD1RYC2jyVQfHd3ySsoQGLr6owmqYvae1mCY98FK8zx1ZxQs54kvAMumYtRnLCjjhtmKUFtZdoa5XYRaJXuh",
  "key2": "3nZf112JVN4rDgw9nDKLyUsBfXCjgnXThYZwf65g7F7Xvyg2JVk6NzJGu2ebM7JPMHMXSbyZ5kySoNurmLo33LcX",
  "key3": "zQN4Pb6pfyT8ecRcNo6zg7i4FRXZn8JzgRnecMm4rxUTzpJYdZvqJ9wwdRu42ibMxtX5m4MBvv5cPzETFJQaKfx",
  "key4": "5Q3rWoox2nr2h27dQeeGxKLpC1wp3dRiGqnn2Mg5GRbmQqxCWX7hAXuTCCeLvBP7Bc64aAvskyXHWfDvxVp3zMDi",
  "key5": "5V9wPh26EefSsD9ePR52RebxS3vh99Yqbyyc97Uh8ekwvoZptfuNkEoM3ukamVuvFvmuWN3hUtNwdY3mcHvME1k2",
  "key6": "4bPGpMDBsFg7QJ59qJYp4MyrKw2B1z2LHfgHGRKzbvsQP1wo2vg2VUoRnsjbdDsX3yiKEVbNEwKjcxKa2s7SHujT",
  "key7": "5fwYT7c4rYktUsRaqwQf3wFjbwSQgSEMmcnXt25gePzpgiiAzsvPUHYvC1tNneZAeD47EPtqrXpp68LmhoX4CccJ",
  "key8": "5R9XvT9imJhzUgw91wZfp3fS6VQZcvtM3nhhuLWQnM7dFub9XaERyYLJFdPNKdeBfGKWLymr8Qw59igViyxup11p",
  "key9": "46ctBMa3M6FjRyBgLpSRsBabCGEP8YdkPNkHbFqQD1qcKsCQWQtp8j8uqw6Zd8ezfhLSFQAzS9SanT2b9su3vvNF",
  "key10": "4LDHBwGdcmsLi1L6Ucx2aqhwoNTST2JevYid26h55zpwqj9j7NLHAxQ2WGMtLMWXi5gnCxL6dgcx4WZHrs6RXqHG",
  "key11": "5w4z73KKKVWtLkQ7oyRsYSdeXrvDS6oEQ1zdw2RoPiLjh8R5v7bRVofTq9zvMqUnSuBWG9nzc4AQ41nJBW4hDRv8",
  "key12": "3nVgCQJTsLK65ugkgx1AWKptsCsKuGVKnQQb3fumDQYK81wZewGkBbnGT4uMwcER93yVL5SqSWp4pzS8zqz6QKAE",
  "key13": "3mxzq8naFtaRvDnAo5EUbqDy5tJobSbbvL2iseiA5NbXtM7NatMEkPnj4HNr4nKSL7eo1p9t7JTYXoY2n8883h33",
  "key14": "2MpcWEDwUAaj68d9sXWQcYQbnERiLngjLsPHtcexBiA6jJnVSCbcWHZaURaQmiWAdMduGNgnQv2jw12AK24wkNG7",
  "key15": "tiku8KVwJMkpqr25p3Yq5zswvP1UjrLR3nzQGZu9vRGfpKEnjeMhjwLQ4CAJCpLBxpH9EUXHbFL6fqrxR9XDfyL",
  "key16": "EkRPYhDXbDRbN3hrLXPxoq4L7TagqQQmLXJAnEMqtv2ewe5YP9R3of2FscsopnTFZBNuH4sCYPTQY64fQMxqFJA",
  "key17": "nyUpnmDXGAhiyLtMCcUJAFxAtR3fP11KXzdiAA2XV82fhTHbTR3XZTvZnYKDJWM8tGXBJpAaceUEUgr51a8BCCH",
  "key18": "3AQWyvqpgDEmVt7fG3Lmx9PrehAiYPHnK19zXy5skbJNgWsYPvtkn8vbryRM7UeNHyBvzFqmZjubCAgam6QbJykW",
  "key19": "57CSsLkSi74awU9GghVPNZ2knQrniFiPcUVuoFko8gT4b9oc3HdQMoayXxuowcqDAbFuLVYckGfm46Q7mx7XgVbz",
  "key20": "4AbgeeptbWETFjLYjUGeYpuTJRnMgRJKCrFSpJrLXFKDh8fzQgrJcexE5fkhChFAY5ZpNAy5mR7e8YWHTiXbGHuC",
  "key21": "yLEWWyr9cNTt3RNUjSEdqDXpTFhdZiAWvwc29qGERwU5o95z2LApbdFWHjKDBRuoZ9acNj3PWsU68bepDzhbujG",
  "key22": "F1mPR8pVQAHH1naLjtTBj54b3pcZC9U12UZWoywSUCThRN7cDp15uF6wwPPWC7i5ZcGBZcoAb65AgNyUhrY3Dg3",
  "key23": "3ujEc45EFtUQvnEdJzkoKQKwYtNMmeLR1reufb1HJA6Gxvya1JvDVRhVDvaGmdM6vRiT7buV43664RcY3iyFLhVk",
  "key24": "5vmNFLj5c6KSF1TsMMFi9JvqSrBdtkiyrreSt2fNYqKXfwYJxW37hJhc4746BQRSPoArQGotzvb5qrHfkUJmz8qJ"
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
