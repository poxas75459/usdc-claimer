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
    "497FQ4gPpcFtFejzk3QaGRgJ8ucUSCK3D7bsYjo587SnjsZjZebosbmRhFCurJR81utyomkyFh4PrcqenuoF5MAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h3KjB7kdqJomseq4ndF6noRL1uhu1SftM5PbYVV5SqcMa6AT6FSdSrvnz8rdBVcV9p9kjkzFUQahiqPjWeG8PJy",
  "key1": "LshSiRKWJQYjGT656x6JftaRzvDZzyfNeuBLPkYoHeDu4aBfF1a652FNvXg67XFWMSefr4YzV5VFcoDXKA2D7Mr",
  "key2": "5mJEae1cB8Hibx9ZRKpAwg954eWUEZ1PZkXAnKmwHZRXXH3yJpTNHxBGXGwN6K8q6BcpTQivSg4fawXXe9PkGwf5",
  "key3": "8BmyCXT9k4Nhj3DY4z1VAkD8s43CuJV1EQgvTbGCgD9iRM4EGRwxTVp6LAbfFeAT7ewpVK7LbruAKtiRypzxkhQ",
  "key4": "2Tn8CuRTzZUNLpx5XUgafbSh86knQGiMUnqqrUUwambJH5R9pY2b3p6Gf2YwUpiFWnfj9KEeX8gy1YRv2iH3SuEF",
  "key5": "3hMFppAYBya47BQBuJe2cvRXrUSb6VDPD3VCpbXuvJaWBeL9383Bq8CahoyAQeT56zcysopc7kBYKyTDtsxcS551",
  "key6": "4Ym7Y5LW9VKdASn6ENqcDedNUJgQfZbeqpkwZqT3Ghqgvja5w5vBht96Ko2gMYEmnQyTmw4g1GBL9CC4NABr77qD",
  "key7": "qJb6YQupKRYDWmYMa1wbe8ULcoZCASfHzQ929pHXFTvvZztWCzMNQLZ22DdzftcK7LhAJ8xawBYvFDrZiyrCYkc",
  "key8": "GP6uxsbnwsbbv9X9mwVcVqt4TGMFe2FWSdsdNDQJ8ivKNp9jZTjZrfSBDEbCddsV2eKneYUk8gjFFDosmoiJYFD",
  "key9": "5sN3idm4HuW4vyyWgG7rvg1g4gYmu7XvSy9TSPAHMBimXoDRsVTEGbyuh2C5qCg1Z8GfQxzqusfPtnAk3Ryui3tn",
  "key10": "2ipJMWLH1akDSPnZoRrPLY6mudKnbWAypsSSPTWXPLoJsUiY7mh421hbMQ8f5x8YrpGyk88bQ7F3Gyk8qnpHthHj",
  "key11": "j1sRRTHMnkTC314ASNZYCxsJ6GffGMzocV4M2QyVoJBhoUCu7SLFtNJ6GAnjqGt8iiogGB8jY1JhR7HZNgKv1L1",
  "key12": "2taQHj1LzEGNKBzHJha9u4RECHTPM1A3RPqUPXsfLnrK2cLv6gEyBzFHC8P5NkoH41K3MkU1Bc58J5WBFdw4DTJw",
  "key13": "5mpQnagyL9WZLVozcNhRKUW4oadw2gGhaD3zNvt5yCqKn19HwQuViiD84e9MDAnX2WkVmKkxXD9ViTTBzjxFUqox",
  "key14": "2Tu3dyJ3qyRXWFjyRXtRKgoqoE5A83M8FzV6ARiGR11PYfJTuSiRiaYT9tNiQj8LBZbMDH8MBBZvAKuzSqvLHYvf",
  "key15": "3TCwoFktbrgdEsWEbpRzeyhCiV4xxh8PihZRBdiJ6nRhVm7ozCe8PcZW786zfMNKhdTnPwEsxvQN4usRYrConz2m",
  "key16": "39gVbSWKBL3Hknsadzj49zbGLHnS1WLcovcKAWz3LLJTLiFRpzBgxSkW1SSSvttxbngBRipPkcY1sriPiBsYDjFC",
  "key17": "tV7BDp1ik9Nm8kCZQYi4ae93NG7uovfdPwVQsGhjDgYYGGcBo3s7bAqAs6CdphCcWQCVLUAQXp4PNfXKxWcuDLn",
  "key18": "2m84LGJ8kBDCaB1ekuaEF6NrUYN9EPMAhXn5uYwt22doDwBTmb6Wb4T8FVqdvUD6aomVT64ichaEhFLcHr8EmTUg",
  "key19": "5MoUjaHkNbfzxi1PAxzut1wGt2MvqBhyVbWgT3sKH369WrVVoohSrBzaXhnddsrFTHn9sVP7WarxXBtiJf5QbFhj",
  "key20": "42puUExdwNvSWhWKzkoeVBz3NwikM7L7toZ1SVToeMupw6HmiY5VvtkdfxpFjELBztLAtryTMmdaMatVRGZbB9UA",
  "key21": "5TsA4ZrhPrsf6h89R9mnZMD5tLt9eC56sU2XLHf29w9QLGGnnyZJjjZBWiGvf5RLDz7xM1zSyQ6bG722hTNcnMeF",
  "key22": "3NxZPQSP36kpTGhrZg33nUKpbBnefXKwHd3vY1xNMexxACszTtjKiAvuxyfqRL1cnPvZb2gFi7Cv9xkYSu5gSHDS",
  "key23": "2jby9R3KoCra55D9mnDwX6bex8TdJDHSuPBVdGTVhHy6Zpu2EWorPD9b6n45wdfRcnNLRguvWZ26ooEidicjaE38",
  "key24": "5PJbYjMXMd1AtjxYP5NJJWeEH4dpk2VPR4AVBvjdUR8L4FTdnkccj2tajaPDQpfcK2egFXxdzHw2VxXssPyDK9i9",
  "key25": "3BpMvu9ZDrbwwNxyo9PbHxiz1C1Y1VCrGi9gQzWpSTLgsZLMSPBui3rYCwwBfY84DbyPuFjHcFDcNDKm5xmqu79R",
  "key26": "4gexeGjf5VJ91bSszzmSf6ThPzgB9X9rVEq3dY6dfPuz9ky4t2fG7WiM7fCdNWj5H7ikoSNd73cHRnZzD9kiCMHo",
  "key27": "3nAbtmL2hfmy3W1sniPNNSGYCW2X2XuaNQ9bNHLCZSdnozoTCwNLg39y9cqog3tXz7eFnEqeCTfaZd5ueJDkvuEF",
  "key28": "2GZa889wsDuQrqLRtLfkvUo8nac89oZEutc4y97jyifLxhVEAKEEGngru62PAcaV9wDa1WMoKFKUqYvMEW6wx6tR",
  "key29": "3fibAzrYarD9HpzUnXjZGVvNXUg92TzvqQZxxpyRUHPyMuNEfvaxfUaWGqVqGtUjX9ujD9CC4a9ggVzYqtTmtvjZ",
  "key30": "4w6EVRYMEsygULhENSpccxGU5Rwgri2xCDuZeNaG6eEFtScvehr2VqeQd5AxQgEucj4kn1AVm3xFAs9tcjqeux44",
  "key31": "PPs2ZTVYq1v4qSAaGCr64VuYSF7CEBHBPby76DxPXrhCRre5NqjHZTSohgUpX6rJC4a8LrPQfQRByjTSEB5puWD",
  "key32": "4CH7ZaCGnHnJqtzRrZ8gG23bP3F9p1yTr3uz1SKCS4sjAD5T17tr7Fdm86nxVoGrgzoF7t9uwHVgd6yYMjqr3DJQ",
  "key33": "44iyPVoPLnsxFBy1YA8AvLm5iGigmHjW1AqKtMNgannpFtZboYzw8c7ioTSUKBkCjkmKFRXAZ92gMgLv9Lq37JML",
  "key34": "2MMvavPAZtkSqi6kG4kchvNvrJKgiZqDGDLj95LERuwYYHL3oegP5c2MEhYWw91gmcUJggsXuEjDNUgSfesr3KcU"
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
