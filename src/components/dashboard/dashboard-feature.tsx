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
    "5NxtPySATnxTu8aYTvavVrXySRBqp6cmfzC9EQcaUa4ALyWY5Pqkx7Gun1aVRC8HKZ9uvNkRkQ463QmuG4pKwN6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t891Pg1sWJz2fmhvNheDfJfxDGthVoHQy3xdH5iZiwb3RG1fikaX2Kp6MjMh86NSD7ABsyye3aXtoV8fg4ZjvP5",
  "key1": "3sSAtCHDbPLVUGdWBLtQF526HxTmP5UMJnQx3vzq67JbiduS8gNhXoM32u8mfk1aU8kv48EPAgvGhiJW9zYZ8XRN",
  "key2": "5uAU5i7ydXPrcBTesbSZxMcYM4P8VnehrXMWn5oH5AstoiHtWmNfQTAKSUb8xsyt8RnDBSoiXAHwm91jtm6dn5Ym",
  "key3": "74WDc5MyGxtRUK4xT3Q23KYMjMW9CkXYRP6ZSqGR7SenECZX96erUJMdsKZEnd7DnGTvkxpiq6bcyLKmzbnT2SD",
  "key4": "2AyxWv7mUxZYsiBEt97ccs64ngiRvDfcHcSGpmyMpeP9kdL4YY9xPZGokb8mn9iuw1ujnwoCq683URSrP5teJkc3",
  "key5": "3LFYAGG2UzYDGTSx2kCymKcEJmrxTruXPeUstoJkKbBVh5QFgaBoEz682maNcq2dqQH23Z2gPVQCFrfCxr5q2537",
  "key6": "vubEJJjjzwUELPfETV9cfQP5dEk7PcJhH87qJrvQQBASv8n2yBGAxp62LtJ4DkpMG7eFXuW36RPQYeyA2g9UTn4",
  "key7": "2nVCmRWdSYoUy3Ek2ZduAgKnjN5jmaczp92Ttgt2wjagv5vyMbm1ynDP5qzSWoaaQ7JAzM5Uv5HkpvP2hcQ6TgHJ",
  "key8": "t7Em92r7CcSxuA784Zd9KWFzeoznikCmbXnPBB2dMjYvs6QA49Ks5jiPC6dufzrriQw5v1BVYQr5LBMEg32GKgy",
  "key9": "4j11XvyeNVZP8Njc7Xf4Q1QNzMnrSTHRc2r4gi8Sn6vwrYDKFeSxNaiofJxHDJ4QTQ5mc1PcvuUHZL7E7R4sooKX",
  "key10": "4GgYa16zmgroAjdZB2LqSDEmy1iQRT27ZvAJ46qYkph5GvLWJ8AVhDJ1aUhnBzvrprbS8R85RREweJ2S9t6AB6rk",
  "key11": "3TiSRgYexUmabukQcea6xNX41zAtEpXT77twgx99q6onYu4ecVEcoSqMBTBD2D3S2qGpp2txsDM4r2g2Yr1Xaxmf",
  "key12": "4F4D5jx2c74CcpQoF7RnMMpc6qBGgKg5pA2h53KFPqLpN1tLQhYetYECdmW9xpm9yarYa5mDCTFMywNQHmXAinmX",
  "key13": "5mRLqTAkrqAVWKLgBBUvRC4qYQg9JbYnAPdm9C8ouA78Sq2wvjkafFqMma1UBrcnFPdFk6vWBQHTY8hrhxkrWtCG",
  "key14": "4CTRvhp2vMWps9eUX3NttLn5eK5uX5DVjamaLo84gkTrg5B3NGGoW6uNsSNvHRHv1e54QWUhh2aK2VuZMBxSZFU2",
  "key15": "5vFeEgC7yXjiaFToLvuJmXEKHhoJbUC6QXdh5kmsYkERUzB4AgepXzBu2JUQxBynjh2mkq9ZFFN4QHktDmmEsick",
  "key16": "FFb6acARJXQS64s9efEg9y1GMxY6vK28kvKrcbFJRefkixgFxMrJnv2dWo3sFuNRgT3MnpeCRW9v3aLPuPQfkLJ",
  "key17": "5ZXkHB7ezrB5jDKwBsnCJrwEP9eh9tMLnLZJYLQChz717Pa68GSJFqF3GryeqRvRD7SrkxZqCSseTo1Bz2ZPyqL",
  "key18": "3XundfJUh6UjFHKJs2ngkXcHm1Mh6xzvLFJdvmh12ZWm7vTP5x3VuJh8hgPjtmjXFCYBwLvkMaK9MXiNfaKWyH17",
  "key19": "5yHi9pvGTvVQXTJwAUZQ7x6cszunAZWqMuHGjp8bewhZMveEwgSCXM7n3EUbQSnYS9ewJR4Pzgm9aMBbm7aPyciM",
  "key20": "3LfoC9x54DaJxiASZbzerJq9kEo6zSsdhwQwPUMqwjX5FKY7w4MLfter8XMTfEKM7qjqa4XU13XG3KyH1qiJBUuE",
  "key21": "zseqSBrPwu5PJ8vZcvDjFYyJUqjGDwuxhpMxQwAaqWU5t8kya7KHSeM5zZVoreFgtEYkweGXQgv8TqEnPsY9c9G",
  "key22": "5ozHEQAEPGmEyfmTuQn74whPgEJ4ABHho42bKNvZTAdx8Wv3vcYf5zTCBPeVWGYCbtnKymoFmJyG8TVDXRDd2Xfx",
  "key23": "VHtfmpnbtArNygHpGgiDB5BMAqZLbYf3xPZXaNChTNY12PdEe72JSE8oF9V7ik25Q49s1x7DTS2Lsi9UF2yjCp3",
  "key24": "42vWxKKgMiCMwbzA25ZxbivpSg7aEtTKwfyQXJS911i8W6HcRb4XwrXZCvfHRRW56cYMtAA24GCETGUGvZP7srnW",
  "key25": "3YEF3kkL21aPg23Qw8NwCvvQtiRueobUXTLF8xJ4q23vPNouQNiydptBzghjGBUgn7tkPtp47nPtpQyYKPu1hfFC",
  "key26": "2B2mFoouk4d44eEhKPkC8nz9P5A5kcyXRcTxsJwnwt4frq5zC2TRgqGoxBKtN2YUfrkJbYMz6wpKPA7piJTJLfkE",
  "key27": "3U1Z3odka3kNCBbbupbZkX3RyqvLqacgFS68QCEkQzQV2pMymPWyucaTjFgvZV8xAnzt2ftR3TXn9pRpn2ZX8vLw",
  "key28": "2KesaojDSU6vqVb724vH6pCuJNTs42Ae18QSdKnmJGVGG7zs43yUi4djf3YjuBsXj17jK23TFFBoxDcaPZMcULa7",
  "key29": "2xrCMp2hCPQfsDiuaXeBCGmJVQmQZJPVC2peFt3ok5dM48ATddGjvz9C5gVUYdh9w7WeuKDWVctCY6TKqvKyGRUS",
  "key30": "4gH4BSYJPsHvBmtfZidi2waZUE7MjTtNA6phKY1JoJBXbrEhTnUU94fGKXzpFZobQXLcaz5pja6oX2ytthLDFLb5",
  "key31": "5K8zhC2c1HxH6CMHwiyEzgNRw8r4Sw35vn15zASKuaLMa6T3jGLLyK4hcK9wGGR2YPA94RNHRP5AZVQdDEPuoEpk",
  "key32": "5sQkyB45Kt7bXNWEWYf9vJrWeQBGezopzPb1bCgQ4kWD3pAXVk2Z4Q24BD4RGGtm5aDCo3oTun8pUUAk2THfsTdD",
  "key33": "hgD9D7ErBboCcEi6W8pmNZu9kwnoD818qtu7Bmr6Pozwk1d5j3oCmW4BVwhKqQniWJzS9fYNw7H4PuVTYspuN8r",
  "key34": "4byM9ZysVBxv9nVhVMD2ttbbvirYH2ZL3brujKKSyXaFw2UKN7KBdrrQaJgsRNmPYbCMYVTL7aajY8VnX7Vok9Ai",
  "key35": "4h3p9w3rENRojdQaTiKx1bnbcSy6fyfAei9QjdC2nwMEy1vCRk2kPhf9wfB4P7Ur6nrFkstyQih2ATyA4JzKQoa"
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
