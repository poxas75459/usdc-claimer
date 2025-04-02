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
    "3AVXd6R1YyebKjnndb5uhC8SYe8VGJdfbDyiUuHJB67o6cZfbMirdnctPfFRAdJcg1vV3ZJskeqKwNuAJHbonNj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXMT6Z2zSnVmGShMGVZZswbMxLFQbsLAypvREgt6nAwNwvKL6PAt84MkSnBSi4EL1q2fRAyDuugAdJZWaTTv8wc",
  "key1": "4EgyL746CPoQ3TiQgGPkkWBzHHfgNhraj3JknQoefRL9svUsCoZLVZWZ6tcSAnrPDwvzm8ArKTuJEmxYfTQFE7hw",
  "key2": "4sTAczmqwdoDjWj6ZS63xM3KKS11NgyftFHbmDp7BF3vQDvSeMWaLY8GhfwWJUPgS8XBaLiS7eN6D8ZaojYZkVE1",
  "key3": "2UDwk91yF7FzeQjXUet9z4BumgAAsj47LJkZATVnkpSRAD3c2xUmP8CV3taQnzhb7qCiSP5WpLegePY7z9BoeJpU",
  "key4": "67e9gF5tHZWFPY63h4QRWMXJaWv56pVFbjqNpSBvuLy5kX5Y443joHUDuYRKP8FNwqp9JSLZMVs9koWSRKKzkeS5",
  "key5": "3NaqnoTquPKmXHrzwXzG7xHjspwsX9S1T4LfzikiRKZJ1nHMdZs7SCvuhUEZZeC7b4HKcrtTu5Sz3vNsCgdFvErU",
  "key6": "YZjke4B1b6EqK5oaM4hHhJZadVbh2sCzSL6dXyqcXTLP7XhGC2mzawkemcvm7Fo5zmg3f67gFLvt2rzq6Kz863s",
  "key7": "rvhbGQpTcfbK4MhDjUxyZyRLRd1y3TN7hHXggpFhLkWoWU41RBCvM86HujgTLXagc6v2uedQs8LW6T9QDVpSujp",
  "key8": "4uFT2NYJUjTnMYBMyPXPG3o9gSVZhSrThS1MMY6YPejAbinGzZoryoywszM4Lf4oGCYcZzQKUfk6v3aTqkNKas5Y",
  "key9": "3F6H5HUDi6aVqD7pc4LA8TTqcZinFzDZnWzpPB25cNdhfqmDhReUurDb3PvhWBKzmWZNZrVyAzQPuwd74jKVb9Lf",
  "key10": "2Vyp4hJJUeAYSZqzTBJMwoBeeK1dpe5JrRQNErM8r58qa5rMR4HoYxVkzmDsQv7c3xbV6NpW3fd4Qjd7Jr2nygFX",
  "key11": "2Y88Moi97s9CkUDEqVAPTuLWTVXH4Jm4rg3DHsXshRVDRbSBuLgN6SL3Ke8HTwAba2PKvPiBRkFnvadpGZLAi9fX",
  "key12": "2ToYrnpbyKYcPg2yHWpK5aYtR67TRVqyJm4D91yhDyhtVB3hLwsjfjhbEenYLwGsELEXNB1ouZDWJC82BCpZdSRF",
  "key13": "3THkWrCsUfm9UP2d7owDvUvo17wLh63NVUsUyZTgR7pXioTwWcMaBCgtH6PtPfaUA5MWjzWjmMziZY8DHAxxHAoR",
  "key14": "36zBDFg62FgN3UQcnBNEyN5BjwFF5QP8TabTDdVbGiofCjTgHgm9v1AErF3i125HXYDmkHNkZMsWChGi21KrMs5u",
  "key15": "YyT25gcrjQ4EniUjuBwpH2t9AfY9zJXgC2NEN15NuH7m2t8Mm9pA68uABqQ2oxGbuAcHVBWk3E7hGSeTFDoZs5t",
  "key16": "tXbNm69wRzcUtqfY4hQ84FGU6jyBXLT2BiaWADbvvRGb4S2YkU8w8a37Pbors8ni4KXE2P6bTLdU6G7sgQCJLNb",
  "key17": "4wRZCttxa6vMo1X1YQXjYjLmXpjDVLSrVch2Pu8i89a3Ebuhbuz4qTMkCt9y9gTp7DhxLYDBoSKS4nitpjP1tDEb",
  "key18": "9MTYuuiwRQUtHZGAvCRoGzCeKywj6RntnD3pjpgbwp8p2cYjAtnh8nSYjWrpWKJcxFh7bke7SMvtfGo9WFgVvMR",
  "key19": "5ePpU318my27AcVxH2L1feW84RfdtNfqpc68SScw1XFs5RuyQMFKbckjR9TtyBNc9x9MCq4CqNtduustTFsBAXR6",
  "key20": "5c1nrUecp9EDQadKJGLEdA5SJwkiyjrzqcEqoP1bhyQ2bgef2LeNzydsbP6mgArVfD9YJzayUWQifPUzCRfAj6bn",
  "key21": "4J97UW9NMSGkkqd1iFer4YWK7TxrtG9w7thE4ptBLCXhtAVSuu2haSALL6a8YesBcjBZaZuMvCpGKVdc2p1oEzQo",
  "key22": "25RSwyVXiGobptjNL5eFAKjjZuWDqCpaXv4ZDwE6UFuo6Q9REqsBJicRBY5WXnC9N2h87bDneEY8m5fUjcn7m2gt",
  "key23": "5GqsduUojVL7on89fyBnvnjHhYX1GwDv8YiEBvMSAj7ZhKoAezGz75ZtfutFUU9BUhEVCB46L5tW6LjUPU5c7TZ2",
  "key24": "53A6bfrd6x9Z4eesoXEiqZ2ceX4Qn1FYFmt28QqVrWqVe2duhBwWy43QEGxTZ1p87qKHs2FASM9dZVx9neVCXGtV",
  "key25": "3MZyfCJqg7qpfDAkNRq7iFvpYkTTEwpVEvZJntTh3oorKWXR6YPBaio6x9Xi6Asei4DkP6xs8C8jxxTuv2nmWFMJ",
  "key26": "5nAWyhzBKtQEAut4Bnbg6gsu5ipWVqDeT6DGrTfba2WAmfcAobYfNd8fnFFyECXjcWy2VBhPy6zNu8v18a8cc4gB",
  "key27": "EGz9kS9QrSEDFVdVbzpnbcu2Y3bLhauFYGAzwnLjB9GwQu3mqcZDBWWAGrLJ2eSRPdArRWucpncWNMyrZvS9vCi",
  "key28": "5SLpVjnWGk86hBUkdF3mAurmzZ2G46Le2pYK8TgFp9oEKcagPfLqfexDRDWdPGLSxJH2sZt3yycHhnEgqDVfeGmd",
  "key29": "5d6tY2n2zUy7m2e2AEXkTLUvMPnZ4wPRuYLWiPkj8dy4ZQmtwUM2weainKCwxJkeijDFsgAGckXDqgTraBSiCszg",
  "key30": "D2oMTiD64oMAGn3PNpJJfEpKFBu1qtPdNgWyC8cWXxr9rCk82w2UwHAK2cXAF9tpsPo6wxkS716GuPwNsFK7Ymq",
  "key31": "mfEVf2Ze5aB8nQnKn8KeyhGccMGaGiE2GUMVucuqb2htk8PGWg6dmta4Mk6e91RZmtzwYd7X4jHZ2AnnzT1Lr9f",
  "key32": "2LegHZk7m8SfwLML8GXxojD5HxWnnUUKnQynCeariyCexwfaNa5W5RFeqSWLTw8PqmRsdt7MxbU3PG8NemDdYqNx",
  "key33": "55y9pnYZpy5B2UQQE9hiJ558zGV7MebfxaaPHHhZ2gWbLpUdD1J45oEEHmmGDb2jjryssJA9vPDc72Dmwpj5Ujnp",
  "key34": "aRmSx838drjstMudjn7RCccVDQfQSHisjoiCQ2LB2ZUf3fNpj1YAWNuSGx4P2iA2Nm74X8jxkH9wdP9X3biNiRt",
  "key35": "5GZdBxKb6Rqi4K7cnckhTJ45nsdidK9gXn5HY52QHgPmRY5MNFRFE593zs4rWy2r9WF7ZAyjW95RcyndqBjPnKZr",
  "key36": "5sHbAmNbDPxbpif1C87GYEmrR2FqjzNpCnXzB6qcWXFgDE5wGaAzyouZC4fh8CKAQhygN42f2eLvfZiWkVM46JJQ",
  "key37": "3LbWP6ULvRp2rodmAL8DgpjqR9CjSW165vzQ58gEqsksk2uYv49AoF71wQvhu7JF3pK6t1Yt7NRTpCyvYteSGJe1",
  "key38": "3Eb1Vxup4PLA2sQNFrTUN32qCkJyFfRFcENaM9B2RTt47kB2nbgyt9YYa9hugG6dHNWpK45nid7scjJJkiefeoZA",
  "key39": "2UDUbq5mAoHWLwHpARERoQVDYo4Ey1Jbm3vpy2TfUSYg92z6XKLQYPAaVWv7D4SKjp2z5NgHgD2PDtZ26wTYFcdb",
  "key40": "5Cq1RNTvLJvHdbCWgZNZxWkcUtcvAxBZRKPVLEBJ2sVM52KYGdGiX7fYKPDU4GACq4n8XzRD7m8jmdKAU2bzstcV",
  "key41": "3PqnU2KQ79kbQFoqST1yH3BnZJTo2Yopv1DnrqWgFEomxqUqLbdc4eunMu3C6b2jYAbWNn4xnZy5Z3Rr4PPMGDLo",
  "key42": "3uN8mkvxjmgFsn8Nv39NcNwgF5s9suzkAm9oPqtNPyyjuCakW5uiTiCk2jaTsoiu5RdNKq1h3gQ9z8vysaomx8YH"
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
