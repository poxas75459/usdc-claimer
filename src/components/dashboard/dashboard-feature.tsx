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
    "32KxAbqWDR4Xs99LWoLBDFpk94jSxZrQ1GvDrmvgtx8trcWxcTbCXRkNtGY8K586eAVqzfi1ECpgpV5ECcLsdPMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ac6NnpgnuG8pxQk6ESzMj97dh1Ubhves2cZmtDR1Cze7PmusJKD7HbWyuwRb5RZSghTaT1Yx4rePsA2nK6xbBG",
  "key1": "4nhDe9aGkZyCHGLc2gj3KvGQtXCLyzDvzaTAg9yJi7jCKZCW9RQWjEPpPnPRM9nsfotxp8U7Q53pLjhtCTapMiwx",
  "key2": "2kynBRjdmQc1Ph5c4TDEZgQ3UkGosENntsVdZ57QrKVSxeo16ZTbBgSsfujXX11tM3d869nJ3T1WHcNgCrzYDaC1",
  "key3": "4wfbTA9zNBfmM7uRpyiptJZW7DrtpBeAyds9aENpgdrLuVKShLwUpmY8HcXjYG68N4CEP8mrkrLFVoWPJQeCnqhD",
  "key4": "5uD9hAKCfgB4nhLxFrHFtnSakeuyFhUBc52L1rYBJBCuQHjUWnZNPTyfv8tTsX8xYLnidyx1GpyKqHXLC8D52us6",
  "key5": "3UG3ZqAByybEe1QLC3Go4sZQFEok7WRM5CazWoh3T3r6zPVRgmPj2bq33EJvkHBBryLX82iZggtitfpS7MY4Wcwo",
  "key6": "3UmnV6qmHoaWYWZ84qPYCH6Xt31MTNrxay6JnQVAVgtCGte61RDwp6cZo2scTnzLh7p16SKr5BAjD1YpV14YRvbU",
  "key7": "3ZEF7XSQMPPzWwKXguzZHZf32jeMtsjQR24jdFJxtwDKG8Dc7vfgsZ6wwSac1hqh8uDrxKjqnjDZqfHCVkT4LgYZ",
  "key8": "39Eb1BYBCQVUohG5H8hrp8R3Eg3ptdvskvJJQnE71wNFbEg99UG9M9evvNGaAZfMKdsifciwcbHK7G4T1v65jvoF",
  "key9": "6qRy2YAhH7BmpJfHsej1EhRvsDvbZZAh5a73e98NJxtSNEqCfEjJDh9ScNDPnySqnCf891qNX2gwni6Cz3h5gdH",
  "key10": "5TXLSxMhJNH7vT5asy26v4Q6DX5WpzbvHiNfmxhbG9YndwLENG3jQRsVyztbgWjiBfCJjzHP6nf9eC7hRMS5Wact",
  "key11": "2yzoRmYUo1LRAUihxicuRBW3H4azrEWz5vSNv1avTcDumZVsm6R4d4ALAqdwvzG14W4SX89hcVzM2WJqTFKRdVee",
  "key12": "3pSF8H5fu7U1NfQqFGHS2P2YH71VcUYUfzrZGY3iCEiyuBJr5XnKvMRFAiNwk5XHHJUNzmERrWm5SrSYbbhQCFQ5",
  "key13": "4FMVyngMaaPQWxtNJdVyYprmfJzhX67hycNqM7zVfqAWcr9o7d2hNwX2aop9XiU3QGvZWB2JL1ATKp3fyxRRYCn2",
  "key14": "5nsqwxw5NtAGRLSd3u9M3qw5pBAKAJeQoRzunbpyDnAYd7LBNDP9Z4dC23Ka7zDjiBErU6VoxgDnxhB3d5xTZzpS",
  "key15": "3rRQsqdg8zVUokQ3mWP4rtuDRA4knmBx6ymvQFBVtbRaTGqj6JhqNkmRvrrTe2BfuAGS2hAZfHgLpJqCbjnSEwhP",
  "key16": "5ZsedorBGweKBNjmLwNjHQwWygvsPhVN3wJRgDKQouFk9UH5rmXmGsyaDV2i41DW1LCuLJ6pwCpSzkGBSTmN5XJg",
  "key17": "2R8WxhJ4jLjCx7dFGrQWsfcdEdBcuQCikFaRDSsu8B4H5QLKxh2Z8Wey2Gu1NkQ8qFu27MyW77CQDeHE39ufWQbK",
  "key18": "4qhv4mokhwYPxwgL7p31X6zpDxrtMfWHwq1ugYGWQTLP5RhCX4qQ65yJvNRMWhq3ytchNUtKDtJJcPgdgMr3FL4f",
  "key19": "2daqVnrSFQQPBgKh5twBUgyH4uUMtpEarr7iL7BwDeSyuuTsKpN6hPYMWa6qtpnf24S7CF6PnoYUKEwdC5LaRrXL",
  "key20": "4gjaAf9L9LiTXtXeXDYGcvaFmo3sMaecdohKTbJdivLmnRiGFrr2z9hMNLZXjFykqTj7aDU9tiQ4t6RHX8tD8RwK",
  "key21": "5vDHMvg6b2DvSDAfGvFefGGy6hSJkubp1VRFDCyMawfzPb61VkR5aU1dHYZugTTF84ETi9eEJy3ZZZu4ZPTLbPzH",
  "key22": "3bXBvbJyhk7cZjohvb4Se3mALgdMvNXm49tQoWALmbhcSfPfP4z6HATZzRZWvukCUXTQHS58M8cgbENuArAVUA8d",
  "key23": "zePt78CJnU8NxZ3hzgV7KxHGgKouXhKRf8sFaM6LhbdwFSWHyoj4bbZBdiiW64b7MngEzeanWWECznNVFq1K3BA",
  "key24": "3KBiExTX1f3J7YyhATXX8i4eYsyQCpxWZzH34UGou1Q8Fct7d7YUX61rNNorC28WZw97o2G1gTgoU3TXCmnHdmnV",
  "key25": "44sRSRtRXddPtFbm68iaoyKQTHt881HBWWmr9e5SfW2z7qEu6FRQppp5JAtjBma7UDoxvZw6hhsupH8EScC1ibm6",
  "key26": "2X6Pmcy1DfzziJQYnEfJ3t5RpdWAb68qw9Su5g9Xag5GeFdUWxy8P33AVh2GXB7miy8qppauaUDkCCve47kMaPXm",
  "key27": "4y6Ej4SiY5zLXEJFGVxzoatbfKo6rpPMaPPmenNncs86FobE7wnXHtW9iKJTYwPwUYfee1k5U7HN79TVEjRatY1J",
  "key28": "FZKGHDXgzmh8HhzUSMTw13GFioTiytJzVGCCRUiT2f4bUj957gsCeH9x4nH7stpp7cfVGb4Bu9nFBtwsvXyLZMF",
  "key29": "4LeCUpmSYLyLtABWwQ5yucemCDobwweW9SBUpJ2XHt9NhW4qKQLxVUCBLPA5P22fJJGQUAH48geka78Bihp633dt",
  "key30": "xX9dQT5WwsJn3rzcMo5qpPysDjUiPeRcK4TshCwVmyNk8Q6iRxXpGjX8W4rppeftKLNq4nw8CxEXJuWAVo2bxsh",
  "key31": "4WFdq6c8JgS2tYzgNuTPuj8uzAWaDxPr49C2uM4oMZb92Vb8mYTuriPJMWnpNSj7cdJNANn5CwudsAkSjqcSptq7",
  "key32": "aJDBfyCh1oUBCu3zyNVyD5wm3LRa794q9vbfzdMNZCT3JLbSek2Ds88bv3mPqjnnYcuZgGVvSASvoweSxtBCcN4",
  "key33": "3MaWgg3DsUV3nwBpJcTvXpdobCjsqqM8BB87dexcHtqMpHtSjopayjA6TYeUBiyqThwPubWCas8oDRsXXoCKD4XK",
  "key34": "3Qn2chJAcK45mp4KYDVSCnnu6b58frVrPjQnb9K91ZNi9PdyPsHzRpq52xZKGLNT4AC7Wds8PTbHtxfa1LM7BYF4",
  "key35": "EMJgQCzuEu3cTuix3dx1cCcGpwvoAdsnTFpNtNFMTiGTDSkzptXjwpoJivdoicJkvANu7i8mi64ZnoaHwbfq5ob",
  "key36": "25rMJRLgiprvx99jsqPzVAVB98yeoVKuoNbdwnissSNbqC7dy97CQmowPw5n2iie4zyCDYUJo5CeHo1LvWM44GaS",
  "key37": "37k9eBazgXSDG32X8JioADFZmihdqWwkmTV3E6MJjuruXNQDLG71ECEuu982gAsNhryiRfiHRRsJwzcHsw6Msqtz",
  "key38": "fZwckGGRUeNehWR3NNqzacBjeoFfwi72mAdhf6C1b5j3RZGiupzeUdpxrvdJYmGpDPA7Yxw12RoiYXZQevUeDht",
  "key39": "35hKLmGurTyvpHkbhy7fGeiArgGnsyXGfPJL8Hiv4SPob61eKMJZJ1hXZhV4ffbA6ey6pWN1kjDTFBvS1Kkj7Jpr",
  "key40": "4mk5aZzQFWSznKKB7X2VX9AjLri6jDu97aysQNMXMWkwjhmqJ4nBQvxWb6SZAXVPnD7FvfeRY67WCs3E7KcwV8ET"
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
