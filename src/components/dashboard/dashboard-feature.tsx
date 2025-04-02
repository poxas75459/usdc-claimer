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
    "QGmYk9hcxtN5JpopF9a5CArPCQZX4vnnZtxLY5dsgfNBSKf2YSjoXmbkb6vNt8c5J48oc3GP5BSBa96xXCW16qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVj3YAqmCXz1GR7csXc5rLsA6e3mzBbJvPb8fjsXBPWoMmdTDrKLSuGwdNCywtYVUZ1ZspUiRUsTKRyEhQLKLvh",
  "key1": "2n3LjXjKn1feyMaDcZQxkp5dJ1xJi21Se2WXhMuCcvCuAD9tmAsZgE7f5NMVCjBeqU3L6uE1p64ehjmwwbeeag2U",
  "key2": "3t1U9iPukGoFErCzQJwCY3TL3HStTyNYnzdJs2N5wWUrYsqqhuey1f2Jz7oYYPAy7xsKoiTEuuAu82jUkok4gyDA",
  "key3": "4rhrxwVQysLTBkCmiPUfnNzo5qUFqHz7HPtEmsxmkbMqdyZk8UEfmadn1zspHqLgyRdTLvzAYgpzvKNCroXaa6hD",
  "key4": "6422zC3WDznZPV4biekNMupzmpxCQFsbct8ZAbzy95koxRrWev7RLCoFkvEwXuRAswT7MYwiLCFHw95kmGNZsaf5",
  "key5": "GMmGP92udHWKcULdpUELDgL9EBRPpJv2YMXvgqCVGpF6XKm5rJghU9UyRb11Va8Z4Z2Q1xxP5m6HbpQ6UcUHzTY",
  "key6": "46e5aq77tq9Xuk8DvwXmFwKpMbFjPhATrt3uYK8pAxNS11m6BYj3dC8Zeof2nLrBLMHwzAsHPFAtPAgGvKXD5zNg",
  "key7": "2zGT91wVpxrC6DNgPpicZ5Yi6ZQ8BSdqmefDA3h3TjdHdtARZq2AaprbvQ6nYxVrUpsXCPgFvNV5bhie3qafjvvJ",
  "key8": "2qWYdYG4NwdR8zUmMcLejz4CQwzTgQ93fKT6vC8vvmnDF59T3vrjK2kXHjs9swykbx3Rtr7xEgay2AtiDErpNk67",
  "key9": "2izAcJg8fZ1aNtvK7ct8moFze75Cqw6V1VjvmF5L2g9WWcdxUvzUo3uKYGmvSoAYbtL93jBL5J592S7LZJGbXgoP",
  "key10": "axMfFqs3RWG12HEcZecyrQXGYbS3gx6APZiFP8tdyacMP6jyVKsee2dgJgWtFs2bJgZjDpZDFLudBSkv87NJwtV",
  "key11": "5jHrs2Vf2mqEkHoivTb9bBRgsCkZ6Qk2tb1e8tSNWH1veZY1wkDHgWPTs9F5f6tV25zojKmBWwyn2UfPyuEtbdFp",
  "key12": "65HkvEGymE9DVCw1jojywstuGEMxAiuPzAVvW6xzQXkZLzZsgv3jci7ofzfAYZ1PuynC9tvVHx5t8tgv76iPdexw",
  "key13": "3fWkLWbWyHeLMYfxjX3en4YJ8aP7tUnXVnit5tzRegpGsB637XkrfbJJK5oyE1kDwsLFgsHXArTo3zWTsNme42pj",
  "key14": "514C7ZTcyoiwfJR2FHJC5ZDpEFr58gD2WrAftpsLLFi85YBPvHsxzFY4X5TMUjj4gyM8zWYxTQGxjSw6vzKqQYxd",
  "key15": "2su3YvK9HhkGk43tcttwQfzgLv8U8TMkyUAHqN6jeoYX7YqscxYKLiro1gWqSDMEJeKVCQYHEomYdaE7KsJuB7SK",
  "key16": "Ncs57TpD5ejF5uHd93a6d6XhUG72FfsDfR5yLRjpahfs9mBfoRDaoesrGoH36Kght79vhRENtWC1S9rZ3Kjqcqp",
  "key17": "2xdH31FCKSwKoup75zxmqfEVXCiAvUk4C6aWfnv6GiWJHrHyhtVuqWNAbRQ1yrL2A2JL2qYqDSQZpKn4xpFxc5r8",
  "key18": "5oK1pNHHdZsw98xEqbnSvmwa4ubGYJFqC67jJj4uQd3CtqhrW32qkYCzMX6HJSnLcGcSHaMXmBLg8kswgb98uFRY",
  "key19": "2DyifuQWM3e75DSgKJACEZ7gMauQDZduFR8KF8nwj2TR6bxy1ArjZbH4iosp2vngAKmm9wvrNmfNn5GGHe6zcHVA",
  "key20": "4AQ2eJN3obhb6BFQ8VMsLpazK9evQPaQXWHcMafEtQsBM1A33ne9A9DqvijgrcgeH8MnMDroirNTqHZykFbwbrGP",
  "key21": "5dmFqeFngQia84McFjJzoWJoxDeXPxyHKpetiH2QQbgshFPYLhQskU2BAHv3hyLYXLhU7VNmQ2AXeqDGBgcWj6mD",
  "key22": "taxDdx2cmBjGZafuS7btYbthK4iQZYcgKwBY6HEC3xzRstW6LptKF7DVpSWNGymj1QMNEupC4u52PKD1NeR7Gwz",
  "key23": "ekDYZMi6mbsD4iJ6q4HnjYs3hc1Wrz5kD3A7Diy6wo89wuoteCksNbo89wtWvUY79Atzg9bMHTPRsF2Fp8eBEpq",
  "key24": "5s8asstrr7a1CMY5Jzsiz8ANSdZYaKcXVirBt1gWLuA82BjxxtYUMUXce68v8fsqwkLGAPA1xiVy54wFSPGMKTDL",
  "key25": "3S2hWmUGaJ3KhHJ3dCdzE8MYLA8Q11E2EXAP6waR8ZpG66ACeZkaY2ouWEoMg7Q11fqSiTahzGsuuuchqsVtTUHc",
  "key26": "2r2JweSG3gQMBg4tM2EmufW3nqsmXw8MAbP1wiCE9vRX3K9iR23Bn28Su3FM5P8p4yqZkwoeFxLLSnKWRvkZZFoQ",
  "key27": "2Hg82xp6kERPJ8wfW38GRuVBAeHjTLLRVdjS1vAyGAmj9CExu9jzSaNFx6VeW3x8crh5FNeaWv63Nx1arm5rZBVp",
  "key28": "3roSnideRyzEbJFPH51eMDi2riWH8rxoBLJMGFj7Ejc5ZQhJrmGQYYHjATRVxVAWJHfrwfBLw6bhjZGPZ863KH5C",
  "key29": "2fxCmbdJAhfxrZ3pFWShWwYMLYcNcroE3anM1YfV9EEshMKfDXA3u3jfrfMUAMR9Qme3WvAskjvgDk9nAE6aY5Ev",
  "key30": "4e6UPaPom5hzRjoQ27oN1PQBUveQyTi6sKhChbMoxxewcxXXUqbKATC3YoeHrXVdwn9QSnCJdL4UV4bSfAMC7t9Z",
  "key31": "2vnqf7j5bkdZUTH8DAB4qr7GQeKvqjmGcvXi47WQEeNwxzUuBxVMEHgwPKyF7aXe3acMSnojxYyFzrGnY5mMCn3P",
  "key32": "2pePWpWADEAeahTnjz8ETMZhc7xCofJw1izrCefswPDvgoC3UkDn7Hdvss8fi5WFQapgo6UtGTAAjveQvx9ioMZf",
  "key33": "iExEUxXyR5KWNmPszjd2RKDCA7kZq4AJc9Tx4NjicRduvaGvxcJaVp3skTryuwcXjqfLyAQ5AzrM9u5ZMRkn8B7",
  "key34": "oPbBDd2vp8vt1oA3aXiPVuSLBCvBK9Dc2csZswriuTJPJ1bk9KpX938ThqvJAv4VrWPbfwfXtPVpjMcMQtpSJuW",
  "key35": "5iVZEtZ3tQyXLa4w2qQuT4U1bwRavJ9FuY2XaRhxXpHUg7gCQHp9dMWsU73V4yVyWoQFF1C73WbAXgGwBuMwZjzi"
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
