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
    "52tdit8DtFkUwJg3m5mLD3DtCmgfudJyuYKn8D5i447VpLnep1qukhYMphfu3kdbfVzckewMjqNHc5fmSCmfCpmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u6UQyDgxBRaB9uAgGN1dFTUkTbgWrg1ToPhw65mxybqy9jEoj3Ds8QhC4xDQJoskNTC5PWK7nUc9Nj2ZHZUEkif",
  "key1": "75qjrZcVJREVSH3eSmKfSTqHRCtQ6sLveswisjvCeSFSSiNAY3EWnFqRKEhMVwCHxzoMGHmWGR1MwcSetggu2AH",
  "key2": "2hsu3EFjgwEuG1WW6CmJ4AG7ctswyaEVsfeGxZJaRaMrLBuCZE3L5zbr6B7yEbosYcgkb6tECoQwrroDcu8dkeaa",
  "key3": "4MxVNjS62qxejU4ZjRr3xuaxrrW5uWovDBr14CLJw1WehHW246An3xgzG1wvoBdWK4MkZxWkne5P8SeSXZLugCmB",
  "key4": "3NikQVfhQSDhBj56e7ZXwaJFLx65421FtZq7fMu1hJzgSA2J2MTPMN5ZAVvd8mQa9NQXxRQurahGKPfnLbR9DXhX",
  "key5": "5z1NALKpCUyqwgA3eJWvP125u3hS6c29WuyVstyUQfYnYogeDVR4SofER2KyU3tpWqCdwj2bRxBWvdx8bgEPwEj6",
  "key6": "5naemGZjTmjNVnz31bQGcNLkZARMAA1emE3KzpASG2UqnBeYU4nNL8McbjUPeWUkiY28rpQUr2mkK97K1zcZ9Gw6",
  "key7": "3R4xxoPK78f5UQSvTbRLGtGqtYvzB4yLeqw8Kaj8KhH6X6NYMcUBahEQ4cF6JzB4JEewtcTdWrXaAMVrgo7J1kda",
  "key8": "C8qbdCBj8dW6sM8CkNyy8Y4mhkLn9r6B3FfnsBoENLy36ySJ2aLkWnbEtr8hGjz8v3nLgSGeeENN9nHzPUtA9ot",
  "key9": "WgdEFHib17nSEdyvo5XzcHeiau7gm83HLRBLt4R6Lhjr9VLRgNK3dEpss2Co94zvBUZqdRvyKXP3zr3E4oHLUhk",
  "key10": "28gz1cQkNXNniikAhTrBd9ks9ceNokcwtn9zTmK35aGCMZCDPTMVR16VG24yLv7sXGVAQWtC5Fp44GRFwxCJhGMc",
  "key11": "2AvUVenJvDgRSyRXXg5EaLQRECBzkD5zqJGfvvPtBskNNTTe7WheWXjoFp2FeLUW8Rwz1E9Rb9QekhmSHWWSDUq8",
  "key12": "3EthxHytQ47r7eeiPXcHYB11CcdroE6pSomwU7Ef93DpN68W9s52ziqVLPgjNjHfZYYfv52rBeVuCFdHEEpyBXda",
  "key13": "5ZvCyjG82dUV5D1dp6b7BwWCgQTPQ3XWLvrrgEVkwarb9td7tzVqA4n6RuBL1vHCqZL6JchVQWENizW1HGVSGE3m",
  "key14": "5BZY4Zg4M5kqMNHDo6zuZhchzNEZvBjZmHsavR2pNCSfeuCnW4vQgpEJpB1q1hZHZjgntNagoLFrcZwZhZ3GvdrK",
  "key15": "4J4a5eMX1EDq5akf1HpLbLeR4pwMxuPGGL6rcYVsAJyiXLnJ44bAktjYRUoozwDZEMCX7LfVapTBy8C4zFrhZUBi",
  "key16": "2HWHcki2wCePtwHzjW4Y85UvjL6e7RJiXbNnpnguFX1gMbHgftEyvtLWks1A5TofFuhiFXfgoTmZNN8c5ACV1yZV",
  "key17": "5wqyN8LzDE3mEr7JwTCFytsB9oBbqFmGMZJbtmfequK3UAK8QHhwBAv9YgRAqX8janrnkQCU9Nt1449TD2JvPN6c",
  "key18": "3FVSkMq3Rvt9U8hzfGMdQFVmRuyv26LBMzEBy9xSP4hqnWtzVQ6Ab79XmPVziRVrMYAy7CQYu3zv31PVwwNdcCeN",
  "key19": "4zirGtA8MmnuE757cqFBjXVw8K74VAmcnBBeyNapc96JaLmAqZNi3o3xy9W32oLqaKtiJZfUwmGPX71vgN2DHHeN",
  "key20": "zFHNAAxQnzCxCbbKtzRpuHbAQhmUWC9yFXtYZR8eMP5GM713bYYBJt8fTYVYs4NQi8oMm84Jakf9X9gWiih9eSu",
  "key21": "3Vb5n224PR1LPqdA5qMc28vhKu5PXEgwaSn9sUwpdK43tRBCL8xG3inbSD9qyqSbLHaZk4ABNSs2Jb7Erxs5f4p2",
  "key22": "4gscvpG9SxgLcqRjyHsCSMMyD2bZXkfqgzDnGjGg57BwJj69gBD2VwxUeLH3Yw6opkrXmABceEaoDickXBWEXHgH",
  "key23": "4ftn4ay3kLTq7Jz9Pkic8RGmmqMdmUwHNf8ks2q1N6njsXrRPL1aEEWEypJwyuGdaiTVLQbn87psWBKzUmCoxcga",
  "key24": "3kGgqdSh95dARWE4bHZEnME4YcqQq21gC4NzGie6XKDYUcvZ8viMaZP5DZRxXHbt2y3mU9mfWBWqW7jRzepzGmNy",
  "key25": "3dFx9acRYyeSPZCtrNezxkDbpi165dB7WD3966xFLWdQg5uXCF5aqrGazcPNvjnvPayDmnsEwjiqkg1A5biCsQeB",
  "key26": "4d13CYTYUNvT8XfE5FpnhXnskwuo5WLkKw8Pi2WpYLbRQfeR2tiR8e4qXpsT7bGKgcw2Ai362JaYF7zqczc7mzTC",
  "key27": "5Qt674sjrp4Qwz71rCtDDL1yu6jPEWUYhZcGkTCB6fADokrzukXJ5tCfPqGmDfTqBbb9sS1XB2bdafeoTXzHPvd5",
  "key28": "5irDXW1JmFijW9FVoS29iorD97fNcdKzcCd5jPPb8RdAKb51p7vS6DoBEEQ3N1PELeTrdRTTgCqug2gxBifVwij2",
  "key29": "a9i12hvY2xReKEj9ZcmcsfowRx1f9YihERgrJpLPoesdAjXPVVABh2qouiUUAz8k89fumkMNqqJr1nSYh3hDWxn",
  "key30": "9deWSQ1qaUr9d23q3RSdp7d7FEQrch2J5d5f1AEBmAyb4CWsWLWEaHqTp2it21Rvdwf4wbDiGrgbcV859UA8MCX",
  "key31": "4DevLZNudHHdL2UiocQwsyFfcLo1kUtyo121XphS6jVs3NKk3nidL5U4xStaJi8Eqn5kyQbEuE4TwwA5n6bxEBNx",
  "key32": "4J6aFpMnX3nEuyQPpihuDuvAPz8V4ZGwhNd1dRAWtsCq1MxNbNcH8LNV9RmwdEQHLfQ6pTWNSrfTeDiWr2SkBjf8",
  "key33": "2LBgDctnE8qQVzz26XnoRfQQ91L1MQvund4zqhsWueS3HYXTN7RHxcLgByFKBe6jT9yBzX7zoPhRaqPEubaVNXk3",
  "key34": "3KV17g4i1v5DMzCotkkTFuqTmkVgndXhi19dC53GcL9VeVDmcsLTemPZCkz3aP2KUA7dCoju7bD8eEnmNJJt4w4p",
  "key35": "2o2sRg4oumDSgNuFxPTtvcNNZDSps9798b7C4tmQEe2xE482yBUhSzBYUue7hM5qWgWop3u8egK4oazGSRpWPuJa",
  "key36": "3JWKZ9CEU7rbA4ZHKGwGJyDNmgq9pMSQVUyJbeQCcRWMUJPtiZ8uPsD8YqLb78KGxPqjS5toPS6TUhYhsEbPLd5j",
  "key37": "3kWaiEbvhpn9i5fNts6XYqEyb4RKEevfnXyKzFT1xvNrB8D8Y998Z7zCcXQimKmHQcEgutRuoHfNWpxaFg6R71d",
  "key38": "Ea3ZtbKPFZAngDnEibTxmf2S2ZzdJw3owNQWLSEv4CcSXUKgTzM8FsD3gjZbMh3MsYMg1QB1DdYSiF7z1e4rtuT"
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
