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
    "5y3c5BpNRyJVbDTabGMUV24Wr4H4wvadf9NMWxK2BEwjsuMXGSVRWdyKn6jnoPXkprLcJUGhWL45xFekQF4xZPnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3osnF9xaubzyLtycJZTg92HwUaPVjpUq38yv23jm6B6NqPALW4hREYrFmwZXLdA9NHLxMxnvgwxdyUooMvgDnDji",
  "key1": "4yG5EG4coE1oTQZD7vyEi1YkfBE2CCkBPmM7kpKXM26TaGqrTiLfY9dwvgi6QzwmLsYWoEU7Q7uUJdkvqv7NuWBJ",
  "key2": "2oj8wAPqta49fkRrXyMBvVBJMb3RgDXAdu7hS2SLyWeZvWqxAA6P9zCe1g7wyddVDcFRv5vfk1iCzSSogLfN5j8N",
  "key3": "2X6egYf9nUG59TdYnJb5MLNSWWvbw7Lozx631psa3nDQbMU981aEnrMX4CBh2CcSjMLhfzGf2mR8XxH8rX5mAwNL",
  "key4": "51hjcP5eH4NuWGLL8pBf67z67nzHv9qXD4Xuxoj71Dbijf8zfPYurECS9SHJLqnuhirY82EjvRGWXeSyGC1bd6LY",
  "key5": "5st13ccYDPKtd9vbFv69Eukq1HdgVDtJVF4ayisPQMFTpmcHYFWU6BAKouiZzECZBf1Gee8tnNFXWRZQr8vW32oG",
  "key6": "4FRcEBRcPNDjps1BDtjo6SZVNDaGKGDnqXVdjns1KmwxLF2P2CsE5gi1pfQ6pTZ6btMhN1SBq5TzcbcJEPYpAr3f",
  "key7": "5awGf2d3hyyU3TrFqDd3AjfVShtkMjWmdie9G3bSs1ZGTJptJErAeSgsfudUGttwzCwhMRTRfMnwc9W5jWxwDgRv",
  "key8": "3JYEQHAmBa3ufCR4R6bbuCWeAsfCC9UsHBm2uskEs5zvVmXAmRVokoyQwLKczwnrVdLXtZ2Dngn94iy8poVEDCzA",
  "key9": "5uryd4DFrvSEeB4bL1aAn38FTjb2EnZcrNDrCV4KkCzEu9qJyXksg2nf2XMzH4WbQF1do6bkz1xQ9pWbKBs7iF1M",
  "key10": "5QXauwKeeaZZYDgz9RqGP1usLENhAr9ieGxQd9RqW2ThBFrmXbj5zRbfFChQGfYFGceYS6JGgKwQ2nPGB2Qxe6mG",
  "key11": "5G2acKuqcvy6qwW9WCjDQwB2mEqsCKvoTPGhJAtjLw14ysKxmcfFeCBV96j3hq49dcqnm51cpuZozoiJ42dRmiVu",
  "key12": "2zQyhk6tjkDpCgYMcSxMN2rGvhYxy8J5Kisa7ZrhP46WCjZJpcWkT1U1HEBsCcT8vLz4d6KBte3acK5yvdiEMC9d",
  "key13": "57L4u3iepUWKS5cGqcXdy3VcEVbQLWW8iFF4MfMYaYqnKgVo5FaAqZC6VaLXXeaRMzqGwcj9u889zdegKvGJ3qTv",
  "key14": "2TG1VYEpd6WqBfjpje4WstFznbaw45wwdgz3tpmdbSHooTAaHmHaL4w7JJWNdq1RtCAXRpA7WPeC6XjkaUPL6w7J",
  "key15": "2cn4jA4bNx9wZra1RDP9Gs9kobNPMFWUAtq8bt1NTFAAibFdyTEdkCVmTLiWYyUCMs5PC9pPsEQ1YdyvsWaz2Tsj",
  "key16": "YVjTBeUZ17yyfWuPy87WFGsSemCWCu8hGm3d8W4qaG1QjdRGWbmzs8fCnC1WDpEKZZZfptMCqgQM9CDWW22j1HR",
  "key17": "4zFQ3N8btAYQik3pEiRFTTmWGLNKCJv8hfFTDuFyEVwBh7omXkCN7HmJVfpdmU7WAF3FGBTrFtjSKQeFGs4GbmSP",
  "key18": "hVew3ddS3Y5iyCKvXL4JpaoxbKrBqEw9Es4W7L99brZNSFXhWvvs1yE9QV3FtLhY7cu92PgzE1fiiyXKJJScg3g",
  "key19": "5jEdPuHpdXsKRccmVJsvYExKFFaNK8zZwd1uubgAjG52n4HmRDHmo7diLENU5LsZ6nj2ybXYYnq6iK1ii6fL4gVu",
  "key20": "5t9jFCUcykdwy47fMooRZsYhpGCaDC5vKbymkni8XDZbkg3dY189cBQV5Bi7CDAetcXFgVfts2YrqtJf6r8h2ApG",
  "key21": "4WDR1c4amhGQwGDd4h1sqoDydxaDnB97PfA5EmuPN8VHu1d6mH5fWXthbENtpDmYbKfGFSnbi6Y4NXhCAmMyBaxN",
  "key22": "5eN4Qq5NJwZj2PcNWfERBwawkKvD3BLbtcfpb8Q57QbkYetntshmLfyzjav7GLyUu9F4h4yMDvZ4BiwvQyewU4PD",
  "key23": "5yoWivRzXFTfwAkzrGfpRWKpqjTQuAnbgWWQiia5S38gFh2EjpGTjit8gL9fvuf6MKRF7Kr5nttvX9xQyEXohx33",
  "key24": "5GYRPAHM5bqMmdyi4wp8TBfDHN2kwxqki8yThNmM2VMXH8UQ7BkRG3yb7KTcCw1C94QECa1y7f5eS9YaXbEBZiTo",
  "key25": "2QquArpaczbriv5Gg4oUBxtCd1cTNKCmh96iAGnNR4AZzKGBt5cguioeoWTYHmVVxRsAGvy4qpszKftP6eSAGDJk",
  "key26": "26jCnCUTGeGk6R75AmbDJBjvELfMMJMQjDL8bBQFFdYFYbYSfhzEydj4wMF1nCgmARXxXyt9BRYoe2WQ2ec1hMvJ",
  "key27": "5FPbKFSJ6yiqrfcRvgYVPJtnDF7rYkZeqLAvC3BSTZpY7MXmEUw3iiekqES59HQMQQimFTa3gLXm4bcWodPmow8e",
  "key28": "fDGrWK4t8htB4rs2NYpVvZYSeJ72Yb6GFgv5EAGjKh2vHMsMbZTiuXoPSgbjixEhRnTNDV4yHfv8V9dPakxsjSc",
  "key29": "fT6Pd4zatEgYgRkCV4cZUgaZ6ZBcCu8teLUbTokWV3b21wPgeuWYubTBxmjJg7iVY1W3psSCFnt5iN3wyLtMXMT",
  "key30": "4DULnmnU6Dc1zxSENsNsZw1DKrSYcofWy4Rjm4UEarqJuziVsv9NHj45n1WRSXM2DMpstx27FnixmqUMaP1eUQEo",
  "key31": "Nn46ccY9A6mRWDbpmjcWn8eJ5JZStFMiNMbeo6jMygzr9mk4wH4RCCE9n8E8YDND5jTkBnSSG7V2D1Vm42gpsR9",
  "key32": "3G73BntpijBHR78YcCccDeiTiNzCrPw3D6t6fPPFSosepAzww5aBgSB2ovCH7RpjF2v4uFpBiemaA6cYUUv4fH21",
  "key33": "5xnxxWgvSpJRzqc7txgkKrJ8mjnHGW3nnJMufXtv4TDtxyJK3h63EkRY2gAXfSoq66mxcvg6cvguzPznsSBTJRQ",
  "key34": "2ASo5YHZBD4aLkbwkm9BLRwVx6KNWfHmLFrptpPRirPu4AuwdsFdHmoRtMUZ4pyW3wyhPFddXgEf9X8EuzVkUsZZ",
  "key35": "4mqt513Psp1vZm1tonwccGvP82qH36WtuZpxKAzvLaGJTFUuL5CikR5Z4JkfN7NEL2T3wDdTLgpknWj9Mg5ViKGh",
  "key36": "4oAyhJbi6622hTWfXM61aEGgFceTqhdMvBmguHX6nCpYVAZGyfQSST9fRXvT2yyra7A6qT63wdxGEqKV24nZvjyL",
  "key37": "55uC1tPvNjcUwihMu3QHfFsbrF4arXvaFpU8YnwKpr13tnqCzRyYtBQzrPs1cP1Aa4tUXWPBsKCo5FtqhaNuvBpo",
  "key38": "4zUehd1J682D7aRpWsN24NjjVWXcZHgN9PYkfQWdme1yjdJpTx4Ts5DS21aR4HoYRVTvwKfBJRCcVWbbojNFCog5",
  "key39": "5D6XYWXhwiVBgZH4NqGWbnxrrDHoZ1BBw3xB6i2gP9Bh7RRg26HTJHWuoCtyqUMGJ1PckRAa135mgamZNqp5P1bM",
  "key40": "3xrXNah4ALi2wN7gv7XtLGAvSrz3Va9Zh4PwXfMR9YVmjfbZ3q8ho6vMu6xZhKGoK9tevZ3uFvyYzjrLmvKusiwg",
  "key41": "65UoY4DFgtx2adguiczZDQX4MkNr7EJYHiHXsSDc1LshN7g6AZ71HMP1kXmfESfWWwes3dpw8Mjw9RgAP1YJwAVw",
  "key42": "4P6qDqRcWbjkUwyVy4DvWH2KkQPFPArA5dmE4hrsntF7eDeHdqWJoD1UJdJcPToJvCx4GnFyFVjWbrfm6FBFR4nf",
  "key43": "35oCBd9WgUabSYVPaiX9jGBds6vxQwGkUHJakaQZJPxAcMR4365R1zS2LiLbzDWGAAU6N2sx7qWGUP4qhNE43Wui",
  "key44": "2iNRwmm28CnuJU6ojtxrHCXJ72dpy1SZ4TrVYaCnzxDunQtRfxJFYRTUwnK15q6WiMDWyyz3wfDY6ocmMk1kCFUy"
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
