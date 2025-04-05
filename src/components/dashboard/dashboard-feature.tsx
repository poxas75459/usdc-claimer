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
    "3MkVTjfijQ7NcPGgwkbTyikT2jSs1GAPfWL7uREZUZzjnC4gu6wGRNKmmXdYr75uszLbhto5asyEkMr88M7w5ELq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zikd4NMF9Njx9RTg6HKEULHGi6j94WopekX61D6Qw3XPbxUPDEsYdLuSvmYT9EGR8ZZSM5oi9gyWd9iahvEsKCt",
  "key1": "4Ez2cYwwLQPaNJmhUTtCwQH7T3pGZT318dQmhHJCCDdnwVE4jVVjKS2wt9yW7LVCx4caGSJtVmKJpDhgoKgSKiN9",
  "key2": "2mwqyniRacJYeHYzf8Q9zorXHH9hVMLDkaCQVRhKhUiiNVd6zrY32rLgTD35BrhpoTcNCejmyg9sk6gSxrWAghp3",
  "key3": "2nsGKrrtwi4NyCyoy2qZC6s1oKEUmrJL9VjAyFfvErmu6e931Qqy972ACEpZFggFrsPVx87ZhUW2bs1VkkXxkurJ",
  "key4": "YMuBPNSpyZnBXFLc43nfxAit2GjGsexPNToa1nxhCpH4TFmFybSCs43dy1pVEyZ3NRtWCwrKBhg3BWP4XJnRFvd",
  "key5": "2P7FhHLa2fenxQ7TwAwtkQaG8iuKa7xTVTi1fanhrAxJQvKfzN9rtQoqM2Tp27TRQ6s5GMAke8894FhN9CKtNFmp",
  "key6": "3srCD4g3VrPJu8AbLwfDw7a9Px5pwDdq7BnQt3Ty3uY2og86uWnFMqyJ3MgKzmYE6kFBFxiPtSkrgxk9aJD4QBVC",
  "key7": "3H9in7K5knSq6zb291x3G8TFjrarJTSA5vtxiF3jgdiqYH7pzSfvBwohCHy14zghUkqaKKD5F2gchsHJknDT92He",
  "key8": "3egMGNDzSpTd9yNnF6nuhc6nYqn1eEATvj4EDyGddCy7iPrVDKdML3iddggjpzzUKn8xws8RaeNvpKZDhLRQUKfe",
  "key9": "5na4c1kniqLpR87YvJcE2hrJ8n2UaYWRYGCbzT3C4tE1rW2s4r3xeqMuFnqmMgqiPWVQ3NvK9SSvya51StfHS4Uy",
  "key10": "37DeSZAULN3YTqd9jueimtaHb1wJaJkNBGjEMTvfk9Z6bYrfq4UHWWFDZua9XEyBQaG6BfarieMwA2vEiKgFiqQ8",
  "key11": "4tgUB95ijuaRktx5FfbRZQVNPCbTkJXfaFAL1sXBrheLEGnBo97sEoMCFVsempGhohc58ARryE6JyxiodtxAfc4Z",
  "key12": "3cPmkn7FVv31G99ESZKG1scPeLCb6JQdzQw8eWbQ86GWyuXaPHQRVFq8xM9xCLW3SfdnMXT9zNaXSiAbT7p4Tayo",
  "key13": "5Lse444HUwzRMnBqQLBzMBJaUyYj5cpvj9qrbet3fsrRHYPhmV2PirYHNXg9FG2mBRSgoP5G8KfnSVc4kFRdFdP8",
  "key14": "5yeZwnsb5GN8Sf4yRxLZTUfgepeeRCyqfeirw8Kxpo3kwH54pC9tNzXLcSMJC8j7DhWzpkFmNKpYrGKnBfqLrKEf",
  "key15": "4C52BQmVutKNwsUMT5Fy3Cxx36vGWqvREFpdu7XsRPyJ1FcbSTD2kHbK1BHqQZq3eCaR7jhn2cEELyNiDwDX8WD3",
  "key16": "3WyByifFshCnjxqQf2eg2AppxbZUz93KDhEGgFe7cFFodXutfp3AR1MRXEnt2Dt4GYsetMxGycZay3iw7kNhsMUx",
  "key17": "4Djowx6t9kC5nRFJMDWXawjnAJLihn4tSvS3sq8B6KP4zTuH5PcxfHwRsmmeBV56maRXDmrErA3ckckjBnNnyDAX",
  "key18": "3ofRpLu2aMJvfEVGVpDdsuuj5NJqncfSVmHMn1TBCqDDrjp3jnS6cDQPUghe3jpqQR6bMq2KCT3qaodbKq8744jN",
  "key19": "4iYvKi2QhBTxDB2FfZQLjCqb9zBY4yuzaQje7uELNx6XBQNiwFimwUcoLhA3z56PQZrc5KjVdXDVya4Javb8hS58",
  "key20": "3pqvt7fBZzDCR8hB9Jnebp7cSbPx74L7KPQwUaWA3JNK44VH1LUjJdzeS2jJsUwEfQMtoJubgLzCF7W11Bj7Y4jw",
  "key21": "tuGpewNKT75LZfYF7Gt3VFgkGzsXaMDoFdrff1uo2xGmx6Km6zPazKgpTvJLpvVooTmpQsECzae57uxMCkogKcv",
  "key22": "4JUqeRdPufS22JZRaBErFH6j1moe5CngrCqayDB49pr3f2uZkrLCbKXMTBNvYLnxHe92neBnMjXSYPWBqmsGbqx5",
  "key23": "4jrsQtebGG4Mmq3ShkeN3FmCcMCPiRxqyGXqLzZtzofRUrGLDstYCZrj5NSzR2jCDFFYtSseNCu1an1qqYLKyWuF",
  "key24": "nYGCYbNJSxvhAbUf8U8si5EBWRjvonBFLxhTUV3Y5NkZy42DAfUdNmNTPoVamRefUGoEfEpZkKFzBkUx9i2ASmi",
  "key25": "4UfK5VrPGSbVNLabjAG2VEohR62qK7136EmGrLkcRwRAVQY4zTuZbmwNchEX49r1brE9L5KHtv6J2cdeExou9L1a",
  "key26": "5CFa9zAYWY28ejymQPq8SeKnstoJbnwvSRTrqwZH1FjVr6z6zJEHBC9WGgwKvfpdE7s5D9v3X4hKvUDKSqPyTNNA",
  "key27": "2zJnRvnjpYg1tRczNw113aXRiU5LFYaWUP3J2AEUFmcFX2XCCfkx9JxkG6Cxw5WaatQML2P274GfSnqoskXHqc8V",
  "key28": "5TyFV6miSehrX7pf4B6ixj29bhx4zwEoV95ZnRMyxzRMXk4hwRijeYhQGiNFW1obGSdubMnuyv4mbmiHviQgRDLY",
  "key29": "5UC58aVX2Gk8D5cMVGY4FyfuL3v1tU14Z8F93Bw3cKqyR3KTZ8io3V238wTX6gbdvixj9UX1bpkjBzUmykt9ZMJ9",
  "key30": "4X3sBtYb8GwBpu1tAYhzNgVxW33sRCUia7JXkj3r9Lhff49XRfUP4Puxkug9LSJstAp2qSDk12PY4kJXDRRV17AL",
  "key31": "2FZ6e9RiS1uT4C7c6mUmo5e43AdWoPbEj5c2aTkUChMVgMS3WgXYu4XAVtN6mBWkaAK1sJbY8gnFZ2YYGKX1JsnH",
  "key32": "3AtY8vQRSbyi7VMHaEcHprN7YoJ6s1DGEBj8n4TwkgEKNCHpcz3HfFz9KXjvkcJ2MBwurz6iEUrbG48PmuJSXVUh",
  "key33": "2gVJsNzn2CapWnkaAnhwATNV1v3pgyj4jvjBsCP1ZiizRhU7ihyj5ByeVvzxomPuGyYMKxBR5Vsn6wjJeWePTmVq",
  "key34": "2huLdDmcntLjsPe9f7xpJxWgZMgYhBAoJd7NfPXZEk6e1zCbffsZ1j7TaPq5F6eYB2TDjih8QaP3Ch1kMo1r3hn1",
  "key35": "23wKsSUqjidZasxPaKBQuxk5PgaQcHq12qDr7bujRdCo4mmHvcrLF1abKqMfUFYa3FYvRqY7gciS626JgCJhSMwo",
  "key36": "Su1yS3TJXib8Wcf1Gtnfw1rm8xtRTqUfG4bkx4vnYnwFjgqFvfgpVtGSW7D38HbbDakJY52hPgMixrS5mPoVLN9",
  "key37": "48pJ8PEDVAuyBZMn3cgqkLdcemJPrQ3TnWcELyjwsYuH2eNyVuateNvxzcKssQh8ajRqChrHpmQD8QhWfSqyUVc1",
  "key38": "4YDAA5g8zcWHsm76CJ68FrhmjyzKozcLUgqDbExzfTL7jc1x4wY6ud8R8mp4pvZH93tPxM5EtLYu99DxfLTfYpWY",
  "key39": "48GQ8sdZ5ea8FNwaS9JCtmJRLQsTbRmm1pG8Q1j8YMtMjCXQTojcwLsjbrFAobBgVFRo3mohFtuC5Q1tdwBDvnBu",
  "key40": "4UfzPEdT5faN3xNJ89d8Hpmx5oDDdutrNeAhTcYK7YPicg6u6aBDGfhMUD4sattYhrvCX2HUhgKcuwv3uuPZVgDy"
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
