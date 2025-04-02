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
    "4VjjwYvGY3jAHaZNRJdiDEXD9ftJFS1gqeQw1TxDFVbhMAQnKHQacoj4dN1mU8rjuHSKtWJnybiVkKB4TDLwa64y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ZqJkNvVubnyu4ZQ5gNHz5g78K7xJCqCdhsCPf8fjstXwkyBzCNYJqPT5XcJWVVc1KetuB1jbrVY6RaY87pR7Vp",
  "key1": "SQatNA7sWyn4LpHjRPoKjJ5r6QNrhcynGABdr3tmLxgroarfaVe7jVWuXsnE7JkgS4Z6Jk5fhXQJzs3Z7HRuUGQ",
  "key2": "562RpJyxSeTD7dZ6Ptgm8bRxgvK3y68ops5cE3ERr4mkZ6qcWXi58awTtM8JMwxnBKsrborSyxcW15zJqXQ15h5",
  "key3": "2jG4hjRQy1rLSiktPmEwjn1m2iNrhFjo1M3syMS2AmRrDJQY2a8hyAUynGDvDxhQDAdMDSDi31WTv9wqXQwWUxEk",
  "key4": "4M62tnpkXPWRgq6vXcVaU3mby9pu5TRJ2oAwdub6EVTUar7jQoWGafqeE44WDqH2hnGfoh7TVQjRriwG1dhkSpkA",
  "key5": "uH6D8LjWha4YzMtKcNaJTGobeZBVSHriUtTmziehMSVA1SuyvT7s1RAAzUoN8bejjT4AHkP2aapofXH5pdQGA41",
  "key6": "fZbxvfrme9V2mcc5wgCGcri8yDUdsFNwXQxsnZqpPt5ny4QUQAftq81QGkvJCVkJFV8V7QjoqrAZfeSPJq9MYJt",
  "key7": "3Y3zjxqHRM4gYnz1Y7jHWEYvmsniqnn2nDDC8sDXa3QMCtxF3uXVC6FnJEwtaQi64KvG3abZfjQ1Kk7QD2sEMceC",
  "key8": "5zMfone26Cj1Sf7pd92BwCJoCQh9XGWpDyAw2iWtfvKdWjQq4qQgoAJyhZmftCRA1zgFeNCrzfszkKQgoK99xaaE",
  "key9": "1zjwGuGsarqbGVB5tThaecZYEarzizf6eyuvRC2DoarzUrgkVKmQbbDAnsa9ehCx4qPchXst41ZhiJWwk7ihPQF",
  "key10": "3GWtRjX5nWy7cxCuCkHMUpjGtzAn8Bwawk9rdiB1WmzmA5Dy15qbfDS9UXatsQ25cbeQcjhFgVk8gyPdJob9ZhDS",
  "key11": "41HUFa5v7h5VB33DUhPGYguQDW1vyfxUP39nirP1ftxfxNTUsm3UsxPpvwKMgpWTiZpdQbyBbNEg1TZX2yefLWhK",
  "key12": "3vx6i2pFRNvagyrXXdFjekVHJaRViVBR6uKfo4RP9nmHnnGUiFvcVoNkZgZDRQSru5VtoHceHZEUcpToky1fzKKm",
  "key13": "2roG4niWeXkANBVRoTMNMLZmG9nUNuzhzScBgTRopbrSUiFGEVUpq6VpKhiQYw9FTBoQT6h74g7a4bM4ruuBoVTy",
  "key14": "N3h7UEfqgEEcJbjCPmc9bfQE1WKidppLzrUrj1LipFmDbC5vZ94hNX6erGiiAmFcGvZCoL6EgQqxvg8Lfrj5Vmq",
  "key15": "3v3yJUrzbcrHDZa7THUAfykTAJwjxPhuFwrnrH2YTVXSc6eha23LET4iVWVCxPnHq9Gm3dupg3YnhKA1mw9T44wz",
  "key16": "5mGm5MASmDjvLsPDbKijvkfTrGd13g1tTNi5zKveewPJPDWu7o7jChiirwU5ipEqZaYakVV39up4VFMNjrh4b79K",
  "key17": "28x15KGf7U9sX1KAsFmPMmYVvnmei6QXmSV71PDRPqVbWmwS6wABvjEKiwzEbtMMUWVmqxTPHBLtqYCji93PnVTU",
  "key18": "52L578QddGYCxaYrNA2V5624CXDPpWmEnCr6P8SmWn22MBE3Hp5aPYxkgEcppndpKHMPWfBXEqJtPNaxHyCKjUgS",
  "key19": "3d45T9Ckjx6PYmFSx2BK87fCNndBARmj1yiyMUKAEcPS6Aj1VjXfu3Vxpha8DFn3YhBAy89yuXYn7NyXbCghYkKu",
  "key20": "2QXgLDf1eXBc4o4uZoMVTdvZcMfnfQbhkrR7RfhwmG5C4ysMoxvwpBPEKPQqrr44kmrp2FWpaxaRQFNNEgZNGP5b",
  "key21": "4tQHsZvEHmEPfg9f8jdxM3jQeFzJAEHJv9mFErbPztDh5XkS7HNtHKbba5zZct9fHjQEKs1UTsrzJq6p28nZMYRi",
  "key22": "27hLqJBpzmWJbogK1hf9oXNnu94zFpNKUeYMJHKKkrzH53bR6k4BzvTLybYS1fyr8FBNZ4LsccE5kjjRPz1cpJSM",
  "key23": "5qYQndgijcwLsUkXS3t151jYi28sUyXy8nrbW5TiTUHJ47XjUtFQvWbpvnEc4JRk1bMcGnWWhGEXE3YsZPmtJiqB",
  "key24": "CbfFVmxzvDTYsMjcsj3AjfRRSciLssV9FE8WJPRvjLqqirC584fS9a9pzksHFrVYKmiV4WKkenhDRbezKiuji6Z",
  "key25": "2jxUJsc45fdXWZz73iC3WmqbWVDC3KHQMFPivdkisZC9CKn3XMBj3ELr3RewqsbcQov9Y7YTm89zmPWb2aXFqjJe",
  "key26": "22ZXsufT2TDk2EUUW69zBnNei2PKGXev4UrUJR6GF5yYGwVF51YaVBXWYwdb7yUs17d37V7kETmjEBGhxqHafWbk",
  "key27": "5LvhWZYjttVdfN56FzHawvP2thkDcW2nsZrZ5g24FZGKwTmqYmbEJAuEehWP9QPizeUE1TBYLJ1KJZruvTrGr6fj",
  "key28": "45sq3B5Qw2yeQHWbvEzLNdT7c8zr2KNE7ggoQZjFq7bsKYhnvWu8vGU12TY2QDRxdYfWrHtvNc9GYueKD6zHC5Bq",
  "key29": "53q4usG5PFp54xhVM9sdJVVNaCuzpgNsA1GeEwTUPMcYQRMMVkCcKYGsmTjWPdf2cqHeXP4C3YswsZ14jzSKkrc6",
  "key30": "4jZa7KdFXywiwfxCXHPJtxnuLViiwVDf4HZuJDC4PRsJ1ae7HXGKctx9SZCvqqHw9cQbXua3t8n7Dis2w46saCtj",
  "key31": "4CQD7aMTV14VnA3SgHwsraBxzwqHSpJDCBw1U5mDShALHRCgTFLDmgPoUMBv3Ajyz1TN2FPQWyaUSspc5xAkHW4S",
  "key32": "zTdPrEpoJcUNciYWHeezvFi7cyj7rcNXm9id9p5iGNgQHF1EiRxirqv3fmTi1vVjPWCPTMYJ8HLNxVsXS1xueV2",
  "key33": "48zM33FvFNMRwLDc1p3SedQ9PKyV7ZfdweDwBUcGmLmz6t96UUg9bWgvcwyGopQFo12rBD3ZuuqhyhhotCB2Yfzk",
  "key34": "2wAJ6atay9QfjwGdaw22XZbD8jpBMdbqjrec3UnZNZL7gk6Tts17M5Arppotx5QQuhcoUGqU7DPotzHyuNT8Nbwv",
  "key35": "3fQ7Qtp86pzqJy32bA5wJ4xu8zFiiJu4aVJA3fzA553zfo4F4Ea9Y7FVeLh48SyR9Zk3m73W8eu6WJkbY6axy4BN",
  "key36": "4HNAVLFEdXApUc94hK5RjkYnUhkoUhRBHR1fCRYifMev9pDYZZLYG6r8DgkoBJvYJGaavu2Tchq4UWQNgMnYjR6p",
  "key37": "5rRU6BVigVDjMuSowRKV5s7dfxsV24xP8dgL9aw9TZAFb72u9J8Ba8rCywSdEDaeNYSTicNBvfkejDZW7VHxdS1m",
  "key38": "2MqRHhwbquxtMph7k8z1Z5sQ3QC2SNgZCwLJ7AG2uYJN4nGPfwNfSS2tS8rkCjDjzxr3oXQWfKeErUbKzGM3oFHg",
  "key39": "3pFZkm5rkLqaQRPEf9bvrUcx9V83dYvHJ8xUWMvG4E1NwA9AFRXnA3jbFHjvbXBAdtBYagt4p4ixeXz16kv4SZ3X",
  "key40": "4MAiJoidypipsVWUBkUH6HbjQTbRCvAwwpmnZJAZKQcYATztNBvzomhts8hurDAQz6tYioziXT9jDea9zaqtos4f",
  "key41": "4NPURgqzkTsC61A78DRKm2BrzCndfwZGF1Jb6bnkei24uu5ATe5TtxiWcY6w9rSB42bTQAtk4o4bayh1hdXkwd5f",
  "key42": "4P1hmFAcMDXsg8uf8nPQ3E6WqqRxDwZs4TUT9XXKbnpV8RoKNAx15YeVLPHe5FVKPqHs9ysDEsZEc5jPhRqKJKTa"
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
