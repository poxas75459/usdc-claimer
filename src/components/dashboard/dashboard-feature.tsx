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
    "5dHdYm4LG4VtrfzV62H67DeWTLBSfPFurpTaGC6zjDdVqaHArwEEnX11uhCrG4kAGJXzfRWBK8pUuxsyE3UDQis4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pgmLgsE45RrVqWWHEW9utCv8jyqG9dfCcq3yq6QbnUhGEpWRk6B4fNjALeTWRsZ6MHXbMqot2u7R33zg8AQWHog",
  "key1": "dFW9Sx7o4kL68yvjo6vJZx6xh4Nt6sYASh7aPh7u4BqGWETLWjRNhaqAPHuPAgQ7i1hCPALLVQYV2bWnzgjidD8",
  "key2": "3aCZf4Agiqh665rQJ7eKuQ3HTbJwUy4FSfL4Zf7FbDssp3y53t7t13Sa8PM8uFpm3yWuo5p4XrPYqtk472P7RW8",
  "key3": "5XF7DiLDCmhaUsioMrGxXtBEd2AbhYWPnuQ282cAatDBvt8UYFE8v2KnUpoKjgy9uCNH7RPtKFSwC6obBN5yVdiU",
  "key4": "5P4v1G2mxLA8rkfbjsbnx4auqtguGwYygtany6ar3UWPx4N3BaLfyMwB8NhBTE6H95mCE5ANvAK8bQ6mPiNdvgR8",
  "key5": "4y1VPDRKfvBLSAHsEfVdmofjQmPQNfLmjwNGJdCEWzwiaGTmPq5K8Dhjjo6sMAJKDb3EWB95pXAXrMddtxpsq29t",
  "key6": "46gxuzZ2UaKKizNMv7gNw24pTv1y1E3JgHPo6f4hAZZdfX2RMhTNLWwgZ1ddie9Ts4B6BLuc2oNtx3kQVnaxiSt8",
  "key7": "4exmGxrz3JTNtASvBUVmHotFvBYZ3wKMynvKMofYWsyRvu18mg4PrhQuV3gm2Vrco59pc7E7twRaH6CooJWEhYt1",
  "key8": "4nUEPJ9KvsHW8fcy59Y22fnrcNct6UMaCFakGQbS38sQX9fVAW44ecYT4qp6zEZwQQ4C8x64M5MwZrjzUeyV5cCG",
  "key9": "4JFGArA6vAYVab6PgFhRZxtWQ2U8Bf8bRRaqrUPmiqfVJgAYgGxS1nkgezu9CfHP8M44j5ACJHvswQi3mbJQyBpK",
  "key10": "2MWW3rhYYNuufBZLcuH7hBWhQ5JiDncoRLDKr2rUU8pJi2pfj1sZAmSoyskB7uB6E5HAaxz6XGpS72tHtPpXkb3K",
  "key11": "3YgS8bNsYwu21x9xauGAwfpNWaqgc37pt4BovNRzmZ8haeqPuPa4V9VFkRhWW5nkvmV5WNpCfFQUdZ6D8iEbuT9Z",
  "key12": "4fuWUfqBqvD2Ua1La8zpnQB9uRqQpQGNMAVs3yYaoAwsehWeQF65iBDs9QGNnf6G3zfaykXszHU3YYpv81SzVALi",
  "key13": "3MLdD1tbipm34npBAJdn1rbnEwPc85R7vKRfavbPSrnxHnNBN662W9RafhQNwJh2Ce15tsrFDr8a9AHmWnEmdpDR",
  "key14": "5jBddNzowSrwXayw4QNr9M2yBJ6dXW1dBev9X1GGyboM354g2xfCxHCarYaN35RzUYQ4vuAMP6X1EGE3MSQ1xf4H",
  "key15": "2R5bM4UCLNticC3Ny3h8ZmrZTXF1nMgAHhp7er12K2W4TDap6t7sJKsqZiPMA7TNzuewT3x86xCHFrXQVjAYy8eM",
  "key16": "5mdBvH6AnJpYgfRPrrri2DjwGhoyG71cxiUWKdMw8HQAtzhhA5jYYrtRznB9PEK9p161qMQrE6tAFWepJBrKXKJA",
  "key17": "3ukpisC15NLA9YraBm3GHLkJSh51ihuQJjbBn5hHTPB6cNiEH1LDat2bNHUTQ8yXJuoDxuG3tzjdZE2SWWszukEE",
  "key18": "mnwV8WDEMfWF47ta8xN4wecvF1v6zRSDbMszpYn5bZQyaQVYUFe3xLySbkVvdwc7j5uWZbPXhV1onHgMGL1twsG",
  "key19": "3euLJq7BHxHxmHiGoDmsKAwQf94s2YoZ8MmUc1s2nArCabPe76QxmLyfg8GykyLgkyVtLJiWjQAD2WKKfbuZ3e4p",
  "key20": "2DXPhao5vjSFbj8fjx5AMViYbzRRyvtSAamS3wcY2ZTf28YFPcnXZrrcZs1ffmv3Qh6yjpzFDSonjAFGysraBNgD",
  "key21": "3CeUY46ppSJLMxdbUavVUce1RepMKSTcQSsGoSfVz2d4S3zwzPB1QfPypg887CVHjmPcZMEqpbg6anHNTzM3WfEc",
  "key22": "31g6bA1uEkiVcRkGRa5wgjAMh2dYtpfSB2ByVLyiWKqp4CTKeNCckK6o7WexappSHbQQo7YLom7PeSpFAjadLN39",
  "key23": "2TBUfHmD7Za1DfaDjv5PQkYrNUbfamktEhZFWiAt3J66zbeZqyKA7733GaE4uDDmCowm3nbT55zCfovikkbaop3z",
  "key24": "5LW7giic9bSusbjXzSRRN6kS53jhJBXhu7FqX5FuXE8fwVvqGNLTP8tWvknWoEgpDsjfFsm5fEzXwxoEq5sGqQjy",
  "key25": "4GB11c5x1BnmepvZRkn8KvfWpuLkMpJMPChyR8ka4gJJJS3gz8HuW8Ee2U5ek5nWfjfihMKzXzD1Z7Xe5Mh5padS",
  "key26": "41xeCnK9TvpJxHPXJEvM5BTrDjEoZHNEhZKuUCNiKpDoTjQ7Hij7f7PbMA5kryPatAzYneRGb6jbBGXdbFiXTt7z",
  "key27": "46L8TmpBTY4ofuH8E8PW3TkE96CBTZMdxG6d2gsfcdANWY3bXBdXTrbBX642DR13L19KgQ2d1qfWwTWDi7n2cEQB",
  "key28": "329RVCnXQYYQbwdgudEUL7LMhe2QNRNCAugYPqKnWFPuThVzNBpnPFA1peod4DyGW6fPkdPWPoaF3pVNhzxF8vww",
  "key29": "3Wf2xYYZP9tYGUmX9jmLv65NymFLfvaKLxAoX84NZwLssEHAFmCtC8dQYGsC7ZLUTs7GVt61hetpjGUuhpzLvAgL",
  "key30": "3qsTN1LHBta488BqJxMmhppqj2n5fBkK9pohmpETtRMW21AJsHywkHeViPYamEHCUcJmoqA58D2RnC3p9Zcx8ixS",
  "key31": "r5Rd16sk5We3VV6JN88zTZ2tuaAYcsPQ2gux5AZmn53B49hpJpDzseJKP4766U25bDfnQjimdx6yNL8yhyKEJts",
  "key32": "484d2SxgUS9YbcWWjj2u7py3fDwnPp8zyXpEuvA3J4AVuLWyBjWJUe4SzL1jH4cCeCAj1RVFfdZBhHKghng1AjqE",
  "key33": "5mfUgZq1JkJpPhpkmEdJRS7vuX7PZN2K4s9Bjb32hWTzAJzLZdqJDZ3jhMs6pFFGCWVAsfJVHMGHbXPXeZQiUu3E"
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
