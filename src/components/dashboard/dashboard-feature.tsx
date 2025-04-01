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
    "5A9HWRhmD6LQn2TTXLfGbmUKozghBWjBtkF3iNUMDwR4zWJBnmWwqpfTd5HF6VeX2FF5JqTUamNzPtFjKFVA7TGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i2exxAKBQSdZfQBv296QmSBPQikM6kYriE6ASuoT9EhiCwCR7UGw6eEB4vEMs76VwiMMJYngepR8DQMr7yEMfad",
  "key1": "2csXDNLbmQEDjsWfyQtU6uXevJSATncxhXtXbbLWgtWPr5aPwNsZ7SR5EWXoYFiv4L8NNUBWYjGZuHPHaG9YAnFa",
  "key2": "3a9pejxYumdDPoQA9D9auyyKdkmroVPALeZuNG2yeJwV6dNhhQvu6y7EdbHvABvUA9MbLda9QYv7bSao422bndfx",
  "key3": "2Pz2GzDJ65UBKuL2z8YdLC1jsfiD451ZLYkcVbWnP16dNqhBMpRLLWrmNFV1t3cMoqrK6CUX8DcibeeRcCFgCWBE",
  "key4": "5jdE55MnoXzN8dVTRhqV5ohyu5Q51GM9zNfukH4URGdkWfsqPm7eaFrzhHnNJXmkLF5xxNCu2x6MX7o86xaFsYb5",
  "key5": "23Qb5Gs68vtudkzrsp5sAPcKUKNJQkmckB1dd1s4Y3s1ZQZLe7ZvYWxbfrfsrCErTo7zDqw18eh9wnMwfCPgqbYQ",
  "key6": "3GoQyyNB2gbGtKfb4ky5SZkftedg97T1dYHoDy3jxS81vuFePQQq5nHDAQETkKCe2hEabFbLLSMfHt1dGNXQh3sv",
  "key7": "2BfXt3znuPycoe35RXuJPTCePBmZMT8cEBpLtrvqNfqoTXxLCcqLdgfxt6kHDbXZV7vHJXUdM6dULdJDqWfB3DM5",
  "key8": "23VUnv1g83Be1KdgU36gT8hYHeWCYPdnKxcr6BLVmmXegTQaoqrxDxeMzaSj8yEG76o31GGNqSrLaZkJJkf6wTeK",
  "key9": "4yoDe2ttXQH7B8LHqEuk1Ydwq3gPoBLrmduC5FeGWvn4uXB74UoRBNsV3bVvTxyvR3nFvqnW1R6EYKXeVHRcoXPB",
  "key10": "4gTaiEQ1qNmfpVK2nGrzBJCJ5weGitupsWR6t7aKMZPkJeWG33hfcPidjjiG8rM2TnY944UhbV6WUvkQm95kGz2g",
  "key11": "5uwpPfnZ6SVXp2C2aHB7kutH9nTYHXTxqzNPPX17iTEwQcUMTN5AeChFYUcSJMxVNypMtq2VxUiEB6r3y7YhxUKR",
  "key12": "3SQ1U49VFdiTaTKgrLW7prjCBWa5TMzedCTEUiXZURiCJ72VXNK3codaqxgC2X9sR1LzBShZvJbcJsQShJt6V8bd",
  "key13": "2QkU75qYyWMpFYsFiZxdwA3ie67qsyhsLwHNFJsBTwRaTEDrVm6okVMWZ8be9sckpKQJMvdWyZezgAQ3qRX28Ass",
  "key14": "4TvLuZrVJQxfZteaPyUiaqLJqESWBTGnMQXS2BrhEnw7JodzwedgdDSMNTYPXcomYeW4UaSRJYJrWAY8fnqsaXEn",
  "key15": "5QUH8LQ4UxNEeML3pgB2keK16RStEqP1zbfR8RMNUPA9ncUpSB1xMLQYsbpVXApmgrx2jV9ivj84c9A2375BfT3m",
  "key16": "3bTHrqERiaBAwFoGjLxbCrjs8zHFycgjXYJ4E6gSDyTZEj3Edds917YAXVj7rbDn5TdBq4pR1E79KLX5WhJJBtD7",
  "key17": "2v98LvdVNtmbCb6SxMuwwcFDopRYWSXBLfyeG6CWnJfBt2CjQZ1nrmnTi5cGxZgmrEevFrLC5Gwh2Bgkwi3CXERM",
  "key18": "5FB4x9GcqoCfceLpoi6ucNuEuQFeouDp7goPz5i6v1BEqajck8noHPGAhgHGW7Gs2iQkN7i4jdYVNP1PqpLUSud9",
  "key19": "5mSSGtrnzH2JzL3YTTFXQHnYbcFeHvJbZJKdPzd5jPGbbrmZ2n2BiyCn9Kgxdt7khEzakTSkfizVQzxoTuch4xqG",
  "key20": "5QFTJjRt6wdgtxDziMWY1WbZYkrr1oqNYM1BHtBoqeBvi36aRj5dg4PHtJHx89Ah3Vg5DQGqy5bknqSHASGmmNyo",
  "key21": "4BPX2kHbyuSgTBaRgm9mzm1eUBg8xT4k1g3pDvhdZ4Ek3g7M24DuXen6C4u5ywVqb6PrGRDveQug1k7ta2BFHXAo",
  "key22": "3hUYPxbq1zft7WmfzHZ69FAL2MceH22d8QsFcJzFjZnrftbvqzgEzHAKJ9C2Q91nWnipfSNDv5rQj16C8iqEf7b7",
  "key23": "35CTyAYASBaJog49DHvUtAYCE6tcKwsby7cquDa93hBfvYJELJz53uaSQ4ynTV5ReLu4FbXgDDDE5TbGAQFeE2wj",
  "key24": "2WFECYA4nTpd2QK3Sny3GXPX2NS2VTwZ2DgPhgvzWcZAbsNbi6LxcozXxgny2Ucc8xdTyWrtwR6tTYBNbvbTC4sw",
  "key25": "2xdiNvuj6HQqixDjxXv69u6UbJvCYMMVtABhdsMwFR592dB3h9fBS9MRpRmzikm7ncNTiGnbsoTErb5J2xeJ6YqN",
  "key26": "Tv7LkLbnaDNDMjtKqj44xxGkyeuwP2Vw2sGZBuDxVs2cWrjYAmBaAYVJqGr3kccFQv6cLmjTotCs84bQwyvUGFP",
  "key27": "3cs8axdzatyiKtC2N171XB9Ez8eEVEzuiDZAWxM62WdEKoiLxnk7AhhVksPUJanFZqmKyjJN3jA9CWsHAWdvX2zz",
  "key28": "5FdhTiiZR2q2VK51eaHWNKZ9YU9ZhpBrnyL7YwagH62JnYCW26yKyRcwXss33s2yicjCzbPkt1AjFcEtdm8uWEGw",
  "key29": "56TbcEvY5u1zMVRPEQt5CXnbWGzFLG7527cjtuThMvKEgVxDtjoq4uWEZRwLtgnxJmV5sGobLjY2kPMy5UYu6pwq",
  "key30": "2gfaLucyEojPMSwpfWN35TBjh2LFGAteiycVWEywjVTBRMBnAeBh1hBZw3XPGNqbbWxKUrAvm27Ag3uu1tCyBoDq",
  "key31": "4fwabbvA5wFhvuEYfof1F5ASphyRKdLfN1QBTWDXySVnsFzqGWPqw7ku3qiq4w8fyMSAQtAYhC2wQHwiXqpuH6hx",
  "key32": "aPf7PHaCrkYctF6uELoJTeZffuBcs8WZ2M3Zvgaf76on5NMZYZJLr7Wxv6W3USG31pKweL4TMYfdjhgqe1muEC7"
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
