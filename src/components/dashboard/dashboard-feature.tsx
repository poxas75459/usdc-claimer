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
    "4LyT97eotyGRguLBUhkyGD6sq4D1SodGKc8ZEJgJiMRvPyThMQjCVUbMa2NoFmJpKQBePU5eXgc5edZooRNJYCkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJXUUoqcYwhzByBqtdv6sV7WmDxS6JeBoYzW6ofdP5Cs2stKpHZaWJ4tPbJ3QEKjXavbmStqF1tWDeKTQPtoyCa",
  "key1": "A8ezAWrEAE5mikoCfGwW7EmcAtejvQD6kec2vysyhdzVcsSwaahRUe9sa8GRpbcCjyMgohJJgzp7yX41jHEM8v7",
  "key2": "2CS2xBKN1517jkdXGzMibejzx8nHbXuD9UpT2fHRJP7NZ1bT49Ym4vAZibcBCFfpuVj6C6NehfVsbkW3PUvR6YAP",
  "key3": "2GGHYsjCTkfJeu3DM8Wd9y7fwVB9TiPAoWSqJau2pD2ffAZYwbSiq3vN9w5aGhV7mbqz3MDCzPt2NMnWjNpie7Fh",
  "key4": "jxYJwqwfA5apnSD14yU6UsJofrmwrNV16gKLtz1SS7gUM2Jm6sKWZjdFg4rpjARcJ1iVNjT2YoLSYTNLZG4onq1",
  "key5": "5XairQgpnCBc9uytbBNMaaSp2tEuBxCBenLRjK9XG5qiQCYHdLrmg7pYcCDKfpwfQUYFsGugV3ehubH384wveyjN",
  "key6": "4ZTs2sNhHV9MdmcMSaC5QSdWJDhxeFgAiQ3W1u8dUQLy2kJMxV3t9gckqb8LcM85V33WsjN3CBJCZmunfVj9QdWK",
  "key7": "2KTkFnFAh3dUAcS3G7pCDwhXhvTwnmzqBpXswzkbsDc92G9bCoZcwGk1VDRDeAJzc8wLS7hoisMPuoAM5d2KhnPh",
  "key8": "3WVAWYLMC2w7pnWTJhkH7e6RL3rPABJagtqiR1QS8LyyXcozSGUeZjrRHoeK9zEvjATmNv5wgqGg51ZmXsMB3AcQ",
  "key9": "4fktEc2PsUbaskXH6VRc64pyQJdmNyGNePtccmk2BdPaue4ZHmhAcURDwLFEsLsLRRRdYcqA7HHNpwW4E9Dn4ikN",
  "key10": "gQEDKTo5RBXvJwqRYHWxweEuYpASm3BxZT5BV3Aw1wFBDUGek4xL1tVxr3CWJPW6DdxzFTkn3Mq4oZYXzLjEMaZ",
  "key11": "3ykqMrwuWrwQo7wUqHVvgLDXgLQP6SyVs5aaPP6CJxuTWeHDgumEocmhkr63xqx6GzRab6UK3pahU1vj17NC74e",
  "key12": "2QmjziH2TaVGetwoT2VcARqZyPmkWEiUQyWscW7hAcbcUXp6x6hFhwjk2HPmtiDQsdwHuWcFz49zoGs9NHupSrx1",
  "key13": "4waCdCk5oiAmAYEdG6xcg7vJQ8kruJAQZLh7hxcpETXo14cd9ZYfc44gycjGSNMaC8BNaXnPLnjmy6NgtPVkzCBR",
  "key14": "yiKRaUNi6QuvsyoghvpZdzDn2sgt8mHYG2MreSpDge5M5JTZDC1qvZmv8qwdqRqRhzsM6wPYBz2xJtjYmihY48y",
  "key15": "4ssfE7yspG432LhZrcinBtawWnbQVbQhvAfDgkTbdKfsjGwNSfiZFQAMjJx5N7N8jvqDivsFnhd2FVctnj5M8ZAY",
  "key16": "35EtZ6esXVGap43XAWwcNdFdddhtCrG5sEUjAZLLJBkonfKPtf2AvezpbS2EPM6afbFuzD5WHFdw6PNn2qQ5NybH",
  "key17": "4YdM7PY5HsB1xRGmUQbp7Fo4wHd585D4AheU5vPHVmQdhPgRxgLLSX1sV8dGiUzoYLrhy1YhiUQ882sbfo9F74iA",
  "key18": "2dp25oF2XFbiq3qGxepnAHq3vsiBKvCExa8vEU9URPCuA2AovFtWP7iuKk9u3UBrY3t5wL9iS6mqRJ5Dz8jsT9BT",
  "key19": "R1KXmQMambA5opjWkBfo9fmc9NcSKu9UUa9hNqWBdMg2b5ncpvTTLTN3GqihCPUp9sjuZ9wAjU63UvMBgwCr39F",
  "key20": "3rLM5Aa7Ar4Zo9WuQ4T9gse77t52fAF2zmnQ3noEJ1a9Zq7nfMini3fPV4p4UdxPtaZtJotZNvXMuHXWyNw12yt1",
  "key21": "3TwkA65y5tuJWUYnak4caEotPEtQVWwqBWLt65LJHXQZodD1BwPEnkbRY6sCx4aiEtRerqXhC1HQzJJuk7RfXGtV",
  "key22": "5PuQ7df2CwSituAQ2qtKLrxZ8UP1yUMYsCaJgRpW6WVwrhr7RwvJ6wzAKsSbvrtAgFKNAR8eFDbzTtSvXbwYpnSx",
  "key23": "w4PRnZHFxVySqTfs6f82PRkHduRCgaYhgTwREpM5sTrP1SKMK9mmq8nUQgSW8A5gq9M7wzeJws5hvL1G62oDeuC",
  "key24": "5JEfKoXddiprUYs2z1KbbTZzx4457gaRdipjjVcvgXMUc4Bo7xCrDVGckiYu1tAcGhH3eTD1LgEpPSUU51n4nmxJ",
  "key25": "2jgYVFjA5BFr1Mi3B65XAMKbaz6Kz7iHCWa1bG9DAvgcFhbZerF2sfGPDon7veXSaBe52Z1yn6uDRUjvYPtwn6HF",
  "key26": "452ezf1sCm8CQKyjAS9BtXMuc2SeBbfuHswtgTAsheg82nWgStGHQ6wFC3tWofyaSCsNem3VRjfgSDhQnnw8y47s",
  "key27": "mcWqLsaLmPgygz3kndpsPdzV4nM6N7he2dsXJc8xjxaR1LukgwHQPAJfrvwYcPQ6V1aF1PfAytMzyx4ciRaxmgM",
  "key28": "5tJjDkGdaZMAiTgJo4LeWfax2BFkc7to37YHa7CQa1KhoEVHUaqNwxusv7ncLHUHZUT7N7Lm2DhXwdXKSBt81DDu",
  "key29": "48sivVnWMmU6SHBaD1ZsN1WtFi4GGQUaBvW7Zq1pnLRewPzpMF8mvbUdCmtqyutfABW14CTPLXURMxPdMaZHpBxF",
  "key30": "5ZYMfckUdwSsgyM4SEQ6TkaGoPGETxkTreRz7p2rZBJLG2c9KHgPkrvEHPwVPXtx7ZVZ8ZTnipjg2wi8zKqFFZpC",
  "key31": "4RnrgegEu9x5e4UV2UcfASj2p8b27kSY4PB4gA13oyeEQTPRokBzvLtcCT9EM2bm6Fo2Z2wMMCLGRLJuXuKH5Mvv",
  "key32": "nPTUJPwkJtKzpp5KdLxcwbzv6o5Hesro2U7U48kuBxvj7Jiht1zLvYtcDxzGXmurXXGDpxUfkrcmSciBL6eU4uY",
  "key33": "53QDZ319VNJRckDDdTqT7QPvebJzwVTKGs63gL2eLKkJiKQMjtT6mq9vxMLART9PV4HdyvXyipcUEBbrKo44SLUa",
  "key34": "4wFpDY6mTngJNoZGstgzCupzgJLq2zxU6cpe6qSf3GT1VebTkfzbwJ5b9JBH1hX4769v2K8SZeDQvVwhhoQuEHwp",
  "key35": "ytmVtBEBFHxjVjZHUdn91UEqEvwGNTCsDKccuGrhmkpq93E1JqmNtaHCoVTWUwzUHZ3mFuzpMkx5nnzprvKcCcV",
  "key36": "51gzPNhccppn1FPSmkcD93DZZRPRDWpPRGJVTYEYTvwGqzRRFq9YQdrqkXd6ewsp6jiphasY5pbfDFxaDQX6wsoF",
  "key37": "44DFWEMpWpy581VFzC8j6hrV9wYufdXtMgrQgaFfCswYaFgRAW2a9NnEuEVMyr21mdU9adjF4sE65PjQ1sVVg9rw",
  "key38": "4vQ93QvAJZ4wyok69ikdB1s4oMzGBChmFHNaq98M2RdqugSUPx8Ccj95Sc5F1H3CSJgGZt2w8ymQvAGbRwcjBD3d",
  "key39": "fdCGJDU3jMxYCrMmqKrWHLQ467ixVeYgpbHDRCf9zyovPxUnwEywBFgNh4DwPpeU7BaUEXqkpx9m89preKkbkQv"
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
