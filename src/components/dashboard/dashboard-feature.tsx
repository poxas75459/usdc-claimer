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
    "5AZBnBGDYnmSf47JS7bm2UZh8CztCs5Hgv1Jpakexmjm8NhxAeSi4heBJqkQPP5tKpwX7NTU2WcXdRkGs1vnoyu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B1RiBJYUwhh3KJyg2TgQanESxwr2J6txz6MwRuj53S9dHYKHzykms4Z71Uh7w5Qfw8D3nuTN8Hcqi4SMnvpzuHW",
  "key1": "4Ytoj7xiedAnkwf2yGqA1V9qiym6btJERYvAGRseRSRXP4kAfHRYyQny18RXno9cYih2yZWmZN1nsvzAiWuHqwk7",
  "key2": "5W8hsiHs2U5EW5ZnZSPX8d3GBrdVWAGDjZstUDuWWeEfGq1nY4eicRRWHQnpUVrSNFA5bvRyuqg1zXXUR2hSQDsf",
  "key3": "2j2wsGRVTzFVskcLdupQx1BvdwB39m4mDuEsMvQ8byaAPiKkPfjckLYzLpENrCZWqkAjy2fmecr8Lq1GM96NZ8wN",
  "key4": "5sFK59DL5ZpXuJi2CCkJK6knVbeVNyh8a5LiuhW1MGqo2BhZHGBX7LGpVVtaBdnRaiBG4oxgbuFAHwsXMcBKbPsG",
  "key5": "AhZggXmBsHXGyhmdz8VFLWvNfb12b2qpjQdX9xqJ31YLaovxmiwGSMbRXno8RsAprZBttKbZvFFpju272zopdFs",
  "key6": "2gMNqguySdb73ZVe5tAcnyqnSKGyyAm7kLUaJVYBpNnhfoxCpPHv21Ls6epwE2UFuer81DRzaYgsTimucBwrHnqs",
  "key7": "2gKSwgqHTqJEXrAxBzgPW45LuA9BuEL7DzhGA9Sa71DZoMRRnjqYyXUyRvdq96stzsYgwdo1B2bR3sxwKDUhx4pp",
  "key8": "5b9a4ovtwYYPUB8V6zAmuDBTLa1qXSqwLwucphzNW3eDBwRBCqvpq7MHWupM9miikH9CuybSirfTS6zSQ95DKNXx",
  "key9": "MvenJxb3o2revnwni8iX4w8S8UV9Q473sqxFV7G4PEXr8PJKLmLbLUBqFuXVqZy3opCa8wYCxraGBXFYqC8QU8j",
  "key10": "3sbJEc2BWqMZpCTDtrYyseLGHh8NhBfhkyn3CqErxVRkDFFCdwm271tPaXms4SGptLHkEMFxNVJ49BBeFF6rm7tt",
  "key11": "23rf5XWSzoBUs4AdCDof9aPH7vVT99kL3DQ4dMDnXHawzLvmgonUvxKzfXaFyvniemRx7HrHctcwSvfAiK4JUXR1",
  "key12": "rfy3bCVh3YgkGfojg27fpA6rGv9Vfzn9Njfv6RyE577qrUcGXatjMWdGhhzocwUNxBsXWozU6o9geSf6hmp8nQD",
  "key13": "3F2X9UQC5MMuex6dj1WbaqdbBVd9KmJLnKUww8qRVnTQhFuVdf7haYHsMGfqWXqP7AzywJWAV3akgWAH1h4L5ujG",
  "key14": "5BgbLyqPH7Tz2iypEqMZkCBwmpGAYt7w2RZYtfG5NevW2ffMh7ihG86ApHPpyqFUdwvXEi8bFg7JESdeRB4NmYgt",
  "key15": "2uiLQ627MkYU5KkBCNVu1W1GDwyqn3jb2S9tL3L7qRi1Goay7LDzhiWaaToqBT6nFQQWLySE6dy4KCVBkSm27RML",
  "key16": "57ZiXE5hm1w47QgjUfEzZuYNkNWunwHW6iug7nepZGCXXSmrwqNMwcNQb7P33LJEA9n9xR2obXsx2vchur7pugwL",
  "key17": "5zmjbywdFfcimut42Z2AatmYvvhfLYvWTYnmTu8SYvJe13jRZQVWs8vMdYyye67GZnJKPwh7GtN6G52nGJ9e2s1T",
  "key18": "5x9mdtMdoWkFU6s8cy3SRvaACiVApX7o3cHhEPAZYWPvxVufySHzzMDiSqTTXtKEipYJzA4hwZvqJLAga3ipQuuW",
  "key19": "28FnfEzuE5ushffBZF8FyxjRo2fPrqaqsjWrfd4At3JYWCH5d5XbGp9ep4eZLPREHR3oiaopHWjpTQE6MdAtWpZD",
  "key20": "3kwL8mZSZ4i2wdiNeLRt6orWf4oRTuUe9NB5uLGXpBJZyMvTc1SFqumd69zW36uSLeh4ZbHBChtxn35nAAFmCPGs",
  "key21": "5Rsgs8KUhBMDwJBrkScHoXA8wYFzVDNuXxyMPhGahaPtPaYBngXbv3JSn36Auh4ppnFJSnxfe5UsmzdHqBDikMgN",
  "key22": "591Ho8ywmJT5NmjfQkr9UWxbnypA6vExTaD4xW4pmXa6stHGXwT5x9tfoJxrJ1RXipgikMw818WZPFCTuoDwAYUy",
  "key23": "3UdVguSodt2xq2igD3Kv22hFqAcBU1ahQH8tEVHa2wFpSrJpuGVjAk1u7vrQCV4Rh2ZrRaechEJ2FAYxMkCMHmyE",
  "key24": "2q8r6w83xSD8zJfyqqH96nvGRiLgMyn6twZmxCPs2Mr1ZXUm3BWo9KRKi8qYUf1Smy4cdq5SdTE3SWDe1iB1FUCF",
  "key25": "3sS6k89xzXztr3rqP8H8i5kpdp5aNy8iQX2UKFhaNXW3DkQY2tKVtnLPDbXFtUJ36hFFuBXrkTfTaTe9zA3Zg74",
  "key26": "2HvAEwLDYn7WspDaYckGP7wo3SZEUzA8yGteMUvAAdAco1kdXaq8fQVHSBS7kPw4tfW2dQcCixum2Pe9KZdG1XfX",
  "key27": "YrbXsc1QJNUfeiu94LwWzLLqNCGEtNejNmsPDvbQGYsrhBzADLN7oYJD1z7qsoj9Fk5xr8ZSGC34eqRVpc9Jvkt",
  "key28": "3sTUXow1tnhVM6W7k1risj6M3XvRU8uWobMZ2WpNEjfDwS5QK2kkt5LCcicW2o48JUqUyYJYCmaVtBKra5hAusWM",
  "key29": "5LRutYhpGsGipGvezxiTFjbXhsgteXJeS5Yha2ydCePsCVKV8ptSM8STCA9ASyTJgiPXPe7zw5wS1YF4LRy49Uvt",
  "key30": "3LLFKG4Gehoh52KJMnFXLFwN2ewnhfTKGHECMAL1qyD8iV3LbgSMdYvGGVWmfc4PAamjn9rzRCKfFMcMaTyvgVFv",
  "key31": "q7T6oFAwnCzi1rcUYn13Cki3ZkZDcjW3zXdLamnWhJKhiSanh5nEHav17Aa5g4BpEcxeWtfhoNVzNGKzmeFHx3g",
  "key32": "4g6REfCFym6coG4BJTbRoTiyu3oWKEaRqGj8o37qTfzUHcJFcnGVQQ5xN9mbQL3WGC6orn6e72fg6MyM9m6zK6yA",
  "key33": "5TrgM5r3g7jCtuiuFoACf933EvRg846sPDyxYzjVtXEjUPprAnNthtbmvhdcAbM1H7TmQB23wjsA2iE4yCoekUiz",
  "key34": "pJFEvdsMGDncQP3B1UV72m48g7T1T97kH9JnhaZ5UcHHM2x4uG1BwNr2nQW8nBT8QQ9ZyYsdVPUddFLGackqT6j",
  "key35": "251hhLzkSSLvWVEg19y37ckVbeoM1KvK2oPe56NqN3nKJr4ZTDWeTPnPrFFavdU6Vo8qAstXwhnoFBi3sPG32tw4",
  "key36": "2bmFcUvk6DBiHcD4oVZkRfoVSHrjuXw9CooropwHvbRMevWDZnLKznyMRF4K6FEMwJz935nH4Rxf3zPC3rfGNib9",
  "key37": "dw58usSRvvi2MVQuhcndzvFPSTPsUtNBjM3HGKteLWUMQEQYUT95i99aWiLfazuqkofY7JsMvSgNL65U79baz3t",
  "key38": "wcvvguNNcmecCN9JREbmcjbiG5dMKb5YfrCCH3ERG55A5KMVaTUCFGjMbAaxHJguQzADrKejaUrBxrcWem9yDSE",
  "key39": "27KZw9EKK3xAbejHM8GkTkbWXpvi4etarPeah7nCiLDmNFwP3Y6V4whiynzvpBfq82SZxcULqbpbXehPKCdqXmJT"
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
