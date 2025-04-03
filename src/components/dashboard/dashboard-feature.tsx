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
    "3oGNgqk3TNVhGQRuGp1JfNyx8wY78LF4ubZhnLPrkezd7pwVbWUfkCuoWNivbfNZp18jEGagVeyoWAfKMRpxbKho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7pFRfdhC52UCBZnTsD1PD8Qgti7PAKcjBaRHLpVBor6mwiK53dPo6S4ueD7tieDzsoPbwfYFZrqVZhaEz9eDGtW",
  "key1": "42EwZqnQHgLqLodXB68TZerHS7GJWo4PNcGsjadAx226Na5AXxT6LGsaSVgT3aAuTsmYXVNdVANL2gi1eS7DZhqn",
  "key2": "fx3jL3NJPxQsXg5dKDfv4F2hkKSXzrXEw4mBrvZtwg3sEdcGxQ1k9Su4RY7Lhg3mbswtfzimtBMSsDoJCewuPGL",
  "key3": "BDMXjLAT4NB9dYUuFGGk9SCSBjRBDyB6RGQBdZBQqPU9NwrzLHJV3afgiW4VvwezuT5PAVc8VDEoqummmq7xuZG",
  "key4": "3LuHhrjZQQT1PvnZBKSHwsGPnHhcS2ZQBb8zuN5gVWvczzJUrYGc1QKuJeMpS3USjsWR2CzEcfoNHtJN4Dr87P5P",
  "key5": "59ZcERVSBhUP8fXas9n62wQjFfbcu4gXe1LS8AfzLP1hfZuigHgRSRhmAi3M5dPF2cKEhYv4rkNydLWmpb1CFbdN",
  "key6": "bASwJNT5F9QVcm4ERH7FcTxQPYqhzV8Xd1NYSWUQDYNZMGaJJjNVKn9fFdHm1SBP37wgbjnyygh9c6f8Gs82JeD",
  "key7": "5mooqD9MupqKxELXdj7je9BYjYAqKB3VzyZ6WSK4SpkNQShkTq6HVECSzLyRuV8tMSU6tfWvV9eHeaQ6AYX5Aiux",
  "key8": "PY4qrt6diMjHFejB4wPKD9dqs3tBg18Y2auMqqGbhSKW3Xd4MhoCMoYLRyn5B88EfFX3u5vhdEo1jKEzJvXn65M",
  "key9": "5VTEC7TEYsSQYzZeHKeX7zd12MX4gAn2j9wPA7iKCESTR9FSFPzbDVWzHmiSZiW6UsvxpwMK3AF46gDpXsmUsN9J",
  "key10": "2Wx9oCsT3xWuwDfkmbZWJ5MaPrsahnL8ogWGfdEXRwC1jd3KqyqoP7sE3aQHjPFkxecEmkFMPLuQK5x1xkECBVRo",
  "key11": "e3gvrqrWr5WxUt89TRLVABTHbU47fagpmJgESVvSDyw6gMcLYmS9QHxyEDY1GPeTU1VWeJdXzQ5yYaFuamUwM2g",
  "key12": "2RDucdWWA73BQYLHb9kc5We8y9h2e1rt5hU883d9PXxQF1tu5srxoBKP8KGNDxjM1ps5U8LC1SkJQBwd1fq2SdWa",
  "key13": "4knnyiJJ2ue195TbxeeVQZzbmuMwoUWgSCy9UQgE9n4rZWngHxRbw7NAjSi71SgaztpYGEUDyoe3274KY94P3rJR",
  "key14": "5Qz9Qa4uq3TfRfpHRA5Fph7XsRRrrWHBv6uwBapYiaa5xS5NjXp6y3XSXMKsjM61bNcEyrLkJJ1tLJgty5GUvaEs",
  "key15": "5FwrQJ79xVsQHpBNus6piRQUK9p9B2Ch4PMeA9xT61jTnNVh49HBc9HCMiAuHjnPw7GJrPbtyF1YdzMLif6e3P8K",
  "key16": "4p4HoJApw2QxRD9PTF8QnBPuxzMaz8P4MMPm865KE7ATtVY5UnPGGrkSf6wCS1VxZfEUWvD7nmjcgrMmrxHWCNBJ",
  "key17": "42DePceF9af3ZuefpJDbovKMt4xJ6vDhhTVCjeN349AHCE7ziawH92yMpCzPpMZj1ZgvdiE1HTNSVfG373WekmfP",
  "key18": "PtFFDDojfJrrSGMWASRime2Cr73qVdFjgYYWv3MsDngw5F4Pp96bkDLgPNBZsf7HZ3S7vjXpbSAx7HPCZCzQuHy",
  "key19": "5MG6MSEKLyykeGcK8SHzeAAKsLrZ91wjGX1WDTGLD2RrkRMJbgCacC6LgEfcjFuvazUUc3aXbaZJMtFDjRsnYddD",
  "key20": "4DYMdZ6X9VGuH61Bc4JU7f57xKcKWFVKt3YPYDx3QbtFk4v5GT6YyTbR225gz4ff7qwMMTxiYuU5MxznLp145WVU",
  "key21": "2bfZpaUAffXjGnh8JTqNutSCziboYCAHb91dZJX2tYhf8H1ynE4mGm4NX8enjDU7hep8LfmE27x7bdBEZSs8gf9N",
  "key22": "3v1PP9Cotj6g65MDkjP8c8r8jvNoP7K6bqWwv87WYX5PDSREJxj9Sv4RzG9aS5bzY2zj9CtLyJFjcH9ndGFGYqJh",
  "key23": "R6jaUcMPZXDmc7yd9FbjCf2MAPobBrdDmvCsyKpKNyU5ho5a9tvuYWcsyTttVUrvU6VzACSTSSZJqpohpKrvoPG",
  "key24": "5MZ261A5o38G8uSVwfJq1PhSEmz2YCTPgxht8aP2zSzQ91SuqQfNhRZ2R5FZ34rT71hLqoH1u7M7ztck9DsqCXtS",
  "key25": "3w4JSZU5kdbvNNezZ5bRuUmEAWVEsxiw4wHetz8wFHbjutYNCE5UUX342o9i93HMxB9SagSm5r8bbnE47C4DxACt",
  "key26": "3Vs5pNw9Ab5sFfkUv5moFZvR2xKbZS973RqyhKLCrrGG5UQrAbcBUownQAaEpydSTgYcDxFPPb8wC6TsPei82GNa",
  "key27": "3kYZWP12vn6CKcdzh82wezdhRus1JthmnRoVeTc5MbWd4EWSqEF97ssdz66iPVgts5LqiC6zqNA38AoXDyE5nsKT",
  "key28": "53XdyJBXsPn3R5rr9xB9bEmJb6WUTmdtE5XxrQ8mgsaALAM5eGWA2jufMJUM87MXk1g1BRXckKS5MAZHRCDUDrR",
  "key29": "4Ub9MFy9ZVTy4czooCpLMLNThu7NdTKVKiUNDYgVJeGhyc6nVCvzM4pnJoiP8Kn6Ksqw77zcbzFFyjbzDGLAAzU3",
  "key30": "3GSfu2LpRtYay2v86rnna899F9XhFA7rEL5p5vr4xJa4z6N6sZWsaWY5pgMDssTALQGfMZC2Fyb7FdLZ4K39RT4m",
  "key31": "244mQ4Yk73fbZK1g18V2RjmncSjEWrMRv6Eyw1Pd3zrQadBUNoEfPceuMyL8Shw7YqEjvPM9vHDtQ5MvE1pUUYc9",
  "key32": "stPCNzBpCavRvYXapgWWde9SFu5bn6gjLULgbno7Lh9EF6PbBvfgegpXumAuGDZArh5VMYXop4gvqQHMuUFvgMh",
  "key33": "2cuLVyaMXuz5NPupseqdFTiEpwUYh27nQ8oZSwDMB5dpPfyd3Bx3TuBiNrBAoDyoEFokLmtNJSwbqGkjHH1xKkEX"
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
