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
    "3uVFKBMfit5qsodiVRrCkYwwoZQ7aAYAj8WPbr54YYFZJgCgvRD14y6kpVEwd7XnX91TGWip4EsPsdNb9Zb2qX2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxjhZrRHCvphAymmjGCq8amovjwZ1P1yS199KEg7dCAbzLX5vPV5xntRJinmdbL125sCYgHk9gLdVfVpkcUSRm1",
  "key1": "5J1yCMvotqruYhfX7EcEVbWNZnA8ckWFNBPF8cMWMRDnjWqrhpEeCQLBBCeaD2Tn3MFB17DucxQkUTvBggNAc348",
  "key2": "3pcUAppxrxHzESKExMNPBGZKAdJ2VkGTwbHz3uLaYugjhpqxqSvUxBmPEw8RfQrjpsokHCjndbPh7NgHeDqhN9La",
  "key3": "4QCt7MiJPNqVdFyMioePaYnvLVTXzTd7EsSc4Be7t5fzM9X3CgCFGbvL36wShbzAqWzZyrNXkyu1HqpQquB43bis",
  "key4": "wRsvjr1qFk9iRTE6gRWatWi1YNAgoy5Dv6ea6QA6eLhouQArkJNN2H6Rcxt7sUXFGkbycJgxDkkH55PNNmfXeCt",
  "key5": "4jgb1F9cDw9UfZXbrdtYnKakcjagrjj9WPa6vDS5xjHGFQZwkUZyQe2HyoYrK8UL5MoDWQ12tASDabUiMcXjUK6E",
  "key6": "istfECUrbtjgL6JeTn6ZtXkiweLr87UzRaPK1PitNxWyAW5E9d4tYqUmr2mVZ1NMQF7rwDifqNEWGxuChA4b5ER",
  "key7": "f72dQCiw24KfoPyPQ6twrwKLTs6v3JR3ahTAmCbeVK3gppUJhkw7yUmD6MMUZMUzygV8CCPRnrAFcsdUAt3YtXi",
  "key8": "z3pBv8HZtgrL3avPs3KCdCJmBYRDU9y6dZFRBuKDyzNmLRCGVUq8KJpor2HJ9W8nyjuAu4KAwmoPnu8hG3SAjdp",
  "key9": "64Pc8VLBjsBU3z78tccLs3mivbLed5qfx5itCx6dVT5WcEuAttXGvZgRSnMFEhxnARUbuZffZD8bY8QwrMXTbdBH",
  "key10": "3szn1nDECdT7SMWuMMxxmY8kSdqHvCGiofFvmYPg6QhGb6VqLyfrfEugMGXijqshfmZcF6rJVUFqqnLEg2dRY36V",
  "key11": "3js1fpFGgmoeZvWRoyg9rVi3FAcidw1MVcf79SZwmWnm789UNR7GnhdKvkP1PPgegEDUdc5bGcHhXXejDM82yzad",
  "key12": "4rbJG1yyXSMcfNSkbvtWTVRVHzbXDApgvCGr4sm6qTeN2txcZbY3meEjUMToSZYSVjnEcbvxWuWXoeBd6jcC9ppe",
  "key13": "5U4entdt1MgGKyzf95Z9woJm3nZKKkax8HPMjUKadiCSru7NmQ4v1RqYLP97XfRakGRajhkvcZ4wxDUX5PH7yn31",
  "key14": "4tibkFyeJVyCZYC7TF3RL7LL3ymLZhBtCJwMdyctib44KA4UFdts1xXL2gAWkyTEAEMTRz6sFoC9UUuys8UzYFHt",
  "key15": "5uY79oPuEDt7fubCcpYLbnANEwGhcn2ZVSJPaufzcEuqTWJHxxHR92QTenM3rVBG23oZjkic3FbX4V7XBa5mx6JT",
  "key16": "3ogXb7dy48XmfXALHHPF9jeAD9hSuoCgSyjtbkn2UQ7oUes1qFEFuN4SMyHHompM5ZicGmy4AidUSQjWAibTFCxa",
  "key17": "44jwkvc1Hsi19FeokBktFTsVEoUKi1tVNgjRex6LckBBGPENXbkr6zR8o4JuFyZoJX3eram36ddYVTFnFxvbEgKf",
  "key18": "VeSnbTKp5zdhHA1if81XH4GiWwfuE8T21Mf7A51szbogSp1ZHHPeX893wSAqXekYuXz9ZYapH19VyoHR84jD7JM",
  "key19": "27gTc5yaUEPxpFDVmQYi5qx1AoAfSnCbWJPwJ6Yy3WkcjARNv6NArSF6Q4s5Qeus2Gj8Y2oHZ5vBGA84JvKGLaxP",
  "key20": "5UfEKqvhdgpUe59K2BLcn6i3qrsT66uF7jnzh1vKazhp3oZgHhT9FnYWkrkuWK7Hq5PCjh9mVxLBDnsQSEctWtcv",
  "key21": "YyrRaKJ2imFHoGzc32FV1bs4bHheaqxhaGu7Lxn67PweGdNMEJxnEns6c6PDvc3boBY97yk9zindZaLsMRtddhA",
  "key22": "7Cs1WMQ1fPKrsEMAjZmqMy63QxYuQhE4u17qiu8Q5EZ1xgQWCvpYhgTsaadwGTkdvLVinp6hjREzNpdsLNg69G4",
  "key23": "gciPYqnNCvR5xvEXjNgQyULBHSJwiAeCEm6oV51i6JrwmtUmWhEvtZiMDZtUqS5GcN5RafsbaKTZAh6DoJurr5g",
  "key24": "FCofEQFjDrpFGaWNGEZwBR2i1NAnmgSysDjCzQtevmziMBuepw61FQQrkdZqVp3nYew9sNV5w1nGi3zW7FcLvEy",
  "key25": "37P1PPfGtz4zkmrrBhLMqEiY3kjoaC9S4PzBdedUjRqHUBoVDUEXByXAF86ZiECCU93Trj496Jb7y356tjYxxUyW",
  "key26": "ZBRMsjhEqN1hr6t2TLkqxiKi3Y3DuFkoJLkTdMufah1kuKsiAiE9GBxGf7UeafQvVdY5HYoXxKA2dCUEdPtvcoc",
  "key27": "TkZHSuVWJuZvUqvmBeZNwzKVBwSxJ31A6dfM7zgTLXiRmoPuBFzRggfLHRVbQe1e63G7WgwdUaJMS8VF1u56bBT",
  "key28": "61WDWsPBtRGPcGgrJG8QYNbuukMgEbC2GFC6mmi6p1xrKHcjytUUdto5anSacQGYv6i1aGs2CEGUH8qhbG7tUApV",
  "key29": "3ZBmmkcgYATRK91qXKQjZs2iiMG7fHyTDXeqqPaiq268qFRqfR27E74os5b7CGUdmiT1EJRpMG1TbKqkbZRRnyZv",
  "key30": "2ydV3qeFSfk9v1eSkxCBtLzLE8t8FEgrJMNJY6SwTvQ3ivT9ZDyAfPc6X3YEFyXyEDByUtswhxLd7aCGLXE1vb7d"
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
