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
    "4xxB33waZwVXXMis9GmY2psosBbw489oA3MF64KQfqMFcrSFzaboowZC1SuQRy1cwRFSUB2F4YgYWkGQqtiJrpMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YHwrpLJY7xafZibVp6obU7qeKNoknyAGxxSnDpD7ErwxT77Mt6jvsiEUQoinRDgGx3i8qcaaKLPFrUEzZST6C3R",
  "key1": "77e1nVR2LREtCp1Hp7GG5iCehPkTWQjD35gQ4wn1bYruTScfMUwVeQdnTV58vsqLcx6WEVVaNkn59aGifcAtfV3",
  "key2": "45BgqVvT5WgiUW2ZeWfbY4f7c8iS2FcNH5qvvWRKhMpYWvx7u3F1ct5vhfjd8q1V7vAbSw5AxMHQUPyTj9oL2EDM",
  "key3": "4hJJ8qcxWhx4UknTUV4gFSvjViQJhtGyiuAJKLdAjmu61qEbubBp6pujkD3rk9VzHSCyH52eXxTjbWZF5Z3PA3B9",
  "key4": "5HrinvhmTpaTG3N7fa7Bp9m6RnQFJfhSh4Fo8nuix7FjWS1KAJTKAG81FsxFrtGZYVJchcGoMMSQSijVuNgmyhms",
  "key5": "5hjwwyZzQLQLRSrYnMw2gmth4vaspJFMNoqDUvpLySz5fvV2ysnF99fmzQPTxxnNznabWrSfTT65u2LDWq8h2DaP",
  "key6": "3rv5uyiF5dekLPcvdR5py2HP3tbERWDPEWTRVYUuQVppATtNeSkY6DPoTjyyha29ivqunu2GvXi6ZD7hGRBfidnF",
  "key7": "mPeUyzPK8cmFf8ABGCrkSfCFQX7FaVGJznCWudCjFFTAVaPM8EjyNXajZENe3fnaAxZnBRwUXhdxwM81jFYAzYJ",
  "key8": "4ddsuHeioEK6HaGqRJx7GA6VWr26GLYfcWuhcmShGZLSZTwihJGXeneKgvmRP4eKmrK7cq2zodQFvx22UYUrGVWj",
  "key9": "2HmmCiA4VAqrrhkDft9BRmSQtDM1FYfi2fv6XbU7xRRxc4BvmoxyNumrz4LvijxFiYjQKYYVAx8qs8Rg8fvin6CV",
  "key10": "4YoUt8QUUpUyPRsA2vtkXNi7tj9NjnRwQef2cWz1aUjJ7x32AaaxjuVFkKwMbX86BGxV82YaUSuH7ESVMNgAXZHE",
  "key11": "2232QB2K7RZniPbTP1qeSph8Kdme2pm7KHAUSqvig778sizLUPvcjfqWKAZYiqmNzwXVGfVTk4Vpg2VU6vwCZnKY",
  "key12": "XLwwpeMjPPCK6gqCLQrgaokyg5k7E6A2L3K9tuQWwU9YX8t466DjjyorRUNLhe6A26AWHLMT9vmTYdjXEkMQ6Yi",
  "key13": "5ssQNT6fwsBmSfPaVPHAxozZ2cCCruFHKHvuZQYLdEK5PEbjHubrChTNNZ1ADj382pkW4dVjgYB2BjawdiQYtLWL",
  "key14": "2uaWzH99BNpsQ1FsKKk457LayK3htSTytn3MrsxW9PYDWXMx76nu59oRA92W7zzrXJEwopeYujQxsun55SYF1WRD",
  "key15": "329gsrkuUX1r82YXMAs4phpxvygLXs6KkGTUQLrDzTkQu87vEb3sTpFh9Q76ZUk5ekUZudtpFs3ivHk63s6WhZCU",
  "key16": "3rgMMmSUUELTiKTmsso1d6UpYGrBJoUygg5vhBMieR7By8b7uY6QhsSDnmiRCesyWsp3QxoZF5pe2a83MFmK5XWF",
  "key17": "3gs6hMhEdTCt5QjsZLVgeBR1DKxWJDJgCortNnZj5m2Zoi6N12gHGU61cDLuCV5ijf1hVK6TSCsm6QR7nkxY1EzG",
  "key18": "59Y9TMQPjqy78NQ91V182esySddxKeX8rZKub5asHZeGhYP7joafwjWG3LEDCSotDDsaLtqbCF86FrDr4rq3ovmG",
  "key19": "47LnYockj4tJFjorymvK7RCVbBst57z7PYzNMxY6hv8pxS8gF43xdPsgmnP2NjdL7QkHpNbDQT7w6w79mZ2od4dy",
  "key20": "5tNDB4dxvg3qkk5nHNskrWxBobXwdaLuADj6KHQrDRG2ta1xbXtHo1AbTGxU1CbQzaUndS47mDCHF3h4fRUJyMP3",
  "key21": "4BXJPEzG889J1LzUzzpfxNnUvNNQgDS7qacfR13VhRgEFEBik4FYGaACp9uzSrJnav1dpqNh5E5poa7Z3f3qe87Q",
  "key22": "4DyU5MrYepVsx95tYvTmTmjYPpKwZYZGLnRqZJVYxhMxBrrYBYTXop95mHPN9j8aVGJtMWAKcAog3oXxdKizMW6u",
  "key23": "419xriJX5jDUPzzSPaPSzvnDF5pZ1CHAxyB9TTrHaeUQi2XniJo6YmRhDh161AkF8VBWupeKDLxdwYX8r1QAXfvA",
  "key24": "5UGxaKGbDQVnj9dcymPsy1tW8vkJSjRQjFY7PbwM7Q9MgNhFAjmzVELeU9qpcPJeVphaiVrXp93Gz9H2sn9egzPZ",
  "key25": "JLQ63cUvoFmjRtfsYsvRLz28wUehYjUTrPk9SgBQBWCNB1er4AoT5eYLdJrhA4F6parrjq1sjATrkHVXwb38Tab",
  "key26": "4yuEuv4Vy3fjDtSKvaMb5yvvDodKbrBjVvxR31k83eZXT9YQ8VscaEqeGAD33ryxeGxhiP8LNrVDD3Hasc87p1cp",
  "key27": "2n9AV1fUn2Nw16M3L27EzsHA5HNhw9sBrvULXcY6i4kGkpcqmGVXvQYEEJM5gZw4djdDdc56M4JgHTEc5tGTPjut",
  "key28": "Djk91XLF5w8j8B1GEtungporBtt4X7Rc87Zu5eitQEE8BLvEDTb8DaoEKzJZYfvyXpV3ZpgDy8uKhAQ7gWWYtds",
  "key29": "32uW6mDZuw6jTf2wDy6j6PeibRWYuBRcUqMs4fjV5oyc5AhemiSVqym3KuLokouCUr54sdh2tRFu2aiC6cgqJUVt",
  "key30": "5FAxSDro8gjQJ1J1WsAxoaTUyfAwJzUHdQsywTCXK3x1gJBitZLuHGQjgRoL4ZyBNAXytM83kQrJ9b1jNBxyd1s7",
  "key31": "tvhLqiVmso74iZJrfeHGKMFVtJJsixNopLf25YSG3JeyxJ7aedAnJRtpau1ddrDVkESCD2C5rPEJ4hjA7PbFfrR",
  "key32": "3vVfqUgDnoPXYSBq7vW8CZBN8jfTcEMnW5B5MAuT8bUtm5EnqFrJpHqTXR84N9ZnrjEdqkbMuPSegFbU27rkCFM7",
  "key33": "3fqnzskkC1gmGMm2o3m2k7WXjv6QsZjQdpjDMcU8517QmKDS5TGBLPDtAWhMqwiMHCFQZ4ATZG63qKcr5fEnFbNE",
  "key34": "N5ZkTUn7oZDQhKWGqaFnTTYS6y2CLEN1Y6FKeoDYCdAYyGBkDu4YeDZpjPdUCoQijzQGALHAjfrShy4sAupqE2Q"
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
