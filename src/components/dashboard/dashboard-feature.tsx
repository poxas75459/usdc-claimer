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
    "MxPqwVAfyVSBT9vNQ5NpxuxZaJNevvWTxs2K9A29Bex2d1j2JkAYhbrjDbMRSQo7ooMknnmFZnWCrNA2JQTfECq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPy6MEsksm6gU4BN2x8rum2cDet2crmUmHxPwevkaXDixwrs9PgGbGgNmtfHuxGVZ6PwKw2SmwsY6vdbdXT7k1Z",
  "key1": "3HSNVT7MEkoEzBC2AHNjyph9n2etCYNUXHpLiFXXbmbxEDDPJpmz5Ab5FhuUzPJQdwxHhDYu8PbeP5t8m8m28CKm",
  "key2": "tq4FuX9ng1SgZD1WB19nifMqRHXyVYmcTyLwY55crG8YE4hFWRzxMJ6dWS4niKsdbWNV6ZSkBhu3CtHNCu5QVf7",
  "key3": "2WXyeGhiWfAafS7PFbgjQuhiYqwvCRtASJzaM1pSaD614dQBo2aCWUsCFYPCYavDe8ez7hTk3kq9Sx1rho9RWZxB",
  "key4": "3pUpi6W9XWM5VPTRgY4GUHuDrGLWdJuuNkkEa7McSzocbfLiM91ZaiG7XZAYfKEUGia3xWHhhtYQoee35xHQwm4A",
  "key5": "2A3nXhmQpHNJxnPXJW59mUx8Lz9EznpdZkZAsopgqPs6DrrYdLsPAEuxPZuZzr3YEvLfztY58tKnR5FeeCdsoyRH",
  "key6": "5BEs6BErZoggbi6CcRM3613L48fkaKAQh6vogrofyUS65QtsjbsyuVBqXD5Pv4yzc36ATDTedCLD1nJz3Jw76AvB",
  "key7": "53K6vjz1CXE8R7d9qoGWsFvuY8Tshyr14RMTWH6XsQEo71RwZEJnxQVo5rnZWRvFJmejhpGVPyFmSby6j2QLTyS5",
  "key8": "4dUAjnbUHtZSBmpK2rxjD1x3LvhVEfJUBnyCzRpV93V5DqYUeDviYxoUahnTndj24KEKdghdtB9XnMhrTKCL7miD",
  "key9": "TVESsPn3M7tKwNovWhobkR9xPiqnS9zvCwuE1t6hztreqHQf9Sx1m1nEanykhxmwbEm7pHLZm3WWoFxE3dUk5NX",
  "key10": "3FHPkk5bS1q5hJqWFYjp8q3TzYchLwXfCEjGwWJb2LodRWjYb8nAqRma3sNAEwAoXU2hd6VBSKPmkqqsC1ySSiNJ",
  "key11": "4PcR5tqx5U2Yyxr23FsCtVS2FwGH5PcWiyF6Bjvk1iwkoq4KG8HX7QnQnWCXs1jrHZ3Fg5c3bDYKE9zQZJpuXTEv",
  "key12": "2ku6MTkzUXrijgZFNZ2ydqgvYxTB56GLyJMtehSuB5eTW3QKVwj6W9LUHiKoRoPF89TK2ReiBZtpqs9emgY5i1ga",
  "key13": "2zw2xN8e2UJbqVYrpdqPJVQWB8K92uqtfVCFvvLjy6M2QZJ94UNwnNZahqMRYLpsyqn9aS1VARh9ZWKCCgtvq5Es",
  "key14": "3tSpsetRJPqH2WXVUNfivm9hRGtxjpDdu5xdD7XNbC84KsEiMkNhM6F11hdiP9aBp9CVqzPVsNzLpA72QmodD3vd",
  "key15": "5MxY8DhnQrbXAQpjqh4QPhQoZqeNkPvYd43A1e1gZvjyQuCQRkrKGyjURpf1MS2mikiZK1e4ZdGXKXZa5TgkvusE",
  "key16": "4kaFoofRQjE3DPctHW5Su5CvfAtaoQM7bJL1EuEeB8xkBnbead1Hwoqy6LunMbPW3vDQQhPghprbT5TZnAvToxVz",
  "key17": "3dibHaXwq3U5SdmjBK1L8qeAqMWXVLzUskv15okwcF7ULVZjx7zJwsN53hUgQABHXLN6LgYdfk6x6ZQQ8d8h7yyr",
  "key18": "5CTAn2hSTWYxdr1DJY3KPHjnDEJ11Ge9Hc4hRqmRhVwTd6ZVcV1Re2WnoeSVunPaN6dc5wT1yfgjwx1bRf6geHNY",
  "key19": "5j5G4zXaPPE5aAcbKge2NFM51BbZFD6dWJMAnt3cMBGXPtEbZ4q7o1JPmjHTFjysuLpSVqNA7ZRD8JyZREX2BEES",
  "key20": "2djn1G8Ac6GbYXhgsPvxcGZ89kSgHLhbuddXmkH4TusxLgXS3AgPNLcuBJbdyFqZg23KXPm2XEpEg3cuSdEn7yqB",
  "key21": "2qWVf6D8SEBJFqxxnDF7EPTeYfBhnwCP1bJqHv76jRgDV1Qdaeok3sLjQRJjTPNCWY1bP4Ngvpr68YTASLUaTxSv",
  "key22": "4BuoJmX7NELcdZRC4YYvJfLLwPw2FKBUTvkRkGciJzqewf9snf9feZEqozfXceAg6xtpfWBFkHjzNKJdchR7vu5W",
  "key23": "y4TAXBQVQ376EfCBAiTLpAAACHEVr5cpxFpyioHkhdwK8m7RnzcXJx3LUhVtMBtLBP9XVgQgQiBGrwbnHvC5W7H",
  "key24": "5QHVHkfkV147i2hiuzjNzVQK1Rr5P62GWqSNe8JEEKXrHafpmTjbiVvPhMNWz2TLFj8qzxxeC1EN7PREDjd7XX6H",
  "key25": "3mZ1qXGVUrYa6tQhcvB3QVTJLxGrR3dCrYD8szWjDn1SEvRud4ik8kfwMfgPpTmKUzKpdWZqkAG7moe1AnG6RBD5",
  "key26": "X3ZJFPeQResfb5s1GUWesU2BMjqMv1UxNTornw7GjrKVe26ykBgEP3Vpu6csZ5KsACo3d3LStmr68mEYY5Kfsxc",
  "key27": "29TJMDtrRrBDM5tW2mWHFXB63wseQ3kofQJFhZFgmDU6Qn7AgQfRvVmMqvTok5gkF4BpN3iwiW6rVzXgnWXqbTDx",
  "key28": "EM4NWbU7jW5caS16ehtcx8zn8bdgoV4Q28zeM58FY3LJqMbzgABW9Rc3fa1a21CP9p9nRjkwCWk5LyqCPLa4jNB",
  "key29": "5bgLbvHAv3Lgt3B6CX9tCZuGY919cczU44dszFg1ZP4Epo2NKjSFVwGBcSp1RYJ9gqGAYXcTNPRbJ7EZ5K8iet7L",
  "key30": "4b9Z8pc4GbgX4YcrzXod6t7UCxPeJbMW3aQ9voSjqvUAqyHJbTdh2aGxdvssmYSnNDX5HFd82a1jBuu2QVyLAGK9",
  "key31": "5Ajp9crEag3oZHbdJWa6rjeJwEmceYaXTdD1DZjYZyyF5jgJ3qvTTghDt2rkUBtPxvTmnHKs9sFfcEWp59QbPAn3",
  "key32": "2v9gHdAQ8p3BLqtopwoJhCPntkwztXoqZVWF78SgYxJsmWMG9oUywWrqFYBQ8cUUhjSN96hB4VDhMoqihDQTJyXS",
  "key33": "4DijQ5dWngX7fzf5EL9poT2LmuYkbHaS8eWNXKAWtByASu6JEBb9mYiSJrLAgUgctGTnvDcEnjWvKM1YE2kTfQ5x",
  "key34": "4XqTAeJSyBdGVf8TWA6vPMcXbtXJHTHNodkC1xdp2zXRpgSKJWyj1Rh11xBiXAeXfF51VpzAoPtUeQgPP8Wrx3Gh",
  "key35": "5EozVDq1YresFDfJkqTvrtmZgbnPDYXMx52PYcMPpRAnVrv2Cfm5fL5Gpk6buARP7mgujdJi49C6LKkymcDVjdw3",
  "key36": "4uR9qcXKrUyGPzPJEhuHbrQTY1x42R1yaSh5Bojfh27QevWbLSA8T8WLyi2LA3dTAWM7QD3dj8kQfJMhYpqbYEMA",
  "key37": "39cvXJAgKRkv1D7sCawgnV2nQxac8K9MuSF25kgXBHmDh3ud5Z37nv5Jwb8Xiza69g3iqXwjtPFK3bRp5JH98fo6",
  "key38": "upepWyCzSD5BrGy7etk9fKR6qC1o6Ufpaa7zq427Fd7M2qKv6tzNKKAjHQDih61pPBUPjWmmKThU88s8SyhkSVF",
  "key39": "GdBC4uXXDJY7UZ5V46uBQZFAtLnetAK4dK1Xbinbx14ofbopjTWQqMbjCsMTTtNY7z59SuGGCh9cUCFuFKHtizp",
  "key40": "5V6N3e6kj2596G5PxbpAxVa2sidj1SndoFa9dcJYmrvRCG7XVTae14Egh2mCuAQoRLG2F7ZfibDrEvFfDdGMov9Q",
  "key41": "23kgggGVG9gyF3g6o7dMHvpqRnuFkzoayA2LdtFfq1q3sgzdrtbzABxQUNnJtqDdzSwWDGqCNRB9iSWzb1ERmb69",
  "key42": "mT23yJzTTL5Athat4o1uuWR47TPmDB7wW9KUgeC2MF2ccgXw8rkyxzFar6YE3sLTStk7EieVumvYhKGmvGCM4xQ",
  "key43": "454oSUzvs8XjY3Jxu73YWzXGzgFYFzth2b1tSJimGCwLPZKyssVRPLJ1ifqzofZsW9WLH3QKar6xM3jNXKUX8q1T",
  "key44": "61TdRnC97VZdaofSpMhiCDVzXu39Xz6eNDcRStYH3w74PGnv8qk6nJThS4UCDsHUDHs9j3YGUh9BebJjhMQrREPq"
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
