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
    "4TMgcJpT498qff3Z8aFaokeavKv41zS7s9fzwwAqmTZvT1TZZRyPqtakMmh5LHcf2ggqSgohLA7UxuaMgpGExXCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W6otnWXCoyrh3ozj521L7yKAVefAYj195iMdZ4yK4sKfqrWmYSQqcHu4NEjAcrSdhhPG4oKmMuAXQVa15ZDhCK9",
  "key1": "4HkxoNFTazWZwiJ64AdhBcg5wVagTjNKdx2hCjwxMu91rEEqUSXoo891b96MmnAZVt5DH7d5t2DXhrSAEcaoj8Qz",
  "key2": "4Y1HmGBsqqgw9AupJ97D3bGAYpMGod4MFJArczcMDfPmYzLjPVCwbLeu9U94cYVV29eMPSbep8NouG6QYveghF4s",
  "key3": "CLXRJJkTPkvs9MzBckrQosHksZUPGgWR1R3aUzGsVC75BpWjhQsJE1qHVruFwSDc6KLKc4pCvLUse72pHTBKQcC",
  "key4": "5zM7v5Qw1o396bePanxTdUGi2eveirVD4Fj9yEABkk3ReMtYWBhSXTDenqR2SAUQ1vEKVaPYwQcfX1YVtys1juDw",
  "key5": "2KiKynfo6jHJg3iNXca3rHVG7T1SQ85vdufsX9HE8rpkL5fftJB6thZ5h1mjb3tQ57FYG7fjnTc9VTi6dnsxG5fs",
  "key6": "X2JoJ91vLGVbaQts3GqBUFdjD1VExATK5rtEiNjwyhqcufcH62Huv4wjuZReDGXtRzGKjNLBrouiKTbnAsQvFky",
  "key7": "2igw7G3cXjVwKsgJXLzn5kDzBL87jhsyVfRAUEdQvhJCKGyVLTEB2GCewNqSpNkjMcAdvRjW6x5983Xfenso3FEU",
  "key8": "J3NYjVNojVmd7k16eu4S44TvetJph8kzLzV1iBxirY4m3YXsk5EMRvWUE5VMxwwdQmbcFb86UkW9F6CnJpegPJQ",
  "key9": "3xJSAD9gFKBfCfs14HZdaDs9UJj4iLv6hGqNDYFtCjcU4wXXXXG3zQynkR53vAxk4QBEFiKgRsjbFPRBXyQPqFUZ",
  "key10": "3ViEeP43XPXzVNgPe8oYCyUfdVfuFhP2TsH1TtbjxC9aGRXK7NvVYdLSBJRUAA5jSx7dSUkimRrRktCTipY8PMix",
  "key11": "62b7XfDM3XJQsxoqbGS3HBJCQey8yjtTxxfeyZvtD8x61JiWyqfdJjb76KuUNXp9seJYJedLQtSo5DbYMt67YNjr",
  "key12": "XAKeQuTQGpbDUEpQZLGB3YW4fCfippGpkFhDiKgX7d1mWVhgNcNLDExbJ26djbNFtMpjqx258TfzW2RZWqo187L",
  "key13": "QCLHMPzZCnZWSg9V16eVNVAGGQG1owd47Bffb3ZVS7izXUmVDAbmiXvWLNCUDtt4YhzEwwadj1Sy23LSvDYnTRb",
  "key14": "5SCnQpewX8CokyF8rSuBKsnJGELvnv8U6Gp5hJMSSjyGWdCxqV3jw9KiFSW6tCbYru7QWTPA49iqfkJo5PfkuLEH",
  "key15": "sfCN9TKSvAcXAMa1pxyQ6TFwycoqpYg4ajwPcMqpLJCF9iyFsqshzXh9x5RdgHxbK5DZJEonJkNGPMqLhznN1FN",
  "key16": "4Wrv3mugHicEPzkdi9NXDJL15Tz2aHEeqk4WtxDWDp76Zte5jtngcPgfZ9rBa7k79359RWwZ41YnBSCVrmQDggpT",
  "key17": "4JAfpj5QM6px6AN12nt3t5NtZvvbrmPY1GdzembwShtnS71o1TfdPdiLDX5Y1nRyRHKkasgdXW8YFuaepQTqW7uh",
  "key18": "5mUuCtTTc1Jji95oog9YH19wR3EWja9hgoK2K1kLHCqwj9VCQmvrQC16qn4fPYW54JDPp3dignuMgCGCwuv2vyUA",
  "key19": "6597ddsqpWW3Py1JpWtTRTQyBH4y5ydUmVpJBPeCdh7yjydc9TRtZVoiQ8vwpvLLStzXsbYTfmiwF7aaJ58Nt3cu",
  "key20": "4P7bbAxbGopFHLKQkUdYqEzenvdtLqgCto3gfEz69SndRqnt7je5kD9j29SL5HNej4qEYukV6CyWFCc5iW7EDwy6",
  "key21": "4f2Tycc26hgseChRxB2YTHJHy36UgB9RNNs3mhiv1ZzgesDGVHUuxN4eak8rSnTfbv3ripYdQvKKt1aaeGRA3hBc",
  "key22": "4KrKcqMg7dryrAj3JQk6uBsQ9jUkETeUUmeYoyTDNfAcUDtntTZaQW1zdykSmAr2ir7cxbbJgj4X5NdjUTBfpAi7",
  "key23": "2HSdbz5ECuanNZywW2aXAZYGUZUtwW4xc9qWq2DugVE16WAwkc82gLC1LUpQzF3NixHVxFBseSF9pAdZtMS1GjLk",
  "key24": "2kQ5H1mkh5wWMgynfw34qmWC62dxpDgdsihfN7JhLVQhyG6snXcNsMBWV7edKQcqzJbWHMx44hUqFT2NrbNNqESX",
  "key25": "L3Wpo6ckfH9Ek7c62amfEtNyVdsKeDwdj7ynTdmeH8t7W4fKRn6ynqVzUeWgUM3nkhihiGFZ98LL5jZ1gcxLyYX",
  "key26": "5GSC9T41CAFStUryf1jhNzKhkE1Q9kmRoGvtEnWqKp6PWPfK6acngYpyLcYgcqHDgo596dT9g6ryHFe3TAaN6Q2B",
  "key27": "2ZpqhdzYRQ2Ga8SS1gCQvnPeDkGRtiNA7QuVvQWB1L2PJeVgAygw4UHBzqWiZWdA2f3eHqAbdhRYmW4T9krxvSbp",
  "key28": "stU6KLTMtePDqcvRKCFmSbmQpP88FcbEMB5XxGjpCdKZHtTyYqc7G7KCU2WP7mDsvPWBexT99XD5tnA2vspydkk",
  "key29": "2BTxJwXWwnsi3ScYUr2vLezmzp19KrgPgx8ACjcamiwdXgYSzeidTdp4oKhxkHZviUTUQShHm42KRLYbPCLvfmYZ",
  "key30": "35KzyHjLnoqmrsa8jpXPGcBwH6GQsqMw86gcTiDDp7PpTaBToQvA7U9cgv8PG3W4nCqZfMpt9gDMbuu193gohQYJ",
  "key31": "2gwPL86TBubKuX632sFrvDrqB9vJwEQ9WKXJWmrTzXJGVwpp7mHMVEpoRvoPgtpg1BQv1YuQE2XhVkNZHeCGFdBn",
  "key32": "wJ8VRKwtuudsFv9DR2mhG5L1sW1eSFsti6J2qBq1a6hEBeBsRh1RChfKTPgvKANs4W76xJwy4piSxSkm2ccHuy2",
  "key33": "2VU22oDSDXkzQAEDc5gGo2w6yQzA34xvoHqfVvUvrSTiMd1N8qEDtDahrUTc8LQGeQPukJBiV2cx8o13Hun8kZit",
  "key34": "tVjjfk3kPKBL6RcxsqXyfHe5BZzmMgV4dsaWVYWB9xqQCiBvqwHnpDN7HFveCPEa4kdVb4Y4fUSn3Eq8972Wuni",
  "key35": "2U7QaBp4MZeg7tLG8TA2NA8EX4tb1rS8vV9P7aHuWGCj9Cyz6zwxu9TwvS9FEnnS6bsAH4fHwx6kTwvrSGScQcBf",
  "key36": "3QREXLXGUjCbczdCRZxDBe6wQ1wLiPr8wsSSh5MjGV4cXQ7mVApaa8exVcNKiXcDg512zkvNG8qxb8KRmbddn4ba",
  "key37": "w63YqxJGzZfQhkC8reM8Vo6tDKDm2aTPGogbkvbLAwDy74tJAo6XeBQN9cbBCEi29MNkMc1tUdTWCBh3xmbYVUS",
  "key38": "4owHuJz6dWUdCF6SU8MDuBwcvvatqSMNQ4L9xQ1TYT6U9WPkWSjpNoEcWHChNmA56a6GjCtcvktto6RbG2ssjUs9",
  "key39": "3QGaaaQ52jfShKjaeANK8GtNWcaJECSZ7w2jmcpNHu94qVSwzuDQgNLzakeVWVeT8JmgHPtP4sKJYWSaFjrZ7gDq"
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
