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
    "2xv1h2TVuVe71EzQctu2hWoBN2nivMuNxxu9nFx3HgZuThjDxgHhTQ4DSmMpBMnE9ftvENJhi5XfHa4ABGiaqDjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bPwYBMaf2bU2dZmWgW7XUTh9Up5JM9NgXqZCc6HCC3Zc9beCcriDQX9jGRWbiLwzDbPGSPMvsD5ffzpDfhByXLx",
  "key1": "2nmK3npg2DXyozhTTxdMUFZSuUwDy7iPM7LBMB8bUH8g1pNwBReimSdrvaYnsTJvCinCq6ZR5DmuKmtVfND6o4xF",
  "key2": "4zzM48HSeQ7D7kGySCkFyEFy7Xsb1KdoBgtJDpH46gFx6VGLW964NtPQoyC74uwUiaegzmFTyrAYXtBrXeZefjHm",
  "key3": "4gvtL44NxJQ9aae6kiPbNReCis4S1hn7cbW6WMwZiy1FigQuW84BCwnu96pvEMnThTMDwN7C38qDoptxrVqYCdq9",
  "key4": "5enAAkPuTYvHndDti3oqU6RUxmFYdeyDEkQkQCVgXcGzUQwLz8Wz3fv5xerHtTc2qA9gAbgexmagBiXTxjAfgpwK",
  "key5": "Xr1rNwrMv64aaVxSFdRMBAahbXxhe9GNxpFUNne9KJBc6R59ugEo5BSVhv68w2BS58cwvF6geHyWvRnTf6QeXim",
  "key6": "5bkbrAErjNg2nqTCGTFWM9hXfd54XZfSSnHhJakmuaRWTcaP55y3c3Um6DLHpnmZ9bxP2zdXXJrEocmH4ku3UVEL",
  "key7": "5JEpHF8cVVBdrJH3VpCdHjwKJPkGDndnposLbxsZ9aWA4S6eko7yc2R2Z89xggjQmLnQ4J81G7vffaqbuteH9fKN",
  "key8": "4HXaUfMqNGzL6zL1DwygigR9hS4B2fVfB4V6HPaUdeubm3mTrKRn4cye1NfeowxysKvxfHQQyEuUBqacrmp47jXs",
  "key9": "56DRrkwWvRKVmBSG6HNBvz3g396MXN2w9LNMLucTfVHH25MhfXHHwkZyFbMhG5imTLc6RiKNdxuG28hsqebZ7SCB",
  "key10": "AYHCUrPTriQqUKtuVijk6BXzFYJn478RGGGAbC8w6ddg5g3P9Hy7zFkpCzexSX4my3JfwEyUniuBN1NsE6ptMcM",
  "key11": "4ernScpBBGvg9sqfDjJzfMTGfRUPc3BotkZZB8z1yJ1awq9N11hoYudaHjbCxq8vNoauXRTjCoMAp3w8yoEafi1e",
  "key12": "3fEPtVVJurABdJdv2ez2ttNKhoEcqLyycrvBSWyeY9eZn8ucE1RQb9oT97noyLFH2UzuUy5woVLhtwTAVm8RRS64",
  "key13": "h8kjniSm88sA9aXiq1k3hhJzzbbxeV2YiegyYc3AfhhUA9s9r2HLiTHDie1Sz8VTEMykXqZ6ssGcvb3zhUGZuVN",
  "key14": "5vwfCETXXLG8HkC2HHR9bGbSo2K8o2Q6aGLFLBxFryFyANUyX3H7KD5i6qDYSCgbkf5DiwuBNoWTsw766qL4mgP",
  "key15": "3XRpQkdHnWkwYVhr15qSQ3kcvjF27fn4sAHj9xBWTKmkizDrfGQsBodmM13VdxStyKgLkbC3vsx1JbPj7GzsdA3h",
  "key16": "5XDEndvjFVrkxDnPpfBBuQ1DhGUkAkwEhKTcvKeyrqQAEs5xTdYQCsNMZD4p4qLjPB2PV24XTAEZ3mdMwiHT83Da",
  "key17": "52qU9vJCykAQa3mcLzeECf14JcaapHBmchjE9qR2JnXXREZEfmKWgCm1ukxBU8NgcGoKhbYZe3x5BNMenjfBRRuG",
  "key18": "2acXZEdEHCLY5xtq3oduKhipBsmhW9MSnrMosUWRGaYv21KbqWuFtSSKmGLAwSUGZQKYsJx9kWiAN2CePrcxGrmw",
  "key19": "5qUnsU1oX75Gi6AxU3VnFbre8Rn7AkBVL5ibSaVo41KnFAeD8M6jEioRFwnCEWQxE9ML1uSyo8Jc1ZXZVdCsQFfg",
  "key20": "4BeW6TEfkuZh8vtcCsdNmf95Gk8ERe5GyLUg8nDXAdbojamEDyQAzbY7eRNCM5MeCUWN2eTsG5k54x1ePRrxCUUD",
  "key21": "3CXHVZiC6tUHGXjRgJt8pej746UcEUdgAMfWvG3ovRrygLeBoDVuVWX1DXuDo3dQ5e3oM37dMRZM8tCjRMGmig7x",
  "key22": "4gRYtEeqvdFb3cSSx8ZfNrFMaFxUckue8hi1ZGLSYQwcWXkrXAaqVZGmvGpcZonhC4kM5hm5ceLTBqvyqcRPYoLJ",
  "key23": "4oSZnfnvDKLF1HfCvvqpr3huxYXZyeCEQtL8Tv9aYtWPLGd1rVCeuzM92gbdXpGE8pE3FbeypJNViXEkMdLVc3E",
  "key24": "4N7PVskxHsonZNYXTUjFSzp354rDwK6YqX4BRYcK2vELa63NKSM8S1iZHXcvEeqpNZB1P86TQRPDV1sqrGVFE2wa",
  "key25": "2srZL3hXvTSG8LyoVP2WdFTrFeQUZSodqvU9tBFoDRt3b12Z2Ycpc3bbyXrgEWUBEFGSWYN1ZqkaKhR68wDHK5aQ",
  "key26": "5SJwFTFk8vws3uCZaQLyr1m1iUGVmY8foxjYNAmv1jWKPA4wdPLoHyJZyfDH7MebAWSxFAkjdQBAezMGRA1mcib3",
  "key27": "4gDBn9xaEAFuLnq4xP8RNDudvH8TtADkR27modgaZjtModNsYK67KStNPwtGpLFsLBcT4hRq8DM2Pzjxze3SKwQA",
  "key28": "5YdtSA6tPybjnxtwXSqKTPtyzX18cqgYiirMyWVjfSXmVtQuRYvRcd3sPAb7PXZ9Q1ksciHtwWsEtxZUmDjNgBX5",
  "key29": "39FZXwFwk9pTFsw1hFD6tAdTnzk1oZUbhRyKXmpkJ39ZHzcqwjkD97LYFwqL1vwmMrBF8WyNJpo862YQotJcWG1d",
  "key30": "2MZBojLzjcFrtEuwJLaTzMJAVXcH872TXRwT8URNBT4Z47iyQi8yNB1UYabn5mT3K6rWr42wGQABYUZjJL6dMrux",
  "key31": "5TdGuMpNiaqLT19oTPfXSNZSKvvourEJ8rMZ4gy4gDZRUMSrq2mmHyKGPZvzNqbiyAsHj61nofS8HvTkY3ZxGneA",
  "key32": "3GENT54QKsL3QBoCguSG9zzgPMa4Zs5b16ADsq8V2aWPu9SvGaTX8DtYRQdtZ5pLoEKqMe6ukrDPF1JnRv3s3kb",
  "key33": "tRdQaE5RATFDF5r7vi7ENwDGqRkXjcgMmqUwqC5Y51MuRNFJbAWYffNQYfZ6G2KtAKB75M8XANsFJLC6fbyN6m3",
  "key34": "45bdGqtcPNJZhHjJizLNsscJU8vMzKpdy7pZqVLAxX4NYMMgrucWxdhiwYSLvXh867s9BgLzoWtijZrE1woGxNyq"
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
