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
    "3SMPepoEZf9dYnjKBgik4zepYHDaeK7CnfspSo6GhJ6N3ZixMiLUNcX1JfRweB1GrdCrMyGG1frqtyAti1EGrYj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDNBk9NsmRFy353bEwzR9sRpmXj6gYacM6VRuWu4Wq8Fc6it8dJkgn5LMBxtrAB2C89Qw6HhwjJkkES8rWJtWzo",
  "key1": "4HCkjczaQxLS2QJzuF6m3wxVU3pdQXSBMjJg5HH7QY9axsaQ8sA4kp1UvZgAqjPJ4o5kJXjW65QZgGjHpXnWx155",
  "key2": "23t8W8gG7p7oBZRfdLWKHW7H8F4Y9FU27kUWh5CApmF9jaun8dSBZkv2DNSXfWvYf877T11NEzitoSwTBNDPR2uC",
  "key3": "3VBsm9dZ7TDG2JpDzZxfLmYEtbdy6ivmZ1e2BUf9yuLafzL6ZrpX1xucb6jsM8ifoKxitbp5sYwGsu8D9DpD3zQ8",
  "key4": "2NuhXPNs4iuwCjnGidQwmPnhyhcLVK7zF1Gtq1xuZMVuVxqCzfrLmVKV7HxVaF1hmJwQa3czdMJjVwbovJ3nUqKz",
  "key5": "56q6KwaYyQqUNoDz9gkso5dMxjCYpNqj8dADmizXDLtaPhRiwuKNGKgLeiL8HniCtXQN4ww52Tj1iWWD37rJULfR",
  "key6": "3vJpkLfCZaAtjr1tQKy3MttZqnMsZ7f3FNiK9iKmA4guhpZr2V8o7B8rvFNtdizpripeP44rBeArUudwEXqc3io8",
  "key7": "3UN5bHHCZE6r1QGBKMpYJUz4TFRaBGDtQ5Tw5cbVeAmT1oi81FJEseQcv2ya8KHpzSY32ciikDxtK1v76F3eC7SH",
  "key8": "5KV7S4REm7jeCzER8ZWtWykKTfSA2SkSa7UDeY24B6cPjWsBEWSgNFpTvSv5zpxx4oLaKG3BpW1qB4TSCkzhqa2W",
  "key9": "yzK5bNU7yRsSK9rFWSMBtckkpBhe68XUTfmwpsYWTndd1HYgcF8xen4fmanaxTsn8WXGBYDFP5nFSB5vUStGJQp",
  "key10": "4KGSFjqqeL9FE7zGbRGPtYF2czae12WNMarPDQs61bsMWBNGwariFHNUp9WHtAaZTL6KWY6sVfM3CjuCmRi7zXBu",
  "key11": "5jY7my1Mwdoe7xAawpeg1yAG6Nh4gLXZv4bxbDm9fQJCSNDmQTgXJmtbpGRhGPG9QHMkzRseKE5qgwdW5idqTm8m",
  "key12": "2voWrBxH2JWsLC3DvDaE9JS7RH2DNcZdWN3oTMhUXctMTcAKdDwFvwVpAcfvWg1qAhGUpQ83wRWN9jjn77zPZzrm",
  "key13": "3JQPKLUDv3oYKmGmm5gVph5LPjABTmsT2TRtJyW9Er9oPWShFqSanrFhPV2VwFMt4HBscAmdAVy54JghmfDnHY5W",
  "key14": "5aAwCTvWXQNB49UGsTp2kzr8QbvBDhttnZ4dgSSfZJFwBb7Z1j7U3qTedLByNX1en34DAQ1bhJ4tnYjNYHHWJg6S",
  "key15": "2MNmkYMm1itxAAvoS4fdajjcV8nzHkZmCVJDQgxp2UcWDfPEhxvUqU7UiX68kpP8B9ZmxvRx1qeArCByB6zHvY3S",
  "key16": "2ggbsm7pmNKajDL9M6vBRfSswZDnjS2L6Z3SysAG6PNc72GuPwkK3aRMDCVBkQZMpZkAT1uBrz4rS5S4CaZgJATe",
  "key17": "tP6aDgmjATKmksvXUYCjRLf4bevDrGtkmXmK9P1JiS1csQcdBX3b3NDgFu2GRAEwjqhUbC87TQzc61MwLDwaWmz",
  "key18": "5ATL9wwVsfqpatbZypWJiN2iBFpF12RCwAX87SpQDefpJG5jSL3pUkp2tix6XcFEnqkDcsf8GiKk7fa9FYctV35V",
  "key19": "4fRgx5xkh32AFLtdAmEm96QZWn1o5yRYyR6yt8KoyMDBXwp4PuXcCpdXR2HuZvwHTjjgNoVBXehAnFc87YzM2Rt4",
  "key20": "5Jgs1UrNvYtHmxnbCLisxcPgrsT7pjKw4nnmXXkSLE3XxLBGD4v3uiZyY4KJKqQP9bfDK3t7Tv16faom5oYYSBy7",
  "key21": "52Kij41vmwvW9HLgzKU3Jnfxb8WRFmnJZN6dUALmZ5Gp6fkZhueAD2X7Vx377ivHrDWCy9RZw3yx2xueoB9a8XyE",
  "key22": "3xgqFY8KxMEKM3a4ZSmchZTWKst2vpF1JBjUV1feGpjvcdSHrAy4Zrsa2yi8LsCAQyexzia67joU1aSyZsaNjXDv",
  "key23": "MmzXNGuSQf9rg8aRtFH2eR4ERyh6Za5fZc5YyEDTpNeiNNH2UaUC9n8wA76mot7rEMfTGzDiEZvTuPkno1hG6SX",
  "key24": "5oSaUeA2VjLZ1m5AcUz5BAgZPKNB9cvrndNF92sVekWU2UEQrqhtkm3mVAUmMcDZEYeU5mhV2yi3kjhaiu6gyKPF",
  "key25": "3nRXT9HbMUVp3mm5F3Uj9i3bw7sv173kuoZkPKGTHgJLDiYCRju1XNcjFdbSbbEGENfn5WbKUEJd8Lf1LMFDpaER",
  "key26": "3jhKQToK6smDnUSyH72vXeFoB4AXFU1M7z1uARuhWZKBbhvLqQbYeFjQU8c9sTnRhWYypF9M9rM7tmd8gVbXibEp",
  "key27": "Kto5jAuY5CsGz8p5rKiPh5GFDqTTc6ACwyZjVGQzxEP8qHJpic28cbFadVLvrSDRLMn95fHiaqjPyAtijLfCnLo",
  "key28": "655sEQ7TmSiP1LyKzJjfVxje8obvWMcBa3nkLLPoioJSCeXj2cHN3nzJDptRsXBNv3tDuBtCUmbdHsuJuEJciNDZ",
  "key29": "3XncQKhsKW2MP79TfzBh37FpkPUTzyQxT5kM1ZWkw8cUw9uLNC3xVWdGg8SeMnBAPseQJsCf73Prpm25f9x44WPk",
  "key30": "5t1Lkc19cxGkJGWRV381NYrnKxhTpmnARLwNTQ7axEaFxaGeGHwktgyQ2bKFztpbDiNXaaXsstbxhpLJjiAan5nr",
  "key31": "5TkA8Tkxv8NPievYRhthgQzcSkn47evCx7a6tnjakZZmgPdWEymAgJ5m8pkk8Tc1dZqLcNjinrUh4vdtCDzFYCE4"
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
