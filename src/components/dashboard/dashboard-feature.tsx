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
    "3DN2sUgegM67EQoSKeN1diGngdS9qeVQXE2MvL6PWdwpAAv63oggjqg9TFAPCLVVjHM8rYcmK8gbLz4o96b9TvAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31gv6PJ2p4VHvnhqGrPPetCjPMftfGsAmahHVM3zUoRt9pk5992iXGFsvHsUbZvdRyVSNSVYjQGecg95csrCU2JU",
  "key1": "2saVi6S5AKGR7rYSzgCtK6pX8sbWbJxSQ4v1dEFgH5PAbfwmafd3ieRuxZ39wL9p2dEMzM9GyiMdpHFiJDYb5627",
  "key2": "5MAwGXpaYC8c6QSSE2CRvWd9iJvgUupvGDNUNypRDRWWWcDBeU27yvbc4rk32rtTwCy88nuaisGfPUuy1eoCTUik",
  "key3": "3i9FfTsq2qUZi5Nz1EqE2zrX1ZSFSvg4yevREu7hiQ5i9JY1oKwr1q7oVmfdhNMXMJt5B8B646XBn9N9Pr7Tj1t9",
  "key4": "48U1Qn1MmCLK79QL6J1F2fTFGnMEqLF1zABN48v46zUUbY1qRFkvAL9bc3pkKvDkemzxdjJ9Wgb16eeLBZf4UYz5",
  "key5": "4o2sgY6hX8kuTM4mCYrhUjZ6C4d7QM1B55wnZxL5rZ7FgpVNpKN55qLPNxB9iBNWBdmvSKvFAyvvgidiNerdoCwZ",
  "key6": "3b61s8qrdGnyKygHLgimZGCkfunnQ2j9u8pBhX6b43D7fwzTkNYDtcWnaZnCVV4n6auQ8TBmzVrmBwamGZmQpu4b",
  "key7": "5P3BvU91amA8FM1dx9hypimrvYKAzW9oXqUbSJt7hsxAaj8vJtL9JgyDASA1BCFEzagnPqbxt8GHgXCVcojH9PWS",
  "key8": "3DRfiime13vZAhPfVwP69jrRmDH66GWzjtjn1L34gLh3jHuPZFvNGGcdUitnrBVmURpU3S7GLFv6dssYBjwPCoFT",
  "key9": "5p2YsWYyW6Vy99gmp8mopg7BvgiK1RVzQEqRuAafw1MP7CYzFVhVnfA6ckimd6KUmypbxR25MV252y8i4GAev6Uk",
  "key10": "3hAZSSsdJf3p9TCezDWgvo87uBLJHWseu1srPGPeKZd7iZ3Mq2kKqiV3VotY1AL58JqYcA2XiBan9eTLehMPs1Pa",
  "key11": "jziLh7bGj931fAn5LEJBk7N8vacdg7WgporiR4nJrhWmnsyswpwvxRPuWKeeC3BiTRmZibE1yioEhGWpdr8gd79",
  "key12": "4FfsYt7FpNnbpcBgdwrUSWeMvkgJVz2PdtY6fuHdTsKtWMhQj1Jrf21zc4aXwXM7CdJdYVeXwJ3wM1S3srZsZ9Fy",
  "key13": "4uucDcyhNCwJSGsgM7SLX4mAXRz6wcCSim5t6DGYHgdFgoftt1PhdtPvotPiSpfX3bBXuPwsFpTQ1ZmeFBQS5LE8",
  "key14": "3sDH6XVJHXT1wdwhAvoY1ZrXUTGu12NWZrjTspiupCDyFa6QMwQagdqDX7wrek3CNgv8KLECwrTqTXxcAAp3HABT",
  "key15": "Ao1VC9eGxw1gsQH19be1jfy9YcH5DDpjuF33sPU4KttgRJcg8MWJf2WwHYsNZqHi9Y8A2nyES7zBxNAFRGpyq26",
  "key16": "emzCV8iVcDtoYvq7mf6ByorL2XKZMrxi49VdvXZxEcXdYPRjVBxLtPV4qw7b7nYv6G6aMxQtepM4yH5EzeDJQLs",
  "key17": "2cVpGn8FpiCib4m2s5hHX2n2DXiHamnJu9J1RHwTunKZDttP7PNrY7oLQ36XSbYDFSSgUtoMCqySHkt9RFjvyEWW",
  "key18": "28PAsKTtjhVY4PRR5QD92tFiARmN8NQtKVX8YAoqFqq8K9kPL5mgZCr1mGCbtrasycgH3bMyg5hDqWzwGxds4CiH",
  "key19": "3J5xq75XH7GXtfNZq5oN9DSN6ciQMdJmsLc5mtdyy7guQX3TWhbnmfg3VMhq8mhFZcTwRbKWiPWR7go4mhZaU9PL",
  "key20": "bQDtzwfYzikYzYP8pnjAFp7eCu8VMqJgCGx6yDiidGyrScN3QzhvW4kCsqRk18SMUhnRdmXwsGEYP82uDbwum5p",
  "key21": "5M4qHxRuQyjXxtdfxx2f2aR4ybgUkyLjfEcv3qh5hKkFbXVo6fb43TYSV4rmzggAWurxZSCwcSQTuLGx1y56RsTt",
  "key22": "4RMVa5QozM1rp7Kitf5vZhoJxvSuns5binwzVwd4EHt5UVNCqhKbpy2GgAGdv2eX1PmvCVgF8kWopbHQCQc7oSFq",
  "key23": "5s7stqLeQo6DkbJ2xnaHW1Af2XoNwJgTAqyHx2WqR6iyg1WTNuhhgJZ9NdLBef4AneWzpCGVqiU4EtgkW793hVHr",
  "key24": "4Bz2CtaEt8Ejx4PiFUPAAyU7YV9U1GSdU8ez6WZwb5JUtT6wqPoEsAQrZpKXBAaHk7UWB6NxEW6noacUkoJH5Nm2",
  "key25": "2mTKq3Mz2MZfxAa7nhoTQ3hNWj9Jnp9KWkS8zUwrg7usUMViZ55e8vu9qiedbXaFj2fqtztajuH3oxfBQpeUjtpX",
  "key26": "2VXYW9qWJfCpBo2f1C8eYhy32mk9mKbz2WF2HwzqGPHB6CDe69ViSDxAnDHe6zZjgogih6t3FXLbWV2J4JSWJFKk",
  "key27": "2ovfZvNejxDsGpm565pkAqjj5RvGUvbDrUdaUbzh8nTXjUiZgzLdRDKPqacBCrZVjqDLnTVnA4yEE1txHU4V6STW"
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
