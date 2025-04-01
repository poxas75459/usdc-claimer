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
    "2zUcKkvgP7umazsNqXSmDxC7xKkrpF6YEddo7nLPtHuc9TRLAvFYt8JH8pQeTJPciFsJ9acafPXQ8j3SRdTv6vu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X2qCffkKkJSvB2nuK2tUzAKV5a2PWqWQauf5xpCwr5skdpuqBFjbANxNCpfADc6bqoCauPaxrTihXMkF4FtxKpL",
  "key1": "3QX3rmTaVRk7eLAmedsJVSjNoCzA2gLMdP3vt9aLLMxJkZnZ6z2Sn39yp5w7XaAgWN3J7JZ28hNTKM7hXPe1j6dJ",
  "key2": "5U9j3VzcGztt5Lt48sbsGBAsGUxKWywFPJkPop691Kdre1PNCankMZFZFJ6rrS8cVvyYX9UJ1z5JGwwzWDewwRkh",
  "key3": "b8UkHSNAgdUEMgDmgPqMZAW1dFX8fp2H6kKfJKTBWnEiz285K86xLa3iqzgXuqfnj1wShtGk6AhVseEms3XbYJX",
  "key4": "5dnoLzJotFaffot8v1DP2fB91qiPkK5zyTttUsnK465PvQbkquxhiNjjnbJZtKNpq7S7VKqsJEaRvsvg4ob3Q5xV",
  "key5": "21te8wSg1E5m9Rs8n41hZvuFY4baC2KiG3ZrBt8Q5erVxYFtr5oCyh1i3iFZzftNRdhVkKwp5KXpujVfFnTuDsq2",
  "key6": "i9z9i3PXdXhzxoj4TzAzshaBCJ9b1GoazznrbQTPuy4iyZ1JfivN2wvAWAeqAgPCoyA2rTgMfMxSTbVks5U2whX",
  "key7": "nWkd4qs2r7XX3jMx2chku23SQ3ZxrKxgyBhosu4fRfiz7N7M7EYT6dXBmBmVSibNApbZPzirBSCr1aG9BbB2jQG",
  "key8": "46TN6YYLVbHuLYKuobo73s781tDSAsbdJLCirfEvfC9bPc3RZ2B7Ph55mHnvKWQiUcVKnELQ6iAcrSjNzxafqTij",
  "key9": "trquvDrKyXQhd4CeEjiHYZ1YP5rf9krcv3jNw32qgYDVhAPPuyJZoyjQB3z9PpopQ1dXueFb51jLHG2ELCBB2R6",
  "key10": "3Jcj886n7j5bre8zpTjqApHPFoxvhsrGz8vrVVFsiySEa6VBdJZap9n8EcJrRD6qrSKu9ssY4eFXpCYCiMG1sheq",
  "key11": "DTYobgBSK6PxVXpxEqDrFEbX2vL8tb2t2CKUKLZLHbL8iqVW7uDXHhNrLCP1TYxUca5u1uQTj3zMXWxeSvCoLAc",
  "key12": "5N3aS1Mw6UkwZ8FhTVrRUm3WeygtAyEbroRGjgBFugitq5QJQKkS3r9pWfjMZaPhqD8aN4Bi54SQpJK3EbcdiFNA",
  "key13": "4kzZW72hNVWZFGvBLnj5x3vnHwjkPGXrQ8bMVF2FhdaPbDN5CujiNEx8NageGvCgeKi1EFPP4HLQ295w3P1jkYaF",
  "key14": "2gVi7K8JUs4HvpVv5z69WMc33TF7r5Uunqyd5L2phtAEY6XvJzWHCJDEvJVy32hzpwT5TXCfbepBJndHzWgxwVbq",
  "key15": "3PDm1ccVXtrUUWYuYYqSvTNX1wS3sWBZWtGiT2MKRLJ5dBgrTcj8nkbgAEAD7m4dbffsqVgFseaG2kAD5zor33DL",
  "key16": "61PFVJKYce8BNyoHDJhcADKNcGBVSruE8EgZ41USeM3HKmRmj4oZLGU8qLhZMYSgi7yN82476GFR91dLB9AKTbx7",
  "key17": "4Dwg3Wmm1Dbpx8CtLA85MVTdGSiBYWZfuhv12P1V5APeMe4yzZo1ShZxPKMM5TA4FWS9Bt3RX7q2W4vWX5ZjqfDY",
  "key18": "28pTNfn1WkRMKwjYz396rsPV1PtkrQZAVakjDzJwUV4SuAhrXhsJq1baSMeJT3qXgVbbG5FwbdTvXdnKmsY4F5B5",
  "key19": "22kMYHNWHokxHFy8HU61Un4c4hMb7e2TyqKquby16i6is2M3pbSc8uYZ7gbRtvqafsCsB6SWX9rN4w9tFBBYSqNr",
  "key20": "2TnPfHvnjme94xcbGYEQ6RUT4UsnthUbDzhppdnrEzDLMkAue7pGAkmzu3TmhGk4wndJEzVc8ATmtYdCxAreTt7P",
  "key21": "48WQ2xUgrmADXg1oejD3wQrm4n38G4k2WHXfswpghoY3BPc4QRNRkYft2hEguk5SVZKMvgh6nkMc7ZbtdqHfDV1U",
  "key22": "46mos4H2En7rXCJSyiFgTA2K1v1jnMf6gW6hX6BazXp2B2iRGRyEzcZXpNyJ5yEUDiKogYNPcYF324V2hXC4BrHn",
  "key23": "3tHZa7BGjwaRZG7R2sz2RKdzaEda6ttxG6ZkTFkeoiQDjNHNEAQXon2GDzaodrX6ViCyf8D1PUtKgtiVD11iN4UC",
  "key24": "3wyqsfK3nbBnHB3aYtCzQ5K71jvc14YkVRWU2py9Qf6g63Y9SPR8F7cAqUFppBkGcoUVzNXUCkeQHqnagq9HMAmB",
  "key25": "3YuW4Ue3dzzjBkXCbuoaNZdmjA19bbJV3tV2s5MmGkHp9vGqeDH5e5mjUXN8RfY3vRX9N6Q2Gue4L9HjztaMiHME",
  "key26": "4tdGR7YS55SRp4xR73TsWW7FdrUSZojJsCnjg9Lph6hQ3UeimUdTsunXtabCWjpfwU2FSoL8U9U4PJya1pptiT5h",
  "key27": "3upr86quQ1ZfYkT83ywFgchtE37XDFgh2iJX7A7WJha1q4CQT8915auuCNRzsAeLG7kA2vXLSqJpxd6FmVDiafRX",
  "key28": "5B81njvhTokBNL5bHw6LZoz9Um9BWdSbQVmqyAovodJHb1UpCrY93S5ewyPEqLuFpwaNtLWChFoGXdSzZD81u61m",
  "key29": "5joUVR64c2pm9d7hFBZF9Sg19ijbUB5mPEsuSaRtEx6x4xWKHhwb7iGBrb8k3Ndq5tVSbxr1jM5qC78trxhJB2U9",
  "key30": "3CehZ7s9etZo9aqxDgofqPhzCXwbbVcRKErB2YSCpRLaMK9zvGQc2ApT6M3pSedmM3J4SmkkszNYUSW5Wyn1ZNpN",
  "key31": "2bHRZLrY9Q1jvtYVHUMjY5UgzNn8GnERRBRtr6QRkSmdLXs1MJbmQDqcY82jkkYY9KFuU3DtgpF29dyWv7abDgQL",
  "key32": "3oshWCwc7HKQrBe536njruqn19xsMEyd4bSWsDUAU45vDAW9jDj6rgdmgXr9dkafk85rXydTQVAvwCUcraF2QViw",
  "key33": "nK433jnUDSoz2Spu9q95N9ugGu7eJ4wYezRhGtBcJRopXBToLRzKYaBSc8cmxi427dJLd24TnbE8kCqgUvuG7yp",
  "key34": "Jtz8XU4SSooSiBp9xA54hBzpA1kUvGkLw6k7LjDfayuV6HwaErjXg7bwrJ87jASgEwgsqgVbYDPbsX6iNn8dCwa",
  "key35": "3DYe73rX1FhJppqmTqzceuCnKuFKfwASNMvr8WeaHjqVVbT9SZBKtirnauobZbT5PCwB2t4L7uWwEF78F9wo1eLq",
  "key36": "3RFRy8C2VbMGLrKcJzkv7Utu5Z6PV76tWdvvLA2vT54K8F31CehrVNJBKuMFLonwTjWJe9qKMPUYakt9N9KP6GXr"
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
