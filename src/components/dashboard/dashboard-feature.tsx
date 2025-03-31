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
    "4jECfW5CkfvSSYQJMeithsRwWCzfyX8R1m2whW4KrrB46onWGfeXcB6sAVeozr6T529CDb5rSJuAL7cqFmnkRBi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xrVxPi5o8Uys2f2EoAcnSBD2vkQrrvFH69iRMCB6MDktpU119DjaBPgtG54mWFbyHARgTewC1iLDXbNCa7Kqdm3",
  "key1": "2SGsZPrdJfgK5nSNLnoxRpQLNHoCJksgxAfhoZ1hmfRPMaak69bnMrgdWHjXvxiWhEen1EXUUFBoj93pvGjr4awz",
  "key2": "26aVikKtrQNuzX3EbYnJr9DtC7MCV9jL68sNFkoZfKzUzsCRL8oeHxpJFx39cn136ZCxwMAEG4vtoMiM1n6FEJcm",
  "key3": "5mTnXqiELNChgnCeUM4MmompGd5wyUoyv4v65uZtbaqjrspqdzTwegDSU3sALSHQNY2SLhTDRruNDYa5Uh2Zcr7d",
  "key4": "2UuvpuArHiQHUjHNWYGsRYZVS6Q9ktWAGxPMT6uyQsFCsFWaKGiTcgt5wGGABWpFmDUQABHs2TXDE5mq22ZvGHK5",
  "key5": "Ca5LcqW4McPaikN8BahmnBWs2uJakiyCmLH1BzjtCY7kpq4AypQrdcHELXQV1km3avJNcchQdfPtMeDkZDJWNZ4",
  "key6": "wrng1bCWyh3akWKTSh2ZpuTFGwFQhPKKbK6P3m6YUnabs84MYtNqzhqwEwb6DA9DnXrydhmfGHmUZvhMy5PFJAN",
  "key7": "2PEXFMfSFfWChCa7mYLmgXZZGRvdkLRfpVgysChThp9M1Qfoj8Uy35JDetAbkR74sufT7VoueyaJe1Vos6wM3S3A",
  "key8": "45ZhdP8LxXVToQuKVgSD5u7TSgbjsP1DJ6HHkLQc4GtamUSWJNnr1FAQx4Bj5pahpcy17MXBFKoj6WqjnBeW1MJj",
  "key9": "2Z6p5fQoksThKw4Af5tmkXi5XCX8bJUHcb7Jxyi937XREKNQj9uJYqERah5oUPR45Me8FPJrT79WEwZehJCk8bfz",
  "key10": "2XBXgL75n6sA2j8aJCPjhG5MvYXirTF4BwKwDKADNGcPbgmnVEtXP6pug8jPMhm53n3P3EqVaNZFhiPmBJWYj4iV",
  "key11": "5nXvw1jKSWWXQgKoDU5D8FVFZCbYrGdp1rJ7c7EC6tPm7Kj874UXJBt773NPsTfzJc64LgiyNpFRHyNohZiVqo3d",
  "key12": "37jmqUkqvf3CueBFAPmUooGKyKFh1ScNtaC3sKfzpBq8BEjc9zKqaGkNXi8WaxUQX89vpUecmTuyf9DHLCcMWdEx",
  "key13": "4z7EQ2G32SsZ3Sgzazy1ASm5eraWf5k6nd58JCNfyEqBB4TKexQCjV1dUixZMghZHxgBfqzBbqbpXMQLDgHdiBqQ",
  "key14": "5QKTKqVWvYfwkqWgoEm67mrrPLC5Nkm5Yfb3BvECGXg62igJ1ejd3TBXeenq9TcGzQh3qoWHo3CFWUZWWFUpJDrm",
  "key15": "3fK6eKB3ZxFBYShnccyCiZkdvwtbVt61XE9Vpzv1g7v2gmK3Ru3CXZg9Geb6tpC4qcJAYtMxmV2PbGRFuyQXdSyd",
  "key16": "63WRV3c4gZohmhhUogyGZ1UCij9ZNVfZtMwnmwXu9MRnbyPdYcX9cPAV3tLRx6smL3L8r626fBxnyGoiDEQ3shiT",
  "key17": "5Hh2gm4viiCrZPPuzbW8TGsJz2TaEDUCxSMXmjTqQKLKxGeHUWeNi9iinkTCmFUsCruhB2rPHeuSGZDAteYRremY",
  "key18": "3gytcXVFvjkZCniQhiNbp91ekPW6PoEHPZ9nY13ieMnjtiMaekuYEjhzAnVs6gcrYibVwJbguRwQXvNQoLwxED1w",
  "key19": "3iZY1K32Y2NxZu3GrLatEWCHNVeaDrZpgAwSe7GNhvPKzva8sorSkW3nPL4xKavwf3HnGgFVJURFNT2KFAm249GT",
  "key20": "5C6rrmPS3KsKsVDuQzxHtnv2f3zDZzrtuk8AghXmhcKY8WfnyHSWzuLeWbXrgBKprRL8baq3SS28ecvsfDtbfhTA",
  "key21": "3yt3nEiBhAKWoqGd4cVaLxXEsMqRBPk69N4p6G1kuCg879eHaFY5hi3CGXRAbzmkFibkHSGbF3DUJPwDi9TwNvhE",
  "key22": "3efn24N1nRdU7sezMHAdzm3JoWgqRqzf8fetoDXHXeiJQGwGUtY4iSUUXm79fxM8x2Ck2mWVXQGWkeKLwDigv3kf",
  "key23": "4B6wVAVNxbMHoeWyjeLkag7Ef8E1QXrk4BARrRSpNuhu4DgYbdEPwpCb7NP5UxAMC3B413LpYWEjdDzWfwmxwArt",
  "key24": "2BGwrPkRjHzmeV6iKqnVMU8ESLo4fFdNoXcY94nC25GDTcPrMzdSJ6vQisGJDZHKp9wmSDM3AxUs8pTQSVhkGQCr",
  "key25": "2cxxjPsFbwg6xmjbpA39CXDDtrzNnNcRvah76eVQ5T7Rve8zmsgHZWVC2gLqGXJWNFc9bEzep6MqJWwAVhQKdPrc",
  "key26": "5oTutE9vEvNjE3DhQCxMXkn82DLtSYu5MJLUuVTNfFkPhrExCTJKHSvCVme5qAUyjwAgURQtpHXX7i5kpV5s9vbu",
  "key27": "55yXUFHvC25HDgxFHNdKvdwettcHMtPPQHcof9hzTTzcXwZXApzTaR2E22ozyBMYv5AYcDMqR5hx3qQ8Q3oznR4d",
  "key28": "67Zu45FZwEFxWQtUC3nQu8iXiHAUYMsZdkY6LSLR3MFAxmidE4T9niJAsLP7yMGQAjSHM8BdHvMo5rMnuGg5KdVU",
  "key29": "64nwcn2sJBnoQwzXrHZS2ZHeAiatQDLTFWJtpDCqs92mynNCX4XdyR9Rde41T9rpmfYEXfSuWksXVe92ZumPLrxs",
  "key30": "3DKRZBpYqFvasaWVCq5hzf4J439fPMRhrPcN752CENNCvqqDqpRZQUu7qToFqC6cWQyz9192gJb2sescJuwTd6ti",
  "key31": "5bFmBTFDkuUcwzNMCc5PJSGuNzQJf66LPumEFEWwQQFbuYWXrAc8nmSYQks3uwFcEq5KrkK79KwDUBZDv5ttuuhM",
  "key32": "2uTHapAgWPTAHd4bX1YGetnExDzanu8eJgFD1XVooceWE4viNTiWN2uTsEwYJSS1BpUW7J6HfEjdgtjyeRkhehBH",
  "key33": "5qWM3SGJqUeZsLdvKS1fts7mQGexqdxA9fQ3BrqHvmU9nnKo58WkxueG25KgC3doraWpyQMGrfF6nHzZCVacSMmu",
  "key34": "2ZfebyNEUcwoKFrHbh9qLYWqMkuAz4SdSUZ3Kqz5r1UPYQbfAJRDtVZR2sdpDxP9iRrf3wPsMcSbkmRmZUHYcMTj",
  "key35": "5v7nmpBv7kSeUM9h1vkYS1dvJMEPXHzZEjysZ6zgmvMCET3PSGNgvwGoLmcm4An6am8tsUWM5q4tExfczmoamdFa",
  "key36": "2rw6Jc9EA3a3mWxLS9N7pB2zZ627r3TV5HZVv1oevnPJyHnKWzy9dkELAG3pn71n6Z5cLXdRi2n4mFT8SaRwewe8",
  "key37": "5CP6xEy8itq8eQgjhee97ZdtWPLrmE8z9aZQgesWDzUxrHReifgnorGfuWfPKvVGiSCny2E1tTJXa5BekbH1mmCh",
  "key38": "65nbR5uQHjppN1NanKY7Et1t2q7BQmYAacWH9U7WFkpJB1jVHvX5fLFJXt1X6NYfKc6NAoBoyniXtC9DmB58sEpV",
  "key39": "2ShNdPuvAdvxXs7y3XJRmfWwUEtrhTaew8nAKHWUwSuMDs1RrMzD3uueF3BQ3Nbk7qvnsftCys3Ed1RJw3GfmK6n",
  "key40": "s2J3Fdh7dLWHKxZspMGr9QP15wjXtecFHPkx6eEMWguBrRn4btN2TPFNZzKzoX9o7Kt8PdhVAxyR7xhpKyzXS6x",
  "key41": "2t4g8jFTKeqXyijEKGEG4HGUBwa9CqxBQm9MPG6xrYNLBtpsRvHUQ7RbFPsKETmSmZ4zVTYKJXVQWT2z2a6ZUfwU",
  "key42": "wyFKmC21t9cX6MEGcQn6xCbsNZ3AfjeZ9fqcDSBXj5u1EFCiVih8JXXPCC7i9XPwvo7cCQtNxoSHHvCwrUthCH6",
  "key43": "3LFLqgA2WsTgY3Ao1ywvuy288ZZjaYR9LwZgmpVXXGXiV717xKPoNqxAzmUDpZofVjTRmP5FiXKt7QAss9S2Comk",
  "key44": "qKZzSai2rZvfJZFeX2rPNgzYhLesKi1gkVHg8W5m8XuWsAwPbaNvBv5fUmRf7o1DoN7HWrfgoxbC8UgQZuHKwYb"
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
