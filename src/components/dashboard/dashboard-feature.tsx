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
    "3yEbCfeTaXpySFrJyAgeUvLVa9fwt8GwZePDJGibwjd66rM3vfMzgu1kEw8z6FjFbk8s8zRzeCT4aJ7RWVpGT6qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Joxgv9QTMobHVnu5QKk8b4zJBA5jG6gcvPtXKCQjyQd6tGcQFnaxhCsSMEXNMPRC4E7VRqzBR2zSFU2E6cmwmjL",
  "key1": "BunZ56yN3Q8opTeCLC34TNeJ3TXEumq5qGHp3UKtMixzBrAkChAfMuYV2EQUvnJCRNPZrd4rA9Y2wFXQhzR4tKE",
  "key2": "24bFrdhf2GgxScEDGnuzNJLgNCVHYz8x8bVF5cM5mxfjpMunaKkBz2WG6Dze5fzgLZ2xWeFJPYpeRj3gmFfSEGpR",
  "key3": "5yBCFpcfnQ6p1yA9NbXcEWDE17YHinCmmb3d8NgP7LucrRCuFxt4b6RWjSNzXNhjgjb9gTA2WppvjfhTwtTmdw9V",
  "key4": "2gqxJmEJfQVEXDodPA8RPJRWkMBKKt8gW34xUCtx8e8Z3vLKde76AGHinKaFyEk7wdPYQ1XBe8tSuFMiy9x3dZ3M",
  "key5": "2VKxqMMLATV7SEtorEFYgnTtCu25Xt7Pq5XjUpzaCAcvUGWpwzqiX24CVh2UPR9ypMMg3GJaTieoSidmKzfads6q",
  "key6": "HhhVvdbGpFFH5i7h6PBV3GmtoieJEBZwFUu45oMDEvJRZiWJoYwpGvYwGdDHAxyyRwDnSTWiMEaBo69rTbXN8VU",
  "key7": "hx8i9WYisipfuYKBH9EYrGjQCzKRYQ4UddYm4dVDeBoGub2cw5ABshuAB81ixpaE3BGZQJCWLmGxnUBb9jfb8Mi",
  "key8": "i1zyQnFyKKnUgodKBeS2vYRYBVb5k9UC4ZcHZXGioPimDoPZTBDWM8byfbY4JRsLW3hutJnh5hGmnBzq98asste",
  "key9": "rKXTr4LoR1qNQZ3qm2onAuQJcUiEwX45xuAnyvir8a3Ajjxndwhf8zTvUiHjY2cLrU4mbqcr6SfAjN6XqvNkgLj",
  "key10": "5P1u3dQDX8SbrZqDz4cNZhpL9TwCZxdKZvDdjoefxjpkaVgTMARiz81uSYEipYhsvq7k43eSwwztjfdYtZGEZ1Em",
  "key11": "4ygAUVPm8n2SwgVHWzzmWpfCQvN8BzSRVsy6kdG512k1k1hSAqWREnEvJrUSqQ2s4YYs5kZUu1HFrMCvnunSma2f",
  "key12": "5F61mn4f1ZqnGTNUzFQkP4YkMjZyvUEkPZ76vzsCZgPdARXDrNVZuSVGLFwGrfrVmnU3CL74k1difvMsyXUdPvj6",
  "key13": "3wesGh7WiAG2P956KuWWAUUt2EueS1RXpFpf8npKyRXqNQuhmWzKD2n4KGUwCB57qAdB6YYEQ6GmPiLbowPcrV76",
  "key14": "29tnFbRqrXLs1CETx3sTt28U1Vye8YsEQDD1WhG1khdVR55V7AF84GQkUpdSBZmWvVKaagV5waSjMt4Jwg8C1SLj",
  "key15": "T1AvpRJWJ9jBnDVAtKZJBy1pE7FY3LNB7qv6iHhqb8ioWZzBzrocd93NQWMWgL1gkm3Ao2J9Chpn222WuMgkVaM",
  "key16": "4RNJ7NUzzFTUSAZJJMYAH4oUtwiCk2VEvfSgqsVja1s5KSQX8rsu4wTsaZSgkphp5fDiudZv6h4kh3xmexXxDjmi",
  "key17": "Fznx7tuU8TEUfTbsiG1tz5UAU2S1AQRnejSYB5KV6Bqth6v8DgvXu8TWpPN41F5D4A1pj7qQDHRHZdey9qznpDm",
  "key18": "4DAvt8wnDsjDMc7BXcuJHPWaZrLcoTjb2vgtEWhm7mQqrbAA1a7sPKFDA2L74sUxBXCjeHo1LVS5SAu8GAnrpvWv",
  "key19": "5Tvsn9ALeNyGJEPSJCUMPGzdQTjWchHZwJjiLU392xJE4YpZdM3eiYqbz53Tbihss6nsmW9kyBdyRnMXEL6rX6xY",
  "key20": "42RYjGycYsXDGZwUHxQYHYNZ9Q9RXveNrEXzFAfA9fBPmtqWBuJ45TcEZxSB2dvc46VqWShUcr27kUmS5KK9qXMz",
  "key21": "NGJh9qiA3rCZVvnKGQpvTgFG7S9DHjbgXupZyS4ja5kEwZnKsZ8mreQkXnk2Hb3AUuxMmHu6ZyB8LEASSk3bFqM",
  "key22": "LK6pNksaj6DVC8666EVC3xkCJ2E8uHCtGr7kWCpdnmVUCPL19foCjqkWZT5vPwKaX1nzHCq1odqU31jYuZZSebp",
  "key23": "KHaA1ivqA8qJTJmTBTjyygxyBXDYKK4VmtKGousVfGnB5F9Dd2s8ERAXxZEwjF2dFCP1tN5hwSTJHEz2aPfzbyb",
  "key24": "3NEDhaEVkfBaReezxGSgu16UUJNavhsDcfXTtvU7Rw9rHcHFtuFrjzYdRwxqswAtJ1sPhgnje5hnB8mbHU27bKHj",
  "key25": "5NUAyWJup1VxswWdRXKZ4UQa6rXh7NSqy1LVHDmNWfxeJoQkAA6JFX2mw4qBNfhrrJigRts1GCQxThpDMaKMR22c",
  "key26": "3NAfvxA1o5KG34NFNcEMozdi1AyVZtvCkReT256YDUjpstzW4P5dg3J9QpGmuFtwD6a3par7rwFF724Nt7dAfPvP",
  "key27": "34JNDCEtzLf3ernTGEe9bqRcHUPNFU9U9NzdnDF4Ym6VGjtrrNUVt81mxZrsz1tBT7RpgvqCXm3pXZ8objVhmxmS",
  "key28": "3RZcd5pJ3zYv2j2VLWLD9MPskmnqP2LUUMZ6eordjaeD2FgJ1wBzvFZdiXC7Emq36msLp64tuYwV7i9MiMHcDFip",
  "key29": "4jBPkNm3P5LmMgYgrdxj6Ke15WFsqmLMWL6d27vxJrypNtWZLjF52X2mfWG8t3hSbBPbigoLT5CA6vUEZLRhRgNa",
  "key30": "4SCVBRCqFoqtsXa9usKmFx2KVSCFe8jYEG5H4GHmLYsjPZgNo5GBdxJEepYRhqaRFHKw9LCq1kKqwx37gSBbEfDo",
  "key31": "2P2RakLuWtyZEAvPxa33ZsVBWGeq7zhCGdVP1moCHxjfN3TiphNmsMMVP8xTnhy9RVyhroydrHccdXYfVm7d1UaZ",
  "key32": "4kTAZf3xoYf2pWyWTSmySABGdXmLz6V6pgxJtJFavV672nj1xfJ6JrBc8kX8KNok1Y7BtinPywDQK4kuq1Wefy5U",
  "key33": "5bbfj8ey9Yv1DQkVkC2gcLcFWSCrRnmGq28Pzkag9ddYBN9WrHwMfiNqMxSfi9VXci43mUMostvtJ6f2iMhqjxqK",
  "key34": "5NgiwqHjitZrrLpt8XuCi3ipTrs7f13BBoZwJMXH3NDzf3qEmRBjkb9tWmaUYXFd7TaZ4swKGebSvHqstXGxyUHc",
  "key35": "4hA4Pb6niRVwTZJkj4i1P8FvEYsjJ9naCorVEYbzaX3RtVnshoJkMLhX8Ss8vbcmXMh9i9JNikQBLdtLXSNdJ9eQ",
  "key36": "3QuH5JQBckFdQTR5tJ6pqPDSp6jzWjWgiv1iyEHryjzPAruXBYYD4W4vEZHm7uJ5u3EVNEnwM6qZ4qzsLG1gFtAA",
  "key37": "5jCEbgk67pvysZsMC8U4c5jwwnwLATTU9HJrfgA1bXdCSv8p8Bpks7CEnjZNsugZiAF3r138ebUxM8fTfdkgXkEf"
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
