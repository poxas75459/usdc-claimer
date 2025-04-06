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
    "38U68spCNh7oEbbJmTTiKBBRv9wQrytRU5tcTFtajV5bUsyExTktS5XzTY4hzRgGorN1s8atEVtgTXm4Wgvx7Mmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ckve8H5PLYiZDRMS5kdz746QfTUESJo3CD9JPzsTXfzjjSReeXHu528bUnC3qP8UiuXxb3P5ZiTRdtrreKQS3eK",
  "key1": "3zuPPcGPUF25aNK13sC8zvSmGoMcqFW91rkufNFPNyPo82rM977cK78bJBMDwkFR7aB635urLXTNaLDJyDhmdSaN",
  "key2": "2JytBSfkRBJMzcuLwaNstx969qKfk19eFhUCqrcRWSc98Dm7K4eqoaniwYKkzFVsXkr6NzYyxNTe1WkTs2AmZA8k",
  "key3": "2qJixjwd4guUBbkHacTJ7zvZfsP2KyKAHmgBsREFUEYC3bjkawBubkjjz95myXzHcDbqCuAhs8eA5Zfo9MWEeuP6",
  "key4": "4k5ZsUZv8faHbMb89VddSLricghoQDd85QC12eEm52hgpcPpYS69sc6p5yowq1HXwXnBsDum4JWimE6xeXukmYLT",
  "key5": "2FPzR5cfqNeTn4aaJuQgzjjR3gMitKiWAvD1H6rGXsBM152LMaPnawjm3a99QmZfdT4m12GbxvDfmHeCCh2hz8Jd",
  "key6": "ZFsdWkQryaMGiB6Swaw27vBCGtMMXaiPi1N9s7PAaPgMkGau8hH1fjXXR5GTKe7RxTLyFnMMgoBCjoJEN7gXwW6",
  "key7": "3cPXdCZAdzmjUMC5mPC1fKt8CkVfD21mD6HrZrLgPY6kqP3dJHREQxpWGEw6wkarAZwf4TY8CYBMCDp6AByATPrs",
  "key8": "wj2cAmaVECnfjXWxQ35nY9xyktG5KS1y1ehMV44GbJVdtqMfnUUzei28Rt9BtZ8MTHcr5DSaYKL5V4PfkQ7tzfA",
  "key9": "4runsMJ5Cxm8S65FXwNf7Zy9HK4n1SXmvbYAqCfxhaXNnKzqX1CPaRApWmBGUv5evQUD9LbQ9CNae4UdJ5WnrEGu",
  "key10": "3qXEpKNcT1rDYydpQXPVPKvXedyTAo2xg2HgQDKRrjEDtpGPXpLKZQwKYG7LAwA659mKRQseaMw3tmhsqP6U2HS3",
  "key11": "4tjX5gidJ5yHbqb7uN56h99nj1LhkytJXL3FwTgRQ3Bj2bcevkE92gyeGJ3GJJNaa4dKwnRfgvhU3vrrs7NU9Seo",
  "key12": "ZPj6URrsVdnnierhsiWSgSuk8A4bfgyPhJ5RnDMQGC8GXSpVzUcV2oWvYzLaSh96Q8RbQRWFy9QzpQwfg4MgJkM",
  "key13": "pdhLRNuGaPKcVWzyuBisJnJYjxP3EVoshVSDMgNqU4QrzUrUSTmp9JG9LgwZVtxL1LdtwcuJGikyRTXLbdxBPUY",
  "key14": "5y2Vor9R59ThGQgpioYtKoWYnHyc53StPLoyx77q5WH8UAHYZjHrX5boCQokqEsAbwP7u6X5f4D38Z3dY6HdpKr6",
  "key15": "2ttsu4VZYVX4Dji4GcaQrkxSB1cmMBS2YKdgtdDLyPWRJCfj64XWqhSjZgZ7wiWb7uuacoZKHSknkDqdU3ZGwgrW",
  "key16": "35a45i3ck3b9QQDZMeS7AuQ2PHL9kmx8YNsZtDZ9Xn4xdGUXGxmu6paBkknq94aY5QKWFS4snZTonFmaEbLWupcv",
  "key17": "c44NUSKWSnzG4Bm4BcdqcDiwRYsKF5cZfnewVfvEaBsXhchRk6mbxATawHCvG4Tx3WkCFaLtuGZrGcYi5TgvrtN",
  "key18": "3vaVn6upyR74m39EuFqiqsmieg4rZ4gZbc4QqXgo8V319wHAga4diiXEsma3KPP8WAYs7xjNKji9ui5zwXkYEur3",
  "key19": "n1pdgce7faLVywkkpYGUWwLNxuf43b2uHnP5gzucKB3SqutK6ncQLaMLkTsLsmymJS8ogVVAVg3bzTXjR8iLr8x",
  "key20": "4g6frVGLfCv7dRjs3A82h3ekoSDWevxwwk8VaCR6t72gVG5rwKLdARgousWJ8t4dGUx5mACWHanvJcDaT8sjbjLG",
  "key21": "3SVBppCLWYrBgWQKeKFJHvkbt1oLsacmD9Niixn7D2CKijHTnxHjvCHT3mSZgaXgTgMA5LVWGHvLokeSYZwSuSaf",
  "key22": "2iQ627ppppo8pmF6RYNQ4o5XyuSaE8sPV1cXZLbn5RLUeaHeDph1s8to5xeEhh9JxcgL2UAQDFVGBQWQxgDLPZyV",
  "key23": "4ZfUdHGEEeT9js9q8Z89tZEWKvvKGDjBXwYjhsDzwrxTbz7cVXUoLcuLGk5r1CC2ZYEJy1DRDwCzvDFj3dCYDsDi",
  "key24": "27ZF7FtoBy5DJtcsDmvbtb5E9x1dPGnK6Un3EXVvd9tnbFE7C2gRtZEckBrv1jvweFcwPvGdXgRrpqGcJ3oLbQc2",
  "key25": "5Tf7x7BoK3mEJDxCuUv6TFkFi1T2Jf8L6YTm4dDKYE3xo7LKMyYCjw432558VzMMutGNxWnTNMPseDAVfaHznfX8",
  "key26": "XPexGKKY2s733Y4XAapafmwZqZDmJQwRfXPcdzMs5gHwnjU5Gihvdp4QrHjWKvX8htyt1eXSPDe9kH7dtUAuiGk",
  "key27": "4BSAPbHKTYo4541QL1Lhj4GWYxNKMjzmwQBzNmuvCV2VdekDZi4S7Rp2C9PLcpGuPX4MaKkCbxPiYEqfr3i1DQR7",
  "key28": "4DBDSDMqpDeKnMVgBYohfKBZKrCZSEL3UkoozcMnH82hGw4UurMVLooxEkmh3kkkJ74yfvCRj3b49SJb9rtgaRyC",
  "key29": "393eexxLJeycUmjy3VYETZQraa2ZUy1tCxHHvKTuHVZJnaMg9VNYCJUdzTugZL2mxyZzmbN1kvJgPEhFcjKC5Chk",
  "key30": "5qZ67deaaSnKPvMq8bcJAzCimEiXL543SAySKHV6hvfrSk83Q2Zc1bMFrrt6xaGxHioSopNieznzuc3ptJiuv72s"
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
