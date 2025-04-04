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
    "RRRfhi9g9RZL14ESjoSNj1Y3t24EDUJCKJRFCWa9pRd6fGpikJxgxRc6bN3VP1mhEmLLUtyX7y7pNu4MY6QxsbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "526CWYmmkVCRSh62m2fvWfRAfmy86UsX766F9xVEKHbFsJR6XHi2Npcmz3WyZJN9egZaViFo9bgPkrncYxqrhjn4",
  "key1": "5vvEej3n6nuroey4ZwwRAD8YugsULNfXae8vc4xNjoFgX3xjMAZyHw6uRGyHYysdaLpM8Noeped9saL8QcykYM1S",
  "key2": "5qTjYMAfudhHL2VCnV44QnNgstaK8pxrfrJvaxinn3xcvAmDBhTLxJQgsF2gn3SLGadw6CiEpJzddg3g5K3xbPZM",
  "key3": "vA1qKTjtMdz2FiSw76icPbEPHuJLjirBAFurWffsmUHTypTePW8wuLAnfn9xPB55Lqct71JFJ4r5pu3fRYunARH",
  "key4": "EPgsXt2vtKonjhnF3bNiQvkuaFSuYXQtpqLZd6GPyAFkqQYYDeZVtfrnEGyNpMVrDuzTeK58LZq9CazCfZfgtet",
  "key5": "26yVGD6Gyu1iKUacYnpmKrYr1Y8ttXgdZxXnvSRxmwKiUFshHR41G4wgFM15vgXnnqseLeDnGwJMcjHQjWrV2a21",
  "key6": "5KkSqHZyN1ZNft2aSQZ6X89zF19jGP2EeZ9VZ3qWdAgoNtTZovb6HZScMgHH1HBP6EZfopYjpyB5gLDJ9z4sXBaL",
  "key7": "2ieziopteSbHvk2yds6fVYNp3ABy2dqwPw7nq2fp1MXv9EBzgs9PRgoHuqJhcaSNjKq2NBUm4XeVLaqTgtM198o6",
  "key8": "4McZDLyqzq5LBkmcMZmw5SSGbTyUEfRrqTrghGmKkCxgh9JHmasgkbxRHa5yshb1TPGsVU5V4mkCs9X2wjKdkBX2",
  "key9": "5eDX7121r7rYBawoQJ7V6aSHPgXTDDa2fRTSev75MYUAfroRyKnzZfLVkTToMtZDgH8cfW2avmpToFJUbLBYMcsj",
  "key10": "4TvxjCXEsZHMBRumyEUqNrxrQrwD6XTizXwmQogziYp1ohMa3GcrJkheQC9NLKhbKzfaGLbhgvAEVYW1BexA3Yzu",
  "key11": "5BCVsFEVhdhad7CJRdP4uHztv7eFUhQybbw3VG1FLWgfwfvaCP31DVxDkzont4ntTgA4sPeDfZpEXHRG9V1gkXdj",
  "key12": "2EccrHZnr6iGJNXmc4ofeyuopUcKkTsHTnmA36DH9qnrTSY94T1fYnmzYmwjqiaNpRAErZprqoJnYP7HWLLbhJoK",
  "key13": "2DHQ8t8zUHXRSfWZDuQ8PUrvYNg2nqjvgmUvSyeQMrYaFL774AMAJLbGJoS8dEMBPMLxKZvRLrqoaHua9WqZxkPU",
  "key14": "52tekxnrRDihv71UQY7a9jUkCBEYHmoMB8wVZ4NKTAPCGPGz7WNuZKhxA85M5ANcyb2V2NUVxZHbycKRShWM1j62",
  "key15": "4fHkdD2qNNsaWs2sFGG4x9BNZstHkjLfegKToWGgHN1wG49T9YwzazMs7egtA2XRe84N4GnJHNwRmGifcnbPhQxb",
  "key16": "56zfEBUobHYDef8BqWYeWkvFTZh86uekyxnjntVfoaWw2rU7a89nXY16r2x7CX35b5tDqybsNLLHSSXoCe96k6qg",
  "key17": "44XtAex6BWr9EqTH4d4VzP5wSCRM8egi2EcgKr4odk2UZcGJUkrAg45xfjD9MCSv9HydtfCx7RJZbFxwxBFB5XuC",
  "key18": "4a2wDy9CXBwcn6tknKcHxp6m6ryBcu9s4EUiTQJWNexGFRH1etmmAH56BZFgfnuchdHiDkbXbgXey32u2p2mT6dx",
  "key19": "2pDrEcqckbkvFuLxv9fDj7vHdFCksbBaUe4a7mxVDsZbUqpfC14HSW84XxRs6pjNBqcRYRLFsJaZib2TmEL83i84",
  "key20": "4mK99NQ7jXYQpp7hbCiADKsXedCNH7rRZGg4DtspWeidg7oNTZrHfGcKChJ5gWriA75LFK1ECnpb7TM4sPstZ3Fq",
  "key21": "5o54d42CkPu4Gy14BGPiTk8V8pCaMvMcfr1DDsBoE5dTJTBk71a4bcyTVusAkkrdgugxZyJgrcmTDBUqtir62UW9",
  "key22": "4s6qcSwimjfG3icL61JnGPXHtfaNCFfHLwMpSV8PzLYdeYbesxwnmJUKmXdFygLuouyFQEPd2zxncpy5xKrRnvvJ",
  "key23": "2pppacHAoiq9EEk5w8TDniay1rtmTa4LqYYyDNtWrSWszwFsJVBQjED5DvoexeR5Voxm1dzrndp9C7RTVTXWh4Mt",
  "key24": "4N5yYBXHcVPp4BhCkfxv7z7y4dZc538gginNXcGYqitVTEivVK9qhQJcrJo7QKgCcSjMXKKfs2ASujukL7u4Sa6",
  "key25": "3CjbJjkpuobdYwtkkNJ7SnYJb3pzPssxuAyqjjdSLh6ch8yWr3qnv5K8fWAPZ1h5Abp6kYPJpLNC1jPmmryND6ZL",
  "key26": "7PM2sCbuU7rfbnyoUKz2hY2iVzNPN3nAtYidmgpuSKFgceoWvYc8f7RPufxf7LpNhUGdgVGJeLSHf9dD3sTbzC7"
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
