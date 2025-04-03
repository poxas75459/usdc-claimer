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
    "5EtDvhhBJLAYCSUPAs2YwKWrgf8RftFTwyyUCS2u1DTiLoHTmuktn5Dwzg8bR3Pz5nz57V2TFYQxmLL8dJZxThq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfRYKL8GCYQzjFhnU9P3pJ817usUPwv2DktxBbhBRjaDZs2FDT7a2ngwioHPSMVe78LMnpT3baaZiVGR5PnfhhD",
  "key1": "36H1pxLYXYt3uTHvoifyWFH615qeqxTECuky9wWmvqDeGxhRFL7LAN1WnfAqi9LnNkBGmuzL26HPxtyX99z4Jv4y",
  "key2": "4kJy6WqsuzHmnZ28wqVzjW8wERHYkkWcA1mzWHe5E4oSxfdSyTRtQNwchoLVR1x8SKG44JgShRSZzVVVjY88RA5z",
  "key3": "7NrPvi4HGZrdyHrLeywhgQaZtvhSW6GJGqQQ7KrdJRxT2CaSQ7Rfkhmb9RMhDWFRx9vxJ7TBBxTh9xauDLmTUEz",
  "key4": "3jaXyvQPp8ifZswnTu7SQGcMHtMsr4DxREAX35AXLd4jpU9kjqpdM7PKmBXRx1ot1DVLzZVYTRvdyAfWnpVFnJ4L",
  "key5": "22r6qv3S6W5yuxpJGkGV1s1UkkbC794N94NspYexPyRmhzKAqcNxRQm82RuRtkLWeaKcsgp9SnC1pAjM6geMMBxe",
  "key6": "5sr8i9EWFKDF6ohJwsP7BG9Yqi26rEr2ZxdBHA6HmYmiADHQg3PJSfoAEq6hf98Ns9P9rjhUzQ6LYeqjfonRpZhr",
  "key7": "2wrnqT4nN4cMf8HdLM8eTCtpbXabCKAQ2ZXhP5MrnZN1CtX8QSaEKgR8ab8CaNnq2TF8bpt8gDxXMWQ4aZxocpA2",
  "key8": "4hU6Zctfcv1RLjZUrkJZBYdnPjTmGmbm43FzymFRW3Xu1tH6utaeqpZzJrqjBxx1ofhSBPAsdMaDmTmnNkJN472R",
  "key9": "53mdLK1GVpNSymsWPrZmLgyop3MCosu6Rrw2fYKd5m3Tu5bv3cmg1apTrKJysvWKzGFqAztJyxqPUy9VdCjoNsLx",
  "key10": "5ydbCeA97Dua9v4djZT98XZsmnNG2SCcgirUvwMdPGy5BVWNDd2GsFu9piMJrF1X1xNTo3fUftSaSRHQU585TC9",
  "key11": "45BvBG8vEu3oQTchRj3FhzCv2y5fW1SfW1dem82zhemptAeAcVeqH7bpnBDwqDe7P588YERrUBhxpGUzjxY8rvXD",
  "key12": "4nZNe5WrN7thm67sTxWqw9ZNhMeKn6SKVEcNiCC4sCbyJVf29N3BCJw31RtkC8L8XA4byoj94nZHKR5NA2uFYVJs",
  "key13": "3EJWi7mwhR6Ym1MUfCPXfhgsnRseHtyvGvJvo1ESJFBa82zJpmE1MNZJbRiRprdcE7eNX5ZzpmpBxzYZMKxg6xYq",
  "key14": "55925jhqr3rtdqoPfxr9pFig6Er4ju4Z5aZ6E3MUiVLN5C9qi47eT9Tf25gQNiLQKpaxbpWRy5BsL2QWSSngsikX",
  "key15": "2Lnt6bSapp4rZQMebU42z7zWtpj4QRFZezYW9ueHkyS4QTc28o9Qe9CNc784UPDBNk9EaRWbNFvBJG1gUfr6pksi",
  "key16": "4D4C8qr8aD7ALxLKLhTneDybbaP5n9PKTds92EdPz8sjh3yrypEFeJbQbjmNpz4mEbpyU6VezDq7e8fF9HXYMHZ3",
  "key17": "4gTc55KUsJiyz7vgYbzUmaVkWP2sNgXbDPmzGQ46uLGaMEzYUxQUQ7jNyifSA7hpHLVhUZJsmQ3zzT9xLdpGSr57",
  "key18": "Toy5zwyDAGMcYSc92VegoDg3HxHmD6UFQm5ejgMmXi7aTs3AjBFXbgkYtkPXQZNUbm7ShxRzaJeL9ofWK14NKSR",
  "key19": "3MvaQLVTQQXm6BbWLFMMXTvUsS1JVUX4tnzsoxyZh2xQVhVJVXEpAspRUNtHUnuRdw3Xji5TgFgSKoZaX1wWvNJ6",
  "key20": "4jmUxgmmS8x8KK3rXCoU8thX3SuTNi2o79M2e9chMohbScbz7vR45UYS67uYQJbPDJXbJAKrrokw4FLU7upU4RSr",
  "key21": "4suV1iTzY9gneoSzR7bSHuAKYw9js2UsmYDbE79mN36gwfPK7AmJgRAkmjuLur9djBtwFyvjS2gruewauZ5mVQQq",
  "key22": "3TpCwNDqtTRCZtFpPje64kaQBXu97peg9cLxBQsXLBaAa5rKKsajzuFb6QxGrvVVJGhbWGc7WXjT1jECfN1daDuL",
  "key23": "5NCGQVGLgAasKEN2WaQg1r1RiGYGSPnnRQNb4gXjjJmuTYgjpXSLCccfQJgCNRQxK1BjG7aTFpAK3Pn7tRjgnMas",
  "key24": "4MWd1KMBBTiCXtdDFBxufVigRgjp7LopymWUF2gSneubbjC4Qs7dULLiHX6YoAY4ndmVWLrZNUk8SwRqU6DxEmH2",
  "key25": "3CzkUfybF7iqEZK4NSFTBfgYTwPc7juZZQoUe9DAHB43rb6hmtgtX4hxMUwwrmrctW7vN8VD1nmqgJfxWS2PXgUV",
  "key26": "2oXc7tpJe12kC6WaJmEnLWcBjYANVfnNb9tVu3ZoYnBPUpxF84sRAo7P3bZAV68E67zsK1bsdayAbV6TkbYLkhLf",
  "key27": "58zhhndHWcCAbE8SYhMH3rTUViZoJuYvqmdoDUtQgB5bnLKVPG2iuWpWzu86WTVa3UfrvJiBHEeKkiwj5k75PYUF",
  "key28": "5tjmqvqi6c4dWRJmaxHXtFkwC3eqAfd398QPMhCy7poycXzJeBVVxniLgntnWBxrfeHFgEMBJ585rL7Kmg5yza9H",
  "key29": "2iCwvXW5BPoDXSdnXAS5UQT2AaJ37Vjqvwkmc2kWpk9Fwh1J3swVNVaXGnrUJos4bRH2hkivfHDjJBuWWx1es62b",
  "key30": "7ZDZay6oQeaY2obrCCxchBKNMf4fQZMoHnKgoPqdY8TxivkGmz7F8up24DX5Yhcv6QJSTwEoVannQJFQqXobkKA",
  "key31": "PiCGuxVsuJa3cwuor7uE3muWezdFMy5na4GZgHnJKef78vy93dXyMgBxvCnqYJGzT1evunF3MupK46xjNuqz9i4",
  "key32": "3U2b953TnS5eGe3wNDDaZTvoaMV7tdkReM145FeL2R4zroyvFpgw4D4HkqQTZst3Bxh86xHXGiRV1gNit4KyYzJf",
  "key33": "wDRptXZjN9J1nsotcP5hXK3QrzsVmEv2QFQ2BBYdUoPdhvLXfzMqkddSwoumNYLwuNvJA1t8k98bctVQE2dCdeR",
  "key34": "5tjAaV1w7xuYqQbSyXCJKw98AcbZCS6VtAUCe7QMtogF1Bn8W1oK13Rtf1fdAgyLvW2qweDHPr6x8dNSCrEgiL9o",
  "key35": "5Fa55SZXqSxrDTfJGW7A9yStyaXAWmo2fbjrqMWHZKZK5MrhNQ5nvHPVas93dk4X8EFSvbsAqNN5ZbGs9219qkYR",
  "key36": "SNfPgNn6GqGY5P8Xb4PyYNwBY1Fv1CT5U2qU5pz1AVSTM37KNKQcepPYx8skvuCqoaEkB132KrfGvXGaDfuGojL",
  "key37": "5ooQ5FVKJUbMqwZTd5H1u2BnSVZJGFZj7t3WsS6TVMvGHnrEUU7FgXkAdCknmtoqHm2AUFsmWsjKkP9Bi5t8weV5",
  "key38": "5GLuggMRjQfmrn5MPn3JDLDwEnMd8z8tZSbTSuyPKhR23iX33YuLsRf8pM4hQE5PqhC94veJM88n2qJzYCk79vyp",
  "key39": "K8hgrGdMwjn8Ku3CwVwbc2Yyk1ffiEYFMm9UWjjTGfuCHm6wz1wtJZwNDQ6NSDY4THfBYmgcQ3ifRDrJVBuUYPe",
  "key40": "3pEQdzN7s98euoNbB9KacL4XzNiuntaZmvvhGeGaiSSuZe3TT1XJx1zc3UifUMn7Cc1CDx25Vm2RFiN6ryGAhmcN"
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
