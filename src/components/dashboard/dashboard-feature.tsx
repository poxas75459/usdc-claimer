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
    "2Vf4YTPsqZyKwHG6pnw1ZM8sFL8UiAFLhQC8qrryCqmtjqcdjhjb2XcLzQ5sP2WrW6vEo5D6tQusRCC1QkB66yef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NHsrq9exh6cvfcrb4ySUPqjtAf6wavWAmhQYtCFY84UPxa6BjDdmUbPUXnmCqUuvcW7cr9dzuMpvu6AdKm6K5AF",
  "key1": "dspkQyEYsEghVAxGrq2VMqP43nyyjDCLfW1JLBd5yszCqcu1S1nGSPbRmFEWjf7hg1zLnKfMJU8pPcUZ6Ahid2Y",
  "key2": "4nazn9i4xUh6RgwBynyArPuNysAqJJghjg3c2udu2HpY53QsfHhQGp7GQ2XZ5WPMZmcVR2zTcyHv2jevKwKBhDS2",
  "key3": "48mYELydPUCcgtMfp66W34yTUFuUbWcov9pCDpNwjGgKmW5JCCUoPtmyy7hfHvg5FBnKhU7ZMwvz3PCzB8cpPaHi",
  "key4": "67E8xVx294wEVZKZZMJcZeBQ1mxLajw3mLq4g2vBvdDBx5fiX9gw6Sr6tkiTT3G6hBfa9JDMxgG43Qr1rxgQMwYE",
  "key5": "2Vxbj6NNAW3awyHbAXGjmxGahwsX8z77W2HhDwXdxZ5GRpNGQpckUchSCpWiezwYkWzRTpy2wiWaXRWCJ1SC65Bf",
  "key6": "3yaicADYqJmus5ZhjHoZo7x4Y3YMXRtXv87ScAXAt5XWFyh8Zc1pzWZQ1UetWYrZrLiDLtUJPvW5YnBqkcggD2xm",
  "key7": "2hJ4gprLoTsmmGd2fTMskqAQh82Hfk9zP8uR8EGb92Tsvyu9oNf11KGPJngm8sPU9SP8sGRQJaggDaZXb6Jnh7Qp",
  "key8": "2maN5iZFXzob7AeMH8x7wwVujA1kP4jJb45kCy9dma7T5EaUohAmeZE6AVepEp2toSQhpySMSuWArEgVWmFwks4A",
  "key9": "2fQeVHxiM2xQd8ssxjdMoQVRLSLLYb37Em7bGBhN2Kubyf1LrhzruMe71irrHiUJzztiDCSrKPLVQuYhrPVF1WmV",
  "key10": "4Rt73zyoBos26AhuUgRKGTdemrwtYALH53d84KQtY2XtS7xy8XDuepoevCGymdGdWaF5MZjNukMPB9TNAzrG99ga",
  "key11": "2xVXtGXfiHonQz2BozCEWFuqdYiq4uSqtmp8PGgb14MVYrvD9L4GoJd44JmxR4uCmDie88brZjfXVbvFPPu5Kbzv",
  "key12": "3zLkDuKpcebC4qU2n7C2ATWzCx4UwHPQYKtcaHgWENpLQgyfcnTDL5t9EtoauRuHPNkfaK7RnZZ57y1LEa8bj6ML",
  "key13": "2s4Dw8ZN2jDu3C7hzZoJafCE4eefvT6rqFeTHp33AgM9cvG97HH6bMPRTifMaaXFeU3b5X73KdR6QYJCxEzxdarA",
  "key14": "5aKiWhzkuSNub7ndUVC8GemqddcdFygxdFQ16cmShkf6q1LbC3sdT7wzAjMFtrFDKjK4QLP7Ni2CiXYAFMMQQmcP",
  "key15": "4mEEjvCt9J3Ti2cecYmii8bfi7QCDJUBBdeRxqJeHjTpjW5hnwm2ALzNE91QMddVHu5KhmqbAfSFoceoxFAupPwR",
  "key16": "4WibP3WsNnfWEif6Tqb8RfL1atsZq9MCHrRPXyGz6qdESeUSLj4ng7DQxcFbvXiiGEeZFXAJH5d2uRBFXvakonWZ",
  "key17": "3eHpbhpXWeyfLusquXkrKMqvP2EjHXYgk8ySSXKFPLUAjfw2stS5odo6iBXoNyrsGrEosybdDkqiR7rzyRCTvDAG",
  "key18": "4rqVSvarn6xh8dGg1yiNYHY7fNx7KB6K41WFoxan4HZrh6bKteLrThXbNECxWd2KmvWrn1zydgTcwHz6pFboFEyR",
  "key19": "4RiSVJQDZji5KdXpxBoEgKvpvgkAycMWEy3a9mrytMd4jmyzVZ2DR1XcFkbmDY8pkctiaZDxmac4g7iH2jenBYGg",
  "key20": "32Nid9ZQGTng2sRUEY6N9J1uyJP9LMnA3thgeHpdN5NKoAnDd3cqb3QW2qf8FtS65mKRK35D3jYmPuKsPGMNi5fe",
  "key21": "VZra4TS5HzMFUhspgddrtNLgMdMbqVHmU1kTrHtM5ASAdCZN1zbxA5yHjFNFQ7Xvupv2rfdgRxmpQeTyL6cN2zz",
  "key22": "3iNbY2oJh1QLVZcioBVCfop7aBhPjNhzBTuvDDdRYDzVXE8UqCQtSUYDTSs1Ct1qnyUWDgNyJzmgJ82rAJKaq6fD",
  "key23": "4hyeKTW15XwwAS84Z6kTfvqkwBDYWg2j3yS3zPnKduxsqR66Gmqr8wk49d9oEo4g1Pn4EWp2KbDFK8SNQau8M7Z7",
  "key24": "5X6w5C29xn5wT4Wgt4BxuEn67eeHbrTB27UJnof6jX1gXecQzbz6QpZrFuBLVTt7ZNuuTXFvsDsnwqHg2DDg2b9V",
  "key25": "5TWezspWw6PE4KcEcJ4LMBA1GifmL6SvQowtupxX4XcudRCC1nSNcgRE82d5BJNh2eGJcGJige1HYpfXt4cFwKQH",
  "key26": "23fYMMtsKtKzXGLXHLQAA8dYkaYc1R99Vc1d2s31PApf2xfgMgUNXBRkAfsWBZE7Ngt1U1Tckp8MFvthbXWamvAi",
  "key27": "2hHDUx4k7tuUniZb4zgbkFALCWnGJZMdc12h1qkeWVYAxgDtJdpp8p28tzRVjLJsSoTUZKJJgfBhXUE4e1kPn4Sm",
  "key28": "5fa6zFVTDKCozQDPJhbAruMDSAnaDfvJuWKmf14RGp4BDWNhiAyJiW54TGStj8SuHadAgfGZnuCHt8jradojGVxk",
  "key29": "TmN5p6mTVRac3dBzjV2ftpqbXeHm6GA6KJqBsYb91AVJ8PsMVDnUAaYyt37uUNf3rFrw6yrb7cYKkrrhoaqqwy8",
  "key30": "5gbfXTGCSwRXUFgHzG4poXnwbT2BuA4EcoeKDiCq6zYd9vDJMopDcpcpmnu9gyoR4xLfczCa5ZiUF5rXon9zTSFx",
  "key31": "3cejEmT5MvaXUM6cnL1pp13tBmovqkrU9MUnQtcQRyCzLHhshMpMbBkfyNNmz9rhR41aVSjPYjkFZGpwQSVqR2aG",
  "key32": "3tXHmUJ9oYFjy9drrph4k89uZGptrwNATDtAqR1AMRVaLcnmEgGGADSKax2Lbv271ZcbV3JwwqkB2eJ4dkjg9yFe",
  "key33": "2NyzX6e1AXbdnbH2DNEMR8T9Edj9TRCvpZh5DCFiovzjH268R9GHx4GWhBKWg3WNLhaDbmVzzM3B5goKPNYF6P2T",
  "key34": "3hRkF94RJfXQWMZhJM8qNpWHKswmmzNQFt7vTJopWHs3cshmkJX9gwVPtJiVJoT7sGFWDKMFdznMnKm4xT46pFjC",
  "key35": "4QDVZVNjFY41NMJbFKcaUjBJQXvXB5nHF7TLgGFZnqA1pPqBUjE46Xxj2XuFHSc9fLMP9m8fB6EkLEFnpVM1zeyU",
  "key36": "ZbjGx2KNh9N96UMTGeLidr3AomY9Hb9dtD1sAZpKYX4VWVDYtoxevMGg8Gcwby9cwQMhnBLwjTQ9EgigydkpVdE",
  "key37": "5viEHAJ8FhorGDXKm2Ea6uSApm4QhPbZvmFBFPgtq2yuT6e9uvG6PGScfEenxf3cWMFXe7JfRoaGQko5fmmjiWmb"
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
