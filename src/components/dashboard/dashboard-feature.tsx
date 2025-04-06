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
    "213odd5Ee3xQ2Tf35Ltx2K8pKstn3eyC4ZtkpFVqVhX3K3ekLixyMySrYsVbtG4N9ghsjpmH4JaDh2Ki9CeFZUMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39QSUkczzsjgQj5VK9ifjwvhxios32ScP39xDmKuNkRUdbGnz2gfeM8UqKociRJbBMUFPmTphEF6FbLYQBKdo4f8",
  "key1": "GmYqaMGTspnUfGVS464Kcf6Z5tUg8WDRhrwha8x1zccqtxAQ5u5JXmefQuQsD7qmCMrm8kJP8ni6fDwkkCK9z6v",
  "key2": "5N63rWSM7aNMbkXb3svAMrgChZ5EhyRk3iZpj3hBZwuyK1GNvKbDHX4L5WggMeV3rYPNpRTHdxuLnN1H9gAYor5Y",
  "key3": "51EjZXw91oRowXrSNx6k4QPstYJwRUGahNCYkstVYywPZpLoEzCNJSjsbhEVm8FTWgRhVs7vyWw1cjZT4M3XqdRW",
  "key4": "5UjZoiVtbo57ZR4px5BBrkPtmKCP2fYuSianv74xhQuboJ2fv9zHFSMno7nmQk9YpodGcXLsi4aM7iC2jTpAYqYJ",
  "key5": "3Usge6X6LMsjoNU1oUbVsX3XhRvWipXC7Z3SBKaCLiLinVpuRoKMT7qoae4osEFTfxQBd54MB7DxuewdyH5rxbT5",
  "key6": "3u4TvUX6EbLGWUuqycjEvbCRko1csDKG8u613a54FLeJHGvFY4AVpRU7SxHeyZ1hCdhGnuFpkzWfAdQjo3gvAzwu",
  "key7": "BzqvPbUoM1xu6h7KHfALWVwn6FKpsHk4zyNyuzMogPb2obwHrruHkqmCqbQGyASJbzyumEBWJdvVniw91L4eHFg",
  "key8": "3pQG52RxfLYtBF93PB8c6YSVScYTbHZjE2EtVcw2zjKQwhMPwdyvYpWyWyxAaRBjxYSVuc3k74oB62VEc33dWKiy",
  "key9": "2QyRpz1jrBsXztzVHUqbbMBD8Gd1yB7cPvCAVteZcLJCe7J3xgw1ozD4A7BZrwsCg6yKDxhoowG37CRQfshjT2pZ",
  "key10": "5rJJyR5fdJcZSk2kfBj8WJasZ8E9JhPuUv4G5mGtxZ5wgPnsBfia5mj4i3vDKwZFHrSbKKR2KLpbgZTwzUrZgZav",
  "key11": "5J6TqUVaiffTUtFL682TQ4hkHr8xJR5SVoxLns4pQU1MX7Xj9A5pBA6z41md3cee3RYCdt8pYkMvL3TQakfneuTC",
  "key12": "48EXf6GDc6xeDLEpQA75majqiKLDdoYAPoSjZgpzUSmEnQefVWq8Q5cqKiLhb7DnfN64qEBd6M3ew5pKsvmfRkf1",
  "key13": "49CyHUzox6Td3RexC4JZ379wurwB6AcSzVMH6nFiTem8MvCFmMVZzeowbGhTjmGGbK1wdwson6SHpSRWCq1QFcF",
  "key14": "625PUxi24DgSHTxh9iqCVH5QUJcRTtcK9xwYeK4W26HSiBPcqzcYwunqPXrAvcbckugJYtTUKXaKVdtFHZmwov1C",
  "key15": "5tpSVBhLLmFycr3q4gZophSfhRh4YgkVUvJfUdzmP3WMy5Ns7qLvTXT3wVcEtgyyR4SegQoopeTw2xet79xEBa1a",
  "key16": "BTSxZDMahzyBUup1D4NgZYN4BhWHpj3QFrwCZr9ysCW9EvCPY351S7NSvAViwPB9K8FXGvpZddXuumiZqv3TVnT",
  "key17": "5Lyi5zgTGN2tKZD2zg61gTWg31vNjw5GJqTaEMw3GyKEMZbUZ3Q5e8EsgVXcaViLp37NJSx3zgzEoQG9hkXteF2E",
  "key18": "3AQPibybMgAouBD31AspbsseJNfcNmvgJotBP7GpCxaxX7rS1hKsxrdzAGEfYcmJgb4zsmA2x7PRchQov7dCSjSK",
  "key19": "2c9EuGyHoxpNRhWuCxvXyNzeGu7CtqNuvLjSg8ViB8V3zjFCfRh9qshjm6LYjokfJ5a6ZcQU4tt2mujLbVfJ6KQw",
  "key20": "62fPAnCR2YEeT1b24gPBPG35BJuhKKGUUfWhjKno99yLeUpxX8H99U315cDWz1WBYBYrv2grC3iqnK5N2T9uoiQS",
  "key21": "4jymie1Rpki8BYMNBVYrHv5amRBFuJNLVvv98ui7fUygzC6zgLjh8Lns4pbBFa728LXfMdAV81toq2UuPiD4pMPt",
  "key22": "Mw1iQREAUsWGLkGrWKVe3bwQULwvRm53ErvUdHxusqZJgyoYjSpVBETHoXa2n7b3AcuRtDT7gAdszUq45zXrAtT",
  "key23": "5hWSfwAquzhFN7rS8pXF4ku16mo9aLnAVWiyepiUSkVpvAaH2jDwKUy1LsANeUKT8xH3Mf4vFXvfWGEnmqD7E1dQ",
  "key24": "2zw8Wk5m4bMTQy1s9RpoKHuHmERDf7eJ4ZXWHLLr1pJNJEsXEvYT1qJCWdskMWo3oJbsZEEbLKiuetkETqC6xV1W",
  "key25": "23n2K1YjWpq3ENRRBQXKRcKb8oDxKoKWUPgcV2os8FoPKaJEGhhTG67paxjeQwBs1jsW5CscC2PESCBHbh2rtNVr",
  "key26": "35V3T1mtMjnm5yDAZuPQV2PumebkdD1yCZEgps8ogfi64wQx9RhzdgU6kr4ppUsaWUX5MbXZp8d2gcPMiPAzcxKk"
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
