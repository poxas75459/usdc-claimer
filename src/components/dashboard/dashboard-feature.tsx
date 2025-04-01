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
    "3ykfvA2Ufhgx8yJ58feLoQGrtBJJ5VccozxeBH51RejwAfcHcTWKkuhsichFgF2ppiSoVsnE3GY9xgNutR9TtSfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ovGoBYTnnDJ1kpNEPGeBGiYfrqBznS5qciystvUukeJ8ZZBfBiAfq1XayHJKeLNFTqjBUFnrRonqTweDj8P9smk",
  "key1": "35jYegsDS9Ss5EVYs2LiU1fEBB3fKgdawRWFVbm3ygX4hhucTBiwno4gEPzfA9ANBLFT2nZpeozE6qBXEV6Cg3zv",
  "key2": "Wz6t5R3DFwcRM5ai57jf62BgwFBoiZXeVQajPHnAPYaGATDscqufUNT6sib68upTVg1y3LNGDQY3qBYXAMPgCni",
  "key3": "24yRBdXDPzb6vFbiJR2RX8mFHkQoW7TRoyKewYvwSp7WQLsURkWEPoaArTs9iw8sWH8wVYjiEGvfmuNCWGn11oW9",
  "key4": "2VoEYD1fr3JEu9PH1kuBeSb7UhiqFRWMCufmCrP3qY5nkWtfYwnfSodrmWJe9HGaxj7t4qKNeMkgDaK6ZC68jevd",
  "key5": "49KobckALx59hMwm1MueNjiw6fYYdmsMgyFEi5nABusd8var84x1SKXxrtLxqPq6jzxnHhD1SjaazsRyXC863wnf",
  "key6": "3N7uBqym8BXmmAhVYRwUFJe8DvUTDX9LdEsvKEhpKoHpnSJGTahnZ7tL5PsVEvqNAqnKKGV4T77ZoPsyhBKssvTe",
  "key7": "3EjHXyfn5rCGiWocXej6GBHVCmN67rcCP62i8F8DBvnfTszVfPfZK5t6mkdE2jEdTjwzWDBVsUumZn5NNGnCf1cg",
  "key8": "4HXsfsm9tfiN7Zip3MNsuj9R1HCPbZdY8ohjEKCKC5UN5aEjrsQhnc5yd4qnxrhhXrQKReSnMMTR2dq2N6bwwLBw",
  "key9": "2f5hrJmZad55B9PRGx89oy4bxPzh4LGhiNAadsxYPQHgUUAQkw63etXVNXTirWqNBoKdpcPvWRntjYKNJYntTxo3",
  "key10": "2aL99JNdUxKuDk8jtkUt8cCKaN27TgE9PL9sLgMwrge1QVVVmu8GT7BZTaTo8AwzAEcKASQTafjBc2PrkzVR96zc",
  "key11": "23nvZSzGLDsAuXTuzjyQmUx7XTZY8f91b3vhENveH7a1eBLNCkzSkaTdyz2qHmLy4znH845c2i5UqaM2a11vsWV7",
  "key12": "4QJQDtX4NU8NEYnUuHBg4TYxDJTd9tT6q6iqiKHmiLqogJ1p4rPmW6d6YrbPDJ43j3nGA39fiQp9ctKL3Rd4hax9",
  "key13": "NbSGDrXZwjUfAgAZtfGo5gGDMsGkVQZZMhibJUxDcv1YR2BsvPaZE4V7FCAEqkDUdA6hdKTuZFu18oidsUUsTUx",
  "key14": "4HQvbNBm4gzXmUdPKMZfrcbdofnXZy9Z7KEDoAkDocSdN4vbcgskBZoqBqE8wSAo4xXqosxHe8uYLfAmFYLRkGFG",
  "key15": "37R3r7RqkiTxFpiCvoiUCEhv6AGVDtWe2GM9f3LkqrFMeZXE2Fehp1NbgwWu58in8N4fUN8QCHdDMEchrqxSrtaj",
  "key16": "4kGPsNiAWg2HNvZvcLNsMdHVsqxLoMLTTbtXoHeTfaNPXcUAjuDZZUR832eirwqeEkXLnBzfaM9ibgfpkEPBf5V2",
  "key17": "bvBxumJCJaPY7bcu4Xy5YxVwMUT1BfKBD7bHoZpxiwFDxNpCQUoUnwHvgpTyadFSeMjjC2QXmUZzhwaTFU1gjoh",
  "key18": "5p3xdgcYvqVcWvjmnNdNrMstVHsULur18Xt3CfNqyu31p4kRbCCfeBhH9V4hHnngSQ48Wy5UBzwYJvo9hyEYi1yG",
  "key19": "2SJaS4quBxxu8FM1YSZt997QVtt7bFCEV4qz1hep4QwcNVMmMJ4SegewHbyauNSTev2cu1SEKi4KWAdsqscouWtX",
  "key20": "4dvNUeHeYT4Bkkp9Da5pJNqPLFjv58br2rYQR4MyLPUQBYuwhrXNYyRTSJYaH9AZ7evr5xL62c1vb47fB3DT5PuS",
  "key21": "4hK8XQkjaA3dZbtXV8oga1FAGzU8SVtynKrvHSpxBVGQqai51NnJQjZzLZSTH4MErFfkLedwDX7jPzhLfNmBsqvP",
  "key22": "63HKj7vdvgqruk2CXxMX3yNEYPbDYY1HWbSRVjh3sTstRXb4n9xE9GUhpowZ7CyWwMWb9w6XHNkaz5VbwYpVcdHe",
  "key23": "4g4ae6YfTeW6dD6Sf16nV3r5NFhvQZP3vk9pPEZZPrG19eqt8Qc4MRXDfhpLYV22Zn2nPvtidXa1cvEvwmA5PZG7",
  "key24": "2A5u8VgXqW1fRmikokdwvV7aZxRbHAW7vfTTYKg4euVTMmtv7Hz1RxK52d6d7TBbky3v5F99tQdbfXYSDfF3LBwa",
  "key25": "5FGnh4jyxYBWY3uqwTHb4cYXK2QE45T1M88wygDUAb1iXLgZ4tT4p6aVPbPerbWkXDBMxC27yCMSF9DssdGcwEco",
  "key26": "5MPVbwuonR3NwFjemNDjRNb9aLDA17XoK1ZSX66dxUXoVGiEqmCctoevkKSM9e5jW9SyzfJRXf92r29Ba6UgCpoW",
  "key27": "ZcWHpQdyMdeKrAmG8HM6PEGNmtMGXkP4U2heUHEC1sixuFnY99SKsVMV4HUqoiceFAiXGZFoD1B5hq8tirz8kiM",
  "key28": "3HGrhbXh5mpbb1SjtPBhy1j9jYUuFq1KfPwoKKusokR7QBiBt4DEqZuvKQhUoVJs8SVTGCLoKG1QfExmzcphPjQt",
  "key29": "2iJUT8hzmNFweNLmhfxdk9VFBDwJH4CBEVGEyTEPnP3HM8aYLZVsuiPVrvjA2KvZhWZF6jhxQGNJiw1YKcBsujNF",
  "key30": "5RvE3856zvGtVPcBVafwg5ao9jMoqwHcpJnHym5QGKmTvv4Hr3Rkq94E8C6a8EZP9qZNUiCJRLeEH746CURpM281",
  "key31": "63dieYvVzc812QFaqsBSxX9ZEbuUpFhcecm8P2KCRNN1KUoopqbQHhrd8hFM4ucgYS1SPzaCM9afLFNYHwgxskw1",
  "key32": "39iH1YeWXYEJbgYvBNvVY4xg9fmcgapoc2nPwVRJoqsvfRG4iKXKYTHXawZUT28oqRQYBxb7gdimknQo9vLZiiBZ",
  "key33": "5g31aCKGH9ZL2m7sg4xtfafxLV8Vn4TN5mtj5mgrtvk9vPyUCuWUB3CvhcQNHguJ664z8uqqwEa7w8Ft4a8SpygA",
  "key34": "4eCwiSErGtwi6ZeGqSqkSW5scBirKqWhzmM2ATcLuaghCetqmjDb2PiWthFQLCzqvak8zBniNsaj5Zb5qkSiFHAz",
  "key35": "3S1XBX2nmgELp8jnVXu5yxqsHCmRW5QuH3fegwpSEnXhnJr4hPp2LxKX1rMGF1NekgnAXZsgRk32nYCQEY26UiDu",
  "key36": "5Uz37ghPoFvbAbPH7xwL5bYdM7tNCHiyF5mofA6uhfzY7vXHYW8fDwUjvaKHsNt4AR67sRCUfUsg4Rx5pLyKu9wR",
  "key37": "4SjyX3QX895jgE4PV7JjJrBKDb19fnQdRwfx5CvnUNy7VknJNuDKsJ36sjXGXoJ4iN8mzjkhyCMYCga7G6eJsnN3",
  "key38": "4zxx5hVKEqWWoZ68YEgCbkuhvG2bTcvYbwWmVgDFPGLYMH5yRN9z8r9cmQW2dPbdpB9eSqXpy9g5ceac1BHjuR1r",
  "key39": "47K2NcRPdaPA78oD2nqoqYoyRsgoURXqHEwjChfJxUHCyDVYmeVEZKt4RHKShK5L5So68AMj6J4G4hqekBjdTrq6"
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
