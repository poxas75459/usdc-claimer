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
    "47kw8Y8jSbeK5iafpFkP2PhrjPUubMwL1DBKDh13ahTsTzi9cttdHQMvcj7Mf7Wb36S3J7vpwSCGnwmZJfPcySdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8SzhZ5e3a8ZWSkAf48Xmdgv72K5WRXCSvngsviD4YTB3gNSJ1kBExrqcTjxWqJaSzXiLgSMZ4i7oUFeeSQMa8M",
  "key1": "3iraMp9Ksc2hem1iXgdT3McbMp5rUmMc99KVb7Mrnjiq6b3cN9VFQB5RXXCZQ68FHdkjhyUAWTSVJhhuQfKt5s7D",
  "key2": "3CwYP3sHTxZvmbV4DuZRvLFdyRi6knL7KWwxzFTkjaY6M1yGKrsToKqMJrj1nKCKsEPnBdYBbYwQmLjerZZdWTBs",
  "key3": "5DKcUxnDoDQSC1YYmJLqzP51pVtZYwffk3ipreAq8mD6rqpkDbAH4DCaLhVmbWA4vombmw2Lcr7y1WDrVkDk2QLa",
  "key4": "2Mjf3F3XABptGsakubfTdh9ca3KXhCnknJuB9JNayUdvEYMBXEYp6Pu6QU5cmRMmbDUJeyRGJ4LsiDccWHnDg1mL",
  "key5": "559neGnnjtvgA2xRoMxoJ37NQJ38jYQDAAEz92yiLqxWgNa1qTiEzQhFZCigUZNRXVSQEuzkkJAFptURDLaXwBPL",
  "key6": "2Nxwwc5sJErVbTuRFWV4fijReB1jNUZwB1do4FdcJnHP4uTEpZyi9ngktp2u39ekrkBn87uDGJaD9MxN7m6gbo7T",
  "key7": "8qHPF9gAVFXHh62i14oiGsMVQpRr7jjqUqQ96KCdYqac96w94o33tNz4gZCn33zD4F9t39PxPS6bLNx28qdqf7t",
  "key8": "P37inZnLh5RVnS6zzwQ91xQvpwy1CGaTCwbRwXhzaeTmBSTmiK8qwgkogD5cUR24BCRXcnAymvgZHzc8jmrL7g8",
  "key9": "3RGbj5qk5wN2ubvMtrxWodxHBiiWmLti4SAauWWvboBv4UDiJbogQTDNTAHizMczHXzKptksjZzyzxtVxWXomhGw",
  "key10": "gQBW7x7u19QvezhmChwv7gtgwUvHxxHrwS9U9wzwsgBBfN1a6pBXyucnS5fCvAEphSRYPC8Js3Ne31LZzZnf4Nz",
  "key11": "5zTPCKm3HhsNRtcf4o5JQJvneBLeP8kqpk1KSHXXktPU8EcuMQr7ksEcPLH1xU6Qc4ogTkaLdY32Mvrtjd5z3PpN",
  "key12": "4kpWiUDeT2G4qYtB5pcEoFteSYnLmWNtrHnq4j2foU7c6pjC44ZwUPZobHZs5ZufvoEaZCw9bywAWfc8vtseKsb1",
  "key13": "5kjVVzufPht1NiYeWMNJYpnmCLLh3wngy5eKDe5dcdZzvTyAuycbQvTFMFGU3QLjFp33Re9qf1894cavFq3sPzsL",
  "key14": "57yT8iL1rSFFZdKe8xdy5ND2NYL6DW8v2xxfdRhxNdvgjREA7o9rezvs8uTz5qAjbEQq1UWevjdjw5Q6ba56iUDE",
  "key15": "3RJF1djyRAHgessvcucXXQ5LVpRLRHod5dWkUkrVsWfEBDTRp4dP6UbSNeZ2orxwazY3i13MQCW8SgF2aHmLVidT",
  "key16": "2brfU3UM4axTuo1yfc7mRXhWPbfGTagaGJtXv6iBUcBkziZF6SuS29thTDHnQmFVqBSCgEmtUHZkigBcQtxSJ3XE",
  "key17": "5cmRa1GVKwmS1oqVmnTCyTxucDsqZtWiX3QeLzkMSXNkNbEKRdnDDjNPd4ZegZh5SscK2GcT8hhKMfoVAQc7TGiN",
  "key18": "5MnTwgXZp6rX7KxcMuZMP7suosWN7fwtxxfdVtufimGkJ7WXDVwBwFFRqmNweTCYuqF7C7W4wfaqmcV2wTXcEign",
  "key19": "3Dqe6Uzb5bcxmvQTseRDTX6Nnf4PMLJ7C3dShfG92gA3xuRUX7yCsfLiLMUPdXpFn9GKaX6DWFakpYxqbiy7BW6M",
  "key20": "W5izN8CWQRXecmYB12fMwPoFKoYQfsQxwLQZHBRuNnBp1WCc3eSRwd478V8TfwfvnqYEgCzMZBe9JbjbvX39ETT",
  "key21": "29XdoEAsnDJaDEba6zJs21QEurF8UH7LcFHX4558h93oWuwzqczQMcU7ZsgCCvXM3KeUJfJm41u7ra3zp1vvNbF6",
  "key22": "4M4G1yp6q9WX8su4SmMXhH9dcVGjoDUiQiKt1zYGNsnpdCa539oVHqCXrxUyEWA9rwH7gBpmNnQqHeiNvvuAepM4",
  "key23": "49T1fGj3kSf9ErRz95eoK2gE2DhvHRTus6NQAwhcGY6Anz962cNod5gnyqKLLgEzkfyTNfyoHX6r2Pzm7GhYaYUH",
  "key24": "4MxWiYEWgNugsTpvMHuyDvD8xaMBy48kAir8tMAJkNC9H8Uu2EdJ9zyySJ7ByHRaYavp7Pq3b4Gp2yskqn7tLpc",
  "key25": "4NzQbvDuosQW3JAaWBqHKSP9pqQvti6eyfHBU8o2kDa9p8jmXiu2NahD5gq6ErsphkQKnG9ZFRXjQi4oLZrPDG74",
  "key26": "5MHRGdc2TSbrZMxhgnSP6hX2z4Sqi1EB3g3XJptcBkqZ6j939Rc9eFUmUm5QXQZM5kAmYYq68BUadHALJHTN88WD",
  "key27": "7GeDuFX5kasDnD3m4N6NEbV5NKveRg9zYyrXhxBKrMPqLg1gRxx1WRdhd4FuTaPys4m3CXungekeCNVCchFQjmN",
  "key28": "3Y1F6KUBc2VqzCgFcLEGccgLv8smgVezTLsaNGLKG8MDCL2pEPN3nz43iZm9Stno7MxEV8gxQCxxX4aat58LoGAe",
  "key29": "2uMkaUnSZdLrutowbanTQCwyXYyHVJUYgmS8Gd9pb9BLhwcSX2KVGp3mm9p8yKPrqD587XwdXUXDMBevfW6anBWR",
  "key30": "4DT22wvqydj6d5ekLkJ3JDkgHY8sT8Fv8yybCKnZ5NFQyNzrL53yESestyyKrjzwPxMicCbTZF8DtxgDaHXW3YFU",
  "key31": "3zYf8bsSz5S1jdCVHnko2xszHNTUPzcTvS7mtSPvU79qtNosqYKKAGakBz1Xe1BsbuRnidTzXR24rJSen7pwLewZ",
  "key32": "2AGjqdYAivm4V2jTepiSD6rM8Rq5rQa5xa8bAR4CPDrVu3gxEXvt6RC2bAANM5EehfLiURDssvR3oKkCm1yPD1dN",
  "key33": "U3VEtq4LeXxpbsnFSRNtaFdtWGYmL7E8cvGS3X2wDcV5CFzqzg9wyoZoyU5G81gTbt7qn2mhkwdCBLwEYcKtodC",
  "key34": "5kg1UEg37Eope8B16tX3gbEjQ9wanUm7fWn4rBYE5Ct2eLyf6s2kGR7Wn2fdZbmJqpYMpsy2CibzcsWqcxwKxDZa",
  "key35": "3cYxaHojnzCVpe14HvpGgLEzaFDHwj67sE4hd8N9ioky2647Nd2zngzhqop3L3aRoseL2JuWsb2nJtbQJcdGAeoX",
  "key36": "22NGKhGXtCbzbwhjVHMm57oBHfsHqZjMdEBUaVrno3wBDKvdJJPX29Y4PoRXKwhZN4SQWqA8xxnrLG5n3etiCLJj",
  "key37": "5moXJCm9VRVqchmb33G7ZXiiA8mAie9AGWEuB14kDsXX19JyR9TroqqUQq2yC1WtPxFojwJHrTFXqpCSGfCu9bPB",
  "key38": "4T5c4aBYeVzCp43GBbt5R72RU9rePHb41rv26M4MvBz7RqXJ2ADLbPAyXWuh1T8wckQa6Bcj3sH5cFmmTbwgHRZF",
  "key39": "4dXozhfhC1N3nLkGbLAr17TautHfgXjahNU9DF77Nx2KBdXd7aMt61HCCUs3X1JedV5rN7WTvfvfSYMXy3ckdSga",
  "key40": "4sSui3w28M3hDMm2UkCeWvQZGWpfUkYocdoAD9qYCyHamVhF3fpedoWVW49RepzYKbEjNLuD9sa1ua89tn9VYveR",
  "key41": "578HoGGT2Xs3eiCy2ehkSqpn6gT7ph44Ff78AcQaLzmmJfrA2LERRYWPfhWmakrUZXjgw8fRd1zDdVYrcu89qmk1",
  "key42": "4dRDAsqUT6CPWj3vNypHcgTwXdg8gzPU2PNaaGxtZuXSe13upMUEHe25ZxxKA7jnt515MWxgczUnnmnxMWjyQFx3",
  "key43": "2Lc9sm9jRQjNu2UiBgiUcjZBdZwtJypKpbjcfyTT9kHPrxPKFvjqdCJxjv3kWteRhC7aNgsW857FNc8VeR6dpYHC"
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
