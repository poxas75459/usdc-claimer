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
    "1P2VKU9y7QUJTK5sf38tGhAQPKgSxjStFhVRb2pz9vdxtDm3kHmRvRqecRvn2scNHpQoCo5E4kiGTyMYkUFpt7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qARGBiRpX1pHWy31eQ2gPyUcb2aRbN64SYTh3GPDJz8dpnhMCdcBaA6Um5LS4GVfxxhTji3QGJzFBbCETX13HhP",
  "key1": "JWE4VHypw9v1tSHPiCGkeZa1kERDoMLVJ5WQE9Jyu1aQ7qrVf7MaVLmv4gN194nYffTEHX8EMNX6g9sxg4GaT9j",
  "key2": "F4nrAZgKPky52Ke6y4NWXD943p1yBvqtmEmsEepBtSisEQ15JmEg6PyLrZueKge5gJHUkxuAhZAKVibZY6HX2W6",
  "key3": "4YKDgiZ9XFDw2JhkdEhqMHDPjhsTsTuhgrpSUh9GteKfTGkbxmEJGysTm9Cm8kXV82H32YVsJSk5qyA3KGJetgKB",
  "key4": "DYPRtMvK5QAKtCUWX7Aey1BYRkbFFNKKHUA5Bmw9La8VU49eFr4taYdYKh1ycCVyNjkB7KHaKAFJZJa8KQ5diSj",
  "key5": "4aVkEGBBayu2AEbut8yfnkSGyHxUhdBSBSHHT1PSzY7nJfAW4jr6PcRWjVejmDa5b8fCdT2a4CGzm8vAmeEFr3Vg",
  "key6": "5MMsiKdLMy2yNnb1njWEZqD3QjLwxJt4YPpbvEJERDgmU3Cymn4j9db2xqbQ6oLzLWJBKmNXGAuwVnDFgbdGdBN4",
  "key7": "FXurAftbG9t5iezodhVNMzouhvewuCBGtNPbsTy26H1qP3EkSsjjVYGYADYgcnJUGeDKYsSiszUU3Abze64Gx3T",
  "key8": "3cRjTkzMJGmGGs1nkwdaNpKeyQnzmkYZHGPtkEq3hAH3oYE4eWFwdgpvkKpvawSTzCCHe83Y5hK4fnjCtZHLB8YH",
  "key9": "5sWKy8NjdrbKYvNxRTpPcs5G2rNMs8maScYE2vhkxpKYvkAFvTgiRvgp5oWKAq2Ppc6zthSwp1kPFaVihvdAwYy2",
  "key10": "g1WfiZtfxQxdD9rxs6nC3T7cNhWctbbjHSaGegbWJg1Zt7ehqrf73dw1i28aAN5fz4HePcettXQs15qMH5n6ayj",
  "key11": "4EtophuPoCF96BtKuNAPizFUUqFzvWZhdmma7LWy8dipSxcxnsGGqDtKfktgerfq8APuU3QT3tqZadvMkpJjPern",
  "key12": "28mwPJA2anKMH7HD6Knmtpq4KXXzPQbVdcgkqM4hiegp5CsxEUqqueHsRZUMEVpBoJiuqjFw1DGxCpkVnZXRhWG6",
  "key13": "3rA5tXwo2aVDwTBMS8rhbLBRy7HdYfCbXFq5kwCbsmE7sRwCy5qm5zF4fEUJyNEGpEGnrXE1VfXB9xQb6btmEqiR",
  "key14": "5QxteJxHUMy9LwJaD1JctjE9Mp7xCX2DpAU1594S1GrMd3yDrvdmb3iZ5gszsrcmR8D8D2z2hqkhFEcMDdAG4N5d",
  "key15": "F47hVcXC1Hf3rKfEiq73kbbR8m3abnMpwv8evT4weYzDkkf7kDepo1k2edeXE7xrXVwEAGs1CuoVP3kmY2WfUA6",
  "key16": "3R2gFXrMoE8Fi9JdznsCkHXwF4mVkg1x2N9tdyRsefUiTVDWmXd8ASZ28pJ61UtNkXExi3wXDtCaR8STqPhkihfL",
  "key17": "2wMrrw3DDmvJwkhsCF6VRj6tPJRo5KZJk2tdKEcXzttfm4VcMBQgKkcCVjcffEEFHHe2C6i1gnDLg5B4oqduCuwi",
  "key18": "2T9r5aBi89bDLG5o1UwJVjCNCD3HRHDvaHbBAQcCHAhPiRm1Bi9mb1btVgnH7yk5mb7d6KFKAknCPbccEDwaGXyX",
  "key19": "4wdjgDR1SrfjbbYqYEUUcqsboiow4VuLnneALYNnULXFs8msN843DsqBhAsH1ba2jJ4AQ5sMzRh9s12dLy4v999g",
  "key20": "45m3Qvy8vZvZL6KSZMinDQ7f6jFNhHCtWDRx1GhjR5B9SVoEu8rD7pevT8JUpTXNBrqAFunaFQdQFq9qJyuPD4pH",
  "key21": "2x7ds5dcXT3GypCTEQELPLcmpBsfC1rY7sw2KcDoTc3ghByTnduxCCSGcLynpyoT4DJU8MJgMF7Uue48FdSvg2mf",
  "key22": "4JQd96rWMvx4RNaZsss985jAXXNgUQ644N2wA19SCtnMupwjSoRtFsEkicYg1ibDuBWP5FDfgTfdttuinhZcCYd1",
  "key23": "dUdghbRRE9ZcggEjgiDs58N3ZAgYL5Xu34BiU9A6iJdeVdUPAx6jMGMYfuezJxNvcLZbeR7rrkYt4qCS4BwwmVC",
  "key24": "65sKxZCbKSYgQBpdHFSJFxwNsLdma24AugojtjE2Fgc936rpNpBCEGxNySKUC34iHZiwG75CdhfqsK7esJuFaFEx",
  "key25": "3amL4FXDuGgTgQz2PHNoKG7m7vj2LqQdbjZtYNL2LMf5FKRyBQ3wCe7NbpXZ6j56nPSnN4bFPpi42gkZrLqDEejE",
  "key26": "4uUeUJheYHpXjQyG93YSN5aZvZeMS8Ca8vrPyFAtwJ9tF4xJvoUow6bxApUXpAqW2CwjzKMDpj4Uip7G2bUju8gU",
  "key27": "2GkV7q5D67KitB6QhVu7VxVQEZrN31Nfn4JZ2UBEqJEKYFx8Y4GMi2WecCZKRdtsFNejUfHbe7X1TbSdziQAK3DS",
  "key28": "2KBSEAJxLEgo22sNsfP9arfgmPsmfSX9wm1txDJA7WRvxZ71Q7hXE8ApXhnmuQB3y5p7FbGyT9UjvBnG8cdrHvwG",
  "key29": "4YSF6j6Co1T81Vg8PkYU4V2HnMG8ufHqDLE1EotG9r9UMfrtE2y71AMBUbHe87wbbZrwLnVWd9BXpHgYvw7ri4Ri",
  "key30": "61BR7UqQwbGBAi8e693JGrkSU4iQeGpvw24qoMo4uNH8A8kBb78etbpZBndw4FdwTUUYmGYi1S25bwFbUCqQqM6b",
  "key31": "SbkN2N3dv6qgc2sZaQKejR6zrpxFkvSnmNNnZvxFVpeGfpvuhn2mmQibgjvAqd4nrtQQFqDVvs33RN3oQ2tSHZ6",
  "key32": "5ego2p1Gy4wmhwqhqaK6y8aNiecTvSzd1kSJoBC8AM3Bdw1ckUhPG5jd9E5sdKBntFURfc8qo93HK61Q8D2kgKwF"
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
