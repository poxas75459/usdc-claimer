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
    "4YXzRp4c7zMcF4XErLLxR22zwjXzmoVMspf7UWndTdy8heC2kZsm6sC4YamH2vq82YqMz14dC6LskdZV6g5AZdn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H7Yo2KGWkdY5coTdLe8YteDqnU21SEatfWoXVtoM8qkeZRtea7MFnwhuUypsGrXmDL2B2DvFwg9u5oVSaws66SF",
  "key1": "5eBj3ETnPY3qPdmhiUqRnV9FQVvVL5jbMPTCsfSfuoUMn6xqTPhaj6dBETa3nYtyyCXL65zatUrHKMTQFerbaGDW",
  "key2": "5RFcya8eACWj7QVbkeNGdHuy3DCvyZV2J9HJ5yFnsFF5FVSBwaELz5b2y931injjkxTEMtqVpcAphpiddUkSTJVZ",
  "key3": "29PNPCengj8AQYkKAJ3AUQDPvvN1TnpPn5oHg1A1Jd52QKd5CwEiTZsxfKGmqr1xXn66uTBZBWY5X7pRn88hYUii",
  "key4": "4Ts3PNmgfm78u3LvZvbvM2khrXdEdrL7RuVCcTixHXegmR3PW4RS8HkXWLSkmLFZYyrqVayHR5YpaqVG4DNAYcv7",
  "key5": "5zcgVHbn4oeCR9mCHkv3yS9G7a2KAjpPUod3J4yrPCajqcLHrryRy589SpW5PEdNfjXJCvhZS3NWYCc3DJoRYJ3T",
  "key6": "5W6wVbiqEyZ4dF91PYzMp52zRX2KmMbYbyTRb7ueP9ubV4kVWwxE4s924jbhG26Rx2Nf8ty3VmMsNpgxwEyB5ioD",
  "key7": "62YsKtD4UY5EY2KgYkUJnVuuvuBzzSfH8LY1K7KtTsNsAbY3gzahr9cveydtmKLB1kJMoxKBF1xV2wMGekSBXBPx",
  "key8": "47zesZihYhF5tw4GvubQwaN8ruW6GcunG3UeMEdG6eHbQHKsmYsvLCxbuayUZzCVf1yYWfD2SG3cxZzy3bnxxfnT",
  "key9": "2PjUTvJbKRv4eXRorPc78TsdL3bcP2E1BgELHkvAfLS9mrx4YQYVKPqmpsQ4RQCxdDohNcottamno39o6vvmxDiS",
  "key10": "2hkp1ZTd94K95zEj3RaNCqsq6jR8Tk5hqduK4Kqq9GKVCmF1C83jGw9PN4CrHwntAZQ1QoNKTByEkwWNUEcVxFP",
  "key11": "2zCFZRZarE9nXRgmARvt7ibNxJmPNHvrDPHz87dxVSi5iNwkcioHwSdCygJoit5RaXubTAMXoCCxSXgYsWxzidBy",
  "key12": "5EZQ3z3cgUEFTqoDtdEzkyQCJwpyQhKS3LHfKz1Gp2WQkDa6bLQ5eVKnWgPmhi2YgdxzruFKCiLA3fHohBaYbUUZ",
  "key13": "4yA48MJuj9zws6Kfb54h4ajFM2Guaw2RdhtLcHT8uiBBQCkYR8MMwCYfj7QyhyGzi1ZefuJB64YH4vnGmDsm92Fe",
  "key14": "5vAf1PnwRfW8652Yb6XbTikakBmGjeVgFiPfMx8xWfT2cSUS6ph84LUBRwvxJVuR3MgsmzoBEs9nkuKbUjCzrQuR",
  "key15": "4vGvKpj466xqZmtsz2V2aEAopwu4JB1mobRF96PaKVq2642usMrBddGbTVFY19MWk7bdwTk2QtMahQHTqBCdYBsH",
  "key16": "5d2LVkvWTu3V2brGZ2RFMhVAQdbT3bbsGMv6dPcK5ik68T9BM2236tmFc2qwzGxNrLXpD2BUKCor1eJtLHDpeFao",
  "key17": "53z86bV9VYuZ7wqkBeADHV3oZcpQF1fxSWaUt1QzLxoWSpXx7Znh8cwe6TTaZx7Zomq9F8iKik8TRH2kgvGcz3oa",
  "key18": "21roxYwSVchdsLQVZtYzzbmB7kc61B8bdfvNy1cK3joTUQ5jUdiCVyKrPRUEGt85487fNjjMqnqP1212amiMvfTA",
  "key19": "24jQqahvtCVvnE2VsZ6YrDGjLesTLq9dHgX4wNc6YiTrvSTuMhmAT5qYAi3iySbfRYmmLqihQcjEhNtmJ9B45M2e",
  "key20": "5dthUQmz6V7dnzoJKvC2PSotpunMV2pV3ceoHNLDGN4MP4iSJ53bZm5ZAWtsFgeKPwbmG51yqQXUAAWMpCkV1fQ9",
  "key21": "2V99Py9cAyE8bZ4FpiYgbGSUAozCqKyHpKQw7bSxioNKWaRVDQo2LvN65atPCmjHiBJkfNYDsHEsWLp9Av9xtm8q",
  "key22": "rEQfFXLAgwCSm8i6U9urrXreiEEdu9DgaWP7AU96sgZApissYNCoTK2i6dJBfmmPF1sfx3aRqcty5Pbyjt7ZMSJ",
  "key23": "rz2zbJHDynAmwFAmpiBNYCaM1ZKYfVGH3VyxUF1b2K3rJbmgY7V6RYRgnZAdnNNqeFrTYV64DktXSBaaYA2NucZ",
  "key24": "3t2mA7uhnai4Q1bU8aPM1etQ7j2LCEK1FcWYJzDYX2SJxdQs2N5iK6CyY7eYwJLeENP9oPyqUBhg8cpaP8nhGWb9",
  "key25": "5NTGEWKR7C3A9xHRZ1LLmi4byJZAeRhD4yTsk1somGKJ73cJToeMuMyjRYsyt4a1WFGr49yzMTATjdiZVjLwG29F",
  "key26": "29ioFf6EMAtSLprd53UsdE3PHCQeyyWS6exdyTPzjfqLEsPK19kpPGsN4D1gGJnQHsRh3Ew2o81Jq3MNVskuG2jY",
  "key27": "4gMakBT2RZNLqu5GRJfkGMsiA8iz2zFecFNtcE4nQgWJyV9LmsXZQTxY4SoxWpSSq8XUBR8VRbQp7Va1AVcirT3y",
  "key28": "23gV3m195kST79K3yJyA3eQdLG2RhcMD6uLtGqvqEc6KwQwLmUGSdcRRH5LnycDPDFvjH7Vdw9pc52Brva6sKeQB",
  "key29": "EMv1LLn1t2KXvYMdnspEKd9CnsiaeR5dXC3ZZgL5RD49AkP6Cb9DPcYEMVpo6C14yTvwyoLMzeSbwSVAEpZ6rxy"
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
