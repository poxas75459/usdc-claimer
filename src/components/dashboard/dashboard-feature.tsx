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
    "2sqL1N4Dtxw5p9qVk8pn8dCxsAbxpMMfbUf8DydHhp28XzMJbcYCum8XuRbgWyEXWY2v8n4P2dGP4cok5jQU5qkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cnqEt8VHCr1kMCMtzsUHLuMBqBCKcRZCqdsudiQZcFpPA14S8GJAZbiWRZspuoRWGkdWaQW8GZSJ5yXUF5Q6WmZ",
  "key1": "323kUaNBXBDoLVoYVCs5FxJ3Utthh5WWyNfZnt7CMnrZcSnZKgD3sMsgzEqWF47zdXU86mUabwcMFMZf8qm14the",
  "key2": "5kx9i67y3h7smJXiVsu3mw8gABBrUHCphYx3pmfL91owLS3VY7G75ZJp7ki3jvS1YVevrTp32EEqofPMxvsW7UFY",
  "key3": "32B3uF6b6SjpRpLaojaYXmRgLmCUhKW9iRTFBT6NApnws3c4KwmaK9i7MDPB6XWvPt9fBrg4fGYxjyLFU2bss3c2",
  "key4": "mr5hkh1NvcByXGFPLFhdfLhD2L1WBqCoQsNn3hx8FPoaKDZd6SMv5J7KbENQo1GxrrK1NrCJqX4rcomUBVxoZkC",
  "key5": "3qjSVNEUPR5KZCccBSBx9oZFpzWAEHHf7ZF9wwgk9MQ2gZY3qqLiTBZpLer7tzzX8oh8B8aJ7XzPGGVAMhfE3skR",
  "key6": "37XBfFiBZZb9GkvuZxdbBhtNfx9iqWEpLMmoqnnnmqMRLD9GXFabW5DDTCGAAR9xPkFZCz9Y7xNPqJc8qAdZCMNs",
  "key7": "5CnoeRfaMULZHsdJV56SvkMjcrbkrxDF2gH5go55AKAMuZDceaJPbgFctYHrLEB7cFkFPD4yzxiwQwgmPzfMo6dn",
  "key8": "UDsfrJuQbfinq2BnLmMb9jxg6y1vasp69xrFh4FzsVW7txrsuMS36kRXQ3yJgsjCwCTaBanp3mo45dZiR57Ygk6",
  "key9": "61gJ7u7nJZCeqQpY8mUQvrWDVxqtmLGEZt363s2WVDRRoEzBraLTPYVtJnRW7BpVb869hvo98N6Km8FQcmUz5Yn9",
  "key10": "FPexDptHbFCfKoAtpYuDkDUxUU5Fnkdws6rvysHFDLJLUhYBma6SzHte9Ffnird9xkFXpUnjZfRVLZic25K3y1D",
  "key11": "4Q3sJJkRseXiDFv3xopxke4MVP8TdNj7V9DMEn1jP6jMgrDZppgCFLoJF7MYzVh3zKmDd9ZX15sJxrdkHjUjPE8c",
  "key12": "4dg7tnVKcimd4GDn6JeWBBezVAtsquTMhnA15AitCNvx6RnuDWjhekfWY36BQJERXcSw7ymwDGcnLaTggMkua1ps",
  "key13": "4EBAGgpn1ipD6GqwL7fj6CtbdghrbJQNsoymje36gmsCpNKBsp17oNGDm6xtcfU3kYvZXU8DRSwka1txSGGV17Td",
  "key14": "4o9gue8szrAVvA6LES4bvTzHjAPKyZNtPko26A3fuJR2fqAnhv1oUf1cJdrguJLUjT24cQUtRT8CxFsobfsUYPfD",
  "key15": "55nhQCC2ymL3EfBJYVakQHqNGiY891HV1Cb4hZA2kqwk5B1oc1YxDwBhWzQrHdSc9oMEy6Fm1v7REpX1VRWt3R7i",
  "key16": "qU3cNESFdSnr8FbAp9MHVugW9zsqsQeU4aohbJSRj1UQFZLSAKuTfLjqgfrRMhTctf1Cs7KCoJJY3xL2vnthXML",
  "key17": "Zm6H4uHj1iRfuwoNY6sBUQ5bV24GX2B1gPk7rrdEGNAEh8QiAdeb7tjmLcpU5vzQE7jUywTqkFrj2fMnPFh4uMY",
  "key18": "2saminpRMwSMSVvBjXFjiRi7xYxjjzR2YjFaSRdmu53F5jFyE7RJ7UTPW46n7K1o434h87Cm4DsFrzUi9ipXmFsX",
  "key19": "5pCZiXJGfdnfPdEvnYHS5pD5xdvmNA3pWhD2NWs6LDy1FXgFP3hzxuQKCE2ntxrQkaB3JmFqxMmcHJF6QpCcBw9k",
  "key20": "5GijduKHRMBFohVGTvNQ9LMME4QyKJ8zceJRzdXmYpkqHSm4ETWhghxi1sqoxN9RhTqidVBwHV7M2mQu3bvGEARf",
  "key21": "3eA6ayiRdhZGE5cgvGK7ZczXRATL1ZMWEJDBUgAHUigPWqhASRLPuEuW6U1bbyczUvmtKMDEcBJniJs8MGSUfzbd",
  "key22": "3m7dsV2yDk5FPmkJCqt9cTJH2fHKQeXcqt39M971i45o5LcnjYQ1xnB51eGzYMVBkfzfHkzidVjeHjCk11Y5rq7M",
  "key23": "48Jtp499ctJkEFVvTAtNhH51naZcbJWF3sWBeajJP4C5nKMjN3ku4ZThe8uVAHKaAE8269Rwvd1wjVVaJr2kf5q6",
  "key24": "2H5XQCccb9fHiCMTzf3TwXxWfrXcAjF3zqrwBmMhhEyoePyYR8nQNp2efh32CFYaBfbtJuX4B6W1xJqJfYRXsLLL",
  "key25": "2coZ9xX6fKx8WPvvNgoPtneNy64UA3VzLPUS9U3bB3Y33fpkXTpL9FMg4tdXRvhJsfCY3ECTgtpJ7LQSRdddDWw2",
  "key26": "5Fhe8BF4K2bGBWHzYroZk9t1BF3aA2XLe3HtAFGgAdBzmiFDRiBh6GrwQCQ6wh4V7eSdXq21M6aK3zQm6CY5PMiy"
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
