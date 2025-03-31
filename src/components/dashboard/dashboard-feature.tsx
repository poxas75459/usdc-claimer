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
    "3yEKmVufbLJ6mq3uTAMNL1WucBiwed6yTdXDd6uNrYHbjio5iU9eSuAejWbSCK8bVJHYEM6QW9nFUrsJypCFg5n7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bsDvmRyvzR7ZEKn5YSaQFBDXNY1dS7oiq3B3F7ayTr4vDBd6DTjZERJMGV2vvpQCtpz3Pk8brsDD8grvAE7v2z1",
  "key1": "5Lma6GjDNysoPTCXKtC5B4hq6VtnzKBouZFQCHDkrXzGRotxJRVJHWcrRncbvyr9dyMTLomPMFHZFScLEFLusyGz",
  "key2": "RSJWpiy9NzGX9m1kjp427JwUNPyZgheaZXRhX5WzyH2KpxTqT1JS1G94FYdj9BZViDsjucCVknAdK8HPTQs387w",
  "key3": "23KTfhC1Be5bQzPP1GqFQVCGN7jbqopDuxDcSyZH8PshUFC2YXoSprhCpBAw4UFe7jCpHpAXq6Ay5EMZkt1pCrKY",
  "key4": "2qTngBdF65j2QptpieKMc76LgdDb813MhBkJ546rtahnXqmZqWnbtjqTMF8bcq6TFDjJDJLTZ1Cx9sJgwDahr3s",
  "key5": "5HgpZgcCDemoGmY9MNWDYZSicphxwBta1XnkB3efqSzaVu2FNcKN7H2nH2ZAwbboJkTN4gPwA6DBCc4gpWZSEHKK",
  "key6": "3ezwqdjzfGcRwYHeCgAh1QjQ7J9GcRvef6EP3ksrAquYBqPnCUwAQe8rWaMYbU2aXBaGT4QEJxDn9sBi4CCF67ZY",
  "key7": "2oy9yxMoj34oTY7zbtMjmNZdybDZ1Ckm7Sb4kNHc1FmCYREBWxxJr4QJZgUWnXAAiANThw5xr277YsFgpTK5JmGt",
  "key8": "2qduxbsKfaZy4rFmHWFcWRPwJW9yDR8NoQNV3FyDCbthJwnS8WqydVn8ws21nAfTdHny9P33KccAruamRb4Xo5Ej",
  "key9": "4yE9eW56Fw6TNcMJ8eJdYU79NHp6ppoXa6ugEUukUb8JnfYJC2pKVGB5QUtn7HMDknmkFbav23zDoPaoBaC1wsmh",
  "key10": "ApgSK9mrhmmoyc37yRQAXGLwYewjFhp2diqBRWUyETQzJ1K4BBY7woWw9JS32m8zro1Lh5rH1WkB1kwRiepeBaF",
  "key11": "2EJT521hUFsPN2WBZG7ZYUG2UfzHjeK7y2joGHa1QZ18xVjVm6PLUJUSHhrk9CjA19SWDTk1cbkamUgQCfVGE7ku",
  "key12": "fNsYDCaQfboHvw5aGJoMfm5Coyc5hLGs7jB63w2cKbF9FFK913sB9pQkTWfxqpaEuMaZwTTsE9oSSxc7T4gFqjQ",
  "key13": "3eQNiHisgkkBLdMaxHdAunrDweYyUx5P9vvHb5csUyYehev2jZFFKCSTWfZ5twBfEqFmsCghDfgXdS1UrxAmy4RM",
  "key14": "2E1fssPRaCcE4YZgEoPGuzpvWukKeLCjn8gMC4Bccmdp32RwWSLKdojTkPBjc2VzEU8Ek7tY8dbn29EZm4YTbXpq",
  "key15": "3a1wYHgYauk3aAFNi3TgoAM7Hq5b3uvHctibEJ4eDstWs9sxUNHd6nQkHkCNVk58aCTvMHhVuhXCEYvaTYDgcQzs",
  "key16": "DKjE63SaWZxizEPpksuddTtKX9nXgj42RynXnhvHKVDxa49xtMwiHceaS1MR3c4MfSutzjeeMsrtUAjPfskJFZc",
  "key17": "UUQHpcm6fcAS5X1SKUdXW6SHbtKZ3885op7DRpWX4mgonaLC81KGj9MkoyVcYXRi3dv6jaFTe23XVdui48M8Gz2",
  "key18": "2tpvgDkT9usqM9LEPSwJ6pZykMWha7RAjAPayxkBAhwq96YqAbbG6HGuC5mmGcNjVJVE9LL2EZt9ufguQMkexvGo",
  "key19": "3JiZmhrv2V3WWmP7WH2JpFgkGNBNYNv9Gmz8i3RX36PyLApANeTK6NEkFRiYn3Xhceb5eQ19RM76mSDrYwhtXBQ1",
  "key20": "4X9djXSiaff9LGFVufXyeWkq6D9WggJkMS4BBGWZ12yNfXpFR7MZnpWWFVBGfQX3hZCE2REzGppYjn8CAjHtfyRN",
  "key21": "2rnzy3kKs3K8ZYesx9LuLnjqUCkmbeL56zvvgNgHX7dpEUxvXWfr7ipebgJRvVDBkEkRZM2UHNWwgu6TiZTs6us2",
  "key22": "2vK8Tp4WSzoj2Vk3xk7s3czjCT1B3f3bX7fWNr4ZxP1QBwrRketrj7P21G2VEn8fzzkWCUKdmhNy4yMYTJLxuyE8",
  "key23": "5XpgQPtXa55KaarwDxpVxrApXZdTpN6FGFg4tYZt5HhmvQY1ovkjioAuV5SxgWiPFeWwKS4ProXfgyRACKsGWptQ",
  "key24": "3b11J3uiwE9DSnV4YAHFWYKjESsvUQKdJwkqj9aMSgxKJ7kZvHqg8S4J2PDUtuMjDE3E1y4S6WVT7ynDr6D1JLj8",
  "key25": "4TfjZbLjSAUigSb66UPEMz4cYcNTKXL3rQtBgDtPZKxbjn8qc2kgCohFwqZENGDHBxhrrRBxnpSqVgdgWzyBnBdj",
  "key26": "31VVirreihpmvZiYW45dDyPL92R5cJG9zyNtckmhZJTJbEfgejbshb1YmJ99oRX6H6GCoNMJASpQVENfmK5edB3m",
  "key27": "2WsBLnKcpPzNGppHB4vHCz9eyfJckDhXFciwcdJXjrcUFJ8t3R1UgDWFd62tyTZJhvG4j2fppe8Hv83QN2anVheo",
  "key28": "3ZziD9YGJoPpqemU38qVNsxipKujU76AVpNSD6a4CSpBTroK4soLJ2TJMDHfef8kp8VnSbbQB7wA9JrvFzai8sf7",
  "key29": "5jxvvtwKpPng7G5tqEAxVtYKkL8AtqbsjUJbNf7VsKBArZACGoemjDeSVebEVjfRtncj3ZPECKgKXTeDGMKpm27D",
  "key30": "36iFoffcsuD8PQ6HC1jPYHQtDxUwTSmmmoNpjLdJNDx61RV2CcdyQo9j1cTFqVnwR4rNJu7V88uuurSaxEeidTDt",
  "key31": "5qHj2pxYDYiucqjBmGcCWE6FLKG3TjaiT56U1zR8CXCc1qyeAnzjfv6mJUa1uoojCVx7DEwzX5kwmm2AfhqKrGg3",
  "key32": "2o2ycsKocripJRhjERCCh5unYe1G3sxNUL1QS4SvnqbwM2dXgyzCRSSaKHxwZSkY2ETXrkmqxBkJRViLE3ab8HsH",
  "key33": "2rKu5kx4WmgsQr7tB3MaV23bmKZGH2b6SnjbGWWEA6Ncizzne1ZCSZX5nnRExBjuLV43sEb624bgTnqj9F1sXU9X",
  "key34": "3CGcDpsaEg3UVoAuUmj2xAUgwM5qGqEdGVZUw4Qb4HPNNZdpWamdmkFhW6PD864khEpyQ3KtpwY7F3H4gTTPEbLo"
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
