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
    "4uFVjLhzqfbjACtpjWyaDe12zkNxju8V88Bt8Utu3u5GTpc8DMbhLbLdL5yqim141dwczewNP8vZSpA3LAWukBqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Dunbi7RbQQFLUfUx3Ysx64KgG82oiofxyauNHi3dfKbZW9WExfMnJ6vMjPQo7emQEMpCT4H1VbujoEaNXKCNMq",
  "key1": "2kxqrUdecBy5LrR9aex18U2zVFFHtJu6U2o4apRQ1WrfnMiQRafbrze2wwfb69RJvThvsbsMf2UGB4NH1Q6FuXSf",
  "key2": "bwv1Rv8VDfme1uxKDa63MH1EPdrvqkiZqtWgA3JyGSBaazLrFPyDiKqPvct9vX9WeHYzdq6A66T5aB1tfxvQ3uG",
  "key3": "42YyxGxVSVoi8Q7r4X6RMKJbeGnU6bwGC2oTBNm4Lrmq3TxjgjSrBmMNdgaed3Ct5ZmeanEDpCNAApfrhochzLQs",
  "key4": "4xYXokd87LW6178SZAmZe4P6MR7AY6dV78BSAek5bZmFmKR2mXYtdPSoBkpsiNxGnSJwgzqk7Xgix9hGRsztwH9E",
  "key5": "QUD2REeENbZNgxb2zwDCSSB6e7FwqQCrGwFf8XZZeFYSGVx3MhEVeBkRS1BqVqWaQG2Xr2dxFEw1cgFWXNrtWX5",
  "key6": "AAJS9LQt7S2xgnYfsR8q57qraWnaobLNeKYqb2jhH33UzmBaMqn4TvuUDs2t55Npzj2cBDtVSqZNsgbj2V82SmS",
  "key7": "kfAYehjfRU5ESeMvWq4f4ePh8eccZsvrSNvNtsCc4nGTeprRpMrU9yj4aJw5CBKdjZDWYN73Td5TGpNQqS2Lbfw",
  "key8": "2AyGRrg8TnyjUR4z8jLe4uuoy3ypcXMJ7MwoR1Za5jJdu1nDQD7LZPi8URcTYBLubzKbe7bNKWiRtEvEAtTjEkwK",
  "key9": "6GLwahL8MiNYnzxweciDkzKsikEt3insDKrGmbuo7TUA5DwZUh6gyaFT72xWyqYnnufzzEr1hCc3TLawyCcey6n",
  "key10": "5k4a3xZn8ic4u5NxeBWvCrDcCZDBZqqTu6MS2sKjunmHTgQyKmLZmrYiBNAwqcpvv5MVURCVAymXAGc8cxCDRgeQ",
  "key11": "5Geh98E1TxrE5FFgQt3nqHqfhSByw2kSDDQ39ccGQuysxEiKQigrEgk8BHUXbx2wB2v6uoGJHWug7i8rodu4sZuE",
  "key12": "27BRQMegNYwv7Nbdqi5CevQe55hty9MJr4BqMqmzwqVYp8NtjmQWtcubM65bSwHWBFYv2GvBDBq9R6wwmg5vGecq",
  "key13": "3FEsCc3XSv7c1xAcbPWcm8w2AqDMZuMBPToBVKjm5qbCYLMsQwLofWgPmzCo7N12BJdr8jeuxha9gCm3T9zEsKRk",
  "key14": "5pMUBA2jVHStQrP5zYB6rJTUeZKn4cEQEw3L7CpoxZq6LHe351WSRSrAN5P86XmQJSGMc5YTWKvtVX4J2LPAZEZS",
  "key15": "2W1kgUa9EE5VJDCEyJUYHscprndriYYaG7nc6j1M7nX241M2GHtf2vsj94bMq4FdisHeg3yLK9AH2vrMWkJ2QhYb",
  "key16": "5A89gkzmnwDiZHfdFspZnB5Cqyj6LQDoM2jYEgyhxpZHTaE6ktoy6pcREGmpj3sRpVismfTsHM4fyW9MzaoR625Y",
  "key17": "2xXpUZpL9jBfizpTCKPRHE5dE4RREsafE1UHDZTWjAvevxLAqoVqT3LMQ5ezmFenFv2RBVDmMoqmonJagP3ZbgA3",
  "key18": "5GyHiHHbkr3vfZnbinEpEa3MFiwz2AAm4i5nYaFRXNWaLZ5KEqXF6FM5sj6fwY2MAY8yQW3yfLtzEboVQJxCA1ei",
  "key19": "4dFXPbCzULeCGmK5AmhHkj2Vpo4nrmMQm8CmZnW4NxRQ3TLtajy46yEw622dx95tUZJXjU374Y65rJiPbop4ucmt",
  "key20": "MJaVmqta8kFwBndESmVpCGmHoCTbeoKPEAiX4NmapgFHPsbBjwvMwAJFJzvWBgm6hynpdXrbRTpoocfsBvv6qGs",
  "key21": "25umMkgC5WGAwKUjRsytArLwefcDPBQ8CAqpazJy8tcxDmcXTH1mTYjwUd6VMc8KoZCc4fjtupovF7v6FwKU367q",
  "key22": "5GhP1ozRiFp5sM76RsYZVtcu7shM9LuLdrk7MEhVLbRcbFhyma9KiL9v4gdXENfGqgDCnJcJ88U56si4DDZPWfwh",
  "key23": "4qDTUCJ8hAk8xn3Jm4puWzJYymfsEA9kUhygkikdre9QusVdvTGdoWjwou2H57chFGXG862YKNaf26e2sNy9CNcj",
  "key24": "3Khrj7bhwTbCHmGCnSVXrzGjH1ytiz1yihD4tF91c7Y34Xod1UMuCxJKwofDVzkwfow1297mKcPa32dauVcuFdpg",
  "key25": "MmyWQpoEvo4kfziN4SztuLaQdedfTj6uAq1z9f8Es5mnHb4bZCNVQTNmSY4oikcjTnmmJSufExCEs2QW8A1XokV",
  "key26": "2XmrD8Dx61BfXZrTazPieCD6gVW3pHQKt4kqUobrEznm7XB2omtFstizgb9onbDGAGvMYpbDi2bPBrQCt3CSvPGM",
  "key27": "22RS9oPVJHTGAutjkXSGuJDsz85Y4AJnR7qyFJdSdPK766PQPLmcXeT1HVgJzwvN5rqs6skct3T7UfwRB4wetnRj",
  "key28": "pE9VC1p2XaKFk4whFmyFyQLXdTC172vT21LVXRwn2mjzqDDMLZCs233VVHUUJrvVSkn6XwNr3Y6Sj9SWiweJivz",
  "key29": "CDNzhiDzau5VyqTc8KgbinhCnLooaYVqEa5iB2UR36E3EgqZmbiETwb2pdJ4RGNkk8oPmdjybZXnY9RBZS3D2PQ",
  "key30": "JCZ5ETp4hf1GZe5c3gM496Czmwxp23zawhDokAP9m3FGK3viDsUtYUU3gUDWWxZqU5BYDVXzmzSCkrQ6AW3kLTv",
  "key31": "2BWDo65RnxGEj6yRagSeN31knW33uyTbjBhurwfon4ge72RLaTtT1gYwijor8LQSkorEP6N5B8Dyj25meF4NTQoS",
  "key32": "2jtULLZdXJNrJqiTdfmdwSdr1f3ZJcuhkf7uxSny7pRrV8MpuKfdYsUK4UAYAqf58BinaFiCzyh9UXH3URheADT7",
  "key33": "5E7H2HooWVFwkcxzeWJ2Q1x2QtkUtbeQqjCsSE3gzbc7GSdNqYc8cX4gaPPdQ28kv4opmHWctfd5QZq4UAoJRq1L",
  "key34": "5oWUY6bpjXqpegNdjTaUtkr43nPNN1w35SzoExkP9XbCGNeNjT9b7tNQe7Y79yhVhv7Zp9tLAvpKCbkxDuv4vEk",
  "key35": "3RYeh49Ffefm38HZPSug7eUiExUxVa6Fy1ybKNmnigC4kJ84ECXqvEaFomYTGHvWr2yT1xtoVCDF6sHiWgsiit3u",
  "key36": "3fBKWWLRvD6nuB1PhGufi6HkGoYS61knP5xDam16Dbi3EXf9oT1jucHyni6dG78nTe9vNZgnG96LC1JP8n49mLQg",
  "key37": "3i45Fhuni13xfWZEMuaSDKJd5qG6YBLRgjnrSAkNCWhuRKxpS6cZ9iXreBSHd9azuxGswYY6E6Fqj8pnnfjMgtN5",
  "key38": "4kcCRCUc3n9XtTaE1jNmfCYyRGhCryzRuALGDTzkZeRpBTUeXBaA5oVMsBkoe6VN8Uak3mYJP5MUFvwnV7NCrZnL",
  "key39": "4Kh5yKdGmEggyv3Qo5hTqyqW7SDRWKVKBPARyRBupzasBtp6r4BDYBgQezVodJWkBLS56SVMP9UkcbF4dkgJbQq",
  "key40": "3UjxyGtyXrnbMCcnZXysa2uURtGFny2YnVurVdDdiTx7po3wy534wvUfonRRDS9gsYyxC4bBQjVjC5kKpzLx8NKy",
  "key41": "5yfGMMkK17JGdT7YbdRsZhZcJkCTN13DyUwYYY8HnwzBcfLYKCDJjGqCTwa89uUFkh8qNmHCPuoxeQRfuR9MJir2",
  "key42": "2itSCPcW2QeahM4TmdbXbAePsxhHWrzdgPycWrWMEJVQX5nYsCQm3wCx9j71P8ArXhUgPavXbgyGZHcDgDTSLYeX",
  "key43": "63siKjcG9Qg14tNkqyGD5WGUhmPeM2kirc6MqJo6oyAJ9pNFrhHZMCfVY19SnjVWxKP9BC44FNm17voFzUbkDr29",
  "key44": "4r8ejuJECDBcNV77N3aTW6sgzETMmYF3rpZkfkvSRYNwJMhrmeZcJZeSgKgeaYz7MHo76fbVpbVFZWFGPo2eKEGY",
  "key45": "5brXaWiDpSTTuwMW8rYe5MdjKtuV369o8eWJdGyH6dtuw6K1uGcT9A5Nx1EK3ReUWE5bUK3m6YQ5cP8CtsdNATjK",
  "key46": "4q9iJk529iDTQK97oXLQN8tmMoNU3pLMv2AZT7KDUqbtVoyhpCWq1H62GhSnrWLP9txSS7jE4ot2jbxmqvUzEYcG",
  "key47": "5uFYwndx8aqKYsGQHv2YxZvNC17gwhnqfH2SfEYiXP1rnnvPWG5e3Xgob3ewfH8WRg2G6YeLypiPJHagqJYgvbnR"
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
