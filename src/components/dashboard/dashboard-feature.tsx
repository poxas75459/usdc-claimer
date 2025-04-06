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
    "3bK9GjQaTUCvkrqsoESK5i3m2GPu5sHbi1q3zPAYuyAosJ8jLoqKqoHFkh37P6LaC4tr8ZXXRzUxiqfAxQ4MkZtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PnFmaDEk95G6QDavkXBDi1Aatmy9iGUVvbFgiHSyyPPhZisjacNnCCZd5mRtoSH7J5zyXSRDryUNeLUG4VQi1WQ",
  "key1": "4APCA2Yw1EtZ5hUv7DzfdzQPtW4HyZmBYFPTVHXqQV4YsBudeCLXKXDKq3zWDwPN812GD54q7egBuy8xHiaZgy42",
  "key2": "i2gek7RRnn1pVv4tuX7doKbGVzVCgzWY6Yz2wdxoyWHTin39AJBTLMHcz6VFdbxBxUz5dGjMEM5uV6eFb4LENEv",
  "key3": "2u9usJzWfPaKptm1SocbqK51hwcVtSuneZgpj4opji3m3y8nB871R8Fw5HaBM1qwz81Q9RKNhMKg7kWAdduDkLip",
  "key4": "5xWdwmZaRrkGtWHFErJzb3DioZeDRZKQDHEw1NDhRYXiV5VPAwcJrrNEC8nm2GKH5CFiruYUpY4b8sfEoxB8rQGj",
  "key5": "9rinGgKbRBzjThDMFusiYPXkgRgSBB3HQL1ynhsW9VAhtTmwi9wRPZvM6L5MwXGWRbRZpuZ5GZdFE57X5mZGQaW",
  "key6": "4wQH7W3N4CdauHnXA8pZ3vTCWg7i3McZmSPFK9k47xMCtXsbPvk5kBeGMDzFqZWSNNfUT3z3ZyR3xHb4VbdqRRRz",
  "key7": "5fo2UsUJUa4Pkig7YiySAkkjfSPCeTw6hG9DadwYB7V9rWgac9m7MTtMZCctMABjcc7PT8vkdwiuC4vPnMMmhERH",
  "key8": "nZZEbAHREzd2wWt9BDscyHg5EkAe9BcRGWEYSXSJAC7Vu2cnUZCurMGnV3uSspnpqqLESSeU1YfmQAY4XQBHrHH",
  "key9": "3fyQ45XiNr9zsw1AFvVK1TDgqG4YiKxDf4LsxPeKuJZ3B5dxarow93foXbCQ5CQMLp6pwFMYe3Huqb7S5fRNEo3o",
  "key10": "ThrWfWzddf6xWvu47MLe5vJ2kgqUEe6cGAkMxXeLpRTAemJbq7fFncZBQMvR2GF2AkhjPmMma5nQJ4cVA8gwcDJ",
  "key11": "dLuB48BSXnGhf3ZVzNWeasXQpp21UqFoxhCPZvzmRXusVQyyTi9QytwYc17aZiCx4EseiK8JLEk3GB8LBsW8EEW",
  "key12": "3Ypu4BrSiXGT13Rb1ABagLXQ5d1onewvuaTeXE8TxxHJBrhvJ33fmKjczCNtymjawD43kK4QtfbQx8rBDagnXhLe",
  "key13": "4aqXUo8rK4ewxDc5wVPhwSBA3ZuebibbcwFi5BCp4d6wMuyWqwD7xEubcaZPhXQDJeGgyvwNdr1xKFNLb7bnKM5k",
  "key14": "3jxHPCxwj94wiSvQ5hkSs94ArtNrVfkyfNhJkCTwzGMsdXR2TVdh6dnhjqBaa9BNSfEvz4xMhC5TYtBUZcww8say",
  "key15": "4QqGazN1GYd8kGvALk5hErz6UhNdnvHBrSNEgLiSvKwZ5b2PiMDWVDTDtbj5pW6ghHpmPVjTZTvbAkqDqrBwpapo",
  "key16": "3KPMLkbJrTz5Fxyixw33mXTuvDAbgFU1L39Ab72Eh2gsVrW6FkurBxKj9PewnKAZ7T1WsQtys4s8bzv4U3r1g5Qq",
  "key17": "3FrgrSneJekADiH6YzF6MfRLyKb2JKgWEXkHLAFUtazNwCNCu8CA7DPHtLE11wMJhRVKpSL3bVgKTcR9jUBwZ6Kb",
  "key18": "5A383orN4G9hn7WiuBhvY3ZPw3rUy54sPd7ucfaHMmxBKMVTDkMPia2VsxSmPSG7SF81wTMPorepEmH8NNhNjwMU",
  "key19": "561GiBhST9PJCpGxERBo9GPajwwQzrQXewg3AKpgjjXB3jJuGCuaeio79VLXSJfRn8vcuseGtnV7UKnxvnS277xy",
  "key20": "3ULTyJPcSNVwv4zHW25zKBGtBVj67HcNLeW9x3KCd5AR5usLJaJhT3qcgUUuEGnHQu6WguTMBvd2CjV7STUUBehe",
  "key21": "a6teJVZ9h3pXw79RNe7hiU519Ry2K636gjHv7EPTETKBqESTaAcMkaBZBJ7bAjrWNtjoudAKSm15xvttNSNbbGx",
  "key22": "j163UZBFnQD23oZq6V5Wc5LwwQiTEiADgPZcX2pZCtk98GmZ9qgJe7fZTzjRBCMc6jSHEw9BmnCPQPgzRHxbv6r",
  "key23": "3VSzqmmZFXjLcoRegNA6VSVMwSgzH2EaA8mG6rPVCRKmSRqLazYFhxbdqrnRBJwkpQVLjNjamr2iPDcCtdvQUG3Y",
  "key24": "57BEQmAq5RHQ7a6ma972bRxwGGvAyXHTLa5SDB8zXuVs1TJ4NVvxTTCYeUpDXzyWMRg257njaBkZPzCSTQGQVKKC",
  "key25": "4UUuSUBrKyovj5YYFk4WCKVx8YRPVMZitSbMRfuHny73uYuWtYunE3TD8dxhLDkng6HVD11NkVK5kECDkqwxfuJy",
  "key26": "2VctYwio4nxD436QhEybH5rUnaNhzYNASFq6Xe6RdU14ajgPitU1STgBRJWpF6jcCm7H6DRZP6f94dGBsELswGJP",
  "key27": "61QRgxC2hoyo3CetqbuoqYvXPNJFYHxQK9koBLLKJnX8ubSNMyBk1ooPtWGUr2iuHZdAWnHcryz1ExdDG9dCtjVM",
  "key28": "3yFAGHycne432mNyMf2LYtZXapETqF9xUEyY2w57eSrg6Xx8SdnTrMTwQFpFf5s42hV3Ffpg9P6pML81fL9PxhoM",
  "key29": "ont4iguqtGban8ptP2XY6hCmrWz4F6H1QqD5yEqs6xhofG53P5aVzHfK7wG3VEAkRxrSDA1WS8qoroWcHQdh821",
  "key30": "dfeTKLJkyzZ4veeiPGv1WwzZiAYGvGLL4phSW9UQnYCR1Pg2LBcjgXjDE56BL3Ba86NWbZwFNRWd6DpkiNivt1j",
  "key31": "1rGhCKPE77oQrTrekg3PM2PzEruggpVxRRT2feLeksf6iaGAUi1JtESq2GcA6UhmGbbQkvS2zGxm5rmmhoV5aXc",
  "key32": "24nhnQswtj28BSZeKYMCjjMrp5aq14x98XxeWq3MJZ2tvTtkZUKTAEESG1sLZJma4ZD4pvGDB4J84AcQxedh4gLg",
  "key33": "2a2WaFYX5RkvzUrezQ39bRzCu79GXqQhRYV8vKhuEfBvJokYafxxffXvy7mn68jQgH934QoJxd3zHZ8jxHUZyW4w",
  "key34": "BSzDriFbTRjgKt9hLx7ro1wNBYN9cd6kkC2MSrh9xqPvAZ9BYKH73szspnSXFmQBGxWkKmmhKKswUkYo1fY7296",
  "key35": "4Ni6kXw4s4kn6QdRFq2PKg6FKzXY2yzfmAPE9BwQZWTYwSUCZxJ7q98sZLbvnYrh654NphF9rgBVBhBGSUmDTb9J",
  "key36": "2T7xLgfZ56rk8JoWS5GcNSbz348vLcSVoW5cqthms7ANjHpvPYeDXbNVrauL2HFpRbAMF2WTzvavNSwEejWiaiC4",
  "key37": "4FYvqDB87fPjfi9rxWUgCYE8Wh9iPcgybUgYjoS4y8a6izRCaUhWPXYU7xSeG1C6Z1bvAgXDYgmJsKUs1gV91z7",
  "key38": "2Noe2MECtteaGvbpcvZCSxetcFXYLLKSigkSziNYfKXGjgWEgYind95xmfJynGyRgL2E4LN9ZSyw8FBBajb4CPNL",
  "key39": "2CpCTbmSWL5eTuNw73CLQ6YQLcwxRix8UgHUp2ivhnBd5xUuScrcNAzfTwwULqsqFfwQXFnFb5L2TXs8J54MqV5K",
  "key40": "2Dt2yEwKonCGG5gBCGomNyh75nEvSU4zUBwuG5hV8MLkUFLhGKMUVdb1eS771NNRLRBjqAAwsSbYtDNvW5CeLvf",
  "key41": "4DtXqDUYbn4eUNbTyvFQES6AdUaB3oCSfpToAFeTh28pR7mHNr6xViFXxD8vWtrGwTS5J9FNuCLAerATosVuesFE",
  "key42": "54aAGGUE8X59cRypD6ALgLo97ysDkgfU5Sz1K9AUp1zzui9F2Jf4GqTndGy5roM3HQz8zcpFQUGdNDEXwquAjFtL",
  "key43": "49YEcDBbu99wEaZEHVeqTQj73sTD2puGVdPJR8mcZXRMi2J4VoDZaUU54PzgaUX7V5LKS9gURoe6gfKBGHQ56VGH",
  "key44": "4cw7DCxg9m4JeCP9D7MU7kTEbJKTe57q6Pao14TWjs5iUB8xcL3kZW5DHT6sSwsfLQTW18Lxt9BnyWSr6idTNgNb",
  "key45": "2oKzji2krMBg8DatrZofSypzActFEgns3x6uN9eQQevKyWUJZqHwQwmNpruwhrVeN3ADKEUXcd78o8GxmjaGgZBb",
  "key46": "2y56m3F3gc3YNWn9grtXjqtJAcpkzUYRYoxNYRP74ShfxPXf6cRdbfouKTwrYBYYBaHnZgCfKS7SMWx95L5kMywS"
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
