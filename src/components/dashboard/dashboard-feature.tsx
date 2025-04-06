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
    "51mECEhSqobEaXXmAYmtcPSaBufiyYy5W7UYw9WSj8bKGzPNftE1YTEHT1VSJQ9dQdJ1zKMVMkfE91MBaN3XTEUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GSRBXMD45xfUspvkf4J12aDEjRcxcPdWMfVxaMEseCQBRmom9TuTGHJMpbaWpLxUxprqyTZWUaNrKsc998mPX1",
  "key1": "4HtrpFzLS7ZFzp85N8kG4RVMeqqBhqw866vo4s6R89wYC9YVUssaAEpxezMw81YpgUV3FRHCMa32PeFZdJewSKUN",
  "key2": "4sMk52fQMzYPdorZJJQZgEePAhewk3ptqJhttFepVtvCU6dFvhG1JvURdmeyG6hyXy9kcesZG69dz4PnAXMwF1t7",
  "key3": "KGL5NmnZDETxkHgSvEhjDuosdYBGbQASNDZqLfPHmrdidHkthGa2ZYhgmPqRA5sCegeWoVBT7TJjsv26NJRZU4j",
  "key4": "44J6TUy43o7wRJqR9j2ZmMGbdkgSSCWKqKwbitP3zjKTYJeTVogCatrkV9MavdQzJeDfVhLzBNwRrxREQG7Z4MV6",
  "key5": "39rc9jHo465ZLdBeXPYJ7EFAmuS6afz8ryNUqURFqxcmUEmq7wbhDkwhQDYxLB6qjyUs7WvsaRir4koKyjJrDasH",
  "key6": "3TUAiHdjosmfw7HwWjhdqyNAq2pcXng5sbcu38vV3duLRWpqG9FnqFiGArB9nXN5gy11Cx5rByKkW97477k7NoMu",
  "key7": "iyc1YvcWmMjiPmjbJkQPHYM7VEKxbAuijz4iSLSgds8n3oDPnbDx5b1bzbotnFzFhqxrfWQj5pmsjRP1z7GE4Lo",
  "key8": "4bdzepcfAqCJhn7uRAzUdE7sh5Q5iJBkL4W7SdkzhUXxSjf9UJ4gCK5XedRKkruiCcZpsBpGoS75GK4572KDoWmf",
  "key9": "aWx5vmMGezoxGL6uRddz9a7oBQDhEtqbxWS35UL63qiGkYkLaMqxAVxahSu8eBQg84qKgZqz9iiFS7PfdyvLvNJ",
  "key10": "4rTVTyqPw222NmX6b3zm4gogmtVwwoC38DJtCP8qNhNaJ26Z7NK2ScREXHEri2fLB4unk98cb7UWy172dK22UkU",
  "key11": "4Uahyr2pZqLgHXeLgeyqoh4vC6Y2AeTv7nYth5LyxtbNYyA8BZGrYShsBfDTswq6FryRXrHFNqLbAkqPArt9FrDq",
  "key12": "3pwXG3veacA7VgjTXGkRrLtcBwrGVbpp52HiNCPLdDEoAtQNS2aN9ko17dHmURBXj1JcYP9pKzErTGkBR5QpV7Lk",
  "key13": "4ZXLN7RE4s32dXNJnHJETshB1W44ZurAJQFgRWHZmcpYnVTEmQm8gaRTFnFitT1FwKa287YKEqFULQDBDcURhxr9",
  "key14": "37uaB6z7fvvj9WQyFLevRtuee2ShJ4FTd21FZZkK4fkuC6urE91L2bxXZJpbFMQDhuwoJPcHmRaDzKSnJ5sx76LM",
  "key15": "3zA4rga7QD7k1mYndqRAdJ4tjpPoJ7yVB8sMxwodMyyjnY1ehenXytyziu8J2vAQCsxAWrxouJdZc2n342MkBBK7",
  "key16": "VrgFahGj3yZEeCfVLjUNUJZXkdVeYNNxBfVCagLyz9p76WZJTLaUPaCsMtwzYg8LEGgp2KSyWysr8zGiBBK9bt3",
  "key17": "5EiELUG67ZJJAq7yU7AoZRtFDc9gRLJPELawfVxksmoDv1EaND29SvTgzttdPtF4r6oXHtobGKPW1a4RuGakVjTk",
  "key18": "3pKedvTpwJTBWrhpVx5GmLuVsAffMW7tfadABW3Sru18ewXtYEsnfjvnofisHMWe4mLGGM7rY7rDPYvJCDtviiWF",
  "key19": "2k8BT4Kxf4Mj1FUqgLFHVBEjpVZNUWTcAdaYW8H1bRME41hq8qckmrKPQNygASGd9LdA4K2wFovPB4wPv2ikBfv1",
  "key20": "3vEW2X1WH1xrrZy6smg5ipfYicCUL4ufZrCWiCNBzF8Z4T3FXGmtCNqVadVY8HuRR7euzhpTBmY7jqAbGMT24SFf",
  "key21": "zdHvmzA9qpxgZkiHRGhG82Q42sZiqR4aisH6ZiAtPBmiRVMrFQk2DmB3TdjyzFVrFdM4fwhryW9in4vyz4DwxS7",
  "key22": "3DRQSugeVZHubP6u6VoepEH4jLtPU3uPDfvEKLSniwo2Er8mLBMxKWPaTa8UUNwSjqq1CNwb6MjEM8dQmoB7YbXk",
  "key23": "3iAD22VY5Taa3qWbCgrFn58haJKTwTrMyyW3hL2CE1m3AkyweMmvVnKGxhAwX9WTa5SG5MaFCp1X8KiyMMgwrfrP",
  "key24": "MwLsRdSY7whv1e59tWToie6BJpLpVfjSSnSipzfRP6xgtNAaweAjmidXT1c6tUupE98iHXqZX8rNNTwjRqAn3TH",
  "key25": "44dHRHTUYqBBh2JKQzqownAyrkgqBtEWfxkh5x3rXKyzQ4K1aEhpCtiYrdNpB3XUnRrYth9JvD6yrLiFfCyEGeCJ"
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
