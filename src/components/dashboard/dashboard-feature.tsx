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
    "3ctiKnaTejX3biJTnCzSx3VXTqv5dY4zrF3xwJBZascDXXESDKvGRQBXLCiUaqYgJkt7gDSLwMEQgXWz1n1cJ9eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P8JmmRtCyvpN44tkzeyQUFetZooqZHBjGZB3ZyaCvyi8LmrTNAVnb61Sec4DMyzkyt3KX6VnzckqmbsX5Sq4xHx",
  "key1": "5SLBAzNofA2ko1DJLwEYhc2p3nw7LVyyxcJTkypk3nFC5n3TzW8Mjn4sgZrGCK5MvpGiQPW3y9GqeNwcczWMEL21",
  "key2": "5T7WATuSB8vjVEfeJukmzZ8RVScvgwKkEeRyWCoh36XuEVtKywfR6GY6Ltga8cYL9p5qF4mez9mwuCDKUf6oLkw7",
  "key3": "3XGnen5iqatxJW3SKF3MFmg2VSs9EZpF6mNhaxybJEfhkxXFyiqWwxQ83jxLAzc4EZ1ijQ8f7W1eSyNcY3nNymEr",
  "key4": "4iZ1cBaT1haGeXCNN4GrzM5NhNn965LBQa5fbJNZxxvEN7FTnKCYaLpLBVrbr7SiYxoxrR4zVKTDPyYVzuB3TZZ9",
  "key5": "2Fd1cHy16TwiZhLKmQh4QNu3DJtNus5RfTgaHgJ5qEqcu3onckTtpJfeUChrRwoCjVjEQgKp7WUskqJPoD6oNb7A",
  "key6": "5bwDStna8PETDdrHvRnuyi3c119QXbWFTqvksuw9zvsSPomYKMhhjvMEQzwSDvCd7NUSXo7oud7xHLyRfjLrZ4Z1",
  "key7": "422S9kpkXhgEiXnRnhAhh7pqdH3KFszyViNC6ZSq41Q9rUccfKvxYC9JW31T6HNhzUv8Nk13zE9fjbaVjfNvG7BP",
  "key8": "NZ5JY2E2ytynAwaGURS7pZ87oaihVSJf9QA1vJywVNrjbGVXc4Szg47d8kNGoxJjLD2GrXBCX9Gxgxc11UFK66j",
  "key9": "5Pq2Cp1WtF9ymWSYe9cisXciMk6G9FcDe5NMzeamooAb1CVnBHy9XvRHaKyfD96K3pakAAv2nKBFXNQBMdj1XHzC",
  "key10": "2b2MJskNrShgSH9iGH553xByDNb6juPfkKACSEASW1NErQeaKFfrBYb1hKxW31wPtt4vhoa75wdfWCibcv1GJ8z8",
  "key11": "3f12NpmWg5cJCgiyikBMYM5nEsDgTKahWn3LVEnv1ERkQoLYojs5mqosTxejDtXbVxVoECNUKfY7c5G6vMcNpLhm",
  "key12": "3VHw93jExy1x1mRHoqVYVgXuBt5p6Tpt9kHhimLh7vvT76c8PtBe55DRBXTRUQqFcg2o23XNG97EnmZCBQ3bdemW",
  "key13": "9EWMuwAjMfwmwMKDe6Xgaj17rBnLoXFrbEzsj3T3bkDtXrRvbRcDm7Fg5EaBpZA3tpYoxMADMtFErfRzf8zdHPL",
  "key14": "5erGLvquvjgsp77WRKfqnAWbhR7VmuQdhh7Wtg1WxENntxmeoRkvAwNw5bqq3QKHf8iiKETkkgD8EUdyBCA3C56d",
  "key15": "3bMAHvap8kK72MvuKivp3cfr3kF7zCugZJuF1Pnd4aqZmfZvnCkbwGXkiWwd2qJ9HxeawCfuh98ibCzVJuDJXZj5",
  "key16": "nNMFEzq2GZa8uzjNEKxQCoQutCm2bdEjRvKcp2iApTXMUWUGgpgwM1qWrQREzSL9JnMJu873cqqZVv6sLE3HewF",
  "key17": "4wC2tddLajBaRVYBSkp4rxpd7NtMcqcMFg1JcPM7ojCPCvkDZRWr2cBWpJCz4XKqzKEzPyr6paG9Wb85bMyb4Fow",
  "key18": "3KJNL3fxeaYpXdGgYiehysojemru3WJzWQQhNiLfdyqp9JhqaSnQ5vA9qiFe7Lr4ne6RQFcQTriSV71qADknbfUJ",
  "key19": "2GFZeQu415JUbx2qACKbxyXWbFbTvb3iThQQZwSZQThkjH2EDH3gNDPhD18vTtSH5fM3XSkfzp3wfyMTpgFmdcbi",
  "key20": "tLsQgSxaPRFfuXkF3hPhJhdvti24AsTCpnNS3doahPngW4hv8nw27ZmyKwL5Pmh6SPWZBycVa7epHbKeWipWuCS",
  "key21": "3JxDCZoX3h7aE6VyCaTbH7a4JhJTRigq9L8RFmeqnPnhV7ig2G5hfFYMRouC44uGc6wWr1qVWrW66wqAG45ye8Bh",
  "key22": "4HeytWJx6djVPx8T8N7HhVuYfs5FJtJ8SjjqSKEcD9qHNt5q6nsE1bMAwyh9BVXMJh3aoqPESbtEktpr77LVr9Gp",
  "key23": "3Ajnusy4CVi2Q4Bx4NQgVSMcfJyQmNwf3HUrsrW3edHaDZd8x5KYGhjdSeojZfL8pwjZJrWuuEMn2Cgj7yzkgGQT",
  "key24": "2GDAUsApGtGLzm2uRg2FVBfvU63861QcZn2WgKGjjdk5esrXoHXx3zXZExaANWEMEt2WM7NmwSPTz98aiSKz5jEn",
  "key25": "2rJQ3EtayK9PKAR2m1t55qbSpFYdqtGAPDxjMnvQxEJt3f5f5jbZDNCHJJiwi163CZ6RuuePMhcy2ScR5bonkHtU",
  "key26": "4pcZEge1rZLiW2yG3NzoYxv4cytFGDjdhM21ki1o2bTTBbkNLPsA5w41yhdvCFGugPAk4r159iCkK6HLueuWsYQc",
  "key27": "5oMMCtDFdxbmhSNx3TuouKtwDyQdgpSzd84gFLFg2LYeXouPbgZiwrnpEDyHPzQeHN1Zk62skxGr38FRGPCcHu9a",
  "key28": "3L8FTinZP9XC36jVma6tAsAXqCBJMka1pD7r9n8RYTWpPBukgx4GLRTaLbpaH3J7WwFvqjgrLA4J86d57k3kvxRV"
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
