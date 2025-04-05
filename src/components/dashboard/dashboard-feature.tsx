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
    "5u93nBNaB3SpCxNi4KGCvT7fDt1knEWznpdCzxXeJcaWHkKK1UhHBiJVsAJ2Xu6YQazPDyTQvpqFtHfGvjjZkhni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JchBeYxRdE2wdkrbe48964sKk2JbWQ14U2odNE7VNG8H2Maea3nNwBBsV2R7X7Hj9t6RqnUSTC2yvivrJsSmnfL",
  "key1": "4GC5JgM7e4r3AugTVa25AhGXPTPVvqWWLzZ59G3Y6hCncYBMU1U96YDds9xbuQue2LHCRTyrtp1xCUGWfFpCuRsr",
  "key2": "5aZr4sfKz3mNhBTerCTrf61QRD9kStVgB2eowqGoGkjYp9q4EGqptFiSRDFiTKDi6uYLXjdYchKiigeYE2xt9tjf",
  "key3": "51HNFjktJ54P1H2ncPeBqbc8pKWnobq5sGj8NfrKFEoCPpJjzD73iCdWmPC423TMM3DsrcYgM3p3VvJUqYjtKGsj",
  "key4": "33W1WJDmhSj6yacfXM8UNj3Z9i4FTLQxZJFv9nPm5VjwAsaBzNv9Kp4TWddzVkqf5YUPxx6mwNdDsA6oAJPYHku5",
  "key5": "2o4Hah7NGQDrUCK2dJBRoMkUkvjU9uL16fX2NQgCPybZbzMaXFrPr3rPrBH5wCzMpSicTwQiM64eqcam71oBMGSh",
  "key6": "4VWWy5aN6SycSqLmWJ79kXFwWouWLgsVsWznjttBwbkoBS3bxi3T2zWEQAXPpn2F4UAkLZZmq3zqJa6hGH6foEXC",
  "key7": "2nk4WdyXEhLfdwsvV8utJJt3mt5dC2k25PWyQLb36F6ojePVYaVdsC6W9tRWnedijV4hoeDDi61xE6sMb3N136d2",
  "key8": "5y8t9Stu6pXE7f7GhiDKhE2HUSp6Avy6gHPtE4mLVWXf9Bepjv5mfBz71FChTofBhCK4i447BuS9VnxrNFaJpCxc",
  "key9": "2wYqoEX7JhQWYEQGy1LciRxmN6n4Ghdg1ggAUpC6Y8eBgxuZ2Mze54N5afqX1YNEPwgHNiv83JLn4YD1uDZd6ba4",
  "key10": "EX9Bu2DnmUbtfdciaUANL2qfSVp8NUZy6osQPecZeScT4dq1YeYTudV7YnGkVPZGzENeB1KWfi1dzQjX9Re2qRj",
  "key11": "4k6LrQHJH3A65Nxr8TsdP85JYG5K4Hg2T6dGWQ6QfdXuCuv3DACU4qmzvn5fLbFXkF81xWazicLmvBcAQW3cDTUd",
  "key12": "41czfpPxyDmfa8Aeuvt1PaZWLtA8DpkHqXJ6yupypDzUfhSbwkdTmeGfpGHRAEcWs2w94UZ2fTmYvwpS5imGLdmi",
  "key13": "29cadMfHf2xM43Wx3euY4WxUdfCuuoAyzh9CMCFeh24joYD3PoMrZDqy3Z5CQ6vAY8997hUcXrAeVe3rx7JYucmm",
  "key14": "5zL6GgZYjXHMFfaLHafBBGxH3pxkRwFzqNiZn75cWAz7U4huk6osusdw2d6r3XVpn5Hohuv2mLWW3riZTuELJFKd",
  "key15": "4ymJdzmCeV7gcnnHVfNWZjd7vNLx8d92yhPg4J3Pkcyj5a19c4vx1p3uYkWpnSPzGJxBe8qPHKoPsVyLdRadhxDX",
  "key16": "49VGGpFzDNi5Zt6cikxe5wEMMcZmpiGVacTC9p5CEbhd1YgxAPr1epCLyXfquFgkoeAXZN37suEd5nDczPzg2QRX",
  "key17": "3rUbco89rjtssa2qkFxznXWwbdBeXZbjzWcwzvKxoXEnHRGL57dJUAsieHPYyMcVpcB6cciVbFb1UKJSVTKwHyxa",
  "key18": "2gBzTdFZFZQDyZXEUiwVv4wFGZCYNU5UK779fUtnz6ywXxidKTpR2ufd1xN5CWKpwS37EA8UubnEGjGBHgucyHR",
  "key19": "2P3bMGYmvrNGgyyK4gpRVUWzzYsdJaRdzXadZtgobfB6F2nrsGSV6cghQCF38QmsFShFByfxSghNdf6SLe7UUamn",
  "key20": "4PYzRyhUxXTD6xNrBCjneZEWkHoySZyo3EypumiWTY98fFq146ykmnbLHWUtZAPp8z2LdzrfeoT7KpoUnfoq39VV",
  "key21": "2c855pNG7arDZ8NtP7c1KUkZ62mm2xLtbtgdQeMd2oHXeDsT7HSAR3pQxfuixnqdrgAnmH9yn8QmJ6ue2cYTzJBo",
  "key22": "54ci1ZsPdmMSrEQGW8Rxd1AHzPdthfRh8U7iUTWFVtpjxjyr3iSiT6LT7aYKwFYMDPdjes3gH6p8D4sWNUPYs3pi",
  "key23": "25vJuwAdzMoSBrxpL1L8pBXW2ZBo3TTQ1c58W5p4XseoMAaiVHDG3oTWqYrKkY6abUxBK5cYsusbdqTnHGxWSVmh",
  "key24": "5poLkugaw27mdDdJBRcqy3R1LVxHEgqb4o5QLHaKA1wr6uUfbdLsXHE22PQt9DBW9JQe9mCYVrPnZ85bWRGo5CNv",
  "key25": "2F7xFxFmTJ5CVh33a66dH5bixQmJdjt3rRPbm8dSeTpLP4HZfHiRf9jZRsfdy8rxAgef5RdBN9dCMA3q8eym1ThG",
  "key26": "5yfaSJmfKriMET1YpV9bJ3yqb68TBmvePAuaoCRuKTzVRksrbq4KX1sHPTyMNKovYoHD12StRQMtfcUggBcHYr6J",
  "key27": "3MDxL2pktJLSaeye9nF8WPuFRZ7NRisDA5DY7atWZhdgGLdPdMCzhtsKg6ASK4ijvVK5c57ovhKREo4S9bAmbxaC",
  "key28": "S12DX8UKA1ohruBYBCD3krtjGmitcSWqTLw9kvXGpFse4Ta1qoXnzbskwZJn6iJVmPBHVF48W6XE3jXHbgsKfNd",
  "key29": "38krMbLJifzHXmNUh7yv4UKNUm7roq6vBgeBw9MegncXZLja5BNAJBx3D6cpJgS9W1cUrFsstJ7TSeNNNAGkEGvz",
  "key30": "3g7cZg2bjaG3YKebe2mCL72jkRn1Z6iaPMjiUwAQV6sBCHH2WwkYoTbwMiniPM8qVwXyX4izG6r8QGzbDVzqpwaK",
  "key31": "4jjXkJFd7DoyX8Gz3NcyVPJbzkUya525Eu4Cew4WEi3u9xmx2jaqyC8pyyoTGEnuRzhqENrv71UTmhagaLopV5dx",
  "key32": "6xu9WfoaCaNjH7GXG5q1vu7Et5Echa2NLstZo6BokTJo1KUz79DgJqJyjSUo4XTKgBDeumMx92G7GWRx7yUFfnb",
  "key33": "4sQ49cMrVA2vLgmvY9D8KnjQxo77vVhs7CrvPecQqwAuek3Yw6V5GkGPuJaaYzV3bmitjdTeLytjqCtGvkvHxgMD",
  "key34": "52BQj1c8CwZyyoyP5QaZWw3ynvMyjDj9gdbrXudeZm6d3yb2aeYFdMTv2HEBAcYuvkHvahoBMrpyz66BToDmaDyC",
  "key35": "4MmriBXzJ5TAmonbgw9KB64RXoSbXeETX7sEgkn2sRRkub5MxSs2TfnTPWnK7e3CQKM8Yj9v31wVq2bfXg9AW9Jy"
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
