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
    "5RtHn1q2SEM3tvhGZjbh47wJPYXhBcrQ4799P5a6Z1pJeYVFPQs2CqyrHTtgG6iTQBjrXQyiYmRpSw3q78cSufCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YKj7hB71cuVsR5LpTBJ7ccCoBxfyuSGbfAiLiF8otNMHVau7poVYc2Yb5xP736poj9AadWqodKLJt1icZFdkndV",
  "key1": "2V5u7wjmQHavC8jVsBwCePzEMAFiE7nWkKTXcYkqzTihk3rWPbyY1NL4pYPozYdjNpGeQLMKMK5HSwx3zfckcLXd",
  "key2": "2Gn8rYiGp3hfR3BqG7qNqMNZzvdSkddRipXuuRh5VB2zEEdZaHbcpkUyT1jPB3ngrza9gp4gDNgmiWtg16jsKvAY",
  "key3": "2r6YSSjhaCJ8x95dFE9x3N6aM6DzqGJroSR2x4ueLhXD5kvdnk9KGsVbyXKNkFxNxuetBLabAp6BcCSoXphRQvBV",
  "key4": "2crBMR3FyYqe7kz4ovrJPrENzySzLpncZ8DNaS9p59PL1wFkneV4JKLQrkoLXs7H7nYn94dHVHRRkdgRLsVmLSxr",
  "key5": "2kw48fFAfmPCfYDTrUJafb8K8MSQTyWe3UtiHQL6nr7yiXjxSRv2a8AFZRr2EWdYKAnXbYst32L9TAqZFoJnRFeC",
  "key6": "3M1nUc5XYyECStr6iY9PFYP4dKnFYSRbRPaNya4Ka2pmoxR8MTygmcFBFb7KsbookYVouHiTEDGh7ummhXGeT7vM",
  "key7": "6a5hGavfYrWPPqWVoXQ8EN9THqXGZjZRDMhNejkGhEqYT64kCyxzv89AnDNju6vir557zJauJWuo9BUMH18Goyz",
  "key8": "36uhCft8TycGQFY1meXJc2UX2E54jM1nqQhccWE2g4yvsdoTEuk9itKXwBtsuaXypnFrZEY4fYAB7SzpdrajXuzJ",
  "key9": "5hez3cHyWi9SguFN3YombKcm4nxkJ4Bmd5D8aZamoSqifSehUKRDPZRJAJpob7xdr6qMmdaTsLZmCcLvm86xtoeG",
  "key10": "5rnwGjmGG3eWkPinAvELKcM38oDqJNR1JHAy8LGKE11gg2qYAYC2EKwZx2d29g5beeBkjiRf5WWuGyJ2PDHRr699",
  "key11": "VDTXN82DcAMfSjBonrVEeJX916deATsyPXa46gBZQtRmdYTDJauxj5sVdVNaiBMFVc4hrt8ks8KxNvu5ijecZN9",
  "key12": "4fnjYsuKm9f4N4rYuBnyinLjmw4JYqxi4VQoCwCbDv5k8NQnTMofpBFEY9GPfik4SJ7bXxmsWEeYnZty5gdoNi1Z",
  "key13": "3EUkeTxmq1QSw6CgKkvowi6CV5FXj3rhsVU1AwRCpn4qoMs8qhkde2kadWj25dzQ2kNYSiw5D3kYkN7mTy54GJ2t",
  "key14": "2P8gvSqJuZL82tBk1bfddN7hiSFu77L98NXtUyTf9VWaw42MgwpAwUxmzCNNheWDcnDdRPnXHGvdqenrdZR3rx6H",
  "key15": "3MADJeWhCwvyccGHR4W9u1eAwrcQtA6ACC1cp2fyHPZQijcvMU4b81pS9cfum3q2nHcWKmxqUZ2chNHMy2sUd5c1",
  "key16": "zmq9XRpTahm8hkH1vhVgHg7rhr7pA9FLsmkVSPkmhfPMTrfoegpvuq6T8qPv3sATxXFo9oZC2y2cfj5pqwr81FJ",
  "key17": "3bbH9jgnKkFuZN8wcJYND4NoccgTXbkwz3mwJKKp4Jp9rAMVNH52FfKXXXPnMDCQBoPcNpBiKy4ZZXwZkUUGYnMX",
  "key18": "3ZdmrVjx5vXxv32Yo8gFWFSyEybb7bRUwhpXojE6AxxqXcW3o2h716vt8swfWV2yAdrm3YK7rZ68M9h3TYG1cPDF",
  "key19": "42D3UXFYH5vq3uqDvyRvkBVi8CQHGmsk3J8bbv2cDrYUpxC6DQJPAzZ6BF4whtmUbmwv61bv94aQbQXqtarji562",
  "key20": "3FRv3JQ2tHMkyzCYK5TY2HJk16cNXwtaPTzLP1HhKGK1gSnTFE1TGpByzqzym6mF9wNvLo3Jh49YtX14xiYw19bs",
  "key21": "5YKgQBP66iGxWc1k5reLZchH6939Cj4GocpaFMUosg9UZGDignjFnSCkVwoovQsFVtJUTFYQmfUaCJDRimAf8EZz",
  "key22": "43rQnXEsERTSH2N1KjvJM8uc1WboSQRaEBZGPh5GstZ3SpjaXxHKXs4pK2684p7RZg4ZpNwJVUeXso17JWHbZeFF",
  "key23": "2FdiowVMsmDpdTy8dxBE4z932Cwf885inxYcoyPbqbSG9ZhXShsmaTuwrGUz98BUxuLxX7Fkf6tkVBV5mLyrA3uR",
  "key24": "3KBXq7jYuVJCWNjcKfPa1oMzmMTpggc75kSfvZLCdtzyM3qmZHgf1jQxZdXmBQmc4ERzTsKmL7qpbR95TpHbMJL7",
  "key25": "4jKQrZ9zX6ZcHmAmGyqgUHjUQbFASo8Jh3VksD31A9623ZxVn8KFw8iFLftge54bndtMnZYnkCDqTm4BhkyeoFNz",
  "key26": "58gLpgK9JynQ3etncMo7221YjvqP2V8G5B78juz9KvqEZFYK4q7gwwXSD2b1pV2FAL2mVg9f4jCYmCXQsLmXYBkn",
  "key27": "5ZCDrmFbauNiBPgBUhiWXsP61ZdnuBCpSSkw6eWrKWk2QwEh9NKm8oYZ1EvTEDLKdg39e7azrdArNMQKyBr58waJ",
  "key28": "4bbseYv4NbvY6f7V3WDydURRbUh1Ncf5jCFo3Ti6mxMNQvwsJEFjq4GX7fgoPnMrq1juTipqaa1Xa7yzzUJWPbHP",
  "key29": "CUyZwW32weGm5hd8LR7dKuSRzRZ8GUVAcKndK5fQ2vXCyQAZcKg7teiNyAKdF6jLfKHFFf7L1mGh3oHPGrcsHu9",
  "key30": "nEDktsnrDKvCkrYdBw3YuEUDf3YtB6RUUMZQiUbPAViJ6sqh7wURWckxJTXh24VARBV6UQr4Zn84jQRLQNKVgS1",
  "key31": "4fCTYgDN7aqhp7tuotcRxbohrPx4csGtk9FQnpYBDDQW2FiJZgMVFsVhBjMNLqvJUZxkoFejohn458LVa8z4ftnd",
  "key32": "3En8NCtdSPoM79uEjbXCSqmTmXo4vJPSjQuEj3Kj6fSdmQkj9x6ex2jX15RC4gW5hhJWTBdpEMhkEeXXSBkFMdv1",
  "key33": "4xjzs9M1NwrdQnvAfvMDDa7hkPouFXW4PkMKrCoTXFmCyJN3brtefLZ11v5w3aD3cYKW3jmndJFcUsCL3XubXg5e",
  "key34": "2kD98PuVMBHA3dJQ8yq8YxD4tLtpm5czPcAZpNypCgUyPxZsMkVBBkvWcz1ryEFDTsK1X8CREGUiopw5WzpV3euB",
  "key35": "29wpo95XanW7QaVVKCm9djz4wtuu6cZyE193v8T8Ro1Bteu74kjkCKHhGYgDdxrWXsww352XGhpUp5GDXd1dtoDf",
  "key36": "5zqqRuYVTP7D37d5yMWCxvC3UxSh5Eah625Wd6VqfncAa55ae1zwpPNz4LqFntXaJycheNBG7qzKEjdN5ABUSqis",
  "key37": "5ckrwJ8645AmTgmjWzKjbSQFEVZzj3dxhdUaAaQSQMVmP3LNdvjdNXy3UTMrbxomDzzggoCrseNaNL7v5g5dk59",
  "key38": "5nRD7HfxcrHnXGFqTrpwmP3WiuAHBMESEA7HJKPCN4GSXM7dFkk9gheUUKne1gxBEE8vjjguEQ1tgRUKManwaWY7",
  "key39": "wJUMbBAPX2fug7z6fFHv762YcCPtVULtvaK4cgkQSeCi91c3wddDuwD7pVHq4tC2bD6Qvw48EXfkeqm3WphCfCo"
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
