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
    "3tA9d5smDqaphLUZ7XEaRs98gx6WgBJ8qaJkfStEBU9NfJWADTj6ePd4VwnR5QncM7zSB7kA5zWHC3Ruo7AoYfh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6kHWXsrZDzQPiQAcZd85L8UaQ7pV1o6r7LDe4LoLGpnMFAsUSCwJzWJ5fVAttou1YLF289vH8C4NKiMf1FpKnp",
  "key1": "2nRnQaUaNw4gXQt57NKnuZSQyJqUgJZ4v1tyRkt1Fqk1Cvq2HBnMhFErDobbhoGYXGbSMvA6ZP58vihM9HtUwRS1",
  "key2": "229w2tPetPQuuxD36EvtZFKXJhHquW4uzCUrCZZZgGVigzyedkMKSn9bUjBJsnMgZBcg2NPmziCHfs3okhjD59nv",
  "key3": "2tbGA1Ugzm1tXoarhFjoNztVkJhnndEqUkZiQZT3gNhrYwMBkdsCRDFF6NM8TEbuyAh7kJ68LHkfstnTDDiCSFem",
  "key4": "2qXvruYynXm8SBfNUhGbQ7HzfSwuyyWDTRQUbCf5aRftuiLUesdj3gKgEXGyZgAUhDdTjJaEuHz65ktadPswWqpv",
  "key5": "65rfMYtt9SUzbXHtKQxkJd5hwZLe8i57GhrHtUMt5kiWeWLpjin87oP7a1EjMHAWeoCr4Jnit1THy5gg9T2jrrjP",
  "key6": "3efKAh5huhdPAg1r6gEsahHXga2Lur3FpLuoAqExnACJaYWKZWKRdLtAP31eGt8pHaMw5DtYk21qiQDtYVLNDvu",
  "key7": "3qJpByVs3btpe3CqFWe8ZZB85GiNeXebkJXrY4fP95qapZgR2B9rpoR6p5J7xGhftU77BnHcVLYnWNPea2T7TCQb",
  "key8": "kaWozjvdNY1iQDaFGtAq5bbFUtQbwoDVTf7rHRn1RTx363w9dRNnsKiYUUChXRhkrPdjCcabgWAHbuBHmDFKBB7",
  "key9": "3WR1yxTL8jzKMijBqEEend6svADnNux6joPBb4vpbt497UNDfm1d9RdfGymWseCCbL2bEMUtHgBawZwQrtWzLBUe",
  "key10": "629k8satZVbm7duHCKkqZBKFywUR8SQZGctARrN1MQ352rn1ZsUXxq146kk72KL1c4joP2XFxwPef7EEL5RubnG5",
  "key11": "tfwqEbr572YRvVN5DC4Mf5mzgEoMpFrRMBpGkRXB8j6HJUgf7KJAbNoSfGnGRJ8sdu5eoC11fLNYUcCTT1aVqEm",
  "key12": "QCMJQ1EVgP474CwLybx5QjLPuKu9FbQsBehojx8czy3xxCdt1YWbEohJKBZgGTYcBeynkcC99dhRf7CxepvM3N2",
  "key13": "xTUcKuTjWeTD9uaS2Anh626apb2UMinnDog8KVSFGZZExUikbD9py61QYm2YSKi1nq5x3s9rrsoq9DRc3paB5mP",
  "key14": "4eeuJxN6C65e9Vo6acG1Tsoh2W4H3mS82XU3p2BytebyfKNAyMhCt1gkWXJ3aojdMq9Qoi4JKboywXDsYt1jHtUV",
  "key15": "3MYbayMUjLhGF9K7rVro2TZGopsaLtqcUu3dtYWdW4pACSeJbNr3vcfBuKYEC2JGTodWTbWFpkwp72zty6sbZY1F",
  "key16": "3kBXxESNZHvNvmxv4J4tSfmakdWyyyWE6EwtMavtMLBaTZ8LcwAF3AEkT5ngcWxBCzGDdGioaK8f8jZUruYF9nj7",
  "key17": "5HHUVkYtNguEcCbHe9uRbkf88NhxBTucrctLoAoBj7ajYTyDdgcEK7XC52Se1Ah7772yBkydNSMK45nabnKwnjWJ",
  "key18": "6axZtfMBCieFPU1YLVzycgVc39scq8Kzz11Nh6qUpQ76hw6vJKXYadT2j9CjPY7PJD3MgTCkGCNuRimDAex1HP7",
  "key19": "2KYtYmWuc4JTdeNLMPoNmLCvvQHYoYpUypBcEgyQgfKuWMfGznXMJXDmUj7B2SQTbXMJVSKhsh3bd21N4LgDgk9w",
  "key20": "3mUuHcHph5xqoL5X8uNdZLdmyQnp98Z79S74jeciw6aXDkdwmcjVQfgtVFbKRAYbk8aNQuzsAyhvAZGnMynUGjYV",
  "key21": "2vqPF7tvZQXNCazqhYkmuX9fGz88LWpa8ue74GVFCPgAWUM2PJ5K4vRXrzddx7ZQQeoijCUFPbT1eVhrL7ooPutw",
  "key22": "4P7M4Aq1EbZkpxDndopoVDCg5ufa7Hav83e1WiQJCiNGmPbCUzyMoGkK345V7hWSodf9KASSvVhrYRhJZ2UgCYxB",
  "key23": "4PQiqJBBNtgc6QbpAg15WYzkcANg6i41rwfAmHVZ7sBDuPqJDCCb5o9aBUyx6hrR4oE9VaKcpRSMZ1wbQTyuMo7D",
  "key24": "3mXShnjtGvm2iZNDxTRcLzmxfuFD8fGSrrPgxQFYLAf81VW9erZzNi7EWb3n2GqoAeJyCEqXKzVVEwYc9qTiSrUi",
  "key25": "2ogp1h2FY153EXfTm2eYA3yBr1TyxFR4WuwJW5SfJseWKLvwDxmLsp4bnCuCnv3fQ551qgT96oVMHXMGxhAdJT6r",
  "key26": "5bKKXtK6CWczHRH3PJUtYv62st6R6rPyuYaGSUvyxJrRswfsSqbYQKXxJhuwZZ2KZzhxJtcrrN9xe5r4pPgmtbfw",
  "key27": "3mefbiq7HMA2Ec5ddkfy4LYsoKxUS6vT9NpUDwW37xdLGgQFUEqL9yurANTXNSLNJUGFsw2BCtNWeGw1ztmXg4hU",
  "key28": "2u2QQ1v7Xu7v2NPfiBnAGWP6x7isUkhMhufwttmQnd4Z9WY4GPLweqCECgkNrhMS7LjsxnB8oCbQ15wryAQ1vjbs",
  "key29": "3oCzvXuPKKxXeMggcGX7MDtqhhbcNSjeBSZLGtJYYd8sD2Unf63tu5iWEZ3GsaCsg3dxWubndNMRNop6X1RarjgB",
  "key30": "5TfK4PccMrDXzQKgYegs3qdHGRT1tWBvte4nZJms8Q6Um4F1Tb9XauXgtLNJPX6pLdMqd8x9RtyiqmfXtwt1Lotw",
  "key31": "66R9c6cUoCf2VyjWTZQTAKKV4NkU5eE2mhSRQq1wpGWiSnK8ABuvxfKSs6CAx3aRBGSMME1QiGiQQ89EU9i6NmCb",
  "key32": "5DCv7tx2c1umvtvSDTBrDZzrx2pad1Zpunj2rKEX7eQcpu3YWFmGYv6bE2sUaj6q7obU2iMftqq9hGwgYNL6z6c7",
  "key33": "5sNfmnYCpDQJgvRqEmGquC25GVZ2ojR67dE83CQLPzJ94CBu4P7wjgZz5Ep5MEQm3PEa1fp8fEgttvW5GnhHpVjk",
  "key34": "3dCXR5p5s9pxAgbfwbzxKb4RvmEn1nEEgtJBW51CC3apP2kJRQxTJ9SRGAsj241ZuiCdPEWhzDVdADmhbTdaCdCs",
  "key35": "55t3g1ySWKYkHYGmVKr1k7YqSyUJ2AkahJSizTbk6esztYxirhW3vm19akYfF2LhnhK3dJY5m74gXSHeZSpr1u8z",
  "key36": "5Z15zMLHCZPMAubLrqik3jm6CxGnGfAzN6r9BDEHcyH5JDk4QNiSy2ig7yttSef3Z4FHLur2Vj3tAqy9x6efuG2g",
  "key37": "rnW8vLhgeQuF5WVgSyt8YetPaX94NUsvh1B4NQqXsE7jiEr7Fw6zV7xn3dDVnJt3iNv8Ut3WNXb6asiX8Z1Gbxd",
  "key38": "26WyoVQmKSbqktQgPHtYo7E4jvDX2nnnhcJ5xbjGwF57ntdG2SaRSQrACEJjcFN3uuhH77tQjLE9gaCnK8f3XWY7",
  "key39": "5yrKazMUDwCeWrbxXhFcsz2HAyecywGLwHMNnYhtJqBohgAPptvpTjQ7KzaxPGqzYgLfZmhQdtYypVmUY4NsM59B",
  "key40": "AWzpMJuCMjyQemCVVHKW2ciofZJkPPqVe4tNdbu32fDXh9pCSGepHgLkK9YJqg2GeyUiagMwp8trSyk7U7YRZUq",
  "key41": "2oy1GmWQpfS3VK55v579yyAFC2ATpQxMNqUBmzrHSD7o7PTktBgVySnv7qG9FxZR8HVzac56rKusJkv7AhYUEhF6",
  "key42": "3HhgLCuc9Cpk9ErpiHzNUwA2u15qCNtSXNXcrSnfc3hACnC8pRkBxdbmyVZ7CPEpyz9a99kE3ZqDqQgDUJnVxuom",
  "key43": "5o3Q8aQYXxJ9bCaGHKP6HRo6M9rbrww7n3YfenhZDL4cuTt6QggAUGBbGG6X12UokWcEMHfwQcgiA15R4QBea7k8"
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
