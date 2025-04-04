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
    "4DcVJJPCZTHDzqCeBcNyKueb7kDbAhLW5zu98Qp7AHwTEZ3w5BjFrrxQvzkzMJCo9GDozTJcCrZaPBQhv2HUDLsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SVBAjaf6ecFsmXrH9fQWghVVGWasgthwCgahig6cuL2yYQ3a5w2w7QDi6BXEd6mWkPiM3Qga3rw79JK8v79P7Hr",
  "key1": "5VL6LDB8ddci6jrzwLELbEqkdgZcwEpa1tXp49k5QG1VTw8FEpWZQXCyiSgyER2fCry3Ar91jvYkPzU2NTmwZZvd",
  "key2": "4VYnRFSo47KYUJp9oaey8oAULeQhxU13YEXb4NBM5bReEoAzQpnKZEjHNXkjHd8Zr1vzuSDeeLq3chPWec9BzxvP",
  "key3": "tvSB252Lhu4sDCZaUcM4NRpJ5KiLTtvpUKVgqniXPAYSaG5GJBcsQRHgGFzyE5QPoCgqABzLTgEzEwmFTJTV17S",
  "key4": "43G57Jno82QRrxAbK3MMuisgmoUUxCjhv5mpN1v3F7tKf8HcWL6hkadqixvF5UsBf2B7jiZjQxevBqtBGQrmrpFT",
  "key5": "4Mw4KWxK5Gn8CgjFJVSXZDtNLHgmNPfFVAi68PVGjQUpBuJSHRj3rXE8zEtt4jcw39gFCVkbagoCgchunMD5QjNt",
  "key6": "4wqZ5Md9qLXEaRRnAsm57SWVaXZeWKWsuLubW5XPEnqw7okXoYHvMbPMCSn6Svsn6t8NcW12m6n7GSyuWavu38sp",
  "key7": "4DhVVxffrU8MM35gB914HQVwVXgnMkso7KseTyWydsLvd8J6UoNeanT8gZjVbtsVqxAVwi25ZosM63xe6GH4vik9",
  "key8": "51YTH1GjCruwLPvWpWfnd9sMWozgsd58kU5qrfqUquLgNartW1f58kcta3MmnWXevJnzbnU74k5vjrbKe8vYqhXo",
  "key9": "2oesvfkeyRvEJA6MLqyseQEs914fcc7L5bkbLnzBRPkMKkssoePaV3puFoMVVBiMBMa2KTS2eaayjqLasYSWh3rs",
  "key10": "42ReSh3ShD7Y5xtV8DbzpkW1hx9FqUiqPuKVLfmMvcqkoTw6xe14QZKE6L95NEj25xrwkYDi1gXUeHxYToDLcu9F",
  "key11": "NZ2ibPQDb2vagSyVKtbCtUtALXnmmHU5iAkeyfN2Ca5RZAutT2UnyASZmUEDgFz1F39Y4hgdbVSjPbSWnN6Yu5B",
  "key12": "4VS7amwsZMLX5T8tRAtCMu5fHP9D6X2Gr36FotzkPBNWACGJsRdMnzx7gNn9jrKHepb9Tah9uyn95V8AiTfcge8G",
  "key13": "gSgqvMWuCuQdamrux5WVVQ6ubnbfofBRmL8Mc5MU8u7W3HUctZ813wBr6i4BaNbJ9PVTm4VMAZSS8AL6tXcGkVE",
  "key14": "5VgEz6PHQsixgQSX7HRyKeNc8WngPm5HfpYnJMzTi67PJXNEYKM8Kc3y4QHp9PPNKaRsqwnw1i6ukAnKwuRu58ry",
  "key15": "5vRxUtKtY5WSwrrCks29CzJt6EbzFCk8SwxmLNBxsjvCYGZu32YkVXGHAxPV8W62AZv9eR7ecihH15CkKykhv6Jh",
  "key16": "4efUPExH3gR7AEdrM7PpkXVQoZf3RoX6Az4fvTgxcakTVKTJxHZQhTdEA1Nq73twxMyaM5HCh2Z3K8CQmzKdE8b",
  "key17": "51gde17JDThQTcTQ7hE4mx1N4KdJEPL1Paxicr2nci4bkH9FqEWPTYVfdVUug5cVycN7eFmFZRS4H8VBmdfDCya2",
  "key18": "4GNWZhwyChY2hWakk1cXU23CpcXkTTaFotKCPoBmVos5EBzBWpzSSBzw1REr4eL6Fm6n8f23XChXgzmf2pZBi6K5",
  "key19": "2sB2P1pqmxEj3vGxyH64FuXPRRCWh4cwmpLaUYech2wR1bnhXScQxuZ456pkmE2s8eEu5FsLhKmbt1tKsZRkzpZ9",
  "key20": "25Vpch5SmowtmzUMvnJgnTBLNEAVLZTVU5erCWwjxhfwv3aPtWVEjYsddPNpoinvimQDMb6DZueWcHdrjGEcncDq",
  "key21": "4U3pzTbEEPYtteZXFN7Wr7MNWXj1e3oApwm9tFmbY7g9Xzov6JhZBFSUxj4JM4XYp8SunucE7fTtTcr9uaUJ8ZME",
  "key22": "2eGtkHpLtEBh3DmJ3j66juqHgt1gX2tmWVKHMb8Z9pH2GBsvmcmFZYTvAQwC5rT7ayvW9W154KSExLQEjAJr26x4",
  "key23": "5zLtfmeXTDa3hwsZzFywuXfpZu5ZxQCKrtGsBR8JuwsUFQo6JrVW1SZPBYM3VE59GTKNCDcbSJYJmpNZBNeF9ckG",
  "key24": "2y6FqDqNXMPe6zx8vNMXNvEK8BVRogVCVmXLD323jQiTHntFxaqdDaAtya1CjuRvB13j81faTgLG7tohsYke4Yd",
  "key25": "5MU2U7FHnx45yqxSmu71a6XsajoMRXYXHK2tmMenqCBNdX7VyBF3d7qE872jxWj2Js68aF3WR2xfMAdqN75whXAF",
  "key26": "2JZes5dPFNb2uYMSGcLpQez7bUTDCUCCoRW84rfnWXERK4nEwDisbN9vyPHdaqg1mPHp6LxTYzvFHXUqVj5Yxk8F",
  "key27": "YBmdgmHE4DKjeGfxbQnrTujrks13tutZ5JDtJHfqFJRQHVJhJvwCMpCjEA5ygaGrpxjfx3v5gdFU7LmuBW8aUfs",
  "key28": "4qeqKqnxfpV6KyPFwHeSrCvhqjFPPRDh34prYmSRvsqqyqk8qmhQ6EeKp4CbvsJ5XQHTL79rYsjLsKNcakEqQ67y",
  "key29": "3dVe93WncBKK4sKBNXpbJn9GwN53hpEH4kGE1bPrKgtN1DiDU5fE3TPBwoSvVgowDW1TwRLgHjsPuVR3kGv9gUGR",
  "key30": "2xukpdgk48TEekyKZE4DFA3vafNEQbbTqXW8mWqvZvSJ7eRc1T6ZNnooiKAvcY2YGbf7z37QqP6mTj87f6m5zoYV",
  "key31": "35oqhXxtEjYhHNg9QUpPpMriLth1s8QhiKE5JuUcPRJUiJ9dGda2vGg3iDLKSpgKb1iwqZPtZkjLVctFjadkatBW",
  "key32": "2zCdS9qdPXKimku9bAi8syR9HZbHNxobSXbFJoJ7simyELQXBYCTbpo4qY1Sb71Aqqkx9RrGC7zGn3hkMAW98EDg",
  "key33": "5NXdeohUjARMZMdSChd7SsAXYApoFyGR3yhErWdYQvQ7QwDMxeWWVxkUBqW4Vnhqu46VDiQJ3ZYQuEf8tmTjfzGi",
  "key34": "2dAuMQ9ta51V4ehgAE1a3nVVtmuDLVpD5UU1ezdkN89UWJVzFoGc9fRTi6rTJyjgKwt7pGyordfVwjZ8fhMxoyJG",
  "key35": "2tNe2DPS82jZaARuN7Sz8Snm1dpkvFRLsVNux9cHQWdCWrLim2VVpkFYcf2bG176iv5QmBPXJZzP8p4o8W6Ausb7",
  "key36": "4XEo3vNi5zBeiTWJCYCdxCpnu7G3TkuvwVpHRwszA3T87p9kLRMRzHmyPmZghNeMi4FUN2vtbesrawgnFLPRSyac",
  "key37": "5WyqDqgVAFrMUDiMeLCF65Zpx5TdGRDbMES6w2qLsMxsszXpj3D2jB8ntBx9ezWdbPmsoxZToASJtSnM961Uxuyo"
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
