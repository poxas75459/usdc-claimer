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
    "nw2YxUr7xoYqY53LdDsEaaLnbojL3uHGi1Y1yrXB3RhX6dQ3MRFaZFzjUpmKKcift9L7uHALdDZK525yqjtF4Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UPLGfsYnHuvwo7ynaPqeiQutjkPwEXDPyp5THR9j4YGhtetiDtX6AXXv1s4ShDnnMysgVJzBqZvomPwsa9tMe1c",
  "key1": "Nc58G9dAJoyKGj2MZjmEXhXHVfCDhoNeaLDfEv8eVZhpEeiARqutgFYBAPbJSfGfW5oVc5HSXhGaksuzxaeq41F",
  "key2": "9yeD4GWbrxRi4UhUk1hjepcBHd9jUsWySXaSDUwMdCYzxs9kbUhBUt5jNaPaXTYiSv8R3U1qSsgTmMp9iBmdbHf",
  "key3": "2M6mrr9xA6mHk8PaqmC6DbZw3iDbmkPxSdeDkmUKSoVcB2CWy4srkwtnKXagnZaLV5QV6vqL2AXyiWY5WqoL7Ejz",
  "key4": "gg3KYHXFBwJ15YsAC9bwvcuqezmuaRcoWhoFV8o5AuEfwYHk3Dn14YZA2Bc9BwKyZjy3msQnjKGCZXmchiVnMLZ",
  "key5": "ig3MzTyb4efzruuP5aXxuSmcEWuKrxrF2aqnAuwCsXnxW7MnjSuUNkWZsPiJMTBms2bA5epUbaXyAAWXb7QGs4E",
  "key6": "4fw7zWcWVrnBxfvdz1cNGdexFpEd1sUhsF21nvB7JfjR6j89mYMs7SK81r6WdcAEqAPXJPF2kDUr7MsoDU4TfMkh",
  "key7": "nUdJh8TJRoEF3vt8zyDs5vKW7FMJR35sEx3BaxvYmr7WACCMZEenGA7BPjjEPoQKz9WwgF8PSpUh6oktsP7YdRk",
  "key8": "5qqc13NK5aqPqBrA8NhgfTQdmCZAcxDDmJjvF7nESrqxrokAs1N879MztoEdMkzvJK1rP1Y7kBRqFVjpQnxge2Dj",
  "key9": "2rrJfYb2rJmGdSGkKgzz3QBfzDnMhQUBLD3rdM4N24vnpnQPncUjnhSRLjyNCyKm3Lh6tDfkEsM5r9kHFnuGR44e",
  "key10": "5qwchoYztj4ZYLFYQiULWR4VrNj465gYCqoGmqxTh6yvnsf28TKMA8wqv2wyTH5JAdrDQQQHbpVyv5hpbSqsf6Av",
  "key11": "3MS8mpu3tZnxJQgbrSeKcWfVvHForaLmAiShCQoZRN8BQkhAxVSF9ZRhnydT7C4frHYzEvf4QuyaRPTpjd2vAakz",
  "key12": "2axZwtMgMbb66zDnVDqA8kvYi3zQhZ7pr2yB8Mq2q1ArFYXvNf6VTy7Ti5upnTARzKjty88jPgXa98JDkSKryR9T",
  "key13": "3aeDmsvNZ4ymBw6mz5i52npq7mGXJeW5mwM4vB4UpX4ZKCnWzU65Ete26y3sPKLhMp6fooWMKFFH1VXuCMzNqMWZ",
  "key14": "639E9DuaktJkS15mTb22YJj5zPbcy7VFus81uiaCtrQ3jF8gto3msZxxPb9TNJeFykWLwBHKMUSmuVMaL7cC2oFn",
  "key15": "22ZfuxYoshmfXPJjKzmwVPrVKmvjGfr6zkthTUVNPjAG5mMj2Pdh1j1Xs8AHgTWG76BMNfcPAtMF9apYEJ5PUkiF",
  "key16": "2x4KMhUah63iMiFXvKzR1xALJw614JHvUiPzieDUuMVVcbHobGAAYyFDMjMMbJbdqxECGMfhTFVJETitfzfNTAHP",
  "key17": "627MxVTCeJ4vdpkchj2AYCnYzqFF8nY1YMoESUfALaxRecANUXMei95HFSwADxo5WNq4KPVRhuHMHFjRPRFeZAwy",
  "key18": "hvuQvjjAgXsZiUKEGBE8Gi37ijmgWxch5uYmhFKq1k1UJSVAkwtAwv87cJzhbvTWVYdm1vG9KWjA3ytBHT4DDtr",
  "key19": "5NtNm5eutzL7yVdd6TrNmswZmAvDAwVkWCYcgkC2WRKqrYzP92QYXwKXh7hTWWSenzEPUuF5f2FGDdRekPNxBGyV",
  "key20": "RadmQfUyP7RvtzEv7kVmjyyXUQjYx7H1sBmHjjFkgEVKDxsTkM7rjbGi3D5DLMhh4Vj9sxHwBPMApoAZ1hrBv4A",
  "key21": "9TvXiBpDprjWZ3WK88TYyRNsqxjaiakUhhufMFTERWM4itHVgWU6WrvcbHwFgmah8PnJ4kcGHf5hquofW4z7mLR",
  "key22": "2PfczQnY1zmVihko7iNjrWtd6bCscdAuxo9ZoAmyVJyfnA3woeSAoVaH34FYg1MBxHrz2qmCbeQCGURx8BbLX4r2",
  "key23": "224C8qzaGJmmwFwsSsV7hcNhFQUMFLi6SSyBs1NJm71iNJw4xQ7H2kybsru1skVQNpKTxdorZ2cHPG1AUv8i9QZk",
  "key24": "4EjqaEmdC8qnTuCWRZvaHufYc12gRZUqguXfoP2g48XQX7JmQeqFNPvanGNvj9f9Xm3mAJd9f4ewFF3eSw43W1yq",
  "key25": "3dZFVh7auFU2oSNt6mvNNj3od6CC3RKDnPntBEQkGQjZbQCrHywf3tjEUzbcXHzVt4mhKK4T18c9TtV41NQcdL7W",
  "key26": "4BznXxMaLpemiBai4fCpbVx3u63xinERDkzFXNP1xpDmrHs6NyT12sXhhKwxWond36ReZii6ZVtsiMx3kse6UDpy",
  "key27": "3dwx4BUQwXF6iTGdbmfM7Atffk5tU4gch5uVDGWkNBeBE7wD2AT486QwV1hYNhUsdgT9QMCY7qtDja6WLaDRd3SN",
  "key28": "4xXhf8bqzJUQrf4oC7Ax7QVDnWuPqRZtFa1PfYjavFVnstCzUTZk9en2wYFVoCoD9XG7Cgzoxycs2mo7mWjzRrgf",
  "key29": "2KbsSWZUFU1av4fhhvaYr4MUsn6AqMms14PYTu47kqJ8UrPX24aZEhGe1QDsSW46FAxRkjyDUgRhkD3zwwEcaSVD",
  "key30": "3251S5XiowtkvayyWj6uStMPgp6Lrt2WDJ65r1cc2XsGQDhFCBCKuNpLpnQKqx1UfoyRjsMHA6aS2C8pbXUfNopA",
  "key31": "2JJ5CXjq7DTEHjA3CqTubVHGwnHVajbBZvdSbSX1Px59aHyoCHQ5JCDCfmozdpgJzr9PBeDgwoyuaGKdaW6zRfQx",
  "key32": "2SbBEhYnJpjaFWsacp3JcxMhkNqCj9LVVByiyh46CD2D7838eDKWgxErgReqFZsw8NvpuNNXASFgnME1XUbVvyBq",
  "key33": "6Ai5mUgBBVv5ar69wQFLmiUkpb56ErmsLCuQiuroRtakBfgeknCdsSRbpZecW94YGK2b8aH85qHhMLa2wAo7Z3L",
  "key34": "5mwgAo9udpSNbm1eu8VoHMhjJJuHZQkHnF9v8xGy8JVHWFL2vqwv7uYVxjDi15MYjy9TcmP3NGYDa3dQoLHJW3qz",
  "key35": "ifyCwg6EkBKmiV8D7H2DZ9HSj9GeN1vqR1mVAW3meVi1BduHvbBvpMyPhBvjboijWTGT5HG6AuWoJtdgkjabFW9",
  "key36": "3feLdjnnCQJd8aYNYFX1JZjn3Anay2NJxyqTpADMrWX6A5sKASEheyjtq33TyNCpMKA73KFCuEGanoLzQdEQmWGr",
  "key37": "54MuBxtE215eHZaDWrHovKMLYsqs9RBeGGCYG8gHLyZqKz9EfKS82bqNzeNue1r62inXDXG7WHN4JWtQ95Qh4eLb",
  "key38": "5DNnp6ME3QvU5GY5u9VMw4ZPomLc4jWC5Jzx446pv8411ZnHDiqCEY41oYXDS9TfmFGdvHo6zYyiDQjMxmqpZiiK",
  "key39": "4S633smVvi3PucDpugMcpwswYfPgUDpuncCGdESqHmhKse5Q6CrXV5dwGeaXbi5QqC3TMZJRByq5TtmYH3tmBQ5",
  "key40": "4v2g28DtXdtNaZstG47VfRYEqDcEdj1i1WNUcehY7rCkBHdhbvLAe4oS8xkJf6HvS5Hgpia7SdrLWfQuPEWoiBmJ"
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
