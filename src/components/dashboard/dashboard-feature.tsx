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
    "452LzTiDHpULg6sqM2bZ5yvvfcJVDuAhtSsMQ7VZEgRcGUWJEJ3rWqyMyA5KhVUeNEt3kZ6wVv5FwbsniM9nCv2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cPDoxTWAcFXGsrKAjdTKJAfy3kEtu3UvzkGP3CV7nRtWXmaBzg6Sfknxud3E6yqmqLXToQ6T8hkAVuNacZABUKJ",
  "key1": "5LeU4E1yd2iarCnxTJ5QJhkDhC1owh4RxxSG4LuTptSs5qQ2fgKzU9UYs7NM5def83qcwtB1x66J6A6Cia8LZV48",
  "key2": "JZtMUNMNVUtQt1SULy6jtkrgzN8azYrngTkMAEnv7aWv2i4FirM2kgGSonjcfufzSTdqev69G1aqommTDWFoXXM",
  "key3": "4dY7Z23tw5KCpQkva2uVGcMnDhuBDH3wxy6irTwabnzGZoEp7evNAc9KSdspAdGjzHohRm8QoQJhXQMZKc2219Ka",
  "key4": "4ugfPjuCZALNDeL5G1TYpiPMhhAzX9uhP8UV1PrHtBUH9jx63TmU8affei2e49sqvmo8XuuoHPUwYzeF1hYBU7GN",
  "key5": "4Fh6fa8gEAja8Pd7TWLCtsPaoEvDizuDhyDvKRKiQteYRcNdCAxR2q9LhhyHyFa3U7sjACXCo5nWa1p9f5cKyMHR",
  "key6": "2QT8hw19PqqApJQqHiTeDpj1iUL49ukX9B9dWH9AfEDH5T6NrTTeFv6FDQD9NQ5i1AncWaiu4t4ixLYd1caRntvi",
  "key7": "dtjbgaj1ivxbGeHxQERZyQ4MwfR1iSG9R7i7xfgg7ZePQpdB24yAVbDyBWr96L2f82U2AwdWQa1mtjrCHFxRpG7",
  "key8": "gqYFKpJoSTzkoGzhvQZ89oc66bsATtMUbw2R5Xg67QvKd57wJLB6FMSUjGdjzMpZ6ugLV5yZusdLLJUNnKUpa5P",
  "key9": "qVZeHnbZtpgWggasgMjwEwQHcRhv1ep14vkSGshmtgjeepNymEYza1XzdrcuGj8EAVH7Rz2gqGpJQavfVFB55YM",
  "key10": "4ajZLW4Nn2YuaLQ2VsinNK3YiNhhLiuJhxFK9EE57cNUuuaadm195A97MWtPyu5jiSdVbRYi8Jg54umSYjgS4n81",
  "key11": "5b3SSdZyHT6ndxacmhQ1zJBvBiZjBi3Tx8dUHqmb2KEKyrxjkrVTogCxVy1bx1Z41Fp7zPu94wZbH1PgfGJ8i3HB",
  "key12": "Utw2PuNwoFutRQVnSNPcVtQb26ZzZnYRF4DXq3a5WycWPXQLgaJSZvbc8zm1sTDiTg7efpwD7Co53LiRXgNtEJ7",
  "key13": "pGEVvS6WoHZri5Ftakx3ELXeD9Gf1b9TKMPtV6HGufuJjNA9gbhbfsw2PBRCaLzLjo5uBhE5GHz4JEvFUnKdEat",
  "key14": "2kEqyR4QHPX7LgB42D5BURRoLiFgYXRzWDwvcrB5sJASu8VTq2wisUDp9uNRnUA7C7qhoNMYrTDJ5q89WTRA2U1A",
  "key15": "pCAfk9MNsjPeqbigHEB5vV7CNoKej8da2nAczniZ6MN4DVJECLgk1u2obuSTjLmV4fhwUbU9qzpaAtRWGNvNcYa",
  "key16": "5vUqUgUWM6ihJgykYN6r6PhH75U3zAm72ajotNSYK6H57LSgArBt6W6wTpmCzn26j55WhPJsK5DLK9TeBsThEfiR",
  "key17": "5zkjZ1ptSV16aVLkjgQ5H2ETjnvqCJ2ipGydzDcgqKCRL8GfxH87FtPJeWUubGRxpiTGAqvhGMfDq5NrometH23A",
  "key18": "4hai4dexcvPZ6ZWBxSrf5ZkoVMMaCL2CKapsjJuh1Vt4xEA5GDyA5efAWXiCq9VkhhRDZvb5UthpyqmQzUV285jo",
  "key19": "x3kwqD2JLieaGdsMqmXZm7k1QzBudVRK3TVKXy78ewAKSRbQSxzAo4yxzm8Mpp6sB9hTMegCot9f4tsUgYvTTXV",
  "key20": "5xaugQQkcZvWDnStCjnjzaVihy6Hmjh8Y1qsoEXydV4Joz62QVeJrPMYQSMfbcEHiSWD7seLy3sxbGZBLsiDoRY8",
  "key21": "3dRMMve4gqNhNBotuxxPXgsHP78EWuMzdQdyRafosrRsiwy1sPUi41RfUqGse1E9q8nQJFbWHedukuSNWKSzmRzT",
  "key22": "hZ28uH3qvc33z4SvHB3S5HVB6JvAjuaJq1D9medG7ZDzMuopEAsbrNg8RGnqqZtHhjS95MUgRh3HVKi1Tgy4B1a",
  "key23": "2hYxWUbPVQ974xqESwpsnmcNcfqG7MBMscn1Ex2ecXqwUdRCJogMjfHMqF71DWLKPdpaTKFV1FyoPjGcNWZH1thq",
  "key24": "4uKBNeMCempHV2UqRws3vsFi1Rk4dLjyr2QtW5dTaJTJXEcsQ21qCViDKdDeaNnAyKHw8GAbknKPpTj5UzC9HPci",
  "key25": "2QiTvZqN1ohzXYC8eUgMFqFw4TwKEWs3gZfV6CH8gqgf5K65WKS6M7j9YyaBeLE4isdSeMjcc3gmCYQwX1aye6YZ",
  "key26": "44cvXzr1pxHhUSgfG1GJpTrAfbbVviE2AXGhBDephQcquD1Z2tbCjsrphB8TXAhg2juNaC4hYqY3WC5EX1qXxUQv",
  "key27": "2UgVc1YzvvYUPUbavgVvhVz4s2zgLTPaj8YwCJAWwTCF28TSj7EnzLQd3W1YFY5GFTuv2yUkX9XF8udsbtCGxLiJ",
  "key28": "4rzvsrm88aecApysTXcnj7L4nUXfrhNZPhq88VYob681323FA9KPyTtasuC4tJhQjqk1sGCpuX2QntXU5jUpqECy",
  "key29": "5844SRCpHho6dS7NFs34PuutaSaNFrHWxHaEQsLiGj4qZKugVtn2BoCBhwR8N4vSMLNx7q7scTfPuNWtnrkHEgvJ",
  "key30": "67GoZpXnz6mRTescdVDyzUAe4hqo5a4ufZpmtfXqQUyP8Bo9vKgzsLXr9XHTTgf8Cq34JJEyycggd38JpzGLq3pB",
  "key31": "5nwY3fXw7FQZppZDLhonPU77zQYfmPumdedc3cUYnpmD1L5Br9useMtZjvXoDTfLC5cmBh9XG57BHyVYjBipvvMT",
  "key32": "3574Hir4dR3sH11XsXoCYRn1Swz43nEWayP2sU28PnwnhCLAUurzVQrMNXgrXUNyAnadCDvqGkrZGc9B1bA1pT5b"
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
