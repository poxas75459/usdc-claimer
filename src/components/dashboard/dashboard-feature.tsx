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
    "5WWbJrnHKBMf2kV5Be7RXZNC8aeRH3E9CSXx7SZf9EtwGnyaTqLn32xZQYyarvvP1ZAHyU685sesTTzVRgKbZCVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BRk4HsSky7vF6MrV4vgJmL6hiRzyA2Ba8k14Hwhzmtg2v5yJQBko4dJgKGyuTzguNnnTRTcg7zZ418mH2KTCqVv",
  "key1": "5AMgrRMVoc2MpGivkAQtUDDPg9iM7mj5XxCb6js9CX5wqnkg2AniQRo4gPCURRxBwpc8A3khPhGoct9mXuVUieNX",
  "key2": "5tEXvBbYvxovCN3GbgsAMYRYRb3W6GTG7Brp8by6sfqxVQvyUfkdSUSMuqv19JzHEe7AhDozc4TZ1YKh3FHYLqrp",
  "key3": "42cFcuUjGSgc92qd8bayjpP38GGJ1G913sGWX8KUoab4qHgATJcg1zxDtYXaHyoz3gNLj6rCjFSGz22E49zGBpQt",
  "key4": "4xzqRVGZFWerGskGtYwdmE5qPgKNjodwmyfZ1SVJZtqd6KNhG2FfsbFhzZtaW9CcW7zCGnEpsMU6zeikx6UG9QSt",
  "key5": "kKVynNQ6UmkgP2qxRfJrEoE4efSy4antHFNH81y9b1bTprLCWEA8FMKbqvSPHASVSzpJRuLXbWCfXuRNsDeMTit",
  "key6": "3gX663GDjwvc1e4Q19RXKz7BzvqwT9vHBJEcb11CJW3caBnqvHK6zbWFs2QYq3ydQNgQ8xGv9y5jqbsu558mVPsz",
  "key7": "3rXVkTwfgvqdzkY5H41yk6NVUbW31ULCWotCKdu1G6xGnoNWTenc4gSo2ySw4VwSnDompmvJCjkJNDxZUQ3iwKpP",
  "key8": "5Ey26jwe4yVuULyJEzzPEDxHsYDqc259NtxW6BY3Pvk4QUvRVCuZGEs2skj7AU3HZycf4KNShLS79u8qnZ5imAVT",
  "key9": "29PaTZQza9qYvT28fv9vij9km4comAnrT1SaUt2js5ijXK93GhSRWJEWQVp5TfxRKcazn9J68gqMzKfe8Ec1MiPS",
  "key10": "AmNeKFiRh3szVdZXU6RbTz3vioEgWWTMFDgXNJnzPC34xMHWHqcyF5PmCbEhutf8Wxh85hVTinYPkqwcsm7ffWK",
  "key11": "3Lv5w2TT1ef4aQFirnRkbwtvY4NrxHfbTZsNbFssmsbSfk77HknRXTJSc74sJUSGiTHuHffD1UFUCyMaXcFk5m2u",
  "key12": "4btjQVAuEc7zDFzuUW9gfgAEbUfzGYFYSWQpF38psVqbmyFR3duo47LeewgeDhtkdCdS74bC4FtYE9wx7byKbMcs",
  "key13": "33YncAV8J5w1DK9Tdxm7UgHUj8rsgmayAGww66iLDE4DDxNGyKqszHbFQj2ojoZqqDsLF6csVEF3A7UWXi6rjSU7",
  "key14": "62MM4cevEBR2oybiQjuLAxevXbAQwYTnKPagCJFJMmRif1xzNTZFmhorw8fLjWL6PETJVbZ6gNQdeKbnhxMDTwNm",
  "key15": "4gVLw2UTBrGUzhaxHCTR3DHXapaGGyVPZUL8gQKMfptF81Tb59ukEBogu2bubEoJjrMm4k1ZVxViugR5gR9YzoKr",
  "key16": "63QbTWVwWvz1GH8Jwn7RoUMhRgHE3JrgMMRHZXmCsHpQuKe18HvB8GFRqRjT2rDAKTF3mJsrDVSNFbyZVjcEUuc2",
  "key17": "5M8GehWTbJjsxdsuvuQidw43xEmdbnCos59QDp66tVNcx7GvAPU1hzsywHYPz27G4ckLz5v4C2zFJVtpVPojARRR",
  "key18": "54ksAa2ETdJTkbw7dH1Sfj7GEpm1DkRTePCCkK8f2D7HkyAJ3PJMB11JH931NbJWxY82JWo2FbVCj8M7gWDJe8ss",
  "key19": "3fogwCwTrgwnhF5dfib3JXDGPUPv4foQoHeGwJdH4Vhehor8movSAovot5zbQ9vdFkYVqALzhUJDfv6j3i6nesJQ",
  "key20": "5fUHF4AV5XGr28s7dM1H4te8ty4j55CPQh1XoaBdix6daFr74vSCwRGuvpvHp3XE3UrMp3rUvpVd1T4g4yoemvCR",
  "key21": "o4csE7DNcbrqYb1LRuQ2JEQztjLFNPxAqUrqcNcPyMMTA4tks44gXzdstfRmPiZBW3A5sAEXUjsGyBS7mEhtHjs",
  "key22": "3KS39m7CmS7AkxQUffs9J8Ha4jMesSTmmxFAPMiP48quisJ2QjjzZ1TcA4oBRRhTCj8rWVNNnpYhJ2S2GuqoVxZD",
  "key23": "4bqsQ4GrZRKwv4hnLfv9scir9YfbxmLuNLoTzWZtqSVrFyVMY3tS6J2pH7nwJTapasXVZVaA6bXoqTWQed4mqGPC",
  "key24": "5cjLXRf4Zgr3LFLwCmi9aYBXHn3g6X2gM3RdVNhEFDCCstpHvNqvuniqVEZmLQw3Bajo4xbQFdYKM1tenzX222aJ",
  "key25": "4fNVSS1gNjPkL5h6TG1GZ2QtLntAXWb3GJFEtnjQsiygzHQLMbhNxH57q96cVVr1Fx6xPD3v6pvmn4d4QkerLsum",
  "key26": "52xCDHn8s138ayKHKHsVp9sxpmBE2pywU7RUPTAUSxBCQtouckihYJVVfu7Nz4fTK4FURsiAcp5YZgErq5Fkxyvv",
  "key27": "5dTeUFcatNZXmZobB2WPmNC2CZXvW8KUSNVK8MBQTjjF4aaPeErVZmBTteu3JMq6HehKNNza1F8JdGtUQJfYWngJ",
  "key28": "56Y77eGBcBktmBhZpyhCwzQTQy293qEK8UfRiayzkLkLtkM5RciHcbyfvyvyuUAJnTR19JwUt3exAbaatRJBvzYc",
  "key29": "XUBWh6jN4Uyx9QWKtmDN7BU8EAis9VZpQhcA7Lm3J8yBLAi4twcZ97BcsBQkcQvon7sK7Rurcm4zK9FEgvimhUN",
  "key30": "CD5UdBguR8Wg3ff1Swy4CGT1gPSEW2uEmHxoEfaerw5sAFyhLwigDUWzKJm6yaXK4C3EHntKeRhdigy7FUL2QBT",
  "key31": "5d6dRoBZZuyK7wg1hQ8Jte198qLxe4CMqQb31qwS22V6QKdUq1WnAr9vwFEy8ongMujeqvRtzr9BYr993FerFRcA",
  "key32": "5JrGwKEoc4UrwPcok4eFjh7Qfw9dv2B3PqhsmZT1nwtE5XS7L4LPoAHPtNkzB1n3cZeq6RNwfMmugVP87zDLmcpC",
  "key33": "39St1m7uFQTQgWTtiuB8V5P7m6W1vsZYiEoySoFASAmuUdUm7iWYZe7TEzVodjy96qTR5GmR1FY8JnPwxpaot7EP",
  "key34": "3YhF6LDeB6gn8abxGKBUUd8Ak7TacEM2fbwT2UZx7xdRBgS8ePY9cNUgkgfx4F6LhduAjkeXVw5PaR9Kq1BMD7NZ",
  "key35": "5ZeqRhfmnpgvr9GRuW7aV6ymi6f52k17rVKNhRYBfaubRmutfauzC3ndE43rL3SLRuz1LpQaG1GR5w1z6whUJLYe",
  "key36": "5xBc6UXpskNzs8Bj1QkYFTgnQX1nevqf7f2HpkhHHdCe1835EwkgP7DiEnkc6SHdBqzzeMBUZYBBpHuRPk2pqCx1",
  "key37": "4R3XTqnp6ZgFLJ6WDRibn1v2WACb6WxsxDknhvXziBnk1eFrMkR8KrNV3RZfZEDsU1fPX1J1kZdqXMDRrCU2RMGs"
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
