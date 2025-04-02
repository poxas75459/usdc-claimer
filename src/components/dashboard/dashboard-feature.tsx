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
    "4uM42Abxpht179A1FNuNaD4aaAWv7dyw6LG8zRLp2awM48kAuXJSabR5z35gssvppcYRidTMVTxyJXHNFvyE5zck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P3LLLwvzhwWs4Qs9FX1spcSTnv8pkbWS3yXNfcZjZQucjjxB3fnzNZviJPBXwMNKXtZ28wLq8xzwP9gggawe7k6",
  "key1": "2fZwAS8yfZaF2xRr6cwtqTkEJetnnb2f6arPWfAfMp5KhvnKjthB5X2aDtw3vEJJeVgAAcuk3ctFQ2CqxBHheoPh",
  "key2": "5N5CmGYj4M8CTyL8JJCjfd8tpsMrzd2tgHj6qZEz3EwserswTjPqnV2zUWSpDFCy7sWA6yLaccRN49X5P6T959FF",
  "key3": "4Zdk4Y1PNntR2UsXv4hpXPsJ5NafQJMcVuyoqWqc6tYjQtccR6nq6yWxAVcJdnjeLZFzMq53xVZeubzjro6t8LHc",
  "key4": "4KczMLQy2vHUDZvmTJvkN5GfvFV8VRbECHNWkeZC95abvYvm9WqgCpeQUiMwj4kQ83sLNMx354SRvdnkfypK1DaD",
  "key5": "ufSUyp7ZLGo8zFJSKkjXgxdfW5iHNLkJnQk91W6dN2aMwMsv4d48ekcnTvyzF7X4Rs3Xd3X3PRQqMFbgzmuFQ8d",
  "key6": "2YGWdDGKjnGHezpXWyRKWFmECmQ9Q8SrYTv6uxeLgVNk9iJiE4TBS84KYE8HhpQmWaEP5j2UEk7YzpYka4NZzBZW",
  "key7": "29gSAVFYueu3kWWjkhvD6wa721hNjSh84M1qqWJ7D54GTSD3TKajHyd4eJd5WbvGQxw5uuBpH8qN4mp9VjXLixzX",
  "key8": "3xe2M8d2S9HVckkFq3kZoFwkCbk9hMveQjUhpnLdDwP3v81LKvkfM6poQGfrj7hermXMp61SQVJj2vR2Wd4CLDHV",
  "key9": "LMtbidhbAWri6hEHKUVLQJ7mdW5MuAVs1sDqzHoUgUGC7S8wqmPkfe8JfTC8ugzzpQW64a7SHwGVBrmcrMUEAtG",
  "key10": "3Et6Y1C5JxJvJ3GBaTP6gSVNetzbxgzFCEZPvQ1nTXh1TLri8PeVqqy8v2E7wSrxKqL4mhNpKdVxHdcnkyvohmjs",
  "key11": "6Vp1p9US7oMtaKtQZpZgatDyz2r5UmFnk6G2tRn8ZjydeJaanZp6jm21FtggzA61HbArLxREmS8AVEPsEFjwL6o",
  "key12": "2CqSvzoqFcYdgZbUyveowa2WA6e72EywH5W7txCkkp9CEHcp9UBycez4Veq7xznvHFdnsNEF6hKjegnMpEPoG8wZ",
  "key13": "2hZn2jFHsE63hUfGGKwXXhstXRxxhPbfMD53T2PA93uLNZLS1ycebshZhy3citvdcaYVt6LpLwrL39EdYcDVXrpC",
  "key14": "4PSAHi2ZTmCKpDrZ4rwGaCXT7VngnD5uTK8ngERUPJfxNCee93WVopCbdm239M9F3r2Jzg1QvX2eg2uMsvnn6fwd",
  "key15": "41UugVKd8FynrAXD1SUWRZzCS16TV23QAVZfGzGJtFHwQ1zWr43Cqf9mYr3aVZRyLLrtopMhaRMEMJjrtFzj6g3j",
  "key16": "2e7imbwHvwoWTeYSPW3bsAE4pzgMKcShTE45VvUZMzWpHqrdSgiJMs6DW2sKGf9xXcxJcaybCEqMuHKjoGXGa8UM",
  "key17": "MTJM7nL2C2ohCjLYV3zvMFCBETrQ59sN1bpLNqwVRvQBYxERUYyDAZvYfNvGk1MJ72HCqnNXmM1uvF9fM655KdX",
  "key18": "2zE2hcJ9FQhn1RQcqSg2zy7VV6vMEWEWMJif4aDCVzgd4PhXVKZejh7yG7sdcBhrgkP5CNRU6H3GkxzYAYXzb8FS",
  "key19": "53HEFHLr4YGpaHKX2YZjZSfpJpFJCyfyAkbNWifxShptZ8jS5jhKTAs1ASgxxwB5gUqwbDqk1v7aU9HVwvLe51J5",
  "key20": "2peDgFeQM9A3uT23Tcchq6R87sYrbnBpyrbwzU48R4yTJTSQTv2smqH91p4cePSUVGPxKTo9KGqM1Dwxih2SWJnS",
  "key21": "54c9HPcmKruSTBYKNEQ5YDxDhQodHyj2vobKEZPtHkMEAEyvWdLYcSjUFfseGo3scVzDQquWq796sRWjyhmysLk8",
  "key22": "67puKNvpBp3i9ZMJjgwWbC3JuHbhti2gStRFn1RDSS6zS8VxLFimXGq9s5EG7m58aHH7GtgLah4BqpNkTnFQM6qN",
  "key23": "qz3x2dVLirws2tF8YWqidnv9sxXdjpp1ueyoEZndzmWxYvJUhK6SRDmYUnsRd2yNoVMiTJyFDNUSWPWi7uT5AH4",
  "key24": "24ZRxXvFRFMx8sg9Yr3niYjumuTRRYC8PMVDgSnNH8SiUf7B3hNo5HRTuZdfxfGeL55LWnobxnrKM2G5RdAftnsZ",
  "key25": "5WYCWvUGbieNZeUeSehpsSinCnKbzy3F93XYThJjPszumx87UQR5Rxv65pSYnQjZVpYu2vQZpvsuJ32AaoFLND6y",
  "key26": "3dri8qvUHvA6pEMd9gi4Jx1HCSX2HzzQNo2Vm6REGLs1n4HUvbyoimhNMbsQR3fKGPmFdu2Ezkuv8P4ckCpigzYG",
  "key27": "3H8NSHMRCGHr4VyA5Rh8We9QmUa4ZoChJLbYqNLamexKdDAWn41nhghG2yKURN8QL8AAoJij5eDDBAe4rkzJquyq",
  "key28": "WrjwhBgiKUV7zHFzhYpaMCo7YAHtXohDfQn9bYhoZYm6mRM5QaJiaEg7EBKTGRdEgRgsqoyZPMPzDvN98pjSmD4",
  "key29": "61AEXQJMKMDjN4vMEbKyD4xTBGdCyLxb4z47urge81JoV3qAvXWDtNd46K5XFrAp1U5bgWHM8rMgyDFFRs47cwm6",
  "key30": "4sUHAp9BQKxQYGqgc341hR9T98syhhPhbAPnNgUENPkS8uGxBVnLSss9oZ6zn6xJ749nK8YWrrVp7o5GoyifKx45",
  "key31": "3m7tEW5oRB34zq2TAMVebPPwPM3cchmQMRXCjDShwhLhAGTfy9JLcZS5Ubv5rQ4E7k1Z9s87jYcHLXFbdGM7SscA",
  "key32": "5hiUUiLTqUbq6GAQUGmVBFnYS18FqKBg4Wm4gnAjf8qBUheKWvQLxSntGz7b8usqY6pTik9wJou2MDzVcJe9hbYA",
  "key33": "5NEcgCmoq2aMB9yCKMa8HRdTMiPsdg2HmDmzBkaC9pghKgybJs9nWf5TjyU4VKkJRSugW1UuPK6KULXD2MJdwRae",
  "key34": "8hdEuFajAj4Q5Uxsd5TXLaY76u4BT9bR6R1uMe49whidDwYijQNBMJHwF1jwWj3ntuhamXZcrbKhgmLfCXxFBbE",
  "key35": "5bdpzEmXM45xKWWNvbcdqkCUsaNx3J1rkQ6LJwLxhJx5MfDXAHnhomZvVDbTHWTgyyirwcKrCHCzLQysr1TdB7LB",
  "key36": "Lfy4MVzrSsfZPvHuHnYC6vZ3PnJQ22GE52gam5EwbNtMRdZRvkP4SYeLVVQJQziidbj1sbXh7mBpwUE7WyDE5Nn",
  "key37": "2xpye88y7tR2WwXQrz4qE1uAAstUfNXgwcwvtMve9DJF8vp58SLFofirvmF4MgeQRHPpZTrHufznmvS6bUiBFpSW",
  "key38": "h8iRRzzgQyXXiEx7ML9s7smZjdfx8TQX92UMFGXNWnD1BpxbQJMRbmV9ZXDx89A9dZGAPLS26SZD4B9MMLK2Xh7",
  "key39": "5HV5BbgnQb9nYwzzWjsZa43c2dw642hfQci78THVFK7BkcmM12isTrE6kd8NcZ2xZc272NUxTTTTD7TVwjyQ6vQP",
  "key40": "5Tzm4ag8SZi78vkMSiXaiBQsMvZ6U725ysB4YVZFpdQNr6UgrmNUoVb4NrzowRQ7GM29Zrp6uAr3qEcpfV5GC2PD",
  "key41": "358oSMbSKL7JtVEoDTZLJTtY67ZoXTeCdyzHqaNxni6uZdQnZTbRY9AfK8SdrgUKqqVY39ecacXmDYw4GghYdoed",
  "key42": "2wwcjAXcSFm2buqEfu6MMgUwaB6NwVM1xmF4FH9UrQ4uuuSBz35v4v1WdMLQkKWe7wtNC1576J8hk4MedPnKDN7p"
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
