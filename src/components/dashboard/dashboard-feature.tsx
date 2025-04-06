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
    "66nkshffqb4jn3pdn6GyKNuqRJYqTGi3inWCiofgUqmYQoas2E9hTyoGpjoDY2CLLh99Yt5CPHoyEXohJo2vnmQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GCGMywmtdEYQHxXgQXUWwC1D55kTubAs8jaSxJGJ372mX9brGPbDARpPdFfxjJn6tPXR8LVcjvudQY4GAf5Lsok",
  "key1": "5Hs9H5aS2eTtyPWwUCW6VDanqjdVA5G3Pmwwja5mzCdSquKVwLbaARm9eaSc29c1ggNJ8vejtAqrrVmBLZcDbWGH",
  "key2": "3fKft3VYfm2uUUpPdJqLqukZ72FUkeSwxz2kmjmUugVhud12NRkq2VC64Rw6rAEwpgCjKQEe75u5B7Dp772n4UTM",
  "key3": "4yj1me6yaNpUmNV5Qr2AFYsSM6fpctkJfzHL5Jzcdw4fRvzXN1mXmc9gfoGYAEmiQpxVa5t6Y1FLKKPxd1B8zEYF",
  "key4": "3464imb1aQbZXDujZsQHzRsFgngsyLJmMBuMuA3wb2KXeJQZpqwH67XHxoHisCSBBgLRb36YaoF28oiYyes3vXex",
  "key5": "4HpHApNqwkvGqc2pYT87jnKHyKD6Fk5s196HHtVbCMDdRbdaSvWBAK41YsDhg1R9CUbv6rLwzVJBqXqPBWLKomvC",
  "key6": "3sDdQSEx4D5ToQn2BWskLgU34zW7pDqkqnpPWSx7coNB1YU7XtN6XHtiVy88j3sxuXoxorSXHVqZX3MwFZK9KrT9",
  "key7": "59WdboZ2Tvh36n6gQ8tGL78dKtafn9Uso5HGK1zuSedsAY7D897CWmvZh6ZCF3L7ukjhCkdPGscbKNhN6d3sctoh",
  "key8": "5Si2K7QQRH9kdB2dThzA8gQY1TM8csg12gvx539eBBUKA4d9LvDnGW2SVjamtor5oaNXqo4j24pXyyqNENa1cZZR",
  "key9": "4geHwQ99oboz7m4mMVmCf7taLwK9noKBKrrBxVghBFTZKXQuByaEynydeDxWk8bcXrBtFoBNZLTrnmbpoUZcR28X",
  "key10": "3nHT8LvAkizrxcBnTitEj7D1EFEAn6FtmbTsiFnKbF2M4qJ4TT8XEXJenWrUFXQFKbP4Gg9AmDjxeiBZF12uu2cJ",
  "key11": "4oq37uu8ZCzCoVPorG8hofoeNmpvtiYQBHQwRZo1x3NcFL9ifQj48FhfePs1MQazdPbnHDLvK7bnFgr547orJjpd",
  "key12": "3SsGTcSyHJ4KUw49smja3MrUdurYNa8gk6buXXbrgiw1DddnT7PfkjHFcbJqRv5dfmmYxJQ5sgPrvZ1VQTyNYHtA",
  "key13": "2Z6yk4wNhGx7khzjQfF4Y6ejvYVDQXr9WHvkWBzg8Pona2sMchsAW761LeXbJbjW1yxXiUYtSg8g16ggcnyZf46k",
  "key14": "2buuUQD5HoaHS1uh5LRiB72Bq1LJnpxWwqAHqRpuDDfQ7ZnF5wLnP2AYhLAzaoyqou4BfeoDsgoxs5d5MuR2A7sB",
  "key15": "UGTBJYDnKfKn2GWxCEKDGVVg1CqrVRPjbtDKK71iDHiNwj9T21oUYV51htfaadB5NgBq2sA74C9ytbAUzWkrcM4",
  "key16": "5YVwYuExsF4CyYzQQbx16kej8e5LoisNc7fPFYCQgJSqy9L4qJKcLniLvLyhmtVHxZpL6xjqRZsLmf2kdZ6a3LYv",
  "key17": "4tBm48f2SnG3Ficc4ifgukPiXSdC2NmfzZts7QQu2XFxQb2U5TKLLMQ5veLujWAsVPYp6XTDDKivQhMGxmQvZVeo",
  "key18": "3BcAhrR15PsbwopuAV2JqD18Zx7ymUB95eHXYTmp6f7u5dgvkzfWvzDJQ24xS5uxrAoVZmbg92xzKgPgfEsHF9V4",
  "key19": "4YtDRig7Kt5b75nJ6ozzyvVDZpMhN6q8J2JqoVkuh17osUt8MncUZnjQMgUdwgTR1AgQMSMn3cCGzHA2kNH1Cx55",
  "key20": "2jtP4QrHm1JzpRcr7LnzEYTosXRx9dhLimnAvj8pHSXvmSeMFYuk1e33NrGiVVMYBjnwCTy65V6AiE6h66PUp2uN",
  "key21": "4PP3Siy7cRr4NX9qeaGxw5Zzvqdhsrn1tyxK9Y5fDsHuxoiseNT3PYSqaG4ydNHsxwowmdp5yBKc28Z9vhk2V2kw",
  "key22": "4J7EwDytbmCWgNzTG4dGQuvaUCc6c1juup3wetsKLFBzQD5g3itEgWojFPJmVEsSvX1BhgBaikfrj95rmHAAJ7Zt",
  "key23": "5MBNfkUjXKmWDh1hpNY9ixyKZZagLAhMk94encx8YNoXot15EiL68nPP96rCbbvNDNoGj5KaWoFcRQYJu15Zbov9",
  "key24": "2BeapMHur2Trfy937QFt6skL6SGscmY1utLkBmS6rvrP6jVorvhUXYNs3Ep2QwpGkkHEZfrPGLgZ9FLsqvf7TTh8",
  "key25": "29XtbuPFW5ytMyfzDLbUUodN8x2LTt8ZxGqCTLoHQCT4iq2z8L2fR1PV5mFgHzJKcBEhSo1vWW1yWitHznmmkFZL",
  "key26": "2uzq4iZLXRpKrVcaBRbvPdG12tQBoPom4tEYi5XoSCr5XMzrVKq1DcKoBqhxfdtQWLXsbZQ6rzGHv7uXoGuxZ4MQ",
  "key27": "4MGJbmopLX7Z5yEs4WBNT8gxM8PLoSnRdyVjt9JbPPXVEjhhEfq2iteHAHuzGYNhxtGcEqDAc97cPT3RXWbt9Ucc",
  "key28": "3dF82LBkak8DQfvZerfC7JYoyBQraBASgzEk2wB5D3uXGz3gNJezd2gjDpVhyBd3eezLYHvixPyoZrVa7XvhGygs",
  "key29": "3CdHVNw9i3E6uBXpAK9QEQorRqqW7uNfmRZzpVHCDJC69Ji5g2DrsLNg17Yn91SFysKwzw5RLS4CkabaXofVEYmt",
  "key30": "5YUkadEHiCBNbqS6EfzrMUypozKGydysU49fgXdCG6oy8VNF6A7YbAECVFRJ9siuvuPB9PdUn3ZLGTNhnCkBKrij",
  "key31": "Az8akaRCG4LR1wuZnRdVt3kuKEReSv9KX1GLYDsNWLCtEvfKEcpu1sK47bhPqM6o2PzddG6pgu7MWXeUPQ8j9pV",
  "key32": "4ypUDmBr4nB9DCcb9TnqjKitnE2qvqWpG7znnzPzVYuaKCD9Qs2TdoSvtQsMt5iagsqfHs6Y1U4UJsajr7THRniF",
  "key33": "3dPCeBJcCQiNRZGfT72254rrzN4zWzNeDT8E4k5vRCzWDRcybyi9Fokx5NSVt2YzefKSjRJLnTwDQLGVhSUdwjDc",
  "key34": "2qKPkhmfh2p8ki1qwAMYxyg29VM22LTUsjqUNrGwjan2Qw3vUHfhgK67iyQn7oj4m2wFMTQ4AGaGeLnnBWK3GBRm",
  "key35": "3wNhKcB7Xn6k6W14Nrz33GUuMmBV53DCP6p9brwqmKugxqqoUkHT2qrqvfptg6gkjVSv6Wnx6rLZcVNsjpBAdvXF"
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
