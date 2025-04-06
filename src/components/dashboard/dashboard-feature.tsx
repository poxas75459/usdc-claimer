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
    "4LZLQwjZ6bso4K3piQyB1JGYzhhiW8ShP9ykn3mcZujU5ZtZABay3JyVVoYh5XtesK6FfjQ1EkHzWZnRPWztGtRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YNjNeUeY7dhPv6471PrXbBJD1vxwX8x2T8BBCWJ1mnrjrBspm9yTUtbJ4rwfj3sFEgubYc3GNYzfbF4VZ8Qp7V3",
  "key1": "22GEkuMm59eoR8y7d1x1cyx91ng6XHVpBVjG8v6urpViBky7ZrpJoBHFnj3F3y8SFCoKt4RuUNRTmHWnqP9rwhed",
  "key2": "4LLT7mCrLz3TsZh7MJrxqfjtML8cWUxstFPmc1ByuB5sHTtLJ6QyuSRwj7ac4jn6JBprFXNswhqGroinKybfad5f",
  "key3": "r8qM1n1eTdEhUhkXTPjYxF4ZmizpLEtPaqpX2S6vMsmuGqQjKeEjeDT4iZHsuV1P27TNgDSebng2VJ3ZyLLaajz",
  "key4": "4n43r8e7eSb22UkCrU5dB4U88MYwHt8E1YStL5aLx8FkHk644GsFQF1h3Aj9McPmVrAjCazyft69SVks7GGvgBVt",
  "key5": "3uqQRCTpfRcHpMUEY5oraZpPj3ptB4fndNRy6XVDFpyBsTgqi55iFiYHGFj2YRWt42Cse5vMyMRxzm6XEiBKqGcb",
  "key6": "5xMTcTyTHmuF6zKwgD1VN46oeUKx1D3Dza12UtyY151uVP1KQx1aTDy1PDQ11pPo8R4TriSobmhZXnAYVPQ22aiN",
  "key7": "3wWB7coqikjwy1rrvfKWTEU1cnjuAS4woMfUpBxnitWniFu5YYVDjUSk1jfk7aoApaWsbzfFwWZDYETefbXrfMFQ",
  "key8": "4SYu9Cbkd9fiBTZgLL1bbLWXDR1RskYGcmaRzdRGS8zCKXpXAWV9y9oyyTChWJce2evXyzm46uwmK6uDc5wnBzbY",
  "key9": "3VnsrfEUJkYm6uYTvfJxmUTFu2dcAf7CepTCQXtUgzZyePYTf7XgQGXFTRWBSg86DKpZgLGXsASVnMUxb1EPTbjQ",
  "key10": "5e23Z8M8FeKqDTewQcTRe4sMr8okKdB9cqKJ8VQB1KsSXnsMMgvtBa4mn4mExLTneaCW4o2tirXPQhy3BfTCvEBr",
  "key11": "KGCjegbT5WCMSSpDzXvvYqQFUst13YguBAu3GZDFGfX5pGSg6mGwdfRvMdHcZ1S67E2LYdhRC4fudLQfmf5Wqqk",
  "key12": "2zFCAjSGcEhGkvHfEsiV15qCEdkgQoUsjJ7zsvdsgEna43zW88JaoyeEQSHVwyfaSwFF4NP3VcwFAVxPRTAhTfgf",
  "key13": "34AvRE1aCwJNLUivxg78RiRGm8BsW2j2aSiN6aBaef6zNg1yHpHXSAd1gfMgq3TPDcyeShTkA1uiQGStQKUNpaw",
  "key14": "3M5zpPH9JtWL6jM9s6azeeAAirhjtGLoTPFCFp7ou9RkhYsSJCNs46QvzXcDZNSLBPqq5SExsMYuRxpPcn1sTodw",
  "key15": "4YQWerddPAMJ4XMT13QFD3NBC2VVoyvXFGFuWM3Kb6KQ9BrZpivZMEyyvu363HnfH6uJ2XjyM7XfpRe4QeoPVjth",
  "key16": "4hFTAzSWgjzr4ukesSrnaHRtL24xQWoq8EJzTXs5pisxQnM1QqMawq1TNbnjq6F2s9vtYZ7FJrkThrZvZyGJHABS",
  "key17": "izmcFbTf5YN8FwAHFECzFdXBP18ESVa7LcfhRQd7o6k7EmFD7HYBKrXMr1SaS58j64yFM4qcuKb9WzbpW3y6PoT",
  "key18": "4bwReyxeVBi2AMxAjzgkWdzJmDjmXZSEZLgHMcZBhhN9cYPVcuYVQnDgyh4nm763UxF193Hr7DnF7mv8GhdbaTh7",
  "key19": "vCowxKdzdu8X5Gfm3xnLGFQiarUtTZ3eFbLNj4zLpkb7coAqfMn6V782HCthvSXkHuNB9W4B2ePqMP4n8aqdv2W",
  "key20": "4UDKWNdUMbArhv26ffcs8FiRgLCo5vjej3aoqm2CvdqpXcEjMi4oKV3LNejRggCas4gJHchimSEgzekXSGKqqxzX",
  "key21": "tJmcyVQQ4mJdMNSkDtpHihj8NWvdescNmZjKg6Pq2Lq9YUvjG7aDgq9FCKF5H1fne8qxUvFoMeUErbKwu89XqNE",
  "key22": "3ZanGAHbAURgmvsDY9k2n3GQ8AMsVEVycArM21s5pwu4qF33Ya6L5tv7uBNsiYVwVnfWSgci1mEGpV7LnJpKUZtG",
  "key23": "2G6dJBmhAUoqmaEjLnELqKCRXTKnK4QZsj4PKEY69XZvwAKyiHdP79HxA2VqNUzMfeKY25KH9TNLxCSszw8oTUbq",
  "key24": "2DUogM2QEiVeevkQK6zymAwPtSbHzhoxNMQqcPKjdEqTd1gYJREBYtguo1JN4ieXANnQ2dbLbQvBHNXkrhZKx59G",
  "key25": "JjRvGToEWAGBKECHN9RyMN2crhGNo16HUrUFZBRs2GtXWoDVQDLosNjS9kxvZpddbu7fhMypGnes1Wv2aZXgAvU",
  "key26": "1j7imoe9NJC3DUoHEVbRfdojEC6cpsJiv1xiNbW3yUxrZfgQe147EuFAexuYUwfAptzMaQHbGHhfF7FMTYNQWbS",
  "key27": "5QNUjfnGMSvRFd7hnmhUJQ534AgXAmbvvNS1Lp84aZpqws6UPVczraBWNt9sxh6FvJ9BbWrgchtANuCcq3bAXcU5",
  "key28": "3JFAD9LMhNLtem1oNXxe7JZmjwUjx65TKizv13uWZWAeaKMp4YrqWu5VpL62pAsD9yK6WxHgTv7irzRCE3AuivvM",
  "key29": "hGeHedWn83bYHu7PCY7DomDvCe8CaCmrRDFX9FDgEiJJYkijUNjG1d4S7etk2WrZbWrEywyAK9VU8TPdPtABVbF",
  "key30": "AFtZVnbGEZas3tTJLfSneqRWpy6CX4oLjeiVEWSk1yrTnpDYEd1e2ZUGd1P2ZfWAz5NLKe9fudJ5WhATzDtxAAE",
  "key31": "5YGBmTNpB3rCeUKEkdqqDhfQqXE4Efo61ZRsLmfmCsx9UNGsM4pyADudSEz6RZ1UoPbdTPDwoMm6kSxbbDtUQGW4",
  "key32": "2zRZC3QbunreqWMw6gcpVYcCSMAydQYVym9JTevAdZddsxzpDnfvhHAmVqGz4C7ZK6JhJzePSN2rpujR2nZhXP1B"
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
