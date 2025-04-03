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
    "5DL8c1FTbjP8rrRPfTYT4soajJv4K3JSLot4BVcDnMVgTuEq52NKp41FDRwQkS16g2xLnK6N9UJAPTwYv1XAyCve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MJumm5Jg356J7Y6V6Aod1WosMZkWP8M75QVfCxzXhqRdS7UkjFkdPes2K5CKqN3NHnHnQu8NEp3wE6sqZzHSFfh",
  "key1": "4vPUSwwWMtw8HkEixKq8gksSvzXCHkoL3SaZVMy5SzsHNynT9x3w1x7KVoeTJrGzB3FLuS48iig88d4TMLZ39Rm9",
  "key2": "3iv8ybm6GikSs5R6iFbNPLNkyc4xMjpmyjDdTjLj2MLMosFSDdcRkmu7dmi9FqyF1VQyTXXKYGWefSoDjHARQ2Fy",
  "key3": "25n71DwsD8oga3NA5vBm4kfRnFGwAok3dKDwamzTTPfJnHhCna4YdQvcY7ti1zLLfnUd1WJUFQjoMR72eYsGYEKx",
  "key4": "4F3b3C1gDxtNVmu3XqbrTe2pBP8TV1AuNHkAGAmtMREXbx9NuhsEyqNqd68N99UBeRzUeKHBwvsmMGYYD2WgA13E",
  "key5": "589dLYayxvCPBf18tirPUPbNscrjecc358Pxjfe3NYCeEqgt2r385yhoJ8isYGJaGFX2KtejTKgLH22CZVkVNXeU",
  "key6": "CaiT6xvDwGf1pFPL7D8ghXCmVTanqymw4xkM9QDk43UX9tt2TvLheweWcx9C9VDp7Y76xd8yehM8CxQwGFYkqEt",
  "key7": "2ZXVbjEVL6mx1f1PdLEfxxuscaupuMx585TJJdKj15c3FvR1Q4Q5EBFsY5XYxSkZCFf1EiEHWhye3vzvWtMuDuup",
  "key8": "2kswYnThiwTeR74XZzndRXj79pkzUympn5EXXvUwZr1cq2yymnKnCedG2G8z3W7aeuNuaxwXvegannfxyaEKibVu",
  "key9": "BVMd7EvZNTK6cg1AdKASUZbu9Tyw1cHcgRJZe3chAiTiepxv6Q7pT1CqUqa7eLqdGx6h3JGo8fgAVgJttdHSsek",
  "key10": "2KEFPDUAh4LCwKbspjeAXG6DM1KHUV5Gk9TeYTRQENHn4YjdN5gjyviytnjLo4vvZgBpL7bHgQxEzSMbWJjUD2V6",
  "key11": "5dgbyxspE95XkxpyTV4p653Jdys9oQMgQqRPSma8DZ2uacCWt6rje52ijtx8ie271ok3C46Pv5RgdiVFNN5n3VJY",
  "key12": "3oWRBVchuWDZQj3LyQ31EM1j543MkuXRRGnVGyHaFJdAQB5AMuDcD6UZ9srTckkXRMsrQUJhmE7VrqhoLLPuqDpN",
  "key13": "25HGyFRVXevcEkAexG4A3SyQbfNGSbwif4xU4johi9TgG2jdY8q8tncqbbUVoUJFXA4c6x1s35McCYAU5PDasXsf",
  "key14": "5ZgLcnRnv6LyJ4drtZznqqeRFffm4yW2BBks11MHcPzT4crhwZh62FyBfBw6czf7WcWMTbXif2YFBZPNrBqF2RZ5",
  "key15": "2LBFnPWNWZx1Gb2rrEca1tmbR4bJNVo1faCXmtqoFEWK2rhZR28G7qpAZhEFd2uXvBNeferfZ38X47ibwsePRAoe",
  "key16": "5meWQQtuahxxnVwmi3VXbR1mH1SW5iiV1o1fZFesTK9pv1XVs7TWt2hBX9RSSXNpuhegMP2k6EUPJuthqZGm5aBB",
  "key17": "2bNEtezKL2gjmzcRoJBTNrCthXx1nRgcDnTpYXMgXSb8gLMUXnsGGkFLfMYby4famiybYtwmg5eJ4tEof1PqnUZp",
  "key18": "2rQskmBuMExgooLj7gkqRTtGKWFLM8HXyqUgn8teSUit4ieywMDFKtJnXzFZCQCJ6FxfvASJB2p1xKRgEDtc6WCB",
  "key19": "5y8tenebZHSVNXWsvNH5sdZBANuerDZZEwqLuAse1TAts8Y8NBSeft1313oKR8wWFKmyRo2UK8Rb4QQfxQgJ5cJq",
  "key20": "BXrbKLhKQPt8qS33NzaP6VbKYw787r6rTBQAmp2QMVmjsRxXcsHaFbCUD2x1XwhiRXZZpK7n48abWi29BypAMJ9",
  "key21": "57x6xyqSEr14wfbWUynEA7mMCFebxmnVFmRohKgjMvnfjFq5JhLMjFX8mCXN3V1trnm3ETmamgD4aE1opZg46so9",
  "key22": "4NzF79ZkWspia29zHkcdCyjo41MyQ5Ms6BNG5tCoNehd3wbQ2dTPGmL5VSGCUYfCcwAsA8YuVusrifuduzgHE7gE",
  "key23": "aKyaFpH2oa8hcgU9Tp2EzMmh6aEv4Mx97GTKzBhVGPHEH4D73sZ4NVJg653EJRMpHMN4J8RS3MG8SDWdHJvsMrG",
  "key24": "5r1t24THa2qt1PTTppiY3FQr6L6nWTQAXw2AGaxHGakVrEBEPt6hJWjgGhm6y8smZJobLvu2RzCTHGV8kW9pd8Bd",
  "key25": "27AJbAJkG1ujUCEuPVxLns45o3gmbCknzUfQRnVPStHekMZXsGvcHzTJFFPunieHkgoTfYP3mzKpcgcV9t2pK4AC",
  "key26": "Gv38rv9GedMrth7xtPiXXanMqyLhSQvp6nPXHAT1G9A2zihvdKGK3NhRncWLe1TWStzx43VoZx4VA4MZFFYNzh6",
  "key27": "3znHD2j4WL2KohZGrmkJQGDhqTmpFxaqX4wHyYjsQfoZWpriFdBrDrmkppnHzWgvXjRao2TEMQ38bFGc17rFfa7Q",
  "key28": "3YHHCPe3UY7ebmTAF3LxwMKjHKi72Pg3YPmN5LXssJaPKi3gLZs2KwzgkDhafJK5BMKeUMmvuaJyhGNYNgUtzFPD"
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
