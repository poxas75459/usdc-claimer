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
    "3fypyy4QJ2wXD9yVXEziKZTxMXCbPyG9D9xN173FvzKesoUBfSnBrN8HszAf6Ja2HkvUSHWCnsRk1UZKDvKcHYf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a3WnybzP5274ePw3PsUgc9gLdrFbEuZQBQboZryuXjS9s7Q6husauAU8Tofy7uSbsmHdNjtBcQPVLDYKtYdaxCR",
  "key1": "2fAUwKSCdTYAYyhEvh7PfpgYXtiwziRzKnbTea4nv3c74XjDGa7VtcRpWKtdjhAkS1VFyq5SzjQEZH7Xh8BRY5Vn",
  "key2": "4ADZdPspbttxa4svvP25SQmZZr71yP8qjEp5zJVkdLCBuYrmgHU92rXJickJLAg4XpbmJ83aa7MD9AuJGEQYVyKh",
  "key3": "5SNJiYfDwGfkDYK2HgxtDn82sEEXCsSfDmQDXyvYSYyjXwVDFF57wTSUKVddfXdk76oHrA6PoUVDTz9efoVAwuja",
  "key4": "56ZLP2HyiG3HKz892aoYgRqPP2dg6uFHvL7dmHLurxoMEmkwepw45Szj5rt6opMpLQbZxMKwbmfikv74TUWdwLVV",
  "key5": "4nL9CqCNFq3gJbccrFbnwi8kY7eKqN8G7GgQXbVYSioePGsvmhswdbrmqzxQwHzzmgnRbuh1SaDzoy5GUah8iYm9",
  "key6": "5HHyG6wn17ZKPknD3RjWJN25s9oSfP6nYC3HeVx9ztuHvzDhc1Vfx24zn3teD7nNfQi9pmZwZRekVcrNnVvutx1D",
  "key7": "5Puu1dyrQJ9YDFzac9osT4JibrqNEUcw97xTHnheqjXxsQY6ogiDsXZRMrn2U3Hfeg28cQjL96ZPuVV7A1ankxJN",
  "key8": "2GuLV1oCjn4rRJbt24tptqtGu8Bjb1qHUaFxXHDxAsSnkWP1S1ihw51p9x3tMJ3RiSCrSPBALnYvPBukFdZgyq5G",
  "key9": "2KfkX3VsVUuRs6rts9M5bA5BwyWHPkFG7QzrdXCchMGzVUZ8VSvBVDaVMbWuJAhHRHXRos6gZJK1XqRJX1dTf1Yi",
  "key10": "4EbyVTfjGGMLHRFJouXhcBvFviMPbZFmY6ab5jCWKoQKo97QqxJ3Zhev5FwmpeP9KVkzgXFKEu9ME5j5fuUUsR3L",
  "key11": "4QFiUwrKTxJT9i6sS2HJhcpDmtXLEDZXBzRPUxn6286ZxTrU5K44z337a38PyGRmXuAa6n1mtayRp8CQ2zFTBf3Q",
  "key12": "4dPVA9yo7kaRRcEZesc313umgxeFi9Vv9VnXKuhD4qzLSKydRoGj2VF4ohvtQoKpt6TmoyUqphXx4dJLKD6RjBaR",
  "key13": "4ZyDJANB79U6UoNauYkaUHhnsEKEwWjixCpJ6JPd68TheNyV7GVVDjWTvmoPCCac4Xzdmce9aJXaQn8UUCDSzqL8",
  "key14": "38u8idKTC6kx3WmWBnHWhwesMcHNV7qA7GoAHhFP7gyeyhrXCe486XGBDQ3W4fi2TfAfXX2rN4whQLytLrRUgsYf",
  "key15": "4SdepEBw7SYdSRoXP3dDhaJR5JQjxtu4K6cLsftYJzfycywRbaShSwreymRcc6fCtzEDyaadryqUdU33VYqYF9iW",
  "key16": "2CWMB11mxnD9bbdd4PeNtcdpAepw1XCi45YHzRZh57FjCgFX169QZ4MUXDsqEVr2HDGZdBFXYqi9yrxg1Cvn3Tb8",
  "key17": "5GjRp6pLBtVfm67U7vmCNHANpDnr4GFMFCoxHZvrX9tUBBnx3Zxz9PVXKdGyvdGCzCoF7LMmMccLpLgCc56hyVpd",
  "key18": "356fzL1qMFz6zYtRro9iAL7VWXMXcev3Hf3ptfVczofVfZ6724HweVx3b7tPz3sLT7iAuwn1XxjZ3fu29qYTEFuc",
  "key19": "5esTTA4QgrtQoiJZUJbqgrdsd2redgsZkrA51aPR38GgLJ53cfd2PxNWGa9EzNBx6YsLa45vvB1PCvqGcNzKMfsA",
  "key20": "569XyaAKduPW3TMwUq2B28nu82Fn35NSjdVYWUgv8ZzAA2dQJYCsJxx2EgeZM4tvVxzbaj6tBPh1zgpTsEyFuynz",
  "key21": "g3rP3uknccrnzs3WaKTRZ4qfEpnYaS9WmXVk5ADXRjTsV1dPu7XbCPTsLLevRfswrb4q1dSf8dFGksVkhrxyv97",
  "key22": "MZ6BawM7fRCL5YHPPw6gsCxMc1ZpwUEhDnnaFMv4y6uyx8GgfVT17bb6Dowm5uMD2ZbKaDiD9bnTtEQj9h2iwog",
  "key23": "5PZtuJGfaX49GAJ4V1MjHnyX446e2AAKZwcKf4LAP8ZPzvW4Naan3bMwLvu5PmxynYYjs7Hn72x2h4nVYKbJqRR8",
  "key24": "2CEiRZieAvdiE3M6Jfz1T8yuVSJgjC31anwG596MRPFgXuoyepRomT2gZaGqfE6dLtjEVDbo83VdCCGbtoXiR9uf",
  "key25": "4N4SPGsPVvabAabzzHMbNi4otftXn1FCURWUS8x1ETutD4c6E7mXEGMjDwYqVSU25ftXJRT7gbjWLpyTDCVoPHFT",
  "key26": "3n3umpb9PiTBvjVB9j71ijAvJu3gWMkERL1Fm8wzHYFEjwcBc5nd8ZU3j6ctdGMeiMttbMhPPW12Po8bsJCW5Kjv",
  "key27": "2ZkdVfAe7KeJ4AwBRnDqvaEVfGks5XhUndNR2mUMa423db9yvcZURyQdf84b4TjbTGZJaUErLoJjJYkv9sLh7fpe",
  "key28": "5Wa7pCteb9Ec6ZXjY28rFkuvtecfYZToZWbG9LPz9aDJorzNwpdsWWgqJVXU7CujsFy1eYSE5hTPWny9kD3CCCTW",
  "key29": "HBkXxneFrAY27PUJzMYX5DT4Fwqgzmy42DhqKWkYBaeYy7Nd4br1QfLJgo993igWMVreLGC3ipGMi9ANVwvaZMM",
  "key30": "2n8gUCfh4LeZnguX2AvQKC2ZrN2nuA5wyLfRZtUyZwZqRDxzutp63LrMEgjrpbjAH65LHbX2NxdMxmEY2c4r3nHk",
  "key31": "4THTZkLM74mV8E3hRCngmUUKsXnjRP9qsvRSbS4MD6X7bNh3GX6M3MXEWBWgbpgRtuyPtgBstqexZY4T5ikFix4k",
  "key32": "3hursMWkRY72MZV7HTsVrwixkMorPHHAJf6JDY9PKWNUW1C4PfvkzY2BToLBC13GePa6uBgq4Gre2UJKw8ixUyae",
  "key33": "AWD8ZY7egfAGLCBaHQFsyF6fcKGbre3pRPDn5A4bagWc7t93BMvmoe372xCYMYBMWEyP29jVSFuKpW7Gq5LMti2",
  "key34": "4gm9ax4hXsHJuT5i6uTW1KbXE4C67aaKNJfftxy269S15dGJzms8m7vGFh4SxzvEZEYryN22NSHEYyh3oTsgnxKP",
  "key35": "Awdn2jPmkugi3jMdqiav964dUzn9JJYaP35Zs1ZiqmUHQJcxYSWSgPqQ8YFLnJD3LW361CC4tin5GnwjGgqBBoh",
  "key36": "41Pd73AcTVAQAtPQEg6Ckuq3cRcgz6dH38Tjz98e7t3eHD38jJKjL4baS7EBcfG6pRYnVXasn4yumvG8r9PzrzUy",
  "key37": "xSNBrQZUZQ7cF6jR9U7gxVwPCzpaQSvRMmMxV3izFYMT4D4mnQA28HNeJPaLAtFcWHc8VqRv2PiVfg6NjD3edxd",
  "key38": "3dNbQtJeuVNNFQkXregJL55HSm1gKSJEKqMe2as8KsxUSYMxtv7Wiyq9KsqeqwE5BZnPXvz5hHg1vkKrudtwT348",
  "key39": "5Q9or634qHBHAFHUD2o7kNboD7pZNuY9F2nra5MxBx74dt3jrNxmpKivfuRSw9qw9TM8fs9j9SmW1t4mNDS9ppF7",
  "key40": "jEfBDCjyw39ucpi3kiwEWgRQVE8uqFWqiNbxRnVF5KgBnxrinE2V47aeuCxefoy7WCWwbLhxPm15hvRrnz3dTD3",
  "key41": "CgCR36csze9tmsMztfgQWNf6bv1X2C4iUPegczxu1j1ixpCeFmnaScyRbCYBN4H7cBnYAgpD3hhdxCTxQLUc8UV",
  "key42": "91omnLtWm5kaLxALKZvyJLCPWZ2c8tSNtw2zAYSbaVoTPYsjwdvrAE3vCJF51zML5KtnFcWVnpbuQi2v1VTS1s2",
  "key43": "2zbQUvNVzJYwydLnhxPSJHiBrNmuyDdEzZwqWMQ1RaXFP6uatwcL7sT1EmBYU3HHNEaCGxV5VjuCMERavAPtBFn8",
  "key44": "aqQ8mKWFur3e16wNveBQUnrC8aaMK2pdiZwK3xKuDkcq4ruicYeK7429JXBtWqimawHN89GpBQmM2gqvT6tiSJj"
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
