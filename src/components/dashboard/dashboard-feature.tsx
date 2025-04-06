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
    "65r2irJGK8FKfpW3EiW5girMu8cVQiQ3waqM67vA5fbf4A3qr9MSPJyUtCT3NCDBnPEvJEJrGCKuvPmKXx9oxnzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rhe1QB9TzsEf7K47JEkFVrSu7Z6o9gkzTKuc6kH1hSx4Uza8CofSycjvndog6ucf8kmb6kqvqMsTHHKSfwcNVGN",
  "key1": "3kDPRf7kHHoaKWoiPpYvLv236HGS9W5aJ9ds551SpV9bPmRCPUsAorXMZvUnAqGuyFYHwxP95Quhaku3s1TZfZ89",
  "key2": "4AEQ8MGBUPWxn4UAnRSrNfmVei1LqR1g7BUxnKNrure9mdjwk7kGWgxeoaeDVdMTvchiS8Abc8WvSNU5ezgPYwxQ",
  "key3": "5VqKpTVSrjibChkWChGxnNPdGzkwVZyJsgHy6ubZvzFjSU5HhYsaq8S99zCJ7HiLCKHq6v8fgq8beFoBFRok7epX",
  "key4": "2aoYRYztZpJpjM15SN41TTJ93cMgswscnUw3wWDNtNfrpnoE8xzTTKSyq9kM3tWyuDQAYDn4GVRm3J3QPqWzabKU",
  "key5": "4ftpN1CzRFsZe42FeTFn9kSwtfEKLV7ixYg5uqiW7cYD93rSZEZicoFWomG4LyzZdtKn7rQVtqQFJJL5p9UmaRp6",
  "key6": "436w8FG842FHsNMt7y3hhiGjzcyimLV8LvnPKEm8kkszmFvdMCzWsdnWMPCHbniYbY1gNufFjtNX93ri5xt6Jbfo",
  "key7": "2F3rV3iBwEfqCtXZHqAA9yaeayxijWbuVdofZnuYdCySshdUnzQXPiTXwgbswVskeJ4VsPwNUmgPZd24dgCdcogK",
  "key8": "2vkYTTmzm9hQrqWmJMrizeSr9KVo1sDHJvLSW5n6y2r5BaLCKhFiZ1PBSE2vipiEaqozRwR7Spzq5nVZ4moJoJHB",
  "key9": "4s7oJQAtuYVLt58CwDUwRWZ6vYTuereTQEb7t41k79Fp19Hjwz8CxsUJxhN4mPtbPBy3o3tqQN7NuMAmwC2BKzCg",
  "key10": "4KhBMruQhtgejNoKUrozmc8NtccTV4KoV2QcM1w1wS2Pewd845FVzT26gWVgBRYro6My3dVAkpqNezKWNwpRzPCP",
  "key11": "1F1QCpwwG2VfmgFdaSnJbejdgCQmSaAJ5oBGARQU2vdFHfrpF7of4XbgN2QsxbtXECPwMyLWtedtVQmBcTTaAgE",
  "key12": "3CJZLNiiQxNpdxumGWiupgFhgVt78sj7CRpbq9LfJyUiWK5qWgeCsdza77TGhpyU6SZRPCh8t7z8KDkEaFFr5JF3",
  "key13": "3ny53D4abP5tEbzZbMH7SKQUdAnthVEF242SdWNLYgh4zxyv3ZYCmLhvkMB4H9QKjN1ck9Ywhd7eZysGvLXZGREC",
  "key14": "4soyvqXpEKLS8NchN9w7DvbdFGKmcyxUtpLGACNmXm7NoUusFkweTUaPBci7MjMrWkGgKkWuoaiGawQzt4Sjz36e",
  "key15": "qWN4bXWc7dSLx4rJjhzBtmqwTFiQ2GAo2JpKF44xTV1jpLahoRDWYm8HySynCKHZ9pwnvaKTnY9P8tWu2c36sfz",
  "key16": "3TUeDvK7QCqF4WQx7oiUFeCg6h2v53npUX98ffMM6d5KV2QpEpb8yB2FBmVHugUgqJwgQaHCTKn1SxWyJWZdzTbz",
  "key17": "486qYnbKho3QehdJ9aeRCcpcQYwoDMCnee2MtDa1CE2ueeafECiiuQrkwNj3uC3Ps66VvazYxHRpARz1D5qrWTrM",
  "key18": "22ka5MxTro1xisDUVdQbDoF6UqHLsL3YYcwRLYQCrC1F215kXX95S1aCTWGLTq79JtFBRGTjYMHRf7D1raQcRVG9",
  "key19": "3TFvV192REyFzwHX7zz65s6wfbh2PwPEDypYGPe4uxAaupCvR82WRDgaNBnaGTFReENUVDVPCEwrxackZZdSfDGU",
  "key20": "3NzYGejsMMEp5PyD6zukdMdvEMyvNszSMVpkFu2Pvu3UdKBPKQCCEdQcA8HQYYAP7DGVR7vfJ2uqZMrrNjtd2TuP",
  "key21": "vnL5Ka7EM7RMHxPZv11SUqX5sw3S1KyFq4hLpDz3fY8LXWNhR5rP4HfAXhffNmZRHE7tb5khhRne4jkcjTUbCbX",
  "key22": "211jojMyhV36Wc4tb86NZX4ih6fbaZ3BR4Fc4pP6peWrnusMLzuCyaeQ9LsRBGrVJbeKjUaYQ7qJBe1F8iDPwcqX",
  "key23": "21zwmxGaoFw7ozAXBNyhZ6k1DcGm7afS9Nqga4SdwmJvNkBxz9gnwAqJ5EZLfPTVWXFceG2dbAEV7N2XP3WXk8qw",
  "key24": "KVnLQ2vtC28uq2ubCgafE8uDeCR6tmDqJQy9BaGjrShh8cczoK15XpQwYjTWQ6sAFJhLuWLdbMunD1F75emW5L1",
  "key25": "YSmfPgkptdXEsWeCyzKMRP3sxavwgcC28mmvCTw11Xwhcz44vNdF5UCAgA4jjMKfxhexuJhE69o9YYoZqpgrwes",
  "key26": "3WJ126DoZ4p8tUQ8zKrpBemRaVQqaoYuN7WFfTFPqBTtnc5zBZQdodeoUw9iHNFVR8nDyd2MbaR7TWkwzUn8VN44",
  "key27": "5zxD5JdSbnroSYmLM7o4RKMBMaRuT1nF55sieSyqV7HiCR2dAkg6SUAYBuKgMLi7oGEGm7z9RDDRz9Q1zeyNawVF",
  "key28": "5PaCqeiUzjghomtvjSuyK1G1XCz6g2Qx3UerUnM6rh8MfHPXfBpjWiapdgDkAGL16BYc77ZLJxHmAZjRhxx4sm5Z",
  "key29": "66fxPvaTNyfs4RQD7mhERqVrCMhSNMCgvdZJSf4o6tigGtfrePTwS5WySrr9qYgZ9CCKetpaAszf5e5V8agGjALH",
  "key30": "5aGZVD5tVr9tRUBhSwLszh7MhKqq6dRuuFQJK6exyRrMYTV5LsUDBu8D92bRDU8V7roazRvhzEyZMniRVoCVMwiE",
  "key31": "2YhSsTXBz8vP1iGFA6GMMV4g4KRSNKzD9mHbyMZBnEniuks5hejWsyGNfKeUmGPfoZjwvSyQQgDLX2VwzHjjpWYw",
  "key32": "5Nhi4UHcVxJ6jCYdg6sNKDGvcpP4f6SJzk1Hwr3RZVUTNrBz1h7TbJpYVHBo8v1LwbkjhQTiPzu1nG9r2Ab6Hvcj",
  "key33": "8Bda7b4wH1yNgKapBy4bCT4fbFDDNxYBaMebe4xjyWUNqDnFDxY8C2XtfJpJeiZ1pg9uYQncD49Es9NK1TAVxNZ",
  "key34": "3kqQSFXGgq5C66WccrdrDq9t9hyGbrwn7TTfTm7N2ANt17S568D2nu9CuBXsyrcHAr6tTrN6wNEh6cc5CtPtEC74",
  "key35": "4Zjf2FnF2Jac1AemHepTfWnkm84c5Jm611pY7NU9uWuotD2ei4iMVxbLcnuNKaibPxyNjudU1kLCMKhoyY6Phqhv",
  "key36": "2HKKTy3HAXHhisnsCs1wJDG17vh8NLvDGY3mxDZHWHYYfYYSR3jbnW7hRkY2Q82pmP9uv4ztt7DuvrCjqxL3HhkW",
  "key37": "5ivG9QqDbLGYuyhiVHScdZbQURCtUD9b3TMhQWZAFiBt35d5xbcJtBPi1NVaG5PtPzM789AqAgmvTFWL8jKfjfqn"
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
