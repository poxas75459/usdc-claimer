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
    "54R2aBxCRAa2CKWu3bWcF3EFdmEeRSHe8DqT1z5p4h6Ccu3uMhGyoD2MxiXkSNbnSsXwp1CEcsNwxEJsE2rX2mSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "agrLCYesjf6piUqpmksbU288J2ZkUYKHQjpEEeffrKCmqjWMGAW66PjncchjSXpY9MW6bkTgSsV1KT3awWzy1zR",
  "key1": "31YJAncuNyP9aysgshuDmjMDTaoytutKLE3jXn3JQebpmZ7t9wagB2ThNBzX2iPCiqz3jFA3t3z3P9TbMhwfbCyi",
  "key2": "3Yzb9UEaVKEAUomo6nmQWKftnagpNScMwdDBowFkQTtpK8ybva7fob38LhccRgEpXWhGJbvkbbGSFpdxev8qUXdL",
  "key3": "38nmqvuUfQ6kq5UDANGxRgyUigMB8pZXzp11pCTNZxjsURX1bpZdwzDRUiqtM2KFYhi1tj8t5zYVYrVnhhcGa9Uz",
  "key4": "43XBvWwJik3URtNmApcsfwDpf5gztWQyHEJYgmxAob3TU4D3uMPpWr98pP8yQJhp6NADa6Y14tV8MYWTjyvJJ2gn",
  "key5": "2oe315jZKXi5ypK3P8yRfoG2p7LnV9tJv68aoEFtBkmG6r4SxPWmVHUQ5Fd4dHx9YittTCXCqBbZJcpko9eoVNqE",
  "key6": "2sDRVRjdxbN9EAJ1TvWEQpQHqgrmZSHEc7nGadRegXGD79KntE1ccxadyojQ1QYMnnVDu2rEhWiCzTKiMhxVdRUp",
  "key7": "4BKvNu2s1rVHBcA1rAj9rzQRXCNiscYPjy1hyouD1b47Zw6gDFue76hN28T1JRamnQi49VVzAp9CUJav7tisqSU3",
  "key8": "2s6bUdRp8YmTkZV4wugyZNzn3zCEnG8t4yKMcAiCrL2bZWiGpjK5jSoyK7caeCQKkb6ZTwPRX25andJqbpnufyT4",
  "key9": "4VQXginRSYn4LMFUTQs3rpKM51uRRnavoHWipAyzLwTu6wiSHPiKbHNuRdsiGNy32tsTKkKH8MYDWVF77JVb3Q69",
  "key10": "4XNYzUREsJRT8mSE1Ce5UJ8bBE6aBq8aqHb6fQ5mn64gVEnGpKtQKWub8cYbYtivySUbbwdDk4dresAowvY84wpd",
  "key11": "4FoD5Kjz4QG2N9GNNVFf7vvB7rUcf6k6BW2uv5DzvJCLPHriDQ3QpDvTE5GUcj4JpyAYete55L3uCLYsxN2KRJE2",
  "key12": "3DuZykW2sKZpKSG4QFBhZBzRybpwDgAD55dsE9FAKNagYsU1BNnDUDudRxbE9VM9Brhqfq8T5Mub6V4nGYTYjw9Y",
  "key13": "2bUcYBS6FDrMxDZzKxCmysFuaJB1ygCBpw11ZbEFhc2Eg8JTgmYcsMBdQCBCaR3cHKnb1F6oU8tgQ2JkM7thLYzs",
  "key14": "47szyC4gXeHVrsLgq85w9fNgSYspYEWSQiQw5fjLwy1d3QaVHqMUbFfxiip7qmgcin8tz8KKBKuYbkQjNM8XvyBU",
  "key15": "4wCzuBj3r4NJgSdhxJDfHLDheJC3cZDwcvCHChHuixuxauyb516xyMbTcftusrcEQFvTEyg92qNRbqbK1BMCD2wM",
  "key16": "5dP3MKMu4JRZeHoKTeuVy9a2UnPmdLBLZUgagHtW5q1EY94zd9CcBuAekmB4BND3ySzrHwAxYToNo8Z3GGwTsDMx",
  "key17": "3JtS5Lo5rX4PgPJgExCdatZdZngrb6JjeckJYgjRAKXgJMTekRex9qggQLsHataLugkbDP24cbBG57BQf6BjVAAX",
  "key18": "xKqXWKqS39EMgGVL3JDoL94QPAphpVE4uemx53tjunoXxkiwpcPncuqhER1Ui2fYKqj79fpz4UoAJEy2wgQdFyf",
  "key19": "5DNqaoSWbgX5JNSFo2ewRZj4dtgNF4fjNiMBfzKJNtqgXucwbVzHDNWi4NSF9nnkwBb3XPKDD5bhcSuwsodqNJy2",
  "key20": "3vtMcY8uBhRnvPB4xvBk6w5hyz2Jio5BasVxXsXcyKCSFwJ8MoSznNYQirbS1zCTUzAfuPguYKHYnZUareWcrrRm",
  "key21": "51U6zme6V58ehQbfnM2uJUs4cHQt81LHaCgHDsdoMaE46fcduHExP7YpRYFGSQo5CWtNZ2ZTrww8opraxWxttZZ9",
  "key22": "2Qf2EcJg1mKHQLFzm3YUDj2LXP8MGXcaV4wR9nuxgTsQBrj3EFjybcBDG3AsJS57L5f17GW5ToLRQ1qA9rpRHQo2",
  "key23": "3wkcVHWPy5tizf9ydZVKQyuftwzaYPHdkUYfxyay95sftdh7WBYNbLCWVaYdfJeye8YLrntssJYZ1zU5TUsLFZyJ",
  "key24": "4ux5f7zvW7u1nAqNKthJQTLAukctCcY9muHD39p1zhYJ9oC4xrTx9dkXNNwkuZXoypmHqWgfs93wq8XwTvrVEF73",
  "key25": "4e1GbA958q1SEME7DrwNocMZfERc13adMDaTSPH2NBW39WimbQKL1NobqHQuE17Q5PoahwmYS43css2u91wxzKBb",
  "key26": "3YnMt4WstHMVVgGN6AwGKFPZRx1RvSstnACB2ZqgXuYbHLX2fy9Fku27D23GCbFSzosTDJf15AHNAhzkfAX69mUq",
  "key27": "3SrHbPvdipskYSJQKqTvLS8EMC9kbSktnkZWQKAF6yNn9DSM9dt85kSFLXc6sryjv6sNDDLh1ZN2UzJcJia66YhA",
  "key28": "4KbubMVf23UwTTcuacBTxZFxwz4irBHonTxLK1bfjC5u3o3VApa8QxJdQot1n8f7JAaBsNsApU8T2ZddfnggUhWH",
  "key29": "52dPrzjWWDezLGFidWy2Y4Pbhe3Us6zQeqhQcRFv9oimVtnU2QBvwSvfzKEXRv1yeFE8capwACUhTRcRqXm2m4QK",
  "key30": "4T5F5i1fJz9T4M5yuKEs8D9M4DqskvkGUF3ftJseESQ7k4D4w6h2fGBzm3S9UKdSnkFxWBHGp2KFrp4xE2X5YicJ",
  "key31": "5kurUAbKQQo1Z9Tzd4c9G4pqwpUBSd3pi1gjmn2kEqbbCeZWWbxgCT8U6e9Pwj6oh7mHTCYv525AXrCZDPxhN5pv",
  "key32": "3YFF4UmyX4dqE8dwApdqyC7DuLizZ5GPoFSvLkXi47bfUTHeesCPptqcEqrYbvVAuXqWtToNCm4ymap8uDxwF6Q1",
  "key33": "53FjC9ytkoKfooPZ8SPaFuG4pvyZxFwG257Rz8KufsgAvr8LoxwqtVhcn5V3zLGeYYZAuBSFkYKD59Xq7kz8nXVM",
  "key34": "5oVy7GDkzFDQc6VTEQQZ4hL9TQTHsUcjFy2PPcbHZEr9a4HLsMcKJbAjaF2cENsECjPZNvx7iihNtkQBfRNE3cha",
  "key35": "3CQTrFZbfQnWQFtUaDfNLgzrdq85GbcXjrUWgeLbA1hDXVoExgMiNkNmfzbzxaksyf6HrphfZV1RPFmDQQF4Kyfk",
  "key36": "3LPbc9xjsD2BLMgt3vPiyq41vSgLB7fDC1bEBo2VEiRqw9pwizmCnkD6ojvXbFiT2bcSM2jRDGFVLBMSkWow23tQ"
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
