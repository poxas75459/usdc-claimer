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
    "559GUdHHEZ4ojRbe6TWquPH9kzYw4TMMMfnJSyPTjeiTmSBeGZssE9tUwSonwsC6cuXBjhfJmRRPPURoMRNLqZHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yavM2UGqpnksgSPL6SbeSKEpLjTT7ancbFAKt8qf4vXuwPfRsbv1R9WZaK5TNKFTVc1ANmq2zBZac6qkPit9P7G",
  "key1": "3N8udRCyjVKrBB3ondiLyJM3jd6FfLrgPmyj4yJ8nEtAdhG7EymMEinXbPZGYZpxT9E5uSKfSBmSEhkVvjohugzF",
  "key2": "3JBtQgGXXrU7sF8eNzFuJqfweKtk19TTKwmDVA4W789aHJGHAbsdVXgwMNC3QkvUAhD25cSrMqtVGJoxiiYLxndN",
  "key3": "4ciQgp9JzXykzAnqZA8KSig59LrHfwzrkdn4qK2oDYmxLaTr8LW3SKP7mVwABowY29md85b7qLYFxNj2Rr9JoVB9",
  "key4": "3V51uoe97cxsVrBYdtSjihuzy7j4hJL7jWus7HcKfydmMDtAXrjKFN3CxGp8YLdbHSoyCDguRdBaVR6CxZpJJmGP",
  "key5": "srFFkETryQiGQ9wepMxsxcW5CQR3ew6NZfKc75P5tWvcHzsHgBzi4YsdzseAb22XLbkUcZsw47YmiPu7o5wEqZa",
  "key6": "26aZ8iwowRK8F8cBkKPQKeCjT2xTLJhneYDgv9V5VBUhUYSzh94s6hpxVAQhfBPTdhdXHwfuwVeFf87e3ZQmVJw6",
  "key7": "4bkKVWnsivTkKaDnTcqCamB5ujhCy8H17bbjBo6j9ChAEPC17Z4iKjJi1MppwGtkt2Wp4hQmngPf2Kswhg2kvnV5",
  "key8": "2U32jvdxyJKRQz8o2awUCDm83n6CbT3GokdF9GXFL5LaSZo9hQ9sF9EzsSkPNpwDygWzAQWFdTxyGEFQ12LCXTiY",
  "key9": "4rmHhvpSXbo58K8RSW9uQpGBdFHzXMnVxxcxtg46bdtwPQR3TQ4KYSwFdv2zEwkFBtVPQcfoDMYfWqkoUbCgFbV7",
  "key10": "5bZ1pK85xRPYFa7UykVsFgzwJFkwtYgS4DeLEt8j7TBKz4kjwVoV37LrW2XEvZGV2LSAJBvsZxKge6DjxqiDpGNM",
  "key11": "5ZRnpJfmyLu7D4Eu9hJfYtKceb7XF2Ps3uqcXBeGk1LF2NL41dQBNpeXCJN3SDsHi9BbedWaV984CKknsKmZqjPC",
  "key12": "5L7CHrdkT6UBRjEKFmaVhJ6Wv1vSjU6ZEzu8Gca19h3Qpaqy5NPsbpB3ZS2XqQCNWygsjRXVTHy8GVQWrvmiiayU",
  "key13": "58PNn5jCTcSvj2iRpVN8MwGHBKH3H4cqjwPdcR7iCtxfobfMAuemPHa4P6WCbbFssS3a1ni2xRFDa5eUChSi7tFy",
  "key14": "3umiEqJV8S5ayWko315rUUVFCkj57oU1wEenHDJFHAYzbNJiz4mbwbZpvCxSoyNbUkr75drNpAXmh63sdKzEWp5j",
  "key15": "32JhGCnsPV5syswiLpLw8mkipneuZ2zFMp42N9hRX6Teq74L4vzUmXfCN9WnoWBwKnxYBbih8jLWVcfCRGto9MAU",
  "key16": "4A89mbfuCPSvQZd8KScERbVSok4putpY5AAnihoMT2Tdk2N25neShabQvoKKMBRxKtkwX6VFLu6WVDQvGWoErknY",
  "key17": "3iYCRAEjeJk2umr7d3K5MG8ggnAFpXY7k1uVdjopG1KgbRtH2evmBvTT3a84p77HfqYymXPKpXX8M2vZ2CDA1MXU",
  "key18": "2PbqtkxNfpEjCjU72eisMtLs2AB16Lc7QZLda3bKumkdBs8uNU64L9qcRMFio7e21HBdruTE41yTbGosLc2SMKRB",
  "key19": "25uFzMDLJoJeXwR3KChrSGy74yap8PgSG4mzpHJRoQg8J7UywCiuqTJtjoF2RY4g7x1NtBHkxno26mbtFkmkAUDH",
  "key20": "3rntfrCTPMr8LQdqK5V54jodo8nNG938GLZTDtRhJBPtYzAXvA43Gc4vtuSmykTYTe96HEg5cH27nXFHRvTspiYa",
  "key21": "45VvSU1gDF7UWevmriMKPJodSJX2jJn7k4xJjufA17x153X3oDgpwYvG1zqsHxgRoyf88ymvpvPNybnLnAHjEx4T",
  "key22": "2RUfpZJUBqYis7MFk3pzbh3s1XHszBR4dNnijagHDNinZjEnH3T7SVi73ZYz2VWVc2LX5Uqv51cRru9fZG8zc7kd",
  "key23": "2F4PvV6q93ckfLJUF54V2C8MHNXkAh2ZrQmEe1xhvZWiZc8sm5FrUk5XCkve8GH9BfHnczdsevHxzPmuKAXS5gEa",
  "key24": "ZHdicbR3wWaX3WJu4sVpwAgRRRMHeKhAGgbuGEw6EBJUzsLTQ41BNwYissFvDXxtWbDdTfyqrsnnyFp2MykcuM9",
  "key25": "4e9vKPmpJ3Cz6Y2wA4hsVdnYaywyx8EfjoADecZhVvL8MkVGc3LmQxL7PdW83XugF15aeFUT54XzPwPwhNbz63Fd",
  "key26": "2AQgPku6rH8vacb4XARn3gNiKGEALYKBTzkXyAJn6FRoPnAM7go49YMxrPCj4FFa23qiUhDMuXMD18WQgj7i59q3",
  "key27": "4GLimjN3W1YHSrAfumfk3V1Enz3evgMbsLu9zgeEJZE8Ci7SuYpWEJdAHhAGS3KDKU71zXexc29JUJHPqeb7yhUB",
  "key28": "3jfgoo2EuHxNDEHmXaRcMCRpXthRjcoEv7XPNhZR9T1PxL6mULDvtm6Bo2KWQJcmr2Zj1kJhQcb9CAZyEuzwhkdB",
  "key29": "D7x1Q8gwENLpfWzdrSp1CY4cKHaTthVJkvzjTd7eW65n3TQSYw8ZH16Kv4FZ9nQDs1stwTVGyJ847k9ZKpPGucV",
  "key30": "1xTRDePwbF7BUGApgNMZNHgVS74ZyMpWRhAueJpFyoVLczGZUXtCNwB26zBkaNng6andUZ8koSwywtdZJdWSmbp",
  "key31": "3tpZWuRUPmo9ipg2rArTH1qPZup8ozD4Kj8fK2zwwgvBqEmJ4R52anyRcaXG7XcFYyUoqMsiTVoSTKDAm4ppFBkH",
  "key32": "242CYXi8irFT8H1u2FuL1xuYFP5MmzmdezZXRTND4L51iJMHBnYrQLzT4bv9PjdE2KGiuwxF3YGrQbaiue1zrvKW",
  "key33": "5b4nDsbcDHm8NTjHR7C7u1RoCsAeaPpFXXdynimNg1PVUPyxSacudn2DDcdMHtVXU2jQuzika342PgMyxotbxeV9",
  "key34": "5pN9SBuy4HiyttBmuUKBUoo8sHBHPYtGS3UqcoU1NDUfJoa2TF6hjjbXEkK7jG1wyWfWUV5Bkc3qwdbNSorzXVVa",
  "key35": "YNmzcnhJktQVD4WG6UzMSNEpw2DCCeayJFmfbjrrHoukqCiWASd49Jp5s7cUNbVJPLtpE3XdGc3Y1YGnbN48YwA",
  "key36": "55uhwTSAjkvyyx9SCMBjG98kECExiAznH6eGMXbezpyE7urzGzG8LDfmMeG4VZFKZ9MGQ8gXnR9o1uuWCZSuAnZ4",
  "key37": "5PEwK7GPkAxtV6nKaASQ9QDWrpG46e74fVFNVEikYzr8p6i8ZYtkCnDZpAEckVe1qdFhm6wgMWmzFTg2VpndkFTL",
  "key38": "3guKskCoL1qMyAgubSyT7YqxVm3WpF1SW9DCunWQ3cKrvhjngARRpm8bN1VEj6KBW8t9KhposSTKv49Pd9HvaSya",
  "key39": "4MYMZhZQz74Uz6C1VT54wVKGNvTQNW8icmygSf2w2UXzQ8Z23Bz1ueVHW6hq7XCvLS6TtE5eqr9zZrPiGth8QCMx",
  "key40": "2m2zy6XV58K4Ah8Ycsoj4A6jseeJ3N7sN7eXZ3WFKm4zy3B8nHJLnNfMQS7i7NaTR74akvJze243V8UXWPA8KC3Y",
  "key41": "3FGuJJWbru72sgDdKuahufaXM4tTmpbg9fVjivwx3poBzB3SAJYGsxt72NSDUhv5ELAYkVU9nEH15vYBk8Qm6wwV",
  "key42": "63oseCyWrch6M5TNF8MWkeMUujoX6QgHqnXFaw4xkmxdPwUW4Wbpx7WH4GTsGuyC38KRqjaFk9Jbk4CLrsF8J6cv",
  "key43": "32Met4RZsBvzsFEHjdPvY4ds1QyJNzU5PPAVkJwJVHb3iMUeU8QPwN8NKGyL6EjtwAiFftwJZrzXixm1CHMLGEhZ",
  "key44": "4GkKPgh1J3FVUQQDohWA8DHKHNQCfcaWGSXu6QGZS3ENwN9pv6BpMRUa1G25Mtf3WB6qZgYM5tVUFS77SMHkmiwr",
  "key45": "3kQ2Lwc2CEtdepWCWCL1TmpuAnFmv82pkX2yYsY8gizp24DbR1TNt2Ss82rU6yCGQt3ky6KGGoVBNXJeek4nwfwe",
  "key46": "HpfFZ3yrAD9CD5vhftCDz5Y3BD58WXbTER35oUVzumScjMa8gowazqnheokqqNVHD1nY5ZwdJEMEeP4eaz8cnck"
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
