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
    "4Q3SeB9uxbmb5NE2ipedH5PGcW2xqeVpUguk44vxgNSbWt3seVFaLyu5bexueS7783EbbMNA3f5H6Van7BJgb3cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Lw4ciTw8FWX9bfFtsqiZvzemUProYrvHGkF22LsaqoZsm4PEABEe2c9qxbwgUD7U7o2PYi6PwCwAw4e8RbN1w",
  "key1": "HrYthzXaDf1SNZ2c1jDAFiXg8aWPW3QmS4awuHakVeNwU7o6oHxQKVUf8XZmLMSwJ7ffCyAb33bJ194W2vyadpf",
  "key2": "YiPdiQ8U6fgyTocswQ5HTHDtTwDakyNwWDkrdVQ62FYkkVZbxwMZkTb4yQyvaRiHKcCkRt2q6jHkrP4Ae4LDqRx",
  "key3": "42Y7rpHC4JTmpZFj6REGdEqtickpSBBcsEQU66SaxppLKM3NBVYMYqghuuuJ7pffZu4Ed1Ze9EM3jPCxthJxFMLz",
  "key4": "2ab1UTZ86DKXWwxYU6YLhAeftVrycqoEMQoBCaMoEdQV5oerReJW64UaTmug9prqoDWg1nquG6TsYtnFTCPQa6Rw",
  "key5": "2RaMgjLtJrA7Vk7LJh3cdLkKnm3bRXubAMg5bHZ9PKqAH1jzBxUcdmtsxUqbWJH36hJVioAzeGsdTM9LTJ5EkPBd",
  "key6": "5zKvG3DUyC8kHpSNoBEFNRU9q1HzgHwzBMCqboijNkWGaa55ZVJX212n1SFPTaokDbMBNJopjWHa168ksLkxerfF",
  "key7": "tprC3ovU2UWoTAVnu9z1qM9JPKcjYR8ZAc9SobcE4bmKepQFL12eNHYPBkaKh2mYjgu3QyQN27cmJgEHW3LqB1C",
  "key8": "3dprozTFCi4HgC8UwyE1De5FYi6DQG7BkWVrZMQwvHq1Cdd8nirN8hqa4pdrvCK3gLzyXHwUnLA6HhFzBZLXDse8",
  "key9": "5QHHpGfpkup3gqq2zGoTVt4j3heu3FuW5zFTi3JX63hkYQig1ZZo331KEosgkpuQ71SrqL4ZyP4NTfJM6yd6No6d",
  "key10": "bimo7W3YPMWNerSbq8VLixuKYLJwDgc3u5NUAbMd7LtmMpeJEeAVKsKTpU4Aoe3pSrt5M9WeiAqTPxD3QxybVqs",
  "key11": "5HMnZqFxydYQY4nakFfCAm76itXXEhKBWkbuYE5ZTAVYngVTYy63vnVgNc3uZnPgENqCJG84cXzyN7PJoLFxVfkQ",
  "key12": "tVVYW7geCzvC2cpcTQTqHYefAqUqGd8QdGQv6zu5rasrJLw1DKEpYsaMQagMTStKyhcu47xLqPge7DcTqAUqMt3",
  "key13": "66YZvS9i3bQ9k5oatGwYYKC4gR4GF8bAn3KggBMjy6roZCHanfCgFzmvAsdRAKMaBWmhWeU4cKrN7zkE5gmXkN5X",
  "key14": "4dak43o5oDXuBQTKx5Yo8G1LtSofSQ5PUx2xxSPjzNNYU43H6m2ig96cNza1ha9ARNapWVKwgoxSXoNKK857Pd1i",
  "key15": "3hLLP41rVVAZPzkTC3YDsx8WaezGDwX1eknUMnfVQbPtzgzrXXEaB2AcDXBGt5npmLHJp1oKgjJQaSbW2EY7vrkC",
  "key16": "2xJWHreDE9aTcjnj68ofd4qqzTgmf2kd1DUooQwGpnJ5boRsziCxge59u1svV8sp7bZGXY3z843uaDeRJNfYKHT8",
  "key17": "mDa3ZsaHbmTfKRBkNd8DCWihmfoEa72bSX7GrLuZ85TZiuDwFvSRK5X95ofYfig21p3nWRJ78bDwCoKeVvyizRe",
  "key18": "5hWM5R7pC6Xgyy7kW3BbRxZvq2esdYUonQu1p8AEkPLVHwk9eTMSyJNHGGRMHTnFazukPaERgdTnRsn83Nn8Nr5",
  "key19": "5dTpVvkxAmNR3aYX7ZEfPqg9AtLKV5nPTLYDa78vx1UkiiXnS3mWRbRsA8WRtZzJduCiMCup7S1P84gFjRyCLFYU",
  "key20": "6gZb6bnjn3eJMiLTdmx8D4eQQwak8XMh9a3ZwwaSHTqDUArm6F5SSLSbGRUtaPvZ9bTBbJgefvFiSNo7kL3w9Q2",
  "key21": "3nGGjnrTko3YbCVDNULQk8ynxGjDZE5H14GAcbnxDRCnLugW6HZUKFXrdHoU3LeHGc8iaAmNLds1qqnSC37E2Ayc",
  "key22": "3rjpz5TrKTnBtnoni1T2dzWZdZW4RYsrAC9wWfZHefhkotkq3cDE5ggXjnr3JpmReFBdmSsD3CdYcBRua9UfgcVD",
  "key23": "58LgMYgNGzp6gYKabjBCKGQb3r3U2dAxGCKJ4zp8VU3Eg5mWyqe72XS7uuNSh8Adat4wDPYFgpGoP9Q8cvWTbwep",
  "key24": "2Fx8gRjDeDG3S7jwyTPfL4Vwa2q71Tk5U53sedLBNDNMWgXe9tuNSS8PGdgCafLqQ8mKWFJHZ8RSLANKfpXZbh58",
  "key25": "4n8esJD4sqtKUd7y4UkTGNuRQQk9XSSKUHXsuoebfWFDpHb4RHjWvdLoBm1d9bLBWqDa77j7KG9EufvLm5AGhkn4",
  "key26": "4j4Wk7HMsBDQtM5kApDcN1Vzcq5ZPuGR1Ex68UzvVrXRsktDxeYZ4XmhMhgSRhcmTMBet7nQfXvhWM5FTQR6ieG4",
  "key27": "3PZ9TM81hxQUoPGBXGd5utVubNmxCx7MVvVwgjytt7w7CEY2N4owEunZTn9pu6a3PELvH8heBgrk9VWGLpiJQFyK",
  "key28": "nYc6PudzQgBeq4FkA2ygHkjXdqSADURqR6SHEA3BLsrheuxc3n9A7Qkn1eaErEiKcPfQv5ZC2odfwyyZDfJXYKZ",
  "key29": "5rgJxWRgoLFENHHMThzSymM49GqccjnDBJrVEwKDfbECN6BGy6ij2CBkW9WC6WhZjmgMKGJLNz7ArePmfi8ZiXWo",
  "key30": "s36zaZmUwnuzTwfUJMv6ftYCYLTYNgqM9GpDwDFcebZrDhHjW43ecF7Y8eWrhBqhxbsnzZkM4T41H6Ym4NaCePF",
  "key31": "2ZdPJTAnkbDy91kYidvLsYv4NfVLse5GAp5Mqb8Lib7f5diwUpoxPPZwxtzFq5qixJSNWsH8FURzimX6XrRn9iUe",
  "key32": "mFNU3Lkm39gHU6w6ooh8GP6kKiUoWpxjfmgYn9DWEdhpuyNryfByydQGaCX4NZRWjkArXDfD4CVxUBx6b3isdj5",
  "key33": "SyR4p27qNGgFH9SWSyCqf3nVUfTc1dNjmkbSmp98683sUaaAGSbwgFYWU9X5M3pkkDP8WD75uzhed9BY734bUFX",
  "key34": "r5U1C3iw6jSpGC3jdE5NYaL1wiYHA8yVQwuQLueiGhxaqMV5tZi7HWCzYX62mdL9LWiqcnxunsziPiTuwVh9hFe",
  "key35": "4XEKqFDKPtzQaGBkHdVWnJgsDuqsPCR6GSA5TpciBCP6x2mfYgJT83wuUVJEVs7x5DCMPEgJdhKFs5p2yzpH5BTx",
  "key36": "3DCzChRTrmJUHNx9g1DJVHhcD2vWAWVoyU4dqq3KUdeAjY8cG2j67ZjxWh1WLEkg4EZcjEoJCBPwUMZFj8bbgwyz",
  "key37": "3TBKpuhPgpDPXyDW7r6cpKkrAyizKi81wMgHk69JJNLuVrR3jmTp1NLW5HEEFHG7bvyMxCrou5rdmkgm7oPG8SMH",
  "key38": "2Xek2d9uaPNEptqee46NhqXM6TPA3AJpBCssrcz8XFoKSu5yRyRZGWYVVPdpQ1JCJFhPcHjvY6TSuEz9CBZbMVgF",
  "key39": "4CHuVgaT2ATD5mqCY4C7Lwom5he12fwsL6gtC4bahwLubAoCKtPCkJTegh9ReQLEoxGCSVNv2UVMkF3KGRNwHeBL",
  "key40": "4vQgpodtepABU4vcQ8KAooD2VsaAvNXPavoNDXWzAJ9112Uh3UQyrFDQcSURqGNHknqXCuaD9QpNwQvyCT3KKNQ3",
  "key41": "ZWxbEkE3hUvypxqchixgmZrt2G5botPdsp5KkoF4mXKBfo8pUe4FuPAwPYihPNcsr2XtGZCW7PAmzJiC1hprz1y",
  "key42": "4fgh7PyEufzT3Pfn7Urd2bbc1E7J3XZfEZy4R6VebtpyzGTvttYsUod8ECGp5BuGaBYHwWsMTZEW6ECPuNqSd72j",
  "key43": "5XRiShmpK15rQqzAyTdKKu7KcwYBbSyMiWJJGvnN2MPtYW9p41gixvBnmCfy7JTrVLVSDnNENirvTazHLgU2z7xw",
  "key44": "JXFky6mjc3DBJ5ZzBMQyRWEUwQP21ZUcBECxiiSEde2zP9EHR35kDpRkqZxFqaiV8ZMcU8MrrAk3n1ce4dHAMKh",
  "key45": "5hr4oJdZTirpoxdYrtTvWBZsTkaggQ4whTNRZp97M7Yt1ibutSv9uyNcWQ2oNsJKC84ePj1V39p8LWPokTXMw8ku",
  "key46": "21Uw68KHa3Z81GZq1ARC497SV9dKmS3m2sdGATRFQka8BGGRPquH1yQ5Ze7CNa8dSrWMaArduvgmYJKbyGd5RriP"
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
