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
    "62bK7DjVNHyAPZuC9YzjBpA17tskWYQkt5sEZ4cBBfDTBhtufC7NUkbit5uwWcKZNoooeyHxYxLaw95TQvCXtxCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JDqvjj3baKVn6eQANsWoc2wQp4gF2QE25QcyKkXUBU6kWV2TRGckLYUXcx2j3zSm7PngGgV7gVgv9iaXJ7nYvN",
  "key1": "51fiQtxCUZQSockEdduSSvXkDteeyP6aiRUkfAasTmvkdjibfqHQXwghm4MHRvsNR3XkrgJ5tEXbHkG5wCJ2QifR",
  "key2": "4f1cxLUcmTZmiRHnKUcBQYTDT8fn9KAFt1XYUSuLqRCvUjPSRVBzYQGpdN2h5XPXEUn9jNTTp6riXdV4xYFioM6x",
  "key3": "59cNA21yNNQbnHUFe624p4fjyP2Zs24a5EG3KEyBpwsQjoYpe2XHUeLqh8FTUtrB4vQBqh5frz7ndjoC1LEr5ZDN",
  "key4": "4Ej3haw7KHSi742GFTmBcPA58Hn4VyiCK11c7uFk6di2D4Ms1prHkzdXe5zbFng83gBDBQNSVFtjGNiYrFiJPQSU",
  "key5": "4WYKvMkyx3JUcLiCPteb57tjMuQffQCgwFHtppYMP1aYJKetKm5hEgEQWW4NzY1eej1sGKthNC3aSVvuYVCEZGrq",
  "key6": "264Fuht7N6oS2DyRnahtygUxERzbn7szaBDdBdYzzC8mpmCqr4B7vubSwY4yrZhnQWYpcsA4aiizfsnMSnNKtyHe",
  "key7": "5rsj8qEEcF4SjQJK9KswezrrCa2KcndhHvwt72hrHxmvLTB52ZqPgAmC72EXUJuhPnic6mrfgJ2d9CHa8Bn4KdbA",
  "key8": "5Xy8VzkpXMu1sxypfgk9Eey3hE2H2AYKxrabisJ1NUiVeWqUSpyeJ25A3Aj6XSxYeknrqdvcTUDBZG4mGUxnw2RA",
  "key9": "4AyTExDhXFrXYiBem2tYpHyRWbtFbnbDMuHEzZQgziCZVAWQBcTX3is413bETCEdUNh3RFvEGUi1ngUwFp3Auqnk",
  "key10": "3WWXS6aUnm93DA5YPcbCrqaYbof3bBUa4hmDsrus2Uy3Nuc7tZCEte2QZdiLB1HqvUZYpbJukC6YkY3233mmeB3C",
  "key11": "xGKLEnFgLschwwng2zcEoPksXn7u29EffhGJy8NZ9RCny1eBUePATYY6EJne8EBaw4A3bJwSjuRzvxgzWPa5uw4",
  "key12": "2RxxDmyRVYVBY4xmeExKTost4E1yuQBMzrkHV4xgG74FSmXqvHc4UZ42TTFcX46nXiE6UoX996tGEA7hbeHvFr1",
  "key13": "5atNRmApqBFHrf18e1hgrzBRwcHHcVkitC73rvvi4JTgj112fsXZJNV6BvKdFKpAeGWLrst4pp5aqo7gSJwXTnio",
  "key14": "JtBkurpeJpDKHjkBhSAfMdqFZt2BTGHKxs8UXZnPfdDKai4SjULEVq3tS1c1Ts1d9w56uMJdyMjLHMMCnxgmqHn",
  "key15": "t3JaYHbK9bVLeiVnNZjBDS6v8ewu56EEAgpxgmsbD8jx1wXkuoqBiVJCvNwD6Ew9nWvXuvsEKTu32RbDvH35756",
  "key16": "2ptdVVRF6WiG9NSwHz4vLZ7sJKyjgPRrRofSEN8pEbgDirhzRKbJigBy2CA8v2yT149YXzj7cnmY5sgWX63AhTMJ",
  "key17": "4RLx7yKLJgeRR8yYva38jRRcaA9ukZgVbKyFBksN8BGVerWXVQehVNHYBkgSZNtzujqzMbSxRhSudncpvZj8y8Ck",
  "key18": "2DrVxh8bQQ9yAoToS8Treq2qguszcgNdpNKVWp68dw9vxKE1rG6qLJAJ8Yh8oCWjtxBDVZP634G3fNm4iGhyBj7x",
  "key19": "AiTDFyU6wHxLgQqggY22GFyijWAq4z5BrNr4N1U9vL26jwhJU9p4oohAQwq7MZAUAPNsK9gu3jddVqYmk3yMDHv",
  "key20": "vsp5RoSpbM1PLxyzUL9HJdCb6dvYyipivFhQTEj2jmP9mX1276MR5SfQB8efBNDy7B9UpXjSABMX494vfvGQ971",
  "key21": "4rYdpqE1NfM6SYREYnvctwnxjJJ31m7x7UFdFAeDJewgAU2L2JWQ8vN3kVpeDNZqnBzajjXfoRbGyt8i5Cn9FJ2Q",
  "key22": "43F1CK89oc631mD5iAYUCisS7MEntrBZjVqgdRFgB7mqECKmZLeNgZFnzcHJVBXD9244Gq7ZP25VwXqXEsRt85Zs",
  "key23": "2f57prjT5JJvSdcPWDP7RCD5MUSQrpfakRR8zaYRHbvWDqzb4WzU2LpVBQEg98qQmneJzT2dbD4PsCsJoo9mvyiL",
  "key24": "26GYBdbmPYwC51F45BqV4z8oxaBNMBMMT893fSP91pvB6eRyoR1QnoD4Hexua6Ny94T12i94sPXaNshn2sskmF16",
  "key25": "T6ruSCoD7GF6WGoHvg8edjvU1bNY6kDMpQt4W45RpAG8NELzep3giy7ZD8NvT8cf367U2BeRM1ymbNxwyoyPGLf",
  "key26": "zTgB1YvQCn5MJsTyeWQTn4rYPXgAa6T9pZBLARa5V2RPH34zmMefs1bpuJCN1j2dLPx7DP2zo2pRhuywRaXTkoN",
  "key27": "59ugHPaZchdZFEQ5o5YA9tAtjt1SH1YW6z1KncSJyfzivuHWo7RdvadtQTHGYR6yWZukqJbiaNNiK6noPFxqEnGX",
  "key28": "wwDg7dKC57G81ASJYf9FJuHhBWLBmLSGzxsxAEqpAUsMXUW5koWFrnDrF9HaZyTy64Q4CJrzdNxxVp7zUyQ2iFA",
  "key29": "62hLz8hcrTEcXE5vsHpRMpuCVAv6BM69Zi9MyEinYuEd36yyWsp6rZHc7Sum6awvWztVwWoDSvHqPqRkwL4uiWyp",
  "key30": "3tBdUAUWMjKw5NSAnujmG2RtH52xmgrkyVnAUgfWXn5hicbejk6MWHRzTQvQLSn8MEZuXnZLXyRc4WXkv1t6SDvq",
  "key31": "mUaBFtp7uKpgkEWf3DyEmCATHbijbmzigU18ABTmBQhHcmhiJgzqL8bqK6vLsHsJP9E4EHCVDJ3kVCNqBG9SKHv",
  "key32": "bSsqRAHPTmJzCoqPnxZreMfabSUXVDEa3MekmsV7HC65BENY71e7rhFKH3sYxHGs2Cfa74AZxF7iUhV2XcKAgFR",
  "key33": "2RLFB1TCymHyaMDB42bxkBbhakncxiB9MEjv7vKEeT9jJgvS5PfEcCKJpDtEQYEr95z9J1TgDhjfPBmhQT4nWHwk"
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
