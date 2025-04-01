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
    "2MAJRfADP2fRWKtwYD9BjHWDbzE3Mh9iEeaUE69UEj2pdLuuPiMQCPFSeKNoFWAH92uQdyebrU6V72m7ZYdXZupM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PXJt1JtaFZkt4VNj8sgAFcJ78ivf46GL5mrgCdWD3pCpXpb5W79qavJN4T35CXpkFZ7J2J6r4vLMTDPAZmZRhGr",
  "key1": "5T4gyoMbzHxfp4eZKYctH6jjHxAtKsujg2PGg7X7cjCVS6nsZHDBVbSY3z7WCfo9RMDdf5kmrf2XcvK6aifAss6L",
  "key2": "3y2ycb7vsQJvTBJSb5YdfjZDiQDw9JAJvBQTk7AvFbd3TphTWsPKpAQttYPhFzDV2eqLHE525kqQrTQaRbAAzgSf",
  "key3": "Uznr4465XXDA9Wvg21jMzBFdEEQvU2TKgLC2PXBvo7CuqN3JWczsE3CwVJPGEDWA39J29zjE7emN255TxjpRjwC",
  "key4": "Q3M8gHMhLnV61KLMtFz8sPNwcuVBjAp3DmH9JrasFbE1P7hi1dMuk88kUHjkzgmVRpefdbtFR4x69cLJ6soJBpk",
  "key5": "2EbLbyjAgtJzDzLN4GSkorvX9nB96DpRbBFivZZrq4Hk8j2xEyXuKhYxJWmYfQ7J1beZBWhdNH9kEMDx7nhVv5St",
  "key6": "ZthtxZV217iTG9HFrok77zbCj8VgrZJma7jnvL7YemLmXFKpAZge8nn7YBC547zo5gBvAkVoH4cJHuXsF3M9T1o",
  "key7": "2kmTe3d2vNYcG4v2hyLCXG99T27ReCwhvJjGkQQZjfd3vC4V4JdNP8ipY9CH7maRSg7vXndUb2AtZcrBnqpAnbNd",
  "key8": "BnzBzwmaknJ34ACwc8uqyvzi4GqWDAbbePFEEkKua274iZimKE6afvMh3ukTjxYkXcq9V3vWDXTgwCYgycJ8JRa",
  "key9": "2JV5o2GQY4yQjwAo6GvX4EkVsf8gSuKYQNtYLD6hqpsM3jgTf3MhbXv43S139qxd1LAEEfUpa6AaFLnETFEBmK6Q",
  "key10": "k1ZptiDDNhu5xujMjuyNSWtifqzFvfDykjPRJn9Ci2xP1VYNCfkazYpACARRe5rXV5ffLgT6T1t4z3vr5aJAtzR",
  "key11": "31KEbm3bDQuS3zNaXdJSkpBmvSM1FkqTpdooQTwcz4e3Dkdxg5as3EpRym7QS13R9VawvRu3P1HLUVp9Ms9kabgq",
  "key12": "34rJWbY9HDVS4ZeKyG2CghudJbWRbB7GYXmMHaU6enaQoZwuSq4mhpgFEoMLMdR8NDUpr3mbAP9gDGKxiwqnp9tA",
  "key13": "55MEVq4PpXTBU5yYGZbibRt8ouCBE2L2RM8BEwPrtdMzxg3Y8TQMnzEjNENpE7bg8NCEUyUes5ujUEi3UdLdXg88",
  "key14": "iXVhn4qA5pnNPVGmKEohzcM6Yf1ZMSs1nmkXPbqAbuJkSkXYKV61njDbhrCWPdjmbaefLwMzmXDGTtxkYSCayb9",
  "key15": "2zEtAs3RGmbBPoq9onbrcD8UGzRiNb8A1BgoqpPqD2PZuHdMbvudjCTMAefPdZX1NK1BAAQDrZXvmtrBdCjV6nzG",
  "key16": "22emzKAE7RE992wu9qbcmSq5NpndPWU13gAKzn4ojerDZomgRyaKCP3CSYD9qXZ4rtw4C3mKhtZNPELAnPd3hMC1",
  "key17": "5LJZikx5XnZKpZxcTd4QpPjV6RKX7WcAb7RmgH5BMFauuPBsoC35HQqTsYGLsSDdM6UxMcHHLFRjL5Yhji1pPVaZ",
  "key18": "4HUQBVuwV7GwNDjsU66CKgkcV7jahYg3ebTU8Jek7Kvji7Dk54cYwtrT5Bp5jUYQa2uWGxAwyKaLksmRhZkvURs8",
  "key19": "3zA3QeSsjTWbKGNnm42hPn76C4chiTuMbJbMj8ApFfKgT5MurXwTR3sUG9zswGp2R884BDZvZAzTbgdg5iCQCSfo",
  "key20": "2pZxr1SroxhdYiyQ3gDedE66koFhhJiKhPoHjpGX3T9xmDkpV6zN6A6zryS3gChxrvvcobtxLNoXeZouvMHPJzEt",
  "key21": "5E7hsdEjaJhmWbc1yruhHbs1YBdu3V8nF5tj234AhKrATrm9GTqrM5sjmaGFQSawUSGzLaiha3tSQNzj7shjPkKg",
  "key22": "4GBXzZ9kWCWn7PzzTFwgfVYmHMZYtjNP7dDk2Bpxc8ggCR9wPsdui7WM172Bhxrp4tKi9JTURxMPAaAP82TJftGN",
  "key23": "44k7m9LsK6THYNr7bufJdnPxJcL741fcmr3MeoYjpEywkb7cwPjkNSpH4GeUKMrw1Ejmi2oaZFKpgVJd7Rb5mwGa",
  "key24": "4ugDQoykmpZHgWDjHPnH34ic8tx7zL2evNLurvUSWjPmpMNLyPQTZEnTmmPGkGEwiUb34kduyg4MPocuCt5oPsW3",
  "key25": "4cDzpEaLvchbF4Jbo8HAMKKEVfGvvETp9dcSqHPsMmtaPsRMJpwx1sHTkTfTBG24JqPgVfPdjkQRGTvSbEV16Ypg",
  "key26": "2nxGDAhpeE8Mujg8H2tMX9NJjDX9FDM8tNDtmEe446wPBqqE85pxmQhcDkLxTfvTkd3iT1U7yRUDzKt2hkS6hTQF",
  "key27": "2qkkakPhWE8qHgFa9xqY6oeUg8cxb89StGqoZCHMWXogemBqqECrnBmjMv4mGzkujBqgAZi8zvgudSJWuqCzukGD",
  "key28": "5zLYM7ZqQms4PMEYtsvb8yKJz8xFdWroe8pxNsucruVBZBgWWxtPaKermwVMRbQvJdNUWbGNFETvvbn36Cgg8n2y",
  "key29": "2bbt2TdnBkAxwYPS7TzpXKkFvCCHiSVaXyZZonArtpSKeocYYZdSdaEawvDZ5hRVgrHbHhMnzyXYjFaRv7oSH4pp",
  "key30": "5baqeYToiCpmPT7eKBJBvtoVsiP5Za728CxDjuYLDtTF9um8YUXKZDT82xzbujRiKd8PdxGuZRz3JiBYTcLXYnyh",
  "key31": "4HZxh3KpPkB2K8PX2zW2oMaLbX8RaGo6SSD8xt1kh7nbS5hEAf5zwrBsGq9RmefatqAA8D3QpMR4W9BWAK3JGwLN"
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
