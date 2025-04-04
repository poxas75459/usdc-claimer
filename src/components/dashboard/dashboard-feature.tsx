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
    "3LyGDfvFm2ZWL2QCo137uayQxdSHTAWDeX9SZhGhRmmQk2rPKxchqirrRvTM4Nht9HdsYDymeSeXfS5mwiHSwyzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cR8FAApaRoAPmBRMDSyM81ZtVocamWsYqMpHLpchtAecYtUFyWhffRRXy78uaJEyE8R5zkRvVQQWdbYL3ysKGwy",
  "key1": "4hCPKPgBkfFPKSE7gPK6ZN9bCU2pXzRixnUfUTYaKfAfra6sEsSMzR1RGEy1eABTcrANnBDk252MG9DPTKmeeTEb",
  "key2": "43xRHKqjrvsneoo5fLSSpftV882ETfnKDQKNRU6kLSUdNZzo5H54T7tAAicst4crYtxpwRacmADDtKuBYNXhMhsB",
  "key3": "bb7t8ATqgTyyxAWbyzCxNFZFcP5LZD2M7cz8VTDSy3FR8Tcn5NB1pExipRh5DankJiXt9bKTSXoWixB8BRW1c2n",
  "key4": "2Ms9AT2W9k864DW68TykJDwcGyRasA3XMu8cMLSRpsqfhuJkFsDK75qEzjvuLkMcCLu7sgjLd8P5v5vSBop3maZR",
  "key5": "5CSLjmUmvhPs5svob1La4TxW8u9nv84oGAxizfDTDhXXZbhasATCKb6eeD3QkzfFSPDRUm5YLYDv77SgB98mgL9B",
  "key6": "CkU77f9vPC42rTrGXgwavV33RpqhX2WwprZeHBwGWAjTHw6Laap2Fso8nvuq5VDpmK7QPCiJ6zgaUgYAezY32pm",
  "key7": "3AinTEuPhAG5V8U8zjrG1jB6cohVr4hVA3ijd36G7wGuZrDs1y1tiLBfA9uND3zEm8ch1x9fqt7DpTMRjXhcCVKx",
  "key8": "2VifNbMiiVB9JFbMoqkZriGLc6943qp8iV7kxN4VismDRWfUNyJYrXcFasc5qrurF5HuK1EWZEtfkwU697H7WBxj",
  "key9": "4QuHzUrhUcH63TCzQ3fPB6XednhK1EH3nM5PDnGAEzTPswaRFZAYEvGZ19YmTY95GUkfXPBxWxHsifqJno9Ryo4b",
  "key10": "2fbN1tM4nxGmkywLmNkWtEbTSyyaMSUeEh6rTxYb36EXqadVu4KJGeYYyLdwuNatErSMLUMCkiB5ChuqL2bM2PWH",
  "key11": "3AP1kv3HggLbbAUn9M3SG8vfVkzBqa7EGVpXjvgXdupo7uPs1Jv9z9JypGftNfxHtGGz7CEciRyhhs48MtHpGBCa",
  "key12": "5ZpyjfqaimeJtSFoeNrzAQcwyKP6RDFpWuP6maUK6aibjrE1fcitcCrw3Cp9fQ8USPaDyM1BpzwwYwQqcoDrNZdx",
  "key13": "rBuGs4q2b1SSQo8bxVLUr2PgFzJduoh6L1RoPn5BNBXgJ1buPbfEprZDce9QMeW7Ta9q4FBpoB6UgqCuqRPgtSQ",
  "key14": "7HPbqz4QPL8zu3Ty8HhFbks2NRoVipfuYdBAjUPCNMHZMHVoReyrz7TEn3BJ3GxHKYND9UHBqnoE6AV1nXBU8oq",
  "key15": "3dSPxtigwxMytkky4BrqmyHxLUWuLFCzcvxMK8vw3LgzJVMRWeKkRVfdvys6jA1m1tuCSTCwArgtNbuBaThfqLhS",
  "key16": "X5Sxd6u4Tdc8wva5rNaHtdmGutZKbMmsGRoNAdqo6FcCrWsfQiDnyCLbvSiiSGPrMYaUnFKn3QpgStoJp96px2Z",
  "key17": "kg7fiSVfv9WQGVwbrrXb8oaC4WTypWi3PRm9LPCSdqAdgHJgK6QwvLS8eXxiy38X1i2DvUYLdGGs4k6Tz2rTQC1",
  "key18": "672crdNbXfiEviPzoetRbSx2fwYU1CNVvYUqAceJyzkFzRfA65zUNSfVaHP62pHYATwnBC1DgrRSzwd5wkY5YKNo",
  "key19": "3c97iCPCbk1QbY1WodBscEQXmLY4Cf6YNmeeJiG5jBHeSquwdFpNafQGxWhFEVbgTFX2GUaxCiPWvNT4663RvdCE",
  "key20": "5ukxq1xFD5iAQxGN51KPgAo9F3qwjPZWNXKsuE65yFNPpgkh28Aqm5aUjYws8osFHNK62LqnMyrbCv2hZAgWV9Tv",
  "key21": "22k1xdJXcCNnL81NfVq4eeqBZJUtpUnT1gP5gbraQKkhNX1RcD6pwGqxNPPXrEcVvs7zDWj9aJgESdsgx4Fcxg2h",
  "key22": "tWJvWRrRbygyJQjQY4KVfKXQ5HKch2kcreWniZXHjref5vCC9AvGT91QAumumuLjq3PtHrvkkkeGzSazGjLocet",
  "key23": "5mW7iNovNt58PUmVLPTna32kScHMbyysWvZZSef9W4kaQ54k3ULB1t7sSP2upUGHJNbEt11vSUzA3Px2S48sTyYe",
  "key24": "3z9k6yd3KRoiuBDoN1ZUAXZPSNXE1FsAAZSnA6exg4UfwtJJS4xJCnXi51iu8csmtk5f3f44fMTvDmS4BdHyv5LX",
  "key25": "3PQ3MwdTb4x1P3Za5ydeJxfXgPzZHdPy7ydJN1CK78z2N1cisbU75XNkeVRpex7xck4PzRkwS9BcaVAw8zr7zKMN",
  "key26": "5DVGj4rHHKUQbiBYGzPLjCUa3XbDKavrqC9Y5A6k2aR7Bt4C6zhLwADoWeQT87imtQW5sYHRqwPGvXZ6UYDUZkza",
  "key27": "5eAcjEtTdN6YhDLrFtE1zpfdyAh1kc1Yc3VG3vva9tmEaF6L2DkFKi9KJmbJ78MEirYyZUtpcwF1GKthwc8kUy8f",
  "key28": "5bEnQnCVn38hBs2AeyDpzMZhyBKhbrrt5trYF55MgXX48PYutvrvpSpQd4cjxBqhikyahC1RLzNUKbKpu6f6myk9",
  "key29": "3qtWyGMNHV3u5d5b6BKzDBiPhUPo2wjVirwUSoNckNSXzVXJKQc5x33TKREotkA8bQZwE3xDJd9KWRgTtUygMHQh",
  "key30": "kxBnnw2RFGJsAcLU3sMS5sntNRhyjAu9SN4pqmsgNdSJRetAAZFHny4P1mAuHfP98xXpV1Amx4xjqYDmfdHi1cS",
  "key31": "2sz9ufQT5xKGxe36DPdNFbeJ3xaNUh9fMRXtWK3Meae975jcgqbKpZzudmizfLKf3WXDPQfcuoqYhHxYrbFDMHR6",
  "key32": "4vm5AE2S18xqFcMHEeUk9fv9FpixDDpmxrkFKn5kAgY6vLu7CotMsCvWKgZkwz9iHfSbYWRvsN89a3pFDEiXPvkD",
  "key33": "3boxJ5omi616fg76c1M9RyBFQvL6iAJ45DEWc6myc41mq83XNkpjJnQFoHMdA8EHCTd67Yn6CtGGib7Sqx2ZaCoZ",
  "key34": "4wxdaWywq3ce6gAktkrdk8iuEfgn8N8mDfNtUULm7jQwgb8ghefKv5iNwg1hBD3z8Ah9sVxB69mXJaDRzVPUhYvR",
  "key35": "Xik3pqCd7FCReBfcDVkQYZMyCiZe1JdXB8WMPok6zK9TFDFH5YjsCSnej2oigxmjyKy9rR5deMRo6RsdrTkdr2M",
  "key36": "31ZnzVKr3jgaZooagcpSdYLXT94cnv9Vd2mgJZDyuA9tTjV91NszS9gJwGmUpGRwSXJBpfXjR2BrMPvXN7yawDvB",
  "key37": "5oeEpmPnF7xANfx5w57kNdvkLArosgt1XS3LCr2MY3fuXBJ4851Fc3g2X7BZLZtkHCFcDqZpeaotdjtSvp7Zuror",
  "key38": "2bbCNwA7RyEtr9Cy2c4rNVBVfQdQzJXmh23CVkmTjBBjPvdv5sq71jTfUBbF9YN2jpgBpSNFgYW9HHy8KFxNFVrH",
  "key39": "4nczfbzjNKFo1XJBr5LFhh5FiD3pBf7haAVDAYiERGerDyLQ5Qn7k6a3e3uj7euY7CbDLgWwdHTTmcwcBE78yGBL",
  "key40": "4XYCHNT6yzHJoiNxeJXTXiMN8vC7UviDxG8p3dAQ893v2ZSG4hqKatw9JZ6C81Cgw7uAsWzzk23dSDYre3qTH4RT"
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
