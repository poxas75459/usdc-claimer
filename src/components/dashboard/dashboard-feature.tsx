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
    "4Axvjpx69Aisr8N6dZsLEHn7p4TUfsXPvyCPGGhzUqbb6pAtVSHMvniLAfUojHN8bouDSTUrs4sa698jBBkGF2vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FrcDs2At345CTbrLtybiYU9FTU3NMwrssQdzMirzJanYXPnryqH4b2KfptuKvVs3HTAJeYzZeqBYSTQ5GSncXVW",
  "key1": "5YpG82osXZidc4uZaHFS7N3XLsViWCAqp5yZ9wJSDP4stvpDJeU2WSpH5WBmenBEyJ9Vq19kobPX4uzpquEt1ueg",
  "key2": "4rkeLSG441xdeExLv9NmcGmbjGaYudotMuNZe5ejz8pwyD8sSh8vJ4kXKLyE4Khy3vSMNcDp9xfdVMiRkb5XKAaD",
  "key3": "5EXE5XTRh4Hsqrrop1WyEpCRh4Uoa3snugpJPfqwbjfLiBGez8JoMwrwZN3jduLBUubaMXZhCmgPSJqGL5pcPbNc",
  "key4": "2GNpxSSSY3scDpxp39FmaCtbKPG8uaiMmyqsjj1cGwJ1mhj9qEZQTcdr6XC4X9bEtGWSBnfQJqoS1XLu9NFWvqDs",
  "key5": "4be3dt4AcperR1AqRz4ve2XLwzkgWgZevPko7EtfzJGW5Q6uzKFLSixBc7ySpwyZXRmhdMhd9ujb6ULChMGxwGwy",
  "key6": "3NWUdW98cRy1RGgFDdv5wDk5QUCyevVaQQ6g5nY7TxZvfaAdC2wURu8WcdfC9f3c4QePsSipr1aGi1gBbSoVC1PW",
  "key7": "2qjS4uMzpAZkRkK8JqfzQr6z1FauT9fWfhQ1R5a8L3ETv3a6LqpmZDLg4TS1NYNAsNfExRwKcqhEz7CYJm5tWt7B",
  "key8": "2QApiF9i7kFXvmxSNZwSV2zHwafGGTnpVUvt7JEeDPyDYNZEgU835HqBdekQGkP4N7fBAxXWLkhBPQqMBZo1J8H6",
  "key9": "5uLTfYxyPLmNcawuzc1pDBQYKMbp1fmQQqUoHewTK7y1vdmwpbod24TDKCBHV3viUYpxgwzbHGXuLp25ADnsg6qK",
  "key10": "3rsLo5hqHECLqf7XeoutoHL7adCT6UEhsc7T2oswQyFESgt51KZADsNH2CzsNRHciscd8faCJG9uZsL4j9B2dccx",
  "key11": "4fsXEjwJaRfjwzZiB3hLhiB92j3wTdGvRc3D9YYbTkYrNZ9ZcnEAq7LRyvWnFW9bWqmq1haS4VSoXjjr5YHWtbRj",
  "key12": "2URgJ2b8hJwMgmKf28Dy5sxkHWxoBkVwd5Xon6E7APfzzq1tBHocXeapWzGMKPb3t6zykSjwKQnANfzZJd9PCe1e",
  "key13": "586yh37kfa4nM5iVYzXeLdPKMusa3ppU11WTMDzUpMdyXWpCuLEtWfDE5BgXKJ2aqC8AdwESNrLitJdYbKC65sbt",
  "key14": "3JxFAiGVayZ8WLEYvdP24CbNNo7nusjnXSNFA3TYcMMzxV64CHm6wq5Fn95QU2p7RFbDFNc6yiikMqHqHUV5aFjd",
  "key15": "386t9Yxrudgnzqw9FrYhcpJPvvawfKwyruCooh3xkCHEFQ51wJgyFWbj8uRMu7c34BSVTYdmn5vTCMs9PxHSkdKP",
  "key16": "5sdvR2mpd6zzj98uY3ff1htkizbqyeWzUenhETW25wiWw3uJoQeU5XxZ8ebmnbcHPzTon71Xj3sfA5K6RfEBJ87a",
  "key17": "4gKuyQHwVrkvA2pWk9yaT11pc2j661FrUtKLDG2zHsPGo3uPaR2yRoNYSsCAuJ6YZWcqDomjuqaXZqqpdPzvjeh9",
  "key18": "2XhxkBmc1T7f5G5xuiTojHLpcLgsjNohjQLusBRnrkuWvce3UJyszaCPvxaT9PgS2BAd5Prxjra2BVnRb4w8a4t3",
  "key19": "Qqdtx8cYe1omVvqBr6cCJcVUQ6jK9dqdJtU7mbpfhMaWkDvGVEveiebAvdCjiYo3nFjgjYdGBgLvV5UGhcFAEBB",
  "key20": "3VGXGmubgjhwVoW5mH6sY9XL7q6tMnVVE2rVMhKyi5XkMU9pmaimRUyH7Ecrco68YrA2S8qY1o1MkpEYFVLkAq3y",
  "key21": "558CSUvfc6Tva4k7VcLNA2tg4Tg2c2rgVMvt9rytWjPwcJUe4Vg4VFQAuzPJRwbQboyaH2gvx4DHyocbCjTqmt4R",
  "key22": "3Kys9d858aDsDq9ozZrE5QqLF86SsB4nGHYdeZmwXCzX4h1hU7MhavPttQXJfyEYtT8sUFLzKRcqXXQJM4PpsvBC",
  "key23": "28kEzx1NiEEdCdKkvm2dkVxhrnWCZfqFXPLiMGi6r1WVVr31bZ8dPQmkddxASxQKeZyhJ3g3uqpp4hDrRP3o1bwz",
  "key24": "24yTEPV9JdjVN9UxkgVAkrXpnD36i9rVADAzf9ASH8WiKXXgneYZZ8KajvdX6Uw4pZLks1DMTjsEF2NeHU6Pmqpo",
  "key25": "5e7gvbuZg6ucEYC7cyuFcy8HbuUoScP91mNhaDhXhoQK1EJWQfdyaHDDf93v7Dy5pD9gZyjXahG3aYzt4JYxsikQ",
  "key26": "5ovJfVAGeL7ZpEPZthHAbkSu7UuRh6NqnreCthVMwdMh9LxskN9gMxc5pvjrRxUxtP6Ci7dxHiT2cx9UfAH9RaQr",
  "key27": "4vJYc6KqRxoqb5CLGwwvYWL8WP4EYgMDJb2awQKpNtRSrJvnybUTVuJoHYSiAad355TseHHLVPePRVxfGz6SuUK8",
  "key28": "G11wTny3PorjXdQUWWyJsWzVUUFEcPNgS8oX7SonhtiVY9UXpbq635fNYh6NfXT8bNjbdoN4tydgvDoKusEfvK8",
  "key29": "2mXu4q1yLAufhNA8h5MmGeP3Uv9qmXtYTyPNdaQVPVah5wvL3tu3LbugcEiNa7Th1hor59eqpq5wpg5ksYYZAcNv",
  "key30": "2D2v3FfzarKXHF4DTVCsTFvHhhi9oFCyjkYHswQC5xHoN186bdoNaP8Mh2YFxq4KsNDhoChUJ86rD8YwB39dwVHv",
  "key31": "2nUw89vr8AThM4vEGcoB5XthTYRfUSpkctNpK9PLbkCdqpRwZEdpPUUDYUjp1Xo3AousxGHrmzsBMBbWZnoXbDW6",
  "key32": "2nddk7SAU2a1xVezw6hNFhsEPbcMDmvUnSbpnQHkY7yjyTU6Lm3jw4SGs5dHs5KVCEjMAdCxcQNEmPaMcRfCEL4S",
  "key33": "5QuNqRjVaE2WRZKCzc8pCcDo1Z9Fsfr5td3sk2Yr4jNVux9twuVyx7FTjmChsWi6NLjLxe3k1mkZtRs2Lks7FmPs",
  "key34": "5fG1XQYVnaLkwRZmZ44aSJbvBvpmvqYK226Eo3vbJ1m1F8iwkFccg6LdeyXU4KZ2Gp1eruWL57gEhcAo35BBxYWb",
  "key35": "YaHvtUxY3W2M7gJ8ogDJWCSdei2pu5ptcjDR4swJo5q6egcvgVefbZMyVj2jJ5AX1uJobxZxdSwM2EXgD4XQpsN",
  "key36": "5eBnBzpWf1oDHNv4Qp8yyBfTAMUjLmmF9QWumoRauvyKHojw83Bwwn5GYM9MRGoMFJ951nnU5Nza3qDuhTf9WRiZ",
  "key37": "5jbGSVorn9FoDTbUWHLQQNsm5rzparCCjjNEqLk5d7EbSZrgL2q8ZpwZPkt5LsNKFptZwKLygZmxxgHAwAVTCr33",
  "key38": "2d1HoRb8xS3kzXBDAwMsc6g2KHb2uMwfEecfpvU5NMLsM5mtYNMsxsz3aibaSAuAcKf2u94KZzMYpDHJuRjyizN1",
  "key39": "XAGdejNS1uujM6xzAssfLknDFPdaFZvb4JukXgWbGSkUdgkA3kXoMiom2pRdfoUHAbZG1mnE354X8nj96FDZ8Gg",
  "key40": "55t8VRzDPKQU41m5Z5soKcrS4bV2jZjz47Ft7GVEjngJDveJwNjvxEFAhojfW2CpKMSeswEdzjSTF4ZMShYDTzMk",
  "key41": "4erMhXFzRdKrEBFZrc2ZtJMXUPg3vK9vPKz3icPLmkRgdDvgj5GKVSXBtBSKfgu8xp7hAe6H5nhYgNErBeXbwssd",
  "key42": "5LZPj8v9hDYXsrDcMEhSgAhp7DqT2H6Wg9xpewypQ1nLH5R6LHgzXwFWyHBmmhrQzBNDzi6Fgpnmgkgd6anUyt6h",
  "key43": "3atSccSB3aWrhpPz9YwzhAoDAwbhXDH465ToXvC3XLKqPX5Hj8pv9yB1NLsNK6ncSF7bGNePTge7EdtuqBp9AiBq",
  "key44": "kt7S3XJQ3sfScN4w61BQkNjVeXheUr67dFyZcv5MDq4BHSEG2XjoLxRDMxtsChNoz7iAYtho3tV8smhbP3Wy33A",
  "key45": "TA7cvDKQMAavuCehKaqhESUQL7JofofccdLbNM9FrLTyXhoAa89dAQbRvuUZLjKxMG8fmzMiruRLWhErKQVSpnh",
  "key46": "3TE6L4kPSshLNVXL63mLjXzyKTWVEjHhtLgq147LZChX7w2oY9FZbfMyFq6RDxbRhicrNLbgdwczzt7TaksZpasX",
  "key47": "36WHYicz1Q12TPXEaMJCYvVJ5b97RUxP4ErZCFqbKfVYBWCxjf8mDzyjKv76igepuyGDXU2FNknLgCmN35Tqw9Kh",
  "key48": "3NUEAREfPJzCjqK21Q2UiifZj5MAEqyDkuPF54RoZwWeUCCms3awGsSVP8RcbDHondz8NVK5DDRvGKwgCZPq96pm",
  "key49": "2f7f9T3zrH2FUB8dgtPxjRdHNVkTzBuSPh9FiiEPvL2nh1XeGY3aZEwXKh8TXQYZrHquMV45f4o9Fki5TuX4rnjg"
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
