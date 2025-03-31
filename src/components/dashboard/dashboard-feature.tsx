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
    "2DuXPfmfJTgJC7uboXiBnCZvktvbw75XyRZFt369Jv2JMHfyNtmvXPQD6h6G4da2xxfP9zRcZaJT3GCb6GvYoHSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645CZcBCGzpXtcnaHNmWm1aQgFCE7UJNWtqN7LyrHzXCrmMDvZx2FBQUr1Lf723QcbRnCEeH2pVxAKYmdajCuEUL",
  "key1": "WtVVUQtZgJzrwBZS4oL9VCZ8URJCiu5EgUC925kH2svFdzPVwte7Gr3VmTAmKskvdaDnWtFKtBSZc2A99FRTaKK",
  "key2": "3Sw2jNtNUMQrgBBL3GdsDPEy3bWnkni8FkAN3RdTFwqjH8yMTudzWysL2X6Dc3i6dUhnLaaug8JZtiNhjcigQXM3",
  "key3": "5wtM6pATUeoH8o2AuWXyG32gaJZhowp21qcDMXswejXukDUmpCr4gRqi7FcbTZzSEP8ZQQ57h1NW79XkSLEcyRD7",
  "key4": "5LG9GeKFmFMvKNWtxWgL3SwJ9ngyYSqvdTHHcr1bK3wW7r3acjTVnU8BKZh6GiNT2C46EpFLevZs4vt7KDnqk4zp",
  "key5": "5pnaLFF4sW66VyeFCm8qScNVja5thqrKUdRE3LBv3VjjJJKKinJKZ8t4u1EqxWFn6PwKUuQ5XhoUy2mGwTEqgBLr",
  "key6": "J2euXjKjFrmxJMtXjMbdnUnKm2Q6uf4o62aV5sWRYSh49kvuCgxNrvacERu9TL1QNd55PWog6z9ZtYnD31YfoHt",
  "key7": "5hhz3a1jxJHZ6EjAumA72FYxsuXefGnE3jHRG7NHo5rbcHqHwRvNgzvm9orhw7bpfwTGLpW5psTU2dUVfYDmAuTr",
  "key8": "5jaACCw6pMnW4RfNPVqtdKznR79fnkpqLnwfajxxVTiEPSwJkkd2p9rfRheNKtpmyDxLhv3DwWVxC6ZxZUBDRp8u",
  "key9": "6WLzxnKKEVbV2i5uiZ8ELTkoqmmNCrhR1j3ZRXYN8wQmgjGbWAxsRdxiHsdjr5BB7LS9mxYZwMe9Moqx9jxYayg",
  "key10": "zw4aqgKLCpSWv2crdSmsiYmhaXau376fzSt7SYadv82eB4YuSYwFr9q8DdS2EkCR4c8oQTr1HhZ5UdQRoW7EpXu",
  "key11": "661JaGsb4JytZC4RC8zRurFmjRThEzQZZZ6vK7iCrWDfyAkpciB16uxQHydQjwhkXV7YmArHts3S7u2k8vgRWjau",
  "key12": "N8iyZBBNepwZWDAEEoqigPpKE79Gs65dDUoNXkDF7ExS6wupbJa27Fkb1LuPxZ6ssVDGBcL9sHLsHPJPPaNrtmH",
  "key13": "52FbBJZKRBJD1FFHTQKLchyQumMz3MRbG1EBVxRwQUpidWR26KHGhv6vkL2RLtx1d3Z99ZyiXBx9yzhxDF8a1k5V",
  "key14": "a3QTEHscPv1VV3di9G131MN9UckGzuwMNbKE5f7BTd1Zw23Cvf3cQQGCVCcuBNEh9QKqctugLMhA2Bg1MHcG16r",
  "key15": "22BXipAMUrj7n29GyjvR2DiNS74seYhLuboGpMJA365KPNJQ6fHJWEeKxEKZHkG7VxjWabs8jDR3WYfjJkAoJ7F8",
  "key16": "5HgbFAhM7UHeuDmiYwmvFAQAkBh43P58FJmZNPi9zAz5TRccLMjZkVCsuZoy8uRRpihykzTYbk77bRoTCnsqqxxt",
  "key17": "KP2aujPeDsVeo9B27r39oZHq1TTSJSjLYkoFbrGgKL8GrvaMnrpxkze64efV7cgY2VoFRiMxzgZ6WLn2syPcyS7",
  "key18": "jAQmiNMkdtGApWGkVUhVZqKbp3mJsFoFjvc5Km4QzKabzhwjsqxh557F1SAiiNWnwTFE9KhyagqXy8VLrYVTYy4",
  "key19": "3AJbM2vtLvqZLX4aXvR1FDFFbdyKhYnowmjrk22TTn1nsyZQ2tdT4fWJCQKsfHdVqqLiaTkcQJRkgxxGUjvD622u",
  "key20": "5RKkNVnjiDaSowewUvPcSA2pPitGNzCPdRqfv5znjR1NktPnhWB9GmbHoEnFr7oGg1S31P4vST9cT4nDd1LCHtpC",
  "key21": "72zC24aWkoW5B5BnCpn4schN5ukp2YURvXEHRtAe6735c6yzsjz3Enx5Ht79BiBtFydUR7pAJYxuCoVnaDpAcnS",
  "key22": "yxLa7G8XhZjWjRcPkzL7SNuNy6ZBVtB3H9mZmDeoHcdotpLJb3Lm6mxDjpQNTtnTmhaZRdHrUgEpiQEk8RqabeT",
  "key23": "5m1jiQh6GCRE2EoCuccqNsaiRRTtLGr49AQrwmVkR3QXdAQZpJ64kbLHhZb8hiQ8Sj2dAmKkkhtwh7LrZpLeJfdV",
  "key24": "YQwTm6jqsxALd7wKF4y5fjEC1L8wgiVpqHdCPusZByrmgYj24ueHFcfLk6WMRSFJghbD5RgsjNxmhwMCSw249xT",
  "key25": "49Zo1yxrkqzQszkAyCVNevWmAEX6z6gN6aSu2ZoRUbUGM1bCBzb41vBpVt22KwXZhGnQJLP9SXg3rU8Mi89Crwss",
  "key26": "3ocXjuPimg7axQxCVPLaqdb8q8FKXyvfSmxaziHfXHaQ4LHKpcx6nER6DLqAXsTV1MzpYMtUqquPquaEaZryAQRT",
  "key27": "2N6AnbcC6y5Dj4LkoGfgsmkhhSDpW786Dzpyvra5V3nhev1Dx6HDkJwDZ9YBo7AbTgvhVhMziiMa3QGUpboErF37"
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
