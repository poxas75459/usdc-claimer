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
    "2JutFBirLgwHCGVNZJhjdbdFiEHuxktFEhfEBgXMsNvNLjnF7uEEV8kzS84d4PvcqkrJkjyDyoJngSNcNpYsmt5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qU2z6e3w9q2QtLevrz8BiGL3xAthvSKYbP1U75n9VDGRsmQKRqXP1ppq98ioAnmT2WPJjTczNkmBB7heAiAPFJ1",
  "key1": "3hrp2dHPcmakfuAYiHFuzmjamHVus1aTHCMU4aBKYRaNsmmz6vzvX8WgKGWf7NiYyXGDNYzvwjzf5CNtppGjXKwf",
  "key2": "3tSX2Xfj4KMbjX3pCZWgAuWFPDMWT3jf4hfGroFVX663oH6DHd9xwDXifWtHLvCnk8mZwPoranv7CEJKLjiEcXAD",
  "key3": "4jwTdhCfeCvRYxzfWyeQLx54sRabiDDrXUiFfnjFDdjEd4WTKRBZTD38dKdg2E1BLz6mcVFmePFZr5bEHhTU3KEU",
  "key4": "3dUeLcKpkmGbBddCiFghrG9Cz6fkhgzd6eWdAu79ALuyizkqqgtjHRWkBGVS9D7qUaLysuVEf59RQuL1ci9G5Z3H",
  "key5": "5192yTCnvuafeX79fDp98bsFRbeAifJtxsV4pbGturaM8Q55PxUk27FEzi7Z9GUVvS22D45M5pbYpUW7vjU9ToNq",
  "key6": "59yArM1cXvnQ1Tm7RGHvVpW21pAeAHq868YF959PJFEUtYcn5UhRZipgm9P5aQreoEggKbMKFE7RiVYg1gHLhTm2",
  "key7": "56EHP98YgWAMkL4NPC9ohJSsWPDjvch1nanqzKwG5aZiEFHeiCK4RTnEowsDNFBczKiZ4YpUMxZmvjk9eVq93Art",
  "key8": "4bacirdT8hPMMkgMwVhonREGkCUnEphkPNgaiu5kuwJk1XZWNDVZtELHWuVXAnLj9BMafnV1q4S2PCccVJxP66LD",
  "key9": "128nkYnwKAnoeTQPJjsjMHGzeMH45DoeytPSPL4KaTJFzbX7seE6UnKRCsnrGiA6bGKdx8HsjCCZYehRDefszrsN",
  "key10": "2s34m8eLDqHfb2FfSdRMUvNmorMGVt3htAamSkwFuCyZsbSbykev1Ui6Wv3SUBgzUqZvaZTRKzxhJNCGRTQUMAzu",
  "key11": "4frL4NFm4wauifdgUzpbmF7eifVq8RYgy7z1hPUNsi3NHvxwNVKTgPxbtVuKLUwWvq6K12cmUFUELCbHozHG51KL",
  "key12": "4WF4hSpPDRLVc3pqhSdP9b9UhMqCq88dmhLgawnLBdUkCERV2MLbaY5G3VkZYNg2HHZ5nWFPdaFVGuJK5SwLJ4Qg",
  "key13": "54avAihYBWQCPovrEv1mCuNuSaviMthPq8nifunjGPKqbaHDvLv79A3jBBo9TU3fdfQrJTyeFseJfQrhpd4mV8FE",
  "key14": "J2ie3HJtk2CkNZzZB79r8UxFx1K42jXQaHhB8BiRpeHJ7ioF3WqwwB2rJifY74ShZyKwojjbqiqAYx5Aec85cff",
  "key15": "3bHjcvxpkkvBTgim2uCp8BEzV83dXMmBEMYR1wBRECZ7L82YePNR5DTCb65YieSuQ8hHxkNn3KLSNRxGwp6NchC1",
  "key16": "Sv58SHAtP8BJt8dcVfjUt331f2mjtLkPQMN1jJX81WciPjertGxubRk14XciQ1P7Y4Lbphhu2JHQX12HULKtUpg",
  "key17": "267tYPMyHJtYoSdRcXq8mQoq9eNXMPxjSa4wpChEryDs4m74sci8QHJKHU3vaTh4xmZNBk3maQ6fzRJtFD1StWKQ",
  "key18": "5ZGtZbde1tcsncPZ2L9FYKtyd5toLNwD1N6zLa8BempYmLaho92afaYMdy9TfkTu9LHjFihHjsJoPfajJh4S1XXX",
  "key19": "3C6gK17pp48Zv5umdUxDJ9TgBUoqfEhe7cQw6kAPmnMnrdp4tPxdXXbfJYnby7q8nYhCjHprDR56Dk9ntD4HdYB2",
  "key20": "2khmx3ZA7LU8cT97HLwiyTxwUKEbQri9Uqr7hM3jcXYqhpRX14fR5Go1q589Sv4u4TUXJmoCFbbUj8LBoaVwj6KD",
  "key21": "7bygjbJShc5SygSmFrCRp6QvV3tn2YURHdCPSUgEk379hvvUmNqzZE2EFEXAGMm7dnGYhC8P6HTrKiEuUqthEeP",
  "key22": "2KgYTZsJnshzDtQ9UhU6Gpfnr9C1N32w4wJWcmoR5mBHngPzHwKVkAKwpeex3vaKhiwm8tsTQqrmzAC8sLZC6ks6",
  "key23": "55xzen18BmX7kfLZEmS5w1LxMApUj4MgzWMceHWCaxJPV6wavuktVuVszg8E6PtQtMC3rKeY6xJVtSg5djk9swFA",
  "key24": "3YMhB2J48BQQK6PKWPFBTL8pXbo9hJJJk6wxZkXFeMtPwEatqRZ7LBGkEhvM7sdDQB7gKdnaTGG7cWm5isxwLQKn",
  "key25": "3bQMU2VnyLMkjQ8pxU4G8H4REK4boJW46eWg1APLexoJNGb39PBbpcqB7wH5Rei3T46G5FXAWdYE7HCtuxjs1SXc",
  "key26": "3bU64WM4QcbgyNhQEfuMcgg6DMtB7td1f2KVivSRY3p2jPZ6aqsHMGxTU4iacKojU4J9bPmCMfzJ1AefDuNn1ZLB",
  "key27": "8SASreHL58EpJWUyJMsUAdJyNeSvDwxK5DFURNwefZN3MmEq3PVuuienDR3orYTYZtiENFNVTJ4UARohytqjn71",
  "key28": "Jh4Ss2J9VbyTHoS67ZXEU6dhpgBvRkUgpLtULTH4PBQ1NWGQxro4zhfm3PrVA5SrKjMjDhgzPgZFH5XmZNm9uNT",
  "key29": "2Xb3DFEQakxErftoW1jNMc2pKq9smdkMxy1gHTf9bYKNJzF5Xoc4BrJK2Tc2YYCRgjW9XmyxV8MMejA71b6d6Nc4",
  "key30": "3R6ACR5KSf3fHmspcb5phR2HFTtmkHrGED71bJrUnSScsKqmL2EqqUC1mrKnTmS3xWP1R2PMcFHjTAxRYtDXK77d",
  "key31": "5hfnRSBiBgVZRsdXKvz9HpY3auy1s7pQCSK3xcbEZTYRxqyUs1ok3o5Ys6uVhagwJp6b1gpvnymVyJtLWFXKVTQQ",
  "key32": "BSv46mmdSmav32cwNBmbpyyRHnbA9bNk5fDqRXn3jvLLY8BKFxMLfAoHdffzXYwnVt14Mf37xbxz39etieM6RR5",
  "key33": "3WU78Qj7G1xuaJ315Q4JDEKVavRkh5dhzSRJYrac6ZuaXEE2n5UhJCvvtaQgW5yzUgdyAaX2hCLPoM16Pk6en6uA",
  "key34": "31yX4BvkTFGcrGG4PxFX93vZL4qPFMxWvFk82Rz17hBKCzYzR7cDhwbXCPUMZyHAiHz1v8MXUTKXgcaS4uNtJZA8",
  "key35": "2z9LD5F6Yg2kP9WWX7TU9SkxzhnZooGNRYq835Vf9YdUYPYADLc6Ls7cAzK6hba3Zsrgnd2yJNABJLHjw9i6tsg9",
  "key36": "4bju3DkxYNBs5W5MRtWT5L7h7TNRrM9mqFqHVJT1iH64FKWWBbinjfNXrXa6jyb2SDxBmFBkmLHfirrJasLV77VV",
  "key37": "PGsBuRpRzUTxtNi73Vk8xJNtppwjUWRoQdEtGnNBuXSPdzVuZ5hEV2o7KQEqKSkkRgH2szEoQtoWHUCwCR3MvKA",
  "key38": "3v5rkA8qfv8L5UBQ7azZb9naHDR6KvE6iWEVv2v9M1BwEzK5ptxGieRxCWLaHAvL8La5HVJAxZ81NX2WgkoQoMzc",
  "key39": "t86s7oouDNCVVS9oyg4cHAuQZaCSSJ3bbcRC5C8yuD5ZYhLXjnYrqY9qrBUAniVJW8PGC7YjbCJgSF1ecsDfWxF",
  "key40": "5mGDdRiP4jUHsTs53PdVyujhTy7tG16SMHx661tAVhu7RfqMPW6KfAYppun6Wtqaaff6VKXCBKhHKZALXk3TEmbj",
  "key41": "4LxHq2hmxqVsJ2YoVQFu1REcesCTdeZ91Jy7FvQN7jRZdifjrBAic1ZkbBt4YZyBAWJnDSBzbjrQEQ2NkdtebTQG",
  "key42": "5ja2iUbdZzngzCGDqip2Ckx7HnEKAr6HMAJtJsyW2WVBCV6eUjKRsvLFEKv75Lusi6WgkzgwnwnvZ4sFVsCi5PRy",
  "key43": "5mhAbsK7Nm2bra45haNzU2xoEjrsksiPsNAv6FVT1mygNXiWAnyeeAhGwJQ9BnPZQYXCNuve699s99X8HmGc6nCL",
  "key44": "D6iWtCx4reuxkC7rjVSxLqotsUw9gzCPXZGbX6ZQX1cw9yCnvddgvGos6fqSCvq7ujMYZaVtBi8eqoUzhbp6QmE",
  "key45": "2Qwa1zk1tFhNoFcHLa67u7dMFedoxwxNE8ZspJEc3yoyh9QYVXSshJXKC2xzfAZwuRLQxV7tfoNY7udsNdERXQZG",
  "key46": "64y8z1qTEYooWFB8T1smV3FfZmcRDY1nXui2DyTaJ2bgHJTuB1iBXNXhFkYrEUngc7D67kufVUfWk3nb1aKe1zkm"
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
