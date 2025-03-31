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
    "2hak4wsTeEUXaSLorY4uLDFXrACwX54LcLYrdiqzLCUNuFY2jSauudBd2frnCQKpQ6twpQLTz28ceayGBX5VRWkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CV6Edh4zd9DAoYdaDmKeHnYBrqey7cWn5dkxwnmDbBzHXhF4yQJumCPLMBFunNhQyZNtbgGdGF98LiixHMSHZ6t",
  "key1": "5mtY57epT8oxYf4RiSULnjmHJ1A1XNYCtXhgKm6RZhbjCMdbBVLgjthtX862zWzCCVCGNE2mDWq6xJh7znMfVqwg",
  "key2": "4c91p6Chm7KZdkaGpi88iBh7MzHJko5sMW9q6rPm4ZoRp47kG4VrLyieFnBaZr7YQbjexqQHeE1r5dnmVoCcGXp7",
  "key3": "374M8HxFAb7RQVVbengXcodqQ9oftL3KYk4EwKrJsquxuw6QSj6wLUVZjJBrq3BamBdQBC3QABwFhgNYLqJrYQyt",
  "key4": "2A61WXhTgmANPdyg99LQ53RGxiLxGnD8sPXRAmDkWTCMWFgeSQhPkq3mz2nNHbfeNaMAqKZ5yEz1uNYwmhY7ig8e",
  "key5": "5GYBYfjn1uJ8khx1BHPbod4c3aVKeKpt9zu7zXutqiHCPA15pQ5dik975YcpJ5rF4fGZCvaQkm4zUtYC2c4kX2K",
  "key6": "3fBuZk1aUFNQFcvBGM2etmvaVGsVa4XcwA7UkdZUftBg8sb64pycnVezwbazU97zWK5b5BXZuY8zGHbj8ontH9qP",
  "key7": "5jhPsZ3vfsQiv9xW3UZuUiAA9yRL5x7jwshmqy2A77tqzYgis7UAhtLzZYKueJdT9S9Rwe6tbrDszvrEzvUApPpk",
  "key8": "55gPDAQzfM49vtT9Pua2EmTW7VjBmsrMtnnndmZbaeqTJmXQP4KSbELGceHJhCy3S4g5KUHjA5L5Pfp4gozbZqW6",
  "key9": "2wmEac3pgz7S9AA6bivHgHVPKvqTCuvUH6sxWeMdz6Q8xfsMq4xqqd33ohWquKxvCsP26pG1oWbWC7pvv65HVD6K",
  "key10": "iBddwwHaiV2wyotxAYr7mY1EkyZBWLvPRiu9xrx8SzGd3xQRxxz6G3WkAJTfbtKfkQgwv8aMnRJjz2Mg3KrLa5A",
  "key11": "2U5K3iSNPHnYEBKGEGTKCwiMGN3kihvPYWN4MDvmPyk9KjVwSS9h9SZrPRAuGM1a1Rx84uv3i94DbuS9GNiEwW1M",
  "key12": "a1CtfSi8XVn3hjqXcYtXQuGSskkddjcrdZChTUqbqwh7ggC84tagEzfho9yzaHF1eKcZzK8dNhftxBYcpqQuHXh",
  "key13": "62hkHsh6t4HBVmqsWst6uTbZucPJcjzTVpR1cmSCiooyKTDKYyaiZAej57ftx1ZohiL9MXWKKCvjDVgANu9vPQXJ",
  "key14": "4pR7tM4Ndw8C8VN3hdEzEw39DmACPbCwcJ17nZxg2VxK5CeXxtwwVHYy4MB1Q66YBPbn9z4fTSR6Un6LPNxhqC6a",
  "key15": "2gqjrx18EjS8JCEhzTMJi1k96h7jMKubcnN4eEbh9V83Mund9yrhY6r9PcT8Z3qp6Tq3YYGHRXvcx9TqF1HRqKTq",
  "key16": "2qEqDgvE9mjytUwGgBrbBnwnMXUCLVEwkjCQGEHHDz3eaTjBhkcNDpmEPa1TW8oNqqq9HD6GrMU2dgeXLtMZDZGT",
  "key17": "2pWyNu1cyom1FrE6rbsQ3zVVyC5z2e3gsy9y7gBSgE1rfLxAGUQomnt2pWjZbXTM9rqpzQaCbaTDMFB9ibFL683v",
  "key18": "3AQ8D4TB9Rbg7k4bDfLdrhs23oCoPPafj1GCdbPQf9rGStg83DcKgW9MtN5j41ViMXEcD5XqAXZdKgRk3ZGeSQHe",
  "key19": "5KyyM1DHKFsocnXsiwYRTmnMYmKFqihZCm9wSnYCuEMqBQKGktzaDJezCovSGFxCeWFt1LajJE5rH1KKYRPWBuGo",
  "key20": "3RjTrER3aH85FFnPJorVmFWT5UdGbkqUUSEcFu2cZHvycSrDL9f1ycwJqwb1HSZJU9zQ87k6ALFu8NYsGMQMbrRg",
  "key21": "45Mb6m7SWM15HcKLpyr1FotJE4pxnhhQsyCYYUj93Cwkwoiyjvt7MpV3MgHA6pgiVNZuxU2Jphk83X3PL87mNfHa",
  "key22": "2xC2PMVY3di6CiEWbnmKgkinBttLAJk3Y8W99N2B3ynrm4SFSNGZxm8DHYcwbNMah1knK5jqtXxGZWUt41ZPQ6a3",
  "key23": "4jv2pUCB4Bq1RqSVtgwqS5x6NQ11spufh94XGY9kGxABSSd7J2d9t5UA2cWuMjU8AkNFm9kSBhJULDZMrs1byKVa",
  "key24": "5FSopisJJGWNiLBb9YFKZbooZduY2jrBpfsBw411dFpHJ6ZmqJmrESGvTNgiyqrELVQgUZxwf7igbwvPzTWAGSuD",
  "key25": "YGRuMcmr7cihtZVSuTzU4TRogPizCx64vLJsHaNqRNP1bpbMiy9E9pqYSBaKd7sraDMbPFynodHyevJtLPU5M95",
  "key26": "5he5CyHQgAz8QER1AVJhTDZQeWdXsbEeb95AdNguCuN2hTPyqzcNwc2wiofif16zJfUcFKSstmKWmGkKUosEvNFW",
  "key27": "2po6swWa3hmSBtZwPuJYGHJ8JJuUCVTqpa8mSCXL1NxAjhvxRWtzedporeZE9vDKCQh5wwHZdQHVBdkYKm5gLGGh",
  "key28": "344T3BTdef4EmgjT763AFT2fW5nMzhE27nqdGX9So7BhEAqdHDTf7YSLFhCEJdk48ZXeeAxkPeSUM9GeLnCyxNMK",
  "key29": "2h8e1fMEFdgSBfxT4YrzafgydwhUiF3rEbSAZ2Ai8gYKFZzkQYwrvAGgnV84CFHgXNVH1PmPxsF9kZ8dskozq1wn",
  "key30": "5uXtabwNxZURsUbw4EXSoEe1DrMJX61an4BBPo3Q1ssrdcPZF7d3idafCr7uRrjxFttiTshdvNL77MEaFc6aL2SL",
  "key31": "3MGk94MeYCjHS5p1RHZngzoAv3G3CcaKzcLEak9VBVZmuzPntsG43cX1UyjbzAnHXP9b1PP3F59ECL1mrzQaQ8q",
  "key32": "tr2B867PYYNNQvD4LvidwLE5rNzQeL2fE8KJMHzwpfHVoPPmR8bGCQjhXwRXdJT9kDXYuxoeW3oJYyMEJGb5ReS",
  "key33": "3yxQgbRgwuG32XdxWqd324E9RwrNsYfKmfVtDNSbxPuYd3Pb5P5NPsiBXEGCCfjjHoAQTPDHhn5nHv3zCxExbFpa",
  "key34": "2dYvvVn12QAqaZmoYrPk5425STXMWaAA79zfzjs7254wzP9vRXfq9cLjTLuVdGi4sNNsPctEYtujoWfZLiLayYNi",
  "key35": "2vAjM7Z9qymR5fYEd4tXsJbwwfMHtZF3Jjji5rKxDcEWRpbCuzo7B7eQYKBr3XBr8Z2jJTkdhS9YkYXdFhE3muat",
  "key36": "3hmqgs21Fu3hM6UVMYhsFAvhbQ6soJPXviTUYs2JMwkQmW63xgeM9UrDpcYg6k79gsBGaPFmhoXEagtfSa33KjsZ",
  "key37": "3BH7JTgmAj8MaVybykgK9rMH9NNZ5Uqu5gGr68c7KCK82mbSDyjRVTH5fur99SHowW4TKrcqW9t9zqboYEcTL9kJ",
  "key38": "3N4DjqbMfZTtj6C2H3vZ3rY4AFFb7KfmCk6JkGHYyYt4nHZwLoTmSaxJZ83V5soFJVAYk1VbayAae6GG3e6iwRtp"
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
