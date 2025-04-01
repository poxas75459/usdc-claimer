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
    "5eZnQ8gPsNN5tCT2kScsXH8WPSZ6PvkpYn5apLVUcBZiTapkTpDPnxh3YEDGMppXQHYxujKnmnZZgkDyhiSvRhkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bQYrWgr4GpV5w3tz8d6poZGY1PGgzTnff8ww3TGxnz1E8JUnCdkWcTH9NSxXFnHH2fiVPUb5RoPCeL9o4PLoH37",
  "key1": "5PZ3kWGsZAP4ob5TJnXGfy4GRXQLhBE9xh4NaxBuReANaiPdNGN3gPxGFpvqcgqjpDMZq4zsct4Gb1FK9UyY7esd",
  "key2": "EVfKgw1wDH2Gs6248zWYbdTEcuhHcoBYLV4ZpFGvBH2VZWofuUudisRZdnpuMYaSecu6w1jpHUtU1CWngd19nfJ",
  "key3": "34Lwa5x4h7AWFTCkF7nbHxmo5bBFfT8dief3jfbGyAAE7YYymbLn6ywnv2LLqg9a5EEoDcEZoNys1fNbmMMJP4VZ",
  "key4": "2Qg5x8Xy4wCeRBi7PYkyhq2NPR1fHds5N5qWyPKQ6NjQCRmeDbJX6aPjBy78aSZ6TnTmEqoYPJ4JSPeSk9JvUqvG",
  "key5": "5m2Hq8U51UvYyEyUtvpgb9QTDom4vCLu59wNECuzf34WGWNJrxLcCXTCX63xxX1hougAY3ciVXFhVgN1bPN4rGPA",
  "key6": "5HKb8VJxZ9aB3WuUoCMCou1KZ2hcHW8LtXzH3YB1oFZrFjxY7qjiXHmogDYw3MiUa42vv5J1g3Mdv4YiQcG3EwVu",
  "key7": "22V6vojHqKoaPdw3hn4wqttViyWNHbAx8LJL3f68qssTvReprjvyuuUy6n9qrf6TD7t3VdujUKM3qPCattMNJY72",
  "key8": "3AA926bnC8zKc6nyxCozr3vGbyPWGb3Rb5cdQW9mUUDcGxt2BbzduRUQAopHcUtiNKzsfYLBuAVFDGAw1QvaqzS8",
  "key9": "4QRGA1birjgx564Gh82JxwmsSUbojK4JGpkmuUHaDxDfoQBmKxCYtr3D9Jxqm7Ngf7vox84UwgibfQWuagfL5uER",
  "key10": "2HrpPxR7jPS3erDhtJYBSq1jnvzgmpTvEZpGQ13Ap1w7ufpVyPJ1yfNpSXQTvETiASnoM57Fxmf5KwpaeLx4xL1r",
  "key11": "vB3ysxESBveFjgW8zWig6dHyMDkRuLqv7mRo4ZySPkiHB9fGqzfhYarmwh1xd9dsVALvT2a29on5nmwTXcX1QaY",
  "key12": "31XyL2VYjMCQ3YZiuzdVoWp2SboBLHztUe9xUQFroPGSSR9vLFG3563sBtR95hE4SJwbjxmVMuteC3Qf9tRR9nhe",
  "key13": "4q5st5vzique3QhYmxnZXurhp3tt2SNdYbZFA84e4rthxtrM7uyc3puyP71bZGjrSnxzY1bCcrQcuhpigPtrvK9L",
  "key14": "5R4jD1WSJxNP26gqNCwCpWcjczLZYuxEscRGQRqQy93bdht1QCZ13kXRJc38gQdkxSGWU4KnH1dqzL92hPzsga9A",
  "key15": "rXJKvWiXyYib1c3TQFHubrSBWV3T9Jvq8iUZYeqewAix1KGU4owZ1qixK4BHZuwcYqLVMJGSnbMrQnNzdHZgofR",
  "key16": "3fb9Q1DX2jdjbggMtUJpy4T1APrmu2gigGciChJTjGVYAyDjguWBadgxitekCDq2QaC7E1op3c4bvR1K5VuniNEs",
  "key17": "2yqh7xqABkcBTzYCcJP3esVE6v1RejjZKrRJMguE5deuEKqXN9y98cBL4Wz92UdujWnRW6Y4tR8t4sBCfH5YAk9Q",
  "key18": "F4wcoohT1DicYYp1cW25PhvA8AFHxwEHgqLaLNKvSfqM3qKuM7VX67UKJRYfD653oYLUbUFBKtbEs1QfF5cq4F5",
  "key19": "2PQoarEpLZDBNT4gyYPwXikpJ4zVqoYKf1HuoQNyZ98PzqBRQCdeiTBY7KanLPHvYA8apoeTsGp9E4Qfar8Qv9Fj",
  "key20": "2oxd5i9zpA6fstvGwjgCQXMEuhrtdsTxLy4YxGH5Snh5aak8ZQVX35TgiAbwWfyzaKStNgvbtQrom7ksjJEsftYg",
  "key21": "2ZGonyZvTN8wEyZe6Snk9Q93K9eyL5PxtUNqCsQDZZiFLBNwj4qYYW344nh97t2XN3T3yf8ksc8g3tyJDvzubkmN",
  "key22": "mM2ayeHykieCddpoCM5AmDKHuD3GADTCm3m3gnnh2npNBvrVqxKQxTgJNaFE7EwEmb3o9pMRo9wCYWcuywxnqXo",
  "key23": "3NiuPNJQcXJ9h4eUKK8tzeVtJKuARJFJk9gj7LTh3u6zcT67cJWhN7RWQW6THjfcu7LcFmUgPVGQn6swBT96DsCD",
  "key24": "3iBBp1424vjqJhyF1SgkCSJvxxQtpTrkRuACTe251LCquJM17jSU9sFx6hGq4ArdxXHTxHczg2AB4ManjQhjjnKe",
  "key25": "3hzaprsGqYSC5LFibeBWDQZ2DNvzVRJG2v5mBqLEwoQ4PohTTv9wKoNzEmC2SQ9pVkdbx7yETHuKzvQywYviGrKE",
  "key26": "2yVYSq7gZU2XkLjRLD8sfEXkf32xfrvCj4N32WG8gkd9vS6K6uCf5NsrPDWPfJvVq6FkGKcjbbkhtCJVSBPtNC34",
  "key27": "DVTaRQk1s4WjdjSwaxrshhv1JJEhNCNXG3BsWBUi4n5z6mBpZyEJc1toNjsTS4wR4vcxaTGJc4ehhT9RpbjGsNp",
  "key28": "3P5L84WATogtTpbzzBvbqsPTqb9i9T5QvVvc96P81Quk1osjofYDdNELWtnwsu7DtmmBQrW62aeqp8evjwMxbjPd",
  "key29": "4ZdRRiTnvyu5fq8TBtLWQVJyMS9ve9uh2NzbPEnM996zJ2bGfyLCbmyrSUxFNMU1g9dB131HFcdFLVZG6zTVphrX",
  "key30": "menPec1NSXSARcpFWWBTjVpShrAjS3ufzkgfDUoae8SjwNK6yqLBxaVXCZi6YXNEdoiRwHcZcXz6dEAZ2kRXqSZ"
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
