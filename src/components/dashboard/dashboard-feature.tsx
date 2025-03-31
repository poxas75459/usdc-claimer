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
    "4rQp8MnwEc6Ao5uH7pN9eWrnvhuQHKEGzNpqqt7AowrRn5vSgssp72uf5S171SM1Hv1vtaR5tXFFvRaLmrTgt6v3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZAqtxKKYrZfgDYYG37gp2y6HgxMxEnRvhYNugBs8WZrd25uPbo8XQpcFv9EgiwY21J8RhKbRMxZihT4Yxb4Qvi",
  "key1": "3kjVdcEkgs3vdVr2BW2i5GeLC41QZ9KsBah7aFmPxztu9QJ8RFjFf3EJzhueuVQXfirezFLTmCYYNprk3H5eDAr5",
  "key2": "5Er2GxFzQXPQ1euS6Z35mjTno7D7jQLnZgQfJ9CvMjWxkVbh9Me7MXtMTbvBb5JbUc6h3pfrS5aRc2j1iHT1BVuG",
  "key3": "3Ns5GbvniwvEdW9sBWYNDhrDLmrbYY1MufAQSJRUjbR2UEHuyLcEYyquV4C1dyvGqQqMDSdtdie1oeMFpod5TwUt",
  "key4": "2cbjnwpbJyY5K61CQzp7mwmJ3qSEgx2cbdCHeiXohrMvoHjvFPVVVhW6MszYftYi7esiGeUEKfmMCtsum3dTPhgD",
  "key5": "555SZgduWubkDa8A597bbpZ362RzffKqS3LEA4XpZDJt3BJpgG4MuEoFz4XAUoH6JQBNwYvxhqhdVC7H9XomBUmV",
  "key6": "2gqCF4EgDf8zXFrcwoFbqoKoocm5Tes69ZLMY4hXfbDH2RSksaJK2iXjyboSdzFU4rxAX9xnJh5tfjLFRjcdZz5t",
  "key7": "5LFUPNumnLFdXtrHJDofQgbii7TCxr5KeTmTVt6ob5FPM6dYs3sS6ciVLHKiJeKwWGzCeLwG2TCbBdh6VJXrfQu1",
  "key8": "4KKHdaoViAYNtd7P9BjZ4VabMuN9WkThVpsVLwKHZ6idxU7bTd28ZjtNJG6fqBTD7domQbw3fXGbpntKQbtVTe2e",
  "key9": "4boayY3XPUhXpww8Qd2e2bM78FFQRvZpUNFJNqT2Bwq1BmZnruj33VtyCA8LkERvaMgSUJyWb6P9DzRwohhUimdn",
  "key10": "YLQyHvUUjL4rPNEM1725DJjLmbbGHUwhaJSyuW13mr2SdGk97vs7mgdXBkSZT4hRPaS9NkmmNuXgXMjQupQPJLs",
  "key11": "2KcaQdoFdW8JpbZ8cSPStuL3iXWzeJQa4echuxDKpjeWbTU7qrBcF7Awq5B9Dr6N3PZN1S6WLSSvavnVXJtna9VM",
  "key12": "owQwuicfmMyEGY2kJsxtGsQhEdCJB455amVaztY1i3h26bjbb61VTBoYXBan2LUt56SLu4V6pJmQcDECjBQY44x",
  "key13": "4vWP2ApUo6rUtRvLM9NHytfQsmaoSLHew8STaEsk1ZLeJcd7WkrJdTEzmDw4SeKGruJgt918YNUhsmjcZjpEoYtb",
  "key14": "2qYMBMfuF5EJt4P3oqjFi88xQEUpsE5ywWj7d7GUhZBzugdt9YkNFmhdT8qALXFUDnnqsHCnsryfWPwJm1FAY8jS",
  "key15": "2GATozWxBvmq1Ug46hZG9atKmnwQAHcaABDwzapiXUBEnyWMMvJ9WESo8Nbx14qqkTRg2yS4Jj2RrZwk8SQC94xZ",
  "key16": "2CXGad5XGSJmNbQWVJYhN2Cu12qGK36n7s33k4AH8to6iThyD6Ty4C2pFmw86bnrQFLUGBYdifLA2Na6BGhAUTHY",
  "key17": "zkTpRMkNoV3VH8RbpCuZGjsmXMWcmeMsdLQXXU2ekYRzXiNNrWQE7v3MVWgYZzMpVvAW5HkLgSJai576nLJDRuz",
  "key18": "3JThLqzQnjCBF3Xd6pXx48S9uMux4RHwjxWpvAmep2RhZCeC791EmGJXfaYghCexKhUJ6HfaasmZTi3zL4EHxzBp",
  "key19": "3i8Kk9S6xGFH8NiG67XHQduizng5y89ezW1xvNumafY1tUXGj3uGE6rSDitwBqqWoeUgTHuZUmmVKzbJ5iCk2dWr",
  "key20": "3LLVXNkDu2qfaCqNsSdsA6Y4pL6TH9LvTXUcCvn9RkuQWvW5aTuy9nFnHLS1f5RodqTG3hDrGsbqUdTR6oFpQDL8",
  "key21": "3QPjsDFiUqozHoPgYVAHRyULtac5UEB4ViougBvhYRDUYDSEqeHcxoVpmPke3kSDwoLPTRYE9AGxKEBDprgzz6U7",
  "key22": "44U2deckbUa25G8VFn6vYwkKUWvxA2gdbTQQ5kvcQZ8NY31dLbY6dP4AkXkL9w7XZwatarhutvB7qzTgsSxuY2ef",
  "key23": "2LXssmtQaTyGoA7YCbPAVoWVHmkqqLbXqsQkUerXWaprdQzF7fSnASk1UBREg7ECykC1RFgp5aKM1iUid1fHYtCm",
  "key24": "3CMagQAM79RSB7QmX26ukQFZE1J4cH5z7j9yWfLiWY65RVymz1mjxtwejvsDLKGLMsDkrdmycAogfiAWemrfzf2N",
  "key25": "4zUhLYPRMeDcggWEHKNCtWfKhiQNqmNgNZh6JuGq2GPHJ7dHtajmFjbBv2kHbGp1VfutjtHrSmyPdHx8jP19pbJf",
  "key26": "4PgoQ7WDKq3EXv1LpoQGe82KmcJRJ2RuNGCAvbqLbZTbdtNwiTZEvSKfbRQxj7fnQoR9AsoNXgCWbWCA8sdiewJ1",
  "key27": "34cP5YZ6VF4sf8emtUaUbfgm7sriYjX793zybjWQv74e2GCqMq4RyZnHKvJXqZKALTuHuhgqNyG9aCVehqp7V8pV",
  "key28": "4agG8Uh5X272wiCVVqs8wuZiyBHEQFruYwbCEfiySgpSYN8eqHddGLtbSHkZPPVKjY1GToQuKwp7x3ZNTvNdWXWN",
  "key29": "4Xbq3gR2JtArfCnDZAuaGYdHLAQSJUhcW7aazTQaM1vRcxzPmGfGpgQ6zQvMVcdUyDdpXGhTEaFBE8Wd3DHNEKEp",
  "key30": "36bgzDmbWdNGF13AnjSaLL5sUvNhXbt5z6zgTBBuyJiyCgvLtCLfdfKDhhj53atnPyUw5iXVfSXF3kRiXxm6GsUq"
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
