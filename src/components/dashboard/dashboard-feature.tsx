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
    "3tyc2sotkMwcpa9D5kZHAzZPXsq4vAuzZpn4CUYBUgPqqjHBnwbux7EoXnLQghbmJJdpKEK4y4oLdfo4hwTBbWRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Pui7MhWYyjsJpCag7pLvRM2mi97a4d35TcDZJ1JnqxpMB2kZHj7Rc79qNEwS7RbQ7VjYwrwezkCQ5FezQrX27d",
  "key1": "5w4FCsRwNnqvu8b3GuB19fioE87mhtTHFXCzQ8m46HDkarEDivazSjxNL9hzaju3w61NWpDUPk9CU7tppx66BG1W",
  "key2": "ydBr6oRnEG1Abn9kd9AHs86XhjnWYTJ6maXrDcxd8Ke6jiasNyjJh1xqKhn4QR8KfyxVwRi7PP7dJGQMDnDcquV",
  "key3": "5omjWeGsB7XXoKERecH6zPGJV6kcSij1dLTmHUVmv4FPgUh3bXeE77HLwyp9eGq2eDRV64VNkuhBsuB8FA4vKvG8",
  "key4": "JkZMcp5QoGzrxsCTSD4p8yj4LnR21U7LAbXAR79QbZDqodUgp1GJVUaksecDaZWzwnUHJD2vhWcyJ2dYpkbuSSv",
  "key5": "5DYVYBYSRdGso5qd3CacBQQPAWdqeShYVASLtdfhHYAfP9xdxC554ZZBsJ1iyaA8q4a1aRqSCp7U6XsFa5PbJSA8",
  "key6": "29YqZg7BGygxyG1fBqptfvXuUUkVAQEQ4GXFAz6fGtFMxjsyYw3dAvoHbNjZqqC7aRDiGRHeXGZ1XAB2s2Pjo2D8",
  "key7": "27S7TZvmLqTcyxHjCsqENBrUzqU5vYm2HjspMEUnNnEc5UwgpaCifpQKQ1FC1NGr5HpYPdHLYgzTdGPDTN2EftqK",
  "key8": "5ctFrasxeF9gSaHciVQtNYwq4atcs9JH8Ykwg2spmM56Pg29ogyBNteXrrKk4FVzM3y2NK9VPV3A9JhRHe6ADsui",
  "key9": "JxP6n6eTUAJvXuzHqNErkMJTjFJCm4SLtYL8zqLGiejEKeKj1z8qWXX5x6mekn8XywqDc8dgbMBai8aDLKzX1tF",
  "key10": "GDPRWbwoDNV65tB7eVYrYPQY1mMzMsB14GC5j6yfB8U8pgvv7SsknKrxKnbHXeJeD3FF3h2ZvkmjNZq1QjGYSTi",
  "key11": "5KUE5efyMvZc8tAGUrRmsGuPAW4xfk6r4Fvk3yKwqRWQdmQJLYAGq2XpcU7s18xeG2jRV3S5HSQD6p6hKtJfvcDa",
  "key12": "2UPDoX7mBr7gnYM7qvrvkrYhj5xom5tvYyQnAyqrh2p14Bx9xGmY1mS7kM63MKB7iQDDDoU6uzkW8gff46NUxS9J",
  "key13": "nbuLAtLT2pcP89zvvxGSQLZeYaqATwdFXvi4Q9yKucbyciFfuZ4cChM6L7xjRaBKzibhwS9koee4chCGKfJfqyo",
  "key14": "5dQNap8ejbWuUaQpZFrENPTVw36sCY2qvvZxdgNoQeZ5uVD5Uw3P5n6iyP98vJssvExCgrcNZLnkVqLE4ktkYx8X",
  "key15": "2KZqxqNvGEkvMKEAKggcNnTShdNTinWH1ph6yTdmtWpbSQZyVAQH5eH77kxXxfRor2FTpXUZJPur2tPBaacfA5Dr",
  "key16": "2aMGmkgiFUTJgFXJMcj6ZwZ6PCxVnkAss3BGcD8mrHZw4dZDK4P3Za8xE4a6F1xhP3HrGYngMvbsEepxCuhrUZf4",
  "key17": "3JnAPMixiYaUseP4ZuHUgdh23dR9Vf8HVrYmXkc6WKDwM73fXjftLZYLN3exRbULsUSCkhZjAtFrLRsNhnAmUMDJ",
  "key18": "4D2imx3kkkzodf1rahB1oFcMyQbXvauKDCcLF9fdosHHDjHXSpgAcdr7bAVaWJtSwhWVdLicLBamFHQCfYek9Uvo",
  "key19": "3KQgJmsKQYaeAW3VXrix76aGSX8g2384NWFpC2NHCHiE2VUWCcCbYNVX4CyqMA12ME2mjjh7hnHf7reCgN7iLvF9",
  "key20": "3sk3gJ4FZuxVNW3f2sMmpF2QucUMDTCjrkXqkJy3ssdeDnor4w7ehQz3kV2UhraF4eSiv2osyJN6sBrkKzHQDebs",
  "key21": "zg33Q9Gbhoc7g9DymBc2txzBSuU38a436dNB96UwxaFJX2BBG7rZknKzRWzfzkMA9uycUQ8c8EiQ7H1sYrC7Tnp",
  "key22": "3Mqy6NiG4HgfgXtSnSdQWDNiymCzcrdjBNTQLbTC1DAKNQAZ5mCzh6DQ6ZaNvTZuAVzxR6tFQHiFRTdCXERyFADp",
  "key23": "2cdxphJRANUhAbc5YZ7T7c1r3wp3TfvfwYFn63VHBaexRjRCG7NQikS2dHRA2UpNGXE6Vy2nfK5ZvPgdq8e7pbHp",
  "key24": "2aDthngm6sNw8SuJVNdimgxvm9vQnzYMTL47Un65NzcoJcH8mW8JUZbY4cQ8s7ZAzPwJifpN5Y8xGwTdeKqdMwR3",
  "key25": "2FxThVyoZUUVTQkrmKDg9Aq2ZPxWTceobQhmTeP2iiHkd84fvysdnRpEtXJzzQ8HBTRasM2r1CqFJKhQiFHPPL5x",
  "key26": "2hSREvaPU5otCq5CBsAHz4xcFtLX19bNkLuxPeuj2uqgaFVkPyvFCk7u3BnjbNKEuVgMcooyEV5KbBVXthmx9aef",
  "key27": "3gSHEqwNkAxnzrmf9A4ELTp6VyNc1u1GQidGPeth641y2srJwXaAnJJBmdFaj1QcqChw2V1kjKVHWyzjouJRxJrZ"
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
