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
    "5F3dxpXmwnvNRhD34e6Zt3pJi5Cr1wWX51jQXqJ2w1uSJkDvdTrYGGFv9G9csQU6BkxitVCcRKqfc3AzD1VpBkZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAPLC9ucbHU1ChrYV1AiWNkqQ8mpAeRMMLefZynUCwMwoZkDAN9XAy6hYY2aiexfhLXhRmDThaFGKmawA79UNv8",
  "key1": "5NGQhmGKqHvGS7fT1KcwPvZ9cAZ67tFoU5yLZ8aMmcVEKScuSsJwHvCj3ukNv2MMJpqLnrhY6ZV56G6WthLzoBJ3",
  "key2": "2n9x31NYYv2VXEycM8WqNbXXpu2Lzh4J1EBLprrvxkJdhMkcvQNgHRDLkfwk1LfXUWpd9it7ZU2sGjkbSCC4L9TN",
  "key3": "66KNVFKkLT6FBYjbRnAsn6yGRewTmC8s2FCsiWFxLvq6g5VTbWPKW3T5gmwMhDLi2E51TnLeft2eL2sZvB51C8rs",
  "key4": "gPrsZu9uKB7gGnFN6PA3CQzrxJvHBPsnXiTSAeGosbK9djYtrtMjbmpyVYvwypES2NWQtaXchB7GxC8nn15bpLN",
  "key5": "3QqQyEKmAAofnTSrsr8SxyNWnpvRgT93NaeachmevjH1Fbfu1piCsFcA48RrZYBe7fX1pyS6ejjk2jAEKoW72uBV",
  "key6": "4mEbw8efhGZAqiEyFK5G2U51FUW7y7VVHZ7qBscMGfTYeA2sCU477AjazjxiLthRzod9r3bJDHVG4FWz3JJiyHtG",
  "key7": "24pwjiLoShgpydc7LC2fk5KmUPix1ZXFtXGovBVmwS5Fw1LjC7Jo15uD3sTUChB5FhCQira5zzUgQxV1HVXqC1EE",
  "key8": "3H1wM49AwnLuGvz1qwregyngp1RZambzVVjJWGB2QUicjn33M9yUgM8YSTJgujxXJkZhikhq3yo5Eo1kK7uoKTXA",
  "key9": "4rhXD34aNi8NFsdNfH7ZJPPhsNiQNpPqLVS9Mh4Fzbm155P3ecRyW5YjXdFjGdXL7VmfBXhpcf7C9xyRPQxaANrw",
  "key10": "4SnHDcoXmcDuAVayTuCT7YX31djMXKU3xNAKoyavHqfS814Dg1yL3ydh2mBPQQLn5HLnaKpyvQDLPm59GvzwKbje",
  "key11": "UFXFDQLwfsTXmGt55Rq54WMad2a2BMajKsBzHWxMZXc6YeA91nPrgtKTCjgztUZusXT2A614HpLafTf3NczsBkm",
  "key12": "52dQQwPTQs5XY4A2MkHSPHCHc5A4WGQxkamKZ1cTMM6Fyb1GJSNTe1CsMT1AZUWbCZL139d1ZeVgXPQf4wU9epvM",
  "key13": "2qDZ6kw5iXTUb8WXcEGwYe3weFaSbXEX2rBW8LbHwm6Us4Vyz1DV8GhxA6CHrQqDLGqGoEJrGXDSxhGHi7GXYfBm",
  "key14": "j6856ktXUjUks1bVvGC6A4msBQhTRrhhk5HqPpKv4abw2BPEWVJdiPTWgpnagzC8JM9qJsGFogspE2CMz8nVr21",
  "key15": "41NhD9ogpCBLw5wKDMrS6gZ6yR6Uv4Ma3rDJMRjyXJGesfPf841uMhnLi7J5neAXV45zPseM6gBrPt1D2xQQuZvh",
  "key16": "uxxXCT7egcCHENugSdswAhHSgsvQ7sJRdjQRGnXs1QSNxunBr6EFZr96EYLzSyb1YtgiAz8zNnKoWHW7raJMnVz",
  "key17": "4RVgMZbZGSsNYsSgd77RCU9robKceisgH4DptHACmmWFcaXNDhZdAY5QPdVd9nFdHRGdTrRfipEjPW2ceev14SUs",
  "key18": "e26bQMXrFjFGb86StiQNZwLhGYArZZMmJAAVq3E8dq8LUHjBcGDQ6WLZwRo8gY6oFvkqWrNJfUfsGWW2A6RgNtz",
  "key19": "43q2ZiKiQtuL8EMHRnkNVuQk3EPfj4cGhHE94eaXJX6jmp9u2qBUKe4NkLcrMD2evPFXE4chsm1QPkEqimGWyZqs",
  "key20": "39w6fdMJRUcM81CBVTTXYSsMj2193kCn8PVLTCB7RkPo3iWPVKk9Jgy9k9hzDkKMRBDHYaWkb9MpnLNN6mTxVYCY",
  "key21": "4CQGpZQw5QamVP7C5Ly7ZVUUS6XfKNyTFyaLyZyUVFc8B7UiUurKsBDW9DCF2tb6D2kJTUZfCCqtscgz72X748nX",
  "key22": "4gpMAYRdnXsKp7DS3AdTKsfJnNiDomXSFkTUKY1maW579GePKCMq6Bf2h5Y92aRfhnJZ6MMhTmXQMGcT4RT1Hho8",
  "key23": "2qcgMkpqGkTAh2XP4bqexbq3ubKR7grwvMkLvnLN6mGnwUWCBMs4efvPxymhtgLMDD9mnwwymVjfJhDsJwghyyWt",
  "key24": "5QfJrWUs4jNeG9JPtCySRMBhtoHguEvhtQo2DwLq4fjEbZQuLpdZZJNBhhvwdMWRwV9zgkHxFfvgdhz3ftE8b6mR",
  "key25": "2Uzpofbm3Zqq5hU19kkmuYabSwQTukAMtioZLUeuXtPjHTitNQ6n5ZomARuBGmRQFradwYNLzUKQKbHTYekvyisH",
  "key26": "3Uen4JsoqeURz6i6FrVpy5VMphNdptyh77eC4cvWFpNwt1UxKFbW7ZmUHYUPBUSF56rYVaKbj6VTEMfvGmW7DGNo",
  "key27": "651J47Z7yHYhvEHqsZFUPMtKbV621tE85puKGfFq4yQHBh8ApS6iVuP5nYZjhg7EkMnQBHQ9KefrCtovvTXA5o3t",
  "key28": "4VRWT9UTHvokUcjACsXccU6SLLkrSASMgsJxLd6pLUgbj1SLjyTAfTbGrV1HWvsackjSJAFdqEWyULPGwgKaT94o",
  "key29": "3DPodSkaVBRgUUCxT1byyVkFaFQ6NfHTAMFKh4L7YrWhJXncT7UL2t9JyCo7osibBvBx1JNoPiC7Wmup1vqXH4hA",
  "key30": "aoBt6yaPRLiDnk6Hi98Br9bD1vXdTbSQZoNCjoWVrhacfY8RVmroZL3hazPuxBqF4hgh5c7zC3auQNrZ1E2ChZW",
  "key31": "3YtLqatLqCA2mpxQEjBrFTFMBNn6j2zx4pEgq4BVEfjdnTzT8vKJiXZd8d5H4ZSiz8466Xyg6fW2cfXGtAovC4CF",
  "key32": "DyyTf3MLzsyNQxzk7JKEbdv861xD1tGCdC61GRnEgp4emWD9xS7zwCKhG7PN8wenyouraduUXdVJypDsgxRJpxU",
  "key33": "3dMgKJA3VGxPfw2rWuXMrpq6oZ4CEYNfoZaxXMxWftAEt5pihyRttB972q2tNZmfPv2FjGXVQJLwtQtyEceovUFD",
  "key34": "4BebQiQab5UrkcFgadSDJbKPpUSVYJEx1sQijSu3n4Tbb2gq7Yxmi8M2FLNUuJRdZffmuv5jtZSUEdrBKU5AejpL",
  "key35": "65hTHgDJ1pJNWjiiEyptGRwkdmfBjTcTULuMCNFmGxeSXL2Fqk248b9fFnHcicq16jMtcTVgbBPJxN4xcdxn9AWX",
  "key36": "4QZkt1VL86zVf8ZMD7ALjkqse1scd35tiULTg4ycp2fefVdKB48nDUHvECP4uqFaQZxneW9c5C6yoUjTt3EXMjZY",
  "key37": "2AyJtcZH4ZXhAs5jUn615xUdwjYebdhtFGS1cfaf7x8sTA9sgVrNAvYT1W3NWFpnU18eBCWKXw3oFfjHmhYZBCuy",
  "key38": "3oPpqr56JqJ923P2Qjr8Mvspb7ERnnd81dXAuzv8h7ae3HqSVXr1xxziEr2XURQS9Ux53WdHG4Gix9Vh8TUcnF4G",
  "key39": "4Bcix3fbgPantyEKobBfvuAkBmacNcUYP9cEC5AhapkkwRCMCHaMu5x5WcEdFuCZNi3ouuyfZTzZapmry5ByFCFP"
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
