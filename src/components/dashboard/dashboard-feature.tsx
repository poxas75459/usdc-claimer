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
    "43RKhMXbqYfqDD11gKSP49gBFL1z8EJQ5uYJK5AwZXTubtKw3gnwmXigZ33HZAdEHXotXNPheQknXmaaQnE2EQ1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U5ZyfVp43URXpqDwdaLxGfBMGfCAgJaUguvDzJF2YRbAsyyDg2fWhSZ2F8aN1nQq255WFXoe1euzMwHpNRWPV96",
  "key1": "2tkYiuDpqwzoWZNBmazKgLVMr2fruz9vZJ5NhaDuCR23UEMKp5ZeJymCCdgVWJHBoRYLkew3kwdrX25QfLDREhg5",
  "key2": "2ZSLhZS9LDCoHtyiXhwrb9FF1mVgwEwFBnh7GtnLWZuX6VWPBw2a2dhBYQDxG6j1khTH2iFMXCmoXYxfEqCavSoZ",
  "key3": "3dfzyGAoPP4SYh1CZANsBerxnEmZt9XnzcRNsBVDyALj8bUcko62DCZ9io4nTTXxnwkvGCkzutAYc7ye4omy1D4F",
  "key4": "QRVaUr7nPiv5SzUdUzWyTtauQN7bmM6XtGLvVyCZGPTfiLSvCqCjQaksMNxGbkhDMXTjuCrgsHG45YynhHwq9tR",
  "key5": "55LZKsSBzHNGDJRfnY1JmSbtfASgjKmmPtVsgPrfqAmfTZspekVZ8Tj97KownWHgfgpCPkZKgBSFiHwWEK3uz63f",
  "key6": "5jdWobH4Vg4Sbej7XtAbd7A5BgHyog9VvGfiLBrHtUfdn6BRuWVY9EuQd9x3VZakg7foajdByyceHKG2jxwu74nD",
  "key7": "5PFKtprvF8nc1Ax5QomQ7GtAzsyZuRjmqULAbhqAJDbQnH2b6pMcR71zJ1ZpY6xAUetxaqyx367qUVYA6e9QhWtR",
  "key8": "3b8PTrLWYzZnznduyspAFwDJSj91VqqmpkNzj3s6MwdqCCbscgSv4RJC8o4vpMz3e7rMix9sTUCHhYthYeYBsDjq",
  "key9": "5na6fNMCB1SLHKYoNdKeuo3qPaUTLwgnbgn9xjyuPuQFKrbeCPaeVYRCidKgmnN2rJDRE9E7VEMGwPHM72DRYXDp",
  "key10": "3skri7T5YgxkuWsGpMJeWjBx5vHCvhyceKp6SgTWxiwy647Ek8zGvub3XdLfiFM35m8oFXknp7Ef8qr425snGq7V",
  "key11": "4unSCJQth64C5R8Fc26G4Fg4YB3XN3WebKHJ91QLpoqNNdxm7RnsH2abfusLkqkZdLmh15zSXDkGTU17YtnNzQrg",
  "key12": "5LKv8W4xT4DU8EpJk3PweUEn4setwqMZ5HhNEzCTZXgUrq7MB5fy61Yi7PziSVTK1vUsnjXn9uMpUHzdcz8gJGBb",
  "key13": "4g9PuSdtib47yCNUXwfH1aWgdvshMG6qojNcM9FuVw8h2V7D2NEpixEqSKj6nprEHVJn2pQ7fKnhr7xbQg5LAMuT",
  "key14": "4VcvoHGgud4FTJupV3tVDddqbujjEvWVHEXSTUwkPfQpewXZqwpfEiHNSREQVXt2u2GEANsgtjQBn97pDW1ZTs9P",
  "key15": "8tdKFbHPopwDZDe6qwvQsZAPwpshJ2TJPjoDenQ4AddaTwgbTueXNQt8UQRvnYz7dXgAZxXjYkJWJAgZoAXa8N5",
  "key16": "3pJNJduNt4drpmsv9eSRGxdCGb3QRye6UFgmGTwGm1LSr3ym7o4VbDBdunWWkHkUanypb5FC7a6erz14dpUWMFWY",
  "key17": "35mmxdMHWDngRorjiJSNe8RupqAQeBJHSj2dpMt8Gd3brpsqnMAfstco6brrVkKZvRVPqbRW81iPcUqZ63ATt4ku",
  "key18": "4Ph22LMZZAxfm4GJddYTkHdjtr5LKAuZAoqsV5vjkLjQAUDH8vewXUwgvhmtAqA4a1PLe4QLii2gEDxkqrahDu1d",
  "key19": "4q71tvyyijyH3vvvm3QYXQScVMD5VbhU4d42zLMrpyf8eWv6BMzcbhNetBQ3utiqVBKNq2NUxMGpvjM27PJeNGLk",
  "key20": "5z5sGNjLP9aveYRBbobC8dh52EVht8MoMFyWPbDx3fnniyzyS4vNVkSf77rE7C8wzYsF4qqfiutLjdXoKT763YRo",
  "key21": "5xrtMKdWxVSW6d5CbkjPN97hDaw8ewkD7fgbixmekBwnBEuSz6g7cMsUeALhLjdRLpJLZrK3hYEjUEVntkd6o2zf",
  "key22": "31P19ae38TTcW4C7ip4iQgBszrmUXuHR7V3XhcqGbRyYTnd3DLcLcMpkZ9pwPuyWffBLRhokgTLVWaf56icCEwXv",
  "key23": "2vkSK84FmR8E6jbMF8CMimkR4f5uWJm4p3U8PTEXftEYRbjh7J58Rxp3ZqNDSPUuEXzKs9u3DogN2Q4YntVsuYfs",
  "key24": "3mGHUHmwY4VNP3AHLtpSTWTQco4pardSUDHXmkTR3RuFZ7PUjacK6XQNM8ptoVRc7SrTbkf5VrWG4x1jULPjzJ8s",
  "key25": "596wEWvaQpjzocmcXddRR1zsyGXcnRGATZ9dtAy2VgDsVNzGnZPtajHbDDKyNhEWtfDan8RwCVHrC3wXW6TqRvnH",
  "key26": "4KuqLdWUVk4HhFdhY6w7Q153xNe51pLLzBfgP1MfioHXix1SAaPx7QZYnrNv6tiSbv9hTNnRBZjyApeUAoNWawd5",
  "key27": "5bE6XiwtkM7kqu8U3unXAW2JTbgN1u1ZUR8rnVHbpaQGUXiDvMY136xiW4ZdQDpGXFiihVGiHKy9MmJh1Vt28G9F",
  "key28": "49xW7zM6zvvKrx1PhYVwCCKnMTMzg9piWG8Eqog8FotzVrr9hFata5qhNsz6F1MgwiCWmZ5PnbBRouLC9UCgiJGP",
  "key29": "pLWCn3mQtNmqJRW4nxqNkzND57ReDph2tdzrptAJBJ1kcSVaBTbaSDP7ckxPxQ4bPNoZQn6H9MhRptXPtPgPYkF",
  "key30": "scCDGtSJycytLTVSVg9HNQw6GUDsh2kSdYBBFt39zi1ndBGhKsLPxWj351R3SQ77jSRYWtbxamtyp1PcAFi6jYj",
  "key31": "3Y32dBNKXgYQyVQ5PuWaKhmYgYju43ZrTzHRaFvY7nvDHQ7TS71pcy1Ni4bEp6WXR5RcAft6avuj8SM8Abcyf7sG",
  "key32": "4S6eT6wTMofE1ogxWZ6kkoYUY8MmYizF4WXPL7TibVfWUhqN3dTAeXc5iVGNBJ4rybZe8Gsf1Fck1QUuy2m7oz9G"
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
