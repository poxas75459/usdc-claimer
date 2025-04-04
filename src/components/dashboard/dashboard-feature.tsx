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
    "2CuePPMkbn4uZ9xR7Su72rBmFX9mHapojwDXA8n4RYwHiHPk5XyqPMWbm9ENdmdq3Aa82feHxhFp9PrMtpiwVd4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMjypasJ9ZrrERe5Hr3JzCBkBw6T53PpS4QgKhMVgvtTzzYQtKrJ1NzdBCHK225NjnaENM6Fz37wuF6QSxXitx9",
  "key1": "668rqv1jDBTo9EraJUzeaLfo5BR2T3HXAHfa1cY3s5jEoS1U4gH9NKskMkbXNFrDv3cuGUn1vs9RwyosisF1FQc9",
  "key2": "4TswL5nUGhf7diXhUGEmdgfurURGggvnNGtLjiDH4bN785NjFzv13Sjukq9796mEfEDUsy9FdP69axy3sEMmZ5q1",
  "key3": "4t6sTwAUcCShjo3u69pMfnwf4FKsmDXTpP2yuCPqaJwmNZL7ggraBgM5S1yKfd4NkJztLFghXu9CNgRPevp98LrK",
  "key4": "5CYKy1uHHnM5vNMrdK5BS2gw6P9C6vD5T6sitHk7eeUEtbkMWRTWcVAooeYd21UtETFx3N9GszN5nUFhDgEB2cso",
  "key5": "3eVpivSe3CFkmZVvekE9dcfz9WghZ2cXAMHHnXgsGf9yhZ3CVgkVTBUN28pgDpBCv9B1GHWikEertm2QU5C5hckG",
  "key6": "2UscmTWbXim8uAJ6CafgZjx4oi1ijWUos1askj6FXzyTCBuoRJMekfnEAR3skVAaqfqqmuRHAseN474yYTbBQHhh",
  "key7": "55eGQDSy1MKDbX6yYLjKoycXLi4PNV73TBaw72zr2SuatncaV1WErjHjzebmXA1dBKRKxe8oLFTAiFwgNumaHwna",
  "key8": "4kf24XvSbtj6x7kEP1vqRGy7fynranUV3g1oTpDHAyMDQjPMNEKfVon5t32THf8DhCif7vpu1AEe7jXgsy1UdrUm",
  "key9": "3oVGPib37d1sAoBbrRRhF4NQRenGPyw8zhPYRJVkLczryKAmKkZyfER26bSHRgkfpdV8SQ3nZoRc3TCyX4c4jRv8",
  "key10": "uFCy6ePyLwj8NcVv8ty2MG18simiW21huAEg8gJejBVNpMCCMkXmWzt3AaH8Ax3NH1aSFBLVNhbzERvXRLQA9fs",
  "key11": "XgdVmADgtS1QuuKkM9pSx7ozJMYCSGtAiHA14EnrJ4CasKxuMHrxRtXu3UpJZVBD46zmXcvP3TvUjEZDRWHK6rX",
  "key12": "2uq1kz8f1jJgdh1wBZmaP8zRrn7rAk3c7E8KtZQSy6twsBg6zukh8wb2jAD42MXGY67drxB4ugXFhdBZXiSFMUpS",
  "key13": "62rr4oGXxetMoykrcTkfVWo6sCD6jZCWwmcskhiRDBAXc9S5nmMcevQK5PPAvRRUUWGxh4Tgi6hFeCAssEANaALp",
  "key14": "2VjRff8pLKEnPkMRUX6Hj7izxs6F441dZ7KUbdgMfkW5KHLHRYos4LXrmgeoBu4EoYq2i7YSbeXs6pi4PVjnURjq",
  "key15": "4H4vt2dwJEdFkvqw82LoHCtpx7YcNPEdZM2njabzLUrRWCEXRKGviV4uADKhWwuB2VNHQNwre9utkj5WCmHwQHSA",
  "key16": "2gdnnoY74RtBM1u6twGeL9Bmwxv2p9doq4qw1G7jAxuuXbCbhBq8N4qfLS11MnaiUEUwHSsUka6oy4rAhYnVVnn6",
  "key17": "28PHDsWNQpXc3jCZXf8LrVmdPXycJ8Fuc7JWsaTLFcJprZ1tCovbxrCWJ9cEoozUXMdncjRMyP1ASNnkQWazcERR",
  "key18": "3mfKV59jdeCUf3WYwtxQYNpa7xdi4hXHx9dqN6BtgBHZWUmNkMmZ7cxzWPmrGeZGe6Kbtusfsyr6w8Dqnj6AaQDN",
  "key19": "3dbku891NwAh76ddaEUVZqCvMgNEYgjD6g5PvtyhafWjnyDVY3e8AY6owgEye4HURbbGaWHQSMTpttyjAUqVGjWV",
  "key20": "qMnMYXiFJUPWed38HBbQENuwkegia9q6cdfuPMDK5FacY6bDZ69TKxR9kbYP6b9DkbWxs6L8Fied2d4nqwdFj7P",
  "key21": "4fVpCb1n8yzbAtUzuhPQTEsbUqBZCHjGEWCnpKVYFuYsyp8sKjo1z49JBQwTJu7mXzTyRhE47dWxzWsUCu6Sqg9T",
  "key22": "5w9YeNJdk551STDAuZ57PNj4frRd8zR6PQVz3M6ZJ2ohrLv4ChscA5DwrGYPG6f69Cavz1Q3qhPyUVM6riKK8Xxo",
  "key23": "5jCarzAn5d9BX1hS9BWVEYX4n1aTpK1PGHcYTb78FHS3wjt1BUMHWf8Q58wtnDRjfAvDU8dsqxwHeAsDR8UCsw8E",
  "key24": "4ALvwELiWKavfEbhcwodxqD1UzAWatKp21293MeDhQL3GyX92fg9cfPge9DEUun6QpjuwokmcZmDKfYBSbmdVyxS",
  "key25": "2rtDJquvBQb9W9hR8wzCSoM4ZB2K17bdSeFG2zLoEukj9S1YGztYXa5L6hKTSjkNNo4J1rSeYHK6AhocgZP3ELu",
  "key26": "35eGpqjMEJZgVxSBA1e8qQKpgQkfmEqic6Vy4VrJnpGbZb94RVxd9kmEC1DuF8VZpipHQyHZdA6LhXz39Gyafj2m",
  "key27": "5bdJwXAH9YeGFL4pRYzWLbLTdmCNmMzkpj6di8B4bTAuh4YDBBDYTUzGZGvESjEGdS896jaMbhGFZwQBAb3Lwe1f",
  "key28": "29RJxvu6VHXz9mbDtWxJvh4Prw54HQwwaqgtwmjiHFmPQsxMEXtTn11rVLRKcdNpkPa3v2C9quZ6konzXqA2n68Y",
  "key29": "4sGtuT3m4kCEt9kV5mpQzrDyVV7WtihWMzfyxDENtGUvQ8gTj2KDbYcmscyrtbnsyC2aqxKAD9ZzoJwfHGSLkHS",
  "key30": "5gH4LnHNmC564ok6ZUWnUVEhP7VdKveb8MD2AHeq5JpzMYjBcC1iZzYnwraRtjP96PfUVVvArsLuacrzTQ4BNaUF",
  "key31": "3o53KwLThGbttVSJL3zCC2GEDLHcGazDgRHaBVvUcQqH5VWu12ADWcAciahpaNh27xKNtZQoFNMY1HiaZ42j4nZw",
  "key32": "2HpaMHjPDwfpRQncMaPLZBDomJSkzkMupdoGbDzHWJWF3KajGaUCj3gVugtYfSWZeEkzKAEKV9wbs7ALpJYK1B4g",
  "key33": "5VYCqWQiVy6SLAd4EWGbPwyjLa9N7bmqhgAoGuztqBoneVgDQdXdSyKzrFrhBL4rbGM8Nr94eSZb6PNHQsYR4VjW",
  "key34": "2YNpwesKUuyrF2Dj9AC6NhHUxkaKZ5rvWME15LTU5pMGhQH456v3AS2mrFQpwLBwvtMJUk9w4JBMnrRPXKRWVi7V",
  "key35": "4nxEHV31CpFZeMXWDuzzYJa1rDmfeM4KtqaFBS6Eabee6V5EBxtJB7jtg2FK2xDZgE1KnJKixKFEGkhL69vVBWZJ",
  "key36": "4VeB238ctfbZ7eLxogh3rHfC9ACHjbxEvQutqh3CufccsQ9AaMcgFhGmoTcnYQNqCFvDnBgQCYzAbtvzA8HDwoVm",
  "key37": "4rXCpKcG2tXKsGohyqgLZdfBeb1qD8azmXVz5LuGFoAo4BSq3GVrprNQkZxMJUR1CqNHhQagxvYYaJUwFGXaDXZg",
  "key38": "2WyL6ahSVTjNRYj1wGrLnAr72kzSUM7o1KgWVy1RYVQGU6FJPgwVVJmbN2MASHZgPaYx96KzgMCYZk6vXewTkzSn",
  "key39": "48NLPT24pFw2yEoSqYqa17JRvPiFubq8cveytHa5uiXVfX8MeCtJuGrVi9kZtSL7oeKBLy59m1j6mjn69sbTV4nU",
  "key40": "3xyK4rc47ZswnZK11htZLfnWVP3jKkNAjhZNwPFPhuNk25APVkoDc5gSj7JJcBTHWoRWUbjrJxVHNXndhA7qB7Ru",
  "key41": "2YyNL3uVT3QD9WLqBA9QdFkwsMoYQysVqtvPP3EouedCB7tdkjbQmWBcEqkAeFZba6iC28hAgpTA4o4yLnjvabQo",
  "key42": "4RVBzLetwe7RfEyCsin36i3zYRkdL46zoYPcp2D9mm446cdGGHgcNGeWoCvdenVck5zSfCfuPzx1sZQsHgJwujd8",
  "key43": "2NWreW8UrK5rGFs5SwWm63rgRwYtUYWZ3tvzYeMQkseMB6KCH3sPz4Xmn9efYKqGMg183ZLJs3tFcfakLoPpBJ4n",
  "key44": "5z6FnFqtU7pP8peXHrLETcLnMTUjW7ZqPuyyYnpks3rCy5MKFFKhqP3umSjbU4wE2DiLSt7bxVsq9aDMgj5iVb45",
  "key45": "b78uT4vfk5wqUiaz1imRaS7sDv6L23VysLLMfGctYRBBY5FGkkS1WAv1iVCK1bc2G1cH4gGUzwoe5wxsB6Y3pVF",
  "key46": "4xpzJgjhps7DDkuApSTMzgSRhf51bVhwW3sqGnJBaEjxBRpPEPTfuLSdbaBnE96JvUADs4EgzbCGYv7xyhmFvDbv"
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
