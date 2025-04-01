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
    "5RgusaH6R5kicxmPBdA4qqkcokHHUrstiP8J7fCF6CLLV4d1ng7WX6P38KiMWuWAjeJdWdhLh7aCJ8BFBBt9YP2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s2hay42pRLBLrY2KR1Zw3LbjsFVrjUusUJCRgsnyZetjp99bXNTMCaAVqLBqiftcc9euSe5zizxsixScTdWKmRv",
  "key1": "4ns1nEk7AhbcfULxxeCeA1dhos7LjRGYykPg5spTvwvjHV3h3GGeVLd1prHhpFFuTBPjR7WXHDLnPxZn9w4zhwmT",
  "key2": "3r89HRLoFcp5CGyyr1ztvM6WCNdFzf9ZwMwUEK9vzWmUY3pDtdKzzzeayfr2Kc5NhGUtN2TwB3qoZyDszpjy9PBB",
  "key3": "2WAjuPwZKPuJJCAcM2U2DAZMbhm1U9dXoxqyqTZbJgznL8VFpN6QcMnv6erNJHXM4LmoSUQce2PvknXDtrfA5PTM",
  "key4": "5ZvxqELx8YUsnxPQmt8WmB64PptVnTY8qGC6Gq2Kmgk2BsbBgixYt4FJ5StJ4ZHuLcfKQrpoC4MVm3rnYQkDwMPi",
  "key5": "3yo6HJFeXnrxdKxMSw4dYDe1M88STSWAHpnLuHLhka8nFK6vR6e3UYMWJDhoPY6HQPjLCchoTPsDRMBRwgvDDKR9",
  "key6": "7VkchdTygwdFKScvUTxrf384BicpoPUuAyvKCR3pmbHgFi8enaUuW42rdxdVP3p7vM2MBtLb783VCo3Ky6KxLBy",
  "key7": "59u1oHvgzZrqpYQeiBSXVpnDGeU1UXqE1cJ9yZsBynpG1xRQPZRPMDf1WPoCF4oVpV2a1mENcK9H61h8fnH7B8Sf",
  "key8": "LhaSi5ETqBfv1xNBJe9SmSs2P1Pgvy96Rwxtbes2RAtEKAYuUHMNN1nW4u7GX8W7MUSitckKChgTLNvmxnzxrYQ",
  "key9": "3TYsJgxtTMKdCAhcp2DRYWk3YGHgz6htzgoJK7svtzJXjHgnv2ZW8jPDLDwju2ajiXXMvNFTJPArXiLZjPSPj1Yc",
  "key10": "61cQzSgEezDM85JT6rxWc32bPe1aDApYCaxN6B3ZTDtw7Gm91rm9oaYrJ59f8JQ6WHddmaxNtBGPJtXjXC92Gg58",
  "key11": "2Hz5DARRxxKXRa3x139u1MwfGU4dZbXy4wD6pCx25y9k1Xt8AXGs8a7Z94hVs9PQRiGA7AvtcuYCj9RhULv4aaVd",
  "key12": "4BuGnSuChuJDRxMVDYwFvtyboVv9cvbgwjLtGEE2zACNLzJGBRMdAMfjC3usuYBjHW8YKyGdhaXuZEDBFzm8oJQq",
  "key13": "xJdkaJV2gaq5GrPj2waZjCKnCu5fwowRVqeK5tWpHcuoxuwuvqKTAQ4X3f6naNrhaxmQnm62ymrotkDuZb5KSeB",
  "key14": "4xFajxppeExTXaDg1NjC3t8EMtUnaq8bV6e765BDmJ8MwuD3BmasLWCoVC5j8tbCAr2mTcrtVKxzDyZMifKFLdBW",
  "key15": "KxihVUEEttdj6YZTeFzTVbDpnVMqMrzGaUuaK7oRXVRigP6XpwN3W9okgq3wvrmFWN4XEbCd5E4Vx88RnNhxWBn",
  "key16": "2EAwURyt6Qtc69S8ZbkxZdpMXSsNkQJtc3i3XGsZPTNLvnufACK5igCQn98MXqk2fJafBtDcAdNbc3a1o9hwWtbZ",
  "key17": "3ozS1xgjZDPbk6TZeMd9H6NcTP2D1VQHGYc7CQ7FGxva8Lv3Cvm5dfAjyK3DZGRix4F8fhe3VrDZD3yVBcv78T3R",
  "key18": "c7fzL7icC2fuDLy3p5oNCLMyzHkhwrE9s13oFNtwGbmazsd3A2L1jPgTCTXsfnewft1oTygieFmRYCohRk18bJ3",
  "key19": "3rgGJ88oXAyyE6mEqfoPqJoN6ZX2nyqTXskSoJStZ3kJ6xAhKawLeduCVdHV1iCahMAp1VBxfH8Je523nRFR6SUK",
  "key20": "41HSMgqABRqTkixWBepWo6dWX3Hnd6PyKhDjZ9wMGfKuzUWK6LwxV1EeKJoY63vTC8AWmoEFW111nsEhjbHUfSVD",
  "key21": "3PhF6bnxmcPxAvUesX5zNe5xstynhsw12k3TgyZy8YjV4Fz6nQjpc3kxxVgRt8cuWZLkXaSFpVHLNcmbr3eUvXXp",
  "key22": "5kg64i2SvXQ5z65Hroprpmb8TgVDkTKpGVSrgoVY6mkZrEp6teMe8fFZqdruxjECeLeDHisSDXgU4YRBQeXce22J",
  "key23": "496LwoTyy7a83uZ8y5YQhh6FKN3txVvEaaTMC6x6u8ApPVBhnyxN47KYCtVG2LYPkesGGpdC46V6sGRWiF7RZWp6",
  "key24": "w4ciS9kG322fbQdMCTnooEh9CKYzTuTDKY9KrWLQBCAMnqV9MRGkfsKpX6ffbfnvKpMQBMpqZbQfeh2vNBusPx6",
  "key25": "2dkyiqay68d3FY2QR1oN93Nc95Rnmjaq6qhvV5d2rREmZqoPnHud1Wc5kPnc1r7MvJtnCzV7KohR1DeYKAJYrUL5",
  "key26": "5n9bfq3zojPkvrNj38M2ZwvyfD6YhQ8kxeGkAdYnYuXCkBVVbNrLr5DpgAGH2hvgNXZfskBAq3g6h6X8RSGMu71R"
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
