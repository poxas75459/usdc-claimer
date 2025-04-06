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
    "2f3oA14qAtqVbuzBfJyRG3Snzu4RWN2QogCw8GmMadBQp5ijSz1jz8yxLnoDZtYyZC5u7SfazwaPF7Rspfde6CQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e2f1XosCG4df9euMUp4rQLX2QnCEmzqWGeF6GV6tQWzdRDmHAw6Y48uZs1raf8MqbfZaLTXBufRb128w98pDZGg",
  "key1": "3CUKMncCjrH8sNa1bkdLAPpZcC6fk4DFj22kRLicGBn4MFMdbmVRKRMS2ADQLtGhUaKfWbV5sGKQKuFsPEXJFVP7",
  "key2": "21QDQ61K6URox6sKvQHotrUPjAMoM1bk5GoaQSWv7Ejt1aUBtXU8tV1XggSisi9u8SxF8AagqAksGscVJiy9NqGP",
  "key3": "3JLXRLSSaz88EqoMatr3EjHBPB6tKV3emvuxAB9P4ANZmiCwXpyAkWfGLdkaiCKZ4zswCdMdrnsPtQfCQ1hGaJfC",
  "key4": "4eKPcoYfFKK4RyAspr5QF6aSUEAJvbJw45jPAZFx4dSPwByNmQYFGCpCKaCpiXFVfJRZCPK48Aj9BymwE5kmwM4W",
  "key5": "55bL7ZpKoY21mM9GwnVqm7pmbpScg2SmgGUhJsnH5VoyJidQt1co3udUxAeBC69kfD4bcgaEc1Mrr7Vwv7XiVW8u",
  "key6": "3mcBVy8p11PcDL9AHts6u1mGSuqgyBjQFMwduW2gdpXBAh9iT5Ms8mCETTigSBsaN5YzjYBapVMijUyP57QbtjMg",
  "key7": "2tF73gACM1B9TdKtaoouuz3BkziZszcUHsXYgDAKxG26ecQHxcJvVHwQi6nLBRnP6bNKE1RKmtSHgcEFWM9h6CFM",
  "key8": "3jqn75TxnNZupKV8tJbYf1JsX8jSrm6Tb9sXRynXkyEk7ysa19pZEtMB7pecQjDLC78kiNoKUph9u4vWXqna5E3Q",
  "key9": "3VKaLXvYPpf6PfyQukUzZFZUd1NbAN4bMejVwPpxcSK3maiCvZN3xnPPNugaxDKLAo4jqNrkbjTyTRmC6q6S6KU7",
  "key10": "AWM4BP9wgYJqsav2JpwVjXBTkeJLd6acTR3N7AznwFcY1XXymr8uu6BXFzmGuN6EzK2f7vYXcZckBeZJJwTaJyg",
  "key11": "5V3V8KTcdNpEBsxLp9yHkdrGjduA1pp7kxuP6j5b1FZeWWAFYxUED5vNCL93retHrn5RuupJ468pRxQ7C3mbdE99",
  "key12": "53qBtXs9GdrN1NBWvzee4FgeNGHbik5cScib4ZSFG477GRX8e21VyHJ65NdG6AD5poU13wiXpKL2jBCp5UTEeDfg",
  "key13": "4njNkhte87BBjZH7XbHMS3w9WNNp74Tk8J8jDbjBXAzkZPNZPyfot5VFAZuwfnphyAi8p6en6P3Xc8RtYkED4fnC",
  "key14": "4X8RHcgWuoxE7mhbU4dRCvkgcxNjCmqgrFrS3c9krQ2KbZU6Qv1aTSTVjdoozU1vM5oqQ8PCpKJdmkdnhFigU67C",
  "key15": "3aiJbjyCmVL5gBkowownQ63wafnrbPeBYyyG6kZGjbdv8fSMny3RRHjMY7SygHijKGrigmVzqTjMz7HFCg6v9pna",
  "key16": "5rj5otNfCr8Rxv8jVRCPZp9Htb4DDWbzBSZdzDFdRyGRXcY488XMVGfJsXFgcw2jLyCV4iQ3jasGoSzEmh9CqJs7",
  "key17": "2DN1cFU4zXXUMdZ6FQop6pSuSusz8FG4Kxpw8KMrGaBvV9j4DVvNfKog9d5K3J9dHti8Wq4nLFa9JRjYuF9m9kxb",
  "key18": "3UsPNVF9rFfsud5oZWpFLFJy3SapdK2V6qCu75PWjjrZqMmFVDyoEigqKP4TzV18pnjNk5kiXGeQvcajwUqdfpeC",
  "key19": "3K11MbBeU6cGibpkiVoZoTGE1waAniQe738gEAcn4kaGxsC4zhbnqh2e5KED2yGDtnWduzrTcLxMuFtm9KA5Qm7Y",
  "key20": "3tEBR9eNGkce9VW4jEf21cnAnNkrmFSQxXj8EarRjmSTz5cNswvCdVvCBvyk3WUe4akrEwctjXvDdyRro5eeFokP",
  "key21": "5oKzfF2egyzPBMmPfWHjP1KTpgzw5qSLn8Estfvq2kjZgdh6UbuC6xDVWMU4nBHYrTpykyWwf9gjL9atk6pe9rXX",
  "key22": "2GmNFRNSKCRPzrHJF7s3rkRy4HwzDfL3PvJMsd41PDsGBboHqAWgtYzGfCMfL1i7X3VjbRm4yurvNdGKLVpDd2C7",
  "key23": "sVzmJHoRwBremtHf71P9xhYsgF9ki1ErMrMgtBQaRL1n8tqn6d6VtzNSkaAACNCWT2TYRuEfEMLTTCm1L7RhTxD",
  "key24": "o5AikwJPyUMfEUAS1zLy4W99eVEPVrynaBFbBAt1cMdXSGKNR8QwMNQbtypzE9SXPuJQPuJqBAAC8Yd6MJ7vhjJ",
  "key25": "5pJxuRPPFfW3FKLJHussbT5bzU1zEXB9ngpBduMzw9E49mbV3zEtDMoiTpU3UYnh2N1MDFxxRoj5ZtR8FPv9oEes",
  "key26": "2kX59uck4R91DVNhQw8rfYkn827dfiiLUL6JimLr8espMJ4yF1iXKMRZfm1xcp6551oqXx3L6ytEsC6WPsjTGMWB",
  "key27": "3LRVoYJ5bT3FZKJYWjS19CaXz6pMKecJ8v8XySGzcxE7irg3R79mX96q6Ki95E1E8FotLK8a83gzZznN1hYwHNwa",
  "key28": "32gaWvCRdCJfqFMHF4Q1HVBbFSizT3R29kte8P4w3xdzy2QjBr5DGQgQ6M3TGa6L6PDbZgrKPS1j4jVsTU3URavG",
  "key29": "2eynwFtFCWdEpqztEzvG1YujZtHMxHLnTM7Me9BKFvbGwYejRR9bJsYKo5E8mTv6RWu2JByx3WmZWe34R9oJ5qmA",
  "key30": "ZxAHHPtiwHCQk6w9wN1m1WiP64e1iHbQV25ZQWLEyK3xpydYjcEPbNXhdrQcvgKrScxdN2beLGLtwDCxmPN7517",
  "key31": "3vTbMvTCJRHMFaqwckLnYqoeYgqjZGSfBqMyGwqpw5XGzdAJoUTiMVWT4UBD6QFuqmvNYtM2ZBAHbeXHA7N3xD4u",
  "key32": "enQ3rBhuZnmSUTSJm7xbR5LmCqyTTur41KfDcYA2pDz1fLwCFoikj8J8xUA71KdBudAjUERYooJNKBDCTV3JhX7",
  "key33": "468Vmhz6CWX59C2VJvHqEtDBq3ZXFpZueXmwMqctkwQznpQ8trijdtYBiRZpnLBi5mqchuGZdUer6iB5ZCYZ7s7a",
  "key34": "2Vz1EjagGbofM1sq4zsaa9E2z9hbwdGmHTEjNFL6ZbeciH7HLFh2BTdLXhDQMJEcuRbKQRrcggYF2rm85v8LpL5e",
  "key35": "DaAiNgJw8C5D5TVr87indbmwngnzWGaLF7wAB6v6KmVRLt6ahLfAY7fpyQ7PmjTzj7gAB7mNmHJCRAr43Xwvgx1",
  "key36": "4seBipEhjidu8hzKXyw8k8WygmbJqvZPiKaLrTWGGxqG2kYdyvMPQiyJeovMRTTDvaNkzWmkEanCBKAWb2FGwkfg",
  "key37": "4sV7dPPA12wtyNqgwLhBft3gGecru5cizQSobgiDhq8RzVnBvbxMbgjjLjGLBLZy9QfDa8Ynyrcz6g5vwpovFj9a"
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
