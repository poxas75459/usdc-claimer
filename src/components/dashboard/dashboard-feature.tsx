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
    "2MsRdyyQLaQ3q3zn52F72qdc8RYd4NHr2bQUGd686u8LiwYPe4Dbmka31c7dCpup6tU781XWtQPKFFmw3ZAqh1rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QKAeA9J9hSt9RSdey6sDj89PvxhWgx17ak5UmkJmkns9iHDMY6G4C4wimVM9Uc7ddgBg1vdxnqPV77UuvhjRB31",
  "key1": "2esTNwH7TEgUy3CEvupY7KAV8Kkdji54Xt1e6HakQRRTzzbSD3dhPKeigyaeT44W6LLLnMSrxzqezLo8QXpEzneF",
  "key2": "2BQMpWZE5MgUPp4J2mxLZdWEceKMyVc3aNTfVDU65mBAwh179BuRJaJxo6o1ADpNjiqGykvJrWToREugmg66UGkw",
  "key3": "2b9wQWXW3aWRWZ9MoLGAiNm43HKQEEibs2eVUuN3VcqRjQfbmUFekyqeMbYmaUexet1W8FvZybLpWqz5QBJBC6tN",
  "key4": "5PrBHvaRhaTkC8uRjCk3NPz6o9mQqLZRMWSbckFSjpy3bvwKoY7jmYp9EPerK8rcv4gGtHk5vUBw3jtcNzS9wJPE",
  "key5": "5GL97kTgBY43Zk3SxZRfvesx6KJQ3QyVF1JK6hawqY6Cf6XMd2FzewYCtZUEEToo6miQVkRztwYDK3P628EJGMHC",
  "key6": "K2CbZV1AnRBHNynQ1Suwt4dbVVSBT6caDX7seZcTw6V3FGC6PJ3YZctu2DKMq8rz8eN3NsTb7PUx1zjt1PstJPp",
  "key7": "YHfPMwP8DZ5oknsAdpzxs1fKqybRAb9qMJGeeuPQPREx8wE3UAcUdekYJsLeDxi9kkUXZXtVPFNVesXzCbfGTV6",
  "key8": "579BTDucF2chRrwKbCWaWAYqhBmXyU23UwVEYrXyh5i1bXzx8Wj1fnw25cWYUUPhK81hWPcxgttjDxTSS6iqgokT",
  "key9": "3XmdvZV8K85uZDenx1XMwbMafYDBHLJ95njpemLwkj2hS2a9cMp23Npm1UUoNy247wVhHDtGygyLUquw4sdC5C1q",
  "key10": "5jJQ9EqaPX1S6W6nmndVZDhpqzujydCrCB7WQyd2SvdZKbFJgBX59sZp1SHUPTNGMw6dkyEYdj3TSRZVoXHjCxbh",
  "key11": "67mu8iCNTs5snr5T9kGtKgoHKbZ9nVGWxhNcbq7UEugZ2MLSiy8EmDJkfUiUiP2mrCfmZrYFccMVawknYQXbJ7MQ",
  "key12": "rsCRa3gqSoX1KsE3qeyriz3EuuA6rQUGnHyXCWbo82etFLEAATvpBeJetWTQWZbMJi1jNjCmkMvN6zwM7hq5nRT",
  "key13": "5XSvjjVju9NR1JmoiXMjSraNDddwRQeuRhvkNpoooQw4ksKxJ4rsRZFyMkWp6q5Pmj2AmbQg3RcLaJB3LBZ4MFnQ",
  "key14": "626gz22g5Kz84z1ewTeC71YJwLbqcKp1MukeciL3C2aWQuACTpaoEhHQuiingBkqAfHxQLbssFYAp2GuyJnJdVpg",
  "key15": "3LYv3A9k7Lp1NpCcrBqiT41dswwk6n9har8aHNS7ZkebY4k33ueaaSMMwpP48hLArviyvC6jUtb7kvdHWfmDgoei",
  "key16": "52EqY2on2GcXf22Nsb4o9PqWpyRarmm9Qr2TQx2C4KLp7TvhGPEc88nehCPU2fVV1CoThwwh8rQVht9iamr1DiL8",
  "key17": "4YTMfxcy6Xk5Kunpy7KA4V52gwqZNHKXPNvLGrpV76JTnBR94xfou5ZMJCwQuWjgdTSaaRe4esqAfYHvTTgvXfgX",
  "key18": "2HeEVDP7qWdeK6cVdn7PLJ7C8ztmXhYXX32CC4jrhEGy4pvQfwvZCjX9p492rFKdtt21EZCWt5qZemYw3XWd6665",
  "key19": "8hw86tHptVY79ivPKuwWVp2oPS3RMpRx9wKbfVhGq5M8VpZGBxZrbLteEJAvTLJdmbjLGCKHwXo7UupnUBJ5KVu",
  "key20": "49A2zM4b8iLwiHeuXQBFMRdpk1u4U2xE8o14iPvKnoeKvbogMhtohcgaV4BTnCDG2QXM6t3b1mLddd35DbZvP3r9",
  "key21": "4N9hF526KMhV5d9EEEuVNaGjkFykE4JPUMTBuiYKyL9F1WKNhEeeHxnGnPsjrrPaNzmQTNLYzv6QKYSk47TetUKb",
  "key22": "5vS62VjMooDNwZkrz9pvCFCNk81dhJSpNDPv7TXQiaJXcgB2RqTLaxqDBroNuV1AXSZYGRLzE9Sv6NnTMjHFKU4k",
  "key23": "4P5D7bsZTYhgWBrTBHDdXN4q5MeKPLCNMmnn1NFmLMu9SnvyhhHfXBMBfU6xHbrqHdy6J1RpDAgLj1cHi12BKFAp",
  "key24": "3oiw9KdmRpFbG8Ea8ksqoXDy4N8NyskZzLYYTDgcErFqPNBH2Bikt4xN3N2WSyvqiAjXhyHgQpdVVsvXRuz1Sc2t",
  "key25": "2ERu17MzHrDfU6nkKvxza4uZztjZSfY5mcf6R36SqoBHvm9KUX6qe2T3znYTLqRokdGa25koBxEYz5EkQAUmhs4k",
  "key26": "51wepteCfdCm8KmRvKGNzmnZNQ4xXPyr7Yp3WFxuDxmsCHy6TN4VE75N2fG1Ue9aYvFwuTeuJLZg1GpV8BM1Hc3R",
  "key27": "4392Tww6Fs4Gx2HX5g76XCkzVpGjee8iMcrifoR7JNR9EXU518qc5J36m4YXbgGpGErmBC2PbaZhiraWkLMwXa55",
  "key28": "28CcyWBZ6biiMhdNow9HVSz2r9srDuwisGG2rSqFhiNJZme9UF8DCx7Dpj3BHBmWqcwe8mmMP7nAknnRgupVKqRc",
  "key29": "4jqVL7jgjgk22SET5U4cfqy1Myk2S4egDaD7aZDPxpLioDWQ4dfrMchbFDuRJvtpJQZd9dQqDqq3xDTF64rkhEwq",
  "key30": "2tgzifCBvTNxRQV2FwYgdoXbcRih1YXgmdn28LvLqngkapUeksqsR6N1SUXNgBA6rNm3joHnTtpbm4iNQVFCU11v",
  "key31": "GV7KoRWFfnny56q1F9LMgptSCdg26QB6Ls3iQHM5VE42V8D45reRnCC6brkMAWsGvEfs2JYBRNMZbXRL2ETWUCJ",
  "key32": "3BaMY4MhwmRjp4awPEwtSBw7GuWRuRbZSZd3CFJ7W9s1iaQcVUDsHRGLYmAmkXpxMDrLUNJPYUJV9cA5Y2YT5XAv",
  "key33": "5cxqu7WsYtGQTXdAvojfLw147vAtp8ULrpEVvY2Ry5rFUwRFuYVyMGZoMuuNZ5CCoV2SJty76TJLaEN82M41vnt5",
  "key34": "2WF5kP1b3fiMRpr7bgJokiFN7v6ZivVCX9CgUak34q2GFXjiPEmWoFmMU5XhocssSVveKVL2GRXNqT1aZFXK9Aet"
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
