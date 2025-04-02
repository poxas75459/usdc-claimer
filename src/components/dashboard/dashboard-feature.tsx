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
    "3Lv3geNj2ZWHL6GCCioU6g7xpifpZqUBmC87r5u5w7QeoeXtk4sEKXCWKwn9jYSreLCw3j4setxpYh18qMmH2EXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7ncmP6gaMNM6iRhkTL8sfpZmhPXRnJ2V6M6bY3pTkv18DByGy9hKetv6M25V1efazDUjskUJpbkFwWsoMzjhsL",
  "key1": "2EbxzR47xFgWfad5JH642McEVWvaEicLpsadKRtME5Y17oQr5nQpKGojzBeeuksF2c9BLxN8AVwckKAFTtAchGec",
  "key2": "5DRCn2iftyihmqxaS7fj1cwQ9KM9oQDYhd5U79jszsu9mZRuLEaQdeFgKXQWeshTCnB8D3ESXXBkJhudHKxgVxEV",
  "key3": "gHMTqj5fdmbxieytu3Ugjh7RbCBfQ7j9esEPHrpfoa1cwizd35wCFivnPqRdZtZ3Gxwcxk1nqg56PTwXUwZ9QrW",
  "key4": "ZZwDkty4SRrbCs7xZ1EJwTuHpBddHZhnsrQFiqDqbAURg4H3F4jcDSNoV98EeXtFDyNZWVsBiRu688rw47SA3Ag",
  "key5": "5CbHXD9cEYwSdgErVcCbvYG4qX2GF2vmz3C4cHJidhvdRzGLKQXCqYo5YvX9cWn8i7eQvpHw9VUeTH7fQBSZ4LU7",
  "key6": "2UmJjjVP4KkMsnGGektpRN9eY2PyqyMmb6ho6FM1ELkjycu8wstWfQAKKYpfitB24XQmeYA46D6qZV7tBWpAxQCa",
  "key7": "59ZGsPzdtYY7c52vaSoNZVxgnycdcDgw1kqQTt4woHhwm9H4ktVwEnfwZehss1DVucoW1BWdiukLxe62QsMyHUWb",
  "key8": "2xyT2HG1jrHWAYNAVkrRUzxMhHcLTX7FuCfreq7hU9UfHBodhWCMqfrSn4V7NwdFrviqrL1AKvayF89iy6gRiqEw",
  "key9": "5tndLz1mT3urHXznV9NiE8Qp4WTfWRbd6UEm977CpSLG6p2bZiLRvDRChaJ4M2qZRPyRKxXi6s2RMQhHivYpWfhb",
  "key10": "hFAUNwM5CDWsjmD83Fb5GCqj6Lpg4RBQbya6jAxAoBcc4aUVY6sAdZskNigWMQRRzD4waWNBUtsEicEuCzPGxq3",
  "key11": "22T6Y5TXZQZGZ2ds4Yr2hBxSkruZpMWXiDAc31V4aDL3YLhKKw1cvz32Ny3Se15EaSYVtojtsXELnFZtf5APZfff",
  "key12": "3fWP41LC4HyhxG81YuhaSzfcchRB1cKjj51JnXkC6iG2QsSuMCDodnWDKxANsG6JzzGCcCiLFNcNBND7jx5rLvc6",
  "key13": "2RMC8rXA9hVCUS3vijNB1UnZx9boqiFWN8oMQF4RYSJ6UNQY4JPmVonexmrrg9V3UTx58jUs8px7YTdZY7VzAsnB",
  "key14": "YMY7ysUxaRiUYUkzs3e2DfAVupAQd5U7fg6LKVVfycMHuzjjEamKn9RNPR6E2p5zkvKw8LGrAGUbLDWRpvCGEjH",
  "key15": "2Krp2ozUxHeTLNGKt9heoonSXbcaE1USZE4dLd82BxJTHEuV6ZqSxShnJoQpoF6u4CvvD7FoHTmAVtgwkY27B4cj",
  "key16": "C97ZKE9U3LnJHv9VsJjySeZDLGbJA8Pw9BG22MQN9Xd4TB8Q4ezntcvWtwhj466pcN49Bp18Ph86Aw27u8ep1Hf",
  "key17": "35YmuWhYCrQCd1Hpq2TQjjRi43Ma62CHpLYmAhu5228sep2JUZR2RPGEj3oJEMjaAy9x8AvLPL9ewGm7RkBXmnpB",
  "key18": "2MkmtxBAR6tgzcQCHRtwbt31MnMereDrs5gjBhwsABBPP2pTjYbj2DutLqqc7LqwA2fm5byaGpfXyDphWgqeJrTa",
  "key19": "3xjKuhTGPrM6dshfHhaUup7YGDSo3XicEGU3eEgumRS7Bfszt1R4cr9v4zieaHqbhcXT2vdoPQSzVVaDCa9obwrt",
  "key20": "3Zh8888BZPE18TcsmPPGYnGUEzoLuKW3bRQD2h7CuENyy9noCAduM4ZRuLWMX688fcicbAuzbkinMmUNJ38UazdT",
  "key21": "4SkcK2tq1tveaJYp145FioKuamUphTbh46GYr8Pevi1EYcv8KbbCb1xggVrdvXUuUZyUjXjupVtSiC5HxBmg7Tuo",
  "key22": "7M8rrocUXGuxobkxjr7qbH4Ff52UQxanssWkzice4RitDLhrWhGN1XJMg13woNCq9aZGr6AoXNJEtydxvp2qBWP",
  "key23": "3boiPs4xsc1h7AJeCFgMpsT9T7gEEM4tCuULxXQpkMxVtGRexM2c6mHirJgU8BFJU41t54grBt6WshT7RGE54AYY",
  "key24": "4oD6aaZhduvfwDNwUqWPYZTRPq5KKDHbR7zXtVvr5pAUjJL939DoHcT2FiCy3gEYV6kZ1eGAnkvQpFkZkimgSMFQ",
  "key25": "5u4hGbfSytCxiUytMLFqkcJvvHMyukonThezfTf5PTFefYiTGdop2JmESPwUvWqEzrNUgf9GBeg6M6jijN9Q5pMY",
  "key26": "2vjz2mJriqDkZTHkmTkefL2fgS85nWMNSUvm5kBHKnrPHdcGRHgdttaVACj16nEiBe1J8TgEn9jtTxXT7RJxKt8s",
  "key27": "3kQYryYHNMxUD24nNQpJ7oU2XDw83L67gNcjJivintpTZATsiJPKxCPem1TLRbrv7zz8d5gMgEgCXtaqHo3EzZ6Z",
  "key28": "4YNCnJgDw35SgKLrQ1bC6f8xu6HiXeGQJid8Kp3VSj3nMa94oBo3PnPxToEqf4G4GxEffGe5nbTTHPFuLdRLJXi6",
  "key29": "4nSE8gB2UjDGSmMmVC1FywGcnVQtiBZ9PTpGP2anXfuFPFLbuqJsqY1zSdLm7MkEom7sPPEiwR1QUraeV3CF4Uvj",
  "key30": "2yJ5GGiaBY73jAsHZtBVed4PuetCkr93vrg8C3ryaGQL2vyG34SN84MBxcrym9iciSC3xaLkDCfcqacAxuXHeNWP",
  "key31": "5xsoKKHPw5xScxV2T7uDqgagBYZzCDyXNR5yi3kKCDoobeoNB2rdyznLjxKc1x7iYhPxd6xmEjAhv7eQiFzojzkt",
  "key32": "uAvTA6uLvkRcAGLbstpU8c79DPBStm6Z33ro8vrTnTikYz4FrigRjQe2qE3Bp3VCbS4n7ByohCnKLkefEPDcZx1",
  "key33": "3ikEauHks2bYwpSD34b78tXQ56BYKYyTcK8HPn5DBx4MEKbwHhsi8H4t23TYq46F4bzWcPXgZEcptob7cnuEYFc",
  "key34": "4AnNkpPpSG27b15fFe9XqJRRRwSC4LAv5fg6paEfgFzsrpBS7KqNe3VSqn8kGcoZLoQLcYJdekgK3n6SUnZ9sVvL",
  "key35": "3VS19ZpXMnoGFZdn5fuSac7jr1emRd7g2usj9jX2axV4cfEGt2fbsTWQF8SMkdLZxStfU9KHVdrCw1FaAgAdZJXW"
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
