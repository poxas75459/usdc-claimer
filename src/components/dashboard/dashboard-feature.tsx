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
    "7jMp3zj5fhoGv8aVfJSsHmihGELRyPp9cKJwTCM5AjwRcgYyrTrFHoPdaoSrc62xx3UgvFpsC8aKmDjeiaPBPzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R1rBLtywzATmwkTS4XQHviap7eoR23PJUicimvu5wFAkGRwK4yVv9hq98cZs6w7Pr4zMKYiDPXaSxvLJAbFDzgF",
  "key1": "3aki8WQU1cmtzv9xfPkPdZ5rCeVmCDowP7yhQJspRYZHFzsLPbFRpbGUyauVazx3XN2aQoapPvhcEFQ1hpqdmvAG",
  "key2": "2XWF4vp9cfJQeow5TPktNGYAYqRyYV1YZVvRifYQHUVdEohTamUDDHzrB8jPqmWaJAaTLKUNUgtF9RJEptD8FVjM",
  "key3": "DJZu8L3hhx5vjJnFudBYgp9NiCUR77VFYkMinnLmnRcejSf7hUspKtnzxYPQvb5JdVcSkA3Jtm6hGQyU7giEdsc",
  "key4": "4qCsSr7PKDFeUsVP1apj9RKi6NqbQ1FcH5EjbjTMPHGJEMnoBYojj6RWgPpQ1J3wzctFZJ7DDUubVbuvgPgoQEqh",
  "key5": "3xqs6QKLRFpUqaC51TF2FJzsfDYxhFjiKGyfbDuGmsTkKjUiB4na8HdrUToT8pZVMoxWn9nzuumzF61s6ndHUuTE",
  "key6": "2x3gcyKNCehosztMu4GXPhKM92vbAxBH5WC5EabefakpHxDHmTodJKLiY6u9QikRaeknjEs4WKdEGi5sYnzqm9Yf",
  "key7": "5MTLq8c9KimEE7PwEdy2wjMtVLowvrhdQEQ81BB4kccvaMfgoqqQLmwer2caJd2EY4z9Ba6PNCm74ch3iymvDDDW",
  "key8": "3eDB9NnRxKbAVYnkxUVcx49QsvfG5w1ZjNXfBKAVxLicoanajdcn9abSYiCdgzz9fNvAuzfWa58EhU4F8pRYDXUG",
  "key9": "2QLTRTHQrQhaXhkNtGRAjYvQEBQLoVJ8BSGs6B865r1XeVLx9bkTomHgQxiR1tQTMy4X1APUdtMWDxrYS1oG7NLZ",
  "key10": "3Qj8CrUEfvJ8za92qf1eQBXLYJcRD95brhcDfA64aGA1gM2zHWAcP6muo4Y9mMMMZH8KwmgokwvgZz7z9tpZoWTM",
  "key11": "3pbDEfLcYg5TM54pkY5fb68YRAS25Qi1d4LF6N7q7jtnvKiT1eFfn1JzmWcqVf1mrJzf6kZeS4h4CCmRZtGDtu87",
  "key12": "571xaeEXgBUMZ23KeV79Hb8rGUGySj9h5M3z3eLLZX8ABjAdq52cDQE2k22GeH9GUTqR4Yu1P9Fzr5BXC4fiyBMS",
  "key13": "5SQx1krZVjLDSM9yd98DcHjjBhuJVxLLPjFYBxyqXD5V6g7iJfdLmvHuLuh364uaTW8xMkFy2QCmmaUvDi4nfoei",
  "key14": "6aFiSZACGJomwK5HxWt8rwqM1bpdSSYwVAZ7PYeNijp7YdwSCMwGWq3MfmuKTaUKA5gdJNMAt6J4qeFZuoqowVy",
  "key15": "4R4h2DMbH1eWYtpipSmvfgKVwGJuBsh8j7b6d72HSnuVhQyFT1FuSYGFTeEYD2H9PdLSZoJomu41WC5kHod8V4DT",
  "key16": "4psBGwa9zMNrxT1qziVKAUks1TjSn53rW7cza6QxZAJ6bXEGPx4hbKWfVgewLwUe3EfJJo1Zwm1EwzP6KD2wDsxZ",
  "key17": "2zDnx6CAmsWksWPGe2BZ5P1gZhx7pgaxPyy7oyxeDrjngdcTuJPwNNewsRiMRKz8V9SKDnV3PRTJTGMo7eJZHwrP",
  "key18": "4CuDzk9cM9iHvFjUKqFDLwFiwFK2ztS6tuTm4FaCDfbDrSPh4e3sMfFgg1Mai8J8vgNg8yppAbDgTizSd28sT88A",
  "key19": "4hfZsh1xp393BM1fGjUbJc69ci4t828kn4AkSeUgm2t3vXhCMUFUQWewcm73JTaXDJQthEa5oh3Ui2fnJDSFpNCJ",
  "key20": "3niy6YFPkuMfiJiLmagDTdTtT3QBiiNgahv7ZiM26H8Xfz8K6togwZfFMcfxrE9jnzTizYZvxdPBCNarKwGUqFXT",
  "key21": "2ut48N76dBGpjydujMnSSrJ9Ef5Hy97qXK8m33gTbV8xEn28uTAi6hzYFRWzmEDCwJC4Rir9YK6mKTjbQw69tmNe",
  "key22": "54HHbSpsPJrpzKXMrTu6syCMhzvsUsu7t1XJwjXBwFwMSygsBXE18tZLT5fwjcRTPiSs6UsSP8uC3WQtFhXmHkJ3",
  "key23": "4Uf3Ghu6T84vN2RBH7PncML2hq5W27hnhvMRTujUazQAnZCQ5k7gvvcKiFAdGYdWwPMf6nr8uTChbGwshSDQsEC2",
  "key24": "4fnqAwqsUihuRsGbdwkiMh9sqMNNoVpiwJkVcPV8UP38NJxiMKBeDh4FWxWSoiwfCzBaKaHk7mYApZb22Coae1GA",
  "key25": "27bQVubs4WZhfxMDHJvsnWLHr2jD6vqrM4fyyjoWUsadZJYbk8XFdxAPDrdwHus4jJoM9yHZreJy9Z7yfM1jzXgQ",
  "key26": "eqpyFGGD67TnHicWWU4gYkPbkGzuQjhyHqJCzK3YC9YFDxg7H6G7MmeCgMzgkNgJHtdybeDR7yxEDcdwWPMM5wT",
  "key27": "25DNUShoD1aCw2CXK82hpgRKpGucvZN1zzBereZjTAcb2fWrAtsKwx6PCDRhj4hAB2r8JXpTzXXHySNwA4CyCMVi",
  "key28": "3oyy8AqdG1W3UyaK8f9JcemfbmhCHyXiea3tRUxBsMGuBpL1qReG5G28QGhRnCF5fUkurDtmZoWiepJcBdaKeUrA",
  "key29": "5Kb6RhLy2npPFGAve2yqrx1i8x1HHyiKiLXuJwTuSXEDjWA3SPJUsfCzo2rYahiJN4YGetVsChrEDc5aWkiLpM14",
  "key30": "4HuiREtrgdXe5YCnBRy9zRgKwvh7oUJbocbpqbW1hbpscMY6JsapBXmd8fHNaLsSRusRK5LBrjawPgqF73Bpjhts",
  "key31": "4f5LUoX1AoGaAvgCWsc3gug8947KM18Pd7fCJT2snaRrpGQT9hjcHpwx6ECBTUadaNxzgNu9v8qxZP5kSaqfBAdQ",
  "key32": "4wxEBm6CHVU7G7VcQhrHFoQHaoaDKhJTXZ6UkUqvCjPCUDKp1Zi3mLTNzgYvhb2doy6vA3v5Qq3CzdYNte1BuD8V",
  "key33": "22yRTM7xjP16gx1TYHKFvAmhVqZY3SRtaa4dfmvQPkQwvGEVpPYLPavqT5G73CV2MtQWT4nxVJaGUH5rEJFZUjFv",
  "key34": "2NXBzkvYcshrq7QrepF9Rc7FYJEEfn1PYtqBrfubL8uopFKpcyWPjhSp5X9KHa6AKS6Fj2pmtBCmpvGgTvWzejE4",
  "key35": "2imRNqej8oSPqzPCPXD2YhdiubMZ2fDK2JsmdFxm1YhvtataHzLJBixFyMdvfhe4vVBLqWKFuChHprShZZeqLHXj",
  "key36": "3PAiXQSaankVuRqqKnV8Bj1wvqfbup5UgFXAqdTLa5NuzcsCXX6325rBmE4SyPRKuVPaQ41T61DmPbFGPG2ECgQi",
  "key37": "3RLP4moThhyKikLg1g2Uf2HPT99rm5gK3Lgzsak4iR6fvPM6YjM4wkW1QasAPU9V5CCKpWMYxmwf6ZqR23jbBuGC",
  "key38": "4tGgsq5WByHNwpKnoRWh1VDswhBxui6qM1aPbw9XaYxPpu3xdcgWczyHEmgUShgqUL1syybrzo7STcBU8Sx1yBia",
  "key39": "pwV1QjqJhBB1z8Tm6YjUidhqJ5BmyLz1R6CVjrB4FKxbmR8aar1GA7t528zmQUd1svuUfvnh7QHDaqfFxmFTyrX",
  "key40": "4EcvVLtPzvBhpa7jQN8fuDpEkeosNx6xFEWXjCYSi2LGJhNfeYpBqR4ZALi8otDWjvhQZc4DY6S7vfBgKrEE4mVe",
  "key41": "4oxQmjPDvSjczjiDyXuQrTvp2RWiTarFEDBsqy3qrrxFBHZiVeKM7fWzLCF7EsJPLaLAQa2jsvoW2h25wDLhYSws",
  "key42": "kHqh4Vd5YYpWgpmtiyUqqiUR6E5X1Dx354A5oobzhynNYjvLA2EMqxvvzAREsCN9V4cZnKm3t5D1q5UTz6kHVjK"
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
