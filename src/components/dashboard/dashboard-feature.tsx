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
    "5FXK1tGnXtDT2222DLkeppLAMSLseDmBFiyYreevwYtrL8owrxKkw9wC7xVyWxpeKn2wK2zoNzwgJjHSc8wEibK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gD8evJF4MMzA9goPgCsU7QArZCLsA2F7J2tehjfv9nuF3JcK4pPWwZsMUyXCmsbAA4Uj14hS6jbhfcEovhfwpbS",
  "key1": "3ypmcb1WGLCk431oCuokFfFtFir4rzXmj6VAA7xK88d79wagNCCN1vEVcFSRwYp7H3KMtrbLhTFxLMbbf4y44VUv",
  "key2": "5ZhCBocp6C5Nb4RL9yYoVi6RFfALX2L4driEwVn3oKvaDKMNrq1HEPRuzRJDyr4zjBKH36SdngYtpUkVzDYuH3AX",
  "key3": "5533hsJYXoF4vQX1191prdPdyqifrerqy8dre2xdkRE7EWD2tNDBfrqjargkdACNYCYAYYupWo5LrK6XaZDB9Y6J",
  "key4": "6LWd1iwqADyjAPa6f3iV7CwsSJgqSymUCfsJK87txY8RXngKMvn2ywyLay6PFTW3dkiJL4g8AXho31ABV6Qa5GV",
  "key5": "54HecRGapm2QSt9TKHHgEoNdK6Yeph6umSxG2vi6diDNhxRqNXFbC7Wuz4GhPXLS5JQ9mSURjVMw2hxZtHeq3f5x",
  "key6": "2VRsDX3u49Y7musUQjAUHkpoRF4HnbPNSqRd1uBFeNTTFDiVWm8apS5trm4ttf2WX2YKPkFgjGiyUejdLckKT3co",
  "key7": "DsjZssBTzUyqXhDqMMrm3AFjekGUpTuHhz3ocb2vquvAjAJBSGaH5ZaFB3YgcGeFgjc9Qf9J1sEGao6NuaUnHGj",
  "key8": "pLvzsd63ue9Uci27E5JYkhrbArpsJGZ2BvAYrKJ5RuyVZLQEEZ7AMs5tGchVpKQCqTEn8t6NqvtunvBAXDA9eYq",
  "key9": "2Hvfyd1GFauPxeurTeBSnWRqCpQpEeCsA8L3RWcW2VWRd42q859REF3LUGkWE75JEC7VefZRG7J31peb4MZRq2Es",
  "key10": "3ujrnKFZntyNENxz5E7pkcYkVhXJtuGYkY24z3bcFthVB2egxPhWUQcsvBDVU932FJNh6DrWkX7ZUshdzjqRvjFw",
  "key11": "viCqD1oPjHoFdyBxbr7GhuUqRg2JRZZDjqZMt9W67mqVncUbnHMTyLq79tfPS4QpRbS3fm4XUHaW7BDiPBHt9oq",
  "key12": "3eodEfd6iWd1X4neFjfhsa6EJE8B5ujdfuHvRhbaFTdWSD2rMHRhg21A7WDwk5yhkG1JQnNN4s678Jts942s7Wvn",
  "key13": "XNxJMrvodrSRpCRScTfGSqqiRUS2hXkmyngH2H4G3cX4awmBjoX6XkC3ua2fHwu1tjpeCzKQ11jvcmoEDA645ES",
  "key14": "3ErG6TTNkYMunVECKrnRDUqyG7zL6TCqcwuetQRJmNXVLK6Z8vxU2ade5NPvJtkwdyuJxrADhGRUa4yp4Q5BRJsu",
  "key15": "46j6tYq8p6NvcWzwMgJrkiq4iDjzYdgpFXwBgxR6YVWjzMRU8CYPTcAK9hrmjHL6DWBscPcB42pqBWYqCT1Joqa5",
  "key16": "66GwXg7xzabW4gpRo11LfzxvyNwz59ZpM3nV6WUK2yTn8P3xtuQEtPpr5y1yWfVo9GKJff8gnXtrWY5TXRavpm18",
  "key17": "YXzhqpm1cyvX77tQxrgM69rtrAFnm9KnwwpZdcAxYzmxcgSfhzBiRhbTMY63FvWY6Z8X53pm7m1doxSiRueCfU5",
  "key18": "3TWNFiFu3HVsz9qkUspkAQgStVTsv2Cdm3N5cBX3fJwkp4B4WeDYxfTb15PFwZe1apLePF69VqK6CubDCTTPvN7F",
  "key19": "2EeCvPXYqAdEgsL5psZTe6E8d1EbAesNxzf35DaSyWrJZtmrDZX92uS5t85HMQuNGdpWmtFtGjqgBk6BWYLUrZUD",
  "key20": "e8dVapMo8vQKDMnjx784fyg13L18swJFbnNy97HUrTZACMjmbThEUJzggpeN4hjKzw4yoo8r5My7tT5HpWHuH1u",
  "key21": "4EYwfgeokLtcPELbS99DDVHGbp4agrNHmhEGbre3P4iDJhc55ENmNNS4yHietTWYQhNEq7PkGZa5HhDbWodcZzwe",
  "key22": "2xFhKfP4RbmKYb7JLDAyr1p6gCex3729vvH3sXcTkRwNzGHLLzgmcjR4EpneWKCc3QZqKftoRWrvu6RStheUhxPb",
  "key23": "3EfhsLFsWyBKJQPQckNF7FqHzVXgvqnFw7sWb5Pop7Ea48Ec7DMQm9b8Wc6Q85o6p1qiC18nCrV2EU9mT8bgpsEt",
  "key24": "3WnHhQyHL36CBWTZQjNwad49XaBNjGexMjtBGEZZk8BrCQ5GCn5TLdEhgaEEgD99VD1qnLZxk4t9T8iX5XKzqtrU",
  "key25": "27pDBimxyqj4cMkfvwEGTvEtt5VnK9D8mnPZFTJwfSKN1UhZTgyGW9ce9JyogGExxZ4NWD6PMPNKPgCWwQbg36qH",
  "key26": "5wi9hgzjEvKmgyftTcigLSo7UvXfN8hR3ptNuXcNSZMxRBx2BFG2DQttUwn7LXPiUV63J8DuF8zpVGnscnJmxWmc",
  "key27": "UXTdQcGk3PibR8Ht8cZVQfVEu6tNAwBw3apGdRRDwXZH2oJiBYXJKgqBhfrVwZL7YkUjCEoLnJY3pbdcrESaVfz",
  "key28": "2ajPCGtXK4ChDEo4jiXeJmNwwa8sSfjHmZqnPBgMctS21zHrjPgU5ATGoJz4u64foRPsmxLkMB3wF5Qix8hwjkeN",
  "key29": "H4yLykcnQtdKprVpQvq68mMSbDXLz3TGd93DYRQyRTWcMyVFFioMtcbnaNW7fVHy81NDyT6q3aJ2CuEW4ozHTVh",
  "key30": "4GJNNSN7RanqwCqCEhFKSfzhBDzPb2U6do93zdmNQPXGLPNq516MA9TJW7ijtRWYkds7CJcgJWassbnir4GKsfY7",
  "key31": "4N3DC9EkdbShf2tmJh1R5pujghNbDwLTxD1NRHTXKenCdETS5Vx3NpSDrd4PApwtE46v9L23pY9mQGmt36BbxZvE",
  "key32": "3HdV3Nbyoe6fHK1TdwwYEzsbs1DiTiwXLdmGBfr8NZ7HR55zmaWrkDQcWarX13jyuwYr7d1iPhiQRMVxKGwFvdXf",
  "key33": "5xhjwZdGh1a4BfedbJqexcfyggzzhfriiUsYMauvVP21XKPqYvjPX4w7xFRQmb8X8BcjVvHrHogvjimWUVVuqeTi",
  "key34": "4khsfV6dJZGcveCb9uQUTpoDALQLFvv9AA9jU6U8nUJr4scTdbeEZ42oPMmVwF9CcFFMPY4qE5mwVQX1gk1D135H",
  "key35": "3GcddJNoQEs4ytHLwKLH7YCVBtABXMZoVe1W5cT9rWt1bcESrtTmpAAq2RyDThpTQoq6fLPe8W54EgMXdGvYSrZb",
  "key36": "2UWybcMS37pyEh2NajwXRw8kQZ8rxk1VNdJCXwwHLBssRNhJ49zucvTjR3TQCjADape8P4gGFHrjsDQa1dACQx6V",
  "key37": "5GNqPTEXXKd3xDemoo4NwgxT5x7ewpzZgnZMQBYXmgJ9MeAamZjfYWcVC6xextQAcyMafey1eSJvKn1CQfz3NFa6",
  "key38": "SdsN7bVxwi5Y7tynM2NfigHzfM3MC65GwA9MPnU6BRgTk1A1t2L6Z6zkKb6R2pueFiPBZHHzLoanAh2EBJqXSbQ",
  "key39": "AWUGQRqc5APHYWCaLdsMD43MHwLpBPYhow1BdzbcM1Fx8QhTySxM3bZXvanZ5BEMNRrr71CkzDeRRzRNUx3juzU",
  "key40": "3KZPrRhhu5AJ5sVjEH51hQMpxmwUkNXEtBdRBkUzQA5Y4q16X22FqTXNTEbmtxmpTnNBHZV63nNmm2eAvyRrJW8c"
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
