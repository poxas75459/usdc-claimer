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
    "HDSXEJSQj6se8dM1XBMuVkJakApvVYftoxSs25uaeVDhxaUN8WRxcXWgAf1jHWuNom7Rx3pwSraWScUTQNHsVTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24PWryTEfWC8d5Fdq5C7w9fUVDjBSTS9ykb7MeyCEKyZpDwm7xCwnEiQgRvFupUcHhtjcsZCq1mvjyxFNUi8hRQ2",
  "key1": "5iNqrBLxNf61hth344hYLjDteTtytEmzouqF3eoMwAQV5h8UpNjqUdhVFVZbtuiPeVakixFZquUTa6GC1q2ZQGRb",
  "key2": "3nndRBSGXm2cnMdHcD5ccoNmaEbtwfY4RtJhpdbQebgYHLDyXBfp52JKoXwpD75gk8ooS4nMyDHTnsUfBzPzQ3Ez",
  "key3": "2U2ybaWvXactjGTehBwZUNT6b8wbzxD1oigJp2mDx65XEawyUHvf5QdLK48xzyqcYK4u7xzExEZ43NHCExLz6nsi",
  "key4": "34FEJiXzpfNoZzyvhq4Nuo7W7ok2RiyE82KZPgT7TePaJUfSHWpubE7rr5HmmoymsHsVNLMD7YzGSLQfoAC1pTZo",
  "key5": "2mngtAHhQbYbLV2qSQZJghT6Hx3qDXxZVf2hzQkuF44NU5ATK1ngXBDUVQYVukWkmF59ujJdBAw6CfZhghTv3ezV",
  "key6": "3PjMU1gQG4a6McW1R3BhYKDuBQKVinUzMfFa9YYh8tfMNhB84oxSyNYmr5WgargLMjsBr9kexAqApG42baedjHXw",
  "key7": "5LeJbUwcaQ8eCSus48yM9yQHWtEwggWZvV911RrTTLaW6ej1x9UGkucexhGJn2hMVZFJDxXcQvc2njsaws1tKm2k",
  "key8": "3pXd5o2QFW3nj1ySWvWkYp1EkkADM2YuvEcDQUFAkeGtBZmnBvdfZ29vk41wwYYk5FzBrgZ8jqVSGo2H8LpVhXhA",
  "key9": "2xmSigzitkHRPeFac2Mx5SAhUW32oiCThKFUbnfSwDdPkuUgdNsLiVbdpMCpC4N5UV8SJiu2PQPvyp1wbptqyf8c",
  "key10": "4prr958hmdo7Pyh1gqm6gRGjp4vvauwxopE5LzDHWvvjK3yZuxGopZA77SDBLh9g75r79Jr14LVrJaFPfvzHd7Me",
  "key11": "k5XUeia6X6SZLTQoBNm2eJGCpHkzHPmuJSagV4Y9eLcPQPvefstnJHgR2YRiQMAyguQhqZBo6Qz91bo22brVvUV",
  "key12": "3PcfXmC8JuegD1zTd4tkVfBHgy3wWyfWnmCNyDT9Gpvn7hZ3AxpT8VVL3rs72tArvXGJXgWzwynQ1c5tzEy8Lrbu",
  "key13": "5WH4opzygxSnhEGn8GnivSXsfiGLtpYXuzwH9kdeoivS77SVCBvtrgDEy3NKJ98qmp2sM8x8JJBaiqsYKexMtitx",
  "key14": "3QM3423NY23jcbg3SgDgUz9nE5T7vLr18bNaGYcMHiAR1NxzH4uiGHPdv3ngNKmZWTZKQqREZcjN2sbgRTH43EVY",
  "key15": "2tKRiGbucrFbRNAjqtxbFBQFkTQe9iKo6VWt6kzd4EafB6BHr1t2o4rvBTADCWqPu2x55sdc3LTxS1oszNFBoSxE",
  "key16": "Q8tSRvvkvjWECLBrPc2LxGoBnDfa7vZ3Z9JRLagQ6LMck4tGnvLtUka6da52VQe1Bkg5M4z4pY3f1ptev6kchEX",
  "key17": "4soaA8H3fYSf4Xf1xEbRnehoewqx4BXpF5SgqVkZds6ZyvGyCsAHbjobMkTtgJ2ZZENFmRbu8hq2bS9nQBdDzbZq",
  "key18": "2TmAf7BrRvRm9WBkEsxXYGoXv8qgvHqHUNE8h7QmAA79HgRMCsnuncDmawagfG3iShZq6BqRe3LDF2bJ3xyCeke4",
  "key19": "2uTBn4kSpoXjKy2zNfxks8AbDQznAd5sGm8Rb1xMbeXnn5PWEdcdwLh9uEft3E6FkoJNAYqaE3TwmnvGyvT8e1mb",
  "key20": "37vLbTgMReE4HQRgRFAa6NaJwqCGVduuU3YkPUzbnrmte42pT1Qg9JXn4Pn5WhBzVpUQ9Bnz48EsKiqt966r71Fr",
  "key21": "2xYEYUZtYaEkPmkigP3HrG88yw5p4yws3WtktqpWf9zStq4YBB2oShyGcKP9R7npSNKQ8hL5edreDtqQzSAthgDU",
  "key22": "3z27meHePzCswxmqLggBhp4PsfaNTVt62iv1ER5BLhQP81hhoEQbGjwd5BkPM2fu1skw692uUiTo6apaN9nTT2kd",
  "key23": "3xqjXjrr5ZGZXwwGog1pD9PamwmYojZFizTxjPc51pwFdrBR2Xkc2H7E8ohG3bFbvdCjESTmuGo1yNwVCtXjrTtC",
  "key24": "4JCHdHMQVnqWfsndXCPeN2Jxdf1zjqmC1toow7ny4PwrcJt8gNFJ7PMBfjTt591u5VH83nCj6JNrv75KUnqLcP8K",
  "key25": "4LPErQSf6vzSZvMWMBfwYkgUumhFRfzPVYrafomhh2XFFAmVec5pPjBnSdUHHnnzUQ1mJr4mYnb1ZpEaFjsy5UWq",
  "key26": "2Y4S4r4RYFHbcRcprdiSGqEeM5TRwMMWBbZZHjDSPQYYosny3JdXcC65BBioNyFhzF6ogeDgaaQTaEwK5MuV6YPv",
  "key27": "2JA2ZSLpo5ofn8JBiTWeeJP7EmxRZeHqgpV4NjytNBjgAr7Donpu5p6yBj7SgiRjpAVRjAVD6BQkC5rcLcwhsQP4",
  "key28": "4gVWGCXHwGPW9wat3Gb3CLwtugzRbWaU5PBPx6eXzBBVATmd3GaZPVvLBZri9ekjqJEXd7AhMhcmZSG1fzdCnQYp",
  "key29": "2Fq23QGWYfpZtNwfP3EzrcF8y6VEJ95SLG3muao9TGF9JKxbqS1cWfxaTNwyg3xaDn4kBuEQfhiEBddcBMewSzXx",
  "key30": "eKVM9iY3BbrVa3BHEhuk4KLts7W7f4DoXa38jmkrLsLH4nDYjfitgZyGAieuzJaFybkjN8MA7Fcs1TY44BRTJ2t",
  "key31": "2TCP59XnnLH1EFeNDSbudfQciP9Y7RXt65JVDc2zah9Csqmuc21UmYJBPefkvNgRCZ9k2Kzo7NxdhLoazk16Za4y",
  "key32": "2CpLYmFnb7Z9y1zTnryFyyprcykYhKRBQkYWZuWixzwpZB2KJxUQcUjPcnwiHjYgjBB1GryLELKBssHUGZPuPuXM",
  "key33": "2ReqYnptVLUhjXzXx8NaLDYcbireGeqRBHogMi4sZrd4TzFdmEY5yMVXwqccwfBu4FmRL3GY6qduC1eYmmDXrTFt",
  "key34": "KRL8pWg7M2B2UuNTZxfLhcDebhbAYMgATUGrUkfRA3HtEzqh8EyuLh9sF4DSxk579gS5iLDLeAyT3pAYNbmF6Qw",
  "key35": "491oD9CmK4FmLdc3iwdzur9x85Tzr4zekc8yX4QxwUBvq9sc1B96S7ZQG4Qqh7i1kNHCCAWaTTtUbfxTx7yqWZ4F",
  "key36": "2tx3SjjxKQntaT5RFqJJor65cj4sFuXJrUb4EmWnoyWhbKhk9dwcrVhbiipFp2cweihpitmw34fJ78QEhCLNWdzm",
  "key37": "2zRJZJtXUzBSh6DY9pR5URjWLFD9Ao1UdfAujHJiXUVFbCex5uv8wk2eQH9merqGZJkfN5tU6N4xDgFdHW966ocD",
  "key38": "3SJJEFWA8Fxedj23h9tfEpfFhHRgrNFPMrWm7RvkiAdwirfR3iJLExh3coVoHLm6SiM7aBFETBFc3ft8xLH3YhMk",
  "key39": "4M9Nb6b4hWbfzBGs4rkJre8z1SePFGZWqS5DdFUJRiZJJNYRKMkFPYM5apvsu2arvTQQuTGWT9CBKNJvFQFXJs2d",
  "key40": "3QtpZHwPNXdi5MrXup3zKRbR3TvpMeGxuPEDrB2D37WaT2vFtrmMVH3sf8HjbZ3hhQkMfWJnGmgaxUM4EALwkmy2",
  "key41": "4okZ8FceBSupb5UqJmSLLq1LHWTdvJVnB4cgeXui2LWM78ZHT231ZVgDDG18yWqD97KTnT1NBS719kf1E8vPHaSK"
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
