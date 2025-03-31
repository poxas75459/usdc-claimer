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
    "3a8Ea8AGqkbZ2GzxQh4s68qZUvM8Zr5o1srVJ8R9WG5Pq8rGVA1zzkWVmvxqURqpR99ZfJnetXurY7QVpghJMaAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vMUiobeyP91D96NJQWjYobBxnMQkCyyTx3tRVB4736hCMziDCbu27mktBPLcm5sVHRtqpufKiS7j6J354gZio2",
  "key1": "5D3iJiTjDJR7FZ9CDnps9jyn4n3pEiANVmjnNooR3rKxNXhMPdYwjhVLWqLMKJjdSvhZcrbSH82pP7w4R4MxXwSf",
  "key2": "5bWeAy8VXgKJ22CcntLRPNnX3fFSgh82u7u1zSq9ffq8XJpX8MkDt6XULn7B7HygJUsFJwsWeeCqu9vXpC4gN9Go",
  "key3": "4MksKvc3gSgoXvCW5p1FJpci8jnAq9s3XwfL4MBsbhJpaqcZpgTWNHWTP3wtqQbEFaKGNheK8JujEkGwoq6xzEqM",
  "key4": "3azLBMHKmyzT5RhUPk2kqUgrZ7zcg7vdxsEuXkv2J1eD3odm1r1dCm4XVVXZaCCrZenC4Qb4NXWeiLtRTapMkrq1",
  "key5": "4LwEQorXgCGNBHM1UanffsHUrXQgPXj933ZxLgcTMdE6dV4A1VmuqdnGsYJsPJFes5Am4EvDVcTEHcsb73XYhezR",
  "key6": "4i7y4qUP8JguVxbbDtDPpKBrqqSG5xVYJ8QMrf4b4UKLnrLnRn4S7oeP7bA3eVRPsTXnkesaoWVFim61WANthuBY",
  "key7": "BSRbr3jrjzUsXHKFiXFT5zWETzC6UWqokzpVyhLwGsZkvPnWqiRAnXfUnhgjkNiNmLLc2bzdje6KDVvJP4YcAPw",
  "key8": "4ry4SHGsTe2nRM8efHfmGGbMHatRmT8QrLciFXrCiVtUgBh28tVtb1sbEtiBai2jDmJxPu3QpcV3vTa2n2uSeZ9G",
  "key9": "5jazFjDJg4fZa9FXSZh5mhbYQQdA5bn52piiSoRoQNenQssMzyMQVedJjGWKwtM9NXUp6TRQxMtedkXygyubFpZm",
  "key10": "2ujsqExQXDNRZbfumtTmTL1tmXSGfpdFrvakQWFACgtGpq2p1KAWKcc3LoTjbAiWFy93gVa4G7CWGcGwWTtXgkV5",
  "key11": "iVFWMwhvM7WTTxanbaik2u2pa3cc68zJCBJZKPQYQGGgr16rzZTd63bmUgzbmxDU1Zt8aM1Cv6uTDBo4TX11hdY",
  "key12": "5ShTmmQgZnNmY1ZGF3BrzAfPUYxxZqrznGkWy5oT3BN79FZfzwUpaqbA2kdk3KYaS2coVyogSFN3ib9KxqkCnCeW",
  "key13": "5rCyjEC4XJMmWvYqM5GnahRafteZCwsjtYqTFjZhrTkSDDAY7M3JX6jjK1Xk3oaZ5dLJ6L5cbTBjpg5XKAt5fp8w",
  "key14": "3hCUMUrvqGrFBR7heyeaMt7jMeop9Mor8rbZ9extUsdTb3GXyR1fMGyzWyQEqDPA3AMHvkMZoMj4nEMdTGWAV7C6",
  "key15": "3mvPohBN1ghynDiURsgQ6kbHS9uzHBZ7j7i8NPGxNkRYGhG4imLENqmEj895fk5HdySgkg1odZ2zinbHc6tidX8J",
  "key16": "2AWyKg4PQAnmKZSDFF6GEY1C6LW9AkxnRFkQBk9hMqHYtuMhv65KtSbgrpJeQCMn49sAw4VEcfsE2H1BwoNkZoDz",
  "key17": "2mi29KX3eRaFsyactVAqLJa5bkwNep4b3FZNMY1DmvPtyJ9bFEqg5MDM15GN3WyK5iTmWnBxtykYL1RJ1xt69bZA",
  "key18": "4k8X7esdmnxEaJEwRKHGrM6vyKV51qxheNuKJj5nocmRfp1aqf6oxHsZDUp5PKub2Xrtp6yNZQAF3j1fewEbne96",
  "key19": "JNQFGuHnLfjowByNCH7nY4Eqvczg1skzfMi5mZPYUs5r25kXVm5iL7cxT5zw2gR3ni7uxBoiT7BLyDBcwHUVhob",
  "key20": "4uuFzUbmpnKpsVdSZcPYAnAAD7DNpw2oLv4iZMBfTGtQNwiNgwbdN8v94xAAj8KrRYuHmKGacYxk7PhfPgXojfpw",
  "key21": "ZiktKof6wbP9ZjkeCcGR1UZYZh4XDKrAAfD4sZYSYUgk8Wrb1V7a7wGcBcR5xZQqYHwEM78Vs8Rqasohmz5Wa7x",
  "key22": "65xr3XwiaXZ81VwYMq1YGPpQdBYTvZmkaPSE1C4v8HY8iyJNer5FyWYw23go91n7SAF4dsfoNJjuTWpiZgGcQYtt",
  "key23": "o2c4VcHcrGSWwQ7S6U6tUY8EW152E8AUKvPBSH7grnSrURno2rtHhPzHjuj8M1FzE9hWsR2GUojQf4exsYFw7KJ",
  "key24": "5xPt8npTNo2P6cPw4dqkeG8h9kfBRQXc8uPyUy9tjzTGLogbjB52inbzLtBp6std9daurnx4bku1VgaSGZaqPAvW",
  "key25": "5W1gtFA9Y5cN4WA9dCSwvtBzFdBe8uPtpDoTjpyAdqB7sMmVjWEXywTGGjZ8EjKrVDVuvyBD3DFRPAu6933u6pCd",
  "key26": "31F1jzFk1MGbisLA9FaB34Tm6cV1XyHwmg5pbZHSu154sAJiL9gZFmAqS3b8tpRvDDMhUhrNKiKH54deUXReMXd4",
  "key27": "5q6ncvAcxK9ocirVU5F6zmQnKwC5JmVdpKf4yPJkQdZ6p2M1cn14fzPwt6Vxd6tVRntUhSdCQ2YiCaXqFRmnx6wP",
  "key28": "47TNHAFArsjAoAEA521worFebNsxLkYsQEe8HneGjJpqwtPfTnxT5fa9xueqtTwcXzJhY1t7Wd1911ZWrUZtmEwy",
  "key29": "2mynKRDf7ppefKWLMGx4TmCqtcdYkKUwKsSKNt32parjESUHySnYxHQXzmnLefYJDptUwgjP6Hybe3ZdJSghEjBC",
  "key30": "5NW6K5AADBTeEtMSNSqTUWjyYyf2ox1AkQusFnHJjc8TKPuDxY26jg3QtXNADSNrPcaz71APa338EE7MF88J871U",
  "key31": "3s9URwrWfDfstGJnQcXiBs8sV7WLjQvv9WVWcvqZf16Po1WXZN2LCBscbc2a9Aj17oNSrhLJ2ThNyw8T2HYjKJB9",
  "key32": "34P5gegk89HnEriFdUK3dLmZ3iZJBKB98ivbMgndTXkwerkkYSUDwSyoiDorozVZc11c13TEAmhtvKebe3ooKSqt",
  "key33": "Mycgt4Z49TiEQFAG7RDw1kt8UcRMGUeRNGX47yabG8RA7ps5mg3u6ff7d9GvVi9J577gYYWuwNS1isfiaeJstEG",
  "key34": "5TAQYM5kfXK64EgeHBjzDpzA5QZLroZbYu3ujE7vsxhpnqazr5PTypku9EAW88fiEVXcTQnxdXHW84eev8q2n1gf",
  "key35": "SfLrNTKaG7YBuZMKvyakEYJNn3Ep7QJWBg5QHaQ4vTRKEdf4BbktfTShuqrXX99YnV82dcFX8Cd6Jrxgi43hjLL"
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
