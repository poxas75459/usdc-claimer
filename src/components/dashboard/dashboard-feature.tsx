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
    "3SPUEpocC7LmfhXRsd5yEXuNH1yXfx3GDfLpSj95XVgYCyiCKCTDbPXtCzzSHh3xFqnrtiSsLTgNzGP2udQaeExD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMyQgnYMwYamGbFd3jn2rRduwyMqN3Qt1V6CQh31cjbkuo26ubDqNHNXXsa1N4XkL84R5mb7hMd8Ts3gStbEKL",
  "key1": "3TiQnNRJXCZBDNrbstZVAKDtmftTqabcw2Cv7cGAr4PnzHTFTdmBhnPdtxBGBuji4VnyMVj1zdPmWsTHsamWsPt1",
  "key2": "3F3yZFA3w1Zffvz95p6g3tH6vw5HDCVJvBKnyQQbLLupi4JZzgYT1cvJWgKYdTwy6jrKWK54fmu7CKqZyVbrPWp3",
  "key3": "2fkiMcLpNne3pJwgYtpE4euQzWYKPXxJChvxwwsHDgMK3GXg4UXuw73AeoAh3z1vcRRFRn2QjsFPSCuzHdE2XSbb",
  "key4": "3EJ1AaGJGZVzzg4JSYrH2oh8NNh8rc9T44nCAuQefGbFvY9sSQvKAwiioFr5pk3NbHbUfhdqPtPVrPmegx4VpigJ",
  "key5": "3T25JKH3tvKnshRWgQXkxsDaZoj2YtoSNYug5NwJ3Re3h1XYyrVeffhKPs74rTeVCMi7bcBKwdKKNV7a4xDQ1eB6",
  "key6": "yXa9DPiZ9qZdfMim5byQV5iWWTVQxxr2oyKouoZQP93MuqE2xYHBLQjqdfmy5hVbnuQbvSJyAknMZmuPdp7he9u",
  "key7": "5Q3rPreRBNSfZ2a4TZz97veCH7xt3NdF3vgP6JiLHQPeQBUgaNssiRfTqS2zTJSSQWS6uPo9h22E5xs7hEph8jUR",
  "key8": "5KCsfGcvCKZwenUBxbF9YD1YX4KguyUwnxYqtX9jJNWDWBEc1YYmhHD1C1L7xkFsRUUL9reAfzsA3kGXpfF6GkxK",
  "key9": "PfNfzrNCZP7KXoJkq7an9q3xwNYWstyY7GXDSpH1CojaQP5g3puELj27yRLaEgDtqAQkoyqhXumRuCPTEKeP2wc",
  "key10": "5uCF7ZssENt9c2VSLAcQmF1vEkJucXvGrfsQSE6H6mZJKZFfHjydjYFZPnKJ54uasnBiiPsbtWoF98toG64p9xA8",
  "key11": "4Hd2FTVcRTFqtpua3daN611hVdR1zn97dy7RmnWp4RnQqJA9H2mPuJsydecr8kZ58DarT1axHwfkCP968QRoEoQz",
  "key12": "5L3Zp6Tmv65mhApnpbsX1R6jTKDSpY2uJWPwQ7VLsFfw1gnpN2z4EY5oMsZM5UDfeVpGgMPscRyrPGtWyyrT8c5U",
  "key13": "NmdcCRE9ygZE6NLxNfdW8HUGC8cWzzvVwGHyam5ouURgTCNnnbvomKuudQ82Vt1BgfMcZUD2772LVaKpisteju4",
  "key14": "4rVmxw5YyvcgDTmKFrrG5f2V9sdsCALcyEF1UhsmmuiueBtUjGbekwZ4b1f3DUmGcGRCrDL8EGXS4Y3HC3fJpVwr",
  "key15": "5ZmyL14R2WPJ7veGCZkbFoLTvMsTEfBaqqxSdDUShZ5o2JApMVyH3DAn8K4UtHWKCHX27chfwZFxGoQ8uLGgoK9i",
  "key16": "3mixvbQZrjqHtH6rseAwTJVhfhnng6VrpQS9Vn3ZufLLL2F2a1cnRMKtdvsU4MZTXUR6S5VQR6esivpftfbYkSPT",
  "key17": "4BZYNbBCJ2RoarzVxpELJ8tnv3p5Qwn8Gu8yL8aazjd1HdC1kQKBvwyhQWJAVmDGsAbjp3QNrMV2zVgXdNR4mW9X",
  "key18": "5ajLbTM9dd8vsiX4nFhWjoeeDY79qK4veRe5ojRpQru2LAs7Vrk1M1d2tgTZVz2rJd94b8ZF4Q9z43LKzj7RWrYN",
  "key19": "3WyqFXHbfKr7sPGVa4F9hsDeTHz4CpkJUC3cSkYnt7TLm3E4zoNfcty6tpdcLr4W5jMkDKNX3JgVTrRrUmtK8GuM",
  "key20": "2NtuTZtaX1TzFVWE1FraGcLVJY871edv1o6JLuokgF3vKMzwAceuT3fPaAKfxXa53smC4TE3aEvusoJdr7yaH54t",
  "key21": "3HpJbNepX4zfZBAo5qqjZHGhkRbnitBjSobjR1Bz2RmY9AgjpGKK3pxiTyEszePqxbiun5JZSKn33WFesTBBafqs",
  "key22": "2EzLDy6k4J8or8vTd4RP1AbG4rsNDTFzKbdcaW61TB9ESFXfzgGRu8DHWhUtv1dHHdk1KgJ9iF8jhN26V2bFmg7a",
  "key23": "5wHAMN7imzd1P2Y4CZGPxPmiJnXDHjQGzzzWCdP51UAV5x4MuZsiT4FgFyXg1JvaPYc7E2QfjQPDTzxFmnUwbyvB",
  "key24": "4g3PnBgKZq5Eq4bHCdGGfx4NvPjid4c1Q4YeMCuT6pLJQgLa8TJgSqWUPunj3HKM73iY52zgA3RZg7aqPoFp9vB7",
  "key25": "3YWHHdX8cmGQwD7mvXkyXdL8UePGmnaDoo3niWKAKqxvhAzytyT1j3vb1smici3BD55d54rZtkcaoDYKC2Yj2P7P",
  "key26": "2EUxKwH8hFuXSZVPhZDtZyp4iDPxzRDfiSStfsoovmz2nPwdgy3K8V1kNpmco95WjJHEAjAf9jxxnozjd3YCNsdM",
  "key27": "2EdKSTPL2jTX9nWHsQLaLk1rMuUiWVSpoJTSQTpByUYKZoBqNsiTZ5iJEV1DF4EgoM7hB8syuM8LkHRuJfWAxU5h"
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
