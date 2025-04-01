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
    "4q5o6vfMRJ6LC94WqcuWNbi1kCL55qAVRVhR49oQEnkh1uhwL5ihxfkB4DgPxPJmnJkHByNVxiAjPynNQLgngeJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46a1MhmioTSRgTjNnArgKkuiRxw1QEPyWVeX2sNBj5KCKzSwnGb38QAM5uZiguedg5EecaUkEA9i5REJPJmQup7B",
  "key1": "3VPyC7DEs7SyupucGDvQHUimgnoh5FD4Tz45NEvV6p8Nq2uCiYSjLHgqMk3MECGTne37Uqi4sfwVcLQ3653UNXTu",
  "key2": "3ofRkbpDYiHyZxTP45qKvjjSCHskDnjoSc5BSLoA89DYMqUQj3YSwGsswEHp2eVc9BD7S4dFQ8PwT47xuMngi6sc",
  "key3": "2mNma2EmUJbam7s5M7uyGVS23PeGXA94RCc21XhCM25NveNsoaRoxYWEzZv9BKoAjnwc5VAMvaqYc5wc2AkBcf3k",
  "key4": "2nLCpjiTSBBvT5Gaxr6X48MaPds55Zvxr2BKYuGMhTJ7eLbMhcCLQG99BvqRuGTSWJkDPjvyXu58Y4XzXuZCRYGy",
  "key5": "2e5MmnqP7w2gs1QfJsaKFjxJoYAXcCYe7FzenUCwjuLMzfpkieDSbeo7kdSoMWaGCzHcHPMobX6kAuEATV9KBaoE",
  "key6": "5LQQU24KcxRB7uv3ZnEGv2v9qCbHq77AvxJGP9ugtMhcbSm1nyh4QLnhCDb4JrJDgSYAkGBkEWGJsbQRArVi7v2J",
  "key7": "5iDTgGzqSrwdRan8o7HGasgCE7jqHjRfqt86T7ycEvdffWaa5cVVf4L6qZCqqNsqWtQaFBNaSfuc5sHMkUuuYGtR",
  "key8": "5wUXzgbesyLrqXi1VytYW5xVyRBRnLGRJrxVbXy2j4Gbm1AAkX8YS4DNroPNJnJpXuvXQ7BKXsui77qmgyj1M7Yb",
  "key9": "2DL96Bjai8qhm4HpSCZxei7QtMoyCQTgQDKk1uLcXqdNK8tCSZxFtxBPbGTKNyZsYGFRyARukbAkh1GzuTEz99ow",
  "key10": "5ANJViMTStvjqC2vgBY5YopZdfdPN5ajM9xCeh9F4V41BDiY9S1nuqz1fWmccMH9BTkofcqA43brWAFwMG6ccTAT",
  "key11": "58VHqZ7Hn2RxbHYA1gP6SZKHo3ErXkj4RficLEkSaUX5oD9XCmxsvov7yKTMZqGLHWvBnJWRfSAnBkDMQKYnCdCG",
  "key12": "5MUHZcSg6YCxAUidTfmJe4ndTiTqFK9RmULr9jMsnB2wuczwHuNCJDMwcTRNeu3y8Yi9rs13GTDLsPFzwp2swoEU",
  "key13": "5ed2RLftWjvqJBAqZmv9LiQu1xenTkDsnH2VrAAE4AM4WnJceipvZ4qjvDTFk5y8tqTo9m4zZsM9p4p5yYp1SWrP",
  "key14": "3hqnHHfgJrd6GmMZUAtoYNvENYNx4VvrneuMeXvjG2Fkt4u78qv6zZiBeaCp3g3Ksjn6Z9wSc6SgJFqhc4cCWmkp",
  "key15": "rJ9N6wnGjmJKy5MExZp4ioNi6nGYknCwBGSYR8Ui8HGhpAywZNHEg5jj4nCc1HsC8PgmcUMvw82MuSyToQpW61F",
  "key16": "3Ns9FbZjJq8ypb3sm4zChBTZNui595ZG2iG4vksA8uEKTJrRTN6te1kdvhcvdHvavPWHFomHNexAsan5La7pwoC9",
  "key17": "3HbhGYF7VNA1PBQky3XGnsKPC9iP3NPtgDuYd6zhjhTWAmKXmVixCznHiGR7QyDdk4EjJt3hK7zCjtKxrEpUpZ3L",
  "key18": "1y5EcdjMpGgDu1nwMDaYPtkgMKu4NRjPjUY2VNSEsEdU2LBRbFRh2VWgFBCSAJaaJYCKH8unDQTfEsoSpWqTkW2",
  "key19": "3Pvis81oC1SMZxiW16SBSwjnqMtxzu9JpgnPgXVWVWkEaAVqQKRKBDsMjtdf1HWUAAQJK8tfP1hdNHDoJje2v4tk",
  "key20": "21Zhwre1ve4UVRd1oyKVfzcnLsQPwGvQpoU92dgjTQc265WXBG7C67oHraDzynVA7wS1oboMuS7DHS9HX31ASaDf",
  "key21": "zK8R5Cm2iZ6aMiWVxz4SEYsGzsoYTkNvs4qvxdgaHe8PDXyZmXDZtUFKLU6o2Whkkr3ZkrPksZhkVdxEVyxdNNh",
  "key22": "5ERd96yUBGFKZVXyK2RCyF2SjkhjFncY1mQLv4ztLnMTXTLbHF634hp2m8TNNqAh1g9mtKTtnyn5f2Lht3oA4141",
  "key23": "2rejDEktPiuEbS83DpyNYxR5dsEJskKTReNyxgpUep1giM2vG2EVxKJGxevdnkT8qkaMyhGS2zv8jgdZjDaKRbPp",
  "key24": "3KKVtYdMvkTM8NDpo9KwxdPdudH8fjCSjYsMYKMXrd1Hi2MjgCitHx1qMxtiP8qEPhnwWprAuAqjzjnufCyVBm2d",
  "key25": "5QryLbnkcxP8o9QoQP2X9x4k9WV4xspshLmRoyzh4N3mVX9yTXChGNhK3gbKwue3vWUVjXnMD1uaLMbADoX1JHCH",
  "key26": "3EokSvqSHnXnMmFVEQVCMKcKmFsYDcrqWdYHRSKrarrBVh6DJTLdCn9vX9dPXyhUPVzqxkoZRycefaeozYfo2Cdr",
  "key27": "2ea2LkDGVzZ8k76xEFP1HCJ3RWexCTqdmyLhyqrZfdwpqhBPC98KigQbcEvessaT1PgagsJFKE8KsiAvwa3gynPJ",
  "key28": "4tSAZqA7p6i75q23oHRtiLRLH2LLvyv8k61VTML2gzdokvPinGfQoETEwRgng5SE3zY4PcBX4AbafLFAapr7hWDZ"
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
