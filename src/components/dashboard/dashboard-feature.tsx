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
    "3M9GjZ2VEwhaoAGt31MCUNHfQ1HnLZjE7LqBdi9w5KnFsZRfRAa8L532fdtctCEsSwsq7T4wmZ3SvU28USPajQva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QgkY72wzWgtX281DDvr6yYMSkXTYG8VwnogFKGsUhrFZ4n49VtidFXkBUEgouVEMq8DhyJutEu5FPYgejg13qMg",
  "key1": "5xxd6LPCpZD6yPJcZFTh4UM5XXU8LE6X8XAfbQvUAVQLAxe7zRBGerrWXkbff9piLQsSG6jiZrJCyRu9c69nMovK",
  "key2": "3goDCRzSTeP9dZU6cGGpPL1WPQEAYhc4uGP4RW5SgZmNdtdmXsu22wVM1WoB91MWWjKskUuWq4R3uGtEFSSLSXdt",
  "key3": "4yeUKUTbbU8Ny4Ci2LsuQjE498DdrTTMB31QVXDRaMKYLjgAtyHvEXStNpJ8jwuMoomwPHMoiLJWpVLh8RLwp2Fj",
  "key4": "2MnRNe8WTV2nLjcVsKzwimoB3F6Uqwi7srbAnpez7H22tN4nPsX3gNs1VAgALRvifkiEyVrLBoi4qvCRUiF4s5bd",
  "key5": "3oaodKa2q4SJzfLx7N8P5i77dVpRHPNN7BzXnLGNi3En3rx4n5NrxSPcLtPoiE6R4aaMtzfTArd1L4MoAy5vJPXk",
  "key6": "42MihxJUgCpZWHS6o7LSDWE6QLSWrNyjagguPrFZa3VidDVX6tDWVwthd4LEQRdRtaSTkKMK5unKuF14VKAuCsPP",
  "key7": "2rdRBXhbeujDCsvWF7zjzDYnEtLv99XKPbi7dpgnx5SWX3qkHkm8aoKGQZdSX1BudNttQusRXBPAaEzyXbZzwsn2",
  "key8": "YLkBvUR8DDDCLaWNQubczZDGc2hKPwjpMFLmCXXKRRp9EVH7eU7cgmnWQ3GEVMcjN8SYfQPc7wonDnDX5pDxCqD",
  "key9": "3deWxbMJFEsEigDGN76x9vaSSFVCMXycE9BtAxHqm2yG3NvvCmGmJKvFsCoy4q9gFDCzc2zLmobAhGmrvweVGVw8",
  "key10": "5fPE5QoPX8o76GjsqoxqQQ4HdgqB8Ph9jxHNHiuzQmgDLckY9Y2NtsCTwKWjsMW9tAcTUkEb1SH2MV59qDKYPXUZ",
  "key11": "3zq4HqATfXojgHDKasGcR1Tna6durzx4GddPeSM5fLmsA81C8FafAtRWp9UHgK8V9b45WRWT6YvicE5ScHQgmVVd",
  "key12": "4XRCG62GywbjDVtzJuP8Vdy2K53uTr6tjesEjA79fQbG1atEjKKnWKbx4ACeA2mjmTuq6XSxZbc8CqKaTCdYA2ix",
  "key13": "4JNSDBvzGYPNE9NcFybf7bkQHaaT3bdw3ohik9i9jP8d7LfHAPE9yE75n4hnDgc4WPVe5V1QxUXeTiwjx4zMwokF",
  "key14": "5fTEwrHPzGqt8ST5LXCDzapVzYat1B94KwoYbgq7E6Aw73A5cwoiXYNC5BVnYKstC2u7U7VJmPzFoWdudm5r5Tx3",
  "key15": "3zTpFPn8XcTMoQDQeFq3ZYDfchzFo42Vk7wzf9zFUBGBcsdUFpQGSpsHv6gMep1mJZY3LtyK7JoV1WFfRu4UZxKx",
  "key16": "3XTEpSmGboYEBXzikwhpdNSj7dUo3FZwTivRTgKUErT9r3BBaDzqqCzNWbcZBzkESYA7SBTFPWH96eir8XQj5t4J",
  "key17": "3uDD6xxqrWE54365BGadghDaeJkPdojyrsKSxNCMGjTVU2jqCtzCyp6z4PeEmFDioto1tGiyRpVRQaDFnQeuHJvc",
  "key18": "XgD76AWCmk9mXsrWrAWiLxyN5oWN97byEVWNVQRUSAUxsuPG1QywGcsu2UJjB3AAwVUmFctpuuJgxUYwrAQ7uJW",
  "key19": "HUVZtpMZueT1E8qmf4yKRUpkeieeyF2HVbzX2SkUAX2bWeYdDMXzHU62Wj8A252FYGpaZaXXJQoGCoqWDNveXx3",
  "key20": "5oBGNBZSy1R6i8x6Gpjp3F4Sgg1qjtkrEL8452DrRjDWeDVMut9uA4hDdJMhMH6beUwpSHz4vp8mFDcq6s9Xw8kS",
  "key21": "2mJfKHVtTY9NgzrkQx72ihnn6ijngi59rD82ssA5uzhCoY5rRYSninuGwmCvRfumrP3oSdVVF6BtctPzpBj6HVSP",
  "key22": "5J4bVniANE44Qdd6YaEJPEcjx1H242SC2hkBhztRHskxLbtwt3CE85guHnWGz5nTM6tBkntVzAyLZ2N2VN6E3K68",
  "key23": "3Jf1YBxrXQweZQUyM5xPZR26wAw3qZZZFJfWr5f3wSryNjhPLs86FaFqxLDdUfcRucpSxw2TUzPY9qkTnubZHnox",
  "key24": "5QMAekdoN1UerHJe913zFJ5Dkuq9BDwq8RtccHsBXr8cYZev5n2KDZBakzpMMHgS2fGru2tbpWKeyRR4a3Hhr5Jh",
  "key25": "6dneVKbZcKZSdbGiTFwSheUyFW2EefTdphmfWes4crqykfjXzCi7kWBtcZ1pfLYkaSf7crV97JQ4qYhdhvEKmzK",
  "key26": "4BoY5xPVx1nxUXvsaLiUBptXhnKvxsC5AZq9ScrksRftzotXqomTJKKY1FEnwNzWGsfCr6xf8jVeJCRZBVsGwpic",
  "key27": "5pPgqVGfXGJFXPhZZ6mtkS9mXmajjUDrzN3m8Je1PR5MeckLrxgqnmHa2zaQod3KJRkpCtAWEiXfcJDQPbU3zUHU",
  "key28": "5T9tWJDYuTqArw3ijv4Z19UE7Wj8fFmvnaHjgBCt1jBRQqBhET24jKWDhR5eU5Z7MVgQm5PLANHrBg2f7xz1dJrQ",
  "key29": "aUKQ3Z8AJYqSc9F5P62AJo22w3QyiavtLnsd6GJZ4RFCNdRXaeAts7BohUZpsX3AebqA2hJwgGHWSuoei8zU16X",
  "key30": "5mfiiZAtDAEvYdGQscwTUZxTHbTNiGcuHPDKnpo8jZdrAedFJpJP49AdHo2cC1xy3EfJcTERXaeHBSUA8PKqCLQj",
  "key31": "3UbghTqPbRHr9iH5eWsxMDGqQtL5f2U37qTk88V4MWUtvr1mzt8L4j9jZCXJjxp634QLdrCGpVcqXPYX6ebDR8wE",
  "key32": "2D76HnD4cxqkqsYxWEuozQsrFViBocc2FFgoyJ1Ug4YBaG1CaLtMasunQbEaya3Km8CJTeeq3vK9siaDguaQptYz",
  "key33": "2y1nGqkBKpw9bFgFw2bw2WB31dv9Aq7gGDGi7EXGrTKoRhxkqZzJ9NxiqcfKcpMV8xG3aSpJTYxHaEX6P45PfEPE",
  "key34": "792THdvScVNGSgfn8sonfpR8vRjw7gYygnQYxYfMtWfeZrFBnAXrLNoCGojGmqzV9rGsJsJUySjLMwuEt5Huss8",
  "key35": "27Vmk1RmAzGDYJT8zADHVM98qCTYkPrtjByDKcKd51aT2rdBwPAbsDKguucQGfziDgkYB5K364SySu3vM5dbnutw",
  "key36": "5A6Z7wCyKqmGcfQS2eqj8pB8GMVQhPEicoqN6tPsKNjYSzuTUkAHYmRAUZZBQwTswsoSHBo7QeznXuLRx7XmwdZa",
  "key37": "3rKvaCheQZw8xeddCfyzLVZwyT4yLqi6PHqWbNVj1ScN4e2NtXF6HJnRaFKuiFUMVDCMhpRJwrSWUGTL9CT2wHux",
  "key38": "2PssgqqjtgfyfMdezFASPKhdkhJssY4Zp3asYjZw2Kn6FiJjQsb41oex7mkAPrXUYmiybvtX6Q5tCFvgVptKqpcU",
  "key39": "3s59uGgBqj3uGP1dzytWvAge4iabwizDFEqW72iVQV54hJEQZYLyjfRWJmuKLxuvrMTwNa2SYQguAvKBmNDasMWk",
  "key40": "7LscWGBY4owcUfFo4JYh9gSHEdNa7aWre9cNgJzZbAE9EsrJiFx6pACc5rD4H9JmspodFM8HbcUNQvDEcBnBBQq",
  "key41": "3pjoJugvhcKT9ZHapf1SQiZnpp1gM7tBq1WhHjkCzopvgbiQspDo7oT54PkKyMhuaWDTFnXgSxvuUkKdJs3CWTWs",
  "key42": "5nNnjRzjXyeF3udQuJ2Q87J6QKax8XGEHsWZxUdwh39Uq4mr74wVE7ENQSZQw4RF53YoWEsQdZYBC71JPkK19H19",
  "key43": "3hzztxpazsjaZmGTkvY53RGzYYZGAeJ3gxQnCSGUX5b4zQaGVUYybwXU2CuJxHD43KNhPtCWdDKeHh1JxBffXGRo",
  "key44": "BuRbko4qSAA91QjmZSF2LP9Ei3SA1bCq5E7QLhwbgAPbCoyABJF1hg8H6fCZcnW3smcNv3omuQxhtXCuoWfwRXX",
  "key45": "2e6nEig1ZF3g1fD2fMpDEwHZKR2MrbdgRCryN5HHoHpzxAP8bBWVYmzTGMDUNdmctiwZaK9pyhxLL1UrwcJFr1th",
  "key46": "4s5Zmv7fguKj67BpAoV9gDFkmdwhGWowYBNRA48Mr9ET28jibnNdB4fxFyf7RP5YmwJyZER9WX9i6KpthzgADZTn"
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
