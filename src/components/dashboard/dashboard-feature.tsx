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
    "2QhP5KsEFKgsTrnZ4GTacpQWoxrDo6bXWdWqFnBwfeih5nzkS4Np9FuaZJr6Gx4KpMWUBzSfZtCfdnBJxiQ1cQjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BfRHTCiPxw71a4mKE61Jq8MEbe23vHurRNQoif8oviWENps7uxeLWAo56XJZCsA3NiiBnMZRJek783CehB44Xao",
  "key1": "gcPLW55iPAhMZ4iHPfMmJK9WiqJcVfYkKCq7i939qXhDVR75mpRCQ5dkTEn3E3BETrsU5T5zHjTaFTbcrTtgDS3",
  "key2": "5nmR6prKwEXrs9gCpszro1g2cvqYVcftKSfPME6RyWMFwp8zGgaDj5ojQ6bVz7X9sVkwur9NyBKg9QPtCuPTRdjT",
  "key3": "5UGWtuqyGk7aeuSvkqzAA67jkH9FDhcyS7NaBzeViRNkkwwscR2L5rWs5GYzTLAJsrcfcp2FcjSrhx4LmQJPURWo",
  "key4": "F6V5MSSCCT2fgPjAUWP3Af7PX4m1Qu83N17YA3zfBUQKz5xCMiowR3kNtDVMtj7wUM7mphTGxkGPi9yfHpixA8X",
  "key5": "5iK7eJrACRsGBiRKZSUgPATH9bZUHMTA24zPwqnXAEFtijBpRHyKGQrrq3B6RoiU1MVVyJPnP51tTdQwaHfogJrg",
  "key6": "yTte53HtgWy7M5eYVFCeW3zot5TPVgYFcNWnWhjoQy2S7UcZM6kY46eax3dEAvjoCTkBy1cZaRsNAwFn7EoNRrR",
  "key7": "3qUcLaCUT5Vjvm6ZyVgHZbhk8Wp3XqZLgYYTGPa425PtAHyEQnt7TiR8tY9uBJVdiCw8e1FZaP1sv88vdgbqnqKP",
  "key8": "S7jU8bZeVTMk9uXXqGQzzAFmtLcJvnjHHSkLPdkTE3jTp1WvpNmNtcezyFdFpZevaUBjwT2EyGu9qDDXXTVJuGA",
  "key9": "56e64mFKZcomFYPDbzb1oXC2CzVWFkTPDheKZDGg4oxJYCk8X1eQ2rCuTa6Q9hU9XMw4WA1BpStHyD1kLCwuwxxe",
  "key10": "5iibhNX1WjxBuHkaF5BSqx8wEQMp9Pxaxq7YrYLa6m8sd5r1Vd3kd28BN7eSx6ujA7mgrZFHzKjYoURVuk3PeKWh",
  "key11": "2RBLRJNvWmBSvsGf9XHgihHEwZtcwnjPqknS56gUpMXqqnhbiDTw5YAFKcVuKxU7wTbDM578bGVYhKs2FNyX99Re",
  "key12": "5r6PF5mmiH3amhrgtw37HXbmZHDXVoHRnwPFSxddiGe7Wpda3HgRRRsaNk3C7BacfaNo3NYrHppem85pT5L4MsCr",
  "key13": "2x8dFWFedmydUi3FpmHkTBJcajVe61vYCS4rSqGXiPaGJgHMMkCDFDSxYT4dkVfwwhZu23Wm3zvM9xxZTqFtbCqS",
  "key14": "61ugxYMFBpRPLWUkkBmfS9wRj6VShMcfco7tppgu5MDg28ouNkqyekBEKUHD7KUhXg8VKH8inkHFatsSiERYYHDT",
  "key15": "2pG3MsGrZuzbvf5DiojyYR7eSSgj4x1DGC5dNy4i9Nvpi3CcHxHa2FtwAyf7gv9hj7mDwFmMVUJJVnaxjSrfGAPc",
  "key16": "5vEN1o5h14gZQv22pJdS9JBJ5CkB1sgVdgEMoaTB4xR45b8Gde63LZTthyX1wLsh8xhm8v7hq58QEoPzPo78YZC1",
  "key17": "2aK3RnB7nm89JstXC6CaBu1oC2DuCw1ogfgnmnfBQxBQ9tYvYuav571Ah414SJsacejQWQqhhuEfLLBLDZVEXqe8",
  "key18": "2GZAypQJugojQwA8hdpoYKhwCNizrexnn86hWTYfhhTPAsun3hquSsQtT6PndKeatkthagzsS6yxeW4s9ZzuQkzi",
  "key19": "4FDFwNnTdLEdtjB2JvsxxvUQjFcRHrRG1ru5jD4j5WhmgpKwj7FL9WYJQVLYgXfWCxHorrAJmWjmbvTxpLBFAz27",
  "key20": "adZkwQL32kxv6QCsG5bXsLUTHoeTunsME7NYnkvDBcTb5cdmA4QTMjmsggrg96oJ77LcCTzz9JKGEf5qaBvkRN8",
  "key21": "kbji4AuKi9ZYHS4oeTop34RbA2PNArXPqo9SaGc3JSL1e1G4g8TH2LUzCofHicjy2cRrceN4wFZrMf46r3qRucm",
  "key22": "ZawZyFUx6oaXfVrUJwPgCnrpis4ty5jiPHbbWZJSbzkrGDpzUghHCxRQAkusFyjKPvpQQBReZPABZinhJWivgJC",
  "key23": "o2fJaNZ2DrKfYMm9n9R34aA6R9ksSPNhWQpWFzEahv2mT4sszu7To7UDdyFvaz1KZxTdPeJbhHjFaCjumn9rmxh",
  "key24": "2FG7gdj4yNfpLCoEDmtgWbVW6NjqrfE2UofVWpEwEjWv9ZiYdtfzjtgMYuBYDMYKLSxRJoYQKtpM71acNsFD6XVB",
  "key25": "aNsGhSFoaZCfVDPrJy8gy3aFQ15hyTmybhzewBDn7x8DNzrTsq8B9AnkLbXzyYz2B7bWT944oRyuL2MbPX8cDNE",
  "key26": "3RrgScDA1P7uBpisakAqkvpMHQVZs3kkrVRQmXivzCDMMK7mA3zsENd5P5EYf6Hk4iXy6iiRdBn68X7yNBHBSSkG",
  "key27": "2n8mXFHHKFmGgoxWCpJtAeeGFS4RBpGrWYZ7beMKcTGiJxiuTx9g8fxp59W6KpccfibozQ4MAidYB2tcgbmUiffM",
  "key28": "4ed6TkKThpVMksuoTHwFnQhnUcfhhW3nv6biMDgirFJmzomLTn7rpvhiJfzFDYiAGA7tvGd7XHqGMpZWdHf65Yp6",
  "key29": "3ZPZV8WrmtyJ3iGhwkfUTyaKXqKYbTzRHr4CHZ87Mqy386bjqZRj69FDgXEyggcgwdcjo6XXNR94FU6nZty9Kc3z",
  "key30": "5XEqHjyw3P5KicUvYZM2thRPvhqGctiPV9BhFed2AAvemKZugJYuTo6q9dWLWBscW5a1hTU5tXbXPVHpc35rHz6X",
  "key31": "35e9yubeBxDhwauu7o3kV1YUa7nQEDeuZnC27SWbicCsbrxV7vAom7uPLSqu9Y4pnVwP5ucjZkGEgtWaKuCgbG6f",
  "key32": "ujvg3hNbGbUNjsQnF8ajEE2GUqPw99u1zJfGfARe86gxsKH2F7ZaCiPB7SFNyrwykwjhWkE6FZ9Fb4hPC2E1EpQ",
  "key33": "Kmrw1jVefw3vq2S8wQPXP2a3gmmVcMyHpepUTFDzenBS5YGkzjnzNSH91xCXALn6zyAMC5PrGijFmNjNV9VVqny",
  "key34": "oEwPAjb6Fx3Q8Q8AN9oi1Nxh4fSCtUH7oTtTiCoBqVzEBtwy5hnpxKcN2uN91rcNtgyJvGpCBrf7SebVi2U6CQC",
  "key35": "3QiFfu25mN3qAPjXLPAoReWZGEofDQSm8xMobJ9Fw8YWeUo9CwH4YfbuZ3hphi9DgThZVATBKTUFrDcnDWif8D9v",
  "key36": "5L3jR1PL83vwtieaVcU2Ga3Mq9RMyazWiUKmNAncqJPeQYwME3rcMhNHQFd2CM8NRFWoPzFfhfRhgXoVQ4BaPzwP",
  "key37": "2pRxrtSqQU2gMq9npbr7Ed9VGGNFkwHTvFhMzj1p6RGyjyq5g2jdVAgmyYUZiSVdAjGfcy5dJKSjFKLGxX2gjiY5",
  "key38": "27XTv9YicfgNPgkv5Ji7kqVoczani5GujtgrNzQKd1ChQviUqW8WckeRw65hLFnoX2pPJBZSBsKC27qzq93M4vpa",
  "key39": "WR3dZsDy8QQF3ksNATa8e6QLbBNB2eqsLCn9aEY68aiKrLh1pAZWBJmCdeBsB3p3b76fYTEhAuq1zHEyiED5sbR",
  "key40": "4YpGzcW475G1TAVV25RdFbPpoVEtJepcUMTFhb2Znya4jbsGvccry71e7TsAwQPXbmbPy7tLmrvnSZoNehrBmeUg",
  "key41": "2RDwwQo4Ra4wH4dZ7GRMnrxBiNpLRxnmNvtSeiDCTQqJnVq6caM8AL5pgqyhKY8sByVPqsvQX4BYCaHVB3FUWoUP",
  "key42": "45kXSJkP1ABAsZWKqhND9ghMcmHX8EAD5owM19a4xPPfUSSCMwLifJKH6QybW4wfYRNLh65GvLoQSZ9BCeWpjLWZ",
  "key43": "RjxCu1PD2GZd1FyKJRpRD57w4VyUVaT18bjBZy4fQMHdHNMtEH7YZusPQmziHqGxRRoaGL37Gm2KyFgQ2EWbitt",
  "key44": "2N3tntTZm6hkAtLC9c7x1VNqGe9dCqnUnU7kiuXa9vBXy3QM2eWChihM1YR81sKpGt4xELUsdEgcifzWmPsP5ysf"
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
