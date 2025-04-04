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
    "2kxeqDiuLaC3b5jrjdvFVfbgcN6ybXaXAQKUCvu9yoQMNidKjLRWNG8RvTkhcVwTWfCZTA2CfptW5SpdxnJRjzDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DzTcpMk1XTvQmW2gc3j7p9C67WYzkwbHjun1hrWvXgd5BrMKwYV7Jrg6hRvvudVet1w6oyPaYbKxX8LJbRfgdo9",
  "key1": "41RzoSigpGyym6EfaaDzpPaBKbmU5n9LMia8wc11MfX6SmGHq9G5kfFX4gukLf2HLg9A6SBLm66yc8PKYqehweGt",
  "key2": "3EF1CfCT8BN97AySwVBZvJEwFWjCUzM6MU7KjeX9i5dL5d922sk1tfgjMrMmyb7EYDQjfik4R3VN4M8LzdgBrWhC",
  "key3": "47SzAFqVgrZ19YUEQaZWcoyu1oNJ3EMGLQSB1XwTrHzLpbhZpZxMxmN5WpkXB35c36HA6pFGeQej5SMB39GVGUqp",
  "key4": "3dcE7Lqcig8peSELaRUJ4yParw7bX7bmyTxA1g2LceVhuTF3J1a8evP5HEMLPczXhsyKv3kxeDsbfQV5vZwbvewN",
  "key5": "3b5K93c9V8Lw69JUh4SjxLcoWGfrZBb8b2t85rErw3moYT7R1Q6yj7XLbuCvR4XCNgaYPgZ17UDpi87ECWRQw1B9",
  "key6": "4px7xNqb45NvcZrpNsk2it9fNKqr6pVB8LqnoPxJniHWGdaAqzMptGn8qSnVkwkKHiwbmo1AgGp6fue8C4oLmQXu",
  "key7": "43DhjydZaxDReBynuq9NW5SFRUv8D4KbY36wBF9Gz8gJwMH5ZGsyJaeXXTAYhJHyeFBU2GLPuwZt47ugx5eLwCQr",
  "key8": "itrqLjHzmermQGSS7x4qwP4kPk6rNR9sjuNikh5EVtrmPeiB8QLTuwGw42U7ztvfbtp6CbAFGcGzsfbjGGgog7G",
  "key9": "5pE12tDXGTGA3SYfSx42XR4TESZqq7Ey5vWVxtsxzcNMhEwGNn8DeCFHx3KL9fPu95qdVNwuCe4Xf3ubxmaMzikG",
  "key10": "5xFRy1jaoZTGqLGSuygBLJHtPsr43ouhJHkHVyrYV7HT1EZXeKuogUomb4pnom9XP6ooSSWGQXVy3skVA1PkZZcd",
  "key11": "4zXcnYKffuc5phHT5jvfvDzPKYmjhu94fW9kdr8sUWCDBLSE9bVWpEJLM542Gy8odLmcUm5HHexJZL1hsptdpDBy",
  "key12": "5219u1spZ1ZpgrEzHxcNwcyViMoNt64oCaiZQy7ADqrerR9Whpa6JbfaHganvvKomzHPiVGb8CBv4FTHWrh7Mr5g",
  "key13": "2SdHdtJdbomFhbjGXoKYh9uXqCjGy9KYp4DKQBbntg4k3rRd8GZJnCEQ1NHWwxZGdtsJdMYZvF7KacHro7BRXHuk",
  "key14": "4LE2VRgtiJUhdRo5krvbd92NX4PQhMovisUM3SUyR3fXdQTnDYcfFDWRZgpTW3TGVQaGy7CShPbaDiqyfJt5W1KS",
  "key15": "4xcLMa7BX1SosmXf4NFDjETYGMT9xrfE1Gm91qvXRNit9EKow2CrmiQHq9D23M3iEftY7kuL7n3si1CwGgeW4BLK",
  "key16": "4XthZS5wToFh7Z7e6PjWUTT54coFTWBqmyJ3cnjifbzCBKFPegzusDwy4JodPe1qizkadoYeaXsyDkJs7dYo6gjd",
  "key17": "4wvF2KSGj1729NPP8hBRBzfaFSgXKTaoLyeF8PNwSo7JJfLynSo2f9vtaskzqtz2qYtba2RyxkFipsYBRNn4cx9Y",
  "key18": "3qJ3Bz6XMizrzBXty1XWZWwzbLJeRSh7DUvsVsbwrYMrtGfedKFu9bdnpa7iW1sdNtfL9VAcGSaYL8s4KdsrgBoK",
  "key19": "fkoNambHqPGj2D1Fk7z9JtokPasf8sWLHwhW1M8F33AREBSHwEWBxgDPFrXCVHXz88Vnk9SnWJiUjxheMzxjX6C",
  "key20": "5suv9qrwegGTQGY1RT2Vs3gqDvnVGUCZY8JY6mnusGzM5JrbT8AELMU1HYVvcyYyorGg43wfojsvGpdiRZYCdSLT",
  "key21": "4H15KAbb616inyTU5MxUZf18wbTywx7N4ju56K3X1koPEVu6GZNDLxSPsF8WF52s8KWBo556KDkzL9LzNKpnptDU",
  "key22": "zdCt5zBbXe6REzkw1ncioYmjPP5ZapnrvtWqDocFTHwv7ag3ANnpoD9mGeXEnv54uAXs2udjtMJu51aDgMbHbSD",
  "key23": "442f6rREZ5inzLBi6GEeG9kGFskW7iDR5goAU2iXSJFYvHNs2LfTHnUraiWrrVB79j5DSSv5uYfhJQZhQZ8XmQm",
  "key24": "57RUSMFpu3beF2zzvY5KAcd6U7dCi88AjDBUfmnF7KZJgR4yFX6deafqfVZKbrdEQatZNxtsbVj19LgbS2Zqx8my",
  "key25": "3cNGJH7vAtHZySDXrrCn5QkStHxHA8vpSiSxYqXkAr7g2iUZMPiTfgByGAEAxuFX1Q1TPZxJF7LEwB5Ha7mCKzj5",
  "key26": "5MqgQk7RQnhakDRn5hhDcVgTk4QabhZk3tJnFS6aR8Pku9oc1sKXRMc5HqxpQMdfdBWKBGjTRVjRDbS3wXxbzYEn",
  "key27": "5KFKb9D93T2LWzB3jYXzcmBiPQwaQ3PYTQt6HiBt7JnRJm2dgJ8dMNnxRDuLJS1TXKQqZLaQhNB8FqFVpUvdDshG",
  "key28": "4dy4kFgJwWbtPNCnG2wPE3Riw9FC1EmrMgnKegMFUyh4tPSub93sGRa6twpyGtuixssFvdgeGLwuSqMz6mXjYx4S",
  "key29": "2UGDkWcpYs5kMuJ8Z3KVAZNLaLRjN3TSaf8R1G34QMpgVs8dDhvgfKszrm3eXegc5YWHVJVuyXsgDLLpUmxHnBag",
  "key30": "2ABzFxz1Y1MhyvkagSUtJ1gpgaWSJHPqCiYG5TrByN7URVwp8uDGx6vSL9sA8Ab9m35BYSp5oJK3eUaQovUbauUB",
  "key31": "3sqi3ko35cpCpShaQLsW7suqtnoxD7P48hn7zhKX84Ay9hPBZBXR434kUnBwFb89bhzztezGiQzRejwBdWvBqiKy",
  "key32": "2CGyoDSQHQHnq4g19E9G3zirSdBbq2Zh6GV5vDD3cL5dfaSNXtZWy1zroy1Bsc1cQifgp9Ug2ADkpbE26WCxzsJt",
  "key33": "37oYYhbaGMfTQCRV579Kvoc3VpD1QpudHa7TSuJP2W6PweQqa3W7YWhqdPKdU1Q3Z91cGexLMPE59z8AEVZP8NZs",
  "key34": "22FtQtfBDT5DLPPtYx8mk5XYitZaDws9UZVEV1iFF4DexbL1RJSiQHsPZUat3BASbybEuzd6ftkwWaHegrodD2YX",
  "key35": "2Mf65ag354wdRPQd25JANepovK6cNBGntHEvhwpw5iZG2gAmpfnEgniGaVBrsFUHiBHmkboEB3y9AFCkzepQyve6",
  "key36": "5ZMdwsuwj8GZvHA1CX2NaWGbejqchtEKqBmMNbjGnmji6f6q3j7NzGcNCaDBXJzQ8Xkxy1BMQ4h5uyv4qEbPvLkP",
  "key37": "3x87f5yWbw4dVkGQCyrUumA8EEsuosZ1XiHbN7fhcjmKRnmpgXxhZyZzurDKonbUdXkYe7fJK1EpWKFDbXF6eEQw",
  "key38": "4aVtASrL6eZPFUBzkHadMvTon3fdx6Ua9XTE9FLGa6r3ehUYrLJaaFDZRKG11sxvwXwZDTULT2sx9VD4jWU2RKCc",
  "key39": "2GSroTv4vfa8sKZgDtTKdjxfUUdeMJBDPhtSLQkNTC6pcvXNoQRc6jbmHu6j7qPnRxChK6DxsEoMaSuYqnTpRcht",
  "key40": "rBDGLaQkEv65mZ3dhPsWZGam7L2TrYKqdtsYeRA9rboA2T6wi1JnCkUoQYXsbVqYMXesXeS9DodTnyAt3AAJQSF",
  "key41": "2U4Sst8w3jLPBa4GYAphEvqQBTQvA8frt8PCqupBFkMSZvUgnTyXYfokEjqGNf8dmrBNLdkqJfVb7dQaX4odazHV",
  "key42": "pybHFSkkXQCocTpnrQ7gaYZsyKCJnr97jZjQdV2unzzf7B4yn14Z6xLBeD5YPcMgtPxBT7wdHoPj6CyRo872Usj",
  "key43": "3raQNEJme4U6z3R7dYRDofqF9dKiHW7BpsVazzivL2YcrrvbmRteLH2m9UPqpUtbCtNYpHuik4KsFNCXPCVQ9xgC",
  "key44": "Mk8qF3za7qfd6zpBLF8tRhsgtLnoPFoRTtHjpi2Gu4vF3kq8HzidHhybQ7jh4XxuDJQ9E57HsFCaN34rGduFdBL",
  "key45": "23ByCYrwbiB392mBQM9y3dQ21hEZt4yi2n9kgdmc4TrBk9xVXCJHyRa2mHDJRapa4yThZFik5kQB8kU4dvZfZjpG",
  "key46": "2Y4PmNLumsr5dFzdbeTKyMx48EKrMTpHDHPtaDNSitz6r8Bb1bpqQP8RXXUwUmQJoPivhNJFE2ah9xUbJE4VCXgw"
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
