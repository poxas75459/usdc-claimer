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
    "25JberGjwFiEV9NVHDyhK4Vm9Ev9U6iEkgAUngGUait6CUaAnhsdNLNmb36HrRcbw9ADjMVzddkM32u9anngtfVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WUCcdqUS8wXtejkvsW46AtZnifjx76h4tEzwHixXcpTSa2rcFfppwXPuWvnoa4ny1UNZSK6efHnHA3mqPe1fe95",
  "key1": "4YqJnCycTxcjEhb4qtBXSksZ6QYhukKbun9uyHkEHFZ3Vnet6fVanvT5z1KWdCXPCNkNpvWsHCPmYyhLDNhrtWJ1",
  "key2": "5uNSnonPPgFW6JSfXcciQrFxGH1YuowUF4Pwv2FPzrj3AavNMWvGztPA1RKkPJqNe2u4hp6MhBZr21gCic1p8zKg",
  "key3": "2XzoN2sbe9arsRspiSGqUKtTFS7cJVWYhhSLXm3DjJUDhQxfoHn77YzpRNriVhTzV62Qq1DQRUoXHH13Fcr4q7Bz",
  "key4": "rhn8oDnAnQESFQhPgvBrvL83HnSWsvNUr8c7uXd28pZbgH6hEYep3X7J7hvwt7XoJprQBhoq9XYmumhCTQyNhxA",
  "key5": "561FCbPiNbJqUfAnu9JJfpG3eWutcqtHP2SKAnQSBiDJW7zrwJQjnx5ttX3JHCEggE4oLQnCN9dmj7P9pc1MSFZT",
  "key6": "2yZEtP5PGbQEPRfhHFFAA15tgg5A45mcxFJ4Do9wdHbGahGe5dm7EZhimHX1gSexP3NcUHmGhobG4KVhvCdqigrm",
  "key7": "2qm5fs6xwux9XaymK3fvMj4s5BkpLVxgbfKCvH6jHW8fjGy4ht7ZHiikasn9Lz3KXGWY8xscshv6ceLL6t3DaEyi",
  "key8": "4aoczSd6h9QNveqkPK9mysQZ3d5HzwEBccGA8AogZKp4gYE4T61R25kmdaJqgycoaQVYtq2dbX1KGaB1L4EvBWcv",
  "key9": "2J3i7qdZGqpucjUKUuyBiGPcCJTyN7nSkSCmYQ1Shmztoi5xo274qHLsyx23FzqmGjreEk3AzRyx3AM4BEJDfb5",
  "key10": "2txMMG7WUEATP3auJXgy27FqQcgQCJZ6xGiZHD3C5xWbxyEhEZWzDtfTrEXhgre281Af35QZd9MDFvvshPA9j1eh",
  "key11": "WskHmzdFPxNLDT6cMop3XfMCHmsVThAj4Dx4DH1UbpFV98U6y6d313VUxaMz7SFNFDRbnVTvBWHHb2D4F5SnzEr",
  "key12": "5xg67pYk8yqZCJeLsAS9fpkExNuAMS3tGxFYgQKytb152pQxbg334afmfpM3uGgKUt8URLhyNKLkERDNTAJv16GU",
  "key13": "4REKwBeJ3YAxXb1LesJBhNdKjdavVUEddjCPrxiQQvLTxzuZR9aC5YgcfQc4TusVPtC9BCutoX6gmWdW6BfawW8Y",
  "key14": "5PQczDSdp5YHUQ2Ld6xxRuqPfn83EKX7mo4SMsiPwRhjy6xCxRhitNobL1rR4Acwo4LUbaT8GrUVKrrAgk4irjmz",
  "key15": "5f8qtdx6HaGnXHw2ByJRABtWTre1YFh1eSd6z2Donu8VPMeDw71AqvhqNjQyZr4n72PSHfbYPAUAPEj4ejWkRhgJ",
  "key16": "2vecVhdc7ukg7sS7pwH4rquXnViYRUtLmgiQhSpL4TSW5Mz7RaPwMvcCfQVTaBvpCDNBAXQNs7rRh4JxRJaxb8H8",
  "key17": "3tFFXZgZaxfKs49WtrNqTVukp9A6eqH1EsDuAEykTeozmpBGN4ZcneQC7ef7HD3jSxt2EUaz8BScdJZjwoJWFbQc",
  "key18": "3b81mgAAKibwXNmLcAdsjsnJ7NCJgvq6m9BznGLEy5nHqKA7Z7t3o1836uR1JQzY3a3PtsTUQZy8mRxfC49Yd35R",
  "key19": "2WgwVk4TteJgM63XaZU8iBxkEYstMTpjQVnWMvDhCoom8xmHgjGGVY66WUq66TMnhXBMeVwuDr4f57KrMFPTUjdf",
  "key20": "5gBuD4t45BZ1BwVUWGAtRcA4Fqp1n3MoGmaXVvWCTKCeUcAFjsJYfkJikZQ82b2J1qHcFkyo9j2CjzK9i88oiWkX",
  "key21": "2BmccNq5v4mS6uzWp8rwNhmSEdTHViM5pzf5asqZG4p2F6Mhp6JvriTDwBrhgDLks4oHeapFPR6WDYC76MJ2jABc",
  "key22": "5NKEjfToZPPKRYDZZrAufz8zV1XEifVJBGcZueiVVoca8pq3KaZ9VRkmDe3RYg3q2SthAtQAchTUXsdzsWKJSxbi",
  "key23": "4wDUHHJcpLJAhHTbjE3QjT8WeGUnsQ1fMNmhMNvNF3oGggmfRYERBCvMo2ceti8Jedfbeqx5TPyEHc1sfUXA6kQ",
  "key24": "3XgB6rfkcwacjM1u5qCiHX38aJXtYotrbBoaVBg91zkM2BXJcZBKNDTozhVHdKUo764HU4cV6Hi9hxYjD47bG7w7",
  "key25": "31PwjbgDwFKjaQLf8LAVeHhShju6dEnz3ohagNcwXFHU7G2d8QSsBgJBa1ztaAptAcbJDnBzXnXy4qZ6vUosJZtx",
  "key26": "2qAtUa2pVCEX9r6JmMFqu7EAgDxbiiVN1rUSUK4NnvWtu2zT5bwYRyZjmytCawyE9bL5tgJcRGagmgbHQWmkBBYR",
  "key27": "8WvNTocoYMWySJvvjLZzcZXCZSAHUm28yMGatwNQ2CChLHRKbu2EExwnakjsezmEaDSpeFAcBiCE9ouBHxGzuzJ",
  "key28": "3Z8XwkkUSDoB4jNWdETBPsZJb1QnhCAzpzKfYtgxfVozgQvjecLndUN76JN4VY9M9EsouytrN1unBNB4EaSHB6df",
  "key29": "4nczrnoU4Rb5ef6ptPCKejhstDDNWTCkTyiqrS3ex59PYBsErW7UnuR7iu6EScnNW3mk9aqEn9rGihDU4P21DJjV",
  "key30": "nGpDKKCigBZi6oYhgFffyiAZv1ZA6yTKwtsAnsiAmRdKrmCCVEJxtEZXauxBposn2SpXaUQtWC8CkMh6dyQ66V5",
  "key31": "46FgaBxiCBHbv5RgHi3cadakdvYQCbXHDAn7xUSHLSjSToNzJF2E8ZbawwmwEgLpLQYdDPbG1cN83gZRD9FoCDYh",
  "key32": "3piC9NQnSkozhLUWvNNMCeDVnDUhj9HGpCcgo4u6AawXgmbBuf4x83ZmVc9uH4qWYAfkZVjsXPr3bNFWQH5cqEqC",
  "key33": "zi6chjrMqwiaNVbdnPb7L4qM9b8RDZuVpANtGMPWCyMVpU2xzEgdv2fo5W4r4Yjy6M26T8rjWZLRLacp3NFXKUQ",
  "key34": "3obs32fAKfF1DyEPTE3JvK2j51ixvT6t4JjSwrgcsmDgxHy3moApTVokSaeURZZpXgEbYTur8MkVkNviXUUoPU5S",
  "key35": "JdEuxfMFSAbUMwK84bNiPwyhiS9SHzgEVSbwwbSKuDJDm83pUPsGibMVA5y75KyJFV6rYaazk7HuAnWe4aFQXSc"
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
