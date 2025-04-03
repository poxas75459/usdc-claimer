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
    "3Uwg62hDrzWahYNpJprEcn1iAM5swYEVikNfCseyTbRcVkZ7ygmSm9Q2aRHHmpfdKhczopjdQSKDwWusamQSRqn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MVjHGjdDVkb4ozG186breHJo8V8cb6QGuvd2UjDmqFztyLVyY1wbbStVvDxBjHKeYHrc9EzuR7kM2kzRTYbubU",
  "key1": "tCfzeNu4dAdijbTQRQ3GFAs5N5ZfusURi6VsPr4XXyzP3G5yWGdHPVTDi8gtXHWtztvDLhYWZWTaVwgrNGNkdrf",
  "key2": "3s7ZqiexYutxf2kdaRqkMjjHxaNA2Fk7DMQohqhazqVHeCM64iBamortECBFGV4Nc854bV7KwZixK4HMVjFKQhfm",
  "key3": "4zitDwPkY6tSa3p2dKLFaqmtexqdSJT2iZBVQSYHVfAieNZJdgVwr4Kwm4aTRhTi6hVT4ThKdZdUBaMAvXq76jRw",
  "key4": "2DDAdtaQcCKYB4d44Cawbd2M98CT2egPxhASczciZhh4RuMpEzR6yFMCDr8Q75Nc6huL58TRpGEfxUTLxMtMr6zX",
  "key5": "28mqFUNrkiVdG9wQc1vJP8QGEsqLtqV6Tz6p6KXwgsT51WdcfNAkHpzxP1wD2YeiwpsyxGGHS1n1NTdHXGac8ut8",
  "key6": "4GyHZ7pCnRs85qLtCmoMeuBycNTbBgzHWjisERBDpCuGe68tHbpPdofBkGJRTS1ZY22bFK4ihKPAnnZ7ECezUSt8",
  "key7": "35zbPtpnnmhtq4KXVG2phSenbvhrPuy34yC95NuW2V9HPLVDgTTj8HDerijvRUpdk8mXn4Dy7Ha3nUhDCKdrXbvU",
  "key8": "4v28W3YkUzTXiC7sxeawE8UJQMifJQ83sUBgxmnWswrTFrQ28LLxyPdn2kHbxb4xZhevQ4CS4Kunad7dqWm2CHFJ",
  "key9": "4cBqFMBnxUGfW7q2iH9X6b8ciPaXxByeZBte7oeD7muqU2j4vXKFB3AMvyQVr6w66zivP5ZFsPMDMTATWdyptmGQ",
  "key10": "5ddJrYZYtBSawqrVWgEjDwACsDto2rFSd11NbsWaN7YKXKXCCApBZ3cVsTC9ogD7fyMU56J4Nx5zq3BSBuEGRfCL",
  "key11": "24rdfqaHJ2L2xGgDrdHaN7S1rAyuFBgmqSeuYQp7mVRVhVXMuEJ8WqvdMavLrSpJi93uQVhxJem9GBdU498MSVmh",
  "key12": "4DqLd1qPNM3D5UqybTKaSLvXjpe2pRUmt89sA8oA5ZzdVr1WiE69rB9UgPopFfyRJRJH5VRefHtx8Peg2wR7AhXQ",
  "key13": "2qDNmaY1TvhFJySdgdjZ4fcvyEMg7FDTBQhW95Ut85h8w7SfhgoDLHYVBUWWF7rLRU21iKMnRmSGwU8SPFUqZbdn",
  "key14": "38CCD5hFjNmb7nHmjQK7yVuYanZEJkTSFSCXyzd4dsJxwpZTLQtumCp5PCXwkshcPMY8JqSDcj2DEFhMjTjrVnh",
  "key15": "ZHA2gT8DeWUxxJ9MDzDGk21fHnjMB9zSTqiFXW2QumdTvwMqnRoxWybCAmhVa7MoPvG1QjbFHrVNLQoSBCpo9gv",
  "key16": "42kMo7r57GkFCU3T1YkrMB8tY2aPzCMKo9tix2UumrSZ8DDWuiPCwVfBKtbVnzv34ytmPUy9HiTV9J2GMd1MSVwy",
  "key17": "53SK8mLVMQL8vkpYU4Kbg2UZEAyhfwaT835UF7YNSfrqTd5dJ9D36cxxejWQqofx1efJEuTkRn8tFvRoepwtmrhT",
  "key18": "DZiAVUFy6asxDptMvTWjBA85mjgKQvQHhQZwGTm2ovmpwJ4gQFqNL3vcRYBnukcHkYs9auApxCh2F5sSkdfqNFa",
  "key19": "2Nohzq1aGwbEGikQ4c4nWS6hTmHVBttZyChorgksW8a6kq6eZZHmX7h9uJwtKx8xkYJH2JtP3yWQbXDzJexczU3s",
  "key20": "5SQ1i88Jw1aTE89WZp8Mf83Ne2i5FtrMNQxvX9Nm6vTcX8zmeEX5bNH4nuD3PkCtYEJ58kQKhJEJxCy8nnuVc2NE",
  "key21": "4xFsWshj7kcwnN2MdR7QawbumCnE5d8w6pRuQa8aqGNC3edHNdAeBuG35kyHwH6aix9WpCv9d9KzUnk4B4toUxxt",
  "key22": "3aJc7smknXTxN1QMtM7iXsNm4R4WgbJ9pu8VNJCnHS57tR5CkKihGpRvExzE7ARvP9yCox1RDK4WRXi2RUBM7Sfd",
  "key23": "19zSrJpC6fa1Z7k1R1vVdggy3MwPNNQ4muZEKybZvnQsXnigKExACB8r26D5W7YcHmCWWJwBc3ToofsoXyawKwU",
  "key24": "3yWUzEow2vkMiVwczQXL9RBFF4bxb5Ey4WS9qkPkeyX69eBtLvUnUnbc1igABwru9efuTZuy6CzsAyJBn8Pb4e9r",
  "key25": "25vMioveJRXV8jrscJDzo1qLjDaxMBJwsj6awzk465PNpFEwyCpHcz5Sw1pBfWpm7ZoMGvnTgSEFRVZVY5LtRwoK",
  "key26": "2QGn9tsRsMqUNm8jFGSx4VY1i9L7KAG2Z4MPC622wd8LGE3x3SFk4VLH6YzcsR129HXRBfC9ftYBYqdVN6AnQtWA",
  "key27": "2DSLVkzTNcVKVcm3Ktm95ZugMXELzwCkNXt2Bshgbhknte6qj1xh2zsjYK8pighBA2J7G7vS9GKKQ3rP39rxGPDE",
  "key28": "5i3knS8GFQfGbPb5ty9GHoftt39nf1TyMy68mxi81UiDqRro8wBFEdwPm4eMRn2eDrDLekXH4jPHPFaFePWoKA4j",
  "key29": "avyevvUS4D3aFFAU4WH29Ry2wdEkQT8UPzmsh4WENG5qDaSTepQsbTdc81zJPPD6zyYPLrxGgM2SkRZkG4kEkLM",
  "key30": "2xy3oncfCxtFDr4VaHZCeCn8qMdXDY5ydgbspLqWd8B7GjNZUx68g5M4sMhkLvzv3qcuYDPcAWXd2FdUoSGnPVEf",
  "key31": "2cgnykVMznYoaAk5UDwEJtRZRfvfDmE7hFuRnuD8GWer99HKR44oqk9QDKHbLKYdfDq7ZPhYS9LxRN83jPGgt2vt",
  "key32": "23bRUD7jbFNUtZkhxjnGcxygqd5HmthRu8N8UVG8sigZf9RbDn3VVtxDZM2HxScA9bQauFYUGnLnoQLvAF9mXpLK",
  "key33": "3jFFksYHW6yHCQXwprn9A2UceVjfbnb1jSgKiUExD8LWphxNQSrb9YAzQNhkQahS6XnrZuVZLhvYG62jaqrD5Nc5",
  "key34": "3hejvguLLm1HmCyYQ8zmydscHjhEcveXX9pTb3L2VKYAUaLng7WUcdfy6orZKnxNfXzu48UBgftbi5feV5Bvsc4Q",
  "key35": "4gUxtYcfURkVZiKdUMRHQgUvGVV3DC4X1JnEQynwWjxMcmfSTJJ1fmhGXZcWafSCPiqALCpQw6F1vtp5djuRbmt3"
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
