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
    "3jeLgFJRtSkQu7CHdctQTwKYGRnw6uXRAe8c87cypqF65ncBqSekh1qbcozw8jZsm8T4nvz4pB2AhM7geck69Bg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZjAM5yekLa2hJRcQVMU1AwJFZ4L14ForrkXKtcvTgxCpRZCJ86py5AuZ3XSUP5J6BsyH6f96YiVPvayXUPbL6Fo",
  "key1": "ArwLr1y5h8sn3nZhrKjXyWtjpz8eDLKmd631bAnjFkhqCwkYoC2apPAUorJFcLK6b7m89JSS47WC5QmGNgYLqVH",
  "key2": "4ScrFdxCikStuh4eYV5yP8vwPuYy7NoG3SMEKpQXxfaTk8L7gJuiEm1nTh6f6cQq7S5XSB1DHecEg9x4NVtr7xby",
  "key3": "3YuBrepMKPKyC4uKkFxNtHBGWMQMVHuxmfrHhetdrT4kvxhmqvoHYv8JryRsTMkifXHwwyLqJWC5Ne7JFWRTgmLf",
  "key4": "4xyKQtN8rysdg6K3iwJTbu3FjFQMK5ftQEXRqHhH8BTYvtSdDY9zYt3U1SWgbpAqQkpxEwBx8WFpMdKDWS5owGmL",
  "key5": "4ASBBSSa8P48QycsQa6MRagZmWxWnhcozFfMm9Ndk8gCogTRbHL7d5RSCYacg5FBh6pfZfztEtxLZDb3aNKEJdkB",
  "key6": "4SW9QQNVuZfMsD42LWT8Jmp1yvN8HDyWDgKJZvz3cqe8rxqKbzxVPjNnAxZtoXwGDCr8GtpMxf8QJvM3DiCTbyFx",
  "key7": "4eywW8xZnnmbRjvQmHS3eiD4XBmWLaX8R1eXFhtbLuZdzm6DxSq88bedaoEeXtAGPbvSdDKc4BzNf9RFix9gu4XL",
  "key8": "QVMMe44dn49dDKMeaBqprYYD8rpvRgaRWsqU4BwXDmN3bsVVnFqY5oFGTHqti1fjyBbf9QEof9BYFVHCowkb2o2",
  "key9": "BF7o8etLSi63ZmSwJ9wkTEUq37XiXBEYChx2zer6G5AbJTTYjZAos9Kmtvib1EJ6vnsXsDLm9pbQEq3364ZBUfF",
  "key10": "5MBgQg1onwsRrqvgLG5Lvh7kVuR9eRfAHU6U3RXVCFX6q2dSc9N7mfGbbZi64MuA7hNfXN5hpvUyMDtx27PZGGTW",
  "key11": "TTgkvGyM7MMsxckD8UZHrVqdnagcAmQcJmH23vVvRbHZeDk5VEvxNFtqWspGBMu3VNfiYxVSVJRsQoBWhz4w9Fy",
  "key12": "4GAXdv7jrkj8hJ6Y9Zy1puUZqLBHreCEdRzgW8JGU2zVLx6GH6mQSUGDUgfYWZskXFarAc1shdyJaqDqRSv8cA2J",
  "key13": "5rfkcGSCQhxR1BT22pSoQHEHanvE7Hd4hT4qSsiWYcCuHiw4ZnW87sHqnNCE14DgJa8Jm3wbYxNFQcfERPtmZ9Vp",
  "key14": "2pjsWWj8AdaWeh5VgdRn4JFPYBkLeXBHSkGjE2HTR6KTajWRu41yBUfiaeqqM1aNxWE6GJBUhCDe3duxwXfaQXuL",
  "key15": "4ViRYWmj5EUjFwsXKFKfJvRpko7t8F3kYEVrynicqoiEqULNi13adrDf5YYEta2iMUrhc2knsUjiWn2QAH86qeHM",
  "key16": "5JucP3jqtM9k9FR8JuyDdJU5tS4ie4yAN8Qgxjezd8K9qbr1CBsuPHUR95nvQxnScxbWANY8PY1kVUSQwrJvNWyr",
  "key17": "3fgZK3H3Tqx7SDjpqzTDFjHXmjhjb8q3n4HHDxJuAMqFyN2CDrQHJvDpQm5o3b23mcNvvtPMGt62gfLDW9vCtrCL",
  "key18": "3y3DCWY9sTbgxYddm94TbirgyaoBZBQttCBZcCa25hfVcxfAp7oPBcvN6jn1vm1bYxjMc5ssR3hb8WxJMsYNwy41",
  "key19": "bGEoVfwd9K9a7Eu48vXRY5kNWshFsVEpEV7ma4hYHZ6QrsFUwnnDxrJjTv7UYbskffPtokzbY9wJVHucYFVVSg4",
  "key20": "2ymHjG6F8uYLjMgHfrUmiemzJnRsDgVwCeRdTRSe1x7kKTthuY3JQYgtM9LqHEnHGz1cbeXALo1ivqFmuNopTPX",
  "key21": "3A2kmyKKE246omz5NaPRuh86NSvkh2ss8uJmZHJ1SvW6UdgyDPRPxWGL7cq1ZWDiCwVoufhUzd7jEqA7tBLpDrhx",
  "key22": "5VKsnTq8755vyXu3a6W3Uww5z4QLdUKjgeE98do5ryaFatdHgDFFAo33KQLX7XSdKZ1nRUD6ZDC5gZTNjr7rK54x",
  "key23": "4hPcuty1aWVtJQPcVXdhBd78w1VxES8HYY6Jqr61Ao4fGqKtz5oi6Wi4CFt3PYFJhB6LPe8VeZGyYYkAPEs2EDn8",
  "key24": "1nSAaMsMJfbCBAvfxEAEBoXNgTdcBY1iWv6bqhaVvbYu1reMRWPfTin3WrqvStUkRXUqw4ELG4cmr6qoRbJG6aC",
  "key25": "5QEnZocp84TdPHAwB1C1R3Hvv4RkMV32jhaE3rW6v6cR3xiz2MNpPsAefMsfUcNqMJr9WB2RHDQKHZz5N86LuMfq",
  "key26": "5kJbKKm5y7cosEftPUDYe5w65VAcsAsYNDwpQEDDkbJkDWxB9CtZzJWGU4Q5HQ9SrXPzNcrUe92NZArGWsD8MfCR",
  "key27": "4qgdX4hEvazUvKZ45yy1SwqSh7SrsVdxe86UtoKnfPZyRKpzgpum8hmpKkkux1uYPuPK8NKeddDM1qnBHYfpZqre",
  "key28": "5NpfaJbPNNnQ3TEZdoikzzfvwW9aCQiBxRRS4s8wzRZJxXMBbM3nK9jxr8iF2a2AAoRnQcwqEduMSUtcqX5Ftyvb",
  "key29": "4pyST46AQjdYpNJCQtBhz9LZiV8ywSCacwaEEWzpm21NxAxotL6CxGPuh6VJA7hiwc2HkUc5eARSghc3NaGYLPSu",
  "key30": "22ebeh2G2UgeXwaDFLns3nvo48k8ytWCPjQme18HqiC7VtCNYKhPXt51ryGNFjsqFBaMjZcYaonNyNT44jsFJrd8",
  "key31": "5PNu4ns271fP8w2B2NJ9ZGJxHKHbuE9w221jzjoGKpZzJGhYucG9cMRCeQVMPZt9PFxYJMXEmrmtc4dGnzHFd2vN",
  "key32": "2mv7dv6q55qGPgAyBcEfpv7CmwTJyEWKmxFU32UdZoTBsVZTberdHdH1CPGBd8TWZfSpVFdo5DCCpVkNsPTLroEr",
  "key33": "faTHzwU42YTxNJnCnGBvmY6FDivTX92MLBimLxtsR8GTMR3tuH6Rd7EwoHBro4gEfq9R77m6bkUp2LWBaPGNPnp",
  "key34": "63g4oPVwdwym8YocCFMfzVCF3DfEo5G9AA76FwYEL5Axxmh22imm6aR6vrDJLARhA4ZQNERZK4xTDvL8fpWYBiFz",
  "key35": "51sTShe7NfesKDseGu9tyzf4gBGiLMSYJfvxh8xBWVB55fHWnbVJcbSVHVDdZJsHeX6NmW51FPy6R4baxbWGY7Gx",
  "key36": "5RBTaZw572PyJRY7akrNbNwDeCGYT4znhN2hJZXBdsq3ebNxr7cKJgcKJHd8rXTE3NsTZbDmNmtjqxCSjRg8YEAV",
  "key37": "eFyncz8nL94d5xf7yiu4TLQYb4nHKE523CmDKA1QDGKoD7Zzf86sTaBPUkZSdzsF8HAKs3DGjXeDDXEmAJDG4NT",
  "key38": "5K78Cg4sxRxXptQyXDCw427WwG2RXL8FRdtAqELc5fmWKvjzJEC6UzdA7p7vBfzB1LRAR8xgzwLxmKvFzXoWJRUr",
  "key39": "41dczpUeq9LXbT25mu3rPiKxAzXZadV7zK8kJ9fuPoxCfM4ooFNm2TVzL9t55N9SVxtHTnrFgr7N2EqvRdkGRUrq",
  "key40": "5fqportabwmRxCBkkjyU7vW25NzHAEcXoFC3dbEEW4aywhP1UCKntkjLXwJCZ8MyxXLCLrFiUiUrpUPbF83JBEbu",
  "key41": "xnJGGerL3hJ7A7HoUFH5VAcv4YMa6PcMcQLXZqV4rLLXLoUUrcmYCuwCJnqsmPA5UGuo4HGhBKLrBm4mC4Q3PhJ",
  "key42": "2Urra6sVLYevdNPyMQmVCjYyTyaisbipQmeddXhu5bZPEYhRvJSJgjk2Su1TearxmnDb3rRwrS8qvMyJyEt7ui6g",
  "key43": "38jVDWcr16NW77CXbiL7Tg4vc52MXZ812vuszneajFeCQa4s8rQUABRVeVYgvtFDyw1LiFMqE4X6LvFS1viEdnjC",
  "key44": "5AQYawYJnFKnD3giefk7RiV4f785A2J2KGm4yEW6bSjuHayqmphsDhncCk82JKWnQjB3eaSpsuwqRCsdJnnn4NFp"
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
