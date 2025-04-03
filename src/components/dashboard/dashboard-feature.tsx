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
    "55gAvuFwLXSZVWyLBEJxcN4aYPY3MyNmiPSVHUdbiBW2eFPaMnko8T9ZUn9SjB5tujMBA365yDQUnumGS3XnGTt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o7HAHtSMahmonYrxFarbwHu9bEyEBwzTkisT3PJk3fmj5brbpEYrUf9kTY2QvzhPaD3U6sSfK7Q6nZwXE3pbHfK",
  "key1": "4GpumeCZis1UJiUM1LzCcPFTyc2PWeFHsMibqbcA4Aydkzi7KuUBbAQtCP2RAVRx72hyw7nAaNLALJzFysSQvbQX",
  "key2": "2stzp8Bt1oeVzHJcYFVPrpkvebDGQ3VxFcGgyjkvwemMjxJvQVjz4J7BnkHjxJirdUnyBYXQruJgCiTA7Gx9hUYD",
  "key3": "tC1r7dGSfvv87ZPufDxEs9sig4GyawUu2ed5AFxGSwAVmGwJaQdaVGQZcpPsyQRXEbGvBagScVqWKb9rhSYY1UY",
  "key4": "3vBRiVP8hw7QhRNjgKWY3GRcvSotNXkEot46GsteEwgYCPv1mKpYv84foFs3zVasaRwxs4R3NeqpWRKSd2V3W5tv",
  "key5": "2uXpfwZoi43ZeLJgXBnbR46vzfWLLcmfrMXYrNzVNMuwnD64WBsRb8WmE21R1ZPZqCVbyPTDgWzFx2t8wquHPzcE",
  "key6": "2eD6tUVBUZown85GDFs8DEVzkcSXnfLgRihSgSzDKpKkt6MBwCiZYKBVrL29rtTkVgmZjLkKisWXLEyCncTeuK7i",
  "key7": "2zZsBB6jWDVTTewUJ4BYiSg6Af8Zk6FVRJS6Qk3mduiqfo8Zy9eMdzHzERjCn9VfYyGFkJG8DWHcJ9QeTaLfyHFz",
  "key8": "5jBSvP6CWRZfYUbvPGrFoWVNWkiM2HHdTHFqBqW7RXqg8Nhtt9ochusYMHEviyKpgSj2MJWNeSeHpnEsFXNfuiGE",
  "key9": "2qq9BVVK7Kq81QNqWq6QsNLu4W169NTgA8NpRJ8G6gU8hnHAu5tDDZ2Xdd5WMNHT9Bo6HMsyFLP1BKRyYnhoaSN3",
  "key10": "54vaNbdixiy61mCs5ibSoL7QwT99gWMESs3vjFb6r4g2hMZPPeo3U5ZqFQijN8C9nYc9AhbSzLTjdQuvSpZdqXg8",
  "key11": "4rc43ETQWGtZ6DFxoURLgrdcrLCaUQyFPZWeyCQEgnwqKcAGXS78zAr69BpfasJz7rWcyTHiZnLmwX9FV1XEe2x",
  "key12": "2pqPsx38DV6Eq2tHeETamsCRY2dk2J3FSoR2FGzEsqRo1wKvPW2aWXgaFJxafYDiG4kP8mpjA8gvLGdR5LgtRNus",
  "key13": "2Gd1754gt4YUL5EubUFtL6L2iGDroBsWfcNan39ikcFYk6AWUSMtC9BnXiNnX1M82utfJmkXmcxBeTLNom9PPRon",
  "key14": "4kXAv4fqwAc4WVGhVHVbmFfdocdRxS2K3cc9JRc9MeTJLmaZp71ubFCkB2ABgzgJBLsy9wKzXsXEmaMMLKuVJRV",
  "key15": "4KXD1Aau3TABWUsgm5YvsFvyoGqqc7hFv2D4ZeEHudhE8ATLNq6wXwyG3C7GNzDeB4WA723ZbMcQQkiZWPwijtwR",
  "key16": "4vE8EekWN9j6xs5Yb6MbTAvJZSgJj5XCrZ4qf6Er3dPJ45VS243EgV1TjPBzfVNE6ZogCH4QcLzXzvV1p2FwC6Aj",
  "key17": "42jwCJszhP78XfVQyEk5Y9kEfDQQgwCc1Ns8dx2BDq4wGgRahLjjWbHyXCxc1BKT3eqx5x64LDqntZsW3tTqgcV8",
  "key18": "2KQ1VZ3LvNAK1P54dyNSqgBghxKfsPg76KgshuJ25NDnAaFLCha3DQaza3rEVVjT5DLwKZfjA8a8kbNT9QhRn9Kt",
  "key19": "3JWUp1ASTFzcmi1LiZT21wSFCeoh6s9bmvWaTuAFye5pGMUdzjdjKSKPT1XVevKK6rLG8Tn2GmVfe38vgEjVbnHT",
  "key20": "5t6chMzui1mUxhJRifU8iGnxy1JhDYnZum6inBtzgp5G4CXN9A9R5ycWPkhJaxSWnfP22PQ6PT6E2mS9bQdAUDj5",
  "key21": "3LaU4i3CForoMaH9cbFtahdWBoKHkPVVhc6gAvnRSHTVG9R34Rp2LWE1KEGFXsSLDTh9G2ssSn9JoE3AjrktAtVz",
  "key22": "4W7dNKUF5KQCSeKBwzC1jxWipHhyRFfq3VfGQwxNPe6puqsVCa4Cwg3pKGTHTGXs6qWYxTuBQ4qUzBXAy3zyYpKM",
  "key23": "5WEyTQBWSQiiYEttzyzJFycieLkVuvR9dQ9sNqmUnfrQSfBqycN9fsrxxEARVr7KmAwpuqDr4S4MgT8xuKYBkD6m",
  "key24": "4MQJ86QUkmbHnfdirUZuk77iT4oQjVAyWuAC851SCByE7CwwMnhxjaBvUk3eKjcjNd4BVVXpUqnfcDbwkcZcR3Hh",
  "key25": "5oGGjhCuqhUe9J2akodwYjA7CYBoZL8Qb9abfdG7pMbaGTYhx6LViuF2352MD81c5j9PkYkRCnuFduAXQLx3psco",
  "key26": "RfPPjRiHCgQQUqbUXKwo6PurXPNWy7eVDZZhThtHu26BgyyGfgHczuBR93uwEQzXPxU9faJ8dDx1H6jx6HeW1bT",
  "key27": "2QFsnBGW7MoNP7CE1VcRBVeK9hodgdWyz4m1hNW6C6PZi9FX24C1cTtjgqDSuMDtc8AZoszfCSLPrTcgpEKiK3Sk"
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
