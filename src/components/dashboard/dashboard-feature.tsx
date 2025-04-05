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
    "27zHiXNufQSkimopNGRVjx2d9LGAQJ7fpATZa2mqBSXnuy3vhSg1A6ScDPhEidYaYpxVsgBUhMguR3NET9P3qQaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VMAXirNK69bcffEoWZibgSz89zxacNufZDVBArXPmdhHoa96YbqaKXeRysFvxSatMH7E4ZTitwwbZydx6fWnauK",
  "key1": "4ANbicZxoNVHbNQMJJ1ZG6T6DDPtkZqJsNiEe5HDjaeXfnE5iWSJG7x6UdnuS2vfzifxoUn2GQgJnwziTYJZhcPj",
  "key2": "2btL1HpAnJE2bEah2HkNqQ2cfvj7tFQbw1HZRD6aTj6zzVjrKCKs5exC5nFKDX4Z28sTcPYApypfq3dYS6qoR3YT",
  "key3": "3zRzTChaGqGhPdxcgg2UEg6HPabVHPS4b7Q3VT6oTG8gX38QBw4dyMzsgyBDWBryQ5bKFACLPCmQHW9u7R9bRcJp",
  "key4": "4xmqap88x5RWGnDc3D1dndyWS3nf2nYzFsvc9gaYKYCbT1NU1EDHGH8u7wHCk2sWAFDRnBjGGbbS8E4RhRTvbz6g",
  "key5": "3j2RTgU8nTNqULGwQyCzYMzwD7EtEiMn54ekXauEeWiE9S4kx7ncbGHVCWrch4mX6bTEgqWF85EvqXp4my2cgxQu",
  "key6": "28L5WLJZciU2Ay72McuuhGuCKVN6M8P23wEmG7YufAYk1GgvfGg5FhbHQ2rDQQApuHjJTXJitD9LFzvsQFeDfS9x",
  "key7": "7eYboFcvwLYvMmXsKWgToZC2QBvEQs8xAgzWLUDscq5mWx3eSSG2wus7m5qTrEv6eAnzB8SR64gUz9jRFUMWHDs",
  "key8": "5ra7NRVKETSsEWwmDvWHuDJxSpYv1Qeuq9zSFW74syG85EtCv21b5Sq5QuJ4vbkiSwKdzqjuqCRJgR7y9M9g9R7x",
  "key9": "4NevhobYJ7DRfx37F24Y48fgJVhER2hZMqEff19yxtVo37jTukDhYJHEvhjmhicmRd5vPLwEfBGRAobqxZHgQBEZ",
  "key10": "58SqnX44ny4iMnEEGYuvY2Khsf5nR4NAkbyYuWSYkqKNYakdbk4cCveiYj7dHXyTffGc9dqQt4Sj6mHG5jsJHjDf",
  "key11": "3iWLyySenaMyxtSNU4Zwg7NqgWRf3LuLfxRXj8rCRXjHYPZEZDQ9Y2sCFdfrbQXMMDSggyFFDgbxAt6iDRrKNttG",
  "key12": "3SPbUKSFZM6UBX9F7HysnWCrMLTFeQnr3Nb229MBWofBmwJ7RWsWJXXeNSVhmf6rDX6fncWVtQW2y77JaZGJGXNb",
  "key13": "3BuS8aPcBipasspkNxXL1ry8jfWKH5cbVVPxYi8jNuJwNrK51eY8qrPzRJmfwdzfRRy3cnj7gRSeuiQUiuRKbUgs",
  "key14": "3nY78eYvuDcjPu9LrgBhyrhkAaaccf5GaxYKL6zMbtTuksVAKehNz2ArGvX5nEjrGTjBWCn87M44NUWJRn38ZYK7",
  "key15": "vXVDbFUy2RhDsYQem8P9Ezt2Qz6Lc9KJe55JE42cW3v13nFAuxCxUSDZ843JHmdev9ky9oi9vQ82va4twfqsJSN",
  "key16": "4YvtbPyYQM1iXmgEdjdYsNTjXUQg9qTTtnjrtsb475yhfGnhYSoRDKX1wTwoZX8hU25WjZtQbWmvbdqADR7kL6Av",
  "key17": "4Ef17upgsZxirHToMREQe39cg2PBxhikayjJip7j2BWTxpM3A1x13PbEYDwQg91RumBW7ZM2Q7QeBojGRUgnCF4b",
  "key18": "5W1pPaLYZg934qYtTJhPEBH1n4GBVMTjREEsbYgD8sSyXWoGZyi4gmKTcLF1UnArp25q9DqePdkvnbZiErcAAjeW",
  "key19": "5nem5CHGfFvTw9BbLBukFNFNTJooMGVCaw9TBtj4ZXUnso4cwinvED7qM197BzcpFLJMRviErD5KwHeuYgf5SNCM",
  "key20": "31ansXSsh9bif8QP6zEjbYMxQdD2okuzM2BupyyRJgTjvnho5J4DBXPP7T99sbcMLoCRAfyYzxvQYjEAvtATSKBv",
  "key21": "4NMoTCFapYpqGRdwYn6gbk5HiknnyQTrjQ5mi9Gw2C1b9t3m17ikKnzsiKMHTNvDpizMCfPrH196a3xRhajRpVkD",
  "key22": "4DYzJ393LHLeH3mQBcHZD29PProBvtABoeLmkBcSxjMgfsd3yJyJR4qN4nwcEbmReHxjrMXhyyWciw5Gg6MX9vQj",
  "key23": "v7f3ZrnWVxe5C6dvKc3XVbkAF9yHhtp3BGFdv9ALDLbZiU1iRvbHaGp8EzTR2A5EaBLiLEWrZiSGzNcjB7cCUAX",
  "key24": "349W5fJv6uYErr31nhZqdTBaijosRBh9JYaygQgA3Y4qzD2nQnzhFt1dJHXJDRNMvVoaJZZP4VmDf72ovALwUdjh",
  "key25": "4GDAG5vB39zenVFcFNfhi7Mm8cCrpoMyMnh53k2XjMV11RgWp6gvDDKmY9hzR1kXvGWLW9nfcT2sE7sfTsF7ewq3",
  "key26": "5syyEBLJiDh2eFcsJ2UGqToBKxaxHBMcnzDw9SvAsNVWtN3t8f5nKJCzi3NL4g986CRyoaWuDGmGmhSwyaCjouis",
  "key27": "3A352cG38doBEBEA2wRdhnBA6s5TN87JtHvoTT9qNf8Cq2A9B1bdFTij4rm2LJ6Ws6j5uMb7At1p1MpaVitMdNf4",
  "key28": "2VzDDxPYyvC5M4UMWni5TKEpUXsXqbdnEfmevzJH6CQqeLZe68ovAd6MHFN9tSFKH25FFPyMhpPAeayc7gidLF2a",
  "key29": "3xGQQ4W72paEXEeTKp11v2mmX6maTf9wArx6L7QmrXydhFwRJAV5yxrErT9PveZRGuMpN1euznbR9Mowobtew8Qx",
  "key30": "5sKibna4swgBzWxtt7KEdRuHdNsSFkxPk6oq31tCYY9YqfQQa2i4ekxYQd1imtV5QRMSAsbGvDbirjC1QYf2cfSm",
  "key31": "RZSC8qn4PTuk8PVTr3PwqejqQuxfSTmPCCtMr34iCtsuJ4pnbbMurDqnuK9rSx2YyZTanjNAx3GxJb8M7GNX37m",
  "key32": "5HTyUHAwmavqHvovfzY59FGUNYNu9sTFEPrwtFyW49zNvJct1PvFfoHcZAjEAJBsSD6WBzU7wteoJgqSMhDuEryx",
  "key33": "Ty4Zn2R5twXkoRzsYkKy2dmMiQ3X6iqi5A5NZde6GiEPrfcf42BpBgcYEoW1RpVFKFwontrtNkwkAUvSyguuYfk",
  "key34": "4xFobXqDLG9kgMM4YyBrYVdGnvJ5Xeh8eeYoQ3RezkAe2FtSRZWexKF916ZZvG7pdxBbovxRh6cJXuDFd9kbtoa2",
  "key35": "5MHQ3uJgPgYKdw35bQBX9LB7qz6Y6vchx1ka3Qnsk1opf3VveJ1rp9BitFEzfHieMjWKVDbbqPJ5S2Mtm1fVzYxE",
  "key36": "4h6EHq62SqLkJ11eC5jDYjuamGCZztkNw5egT27hcKKGZDHU6LXDt4331rjV7MHhcvGYBoBh85LytLpoPK5xbNZY",
  "key37": "55P7JrTfFMVo6KRVK42MSX43bCT5FpQroxeGjEzuyLshi9Ts1169ByEnvrHLmaeHWHgjUoXeNxioqWvMLG4escu6",
  "key38": "3vYgc4EfAmQ2n83RUTMACejZaesYrxtew1SGFCWDpmiZKDPYeByNDd35SRPpYVzcchUfvHWJcHc2PNbTKv5mEqho",
  "key39": "5DmNzFMui5DbMAGYsgLd8niwA21G88ZHxX4y2RQp2vbB6FXCAqtSmV7Ea9uGPjXmQvaDeoRDfM7RTa187by7ynnz",
  "key40": "5CDSNeUNeLRPwmDDwLRGuYw1qNZV7jJ1My7BPKAb5xY48UZYS5xCgCtQb83yodaHzQ4SEsjPtzsoWbd6xRKRTjZu",
  "key41": "3cyFEqcMsfFaMuqk9dK91rcPGjsEQHfmxUyc9rvupWfx1hkzztzJJ4wWwdqJtTeCknn5Rcib98LgUjpPjFxsuCE3",
  "key42": "5mN9dMFrxqAQZns522J3Prriq6Skzguyu56YNcpfmUuEaMPLH3JivtUiCQKBzpqfNLZmUNBFN2eXKjbedbmTU7PR",
  "key43": "1As8Y5mU9nWh8M3EmAv2LcUpGcWVgUtHtgiL328EyxG9BVqymaSZbR9pGEv83BP86g8rU2Gz5EhXKnvAB55C86v",
  "key44": "4wfJhDmxWmJCKA1zt6BVSTxnMzpDHc92M2FDMvrobRLMgaj8LJGiAFdZcAE2TWhDsWVq12wsP6dySHZs4AL5EZ8e"
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
