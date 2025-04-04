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
    "2FEsf4UyDXxBUuQZM3ozLgmCbGEP9eEaWyYQ615BUPMxrbpUsvjMDe92SgFcti45bbKcTucYvqjBpeG2AFP1yonv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDgCjMmdtntuwptfUv5JDXwucEC1Rp5vwxYfDgTUcUEhYpeu6fHjahFs9s13k5h6PxjyzBgrFdC4fwQCGeD5wLv",
  "key1": "eMJodNXsu89dMh9mSKKXLLsG6TAwwbdwtUPYdeqdQaKZJjrQ7ZjGcYGJcpfcARHodtPvWMRdvnr7paYd5YmBfFF",
  "key2": "4STHyZqMa3zmpetxUJ7hsHn8EMimwBcSv8ZcYhDnKBetRke77GiGj9s7DtvnSSSuuVaw6TrSJJWrmnK1rMcSn1HK",
  "key3": "2UKA5RoZDNwdE5RNPhYFaZGf3X54QsJRdUwp46XxQ5ZFum96o14zpuhhx9PvPRpjCngo7Dyf2SiPcEJGq2Eznxep",
  "key4": "9ptkBSnbUQLRXjEdXAf2BRaCB8A2CK2tK3iSNjTw3Hnwnqxj7uRx5UidBQPoPXwVtvqa3GwR7gJoR51pUf5vo46",
  "key5": "4bfpKW9vKMTWk5gkvt7AArbHFdXBLjvdzXiwAPdWz5mLaWZSoocVy1bRm9hPB4iAQDS84dZyNLeNmkdmapAs36gW",
  "key6": "2paSmrBDcBEQWLdHYmoJFnQtMxDtvYtFiGbHJhFNDP4UsGppRroavvpeiwnJPARxobAcj6QgEZvn48PY8rbL1A4d",
  "key7": "3ymvWd9DxK1CsUQp7cWfqS9Xu34k9DWs8sbTXLMfSxzVQJFBYGt73p9qoaHbmNQQgAxyrrH1ztkh5M3DvjmQEnc6",
  "key8": "5Eh1E1j1iJ1TsDh19hmg73GbySvdR67mFbuYPpbWcWqJvHbB6QuE7XmWhudojNgpLMKihQW2WeqdtxLTtu23i1P5",
  "key9": "oxw54AH7eeY2SGNXpn4Piz1vHChWX9ToZck6teFrFyNTXupksyaQrLsKCRWx4XjsHpZUk7bqy7GmWpAQCEj48eW",
  "key10": "Pt72u8sTFJV8711X7Wc9Vqkk7yKRaTwwcqL2Sms1L2BAcni18359eQT29mijWDPyeEQGAummdMSZSwKjj4MKpJi",
  "key11": "4V5DqJSgmPWL2zKQNb5bNydMedayWndasNh93kVewkh8Sf2Q2CSXnPToKyeZXMy4t76bLyT9Q5RfCR5Ue4ADVeJ",
  "key12": "3JrWzM2JL8CCpTEg6vohFBLwctCyTiKFEbJ4X2oLPUQnwucABzjKTYJBDjh98NjpF5moUyASnTcaH4xATd9G1h9s",
  "key13": "37XFYvUNM9BAwNGN5bgCsr8aE2zAg11sgNLDn5L79fPLHe7DX9Jr6RhEpntwYVqLYm1L7W4CfFXR3WoE3xdZ5W76",
  "key14": "4vDwyhCpxKvQE8GN421Pdue64gnQJEtWmoNhVXLazLs8qTCwJQZTL33DZZv59cvxXvSyKQXzSCekJQYuwLS3tK9y",
  "key15": "xQhgj83mpW4q56cjriEuvppTBZeuzFkg2kaHumaxPViSWCbphf52iLBrLskMwTpGAdxQoPF3FxGPTX4ABd5Aa9h",
  "key16": "5Foj1v2yxFwLai33RL2cbYWapK379gEhsS4PrSvsGCzzgqf5qNURdLNByMcK5Au3hgrj4rm2dcN2mBibnRv9yYWh",
  "key17": "5nefs2aZqCJGZKA18SBZQQTiEH9X8toaGnSt9bHioXqxQeenDT2ygwfj3uDNcJYZsuDC6B29c6k8ZdcBtspGhxvk",
  "key18": "5KJFAzYyYXhtgC81WVwcPtvDDSXzzcbSrR5GRdexH1tF3n9siJYigL8XauFxZMqXWzyLNG19AzEK8iBnsFGprkSs",
  "key19": "mEVQ2ziwEBMrXF8HKDUeAroxknxr465SQS2a5EQmZhqjdUgLrMqP1CnwNR8VUemTQ4wbf35XuynvFqzoMpgA8at",
  "key20": "5hRLTdvfTGvHwTHQkfqQgY3GQWdP2Axpo2gKo7awD7FPGsq6jdrz8PqYfq8TBem9ujj88KiQJo5WcEqQSF3QudJQ",
  "key21": "XvNh6PLxwSqoZgWudfqEXEUFWBwSSftz6SgwGFwEtk3WxrQT45mkfqFCWEiqbg13Jch2oFrYczroLySeL7fwwRw",
  "key22": "3mhJ3htrBMLRm1GWYGCZMyXDZ5HuJZp88sLMTR3RQpD6cWHSdEaQz8DsfW13VDcZCWFwQXU6Bubid7eomrBbPd8z",
  "key23": "2rbLjvs5THmDztJvvuBoM2s6wcA5hM3FgyQGwn3ZMmz88zaHjHMg3hmkMdjureX77zR6LdE5nWDfsC3ZMoB3A3bx",
  "key24": "5JXw8P7dTu1NTYujEh5asYqLJc84jsa8kWcP1ruomVKyaEMXpDNmw9fyvMAQDwnptoWAEXrbFjZHfN3HJKwYA7hP",
  "key25": "65CmbY1uvoRBEVmtoBB1KEQArK7fPsicecj9nZKWK1Ek2hEPqtcFXBseMLc9PcxLqFxBn6zjAAs9xsau1HcDfpB7",
  "key26": "5dRAy9KnYtZYDiMyhsXjN4PGrGjbX1eJtXMc3Xmd4aRKx514N3N9WTR5X6MHqS334xft8MbkiLcrTDDZ7iyJdGQr",
  "key27": "2EZsV1QYeNZk8kDENTgjt9HZCCfVPnqaQAsSg24ozRc5rXwSFZ9x8Ng1ewag2pHUf7ppuFR2ADVPoDYbV8szgHLR",
  "key28": "2zEpsE7ES4uo1cNiiprJWBWnnRGHhkDGQooWCyVae46erGxD56fbJKNqAzeDXY7gXLNeXSoxAYCrCEDvg9fgtZYu",
  "key29": "jmGaDxusoDvfPAL4pCNHAFcKRvYG3U5ubE6UcFnfdFZg4UV797ngdQ5NGn7bkkvUsdPS3Zq425pa9LZj67WnvSo",
  "key30": "2SX4stJR5pkQaem4x5fuTDckCEnXCEk3LKn75A5gVvTr8JM3yuV6QT1z4uS8HkSNTrnjtQJ8hF5YJcBSUkpbqHuH",
  "key31": "5AnSxEgWaCFNGHZv9UCT5ViJYAVJboLQ8q2tEX9KbdmDset8mL6CqRDcG2cmXqBTQXaeHr4eBqfa4ztFWGfcPqRu",
  "key32": "2jn6ZoJRDnMmqdhtq8xaPp6GZbe56QAM4mH9yWuJFkBGk2NX3HPpAUMpok1ftY4ketrmSWoW9Qb4WDfxda6Ub5RN",
  "key33": "AxT8LLnNavDyrTHSoVeEE6YysqHKvWMZVCggTHqh4YK9yj6FC1wpfEawvviMTRc6sDqaGVLodHiC6FJ8ScMw8Hn",
  "key34": "4GTiPfE6gLtxmqhcWKYoTM7ZD3BND6o3JwMhvgkAwHcoMFhkUqgHerUZHVDfSXCfJvDGHSrQJjpS9qyXzvUbas98",
  "key35": "4r2LddCznGKmjesN9P9923CAr8BihF3Vhurn43HC83r92JXr77fRk43KZNs89TJWjuhVwHA2zjrd46CfXyac6BXX",
  "key36": "dWer5M46EWTKC9s81dEeGFddYMrxWpm3SW2SEnKViErd6Ge3sUh952SXjr46h1fm1G9MaL44293nK6bogoVUKBj",
  "key37": "3uv5FYw77Z4Lbe6yBE2Y5bMxqJpmA2r6zhp931eEKMKkgY5o1rbmZE82cRguDaJmxCr567oBA9y6LRqp8j3BUNV9",
  "key38": "3VQ46qLXNsuCik8bp1rAepYCyEN46Y2qYttYdMTsYsXrGHDeWTKYQXmNw6hLFdQkTPcEQtA7tt1jFszjjnXCfucy",
  "key39": "7rqpkCWaene2tW4fqUKKpiCcFzH3dSPDZ3jM3Nj7VumTzA21jtrZW7RKcdXLvMr1kxtvfvk9jkYnzbBX8UNTH3N"
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
