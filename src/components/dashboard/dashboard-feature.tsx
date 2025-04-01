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
    "4ZaWfQvvcAidSmxJLDuhAgwr2diSSTmefk2anTLLiKcEphKjDkn2EBqgcGt4xu1hvXP2VWyTSCy7BcWxGzH37Wgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Dm2rbNvT6iZYeNDwcHdoRAxcL3ySxdaKWdw6rmAun7Y6eBmpw1jNAVvUP9jgZNfKYSFevxjiaph4chG83ULTKE",
  "key1": "2T8xUNpTjtXaZRpWh3NisQwWRYwbKQdBpTF94SNtaG47iP4UgohGNFRuZGs9QtES2dvkfY6fBPfq8JZADAiYYXac",
  "key2": "4kT8hVemS7CpGkxYwd53wAGhxCtdz9hFpPA1iXBQ7XimfUSM3w5HTfsXpdKpoDqQZZupywb3PV8E6sQv3skJBREV",
  "key3": "47x8qDptTrpnLF9CSnR8GzmsBruXfG6WSXfF96zbMGHykfS1bPPcLdMbgCcnBvsQd7nVy55xMQrViRjqByJRMpE1",
  "key4": "5yd3rx2gvwDmGKSQjHiCYaTbNauTYnsDqcSQdjcvE3CqVmAgoSosrc2Nq6BTZd7DUdkZeokBQiTCn3T67Kufmu7N",
  "key5": "4rW5YaGhqQo3DKevR6in7hV9i5HpkSKYpWH9m3Ce2kfyh3VXCPCFrbei8VYnpSSt5BeNgFzQoae2qHrqnc3vDwMZ",
  "key6": "2cVJr11bauP8ChXyUL7f9SUMquXhKkngCabvoKFcVB4d9kT8LPTWybspPS1XbJCwtrqa3K9cUS4dtbEEkTYdMh8s",
  "key7": "2mAKWNjqxNagTREkLgUhExLBar67rCNwYJHHU1SczLjsMgWbENXCN9zBiYAexXnaNeqeYwWqF7a34B7Ywuwjqudu",
  "key8": "5jS7ToWaf1sSgGoe6FUTRQ4gMaNUYrsqP23Pjag6hWMLGp6uodxvzw9tEdoe2USCaQojUehMK8GiKQdZdyRe3XVK",
  "key9": "fFg3m9vGdkGdwEKWuzXkj7L9JWbcSN54FUYgZ7BbKkQvpDQBD6WFcMWJkwiF8mmqMmaVD8AH4nT7p9xhs6SkT14",
  "key10": "32yMkDdZ98YNgHcFpdZVaXggSdg7WbceNsTZwzrG1BchCek6QxKgvieNUUKNTFw8tTabqSY3Pda6Fq7H2hgsbB9W",
  "key11": "4nSqjTZn7zYRvySnsPbP4CtYZnyG4mtsay1VBr6XA6mH33GhqNNJTx6ResgE7D3MDLe2SSKR9Z7mvQmApgZ81x1E",
  "key12": "44w3CxMPLm44LnvKpipDdqibWfbGhWJGUkTRBXf55LEWw51hEnBeGh6LEuDqtk2zeEc2nzACLsz9EpAYSszpmjaM",
  "key13": "2p6wEg1pHvjD4qe3AFLEn11oLM4Rx91UDPx5kPUgwSZHmQqqStr8LmV65AeZKG2trYKiK368hRSd9fEspA3EEsFg",
  "key14": "VZzoB4nq9MAfRVVo394dX7FK6U1TZG2hzFVFqWPwKtKxZYrt8wb7tyLhSc93JxXLBgKuHWk1bMGsQHafH9nQXz8",
  "key15": "67VvYqv2x4zsW4wM77F3722xpbA4oBGMEanUb3YH7ExjCQPVKBEgNXBUNfQ3Xm1PYhTLn397WjDPg3GsnmcyJSb9",
  "key16": "3rHkJXqbHPdvxj73mw9rZdksgJYkS5dSwoaZL2mAKqW9MQZvK7Th7WaZBL9JSz4zSgwHZJfU5PZdoL4BBv5n5zJF",
  "key17": "fX7mt1s3uPDxRnbub2Frg2pcAfv7qoQN64vksSU28vroNfuxrXQDB2NdHiuS3J7rgj2a3afSweT7grWvCNdXjYk",
  "key18": "5QP76NHmREuimcbCR2Q38qQSWTgQPEukPaogUcv6JBmxzNVxgz9xubwA1yonacUvMG9Dm9KaSiA4j29vg3VonfTc",
  "key19": "2RCuE9td55C2RqPka1x6ooRh18sWMr1cpRaLG2rV6Zaa1myXzFzXSBzUDAksmZVGVB1iBpR8jufSSRghZw6QSMXS",
  "key20": "2F9E9V37AAknhBvawuA4VuLK7zpudM2aynaSP5KL2sJ1JxBbsmKnyURFNQiY9XZ1qUjsNbBrH3TLiEvmoJptmWqU",
  "key21": "2jG9zqztP5S2wqGaoBUionjhdJNAWZK6tmybmjWfxobXZvhyFXkrAwhCjKMXZKoHg789dXACdA81XNHLkzn3UHm1",
  "key22": "2RHeCCW9RHPoGdvXRYpAJWd11VhHU7yLD23a7DykRmaSjHT5Z8xZwrV1ciNKwmXBg867Rg22fMxfTP91Sqm9fAmp",
  "key23": "2v8Gg7wY7xRYXsyfAa6Nd9VBpMAkqvE6cUEVHuuYwrX8NbmVe1mC7kfgAkoxgB5kNk6WS675rvMMSDjZvBCL4Zhr",
  "key24": "2mVZzqXDkSyZPZP8WdfXTUmKy3D8Nv5rvk5EWct6RhhKmbToXd9N5myJp9a5qPRj6NyTKNoEza3H4iMWcmvWWt28",
  "key25": "2jgQ4fQhHfdJHXianNdMe1Gcjko4FSRsZU2vkTdyWzMMFvyq9JG6SUQYGs5poonpiX9duNBSBnTDFrXWuTErrhJu",
  "key26": "43GcUSxvGn2Yft8HgvR9RUq5H895tXaam6zGALiFNb3VzJJrYcrokuy2iyMb2E5uBWa2uMAjDBSnRfonLUnWvjfJ",
  "key27": "4FfBrTJz6y7B26NxqQ1irrLwyWwTFF4SHNUxZftHUY1gvLLYf8QXdH4eATVarxR2tbuYFtKZWPu1BhqpMN8rwqoJ",
  "key28": "5K4rVpyoCbJr7mWx7xAhejJbrDKZZuz3F5SQpZThiD6vx98u6NvEc4EpBgkTEWguZq1gfpg92j3QuKU466WxPZQ8",
  "key29": "4cvzfVjVzsXT4KXsE6sefXZYNbhxZQto5Avm2ZdbPgXqAFZUvyrnEU2w6XKizBhb4yA6UBNjbmJugpcd9QPp4efX",
  "key30": "5zVfaWfCurLED5bSxyUm3qr9BrCCvK8vCjXukiir6xSRjnWij6DiDGkfSu8kLfGN3tehP2vmSN4cFhkxvkBWMcfD",
  "key31": "4u6MRL32LBEg37crbEupQkcyqyqjGvMD2DX5wHnK3pdgRf5yHzt6yuG6yCpPveGWcmzNgD6S3aae1ofnwMB6yRCZ",
  "key32": "3MrhY5XuBgVN3xfHYWrB1gV1EuVyhkQijaAaoAAtUQncpGCngEfewhbyncwui2bV25J7PBwyK7J2y25mJXJsL1pL",
  "key33": "4qu3vFR3kk19SHyDKXgQq28cEur3GmG6RmQuBE24Mgka21Z34vfEpSx1S11wC7bCmi3xRNGvyFPAoq71he646S4J",
  "key34": "4xhDLz1nioYN2CqCB9h8nBZoRGmMzx4urx22Y52ygGNDqJXm7MSHKmJQjR8xV82U2mrvRcYxoRVvWZWa7MAqHL8D",
  "key35": "67B6ota5VuG26ZkAEMbehJ5GKGK6MWxZNSX2iuiRxDWWUhcnPPAkRR2p3MDSSAX6uxEuszt2SU4BffGH8ncDWCxR",
  "key36": "r6f89QjbaYgFRg7oYwnb2LcapguGjTUvprYWs4Bz3Rzd3e4hBpxP9W6BzSPQeQ1rHnVjn7NHCKPMccQie7XVxaw",
  "key37": "4Yfng2ca9YGxoXp4KLqnkWsadZbr82sMwoVnYUvUvzDxkbgFCD7TYGDyPHFKU8Gxa3GwCC9csDeVMLan3vyNTU55",
  "key38": "2VH77opv24HoYkYqVSBhvkx2qi6fojNC5NWitTk9RMSPEYdiPSFzW63a4tyefntwBGFPb8WZ69ckDzSvXks9Sgmc",
  "key39": "CsX3RbiSxvypXUXPkok3wz3dR1nsU99J91LpiwDhV8EbgHB1GoZf9oKJA4tBfwdkNaoYC6NLuQyZAeeBGutXGnF",
  "key40": "bVHyepciJjSuuZhzTnTZYPUu4oj71epoB5mMzSszmnDTD4x412n4Skc6ZQy22bdtb5WwJHPdywN4K4wadLM44E5",
  "key41": "51ZDDjTYrvJReHBPr7q7cSZv5n8ibnRdMBahsiqFNnaMX1cx5UoCpsF66bLAaB6SqE7p1Ec3XjE69bDKtMwygWhv",
  "key42": "3idDR7HX7E716mx2iFpTscxhUMpCCrcGqAXwL9bi6CPJV8crqnSPnL9gTUD2irgaaCJPPqF6MpyDVenq7bW47CzB",
  "key43": "3zpGPDkzwuufd8e24qpYEaarP7GH7HPJr8YWuB4gDQezQx3SAzeY9yerQqSXSp13Q6nrHFPqL1cT8yYtSfGDyvhW",
  "key44": "3N7DRf7E6MkFaN9K5FAybYXNPMwhX7pKYb3AGsWF9k4NFqZt9ipbmfu6jxuJHvyGXhrmWpMNcnYT8KX8TtdHhHGG"
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
