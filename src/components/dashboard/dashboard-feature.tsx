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
    "5CLJA1LAcYjhSReiUFoPpFYFkAFey1Qx6RLrUAoU9pvoDChxFJvNrQCt8x3uqPiwxXhZRgJVXHnCG9mWFVcf3LAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCnubSRELwc4F94ZBBEu7C5hMZYcvAD8QmHi8LTpadWPo5PqkBCbTJqvcV8vWFeESmaDKyWrgF3Y44cQXuTqEPJ",
  "key1": "WPcCCPoLhDz8J3nWJzpvUMxyMT5NzmuTQAzQhMWA6KXXojRkEMfaH8WJSCeoscSQ7cfB7cBtHkzW5o1GLj1xM7N",
  "key2": "22mQn8iBYzfo2waVLQWBZxyZ3kfbuD7hG4eaAnQ1MQbY2ZNHag7UCo9kkA7xSdeqZbzBdRbShLwVmprF57BokYwq",
  "key3": "4XXuh62cg1Xc8U2rVydk3fGVzJ13ecmkNL3pcrNHibiRAdS1PbsGVij1H9dG718ehU7chE5Bru6DWCvRukVnTknb",
  "key4": "4apikrmStCRiRcdyahK3Z3wcVhtZmFB6NqGQghz1iMRow7BdwfNgjYAxEGRcW9ksL4wL6QAV56g1JJm16uPKm7Ns",
  "key5": "3YNnuvBh9NYJ5BPYcretBe44AJewT2q2pXamg9XiCw5qTbM2rjiRozyG79FLY91WX6vzR9n7qyb4C2yhbX2pxaaD",
  "key6": "haAfhtDWpDuTEBBahUeaMJ87EFFm2stfvJtQ6Y3H3VNd8GRithu3nYjJ25mSzNFizeyYXwTHYnUYcFiErQHnbx8",
  "key7": "4qoGnnnDehn7VZTggrh76HEwvuSNm71vmzX5azdoJEAd9RLvJPZdzLixdXdbECjrWe8QvcUpYKLkFiPpniAGFB4F",
  "key8": "5Qgp1DpyY4i8bfvSeLftWgSmCKKh7ixdu9Bw5PnfW5rF3TcMrk7Szb2C1Qsk4VXCcUEKZGLgrWhnvZeS77WichWf",
  "key9": "5rnrVGeFQDDq6Lx5NpBUJdJGAKUHjXxFUU9MB1vtsUEHxybj76oHmAWHL5CQHeDzhH528odF4fsxCGR68VzA6mWQ",
  "key10": "5SPuojcvjYpDHVE1RvTJWZCe5N17PTPSYVmGQ8MEFANm4LQR19wD4Q9xbBdtbVrV32oFaW3e2KUW3ikujrdeQ2ZH",
  "key11": "53kUt9GcYh5dCAn3NqoKACEPgunh8hNViSnG2Nw66DkPjwAHNohBYdMWq3LmgNWGKtcjdVYLKmDuxSTseo5ZyR1L",
  "key12": "ThyPwE8uCFzpThijrDpYKnRgbBLVXcBuoaJVZ2ZeFcqQGnYLQmzcfr7bUqNHovesEkKZrqBSwpcPAnkT6k15x6S",
  "key13": "hTDj9sdgyMsF8KpUDrf1x4myo2WRXx4uxNjd34PKytJoKqaG4uWMeEiwhm47fDwkc5moeE52J1kA7K3yha3NeHW",
  "key14": "kjkhPPMSefQzWAty6KWdkoy5cLCFGUzFiBjGs6UmjZPfCVrCxKAx2gAyZ4ijwGprAwRfZTsNnRXbGbuSyk7Pkb7",
  "key15": "3S9VaQyJHHt166o9L97fhBTuCLJhxJ35UoN6WBzR6qzEb8W1XhcvxFP6aTUUGHZQdUnXMeGQ5GKBgZuEjjXDvdGn",
  "key16": "2zbsYbSEEQYueaEd7tWPN7w1j9NXuiFEq53VXn3uaWhDCZ742t4e97SnwPdkzojR7A2ZqQMCC1et74wjRVDYfA1p",
  "key17": "5RLJFR9xFj2zuCZyU8ea5v2t3EfqG9mRwakCWnDGAiXH6JBEsP6pGAStc4qBTH9ypnbLAwY1Pur4JAGzo2cFNNRg",
  "key18": "5V8CKgZj6FEdvwSh4SPEMvLegCbMaoCZKfzPrNP9Hs9pgpbz4XHQwiddvupN2m6b1ZHesHzeZGAX3qRvEu4bWUPF",
  "key19": "52ST5PRKPqZNNQgssyEVNSstKGMRRwnXRA7Qrc4tknG6JTMBr8skvKPo6N3fEwy4DtMqCQYbQ7MG8fSRogPevXka",
  "key20": "3rwrukcAcp966QN6XUKGtwmZUoudY2fmK3PdpgPJuta98Ek96nmDBiZW8kp15jLG343VdYuhY1noqmEybWFaG84G",
  "key21": "2zDpXTYmixE9FFRVaF4QPRPHejmZMnXC2mrUZPphfBEdVEbRUtcMEqj9DhMQNBJW8Q6C6RVhQE6Deufzt5gXPJBh",
  "key22": "2zBQHK928HLRmqTUm4efVeejg46NWAyK1eLmvCSFANXYUWWYoDfrsNhjcYz3t7W419uL3wxHS8AH8p9HqiSYDsFW",
  "key23": "2wf4pFk72pzUoupNKB2nuSBscburRXLLRv26r8Cikf7srHn5PTkqyut9QyEtenHDzC9rPXZ5bHo5upSfR91zCY2T",
  "key24": "3ZArAzzgcX4gAzhe6Rz2jPf9BLhdgn8bQkH97byUYPHT4cb5ri8nwaiJH81TQWLDYD3j5H1D5wo87XGWYLJ1sTQw",
  "key25": "cRmm3Spgesjgd1a1v8H7X3mjNMyXsiULEHbjDEHqdZaRgP99Sh1x2HMGQPd1wzV6GSsGbyh2pYcWbBwWVYzeK64",
  "key26": "22DtcH1MLZZwCnTZXb998jTVBik3pTT8cU76o17e47HkadJWhv2GR4WbTqecSViNcpCVHFJSGwKRDVAuLhCTEpfv",
  "key27": "3z2CERS6ffy8ovqs5Z9PCGVsbBK4tfLsgE1iP81BjqM1FK1Kogx3v1GNGFjwb62ECsyTgyLfoiWzd99MavLB1G2c",
  "key28": "5V9bmAAx64SYNQP5T4spgk3bbKsi1WsRYFv7iRPqZq6sHw2y2r8CbBapRkeh8oz8ce2S2MFhKo2nufmDGZ5AcfNs",
  "key29": "2SfR7qWKEbiU1394Jesa3fYmWzkoCWHnBiGcM4s5GtuFHCpwkLgAdB7FvheTYPQnYvKR4QkBG9BgYxLxDFoM82Uy",
  "key30": "5dVSvsyVvhndbwZHWKZSJSWVMh3GfksqoW4D1nxsULwRrZ31Q2hfSFgBZmnQp1NP4qMYVmEXxwd8VztXzpBTMYyq",
  "key31": "3quqxL1kUtZHo8Kk6kYFxY5VCQfAuEHHqPRAgKC96R2rkv3fMZn9QewtHMR51erwmPFC28ZcSEigLNZ6W2zVDtUG",
  "key32": "5tS9SW65agw7RHTkA45VnHM8yUjVaFgN9NMXMwQMdCXAVcB7xAKz7TiU9TEtXNwWbMUQWeiy3Zd5s1x6m9ae36bm",
  "key33": "5wFni7h8y9LPHZRAC98q6xLaGgK5qApoi6GMxsVDNWREtL6htMBhQsBLZ2p2nEsH2mZHAiisZBqEsXYGWYoVxvxE",
  "key34": "47Sac2znpc6FP43znaTyxAHtQmmg6rjt36tTnGQrg9A7Tw3ZprPJV1Qy1HdjA5Hx9FkPcPskqrKznsYVhLBB2VLY",
  "key35": "5zr3QivwzPyTWaDcUah6oZK8xkcywkE8YTKAybDazYYRDYjW5r32cKc3Md85cHjyy71qNza7tdeozsx3R8EiB2YC",
  "key36": "3UwX5HK4QPAH9Xv2hd7gLdLRNwrMrhR4GdnJFZ1CvgELzQLybGuaxo3jCWEZvANGMu9ZVLwFWY4eUQFughbGHT3k",
  "key37": "2WAkDZ2LF2q7176uht5UDFnTzzC5AndWqSoevGbZ1hbbHruh6875AzCK6PnSS2T5czGSo7yej1jFvLkNh1Ds8KG6",
  "key38": "5T3uzUbVT79J9JbN5P2Uz2mDkJ6FhiagSnvnDquVSJs4KWjvR4aL7qv1BXQRmKwPV32fnEZav9Zc9CvPm2e31NFZ",
  "key39": "5oDABhLLP8Er3YukB9aap9txaVXmv7pDTA2w3Cpw6d5ABgkQiz4MYFUNWXPcYJpYXA2cxFjhA2RVGZfAogwXr32e",
  "key40": "5X65X1VBYvAGYcRvpCFrRddj5uqdsZdKuzCBDgxWJGfCwDWEkALRUhVZqbJp4BgQR2VpYZeRmtYQUDF7VTTUcCAe",
  "key41": "YJogQYNRxCWvqxoF1nHVYqMapNoun22RYeR7iurinXFovP6a4hTxoC4bbFgJG4Y8MeqKbieWzxc3xjavuSNHUjB",
  "key42": "2Rc4upjFhu3GdcjT6EgqrRaz8ZN9YLiCuHfXgJXKYvo9W8MkHqDADN4dYwAorPWnMvtcJwXDKvFNLfD7om9iZmyd",
  "key43": "rZBEsMYrNCp62iJ4Si65S8YVj8Ecwrf7xpQ3s2iHTkmwbhRxrnPjJGvaKgiQ5tfRpUxoNdjbvcnm4SZXa3vjMPz",
  "key44": "5WJ9QVPBejJRq6MAukqtwvqHrJWUzxjKViMsBF9NaE3NXS9g76EiEUweiYaCHC4WKDESxL9pck9y5GSaWW9d7Nwr"
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
