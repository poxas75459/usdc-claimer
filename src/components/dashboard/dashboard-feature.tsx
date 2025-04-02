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
    "4zorDugjEi8LdnutPUwNJSzWYnQJM8U7zMBfB6edtC9umke2Q367WRKntnGthcvaPqunTdWzQX1iwc595HgLGATG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A6ehHFNkeSvHVygSoautqGS2zkSaDNgZkfRGrLnvBSew9eLvrVQKHpBDqDyQFpqfVFmgxxGbLniRxzyJM9ZZx7y",
  "key1": "3Li5APC7s5h2NZG5zx4mppuxonvT1DUw9szrgQDXE5z8vewU24hmLw2cdHmzHAt3HAtmYzV6GAfTpKke3nVNGZqv",
  "key2": "R2nVnWUGwgJk13CQzjPKYzBGig1Z3AkswdC6X2ZyLy4Ao3CeKfxQrhsWPQbTt8dykur5wsUCrjCXVfpT8Uz9PvE",
  "key3": "32mRsBfKCv5feJpRRV6Xszgmg4537hJzFsnUMcTSo9VkfY5ZSLKbhz29X3tdWpAiBHux5QBsiTUC3sz4RyDqXMS2",
  "key4": "gM8TwHnfqKKLQMaCv6XeFyRMnYP7i21AV2deU52EPjsTZjEGpzQmKfLyBpNkuPQcbF37LprSWRMZZzq1AMHLwaH",
  "key5": "3Yk4KjcnYw8zkk8yZBcr8XjWNoqGn8SZc9QBr3zW7VSmKyQExwPFVyA19z8PDY8nvfiiM1qth84VLQLx9jGRPzjm",
  "key6": "dtEPdewjLUGv9m1pUjd868vgdggAE2z4UBvWBHomdMhab5TRHr2Fdq4aAs5LFHidJsyiNYS74QY194wPzo3p9KQ",
  "key7": "4RhgnwePzWLQw5a6oi7GNskqLw5pEC3oefK5C5J8idr2R5fepySejhXBit5DusyqWaRuT4mBp7tGyJcLFgPFMHTv",
  "key8": "45HUWez6Q5eBsRqiJuijQsWZGQauwUFrwBGHP3cjYag1MQXR3ByD4XsnZ3jFQBP1ENCaj4oUhUQqhdfXkWiDvnQo",
  "key9": "67YShwh4TCPRhHmGi6iTNuz4fKw67vzH1qLCyJtQxSiLRysB3ZUqLuV457F16ajLkktjYxANswbib349c4xB9GMk",
  "key10": "28ddYYxP6bgYy1UeHsQJaeHFEuCcdoCAJpZjezJ8oFbYJiNAW8qZfPridyd4JvveBXA9M1FA5gRAREjXtYXYdNhi",
  "key11": "fPiWrCCBUNnKgBvWDEWgLR79PA9MF63j54wpWaV54EggbAtz3SF7mocC5a1vDj2LT1sVDgMMN3TrtGzRqw97gNg",
  "key12": "3mHePMGhYjab4kGYsfx3pbct2AF8Ro6zywsfoyjCRSdEyXzPY2C7mEvrBR6eqgg9bETfthK1FhrQNLotV6tte6Ge",
  "key13": "6U1NrbM1CFXA3XZDeCBYVGfAeP5jh78tRd8xAWscYaF1CGWqk75eFFJrLEZ1VqEs4zHLby3kBJwvaG4j9fmg4qT",
  "key14": "4EQnqDSWqxg45N3CBY6uR9v9uTZUbPYPwHPGo2HrZ4WaS4kJ9tAgHb2vHPqXQTQba5kfWCrvyXJUGKLvj6NHj3C2",
  "key15": "2Rph7hJZZhZxs1bt7qc2NbypQseCCeWkA5D3TXPE9s3r5nSkubhpfuAKbmN4nX6LXm96nUm9g23qjWvyZ4PdKYM7",
  "key16": "2KBWU1bQVTCvoKD2v5Do74Bj4PEaToeK1eRKJsjqb5HCt7CiC5wuECgz6kNj4DEsudjGye8e2b5szzMXKSaR86vX",
  "key17": "9YbMxv9mftpADLA9T7SzKCFFYeTHonmnT6FMbhcBYwRjfFvgNbYvEoRHpyWoJDTKtgx8bHK8qg75r2vcFYeHo2V",
  "key18": "3MsQdNYUfd1a5Fmta1w6k1F4XoPSzcfxFfL7paTPa6gdMPdJ3sTfPr2fsGRkh9MAXBtoNPqLCptN2mtq8fjdMXeE",
  "key19": "2R7t7UKATKuJ8L2paMd46ppxZgjzE9yLLpsZhdS42TYvQKCaAh9YX1sm45nba46pqmQcxVxMR78t9YJUpNbYoyTt",
  "key20": "r1FgohyZXMJxkzMzNhsdymSNCadP6fhXBp7SLB19TGvDX72TxADVWc5XpvTJqwvnV1m4qoBq2CrZFiHvYJLsmzz",
  "key21": "3WW6RZ2tFM4S2zzm3gLYLwsw3F5YMAPi34tw2z7QDSVz6niUneB5uJXAazWsuQ2okQ8DtMqMZmueJaF2jihwrhgN",
  "key22": "5mBx7DQSUcV3cw7C29fi2uDbAMXXca4X11D9e3TRF1jg7simLtY7LMzCJf4xAfhKVN2hYkNQE6EuQZMjCPDpn69k",
  "key23": "5kRTg4dECSKGqBfRqRzKVxcLaBkp31kbEBbUQnjz4a6fRCzryNcGV8QgeiqRtKLC1TzFW1w5FF79K81CeFtm7Xks",
  "key24": "654gfgDEQsf9d57fbNm1cdKbmLkVNa2mST8PktrsjbZ3wo6Y49gruzP5j7SyA75MFnhTqVkPNSL65zWR3GJaQnht",
  "key25": "4WgTDvUN7sPQhoHZ53kTrg6ccgRoiCQLEttxJ6xddxQXjpNSZFXfuMm3LzzLVMiCB7R7rHjwNYsonMopJ3Vt1gwr",
  "key26": "4jWfEXwNhmnEdBLSsbqeRgyKyeduv1Dt72v18FwZpawyruK1Z1HQgpZYzsnfVJYPYU1KYFhtRXR3Vi28g85JTUYc",
  "key27": "tqpPkvNq3bGzGkCkX5Co88e3o2gHFqq5geRpq5Tsg9WscB4AGzX14rZ6MZ2oVMCTHhN6yJ9Gs3SjK1cnJkhbN2E",
  "key28": "TGWkCzdN1odBneXyT1bNJNiiWE5WYhdUFy9zM2vBnprt5pVzjxTA7pxuq4urzn88DhqtiC9Jx1MtSWdds5XKsrb",
  "key29": "2NePjij58BfHYtzBuZLPSpZUUKmANFLfhWSfjC1wLgM6yXzoC7WWGYhwnzqwv2ExqaUCKNrpRyoRMLBMwursULLc",
  "key30": "2trRUfascAi6uJWr6YpQwkgsH5DRQG13h1RLN7eCqwCEZRvwvaav6rsppMzWkUSHRvmVUQedZSQKEZWDihXD6BMx",
  "key31": "5Bs3kXgRcoMqjPJTMYVkx1vJwq4DpttwZFUXAgBxrrpGcEJJoGiN2JGXZVUN4Agc6C8QkiKV6KG86mk4gAUhNDqo",
  "key32": "YSAtEKXTBc1dDw1ZxUsKns2nQPuXZo1gATzHuDKbyM9M9aJLMusccVKcfdFhX9tJvmP3XiwTeyB1TPZe5JLe28o",
  "key33": "5odimGNzXpP9td5iPiX4meZm5AAz5qqfpcp3ik9EaQfDtggSTvk1Hv9kCfSYGZwTR4ZNXVGxGLYE1AjmJhjuKvZd",
  "key34": "3dqZqJNJnCPAoe4y4GXMctXjn35VZH1HRs8NGAjgd2AMd31CA3e96ToSvk1KoLBqRy4mJSwuQMx6SUNkpDcstuLp",
  "key35": "3opcYpJ85jgyMydq8fPdsGfQ6jh8WJqFCxuNedcZpN5CGV5uW7U8oYXqjYPV5ri2AuUiiYuAhupwC1SQd8wATi5",
  "key36": "TF4s7s3z9z23YBeTPVFPrvCZE9f5Mi3aPBbNM76WqQgAN1mH2BMSHgmaCRfNiu2gAxSWDafvBZZXzBa5ZJ2jRoN",
  "key37": "4sRu7dbAqALMFvtYycgS8H6BUuFFY2GXx4oUDzXpZufWSZhioNsNcbxkFtaXsQmbixWCxrvrAGEtoT9Sf1zyF8c9",
  "key38": "4KjSGAqKxuAvZJze3j7HDx5o21jQfdzfRk3NHfc8u343v3Hh6Zz6pQ7fdQQPeGSfWJwmz1oWntMeZ49Va1Z76Tq3",
  "key39": "WJZJBhVaqzorcXsVheiWcdWrn85k9wVwGhXELU9XWHJc4428FVtQr1uqTDwKERWNtQfowauGcUntSG7SQELgo1b",
  "key40": "5w3yZadavR9V63griKiFpnNJ7LPiJdTxzguqG48VHi2k7p8DxxnVh1kC5i2Aegb4QyLkVjrwcP4jSHRdZGDZZV3v",
  "key41": "pZJMJbnFYFB6M6L282qerdizZb1QonuoGWVofGdRGZfXbFQMUwy2QhQaSExKydL9RARMHrJEBWcKNN7fbb4dbUd",
  "key42": "4MUquZZ6jRU6E73Mrav63TzTNoXyXeYXSyNfw8dYzyWGckoHWeyTpztXXkkgdVBhHA1JfiRCVkosde4V161yDAKz",
  "key43": "3TaEqjSCewe2Wd4uBiE75ZtVPaoJWfFuPCiE4qXevThLCgaCYCD4ZvhMgV4uZkeFoD52dtGcN9dxQ9CMgBgfJa1N",
  "key44": "3anSH7ZW5bfSBPcWNh7Tdx8oQPuWooJEJeQ8pMm8oC3HHtsKSjT1Va24mXAPCNHkRGr7V1Gn8wMrGVaxxLfYnje6",
  "key45": "4YLQSmAp5GC8a5nW9mb5ogymZfcLSw2EDiucwoRAAttMDuf3kLgL2CvtC6oYAm4XPqLM2gwGrZn7GPEM2n1tfo1f"
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
