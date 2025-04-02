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
    "2KEG6sVSMj3j4KNX92SX2kqpd9ySXwxLw93LJHii8x3bJTuVbf8P1T2Gi5jTRVL8FxC6uFDtGt2X5VxicqpMUAt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G1SUSGY1STqfWSArkTBMgA8DJE5TDhGqmXbG93TdisohjdfMjfuwm6rEmLAbagdMu5StMHvgmEBhbWfJBTZW6DB",
  "key1": "bXwZ3grHCAx8YQf3EfSbKDTHVoQDTGDPiKX3tqN6Nfp7n5wmoVciX72Mh2rNmkcfCHbRPKeGtxgAt1mPSGDJnmu",
  "key2": "KjwBTLgTnpxFZtyFmXp1RGFqQuyPcaB63LphJ4pAFFStqCVxiRWJ3JvdNE9wTtz3Kd6ea7XCfpVJyUWjh9zC9EE",
  "key3": "2ZNoruf82pkhR6h8N9H4xBk2DkPauGwUkNqwiz7M1z8tSsBPezZ8xm8hzL8ouSHACgSFe9ATpytbbFeBS7Zd2LoN",
  "key4": "2vEuQnWtU8fovtE9wbeAGE2GVuVrffpDw3jVkzr1bDQMaEjkqPTakGRidG5dnMrMrgnYK6P4tUbHF9EtJh57uxzN",
  "key5": "4TVt46bhVHCTPJJrit48ovEjVZkzigq2zDzNeR9jCKof89bCSV8Mwv5EvZNPuB7fMR9a4Ximf3FSnSuAyC2ieZ5t",
  "key6": "649ZwPgFwNwmpALMvuCnXgcociKmcwkYGfg6i1PEL5M8KEodjVzQJiGAjZ29NUxRuUUyQaQRbg2YsFFWgLduboma",
  "key7": "TvM75nxK27Afz9Mdy5Ex7z6FfSnbmFUp2UcCdxid8vFQ4mMqjhpf6Zf1ieH5UwipnaiTiuezrVNXfMjg3tNFBas",
  "key8": "548g8kdXhxqWA15shW6hcegvAV9WcmYLoNHKGoUYbFCm4EWT7CymTMeUdqGzk6tmF9jXVGvwEPagxwSv47oY2nFp",
  "key9": "3hxpwmFGwkwnwRZVgbzX3fFVKqiMsSy4eQMzDGGps53jbRBmJ3qq3DBmmqZeqN28RrQ4dkRv2s8BTnzX4F8R8Tas",
  "key10": "3TNseaUE8ZqaHcRvVALr3Yj9d7z2iW8Mjq6zMMw9trfXKrabBhs2gLyNw5RFnM4QqDbZrqRMBZ7LV8G13GdZwZVL",
  "key11": "2sZjadoUvCXtHHzjDDuWmJbciZZki3YjotKcuDy6rsG24Z4ZZVYCnchTPnsT9odFsU8aBhNQXTECktAgMpaVhV7F",
  "key12": "51PU5stz9uhzAeNbNJJzVYPFm4fttP3Ww1ocGkuGLEma2SzRPJgfWWa6ac5HPaTEU39whcRmKae4GouXYZcYtGXz",
  "key13": "3V4ekTDXAfRmHKUiwQ9gWt4xPF3LWvwxrLmpESh4Su3nYY8gwcNP2DPS9JmMHBVnsG5jzN6kdYxgghk26iL3NkoS",
  "key14": "2GjAyu161YHs8CYvnESpQ2taYRzpJg44gasciPqM3TrJH6CcFfXiz5rSesnNAiXTALxnRhwiyK4FwBfoGTczYrTW",
  "key15": "2dYhrMtDSTpVQcXH9S38qa5hXsCN1Mnz36oULMnyq3rffgCZRJJouGTYLbKFJv8tZzteBzqG1Dn2GRdESCQDM8Fy",
  "key16": "5NaBbg2i5Jkm9JmpdLtmrmb4UxLCs9WHeFrnbpXkTZVDFp4NTcZwaUYDdXeLcUvQE9oM1ZCda3fn7Ja9agWVHJee",
  "key17": "5gm4hYbaGvCzNnqzut2QjfGQXsny9CpekpK9sb8jbQ6hKg2WCz1Y6fVCTfhuveknmi4uk9jXrbezrHqTFAv4XDtN",
  "key18": "25iW1Q3FR8qCKoSwVKwczYi4R6RtTaQjyVMEaPqTXarso6EBRd4En7ZF3cjK2qB8cBr7VY43DVPgwiQogPvXxN2b",
  "key19": "4QsR7bnDNhQ5dBWUmVEv7eZn1mp59JA18ezsRVstSNWCBV1UoygNQgWcwLHunks2PyWHARNnE83xsiisQdLU1z84",
  "key20": "2N79mRMed73RCe72fFYxwFK3cJ7tKMhLZrfu1SdoqHuSfA5VqMqBmoF6oh77b5zGRAbkDVEjLu5tEMewyg2E7ubR",
  "key21": "UJdw9nF5Pn8PE2c3gScMPHtigZVEw3xwDuPXfzc7rRfPrgEZ1pVamCWapPAGsR6nXCvj9VHLb2qw7ZajzHQqicR",
  "key22": "5RvwZBXZj4fNbLTPJxEVjkStFc1ZZUsomi8HnX2E4aiDjF48RLkw8X3cH9KfhcFSe6tBQUHJUbQXqxmrpZQNGw76",
  "key23": "2EizF2h6CDicgQ8U1kaJUnm5BqQ8tQfCGNZtHD1Bxjq62mxka4XqivasWJcSAdLozYT83vRnjjbfEoGU78wQxo3S",
  "key24": "jPCbwDT5uTbWpnKFGBg5bp81as9y3jTmZVMMREaFre3cke3jtouELM7xkibBVgSE5rUvAhgC7NFtxTanER2s7Nt",
  "key25": "3PtHpGiYzeMG4Bg3riqguobp3QGiUTtMoh1Tsr2Qfse6cZXQL4Q75Dgcc6nWi3ZbFZtEP2qGky4hp3TQrS7GR6wH",
  "key26": "2PMWFeD5iqSRDdKGRhdQgvDmx5vgpinpjJQor4ZEBgRaFaeX9anJPW77GKEz8ZH8D7DqCAQi3n7JVSPsUWn97gKo",
  "key27": "3ArZHUFRomgCzJjB1hEEdKsNPJi81yeJTdWYqpZn5nmpMkhWWuZkvWSYmirMKJor1gLEs1y3gANu2aurnpbNyLkR",
  "key28": "5KZudSYRHdzdWXi5HqgFo3g8Uo76Lj2UJ2gaaPbmah2TT5uv6tyyJervitd5AwKkdcBoR9TiUeVPxCb9TKGij1p4",
  "key29": "3nGjB6C9xQRfByyDJsj9fKbyVFY9TExt5SQemJ62BAniz3NmYY9eoEm18wQHvrq7TCYvR7NLdZ3vtCyHeDyRsaE4",
  "key30": "3B1A4zkwmmEmwNKTbdm8aDvm247QDH4CAZupFhX43ADeDQ1uHoCv3EpgY72RVBwHo864KbiXTyeqCnNCqKmYU4o2",
  "key31": "2RrXby2Fs35Tv8Cpx3JQcBLA26sLoFYW4Qw98wfjYPVBvGZbqbi1J7huNDjPstL5KhTTUBdLy5RpjfLK8UKh6Tmj",
  "key32": "2AvdEYGkH41jqfk7oWghJKwGSNRjebT5tvyAGSfjTVUnsGoxyydvoqj1aWfRk42y1LKgRVJ8h5gF9UewsSKdqvB4",
  "key33": "4K2utjtPJDCDX7qfm8nnkvZzgL1Fx799aNS7aC6hrPCzCLAmvdmvewAUxbnSQFWtvU3CafvQ54crt8Fx8dxN9Fd3",
  "key34": "4WPreFRv6EjD7dVBE6ah3j2p516EU3mEfidv9t7raQjZ2HsmnjgNkThb4vro4o5guZphBQWpKqWMVukumgcVv5Wj",
  "key35": "2qe83jW6JqzZQAnYouaqauXWAJmXNxHC26CgzLUtbZCNavHfFTnxrApeD7JUM1VLwd9PxBMNWrmdfkMHKmEsjAfp",
  "key36": "2qVs5jxxVAq4hU2k3S1ucLCdANXURmWFgyqT2nfCW5H6DYc2cVQ1qgywmKaTRPGwQCsfjT5e44EkCUUwHfQXyhh9",
  "key37": "3wsSUPuEYw3VKt5jq2tqP5dDvipNjtcwZxfizAKvHJwT9J4MzxtWeXSQRnVrotNuRmRT2SzhDjCjtugFPh7XFUU4",
  "key38": "4UpFSbYF7qgohRA4t1BvgsTJ8HEXwEoRGtzd5ktSPDTUvoA3m3yhgXAQYXuaUAnK5t4y3QfyPcW6Un6U8Hw5xtq6",
  "key39": "cGvaXVSD6C4sVGkG3BXFaiTZ8DyjxwuG16nFyZe4KYfFmMkPrWES2xC2T8PfWqhD3QADUqsErRQHdhQNgQefRCj",
  "key40": "4es13DuEyjgYAqAAynLGtb7qEcRfV841JTfNLcNWzUi6A49X3jNT7gcX95s33Mf8hTe4Dubbp5XCk8k62qK2YqfK",
  "key41": "2VRQWxNtwBnsowyuy9BMkgqCX6u1PvFNxYZseB2WGYYuo3NrDy8a4o3C6LFfnV5N3THXzQVmqyMQ23xoqd41BEY5",
  "key42": "2utfaGqDgeF3UC53FV8oa8Uz94yuHADw8U3fvXije69HX1S5g75aCFy5Qx1BM8NNG97TcwKvT66kTns3ZEshgyNp",
  "key43": "38whhiikzSzQvbULW38QY2B6VKbDep182f5GqAw6WZjJHL3iMKNwMUwPCLDfqnbQSB8d2kupd3PQEZxW8e92V5dG",
  "key44": "3dLNudoYcrYt9unfiDvFupBQZpA5g2i4FurRLBeszHxJRKUayuwkZAVTueBiWc1Fxt6uxK5QpJwkdRSS3e1sPbDh",
  "key45": "4ALUC5n4GLB7snDB8v5x2Qoxjeo8KQoc5ivMwnUY4SbGNMi2QUFBYSBXvghHGteLCW3ADG47EQzCxtEkeGusWsa",
  "key46": "4G22Uws7MTv3FzsHQLgc3EixkdLFWerv6WhVbcVhpqWEGU3HhrzbTfR8jgmGYohU5Q3yfqJ35MZsdK2N6W7pSNZ2",
  "key47": "5MA3ihsPgP2huWwtodBmL6B7gxq1km56q1iafw6oeJbuiUxv9QVtnyyL65cbeRVqVKcwb7enFCPbSWGUKz55vGWP",
  "key48": "5bBjZWnK3jHroFL4YpswBQkXmT6jthPsWhMN4cAhgzWa8LMnRLX4zVbsTr7WK6C5L7u9EQFfwnKo213ebS9BZApF",
  "key49": "5LXS6aptpbuvBYqGZpCgTNWmQK6CHj9vsqLSPVgG1iUVYqjhrDSbNgvGzc5RzsLZDG1H6cxZTYAJHG4gmLfzo4rf"
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
