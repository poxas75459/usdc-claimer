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
    "5eCH359VkCsRbsJ7gtbUqTyAHSUJtZZuWKRibqsgrWwv6tQ83Ab924jmtzMiRx7T2zfSHh5ba6xxQCejSkC1VDf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bM458rRRF2qNm5MhdoLWxait3vZ4Pg4t2CCvQAuaCp4HL5DN8dYjsJoKQi42eikbwEQuXWmAz9SjhbR8XLs4Zno",
  "key1": "ZJ3jR9MpQS6hKcBDNpTnnWn62iM8uytCCn1ejVz4MotabVFNDtLEYe3QusvqdKbmr8Vg4yFAfKRgFArUT6dnqaj",
  "key2": "tjovXTW6wAkGPJpJCTDLJjuPt7cmJys5kLoreVuEjW7ZgtPc94iep9bYjyL3jgr8sZjQnL3oFhBqHf9YwHGMziP",
  "key3": "3xUZGTKsNDxcqMigozj8Qys4r8XjEKcPvjhptsPjMdXuBeXkZvKV8Sy5uw3nBrXWhpnYNegg8PukmnDs44zFXfT8",
  "key4": "2LLHE1dzkpD5AYXSu429KD8MzZR6wTsXXQ6zuhB6vRocKD3mkrHwxRjtPQLBVutgCWxhGRggm52TT5GeRV5LBHij",
  "key5": "5TGCHAu6in8vTd36aDe6XFoygkb2WZHEoNeWq3tuWqk6XEXLUdPRsgQ9K7sQp3k7hs2Aju17TUXc7mBR6PdVxxhs",
  "key6": "Xw6a7kDU1qSjHjpV4qDDRUFjc3FxSXtpvMY7Hou8gCYx6cF9Y5FLizDs93WGvHRks3miSSnfbgvQs7Vf6EdYKgp",
  "key7": "5MpCwWBMJwCSaVTYMLG3hp1wKQYkDL6531yfxJuNrKyANc6KJEScbv6ipPw22KxN5G2FJJeESsSNdmWQPEnsuyCs",
  "key8": "2HBCEAUyT7gRXbX5TyBvnCPeNSUXHjLSThHF1vNx58jFHhrPB9fh9szovDmPZpwHBje6n1RTbjhAnDaTEV7oaNFv",
  "key9": "5Ut3Tq4x8ANbpb7XAygw6dCkCLc9WHmb72ELBcUHcLAczyZqC4KDEfrMsBAYrdHoDZt9v97iGfsDKySkMj3ugCn2",
  "key10": "4jbQ4GenLVw5cyT8SVVg3SCGkxF51GBd3K3X3zTyx8FsAnXn9THksEbz1BotyjGnifiDpZo9z648t3N9JhBkXBPZ",
  "key11": "3sMC4N1MqcULS7CiPqYCNzXzcs2m1j2X2zU8dBYZZ3pahMYmZgiGK6awYD4QPKpAEvpA9k5jwNGbQwVfovqH2Lht",
  "key12": "4xaMvFF1iJZBZEbuHPzSMU94h4uVxP7sEJa8gU5okrovDhRaeo5gnym84nwxop4cti8dbVPAUURSZypgWtz8MPrp",
  "key13": "3GDuEdgfmyRujhXwRf4xwk711YsnhnWcJjsbPXwjDcCeTU2zExisQYu2v4CbHs3aFCrrfaNpJHnT1UaFZWZUJPDt",
  "key14": "2J2J84K6WzEL5iBREFgpsGrMgYpYzUZitsZLVJ95vhcGfhvT6Wy1MDJeEC7Ckev1D4E7uiHrnEcShvZGpTCUpL2t",
  "key15": "3cofYbciaydUgUxaKaFknFg513AMDhpi9nUM5pfc9CGkB4kcTdWC8Nv3h4m2tUrLsCSJV9B31a61wRyreg12X96s",
  "key16": "3fTKKLFBYwUF3sdVLzLq1aL5s86X4ZvVwctLm7SqCyxnR3hn7nFYMhL8hMGGNVDQHS12TM6uwUx17B8yi64NWp6M",
  "key17": "3BXpHeC1b1JxcWhQz8aSFxQjE2HurB8p1NnbQMcXGaD15SEVcm33jpsvBzdQjhJEZFW8smcV2pdg8ooCyJrKvovX",
  "key18": "23TtRGLvEfC1uNFbP4U5Eh8ySPjmZfXy9CyS2HzfTGSGEV16JokDQN5s6ZLgy8ABKS6YkbKVngUUr5Xk5gY8JpqJ",
  "key19": "5xSQJTSvnewSzaG7pFH9bor798psF2CA1rkyP9d6StGDdxPkZ3mnqcvX9KJWkDyLR3rbfUm43M1fs4QgUJrN4gDp",
  "key20": "RSSUwAwWn12fTvk1gkNiAx13psCqGjWRYSZ1VMbbzWEURVMr3zoeNJttaPr7nJahnQjjdDvw9pVL9QvHVB4Nv9d",
  "key21": "4m54emKp5mtzbEfc5zEWbTWtDFZpkkzE5XLeXJydrjXYiKuGPLKBB1Zg5bigQin8K7N3ZsrsQk6iS8myCaQ8zP6x",
  "key22": "2d8cVENEg8UWP8KW4F8mXgna8DLZuym2tGjxwquseu2uxKcEQc6Vmy6ftneWnDhFn8Wmn4mGbCeaa9nXQ5c9pDeD",
  "key23": "3sqzTks5MTrEsKzzmjTxHCr7TFcXb8GQKr6MbMnTJZn6HRuZQhPTXkUcg91KT4LKNeuc5HVwUHh8WJqztfWZAJew",
  "key24": "4YSnkTq4buEtWk6cKUUDxk7ioTMobfpHnB7ZoWEW1WpE6HnnzxTfSWWL6PzdogPLWvu3cY6NYaXuZ6u2QKitcxp8",
  "key25": "4wJUe99aP9AvHbiCTEDteSu5yPAh6ynAePc9buKZgLkHG5PWdzs2njDiGXtxieNm3xXiX8jmkCwhaU2ZoVTRTvDi",
  "key26": "2JGtdNVU8BoN5mcXNSkk3edNZwGSQZQ1yzyrhtJ2LyHGxb1aRTCQ4M4zPQV3XUcdPLJCWcBWkREVoZphfy6TUwsy",
  "key27": "2sjVMqmUcq5FSnpDPHGNC3B6azS9wsEGGqEayzBz6cHzTszN1NZ4JCRXoZoyHCKSWpPHHk4yXsvoevgkhakY5dPf",
  "key28": "Me4tL69qVeoyiZ2ZsMoiN1z6LZ996HGWd38WWozawpWBnyJprt56ZF1SA7phdPkPXbrHPrxdw1VZf3ttzjcRmMK",
  "key29": "3foJwV4Dom2tZv5NefUZqP9b4fFWV5YdgKUjiRcF8rqRWNSHmNP7iK9WsBnR3vQ6LmnxgXVi6WyDp4LJeHrXnPAN",
  "key30": "CN4ymJ7NLTcYnAfp47dL6QLQkKE5BXufnvpiSpbDtyfDxtDXmevNMLfHtVgNJHApRv8LnUJKfnKKH8pDupqtzU9",
  "key31": "4irnykKmvwdbZg1MgzhUZ8LSLvbAotZNSUFV57WUH9DPY7nL7WiamKBa5PpzPRrFExAUwRNsfhEnz8eZprF94nJg",
  "key32": "4DamAgyJ6pymR2bAEBWbFZTpD9A4Ff92n95fDoXy5uuVF9DCuE2Vf1AeUUbruJw2hSXyvtqdjfyV7x3CKSM5WHbV",
  "key33": "2ycbd8nSrxknknADAXNb1iJXJVW8kiq9jWKLw21pa4DWWuVDeWG3cuZmFrCRLHFB8GVHjZioXBCEFEJi7fPk3TtL",
  "key34": "5hTzxyJxkrz4pWUfw5rXrf6ckjSj5h6xNB9xqzRu8YbPUFNCzNhvN1c3ZoxkdmxFY96YGn7oVBBdLYsA7bNuAWAo",
  "key35": "45inMUPgonCcBBZfE3UEWN8nsNyVHn8qqm21cGbjdivNaHiYp7xv1SofeZ5fbC77V9uXrVg82gHXnpUtUG1yYbPc",
  "key36": "4dXoA2raG8VoZiA1mnG1hNtfW9vmg4ZHc9WZ4H34tTT11zUUSFRbv8XTungvP1629zbXYJ7RXrAQnKjQEUYPMSSi",
  "key37": "32mDnYJjBA5CaJVgX9Kr3eTXExF47KR7eFNuvcYFE9oRXakoBJV4KnxJMhb4JPaB9NeAydsMnMrW7pMdr8XfsoDi",
  "key38": "2mNuBek8N1LSnK3DLeMcCnyZB4ckjgEux9F2F75WgActc6cQP3etMWx4pSdwzc65FVVxcdT5EHYAkCDvj3Jqm41u",
  "key39": "3KfYpguitGq9jda1B78oFmBdG1jbG7GusaKUQ7uFhHKkR8d9JURVx1usf7sVJq9muKDhS834uQpke2E59XTAiUP2"
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
