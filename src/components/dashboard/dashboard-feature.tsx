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
    "2MpG1xpkWBitKhLs37mVDVxuTQwAKqQurDxJhXaoDTSLBU778SV2VgapSKQHXx698XSwySNWxVvEt1F895xv19UT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQRfSJCnt646pkWfKBoKWPCERPAmKf64NT9xcDJ5w4Bc6e6N1tErg1QDzUXLbdf1GHuvQ772HTbi3S1w5rKsFg5",
  "key1": "611BUREDeFfREbBbsTZRzSG7hummmx8JxzkK84PbRZoBUDAZ8UKok6yu4LuY5EGmduih6aa7PeWvanrHs111oM6N",
  "key2": "4Q19uybJ7CaLUNwpfBN3JAaGZb8vugehaWfZdLbnGC22uUM1AbEehuxCd94yS85QqR42DfgaYXsr8WCB2yWfVJTd",
  "key3": "2U96bnhG6FxhPvuGgJaZfDpNxUUcEtfWM4wFXDqQwc2DtRErMyoVu6zGVoq5Bpw5WoU1dpbfie1GLZwNQDwz5ogW",
  "key4": "dgK5dH2GtVgRJkiLtEVuko8am9rSFxA22FYAesoQ2HB6WQnWrLRxqvB7Wc9BApNCjP2v9odTXUKA7kxyaJtT364",
  "key5": "552Swde1AieNPwcg5NQTpHKwm9hiu1nS5ppvDGP9M3L1r4yJcKmZsnuq92yL9yCGN4MMFtVAT2324h8NXv5DA6bV",
  "key6": "2QXi6HYUbKngRvyKYcUkAjeegmBZwZ8XEinhYvYq6PhvfonukXaFBmr5yQMrAaQZNs5b1bxM25F5TzbSMZWuf2vA",
  "key7": "5qGatPpDz4FJjdAD11wyF3bqPJRaK4NihWLGgaqh5RDtAAp61GkwFXQ9CJ5Aj9ohm37dQvnvNU3h5qyczBy5fduf",
  "key8": "2vDyKkugFy8cv5SHR3Qe65X7bQ8akeq93Q3KXMz8msryvZzZZBDZaYzQS3CdTqNeQ1ds91V94EqF6QapLTrRYCE1",
  "key9": "3ztjLfjQvUqGA7BHbYH5KfeVvNUeKS7pcQVAeTWrcYcyaEo5ZX2VzWksPCGctLryZ7Py3TigLneLUJtE4NkRD7Ju",
  "key10": "eh26PwW5QPqFcseouB3atcXr88hCwQ9Jrt6YtnFwKJxL121rPyxSTt5qon3Mm6prwNURf1Qii78g3Nfezi9VvdB",
  "key11": "4S9eZtFhhtJmV8eHhTcHF263Vtzwp57vZbD3MRkkvJWFyNxZZKh5p2TXq18vbxBePuJf9tLouEKLFsiPNbj5r4uH",
  "key12": "hp8FmnahqUY9Rb7BuDB7HyuawRsGSB3xkTuyUyaahWp1eCnHdKyzCzrQUnz5o2YiXjx2jnegysh8BnSDSnxbZUv",
  "key13": "22WRcsQeJ92FELZFCQTYMds3hbR5TfHWviM6jbuMDAWMEHgcmZKm1JPiQZqGuRHeGytqiVTwQUJt9cmGvFBdDVnC",
  "key14": "56NssYf1bYtVAVayd258sHZk1u8dsSJNbtby2pz6opFA4s8yRYeM8udfTQTiAZt79YRc7rhnVWaosjKWdcst4znK",
  "key15": "5oABpzGFXELbj3H5wGjdxrviabpPWKPggxQ6DverJ7mUfiKYPhQg98ueoWBCkueLFiukyAtf44aoN68APRp2H3XK",
  "key16": "5Fad1FnukRsiisfbgVnb283PUo5qSpNTyeGbXPSaJboi2LBdczfEMjzLETH8LCGgseia1GwahajLXR127LfNwnd1",
  "key17": "rw1emtt8ZL7pMaKgDkqeLXmWYxCfF11xjKGXZWAtqmZPPCTN81aN1QRPrtLo9jBDaK4ER9nCaYigXV7NwRMibmh",
  "key18": "YmYdFooNuey7LmoR7Ed57MVp9eVNeJ3cykEh1CvLcPSoF8vHP38fqRgriJrTW13UUkFh82HwqeW53F2cwpDM6sE",
  "key19": "2FDfcrD6XHYNk7nCd8nKbUWdtMvbBAfEJwxUDUqSZJrK6u6WouGRLzzb7CoNUR5n1RoCjFAiSaC528mCqNryshi8",
  "key20": "28ME6iJHyQo3XLLD96K9MG8ugZMQpJSfb9AEjCV5hajXTPuc4u8tHbHBk61aAeq9AN4qatuMHJU1KMgGnf1UeCtx",
  "key21": "3bA7MiwrdPuk7rzs396d2KddNdCoQppwkqHeQFbhdedTvdLuMRjFckMUTXmQCXyCgw5YPzemwYS4aLrvPVJ5QTkV",
  "key22": "5bRitgZXCMPFNd1YrVPgsZbd6CXVh1ouPi3BTyUkw7CeeeV9EqNfwaqNfuP2av5CNdZDDshhvzPxyc6V8Y1usmDa",
  "key23": "38g8dXCVK3LbdMnowdugeqxn43pj4UDK5aDwDXXinzbgPZxA4TH8D8k5wd6qsax7U42GENQrLxuiWCNgqWZ6ybQ8",
  "key24": "5DzNNJ2Tw5BSYUnsLG8AYUGBiKe8kVafTqCWar2uT2f8FgZDvMbsASgwHUTggfcjX9H9uCCbA71h6QG9AAbZDMuD",
  "key25": "jDfAcGjxwCB4FbEKzfLDDg5CAAEuGo1rd7j33tahL83JynfG6n345GprAJcHAnBHra1SJ8rpR7XuHCZeSLaN3x8",
  "key26": "5orpNLQc8XvKqzd1ZRx5yZXyLdFDtFxn2BPAUd6vhv2NoXFjGbomSYkucCqVrLkRUV9YyMX3tRXPpjCroo7H2jLk",
  "key27": "5o7KWenPGFfhsdHJn5rJC2dmhCvTTn1UWQXYNU5BtJzYiHv5m9J18auqmhnNxgy74oa5TmMxZKzT6eEQYriE2FWv",
  "key28": "2mcENzyx2XiwMpDcvYKDPDSA5csVMoqwsFV6JxQCo7LmmLHJEHKBjYGhwoRYnnZPPQYgjqtDpPcaAhrGXs8hz7kq",
  "key29": "oz5Aa4p7x2RtgybCXzVAXgCp5Y33ecw43nJGWSfMP4B5Bq9fWBRxKJgqmW13xeb5QJU8YeH5NDBgFuS9aaee1AB",
  "key30": "4fVkXZhppSZAf7D5FDutBYkBrxrgAbSFHv7cAsm37jJMCQ7hp8pExzT9n831ZhsWa1F3HT5VZVAK9FF4YhypBy8L",
  "key31": "55ooNXEunqkrUxTALdGPi2tMepQExqYdJsJ5shieLBHQMaL8m2sAeELpFP2jV4vRKxAesLrkb3s2Ca3arLiqWZgi",
  "key32": "23xQXMQ4AEsvnvVJ34jAFoQVWtJVZZ5uK2NmFj178hL3hADmY8Sfqp3SZg7GPeTEM4zGbyRKVPZaro4Jo2XoEhQ5",
  "key33": "4fiXDf7QcS8NJsrq7SWqh8mqWZTEAmthf2nE7Ay7PJp22TjrMZYceu5bajk3cvTTfDtNuSxLs8argEKGFoVZ6pqr",
  "key34": "L2UAN32QEEgaNyiGRvRrthDHNKs9KfsyNe6b1pBQ6uQRz2tzLipTht5Zuvehig1bW976vsbkw2V71jUCzq5aTG6",
  "key35": "35Cnx6gg8UijA7eKjpEEjijwrsHb3m94Fu9LoTfSbAEE3wAfSPJttYcYYstjZgjwwc4MM3W6LJNoq8taCxwnwvGA",
  "key36": "5UwQtHvy7BtC7MduNxJVPxmffBbfZKCvyyN4D7f2MAhRHz7gbDPuBH5bHFczK382mopUbtgcgk9f857QDqT8Q4Eb",
  "key37": "23GhYUdtxKvbsVsbC9DgAQTWAzA5XAvoVipvCgne5tcS77TWjmmN2298at58fcqHvxTuWsnC8q3K4gijbvXPoGAb",
  "key38": "2QBPbDWv6NwurMaoTt2zhQQ1D2bCZMQpAz3xptsJm77MjNAAVtk87QogxWGi43UyK1ZxDPihjKcdjRNuaWZTdzHR",
  "key39": "XWKRA8cWFEyrM9T1jemwNMmDyvHXcuciAtVhF1hG1FHGm1xKxCFvsuGKjSY3EKGSnf5xDBrdtfifppfSwdXk8S7",
  "key40": "43wDvYHW6MS82iQDtJQk2yPaFpvRqGoBKiA7Hui8arp9JJoE5uhE5CreuG6QmrMGD9RVebzBwUfMHZNpCUeM6TAb",
  "key41": "3MdeSPNRaEA9HBatZDHXJVm3ZrwAbPr5An7spz8ZJSaQ5KmzgUSVFwMPxw1V8XkcwbMvBE5p6XrvAhnnZBKrT6JV",
  "key42": "B7vtsXxeyFHka9D6WwSRepBhhFNecBCKA3hV2tej4YPocnFsNuShRkPGcnodfGChDrpT7gRzXMX2xoCBdHs9qT7"
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
