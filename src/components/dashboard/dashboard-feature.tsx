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
    "5F49xrzxyimM8SpURJm4ZtFAhkYi8HNaZDEx4Mp4ofsGQ6rctmNf91rpqwVgtRykGPDTMuWT5jxgvNkD4AtHvmwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49bVhzL1URL5NF3FCazQNucFXpMmEScRFA4RbiSauyeknPZ6WfNC9ybY84tECSaYnwpuHKuGb4KwonZfhUGC2G2W",
  "key1": "36n3zRKm1VtWRiMDyCmtpGZibProF8C1J2Jc6ETkJPm7LLJg2qScZytj2PkP4whb1BbaZbkMusMbco5gNPNVpm4C",
  "key2": "KJmvKDayG2utiRPXaSRW45N2RhjdK2zZbw8DA86n1XTBM11TQMz3dLMyXJqPqhNc3YMZPG6UQQ5K6AsofBYPwJt",
  "key3": "2M9rhV7HFuUmw2BHpuehTMb1CKeMUX3eMTth4jZstLgCZzMYWVW5MGUEotuauiEoXMzv6CxDfyV5jLC51dHEgqZ2",
  "key4": "NAfrBKLdcfPF2RuEkyK6Va6DFvKYTyfejysCsyeamw9fxMabekDkhmJPTbWvFgnHhrr3GSVoEUMRJwnzYBWiWwi",
  "key5": "4Rb21kFZmaj5kYR4CpdqXKu12dKTGcLivJQDTw4nt7sdPgHC8vzLgQM3Ufkg88KNSKiXTpFj865xMu4EvC38wxx7",
  "key6": "2JUetV3aeeZRaYN5NVQ76csw6XWjzTN2QN9e64aeLwK3AoTAmiRjPtWPcgSE1Ca3YekcX7AyvxZujgZzviSn2yTR",
  "key7": "mwkWdXNpauSgyXbeRtqFY6eRFybKKuUXPGy6P8dQ4C7zdRsh3qMjYKrStZ26HJmQ8AwMPDh8EsxE5Nt6VBRhHLU",
  "key8": "4Svyq1n8HBupc1TVXDCmToR6jCBXq7hUYrB38gq8zezYeDSzdqdEwbA6bF7rkk9KyMa1ytmE16Fcs8qr241TZiZ3",
  "key9": "4pFjG9LW2kLbxZxZnkrZWFumnDHNRXCCYuFDSEGqFiYKbsM43GVLPGobECZEfaP3knMnbHB64SX6ARYcGZp6UFEe",
  "key10": "5HrFcCto5FvRxie4sG9kme1GBDnqHQhMFjjSda7Aya1PUr9RauUCsZ9mXUu9SbskwUvYUp5ymJf1A52nk82bz6MG",
  "key11": "3LMcTUP7eMSwHHBvBqZHtjBv2duMMraEprQqnfgdMCA3N6CmV46viUUpBxccWeQPirPtpHKfeL8FSAtBEKw1Mm3G",
  "key12": "3NZvzJdCcjrkZAT3jRbEmGoGcgUhcptWn6wTjnYT6gQpVc5unXUxVp2mcqYJdYDGbWmBCqk293cEjpaSpfGQeAyM",
  "key13": "4sHJhcMoiyPe4UvdNnBbRojcyGUVZfigvuivWrcvPy7L9TrZFQh1fz6MuCybP3KoeDjVXogD9kJGD7SjgHtnoscX",
  "key14": "55q7ThcY7uMx7YLRBiKcvBKcopqk7s5unoMrVeuQ2qPF2aBpZeykvpymS3s6unQMzpg1MB5ZeTWwAR3UjqqbyTCh",
  "key15": "3EtcfUw2zPJmqNMfqJCGq3X6xovr1AkJFrXyYJLdm9PsUTG34dHMPyZ8jMMLoe2sMZ26og3RtmAo9sKhAe5U8Syf",
  "key16": "34j77ayTRDPhhvjY65rGc65tHyhnPZSiqJbkrHcaE1u553ZBstasfg7mo7P3cC52xu4921QaaYqbms2HrcAFUqBk",
  "key17": "3oY8A8yYvvHaMk2KkR1ZspVGRMbkpDNAwtSnZKP2zf3zTRVXK44QYBmqeTe4YiNXWiBMmBqnsrhUJiT2xsSBw8xe",
  "key18": "aiXAGoFXjrroTBSMZyNm5upypeNwwN6uPPbgxSS4bephvZKWQPtMe3oftttoVrdyF6pJaCbGoYbSdGkKFTfi9s3",
  "key19": "484UU3ohxkcM74zATPYcBWAHeJQQwCz3Mv6MPvqZo19Tzy7aa2GS4Jy8i6q8B1YfMVEU22As7J8df65pnxH5CA9B",
  "key20": "3XnwJw4BNiTQS8gmtY2z6SEpDEF8aEHBFc4RPt2mLCjDupTHj98rLAbbKNfbfiNVXMrpbEUwfaMypRsUPDzgYV3j",
  "key21": "F1cxyjkSk2pumEk2ZFgSaHcQbXKbxdM7oUH7zbYadviopD5hKJ2yVCLvFgx3P6aJp4DRfZoJ6YvL1F4BMeGp348",
  "key22": "sC9r3BS7sXiTBpdxS9MpuSuogLxAjHz8okB4UPNdP24wv1BAJTWB7NUVFR3sg8xreAhMQpThVBVdF4rUvQbdGKk",
  "key23": "2GzgAgg81xuGCR8wqAA2KHWgyPkXMpYyD5fxHAryyu5BA7khAz6xdHvVLDPMkmy9x5avnnX87vxosjWuiBdjzpjw",
  "key24": "5kzjUtaMaqUzpVttmGfJR9KdN3sqpMPao2tdB2UN1iri69UoK1eCsVGF69ybGhmPcLaTsQRi7wCa7Db4G9jzrpf",
  "key25": "5gxBs9srEqsVwQZxjvkLyxdXHu3GQjLw1LhzeMhojqrA99tPuPfEYUE43y11zRpv5iVecQi9u4aXhNZb8RzSUU4N",
  "key26": "2xWmbio1Amw5GfroTaj3Scbob8DyFZZ37ZQWsijSERcrj7PS6dbX9xAdevF3km9M7jZTLasu5xwrkp8iixk3Jan8",
  "key27": "4txxpMsiz6hmaHvvYJseCUD92by6NSSkrWYMoDjCosrbDdF9DAGxoRMwkVAzHte9AcErTpMuyanamxMgQY2Ago7T",
  "key28": "3vkuzghfXfhYW5HgJuaZf2WBJuXzZ9rzzkReYERbG17hbThrMiGsffzJYLMWPeVfnk1VJJ8MiYEQjPTNsXhHBRNr",
  "key29": "4ywtKGQBtoWs1Qvb29T8LQN59qhgRdVamrqk3xLqFhx34XPUo8btZZtr3cU4AxeCo3hKnbdyLvcHXtWaPLfiRCTX",
  "key30": "3ignBgWoBab7icFDgqSgpHUJH6mjXnxtF5JcEqvGwhRjAM9hA5washxj1CxVtzvZ4qpzYcUNeS6TEt9QduneGzzw",
  "key31": "2wmfbRuh6JZPRqVAxJnau4TqYXnjaQRwV3XJPU9WTQfUmY1biY7ZaKQwQhp4beMbY1aB76AQG1vpvqNtExZvfcji",
  "key32": "5bvp7L3CZxsE61P7dunWXLZ3Ac2rGyVUTSXVcE4je8GsKMnRvgEXDrzCiKMz4QBZBkb2Ddn1RxuoRS7tzMT42CkV",
  "key33": "5MdUpFpdioD2sPvmNJju7k6RMZroQ9ejpRifCMo2SJcRyYo5Y5yF8GUriBdNVEXXSwBHtGZ5MsTA6nppfWZEfXM2",
  "key34": "3WDzDHCMCKqzraXU37gKuzsAkhWYytmJUWLf1ZocfVnwfHTxt2h5kTYZyyoLr41VqXmUueonpDueoTFt9v4ed8Np",
  "key35": "5K8mkeHFiCP9gCt95Ds3JuaSpyNUr9fEbLU4QQuvRVRginZDZtZwEhKKE6aMt8ShZ5MSs8i6nfDiYZSK6ZcZWrsp"
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
