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
    "5qb4ettg4pBg5bhjGbkbfTxT1F51tnJoLbW7geBben9Kvr5skNFvL9spyN46LCxkQNPoa5J22GF3wKkGyeosRmcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pzZcgzVqTfAXcHnx7N6QHuxECY91q3qAanGHcnEWeGSitSBjCNQ6qMXjGzURMJz8Msxr1yx8nVkNBZvgY11i82d",
  "key1": "3rhkQ3ZeekQ8ergw3acGDJikgwsYYQB3xqzCP9xQPLx5KoWYnhqnuKRxXWWB8gxEhfdBkwwgeqx1cJL49Ww6oGxc",
  "key2": "2REb6ExdiE3SB8fqbQWd9vyWiCdwdYEdXvzAo4AXN6koviunGSvmQpyLsQRNXbLa7zemrC8kh1G3RFx2kxw6g9ys",
  "key3": "3ZZXrKymyrSSaEQqPyCCz7RGcv8nuPDdpW1eiCdZxNqT7uuj38KGn7DnRzXqfY53TwsqDkURrSJim8EaLtNk28cW",
  "key4": "2mCJkdsiN8gc8MhJ5EPytwUZoDyjk7Z19vNneUP3SHdMLSf792E679abTuvTydsjecHNQkQ1CkndNPzUxtGCq4zb",
  "key5": "2g6zM7e4c5vpWdrzL8mnejouopEWcBzPPN35yeBF32YTdp7B48nKTccZv2EPEsy1atBw6qsXSC25Y4xM1usrweB",
  "key6": "2swDNehjYAzjqpPYgbNha6qUYPXFCse9CAamFUR19MnkdeD1MWNHQM162nK3EV17ciWCLDPd3tK7gVmZJ83g9fMw",
  "key7": "4yraVDGvLEaK7F2j5s2xfewhLMTPjbBvUqhySigRRJqWPAkN3uv7qzeEHCLtJ2JEKtyNL5fQhATdZUPw4w59Q9qr",
  "key8": "47GhVzkVGAsNWK3GBFWhiXpuT2KY1TATVd3Pbo7q9T63ZmcBZBTGBKNoAPWnHL8CGU26fa4xc2u32ijztkhTc1Aa",
  "key9": "3GGXSaAeV86ExXHpqyGzdHiw68bmnQjcpQmfekEqWe2NFDGFj9DTx1Q7CDX5tDRBewLBUttnWa6u67ECqcFXSCps",
  "key10": "4HH2At73vJtSkuLgenxsnQKBZg4DS2fxhuZFGcq2eWnvYKcykFFw7cq29VQbbQpVPejLDUMSMJjmGkWKH6sFqbix",
  "key11": "ua1VyitrsMjPKNKzUAYtCJwR4YPf2yWw6pMmkT4ZtHSbeHWnMeDVyWXHAQjsiLUwPdexh1hHQqe4whM2CmCNFzp",
  "key12": "3fojPHDjaJp54QvztyByZFBkAaQh5gpHsZ5VVqpwLUEhaNoUCMabyT3m4m3mk8wSJQaRBK97soqw6jeoSy2SwnXv",
  "key13": "2wyQEpr6ZmEs9PtDVdLeLc2PPVAsFRJTVNcn8N49ghZQR8mUzdFvmKregrp1p8uoGKLfoeRawnMYqPwDtGvJk8Vq",
  "key14": "3nySVz2N8oeJpmrPLmxTj7vuyZN9EjpvosiCLkcqekBgQDjnvmLFjSBgQysW9j5iRBLLRF3wmPE4r7UKC37A8Kqs",
  "key15": "ZxDdxyKFySNQe3Kwc3Vr9Pgv6jCbbgM58Nv5oNXFMVD3jd8MP3XYWvgN2QpsPirb8rjPsvaJFyBY1ptM3nXYNFs",
  "key16": "2tAxpvFZxnfRWxVCwhzNnMB1cFr6E6STcdv2N7st2aPtVJiAsEur6puVLQ5uVRmr5riBCgDyhP3RP92uvA2RSb85",
  "key17": "52N7CsvcUhDdSw7C1EtKcG1s7fFQAUiBzRMx4aNKtgunzCzqYGUnCawgvBYMLB55wB1PFhdDxkWvhYfo2vMqWEYx",
  "key18": "pot8RHPNcMe32cDo5618efzVdvanbhfxExkcbY2VPoPNjDekvHA7pnLuCTuFrkdHhEkVBYMqDdijNK3o8NF9cfe",
  "key19": "45guYwcSWchphTMV32rQirdynebzMruFz4jzbzNZbhBRFkSfs9GjJtpzk1eaKuDWVA8SoBMnCTuXXENKtB5zJgfB",
  "key20": "43uxQUixaagmxfguYRWrpWYCofch3BLgwufN6eLWkqgscqweKGf6bB3sHbPiT3QeBY75QdUubp1sQw9gj1zayEVH",
  "key21": "2PymYp7N82Yh4LMEvV6XUpSochobUUpY7i4P66j7oNEQwZHedXRwtphdTeTFofBzgVxkYsBLH2jHiCnx8Whf1ykj",
  "key22": "2ETkgVYQCWSqbi1mhEVxTps4VvLygp1QhBGRa8GpPuF4BsNXnULYbopAn2jBsV271dnHfAxRvd8Qed9x9Gx4dYv5",
  "key23": "DvUmQoemk1mjGJnyvkrbtFXXWUz3npBk2KyBmwPZxwxTHGvZjujJXWVDhPfnarnd14KUapCBzwYVoUv36pCh7iB",
  "key24": "3Z51iPhSWZN9WRAZaFuqPDFAYFKddVKa4D1rZcMcaz3rejkE5sfc5UiQW5i4cEovibcE2TXrXwRgNTSrJPp4UgRW",
  "key25": "5hTBpZJZfZwGuCR2w1LogzwUd5MzsnZ32hAzify21SUnBkXgC2Vt5AKHvXxKSp3JNjrYeWygn4feAfkKGiWNDXXm",
  "key26": "3nVUuVKruqLzBYpaH5vs1yYuEHBSwr1JgqcP33a3atLP1xZtYBLSNv4Z38ijxuZoCC3B14TrfgeTbBQMYXcyvRWw",
  "key27": "Zji2fTfh2hFyez2xt1g1x79dZc5ZWG5xbvRFANt1gLv9SgwkZj8e5iryi7bndUTB5fez6CUYov5JDiWkK2e2LQo",
  "key28": "o6YocB7uzRp8et3M7Se7eBhGSwiuKwxB9J85ZRHnp7wMr79WqE8YnRz27yoLAH3bpjUZrQMZ6DA3TosHcxxJr2k",
  "key29": "58pGvhUzC2kF7UwRP5d7RHiLXpYAna7h2mNUNzwXSoj7c1CFR4UqFvkkq56PZdhum2ch78CiGTJJYN2pxds6ZAdb",
  "key30": "F9yCwvcUyVXTBFKiRaJfVBPBnYh8osPrErgbxcYNG9JDKGA58SWzLNj3h7ijU2pGU9iqyNHihkJGozYLXJTwpHW",
  "key31": "5Rtpf39nCCgqQZKeXarykzTVx4yUi5wRhKDucLEsbGKVTgHqNf2XS6b1P4aMt5Bud3TSjWjKEa8rLmJ5JAJvLcLK"
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
