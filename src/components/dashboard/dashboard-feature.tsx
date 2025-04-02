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
    "2tGj4dyGfUEmrBnmrHc3Y4yN5uZn3TjRQBsueadX88XxudfA2NceLyXyvnHnKu3aiuUPo4zq8dxJxLtd6aKqkNzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tKiNnv6tHYgesQFiLDn6sXehtHZjoCVrcmCL1y9taKhKpgXBrf4pE98BAiGbLWgw4UbQsx2NfM3xPqxZGTUYWCR",
  "key1": "66SvTz9f4zsGKJP7GBjzmt3Hew7BT8o57EtyTEeKvBFpXqeZUGkQ2a4YXQXDd689FcGPi64R1NoXXxBWKUcAWPa2",
  "key2": "3FF8nFzzkt1v5NkiZ8rkE2ZP31GVompCtpkdCeu8eq4GqSRCdXuyqk7HgtMBqhy3Bq3HceSU6ww7YGP5yPcTXey6",
  "key3": "23kmd38FKaTjonB8uwF9BxkM49jRJcxVPJvGoRtNKszcRJA252dRJkxGVMuBJGe6Y85dAPaM1Um3YJ5NFVkmp8zq",
  "key4": "2R1mtnG384hwFvhSreKrjzRE4ec13nQQZujchYiqo7JD8oLLWR7kcFvPyojGoEbaYPVGHFinoP7GZE8ESvwV8PoH",
  "key5": "1zKtPWhd8j92RVXbPZVpNiTfKyhLoW2svAnJ9xfEL3A6rMKTozsNQzG7crx43ZXNqtsk8W2VigPufzMMPgKDuRf",
  "key6": "29puuKafJX5qDCWGAEtEjngV8j3em88r3Wu4336Z69iYVoCCECesWwRCQVtuN7DbbvFR9gp5tLbHoZoNxhLGTv5D",
  "key7": "3i56f2U7vNHwnxkC3EfjBa8Zz9gXacRCTpmVv6eWz6WDQiWvPwpyNBNZLtNatMLQKbXsEeCXt2CC29RqKCTkxRMr",
  "key8": "2SD1jHm6EiRnEKWcoqpXMKAY4B9YGCJBvvYPGJAwWQKk9a33EE97t9Gts2c5Ljp3JPbbhkghsWRWKpNjuFSKe9cY",
  "key9": "49N52TbmSqUqzr1qJyfykxHVGjEqUKcTbCWiBycxt53ij12G63FR26ibTVxijC9ZfT9bmnvKVAyywaDXNPFYaPEs",
  "key10": "4951cmq8pU77ktXUohgihCUqGoppfzvAoQrFKC916Ba9ymDSZV181TuziWB93PJVRbbGeGstHpqv7jgeCZZeFAbK",
  "key11": "9R3URXXjG5FnRfbXYtP6APVbhvFdPND3fwVvVzfECyoKTZ4QbQAZTWV9fkKnjDktbfMDxBbdYZKkeJ6a99Lr1mQ",
  "key12": "5VRBmTz1bDQT9ZiWwiEFvGXtxMbPVoBpH677vr6nQtymhBzt6iizbRrFMitzLmefdWUU3Avzrb7tt9aguEaWryRn",
  "key13": "4TjhH89U7epwZWagH2jezDE6TC8SVMGriFXu5DyMHZ1d8ixGmkc5ki2EcttybHVTRVVPiz2PywwXLu5HSo3YzpL3",
  "key14": "2RmFSkRzvEsHNJ8qqffvCbpVijHVCdNUTRFxxDe63t5g45E9VSWxaCNgRHbNWzALfDBgYmnKQNXfawFojbCE3wjX",
  "key15": "5244R2rfB1f6ogQwZ6patoNSzP6S4YsVooAdSTHPxMhN8jRw7orknVvSt7Mi4GDELT9UPFNeD9GraxiLbLZJVSgE",
  "key16": "Q6vDgGPFtWeqyFnr89BRs3ckrMzqMAteNoDHtot9cvrUFxy6ATqCjsURgLMLNwikzEpCAJChMGinCF7F89FHZhG",
  "key17": "4vrxpd1H3xDH3nfoafNkTZc1c9TaTHBwAJ6fLxwQQKgqpf4EXZkrmvhvKjbRHoVRtd9ywqVj3Lo1hvn1gDnpogts",
  "key18": "s8797EcUbHCBBpCxhoemQFJiSryNzSSDZm5LPxWocLupsNCf4eRYjBAjnQHtq8A9iUameeoXk5wczzMhHQop5Yz",
  "key19": "2CFs25j1QncX3tt1uEFx2EmgFx86WVHay3gnW9Q4tVybt9ckGbRAuH5TnpLbLuWtYziuCJnqGuEe2YFNj1HPm5e2",
  "key20": "4MogGcMh2fqF85Yb6FqDTVhbdJoVhk9FqysmoUaDEDKCwrKcXXmS921RWmUaViVbuDF2XJqTJT83hy58YhScqN2e",
  "key21": "33enkFrjqn2tu1a2ANZebfnvayStsh34b7pPP6gEJ5RLYAn7NeLCf1QHMXAGqqbonhoqo9peWiyVJJM7PLm4d5Rg",
  "key22": "2qccgiSbCmTT35q4Y4a3mavnnhmE8Eoc2nukSpnzVKqk5UoNUR79X9iwPzDFSDHNMqDxgsWdNRABYSLzNU4pfPTP",
  "key23": "3MPEocUZWt3bNYRg7BkdBiVPam3TYcG5ZnEq8HA1Qwf4zQ1pGepMdsbHthsz2hCgcFKtcSUdzgWXFtNEirug4Hk1",
  "key24": "2Bend5Liz4uDoyUWCm8S4wqGGxZqHk6D6GM4FynP137vxouQEFGaoivLWuHYyX5mctRKmpCYyRNdyAYKsntKkpS1",
  "key25": "4C8FctEA7as6XpFo896C29EcMKyhiFuXFLNvZ2qR78Q1Rg62QVwfnHCfppebBZd8EygfVAs2Tribb3AUzWCXK3DD",
  "key26": "aXeAtpbfdYuEoLdVuyNHDccY9EBNjcDDoXHALTkw4NYUNKJZeEm6c89TS6z8G7BqzzwKjLpYk3uDWzGbwaNGcLC",
  "key27": "3HvJkAGMj2GT9yRkqrc2ipbFSLuAy1uaUDi2qZAk3b4SZa9qKfmhg54xWtfdNfcet9gUTv5j7yX4cK7Mn2BtqCRe",
  "key28": "23NyiPcho578DjDsRYDbK9u4nYNHFXvVKo8gZSVxgdcqtFfWz1929xrcyZqNMC4eXFdr5i3odQajfkcmTgxBYb3x",
  "key29": "5W1FMk2CMLiL9m7jZ8a3TgLLHkFheurYWrg7v44qEvndZu6vsgHEwQ9RXJrCPVi9EeUoaHUqAmk1L1Qedegb7x73",
  "key30": "5u59heGfQR2wAxCK8mtk1XBeJ4JpbwLJmfwERfT2s7uvxw2NvUEDXi2F2o6WR7FA6z6MPaPwcmGS9UHaYDXYExFL",
  "key31": "3832EX3cBTdrCgd6qtiteNDG2n9YS1iqgHc9eTTwWBLt4WxHXULsT2ey1MRc1gmMLVwX7anK1PnY7Rgqgt8bS3wn",
  "key32": "jgja3zCAB4y1RUfpdoGYH4LmXtLdFpd2jEXaLgMghPUBBzTkoBiRh5x5s5AhZmaJBBmxd1J6keZuQfxZrbYbRcm",
  "key33": "22vy8pB2UYtEPMbLs85ovS8rPB6JK8g6CdofwSGeg9RpfnKEdVoLtNDEXsbQHfPt54tCr4t3qeocswgNeLK4d6bb",
  "key34": "47amDiT2eaWtvsojuwNXcceujtmuqbaqp94G1shSp6TshPYxFSkwzXHdNDwZGA7M4fZeKC4XpTPFWzbLQDPsH2sJ",
  "key35": "3Zkkwt7wmfoYJ27qJAsARw1VLpPnCiG4NZcYdi5wT6AZPrihtPaqjgF7HKxZ2USMoPm3KrK5sWuS47xigE4YZvFc",
  "key36": "2eWxqq5V17jguHckiWsHKwvhbJzf3M8MxkVrfqmbHgXvkULv8cdfv8ZLc68GDXpYQtom5Hoi81mMNSbNYJveGqhJ",
  "key37": "2e5rCVXCziSu5cXNjd1fqttYcTA5Ewo3FL1wnfvbaZCRvZ7kof7s7qqW8rBTTs4GH4zm5tZPFuQVW12uL4iD9cXb",
  "key38": "PwrSoFof8XH61rDV8dGVB9GN6qepNT2G5sMW5strj4tGZQ7GFNu8Dvc6pTjHswn8HcGUTZeEKdFSL2YMEZ4xX1y",
  "key39": "3dvRxdPDUpZV8srNhxTBCx5fxhpKceMXuQxn8R1cwyhU51Z8PnswnC7UB1H5EoKerZDmiYMwNue6fDivbrEH3wUh"
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
