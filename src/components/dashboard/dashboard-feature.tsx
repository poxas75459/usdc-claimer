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
    "48LovCoP78kfjfKPphh7NhBq9AhMBDyjGa1D87gz7M6hdFhcWkkpacV6upHZj6zRzE4aBzgupx7jdh33P7qMBV1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238AL1muiuJ9eK3o6mNmDT84VXcpxmweZLvtCYXnPrvE84QnL68m6wXBbMa9Z1RShmJrvDACGAXDJ5K1ikdSDSFD",
  "key1": "3jPvifkcz7YTcgkSgGGMppyb7PYp3k7UivQokkd3G5qoTuPEHfFP2BRBFckcoX9RgzrTui2qgSqNGcUP45qnFu6F",
  "key2": "2dCUGjYqjPNyJBaPeQC8sWEYtESSBZ8uqeP8cYMMqLjctM5ARk9KCneHdJBCW6AHHBdAHEEnDJx49w5xW63YQSv2",
  "key3": "2iViBUyegXCdKoTBniuWgYJVQ3BH8jgj75qZ2QkH3nHBCzzdhf89qyQinnNnip1GaooKSxHRbw9ppGXQEgvurUPB",
  "key4": "RExzf8EmTofupzJ5jRYFsVThonNTcEY5oiKBSzUcGgk8PsT1jK2L8j3NU8g6ukpQVGDNduCWpAUwcSjaw4rVPw8",
  "key5": "VTMMWFj1J9sWkxh78D5c26ZrEtDYJjHHBqhFePhQ7TYkMQgZWHbBPwekTV1fuuVmkkxEtLSaBRtX9HEAju16yPF",
  "key6": "5GtDB4fyGMZ7o1bBgyeyapQRmGGVNopwiRtVdGdqeUqEf45uoi3YgpBbV1zyACLRjYGeBcgcoEVmwHeUu6KwcgXn",
  "key7": "3etYjdF9GKB5qFU1WFNXSJmRYN3nNeVkhJqSFy78z42KydoZdYoDPsz5AoZueBUEgbB99b5y8VmD1Z275AXFfLNC",
  "key8": "2Cc92SwJCRPoFQHaZmEzvbtrmpEQxZDFAFhb99GX1W8rWsDjXYtfwGmWKkWN8ZtkYvBsuu7BCrSu1WuccgAdJqaw",
  "key9": "2wfLP7UdvZJtategw52fcxizWGv2rjCEWGjaPiLv1FLjSQvqVPvrBxnv6dvRmgXkxQSqyiuucmbAMbf8jNPFbiF2",
  "key10": "3Vgvpwbfb9hZ9wARtu2RSSPnD7Ukk6gwnbkuPgxA329FhkUosqkwEEJP4A1amAp266sgeu2jc5yeV2aJ71nMCWJc",
  "key11": "NWZJDXsDHCBzjobwQJLmLhpxddBMMoeeakqeWhkEG2rcmV6zBAo7RMGcLHHkkoNed5qGaqLPXfo6n9GeJQa45mV",
  "key12": "afnCM7gBkKTPXqXFonp59yeC33Qcw6cQFafJtTvdGLmC9M7PNC7TpeDGF2x8JAQEbCj3knyt8MAhs5T7gRpjJHV",
  "key13": "BYiZaMDLX3w9PJG29LguX6Pq3MHXTQDe6oz6DXueCddkFiCewrcocnoTiyaCcT6KaAUCp1rE5TwtbqEPx3f1mcZ",
  "key14": "49caQmPEGdLEUT1Ae362DWiVemkqjghimgmYsGVLjvx4rrPgk69p6CY6UZcMZd6eVBwgg5prkKkVraaKXtDNwWUn",
  "key15": "3i6pKg5uwC1odpaH1EzX5KibvdobZqiQ3JnRVJm4FTYdpGApvAGfmM85nUyVkV2R89Lxm4sqGWgj7hd2S2Dk7PAj",
  "key16": "3XQKsoMRnWSNo5JY3bsU28mm8T2JWLWPW4NrDKXrngijd7TeKg1LKbPdUiZKjyABgkAb1z8FinUKQVuajo28ARAB",
  "key17": "N6UQsLe1UFBFdXj2EGsLyBSLzgNf8C4DgtCGmJDtZWLsXtDxqwiY9PsXwmgrFdZcBdUNnwszpMBXnomgDjq9qy9",
  "key18": "4HS3Tn3iCGDAoXCgxxLP3tSvVxeh4r8Qu4ystwZgBbxVqmnj84shjbm3Ca2sdThKz2Y8LAmz34PmnwuhhLG99TVp",
  "key19": "49kpTQBNwLNkqVDQ1FZR2AskujugxoieSmAYisJwFuR769Fvsp3hPtxSNjSRwAMAm21LcwYHHBUzuxF1GPCR4dMb",
  "key20": "3BoJ7hBqrhibfHBqQn9KpUDDQ6h89r7ng4upeyaLiFK1SQDMd1Jkf3C25KiENQvJNgPYZQEJPYYVCcVsMsPwwJJ2",
  "key21": "4YsyUGgr6zz1wNJsXCSdYBmWAHUXpefUX6rxcebB9PuLrPrqXK8cfQYLSepvjKn3Lh84egY6EbUtpTodkyMtud7A",
  "key22": "QegbifeYdizhPWMED2UmtMJ4gHhxfVYXU4fEie6j6rbuhzUPBnsTg4qAmXR4TAAuwrcohX9iGwEikFWPAbCxs8f",
  "key23": "4WxQnrBHmiMvtbi1twJwXn4Mn6rpFYZk4b1Hzpo5QTXZUwrUwGaKLHKHFu3X88nwaajwX1r5HKpkfTLB4brqhAjp",
  "key24": "47LsumgeNbPW9QkquUhbTYa148aXFuLsBPRB6pSdXpxb82CudUYGyB3ouXrrHw93Be3xZ6GC6avedWfUZ2kCma4M",
  "key25": "1moRkFhRz93jHJr1qE2tVQMhqjeqxJacgDsy564fHE8dZ2AXfy9BVfCS8Tgu5ckXSHDBwZM5TW9uYXrfBP7opvK"
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
