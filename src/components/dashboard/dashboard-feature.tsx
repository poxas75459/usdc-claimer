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
    "2EyY38cazdTQd4hiN6q9ivaxuviQzwBtqaxDEc2CnbgSVX1QZPVE4qPviK6fAyLdvK8BH8L94RBvbyruzazAyede"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TpTdwBPwHYLakiSt45zMoY5QjKE3JCi9SkGuvHBESL4PsJQ3kD1WWdVsZTQ75bhwKjZwDoQrffgBvH2LQEB54UQ",
  "key1": "3VmwCDL9DfcN1hUmYQ6XjjzGKw1pNjXGZ17B6aPJ8pJ4TtvigwBFE3n9kbNAkwXz478fhX5QgiUNV37CyGFYvZcZ",
  "key2": "2gWbti9ERkHNgShz4kaErJ2Xp4SZN3yRQmbkGh85JxU8d8wjhAiccyekpBYyurGbAWFVQwF3mTUqEZ7b8Qcym9SD",
  "key3": "5DGP3jMi7uazbX4HAqgdp2XbFZZBAfTeWarAUkk6tKYT5vgmADJYm3vURjmrERfUm2QgYyE3LYK4ZXmEgH1YJgt2",
  "key4": "4TeXVezpuppaWACP4UvcS7iAMPNmT7J8yfZendJBuWu2n6t6sCDuaxhQpDHeqABgeHyLjqpRyT76AXYk8NuvMbq3",
  "key5": "4UqtbRYnhcfDRe1pAHzMjssrJHwvuADSbbjnktvhHsEMwjvtTgrZErBnBuqqqh5TuSeVgEnayN2UKMuzDqDYSSCH",
  "key6": "4WprAfPSXfkr83AAsZG2bEKD5vHzJ6jKBgNqAdQzVWz4szExyw6t56Veoo6RwSjxobELhAuUo9aWDb3biSAN5mjm",
  "key7": "5Sr39RXDF1j85vjuZ9JLigjW84cD8GXY6KEbBezACp2GRnqcqFdNvsBiCnuSi4bZ1S8WpqNxhgjLy9DFuZcNt8Cd",
  "key8": "3Qh7g87oQVp7nDE9JHVVkSAwbd7hY13KASRbKD2kf4PHdWuTuK3Y9rs7V851WJC4sbD8JY1RjToQKt2sZUyMdDqY",
  "key9": "2tQKm22TBC9zGA3vaQ8E7qU1XVYx6nohDXxkDqX3gJnXB2xoagoj74hTdXcTW6u14swovrVXGkV2ZvA818Ea2ZmY",
  "key10": "W6FSzbA7CdP58nCRXKm6GDfnMb7iVGuSrGnEcrPh7EFN3VaXxQKA6VskuqUYbBBuFwqGP6BXUqbC5YfFCpm7dKz",
  "key11": "3ewzS8zLfARAQstieUxZft8zteN9HCd1kb28bRdedB46xyep2XYPZeC3VSqY4c3u5MNEWYyCgyaqWCGHrdrEcxkk",
  "key12": "4j3SW4tyb4GTT18GS6ZsgSPg3MBAP95aZn9aB7PEh61BY4E7UNDqGwra5AFMeBe8V6ao7PTeQ87TfH4y9hN6yomm",
  "key13": "z82cKymDHFUUdGqcnR3MHfvwt74xHbRg5ut3o2wXCQqw2fRdxWVECxdmKTBd6Sr5n996nSbBEt15yuyLaKozrSR",
  "key14": "66mXAvbcDJ1L4CUXTBzR1qJSepeCydRffUCJYmw8ucJ3kJZG9kn6Lkge4qcmJiQ9nqKk9CeRNTADHq3vxioeuGtJ",
  "key15": "3TpG9xaPMfJiSUY1WkZaVeZgnMostR8RXsjWacuqtbvunxfWR5NvZ3vFt6khC8L7tM7tVfvjwgeo41nMxYeZDm4c",
  "key16": "5Z3ttsGnWXGLHc3ednYBVuS4Egf89QPGf4LXVEKoSvVkF6ouowGfBwb1JRuBYkiSDffD9zaMHi7CfqKtweycyXVs",
  "key17": "5Pc3qnxJiTADR2dvvd6ZUJtPYhiQ9TNKEVuh4b474LEP6z8jjNepxSbErUF8GLRKvvWQGBpty74qgWw9jGiqp2hW",
  "key18": "DLgbB7v8Uj8mQmgX7a2nXFtBiyoKGTvrXfajCHLL19fLxZJ8ry3oFT7CyE99GadZNvQz7XuRiRfMhSdbWiqdYES",
  "key19": "4tooTqNJTAMwRmCTrYQX2MXXTyvqK4NAKxdtqdySJAeNYrj4npJsgX3ACekNTBT9f7eaJ87HbnWgYXFECEHQ8weZ",
  "key20": "daRMGG52wZ7fQvFxEUo1UV429ouVKsvu5agDY8ZksaC19hX7fjGgvkRDzBbspky4pAVHCM6q9RzadEWUHzTgeKt",
  "key21": "3HQgsHL5PxU5FSBDMguUTdn4jmrok6TYTgaiWYKYMEkCsxVQ8dMwfSrFBF2A98Z9Tit8FamGWPJrAQ8AsG5VZPUe",
  "key22": "2A19ZH6jaZpdGTraUJgPKGKyvbERsrGgwSKWyvegf87Xq1eHXpejE5nwAG7iGVav6xb7AkhCKN8o68LXRgGxo1Pt",
  "key23": "5bvkU7jYPckXSVitWGaNHVKRT2WUDC8dq4Q84RXKCLLYu7bs1iktreh1t1baDpWRGN5yZ3kfoGH62F7cPhN6ZVKv",
  "key24": "HuCUkFTsEyW32HZC5VVnRuLuFcakfgbbxLEac79CXnGHz88X5crej9k9GyNiiHVTMNb4BYtDWrGb7pTTLCVfFM3",
  "key25": "3y3xqw436X6eRDftkyZc96C9qwsxqNsAHiL4j71BEMFtGYtBKYDy1UcfMt9rZxZoEhRcJ32ZzAg7j5JkrnKBPShp",
  "key26": "EiaZcWV5C2mfrZ8EBTrkYoAX5spspbafWSDuJaTtn6SgNkg61ZFVxuVwMykRhbApHCBZyyEkwjAp5FkZwPpLQSp",
  "key27": "5FSsCgLdeVYoh1GG2LVnxpqzvTN9vNrgZSBmDAtzN6W7vRnGEsiN7WbaMJpTPYx5H7MvXSK8wvTXrquAq2c74Mmd",
  "key28": "4JWPpkaVPaemUWTTvah1sv4PwBDdo4XwUSuXjVrzJmRGybCkZhr1EqGfQEiDeMfeRCUjwvygexCfxVvpYneiFjra",
  "key29": "D8c59jkDppSeprqSzRymHHPhDSmGFsyf3Ec2xwKTjKNWEHN6txPDHhGSFYf8VT3iCoGxh3VYyGU2LrZZNomFPom",
  "key30": "cfuvcYuLNnXU6NBpQwmx5exNopAReab3iEpoSz8e9u55y7w6kDHUHD3nsjJ2G7AKkFqPfC1SjPFTr1PnMtoCL7D",
  "key31": "5zNtarau92ChNsGAmmsGZZbdpeMfGtUKBq7A4qdWPkx3otJcP2ew5ShALzXoFFfNLNBwZtBXywFAmp68QfnTdCfX",
  "key32": "5txs9mnEtPgAP7c95ntcCyDUUBrPhAf1N7wXZMqrjMXuCVdEQ4VhxUBzyQLQF16Yc6ATkFVeD7PtVwjqYVQb8Wte",
  "key33": "3eMAy7EGF4aXLrhhWBYsuoGDg4W5VEVJK2BjFeTG9nAnpjbaWcaT8FA9vGEBbHyicXhf9Lbn4ymC1TsU579DMNFV",
  "key34": "kDhMFLu1PEwm5Qm9yQ9aokypTLsDVbQbR29bcQaGEgSwNQMopXaSqf94gP2ekgoizaeY4r9zpkDY2m8k1eX5CuC",
  "key35": "5fgJ5cjXUz58efmGDBvE7dnorfApJbUGLy8XdsxViyydPEDXBdhtPFJHKCWF1YHuAY1t8d2NgBsgDn2bTxEY7Lor",
  "key36": "38rM4LUWzWmG6TPhoLYP2qqDZK8JpduiUSMio69txhDPgJDNq9V4Lf7DBX16hmq7YsYrYskeFD4nyB35ryeaQ33n"
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
