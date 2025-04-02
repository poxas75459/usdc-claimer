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
    "VCoA3w9GGkqkdXHkSUcmtsWsVPg4oUhY6j286QaV1X8Ra8ktFXu4DrDAEsHzqSGbDAJX63pJVeGqNhfCAKxfjwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TZxp6bVNwiBgyxfTttukz1zugFRvKjaXj33mg2jLzFkSvyaD7rB4sfasXByuSJNiZArE9E4JReo3GhSWKRCBDwP",
  "key1": "btddLCJGY395VUbP8VMpR1wCgL9xd4Smt7MV3ZL52jNvGzM9TVFvQv4sippUy9uwDdqpP7M2KYrjEPBtj2SQLXy",
  "key2": "3u7QM2zTHC6zbAmVHJybcWD1GuYNbwHpbvGd4swUwK49biLrMBzTAnG2vXxoD12Ln8HjpCnDL3za8coFayEZqDbF",
  "key3": "2Pwrz1wHuuP2rbnp7xHTg3ghymweq86oi6TZnJvv51GC7ktv8iPaYpdUQQMVpDHCYxS8bGMTEitxKHdw9mukzcYq",
  "key4": "2cK9cDh41YTEtFF1spMD26aAu1ceGBYBV87kicPSW1EnNVua4KCAfgrsH3s7FwGbcmQ9NMPhbJjwg3EazHz7aYzu",
  "key5": "4y2S7J9FHF85W4eWVP149vZnZWRwzhwaTAAWzKMvv4udKnkENGiZT1Qw2nJRXbiVQD8zwYC9NsH6LPt9hYzFYTce",
  "key6": "3CTKxshhNVPuipXxnSQEYVYXMDDKjXtKTfPhFscKoDFzzmahm6Dhdi9Sio6xQR4ipFkQDzhAasnyk3f3aAj63hnD",
  "key7": "62vMVdV5Rg1TQmZRHR4xX2GjKcSPDkFK6Lny1Abnyz63HB8S8Kt7spZkJjyFzUA25qew1CSJ1z8mTNN8p2kZUqn8",
  "key8": "5ejANg4xZNhRMqHQ8XenXxfuHMK4q5zEVdjVL6Z7pyxbpRrzCoFo4SpbK2iPBhUJoNcKDa47aHFhHhrFERshdzWU",
  "key9": "2g1M9EqWDx2UxtJhUmPmMYtuGNVnWCZhXkxL7n9AfvC4MHnopJToTxBcc5HsZiUs3WwCnTetPpLFTd5ExdpNgg4z",
  "key10": "5t34voHE4qRSLaN8gCHUKXSerarjidX9yLBu7SVuRrv3FPAGKj2Av83DmkNefjrtCeNEMLdzmvJotNjGMw1AXnD9",
  "key11": "YbRnupevkFxZk7PVgRUCx18TSvJjxaC15NUdYRec2zuHAACBsJWGC6UDBQ9aCUMryMi6ajpJr3wPNqfPHnLU8Sk",
  "key12": "2NCPaDNa34f1neZfqAf3DD2RoiL9d1sQpzyPgxCKMgMdVnEvwrcs8Es88oUM9BUQgawMDhQvXagCicPDM29AhWVx",
  "key13": "3BPWavQgmip9t6Qw8ZmMvQmJC1W6eBiF2hcmjYjd1VWu1w8239J55xdMDHikgtLxvaPBmjDQ5sdkZMeBfrPZER4a",
  "key14": "2RSB4PaUBAF7XGi1q5KS2nBAaKWkKLXrmAtie4MURKroyZAsF715Qa2kyYxhFxAs2AqGKhCARiBAovtD6ryKtkde",
  "key15": "CenqEmPk9dU3j9jFAb9cKaewnxYvU3zF83681dqHjsEdd5W4Mhqpk5fBahMPeZF78yoVyf3njHxxMUBkUcvBA9Q",
  "key16": "8m6Bx1FChNhkMookRe93JqM7fpA6YXeK2PTwBRb4XjS7JPSj73ZU8c2v6BvNqN6AmRYKp1EbvjPmMNZ9Z3w82vP",
  "key17": "2pzcJSbY6Y359QSRQ9v2DUMZexv5uWuowQqdscHCGjbzwACYnZnAAGunJFGAAEepNdaTvVMFrPBZpqm1xjbV4GsS",
  "key18": "5kd5t78zokGX2jhXi1T554v5ZKmjiGh1rFEgEqzcLBjK1fw7KYq9LerfR8SVaGLgZsHwzxuKedXoNGrQAm9oPtW",
  "key19": "tJhZ9LH5K7uMH1iJ1ZAtxGDKo7zPrZrbnWqnVMkR4beADczWA51orzc3Li24C8bmmc3CMX6WDAKLKcAEGqvRe3Z",
  "key20": "zB7DjAgs3iqWQjsBH27XCfJPGfCiyLsw2RzxQsSEfsJR2W4cBpktvZPaHRwkVNGMUsDVhQToy5duz2DK19V7sho",
  "key21": "323qhRJXYR4Muety6eKL3bvGqxqZPG6sRiCFxdLnW9KG12M3kPBmw3vLyASgfKx1ppfor5mHfYS9BsXrRDb6zgXq",
  "key22": "4LQxws1BvVinaHk27fFf8Z7c522Dop4HL8QHuSvnhojE93xYNuYuLoFDQJP8tYBGsBKSuPSw8jQbX8SxTCJdRVbB",
  "key23": "5YUeGdKKn6iR78eF6ynssBUY8pFkZUysJRGZj1T4i25vqq7b8HGhu1nm7q5H157GLrpUDsdYM87zp4JbSxkx1nt5",
  "key24": "4DjwcTpDgUqcR5Z4xEjtaexDEXHQ2kt2hVPbR7iFQbXX4tdCr94ciaV7wEXMgayieC6PeXVhfU6JBTZQzMRDJ1av",
  "key25": "2b2VWUfqWHkekRXomz1Vxywyu2RDwnKVR81jPpbDHDe9Aipv85ca8UUhti9jpUDRbs1cZp6YuyCkFuGqW1sDKVXv",
  "key26": "63CwDvobFAzYwVW8WmjciQga7EuSiK43ZaDjiYEp6ShSVY3tJfm5QRFcWe7j9AX9FCzzELYGgrzU5AM1v2cfueqX",
  "key27": "25vRLyqsAYLmvZx6Lt9zm9yDkevh9BDav1LAsfbw1jJ97op2LCP1nU3xiyuuUZcEVsF3nQELY4bxXDU8Qvbf4AGc",
  "key28": "4xCbSTmiZnGfCK9WrkC88wN4CBTPAMrurjt5oBhm29BsNGUDNcNhLNAi1HUnJMCD7RsP2rXXXvGYpKYJ5ireTzTS",
  "key29": "3uM1ycZg8t2Le8kdKY9ydtTfDp1VdgqcQoTPesCx8FCNvuADXccMG7GofbQU5fRoWY1KSXkhBcftFiqKKGpsvHmt",
  "key30": "3LaRyNy9rVceicXCJJm28PEXitF6CqPTUinBa6EKBMJHxxWZFbauAKVwfEMUmWj8JPLdbj1h78QYQ3ju1ZN4X7A9",
  "key31": "2adzdrFvpYjzmha7BAhxTXoJ1mHo5HFjGuPYQ55q8SRW82d42tD79G1xWoeA2FkgshLCdF4JB6ndjB5C7MxBBDWw",
  "key32": "2AL1jLtVyV9eAity3fN4sdTL6xy4weZ5du2zsuKAG1Hdf4NrrCzHXRe9cJcYUJdkef73TURmchwVaaXK6bUUJ6n5",
  "key33": "4BgXAa2yW1amYZchbTh9izaV9N6FwqG9zK13XEfvh6FhQ2PN5J7wus5GKqAmSDREVkfZoAXFhxjPxaj1UzZdk5Bm",
  "key34": "y1oqA7jTdLdNxJvk5eKUdvCeQwJ5tbNfqs56wi1NN8VFSmZK3skrDfG9jBDCRUTKt1iFbPnX7pMEYBz9CqVe6fr",
  "key35": "3jaPkMkT9rrRTM5nhmt3R3Wd3q7rfYQDgdPxjJYjJCnxvfHs6rx2eVobZJBq8Bu9k33b6T2DXDESQDYEBPP1k8oG",
  "key36": "3HeW6PKjuSeD3YdmQyFfUBi1JucMHHmMsfT8fHtqtEFY7uG83SCPr8S3kBvyQ9KftQb2RpLAa4b3hB5exodrhTAh"
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
